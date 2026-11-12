import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title:
    "Saghro Cycling Adventure Morocco – 7 Days | Mountain Bike Morocco",
  description:
    "Explore Morocco's dramatic Jebel Saghro on a 7-day guided cycling adventure. Ride remote mountain tracks, rocky landscapes, desert valleys and traditional Amazigh villages on a private journey tailored to your experience.",
  alternates: {
    canonical: "/cycling-trips/trip/saghro-cycling-adventure-7-day",
  },
};

const images = {
  hero: "/images/saghro-morocco-bike-tour.jpg",
  overview: "/images/mtb-morocco-Saghro.JPG",
  saghro: "/images/saghro-morocco-bike-tour.jpg",
  valley: "/images/mtb-morocco-Saghro.JPG",
  village: "/images/group-cycling-tour-morocco.jpg",
  mountain: "/images/mountain-bike-morocco-hero.jpg",
  cycling: "/images/saghro-morocco-bike-tour.jpg",
  final: "/images/mtb-morocco-Saghro.JPG",
};

const facts = [
  ["Duration", "7 days / 6 nights"],
  ["Destination", "Jebel Saghro, Anti-Atlas, Morocco"],
  ["Starting point", "Marrakech"],
  ["Main areas", "Saghro mountain region and surrounding valleys"],
  ["Cycling style", "Off-road mountain cycling and rugged tracks"],
  ["Difficulty", "To be confirmed against the final route"],
  ["Experience", "Previous off-road cycling experience recommended"],
  ["Tour format", "Private cycling adventure"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "Jebel Saghro Landscapes",
    text: "Explore the dramatic rocky mountain scenery, striking formations and wide remote valleys that make the Saghro region one of southern Morocco's distinctive cycling destinations.",
  },
  {
    number: "02",
    title: "Remote Mountain Tracks",
    text: "Ride selected off-road routes through rugged terrain, open valleys and mountain landscapes, with the riding programme adapted to your experience and conditions.",
  },
  {
    number: "03",
    title: "Amazigh Villages and Culture",
    text: "Discover traditional communities, rural architecture and the hospitality of the Amazigh people while travelling through the remote mountain region.",
  },
  {
    number: "04",
    title: "Anti-Atlas Adventure",
    text: "Experience the transition between rugged mountain landscapes and the arid southern regions of Morocco on a private cycling journey.",
  },
];

