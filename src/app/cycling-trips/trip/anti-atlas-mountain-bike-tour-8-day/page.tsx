import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Anti-Atlas Mountain Bike Tour Morocco – 8 Days | Mountain Bike Morocco",
  description:
    "Explore Morocco's Anti-Atlas Mountains on an eight-day mountain bike adventure. Discover rugged mountain terrain, remote villages, rocky valleys and spectacular landscapes.",
  alternates: {
    canonical: "/cycling-trips/trip/anti-atlas-mountain-bike-tour-8-day",
  },
};

const images = {
  hero: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  overview: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  mountains: "/images/singletrack-mtb-atlas-mountains.jpg",
  trails: "/images/e-mtb-tour-morocco.jpg",
  village: "/images/group-cycling-tour-morocco.jpg",
  valley: "/images/gravel-cycling-morocco.jpg",
  cycling: "/images/mountain-bike-morocco-hero.jpg",
  final: "/images/Desert-Agafay-Morocco.jpg",
};

const facts = [
  ["Duration", "8 days / 7 nights"],
  ["Destination", "Anti-Atlas Mountains, Morocco"],
  ["Starting point", "Marrakech"],
  ["Main areas", "Anti-Atlas mountain region"],
  ["Cycling style", "Mountain biking"],
  ["Difficulty", "To be confirmed against the final route"],
  ["Experience", "Mountain biking experience recommended"],
  ["Tour format", "Private cycling adventure"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "Explore the Anti-Atlas",
    text: "Discover a distinctive mountain region known for its rugged scenery, rocky formations, remote valleys and traditional Moroccan villages.",
  },
  {
    number: "02",
    title: "Ride Natural Mountain Trails",
    text: "Experience a selection of mountain biking routes through varied terrain, with trails chosen according to your riding ability and experience.",
  },
  {
    number: "03",
    title: "Discover Remote Villages",
    text: "Ride through rural landscapes and traditional settlements, discovering the quieter side of Morocco away from the main tourist routes.",
  },
  {
    number: "04",
    title: "Experience Morocco by Bike",
    text: "Combine rewarding mountain biking with impressive landscapes, local culture and the freedom of exploring the Anti-Atlas on two wheels.",
  },
];

const beyondTrail = [
  {
    title: "Traditional village life",
    text: "Discover the character of rural communities, traditional houses and the everyday life of villages scattered across the mountain region.",
  },
  {
    title: "Rugged mountain landscapes",
    text: "Experience the distinctive scenery of the Anti-Atlas, with rocky slopes, unusual geological formations and wide-open mountain views.",
  },
  {
    title: "Local culture and traditions",
    text: "Discover Moroccan hospitality, local architecture, regional food and the traditions of communities along the journey.",
  },
  {
    title: "A quieter side of Morocco",
    text: "Explore a less-travelled mountain region and enjoy a cycling journey focused on nature, discovery and time outdoors.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Marrakech",
    location: "Marrakech",
    distance: "No scheduled riding",
    riding: "Arrival and bike preparation",
    image: images.overview,
    text: "Arrive in Marrakech and meet the local team. After settling into your accommodation, discuss the mountain biking programme and the arrangements for the journey. There will be time to check your bicycle and equipment, review the planned route and prepare for the transfer towards the Anti-Atlas region.",
    details: [
      "Arrival and welcome in Marrakech",
      "Meet the local cycling team",
      "Bicycle and equipment check",
      "Tour briefing and preparation",
    ],
  },
  {
    day: "02",
    title: "Journey Towards the Anti-Atlas",
    location: "Marrakech – Anti-Atlas region",
    distance: "Route-dependent",
    riding: "Transfer and possible introductory ride",
    image: images.mountains,
    text: "Leave Marrakech and travel towards the Anti-Atlas Mountains. Along the way, the landscape gradually changes as the journey moves away from the city and towards the rugged mountain scenery of southern Morocco. Depending on the final arrangements, an introductory ride can be planned after arrival.",
    details: [
      "Travel towards the Anti-Atlas region",
      "Discover changing mountain landscapes",
      "Prepare for the mountain biking stages",
      "Overnight in the selected mountain area",
    ],
  },
  {
    day: "03",
    title: "First Mountain Biking Experience",
    location: "Anti-Atlas mountain region",
    distance: "Route-dependent",
    riding: "Selected mountain trails",
    image: images.trails,
    text: "Begin exploring the Anti-Atlas by mountain bike. Discover the character of the local terrain, with rocky landscapes, mountain tracks and natural trails selected according to the group's riding level. The first full riding day provides an opportunity to become familiar with the region and its terrain.",
    details: [
      "Explore selected mountain biking routes",
      "Ride through rugged natural landscapes",
      "Discover the character of the Anti-Atlas",
      "Adjust the route to the group's ability",
    ],
  },
  {
    day: "04",
    title: "Mountain Trails and Rocky Landscapes",
    location: "Anti-Atlas mountain region",
    distance: "Route-dependent",
    riding: "Mountain biking and natural terrain",
    image: images.valley,
    text: "Continue riding through the Anti-Atlas, discovering more of its varied mountain scenery. Depending on the confirmed route, the day may include rocky tracks, rural paths and sections of natural terrain. The route is planned around your mountain biking experience, equipment and preferred riding style.",
    details: [
      "Explore another section of the mountain region",
      "Ride selected natural trails and tracks",
      "Enjoy mountain scenery and viewpoints",
      "Continue the multi-day cycling journey",
    ],
  },
  {
    day: "05",
    title: "Discover Remote Valleys and Villages",
    location: "Anti-Atlas valleys",
    distance: "Route-dependent",
    riding: "Mountain trails and rural tracks",
    image: images.village,
    text: "Spend another day discovering the rural landscapes of the Anti-Atlas. Ride through valleys and mountain surroundings, passing traditional settlements and areas of cultivated land. The experience combines mountain biking with opportunities to appreciate the region's distinctive scenery and local character.",
    details: [
      "Ride through selected mountain valleys",
      "Discover traditional rural settlements",
      "Explore varied natural terrain",
      "Enjoy the landscapes of the Anti-Atlas",
    ],
  },
  {
    day: "06",
    title: "A Full Day Exploring the Anti-Atlas",
    location: "Anti-Atlas mountain region",
    distance: "Route-dependent",
    riding: "Selected mountain biking routes",
    image: images.mountains,
    text: "Enjoy another full day of mountain biking in the Anti-Atlas. The route can be selected to provide a different perspective on the region, with a combination of suitable trails, mountain tracks and scenic sections. Daily distance and technical demands depend on the final route and the group's ability.",
    details: [
      "Explore additional mountain biking terrain",
      "Ride routes selected for your experience",
      "Discover more of the mountain scenery",
      "Enjoy another day on the trails",
    ],
  },
  {
    day: "07",
    title: "Final Mountain Biking Stage",
    location: "Anti-Atlas region",
    distance: "Route-dependent",
    riding: "Final selected mountain biking route",
    image: images.cycling,
    text: "Complete the riding programme with a final mountain biking experience in the Anti-Atlas. The route is chosen according to the time available, your interests and the conditions of the terrain. After the ride, prepare for the return journey towards Marrakech or the agreed overnight location.",
    details: [
      "Enjoy the final planned riding stage",
      "Explore selected mountain trails",
      "Take in the surrounding landscapes",
      "Prepare for the return journey",
    ],
  },
  {
    day: "08",
    title: "Return to Marrakech and Departure",
    location: "Anti-Atlas region – Marrakech",
    distance: "No scheduled riding",
    riding: "Return transfer and departure arrangements",
    image: images.final,
    text: "After breakfast, begin the return journey towards Marrakech according to your travel arrangements. Depending on your departure time, there may be an opportunity to enjoy some time in the city before the end of your eight-day Anti-Atlas mountain biking adventure.",
    details: [
      "Breakfast and check-out",
      "Return journey towards Marrakech",
      "Airport transfer if included in your proposal",
      "End of the mountain biking tour",
    ],
  },
];

