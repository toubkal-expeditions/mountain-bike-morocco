import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Morocco Desert Cycling Expedition | Gravel & MTB Adventure",
  description:
    "Discover southern Morocco on a multi-terrain cycling expedition combining gravel riding and mountain biking across remote desert landscapes, mountain trails, traditional villages and dramatic terrain.",
  alternates: {
    canonical: "/events/morocco-desert-cycling-expedition",
  },
  openGraph: {
    title: "Morocco Desert Cycling Expedition | Gravel & MTB",
    description:
      "A unique cycling adventure combining gravel roads and mountain bike trails through the landscapes of southern Morocco.",
    url: "/events/morocco-desert-cycling-expedition",
    type: "website",
  },
};

const images = {
  hero: "/images/gravel-desert-cycling-expedition.jpg",
  overview: "/images/south-morocco-cycling-expedition.jpg",
  gravel: "/images/gravel-desert-cycling-morocco.JPG",
  mtb: "/images/saghro-morocco-bike-tour.jpg",
  culture: "/images/Desert-Agafay-Morocco.jpg",
  galleryOne: "/images/south-morocco-cycling-expedition.jpg",
  galleryTwo: "/images/gravel-desert-cycling-expedition.jpg",
  galleryThree: "/images/saghro-morocco-bike-tour.jpg",
  galleryFour: "/images/gravel-desert-cycling-morocco.JPG",
  final: "/images/sahara-desert-ebike-expeditions.jpg",
};

const facts = [
  { label: "Experience", value: "Gravel & MTB" },
  { label: "Environment", value: "Desert & Mountains" },
  { label: "Format", value: "Guided Expedition" },
  { label: "Riding", value: "Mixed Terrain" },
  { label: "Group", value: "Small Groups" },
  { label: "Departure", value: "By Arrangement" },
];

const highlights = [
  {
    number: "01",
    title: "Two ways to explore",
    text: "Combine the flowing rhythm of gravel riding with the freedom and technical character of mountain biking. Each riding day can be adapted to the terrain and the group's experience.",
  },
  {
    number: "02",
    title: "Remote southern landscapes",
    text: "Ride through open valleys, dry riverbeds, rocky plateaus, mountain foothills and the changing landscapes of southern Morocco.",
  },
  {
    number: "03",
    title: "A real sense of adventure",
    text: "Move beyond conventional cycling routes and discover quieter tracks, remote settlements and landscapes that reward curiosity and exploration.",
  },
  {
    number: "04",
    title: "Local knowledge",
    text: "Discover the region with local guidance, practical route support and opportunities to connect with the culture and everyday life of southern Morocco.",
  },
  {
    number: "05",
    title: "Flexible riding experience",
    text: "The balance between gravel and MTB can be adjusted according to terrain, riding ability, weather and the group's preferred style.",
  },
  {
    number: "06",
    title: "More than a bike ride",
    text: "Experience the contrasts of Morocco through its landscapes, villages, hospitality, food and remarkable sense of space.",
  },
];

const beyondTrail = [
  {
    title: "Discover traditional villages",
    text: "Pass through rural communities where traditional architecture, agricultural life and local customs remain closely connected to the surrounding landscape.",
  },
  {
    title: "Experience Moroccan hospitality",
    text: "Enjoy opportunities to meet local people and experience the warmth of Moroccan hospitality along the journey.",
  },
  {
    title: "Explore changing landscapes",
    text: "From mountain foothills and rocky valleys to open desert scenery, every part of the expedition brings a different atmosphere.",
  },
  {
    title: "Enjoy the local cuisine",
    text: "Discover Moroccan food and regional flavours, with traditional dishes and refreshments adding another dimension to the experience.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival and expedition briefing",
    subtitle: "Meet the team and prepare for the journey",
    text: "Meet your local cycling team and review the expedition plan. The day is dedicated to getting comfortable with the bikes, checking equipment and discussing the riding conditions, terrain and practical arrangements. The final route and riding programme are confirmed according to the group, conditions and available time.",
    riding: "Bike preparation and briefing",
    terrain: "Preparation and local surroundings",
  },
  {
    day: "02",
    title: "Gravel riding through open landscapes",
    subtitle: "Longer tracks and the freedom of the open road",
    text: "Begin the riding adventure on a selection of gravel tracks and quiet connecting roads. The emphasis is on discovering the landscape, enjoying a steady rhythm and experiencing the scale of southern Morocco. The route can include remote tracks, open valleys and rural scenery, depending on the confirmed itinerary.",
    riding: "Gravel-focused riding",
    terrain: "Gravel roads, tracks and open terrain",
  },
  {
    day: "03",
    title: "Mountain bike trails and desert terrain",
    subtitle: "A more technical side of the expedition",
    text: "Move from open gravel riding towards terrain better suited to mountain bikes. Explore rocky tracks, natural trails and changing surfaces where bike handling and line choice become part of the adventure. The riding level and route selection are adapted to the group's experience and conditions.",
    riding: "MTB-focused riding",
    terrain: "Natural trails, rocky sections and mixed terrain",
  },
];

const inclusions = [
  "Local cycling guide and expedition support",
  "Route planning according to the confirmed programme",
  "Pre-trip riding and equipment briefing",
  "Assistance during the planned riding activities",
  "Local coordination throughout the expedition",
];

const exclusions = [
  "International flights",
  "Travel insurance and personal medical cover",
  "Personal cycling equipment and clothing",
  "Bike rental unless specifically agreed",
  "Accommodation and meals unless confirmed in the final programme",
  "Personal expenses and gratuities",
  "Services not specifically listed as included",
];

