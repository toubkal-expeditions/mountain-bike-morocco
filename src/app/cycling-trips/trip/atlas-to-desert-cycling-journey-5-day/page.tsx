import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas to Desert Cycling Journey – 5 Days | Mountain Bike Morocco",
  description:
    "Ride from the dramatic landscapes of Morocco’s High Atlas towards the south and its pre-Saharan valleys on a guided five-day cycling journey, with mountain terrain, traditional villages and changing desert scenery.",
  alternates: {
    canonical: "/cycling-trips/trip/atlas-to-desert-cycling-journey-5-day",
  },
};

const images = {
  hero: "/images/atlas-to-desert-biking-tour.jpg",
  overview: "/images/atlas-desert-cycling-tour.jpg",
  atlas: "/images/atlas-mountains-cycling-expedition.jpg",
  valley: "/images/atlas-desert-mtb-tour-morocco.JPG",
  village: "/images/berber-villages-cycling-expeditions.jpg",
  cycling: "/images/mtb-morocco-valley-of-the-draa-8.JPG",
  mountain: "/images/south-morocco-cycling-expedition.jpg",
  final: "/images/sahara-morocco-cycling-holiday.jpg",
};

const facts = [
  ["Tour format", "Guided multi-day cycling journey"],
  ["Destination", "High Atlas to southern Morocco’s desert regions"],
  ["Starting point", "Marrakech – agreed meeting point"],
  ["Main areas", "Atlas landscapes, mountain valleys and pre-Saharan terrain"],
  ["Cycling style", "Mountain and adventure cycling"],
  ["Difficulty", "To be matched to the selected route and rider experience"],
  ["Experience", "Previous cycling experience recommended"],
  ["Duration", "5 days / 4 nights, subject to final arrangements"],
  ["Travel dates", "On request"],
];

const highlights = [
  {
    number: "01",
    title: "From the High Atlas Towards the Desert",
    text: "Follow a changing landscape from mountain scenery and highland valleys towards the warmer, drier regions of southern Morocco. The exact route and overnight locations are confirmed in your trip proposal.",
  },
  {
    number: "02",
    title: "Five Days of Varied Riding",
    text: "Combine mountain roads, rural tracks and open desert-edge terrain in a multi-day journey planned around your group's experience, preferred pace and the conditions along the route.",
  },
  {
    number: "03",
    title: "Discover Southern Morocco",
    text: "Pass through changing landscapes and traditional settlements, with opportunities to appreciate local architecture, cultivated valleys and the character of communities along the journey.",
  },
  {
    number: "04",
    title: "A Journey Planned Around Your Group",
    text: "Discuss your bike choice, riding ability, support requirements and preferred balance of cycling and cultural discovery before the daily stages are finalised.",
  },
];

