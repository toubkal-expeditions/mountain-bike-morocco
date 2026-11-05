import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Atlas Singletrack Mountain Bike Tour – 6 Days | Mountain Bike Morocco",
  description:
    "Ride the singletrack trails of Morocco's High Atlas on a six-day mountain bike tour through mountain villages, remote valleys and spectacular Atlas landscapes.",
};

const images = {
  hero: "/images/singletrack-mtb-atlas-mountains.jpg",
  overview: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  gallery1: "/images/singletrack-mtb-atlas-mountains.jpg",
  gallery2: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  gallery3: "/images/group-cycling-tour-morocco.jpg",
  gallery4: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  gallery5: "/images/Desert-Agafay-Morocco.jpg",
  gallery6: "/images/e-mtb-tour-morocco.jpg",
  gallery7: "/images/day-ebike-tour-from-marrakech.jpg",
  gallery8: "/images/mountain-bike-morocco-hero.jpg",
};

const facts = [
  ["Duration", "6 days / 5 nights"],
  ["Destination", "High Atlas Mountains, Morocco"],
  ["Starting point", "Marrakech"],
  ["Riding style", "Singletrack, mountain trails and scenic descents"],
  ["Difficulty", "Moderate to challenging"],
  ["Experience", "Suitable for confident mountain bikers"],
  ["Accommodation", "Selected guesthouses and mountain lodges"],
  ["Tour format", "Private departure with local support"],
  ["Best season", "Spring and autumn, with seasonal variations"],
];

const highlights = [
  {
    number: "01",
    title: "Ride the High Atlas",
    text: "Discover a changing landscape of rugged peaks, open valleys and mountain paths far beyond the usual tourist routes.",
  },
  {
    number: "02",
    title: "Discover natural singletrack",
    text: "Follow flowing trails, traditional mountain tracks and technical sections selected to suit the group's riding level.",
  },
  {
    number: "03",
    title: "Meet Amazigh communities",
    text: "Pass through traditional villages, encounter local mountain life and experience the warm hospitality of the Atlas.",
  },
  {
    number: "04",
    title: "Ride with local knowledge",
    text: "Explore with a team that understands the terrain, local conditions and the routes that make this region special.",
  },
];

const beyondTrail = [
  {
    title: "Mountain villages",
    text: "Explore traditional settlements built into the hillsides, where daily life follows the rhythm of the mountains.",
  },
  {
    title: "Amazigh culture",
    text: "Experience the living heritage, architecture and hospitality of communities throughout the High Atlas.",
  },
  {
    title: "Local food",
    text: "Enjoy Moroccan home cooking, freshly prepared tagines, seasonal produce and mint tea after a day on the trails.",
  },
  {
    title: "Changing landscapes",
    text: "Travel between terraced valleys, rocky ridgelines, cultivated slopes and wide-open mountain panoramas.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Marrakech and preparation",
    location: "Marrakech",
    distance: "Depending on arrival",
    riding: "Bike fitting and route briefing",
    image: images.overview,
    text: "Meet the team and settle into Marrakech. Review the upcoming route, check your mountain bike and equipment, and discuss the group's experience and riding objectives. The final arrangements depend on your arrival time.",
    details: [
      "Meet your local team",
      "Bike and equipment check",
      "Review the route and safety briefing",
    ],
  },
  {
    day: "02",
    title: "Into the High Atlas",
    location: "Atlas Mountains",
    distance: "Route-dependent",
    riding: "Mountain tracks and first singletrack",
    image: images.gallery2,
    text: "Leave the city behind and travel towards the mountains. Begin riding on a selection of mountain tracks and trails, taking time to adapt to the terrain, altitude and pace of the journey.",
    details: [
      "Transfer to the riding area",
      "Explore mountain paths and village trails",
      "Overnight in the Atlas region",
    ],
  },
  {
    day: "03",
    title: "Singletrack through mountain valleys",
    location: "High Atlas",
    distance: "Route-dependent",
    riding: "Flowing trails and technical sections",
    image: images.gallery3,
    text: "Spend a full day exploring the network of trails that crosses the Atlas landscape. Expect varied terrain, changing surfaces and opportunities to enjoy longer descents, with breaks for photographs and refreshments.",
    details: [
      "Full day of mountain biking",
      "Scenic viewpoints and village passages",
      "Local accommodation",
    ],
  },
  {
    day: "04",
    title: "Remote trails and panoramic descents",
    location: "Atlas mountain valleys",
    distance: "Route-dependent",
    riding: "Natural singletrack and mountain descents",
    image: images.gallery4,
    text: "Continue deeper into the mountain environment on a route selected for the group's ability and the day's conditions. Combine remote scenery, technical trail sections and rewarding descents with time to appreciate the landscape.",
    details: [
      "Ride a new section of the Atlas",
      "Adapt the route to conditions and ability",
      "Overnight in the mountains",
    ],
  },
  {
    day: "05",
    title: "A final day of Atlas riding",
    location: "High Atlas to Marrakech region",
    distance: "Route-dependent",
    riding: "Selected trails and memorable descents",
    image: images.gallery5,
    text: "Enjoy a final day on the trails, choosing a route that brings together the group's favourite riding experiences. After the ride, return towards Marrakech according to the agreed itinerary.",
    details: [
      "Final guided mountain bike ride",
      "Time for photos and a relaxed finish",
      "Return transfer as arranged",
    ],
  },
  {
    day: "06",
    title: "Departure from Marrakech",
    location: "Marrakech",
    distance: "No scheduled ride",
    riding: "Departure day",
    image: images.gallery8,
    text: "Enjoy breakfast and some free time before your onward journey. Airport transfers and any additional nights can be arranged in advance as part of your private trip plan.",
    details: [
      "Breakfast and check-out",
      "Optional extra time in Marrakech",
      "Departure transfer by arrangement",
    ],
  },
];

const inclusions = [
  "Trip planning and route coordination",
  "Local guiding as agreed in your itinerary",
  "Accommodation specified in the final trip proposal",
  "Meals explicitly listed in your confirmed itinerary",
  "Transfers explicitly listed in your confirmed itinerary",
  "On-trip coordination and practical assistance",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency evacuation cover",
  "Mountain bike and personal riding equipment unless agreed",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses, tips and optional activities",
  "Additional nights or transfers not included in your proposal",
];

const preparation = [
  {
    title: "Your mountain bike",
    text: "Bring a well-maintained trail or enduro mountain bike appropriate for natural mountain terrain. Confirm bike hire, component compatibility and spare-part arrangements before departure.",
  },
  {
    title: "Clothing and protection",
    text: "Pack a suitable helmet, gloves, riding glasses, knee protection, comfortable riding layers and a lightweight waterproof or windproof jacket.",
  },
  {
    title: "Fitness and skills",
    text: "Prepare for consecutive days on varied terrain. Confidence on loose surfaces, uneven trails and sustained descents will help you get more from the experience.",
  },
  {
    title: "Personal essentials",
    text: "Bring sun protection, reusable water bottles or a hydration pack, personal medication, a small repair kit and any nutrition you prefer while riding.",
  },
];

const faqs = [
  {
    q: "How difficult is the Atlas Singletrack tour?",
    a: "The tour is designed for confident mountain bikers and is rated moderate to challenging. The actual difficulty depends on trail conditions, elevation, route selection and the group's experience. Tell us about your riding level before booking.",
  },
  {
    q: "Do I need to be an experienced mountain biker?",
    a: "You should be comfortable riding off-road on uneven surfaces and handling descents. This is not intended as a beginner's cycling holiday. We can discuss your experience and recommend a more suitable trip if needed.",
  },
  {
    q: "Can I bring my own bike?",
    a: "Yes. You can discuss bringing your own bike with the team before travelling. We can also discuss rental availability, bike type, sizing and equipment requirements when planning your departure.",
  },
  {
    q: "What is included in the price?",
    a: "Inclusions depend on your confirmed proposal. Accommodation, guiding, transfers, meals, bike rental and other services must be clearly listed in your final itinerary before payment.",
  },
  {
    q: "When is the best time to ride?",
    a: "Spring and autumn are popular periods for mountain biking in the Atlas. Weather, trail conditions and temperatures vary with altitude and season, so we will help select suitable dates for your route.",
  },
  {
    q: "Can the itinerary be adapted for a private group?",
    a: "Yes. The trip can be discussed around your dates, group size, riding ability and preferred style of accommodation. The final route and daily distances will depend on conditions and the agreed plan.",
  },
];

