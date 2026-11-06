import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MTB Tour Atlas Mountains – 2 Days | Mountain Bike Morocco",
  description:
    "Ride the High Atlas Mountains on a two-day mountain biking adventure from Marrakech. Discover mountain trails, Berber villages, spectacular landscapes and unforgettable off-road riding.",
  alternates: {
    canonical: "/cycling-trips/trip/mtb-tour-atlas-mountains-2-day",
  },
};

const images = {
  hero: "/images/mountain-bike-morocco-hero.jpg",
  overview: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  atlas: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  valley: "/images/singletrack-mtb-atlas-mountains.jpg",
  village: "/images/group-cycling-tour-morocco.jpg",
  cycling: "/images/saghro-morocco-bike-tour.jpg",
  final: "/images/atlas-mountains-cycling-tour-morocco.jpg",
};

const facts = [
  ["Duration", "2 days / 1 night"],
  ["Destination", "High Atlas Mountains, Morocco"],
  ["Starting point", "Marrakech"],
  ["Main areas", "Imlil and surrounding Atlas valleys"],
  ["Cycling style", "Mountain biking and off-road trails"],
  ["Difficulty", "To be confirmed against the final route"],
  ["Experience", "Previous MTB experience recommended"],
  ["Tour format", "Private mountain bike tour"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "High Atlas Mountain Trails",
    text: "Discover the spectacular mountain landscapes of the High Atlas, riding selected off-road tracks and trails through some of Morocco's most impressive mountain scenery.",
  },
  {
    number: "02",
    title: "Technical Mountain Descents",
    text: "Experience varied mountain biking terrain, with selected descents and trails adapted to your riding ability, confidence and the conditions on the ground.",
  },
  {
    number: "03",
    title: "Traditional Berber Villages",
    text: "Ride through traditional Amazigh communities and discover the rural architecture, mountain lifestyle and hospitality of the High Atlas.",
  },
  {
    number: "04",
    title: "Two Days of MTB Adventure",
    text: "Enjoy a short but rewarding mountain biking escape from Marrakech, combining mountain scenery, off-road riding and an overnight stay in the Atlas region.",
  },
];

const beyondTrail = [
  {
    title: "Traditional village life",
    text: "Discover mountain communities, traditional stone houses, terraced fields and the everyday life of the Amazigh people.",
  },
  {
    title: "High Atlas scenery",
    text: "Enjoy panoramic mountain views, deep valleys and changing landscapes throughout your two-day journey.",
  },
  {
    title: "Local hospitality",
    text: "Experience the welcoming atmosphere of mountain villages and enjoy the opportunity to discover regional food and traditions.",
  },
  {
    title: "A mountain escape",
    text: "Leave the busy streets of Marrakech behind and experience the quieter landscapes and trails of the High Atlas.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Marrakech – Imlil – Atlas Mountain Trails",
    location: "Marrakech – Imlil – High Atlas Mountains",
    distance: "Route-dependent",
    riding: "Mountain biking and selected trails",
    image: images.atlas,
    text: "Your two-day MTB adventure begins with a transfer from Marrakech towards Imlil in the High Atlas Mountains. After meeting your local cycling team and checking your bicycle and equipment, begin exploring the mountain trails. Ride selected off-road routes through spectacular scenery, traditional villages and mountain landscapes. The day's route is adapted to your riding experience, fitness and the conditions on the ground. After the ride, settle into your accommodation in the Atlas region.",
    details: [
      "Transfer from Marrakech to the High Atlas",
      "Meet your local cycling guide",
      "Bicycle and equipment check",
      "Explore selected mountain biking trails",
      "Overnight accommodation in the Atlas region",
    ],
  },
  {
    day: "02",
    title: "High Atlas – Mountain Descents – Marrakech",
    location: "Imlil – Atlas Mountains – Marrakech",
    distance: "Route-dependent",
    riding: "Off-road mountain trails and descents",
    image: images.valley,
    text: "After breakfast, continue your mountain biking adventure through the High Atlas. Discover additional trails and mountain tracks, enjoying the spectacular scenery and varied terrain of the region. Depending on the selected route and your riding level, the day may include challenging sections, flowing descents and traditional mountain paths. After completing the planned ride, return to Marrakech by transfer.",
    details: [
      "Breakfast at your mountain accommodation",
      "Continue exploring the High Atlas trails",
      "Ride selected descents and off-road tracks",
      "Finish the planned cycling stage",
      "Transfer back to Marrakech",
    ],
  },
];

const inclusions = [
  "Trip planning and route coordination",
  "Local MTB guide as agreed in your itinerary",
  "One night of accommodation as specified in your proposal",
  "Meals explicitly listed in your confirmed itinerary",
  "Transfers where specified in your proposal",
  "Support vehicle where included in your arrangements",
  "On-trip coordination and practical assistance",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Mountain bike and personal cycling equipment unless agreed",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses and tips",
  "Additional nights and transfers not included in your proposal",
  "Services not specifically listed in your confirmed booking",
];

