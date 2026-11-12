import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Imlil and Toubkal Road Cycling Escape – 3 Days | Mountain Bike Morocco",
  description:
    "Discover the Imlil and Toubkal region on a 3-day road cycling escape in Morocco's High Atlas. Ride scenic mountain roads, explore valleys and traditional Amazigh villages, and experience the landscapes around Mount Toubkal.",
  alternates: {
    canonical:
      "/cycling-trips/trip/imlil-and-toubkal-road-cycling-escape-3-day",
  },
};

const images = {
  hero: "/images/imlil-cycling-adventure-tour.jpeg",
  overview: "/images/toubkal-cycling-expedition.jpg",
  mountains: "/images/atlas-mountains-road-cycling-tour.jpg",
  pass: "/images/toubkal-adventure-cycling.jpg",
  village: "/images/berber-villages-cycling-expeditions.jpg",
  valley: "/images/atlas-valley-cycling-morocco.jpg",
  cycling: "/images/adventure-road-cycling-morocco.jpg",
  final: "/images/road-cycling-morocco.jpg",
};

const facts = [
  ["Duration", "3 days"],
  ["Destination", "Imlil and the High Atlas"],
  ["Region", "Toubkal National Park area"],
  ["Starting point", "To be confirmed"],
  ["Cycling style", "Road cycling"],
  ["Difficulty", "Moderate to challenging – route dependent"],
  ["Experience", "Previous road cycling experience recommended"],
  ["Tour format", "Private multi-day cycling experience"],
  ["Best season", "Spring and autumn, subject to conditions"],
];

const highlights = [
  {
    number: "01",
    title: "Discover the Imlil Region",
    text: "Explore the mountain roads and spectacular scenery around Imlil, a traditional mountain village in the heart of Morocco's High Atlas.",
  },
  {
    number: "02",
    title: "Ride in the Toubkal Region",
    text: "Experience road cycling in the landscapes surrounding Mount Toubkal, with impressive mountain views, changing terrain and memorable riding.",
  },
  {
    number: "03",
    title: "Amazigh Villages and Valleys",
    text: "Discover the rural character of the High Atlas, passing traditional settlements, terraced landscapes and mountain valleys along the selected route.",
  },
  {
    number: "04",
    title: "Three Days of Mountain Cycling",
    text: "Enjoy a multi-day cycling escape combining scenic road rides, mountain landscapes and time to experience the atmosphere of the Atlas region.",
  },
];

