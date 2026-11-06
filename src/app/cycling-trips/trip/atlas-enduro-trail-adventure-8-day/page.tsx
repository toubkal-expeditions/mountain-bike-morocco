import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas Enduro Trail Adventure – 8 Days | Mountain Bike Morocco",
  description:
    "Ride the Atlas Mountains on an eight-day enduro mountain biking adventure in Morocco. Discover technical trails, mountain singletrack, remote valleys and traditional Amazigh villages with a private local cycling team.",
  alternates: {
    canonical: "/cycling-trips/trip/atlas-enduro-trail-adventure-8-day",
  },
};

const images = {
  hero: "/images/enduro-cycling-holiday-morocco.jpg",
  overview: "/images/atlas-mountains-enduro-biking-tour.jpg",
  atlas: "/images/enduro-expedition-cycling-morocco.JPG",
  valley: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  village: "/images/group-cycling-tour-morocco.jpg",
  cycling: "/images/singletrack-mtb-atlas-mountains.jpg",
  trail: "/images/enduro-morrocco-cycling-tour.jpg",
  final: "/images/atlas-mtb-tour-morocco.jpg",
};

const facts = [
  ["Duration", "8 days / 7 nights"],
  ["Destination", "High Atlas Mountains, Morocco"],
  ["Starting point", "Marrakech"],
  ["Main areas", "Atlas Mountains and mountain valleys"],
  ["Cycling style", "Enduro mountain biking"],
  ["Difficulty", "Intermediate to advanced, route-dependent"],
  ["Experience", "Previous mountain biking experience recommended"],
  ["Tour format", "Private guided enduro adventure"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "Atlas Mountain Singletrack",
    text: "Discover mountain trails winding through the High Atlas, with changing landscapes, natural terrain and memorable riding through remote mountain environments.",
  },
  {
    number: "02",
    title: "Enduro Trail Descents",
    text: "Experience selected descending trails and technical sections chosen according to your riding ability, trail conditions and the final route plan.",
  },
  {
    number: "03",
    title: "Remote Mountain Landscapes",
    text: "Ride beyond the busy roads and explore mountain valleys, rocky landscapes and traditional settlements that reveal another side of Morocco.",
  },
  {
    number: "04",
    title: "Local Guides and Support",
    text: "Ride with a local team familiar with the region, with guiding and support arrangements confirmed according to your group and selected programme.",
  },
];