const beyondTrail = [
  {
    title: "Amazigh mountain communities",
    text: "Discover the hospitality and everyday traditions of communities in the Atlas and southern valleys, with respectful visits and stops arranged around the route.",
  },
  {
    title: "Changing landscapes",
    text: "Experience the transition from rugged mountain scenery and cultivated valleys to arid plateaus, rocky desert terrain and wide southern horizons.",
  },
  {
    title: "Local food and hospitality",
    text: "Enjoy opportunities to experience regional cooking and local hospitality during the journey, with meals and refreshments confirmed in your final itinerary.",
  },
  {
    title: "A slower view of the south",
    text: "Make time between riding stages to appreciate village life, traditional buildings and the distinctive landscapes of Morocco beyond the main roads.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Marrakech to the High Atlas – Journey into the Mountains",
    location: "Marrakech · High Atlas region",
    distance: "Confirmed according to the selected route",
    riding: "Arrival transfer and introductory ride where arranged",
    image: images.atlas,
    text: "Meet in Marrakech and travel towards the High Atlas, with the precise start point and transfer plan confirmed before departure. After meeting the guide and checking the bikes, settle into the mountain environment. Depending on the agreed programme and arrival time, enjoy an introductory ride on suitable roads or tracks and take in the first views of the Atlas. Overnight accommodation and meals follow the confirmed arrangements.",
    details: [
      "Meet the guide and review the five-day programme",
      "Bike setup and safety briefing",
      "Transfer towards the agreed High Atlas starting area",
      "Optional introductory ride if included in the stage plan",
      "Overnight stay as specified in the confirmed proposal",
    ],
  },
  {
    day: "02",
    title: "High Atlas Riding – Mountain Tracks and Valley Landscapes",
    location: "High Atlas mountain region",
    distance: "Confirmed according to the selected route",
    riding: "Guided mountain cycling stage",
    image: images.overview,
    text: "Ride a selected stage through the High Atlas, where mountain roads, rural tracks and open valley scenery create a varied day in the saddle. The guide sets the pace around the group and current conditions, with planned breaks and opportunities to enjoy the surrounding villages and mountain views. The exact route, climbing and riding time are confirmed before the trip.",
    details: [
      "Breakfast and stage briefing",
      "Guided ride on the agreed Atlas route",
      "Stops for rest, water and scenery",
      "Lunch and support arrangements as confirmed",
      "Overnight accommodation at the agreed location",
    ],
  },
  {
    day: "03",
    title: "Across the Southern Valleys – From Mountains to Arid Landscapes",
    location: "Atlas foothills · Southern valleys",
    distance: "Confirmed according to the selected route",
    riding: "Cycling stage with transfer support where arranged",
    image: images.valley,
    text: "Continue south as the landscape gradually changes. Depending on the chosen itinerary, this stage may combine a cycling section with a support transfer to connect suitable riding areas. Expect a different atmosphere from the high mountains, with broader valleys, dry hillsides and traditional settlements. The exact road, trail and transfer combination is agreed in the final route plan.",
    details: [
      "Breakfast and review of the day's route",
      "Ride the selected transition stage",
      "Explore rural valleys and changing terrain",
      "Support vehicle or luggage transfer if included",
      "Overnight stay according to the confirmed itinerary",
    ],
  },
  {
    day: "04",
    title: "Desert-Edge Cycling – Open Tracks and Southern Horizons",
    location: "Southern Morocco · Pre-Saharan region",
    distance: "Confirmed according to the selected route",
    riding: "Guided cycling on suitable desert-edge terrain",
    image: images.cycling,
    text: "Discover the more open landscapes of southern Morocco on a route selected for the group's ability and the conditions. Riding may include firm tracks, quiet paved sections and rocky or sandy surfaces where appropriate. The guide adapts the pace to the terrain and weather, while support, water stops and any vehicle transfers follow the arrangements confirmed for your departure.",
    details: [
      "Stage briefing and equipment check",
      "Guided ride through the agreed southern landscape",
      "Regular hydration and rest stops",
      "Time to appreciate the desert-edge scenery and local settlements",
      "Overnight accommodation and dinner as confirmed",
    ],
  },
  {
    day: "05",
    title: "Final Southern Ride – Return Transfer to Marrakech",
    location: "Southern Morocco · Marrakech",
    distance: "Confirmed according to the selected route",
    riding: "Final ride or scenic transfer, according to the programme",
    image: images.final,
    text: "Complete the journey with a final ride where the route and timing allow, or enjoy a scenic transfer towards Marrakech if that is how your itinerary is arranged. Take time for a last look at the landscapes crossed during the expedition. The finish time, transfer duration, luggage arrangements and any optional riding are confirmed before departure.",
    details: [
      "Breakfast and final stage briefing",
      "Optional final cycling section if included in the programme",
      "Pack bikes and equipment for the return journey",
      "Return transfer to Marrakech as confirmed",
      "Trip concludes at the agreed drop-off point",
    ],
  },
];

const inclusions = [
  "Five-day route planning and trip coordination",
  "Local cycling guide where specified in your proposal",
  "Mountain-bike rental if included in your package",
  "Helmet and riding equipment only where specified",
  "Four nights of accommodation only where listed in the confirmed itinerary",
  "Meals explicitly listed in your proposal",
  "Marrakech transfers and inter-stage transport where included",
  "Support vehicle and luggage assistance where confirmed",
  "Water, refreshments and route-support arrangements as confirmed",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Bike rental unless specified in your proposal",
  "Personal cycling equipment and protective gear",
  "Meals and drinks not listed in the itinerary",
  "Personal expenses and tips",
  "Additional nights and transfers not included in your package",
  "Personal bike repairs or replacement parts unless agreed",
  "Services not specifically listed in your confirmed booking",
];