const beyondTrail = [
  {
    title: "The village of Imlil",
    text: "Discover Imlil, a well-known mountain village and gateway to the Toubkal region, surrounded by dramatic High Atlas scenery.",
  },
  {
    title: "Mount Toubkal landscapes",
    text: "Experience the impressive mountain environment around North Africa's highest peak, with rugged slopes and spectacular views.",
  },
  {
    title: "Traditional Amazigh communities",
    text: "Discover the villages and rural communities of the High Atlas, where traditional architecture and mountain life remain part of the landscape.",
  },
  {
    title: "Valleys and mountain roads",
    text: "Enjoy changing scenery as the selected cycling route explores mountain roads, valley landscapes and the countryside around Imlil.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Marrakech to Imlil – Discover the High Atlas",
    location: "Marrakech – Imlil – High Atlas",
    distance: "To be confirmed",
    riding: "Road cycling – introductory mountain ride",
    image: images.overview,
    text: "Begin your three-day cycling escape with the agreed departure arrangements from Marrakech or meet the team at the confirmed starting point. Travel towards Imlil and the High Atlas, where the mountain scenery provides the setting for your adventure. After preparing your bicycle and reviewing the selected route, enjoy an introductory ride on suitable mountain roads around the Imlil region. The day's cycling distance, elevation gain, meeting point and accommodation arrangements will be confirmed in your final programme.",
    details: [
      "Meet the team at the agreed starting point",
      "Travel towards the Imlil and High Atlas region if transfer is included",
      "Review the programme and local road conditions",
      "Check your road bicycle and cycling equipment",
      "Begin the selected introductory mountain road ride",
      "Discover the scenery and villages around Imlil",
      "Enjoy planned breaks and scenic viewpoints",
      "Confirm the following day's ride and arrangements",
    ],
  },
  {
    day: "02",
    title: "Road Cycling in the Imlil and Toubkal Region",
    location: "Imlil – Toubkal region – High Atlas",
    distance: "To be confirmed",
    riding: "Road cycling – mountain roads and climbs",
    image: images.pass,
    text: "Enjoy the main cycling day of your escape in the High Atlas. Set out on the selected road cycling route around Imlil and the Toubkal region, discovering mountain landscapes, rural valleys and traditional Amazigh villages along the way. The route is planned according to your cycling experience, preferred pace and the conditions on the roads. This day focuses on experiencing the mountain environment by bicycle; it does not involve cycling to the summit of Mount Toubkal. Exact roads, distance and elevation gain will be confirmed during trip planning.",
    details: [
      "Review the day's route and weather conditions",
      "Prepare your bicycle and cycling equipment",
      "Begin the selected mountain road cycling route",
      "Explore the landscapes around Imlil and the Toubkal region",
      "Ride through selected valleys and rural areas",
      "Take breaks at suitable viewpoints and villages",
      "Return to the agreed overnight location",
      "Review the final day's cycling arrangements",
    ],
  },
  {
    day: "03",
    title: "Scenic Morning Ride and Return",
    location: "Imlil – High Atlas – agreed finishing point",
    distance: "To be confirmed",
    riding: "Road cycling – scenic mountain ride",
    image: images.cycling,
    text: "Complete your three-day road cycling escape with a final ride in the Imlil and High Atlas region. Depending on your preferred pace and the agreed programme, enjoy a scenic morning route through the mountain landscape before finishing at the confirmed meeting point. If a return transfer to Marrakech is included in your proposal, the team will arrange the agreed departure after the ride. The final route, distance, elevation gain and transfer arrangements will be confirmed before your trip.",
    details: [
      "Enjoy breakfast if included in your accommodation arrangements",
      "Prepare for the final cycling day",
      "Ride the selected scenic mountain road route",
      "Discover more of the Imlil and High Atlas scenery",
      "Complete the ride at the agreed finishing point",
      "Pack your cycling equipment and luggage",
      "Arrange the return transfer if included in your proposal",
      "Finish your three-day cycling escape",
    ],
  },
];

const inclusions = [
  "Three-day route planning and cycling arrangements",
  "Local cycling support as agreed in your itinerary",
  "Accommodation only if specifically included in your proposal",
  "Road bicycle rental if specifically included",
  "Transfers specified in your final proposal",
  "Support vehicle if explicitly included in your proposal",
  "Meals and refreshments only when listed in your proposal",
  "Equipment or luggage assistance if agreed",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Road bicycle unless included in your proposal",
  "Personal cycling equipment and clothing",
  "Accommodation unless specifically included",
  "Meals and drinks not specified in your itinerary",
  "Personal expenses and tips",
  "Additional accommodation or nights",
  "Services not specifically listed in your proposal",
];

const preparation = [
  {
    title: "Choose the Right Road Bike",
    text: "Use a road bicycle in good mechanical condition, with suitable climbing gears, reliable brakes and tyres appropriate for the confirmed mountain road routes.",
  },
  {
    title: "Prepare for Three Days of Riding",
    text: "A multi-day mountain cycling escape requires suitable fitness and the ability to manage consecutive days on the bicycle. Previous road cycling experience is recommended.",
  },
  {
    title: "Bring Your Cycling Equipment",
    text: "Bring a suitable helmet, cycling clothing, gloves, glasses, footwear, hydration equipment, sun protection and basic personal repair supplies.",
  },
  {
    title: "Be Ready for Mountain Weather",
    text: "Weather can change with altitude and throughout the day. Carry an extra layer and suitable protection against wind, sun and changing temperatures.",
  },
];

