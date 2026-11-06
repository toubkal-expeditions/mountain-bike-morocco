import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Atlas to Desert Gravel Adventure Ride Morocco – 5 Days | Mountain Bike Morocco",
  description:
    "Discover Morocco on a five-day Atlas to Desert gravel cycling adventure. Ride through mountain landscapes, traditional villages, the Draa Valley and the desert edge.",
  alternates: {
    canonical: "/cycling-trips/trip/atlas-to-desert-gravel-adventure-ride-5-day",
  },
};

const images = {
  hero: "/images/gravel-atlas-to-sahara-desert-mtb-tour.jpg",
  overview: "/images/gravel-adventure-morocco.jpg",
  mountains: "/images/gravel-adventure-cycling-morocco.jpg",
  trails: "/images/gravel-desert-cycling-expedition.jpg",
  village: "/images/berber-villages-cycling-expeditions.jpg",
  valley: "/images/gravel-desert-cycling-morocco.JPG",
  cycling: "/images/gravel-cycling-morocco-expeditions.jpg",
  final: "/images/gravel-adventure-bike-trip-morocco.JPG",
};

const facts = [
  ["Duration", "5 days / 4 nights"],
  ["Destination", "Atlas Mountains and Southern Morocco"],
  ["Starting point", "Marrakech"],
  ["Main areas", "Atlas Mountains, Ouarzazate and Draa Valley"],
  ["Cycling style", "Gravel cycling"],
  ["Difficulty", "To be confirmed against the final route"],
  ["Experience", "Road or gravel cycling experience recommended"],
  ["Tour format", "Private gravel cycling adventure"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "From the Atlas to the Desert",
    text: "Experience the changing landscapes of Morocco, travelling from the mountain scenery of the High Atlas towards the warmer, drier landscapes of the south.",
  },
  {
    number: "02",
    title: "Ride Across Southern Morocco",
    text: "Explore selected mountain roads, rural routes and suitable gravel sections as the journey moves towards the valleys and desert-edge landscapes.",
  },
  {
    number: "03",
    title: "Discover the Draa Valley",
    text: "Experience the scenery of southern Morocco, with traditional settlements, palm groves and oasis landscapes along the proposed route.",
  },
  {
    number: "04",
    title: "Five Days of Gravel Adventure",
    text: "Enjoy a private cycling experience planned around your group, preferred distances, fitness level, bicycle setup and the final route.",
  },
];

