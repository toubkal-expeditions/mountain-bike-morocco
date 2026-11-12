import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Agafay Desert Cycling Challenge Morocco | Mountain Bike Morocco",
  description:
    "Take part in a multi-day cycling challenge in Morocco's Agafay Desert near Marrakech. Discover rocky desert terrain, open landscapes and a shared cycling experience. Event dates, stages and arrangements are confirmed individually.",
  alternates: {
    canonical: "/events/agafay-desert-cycling-challenge",
  },
};

const images = {
  hero: "/images/events-race-cycling-desert-agafay.JPG",
  overview: "/images/Agafay-desert-morocco.jpg",
  terrain: "/images/Desert-Agafay-Morocco.jpg",
  culture: "/images/Desert-Agafay-Morocco 2.jpg",

  galleryOne: "/images/Agafay-desert-morocco.jpg",
  galleryTwo: "/images/Desert-Agafay-Morocco.jpg",
  galleryThree: "/images/Desert-Agafay-Morocco 2.jpg",
  galleryFour: "/images/events-race-cycling-desert-agafay.JPG",
  galleryFive: "/images/Agafay-desert-morocco.jpg",

  dayOne: "/images/Desert-Agafay-Morocco.jpg",
  dayTwo: "/images/events-race-cycling-desert-agafay.JPG",
  dayThree: "/images/Desert-Agafay-Morocco 2.jpg",

  difficulty: "/images/events-race-cycling-desert-agafay.JPG",
  final: "/images/Desert-Agafay-Morocco.jpg",
};

const facts = [
  ["Duration", "Multi-day event"],
  ["Destination", "Agafay Desert, near Marrakech"],
  ["Meeting point", "To be confirmed"],
  ["Main activity", "Desert cycling challenge"],
  ["Riding style", "Multi-stage cycling event; format to be confirmed"],
  ["Difficulty", "To be confirmed with the event programme"],
  ["Experience", "Rider requirements to be confirmed"],
  ["Event format", "Multi-day event; stages to be confirmed"],
  ["Dates", "Contact us for event dates"],
];

const highlights = [
  {
    number: "01",
    title: "Take on the Agafay Desert",
    text: "Experience a multi-day cycling challenge in the distinctive rocky desert landscape near Marrakech. The final routes and stage format will be shared in the official event programme.",
  },
  {
    number: "02",
    title: "Ride Across Open Landscapes",
    text: "Discover the wide horizons, stony tracks and rugged terrain that give the Agafay region its distinctive character.",
  },
  {
    number: "03",
    title: "A Multi-Day Cycling Challenge",
    text: "Be part of a cycling event structured across multiple days. The number of stages, daily distances and route profiles will be confirmed by the organisers.",
  },
  {
    number: "04",
    title: "Share the Event Experience",
    text: "Meet fellow cyclists, share the challenge and enjoy the atmosphere of a dedicated desert cycling event in Morocco.",
  },
];

