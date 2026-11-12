import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Marrakech to Sahara E-MTB Caravan | Electric Mountain Bike Morocco",
  description:
    "Discover Morocco on a proposed nine-day electric mountain-bike caravan from Marrakech towards the Sahara. Explore Atlas landscapes, remote valleys and desert scenery with Mountain Bike Morocco.",
  alternates: {
    canonical: "/events/marrakech-to-sahara-e-mtb-caravan",
  },
};

const images = {
  hero: "/images/e-mtb-tour-morocco.jpg",
  overview: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  terrain: "/images/Desert-Agafay-Morocco.jpg",
  culture: "/images/gravel-desert-cycling-expedition.jpg",
  galleryOne: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  galleryTwo: "/images/singletrack-mtb-atlas-mountains.jpg",
  galleryThree: "/images/e-mtb-tour-morocco.jpg",
  galleryFour: "/images/gravel-desert-cycling-expedition.jpg",
  galleryFive: "/images/Desert-Agafay-Morocco.jpg",
  dayOne: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  dayTwo: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  dayThree: "/images/singletrack-mtb-atlas-mountains.jpg",
  dayFour: "/images/gravel-desert-cycling-expedition.jpg",
  dayFive: "/images/Desert-Agafay-Morocco.jpg",
  daySix: "/images/gravel-desert-cycling-expedition.jpg",
  daySeven: "/images/e-mtb-tour-morocco.jpg",
  dayEight: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  dayNine: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  difficulty: "/images/e-mtb-tour-morocco.jpg",
  final: "/images/gravel-desert-cycling-expedition.jpg",
};

const facts = [
  ["Duration", "Provisional 9-day programme"],
  ["Destination", "Marrakech to Sahara region"],
  ["Starting point", "Marrakech, subject to confirmation"],
  ["Main activity", "Electric mountain biking"],
  ["Riding style", "Multi-stage E-MTB caravan"],
  ["Difficulty", "To be confirmed"],
  ["Experience", "Mountain-bike experience recommended"],
  ["Event format", "Supported group cycling event"],
  ["Dates", "Contact us for event dates"],
];

const highlights = [
  {
    number: "01",
    title: "From Marrakech Towards the Sahara",
    text: "Experience a proposed multi-stage journey from Marrakech towards Morocco's desert regions, discovering the changing landscapes between the city, mountains, valleys and desert.",
  },
  {
    number: "02",
    title: "Explore by Electric Mountain Bike",
    text: "Enjoy the assistance of an electric mountain bike on selected routes, helping you explore varied terrain while managing the demands of longer riding days.",
  },
  {
    number: "03",
    title: "Cross the Atlas Landscapes",
    text: "Discover mountain scenery, remote valleys and traditional communities along a route designed around the character of the High Atlas and southern Morocco.",
  },
  {
    number: "04",
    title: "Experience the Desert",
    text: "Discover the distinctive atmosphere of Morocco's desert landscapes, with riding areas and activities selected according to the final route and conditions.",
  },
];