const beyondTrail = [
  {
    title: "Amazigh mountain culture",
    text: "Discover traditional villages and the character of mountain communities throughout the Atlas region.",
  },
  {
    title: "Local hospitality",
    text: "Experience the welcoming atmosphere of Morocco's mountain communities and enjoy opportunities to connect with local life.",
  },
  {
    title: "Spectacular landscapes",
    text: "Explore changing mountain scenery, dramatic ridgelines, valleys and traditional settlements between riding stages.",
  },
  {
    title: "Time away from the trails",
    text: "Balance demanding riding days with opportunities to relax, enjoy local food and appreciate the places you discover.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Marrakech",
    location: "Marrakech",
    distance: "No scheduled riding",
    riding: "Arrival and preparation",
    image: images.overview,
    text: "Arrive in Marrakech and meet your local team. Transfer to your accommodation and take time to settle in. Depending on your arrival time, the team can review your riding experience, equipment and expectations for the adventure. The programme and practical arrangements are discussed before travelling towards the Atlas Mountains.",
    details: [
      "Arrival and welcome in Marrakech",
      "Accommodation according to your confirmed proposal",
      "Meet your local cycling team",
      "Review the enduro programme and equipment",
    ],
  },
  {
    day: "02",
    title: "Into the Atlas Mountains",
    location: "Marrakech – High Atlas",
    distance: "Route-dependent",
    riding: "Transfer and optional introductory ride",
    image: images.atlas,
    text: "Leave Marrakech and travel towards the High Atlas Mountains. As the landscape changes, discover mountain villages, valleys and rugged terrain. Depending on the final route and conditions, the day can include an introductory ride to become familiar with the local trails and riding environment.",
    details: [
      "Journey from Marrakech towards the Atlas",
      "Discover mountain scenery and traditional villages",
      "Bike and equipment checks",
      "Optional introductory trail ride, conditions permitting",
    ],
  },
  {
    day: "03",
    title: "First Enduro Trails in the Atlas",
    location: "High Atlas Mountains",
    distance: "Route-dependent",
    riding: "Guided enduro mountain biking",
    image: images.cycling,
    text: "Begin your main enduro riding programme with selected trails in the Atlas Mountains. Explore natural mountain terrain and enjoy a day planned around your group's ability. Trail selection, climbing sections and descending opportunities depend on conditions and the final route plan.",
    details: [
      "Guided mountain biking in the Atlas",
      "Selected natural singletrack trails",
      "Technical sections according to ability",
      "Riding breaks and time to enjoy the scenery",
    ],
  },
  {
    day: "04",
    title: "Mountain Singletrack and Technical Descents",
    location: "Atlas Mountain trails",
    distance: "Route-dependent",
    riding: "Enduro trail riding",
    image: images.trail,
    text: "Continue exploring the Atlas trail network with a day focused on mountain singletrack and selected descending routes. Expect varied natural terrain and changing trail characteristics. Your guide will select suitable sections according to your experience, trail conditions and the group's pace.",
    details: [
      "Explore selected mountain singletrack",
      "Guided descending sections",
      "Natural terrain and changing trail conditions",
      "Route selection adapted to the group",
    ],
  },
  {
    day: "05",
    title: "Explore New Valleys and Mountain Trails",
    location: "Atlas Mountain valleys",
    distance: "Route-dependent",
    riding: "Enduro riding and exploration",
    image: images.valley,
    text: "Discover another part of the Atlas Mountains and explore a different mountain environment. The day's riding can combine climbing, natural tracks and selected descents, depending on the route. Enjoy the scenery and discover the landscapes and villages that make this region such a distinctive mountain biking destination.",
    details: [
      "Explore a different Atlas Mountain area",
      "Selected natural trails and descents",
      "Discover mountain valleys and villages",
      "Private guided riding experience",
    ],
  },
  {
    day: "06",
    title: "A Full Day of Atlas Enduro Riding",
    location: "High Atlas region",
    distance: "Route-dependent",
    riding: "Main enduro riding stage",
    image: images.cycling,
    text: "Enjoy another full day of enduro mountain biking, with routes selected to suit your group's riding level and the conditions on the ground. Discover more of the region's natural terrain and enjoy the final major riding stage of the adventure.",
    details: [
      "Full planned enduro riding day",
      "Selected trails according to conditions",
      "Technical riding opportunities where suitable",
      "Support arrangements as confirmed in your proposal",
    ],
  },
  {
    day: "07",
    title: "Final Mountain Ride and Return to Marrakech",
    location: "Atlas Mountains – Marrakech",
    distance: "Route-dependent",
    riding: "Final ride and return transfer",
    image: images.village,
    text: "Enjoy a final opportunity to ride in the Atlas Mountains, depending on your schedule and the agreed route. After the riding programme, prepare your equipment and return towards Marrakech. The exact timing of the ride and transfer will be confirmed in your itinerary.",
    details: [
      "Final selected mountain ride, if scheduled",
      "Pack and prepare cycling equipment",
      "Return journey towards Marrakech",
      "Accommodation according to your confirmed arrangements",
    ],
  },
  {
    day: "08",
    title: "Departure from Marrakech",
    location: "Marrakech",
    distance: "No scheduled riding",
    riding: "Departure",
    image: images.final,
    text: "Enjoy breakfast and your remaining time in Marrakech before your departure. Your eight-day Atlas Enduro Trail Adventure concludes with the transfer arrangements confirmed in your booking.",
    details: [
      "Breakfast according to accommodation arrangements",
      "Prepare luggage and cycling equipment",
      "Airport transfer if included in your booking",
      "End of your Morocco enduro adventure",
    ],
  },
];

const inclusions = [
  "Private trip planning and itinerary coordination",
  "Local mountain biking guide as specified in your proposal",
  "Accommodation according to your confirmed package",
  "Meals explicitly listed in your itinerary",
  "Private transfers where specified in your proposal",
  "Support vehicle where included in your arrangements",
  "Luggage assistance where included",
  "On-trip coordination and practical assistance",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Mountain bike rental unless specified in your proposal",
  "Personal cycling equipment and protective gear",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses and tips",
  "Additional nights and transfers not included in your proposal",
  "Services not specifically listed in your confirmed booking",
];

