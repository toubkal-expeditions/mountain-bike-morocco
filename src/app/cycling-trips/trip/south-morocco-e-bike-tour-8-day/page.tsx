import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "South Morocco E-Bike Tour – 8 Days | Mountain Bike Morocco",
  description:
    "Discover southern Morocco on an eight-day private E-bike adventure through mountain landscapes, traditional villages, valleys and desert scenery.",
  alternates: {
    canonical: "/cycling-trips/trip/south-morocco-e-bike-tour-8-day",
  },
};

const images = {
  hero: "/images/south-morocco-cycling-tour.jpg",
  overview: "/images/southern-ebike-cycling-expeditions.jpg",
  mountains: "/images/eBike-tour-atlas-mountains-morocco.jpg",
  trails: "/images/ouirgane-valley-ebike-tour.jpg",
  village: "/images/berber-villages-cycling-expeditions.jpg",
  valley: "/images/south-morocco-cycling-expedition.jpg",
  desert: "/images/sahara-desert-ebike-expeditions.jpg",
  cycling: "/images/south-ebike-tourmorocco.jpg",
  oasis: "/images/atlas-desert-cycling-tour.jpg",
  final: "/images/south-morocco-cycling-tours.jpg",
};

const facts = [
  ["Duration", "8 days / 7 nights"],
  ["Destination", "Southern Morocco"],
  ["Starting point", "Marrakech"],
  ["Main areas", "Atlas region and southern landscapes"],
  ["Cycling style", "Private E-bike adventure"],
  ["Difficulty", "Adapted to rider experience and confirmed route"],
  ["Experience", "Previous cycling experience recommended"],
  ["Tour format", "Private guided cycling journey"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "Discover Southern Morocco",
    text: "Explore the changing landscapes of southern Morocco, from mountain scenery and rural valleys to open and dramatic desert environments.",
  },
  {
    number: "02",
    title: "Ride Through Traditional Villages",
    text: "Discover rural settlements, traditional architecture and the landscapes surrounding communities along the proposed route.",
  },
  {
    number: "03",
    title: "Explore Valleys and Desert Scenery",
    text: "Experience the contrast between mountain environments, dry valleys and the distinctive landscapes of southern Morocco.",
  },
  {
    number: "04",
    title: "Eight Days of E-Bike Adventure",
    text: "Enjoy a multi-day private cycling experience with a route and riding stages discussed according to your group's ability.",
  },
];

