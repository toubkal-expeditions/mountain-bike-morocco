import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Road Cycling Tour in Morocco – 4 to 7 Days | Mountain Bike Morocco",
  description:
    "Discover Morocco on a private four-to-seven-day road cycling tour. Ride scenic Atlas mountain roads, quiet countryside routes and rewarding climbs on a flexible itinerary planned around your fitness, experience and travel dates.",
  alternates: {
    canonical: "/cycling-trips/trip/private-road-cycling-tour-4-to-7-day",
  },
};

const images = {
  hero: "/images/road-bike-tour-morocco.jpg",
  overview: "/images/atlas-mountains-road-cycling-tour.jpg",
  mountains: "/images/road-cycling-holiday-morocco.jpg",
  road: "/images/road-cycling-tour-morocco.jpg",
  village: "/images/adventure-road-cycling-morocco.jpg",
  valley: "/images/7-days-cycling-road-from-marrakech.jpg",
  cycling: "/images/road-cycling-holiday-tour-morocco.jpg",
  final: "/images/7-days-cycling-road-from.jpeg",
};

const facts = [
  ["Duration", "4 to 7 days / flexible itinerary"],
  ["Destination", "High Atlas Mountains and selected regions of Morocco"],
  ["Starting point", "Marrakech – meeting point to be confirmed"],
  ["Cycling style", "Private guided road cycling"],
  ["Difficulty", "Moderate to challenging, depending on route"],
  ["Experience", "Road cyclists with good fitness and consecutive-day endurance"],
  ["Tour format", "Private tour for individuals, couples or groups"],
  ["Accommodation", "Selected according to your personalised itinerary"],
  ["Best season", "Spring and autumn, subject to route and weather conditions"],
];

const highlights = [
  {
    number: "01",
    title: "A Private Road Cycling Tour Built Around You",
    text: "Enjoy four to seven days of road cycling in Morocco with a private itinerary shaped around your dates, fitness, experience and preferred riding style. Travel at your own pace, with route choices and daily stages discussed before departure.",
  },
  {
    number: "02",
    title: "Climb into the High Atlas",
    text: "Discover the dramatic scenery of the Atlas Mountains on selected paved mountain roads. Depending on your chosen route, enjoy sustained climbs, flowing descents and panoramic views across valleys and mountain villages.",
  },
  {
    number: "03",
    title: "Quiet Roads and Changing Landscapes",
    text: "Link mountain roads, rural routes and open countryside on a journey that reveals different sides of Morocco. The exact regions and road conditions are selected according to the season and your riding goals.",
  },
  {
    number: "04",
    title: "Your Own Pace, Your Own Challenge",
    text: "Choose a shorter four-day escape or extend the experience to seven days. Daily distances, climbing, rest stops and support arrangements are discussed to create a rewarding private cycling holiday.",
  },
];

