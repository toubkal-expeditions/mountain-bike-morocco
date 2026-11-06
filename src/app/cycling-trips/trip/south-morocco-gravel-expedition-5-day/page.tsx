import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "South Morocco Gravel Expedition – 5 Days | Mountain Bike Morocco",
  description:
    "Discover southern Morocco on a five-day gravel cycling expedition through changing landscapes, remote countryside, mountain roads and traditional villages. A private gravel adventure with Mountain Bike Morocco.",
  alternates: {
    canonical: "/cycling-trips/trip/south-morocco-gravel-expedition-5-day",
  },
};

const images = {
  hero: "/images/gravel-desert-cycling-morocco.JPG",
  overview: "/images/gravel-adventure-morocco.jpg",
  mountains: "/images/gravel-cycling-atlas-mountains.jpg",
  trails: "/images/gravel-adventure-cycling-morocco.jpg",
  village: "/images/berber-villages-cycling-expeditions.jpg",
  valley: "/images/gravel-cycling-morocco-expeditions.jpg",
  cycling: "/images/gravel-desert-cycling-expedition.jpg",
  final: "/images/gravel-atlas-to-sahara-desert-mtb-tour.jpg",
};

const facts = [
  ["Duration", "5 days / 4 nights"],
  ["Destination", "South Morocco"],
  ["Starting point", "To be confirmed"],
  ["Main areas", "Southern Morocco and surrounding mountain landscapes"],
  ["Cycling style", "Gravel cycling"],
  ["Difficulty", "To be confirmed against the final route"],
  ["Experience", "Previous cycling experience recommended"],
  ["Tour format", "Private multi-day gravel expedition"],
  ["Best season", "Spring and autumn; conditions vary"],
];

const highlights = [
  {
    number: "01",
    title: "Discover Southern Morocco",
    text: "Explore the landscapes of southern Morocco on a five-day gravel cycling expedition, travelling beyond the main roads and discovering a changing environment throughout the journey.",
  },
  {
    number: "02",
    title: "Ride Remote Gravel Roads",
    text: "Discover selected gravel roads, rural tracks and quiet connecting roads. The daily route is planned according to the terrain, road conditions and your group's riding experience.",
  },
  {
    number: "03",
    title: "Experience Traditional Villages",
    text: "Pass through rural settlements and discover the architecture, agricultural landscapes and local communities that give southern Morocco its distinctive character.",
  },
  {
    number: "04",
    title: "Five Days of Gravel Adventure",
    text: "Enjoy a private multi-day cycling experience combining varied terrain, changing scenery and time on the bike, with the final programme planned around your group.",
  },
];

