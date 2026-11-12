import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "School Sahara Cycling Expedition Morocco | Mountain Bike Morocco",
  description:
    "Discover Morocco through a school cycling expedition in the Sahara region. The programme is planned around students' ages, cycling experience and the school's learning objectives.",
  alternates: {
    canonical: "/events/school-cycling-sahara-expedition",
  },
};

const images = {
  hero: "/images/Desert-Agafay-Morocco.jpg",
  overview: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  terrain: "/images/e-mtb-tour-morocco.jpg",
  culture: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  galleryOne: "/images/Desert-Agafay-Morocco.jpg",
  galleryTwo: "/images/e-mtb-tour-morocco.jpg",
  galleryThree: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  galleryFour: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  galleryFive: "/images/e-mtb-tour-morocco.jpg",
  dayOne: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  dayTwo: "/images/Desert-Agafay-Morocco.jpg",
  dayThree: "/images/e-mtb-tour-morocco.jpg",
  difficulty: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  final: "/images/Desert-Agafay-Morocco.jpg",
};

const facts = [
  ["Duration", "9 days / 8 nights"],
  ["Destination", "Sahara region, Morocco – exact area to be confirmed"],
  ["Starting point", "To be confirmed"],
  ["Main activity", "School group cycling expedition"],
  ["Group format", "Private school group"],
  ["Difficulty", "Adapted to students' age and ability"],
  ["Supervision", "Staffing plan to be confirmed"],
  ["Accommodation", "To be confirmed in the proposal"],
  ["Dates", "Arranged with the school"],
];

const highlights = [
  { number: "01", title: "Discover Morocco by Bike", text: "Introduce students to an active way of exploring Morocco, with a cycling programme planned around the group's age, experience and learning objectives." },
  { number: "02", title: "Experience Desert Landscapes", text: "Discover southern Morocco's landscapes, with the precise Sahara area and cycling routes selected during school-trip planning." },
  { number: "03", title: "Build Confidence Together", text: "Encourage teamwork, communication and confidence through shared outdoor activities and achievable cycling challenges." },
  { number: "04", title: "Learn Beyond the Classroom", text: "Create opportunities to learn about local environments, geography and culture through a carefully planned educational journey." },
];

const beyondTrail = [
  { title: "Moroccan communities", text: "Where the itinerary allows, students can learn about daily life and local traditions through respectful, age-appropriate encounters arranged with local hosts." },
  { title: "Desert environments", text: "Explore the geography and ecology of Morocco's arid landscapes, with activities adapted to the location and season." },
  { title: "Teamwork and independence", text: "Shared activities can help students practise communication, cooperation and responsibility in an outdoor setting." },
  { title: "Learning through travel", text: "The school can discuss educational themes and learning outcomes with the organiser when shaping the final programme." },
];