const beyondTrail = [
  {
    title: "The High Atlas on Road Bike",
    text: "Ride through mountain scenery on selected paved routes, with the possibility of long climbs, sweeping descents and wide views. The exact roads depend on your preferred challenge and the conditions at the time of travel.",
  },
  {
    title: "Villages and Rural Morocco",
    text: "Selected stages pass through or near traditional settlements and agricultural valleys. Pause for refreshments, photographs and a closer appreciation of the landscapes along the route.",
  },
  {
    title: "A Journey That Can Grow to Seven Days",
    text: "The four-day itinerary provides the core private cycling escape. Optional fifth, sixth and seventh days create room for additional regions, longer rides, a more relaxed schedule or a recovery day.",
  },
  {
    title: "Private Support and Flexible Planning",
    text: "Discuss your preferred daily distance, climbing, pace, accommodation and support vehicle needs before booking. The final plan is confirmed around your experience and the roads selected for your trip.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Marrakech to the Atlas – Meet, Prepare and Ride",
    location: "Marrakech – selected Atlas riding area",
    distance: "To be confirmed",
    riding: "Meet-up, bike check and introductory road ride",
    image: "/images/road-bike-tour-morocco.jpg",
    text: "Meet your guide at the agreed point in Marrakech and review the private tour plan. If a transfer is included, travel towards the selected starting area and prepare your road bike for the first stage. Check bike fit, tyres, brakes, gearing, bottles and essential equipment. When timing and conditions allow, enjoy a short introductory ride to settle into the roads and confirm the pace for the days ahead.",
    details: [
      "Meet your guide and review the private itinerary",
      "Transfer to the agreed starting area if included",
      "Check bike fit, tyres, brakes, gearing and equipment",
      "Review road conditions, riding pace and support arrangements",
      "Enjoy an introductory ride if timing and conditions allow",
      "Settle into the confirmed overnight arrangements",
    ],
  },
  {
    day: "02",
    title: "Ride the Scenic Roads of the High Atlas",
    location: "Selected High Atlas roads and valleys",
    distance: "To be confirmed",
    riding: "Guided road cycling stage",
    image: "/images/atlas-mountains-road-cycling-tour.jpg",
    text: "After breakfast, set out on a road stage through the selected Atlas area. Follow paved mountain and valley roads, with the day's distance and climbing planned around your fitness and preferred pace. Enjoy the changing views, regroup where needed and take time for refreshments and photographs before reaching the overnight stop confirmed in your itinerary.",
    details: [
      "Review the route, weather and road conditions",
      "Ride the agreed paved mountain and valley roads",
      "Manage the pace around the day's climbing and distance",
      "Pause for refreshments and scenic stops",
      "Finish at the accommodation confirmed for your tour",
    ],
  },
  {
    day: "03",
    title: "A Full Day of Mountain Roads and Rewarding Climbs",
    location: "Selected Atlas mountain roads",
    distance: "To be confirmed",
    riding: "Main road cycling stage",
    image: "/images/road-cycling-holiday-morocco.jpg",
    text: "Enjoy a principal riding day on roads selected for the challenge you want from your private tour. The stage may include sustained climbs, rolling valley roads and flowing descents, with the exact route and elevation gain confirmed during planning. Your guide will help manage the day's rhythm, breaks and route adjustments in line with local conditions.",
    details: [
      "Start with a briefing and bicycle safety check",
      "Ride the agreed mountain-road route",
      "Set a sustainable pace for the day's climbing",
      "Stop for lunch or refreshments as arranged",
      "Arrive at the overnight location in your confirmed plan",
    ],
  },
  {
    day: "04",
    title: "Complete the Four-Day Private Cycling Escape",
    location: "Selected route – agreed finish point",
    distance: "To be confirmed",
    riding: "Final stage for the four-day option",
    image: "/images/road-cycling-tour-morocco.jpg",
    text: "Ride the final stage of the four-day option, following a route chosen to bring your core Atlas road cycling experience to a satisfying finish. Depending on the itinerary, this may include another mountain climb, a scenic valley road or a point-to-point ride towards the agreed finish. Guests extending to five, six or seven days continue with the optional stages below.",
    details: [
      "Review the final-stage route and departure arrangements",
      "Ride the agreed road route at your preferred pace",
      "Enjoy a final scenic stop along the way",
      "Finish the four-day tour or continue with an extension",
      "Return transfer arrangements follow your confirmed itinerary",
    ],
  },
  {
    day: "05",
    title: "Optional Extension – Discover Another Road Cycling Region",
    location: "Additional region – to be confirmed",
    distance: "To be confirmed",
    riding: "Optional additional road stage",
    image: "/images/adventure-road-cycling-morocco.jpg",
    text: "For the five-day option, add another day on the bike and explore a further section of the selected region or a new landscape. The route may be planned as a longer ride, a different mountain-road stage or a more relaxed day with extra time for stops. The precise roads, distance, climbing and overnight location are agreed in advance.",
    details: [
      "Add the fifth day to your private itinerary",
      "Ride the route selected with your guide",
      "Choose a stage that matches your preferred distance and climbing",
      "Allow time for refreshments and scenic stops",
      "Stay overnight according to the confirmed programme",
    ],
  },
  {
    day: "06",
    title: "Optional Sixth Day – A Longer Ride or a New Challenge",
    location: "Selected road cycling area – to be confirmed",
    distance: "To be confirmed",
    riding: "Optional extended road cycling stage",
    image: "/images/road-cycling-holiday-tour-morocco.jpg",
    text: "The six- or seven-day format gives you another full day to explore. Depending on your goals, this can mean a longer point-to-point ride, an additional climb or a route through a different valley. Your private schedule can also include a more measured pace and extra recovery time between demanding stages.",
    details: [
      "Review the additional route and current conditions",
      "Ride a longer or alternative road stage as agreed",
      "Adapt the pace and breaks to your riding goals",
      "Enjoy time in the landscapes along the route",
      "Continue to the confirmed overnight stop",
    ],
  },
  {
    day: "07",
    title: "Optional Seventh Day – Final Ride and Return",
    location: "Selected final stage – Marrakech or agreed finish point",
    distance: "To be confirmed",
    riding: "Optional final road ride and departure",
    image: "/images/7-days-cycling-road-from-marrakech.jpg",
    text: "Choose the seventh day for a final ride before the journey concludes. Depending on your departure schedule, enjoy a shorter morning stage or a final point-to-point route before preparing your bicycle and luggage for the return journey. The finishing location, transfer time and services are confirmed in your personalised proposal.",
    details: [
      "Enjoy breakfast and review the final day's schedule",
      "Complete the final road ride if timing allows",
      "Prepare bicycles and luggage for the return journey",
      "Transfer to Marrakech or the agreed finish point if included",
      "Conclude your Private Road Cycling Tour in Morocco",
    ],
  },
];

