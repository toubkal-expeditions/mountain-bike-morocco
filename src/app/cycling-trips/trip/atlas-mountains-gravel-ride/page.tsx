import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Atlas Mountains Gravel Ride Morocco | Mountain Bike Morocco",
  description:
    "Discover the Atlas Mountains on a guided gravel cycling adventure in Morocco. Ride quiet mountain roads, remote valleys and traditional Amazigh villages on a private gravel cycling tour.",
};

const images = {
  hero: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  overview: "/images/mountain-bike-morocco-hero.jpg",
  mountains: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  gravel: "/images/gravel-cycling-morocco.jpg",
  village: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  cycling: "/images/group-cycling-tour-morocco.jpg",
  landscape: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  final: "/images/mountain-bike-morocco-hero.jpg",
};

const facts = [
  ["Duration", "Customisable"],
  ["Destination", "High Atlas Mountains"],
  ["Starting point", "Marrakech"],
  ["Cycling style", "Gravel cycling"],
  ["Terrain", "Mountain roads and rural tracks"],
  ["Difficulty", "Adapted to your experience"],
  ["Experience", "Active cyclists"],
  ["Tour format", "Private guided tour"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "Ride the High Atlas",
    text: "Discover the dramatic landscapes of the High Atlas on a cycling journey through mountain scenery, open valleys and traditional settlements.",
  },
  {
    number: "02",
    title: "Quiet Gravel Roads",
    text: "Leave busy roads behind and explore quieter routes, rural tracks and changing surfaces that make gravel cycling in Morocco so rewarding.",
  },
  {
    number: "03",
    title: "Traditional Villages",
    text: "Pass through Amazigh communities and discover the architecture, hospitality and everyday traditions of mountain life.",
  },
  {
    number: "04",
    title: "A Journey at Your Pace",
    text: "Enjoy a private cycling experience with a route planned around your riding level, available time and preferred style of adventure.",
  },
];

const terrain = [
  "Quiet mountain roads connecting remote valleys",
  "Gravel and compacted rural tracks",
  "Mountain passes and scenic climbs",
  "Village roads and agricultural landscapes",
  "Changing surfaces and varied mountain terrain",
];

const culture = [
  {
    title: "Amazigh Heritage",
    text: "Discover the culture and traditions of the Amazigh communities who have lived in the Atlas Mountains for generations.",
  },
  {
    title: "Mountain Villages",
    text: "Ride through traditional settlements, where stone and earthen architecture reflect the character of the High Atlas.",
  },
  {
    title: "Local Hospitality",
    text: "Experience the warmth of mountain hospitality and enjoy opportunities to meet local people along the journey.",
  },
  {
    title: "Moroccan Cuisine",
    text: "Discover traditional Moroccan dishes, fresh local ingredients, mint tea and the flavours of mountain life.",
  },
];

const itinerary = [
  {
    day: "DAY 01",
    title: "Arrival in Marrakech",
    location: "Marrakech",
    image: images.overview,
    description:
      "Arrive in Marrakech and meet your local team. Depending on your arrival time, enjoy an introduction to the journey and prepare your equipment for the days ahead.",
    details: [
      "Airport arrival and transfer according to your arrangement",
      "Meet your local cycling team",
      "Bike check and equipment preparation",
      "Tour briefing and route discussion",
    ],
  },
  {
    day: "DAY 02",
    title: "Into the High Atlas Mountains",
    location: "Marrakech – Atlas Mountains",
    image: images.mountains,
    description:
      "Leave Marrakech and travel towards the High Atlas. Begin discovering the mountain environment, with a first ride adapted to the confirmed route and your group's ability.",
    details: [
      "Transfer towards the selected mountain area",
      "First gravel cycling experience",
      "Discover mountain scenery and traditional settlements",
      "Overnight accommodation according to the final programme",
    ],
  },
  {
    day: "DAY 03",
    title: "Gravel Roads and Mountain Valleys",
    location: "High Atlas",
    image: images.gravel,
    description:
      "Explore the character of Atlas gravel riding. Follow quiet roads and rural tracks through mountain landscapes, enjoying changing scenery and the atmosphere of the region.",
    details: [
      "Guided gravel ride",
      "Mountain roads and rural tracks",
      "Scenic viewpoints and photography stops",
      "Local village encounters along the route",
    ],
  },
  {
    day: "DAY 04",
    title: "Discover Remote Mountain Communities",
    location: "Atlas Mountains",
    image: images.village,
    description:
      "Continue through the Atlas Mountains, discovering traditional villages and the landscapes that connect the region's valleys. The route is selected according to the group's riding level.",
    details: [
      "Ride through traditional mountain settlements",
      "Discover local landscapes and architecture",
      "Enjoy breaks and refreshments along the way",
      "Experience the atmosphere of rural Morocco",
    ],
  },
  {
    day: "DAY 05",
    title: "A Scenic Gravel Cycling Journey",
    location: "High Atlas",
    image: images.landscape,
    description:
      "Enjoy another day of gravel exploration through the mountains. Discover new roads and landscapes while your local team supports the journey.",
    details: [
      "Guided cycling through the selected route",
      "Mountain climbs and varied terrain",
      "Time to enjoy the scenery",
      "Support according to the confirmed tour arrangement",
    ],
  },
  {
    day: "DAY 06",
    title: "Final Ride and Return to Marrakech",
    location: "Atlas Mountains – Marrakech",
    image: images.cycling,
    description:
      "Enjoy a final opportunity to ride in the Atlas Mountains before returning towards Marrakech. The final cycling route and transfer arrangements are confirmed in your itinerary.",
    details: [
      "Final gravel cycling experience",
      "Return transfer towards Marrakech",
      "End of the guided mountain journey",
      "Overnight in Marrakech according to your arrangement",
    ],
  },
  {
    day: "DAY 07",
    title: "Departure from Marrakech",
    location: "Marrakech",
    image: images.overview,
    description:
      "Your gravel cycling adventure comes to an end. Depending on your flight schedule, enjoy some free time in Marrakech before your departure transfer.",
    details: [
      "Breakfast according to accommodation arrangements",
      "Free time depending on departure schedule",
      "Airport transfer if included in your confirmed programme",
    ],
  },
];

