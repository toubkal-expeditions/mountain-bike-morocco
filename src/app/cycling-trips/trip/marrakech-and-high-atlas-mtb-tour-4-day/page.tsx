import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marrakech and High Atlas MTB Tour – 4 Days | Mountain Bike Morocco",
  description:
    "Ride from Marrakech into Morocco’s High Atlas on a four-day guided mountain-bike journey through mountain valleys, Amazigh villages and rugged trails. The route, daily riding and services are tailored and confirmed for your group.",
  alternates: {
    canonical: "/cycling-trips/trip/marrakech-high-atlas-mtb-tour-4-days",
  },
};

const images = {
  hero: "/images/mountain-biking-atlas-mountains-morocco.jpg",
  overview: "/images/atlas-mountains-cycling-expedition.jpg",
  atlas: "/images/atlas-mountains-enduro-biking-tour-3-day.jpg",
  valley: "/images/atlas-valley-cycling-morocco.jpg",
  village: "/images/berber-villages-cycling-expeditions.jpg",
  cycling: "/images/mtb-tour-atlas-mountains-2.jpg",
  mountain: "/images/mountain-biking-holiday-morocco.jpeg",
  final: "/images/atlas-mtb-tour-morocco.jpg",
};

const facts = [
  ["Tour format", "Guided multi-day mountain-bike tour"],
  ["Destination", "Marrakech and the High Atlas Mountains"],
  ["Starting point", "Marrakech – agreed meeting point"],
  ["Main areas", "High Atlas valleys, mountain tracks and Amazigh villages"],
  ["Cycling style", "Mountain biking"],
  ["Difficulty", "Adapted to selected routes and group ability"],
  ["Experience", "Previous MTB experience recommended"],
  ["Duration", "4 days / 3 nights"],
  ["Travel dates", "On request"],
];

const highlights = [
  {
    number: "01",
    title: "From Marrakech to the High Atlas",
    text: "Leave the energy of Marrakech behind and head towards the mountain landscapes of the High Atlas, with the riding programme shaped around your dates, group and preferred MTB terrain.",
  },
  {
    number: "02",
    title: "Four Days on the Mountain Bike",
    text: "Enjoy a multi-day journey with time for varied riding, mountain scenery and relaxed stops. Daily routes and riding demands are confirmed with your guide before the trip.",
  },
  {
    number: "03",
    title: "Amazigh Villages and Valley Landscapes",
    text: "Ride through selected mountain communities, cultivated terraces and highland valleys, discovering the landscapes and everyday character of rural Morocco along the way.",
  },
  {
    number: "04",
    title: "A Route Matched to Your Group",
    text: "Discuss your technical confidence, fitness and preferred riding style in advance so the proposed stages, support and pace are appropriate for your group.",
  },
];

