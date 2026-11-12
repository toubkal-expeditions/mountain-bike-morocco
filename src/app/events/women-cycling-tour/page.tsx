import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Women Cycling Tour Morocco – 8 Days | Mountain Bike Morocco",
  description:
    "Discover Morocco on an eight-day women-focused cycling tour. Experience mountain landscapes, traditional villages and memorable rides with a carefully planned cycling programme. Contact Mountain Bike Morocco for dates and details.",
  alternates: {
    canonical: "/events/women-cycling-tour",
  },
};

const images = {
  hero: "/images/women-cycling-tour-8-day.jpg",

  overview: "/images/atlas-cycling-adventure.jpg",
  terrain: "/images/mountain-biking-atlas-mountains-morocco.jpg",
  culture: "/images/berber-villages-cycling-expeditions.jpg",

  galleryOne: "/images/group-cycling-atlas-mountains.jpg",
  galleryTwo: "/images/atlas-mountains-cycling-tour.jpg",
  galleryThree: "/images/atlas-berber-valley-bike.JPG",
  galleryFour: "/images/group-morocco-cycling.jpg",
  galleryFive: "/images/cycling-group-events-morocco.jpg",

  dayOne: "/images/imlil-cycling-adventure-tour.jpeg",
  dayTwo: "/images/atlas-valley-cycling-morocco.jpg",
  dayThree: "/images/toubkal-cycling-expedition.jpg",
  dayFour: "/images/berber-villages-cycling-expeditions.jpg",
  dayFive: "/images/atlas-cycling-adventure.jpg",
  daySix: "/images/toubkal-adventure-cycling.jpg",
  daySeven: "/images/singletrack-cycling-morocco.jpg",
  dayEight: "/images/women-cycling-tour-8-day.jpg",

  difficulty: "/images/mountain-biking-atlas-mountains-morocco.jpg",
  final: "/images/women-cycling-tour-8-day.jpg",
};
const facts = [
  ["Duration", "8 days"],
  ["Destination", "Morocco"],
  ["Meeting point", "To be confirmed"],
  ["Main activity", "Cycling"],
  ["Tour style", "Women-focused cycling experience"],
  ["Difficulty", "To be confirmed"],
  ["Experience", "Details requested when enquiring"],
  ["Group format", "To be confirmed"],
  ["Dates", "Contact us for available dates"],
];

const highlights = [
  {
    number: "01",
    title: "Discover Morocco by Bike",
    text: "Experience Morocco from the saddle, travelling through changing landscapes and discovering the character of the country at a rewarding cycling pace.",
  },
  {
    number: "02",
    title: "A Women-Focused Experience",
    text: "Enjoy a cycling experience designed around women travellers, shared interests and the opportunity to connect with fellow participants.",
  },
  {
    number: "03",
    title: "Mountain and Valley Scenery",
    text: "Discover the beauty of Morocco's mountain regions, with routes and riding experiences selected according to the confirmed programme.",
  },
  {
    number: "04",
    title: "Culture Beyond the Ride",
    text: "Experience traditional villages, local landscapes and Moroccan hospitality, with cultural activities depending on the final itinerary.",
  },
];