const beyondTrail = [
  {
    title: "Atlas communities",
    text: "Discover traditional mountain villages, distinctive architecture and the rural communities of Morocco's High Atlas region.",
  },
  {
    title: "Southern landscapes",
    text: "Experience changing scenery as the journey moves towards the south, with mountain valleys, open plateaus and desert environments.",
  },
  {
    title: "Moroccan hospitality",
    text: "Enjoy opportunities to discover local food, regional traditions and Moroccan hospitality where these experiences form part of the confirmed programme.",
  },
  {
    title: "A journey of discovery",
    text: "Combine electric mountain biking with the experience of travelling through some of Morocco's most distinctive landscapes.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Marrakech",
    location: "Marrakech",
    distance: "No scheduled riding",
    riding: "Arrival, welcome and bicycle preparation",
    image: images.dayOne,
    text: "Arrive in Marrakech and prepare for the beginning of the E-MTB caravan. Depending on the confirmed arrangements, the day may include a welcome meeting, introductions, bicycle checks and an equipment briefing. The organisers will explain the proposed journey, riding expectations, battery arrangements and practical information for the days ahead.",
    details: [
      "Arrival and participant welcome",
      "Introduction to the proposed expedition",
      "E-MTB and equipment inspection",
      "Briefing on riding and battery management",
    ],
  },
  {
    day: "02",
    title: "Marrakech and the Atlas Foothills",
    location: "Marrakech region and Atlas foothills",
    distance: "To be confirmed",
    riding: "Introductory E-MTB ride",
    image: images.dayTwo,
    text: "Begin the riding programme with an introductory stage in the landscapes around Marrakech and the Atlas foothills. This stage is intended to familiarise participants with their bicycles, assistance settings, group riding procedures and the demands of the proposed journey. The actual route and distance will depend on the final event plan.",
    details: [
      "Introduction to the riding environment",
      "E-bike assistance and battery-use briefing",
      "Group riding and regrouping procedures",
      "Review of equipment and rider comfort",
    ],
  },
  {
    day: "03",
    title: "Into the High Atlas",
    location: "High Atlas region",
    distance: "Route-dependent",
    riding: "Mountain E-MTB stage",
    image: images.dayThree,
    text: "Continue towards the High Atlas, where the landscape changes to mountain roads, valleys and rural tracks. The selected route may combine different surfaces and gradients, offering an opportunity to experience the region by electric mountain bike. Exact elevation, distance and technical requirements will be communicated before registration.",
    details: [
      "Ride through selected Atlas landscapes",
      "Mountain scenery and rural communities",
      "Planned battery-use and charging breaks",
      "Route conditions subject to confirmation",
    ],
  },
  {
    day: "04",
    title: "Across the Mountain Landscapes",
    location: "Atlas Mountains and southern approaches",
    distance: "To be confirmed",
    riding: "Multi-surface E-MTB riding",
    image: images.dayFour,
    text: "Explore a further section of the mountain journey, with the possibility of connecting valleys, rural tracks and scenic mountain approaches. The route will be selected according to the group's riding level, bicycle requirements and the practical arrangements for moving towards southern Morocco.",
    details: [
      "Selected mountain and valley routes",
      "Group riding at an agreed pace",
      "Mechanical and battery arrangements to be confirmed",
      "Preparation for the southern stages",
    ],
  },
  {
    day: "05",
    title: "Journey Towards Southern Morocco",
    location: "Southern Atlas and regional valleys",
    distance: "To be confirmed",
    riding: "Cycling stage and possible transfer",
    image: images.dayFive,
    text: "Continue the proposed journey towards the landscapes of southern Morocco. Depending on the final route, this day may combine an E-MTB stage with a scheduled vehicle transfer. The organisers will confirm the riding sections, transport arrangements and overnight location in the official programme.",
    details: [
      "Explore selected southern landscapes",
      "Riding and transfer arrangements to be confirmed",
      "Review of equipment and battery reserves",
      "Preparation for the desert-region stages",
    ],
  },
  {
    day: "06",
    title: "Discover the Desert Landscapes",
    location: "Desert region to be confirmed",
    distance: "Route-dependent",
    riding: "Desert-region E-MTB experience",
    image: images.daySix,
    text: "Discover the distinctive landscapes of Morocco's southern desert regions. Depending on the confirmed location and terrain, the programme may include riding on suitable tracks and open routes. Desert conditions require careful planning, especially for hydration, navigation, battery range and mechanical support.",
    details: [
      "Explore selected desert-region routes",
      "Ride according to local terrain conditions",
      "Hydration and equipment checks",
      "Battery capacity and charging arrangements",
    ],
  },
  {
    day: "07",
    title: "A Deeper Desert Cycling Experience",
    location: "Sahara region, exact area to be confirmed",
    distance: "To be confirmed",
    riding: "Main desert-region riding stage",
    image: images.daySeven,
    text: "Enjoy another day dedicated to discovering the southern landscapes by electric mountain bike. The selected route may offer a different perspective on the desert environment, with terrain and riding distances adapted to the confirmed programme. The exact location, surface conditions and support arrangements must be established before the event.",
    details: [
      "Further exploration of selected desert terrain",
      "Group riding and planned regrouping",
      "Mechanical and emergency procedures",
      "Time to appreciate the surrounding scenery",
    ],
  },
  {
    day: "08",
    title: "Return Journey and Final Ride",
    location: "Southern Morocco towards the return point",
    distance: "To be confirmed",
    riding: "Final cycling activity and/or transfer",
    image: images.dayEight,
    text: "Begin the return section of the caravan, with the final riding activity or transfer determined by the official itinerary. This day provides an opportunity to complete the cycling programme, review the journey and prepare for the return to Marrakech or the confirmed departure location.",
    details: [
      "Final scheduled riding activity",
      "Return transport arrangements to be confirmed",
      "Equipment and bicycle checks",
      "Preparation for departure",
    ],
  },
  {
    day: "09",
    title: "Departure from Marrakech",
    location: "Marrakech or confirmed departure point",
    distance: "No scheduled riding",
    riding: "Event conclusion and onward travel",
    image: images.dayNine,
    text: "Conclude the proposed nine-day experience with departure arrangements according to the confirmed programme. Allow time for final equipment checks, photographs and farewells. The organisers will provide information about transfers, accommodation check-out and onward travel where these services are included.",
    details: [
      "Breakfast and final event arrangements, if included",
      "Final equipment and luggage checks",
      "Participant farewell",
      "Individual onward travel",
    ],
  },
];

