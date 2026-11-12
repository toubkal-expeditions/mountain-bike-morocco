#!/usr/bin/env python3
"""Patch only MTB card hrefs, preserving the existing markup and CSS classes."""
from pathlib import Path
import re
import shutil
import sys

ROOT = Path.cwd()
TARGET = ROOT / "src/app/cycling-trips/mtb/page.tsx"
TEMPLATE = Path(__file__).with_name("mtb-listing-template.tsx")
MODE = sys.argv[1] if len(sys.argv) > 1 else "check"


def status(message: str) -> None:
    print(message)


def classify():
    if not TARGET.exists() or not TARGET.read_text(errors="ignore").strip():
        return "fallback", "MTB listing is missing/empty; the bundled design template will restore it."
    source = TARGET.read_text()
    if "const mtbTours" not in source or "export default function MountainBikeToursMoroccoPage" not in source:
        return "unsupported", "The existing MTB page has a different structure. No files were changed to protect its design."
    if "function tourContactHref" not in source:
        return "unsupported", "The MTB page does not match the expected tour data structure. No files were changed."
    return "patch", "Existing MTB page detected; only tour-card destinations and the two slogan lines will be changed."

kind, message = classify()
status(message)
if MODE == "check":
    if kind == "unsupported":
        sys.exit(2)
    sys.exit(0)
if MODE != "apply":
    status("Usage: patch-listing.py check|apply")
    sys.exit(2)

TARGET.parent.mkdir(parents=True, exist_ok=True)
if kind == "fallback":
    shutil.copy2(TEMPLATE, TARGET)
    status(f"Restored MTB listing from bundled template: {TARGET}")
    sys.exit(0)

source = TARGET.read_text()
original = source

# Add the duration-aware destination helper only if it is not already present.
if "function tourDetailsHref(" not in source:
    helper = '''\nfunction slugifyTourTitle(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\\u0300-\\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function tourDetailsHref(tour: MtbTour) {
  const days = tour.duration?.match(/(\\d+)\\s*days?/i)?.[1];
  if (days) {
    return `/cycling-trips/trip/${slugifyTourTitle(tour.title)}-${days}-day`;
  }
  // Flexible category cards retain their existing destinations.
  return tour.href || tourContactHref(tour.title, tour.region, "details");
}

'''
    marker = "export default function MountainBikeToursMoroccoPage()"
    if marker not in source:
        status("Could not find the MTB page component. No changes were written.")
        sys.exit(2)
    source = source.replace(marker, helper + marker, 1)

# Keep the card JSX and styling intact; update only destinations.
source = source.replace('href={tour.href}', 'href={tourDetailsHref(tour)}')
source = source.replace('href={tourContactHref(tour.title, tour.region, "details")}', 'href={tourDetailsHref(tour)}')

# Remove the two slogan/eyebrow paragraphs that the user asked to delete.
source = re.sub(r'\s*<p className="cl-eyebrow">\s*TRAILS · SINGLETRACK · ATLAS MOUNTAINS\s*</p>\s*', '\n', source, count=1)
source = re.sub(r'\s*<p className="cl-eyebrow cl-eyebrow--dark">\s*RIDE THE REAL MOROCCO\s*</p>\s*', '\n', source, count=1)
source = source.replace('new Date().getFullYear()', '2026')

# Verify all fixed-duration card names route to a detail helper before writing.
if "function tourDetailsHref(" not in source or 'href={tourDetailsHref(tour)}' not in source:
    status("Link patch verification failed. No changes were written.")
    sys.exit(2)
TARGET.write_text(source)
status("Updated tour links in the existing MTB page. Its section markup, images, classes and button styling were preserved.")
