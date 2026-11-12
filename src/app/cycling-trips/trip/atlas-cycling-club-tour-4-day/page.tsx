import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Atlas Cycling Club Tour – 4 Days | Mountain Bike Morocco",
  description:
    "Bring your cycling club to Morocco's High Atlas for a four-day guided group cycling tour. Ride scenic mountain roads and valley routes, discover traditional villages and enjoy a club itinerary shaped around your group's pace and experience.",
  alternates: {
    canonical: "/cycling-trips/trip/atlas-cycling-club-tour-4-day",
  },
};

const images = {
  hero: "/images/group-cycling-atlas-mountains.jpg",
  overview: "/images/atlas-cycling-adventure.jpg",
  mountains: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  road: "/images/group-cycling-tour-morocco.jpg",
  village: "/images/berber-villages-cycling-expeditions.jpg",
  valley: "/images/morocco-berber-valley.jpg",
  cycling: "/images/morocco-group-cycling-adventure.jpg",
  final: "/images/cycling-group-events-morocco.jpg",
};

const facts = [
  ["Duration", "4 days / 3 nights"],
  ["Destination", "High Atlas Mountains, Morocco"],
  ["Starting point", "Marrakech – meeting point to be confirmed"],
  ["Cycling style", "Guided cycling club tour"],
  ["Difficulty", "Adapted to the group's agreed riding level"],
  ["Experience", "Suitable for organised clubs and experienced group riders"],
  ["Tour format", "Private club or organised cycling group"],
  ["Accommodation", "As confirmed in your personalised trip proposal"],
  ["Best season", "Spring and autumn, subject to mountain conditions"],
];

const highlights = [
  {
    number: "01",
    title: "A Four-Day Atlas Club Tour",
    text: "Bring your club together for four days of cycling in Morocco's High Atlas. Enjoy a guided programme with time on the road, scenic stops and shared experiences away from your usual training routes.",
  },
  {
    number: "02",
    title: "Routes Planned for Your Group",
    text: "The route plan is discussed around your club's preferred riding style, fitness, experience and group size. Daily distances, climbing and pace are agreed before the trip is confirmed.",
  },
  {
    number: "03",
    title: "Mountain Roads and Valley Landscapes",
    text: "Ride through changing Atlas scenery, from open mountain slopes to rural valleys and traditional villages. The exact roads and stages are selected according to the agreed itinerary and local conditions.",
  },
  {
    number: "04",
    title: "Ride Together, Discover Together",
    text: "Enjoy the atmosphere of a club trip with a local team supporting the agreed programme. Build in time for refreshments, photographs and shared meals between the day's rides.",
  },
];

const beyondTrail = [
  {
    title: "The High Atlas Mountains",
    text: "Discover the dramatic mountain landscapes surrounding the selected riding area, with broad views, changing elevations and quiet roads linking the valleys.",
  },
  {
    title: "Traditional Villages and Local Life",
    text: "Depending on the route, ride through or near traditional mountain villages and pause to appreciate the rural character of the Atlas region.",
  },
  {
    title: "A Club Experience Beyond Training",
    text: "Share four days on the bike with your club, combining purposeful riding with time to enjoy the scenery, local food and company of fellow cyclists.",
  },
  {
    title: "A Programme Shaped Around Your Club",
    text: "Discuss your preferred daily distances, climbing, pace and support needs before travel. The final route plan is confirmed with your group and local team.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Marrakech to the High Atlas – Arrival and First Ride",
    location: "Marrakech – selected High Atlas riding area",
    distance: "To be confirmed",
    riding: "Transfer, bike checks and introductory group ride",
    image: "/images/atlas-cycling-adventure.jpg",
    text: "Meet the local team at the agreed point in Marrakech and travel towards the selected High Atlas base. After arrival, check bicycles, tyres, brakes, gearing and group equipment. If timing and conditions allow, enjoy a relaxed introductory ride to stretch the legs, settle into the local roads and review the plan for the following stages.",
    details: [
      "Meet the local team and review the four-day club programme",
      "Transfer from Marrakech if included in your confirmed arrangements",
      "Complete bicycle and equipment checks before riding",
      "Review group pace, ride etiquette and support arrangements",
      "Enjoy an introductory spin if timing and conditions allow",
      "Settle into the confirmed accommodation arrangements",
    ],
  },
  {
    day: "02",
    title: "High Atlas Roads and Mountain Villages",
    location: "High Atlas – selected mountain and valley roads",
    distance: "To be confirmed",
    riding: "Main guided club ride",
    image: "/images/group-cycling-tour-morocco.jpg",
    text: "After breakfast, set out on a guided ride through the selected Atlas riding area. The route is planned around the club's agreed level and may link mountain roads, valley sections and traditional settlements. The local team will help manage the day's timing and agreed support arrangements, with breaks for refreshments and views along the way.",
    details: [
      "Review the day's route, weather and riding conditions",
      "Ride a scenic stage through the selected Atlas area",
      "Regroup at agreed points to keep the club together",
      "Pause for refreshments and photographs along the route",
      "Return to the accommodation for the evening",
    ],
  },
  {
    day: "03",
    title: "A Longer Atlas Club Ride – Valleys and Open Mountain Scenery",
    location: "High Atlas – selected valley and mountain route",
    distance: "To be confirmed",
    riding: "Full-day group cycling stage",
    image: "/images/morocco-group-cycling-adventure.jpg",
    text: "Enjoy the principal riding day of the tour, following a route selected for the group's preferred distance, climbing and pace. The stage may combine longer valley roads with mountain sections and scenic viewpoints. Exact distances and elevation gain are confirmed during planning, allowing the club to prepare for a rewarding day that suits the riders taking part.",
    details: [
      "Start after breakfast with a briefing from the local team",
      "Ride the agreed longer stage through Atlas landscapes",
      "Keep a steady club pace with planned regrouping points",
      "Allow time for a lunch or refreshment stop as arranged",
      "Return to the base and enjoy the final evening together",
    ],
  },
  {
    day: "04",
    title: "Final Scenic Ride and Return to Marrakech",
    location: "High Atlas – Marrakech",
    distance: "To be confirmed",
    riding: "Final ride and departure transfer",
    image: "/images/cycling-group-events-morocco.jpg",
    text: "Enjoy a final morning ride or shorter scenic loop, depending on departure timing and the club's preference. After the ride, return to the agreed meeting point, prepare the bicycles for transport if required and travel back to Marrakech when transfers are part of your confirmed arrangements. The four-day programme concludes with a shared finish to your Atlas club experience.",
    details: [
      "Enjoy breakfast and review the departure schedule",
      "Take a final scenic ride if timing allows",
      "Prepare bicycles and luggage for the return journey",
      "Transfer to Marrakech if included in your proposal",
      "Conclude the four-day Atlas Cycling Club Tour",
    ],
  },
];