const beyondTrail = [
  {
    title: "The Landscapes of Southern Morocco",
    text: "Discover a region of changing scenery, open spaces, dry hills and mountain surroundings. The landscapes and terrain vary according to the selected route.",
  },
  {
    title: "Traditional Amazigh Communities",
    text: "Depending on the confirmed route, pass through rural settlements and discover the traditions, architecture and everyday life of local Amazigh communities.",
  },
  {
    title: "Rural Architecture and Agriculture",
    text: "Explore the character of southern Moroccan villages, where traditional buildings, cultivated land and local ways of life form part of the landscape.",
  },
  {
    title: "A Journey Beyond the Main Roads",
    text: "Gravel cycling offers an active way to explore the region, connecting quieter roads and suitable tracks while travelling at your own cycling pace.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival and First Gravel Stage",
    location: "Starting point – Southern Morocco",
    distance: "To be confirmed",
    riding: "Gravel cycling stage",
    image: images.overview,
    text: "Meet the local team at the agreed starting point and review the arrangements for your five-day gravel expedition. After checking your bicycle and equipment, begin the first cycling stage along selected roads and gravel sections. This opening day introduces the landscapes and riding conditions of southern Morocco. The exact starting location, route, distance, elevation gain and overnight arrangements will be confirmed in your personalised itinerary.",
    details: [
      "Meet the team and review the expedition programme",
      "Check your gravel bicycle and personal equipment",
      "Review the route and daily riding arrangements",
      "Begin the first gravel cycling stage",
      "Enjoy scenic stops along the selected route",
      "Arrive at the agreed overnight accommodation",
    ],
  },
  {
    day: "02",
    title: "Gravel Roads and Southern Landscapes",
    location: "Southern Morocco – Rural Routes",
    distance: "To be confirmed",
    riding: "Full-day gravel cycling",
    image: images.trails,
    text: "Continue your journey through the landscapes of southern Morocco. The route may combine suitable gravel tracks, rural roads and paved connections, depending on the selected area and road conditions. Enjoy a full day of cycling at a pace agreed with your group, with breaks planned along the way. The precise route and overnight location will be confirmed before departure.",
    details: [
      "Continue along the planned gravel route",
      "Explore selected rural roads and tracks",
      "Discover changing landscapes along the way",
      "Take breaks according to the group's riding pace",
      "Arrive at the planned overnight location",
    ],
  },
  {
    day: "03",
    title: "Through Villages and Remote Countryside",
    location: "Southern Morocco – Village and Countryside Routes",
    distance: "To be confirmed",
    riding: "Full-day gravel cycling",
    image: images.village,
    text: "The third day continues the gravel expedition through the rural landscapes of southern Morocco. Depending on the confirmed route, ride through traditional settlements, cultivated areas and quieter countryside roads. Take time to appreciate the architecture and local atmosphere along the journey. The route, riding distance, elevation gain and accommodation arrangements depend on the final programme.",
    details: [
      "Set out on the third cycling stage",
      "Ride through selected rural and gravel routes",
      "Discover traditional villages along the route where applicable",
      "Enjoy stops for photographs and refreshments",
      "Complete the stage at the agreed overnight location",
    ],
  },
  {
    day: "04",
    title: "A Further Journey into Southern Morocco",
    location: "Southern Morocco – Selected Gravel Routes",
    distance: "To be confirmed",
    riding: "Full-day gravel cycling",
    image: images.valley,
    text: "Enjoy another day exploring the changing terrain of southern Morocco. The selected route may include open countryside, mountain surroundings and remote gravel sections, depending on the final itinerary. Your daily riding programme will be discussed around the group's experience, the terrain and current conditions. Finish the day's stage at the accommodation specified in your confirmed trip proposal.",
    details: [
      "Prepare for the fourth gravel cycling stage",
      "Explore the selected roads and landscapes",
      "Ride at a pace suited to the group",
      "Enjoy planned stops during the day",
      "Arrive at the agreed overnight accommodation",
    ],
  },
  {
    day: "05",
    title: "Final Gravel Stage and Expedition Finish",
    location: "Southern Morocco – Agreed Finish Point",
    distance: "To be confirmed",
    riding: "Final gravel cycling stage",
    image: images.cycling,
    text: "Complete your South Morocco Gravel Expedition with the final cycling stage. Follow the selected route towards the agreed finishing point, enjoying the last landscapes of your journey. At the end of the ride, the team will coordinate the departure arrangements specified in your confirmed itinerary. Any transfers, onward travel or additional services will be agreed before the expedition.",
    details: [
      "Prepare for the final cycling stage",
      "Ride the selected gravel route",
      "Enjoy the final landscapes of the expedition",
      "Complete the ride at the agreed finish point",
      "Continue with onward arrangements as confirmed",
    ],
  },
];

const inclusions = [
  "Trip planning and route coordination",
  "Local cycling support as agreed in your itinerary",
  "Accommodation if specified in your confirmed proposal",
  "Meals explicitly listed in your confirmed itinerary",
  "Gravel bicycle rental if specifically included",
  "Luggage or equipment transfers if agreed",
  "Transfers specified in your final proposal",
  "Support vehicle if explicitly included in your proposal",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Gravel bicycle unless included in your proposal",
  "Personal cycling equipment and clothing",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses and tips",
  "Additional nights or accommodation not listed in your proposal",
  "Additional activities and services not included in your proposal",
];

const preparation = [
  {
    title: "Choose a Suitable Gravel Bike",
    text: "Bring a gravel bicycle suitable for the confirmed roads and surfaces. Tyre width, gearing, brakes and overall setup should match the terrain and riding conditions of the expedition.",
  },
  {
    title: "Prepare for Multi-Day Riding",
    text: "Five consecutive days of cycling require suitable preparation. Previous cycling experience is recommended. Share your usual riding distances and fitness level when discussing the route.",
  },
  {
    title: "Be Ready for Changing Conditions",
    text: "Southern Morocco includes varied landscapes and potentially exposed riding conditions. Temperatures, wind and road surfaces can change according to the season and selected route.",
  },
  {
    title: "Pack Essential Cycling Equipment",
    text: "Bring a suitable helmet, gloves, cycling glasses, comfortable clothing, suitable footwear, sun protection, hydration equipment and personal repair supplies. Confirm luggage arrangements before departure.",
  },
];

