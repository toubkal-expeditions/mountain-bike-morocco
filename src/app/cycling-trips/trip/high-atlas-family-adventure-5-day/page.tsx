import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High Atlas Family Adventure – 5 Days | Mountain Bike Morocco",
  description:
    "Discover the High Atlas on a five-day family cycling adventure in Morocco. Explore mountain scenery, valley tracks and traditional villages on a guided itinerary planned around your family's ages and riding experience.",
  alternates: {
    canonical: "/cycling-trips/trip/high-atlas-family-adventure-5-day",
  },
};

const images = {
  hero: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
  overview: "/images/atlas-mountains-cycling-expedition.jpg",
  mountains: "/images/Explore-Atlas-Mountains-bike.jpg",
  road: "/images/atlas-valley-cycling-morocco.jpg",
  village: "/images/morocco-berbre-villages.jpg",
  valley: "/images/atlas-mtb-tour-morocco.jpg",
  cycling: "/images/mountain-biking-holiday-morocco.jpeg",
  final: "/images/atlas-mountains-cycling-tour.jpg",
};

const facts = [
  ["Duration", "5 days"],
  ["Destination", "High Atlas Mountains, Morocco"],
  ["Starting point", "Marrakech – exact meeting point to be confirmed"],
  ["Cycling style", "Family mountain biking and scenic valley riding"],
  ["Difficulty", "Adapted to the family's experience and selected routes"],
  ["Experience", "Confident bicycle riders; off-road ability discussed before booking"],
  ["Tour format", "Guided family adventure"],
  ["Accommodation", "As confirmed in your personalised trip proposal"],
  ["Best season", "Spring and autumn, subject to mountain conditions"],
];

const highlights = [
  {
    number: "01",
    title: "Five Days in Morocco's High Atlas Mountains",
    text: "Spend five days discovering the landscapes of the High Atlas on a family cycling adventure. The journey brings together mountain scenery, quiet valley routes and time to enjoy the region beyond Marrakech.",
  },
  {
    number: "02",
    title: "A Route Planned Around Your Family",
    text: "Share the ages, confidence and cycling experience of everyone joining. The route, daily distance and riding pace can then be discussed with the team so the programme is appropriate for the whole family.",
  },
  {
    number: "03",
    title: "Mountain Views, Valleys and Berber Villages",
    text: "Explore selected High Atlas routes through changing mountain landscapes, with opportunities to discover traditional villages and enjoy viewpoints along the way. Exact locations depend on the agreed itinerary.",
  },
  {
    number: "04",
    title: "A Family Adventure with Time to Explore",
    text: "The five-day format allows the riding plan to include breaks, scenic stops and time together. Your guide can discuss suitable route options based on the group's ability and local trail conditions.",
  },
];