const inclusions = [
  "Four-day cycling club programme planning",
  "Route planning based on the club's agreed riding level and preferences",
  "Local cycling guide or ride support as specified in your proposal",
  "Selected Atlas riding stages and daily route arrangements",
  "Accommodation only when specified in your proposal",
  "Bicycle rental if specifically included",
  "Luggage and bicycle transfers only when confirmed",
  "Transfers from Marrakech if specified in your proposal",
  "Meals and refreshments only when listed in your proposal",
  "On-route support only as detailed in your confirmed arrangements",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Bicycles unless included in your proposal",
  "Personal cycling clothing, shoes and equipment",
  "Transfers unless specifically included",
  "Accommodation unless listed in your proposal",
  "Meals and drinks not specified in your itinerary",
  "Personal expenses and tips",
  "Additional activities not listed in your proposal",
  "Services not specifically listed in your proposal",
];

const preparation = [
  {
    title: "Share Your Club's Riding Profile",
    text: "Tell us the number of riders, typical group pace, fitness level and preferred daily distances. Mention the range of abilities within the club so the route plan and regrouping arrangements can be discussed before travel.",
  },
  {
    title: "Prepare Your Road or Touring Bike",
    text: "Bring a well-maintained bicycle suited to the agreed route, with reliable brakes, tyres, gearing and lights where needed. Discuss bike transport, rental options, sizes and mechanical support before confirming the trip.",
  },
  {
    title: "Bring Your Cycling Essentials",
    text: "Pack a correctly fitting helmet, gloves, cycling shoes, padded shorts, eye protection, water bottles and sun protection. A lightweight windproof or waterproof layer is useful when riding at changing mountain elevations.",
  },
  {
    title: "Plan for Four Days in the Mountains",
    text: "Mountain conditions can vary between valleys and higher roads. Bring warm layers for mornings and evenings, personal medication and comfortable clothing for after the ride. Confirm luggage limits and accommodation arrangements in advance.",
  },
];

const faqs = [
  {
    q: "Who is the Atlas Cycling Club Tour designed for?",
    a: "The tour is designed for organised cycling clubs and groups who want to ride together in the High Atlas. Share your group size, riding experience and preferred cycling style so the programme can be discussed before booking.",
  },
  {
    q: "Is the tour four days and how many nights are included?",
    a: "The programme is planned over four days. The number of overnight stays and accommodation arrangements will be stated in your personalised proposal; the suggested format is three nights, subject to your final itinerary.",
  },
  {
    q: "What type of cycling will we do?",
    a: "The tour focuses on guided group cycling through the Atlas region. The precise route surface and riding style should be agreed with the team when you enquire, so the stages match your club's bikes and preferences.",
  },
  {
    q: "Where does the tour start?",
    a: "Marrakech is the proposed meeting and transfer point. The exact meeting location, departure time and transport arrangements will be confirmed in your trip proposal.",
  },
  {
    q: "How challenging are the daily rides?",
    a: "Daily distances, climbing and pace depend on the selected roads and the club's ability. Share your typical training rides and the range of rider fitness so the team can discuss a suitable four-day programme.",
  },
  {
    q: "Can the itinerary be adapted for our club?",
    a: "Yes. The route plan can be discussed around your preferred dates, group size, riding style, daily distances and support needs. Final stages and services are confirmed in the written proposal.",
  },
  {
    q: "Can we bring our own bicycles?",
    a: "Yes. You can discuss bringing your own bicycles and any transport requirements when enquiring. Rental may be possible if arranged in advance and specifically confirmed.",
  },
  {
    q: "Are accommodation, meals and transfers included?",
    a: "These services are included only when listed in your confirmed proposal. The team will clarify accommodation, meals, luggage handling and transfers for your selected dates and group size.",
  },
  {
    q: "Can the tour be arranged for a large club?",
    a: "The group size and support arrangements need to be reviewed before confirming availability. Share the number of riders and any separate pace groups so the team can discuss a suitable plan.",
  },
];