const beyondTrail = [
  {
    title: "Amazigh mountain communities",
    text: "Discover the cultural character of Morocco's mountain regions, where Amazigh traditions, village life and distinctive architecture remain part of everyday life.",
  },
  {
    title: "Moroccan landscapes",
    text: "Experience the changing scenery of Morocco, from mountain slopes and green valleys to traditional settlements and open countryside.",
  },
  {
    title: "Shared experiences",
    text: "Meet fellow women cyclists, share the enjoyment of travelling by bike and create memories through a common passion for exploring.",
  },
  {
    title: "Local hospitality",
    text: "Enjoy opportunities to discover Moroccan food and hospitality where these experiences are included in the confirmed programme.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Morocco",
    location: "Arrival location to be confirmed",
    distance: "No fixed distance",
    riding: "Arrival and welcome",
    image: images.dayOne,
    text: "Arrive in Morocco and meet the team according to the confirmed travel arrangements. This first day provides time to settle in, meet the other participants and review the cycling programme. The exact arrival point, accommodation and transfer arrangements will be confirmed before departure.",
    details: [
      "Arrival and welcome according to the confirmed arrangements",
      "Meet the team and fellow participants",
      "Review the planned cycling programme",
      "Bike and equipment checks where applicable",
    ],
  },
  {
    day: "02",
    title: "First Cycling Experience",
    location: "Cycling area to be confirmed",
    distance: "Route-dependent",
    riding: "Introductory cycling day",
    image: images.dayTwo,
    text: "Begin the cycling experience with a route selected for the group's ability and the confirmed itinerary. Enjoy the surrounding landscapes, become familiar with the riding conditions and settle into the rhythm of travelling through Morocco by bike. The route, distance and elevation will be confirmed in advance.",
    details: [
      "Introduction to the cycling routes",
      "Group riding briefing",
      "Discover the selected local landscape",
      "Pace and route adapted to the confirmed group level",
    ],
  },
  {
    day: "03",
    title: "Explore Morocco by Bike",
    location: "Route to be confirmed",
    distance: "Route-dependent",
    riding: "Guided cycling experience, subject to confirmation",
    image: images.dayThree,
    text: "Continue the journey through selected Moroccan landscapes. The day's route will depend on the confirmed destination and the group's cycling experience. Enjoy time outdoors, discover the character of the region and experience the pleasure of exploring at a steady and comfortable pace.",
    details: [
      "Cycling on the selected route",
      "Discover mountain or countryside scenery",
      "Planned stops according to the final programme",
      "Group pace adapted to participants",
    ],
  },
  {
    day: "04",
    title: "Discover the Mountain Landscapes",
    location: "Mountain region to be confirmed",
    distance: "Route-dependent",
    riding: "Mountain and countryside cycling",
    image: images.dayFour,
    text: "Experience another day of cycling in Morocco's varied landscape. Depending on the selected route, the day may include mountain scenery, rural tracks and traditional village surroundings. The technical character, elevation and riding distance will be established in the final itinerary.",
    details: [
      "Explore the selected mountain area",
      "Enjoy changing landscapes and viewpoints",
      "Discover rural surroundings along the route",
      "Rest stops according to the riding schedule",
    ],
  },
  {
    day: "05",
    title: "A Day of Shared Cycling",
    location: "Cycling area to be confirmed",
    distance: "Route-dependent",
    riding: "Group cycling day",
    image: images.dayFive,
    text: "Continue the experience with a day dedicated to cycling and sharing the journey with the group. Routes will be selected according to the agreed programme, local conditions and participants' abilities. There will be opportunities to enjoy the scenery and experience more of Morocco by bike.",
    details: [
      "Group cycling on the confirmed route",
      "Enjoy the landscape and local surroundings",
      "Breaks planned around the final route",
      "Time to share the experience with fellow cyclists",
    ],
  },
  {
    day: "06",
    title: "Discover Local Culture and Scenery",
    location: "Location to be confirmed",
    distance: "Route-dependent",
    riding: "Cycling and local discovery",
    image: images.daySix,
    text: "Enjoy another day combining the pleasure of cycling with the opportunity to discover more of the region. Any village visits, cultural activities or local experiences will depend on the selected route and the arrangements confirmed for the tour.",
    details: [
      "Cycling according to the confirmed programme",
      "Discover local landscapes and settlements",
      "Cultural activities where included",
      "Enjoy time with the group",
    ],
  },
  {
    day: "07",
    title: "Final Full Day of Cycling",
    location: "Final cycling area to be confirmed",
    distance: "Route-dependent",
    riding: "Final planned cycling stage",
    image: images.daySeven,
    text: "Enjoy the final full cycling day of the tour. The selected route will provide another opportunity to experience Morocco's landscapes and reflect on the journey. The distance, route profile and riding conditions will be confirmed in the official itinerary.",
    details: [
      "Final planned cycling route",
      "Enjoy the last full day on the bike",
      "Group photographs and shared moments",
      "Prepare for the departure arrangements",
    ],
  },
  {
    day: "08",
    title: "Departure from Morocco",
    location: "Departure location to be confirmed",
    distance: "No fixed distance",
    riding: "Departure",
    image: images.dayEight,
    text: "After breakfast or the final arrangements specified in the confirmed programme, prepare for departure. Transfer arrangements, departure times and any additional activities will depend on the services agreed for the tour.",
    details: [
      "Final breakfast or activity where included",
      "Check personal belongings and equipment",
      "Departure transfer where confirmed",
      "End of the eight-day cycling experience",
    ],
  },
];

const inclusions = [
  "Tour planning and itinerary coordination, as specified in the final proposal",
  "Cycling guide or ride leader where confirmed",
  "Bicycle rental only if listed in the confirmed package",
  "Accommodation according to the confirmed itinerary",
  "Meals and refreshments explicitly listed in the programme",
  "Transfers and luggage support only where included",
  "Any additional activities specifically stated in the final proposal",
];