const inclusions = [
  "Four-to-seven-day private road cycling programme planning",
  "Route planning around your fitness, experience and preferred riding goals",
  "Private road cycling guide or ride support as specified in your proposal",
  "Selected road cycling stages and daily route arrangements",
  "Accommodation only when specified in your proposal",
  "Road bicycle rental if specifically included",
  "Luggage handling and bicycle transfers only when confirmed",
  "Transfers from Marrakech if specified in your proposal",
  "Meals and refreshments only when listed in your proposal",
  "Support vehicle or mechanical assistance only as detailed in your confirmed arrangements",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Road bicycle unless included in your proposal",
  "Personal cycling clothing, shoes, helmet and equipment",
  "Transfers unless specifically included",
  "Accommodation unless listed in your proposal",
  "Meals and drinks not specified in your itinerary",
  "Personal expenses and tips",
  "Additional activities or extra nights not listed in your proposal",
  "Services not specifically listed in your proposal",
];

const preparation = [
  {
    title: "Bring a Road Bike Suited to the Route",
    text: "Use a well-maintained road bike with gearing appropriate for the climbs included in your itinerary. Check tyres, brakes, chain and drivetrain before travel. Discuss rental sizes, pedals, bike transport and any preferred setup before confirming your tour.",
  },
  {
    title: "Build Endurance for Consecutive Riding Days",
    text: "Prepare for several days in the saddle and include longer rides and climbing in your training. Share your typical weekly distance, climbing experience and preferred pace so the daily stages can be planned realistically.",
  },
  {
    title: "Carry Essential Cycling Equipment",
    text: "Bring a helmet, gloves, cycling shoes, suitable layers, water bottles and personal repair essentials. A spare tube or tubeless repair kit, pump or CO₂ inflator, tyre levers and a multi-tool are useful; confirm what support equipment will be provided.",
  },
  {
    title: "Pack for Mountain Weather",
    text: "Temperatures can change with altitude, season and time of day. Pack sun protection, a windproof layer, warm clothing for cooler descents and evenings, personal medication and comfortable off-bike clothes. Confirm luggage limits and resupply arrangements in advance.",
  },
];