const faqs = [
  {
    q: "How long is the South Morocco Gravel Expedition?",
    a: "The expedition is planned as a five-day gravel cycling tour, with four nights of accommodation if included in your confirmed programme. The exact daily riding time and distance depend on the selected route.",
  },
  {
    q: "Where does the expedition start?",
    a: "The starting point will be confirmed during trip planning. Your final proposal will specify the meeting location, departure arrangements and any transfers required before the first cycling stage.",
  },
  {
    q: "Which areas of southern Morocco will we explore?",
    a: "The expedition is designed around the landscapes of southern Morocco. The exact valleys, villages, roads and overnight locations have not been fixed on this page and will be specified in the confirmed route proposal.",
  },
  {
    q: "How many kilometres will we cycle each day?",
    a: "Daily distances have not been specified here. They will depend on the selected route, terrain, elevation gain, road conditions and your group's riding experience. The daily programme should be agreed before booking.",
  },
  {
    q: "How difficult is the South Morocco Gravel Expedition?",
    a: "The difficulty depends on the total distance, daily elevation gain, road surfaces, weather and the number of consecutive riding days. Previous cycling experience is recommended. Share your riding background so a suitable route can be discussed.",
  },
  {
    q: "Do we need to bring our own gravel bicycles?",
    a: "You can discuss bringing your own bicycle or arranging a rental. Bicycle availability, specifications, rental costs and equipment arrangements must be confirmed in your trip proposal.",
  },
  {
    q: "Is a support vehicle available during the expedition?",
    a: "Support vehicle arrangements can be discussed when planning your trip. Any included vehicle support, luggage transfers or mechanical assistance will be specified in your final proposal.",
  },
  {
    q: "What accommodation is included?",
    a: "Accommodation arrangements depend on the selected route and confirmed package. The type of accommodation, number of nights and included services should be clearly listed in your final proposal.",
  },
  {
    q: "What is the best time for gravel cycling in southern Morocco?",
    a: "Spring and autumn are generally suitable periods to consider for cycling in southern Morocco. Conditions vary by location and elevation, so the travel dates and route should be reviewed together before booking.",
  },
  {
    q: "Can the expedition be customised?",
    a: "This private expedition can be discussed around your riding level, preferred terrain, travel dates and group requirements. The final route, accommodation and support services should be agreed before booking.",
  },
  {
    q: "What should I bring for five days of gravel cycling?",
    a: "Bring a helmet, cycling clothing, gloves, suitable footwear, hydration equipment, sun protection and personal bicycle tools. You should also prepare suitable clothing and personal items for the overnight stops. The final equipment and luggage list will depend on the confirmed arrangements.",
  },
];

const relatedTours = [
  {
    category: "GRAVEL CYCLING",
    title: "Atlas to Desert Gravel Adventure",
    text: "Explore changing landscapes on a longer gravel journey connecting the Atlas region with southern Morocco.",
    image: "/images/gravel-atlas-to-sahara-desert-mtb-tour.jpg",
    href: "/cycling-trips/trip/atlas-to-desert-gravel-adventure-ride-5-day",
  },
  {
    category: "GRAVEL CYCLING",
    title: "Three Valleys Gravel Tour",
    text: "Discover contrasting Atlas valleys, rural roads and traditional villages on a four-day gravel cycling adventure.",
    image: "/images/gravel-cycling-atlas-mountains.jpg",
    href: "/cycling-trips/trip/three-valley-gravel-tour-4-day",
  },
  {
    category: "GRAVEL CYCLING",
    title: "Anti-Atlas Gravel Discovery",
    text: "Explore the landscapes and rural roads of the Anti-Atlas on a multi-day gravel cycling journey.",
    image: "/images/gravel-cycling-morocco.jpg",
    href: "/cycling-trips/trip/anti-atlas-gravel-discovery-4-day",
  },
];

