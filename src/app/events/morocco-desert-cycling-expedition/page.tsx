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
    title: "Two styles of riding",
    text: "Combine flowing gravel roads with mountain bike trails for a varied cycling experience through southern Morocco.",
  },
  {
    number: "02",
    title: "Remote landscapes",
    text: "Ride through wide-open desert scenery, rugged mountain terrain and quiet routes away from busy roads.",
  },
  {
    number: "03",
    title: "Changing terrain",
    text: "Experience a mixture of gravel tracks, rocky paths, mountain trails and open desert riding.",
  },
  {
    number: "04",
    title: "Traditional villages",
    text: "Discover rural communities and traditional settlements that reveal another side of Morocco.",
  },
  {
    number: "05",
    title: "Guided expedition",
    text: "Explore with local support and route planning adapted to the terrain and conditions.",
  },
  {
    number: "06",
    title: "A different Morocco",
    text: "Experience the country's southern landscapes through an active journey that connects nature, culture and cycling.",
  },
];

const beyondTrail = [
  {
    title: "Local encounters",
    text: "Discover the welcoming atmosphere of southern Morocco and experience the traditions of communities along the route.",
  },
  {
    title: "Desert landscapes",
    text: "Travel through dramatic open scenery, rocky valleys and remote landscapes shaped by the changing environment.",
  },
  {
    title: "Mountain scenery",
    text: "Enjoy views across rugged mountain ranges and explore quieter routes through the countryside.",
  },
  {
    title: "Moroccan hospitality",
    text: "Enjoy local food, traditional accommodation and the warm hospitality that makes travelling through Morocco memorable.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival and expedition briefing",
    location: "Southern Morocco",
    text: "Arrive in the expedition area and meet the local team. Check your bicycle and equipment, review the planned routes and prepare for the days ahead. The team will introduce the riding terrain, support arrangements and daily programme.",
  },
  {
    day: "02",
    title: "Gravel riding through open landscapes",
    location: "Desert and rural tracks",
    text: "Begin the cycling expedition on gravel roads and remote tracks crossing the open landscapes of southern Morocco. Enjoy changing scenery, quiet routes and the freedom of riding through wide valleys and desert surroundings.",
  },
  {
    day: "03",
    title: "Mountain bike trails and desert terrain",
    location: "Mountain and desert trails",
    text: "Continue the adventure on a combination of mountain bike trails and rugged terrain. Experience a different side of the region before concluding the expedition with the local team.",
  },
];

const inclusions = [
  "Guided cycling programme",
  "Local cycling support team",
  "Route planning and daily ride briefings",
  "Support vehicle during the expedition where required",
  "Assistance with expedition logistics",
];

const exclusions = [
  "International flights",
  "Travel insurance",
  "Personal cycling equipment",
  "Bicycle rental unless arranged separately",
  "Meals and drinks not specified in the confirmed programme",
  "Personal expenses",
  "Tips and gratuities",
];

const preparation = [
  {
    title: "Bike and equipment",
    text: "Bring a well-maintained gravel or mountain bike suited to mixed terrain. Check your tyres, brakes, drivetrain and essential tools before travelling.",
  },
  {
    title: "Cycling clothing",
    text: "Pack comfortable cycling clothing, gloves, suitable shoes, sunglasses and layers for changing temperatures.",
  },
  {
    title: "Fitness and experience",
    text: "A good level of cycling fitness and previous experience on gravel roads or mountain bike trails will help you enjoy the expedition.",
  },
  {
    title: "Sun and hydration",
    text: "Bring sun protection, a reusable water bottle or hydration pack and personal essentials for riding in exposed environments.",
  },
];