const faqs = [
  {
    q: "How long is the Imlil and Toubkal Road Cycling Escape?",
    a: "This is a three-day road cycling experience in the Imlil and High Atlas region of Morocco. The programme combines selected cycling routes with the agreed travel and overnight arrangements.",
  },
  {
    q: "Where does the tour start?",
    a: "The starting arrangements will be confirmed in your trip proposal. You can discuss departure from Marrakech or meeting the team at an agreed location in the Imlil region.",
  },
  {
    q: "Where will we cycle during the three days?",
    a: "The experience focuses on the mountain roads and landscapes around Imlil and the Toubkal region. The exact roads and daily routes will be selected according to your cycling level and confirmed programme.",
  },
  {
    q: "Is this tour suitable for beginner cyclists?",
    a: "The tour is intended for riders who are comfortable with road cycling and mountain terrain. Previous road cycling experience is recommended. The final difficulty depends on the selected routes, climbing and daily distances.",
  },
  {
    q: "How far will we cycle each day?",
    a: "Daily distances have not been fixed on this page. They depend on the selected routes, your cycling experience, road conditions and the agreed programme. Exact distances will be confirmed during trip planning.",
  },
  {
    q: "How much elevation gain should I expect?",
    a: "Elevation gain depends on the selected roads and daily routes around Imlil and the Toubkal region. Exact figures should be confirmed once the itinerary has been planned.",
  },
  {
    q: "Will we cycle to the summit of Mount Toubkal?",
    a: "No. This is a road cycling experience in the Imlil and Toubkal region. It explores selected mountain roads and surrounding landscapes; it does not involve cycling to the summit of Mount Toubkal.",
  },
  {
    q: "Do I need to bring my own road bicycle?",
    a: "You can discuss bringing your own road bicycle or arranging a rental. Bicycle availability, specifications and rental costs must be confirmed before booking.",
  },
  {
    q: "Is accommodation included in the three-day tour?",
    a: "Accommodation arrangements depend on your selected programme. Any included nights, accommodation category and meal arrangements will be clearly specified in your final proposal.",
  },
  {
    q: "Are transfers from Marrakech included?",
    a: "Transfers depend on your selected starting point and final proposal. Any included pick-up, drop-off or support vehicle arrangements will be confirmed before booking.",
  },
  {
    q: "Will a support vehicle accompany the rides?",
    a: "Support vehicle arrangements can be discussed when planning your trip. Vehicle support is only included when it is specifically confirmed in your proposal.",
  },
  {
    q: "What is the best season for cycling around Imlil?",
    a: "Spring and autumn can offer suitable conditions for road cycling in the High Atlas. Weather and road conditions vary, so the selected routes should be checked before departure.",
  },
  {
    q: "Can the tour be organised privately?",
    a: "Yes. The experience can be discussed as a private cycling escape, with the routes and arrangements planned around your group, cycling experience and preferred dates.",
  },
  {
    q: "What should I bring for the three days?",
    a: "Bring a helmet, road cycling clothing, gloves, suitable shoes, hydration, sun protection, a windproof layer and personal bicycle repair supplies. You should also bring any personal items needed for the agreed overnight arrangements.",
  },
];

const relatedTours = [
  {
    category: "ROAD CYCLING",
    title: "Tizi n'Test Mountain Pass Ride",
    text: "Take on a memorable High Atlas mountain road ride, with winding roads, challenging climbs and spectacular scenery.",
    image: "/images/atlas-mountains-road-cycling-tour.jpg",
    href: "/cycling-trips/trip/tizi-n-test-mountain-pass-ride-1-day",
  },
  {
    category: "ROAD CYCLING",
    title: "Road Cycling Adventures in Morocco",
    text: "Discover more road cycling experiences through Morocco's mountain landscapes, valleys and rural regions.",
    image: "/images/road-cycling-holiday-morocco.jpg",
    href: "/cycling-trips/road",
  },
  {
    category: "CYCLING FROM MARRAKECH",
    title: "Cycling Trips from Marrakech",
    text: "Explore cycling experiences through the Atlas Mountains and countryside around Marrakech.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/cycling-trips",
  },
];

