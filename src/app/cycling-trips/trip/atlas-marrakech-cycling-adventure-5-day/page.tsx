import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas Marrakech Cycling Adventure – 5 Days | Mountain Bike Morocco",
  description:
    "Discover the Atlas Mountains on a five-day cycling adventure from Marrakech. Explore mountain landscapes, traditional Amazigh villages and scenic cycling routes on a private guided journey in Morocco.",
  alternates: {
    canonical:
      "/cycling-trips/trip/atlas-marrakech-cycling-adventure-5-day",
  },
};

const images = {
  hero: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  overview: "/images/mountain-bike-morocco-hero.jpg",
  atlas: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  valley: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  village: "/images/group-cycling-tour-morocco.jpg",
  cycling: "/images/singletrack-mtb-atlas-mountains.jpg",
  mountain: "/images/mtb-morocco-Saghro.JPG",
  final: "/images/mountain-bike-morocco-intro.jpg",
};

const facts = [
  ["Duration", "5 days / 4 nights"],
  ["Destination", "Marrakech and the Atlas Mountains"],
  ["Starting point", "Marrakech"],
  ["Main areas", "High Atlas, mountain valleys and villages"],
  ["Cycling style", "Guided cycling adventure"],
  ["Difficulty", "Depends on the selected routes"],
  ["Experience", "Suitable experience depends on route selection"],
  ["Tour format", "Private guided cycling journey"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "From Marrakech to the Atlas",
    text: "Leave the energy of Marrakech behind and discover the spectacular mountain landscapes surrounding the city, travelling through changing scenery and traditional villages.",
  },
  {
    number: "02",
    title: "Scenic Mountain Routes",
    text: "Explore selected cycling routes through the Atlas Mountains, with the daily riding programme planned around your experience, preferred terrain and available time.",
  },
  {
    number: "03",
    title: "Amazigh Villages and Culture",
    text: "Discover traditional mountain communities, terraced fields and rural landscapes while experiencing the hospitality and culture of the Atlas region.",
  },
  {
    number: "04",
    title: "Five Days of Discovery",
    text: "Enjoy a compact cycling journey combining Marrakech, mountain scenery and selected riding experiences, with a programme arranged for your group.",
  },
];