const inclusions = [
  "Trip planning and route coordination",
  "Local cycling support as agreed in your itinerary",
  "Accommodation specified in your final proposal",
  "Meals explicitly listed in your confirmed itinerary",
  "Support vehicle and transfers specified in your proposal",
  "Luggage assistance where included in your arrangements",
  "On-trip coordination and practical assistance",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Mountain bike and personal cycling equipment unless agreed",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses and tips",
  "Additional nights and transfers not included in your proposal",
  "Services not specifically listed in your confirmed booking",
];

const preparation = [
  {
    title: "Choose a Suitable Mountain Bike",
    text: "The bicycle should be suitable for the terrain included in the confirmed route. Discuss the trail conditions, technical sections and recommended bicycle setup with the team before travelling.",
  },
  {
    title: "Mountain Biking Equipment",
    text: "Bring a suitable helmet, gloves, cycling glasses, comfortable riding clothing and appropriate footwear. Protective equipment and basic repair supplies are recommended for multi-day mountain biking.",
  },
  {
    title: "Fitness and Trail Experience",
    text: "Prepare for consecutive days of riding on potentially varied terrain. Share your mountain biking experience, fitness level and preferred technical difficulty before confirming the route.",
  },
  {
    title: "Sun Protection and Hydration",
    text: "Bring sun protection, sufficient hydration equipment and clothing suitable for changing temperatures. Mountain conditions can vary throughout the day and between different elevations.",
  },
];

const faqs = [
  {
    q: "How long is the Anti-Atlas Mountain Bike Tour?",
    a: "The tour is planned over eight days and seven nights, with arrival and departure arrangements based around Marrakech. The programme includes several days of mountain biking in the Anti-Atlas region.",
  },
  {
    q: "Where does the tour start?",
    a: "The tour starts in Marrakech before travelling towards the Anti-Atlas Mountains. The return journey is planned according to your departure arrangements and the confirmed itinerary.",
  },
  {
    q: "What makes the Anti-Atlas good for mountain biking?",
    a: "The Anti-Atlas is known for its rugged mountain scenery, rocky landscapes, valleys and rural tracks. The actual riding experience depends on the selected routes and the terrain available for the agreed itinerary.",
  },
  {
    q: "What type of mountain bike do I need?",
    a: "A suitable mountain bike is recommended. The exact bicycle setup depends on the confirmed trails, terrain and technical demands. Discuss your bicycle and equipment with the team before booking.",
  },
  {
    q: "Is this tour suitable for beginners?",
    a: "Suitability depends on the final route, daily distances, elevation gain and technical difficulty. Mountain biking experience is recommended. Share your riding background so the route can be discussed at an appropriate level.",
  },
  {
    q: "Will there be a support vehicle?",
    a: "Support arrangements can be discussed when planning your private tour. The availability of a support vehicle, luggage assistance and transfers will be specified in your final trip proposal.",
  },
  {
    q: "What is the best time to visit the Anti-Atlas?",
    a: "Spring and autumn are generally suitable periods for cycling in Morocco. Weather conditions can vary depending on the exact location and elevation, so travel dates should be chosen with the planned route in mind.",
  },
  {
    q: "Are the daily distances and elevations fixed?",
    a: "No fixed distances or elevation figures are promised on this page. They depend on the final route, selected trails and overnight locations, and will be confirmed in your trip proposal.",
  },
  {
    q: "Can I customise the itinerary?",
    a: "The private tour can be discussed around your travel dates, group size, mountain biking experience and preferred riding style. The final route and arrangements are agreed before booking.",
  },
];