export default function SouthMoroccoGravelExpedition5DayPage() {
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
          <img src={images.hero} alt="Gravel cycling through the landscapes of southern Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · SOUTH MOROCCO · GRAVEL · 5 DAYS</span>
          <h1>South Morocco Gravel Expedition</h1>
          <p className="at-hero-description">
            Discover the landscapes of southern Morocco
            on a five-day gravel cycling expedition.
            Ride selected rural roads and gravel routes,
            explore traditional villages and experience
            the changing scenery of the region.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Gravel Expedition <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>05 DAYS</strong><span>Gravel expedition</span></div>
            <div><strong>SOUTH MOROCCO</strong><span>Destination</span></div>
            <div><strong>GRAVEL</strong><span>Roads and rural routes</span></div>
            <div><strong>MOROCCO</strong><span>Culture and scenery</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>5 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>South Morocco</strong></div>
          <div className="at-fact"><span>Tour format</span><strong>Private Expedition</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Gravel Cycling</strong></div>
        </div>
      </section>

      <nav className="at-subnav">
        <div className="at-container at-subnav-inner">
          <a href="#overview">Overview</a>
          <a href="#highlights">Highlights</a>
          <a href="#route">Route & Terrain</a>
          <a href="#itinerary">Itinerary</a>
          <a href="#included">Included</a>
          <a href="#preparation">Preparation</a>
          <a href="#faqs">FAQs</a>
        </div>
      </nav>

      <section className="at-section" id="overview">
        <div className="at-container at-overview-grid">
          <div className="at-overview-image">
            <img src={images.overview} alt="Gravel cycling adventure in southern Morocco" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A FIVE-DAY GRAVEL EXPEDITION</span>
            <h2 className="at-heading">Discover Southern Morocco on a Multi-Day Gravel Journey</h2>
            <p className="at-copy">
              The South Morocco Gravel Expedition is a
              five-day cycling journey designed to explore
              the changing landscapes of southern Morocco.
              Travel beyond the main roads and discover
              the region at cycling pace.
            </p>
            <p className="at-copy">
              Depending on the selected route, the journey
              can combine suitable gravel tracks, rural
              roads and paved connections. The landscapes
              may include open countryside, mountain
              surroundings and traditional settlements.
            </p>
            <p className="at-copy">
              This private expedition can be planned around
              your riding experience, preferred terrain and
              travel dates. The exact route, daily distances,
              elevation gain, accommodation and support
              arrangements should be confirmed before departure.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the itinerary →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE GRAVEL EXPEDITION</span>
            <h2 className="at-heading">Five Days Exploring the Landscapes of Southern Morocco</h2>
            <p className="at-copy">
              Southern Morocco offers a varied setting
              for a multi-day gravel journey. Selected
              rural roads and suitable tracks provide
              opportunities to explore landscapes and
              communities beyond the main routes.
            </p>
            <p className="at-copy">
              Share your cycling background, preferred
              daily distances, experience on gravel and
              bicycle setup. The route, riding stages,
              overnight stops and support arrangements
              can then be discussed around your group.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>South Morocco Gravel Expedition</h3>
            <p>A private five-day gravel cycling journey exploring selected routes and landscapes in southern Morocco.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>5 days / 4 nights</strong></li>
              <li><span>Destination</span><strong>South Morocco</strong></li>
              <li><span>Starting point</span><strong>To be confirmed</strong></li>
              <li><span>Tour format</span><strong>Private expedition</strong></li>
              <li><span>Route programme</span><strong>Gravel and rural routes</strong></li>
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
              <h2 className="at-heading">Highlights of the South Morocco Gravel Expedition</h2>
            </div>
            <p>
              Discover southern Morocco over five days,
              ride selected gravel roads and experience
              the changing landscapes and rural culture
              of the region on a private cycling expedition.
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
            <img src={images.trails} alt="Gravel roads and open landscapes in southern Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE & TERRAIN</span>
            <h2 className="at-heading">Remote Gravel Roads and Changing Southern Landscapes</h2>
            <p className="at-copy">
              Southern Morocco offers varied terrain
              and changing road conditions. Depending
              on the selected area, a gravel expedition
              may combine unpaved sections, rural roads
              and paved connections.
            </p>
            <p className="at-copy">
              The final route will be selected according
              to your group's riding experience, available
              time, road conditions and the landscapes
              you would like to explore. Exact daily
              distances and elevation figures will be
              confirmed before departure.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Selected gravel roads and suitable rural tracks</li>
              <li><span>02</span>Changing landscapes across southern Morocco</li>
              <li><span>03</span>Traditional settlements and rural surroundings</li>
              <li><span>04</span>Daily riding planned around your experience</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR JOURNEY</span>
            <h2 className="at-heading">Expedition Information</h2>
            <p className="at-copy">
              Review the main details of this five-day
              gravel cycling expedition. Exact route,
              starting point, daily distances, elevation,
              road surfaces, accommodation, bicycle
              arrangements and support services should
              be confirmed in your personalised proposal.
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
          <img src={images.village} alt="Traditional village and rural architecture in Morocco" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover the Landscapes and Culture of Southern Morocco</h2>
          <p className="at-copy">
            This expedition is about more than the
            kilometres covered. Beyond the cycling
            routes, discover the landscapes, rural
            architecture and communities that give
            southern Morocco its distinctive character.
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
              <span className="at-eyebrow">GRAVEL CYCLING MOMENTS</span>
              <h2 className="at-heading">Explore the Landscapes Along the Expedition</h2>
            </div>
            <p>
              Discover the gravel terrain, rural
              settlements, mountain surroundings
              and open landscapes that make southern
              Morocco an interesting destination
              for a multi-day cycling journey.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="Mountain landscapes in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.trails} alt="Gravel roads in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional rural village in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Southern Moroccan countryside landscape" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Gravel cycling expedition in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">FIVE DAYS IN MOROCCO</span>
              <h2 className="at-heading">South Morocco Gravel Expedition Itinerary</h2>
            </div>
            <p>
              A suggested five-day structure exploring
              selected gravel routes in southern Morocco.
              The final starting point, daily stages,
              accommodation and transfers are confirmed
              during trip planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines the proposed structure
            of the expedition. Exact route selection,
            daily distances, elevation gain, road surfaces,
            overnight locations and support arrangements
            depend on the final programme agreed with your group.
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
              <span className="at-eyebrow">YOUR EXPEDITION ARRANGEMENTS</span>
              <h2 className="at-heading">What Is Included in Your Gravel Expedition?</h2>
            </div>
            <p>
              Final inclusions are confirmed in your
              booking proposal. Review the services
              listed below and check your personalised
              itinerary before confirming your expedition.
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
              <h2 className="at-heading">Preparing for Your South Morocco Gravel Expedition</h2>
            </div>
            <p>
              Prepare your bicycle, fitness and equipment
              for five days of cycling through the varied
              roads and landscapes of southern Morocco.
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
            <img src={images.cycling} alt="Gravel cycling through the landscapes of Morocco" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">Difficulty and Cycling Experience</h2>
            <p className="at-copy">
              A five-day gravel expedition involves
              several consecutive days of cycling across
              varied terrain. Riding may include gravel
              sections, paved connections, climbs,
              descents and exposed countryside roads.
              The overall difficulty depends on the
              selected route, daily distances, elevation
              gain and weather conditions.
            </p>
            <p className="at-copy">
              Tell us about your cycling experience,
              the distances you normally ride and your
              preferred terrain. This information will help
              when discussing a suitable route, daily
              stages and bicycle setup for your expedition.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty,
              daily riding distances, elevation figures
              and road surfaces must be checked against
              the actual route before booking. This page
              does not promise a fixed technical grade
              or daily mileage.
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
              Find answers to common questions about
              the South Morocco Gravel Expedition.
              Contact our team if you need more details
              before planning your journey.
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
          <img src={images.final} alt="Gravel cycling landscape in southern Morocco" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR GRAVEL EXPEDITION STARTS HERE</span>
          <h2>Ready to Explore Southern Morocco by Gravel Bike?</h2>
          <p>
            Tell us your preferred dates, group size,
            cycling experience and bicycle requirements.
            We can discuss a five-day gravel expedition
            in southern Morocco and help plan a journey
            suited to your riding style.
          </p>
          <a className="at-button" href="/contact">Plan Your Gravel Expedition <span>→</span></a>
        </div>
      </section>

      <section className="at-related-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EXPLORE MORE</span>
              <h2 className="at-heading">More Gravel Cycling Adventures in Morocco</h2>
            </div>
            <p>
              Discover more ways to experience Morocco,
              from the Atlas Mountains and traditional
              valleys to longer gravel journeys through
              the landscapes of the south.
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