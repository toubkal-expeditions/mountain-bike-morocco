import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Luxury Family Cycling Holiday – 6 Days | Mountain Bike Morocco",
  description:
    "Enjoy a 6-day private luxury family cycling holiday in Morocco. Discover scenic Atlas Mountain routes, traditional villages and relaxed cycling experiences with a programme adapted to your family.",
  alternates: {
    canonical:
      "/cycling-trips/trip/luxury-family-cycling-holiday-6-day",
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
  ["Duration", "6 days"],
  ["Destination", "Morocco"],
  ["Region", "Atlas Mountains and selected regions"],
  ["Starting point", "To be confirmed"],
  ["Cycling style", "Family-friendly cycling"],
  ["Difficulty", "Adapted to family members"],
  ["Experience", "Families and mixed abilities"],
  ["Tour format", "Private luxury family holiday"],
  ["Best season", "Spring and autumn, subject to conditions"],
];

const highlights = [
  {
    number: "01",
    title: "A Private Family Cycling Holiday",
    text: "Enjoy six days discovering Morocco together on a private cycling holiday planned around your family's ages, experience, interests and preferred pace.",
  },
  {
    number: "02",
    title: "Scenic Atlas Mountain Landscapes",
    text: "Explore selected routes through beautiful mountain scenery, peaceful valleys and traditional villages, with daily cycling adapted to your family.",
  },
  {
    number: "03",
    title: "Cycling for Different Abilities",
    text: "Create a flexible programme with manageable rides, suitable breaks and route choices that take account of the experience and comfort of each family member.",
  },
  {
    number: "04",
    title: "Comfort and Family Time",
    text: "Discuss boutique or luxury accommodation, private transfers, family room arrangements and additional services to create a comfortable holiday.",
  },
];

