
import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Private Luxury Endurance Cycling Camp – 7 Days | Mountain Bike Morocco",
  description:
    "Experience a 7day private luxury endurance cycling camp in Morocco. Enjoy personalised road cycling, High Atlas mountain routes, professional ride planning and tailored accommodation arrangements.",
  alternates: {
    canonical:
      "/cycling-trips/trip/private-luxury-endurance-cycling-camp-7-day",
  },
};

const images = {
  hero: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  overview: "/images/atlas-berber-valley-bike.JPG",
  mountains: "/images/atlas-mountains-cycling-expedition.jpg",
  road: "/images/atlas-mountains-road-cycling-tour.jpg",
  village: "/images/morocco-berber-valley.jpg",
  valley: "/images/adventure-road-cycling-morocco.jpg",
  cycling: "/images/road-cycling-tour-morocco.jpg",
  final: "/images/atlas-cycling-adventure.jpg",
};

const facts = [
  ["Duration", "7 days"],
  ["Destination", "Morocco"],
  ["Region", "Atlas Mountains and selected cycling regions"],
  ["Starting point", "To be confirmed"],
  ["Cycling style", "Road cycling and endurance training"],
  ["Difficulty", "Adapted to the selected training programme"],
  ["Experience", "Experienced cyclists recommended"],
  ["Tour format", "Private luxury cycling camp"],
  ["Best season", "Spring and autumn, subject to conditions"],
];

const highlights = [
  {
    number: "01",
    title: "A Private Endurance Cycling Camp",
    text: "Spend seven days focused on cycling, endurance and discovery with a programme planned around your fitness, riding experience and personal objectives.",
  },
  {
    number: "02",
    title: "Ride the Atlas Mountains",
    text: "Explore selected mountain roads, highland landscapes and scenic valleys across Morocco, with route choices adapted to your group's training goals.",
  },
  {
    number: "03",
    title: "Personalised Training Programme",
    text: "Build a week of progressive riding with planned cycling days, recovery opportunities and route variations according to your experience and preferred intensity.",
  },
  {
    number: "04",
    title: "A More Comfortable Cycling Experience",
    text: "Discuss boutique or luxury accommodation, private transfers, meals and additional support services as part of your personalised camp proposal.",
  },
];

