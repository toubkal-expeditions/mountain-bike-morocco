import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Morocco Luxury Cycling Tour – 7 Days | Mountain Bike Morocco",
  description:
    "Discover Morocco on a 7-day luxury cycling journey through the Atlas Mountains, beautiful valleys and traditional villages. Enjoy private guiding, carefully selected accommodation and a personalised cycling experience.",
  alternates: {
    canonical: "/cycling-trips/trip/morocco-luxury-cycling-tour-7-day",
  },
};

const images = {
  hero: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  overview: "/images/mountain-bike-morocco-hero.jpg",
  atlas: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  valley: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  village: "/images/group-cycling-tour-morocco.jpg",
  cycling: "/images/singletrack-mtb-atlas-mountains.jpg",
  luxury: "/images/day-ebike-tour-from-marrakech.jpg",
  final: "/images/atlas-mountains-cycling-tour-morocco.jpg",
};

const facts = [
  ["Duration", "7 days / 6 nights"],
  ["Destination", "Atlas Mountains and Morocco"],
  ["Starting point", "Marrakech"],
  ["Main areas", "High Atlas, mountain valleys and villages"],
  ["Cycling style", "Luxury road and off-road cycling options"],
  ["Difficulty", "Adapted to your cycling experience"],
  ["Experience", "Suitable for riders with an appropriate fitness level"],
  ["Tour format", "Private luxury cycling journey"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "The High Atlas Mountains",
    text: "Discover spectacular mountain landscapes, beautiful valleys and traditional villages while exploring the Atlas Mountains on a private cycling journey.",
  },
  {
    number: "02",
    title: "Private Cycling Experience",
    text: "Enjoy a journey planned around your preferred cycling style, experience, fitness level and travel dates, with a private programme rather than a fixed group departure.",
  },
  {
    number: "03",
    title: "Carefully Selected Accommodation",
    text: "Enjoy comfortable accommodation selected according to your preferences and the confirmed itinerary, with opportunities to experience the character of Morocco along the way.",
  },
  {
    number: "04",
    title: "Culture and Local Experiences",
    text: "Discover Amazigh villages, traditional architecture, regional cuisine and the welcoming atmosphere of Morocco's mountain communities.",
  },
];