const faqs = [
  {
    question: "What type of cycling does this expedition include?",
    answer:
      "The expedition combines gravel cycling and mountain biking. The programme includes open gravel roads, rural tracks, mountain trails and varied desert terrain.",
  },
  {
    question: "Is this expedition suitable for beginners?",
    answer:
      "This is a mixed-terrain cycling adventure. Previous cycling experience and a reasonable level of fitness are recommended. Contact our team to discuss your experience before booking.",
  },
  {
    question: "What type of bicycle should I bring?",
    answer:
      "A gravel bike or mountain bike may be suitable depending on the confirmed route and terrain. We recommend discussing your bicycle choice with our team before departure.",
  },
  {
    question: "Can I rent a bicycle in Morocco?",
    answer:
      "Bicycle rental may be arranged separately, subject to availability and the requirements of the route. Contact us with your preferred bicycle type.",
  },
  {
    question: "Is the expedition guided?",
    answer:
      "Yes. The expedition is planned as a guided cycling experience with local support and route briefings.",
  },
  {
    question: "When is the best time to ride in southern Morocco?",
    answer:
      "Spring and autumn are generally favourable seasons for cycling in many parts of southern Morocco. Exact departure dates depend on the route and local conditions.",
  },
  {
    question: "Can the expedition be arranged for a private group?",
    answer:
      "Yes. Private departures can be discussed for friends, cycling clubs and groups. The programme can be reviewed according to the group's experience and requirements.",
  },
  {
    question: "How do I enquire about availability?",
    answer:
      "Complete the enquiry form on this page with your preferred dates, group size and cycling experience. Our team will contact you to discuss the arrangements.",
  },
];

const relatedEvents = [
  {
    title: "Atlas Mountains MTB Gathering",
    description:
      "A mountain biking gathering exploring the trails and landscapes of the High Atlas.",
    image: "/images/saghro-morocco-bike-tour.jpg",
    href: "/events/atlas-mountains-mtb-gathering",
  },
  {
    title: "Agafay Desert Cycling Challenge",
    description:
      "Discover the rocky desert landscapes and distinctive riding terrain of Agafay.",
    image: "/images/Desert-Agafay-Morocco.jpg",
    href: "/events/agafay-desert-cycling-challenge",
  },
  {
    title: "Marrakech to Sahara E-MTB Caravan",
    description:
      "A multi-terrain electric mountain bike adventure towards the Sahara.",
    image: "/images/sahara-desert-ebike-expeditions.jpg",
    href: "/events/marrakech-to-sahara-e-mtb-caravan",
  },
];