const beyondTrail = [
  {
    title: "Atlas Mountain Landscapes",
    text: "Discover the changing scenery of Morocco's mountain regions, from rural valleys to dramatic mountain roads.",
  },
  {
    title: "Traditional Communities",
    text: "Experience the character of the High Atlas and its traditional settlements along selected cycling routes.",
  },
  {
    title: "Scenic Mountain Roads",
    text: "Enjoy a selection of roads through the Atlas region, with route planning based on your endurance goals and cycling ability.",
  },
  {
    title: "Recovery and Relaxation",
    text: "Balance your riding programme with time to rest and enjoy the accommodation and additional services confirmed for your camp.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Morocco and Cycling Camp Welcome",
    location: "Agreed arrival destination – Morocco",
    distance: "To be confirmed",
    riding: "Arrival, bicycle preparation and introductory ride if agreed",
    image: images.overview,
    text: "Arrive at the agreed meeting point and begin your private endurance cycling camp. Meet the local team, review the seven-day programme and discuss your cycling objectives, experience and preferred riding pace. Allow time for bicycle preparation and equipment checks. If arrival time and conditions permit, an introductory ride can be arranged to familiarise yourself with the local roads. The meeting point, transfer arrangements, overnight accommodation and any introductory riding will be confirmed in your personalised itinerary.",
    details: [
      "Meet the team at the agreed arrival point",
      "Review your personal cycling objectives",
      "Discuss the seven-day training programme",
      "Check bicycle condition and equipment",
      "Review the planned routes and local conditions",
      "Complete an introductory ride if agreed",
      "Settle into the confirmed accommodation",
      "Prepare for the first full cycling day",
    ],
  },
  {
    day: "02",
    title: "Endurance Ride Through the Atlas Foothills",
    location: "Atlas foothills – selected cycling route",
    distance: "To be confirmed",
    riding: "Endurance road cycling",
    image: images.road,
    text: "Begin the riding programme with a selected endurance route through the Atlas foothills. The day is planned around your group's fitness, experience and training objectives, allowing time to settle into the rhythm of the camp. Enjoy changing mountain scenery and countryside roads while building consistency over the first full day. Exact distance, elevation gain, climbing profile and support arrangements will be confirmed once the route has been selected.",
    details: [
      "Review the day's route and riding objectives",
      "Prepare bicycles and personal equipment",
      "Begin the selected endurance ride",
      "Ride through the Atlas foothills",
      "Include planned hydration and refreshment stops",
      "Adjust pace according to the agreed programme",
      "Complete the planned route",
      "Allow time for recovery after the ride",
    ],
  },
  {
    day: "03",
    title: "Mountain Climbing and Endurance Development",
    location: "High Atlas region – selected mountain roads",
    distance: "To be confirmed",
    riding: "Climbing and endurance cycling",
    image: images.mountains,
    text: "Continue the camp with a route selected for mountain riding and sustained climbing opportunities. The day's profile will be adapted to your cycling background and the objectives discussed before the trip. Enjoy the scenery of the High Atlas while developing your endurance over the selected roads. The exact climb, distance, elevation gain and intensity will depend on the confirmed route and local conditions.",
    details: [
      "Review the selected climbing route",
      "Prepare for the day's mountain ride",
      "Begin the planned road cycling programme",
      "Ride selected mountain roads",
      "Include suitable recovery and refreshment breaks",
      "Manage effort according to your training goals",
      "Finish at the agreed destination",
      "Review the following day's programme",
    ],
  },
  {
    day: "04",
    title: "Active Recovery and Scenic Cycling",
    location: "Selected Atlas valley – Morocco",
    distance: "To be confirmed",
    riding: "Recovery-oriented cycling or rest day",
    image: images.valley,
    text: "The fourth day offers an opportunity to balance the training programme with recovery. Depending on your fitness, previous riding days and preferences, the programme can include an easier scenic ride or additional time away from the bicycle. Enjoy the surrounding landscapes and use the day to recover before the next endurance sessions. The final choice between recovery riding and rest will be discussed during camp planning.",
    details: [
      "Review fatigue and recovery needs",
      "Choose the agreed recovery programme",
      "Enjoy an easier ride if included",
      "Explore the surrounding countryside",
      "Allow time for rest and relaxation",
      "Discuss progress with the cycling team",
      "Prepare equipment for the next ride",
      "Confirm the following day's route",
    ],
  },
  {
    day: "05",
    title: "A Full Day of Endurance Road Cycling",
    location: "Atlas Mountains – selected endurance route",
    distance: "To be confirmed",
    riding: "Longer endurance cycling session",
    image: images.cycling,
    text: "Return to the endurance programme with a longer selected cycling route. The day's ride will be designed around your objectives, fitness and the progression of the week. Enjoy extended time on the bicycle and explore more of the mountain landscapes and roads selected for your camp. Daily distance, elevation gain, route profile, refreshment stops and any support vehicle arrangements will be confirmed before departure.",
    details: [
      "Review the longer endurance route",
      "Prepare hydration, nutrition and equipment",
      "Start the selected cycling programme",
      "Ride through the agreed mountain region",
      "Include planned stops and refreshments",
      "Manage effort according to your objectives",
      "Complete the planned endurance session",
      "Allow time for post-ride recovery",
    ],
  },
  {
    day: "06",
    title: "Final Mountain Ride and Cycling Camp Highlights",
    location: "Selected Atlas cycling region – Morocco",
    distance: "To be confirmed",
    riding: "Final endurance or scenic cycling session",
    image: images.road,
    text: "Enjoy the final full cycling day of your private camp. Depending on your progress and recovery, the route can focus on another endurance session, selected climbs or a more relaxed scenic ride. The programme will be adapted to your group's condition after the previous days, allowing you to finish the riding week at an appropriate pace. The final route and riding objectives will be agreed before the camp.",
    details: [
      "Review the final full-day cycling objectives",
      "Prepare bicycles and equipment",
      "Set out on the selected mountain route",
      "Enjoy the final planned cycling session",
      "Discover more of the surrounding landscapes",
      "Take suitable breaks and refreshments",
      "Return to the agreed accommodation",
      "Review the week's cycling experience",
    ],
  },
  {
    day: "07",
    title: "Departure from Morocco",
    location: "Agreed departure destination – Morocco",
    distance: "No scheduled cycling",
    riding: "Departure and transfer arrangements",
    image: images.final,
    text: "Enjoy breakfast and a relaxed final morning according to your departure schedule and confirmed accommodation arrangements. Complete any final travel arrangements and meet your agreed transfer if included in your proposal. Your private luxury endurance cycling camp comes to an end after seven days of cycling, mountain scenery and time spent discovering Morocco.",
    details: [
      "Enjoy your final morning in Morocco",
      "Complete accommodation check-out",
      "Review departure arrangements",
      "Meet the agreed transfer if included",
      "Travel to the confirmed departure point",
      "Complete your seven-day cycling camp",
    ],
  },
];