const preparation = [
  {
    title: "Cycling Experience and Fitness",
    text: "A five-day journey requires the ability to ride on consecutive days. Share your recent riding experience, fitness, climbing ability and confidence on uneven tracks so the stages can be planned appropriately.",
  },
  {
    title: "Bike and Equipment",
    text: "Confirm whether you will bring your own suitable mountain bike or request a rental. Check tyres, brakes, gears and basic spares, and agree how your bike will be transported between riding areas.",
  },
  {
    title: "Hydration and Sun Protection",
    text: "Southern Morocco can be hot and exposed, while mountain temperatures can be cooler. Carry suitable hydration and sun protection, and confirm daily water provision, refill opportunities and support arrangements.",
  },
  {
    title: "Clothing and Luggage",
    text: "Pack breathable riding clothing, gloves, suitable footwear and protective layers. Bring a warm layer for higher elevations and a compact change of clothes for evenings; confirm luggage limits with the organiser.",
  },
];

const faqs = [
  {
    q: "What is the Atlas to Desert Cycling Journey?",
    a: "It is a guided five-day cycling journey designed to connect the landscapes of the High Atlas with the valleys and drier desert-edge regions of southern Morocco. The exact route, overnight stops and riding stages are confirmed in the trip proposal.",
  },
  {
    q: "Where does the five-day journey start and finish?",
    a: "Marrakech is the proposed meeting and return point. Your final itinerary will confirm the meeting location, transfer arrangements, route start and finish points, and expected return time.",
  },
  {
    q: "Does the route reach the Sahara Desert?",
    a: "The tour title describes a journey from the Atlas towards desert landscapes. The precise southern destination and whether the itinerary includes a particular Sahara area must be confirmed with the organiser before booking; do not assume a specific desert camp or dune section is included.",
  },
  {
    q: "How difficult is this cycling tour?",
    a: "Difficulty depends on the final route, daily distance, climbing, surface conditions and weather. Previous cycling experience and the ability to ride on consecutive days are recommended. Share your fitness and technical level when enquiring.",
  },
  {
    q: "How many kilometres will we cycle each day?",
    a: "Daily distances and elevation are not fixed on this page. They depend on the selected route, terrain, group ability and any support transfers, and should be provided in your confirmed itinerary.",
  },
  {
    q: "What type of bike is recommended?",
    a: "A well-maintained mountain bike is a suitable starting point for mixed mountain and desert-edge tracks. The organiser can advise on the appropriate bike and tyres once the exact route and surfaces are confirmed.",
  },
  {
    q: "Are accommodation and meals included?",
    a: "Accommodation and meals are included only where they are explicitly listed in your confirmed package. Ask for the accommodation style, number of nights and meal plan before booking.",
  },
  {
    q: "Is a support vehicle available?",
    a: "Support vehicle, luggage transport, mechanical assistance and transfers depend on the package. Confirm which support services are provided, when the vehicle is available and what happens if you need to shorten a stage.",
  },
  {
    q: "Can I bring my own bicycle?",
    a: "You can discuss bringing your own bike. Confirm transport protection, vehicle capacity, luggage arrangements and any additional costs before travel.",
  },
  {
    q: "What should I pack for the different climates?",
    a: "Bring layered clothing for cooler mountain conditions and lightweight, breathable kit for warmer southern stages. Include gloves, suitable footwear, sun protection, hydration equipment and a compact evening layer.",
  },
  {
    q: "When is the best time to ride from the Atlas towards the desert?",
    a: "Spring and autumn are often comfortable seasons for a multi-region cycling journey, but conditions vary by altitude and destination. Confirm seasonal temperatures, wind, daylight and route access for your chosen dates.",
  },
  {
    q: "Can the itinerary be customised?",
    a: "Yes. Discuss your preferred dates, group size, riding level, bike requirements, accommodation style and desired balance of cycling and cultural visits. Any changes depend on route logistics and availability.",
  },
];

const relatedTours = [
  {
    category: "HIGH ATLAS CYCLING ESCAPE",
    title: "Marrakech to Atlas Cycling Escape",
    text: "Leave the city behind and ride towards the High Atlas on a two-day cycling escape through changing mountain landscapes.",
    image: "/images/atlas-marrakech-cycling-tour.jpg",
    href: "/cycling-trips/trip/marrakech-to-atlas-cycling-escape-2-days",
  },
  {
    category: "BERBER VILLAGES CYCLING",
    title: "Atlas Berber Villages Cycling Tour",
    text: "Ride between traditional mountain settlements and discover the valleys, local culture and trails of the High Atlas.",
    image: "/images/atlas-berber-valley-bike.JPG",
    href: "/cycling-trips/trip/atlas-berber-villages-cycling-tour-3-day",
  },
  {
    category: "HIGH ATLAS MOUNTAIN BIKING",
    title: "Marrakech and High Atlas MTB Tour",
    text: "Spend four days exploring the mountain terrain, village paths and varied riding landscapes of the High Atlas.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
    href: "/cycling-trips/trip/marrakech-high-atlas-mtb-tour-4-days",
  },
];

