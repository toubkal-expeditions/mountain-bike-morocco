"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const cyclingLinks = [
  { label: "All Cycling Tours", href: "/cycling-trips", detail: "Explore every journey" },
  { label: "Mountain Bike Tours", href: "/cycling-trips/mtb", detail: "Singletrack & mountain trails" },
  { label: "E-MTB Tours", href: "/cycling-trips/e-mtb", detail: "Go further with electric power" },
  { label: "Gravel Cycling", href: "/cycling-trips/gravel", detail: "Remote roads & wild landscapes" },
  { label: "Road Cycling", href: "/cycling-trips/road", detail: "Ride Morocco's open roads" },
  { label: "Luxury Cycling", href: "/cycling-trips/luxury", detail: "Adventure with extra comfort" },
  { label: "Family MTB Tours", href: "/cycling-trips/family-mtb", detail: "Ride together at your own pace" },
  { label: "Private Group Tours", href: "/cycling-trips/private-groups", detail: "A journey designed for your group" },
  { label: "From Marrakech", href: "/cycling-trips/from-marrakech", detail: "Your adventure starts in the Red City" },
];

const guideLinks = [
  {
    label: "Mountain Bike Tours from Marrakech",
    href: "/mountain-bike-tours-from-marrakech",
    detail: "Discover MTB adventures starting in Marrakech",
  },
  {
    label: "Atlas Mountains MTB Tours",
    href: "/atlas-mountains-mtb-tours",
    detail: "Explore trails across the High Atlas",
  },
  {
    label: "Private Mountain Bike Tours in Morocco",
    href: "/private-mountain-bike-tours-morocco",
    detail: "Personalised private cycling adventures",
  },
  {
    label: "Beginner Mountain Biking in Morocco",
    href: "/beginner-mountain-biking-morocco",
    detail: "Find the right ride for your experience",
  },
  {
    label: "One-Day MTB Trips from Marrakech",
    href: "/one-day-mtb-trips-from-marrakech",
    detail: "Discover Morocco on a one-day ride",
  },
  {
    label: "E-Bike Tours Morocco",
    href: "/e-bike-tours-morocco",
    detail: "Explore Morocco on electric bikes",
  },
  {
    label: "Gravel Bike Tours Morocco",
    href: "/gravel-bike-tours-morocco",
    detail: "Discover Morocco's gravel routes and landscapes",
  },
  {
    label: "Road Cycling Tours Morocco",
    href: "/road-cycling-tours-morocco",
    detail: "Explore Morocco's mountain passes and open roads",
  },
];

const destinationLinks = [
  { label: "All Destinations", href: "/destinations", detail: "Discover Morocco by bike" },
  { label: "Atlas Mountains", href: "/destinations/atlas-mountains", detail: "High passes & mountain trails" },
  { label: "Imlil Valley", href: "/destinations/imlil", detail: "Traditional villages & valleys" },
  { label: "Mount Toubkal", href: "/destinations/toubkal", detail: "The heart of the High Atlas" },
  { label: "Anti-Atlas", href: "/destinations/anti-atlas", detail: "Wild landscapes & quiet roads" },
  { label: "Marrakech", href: "/destinations/marrakech", detail: "Culture, colour & adventure" },
  { label: "Agafay Desert", href: "/destinations/agafay-desert", detail: "Rocky desert landscapes" },
  { label: "Sahara Desert", href: "/destinations/sahara-desert", detail: "Ride into the vast desert" },
  { label: "Atlantic Coast", href: "/destinations/atlantic-coast", detail: "Ocean air & coastal routes" },
];

type NavLink = {
  label: string;
  href: string;
  detail?: string;
};

type MenuName = "cycling" | "guides" | "destinations";

