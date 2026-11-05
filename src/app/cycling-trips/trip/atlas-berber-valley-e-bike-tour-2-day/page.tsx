import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas Berber Valley E-Bike Tour – 2 Days | Mountain Bike Morocco",
  description:
    "Ride through the Atlas foothills on a two-day guided e-bike adventure. Discover traditional Berber villages, cultivated terraces and valley tracks on a private route planned around your riding experience.",
  alternates: {
    canonical: "/cycling-trips/trip/atlas-berber-valley-e-bike-tour-2-day",
  },
};

const images = {
  hero: "/images/atlas-berber-valley-bike.JPG",
  overview: "/images/atlas-valley-cycling-morocco.jpg",
  atlas: "/images/atlas_mountain_ebike_tour_3days-6.jpg",
  valley: "/images/berber-villages-cycling-expeditions.jpg",
  village: "/images/morocco-berber-valley.jpg",
  cycling: "/images/ouirgane-valley-ebike-tour.jpg",
  mountain: "/images/atlas-mountains-ebike-tour.jpg",
  final: "/images/e-bike-tour-atlas-mountains.jpg",
};

const facts = [
  ["Tour format", "Private guided e-bike adventure"],
  ["Destination", "Atlas foothills and Berber valleys"],
  ["Starting point", "Marrakech or agreed meeting point"],
  ["Duration", "2 days / 1 night"],
  ["Cycling style", "Electric mountain biking (e-MTB)"],
  ["Terrain", "Valley tracks, village paths and mountain trails"],
  ["Difficulty", "Adapted to rider experience and selected route"],
  ["Group size", "Private groups; confirm on enquiry"],
  ["Travel dates", "Available by arrangement"],
];

const highlights = [
  { number: "01", title: "Ride Through Berber Valley Landscapes", text: "Spend two days exploring the Atlas foothills, following selected tracks through cultivated valleys, mountain scenery and traditional village surroundings. Routes are chosen around your group's ability and local trail conditions." },
  { number: "02", title: "Discover Traditional Villages", text: "Enjoy the rural character of the Atlas, with opportunities to pass through or near traditional Berber settlements and appreciate the architecture, terraces and everyday landscapes respectfully." },
  { number: "03", title: "Two Days of Guided E-Bike Riding", text: "Enjoy a short mountain escape with time for riding, scenic stops and a relaxed overnight stay. The daily distance, climbing and technical features are agreed after your experience and preferred pace are discussed." },
  { number: "04", title: "Private Routes and E-MTB Support", text: "Your guide matches the route to your technical confidence, fitness and battery range. Bike rental, charging, transfers, accommodation and support are confirmed in your individual proposal." },
];

const beyondTrail = [
  { title: "Atlas Valley Scenery", text: "Ride through a changing landscape of mountain foothills, cultivated terraces, open countryside and valley tracks." },
  { title: "Traditional Berber Villages", text: "Depending on the selected route, pass through or near rural settlements and discover the character of traditional Atlas communities." },
  { title: "A Slower Pace Beyond the Bike", text: "Two days leave room for viewpoints, photographs, refreshments and time to appreciate the landscape rather than treating every ride as a race." },
  { title: "A Private Two-Day Escape", text: "Enjoy a guided experience planned around your dates, riding ability and preferred balance between cycling and exploring the valley." },
];