const beyondTrail = [
  {
    title: "The High Atlas Mountains",
    text: "Discover the varied scenery of Morocco's High Atlas, from mountain slopes and open landscapes to dramatic valley views. The exact riding areas are selected according to your family's experience and the conditions during your trip.",
  },
  {
    title: "Traditional Mountain Villages",
    text: "Selected routes may pass through or near traditional Berber villages, offering a glimpse of the architecture and everyday life of the Atlas region. Stops are planned respectfully and according to the day's route.",
  },
  {
    title: "Five Days of Discovery",
    text: "Enjoy a five-day programme that balances cycling with time to appreciate the scenery. Daily stages, distances and riding times are agreed during trip planning rather than fixed before your family's needs are known.",
  },
  {
    title: "A Guided Family Cycling Holiday",
    text: "Travel as your own family group with a local cycling guide. Share your preferred dates, ages and riding levels so the route and practical arrangements can be discussed before booking.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Marrakech to the High Atlas – Meet Your Team",
    location: "Marrakech – High Atlas Mountains, exact area to be confirmed",
    distance: "To be confirmed",
    riding: "Arrival, bike setup and introductory ride if scheduled",
    image: "/images/atlas-mountains-cycling-tour.jpg",
    text: "Meet your team at the agreed point in Marrakech and travel towards the High Atlas according to the arrangements confirmed in your proposal. Meet your guide, review the five-day family programme and check each rider's bicycle and equipment. If arrival time and the agreed plan allow, enjoy a short introductory ride to get comfortable with the bikes and local surroundings. Your guide will explain the route plan and practical arrangements for the days ahead.",
    details: [
      "Meet your guide and review the five-day family programme",
      "Transfer from Marrakech if included in your confirmed arrangements",
      "Check bicycle sizing, brakes, tyres, helmets and personal equipment",
      "Discuss the family's riding expectations and route options",
      "Enjoy an introductory ride if timing and the agreed programme allow",
      "Settle into the confirmed accommodation arrangements",
    ],
  },
  {
    day: "02",
    title: "First High Atlas Routes – Discover the Mountain Terrain",
    location: "High Atlas – selected family-suitable mountain routes",
    distance: "To be confirmed",
    riding: "Scenic cycling stage adapted to the group",
    image: "/images/atlas-mtb-tour-morocco.jpg",
    text: "After breakfast, prepare for your first full day of riding in the High Atlas. Your guide will select a route suited to the family's experience, introducing the local terrain and allowing everyone to settle into the rhythm of the journey. Expect selected mountain tracks and scenic riding, with regular stops and adjustments to the pace as needed. The exact distance, climbing and technical character will be confirmed once the route is agreed.",
    details: [
      "Review the day's route and local conditions with your guide",
      "Begin with a suitable warm-up before continuing onto selected tracks",
      "Ride at a pace appropriate to the least experienced family member",
      "Pause for water, photographs and refreshments",
      "Discuss the following day's route with your guide",
    ],
  },
  {
    day: "03",
    title: "High Atlas Valleys and Traditional Villages",
    location: "High Atlas – selected valley and village routes",
    distance: "To be confirmed",
    riding: "Scenic mountain and valley cycling",
    image: "/images/atlas-valley-cycling-morocco.jpg",
    text: "Continue your family adventure on a route through selected High Atlas valley landscapes. Depending on the agreed itinerary, the ride may link quiet tracks with village surroundings and viewpoints across the mountains. Your guide will adapt the stage to the group's confidence and energy, allowing time to enjoy the scenery rather than rushing between sections. Specific villages, surfaces and riding distances depend on the final route plan.",
    details: [
      "Set out on a selected valley and mountain route",
      "Explore village surroundings where appropriate to the route",
      "Pause at suitable viewpoints and rest locations",
      "Keep the route and pace matched to the family's ability",
      "Return to the confirmed overnight location",
    ],
  },
  {
    day: "04",
    title: "A Further Day Exploring the High Atlas",
    location: "High Atlas – route selected for the family's ability",
    distance: "To be confirmed",
    riding: "A tailored cycling stage with optional route variations",
    image: "/images/mountain-biking-holiday-morocco.jpeg",
    text: "Enjoy another day discovering the High Atlas by bike. After discussing how everyone is feeling, your guide will choose a suitable route for the group, which may reveal a different landscape or riding character from the previous days. The overall plan remains appropriate for the family, with opportunities for scenic pauses and route adjustments where suitable. The precise route and technical level are confirmed during trip planning and reviewed locally.",
    details: [
      "Check the group's energy, confidence and equipment before departure",
      "Explore another selected section of High Atlas terrain",
      "Discuss optional route variations with your guide where suitable",
      "Allow time for breaks and scenic stops",
      "Prepare for the final day's ride and departure logistics",
    ],
  },
  {
    day: "05",
    title: "Final Family Ride and Return to Marrakech",
    location: "High Atlas Mountains – Marrakech",
    distance: "To be confirmed",
    riding: "Final ride subject to departure time and agreed programme",
    image: "/images/imlil-cycling-adventure-tour.jpeg",
    text: "Enjoy the final morning of your High Atlas Family Adventure. If your departure time and the agreed programme allow, finish with a relaxed ride on a suitable local route. Return the bikes and equipment, complete the trip with your guide and travel back to Marrakech if the transfer is included in your arrangements. Your team will confirm the timing, finishing point and transport details in advance.",
    details: [
      "Enjoy breakfast and review the final day's schedule",
      "Take a final family ride if included in the confirmed programme",
      "Return hired bicycles and equipment where applicable",
      "Finish the guided cycling programme at the agreed point",
      "Transfer to Marrakech if included in your arrangements",
    ],
  },
];