const beyondTrail = [
  {
    title: "Amazigh hospitality",
    text: "Discover traditional mountain communities and experience the local hospitality that makes travelling through the Atlas Mountains memorable.",
  },
  {
    title: "Moroccan cuisine",
    text: "Enjoy opportunities to discover regional dishes, traditional cooking and local flavours during your journey through Morocco.",
  },
  {
    title: "Mountain villages",
    text: "Explore traditional settlements, terraced fields and stone-built houses set among the landscapes surrounding the High Atlas.",
  },
  {
    title: "The Marrakech experience",
    text: "Combine the atmosphere of Marrakech with the peaceful landscapes of the Atlas Mountains on one varied five-day journey.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Marrakech",
    location: "Marrakech",
    distance: "No scheduled riding",
    riding: "Arrival and welcome",
    image: images.overview,
    text: "Arrive in Marrakech and meet your local team according to your confirmed travel arrangements. Settle into your accommodation and enjoy time to discover the atmosphere of the Red City. Your cycling experience, preferred riding style and equipment requirements can be discussed before the journey into the Atlas Mountains.",
    details: [
      "Arrival and welcome in Marrakech",
      "Accommodation according to your confirmed proposal",
      "Discuss your cycling experience and preferences",
      "Review the planned five-day programme",
    ],
  },
  {
    day: "02",
    title: "Marrakech to the Atlas Mountains",
    location: "Marrakech – High Atlas",
    distance: "Route-dependent",
    riding: "Transfer and planned cycling stage",
    image: images.atlas,
    text: "Leave Marrakech and travel towards the Atlas Mountains. The landscape gradually changes from the plains surrounding the city to mountain valleys, traditional villages and dramatic peaks. Depending on the confirmed programme, enjoy a first cycling experience in the region and become familiar with the terrain and scenery.",
    details: [
      "Journey from Marrakech towards the Atlas region",
      "Discover mountain scenery and traditional villages",
      "Cycling stage if included in the confirmed programme",
      "Overnight accommodation according to your itinerary",
    ],
  },
  {
    day: "03",
    title: "Cycling Through the Atlas Mountains",
    location: "High Atlas Mountains",
    distance: "Route-dependent",
    riding: "Guided cycling experience",
    image: images.cycling,
    text: "Enjoy a day exploring the Atlas Mountains by bike. Follow selected routes through mountain landscapes and discover the changing scenery of the region. The riding route, surface and technical demands will depend on the agreed itinerary, your experience and the conditions on the day.",
    details: [
      "Guided cycling experience",
      "Explore selected Atlas Mountain routes",
      "Discover mountain landscapes and rural surroundings",
      "Route chosen according to the agreed programme",
    ],
  },
  {
    day: "04",
    title: "Mountain Valleys and Traditional Villages",
    location: "Atlas Mountain valleys",
    distance: "Route-dependent",
    riding: "Cycling and cultural discovery",
    image: images.valley,
    text: "Continue your journey through the Atlas region, discovering mountain valleys and traditional Amazigh villages along the route. The planned cycling stage can combine scenic riding with opportunities to appreciate local landscapes and rural life. The exact route and daily programme will be confirmed before departure.",
    details: [
      "Explore selected mountain cycling routes",
      "Discover traditional Amazigh villages",
      "Enjoy the scenery of the Atlas valleys",
      "Daily programme adapted to the confirmed itinerary",
    ],
  },
  {
    day: "05",
    title: "Final Cycling Experience and Return to Marrakech",
    location: "Atlas Mountains – Marrakech",
    distance: "Route-dependent",
    riding: "Final ride and departure arrangements",
    image: images.final,
    text: "Enjoy your final planned cycling experience in the Atlas region, depending on the confirmed schedule and transfer arrangements. After the ride, prepare for the return journey towards Marrakech. Your five-day adventure concludes according to your agreed travel arrangements.",
    details: [
      "Final planned cycling stage, if scheduled",
      "Enjoy the last selected mountain landscapes",
      "Prepare bicycles and luggage for the transfer",
      "Return to Marrakech according to your itinerary",
    ],
  },
];

const inclusions = [
  "Private trip planning and itinerary coordination",
  "Local cycling guide as specified in your proposal",
  "Accommodation according to your confirmed package",
  "Meals explicitly listed in your confirmed itinerary",
  "Private transfers where specified in your proposal",
  "Support vehicle where included in your arrangements",
  "Luggage assistance where included",
  "On-trip coordination and practical assistance",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Bicycle rental unless specified in your proposal",
  "Personal cycling equipment and protective gear",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses and tips",
  "Additional nights and transfers not included in your proposal",
  "Services not specifically listed in your confirmed booking",
];

const preparation = [
  {
    title: "Cycling Experience",
    text: "Share your previous cycling experience, fitness level and preferred riding style before booking. This helps determine whether the proposed routes and daily stages are suitable for you.",
  },
  {
    title: "Bike and Equipment",
    text: "Bring a suitable helmet, gloves, cycling glasses and comfortable riding clothing. Confirm whether you will bring your own bicycle or arrange a rental before travelling.",
  },
  {
    title: "Fitness and Terrain",
    text: "Prepare for consecutive days of cycling and potentially varied terrain. The actual demands depend on the selected routes, distance, elevation and technical difficulty.",
  },
  {
    title: "Personal Essentials",
    text: "Bring sun protection, hydration equipment, suitable layers and personal medication. Mountain temperatures and weather conditions can vary during the day.",
  },
];

