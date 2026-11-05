import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Atlas Marrakech E-Bike Tour – 7 Days | Mountain Bike Morocco",
  description:
    "Discover Marrakech and the Atlas Mountains on a seven-day private E-MTB adventure in Morocco. Explore mountain trails, traditional villages, valleys and spectacular landscapes.",
  alternates: {
    canonical: "/cycling-trips/trip/atlas-marrakech-e-bike-tour-7-day",
  },
};

const images = {
  hero: "/images/e-mtb-tour-from-marrakech.jpg",
  overview: "/images/day-ebike-tour-from-marrakech.jpg",
  mountains: "/images/atlas-mountains-ebike-tour.jpg",
  trails: "/images/e-bike-tour-atlas-mountains.jpg",
  village: "/images/berber-villages-cycling-expeditions.jpg",
  valley: "/images/ouirgane-valley-ebike-tour.jpg",
  cycling: "/images/group-ebike-tour-morocco.jpg",
  atlas: "/images/eBike-tour-atlas-mountains-morocco.jpg",
  south: "/images/south-ebike-tourmorocco.jpg",
  final: "/images/atlas-mountains-cycling-expedition.jpg",
};

const facts = [
  ["Duration", "7 days / 6 nights"],
  ["Destination", "Marrakech & Atlas Mountains"],
  ["Starting point", "Marrakech"],
  ["Main areas", "High Atlas mountain region"],
  ["Cycling style", "Electric mountain biking"],
  ["Difficulty", "Adapted to the confirmed route"],
  ["Experience", "Previous cycling experience recommended"],
  ["Tour format", "Private E-MTB adventure"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "Discover Marrakech",
    text: "Begin your Moroccan cycling adventure in Marrakech, a fascinating city combining historic architecture, traditional markets, gardens and a distinctive atmosphere.",
  },
  {
    number: "02",
    title: "Explore the High Atlas",
    text: "Leave the city behind and discover the impressive mountain landscapes surrounding Marrakech, with rural valleys, traditional settlements and changing scenery.",
  },
  {
    number: "03",
    title: "Ride with Electric Assistance",
    text: "Enjoy selected mountain routes on an electric mountain bike. Assistance can make suitable climbs more manageable while allowing you to explore the terrain at your own pace.",
  },
  {
    number: "04",
    title: "Experience Traditional Villages",
    text: "Discover rural Morocco, traditional architecture, cultivated landscapes and the welcoming character of communities throughout the Atlas region.",
  },
];

