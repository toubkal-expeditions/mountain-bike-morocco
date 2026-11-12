import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Private Morocco Gravel Holiday – 5 Days | Mountain Bike Morocco",
  description:
    "Experience a 5-day private gravel cycling holiday in Morocco. Explore mountain landscapes, rural roads, traditional villages and varied gravel terrain on a journey planned around your riding level.",
  alternates: {
    canonical: "/cycling-trips/trip/private-morocco-gravel-holiday-5-day",
  },
};

const images = {
  hero: "/images/gravel-atlas-to-sahara-desert-mtb-tour.jpg",
  overview: "/images/gravel-cycling-morocco-expeditions.jpg",
  mountains: "/images/gravel-cycling-atlas-mountains.jpg",
  trails: "/images/gravel-adventure-cycling-morocco.jpg",
  village: "/images/berber-villages-cycling-expeditions.jpg",
  valley: "/images/gravel-desert-cycling-expedition.jpg",
  cycling: "/images/gravel-desert-cycling-morocco.JPG",
  final: "/images/gravel-adventure-morocco.jpg",
};

const facts = [
  ["Duration", "5 days"],
  ["Destination", "Morocco"],
  ["Starting point", "To be confirmed"],
  ["Main areas", "Selected Moroccan cycling regions"],
  ["Cycling style", "Gravel cycling"],
  ["Difficulty", "To be confirmed against the final route"],
  ["Experience", "Previous cycling experience recommended"],
  ["Tour format", "Private gravel cycling holiday"],
  ["Best season", "Spring and autumn, subject to conditions"],
];

const highlights = [
  {
    number: "01",
    title: "Discover Morocco by Gravel Bike",
    text: "Explore Morocco beyond the usual routes, discovering mountain landscapes, rural roads and changing scenery on a five-day private cycling holiday.",
  },
  {
    number: "02",
    title: "Ride Through Varied Landscapes",
    text: "Experience selected gravel roads and rural tracks through mountain countryside, open valleys and traditional settlements, depending on your chosen route.",
  },
  {
    number: "03",
    title: "Experience Local Culture",
    text: "Discover traditional villages, Amazigh heritage, regional architecture and the welcoming atmosphere of rural Morocco along your journey.",
  },
  {
    number: "04",
    title: "Your Private Five-Day Adventure",
    text: "Enjoy a private gravel cycling experience that can be discussed around your riding level, preferred terrain, travel dates and available services.",
  },
];

