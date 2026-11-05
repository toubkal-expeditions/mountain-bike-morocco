import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas Berber Villages Cycling Tour – 3 Days | Mountain Bike Morocco",
  description:
    "Explore traditional Amazigh villages and High Atlas valleys on a guided three-day cycling tour from Marrakech, with two overnight stays and riding stages planned around your group and local conditions.",
  alternates: {
    canonical:
      "/cycling-trips/trip/atlas-berber-villages-cycling-tour-3-day",
  },
};

const images = {
  hero: "/images/berber-villages-cycling-expeditions.jpg",
  overview: "/images/morocco-berbre-villages.jpg",
  atlas: "/images/atlas-mountains-cycling-expedition.jpg",
  valley: "/images/atlas-valley-cycling-morocco.jpg",
  village: "/images/atlas-berber-valley-bike.JPG",
  cycling: "/images/group-cycling-atlas-mountains.jpg",
  mountain: "/images/morocco-berber-valley.jpg",
  final: "/images/lunch-spot-cycling-morocco.jpg",
};

const facts = [
  ["Tour format", "Guided three-day village-to-village cycling journey"],
  ["Destination", "Amazigh villages and valleys of the High Atlas"],
  ["Starting point", "Marrakech – agreed meeting point"],
  ["Main areas", "Atlas foothills, rural valleys and traditional villages"],
  ["Cycling style", "Mountain and rural-road cycling"],
  ["Difficulty", "Adapted to the selected route and group ability"],
  ["Experience", "Discussed before your trip"],
  ["Duration", "3 days / 2 nights"],
  ["Travel dates", "On request"],
];

const highlights = [
  { number: "01", title: "Ride Between Traditional Atlas Villages", text: "Follow a guided cycling journey through selected High Atlas valleys, connecting rural settlements, cultivated terraces and mountain scenery. The final route is chosen around your group and local conditions." },
  { number: "02", title: "Discover Amazigh Mountain Culture", text: "Experience the character of Amazigh communities, traditional stone and earthen architecture, village life and the hospitality of the Atlas along the journey." },
  { number: "03", title: "Three Days of Changing Landscapes", text: "Enjoy a varied multi-day experience, from valley roads and rural tracks to mountain viewpoints and quiet village lanes, with daily stages confirmed in your proposal." },
  { number: "04", title: "A Journey Planned Around Your Group", text: "Discuss your riding experience, preferred pace, bike choice, accommodation style and cultural interests before the route and support arrangements are confirmed." },
];

const beyondTrail = [
  { title: "Amazigh village hospitality", text: "Meet the landscapes and communities of the High Atlas, with opportunities to appreciate local traditions and everyday mountain life along the agreed route." },
  { title: "Terraced fields and mountain homes", text: "Ride through rural settings shaped by terraced agriculture, stone-built houses and dramatic mountain backdrops." },
  { title: "Moroccan mountain cuisine", text: "Enjoy regional dishes and local flavours during planned meal stops, with the exact meals and venues confirmed in your itinerary." },
  { title: "A slower rhythm of travel", text: "Three days on the bike create time to enjoy the changing scenery, pause in villages and experience the Atlas beyond a single-day excursion." },
];

const itinerary = [
  {
    day: "01", title: "Marrakech to the High Atlas – First Village Cycling Stage", location: "Marrakech · High Atlas foothills",
    distance: "Confirmed according to the selected route", riding: "Guided mountain and rural-road cycling", image: images.atlas,
    text: "Meet in Marrakech at the agreed time and travel towards the selected High Atlas riding area if transfers are included. After meeting your guide, checking the bikes and reviewing the plan, begin the first cycling stage through mountain foothills and rural landscapes. The route may pass cultivated terraces, traditional settlements and quiet connecting roads or tracks. Pause for refreshments and lunch according to the confirmed programme, then continue to the agreed overnight village or accommodation. The evening arrangements and meal plan will be detailed in your final itinerary.",
    details: ["Meeting point and transfer arrangements confirmed before departure", "Bike setup, route briefing and safety check", "Guided first stage through selected Atlas villages and valleys", "Lunch and refreshment stops as confirmed", "Overnight accommodation and dinner as specified in your proposal"]
  },
  {
    day: "02", title: "Amazigh Villages and Valley Roads – Full Day in the Atlas", location: "High Atlas · Rural villages and valleys",
    distance: "Confirmed according to the selected route", riding: "Guided full-day cycling stage", image: images.village,
    text: "After breakfast, set out for the second and principal riding stage of the journey. Follow a route selected to connect mountain villages, valley landscapes and rural tracks, with time to appreciate the architecture, terraced fields and daily life of the region. The exact route, climbing and riding surfaces depend on the selected valley, group ability and local conditions. Planned breaks, lunch and any cultural visits are arranged according to the confirmed programme before continuing to the second overnight stop.",
    details: ["Breakfast and daily route briefing", "Ride through selected Amazigh villages and mountain scenery", "Planned rest stops and lunch as confirmed", "Opportunities for village and landscape photography", "Overnight accommodation and evening meal as specified"]
  },
  {
    day: "03", title: "Final Atlas Ride and Return to Marrakech", location: "High Atlas · Return to Marrakech",
    distance: "Confirmed according to the selected route", riding: "Guided final cycling stage", image: images.cycling,
    text: "Enjoy breakfast before setting off on the final cycling stage. Depending on the agreed route, the ride may follow a valley road, rural tracks or a scenic connection through further mountain settlements. Your guide will manage the pace and stops around the group and the conditions. After completing the planned ride, meet the arranged transport if included and return towards Marrakech, with the finish point and approximate timing confirmed before departure.",
    details: ["Breakfast and final-stage briefing", "Guided ride through the selected final valley or village section", "Lunch or refreshment arrangements as confirmed", "Finish the cycling programme and pack bikes", "Return transfer to Marrakech where included"]
  }
];