const beyondTrail = [
  {
    title: "Amazigh mountain hospitality",
    text: "Discover the welcome and traditions of mountain communities while travelling through villages and landscapes of the High Atlas.",
  },
  {
    title: "Local food and mountain stays",
    text: "Experience regional flavours and the atmosphere of mountain accommodation, with the exact meals and overnight arrangements confirmed in your trip proposal.",
  },
  {
    title: "Village paths and terraced fields",
    text: "See how rural settlements, cultivated terraces and stone-built homes are woven into the dramatic mountain environment.",
  },
  {
    title: "Time beyond the ride",
    text: "Balance the cycling stages with opportunities to enjoy viewpoints, village life and the changing landscapes between Marrakech and the High Atlas.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Marrakech to the High Atlas – First Mountain Ride",
    location: "Marrakech · High Atlas foothills",
    distance: "Confirmed according to the selected route",
    riding: "Warm-up MTB stage · route dependent",
    image: images.overview,
    text: "Meet in Marrakech at the agreed time and travel towards the High Atlas using the transport arrangements confirmed in your booking. Once in the riding area, meet your guide, check the bikes and complete a safety briefing. Begin with a first ride selected to introduce the terrain and help the group settle into the trip. Depending on the agreed route, the stage may follow rural tracks, mountain roads and village paths, with time to enjoy the scenery before reaching the confirmed overnight accommodation.",
    details: [
      "Meeting point and transfer arrangements confirmed before departure",
      "Bike setup, route briefing and equipment check",
      "First guided ride adapted to the group's ability",
      "Stops for views, refreshments and local discovery",
      "Overnight stay as specified in the confirmed package",
    ],
  },
  {
    day: "02",
    title: "High Atlas Valleys – A Full Day of Mountain Biking",
    location: "High Atlas mountain villages and valleys",
    distance: "Confirmed according to the selected route",
    riding: "Guided MTB stage · climbing and descending vary",
    image: images.atlas,
    text: "After breakfast, set out for a longer day exploring the High Atlas by mountain bike. The route may link remote tracks, valley paths and mountain roads, with the exact riding chosen according to trail access, weather and the group's technical level. Enjoy breaks to take in the mountain views and discover the villages along the way. Return to the planned overnight base or continue to the next agreed accommodation, depending on the final itinerary.",
    details: [
      "Breakfast and daily ride briefing",
      "Guided mountain-bike stage through selected Atlas terrain",
      "Planned rest stops and lunch arrangements as confirmed",
      "Flexible pace based on the group and trail conditions",
      "Overnight accommodation according to the itinerary",
    ],
  },
  {
    day: "03",
    title: "Mountain Tracks and Amazigh Villages – The Final Full Ride",
    location: "High Atlas villages · mountain trails",
    distance: "Confirmed according to the selected route",
    riding: "Guided MTB stage · route dependent",
    image: images.cycling,
    text: "Continue deeper into the landscapes selected for your journey, riding a further stage through mountain terrain and rural communities. Your guide will choose suitable tracks and adjust the pace to the group's energy and conditions. There is time to appreciate the landscape, pause in villages where appropriate and enjoy the final full day on the bike before reaching the confirmed overnight stop.",
    details: [
      "Breakfast and review of the day's route",
      "Guided ride on selected mountain tracks and village routes",
      "Time for photographs and cultural discovery",
      "Lunch and support arrangements as listed in your proposal",
      "Final overnight stay in the High Atlas or agreed location",
    ],
  },
  {
    day: "04",
    title: "High Atlas to Marrakech – Return Journey",
    location: "High Atlas · Marrakech",
    distance: "Optional short ride only if included in the confirmed plan",
    riding: "Return transfer · riding arrangements confirmed in advance",
    image: images.final,
    text: "Enjoy breakfast and take time for a final look at the mountain surroundings. Depending on your confirmed programme, the morning may include a short optional ride or a relaxed village visit. Then travel back towards Marrakech using the agreed transport arrangements, bringing your four-day High Atlas MTB journey to a close. Arrival time depends on the location of the overnight stay, road conditions and the transfer plan.",
    details: [
      "Breakfast at the confirmed accommodation",
      "Optional short ride or local visit only if agreed in advance",
      "Pack and prepare bikes and luggage for the return",
      "Return transfer to Marrakech where included",
      "End of the four-day programme at the agreed location",
    ],
  },
];

const inclusions = [
  "Four-day itinerary planning and route coordination",
  "Local mountain-bike guide where specified in your proposal",
  "Mountain-bike rental if included in your package",
  "Helmet and riding equipment only where specified",
  "Three nights of accommodation when listed in your confirmed package",
  "Meals explicitly listed in the itinerary",
  "Transfers between Marrakech and the riding areas where included",
  "Support vehicle and luggage assistance where confirmed",
  "Water, refreshments and route-support arrangements as confirmed",
];

const exclusions = [
  "International flights and airport services unless specified",
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
    text: "Share your recent riding experience, fitness and confidence on climbs, descents and uneven surfaces. A multi-day MTB trip requires enough stamina to ride on consecutive days, while the technical level depends on the selected route.",
  },
  {
    title: "Bike and Equipment",
    text: "Confirm whether you will bring your own mountain bike or request a rental. Check brakes, tyres, gears and suspension, and discuss spares, luggage transport and bike transfer arrangements before travelling.",
  },
  {
    title: "Hydration and Mountain Weather",
    text: "Temperatures and conditions can change with altitude and season. Confirm daily riding expectations, water availability, rest stops and support arrangements, and carry suitable sun and weather protection.",
  },
  {
    title: "Clothing and Overnight Essentials",
    text: "Bring suitable cycling clothing, gloves, footwear, a helmet, sun protection and hydration equipment. Pack layers and personal essentials for three nights away from Marrakech.",
  },
];

