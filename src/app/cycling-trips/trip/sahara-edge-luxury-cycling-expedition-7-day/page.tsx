import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sahara Edge Luxury Cycling Expedition – 7 Days | Mountain Bike Morocco",
  description:
    "Experience a seven-day private luxury cycling expedition towards the Sahara edge in Morocco. Discover the Atlas foothills, Agafay landscapes, traditional villages and dramatic desert scenery.",
  alternates: {
    canonical: "/cycling-trips/trip/sahara-edge-luxury-cycling-expedition-7-day",
  },
};

const images = {
  hero: "/images/Desert-Agafay-Morocco.jpg",
  overview: "/images/luxury-cycling-morocco.jpg",
  atlas: "/images/atlas-mountains-cycling-expedition.jpg",
  desert: "/images/atlas-desert-morocco.jpg",
  agafay: "/images/Desert-Agafay-Morocco.jpg",
  village: "/images/morocco-berber-valley.jpg",
  cycling: "/images/luxury-cycling-holiday-trip-morocco.jpg",
  final: "/images/morocco-luxury-bike-tour.jpg",
};

const facts = [
  ["Duration", "7 days"],
  ["Destination", "Morocco"],
  ["Region", "Atlas foothills and Sahara-edge landscapes"],
  ["Starting point", "To be confirmed"],
  ["Cycling style", "Scenic road and mixed-terrain cycling"],
  ["Difficulty", "Adapted to selected routes"],
  ["Experience", "Leisure and experienced cyclists"],
  ["Tour format", "Private luxury expedition"],
  ["Best season", "Spring and autumn, subject to conditions"],
];

const highlights = [
  {
    number: "01",
    title: "Ride Towards the Sahara Edge",
    text: "Experience the changing landscapes of southern Morocco, from mountain foothills and open countryside towards the dramatic scenery of the desert regions.",
  },
  {
    number: "02",
    title: "A Private Luxury Expedition",
    text: "Enjoy a seven-day private cycling journey with a programme planned around your preferred dates, riding experience and travel expectations.",
  },
  {
    number: "03",
    title: "Desert and Mountain Landscapes",
    text: "Discover contrasting scenery, from the Atlas foothills and rocky terrain to wide-open landscapes and the distinctive atmosphere of Morocco's desert edge.",
  },
  {
    number: "04",
    title: "Culture Beyond the Bicycle",
    text: "Combine memorable cycling with opportunities to discover traditional villages, local hospitality and the character of southern Morocco.",
  },
];