const beyondTrail = [
  {
    title: "From mountains to open landscapes",
    text: "Discover the changing scenery between the Atlas Mountains and southern Morocco, from rugged mountain horizons to wide, open landscapes.",
  },
  {
    title: "Traditional villages and kasbahs",
    text: "Explore the cultural character of southern Morocco through its traditional villages, earthen architecture and historic settlements along the proposed journey.",
  },
  {
    title: "Oasis life in the Draa Valley",
    text: "Experience the distinctive landscapes of the Draa Valley, where palm groves, cultivated land and traditional communities follow the course of the valley.",
  },
  {
    title: "The atmosphere of the desert edge",
    text: "Reach the landscapes around the desert edge and discover a different side of Morocco, with open terrain, dry valleys and expansive horizons.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Marrakech to the High Atlas Foothills",
    location: "Marrakech – High Atlas foothills",
    distance: "To be confirmed",
    riding: "First gravel cycling stage",
    image: images.overview,
    text: "Meet the local team in Marrakech and travel towards the High Atlas foothills according to the confirmed programme. After preparing your bicycle and reviewing the proposed route, begin the first cycling stage through the selected mountain landscape. The starting location, road surfaces, riding distance and elevation will depend on the final route. Overnight arrangements will be confirmed in your trip proposal.",
    details: [
      "Meet the team and review the proposed cycling programme",
      "Prepare your gravel bicycle and equipment",
      "Begin the first selected Atlas foothills route",
      "Overnight accommodation according to the confirmed programme",
    ],
  },
  {
    day: "02",
    title: "Cross the Atlas Towards Aït Ben Haddou and Ouarzazate",
    location: "High Atlas – Aït Ben Haddou / Ouarzazate",
    distance: "To be confirmed",
    riding: "Gravel cycling and route-dependent transfers",
    image: images.mountains,
    text: "Continue south from the Atlas region towards the landscapes around Aït Ben Haddou and Ouarzazate. The proposed stage may include mountain roads, selected gravel sections and scenic stops, depending on the confirmed route and road conditions. The choice of mountain crossing, cycling sections and any vehicle transfers will be agreed before departure. The final overnight location will be specified in your itinerary.",
    details: [
      "Continue the journey towards southern Morocco",
      "Explore selected mountain roads and rural landscapes",
      "Discover the area around Aït Ben Haddou if included in the final route",
      "Overnight in the location specified in your confirmed programme",
    ],
  },
  {
    day: "03",
    title: "Ride Towards the Draa Valley and Agdz",
    location: "Ouarzazate – Draa Valley / Agdz",
    distance: "To be confirmed",
    riding: "Gravel cycling and selected rural routes",
    image: images.valley,
    text: "Leave the Ouarzazate area and continue towards the Draa Valley, where the scenery begins to change to dry landscapes, traditional settlements and palm groves. The cycling stage can be planned around suitable rural roads and gravel sections, subject to the final route. Distances, elevation gain, road surfaces and any transfer arrangements will be confirmed before the tour.",
    details: [
      "Travel towards the Draa Valley",
      "Ride selected rural roads and suitable gravel sections",
      "Discover the changing landscapes of southern Morocco",
      "Overnight according to the confirmed itinerary",
    ],
  },
  {
    day: "04",
    title: "Explore the Draa Valley Towards Zagora",
    location: "Draa Valley – Zagora / desert edge",
    distance: "To be confirmed",
    riding: "Full-day gravel cycling, subject to final routing",
    image: images.trails,
    text: "Continue through the landscapes of the Draa Valley towards the Zagora area and the desert edge. The proposed route can include selected rural roads, oasis landscapes and suitable gravel terrain. The actual riding stage will depend on road conditions, the group's ability and the agreed programme. Overnight arrangements and the final riding location will be confirmed in advance.",
    details: [
      "Explore selected sections of the Draa Valley",
      "Discover palm groves and traditional settlements along the route",
      "Continue towards the Zagora area if included in the final programme",
      "Prepare for the final desert-edge stage",
    ],
  },
  {
    day: "05",
    title: "Desert-Edge Gravel Ride and Departure",
    location: "Zagora area – desert edge – agreed departure point",
    distance: "To be confirmed",
    riding: "Final selected gravel stage and departure transfer",
    image: images.final,
    text: "Complete the cycling experience with a final gravel stage in the desert-edge landscapes selected for your trip. The route, riding time and distance will depend on the agreed programme and local conditions. After the final ride, departure arrangements will follow the transfer plan confirmed before booking. A return transfer to Marrakech is not assumed and must be agreed as part of your itinerary.",
    details: [
      "Breakfast and preparation for the final cycling stage",
      "Ride the selected desert-edge route",
      "Finish the five-day cycling programme",
      "Continue to the agreed departure point using the confirmed transfer arrangements",
    ],
  },
];

const inclusions = [
  "Trip planning and route coordination",
  "Local cycling support as agreed in your itinerary",
  "Accommodation specified in your final proposal",
  "Meals explicitly listed in your confirmed itinerary",
  "Bicycle rental if specifically included",
  "Luggage transfers and support vehicle if agreed",
  "Transfers specified in your final proposal",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Gravel bicycle unless included in your proposal",
  "Personal cycling equipment and clothing",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses and tips",
  "Additional nights and transfers not included in your proposal",
];