const itinerary = [
  {
    day: "01", title: "Marrakech to the Atlas Berber Valleys", location: "Marrakech to the selected Atlas valley", distance: "Confirmed with the final route plan", riding: "Guided e-MTB ride on valley and village tracks",
    image: images.overview,
    text: "Meet in Marrakech or at an agreed meeting point before travelling towards the Atlas foothills. After checking the bikes, battery levels and riding set-up, begin a guided ride through the selected valley landscape. Follow suitable rural tracks and enjoy views of cultivated terraces and traditional villages, with breaks planned around the group's pace.",
    details: ["Meet the guide and complete an e-MTB safety and equipment check", "Review assistance modes, battery use and the day's route", "Ride selected valley tracks and village surroundings", "Enjoy the planned overnight stay, subject to the confirmed package"],
  },
  {
    day: "02", title: "Explore More Valley Trails and Return to Marrakech", location: "Atlas valley area to Marrakech", distance: "Confirmed with the final route plan", riding: "A second guided ride adapted to the group",
    image: images.valley,
    text: "After breakfast, set out for another ride through the Atlas foothills. The route may explore a different section of the valley or extend the previous day's experience, depending on trail conditions and your group's preferences. After the ride, return to Marrakech or your agreed drop-off point according to the transfer arrangements.",
    details: ["Breakfast and a short route briefing", "Check battery charge, equipment and weather conditions", "Ride a selected route with time for village and landscape stops", "Return to Marrakech or the agreed drop-off point"],
  },
];

const inclusions = [
  "Private local cycling guide for the agreed riding days",
  "e-MTB rental and helmet only when selected and confirmed",
  "Transfers between Marrakech and the Atlas riding area where specified",
  "One night's accommodation and meals only as listed in the confirmed proposal",
  "Battery charging arrangements and technical support as agreed",
  "Luggage support or additional services expressly stated in the booking",
];

const exclusions = [
  "International flights and travel to Morocco",
  "Travel insurance, medical cover and personal accident insurance",
  "e-MTB rental, accessories or equipment unless included in the package",
  "Meals, drinks and personal expenses not listed in the itinerary",
  "Tips and optional activities",
  "Personal riding clothing, shoes and any unlisted equipment",
  "Services not expressly included in the final booking confirmation",
];

const preparation = [
  { title: "Share Your Riding Experience", text: "Describe your recent mountain-bike experience, confidence on loose and rocky surfaces and preferred technical challenge. Pedal-assist supports climbing but does not replace bike-handling skills." },
  { title: "Plan Your E-MTB Battery Use", text: "Range depends on elevation, terrain, rider weight, assistance mode, temperature and battery condition. Confirm the bike, battery capacity, charging options and daily route before departure." },
  { title: "Prepare for Mountain Conditions", text: "Bring suitable riding clothes, gloves, shoes, eye protection and sun protection. Mornings and evenings can be cooler in the mountains, so pack a light layer and be ready for changing conditions." },
  { title: "Confirm the Overnight Arrangements", text: "Ask which accommodation, meals and luggage arrangements are included. The overnight stop and transfer details should be clearly listed in your final proposal." },
];

const faqs = [
  { q: "How long is the Atlas Berber Valley E-Bike Tour?", a: "The tour is planned as a two-day experience with one overnight stay. The final programme, riding times and transfer arrangements are confirmed with your booking." },
  { q: "Where does the tour start?", a: "The trip can be arranged with a meeting in Marrakech or at another agreed location. The exact pickup point and transfer time will be confirmed before departure." },
  { q: "Do I need previous e-MTB experience?", a: "Previous e-MTB experience is useful but not essential for every route. You should be comfortable riding a mountain bike on the selected terrain. Share your experience so a suitable route can be recommended." },
  { q: "Is an electric mountain bike included?", a: "Bike rental may be arranged but is not automatically included. Confirm the bike model, frame size, battery, charger, pedals, helmet and rental cost in your written proposal." },
  { q: "Are the routes suitable for beginners?", a: "Some easier valley tracks may suit confident recreational riders with basic mountain-bike handling skills. Loose stones, steep sections and technical trails require suitable skills, so discuss difficulty before booking." },
  { q: "Will we visit Berber villages?", a: "The route can include tracks through or near traditional villages, depending on the selected valley, local access and trail conditions. Stops should be respectful of residents and private property." },
  { q: "What is included in the price?", a: "Inclusions vary by service level. Your proposal should list guiding, bike rental, transfers, accommodation, meals and technical support individually." },
  { q: "Can the two-day itinerary be customised?", a: "Yes. The route, riding pace, daily distance and overnight arrangements can be discussed around your dates, riding experience and preferred level of challenge." },
];