const beyondTrail = [
  {
    title: "Amazigh hospitality",
    text: "Discover the warmth of traditional mountain communities and experience the local hospitality that makes travelling through the Atlas Mountains special.",
  },
  {
    title: "Moroccan cuisine",
    text: "Enjoy opportunities to discover regional dishes, traditional cooking and local flavours throughout your journey.",
  },
  {
    title: "Mountain villages",
    text: "Explore traditional settlements, terraced fields and stone-built houses set among the dramatic landscapes of the High Atlas.",
  },
  {
    title: "Relaxed luxury",
    text: "Balance your days on the bicycle with time to relax, enjoy the scenery and appreciate the places you discover along the route.",
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
    text: "Arrive in Marrakech and meet your local team. Settle into your accommodation and enjoy time to discover the atmosphere of the city. Your cycling programme, preferred riding style and equipment requirements can be discussed before the journey into the Atlas Mountains.",
    details: [
      "Arrival and welcome in Marrakech",
      "Accommodation according to your confirmed proposal",
      "Meet your local cycling team",
      "Review your private cycling programme",
    ],
  },
  {
    day: "02",
    title: "Marrakech to the High Atlas Mountains",
    location: "Marrakech – Atlas Mountains",
    distance: "Route-dependent",
    riding: "Transfer and optional cycling",
    image: images.atlas,
    text: "Leave Marrakech and travel towards the High Atlas Mountains. Discover the changing scenery as the city gives way to mountain landscapes, traditional villages and green valleys. Depending on the final programme, time and conditions, an introductory cycling experience may be arranged.",
    details: [
      "Private journey towards the Atlas Mountains",
      "Discover mountain scenery and traditional villages",
      "Optional introductory cycling experience",
      "Overnight accommodation according to the itinerary",
    ],
  },
  {
    day: "03",
    title: "Cycling Through the High Atlas",
    location: "High Atlas Mountains",
    distance: "Route-dependent",
    riding: "Private guided cycling",
    image: images.cycling,
    text: "Enjoy your first main cycling stage in the High Atlas. Explore selected mountain routes through beautiful valleys and traditional settlements. The route can be discussed around your preferred cycling style, whether you enjoy scenic road cycling, mountain biking or a combination of riding experiences.",
    details: [
      "Private guided cycling experience",
      "Explore selected Atlas Mountain routes",
      "Discover traditional mountain villages",
      "Route adapted to your riding preferences",
    ],
  },
  {
    day: "04",
    title: "Mountain Valleys and Amazigh Villages",
    location: "Atlas Mountain valleys",
    distance: "Route-dependent",
    riding: "Cycling and cultural discovery",
    image: images.valley,
    text: "Continue your journey through the Atlas Mountains, discovering mountain valleys and traditional Amazigh communities. Enjoy a cycling stage planned around the group's experience, with opportunities to appreciate the landscapes and local culture along the way.",
    details: [
      "Explore selected mountain routes",
      "Discover traditional Amazigh villages",
      "Enjoy the landscapes of the High Atlas",
      "Time for local experiences according to the programme",
    ],
  },
  {
    day: "05",
    title: "A Private Cycling Journey Through Morocco",
    location: "High Atlas region",
    distance: "Route-dependent",
    riding: "Scenic cycling experience",
    image: images.village,
    text: "Enjoy another day exploring Morocco by bicycle. Your route can be planned to include scenic mountain roads, quiet rural tracks or selected off-road sections, depending on your preferred style. The programme allows flexibility to balance riding with time to enjoy the places you visit.",
    details: [
      "Private cycling stage",
      "Selected scenic roads and mountain routes",
      "Discover rural landscapes and local communities",
      "Flexible programme according to your preferences",
    ],
  },
  {
    day: "06",
    title: "Final Atlas Mountain Cycling Experience",
    location: "Atlas Mountains",
    distance: "Route-dependent",
    riding: "Final planned cycling stage",
    image: images.luxury,
    text: "Enjoy the final planned cycling experience of your luxury Morocco journey. Discover additional mountain scenery and selected routes before preparing for the return to Marrakech. The day's programme can be adapted to your preferred pace and the time available.",
    details: [
      "Final planned cycling stage",
      "Explore the agreed route",
      "Enjoy the last mountain landscapes",
      "Prepare for the return journey",
    ],
  },
  {
    day: "07",
    title: "Return to Marrakech",
    location: "Atlas Mountains – Marrakech",
    distance: "No scheduled riding unless agreed",
    riding: "Return journey",
    image: images.final,
    text: "After breakfast, return towards Marrakech according to your confirmed arrangements. Enjoy the changing scenery on the journey back to the city. Your seven-day luxury cycling experience concludes with the agreed transfer arrangements.",
    details: [
      "Breakfast according to accommodation arrangements",
      "Final luggage and equipment arrangements",
      "Return journey towards Marrakech",
      "End of your private cycling journey",
    ],
  },
];

const inclusions = [
  "Private trip planning and itinerary coordination",
  "Local cycling guide as specified in your proposal",
  "Accommodation according to the confirmed luxury package",
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
  "Personal cycling equipment",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses and tips",
  "Additional nights and transfers not included in your proposal",
  "Services not specifically listed in your confirmed booking",
];

const preparation = [
  {
    title: "Choose your cycling style",
    text: "Let us know whether you prefer road cycling, mountain biking, e-MTB or a combination of different cycling experiences. Your preferred style will help determine the routes and equipment required.",
  },
  {
    title: "Cycling equipment",
    text: "Bring a suitable helmet, gloves, cycling glasses and comfortable riding clothing. Bicycle rental and equipment arrangements should be confirmed before travelling.",
  },
  {
    title: "Fitness and experience",
    text: "Prepare for consecutive days of cycling and varied mountain terrain. Share your previous cycling experience and fitness level so the daily programme can be planned appropriately.",
  },
  {
    title: "Personal essentials",
    text: "Bring sun protection, hydration equipment, comfortable clothing for the evenings and personal medication. Mountain temperatures can change, so suitable layers are recommended.",
  },
];