const beyondTrail = [
  {
    title: "Amazigh village life",
    text: "Discover traditional villages, stone houses, local agriculture and the hospitality that gives this remote mountain region its distinctive character.",
  },
  {
    title: "Dramatic geology",
    text: "Experience rugged ridges, volcanic-looking rock formations, wide valleys and striking desert-like scenery throughout the Saghro landscape.",
  },
  {
    title: "Southern Morocco traditions",
    text: "Enjoy opportunities to discover regional food, traditional architecture and the cultural heritage of communities across southern Morocco.",
  },
  {
    title: "Remote landscapes",
    text: "Take time to appreciate the quieter mountain region beyond the main tourist routes, with open scenery and a feeling of space and remoteness.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Marrakech",
    location: "Marrakech",
    distance: "No scheduled riding",
    riding: "Arrival and cycling preparation",
    image: images.overview,
    text: "Arrive in Marrakech and meet the local team. After settling into your accommodation, discuss the seven-day Saghro cycling programme, your riding experience and the type of terrain you enjoy. Review your bicycle and equipment, go through the proposed arrangements and prepare for the journey towards southern Morocco.",
    details: [
      "Arrival and welcome in Marrakech",
      "Meet the local cycling team",
      "Bicycle and equipment check",
      "Review the proposed riding programme",
    ],
  },
  {
    day: "02",
    title: "Marrakech to the Saghro Region",
    location: "Marrakech – Southern Morocco",
    distance: "Route-dependent",
    riding: "Transfer and optional acclimatisation ride",
    image: images.saghro,
    text: "Leave Marrakech and travel towards the Jebel Saghro region through the changing landscapes of southern Morocco. The transfer follows the route agreed for your trip, potentially passing through the Ouarzazate area. Depending on arrival time, conditions and the final programme, an optional short acclimatisation ride may be arranged.",
    details: [
      "Journey from Marrakech towards southern Morocco",
      "Discover changing mountain and valley scenery",
      "Optional short ride if time and conditions allow",
      "Overnight location according to the confirmed itinerary",
    ],
  },
  {
    day: "03",
    title: "First Saghro Mountain Riding Stage",
    location: "Jebel Saghro region",
    distance: "Route-dependent",
    riding: "Off-road mountain tracks",
    image: images.valley,
    text: "Begin exploring the Saghro region by bicycle. Ride selected mountain tracks through rugged terrain, rocky landscapes and open valleys. The route is planned around the group's riding experience and the conditions on the ground, allowing you to discover the character of this remote mountain environment.",
    details: [
      "Explore selected Saghro mountain tracks",
      "Discover rocky landscapes and open valleys",
      "Adapt the route to the group's experience",
      "Enjoy the remote mountain scenery",
    ],
  },
  {
    day: "04",
    title: "Saghro Valleys and Remote Landscapes",
    location: "Saghro mountain valleys",
    distance: "Route-dependent",
    riding: "Off-road cycling and mountain terrain",
    image: images.mountain,
    text: "Continue through the Saghro landscape on a full day of cycling. The proposed stage may connect mountain tracks, remote valleys and striking rocky scenery, depending on the final route. Take time to appreciate the region's distinctive geology and the changing landscapes of southern Morocco.",
    details: [
      "Explore selected mountain valleys",
      "Ride rugged off-road terrain",
      "Discover the distinctive Saghro scenery",
      "Enjoy a full day in the mountains",
    ],
  },
  {
    day: "05",
    title: "Mountain Villages and Rugged Terrain",
    location: "Jebel Saghro region",
    distance: "Route-dependent",
    riding: "Mountain tracks and remote routes",
    image: images.village,
    text: "Enjoy another cycling stage through the Saghro region, discovering the relationship between the mountain landscape and its traditional communities. The route may pass through remote settlements and rugged terrain, with the day's riding adapted to the group's fitness, experience and preferred style.",
    details: [
      "Continue the Saghro cycling adventure",
      "Explore selected mountain tracks",
      "Discover traditional rural communities",
      "Adapt the stage to the group and conditions",
    ],
  },
  {
    day: "06",
    title: "Final Saghro Riding Stage",
    location: "Saghro region and surrounding valleys",
    distance: "Route-dependent",
    riding: "Selected off-road routes",
    image: images.cycling,
    text: "Enjoy the final planned riding stage of your Saghro adventure. Depending on the confirmed route, explore additional mountain tracks and surrounding valleys before preparing for the return journey. The stage is designed around the agreed programme, available time and local conditions.",
    details: [
      "Final planned cycling stage",
      "Explore the agreed route through the region",
      "Enjoy the last mountain landscapes",
      "Prepare for the return journey",
    ],
  },
  {
    day: "07",
    title: "Return to Marrakech",
    location: "Southern Morocco – Marrakech",
    distance: "No scheduled riding unless agreed",
    riding: "Return journey",
    image: images.final,
    text: "After breakfast, begin the return journey towards Marrakech according to the transfer arrangements in your confirmed itinerary. Enjoy the changing scenery on the way back to the city. Any additional riding or overnight arrangements must be agreed as part of the final trip proposal.",
    details: [
      "Breakfast according to the accommodation arrangements",
      "Final equipment and luggage arrangements",
      "Return transfer towards Marrakech",
      "End of the Saghro cycling adventure",
    ],
  },
];

const inclusions = [
  "Trip planning and route coordination",
  "Local cycling guide and support as agreed in your itinerary",
  "Accommodation specified in your final proposal",
  "Meals explicitly listed in your confirmed itinerary",
  "Support vehicle and transfers where specified in your proposal",
  "Luggage assistance where included in your arrangements",
  "On-trip coordination and practical assistance",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Bicycle and personal cycling equipment unless agreed",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses and tips",
  "Additional nights and transfers not included in your proposal",
  "Services not specifically listed in your confirmed booking",
];

const preparation = [
  {
    title: "Choose a suitable bicycle",
    text: "A well-maintained mountain bike is recommended for rugged tracks and varied mountain terrain. Depending on the final route, a suitable gravel-capable bicycle may also be discussed. Confirm the recommended bicycle type, rental options and setup with the team before travelling.",
  },
  {
    title: "Protective equipment",
    text: "Bring a suitable helmet, gloves, cycling glasses and comfortable riding clothing. Knee protection may be useful on rougher sections. Choose equipment appropriate to the final route and the type of cycling you will be undertaking.",
  },
  {
    title: "Fitness for multi-day riding",
    text: "Prepare for a multi-day cycling journey. The programme may include consecutive riding stages, climbing, uneven surfaces and remote mountain tracks. Share your riding experience and fitness level before the route is confirmed.",
  },
  {
    title: "Personal essentials",
    text: "Bring sun protection, hydration equipment, layers for cooler evenings, personal medication and preferred cycling nutrition. A basic repair kit and suitable spare parts are useful for a remote cycling journey.",
  },
];