export default function ImlilAndToubkalRoadCyclingEscape3DaysPage() {
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
        .atlas-tour .at-enquiry-section { background: var(--green); color: #fff; }
        .atlas-tour .at-enquiry-section .at-eyebrow { color: var(--gold-light); }
        .atlas-tour .at-enquiry-section .at-heading { color: #fff; }
        .atlas-tour .at-enquiry-section .at-section-head > p { color: #e1e2d8; }
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
          <img src={images.hero} alt="Cycling adventure in the Imlil region of Morocco's High Atlas" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · IMLIL · TOUBKAL REGION · 3 DAYS</span>
          <h1>Imlil and Toubkal Road Cycling Escape</h1>
          <p className="at-hero-description">
            Discover the mountain roads and spectacular
            landscapes of the Imlil and Toubkal region.
            Enjoy three days of road cycling through
            High Atlas valleys, mountain scenery and
            traditional Amazigh villages.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your 3-Day Cycling Escape <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>03 DAYS</strong><span>Road cycling</span></div>
            <div><strong>IMLIL</strong><span>Mountain village</span></div>
            <div><strong>TOUBKAL</strong><span>High Atlas region</span></div>
            <div><strong>MOROCCO</strong><span>Mountain escape</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>3 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Imlil &amp; Toubkal</strong></div>
          <div className="at-fact"><span>Experience</span><strong>High Atlas Escape</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Road Cycling</strong></div>
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
            <img src={images.overview} alt="Cycling expedition in the High Atlas near Imlil and Toubkal" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A THREE-DAY HIGH ATLAS ADVENTURE</span>
            <h2 className="at-heading">Discover Imlil and the Toubkal Region by Road Bike</h2>
            <p className="at-copy">
              The Imlil and Toubkal Road Cycling Escape
              is a three-day cycling experience in
              Morocco's High Atlas. It is designed
              for riders who want to discover the
              mountain roads and landscapes around
              one of the Atlas region's best-known
              mountain destinations.
            </p>
            <p className="at-copy">
              Ride through changing mountain scenery,
              explore rural valleys and discover
              traditional Amazigh villages along
              the selected routes. Each day offers
              a different opportunity to experience
              the atmosphere of the High Atlas.
            </p>
            <p className="at-copy">
              The exact starting point, daily routes,
              distances, elevation gain, accommodation
              and transfer arrangements will be
              confirmed according to your selected
              programme and cycling level.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the three-day escape →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE ROAD CYCLING EXPERIENCE</span>
            <h2 className="at-heading">Three Days Among the Mountains of Imlil and Toubkal</h2>
            <p className="at-copy">
              The Imlil region offers a memorable
              setting for a multi-day road cycling
              experience. Surrounded by the High
              Atlas, its mountain roads and valleys
              provide an opportunity to discover
              a different side of Morocco.
            </p>
            <p className="at-copy">
              Your three-day programme can be
              discussed around your cycling background,
              preferred pace and travel arrangements.
              The selected routes will determine
              the daily distance, climbing and
              overall difficulty.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Imlil and Toubkal Road Cycling Escape</h3>
            <p>A three-day road cycling experience in the High Atlas Mountains of Morocco.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>3 days</strong></li>
              <li><span>Destination</span><strong>Imlil and Toubkal region</strong></li>
              <li><span>Tour format</span><strong>Private cycling experience</strong></li>
              <li><span>Route style</span><strong>Mountain road cycling</strong></li>
              <li><span>Experience</span><strong>Valleys, climbs and villages</strong></li>
            </ul>
            <a className="at-button" href="/contact">Enquire About This Escape <span>→</span></a>
          </aside>
        </div>
      </section>

      <section className="at-section at-highlight-section" id="highlights">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">THE EXPERIENCE</span>
              <h2 className="at-heading">Highlights of the Imlil and Toubkal Cycling Escape</h2>
            </div>
            <p>
              Experience three days of road cycling
              through the High Atlas, with mountain
              scenery, traditional villages, scenic
              valleys and the landscapes around Imlil.
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
            <img src={images.pass} alt="Mountain scenery in the Toubkal region of Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE &amp; TERRAIN</span>
            <h2 className="at-heading">Mountain Roads Through the Imlil and Toubkal Region</h2>
            <p className="at-copy">
              This three-day escape focuses on road
              cycling in the mountain environment
              around Imlil and the Toubkal region.
              The selected routes can include
              mountain climbs, winding roads,
              valley scenery and descents.
            </p>
            <p className="at-copy">
              The daily riding programme depends
              on your experience, the selected roads
              and local conditions. Route direction,
              starting points and finishing arrangements
              will influence the total distance and
              elevation gain for each day.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Road cycling around Imlil and the High Atlas</li>
              <li><span>02</span>Mountain landscapes in the Toubkal region</li>
              <li><span>03</span>Traditional villages and rural valleys</li>
              <li><span>04</span>Three-day programme adapted to your experience</li>
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
              Review the main details of this
              three-day road cycling experience.
              The exact daily distances, elevation,
              starting point, accommodation,
              road conditions and transfer
              arrangements should be confirmed
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
          <img src={images.village} alt="Traditional Amazigh village in the High Atlas near Imlil" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover the Mountain Culture of the High Atlas</h2>
          <p className="at-copy">
            The Imlil and Toubkal cycling escape
            is about more than the roads. Along
            the selected routes, discover the
            impressive scenery, traditional
            settlements and rural character
            of the High Atlas.
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
              <span className="at-eyebrow">MOUNTAIN CYCLING MOMENTS</span>
              <h2 className="at-heading">Explore the Scenery Around Imlil and Toubkal</h2>
            </div>
            <p>
              Discover the mountain roads,
              traditional villages, valleys
              and impressive views of the
              Imlil and Toubkal region.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="Road cycling scenery in the High Atlas Mountains" /></div>
            <div className="at-gallery-item"><img src={images.pass} alt="Mountain scenery in the Toubkal region" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional Amazigh village in the Atlas Mountains" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Valley landscape in the High Atlas of Morocco" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Road cycling adventure in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">THREE DAYS IN THE HIGH ATLAS</span>
              <h2 className="at-heading">Imlil and Toubkal Road Cycling Itinerary</h2>
            </div>
            <p>
              Three days of road cycling in the
              Imlil and Toubkal region. The starting
              point, daily routes, distances,
              elevation, overnight arrangements
              and transfers are confirmed
              during trip planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines the proposed
            structure of the three-day escape.
            Exact route selection, daily distance,
            elevation gain, meeting point,
            accommodation, road conditions and
            transfer arrangements depend on
            the final programme agreed with your group.
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
              <h2 className="at-heading">What Is Included in Your Cycling Escape?</h2>
            </div>
            <p>
              Final inclusions are confirmed in
              your booking proposal. Check your
              personalised itinerary for the services,
              overnight arrangements and transport
              included in your three-day experience.
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
              <h2 className="at-heading">Preparing for Your Imlil and Toubkal Cycling Escape</h2>
            </div>
            <p>
              Prepare your bicycle, fitness
              and equipment for three days
              of road cycling through the
              mountain landscapes of the High Atlas.
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
            <img src={images.cycling} alt="Road cycling through the mountain landscapes of Morocco" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">Difficulty and Cycling Experience</h2>
            <p className="at-copy">
              A three-day road cycling escape
              in the High Atlas can involve
              consecutive days of riding,
              mountain climbs and demanding
              descents. The overall difficulty
              depends on the selected routes,
              daily distances, elevation gain,
              weather and road conditions.
            </p>
            <p className="at-copy">
              Previous road cycling experience
              is recommended. Tell us about
              the distances you normally ride,
              your climbing experience and
              your preferred pace so we can
              discuss suitable arrangements
              for your three days in the mountains.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty,
              daily riding distance, elevation gain,
              road conditions and overnight arrangements
              must be checked against the actual
              itinerary before booking. This page
              does not promise fixed mileage or
              elevation figures.
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
              about the Imlil and Toubkal Road
              Cycling Escape. Contact our team
              if you need more details before
              planning your three days.
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
          <img src={images.final} alt="High Atlas mountain landscape near Imlil and Toubkal in Morocco" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR HIGH ATLAS CYCLING ESCAPE STARTS HERE</span>
          <h2>Ready to Discover Imlil and Toubkal by Road Bike?</h2>
          <p>
            Tell us your preferred dates,
            group size, cycling experience
            and bicycle requirements.
            We can discuss the daily routes,
            starting point, accommodation
            and arrangements for your
            three-day High Atlas escape.
          </p>
          <a className="at-button" href="/contact">Plan Your Imlil and Toubkal Escape <span>→</span></a>
        </div>
      </section>

      {/* CONTACT ENQUIRY FORM */}
      <section className="at-section at-enquiry-section" id="enquire">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">PLAN YOUR JOURNEY</span>
              <h2 className="at-heading">
                Enquire About Imlil and Toubkal Road Cycling Escape
              </h2>
            </div>
            <p>
              Tell us your preferred dates, group size, road cycling experience
              and requirements. Our team will help you plan the details of your
              three-day road cycling escape in the Imlil and Toubkal region of
              Morocco's High Atlas.
            </p>
          </div>
          <ContactEnquiryForm
            tourName="Imlil and Toubkal Road Cycling Escape – 3 Days"
            destination="Imlil and Toubkal Region, High Atlas, Morocco"
            cyclingType="Road Cycling"
          />
        </div>
      </section>

      <section className="at-related-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EXPLORE MORE</span>
              <h2 className="at-heading">More Cycling Adventures in Morocco</h2>
            </div>
            <p>
              Discover more ways to experience
              Morocco by bike, from road cycling
              in the Atlas Mountains to cycling
              journeys around Marrakech.
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
              Discover Morocco by bike. Explore the Atlas Mountains,
              remote valleys and unforgettable landscapes with
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
              <a href="/destinations/imlil">Imlil</a>
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
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}