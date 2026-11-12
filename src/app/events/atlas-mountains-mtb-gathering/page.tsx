import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Atlas Mountains MTB Gathering Morocco | Mountain Bike Morocco",
  description:
    "Join the Atlas Mountains MTB Gathering in Morocco's High Atlas for shared mountain-bike rides, natural trails, mountain scenery and time with fellow riders. Event arrangements are confirmed individually.",
  alternates: {
    canonical: "/events/atlas-mountains-mtb-gathering",
  },
};

const images = {
  hero: "/images/singletrack-biking-morocco.jpg",
  overview: "/images/group-cycling-atlas-mountains.jpg",
  terrain: "/images/singletrack-mtb-atlas-mountains.jpg",
  culture: "/images/berber-villages-cycling-expeditions.jpg",

  galleryOne: "/images/mountain-biking-atlas-mountains-morocco.jpg",
  galleryTwo: "/images/imlil-cycling-adventure-tour.jpeg",
  galleryThree: "/images/singletrack-cycling-morocco.jpg",
  galleryFour: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  galleryFive: "/images/atlas-berber-valley-bike.JPG",

  dayOne: "/images/cycling-group-events-morocco.jpg",
  dayTwo: "/images/mountain-biking-atlas-mountains.jpg",
  dayThree: "/images/atlas-mountains-cycling-expedition.jpg",

  difficulty: "/images/mtb-tour-atlas-mountains.jpg",
  final: "/images/mtb-tour-atlas-mountains-2.jpg",
};

const facts = [
  ["Duration", "3 days"],
  ["Destination", "High Atlas Mountains, Morocco"],
  ["Meeting point", "To be confirmed"],
  ["Main activity", "Mountain biking"],
  ["Riding style", "Group MTB gathering"],
  ["Difficulty", "To be confirmed with the ride programme"],
  ["Experience", "Rider experience details requested"],
  ["Event format", "Group event; arrangements to be confirmed"],
  ["Dates", "Contact us for event dates"],
];

const highlights = [
  {
    number: "01",
    title: "Ride the High Atlas",
    text: "Spend time on mountain-bike routes in the High Atlas, with the final trail selection shaped by the event programme and the group's riding level.",
  },
  {
    number: "02",
    title: "Meet Fellow Riders",
    text: "Share the experience with other mountain-bike enthusiasts, exchange trail stories and enjoy the atmosphere of a dedicated MTB gathering.",
  },
  {
    number: "03",
    title: "Discover Mountain Trails",
    text: "Explore the varied character of the Atlas landscape, from rocky mountain tracks to natural trail sections selected for the gathering.",
  },
  {
    number: "04",
    title: "Experience Local Landscapes",
    text: "Enjoy the mountain scenery and traditional settlements of the High Atlas, with time to appreciate the region beyond the riding.",
  },
];