const beyondTrail = [
  {
    title: "Desert Landscapes",
    text: "Discover the open spaces, rugged terrain and distinctive colours of Morocco's desert-edge regions.",
  },
  {
    title: "Atlas Foothills",
    text: "Experience the transition from mountain landscapes to the drier countryside and wide-open scenery of southern Morocco.",
  },
  {
    title: "Traditional Communities",
    text: "Explore the character of rural settlements and discover local traditions along selected routes.",
  },
  {
    title: "Time to Unwind",
    text: "Balance the cycling programme with time to relax, enjoy your accommodation and appreciate the landscapes around you.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Marrakech and Expedition Welcome",
    location: "Marrakech – Morocco",
    distance: "No scheduled cycling",
    riding: "Arrival and preparation",
    image: images.overview,
    text: "Arrive in Marrakech and begin your private Sahara Edge Luxury Cycling Expedition. Meet the local team and review the proposed seven-day programme, cycling routes and travel arrangements. There will be time to discuss your cycling experience, check equipment and prepare for the journey towards southern Morocco. Your accommodation, meeting point and any agreed transfers will be confirmed in your personalised itinerary.",
    details: [
      "Arrive at the agreed meeting point in Marrakech",
      "Meet the local team",
      "Review the proposed expedition programme",
      "Discuss cycling experience and route preferences",
      "Check bicycles and personal equipment",
      "Review the journey towards the Sahara edge",
      "Settle into the confirmed accommodation",
    ],
  },
  {
    day: "02",
    title: "From Marrakech Towards the Atlas Foothills",
    location: "Marrakech and surrounding countryside",
    distance: "To be confirmed",
    riding: "Scenic cycling",
    image: images.atlas,
    text: "Begin the cycling journey by leaving the surroundings of Marrakech and heading towards the landscapes of the Atlas foothills. Enjoy the changing scenery as the city gives way to countryside, open roads and mountain views. The selected route and daily distance will depend on your group's experience, the agreed itinerary and local conditions. Enjoy suitable stops along the way before reaching your confirmed overnight location.",
    details: [
      "Prepare bicycles and safety equipment",
      "Review the day's selected cycling route",
      "Leave the Marrakech surroundings",
      "Explore the Atlas foothill landscapes",
      "Enjoy scenic stops and refreshment breaks",
      "Adapt the riding pace to the group",
      "Complete the agreed route",
      "Arrive at the confirmed accommodation",
    ],
  },
  {
    day: "03",
    title: "Cycling Through the Southern Atlas Landscapes",
    location: "Atlas foothills – selected route",
    distance: "To be confirmed",
    riding: "Scenic mountain and countryside cycling",
    image: images.desert,
    text: "Continue towards the landscapes of southern Morocco, discovering the transition between mountain foothills and drier countryside. This stage is planned around selected roads and scenic routes that suit your group's cycling experience. Enjoy the changing colours of the landscape and the distinctive atmosphere of the region. Exact terrain, elevation and daily distance will be confirmed before departure.",
    details: [
      "Review the selected route and conditions",
      "Prepare for the day's cycling",
      "Ride through selected southern Atlas landscapes",
      "Discover changing countryside and mountain scenery",
      "Enjoy suitable stops along the route",
      "Include food and refreshment breaks as agreed",
      "Complete the planned ride",
    ],
  },
  {
    day: "04",
    title: "Discover the Landscapes of the Sahara Edge",
    location: "Southern Morocco – selected desert-edge region",
    distance: "To be confirmed",
    riding: "Scenic cycling through open landscapes",
    image: images.agafay,
    text: "Experience the atmosphere of Morocco's desert-edge landscapes. The scenery becomes more open and rugged, with striking colours, wide horizons and a distinctive sense of space. The day's route will be selected according to the agreed itinerary and the suitability of the terrain for your bicycles. Enjoy a memorable day of cycling with time to appreciate the surroundings and take suitable breaks.",
    details: [
      "Prepare for the selected desert-edge route",
      "Review the terrain and local conditions",
      "Begin the planned cycling experience",
      "Explore open landscapes and rugged scenery",
      "Enjoy suitable photography stops",
      "Take refreshment breaks during the ride",
      "Reach the confirmed overnight location",
    ],
  },
  {
    day: "05",
    title: "Remote Countryside and Traditional Villages",
    location: "Southern Morocco – selected rural route",
    distance: "To be confirmed",
    riding: "Scenic cycling and cultural discovery",
    image: images.village,
    text: "Continue your expedition through selected rural landscapes and traditional settlements. This stage combines cycling with opportunities to discover the character of southern Morocco and its communities. The route can be adapted to your group's interests, cycling experience and preferred pace. Enjoy the changing scenery and time for local discovery along the way.",
    details: [
      "Review the day's cycling programme",
      "Ride through selected rural landscapes",
      "Discover traditional settlements along the route",
      "Enjoy views of the surrounding countryside",
      "Allow time for suitable local stops",
      "Include refreshment breaks",
      "Complete the agreed cycling route",
    ],
  },
  {
    day: "06",
    title: "Final Sahara-Edge Cycling Experience",
    location: "Selected southern Morocco cycling region",
    distance: "To be confirmed",
    riding: "Final private cycling day",
    image: images.cycling,
    text: "Enjoy the final full day of your private cycling expedition. The route will be selected to complement the journey and suit your group's preferences, offering another opportunity to experience the landscapes of southern Morocco. Depending on the agreed programme, the day can include open countryside, desert-edge scenery or selected mountain routes. Return to your confirmed accommodation and enjoy a relaxed final evening.",
    details: [
      "Review the final cycling route",
      "Prepare bicycles and equipment",
      "Begin the final planned ride",
      "Enjoy the selected landscapes of southern Morocco",
      "Include suitable stops and refreshments",
      "Complete the agreed cycling experience",
      "Return to the confirmed accommodation",
      "Enjoy your final evening of the expedition",
    ],
  },
  {
    day: "07",
    title: "Return Arrangements and Departure",
    location: "Agreed departure destination",
    distance: "No scheduled cycling",
    riding: "Departure and transfer arrangements",
    image: images.final,
    text: "Enjoy breakfast and a relaxed final morning according to your departure schedule. Complete your check-out and meet your agreed transfer if included in your proposal. Your seven-day Sahara Edge Luxury Cycling Expedition comes to an end after a journey through Morocco's mountain foothills, rural landscapes and desert-edge scenery.",
    details: [
      "Enjoy your final breakfast",
      "Complete accommodation check-out",
      "Review departure arrangements",
      "Meet the agreed transfer if included",
      "Travel to the confirmed departure point",
      "Complete your seven-day expedition",
    ],
  },
];