const inclusions = [
  "Five-day family cycling programme planning",
  "Route planning based on family ages and riding experience",
  "Local cycling guide as specified in your proposal",
  "Selected High Atlas routes and daily riding arrangements",
  "Accommodation only when specified in your proposal",
  "Bicycle rental if specifically included",
  "Helmets and protective equipment only when confirmed",
  "Transfers from Marrakech if specified in your proposal",
  "Meals and refreshments only when listed in your proposal",
  "On-route support only as detailed in your confirmed arrangements",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Bicycles unless included in your proposal",
  "Personal cycling clothing, shoes and equipment",
  "Helmets and protective equipment unless confirmed",
  "Transfers unless specifically included",
  "Accommodation unless listed in your proposal",
  "Meals and drinks not specified in your itinerary",
  "Personal expenses and tips",
  "Additional activities not listed in your proposal",
  "Services not specifically listed in your proposal",
];

const preparation = [
  {
    title: "Share Every Rider's Experience",
    text: "Tell us the ages, heights, cycling experience and confidence level of everyone joining. Be clear about previous off-road riding and any concerns so the route plan can be discussed realistically for the whole family.",
  },
  {
    title: "Choose Suitable Bicycles",
    text: "Bicycles should be correctly sized and mechanically sound, with reliable brakes, suitable tyres and gearing for the selected terrain. Discuss bike rental, children's sizes and any e-bike requirements before booking.",
  },
  {
    title: "Bring Essential Riding Equipment",
    text: "Bring a correctly fitting helmet for every rider, gloves, comfortable cycling clothing, suitable footwear, water bottles and personal sun protection. Confirm any additional protective equipment with your guide before departure.",
  },
  {
    title: "Pack for Five Days in the Mountains",
    text: "Prepare practical riding and evening clothing for changing mountain conditions. Bring a light extra layer, personal essentials and any medication or items your family needs during the five-day trip.",
  },
];

const faqs = [
  {
    q: "How long is the High Atlas Family Adventure?",
    a: "The tour is planned as a five-day family cycling adventure in Morocco's High Atlas Mountains. Daily routes, riding duration, meeting arrangements and finishing logistics will be confirmed in your personalised proposal.",
  },
  {
    q: "Is this High Atlas cycling adventure suitable for children?",
    a: "Suitability depends on each child's age, height, bicycle skills, off-road confidence and the routes selected. Share the details of every rider so the team can discuss appropriate terrain and support before confirming the trip.",
  },
  {
    q: "What age do children need to be to join?",
    a: "A fixed minimum age has not been specified for this tour. The appropriate age depends on a child's cycling ability, confidence, bicycle fit and the character of the agreed routes. Please provide the ages of everyone joining.",
  },
  {
    q: "Do we need previous mountain-biking experience?",
    a: "All participants should be confident bicycle riders. Previous off-road experience is useful if the agreed programme includes unpaved mountain tracks. The required level depends on the final route, so discuss each rider's experience before booking.",
  },
  {
    q: "How difficult are the routes?",
    a: "Difficulty is planned around the family's ability and the selected routes. High Atlas terrain can include different surfaces and gradients, so the final route choices and daily distances must be agreed after reviewing the group's experience.",
  },
  {
    q: "Where does the tour start?",
    a: "Marrakech is the proposed meeting and transfer point. The exact meeting location, departure time and transfer arrangements must be confirmed in your personalised proposal.",
  },
  {
    q: "Which areas of the High Atlas will we explore?",
    a: "The adventure focuses on selected mountain and valley routes in the High Atlas. Exact areas, villages and tracks depend on your family's needs, local conditions and the programme agreed before departure.",
  },
  {
    q: "How far will we cycle each day?",
    a: "Daily distances are not fixed on this page. They depend on the selected routes, climbing, trail conditions and the abilities of the riders. Approximate distance and riding time for each day will be discussed during trip planning.",
  },
  {
    q: "Can we book the adventure for our family only?",
    a: "Share your preferred dates, group size, riders' ages and cycling experience so the team can discuss a programme and arrangements around your family.",
  },
];

const relatedTours = [
  {
    category: "FAMILY CYCLING",
    title: "Four-Day Family Atlas Explorer",
    text: "Explore the Atlas together on a shorter family mountain and valley cycling journey.",
    image: "/images/atlas-berber-valley-bike.JPG",
    href: "/cycling-trips/trip/four-day-family-atlas-explorer-4-day",
  },
  {
    category: "FAMILY CYCLING",
    title: "Marrakech Countryside Family Cycling – 3 Days",
    text: "Discover countryside routes and family-friendly cycling landscapes beyond Marrakech.",
    image: "/images/ouirgane-valley-ebike-tour.jpg",
    href: "/cycling-trips/trip/marrakech-countryside-family-cycling-3-day",
  },
  {
    category: "MTB ADVENTURE",
    title: "Private Family MTB Holiday in Morocco – 5 Days",
    text: "Plan a private family mountain-bike holiday with selected Atlas trails and a tailored pace.",
    image: "/images/group-cycling-atlas-mountains.jpg",
    href: "/cycling-trips/trip/private-family-mtb-holiday-morocco-5-day",
  },
];