const preparation = [
  {
    title: "Choose the right MTB",
    text: "A well-maintained mountain bike suitable for rocky trails, uneven terrain and mountain descents is recommended. Confirm the recommended bicycle type, rental options and setup with the team before travelling.",
  },
  {
    title: "Protective equipment",
    text: "Bring a suitable helmet, gloves, cycling glasses and comfortable riding clothing. Knee and elbow protection may be useful depending on the selected trails and your riding style.",
  },
  {
    title: "Fitness and experience",
    text: "Prepare for two days of mountain biking that may include climbing, rough terrain and consecutive riding stages. Share your cycling experience and fitness level before the route is confirmed.",
  },
  {
    title: "Personal essentials",
    text: "Bring sun protection, hydration equipment, layers for cooler mountain weather, personal medication and preferred cycling nutrition. A basic repair kit and suitable spare parts are useful.",
  },
];

const faqs = [
  {
    q: "How long is the Atlas Mountains MTB Tour?",
    a: "The tour is planned over two days and one night, starting and finishing in Marrakech.",
  },
  {
    q: "Where does the tour start?",
    a: "The tour starts in Marrakech, with a transfer towards the High Atlas Mountains and the Imlil area.",
  },
  {
    q: "What type of mountain biking can I expect?",
    a: "The experience focuses on mountain trails, off-road tracks and selected descents. The exact terrain depends on the confirmed route and your riding experience.",
  },
  {
    q: "Is this tour suitable for beginners?",
    a: "The suitability depends on the final route and your cycling ability. Previous mountain biking experience is recommended. Share your experience so the team can discuss suitable trails.",
  },
  {
    q: "Do I need to bring my own mountain bike?",
    a: "You can discuss bringing your own bicycle or arranging a rental. Confirm availability, bicycle specifications and equipment requirements before booking.",
  },
  {
    q: "Are daily distances and elevation fixed?",
    a: "Daily distances and elevation gain depend on the selected trails, route conditions and riding level. Exact figures should be confirmed in your final itinerary.",
  },
  {
    q: "Where will we stay overnight?",
    a: "One night of accommodation in the Atlas region is planned. The specific accommodation and meal arrangements are confirmed in your trip proposal.",
  },
  {
    q: "When is the best time for mountain biking in the Atlas?",
    a: "Spring and autumn are generally suitable periods for mountain biking in the High Atlas. Weather and trail conditions vary, so the best dates depend on your preferred experience.",
  },
  {
    q: "Can the route be adapted to my riding level?",
    a: "The private tour can be discussed around your riding experience, fitness, preferred terrain and travel dates. The final route should be agreed before booking.",
  },
  {
    q: "Are transfers and a guide included?",
    a: "Guide services, transfers, accommodation, meals and support arrangements depend on the services specified in your final trip proposal.",
  },
];

const relatedTours = [
  {
    category: "MTB ADVENTURE",
    title: "Epic Singletrack Atlas Mountains",
    text: "Explore natural singletrack, mountain valleys and spectacular trails on an extended High Atlas mountain biking adventure.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/trip/epic-singletrack-atlas-mountains-8-day",
  },
  {
    category: "ENDURO MTB",
    title: "Atlas Enduro MTB Tour",
    text: "Discover a trail-focused mountain biking experience with selected descents in Morocco's Atlas region.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/cycling-trips/trip/atlas-enduro-mtb-tour-5-day",
  },
  {
    category: "E-MTB ADVENTURE",
    title: "E-MTB Tour Morocco",
    text: "Explore the mountain scenery and traditional villages of Morocco with the added assistance of an electric mountain bike.",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/cycling-trips/trip/e-mtb-tour-morocco",
  },
];

