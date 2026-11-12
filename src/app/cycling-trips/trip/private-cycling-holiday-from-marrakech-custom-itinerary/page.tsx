import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Private Cycling Holiday from Marrakech – Custom Itinerary | Mountain Bike Morocco",
  description:
    "Design a private cycling holiday from Marrakech around your preferred dates, riding style and pace. Explore the High Atlas, Berber valleys, desert landscapes or combine regions in a tailor-made Moroccan cycling journey.",
  alternates: {
    canonical: "/cycling-trips/trip/private-cycling-holiday-from-marrakech-custom-itinerary",
  },
};

const images = {
  hero: "/images/luxury-cycling-holiday-trip-morocco.jpg",
  overview: "/images/atlas-mountains-cycling-expedition.jpg",
  atlas: "/images/atlas-mountains-cycling-tour.jpg",
  valley: "/images/morocco-berber-valley.jpg",
  village: "/images/berber-villages-cycling-expeditions.jpg",
  cycling: "/images/explore-morocco-cycling-holiday.jpg",
  mountain: "/images/atlas-desert-cycling-tour.jpg",
  final: "/images/atlas-to-desert-biking-tour.jpg",
};

const facts = [
  ["Tour format", "Private tailor-made cycling holiday"],
  ["Starting point", "Marrakech – hotel or agreed meeting point"],
  ["Destinations", "High Atlas, Berber valleys, Agafay or southern Morocco"],
  ["Cycling style", "MTB, e-MTB, gravel or road cycling"],
  ["Terrain", "Selected trails, mountain roads, pistes and quiet rural lanes"],
  ["Difficulty", "Designed around your riding level and goals"],
  ["Duration", "Flexible – set around your available dates"],
  ["Group size", "Private group – size confirmed on enquiry"],
  ["Travel dates", "On request throughout the season"],
];

const highlights = [
  { number: "01", title: "Your Route, Your Kind of Riding", text: "Choose the riding that excites you: technical singletrack, flowing mountain descents, gravel exploration, road cycling or a varied combination. Your itinerary is shaped around your experience and priorities." },
  { number: "02", title: "Start and Finish in Marrakech", text: "Use Marrakech as your convenient gateway to Morocco's riding regions. We can discuss airport or hotel transfers, warm-up rides and the best sequence of destinations for your dates." },
  { number: "03", title: "Explore More Than One Landscape", text: "Build a journey around the High Atlas and its valleys, or extend south towards the Agafay and desert landscapes. The route depends on your preferred terrain, available time and season." },
  { number: "04", title: "Private Support and Flexible Pace", text: "Travel with a private guide and agree the support, accommodation standard, transfers, rest days and daily riding ambitions before departure. The final arrangements are set out in your personal proposal." },
];

const beyondTrail = [
  { title: "High Atlas mountain landscapes", text: "Ride among dramatic peaks, terraced valleys and remote mountain communities, choosing routes that match your ability and the conditions." },
  { title: "Berber villages and local encounters", text: "Allow time to discover the architecture, hospitality and everyday life of mountain communities respectfully along the way." },
  { title: "From mountain trails to open desert", text: "For longer holidays, combine contrasting regions and terrain, linking mountain riding with wide-open southern landscapes where logistics allow." },
  { title: "A holiday designed around you", text: "Set the balance between full riding days, scenic transfers, cultural visits, comfortable stays and time to relax." },
];