const itinerary = [
  { day: "01", title: "Arrival in Morocco and Welcome Briefing", location: "Arrival city and accommodation to be confirmed", distance: "No cycling distance scheduled", riding: "Arrival, orientation and equipment checks", image: images.dayOne, text: "Arrive in Morocco and meet the expedition team. After the transfer and check-in arrangements, students and teachers receive an introduction to the nine-day journey, group procedures and the educational themes of the expedition. Bicycle and safety equipment checks are completed before the riding programme begins.", details: ["Arrival and transfer to the confirmed accommodation", "Welcome meeting for students, teachers and guides", "Bicycle, helmet and personal equipment checks", "Introduction to the itinerary and safety procedures"] },
  { day: "02", title: "Travel Towards the Sahara Region", location: "Route and overnight stop to be confirmed", distance: "As per the confirmed transfer plan", riding: "Landscape discovery and introductory activities", image: images.dayTwo, text: "Travel towards the selected Sahara-region base, discovering the changing landscapes of Morocco along the way. The school programme can include suitable stops and educational activities. The final travel route, timings and overnight arrangements will be set out in the confirmed itinerary.", details: ["Journey towards the agreed Sahara-region destination", "Supervised stops and landscape observation", "Introduction to local geography and the desert environment", "Overnight stay at the confirmed accommodation"] },
  { day: "03", title: "First Sahara Cycling Day", location: "Sahara-region riding area to be confirmed", distance: "Route adapted to student ability", riding: "Supported introductory cycling stage", image: images.dayThree, text: "Begin the cycling programme on a route selected for the students’ ages, confidence and experience. Guides introduce the riding area, group spacing and regrouping procedures. The pace and distance are adapted to the group, with regular breaks and hydration stops.", details: ["Daily briefing and route-condition check", "Supported ride on an appropriate introductory route", "Planned rest, regrouping and hydration stops", "Reflection on the terrain and riding experience"] },
  { day: "04", title: "Desert Landscapes and Team Challenges", location: "Agreed riding area and surrounding landscape", distance: "Distance confirmed in the final route plan", riding: "Guided cycling and teamwork activities", image: images.dayTwo, text: "Continue exploring the region by bike, building confidence and cooperation through shared outdoor challenges. The route will be selected to suit the group and local conditions. Educational moments can focus on the landscape, climate and responsible travel in arid environments.", details: ["Guided cycling on a suitable route", "Team-based challenges and group riding skills", "Learning about arid landscapes and local environments", "Review of the day's experience with guides and teachers"] },
  { day: "05", title: "Local Culture and Community Discovery", location: "Community visit location to be agreed", distance: "Cycling or transfer activity as confirmed", riding: "Cultural learning and optional suitable ride", image: images.culture, text: "Set aside time to understand the human and cultural context of the region. Subject to local arrangements and the school’s objectives, the day may include a respectful community encounter, local heritage discovery or a shorter ride connecting nearby areas.", details: ["Age-appropriate introduction to local culture and heritage", "Community or local-host activity where arranged", "Optional short cycling activity if suitable", "Discussion of responsible and respectful travel"] },
  { day: "06", title: "Sahara Expedition Ride", location: "Main expedition route to be confirmed", distance: "Distance and elevation set to the group's level", riding: "Main guided cycling stage", image: images.dayThree, text: "Take on the main cycling stage of the expedition, planned around the group’s ability and the conditions of the chosen area. Guides and school staff follow the agreed supervision and support plan, with suitable regrouping points, breaks and contingency arrangements.", details: ["Pre-ride briefing and equipment inspection", "Main guided ride on the agreed route", "Support, regrouping and hydration arrangements", "End-of-day equipment check and group debrief"] },
  { day: "07", title: "Further Exploration and Learning", location: "Sahara-region activity area to be confirmed", distance: "Adapted cycling or non-riding activities", riding: "Exploration, skills and educational activities", image: images.overview, text: "Use another day in the region to deepen the experience. Depending on the final location and student profile, the programme may include a further supported ride, cycling skills practice, environmental observation or other supervised learning activities.", details: ["Cycling skills or supported exploration as appropriate", "Learning activity linked to the school's objectives", "Time for observation, questions and group discussion", "Preparation for the return journey"] },
  { day: "08", title: "Return Journey and Expedition Reflection", location: "Return route and overnight stop to be confirmed", distance: "As per the confirmed transfer plan", riding: "Travel day and closing reflection", image: images.dayOne, text: "Begin the return journey according to the confirmed transport plan. The school can use this stage for a guided reflection on the expedition, the landscapes visited, teamwork and learning outcomes. The overnight location and travel schedule will be confirmed in advance.", details: ["Departure from the Sahara-region base", "Return travel with planned supervised stops", "Group reflection and review of learning outcomes", "Overnight stay according to the final itinerary"] },
  { day: "09", title: "Departure from Morocco", location: "Departure airport to be confirmed", distance: "No cycling distance scheduled", riding: "Final check-out and departure", image: images.final, text: "After breakfast and check-out, transfer to the departure point for the journey home. The team completes final group and equipment checks and supports the school’s departure arrangements in line with the confirmed travel schedule.", details: ["Breakfast and accommodation check-out", "Final student, luggage and equipment checks", "Transfer to the confirmed departure point", "End of the nine-day school expedition"] },
];

const inclusions = [
  "Expedition planning and school-group coordination, as specified in the final proposal",
  "Cycling activities and route support listed in the confirmed programme",
  "Qualified guides, instructors and support staff at the agreed staffing ratio",
  "Bicycles, helmets and protective equipment only where expressly included",
  "Accommodation and meals only where listed in the school proposal",
  "Transfers, support vehicle and educational activities only where confirmed",
];