const beyondTrail = [
  {
    title: "Mountain landscapes",
    text: "Discover the changing scenery of the Atlas region, with mountain slopes, open valleys and views across the surrounding countryside.",
  },
  {
    title: "Traditional villages",
    text: "Explore rural communities and traditional architecture, experiencing a quieter side of Morocco away from the main cities.",
  },
  {
    title: "Southern culture",
    text: "Enjoy opportunities to discover regional traditions, local food and the hospitality of communities along the journey.",
  },
  {
    title: "Desert and valley scenery",
    text: "Experience the distinctive colours and open landscapes of southern Morocco as the route moves away from the mountains.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Marrakech and Tour Preparation",
    location: "Marrakech",
    distance: "No scheduled riding",
    riding: "Arrival and bicycle preparation",
    image: images.overview,
    text: "Arrive in Marrakech and meet the local team. The first day is dedicated to preparing for your eight-day E-bike adventure through southern Morocco. Review the proposed route, discuss your cycling experience and check the available bicycles and equipment. The team will explain the planned stages and confirm the practical arrangements before departure.",
    details: [
      "Arrival and welcome in Marrakech",
      "Meet the local cycling team",
      "Review bicycle sizes and equipment",
      "Discuss the proposed route and daily stages",
    ],
  },
  {
    day: "02",
    title: "Marrakech Towards the Atlas Mountains",
    location: "Marrakech – Atlas region",
    distance: "Route-dependent",
    riding: "Introductory E-bike stage",
    image: images.mountains,
    text: "Leave Marrakech and travel towards the Atlas Mountains. Begin discovering the mountain environment on a selected cycling route, with time to become familiar with the E-bike and its electric assistance. The route and riding distance are selected according to the confirmed itinerary, current conditions and the group's cycling experience.",
    details: [
      "Travel towards the Atlas mountain region",
      "Prepare and adjust the bicycles",
      "Begin the mountain cycling journey",
      "Enjoy views across the surrounding landscape",
    ],
  },
  {
    day: "03",
    title: "Cycling Through Mountain Valleys and Villages",
    location: "Atlas Mountains",
    distance: "Route-dependent",
    riding: "E-bike mountain and rural routes",
    image: images.trails,
    text: "Continue through the Atlas region, discovering mountain valleys and rural landscapes by E-bike. Depending on the route selected, the stage may include quiet roads, rural tracks and suitable mountain sections. Enjoy scenic stops and opportunities to discover traditional villages along the way.",
    details: [
      "Ride through selected mountain routes",
      "Discover rural valleys and traditional villages",
      "Enjoy scenic stops along the journey",
      "Continue towards the next overnight location",
    ],
  },
  {
    day: "04",
    title: "Journey Towards Southern Morocco",
    location: "Atlas region – Southern Morocco",
    distance: "Route-dependent",
    riding: "Cross-region cycling and transfer arrangements",
    image: images.valley,
    text: "Continue the journey towards the landscapes of southern Morocco. The scenery gradually changes as the route moves away from the higher mountain environment towards more open valleys and drier landscapes. The exact cycling sections and any transfers depend on the final route and overnight arrangements.",
    details: [
      "Continue towards southern Morocco",
      "Discover changing rural landscapes",
      "Follow the confirmed cycling route",
      "Overnight according to the final itinerary",
    ],
  },
  {
    day: "05",
    title: "Explore Southern Valleys and Rural Landscapes",
    location: "Southern Morocco",
    distance: "Route-dependent",
    riding: "E-bike rural and valley routes",
    image: images.oasis,
    text: "Discover the landscapes of southern Morocco on a selected E-bike stage. Depending on the confirmed programme, the route may include quiet rural roads, valley tracks and scenic sections through the countryside. Enjoy time to appreciate the changing scenery and the character of the region.",
    details: [
      "Explore selected rural cycling routes",
      "Discover southern valleys and open landscapes",
      "Enjoy stops along the route",
      "Continue to the agreed overnight location",
    ],
  },
  {
    day: "06",
    title: "Desert Landscapes and Traditional Settlements",
    location: "Southern Morocco",
    distance: "Route-dependent",
    riding: "E-bike exploration",
    image: images.desert,
    text: "Continue through the distinctive landscapes of southern Morocco, where dry valleys, open terrain and traditional settlements create a different atmosphere from the Atlas stages. The exact riding route is selected according to surface conditions, weather and the group's experience.",
    details: [
      "Discover the region's open landscapes",
      "Ride selected suitable tracks and roads",
      "Explore traditional settlements along the route",
      "Enjoy the scenery of southern Morocco",
    ],
  },
  {
    day: "07",
    title: "Final Southern Morocco Cycling Experience",
    location: "Southern Morocco",
    distance: "Route-dependent",
    riding: "Final planned E-bike stage",
    image: images.cycling,
    text: "Enjoy another day exploring the landscapes of southern Morocco by E-bike. The final cycling stage can be adapted to the group's preferred pace and riding ability. Take time for scenic stops and enjoy the final part of this private journey before the return arrangements.",
    details: [
      "Enjoy the final planned cycling stage",
      "Explore selected countryside routes",
      "Take time for photographs and scenic stops",
      "Prepare for the return journey",
    ],
  },
  {
    day: "08",
    title: "Return Journey to Marrakech",
    location: "Southern Morocco – Marrakech",
    distance: "No fixed riding distance",
    riding: "Departure and return arrangements",
    image: images.final,
    text: "Enjoy breakfast and the final moments of your southern Morocco adventure. Depending on the confirmed programme, the day is dedicated to the return journey to Marrakech or your agreed onward arrangements. The eight-day private E-bike tour concludes according to the transfer plan confirmed before departure.",
    details: [
      "Breakfast and final preparations",
      "Check-out from the accommodation",
      "Return transfer according to the agreed plan",
      "End of the eight-day journey",
    ],
  },
];