const faqs = [
  {
    q: "Can I choose a four-, five-, six- or seven-day private tour?",
    a: "Yes. The itinerary is flexible from four to seven days. Day 4 completes the core four-day option, while Days 5, 6 and 7 are optional extensions. The final route, overnight arrangements and services are confirmed in your personalised proposal.",
  },
  {
    q: "What kind of roads will we ride?",
    a: "The tour focuses on paved roads selected for your experience and preferred challenge. Depending on the route, stages may include mountain climbs, valley roads, rolling countryside and connecting sections. Exact road conditions and stages are discussed before departure.",
  },
  {
    q: "Do I need previous road cycling experience?",
    a: "You should be comfortable riding a road bike and have sufficient fitness for the distances and climbing agreed for your itinerary. Share your recent riding experience, typical distances and climbing ability so the route can be matched to you.",
  },
  {
    q: "Where does the tour start and finish?",
    a: "Marrakech is the proposed meeting point. The actual starting area, route direction, finishing point and transfer arrangements depend on the selected itinerary and will be confirmed in your personalised proposal.",
  },
  {
    q: "Can the daily distances and climbs be customised?",
    a: "The route can be discussed around your fitness, preferred daily distance, climbing goals and available time. Exact distances, elevation gain and riding times are confirmed once the route has been selected.",
  },
  {
    q: "Can I bring my own road bike?",
    a: "Yes, you can discuss travelling with your own road bike. Share its size and transport requirements in advance. Rental may be available if specifically arranged and listed in your proposal.",
  },
  {
    q: "Is a support vehicle available?",
    a: "A support vehicle, luggage transfer or mechanical assistance can be discussed, but availability depends on the chosen route and service level. Your proposal should clearly specify which support services are included.",
  },
  {
    q: "What is the best time of year for this trip?",
    a: "Spring and autumn are often suitable periods for multi-day cycling in Morocco, but the best dates depend on the route, altitude and weather. Confirm seasonal conditions for your selected travel dates before booking.",
  },
];

const relatedTours = [
  {
    category: "GROUP CYCLING",
    title: "Atlas Cycling Club Tour",
    text: "Enjoy a guided cycling journey through scenic Atlas roads and valleys with an organised cycling group.",
    image: "/images/group-cycling-atlas-mountains.jpg",
    href: "/cycling-trips/trip/atlas-cycling-club-tour-4-day",
  },
  {
    category: "ATLAS & DESERT",
    title: "Atlas to Desert Group Expedition",
    text: "Explore changing landscapes from the Atlas region towards Morocco's southern routes on a multi-day cycling adventure.",
    image: "/images/atlas-to-desert-e-mtb-tour.jpg",
    href: "/cycling-trips/trip/atlas-to-desert-group-expedition-6-day",
  },
  {
    category: "PRIVATE MTB",
    title: "Private Atlas Mountain Bike Weekend",
    text: "Plan a private mountain-bike escape with selected trails and a flexible itinerary in the Atlas Mountains.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/cycling-trips/trip/private-atlas-mountain-bike-weekend-2-to-3-days",
  },
]