const preparation = [
  {
    title: "Enduro riding experience",
    text: "Previous mountain biking experience is recommended. Be comfortable riding natural trails and handling varied terrain. Tell us about your technical ability so the routes can be discussed at the right level.",
  },
  {
    title: "Bike and protective equipment",
    text: "Bring a suitable enduro or trail bike, helmet, gloves, knee protection and appropriate riding clothing. Full-face helmets and additional protection may be useful depending on the selected trails.",
  },
  {
    title: "Fitness and riding skills",
    text: "Prepare for consecutive days of mountain biking and varied terrain. Your fitness, climbing ability and confidence on technical descents will help determine the most suitable programme.",
  },
  {
    title: "Personal essentials",
    text: "Bring hydration equipment, sun protection, basic personal repair items and suitable layers for changing mountain temperatures. Your team can confirm any additional equipment requirements before departure.",
  },
];

const faqs = [
  {
    q: "How long is the Atlas Enduro Trail Adventure?",
    a: "The tour is planned over eight days and seven nights, starting in Marrakech and exploring selected mountain biking areas in the Atlas Mountains.",
  },
  {
    q: "Where does the enduro tour start?",
    a: "The adventure starts in Marrakech. From there, the programme travels towards the Atlas Mountains according to your confirmed itinerary.",
  },
  {
    q: "What type of mountain biking can I expect?",
    a: "The tour focuses on enduro mountain biking, including selected natural trails, singletrack and descending sections. The exact trails depend on the route, conditions and your group's ability.",
  },
  {
    q: "Is this tour suitable for beginners?",
    a: "This adventure is intended for riders with previous mountain biking experience. Some trails may be technical, so the suitability of the programme depends on your confidence, fitness and riding skills.",
  },
  {
    q: "Do I need an enduro mountain bike?",
    a: "A suitable trail or enduro mountain bike is recommended. The ideal setup depends on the trails selected. Bike rental and equipment availability must be confirmed before booking.",
  },
  {
    q: "Are helmets and protective equipment included?",
    a: "Personal protective equipment should be brought by the rider unless specific rental arrangements are confirmed in your proposal. Ask our team about equipment requirements before travelling.",
  },
  {
    q: "Are daily distances and elevation fixed?",
    a: "No fixed daily distances or elevation figures are promised on this page. They depend on the selected trails, transfers, weather and the final itinerary.",
  },
  {
    q: "Is the tour privately guided?",
    a: "The programme is designed as a private guided experience. The guiding team and support arrangements will be detailed in your confirmed trip proposal.",
  },
  {
    q: "What is included in the tour price?",
    a: "Inclusions depend on the package selected. Your proposal will specify accommodation, guiding, transfers, meals, bike arrangements and any support services included.",
  },
  {
    q: "When is the best time for enduro mountain biking in Morocco?",
    a: "Spring and autumn are generally good periods to consider for mountain biking in the Atlas Mountains. Trail conditions and weather vary, so the best dates depend on the selected area and route.",
  },
];

const relatedTours = [
  {
    category: "MOUNTAIN BIKE ADVENTURE",
    title: "Mountain Biking Atlas Mountains – 8 Days",
    text: "Explore the Atlas Mountains on a multi-day mountain biking journey through valleys, villages and selected trails.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/cycling-trips/trip/mountain-biking-atlas-mountains-8-day",
  },
  {
    category: "E-MTB EXPERIENCE",
    title: "E-MTB Tour in Morocco",
    text: "Discover the Atlas Mountains by electric mountain bike, with selected routes and spectacular mountain scenery.",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/cycling-trips/trip/emtb-tour-morocco",
  },
  {
    category: "PRIVATE MTB EXPERIENCE",
    title: "Cycling Trips from Marrakech",
    text: "Discover private cycling experiences from Marrakech, from mountain routes to scenic countryside rides.",
    image: "/images/day-ebike-tour-from-marrakech.jpg",
    href: "/cycling-trips/trip/cycling-tour-from-marrakech",
  },
];