const inclusions = [
  "Trip planning and route coordination",
  "Local cycling guide as agreed in your itinerary",
  "Accommodation specified in your final proposal",
  "Meals explicitly listed in your confirmed itinerary",
  "E-bike rental if specifically included",
  "Helmet and cycling equipment arrangements as confirmed",
  "Support vehicle and transfers specified in your proposal",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "E-bike rental unless agreed in your proposal",
  "Personal cycling equipment and clothing",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses and tips",
  "Additional nights and transfers not included in your proposal",
];

const preparation = [
  {
    title: "Cycling Experience",
    text: "Previous cycling experience is recommended for this multi-day journey. Riders should be comfortable controlling and braking their bicycles on different surfaces and changing terrain.",
  },
  {
    title: "Fitness and Riding Ability",
    text: "The route should be selected according to the group's fitness and cycling experience. Share your riding background before booking so that the proposed stages can be discussed.",
  },
  {
    title: "E-Bike Equipment",
    text: "Confirm bicycle sizes, battery arrangements, charging opportunities and equipment availability before travelling. Bring any personal equipment you prefer to use during the tour.",
  },
  {
    title: "Clothing and Protection",
    text: "Bring comfortable cycling clothing, suitable footwear, gloves, sun protection and a water bottle. Conditions can vary between mountain and southern regions.",
  },
];

const faqs = [
  {
    q: "How long is the South Morocco E-Bike Tour?",
    a: "The tour is planned over eight days and seven nights, starting in Marrakech and exploring selected mountain and southern Moroccan landscapes.",
  },
  {
    q: "Where does the tour start?",
    a: "The journey starts in Marrakech. Meeting arrangements, bicycle preparation and departure details are confirmed before the trip.",
  },
  {
    q: "Where does the tour finish?",
    a: "The proposed journey returns to Marrakech on the eighth day. The exact return arrangements are confirmed in the final itinerary.",
  },
  {
    q: "Is this tour suitable for beginners?",
    a: "Previous cycling experience is recommended. Suitability depends on the selected terrain, daily distances and each rider's experience and fitness.",
  },
  {
    q: "Are daily distances and elevation figures fixed?",
    a: "No fixed distances or elevation figures are promised on this page. They depend on the selected route, confirmed overnight locations and actual riding conditions. The daily stages should be discussed and confirmed before booking.",
  },
  {
    q: "Can I use an electric mountain bike?",
    a: "The tour is designed around E-bike cycling. Bicycle model, frame size, battery capacity and availability must be confirmed for your travel dates before the booking is finalised.",
  },
  {
    q: "What type of terrain should I expect?",
    a: "The journey may include selected paved roads, rural tracks and suitable off-road sections. Exact surfaces and technical demands depend on the route agreed for your tour.",
  },
  {
    q: "What is included in the tour?",
    a: "Inclusions depend on your confirmed proposal. Accommodation, guiding, bicycle rental, meals, transfers and support services should be clearly listed before you confirm your booking.",
  },
  {
    q: "What is the best time to do this tour?",
    a: "Spring and autumn are generally suitable periods for cycling in Morocco. Conditions vary between mountain and southern regions, so travel dates and the route should be considered together.",
  },
  {
    q: "Can the itinerary be customised?",
    a: "The private itinerary can be discussed around your travel dates, cycling experience, preferred riding style and practical requirements. The final route and services are agreed before booking.",
  },
];