function MegaMenu({
  label,
  links,
  open,
  onToggle,
  onNavigate,
}: {
  label: string;
  links: NavLink[];
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className={`premium-nav-item nav-dropdown ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="premium-nav-trigger nav-dropdown-trigger"
        aria-expanded={open}
        onClick={onToggle}
      >
        {label}
        <svg
          className={`premium-chevron ${open ? "is-rotated" : ""}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="m2.5 4.5 3.5 3 3.5-3"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="premium-mega-menu nav-dropdown-menu" hidden={!open}>
        <div className="mega-menu-heading">
          <span className="mega-eyebrow">THE MOROCCO COLLECTION</span>
          <span className="mega-menu-title">{label}</span>
          <span className="mega-menu-description">
            Exceptional cycling experiences, guided by local knowledge.
          </span>
        </div>

        <div className="mega-menu-links">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mega-menu-link"
              onClick={onNavigate}
            >
              <span className="mega-link-copy">
                <span className="mega-link-title">{item.label}</span>
                {item.detail && (
                  <span className="mega-link-detail">{item.detail}</span>
                )}
              </span>
              <span className="mega-link-arrow" aria-hidden="true">
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [activeMenu, setActiveMenu] = useState<MenuName | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCyclingOpen, setMobileCyclingOpen] = useState(false);
  const [mobileGuidesOpen, setMobileGuidesOpen] = useState(false);
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false);

  const closeMenus = () => {
    setActiveMenu(null);
    setMobileOpen(false);
    setMobileCyclingOpen(false);
    setMobileGuidesOpen(false);
    setMobileDestinationsOpen(false);
  };

  const toggleDesktopMenu = (menu: MenuName) => {
    setActiveMenu((current) => (current === menu ? null : menu));
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenus();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const renderMobileLinks = (links: NavLink[]) =>
    links.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="mobile-mega-link"
        onClick={closeMenus}
      >
        <span>
          <strong>{item.label}</strong>
          {item.detail && <small>{item.detail}</small>}
        </span>
        <span aria-hidden="true">↗</span>
      </Link>
    ));

  return (
    <header className="site-header premium-header">
      <div className="premium-header-inner header-inner">
        <Link
          href="/"
          className="header-logo premium-logo"
          aria-label="Mountain Bike Morocco home"
          onClick={closeMenus}
        >
          <Image
            src="/images/mountain-bike-morocco-logo.png"
            alt="Mountain Bike Morocco"
            width={190}
            height={64}
            priority
          />
        </Link>

        <nav className="desktop-nav premium-desktop-nav" aria-label="Main navigation">
          <Link href="/" className="premium-nav-link nav-link" onClick={closeMenus}>
            Home
          </Link>

          <MegaMenu
            label="Cycling Trips"
            links={cyclingLinks}
            open={activeMenu === "cycling"}
            onToggle={() => toggleDesktopMenu("cycling")}
            onNavigate={closeMenus}
          />

          <MegaMenu
            label="MTB Guides"
            links={guideLinks}
            open={activeMenu === "guides"}
            onToggle={() => toggleDesktopMenu("guides")}
            onNavigate={closeMenus}
          />

          <MegaMenu
            label="Destinations"
            links={destinationLinks}
            open={activeMenu === "destinations"}
            onToggle={() => toggleDesktopMenu("destinations")}
            onNavigate={closeMenus}
          />

          <Link href="/events" className="premium-nav-link nav-link" onClick={closeMenus}>
            Events
          </Link>

          <Link href="/about" className="premium-nav-link nav-link" onClick={closeMenus}>
            About
          </Link>

          <Link href="/journal" className="premium-nav-link nav-link" onClick={closeMenus}>
            Journal
          </Link>
        </nav>

        <Link href="/contact" className="nav-cta premium-header-cta" onClick={closeMenus}>
          <span>Plan Your Trip</span>
          <span aria-hidden="true">↗</span>
        </Link>

        <button
          type="button"
          className="mobile-menu premium-mobile-toggle"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="premium-mobile-navigation"
          onClick={() => {
            setMobileOpen((current) => !current);
            setActiveMenu(null);
          }}
        >
          <span>{mobileOpen ? "CLOSE" : "MENU"}</span>
          <span className="premium-toggle-lines" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      {activeMenu && (
        <button
          type="button"
          className="mega-menu-backdrop"
          aria-label="Close navigation menu"
          onClick={() => setActiveMenu(null)}
        />
      )}

      <nav
        id="premium-mobile-navigation"
        className="premium-mobile-nav mobile-nav"
        hidden={!mobileOpen}
        aria-label="Mobile navigation"
      >
        <Link href="/" className="mobile-primary-link" onClick={closeMenus}>
          Home
        </Link>

        <div className="mobile-menu-group">
          <button
            type="button"
            className="mobile-group-trigger"
            aria-expanded={mobileCyclingOpen}
            onClick={() => setMobileCyclingOpen((current) => !current)}
          >
            Cycling Trips
            <span aria-hidden="true">{mobileCyclingOpen ? "−" : "+"}</span>
          </button>

          {mobileCyclingOpen && (
            <div className="mobile-group-links">
              {renderMobileLinks(cyclingLinks)}
            </div>
          )}
        </div>

        <div className="mobile-menu-group">
          <button
            type="button"
            className="mobile-group-trigger"
            aria-expanded={mobileGuidesOpen}
            onClick={() => setMobileGuidesOpen((current) => !current)}
          >
            MTB Guides
            <span aria-hidden="true">{mobileGuidesOpen ? "−" : "+"}</span>
          </button>

          {mobileGuidesOpen && (
            <div className="mobile-group-links">
              {renderMobileLinks(guideLinks)}
            </div>
          )}
        </div>

        <div className="mobile-menu-group">
          <button
            type="button"
            className="mobile-group-trigger"
            aria-expanded={mobileDestinationsOpen}
            onClick={() => setMobileDestinationsOpen((current) => !current)}
          >
            Destinations
            <span aria-hidden="true">{mobileDestinationsOpen ? "−" : "+"}</span>
          </button>

          {mobileDestinationsOpen && (
            <div className="mobile-group-links">
              {renderMobileLinks(destinationLinks)}
            </div>
          )}
        </div>

        <Link href="/events" className="mobile-primary-link" onClick={closeMenus}>
          Events
        </Link>
        <Link href="/about" className="mobile-primary-link" onClick={closeMenus}>
          About
        </Link>
        <Link href="/journal" className="mobile-primary-link" onClick={closeMenus}>
          Journal
        </Link>

        <Link href="/contact" className="mobile-nav-cta" onClick={closeMenus}>
          Plan Your Trip <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}