export default function PrivateRoadCyclingTourPage() {
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
          <img src={images.hero} alt="Road cycling adventure across Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · ROAD CYCLING · PRIVATE TOUR · 4–7 DAYS</span>
          <h1>Private Road Cycling Tour</h1>
          <p className="at-hero-description">
            Explore Morocco by road bike on a flexible four-to-seven-day private journey.
            Ride scenic paved mountain roads, quiet countryside routes and rewarding climbs,
            with a private guide and a route plan shaped around your
            fitness, experience and preferred pace.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Private Road Cycling Tour <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>4–7 DAYS</strong><span>Flexible journey</span></div>
            <div><strong>HIGH ATLAS</strong><span>Paved mountain roads</span></div>
            <div><strong>ROAD CYCLING</strong><span>Paved mountain roads</span></div>
            <div><strong>PRIVATE TOUR</strong><span>Guided cycling</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>4 to 7 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>High Atlas Mountains and selected regions of Morocco</strong></div>
          <div className="at-fact"><span>Experience</span><strong>Confident road riders</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Private guided road tour</strong></div>
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
            <span className="at-eyebrow">A FLEXIBLE ROAD CYCLING JOURNEY THROUGH MOROCCO</span>
            <h2 className="at-heading">Explore Morocco on a Four-to-Seven-Day Private Road Journey</h2>
            <p className="at-copy">
              The Private Road Cycling Tour is a flexible four-to-seven-day experience for riders who want to explore Morocco beyond the usual routes. Ride selected paved mountain roads, quiet valley routes and scenic countryside with a dedicated local guide.
            </p>
            <p className="at-copy">
              Discover selected paved Atlas roads, valley routes and rural landscapes. The exact stages, daily distances and climbing are chosen according to your riding style and local conditions.
            </p>
            <p className="at-copy">
              The route, distances, climbing, riding times, accommodation, meeting point and transfer arrangements will be discussed and confirmed after we understand your experience and preferences. Day 4 completes the shorter option; Days 5, 6 and 7 can extend the journey.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the full itinerary →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE ROAD CYCLING TOUR IN MOROCCO</span>
            <h2 className="at-heading">Four to Seven Days of Private Road Cycling in Morocco</h2>
            <p className="at-copy">
              Leave the city behind and enjoy a private private road cycling adventure through selected mountain and valley landscapes in Morocco.
            </p>
            <p className="at-copy">
              Ride selected paved mountain roads and connecting routes over four to seven days, with time for scenic stops and regrouping. The programme is planned around your experience, preferred pace and daily distance goals.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Private Road Cycling Tour</h3>
            <p>A flexible four-to-seven-day private road cycling experience in Morocco, with stages planned around your fitness, experience and riding goals.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>4–7 days</strong></li>
              <li><span>Destination</span><strong>High Atlas Mountains and selected regions of Morocco</strong></li>
              <li><span>Tour format</span><strong>Private guided road tour journey</strong></li>
              <li><span>Route style</span><strong>Paved mountain roads and quiet country roads</strong></li>
              <li><span>Travel style</span><strong>Private tour</strong></li>
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
              <h2 className="at-heading">Highlights of Your Private Road Cycling Tour</h2>
            </div>
            <p>
              Enjoy four to seven days of road cycling, changing Moroccan scenery and private riding stages on a guided programme designed around you.
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
            <img src={images.road} alt="Paved road winding through the Atlas Mountains" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE &amp; TERRAIN</span>
            <h2 className="at-heading">Ride Morocco’s Scenic Mountain Roads</h2>
            <p className="at-copy">
              The journey focuses on paved road routes selected according to your experience and ability. Depending on the agreed programme, the stages may include paved mountain roads, quiet country roads and scenic routes through valleys and open landscapes.
            </p>
            <p className="at-copy">
              Road conditions, gradients, climbing and distances depend on the selected routes and local conditions. The aim is to create a rewarding private journey with a suitable pace and regrouping plan for you.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Flexible four-to-seven-day road journey</li>
              <li><span>02</span>Routes selected around your fitness and preferred pace</li>
              <li><span>03</span>Paved mountain roads and varied landscapes</li>
              <li><span>04</span>A flexible private pace with planned breaks</li>
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
              of this flexible four-to-seven-day private road cycling journey
              in Morocco.
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
          <img src={images.village} alt="Rural village landscape in Morocco" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover Morocco Beyond the Ride</h2>
          <p className="at-copy">
            Your road journey is about more than the kilometres. Across four to seven days, discover Morocco's changing landscapes, from mountain foothills and rural valleys to drier southern roads where the selected route allows. Enjoy time outdoors, explore traditional villages and rural surroundings and appreciate the scenery along the way.
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
              <span className="at-eyebrow">ROAD CYCLING MOMENTS IN MOROCCO</span>
              <h2 className="at-heading">Explore Morocco by Road Bike</h2>
            </div>
            <p>
              Discover mountain routes, traditional
              villages and open landscapes
              across the Atlas during your
              flexible four-to-seven-day private road cycling journey.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="Road cycling in the Atlas Mountains" /></div>
            <div className="at-gallery-item"><img src={images.road} alt="Paved road winding through the Atlas Mountains" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional settlement along a Moroccan road route" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Valley landscape along a road route in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Cyclists exploring Morocco by road bike" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">FOUR TO SEVEN DAYS ON MOROCCAN ROAD ROUTES</span>
              <h2 className="at-heading">Private Road Cycling Tour Itinerary</h2>
            </div>
            <p>
              Choose four, five, six or seven days of private road cycling through selected Moroccan landscapes. Routes, distances, climbing and riding times are confirmed during planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines a flexible four-to-seven-day private road cycling journey. Day 4 completes the core four-day option, while Days 5, 6 and 7 are optional extensions. Exact routes, roads, distances, riding times, accommodation, meeting point, finishing point and transfers depend on the programme agreed with you.
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
              <h2 className="at-heading">What Is Included in Your Private Road Cycling Tour?</h2>
            </div>
            <p>
              Final inclusions are confirmed in your booking proposal. Check your personalised itinerary for guiding, bicycles, equipment, accommodation, transport and meals included in your private road cycling experience.
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
              <h2 className="at-heading">Preparing for Your Private Road Cycling Tour</h2>
            </div>
            <p>
              Prepare your road bikes, equipment and overnight essentials for four to seven days of paved-road cycling in Morocco.
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
            <img src={images.cycling} alt="Private road riding across Morocco" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">A ROUTE FOR YOUR PRIVATE ROAD TOUR</span>
            <h2 className="at-heading">Difficulty and Riding Experience</h2>
            <p className="at-copy">
              The journey is planned as a private guided road tour experience. Difficulty depends on road conditions, gradients, daily distances, remoteness and local weather, and must be matched to the ability and experience of the riders taking part.
            </p>
            <p className="at-copy">
              Before confirming the routes, we need to understand each rider's road experience, fitness, road-bike setup and preferred pace. This helps us select suitable roads and stages for the four-, five-, six- or seven-day option.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Riders should be confident on paved roads and capable of the distances and climbing agreed for the journey. Final suitability, route difficulty, daily distances, bicycle setup and support arrangements must be discussed and confirmed before booking.
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
              about Private Road Cycling Tour. Contact
              our team if you need more
              details before planning
              your road cycling holiday.
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
          <img src={images.final} alt="Road cycling adventure across Morocco" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR PRIVATE MOROCCO ROAD CYCLING TOUR STARTS HERE</span>
          <h2>Ready to Plan Your Private Road Cycling Tour?</h2>
          <p>
            Tell us your preferred dates, number of riders, cycling experience and preferred routes. We can discuss suitable road routes, daily distances, climbing, equipment, accommodation and transfers for your four-to-seven-day Private Road Cycling Tour.
          </p>
          <a className="at-button" href="/contact">Plan Your Private Road Cycling Tour <span>→</span></a>
        </div>
      </section>

      <section className="at-related-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EXPLORE MORE</span>
              <h2 className="at-heading">More Road Cycling Adventures in Morocco</h2>
            </div>
            <p>
              Discover more ways to explore Morocco by road bike, from Atlas mountain routes to longer journeys through the country's varied landscapes.
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