import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Morocco Gravel Bike Caravan | Gravel Cycling Event Morocco",
  description:
    "Discover Morocco on a gravel cycling caravan through mountain landscapes, remote valleys and traditional villages. Contact Mountain Bike Morocco for event dates and arrangements.",
  alternates: {
    canonical: "/events/morocco-gravel-bike-caravan",
  },
};

const images = {
  hero: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=2000&q=90",
  overview:
    "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?auto=format&fit=crop&w=1400&q=85",
  terrain:
    "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1400&q=85",
  culture:
    "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1400&q=85",
  galleryOne:
    "https://images.unsplash.com/photo-1541625602330-2277dfd7a68?auto=format&fit=crop&w=1400&q=85",
  galleryTwo:
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=85",
  galleryThree:
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=85",
  galleryFour:
    "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=1200&q=85",
  galleryFive:
    "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=85",
  dayOne:
    "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?auto=format&fit=crop&w=1400&q=85",
  dayTwo:
    "https://images.unsplash.com/photo-1541625602330-2277dfd7a68?auto=format&fit=crop&w=1400&q=85",
  dayThree:
    "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1400&q=85",
  difficulty:
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1400&q=85",
  final:
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=2000&q=85",
};

const facts = [
  ["Duration", "Provisional 3-day programme"],
  ["Destination", "Morocco – exact route to be confirmed"],
  ["Meeting point", "To be confirmed"],
  ["Main activity", "Gravel cycling"],
  ["Riding style", "Multi-day group gravel caravan"],
  ["Difficulty", "To be confirmed"],
  ["Experience", "Gravel and endurance cycling experience recommended"],
  ["Event format", "Group cycling event"],
  ["Dates", "Contact us for event dates"],
];

const highlights = [
  {
    number: "01",
    title: "Discover Morocco by Gravel",
    text: "Explore the changing landscapes of Morocco on a gravel cycling experience, with route selection based on the confirmed event itinerary.",
  },
  {
    number: "02",
    title: "Ride Beyond the Main Roads",
    text: "Experience the freedom of gravel riding across rural tracks, quiet roads and remote landscapes selected for the caravan.",
  },
  {
    number: "03",
    title: "A Journey Shared",
    text: "Travel and ride with a group of cycling enthusiasts, sharing the challenges, scenery and memorable moments of a multi-day event.",
  },
  {
    number: "04",
    title: "Discover Local Morocco",
    text: "Experience traditional villages, mountain scenery and regional culture along the route, with visits subject to the final programme.",
  },
];

const beyondTrail = [
  {
    title: "Traditional villages",
    text: "Discover rural settlements and the distinctive architecture of Morocco's mountain and countryside communities.",
  },
  {
    title: "Changing landscapes",
    text: "Experience a varied setting of open countryside, mountain views, cultivated valleys and remote tracks.",
  },
  {
    title: "Local hospitality",
    text: "Enjoy opportunities to experience Moroccan food and hospitality where these arrangements form part of the confirmed event.",
  },
  {
    title: "The spirit of gravel",
    text: "Gravel cycling brings together exploration, endurance and the freedom to discover places beyond conventional cycling routes.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival and Caravan Welcome",
    location: "Meeting location to be confirmed",
    distance: "No fixed distance",
    riding: "Welcome, bicycle checks and event briefing",
    image: images.dayOne,
    text: "Arrive at the confirmed meeting point and meet the other participants. The opening day is dedicated to introductions, bicycle checks and a review of the planned caravan. The organisers will explain the route, expected riding conditions, group arrangements and practical information. Any accommodation, meals or transfers will be detailed in the official event confirmation.",
    details: [
      "Participant welcome and introductions",
      "Review of the confirmed gravel route",
      "Bicycle and equipment checks",
      "Group briefing and safety information",
    ],
  },
  {
    day: "02",
    title: "The Morocco Gravel Ride",
    location: "Gravel riding area to be confirmed",
    distance: "Route-dependent",
    riding: "Main group gravel cycling stage",
    image: images.dayTwo,
    text: "The main riding stage introduces the group to the landscapes and riding character of the selected Moroccan route. Depending on the confirmed itinerary, the day may include quiet paved roads, gravel tracks and rural connections. The final distance, elevation gain, surface conditions and support arrangements will be communicated before the event.",
    details: [
      "Group departure on the confirmed route",
      "Gravel and road surfaces as selected",
      "Agreed regrouping and refreshment points",
      "Time to appreciate the surrounding landscapes",
    ],
  },
  {
    day: "03",
    title: "Final Stage and Caravan Closing",
    location: "Final destination to be confirmed",
    distance: "Route-dependent",
    riding: "Final ride and event conclusion",
    image: images.dayThree,
    text: "Complete the final activity of the caravan with a concluding ride or scheduled group activity, depending on the official programme. Allow time for equipment checks, photographs, farewells and onward travel. The final route, schedule and departure arrangements will be provided to registered participants.",
    details: [
      "Final cycling stage as confirmed",
      "Group photographs and participant farewell",
      "Equipment and personal belongings check",
      "Departure according to individual arrangements",
    ],
  },
];

const inclusions = [
  "Event coordination and participant communication, as specified in the final event information",
  "Route briefing and cycling information for confirmed stages",
  "Ride leaders, guiding or local support only where explicitly confirmed",
  "Accommodation only if listed in the event confirmation",
  "Meals and refreshments only where listed in the event confirmation",
  "Luggage transfers and mechanical assistance only where explicitly confirmed",
];

const exclusions = [
  "Travel to and from Morocco",
  "Travel insurance and personal accident cover",
  "Personal gravel bike, helmet, clothing and cycling equipment unless arranged",
  "Accommodation and meals not listed in the event confirmation",
  "Transfers and transport not specifically included",
  "Personal expenses, tips and optional activities",
  "Any service not expressly listed in the final event details",
];

const preparation = [
  {
    title: "Choose a suitable gravel bike",
    text: "Bring a mechanically sound gravel bicycle suitable for the surfaces described in the final route information. Check your brakes, tyres, drivetrain and wheels before travelling. Ask the organisers about rental availability if required.",
  },
  {
    title: "Prepare your equipment",
    text: "A properly fitted helmet is essential. Bring cycling clothing, gloves, glasses, suitable footwear, repair tools, spare tubes or tubeless repair equipment and any personal accessories you normally use.",
  },
  {
    title: "Build your endurance",
    text: "The physical demands will depend on the confirmed route, daily distance and elevation. Prepare with regular endurance rides and tell the organisers about your experience and fitness level.",
  },
  {
    title: "Pack for changing conditions",
    text: "Bring weather-appropriate layers, sun protection, hydration and personal medication. Conditions can vary between regions and elevations, so check the final event guidance before departure.",
  },
];

