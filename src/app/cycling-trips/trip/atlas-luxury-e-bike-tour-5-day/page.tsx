import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas Luxury E-Bike Tour – 5 Days | Mountain Bike Morocco",
  description:
    "Discover the Atlas Mountains on a five-day private luxury E-bike tour from Marrakech. Explore mountain landscapes, traditional villages and selected cycling routes with a personalised journey and carefully planned comfort.",
  alternates: {
    canonical: "/cycling-trips/trip/atlas-luxury-e-bike-tour-5-day",
  },
};

const images = {
  hero: "/images/e-bike-tour-atlas-mountains.jpg",
  overview: "/images/eBike-tour-atlas-mountains-morocco.jpg",
  mountains: "/images/atlas-mountains-ebike-tour.jpg",
  trails: "/images/ouirgane-valley-ebike-tour.jpg",
  village: "/images/berber-villages-cycling-expeditions.jpg",
  valley: "/images/atlas-mountains-cycling-expedition.jpg",
  cycling: "/images/scott-ebike-tour-morocco.jpg",
  final: "/images/group-ebike-tour-morocco.jpg",
};

const facts = [
  ["Duration", "5 days / 4 nights"],
  ["Destination", "Atlas Mountains, Morocco"],
  ["Starting point", "Marrakech"],
  ["Main areas", "High Atlas and surrounding valleys"],
  ["Cycling style", "Luxury E-bike adventure"],
  ["Difficulty", "Adapted to rider experience and route"],
  ["Experience", "Previous cycling experience recommended"],
  ["Tour format", "Private luxury journey"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "Explore the Atlas in Comfort",
    text: "Discover the spectacular landscapes of the Atlas Mountains on a carefully planned private journey, combining selected cycling routes with time to relax and enjoy the surroundings.",
  },
  {
    number: "02",
    title: "Electric Mountain Biking",
    text: "Enjoy the benefits of electric assistance on suitable mountain routes. Explore valleys, rural tracks and changing mountain landscapes at a pace adapted to your experience.",
  },
  {
    number: "03",
    title: "A Private Luxury Experience",
    text: "Experience a personalised five-day journey with private trip planning, flexible riding stages and accommodation and services arranged according to your confirmed itinerary.",
  },
  {
    number: "04",
    title: "Discover Villages and Valleys",
    text: "Ride through remarkable mountain scenery and discover traditional villages, rural landscapes and the distinctive character of communities throughout the Atlas region.",
  },
];

const beyondTrail = [
  {
    title: "Exceptional mountain landscapes",
    text: "Discover the changing scenery of the High Atlas, from dramatic mountain slopes and open valleys to traditional settlements and quieter rural surroundings.",
  },
  {
    title: "Traditional Berber villages",
    text: "Explore mountain communities and discover traditional architecture, local landscapes and the everyday character of villages throughout the Atlas region.",
  },
  {
    title: "Moroccan hospitality",
    text: "Enjoy opportunities to experience local hospitality, regional traditions and the welcoming atmosphere of the mountain communities along your journey.",
  },
  {
    title: "Comfort beyond the ride",
    text: "Combine carefully selected cycling stages with time to relax and enjoy the accommodation, transfers and additional arrangements included in your personalised itinerary.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Marrakech and Private Welcome",
    location: "Marrakech",
    distance: "No scheduled riding",
    riding: "Arrival and trip preparation",
    image: images.overview,
    text: "Arrive in Marrakech and begin your private Atlas Mountains experience. Meet the local team and review the arrangements for the coming days. Depending on your arrival time, there will be an opportunity to discuss the proposed cycling programme, review available E-bike options and confirm the practical details of your journey. Your accommodation and any included services will follow the arrangements agreed in your final proposal.",
    details: [
      "Arrival and private welcome in Marrakech",
      "Review the five-day cycling programme",
      "Discuss bicycle options and equipment arrangements",
      "Prepare for the journey into the Atlas Mountains",
    ],
  },
  {
    day: "02",
    title: "From Marrakech to the Atlas Mountains",
    location: "Marrakech – Atlas Mountains",
    distance: "Route-dependent",
    riding: "Introductory E-bike ride",
    image: images.mountains,
    text: "Leave Marrakech and travel towards the Atlas Mountains, where the landscapes gradually change from the busy city surroundings to mountain valleys and traditional settlements. Depending on the selected route and your riding experience, enjoy an introductory E-bike stage to become familiar with the bicycle and the terrain. The day's programme allows time to settle into the mountain environment and prepare for the longer cycling stages ahead.",
    details: [
      "Travel from Marrakech towards the Atlas region",
      "Prepare and adjust the available E-bikes",
      "Enjoy an introductory ride on a selected route",
      "Discover the surrounding mountain landscapes",
    ],
  },
  {
    day: "03",
    title: "E-Bike Adventure through the Atlas Valleys",
    location: "Atlas Mountains",
    distance: "Route-dependent",
    riding: "Full-day E-bike exploration",
    image: images.trails,
    text: "Enjoy a full day exploring selected cycling routes in the Atlas Mountains. Ride through mountain scenery, rural tracks and traditional settlements, with opportunities to stop and appreciate the surrounding landscapes. The route and riding distance are selected according to your experience, the terrain and the conditions. Electric assistance can help make selected climbs more manageable, while the private format allows the day's pace and breaks to be planned around your preferences.",
    details: [
      "Explore selected mountain cycling routes",
      "Discover traditional villages and rural landscapes",
      "Enjoy scenic stops along the route",
      "Adapt the riding pace to your experience",
    ],
  },
  {
    day: "04",
    title: "Discover More of the Atlas Mountains",
    location: "Atlas Mountains",
    distance: "Route-dependent",
    riding: "Private E-bike adventure",
    image: images.valley,
    text: "Continue your Atlas Mountains journey with another private E-bike adventure. Discover different mountain scenery and selected routes according to the final itinerary. The day can combine cycling with time to enjoy the surrounding valleys and traditional villages. Your guide and local team can adapt the programme to the riding conditions and your preferences, while any accommodation, meals and additional services follow the arrangements confirmed for your trip.",
    details: [
      "Discover another selected Atlas cycling route",
      "Explore mountain valleys and rural surroundings",
      "Enjoy time for photographs and scenic breaks",
      "Follow a programme adapted to your preferences",
    ],
  },
  {
    day: "05",
    title: "Final Ride and Return to Marrakech",
    location: "Atlas Mountains – Marrakech",
    distance: "Route-dependent",
    riding: "Optional final ride and return transfer",
    image: images.final,
    text: "Enjoy breakfast and prepare for the final day of your journey. Depending on your departure schedule and preferences, there may be time for a short final E-bike ride in the Atlas Mountains. After the cycling programme, travel back towards Marrakech for your onward arrangements. The exact departure time and transfer arrangements are coordinated according to your confirmed itinerary.",
    details: [
      "Breakfast and final preparations",
      "Optional short E-bike ride if time allows",
      "Return journey towards Marrakech",
      "End of the five-day Atlas experience",
    ],
  },
];