const beyondTrail = [
  {
    title: "Morocco's changing landscapes",
    text: "Discover the variety of the Moroccan countryside, from rugged mountain scenery and open valleys to dry hillsides and rural landscapes.",
  },
  {
    title: "Traditional mountain villages",
    text: "Depending on the selected route, pass through rural settlements and Amazigh villages where traditional architecture reflects the character of the region.",
  },
  {
    title: "Local culture and traditions",
    text: "Experience the atmosphere of rural Morocco and discover regional traditions, local food and the hospitality of communities along the journey.",
  },
  {
    title: "A journey beyond the main roads",
    text: "Gravel cycling offers a different perspective on Morocco, with opportunities to explore quieter roads, countryside and landscapes away from busy routes.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival and First Gravel Ride",
    location: "Morocco – Starting Point to Be Confirmed",
    distance: "To be confirmed",
    riding: "Gravel cycling",
    image: images.overview,
    text: "Meet the local team and review the arrangements for your five-day private gravel holiday. Your starting point and any transfer arrangements will be confirmed in the final programme. After checking your bicycle and equipment, begin the first selected cycling stage. This introductory ride offers an opportunity to become familiar with the terrain and the landscapes of the chosen region. The exact route, distance, elevation and overnight arrangements will be confirmed before departure.",
    details: [
      "Meet the local team and review the trip arrangements",
      "Confirm the starting point and transport arrangements",
      "Check your gravel bicycle and personal equipment",
      "Begin the first selected gravel cycling stage",
      "Discover the landscapes of the chosen region",
      "Reach the agreed overnight accommodation",
    ],
  },
  {
    day: "02",
    title: "Gravel Roads and Mountain Landscapes",
    location: "Selected Mountain and Rural Routes",
    distance: "To be confirmed",
    riding: "Gravel cycling",
    image: images.mountains,
    text: "Continue your journey through the landscapes selected for your private gravel holiday. Ride suitable gravel roads, rural tracks and paved connections according to the confirmed route. Enjoy changing scenery, open countryside and opportunities to stop along the way. The daily programme will be planned according to the group's riding experience, road conditions and preferred pace.",
    details: [
      "Breakfast and preparation for the cycling stage",
      "Ride selected gravel roads and rural routes",
      "Explore mountain and countryside landscapes",
      "Enjoy planned breaks during the ride",
      "Continue towards the next overnight location",
      "Review the following day's route with the team",
    ],
  },
  {
    day: "03",
    title: "Explore Morocco Beyond the Main Roads",
    location: "Rural Morocco – Selected Gravel Routes",
    distance: "To be confirmed",
    riding: "Gravel cycling",
    image: images.village,
    text: "Discover more of the region on a third day of gravel cycling. Depending on the selected programme, the route may pass through rural settlements, cultivated landscapes and traditional villages. Ride selected unpaved sections and quieter connecting roads while enjoying the changing character of the Moroccan countryside. The route and riding conditions will be agreed according to your preferences and the final itinerary.",
    details: [
      "Prepare for another day of gravel cycling",
      "Ride selected rural roads and gravel sections",
      "Discover traditional settlements along the route",
      "Enjoy scenic stops and opportunities for photographs",
      "Experience the countryside and local surroundings",
      "Arrive at the agreed overnight accommodation",
    ],
  },
  {
    day: "04",
    title: "A Further Day of Gravel Adventure",
    location: "Selected Moroccan Cycling Region",
    distance: "To be confirmed",
    riding: "Gravel cycling",
    image: images.trails,
    text: "Enjoy another full day exploring the landscapes selected for your private cycling holiday. The route may combine gravel roads, rural tracks and paved connections, depending on the region and road conditions. This additional day gives you more time to discover the countryside and enjoy the riding experience without rushing the programme. Daily distance, elevation and the overnight location will be confirmed in your personalised itinerary.",
    details: [
      "Breakfast and preparation for the day's ride",
      "Continue along the selected gravel route",
      "Explore further mountain and rural landscapes",
      "Enjoy breaks during the cycling stage",
      "Reach the agreed overnight location",
      "Prepare for the final day of the journey",
    ],
  },
  {
    day: "05",
    title: "Final Gravel Stage and Departure",
    location: "Final Cycling Route – Departure Point",
    distance: "To be confirmed",
    riding: "Gravel cycling",
    image: images.valley,
    text: "Complete your five-day gravel holiday with a final cycling stage through the landscapes selected for your programme. Enjoy the last kilometres of your Moroccan adventure before reaching the agreed finishing point. Depending on the final arrangements, onward transport may be organised towards your departure destination. The final route, finishing point and transfer details will be confirmed before the tour.",
    details: [
      "Breakfast and final equipment check",
      "Begin the final gravel cycling stage",
      "Explore the last selected rural and mountain routes",
      "Enjoy final scenic stops along the ride",
      "Complete the five-day cycling programme",
      "Arrange onward travel according to the confirmed itinerary",
    ],
  },
];

const inclusions = [
  "Trip planning and route coordination",
  "Local cycling support as agreed in your itinerary",
  "Accommodation specified in your confirmed itinerary",
  "Meals explicitly listed in your confirmed itinerary",
  "Bicycle rental if specifically included",
  "Luggage or equipment transfers if agreed",
  "Transfers specified in your final proposal",
  "Support vehicle if explicitly included in your proposal",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Gravel bicycle unless included in your proposal",
  "Personal cycling equipment and clothing",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses and tips",
  "Additional accommodation before or after the tour",
  "Additional activities and services not included in your proposal",
];

const preparation = [
  {
    title: "Choose a Suitable Gravel Bike",
    text: "Bring a gravel bicycle suitable for the selected roads and surfaces. Tyre width, gearing, brakes and overall setup should match the confirmed route and terrain.",
  },
  {
    title: "Prepare for Varied Terrain",
    text: "Morocco offers varied cycling landscapes and road conditions. Your bicycle setup should be checked against the selected route, including gravel sections, climbs and descents.",
  },
  {
    title: "Build Your Cycling Endurance",
    text: "This is a five-day cycling experience. Previous cycling experience and preparation for consecutive days in the saddle are recommended. Share your usual riding distances and fitness level when planning.",
  },
  {
    title: "Pack for Five Days of Cycling",
    text: "Bring a suitable helmet, gloves, cycling glasses, comfortable clothing, footwear, sun protection, hydration equipment and personal repair supplies. Pack appropriate clothing for changing temperatures.",
  },
];