const preparation = [
  {
    title: "Choose the right bike",
    text: "A gravel bike is suitable for longer stretches of rideable gravel and connecting tracks. A mountain bike is more appropriate for rougher terrain, rocky trails and technical sections. The recommended setup depends on the final route.",
  },
  {
    title: "Bring suitable clothing",
    text: "Use comfortable cycling clothing and prepare for changing temperatures. Lightweight layers, sun protection and a warm layer for cooler mornings and evenings are useful.",
  },
  {
    title: "Prepare for varied terrain",
    text: "The expedition combines different riding surfaces. Confidence on gravel roads, loose ground and uneven trails will help you enjoy the experience.",
  },
  {
    title: "Stay hydrated",
    text: "Desert and mountain environments can be demanding. Carry suitable hydration equipment and follow the guide's advice on water, food and rest stops.",
  },
];

const faqs = [
  {
    question: "Is this expedition suitable for both gravel and MTB riders?",
    answer:
      "Yes. The expedition is designed around a combination of gravel riding and mountain biking. The exact balance depends on the confirmed route, group experience and terrain. Riders should be comfortable cycling for extended periods and handling changing surfaces.",
  },
  {
    question: "Do I need to bring my own bike?",
    answer:
      "You can discuss bringing your own bike or arranging a rental before the expedition. The most suitable option depends on the final route and the type of riding you want to prioritise. Bike rental should be confirmed in advance.",
  },
  {
    question: "Can I participate with a gravel bike only?",
    answer:
      "A gravel bike can be suitable for the gravel-focused sections. However, some routes or trail sections may be better suited to a mountain bike. The final itinerary and bike recommendation should be agreed before booking.",
  },
  {
    question: "Can I participate with a mountain bike only?",
    answer:
      "Yes. A mountain bike offers versatility across gravel roads, rocky tracks and natural trails. It may be a suitable choice for riders who prefer additional comfort and control on rougher terrain.",
  },
  {
    question: "What level of fitness is required?",
    answer:
      "A good general level of fitness and regular cycling experience are recommended. The expedition may include extended riding periods and changing surfaces. The final daily distances, elevation and technical difficulty must be confirmed with the organiser.",
  },
  {
    question: "Is the itinerary fixed?",
    answer:
      "The programme presented here is a suggested framework. The final route, riding distances, accommodation arrangements and daily schedule are confirmed according to the departure, weather, local conditions and group requirements.",
  },
  {
    question: "Can the expedition be organised for a private group?",
    answer:
      "Private departures can be discussed. The riding programme can be adapted to the group's preferred dates, experience, bike choice and travel arrangements.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your cycling clothing, helmet, gloves, suitable shoes, sunglasses, sun protection, hydration equipment and personal essentials. A detailed equipment recommendation can be provided once the route and season are confirmed.",
  },
];

const relatedEvents = [
  {
    title: "Atlas Mountains MTB Gathering",
    description:
      "Discover mountain biking through the landscapes and trails of the High Atlas.",
    href: "/events/atlas-mountains-mtb-gathering",
    image: "/images/saghro-morocco-bike-tour.jpg",
    category: "Mountain Biking",
  },
  {
    title: "Agafay Desert Cycling Challenge",
    description:
      "Experience the unique terrain and open landscapes of the Agafay region.",
    href: "/events/agafay-desert-cycling-challenge",
    image: "/images/Desert-Agafay-Morocco.jpg",
    category: "Desert Cycling",
  },
  {
    title: "Marrakech to Sahara E-MTB Caravan",
    description:
      "Explore Morocco on an assisted mountain bike adventure beyond Marrakech.",
    href: "/events/marrakech-to-sahara-e-mtb-caravan",
    image: "/images/sahara-desert-ebike-expeditions.jpg",
    category: "E-MTB Expedition",
  },
];