const itinerary = [
  {
    day: "01", title: "Arrive in Marrakech – Welcome and Bike Preparation", location: "Marrakech", distance: "No fixed riding distance", riding: "Arrival, bike check and optional short spin",
    image: images.overview,
    text: "Meet the team in Marrakech and review the outline of your private cycling holiday. Depending on your arrival time, settle into your accommodation, check bicycles and equipment, and discuss the route, weather and riding objectives for the days ahead. An optional short ride can be arranged if time and logistics allow.",
    details: ["Airport or hotel transfer if included in your confirmed plan", "Meet your guide and review the tailor-made itinerary", "Bike set-up, equipment check and route briefing", "Confirm daily start times, support and luggage arrangements"],
  },
  {
    day: "02", title: "Into the High Atlas – Mountain Roads and Valley Trails", location: "Marrakech to the selected High Atlas riding area", distance: "Set according to route and ability", riding: "Mountain biking, e-MTB, gravel or road option",
    image: images.atlas,
    text: "Leave Marrakech for the mountains and begin riding in the landscape selected for your trip. Depending on your chosen discipline, the day may focus on flowing trails, quiet mountain roads, gravel tracks or a combination. The guide adapts the route to conditions and the group's preferred challenge.",
    details: ["Scenic transfer to the agreed starting area", "Ride a route selected for your bike and experience", "Pause for mountain views, village visits or refreshments", "Overnight in the accommodation specified in your proposal"],
  },
  {
    day: "03", title: "Discover Berber Valleys and Remote Countryside", location: "High Atlas valleys and surrounding villages", distance: "Flexible daily distance", riding: "A varied day shaped around your preferred terrain",
    image: images.valley,
    text: "Continue through the mountain region with time to explore a different valley or trail network. Your route can prioritise technical riding, scenic exploration or a more relaxed day with cultural stops. The precise trail choice and any vehicle support are agreed with your guide.",
    details: ["Breakfast and briefing on the day's route", "Ride through selected mountain and rural landscapes", "Time for a local lunch or village stop if arranged", "Review the following day's route and transfer plan"],
  },
  {
    day: "04", title: "Choose Your Next Chapter – More Mountains or Southern Landscapes", location: "High Atlas, Agafay or a southern destination by arrangement", distance: "Confirmed in your custom route plan", riding: "Optional destination change or additional riding day",
    image: images.mountain,
    text: "For itineraries with enough time, extend the journey towards another riding region. You might remain in the Atlas for more mountain terrain or plan a transfer towards open, arid landscapes. This sample stage is illustrative: destination, riding and overnight location depend on the itinerary you approve.",
    details: ["Travel between regions where included in the plan", "Explore a new landscape or enjoy a further day in the mountains", "Choose a full ride, shorter route or non-riding experience", "Stay overnight at the agreed accommodation"],
  },
  {
    day: "05", title: "Final Ride and Return to Marrakech", location: "Selected riding area to Marrakech", distance: "Optional short ride or transfer day", riding: "Final ride according to departure time",
    image: images.final,
    text: "Enjoy a final ride or a relaxed morning before returning to Marrakech. If your schedule allows, the team can discuss an additional scenic stop or cultural visit. Your departure transfer and finish time are arranged around your onward travel plans.",
    details: ["Breakfast and final equipment check", "Optional short ride or scenic stop if time allows", "Return transfer to Marrakech", "Airport drop-off or hotel finish if included in your booking"],
  },
];

const inclusions = [
  "Private cycling guide for the agreed itinerary and riding days",
  "Accommodation and meal plan only as itemised in your confirmed proposal",
  "Support vehicle, luggage transfers and route transfers where specified",
  "Bike rental, e-bike or specialist equipment only if selected and confirmed",
  "Airport or Marrakech transfers when listed in your booking",
  "Any permits, activities or local services explicitly stated in your final itinerary",
];

const exclusions = [
  "International flights and visa or entry costs, where applicable",
  "Travel insurance, medical cover and personal accident insurance",
  "Bike rental, equipment or repairs unless included in your package",
  "Meals, drinks and personal expenses not listed in the proposal",
  "Tips and optional activities not included in the agreed programme",
  "Single-room supplements or accommodation upgrades unless confirmed",
  "Any service not expressly listed in your final booking confirmation",
];

const preparation = [
  { title: "Tell Us What You Want to Ride", text: "Let us know whether you prefer MTB singletrack, enduro, e-MTB, gravel, road cycling or a mixed itinerary. Share your recent riding experience and the kind of terrain you enjoy." },
  { title: "Choose Your Dates and Holiday Style", text: "Tell us how many days you have, your preferred travel dates, group size and accommodation expectations. We can then shape a realistic route with suitable transfers and overnight stops." },
  { title: "Bring the Right Bike and Equipment", text: "If travelling with your own bike, check it is serviced and suitable for the planned terrain. If you need a rental bike, confirm size, type, availability, pedals and helmet arrangements before booking." },
  { title: "Plan for Mountain Conditions", text: "Pack layered riding clothing, gloves, suitable shoes, sun protection and a light waterproof layer. Conditions can change with altitude and season; your guide can advise on the final kit list." },
];

