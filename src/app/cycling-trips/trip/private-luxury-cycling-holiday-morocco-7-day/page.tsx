import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Private Luxury Cycling Holiday Morocco – 7 Days | Mountain Bike Morocco",
  description:
    "Experience a private 7-day luxury cycling holiday in Morocco. Discover spectacular Atlas Mountain roads, traditional villages, beautiful valleys and carefully planned cycling stages on a personalised journey.",
  alternates: {
    canonical: "/cycling-trips/trip/private-luxury-cycling-holiday-morocco-7-day",
  },
};

const images = {
  hero: "/images/luxury-cycling-morocco.jpg",
  overview: "/images/atlas-valley-cycling-morocco.jpg",
  mountains: "/images/atlas-mountains-cycling-expedition.jpg",
  road: "/images/road-cycling-tour-morocco.jpg",
  village: "/images/morocco-berbre-villages.jpg",
  valley: "/images/adventure-road-cycling-morocco.jpg",
  cycling: "/images/road-cycling-morocco.jpg",
  final: "/images/morocco-luxury-bike-tour.jpg",
};

const facts = [
  ["Duration", "7 days"],
  ["Destination", "Morocco"],
  ["Regions", "Atlas Mountains and selected regions"],
  ["Starting point", "To be confirmed"],
  ["Cycling style", "Private luxury road cycling"],
  ["Difficulty", "Adapted to the selected route"],
  ["Experience", "Suitable experience to be discussed"],
  ["Tour format", "Private luxury cycling holiday"],
  ["Best season", "Spring and autumn, subject to conditions"],
];

const highlights = [
  {
    number: "01",
    title: "Discover Morocco by Bike",
    text: "Explore selected cycling roads and landscapes across Morocco, from mountain scenery and beautiful valleys to traditional villages and distinctive rural regions.",
  },
  {
    number: "02",
    title: "A Journey Designed Around You",
    text: "Enjoy a private seven-day cycling holiday with a programme discussed around your preferred dates, group size, riding experience and travel expectations.",
  },
  {
    number: "03",
    title: "Exceptional Mountain Scenery",
    text: "Experience the character of Morocco's mountain regions, with scenic roads, changing landscapes, impressive viewpoints and opportunities to discover local culture.",
  },
  {
    number: "04",
    title: "Comfort Beyond the Ride",
    text: "Discuss boutique accommodation, private transfers, meals and additional comfort arrangements as part of your personalised luxury cycling proposal.",
  },
];