const faqs = [
  {
    q: "How long is the Saghro Cycling Adventure?",
    a: "The tour is planned over seven days and six nights, starting in Marrakech and exploring the Jebel Saghro region of southern Morocco.",
  },
  {
    q: "Where does the tour start?",
    a: "The journey starts in Marrakech before travelling towards the Saghro region. Transfer arrangements and the exact route are confirmed in your personalised itinerary.",
  },
  {
    q: "Where is Jebel Saghro?",
    a: "Jebel Saghro is a rugged mountain region in southern Morocco, associated with the Anti-Atlas and the transition towards the Sahara. The landscape is known for rocky formations, remote valleys and traditional settlements.",
  },
  {
    q: "What type of terrain can I expect?",
    a: "The cycling experience focuses on rugged mountain tracks, rocky routes and remote valleys. The exact terrain and route depend on the final itinerary, local conditions and the group's riding experience.",
  },
  {
    q: "Is this tour suitable for beginner cyclists?",
    a: "Previous off-road cycling experience is recommended. The suitability of the trip depends on the selected route, terrain and your fitness. Share your cycling background so the team can discuss an appropriate programme.",
  },
  {
    q: "What bicycle should I bring?",
    a: "A suitable mountain bike is recommended for rugged mountain tracks. Depending on the agreed route, a gravel-capable bicycle may also be considered. Confirm the appropriate bicycle and rental possibilities before travelling.",
  },
  {
    q: "Are daily distances and elevation fixed?",
    a: "No fixed daily distances or elevation figures are promised on this page. They depend on the selected routes, the group's ability and the final itinerary agreed before booking.",
  },
  {
    q: "When is the best time for cycling in the Saghro region?",
    a: "Spring and autumn are generally suitable periods for cycling in the region. Conditions vary, and summer heat can be intense. The best dates depend on the route, weather and riding preferences.",
  },
  {
    q: "Can the itinerary be adapted to my riding level?",
    a: "The private trip can be discussed around your riding experience, fitness, preferred terrain and travel dates. Share your expectations so the route and daily stages can be planned appropriately.",
  },
  {
    q: "Are transfers and support included?",
    a: "Support arrangements, transfers, accommodation, meals and luggage assistance depend on the services specified in your final trip proposal. Check the confirmed itinerary before booking.",
  },
];

const relatedTours = [
  {
    category: "SINGLETRACK MTB",
    title: "Epic Singletrack Atlas Mountains",
    text: "Discover natural singletrack, remote valleys and spectacular mountain descents on an extended High Atlas MTB adventure.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/trip/epic-singletrack-atlas-mountains-8-day",
  },
  {
    category: "CYCLING ADVENTURE",
    title: "Atlas Mountains Cycling Tour",
    text: "Explore the High Atlas, traditional villages and beautiful mountain valleys on a multi-day cycling journey.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/cycling-trips/trip/atlas-mountains-cycling-tour-6-day",
  },
  {
    category: "ENDURO MTB ADVENTURE",
    title: "Atlas Enduro MTB Tour",
    text: "Discover a trail-focused mountain biking experience with selected descents in Morocco's Atlas region.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/cycling-trips/trip/atlas-enduro-mtb-tour-5-day",
  },
];