export default function MtbAtlasMountains2DayPage() {
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
        .atlas-tour img { display:block;width:100%;height:100%;object-fit:cover; }
        .atlas-tour a { color:inherit; }
        .atlas-tour .at-container { width:min(1240px,calc(100% - 64px));margin-inline:auto; }
        .atlas-tour .at-eyebrow { display:block;color:#946c30;font-size:11px;font-weight:700;letter-spacing:2px;line-height:1.6;text-transform:uppercase; }
        .atlas-tour .at-heading { margin:12px 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:clamp(32px,3.5vw,48px);font-weight:400;letter-spacing:-1.25px;line-height:1.14; }
        .atlas-tour .at-section { padding:86px 0; }
        .atlas-tour .at-section-head { display:grid;grid-template-columns:1.15fr .85fr;align-items:end;gap:44px;margin-bottom:36px; }
        .atlas-tour .at-section-head .at-heading { margin-bottom:0; }
        .atlas-tour .at-section-head>p { max-width:480px;margin:0 0 4px auto;color:var(--muted);font-size:15px;line-height:1.85; }
        .atlas-tour .at-copy { color:#5f6359;font-size:16px;line-height:1.95; }
        .atlas-tour .at-button { display:inline-flex;min-height:49px;align-items:center;justify-content:center;gap:15px;padding:13px 22px;border:1px solid var(--gold);background:var(--gold);color:#1f211b;font-size:12px;font-weight:700;letter-spacing:1px;text-decoration:none;text-transform:uppercase;transition:background .2s ease,color .2s ease; }
        .atlas-tour .at-button:hover { background:#a98343;border-color:#a98343;color:#fff; }
        .atlas-tour .at-text-link { display:inline-block;margin-top:20px;border-bottom:1px solid var(--gold);padding-bottom:5px;font-size:12px;font-weight:700;letter-spacing:1px;text-decoration:none;text-transform:uppercase; }
        .atlas-tour .at-hero { position:relative;display:flex;min-height:680px;align-items:flex-end;background:#202a22;color:#fff;isolation:isolate; }
        .atlas-tour .at-hero-image,.atlas-tour .at-hero-shade { position:absolute;inset:0; }
        .atlas-tour .at-hero-image { z-index:-2; }
        .atlas-tour .at-hero-image img { object-position:center 48%; }
        .atlas-tour .at-hero-shade { z-index:-1;background:linear-gradient(90deg,rgba(9,14,10,.88),rgba(9,14,10,.22)),linear-gradient(0deg,rgba(9,14,10,.78),transparent 72%); }
        .atlas-tour .at-hero-content { position:relative;z-index:1;width:min(1240px,calc(100% - 64px));margin:0 auto;padding:110px 0 65px;color:#fff!important; }
        .atlas-tour .at-hero .at-eyebrow { color:#f0ce88!important;font-size:12px; }
        .atlas-tour .at-hero h1 { max-width:850px;margin:19px 0 22px;color:#fff!important;font-family:Georgia,'Times New Roman',serif;font-size:clamp(48px,6.5vw,84px);font-weight:400;letter-spacing:-2.7px;line-height:1.02;text-shadow:0 2px 20px rgba(0,0,0,.3); }
        .atlas-tour .at-hero-description { max-width:570px;margin:0;color:#fff!important;font-size:17px;line-height:1.85; }
        .atlas-tour .at-hero-actions { display:flex;flex-wrap:wrap;align-items:center;gap:22px;margin-top:30px; }
        .atlas-tour .at-hero .at-button { background:#d1ac67;border-color:#d1ac67;color:#191d17!important; }
        .atlas-tour .at-hero-back { color:#fff!important;font-size:13px;font-weight:600;text-decoration:none; }
        .atlas-tour .at-hero-bottom { display:flex;flex-wrap:wrap;gap:34px;margin-top:53px;padding-top:22px;border-top:1px solid rgba(255,255,255,.36); }
        .atlas-tour .at-hero-bottom div { min-width:105px; }
        .atlas-tour .at-hero-bottom strong { display:block;color:#fff!important;font-size:13px;letter-spacing:1.3px; }
        .atlas-tour .at-hero-bottom span { color:#eeeae1!important;font-size:11px;letter-spacing:1px;text-transform:uppercase; }
        .atlas-tour .at-fact-strip { background:#fffefa;border-bottom:1px solid var(--line); }
        .atlas-tour .at-fact-strip-inner { display:grid;grid-template-columns:repeat(4,1fr); }
        .atlas-tour .at-fact { min-height:104px;padding:23px 25px;border-right:1px solid var(--line); }
        .atlas-tour .at-fact:last-child { border:0; }
        .atlas-tour .at-fact span { display:block;margin-bottom:5px;color:#8b7652;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase; }
        .atlas-tour .at-fact strong { display:block;font-family:Georgia,'Times New Roman',serif;font-size:17px;font-weight:400;line-height:1.4; }
        .atlas-tour .at-subnav { background:var(--green);color:#fff; }
        .atlas-tour .at-subnav-inner { display:flex;flex-wrap:wrap;justify-content:center;gap:9px 30px;padding:16px 0; }
        .atlas-tour .at-subnav a { color:#eee9dc;font-size:10px;font-weight:700;letter-spacing:1.3px;text-decoration:none;text-transform:uppercase; }
        .atlas-tour .at-overview-grid { display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:75px; }
        .atlas-tour .at-overview-image { position:relative;min-height:570px; }
        .atlas-tour .at-overview-image img { position:absolute;inset:0; }
        .atlas-tour .at-overview-image:after { position:absolute;right:-18px;bottom:-18px;z-index:-1;width:48%;height:48%;border:1px solid var(--gold);content:""; }
        .atlas-tour .at-overview-content { padding:25px 0; }
        .atlas-tour .at-booking-card { padding:32px;background:#fffefa;border:1px solid var(--line);box-shadow:0 15px 45px rgba(32,36,31,.06); }
        .atlas-tour .at-booking-card h3 { margin:8px 0 12px;font-family:Georgia,'Times New Roman',serif;font-size:27px;font-weight:400;line-height:1.25; }
        .atlas-tour .at-booking-card p { color:var(--muted);font-size:14px; }
        .atlas-tour .at-booking-list { margin:22px 0;padding:0;list-style:none; }
        .atlas-tour .at-booking-list li { display:flex;justify-content:space-between;gap:15px;padding:11px 0;border-bottom:1px solid var(--line);font-size:13px; }
        .atlas-tour .at-booking-list span { color:var(--muted); }
        .atlas-tour .at-booking-list strong { text-align:right; }
        .atlas-tour .at-booking-card .at-button { width:100%; }
        .atlas-tour .at-highlight-section,.atlas-tour .at-itinerary-section,.atlas-tour .at-prep-section { background:#eae6db; }
        .atlas-tour .at-highlight-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#d8d2c5;border:1px solid #d8d2c5; }
        .atlas-tour .at-highlight { min-height:245px;padding:31px 25px;background:var(--paper); }
        .atlas-tour .at-highlight-number { display:block;margin-bottom:28px;color:#b28a4c;font-family:Georgia,serif;font-size:25px; }
        .atlas-tour .at-highlight h3,.atlas-tour .at-prep-card h3 { margin:0 0 12px;font-family:Georgia,serif;font-size:22px;font-weight:400;line-height:1.25; }
        .atlas-tour .at-highlight p,.atlas-tour .at-prep-card p { margin:0;color:var(--muted);font-size:13px;line-height:1.8; }
        .atlas-tour .at-terrain-grid { display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:70px; }
        .atlas-tour .at-terrain-image { height:490px;overflow:hidden; }
        .atlas-tour .at-terrain-points { margin:28px 0 0;padding:0;list-style:none; }
        .atlas-tour .at-terrain-points li { display:grid;grid-template-columns:32px 1fr;gap:13px;padding:15px 0;border-top:1px solid var(--line);color:var(--muted);font-size:14px; }
        .atlas-tour .at-terrain-points span { color:#a27b40;font-weight:700; }
        .atlas-tour .at-facts-section,.atlas-tour .at-faq-section { background:#fffefa; }
        .atlas-tour .at-facts-layout,.atlas-tour .at-difficulty-grid { display:grid;grid-template-columns:.8fr 1.2fr;gap:75px;align-items:center; }
        .atlas-tour .at-facts-table,.atlas-tour .at-faq-list { border-top:1px solid var(--line); }
        .atlas-tour .at-facts-row { display:grid;grid-template-columns:.7fr 1.3fr;gap:25px;padding:16px 0;border-bottom:1px solid var(--line);font-size:14px; }
        .atlas-tour .at-facts-row span { color:var(--muted); }
        .atlas-tour .at-culture { display:grid;grid-template-columns:1fr 1fr;min-height:520px;background:var(--green);color:#fff; }
        .atlas-tour .at-culture-image { min-height:520px; }
        .atlas-tour .at-culture-content { align-self:center;padding:70px clamp(35px,7vw,100px); }
        .atlas-tour .at-culture .at-eyebrow { color:var(--gold-light); }
        .atlas-tour .at-culture .at-heading { color:#fff; }
        .atlas-tour .at-culture .at-copy { color:#e1e2d8; }
        .atlas-tour .at-culture-grid { display:grid;grid-template-columns:1fr 1fr;gap:25px;margin-top:30px; }
        .atlas-tour .at-culture-item { padding-top:16px;border-top:1px solid rgba(255,255,255,.25); }
        .atlas-tour .at-culture-item h3 { margin:0 0 7px;color:#f1d49a;font-family:Georgia,serif;font-size:19px;font-weight:400; }
        .atlas-tour .at-culture-item p { margin:0;color:#d7dbd1;font-size:12px;line-height:1.8; }
        .atlas-tour .at-gallery-grid { display:grid;grid-template-columns:1.25fr .75fr .75fr;grid-template-rows:245px 245px;gap:14px; }
        .atlas-tour .at-gallery-item { overflow:hidden; }
        .atlas-tour .at-gallery-item:first-child { grid-row:span 2; }
        .atlas-tour .at-itinerary-intro { max-width:700px;margin:0 0 42px;color:var(--muted);font-size:15px;line-height:1.9; }
        .atlas-tour .at-itinerary-list { display:grid;gap:22px; }
        .atlas-tour .at-day { display:grid;grid-template-columns:1fr 1fr;min-height:370px;background:#fffefa;border:1px solid #e0dcd1; }
        .atlas-tour .at-day:nth-child(even) .at-day-image { order:2; }
        .atlas-tour .at-day-image { min-height:370px; }
        .atlas-tour .at-day-content { align-self:center;padding:40px clamp(25px,5vw,65px); }
        .atlas-tour .at-day-number { color:#a27b40;font-family:Georgia,serif;font-size:38px;line-height:1; }
        .atlas-tour .at-day-content h3 { margin:12px 0;font-family:Georgia,serif;font-size:clamp(24px,2.6vw,32px);font-weight:400;line-height:1.2; }
        .atlas-tour .at-day-location { margin-bottom:16px;color:#927344;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase; }
        .atlas-tour .at-day-content>p { color:var(--muted);font-size:14px;line-height:1.85; }
        .atlas-tour .at-day-meta { display:flex;flex-wrap:wrap;gap:8px 20px;margin:18px 0;padding:13px 0;border-block:1px solid var(--line);color:#62665d;font-size:11px; }
        .atlas-tour .at-day-content ul { display:grid;gap:7px;margin:15px 0 0;padding-left:18px;color:#62665d;font-size:12px; }
        .atlas-tour .at-inclusions-grid { display:grid;grid-template-columns:1fr 1fr;gap:30px; }
        .atlas-tour .at-inclusion-card { padding:38px;background:#fffefa;border:1px solid var(--line); }
        .atlas-tour .at-inclusion-card h3 { margin:0 0 22px;font-family:Georgia,serif;font-size:29px;font-weight:400; }
        .atlas-tour .at-inclusion-card ul { display:grid;gap:13px;margin:0;padding:0;list-style:none; }
        .atlas-tour .at-inclusion-card li { display:grid;grid-template-columns:22px 1fr;gap:10px;color:var(--muted);font-size:14px;line-height:1.7; }
        .atlas-tour .at-inclusion-card li span { color:#a27b40;font-weight:700; }
        .atlas-tour .at-prep-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:22px; }
        .atlas-tour .at-prep-card { padding:28px 24px;background:var(--paper);border-top:2px solid var(--gold); }
        .atlas-tour .at-prep-card h3 { font-size:21px; }
        .atlas-tour .at-difficulty-image { height:430px; }
        .atlas-tour .at-difficulty-note { margin-top:25px;padding:22px 25px;background:#eae6db;border-left:3px solid var(--gold);color:var(--muted);font-size:13px;line-height:1.85; }
        .atlas-tour .at-faq-layout { display:grid;grid-template-columns:.7fr 1.3fr;gap:75px; }
        .atlas-tour .at-faq-list details { padding:19px 0;border-bottom:1px solid var(--line); }
        .atlas-tour .at-faq-list summary { position:relative;padding-right:35px;font-family:Georgia,serif;font-size:19px;line-height:1.45;list-style:none;cursor:pointer; }
        .atlas-tour .at-faq-list summary::-webkit-details-marker { display:none; }
        .atlas-tour .at-faq-list summary:after { position:absolute;top:0;right:3px;color:#a27b40;content:"+";font-family:Arial,sans-serif;font-size:23px; }
        .atlas-tour .at-faq-list details[open] summary:after { content:"−"; }
        .atlas-tour .at-faq-list details p { max-width:690px;margin:13px 0 0;color:var(--muted);font-size:14px;line-height:1.85; }
        .atlas-tour .at-final-cta { position:relative;display:flex;min-height:500px;align-items:center;background:#1e2a22;color:#fff;isolation:isolate; }
        .atlas-tour .at-final-image,.atlas-tour .at-final-shade { position:absolute;inset:0; }
        .atlas-tour .at-final-image { z-index:-2; }
        .atlas-tour .at-final-shade { z-index:-1;background:linear-gradient(90deg,rgba(10,17,12,.88),rgba(10,17,12,.35)); }
        .atlas-tour .at-final-content { width:min(1240px,calc(100% - 64px));margin:0 auto;padding:90px 0; }
        .atlas-tour .at-final-content .at-eyebrow { color:#f0ce88; }
        .atlas-tour .at-final-content h2 { max-width:750px;margin:15px 0 20px;color:#fff;font-family:Georgia,serif;font-size:clamp(38px,5.5vw,68px);font-weight:400;letter-spacing:-1.8px;line-height:1.1; }
        .atlas-tour .at-final-content p { max-width:580px;margin-bottom:28px;color:#f0eee6;font-size:16px;line-height:1.85; }
        .atlas-tour .at-related-section { padding:86px 0; }
        .atlas-tour .at-related-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:25px; }
        .atlas-tour .at-related-card { background:#fffefa;border:1px solid var(--line); }
        .atlas-tour .at-related-image { height:255px;overflow:hidden; }
        .atlas-tour .at-related-content { padding:25px; }
        .atlas-tour .at-related-content .at-eyebrow { font-size:9px;letter-spacing:1.4px; }
        .atlas-tour .at-related-content h3 { margin:10px 0;font-family:Georgia,serif;font-size:24px;font-weight:400;line-height:1.25; }
        .atlas-tour .at-related-content p { color:var(--muted);font-size:13px;line-height:1.8; }
        .atlas-tour .at-related-content a { display:inline-block;margin-top:8px;padding-bottom:4px;border-bottom:1px solid var(--gold);font-size:11px;font-weight:700;letter-spacing:1px;text-decoration:none;text-transform:uppercase; }
        .atlas-tour .at-footer { background:#171d18;color:#eeeae1; }
        .atlas-tour .at-footer-main { display:grid;grid-template-columns:1.3fr .8fr .9fr 1fr;gap:45px;padding:65px 0 50px; }
        .atlas-tour .at-footer-brand img { width:190px;height:auto;object-fit:contain; }
        .atlas-tour .at-footer-brand p { max-width:300px;margin-top:20px;color:#b9beb5;font-size:13px;line-height:1.9; }
        .atlas-tour .at-footer h3 { margin:0 0 19px;color:#e4c78c;font-size:11px;letter-spacing:1.6px;text-transform:uppercase; }
        .atlas-tour .at-footer-links { display:grid;gap:11px; }
        .atlas-tour .at-footer-links a { color:#c4c8c0;font-size:13px;text-decoration:none; }
        .atlas-tour .at-footer-bottom { display:flex;justify-content:space-between;gap:20px;padding:20px 0;border-top:1px solid rgba(255,255,255,.15);color:#9fa69c;font-size:11px; }
        @media(max-width:1000px) {
          .atlas-tour .at-overview-grid,.atlas-tour .at-terrain-grid,.atlas-tour .at-facts-layout,.atlas-tour .at-difficulty-grid,.atlas-tour .at-faq-layout { gap:40px; }
          .atlas-tour .at-highlight-grid { grid-template-columns:repeat(2,1fr); }
          .atlas-tour .at-prep-grid { grid-template-columns:repeat(2,1fr); }
          .atlas-tour .at-footer-main { grid-template-columns:1.2fr 1fr; }
        }
        @media(max-width:700px) {
          .atlas-tour .at-container { width:min(100% - 40px,1240px); }
          .atlas-tour .at-section { padding:65px 0; }
          .atlas-tour .at-hero { min-height:650px; }
          .atlas-tour .at-hero-content { width:calc(100% - 40px);padding:90px 0 42px; }
          .atlas-tour .at-hero h1 { font-size:clamp(43px,12vw,62px);letter-spacing:-1.8px; }
          .atlas-tour .at-hero-description { font-size:15px; }
          .atlas-tour .at-hero-bottom { gap:18px 25px;margin-top:38px; }
          .atlas-tour .at-fact-strip-inner { grid-template-columns:repeat(2,1fr); }
          .atlas-tour .at-fact { min-height:90px;padding:17px 15px; }
          .atlas-tour .at-fact:nth-child(2) { border-right:0; }
          .atlas-tour .at-fact:nth-child(-n+2) { border-bottom:1px solid var(--line); }
          .atlas-tour .at-subnav-inner { justify-content:flex-start;gap:12px 20px; }
          .atlas-tour .at-subnav a { font-size:9px; }
          .atlas-tour .at-section-head { grid-template-columns:1fr;gap:14px; }
          .atlas-tour .at-section-head>p { margin:0; }
          .atlas-tour .at-overview-grid,.atlas-tour .at-terrain-grid,.atlas-tour .at-facts-layout,.atlas-tour .at-difficulty-grid,.atlas-tour .at-faq-layout { grid-template-columns:1fr;gap:35px; }
          .atlas-tour .at-overview-image { min-height:390px;margin-right:12px; }
          .atlas-tour .at-booking-card { padding:25px; }
          .atlas-tour .at-highlight { min-height:230px;padding:23px 17px; }
          .atlas-tour .at-highlight h3 { font-size:19px; }
          .atlas-tour .at-highlight p { font-size:12px; }
          .atlas-tour .at-terrain-image { height:350px; }
          .atlas-tour .at-culture { grid-template-columns:1fr; }
          .atlas-tour .at-culture-image { min-height:330px; }
          .atlas-tour .at-culture-content { padding:55px 25px; }
          .atlas-tour .at-culture-grid { gap:20px 15px; }
          .atlas-tour .at-gallery-grid { grid-template-columns:1fr 1fr;grid-template-rows:250px 170px 170px; }
          .atlas-tour .at-gallery-item:first-child { grid-column:span 2;grid-row:auto; }
          .atlas-tour .at-day { grid-template-columns:1fr; }
          .atlas-tour .at-day:nth-child(even) .at-day-image { order:0; }
          .atlas-tour .at-day-image { min-height:260px; }
          .atlas-tour .at-day-content { padding:28px 23px; }
          .atlas-tour .at-inclusions-grid { grid-template-columns:1fr; }
          .atlas-tour .at-inclusion-card { padding:28px 23px; }
          .atlas-tour .at-prep-grid { grid-template-columns:1fr; }
          .atlas-tour .at-difficulty-image { height:330px; }
          .atlas-tour .at-final-content { width:calc(100% - 40px);padding:75px 0; }
          .atlas-tour .at-related-grid { grid-template-columns:1fr; }
          .atlas-tour .at-related-image { height:240px; }
          .atlas-tour .at-footer-main { grid-template-columns:1fr 1fr;gap:35px 22px;padding:50px 0 35px; }
          .atlas-tour .at-footer-bottom { flex-direction:column;gap:8px; }
        }
        @media(max-width:420px) {
          .atlas-tour .at-highlight-grid { grid-template-columns:1fr; }
          .atlas-tour .at-highlight { min-height:auto; }
          .atlas-tour .at-facts-row { grid-template-columns:1fr;gap:3px; }
          .atlas-tour .at-footer-main { grid-template-columns:1fr; }
        }
      `}</style>

      <section className="at-hero">
        <div className="at-hero-image">
          <img src={images.hero} alt="Mountain biking adventure in Morocco's High Atlas Mountains" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · HIGH ATLAS · 2 DAYS</span>
          <h1>MTB Tour Atlas Mountains</h1>
          <p className="at-hero-description">
            Two days of mountain biking in Morocco's spectacular High Atlas.
            Discover mountain trails, traditional Berber villages, rugged
            landscapes and unforgettable off-road riding on a private
            adventure from Marrakech.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your MTB Adventure <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>02 DAYS</strong><span>Mountain bike adventure</span></div>
            <div><strong>HIGH ATLAS</strong><span>Morocco</span></div>
            <div><strong>OFF-ROAD MTB</strong><span>Mountain trails</span></div>
            <div><strong>MARRAKECH</strong><span>Starting point</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>2 Days / 1 Night</strong></div>
          <div className="at-fact"><span>Region</span><strong>High Atlas Mountains</strong></div>
          <div className="at-fact"><span>Starting point</span><strong>Marrakech</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Private MTB Adventure</strong></div>
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
            <img src={images.overview} alt="Mountain landscape and cycling routes in the High Atlas" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A HIGH ATLAS MOUNTAIN BIKING ADVENTURE</span>
            <h2 className="at-heading">Two Days Exploring the Trails of Morocco's High Atlas</h2>
            <p className="at-copy">
              Escape Marrakech and discover the spectacular mountain
              landscapes of the High Atlas on a two-day mountain biking
              adventure. Ride through rugged terrain, traditional villages
              and beautiful valleys, experiencing a different side of
              Morocco by bicycle.
            </p>
            <p className="at-copy">
              The programme combines selected mountain trails and off-road
              routes with an overnight stay in the Atlas region. The exact
              route is planned around your experience, fitness and preferred
              style of mountain biking.
            </p>
            <p className="at-copy">
              Whether you enjoy flowing trails, challenging terrain or
              discovering remote mountain scenery, this private experience
              can be discussed around your expectations and riding ability.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the itinerary →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE MTB EXPERIENCE</span>
            <h2 className="at-heading">A Mountain Biking Escape from Marrakech</h2>
            <p className="at-copy">
              The High Atlas offers an extraordinary setting for mountain
              biking, with mountain tracks, rocky trails, village paths and
              spectacular views across the surrounding valleys.
            </p>
            <p className="at-copy">
              Over two days, discover selected riding areas around Imlil
              and the surrounding mountains. The route can be discussed
              according to your experience, fitness and preferred terrain.
            </p>
            <p className="at-copy">
              Share your riding background, group size and preferred travel
              dates so the team can discuss a suitable private MTB programme.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>MTB Tour Atlas Mountains</h3>
            <p>Two days exploring mountain trails and traditional villages in Morocco's High Atlas.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>2 days / 1 night</strong></li>
              <li><span>Starting city</span><strong>Marrakech</strong></li>
              <li><span>Main region</span><strong>High Atlas</strong></li>
              <li><span>Tour format</span><strong>Private MTB</strong></li>
              <li><span>Route programme</span><strong>Customised</strong></li>
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
              <h2 className="at-heading">Highlights of the Atlas Mountains MTB Tour</h2>
            </div>
            <p>
              Discover the High Atlas by mountain bike, combining selected
              trails, dramatic mountain scenery and traditional village life
              on a two-day private adventure.
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
            <img src={images.valley} alt="Mountain biking singletrack in the Atlas Mountains" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTES & TERRAIN</span>
            <h2 className="at-heading">Mountain Trails, Rocky Tracks and Spectacular Descents</h2>
            <p className="at-copy">
              The High Atlas provides a varied mountain biking environment.
              Depending on the selected route, trails may pass through
              rocky mountain terrain, traditional villages, open slopes
              and beautiful valleys.
            </p>
            <p className="at-copy">
              The balance between climbing, technical sections and descents
              depends on the final route and your riding ability. The
              programme is discussed before booking to ensure the selected
              trails are appropriate for your group.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Selected mountain biking trails</li>
              <li><span>02</span>Rocky off-road mountain tracks</li>
              <li><span>03</span>Traditional village paths and valleys</li>
              <li><span>04</span>Descents adapted to your riding level</li>
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
              Review the main details of this two-day MTB experience.
              Exact distances, elevation, route difficulty, accommodation
              and support services are confirmed in your personalised
              trip proposal.
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
          <img src={images.village} alt="Traditional Amazigh village in Morocco's High Atlas Mountains" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE TRAIL</span>
          <h2 className="at-heading">Discover the Culture and Landscapes of the High Atlas</h2>
          <p className="at-copy">
            A mountain biking journey in the High Atlas is about more than
            trails. Between riding stages, discover traditional villages,
            mountain architecture and the hospitality of local communities.
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
              <h2 className="at-heading">The Trails and Landscapes of the High Atlas</h2>
            </div>
            <p>
              Discover the mountain scenery, trails and traditional
              settlements that make this region a remarkable MTB destination.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.atlas} alt="High Atlas mountain biking landscape" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Mountain biking trail in the Atlas" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional Atlas mountain village" /></div>
            <div className="at-gallery-item"><img src={images.overview} alt="Atlas Mountains scenery" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Off-road cycling landscape in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">TWO DAYS IN THE HIGH ATLAS</span>
              <h2 className="at-heading">Atlas Mountains MTB Tour Itinerary</h2>
            </div>
            <p>
              A two-day mountain biking journey from Marrakech, combining
              selected High Atlas trails, traditional villages and an
              overnight stay in the mountains.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The itinerary below provides an overview of the experience.
            Daily distances, elevation gain, exact riding routes and
            overnight arrangements depend on the final programme agreed
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
              <span className="at-eyebrow">YOUR TRIP ARRANGEMENTS</span>
              <h2 className="at-heading">What Is Included in Your MTB Tour?</h2>
            </div>
            <p>
              The final inclusions are confirmed in your booking proposal.
              Review the services listed below and check your personalised
              itinerary before confirming your trip.
            </p>
          </div>
          <div className="at-inclusions-grid">
            <div className="at-inclusion-card">
              <h3>Included</h3>
              <ul>
                {inclusions.map((item) => <li key={item}><span>+</span>{item}</li>)}
              </ul>
            </div>
            <div className="at-inclusion-card">
              <h3>Not Included</h3>
              <ul>
                {exclusions.map((item) => <li key={item}><span>−</span>{item}</li>)}
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
              <h2 className="at-heading">Preparing for Your Atlas MTB Adventure</h2>
            </div>
            <p>
              Prepare your bicycle, protective equipment and fitness
              before travelling to Morocco. Good preparation helps you
              enjoy the trails and mountain terrain.
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
            <img src={images.cycling} alt="Mountain biking terrain in the High Atlas Mountains" />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">Difficulty and Mountain Biking Experience</h2>
            <p className="at-copy">
              The difficulty of this tour depends on the selected trails,
              daily distances, elevation gain and terrain. Mountain routes
              can include rocky surfaces, uneven ground, climbs and
              technical sections.
            </p>
            <p className="at-copy">
              Previous mountain biking experience is recommended. Tell
              us about your riding background, fitness and confidence on
              rough terrain so the team can discuss appropriate trails
              and realistic daily stages.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty, distances,
              elevation figures and route details must be confirmed
              against the actual itinerary before booking. This page
              does not promise a fixed technical grade or daily mileage.
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
              Find answers to common questions about this two-day
              mountain biking adventure in Morocco's High Atlas.
              Contact our team if you need more details before planning.
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
          <img src={images.final} alt="High Atlas mountain landscape in Morocco" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR MTB ADVENTURE STARTS HERE</span>
          <h2>Ready to Ride the Trails of the Atlas Mountains?</h2>
          <p>
            Tell us your preferred dates, group size and mountain biking
            experience. We will discuss a private two-day MTB adventure
            and help you plan your journey from Marrakech.
          </p>
          <a className="at-button" href="/contact">Plan Your MTB Adventure <span>→</span></a>
        </div>
      </section>

      <section className="at-related-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EXPLORE MORE</span>
              <h2 className="at-heading">More Mountain Biking Adventures in Morocco</h2>
            </div>
            <p>
              Discover more ways to ride Morocco, from extended singletrack
              journeys to enduro trails and electric mountain bike adventures.
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
              remote valleys and unforgettable trails with Mountain Bike Morocco.
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
          <span>© {2026} Mountain Bike Morocco. All rights reserved.</span>
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}