const beyondTrail = [
  {
    title: "The Atlas Mountains",
    text: "Discover the impressive mountain landscapes of Morocco, with traditional settlements, cultivated valleys and scenic roads connecting different regions.",
  },
  {
    title: "Traditional Villages",
    text: "Experience the rural character of Morocco, passing traditional villages and communities that reflect the country's diverse landscapes and cultural heritage.",
  },
  {
    title: "Moroccan Landscapes",
    text: "Enjoy the changing scenery along your selected route, from mountain roads and green valleys to open countryside and dramatic natural viewpoints.",
  },
  {
    title: "A Personal Travel Experience",
    text: "Combine memorable days in the saddle with a carefully planned private journey, tailored to your group's preferred pace, comfort and interests.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Morocco and Journey Preparation",
    location: "Agreed arrival point – first destination",
    distance: "To be confirmed",
    riding: "Arrival day – cycling arrangements",
    image: images.overview,
    text: "Begin your private luxury cycling holiday with the agreed arrival and transfer arrangements. Meet the team, review the seven-day programme and discuss the selected cycling routes, equipment and daily arrangements. Depending on your arrival time and confirmed itinerary, there may be an opportunity for a short introductory ride. Your meeting point, accommodation and first overnight arrangements will be confirmed in your personalised proposal.",
    details: [
      "Meet the team at the agreed arrival point",
      "Review the seven-day cycling programme",
      "Discuss the selected routes and riding conditions",
      "Prepare and check your bicycle",
      "Review personal equipment and support arrangements",
      "Enjoy an introductory exploration if time allows",
      "Discuss the following day's cycling stage",
      "Settle into the agreed accommodation",
    ],
  },
  {
    day: "02",
    title: "Discover the Scenic Roads of Morocco",
    location: "Selected cycling region – first full stage",
    distance: "To be confirmed",
    riding: "Scenic road cycling – selected route",
    image: images.road,
    text: "Start the cycling programme with a selected route through the landscapes of your chosen region. Discover the character of Morocco's countryside, with scenic roads, mountain views and traditional settlements along the way. The route will be planned around your group's riding experience and preferred pace. Daily distance, elevation gain, road conditions and overnight arrangements will be confirmed before departure.",
    details: [
      "Review the day's route and local conditions",
      "Prepare your bicycle and personal equipment",
      "Set out along the selected scenic roads",
      "Discover the landscapes of the region",
      "Pass through selected rural settlements",
      "Enjoy planned breaks and refreshments",
      "Stop at suitable viewpoints along the route",
      "Finish at the agreed accommodation",
    ],
  },
  {
    day: "03",
    title: "Mountain Roads and Traditional Villages",
    location: "Selected mountain region",
    distance: "To be confirmed",
    riding: "Road cycling – mountain stage",
    image: images.mountains,
    text: "Continue your journey through selected mountain roads and traditional landscapes. The day's programme can be adapted to include scenic climbs, winding descents and routes through rural communities. Enjoy the changing scenery and discover another side of Morocco beyond its main cities. The exact route, climbing profile, distance, elevation gain and overnight destination will depend on the programme confirmed for your group.",
    details: [
      "Review the selected mountain route",
      "Check bicycle condition and equipment",
      "Continue along the agreed cycling roads",
      "Experience the surrounding mountain scenery",
      "Discover traditional villages along the route",
      "Enjoy planned viewpoints and stops",
      "Complete the agreed cycling stage",
      "Arrive at the planned accommodation",
    ],
  },
  {
    day: "04",
    title: "Explore the Valleys and Countryside",
    location: "Selected valley region",
    distance: "To be confirmed",
    riding: "Scenic road cycling – valley stage",
    image: images.valley,
    text: "Spend the day exploring the valleys and countryside along your selected cycling route. Discover cultivated landscapes, traditional settlements and the distinctive scenery of Morocco's rural regions. The route can be planned around your group's preferred riding distance and pace, with time for suitable stops and local discoveries. Daily distance, elevation gain and overnight arrangements will be confirmed in your final itinerary.",
    details: [
      "Review the selected valley route",
      "Prepare your bicycle for the day's ride",
      "Set out through the surrounding countryside",
      "Discover cultivated valleys and rural landscapes",
      "Pass through traditional settlements",
      "Enjoy planned breaks and refreshments",
      "Take time for selected scenic viewpoints",
      "Finish at the agreed overnight destination",
    ],
  },
  {
    day: "05",
    title: "A Memorable Day of Mountain Cycling",
    location: "Selected mountain roads and surrounding region",
    distance: "To be confirmed",
    riding: "Road cycling – mountain and valley stage",
    image: images.road,
    text: "Continue your private cycling holiday with another selected mountain and valley route. Depending on the confirmed programme, the day may include longer climbs, scenic descents and quiet roads through the surrounding countryside. The route will reflect your group's cycling experience and the overall rhythm of the journey. Exact distance, elevation gain, road conditions and overnight destination will be confirmed during planning.",
    details: [
      "Review the day's cycling programme",
      "Check bicycle condition and equipment",
      "Set out along the selected mountain roads",
      "Discover changing scenery throughout the stage",
      "Pass through selected villages and valleys",
      "Enjoy planned refreshments and rest stops",
      "Complete the agreed cycling route",
      "Arrive at the planned accommodation",
    ],
  },
  {
    day: "06",
    title: "Discover More of Morocco by Bike",
    location: "Selected region – final full cycling stage",
    distance: "To be confirmed",
    riding: "Scenic road cycling – final full stage",
    image: images.village,
    text: "Enjoy another day of cycling through the landscapes selected for your private holiday. The programme can combine scenic mountain roads, rural routes and opportunities to experience the local character of the region. The daily riding distance and climbing will be adapted to the agreed itinerary and your group's preferences. After the ride, enjoy the agreed accommodation and prepare for the final day.",
    details: [
      "Review the selected cycling route",
      "Prepare your bicycle and riding equipment",
      "Set out on the agreed scenic roads",
      "Explore the landscapes of the region",
      "Discover traditional settlements and local scenery",
      "Enjoy planned breaks along the way",
      "Complete the final full cycling stage",
      "Prepare for the journey's last day",
    ],
  },
  {
    day: "07",
    title: "Final Ride and Departure",
    location: "Agreed finishing point",
    distance: "To be confirmed",
    riding: "Final cycling stage or departure arrangements",
    image: images.cycling,
    text: "Complete your seven-day private luxury cycling holiday with the final agreed programme. Depending on your departure arrangements and available time, the day may include a short scenic ride or a relaxed transfer towards the confirmed finishing point. After the journey, complete the agreed departure arrangements. The final route, departure point and any return transfer will be confirmed in your personalised itinerary.",
    details: [
      "Review the final day's programme",
      "Prepare your bicycle if a ride is planned",
      "Enjoy the final selected cycling route",
      "Take time for the last scenic stops",
      "Complete the agreed cycling stage",
      "Return equipment as arranged",
      "Finish at the confirmed destination",
      "Arrange the agreed departure or transfer",
    ],
  },
];