const inclusions = [
  "Seven-day private expedition programme planning",
  "Route planning according to your group's experience",
  "Local cycling support as agreed in your itinerary",
  "Accommodation only when specifically included",
  "Bicycle rental if specifically included",
  "Transfers specified in your final proposal",
  "Support vehicle if explicitly included",
  "Meals and refreshments only when listed",
  "Additional activities if agreed",
  "Services confirmed in your booking proposal",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Bicycles unless included in your proposal",
  "Personal cycling equipment and clothing",
  "Accommodation unless specifically included",
  "Meals and drinks not specified in your itinerary",
  "Personal expenses and tips",
  "Additional accommodation or nights",
  "Optional activities not listed in your proposal",
  "Services not specifically confirmed in your booking",
];

const preparation = [
  {
    title: "Choose Suitable Cycling Equipment",
    text: "The appropriate bicycle depends on the confirmed routes and terrain. Discuss road surfaces, tyre requirements and bicycle rental options before your departure.",
  },
  {
    title: "Prepare for Changing Conditions",
    text: "Pack comfortable cycling clothing, gloves, suitable footwear and light layers. Temperatures can vary between mountain areas and warmer southern landscapes.",
  },
  {
    title: "Bring Essential Equipment",
    text: "A helmet, sunglasses, water bottles, sun protection and basic personal cycling accessories are recommended. Confirm any additional equipment requirements before travelling.",
  },
  {
    title: "Be Ready for the Route",
    text: "Daily distances and terrain will depend on the selected itinerary. Share your usual riding distances and experience so that suitable routes can be discussed.",
  },
];