const preparation = [
  {
    title: "Choose a Suitable Gravel Bike",
    text: "Bring a gravel bicycle suitable for the selected roads and surfaces. Tyre width, gearing, brakes and overall setup should match the confirmed route and the terrain you expect to ride.",
  },
  {
    title: "Prepare for Changing Landscapes",
    text: "The proposed journey moves between mountain and southern Moroccan landscapes. Be prepared for changing temperatures, exposed sections, climbs and descents depending on the final route.",
  },
  {
    title: "Build Your Endurance",
    text: "Previous cycling experience is recommended. Training with sustained climbs and longer rides can help you prepare for the demands of a multi-day gravel journey.",
  },
  {
    title: "Pack Essential Cycling Equipment",
    text: "Bring a suitable helmet, gloves, cycling glasses, layered clothing, comfortable footwear, sun protection, hydration equipment and personal repair supplies appropriate for your bicycle.",
  },
];

const faqs = [
  {
    q: "How long is the Atlas to Desert Gravel Adventure?",
    a: "The tour is planned over five days and four nights. Exact cycling distances, elevation gain, overnight locations, transfers and daily route stages will be confirmed in your personalised trip proposal.",
  },
  {
    q: "Where does the tour start?",
    a: "The proposed starting point is Marrakech, with the journey continuing towards the High Atlas and southern Morocco. The meeting point, first riding location and transfer arrangements will be confirmed before booking.",
  },
  {
    q: "Does the route go from the Atlas Mountains to the Sahara Desert?",
    a: "The proposed journey links the Atlas region with the landscapes of southern Morocco and the desert edge. The exact finishing location and whether the programme reaches a specific desert area depend on the final route agreed for your trip.",
  },
  {
    q: "Is the five-day itinerary fixed?",
    a: "No fixed GPS route or daily riding schedule is specified on this page. The itinerary is a proposed framework. Final riding stages, transfers, overnight stops, distances and route details must be confirmed before booking.",
  },
  {
    q: "What type of roads will we ride?",
    a: "The proposed tour is designed around gravel cycling and may include suitable paved roads, rural routes and gravel sections. The exact balance depends on the selected route and the condition of the roads.",
  },
  {
    q: "Do I need my own gravel bicycle?",
    a: "You can discuss bringing your own bicycle or arranging a rental. Availability, bicycle specifications, rental costs and equipment arrangements must be confirmed in your trip proposal.",
  },
  {
    q: "How difficult is the tour?",
    a: "Difficulty depends on the final route, daily distances, elevation gain, road surfaces and weather conditions. Share your cycling experience and usual riding distances so that the proposed itinerary can be discussed around your ability.",
  },
  {
    q: "Are daily distances and elevation figures fixed?",
    a: "No. Exact distances and elevation figures have not been specified here. They depend on the confirmed cycling stages and will need to be agreed before the trip.",
  },
  {
    q: "Is a return transfer to Marrakech included on Day 5?",
    a: "A return transfer to Marrakech is not assumed as part of the proposed final day. The departure point and any transfer to Marrakech or another destination must be agreed and listed in your final proposal.",
  },
  {
    q: "Can the route be customised?",
    a: "The private tour can be discussed around your travel dates, group size, riding experience and preferred terrain. Route selection, daily stages, accommodation and support arrangements should be agreed before booking.",
  },
];

const relatedTours = [
  {
    category: "GRAVEL CYCLING",
    title: "Gravel Cycling in Morocco",
    text: "Explore Morocco by gravel bicycle on a journey through varied landscapes and quiet rural routes.",
    image: "/images/gravel-cycling-morocco.jpg",
    href: "/cycling-trips/gravel",
  },
  {
    category: "ATLAS MOUNTAINS",
    title: "Atlas Mountains Gravel Ride",
    text: "Discover mountain scenery, traditional villages and selected gravel routes in the Atlas region.",
    image: "/images/gravel-cycling-atlas-mountains.jpg",
    href: "/cycling-trips/trip/atlas-mountains-gravel-ride-4-day",
  },
  {
    category: "SOUTHERN MOROCCO",
    title: "Anti-Atlas Cycling Adventure",
    text: "Explore the distinctive landscapes and quieter roads of southern Morocco on a cycling adventure.",
    image: "/images/anti-atlas-cycling-tour.jpg",
    href: "/cycling-trips",
  },
];