const inclusions = [
  "Seven-day route planning and cycling arrangements",
  "Private journey programme planning for your group",
  "Local cycling support as agreed in your itinerary",
  "Luxury or boutique accommodation only when specifically included",
  "Bicycle rental if specifically included",
  "Transfers specified in your final proposal",
  "Support vehicle if explicitly included in your proposal",
  "Meals and refreshments only when listed in your proposal",
  "Additional comfort services if agreed",
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
  "Services not specifically listed in your proposal",
];

const preparation = [
  {
    title: "Choose the Right Road Bicycle",
    text: "Use a bicycle in excellent mechanical condition, with suitable gearing, reliable brakes and tyres appropriate for the confirmed roads and terrain selected for your holiday.",
  },
  {
    title: "Prepare for Mountain Climbs",
    text: "Depending on the selected regions, your holiday may include mountain terrain and changing road profiles. Your fitness and climbing experience should match the route and daily programme.",
  },
  {
    title: "Bring Your Cycling Equipment",
    text: "Bring a suitable helmet, cycling clothing, gloves, glasses, footwear, hydration equipment, sun protection and basic personal repair supplies.",
  },
  {
    title: "Be Ready for Changing Conditions",
    text: "Temperatures and weather can vary between regions and mountain areas. Carry suitable layers and protection against sun, wind and cooler conditions.",
  },
];