const exclusions = [
  "International flights and travel to and from Morocco unless stated otherwise",
  "Travel, medical and personal accident insurance",
  "Personal spending and services not listed in the final proposal",
  "Equipment or bicycle hire not expressly included",
  "Accommodation, meals and transfers not specified as included",
  "Additional activities requested outside the agreed school programme",
  "Any service not expressly confirmed in the final written itinerary",
];

const preparation = [
  { title: "Student cycling ability", text: "Share the students' ages, cycling experience and confidence levels before the programme is designed. Routes and daily activity levels should be suitable for the group and agreed with the school." },
  { title: "Safety and supervision", text: "Agree supervision responsibilities, staff-to-student ratios, emergency contacts, medical information procedures and safeguarding arrangements between the school and organiser before travel." },
  { title: "Clothing and protection", text: "Students should have suitable cycling clothing, closed footwear, sun protection and weather-appropriate layers. Helmet and equipment provision must be confirmed in the final proposal." },
  { title: "Hydration and personal essentials", text: "Prepare reusable water bottles, personal medication, dietary information and essential travel documents. The organiser will advise on additional items for the confirmed season and location." },
];

const faqs = [
  { q: "How long is the School Sahara Cycling Expedition?", a: "The School Sahara Cycling Expedition is a 9-day programme (8 nights). Exact dates, route, accommodation and daily arrangements are confirmed with the school before booking." },
  { q: "Where in the Sahara will the expedition take place?", a: "The exact destination and riding area need to be agreed in the school proposal. The final location will determine the route, accommodation, transfers and activities." },
  { q: "Is the expedition suitable for students with different cycling abilities?", a: "The programme can be planned around students' ages and experience. Please provide the school's group profile so the organiser can discuss suitable routes and activity levels." },
  { q: "What supervision and safety arrangements are provided?", a: "Staffing, guide qualifications, supervision ratios, safeguarding responsibilities and emergency procedures must be agreed with the school and recorded in the final plan before booking." },
  { q: "Are bicycles and helmets included?", a: "Equipment provision is not assumed. The school should confirm whether students will bring their own bicycles or require rental bikes, helmets and other protective equipment." },
  { q: "Are accommodation, meals and transport included?", a: "These arrangements depend on the school's chosen programme. The written proposal will specify which accommodation, meals, transfers and support services are included." },
  { q: "Can the expedition include educational activities?", a: "Educational themes and suitable activities can be discussed during planning. The school should share its learning objectives so they can be considered alongside the cycling programme." },
  { q: "How can a school request a proposal?", a: "Use the enquiry form and include the school's preferred dates, student age range, group size and cycling experience. The team can then discuss a suitable programme and provide confirmed details." },
];