const relatedTours = [
  {
    category: "GROUP CYCLING",
    title: "Marrakech Group Cycling Escape",
    text: "Enjoy a shorter group cycling break with routes planned around Marrakech and its surrounding landscapes.",
    image: "/images/group-cycling-morocco.JPG",
    href: "/cycling-trips/trip/marrakech-group-cycling-escape-2-to-4-days",
  },
  {
    category: "ATLAS CYCLING",
    title: "Atlas Mountains Cycling Tour",
    text: "Explore the mountain roads and valleys of the High Atlas on a longer guided cycling journey.",
    image: "/images/atlas-mountains-cycling-tour.jpg",
    href: "/cycling-trips/trip/atlas-mountains-cycling-tour-6-day",
  },
  {
    category: "PRIVATE GROUP",
    title: "High Atlas Group MTB Adventure",
    text: "Plan a group cycling journey through selected trails and landscapes of the Atlas region.",
    image: "/images/group-adventure-cycling-morocco.jpg",
    href: "/cycling-trips/trip/high-atlas-group-mtb-adventure-5-day",
  },
];

export default function AtlasCyclingClubTourPage() {
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
        .atlas-tour .at-container { width: min(1240px, calc(100% - 64px)); margin-inline: auto; }
        .atlas-tour .at-eyebrow { display: block; color: #946c30; font-size: 11px; font-weight: 700; letter-spacing: 2px; line-height: 1.6; text-transform: uppercase; }
        .atlas-tour .at-heading { margin: 12px 0 20px; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(32px, 3.5vw, 48px); font-weight: 400; letter-spacing: -1.25px; line-height: 1.14; }
        .atlas-tour .at-section { padding: 86px 0; }
        .atlas-tour .at-section-head { display: grid; grid-template-columns: 1.15fr .85fr; align-items: end; gap: 44px; margin-bottom: 36px; }
        .atlas-tour .at-section-head .at-heading { margin-bottom: 0; }
        .atlas-tour .at-section-head > p { max-width: 480px; margin: 0 0 4px auto; color: var(--muted); font-size: 15px; line-height: 1.85; }
        .atlas-tour .at-copy { color: #5f6359; font-size: 16px; line-height: 1.95; }
        .atlas-tour .at-button { display: inline-flex; min-height: 49px; align-items: center; justify-content: center; gap: 15px; padding: 13px 22px; border: 1px solid var(--gold); background: var(--gold); color: #1f211b; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-decoration: none; text-transform: uppercase; transition: background .2s ease, color .2s ease; }
        .atlas-tour .at-button:hover { background: #a98343; border-color: #a98343; color: #fff; }
        .atlas-tour .at-button-dark { background: transparent; color: var(--ink); }
        .atlas-tour .at-button-dark:hover { background: var(--ink); color: white; }
        .atlas-tour .at-text-link { display: inline-block; margin-top: 20px; border-bottom: 1px solid var(--gold); padding-bottom: 5px; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-decoration: none; text-transform: uppercase; }
        .atlas-tour .at-hero { position: relative; display: flex; min-height: 680px; align-items: flex-end; background: #202a22; color: #fff; isolation: isolate; }
        .atlas-tour .at-hero-image, .atlas-tour .at-hero-shade { position: absolute; inset: 0; }
        .atlas-tour .at-hero-image { z-index: -2; }
        .atlas-tour .at-hero-image img { object-position: center 48%; }
        .atlas-tour .at-hero-shade { z-index: -1; background: linear-gradient(90deg, rgba(9,14,10,.88) 0%, rgba(9,14,10,.64) 43%, rgba(9,14,10,.22) 100%), linear-gradient(0deg, rgba(9,14,10,.78) 0%, rgba(9,14,10,.08) 72%); }
        .atlas-tour .at-hero-content { position: relative; z-index: 1; width: min(1240px, calc(100% - 64px)); margin: 0 auto; padding: 110px 0 65px; color: #fff !important; }
        .atlas-tour .at-hero .at-eyebrow { color: #f0ce88 !important; font-size: 12px; }
        .atlas-tour .at-hero h1 { max-width: 850px; margin: 19px 0 22px; color: #fff !important; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(48px, 6.5vw, 84px); font-weight: 400; letter-spacing: -2.7px; line-height: 1.02; text-shadow: 0 2px 20px rgba(0,0,0,.3); }
        .atlas-tour .at-hero-description { max-width: 570px; margin: 0; color: #fff !important; font-size: 17px; line-height: 1.85; text-shadow: 0 1px 8px rgba(0,0,0,.4); }
        .atlas-tour .at-hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 22px; margin-top: 30px; }
        .atlas-tour .at-hero .at-button { background: #d1ac67; border-color: #d1ac67; color: #191d17 !important; }
        .atlas-tour .at-hero .at-button:hover { background: #f0d59b; border-color: #f0d59b; color: #191d17 !important; }
        .atlas-tour .at-hero-back { color: #fff !important; font-size: 13px; font-weight: 600; letter-spacing: .4px; text-decoration: none; text-shadow: 0 1px 8px rgba(0,0,0,.5); }
        .atlas-tour .at-hero-back:hover { color: #f0ce88 !important; }
        .atlas-tour .at-hero-bottom { display: flex; flex-wrap: wrap; gap: 34px; margin-top: 53px; padding-top: 22px; border-top: 1px solid rgba(255,255,255,.36); }
        .atlas-tour .at-hero-bottom div { min-width: 105px; }
        .atlas-tour .at-hero-bottom strong { display: block; color: #fff !important; font-size: 13px; letter-spacing: 1.3px; }
        .atlas-tour .at-hero-bottom span { color: #eeeae1 !important; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; }
        .atlas-tour .at-fact-strip { position: relative; z-index: 2; background: #fffefa; border-bottom: 1px solid var(--line); }
        .atlas-tour .at-fact-strip-inner { display: grid; grid-template-columns: repeat(4, 1fr); }
        .atlas-tour .at-fact { min-height: 104px; padding: 23px 25px; border-right: 1px solid var(--line); }
        .atlas-tour .at-fact:last-child { border-right: 0; }
        .atlas-tour .at-fact span { display: block; margin-bottom: 5px; color: #8b7652; font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; }
        .atlas-tour .at-fact strong { display: block; color: var(--ink); font-family: Georgia, 'Times New Roman', serif; font-size: 17px; font-weight: 400; line-height: 1.4; }
        .atlas-tour .at-subnav { background: var(--green); color: #fff; }
        .atlas-tour .at-subnav-inner { display: flex; flex-wrap: wrap; justify-content: center; gap: 9px 30px; padding: 16px 0; }
        .atlas-tour .at-subnav a { color: #eee9dc; font-size: 10px; font-weight: 700; letter-spacing: 1.3px; text-decoration: none; text-transform: uppercase; transition: color .2s ease; }
        .atlas-tour .at-subnav a:hover { color: var(--gold-light); }
        .atlas-tour .at-overview-grid { display: grid; grid-template-columns: 1.05fr .95fr; align-items: center; gap: 75px; }
        .atlas-tour .at-overview-image { position: relative; min-height: 570px; }
        .atlas-tour .at-overview-image img { position: absolute; inset: 0; }
        .atlas-tour .at-overview-image::after { position: absolute; right: -18px; bottom: -18px; z-index: -1; width: 48%; height: 48%; border: 1px solid var(--gold); content: ""; }
        .atlas-tour .at-overview-content { padding: 25px 0; }
        .atlas-tour .at-overview-content .at-copy { margin: 0 0 17px; }
        .atlas-tour .at-booking-card { padding: 32px; background: #fffefa; border: 1px solid var(--line); box-shadow: 0 15px 45px rgba(32,36,31,.06); }
        .atlas-tour .at-booking-card h3 { margin: 8px 0 12px; font-family: Georgia, 'Times New Roman', serif; font-size: 27px; font-weight: 400; line-height: 1.25; }
        .atlas-tour .at-booking-card p { color: var(--muted); font-size: 14px; line-height: 1.8; }
        .atlas-tour .at-booking-list { margin: 22px 0; padding: 0; list-style: none; }
        .atlas-tour .at-booking-list li { display: flex; justify-content: space-between; gap: 15px; padding: 11px 0; border-bottom: 1px solid var(--line); font-size: 13px; }
        .atlas-tour .at-booking-list span { color: var(--muted); }
        .atlas-tour .at-booking-list strong { text-align: right; }
        .atlas-tour .at-booking-card .at-button { width: 100%; }
        .atlas-tour .at-highlight-section { background: #eae6db; }
        .atlas-tour .at-highlight-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: #d8d2c5; border: 1px solid #d8d2c5; }
        .atlas-tour .at-highlight { min-height: 245px; padding: 31px 25px; background: var(--paper); }
        .atlas-tour .at-highlight-number { display: block; margin-bottom: 28px; color: #b28a4c; font-family: Georgia, 'Times New Roman', serif; font-size: 25px; }
        .atlas-tour .at-highlight h3 { margin: 0 0 12px; font-family: Georgia, 'Times New Roman', serif; font-size: 22px; font-weight: 400; line-height: 1.25; }
        .atlas-tour .at-highlight p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.8; }
        .atlas-tour .at-terrain-grid { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 70px; }
        .atlas-tour .at-terrain-image { height: 490px; overflow: hidden; }
        .atlas-tour .at-terrain-image img { transition: transform .6s ease; }
        .atlas-tour .at-terrain-image:hover img { transform: scale(1.035); }
        .atlas-tour .at-terrain-points { margin: 28px 0 0; padding: 0; list-style: none; }
        .atlas-tour .at-terrain-points li { display: grid; grid-template-columns: 32px 1fr; gap: 13px; padding: 15px 0; border-top: 1px solid var(--line); color: var(--muted); font-size: 14px; }
        .atlas-tour .at-terrain-points span { color: #a27b40; font-weight: 700; }
        .atlas-tour .at-facts-section { background: #fffefa; }
        .atlas-tour .at-facts-layout { display: grid; grid-template-columns: .8fr 1.2fr; gap: 75px; }
        .atlas-tour .at-facts-table { border-top: 1px solid var(--line); }
        .atlas-tour .at-facts-row { display: grid; grid-template-columns: .7fr 1.3fr; gap: 25px; padding: 16px 0; border-bottom: 1px solid var(--line); font-size: 14px; }
        .atlas-tour .at-facts-row span { color: var(--muted); }
        .atlas-tour .at-facts-row strong { font-weight: 600; }
        .atlas-tour .at-culture { display: grid; grid-template-columns: 1fr 1fr; min-height: 520px; background: var(--green); color: #fff; }
        .atlas-tour .at-culture-image { min-height: 520px; }
        .atlas-tour .at-culture-content { align-self: center; padding: 70px clamp(35px, 7vw, 100px); }
        .atlas-tour .at-culture .at-eyebrow { color: var(--gold-light); }
        .atlas-tour .at-culture .at-heading { color: #fff; }
        .atlas-tour .at-culture .at-copy { color: #e1e2d8; }
        .atlas-tour .at-culture-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-top: 30px; }
        .atlas-tour .at-culture-item { padding-top: 16px; border-top: 1px solid rgba(255,255,255,.25); }
        .atlas-tour .at-culture-item h3 { margin: 0 0 7px; color: #f1d49a; font-family: Georgia, 'Times New Roman', serif; font-size: 19px; font-weight: 400; }
        .atlas-tour .at-culture-item p { margin: 0; color: #d7dbd1; font-size: 12px; line-height: 1.8; }
        .atlas-tour .at-gallery-grid { display: grid; grid-template-columns: 1.25fr .75fr .75fr; grid-template-rows: 245px 245px; gap: 14px; }
        .atlas-tour .at-gallery-item { overflow: hidden; }
        .atlas-tour .at-gallery-item:first-child { grid-row: span 2; }
        .atlas-tour .at-gallery-item img { transition: transform .6s ease; }
        .atlas-tour .at-gallery-item:hover img { transform: scale(1.04); }
        .atlas-tour .at-itinerary-section { background: #eae6db; }
        .atlas-tour .at-itinerary-intro { max-width: 700px; margin: 0 0 42px; color: var(--muted); font-size: 15px; line-height: 1.9; }
        .atlas-tour .at-itinerary-list { display: grid; gap: 22px; }
        .atlas-tour .at-day { display: grid; grid-template-columns: 1fr 1fr; min-height: 370px; background: #fffefa; border: 1px solid #e0dcd1; }
        .atlas-tour .at-day:nth-child(even) .at-day-image { order: 2; }
        .atlas-tour .at-day-image { min-height: 370px; }
        .atlas-tour .at-day-content { align-self: center; padding: 40px clamp(25px, 5vw, 65px); }
        .atlas-tour .at-day-number { color: #a27b40; font-family: Georgia, 'Times New Roman', serif; font-size: 38px; line-height: 1; }
        .atlas-tour .at-day-content h3 { margin: 12px 0; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(24px, 2.6vw, 32px); font-weight: 400; line-height: 1.2; }
        .atlas-tour .at-day-location { margin-bottom: 16px; color: #927344; font-size: 11px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; }
        .atlas-tour .at-day-content > p { color: var(--muted); font-size: 14px; line-height: 1.85; }
        .atlas-tour .at-day-meta { display: flex; flex-wrap: wrap; gap: 8px 20px; margin: 18px 0; padding: 13px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); color: #62665d; font-size: 11px; }
        .atlas-tour .at-day-content ul { display: grid; gap: 7px; margin: 15px 0 0; padding-left: 18px; color: #62665d; font-size: 12px; }
        .atlas-tour .at-inclusions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; }
        .atlas-tour .at-inclusion-card { padding: 38px; background: #fffefa; border: 1px solid var(--line); }
        .atlas-tour .at-inclusion-card h3 { margin: 0 0 22px; font-family: Georgia, 'Times New Roman', serif; font-size: 29px; font-weight: 400; }
        .atlas-tour .at-inclusion-card ul { display: grid; gap: 13px; margin: 0; padding: 0; list-style: none; }
        .atlas-tour .at-inclusion-card li { display: grid; grid-template-columns: 22px 1fr; gap: 10px; color: var(--muted); font-size: 14px; line-height: 1.7; }
        .atlas-tour .at-inclusion-card li span { color: #a27b40; font-weight: 700; }
        .atlas-tour .at-prep-section { background: #eae6db; }
        .atlas-tour .at-prep-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }
        .atlas-tour .at-prep-card { padding: 28px 24px; background: var(--paper); border-top: 2px solid var(--gold); }
        .atlas-tour .at-prep-card h3 { margin: 0 0 13px; font-family: Georgia, 'Times New Roman', serif; font-size: 21px; font-weight: 400; }
        .atlas-tour .at-prep-card p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.85; }
        .atlas-tour .at-difficulty-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 75px; align-items: center; }
        .atlas-tour .at-difficulty-image { height: 430px; }
        .atlas-tour .at-difficulty-note { margin-top: 25px; padding: 22px 25px; background: #eae6db; border-left: 3px solid var(--gold); color: var(--muted); font-size: 13px; line-height: 1.85; }
        .atlas-tour .at-faq-section { background: #fffefa; }
        .atlas-tour .at-faq-layout { display: grid; grid-template-columns: .7fr 1.3fr; gap: 75px; }
        .atlas-tour .at-faq-list { border-top: 1px solid var(--line); }
        .atlas-tour .at-faq-list details { padding: 19px 0; border-bottom: 1px solid var(--line); }
        .atlas-tour .at-faq-list summary { position: relative; padding-right: 35px; color: var(--ink); cursor: pointer; font-family: Georgia, 'Times New Roman', serif; font-size: 19px; line-height: 1.45; list-style: none; }
        .atlas-tour .at-faq-list summary::-webkit-details-marker { display: none; }
        .atlas-tour .at-faq-list summary::after { position: absolute; top: 0; right: 3px; color: #a27b40; content: "+"; font-family: Arial, sans-serif; font-size: 23px; }
        .atlas-tour .at-faq-list details[open] summary::after { content: "−"; }
        .atlas-tour .at-faq-list details p { max-width: 690px; margin: 13px 0 0; color: var(--muted); font-size: 14px; line-height: 1.85; }
        .atlas-tour .at-final-cta { position: relative; display: flex; min-height: 500px; align-items: center; background: #1e2a22; color: #fff; isolation: isolate; }
        .atlas-tour .at-final-image, .atlas-tour .at-final-shade { position: absolute; inset: 0; }
        .atlas-tour .at-final-image { z-index: -2; }
        .atlas-tour .at-final-shade { z-index: -1; background: linear-gradient(90deg, rgba(10,17,12,.88), rgba(10,17,12,.35)); }
        .atlas-tour .at-final-content { width: min(1240px, calc(100% - 64px)); margin: 0 auto; padding: 90px 0; }
        .atlas-tour .at-final-content .at-eyebrow { color: #f0ce88; }
        .atlas-tour .at-final-content h2 { max-width: 750px; margin: 15px 0 20px; color: #fff; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(38px, 5.5vw, 68px); font-weight: 400; letter-spacing: -1.8px; line-height: 1.1; }
        .atlas-tour .at-final-content p { max-width: 580px; margin-bottom: 28px; color: #f0eee6; font-size: 16px; line-height: 1.85; }
        .atlas-tour .at-related-section { padding: 86px 0; }
        .atlas-tour .at-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; }
        .atlas-tour .at-related-card { background: #fffefa; border: 1px solid var(--line); }
        .atlas-tour .at-related-image { height: 255px; overflow: hidden; }
        .atlas-tour .at-related-image img { transition: transform .5s ease; }
        .atlas-tour .at-related-card:hover .at-related-image img { transform: scale(1.04); }
        .atlas-tour .at-related-content { padding: 25px; }
        .atlas-tour .at-related-content .at-eyebrow { font-size: 9px; letter-spacing: 1.4px; }
        .atlas-tour .at-related-content h3 { margin: 10px 0; font-family: Georgia, 'Times New Roman', serif; font-size: 24px; font-weight: 400; line-height: 1.25; }
        .atlas-tour .at-related-content p { color: var(--muted); font-size: 13px; line-height: 1.8; }
        .atlas-tour .at-related-content a { display: inline-block; margin-top: 8px; padding-bottom: 4px; border-bottom: 1px solid var(--gold); font-size: 11px; font-weight: 700; letter-spacing: 1px; text-decoration: none; text-transform: uppercase; }
        .atlas-tour .at-footer { background: #171d18; color: #eeeae1; }
        .atlas-tour .at-footer-main { display: grid; grid-template-columns: 1.3fr .8fr .9fr 1fr; gap: 45px; padding: 65px 0 50px; }
        .atlas-tour .at-footer-brand img { width: 190px; height: auto; object-fit: contain; object-position: left center; }
        .atlas-tour .at-footer-brand p { max-width: 300px; margin-top: 20px; color: #b9beb5; font-size: 13px; line-height: 1.9; }
        .atlas-tour .at-footer h3 { margin: 0 0 19px; color: #e4c78c; font-size: 11px; font-weight: 700; letter-spacing: 1.6px; text-transform: uppercase; }
        .atlas-tour .at-footer-links { display: grid; gap: 11px; }
        .atlas-tour .at-footer-links a { color: #c4c8c0; font-size: 13px; text-decoration: none; transition: color .2s ease; }
        .atlas-tour .at-footer-links a:hover { color: #e4c78c; }
        .atlas-tour .at-footer-bottom { display: flex; justify-content: space-between; gap: 20px; padding: 20px 0; border-top: 1px solid rgba(255,255,255,.15); color: #9fa69c; font-size: 11px; }
        @media (max-width: 1000px) {
          .atlas-tour .at-overview-grid, .atlas-tour .at-terrain-grid, .atlas-tour .at-facts-layout, .atlas-tour .at-difficulty-grid, .atlas-tour .at-faq-layout { gap: 40px; }
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
          .atlas-tour .at-overview-grid, .atlas-tour .at-terrain-grid, .atlas-tour .at-facts-layout, .atlas-tour .at-difficulty-grid, .atlas-tour .at-faq-layout { grid-template-columns: 1fr; gap: 35px; }
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
          .atlas-tour .at-gallery-grid { grid-template-columns: 1fr 1fr; grid-template-rows: 250px 170px 170px; }
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
          <img src={images.hero} alt="Cycling club riding through Morocco's High Atlas Mountains" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · HIGH ATLAS · CYCLING CLUB TOUR · 4 DAYS</span>
          <h1>Atlas Cycling Club Tour</h1>
          <p className="at-hero-description">
            Discover Morocco’s High Atlas on a four-day guided cycling journey for your club.
            Explore scenic mountain roads, valley routes and traditional villages
            with a local guide and a route plan shaped around your club's
            riding level and cycling preferences.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Atlas Cycling Club Tour <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>04 DAYS</strong><span>Club cycling tour</span></div>
            <div><strong>HIGH ATLAS</strong><span>Mountain roads</span></div>
            <div><strong>CLUB</strong><span>Ride together</span></div>
            <div><strong>GROUP TOUR</strong><span>Guided cycling</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>4 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>the High Atlas Mountains of Morocco</strong></div>
          <div className="at-fact"><span>Experience</span><strong>Atlas Cycling Club Tour</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Guided Club Cycling</strong></div>
        </div>
      </section>

      <nav className="at-subnav">
        <div className="at-container at-subnav-inner">
          <a href="#overview">Overview</a>
          <a href="#highlights">Highlights</a>
          <a href="#route">Route &amp; Terrain</a>
          <a href="#itinerary">Itinerary</a>
          <a href="#included">Included</a>
          <a href="#preparation">Preparation</a>
          <a href="#faqs">FAQs</a>
        </div>
      </nav>

      <section className="at-section" id="overview">
        <div className="at-container at-overview-grid">
          <div className="at-overview-image">
            <img src={images.overview} alt="High Atlas mountain landscapes in Morocco" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A FOUR-DAY CYCLING CLUB JOURNEY IN THE HIGH ATLAS</span>
            <h2 className="at-heading">Ride the High Atlas Together on a Four-Day Club Tour</h2>
            <p className="at-copy">
              Atlas Cycling Club Tour is a four-day group cycling journey for clubs who want to explore the mountain landscapes beyond Marrakech. Ride scenic roads and valley routes together with a local team.
            </p>
            <p className="at-copy">
              Discover selected Atlas mountain roads, valley routes and rural landscapes. The exact stages, daily distances and climbing are chosen according to your club's riding style and local conditions.
            </p>
            <p className="at-copy">
              The four-day route, distances, climbing, riding times, accommodation, meeting point and transfer arrangements will be discussed and confirmed after we understand your club's experience and preferences.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the four-day journey →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR FOUR-DAY ATLAS CYCLING CLUB TOUR</span>
            <h2 className="at-heading">Four Days of Club Cycling in the High Atlas</h2>
            <p className="at-copy">
              Leave the city behind and enjoy a guided group cycling adventure in the spectacular surroundings of Morocco's High Atlas Mountains.
            </p>
            <p className="at-copy">
              Ride selected mountain and valley roads over four days, with time for scenic stops and regrouping. The programme is planned around your club's experience, preferred pace and daily distance goals.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Atlas Cycling Club Tour</h3>
            <p>A four-day guided group cycling experience in the High Atlas Mountains of Morocco, with stages planned around your club's riding ability and preferences.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>4 days</strong></li>
              <li><span>Destination</span><strong>the High Atlas Mountains of Morocco</strong></li>
              <li><span>Tour format</span><strong>Guided cycling club journey</strong></li>
              <li><span>Route style</span><strong>Mountain roads and valley routes</strong></li>
              <li><span>Travel style</span><strong>Private group</strong></li>
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
              <h2 className="at-heading">Highlights of Your Atlas Cycling Club Tour</h2>
            </div>
            <p>
              Enjoy four days of group cycling, Atlas scenery and shared road stages on a guided programme designed around your club.
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
            <img src={images.road} alt="Cycling club on a scenic Atlas route" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE &amp; TERRAIN</span>
            <h2 className="at-heading">Ride Mountain Roads and Discover Atlas Villages</h2>
            <p className="at-copy">
              The four-day tour focuses on scenic cycling routes selected according to the experience and ability of your club. Depending on the agreed programme, the stages may include paved mountain roads, valley routes and connecting roads through rural settlements.
            </p>
            <p className="at-copy">
              Road surfaces, gradients, climbing and distances depend on the selected routes and local conditions. The aim is to create a rewarding club tour with a suitable pace and regrouping plan for your riders.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Four-day guided cycling club holiday</li>
              <li><span>02</span>Routes selected around club ability and pace</li>
              <li><span>03</span>Atlas mountain roads and valley scenery</li>
              <li><span>04</span>Club pace with planned regrouping and breaks</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR ESCAPE</span>
            <h2 className="at-heading">Tour Information</h2>
            <p className="at-copy">
              Review the main details
              of this four-day guided club cycling tour
              in the Atlas Mountains of Morocco.
              Exact distances, riding times,
              accommodation, meeting point
              and transfers will be confirmed
              in your trip proposal.
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
          <img src={images.village} alt="Traditional village in Morocco's High Atlas Mountains" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover the Atlas Beyond the Ride</h2>
          <p className="at-copy">
            Your club journey is about more than the kilometres. Across four days, discover the landscapes and rural atmosphere of Morocco's Atlas Mountains. Enjoy time outdoors, explore selected village surroundings and appreciate the scenery of the High Atlas.
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
              <span className="at-eyebrow">HIGH ATLAS CLUB CYCLING MOMENTS</span>
              <h2 className="at-heading">Explore the High Atlas with Your Cycling Club</h2>
            </div>
            <p>
              Discover mountain routes, traditional
              villages and open landscapes
              across the Atlas during your
              four-day guided club cycling tour.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="High Atlas mountain scenery in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.road} alt="Cycling club on a scenic Atlas route" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional village in the High Atlas of Morocco" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Atlas valley landscape in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Cycling group enjoying the High Atlas in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">FOUR DAYS IN THE HIGH ATLAS MOUNTAINS</span>
              <h2 className="at-heading">Atlas Cycling Club Tour Itinerary</h2>
            </div>
            <p>
              Four days of guided group cycling through the High Atlas. Daily routes, distances, climbing and riding times are confirmed during planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines the proposed structure of the four-day guided club cycling tour. Exact routes, distances, riding times, accommodation, meeting point, finishing point and transfer arrangements depend on the final programme agreed with your group and the riding experience of everyone joining.
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
              <h2 className="at-heading">What Is Included in Your Atlas Cycling Club Tour?</h2>
            </div>
            <p>
              Final inclusions are confirmed in your booking proposal. Check your personalised itinerary for guiding, bicycles, equipment, accommodation, transport and meals included in your four-day club experience.
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
              <span className="at-eyebrow">BEFORE YOU RIDE</span>
              <h2 className="at-heading">Preparing for Your Atlas Cycling Club Tour</h2>
            </div>
            <p>
              Prepare your bicycles, equipment and overnight essentials for four days of group cycling in the Atlas Mountains of Morocco.
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
            <img src={images.cycling} alt="Cycling club enjoying a guided ride in Morocco" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">A ROUTE FOR YOUR CLUB GROUP</span>
            <h2 className="at-heading">Difficulty and Riding Experience</h2>
            <p className="at-copy">
              The tour is planned as a guided group cycling experience. Difficulty will depend on the selected roads, gradients, daily distances and local conditions, and must be matched to the ability of the riders taking part.
            </p>
            <p className="at-copy">
              Before confirming the routes, we need to understand each rider's cycling experience, fitness level and preferred pace. This helps us discuss suitable stages and a comfortable group plan across all four days.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> All riders should be comfortable riding in a group and capable of the distances and climbing agreed for the tour. Final suitability, route difficulty, daily distances, equipment and support arrangements must be discussed and confirmed before booking.
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
              Find answers to common questions
              about Atlas Cycling Club Tour. Contact
              our team if you need more
              details before planning
              your four-day cycling holiday.
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
          <img src={images.final} alt="Private cycling adventure in Morocco's Atlas Mountains" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR FOUR-DAY ATLAS CYCLING CLUB TOUR STARTS HERE</span>
          <h2>Ready to Plan Your Atlas Cycling Club Tour?</h2>
          <p>
            Tell us your preferred dates, club size, riders' experience and cycling goals. We can discuss suitable routes, daily distances, climbing, equipment, accommodation and transfers for your four-day Atlas Cycling Club Tour.
          </p>
          <a className="at-button" href="/contact">Plan Your Atlas Cycling Club Tour <span>→</span></a>
        </div>
      </section>

      {/* Enquiry form: after the final CTA and before related tours */}
      <section
        className="at-section"
        id="enquiry"
        style={{ backgroundColor: "var(--green)" }}
      >
        <div className="at-container">
          <ContactEnquiryForm
            tourName="Atlas Cycling Club Tour – 4 Days"
            destination="High Atlas Mountains, Morocco"
            cyclingType="Road Cycling"
          />
        </div>
      </section>

      <section className="at-related-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EXPLORE MORE</span>
              <h2 className="at-heading">More Group Cycling Adventures in Morocco</h2>
            </div>
            <p>
              Discover more ways to explore Morocco by bike, from shorter group cycling breaks to longer guided journeys through the Atlas and other regions of Morocco.
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
              Discover Morocco by bike. Explore the Atlas Mountains of Morocco,
              rural valleys and unforgettable landscapes with
              Mountain Bike Morocco.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="at-footer-links">
              <a href="/cycling-trips">All Cycling Tours</a>
              <a href="/cycling-trips/mtb">Mountain Bike Tours</a>
              <a href="/cycling-trips/e-mtb">E-MTB Tours</a>
              <a href="/cycling-trips/gravel">Gravel Cycling</a>
              <a href="/cycling-trips/road">Road Cycling</a>
            </div>
          </div>
          <div>
            <h3>Destinations</h3>
            <div className="at-footer-links">
              <a href="/destinations">All Destinations</a>
              <a href="/destinations/atlas-mountains">Atlas Mountains</a>
              <a href="/destinations/anti-atlas">Anti-Atlas</a>
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
          <span> Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}