const faqs = [
  {
    q: "How long is the Private Luxury Cycling Holiday in Morocco?",
    a: "The experience is planned as a seven-day private cycling holiday in Morocco. The final programme, including the selected regions, daily routes and travel arrangements, will be confirmed in your personalised proposal.",
  },
  {
    q: "Which regions will we visit during the journey?",
    a: "The regions depend on your preferred experience and the final route. The Atlas Mountains and selected Moroccan valleys and countryside can be discussed when planning your private holiday.",
  },
  {
    q: "Is this a private luxury cycling holiday?",
    a: "Yes. The journey is designed as a private, tailored experience. Your dates, cycling programme, group size, accommodation expectations and travel arrangements can be discussed around your preferences.",
  },
  {
    q: "Where does the cycling holiday start?",
    a: "The exact meeting point and starting arrangements will be confirmed in your trip proposal. Transfers from Marrakech or another agreed location can be discussed during planning.",
  },
  {
    q: "Where does the journey finish?",
    a: "The finishing point depends on the selected route and your agreed programme. The final destination and any return transfer will be confirmed in your itinerary.",
  },
  {
    q: "What kind of cycling can we expect?",
    a: "The holiday focuses on road cycling through selected Moroccan regions. Depending on the route, the programme may include mountain roads, valley landscapes, scenic climbs and traditional villages.",
  },
  {
    q: "How far will we cycle each day?",
    a: "Daily distances have not been fixed on this page. They depend on the selected routes, your group's experience, road conditions and the agreed programme. Exact distances will be confirmed during trip planning.",
  },
  {
    q: "How much climbing should we expect?",
    a: "The amount of climbing depends on the selected regions and routes. Morocco offers a variety of mountain and valley roads, but exact daily elevation figures will be confirmed once the itinerary has been planned.",
  },
  {
    q: "Is this holiday suitable for beginner cyclists?",
    a: "Suitability depends on the selected route, climbing, daily distance and your group's experience. Tell us about your usual riding distances and climbing background so we can discuss an appropriate programme.",
  },
  {
    q: "Is luxury accommodation included?",
    a: "Accommodation arrangements depend on your selected programme. The accommodation category, included nights and meal arrangements will be clearly specified in your final proposal.",
  },
  {
    q: "Are meals included?",
    a: "Meals and refreshments depend on the package agreed for your journey. Any included breakfasts, lunches, dinners and refreshments will be listed in your final itinerary.",
  },
  {
    q: "Are transfers from Marrakech included?",
    a: "Transfers depend on your selected starting point and final proposal. Any included pick-up, drop-off or other transport arrangements will be confirmed before booking.",
  },
  {
    q: "Can we bring our own bicycles?",
    a: "You can discuss bringing your own bicycles or arranging rentals. Bicycle transport, availability, specifications and rental costs should be confirmed before booking.",
  },
  {
    q: "What is the best season for a cycling holiday in Morocco?",
    a: "Spring and autumn can offer suitable conditions for cycling in many Moroccan regions. Weather varies by season and location, so local road and weather conditions should be checked before departure.",
  },
  {
    q: "Can the holiday be customised for our group?",
    a: "The journey is planned as a private experience. You can discuss your preferred dates, group size, riding ability, route interests, accommodation expectations and travel arrangements when requesting your proposal.",
  },
  {
    q: "What should we bring for the journey?",
    a: "Bring a helmet, suitable cycling clothing, gloves, shoes, hydration, sun protection, a windproof layer and personal bicycle repair supplies. Include warmer clothing for changing mountain conditions.",
  },
];

const relatedTours = [
  {
    category: "LUXURY CYCLING",
    title: "Tizi n’Test Luxury Cycling Journey",
    text: "Discover spectacular High Atlas roads on a private luxury cycling journey through one of Morocco's memorable mountain regions.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/cycling-trips/trip/tizi-n-test-luxury-cycling-journey-4-day",
  },
  {
    category: "ROAD CYCLING",
    title: "Todra and Dades Luxury Road Journey",
    text: "Explore the dramatic landscapes of Todra Gorge and the Dades Valley on a private southern Morocco cycling journey.",
    image: "/images/south-morocco-cycling-tour.jpg",
    href: "/cycling-trips/trip/todra-and-dades-luxury-road-journey-6-day",
  },
  {
    category: "ROAD CYCLING",
    title: "South Morocco Road Cycling Journey",
    text: "Experience southern Morocco by bike, discovering changing landscapes, traditional regions and scenic roads.",
    image: "/images/south-morocco-cycling-expedition.jpg",
    href: "/cycling-trips/trip/south-morocco-road-cycling-journey-6-day",
  },
];

