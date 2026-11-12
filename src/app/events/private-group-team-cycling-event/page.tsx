import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Private Group or Team Cycling Event Morocco | Mountain Bike Morocco",
  description:
    "Plan a private group or team cycling event in Morocco with road, gravel, mountain-bike or e-bike options. Tailor the routes, dates and support to your group.",
  alternates: {
    canonical: "/events/private-group-team-cycling-event",
  },
};

const images = {
  hero: "/images/group-cycling-tour-morocco.jpg",
  overview: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  terrain: "/images/gravel-cycling-morocco.jpg",
  culture: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  galleryOne: "/images/group-cycling-tour-morocco.jpg",
  galleryTwo: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  galleryThree: "/images/e-mtb-tour-morocco.jpg",
  galleryFour: "/images/gravel-cycling-morocco.jpg",
  galleryFive: "/images/day-ebike-tour-from-marrakech.jpg",
  dayOne: "/images/group-cycling-tour-morocco.jpg",
  dayTwo: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  dayThree: "/images/gravel-cycling-morocco.jpg",
  difficulty: "/images/e-mtb-tour-morocco.jpg",
  final: "/images/group-cycling-tour-morocco.jpg",
};

const facts = [
  ["Duration", "Tailored to your group's schedule"],
  ["Destination", "Morocco – region selected with your group"],
  ["Meeting point", "Agreed during event planning"],
  ["Main activity", "Private group or team cycling"],
  ["Riding style", "Road, gravel, MTB or e-bike options"],
  ["Difficulty", "Adapted to the group's ability"],
  ["Group format", "Private booking for your team"],
  ["Support", "Discussed in the event proposal"],
  ["Dates", "Arranged around your availability"],
];

const highlights = [
  { number: "01", title: "Your Group, Your Ride", text: "Bring colleagues, friends, a club or a private team together for a cycling experience shaped around your group size, interests and preferred pace." },
  { number: "02", title: "Choose Your Cycling Style", text: "Discuss road cycling, gravel routes, mountain biking or e-bike experiences and select the format that best suits your participants." },
  { number: "03", title: "Explore Morocco Together", text: "Choose from mountain landscapes, rural valleys, desert-edge scenery and coastal routes, with the final region selected during planning." },
  { number: "04", title: "Flexible Event Planning", text: "Coordinate dates, route length, daily riding, support and optional experiences around your team's objectives and available time." },
];

const beyondTrail = [
  { title: "Team connection", text: "A shared cycling challenge creates time away from the usual routine and gives colleagues or club members a common experience." },
  { title: "A sense of achievement", text: "Choose a suitable route and group objective, from a relaxed discovery ride to a more demanding cycling challenge." },
  { title: "Moroccan landscapes", text: "Build the event around the scenery and riding environment that best match your group, season and preferred cycling discipline." },
  { title: "More than a ride", text: "Where requested and available, add local food, cultural visits or other group activities to complement the cycling programme." },
];

const itinerary = [
  { day: "01", title: "Welcome and Group Ride Planning", location: "Meeting point and region agreed with your team", distance: "Set to the group's schedule", riding: "Welcome, bike checks and introductory ride if requested", image: images.dayOne, text: "Begin with a welcome and a review of the group's objectives, cycling experience and practical requirements. The team can confirm the route plan, riding pace, equipment, support arrangements and any optional activities. If included in the agreed programme, an introductory ride can help participants settle in and check their bicycles.", details: ["Welcome and introductions for the group", "Review of the agreed event plan and riding expectations", "Bicycle and equipment checks", "Optional introductory ride or team activity"] },
  { day: "02", title: "The Main Team Cycling Experience", location: "Selected riding area in Morocco", distance: "Route tailored to the group", riding: "Private group ride in the chosen discipline", image: images.dayTwo, text: "Enjoy the main cycling activity on a route selected for the group's preferred discipline, ability and objectives. The event can be planned as a road ride, gravel adventure, mountain-bike outing or e-bike experience. Exact route, distance, elevation, technical level, ride leaders and support services will be agreed before the event.", details: ["Ride briefing and review of route conditions", "Private group ride at the agreed pace", "Planned regrouping points and rest stops", "Optional team challenge or local experience"] },
  { day: "03", title: "Final Ride and Group Farewell", location: "Final riding area and departure point to be agreed", distance: "Optional route or closing activity", riding: "Final group ride or activity, according to your plan", image: images.dayThree, text: "Conclude the event with a final ride or a relaxed group activity, depending on the schedule agreed with your team. Allow time for photographs, a review of the experience and onward travel. This is a sample three-part event outline, not a fixed three-day package; the actual duration and sequence are tailored to your booking.", details: ["Final ride or group activity as agreed", "Time for photographs and team reflection", "Equipment and personal belongings check", "Departure according to the confirmed arrangements"] },
];