const beyondTrail = [
  {
    title: "The Agafay landscape",
    text: "Agafay is known for its stony, arid terrain, rolling hills and broad desert horizons. Its landscape offers a distinctive setting close to Marrakech.",
  },
  {
    title: "Desert surroundings",
    text: "The region combines rocky tracks, dry valleys and open terrain. The exact riding areas will depend on the confirmed event routes.",
  },
  {
    title: "Marrakech nearby",
    text: "The Agafay region lies close to Marrakech, making the city an important reference point for travel planning and event logistics.",
  },
  {
    title: "A shared cycling experience",
    text: "A multi-day event brings participants together around a common challenge, with time to ride, recover and connect with other cyclists.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival, Registration and Event Briefing",
    location: "Agafay area – meeting point to be confirmed",
    distance: "No fixed distance",
    riding: "Participant welcome and event preparation",
    image: images.dayOne,
    text: "Arrive at the confirmed event meeting point and complete the participant check-in process. The opening programme will provide an opportunity to meet the organisers and other cyclists, review the event format and receive important practical information. Bike checks, equipment guidance and the schedule for the challenge will be explained before the riding stages begin.",
    details: [
      "Participant arrival and registration",
      "Welcome and event information",
      "Bicycle and equipment checks",
      "Briefing on the confirmed programme and safety guidance",
    ],
  },
  {
    day: "02",
    title: "Agafay Desert Cycling Challenge Stages",
    location: "Agafay Desert – route to be confirmed",
    distance: "Stage distances to be confirmed",
    riding: "Desert cycling stages according to the official programme",
    image: images.dayTwo,
    text: "The main challenge takes place across the Agafay region, with cycling activities organised according to the confirmed event format. Routes may use the area's rocky tracks and open desert terrain. The number of stages, daily distances, elevation gain, technical character, start times and support arrangements must be confirmed in the official programme. Participants should follow the organisers' instructions throughout the event.",
    details: [
      "Cycling stages on the confirmed Agafay routes",
      "Stage briefing and route information",
      "Regrouping and rest arrangements according to the programme",
      "Time to recover before the next scheduled activity",
    ],
  },
  {
    day: "03",
    title: "Final Stage and Event Closing",
    location: "Agafay area – departure arrangements to be confirmed",
    distance: "Final route to be confirmed",
    riding: "Final challenge activity and event closing",
    image: images.dayThree,
    text: "The closing phase will follow the final stage and activities listed in the confirmed programme. Participants can complete the event, take part in the closing arrangements and prepare for onward travel. The actual event duration may extend beyond this illustrative outline; the number of days and final schedule will be confirmed by the organisers.",
    details: [
      "Final stage or activity according to the official programme",
      "Event closing and participant gathering",
      "Personal equipment and belongings check",
      "Departure according to confirmed arrangements",
    ],
  },
];

const inclusions = [
  "Event coordination and participant communication, as specified in the final event information",
  "Registration and participant check-in only where confirmed",
  "Stage briefings and route information for activities listed in the programme",
  "Ride leaders, guides or event support only where explicitly confirmed",
  "Accommodation only if listed in the event confirmation",
  "Meals and refreshments only where listed in the event confirmation",
  "Transfers, luggage support and mechanical assistance only where explicitly confirmed",
];

const exclusions = [
  "Travel to and from Morocco",
  "Travel insurance, medical cover and personal accident cover",
  "Personal bicycle, helmet, clothing and riding equipment unless specifically arranged",
  "Accommodation, meals and drinks not listed in the event confirmation",
  "Transfers and transport not specifically included",
  "Personal expenses, tips and optional activities",
  "Any service not expressly listed in the final event details",
];

const preparation = [
  {
    title: "Bring a Suitable Bike",
    text: "Prepare a mechanically sound bicycle appropriate for the terrain and surfaces described in the final event programme. Check your brakes, tyres, drivetrain and wheels before travelling. Ask the organisers about bicycle requirements and rental availability before making arrangements.",
  },
  {
    title: "Prepare for Desert Conditions",
    text: "Bring a properly fitted helmet, gloves, riding glasses and suitable footwear. Sun protection is important in exposed terrain. Follow the organisers' equipment guidance and bring any additional protection recommended for the confirmed routes.",
  },
  {
    title: "Plan Your Hydration",
    text: "Desert riding can involve exposed sections and limited shade. Bring suitable hydration equipment and personal nutrition for riding. The event's water, refreshment and support arrangements must be confirmed before participation.",
  },
  {
    title: "Prepare for Multiple Days",
    text: "A multi-day cycling event requires preparation beyond a single ride. Bring appropriate clothing, basic compatible spares, personal medication and recovery essentials. Share your riding experience and fitness level with the organisers before registering.",
  },
];