const faqs = [
  {
    q: "How long is the Sahara Edge Luxury Cycling Expedition?",
    a: "The expedition is planned as a seven-day private cycling holiday in Morocco. The programme combines selected cycling routes with the accommodation and travel arrangements agreed in your proposal.",
  },
  {
    q: "Is this a private cycling expedition?",
    a: "Yes. The tour is designed as a private experience. Your dates, group size, cycling experience, route preferences and travel arrangements can be discussed during planning.",
  },
  {
    q: "Where does the Sahara Edge expedition take place?",
    a: "The programme is designed around selected landscapes towards the Sahara edge, potentially including the Atlas foothills and southern Moroccan countryside. Exact regions and routes will be confirmed in your personalised itinerary.",
  },
  {
    q: "Will we cycle in the Sahara Desert itself?",
    a: "The tour focuses on landscapes towards the Sahara edge. Whether any specific desert or off-road sections are suitable depends on the final route, terrain, bicycle choice and local conditions. The confirmed itinerary will explain the actual riding areas.",
  },
  {
    q: "What type of bicycle is suitable?",
    a: "The suitable bicycle depends on the confirmed routes and surfaces. Road bicycles may be appropriate for paved roads, while other sections may require a bicycle suited to mixed terrain. Equipment requirements should be agreed before booking.",
  },
  {
    q: "How difficult is the expedition?",
    a: "Difficulty depends on the selected routes, road surfaces, elevation, daily distances, weather and your cycling experience. Share your usual riding distances and experience so that suitable routes can be discussed.",
  },
  {
    q: "How far will we cycle each day?",
    a: "Daily distances are not fixed on this page. They will depend on the selected route, terrain, elevation, group experience and local conditions. Exact details will be confirmed in your itinerary.",
  },
  {
    q: "Can the itinerary be customised?",
    a: "Yes. The private programme can be discussed around your preferred dates, group size, cycling experience, route interests and accommodation preferences. Final arrangements will be confirmed in your proposal.",
  },
  {
    q: "Is luxury accommodation included?",
    a: "Accommodation depends on the package agreed for your expedition. The accommodation category, room arrangements, included nights and meal basis will be specified in your final proposal.",
  },
  {
    q: "Are bicycles included?",
    a: "Bicycle rental is not automatically included. You can discuss bringing your own bicycle or arranging a suitable rental. Availability, specifications and costs will be confirmed separately.",
  },
  {
    q: "Is a support vehicle available?",
    a: "A support vehicle can be discussed as part of your expedition arrangements. Availability, operating schedule, passenger capacity and costs must be confirmed in your proposal.",
  },
  {
    q: "Are meals included?",
    a: "Meals and refreshments depend on the package agreed for your expedition. Included breakfasts, lunches, dinners and other refreshments will be listed in your final itinerary.",
  },
  {
    q: "Where does the tour start and finish?",
    a: "The meeting point and departure destination will be confirmed in your trip proposal. Transfers from Marrakech or another agreed location can be discussed during planning.",
  },
  {
    q: "What is the best season for cycling towards the Sahara?",
    a: "Spring and autumn can offer suitable cycling conditions in many parts of Morocco. Conditions vary between mountain and desert-edge regions, so the final route should take local temperatures and weather into account.",
  },
  {
    q: "What should I bring for a desert-edge cycling trip?",
    a: "Bring suitable cycling clothing, a helmet, comfortable cycling shoes, water bottles, sun protection, sunglasses and light layers. Additional equipment requirements will depend on the confirmed routes and bicycle type.",
  },
];

const relatedTours = [
  {
    category: "LUXURY CYCLING",
    title: "Morocco Luxury Cycling Week",
    text: "Enjoy a seven-day private cycling holiday through selected Atlas Mountain landscapes and beautiful Moroccan valleys.",
    image: "/images/luxury-cycling-holiday-trip-morocco.jpg",
    href: "/cycling-trips/trip/morocco-luxury-cycling-week-7-day",
  },
  {
    category: "ROAD CYCLING",
    title: "Atlas to Sahara Road Cycling Expedition",
    text: "Discover a longer cycling journey through Morocco's mountain regions and dramatic desert landscapes.",
    image: "/images/atlas-mountains-cycling-expedition.jpg",
    href: "/cycling-trips/trip/atlas-to-sahara-road-cycling-expedition-8-day",
  },
  {
    category: "ROAD CYCLING",
    title: "South Morocco Road Cycling Journey",
    text: "Explore the landscapes and changing scenery of southern Morocco on a private road cycling journey.",
    image: "/images/road-cycling-holiday-morocco.jpg",
    href: "/cycling-trips/trip/south-morocco-road-cycling-journey-6-day",
  },
];