const faqs = [
  {
    q: "How long is the Atlas Marrakech Cycling Adventure?",
    a: "The journey is planned over five days and four nights, starting in Marrakech and exploring selected cycling areas in the surrounding Atlas Mountains.",
  },
  {
    q: "Where does the tour start?",
    a: "The tour starts in Marrakech. The transfer arrangements and the starting point of the first cycling stage are determined by the confirmed itinerary.",
  },
  {
    q: "What type of cycling can I expect?",
    a: "The programme focuses on exploring Marrakech and the Atlas Mountains by bike. The specific routes, surfaces and riding demands depend on the selected itinerary and your experience.",
  },
  {
    q: "Is this tour suitable for beginners?",
    a: "Suitability depends on your cycling experience, fitness and the final routes. Share your experience before booking so the programme can be discussed realistically.",
  },
  {
    q: "Are daily distances and elevation fixed?",
    a: "No fixed distances or elevation figures are promised on this page. These depend on the actual routes selected and should be confirmed in your final itinerary.",
  },
  {
    q: "Can I bring my own bicycle?",
    a: "You can discuss bringing your own bicycle when arranging the trip. Confirm transport, bike handling and equipment arrangements with the team before travelling.",
  },
  {
    q: "Is bicycle rental included?",
    a: "Bike rental is included only if it is specified in your confirmed proposal. Check the final package before booking if you need a rental bicycle.",
  },
  {
    q: "What accommodation is included?",
    a: "Accommodation depends on the package and the confirmed itinerary. The exact properties, room arrangements and included services should be agreed before booking.",
  },
  {
    q: "When is the best time for cycling in the Atlas Mountains?",
    a: "Spring and autumn are generally suitable periods for cycling in the Atlas Mountains. Conditions vary by location, elevation and weather, so the best dates depend on the planned routes.",
  },
  {
    q: "Can the five-day cycling tour be customised?",
    a: "The route, riding stages, group arrangements and travel dates can be discussed when planning your private trip. Final arrangements depend on availability and the agreed itinerary.",
  },
];

const relatedTours = [
  {
    category: "ATLAS MOUNTAIN CYCLING",
    title: "Atlas Mountains Cycling Tour",
    text: "Discover mountain roads, traditional villages and beautiful valleys on a multi-day cycling journey.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/cycling-trips/trip/atlas-mountains-cycling-tour-6-day",
  },
  {
    category: "MOUNTAIN BIKE ADVENTURE",
    title: "Mountain Biking Atlas Mountains",
    text: "Explore selected mountain-bike trails, remote valleys and traditional villages on an eight-day MTB journey.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/trip/mountain-biking-atlas-mountains-8-day",
  },
  {
    category: "E-MTB EXPERIENCE",
    title: "E-MTB Tour in Morocco",
    text: "Explore the Atlas Mountains by electric mountain bike on selected routes through spectacular landscapes.",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/cycling-trips/trip/emtb-tour-morocco",
  },
];