const faqs = [
  {
    q: "When will the Agafay Desert Cycling Challenge take place?",
    a: "The event dates have not been specified on this page. Contact Mountain Bike Morocco for the current schedule, registration information and confirmed event arrangements.",
  },
  {
    q: "Where is the Agafay Desert Cycling Challenge held?",
    a: "The event takes place in the Agafay Desert region near Marrakech, Morocco. The precise meeting point, riding areas and participant logistics will be confirmed in the official event information.",
  },
  {
    q: "How many days does the event last?",
    a: "The Agafay Desert Cycling Challenge is a multi-day event. The exact number of days and the arrival and departure schedule have not yet been specified here. Contact the team for the confirmed programme.",
  },
  {
    q: "How many cycling stages are included?",
    a: "The final number of stages has not been confirmed on this page. Stage details and the daily programme will be provided by the organisers before registration.",
  },
  {
    q: "What distances and elevation gains should I expect?",
    a: "Exact distances, elevation gain, route profiles and technical grades are not specified here. These details depend on the final routes and will be communicated in the official event programme.",
  },
  {
    q: "What level of cycling experience is required?",
    a: "The required experience depends on the final route selection and event format. Please share your cycling background and fitness level when enquiring so the organisers can confirm the expected participant level.",
  },
  {
    q: "Can I rent a bicycle for the event?",
    a: "Bicycle rental is not confirmed as part of the event. Contact the organisers before travelling to ask about suitable bicycle requirements, rental availability and any related arrangements.",
  },
  {
    q: "Are accommodation, meals and transfers included?",
    a: "These services are not guaranteed by this page. Any accommodation, meals, refreshments, transfers, guiding or mechanical support included in the event will be listed in the official event confirmation.",
  },
  {
    q: "How can I register or ask about availability?",
    a: "Use the enquiry form on this page and mention the Agafay Desert Cycling Challenge. The Mountain Bike Morocco team can provide the latest dates, participation information and confirmed arrangements.",
  },
];

const relatedEvents = [
  {
    category: "MTB GATHERING",
    title: "Atlas Mountains MTB Gathering",
    text: "Meet fellow mountain bikers and discover the High Atlas through a shared cycling gathering.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/events/atlas-mountains-mtb-gathering",
  },
  {
    category: "GRAVEL CYCLING EVENT",
    title: "Morocco Gravel Bike Caravan",
    text: "Explore Morocco's changing landscapes on a group gravel cycling experience.",
    image: "/images/gravel-cycling-morocco.jpg",
    href: "/events/morocco-gravel-bike-caravan",
  },
  {
    category: "E-MTB ADVENTURE",
    title: "Marrakech to Sahara E-MTB Caravan",
    text: "A multi-stage electric mountain-bike event linking mountain and desert scenery.",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/events/marrakech-to-sahara-e-mtb-caravan",
  },
];