const beyondTrail = [
  {
    title: "Atlas Mountain Landscapes",
    text: "Discover the changing scenery of Morocco's mountain regions, from green valleys to dramatic mountain views.",
  },
  {
    title: "Traditional Berber Villages",
    text: "Experience the character of rural Atlas communities and discover traditional settlements along selected routes.",
  },
  {
    title: "Local Culture",
    text: "Enjoy opportunities to discover Moroccan hospitality, local traditions and the everyday life of mountain communities.",
  },
  {
    title: "Time Together",
    text: "Balance family cycling with opportunities to relax, explore and enjoy the destinations included in your holiday.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Morocco and Family Welcome",
    location: "Agreed arrival destination – Morocco",
    distance: "To be confirmed",
    riding: "Arrival and optional introductory cycling",
    image: images.overview,
    text: "Arrive in Morocco and begin your private family cycling holiday. Meet the local team, review the programme and discuss the cycling experience and preferences of each family member. Allow time to settle into the confirmed accommodation and prepare bicycles and equipment. If your arrival schedule and local conditions permit, an easy introductory ride can be arranged. The meeting point, transfer arrangements and overnight accommodation will be confirmed in your personalised itinerary.",
    details: [
      "Meet the team at the agreed arrival point",
      "Review the six-day family holiday programme",
      "Discuss the ages and cycling experience of participants",
      "Check bicycles and personal equipment",
      "Review the selected routes and local conditions",
      "Arrange an introductory ride if agreed",
      "Settle into the confirmed accommodation",
      "Enjoy your first evening in Morocco",
    ],
  },
  {
    day: "02",
    title: "Family Cycling Through the Atlas Foothills",
    location: "Atlas foothills – selected family route",
    distance: "To be confirmed",
    riding: "Easy to moderate family cycling",
    image: images.road,
    text: "Start your cycling adventure with a selected route through the Atlas foothills. The day's ride is planned around the youngest and least experienced members of the family, with a comfortable pace and suitable opportunities to stop and enjoy the scenery. Discover the surrounding countryside and enjoy your first full day together on the bicycle. The route, distance, surface and elevation will be confirmed according to your family's needs and local conditions.",
    details: [
      "Review the day's family cycling route",
      "Prepare bicycles and safety equipment",
      "Begin the selected introductory ride",
      "Discover the scenery of the Atlas foothills",
      "Include suitable rest and refreshment stops",
      "Adjust the pace to the family",
      "Complete the agreed cycling route",
      "Return to the confirmed accommodation",
    ],
  },
  {
    day: "03",
    title: "Discover Mountain Villages and Scenic Valleys",
    location: "Selected Atlas valley – Morocco",
    distance: "To be confirmed",
    riding: "Scenic family cycling",
    image: images.village,
    text: "Continue your family adventure through selected mountain landscapes and traditional villages. This day combines cycling with opportunities to discover the countryside and enjoy the character of the Atlas region. The route can be adapted to the ages and abilities of your family, with time for photographs, refreshments and breaks along the way. Exact locations and cycling arrangements will be confirmed in your holiday itinerary.",
    details: [
      "Prepare for a scenic family cycling day",
      "Ride through the selected countryside route",
      "Discover traditional mountain settlements",
      "Enjoy the surrounding Atlas landscapes",
      "Include regular family-friendly breaks",
      "Allow time for photographs and exploration",
      "Complete the planned cycling experience",
      "Enjoy a relaxed evening",
    ],
  },
  {
    day: "04",
    title: "A Relaxed Day of Cycling and Discovery",
    location: "Selected mountain and countryside region",
    distance: "To be confirmed",
    riding: "Easy cycling or alternative family activities",
    image: images.valley,
    text: "Enjoy a more flexible day during your family holiday. Depending on your preferences, the programme can include an easier cycling route, additional time to explore the surrounding area or a day with less riding. This is an opportunity to enjoy Morocco at a relaxed pace while keeping the experience suitable for everyone. The final activities and arrangements will depend on your family's interests and the services agreed for your holiday.",
    details: [
      "Discuss the family's preferred activities",
      "Choose the agreed cycling or rest programme",
      "Enjoy an easier ride if included",
      "Discover the surrounding countryside",
      "Allow time for relaxation",
      "Enjoy family time away from the bicycle",
      "Prepare equipment for the next day",
      "Review the following day's arrangements",
    ],
  },
  {
    day: "05",
    title: "A Memorable Family Cycling Adventure",
    location: "Selected Atlas cycling region – Morocco",
    distance: "To be confirmed",
    riding: "Family cycling adapted to ability",
    image: images.cycling,
    text: "Enjoy another day discovering Morocco together by bicycle. The selected route can include beautiful countryside, mountain scenery and opportunities to experience the local character of the region. The distance and terrain will be chosen with the family's comfort and cycling experience in mind. There will be time for suitable breaks and opportunities to enjoy the surroundings before returning to your accommodation.",
    details: [
      "Review the final full-day cycling route",
      "Prepare bicycles and personal equipment",
      "Begin the selected family cycling experience",
      "Discover more of the Atlas countryside",
      "Include suitable breaks and refreshments",
      "Adapt the riding pace to everyone",
      "Complete the agreed route",
      "Enjoy your final full evening together",
    ],
  },
  {
    day: "06",
    title: "Final Morning and Departure from Morocco",
    location: "Agreed departure destination – Morocco",
    distance: "No scheduled cycling",
    riding: "Departure and transfer arrangements",
    image: images.final,
    text: "Enjoy a relaxed final morning and breakfast according to your departure schedule and confirmed accommodation arrangements. Complete your check-out and meet your agreed transfer if included in your proposal. Your six-day luxury family cycling holiday comes to an end after a memorable experience discovering Morocco's landscapes, villages and cycling routes together.",
    details: [
      "Enjoy your final morning in Morocco",
      "Complete accommodation check-out",
      "Review departure arrangements",
      "Meet the agreed transfer if included",
      "Travel to the confirmed departure point",
      "Complete your six-day family holiday",
    ],
  },
];

const inclusions = [
  "Six-day private family holiday programme planning",
  "Route planning adapted to family members",
  "Local cycling support as agreed in your itinerary",
  "Luxury or boutique accommodation only when specifically included",
  "Family room arrangements when confirmed",
  "Bicycle rental if specifically included",
  "Transfers specified in your final proposal",
  "Support vehicle if explicitly included",
  "Meals and refreshments only when listed",
  "Additional family activities if agreed",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Bicycles unless included in your proposal",
  "Personal cycling equipment and clothing",
  "Accommodation unless specifically included",
  "Meals and drinks not specified in your itinerary",
  "Personal expenses and tips",
  "Additional accommodation or nights",
  "Optional activities not listed in your proposal",
  "Services not specifically confirmed in your booking",
];

const preparation = [
  {
    title: "Choose Suitable Cycling Equipment",
    text: "Bring bicycles in good mechanical condition and suitable for the confirmed routes. Helmets are essential for all cycling participants. Rental options can be discussed when planning your holiday.",
  },
  {
    title: "Consider Every Family Member",
    text: "Share the ages, cycling experience and confidence levels of everyone travelling. This helps determine suitable routes, daily riding times and the right balance between cycling and other activities.",
  },
  {
    title: "Pack for Mountain Weather",
    text: "Mountain conditions can change during the day. Bring comfortable cycling clothing, layers, a light jacket, sun protection, gloves and appropriate footwear for each family member.",
  },
  {
    title: "Keep the Holiday Flexible",
    text: "A family cycling holiday should be enjoyable for everyone. Allow time for breaks, refreshments and discovering the surroundings rather than focusing only on cycling distance.",
  },
];