export default function SaghroCyclingAdventure7DayPage() {
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

        .atlas-tour .at-enquiry-section { background: var(--green); }

        .atlas-tour .at-enquiry-section .at-eyebrow,
        .atlas-tour .at-enquiry-section .at-heading,
        .atlas-tour .at-enquiry-section .at-section-head > p {
          color: #fff !important;
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
          <img
            src={images.hero}
            alt="Cycling through the rugged rocky landscapes of Morocco's Jebel Saghro"
          />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · JEBEL SAGHRO · 7 DAYS</span>
          <h1>Saghro Cycling Adventure</h1>
          <p className="at-hero-description">
            Seven days of cycling through the rugged landscapes of Jebel
            Saghro. Discover remote mountain tracks, dramatic rocky scenery,
            dry valleys and traditional Amazigh villages on a private
            adventure planned around your riding experience.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Plan Your Saghro Adventure <span>→</span>
            </a>
            <a className="at-hero-back" href="/cycling-trips">
              Explore All Cycling Tours
            </a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>07 DAYS</strong><span>Private cycling adventure</span></div>
            <div><strong>JEBEL SAGHRO</strong><span>Southern Morocco</span></div>
            <div><strong>MOUNTAIN CYCLING</strong><span>Remote mountain tracks</span></div>
            <div><strong>MARRAKECH</strong><span>Starting point</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>7 Days / 6 Nights</strong></div>
          <div className="at-fact"><span>Region</span><strong>Jebel Saghro, Anti-Atlas</strong></div>
          <div className="at-fact"><span>Starting point</span><strong>Marrakech</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Private Cycling Adventure</strong></div>
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
            <img src={images.overview} alt="Rocky mountain scenery in the Jebel Saghro region of Morocco" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A SOUTHERN MOROCCO CYCLING ADVENTURE</span>
            <h2 className="at-heading">Seven Days Exploring the Rugged Landscapes of Jebel Saghro</h2>
            <p className="at-copy">
              The Saghro Cycling Adventure is a seven-day journey through
              one of southern Morocco's most distinctive mountain regions.
              Starting in Marrakech, travel towards Jebel Saghro and discover
              a landscape of rugged rock formations, remote valleys and
              traditional Amazigh communities.
            </p>
            <p className="at-copy">
              The cycling experience focuses on off-road mountain tracks
              and varied terrain. Routes are selected according to the
              final programme, the group's experience and the conditions
              encountered in the region.
            </p>
            <p className="at-copy">
              This private adventure offers time to explore the Saghro
              landscape while discovering the cultural character of
              southern Morocco. Exact riding stages, distances, overnight
              stops and support arrangements are agreed before your trip
              is confirmed.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the itinerary →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE CYCLING EXPERIENCE</span>
            <h2 className="at-heading">A Remote Mountain Journey, Planned Around Your Riding</h2>
            <p className="at-copy">
              Jebel Saghro offers a very different atmosphere from the
              greener valleys of the High Atlas. Its rugged ridges, rocky
              formations and open landscapes create a distinctive setting
              for an off-road cycling adventure.
            </p>
            <p className="at-copy">
              The proposed route can be discussed around your cycling
              background, fitness, preferred terrain and travel dates.
              The final programme should take account of local conditions,
              the distances involved and the nature of the selected tracks.
            </p>
            <p className="at-copy">
              This is a private cycling experience. Share your previous
              riding experience, group size and preferred dates so the
              team can discuss a suitable journey through the Saghro region.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Saghro Cycling Adventure</h3>
            <p>Seven days exploring rugged mountain tracks and remote landscapes in southern Morocco.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>7 days / 6 nights</strong></li>
              <li><span>Starting city</span><strong>Marrakech</strong></li>
              <li><span>Main region</span><strong>Jebel Saghro</strong></li>
              <li><span>Tour format</span><strong>Private cycling</strong></li>
              <li><span>Route programme</span><strong>Customised</strong></li>
            </ul>
            <a className="at-button" href="/contact">
              Enquire About This Tour <span>→</span>
            </a>
          </aside>
        </div>
      </section>

      <section className="at-section at-highlight-section" id="highlights">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">THE EXPERIENCE</span>
              <h2 className="at-heading">Highlights of the Saghro Cycling Adventure</h2>
            </div>
            <p>
              Discover a remote mountain region through rugged off-road
              routes, striking rock formations, open valleys and traditional
              communities in southern Morocco.
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
            <img
              src={images.valley}
              alt="Rugged off-road cycling terrain and rocky valleys in the Saghro region"
            />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTES & TERRAIN</span>
            <h2 className="at-heading">Rugged Mountain Tracks and Dramatic Southern Landscapes</h2>
            <p className="at-copy">
              Jebel Saghro is characterised by rugged mountain scenery,
              rocky ridges, open valleys and dramatic formations. Its
              terrain offers a different cycling environment from the
              forested and cultivated areas of the High Atlas.
            </p>
            <p className="at-copy">
              The proposed riding programme can connect selected off-road
              tracks and mountain routes across the region. The balance
              between climbing, rough surfaces and longer stages depends
              on the final route, the group's experience and local
              conditions.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Rugged off-road mountain tracks</li>
              <li><span>02</span>Rocky landscapes and striking formations</li>
              <li><span>03</span>Remote valleys and traditional settlements</li>
              <li><span>04</span>Selected routes adapted to the group</li>
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
              Review the main details of this seven-day cycling experience.
              Exact distances, elevation, route difficulty, accommodation
              and support services are confirmed in your personalised
              trip proposal.
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
          <img
            src={images.village}
            alt="Traditional rural community and village landscape in Morocco"
          />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE TRAIL</span>
          <h2 className="at-heading">Discover the Culture and Landscapes of Southern Morocco</h2>
          <p className="at-copy">
            A cycling journey through Jebel Saghro is about more than
            mountain tracks. Between riding stages, discover traditional
            communities, distinctive architecture and the dramatic
            landscapes that make this region so different from other
            parts of Morocco.
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
              <span className="at-eyebrow">MOUNTAIN MOMENTS</span>
              <h2 className="at-heading">The Landscapes and Trails of Jebel Saghro</h2>
            </div>
            <p>
              Discover the rugged scenery, remote valleys and traditional
              settlements that shape this southern Morocco cycling journey.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.saghro} alt="Rocky mountain scenery in Jebel Saghro" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Remote Saghro mountain valley" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional rural village in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.mountain} alt="Mountain landscape in southern Morocco" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Off-road cycling terrain in the Saghro region" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">SEVEN DAYS IN SOUTHERN MOROCCO</span>
              <h2 className="at-heading">Saghro Cycling Adventure Itinerary</h2>
            </div>
            <p>
              A seven-day journey connecting Marrakech with the Jebel Saghro
              region. The programme combines travel, selected cycling
              stages and time to discover the landscapes and communities
              of southern Morocco.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The itinerary below provides an overview of the experience.
            Daily distances, elevation gain, exact riding routes and
            overnight arrangements depend on the final programme agreed
            with your group. Transfer details and accommodation locations
            must be confirmed in your final proposal.
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
              <h2 className="at-heading">What Is Included in Your Cycling Tour?</h2>
            </div>
            <p>
              The final inclusions are confirmed in your booking proposal.
              Review the services listed below and check your personalised
              itinerary before confirming your seven-day trip.
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
              <h2 className="at-heading">Preparing for Your Saghro Cycling Adventure</h2>
            </div>
            <p>
              Prepare your bicycle, equipment and fitness before travelling
              to Morocco. Good preparation is especially important for
              a multi-day journey through remote mountain terrain.
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
            <img
              src={images.cycling}
              alt="Rugged off-road mountain cycling terrain in Morocco"
            />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">Difficulty and Cycling Experience</h2>
            <p className="at-copy">
              The difficulty of this cycling adventure depends on the
              selected route, daily distances, elevation gain and terrain.
              Mountain tracks can include rocky surfaces, uneven ground,
              climbs and exposed sections. The final programme should
              reflect the group's fitness and off-road experience.
            </p>
            <p className="at-copy">
              Previous off-road cycling experience is recommended. Tell
              us about your riding background, the type of terrain you
              normally ride and your confidence on rough tracks. This
              helps us discuss suitable routes and realistic daily stages
              for your group.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty, distances,
              elevation figures and route details must be confirmed
              against the actual itinerary before booking. This page
              does not promise a fixed technical grade or daily mileage.
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
              Find answers to common questions about this seven-day
              cycling adventure in the Jebel Saghro region. Contact our
              team if you need more details before planning your trip.
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
          <img
            src={images.final}
            alt="Dramatic rocky mountain scenery in Morocco's Jebel Saghro region"
          />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR SAGHRO ADVENTURE STARTS HERE</span>
          <h2>Ready to Explore the Wild Landscapes of Jebel Saghro?</h2>
          <p>
            Tell us your preferred dates, group size and cycling experience.
            We will discuss a private seven-day Saghro cycling adventure
            and help you plan your journey through southern Morocco.
          </p>
          <a className="at-button" href="/contact">
            Plan Your Saghro Adventure <span>→</span>
          </a>
        </div>
      </section>

      <section className="at-section at-enquiry-section" id="enquiry">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">START PLANNING YOUR RIDE</span>
              <h2 className="at-heading">
                Enquire About Your Saghro Cycling Adventure
              </h2>
            </div>
            <p>
              Tell us your preferred travel dates, group size, cycling
              experience and bicycle requirements. Our team will help
              discuss the route, riding stages and arrangements for your
              private seven-day adventure in the Jebel Saghro region.
            </p>
          </div>
          <ContactEnquiryForm
            tourName="Saghro Cycling Adventure – 7 Days"
            destination="Jebel Saghro, Anti-Atlas, Southern Morocco"
            cyclingType="Mountain Cycling"
          />
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
              Discover more ways to experience Morocco, from scenic Atlas
              cycling journeys to focused singletrack and enduro mountain
              biking adventures.
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
            <img
              src="/images/logo-mountain-bike-morocco-footer.png"
              alt="Mountain Bike Morocco"
            />
            <p>
              Discover Morocco by bike. Explore the Atlas Mountains,
              remote valleys and unforgettable trails with Mountain Bike Morocco.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="at-footer-links">
              <a href="/cycling-trips">All Cycling Tours</a>
              <a href="/cycling-trips/mtb">Mountain Bike Tours</a>
              <a href="/cycling-trips/e-mtb">E-MTB Tours</a>
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
          <span>© {2026} Mountain Bike Morocco. All rights reserved.</span>
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}