const inclusions = [
  "Pre-trip coordination and planning of the three-day cycling programme",
  "Local cycling guide where specified in your proposal",
  "Two nights of accommodation where listed in your package",
  "Mountain-bike rental if included in your confirmed package",
  "Helmet and riding equipment only where specified",
  "Meals explicitly listed in your final itinerary",
  "Transfers between Marrakech and the riding area where included",
  "Luggage transport or support vehicle where confirmed",
  "Route support, water and refreshment arrangements as confirmed",
];

const exclusions = [
  "International flights and airport services unless stated",
  "Travel insurance and personal emergency cover",
  "Bike rental unless specified in your proposal",
  "Personal cycling equipment and protective clothing",
  "Meals and drinks not listed in the confirmed itinerary",
  "Personal expenses, tips and optional activities",
  "Additional nights, transfers or route changes not included",
  "Personal bike repairs or replacement parts unless agreed",
  "Services not specifically listed in your confirmed booking",
];

const preparation = [
  { title: "Cycling Experience", text: "Share your cycling background, fitness and confidence on uneven surfaces. A multi-day ride requires the ability to manage consecutive stages, variable terrain and changing mountain conditions." },
  { title: "Bike and Equipment", text: "Confirm whether you will bring your own suitable bike or request a rental. Check brakes, tyres, gears and basic spares, and agree how bikes and luggage will be transported." },
  { title: "Hydration and Weather", text: "Mountain temperatures can change with altitude and season. Carry suitable hydration and sun protection, and bring layers for cooler mornings, evenings or changing weather." },
  { title: "Clothing and Essentials", text: "Pack comfortable cycling clothing, gloves, suitable footwear, a small day bag and personal essentials. Confirm what luggage support and equipment are provided before departure." },
];

const faqs = [
  { q: "What is the Atlas Berber Villages Cycling Tour?", a: "It is a guided three-day cycling journey through selected High Atlas valleys and traditional Amazigh villages. The route combines riding with opportunities to appreciate mountain landscapes and rural culture." },
  { q: "How long is the tour?", a: "The programme is planned as three days and two nights. Daily riding distances, elevation and exact stages are confirmed in your personalised proposal." },
  { q: "Where does the tour start?", a: "Marrakech can be arranged as the meeting and departure point. Your final booking documents will confirm the meeting point, transfer arrangements and return details." },
  { q: "What kind of terrain should I expect?", a: "Depending on the selected route, riding may include paved mountain roads, quiet village lanes, compacted tracks and uneven or loose surfaces. The exact mix is confirmed around your experience and current conditions." },
  { q: "Is the tour suitable for beginner cyclists?", a: "It depends on the chosen route and your fitness. Some previous cycling experience is recommended for a multi-day trip. Share your ability honestly so the stages can be discussed at a suitable level." },
  { q: "Will we visit traditional Berber villages?", a: "The journey is designed around selected Amazigh villages and rural communities in the High Atlas. The specific villages and any planned stops depend on the final route and local access." },
  { q: "Are accommodation and meals included?", a: "Two nights and meals are included only to the extent that they are specifically listed in your confirmed proposal. The accommodation style and meal plan should be agreed before booking." },
  { q: "Is a bicycle provided?", a: "Bike rental is included only when stated in your package. You can also discuss bringing your own suitable bike and confirm transport arrangements in advance." },
  { q: "How much distance will we cycle each day?", a: "There are no fixed distance or elevation figures on this page. The actual stages depend on the selected route, terrain, group ability and local conditions, and will be confirmed before departure." },
  { q: "Is luggage transported between overnight stops?", a: "Luggage transfer or support-vehicle services are included only when specified in your proposal. Confirm the luggage allowance and what you should carry during each ride." },
  { q: "What is the best season for this cycling tour?", a: "Spring and autumn are often comfortable periods for cycling in the Atlas, although conditions vary by altitude and weather. Check the forecast for your dates and follow local guidance." },
  { q: "Can the three-day itinerary be customised?", a: "Yes. You can discuss travel dates, group size, riding level, preferred terrain, accommodation and cultural interests. The final programme depends on availability, route access and local conditions." },
];