const inclusions = [
  "Event coordination and participant communication, as specified in the final event information",
  "Route briefing and riding information for confirmed stages",
  "Ride leaders, guiding or local support only where explicitly confirmed",
  "E-MTB bicycle rental only if specifically included in the event confirmation",
  "Battery charging facilities and spare batteries only where explicitly confirmed",
  "Accommodation, meals and refreshments only where listed in the event confirmation",
  "Luggage transfers and vehicle support only where explicitly confirmed",
];

const exclusions = [
  "International flights and travel to and from Morocco",
  "Travel insurance and personal accident cover",
  "Personal E-MTB, helmet, clothing and cycling equipment unless arranged",
  "Accommodation and meals not listed in the event confirmation",
  "E-bike rental, spare batteries or charging equipment unless included",
  "Transfers and transport not specifically included",
  "Personal expenses, tips and optional activities",
  "Any service not expressly listed in the final event details",
];

const preparation = [
  {
    title: "Choose the Right E-MTB",
    text: "Use a reliable electric mountain bike suitable for the terrain described in the final route information. Check the motor, battery, brakes, drivetrain, suspension and tyres before travelling. Ask the organisers about rental availability and suitable bicycle specifications.",
  },
  {
    title: "Understand Battery Range",
    text: "Battery range depends on rider weight, terrain, elevation, assistance mode, temperature and riding style. Ask about charging opportunities, spare batteries, charging times and the expected daily battery requirements before committing to the event.",
  },
  {
    title: "Build Your Riding Fitness",
    text: "Electric assistance can make climbing more manageable, but multi-day mountain-bike riding still requires fitness, balance and control. Prepare with regular cycling and practice riding on varied terrain.",
  },
  {
    title: "Pack for Mountain and Desert Conditions",
    text: "Bring a helmet, gloves, suitable footwear, sun protection, hydration equipment, weather-appropriate layers and personal medication. Conditions can change considerably between mountain elevations and desert environments.",
  },
];