const exclusions = [
  "International flights to and from Morocco",
  "Travel insurance and personal accident cover",
  "Personal cycling equipment and protective clothing",
  "Bicycle rental unless specifically included",
  "Meals and drinks not listed in the confirmed itinerary",
  "Additional nights and transfers not included in the package",
  "Personal expenses and tips",
  "Any service not expressly listed in the final booking confirmation",
];

const preparation = [
  {
    title: "Cycling Experience",
    text: "Tell us about your cycling background, fitness and preferred riding style when enquiring. This helps the team discuss the most appropriate route and programme for the group.",
  },
  {
    title: "Bike and Equipment",
    text: "Confirm whether a bicycle is included or whether you should bring your own. A suitable helmet, gloves, comfortable cycling clothing and appropriate footwear are recommended.",
  },
  {
    title: "Fitness and Preparation",
    text: "Prepare for regular cycling and outdoor activity. The required fitness and technical level will depend on the final route, daily distances and terrain.",
  },
  {
    title: "Travel Essentials",
    text: "Bring weather-appropriate clothing, sun protection, hydration, personal medication and any nutrition you normally use while cycling. Check your travel documents and insurance before departure.",
  },
];

const faqs = [
  {
    q: "How long is the Women Cycling Tour?",
    a: "The tour is planned as an eight-day cycling experience in Morocco. The detailed daily schedule and final route will be confirmed in the official itinerary.",
  },
  {
    q: "Where does the Women Cycling Tour take place?",
    a: "The tour takes place in Morocco. The precise cycling regions, meeting point and overnight locations will be confirmed with the final programme.",
  },
  {
    q: "Is this a women-only cycling tour?",
    a: "The event is presented as a women-focused cycling experience. Please contact Mountain Bike Morocco to confirm participant eligibility, group arrangements and the format of the departure.",
  },
  {
    q: "What cycling experience do I need?",
    a: "The appropriate level depends on the selected routes and terrain. Please share your cycling experience and fitness level when enquiring so the team can provide accurate information about the programme.",
  },
  {
    q: "How many kilometres will we cycle each day?",
    a: "Daily distances, elevation gain and riding times have not been specified here. These details will be confirmed once the route and group arrangements are finalised.",
  },
  {
    q: "What type of bicycle is required?",
    a: "The suitable bicycle depends on the final route and terrain. Ask the team whether a bicycle is included, whether rental is available and what type of bike is recommended.",
  },
  {
    q: "Are accommodation and meals included?",
    a: "Accommodation and meals depend on the confirmed package. The final proposal will specify which nights, meals and other services are included.",
  },
  {
    q: "When can I join the tour?",
    a: "Contact Mountain Bike Morocco for available dates, group departures and registration information. Dates should be confirmed before booking flights.",
  },
  {
    q: "Can I enquire if I am travelling alone?",
    a: "Yes. You can contact the team with your preferred dates and travel details. They can explain the available group arrangements and whether a suitable departure is planned.",
  },
];

const relatedEvents = [
  {
    category: "MOUNTAIN BIKE EVENT",
    title: "Atlas Mountains MTB Gathering",
    text: "Meet fellow mountain bikers and discover the landscapes and trails of Morocco's High Atlas.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/events/atlas-mountains-mtb-gathering",
  },
  {
    category: "DESERT CYCLING EVENT",
    title: "Agafay Desert Cycling Challenge",
    text: "Experience a cycling challenge in the rocky desert landscape near Marrakech.",
    image: "/images/Desert-Agafay-Morocco.jpg",
    href: "/events/agafay-desert-cycling-challenge",
  },
  {
    category: "E-MTB ADVENTURE",
    title: "Marrakech to Sahara E-MTB Caravan",
    text: "Discover a multi-stage electric mountain-bike adventure through mountain and desert scenery.",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/events/marrakech-to-sahara-e-mtb-caravan",
  },
];