const faqs = [
  {
    q: "When does the Morocco Gravel Bike Caravan take place?",
    a: "The event dates have not been specified on this page. Contact Mountain Bike Morocco for the latest schedule, availability and registration information.",
  },
  {
    q: "Where does the gravel caravan start?",
    a: "The precise meeting point and route have not yet been specified here. The organisers will confirm the starting location and final itinerary in the event information.",
  },
  {
    q: "How long is the event?",
    a: "This page uses a provisional three-day programme as an outline. The actual event duration and daily schedule must be confirmed by the organisers.",
  },
  {
    q: "What type of bicycle should I bring?",
    a: "A gravel bicycle suitable for the confirmed route is recommended. The appropriate tyre width, gearing and equipment will depend on the surfaces and terrain selected.",
  },
  {
    q: "How difficult is the gravel caravan?",
    a: "The difficulty depends on the final route, daily distances, elevation gain and surface conditions. Share your cycling experience with the organisers so they can advise you about the expected riding level.",
  },
  {
    q: "Are distances and elevation details available?",
    a: "Exact distances, elevation profiles and route surfaces are not specified on this page. They should be confirmed in the official event programme.",
  },
  {
    q: "Are accommodation, meals and luggage transfers included?",
    a: "These services are not guaranteed by this page. Any accommodation, meals, luggage support, mechanical assistance or transfers included will be listed in the event confirmation.",
  },
  {
    q: "Can I rent a gravel bike in Morocco?",
    a: "Ask the team about gravel-bike rental availability, sizes and equipment before making travel arrangements. Rental availability should be confirmed in advance.",
  },
  {
    q: "How can I register my interest?",
    a: "Use the enquiry form on this page and mention the Morocco Gravel Bike Caravan. The team can provide the latest dates, participation details and confirmed arrangements.",
  },
];

const relatedEvents = [
  {
    category: "MOUNTAIN BIKE EVENT",
    title: "Atlas Mountains MTB Gathering",
    text: "Meet fellow riders and discover the mountain landscapes and trails of Morocco's High Atlas.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/events/atlas-mountains-mtb-gathering",
  },
  {
    category: "DESERT CYCLING EVENT",
    title: "Agafay Desert Cycling Challenge",
    text: "Experience a different side of Morocco on a cycling event through the rocky Agafay landscape.",
    image: "/images/Desert-Agafay-Morocco.jpg",
    href: "/events/agafay-desert-cycling-challenge",
  },
  {
    category: "E-MTB ADVENTURE",
    title: "Marrakech to Sahara E-MTB Caravan",
    text: "Discover a multi-stage electric mountain-bike experience linking mountain and desert scenery.",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/events/marrakech-to-sahara-e-mtb-caravan",
  },
];