const inclusions = [
  "Seven-day private cycling camp programme planning",
  "Route planning based on your cycling objectives",
  "Local cycling support as agreed in your itinerary",
  "Luxury or boutique accommodation only when specifically included",
  "Bicycle rental if specifically included",
  "Transfers specified in your final proposal",
  "Support vehicle if explicitly included in your proposal",
  "Meals and refreshments only when listed in your proposal",
  "Additional comfort and recovery services if agreed",
  "Any coaching or training services only when explicitly confirmed",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Bicycle unless included in your proposal",
  "Personal cycling equipment and clothing",
  "Accommodation unless specifically included",
  "Meals and drinks not specified in your itinerary",
  "Personal expenses and tips",
  "Additional accommodation or nights",
  "Professional coaching unless specifically agreed",
  "Services not specifically listed in your proposal",
];

const preparation = [
  {
    title: "Prepare for Endurance Riding",
    text: "Build a consistent cycling base before travelling. Your fitness and training background should be discussed so the seven-day programme can be planned at an appropriate level.",
  },
  {
    title: "Bring a Suitable Bicycle",
    text: "Use a bicycle in good mechanical condition, with suitable gearing, reliable brakes and tyres appropriate for the confirmed road surfaces and routes.",
  },
  {
    title: "Plan Your Cycling Nutrition",
    text: "Bring your preferred riding nutrition and hydration equipment. Any meals, refreshments and additional nutrition support included in the camp will be specified in your proposal.",
  },
  {
    title: "Pack for Mountain Conditions",
    text: "Mountain weather can change during the day. Bring suitable cycling layers, a windproof jacket, sun protection, gloves, glasses and appropriate footwear.",
  },
];