export default function AtlasMarrakechCyclingAdventure5DayPage() {
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
            alt="Cycling through the Atlas Mountains near Marrakech, Morocco"
          />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">
            MOROCCO · MARRAKECH · ATLAS MOUNTAINS · 5 DAYS
          </span>
          <h1>Atlas Marrakech Cycling Adventure</h1>
          <p className="at-hero-description">
            Five days discovering Morocco by bike. Explore the landscapes
            surrounding Marrakech, ride through selected Atlas Mountain
            routes and discover traditional Amazigh villages on a private
            cycling journey.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Plan Your Cycling Adventure <span>→</span>
            </a>
            <a className="at-hero-back" href="/cycling-trips">
              Explore All Cycling Tours
            </a>
          </div>
          <div className="at-hero-bottom">
            <div>
              <strong>05 DAYS</strong>
              <span>Cycling journey</span>
            </div>
            <div>
              <strong>ATLAS MOUNTAINS</strong>
              <span>Morocco</span>
            </div>
            <div>
              <strong>PRIVATE TOUR</strong>
              <span>Guided experience</span>
            </div>
            <div>
              <strong>MARRAKECH</strong>
              <span>Starting point</span>
            </div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact">
            <span>Duration</span>
            <strong>5 Days / 4 Nights</strong>
          </div>
          <div className="at-fact">
            <span>Region</span>
            <strong>Marrakech & Atlas Mountains</strong>
          </div>
          <div className="at-fact">
            <span>Starting point</span>
            <strong>Marrakech</strong>
          </div>
          <div className="at-fact">
            <span>Tour style</span>
            <strong>Private Guided Cycling</strong>
          </div>
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
            <img
              src={images.overview}
              alt="Mountain landscape on a cycling journey from Marrakech into the Atlas Mountains"
            />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A PRIVATE CYCLING ADVENTURE</span>
            <h2 className="at-heading">
              Five Days of Cycling from Marrakech to the Atlas Mountains
            </h2>
            <p className="at-copy">
              The Atlas Marrakech Cycling Adventure is a five-day journey
              designed for travellers who want to discover Morocco by bike.
              Starting in Marrakech, the experience takes you towards the
              Atlas Mountains, where mountain scenery, rural valleys and
              traditional villages create a memorable setting for cycling.
            </p>
            <p className="at-copy">
              The programme combines time in the Marrakech region with
              selected cycling routes in the Atlas Mountains. The exact
              terrain, daily distances, elevation gain and technical
              difficulty depend on the itinerary agreed for your group.
            </p>
            <p className="at-copy">
              Your cycling experience, fitness and preferred riding style
              can be discussed before booking. This helps establish whether
              the planned routes are suitable and what equipment and
              support arrangements are needed.
            </p>
            <a className="at-text-link" href="#itinerary">
              Discover the itinerary →
            </a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR MARRAKECH CYCLING EXPERIENCE</span>
            <h2 className="at-heading">
              From the Red City to the Atlas Mountains
            </h2>
            <p className="at-copy">
              Marrakech provides the starting point for a varied cycling
              experience through one of Morocco's most recognisable regions.
              Beyond the city, the landscape opens towards the foothills and
              mountain valleys of the Atlas range.
            </p>
            <p className="at-copy">
              During this five-day journey, discover selected cycling routes
              and enjoy opportunities to experience the character of the
              region. The programme can be discussed around your previous
              cycling experience, preferred terrain, fitness and travel dates.
            </p>
            <p className="at-copy">
              Share your group size, riding background and expectations with
              our team. Your final proposal should specify the routes,
              accommodation, guiding and support arrangements included.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Atlas Marrakech Cycling Adventure</h3>
            <p>
              Five days combining Marrakech, Atlas Mountain scenery,
              selected cycling routes and cultural discovery.
            </p>
            <ul className="at-booking-list">
              <li>
                <span>Duration</span>
                <strong>5 days / 4 nights</strong>
              </li>
              <li>
                <span>Starting city</span>
                <strong>Marrakech</strong>
              </li>
              <li>
                <span>Main region</span>
                <strong>Atlas Mountains</strong>
              </li>
              <li>
                <span>Tour format</span>
                <strong>Private cycling</strong>
              </li>
              <li>
                <span>Programme</span>
                <strong>Route-dependent</strong>
              </li>
            </ul>
            <a className="at-button" href="/contact">
              Enquire About This Tour <span>→</span>
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
                Highlights of the Atlas Marrakech Cycling Adventure
              </h2>
            </div>
            <p>
              Discover Morocco through selected cycling routes, mountain
              scenery, traditional villages and a five-day journey connecting
              Marrakech with the Atlas region.
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
              alt="Atlas Mountain valley and scenic cycling terrain near Marrakech"
            />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTES & TERRAIN</span>
            <h2 className="at-heading">
              Discover the Cycling Landscapes Around Marrakech
            </h2>
            <p className="at-copy">
              The region surrounding Marrakech offers a contrast between
              the city's atmosphere and the landscapes of the Atlas
              Mountains. Depending on the confirmed route, your journey may
              include mountain roads, rural tracks and scenic paths through
              valleys and traditional villages.
            </p>
            <p className="at-copy">
              Riding conditions and technical difficulty can vary. The
              final route should be selected according to your cycling
              ability, fitness, the season and local conditions rather than
              relying on a generalised difficulty rating.
            </p>
            <ul className="at-terrain-points">
              <li>
                <span>01</span>
                Cycling routes starting from the Marrakech region
              </li>
              <li>
                <span>02</span>
                Selected roads and tracks in the Atlas foothills
              </li>
              <li>
                <span>03</span>
                Mountain valleys and traditional villages
              </li>
              <li>
                <span>04</span>
                Routes selected for your experience and conditions
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR JOURNEY</span>
            <h2 className="at-heading">Tour Information</h2>
            <p className="at-copy">
              Review the main details of this private five-day cycling
              journey from Marrakech into the Atlas Mountains. Exact
              routes, daily distances, elevation, accommodation and support
              services should be confirmed in your personalised trip proposal.
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
            alt="Traditional Amazigh village in the Atlas Mountains near Marrakech"
          />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE TRAIL</span>
          <h2 className="at-heading">
            Discover the Culture and Hospitality of Morocco
          </h2>
          <p className="at-copy">
            A cycling journey from Marrakech is about more than riding.
            Between stages, discover the character of mountain communities,
            traditional architecture and regional food while enjoying
            opportunities to appreciate the landscapes of the Atlas region.
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
                The Landscapes of Your Marrakech Cycling Journey
              </h2>
            </div>
            <p>
              Discover the scenery around Marrakech, the Atlas Mountain
              landscapes, traditional villages and rural settings that make
              this five-day journey a memorable way to experience Morocco.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item">
              <img src={images.cycling} alt="Cycling on a mountain trail in Morocco" />
            </div>
            <div className="at-gallery-item">
              <img src={images.valley} alt="Mountain valley in the Atlas region" />
            </div>
            <div className="at-gallery-item">
              <img src={images.village} alt="Traditional Moroccan mountain village" />
            </div>
            <div className="at-gallery-item">
              <img src={images.mountain} alt="Mountain landscape in Morocco" />
            </div>
            <div className="at-gallery-item">
              <img src={images.atlas} alt="Atlas Mountains cycling landscape" />
            </div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">FIVE DAYS IN MOROCCO</span>
              <h2 className="at-heading">
                Atlas Marrakech Cycling Adventure Itinerary
              </h2>
            </div>
            <p>
              A five-day journey connecting Marrakech with selected cycling
              areas of the Atlas Mountains, with riding stages and cultural
              discovery along the way.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The itinerary below provides an overview of the planned
            experience, not a final route sheet. Daily distances, elevation
            gain, exact routes, accommodation and support arrangements must
            be confirmed against the final programme before booking.
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
                What Is Included in Your Cycling Adventure?
              </h2>
            </div>
            <p>
              The final inclusions depend on the package selected. Review
              the services below and check your personalised proposal
              before confirming your five-day cycling trip.
            </p>
          </div>
          <div className="at-inclusions-grid">
            <div className="at-inclusion-card">
              <h3>Included</h3>
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
              <h3>Not Included</h3>
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
                Preparing for Your Cycling Adventure
              </h2>
            </div>
            <p>
              Prepare your bicycle, equipment and fitness before travelling
              to Morocco. Good preparation helps you enjoy the planned
              cycling stages more comfortably.
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
              alt="Cycling route through the Atlas Mountains of Morocco"
            />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">
              Cycling Difficulty and Riding Experience
            </h2>
            <p className="at-copy">
              The difficulty of this cycling journey depends on the selected
              routes, daily distances, elevation gain, surface conditions
              and technical demands. Routes around Marrakech and the Atlas
              Mountains can vary considerably.
            </p>
            <p className="at-copy">
              Tell us about your riding background, fitness level and
              preferred terrain. This helps us discuss a suitable programme
              and realistic daily stages for your group.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final route difficulty, distances,
              elevation figures, routes, accommodation and support
              arrangements must be confirmed against the actual itinerary
              before booking. This page does not promise a fixed technical
              grade or daily mileage.
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
              Find answers to common questions about this five-day cycling
              journey from Marrakech into the Atlas Mountains. Contact our
              team if you need more details before planning your trip.
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
            alt="Mountain scenery in Morocco's Atlas Mountains"
          />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">
            YOUR MOROCCAN CYCLING ADVENTURE STARTS HERE
          </span>
          <h2>Discover Marrakech and the Atlas Mountains by Bike</h2>
          <p>
            Tell us your preferred dates, group size, cycling experience
            and expectations. We can discuss a five-day cycling journey
            planned around your preferred routes and the type of riding
            you want to experience in Morocco.
          </p>
          <a className="at-button" href="/contact">
            Plan Your Cycling Adventure <span>→</span>
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
              Discover more ways to explore Morocco, from Atlas Mountain
              cycling journeys to mountain biking and electric mountain
              biking experiences.
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
              Discover Morocco by bike. Explore the Atlas Mountains,
              mountain valleys and unforgettable cycling routes with
              Mountain Bike Morocco.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="at-footer-links">
              <a href="/cycling-trips">All Cycling Tours</a>
              <a href="/cycling-trips/mtb">Mountain Bike Tours</a>
              <a href="/cycling-trips/emtb">E-MTB Tours</a>
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
          <span>
            © {new Date().getFullYear()} Mountain Bike Morocco. All rights reserved.
          </span>
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}