const beyondTrail = [
  {
    title: "Marrakech and its heritage",
    text: "Experience the atmosphere of Marrakech, from its historic streets and traditional architecture to its markets, gardens and local culture.",
  },
  {
    title: "Traditional mountain villages",
    text: "Discover rural communities, traditional houses and the everyday life of villages scattered throughout the Atlas Mountains.",
  },
  {
    title: "Spectacular mountain scenery",
    text: "Experience changing mountain landscapes, rugged slopes, open valleys and impressive views as you explore the region by electric mountain bike.",
  },
  {
    title: "Moroccan hospitality",
    text: "Discover local traditions, regional food and the hospitality that makes travelling through the Atlas Mountains a memorable experience.",
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
    text: "Arrive in Marrakech and begin your seven-day Moroccan cycling adventure. Meet the local team and settle into your accommodation. Depending on your arrival time, enjoy some free time to discover the atmosphere of the city. The team will discuss the programme, review your cycling experience and prepare the electric mountain bikes and equipment for the journey ahead.",
    details: [
      "Arrival and welcome in Marrakech",
      "Transfer to your accommodation",
      "Meet the local cycling team",
      "Discuss the E-MTB programme and equipment",
    ],
  },
  {
    day: "02",
    title: "From Marrakech Towards the Atlas Mountains",
    location: "Marrakech – Atlas Mountains",
    distance: "Route-dependent",
    riding: "Introductory E-MTB experience",
    image: images.mountains,
    text: "Leave Marrakech and travel towards the Atlas Mountains. Discover the changing landscapes as the urban environment gives way to rural countryside and mountain scenery. Depending on the confirmed route and conditions, enjoy an introductory electric mountain bike ride. Become familiar with the bicycle, electric assistance and the terrain selected for your journey.",
    details: [
      "Travel from Marrakech towards the Atlas region",
      "Prepare and adjust your electric mountain bike",
      "Discover selected mountain tracks and paths",
      "Become familiar with the riding terrain",
    ],
  },
  {
    day: "03",
    title: "Explore Atlas Mountain Trails",
    location: "Atlas Mountains",
    distance: "Route-dependent",
    riding: "Electric mountain biking",
    image: images.trails,
    text: "Enjoy a full day exploring selected routes in the Atlas Mountains. Ride through changing mountain landscapes and discover rural tracks, natural paths and scenic sections of the region. Electric assistance can help you manage suitable climbs, while the daily route is planned according to your experience, riding ability and battery range.",
    details: [
      "Explore selected mountain biking routes",
      "Ride through varied mountain landscapes",
      "Discover natural trails and rural tracks",
      "Plan the ride around battery range and terrain",
    ],
  },
  {
    day: "04",
    title: "Mountain Valleys and Traditional Villages",
    location: "Atlas Mountains",
    distance: "Route-dependent",
    riding: "E-MTB and village exploration",
    image: images.valley,
    text: "Continue your journey through the Atlas Mountains, discovering mountain valleys and traditional villages. The selected route can combine rural tracks, scenic riding sections and opportunities to experience the character of the region. Enjoy the landscape and local atmosphere while your cycling programme is adapted to the terrain and your group's preferences.",
    details: [
      "Explore selected mountain valley routes",
      "Discover traditional rural settlements",
      "Experience the landscapes of the Atlas region",
      "Enjoy a route adapted to your riding ability",
    ],
  },
  {
    day: "05",
    title: "A Full Day of Electric Mountain Biking",
    location: "High Atlas",
    distance: "Route-dependent",
    riding: "Mountain trails and scenic climbs",
    image: images.atlas,
    text: "Spend another day exploring the High Atlas by electric mountain bike. Discover selected mountain tracks and enjoy the variety of the terrain. Depending on the confirmed route, the day can include climbs, descents and scenic riding sections. Daily distances, elevation gain and technical demands are planned around the selected trails, battery capacity and your riding experience.",
    details: [
      "Discover further selected mountain routes",
      "Ride through changing mountain scenery",
      "Use electric assistance on suitable climbs",
      "Plan daily riding around battery requirements",
    ],
  },
  {
    day: "06",
    title: "Final Mountain Ride and Return Towards Marrakech",
    location: "Atlas Mountains – Marrakech",
    distance: "Route-dependent",
    riding: "Final E-MTB ride and return transfer",
    image: images.cycling,
    text: "Enjoy your final planned mountain biking experience before returning towards Marrakech. The morning route can be selected according to your departure from the mountain region, available riding time and your group's preferences. After the ride, prepare for the return journey and enjoy the transition from the mountain environment back to the city.",
    details: [
      "Breakfast and preparation",
      "Final selected E-MTB route",
      "Return transfer towards Marrakech",
      "Settle into your accommodation",
    ],
  },
  {
    day: "07",
    title: "Departure from Marrakech",
    location: "Marrakech",
    distance: "No scheduled riding",
    riding: "Departure arrangements",
    image: images.final,
    text: "Enjoy breakfast and your final moments in Marrakech before your onward journey. Depending on your departure time, there may be an opportunity to enjoy some free time in the city. Your seven-day Atlas Marrakech E-Bike Tour comes to an end with memories of mountain landscapes, traditional villages and electric mountain biking in Morocco.",
    details: [
      "Breakfast at your accommodation",
      "Free time depending on departure arrangements",
      "Transfer if included in your confirmed proposal",
      "End of the seven-day cycling adventure",
    ],
  },
];

const inclusions = [
  "Trip planning and route coordination",
  "Local cycling support as agreed in your itinerary",
  "Accommodation specified in your final proposal",
  "Meals explicitly listed in your confirmed itinerary",
  "Electric mountain bike rental if specifically included",
  "Battery and charging arrangements as agreed",
  "Support vehicle and transfers specified in your proposal",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Electric mountain bike unless agreed in your proposal",
  "Personal cycling equipment and clothing",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses and tips",
  "Additional nights and transfers not included in your proposal",
];

const preparation = [
  {
    title: "Choose the Right E-MTB",
    text: "Your electric mountain bike should be suitable for the terrain included in the confirmed route. Discuss the bicycle type, suspension, brakes and recommended setup with the team before travelling.",
  },
  {
    title: "Battery Range and Charging",
    text: "Battery range depends on the bicycle, battery capacity, assistance mode, rider weight, elevation and terrain. Charging arrangements and daily riding plans should be confirmed before the tour.",
  },
  {
    title: "Fitness and Riding Experience",
    text: "Electric assistance can help on climbs, but mountain biking still requires balance, bike control and confidence on varied terrain. Share your riding experience and fitness level before confirming the route.",
  },
  {
    title: "Cycling Equipment and Protection",
    text: "Bring a suitable helmet, gloves, cycling glasses, comfortable riding clothing and appropriate footwear. Sun protection, hydration equipment and basic personal repair supplies are recommended.",
  },
];