const beyondTrail = [
  {
    title: "Amazigh mountain communities",
    text: "The High Atlas is shaped by long-established Amazigh communities, mountain villages and distinctive local architecture.",
  },
  {
    title: "Atlas landscapes",
    text: "Discover rugged slopes, cultivated terraces, broad valley views and the changing scenery of the mountain region.",
  },
  {
    title: "Shared cycling culture",
    text: "A gathering is an opportunity to connect with other riders, share experience and enjoy a common passion for mountain biking.",
  },
  {
    title: "Time beyond the bike",
    text: "The event can include opportunities to experience local food and mountain hospitality where these arrangements are confirmed.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival and Rider Welcome",
    location: "Meeting location to be confirmed",
    distance: "No fixed distance",
    riding: "Welcome, bike checks and event briefing",
    image: images.dayOne,
    text: "Arrive at the confirmed meeting point and get to know the other participants. The opening session is an opportunity to review the event schedule, discuss riding experience, check bicycles and equipment, and go through the practical arrangements for the gathering. Any welcome meal, transfer or accommodation arrangement will be detailed in the event confirmation.",
    details: [
      "Participant welcome and introductions",
      "Review of the confirmed event programme",
      "Bicycle and equipment checks",
      "Group briefing and safety information",
    ],
  },
  {
    day: "02",
    title: "Atlas Mountains Group Ride",
    location: "High Atlas riding area to be confirmed",
    distance: "Route-dependent",
    riding: "Guided or coordinated group MTB ride, subject to confirmation",
    image: images.dayTwo,
    text: "The main riding day focuses on discovering mountain-bike terrain in the High Atlas. The route, distance, elevation gain, technical character and ride format will be confirmed once the event location and participant levels are established. The programme should be appropriate to the group's agreed ability and the prevailing trail and weather conditions.",
    details: [
      "Group ride on the confirmed Atlas route",
      "Ride briefing and agreed regrouping points",
      "Breaks planned around the final route",
      "Time to enjoy the mountain scenery and shared experience",
    ],
  },
  {
    day: "03",
    title: "Final Ride and Event Closing",
    location: "High Atlas area – departure arrangements to be confirmed",
    distance: "Route-dependent",
    riding: "Optional or scheduled final ride, subject to programme",
    image: images.dayThree,
    text: "Conclude the gathering with the final activity listed in the confirmed programme. Depending on the event format, this may be another group ride or a shorter closing activity. Allow time for equipment checks, farewells and onward travel. The precise schedule and any transfers will be shared with registered participants.",
    details: [
      "Final event activity as confirmed",
      "Group photographs and participant farewell",
      "Equipment and personal belongings check",
      "Departure according to individual arrangements",
    ],
  },
];

const inclusions = [
  "Event coordination and participant communication, as specified in the final event information",
  "Ride briefing and route information for activities confirmed in the programme",
  "Guiding, ride leaders or local support only where explicitly confirmed",
  "Accommodation only if listed in the event confirmation",
  "Meals and refreshments only where listed in the event confirmation",
  "Transfers, luggage support and mechanical assistance only where explicitly confirmed",
];

const exclusions = [
  "Travel to and from Morocco",
  "Travel insurance, medical cover and personal accident cover",
  "Personal mountain bike, helmet, clothing and riding equipment unless specifically arranged",
  "Accommodation, meals and drinks not listed in the event confirmation",
  "Transfers and transport not specifically included",
  "Personal expenses, tips and optional activities",
  "Any service not expressly listed in the final event details",
];

const preparation = [
  {
    title: "Bring a suitable mountain bike",
    text: "Arrive with a mechanically sound mountain bike suited to the terrain described in the final event programme. Check brakes, tyres, drivetrain and suspension before travelling. Rental availability must be confirmed in advance.",
  },
  {
    title: "Use appropriate protection",
    text: "A properly fitted helmet is essential. Bring gloves, riding glasses, suitable footwear and protective equipment appropriate to your riding style and the confirmed route. Follow any additional equipment guidance issued by the organisers.",
  },
  {
    title: "Be ready for mountain riding",
    text: "The physical and technical demands depend on the final route. Tell the organisers about your experience, fitness and confidence on technical terrain so that the event information can be shared clearly before you register.",
  },
  {
    title: "Pack personal essentials",
    text: "Bring weather-appropriate layers, sun protection, hydration, personal medication and any nutrition you normally use while riding. Carry basic spares and tools compatible with your bicycle.",
  },
];