const preparation = [
  {
    title: "Your Gravel Bike",
    text: "Bring a gravel bike suitable for mountain riding, with gearing and tyres appropriate for the confirmed route and surface conditions.",
  },
  {
    title: "Fitness and Experience",
    text: "A reasonable level of cycling fitness is recommended. Previous experience on gravel roads and longer rides will help you enjoy the journey.",
  },
  {
    title: "Clothing and Equipment",
    text: "Pack comfortable cycling clothing, gloves, a helmet, sunglasses and layers suitable for changing mountain temperatures.",
  },
  {
    title: "Personal Essentials",
    text: "Bring sun protection, personal medication, hydration equipment and any specialist cycling accessories you normally use.",
  },
];

const faqs = [
  {
    question: "What is an Atlas Mountains gravel cycling tour?",
    answer:
      "It is a guided cycling journey through the Atlas Mountains using a combination of quiet roads, gravel surfaces and rural tracks. The route is designed around the group's experience and the conditions of the selected region.",
  },
  {
    question: "How many days does the tour last?",
    answer:
      "The programme presented here is a seven-day journey. Shorter and longer private arrangements can be discussed according to your available time and preferred route.",
  },
  {
    question: "Is this tour suitable for beginners?",
    answer:
      "The tour is best suited to cyclists who are comfortable riding regularly. The route and daily riding demands should be discussed before booking so the experience can be adapted to your level.",
  },
  {
    question: "What type of bicycle should I bring?",
    answer:
      "A gravel bike is the natural choice for this journey. The ideal tyre width, gearing and equipment depend on the final route and surface conditions.",
  },
  {
    question: "Are the routes entirely off-road?",
    answer:
      "No. Gravel cycling in the Atlas Mountains can combine quiet paved roads, gravel tracks and rural surfaces. The exact balance depends on the selected route.",
  },
  {
    question: "Is a support vehicle available?",
    answer:
      "Support vehicle arrangements can be included in the private tour proposal. The services, transfers and support details will be confirmed before departure.",
  },
  {
    question: "When is the best time to go gravel cycling in Morocco?",
    answer:
      "Spring and autumn are generally attractive periods for cycling in the Atlas Mountains. Conditions vary with altitude, so the best dates depend on the selected route.",
  },
  {
    question: "Can I customise the itinerary?",
    answer:
      "Yes. Private tours can be discussed around your dates, cycling experience, preferred daily distances, accommodation expectations and areas you would like to explore.",
  },
];

const relatedTours = [
  {
    category: "MOUNTAIN BIKE ADVENTURE",
    title: "Atlas Singletrack Mountain Bike Tour",
    text: "Discover the trails and mountain landscapes of the High Atlas on a guided mountain biking adventure.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/trip/atlas-singletrack-mountain-bike-tour-6-day",
  },
  {
    category: "E-MTB EXPERIENCE",
    title: "E-MTB Tours in Morocco",
    text: "Explore Morocco's mountain terrain with the added freedom and assistance of an electric mountain bike.",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/cycling-trips",
  },
  {
    category: "GRAVEL CYCLING",
    title: "Explore More Cycling Tours",
    text: "Discover private cycling journeys across Morocco and find the route that matches your riding ambitions.",
    image: "/images/group-cycling-tour-morocco.jpg",
    href: "/cycling-trips",
  },
];