export default function MoroccoGravelBikeCaravanPage() {
  return (
    <main className="gravel-event">
      <style>{`
        .gravel-event {
          --paper: #f4f2eb;
          --paper-deep: #eae6db;
          --ink: #20241f;
          --muted: #62665d;
          --gold: #c6a05b;
          --gold-light: #dfc17f;
          --green: #21372b;
          --line: #dedbd1;
          background: var(--paper);
          color: var(--ink);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 16px;
          line-height: 1.8;
          overflow: hidden;
        }

        .gravel-event *,
        .gravel-event *::before,
        .gravel-event *::after { box-sizing: border-box; }

        .gravel-event img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gravel-event a { color: inherit; }

        .gravel-event .ge-container {
          width: min(1240px, calc(100% - 64px));
          margin-inline: auto;
        }

        .gravel-event .ge-eyebrow {
          display: block;
          color: #946c30;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1.6;
          text-transform: uppercase;
        }

        .gravel-event .ge-heading {
          margin: 12px 0 20px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(32px, 3.5vw, 48px);
          font-weight: 400;
          letter-spacing: -1.25px;
          line-height: 1.14;
        }

        .gravel-event .ge-section { padding: 86px 0; }

        .gravel-event .ge-section-head {
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          align-items: end;
          gap: 44px;
          margin-bottom: 36px;
        }

        .gravel-event .ge-section-head .ge-heading { margin-bottom: 0; }

        .gravel-event .ge-section-head > p {
          max-width: 480px;
          margin: 0 0 4px auto;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.85;
        }

        .gravel-event .ge-copy {
          color: #5f6359;
          font-size: 16px;
          line-height: 1.95;
        }

        .gravel-event .ge-button {
          display: inline-flex;
          min-height: 49px;
          align-items: center;
          justify-content: center;
          gap: 15px;
          padding: 13px 22px;
          border: 1px solid var(--gold);
          background: var(--gold);
          color: #1f211b;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
          transition: background .2s ease, color .2s ease;
        }

        .gravel-event .ge-button:hover {
          background: #a98343;
          border-color: #a98343;
          color: #fff;
        }

        .gravel-event .ge-text-link {
          display: inline-block;
          margin-top: 20px;
          border-bottom: 1px solid var(--gold);
          padding-bottom: 5px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
        }

        .gravel-event .ge-hero {
          position: relative;
          display: flex;
          min-height: 680px;
          align-items: flex-end;
          background: #202a22;
          color: #fff;
          isolation: isolate;
        }

        .gravel-event .ge-hero-image,
        .gravel-event .ge-hero-shade,
        .gravel-event .ge-final-image,
        .gravel-event .ge-final-shade {
          position: absolute;
          inset: 0;
        }

        .gravel-event .ge-hero-image,
        .gravel-event .ge-final-image { z-index: -2; }

        .gravel-event .ge-hero-shade {
          z-index: -1;
          background:
            linear-gradient(90deg, rgba(9,14,10,.88), rgba(9,14,10,.22)),
            linear-gradient(0deg, rgba(9,14,10,.78), transparent 72%);
        }

        .gravel-event .ge-hero-content {
          position: relative;
          z-index: 1;
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
          padding: 110px 0 65px;
          color: #fff;
        }

        .gravel-event .ge-hero .ge-eyebrow { color: #f0ce88; }

        .gravel-event .ge-hero h1 {
          max-width: 900px;
          margin: 19px 0 22px;
          color: #fff;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(48px, 6.5vw, 84px);
          font-weight: 400;
          letter-spacing: -2.7px;
          line-height: 1.02;
          text-shadow: 0 2px 20px rgba(0,0,0,.3);
        }

        .gravel-event .ge-hero-description {
          max-width: 590px;
          margin: 0;
          color: #fff;
          font-size: 17px;
          line-height: 1.85;
          text-shadow: 0 1px 8px rgba(0,0,0,.4);
        }

        .gravel-event .ge-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 22px;
          margin-top: 30px;
        }

        .gravel-event .ge-hero .ge-button {
          background: #d1ac67;
          border-color: #d1ac67;
          color: #191d17;
        }

        .gravel-event .ge-hero-back {
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
        }

        .gravel-event .ge-hero-back:hover { color: #f0ce88; }

        .gravel-event .ge-hero-bottom {
          display: flex;
          flex-wrap: wrap;
          gap: 34px;
          margin-top: 53px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,.36);
        }

        .gravel-event .ge-hero-bottom div { min-width: 110px; }

        .gravel-event .ge-hero-bottom strong {
          display: block;
          color: #fff;
          font-size: 13px;
          letter-spacing: 1.3px;
        }

        .gravel-event .ge-hero-bottom span {
          color: #eeeae1;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .gravel-event .ge-fact-strip {
          background: #fffefa;
          border-bottom: 1px solid var(--line);
        }

        .gravel-event .ge-fact-strip-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .gravel-event .ge-fact {
          min-height: 104px;
          padding: 23px 25px;
          border-right: 1px solid var(--line);
        }

        .gravel-event .ge-fact:last-child { border-right: 0; }

        .gravel-event .ge-fact span {
          display: block;
          margin-bottom: 5px;
          color: #8b7652;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .gravel-event .ge-fact strong {
          display: block;
          color: var(--ink);
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.4;
        }

        .gravel-event .ge-subnav { background: var(--green); color: #fff; }

        .gravel-event .ge-subnav-inner {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 9px 30px;
          padding: 16px 0;
        }

        .gravel-event .ge-subnav a {
          color: #eee9dc;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.3px;
          text-decoration: none;
          text-transform: uppercase;
        }

        .gravel-event .ge-subnav a:hover { color: var(--gold-light); }

        .gravel-event .ge-overview-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          align-items: center;
          gap: 75px;
        }

        .gravel-event .ge-overview-image {
          position: relative;
          min-height: 570px;
        }

        .gravel-event .ge-overview-image img {
          position: absolute;
          inset: 0;
        }

        .gravel-event .ge-overview-image::after {
          position: absolute;
          right: -18px;
          bottom: -18px;
          z-index: -1;
          width: 48%;
          height: 48%;
          border: 1px solid var(--gold);
          content: "";
        }

        .gravel-event .ge-overview-content { padding: 25px 0; }
        .gravel-event .ge-overview-content .ge-copy { margin: 0 0 17px; }

        .gravel-event .ge-booking-card {
          padding: 32px;
          background: #fffefa;
          border: 1px solid var(--line);
          box-shadow: 0 15px 45px rgba(32,36,31,.06);
        }

        .gravel-event .ge-booking-card h3 {
          margin: 8px 0 12px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 27px;
          font-weight: 400;
          line-height: 1.25;
        }

        .gravel-event .ge-booking-card p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .gravel-event .ge-booking-list {
          margin: 22px 0;
          padding: 0;
          list-style: none;
        }

        .gravel-event .ge-booking-list li {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding: 11px 0;
          border-bottom: 1px solid var(--line);
          font-size: 13px;
        }

        .gravel-event .ge-booking-list span { color: var(--muted); }
        .gravel-event .ge-booking-list strong { text-align: right; }
        .gravel-event .ge-booking-card .ge-button { width: 100%; }

        .gravel-event .ge-highlight-section,
        .gravel-event .ge-itinerary-section,
        .gravel-event .ge-prep-section { background: #eae6db; }

        .gravel-event .ge-highlight-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #d8d2c5;
          border: 1px solid #d8d2c5;
        }

        .gravel-event .ge-highlight {
          min-height: 245px;
          padding: 31px 25px;
          background: var(--paper);
        }

        .gravel-event .ge-highlight-number {
          display: block;
          margin-bottom: 28px;
          color: #b28a4c;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 25px;
        }

        .gravel-event .ge-highlight h3 {
          margin: 0 0 12px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 22px;
          font-weight: 400;
          line-height: 1.25;
        }

        .gravel-event .ge-highlight p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .gravel-event .ge-terrain-grid,
        .gravel-event .ge-difficulty-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 70px;
        }

        .gravel-event .ge-terrain-image { height: 490px; overflow: hidden; }
        .gravel-event .ge-terrain-image img { transition: transform .6s ease; }
        .gravel-event .ge-terrain-image:hover img { transform: scale(1.035); }

        .gravel-event .ge-terrain-points {
          margin: 28px 0 0;
          padding: 0;
          list-style: none;
        }

        .gravel-event .ge-terrain-points li {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 13px;
          padding: 15px 0;
          border-top: 1px solid var(--line);
          color: var(--muted);
          font-size: 14px;
        }

        .gravel-event .ge-terrain-points span {
          color: #a27b40;
          font-weight: 700;
        }

        .gravel-event .ge-facts-section,
        .gravel-event .ge-faq-section { background: #fffefa; }

        .gravel-event .ge-facts-layout,
        .gravel-event .ge-faq-layout {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 75px;
        }

        .gravel-event .ge-facts-table,
        .gravel-event .ge-faq-list { border-top: 1px solid var(--line); }

        .gravel-event .ge-facts-row {
          display: grid;
          grid-template-columns: .7fr 1.3fr;
          gap: 25px;
          padding: 16px 0;
          border-bottom: 1px solid var(--line);
          font-size: 14px;
        }

        .gravel-event .ge-facts-row span { color: var(--muted); }
        .gravel-event .ge-facts-row strong { font-weight: 600; }

        .gravel-event .ge-culture {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 520px;
          background: var(--green);
          color: #fff;
        }

        .gravel-event .ge-culture-image { min-height: 520px; }

        .gravel-event .ge-culture-content {
          align-self: center;
          padding: 70px clamp(35px, 7vw, 100px);
        }

        .gravel-event .ge-culture .ge-eyebrow { color: var(--gold-light); }
        .gravel-event .ge-culture .ge-heading { color: #fff; }
        .gravel-event .ge-culture .ge-copy { color: #e1e2d8; }

        .gravel-event .ge-culture-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-top: 30px;
        }

        .gravel-event .ge-culture-item {
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,.25);
        }

        .gravel-event .ge-culture-item h3 {
          margin: 0 0 7px;
          color: #f1d49a;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 19px;
          font-weight: 400;
        }

        .gravel-event .ge-culture-item p {
          margin: 0;
          color: #d7dbd1;
          font-size: 12px;
          line-height: 1.8;
        }

        .gravel-event .ge-gallery-grid {
          display: grid;
          grid-template-columns: 1.25fr .75fr .75fr;
          grid-template-rows: 245px 245px;
          gap: 14px;
        }

        .gravel-event .ge-gallery-item { overflow: hidden; }
        .gravel-event .ge-gallery-item:first-child { grid-row: span 2; }
        .gravel-event .ge-gallery-item img { transition: transform .6s ease; }
        .gravel-event .ge-gallery-item:hover img { transform: scale(1.04); }

        .gravel-event .ge-itinerary-intro {
          max-width: 720px;
          margin: 0 0 42px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .gravel-event .ge-itinerary-list { display: grid; gap: 22px; }

        .gravel-event .ge-day {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 370px;
          background: #fffefa;
          border: 1px solid #e0dcd1;
        }

        .gravel-event .ge-day:nth-child(even) .ge-day-image { order: 2; }
        .gravel-event .ge-day-image { min-height: 370px; }

        .gravel-event .ge-day-content {
          align-self: center;
          padding: 40px clamp(25px, 5vw, 65px);
        }

        .gravel-event .ge-day-number {
          color: #a27b40;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 38px;
          line-height: 1;
        }

        .gravel-event .ge-day-content h3 {
          margin: 12px 0;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(24px, 2.6vw, 32px);
          font-weight: 400;
          line-height: 1.2;
        }

        .gravel-event .ge-day-location {
          margin-bottom: 16px;
          color: #927344;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .gravel-event .ge-day-content > p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.85;
        }

        .gravel-event .ge-day-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 20px;
          margin: 18px 0;
          padding: 13px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          color: #62665d;
          font-size: 11px;
        }

        .gravel-event .ge-day-content ul {
          display: grid;
          gap: 7px;
          margin: 15px 0 0;
          padding-left: 18px;
          color: #62665d;
          font-size: 12px;
        }

        .gravel-event .ge-inclusions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .gravel-event .ge-inclusion-card {
          padding: 38px;
          background: #fffefa;
          border: 1px solid var(--line);
        }

        .gravel-event .ge-inclusion-card h3 {
          margin: 0 0 22px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 29px;
          font-weight: 400;
        }

        .gravel-event .ge-inclusion-card ul {
          display: grid;
          gap: 13px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .gravel-event .ge-inclusion-card li {
          display: grid;
          grid-template-columns: 22px 1fr;
          gap: 10px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .gravel-event .ge-inclusion-card li span {
          color: #a27b40;
          font-weight: 700;
        }

        .gravel-event .ge-prep-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .gravel-event .ge-prep-card {
          padding: 28px 24px;
          background: var(--paper);
          border-top: 2px solid var(--gold);
        }

        .gravel-event .ge-prep-card h3 {
          margin: 0 0 13px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 21px;
          font-weight: 400;
        }

        .gravel-event .ge-prep-card p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.85;
        }

        .gravel-event .ge-difficulty-image { height: 430px; }

        .gravel-event .ge-difficulty-note {
          margin-top: 25px;
          padding: 22px 25px;
          background: #eae6db;
          border-left: 3px solid var(--gold);
          color: var(--muted);
          font-size: 13px;
          line-height: 1.85;
        }

        .gravel-event .ge-faq-list details {
          padding: 19px 0;
          border-bottom: 1px solid var(--line);
        }

        .gravel-event .ge-faq-list summary {
          position: relative;
          padding-right: 35px;
          color: var(--ink);
          cursor: pointer;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 19px;
          line-height: 1.45;
          list-style: none;
        }

        .gravel-event .ge-faq-list summary::-webkit-details-marker { display: none; }

        .gravel-event .ge-faq-list summary::after {
          position: absolute;
          top: 0;
          right: 3px;
          color: #a27b40;
          content: "+";
          font-family: Arial, sans-serif;
          font-size: 23px;
        }

        .gravel-event .ge-faq-list details[open] summary::after { content: "−"; }

        .gravel-event .ge-faq-list details p {
          max-width: 690px;
          margin: 13px 0 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.85;
        }

        .gravel-event .ge-event-enquiry {
          position: relative;
          background:
            radial-gradient(ellipse at 50% 0%, rgba(198,160,91,.10), transparent 48%),
            #eae6db;
        }

        .gravel-event .ge-event-enquiry::before {
          position: absolute;
          top: 0;
          left: 50%;
          width: 110px;
          height: 2px;
          background: var(--gold);
          content: "";
          transform: translateX(-50%);
        }

        .gravel-event .ge-event-enquiry-card {
          position: relative;
          max-width: 1040px;
          margin: 0 auto;
          padding: clamp(30px, 5vw, 64px);
          background: #fffefa;
          border: 1px solid #ded8ca;
          box-shadow: 0 28px 75px rgba(32,36,31,.11);
        }

        .gravel-event .ge-event-enquiry-card::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #8d6b39, #dfc17f, #8d6b39);
          content: "";
        }

        .gravel-event .contact-enquiry-form { width: 100%; margin: 0; }

        .gravel-event .contact-enquiry-form__heading {
          max-width: 720px;
          margin: 0 0 38px;
          padding-bottom: 25px;
          border-bottom: 1px solid #e8e3d8;
        }

        .gravel-event .contact-enquiry-form__heading .cl-eyebrow {
          color: #98713a;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .gravel-event .contact-enquiry-form__heading h3 {
          margin: 10px 0 12px;
          color: var(--ink);
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(29px, 3vw, 39px);
          font-weight: 400;
          line-height: 1.18;
        }

        .gravel-event .contact-enquiry-form__heading p {
          color: #74766d;
          font-size: 14px;
          line-height: 1.85;
        }

        .gravel-event .contact-enquiry-form__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 25px 27px;
        }

        .gravel-event .contact-enquiry-form__grid label {
          display: flex;
          flex-direction: column;
          gap: 9px;
          color: #41463e;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.1px;
          line-height: 1.5;
          text-transform: uppercase;
        }

        .gravel-event .contact-enquiry-form__grid input,
        .gravel-event .contact-enquiry-form__grid select,
        .gravel-event .contact-enquiry-form__grid textarea {
          width: 100%;
          min-width: 0;
          min-height: 56px;
          margin: 0;
          padding: 15px 17px;
          border: 1px solid #e1ded4;
          border-radius: 3px;
          outline: none;
          background: #f8f7f2;
          color: #292d26;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0;
          line-height: 1.5;
          text-transform: none;
          transition: border-color .2s ease, background .2s ease, box-shadow .2s ease;
        }

        .gravel-event .contact-enquiry-form__grid input:focus,
        .gravel-event .contact-enquiry-form__grid select:focus,
        .gravel-event .contact-enquiry-form__grid textarea:focus {
          border-color: #ad8549;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(198,160,91,.13);
        }

        .gravel-event .contact-enquiry-form__grid textarea {
          min-height: 165px;
          resize: vertical;
        }

        .gravel-event .contact-enquiry-form__full { grid-column: 1 / -1; }

        .gravel-event .contact-enquiry-form__submit {
          display: inline-flex;
          min-width: 250px;
          min-height: 58px;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
          padding: 16px 30px;
          border: 1px solid #21372b;
          border-radius: 3px;
          background: #21372b;
          color: #fff;
          cursor: pointer;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: background .2s ease, transform .2s ease;
        }

        .gravel-event .contact-enquiry-form__submit:hover {
          transform: translateY(-2px);
          border-color: #b28a4c;
          background: #b28a4c;
          color: #20241f;
        }

        .gravel-event .contact-enquiry-form__status {
          margin: 22px 0 0;
          padding: 16px 19px;
          border: 1px solid #e5ddc9;
          border-left: 3px solid #9a7540;
          background: #f6f3eb;
          color: #45483f;
          font-size: 13px;
          line-height: 1.75;
        }

        .gravel-event .contact-enquiry-form__privacy {
          margin: 20px 0 0;
          color: #858478;
          font-size: 11px;
          line-height: 1.8;
        }

        .gravel-event .ge-final-cta {
          position: relative;
          display: flex;
          min-height: 500px;
          align-items: center;
          background: #1e2a22;
          color: #fff;
          isolation: isolate;
        }

        .gravel-event .ge-final-shade {
          z-index: -1;
          background: linear-gradient(90deg, rgba(10,17,12,.88), rgba(10,17,12,.35));
        }

        .gravel-event .ge-final-content {
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
          padding: 90px 0;
        }

        .gravel-event .ge-final-content .ge-eyebrow { color: #f0ce88; }

        .gravel-event .ge-final-content h2 {
          max-width: 750px;
          margin: 15px 0 20px;
          color: #fff;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 400;
          letter-spacing: -1.8px;
          line-height: 1.1;
        }

        .gravel-event .ge-final-content p {
          max-width: 580px;
          margin-bottom: 28px;
          color: #f0eee6;
          font-size: 16px;
          line-height: 1.85;
        }

        .gravel-event .ge-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .gravel-event .ge-related-card {
          background: #fffefa;
          border: 1px solid var(--line);
        }

        .gravel-event .ge-related-image { height: 255px; overflow: hidden; }
        .gravel-event .ge-related-image img { transition: transform .5s ease; }

        .gravel-event .ge-related-card:hover .ge-related-image img {
          transform: scale(1.04);
        }

        .gravel-event .ge-related-content { padding: 25px; }

        .gravel-event .ge-related-content .ge-eyebrow {
          font-size: 9px;
          letter-spacing: 1.4px;
        }

        .gravel-event .ge-related-content h3 {
          margin: 10px 0;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 1.25;
        }

        .gravel-event .ge-related-content p {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .gravel-event .ge-related-content a {
          display: inline-block;
          margin-top: 8px;
          padding-bottom: 4px;
          border-bottom: 1px solid var(--gold);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
        }

        .gravel-event .ge-footer { background: #171d18; color: #eeeae1; }

        .gravel-event .ge-footer-main {
          display: grid;
          grid-template-columns: 1.3fr .8fr .9fr 1fr;
          gap: 45px;
          padding: 65px 0 50px;
        }

        .gravel-event .ge-footer-brand img {
          width: 190px;
          height: auto;
          object-fit: contain;
          object-position: left center;
        }

        .gravel-event .ge-footer-brand p {
          max-width: 300px;
          margin-top: 20px;
          color: #b9beb5;
          font-size: 13px;
          line-height: 1.9;
        }

        .gravel-event .ge-footer h3 {
          margin: 0 0 19px;
          color: #e4c78c;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.6px;
          text-transform: uppercase;
        }

        .gravel-event .ge-footer-links { display: grid; gap: 11px; }

        .gravel-event .ge-footer-links a {
          color: #c4c8c0;
          font-size: 13px;
          text-decoration: none;
        }

        .gravel-event .ge-footer-links a:hover { color: #e4c78c; }

        .gravel-event .ge-footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 20px 0;
          border-top: 1px solid rgba(255,255,255,.15);
          color: #9fa69c;
          font-size: 11px;
        }

        @media (max-width: 1000px) {
          .gravel-event .ge-overview-grid,
          .gravel-event .ge-terrain-grid,
          .gravel-event .ge-facts-layout,
          .gravel-event .ge-difficulty-grid,
          .gravel-event .ge-faq-layout { gap: 40px; }

          .gravel-event .ge-highlight-grid { grid-template-columns: repeat(2, 1fr); }
          .gravel-event .ge-prep-grid { grid-template-columns: repeat(2, 1fr); }
          .gravel-event .ge-footer-main { grid-template-columns: 1.2fr 1fr; }
        }

        @media (max-width: 700px) {
          .gravel-event .ge-container { width: min(100% - 40px, 1240px); }
          .gravel-event .ge-section { padding: 65px 0; }
          .gravel-event .ge-hero { min-height: 650px; }

          .gravel-event .ge-hero-content {
            width: calc(100% - 40px);
            padding: 90px 0 42px;
          }

          .gravel-event .ge-hero h1 {
            font-size: clamp(43px, 12vw, 62px);
            letter-spacing: -1.8px;
          }

          .gravel-event .ge-hero-description { font-size: 15px; }
          .gravel-event .ge-hero-bottom { gap: 18px 25px; margin-top: 38px; }
          .gravel-event .ge-fact-strip-inner { grid-template-columns: repeat(2, 1fr); }

          .gravel-event .ge-fact { min-height: 90px; padding: 17px 15px; }
          .gravel-event .ge-fact:nth-child(2) { border-right: 0; }
          .gravel-event .ge-fact:nth-child(-n+2) { border-bottom: 1px solid var(--line); }

          .gravel-event .ge-subnav-inner { justify-content: flex-start; gap: 12px 20px; }
          .gravel-event .ge-subnav a { font-size: 9px; }

          .gravel-event .ge-section-head {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .gravel-event .ge-section-head > p { margin: 0; }

          .gravel-event .ge-overview-grid,
          .gravel-event .ge-terrain-grid,
          .gravel-event .ge-facts-layout,
          .gravel-event .ge-difficulty-grid,
          .gravel-event .ge-faq-layout {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .gravel-event .ge-overview-image {
            min-height: 390px;
            margin-right: 12px;
          }

          .gravel-event .ge-booking-card { padding: 25px; }
          .gravel-event .ge-highlight-grid { grid-template-columns: 1fr 1fr; }

          .gravel-event .ge-highlight {
            min-height: 230px;
            padding: 23px 17px;
          }

          .gravel-event .ge-highlight h3 { font-size: 19px; }
          .gravel-event .ge-highlight p { font-size: 12px; }
          .gravel-event .ge-terrain-image { height: 350px; }

          .gravel-event .ge-culture { grid-template-columns: 1fr; }
          .gravel-event .ge-culture-image { min-height: 330px; }
          .gravel-event .ge-culture-content { padding: 55px 25px; }
          .gravel-event .ge-culture-grid { gap: 20px 15px; }

          .gravel-event .ge-gallery-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 250px 170px 170px;
          }

          .gravel-event .ge-gallery-item:first-child {
            grid-column: span 2;
            grid-row: auto;
          }

          .gravel-event .ge-day { grid-template-columns: 1fr; }
          .gravel-event .ge-day:nth-child(even) .ge-day-image { order: 0; }
          .gravel-event .ge-day-image { min-height: 260px; }
          .gravel-event .ge-day-content { padding: 28px 23px; }

          .gravel-event .ge-inclusions-grid { grid-template-columns: 1fr; }
          .gravel-event .ge-inclusion-card { padding: 28px 23px; }
          .gravel-event .ge-prep-grid { grid-template-columns: 1fr; }
          .gravel-event .ge-difficulty-image { height: 330px; }

          .gravel-event .ge-event-enquiry-card { padding: 30px 20px; }
          .gravel-event .contact-enquiry-form__grid {
            grid-template-columns: 1fr;
            gap: 19px;
          }

          .gravel-event .contact-enquiry-form__full { grid-column: auto; }
          .gravel-event .contact-enquiry-form__submit { width: 100%; }

          .gravel-event .ge-final-content {
            width: calc(100% - 40px);
            padding: 75px 0;
          }

          .gravel-event .ge-related-grid { grid-template-columns: 1fr; }
          .gravel-event .ge-related-image { height: 240px; }

          .gravel-event .ge-footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 35px 22px;
            padding: 50px 0 35px;
          }

          .gravel-event .ge-footer-bottom { flex-direction: column; gap: 8px; }
        }

        @media (max-width: 420px) {
          .gravel-event .ge-highlight-grid { grid-template-columns: 1fr; }
          .gravel-event .ge-highlight { min-height: auto; }
          .gravel-event .ge-facts-row { grid-template-columns: 1fr; gap: 3px; }
          .gravel-event .ge-footer-main { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="ge-hero">
        <div className="ge-hero-image">
          <img src={images.hero} alt="Cyclist exploring a scenic gravel cycling route" fetchPriority="high" />
        </div>
        <div className="ge-hero-shade" />
        <div className="ge-hero-content">
          <span className="ge-eyebrow">MOROCCO · GRAVEL CYCLING · GROUP CARAVAN</span>
          <h1>Morocco Gravel Bike Caravan</h1>
          <p className="ge-hero-description">
            Discover Morocco beyond the ordinary roads. Join a group gravel
            cycling experience through changing landscapes, rural tracks and
            remarkable scenery, with the final journey shaped by the confirmed
            event programme.
          </p>
          <div className="ge-hero-actions">
            <a className="ge-button" href="#enquiry">Enquire About the Event <span>→</span></a>
            <a className="ge-hero-back" href="/events">Explore All Events</a>
          </div>
          <div className="ge-hero-bottom">
            <div><strong>GRAVEL</strong><span>Multi-surface riding</span></div>
            <div><strong>MOROCCO</strong><span>Changing landscapes</span></div>
            <div><strong>GROUP RIDE</strong><span>Caravan experience</span></div>
            <div><strong>DATES TBC</strong><span>Ask for details</span></div>
          </div>
        </div>
      </section>

      <section className="ge-fact-strip">
        <div className="ge-container ge-fact-strip-inner">
          <div className="ge-fact"><span>Event</span><strong>Gravel Bike Caravan</strong></div>
          <div className="ge-fact"><span>Destination</span><strong>Morocco</strong></div>
          <div className="ge-fact"><span>Experience</span><strong>Group Gravel Cycling</strong></div>
          <div className="ge-fact"><span>Dates</span><strong>To Be Confirmed</strong></div>
        </div>
      </section>

      <nav className="ge-subnav">
        <div className="ge-container ge-subnav-inner">
          <a href="#overview">Overview</a>
          <a href="#highlights">Highlights</a>
          <a href="#experience">Experience</a>
          <a href="#programme">Programme</a>
          <a href="#included">Arrangements</a>
          <a href="#preparation">Preparation</a>
          <a href="#faqs">FAQs</a>
          <a href="#enquiry">Enquiry</a>
        </div>
      </nav>

      <section className="ge-section" id="overview">
        <div className="ge-container ge-overview-grid">
          <div className="ge-overview-image">
            <img src={images.overview} alt="Cycling on a scenic open road" loading="lazy" />
          </div>
          <div className="ge-overview-content">
            <span className="ge-eyebrow">A JOURNEY ON TWO WHEELS</span>
            <h2 className="ge-heading">Discover Morocco Beyond the Main Roads</h2>
            <p className="ge-copy">
              The Morocco Gravel Bike Caravan is designed around the spirit
              of exploration. Gravel cycling opens the door to a different
              way of discovering the country, connecting quieter roads,
              countryside tracks and landscapes that invite you to slow down
              and enjoy the journey.
            </p>
            <p className="ge-copy">
              Morocco offers an extraordinary variety of riding environments.
              Mountain scenery, rural communities, open countryside and
              changing terrain can all form part of a gravel journey. The
              precise route and riding areas for this event will be confirmed
              in the official programme.
            </p>
            <p className="ge-copy">
              Whether you are an experienced gravel cyclist or an endurance
              rider looking for a new destination, contact our team for
              information about the event format, dates, route and
              participation requirements.
            </p>
            <a className="ge-text-link" href="#programme">Explore the event programme →</a>
          </div>
        </div>
      </section>

      <section className="ge-section" style={{ paddingTop: 0 }}>
        <div className="ge-container ge-overview-grid">
          <div>
            <span className="ge-eyebrow">THE CARAVAN EXPERIENCE</span>
            <h2 className="ge-heading">A Shared Gravel Journey Through Morocco</h2>
            <p className="ge-copy">
              A multi-day gravel event is about more than covering distance.
              It is about travelling together, discovering new places and
              enjoying the changing character of the road. The caravan format
              brings participants together around a shared cycling experience.
            </p>
            <p className="ge-copy">
              Before registration, the organisers will confirm the route,
              daily distances, elevation, surface conditions, support
              arrangements and expected riding level. These details are
              important when choosing equipment and preparing for the journey.
            </p>
          </div>
          <aside className="ge-booking-card">
            <span className="ge-eyebrow">EVENT AT A GLANCE</span>
            <h3>Morocco Gravel Bike Caravan</h3>
            <p>A group gravel cycling event through Morocco's varied landscapes.</p>
            <ul className="ge-booking-list">
              <li><span>Discipline</span><strong>Gravel cycling</strong></li>
              <li><span>Destination</span><strong>Morocco</strong></li>
              <li><span>Event format</span><strong>Group caravan</strong></li>
              <li><span>Duration</span><strong>To be confirmed</strong></li>
              <li><span>Dates and price</span><strong>Ask for details</strong></li>
            </ul>
            <a className="ge-button" href="#enquiry">Request Event Details <span>→</span></a>
          </aside>
        </div>
      </section>

      <section className="ge-section ge-highlight-section" id="highlights">
        <div className="ge-container">
          <div className="ge-section-head">
            <div>
              <span className="ge-eyebrow">THE GRAVEL EXPERIENCE</span>
              <h2 className="ge-heading">Highlights of the Morocco Gravel Bike Caravan</h2>
            </div>
            <p>
              A group cycling journey focused on exploration, changing
              terrain and the freedom of discovering Morocco by gravel bike.
            </p>
          </div>
          <div className="ge-highlight-grid">
            {highlights.map((item) => (
              <article className="ge-highlight" key={item.number}>
                <span className="ge-highlight-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ge-section" id="experience">
        <div className="ge-container ge-terrain-grid">
          <div className="ge-terrain-image">
            <img src={images.terrain} alt="Cycling through an open landscape" loading="lazy" />
          </div>
          <div>
            <span className="ge-eyebrow">THE RIDING ENVIRONMENT</span>
            <h2 className="ge-heading">Gravel Roads, Rural Tracks and Open Landscapes</h2>
            <p className="ge-copy">
              Gravel cycling is at its best when the route offers variety.
              Depending on the selected region, a Moroccan gravel journey may
              connect quiet paved roads with unpaved tracks, open countryside
              and mountain approaches.
            </p>
            <p className="ge-copy">
              The final route for this caravan has not been published here.
              Surface types, road conditions, daily distances, elevation gain
              and technical requirements must be confirmed before the event.
            </p>
            <ul className="ge-terrain-points">
              <li><span>01</span>Quiet roads and countryside connections, as selected</li>
              <li><span>02</span>Gravel and unpaved tracks, subject to route confirmation</li>
              <li><span>03</span>Changing landscapes and regional scenery</li>
              <li><span>04</span>Daily distances and elevation to be confirmed</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="ge-section ge-facts-section">
        <div className="ge-container ge-facts-layout">
          <div>
            <span className="ge-eyebrow">PLAN YOUR PARTICIPATION</span>
            <h2 className="ge-heading">Event Information</h2>
            <p className="ge-copy">
              The details below provide an outline of the event. Contact
              Mountain Bike Morocco for the official itinerary and confirmed
              practical arrangements before booking travel.
            </p>
          </div>
          <div className="ge-facts-table">
            {facts.map(([label, value]) => (
              <div className="ge-facts-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ge-culture">
        <div className="ge-culture-image">
          <img src={images.culture} alt="Moroccan countryside and mountain scenery" loading="lazy" />
        </div>
        <div className="ge-culture-content">
          <span className="ge-eyebrow">BEYOND THE ROAD</span>
          <h2 className="ge-heading">Discover the Places Along the Journey</h2>
          <p className="ge-copy">
            A gravel journey through Morocco can offer a closer connection
            with the countryside and the communities along the way. The
            landscape, architecture, local food and everyday life are part
            of what makes travelling by bicycle rewarding.
          </p>
          <div className="ge-culture-grid">
            {beyondTrail.map((item) => (
              <div className="ge-culture-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ge-section">
        <div className="ge-container">
          <div className="ge-section-head">
            <div>
              <span className="ge-eyebrow">MOROCCO BY BICYCLE</span>
              <h2 className="ge-heading">A Visual Taste of the Gravel Journey</h2>
            </div>
            <p>
              Discover the atmosphere of cycling and exploration. The exact
              landscapes and locations for the caravan will depend on the
              confirmed event route.
            </p>
          </div>
          <div className="ge-gallery-grid">
            <div className="ge-gallery-item"><img src={images.galleryOne} alt="Cycling adventure landscape" loading="lazy" /></div>
            <div className="ge-gallery-item"><img src={images.galleryTwo} alt="Bicycle ready for an outdoor ride" loading="lazy" /></div>
            <div className="ge-gallery-item"><img src={images.galleryThree} alt="Cyclist enjoying a ride" loading="lazy" /></div>
            <div className="ge-gallery-item"><img src={images.galleryFour} alt="Cycling through a scenic route" loading="lazy" /></div>
            <div className="ge-gallery-item"><img src={images.galleryFive} alt="Bicycle and open riding landscape" loading="lazy" /></div>
          </div>
        </div>
      </section>

      <section className="ge-section ge-itinerary-section" id="programme">
        <div className="ge-container">
          <div className="ge-section-head">
            <div>
              <span className="ge-eyebrow">THE CARAVAN PROGRAMME</span>
              <h2 className="ge-heading">Suggested Event Programme</h2>
            </div>
            <p>
              A provisional three-stage structure to illustrate the event
              format. The actual duration, route and schedule must be confirmed
              by the organisers.
            </p>
          </div>
          <p className="ge-itinerary-intro">
            The following is a planning outline, not a confirmed itinerary.
            Daily distances, elevation gain, route surfaces, accommodation,
            meals, luggage transfers and support services will be specified
            in the official event confirmation.
          </p>
          <div className="ge-itinerary-list">
            {itinerary.map((day) => (
              <article className="ge-day" key={day.day}>
                <div className="ge-day-image">
                  <img src={day.image} alt={day.title} loading="lazy" />
                </div>
                <div className="ge-day-content">
                  <span className="ge-day-number">{day.day}</span>
                  <h3>{day.title}</h3>
                  <div className="ge-day-location">{day.location}</div>
                  <p>{day.text}</p>
                  <div className="ge-day-meta">
                    <span>Distance: {day.distance}</span>
                    <span>{day.riding}</span>
                  </div>
                  <ul>
                    {day.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ge-section" id="included">
        <div className="ge-container">
          <div className="ge-section-head">
            <div>
              <span className="ge-eyebrow">EVENT ARRANGEMENTS</span>
              <h2 className="ge-heading">What Is Included?</h2>
            </div>
            <p>
              Services are only included when expressly listed in the final
              event confirmation. Use this checklist when requesting the
              official participation details.
            </p>
          </div>
          <div className="ge-inclusions-grid">
            <div className="ge-inclusion-card">
              <h3>To Be Confirmed</h3>
              <ul>
                {inclusions.map((item) => <li key={item}><span>+</span>{item}</li>)}
              </ul>
            </div>
            <div className="ge-inclusion-card">
              <h3>Not Included Unless Stated</h3>
              <ul>
                {exclusions.map((item) => <li key={item}><span>−</span>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ge-section ge-prep-section" id="preparation">
        <div className="ge-container">
          <div className="ge-section-head">
            <div>
              <span className="ge-eyebrow">BEFORE YOU TRAVEL</span>
              <h2 className="ge-heading">Preparing for the Gravel Caravan</h2>
            </div>
            <p>
              Prepare your bicycle, equipment and endurance for a multi-day
              cycling experience. Always check the final route information
              before departure.
            </p>
          </div>
          <div className="ge-prep-grid">
            {preparation.map((item) => (
              <article className="ge-prep-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ge-section">
        <div className="ge-container ge-difficulty-grid">
          <div className="ge-difficulty-image">
            <img src={images.difficulty} alt="Gravel bicycle equipment" loading="lazy" />
          </div>
          <div>
            <span className="ge-eyebrow">KNOW YOUR RIDE</span>
            <h2 className="ge-heading">Fitness, Experience and Cycling Safety</h2>
            <p className="ge-copy">
              The physical demands of a gravel caravan depend on its daily
              distances, elevation gain, road surfaces and riding pace.
              Participants should be comfortable spending extended periods
              on a bicycle and should prepare for consecutive days of riding
              if that is part of the confirmed programme.
            </p>
            <p className="ge-copy">
              Before the event, the organisers should communicate the expected
              rider level, route conditions, equipment requirements, group
              riding rules and emergency arrangements. Participants should
              bring suitable equipment and appropriate travel and cycling
              insurance.
            </p>
            <div className="ge-difficulty-note">
              <strong>Important:</strong> The route, daily distances,
              elevation, surface conditions, support services and safety
              arrangements must be confirmed in the official event
              information. No fixed route or guaranteed service is stated here.
            </div>
          </div>
        </div>
      </section>

      <section className="ge-section ge-faq-section" id="faqs">
        <div className="ge-container ge-faq-layout">
          <div>
            <span className="ge-eyebrow">GOOD TO KNOW</span>
            <h2 className="ge-heading">Frequently Asked Questions</h2>
            <p className="ge-copy">
              Find answers to common questions about the Morocco Gravel Bike
              Caravan. Contact our team for confirmed dates, route information
              and participation details.
            </p>
            <a className="ge-text-link" href="#enquiry">Ask About the Caravan →</a>
          </div>
          <div className="ge-faq-list">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ge-section ge-event-enquiry" id="enquiry">
        <div className="ge-container">
          <div className="ge-section-head">
            <div>
              <span className="ge-eyebrow">REGISTER YOUR INTEREST</span>
              <h2 className="ge-heading">Enquire About the Morocco Gravel Bike Caravan</h2>
            </div>
            <p>
              Tell us about your cycling experience, preferred dates and group
              size. Our team will contact you with the latest event details
              and confirmed arrangements.
            </p>
          </div>
          <div className="ge-event-enquiry-card">
            <ContactEnquiryForm />
          </div>
        </div>
      </section>

      <section className="ge-final-cta">
        <div className="ge-final-image">
          <img src={images.final} alt="Cyclist enjoying an outdoor cycling journey" loading="lazy" />
        </div>
        <div className="ge-final-shade" />
        <div className="ge-final-content">
          <span className="ge-eyebrow">DISCOVER MOROCCO BY GRAVEL</span>
          <h2>Ready for a Different Kind of Cycling Journey?</h2>
          <p>
            Contact Mountain Bike Morocco for the latest event dates,
            participation details and confirmed arrangements. Tell us about
            your riding experience and we will help you understand whether
            this gravel caravan is right for you.
          </p>
          <a className="ge-button" href="#enquiry">Enquire About the Event <span>→</span></a>
        </div>
      </section>

      <section className="ge-section">
        <div className="ge-container">
          <div className="ge-section-head">
            <div>
              <span className="ge-eyebrow">EXPLORE MORE</span>
              <h2 className="ge-heading">More Cycling Events in Morocco</h2>
            </div>
            <p>
              Explore other cycling experiences, from mountain-bike gatherings
              to desert challenges and multi-stage electric mountain-bike events.
            </p>
          </div>
          <div className="ge-related-grid">
            {relatedEvents.map((event) => (
              <article className="ge-related-card" key={event.title}>
                <div className="ge-related-image">
                  <img src={event.image} alt={event.title} loading="lazy" />
                </div>
                <div className="ge-related-content">
                  <span className="ge-eyebrow">{event.category}</span>
                  <h3>{event.title}</h3>
                  <p>{event.text}</p>
                  <a href={event.href}>Discover This Event →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="ge-footer">
        <div className="ge-container ge-footer-main">
          <div className="ge-footer-brand">
            <img src="/images/logo-mountain-bike-morocco-footer.png" alt="Mountain Bike Morocco" />
            <p>
              Discover Morocco by bike. Explore the Atlas Mountains,
              remote valleys and unforgettable cycling routes with
              Mountain Bike Morocco.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="ge-footer-links">
              <a href="/cycling-trips">All Cycling Tours</a>
              <a href="/cycling-trips/mtb">Mountain Bike Tours</a>
              <a href="/cycling-trips/emtb">E-MTB Tours</a>
              <a href="/cycling-trips/gravel">Gravel Cycling</a>
            </div>
          </div>
          <div>
            <h3>Destinations</h3>
            <div className="ge-footer-links">
              <a href="/destinations">All Destinations</a>
              <a href="/destinations/atlas-mountains">Atlas Mountains</a>
              <a href="/destinations/imlil">Imlil</a>
              <a href="/destinations/marrakech">Marrakech</a>
            </div>
          </div>
          <div>
            <h3>Get in Touch</h3>
            <div className="ge-footer-links">
              <a href="/about">About Us</a>
              <a href="/contact">Contact</a>
              <a href="#enquiry">Plan Your Event</a>
              <a href="/events">Explore Cycling Events</a>
            </div>
          </div>
        </div>
        <div className="ge-container ge-footer-bottom">
          <span>© {2026} Mountain Bike Morocco. All rights reserved.</span>
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}