const faqs = [
  {
    q: "How long is the Morocco Luxury Cycling Tour?",
    a: "The tour is planned over seven days and six nights, starting in Marrakech and exploring selected destinations in the Atlas Mountains.",
  },
  {
    q: "Where does the luxury cycling tour start?",
    a: "The journey starts in Marrakech. The route and transfer arrangements towards the Atlas Mountains are confirmed in your personalised itinerary.",
  },
  {
    q: "What makes this a luxury cycling tour?",
    a: "The experience is designed as a private journey with personalised planning, accommodation selected according to your preferences and support arrangements agreed in advance. Exact services depend on your confirmed package.",
  },
  {
    q: "What type of cycling can I do?",
    a: "Depending on your preferences and the agreed routes, the programme can be discussed around road cycling, mountain biking, e-MTB or a combination of cycling styles.",
  },
  {
    q: "Is this tour suitable for beginners?",
    a: "The tour can be discussed around different experience levels. The suitability of each route depends on your fitness, cycling background and preferred terrain. Share your experience before the itinerary is confirmed.",
  },
  {
    q: "What accommodation is included?",
    a: "Accommodation is selected according to the package and your preferences. The exact properties, room arrangements and included services are confirmed in your final proposal.",
  },
  {
    q: "Are daily distances and elevation fixed?",
    a: "No fixed daily distances or elevation figures are promised on this page. They depend on the selected routes, your cycling preferences and the final itinerary.",
  },
  {
    q: "Can the tour be customised?",
    a: "Yes. This is planned as a private cycling journey. The route, riding style, accommodation preferences and daily programme can be discussed before your booking is confirmed.",
  },
  {
    q: "Are private transfers included?",
    a: "Transfers and support arrangements depend on the services specified in your final trip proposal. Your confirmed itinerary will detail the arrangements included in your package.",
  },
  {
    q: "When is the best time for luxury cycling in Morocco?",
    a: "Spring and autumn are generally suitable periods for cycling in the Atlas Mountains. The best dates depend on the route, weather and your preferred riding experience.",
  },
];

const relatedTours = [
  {
    category: "ATLAS MOUNTAIN CYCLING",
    title: "Atlas Mountains Cycling Tour",
    text: "Explore mountain roads, traditional villages and beautiful valleys on a multi-day cycling journey.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/cycling-trips/trip/atlas-mountains-cycling-tour-6-day",
  },
  {
    category: "E-MTB EXPERIENCE",
    title: "E-MTB Tour in Morocco",
    text: "Discover the Atlas Mountains by electric mountain bike, with selected routes and spectacular scenery.",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/cycling-trips/trip/emtb-tour-morocco",
  },
  {
    category: "PRIVATE CYCLING",
    title: "Cycling Trips from Marrakech",
    text: "Discover private cycling experiences from Marrakech, from mountain routes to scenic countryside rides.",
    image: "/images/day-ebike-tour-from-marrakech.jpg",
    href: "/cycling-trips/trip/cycling-tour-from-marrakech",
  },
];