const inclusions = [
  "Private trip planning and itinerary coordination",
  "Local cycling guide and support as specified in your itinerary",
  "Accommodation according to your confirmed luxury itinerary",
  "Meals explicitly listed in your confirmed itinerary",
  "E-bike rental if specifically included in your proposal",
  "Private transfers where specified in your proposal",
  "Support vehicle and luggage assistance where agreed",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "E-bike rental unless agreed in your proposal",
  "Personal cycling equipment and clothing",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses and tips",
  "Additional nights and transfers not included in your proposal",
  "Optional activities and services not listed in your confirmed itinerary",
];

const preparation = [
  {
    title: "Cycling Experience",
    text: "Previous cycling experience is recommended for this journey. Riders should be comfortable controlling and braking their bicycles on changing surfaces. Share your experience and riding preferences before booking so the proposed routes can be discussed.",
  },
  {
    title: "E-Bike and Equipment Arrangements",
    text: "Discuss your preferred bicycle type, height and equipment requirements before travelling. E-bike models, frame sizes, helmets and other equipment depend on availability and should be confirmed in your final trip proposal.",
  },
  {
    title: "Fitness and Riding Confidence",
    text: "The daily riding programme should reflect your fitness, cycling experience and confidence on mountain terrain. Electric assistance can support riders on suitable climbs, but good balance and bicycle control remain essential.",
  },
  {
    title: "Clothing and Personal Essentials",
    text: "Bring comfortable cycling clothing, suitable footwear, gloves and personal riding equipment. Sunglasses, sun protection and a reusable water bottle are useful for mountain cycling. Confirm any supplied equipment before departure.",
  },
];