const faqs = [
  {
    q: "When will the Atlas Mountains MTB Gathering take place?",
    a: "Event dates have not been specified on this page. Contact Mountain Bike Morocco for the current schedule and registration information.",
  },
  {
    q: "Where will the gathering be held?",
    a: "The event is planned for the High Atlas Mountains. The precise meeting point, riding area and any accommodation location will be confirmed in the event information.",
  },
  {
    q: "How long is the event?",
    a: "The gathering is presented as a three-day event. The detailed arrival, riding and departure schedule will be shared once the programme is confirmed.",
  },
  {
    q: "What level of mountain-biking experience do I need?",
    a: "The suitable level depends on the selected trails and the format of the group rides. Please share your riding experience when enquiring. The organisers should confirm the expected ability level before registration.",
  },
  {
    q: "Are route distances and elevation details available?",
    a: "Exact routes, distances, elevation gain and technical grades are not specified here. They should be confirmed in the final ride programme rather than assumed in advance.",
  },
  {
    q: "Is a mountain bike or rental bike included?",
    a: "A bicycle is not stated as included. Bring your own suitable bike or ask about rental options and availability before making travel arrangements.",
  },
  {
    q: "Are accommodation, meals and transfers included?",
    a: "These services are not guaranteed by this page. Any accommodation, meals, transfers, guiding or support services included in the event will be listed in the event confirmation.",
  },
  {
    q: "How can I register or ask about availability?",
    a: "Use the enquiry form on this page and mention the Atlas Mountains MTB Gathering. The team can provide the latest dates, participation details and confirmed arrangements.",
  },
];