export default function PrivateLuxuryCyclingHolidayMorocco7DaysPage() {
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
        .atlas-tour .at-enquiry-section { background: var(--green); }
        .atlas-tour .at-enquiry-section .at-eyebrow,
        .atlas-tour .at-enquiry-section .at-heading,
        .atlas-tour .at-enquiry-section .at-section-head > p { color: #fff !important; }
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
          <img src={images.hero} alt="Luxury road cycling holiday through the mountain landscapes of Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · ATLAS MOUNTAINS · PRIVATE · LUXURY CYCLING · 7 DAYS</span>
          <h1>Private Luxury Cycling Holiday Morocco</h1>
          <p className="at-hero-description">
            Discover Morocco on a seven-day
            private luxury cycling holiday.
            Ride selected mountain roads,
            explore beautiful valleys and
            traditional villages, and experience
            the country's remarkable landscapes
            with a personalised programme
            planned around your group.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Private Cycling Holiday <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>07 DAYS</strong><span>Luxury holiday</span></div>
            <div><strong>PRIVATE</strong><span>Personal experience</span></div>
            <div><strong>MOROCCO</strong><span>Selected regions</span></div>
            <div><strong>ROAD</strong><span>Scenic cycling</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>7 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Morocco</strong></div>
          <div className="at-fact"><span>Experience</span><strong>Private Luxury Holiday</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Scenic Road Cycling</strong></div>
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
            <img src={images.overview} alt="Scenic mountain valley along a cycling route in Morocco" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A SEVEN-DAY PRIVATE MOROCCO JOURNEY</span>
            <h2 className="at-heading">Discover Morocco on a Private Luxury Cycling Holiday</h2>
            <p className="at-copy">
              The Private Luxury Cycling Holiday
              Morocco is a seven-day experience
              for riders who want to discover
              the country's remarkable landscapes
              through a carefully planned
              cycling journey.
            </p>
            <p className="at-copy">
              Ride selected mountain roads,
              explore beautiful valleys and
              discover traditional villages
              along routes chosen around
              your group's interests and
              cycling experience.
            </p>
            <p className="at-copy">
              Daily routes, distances, elevation
              gain, starting point, overnight
              arrangements, accommodation
              standards and transfers will be
              discussed and confirmed in
              your personalised proposal.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the seven-day journey →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE LUXURY HOLIDAY</span>
            <h2 className="at-heading">Seven Days of Scenic Roads, Comfort and Discovery</h2>
            <p className="at-copy">
              This seven-day holiday combines
              road cycling in Morocco with a
              more personal approach to travel.
              Discover selected regions at a
              pace suited to your cycling
              experience and interests.
            </p>
            <p className="at-copy">
              Your journey can be discussed
              around your preferred dates,
              group size, cycling background
              and accommodation expectations.
              The selected roads and regions
              will determine the daily distance,
              climbing and overall difficulty.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Private Luxury Cycling Holiday Morocco</h3>
            <p>A seven-day private road cycling experience through selected Moroccan regions, planned around your group and preferred travel style.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>7 days</strong></li>
              <li><span>Destination</span><strong>Morocco</strong></li>
              <li><span>Tour format</span><strong>Private luxury holiday</strong></li>
              <li><span>Route style</span><strong>Scenic road cycling</strong></li>
              <li><span>Travel style</span><strong>Tailored experience</strong></li>
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
              <h2 className="at-heading">Highlights of Your Private Luxury Cycling Holiday in Morocco</h2>
            </div>
            <p>
              Experience seven days of
              mountain road cycling,
              remarkable Moroccan scenery
              and a private luxury travel
              programme planned around you.
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
            <img src={images.road} alt="Winding mountain road through the landscapes of Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE &amp; TERRAIN</span>
            <h2 className="at-heading">Ride the Scenic Roads and Landscapes of Morocco</h2>
            <p className="at-copy">
              The seven-day holiday is designed
              around selected road cycling
              routes through Morocco. Discover
              mountain roads, beautiful valleys,
              impressive viewpoints and
              traditional settlements.
            </p>
            <p className="at-copy">
              The daily riding programme
              depends on the confirmed regions,
              your group's experience and
              local conditions. Route direction,
              starting points and finishing
              arrangements will determine
              the total distance and elevation
              gain for each day.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Seven-day private luxury cycling programme</li>
              <li><span>02</span>Selected roads through Moroccan landscapes</li>
              <li><span>03</span>Mountain scenery, valleys and traditional villages</li>
              <li><span>04</span>Accommodation and travel arrangements tailored to your preferences</li>
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
              Review the main details of
              this seven-day private luxury
              cycling holiday in Morocco.
              Exact daily distances,
              elevation, meeting point,
              accommodation category,
              overnight arrangements and
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
          <img src={images.village} alt="Traditional village in the mountain landscapes of Morocco" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover the Landscapes and Culture of Morocco</h2>
          <p className="at-copy">
            This holiday is about more
            than the mountain roads.
            Along your selected route,
            discover traditional villages,
            beautiful valleys, dramatic
            mountain scenery and the
            rural character of Morocco.
            Enjoy the journey at a pace
            suited to your group's interests.
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
              <span className="at-eyebrow">MOROCCO CYCLING MOMENTS</span>
              <h2 className="at-heading">Explore the Scenery Along Your Journey</h2>
            </div>
            <p>
              Discover mountain roads,
              beautiful valleys, traditional
              villages and striking landscapes
              during your seven-day private
              cycling holiday in Morocco.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="Mountain landscape in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.road} alt="Scenic mountain road in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional village in the Moroccan mountains" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Valley landscape in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Road cycling adventure through Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">SEVEN DAYS IN MOROCCO</span>
              <h2 className="at-heading">Private Luxury Cycling Holiday Morocco Itinerary</h2>
            </div>
            <p>
              Seven days of road cycling
              through selected Moroccan
              landscapes. Daily routes,
              distances, elevation, overnight
              arrangements and transfers
              are confirmed during planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines the proposed
            structure of the seven-day holiday.
            Exact route selection, daily distance,
            elevation gain, meeting point,
            accommodation, finishing point,
            road conditions and transfer
            arrangements depend on the final
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
              <span className="at-eyebrow">YOUR JOURNEY ARRANGEMENTS</span>
              <h2 className="at-heading">What Is Included in Your Private Luxury Cycling Holiday?</h2>
            </div>
            <p>
              Final inclusions are confirmed
              in your booking proposal.
              Check your personalised itinerary
              for accommodation, transport,
              meals and services included
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
              <h2 className="at-heading">Preparing for Your Private Cycling Holiday in Morocco</h2>
            </div>
            <p>
              Prepare your bicycle, fitness
              and equipment for seven days
              of road cycling through the
              spectacular landscapes of Morocco.
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
            <img src={images.cycling} alt="Road cycling through the mountain landscapes of Morocco" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">Difficulty and Cycling Experience</h2>
            <p className="at-copy">
              A seven-day cycling holiday
              through Morocco may include
              sustained climbs, mountain
              descents and changing road
              conditions. The overall difficulty
              depends on the selected regions,
              daily distances, elevation gain
              and weather.
            </p>
            <p className="at-copy">
              Tell us about the distances
              you normally ride, your climbing
              experience and your preferred
              pace so we can discuss a suitable
              programme for your holiday.
              The final route should reflect
              your group's ability and interests.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty,
              daily riding distance, elevation gain,
              road conditions, accommodation and
              transfer arrangements must be checked
              against the actual itinerary before
              booking. This page does not promise
              fixed mileage or elevation figures.
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
              about the Private Luxury Cycling
              Holiday Morocco. Contact our team
              if you need more details before
              planning your seven days.
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
          <img src={images.final} alt="Luxury cycling journey through the mountain landscapes of Morocco" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR PRIVATE MOROCCO JOURNEY STARTS HERE</span>
          <h2>Ready to Plan Your Luxury Cycling Holiday?</h2>
          <p>
            Tell us your preferred dates,
            group size, cycling experience
            and accommodation preferences.
            We can discuss the daily routes,
            selected regions, meeting point,
            overnight arrangements, finishing
            point and services for your
            seven-day cycling holiday.
          </p>
          <a className="at-button" href="/contact">Plan Your Private Cycling Holiday <span>→</span></a>
        </div>
      </section>

      <section className="at-section at-enquiry-section" id="enquiry">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">PLAN YOUR PRIVATE LUXURY CYCLING HOLIDAY</span>
              <h2 className="at-heading">
                Tell Us About Your Private Luxury Cycling Holiday in Morocco
              </h2>
            </div>
            <p>
              Share your preferred dates, group size, riders' ages and cycling
              experience. Our team can help discuss suitable routes,
              accommodation, equipment and practical arrangements for your
              seven-day private luxury cycling holiday.
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
              <h2 className="at-heading">More Luxury Cycling Adventures in Morocco</h2>
            </div>
            <p>
              Discover more ways to experience
              Morocco by bike, from private
              luxury cycling escapes in the
              Atlas Mountains to longer
              road cycling journeys.
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