export default function AtlasToDesertCyclingJourneyPage() {
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
          <img
            src={images.hero}
            alt="Cycling expedition from the High Atlas towards the desert landscapes of southern Morocco"
          />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">
            MOROCCO · HIGH ATLAS TO SOUTHERN DESERT · 5-DAY CYCLING JOURNEY
          </span>
          <h1>Atlas to Desert Cycling Journey in Morocco</h1>
          <p className="at-hero-description">
            Ride from the dramatic High Atlas towards the wide-open landscapes of southern Morocco. Discover mountain valleys, traditional communities and desert-edge terrain on a five-day guided cycling journey planned around your group.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Plan Your Atlas to Desert Journey <span>→</span>
            </a>
            <a className="at-hero-back" href="/cycling-trips">
              Explore All Cycling Tours
            </a>
          </div>
          <div className="at-hero-bottom">
            <div>
              <strong>GUIDED</strong>
              <span>From Marrakech</span>
            </div>
            <div>
              <strong>CYCLING</strong>
              <span>Mountain & desert terrain</span>
            </div>
            <div>
              <strong>FIVE DAYS</strong>
              <span>Atlas to desert journey</span>
            </div>
            <div>
              <strong>ATLAS TO DESERT</strong>
              <span>Southern Morocco</span>
            </div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact">
            <span>Tour format</span>
            <strong>Guided Atlas to Desert Cycling Journey</strong>
          </div>
          <div className="at-fact">
            <span>Destination</span>
            <strong>High Atlas to Southern Morocco</strong>
          </div>
          <div className="at-fact">
            <span>Itinerary</span>
            <strong>Five-Day Journey</strong>
          </div>
          <div className="at-fact">
            <span>Travel dates</span>
            <strong>By Arrangement</strong>
          </div>
        </div>
      </section>

      <nav className="at-subnav">
        <div className="at-container at-subnav-inner">
          <a href="#overview">Overview</a>
          <a href="#highlights">Highlights</a>
          <a href="#route">Routes & Terrain</a>
          <a href="#itinerary">Itinerary</a>
          <a href="#included">Included</a>
          <a href="#preparation">Preparation</a>
          <a href="#faqs">FAQs</a>
        </div>
      </nav>

      <section className="at-section" id="overview">
        <div className="at-container at-overview-grid">
          <div className="at-overview-image">
            <img
              src={images.overview}
              alt="Cycling through the High Atlas on the route towards southern Morocco"
            />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">YOUR GUIDED ATLAS TO DESERT CYCLING JOURNEY</span>
            <h2 className="at-heading">
              Five Days from the Atlas Mountains Towards the Desert
            </h2>
            <p className="at-copy">
              This five-day cycling journey links the mountain landscapes of the High Atlas with the valleys and arid regions of southern Morocco. It is designed as a progressive adventure, with the route and daily stages agreed around your group rather than assumed distances or fixed trail conditions.
            </p>
            <p className="at-copy">
              From mountain tracks to open desert-edge roads, the planning process starts with your experience, preferences and travel dates. The exact route, riding surfaces, transfer links and overnight locations are confirmed in your proposal.
            </p>
            <p className="at-copy">
              Your final itinerary should confirm each riding stage, distances, elevation, bike arrangements, support plan, guiding, four-night accommodation schedule, meals and transfers included in your package.
            </p>
            <a className="at-text-link" href="#itinerary">
              Explore the sample itinerary →
            </a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">BUILT AROUND YOUR GROUP</span>
            <h2 className="at-heading">
              A Five-Day Ride Across Changing Moroccan Landscapes
            </h2>
            <p className="at-copy">
              The journey brings together contrasting riding environments: mountain roads and tracks in the Atlas, rural valleys on the way south, and open desert-edge terrain where conditions allow.
            </p>
            <p className="at-copy">
              Tell us about your riding experience, preferred terrain and the kind of southern landscapes you want to discover. We can discuss a suitable five-day programme and the practical arrangements needed to connect the riding stages.
            </p>
            <p className="at-copy">
              Your proposal should specify the daily routes, bike arrangements, guide service, meeting point, water and refreshment plan, overnight accommodation, meals and any included support transfers.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">YOUR GUIDED TRIP</span>
            <h3>Atlas to Desert Cycling Journey</h3>
            <p>
              A guided five-day cycling adventure from the High Atlas towards southern Morocco, planned around your riding preferences and local conditions.
            </p>
            <ul className="at-booking-list">
              <li>
                <span>Tour format</span>
                <strong>Guided</strong>
              </li>
              <li>
                <span>Bike style</span>
                <strong>Mountain Bike</strong>
              </li>
              <li>
                <span>Destination</span>
                <strong>Atlas to Desert</strong>
              </li>
              <li>
                <span>Itinerary</span>
                <strong>Five-day route</strong>
              </li>
              <li>
                <span>Routes</span>
                <strong>By Arrangement</strong>
              </li>
            </ul>
            <a className="at-button" href="/contact">
              Enquire About Your Trip <span>→</span>
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
                Highlights of the Atlas to Desert Cycling Journey
              </h2>
            </div>
            <p>
              Experience five days of varied cycling from mountain landscapes towards the desert regions, with an itinerary planned around your riding style, group and travel arrangements.
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
            <img
              src={images.valley}
              alt="Mountain and desert-edge tracks in southern Morocco"
            />
          </div>
          <div>
            <span className="at-eyebrow">ATLAS TO DESERT CYCLING ROUTES & TERRAIN</span>
            <h2 className="at-heading">
              From High Atlas Trails to Desert-Edge Tracks
            </h2>
            <p className="at-copy">
              The route moves through contrasting Moroccan environments, from mountain roads and rocky tracks in the High Atlas to broad southern valleys and arid desert-edge terrain. Surfaces can vary considerably and may include paved roads, compact tracks, loose stones and sandy sections where suitable. The selected route must match your bike, experience, weather and local access.
            </p>
            <p className="at-copy">
              Route planning should account for elevation, loose stones, uneven tracks, exposed sections, heat and the distances between services. The chosen stages should match your technical ability, fitness and preferred riding pace across consecutive days.
            </p>
            <ul className="at-terrain-points">
              <li>
                <span>01</span>
                Selected High Atlas riding areas
              </li>
              <li>
                <span>02</span>
                Mountain roads, rocky tracks and compact rural surfaces
              </li>
              <li>
                <span>03</span>
                Southern valleys and open desert-edge landscapes
              </li>
              <li>
                <span>04</span>
                Daily stage planning around ability and conditions
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR GUIDED JOURNEY</span>
            <h2 className="at-heading">Atlas to Desert Cycling Journey Information</h2>
            <p className="at-copy">
              The details of this five-day journey are agreed before departure. Confirm the meeting point, daily routes, bike provision, support arrangements, guide service, four nights of accommodation, meal plan and all transfers.
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
            src={images.village}
            alt="Traditional village architecture in Morocco’s Atlas and southern regions"
          />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE TRAIL</span>
          <h2 className="at-heading">
            Experience the Landscapes and Culture of the Atlas
          </h2>
          <p className="at-copy">
            The journey is also an opportunity to discover the character of Morocco beyond the riding route, with time to appreciate mountain communities, southern villages, local food and the changing landscapes between the Atlas and desert regions.
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
                Discover the Scenery of Your Atlas to Desert Cycling Journey
              </h2>
            </div>
            <p>
              From high mountain scenery to broad valleys and desert-edge horizons, southern Morocco offers a remarkable variety of landscapes for a guided multi-day cycling journey from Marrakech.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item">
              <img src={images.cycling} alt="Mountain biking on a southern Morocco cycling stage" />
            </div>
            <div className="at-gallery-item">
              <img src={images.valley} alt="Arid valley landscape in southern Morocco" />
            </div>
            <div className="at-gallery-item">
              <img src={images.village} alt="Traditional village along the Atlas to desert route" />
            </div>
            <div className="at-gallery-item">
              <img src={images.mountain} alt="Mountain landscape in Morocco" />
            </div>
            <div className="at-gallery-item">
              <img src={images.atlas} alt="Atlas mountain landscape on the cycling journey" />
            </div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">YOUR GUIDED PROGRAMME</span>
              <h2 className="at-heading">
                Five-Day Atlas to Desert Cycling Itinerary
              </h2>
            </div>
            <p>
              Use this five-day sample structure as a starting point for planning your journey. The precise riding stages, transfer links and overnight stops are agreed with your group before departure.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This is an illustrative five-day programme, not a fixed route sheet or a confirmed package. Daily distances, elevation, exact routes, bike rental, route conditions, accommodation, meals, support services and transfers must be confirmed in your final proposal.
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
              <span className="at-eyebrow">YOUR TRIP ARRANGEMENTS</span>
              <h2 className="at-heading">
                What Is Included in Your Five-Day Cycling Journey?
              </h2>
            </div>
            <p>
              Guided itineraries can involve different services and
              arrangements. The following lists are a guide; only the items
              specifically stated in your confirmed proposal are included.
            </p>
          </div>
          <div className="at-inclusions-grid">
            <div className="at-inclusion-card">
              <h3>Included When Confirmed</h3>
              <ul>
                {inclusions.map((item) => (
                  <li key={item}>
                    <span>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="at-inclusion-card">
              <h3>Not Included Unless Agreed</h3>
              <ul>
                {exclusions.map((item) => (
                  <li key={item}>
                    <span>−</span>
                    {item}
                  </li>
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
                Preparing for Your Atlas to Desert Cycling Journey
              </h2>
            </div>
            <p>
              Good preparation helps you get the most from a five-day journey across changing climates and terrain. Discuss your bike, equipment, daily riding expectations, hydration and luggage requirements before the route is finalised.
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
              src={images.cycling}
              alt="Mountain bike route through Morocco’s southern landscapes"
            />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">
              Cycling Difficulty, Fitness and Riding Experience
            </h2>
            <p className="at-copy">
              The terrain changes throughout the journey, from mountain climbs and rocky tracks to exposed southern roads and desert-edge surfaces. Good bike control, balance, braking and cornering remain important, especially on uneven or loose ground.
            </p>
            <p className="at-copy">
              When planning your trip, tell us about your cycling experience, fitness, preferred terrain and ability to ride on consecutive days. This information helps determine whether the proposed stages are suitable for your group.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> daily riding demands
              depend on route conditions, assistance mode, elevation, terrain,
              rider weight and weather. Exact route difficulty, distances,
              support arrangements and support services must be confirmed
              against your actual itinerary before booking.
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
              Find answers to common questions about the five-day Atlas to Desert cycling journey. Contact our team to discuss your preferred dates, riding level, route options and equipment requirements.
            </p>
            <a className="at-text-link" href="/contact">
              Ask Us a Question →
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

      <section className="at-final-cta">
        <div className="at-final-image">
          <img
            src={images.final}
            alt="Desert-edge landscape in southern Morocco"
          />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">
            YOUR GUIDED ATLAS TO DESERT CYCLING JOURNEY STARTS HERE
          </span>
          <h2>Plan Your Atlas to Desert Cycling Journey</h2>
          <p>
            Tell us your preferred dates, riding experience and the kind of mountain and desert landscapes you want to discover. We can discuss the five-day route, equipment, accommodation, support arrangements, transfers and services.
          </p>
          <a className="at-button" href="/contact">
            Plan Your Atlas to Desert Journey <span>→</span>
          </a>
        </div>
      </section>

      <section className="at-related-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EXPLORE MORE</span>
              <h2 className="at-heading">
                More Cycling Adventures in Morocco
              </h2>
            </div>
            <p>
              Discover more ways to explore Morocco, from High Atlas mountain biking to southern cycling expeditions and desert-edge adventures.
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
            <img
              src="/images/logo-mountain-bike-morocco-footer.png"
              alt="Mountain Bike Morocco"
            />
            <p>
              Discover Morocco by bike. Ride the High Atlas, explore southern valleys and experience unforgettable mountain and desert-edge cycling journeys.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="at-footer-links">
              <a href="/cycling-trips">All Cycling Tours</a>
              <a href="/cycling-trips/mtb">Cycling Tours</a>
              <a href="/cycling-trips/e-mtb">E-MTB Tours</a>
              <a href="/cycling-trips/gravel">Gravel Cycling</a>
            </div>
          </div>
          <div>
            <h3>Destinations</h3>
            <div className="at-footer-links">
              <a href="/destinations">All Destinations</a>
              <a href="/destinations/atlas-mountains">Atlas Mountains</a>
              <a href="/destinations/desert">Southern Morocco</a>
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
          <span>
            © {new Date().getFullYear()} Cycling Morocco. All rights reserved.
          </span>
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}