export default function MoroccoDesertCyclingExpeditionPage() {
  return (
    <main className="gravel-event">
      <style>{`
        .gravel-event {
          --ge-cream: #f4f1e9;
          --ge-paper: #faf9f5;
          --ge-ink: #20211d;
          --ge-muted: #77786f;
          --ge-gold: #b58b4b;
          --ge-green: #56634b;
          --ge-line: rgba(32, 33, 29, .15);
          background: var(--ge-paper);
          color: var(--ge-ink);
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .gravel-event *,
        .gravel-event *::before,
        .gravel-event *::after {
          box-sizing: border-box;
        }

        .gravel-event img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gravel-event a {
          color: inherit;
          text-decoration: none;
        }

        .ge-container {
          width: min(1240px, calc(100% - 80px));
          margin-inline: auto;
        }

        .ge-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 13px;
          color: var(--ge-gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .22em;
          line-height: 1.5;
          text-transform: uppercase;
        }

        .ge-eyebrow::before {
          content: "";
          width: 32px;
          height: 1px;
          background: currentColor;
        }

        .ge-section-heading {
          max-width: 780px;
          margin: 0 0 25px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(38px, 5vw, 66px);
          font-weight: 400;
          letter-spacing: -.045em;
          line-height: 1.04;
        }

        .ge-section-heading em {
          color: var(--ge-green);
          font-weight: 400;
        }

        .ge-lead {
          max-width: 720px;
          color: #66675f;
          font-size: 15px;
          line-height: 1.95;
        }

        .ge-hero {
          position: relative;
          display: flex;
          min-height: 790px;
          align-items: flex-end;
          background: #272a23;
          color: #fff;
        }

        .ge-hero__image {
          position: absolute;
          inset: 0;
        }

        .ge-hero__image::after {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(13, 16, 13, .74) 0%, rgba(13, 16, 13, .32) 55%, rgba(13, 16, 13, .08) 100%),
            linear-gradient(0deg, rgba(13, 16, 13, .72) 0%, transparent 65%);
          content: "";
        }

        .ge-hero__content {
          position: relative;
          z-index: 1;
          width: min(1240px, calc(100% - 80px));
          margin: 0 auto;
          padding: 160px 0 75px;
        }

        .ge-hero .ge-eyebrow {
          color: #d8b77f;
        }

        .ge-hero h1 {
          max-width: 900px;
          margin: 25px 0 22px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(54px, 8vw, 106px);
          font-weight: 400;
          letter-spacing: -.055em;
          line-height: .98;
        }

        .ge-hero h1 em {
          color: #d7b77f;
          font-weight: 400;
        }

        .ge-hero__intro {
          max-width: 640px;
          color: rgba(255,255,255,.83);
          font-size: 16px;
          line-height: 1.85;
        }

        .ge-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 35px;
        }

        .ge-button {
          display: inline-flex;
          min-height: 52px;
          align-items: center;
          justify-content: center;
          padding: 0 25px;
          border: 1px solid var(--ge-gold);
          background: var(--ge-gold);
          color: #fff !important;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .16em;
          text-transform: uppercase;
          transition: background .25s ease, color .25s ease;
        }

        .ge-button:hover {
          background: transparent;
          color: #fff !important;
        }

        .ge-button--outline {
          border-color: rgba(255,255,255,.6);
          background: transparent;
        }

        .ge-button--outline:hover {
          border-color: var(--ge-gold);
          background: var(--ge-gold);
        }

        .ge-hero__bottom {
          display: flex;
          flex-wrap: wrap;
          gap: 16px 38px;
          margin-top: 70px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,.28);
        }

        .ge-hero__bottom span {
          color: rgba(255,255,255,.76);
          font-size: 10px;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .ge-facts {
          background: var(--ge-cream);
        }

        .ge-facts__grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          padding: 28px 0;
        }

        .ge-fact {
          padding: 8px 20px;
          border-right: 1px solid var(--ge-line);
        }

        .ge-fact:first-child {
          padding-left: 0;
        }

        .ge-fact:last-child {
          border: 0;
        }

        .ge-fact span {
          display: block;
          margin-bottom: 9px;
          color: var(--ge-muted);
          font-size: 9px;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .ge-fact strong {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
          font-weight: 400;
        }

        .ge-subnav {
          position: relative;
          z-index: 2;
          border-bottom: 1px solid var(--ge-line);
          background: var(--ge-paper);
        }

        .ge-subnav__inner {
          display: flex;
          gap: 30px;
          overflow-x: auto;
          padding: 19px 0;
          scrollbar-width: none;
        }

        .ge-subnav__inner::-webkit-scrollbar {
          display: none;
        }

        .ge-subnav a {
          flex: 0 0 auto;
          color: #6f7068;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          transition: color .2s ease;
        }

        .ge-subnav a:hover {
          color: var(--ge-gold);
        }

        .ge-intro {
          padding: 130px 0;
        }

        .ge-intro__grid {
          display: grid;
          grid-template-columns: 1.08fr .92fr;
          align-items: center;
          gap: 95px;
        }

        .ge-intro__image {
          position: relative;
          min-height: 620px;
        }

        .ge-intro__image::after {
          position: absolute;
          right: -18px;
          bottom: -18px;
          z-index: -1;
          width: 58%;
          height: 55%;
          border: 1px solid var(--ge-gold);
          content: "";
        }

        .ge-intro__copy p {
          color: #686960;
          font-size: 14px;
          line-height: 2;
        }

        .ge-intro__copy p + p {
          margin-top: 18px;
        }

        .ge-enquiry-card {
          margin-top: 35px;
          padding: 27px 30px;
          border: 1px solid var(--ge-line);
          background: var(--ge-cream);
        }

        .ge-enquiry-card strong {
          display: block;
          margin-bottom: 9px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 23px;
          font-weight: 400;
        }

        .ge-enquiry-card p {
          margin: 0 0 18px;
          font-size: 12px;
          line-height: 1.8;
        }

        .ge-text-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--ge-green) !important;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .ge-text-link::after {
          content: "→";
          font-size: 17px;
        }

        .ge-highlights {
          padding: 115px 0 125px;
          background: var(--ge-cream);
        }

        .ge-highlights__top {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 60px;
        }

        .ge-highlights__top .ge-lead {
          max-width: 390px;
          margin-bottom: 7px;
        }

        .ge-highlight-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--ge-line);
          border-left: 1px solid var(--ge-line);
        }

        .ge-highlight {
          min-height: 235px;
          padding: 35px 32px;
          border-right: 1px solid var(--ge-line);
          border-bottom: 1px solid var(--ge-line);
        }

        .ge-highlight__number {
          display: block;
          margin-bottom: 30px;
          color: var(--ge-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 20px;
        }

        .ge-highlight h3 {
          margin: 0 0 13px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          font-weight: 400;
        }

        .ge-highlight p {
          margin: 0;
          color: #707168;
          font-size: 12px;
          line-height: 1.9;
        }

        .ge-terrain {
          padding: 130px 0;
        }

        .ge-terrain__heading {
          max-width: 760px;
          margin-bottom: 55px;
        }

        .ge-terrain-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .ge-terrain-card {
          position: relative;
          min-height: 570px;
          overflow: hidden;
          background: #30352d;
          color: #fff;
        }

        .ge-terrain-card__image {
          position: absolute;
          inset: 0;
          transition: transform .7s ease;
        }

        .ge-terrain-card:hover .ge-terrain-card__image {
          transform: scale(1.04);
        }

        .ge-terrain-card::after {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(13,16,13,.85), rgba(13,16,13,.05) 75%);
          content: "";
        }

        .ge-terrain-card__content {
          position: absolute;
          right: 35px;
          bottom: 38px;
          left: 35px;
          z-index: 1;
        }

        .ge-terrain-card__content span {
          color: #d8b77f;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .2em;
          text-transform: uppercase;
        }

        .ge-terrain-card h3 {
          margin: 13px 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 4vw, 48px);
          font-weight: 400;
        }

        .ge-terrain-card p {
          max-width: 470px;
          margin: 0;
          color: rgba(255,255,255,.8);
          font-size: 13px;
          line-height: 1.85;
        }

        .ge-event-info {
          padding: 105px 0;
          background: #242720;
          color: #fff;
        }

        .ge-event-info .ge-section-heading em {
          color: #d5b77f;
        }

        .ge-event-info .ge-lead {
          color: rgba(255,255,255,.67);
        }

        .ge-info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          margin-top: 55px;
          background: rgba(255,255,255,.18);
          border: 1px solid rgba(255,255,255,.18);
        }

        .ge-info-item {
          min-height: 155px;
          padding: 27px;
          background: #242720;
        }

        .ge-info-item span {
          display: block;
          margin-bottom: 15px;
          color: #d5b77f;
          font-size: 9px;
          letter-spacing: .17em;
          text-transform: uppercase;
        }

        .ge-info-item strong {
          display: block;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
          font-weight: 400;
        }

        .ge-info-item p {
          margin: 10px 0 0;
          color: rgba(255,255,255,.62);
          font-size: 11px;
          line-height: 1.8;
        }

        .ge-culture {
          padding: 130px 0;
        }

        .ge-culture__grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          align-items: center;
          gap: 90px;
        }

        .ge-culture__image {
          min-height: 590px;
        }

        .ge-culture__list {
          margin-top: 35px;
          border-top: 1px solid var(--ge-line);
        }

        .ge-culture__item {
          padding: 21px 0;
          border-bottom: 1px solid var(--ge-line);
        }

        .ge-culture__item h3 {
          margin: 0 0 8px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 22px;
          font-weight: 400;
        }

        .ge-culture__item p {
          margin: 0;
          color: #74756c;
          font-size: 12px;
          line-height: 1.85;
        }

        .ge-gallery {
          padding: 0 0 125px;
        }

        .ge-gallery__heading {
          margin-bottom: 35px;
        }

        .ge-gallery-grid {
          display: grid;
          grid-template-columns: 1.2fr .8fr 1fr;
          grid-template-rows: 260px 260px;
          gap: 15px;
        }

        .ge-gallery-grid__item {
          overflow: hidden;
          background: var(--ge-cream);
        }

        .ge-gallery-grid__item:first-child {
          grid-row: span 2;
        }

        .ge-gallery-grid__item img {
          transition: transform .6s ease;
        }

        .ge-gallery-grid__item:hover img {
          transform: scale(1.04);
        }

        .ge-itinerary {
          padding: 120px 0;
          background: var(--ge-cream);
        }

        .ge-itinerary__heading {
          max-width: 760px;
          margin-bottom: 60px;
        }

        .ge-itinerary-list {
          border-top: 1px solid var(--ge-line);
        }

        .ge-itinerary-day {
          display: grid;
          grid-template-columns: 100px 1fr 230px;
          gap: 35px;
          padding: 38px 0;
          border-bottom: 1px solid var(--ge-line);
        }

        .ge-itinerary-day__number {
          color: var(--ge-gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 38px;
        }

        .ge-itinerary-day h3 {
          margin: 0 0 8px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 29px;
          font-weight: 400;
        }

        .ge-itinerary-day__subtitle {
          display: block;
          margin-bottom: 16px;
          color: var(--ge-green);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .ge-itinerary-day__copy p {
          max-width: 690px;
          margin: 0;
          color: #707168;
          font-size: 12px;
          line-height: 1.95;
        }

        .ge-itinerary-day__details {
          padding-left: 23px;
          border-left: 1px solid var(--ge-line);
        }

        .ge-itinerary-day__details span {
          display: block;
          margin-bottom: 7px;
          color: var(--ge-gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .13em;
          text-transform: uppercase;
        }

        .ge-itinerary-day__details p {
          margin: 0 0 20px;
          color: #686960;
          font-size: 11px;
          line-height: 1.7;
        }

        .ge-itinerary-note {
          margin-top: 35px;
          padding: 23px 27px;
          border-left: 3px solid var(--ge-gold);
          background: rgba(255,255,255,.58);
          color: #6e6f66;
          font-size: 12px;
          line-height: 1.85;
        }

        .ge-arrangements {
          padding: 125px 0;
        }

        .ge-arrangements__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 75px;
          margin-top: 55px;
        }

        .ge-arrangements__column h3 {
          margin: 0 0 25px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 31px;
          font-weight: 400;
        }

        .ge-check-list {
          margin: 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid var(--ge-line);
        }

        .ge-check-list li {
          position: relative;
          padding: 15px 0 15px 25px;
          border-bottom: 1px solid var(--ge-line);
          color: #6b6c63;
          font-size: 12px;
          line-height: 1.7;
        }

        .ge-check-list li::before {
          position: absolute;
          top: 15px;
          left: 0;
          color: var(--ge-gold);
          content: "—";
        }

        .ge-preparation {
          padding: 115px 0;
          background: var(--ge-cream);
        }

        .ge-preparation__grid {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 90px;
        }

        .ge-preparation__intro {
          position: sticky;
          top: 40px;
          align-self: start;
        }

        .ge-preparation__list {
          border-top: 1px solid var(--ge-line);
        }

        .ge-preparation__item {
          padding: 25px 0;
          border-bottom: 1px solid var(--ge-line);
        }

        .ge-preparation__item h3 {
          margin: 0 0 10px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          font-weight: 400;
        }

        .ge-preparation__item p {
          margin: 0;
          color: #6d6e65;
          font-size: 12px;
          line-height: 1.9;
        }

        .ge-difficulty {
          padding: 125px 0;
        }

        .ge-difficulty__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 85px;
          align-items: center;
        }

        .ge-difficulty__image {
          min-height: 520px;
        }

        .ge-difficulty__copy p {
          color: #6d6e65;
          font-size: 13px;
          line-height: 1.95;
        }

        .ge-difficulty__points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 30px;
        }

        .ge-difficulty__point {
          padding: 20px;
          border: 1px solid var(--ge-line);
        }

        .ge-difficulty__point strong {
          display: block;
          margin-bottom: 8px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 19px;
          font-weight: 400;
        }

        .ge-difficulty__point span {
          color: #77786f;
          font-size: 10px;
          line-height: 1.7;
        }

        .ge-faq {
          padding: 115px 0;
          background: var(--ge-cream);
        }

        .ge-faq__grid {
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          gap: 90px;
        }

        .ge-faq__list {
          border-top: 1px solid var(--ge-line);
        }

        .ge-faq details {
          padding: 22px 0;
          border-bottom: 1px solid var(--ge-line);
        }

        .ge-faq summary {
          position: relative;
          padding-right: 35px;
          cursor: pointer;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
          line-height: 1.4;
          list-style: none;
        }

        .ge-faq summary::-webkit-details-marker {
          display: none;
        }

        .ge-faq summary::after {
          position: absolute;
          top: 0;
          right: 0;
          color: var(--ge-gold);
          content: "+";
          font-family: Arial, Helvetica, sans-serif;
          font-size: 22px;
        }

        .ge-faq details[open] summary::after {
          content: "−";
        }

        .ge-faq details p {
          max-width: 700px;
          margin: 15px 0 0;
          color: #6c6d64;
          font-size: 12px;
          line-height: 1.95;
        }

        .ge-contact {
          padding: 120px 0;
        }

        .ge-contact__heading {
          max-width: 760px;
          margin-bottom: 50px;
        }

        .ge-contact__panel {
          padding: 45px;
          border: 1px solid var(--ge-line);
          background: var(--ge-cream);
        }

        .ge-final {
          position: relative;
          display: flex;
          min-height: 580px;
          align-items: center;
          background: #242720;
          color: #fff;
        }

        .ge-final__image {
          position: absolute;
          inset: 0;
        }

        .ge-final__image::after {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(15,18,14,.78), rgba(15,18,14,.23));
          content: "";
        }

        .ge-final__content {
          position: relative;
          z-index: 1;
          width: min(1240px, calc(100% - 80px));
          margin: auto;
          padding: 100px 0;
        }

        .ge-final__content .ge-eyebrow {
          color: #d8b77f;
        }

        .ge-final h2 {
          max-width: 800px;
          margin: 22px 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(43px, 6vw, 78px);
          font-weight: 400;
          letter-spacing: -.045em;
          line-height: 1.02;
        }

        .ge-final h2 em {
          color: #d8b77f;
          font-weight: 400;
        }

        .ge-final p {
          max-width: 600px;
          color: rgba(255,255,255,.78);
          font-size: 14px;
          line-height: 1.9;
        }

        .ge-related {
          padding: 115px 0 125px;
        }

        .ge-related__heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 45px;
        }

        .ge-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .ge-related-card__image {
          height: 270px;
          overflow: hidden;
          background: var(--ge-cream);
        }

        .ge-related-card__image img {
          transition: transform .6s ease;
        }

        .ge-related-card:hover .ge-related-card__image img {
          transform: scale(1.04);
        }

        .ge-related-card__body {
          padding: 22px 0;
          border-bottom: 1px solid var(--ge-line);
        }

        .ge-related-card__body span {
          color: var(--ge-gold);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        .ge-related-card h3 {
          margin: 12px 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 25px;
          font-weight: 400;
          line-height: 1.25;
        }

        .ge-related-card p {
          min-height: 48px;
          margin: 0 0 18px;
          color: #73746b;
          font-size: 11px;
          line-height: 1.8;
        }

        .ge-footer {
          padding: 32px 0;
          background: #20221d;
          color: rgba(255,255,255,.7);
        }

        .ge-footer__inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .ge-footer__brand {
          color: #fff;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 19px;
        }

        .ge-footer__links {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
        }

        .ge-footer__links a,
        .ge-footer__copyright {
          color: rgba(255,255,255,.58);
          font-size: 9px;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        @media (max-width: 900px) {
          .ge-container {
            width: min(100% - 48px, 700px);
          }

          .ge-hero {
            min-height: 700px;
          }

          .ge-hero__content,
          .ge-final__content {
            width: calc(100% - 48px);
          }

          .ge-facts__grid {
            grid-template-columns: repeat(3, 1fr);
            row-gap: 20px;
          }

          .ge-fact:nth-child(3) {
            border-right: 0;
          }

          .ge-intro__grid,
          .ge-culture__grid,
          .ge-preparation__grid,
          .ge-difficulty__grid,
          .ge-faq__grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .ge-intro__image {
            min-height: 480px;
          }

          .ge-highlights__top,
          .ge-related__heading {
            display: block;
          }

          .ge-highlights__top .ge-lead {
            margin-top: 20px;
          }

          .ge-highlight-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ge-terrain-card {
            min-height: 460px;
          }

          .ge-info-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ge-itinerary-day {
            grid-template-columns: 65px 1fr;
            gap: 20px;
          }

          .ge-itinerary-day__details {
            grid-column: 2;
            display: flex;
            gap: 35px;
            padding: 15px 0 0;
            border-top: 1px solid var(--ge-line);
            border-left: 0;
          }

          .ge-itinerary-day__details > div {
            flex: 1;
          }

          .ge-preparation__intro {
            position: static;
          }

          .ge-related-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .ge-container {
            width: calc(100% - 38px);
          }

          .ge-hero {
            min-height: 680px;
          }

          .ge-hero__content,
          .ge-final__content {
            width: calc(100% - 38px);
            padding-top: 120px;
            padding-bottom: 45px;
          }

          .ge-hero h1 {
            font-size: clamp(48px, 14vw, 72px);
          }

          .ge-hero__bottom {
            gap: 14px 20px;
            margin-top: 45px;
          }

          .ge-facts__grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .ge-fact {
            padding: 8px 12px;
          }

          .ge-fact:nth-child(3) {
            border-right: 1px solid var(--ge-line);
          }

          .ge-fact:nth-child(even) {
            border-right: 0;
          }

          .ge-intro,
          .ge-terrain,
          .ge-culture,
          .ge-arrangements,
          .ge-difficulty,
          .ge-contact {
            padding: 85px 0;
          }

          .ge-intro__image,
          .ge-culture__image,
          .ge-difficulty__image {
            min-height: 380px;
          }

          .ge-highlights,
          .ge-itinerary,
          .ge-preparation,
          .ge-faq,
          .ge-related {
            padding: 85px 0;
          }

          .ge-highlight-grid,
          .ge-terrain-grid,
          .ge-info-grid,
          .ge-arrangements__grid,
          .ge-related-grid {
            grid-template-columns: 1fr;
          }

          .ge-highlight {
            min-height: auto;
            padding: 28px 23px;
          }

          .ge-terrain-card {
            min-height: 430px;
          }

          .ge-info-item {
            min-height: 130px;
          }

          .ge-gallery-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 220px 160px 160px;
          }

          .ge-gallery-grid__item:first-child {
            grid-column: span 2;
            grid-row: auto;
          }

          .ge-itinerary-day {
            grid-template-columns: 45px 1fr;
            gap: 14px;
            padding: 28px 0;
          }

          .ge-itinerary-day__number {
            font-size: 28px;
          }

          .ge-itinerary-day h3 {
            font-size: 24px;
          }

          .ge-itinerary-day__details {
            display: block;
          }

          .ge-itinerary-day__details p {
            margin-bottom: 14px;
          }

          .ge-difficulty__points {
            grid-template-columns: 1fr 1fr;
          }

          .ge-contact__panel {
            padding: 25px 18px;
          }

          .ge-related-card__image {
            height: 240px;
          }

          .ge-footer__inner {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="ge-hero">
        <div className="ge-hero__image">
          <img src={images.hero} alt="Cycling through the desert landscapes of southern Morocco" />
        </div>

        <div className="ge-hero__content">
          <span className="ge-eyebrow">Mountain Bike Morocco · Special Cycling Event</span>
          <h1>
            Morocco Desert
            <br />
            <em>Cycling Expedition</em>
          </h1>
          <p className="ge-hero__intro">
            A journey beyond the ordinary, combining the freedom of gravel
            cycling with the adventure of mountain biking across the dramatic
            landscapes of southern Morocco.
          </p>

          <div className="ge-hero__actions">
            <a className="ge-button" href="#enquiry">
              Enquire about the expedition
            </a>
            <a className="ge-button ge-button--outline" href="#itinerary">
              Explore the programme
            </a>
          </div>

          <div className="ge-hero__bottom">
            <span>Gravel & MTB</span>
            <span>Southern Morocco</span>
            <span>Guided adventure</span>
            <span>Private departures by arrangement</span>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="ge-facts">
        <div className="ge-container ge-facts__grid">
          {facts.map((fact) => (
            <div className="ge-fact" key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* SUB NAVIGATION */}
      <nav className="ge-subnav" aria-label="Event sections">
        <div className="ge-container ge-subnav__inner">
          <a href="#overview">Overview</a>
          <a href="#highlights">Highlights</a>
          <a href="#terrain">Terrain</a>
          <a href="#experience">Experience</a>
          <a href="#gallery">Gallery</a>
          <a href="#itinerary">Programme</a>
          <a href="#arrangements">What's included</a>
          <a href="#preparation">Preparation</a>
          <a href="#faq">FAQs</a>
          <a href="#enquiry">Enquiry</a>
        </div>
      </nav>

      {/* OVERVIEW */}
      <section className="ge-intro" id="overview">
        <div className="ge-container ge-intro__grid">
          <div className="ge-intro__image">
            <img
              src={images.overview}
              alt="Remote cycling landscapes in southern Morocco"
              loading="lazy"
            />
          </div>

          <div className="ge-intro__copy">
            <span className="ge-eyebrow">The expedition</span>
            <h2 className="ge-section-heading">
              Two riding styles.
              <br />
              <em>One unforgettable journey.</em>
            </h2>

            <p>
              The Morocco Desert Cycling Expedition brings together two
              complementary ways of exploring the country: gravel cycling and
              mountain biking. Instead of following one type of road or trail,
              the experience is built around the variety of terrain found
              across southern Morocco.
            </p>

            <p>
              Gravel riding opens the door to longer tracks, quiet connecting
              roads and expansive landscapes. Mountain biking adds another
              dimension, allowing riders to explore rougher ground, rocky
              passages and natural trails where a more capable bike makes all
              the difference.
            </p>

            <p>
              The result is a varied cycling adventure that combines distance,
              exploration and the pleasure of discovering places beyond the
              usual tourist routes. The final itinerary is adapted to the
              departure, terrain conditions and experience of the group.
            </p>

            <div className="ge-enquiry-card">
              <strong>Planning your desert cycling adventure?</strong>
              <p>
                Tell us about your preferred dates, bike and riding experience.
                We can discuss the most suitable expedition arrangements.
              </p>
              <a href="#enquiry" className="ge-text-link">
                Start your enquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="ge-highlights" id="highlights">
        <div className="ge-container">
          <div className="ge-highlights__top">
            <div>
              <span className="ge-eyebrow">Why ride this expedition</span>
              <h2 className="ge-section-heading">
                An adventure shaped
                <br />
                by <em>the landscape.</em>
              </h2>
            </div>
            <p className="ge-lead">
              Discover a different side of Morocco through a cycling experience
              that brings together varied terrain, local culture and the freedom
              of travelling under your own power.
            </p>
          </div>

          <div className="ge-highlight-grid">
            {highlights.map((item) => (
              <article className="ge-highlight" key={item.number}>
                <span className="ge-highlight__number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TERRAIN */}
      <section className="ge-terrain" id="terrain">
        <div className="ge-container">
          <div className="ge-terrain__heading">
            <span className="ge-eyebrow">Two sides of the ride</span>
            <h2 className="ge-section-heading">
              From open gravel roads
              <br />
              to <em>natural MTB trails.</em>
            </h2>
            <p className="ge-lead">
              The expedition is designed to make the most of different riding
              environments. The route can move between longer gravel sections
              and more technical mountain bike terrain, depending on the
              confirmed programme.
            </p>
          </div>

          <div className="ge-terrain-grid">
            <article className="ge-terrain-card">
              <div className="ge-terrain-card__image">
                <img src={images.gravel} alt="Gravel cycling in the Moroccan desert" loading="lazy" />
              </div>
              <div className="ge-terrain-card__content">
                <span>01 · Gravel cycling</span>
                <h3>Ride into the open</h3>
                <p>
                  Discover long stretches of gravel, quiet tracks and open
                  landscapes. Enjoy the rhythm of travelling across the country
                  and the freedom of the road less travelled.
                </p>
              </div>
            </article>

            <article className="ge-terrain-card">
              <div className="ge-terrain-card__image">
                <img src={images.mtb} alt="Mountain biking across rocky Moroccan terrain" loading="lazy" />
              </div>
              <div className="ge-terrain-card__content">
                <span>02 · Mountain biking</span>
                <h3>Explore the rougher trails</h3>
                <p>
                  Take on natural tracks, rocky ground and more demanding
                  surfaces. Mountain biking brings confidence, control and a
                  different perspective to the expedition.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* EVENT INFORMATION */}
      <section className="ge-event-info" id="event-information">
        <div className="ge-container">
          <span className="ge-eyebrow">Event information</span>
          <h2 className="ge-section-heading">
            A flexible format
            <br />
            for <em>real exploration.</em>
          </h2>
          <p className="ge-lead">
            The expedition is planned around the character of the region and
            the needs of the riders. Specific logistics are confirmed before
            departure.
          </p>

          <div className="ge-info-grid">
            <div className="ge-info-item">
              <span>Riding format</span>
              <strong>Gravel & MTB</strong>
              <p>A combination of gravel routes and mountain bike terrain.</p>
            </div>
            <div className="ge-info-item">
              <span>Destination</span>
              <strong>Southern Morocco</strong>
              <p>Desert environments, mountain foothills and rural landscapes.</p>
            </div>
            <div className="ge-info-item">
              <span>Experience</span>
              <strong>Active adventure</strong>
              <p>For riders with regular cycling experience and good fitness.</p>
            </div>
            <div className="ge-info-item">
              <span>Group format</span>
              <strong>Small groups</strong>
              <p>Private group arrangements can be discussed.</p>
            </div>
            <div className="ge-info-item">
              <span>Departure dates</span>
              <strong>By arrangement</strong>
              <p>Dates and availability are confirmed with the organiser.</p>
            </div>
            <div className="ge-info-item">
              <span>Route planning</span>
              <strong>Condition dependent</strong>
              <p>Final route details depend on local conditions and group level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="ge-culture" id="experience">
        <div className="ge-container ge-culture__grid">
          <div className="ge-culture__copy">
            <span className="ge-eyebrow">Beyond the handlebars</span>
            <h2 className="ge-section-heading">
              Discover the Morocco
              <br />
              <em>between the trails.</em>
            </h2>
            <p className="ge-lead">
              A cycling expedition is also an opportunity to experience the
              places, people and traditions that give southern Morocco its
              character.
            </p>

            <div className="ge-culture__list">
              {beyondTrail.map((item) => (
                <article className="ge-culture__item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="ge-culture__image">
            <img
              src={images.culture}
              alt="Desert landscape and traditional surroundings in Morocco"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="ge-gallery" id="gallery">
        <div className="ge-container">
          <div className="ge-gallery__heading">
            <span className="ge-eyebrow">The landscapes</span>
            <h2 className="ge-section-heading">
              A journey through <em>contrasts.</em>
            </h2>
          </div>

          <div className="ge-gallery-grid">
            <div className="ge-gallery-grid__item">
              <img src={images.galleryOne} alt="Southern Morocco cycling landscape" loading="lazy" />
            </div>
            <div className="ge-gallery-grid__item">
              <img src={images.galleryTwo} alt="Gravel tracks in Morocco" loading="lazy" />
            </div>
            <div className="ge-gallery-grid__item">
              <img src={images.galleryThree} alt="Rocky mountain biking terrain" loading="lazy" />
            </div>
            <div className="ge-gallery-grid__item">
              <img src={images.galleryFour} alt="Desert gravel cycling scenery" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="ge-itinerary" id="itinerary">
        <div className="ge-container">
          <div className="ge-itinerary__heading">
            <span className="ge-eyebrow">Suggested programme</span>
            <h2 className="ge-section-heading">
              Three days of
              <br />
              <em>gravel and MTB adventure.</em>
            </h2>
            <p className="ge-lead">
              The following outline illustrates how the expedition can combine
              different riding styles. It is a suggested programme rather than
              a confirmed route schedule. Final daily routes and logistics
              must be agreed before booking.
            </p>
          </div>

          <div className="ge-itinerary-list">
            {itinerary.map((day) => (
              <article className="ge-itinerary-day" key={day.day}>
                <div className="ge-itinerary-day__number">{day.day}</div>
                <div className="ge-itinerary-day__copy">
                  <h3>{day.title}</h3>
                  <span className="ge-itinerary-day__subtitle">{day.subtitle}</span>
                  <p>{day.text}</p>
                </div>
                <div className="ge-itinerary-day__details">
                  <div>
                    <span>Riding focus</span>
                    <p>{day.riding}</p>
                  </div>
                  <div>
                    <span>Terrain</span>
                    <p>{day.terrain}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="ge-itinerary-note">
            <strong>Important:</strong> This is an indicative three-day
            programme. It does not confirm specific distances, elevation gain,
            accommodation, meals or transfers. Those details must be provided
            and agreed as part of the final event proposal.
          </div>
        </div>
      </section>

      {/* ARRANGEMENTS */}
      <section className="ge-arrangements" id="arrangements">
        <div className="ge-container">
          <span className="ge-eyebrow">Expedition arrangements</span>
          <h2 className="ge-section-heading">
            Know what is included
            <br />
            <em>before you travel.</em>
          </h2>
          <p className="ge-lead">
            The final event proposal will confirm the services, logistics and
            arrangements for your departure. The lists below provide a general
            outline and should be checked against your confirmed booking.
          </p>

          <div className="ge-arrangements__grid">
            <div className="ge-arrangements__column">
              <h3>Included in the arrangement</h3>
              <ul className="ge-check-list">
                {inclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="ge-arrangements__column">
              <h3>Not included</h3>
              <ul className="ge-check-list">
                {exclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PREPARATION */}
      <section className="ge-preparation" id="preparation">
        <div className="ge-container ge-preparation__grid">
          <div className="ge-preparation__intro">
            <span className="ge-eyebrow">Before you ride</span>
            <h2 className="ge-section-heading">
              Prepare for
              <br />
              <em>the terrain.</em>
            </h2>
            <p className="ge-lead">
              Good preparation makes a real difference when riding in remote
              and changing environments. Your equipment should match the final
              route and the type of bike you plan to use.
            </p>
          </div>

          <div className="ge-preparation__list">
            {preparation.map((item) => (
              <article className="ge-preparation__item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFICULTY */}
      <section className="ge-difficulty" id="difficulty">
        <div className="ge-container ge-difficulty__grid">
          <div className="ge-difficulty__image">
            <img
              src={images.mtb}
              alt="Mountain bike terrain in southern Morocco"
              loading="lazy"
            />
          </div>

          <div className="ge-difficulty__copy">
            <span className="ge-eyebrow">Fitness and experience</span>
            <h2 className="ge-section-heading">
              Made for riders
              <br />
              who love <em>exploration.</em>
            </h2>

            <p>
              This expedition is best suited to riders who already cycle
              regularly and are comfortable spending time on the bike. The
              combination of gravel and MTB terrain means that the experience
              can involve different surfaces, changing conditions and varied
              riding demands.
            </p>

            <p>
              You do not need to be an elite athlete, but you should have a
              reasonable level of endurance and confidence on uneven ground.
              The final difficulty depends on the route selected, daily riding
              time, terrain and elevation.
            </p>

            <div className="ge-difficulty__points">
              <div className="ge-difficulty__point">
                <strong>Fitness</strong>
                <span>Good general cycling fitness recommended</span>
              </div>
              <div className="ge-difficulty__point">
                <strong>Experience</strong>
                <span>Regular cycling experience recommended</span>
              </div>
              <div className="ge-difficulty__point">
                <strong>Bike skills</strong>
                <span>Confidence on varied surfaces is useful</span>
              </div>
              <div className="ge-difficulty__point">
                <strong>Adaptability</strong>
                <span>Comfort with changing outdoor conditions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ge-faq" id="faq">
        <div className="ge-container ge-faq__grid">
          <div>
            <span className="ge-eyebrow">Useful information</span>
            <h2 className="ge-section-heading">
              Frequently asked
              <br />
              <em>questions.</em>
            </h2>
            <p className="ge-lead">
              Find answers to common questions about the Morocco Desert
              Cycling Expedition, bike choice and preparation.
            </p>
          </div>

          <div className="ge-faq__list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="ge-contact" id="enquiry">
        <div className="ge-container">
          <div className="ge-contact__heading">
            <span className="ge-eyebrow">Plan your expedition</span>
            <h2 className="ge-section-heading">
              Tell us how you
              <br />
              want to <em>explore Morocco.</em>
            </h2>
            <p className="ge-lead">
              Share your preferred dates, group size, cycling experience and
              whether you plan to ride gravel, MTB or a combination of both.
              Our team can help discuss the most suitable arrangements.
            </p>
          </div>

          <div className="ge-contact__panel">
            <ContactEnquiryForm />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="ge-final">
        <div className="ge-final__image">
          <img src={images.final} alt="Wide open landscapes of the Moroccan desert" loading="lazy" />
        </div>

        <div className="ge-final__content">
          <span className="ge-eyebrow">Mountain Bike Morocco</span>
          <h2>
            Find your own
            <br />
            line through <em>Morocco.</em>
          </h2>
          <p>
            Gravel roads, mountain trails and the vast landscapes of the south.
            Start planning a cycling expedition that brings together the best
            of both worlds.
          </p>
          <div className="ge-hero__actions">
            <a href="#enquiry" className="ge-button">
              Enquire now
            </a>
            <a href="/cycling-trips" className="ge-button ge-button--outline">
              Explore cycling trips
            </a>
          </div>
        </div>
      </section>

      {/* RELATED EVENTS */}
      <section className="ge-related">
        <div className="ge-container">
          <div className="ge-related__heading">
            <div>
              <span className="ge-eyebrow">Explore more</span>
              <h2 className="ge-section-heading">
                More cycling <em>adventures.</em>
              </h2>
            </div>
            <a href="/events" className="ge-text-link">
              Discover all events
            </a>
          </div>

          <div className="ge-related-grid">
            {relatedEvents.map((event) => (
              <article className="ge-related-card" key={event.title}>
                <a href={event.href}>
                  <div className="ge-related-card__image">
                    <img src={event.image} alt={event.title} loading="lazy" />
                  </div>
                  <div className="ge-related-card__body">
                    <span>{event.category}</span>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <span className="ge-text-link">Explore event</span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ge-footer">
        <div className="ge-container ge-footer__inner">
          <a href="/" className="ge-footer__brand">
            Mountain Bike Morocco
          </a>

          <div className="ge-footer__links">
            <a href="/">Home</a>
            <a href="/cycling-trips">Cycling Trips</a>
            <a href="/destinations">Destinations</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>

          <span className="ge-footer__copyright">
          <span>© {2026} Mountain Bike Morocco. All rights reserved.</span>
          </span>
        </div>
      </footer>
    </main>
  );
}