const inclusions = [
  "Private event planning and coordination, as specified in the proposal",
  "Route planning for the selected cycling discipline and group ability",
  "Guides, ride leaders or instructors only where confirmed in writing",
  "Bicycle and equipment hire only where expressly included",
  "Accommodation and meals only where listed in the proposal",
  "Support vehicle, transfers, refreshments and team activities only where confirmed",
];

const exclusions = [
  "Travel to and from Morocco unless stated otherwise",
  "Travel, medical and personal accident insurance",
  "Personal bicycle, helmet, clothing and riding equipment unless arranged",
  "Accommodation, meals and drinks not listed in the proposal",
  "Transfers and transport not specifically included",
  "Personal expenses, tips and optional activities",
  "Any service not expressly listed in the final event proposal",
];

const preparation = [
  { title: "Share your group's profile", text: "Tell us the number of participants, their cycling experience, preferred discipline and any relevant fitness or accessibility considerations. This helps shape a suitable event." },
  { title: "Choose the cycling format", text: "Decide whether your team prefers road cycling, gravel, mountain biking or e-bikes. The route and technical level will be planned around that choice." },
  { title: "Confirm equipment needs", text: "Let the team know whether participants will bring their own bicycles or need rental options. Helmet, clothing, spares and protection requirements will be confirmed for the selected route." },
  { title: "Agree practical arrangements", text: "Confirm preferred dates, meeting point, accommodation, meals, transfers, support and any additional activities in the written event proposal before travel." },
];

const faqs = [
  { q: "Who can book a private group or team cycling event?", a: "The event can be discussed with companies, teams, cycling clubs, groups of friends and private parties. The programme will be shaped around the group's size, interests and cycling experience." },
  { q: "Can we choose the cycling discipline?", a: "Yes. You can discuss road cycling, gravel, mountain biking or e-bike experiences. The available routes and suitable format depend on the chosen region, season and participant profile." },
  { q: "How long does the event last?", a: "The duration is flexible and arranged with your group. The three programme stages shown here are an example structure, not a fixed package length." },
  { q: "Can the event be organised for a company team?", a: "Yes. Share your team objectives, preferred dates, group size and desired level of activity so the organiser can discuss a suitable private event." },
  { q: "Can routes be adapted for different ability levels?", a: "The route, pace and activity format can be discussed around the group's experience. Where abilities vary, the organiser can review suitable options and support arrangements before confirming the plan." },
  { q: "Are bicycles, guides and support vehicles included?", a: "These services are not automatically included. Bicycle hire, guides, ride leaders, mechanical assistance and support vehicles will be specified in the written proposal." },
  { q: "Can we include accommodation, meals or team activities?", a: "These can be discussed as part of the event plan. Any accommodation, meals, transfers or additional activities will be confirmed in the proposal." },
  { q: "How do we request a private event proposal?", a: "Use the enquiry form and share your preferred dates, group size, cycling discipline, experience levels and any team objectives. Mountain Bike Morocco can then discuss the options with you." },
];