const relatedEvents = [
  {
    category: "DESERT CYCLING EVENT",
    title: "Agafay Desert Cycling Challenge",
    text: "Discover a different riding landscape on a cycling event in the rocky Agafay desert.",
    image: "/images/Desert-Agafay-Morocco.jpg",
    href: "/events/agafay-desert-cycling-challenge",
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

export default function AtlasMountainsMtbGatheringPage() {
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

        .atlas-tour *,
        .atlas-tour *::before,
        .atlas-tour *::after {
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

        /* Premium event enquiry section */

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

        .atlas-tour .at-event-enquiry .at-section-head {
          margin-bottom: 42px;
        }

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
          transition:
            border-color .2s ease,
            background .2s ease,
            box-shadow .2s ease;
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
          transition:
            background .2s ease,
            border-color .2s ease,
            color .2s ease,
            transform .2s ease;
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
          .atlas-tour .at-faq-layout {
            gap: 40px;
          }

          .atlas-tour .at-highlight-grid { grid-template-columns: repeat(2, 1fr); }
          .atlas-tour .at-prep-grid { grid-template-columns: repeat(2, 1fr); }
          .atlas-tour .at-footer-main { grid-template-columns: 1.2fr 1fr; }
        }

        @media (max-width: 700px) {
          .atlas-tour .at-container {
            width: min(100% - 40px, 1240px);
          }

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

          .atlas-tour .at-event-enquiry .contact-enquiry-form__submit {
            width: 100%;
          }

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
            alt="Mountain biking through a dramatic mountain landscape"
            fetchPriority="high"
          />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · HIGH ATLAS · MTB GATHERING</span>
          <h1>Atlas Mountains MTB Gathering</h1>
          <p className="at-hero-description">
            Come together for a mountain-bike gathering in Morocco&apos;s High
            Atlas. Discover mountain landscapes, share the trails with fellow
            riders and enjoy a group cycling experience shaped around the
            confirmed event programme.
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
            <div><strong>03 DAYS</strong><span>MTB gathering</span></div>
            <div><strong>HIGH ATLAS</strong><span>Morocco</span></div>
            <div><strong>GROUP RIDES</strong><span>Mountain biking</span></div>
            <div><strong>DATES TBC</strong><span>Ask for details</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>3 Days</strong></div>
          <div className="at-fact"><span>Region</span><strong>High Atlas Mountains</strong></div>
          <div className="at-fact"><span>Event style</span><strong>Group MTB Gathering</strong></div>
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
              alt="Cyclist enjoying an outdoor mountain cycling route"
              loading="lazy"
            />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A MEETING OF MOUNTAIN BIKERS</span>
            <h2 className="at-heading">
              Bring Your Love of Mountain Biking to the High Atlas
            </h2>
            <p className="at-copy">
              The Atlas Mountains MTB Gathering is a three-day event for riders
              who want to experience Morocco&apos;s High Atlas and share time on
              the trails with a community of fellow mountain-bike enthusiasts.
              It brings the focus to the riding, the mountain environment and
              the people who make a group cycling experience memorable.
            </p>
            <p className="at-copy">
              The High Atlas offers a varied mountain setting, with rugged
              slopes, traditional villages, cultivated valleys and natural
              trails. The exact riding area and route selection will depend on
              the confirmed event programme, local conditions and the profile
              of registered participants.
            </p>
            <p className="at-copy">
              Whether you are travelling to meet other riders or to discover
              mountain biking in Morocco, contact the team for the latest
              event dates, participation requirements and practical details.
              No date, price or route specification is assumed on this page.
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
              A Shared Ride, Planned with Clear Details
            </h2>
            <p className="at-copy">
              A successful group gathering starts with a clear understanding
              of the route, riding level and event arrangements. Before
              registering, tell us about your mountain-bike experience,
              preferred riding style and any practical requirements.
            </p>
            <p className="at-copy">
              The organiser will confirm the meeting point, daily schedule,
              route information, group format and any included services.
              Distances, elevation gain, technical grades, accommodation,
              meals and transport should be treated as unconfirmed until
              they appear in the official event information.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">EVENT AT A GLANCE</span>
            <h3>Atlas Mountains MTB Gathering</h3>
            <p>
              Three days of shared mountain-bike activities in Morocco&apos;s
              High Atlas.
            </p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>3 days</strong></li>
              <li><span>Destination</span><strong>High Atlas</strong></li>
              <li><span>Discipline</span><strong>Mountain biking</strong></li>
              <li><span>Event format</span><strong>Group gathering</strong></li>
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
              <span className="at-eyebrow">THE GATHERING</span>
              <h2 className="at-heading">
                Highlights of the Atlas Mountains MTB Gathering
              </h2>
            </div>
            <p>
              A mountain-bike event built around shared riding, the landscapes
              of the High Atlas and the chance to connect with other cyclists.
              Final activities depend on the confirmed programme.
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
              alt="Mountain biker riding a technical singletrack trail"
              loading="lazy"
            />
          </div>
          <div>
            <span className="at-eyebrow">THE RIDING ENVIRONMENT</span>
            <h2 className="at-heading">
              Mountain Trails and High Atlas Scenery
            </h2>
            <p className="at-copy">
              The High Atlas is a dramatic setting for mountain biking.
              Its landscapes include rocky mountain slopes, valley tracks,
              terraced hillsides and routes linking rural settlements.
              Trail surfaces and riding conditions can vary considerably
              from one area to another.
            </p>
            <p className="at-copy">
              The gathering&apos;s actual route has not been fixed in this page.
              The organisers should confirm the riding area, route length,
              elevation, technical sections and expected group pace before
              participants make travel plans.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>High Atlas mountain landscapes</li>
              <li><span>02</span>Natural trails and mountain tracks, as selected</li>
              <li><span>03</span>Route and technical level to be confirmed</li>
              <li><span>04</span>Group riding arrangements shared before the event</li>
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
              The details below distinguish the event&apos;s current outline from
              information that still needs confirmation. Ask the team for the
              latest official programme before booking travel or accommodation.
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
            alt="Cyclists enjoying a natural trail through a mountain landscape"
            loading="lazy"
          />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">
            Discover the Mountain Culture of Morocco
          </h2>
          <p className="at-copy">
            The Atlas Mountains are not only a cycling destination. They are
            also home to Amazigh communities, traditional villages and a
            distinctive mountain culture. The gathering offers a reason to
            experience this setting alongside other riders, with any cultural
            visits or hospitality activities subject to the final programme.
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
              <h2 className="at-heading">
                The Landscapes of the Atlas Gathering
              </h2>
            </div>
            <p>
              A visual introduction to the mountain environment and group
              cycling atmosphere. Exact event locations and routes are
              confirmed separately.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item">
              <img
                src={images.galleryOne}
                alt="Mountain landscape and cycling scenery"
                loading="lazy"
              />
            </div>
            <div className="at-gallery-item">
              <img
                src={images.galleryTwo}
                alt="Cycling through a scenic outdoor landscape"
                loading="lazy"
              />
            </div>
            <div className="at-gallery-item">
              <img
                src={images.galleryThree}
                alt="Mountain biking on a natural trail"
                loading="lazy"
              />
            </div>
            <div className="at-gallery-item">
              <img
                src={images.galleryFour}
                alt="Mountain bike and outdoor adventure scenery"
                loading="lazy"
              />
            </div>
            <div className="at-gallery-item">
              <img
                src={images.galleryFive}
                alt="Cycling through a mountain environment"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="programme">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">THREE DAYS IN THE ATLAS</span>
              <h2 className="at-heading">Suggested Event Programme</h2>
            </div>
            <p>
              This is a planning outline for a three-day gathering, not a
              confirmed schedule. Meeting points, ride routes, timings,
              accommodation and included services must be confirmed by the
              organisers before registration.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The programme below illustrates a possible event structure.
            It does not promise fixed distances, elevation gain, trail grades,
            guiding, meals, transfers or accommodation. The official event
            confirmation takes precedence.
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
                Preparing for the MTB Gathering
              </h2>
            </div>
            <p>
              Prepare your bike, equipment and fitness for mountain riding.
              Check the official event information for any additional
              requirements before departure.
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
              alt="Mountain bike equipment and trail riding"
              loading="lazy"
            />
          </div>
          <div>
            <span className="at-eyebrow">KNOW YOUR RIDE</span>
            <h2 className="at-heading">
              Rider Level and Event Safety
            </h2>
            <p className="at-copy">
              The physical and technical demands of the gathering depend on
              the final route and group format. Mountain trails may include
              uneven ground, loose surfaces, climbs and descents. Participants
              should be comfortable riding a mountain bike and should provide
              an honest description of their experience when enquiring.
            </p>
            <p className="at-copy">
              Before the event, the organisers should communicate the expected
              rider level, route conditions, equipment requirements, group
              riding rules and emergency arrangements. Participants are
              responsible for bringing suitable equipment and appropriate
              insurance.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> The route, distances, elevation,
              technical grade, ride leadership and safety arrangements must
              be confirmed in the official event information. This page does
              not state a fixed route or guaranteed service.
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
              Find answers to common questions about the Atlas Mountains MTB
              Gathering. Contact the team for confirmed dates, availability
              and the latest event arrangements.
            </p>
            <a className="at-text-link" href="#enquiry">
              Ask About the Gathering →
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
                Enquire About the Atlas Mountains MTB Gathering
              </h2>
            </div>
            <p>
              Tell us about your riding experience, preferred dates and group
              size. Our team will contact you with the latest event details
              and confirmed arrangements.
            </p>
          </div>

          <div className="at-event-enquiry-card">
            <ContactEnquiryForm
              eventName="Atlas Mountains MTB Gathering"
              destination="High Atlas Mountains, Morocco"
            />
          </div>
        </div>
      </section>

      <section className="at-final-cta">
        <div className="at-final-image">
          <img
            src={images.final}
            alt="Mountain biking in a scenic mountain landscape"
            loading="lazy"
          />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">JOIN THE ATLAS MTB GATHERING</span>
          <h2>Ready to Ride and Connect in the High Atlas?</h2>
          <p>
            Contact Mountain Bike Morocco for the latest event dates,
            participation details and confirmed arrangements. Tell us about
            your riding experience and we will help you understand whether
            this gathering is right for you.
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
              Explore other group cycling experiences, from desert challenges
              to gravel journeys and multi-stage electric mountain-bike events.
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
              remote valleys and unforgettable trails with Mountain Bike Morocco.
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
              <a href="#enquiry">Plan Your Event</a>
              <a href="/events">Explore Cycling Events</a>
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