const faqs = [
  {
    q: "What is the Marrakech and High Atlas MTB Tour?",
    a: "It is a four-day guided mountain-bike journey beginning in Marrakech and exploring selected riding areas in Morocco's High Atlas. The exact route, daily stages and overnight locations are confirmed in your trip proposal.",
  },
  {
    q: "How many days do we ride?",
    a: "The programme runs over four days. The first three days are planned around guided mountain-bike stages; the fourth day is primarily the return to Marrakech, with a short ride only if included in the confirmed itinerary.",
  },
  {
    q: "Where does the tour start and finish?",
    a: "Marrakech is the planned start and finish point. Your confirmed booking will specify the meeting point, transfer arrangements and expected return details.",
  },
  {
    q: "What level of mountain-bike experience do I need?",
    a: "Previous mountain-bike experience is recommended, particularly confidence with braking, bike handling and uneven terrain. Share your ability and fitness so the route can be discussed at an appropriate level.",
  },
  {
    q: "How difficult is the tour?",
    a: "Difficulty depends on the selected trails, climbing, surface conditions and daily riding time. There are no fixed distance or elevation figures on this page; these should be confirmed in the itinerary prepared for your group.",
  },
  {
    q: "Are the daily distances and elevation fixed?",
    a: "No. Distances, climbing and descent vary with the chosen route, trail access, weather and group ability. Ask for the proposed daily route details before confirming your booking.",
  },
  {
    q: "Is a mountain bike included?",
    a: "Bike rental is included only when it is specifically listed in your confirmed proposal. You can also discuss bringing your own suitable mountain bike and arranging its transport.",
  },
  {
    q: "Where do we stay during the tour?",
    a: "The itinerary includes three overnight stays when accommodation is listed in your package. The accommodation type and locations should be confirmed in the final proposal, as they depend on the selected route.",
  },
  {
    q: "Are meals included?",
    a: "Meals are included only when stated in your confirmed booking. Check which breakfasts, lunches, dinners and refreshments are covered before departure.",
  },
  {
    q: "Is a support vehicle available?",
    a: "A support vehicle, luggage transfer and mechanical assistance are provided only when specified in your confirmed arrangements. Ask which support services are available on each riding stage.",
  },
  {
    q: "When is the best time to ride in the High Atlas?",
    a: "Spring and autumn are often comfortable periods for mountain biking, although conditions vary by altitude and route. Winter can bring colder weather at higher elevations, while summer may be hot on exposed sections. Check conditions for your travel dates.",
  },
  {
    q: "Can the tour be customised for a private group?",
    a: "Yes. Discuss your preferred dates, group size, riding level, bike requirements and interests. The final route and services depend on local conditions, availability and the arrangements confirmed in your proposal.",
  },
];

const relatedTours = [
  {
    category: "HIGH ATLAS MTB ADVENTURE",
    title: "Atlas Mountain Bike Day Trip",
    text: "Discover a guided day of mountain biking on selected trails and tracks in the Atlas region.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/cycling-trips/trip/atlas-mountain-bike-day-trip-1-day",
  },
  {
    category: "MOROCCO MTB EXPEDITION",
    title: "High Atlas Enduro Mountain Bike Tour",
    text: "Explore more technical mountain terrain on a multi-day enduro-focused journey.",
    image: "/images/atlas-mountains-enduro-biking-tour.jpg",
    href: "/cycling-trips/mtb",
  },
  {
    category: "ATLAS CYCLING HOLIDAY",
    title: "Marrakech to Atlas Cycling Escape",
    text: "Combine the atmosphere of Marrakech with a guided journey into the High Atlas landscape.",
    image: "/images/atlas-marrakech-cycling-tour.jpg",
    href: "/cycling-trips/trip/marrakech-to-atlas-cycling-escape-2-days",
  },
];