const faqs = [
  {
    q: "What is the Atlas Luxury E-Bike Tour?",
    a: "It is a five-day private cycling journey from Marrakech into the Atlas Mountains. The experience combines selected E-bike routes, mountain scenery and a personalised itinerary. Accommodation, transfers, meals and other services depend on the arrangements confirmed in your final proposal.",
  },
  {
    q: "How long is the Atlas Luxury E-Bike Tour?",
    a: "The tour is planned over five days and four nights, beginning in Marrakech and travelling into the Atlas Mountains before returning to Marrakech on the final day.",
  },
  {
    q: "Where does the tour start?",
    a: "The journey starts in Marrakech. From there, the programme travels towards the Atlas Mountains according to the selected route and the arrangements confirmed for your trip.",
  },
  {
    q: "What type of accommodation is included?",
    a: "Accommodation depends on the itinerary and the services confirmed in your final proposal. The specific properties, room arrangements and accommodation category should be agreed before booking. No particular hotel or property is guaranteed by this page.",
  },
  {
    q: "Are E-bikes included in the tour price?",
    a: "E-bike rental must be confirmed in your personalised proposal. Bicycle models, sizes and availability can vary, so please share your height and preferred bicycle requirements before booking.",
  },
  {
    q: "How difficult is the luxury E-bike tour?",
    a: "Difficulty depends on the selected routes, terrain, daily distances and your cycling experience. The itinerary can be discussed around your fitness and riding confidence. Final route details should be confirmed before the trip.",
  },
  {
    q: "Are the daily distances and elevation figures fixed?",
    a: "No fixed distances or elevation figures are promised on this page. They depend on the selected routes, terrain and riding conditions. The proposed daily stages should be discussed and confirmed during trip planning.",
  },
  {
    q: "Is this a private tour?",
    a: "Yes. This tour is presented as a private journey. The itinerary and riding programme can be discussed around your travel dates, preferences and cycling experience.",
  },
  {
    q: "Can I customise the five-day itinerary?",
    a: "The private itinerary can be discussed around your preferred travel dates, cycling experience, riding style and accommodation preferences. The final routes, transfers, accommodation and included services are agreed before booking.",
  },
  {
    q: "What is the best time for an Atlas E-bike tour?",
    a: "Spring and autumn are generally suitable periods for cycling in Morocco. Weather conditions can vary according to the exact location and elevation, so travel dates should be considered alongside the planned routes.",
  },
  {
    q: "Can non-cycling guests join the journey?",
    a: "This can be discussed when planning your private trip. Any arrangements for non-cycling guests, additional transport or alternative activities need to be agreed in advance and listed in your final proposal.",
  },
];

const relatedTours = [
  {
    category: "E-MTB ADVENTURE",
    title: "Atlas Mountains E-Bike Tour – 4 Days",
    text: "Explore selected mountain routes, traditional villages and spectacular landscapes on a private electric mountain biking adventure.",
    image: "/images/atlas-mountains-ebike-tour.jpg",
    href: "/cycling-trips/trip/atlas-mountains-e-bike-tour-4-day",
  },
  {
    category: "FAMILY E-BIKE",
    title: "Morocco Family E-Bike Tour – 4 Days",
    text: "Discover selected Atlas Mountain routes and rural landscapes on a private family cycling experience.",
    image: "/images/group-ebike-tour-morocco.jpg",
    href: "/cycling-trips/trip/morocco-family-e-bike-tour-4-day",
  },
  {
    category: "ATLAS MTB ADVENTURE",
    title: "Atlas Singletrack Mountain Bike Tour",
    text: "Explore selected natural singletrack, mountain trails and rural landscapes in the High Atlas.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/trip/atlas-singletrack-mountain-bike-tour-6-day",
  },
];