export default function WomenCyclingTourPage() {
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
            alt="Women enjoying a cycling adventure in Morocco"
            fetchPriority="high"
          />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · WOMEN CYCLING TOUR · 8 DAYS</span>
          <h1>Women Cycling Tour Morocco</h1>
          <p className="at-hero-description">
            Discover Morocco on two wheels during an eight-day women-focused
            cycling experience. Explore beautiful landscapes, experience local
            culture and share the journey with fellow women cyclists.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="#enquiry">
              Enquire About the Tour <span>→</span>
            </a>
            <a className="at-hero-back" href="/events">
              Explore All Events
            </a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>08 DAYS</strong><span>Cycling experience</span></div>
            <div><strong>MOROCCO</strong><span>North Africa</span></div>
            <div><strong>WOMEN</strong><span>Focused experience</span></div>
            <div><strong>DATES TBC</strong><span>Ask for details</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>8 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Morocco</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Women Cycling Tour</strong></div>
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
              alt="Cyclists enjoying an outdoor cycling route"
              loading="lazy"
            />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A JOURNEY TO SHARE</span>
            <h2 className="at-heading">
              Discover Morocco Together on Two Wheels
            </h2>
            <p className="at-copy">
              The Women Cycling Tour is an eight-day cycling experience created
              around the pleasure of exploring Morocco by bike. It offers an
              opportunity to discover the country's landscapes, experience
              local culture and share the journey with other women who enjoy
              travelling and cycling.
            </p>
            <p className="at-copy">
              Morocco offers a varied setting for a cycling holiday, with
              mountain scenery, traditional settlements, open countryside and
              distinctive local landscapes. The exact regions and daily routes
              for this tour will be confirmed in the final programme.
            </p>
            <p className="at-copy">
              Whether you are travelling alone or with friends, contact the
              team to discuss the planned departure, participant arrangements,
              cycling level and practical details before making your travel
              arrangements.
            </p>
            <a className="at-text-link" href="#programme">
              Explore the tour programme →
            </a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">TOUR INFORMATION</span>
            <h2 className="at-heading">
              Eight Days of Cycling and Discovery
            </h2>
            <p className="at-copy">
              The tour is planned as an eight-day experience. The precise route,
              daily distances, elevation, accommodation and included services
              must be confirmed in the final itinerary.
            </p>
            <p className="at-copy">
              Sharing your cycling experience, fitness level and preferred
              riding style helps the team discuss the most suitable programme.
              The group format, participant eligibility and ride arrangements
              should also be confirmed before registration.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TOUR AT A GLANCE</span>
            <h3>Women Cycling Tour Morocco</h3>
            <p>
              An eight-day women-focused cycling experience in Morocco.
            </p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>8 days</strong></li>
              <li><span>Destination</span><strong>Morocco</strong></li>
              <li><span>Activity</span><strong>Cycling</strong></li>
              <li><span>Tour style</span><strong>Women-focused</strong></li>
              <li><span>Dates and price</span><strong>Ask for details</strong></li>
            </ul>
            <a className="at-button" href="#enquiry">
              Request Tour Details <span>→</span>
            </a>
          </aside>
        </div>
      </section>

      <section className="at-section at-highlight-section" id="highlights">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">THE EXPERIENCE</span>
              <h2 className="at-heading">
                Highlights of the Women Cycling Tour
              </h2>
            </div>
            <p>
              Discover Morocco through cycling, landscapes and shared
              experiences. The final routes and activities will be confirmed
              in the official tour programme.
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
              alt="Cycling through a scenic mountain landscape"
              loading="lazy"
            />
          </div>
          <div>
            <span className="at-eyebrow">THE RIDING EXPERIENCE</span>
            <h2 className="at-heading">
              Explore Morocco's Landscapes by Bike
            </h2>
            <p className="at-copy">
              Morocco offers a remarkable variety of landscapes for cycling.
              Depending on the final route, the tour may explore mountain
              surroundings, rural roads, traditional villages and scenic
              countryside. Each riding day will be shaped by the confirmed
              itinerary and the ability of the group.
            </p>
            <p className="at-copy">
              The exact cycling region, road surfaces, daily distances,
              elevation gain and technical demands have not been specified
              here. These details should be confirmed before participants
              book travel or prepare their equipment.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Discover Morocco's changing landscapes</li>
              <li><span>02</span>Experience local villages and countryside</li>
              <li><span>03</span>Daily routes to be confirmed</li>
              <li><span>04</span>Group pace discussed before departure</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR TOUR</span>
            <h2 className="at-heading">Tour Information</h2>
            <p className="at-copy">
              The details below provide an overview of the eight-day tour.
              The final route, departure dates, riding information and
              arrangements will be shared by the team before registration.
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
            alt="A scenic cycling landscape in Morocco"
            loading="lazy"
          />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">
            Discover the Culture and Hospitality of Morocco
          </h2>
          <p className="at-copy">
            A cycling journey through Morocco is also an opportunity to
            discover the country's culture, landscapes and local hospitality.
            From traditional villages to mountain scenery and regional food,
            the experience can extend well beyond the time spent on the bike.
            Any visits and cultural activities will depend on the final route.
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
              <span className="at-eyebrow">MOROCCAN MOMENTS</span>
              <h2 className="at-heading">
                A Glimpse of the Cycling Experience
              </h2>
            </div>
            <p>
              Discover the atmosphere of travelling by bike through Morocco.
              The photographs introduce the cycling experience; exact event
              locations and routes are confirmed separately.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item">
              <img src={images.galleryOne} alt="Cycling in an open landscape" loading="lazy" />
            </div>
            <div className="at-gallery-item">
              <img src={images.galleryTwo} alt="Outdoor cycling scenery" loading="lazy" />
            </div>
            <div className="at-gallery-item">
              <img src={images.galleryThree} alt="Cycling adventure on a natural route" loading="lazy" />
            </div>
            <div className="at-gallery-item">
              <img src={images.galleryFour} alt="Bicycle and outdoor adventure" loading="lazy" />
            </div>
            <div className="at-gallery-item">
              <img src={images.galleryFive} alt="Cyclists enjoying the outdoors" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="programme">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EIGHT DAYS IN MOROCCO</span>
              <h2 className="at-heading">Suggested Tour Programme</h2>
            </div>
            <p>
              This is an indicative eight-day structure, not a confirmed daily
              schedule. The final route, locations, distances, accommodation
              and included services must be confirmed before registration.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The programme below provides a general outline of how the eight-day
            experience may be organised. It does not promise fixed distances,
            elevation gain, technical grades, accommodation, meals, transfers
            or guiding services. The official itinerary takes precedence.
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
              <span className="at-eyebrow">TOUR ARRANGEMENTS</span>
              <h2 className="at-heading">What Is Included?</h2>
            </div>
            <p>
              Services are confirmed individually for each departure. Please
              check the final proposal carefully so you know exactly what is
              included before confirming your place.
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
                Preparing for the Women Cycling Tour
              </h2>
            </div>
            <p>
              Prepare your fitness, equipment and travel essentials for an
              enjoyable cycling holiday. Check the final tour information
              for route-specific requirements before departure.
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
              alt="Cycling through mountain terrain"
              loading="lazy"
            />
          </div>
          <div>
            <span className="at-eyebrow">KNOW YOUR RIDE</span>
            <h2 className="at-heading">
              Cycling Level, Fitness and Safety
            </h2>
            <p className="at-copy">
              The physical demands of the tour depend on the selected route,
              daily distances and terrain. Some cycling routes may include
              longer climbs, uneven surfaces or extended riding days. Share
              your experience and fitness level when enquiring so the team
              can explain the expected riding requirements.
            </p>
            <p className="at-copy">
              Before departure, participants should receive clear information
              about the route profile, daily distances, expected riding times,
              equipment requirements and support arrangements. The final
              group format and participant eligibility should also be
              confirmed with the organisers.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Exact distances, elevation gain,
              technical grades, daily riding times, support arrangements and
              safety procedures must be confirmed in the official tour
              information. This page does not state a fixed route or guarantee
              any service that has not been included in the final proposal.
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
              Find answers to common questions about the Women Cycling Tour
              Morocco. Contact the team for confirmed dates, availability,
              route information and the latest tour arrangements.
            </p>
            <a className="at-text-link" href="#enquiry">
              Ask About the Tour →
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
                Enquire About the Women Cycling Tour
              </h2>
            </div>
            <p>
              Tell us about your preferred dates, cycling experience and
              group size. Our team will contact you with the latest tour
              information and confirmed arrangements.
            </p>
          </div>

          <div className="at-event-enquiry-card">
            <ContactEnquiryForm />
          </div>
        </div>
      </section>

      <section className="at-final-cta">
        <div className="at-final-image">
          <img
            src={images.final}
            alt="Women cycling in Morocco"
            loading="lazy"
          />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">WOMEN CYCLING TOUR MOROCCO</span>
          <h2>Ready to Discover Morocco on Two Wheels?</h2>
          <p>
            Contact Mountain Bike Morocco for the latest departure dates,
            participation details and confirmed arrangements. Tell us about
            your cycling experience and let us help you plan your journey.
          </p>
          <a className="at-button" href="#enquiry">
            Enquire About the Tour <span>→</span>
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
              Discover more cycling experiences in Morocco, from mountain-bike
              gatherings to desert challenges and multi-stage E-MTB adventures.
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
              <a href="#enquiry">Plan Your Tour</a>
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