export default function MarrakechHighAtlasMtbTourPage() {
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
            alt="Mountain biking in Morocco’s High Atlas Mountains"
          />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">
            MOROCCO · MARRAKECH & HIGH ATLAS · FOUR-DAY MTB TOUR
          </span>
          <h1>Marrakech and High Atlas Mountain Bike Tour</h1>
          <p className="at-hero-description">
            Enjoy a guided cycling adventure from Marrakech. Discover
            the spectacular High Atlas and its traditional Amazigh mountain villages, with the riding pace and terrain
            matched to your experience and the conditions on the day.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Plan Your High Atlas MTB Tour <span>→</span>
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
              <strong>mountain bike</strong>
              <span>Mountain cycling</span>
            </div>
            <div>
              <strong>FOUR DAYS</strong>
              <span>3 nights in the Atlas</span>
            </div>
            <div>
              <strong>ATLAS</strong>
              <span>Morocco</span>
            </div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact">
            <span>Tour format</span>
            <strong>Guided High Atlas MTB Journey</strong>
          </div>
          <div className="at-fact">
            <span>Destination</span>
            <strong>Marrakech and High Atlas Mountains</strong>
          </div>
          <div className="at-fact">
            <span>Itinerary</span>
            <strong>4 Days / 3 Nights</strong>
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
              alt="Mountain bike route through Morocco’s High Atlas"
            />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">YOUR MARRAKECH & HIGH ATLAS MTB JOURNEY</span>
            <h2 className="at-heading">
              Four Days from Marrakech into the High Atlas
            </h2>
            <p className="at-copy">
              This four-day MTB tour from Marrakech gives you the opportunity to
              discover High Atlas mountain tracks, valleys and traditional villages by mountain bike, with a
              programme discussed around your own group rather than a fixed
              departure itinerary.
            </p>
            <p className="at-copy">
              From the routes you want to ride to the pace of each day, the
              planning process starts with your experience, preferences and
              travel dates. You can discuss High Atlas trails, mountain tracks and open viewpoints and the type of terrain you enjoy.
            </p>
            <p className="at-copy">
              The final itinerary should clearly confirm the riding stages,
              distances, elevation, mountain bike arrangements, route and support plan, guiding,
              accommodation and transfers included in your package.
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
              Choose a Route That Suits Your Riding Style
            </h2>
            <p className="at-copy">
              Every rider has different expectations. Some prefer a longer ride across mountain tracks, while others want a relaxed route with time to enjoy the scenery and nearby rural communities.
            </p>
            <p className="at-copy">
              Tell us how you like to ride, what type of terrain interests you
              and how much time you have. We can discuss a suitable programme
              and the practical arrangements needed for your chosen routes.
            </p>
            <p className="at-copy">
              Your final proposal should specify the route, bike arrangements, guide service, meeting point, water and refreshment plan, and any included transfers or meals.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">YOUR GUIDED TRIP</span>
            <h3>Marrakech and High Atlas MTB Tour</h3>
            <p>
              A four-day guided mountain-bike journey from Marrakech into the High Atlas, planned around your riding preferences and local conditions.
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
                <strong>High Atlas</strong>
              </li>
              <li>
                <span>Itinerary</span>
                <strong>Route selected</strong>
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
                Highlights of a Four-Day High Atlas MTB Journey
              </h2>
            </div>
            <p>
              Enjoy four days of guided mountain biking
              with an itinerary planned around your preferred riding style,
              group and travel arrangements.
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
              alt="Rocky mountain-bike terrain in Morocco’s High Atlas"
            />
          </div>
          <div>
            <span className="at-eyebrow">MARRAKECH & HIGH ATLAS MTB ROUTES</span>
            <h2 className="at-heading">
              Ride the Valleys and Mountain Tracks of the High Atlas
            </h2>
            <p className="at-copy">
              The High Atlas is a mountain landscape of open valleys, cultivated terraces and rugged rural tracks. Riding surfaces can include mountain tracks, mountain roads and loose stones. The route is selected around your mountain bike, experience, weather and local access, linking quiet lanes, mountain tracks, rolling climbs and rural surroundings.
            </p>
            <p className="at-copy">
              Route selection should take account of loose stones, uneven mountain tracks, exposed sections and heat. The chosen route should also match your technical ability, fitness and preferred riding pace.
            </p>
            <ul className="at-terrain-points">
              <li>
                <span>01</span>
                Selected High Atlas riding areas
              </li>
              <li>
                <span>02</span>
                Compacted rural tracks and rocky trail sections
              </li>
              <li>
                <span>03</span>
                High Atlas viewpoints and Amazigh settlements
              </li>
              <li>
                <span>04</span>
                Route planning around ability and conditions
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR GUIDED JOURNEY</span>
            <h2 className="at-heading">Marrakech and High Atlas MTB Tour Information</h2>
            <p className="at-copy">
              The details of your four-day journey are agreed before departure. Confirm the
              meeting point, route, bike provision, bike and support arrangements,
              guide service, lunch and any included transfers.
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
            alt="Traditional Amazigh village in the High Atlas"
          />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE TRAIL</span>
          <h2 className="at-heading">
            Experience the Landscapes and Culture of the Atlas
          </h2>
          <p className="at-copy">
            A High Atlas cycling journey is also an opportunity to discover the character of the region beyond the riding route, with time to appreciate its rocky landscapes and rural communities.
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
                Discover the Scenery of Your High Atlas MTB Tour
              </h2>
            </div>
            <p>
              From mountain trails and open horizons to remote rural settlements,
              the High Atlas offers a spectacular setting for a four-day guided mountain-bike journey from Marrakech.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item">
              <img src={images.cycling} alt="Mountain biking across High Atlas trails" />
            </div>
            <div className="at-gallery-item">
              <img src={images.valley} alt="Mountain valley in Morocco’s High Atlas" />
            </div>
            <div className="at-gallery-item">
              <img src={images.village} alt="Amazigh village in the High Atlas" />
            </div>
            <div className="at-gallery-item">
              <img src={images.mountain} alt="Mountain landscape in Morocco" />
            </div>
            <div className="at-gallery-item">
              <img src={images.atlas} alt="High Atlas mountain biking landscape" />
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
                Example of a Guided Mountain-Bike Tour Itinerary
              </h2>
            </div>
            <p>
              Use this sample structure as a starting point for discussing
              your four-day journey. The daily riding stages and route details
              can be agreed during the planning process.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This is an illustrative four-day programme, not a fixed route
            sheet or a confirmed package. Daily distances, elevation, exact
            routes, bike rental, route conditions, refreshment, accommodation,
            meals and transfers must be confirmed in your final proposal.
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
                What Is Included in Your Guided Mountain-Bike Tour?
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
                Preparing for Your Guided Mountain-Bike Tour
              </h2>
            </div>
            <p>
              Good preparation helps you get the most from your Marrakech and High Atlas MTB tour. Discuss your bike, equipment, climbing expectations and hydration requirements before the route is finalised.
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
              alt="Mountain-bike route through the High Atlas of Morocco"
            />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">
              Cycling Difficulty, Fitness and Riding Experience
            </h2>
            <p className="at-copy">
              High Atlas mountain terrain can be varied, sometimes rough and exposed. Good bike control
              help riders cross varied mountain terrain. However, a mountain bike is
              still a mountain bike. Balance, braking, cornering and control
              remain important, especially on uneven or technical surfaces.
            </p>
            <p className="at-copy">
              When planning your trip, tell us about your previous cycling experience, fitness, preferred terrain and the type of
              riding you enjoy. This information helps determine whether the
              proposed routes are suitable for your group.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> daily riding demands depend on route conditions,
              elevation, terrain, weather and the group's fitness and technical
              ability. Exact route difficulty, distances, climbing, support
              arrangements and services must be confirmed against your actual
              itinerary before booking.
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
              Find answers to common questions about the Marrakech and High Atlas MTB tour
              in Morocco. Contact our team to discuss your preferred routes,
              travel dates and bike and equipment requirements.
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
            alt="Rocky High Atlas landscape in Morocco"
          />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">
            YOUR MARRAKECH & HIGH ATLAS MTB JOURNEY STARTS HERE
          </span>
          <h2>Plan Your Marrakech and High Atlas MTB Tour</h2>
          <p>
            Tell us your preferred date, riding experience and the kind of mountain
            routes you want to discover. We can discuss the route, equipment,
            bike and support arrangements, meeting point, accommodation and services for your four-day tour.
          </p>
          <a className="at-button" href="/contact">
            Plan Your High Atlas MTB Tour <span>→</span>
          </a>
        </div>
      </section>

      <section className="at-related-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EXPLORE MORE</span>
              <h2 className="at-heading">
                More mountain bike and Cycling Adventures in Morocco
              </h2>
            </div>
            <p>
              Discover more ways to explore Morocco, from single-day mountain rides
              around Marrakech to longer cycling journeys across the Atlas Mountains.
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
              Discover Morocco by bike. Explore Marrakech, the High Atlas,
              mountain valleys and unforgettable cycling routes with
              Cycling Morocco.
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
              <a href="/destinations/atlas-mountains">High Atlas</a>
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
            © {2026} Cycling Morocco. All rights reserved.
          </span>
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}