#!/usr/bin/env bash
set -euo pipefail

# Run from the root of the existing Next.js project.
if [[ ! -f "package.json" || ! -d "src/app" ]]; then
  echo "ERROR: Open the existing mountain-biking-morocco project folder in Terminal, then run this installer there." >&2
  exit 1
fi

BUNDLE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$PWD"

# Check existing listing compatibility before making any changes.
python3 "$BUNDLE_DIR/patch-listing.py" check

BASE="src/app/cycling-trips/trip"
# Avoid overwriting any pre-existing tour route files.
if [[ -e "$BASE/_components/MtbTripDetail.tsx" || -e "$BASE/_components/mtbTripData.ts" ]]; then
  echo "ERROR: Existing MTB trip components were found at $BASE/_components. No files changed." >&2
  exit 1
fi
for route in \
  atlas-singletrack-mountain-bike-tour-6-day \
  sahara-cycling-expedition-7-day \
  women-cycling-atlas-mountains-6-day \
  atlas-enduro-mtb-tour-5-day \
  toubkal-and-mgoun-mtb-expedition-10-day \
  atlas-and-desert-cycling-tour-9-day \
  anti-atlas-mountain-bike-tour-8-day \
  toubkal-cycling-adventure-5-day \
  atlas-to-atlantic-coast-bike-tour-9-day \
  atlas-bike-adventure-4-day \
  atlas-mountains-enduro-tour-3-day \
  atlas-mountains-cycling-tour-6-day \
  epic-singletrack-atlas-mountains-8-day \
  saghro-cycling-adventure-7-day \
  mtb-tour-atlas-mountains-2-day \
  morocco-luxury-cycling-tour-7-day \
  mountain-biking-atlas-mountains-8-day \
  atlas-marrakech-cycling-adventure-5-day \
  atlas-enduro-trail-adventure-8-day \
  morocco-cycling-adventure-4-day; do
  if [[ -e "$BASE/$route/page.tsx" ]]; then
    echo "ERROR: $BASE/$route/page.tsx already exists. No files changed." >&2
    exit 1
  fi
done

STAMP="$(date +%Y%m%d-%H%M%S)"
PROJECT_NAME="$(basename "$PROJECT_DIR")"
BACKUP_DIR="$(dirname "$PROJECT_DIR")/${PROJECT_NAME}-mtb-backup-${STAMP}"
mkdir -p "$BACKUP_DIR"

# Back up the listing if it exists before patching it.
if [[ -f "src/app/cycling-trips/mtb/page.tsx" ]]; then
  mkdir -p "$BACKUP_DIR/src/app/cycling-trips/mtb"
  cp -p "src/app/cycling-trips/mtb/page.tsx" "$BACKUP_DIR/src/app/cycling-trips/mtb/page.tsx"
fi

# Create all named static detail routes (no [slug] folder, no dynamicParams setting).
bash "$BUNDLE_DIR/create-mtb-static-trip-pages.sh"

# Patch only existing card destinations; if the page was missing/empty, restore the compatible template.
python3 "$BUNDLE_DIR/patch-listing.py" apply

# This project has Cache Components enabled. Back up and replace the unstable dynamic footer-year expression
# without changing page layout or styles, fixing the known build errors from About/Journal pages.
python3 - "$BACKUP_DIR" <<'PY'
from pathlib import Path
import shutil
import sys

backup_root = Path(sys.argv[1])
src_root = Path("src")
old = "new Date().getFullYear()"
fixed = 0
for path in src_root.rglob("*.tsx"):
    try:
        original = path.read_text()
    except (UnicodeDecodeError, OSError):
        continue
    if old not in original:
        continue
    backup = backup_root / path
    backup.parent.mkdir(parents=True, exist_ok=True)
    if not backup.exists():
        shutil.copy2(path, backup)
    path.write_text(original.replace(old, "2026"))
    fixed += 1
    print(f"Fixed cached footer year: {path}")
print(f"Footer-year files fixed: {fixed}")
PY

cat > "$BACKUP_DIR/ROLLBACK.txt" <<EOF
Backup created before MTB trip installation.
Project: $PROJECT_DIR
Backup:  $BACKUP_DIR

To restore the previous MTB listing, run from the project root:
  cp "$BACKUP_DIR/src/app/cycling-trips/mtb/page.tsx" "src/app/cycling-trips/mtb/page.tsx"

To remove the newly-created MTB detail routes after installation, only if you want to roll them back:
  rm -rf "src/app/cycling-trips/trip"

For any other changed .tsx files, copy their counterparts from the backup's src/ tree back to the original src/ paths.
EOF

echo
echo "MTB tour links and detail pages installed."
echo "Backup saved at: $BACKUP_DIR"
echo "No globals.css, app/layout.tsx, or homepage files were changed."
echo "Next, run: npm run build"