export default function MoroccoDesertCyclingExpeditionPage() {
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
          overflow: hidden;
        }

        .atlas-tour * {
          box-sizing: border-box;
        }

        .atlas-tour img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .atlas-tour a {
          color: inherit;
          text-decoration: none;
        }

        .atlas-tour .at-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        .atlas-tour .at-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--gold);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
        }

        .atlas-tour .at-eyebrow::before {
          content: "";
          width: 30px;
          height: 1px;
          background: var(--gold);
        }

        .atlas-tour h1,
        .atlas-tour h2,
        .atlas-tour h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
        }

        .atlas-tour .at-section-title {
          max-width: 760px;
          margin: 18px 0;
          font-size: clamp(34px, 4.5vw, 58px);
          line-height: 1.08;
          letter-spacing: -1.7px;
        }

        .atlas-tour .at-lead {
          max-width: 650px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .atlas-tour .at-hero {
          position: relative;
          min-height: 690px;
          display: flex;
          align-items: flex-end;
          background: #222;
          color: white;
        }

        .atlas-tour .at-hero-image {
          position: absolute;
          inset: 0;
        }

        .atlas-tour .at-hero-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(12,18,14,.76), rgba(12,18,14,.2) 75%),
            linear-gradient(0deg, rgba(12,18,14,.55), transparent 65%);
        }

        .atlas-tour .at-hero-content {
          position: relative;
          z-index: 1;
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
          padding: 120px 0 90px;
        }

        .atlas-tour .at-hero .at-eyebrow {
          color: var(--gold-light);
        }

        .atlas-tour .at-hero h1 {
          max-width: 850px;
          margin: 22px 0;
          font-size: clamp(48px, 7.5vw, 88px);
          line-height: .99;
          letter-spacing: -3px;
        }

        .atlas-tour .at-hero-copy {
          max-width: 590px;
          color: rgba(255,255,255,.83);
          font-size: 16px;
          line-height: 1.85;
        }

        .atlas-tour .at-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 13px;
          margin-top: 32px;
        }

        .atlas-tour .at-button {
          min-height: 49px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 24px;
          border: 1px solid var(--gold);
          background: var(--gold);
          color: #1d241e;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.7px;
          text-transform: uppercase;
          transition: .25s ease;
        }

        .atlas-tour .at-button:hover {
          background: var(--gold-light);
          border-color: var(--gold-light);
        }

        .atlas-tour .at-button-outline {
          background: transparent;
          border-color: rgba(255,255,255,.55);
          color: white;
        }

        .atlas-tour .at-button-outline:hover {
          background: white;
          color: var(--ink);
          border-color: white;
        }

        .atlas-tour .at-facts {
          background: var(--green);
          color: white;
        }

        .atlas-tour .at-facts-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
        }

        .atlas-tour .at-fact {
          min-height: 104px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px 18px;
          border-right: 1px solid rgba(255,255,255,.15);
        }

        .atlas-tour .at-fact:last-child {
          border-right: 0;
        }

        .atlas-tour .at-fact-label {
          margin-bottom: 9px;
          color: var(--gold-light);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .atlas-tour .at-fact-value {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 17px;
        }

        .atlas-tour .at-subnav {
          border-bottom: 1px solid var(--line);
          background: var(--paper);
        }

        .atlas-tour .at-subnav-inner {
          min-height: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 30px;
        }

        .atlas-tour .at-subnav a {
          color: var(--muted);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: color .2s ease;
        }

        .atlas-tour .at-subnav a:hover {
          color: var(--gold);
        }

        .atlas-tour .at-section {
          padding: 105px 0;
        }

        .atlas-tour .at-intro-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 75px;
          align-items: center;
        }

        .atlas-tour .at-intro-image {
          height: 590px;
          position: relative;
        }

        .atlas-tour .at-intro-image::after {
          content: "";
          position: absolute;
          right: -15px;
          bottom: -15px;
          width: 42%;
          height: 42%;
          border-right: 1px solid var(--gold);
          border-bottom: 1px solid var(--gold);
          pointer-events: none;
        }

        .atlas-tour .at-intro-copy p {
          color: var(--muted);
          font-size: 14px;
          line-height: 2;
        }

        .atlas-tour .at-intro-copy .at-button {
          margin-top: 20px;
        }

        .atlas-tour .at-highlights {
          background: var(--paper-deep);
        }

        .atlas-tour .at-heading-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 40px;
          margin-bottom: 48px;
        }

        .atlas-tour .at-heading-row .at-lead {
          max-width: 390px;
        }

        .atlas-tour .at-highlight-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid #d4d0c5;
          border-left: 1px solid #d4d0c5;
        }

        .atlas-tour .at-highlight {
          min-height: 225px;
          padding: 30px;
          border-right: 1px solid #d4d0c5;
          border-bottom: 1px solid #d4d0c5;
        }

        .atlas-tour .at-number {
          color: var(--gold);
          font-size: 11px;
          letter-spacing: 2px;
        }

        .atlas-tour .at-highlight h3 {
          margin: 25px 0 12px;
          font-size: 25px;
        }

        .atlas-tour .at-highlight p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.85;
        }

        .atlas-tour .at-terrain-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-top: 45px;
        }

        .atlas-tour .at-terrain-card {
          position: relative;
          min-height: 490px;
          overflow: hidden;
          color: white;
          background: #252a24;
        }

        .atlas-tour .at-terrain-card img {
          position: absolute;
          inset: 0;
          transition: transform .7s ease;
        }

        .atlas-tour .at-terrain-card:hover img {
          transform: scale(1.04);
        }

        .atlas-tour .at-terrain-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(10,15,11,.85), transparent 75%);
        }

        .atlas-tour .at-terrain-copy {
          position: absolute;
          z-index: 1;
          right: 32px;
          bottom: 32px;
          left: 32px;
        }

        .atlas-tour .at-terrain-copy span {
          color: var(--gold-light);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .atlas-tour .at-terrain-copy h3 {
          margin: 12px 0;
          font-size: 36px;
        }

        .atlas-tour .at-terrain-copy p {
          max-width: 450px;
          margin: 0;
          color: rgba(255,255,255,.8);
          font-size: 13px;
          line-height: 1.8;
        }

        .atlas-tour .at-event-info {
          background: var(--green);
          color: white;
        }

        .atlas-tour .at-event-info .at-section-title {
          color: white;
        }

        .atlas-tour .at-event-info .at-lead {
          color: rgba(255,255,255,.7);
        }

        .atlas-tour .at-info-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          margin-top: 48px;
          border-top: 1px solid rgba(255,255,255,.2);
        }

        .atlas-tour .at-info-item {
          padding: 28px 22px 10px 0;
        }

        .atlas-tour .at-info-item span {
          display: block;
          margin-bottom: 12px;
          color: var(--gold-light);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .atlas-tour .at-info-item strong {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 19px;
          font-weight: 400;
        }

        .atlas-tour .at-culture-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 75px;
          align-items: center;
        }

        .atlas-tour .at-culture-image {
          height: 520px;
        }

        .atlas-tour .at-culture-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px 30px;
          margin-top: 35px;
        }

        .atlas-tour .at-culture-item {
          padding-top: 18px;
          border-top: 1px solid var(--line);
        }

        .atlas-tour .at-culture-item h3 {
          margin: 0 0 10px;
          font-size: 20px;
        }

        .atlas-tour .at-culture-item p {
          margin: 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.8;
        }

        .atlas-tour .at-gallery {
          padding: 0 0 105px;
        }

        .atlas-tour .at-gallery-grid {
          display: grid;
          grid-template-columns: 1.15fr .85fr .85fr;
          grid-template-rows: 245px 245px;
          gap: 12px;
          margin-top: 35px;
        }

        .atlas-tour .at-gallery-item {
          overflow: hidden;
        }

        .atlas-tour .at-gallery-item:first-child {
          grid-row: span 2;
        }

        .atlas-tour .at-gallery-item img {
          transition: transform .6s ease;
        }

        .atlas-tour .at-gallery-item:hover img {
          transform: scale(1.04);
        }

        .atlas-tour .at-itinerary {
          background: var(--paper-deep);
        }

        .atlas-tour .at-itinerary-list {
          max-width: 900px;
          margin: 50px auto 0;
          border-top: 1px solid #d3cec1;
        }

        .atlas-tour .at-day {
          display: grid;
          grid-template-columns: 100px 1fr;
          gap: 30px;
          padding: 35px 0;
          border-bottom: 1px solid #d3cec1;
        }

        .atlas-tour .at-day-number {
          color: var(--gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 34px;
        }

        .atlas-tour .at-day-location {
          color: var(--muted);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .atlas-tour .at-day h3 {
          margin: 9px 0 12px;
          font-size: 27px;
        }

        .atlas-tour .at-day p {
          max-width: 690px;
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .atlas-tour .at-arrangements-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 70px;
          margin-top: 45px;
        }

        .atlas-tour .at-arrangements h3 {
          padding-bottom: 17px;
          border-bottom: 1px solid var(--line);
          font-size: 27px;
        }

        .atlas-tour .at-check-list {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .atlas-tour .at-check-list li {
          position: relative;
          padding: 13px 0 13px 25px;
          border-bottom: 1px solid var(--line);
          color: var(--muted);
          font-size: 13px;
          line-height: 1.6;
        }

        .atlas-tour .at-check-list li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--gold);
        }

        .atlas-tour .at-preparation {
          background: var(--paper-deep);
        }

        .atlas-tour .at-prep-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 25px;
          margin-top: 45px;
        }

        .atlas-tour .at-prep-card {
          padding-top: 20px;
          border-top: 1px solid #cfcabd;
        }

        .atlas-tour .at-prep-card h3 {
          margin: 0 0 12px;
          font-size: 22px;
        }

        .atlas-tour .at-prep-card p {
          margin: 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.9;
        }

        .atlas-tour .at-difficulty-grid {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 70px;
          align-items: center;
        }

        .atlas-tour .at-difficulty-panel {
          padding: 40px;
          background: var(--green);
          color: white;
        }

        .atlas-tour .at-difficulty-panel span {
          color: var(--gold-light);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .atlas-tour .at-difficulty-panel h3 {
          margin: 18px 0;
          font-size: 34px;
        }

        .atlas-tour .at-difficulty-panel p {
          margin: 0;
          color: rgba(255,255,255,.75);
          font-size: 13px;
          line-height: 1.9;
        }

        .atlas-tour .at-faq {
          background: var(--paper-deep);
        }

        .atlas-tour .at-faq-list {
          max-width: 900px;
          margin: 45px auto 0;
          border-top: 1px solid #d0ccbf;
        }

        .atlas-tour .at-faq-item {
          padding: 24px 0;
          border-bottom: 1px solid #d0ccbf;
        }

        .atlas-tour .at-faq-item h3 {
          margin: 0 0 12px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 15px;
          font-weight: 700;
        }

        .atlas-tour .at-faq-item p {
          max-width: 760px;
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.85;
        }

        .atlas-tour .at-contact {
          background: var(--green);
          color: white;
        }

        .atlas-tour .at-contact-grid {
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          gap: 70px;
          align-items: start;
        }

        .atlas-tour .at-contact .at-section-title {
          color: white;
        }

        .atlas-tour .at-contact .at-lead {
          color: rgba(255,255,255,.75);
        }

        .atlas-tour .at-contact-form {
          padding: 32px;
          background: #f4f2eb;
          color: var(--ink);
        }

        .atlas-tour .at-final {
          position: relative;
          min-height: 480px;
          display: flex;
          align-items: center;
          color: white;
          text-align: center;
          background: #222;
        }

        .atlas-tour .at-final-image {
          position: absolute;
          inset: 0;
        }

        .atlas-tour .at-final-image::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(15,22,17,.62);
        }

        .atlas-tour .at-final-content {
          position: relative;
          z-index: 1;
          width: min(760px, calc(100% - 40px));
          margin: 0 auto;
          padding: 85px 0;
        }

        .atlas-tour .at-final h2 {
          margin: 20px 0;
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1.08;
        }

        .atlas-tour .at-final p {
          color: rgba(255,255,255,.8);
          font-size: 14px;
          line-height: 1.9;
        }

        .atlas-tour .at-related {
          padding: 95px 0;
        }

        .atlas-tour .at-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 42px;
        }

        .atlas-tour .at-related-card {
          background: var(--paper-deep);
        }

        .atlas-tour .at-related-image {
          height: 245px;
          overflow: hidden;
        }

        .atlas-tour .at-related-image img {
          transition: transform .5s ease;
        }

        .atlas-tour .at-related-card:hover img {
          transform: scale(1.04);
        }

        .atlas-tour .at-related-copy {
          padding: 24px;
        }

        .atlas-tour .at-related-copy h3 {
          margin: 0 0 12px;
          font-size: 24px;
        }

        .atlas-tour .at-related-copy p {
          min-height: 50px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.8;
        }

        .atlas-tour .at-related-link {
          display: inline-block;
          margin-top: 12px;
          color: var(--green);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .atlas-tour .at-footer {
          padding: 28px 0;
          background: #19291f;
          color: rgba(255,255,255,.7);
          text-align: center;
          font-size: 10px;
          letter-spacing: 1px;
        }

        @media (max-width: 1000px) {
          .atlas-tour .at-facts-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .atlas-tour .at-fact:nth-child(3) {
            border-right: 0;
          }

          .atlas-tour .at-fact:nth-child(-n+3) {
            border-bottom: 1px solid rgba(255,255,255,.15);
          }

          .atlas-tour .at-intro-grid,
          .atlas-tour .at-culture-grid,
          .atlas-tour .at-difficulty-grid,
          .atlas-tour .at-contact-grid {
            gap: 42px;
          }

          .atlas-tour .at-prep-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .atlas-tour .at-info-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .atlas-tour .at-container {
            width: min(100% - 36px, 560px);
          }

          .atlas-tour .at-hero {
            min-height: 640px;
          }

          .atlas-tour .at-hero-content {
            width: calc(100% - 36px);
            padding: 100px 0 65px;
          }

          .atlas-tour .at-hero h1 {
            font-size: clamp(43px, 12vw, 65px);
            letter-spacing: -2px;
          }

          .atlas-tour .at-facts-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .atlas-tour .at-fact:nth-child(3) {
            border-right: 1px solid rgba(255,255,255,.15);
          }

          .atlas-tour .at-fact:nth-child(even) {
            border-right: 0;
          }

          .atlas-tour .at-fact:nth-child(4) {
            border-bottom: 1px solid rgba(255,255,255,.15);
          }

          .atlas-tour .at-subnav-inner {
            justify-content: flex-start;
            gap: 18px;
            padding: 18px 0;
          }

          .atlas-tour .at-section {
            padding: 72px 0;
          }

          .atlas-tour .at-intro-grid,
          .atlas-tour .at-culture-grid,
          .atlas-tour .at-difficulty-grid,
          .atlas-tour .at-contact-grid,
          .atlas-tour .at-arrangements-grid {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .atlas-tour .at-intro-image {
            height: 390px;
          }

          .atlas-tour .at-heading-row {
            display: block;
          }

          .atlas-tour .at-highlight-grid {
            grid-template-columns: 1fr 1fr;
          }

          .atlas-tour .at-highlight {
            min-height: 220px;
            padding: 22px;
          }

          .atlas-tour .at-terrain-grid {
            grid-template-columns: 1fr;
          }

          .atlas-tour .at-terrain-card {
            min-height: 390px;
          }

          .atlas-tour .at-culture-image {
            height: 380px;
          }

          .atlas-tour .at-culture-list {
            gap: 20px;
          }

          .atlas-tour .at-gallery-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 250px 170px 170px;
          }

          .atlas-tour .at-gallery-item:first-child {
            grid-column: span 2;
            grid-row: auto;
          }

          .atlas-tour .at-day {
            grid-template-columns: 55px 1fr;
            gap: 15px;
          }

          .atlas-tour .at-day-number {
            font-size: 27px;
          }

          .atlas-tour .at-prep-grid {
            gap: 25px 18px;
          }

          .atlas-tour .at-related-grid {
            grid-template-columns: 1fr;
          }

          .atlas-tour .at-related-image {
            height: 260px;
          }

          .atlas-tour .at-contact-form {
            padding: 20px;
          }
        }

        @media (max-width: 420px) {
          .atlas-tour .at-highlight-grid,
          .atlas-tour .at-culture-list,
          .atlas-tour .at-prep-grid,
          .atlas-tour .at-info-grid {
            grid-template-columns: 1fr;
          }

          .atlas-tour .at-fact {
            padding: 17px 12px;
          }

          .atlas-tour .at-fact-value {
            font-size: 15px;
          }

          .atlas-tour .at-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .atlas-tour .at-button {
            width: 100%;
          }

          .atlas-tour .at-gallery-grid {
            grid-template-rows: 220px 150px 150px;
          }
        }
      `}</style>

      <section className="at-hero">
        <div className="at-hero-image">
          <img src={images.hero} alt="Cycling through the desert landscapes of southern Morocco" />
        </div>
        <div className="at-hero-content">
          <div className="at-eyebrow">Mountain Bike Morocco · Cycling Expedition</div>
          <h1>Morocco Desert Cycling Expedition</h1>
          <p className="at-hero-copy">
            A multi-terrain cycling adventure combining gravel roads and mountain
            bike trails through the dramatic landscapes of southern Morocco.
          </p>
          <div className="at-actions">
            <a className="at-button" href="#enquire">Enquire About This Expedition</a>
            <a className="at-button at-button-outline" href="#itinerary">Explore The Programme</a>
          </div>
        </div>
      </section>

      <section className="at-facts">
        <div className="at-container at-facts-grid">
          {facts.map((fact) => (
            <div className="at-fact" key={fact.label}>
              <span className="at-fact-label">{fact.label}</span>
              <span className="at-fact-value">{fact.value}</span>
            </div>
          ))}
        </div>
      </section>

      <nav className="at-subnav">
        <div className="at-container at-subnav-inner">
          <a href="#overview">Overview</a>
          <a href="#highlights">Highlights</a>
          <a href="#terrain">Terrain</a>
          <a href="#itinerary">Itinerary</a>
          <a href="#preparation">Preparation</a>
          <a href="#faq">FAQs</a>
          <a href="#enquire">Enquire</a>
        </div>
      </nav>

      <section className="at-section" id="overview">
        <div className="at-container at-intro-grid">
          <div className="at-intro-image">
            <img src={images.overview} alt="Cycling expedition across southern Morocco" />
          </div>
          <div className="at-intro-copy">
            <div className="at-eyebrow">The Expedition</div>
            <h2 className="at-section-title">
              Discover southern Morocco on two wheels
            </h2>
            <p>
              The Morocco Desert Cycling Expedition brings together two exciting
              styles of riding in one journey. Travel across open gravel roads,
              explore rugged mountain bike trails and discover the remote
              landscapes that make southern Morocco such a distinctive cycling
              destination.
            </p>
            <p>
              From wide desert tracks to rocky mountain paths and traditional
              villages, each part of the expedition offers a different view of
              the region. The programme is designed around varied terrain,
              local knowledge and an authentic experience beyond the usual
              tourist routes.
            </p>
            <p>
              Whether you prefer the rhythm of long gravel rides or the
              technical character of mountain bike trails, this expedition
              offers a varied adventure through Morocco's remarkable southern
              landscapes.
            </p>
            <a className="at-button" href="#enquire">Plan Your Expedition</a>
          </div>
        </div>
      </section>

      <section className="at-section at-highlights" id="highlights">
        <div className="at-container">
          <div className="at-heading-row">
            <div>
              <div className="at-eyebrow">What Makes It Special</div>
              <h2 className="at-section-title">The expedition highlights</h2>
            </div>
            <p className="at-lead">
              A varied cycling experience built around remote routes, changing
              landscapes, local culture and the freedom to explore.
            </p>
          </div>
          <div className="at-highlight-grid">
            {highlights.map((item) => (
              <article className="at-highlight" key={item.number}>
                <span className="at-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="at-section" id="terrain">
        <div className="at-container">
          <div className="at-eyebrow">Ride The Landscape</div>
          <h2 className="at-section-title">Gravel roads and mountain trails</h2>
          <p className="at-lead">
            The expedition combines different riding environments to create a
            varied journey through the desert and mountain landscapes of
            southern Morocco.
          </p>
          <div className="at-terrain-grid">
            <article className="at-terrain-card">
              <img src={images.gravel} alt="Gravel cycling in southern Morocco" />
              <div className="at-terrain-copy">
                <span>Part One · Gravel Riding</span>
                <h3>Open Desert Roads</h3>
                <p>
                  Ride across open landscapes and remote gravel tracks, enjoying
                  the changing scenery and the distinctive atmosphere of the
                  Moroccan south.
                </p>
              </div>
            </article>
            <article className="at-terrain-card">
              <img src={images.mtb} alt="Mountain biking on rugged Moroccan trails" />
              <div className="at-terrain-copy">
                <span>Part Two · Mountain Biking</span>
                <h3>Rugged Mountain Trails</h3>
                <p>
                  Explore rocky paths and mountain terrain on routes that bring
                  a different character and challenge to the expedition.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="at-section at-event-info">
        <div className="at-container">
          <div className="at-eyebrow">Expedition Details</div>
          <h2 className="at-section-title">A guided journey through Morocco</h2>
          <p className="at-lead">
            The expedition is organised for riders who want to discover
            southern Morocco through a combination of gravel and mountain bike
            riding.
          </p>
          <div className="at-info-grid">
            <div className="at-info-item">
              <span>Experience</span>
              <strong>Gravel & Mountain Bike</strong>
            </div>
            <div className="at-info-item">
              <span>Environment</span>
              <strong>Desert & Mountain</strong>
            </div>
            <div className="at-info-item">
              <span>Organisation</span>
              <strong>Guided Expedition</strong>
            </div>
            <div className="at-info-item">
              <span>Departure</span>
              <strong>By Arrangement</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="at-section">
        <div className="at-container at-culture-grid">
          <div>
            <div className="at-eyebrow">Beyond The Ride</div>
            <h2 className="at-section-title">
              Experience the landscapes and culture of southern Morocco
            </h2>
            <p className="at-lead">
              The journey is about more than cycling. Discover the landscapes,
              traditions and hospitality that make this region unforgettable.
            </p>
            <div className="at-culture-list">
              {beyondTrail.map((item) => (
                <article className="at-culture-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="at-culture-image">
            <img src={images.culture} alt="Desert scenery in Morocco" />
          </div>
        </div>
      </section>

      <section className="at-gallery">
        <div className="at-container">
          <div className="at-eyebrow">The Landscapes</div>
          <h2 className="at-section-title">Morocco through the journey</h2>
          <div className="at-gallery-grid">
            <div className="at-gallery-item">
              <img src={images.galleryOne} alt="Southern Morocco cycling landscape" />
            </div>
            <div className="at-gallery-item">
              <img src={images.galleryTwo} alt="Gravel cycling expedition in Morocco" />
            </div>
            <div className="at-gallery-item">
              <img src={images.galleryThree} alt="Mountain biking in Morocco" />
            </div>
            <div className="at-gallery-item">
              <img src={images.galleryFour} alt="Desert gravel cycling route" />
            </div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary" id="itinerary">
        <div className="at-container">
          <div className="at-eyebrow">The Programme</div>
          <h2 className="at-section-title">Three days of desert and mountain riding</h2>
          <p className="at-lead">
            An outline of the expedition programme. The exact routes and daily
            arrangements are confirmed according to conditions and the group's
            requirements.
          </p>
          <div className="at-itinerary-list">
            {itinerary.map((day) => (
              <article className="at-day" key={day.day}>
                <div className="at-day-number">{day.day}</div>
                <div>
                  <span className="at-day-location">{day.location}</span>
                  <h3>{day.title}</h3>
                  <p>{day.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="at-section" id="arrangements">
        <div className="at-container">
          <div className="at-eyebrow">What's Included</div>
          <h2 className="at-section-title">Expedition arrangements</h2>
          <div className="at-arrangements-grid">
            <div className="at-arrangements">
              <h3>Included</h3>
              <ul className="at-check-list">
                {inclusions.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="at-arrangements">
              <h3>Not Included</h3>
              <ul className="at-check-list">
                {exclusions.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="at-section at-preparation" id="preparation">
        <div className="at-container">
          <div className="at-eyebrow">Before You Travel</div>
          <h2 className="at-section-title">Prepare for your cycling expedition</h2>
          <p className="at-lead">
            A little preparation will help you make the most of the varied
            terrain and conditions in southern Morocco.
          </p>
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
          <div className="at-difficulty-panel">
            <span>Riding Profile</span>
            <h3>Mixed-terrain cycling</h3>
            <p>
              The expedition combines gravel roads and mountain bike trails.
              Riders should have previous cycling experience and a good level
              of fitness. The precise difficulty depends on the confirmed route
              and conditions.
            </p>
          </div>
          <div>
            <div className="at-eyebrow">Is This Expedition For You?</div>
            <h2 className="at-section-title">A rewarding adventure for experienced riders</h2>
            <p className="at-lead">
              This journey is suited to cyclists who enjoy discovering new
              terrain and are comfortable riding on a mixture of surfaces.
              Previous experience on gravel roads or mountain bike trails is
              recommended.
            </p>
            <p className="at-lead">
              If you are unsure whether the expedition matches your experience,
              contact our team. We can discuss the route, bicycle choice and
              riding requirements before you book.
            </p>
          </div>
        </div>
      </section>

      <section className="at-section at-faq" id="faq">
        <div className="at-container">
          <div className="at-eyebrow">Useful Information</div>
          <h2 className="at-section-title">Frequently asked questions</h2>
          <div className="at-faq-list">
            {faqs.map((faq) => (
              <article className="at-faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="at-section at-contact" id="enquire">
        <div className="at-container at-contact-grid">
          <div>
            <div className="at-eyebrow">Start Planning</div>
            <h2 className="at-section-title">Enquire about the Morocco Desert Cycling Expedition</h2>
            <p className="at-lead">
              Tell us about your preferred dates, group size and cycling
              experience. Our team will help you discuss the expedition and
              available arrangements.
            </p>
          </div>
          <div className="at-contact-form">
            <ContactEnquiryForm
              eventName="Morocco Desert Cycling Expedition"
              destination="Southern Morocco"
            />
          </div>
        </div>
      </section>

      <section className="at-final">
        <div className="at-final-image">
          <img src={images.final} alt="Desert landscape in Morocco" />
        </div>
        <div className="at-final-content">
          <div className="at-eyebrow">Mountain Bike Morocco</div>
          <h2>Ride beyond the ordinary</h2>
          <p>
            Discover a different side of Morocco through gravel roads, mountain
            trails, remote landscapes and unforgettable local encounters.
          </p>
          <div className="at-actions" style={{ justifyContent: "center" }}>
            <a className="at-button" href="#enquire">Plan Your Expedition</a>
          </div>
        </div>
      </section>

      <section className="at-related">
        <div className="at-container">
          <div className="at-eyebrow">Explore More Adventures</div>
          <h2 className="at-section-title">More cycling events in Morocco</h2>
          <div className="at-related-grid">
            {relatedEvents.map((event) => (
              <a className="at-related-card" href={event.href} key={event.title}>
                <div className="at-related-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="at-related-copy">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <span className="at-related-link">Discover Event →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="at-footer">
        Mountain Bike Morocco · Guided Cycling Adventures in Morocco
      </footer>
    </main>
  );
}