const faqs = [
  {
    q: "What is the Marrakech to Sahara E-MTB Caravan?",
    a: "It is a proposed multi-day electric mountain-bike event designed around a journey from Marrakech towards selected southern and Sahara-region landscapes. The final route, riding stages and event arrangements must be confirmed by the organisers.",
  },
  {
    q: "How long is the event?",
    a: "This page presents a provisional nine-day programme. The official duration, riding schedule and overnight locations will be confirmed in the final event information.",
  },
  {
    q: "Where does the E-MTB caravan start?",
    a: "Marrakech is the proposed starting point. The meeting location, arrival arrangements and final departure point will be confirmed by the organisers.",
  },
  {
    q: "Do I need my own electric mountain bike?",
    a: "You should ask the team about E-MTB rental availability before making travel arrangements. If bringing your own bicycle, check that it is suitable for the confirmed terrain and that its battery and charger meet the event requirements.",
  },
  {
    q: "How long does an E-MTB battery last?",
    a: "There is no single guaranteed range. Battery performance depends on battery capacity, rider weight, terrain, elevation, assistance mode, temperature and riding style. The organisers should provide daily riding estimates and explain the planned charging arrangements.",
  },
  {
    q: "Are spare batteries and charging facilities provided?",
    a: "Spare batteries, charging facilities and charging support are not guaranteed by this page. Their availability, compatibility and arrangements must be confirmed before registration.",
  },
  {
    q: "Is this event suitable for beginners?",
    a: "The expected riding level depends on the final routes, distances, elevation and technical terrain. Some previous mountain-bike experience is recommended. Contact the organisers with details of your experience so they can advise you.",
  },
  {
    q: "Will we ride in the Sahara desert?",
    a: "The event is planned around a journey towards the Sahara region, but the exact desert location and riding areas have not been confirmed here. The final programme will specify where the group will ride.",
  },
  {
    q: "Are accommodation, meals and transfers included?",
    a: "These services are only included when expressly listed in the official event confirmation. Ask the team for a detailed breakdown of accommodation, meals, luggage transport and vehicle support.",
  },
  {
    q: "How can I register my interest?",
    a: "Use the enquiry form on this page and mention the Marrakech to Sahara E-MTB Caravan. The Mountain Bike Morocco team can provide the latest dates, participation details and confirmed arrangements.",
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
    category: "GRAVEL CYCLING EVENT",
    title: "Morocco Gravel Bike Caravan",
    text: "Discover Morocco through a multi-day gravel cycling experience across varied landscapes.",
    image: "/images/gravel-desert-cycling-expedition.jpg",
    href: "/events/morocco-gravel-bike-caravan",
  },
];