const relatedEvents = [
  { category: "DESERT CYCLING EVENT", title: "Agafay Desert Cycling Challenge", text: "Discover the rocky desert landscapes near Marrakech on a dedicated cycling event.", image: "/images/Desert-Agafay-Morocco.jpg", href: "/events/agafay-desert-cycling-challenge" },
  { category: "MTB EVENT", title: "Atlas Mountains MTB Gathering", text: "Discover another group cycling event in Morocco’s High Atlas.", image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg", href: "/events/atlas-mountains-mtb-gathering" },
  { category: "E-MTB ADVENTURE", title: "Marrakech to Sahara E-MTB Caravan", text: "Explore Morocco's changing landscapes on a multi-stage electric cycling journey.", image: "/images/e-mtb-tour-morocco.jpg", href: "/events/marrakech-to-sahara-emtb-caravan" },
];

export default function SchoolCyclingSaharaExpeditionPage() {
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
            alt="Rocky desert landscape near Marrakech, Morocco"
            fetchPriority="high"
          />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · SAHARA REGION · SCHOOL CYCLING EXPEDITION</span>
          <h1>School Sahara Cycling Expedition</h1>
          <p className="at-hero-description">
            Discover Morocco through a school cycling expedition in the Sahara region. Explore desert landscapes, build confidence and learn together through a programme planned around the students’ ages, abilities and the school’s objectives.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="#enquiry">
              Enquire About the Expedition <span>→</span>
            </a>
            <a className="at-hero-back" href="/events">
              Explore All Events
            </a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>SCHOOL GROUP</strong><span>Private expedition</span></div>
            <div><strong>SAHARA REGION</strong><span>Morocco · exact area TBC</span></div>
            <div><strong>CYCLING</strong><span>Student-friendly routes</span></div>
            <div><strong>DATES FLEXIBLE</strong><span>Arranged with the school</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>9 days / 8 nights</strong></div>
          <div className="at-fact"><span>Region</span><strong>Sahara region, Morocco</strong></div>
          <div className="at-fact"><span>Event style</span><strong>School group expedition</strong></div>
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
              alt="Cyclist preparing for an outdoor cycling experience"
              loading="lazy"
            />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A SCHOOL ADVENTURE IN MOROCCO</span>
            <h2 className="at-heading">
              Discover Morocco Together by Bike
            </h2>
            <p className="at-copy">
              The School Sahara Cycling Expedition is designed for schools seeking an active and educational way to discover Morocco. The programme combines cycling with opportunities to learn about the landscapes, communities and environments of the region. Activities are planned around the students’ ages, experience and the school’s objectives.
            </p>
            <p className="at-copy">
              The Sahara region includes varied arid landscapes, oasis areas, villages and desert-edge terrain. The exact destination and cycling routes will be selected with the school and confirmed in the final itinerary. The Agafay image used on this page represents a rocky desert landscape near Marrakech; it should not be mistaken for the Sahara dunes.
            </p>
            <p className="at-copy">
              Contact the team to discuss the school’s preferred dates, student age range, group size, cycling experience and learning objectives. The expedition lasts 9 days and is planned around the students’ ages, experience and learning objectives. The exact route and practical arrangements will be confirmed in a written proposal.
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
              A School Expedition Planned Around Your Students
            </h2>
            <p className="at-copy">
              A successful school expedition starts with a clear understanding of the students’ ages, abilities, learning objectives and supervision requirements. Share the group profile and practical needs so the programme can be planned responsibly.
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
            <h3>School Sahara Cycling Expedition</h3>
            <p>
              A nine-day school-group cycling expedition through Morocco’s Sahara region, with the exact route and practical arrangements confirmed with the school.
            </p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>9 days / 8 nights</strong></li>
              <li><span>Destination</span><strong>Sahara region</strong></li>
              <li><span>Discipline</span><strong>Cycling</strong></li>
              <li><span>Event format</span><strong>Private school group</strong></li>
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
              <span className="at-eyebrow">THE SCHOOL EXPEDITION</span>
              <h2 className="at-heading">
                Highlights of the School Sahara Cycling Expedition
              </h2>
            </div>
            <p>
              A school adventure built around cycling, teamwork and learning about the landscapes and communities of southern Morocco. Activities will be adapted to the group and confirmed with the school.
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
              alt="Cycling on an outdoor route in Morocco"
              loading="lazy"
            />
          </div>
          <div>
            <span className="at-eyebrow">THE RIDING ENVIRONMENT</span>
            <h2 className="at-heading">
              Desert Landscapes and a Shared Cycling Experience
            </h2>
            <p className="at-copy">
              The Sahara region offers a distinctive setting for an outdoor school expedition. Depending on the confirmed destination, landscapes may include arid plains, rocky desert terrain, oasis areas and routes connecting local communities. The exact terrain and cycling conditions must be checked when the itinerary is planned.
            </p>
            <p className="at-copy">
              The expedition route has not been fixed on this page. The organiser and school should confirm the location, route length, surface, activity level, support arrangements and group pace before travel is booked.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Desert and oasis landscapes in southern Morocco</li>
              <li><span>02</span>Suitable cycling routes selected for the student group</li>
              <li><span>03</span>Route and technical level to be confirmed</li>
              <li><span>04</span>Group support and supervision agreed with the school</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR PARTICIPATION</span>
            <h2 className="at-heading">School Expedition Information</h2>
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
            alt="Outdoor cycling experience in Morocco"
            loading="lazy"
          />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">
            Discover the Landscapes and Communities of Morocco
          </h2>
          <p className="at-copy">
            The Sahara region are not only a cycling destination. They are
            also home to Amazigh communities, traditional villages and a
            distinctive local culture. The expedition offers an opportunity to
            experience this setting alongside other students, with any cultural
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
              <span className="at-eyebrow">DESERT AND CYCLING MOMENTS</span>
              <h2 className="at-heading">
                The Landscapes of the Morocco Expedition
              </h2>
            </div>
            <p>
              A visual introduction to Morocco’s outdoor landscapes and cycling experiences. The precise expedition destination and routes will be confirmed with the school.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item">
              <img
                src={images.galleryOne}
                alt="Rocky desert landscape near Marrakech, Morocco"
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
                alt="Cycling on a natural trail"
                loading="lazy"
              />
            </div>
            <div className="at-gallery-item">
              <img
                src={images.galleryFour}
                alt="Outdoor cycling and adventure scenery"
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
              <span className="at-eyebrow">SCHOOL EXPEDITION PROGRAMME</span>
              <h2 className="at-heading">Indicative Expedition Programme</h2>
            </div>
            <p>
              This is a planning outline for a school-group expedition, not a
              confirmed schedule. Meeting points, ride routes, timings,
              accommodation and included services must be confirmed by the
              organisers before registration.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This nine-day outline gives the school a clear programme structure. The exact routes, daily distances, staffing, meals, transfers and accommodation will be confirmed in the written school proposal and final itinerary.
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
              <h2 className="at-heading">What Can Be Included?</h2>
            </div>
            <p>
              Services will be confirmed in the written proposal. The following list is a planning checklist, not a statement that each service is automatically included.
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
                Preparing for the School Cycling Expedition
              </h2>
            </div>
            <p>
              Prepare suitable bicycles, clothing and personal equipment for the agreed cycling activities.
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
              alt="Cycling equipment for an outdoor school expedition"
              loading="lazy"
            />
          </div>
          <div>
            <span className="at-eyebrow">KNOW YOUR RIDE</span>
            <h2 className="at-heading">
              Student Ability, Supervision and Safety
            </h2>
            <p className="at-copy">
              The physical and technical demands of the expedition depend on
              the final route and group format. Outdoor cycling can involve uneven surfaces, changing weather and variable terrain. The school should provide an accurate overview of students’ cycling abilities so that the programme can be planned at an appropriate level.
            </p>
            <p className="at-copy">
              Before the event, the organisers should communicate the expected
              student level, route conditions, equipment requirements, group
              group cycling procedures and emergency arrangements. The school and organiser must agree supervision responsibilities, safeguarding procedures, suitable equipment and insurance before the expedition.
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
              Find answers to common questions about planning a school cycling expedition in Morocco. Contact the team to discuss the student group and confirmed arrangements.
            </p>
            <a className="at-text-link" href="#enquiry">
              Ask About the Expedition →
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
              <span className="at-eyebrow">SCHOOL GROUP ENQUIRY</span>
              <h2 className="at-heading">
                Enquire About the School Sahara Cycling Expedition
              </h2>
            </div>
            <p>
              Tell us the school name, student age range, group size, preferred dates and cycling experience. Our team can discuss a suitable programme and provide a written proposal.
            </p>
          </div>

          <div className="at-event-enquiry-card">
            <ContactEnquiryForm
              eventName="School Sahara Cycling Expedition"
              destination="Sahara region, Morocco – exact area to be confirmed"
            />
          </div>
        </div>
      </section>

      <section className="at-final-cta">
        <div className="at-final-image">
          <img
            src={images.final}
            alt="Cycling in Morocco’s outdoor landscapes"
            loading="lazy"
          />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">PLAN YOUR SCHOOL EXPEDITION</span>
          <h2>Ready to Plan a School Cycling Expedition in Morocco?</h2>
          <p>
            Contact Mountain Bike Morocco to discuss your school’s preferred dates, student age range, group size and learning objectives. The team can help prepare a programme proposal with clear practical arrangements.
          </p>
          <a className="at-button" href="#enquiry">
            Enquire About the Expedition <span>→</span>
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
              to gravel journeys and multi-stage electric cycling events.
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
              Discover Morocco by bike. Explore the Sahara region,
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
              <a href="/destinations">Morocco</a>
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
          <span>Ride the Morocco. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}