export default function AtlasEnduroTrailAdventure8DayPage() {
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
          <img src={images.hero} alt="Enduro mountain biking in the Atlas Mountains of Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · HIGH ATLAS · 8 DAYS</span>
          <h1>Atlas Enduro Trail Adventure</h1>
          <p className="at-hero-description">
            Eight days of mountain biking in Morocco's Atlas Mountains.
            Discover natural singletrack, selected enduro descents,
            remote valleys and traditional mountain villages on a
            privately guided adventure.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Plan Your Enduro Adventure <span>→</span>
            </a>
            <a className="at-hero-back" href="/cycling-trips">
              Explore All Cycling Tours
            </a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>08 DAYS</strong><span>Enduro adventure</span></div>
            <div><strong>HIGH ATLAS</strong><span>Morocco</span></div>
            <div><strong>SINGLETRACK</strong><span>Natural mountain trails</span></div>
            <div><strong>MARRAKECH</strong><span>Starting point</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>8 Days / 7 Nights</strong></div>
          <div className="at-fact"><span>Region</span><strong>High Atlas, Morocco</strong></div>
          <div className="at-fact"><span>Starting point</span><strong>Marrakech</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Private Enduro MTB</strong></div>
        </div>
      </section>

      <nav className="at-subnav">
        <div className="at-container at-subnav-inner">
          <a href="#overview">Overview</a>
          <a href="#highlights">Highlights</a>
          <a href="#route">Trails & Terrain</a>
          <a href="#itinerary">Itinerary</a>
          <a href="#included">Included</a>
          <a href="#preparation">Preparation</a>
          <a href="#faqs">FAQs</a>
        </div>
      </nav>

      <section className="at-section" id="overview">
        <div className="at-container at-overview-grid">
          <div className="at-overview-image">
            <img src={images.overview} alt="Enduro mountain biking terrain in Morocco's Atlas Mountains" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">AN ATLAS MOUNTAIN ENDURO ADVENTURE</span>
            <h2 className="at-heading">Eight Days of Enduro Riding in Morocco</h2>
            <p className="at-copy">
              The Atlas Enduro Trail Adventure is an eight-day mountain
              biking journey designed for riders who want to discover
              Morocco's mountain trails. Starting in Marrakech, the
              programme travels into the High Atlas, where natural
              terrain, mountain valleys and traditional villages create
              a distinctive riding environment.
            </p>
            <p className="at-copy">
              The focus is enduro mountain biking: exploring selected
              singletrack, natural trails and descending sections.
              Trail choice is adapted to your riding ability, group
              experience and the conditions during your trip.
            </p>
            <p className="at-copy">
              Rather than promising fixed trail distances or technical
              grades, the final riding programme is planned around
              the routes available and your group's expectations.
              Guiding, transfers, accommodation and support services
              are confirmed in your personalised proposal.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the itinerary →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE ENDURO EXPERIENCE</span>
            <h2 className="at-heading">Ride Further Into the Atlas Mountains</h2>
            <p className="at-copy">
              An eight-day adventure gives you time to discover more
              than one mountain environment. Explore selected trails,
              experience the changing character of the Atlas and enjoy
              the freedom of a programme planned around your group.
            </p>
            <p className="at-copy">
              Your riding experience, preferred level of challenge
              and equipment setup help determine the most suitable
              routes. The programme can balance technical riding,
              mountain exploration and time to appreciate the region.
            </p>
            <p className="at-copy">
              Share your group size, riding background and preferred
              dates with our team. We can then discuss the trails,
              logistics and support arrangements for your adventure.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Atlas Enduro Trail Adventure</h3>
            <p>Eight days of guided mountain biking through selected Atlas Mountain trails.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>8 days / 7 nights</strong></li>
              <li><span>Starting city</span><strong>Marrakech</strong></li>
              <li><span>Main region</span><strong>High Atlas</strong></li>
              <li><span>Tour format</span><strong>Private guided</strong></li>
              <li><span>Riding style</span><strong>Enduro MTB</strong></li>
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
              <h2 className="at-heading">Highlights of the Atlas Enduro Trail Adventure</h2>
            </div>
            <p>
              Discover Morocco's mountain biking landscapes through
              natural singletrack, selected descents, remote valleys
              and a private guided enduro programme.
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
            <img src={images.trail} alt="Natural enduro trail in the Atlas Mountains of Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">THE TRAILS & TERRAIN</span>
            <h2 className="at-heading">Natural Singletrack and Mountain Descents</h2>
            <p className="at-copy">
              The Atlas Mountains offer a varied mountain biking
              environment. Depending on the area and selected routes,
              riders may encounter rocky tracks, natural singletrack,
              loose surfaces, mountain paths and technical descending
              sections.
            </p>
            <p className="at-copy">
              This is an enduro-focused adventure, but the exact
              character of each riding day depends on the trails
              selected, weather and local conditions. Your guide
              will help determine suitable routes for the group.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Natural mountain singletrack</li>
              <li><span>02</span>Selected enduro descents</li>
              <li><span>03</span>Rocky and varied mountain terrain</li>
              <li><span>04</span>Trail selection adapted to rider ability</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR ADVENTURE</span>
            <h2 className="at-heading">Tour Information</h2>
            <p className="at-copy">
              Review the main details of this eight-day enduro
              mountain biking experience. Exact trails, daily
              distances, elevation, accommodation and support
              arrangements are confirmed in your trip proposal.
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
          <img src={images.village} alt="Traditional Amazigh village in Morocco's Atlas Mountains" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE TRAIL</span>
          <h2 className="at-heading">Discover the People and Landscapes of the Atlas</h2>
          <p className="at-copy">
            An enduro adventure in Morocco is about more than
            descending trails. Between riding stages, discover
            traditional mountain communities, local architecture
            and the landscapes that give the High Atlas its character.
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
              <h2 className="at-heading">The Trails and Landscapes of the Atlas</h2>
            </div>
            <p>
              Discover the mountain environments, natural trails
              and traditional villages that make the Atlas Mountains
              a memorable destination for an enduro adventure.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.trail} alt="Enduro trail in the Atlas Mountains" /></div>
            <div className="at-gallery-item"><img src={images.atlas} alt="Atlas Mountain enduro landscape" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Mountain valley in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional mountain village in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Mountain biking singletrack in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EIGHT DAYS IN THE ATLAS</span>
              <h2 className="at-heading">Atlas Enduro Trail Adventure Itinerary</h2>
            </div>
            <p>
              An eight-day mountain biking journey from Marrakech
              into the Atlas Mountains, combining selected enduro
              riding stages with mountain exploration.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The itinerary below provides an overview of the adventure.
            Exact riding areas, daily distances, elevation gain,
            trail difficulty, accommodation and support services
            depend on the final programme agreed with your group.
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
              <h2 className="at-heading">What Is Included in Your Enduro Adventure?</h2>
            </div>
            <p>
              The final inclusions depend on the package selected.
              Review the services below and check your personalised
              proposal before confirming your eight-day trip.
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
              <h2 className="at-heading">Preparing for Your Enduro Adventure</h2>
            </div>
            <p>
              Prepare your bike, protective equipment and fitness
              before travelling to Morocco. Good preparation helps
              you enjoy the mountain trails with confidence.
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
            <img src={images.cycling} alt="Mountain biking on natural Atlas Mountain trails" />
          </div>
          <div>
            <span className="at-eyebrow">KNOW YOUR LEVEL</span>
            <h2 className="at-heading">Difficulty and Riding Experience</h2>
            <p className="at-copy">
              This adventure is designed around enduro mountain
              biking and is best suited to riders who already have
              experience on natural trails. The difficulty depends
              on the selected routes, technical features, climbing
              sections and trail conditions.
            </p>
            <p className="at-copy">
              Share your experience with technical descents,
              rocky terrain and longer mountain biking days.
              This will help us discuss an appropriate programme
              and avoid promising trails that do not match your level.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final trail grades, daily
              distances, elevation figures and route conditions must
              be confirmed against the actual itinerary before booking.
              Riders are responsible for bringing suitable bikes,
              helmets and protective equipment unless rental is
              specifically included in the confirmed proposal.
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
              Find answers to common questions about this eight-day
              enduro mountain biking adventure in Morocco. Contact
              our team if you need more details before planning your trip.
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
          <img src={images.final} alt="Atlas Mountains landscape in Morocco" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR ATLAS ENDURO ADVENTURE STARTS HERE</span>
          <h2>Discover Morocco's Mountain Trails</h2>
          <p>
            Tell us your preferred dates, group size, riding experience
            and bike setup. We will discuss an eight-day enduro
            mountain biking adventure planned around your group
            and the trails available in the Atlas Mountains.
          </p>
          <a className="at-button" href="/contact">
            Plan Your Enduro Adventure <span>→</span>
          </a>
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
              Discover more ways to explore Morocco by bike,
              from multi-day Atlas mountain biking journeys
              to electric mountain biking and private rides
              from Marrakech.
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