const relatedTours = [
  { category: "HIGH ATLAS MOUNTAIN CYCLING", title: "Marrakech to Atlas Cycling Escape", text: "A two-day ride from Marrakech into the High Atlas, with a route and overnight arrangements agreed in advance.", image: "/images/atlas-mountains-cycling-tour.jpg", href: "/cycling-trips/trip/marrakech-to-atlas-cycling-escape-2-days" },
  { category: "ATLAS MOUNTAIN BIKE TOUR", title: "Atlas Mountain Bike Day Trip", text: "Discover selected mountain trails and rural landscapes on a guided one-day ride.", image: "/images/atlas-mountains-singletrack.jpg", href: "/cycling-trips/trip/atlas-mountain-bike-day-trip-1-day" },
  { category: "MOROCCO GRAVEL CYCLING", title: "Atlas Foothills Gravel Ride", text: "Explore mountain foothills and open rural landscapes on a guided gravel cycling experience.", image: "/images/gravel-cycling-atlas-mountains.jpg", href: "/cycling-trips/trip/atlas-foothills-gravel-ride-1-day" },
];

export default function AtlasBerberVillagesCyclingTourPage() {
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
            alt="Mountain cycling in the Atlas Berber Villages of Morocco"
          />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">
            MOROCCO · HIGH ATLAS · AMAZIGH VILLAGES · 3-DAY CYCLING TOUR
          </span>
          <h1>Atlas Berber Villages Cycling Tour in Morocco</h1>
          <p className="at-hero-description">
            Discover traditional Amazigh villages and dramatic High Atlas valleys on a guided three-day cycling journey from Marrakech, with time to enjoy the landscapes, local culture and changing mountain terrain.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Plan Your Atlas Berber Villages Tour <span>→</span>
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
              <strong>3 DAYS</strong>
              <span>Three daily stages</span>
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
            <strong>Guided 3-Day Atlas Berber Villages Cycling Tour</strong>
          </div>
          <div className="at-fact">
            <span>Destination</span>
            <strong>High Atlas Mountains, Morocco</strong>
          </div>
          <div className="at-fact">
            <span>Itinerary</span>
            <strong>3 Days / 2 Nights</strong>
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
              alt="Traditional Amazigh village in the High Atlas Mountains"
            />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">YOUR GUIDED 3-DAY ATLAS CYCLING TOUR</span>
            <h2 className="at-heading">
              A Three-Day Cycling Journey Through Atlas Berber Villages
            </h2>
            <p className="at-copy">
              This three-day journey explores selected High Atlas valleys and traditional Amazigh villages by bike. It combines guided cycling stages with time to appreciate rural landscapes, terraced fields and mountain communities.
            </p>
            <p className="at-copy">
              The route and daily pace are planned around your experience, preferred terrain and travel dates. You can discuss the balance between village roads, rural tracks, mountain scenery and cultural stops.
            </p>
            <p className="at-copy">
              Your final itinerary should confirm each riding stage, distances, elevation, bike arrangements, accommodation, meals, luggage support, guiding and transfers included in your package.
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
            <h3>Atlas Berber Villages Cycling Tour</h3>
            <p>
              A guided three-day cycling journey through selected High Atlas valleys and Amazigh villages, planned around your riding preferences and local conditions.
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
                <strong>Atlas Berber Villages</strong>
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
                Highlights of the Atlas Berber Villages Cycling Tour
              </h2>
            </div>
            <p>
              Enjoy the freedom of a guided cycling tour
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
              alt="Rural cycling tracks through High Atlas valleys"
            />
          </div>
          <div>
            <span className="at-eyebrow">ATLAS BERBER VILLAGES CYCLING ROUTES & TERRAIN</span>
            <h2 className="at-heading">
              Discover the Atlas Berber Villages by Bike
            </h2>
            <p className="at-copy">
              The High Atlas is a mountain landscape of open valleys, cultivated terraces, traditional settlements and quiet rural tracks. Riding surfaces can include mountain tracks, mountain roads and loose stones. The route is selected around your mountain bike, experience, weather and local access, linking quiet lanes, mountain tracks, rolling climbs and rural surroundings.
            </p>
            <p className="at-copy">
              Route selection should take account of loose stones, uneven mountain tracks, exposed sections and heat. The chosen route should also match your technical ability, fitness and preferred riding pace.
            </p>
            <ul className="at-terrain-points">
              <li>
                <span>01</span>
                Selected High Atlas riding areas and Amazigh villages
              </li>
              <li>
                <span>02</span>
                Compacted tracks and mountain tracks
              </li>
              <li>
                <span>03</span>
                Open valley views and traditional rural settlements
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
            <h2 className="at-heading">Atlas Berber Villages Cycling Tour Information</h2>
            <p className="at-copy">
              The details of your three-day tour are agreed before departure. Confirm the
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
            alt="Traditional rural settlement near the Atlas Berber Villages"
          />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE TRAIL</span>
          <h2 className="at-heading">
            Experience the Landscapes and Culture of the Atlas
          </h2>
          <p className="at-copy">
            This three-day cycling journey is also an opportunity to discover the character of the High Atlas beyond the riding route, with time to appreciate traditional villages, mountain landscapes and rural communities.
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
                Discover the Scenery of Your Atlas Berber Villages Cycling Tour
              </h2>
            </div>
            <p>
              From mountain trails around High Atlas and open horizons to rural settlements,
              the High Atlas offers a distinctive setting for a guided cycling tour from Marrakech.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item">
              <img src={images.cycling} alt="Cycling across mountain trails around High Atlas in Atlas Berber Villages" />
            </div>
            <div className="at-gallery-item">
              <img src={images.valley} alt="Mountain valley in the Atlas Berber Villages region" />
            </div>
            <div className="at-gallery-item">
              <img src={images.village} alt="Rural settlement near the Atlas Berber Villages" />
            </div>
            <div className="at-gallery-item">
              <img src={images.mountain} alt="Mountain landscape in Morocco" />
            </div>
            <div className="at-gallery-item">
              <img src={images.atlas} alt="Atlas Berber Villages cycling landscape" />
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
                Example of a 3-Day Atlas Berber Villages Cycling Itinerary
              </h2>
            </div>
            <p>
              Use this sample structure as a starting point for discussing your three-day journey. The exact riding stages and village stops are confirmed during the planning process.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This is an illustrative three-day / two-night programme, not a fixed route sheet or a confirmed package. Daily distances, elevation, exact villages, route conditions, bike rental, accommodation, meals, luggage support and transfers must be confirmed in your final proposal.
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
                What Is Included in Your 3-Day Cycling Tour?
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
                Preparing for Your 3-Day Cycling Tour
              </h2>
            </div>
            <p>
              Good preparation helps you get the most from your three-day Atlas Berber Villages cycling tour. Discuss your bike, equipment, climbing expectations and hydration requirements before the route is finalised.
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
              alt="Cycling route through the Atlas Berber Villages of Morocco"
            />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">
              Cycling Difficulty, Fitness and Riding Experience
            </h2>
            <p className="at-copy">
              Atlas Berber Villages mountain terrain can be varied, sometimes rough and exposed. Good bike control
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
              <strong>Important:</strong> mountain bike range and daily riding demands
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
              Find answers to common questions about the 3-day Atlas Berber Villages cycling tour
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
            alt="Rocky Atlas Berber Villages landscape in Atlas Berber Villages, Morocco"
          />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">
            YOUR GUIDED ATLAS BERBER VILLAGES CYCLING TOUR STARTS HERE
          </span>
          <h2>Plan Your Atlas Berber Villages Cycling Tour</h2>
          <p>
            Tell us your preferred date, riding experience and the kind of mountain
            routes you want to discover. We can discuss the route, equipment,
            bike and support arrangements, meeting point and services for your three-day journey.
          </p>
          <a className="at-button" href="/contact">
            Plan Your Atlas Berber Villages Tour <span>→</span>
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
              Discover more ways to explore Morocco, from Atlas Berber Villages
              cycling experiences around Marrakech to multi-day Atlas
              Mountain cycling journeys.
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
              Discover Morocco by bike. Explore the Atlas Berber Villages,
              mountain valleys and unforgettable cycling routes with
              Cycling Morocco.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="at-footer-links">
              <a href="/cycling-trips">All Cycling Tours</a>
              <a href="/cycling-trips/mtb">Cycling Tours</a>
              <a href="/cycling-trips/e-mtb">E-MTB tours</a>
              <a href="/cycling-trips/mtb">Mountain Cycling</a>
            </div>
          </div>
          <div>
            <h3>Destinations</h3>
            <div className="at-footer-links">
              <a href="/destinations">All Destinations</a>
              <a href="/destinations/atlas-mountains">Atlas Berber Villages</a>
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
            © {new Date().getFullYear()} Cycling Morocco. All rights reserved.
          </span>
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}