const relatedTours = [
  {
    category: "MOUNTAIN BIKE ADVENTURE",
    title: "Atlas Singletrack Mountain Bike Tour",
    text: "Discover natural singletrack, mountain trails and traditional villages in the High Atlas.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/trip/atlas-singletrack-mountain-bike-tour-6-day",
  },
  {
    category: "ATLAS CYCLING",
    title: "Atlas and Desert Cycling Tour",
    text: "Combine the mountain scenery of the High Atlas with the contrasting landscapes around Agafay.",
    image: "/images/Desert-Agafay-Morocco.jpg",
    href: "/cycling-trips/trip/atlas-and-desert-cycling-tour-9-day",
  },
  {
    category: "E-MTB EXPERIENCE",
    title: "Atlas Mountains E-Bike Tour",
    text: "Experience the Atlas landscapes with an electric mountain bike and a route planned around your group.",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/cycling-trips/trip/atlas-mountains-e-bike-tour-4-day",
  },
];

export default function AntiAtlasMountainBikeTour8DayPage() {
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
            linear-gradient(90deg, rgba(9,14,10,.88) 0%, rgba(9,14,10,.64) 43%, rgba(9,14,10,.22) 100%),
            linear-gradient(0deg, rgba(9,14,10,.78) 0%, rgba(9,14,10,.08) 72%);
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
          max-width: 850px;
          margin: 19px 0 22px;
          color: #fff !important;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(48px, 6.5vw, 84px);
          font-weight: 400;
          letter-spacing: -2.7px;
          line-height: 1.02;
          text-shadow: 0 2px 20px rgba(0,0,0,.3);
        }

        .atlas-tour .at-hero-description {
          max-width: 570px;
          margin: 0;
          color: #fff !important;
          font-size: 17px;
          line-height: 1.85;
          text-shadow: 0 1px 8px rgba(0,0,0,.4);
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
          text-shadow: 0 1px 8px rgba(0,0,0,.5);
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

        .atlas-tour .at-fact {
          min-height: 104px;
          padding: 23px 25px;
          border-right: 1px solid var(--line);
        }

        .atlas-tour .at-fact:last-child { border-right: 0; }

        .atlas-tour .at-fact span {
          display: block;
          margin-bottom: 5px;
          color: #8b7652;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .atlas-tour .at-fact strong {
          display: block;
          color: var(--ink);
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.4;
        }

        .atlas-tour .at-subnav {
          background: var(--green);
          color: #fff;
        }

        .atlas-tour .at-subnav-inner {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 9px 30px;
          padding: 16px 0;
        }

        .atlas-tour .at-subnav a {
          color: #eee9dc;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.3px;
          text-decoration: none;
          text-transform: uppercase;
          transition: color .2s ease;
        }

        .atlas-tour .at-subnav a:hover { color: var(--gold-light); }

        .atlas-tour .at-overview-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          align-items: center;
          gap: 75px;
        }

        .atlas-tour .at-overview-image {
          position: relative;
          min-height: 570px;
        }

        .atlas-tour .at-overview-image img { position: absolute; inset: 0; }

        .atlas-tour .at-overview-image::after {
          position: absolute;
          right: -18px;
          bottom: -18px;
          z-index: -1;
          width: 48%;
          height: 48%;
          border: 1px solid var(--gold);
          content: "";
        }

        .atlas-tour .at-overview-content { padding: 25px 0; }

        .atlas-tour .at-overview-content .at-copy { margin: 0 0 17px; }

        .atlas-tour .at-booking-card {
          padding: 32px;
          background: #fffefa;
          border: 1px solid var(--line);
          box-shadow: 0 15px 45px rgba(32,36,31,.06);
        }

        .atlas-tour .at-booking-card h3 {
          margin: 8px 0 12px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 27px;
          font-weight: 400;
          line-height: 1.25;
        }

        .atlas-tour .at-booking-card p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .atlas-tour .at-booking-list {
          margin: 22px 0;
          padding: 0;
          list-style: none;
        }

        .atlas-tour .at-booking-list li {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding: 11px 0;
          border-bottom: 1px solid var(--line);
          font-size: 13px;
        }

        .atlas-tour .at-booking-list span { color: var(--muted); }
        .atlas-tour .at-booking-list strong { text-align: right; }
        .atlas-tour .at-booking-card .at-button { width: 100%; }

        .atlas-tour .at-highlight-section { background: #eae6db; }

        .atlas-tour .at-highlight-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #d8d2c5;
          border: 1px solid #d8d2c5;
        }

        .atlas-tour .at-highlight {
          min-height: 245px;
          padding: 31px 25px;
          background: var(--paper);
        }

        .atlas-tour .at-highlight-number {
          display: block;
          margin-bottom: 28px;
          color: #b28a4c;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 25px;
        }

        .atlas-tour .at-highlight h3 {
          margin: 0 0 12px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 22px;
          font-weight: 400;
          line-height: 1.25;
        }

        .atlas-tour .at-highlight p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .atlas-tour .at-terrain-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 70px;
        }

        .atlas-tour .at-terrain-image {
          height: 490px;
          overflow: hidden;
        }

        .atlas-tour .at-terrain-image img { transition: transform .6s ease; }
        .atlas-tour .at-terrain-image:hover img { transform: scale(1.035); }

        .atlas-tour .at-terrain-points {
          margin: 28px 0 0;
          padding: 0;
          list-style: none;
        }

        .atlas-tour .at-terrain-points li {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 13px;
          padding: 15px 0;
          border-top: 1px solid var(--line);
          color: var(--muted);
          font-size: 14px;
        }

        .atlas-tour .at-terrain-points span {
          color: #a27b40;
          font-weight: 700;
        }

        .atlas-tour .at-facts-section { background: #fffefa; }

        .atlas-tour .at-facts-layout {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 75px;
        }

        .atlas-tour .at-facts-table { border-top: 1px solid var(--line); }

        .atlas-tour .at-facts-row {
          display: grid;
          grid-template-columns: .7fr 1.3fr;
          gap: 25px;
          padding: 16px 0;
          border-bottom: 1px solid var(--line);
          font-size: 14px;
        }

        .atlas-tour .at-facts-row span { color: var(--muted); }
        .atlas-tour .at-facts-row strong { font-weight: 600; }

        .atlas-tour .at-culture {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 520px;
          background: var(--green);
          color: #fff;
        }

        .atlas-tour .at-culture-image { min-height: 520px; }
        .atlas-tour .at-culture-content { align-self: center; padding: 70px clamp(35px, 7vw, 100px); }
        .atlas-tour .at-culture .at-eyebrow { color: var(--gold-light); }
        .atlas-tour .at-culture .at-heading { color: #fff; }
        .atlas-tour .at-culture .at-copy { color: #e1e2d8; }

        .atlas-tour .at-culture-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-top: 30px;
        }

        .atlas-tour .at-culture-item {
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,.25);
        }

        .atlas-tour .at-culture-item h3 {
          margin: 0 0 7px;
          color: #f1d49a;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 19px;
          font-weight: 400;
        }

        .atlas-tour .at-culture-item p {
          margin: 0;
          color: #d7dbd1;
          font-size: 12px;
          line-height: 1.8;
        }

        .atlas-tour .at-gallery-grid {
          display: grid;
          grid-template-columns: 1.25fr .75fr .75fr;
          grid-template-rows: 245px 245px;
          gap: 14px;
        }

        .atlas-tour .at-gallery-item { overflow: hidden; }
        .atlas-tour .at-gallery-item:first-child { grid-row: span 2; }
        .atlas-tour .at-gallery-item img { transition: transform .6s ease; }
        .atlas-tour .at-gallery-item:hover img { transform: scale(1.04); }

        .atlas-tour .at-itinerary-section { background: #eae6db; }

        .atlas-tour .at-itinerary-intro {
          max-width: 700px;
          margin: 0 0 42px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .atlas-tour .at-itinerary-list {
          display: grid;
          gap: 22px;
        }

        .atlas-tour .at-day {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 370px;
          background: #fffefa;
          border: 1px solid #e0dcd1;
        }

        .atlas-tour .at-day:nth-child(even) .at-day-image { order: 2; }
        .atlas-tour .at-day-image { min-height: 370px; }
        .atlas-tour .at-day-content { align-self: center; padding: 40px clamp(25px, 5vw, 65px); }

        .atlas-tour .at-day-number {
          color: #a27b40;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 38px;
          line-height: 1;
        }

        .atlas-tour .at-day-content h3 {
          margin: 12px 0;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(24px, 2.6vw, 32px);
          font-weight: 400;
          line-height: 1.2;
        }

        .atlas-tour .at-day-location {
          margin-bottom: 16px;
          color: #927344;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .atlas-tour .at-day-content > p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.85;
        }

        .atlas-tour .at-day-meta {
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

        .atlas-tour .at-day-content ul {
          display: grid;
          gap: 7px;
          margin: 15px 0 0;
          padding-left: 18px;
          color: #62665d;
          font-size: 12px;
        }

        .atlas-tour .at-inclusions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .atlas-tour .at-inclusion-card {
          padding: 38px;
          background: #fffefa;
          border: 1px solid var(--line);
        }

        .atlas-tour .at-inclusion-card h3 {
          margin: 0 0 22px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 29px;
          font-weight: 400;
        }

        .atlas-tour .at-inclusion-card ul {
          display: grid;
          gap: 13px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .atlas-tour .at-inclusion-card li {
          display: grid;
          grid-template-columns: 22px 1fr;
          gap: 10px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .atlas-tour .at-inclusion-card li span {
          color: #a27b40;
          font-weight: 700;
        }

        .atlas-tour .at-prep-section { background: #eae6db; }

        .atlas-tour .at-prep-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .atlas-tour .at-prep-card {
          padding: 28px 24px;
          background: var(--paper);
          border-top: 2px solid var(--gold);
        }

        .atlas-tour .at-prep-card h3 {
          margin: 0 0 13px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 21px;
          font-weight: 400;
        }

        .atlas-tour .at-prep-card p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.85;
        }

        .atlas-tour .at-difficulty-grid {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 75px;
          align-items: center;
        }

        .atlas-tour .at-difficulty-image { height: 430px; }

        .atlas-tour .at-difficulty-note {
          margin-top: 25px;
          padding: 22px 25px;
          background: #eae6db;
          border-left: 3px solid var(--gold);
          color: var(--muted);
          font-size: 13px;
          line-height: 1.85;
        }

        .atlas-tour .at-faq-section { background: #fffefa; }

        .atlas-tour .at-faq-layout {
          display: grid;
          grid-template-columns: .7fr 1.3fr;
          gap: 75px;
        }

        .atlas-tour .at-faq-list { border-top: 1px solid var(--line); }

        .atlas-tour .at-faq-list details {
          padding: 19px 0;
          border-bottom: 1px solid var(--line);
        }

        .atlas-tour .at-faq-list summary {
          position: relative;
          padding-right: 35px;
          color: var(--ink);
          cursor: pointer;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 19px;
          line-height: 1.45;
          list-style: none;
        }

        .atlas-tour .at-faq-list summary::-webkit-details-marker { display: none; }

        .atlas-tour .at-faq-list summary::after {
          position: absolute;
          top: 0;
          right: 3px;
          color: #a27b40;
          content: "+";
          font-family: Arial, sans-serif;
          font-size: 23px;
        }

        .atlas-tour .at-faq-list details[open] summary::after { content: "−"; }

        .atlas-tour .at-faq-list details p {
          max-width: 690px;
          margin: 13px 0 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.85;
        }

        .atlas-tour .at-final-cta {
          position: relative;
          display: flex;
          min-height: 500px;
          align-items: center;
          background: #1e2a22;
          color: #fff;
          isolation: isolate;
        }

        .atlas-tour .at-final-image,
        .atlas-tour .at-final-shade {
          position: absolute;
          inset: 0;
        }

        .atlas-tour .at-final-image { z-index: -2; }
        .atlas-tour .at-final-shade {
          z-index: -1;
          background: linear-gradient(90deg, rgba(10,17,12,.88), rgba(10,17,12,.35));
        }

        .atlas-tour .at-final-content {
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
          padding: 90px 0;
        }

        .atlas-tour .at-final-content .at-eyebrow { color: #f0ce88; }

        .atlas-tour .at-final-content h2 {
          max-width: 750px;
          margin: 15px 0 20px;
          color: #fff;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 400;
          letter-spacing: -1.8px;
          line-height: 1.1;
        }

        .atlas-tour .at-final-content p {
          max-width: 580px;
          margin-bottom: 28px;
          color: #f0eee6;
          font-size: 16px;
          line-height: 1.85;
        }

        .atlas-tour .at-related-section { padding: 86px 0; }

        .atlas-tour .at-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .atlas-tour .at-related-card {
          background: #fffefa;
          border: 1px solid var(--line);
        }

        .atlas-tour .at-related-image { height: 255px; overflow: hidden; }
        .atlas-tour .at-related-image img { transition: transform .5s ease; }
        .atlas-tour .at-related-card:hover .at-related-image img { transform: scale(1.04); }

        .atlas-tour .at-related-content { padding: 25px; }

        .atlas-tour .at-related-content .at-eyebrow {
          font-size: 9px;
          letter-spacing: 1.4px;
        }

        .atlas-tour .at-related-content h3 {
          margin: 10px 0;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 1.25;
        }

        .atlas-tour .at-related-content p {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .atlas-tour .at-related-content a {
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

        .atlas-tour .at-footer {
          background: #171d18;
          color: #eeeae1;
        }

        .atlas-tour .at-footer-main {
          display: grid;
          grid-template-columns: 1.3fr .8fr .9fr 1fr;
          gap: 45px;
          padding: 65px 0 50px;
        }

        .atlas-tour .at-footer-brand img {
          width: 190px;
          height: auto;
          object-fit: contain;
          object-position: left center;
        }

        .atlas-tour .at-footer-brand p {
          max-width: 300px;
          margin-top: 20px;
          color: #b9beb5;
          font-size: 13px;
          line-height: 1.9;
        }

        .atlas-tour .at-footer h3 {
          margin: 0 0 19px;
          color: #e4c78c;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.6px;
          text-transform: uppercase;
        }

        .atlas-tour .at-footer-links {
          display: grid;
          gap: 11px;
        }

        .atlas-tour .at-footer-links a {
          color: #c4c8c0;
          font-size: 13px;
          text-decoration: none;
          transition: color .2s ease;
        }

        .atlas-tour .at-footer-links a:hover { color: #e4c78c; }

        .atlas-tour .at-footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 20px 0;
          border-top: 1px solid rgba(255,255,255,.15);
          color: #9fa69c;
          font-size: 11px;
        }

        @media (max-width: 1000px) {
          .atlas-tour .at-overview-grid,
          .atlas-tour .at-terrain-grid,
          .atlas-tour .at-facts-layout,
          .atlas-tour .at-difficulty-grid,
          .atlas-tour .at-faq-layout { gap: 40px; }

          .atlas-tour .at-highlight-grid { grid-template-columns: repeat(2, 1fr); }
          .atlas-tour .at-prep-grid { grid-template-columns: repeat(2, 1fr); }
          .atlas-tour .at-footer-main { grid-template-columns: 1.2fr 1fr; }
        }

        @media (max-width: 700px) {
          .atlas-tour .at-container { width: min(100% - 40px, 1240px); }
          .atlas-tour .at-section { padding: 65px 0; }

          .atlas-tour .at-hero { min-height: 650px; }
          .atlas-tour .at-hero-content { width: calc(100% - 40px); padding: 90px 0 42px; }
          .atlas-tour .at-hero h1 { font-size: clamp(43px, 12vw, 62px); letter-spacing: -1.8px; }
          .atlas-tour .at-hero-description { font-size: 15px; }
          .atlas-tour .at-hero-bottom { gap: 18px 25px; margin-top: 38px; }

          .atlas-tour .at-fact-strip-inner { grid-template-columns: repeat(2, 1fr); }
          .atlas-tour .at-fact { min-height: 90px; padding: 17px 15px; }
          .atlas-tour .at-fact:nth-child(2) { border-right: 0; }
          .atlas-tour .at-fact:nth-child(-n+2) { border-bottom: 1px solid var(--line); }

          .atlas-tour .at-subnav-inner { justify-content: flex-start; gap: 12px 20px; }
          .atlas-tour .at-subnav a { font-size: 9px; }

          .atlas-tour .at-section-head { grid-template-columns: 1fr; gap: 14px; }
          .atlas-tour .at-section-head > p { margin: 0; }
          .atlas-tour .at-overview-grid,
          .atlas-tour .at-terrain-grid,
          .atlas-tour .at-facts-layout,
          .atlas-tour .at-difficulty-grid,
          .atlas-tour .at-faq-layout { grid-template-columns: 1fr; gap: 35px; }

          .atlas-tour .at-overview-image { min-height: 390px; margin-right: 12px; }
          .atlas-tour .at-booking-card { padding: 25px; }
          .atlas-tour .at-highlight-grid { grid-template-columns: 1fr 1fr; }
          .atlas-tour .at-highlight { min-height: 230px; padding: 23px 17px; }
          .atlas-tour .at-highlight h3 { font-size: 19px; }
          .atlas-tour .at-highlight p { font-size: 12px; }

          .atlas-tour .at-terrain-image { height: 350px; }
          .atlas-tour .at-culture { grid-template-columns: 1fr; }
          .atlas-tour .at-culture-image { min-height: 330px; }
          .atlas-tour .at-culture-content { padding: 55px 25px; }
          .atlas-tour .at-culture-grid { gap: 20px 15px; }

          .atlas-tour .at-gallery-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 250px 170px 170px;
          }

          .atlas-tour .at-gallery-item:first-child { grid-column: span 2; grid-row: auto; }
          .atlas-tour .at-day { grid-template-columns: 1fr; }
          .atlas-tour .at-day:nth-child(even) .at-day-image { order: 0; }
          .atlas-tour .at-day-image { min-height: 260px; }
          .atlas-tour .at-day-content { padding: 28px 23px; }

          .atlas-tour .at-inclusions-grid { grid-template-columns: 1fr; }
          .atlas-tour .at-inclusion-card { padding: 28px 23px; }
          .atlas-tour .at-prep-grid { grid-template-columns: 1fr; }
          .atlas-tour .at-difficulty-image { height: 330px; }

          .atlas-tour .at-final-content { width: calc(100% - 40px); padding: 75px 0; }
          .atlas-tour .at-related-grid { grid-template-columns: 1fr; }
          .atlas-tour .at-related-image { height: 240px; }
          .atlas-tour .at-footer-main { grid-template-columns: 1fr 1fr; gap: 35px 22px; padding: 50px 0 35px; }
          .atlas-tour .at-footer-bottom { flex-direction: column; gap: 8px; }
        }

        @media (max-width: 420px) {
          .atlas-tour .at-highlight-grid { grid-template-columns: 1fr; }
          .atlas-tour .at-highlight { min-height: auto; }
          .atlas-tour .at-facts-row { grid-template-columns: 1fr; gap: 3px; }
          .atlas-tour .at-footer-main { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="at-hero">
        <div className="at-hero-image">
          <img src={images.hero} alt="Rugged mountain landscape in Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · ANTI-ATLAS · MOUNTAIN BIKING · 8 DAYS</span>
          <h1>Anti-Atlas Mountain Bike Tour</h1>
          <p className="at-hero-description">
            Discover the rugged beauty of southern Morocco on an
            eight-day mountain biking adventure. Explore remote
            mountain landscapes, rocky valleys, traditional villages
            and natural trails across the Anti-Atlas region.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Cycling Adventure <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>08 DAYS</strong><span>MTB adventure</span></div>
            <div><strong>ANTI-ATLAS</strong><span>Mountain region</span></div>
            <div><strong>MTB TRAILS</strong><span>Natural terrain</span></div>
            <div><strong>MOROCCO</strong><span>Southern landscapes</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>8 Days / 7 Nights</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Anti-Atlas Mountains</strong></div>
          <div className="at-fact"><span>Starting point</span><strong>Marrakech</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Mountain Biking</strong></div>
        </div>
      </section>

      <nav className="at-subnav">
        <div className="at-container at-subnav-inner">
          <a href="#overview">Overview</a>
          <a href="#highlights">Highlights</a>
          <a href="#route">Route & Terrain</a>
          <a href="#itinerary">Itinerary</a>
          <a href="#included">Included</a>
          <a href="#preparation">Preparation</a>
          <a href="#faqs">FAQs</a>
        </div>
      </nav>

      <section className="at-section" id="overview">
        <div className="at-container at-overview-grid">
          <div className="at-overview-image">
            <img src={images.overview} alt="Mountain scenery and rugged terrain in Morocco" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A MOUNTAIN BIKING JOURNEY</span>
            <h2 className="at-heading">Discover the Rugged Landscapes of the Anti-Atlas</h2>
            <p className="at-copy">
              The Anti-Atlas Mountain Bike Tour is an eight-day
              journey into one of Morocco's distinctive mountain
              regions. Known for its rugged scenery, rocky slopes
              and remote valleys, the Anti-Atlas offers a different
              atmosphere from the better-known High Atlas.
            </p>
            <p className="at-copy">
              Explore the region by mountain bike, discovering
              selected trails and rural tracks through dramatic
              landscapes and traditional settlements. Each riding
              stage is planned around the terrain and your experience.
            </p>
            <p className="at-copy">
              This private mountain biking experience can be
              discussed around your preferred travel dates, group
              size and riding ability. The final route, daily stages
              and support arrangements are agreed before your trip.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the itinerary →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE MTB EXPERIENCE</span>
            <h2 className="at-heading">Eight Days of Mountain Biking and Discovery</h2>
            <p className="at-copy">
              The Anti-Atlas offers a varied mountain environment,
              and choosing the right routes is essential to making
              the most of your journey. Trail surfaces, technical
              sections and daily riding demands depend on the
              selected route.
            </p>
            <p className="at-copy">
              Share your mountain biking background, the type of
              trails you enjoy and your preferred daily distances.
              The route, riding stages, transfers and overnight
              arrangements can then be discussed around your group.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Anti-Atlas Mountain Bike Tour</h3>
            <p>Eight days exploring the rugged mountain landscapes and natural terrain of southern Morocco.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>8 days / 7 nights</strong></li>
              <li><span>Starting city</span><strong>Marrakech</strong></li>
              <li><span>Main region</span><strong>Anti-Atlas</strong></li>
              <li><span>Tour format</span><strong>Private MTB</strong></li>
              <li><span>Route programme</span><strong>Customised</strong></li>
            </ul>
            <a className="at-button" href="/contact">Enquire About This Tour <span>→</span></a>
          </aside>
        </div>
      </section>

      <section className="at-section at-highlight-section" id="highlights">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">THE EXPERIENCE</span>
              <h2 className="at-heading">Highlights of the Anti-Atlas Mountain Bike Tour</h2>
            </div>
            <p>
              Discover rugged mountain scenery, natural trails,
              remote valleys and traditional communities on an
              eight-day mountain biking journey through Morocco.
            </p>
          </div>
          <div className="at-highlight-grid">
            {highlights.map((item) => (
              <article className="at-highlight" key={item.number}>
                <span className="at-highlight-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="at-section" id="route">
        <div className="at-container at-terrain-grid">
          <div className="at-terrain-image">
            <img src={images.trails} alt="Natural mountain biking terrain in Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE & TERRAIN</span>
            <h2 className="at-heading">Rocky Trails, Mountain Tracks and Remote Valleys</h2>
            <p className="at-copy">
              The Anti-Atlas is characterised by rugged mountain
              scenery, rocky slopes and changing landscapes.
              Riding conditions can vary considerably between
              different valleys and trail sections.
            </p>
            <p className="at-copy">
              The exact surfaces depend on the final route.
              Sections may include natural trails, rural tracks
              or connecting roads. The selected routes should
              be confirmed before travelling so that your bicycle
              and equipment are suitable for the terrain.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Rugged mountain scenery and rocky terrain</li>
              <li><span>02</span>Natural trails and selected rural tracks</li>
              <li><span>03</span>Remote valleys and traditional villages</li>
              <li><span>04</span>Daily stages planned around your ability</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR JOURNEY</span>
            <h2 className="at-heading">Tour Information</h2>
            <p className="at-copy">
              Review the main details of this eight-day mountain
              biking experience. Exact distances, elevation,
              trail surfaces, accommodation and support services
              are confirmed in your personalised trip proposal.
            </p>
          </div>
          <div className="at-facts-table">
            {facts.map(([label, value]) => (
              <div className="at-facts-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="at-culture">
        <div className="at-culture-image">
          <img src={images.village} alt="Traditional rural village in the Moroccan mountains" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover the Landscapes and Culture of the Anti-Atlas</h2>
          <p className="at-copy">
            This journey is about more than the kilometres covered.
            Between riding stages, discover the landscapes,
            architecture and communities that give the Anti-Atlas
            its distinctive character.
          </p>
          <div className="at-culture-grid">
            {beyondTrail.map((item) => (
              <div className="at-culture-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="at-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">MOUNTAIN BIKING MOMENTS</span>
              <h2 className="at-heading">Explore the Landscapes Along the Journey</h2>
            </div>
            <p>
              Discover the rugged mountain scenery, natural
              terrain and rural landscapes that make the
              Anti-Atlas a distinctive place to explore by bike.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="Mountain scenery in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.trails} alt="Natural mountain biking terrain" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional Moroccan mountain village" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Rural valley landscape in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Cycling through a mountain landscape in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EIGHT DAYS IN MOROCCO</span>
              <h2 className="at-heading">Anti-Atlas Mountain Bike Tour Itinerary</h2>
            </div>
            <p>
              A suggested eight-day structure connecting
              Marrakech with the Anti-Atlas region. Final
              riding stages, transfers and overnight
              arrangements are confirmed during trip planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The itinerary below provides an overview of the
            experience. Daily distances, elevation gain and
            exact trail sections depend on the final programme
            agreed with your group.
          </p>
          <div className="at-itinerary-list">
            {itinerary.map((day) => (
              <article className="at-day" key={day.day}>
                <div className="at-day-image">
                  <img src={day.image} alt={day.title} loading="lazy" />
                </div>
                <div className="at-day-content">
                  <span className="at-day-number">{day.day}</span>
                  <h3>{day.title}</h3>
                  <div className="at-day-location">{day.location}</div>
                  <p>{day.text}</p>
                  <div className="at-day-meta">
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

      <section className="at-section" id="included">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">YOUR TRIP ARRANGEMENTS</span>
              <h2 className="at-heading">What Is Included in Your Mountain Bike Tour?</h2>
            </div>
            <p>
              The final inclusions are confirmed in your booking
              proposal. Review the services listed below and check
              your personalised itinerary before confirming your trip.
            </p>
          </div>
          <div className="at-inclusions-grid">
            <div className="at-inclusion-card">
              <h3>Included</h3>
              <ul>
                {inclusions.map((item) => (
                  <li key={item}><span>+</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="at-inclusion-card">
              <h3>Not Included</h3>
              <ul>
                {exclusions.map((item) => (
                  <li key={item}><span>−</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="at-section at-prep-section" id="preparation">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">BEFORE YOU TRAVEL</span>
              <h2 className="at-heading">Preparing for Your Anti-Atlas Mountain Bike Tour</h2>
            </div>
            <p>
              Prepare your mountain bike, equipment and fitness
              for a multi-day adventure through the varied
              landscapes and terrain of the Anti-Atlas.
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

      <section className="at-section">
        <div className="at-container at-difficulty-grid">
          <div className="at-difficulty-image">
            <img src={images.cycling} alt="Mountain biking landscape in Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">Difficulty and Mountain Biking Experience</h2>
            <p className="at-copy">
              The difficulty of this tour depends on the selected
              trails, daily distances, elevation gain and technical
              terrain. Rocky tracks and natural mountain trails
              can create different physical and technical demands.
            </p>
            <p className="at-copy">
              Tell us about your mountain biking experience,
              the type of trails you normally ride and your
              preferred daily distances. This helps us discuss
              a suitable itinerary and the right equipment
              for the journey.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty,
              distances, elevation figures and trail surfaces
              must be confirmed against the actual route
              before booking. This page does not promise a
              fixed technical grade or daily mileage.
            </div>
          </div>
        </div>
      </section>

      <section className="at-section at-faq-section" id="faqs">
        <div className="at-container at-faq-layout">
          <div>
            <span className="at-eyebrow">GOOD TO KNOW</span>
            <h2 className="at-heading">Frequently Asked Questions</h2>
            <p className="at-copy">
              Find answers to common questions about mountain
              biking in the Anti-Atlas. Contact our team if
              you need more details before planning your trip.
            </p>
            <a className="at-text-link" href="/contact">Ask Us a Question →</a>
          </div>
          <div className="at-faq-list">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="at-final-cta">
        <div className="at-final-image">
          <img src={images.final} alt="Moroccan mountain and rocky landscape" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR MOUNTAIN BIKING ADVENTURE STARTS HERE</span>
          <h2>Ready to Discover the Anti-Atlas by Mountain Bike?</h2>
          <p>
            Tell us your preferred dates, group size, mountain
            bike setup and riding experience. We will discuss
            a private eight-day journey and help you plan your
            mountain biking adventure in Morocco.
          </p>
          <a className="at-button" href="/contact">Plan Your Cycling Adventure <span>→</span></a>
        </div>
      </section>

      <section className="at-related-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EXPLORE MORE</span>
              <h2 className="at-heading">More Cycling Adventures in Morocco</h2>
            </div>
            <p>
              Discover more ways to experience Morocco,
              from High Atlas singletrack to longer cycling
              journeys and electric mountain bike adventures.
            </p>
          </div>
          <div className="at-related-grid">
            {relatedTours.map((tour) => (
              <article className="at-related-card" key={tour.title}>
                <div className="at-related-image">
                  <img src={tour.image} alt={tour.title} loading="lazy" />
                </div>
                <div className="at-related-content">
                  <span className="at-eyebrow">{tour.category}</span>
                  <h3>{tour.title}</h3>
                  <p>{tour.text}</p>
                  <a href={tour.href}>Discover This Tour →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="at-footer">
        <div className="at-container at-footer-main">
          <div className="at-footer-brand">
            <img src="/images/logo-mountain-bike-morocco-footer.png" alt="Mountain Bike Morocco" />
            <p>
              Discover Morocco by bike. Explore the Atlas Mountains,
              remote valleys and unforgettable landscapes with
              Mountain Bike Morocco.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="at-footer-links">
              <a href="/cycling-trips">All Cycling Tours</a>
              <a href="/cycling-trips/mtb">Mountain Bike Tours</a>
              <a href="/cycling-trips/emtb">E-MTB Tours</a>
              <a href="/cycling-trips/gravel">Gravel Cycling</a>
            </div>
          </div>
          <div>
            <h3>Destinations</h3>
            <div className="at-footer-links">
              <a href="/destinations">All Destinations</a>
              <a href="/destinations/atlas-mountains">Atlas Mountains</a>
              <a href="/destinations/imlil">Imlil</a>
              <a href="/destinations/marrakech">Marrakech</a>
            </div>
          </div>
          <div>
            <h3>Get in Touch</h3>
            <div className="at-footer-links">
              <a href="/about">About Us</a>
              <a href="/contact">Contact</a>
              <a href="/contact">Plan Your Trip</a>
              <a href="/cycling-trips">Explore Cycling Tours</a>
            </div>
          </div>
        </div>
        <div className="at-container at-footer-bottom">
          <span>© {new Date().getFullYear()} Mountain Bike Morocco. All rights reserved.</span>
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}