const relatedTours = [
  {
    category: "E-MTB ADVENTURE",
    title: "Atlas Mountains E-Bike Tour – 4 Days",
    text: "Discover selected mountain routes, traditional villages and spectacular landscapes on a private electric mountain biking adventure.",
    image: "/images/atlas-mountains-ebike-tour.jpg",
    href: "/cycling-trips/trip/atlas-mountains-e-bike-tour-4-day",
  },
  {
    category: "E-BIKE ADVENTURE",
    title: "Atlas to Atlantic Coast E-Bike Tour – 6 Days",
    text: "Ride from the Atlas region towards Morocco's Atlantic coastline on a private multi-day E-bike journey.",
    image: "/images/eBike-tour-atlas-mountains-morocco.jpg",
    href: "/cycling-trips/trip/atlas-to-atlantic-coast-ebike-tour-6-day",
  },
  {
    category: "E-BIKE ADVENTURE",
    title: "Morocco Family E-Bike Tour – 4 Days",
    text: "Enjoy a private family cycling experience with a flexible programme planned around the abilities of your group.",
    image: "/images/group-ebike-tour-morocco.jpg",
    href: "/cycling-trips/trip/morocco-family-e-bike-tour-4-day",
  },
];

export default function SouthMoroccoEBikeTour8DayPage() {
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

        .atlas-tour .at-itinerary-list { display: grid; gap: 22px; }

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
          <img src={images.hero} alt="E-bike cycling adventure in southern Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · SOUTHERN MOROCCO · E-BIKE · 8 DAYS</span>
          <h1>South Morocco E-Bike Tour</h1>
          <p className="at-hero-description">
            Discover the landscapes of southern Morocco
            on an eight-day private E-bike adventure
            through mountain scenery, traditional villages,
            open valleys and distinctive southern landscapes.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your E-Bike Adventure <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>08 DAYS</strong><span>Private journey</span></div>
            <div><strong>SOUTH</strong><span>Morocco region</span></div>
            <div><strong>E-BIKE</strong><span>Electric cycling</span></div>
            <div><strong>ADVENTURE</strong><span>Mountain & desert scenery</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>8 Days / 7 Nights</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Southern Morocco</strong></div>
          <div className="at-fact"><span>Starting point</span><strong>Marrakech</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Private E-bike Adventure</strong></div>
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
            <img src={images.overview} alt="E-bike journey through mountain landscapes in Morocco" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">AN E-BIKE JOURNEY THROUGH THE SOUTH</span>
            <h2 className="at-heading">Discover the Landscapes of Southern Morocco</h2>
            <p className="at-copy">
              The South Morocco E-Bike Tour is an
              eight-day private cycling journey designed
              to explore the varied landscapes beyond
              Marrakech and the Atlas region.
            </p>
            <p className="at-copy">
              Travel through selected mountain and rural
              areas, discover traditional settlements and
              experience the distinctive scenery of
              southern Morocco along the way.
            </p>
            <p className="at-copy">
              The final route, riding distances, elevation
              and overnight locations are confirmed during
              trip planning according to your experience,
              travel dates and actual riding conditions.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the itinerary →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE E-BIKE EXPERIENCE</span>
            <h2 className="at-heading">Eight Days Exploring Southern Morocco</h2>
            <p className="at-copy">
              Experience the contrast between mountain
              scenery, rural valleys and the distinctive
              landscapes of southern Morocco on a
              multi-day E-bike adventure.
            </p>
            <p className="at-copy">
              Before confirming the tour, share your
              cycling experience, preferred riding pace
              and travel dates. This allows the route,
              equipment and support arrangements to
              be discussed in detail.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>South Morocco E-Bike Tour</h3>
            <p>Eight days exploring selected mountain, rural and southern Moroccan landscapes.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>8 days / 7 nights</strong></li>
              <li><span>Starting city</span><strong>Marrakech</strong></li>
              <li><span>Destination</span><strong>Southern Morocco</strong></li>
              <li><span>Tour format</span><strong>Private guided tour</strong></li>
              <li><span>Cycling style</span><strong>E-bike adventure</strong></li>
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
              <h2 className="at-heading">Highlights of the South Morocco E-Bike Tour</h2>
            </div>
            <p>
              Discover the changing scenery and cultural
              character of southern Morocco on an
              eight-day private E-bike journey.
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
            <img src={images.trails} alt="Rural cycling tracks in the Atlas region of Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE & TERRAIN</span>
            <h2 className="at-heading">From Mountain Valleys to Southern Landscapes</h2>
            <p className="at-copy">
              The proposed journey connects different
              environments, beginning around Marrakech
              and the Atlas region before continuing
              towards the landscapes of southern Morocco.
            </p>
            <p className="at-copy">
              Depending on the confirmed itinerary,
              cycling may include paved roads, rural
              tracks and suitable off-road sections.
              The final route should be selected according
              to the group's experience and actual
              riding conditions.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Selected Atlas mountain roads and rural tracks</li>
              <li><span>02</span>Traditional villages and countryside landscapes</li>
              <li><span>03</span>Southern valleys and open scenery</li>
              <li><span>04</span>E-bike assistance on suitable cycling stages</li>
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
              Review the main details of this eight-day
              cycling experience. Final route distances,
              elevation, accommodation, bicycle rental
              and support services are confirmed in
              your personalised trip proposal.
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
          <img src={images.village} alt="Traditional village in the Moroccan countryside" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover the Landscapes and Culture of Southern Morocco</h2>
          <p className="at-copy">
            This journey is about more than the kilometres
            covered. Between riding stages, enjoy time
            discovering the landscapes, architecture
            and communities that give southern Morocco
            its distinctive character.
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
              <span className="at-eyebrow">MOUNTAINS, VALLEYS & SOUTHERN SCENERY</span>
              <h2 className="at-heading">Explore the Landscapes Along the Journey</h2>
            </div>
            <p>
              From Atlas mountain scenery and rural
              villages to the open landscapes of the
              south, discover the varied environments
              of Morocco along the route.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="Atlas Mountains scenery in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.trails} alt="Rural mountain cycling tracks" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional Moroccan village" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Moroccan mountain valley scenery" /></div>
            <div className="at-gallery-item"><img src={images.desert} alt="Open desert landscape in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EIGHT DAYS IN MOROCCO</span>
              <h2 className="at-heading">South Morocco E-Bike Tour Itinerary</h2>
            </div>
            <p>
              A suggested eight-day journey from Marrakech
              through the Atlas region towards southern
              Morocco. Final riding stages, transfers
              and overnight arrangements are confirmed
              during planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The itinerary below provides an overview of
            the proposed experience. Daily distances,
            elevation gain, exact cycling routes and
            overnight locations depend on the final
            programme agreed before booking.
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
              <h2 className="at-heading">What Is Included in Your E-Bike Tour?</h2>
            </div>
            <p>
              The final inclusions are confirmed in your
              booking proposal. Review the services listed
              below and check bicycle availability and
              support arrangements before confirming.
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
              <h2 className="at-heading">Preparing for Your South Morocco E-Bike Tour</h2>
            </div>
            <p>
              Prepare your cycling equipment and riding
              experience for a multi-day journey through
              mountain, rural and southern environments.
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
            <img src={images.cycling} alt="Electric mountain bike ready for a cycling tour in Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">Difficulty and Cycling Experience</h2>
            <p className="at-copy">
              The difficulty of this eight-day journey
              depends on the selected route, daily
              distances, elevation and the group's
              cycling experience. The route should
              be discussed before confirming the tour.
            </p>
            <p className="at-copy">
              Riders should be comfortable controlling
              and braking their bicycles on different
              surfaces. Electric assistance can help
              with selected climbs, but does not replace
              the need for balance, bike handling and
              suitable fitness.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty,
              distances, elevation figures, trail surfaces
              and bicycle arrangements must be confirmed
              against the actual route and your group's
              experience. This page does not promise
              fixed daily distances or technical conditions.
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
              the South Morocco E-bike journey.
              Contact our team to discuss your travel
              dates, cycling experience and route options.
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
          <img src={images.final} alt="Cycling adventure through the landscapes of Morocco" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR SOUTH MOROCCO E-BIKE ADVENTURE STARTS HERE</span>
          <h2>Ready to Discover Southern Morocco by E-Bike?</h2>
          <p>
            Tell us your preferred dates, group size
            and cycling experience. We will discuss
            suitable E-bikes, possible routes and
            arrangements for your eight-day journey
            through Morocco.
          </p>
          <a className="at-button" href="/contact">Plan Your E-Bike Adventure <span>→</span></a>
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
              from Atlas mountain E-bike adventures
              to longer journeys and family cycling trips.
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
              rural valleys and southern landscapes with
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