const faqs = [
  {
    q: "How long is the Luxury Family Cycling Holiday?",
    a: "The holiday is planned as a six-day private family cycling experience in Morocco, combining selected cycling routes with the travel and accommodation arrangements confirmed for your family.",
  },
  {
    q: "Is this a private family cycling holiday?",
    a: "Yes. The holiday is designed to be arranged privately for your family. Your preferred dates, group size, ages, cycling experience and travel arrangements will be discussed during planning.",
  },
  {
    q: "Where does the family cycling holiday take place?",
    a: "The programme can be planned around selected regions of Morocco, including the Atlas Mountains and surrounding countryside. Exact locations and routes will be confirmed in your personalised itinerary.",
  },
  {
    q: "Is the holiday suitable for children?",
    a: "Suitability depends on the children's ages, cycling ability, confidence and the routes selected. Please share the ages and cycling experience of everyone in your family so an appropriate programme can be discussed.",
  },
  {
    q: "Do all family members need to be experienced cyclists?",
    a: "No. The programme can be discussed around different levels of cycling experience. Route selection, daily riding time and the balance between cycling and other activities will depend on the needs of your family.",
  },
  {
    q: "How far will we cycle each day?",
    a: "Daily distances are not fixed on this page. They will depend on the ages and abilities of your family, selected routes, terrain and local conditions. Exact details will be confirmed in your itinerary.",
  },
  {
    q: "Can the cycling routes be adapted for children?",
    a: "Route planning can take children's ages, confidence and cycling experience into account. The final routes must also be checked for terrain, traffic, weather and suitability before the holiday.",
  },
  {
    q: "Can some family members choose not to cycle?",
    a: "Alternative arrangements can be discussed when planning your holiday. Any activities, transport or additional services for non-cycling family members must be agreed and confirmed in your proposal.",
  },
  {
    q: "Is luxury accommodation included?",
    a: "Accommodation depends on the package agreed for your family. The accommodation category, room arrangements, included nights and meal basis will be specified in your final proposal.",
  },
  {
    q: "Are family rooms available?",
    a: "Family room arrangements can be discussed according to your group size and accommodation preferences. Availability and room configurations must be confirmed before booking.",
  },
  {
    q: "Are bicycles included in the holiday?",
    a: "Bicycle rental is not automatically included. You can discuss bringing your own bicycles or arranging suitable rentals. Availability, specifications and costs will be confirmed separately.",
  },
  {
    q: "Are helmets provided for children?",
    a: "Helmet availability and sizes should be confirmed when arranging bicycle rental. We recommend confirming suitable helmets for every participant before travelling.",
  },
  {
    q: "Are meals included?",
    a: "Meals and refreshments depend on the package agreed for your holiday. Included breakfasts, lunches, dinners and other refreshments will be listed in your final itinerary.",
  },
  {
    q: "Is a support vehicle available?",
    a: "A support vehicle can be discussed as part of your family holiday arrangements. Availability, operating schedule, passenger capacity and costs must be confirmed in your proposal.",
  },
  {
    q: "Where does the holiday start and finish?",
    a: "The meeting point and departure destination will be confirmed in your trip proposal. Transfers from Marrakech or another agreed location can be discussed during planning.",
  },
  {
    q: "What is the best season for a family cycling holiday in Morocco?",
    a: "Spring and autumn can offer suitable conditions for cycling in many parts of Morocco. Temperatures and weather vary by region and altitude, so the final route selection should take local conditions into account.",
  },
  {
    q: "What should we bring?",
    a: "Bring suitable cycling clothing, helmets, comfortable shoes, water bottles, sun protection and light layers. Children should have appropriately sized equipment and clothing for the selected routes and weather.",
  },
];

const relatedTours = [
  {
    category: "FAMILY CYCLING",
    title: "Cycling Tour from Marrakech",
    text: "Discover the countryside around Marrakech on a cycling experience planned around your preferred pace.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/cycling-trips/trip/cycling-tour-from-marrakech",
  },
  {
    category: "ROAD CYCLING",
    title: "High Atlas Luxury Cycling Escape",
    text: "Enjoy a private cycling escape through selected mountain roads and landscapes of the High Atlas.",
    image: "/images/atlas-mountains-road-cycling-tour.jpg",
    href: "/cycling-trips/trip/high-atlas-luxury-cycling-escape-5-day",
  },
  {
    category: "ROAD CYCLING",
    title: "Private Morocco Road Cycling Holiday",
    text: "Discover Morocco on a private road cycling holiday planned around your group and preferred routes.",
    image: "/images/road-cycling-holiday-morocco.jpg",
    href: "/cycling-trips/trip/private-morocco-road-cycling-holiday-7-day",
  },
];