const faqs = [
  {
    q: "How long is the Private Morocco Gravel Holiday?",
    a: "The holiday is planned as a five-day private gravel cycling experience. Exact riding time and daily distances depend on the selected route and your group's preferences.",
  },
  {
    q: "Where does the tour start?",
    a: "The starting point will be confirmed in your personalised trip proposal. Share your arrival arrangements and preferred travel dates so the meeting point and any transfers can be discussed.",
  },
  {
    q: "Which regions of Morocco does the tour explore?",
    a: "The exact regions depend on the route selected for your private holiday. The programme can be discussed around your preferred landscapes, riding level and available time.",
  },
  {
    q: "What type of terrain can we expect?",
    a: "The programme is designed around gravel cycling and may include selected unpaved sections, rural roads and paved connections. Exact road surfaces depend on the confirmed route.",
  },
  {
    q: "Do we need our own gravel bicycles?",
    a: "You can discuss bringing your own bicycle or arranging a rental. Bicycle availability, specifications, rental costs and equipment arrangements must be confirmed in your trip proposal.",
  },
  {
    q: "How difficult is the Private Morocco Gravel Holiday?",
    a: "Difficulty depends on the selected route, daily distance, elevation gain, road surfaces and weather conditions. Previous cycling experience and preparation for consecutive riding days are recommended.",
  },
  {
    q: "Are the daily distances and elevation fixed?",
    a: "Exact daily distance and elevation figures have not been specified here. They depend on the confirmed route and will be agreed before the tour.",
  },
  {
    q: "Is accommodation included?",
    a: "Accommodation arrangements will be specified in your final proposal. Check the confirmed itinerary for overnight locations, accommodation standards and included services.",
  },
  {
    q: "Is a support vehicle available?",
    a: "Support vehicle arrangements can be discussed when planning your holiday. Any included vehicle support, luggage transfers or assistance will be specified in your final proposal.",
  },
  {
    q: "What is the best time for gravel cycling in Morocco?",
    a: "Spring and autumn can offer suitable cycling conditions in many Moroccan regions, depending on the route and weather. Your travel dates should be considered when selecting the programme.",
  },
  {
    q: "Can I customise the five-day gravel holiday?",
    a: "This private experience can be discussed around your riding level, preferred landscapes, travel dates and available services. The final route and arrangements should be agreed before booking.",
  },
  {
    q: "What should I bring for the tour?",
    a: "Bring a helmet, cycling clothing, gloves, suitable footwear, hydration equipment, sun protection and personal bicycle tools. Pack clothing appropriate for the expected conditions and five-day programme.",
  },
];

const relatedTours = [
  {
    category: "GRAVEL CYCLING",
    title: "Atlas Mountains Gravel Ride",
    text: "Discover mountain roads, rural valleys and traditional villages on a multi-day gravel cycling adventure.",
    image: "/images/gravel-cycling-atlas-mountains.jpg",
    href: "/cycling-trips/trip/atlas-mountains-gravel-ride-4-day",
  },
  {
    category: "GRAVEL CYCLING",
    title: "High Atlas & Ouirgane Gravel Tour",
    text: "Explore the High Atlas and Ouirgane Valley on a four-day private gravel cycling adventure.",
    image: "/images/gravel-adventure-cycling-morocco.jpg",
    href: "/cycling-trips/trip/high-atlas-and-ouirgane-gravel-tour-4-day",
  },
  {
    category: "GRAVEL CYCLING",
    title: "Anti-Atlas Gravel Discovery",
    text: "Explore the rugged landscapes of southern Morocco on a four-day gravel cycling adventure.",
    image: "/images/gravel-atlas-to-sahara-desert-mtb-tour.jpg",
    href: "/cycling-trips/trip/anti-atlas-gravel-discovery-4-day",
  },
];