export default function MarrakechToSaharaEMTBCaravanPage() {
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
          <img
            src={images.hero}
            alt="Electric mountain bike adventure in Morocco"
            fetchPriority="high"
          />
        </div>
        <div className="ge-hero-shade" />
        <div className="ge-hero-content">
          <span className="ge-eyebrow">
            MOROCCO · E-MTB ADVENTURE · MARRAKECH TO SAHARA
          </span>
          <h1>Marrakech to Sahara E-MTB Caravan</h1>
          <p className="ge-hero-description">
            Ride beyond the city and into the landscapes of southern Morocco.
            Discover a proposed nine-day electric mountain-bike journey through
            Atlas scenery, remote valleys and the remarkable atmosphere of the
            Sahara region.
          </p>
          <div className="ge-hero-actions">
            <a className="ge-button" href="#enquiry">
              Enquire About the Event <span>→</span>
            </a>
            <a className="ge-hero-back" href="/events">
              Explore All Events
            </a>
          </div>
          <div className="ge-hero-bottom">
            <div><strong>9 DAYS</strong><span>Proposed programme</span></div>
            <div><strong>E-MTB</strong><span>Electric mountain biking</span></div>
            <div><strong>ATLAS</strong><span>Mountain landscapes</span></div>
            <div><strong>SAHARA</strong><span>Southern Morocco</span></div>
          </div>
        </div>
      </section>

      <section className="ge-fact-strip">
        <div className="ge-container ge-fact-strip-inner">
          <div className="ge-fact">
            <span>Event</span>
            <strong>E-MTB Caravan</strong>
          </div>
          <div className="ge-fact">
            <span>Starting point</span>
            <strong>Marrakech</strong>
          </div>
          <div className="ge-fact">
            <span>Duration</span>
            <strong>9 Days – Proposed</strong>
          </div>
          <div className="ge-fact">
            <span>Dates</span>
            <strong>To Be Confirmed</strong>
          </div>
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
            <img
              src={images.overview}
              alt="Mountain landscape in Morocco"
              loading="lazy"
            />
          </div>
          <div className="ge-overview-content">
            <span className="ge-eyebrow">A JOURNEY FROM CITY TO DESERT</span>
            <h2 className="ge-heading">
              From Marrakech to the Landscapes of the Sahara
            </h2>
            <p className="ge-copy">
              The Marrakech to Sahara E-MTB Caravan is designed around the
              adventure of discovering Morocco by electric mountain bike.
              Starting in Marrakech, the proposed journey heads towards the
              mountain landscapes and southern regions of the country.
            </p>
            <p className="ge-copy">
              The route is intended to showcase the diversity of Morocco:
              mountain scenery, traditional villages, remote valleys, open
              landscapes and the distinctive atmosphere of the desert.
              Electric assistance can help riders manage varied terrain,
              but good preparation and responsible battery management remain
              essential.
            </p>
            <p className="ge-copy">
              The exact route, riding stages, distances, elevation, overnight
              locations and support arrangements have not yet been confirmed.
              Contact our team for the latest event information before making
              travel arrangements.
            </p>
            <a className="ge-text-link" href="#programme">
              Explore the proposed programme →
            </a>
          </div>
        </div>
      </section>

      <section className="ge-section" style={{ paddingTop: 0 }}>
        <div className="ge-container ge-overview-grid">
          <div>
            <span className="ge-eyebrow">THE E-MTB CARAVAN EXPERIENCE</span>
            <h2 className="ge-heading">
              An Electric Mountain-Bike Journey Across Morocco
            </h2>
            <p className="ge-copy">
              This proposed caravan combines the freedom of mountain biking
              with the assistance of an electric motor. It is an opportunity
              to explore a wider variety of landscapes while sharing the
              experience with a group of fellow riders.
            </p>
            <p className="ge-copy">
              A successful multi-day E-MTB journey requires more than choosing
              a bicycle. Battery capacity, charging time, compatible equipment,
              daily distances, elevation and access to mechanical assistance
              all need to be considered when planning the route.
            </p>
            <p className="ge-copy">
              The organisers will communicate the confirmed riding level,
              bicycle requirements, battery arrangements and support services
              before participants register.
            </p>
          </div>
          <aside className="ge-booking-card">
            <span className="ge-eyebrow">EVENT AT A GLANCE</span>
            <h3>Marrakech to Sahara E-MTB Caravan</h3>
            <p>
              A proposed nine-day electric mountain-bike experience from
              Marrakech towards southern Morocco.
            </p>
            <ul className="ge-booking-list">
              <li><span>Discipline</span><strong>Electric MTB</strong></li>
              <li><span>Starting point</span><strong>Marrakech</strong></li>
              <li><span>Destination</span><strong>Sahara region</strong></li>
              <li><span>Duration</span><strong>9 days proposed</strong></li>
              <li><span>Dates and price</span><strong>Ask for details</strong></li>
            </ul>
            <a className="ge-button" href="#enquiry">
              Request Event Details <span>→</span>
            </a>
          </aside>
        </div>
      </section>

      <section className="ge-section ge-highlight-section" id="highlights">
        <div className="ge-container">
          <div className="ge-section-head">
            <div>
              <span className="ge-eyebrow">THE E-MTB EXPERIENCE</span>
              <h2 className="ge-heading">
                Highlights of the Marrakech to Sahara Caravan
              </h2>
            </div>
            <p>
              A proposed journey combining electric mountain biking,
              mountain landscapes, southern Morocco and the discovery
              of the Sahara region.
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
            <img
              src={images.terrain}
              alt="Rocky landscape in southern Morocco"
              loading="lazy"
            />
          </div>
          <div>
            <span className="ge-eyebrow">THE RIDING ENVIRONMENT</span>
            <h2 className="ge-heading">
              From Mountain Trails to Southern Desert Landscapes
            </h2>
            <p className="ge-copy">
              The landscapes between Marrakech and southern Morocco offer
              considerable variety. Depending on the final route, the caravan
              may combine mountain roads, rural tracks, rocky paths and
              selected desert-region routes.
            </p>
            <p className="ge-copy">
              Electric mountain bikes can help riders manage climbing and
              longer distances, but the route must be planned around the
              available battery capacity, charging opportunities and
              terrain. The final riding surfaces and technical requirements
              will be confirmed by the organisers.
            </p>
            <ul className="ge-terrain-points">
              <li><span>01</span>Mountain landscapes and selected Atlas routes</li>
              <li><span>02</span>Rural tracks and changing southern terrain</li>
              <li><span>03</span>Desert-region riding where suitable and confirmed</li>
              <li><span>04</span>Battery range and charging planned around each stage</li>
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
              The details below describe the proposed event format. Contact
              Mountain Bike Morocco for the official itinerary, confirmed
              route, E-MTB requirements and practical arrangements before
              booking your travel.
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
          <img
            src={images.culture}
            alt="Southern Moroccan landscape"
            loading="lazy"
          />
        </div>
        <div className="ge-culture-content">
          <span className="ge-eyebrow">BEYOND THE TRAIL</span>
          <h2 className="ge-heading">
            Discover the Culture and Landscapes of Southern Morocco
          </h2>
          <p className="ge-copy">
            The experience of travelling from Marrakech towards the Sahara
            is about more than cycling. The changing landscapes, traditional
            architecture, local communities and regional hospitality all
            contribute to the character of the journey.
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
              <span className="ge-eyebrow">MOROCCO BY E-MTB</span>
              <h2 className="ge-heading">
                A Visual Taste of the Mountain and Desert Journey
              </h2>
            </div>
            <p>
              Explore the atmosphere of electric mountain biking in Morocco.
              The exact locations and landscapes featured in the event will
              depend on the final confirmed route.
            </p>
          </div>
          <div className="ge-gallery-grid">
            <div className="ge-gallery-item">
              <img src={images.galleryOne} alt="Mountain biking in the Atlas region" loading="lazy" />
            </div>
            <div className="ge-gallery-item">
              <img src={images.galleryTwo} alt="Mountain trail in Morocco" loading="lazy" />
            </div>
            <div className="ge-gallery-item">
              <img src={images.galleryThree} alt="Electric mountain bike adventure" loading="lazy" />
            </div>
            <div className="ge-gallery-item">
              <img src={images.galleryFour} alt="Desert cycling landscape in Morocco" loading="lazy" />
            </div>
            <div className="ge-gallery-item">
              <img src={images.galleryFive} alt="Rocky desert scenery in Morocco" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="ge-section ge-itinerary-section" id="programme">
        <div className="ge-container">
          <div className="ge-section-head">
            <div>
              <span className="ge-eyebrow">THE E-MTB CARAVAN PROGRAMME</span>
              <h2 className="ge-heading">Proposed 9-Day Event Programme</h2>
            </div>
            <p>
              A provisional nine-day structure illustrating the possible
              journey from Marrakech towards the southern desert regions
              of Morocco.
            </p>
          </div>
          <p className="ge-itinerary-intro">
            This is a proposed planning outline, not a confirmed itinerary.
            Exact riding distances, elevation gain, route surfaces, overnight
            locations, battery charging facilities, accommodation, meals,
            transfers and support services will be specified in the official
            event confirmation.
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

      <section className="ge-section" id="included">
        <div className="ge-container">
          <div className="ge-section-head">
            <div>
              <span className="ge-eyebrow">EVENT ARRANGEMENTS</span>
              <h2 className="ge-heading">What Is Included?</h2>
            </div>
            <p>
              E-MTB events require specific equipment and logistical
              arrangements. Services are only included when expressly listed
              in the final event confirmation.
            </p>
          </div>
          <div className="ge-inclusions-grid">
            <div className="ge-inclusion-card">
              <h3>To Be Confirmed</h3>
              <ul>
                {inclusions.map((item) => (
                  <li key={item}><span>+</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="ge-inclusion-card">
              <h3>Not Included Unless Stated</h3>
              <ul>
                {exclusions.map((item) => (
                  <li key={item}><span>−</span>{item}</li>
                ))}
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
              <h2 className="ge-heading">Preparing for the E-MTB Caravan</h2>
            </div>
            <p>
              Prepare your bicycle, battery system, equipment and fitness
              for a multi-day mountain and desert cycling experience.
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
            <img
              src={images.difficulty}
              alt="Electric mountain bike ready for an adventure"
              loading="lazy"
            />
          </div>
          <div>
            <span className="ge-eyebrow">KNOW YOUR RIDE</span>
            <h2 className="ge-heading">
              Fitness, E-MTB Experience and Battery Management
            </h2>
            <p className="ge-copy">
              Electric assistance can make climbs more accessible, but
              multi-day mountain biking still requires balance, control,
              endurance and confidence on varied terrain. Participants should
              be comfortable riding a mountain bike for extended periods and
              managing consecutive days of activity.
            </p>
            <p className="ge-copy">
              Battery management is an important part of this event. The
              organisers should communicate the expected daily distances,
              elevation, charging opportunities, compatible chargers and
              any spare-battery arrangements before registration.
            </p>
            <div className="ge-difficulty-note">
              <strong>Important:</strong> Battery range is affected by
              terrain, elevation, assistance mode, rider weight, temperature
              and riding style. Charging facilities, spare batteries,
              mechanical support, route conditions and emergency arrangements
              must be confirmed in the official event information.
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
              Find answers to common questions about the Marrakech to Sahara
              E-MTB Caravan. Contact our team for confirmed dates, route
              information, bicycle requirements and participation details.
            </p>
            <a className="ge-text-link" href="#enquiry">
              Ask About the E-MTB Caravan →
            </a>
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
              <h2 className="ge-heading">
                Enquire About the Marrakech to Sahara E-MTB Caravan
              </h2>
            </div>
            <p>
              Tell us about your mountain-bike experience, E-MTB equipment,
              preferred dates and group size. Our team will contact you with
              the latest event details and confirmed arrangements.
            </p>
          </div>
          <div className="ge-event-enquiry-card">
            <ContactEnquiryForm />
          </div>
        </div>
      </section>

      <section className="ge-final-cta">
        <div className="ge-final-image">
          <img
            src={images.final}
            alt="Moroccan desert landscape on a cycling adventure"
            loading="lazy"
          />
        </div>
        <div className="ge-final-shade" />
        <div className="ge-final-content">
          <span className="ge-eyebrow">FROM THE ATLAS TO THE SAHARA</span>
          <h2>Ready for an Electric Mountain-Bike Adventure Across Morocco?</h2>
          <p>
            Discover a different side of Morocco on a proposed journey from
            Marrakech towards the Sahara region. Contact Mountain Bike Morocco
            for the latest event dates, E-MTB requirements and confirmed
            participation arrangements.
          </p>
          <a className="ge-button" href="#enquiry">
            Enquire About the Event <span>→</span>
          </a>
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
              to desert challenges and gravel cycling journeys.
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
            <img
              src="/images/logo-mountain-bike-morocco-footer.png"
              alt="Mountain Bike Morocco"
            />
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
          <span>
          <span>© {2026} Mountain Bike Morocco. All rights reserved.</span>
          </span>
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}