export default function LuxuryFamilyCyclingHoliday6DaysPage() {
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
        .atlas-tour .at-enquiry-section { background: var(--green); color: #fff; }
        .atlas-tour .at-enquiry-section .at-eyebrow { color: var(--gold-light); }
        .atlas-tour .at-enquiry-section .at-heading { color: #fff; }
        .atlas-tour .at-enquiry-section .at-section-head > p { color: #e1e2d8; }
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
          <img src={images.hero} alt="Family cycling holiday in the Atlas Mountains of Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · ATLAS MOUNTAINS · PRIVATE FAMILY HOLIDAY · 6 DAYS</span>
          <h1>Luxury Family Cycling Holiday</h1>
          <p className="at-hero-description">
            Six days of cycling, discovery
            and family time in Morocco.
            Explore scenic Atlas routes,
            discover traditional villages
            and enjoy a private holiday
            planned around the ages,
            interests and abilities of
            your family.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Family Holiday <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>06 DAYS</strong><span>Family holiday</span></div>
            <div><strong>PRIVATE</strong><span>Personal programme</span></div>
            <div><strong>ATLAS</strong><span>Mountain scenery</span></div>
            <div><strong>LUXURY</strong><span>Tailored experience</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>6 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Morocco</strong></div>
          <div className="at-fact"><span>Experience</span><strong>Private Family Holiday</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Family Cycling</strong></div>
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
            <span className="at-eyebrow">A SIX-DAY PRIVATE FAMILY EXPERIENCE</span>
            <h2 className="at-heading">Discover Morocco Together on a Family Cycling Holiday</h2>
            <p className="at-copy">
              The Luxury Family Cycling
              Holiday is a six-day private
              experience for families who
              want to discover Morocco
              through cycling, nature and
              local culture.
            </p>
            <p className="at-copy">
              Explore selected routes through
              the Atlas region and surrounding
              countryside, with a programme
              planned around the ages,
              experience and interests
              of your family.
            </p>
            <p className="at-copy">
              Daily cycling distances, route
              difficulty, accommodation,
              family room arrangements,
              meals, transfers and additional
              activities will be discussed
              and confirmed in your
              personalised holiday proposal.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the six-day journey →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE FAMILY HOLIDAY</span>
            <h2 className="at-heading">A Comfortable Cycling Adventure for the Whole Family</h2>
            <p className="at-copy">
              Enjoy a private holiday
              that brings together cycling,
              mountain scenery and time
              to discover Morocco as a family.
              The programme can be adapted
              to different ages and abilities.
            </p>
            <p className="at-copy">
              The week can combine scenic
              rides, traditional villages,
              relaxed days and time to enjoy
              the accommodation and
              surrounding destinations.
              The balance will depend on
              your family's preferences.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Luxury Family Cycling Holiday</h3>
            <p>A six-day private cycling experience designed around your family, preferred pace and travel style.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>6 days</strong></li>
              <li><span>Destination</span><strong>Morocco</strong></li>
              <li><span>Tour format</span><strong>Private family holiday</strong></li>
              <li><span>Route style</span><strong>Scenic cycling</strong></li>
              <li><span>Experience</span><strong>Family friendly</strong></li>
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
              <h2 className="at-heading">Highlights of Your Luxury Family Cycling Holiday</h2>
            </div>
            <p>
              Enjoy a private family
              adventure combining
              scenic cycling, mountain
              landscapes, local culture
              and comfortable travel
              arrangements in Morocco.
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
            <h2 className="at-heading">Explore Morocco at Your Family's Own Pace</h2>
            <p className="at-copy">
              The six-day holiday can
              be planned around selected
              cycling routes in Morocco,
              including the Atlas region
              and its beautiful mountain
              landscapes and valleys.
            </p>
            <p className="at-copy">
              Route selection will take
              account of the ages and
              cycling abilities of your
              family members, as well
              as the terrain, traffic,
              weather and local conditions.
              Daily distances and elevation
              will be agreed during planning.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Private six-day family cycling holiday</li>
              <li><span>02</span>Selected Atlas mountain and countryside routes</li>
              <li><span>03</span>Flexible riding pace and suitable breaks</li>
              <li><span>04</span>Time for family activities and local discovery</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR FAMILY HOLIDAY</span>
            <h2 className="at-heading">Tour Information</h2>
            <p className="at-copy">
              Review the main details of
              this six-day private family
              cycling holiday. Exact routes,
              distances, accommodation,
              room arrangements, meals,
              transfers and additional
              activities will be confirmed
              in your personalised proposal.
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
            A family cycling holiday
            is also an opportunity to
            experience Morocco beyond
            the bicycle. Discover the
            landscapes, villages and
            traditions of the Atlas region
            while enjoying time together
            at a relaxed pace.
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
              <span className="at-eyebrow">FAMILY HOLIDAY MOMENTS</span>
              <h2 className="at-heading">Explore the Scenery Along Your Family Adventure</h2>
            </div>
            <p>
              Discover mountain roads,
              traditional villages, valleys
              and beautiful countryside
              throughout your private
              six-day holiday in Morocco.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="Mountain landscape in the Atlas Mountains" /></div>
            <div className="at-gallery-item"><img src={images.road} alt="Scenic cycling route through the Atlas Mountains" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional village in the Moroccan countryside" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Valley landscape in the Atlas region" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Cycling adventure in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">SIX DAYS IN MOROCCO</span>
              <h2 className="at-heading">Luxury Family Cycling Holiday Itinerary</h2>
            </div>
            <p>
              Six days combining
              family-friendly cycling,
              mountain scenery,
              cultural discovery and
              opportunities to relax
              and enjoy Morocco together.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines a proposed
            structure for the six-day family
            holiday. Exact route selection,
            daily distances, terrain, activities,
            meeting point, accommodation,
            meals, support services and transfer
            arrangements depend on the
            programme agreed with your family.
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
              <span className="at-eyebrow">YOUR HOLIDAY ARRANGEMENTS</span>
              <h2 className="at-heading">What Is Included in Your Family Cycling Holiday?</h2>
            </div>
            <p>
              Final inclusions are confirmed
              in your booking proposal.
              Check your personalised itinerary
              for accommodation, family rooms,
              transport, meals, bicycle support
              and additional services included
              in your six-day experience.
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
              <h2 className="at-heading">Preparing for Your Family Cycling Holiday</h2>
            </div>
            <p>
              Prepare your bicycles,
              clothing and travel essentials
              for a comfortable family
              adventure through the
              landscapes of Morocco.
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
            <span className="at-eyebrow">A HOLIDAY FOR YOUR FAMILY</span>
            <h2 className="at-heading">Difficulty and Family Cycling Experience</h2>
            <p className="at-copy">
              The difficulty of this holiday
              depends on the selected routes,
              terrain, daily distances and
              cycling experience of each
              family member. A suitable
              programme should take account
              of children's ages, confidence,
              fitness and comfort.
            </p>
            <p className="at-copy">
              Tell us about the ages of
              your children, your family's
              usual cycling experience and
              the type of holiday you prefer.
              This will help us discuss
              appropriate routes and a
              comfortable daily schedule.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final route
              suitability must be checked against
              the ages and abilities of all participants,
              road conditions, traffic, terrain and
              weather. Daily distances, elevation,
              accommodation and support services
              will be confirmed before booking.
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
              about the Luxury Family Cycling
              Holiday. Contact our team if you
              need more details before planning
              your six days in Morocco.
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
          <span className="at-eyebrow">YOUR FAMILY ADVENTURE STARTS HERE</span>
          <h2>Ready to Plan Your Luxury Family Cycling Holiday?</h2>
          <p>
            Tell us your preferred dates,
            family size, children's ages,
            cycling experience and travel
            preferences. We can discuss
            suitable routes, accommodation,
            family room arrangements,
            activities, transfers and the
            details of your six-day holiday.
          </p>
          <a className="at-button" href="/contact">Plan Your Family Holiday <span>→</span></a>
        </div>
      </section>

      {/* CONTACT ENQUIRY FORM */}
      <section className="at-section at-enquiry-section" id="enquire">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">PLAN YOUR JOURNEY</span>
              <h2 className="at-heading">
                Enquire About Luxury Family Cycling Holiday
              </h2>
            </div>
            <p>
              Tell us your preferred dates, group size, riding experience and
              requirements. Our team will help you plan the details of your
              private six-day family cycling holiday in Morocco.
            </p>
          </div>
          <ContactEnquiryForm
            tourName="Luxury Family Cycling Holiday"
            destination="Morocco – Atlas Mountains"
            cyclingType="Family Cycling"
          />
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
              Discover more ways to
              experience Morocco by bike,
              from family-friendly cycling
              experiences to private luxury
              escapes in the Atlas Mountains
              and longer road cycling journeys.
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