const faqs = [
  {
    q: "How long is the Atlas Marrakech E-Bike Tour?",
    a: "The tour is planned over seven days and six nights. It combines arrival and departure arrangements in Marrakech with several days exploring selected routes and landscapes in the Atlas Mountains.",
  },
  {
    q: "Where does the tour start?",
    a: "The journey starts in Marrakech. From the city, you travel towards the Atlas Mountains for the mountain biking stages before returning to Marrakech according to the confirmed itinerary.",
  },
  {
    q: "What type of bicycle is used?",
    a: "The experience is designed around electric mountain bikes. The exact bicycle model, battery capacity, rental arrangements and equipment should be confirmed in your trip proposal.",
  },
  {
    q: "Do I need experience riding an electric mountain bike?",
    a: "Previous cycling experience is recommended. Electric assistance can help with climbing, but riders still need confidence with braking, balance, handling and changing trail conditions. The selected route should match your experience.",
  },
  {
    q: "How far can an electric mountain bike travel?",
    a: "Battery range varies according to battery capacity, assistance mode, rider weight, elevation, terrain and riding conditions. Daily distances and charging arrangements should be planned around the specific bicycle and confirmed route.",
  },
  {
    q: "Is the tour suitable for beginners?",
    a: "Suitability depends on the final route and your cycling experience. Some routes may be suitable for less experienced riders, while others can include more demanding terrain. Share your experience so an appropriate itinerary can be discussed.",
  },
  {
    q: "Are the daily distances and elevations fixed?",
    a: "No fixed distances or elevation figures are promised on this page. They depend on the final route, selected trails and riding conditions, and will be confirmed in your trip proposal.",
  },
  {
    q: "Does the tour include time in Marrakech?",
    a: "Yes. The itinerary begins and ends in Marrakech. The time available to explore the city depends on your arrival and departure arrangements and the final programme.",
  },
  {
    q: "Will a support vehicle be available?",
    a: "Support arrangements can be discussed when planning your private tour. The availability of a support vehicle, luggage assistance and transfers will be specified in your final trip proposal.",
  },
  {
    q: "What is the best time for this E-MTB tour?",
    a: "Spring and autumn are generally suitable periods for cycling in Morocco. Weather conditions can vary depending on the exact location and elevation, so travel dates should be selected with the planned route in mind.",
  },
  {
    q: "Can I customise the seven-day itinerary?",
    a: "The private tour can be discussed around your travel dates, group size, cycling experience and preferred riding style. The final route, bicycle arrangements and support services are agreed before booking.",
  },
];

const relatedTours = [
  {
    category: "E-MTB ADVENTURE",
    title: "Atlas Mountains E-Bike Tour – 4 Days",
    text: "Discover selected Atlas mountain routes and rural landscapes on a shorter electric mountain bike adventure.",
    image: "/images/atlas-mountains-ebike-tour.jpg",
    href: "/cycling-trips/trip/atlas-mountains-e-bike-tour-4-day",
  },
  {
    category: "E-MTB EXPERIENCE",
    title: "Three Valley E-Bike Tour – 3 Days",
    text: "Explore selected mountain valleys and traditional settlements on a private electric mountain bike journey.",
    image: "/images/ouirgane-valley-ebike-tour.jpg",
    href: "/cycling-trips/trip/three-valley-e-bike-tour-3-day",
  },
  {
    category: "MOUNTAIN CYCLING",
    title: "Atlas Singletrack Mountain Bike Tour",
    text: "Explore selected natural singletrack, mountain trails and rural landscapes in the High Atlas.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/trip/atlas-singletrack-mountain-bike-tour-6-day",
  },
];