export default function AtlasToDesertGravelAdventureRide5DayPage() {
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
          <img src={images.hero} alt="Gravel cycling adventure from the Atlas Mountains towards the desert landscapes of Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · ATLAS TO DESERT · GRAVEL · 5 DAYS</span>
          <h1>Atlas to Desert Gravel Adventure Ride</h1>
          <p className="at-hero-description">
            Discover Morocco by gravel bicycle on a five-day
            journey from the landscapes of the Atlas Mountains
            towards southern valleys, oasis scenery and the
            desert edge.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Gravel Adventure <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>05 DAYS</strong><span>Gravel adventure</span></div>
            <div><strong>ATLAS</strong><span>Mountain landscapes</span></div>
            <div><strong>DRÂA</strong><span>Valleys and oasis scenery</span></div>
            <div><strong>SOUTH</strong><span>Desert-edge landscapes</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>5 Days / 4 Nights</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Atlas to Southern Morocco</strong></div>
          <div className="at-fact"><span>Starting point</span><strong>Marrakech</strong></div>
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
            <img src={images.overview} alt="Gravel cycling in the landscapes of southern Morocco" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A FIVE-DAY GRAVEL ADVENTURE</span>
            <h2 className="at-heading">Ride from the Atlas Mountains Towards the Desert</h2>
            <p className="at-copy">
              The Atlas to Desert Gravel Adventure Ride is
              a five-day cycling experience proposed to
              connect the mountain landscapes of the Atlas
              with the valleys and desert-edge scenery of
              southern Morocco.
            </p>
            <p className="at-copy">
              Depending on the selected route, the journey
              can combine paved mountain roads, rural routes
              and suitable gravel sections. The landscapes
              change as the route moves south, with the
              possibility of exploring traditional settlements,
              palm groves and open desert-edge terrain.
            </p>
            <p className="at-copy">
              This private cycling experience can be planned
              around your travel dates, riding level and
              bicycle requirements. The final riding stages,
              transfers, overnight stops and GPS routes must
              be confirmed before departure.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the itinerary →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE GRAVEL EXPERIENCE</span>
            <h2 className="at-heading">Five Days from Mountain Roads to Southern Landscapes</h2>
            <p className="at-copy">
              This proposed journey offers a changing
              perspective on Morocco, linking the Atlas
              region with the landscapes around Ouarzazate,
              the Draa Valley and the desert edge.
            </p>
            <p className="at-copy">
              Share your cycling background, preferred
              distances, climbing experience and bicycle setup.
              The daily stages, overnight stops, road surfaces
              and support arrangements can then be discussed
              around your group.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Atlas to Desert Gravel Adventure Ride</h3>
            <p>Five proposed days of gravel cycling connecting Atlas landscapes with southern valleys and the desert edge.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>5 days / 4 nights</strong></li>
              <li><span>Starting city</span><strong>Marrakech</strong></li>
              <li><span>Main regions</span><strong>Atlas and Draa Valley</strong></li>
              <li><span>Tour format</span><strong>Private gravel ride</strong></li>
              <li><span>Route programme</span><strong>Mountain to desert edge</strong></li>
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
              <h2 className="at-heading">Highlights of the Atlas to Desert Gravel Adventure</h2>
            </div>
            <p>
              Discover the changing landscapes of Morocco,
              from the Atlas Mountains towards southern
              valleys, traditional settlements and the
              open scenery of the desert edge.
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
            <img src={images.trails} alt="Gravel terrain and desert landscapes in southern Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE & TERRAIN</span>
            <h2 className="at-heading">From Atlas Mountain Roads to Desert-Edge Routes</h2>
            <p className="at-copy">
              The proposed journey connects several distinct
              landscapes. The Atlas region offers mountain
              roads and valley routes, while the landscapes
              further south become drier and more open.
              The Draa Valley adds another character to
              the journey, with palm groves and rural roads.
            </p>
            <p className="at-copy">
              The exact route will determine the balance
              between paved roads and gravel sections.
              Daily distances, elevation gain, road conditions
              and suitable bicycle specifications should be
              confirmed before the tour.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Selected Atlas mountain roads and foothill routes</li>
              <li><span>02</span>Rural roads and suitable gravel sections</li>
              <li><span>03</span>Draa Valley landscapes and traditional settlements</li>
              <li><span>04</span>Desert-edge terrain selected for the final stage</li>
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
              Review the main details of this proposed
              five-day gravel cycling experience. Exact
              distances, elevation, road surfaces, bicycle
              arrangements, accommodation, overnight stops
              and support services should be confirmed
              in your personalised trip proposal.
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
          <img src={images.village} alt="Traditional village and architecture in southern Morocco" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover the Landscapes and Culture of Southern Morocco</h2>
          <p className="at-copy">
            This journey is about more than the kilometres
            covered. Between cycling stages, discover the
            traditional settlements, oasis landscapes and
            changing scenery that give southern Morocco
            its distinctive character.
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
              <h2 className="at-heading">Explore the Landscapes Along the Journey</h2>
            </div>
            <p>
              From mountain scenery and rural roads
              to palm groves and open southern landscapes,
              discover the variety of terrain that makes
              this proposed gravel journey distinctive.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="Atlas mountain landscape in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.trails} alt="Gravel terrain in southern Morocco" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional village in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Draa Valley and southern Moroccan landscape" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Gravel cycling adventure in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">FIVE DAYS IN MOROCCO</span>
              <h2 className="at-heading">Atlas to Desert Gravel Adventure Itinerary</h2>
            </div>
            <p>
              A proposed five-day route framework
              connecting Marrakech and the Atlas region
              with southern Morocco. Final riding stages,
              transfers, overnight stops and GPS routes
              must be confirmed during trip planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines a proposed progression
            from the Atlas foothills towards the Ouarzazate
            area, the Draa Valley and the desert edge.
            It is not a confirmed GPS route or fixed daily
            riding schedule. Exact routes, distances,
            elevation gain, road surfaces, transfers and
            accommodation depend on the final programme
            agreed with your group.
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
              <h2 className="at-heading">What Is Included in Your Gravel Tour?</h2>
            </div>
            <p>
              Final inclusions are confirmed in your
              booking proposal. Review the services
              listed below and check your personalised
              itinerary before confirming your trip.
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
              <h2 className="at-heading">Preparing for Your Atlas to Desert Gravel Ride</h2>
            </div>
            <p>
              Prepare your bicycle, fitness and equipment
              for a multi-day cycling adventure through
              mountain roads, southern valleys and
              the desert-edge landscapes of Morocco.
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
            <img src={images.cycling} alt="Gravel cycling in the landscapes of Morocco" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">Difficulty and Cycling Experience</h2>
            <p className="at-copy">
              A multi-day gravel tour can involve sustained
              climbs, long riding stages, descents and changing
              road surfaces. The overall difficulty depends
              on the selected route, daily distances, elevation
              gain and weather conditions across the regions
              included in the final programme.
            </p>
            <p className="at-copy">
              Tell us about your cycling experience,
              the distances you normally ride and your
              preferred terrain. This information will help
              when discussing suitable stages and the
              bicycle setup for your journey.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty,
              daily distances, elevation figures, road
              surfaces and transfers must be checked against
              the actual route before booking. This page
              presents a proposed route framework and
              does not promise a fixed technical grade,
              mileage or GPS itinerary.
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
              the proposed Atlas to Desert gravel
              cycling adventure. Contact our team if
              you need more details before planning
              your journey.
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
          <img src={images.final} alt="Southern Moroccan landscape towards the desert edge" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR GRAVEL ADVENTURE STARTS HERE</span>
          <h2>Ready to Ride from the Atlas Mountains Towards the Desert?</h2>
          <p>
            Tell us your preferred dates, group size,
            cycling experience and bicycle requirements.
            We can discuss the proposed five-day journey,
            the final riding stages and the transfers
            needed for your Atlas to Desert gravel adventure.
          </p>
          <a className="at-button" href="/contact">Plan Your Gravel Adventure <span>→</span></a>
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
              Discover more ways to experience Morocco,
              from gravel cycling through mountain
              landscapes to longer road and mountain
              biking adventures.
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