const relatedTours = [
  {
    category: "MULTI-DAY MTB",
    title: "Atlas Mountains Cycling Tour",
    text: "Explore Morocco's mountain landscapes on a guided cycling journey.",
    image: images.gallery4,
    href: "/cycling-trips/mtb",
  },
  {
    category: "TECHNICAL RIDING",
    title: "Toubkal and Imlil MTB",
    text: "Discover mountain trails and spectacular terrain around the Toubkal region.",
    image: images.gallery2,
    href: "/cycling-trips/mtb",
  },
  {
    category: "PRIVATE ADVENTURE",
    title: "Mountain Bike Morocco",
    text: "Build a private mountain biking trip around your own riding goals.",
    image: images.gallery3,
    href: "/cycling-trips",
  },
];

export default function AtlasSingletrackMountainBikeTourPage() {
  return (
    <main className="atlas-tour">
      <style>{`
        .atlas-tour {
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

        .atlas-tour * { box-sizing: border-box; }
        .atlas-tour img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .atlas-tour a { color: inherit; }

        .atlas-tour .at-container {
          width: min(1240px, calc(100% - 64px));
          margin-inline: auto;
        }

        .atlas-tour .at-eyebrow {
          display: block;
          color: #946c30;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1.6;
          text-transform: uppercase;
        }

        .atlas-tour .at-heading {
          margin: 12px 0 20px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(32px, 3.5vw, 48px);
          font-weight: 400;
          letter-spacing: -1.25px;
          line-height: 1.14;
        }

        .atlas-tour .at-section { padding: 86px 0; }

        .atlas-tour .at-section-head {
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          align-items: end;
          gap: 44px;
          margin-bottom: 36px;
        }

        .atlas-tour .at-section-head .at-heading { margin-bottom: 0; }

        .atlas-tour .at-section-head > p {
          max-width: 480px;
          margin: 0 0 4px auto;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.85;
        }

        .atlas-tour .at-copy {
          color: #5f6359;
          font-size: 16px;
          line-height: 1.95;
        }

        .atlas-tour .at-button {
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

        .atlas-tour .at-button:hover {
          background: #a98343;
          border-color: #a98343;
          color: #fff;
        }

        .atlas-tour .at-button-dark {
          background: transparent;
          color: var(--ink);
        }

        .atlas-tour .at-button-dark:hover {
          background: var(--ink);
          color: white;
        }

        .atlas-tour .at-text-link {
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

        /* HERO: enforce readable text over the image. */
        .atlas-tour .at-hero {
          position: relative;
          display: flex;
          min-height: 680px;
          align-items: flex-end;
          background: #202a22;
          color: #fff;
          isolation: isolate;
        }

        .atlas-tour .at-hero-image,
        .atlas-tour .at-hero-shade {
          position: absolute;
          inset: 0;
        }

        .atlas-tour .at-hero-image { z-index: -2; }
        .atlas-tour .at-hero-image img { object-position: center 48%; }

        .atlas-tour .at-hero-shade {
          z-index: -1;
          background:
            linear-gradient(90deg, rgba(9, 14, 10, .88) 0%, rgba(9, 14, 10, .64) 43%, rgba(9, 14, 10, .22) 100%),
            linear-gradient(0deg, rgba(9, 14, 10, .78) 0%, rgba(9, 14, 10, .08) 72%);
        }

        .atlas-tour .at-hero-content {
          position: relative;
          z-index: 1;
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
          padding: 110px 0 65px;
          color: #fff !important;
        }

        .atlas-tour .at-hero .at-eyebrow {
          color: #f0ce88 !important;
          font-size: 12px;
        }

        .atlas-tour .at-hero h1 {
          max-width: 800px;
          margin: 19px 0 22px;
          color: #fff !important;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(48px, 6.5vw, 84px);
          font-weight: 400;
          letter-spacing: -2.7px;
          line-height: 1.02;
          text-shadow: 0 2px 20px rgba(0, 0, 0, .3);
        }

        .atlas-tour .at-hero-description {
          max-width: 570px;
          margin: 0;
          color: #fff !important;
          font-size: 17px;
          line-height: 1.85;
          text-shadow: 0 1px 8px rgba(0, 0, 0, .4);
        }

        .atlas-tour .at-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 22px;
          margin-top: 30px;
        }

        .atlas-tour .at-hero .at-button {
          background: #d1ac67;
          border-color: #d1ac67;
          color: #191d17 !important;
        }

        .atlas-tour .at-hero .at-button:hover {
          background: #f0d59b;
          border-color: #f0d59b;
          color: #191d17 !important;
        }

        .atlas-tour .at-hero-back {
          color: #fff !important;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: .4px;
          text-decoration: none;
          text-shadow: 0 1px 8px rgba(0, 0, 0, .5);
        }

        .atlas-tour .at-hero-back:hover { color: #f0ce88 !important; }

        .atlas-tour .at-hero-bottom {
          display: flex;
          flex-wrap: wrap;
          gap: 34px;
          margin-top: 53px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,.36);
        }

        .atlas-tour .at-hero-bottom div { min-width: 105px; }

        .atlas-tour .at-hero-bottom strong {
          display: block;
          color: #fff !important;
          font-size: 13px;
          letter-spacing: 1.3px;
        }

        .atlas-tour .at-hero-bottom span {
          color: #eeeae1 !important;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .atlas-tour .at-fact-strip {
          position: relative;
          z-index: 2;
          background: #fffefa;
          border-bottom: 1px solid var(--line);
        }

        .atlas-tour .at-fact-strip-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .atlas-tour .at-fact-strip-item {
          padding: 25px 26px;
          border-right: 1px solid var(--line);
        }

        .atlas-tour .at-fact-strip-item:first-child {
          border-left: 1px solid var(--line);
        }

        .atlas-tour .at-fact-strip-item span {
          display: block;
          margin-bottom: 5px;
          color: #946c30;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        .atlas-tour .at-fact-strip-item strong {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 19px;
          font-weight: 400;
          line-height: 1.4;
        }

        .atlas-tour .at-subnav {
          background: #eeece4;
          border-bottom: 1px solid var(--line);
        }

        .atlas-tour .at-subnav-inner {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
        }

        .atlas-tour .at-subnav a {
          padding: 16px;
          color: #44483f;
          font-size: 11px;
          letter-spacing: .5px;
          text-decoration: none;
        }

        .atlas-tour .at-subnav a:first-child { padding-left: 0; }
        .atlas-tour .at-subnav a:hover { color: #946c30; }

        .atlas-tour .at-overview-grid {
          display: grid;
          grid-template-columns: 1.18fr .82fr;
          gap: 75px;
          align-items: start;
        }

        .atlas-tour .at-overview-copy p { margin: 0 0 20px; }

        .atlas-tour .at-booking-card {
          padding: 32px;
          border: 1px solid var(--line);
          background: #fffefa;
          box-shadow: 0 12px 35px rgba(36,36,27,.05);
        }

        .atlas-tour .at-booking-card h3 {
          margin: 12px 0 16px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 29px;
          font-weight: 400;
          line-height: 1.25;
        }

        .atlas-tour .at-booking-card > p {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.85;
        }

        .atlas-tour .at-booking-meta {
          margin: 24px 0;
          border-top: 1px solid var(--line);
        }

        .atlas-tour .at-booking-meta div {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding: 12px 0;
          border-bottom: 1px solid var(--line);
          font-size: 13px;
        }

        .atlas-tour .at-booking-meta span { color: var(--muted); }
        .atlas-tour .at-booking-meta strong { text-align: right; }
        .atlas-tour .at-booking-card .at-button { width: 100%; }

        .atlas-tour .at-departure-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .atlas-tour .at-departure-card {
          min-height: 190px;
          padding: 27px 24px;
          border: 1px solid var(--line);
          background: #fffefa;
        }

        .atlas-tour .at-card-number {
          color: #946c30;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .atlas-tour .at-departure-card h3 {
          margin: 12px 0 10px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 1.25;
        }

        .atlas-tour .at-departure-card p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.85;
        }

        .atlas-tour .at-highlights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .atlas-tour .at-highlight-card {
          min-height: 230px;
          padding: 25px 22px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.7);
        }

        .atlas-tour .at-highlight-icon {
          display: flex;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          border: 1px solid #d8c69e;
          color: #946c30;
          font-size: 13px;
        }

        .atlas-tour .at-highlight-card h3 {
          margin: 19px 0 11px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 22px;
          font-weight: 400;
          line-height: 1.25;
        }

        .atlas-tour .at-highlight-card p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.85;
        }

        .atlas-tour .at-terrain { background: #efede5; }

        .atlas-tour .at-terrain-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          align-items: stretch;
        }

        .atlas-tour .at-terrain-copy,
        .atlas-tour .at-profile {
          padding: 30px;
          border: 1px solid var(--line);
          background: #fffefa;
        }

        .atlas-tour .at-terrain-copy h3,
        .atlas-tour .at-profile h3 {
          margin: 0 0 16px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 27px;
          font-weight: 400;
          line-height: 1.25;
        }

        .atlas-tour .at-terrain-copy p,
        .atlas-tour .at-profile p {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .atlas-tour .at-terrain-list {
          margin: 22px 0 0;
          padding: 0;
          list-style: none;
        }

        .atlas-tour .at-terrain-list li {
          display: flex;
          gap: 12px;
          padding: 12px 0;
          border-top: 1px solid var(--line);
          font-size: 14px;
          line-height: 1.7;
        }

        .atlas-tour .at-terrain-list li::before {
          content: "—";
          color: #946c30;
        }

        .atlas-tour .at-elevation {
          width: 100%;
          height: auto !important;
          margin-top: 20px;
        }

        .atlas-tour .at-profile-labels {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-top: 10px;
          color: var(--muted);
          font-size: 11px;
        }

        .atlas-tour .at-facts-table {
          width: 100%;
          border-collapse: collapse;
          background: rgba(255,255,255,.6);
        }

        .atlas-tour .at-facts-table th,
        .atlas-tour .at-facts-table td {
          padding: 17px 20px;
          border: 1px solid var(--line);
          text-align: left;
          vertical-align: top;
          font-size: 14px;
          line-height: 1.7;
        }

        .atlas-tour .at-facts-table th {
          width: 30%;
          color: #44483f;
          font-weight: 600;
        }

        .atlas-tour .at-facts-table td { color: var(--muted); }

        .atlas-tour .at-culture-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .atlas-tour .at-culture-card {
          padding: 25px 22px;
          border-top: 3px solid var(--gold);
          background: #fffefa;
        }

        .atlas-tour .at-culture-card h3 {
          margin: 0 0 12px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 23px;
          font-weight: 400;
          line-height: 1.25;
        }

        .atlas-tour .at-culture-card p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .atlas-tour .at-gallery {
          display: grid;
          grid-template-columns: 1.15fr .85fr 1fr;
          grid-template-rows: 210px 210px 210px;
          gap: 8px;
        }

        .atlas-tour .at-gallery-item {
          position: relative;
          overflow: hidden;
          background: var(--paper-deep);
        }

        .atlas-tour .at-gallery-item:first-child {
          grid-column: span 2;
          grid-row: span 2;
        }

        .atlas-tour .at-gallery-item:nth-child(4) { grid-row: span 2; }

        .atlas-tour .at-gallery-item img {
          transition: transform .6s ease;
        }

        .atlas-tour .at-gallery-item:hover img { transform: scale(1.035); }

        .atlas-tour .at-gallery-caption {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          padding: 32px 16px 13px;
          background: linear-gradient(transparent, rgba(0,0,0,.68));
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .atlas-tour .at-itinerary { background: #efede5; }

        .atlas-tour .at-itinerary-feature {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 30px;
          margin-bottom: 30px;
          background: #fffefa;
        }

        .atlas-tour .at-itinerary-feature-image { min-height: 310px; }

        .atlas-tour .at-itinerary-feature-copy {
          padding: 32px 32px 32px 0;
          align-self: center;
        }

        .atlas-tour .at-itinerary-feature-copy h3 {
          margin: 10px 0 15px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 32px;
          font-weight: 400;
          line-height: 1.2;
        }

        .atlas-tour .at-itinerary-feature-copy p {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .atlas-tour .at-itinerary-summary {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          margin-bottom: 26px;
          background: var(--line);
          border: 1px solid var(--line);
        }

        .atlas-tour .at-itinerary-summary div {
          padding: 18px;
          background: #fffefa;
        }

        .atlas-tour .at-itinerary-summary span {
          display: block;
          color: #946c30;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .atlas-tour .at-itinerary-summary strong {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 19px;
          font-weight: 400;
        }

        .atlas-tour .at-day {
          display: grid;
          grid-template-columns: 78px minmax(0, 1fr);
          margin-bottom: 11px;
          border: 1px solid var(--line);
          background: #fffefa;
        }

        .atlas-tour .at-day-number {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 25px 10px;
          background: #222820;
          color: #fff;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 27px;
        }

        .atlas-tour .at-day-content { padding: 23px 26px; }

        .atlas-tour .at-day-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
        }

        .atlas-tour .at-day-top h3 {
          margin: 0 0 8px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 25px;
          font-weight: 400;
          line-height: 1.3;
        }

        .atlas-tour .at-day-top .at-eyebrow {
          padding-top: 5px;
          text-align: right;
          white-space: nowrap;
        }

        .atlas-tour .at-day-content > p {
          margin: 10px 0 17px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .atlas-tour .at-day-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--line);
        }

        .atlas-tour .at-day-meta div { padding: 13px 12px 0 0; }

        .atlas-tour .at-day-meta span {
          display: block;
          color: #946c30;
          font-size: 10px;
          letter-spacing: .7px;
          text-transform: uppercase;
        }

        .atlas-tour .at-day-meta strong {
          display: block;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.6;
        }

        .atlas-tour .at-recovery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .atlas-tour .at-recovery-card {
          padding: 24px;
          border: 1px solid var(--line);
          background: #fffefa;
        }

        .atlas-tour .at-recovery-card span {
          color: #946c30;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .atlas-tour .at-recovery-card h3 {
          margin: 12px 0 10px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 23px;
          font-weight: 400;
          line-height: 1.25;
        }

        .atlas-tour .at-recovery-card p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .atlas-tour .at-inclusions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .atlas-tour .at-inclusion-panel {
          padding: 30px;
          border: 1px solid var(--line);
          background: #fffefa;
        }

        .atlas-tour .at-inclusion-panel h3 {
          margin: 0 0 21px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 29px;
          font-weight: 400;
        }

        .atlas-tour .at-inclusion-panel ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .atlas-tour .at-inclusion-panel li {
          display: flex;
          gap: 12px;
          padding: 12px 0;
          border-top: 1px solid var(--line);
          color: #565a51;
          font-size: 14px;
          line-height: 1.75;
        }

        .atlas-tour .at-inclusion-panel li::before {
          flex: 0 0 auto;
          color: #946c30;
          content: "+";
          font-weight: 700;
        }

        .atlas-tour .at-inclusion-panel.exclusions li::before { content: "−"; }

        .atlas-tour .at-preparation { background: #efede5; }

        .atlas-tour .at-prep-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .atlas-tour .at-prep-card {
          padding: 27px 22px;
          border: 1px solid var(--line);
          background: #fffefa;
        }

        .atlas-tour .at-prep-card h3 {
          margin: 0 0 12px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 23px;
          font-weight: 400;
          line-height: 1.25;
        }

        .atlas-tour .at-prep-card p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .atlas-tour .at-difficulty {
          padding: 85px 0;
          background: var(--green);
          color: #f6f2e9;
        }

        .atlas-tour .at-difficulty-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 70px;
          align-items: center;
        }

        .atlas-tour .at-difficulty .at-eyebrow { color: var(--gold-light); }

        .atlas-tour .at-difficulty .at-heading {
          max-width: 440px;
          color: #fff;
        }

        .atlas-tour .at-difficulty-copy {
          color: rgba(246,242,233,.84);
          font-size: 15px;
          line-height: 1.95;
        }

        .atlas-tour .at-difficulty-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 28px;
        }

        .atlas-tour .at-difficulty-stat {
          padding-top: 17px;
          border-top: 1px solid rgba(255,255,255,.3);
        }

        .atlas-tour .at-difficulty-stat strong {
          display: block;
          color: #fff;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 22px;
          font-weight: 400;
        }

        .atlas-tour .at-difficulty-stat span {
          color: rgba(255,255,255,.78);
          font-size: 12px;
          line-height: 1.6;
        }

        .atlas-tour .at-difficulty .at-button { margin-top: 25px; }

        .atlas-tour .at-faq-grid {
          display: grid;
          grid-template-columns: .72fr 1.28fr;
          gap: 70px;
          align-items: start;
        }

        .atlas-tour .at-faq-intro p {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .atlas-tour .at-faq-list { border-top: 1px solid var(--line); }

        .atlas-tour .at-faq-item {
          padding: 21px 0;
          border-bottom: 1px solid var(--line);
        }

        .atlas-tour .at-faq-item summary {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          cursor: pointer;
          list-style: none;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 21px;
          line-height: 1.45;
        }

        .atlas-tour .at-faq-item summary::-webkit-details-marker { display: none; }

        .atlas-tour .at-faq-item summary::after {
          flex: 0 0 auto;
          color: #946c30;
          content: "+";
          font-family: Arial, sans-serif;
          font-size: 22px;
        }

        .atlas-tour .at-faq-item[open] summary::after { content: "−"; }

        .atlas-tour .at-faq-item p {
          max-width: 680px;
          margin: 15px 30px 0 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }

        /* Final CTA: white type remains visible over the background image. */
        .atlas-tour .at-final-cta {
          position: relative;
          display: flex;
          min-height: 460px;
          align-items: center;
          color: #fff;
          background: #28332a;
          isolation: isolate;
        }

        .atlas-tour .at-final-cta-image,
        .atlas-tour .at-final-cta-shade {
          position: absolute;
          inset: 0;
        }

        .atlas-tour .at-final-cta-image { z-index: -2; }

        .atlas-tour .at-final-cta-shade {
          z-index: -1;
          background:
            linear-gradient(90deg, rgba(10, 15, 11, .88), rgba(10, 15, 11, .46)),
            linear-gradient(0deg, rgba(10, 15, 11, .48), transparent);
        }

        .atlas-tour .at-final-cta-content {
          position: relative;
          z-index: 1;
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
          padding: 80px 0;
          color: #fff !important;
        }

        .atlas-tour .at-final-cta .at-eyebrow {
          color: #f0ce88 !important;
        }

        .atlas-tour .at-final-cta h2 {
          max-width: 720px;
          margin: 15px 0 21px;
          color: #fff !important;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(39px, 5.2vw, 65px);
          font-weight: 400;
          letter-spacing: -1.8px;
          line-height: 1.08;
          text-shadow: 0 2px 18px rgba(0,0,0,.3);
        }

        .atlas-tour .at-final-cta p {
          max-width: 560px;
          color: #fff !important;
          font-size: 16px;
          line-height: 1.9;
        }

        .atlas-tour .at-final-cta .at-button {
          color: #191d17 !important;
        }

        .atlas-tour .at-final-cta .at-hero-back {
          color: #fff !important;
        }

        .atlas-tour .at-final-cta .at-hero-back:hover {
          color: #f0ce88 !important;
        }

        .atlas-tour .at-related { padding: 80px 0; }

        .atlas-tour .at-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .atlas-tour .at-related-card {
          border: 1px solid var(--line);
          background: #fffefa;
        }

        .atlas-tour .at-related-image {
          height: 235px;
          overflow: hidden;
        }

        .atlas-tour .at-related-image img {
          transition: transform .5s ease;
        }

        .atlas-tour .at-related-card:hover .at-related-image img {
          transform: scale(1.04);
        }

        .atlas-tour .at-related-copy { padding: 25px; }

        .atlas-tour .at-related-copy h3 {
          margin: 10px 0;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 27px;
          font-weight: 400;
          line-height: 1.25;
        }

        .atlas-tour .at-related-copy p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.85;
        }

        .atlas-tour .at-related-copy a {
          display: inline-block;
          margin-top: 10px;
          border-bottom: 1px solid var(--gold);
          padding-bottom: 5px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
        }

        /* Complete page footer. */
        .atlas-tour .at-footer {
          padding: 68px 0 0;
          background: #19251d;
          color: #f4f0e7;
        }

        .atlas-tour .at-footer-main {
          display: grid;
          grid-template-columns: 1.5fr .8fr .8fr 1fr;
          gap: 45px;
          padding-bottom: 48px;
        }

        .atlas-tour .at-footer-brand {
          display: inline-block;
          margin-bottom: 17px;
          color: #fff !important;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 29px;
          line-height: 1.15;
          text-decoration: none;
        }

        .atlas-tour .at-footer-brand span { color: #d2ad69; }

        .atlas-tour .at-footer-description {
          max-width: 350px;
          margin: 0;
          color: #d0d3ca;
          font-size: 14px;
          line-height: 1.9;
        }

        .atlas-tour .at-footer-heading {
          margin: 5px 0 20px;
          color: #e4c68c;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .atlas-tour .at-footer-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .atlas-tour .at-footer-links a {
          color: #e0e2d9 !important;
          font-size: 14px;
          line-height: 1.6;
          text-decoration: none;
          transition: color .2s ease;
        }

        .atlas-tour .at-footer-links a:hover {
          color: #e4c68c !important;
        }

        .atlas-tour .at-footer-contact p {
          margin: 0 0 18px;
          color: #d0d3ca;
          font-size: 14px;
          line-height: 1.85;
        }

        .atlas-tour .at-footer-contact .at-button {
          color: #19251d !important;
        }

        .atlas-tour .at-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 20px 0;
          border-top: 1px solid rgba(255,255,255,.17);
        }

        .atlas-tour .at-footer-bottom p {
          margin: 0;
          color: #c5c9bf;
          font-size: 12px;
          line-height: 1.7;
        }

        .atlas-tour .at-footer-bottom a {
          color: #e4c68c !important;
          text-decoration: none;
        }

        .atlas-tour .at-footer-bottom a:hover { color: #fff !important; }

        @media (min-width: 1500px) {
          .atlas-tour .at-hero { min-height: 740px; }
        }

        @media (max-width: 1100px) {
          .atlas-tour .at-overview-grid { gap: 40px; }
          .atlas-tour .at-difficulty-grid,
          .atlas-tour .at-faq-grid { gap: 40px; }
          .atlas-tour .at-footer-main {
            grid-template-columns: 1.2fr 1fr 1fr;
            gap: 35px;
          }
          .atlas-tour .at-footer-brand-column { grid-column: span 3; }
        }

        @media (max-width: 900px) {
          .atlas-tour .at-container,
          .atlas-tour .at-hero-content,
          .atlas-tour .at-final-cta-content {
            width: min(calc(100% - 40px), 720px);
          }

          .atlas-tour .at-section { padding: 64px 0; }
          .atlas-tour .at-hero { min-height: 620px; }

          .atlas-tour .at-hero h1 {
            font-size: clamp(46px, 8vw, 68px);
          }

          .atlas-tour .at-overview-grid,
          .atlas-tour .at-difficulty-grid,
          .atlas-tour .at-faq-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .atlas-tour .at-section-head {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .atlas-tour .at-section-head > p {
            max-width: 650px;
            margin-left: 0;
          }

          .atlas-tour .at-highlights-grid,
          .atlas-tour .at-culture-grid,
          .atlas-tour .at-recovery-grid,
          .atlas-tour .at-prep-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .atlas-tour .at-gallery {
            grid-template-rows: 170px 170px 170px;
          }

          .atlas-tour .at-itinerary-feature {
            grid-template-columns: 1fr 1fr;
          }

          .atlas-tour .at-itinerary-feature-image { min-height: 270px; }

          .atlas-tour .at-itinerary-feature-copy {
            padding: 24px 24px 24px 0;
          }

          .atlas-tour .at-footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 35px;
          }

          .atlas-tour .at-footer-brand-column { grid-column: span 2; }
        }

        @media (max-width: 600px) {
          .atlas-tour { font-size: 16px; }

          .atlas-tour .at-container,
          .atlas-tour .at-hero-content,
          .atlas-tour .at-final-cta-content {
            width: calc(100% - 34px);
          }

          .atlas-tour .at-section { padding: 50px 0; }

          .atlas-tour .at-heading {
            font-size: 34px;
            letter-spacing: -.8px;
          }

          .atlas-tour .at-section-head { margin-bottom: 26px; }

          .atlas-tour .at-section-head > p {
            font-size: 15px;
          }

          .atlas-tour .at-hero { min-height: 650px; }

          .atlas-tour .at-hero-image img { object-position: 61% center; }

          .atlas-tour .at-hero-shade {
            background:
              linear-gradient(90deg, rgba(9,14,10,.84), rgba(9,14,10,.32)),
              linear-gradient(0deg, rgba(9,14,10,.85), rgba(9,14,10,.04) 80%);
          }

          .atlas-tour .at-hero-content { padding: 85px 0 34px; }

          .atlas-tour .at-hero h1 {
            max-width: 450px;
            font-size: clamp(43px, 11vw, 55px);
            letter-spacing: -1.7px;
            line-height: 1.04;
          }

          .atlas-tour .at-hero-description {
            font-size: 16px;
            line-height: 1.8;
          }

          .atlas-tour .at-hero-actions {
            align-items: flex-start;
            gap: 17px;
          }

          .atlas-tour .at-hero-bottom {
            gap: 17px 22px;
            margin-top: 34px;
          }

          .atlas-tour .at-hero-bottom div { min-width: 82px; }

          .atlas-tour .at-hero-bottom strong { font-size: 12px; }
          .atlas-tour .at-hero-bottom span { font-size: 10px; }

          .atlas-tour .at-fact-strip-inner {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .atlas-tour .at-fact-strip-item {
            padding: 17px 13px;
          }

          .atlas-tour .at-fact-strip-item:nth-child(odd) {
            border-left: 1px solid var(--line);
          }

          .atlas-tour .at-fact-strip-item strong {
            font-size: 17px;
            line-height: 1.4;
          }

          .atlas-tour .at-subnav-inner {
            flex-wrap: nowrap;
            overflow-x: auto;
            scrollbar-width: thin;
          }

          .atlas-tour .at-subnav a {
            flex: 0 0 auto;
            padding: 14px 12px;
            font-size: 11px;
          }

          .atlas-tour .at-subnav a:first-child { padding-left: 0; }

          .atlas-tour .at-booking-card { padding: 23px; }

          .atlas-tour .at-booking-card h3 { font-size: 27px; }

          .atlas-tour .at-booking-meta div {
            font-size: 13px;
          }

          .atlas-tour .at-departure-grid,
          .atlas-tour .at-highlights-grid,
          .atlas-tour .at-terrain-grid,
          .atlas-tour .at-culture-grid,
          .atlas-tour .at-inclusions-grid,
          .atlas-tour .at-recovery-grid,
          .atlas-tour .at-prep-grid,
          .atlas-tour .at-related-grid {
            grid-template-columns: 1fr;
          }

          .atlas-tour .at-departure-card,
          .atlas-tour .at-highlight-card {
            min-height: auto;
          }

          .atlas-tour .at-departure-card p,
          .atlas-tour .at-highlight-card p,
          .atlas-tour .at-culture-card p,
          .atlas-tour .at-recovery-card p,
          .atlas-tour .at-prep-card p {
            font-size: 15px;
          }

          .atlas-tour .at-terrain-copy,
          .atlas-tour .at-profile {
            padding: 22px;
          }

          .atlas-tour .at-terrain-copy p,
          .atlas-tour .at-profile p {
            font-size: 15px;
          }

          .atlas-tour .at-facts-table th,
          .atlas-tour .at-facts-table td {
            padding: 12px 10px;
            font-size: 13px;
          }

          .atlas-tour .at-facts-table th { width: 36%; }

          .atlas-tour .at-profile-labels { font-size: 9px; }

          .atlas-tour .at-gallery {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 230px 145px 145px 145px;
            gap: 5px;
          }

          .atlas-tour .at-gallery-item:first-child {
            grid-column: span 2;
            grid-row: auto;
          }

          .atlas-tour .at-gallery-item:nth-child(4) { grid-row: auto; }

          .atlas-tour .at-gallery-caption {
            padding: 25px 9px 9px;
            font-size: 9px;
            letter-spacing: .5px;
          }

          .atlas-tour .at-itinerary-feature {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .atlas-tour .at-itinerary-feature-image {
            min-height: 230px;
            height: 230px;
          }

          .atlas-tour .at-itinerary-feature-copy { padding: 24px; }

          .atlas-tour .at-itinerary-feature-copy h3 { font-size: 28px; }

          .atlas-tour .at-itinerary-feature-copy p { font-size: 15px; }

          .atlas-tour .at-itinerary-summary {
            grid-template-columns: 1fr 1fr;
          }

          .atlas-tour .at-itinerary-summary div { padding: 13px; }

          .atlas-tour .at-itinerary-summary span { font-size: 10px; }

          .atlas-tour .at-itinerary-summary strong { font-size: 17px; }

          .atlas-tour .at-day { grid-template-columns: 44px minmax(0, 1fr); }

          .atlas-tour .at-day-number {
            padding: 17px 5px;
            font-size: 20px;
          }

          .atlas-tour .at-day-content { padding: 17px 13px; }

          .atlas-tour .at-day-top { display: block; }

          .atlas-tour .at-day-top h3 { font-size: 21px; }

          .atlas-tour .at-day-top .at-eyebrow {
            margin-top: 8px;
            text-align: left;
            white-space: normal;
          }

          .atlas-tour .at-day-content > p { font-size: 14px; }

          .atlas-tour .at-day-meta { grid-template-columns: 1fr; }

          .atlas-tour .at-day-meta div {
            padding: 10px 0;
            border-top: 1px solid var(--line);
          }

          .atlas-tour .at-day-meta strong { font-size: 14px; }

          .atlas-tour .at-inclusion-panel { padding: 22px; }

          .atlas-tour .at-inclusion-panel h3 { font-size: 26px; }

          .atlas-tour .at-inclusion-panel li { font-size: 14px; }

          .atlas-tour .at-difficulty { padding: 55px 0; }

          .atlas-tour .at-difficulty-copy { font-size: 15px; }

          .atlas-tour .at-difficulty-stats { gap: 9px; }

          .atlas-tour .at-difficulty-stat strong { font-size: 17px; }

          .atlas-tour .at-difficulty-stat span { font-size: 11px; }

          .atlas-tour .at-faq-item { padding: 19px 0; }

          .atlas-tour .at-faq-item summary { font-size: 19px; }

          .atlas-tour .at-faq-item p { font-size: 15px; }

          .atlas-tour .at-final-cta { min-height: 470px; }

          .atlas-tour .at-final-cta-shade {
            background:
              linear-gradient(90deg, rgba(10,15,11,.86), rgba(10,15,11,.45)),
              linear-gradient(0deg, rgba(10,15,11,.7), transparent);
          }

          .atlas-tour .at-final-cta-content { padding: 65px 0; }

          .atlas-tour .at-final-cta h2 {
            font-size: clamp(38px, 10vw, 47px);
            letter-spacing: -1px;
          }

          .atlas-tour .at-final-cta p { font-size: 15px; }

          .atlas-tour .at-related { padding: 55px 0; }

          .atlas-tour .at-related-image { height: 230px; }

          .atlas-tour .at-related-copy { padding: 23px; }

          .atlas-tour .at-related-copy h3 { font-size: 26px; }

          .atlas-tour .at-related-copy p { font-size: 15px; }

          .atlas-tour .at-footer { padding-top: 48px; }

          .atlas-tour .at-footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 34px 20px;
            padding-bottom: 35px;
          }

          .atlas-tour .at-footer-brand-column { grid-column: span 2; }

          .atlas-tour .at-footer-brand { font-size: 27px; }

          .atlas-tour .at-footer-description,
          .atlas-tour .at-footer-contact p,
          .atlas-tour .at-footer-links a {
            font-size: 14px;
          }

          .atlas-tour .at-footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            padding: 19px 0;
          }
        }

        @media (max-width: 380px) {
          .atlas-tour .at-hero h1 { font-size: 40px; }

          .atlas-tour .at-hero-actions {
            flex-direction: column;
            align-items: flex-start;
          }

          .atlas-tour .at-footer-main {
            grid-template-columns: 1fr;
          }

          .atlas-tour .at-footer-brand-column { grid-column: auto; }
        }
      `}</style>

      <section className="at-hero">
        <div className="at-hero-image">
          <img
            src={images.hero}
            alt="Mountain bikers exploring the trails of Morocco's High Atlas Mountains"
            fetchPriority="high"
          />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">
            Atlas Singletrack · Mountain Bike Morocco
          </span>
          <h1>
            Atlas Singletrack
            <br />
            Mountain Bike Tour
          </h1>
          <p className="at-hero-description">
            Six days of mountain riding through Morocco&apos;s spectacular High
            Atlas. Discover natural singletrack, remote valleys and unforgettable
            descents with a local team who know these mountains.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Plan your adventure <span aria-hidden="true">↗</span>
            </a>
            <a className="at-hero-back" href="/cycling-trips/mtb">
              ← Explore MTB tours
            </a>
          </div>
          <div className="at-hero-bottom">
            <div>
              <strong>06 DAYS</strong>
              <span>Duration</span>
            </div>
            <div>
              <strong>HIGH ATLAS</strong>
              <span>Region</span>
            </div>
            <div>
              <strong>MODERATE+</strong>
              <span>Difficulty</span>
            </div>
            <div>
              <strong>PRIVATE</strong>
              <span>Trip style</span>
            </div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip" aria-label="Tour summary">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact-strip-item">
            <span>Duration</span>
            <strong>6 days / 5 nights</strong>
          </div>
          <div className="at-fact-strip-item">
            <span>Destination</span>
            <strong>High Atlas, Morocco</strong>
          </div>
          <div className="at-fact-strip-item">
            <span>Ride style</span>
            <strong>Natural singletrack</strong>
          </div>
          <div className="at-fact-strip-item">
            <span>Level</span>
            <strong>Moderate to challenging</strong>
          </div>
        </div>
      </section>

      <nav className="at-subnav" aria-label="Tour page sections">
        <div className="at-container at-subnav-inner">
          <a href="#overview">Overview</a>
          <a href="#highlights">Highlights</a>
          <a href="#facts">Trip facts</a>
          <a href="#gallery">Gallery</a>
          <a href="#itinerary">Itinerary</a>
          <a href="#difficulty">Difficulty</a>
          <a href="#inclusions">Inclusions</a>
          <a href="#faqs">FAQs</a>
          <a href="#enquire">Enquire</a>
        </div>
      </nav>

      <section className="at-section" id="overview">
        <div className="at-container at-overview-grid">
          <div className="at-overview-copy">
            <span className="at-eyebrow">The journey</span>
            <h2 className="at-heading">
              A mountain bike adventure beyond the ordinary
            </h2>
            <p className="at-copy">
              The Atlas Singletrack Mountain Bike Tour is an invitation to
              discover a different side of Morocco. Leave the busy streets of
              Marrakech behind and venture into a world of mountain villages,
              winding paths, rocky ridgelines and spectacular High Atlas scenery.
            </p>
            <p className="at-copy">
              Over six days, explore a changing network of natural trails and
              mountain tracks. Each riding day brings a different combination of
              landscapes, terrain and views, with time to appreciate the culture
              and hospitality that make this region so distinctive.
            </p>
            <p className="at-copy">
              This is a trip for riders who enjoy being outdoors, discovering
              unfamiliar trails and embracing the character of a real mountain
              environment. Your final route is planned around your group&apos;s
              ability, the season and current trail conditions.
            </p>
            <p className="at-copy">
              Whether you are travelling with friends or arranging a private
              mountain biking escape, the journey can be tailored to your dates,
              preferred pace and accommodation requirements.
            </p>
            <a className="at-text-link" href="/contact">
              Discuss your trip ↗
            </a>
          </div>

          <aside className="at-booking-card">
            <span className="at-eyebrow">Your Atlas adventure</span>
            <h3>Make the mountains your playground.</h3>
            <p>
              Tell us when you want to travel, who is riding and what kind of
              trails you love. We will help shape a suitable itinerary.
            </p>
            <div className="at-booking-meta">
              <div>
                <span>Trip length</span>
                <strong>6 days</strong>
              </div>
              <div>
                <span>Travel style</span>
                <strong>Private / tailor-made</strong>
              </div>
              <div>
                <span>Starting city</span>
                <strong>Marrakech</strong>
              </div>
              <div>
                <span>Route</span>
                <strong>Confirmed with your proposal</strong>
              </div>
            </div>
            <a className="at-button" href="/contact">
              Enquire about this tour <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </div>
      </section>

      <section
        className="at-section"
        style={{ paddingTop: 20 }}
        id="departures"
      >
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">Travel your way</span>
              <h2 className="at-heading">
                Find a departure that works for you
              </h2>
            </div>
            <p>
              Private departures give you more flexibility to choose your dates,
              riding pace and the experience you want from the High Atlas.
            </p>
          </div>
          <div className="at-departure-grid">
            <article className="at-departure-card">
              <span className="at-card-number">01 / PRIVATE TRIP</span>
              <h3>Your own departure</h3>
              <p>
                Travel with friends or your own group, with dates and
                arrangements discussed directly with our team.
              </p>
            </article>
            <article className="at-departure-card">
              <span className="at-card-number">02 / FLEXIBLE DATES</span>
              <h3>Choose your timing</h3>
              <p>
                Share your preferred travel window and we will discuss seasonal
                conditions and suitable options.
              </p>
            </article>
            <article className="at-departure-card">
              <span className="at-card-number">03 / TAILORED ROUTE</span>
              <h3>Built around your riding</h3>
              <p>
                Talk to us about your group&apos;s experience, trail preferences,
                accommodation and daily riding ambitions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="at-section" id="highlights">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">The reasons to ride</span>
              <h2 className="at-heading">What makes this ride special</h2>
            </div>
            <p>
              More than a collection of trails, this is a chance to experience
              the High Atlas through its landscapes, local communities and
              natural mountain terrain.
            </p>
          </div>
          <div className="at-highlights-grid">
            {highlights.map((item) => (
              <article className="at-highlight-card" key={item.number}>
                <div className="at-highlight-icon">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="at-section at-terrain" id="terrain">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">Know the terrain</span>
              <h2 className="at-heading">
                Trails, terrain and the pace of the journey
              </h2>
            </div>
            <p>
              Every day is planned with the riding group and local conditions in
              mind. The final route determines the actual distance, climbing and
              technical difficulty.
            </p>
          </div>
          <div className="at-terrain-grid">
            <div className="at-terrain-copy">
              <h3>A varied mountain riding experience</h3>
              <p>
                Expect natural surfaces rather than purpose-built bike-park
                trails. Conditions can change from smooth, flowing sections to
                loose rock, uneven paths and more technical descents. Some
                sections may require short pushes or walking.
              </p>
              <p>
                The High Atlas is a real mountain environment. Weather,
                altitude, trail access and local conditions can influence the
                daily route, so flexibility is an important part of the
                adventure.
              </p>
              <ul className="at-terrain-list">
                <li>Natural singletrack and traditional mountain paths</li>
                <li>Rocky sections, loose surfaces and varied trail widths</li>
                <li>Climbs and descents depending on the selected route</li>
                <li>Scenic breaks, village stops and changing landscapes</li>
              </ul>
            </div>
            <div className="at-profile">
              <span className="at-eyebrow">Illustrative route profile</span>
              <h3>A day shaped by the mountains</h3>
              <p>
                This graphic illustrates the changing character of a mountain
                ride. It is not a measured elevation profile for a confirmed
                route.
              </p>
              <svg
                className="at-elevation"
                viewBox="0 0 560 210"
                role="img"
                aria-label="Illustrative mountain elevation profile"
              >
                <defs>
                  <linearGradient
                    id="at-profile-fill"
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#c6a05b"
                      stopOpacity=".38"
                    />
                    <stop
                      offset="100%"
                      stopColor="#c6a05b"
                      stopOpacity=".025"
                    />
                  </linearGradient>
                </defs>
                <g stroke="#e6e1d5" strokeWidth="1">
                  <line x1="18" y1="38" x2="545" y2="38" />
                  <line x1="18" y1="78" x2="545" y2="78" />
                  <line x1="18" y1="118" x2="545" y2="118" />
                  <line x1="18" y1="158" x2="545" y2="158" />
                  <line x1="18" y1="190" x2="545" y2="190" />
                </g>
                <path
                  d="M18 170 L48 151 L77 159 L104 116 L135 129 L165 88 L194 105 L224 68 L252 84 L280 56 L308 77 L337 99 L367 86 L397 123 L425 111 L454 146 L482 133 L511 165 L545 158 L545 190 L18 190 Z"
                  fill="url(#at-profile-fill)"
                />
                <path
                  d="M18 170 L48 151 L77 159 L104 116 L135 129 L165 88 L194 105 L224 68 L252 84 L280 56 L308 77 L337 99 L367 86 L397 123 L425 111 L454 146 L482 133 L511 165 L545 158"
                  fill="none"
                  stroke="#b78c46"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <circle cx="18" cy="170" r="4" fill="#b78c46" />
                <circle cx="280" cy="56" r="4" fill="#b78c46" />
                <circle cx="545" cy="158" r="4" fill="#b78c46" />
              </svg>
              <div className="at-profile-labels">
                <span>Start</span>
                <span>High point (illustrative)</span>
                <span>Finish</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="at-section" id="facts">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">Before you book</span>
              <h2 className="at-heading">Detailed tour facts</h2>
            </div>
            <p>
              Use these details as a starting point for planning. Your final
              itinerary and trip proposal will confirm the arrangements for your
              departure.
            </p>
          </div>
          <table className="at-facts-table">
            <tbody>
              {facts.map(([label, value]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="at-section" id="culture">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">More than mountain biking</span>
              <h2 className="at-heading">Beyond the trail</h2>
            </div>
            <p>
              The landscapes are only part of the experience. The journey also
              offers a glimpse into the culture, food and everyday life of
              Morocco&apos;s mountain communities.
            </p>
          </div>
          <div className="at-culture-grid">
            {beyondTrail.map((item) => (
              <article className="at-culture-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="at-section"
        id="gallery"
        style={{ paddingTop: 25 }}
      >
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">On the mountain</span>
              <h2 className="at-heading">A closer look at the ride</h2>
            </div>
            <p>
              Discover the trails, wide-open mountain scenery and riding
              atmosphere that make a journey through the Atlas so memorable.
            </p>
          </div>
          <div className="at-gallery">
            {[
              [images.gallery1, "Singletrack in the High Atlas", "atlas-gallery-1"],
              [images.gallery2, "Mountain trails", "atlas-gallery-2"],
              [images.gallery3, "Riding together", "atlas-gallery-3"],
              [images.gallery4, "High Atlas landscapes", "atlas-gallery-4"],
              [images.gallery5, "Open mountain terrain", "atlas-gallery-5"],
              [images.gallery6, "Explore Morocco by bike", "atlas-gallery-6"],
              [images.gallery7, "The journey continues", "atlas-gallery-7"],
              [images.gallery8, "A mountain adventure", "atlas-gallery-8"],
            ].map(([src, alt, key]) => (
              <div className="at-gallery-item" key={key}>
                <img src={src} alt={alt} loading="lazy" />
                <span className="at-gallery-caption">{alt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">Day by day</span>
              <h2 className="at-heading">Your suggested 6 days itinerary</h2>
            </div>
            <p>
              A sample journey to help you understand the flow of the trip. The
              precise route, riding distances, accommodation and transfers are
              confirmed in your individual proposal.
            </p>
          </div>

          <div className="at-itinerary-feature">
            <div className="at-itinerary-feature-image">
              <img
                src={images.overview}
                alt="Mountain bike tour through Morocco's Atlas Mountains"
                loading="lazy"
              />
            </div>
            <div className="at-itinerary-feature-copy">
              <span className="at-eyebrow">The route at a glance</span>
              <h3>From Marrakech into the mountains and back</h3>
              <p>
                Begin with preparation and a journey towards the High Atlas,
                then spend your riding days discovering natural trails, mountain
                valleys and remote scenery before returning to Marrakech.
              </p>
              <p>
                Your guide will help select suitable routes for your group&apos;s
                level and the conditions during your visit.
              </p>
            </div>
          </div>

          <div className="at-itinerary-summary">
            <div>
              <span>Trip duration</span>
              <strong>6 days</strong>
            </div>
            <div>
              <span>Riding days</span>
              <strong>Route dependent</strong>
            </div>
            <div>
              <span>Start and finish</span>
              <strong>Marrakech</strong>
            </div>
          </div>

          {itinerary.map((day) => (
            <article className="at-day" key={day.day}>
              <div className="at-day-number">{day.day}</div>
              <div className="at-day-content">
                <div className="at-day-top">
                  <h3>{day.title}</h3>
                  <span className="at-eyebrow">{day.location}</span>
                </div>
                <p>{day.text}</p>
                <div className="at-day-meta">
                  <div>
                    <span>Distance</span>
                    <strong>{day.distance}</strong>
                  </div>
                  <div>
                    <span>Ride focus</span>
                    <strong>{day.riding}</strong>
                  </div>
                  <div>
                    <span>Day plan</span>
                    <strong>{day.details[0]}</strong>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="at-section" id="recovery">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">Balance the adventure</span>
              <h2 className="at-heading">Recover between the rides</h2>
            </div>
            <p>
              Allow time to rest, enjoy local hospitality and take in the
              landscapes. Accommodation and recovery arrangements are confirmed
              in your final trip plan.
            </p>
          </div>
          <div className="at-recovery-grid">
            {[
              [
                "01",
                "Mountain stays",
                "Stay in selected local accommodation suited to the route and the group's preferences.",
              ],
              [
                "02",
                "Local hospitality",
                "Enjoy a welcoming atmosphere and opportunities to experience Moroccan mountain life.",
              ],
              [
                "03",
                "Good food",
                "Recharge with meals arranged according to the confirmed itinerary and accommodation.",
              ],
              [
                "04",
                "Time to unwind",
                "Build in space to rest, take photographs and enjoy the journey beyond the bike.",
              ],
            ].map(([number, title, text]) => (
              <article className="at-recovery-card" key={number}>
                <span>{number} / EXPERIENCE</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="at-section" id="inclusions">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">Clear arrangements</span>
              <h2 className="at-heading">
                Inclusions, exclusions and trip arrangements
              </h2>
            </div>
            <p>
              Your final written proposal will set out exactly what is included
              in your tour price, so you can plan confidently before travelling.
            </p>
          </div>
          <div className="at-inclusions-grid">
            <div className="at-inclusion-panel">
              <h3>What may be included</h3>
              <ul>
                {inclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="at-inclusion-panel exclusions">
              <h3>What is generally excluded</h3>
              <ul>
                {exclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="at-copy" style={{ marginTop: 18 }}>
            These are planning guidelines, not a substitute for your confirmed
            booking terms. Services vary by departure and are included only
            when specified in writing.
          </p>
        </div>
      </section>

      <section className="at-section at-preparation" id="preparation">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">Before you travel</span>
              <h2 className="at-heading">Prepare for the journey</h2>
            </div>
            <p>
              A little preparation helps you feel confident on the trails and
              ready for changing conditions in the Atlas Mountains.
            </p>
          </div>
          <div className="at-prep-grid">
            {preparation.map((item) => (
              <article className="at-prep-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="at-difficulty" id="difficulty">
        <div className="at-container at-difficulty-grid">
          <div>
            <span className="at-eyebrow">Know before you go</span>
            <h2 className="at-heading">Moderate to challenging</h2>
            <p className="at-difficulty-copy">
              This trip is intended for riders who are comfortable on off-road
              terrain and ready for the demands of mountain biking. Natural
              trails, loose surfaces, sustained descents and changing mountain
              conditions can all add to the challenge.
            </p>
            <p className="at-difficulty-copy">
              Your actual daily demands depend on the confirmed route. Share
              your riding experience and fitness level with us so we can discuss
              the most suitable itinerary before you book.
            </p>
            <a className="at-button" href="/contact">
              Discuss your riding level ↗
            </a>
          </div>
          <div>
            <span className="at-eyebrow">A realistic expectation</span>
            <div className="at-difficulty-stats">
              <div className="at-difficulty-stat">
                <strong>Off-road</strong>
                <span>Natural mountain trails</span>
              </div>
              <div className="at-difficulty-stat">
                <strong>Variable</strong>
                <span>Daily route demands</span>
              </div>
              <div className="at-difficulty-stat">
                <strong>Confident</strong>
                <span>Riding skills advised</span>
              </div>
            </div>
            <p className="at-difficulty-copy" style={{ marginTop: 24 }}>
              Altitude, weather, trail conditions and the group&apos;s pace
              influence how challenging each day feels. A suitable level of
              fitness, good bike control and willingness to adapt are important.
            </p>
          </div>
        </div>
      </section>

      <section className="at-section" id="faqs">
        <div className="at-container at-faq-grid">
          <div className="at-faq-intro">
            <span className="at-eyebrow">Useful information</span>
            <h2 className="at-heading">
              Questions about Atlas Singletrack Mountain Bike Tour
            </h2>
            <p>
              Need more detail before deciding? Send us your questions and we
              will help you understand the trip, equipment and arrangements.
            </p>
            <a className="at-text-link" href="/contact">
              Ask us a question ↗
            </a>
          </div>
          <div className="at-faq-list">
            {faqs.map((faq, index) => (
              <details
                className="at-faq-item"
                key={faq.q}
                open={index === 0}
              >
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="at-final-cta" id="enquire">
        <div className="at-final-cta-image">
          <img src={images.hero} alt="" loading="lazy" />
        </div>
        <div className="at-final-cta-shade" />
        <div className="at-final-cta-content">
          <span className="at-eyebrow">Your next adventure starts here</span>
          <h2>Ready to plan your Atlas Singletrack Mountain Bike Tour?</h2>
          <p>
            Tell us your preferred dates, group size and riding experience.
            Let&apos;s create a mountain biking journey that fits the way you
            want to ride.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Plan your adventure ↗
            </a>
            <a className="at-hero-back" href="/cycling-trips/mtb">
              Explore more MTB tours
            </a>
          </div>
        </div>
      </section>

      <section className="at-related">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">Keep exploring</span>
              <h2 className="at-heading">
                More mountain bike tours in Morocco
              </h2>
            </div>
            <p>
              Looking for a different route or a trip tailored to your group?
              Explore more cycling experiences and find your next adventure.
            </p>
          </div>
          <div className="at-related-grid">
            {relatedTours.map((tour) => (
              <article className="at-related-card" key={tour.title}>
                <div className="at-related-image">
                  <img src={tour.image} alt={tour.title} loading="lazy" />
                </div>
                <div className="at-related-copy">
                  <span className="at-eyebrow">{tour.category}</span>
                  <h3>{tour.title}</h3>
                  <p>{tour.text}</p>
                  <a href={tour.href}>Explore this tour ↗</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="at-footer">
        <div className="at-container">
          <div className="at-footer-main">
            <div className="at-footer-brand-column">
              <a className="at-footer-brand" href="/">
                <span>
                 <img
  src="/images/logo-mountain-bike-morocco-footer.png"
  alt="Mountain Bike Morocco"
  style={{ width: "180px", maxWidth: "100%", height: "auto" }}
/>
                </span>
              </a>
              <p className="at-footer-description">
                Discover Morocco on two wheels. Explore the High Atlas, ride
                natural singletrack and experience the landscapes and
                communities that make every journey unique.
              </p>
            </div>

            <div>
              <h2 className="at-footer-heading">Explore</h2>
              <nav className="at-footer-links" aria-label="Explore tours">
                <a href="/cycling-trips">All Cycling Tours</a>
                <a href="/cycling-trips/mtb">Mountain Bike Tours</a>
                <a href="/cycling-trips">E-MTB and Gravel Tours</a>
                <a href="/destinations">Destinations</a>
              </nav>
            </div>

            <div>
              <h2 className="at-footer-heading">Mountain Bike Morocco</h2>
              <nav className="at-footer-links" aria-label="Company links">
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
                <a href="/cycling-trips/mtb">
                  Atlas Mountain Bike Tours
                </a>
              </nav>
            </div>

            <div className="at-footer-contact">
              <h2 className="at-footer-heading">Plan Your Adventure</h2>
              <p>
                Tell us about your dates, group and riding experience. We can
                help you plan a private cycling journey in Morocco.
              </p>
              <a className="at-button" href="/contact">
                Get in touch <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="at-footer-bottom">
            <p>
              © {new Date().getFullYear()} Mountain Bike Morocco. All rights
              reserved.
            </p>
            <p>Ride the Atlas. Feel the freedom.</p>
            <p>
              <a href="/">Back to home ↑</a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}