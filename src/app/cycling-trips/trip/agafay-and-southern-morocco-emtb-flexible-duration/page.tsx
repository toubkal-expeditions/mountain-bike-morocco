import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agafay and Southern Morocco e-MTB – Flexible Duration | Mountain Bike Morocco",
  description:
    "Explore Agafay and southern Morocco by electric mountain bike on a private guided adventure. Choose a day ride or multi-day escape across desert plateaus, rugged valleys, oasis landscapes and remote tracks, with a flexible itinerary.",
  alternates: {
    canonical: "/cycling-trips/trip/agafay-and-southern-morocco-emtb-flexible-duration",
  },
};

const images = {
  hero: "/images/Agafay-desert-morocco.jpg",
  overview: "/images/atlas-mountains-ebike-tour.jpg",
  atlas: "/images/sahara-desert-ebike-expeditions.jpg",
  valley: "/images/south-morocco-cycling-expedition.jpg",
  village: "/images/atlas-desert-mtb-tour-morocco.JPG",
  cycling: "/images/southern-ebike-cycling-expeditions.jpg",
  mountain: "/images/atlas-desert-cycling-tour.jpg",
  final: "/images/south-ebike-tourmorocco.jpg",
};
const facts = [
  ["Tour format", "Private guided e-MTB adventure"],
  ["Destinations", "Agafay Desert and Southern Morocco"],
  ["Starting point", "Marrakech or agreed meeting point"],
  ["Duration", "Flexible – day rides to multi-day tours"],
  ["Cycling style", "Electric mountain biking (e-MTB)"],
  ["Terrain", "Desert tracks, rocky plateaus and remote valley routes"],
  ["Difficulty", "Adapted to rider experience and conditions"],
  ["Group size", "Private groups; confirm on enquiry"],
  ["Travel dates", "Available by arrangement"],
];
const highlights = [
  { number: "01", title: "Ride the Agafay Desert", text: "Explore the stony desert landscapes beyond Marrakech, following rugged tracks, open plateaus and dry riverbeds. Routes are selected around the group's ability, weather and trail conditions." },
  { number: "02", title: "Discover Southern Morocco", text: "Extend the journey into southern landscapes, where rocky mountains, remote valleys and changing desert scenery create a very different multi-day e-MTB experience." },
  { number: "03", title: "Choose Your Own Duration", text: "Plan a single-day Agafay ride, a short escape or a longer southern Morocco expedition. Add riding days, scenic stops and overnight stays to suit your dates and pace." },
  { number: "04", title: "Private Guiding and e-MTB Support", text: "Your guide matches routes to your technical confidence, fitness and battery range. Bike rental, charging, transfers, accommodation and support are confirmed in your individual proposal." },
];
const beyondTrail = [
  { title: "Agafay's rugged desert terrain", text: "Ride across stony plains, low hills and dry riverbeds within reach of Marrakech." },
  { title: "Southern Morocco's open landscapes", text: "Explore remote tracks, mountain backdrops and dramatic transitions between desert and valley terrain." },
  { title: "Rural stops along the way", text: "Pause for refreshments and take time to appreciate local landscapes and communities respectfully." },
  { title: "One region or a longer expedition", text: "Focus on Agafay for a shorter ride or build a multi-day route into southern Morocco." },
];
const itinerary = [
  {
    day: "01", title: "Explore the Agafay Desert Tracks", location: "Marrakech to the Agafay area", distance: "Set according to the selected route", riding: "Guided e-MTB desert ride and rocky tracks",
    image: images.overview,
    text: "Meet in Marrakech or at an agreed meeting point before travelling towards Agafay. After checking the bikes, battery levels and riding set-up, set out across the stony desert landscape. The guide adjusts the route to the group's confidence, with time for viewpoints and breaks along the way.",
    details: ["Meet the guide and complete an e-MTB safety and equipment check", "Review assistance modes, battery use and desert riding conditions", "Ride selected Agafay tracks, plateaus and dry riverbeds", "Return to Marrakech or stay locally if included in the plan"],
  },
  {
    day: "02", title: "Travel South for a New Desert Landscape", location: "Agreed southern Morocco region, subject to logistics", distance: "Flexible according to terrain and battery range", riding: "Remote tracks, rocky valleys and scenic climbs",
    image: images.valley,
    text: "For a multi-day option, continue south to explore a different character of Moroccan terrain. The route may combine rugged mountain scenery, open valleys and remote tracks. Your guide selects a ride that balances scenery, climbing and technical challenge, with transfers planned around the chosen region.",
    details: ["Breakfast and route briefing", "Transfer to the selected southern riding area where required", "Ride suitable tracks with stops for photographs and refreshments", "Overnight locally or continue according to the agreed itinerary"],
  },
  {
    day: "03", title: "Discover More Southern Trails", location: "Selected southern Morocco riding area", distance: "Confirmed after the route is selected", riding: "A tailored e-MTB ride matched to your group",
    image: images.atlas,
    text: "Add another day to explore a different trail area or revisit a favourite landscape. The route can be more relaxed or more demanding depending on your experience and the group's preferences. Daily distances and climbing are agreed only after the exact trails and logistics are confirmed.",
    details: ["Select the preferred route and riding character", "Check battery charge and support arrangements", "Enjoy a guided ride at a comfortable group pace", "Finish with a local overnight stay or planned transfer"],
  },
  {
    day: "04", title: "Optional Extra Ride and Return", location: "Selected southern region to Marrakech", distance: "Optional ride or transfer day", riding: "Extra trail time or a relaxed departure",
    image: images.final,
    text: "Longer holidays can include another ride, a scenic stop or a relaxed morning before returning to Marrakech. This fourth stage is optional and illustrates how the flexible programme can be extended to suit your schedule and chosen destination.",
    details: ["Optional short e-MTB ride if time and conditions allow", "Return equipment and complete bike checks", "Transfer towards Marrakech if included", "Finish at your hotel or agreed drop-off point"],
  },
];
const inclusions = [
  "Private local cycling guide for the agreed riding days",
  "e-MTB rental and helmet only when selected and confirmed",
  "Transfers between Marrakech, Agafay and the selected southern region where specified",
  "Accommodation and meals only as listed in the confirmed proposal",
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
  { title: "Choose Your Riding Region", text: "Tell us whether you prefer a day ride in Agafay, a southern Morocco expedition or a combination with transfers between regions. We can shape the route around your dates and available time." },
  { title: "Share Your Riding Experience", text: "Describe your recent mountain-bike experience, confidence on loose and rocky surfaces and preferred technical challenge. Pedal-assist supports climbing but does not replace bike-handling skills." },
  { title: "Plan e-MTB Battery Use", text: "Range depends on elevation, terrain, rider weight, assistance mode, temperature and battery condition. Confirm the bike, battery capacity, charging options and daily route before departure." },
  { title: "Pack for Desert Conditions", text: "Bring suitable riding clothes, gloves, shoes, eye protection, sun protection and a light layer for cooler mornings or evenings. Heat, wind and changing conditions should be considered when planning each ride." },
];
const faqs = [
  { q: "Can Agafay and southern Morocco be combined in one e-MTB holiday?", a: "Yes. A multi-day itinerary can combine an Agafay ride with a selected southern Morocco region, subject to transfer time, route conditions and the length of your trip. You can also focus on Agafay for a shorter adventure." },
  { q: "How long are the Agafay and southern Morocco e-MTB adventures?", a: "Duration is flexible. Enquire about a day ride, a two- or three-day escape or a longer private holiday. The final programme depends on your dates, riding level and preferred pace." },
  { q: "Do I need previous e-MTB experience?", a: "Previous e-MTB experience is useful but not essential for every route. You should be comfortable riding a mountain bike on the selected terrain. Share your experience so a suitable route can be recommended." },
  { q: "Is an electric mountain bike included?", a: "Bike rental may be arranged but is not automatically included. Confirm the bike model, frame size, battery, charger, pedals, helmet and rental cost in your written proposal." },
  { q: "Are the routes suitable for beginners?", a: "Some easier tracks may suit confident recreational riders with basic mountain-bike handling skills. Loose stones, rocky tracks and remote routes require suitable skills, so discuss difficulty honestly before booking." },
  { q: "Where does the tour start?", a: "Agafay rides can usually be arranged from Marrakech. Multi-day southern Morocco options may begin with a Marrakech pickup and a planned transfer to the selected riding region." },
  { q: "Can the itinerary be customised?", a: "Yes. The route, duration, riding pace, overnight stops and balance between Agafay and southern Morocco can be discussed around your group and available time." },
  { q: "What is included in the price?", a: "Inclusions vary by duration and service level. Your proposal should list guiding, bike rental, transfers, accommodation, meals and support individually." },
];
const relatedTours = [
  {
    category: "ATLAS E-BIKE ESCAPE",
    title: "Three-Day Atlas E-Bike Escape",
    text: "A three-day electric-bike journey in the Atlas, with guided mountain riding and time to explore the valleys.",
    image: "/images/atlas_mountain_ebike_tour_3days-2.jpg",
    href: "/cycling-trips/trip/three-day-atlas-e-bike-escape-3-day",
  },
  {
    category: "FLEXIBLE ATLAS E-MTB",
    title: "Atlas Mountains e-MTB Tours",
    text: "Choose a day ride or a longer guided e-MTB escape with routes adapted to your group.",
    image: "/images/atlas-mountains-ebike-tour.jpg",
    href: "/cycling-trips/trip/atlas-mountains-emtb-tours-flexible-duration",
  },
  {
    category: "PRIVATE E-MTB HOLIDAY",
    title: "Private e-MTB Holidays – Custom Itinerary",
    text: "Build a private electric mountain-bike holiday around your dates, riding experience and preferred destinations.",
    image: "/images/south-ebike-tourmorocco.jpg",
    href: "/cycling-trips/trip/private-emtb-holidays-private-itinerary",
  },
];
export default function AgafayAndSouthernMoroccoEmtbPage() {
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
            alt="Electric mountain biking in the Agafay Desert and southern Morocco"
          />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">
            MOROCCO · AGAFAY & THE SOUTH · GUIDED E-MTB ADVENTURES
          </span>
          <h1>Agafay &amp; Southern Morocco e-MTB Adventures</h1>
          <p className="at-hero-description">
            Discover Morocco’s desert landscapes by electric mountain bike. Ride Agafay’s rocky tracks and explore the remote valleys of the south on a private adventure with flexible duration, routes and riding pace.
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
              <span>Agafay and Southern Morocco</span>
            </div>
            <div>
              <strong>CYCLING</strong>
              <span>e-MTB trails & tracks</span>
            </div>
            <div>
              <strong>CUSTOM TRIP</strong>
              <span>Flexible tour duration</span>
            </div>
            <div>
              <strong>MARRAKECH</strong>
              <span>Agafay and Southern Morocco</span>
            </div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact">
            <span>Tour format</span>
            <strong>Guided Agafay & Southern Morocco e-MTB Tour</strong>
          </div>
          <div className="at-fact">
            <span>Destination</span>
            <strong>Agafay Desert & Southern Morocco</strong>
          </div>
          <div className="at-fact">
            <span>Itinerary</span>
            <strong>Flexible Duration</strong>
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
              alt="e-MTB adventure in the Agafay Desert of Morocco"
            />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">GUIDED ELECTRIC MOUNTAIN BIKING IN THE ATLAS</span>
            <h2 className="at-heading">
              Desert Tracks and Southern Landscapes, One e-MTB Adventure
            </h2>
            <p className="at-copy">
              Discover the rocky desert terrain of Agafay near Marrakech, then explore southern Morocco’s remote landscapes, rugged valleys and changing desert scenery. A local guide helps select trails and tracks that suit your group’s skills, fitness and appetite for adventure.
            </p>
            <p className="at-copy">
              Choose a focused ride in Agafay or combine it with a southern Morocco expedition over several days. Multi-day options can include different trail areas, overnight stays and transfers between the selected regions. Exact distances, climbing and technical features are confirmed in your route plan.
            </p>
            <p className="at-copy">
              Before departure, confirm your e-MTB model and size, battery and charging plan, route difficulty, daily riding time, transfers between Agafay and Southern Morocco, accommodation and the services included in your booking.
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
            <span className="at-eyebrow">FLEXIBLE DURATION & ROUTES</span>
            <h2 className="at-heading">
              Choose Your Pace Across Agafay and the South
            </h2>
            <p className="at-copy">
              Your e-MTB adventure can focus on Agafay’s desert terrain or southern Morocco’s remote landscapes or a combination of both. We shape the riding around your group, available time, trail conditions and the logistics between the selected regions.
            </p>
            <p className="at-copy">
              Share your dates, group size, e-MTB experience and preferred level of challenge. We can then discuss suitable trails, bike rental, battery arrangements, transfers and overnight options.
            </p>
            <p className="at-copy">
              Your proposal should confirm each riding day, route area, estimated distance and climbing, bike and battery arrangements, guide service, transfers, accommodation and meals where applicable.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">YOUR GUIDED TRIP</span>
            <h3>Agafay &amp; Southern Morocco e-MTB Adventures</h3>
            <p>
              Guided electric mountain biking with flexible duration, route options and support arranged around your group.
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
                <strong>Agafay &amp; Southern Morocco</strong>
              </li>
              <li>
                <span>Itinerary</span>
                <strong>Day ride or multi-day tour</strong>
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
                Highlights of Agafay & Southern Morocco e-MTB Adventures
              </h2>
            </div>
            <p>
              Ride contrasting Moroccan landscapes with pedal-assist support, flexible routes and a daily pace shaped around your group’s experience.
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
              alt="Mountain cycling routes and gravel tracks in Morocco"
            />
          </div>
          <div>
            <span className="at-eyebrow">IMLIL &amp; OUIRGANE E-MTB ROUTES</span>
            <h2 className="at-heading">
              Rocky Desert Tracks and Remote Southern Routes
            </h2>
            <p className="at-copy">
              In Agafay, routes can include stony tracks, rolling plateaus and dry riverbeds. In southern Morocco, rides may follow remote valley tracks, rocky foothills and desert routes. Your guide considers gradients, surface, weather, access, technical demands and e-MTB battery range before confirming each stage.
            </p>
            <p className="at-copy">
              The best route depends on your technical ability, fitness, season, bike set-up and battery capacity. Agree which riding region to explore, daily distance, climbing, trail character, charging opportunities, transfers and support in the final plan.
            </p>
            <ul className="at-terrain-points">
              <li>
                <span>01</span>
                Agafay desert tracks and southern valley routes
              </li>
              <li>
                <span>02</span>
                Village trails, countryside tracks and mountain paths
              </li>
              <li>
                <span>03</span>
                Agafay desert panoramas and southern Morocco landscapes
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
            <span className="at-eyebrow">IMLIL &amp; OUIRGANE TOUR DETAILS</span>
            <h2 className="at-heading">Agafay and Southern Morocco e-MTB Tour Information</h2>
            <p className="at-copy">
              The details are agreed before departure. Confirm the meeting point, rider experience, e-MTB size and model, battery capacity, helmet, chosen riding region or combination of regions, route, duration, refreshment plan and transfers.
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
            alt="Traditional Berber village in the High Atlas Mountains"
          />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE TRAIL · TWO ATLAS VALLEYS</span>
          <h2 className="at-heading">
            Discover Agafay and Southern Morocco by e-MTB
          </h2>
          <p className="at-copy">
            An e-MTB journey takes you beyond Marrakech into contrasting desert landscapes. Agafay offers rugged stony plains and rolling hills, while southern Morocco opens into remote valleys, rocky mountains and expansive desert scenery. Pedal-assist helps you enjoy the climbs while keeping the focus on the landscape and the ride.
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
                Explore Agafay and Southern Morocco by Electric Mountain Bike
              </h2>
            </div>
            <p>
              Discover the contrasting landscapes of Agafay and southern Morocco through rocky desert tracks, remote valley routes and rugged mountain paths. Each ride is selected to match the group’s ability, available time and local conditions.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item">
              <img src={images.cycling} alt="Cycling through a selected Moroccan mountain landscape" />
            </div>
            <div className="at-gallery-item">
              <img src={images.valley} alt="Remote southern Morocco landscape and riding terrain" />
            </div>
            <div className="at-gallery-item">
              <img src={images.village} alt="Traditional Berber village along a Moroccan cycling route" />
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
                Sample Flexible Agafay & Southern Morocco e-MTB Programme
              </h2>
            </div>
            <p>
              This sample four-stage outline shows how a flexible e-MTB adventure could be arranged. Choose a single-day ride in Agafay, continue south over two or three days, or extend the experience with additional riding days.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This is an illustrative programme, not a fixed four-day package. Your final proposal will confirm the actual duration, which valleys are included, routes, distances, elevation, e-MTB equipment, charging arrangements, accommodation, meals and transfers.
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
                What Is Included in Your Agafay & Southern Morocco e-MTB Adventure?
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
                Preparing for Your Agafay & Southern Morocco e-MTB Adventure
              </h2>
            </div>
            <p>
              Good preparation starts with clear expectations. Share your dates, group size, riding experience and whether you prefer Agafay, southern Morocco or both, so the route, equipment, accommodation and support can be planned accurately.
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
              alt="Electric mountain biking across rocky desert terrain in Morocco"
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
              Find answers about tour duration, e-MTB equipment, battery range, route difficulty and planning your Agafay and Southern Morocco adventure.
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
            alt="Electric mountain biking in the Agafay Desert and southern Morocco"
          />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">
            YOUR IMLIL & OUIRGANE E-MTB ADVENTURE STARTS HERE
          </span>
          <h2>Plan Your Agafay &amp; Southern Morocco e-MTB Adventure</h2>
          <p>
            Tell us your preferred dates, group size, riding experience and the number of days you have available. We can discuss Agafay and Southern Morocco routes, e-MTB rental, battery arrangements, transfers between the selected regions and accommodation options.
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
              Explore related electric mountain-bike journeys, from a three-day Atlas escape to a private e-MTB holiday with a custom itinerary.
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
            © {2026} Cycling Morocco. All rights reserved.
          </span>
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}