const faqs = [
  {
    q: "How long is the Private Luxury Endurance Cycling Camp?",
    a: "The camp is planned as a seven-day private cycling experience in Morocco. The programme combines selected cycling routes with the accommodation and travel arrangements confirmed for your group.",
  },
  {
    q: "Who is this endurance cycling camp designed for?",
    a: "The camp is intended for cyclists interested in a dedicated week of endurance riding and mountain road cycling. Your experience, fitness, usual riding distances and objectives should be discussed before the route programme is confirmed.",
  },
  {
    q: "Is this a private cycling camp?",
    a: "The experience is designed to be planned as a private camp. Your dates, group size, cycling programme and travel arrangements will be confirmed during the booking process.",
  },
  {
    q: "Where does the cycling camp take place?",
    a: "The programme is planned around selected cycling regions in Morocco, including the Atlas Mountains. The exact locations and routes will depend on your objectives and the itinerary agreed for your camp.",
  },
  {
    q: "Where does the camp start and finish?",
    a: "The meeting point and departure destination will be confirmed in your trip proposal. Transfers from Marrakech or another agreed location can be discussed during planning.",
  },
  {
    q: "How many kilometres will we cycle each day?",
    a: "Daily distances have not been fixed on this page. They will depend on the selected routes, elevation gain, your group's fitness and the agreed training programme. Exact figures will be confirmed in your itinerary.",
  },
  {
    q: "How much climbing should we expect?",
    a: "The elevation gain depends on the selected mountain roads and daily route profiles. Your training objectives and climbing experience will help determine the programme. Exact figures will be confirmed before the trip.",
  },
  {
    q: "Is the camp suitable for beginner cyclists?",
    a: "This camp is intended for riders interested in endurance cycling. Suitability depends on your current fitness, cycling experience and the selected routes. Share your usual riding distances and climbing experience so an appropriate programme can be discussed.",
  },
  {
    q: "Does the camp include professional cycling coaching?",
    a: "Coaching and structured training services are not automatically included. If you require a coaching-led programme, this should be discussed and specifically confirmed in your proposal.",
  },
  {
    q: "Is luxury accommodation included?",
    a: "Accommodation arrangements depend on the package agreed for your camp. The accommodation category, included nights, room arrangements and meal basis will be clearly specified in your final proposal.",
  },
  {
    q: "Are meals included during the camp?",
    a: "Meals and refreshments depend on the package agreed for your trip. Any included breakfasts, lunches, dinners, snacks and refreshments will be listed in your final itinerary.",
  },
  {
    q: "Is a support vehicle available?",
    a: "A support vehicle can be discussed as part of your camp arrangements. Its availability, operating schedule, services and costs must be confirmed in your final proposal.",
  },
  {
    q: "Can I bring my own bicycle?",
    a: "You can discuss bringing your own bicycle or arranging a rental. Bicycle transport, availability, specifications and rental costs should be confirmed before booking.",
  },
  {
    q: "Can the programme be adapted to my fitness level?",
    a: "The programme can be discussed around your cycling background, fitness, preferred riding pace and objectives. The final routes and daily riding schedule will depend on those details and local conditions.",
  },
  {
    q: "What is the best season for an endurance cycling camp in Morocco?",
    a: "Spring and autumn can offer suitable conditions for cycling in many parts of Morocco. Weather and temperatures vary by region and altitude, so the final route selection should take local conditions into account.",
  },
  {
    q: "What should I bring for the cycling camp?",
    a: "Bring a helmet, cycling clothing, gloves, shoes, hydration equipment, sun protection, a windproof layer and personal bicycle repair supplies. Bring any personal items and nutrition products you prefer for endurance riding.",
  },
];

const relatedTours = [
  {
    category: "ROAD CYCLING",
    title: "High Atlas Luxury Cycling Escape",
    text: "Enjoy a five-day private cycling escape through selected mountain roads and landscapes of the High Atlas.",
    image: "/images/atlas-mountains-road-cycling-tour.jpg",
    href: "/cycling-trips/trip/high-atlas-luxury-cycling-escape-5-day",
  },
  {
    category: "ROAD CYCLING",
    title: "Private Morocco Road Cycling Holiday",
    text: "Discover Morocco on a private seven-day road cycling holiday planned around your group and preferred routes.",
    image: "/images/road-cycling-holiday-morocco.jpg",
    href: "/cycling-trips/trip/private-morocco-road-cycling-holiday-7-day",
  },
  {
    category: "ROAD CYCLING",
    title: "South Morocco Road Cycling Journey",
    text: "Explore southern Morocco on a multi-day road cycling journey through changing landscapes.",
    image: "/images/road-cycling-morocco.jpg",
    href: "/cycling-trips/trip/south-morocco-road-cycling-journey-6-day",
  },
];