const relatedTours = [
  {
    category: "ATLAS E-BIKE ESCAPE",
    title: "Three-Day Atlas E-Bike Escape",
    text: "Extend your time in the mountains on a guided three-day electric-bike journey through the Atlas.",
    image: "/images/atlas_mountain_ebike_tour_3days-2.jpg",
    href: "/cycling-trips/trip/three-day-atlas-e-bike-escape-3-day",
  },
  {
    category: "VILLAGES & VALLEYS",
    title: "Imlil and Ouirgane E-MTB Adventures",
    text: "Explore mountain villages, cultivated valleys and rural tracks on a flexible guided e-MTB trip.",
    image: "/images/ouirgane-valley-ebike-tour.jpg",
    href: "/cycling-trips/trip/imlil-and-ouirgane-emtb-adventures-flexible-duration",
  },
  {
    category: "PRIVATE E-MTB HOLIDAY",
    title: "Private e-MTB Holidays – Custom Itinerary",
    text: "Build a private electric mountain-bike holiday around your dates, riding experience and preferred destinations.",
    image: "/images/group-ebike-tour-morocco.jpg",
    href: "/cycling-trips/trip/private-emtb-holidays-private-itinerary",
  },
];

export default function AtlasBerberValleyEbikeTourPage() {
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
            alt="E-bike adventure in the Atlas Berber valleys"
          />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">
            MOROCCO · ATLAS FOOTHILLS · GUIDED E-BIKE ADVENTURES
          </span>
          <h1>Atlas Berber Valley E-Bike Tour</h1>
          <p className="at-hero-description">
            Discover the Atlas foothills by electric mountain bike. Ride valley tracks, explore traditional Berber village surroundings and enjoy two days of guided cycling through the mountain landscapes of Morocco.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Enquire About Your e-MTB Adventure <span>→</span>
            </a>
            <a className="at-hero-back" href="/cycling-trips">
              Explore All Cycling Tours
            </a>
          </div>
          <div className="at-hero-bottom">
            <div>
              <strong>GUIDED</strong>
              <span>Atlas Berber Valleys</span>
            </div>
            <div>
              <strong>CYCLING</strong>
              <span>e-MTB trails & tracks</span>
            </div>
            <div>
              <strong>CUSTOM TRIP</strong>
              <span>Two-day guided tour</span>
            </div>
            <div>
              <strong>MARRAKECH</strong>
              <span>Atlas Berber Valleys</span>
            </div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact">
            <span>Tour format</span>
            <strong>Guided Atlas Berber Valley E-Bike Tour</strong>
          </div>
          <div className="at-fact">
            <span>Destination</span>
            <strong>Atlas foothills & Berber valleys</strong>
          </div>
          <div className="at-fact">
            <span>Itinerary</span>
            <strong>2 Days / 1 Night</strong>
          </div>
          <div className="at-fact">
            <span>Travel dates</span>
            <strong>On Request</strong>
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
              alt="E-bike riding in an Atlas valley in Morocco"
            />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">GUIDED ELECTRIC MOUNTAIN BIKING IN THE ATLAS</span>
            <h2 className="at-heading">
              Two Days of E-Bike Riding Through Atlas Valleys
            </h2>
            <p className="at-copy">
              Discover the Atlas foothills on a private two-day e-bike journey through selected valley tracks and traditional village surroundings. A local guide helps select routes that suit your group’s skills, fitness and appetite for adventure, with time to enjoy mountain scenery and rural landscapes.
            </p>
            <p className="at-copy">
              The two-day format combines guided riding with an overnight stay in the Atlas region. The route can include cultivated terraces, rural tracks and village surroundings, with exact distances, climbing and technical features confirmed in your route plan.
            </p>
            <p className="at-copy">
              Before departure, confirm your e-MTB model and size, battery and charging plan, route difficulty, daily riding time, transfer arrangements, overnight accommodation and the services included in your booking.
            </p>
            <a className="at-text-link" href="#itinerary">
              View the sample tour plan →
            </a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">TWO-DAY ROUTES & RIDING PLAN</span>
            <h2 className="at-heading">
              A Two-Day E-Bike Escape in the Atlas
            </h2>
            <p className="at-copy">
              Your e-bike adventure follows selected tracks through the Atlas foothills and Berber valley landscapes. We shape the riding around your group, available time, trail conditions and preferred level of challenge.
            </p>
            <p className="at-copy">
              Share your dates, group size, e-MTB experience and preferred level of challenge. We can then discuss suitable valley routes, bike rental, battery arrangements, transfers and overnight options.
            </p>
            <p className="at-copy">
              Your proposal should confirm both riding days, route areas, estimated distance and climbing, bike and battery arrangements, guide service, transfers, accommodation and meals.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">YOUR GUIDED TRIP</span>
            <h3>Atlas Berber Valley E-Bike Tour</h3>
            <p>
              Two days of guided electric mountain biking through Atlas valley tracks and traditional village landscapes, planned around your group.
            </p>
            <ul className="at-booking-list">
              <li>
                <span>Tour format</span>
                <strong>Guided</strong>
              </li>
              <li>
                <span>e-MTB</span>
                <strong>Electric mountain bike</strong>
              </li>
              <li>
                <span>Destination</span>
                <strong>Atlas Berber Valleys</strong>
              </li>
              <li>
                <span>Itinerary</span>
                <strong>2 days / 1 night</strong>
              </li>
              <li>
                <span>Routes</span>
                <strong>On Request</strong>
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
                Highlights of the Atlas Berber Valley E-Bike Tour
              </h2>
            </div>
            <p>
              Ride Atlas valley landscapes with pedal-assist support, selected village tracks and a daily pace shaped around your group’s experience.
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
              alt="E-bike route through the Atlas foothills"
            />
          </div>
          <div>
            <span className="at-eyebrow">ATLAS BERBER VALLEY ROUTES</span>
            <h2 className="at-heading">
              Valley Tracks, Village Paths and Mountain Scenery
            </h2>
            <p className="at-copy">
              Routes may include rural valley tracks, village paths, cultivated terraces and sections of rocky mountain terrain. Your guide considers gradients, surface, weather, access, technical demands and e-MTB battery range before confirming each stage.
            </p>
            <p className="at-copy">
              The best route depends on your technical ability, fitness, season, bike set-up and battery capacity. Agree the valley route, daily distance, climbing, trail character, charging opportunities, transfers and support in the final plan.
            </p>
            <ul className="at-terrain-points">
              <li>
                <span>01</span>
                Atlas valley tracks and rural paths
              </li>
              <li>
                <span>02</span>
                Berber village surroundings and cultivated terraces
              </li>
              <li>
                <span>03</span>
                High Atlas foothills and mountain panoramas
              </li>
              <li>
                <span>04</span>
                Routes matched to ability and battery range
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">ATLAS BERBER VALLEY TOUR DETAILS</span>
            <h2 className="at-heading">Atlas Berber Valley E-Bike Tour Information</h2>
            <p className="at-copy">
              The details are agreed before departure. Confirm the meeting point, rider experience, e-MTB size and model, battery capacity, helmet, selected valley route, daily riding plan, overnight accommodation, refreshment plan and transfers.
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
            alt="Traditional Berber village in an Atlas valley"
          />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE TRAIL · BERBER VILLAGES & VALLEYS</span>
          <h2 className="at-heading">
            Discover the Atlas Berber Valleys by E-Bike
          </h2>
          <p className="at-copy">
            An e-bike journey takes you beyond Marrakech into the Atlas foothills, where mountain slopes, cultivated terraces and traditional villages shape the landscape. Pedal-assist helps you enjoy the climbs while keeping the focus on the scenery and the ride.
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
                Explore the Atlas Berber Valleys by Electric Mountain Bike
              </h2>
            </div>
            <p>
              Discover the Atlas foothills through rural valley tracks, village paths and mountain scenery. Each ride is selected to match the group’s ability, available time and local conditions.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item">
              <img src={images.cycling} alt="E-bike cycling through an Atlas valley" />
            </div>
            <div className="at-gallery-item">
              <img src={images.valley} alt="Berber village tracks in the Atlas foothills" />
            </div>
            <div className="at-gallery-item">
              <img src={images.village} alt="Traditional Berber village in Morocco" />
            </div>
            <div className="at-gallery-item">
              <img src={images.mountain} alt="Atlas mountain landscape" />
            </div>
            <div className="at-gallery-item">
              <img src={images.atlas} alt="Mountain scenery along the Atlas e-bike route" />
            </div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">YOUR TWO-DAY GUIDED PROGRAMME</span>
              <h2 className="at-heading">
                Two-Day Atlas Berber Valley E-Bike Itinerary
              </h2>
            </div>
            <p>
              This sample two-day outline shows how your Atlas e-bike escape can be arranged. The final route is selected around your riding experience, trail conditions and preferred pace.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This is an illustrative programme. Your final proposal will confirm the selected valley routes, distances, elevation, e-MTB equipment, charging arrangements, accommodation, meals and transfers.
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
                What Is Included in Your Atlas Berber Valley E-Bike Tour?
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
                Preparing for Your Atlas Berber Valley E-Bike Tour
              </h2>
            </div>
            <p>
              Good preparation starts with clear expectations. Share your dates, group size and riding experience so the route, equipment, accommodation and support can be planned accurately.
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
              alt="Electric mountain biking through Atlas valley terrain"
            />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">
              e-MTB Difficulty, Fitness and Riding Experience
            </h2>
            <p className="at-copy">
              Difficulty depends on the selected trails. Some routes are suitable for confident recreational mountain bikers, while rocky singletrack and steep descents require stronger technical skills. Electric assistance helps on climbs but does not make technical terrain automatically easy.
            </p>
            <p className="at-copy">
              Share your recent mountain-bike experience, fitness, technical confidence and preferred daily effort. Also tell us about your e-MTB experience so the guide can plan realistic distances, climbing and battery use.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> confirm daily distances, climbing, trail grades, battery range, charging options, support arrangements and realistic riding times in your final itinerary. Conditions and route choices may change with weather and local access.
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
              Find answers about tour duration, e-MTB equipment, battery range, route difficulty and planning your Atlas Berber Valley adventure.
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
            alt="E-bike adventure in the Atlas Berber valleys"
          />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">
            YOUR ATLAS BERBER VALLEY E-BIKE ADVENTURE STARTS HERE
          </span>
          <h2>Plan Your Atlas Berber Valley E-Bike Tour</h2>
          <p>
            Tell us your preferred dates, group size and riding experience. We can discuss suitable Atlas valley routes, e-MTB rental, battery arrangements, transfers, overnight accommodation and the riding pace that works for your group.
          </p>
          <a className="at-button" href="/contact">
            Enquire About Your e-MTB Adventure <span>→</span>
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
              Explore related electric mountain-bike journeys, from a longer Atlas escape to village and valley routes or a private e-MTB holiday with a custom itinerary.
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
              Discover Morocco by bike. Explore the High Atlas, ride through rural villages and experience unforgettable mountain and countryside cycling journeys.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="at-footer-links">
              <a href="/cycling-trips">All Cycling Tours</a>
              <a href="/cycling-trips/mtb">Cycling Tours</a>
              <a href="/cycling-trips/e-mtb">e-MTB Tours</a>
              <a href="/cycling-trips/gravel">Gravel Cycling</a>
            </div>
          </div>
          <div>
            <h3>Destinations</h3>
            <div className="at-footer-links">
              <a href="/destinations">All Destinations</a>
              <a href="/destinations/atlas-mountains">Atlas Mountains</a>
              <a href="/destinations/agafay-desert">Agafay Desert</a>
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