export default function AtlasLuxuryEBikeTour5DayPage() {
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

        .atlas-tour .at-container {
          width: min(1240px, calc(100% - 64px));
          margin-inline: auto;
        }

        .atlas-tour .at-eyebrow {
          display: block;
          color: #946c30;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          line-height: 1.6;
          text-transform: uppercase;
        }

        .atlas-tour .at-heading {
          margin: 12px 0 20px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(32px, 3.5vw, 48px);
          font-weight: 400;
          letter-spacing: -1.25px;
          line-height: 1.14;
        }

        .atlas-tour .at-section { padding: 86px 0; }

        .atlas-tour .at-section-head {
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          align-items: end;
          gap: 44px;
          margin-bottom: 36px;
        }

        .atlas-tour .at-section-head .at-heading { margin-bottom: 0; }

        .atlas-tour .at-section-head > p {
          max-width: 480px;
          margin: 0 0 4px auto;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.85;
        }

        .atlas-tour .at-copy {
          color: #5f6359;
          font-size: 16px;
          line-height: 1.95;
        }

        .atlas-tour .at-button {
          display: inline-flex;
          min-height: 49px;
          align-items: center;
          justify-content: center;
          gap: 15px;
          padding: 13px 22px;
          border: 1px solid var(--gold);
          background: var(--gold);
          color: #1f211b;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
          transition: background .2s ease, color .2s ease;
        }

        .atlas-tour .at-button:hover {
          background: #a98343;
          border-color: #a98343;
          color: #fff;
        }

        .atlas-tour .at-button-dark {
          background: transparent;
          color: var(--ink);
        }

        .atlas-tour .at-button-dark:hover {
          background: var(--ink);
          color: white;
        }

        .atlas-tour .at-text-link {
          display: inline-block;
          margin-top: 20px;
          border-bottom: 1px solid var(--gold);
          padding-bottom: 5px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
        }

        .atlas-tour .at-hero {
          position: relative;
          display: flex;
          min-height: 680px;
          align-items: flex-end;
          background: #202a22;
          color: #fff;
          isolation: isolate;
        }

        .atlas-tour .at-hero-image,
        .atlas-tour .at-hero-shade {
          position: absolute;
          inset: 0;
        }

        .atlas-tour .at-hero-image { z-index: -2; }
        .atlas-tour .at-hero-image img { object-position: center 48%; }

        .atlas-tour .at-hero-shade {
          z-index: -1;
          background:
            linear-gradient(90deg, rgba(9,14,10,.88) 0%, rgba(9,14,10,.64) 43%, rgba(9,14,10,.22) 100%),
            linear-gradient(0deg, rgba(9,14,10,.78) 0%, rgba(9,14,10,.08) 72%);
        }

        .atlas-tour .at-hero-content {
          position: relative;
          z-index: 1;
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
          padding: 110px 0 65px;
          color: #fff !important;
        }

        .atlas-tour .at-hero .at-eyebrow {
          color: #f0ce88 !important;
          font-size: 12px;
        }

        .atlas-tour .at-hero h1 {
          max-width: 850px;
          margin: 19px 0 22px;
          color: #fff !important;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(48px, 6.5vw, 84px);
          font-weight: 400;
          letter-spacing: -2.7px;
          line-height: 1.02;
          text-shadow: 0 2px 20px rgba(0,0,0,.3);
        }

        .atlas-tour .at-hero-description {
          max-width: 570px;
          margin: 0;
          color: #fff !important;
          font-size: 17px;
          line-height: 1.85;
          text-shadow: 0 1px 8px rgba(0,0,0,.4);
        }

        .atlas-tour .at-hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 22px;
          margin-top: 30px;
        }

        .atlas-tour .at-hero .at-button {
          background: #d1ac67;
          border-color: #d1ac67;
          color: #191d17 !important;
        }

        .atlas-tour .at-hero .at-button:hover {
          background: #f0d59b;
          border-color: #f0d59b;
          color: #191d17 !important;
        }

        .atlas-tour .at-hero-back {
          color: #fff !important;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: .4px;
          text-decoration: none;
          text-shadow: 0 1px 8px rgba(0,0,0,.5);
        }

        .atlas-tour .at-hero-back:hover { color: #f0ce88 !important; }

        .atlas-tour .at-hero-bottom {
          display: flex;
          flex-wrap: wrap;
          gap: 34px;
          margin-top: 53px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,.36);
        }

        .atlas-tour .at-hero-bottom div { min-width: 105px; }

        .atlas-tour .at-hero-bottom strong {
          display: block;
          color: #fff !important;
          font-size: 13px;
          letter-spacing: 1.3px;
        }

        .atlas-tour .at-hero-bottom span {
          color: #eeeae1 !important;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .atlas-tour .at-fact-strip {
          position: relative;
          z-index: 2;
          background: #fffefa;
          border-bottom: 1px solid var(--line);
        }

        .atlas-tour .at-fact-strip-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .atlas-tour .at-fact {
          min-height: 104px;
          padding: 23px 25px;
          border-right: 1px solid var(--line);
        }

        .atlas-tour .at-fact:last-child { border-right: 0; }

        .atlas-tour .at-fact span {
          display: block;
          margin-bottom: 5px;
          color: #8b7652;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .atlas-tour .at-fact strong {
          display: block;
          color: var(--ink);
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.4;
        }

        .atlas-tour .at-subnav {
          background: var(--green);
          color: #fff;
        }

        .atlas-tour .at-subnav-inner {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 9px 30px;
          padding: 16px 0;
        }

        .atlas-tour .at-subnav a {
          color: #eee9dc;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.3px;
          text-decoration: none;
          text-transform: uppercase;
          transition: color .2s ease;
        }

        .atlas-tour .at-subnav a:hover { color: var(--gold-light); }

        .atlas-tour .at-overview-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          align-items: center;
          gap: 75px;
        }

        .atlas-tour .at-overview-image {
          position: relative;
          min-height: 570px;
        }

        .atlas-tour .at-overview-image img { position: absolute; inset: 0; }

        .atlas-tour .at-overview-image::after {
          position: absolute;
          right: -18px;
          bottom: -18px;
          z-index: -1;
          width: 48%;
          height: 48%;
          border: 1px solid var(--gold);
          content: "";
        }

        .atlas-tour .at-overview-content { padding: 25px 0; }

        .atlas-tour .at-overview-content .at-copy { margin: 0 0 17px; }

        .atlas-tour .at-booking-card {
          padding: 32px;
          background: #fffefa;
          border: 1px solid var(--line);
          box-shadow: 0 15px 45px rgba(32,36,31,.06);
        }

        .atlas-tour .at-booking-card h3 {
          margin: 8px 0 12px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 27px;
          font-weight: 400;
          line-height: 1.25;
        }

        .atlas-tour .at-booking-card p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .atlas-tour .at-booking-list {
          margin: 22px 0;
          padding: 0;
          list-style: none;
        }

        .atlas-tour .at-booking-list li {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          padding: 11px 0;
          border-bottom: 1px solid var(--line);
          font-size: 13px;
        }

        .atlas-tour .at-booking-list span { color: var(--muted); }
        .atlas-tour .at-booking-list strong { text-align: right; }
        .atlas-tour .at-booking-card .at-button { width: 100%; }

        .atlas-tour .at-highlight-section { background: #eae6db; }

        .atlas-tour .at-highlight-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #d8d2c5;
          border: 1px solid #d8d2c5;
        }

        .atlas-tour .at-highlight {
          min-height: 245px;
          padding: 31px 25px;
          background: var(--paper);
        }

        .atlas-tour .at-highlight-number {
          display: block;
          margin-bottom: 28px;
          color: #b28a4c;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 25px;
        }

        .atlas-tour .at-highlight h3 {
          margin: 0 0 12px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 22px;
          font-weight: 400;
          line-height: 1.25;
        }

        .atlas-tour .at-highlight p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .atlas-tour .at-terrain-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 70px;
        }

        .atlas-tour .at-terrain-image {
          height: 490px;
          overflow: hidden;
        }

        .atlas-tour .at-terrain-image img { transition: transform .6s ease; }
        .atlas-tour .at-terrain-image:hover img { transform: scale(1.035); }

        .atlas-tour .at-terrain-points {
          margin: 28px 0 0;
          padding: 0;
          list-style: none;
        }

        .atlas-tour .at-terrain-points li {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 13px;
          padding: 15px 0;
          border-top: 1px solid var(--line);
          color: var(--muted);
          font-size: 14px;
        }

        .atlas-tour .at-terrain-points span {
          color: #a27b40;
          font-weight: 700;
        }

        .atlas-tour .at-facts-section { background: #fffefa; }

        .atlas-tour .at-facts-layout {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 75px;
        }

        .atlas-tour .at-facts-table { border-top: 1px solid var(--line); }

        .atlas-tour .at-facts-row {
          display: grid;
          grid-template-columns: .7fr 1.3fr;
          gap: 25px;
          padding: 16px 0;
          border-bottom: 1px solid var(--line);
          font-size: 14px;
        }

        .atlas-tour .at-facts-row span { color: var(--muted); }
        .atlas-tour .at-facts-row strong { font-weight: 600; }

        .atlas-tour .at-culture {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 520px;
          background: var(--green);
          color: #fff;
        }

        .atlas-tour .at-culture-image { min-height: 520px; }
        .atlas-tour .at-culture-content { align-self: center; padding: 70px clamp(35px, 7vw, 100px); }
        .atlas-tour .at-culture .at-eyebrow { color: var(--gold-light); }
        .atlas-tour .at-culture .at-heading { color: #fff; }
        .atlas-tour .at-culture .at-copy { color: #e1e2d8; }

        .atlas-tour .at-culture-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
          margin-top: 30px;
        }

        .atlas-tour .at-culture-item {
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,.25);
        }

        .atlas-tour .at-culture-item h3 {
          margin: 0 0 7px;
          color: #f1d49a;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 19px;
          font-weight: 400;
        }

        .atlas-tour .at-culture-item p {
          margin: 0;
          color: #d7dbd1;
          font-size: 12px;
          line-height: 1.8;
        }

        .atlas-tour .at-gallery-grid {
          display: grid;
          grid-template-columns: 1.25fr .75fr .75fr;
          grid-template-rows: 245px 245px;
          gap: 14px;
        }

        .atlas-tour .at-gallery-item { overflow: hidden; }
        .atlas-tour .at-gallery-item:first-child { grid-row: span 2; }
        .atlas-tour .at-gallery-item img { transition: transform .6s ease; }
        .atlas-tour .at-gallery-item:hover img { transform: scale(1.04); }

        .atlas-tour .at-itinerary-section { background: #eae6db; }

        .atlas-tour .at-itinerary-intro {
          max-width: 700px;
          margin: 0 0 42px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .atlas-tour .at-itinerary-list {
          display: grid;
          gap: 22px;
        }

        .atlas-tour .at-day {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 370px;
          background: #fffefa;
          border: 1px solid #e0dcd1;
        }

        .atlas-tour .at-day:nth-child(even) .at-day-image { order: 2; }
        .atlas-tour .at-day-image { min-height: 370px; }
        .atlas-tour .at-day-content { align-self: center; padding: 40px clamp(25px, 5vw, 65px); }

        .atlas-tour .at-day-number {
          color: #a27b40;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 38px;
          line-height: 1;
        }

        .atlas-tour .at-day-content h3 {
          margin: 12px 0;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(24px, 2.6vw, 32px);
          font-weight: 400;
          line-height: 1.2;
        }

        .atlas-tour .at-day-location {
          margin-bottom: 16px;
          color: #927344;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .atlas-tour .at-day-content > p {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.85;
        }

        .atlas-tour .at-day-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 20px;
          margin: 18px 0;
          padding: 13px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          color: #62665d;
          font-size: 11px;
        }

        .atlas-tour .at-day-content ul {
          display: grid;
          gap: 7px;
          margin: 15px 0 0;
          padding-left: 18px;
          color: #62665d;
          font-size: 12px;
        }

        .atlas-tour .at-inclusions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .atlas-tour .at-inclusion-card {
          padding: 38px;
          background: #fffefa;
          border: 1px solid var(--line);
        }

        .atlas-tour .at-inclusion-card h3 {
          margin: 0 0 22px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 29px;
          font-weight: 400;
        }

        .atlas-tour .at-inclusion-card ul {
          display: grid;
          gap: 13px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .atlas-tour .at-inclusion-card li {
          display: grid;
          grid-template-columns: 22px 1fr;
          gap: 10px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .atlas-tour .at-inclusion-card li span {
          color: #a27b40;
          font-weight: 700;
        }

        .atlas-tour .at-prep-section { background: #eae6db; }

        .atlas-tour .at-prep-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .atlas-tour .at-prep-card {
          padding: 28px 24px;
          background: var(--paper);
          border-top: 2px solid var(--gold);
        }

        .atlas-tour .at-prep-card h3 {
          margin: 0 0 13px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 21px;
          font-weight: 400;
        }

        .atlas-tour .at-prep-card p {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.85;
        }

        .atlas-tour .at-difficulty-grid {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 75px;
          align-items: center;
        }

        .atlas-tour .at-difficulty-image { height: 430px; }

        .atlas-tour .at-difficulty-note {
          margin-top: 25px;
          padding: 22px 25px;
          background: #eae6db;
          border-left: 3px solid var(--gold);
          color: var(--muted);
          font-size: 13px;
          line-height: 1.85;
        }

        .atlas-tour .at-faq-section { background: #fffefa; }

        .atlas-tour .at-faq-layout {
          display: grid;
          grid-template-columns: .7fr 1.3fr;
          gap: 75px;
        }

        .atlas-tour .at-faq-list { border-top: 1px solid var(--line); }

        .atlas-tour .at-faq-list details {
          padding: 19px 0;
          border-bottom: 1px solid var(--line);
        }

        .atlas-tour .at-faq-list summary {
          position: relative;
          padding-right: 35px;
          color: var(--ink);
          cursor: pointer;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 19px;
          line-height: 1.45;
          list-style: none;
        }

        .atlas-tour .at-faq-list summary::-webkit-details-marker { display: none; }

        .atlas-tour .at-faq-list summary::after {
          position: absolute;
          top: 0;
          right: 3px;
          color: #a27b40;
          content: "+";
          font-family: Arial, sans-serif;
          font-size: 23px;
        }

        .atlas-tour .at-faq-list details[open] summary::after { content: "−"; }

        .atlas-tour .at-faq-list details p {
          max-width: 690px;
          margin: 13px 0 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.85;
        }

        .atlas-tour .at-final-cta {
          position: relative;
          display: flex;
          min-height: 500px;
          align-items: center;
          background: #1e2a22;
          color: #fff;
          isolation: isolate;
        }

        .atlas-tour .at-final-image,
        .atlas-tour .at-final-shade {
          position: absolute;
          inset: 0;
        }

        .atlas-tour .at-final-image { z-index: -2; }
        .atlas-tour .at-final-shade {
          z-index: -1;
          background: linear-gradient(90deg, rgba(10,17,12,.88), rgba(10,17,12,.35));
        }

        .atlas-tour .at-final-content {
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
          padding: 90px 0;
        }

        .atlas-tour .at-final-content .at-eyebrow { color: #f0ce88; }

        .atlas-tour .at-final-content h2 {
          max-width: 750px;
          margin: 15px 0 20px;
          color: #fff;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(38px, 5.5vw, 68px);
          font-weight: 400;
          letter-spacing: -1.8px;
          line-height: 1.1;
        }

        .atlas-tour .at-final-content p {
          max-width: 580px;
          margin-bottom: 28px;
          color: #f0eee6;
          font-size: 16px;
          line-height: 1.85;
        }

        .atlas-tour .at-related-section { padding: 86px 0; }

        .atlas-tour .at-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .atlas-tour .at-related-card {
          background: #fffefa;
          border: 1px solid var(--line);
        }

        .atlas-tour .at-related-image { height: 255px; overflow: hidden; }
        .atlas-tour .at-related-image img { transition: transform .5s ease; }
        .atlas-tour .at-related-card:hover .at-related-image img { transform: scale(1.04); }

        .atlas-tour .at-related-content { padding: 25px; }

        .atlas-tour .at-related-content .at-eyebrow {
          font-size: 9px;
          letter-spacing: 1.4px;
        }

        .atlas-tour .at-related-content h3 {
          margin: 10px 0;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 24px;
          font-weight: 400;
          line-height: 1.25;
        }

        .atlas-tour .at-related-content p {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
        }

        .atlas-tour .at-related-content a {
          display: inline-block;
          margin-top: 8px;
          padding-bottom: 4px;
          border-bottom: 1px solid var(--gold);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: uppercase;
        }

        .atlas-tour .at-footer {
          background: #171d18;
          color: #eeeae1;
        }

        .atlas-tour .at-footer-main {
          display: grid;
          grid-template-columns: 1.3fr .8fr .9fr 1fr;
          gap: 45px;
          padding: 65px 0 50px;
        }

        .atlas-tour .at-footer-brand img {
          width: 190px;
          height: auto;
          object-fit: contain;
          object-position: left center;
        }

        .atlas-tour .at-footer-brand p {
          max-width: 300px;
          margin-top: 20px;
          color: #b9beb5;
          font-size: 13px;
          line-height: 1.9;
        }

        .atlas-tour .at-footer h3 {
          margin: 0 0 19px;
          color: #e4c78c;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.6px;
          text-transform: uppercase;
        }

        .atlas-tour .at-footer-links {
          display: grid;
          gap: 11px;
        }

        .atlas-tour .at-footer-links a {
          color: #c4c8c0;
          font-size: 13px;
          text-decoration: none;
          transition: color .2s ease;
        }

        .atlas-tour .at-footer-links a:hover { color: #e4c78c; }

        .atlas-tour .at-footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 20px 0;
          border-top: 1px solid rgba(255,255,255,.15);
          color: #9fa69c;
          font-size: 11px;
        }

        @media (max-width: 1000px) {
          .atlas-tour .at-overview-grid,
          .atlas-tour .at-terrain-grid,
          .atlas-tour .at-facts-layout,
          .atlas-tour .at-difficulty-grid,
          .atlas-tour .at-faq-layout { gap: 40px; }

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
          .atlas-tour .at-overview-grid,
          .atlas-tour .at-terrain-grid,
          .atlas-tour .at-facts-layout,
          .atlas-tour .at-difficulty-grid,
          .atlas-tour .at-faq-layout { grid-template-columns: 1fr; gap: 35px; }

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

          .atlas-tour .at-gallery-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 250px 170px 170px;
          }

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
          <img src={images.hero} alt="E-bike adventure in the Atlas Mountains of Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · ATLAS MOUNTAINS · LUXURY E-BIKE · 5 DAYS</span>
          <h1>Atlas Luxury E-Bike Tour</h1>
          <p className="at-hero-description">
            Discover the Atlas Mountains on a five-day private
            E-bike journey from Marrakech. Explore spectacular
            mountain landscapes, traditional villages and
            selected cycling routes with a personalised itinerary.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Luxury Adventure <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>05 DAYS</strong><span>Private journey</span></div>
            <div><strong>ATLAS</strong><span>Mountain region</span></div>
            <div><strong>E-BIKE</strong><span>Electric assistance</span></div>
            <div><strong>MOROCCO</strong><span>Luxury experience</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>5 Days / 4 Nights</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Atlas Mountains</strong></div>
          <div className="at-fact"><span>Starting point</span><strong>Marrakech</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Luxury E-bike Journey</strong></div>
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
            <img src={images.overview} alt="Mountain scenery and E-bike routes in the Atlas Mountains" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A PRIVATE LUXURY CYCLING JOURNEY</span>
            <h2 className="at-heading">Discover the Atlas Mountains in Comfort</h2>
            <p className="at-copy">
              The Atlas Luxury E-Bike Tour is a five-day
              private cycling experience designed for riders
              who want to explore Morocco's mountain landscapes
              with a personalised itinerary.
            </p>
            <p className="at-copy">
              Travel from Marrakech towards the Atlas Mountains
              and discover selected cycling routes, traditional
              villages and beautiful valleys along the way.
            </p>
            <p className="at-copy">
              The programme combines private trip planning
              with flexible riding stages. Accommodation,
              transfers, meals, bicycle rental and additional
              services are arranged according to the details
              confirmed in your final proposal.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the itinerary →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE ATLAS EXPERIENCE</span>
            <h2 className="at-heading">Five Days of Luxury E-Bike Exploration</h2>
            <p className="at-copy">
              Enjoy a private journey through the Atlas Mountains,
              combining selected E-bike routes with time to
              appreciate the surrounding landscapes and
              traditional mountain communities.
            </p>
            <p className="at-copy">
              Your itinerary can be discussed around your
              travel dates, cycling experience and preferred
              riding style. The final route, accommodation,
              transfers and included services are agreed
              before your trip is confirmed.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Atlas Luxury E-Bike Tour</h3>
            <p>Five days exploring selected Atlas Mountain routes and landscapes on a private E-bike journey.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>5 days / 4 nights</strong></li>
              <li><span>Starting city</span><strong>Marrakech</strong></li>
              <li><span>Main region</span><strong>Atlas Mountains</strong></li>
              <li><span>Tour format</span><strong>Private luxury tour</strong></li>
              <li><span>Route programme</span><strong>Personalised itinerary</strong></li>
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
              <h2 className="at-heading">Highlights of the Atlas Luxury E-Bike Tour</h2>
            </div>
            <p>
              Discover the mountain scenery, traditional
              villages and selected cycling routes of the
              Atlas on a five-day private journey from Marrakech.
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
            <img src={images.trails} alt="Mountain tracks and valleys in the Atlas Mountains of Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE & TERRAIN</span>
            <h2 className="at-heading">Explore Selected Routes in the Atlas Mountains</h2>
            <p className="at-copy">
              The Atlas Mountains offer a varied environment
              for cycling, with mountain roads, rural tracks,
              traditional settlements and changing landscapes.
              Terrain and surface conditions can vary between
              locations and selected route sections.
            </p>
            <p className="at-copy">
              The cycling programme is planned around your
              experience, preferred riding style and the
              conditions of the selected routes. Final
              distances, elevation and technical demands
              should be confirmed before departure.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Selected mountain roads and suitable rural tracks</li>
              <li><span>02</span>Electric assistance on suitable climbs and routes</li>
              <li><span>03</span>Traditional villages and mountain scenery</li>
              <li><span>04</span>Private riding stages adapted to your experience</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR JOURNEY</span>
            <h2 className="at-heading">Luxury E-Bike Tour Information</h2>
            <p className="at-copy">
              Review the main details of this five-day
              private cycling experience. Your accommodation,
              E-bike arrangements, transfers, meals and
              additional services are confirmed in your
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
          <img src={images.village} alt="Traditional village and mountain scenery in Morocco" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover the Landscapes and Culture of the Atlas</h2>
          <p className="at-copy">
            This journey is about more than the kilometres
            covered. Between riding stages, discover the
            landscapes, architecture and communities that
            give the Atlas Mountains their distinctive character.
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
              <span className="at-eyebrow">THE ATLAS EXPERIENCE</span>
              <h2 className="at-heading">Explore the Landscapes Along the Journey</h2>
            </div>
            <p>
              Discover mountain scenery, rural villages
              and natural landscapes that make the Atlas
              Mountains a remarkable destination for
              a private E-bike adventure.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="Mountain landscape in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.trails} alt="Rural mountain tracks in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional village landscape in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Atlas Mountains valley scenery" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="E-bike cycling scenery in the Atlas Mountains" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">FIVE DAYS IN MOROCCO</span>
              <h2 className="at-heading">Atlas Luxury E-Bike Tour Itinerary</h2>
            </div>
            <p>
              A suggested five-day private programme
              connecting Marrakech with selected areas
              of the Atlas Mountains. Final riding stages,
              transfers and overnight arrangements are
              confirmed during trip planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The itinerary below provides an overview of the
            experience. Daily distances, elevation gain,
            bicycle arrangements, accommodation and exact
            trail sections depend on the final programme
            agreed with you.
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
              <h2 className="at-heading">What Is Included in Your Luxury E-Bike Tour?</h2>
            </div>
            <p>
              The final inclusions are confirmed in your
              booking proposal. Accommodation, bicycle
              rental, transfers, meals and support services
              should be checked before confirming your trip.
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
              <h2 className="at-heading">Preparing for Your Atlas Luxury E-Bike Tour</h2>
            </div>
            <p>
              Prepare your cycling equipment, riding
              experience and personal essentials for
              a multi-day journey through the Atlas Mountains.
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
              src="/images/scott-ebike-tour-morocco.jpg"
              alt="Electric mountain bike in the Atlas Mountains of Morocco"
            />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR OWN LEVEL</span>
            <h2 className="at-heading">Difficulty and E-Bike Experience</h2>
            <p className="at-copy">
              The difficulty of this private E-bike
              experience depends on the selected routes,
              the terrain and your cycling background.
              The daily programme should reflect your
              fitness, confidence and preferred riding style.
            </p>
            <p className="at-copy">
              Electric assistance can help riders manage
              suitable climbs, but good balance, bicycle
              control and confidence on changing surfaces
              remain important. The final route should
              be discussed before booking.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> E-bike models,
              frame sizes, equipment availability and
              route suitability must be checked before
              booking. Final difficulty, distances,
              elevation figures and trail surfaces must
              be confirmed against the actual route.
              Accommodation and luxury services are
              determined by your confirmed proposal.
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
              private E-bike journeys in the Atlas Mountains.
              Contact our team to discuss your preferred
              dates, cycling experience and trip arrangements.
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
          <img src={images.final} alt="Mountain landscape in the Atlas Mountains of Morocco" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR ATLAS ADVENTURE STARTS HERE</span>
          <h2>Ready to Discover the Atlas in Comfort?</h2>
          <p>
            Tell us your preferred dates, group size,
            cycling experience and accommodation preferences.
            We will discuss suitable routes, E-bike arrangements
            and a personalised five-day private journey
            through the Atlas Mountains.
          </p>
          <a className="at-button" href="/contact">Plan Your Luxury Adventure <span>→</span></a>
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
              Discover more ways to experience Morocco,
              from private electric mountain biking
              journeys to family cycling experiences
              and High Atlas singletrack adventures.
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
          <span>© {new Date().getFullYear()} Mountain Bike Morocco. All rights reserved.</span>
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}