export default function HighAtlasFamilyAdventurePage() {
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
          <img src={images.hero} alt="High Atlas family cycling ride in the Atlas Mountains of Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · HIGH ATLAS · FAMILY CYCLING · 5 DAYS</span>
          <h1>High Atlas Family Adventure</h1>
          <p className="at-hero-description">
            Discover Morocco’s High Atlas on a five-day family cycling adventure.
            Explore mountain scenery, valley tracks and traditional villages
            with a guided programme planned around your family’s
            ages, confidence and riding experience.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your High Atlas Family Adventure <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>05 DAYS</strong><span>Family adventure</span></div>
            <div><strong>ATLAS</strong><span>Mountain trails</span></div>
            <div><strong>FAMILY</strong><span>Ride together</span></div>
            <div><strong>MTB</strong><span>Guided family riding</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>5 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>the High Atlas Mountains of Morocco</strong></div>
          <div className="at-fact"><span>Experience</span><strong>High Atlas Family Adventure</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Guided Family Cycling</strong></div>
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
            <span className="at-eyebrow">A FIVE-DAY HIGH ATLAS FAMILY ADVENTURE JOURNEY</span>
            <h2 className="at-heading">Discover the High Atlas Together as a Family</h2>
            <p className="at-copy">
              High Atlas Family Adventure is a five-day
              journey for families who want to explore
              the mountain landscapes beyond the city together.
              Ride selected mountain trails and explore valley and village landscapes at a pace suited to your group.
            </p>
            <p className="at-copy">
              Discover selected mountain trails, open landscapes and traditional villages while enjoying the varied scenery of the Atlas region.
            </p>
            <p className="at-copy">
              All five days’ routes, distances, riding durations, accommodation, meeting point and transfer arrangements will be discussed and confirmed after we understand your group’s experience and needs.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the five-day journey →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR FIVE-DAY HIGH ATLAS FAMILY ADVENTURE</span>
            <h2 className="at-heading">5 Days of High Atlas Scenery, Cycling and Family Discovery</h2>
            <p className="at-copy">
              Leave the city behind and
              enjoy a rider-focused
              family mountain-bike adventure in
              the spectacular surroundings
              of Morocco’s High Atlas Mountains.
            </p>
            <p className="at-copy">
              Explore selected trails over five days, with time for scenic stops, village discoveries and family breaks. The programme is planned around the experience and ability of everyone joining.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>High Atlas Family Adventure</h3>
            <p>A five-day family cycling experience in the Atlas Mountains of Morocco, with selected routes planned around your group's riding ability.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>5 days</strong></li>
              <li><span>Destination</span><strong>the High Atlas Mountains of Morocco</strong></li>
              <li><span>Tour format</span><strong>Guided family adventure</strong></li>
              <li><span>Route style</span><strong>Selected mountain trails</strong></li>
              <li><span>Travel style</span><strong>Family experience</strong></li>
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
              <h2 className="at-heading">Highlights of Your High Atlas Family Adventure</h2>
            </div>
            <p>
              Enjoy five days of family
              mountain biking, Atlas scenery
              and village discoveries
              on a guided programme
              designed around your group.
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
            <img src={images.road} alt="Family mountain biking on a selected Atlas trail" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE &amp; TERRAIN</span>
            <h2 className="at-heading">Ride Selected Mountain Trails and Discover Atlas Villages</h2>
            <p className="at-copy">
              The five-day adventure focuses on mountain-bike routes selected according to the experience and ability of your group. Depending on the agreed programme, the terrain may include mountain paths, forest or valley tracks and suitable family-friendly trails.
            </p>
            <p className="at-copy">
              Trail surfaces, gradients
              and distances will depend
              on the selected routes and
              local conditions. The aim is to create five enjoyable days of riding at a comfortable pace for everyone in your group.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Five-day family cycling holiday</li>
              <li><span>02</span>Routes selected around ages and riding ability</li>
              <li><span>03</span>mountain landscapes and village scenery</li>
              <li><span>04</span>Flexible pace with time for rest stops</li>
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
              of this five-day family
              cycling experience
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
          <img src={images.village} alt="Traditional Berber village in the Atlas Mountains of Morocco" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover the Character of the Atlas Mountains</h2>
          <p className="at-copy">
            Your cycling escape is about
            more than cycling.
            Across five days, discover
            the landscapes and rural
            atmosphere of Morocco’s Atlas Mountains.
            Enjoy time outdoors, explore
            selected village surroundings
            and appreciate the scenery
            of the High Atlas Mountains.
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
              <span className="at-eyebrow">ATLAS MOUNTAIN MOMENTS</span>
              <h2 className="at-heading">Explore the Scenery of the Atlas Mountains</h2>
            </div>
            <p>
              Discover mountain trails, traditional
              villages and open landscapes
              across the Atlas during your
              five-day family MTB holiday.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="Atlas mountain scenery in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.road} alt="Family mountain biking on a selected Atlas trail" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional village in the Atlas Mountains of Morocco" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Atlas valley landscape in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="High Atlas family cycling ride in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">FIVE DAYS IN THE ATLAS MOUNTAINS</span>
              <h2 className="at-heading">High Atlas Family Adventure Itinerary</h2>
            </div>
            <p>
              Five days of family cycling through selected Atlas mountain and valley landscapes. Daily routes, distances and riding durations are confirmed during planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines the proposed structure of the five-day family MTB holiday. Exact routes, distances, riding times, accommodation, meeting point, finishing point and transfer arrangements depend on the final programme agreed with your group and the riding experience of everyone joining.
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
              <h2 className="at-heading">What Is Included in Your High Atlas Family Adventure?</h2>
            </div>
            <p>
              Final inclusions are confirmed
              in your booking proposal.
              Check your personalised itinerary
              for guiding, bicycles, equipment,
              accommodation, transport
              and meals included in your
              five-day experience.
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
              <h2 className="at-heading">Preparing for Your High Atlas Family Adventure</h2>
            </div>
            <p>
              Prepare your bicycles,
              equipment and overnight
              essentials for five days
              of family mountain biking in
              the Atlas Mountains of Morocco.
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
            <img src={images.cycling} alt="Family mountain-bike group enjoying a guided ride in Morocco" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">A ROUTE FOR YOUR FAMILY</span>
            <h2 className="at-heading">Difficulty and Cycling Experience</h2>
            <p className="at-copy">
              The adventure is planned as a family cycling experience. Difficulty will depend on the selected trails, gradients, surfaces, daily distances and local conditions, and must be matched to the ability of every rider.
            </p>
            <p className="at-copy">
              Before confirming the routes,
              we need to understand the
              riders' experience, their
              cycling confidence and the
              experience of the adults.
              This helps us discuss suitable terrain and a comfortable pace across all five days.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Children should be confident bicycle riders before joining a family mountain-bike route. Final suitability, route
              difficulty, daily distances,
              equipment and supervision
              arrangements must be discussed
              and confirmed before booking.
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
              about High Atlas Family Adventure. Contact
              our team if you need more
              details before planning
              your five-day mountain-bike holiday.
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
          <img src={images.final} alt="Family cycling adventure in Morocco's Atlas Mountains" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR FAMILY ATLAS MTB ADVENTURE STARTS HERE</span>
          <h2>Ready to Plan Your High Atlas Family Adventure?</h2>
          <p>
            Tell us your preferred dates,
            group size, riders' experience
            and cycling experience.
            We can discuss suitable routes,
            daily riding durations,
            equipment, accommodation
            and transfers for your
            five-day family cycling holiday in the Atlas Mountains of Morocco.
          </p>
          <a className="at-button" href="/contact">Plan Your High Atlas Family Adventure <span>→</span></a>
        </div>
      </section>

      <section className="at-related-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EXPLORE MORE</span>
              <h2 className="at-heading">More Village and Mountain Bike Adventures in Morocco</h2>
            </div>
            <p>
              Discover more ways to explore
              Morocco by bike, from shorter family cycling escapes to longer private mountain-bike journeys in the Atlas and other regions of Morocco.
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
          <span>© {new Date().getFullYear()} Mountain Bike Morocco. All rights reserved.</span>
          <span> Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}