export default function PrivateLuxuryEnduranceCyclingCamp7DaysPage() {
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

        .atlas-tour .at-enquiry-section { background: var(--green); }
        .atlas-tour .at-enquiry-section .at-eyebrow,
        .atlas-tour .at-enquiry-section .at-heading,
        .atlas-tour .at-enquiry-section .at-section-head > p { color: #fff !important; }

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
          <img src={images.hero} alt="Road cycling through the Atlas Mountains in Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · ATLAS MOUNTAINS · PRIVATE ENDURANCE CAMP · 7 DAYS</span>
          <h1>Private Luxury Endurance Cycling Camp</h1>
          <p className="at-hero-description">
            Seven days dedicated to cycling,
            endurance and discovery in Morocco.
            Ride selected Atlas mountain roads,
            develop your endurance and enjoy
            a private cycling programme planned
            around your experience, fitness
            and personal objectives.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Cycling Camp <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>07 DAYS</strong><span>Endurance camp</span></div>
            <div><strong>PRIVATE</strong><span>Personal programme</span></div>
            <div><strong>ATLAS</strong><span>Mountain roads</span></div>
            <div><strong>LUXURY</strong><span>Tailored experience</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>7 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Morocco</strong></div>
          <div className="at-fact"><span>Experience</span><strong>Private Cycling Camp</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Endurance Road Cycling</strong></div>
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
            <img src={images.overview} alt="Atlas mountain valley and countryside in Morocco" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A SEVEN-DAY PRIVATE CYCLING EXPERIENCE</span>
            <h2 className="at-heading">Discover Morocco Through a Private Endurance Cycling Camp</h2>
            <p className="at-copy">
              The Private Luxury Endurance
              Cycling Camp is a seven-day
              experience for cyclists who want
              to dedicate a week to riding,
              endurance and mountain scenery
              in Morocco.
            </p>
            <p className="at-copy">
              Explore selected roads through
              the Atlas region with a programme
              planned around your fitness,
              cycling background, preferred
              pace and personal objectives.
            </p>
            <p className="at-copy">
              Daily routes, distances, elevation
              gain, accommodation standards,
              support services, meals and
              transfers will be discussed and
              confirmed in your personalised
              camp proposal.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the seven-day journey →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE CYCLING CAMP</span>
            <h2 className="at-heading">Seven Days of Endurance, Mountain Roads and Relaxation</h2>
            <p className="at-copy">
              This private camp gives you
              a dedicated week to discover
              Morocco by bicycle while
              following a programme shaped
              around your cycling objectives.
              Enjoy selected routes and a
              personalised riding schedule.
            </p>
            <p className="at-copy">
              The week can combine endurance
              rides, mountain climbing,
              recovery opportunities and
              scenic cycling. The balance
              between training and relaxation
              will depend on your fitness,
              experience and preferences.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Private Luxury Endurance Cycling Camp</h3>
            <p>A seven-day private cycling experience planned around your endurance goals, preferred routes and travel style.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>7 days</strong></li>
              <li><span>Destination</span><strong>Morocco</strong></li>
              <li><span>Tour format</span><strong>Private camp</strong></li>
              <li><span>Route style</span><strong>Mountain road cycling</strong></li>
              <li><span>Experience</span><strong>Endurance focused</strong></li>
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
              <h2 className="at-heading">Highlights of Your Private Luxury Endurance Cycling Camp</h2>
            </div>
            <p>
              Enjoy a week of private
              cycling, mountain scenery,
              endurance-focused routes
              and a more comfortable
              travel experience in Morocco.
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
            <img src={images.road} alt="Scenic mountain road in the Atlas Mountains of Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE &amp; TERRAIN</span>
            <h2 className="at-heading">Explore the Mountain Roads of Morocco</h2>
            <p className="at-copy">
              The seven-day camp is planned
              around selected road cycling
              routes in Morocco, with a focus
              on the Atlas region and its
              mountain landscapes.
              Routes can be selected to
              include endurance riding,
              climbing and scenic roads.
            </p>
            <p className="at-copy">
              The daily riding programme
              depends on your group's
              experience, training objectives,
              local conditions and the
              confirmed route. Route
              direction, distance and
              elevation gain will be agreed
              during camp planning.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Seven-day private endurance programme</li>
              <li><span>02</span>Selected Atlas mountain roads</li>
              <li><span>03</span>Endurance rides and climbing opportunities</li>
              <li><span>04</span>Recovery time and comfort arrangements planned to your preferences</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR CYCLING CAMP</span>
            <h2 className="at-heading">Tour Information</h2>
            <p className="at-copy">
              Review the main details of
              this seven-day private luxury
              endurance cycling camp.
              Exact daily distances,
              elevation, route locations,
              accommodation category,
              support services, meals and
              transfers will be confirmed
              in your trip proposal.
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
          <img src={images.village} alt="Traditional village in the Atlas Mountains of Morocco" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover the Landscapes and Culture of Morocco</h2>
          <p className="at-copy">
            Your cycling camp is also
            an opportunity to experience
            the landscapes and rural
            character of Morocco.
            Along selected routes, discover
            mountain scenery, traditional
            settlements and the changing
            atmosphere of the Atlas region.
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
              <span className="at-eyebrow">CYCLING CAMP MOMENTS</span>
              <h2 className="at-heading">Explore the Scenery Along Your Cycling Week</h2>
            </div>
            <p>
              Discover mountain roads,
              traditional villages, valleys
              and dramatic landscapes
              throughout your private
              seven-day cycling experience.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="Mountain landscape in the Atlas Mountains" /></div>
            <div className="at-gallery-item"><img src={images.road} alt="Road cycling route through the Atlas Mountains" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional village in the Moroccan countryside" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Valley landscape in the Atlas region" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Road cycling adventure in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">SEVEN DAYS IN MOROCCO</span>
              <h2 className="at-heading">Private Luxury Endurance Cycling Camp Itinerary</h2>
            </div>
            <p>
              Seven days combining
              selected cycling routes,
              endurance sessions,
              mountain scenery and
              recovery opportunities.
              The final programme is
              tailored to your group.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines a proposed
            structure for the seven-day camp.
            Exact route selection, daily distance,
            elevation gain, training intensity,
            meeting point, accommodation,
            support services and transfer
            arrangements depend on the
            programme agreed with your group.
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
              <span className="at-eyebrow">YOUR CAMP ARRANGEMENTS</span>
              <h2 className="at-heading">What Is Included in Your Private Cycling Camp?</h2>
            </div>
            <p>
              Final inclusions are confirmed
              in your booking proposal.
              Check your personalised itinerary
              for accommodation, transport,
              meals, bicycle support and
              additional services included
              in your seven-day experience.
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
              <h2 className="at-heading">Preparing for Your Endurance Cycling Camp</h2>
            </div>
            <p>
              Prepare your fitness,
              bicycle and equipment
              for a week of cycling
              through mountain roads
              and landscapes in Morocco.
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
            <img src={images.cycling} alt="Cycling through the mountain landscapes of Morocco" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">Difficulty and Cycling Experience</h2>
            <p className="at-copy">
              A seven-day endurance cycling
              camp can include consecutive
              riding days, mountain climbs
              and longer road cycling sessions.
              The overall difficulty depends
              on the selected routes,
              daily distances, elevation gain,
              training intensity and weather.
            </p>
            <p className="at-copy">
              Tell us about your current
              fitness, usual riding distances,
              climbing experience and
              preferred training objectives.
              This information will help us
              discuss a suitable programme
              for your private cycling camp.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty,
              daily riding distance, elevation gain,
              training intensity, road conditions,
              accommodation and support services
              must be checked against the actual
              itinerary before booking. This page
              does not promise fixed mileage,
              elevation or coaching services.
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
              Find answers to common questions
              about the Private Luxury Endurance
              Cycling Camp. Contact our team
              if you need more details before
              planning your seven days in Morocco.
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
          <img src={images.final} alt="Mountain landscape in Morocco" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR PRIVATE CYCLING CAMP STARTS HERE</span>
          <h2>Ready to Plan Your Luxury Endurance Cycling Camp?</h2>
          <p>
            Tell us your preferred dates,
            group size, cycling experience,
            fitness level and endurance
            objectives. We can discuss
            the daily routes, accommodation,
            support services, transfers
            and arrangements for your
            seven-day cycling experience.
          </p>
          <a className="at-button" href="/contact">Plan Your Cycling Camp <span>→</span></a>
        </div>
      </section>

      <section className="at-section at-enquiry-section" id="enquiry">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">PLAN YOUR PRIVATE ENDURANCE CYCLING CAMP</span>
              <h2 className="at-heading">
                Tell Us About Your Luxury Endurance Cycling Camp in Morocco
              </h2>
            </div>
            <p>
              Share your preferred dates, group size, cycling experience,
              fitness level and endurance objectives. Our team can help
              discuss suitable routes, accommodation, transfers and
              support arrangements for your seven-day private cycling camp.
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
              Discover more ways to experience
              Morocco by bike, from private
              luxury cycling escapes in the
              Atlas Mountains to longer
              road cycling journeys across
              the country.
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
              <a href="/cycling-trips/road">Road Cycling</a>
            </div>
          </div>
          <div>
            <h3>Destinations</h3>
            <div className="at-footer-links">
              <a href="/destinations">All Destinations</a>
              <a href="/destinations/atlas-mountains">Atlas Mountains</a>
              <a href="/destinations/anti-atlas">Anti-Atlas</a>
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