const faqs = [
  { q: "Can I customise the cycling holiday completely?", a: "Yes. The route, duration, riding discipline, accommodation style, support and pace can be discussed around your priorities. Your final itinerary will confirm what is feasible for your dates and group." },
  { q: "How many days should I allow?", a: "The duration is flexible. A shorter break can focus on the Atlas near Marrakech, while a longer holiday may combine several regions. Share your available dates and we can suggest a practical itinerary." },
  { q: "Which types of cycling can be included?", a: "Depending on the route and equipment, the trip can be planned for mountain biking, enduro, e-MTB, gravel or road cycling. A mixed itinerary may also be possible." },
  { q: "Where can we ride from Marrakech?", a: "Possible areas include the High Atlas and its valleys, the Agafay area and, for longer itineraries, selected southern destinations. The best choice depends on your riding style, season and available time." },
  { q: "Is this a private trip?", a: "The holiday is designed for a private group. Confirm the group size, guide arrangements and any support vehicle requirements in your written proposal." },
  { q: "Can you arrange accommodation and transfers?", a: "Accommodation, airport transfers, daily route transfers and luggage support can be discussed. Only services itemised in your confirmed proposal should be considered included." },
  { q: "Can I bring my own bike?", a: "Yes, you can discuss travelling with your own bike. Share the bike type and intended terrain so the route and transport arrangements can be checked. Rental options may be available by prior arrangement." },
  { q: "What level of fitness and experience is required?", a: "There is no single level for a custom trip. Tell us your fitness, technical ability and preferred daily effort so the route, distance and elevation can be planned appropriately." },
  { q: "Can non-riding partners join?", a: "This can often be discussed when designing the itinerary. Scenic transfers, cultural visits or relaxed days may be possible, depending on the destination and logistics." },
  { q: "Are the distances and elevation fixed?", a: "No. Distances, climbing and daily routes depend on the chosen region, discipline and ability. They should be confirmed in your final route plan rather than assumed from this sample itinerary." },
  { q: "When should I book?", a: "Enquire as early as possible, especially if you have fixed dates, specific rental-bike needs or preferred accommodation. Availability and final arrangements are confirmed individually." },
  { q: "How do I receive a quote?", a: "Send your dates, group size, preferred cycling style, experience, approximate budget and accommodation preferences. The team can use these details to prepare a tailored proposal for review." },
];

const relatedTours = [
  {
    category: "HIGH ATLAS CYCLING ESCAPE",
    title: "Marrakech to Atlas Cycling Escape",
    text: "A two-day private journey from Marrakech into the High Atlas, ideal for a shorter mountain-focused break.",
    image: "/images/atlas-marrakech-cycling-tour.jpg",
    href: "/cycling-trips/trip/marrakech-to-atlas-cycling-escape-2-days",
  },
  {
    category: "BERBER VALLEYS CYCLING",
    title: "Atlas Berber Villages Cycling Tour",
    text: "Explore mountain valleys and traditional settlements on a three-day guided cycling journey.",
    image: "/images/atlas-berber-valley-bike.JPG",
    href: "/cycling-trips/trip/atlas-berber-villages-cycling-tour-3-day",
  },
  {
    category: "ATLAS TO DESERT EXPEDITION",
    title: "Atlas to Desert Cycling Journey",
    text: "A five-day journey linking mountain landscapes with the changing scenery of southern Morocco.",
    image: "/images/atlas-to-desert-biking-tour.jpg",
    href: "/cycling-trips/trip/atlas-to-desert-cycling-journey-5-day",
  },
];