export default function AtlasMountainsGravelRidePage() {
  return (
    <main className="gravel-tour">
      <style>{`
        .gravel-tour {
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

        .gravel-tour * { box-sizing: border-box; }
        .gravel-tour img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .gravel-tour a { color: inherit; }

        .gravel-tour .at-container {
          width: min(1240px, calc(100% - 64px));
          margin-inline: auto;
        }

        .gravel-tour .at-eyebrow {
          display: block;
          color: #946c30;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1.6;
          text-transform: uppercase;
        }

        .gravel-tour .at-heading {
          margin: 12px 0 20px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(32px, 3.5vw, 48px);
          font-weight: 400;
          letter-spacing: -1.25px;
          line-height: 1.14;
        }

        .gravel-tour .at-section { padding: 86px 0; }

        .gravel-tour .at-section-head {
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          align-items: end;
          gap: 44px;
          margin-bottom: 36px;
        }

        .gravel-tour .at-section-head .at-heading { margin-bottom: 0; }

        .gravel-tour .at-section-head > p {
          max-width: 480px;
          margin: 0 0 4px auto;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.85;
        }

        .gravel-tour .at-copy {
          color: #5f6359;
          font-size: 16px;
          line-height: 1.95;
        }

        .gravel-tour .at-button {
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

        .gravel-tour .at-button:hover {
          background: #a98343;
          border-color: #a98343;
          color: #fff;
        }

        .gravel-tour .at-button-dark {
          background: transparent;
          color: var(--ink);
        }

        .gravel-tour .at-button-dark:hover {
          background: var(--ink);
          color: white;
        }

        .gravel-tour .at-text-link {
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

        .gravel-tour .at-hero {
          position: relative;
          display: flex;
          min-height: 680px;
          align-items: flex-end;
          background: #202a22;
          color: #fff;
          isolation: isolate;
        }

        .gravel-tour .at-hero-image,
        .gravel-tour .at-hero-shade {
          position: absolute;
          inset: 0;
        }

        .gravel-tour .at-hero-image { z-index: -2; }
        .gravel-tour .at-hero-image img { object-position: center 48%; }

        .gravel-tour .at-hero-shade {
          z-index: -1;
          background:
            linear-gradient(90deg, rgba(9, 14, 10, .88) 0%, rgba(9, 14, 10, .64) 43%, rgba(9, 14, 10, .22) 100%),
            linear-gradient(0deg, rgba(9, 14, 10, .78) 0%, rgba(9, 14, 10, .08) 72%);
        }

        .gravel-tour .at-hero-content {
          position: relative;
          z-index: 1;
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
          padding: 110px 0 65px;
          color: #fff !important;
        }

        .gravel-tour .at-hero .at-eyebrow {
          color: #f0ce88 !important;
          font-size: 12px;
        }

        .gravel-tour .at-hero h1 {
          max-width: 850px;
          margin: 19px 0 22px;
          color: #fff !important;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(48px, 6.5vw, 84px);
          font-weight: 400;
          letter-spacing: -2.7px;
          line-height: 1.02;
          text-shadow: 0 2px 20px rgba(0, 0, 0, .3);
        }

        .gravel-tour .at-hero-description {
          max-width: 570px;
          margin: 0;
          color: #fff !important;
          font-size: 17px;
          line-height: 1.85;
          text-shadow: 0 1px 8px rgba(0, 0, 0, .4);
        }

        .gravel-tour .at-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 22px;
          margin-top: 30px;
        }

        .gravel-tour .at-hero .at-button {
          background: #d1ac67;
          border-color: #d1ac67;
          color: #191d17 !important;
        }

        .gravel-tour .at-hero .at-button:hover {
          background: #f0d59b;
          border-color: #f0d59b;
          color: #191d17 !important;
        }

        .gravel-tour .at-hero-back {
          color: #fff !important;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: .4px;
          text-decoration: none;
          text-shadow: 0 1px 8px rgba(0, 0, 0, .5);
        }

        .gravel-tour .at-hero-back:hover { color: #f0ce88 !important; }

        .gravel-tour .at-hero-bottom {
          display: flex;
          flex-wrap: wrap;
          gap: 34px;
          margin-top: 53px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,.36);
        }

        .gravel-tour .at-hero-bottom div { min-width: 105px; }

        .gravel-tour .at-hero-bottom strong {
          display: block;
          color: #fff !important;
          font-size: 13px;
          letter-spacing: 1.3px;
        }

        .gravel-tour .at-hero-bottom span {
          color: #eeeae1 !important;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .gravel-tour .at-fact-strip {
          position: relative;
          z-index: 2;
          background: #fffefa;
          border-bottom: 1px solid var(--line);
        }

        .gravel-tour .at-fact-strip-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .gravel-tour .at-fact-strip-item {
          padding: 25px 26px;
          border-right: 1px solid var(--line);
        }

        .gravel-tour .at-fact-strip-item:first-child {
          border-left: 1px solid var(--line);
        }

        .gravel-tour .at-fact-strip-item span {
          display: block;
          margin-bottom: 5px;
          color: #946c30;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        .gravel-tour .at-fact-strip-item strong {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 19px;
          font-weight: 400;
          line-height: 1.4;
        }

        .gravel-tour .at-subnav {
          background: #eeece4;
          border-bottom: 1px solid var(--line);
        }

        .gravel-tour .at-subnav-inner {
          display: flex;
          flex-wrap: wrap;
          gap: 0;
        }

        .gravel-tour .at-subnav a {
          padding: 16px;
          color: #44483f;
          font-size: 11px;
          letter-spacing: .5px;
          text-decoration: none;
        }

        .gravel-tour .at-subnav a:first-child { padding-left: 0; }
        .gravel-tour .at-subnav a:hover { color: #946c30; }

        .gravel-tour .at-overview-grid {
          display: grid;
          grid-template-columns: 1.18fr .82fr;
          gap: 75px;
          align-items: start;
        }

        .gravel-tour .at-overview-copy p { margin: 0 0 20px; }

        .gravel-tour .at-overview-image {
          height: 390px;
          margin-top: 30px;
          overflow: hidden;
        }

        .gravel-tour .at-booking-card {
          padding: 32px;
          border: 1px solid var(--line);
          background: #fffefa;
          box-shadow: 0 12px 35px rgba(36,36,27,.05);
        }

        .gravel-tour .at-booking-card h3 {
          margin: 12px 0 16px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 29px;
          font-weight: 400;
          line-height: 1.25;
        }

        .gravel-tour .at-booking-card > p {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.85;
        }

        .gravel-tour .at-booking-meta {
          margin: 24px 0;
          border-top: 1px solid var(--line);
        }

        .gravel-tour .at-booking-meta div {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding: 12px 0;
          border-bottom: 1px solid var(--line);
          font-size: 13px;
        }

        .gravel-tour .at-booking-meta span { color: var(--muted); }
        .gravel-tour .at-booking-meta strong { text-align: right; }
        .gravel-tour .at-booking-card .at-button { width: 100%; }

        .gravel-tour .at-departure-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .gravel-tour .at-departure-card {
          min-height: 190px;
          padding: 27px 24px;
          border: 1px solid var(--line);
          background: #fffefa;
        }

        .gravel-tour .at-card-number {
          color: #946c30;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .gravel-tour .at-departure-card h3 {
          margin: 12px 0 10px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 1.25;
        }

        .gravel-tour .at-departure-card p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.85;
        }

        .gravel-tour .at-highlights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .gravel-tour .at-highlight-card {
          min-height: 230px;
          padding: 25px 22px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.7);
        }

        .gravel-tour .at-highlight-icon {
          display: flex;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          border: 1px solid #d8c69e;
          color: #946c30;
          font-size: 13px;
        }

        .gravel-tour .at-highlight-card h3 {
          margin: 19px 0 11px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 22px;
          font-weight: 400;
          line-height: 1.25;
        }

        .gravel-tour .at-highlight-card p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.85;
        }

        .gravel-tour .at-terrain { background: #efede5; }

        .gravel-tour .at-terrain-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          align-items: stretch;
        }

        .gravel-tour .at-terrain-copy,
        .gravel-tour .at-profile {
          padding: 30px;
          border: 1px solid var(--line);
          background: #fffefa;
        }

        .gravel-tour .at-terrain-copy h3,
        .gravel-tour .at-profile h3 {
          margin: 0 0 16px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 27px;
          font-weight: 400;
          line-height: 1.25;
        }

        .gravel-tour .at-terrain-copy p,
        .gravel-tour .at-profile p {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .gravel-tour .at-terrain-list {
          margin: 22px 0 0;
          padding: 0;
          list-style: none;
        }

        .gravel-tour .at-terrain-list li {
          display: flex;
          gap: 12px;
          padding: 12px 0;
          border-top: 1px solid var(--line);
          font-size: 14px;
          line-height: 1.7;
        }

        .gravel-tour .at-terrain-list li::before {
          content: "—";
          color: #946c30;
        }

        .gravel-tour .at-landscape-image {
          height: 310px;
          margin-top: 22px;
          overflow: hidden;
        }

        .gravel-tour .at-facts-table {
          width: 100%;
          border-collapse: collapse;
          background: rgba(255,255,255,.6);
        }

        .gravel-tour .at-facts-table th,
        .gravel-tour .at-facts-table td {
          padding: 17px 20px;
          border: 1px solid var(--line);
          text-align: left;
          vertical-align: top;
          font-size: 14px;
          line-height: 1.7;
        }

        .gravel-tour .at-facts-table th {
          width: 30%;
          color: #44483f;
          font-weight: 600;
        }

        .gravel-tour .at-facts-table td { color: var(--muted); }

        .gravel-tour .at-culture-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .gravel-tour .at-culture-card {
          padding: 25px 22px;
          border-top: 3px solid var(--gold);
          background: #fffefa;
        }

        .gravel-tour .at-culture-card h3 {
          margin: 0 0 12px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 22px;
          font-weight: 400;
          line-height: 1.3;
        }

        .gravel-tour .at-culture-card p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.85;
        }

        .gravel-tour .at-gallery-grid {
          display: grid;
          grid-template-columns: 1.2fr .8fr .8fr;
          grid-template-rows: 220px 220px;
          gap: 12px;
        }

        .gravel-tour .at-gallery-item {
          overflow: hidden;
          background: var(--paper-deep);
        }

        .gravel-tour .at-gallery-item:first-child { grid-row: span 2; }

        .gravel-tour .at-gallery-item img { transition: transform .6s ease; }
        .gravel-tour .at-gallery-item:hover img { transform: scale(1.04); }

        .gravel-tour .at-itinerary-feature {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 390px;
          background: var(--green);
          color: white;
        }

        .gravel-tour .at-itinerary-feature-image { min-height: 390px; }

        .gravel-tour .at-itinerary-feature-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 48px;
        }

        .gravel-tour .at-itinerary-feature-copy .at-eyebrow { color: #e3c27f; }

        .gravel-tour .at-itinerary-feature-copy h3 {
          margin: 14px 0;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(30px, 3.5vw, 44px);
          font-weight: 400;
          line-height: 1.15;
        }

        .gravel-tour .at-itinerary-feature-copy p {
          color: rgba(255,255,255,.78);
          font-size: 15px;
          line-height: 1.9;
        }

        .gravel-tour .at-itinerary-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
          margin-top: 30px;
        }

        .gravel-tour .at-day-card {
          display: grid;
          grid-template-columns: 190px 1fr;
          border: 1px solid var(--line);
          background: #fffefa;
        }

        .gravel-tour .at-day-image { min-height: 100%; }
        .gravel-tour .at-day-copy { padding: 24px; }

        .gravel-tour .at-day-number {
          color: #946c30;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .gravel-tour .at-day-copy h3 {
          margin: 8px 0 10px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 23px;
          font-weight: 400;
          line-height: 1.25;
        }

        .gravel-tour .at-day-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 14px;
          margin-bottom: 13px;
          color: #946c30;
          font-size: 11px;
          font-weight: 700;
        }

        .gravel-tour .at-day-copy p {
          margin: 0 0 13px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .gravel-tour .at-day-copy ul {
          margin: 0;
          padding-left: 17px;
          color: #55594f;
          font-size: 12px;
          line-height: 1.9;
        }

        .gravel-tour .at-inclusion-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 22px;
        }

        .gravel-tour .at-inclusion-card {
          padding: 32px;
          border: 1px solid var(--line);
          background: #fffefa;
        }

        .gravel-tour .at-inclusion-card h3 {
          margin: 0 0 20px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 29px;
          font-weight: 400;
        }

        .gravel-tour .at-inclusion-card ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .gravel-tour .at-inclusion-card li {
          padding: 12px 0;
          border-top: 1px solid var(--line);
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .gravel-tour .at-inclusion-card li::before {
          content: "＋";
          margin-right: 12px;
          color: #946c30;
        }

        .gravel-tour .at-inclusion-card.excluded li::before {
          content: "−";
          color: #777;
        }

        .gravel-tour .at-preparation-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .gravel-tour .at-preparation-card {
          padding: 27px;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.65);
        }

        .gravel-tour .at-preparation-card h3 {
          margin: 0 0 10px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 23px;
          font-weight: 400;
        }

        .gravel-tour .at-preparation-card p {
          margin: 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.85;
        }

        .gravel-tour .at-difficulty { background: #efede5; }

        .gravel-tour .at-difficulty-grid {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 55px;
          align-items: center;
        }

        .gravel-tour .at-difficulty-panel {
          padding: 32px;
          background: #fffefa;
          border: 1px solid var(--line);
        }

        .gravel-tour .at-difficulty-panel h3 {
          margin: 0 0 12px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 27px;
          font-weight: 400;
        }

        .gravel-tour .at-difficulty-panel p,
        .gravel-tour .at-difficulty-copy p {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .gravel-tour .at-faq-grid {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 70px;
        }

        .gravel-tour .at-faq-intro p {
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .gravel-tour .at-faq-item { border-bottom: 1px solid var(--line); }
        .gravel-tour .at-faq-item:first-child { border-top: 1px solid var(--line); }

        .gravel-tour .at-faq-item summary {
          position: relative;
          padding: 20px 35px 20px 0;
          cursor: pointer;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 19px;
          line-height: 1.45;
          list-style: none;
        }

        .gravel-tour .at-faq-item summary::-webkit-details-marker { display: none; }

        .gravel-tour .at-faq-item summary::after {
          content: "+";
          position: absolute;
          top: 17px;
          right: 4px;
          color: #946c30;
          font-family: Arial, sans-serif;
          font-size: 22px;
        }

        .gravel-tour .at-faq-item[open] summary::after { content: "−"; }

        .gravel-tour .at-faq-item p {
          margin: 0;
          padding: 0 25px 20px 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .gravel-tour .at-final-cta {
          position: relative;
          display: flex;
          min-height: 500px;
          align-items: center;
          background: #202a22;
          color: #fff;
          isolation: isolate;
        }

        .gravel-tour .at-final-cta-image,
        .gravel-tour .at-final-cta-shade {
          position: absolute;
          inset: 0;
        }

        .gravel-tour .at-final-cta-image { z-index: -2; }

        .gravel-tour .at-final-cta-shade {
          z-index: -1;
          background: linear-gradient(90deg, rgba(9,14,10,.88), rgba(9,14,10,.35));
        }

        .gravel-tour .at-final-cta-content {
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
          padding: 90px 0;
        }

        .gravel-tour .at-final-cta-content .at-eyebrow { color: #f0ce88; }

        .gravel-tour .at-final-cta-content h2 {
          max-width: 760px;
          margin: 16px 0;
          color: #fff;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(38px, 5vw, 62px);
          font-weight: 400;
          line-height: 1.1;
        }

        .gravel-tour .at-final-cta-content p {
          max-width: 580px;
          color: rgba(255,255,255,.85);
          font-size: 16px;
          line-height: 1.9;
        }

        .gravel-tour .at-related { padding: 86px 0; }

        .gravel-tour .at-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .gravel-tour .at-related-card {
          border: 1px solid var(--line);
          background: #fffefa;
        }

        .gravel-tour .at-related-image { height: 245px; overflow: hidden; }

        .gravel-tour .at-related-image img { transition: transform .5s ease; }
        .gravel-tour .at-related-card:hover .at-related-image img { transform: scale(1.04); }

        .gravel-tour .at-related-copy { padding: 25px; }

        .gravel-tour .at-related-copy h3 {
          margin: 10px 0;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 25px;
          font-weight: 400;
          line-height: 1.25;
        }

        .gravel-tour .at-related-copy p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .gravel-tour .at-related-copy a {
          display: inline-block;
          margin-top: 10px;
          color: #946c30;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
        }

        .gravel-tour .at-footer {
          padding: 70px 0 20px;
          background: #171b17;
          color: #fff;
        }

        .gravel-tour .at-footer-main {
          display: grid;
          grid-template-columns: 1.3fr .8fr .9fr 1fr;
          gap: 40px;
          padding-bottom: 55px;
        }

        .gravel-tour .at-footer-brand img {
          width: 180px;
          max-width: 100%;
          height: auto;
        }

        .gravel-tour .at-footer-description,
        .gravel-tour .at-footer-contact p {
          color: #bfc2b9;
          font-size: 13px;
          line-height: 1.9;
        }

        .gravel-tour .at-footer-heading {
          margin: 0 0 18px;
          color: #e2c27e;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.3px;
          text-transform: uppercase;
        }

        .gravel-tour .at-footer-links { display: grid; gap: 10px; }

        .gravel-tour .at-footer-links a,
        .gravel-tour .at-footer-bottom a {
          color: #d4d6ce;
          font-size: 13px;
          text-decoration: none;
        }

        .gravel-tour .at-footer-links a:hover,
        .gravel-tour .at-footer-bottom a:hover { color: #e2c27e; }

        .gravel-tour .at-footer-bottom {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 15px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,.16);
        }

        .gravel-tour .at-footer-bottom p {
          margin: 0;
          color: #aeb2a8;
          font-size: 11px;
        }

        @media (max-width: 900px) {
          .gravel-tour .at-overview-grid,
          .gravel-tour .at-difficulty-grid,
          .gravel-tour .at-faq-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .gravel-tour .at-highlights-grid,
          .gravel-tour .at-culture-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gravel-tour .at-footer-main {
            grid-template-columns: repeat(2, 1fr);
          }

          .gravel-tour .at-day-card { grid-template-columns: 150px 1fr; }
        }

        @media (max-width: 650px) {
          .gravel-tour .at-container,
          .gravel-tour .at-hero-content,
          .gravel-tour .at-final-cta-content {
            width: min(100% - 36px, 1240px);
          }

          .gravel-tour .at-section { padding: 60px 0; }
          .gravel-tour .at-hero { min-height: 690px; }
          .gravel-tour .at-hero-content { padding: 90px 0 40px; }

          .gravel-tour .at-hero h1 {
            font-size: clamp(43px, 12vw, 62px);
            letter-spacing: -1.8px;
          }

          .gravel-tour .at-hero-description { font-size: 15px; }

          .gravel-tour .at-hero-bottom {
            gap: 18px 24px;
            margin-top: 35px;
          }

          .gravel-tour .at-fact-strip-inner { grid-template-columns: repeat(2, 1fr); }
          .gravel-tour .at-fact-strip-item { padding: 18px 14px; }
          .gravel-tour .at-fact-strip-item strong { font-size: 17px; }

          .gravel-tour .at-subnav-inner {
            flex-wrap: nowrap;
            overflow-x: auto;
          }

          .gravel-tour .at-subnav a {
            flex: 0 0 auto;
            padding: 13px 12px;
          }

          .gravel-tour .at-subnav a:first-child { padding-left: 0; }

          .gravel-tour .at-section-head {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .gravel-tour .at-section-head > p { margin-left: 0; }

          .gravel-tour .at-departure-grid,
          .gravel-tour .at-highlights-grid,
          .gravel-tour .at-terrain-grid,
          .gravel-tour .at-culture-grid,
          .gravel-tour .at-inclusion-grid,
          .gravel-tour .at-preparation-grid,
          .gravel-tour .at-related-grid {
            grid-template-columns: 1fr;
          }

          .gravel-tour .at-gallery-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 210px 150px 150px;
          }

          .gravel-tour .at-gallery-item:first-child {
            grid-column: span 2;
            grid-row: auto;
          }

          .gravel-tour .at-itinerary-feature { grid-template-columns: 1fr; }
          .gravel-tour .at-itinerary-feature-image { min-height: 240px; }
          .gravel-tour .at-itinerary-feature-copy { padding: 30px 24px; }
          .gravel-tour .at-itinerary-grid { grid-template-columns: 1fr; }
          .gravel-tour .at-day-card { grid-template-columns: 1fr; }
          .gravel-tour .at-day-image { height: 220px; }
          .gravel-tour .at-footer-main { grid-template-columns: 1fr; gap: 30px; }
          .gravel-tour .at-footer-bottom { flex-direction: column; }

          .gravel-tour .at-facts-table th,
          .gravel-tour .at-facts-table td {
            padding: 12px;
            font-size: 12px;
          }

          .gravel-tour .at-final-cta { min-height: 470px; }
        }
      `}</style>

      <section className="at-hero">
        <div className="at-hero-image">
          <img src={images.hero} alt="Gravel cycling in the Atlas Mountains of Morocco" />
        </div>
        <div className="at-hero-shade" />

        <div className="at-hero-content">
          <span className="at-eyebrow">
            High Atlas Mountains · Gravel Cycling · Private Guided Tour
          </span>

          <h1>Atlas Mountains Gravel Ride in Morocco</h1>

          <p className="at-hero-description">
            Discover the freedom of gravel cycling in Morocco. Ride quiet
            mountain roads, explore remote valleys and experience the
            landscapes and traditions of the High Atlas on a private guided
            cycling journey.
          </p>

          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Plan your gravel adventure ↗
            </a>
            <a className="at-hero-back" href="/cycling-trips">
              Explore all cycling tours
            </a>
          </div>

          <div className="at-hero-bottom">
            <div>
              <strong>PRIVATE</strong>
              <span>Tour format</span>
            </div>
            <div>
              <strong>HIGH ATLAS</strong>
              <span>Destination</span>
            </div>
            <div>
              <strong>GRAVEL</strong>
              <span>Cycling style</span>
            </div>
            <div>
              <strong>FLEXIBLE</strong>
              <span>Programme</span>
            </div>
          </div>
        </div>
      </section>

      <div className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact-strip-item">
            <span>Destination</span>
            <strong>High Atlas Mountains</strong>
          </div>
          <div className="at-fact-strip-item">
            <span>Starting point</span>
            <strong>Marrakech</strong>
          </div>
          <div className="at-fact-strip-item">
            <span>Cycling style</span>
            <strong>Gravel Cycling</strong>
          </div>
          <div className="at-fact-strip-item">
            <span>Travel style</span>
            <strong>Private Guided</strong>
          </div>
        </div>
      </div>

      <nav className="at-subnav" aria-label="Tour sections">
        <div className="at-container at-subnav-inner">
          <a href="#overview">Overview</a>
          <a href="#highlights">Highlights</a>
          <a href="#terrain">Terrain</a>
          <a href="#facts">Trip facts</a>
          <a href="#gallery">Gallery</a>
          <a href="#itinerary">Itinerary</a>
          <a href="#inclusions">Inclusions</a>
          <a href="#preparation">Preparation</a>
          <a href="#faqs">FAQs</a>
          <a href="#enquire">Enquire</a>
        </div>
      </nav>

      <section className="at-section" id="overview">
        <div className="at-container at-overview-grid">
          <div className="at-overview-copy">
            <span className="at-eyebrow">The gravel experience</span>
            <h2 className="at-heading">
              Discover the High Atlas through a different kind of cycling
              adventure
            </h2>

            <p className="at-copy">
              The Atlas Mountains offer an extraordinary setting for gravel
              cycling. Beyond the busy roads and well-known tourist routes,
              a network of mountain roads and rural tracks connects remote
              valleys, traditional villages and spectacular landscapes.
            </p>

            <p className="at-copy">
              This journey invites you to explore Morocco at a different
              rhythm. Ride through changing mountain scenery, discover
              quieter routes and experience the character of the High Atlas
              from the saddle of your gravel bike.
            </p>

            <p className="at-copy">
              Planned as a private guided experience, the route can be adapted
              to your riding level, available time and preferred terrain.
              Daily distances, elevation and overnight arrangements are
              discussed and confirmed as part of your personalised proposal.
            </p>

            <div className="at-overview-image">
              <img
                src={images.overview}
                alt="Mountain scenery in Morocco's Atlas Mountains"
                loading="lazy"
              />
            </div>
          </div>

          <aside className="at-booking-card">
            <span className="at-eyebrow">Plan your journey</span>
            <h3>Your Atlas gravel adventure</h3>
            <p>
              A private gravel cycling experience through the High Atlas,
              designed around your dates, riding experience and preferred
              mountain landscapes.
            </p>

            <div className="at-booking-meta">
              <div><span>Destination</span><strong>High Atlas</strong></div>
              <div><span>Starting point</span><strong>Marrakech</strong></div>
              <div><span>Cycling style</span><strong>Gravel</strong></div>
              <div><span>Tour type</span><strong>Private guided</strong></div>
              <div><span>Duration</span><strong>Customisable</strong></div>
              <div><span>Price</span><strong>On request</strong></div>
            </div>

            <a className="at-button" href="/contact">
              Request your trip details ↗
            </a>
          </aside>
        </div>
      </section>

      <section className="at-section" style={{ background: "#eeece4" }}>
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">A journey through the Atlas</span>
              <h2 className="at-heading">
                Mountain roads, remote valleys and authentic Morocco
              </h2>
            </div>
            <p>
              Every part of the High Atlas offers a different perspective.
              Discover a landscape shaped by mountains, rural communities
              and centuries of Amazigh heritage.
            </p>
          </div>

          <div className="at-departure-grid">
            <article className="at-departure-card">
              <span className="at-card-number">01 / THE BEGINNING</span>
              <h3>Marrakech and the Mountains</h3>
              <p>
                Begin in Marrakech before travelling towards the dramatic
                landscapes and mountain roads of the High Atlas.
              </p>
            </article>

            <article className="at-departure-card">
              <span className="at-card-number">02 / THE RIDE</span>
              <h3>Gravel Roads and Valleys</h3>
              <p>
                Explore quieter mountain routes and rural tracks through
                changing scenery and traditional settlements.
              </p>
            </article>

            <article className="at-departure-card">
              <span className="at-card-number">03 / THE EXPERIENCE</span>
              <h3>Culture and Hospitality</h3>
              <p>
                Experience the atmosphere of mountain life and discover the
                hospitality and traditions of local communities.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="at-section" id="highlights">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">Why ride the Atlas</span>
              <h2 className="at-heading">Highlights of the gravel journey</h2>
            </div>
            <p>
              A cycling experience that combines rewarding riding, beautiful
              landscapes and meaningful encounters with mountain culture.
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
              <span className="at-eyebrow">The riding experience</span>
              <h2 className="at-heading">
                Discover the terrain of the High Atlas
              </h2>
            </div>
            <p>
              Gravel riding in Morocco is about variety. The route can
              combine different surfaces and mountain environments to create
              a journey suited to your experience.
            </p>
          </div>

          <div className="at-terrain-grid">
            <div className="at-terrain-copy">
              <h3>A varied mountain cycling experience</h3>
              <p>
                The Atlas Mountains offer a changing mix of roads and rural
                tracks. Depending on the selected route, you can experience
                mountain climbs, open valleys, remote settlements and
                rewarding descents.
              </p>
              <ul className="at-terrain-list">
                {terrain.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <div className="at-profile">
              <h3>Designed around your riding level</h3>
              <p>
                Gravel routes can vary considerably in distance, elevation,
                surface and technical character. Your itinerary should be
                selected according to your fitness, experience and the type
                of riding you enjoy.
              </p>
              <p>
                Before confirming your trip, we discuss the route profile,
                expected daily riding time, terrain and support arrangements
                so you know what to expect.
              </p>
              <div className="at-landscape-image">
                <img
                  src={images.gravel}
                  alt="Gravel cycling landscape in Morocco"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="at-section" id="facts">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">Before you travel</span>
              <h2 className="at-heading">Atlas gravel tour facts</h2>
            </div>
            <p>
              Essential information about the journey. Final route details,
              distances and services are confirmed in your private tour
              proposal.
            </p>
          </div>

          <table className="at-facts-table">
            <tbody>
              {facts.map(([label, value]) => (
                <tr key={label}>
                  <th>{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="at-section" style={{ background: "#eeece4" }}>
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">Beyond the bicycle</span>
              <h2 className="at-heading">
                Discover the culture of the Atlas Mountains
              </h2>
            </div>
            <p>
              A journey through the mountains is also an opportunity to
              discover the traditions, people and everyday life of rural
              Morocco.
            </p>
          </div>

          <div className="at-culture-grid">
            {culture.map((item) => (
              <article className="at-culture-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="at-section" id="gallery">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">The landscapes</span>
              <h2 className="at-heading">Gravel cycling in Morocco</h2>
            </div>
            <p>
              Mountain scenery, traditional settlements and the open
              landscapes that make the Atlas such a memorable cycling
              destination.
            </p>
          </div>

          <div className="at-gallery-grid">
            <div className="at-gallery-item">
              <img src={images.hero} alt="Atlas Mountains cycling landscape" loading="lazy" />
            </div>
            <div className="at-gallery-item">
              <img src={images.gravel} alt="Gravel cycling in Morocco" loading="lazy" />
            </div>
            <div className="at-gallery-item">
              <img src={images.village} alt="Traditional Atlas mountain village" loading="lazy" />
            </div>
            <div className="at-gallery-item">
              <img src={images.cycling} alt="Cyclists exploring Morocco" loading="lazy" />
            </div>
            <div className="at-gallery-item">
              <img src={images.landscape} alt="High Atlas mountain landscape" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="at-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">Your cycling programme</span>
              <h2 className="at-heading">A gravel journey through the Atlas</h2>
            </div>
            <p>
              The following is an example seven-day programme. The exact
              cycling routes, distances, accommodation and transfers are
              agreed in your final itinerary.
            </p>
          </div>

          <div className="at-itinerary-feature">
            <div className="at-itinerary-feature-image">
              <img src={images.mountains} alt="High Atlas Mountains" loading="lazy" />
            </div>
            <div className="at-itinerary-feature-copy">
              <span className="at-eyebrow">The experience</span>
              <h3>Seven days of mountain discovery</h3>
              <p>
                From the energy of Marrakech to the quiet roads and valleys
                of the High Atlas, discover a different side of Morocco
                through a private gravel cycling journey.
              </p>
              <p>
                Your daily programme is adapted to the confirmed route and
                your group's cycling experience.
              </p>
            </div>
          </div>

          <div className="at-itinerary-grid">
            {itinerary.map((day) => (
              <article className="at-day-card" key={day.day}>
                <div className="at-day-image">
                  <img src={day.image} alt={day.title} loading="lazy" />
                </div>
                <div className="at-day-copy">
                  <span className="at-day-number">{day.day}</span>
                  <h3>{day.title}</h3>
                  <div className="at-day-meta">
                    <span>{day.location}</span>
                  </div>
                  <p>{day.description}</p>
                  <ul>
                    {day.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="at-section" id="inclusions" style={{ background: "#eeece4" }}>
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">Your tour arrangement</span>
              <h2 className="at-heading">What's included in your journey</h2>
            </div>
            <p>
              Your final proposal will clearly list the services, support
              and arrangements included in your selected private tour.
            </p>
          </div>

          <div className="at-inclusion-grid">
            <div className="at-inclusion-card">
              <h3>Included in your proposal</h3>
              <ul>
                <li>Private tour planning and route coordination</li>
                <li>Local cycling guide as specified in your proposal</li>
                <li>Accommodation as listed in the confirmed itinerary</li>
                <li>Meals explicitly listed in your tour programme</li>
                <li>Transfers and support vehicle if specified</li>
                <li>On-trip coordination and practical assistance</li>
              </ul>
            </div>

            <div className="at-inclusion-card excluded">
              <h3>Not included unless agreed</h3>
              <ul>
                <li>International flights</li>
                <li>Travel insurance and emergency cover</li>
                <li>Gravel bicycle and personal cycling equipment</li>
                <li>Meals and drinks not specified in the itinerary</li>
                <li>Personal expenses and gratuities</li>
                <li>Additional nights and transfers outside the programme</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="at-section" id="preparation">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">Prepare for your adventure</span>
              <h2 className="at-heading">Getting ready for gravel cycling</h2>
            </div>
            <p>
              Good preparation helps you enjoy the riding and changing
              conditions of the Atlas Mountains.
            </p>
          </div>

          <div className="at-preparation-grid">
            {preparation.map((item) => (
              <article className="at-preparation-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="at-section at-difficulty">
        <div className="at-container at-difficulty-grid">
          <div className="at-difficulty-copy">
            <span className="at-eyebrow">Know before you ride</span>
            <h2 className="at-heading">Gravel cycling difficulty</h2>
            <p>
              Gravel cycling in the Atlas Mountains can involve long climbs,
              changing elevations and variable road surfaces. The physical
              demands depend on the chosen route and daily programme.
            </p>
            <p>
              We recommend regular cycling experience and a good general
              level of fitness. Before confirming your journey, discuss your
              riding background so the route can be matched to your ability.
            </p>
          </div>

          <div className="at-difficulty-panel">
            <h3>Is this tour right for you?</h3>
            <p>
              This experience is designed for cyclists who enjoy exploring
              beyond conventional road routes and are comfortable spending
              extended periods riding in mountain environments.
            </p>
            <p>
              The route, daily distances, climbing and surface conditions
              should all be confirmed before booking. A suitable programme
              can then be planned around your group.
            </p>
            <a className="at-text-link" href="/contact">
              Discuss your cycling level ↗
            </a>
          </div>
        </div>
      </section>

      <section className="at-section" id="faqs">
        <div className="at-container at-faq-grid">
          <div className="at-faq-intro">
            <span className="at-eyebrow">Useful information</span>
            <h2 className="at-heading">Frequently asked questions</h2>
            <p>
              Find answers to common questions about gravel cycling in the
              Atlas Mountains. Contact our team if you need more information
              before planning your journey.
            </p>
            <a className="at-text-link" href="/contact">
              Ask us a question ↗
            </a>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <details className="at-faq-item" key={faq.question} open={index === 0}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="at-final-cta" id="enquire">
        <div className="at-final-cta-image">
          <img src={images.final} alt="Mountain landscape in Morocco" loading="lazy" />
        </div>
        <div className="at-final-cta-shade" />

        <div className="at-final-cta-content">
          <span className="at-eyebrow">Your Atlas adventure starts here</span>
          <h2>Discover Morocco on two wheels. Your way.</h2>
          <p>
            Tell us about your cycling experience, preferred dates and the
            kind of gravel adventure you have in mind. We'll help you plan
            a private journey through the Atlas Mountains.
          </p>
          <a className="at-button" href="/contact">
            Plan your gravel tour ↗
          </a>
        </div>
      </section>

      <section className="at-related">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">Continue exploring</span>
              <h2 className="at-heading">More cycling adventures in Morocco</h2>
            </div>
            <p>
              Explore other ways to discover Morocco's mountains and
              landscapes by bicycle.
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
            <div className="at-footer-brand">
              <a href="/" aria-label="Mountain Bike Morocco home">
                <img
                  src="/images/logo-mountain-bike-morocco-footer.png"
                  alt="Mountain Bike Morocco"
                  loading="lazy"
                />
              </a>
              <p className="at-footer-description">
                Discover Morocco by bicycle. Explore the Atlas Mountains,
                remote valleys and spectacular landscapes with local
                knowledge and carefully planned cycling journeys.
              </p>
            </div>

            <div>
              <h3 className="at-footer-heading">Explore</h3>
              <div className="at-footer-links">
                <a href="/cycling-trips">All Cycling Tours</a>
                <a href="/cycling-trips/mtb">Mountain Bike Tours</a>
                <a href="/destinations">Destinations</a>
                <a href="/about">About Us</a>
                <a href="/contact">Contact</a>
              </div>
            </div>

            <div>
              <h3 className="at-footer-heading">Cycling</h3>
              <div className="at-footer-links">
                <a href="/cycling-trips">Gravel Cycling</a>
                <a href="/cycling-trips">Road Cycling</a>
                <a href="/cycling-trips">E-MTB Tours</a>
                <a href="/cycling-trips">Private Tours</a>
              </div>
            </div>

            <div className="at-footer-contact">
              <h3 className="at-footer-heading">Get in touch</h3>
              <p>
                Planning a cycling adventure in Morocco? Contact our team
                to discuss your route, dates and travel preferences.
              </p>
              <a className="at-text-link" href="/contact">
                Contact our team ↗
              </a>
            </div>
          </div>

          <div className="at-footer-bottom">
            <p>© {2026} Mountain Bike Morocco. All rights reserved.</p>
            <a href="/contact">Plan your cycling adventure</a>
          </div>
        </div>
      </footer>
    </main>
  );
}