export default function SaharaEdgeLuxuryCyclingExpeditionPage() {
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
          <img src={images.hero} alt="Dramatic desert-edge landscape in Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · SAHARA EDGE · PRIVATE LUXURY CYCLING · 7 DAYS</span>
          <h1>Sahara Edge Luxury Cycling Expedition</h1>
          <p className="at-hero-description">
            Seven days of private cycling
            and discovery through the
            dramatic landscapes of southern
            Morocco. Ride towards the Sahara
            edge, explore the Atlas foothills
            and experience the beauty and
            culture of Morocco along the way.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Expedition <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>07 DAYS</strong><span>Private expedition</span></div>
            <div><strong>SAHARA EDGE</strong><span>Desert landscapes</span></div>
            <div><strong>ATLAS</strong><span>Mountain foothills</span></div>
            <div><strong>LUXURY</strong><span>Tailored experience</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>7 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Southern Morocco</strong></div>
          <div className="at-fact"><span>Experience</span><strong>Private Expedition</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Luxury Cycling</strong></div>
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
            <img src={images.overview} alt="Private luxury cycling expedition in Morocco" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A SEVEN-DAY PRIVATE EXPEDITION</span>
            <h2 className="at-heading">Discover the Sahara Edge by Bicycle</h2>
            <p className="at-copy">
              Sahara Edge Luxury Cycling
              Expedition is a seven-day
              private journey for cyclists
              who want to explore the
              dramatic landscapes of
              southern Morocco.
            </p>
            <p className="at-copy">
              Travel through selected
              countryside and mountain
              foothill routes towards the
              Sahara edge, discovering
              open landscapes, rugged
              scenery and traditional
              communities along the way.
            </p>
            <p className="at-copy">
              The cycling programme is
              planned around your group's
              experience and preferred
              riding style. Exact routes,
              daily distances, accommodation,
              meals, transfers and support
              arrangements will be confirmed
              in your personalised proposal.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the seven-day expedition →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE SAHARA-EDGE JOURNEY</span>
            <h2 className="at-heading">From the Atlas Foothills to the Desert Landscapes</h2>
            <p className="at-copy">
              Experience the changing
              scenery of Morocco as
              the landscape opens towards
              the south. This expedition
              brings together selected
              cycling routes, rural discovery
              and the atmosphere of
              the desert edge.
            </p>
            <p className="at-copy">
              Enjoy a private programme
              with time for cycling,
              photographs, local discovery
              and relaxation between
              the riding days.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Sahara Edge Luxury Cycling Expedition</h3>
            <p>A seven-day private cycling journey towards the dramatic landscapes of southern Morocco.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>7 days</strong></li>
              <li><span>Destination</span><strong>Morocco</strong></li>
              <li><span>Tour format</span><strong>Private expedition</strong></li>
              <li><span>Route style</span><strong>Scenic cycling</strong></li>
              <li><span>Experience</span><strong>Tailored programme</strong></li>
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
              <h2 className="at-heading">Highlights of the Sahara Edge Expedition</h2>
            </div>
            <p>
              Discover the contrasting
              landscapes of southern Morocco
              on a private cycling journey
              combining mountain foothills,
              desert-edge scenery and
              cultural discovery.
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
            <img src={images.desert} alt="Desert-edge scenery in southern Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE &amp; TERRAIN</span>
            <h2 className="at-heading">Explore the Changing Landscapes of Southern Morocco</h2>
            <p className="at-copy">
              This private expedition
              is designed around selected
              cycling routes towards the
              Sahara edge. Depending on
              the agreed programme, the
              journey can include Atlas
              foothills, open countryside,
              rural settlements and
              desert-edge landscapes.
            </p>
            <p className="at-copy">
              Route selection will take
              account of your bicycle,
              riding experience, road
              surfaces, elevation, daily
              distances, weather and
              local conditions. Exact
              riding areas will be
              confirmed before departure.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Seven-day private luxury cycling expedition</li>
              <li><span>02</span>Selected Atlas foothill landscapes</li>
              <li><span>03</span>Open countryside and Sahara-edge scenery</li>
              <li><span>04</span>Traditional villages and local discovery</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR EXPEDITION</span>
            <h2 className="at-heading">Tour Information</h2>
            <p className="at-copy">
              Review the main details
              of this seven-day private
              cycling expedition. Exact
              routes, distances, elevation,
              accommodation, meals,
              transfers, bicycle arrangements
              and support services will
              be confirmed in your
              personalised proposal.
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
          <img src={images.village} alt="Traditional rural village in southern Morocco" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover the Culture and Spirit of Southern Morocco</h2>
          <p className="at-copy">
            The experience extends
            beyond the cycling routes.
            Discover the landscapes,
            communities and traditions
            of southern Morocco, with
            opportunities to enjoy
            local hospitality and
            the character of the region.
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
              <span className="at-eyebrow">SOUTHERN MOROCCO CYCLING</span>
              <h2 className="at-heading">Landscapes Along the Sahara Edge</h2>
            </div>
            <p>
              Experience the changing
              scenery of Morocco, from
              mountain foothills and rural
              countryside to open desert-edge
              landscapes and traditional
              communities.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.desert} alt="Open desert-edge landscape in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.atlas} alt="Atlas mountain scenery in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional village in southern Morocco" /></div>
            <div className="at-gallery-item"><img src={images.agafay} alt="Rocky desert landscape in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Luxury cycling experience in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">SEVEN DAYS IN SOUTHERN MOROCCO</span>
              <h2 className="at-heading">Sahara Edge Luxury Cycling Expedition Itinerary</h2>
            </div>
            <p>
              Seven days combining
              private cycling, mountain
              foothills, desert-edge scenery,
              rural discovery and opportunities
              to enjoy Morocco at your
              own pace.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines a proposed
            structure for the seven-day
            expedition. Exact route selection,
            daily distances, elevation,
            accommodation, meals, meeting
            points, support services and
            transfer arrangements depend
            on the programme agreed
            with your group.
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
              <h2 className="at-heading">What Is Included in Your Luxury Expedition?</h2>
            </div>
            <p>
              Final inclusions are confirmed
              in your booking proposal.
              Check your personalised itinerary
              for accommodation, transport,
              meals, bicycle arrangements,
              support services and additional
              experiences included in your tour.
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
              <span className="at-eyebrow">BEFORE YOU TRAVEL</span>
              <h2 className="at-heading">Preparing for Your Sahara Edge Expedition</h2>
            </div>
            <p>
              Prepare your bicycle,
              clothing and travel essentials
              for a comfortable cycling
              journey through the
              landscapes of southern Morocco.
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
            <img src={images.cycling} alt="Cycling through the Moroccan countryside" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">A PRIVATE CYCLING EXPEDITION</span>
            <h2 className="at-heading">Difficulty and Cycling Experience</h2>
            <p className="at-copy">
              The difficulty of this
              expedition depends on
              the selected routes, terrain,
              daily distances, elevation,
              road surfaces and cycling
              experience of your group.
              Conditions can vary between
              mountain foothills and
              desert-edge landscapes.
            </p>
            <p className="at-copy">
              Share your group's usual
              cycling distances, experience
              and preferred type of riding.
              This will help determine
              suitable routes and a
              comfortable daily schedule
              for your seven-day expedition.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final route
              suitability must be checked against
              the experience of all participants,
              bicycle type, road surfaces, terrain
              and weather. Daily distances,
              elevation, accommodation and
              support services will be confirmed
              before booking.
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
              Find answers to common
              questions about the Sahara
              Edge Luxury Cycling Expedition.
              Contact our team if you need
              more information before planning
              your seven days in Morocco.
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
          <img src={images.final} alt="Luxury cycling journey through Morocco" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR SAHARA-EDGE JOURNEY STARTS HERE</span>
          <h2>Ready to Plan Your Sahara Edge Luxury Cycling Expedition?</h2>
          <p>
            Tell us your preferred dates,
            group size, cycling experience
            and travel preferences. We can
            discuss suitable routes,
            accommodation, bicycle
            arrangements, transfers,
            support services and the
            details of your seven-day journey.
          </p>
          <a className="at-button" href="/contact">Plan Your Expedition <span>→</span></a>
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
              Discover more ways to
              experience Morocco by bike,
              from luxury cycling escapes
              in the Atlas Mountains to
              longer road cycling journeys
              through the country's
              mountain and desert regions.
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
              southern landscapes and unforgettable cycling routes
              with Mountain Bike Morocco.
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
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}