export default function AgafayDesertCyclingChallengePage() {
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

        .atlas-tour *, .atlas-tour *::before, .atlas-tour *::after {
          box-sizing: border-box;
        }

        .atlas-tour img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

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

        .atlas-tour .at-hero-image, .atlas-tour .at-hero-shade {
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

        .atlas-tour .at-overview-image img {
          position: absolute;
          inset: 0;
        }

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

        .atlas-tour .at-culture-content {
          align-self: center;
          padding: 70px clamp(35px, 7vw, 100px);
        }

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

        .atlas-tour .at-itinerary-list { display: grid; gap: 22px; }

        .atlas-tour .at-day {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 370px;
          background: #fffefa;
          border: 1px solid #e0dcd1;
        }

        .atlas-tour .at-day:nth-child(even) .at-day-image { order: 2; }
        .atlas-tour .at-day-image { min-height: 370px; }

        .atlas-tour .at-day-content {
          align-self: center;
          padding: 40px clamp(25px, 5vw, 65px);
        }

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

        .atlas-tour .at-event-enquiry {
          position: relative;
          background:
            radial-gradient(ellipse at 50% 0%, rgba(198,160,91,.10), transparent 48%),
            #eae6db;
        }

        .atlas-tour .at-event-enquiry::before {
          position: absolute;
          top: 0;
          left: 50%;
          width: 110px;
          height: 2px;
          background: var(--gold);
          content: "";
          transform: translateX(-50%);
        }

        .atlas-tour .at-event-enquiry .at-section-head { margin-bottom: 42px; }

        .atlas-tour .at-event-enquiry-card {
          position: relative;
          max-width: 1040px;
          margin: 0 auto;
          padding: clamp(30px, 5vw, 64px);
          background: #fffefa;
          border: 1px solid #ded8ca;
          box-shadow: 0 28px 75px rgba(32,36,31,.11);
        }

        .atlas-tour .at-event-enquiry-card::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #8d6b39 0%, #dfc17f 50%, #8d6b39 100%);
          content: "";
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form {
          display: block;
          width: 100%;
          margin: 0;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__heading {
          max-width: 720px;
          margin: 0 0 38px;
          padding-bottom: 25px;
          border-bottom: 1px solid #e8e3d8;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__heading .cl-eyebrow {
          display: inline-block;
          color: #98713a;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__heading h3 {
          margin: 10px 0 12px;
          color: var(--ink);
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(29px, 3vw, 39px);
          font-weight: 400;
          letter-spacing: -.8px;
          line-height: 1.18;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__heading p {
          max-width: 620px;
          margin: 0;
          color: #74766d;
          font-size: 14px;
          line-height: 1.85;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 25px 27px;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__grid label {
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

        .atlas-tour .at-event-enquiry .contact-enquiry-form__grid input,
        .atlas-tour .at-event-enquiry .contact-enquiry-form__grid select,
        .atlas-tour .at-event-enquiry .contact-enquiry-form__grid textarea {
          display: block;
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
          box-shadow: inset 0 1px 2px rgba(32,36,31,.025);
          transition: border-color .2s ease, background .2s ease, box-shadow .2s ease;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__grid input:hover,
        .atlas-tour .at-event-enquiry .contact-enquiry-form__grid select:hover,
        .atlas-tour .at-event-enquiry .contact-enquiry-form__grid textarea:hover {
          border-color: #c9b992;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__grid input:focus,
        .atlas-tour .at-event-enquiry .contact-enquiry-form__grid select:focus,
        .atlas-tour .at-event-enquiry .contact-enquiry-form__grid textarea:focus {
          border-color: #ad8549;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(198,160,91,.13);
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__grid input::placeholder,
        .atlas-tour .at-event-enquiry .contact-enquiry-form__grid textarea::placeholder {
          color: #a5a398;
          opacity: 1;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__grid select {
          appearance: auto;
          cursor: pointer;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__grid textarea {
          min-height: 165px;
          resize: vertical;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__full {
          grid-column: 1 / -1;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__submit {
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
          transition: background .2s ease, border-color .2s ease, color .2s ease, transform .2s ease;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__submit:hover {
          transform: translateY(-2px);
          border-color: #b28a4c;
          background: #b28a4c;
          color: #20241f;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__submit:focus-visible {
          outline: 3px solid rgba(198,160,91,.35);
          outline-offset: 3px;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__submit:disabled {
          cursor: wait;
          opacity: .65;
          transform: none;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__status {
          margin: 22px 0 0;
          padding: 16px 19px;
          border: 1px solid #e5ddc9;
          border-left: 3px solid #9a7540;
          background: #f6f3eb;
          color: #45483f;
          font-size: 13px;
          line-height: 1.75;
        }

        .atlas-tour .at-event-enquiry .contact-enquiry-form__privacy {
          max-width: 650px;
          margin: 20px 0 0;
          color: #858478;
          font-size: 11px;
          line-height: 1.8;
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

        .atlas-tour .at-final-image, .atlas-tour .at-final-shade {
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

        .atlas-tour .at-related-image {
          height: 255px;
          overflow: hidden;
        }

        .atlas-tour .at-related-image img { transition: transform .5s ease; }

        .atlas-tour .at-related-card:hover .at-related-image img {
          transform: scale(1.04);
        }

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

          .atlas-tour .at-hero-content {
            width: calc(100% - 40px);
            padding: 90px 0 42px;
          }

          .atlas-tour .at-hero h1 {
            font-size: clamp(43px, 12vw, 62px);
            letter-spacing: -1.8px;
          }

          .atlas-tour .at-hero-description { font-size: 15px; }

          .atlas-tour .at-hero-bottom {
            gap: 18px 25px;
            margin-top: 38px;
          }

          .atlas-tour .at-fact-strip-inner { grid-template-columns: repeat(2, 1fr); }

          .atlas-tour .at-fact {
            min-height: 90px;
            padding: 17px 15px;
          }

          .atlas-tour .at-fact:nth-child(2) { border-right: 0; }

          .atlas-tour .at-fact:nth-child(-n+2) {
            border-bottom: 1px solid var(--line);
          }

          .atlas-tour .at-subnav-inner {
            justify-content: flex-start;
            gap: 12px 20px;
          }

          .atlas-tour .at-subnav a { font-size: 9px; }

          .atlas-tour .at-section-head {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .atlas-tour .at-section-head > p { margin: 0; }

          .atlas-tour .at-overview-grid,
          .atlas-tour .at-terrain-grid,
          .atlas-tour .at-facts-layout,
          .atlas-tour .at-difficulty-grid,
          .atlas-tour .at-faq-layout {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .atlas-tour .at-overview-image {
            min-height: 390px;
            margin-right: 12px;
          }

          .atlas-tour .at-booking-card { padding: 25px; }

          .atlas-tour .at-highlight-grid { grid-template-columns: 1fr 1fr; }

          .atlas-tour .at-highlight {
            min-height: 230px;
            padding: 23px 17px;
          }

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

          .atlas-tour .at-gallery-item:first-child {
            grid-column: span 2;
            grid-row: auto;
          }

          .atlas-tour .at-day { grid-template-columns: 1fr; }
          .atlas-tour .at-day:nth-child(even) .at-day-image { order: 0; }
          .atlas-tour .at-day-image { min-height: 260px; }
          .atlas-tour .at-day-content { padding: 28px 23px; }

          .atlas-tour .at-inclusions-grid { grid-template-columns: 1fr; }
          .atlas-tour .at-inclusion-card { padding: 28px 23px; }
          .atlas-tour .at-prep-grid { grid-template-columns: 1fr; }
          .atlas-tour .at-difficulty-image { height: 330px; }
          .atlas-tour .at-event-enquiry-card { padding: 30px 20px; }

          .atlas-tour .at-event-enquiry .contact-enquiry-form__grid {
            grid-template-columns: 1fr;
            gap: 19px;
          }

          .atlas-tour .at-event-enquiry .contact-enquiry-form__full {
            grid-column: auto;
          }

          .atlas-tour .at-event-enquiry .contact-enquiry-form__submit { width: 100%; }

          .atlas-tour .at-final-content {
            width: calc(100% - 40px);
            padding: 75px 0;
          }

          .atlas-tour .at-related-grid { grid-template-columns: 1fr; }
          .atlas-tour .at-related-image { height: 240px; }

          .atlas-tour .at-footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 35px 22px;
            padding: 50px 0 35px;
          }

          .atlas-tour .at-footer-bottom {
            flex-direction: column;
            gap: 8px;
          }
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
            alt="Cycling through the rocky Agafay Desert near Marrakech"
            fetchPriority="high"
          />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">
            MOROCCO · AGAFAY DESERT · CYCLING CHALLENGE
          </span>
          <h1>Agafay Desert Cycling Challenge</h1>
          <p className="at-hero-description">
            Take on a multi-day cycling challenge in the remarkable Agafay
            Desert near Marrakech. Ride through rocky desert landscapes,
            discover wide-open horizons and share an unforgettable cycling
            experience with fellow participants.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="#enquiry">
              Enquire About the Event <span>→</span>
            </a>
            <a className="at-hero-back" href="/events">
              Explore All Events
            </a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>MULTI-DAY</strong><span>Desert challenge</span></div>
            <div><strong>AGAFAY</strong><span>Near Marrakech</span></div>
            <div><strong>CYCLING</strong><span>Desert terrain</span></div>
            <div><strong>DATES TBC</strong><span>Ask for details</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>Multi-Day Event</strong></div>
          <div className="at-fact"><span>Region</span><strong>Agafay Desert</strong></div>
          <div className="at-fact"><span>Event style</span><strong>Desert Cycling Challenge</strong></div>
          <div className="at-fact"><span>Dates</span><strong>To Be Confirmed</strong></div>
        </div>
      </section>

      <nav className="at-subnav">
        <div className="at-container at-subnav-inner">
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

      <section className="at-section" id="overview">
        <div className="at-container at-overview-grid">
          <div className="at-overview-image">
            <img
              src={images.overview}
              alt="The open rocky landscape of the Agafay Desert in Morocco"
              loading="lazy"
            />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A DESERT CYCLING EXPERIENCE</span>
            <h2 className="at-heading">
              Take on a Multi-Day Challenge in the Agafay Desert
            </h2>
            <p className="at-copy">
              The Agafay Desert Cycling Challenge is a multi-day event set in
              the distinctive rocky landscape near Marrakech. It brings
              cyclists together for a shared challenge across an environment
              shaped by stony tracks, dry valleys and open desert scenery.
            </p>
            <p className="at-copy">
              Unlike the sandy image many people associate with the Sahara,
              Agafay is known for its rugged, stony terrain and rolling
              landscape. It offers a different setting for cycling in
              Morocco, with wide horizons and routes that will be selected
              according to the final event programme.
            </p>
            <p className="at-copy">
              The challenge is organised across multiple days. The exact
              duration, stage count, route distances, elevation gain and
              participant arrangements will be confirmed by the organisers.
              Contact the team for current dates and registration details.
            </p>
            <a className="at-text-link" href="#programme">
              Explore the event programme →
            </a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">EVENT INFORMATION</span>
            <h2 className="at-heading">
              Understand the Challenge Before You Register
            </h2>
            <p className="at-copy">
              A multi-day cycling challenge requires clear information about
              the route, stages, riding conditions and event logistics.
              Before registering, tell us about your cycling experience,
              preferred dates and any practical requirements.
            </p>
            <p className="at-copy">
              The organisers will confirm the meeting point, event duration,
              stage programme, daily distances, route profiles and support
              arrangements. Accommodation, meals, refreshments, transfers
              and mechanical assistance should be treated as unconfirmed
              until they appear in the official event information.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">EVENT AT A GLANCE</span>
            <h3>Agafay Desert Cycling Challenge</h3>
            <p>
              A multi-day cycling event in the rocky desert landscape near
              Marrakech.
            </p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>Multi-day</strong></li>
              <li><span>Destination</span><strong>Agafay Desert</strong></li>
              <li><span>Discipline</span><strong>Cycling</strong></li>
              <li><span>Event format</span><strong>Desert challenge</strong></li>
              <li><span>Dates and price</span><strong>Ask for details</strong></li>
            </ul>
            <a className="at-button" href="#enquiry">
              Request Event Details <span>→</span>
            </a>
          </aside>
        </div>
      </section>

      <section className="at-section at-highlight-section" id="highlights">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">THE CHALLENGE</span>
              <h2 className="at-heading">
                Highlights of the Agafay Desert Cycling Challenge
              </h2>
            </div>
            <p>
              A multi-day cycling experience in one of the distinctive
              landscapes around Marrakech, bringing together desert terrain,
              open scenery and a shared sporting challenge.
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

      <section className="at-section" id="experience">
        <div className="at-container at-terrain-grid">
          <div className="at-terrain-image">
            <img
              src={images.terrain}
              alt="Rocky hills and open terrain in the Agafay Desert"
              loading="lazy"
            />
          </div>
          <div>
            <span className="at-eyebrow">THE RIDING ENVIRONMENT</span>
            <h2 className="at-heading">
              Discover the Rocky Terrain of Agafay
            </h2>
            <p className="at-copy">
              Agafay offers a distinctive desert environment close to
              Marrakech. Its stony hills, dry valleys, rugged tracks and
              open landscapes create a very different setting from the
              high mountain trails of the Atlas.
            </p>
            <p className="at-copy">
              The exact riding routes for the challenge have not been fixed
              on this page. The organisers should confirm the surfaces,
              daily distances, elevation gain, technical sections and
              expected riding conditions before participants make travel
              arrangements.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Rocky desert landscapes and open horizons</li>
              <li><span>02</span>Stony tracks and dry terrain, as selected</li>
              <li><span>03</span>Route distances and stage profiles to be confirmed</li>
              <li><span>04</span>Multi-day event schedule shared before registration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR PARTICIPATION</span>
            <h2 className="at-heading">Event Information</h2>
            <p className="at-copy">
              The details below distinguish the event's current outline from
              information that still needs confirmation. Ask the team for
              the latest official programme before booking travel or
              accommodation.
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
            src={images.culture}
            alt="The distinctive rocky desert surroundings of Agafay, Morocco"
            loading="lazy"
          />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">
            Experience the Agafay Desert Region
          </h2>
          <p className="at-copy">
            Agafay is a striking landscape on the outskirts of Marrakech.
            Its rocky terrain, dry valleys and wide horizons provide a
            distinctive backdrop for a cycling event. The region's
            proximity to Marrakech also makes it useful to consider the
            wider area when planning travel and event logistics.
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
              <span className="at-eyebrow">DESERT MOMENTS</span>
              <h2 className="at-heading">
                The Landscapes of the Agafay Challenge
              </h2>
            </div>
            <p>
              A visual introduction to the rocky desert environment around
              Agafay. Exact event locations and cycling routes are confirmed
              separately.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item">
              <img src={images.galleryOne} alt="Agafay desert landscape" loading="lazy" />
            </div>
            <div className="at-gallery-item">
              <img src={images.galleryTwo} alt="Rocky terrain in the Agafay region" loading="lazy" />
            </div>
            <div className="at-gallery-item">
              <img src={images.galleryThree} alt="Open desert scenery near Marrakech" loading="lazy" />
            </div>
            <div className="at-gallery-item">
              <img src={images.galleryFour} alt="Cycling event in the Agafay Desert" loading="lazy" />
            </div>
            <div className="at-gallery-item">
              <img src={images.galleryFive} alt="The wide landscape of the Agafay region" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="programme">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">MULTI-DAY DESERT CHALLENGE</span>
              <h2 className="at-heading">Indicative Event Programme</h2>
            </div>
            <p>
              This is an indicative outline of a multi-day event, not a
              confirmed day-by-day schedule. The actual number of days,
              stages, meeting points, timings and participant arrangements
              must be confirmed by the organisers.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The programme below illustrates possible phases of the event.
            It does not promise a fixed number of days or stages, distances,
            elevation gain, route grades, guiding, meals, transfers or
            accommodation. The official event confirmation takes precedence.
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

      <section className="at-section" id="included">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EVENT ARRANGEMENTS</span>
              <h2 className="at-heading">What Is Included?</h2>
            </div>
            <p>
              No services should be assumed included unless they are expressly
              listed in the event confirmation. Use the following as a
              checklist when requesting the official participation details.
            </p>
          </div>
          <div className="at-inclusions-grid">
            <div className="at-inclusion-card">
              <h3>To Be Confirmed</h3>
              <ul>
                {inclusions.map((item) => (
                  <li key={item}><span>+</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="at-inclusion-card">
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

      <section className="at-section at-prep-section" id="preparation">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">BEFORE YOU TRAVEL</span>
              <h2 className="at-heading">
                Preparing for the Agafay Desert Challenge
              </h2>
            </div>
            <p>
              Prepare your bicycle, equipment and fitness for multiple days
              of cycling in an exposed desert environment. Check the official
              event information for specific equipment and participant
              requirements.
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
              src={images.difficulty}
              alt="Cycling through the rocky Agafay Desert"
              loading="lazy"
            />
          </div>
          <div>
            <span className="at-eyebrow">KNOW YOUR RIDE</span>
            <h2 className="at-heading">
              Rider Level and Desert Event Safety
            </h2>
            <p className="at-copy">
              The physical and technical demands of the challenge depend on
              the final route, stage distances and event format. Desert
              cycling can involve exposed terrain, uneven surfaces, loose
              stones and changing weather conditions. Participants should
              share an honest description of their cycling experience and
              fitness when enquiring.
            </p>
            <p className="at-copy">
              Before the event, the organisers should communicate the
              expected participant level, route conditions, equipment
              requirements, hydration arrangements, group riding rules and
              emergency procedures. Participants are responsible for
              bringing suitable equipment and appropriate insurance.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> The event duration, stage count,
              route distances, elevation, technical grades and support
              arrangements must be confirmed in the official event
              information. This page does not state a fixed route or
              guaranteed service.
            </div>
          </div>
        </div>
      </section>

      <section className="at-section at-faq-section" id="faqs">
        <div className="at-container at-faq-layout">
          <div>
            <span className="at-eyebrow">GOOD TO KNOW</span>
            <h2 className="at-heading">
              Frequently Asked Questions
            </h2>
            <p className="at-copy">
              Find answers to common questions about the Agafay Desert
              Cycling Challenge. Contact the team for confirmed dates,
              availability, stage information and the latest event
              arrangements.
            </p>
            <a className="at-text-link" href="#enquiry">
              Ask About the Challenge →
            </a>
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

      <section className="at-section at-event-enquiry" id="enquiry">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">REGISTER YOUR INTEREST</span>
              <h2 className="at-heading">
                Enquire About the Agafay Desert Cycling Challenge
              </h2>
            </div>
            <p>
              Tell us about your cycling experience, preferred dates and
              group size. Our team will contact you with the latest event
              information, stage details and confirmed arrangements.
            </p>
          </div>

          <div className="at-event-enquiry-card">
            <ContactEnquiryForm
              eventName="Agafay Desert Cycling Challenge"
              destination="Agafay Desert, near Marrakech, Morocco"
            />
          </div>
        </div>
      </section>

      <section className="at-final-cta">
        <div className="at-final-image">
          <img
            src={images.final}
            alt="The open rocky landscape of the Agafay Desert"
            loading="lazy"
          />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">JOIN THE AGAFAY DESERT CHALLENGE</span>
          <h2>Ready to Take on a Multi-Day Desert Cycling Challenge?</h2>
          <p>
            Contact Mountain Bike Morocco for the latest event dates,
            stage information, participation requirements and confirmed
            arrangements. Tell us about your cycling experience and we
            will help you understand the event details.
          </p>
          <a className="at-button" href="#enquiry">
            Enquire About the Event <span>→</span>
          </a>
        </div>
      </section>

      <section className="at-related-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EXPLORE MORE</span>
              <h2 className="at-heading">
                More Cycling Events in Morocco
              </h2>
            </div>
            <p>
              Explore other group cycling experiences, from mountain-bike
              gatherings to gravel journeys and multi-stage electric
              mountain-bike events.
            </p>
          </div>
          <div className="at-related-grid">
            {relatedEvents.map((event) => (
              <article className="at-related-card" key={event.title}>
                <div className="at-related-image">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                  />
                </div>
                <div className="at-related-content">
                  <span className="at-eyebrow">{event.category}</span>
                  <h3>{event.title}</h3>
                  <p>{event.text}</p>
                  <a href={event.href}>Discover This Event →</a>
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
              Agafay Desert, remote valleys and unforgettable trails
              with Mountain Bike Morocco.
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
              <a href="#enquiry">Plan Your Event</a>
              <a href="/events">Explore Cycling Events</a>
            </div>
          </div>
        </div>
        <div className="at-container at-footer-bottom">
          <span>© {2026} Mountain Bike Morocco. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}