const relatedEvents = [
  { category: "GROUP CYCLING EVENT", title: "School Sahara Cycling Expedition", text: "A school-focused cycling journey with an educational programme in Morocco.", image: "/images/Desert-Agafay-Morocco.jpg", href: "/events/school-cycling-sahara-expedition" },
  { category: "DESERT CYCLING EVENT", title: "Agafay Desert Cycling Challenge", text: "Bring your group to the rocky desert landscapes near Marrakech for a cycling challenge.", image: "/images/Desert-Agafay-Morocco.jpg", href: "/events/agafay-desert-cycling-challenge" },
  { category: "MTB EVENT", title: "Atlas Mountains MTB Gathering", text: "Meet fellow riders and discover the trails and mountain scenery of the High Atlas.", image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg", href: "/events/atlas-mountains-mtb-gathering" },
];

export default function PrivateGroupTeamCyclingEventPage() {
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
          <span className="at-eyebrow">MOROCCO · PRIVATE GROUP · TEAM CYCLING</span>
          <h1>Private Group or Team Cycling Event</h1>
          <p className="at-hero-description">
            Bring colleagues, friends or club members together for a private cycling experience in Morocco. Choose road, gravel, mountain biking or e-bike riding, with routes and arrangements planned around your group.
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
            <div><strong>FLEXIBLE</strong><span>Private event</span></div>
            <div><strong>MOROCCO</strong><span>Morocco</span></div>
            <div><strong>GROUP RIDES</strong><span>Mountain biking</span></div>
            <div><strong>DATES TBC</strong><span>Ask for details</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>Flexible</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Morocco</strong></div>
          <div className="at-fact"><span>Event style</span><strong>Private team cycling</strong></div>
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
            <span className="at-eyebrow">A PRIVATE CYCLING EXPERIENCE</span>
            <h2 className="at-heading">
              Bring Your Team Together Through Cycling
            </h2>
            <p className="at-copy">
              The Private Group or Team Cycling Event is designed for companies, clubs, friends and private groups who want to experience Morocco together by bike. Choose a cycling discipline and shape the programme around your group's interests, experience and available time.
            </p>
            <p className="at-copy">
              Morocco offers a wide choice of cycling environments, from mountain trails and rural valleys to gravel tracks, coastal roads and desert-edge landscapes. The destination and route will be selected with your group and confirmed in the event proposal.
            </p>
            <p className="at-copy">
              Whether you are planning a company team day, a club gathering or a private cycling holiday, contact the team to discuss dates, group size, riding style and practical arrangements.
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
              A Private Event Built Around Your Team
            </h2>
            <p className="at-copy">
              A successful private event starts with understanding your group's size, objectives, preferred cycling discipline and experience. Share these details so the route, pace and practical arrangements can be planned accordingly.
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
            <h3>Private Group or Team Cycling Event</h3>
            <p>
              A private cycling programme planned around your team and preferred riding style.
            </p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>Flexible</strong></li>
              <li><span>Destination</span><strong>Morocco</strong></li>
              <li><span>Discipline</span><strong>Choose your style</strong></li>
              <li><span>Event format</span><strong>Private group</strong></li>
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
                Highlights of the Private Group or Team Cycling Event
              </h2>
            </div>
            <p>
              A private cycling experience shaped around your group, with a choice of riding disciplines, destinations and optional activities.
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
              Choose the Cycling Landscape That Suits Your Group
            </h2>
            <p className="at-copy">
              Morocco offers varied terrain for different cycling disciplines, from paved mountain roads and quiet country lanes to gravel tracks, natural singletrack and desert-edge routes. The best setting depends on your group's chosen style, season and ability.
            </p>
            <p className="at-copy">
              Your event route is planned with your team. Route length, elevation, surface, technical level, daily pace and support arrangements will be confirmed before the event.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Road, gravel, MTB or e-bike options</li>
              <li><span>02</span>Mountain, countryside, coast or desert-edge settings</li>
              <li><span>03</span>Routes adapted to the group's ability</li>
              <li><span>04</span>Private event planning and agreed support</li>
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
            Discover Morocco Together Beyond the Ride
          </h2>
          <p className="at-copy">
            A private cycling event can be about more than time on the bike. Depending on your chosen region and schedule, your group can add local food, cultural visits or other shared experiences to complement the ride.
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
                A Cycling Experience Designed for Your Group
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
              <span className="at-eyebrow">YOUR PRIVATE EVENT</span>
              <h2 className="at-heading">Suggested Event Programme</h2>
            </div>
            <p>
              This is an illustrative three-stage programme, not a fixed-duration package. The number of days, meeting point, routes, timings, accommodation and included services will be agreed with your group before confirmation.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The stages below illustrate how a private event could be structured. The actual duration, distances, elevation, guiding, meals, transfers and accommodation depend on the proposal agreed with your group.
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
              The physical and technical demands of your private event depend on
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
                Enquire About Your Private Cycling Event
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
              eventName="Private Group or Team Cycling Event"
              destination="Morocco – destination to be agreed"
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
          <h2>Ready to Plan Your Private Cycling Event?</h2>
          <p>
            Tell Mountain Bike Morocco about your group, preferred cycling style and dates. We will discuss the destination, route options and arrangements for your private event.
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
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}