export default function PrivateCyclingHolidayFromMarrakechPage() {
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
        .atlas-tour .at-enquiry-section { background: var(--green); }
        .atlas-tour .at-enquiry-section .at-eyebrow,
        .atlas-tour .at-enquiry-section .at-heading,
        .atlas-tour .at-enquiry-section .at-section-head > p { color: #fff !important; }
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
            alt="Private cycling holiday across Morocco’s mountain landscapes"
          />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">
            MOROCCO · MARRAKECH START · PRIVATE CUSTOM CYCLING HOLIDAY
          </span>
          <h1>Private Cycling Holiday from Marrakech</h1>
          <p className="at-hero-description">
            Plan a private cycling holiday from Marrakech with a route tailored to your dates, riding discipline and ambitions. Explore High Atlas trails, Berber valleys, gravel roads or combine mountain and southern landscapes.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Plan Your Private Cycling Holiday <span>→</span>
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
              <span>Trails, roads & gravel routes</span>
            </div>
            <div>
              <strong>CUSTOM TRIP</strong>
              <span>Tailor-made cycling journey</span>
            </div>
            <div>
              <strong>MARRAKECH</strong>
              <span>Marrakech & Morocco</span>
            </div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact">
            <span>Tour format</span>
            <strong>Private Custom Cycling Holiday</strong>
          </div>
          <div className="at-fact">
            <span>Destination</span>
            <strong>High Atlas, Valleys & Southern Morocco</strong>
          </div>
          <div className="at-fact">
            <span>Itinerary</span>
            <strong>Custom Itinerary</strong>
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
              alt="Cycling through the High Atlas mountain region of Morocco"
            />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">YOUR GUIDED MARRAKECH CYCLING JOURNEY</span>
            <h2 className="at-heading">
              A Tailor-Made Cycling Holiday Starting in Marrakech
            </h2>
            <p className="at-copy">
              Start in Marrakech and build a private cycling holiday around the landscapes and riding style you want to experience. Choose from High Atlas singletrack, Berber valleys, gravel routes, road cycling or a combination of regions. Your guide and itinerary are planned around your group’s experience, available dates and preferred pace.
            </p>
            <p className="at-copy">
              There is no single fixed route or duration. A shorter escape can concentrate on the Atlas close to Marrakech, while a longer journey can connect several riding areas with transfers and overnight stays. The final route, daily distances, elevation and support arrangements are agreed in your proposal.
            </p>
            <p className="at-copy">
              Before departure, confirm the daily route plan, riding distances, climbing, accommodation, bike arrangements, transfers, meals and support services included in your booking.
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
              A Private Cycling Journey Designed Around You
            </h2>
            <p className="at-copy">
              Your holiday can focus on one region or combine several landscapes. The route is selected to balance the riding you want, realistic travel times, comfortable overnight stops and the interests of everyone in your private group.
            </p>
            <p className="at-copy">
              Tell us your preferred dates, group size, cycling discipline, experience and accommodation style. We can then discuss suitable regions, routes, rental equipment, transfers and support.
            </p>
            <p className="at-copy">
              Your proposal should set out the itinerary day by day, including accommodation, meals, guide and vehicle support, bike arrangements, transfers and any optional activities.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">YOUR GUIDED TRIP</span>
            <h3>Private Cycling Holiday from Marrakech</h3>
            <p>
              A tailor-made Moroccan cycling journey planned around your preferred terrain, riding level, dates and travel style.
            </p>
            <ul className="at-booking-list">
              <li>
                <span>Tour format</span>
                <strong>Guided</strong>
              </li>
              <li>
                <span>Bike style</span>
                <strong>MTB / e-MTB / gravel / road</strong>
              </li>
              <li>
                <span>Destination</span>
                <strong>Marrakech & Morocco</strong>
              </li>
              <li>
                <span>Itinerary</span>
                <strong>Flexible multi-day itinerary</strong>
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
                Highlights of the Private Cycling Holiday from Marrakech
              </h2>
            </div>
            <p>
              Enjoy a private Moroccan cycling journey with the freedom to choose your terrain, daily rhythm and the regions you want to discover.
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
            <span className="at-eyebrow">MARRAKECH CYCLING ROUTES & TERRAIN</span>
            <h2 className="at-heading">
              A Choice of Mountain Trails, Gravel Roads and Scenic Routes
            </h2>
            <p className="at-copy">
              The route is selected for your chosen discipline and ability. Depending on the region, it may include mountain singletrack, gravel roads, quiet paved lanes or desert pistes. Your guide considers gradients, surface, weather, access and technical demands before confirming each stage.
            </p>
            <p className="at-copy">
              The best route depends on your riding style, fitness, technical level, season and available time. Agree daily distances, climbing, surfaces, transfers, rest stops and vehicle support in the final itinerary.
            </p>
            <ul className="at-terrain-points">
              <li>
                <span>01</span>
                High Atlas and other selected regions
              </li>
              <li>
                <span>02</span>
                Singletrack, gravel roads or paved routes
              </li>
              <li>
                <span>03</span>
                Mountain valleys and changing landscapes
              </li>
              <li>
                <span>04</span>
                Daily stages matched to your ability
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR GUIDED JOURNEY</span>
            <h2 className="at-heading">Private Cycling Holiday from Marrakech Information</h2>
            <p className="at-copy">
              The details are agreed before departure. Confirm the meeting point, riders’ experience and preferred riding style, bike sizes, helmets, route, expected duration, refreshment plan and any transfers.
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
          <span className="at-eyebrow">BEYOND THE TRAIL</span>
          <h2 className="at-heading">
            Discover Morocco Beyond the City
          </h2>
          <p className="at-copy">
            A private ride offers a different perspective on Marrakech, taking you beyond the city to enjoy rural scenery, village life and the foothills at a pace that leaves room for conversation, photos and relaxed stops.
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
                Discover the Landscapes of Your Private Cycling Holiday
              </h2>
            </div>
            <p>
              Explore the contrasting landscapes of Morocco, from High Atlas valleys and mountain villages to open southern terrain, depending on the regions selected for your holiday.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item">
              <img src={images.cycling} alt="Cycling through a selected Moroccan mountain landscape" />
            </div>
            <div className="at-gallery-item">
              <img src={images.valley} alt="Open mountain valley landscape in Morocco" />
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
                Sample Five-Stage Cycling Itinerary
              </h2>
            </div>
            <p>
              This five-stage outline is one possible structure for a private holiday. Your own trip can be shorter or longer, with destinations and riding days tailored to your dates and preferences.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This is an illustrative five-stage framework, not a fixed five-day package. Your final proposal will confirm the actual duration, routes, distances, elevation, accommodation, equipment, meals and transfers.
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
                What Is Included in Your Private Cycling Holiday?
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
                Preparing for Your Private Cycling Holiday from Marrakech
              </h2>
            </div>
            <p>
              Good preparation starts with clear expectations. Share your dates, group size, preferred cycling discipline and ability so the route, equipment, accommodation and support can be planned accurately.
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
              alt="Mountain bike route through Morocco’s countryside landscapes"
            />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">
              Cycling Difficulty, Fitness and Riding Experience
            </h2>
            <p className="at-copy">
              Difficulty is determined by the itinerary you choose. Routes can be planned for relaxed scenic riding or more demanding trail, gravel and road challenges, subject to your experience, fitness, local conditions and the agreed programme.
            </p>
            <p className="at-copy">
              Share recent riding experience, fitness, technical confidence and daily distance preferences. This helps the team select suitable terrain and balance riding days with transfers and rest time.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> confirm the planned daily distances, climbing, surfaces, technical difficulty, support vehicle arrangements and realistic riding times in your final itinerary. Conditions and route choices may change with weather and local access.
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
              Find answers about planning a private cycling holiday from Marrakech. Contact the team with your dates, group size, riding style and experience to begin shaping your itinerary.
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
            alt="A private cycling journey through Morocco’s mountain and desert landscapes"
          />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">
            YOUR PRIVATE MOROCCO CYCLING HOLIDAY STARTS HERE
          </span>
          <h2>Plan Your Private Cycling Holiday from Marrakech</h2>
          <p>
            Tell us your preferred dates, group size, cycling discipline, riding experience and accommodation preferences. We can then discuss suitable regions, daily routes, equipment, transfers and support for your tailor-made holiday.
          </p>
          <a className="at-button" href="/contact">
            Plan Your Private Cycling Holiday <span>→</span>
          </a>
        </div>
      </section>

      <section className="at-section at-enquiry-section" id="enquiry">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">PLAN YOUR PRIVATE MARRAKECH CYCLING HOLIDAY</span>
              <h2 className="at-heading">
                Enquire About Your Custom Cycling Itinerary
              </h2>
            </div>
            <p>
              Tell us your preferred dates, group size, cycling style and
              riding experience. Share the regions you would like to explore,
              your accommodation preferences and any transfer or support
              requirements so we can discuss a private itinerary around your
              holiday plans.
            </p>
          </div>
          <ContactEnquiryForm />
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
              Explore more guided cycling journeys from Marrakech, from short High Atlas escapes to longer mountain and desert expeditions.
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
              Discover Morocco by bike. Ride the High Atlas, explore rural villages and experience unforgettable mountain and countryside cycling journeys.
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
              <a href="/destinations/desert">Desert</a>
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