export default function AtlasMarrakechEBikeTour7DayPage() {
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
          max-width: 900px;
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
          max-width: 590px;
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

        .atlas-tour .at-subnav { background: var(--green); color: #fff; }

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

        .atlas-tour .at-footer { background: #171d18; color: #eeeae1; }

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

        .atlas-tour .at-footer-links { display: grid; gap: 11px; }

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
          <img src={images.hero} alt="E-bike adventure from Marrakech into the Atlas Mountains" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">
            MOROCCO · MARRAKECH · ATLAS MOUNTAINS · E-MTB · 7 DAYS
          </span>
          <h1>Atlas Marrakech E-Bike Tour</h1>
          <p className="at-hero-description">
            Discover Marrakech and the Atlas Mountains on a
            seven-day electric mountain biking adventure.
            Explore selected mountain routes, traditional
            villages and spectacular landscapes with the
            added assistance of an E-MTB.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Plan Your E-MTB Adventure <span>→</span>
            </a>
            <a className="at-hero-back" href="/cycling-trips">
              Explore All Cycling Tours
            </a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>07 DAYS</strong><span>E-MTB adventure</span></div>
            <div><strong>MARRAKECH</strong><span>Starting city</span></div>
            <div><strong>ATLAS</strong><span>Mountain region</span></div>
            <div><strong>MOROCCO</strong><span>Mountain landscapes</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>7 Days / 6 Nights</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Marrakech & Atlas</strong></div>
          <div className="at-fact"><span>Starting point</span><strong>Marrakech</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Private E-MTB</strong></div>
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
            <img src={images.overview} alt="Electric mountain biking near Marrakech, Morocco" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A SEVEN-DAY MOROCCAN JOURNEY</span>
            <h2 className="at-heading">
              From Marrakech to the Atlas Mountains by E-Bike
            </h2>
            <p className="at-copy">
              The Atlas Marrakech E-Bike Tour is a seven-day
              cycling experience combining the atmosphere of
              Marrakech with the mountain landscapes surrounding
              the city. Discover rural scenery, traditional
              settlements and selected mountain routes on an
              electric mountain bike.
            </p>
            <p className="at-copy">
              Starting in Marrakech, the journey moves towards
              the Atlas Mountains, where electric assistance
              can make selected climbs more manageable and
              help you enjoy longer mountain rides. The
              programme allows time to discover the region
              beyond the city.
            </p>
            <p className="at-copy">
              This private E-MTB experience can be discussed
              around your preferred travel dates, group size
              and riding ability. The final route, bicycle
              arrangements, daily stages and support services
              are agreed before your trip.
            </p>
            <a className="at-text-link" href="#itinerary">
              Discover the itinerary →
            </a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE E-MTB EXPERIENCE</span>
            <h2 className="at-heading">
              Seven Days of Marrakech and Mountain Exploration
            </h2>
            <p className="at-copy">
              This journey gives you time to experience
              Marrakech and explore selected mountain routes
              in the Atlas region. The combination of city
              time and mountain riding creates a varied
              introduction to cycling in Morocco.
            </p>
            <p className="at-copy">
              Electric assistance can help on suitable climbs,
              but bike handling and trail conditions remain
              important parts of the experience. Share your
              cycling background, preferred riding style and
              expectations so the programme can be discussed
              around your group.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Atlas Marrakech E-Bike Tour</h3>
            <p>
              Seven days combining Marrakech with selected
              mountain routes and landscapes in the Atlas region.
            </p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>7 days / 6 nights</strong></li>
              <li><span>Starting city</span><strong>Marrakech</strong></li>
              <li><span>Main region</span><strong>Atlas Mountains</strong></li>
              <li><span>Tour format</span><strong>Private E-MTB</strong></li>
              <li><span>Route programme</span><strong>Customised</strong></li>
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
              <h2 className="at-heading">
                Highlights of the Atlas Marrakech E-Bike Tour
              </h2>
            </div>
            <p>
              Discover Marrakech, mountain scenery, selected
              trails, traditional villages and rural landscapes
              on a seven-day electric mountain biking journey
              through Morocco.
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
            <img src={images.trails} alt="Mountain tracks and natural terrain in the Atlas Mountains" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE & TERRAIN</span>
            <h2 className="at-heading">
              From City Landscapes to Mountain Trails
            </h2>
            <p className="at-copy">
              The journey connects Marrakech with the varied
              landscapes of the Atlas Mountains. Depending
              on the final programme, the riding stages can
              include mountain tracks, rural paths, valley
              routes and natural terrain.
            </p>
            <p className="at-copy">
              The exact surfaces and technical difficulty
              depend on the selected routes. Battery range,
              charging opportunities and daily distances
              are also important when planning a multi-day
              E-MTB journey. These details should be confirmed
              before travelling.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Starting and finishing arrangements in Marrakech</li>
              <li><span>02</span>Selected Atlas mountain routes and rural tracks</li>
              <li><span>03</span>Electric assistance on suitable climbs</li>
              <li><span>04</span>Daily stages planned around battery range and ability</li>
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
              Review the main details of this seven-day
              electric mountain biking experience. Exact
              distances, elevation, trail surfaces, bicycle
              specifications, battery arrangements,
              accommodation and support services are
              confirmed in your personalised trip proposal.
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
          <img src={images.village} alt="Traditional rural village in the Atlas Mountains of Morocco" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">
            Discover Marrakech and the Culture of the Atlas
          </h2>
          <p className="at-copy">
            This journey is about more than the kilometres
            covered. Between riding stages, discover the
            landscapes, architecture and communities that
            give Marrakech and the Atlas Mountains their
            distinctive character.
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
              <span className="at-eyebrow">E-MTB MOMENTS</span>
              <h2 className="at-heading">
                Explore the Landscapes Along the Journey
              </h2>
            </div>
            <p>
              Discover mountain scenery, rural landscapes,
              traditional villages and natural terrain that
              make the Atlas region an exciting destination
              to explore by electric mountain bike.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item">
              <img src={images.mountains} alt="Atlas Mountains landscape in Morocco" />
            </div>
            <div className="at-gallery-item">
              <img src={images.trails} alt="Mountain terrain in Morocco" />
            </div>
            <div className="at-gallery-item">
              <img src={images.village} alt="Traditional village landscape in Morocco" />
            </div>
            <div className="at-gallery-item">
              <img src={images.valley} alt="Atlas mountain valley scenery" />
            </div>
            <div className="at-gallery-item">
              <img src={images.cycling} alt="Electric mountain biking in Morocco" />
            </div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">SEVEN DAYS IN MOROCCO</span>
              <h2 className="at-heading">
                Atlas Marrakech E-Bike Tour Itinerary
              </h2>
            </div>
            <p>
              A suggested seven-day structure connecting
              Marrakech with the Atlas Mountains. Final
              riding stages, transfers and overnight
              arrangements are confirmed during trip planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The itinerary below provides an overview of the
            experience. Daily distances, elevation gain,
            exact trail sections and battery arrangements
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
                What Is Included in Your E-Bike Tour?
              </h2>
            </div>
            <p>
              The final inclusions are confirmed in your
              booking proposal. Review the services listed
              below and check your personalised itinerary
              before confirming your trip.
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
              <h2 className="at-heading">
                Preparing for Your Atlas Marrakech E-Bike Tour
              </h2>
            </div>
            <p>
              Prepare your electric mountain bike,
              battery arrangements, equipment and
              fitness for a multi-day cycling adventure
              through Marrakech and the Atlas Mountains.
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
              loading="lazy"
            />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">
              Difficulty and E-MTB Experience
            </h2>
            <p className="at-copy">
              Electric assistance can help reduce the effort
              required on suitable climbs, but an E-MTB
              adventure still requires balance, bike control
              and confidence on varied terrain. The difficulty
              depends on the selected trails, daily distances,
              elevation gain and technical conditions.
            </p>
            <p className="at-copy">
              Tell us about your cycling experience,
              the type of trails you normally ride and
              your preferred daily distances. We can then
              discuss a suitable itinerary, bicycle setup
              and battery arrangements for the journey.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty,
              distances, elevation figures, battery range
              and trail surfaces must be confirmed against
              the actual route and bicycle before booking.
              This page does not promise a fixed technical
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
              Find answers to common questions about
              electric mountain biking around Marrakech
              and the Atlas Mountains. Contact our team
              if you need more details before planning.
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
          <img src={images.final} alt="Mountain biking landscape in the Atlas Mountains" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">
            YOUR E-MTB ADVENTURE STARTS HERE
          </span>
          <h2>
            Ready to Explore Marrakech and the Atlas Mountains by E-Bike?
          </h2>
          <p>
            Tell us your preferred dates, group size,
            electric mountain bike requirements and
            cycling experience. We will discuss a private
            seven-day journey and help you plan your
            E-MTB adventure in Morocco.
          </p>
          <a className="at-button" href="/contact">
            Plan Your E-MTB Adventure <span>→</span>
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
              Discover more ways to experience Morocco,
              from shorter electric mountain bike journeys
              to longer mountain biking adventures in
              the Atlas region.
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
              src="/images/logo-mountain-bike-morocco.png"
              alt="Mountain Bike Morocco"
            />
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
          <span>
            © {new Date().getFullYear()} Mountain Bike Morocco. All rights reserved.
          </span>
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}