export default function PrivateMoroccoGravelHoliday5DayPage() {
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
        .atlas-tour .at-enquiry-section { background: var(--green); }
        .atlas-tour .at-enquiry-section .at-eyebrow,
        .atlas-tour .at-enquiry-section .at-heading,
        .atlas-tour .at-enquiry-section .at-section-head > p { color: #fff !important; }
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
          <img src={images.hero} alt="Gravel cycling adventure through the landscapes of Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · PRIVATE TOUR · GRAVEL · 5 DAYS</span>
          <h1>Private Morocco Gravel Holiday</h1>
          <p className="at-hero-description">
            Discover Morocco by gravel bike on a five-day
            private cycling holiday. Explore mountain
            landscapes, rural roads and traditional
            villages on a journey planned around your
            riding experience and preferred terrain.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Gravel Holiday <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>05 DAYS</strong><span>Private holiday</span></div>
            <div><strong>MOROCCO</strong><span>Mountain landscapes</span></div>
            <div><strong>GRAVEL</strong><span>Rural roads</span></div>
            <div><strong>PRIVATE</strong><span>Personalised journey</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>5 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Morocco</strong></div>
          <div className="at-fact"><span>Experience</span><strong>Private Holiday</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Gravel Cycling</strong></div>
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
            <img src={images.overview} alt="Gravel cycling through the Moroccan countryside" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A FIVE-DAY PRIVATE GRAVEL HOLIDAY</span>
            <h2 className="at-heading">Discover Morocco on a Private Gravel Cycling Adventure</h2>
            <p className="at-copy">
              The Private Morocco Gravel Holiday is a
              five-day cycling experience designed for
              riders who want to discover the country
              beyond the usual roads and destinations.
              Explore rural landscapes, mountain scenery
              and traditional communities by gravel bike.
            </p>
            <p className="at-copy">
              The programme is planned around selected
              gravel roads, rural routes and suitable
              paved connections. The exact region and
              route can be discussed according to your
              travel dates, riding level and preferred
              type of landscape.
            </p>
            <p className="at-copy">
              This private holiday offers flexibility
              when planning the cycling experience.
              Daily distances, elevation, accommodation,
              transfers and support arrangements should
              be confirmed in your personalised proposal.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the itinerary →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE CYCLING EXPERIENCE</span>
            <h2 className="at-heading">Five Days to Explore Morocco at Your Own Pace</h2>
            <p className="at-copy">
              Morocco offers a remarkable variety of
              landscapes for gravel cycling. From
              mountain scenery and open valleys to
              traditional villages and quiet rural
              roads, every region has its own character.
            </p>
            <p className="at-copy">
              This five-day holiday gives you time to
              discover selected routes and enjoy the
              journey at a pace suited to your group.
              The route can be discussed around your
              cycling background and preferred terrain.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Private Morocco Gravel Holiday</h3>
            <p>A private five-day gravel cycling experience through selected Moroccan landscapes.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>5 days</strong></li>
              <li><span>Destination</span><strong>Morocco</strong></li>
              <li><span>Tour format</span><strong>Private holiday</strong></li>
              <li><span>Cycling style</span><strong>Gravel cycling</strong></li>
              <li><span>Route programme</span><strong>Customised routes</strong></li>
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
              <h2 className="at-heading">Highlights of Your Private Morocco Gravel Holiday</h2>
            </div>
            <p>
              Discover Morocco through five days of
              private gravel cycling, with selected
              countryside routes, mountain scenery
              and opportunities to experience local
              culture along the way.
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
            <img src={images.trails} alt="Gravel roads and rural mountain terrain in Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE &amp; TERRAIN</span>
            <h2 className="at-heading">Gravel Roads, Mountain Scenery and Rural Morocco</h2>
            <p className="at-copy">
              Morocco offers varied landscapes and
              road conditions for gravel cycling.
              Depending on the selected region, your
              holiday may combine suitable unpaved
              sections, rural roads and paved
              connections through mountain and
              countryside landscapes.
            </p>
            <p className="at-copy">
              The final route will be selected according
              to your group's riding experience, available
              time, road conditions and preferred type
              of terrain. Daily distance and elevation
              will be confirmed before departure.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Selected gravel roads and rural tracks</li>
              <li><span>02</span>Mountain landscapes and open valleys</li>
              <li><span>03</span>Traditional villages and countryside routes</li>
              <li><span>04</span>Five cycling days planned around your experience</li>
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
              Review the main details of this five-day
              gravel cycling holiday. The selected
              region, daily distances, elevation,
              road surfaces, starting point,
              accommodation and support services
              should be confirmed in your
              personalised trip proposal.
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
          <img src={images.village} alt="Traditional Amazigh village in Morocco" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover the Landscapes and Culture of Morocco</h2>
          <p className="at-copy">
            A private gravel holiday is about more
            than the kilometres covered. Beyond
            the cycling routes, discover the
            landscapes, traditional villages and
            local communities that give each
            Moroccan region its distinctive character.
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
              <h2 className="at-heading">Explore the Landscapes Along Your Journey</h2>
            </div>
            <p>
              Discover mountain roads, rural villages,
              open valleys and the changing landscapes
              of Morocco on a private gravel cycling holiday.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="Mountain landscape in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.trails} alt="Gravel terrain in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional village in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Moroccan valley landscape" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Gravel cycling adventure in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">FIVE DAYS IN MOROCCO</span>
              <h2 className="at-heading">Private Morocco Gravel Holiday Itinerary</h2>
            </div>
            <p>
              A suggested five-day structure for
              exploring selected gravel routes in Morocco.
              The final region, route, daily distances,
              riding time and transfers are confirmed
              during trip planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines the proposed
            structure of the experience. Exact route
            selection, daily distance, elevation gain,
            road surfaces, accommodation, meeting
            point and transfer arrangements depend
            on the final programme agreed with your group.
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
              <h2 className="at-heading">What Is Included in Your Gravel Holiday?</h2>
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
              <span className="at-eyebrow">BEFORE YOU RIDE</span>
              <h2 className="at-heading">Preparing for Your Morocco Gravel Holiday</h2>
            </div>
            <p>
              Prepare your bicycle, fitness and
              equipment for five days of cycling
              through the varied roads and landscapes
              of Morocco.
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
            <img src={images.cycling} alt="Gravel cycling through the Moroccan countryside" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">Difficulty and Cycling Experience</h2>
            <p className="at-copy">
              A five-day gravel holiday in Morocco
              can involve varied road surfaces,
              mountain climbs, descents and
              consecutive days of riding. The
              overall difficulty depends on the
              selected region, route, daily distance,
              elevation gain and weather conditions.
            </p>
            <p className="at-copy">
              Tell us about your cycling experience,
              the distances you normally ride and
              your preferred terrain. This information
              will help when discussing a suitable
              five-day route and bicycle setup
              for your private adventure.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty,
              daily riding distances, elevation figures
              and road surfaces must be checked against
              the actual route before booking. This page
              does not promise a fixed technical grade
              or mileage.
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
              the Private Morocco Gravel Holiday.
              Contact our team if you need more details
              before planning your journey.
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
          <img src={images.final} alt="Gravel cycling landscape in Morocco" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR GRAVEL ADVENTURE STARTS HERE</span>
          <h2>Ready to Discover Morocco on a Private Gravel Holiday?</h2>
          <p>
            Tell us your preferred dates, group size,
            cycling experience and bicycle requirements.
            We can discuss a five-day gravel cycling
            holiday in Morocco and help plan an
            experience suited to your riding style.
          </p>
          <a className="at-button" href="/contact">Plan Your Gravel Holiday <span>→</span></a>
        </div>
      </section>

      <section className="at-section at-enquiry-section" id="enquiry">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">PLAN YOUR PRIVATE GRAVEL HOLIDAY</span>
              <h2 className="at-heading">
                Tell Us About Your Private Morocco Gravel Holiday
              </h2>
            </div>
            <p>
              Share your preferred dates, group size, cycling experience,
              fitness level and preferred terrain. Our team can discuss
              suitable gravel routes, accommodation, support services
              and practical arrangements for your five-day private
              cycling holiday.
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
              <h2 className="at-heading">More Gravel Cycling Adventures in Morocco</h2>
            </div>
            <p>
              Discover more ways to experience Morocco,
              from mountain gravel rides in the Atlas
              to private journeys through rural
              landscapes and the Anti-Atlas region.
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