export default function MoroccoLuxuryCyclingTour7DayPage() {
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

        .atlas-tour .at-enquiry-section {
          background: var(--green);
        }

        .atlas-tour .at-enquiry-section .at-eyebrow {
          color: var(--gold-light);
        }

        .atlas-tour .at-enquiry-section .at-heading {
          color: #fff;
        }

        .atlas-tour .at-enquiry-section .at-section-head > p {
          color: #e1e2d8;
        }

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
          <img src={images.hero} alt="Cycling in the Atlas Mountains of Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · ATLAS MOUNTAINS · 7 DAYS</span>
          <h1>Morocco Luxury Cycling Tour</h1>
          <p className="at-hero-description">
            Seven days discovering Morocco by bicycle. Explore the Atlas
            Mountains, beautiful valleys and traditional villages on a
            private cycling journey with carefully planned accommodation
            and experiences shaped around your preferences.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Plan Your Luxury Cycling Tour <span>→</span>
            </a>
            <a className="at-hero-back" href="/cycling-trips">
              Explore All Cycling Tours
            </a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>07 DAYS</strong><span>Private luxury journey</span></div>
            <div><strong>ATLAS MOUNTAINS</strong><span>Morocco</span></div>
            <div><strong>PRIVATE CYCLING</strong><span>Personalised routes</span></div>
            <div><strong>MARRAKECH</strong><span>Starting point</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>7 Days / 6 Nights</strong></div>
          <div className="at-fact"><span>Region</span><strong>Atlas Mountains, Morocco</strong></div>
          <div className="at-fact"><span>Starting point</span><strong>Marrakech</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Private Luxury Cycling</strong></div>
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
            <img src={images.overview} alt="Mountain landscape in Morocco's Atlas Mountains" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A PRIVATE LUXURY CYCLING JOURNEY</span>
            <h2 className="at-heading">Seven Days Discovering Morocco by Bicycle</h2>
            <p className="at-copy">
              The Morocco Luxury Cycling Tour is a seven-day private journey
              designed to combine cycling, mountain scenery and opportunities
              to discover the culture of Morocco. Starting in Marrakech,
              travel towards the Atlas Mountains and explore a landscape
              of beautiful valleys, traditional villages and dramatic peaks.
            </p>
            <p className="at-copy">
              The cycling programme can be discussed around your preferred
              style. Whether you enjoy scenic road cycling, mountain biking
              or a combination of routes, the itinerary can be shaped around
              your experience, fitness and interests.
            </p>
            <p className="at-copy">
              The luxury element is built around a private travel experience,
              personalised planning and accommodation selected according
              to your preferences. Exact properties, services, daily routes
              and support arrangements are confirmed before booking.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the itinerary →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE CYCLING EXPERIENCE</span>
            <h2 className="at-heading">A More Personal Way to Discover Morocco</h2>
            <p className="at-copy">
              A private luxury cycling journey gives you the opportunity
              to discover Morocco at a pace that suits your interests.
              Explore mountain landscapes, enjoy selected cycling routes
              and take time to appreciate the places you visit.
            </p>
            <p className="at-copy">
              Your preferred cycling style, accommodation expectations
              and travel dates can be discussed before the programme is
              confirmed. The route can be adapted to balance riding,
              cultural discovery and time to relax.
            </p>
            <p className="at-copy">
              Share your group size, riding experience and expectations
              with our team. We can then discuss the most suitable
              arrangements for your seven-day journey.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Morocco Luxury Cycling Tour</h3>
            <p>Seven days of private cycling, mountain scenery and cultural discovery in Morocco.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>7 days / 6 nights</strong></li>
              <li><span>Starting city</span><strong>Marrakech</strong></li>
              <li><span>Main region</span><strong>Atlas Mountains</strong></li>
              <li><span>Tour format</span><strong>Private luxury</strong></li>
              <li><span>Programme</span><strong>Personalised</strong></li>
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
              <h2 className="at-heading">Highlights of the Morocco Luxury Cycling Tour</h2>
            </div>
            <p>
              Discover the Atlas Mountains through private cycling,
              carefully planned travel arrangements, beautiful landscapes
              and opportunities to experience local culture.
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
            <img src={images.valley} alt="Atlas Mountain valley and cycling landscape in Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTES & TERRAIN</span>
            <h2 className="at-heading">Discover the Atlas Mountains at Your Own Pace</h2>
            <p className="at-copy">
              The Atlas Mountains offer a variety of cycling environments,
              from scenic mountain roads and quiet rural routes to
              off-road tracks connecting traditional villages and valleys.
            </p>
            <p className="at-copy">
              The final route depends on your preferred cycling discipline,
              experience and fitness. The programme can be discussed
              around road cycling, mountain biking or a combination of
              suitable routes.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Scenic mountain roads and valley routes</li>
              <li><span>02</span>Traditional villages and rural landscapes</li>
              <li><span>03</span>Selected off-road cycling opportunities</li>
              <li><span>04</span>Routes adapted to your riding preferences</li>
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
              Review the main details of this private seven-day cycling
              experience. Exact routes, distances, elevation, accommodation
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
          <img src={images.village} alt="Traditional Amazigh village in the Atlas Mountains of Morocco" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE TRAIL</span>
          <h2 className="at-heading">Discover the Culture and Hospitality of Morocco</h2>
          <p className="at-copy">
            A luxury cycling journey through Morocco is about more than
            the routes. Between riding stages, discover the character
            of mountain communities, traditional architecture and
            regional food while enjoying time to appreciate the scenery.
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
              <h2 className="at-heading">The Landscapes of Your Moroccan Cycling Journey</h2>
            </div>
            <p>
              Explore the mountain scenery, villages and cycling
              landscapes that make the Atlas Mountains a memorable
              destination for a private cycling holiday.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.atlas} alt="Atlas Mountains cycling landscape" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Mountain valley in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional Moroccan mountain village" /></div>
            <div className="at-gallery-item"><img src={images.luxury} alt="Cycling experience in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Mountain biking in the Atlas Mountains" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">SEVEN DAYS IN MOROCCO</span>
              <h2 className="at-heading">Morocco Luxury Cycling Tour Itinerary</h2>
            </div>
            <p>
              A private seven-day journey connecting Marrakech with
              the Atlas Mountains. The programme combines travel,
              selected cycling stages and time to discover Morocco.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The itinerary below provides an overview of the experience.
            Daily distances, elevation gain, exact riding routes,
            accommodation properties and included services depend
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
              <h2 className="at-heading">What Is Included in Your Luxury Cycling Tour?</h2>
            </div>
            <p>
              The final inclusions depend on the package selected.
              Review the services below and check your personalised
              proposal before confirming your seven-day trip.
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
              <h2 className="at-heading">Preparing for Your Luxury Cycling Journey</h2>
            </div>
            <p>
              Prepare your bicycle, equipment and fitness before
              travelling to Morocco. Good preparation helps you
              enjoy the cycling programme comfortably.
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
            <img src={images.cycling} alt="Cycling route in the Atlas Mountains of Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">Difficulty and Cycling Experience</h2>
            <p className="at-copy">
              The difficulty of this luxury cycling journey depends
              on the selected routes, daily distances, elevation gain
              and cycling discipline. The Atlas Mountains offer varied
              terrain, from scenic roads to more demanding mountain tracks.
            </p>
            <p className="at-copy">
              Tell us about your riding background, fitness level and
              preferred cycling style. This helps us discuss a suitable
              programme and realistic daily stages for your group.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty, distances,
              elevation figures, routes and accommodation arrangements
              must be confirmed against the actual itinerary before
              booking. This page does not promise a fixed technical
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
              Find answers to common questions about this private
              seven-day cycling journey in Morocco. Contact our
              team if you need more details before planning your trip.
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
          <img src={images.final} alt="Mountain landscape in Morocco's Atlas Mountains" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR MOROCCAN CYCLING JOURNEY STARTS HERE</span>
          <h2>Discover Morocco in Comfort, One Ride at a Time</h2>
          <p>
            Tell us your preferred dates, group size, accommodation
            expectations and cycling experience. We will discuss
            a private seven-day luxury cycling journey planned
            around the way you want to discover Morocco.
          </p>
          <a className="at-button" href="/contact">
            Plan Your Luxury Cycling Tour <span>→</span>
          </a>
        </div>
      </section>

      <section className="at-section at-enquiry-section" id="enquiry">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">START PLANNING YOUR RIDE</span>
              <h2 className="at-heading">
                Plan Your Morocco Luxury Cycling Tour
              </h2>
            </div>
            <p>
              Tell us your preferred dates, group size, cycling experience
              and preferred riding style. Share your accommodation
              expectations, daily riding preferences and any transfer or
              support requirements so we can discuss the right private
              seven-day luxury cycling journey for you.
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
              <h2 className="at-heading">More Cycling Adventures in Morocco</h2>
            </div>
            <p>
              Discover more ways to experience Morocco, from scenic
              Atlas cycling journeys to electric mountain biking
              and private cycling experiences from Marrakech.
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