import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Atlas to Atlantic Coast Bike Tour Morocco – 9 Days | Mountain Bike Morocco",
  description:
    "Ride from Morocco's Atlas Mountains towards the Atlantic coast on a nine-day cycling adventure. Discover mountain landscapes, traditional villages, changing terrain and coastal scenery on a private cycling journey.",
  alternates: {
    canonical: "/cycling-trips/trip/atlas-to-atlantic-coast-bike-tour-9-day",
  },
};

const images = {
  hero: "/images/atlas-to-atlantic-coast-cycling-tour-morocco.jpg",
  overview: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  mountains: "/images/mountain-bike-morocco-hero.jpg",
  trails: "/images/singletrack-mtb-atlas-mountains.jpg",
  village: "/images/group-cycling-tour-morocco.jpg",
  valley: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  coast: "/images/atlantic-coast-cycling-tour-morocco.jpg",
  cycling: "/images/gravel-cycling-morocco.jpg",
  final: "/images/morocco-atlantic-coast-cycling.jpg",
};

const facts = [
  ["Duration", "9 days / 8 nights"],
  ["Destination", "Atlas Mountains to Atlantic Coast"],
  ["Starting point", "Marrakech"],
  ["Main areas", "Atlas region and Atlantic coast"],
  ["Cycling style", "Multi-day cycling adventure"],
  ["Difficulty", "To be confirmed against the final route"],
  ["Experience", "Cycling experience recommended"],
  ["Tour format", "Private cycling journey"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "From the Atlas to the Atlantic",
    text: "Experience the contrast between Morocco's mountain landscapes and the open scenery of the Atlantic coast on one varied nine-day cycling journey.",
  },
  {
    number: "02",
    title: "Ride Through Changing Landscapes",
    text: "Discover a changing mix of mountain roads, rural tracks, open countryside and coastal surroundings as the journey progresses westwards.",
  },
  {
    number: "03",
    title: "Discover Traditional Morocco",
    text: "Pass through rural settlements and landscapes shaped by local traditions, agriculture and everyday life beyond Morocco's main cities.",
  },
  {
    number: "04",
    title: "A Private Cycling Journey",
    text: "Plan the experience around your group's cycling background, preferred riding style, travel dates and the type of terrain you would like to explore.",
  },
];

const beyondTrail = [
  {
    title: "Atlas mountain landscapes",
    text: "Discover the changing scenery of the Atlas region, with mountain slopes, open valleys and rural landscapes forming the first part of the journey.",
  },
  {
    title: "Traditional villages and communities",
    text: "Experience the character of rural Morocco, with traditional architecture, cultivated land and villages along the route.",
  },
  {
    title: "The landscapes of the west",
    text: "As the journey moves towards the Atlantic, discover a different side of Morocco, with open countryside and changing terrain.",
  },
  {
    title: "The Atlantic coast",
    text: "Finish the journey in the atmosphere of Morocco's Atlantic coastline, where coastal scenery offers a striking contrast to the mountain landscapes.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Marrakech",
    location: "Marrakech",
    distance: "No scheduled riding",
    riding: "Arrival and tour preparation",
    image: images.overview,
    text: "Arrive in Marrakech and meet the local team. After settling into your accommodation, discuss the cycling programme, the route towards the Atlantic coast and the practical arrangements for the journey. There will be time to check your bicycle and equipment, review the proposed stages and prepare for the adventure.",
    details: [
      "Arrival and welcome in Marrakech",
      "Meet the local cycling team",
      "Bicycle and equipment check",
      "Tour briefing and route preparation",
    ],
  },
  {
    day: "02",
    title: "From Marrakech Towards the Atlas Mountains",
    location: "Marrakech – Atlas Mountains",
    distance: "Route-dependent",
    riding: "Mountain cycling",
    image: images.mountains,
    text: "Leave Marrakech and travel towards the Atlas mountain region. Begin discovering the landscapes and riding environment that make this area such an important part of Morocco's cycling experience. The selected route and riding distance will depend on the final programme and your group's ability.",
    details: [
      "Travel towards the Atlas mountain region",
      "Discover the mountain environment",
      "Ride selected roads or tracks",
      "Settle into the first mountain stage",
    ],
  },
  {
    day: "03",
    title: "Explore the Atlas Mountain Landscapes",
    location: "Atlas Mountains",
    distance: "Route-dependent",
    riding: "Mountain roads and selected tracks",
    image: images.trails,
    text: "Continue exploring the Atlas region on a cycling stage through changing mountain scenery. Depending on the confirmed route, the ride may include mountain roads, rural tracks and sections connecting settlements and valleys. The exact distance, elevation gain and technical demands will be confirmed during trip planning.",
    details: [
      "Explore selected mountain routes",
      "Ride through valleys and rural landscapes",
      "Discover the character of the Atlas region",
      "Adapt the stage to the group's riding level",
    ],
  },
  {
    day: "04",
    title: "Leave the High Mountain Scenery",
    location: "Atlas Region – Western Morocco",
    distance: "Route-dependent",
    riding: "Transition stage",
    image: images.valley,
    text: "Continue the journey westwards, moving away from the mountain environment towards the landscapes of western Morocco. The day connects different parts of the route and may combine cycling with planned transfers, depending on the final itinerary. The precise stage and overnight location will be confirmed before departure.",
    details: [
      "Continue the journey towards western Morocco",
      "Experience changing landscapes",
      "Follow the agreed cycling or transfer route",
      "Prepare for the next part of the journey",
    ],
  },
  {
    day: "05",
    title: "Discover Rural Morocco",
    location: "Western Morocco",
    distance: "Route-dependent",
    riding: "Rural roads and countryside",
    image: images.village,
    text: "Explore the countryside and rural landscapes of western Morocco. This part of the journey offers a different atmosphere from the Atlas Mountains, with open terrain, cultivated areas and traditional settlements. The selected route will be planned according to road conditions, riding preferences and the overall journey towards the coast.",
    details: [
      "Ride through selected rural landscapes",
      "Discover traditional settlements",
      "Experience the changing countryside",
      "Continue towards the Atlantic region",
    ],
  },
  {
    day: "06",
    title: "Cycling Towards the Atlantic Region",
    location: "Western Morocco – Atlantic Region",
    distance: "Route-dependent",
    riding: "Countryside cycling",
    image: images.cycling,
    text: "Continue west towards Morocco's Atlantic region. The landscape gradually changes as the route approaches the coast. Depending on the agreed itinerary, this stage may use selected rural roads and connecting routes. The daily distance and exact overnight location will be confirmed in your personalised programme.",
    details: [
      "Continue the westward cycling journey",
      "Explore open countryside and rural roads",
      "Follow the confirmed route towards the coast",
      "Prepare for the Atlantic section",
    ],
  },
  {
    day: "07",
    title: "Discover the Atlantic Coast",
    location: "Atlantic Coast",
    distance: "Route-dependent",
    riding: "Coastal cycling",
    image: images.coast,
    text: "Reach the Atlantic coast and discover a different side of Morocco. Coastal surroundings, open views and the atmosphere of the ocean create a striking contrast with the mountain landscapes from the beginning of the journey. The selected cycling stage will depend on the final coastal route and local conditions.",
    details: [
      "Explore the Atlantic coastal region",
      "Discover changing coastal landscapes",
      "Enjoy selected coastal cycling routes",
      "Experience the atmosphere of the ocean",
    ],
  },
  {
    day: "08",
    title: "A Final Day Exploring the Coast",
    location: "Atlantic Coast",
    distance: "Route-dependent",
    riding: "Coastal ride or leisure day",
    image: images.final,
    text: "Enjoy another day in the Atlantic region, with the possibility of a final coastal cycling stage depending on your preferences and the confirmed programme. This day can provide additional time to explore the surroundings, enjoy the coast and complete the cycling experience before the return arrangements.",
    details: [
      "Optional final coastal cycling stage",
      "Discover the surrounding coastal area",
      "Enjoy time by the Atlantic",
      "Prepare for the return journey",
    ],
  },
  {
    day: "09",
    title: "Return Arrangements and Departure",
    location: "Atlantic Region – Departure",
    distance: "No fixed riding stage",
    riding: "Departure arrangements",
    image: images.coast,
    text: "After breakfast, continue with the departure arrangements agreed for your trip. Depending on your travel plans, the return transfer and final destination will be organised as part of your confirmed itinerary. This marks the end of the nine-day Atlas to Atlantic Coast cycling adventure.",
    details: [
      "Breakfast and departure preparation",
      "Complete the agreed return arrangements",
      "Transfer according to your confirmed itinerary",
      "End of the cycling adventure",
    ],
  },
];

const inclusions = [
  "Trip planning and route coordination",
  "Local cycling support as agreed in your itinerary",
  "Accommodation specified in your final proposal",
  "Meals explicitly listed in your confirmed itinerary",
  "Bicycle rental if specifically included",
  "Support vehicle and luggage arrangements as agreed",
  "Transfers specified in your confirmed proposal",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Bicycle rental unless agreed in your proposal",
  "Personal cycling equipment and clothing",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses and tips",
  "Additional nights and transfers not included in your proposal",
];

const preparation = [
  {
    title: "Choose the Right Bicycle",
    text: "The most suitable bicycle depends on the confirmed route and terrain. Discuss the type of bicycle, gearing, tyres, brakes and recommended setup with the team before travelling.",
  },
  {
    title: "Prepare for Changing Terrain",
    text: "The journey connects mountain and coastal environments. Be prepared for changes in road surfaces, gradients, weather and daily riding conditions throughout the route.",
  },
  {
    title: "Fitness and Riding Experience",
    text: "A multi-day cycling journey requires suitable fitness and confidence on a bicycle. Share your cycling background and preferred daily distances so the stages can be discussed around your ability.",
  },
  {
    title: "Cycling Equipment and Protection",
    text: "Bring a suitable helmet, gloves, cycling glasses, comfortable riding clothing and appropriate footwear. Sun protection, hydration equipment and basic personal repair supplies are recommended.",
  },
];

const faqs = [
  {
    q: "How long is the Atlas to Atlantic Coast Bike Tour?",
    a: "The tour is planned over nine days and eight nights. The itinerary connects the Atlas mountain region with Morocco's Atlantic coast, with the exact daily stages and overnight arrangements confirmed in your trip proposal.",
  },
  {
    q: "Where does the cycling tour start?",
    a: "The journey is planned to start in Marrakech before continuing towards the Atlas Mountains. The exact meeting point and departure arrangements will be confirmed before your trip.",
  },
  {
    q: "Where does the tour finish?",
    a: "The journey is designed to reach Morocco's Atlantic coastal region. The exact finishing location and return transfer arrangements depend on the final itinerary and your travel plans.",
  },
  {
    q: "What type of bicycle is suitable for this tour?",
    a: "The appropriate bicycle depends on the confirmed route and surfaces. A suitable touring, gravel or mountain bike may be considered according to the selected roads and tracks. Bicycle specifications and rental arrangements should be agreed before booking.",
  },
  {
    q: "Is the tour suitable for beginners?",
    a: "This is a multi-day cycling journey, so previous cycling experience and suitable fitness are recommended. Suitability depends on the final route, daily distances, elevation gain and terrain. Share your experience so the itinerary can be discussed at an appropriate level.",
  },
  {
    q: "How many kilometres will we ride each day?",
    a: "Daily distances are not fixed on this page. They depend on the final route, road conditions, transfers and the riding level of your group. Your proposed daily stages will be confirmed before booking.",
  },
  {
    q: "Does the route include mountain and coastal cycling?",
    a: "The journey is designed to connect the Atlas mountain region with the Atlantic coast. The exact balance of mountain, rural and coastal riding depends on the route selected for your trip.",
  },
  {
    q: "Will a support vehicle be available?",
    a: "Support arrangements can be discussed when planning your private tour. The availability of a support vehicle, luggage assistance and transfers will be specified in your final trip proposal.",
  },
  {
    q: "What is the best time for this cycling tour?",
    a: "Spring and autumn are generally suitable periods for cycling in many parts of Morocco. Conditions can vary between the Atlas Mountains and the Atlantic coast, so travel dates should be selected with the route and expected weather in mind.",
  },
  {
    q: "Can I customise the nine-day itinerary?",
    a: "The private tour can be discussed around your travel dates, group size, cycling experience and preferred riding style. The final route, daily stages, accommodation and support services are agreed before booking.",
  },
];

const relatedTours = [
  {
    category: "ATLAS MOUNTAIN ADVENTURE",
    title: "Atlas Mountains E-Bike Tour – 4 Days",
    text: "Explore selected mountain routes, rural landscapes and traditional villages on a private electric mountain biking experience.",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/cycling-trips/trip/atlas-mountains-e-bike-tour-4-day",
  },
  {
    category: "MOUNTAIN BIKE ADVENTURE",
    title: "Anti-Atlas Mountain Bike Tour – 8 Days",
    text: "Discover rugged mountain scenery, remote valleys and natural mountain biking terrain in southern Morocco.",
    image: "/images/gravel-cycling-morocco.jpg",
    href: "/cycling-trips/trip/anti-atlas-mountain-bike-tour-8-day",
  },
  {
    category: "ATLAS MTB ADVENTURE",
    title: "Atlas Singletrack Mountain Bike Tour",
    text: "Explore selected natural singletrack, mountain trails and rural landscapes in the High Atlas.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/trip/atlas-singletrack-mountain-bike-tour-6-day",
  },
];

export default function AtlasToAtlanticCoastBikeTour9DayPage() {
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
          <img
            src={images.hero}
            alt="Cycling journey from the Atlas Mountains towards Morocco's Atlantic coast"
          />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">
            MOROCCO · ATLAS MOUNTAINS · ATLANTIC COAST · 9 DAYS
          </span>
          <h1>Atlas to Atlantic Coast Bike Tour</h1>
          <p className="at-hero-description">
            Ride across the changing landscapes of Morocco on a
            nine-day cycling adventure from the Atlas Mountains
            towards the Atlantic coast. Discover mountain scenery,
            rural communities and the open landscapes of the west.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Plan Your Cycling Adventure <span>→</span>
            </a>
            <a className="at-hero-back" href="/cycling-trips">
              Explore All Cycling Tours
            </a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>09 DAYS</strong><span>Multi-day journey</span></div>
            <div><strong>ATLAS</strong><span>Mountain landscapes</span></div>
            <div><strong>ATLANTIC</strong><span>Coastal scenery</span></div>
            <div><strong>MOROCCO</strong><span>Private cycling tour</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>9 Days / 8 Nights</strong></div>
          <div className="at-fact"><span>Journey</span><strong>Atlas to Atlantic</strong></div>
          <div className="at-fact"><span>Starting point</span><strong>Marrakech</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Multi-Day Cycling</strong></div>
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
            <img
              src={images.overview}
              alt="Mountain cycling landscape in the Atlas Mountains of Morocco"
            />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A JOURNEY FROM MOUNTAINS TO OCEAN</span>
            <h2 className="at-heading">
              Discover Morocco from the Atlas Mountains to the Atlantic
            </h2>
            <p className="at-copy">
              The Atlas to Atlantic Coast Bike Tour is a
              nine-day cycling journey connecting two
              distinctive landscapes of Morocco. Begin
              around the Atlas mountain region before
              continuing west towards the Atlantic coast.
            </p>
            <p className="at-copy">
              Along the way, experience changing scenery,
              rural landscapes and traditional settlements.
              The contrast between mountain environments
              and the open coastal region gives this journey
              its distinctive character.
            </p>
            <p className="at-copy">
              This private cycling experience can be
              discussed around your preferred travel dates,
              group size and riding ability. The final route,
              daily distances, transfers and support services
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
            <span className="at-eyebrow">YOUR PRIVATE CYCLING EXPERIENCE</span>
            <h2 className="at-heading">
              Nine Days Across Morocco's Changing Landscapes
            </h2>
            <p className="at-copy">
              This journey brings together the mountain
              scenery of the Atlas region, the character
              of rural Morocco and the atmosphere of the
              Atlantic coast. Each part of the route offers
              a different environment to discover by bike.
            </p>
            <p className="at-copy">
              Share your cycling background, preferred
              riding style and expectations for the trip.
              The route, daily stages, transfers and
              overnight arrangements can then be discussed
              around your group.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Atlas to Atlantic Coast Bike Tour</h3>
            <p>
              Nine days connecting the Atlas mountain
              region with Morocco's Atlantic coastal scenery.
            </p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>9 days / 8 nights</strong></li>
              <li><span>Starting city</span><strong>Marrakech</strong></li>
              <li><span>Journey</span><strong>Atlas to Atlantic</strong></li>
              <li><span>Tour format</span><strong>Private cycling</strong></li>
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
                Highlights of the Atlas to Atlantic Coast Bike Tour
              </h2>
            </div>
            <p>
              Discover mountain scenery, rural communities
              and coastal landscapes on a nine-day cycling
              journey across the varied environments of Morocco.
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
              src={images.coast}
              alt="Atlantic coastal landscape in Morocco"
            />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE & TERRAIN</span>
            <h2 className="at-heading">
              From Mountain Roads to Atlantic Coastal Landscapes
            </h2>
            <p className="at-copy">
              The route connects different cycling
              environments, beginning in the Atlas region
              and continuing towards the Atlantic coast.
              Depending on the selected stages, the journey
              may include mountain roads, rural tracks,
              countryside routes and coastal surroundings.
            </p>
            <p className="at-copy">
              The exact surfaces, technical difficulty
              and daily distances depend on the final route.
              Road conditions, transfers and the riding
              ability of your group are considered when
              planning the stages.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Mountain landscapes and selected Atlas routes</li>
              <li><span>02</span>Rural roads and traditional countryside</li>
              <li><span>03</span>Changing landscapes towards western Morocco</li>
              <li><span>04</span>Atlantic coastal scenery and selected coastal routes</li>
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
              Review the main details of this nine-day
              cycling experience. Exact distances,
              elevation, trail surfaces, accommodation,
              transfers and support services are confirmed
              in your personalised trip proposal.
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
            alt="Traditional rural village and countryside in Morocco"
          />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">
            Experience the Contrasts of Morocco
          </h2>
          <p className="at-copy">
            This journey is about more than the kilometres
            covered. Discover the landscapes and communities
            that give each part of Morocco its distinctive
            character, from the Atlas region to the Atlantic.
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
              <span className="at-eyebrow">MOUNTAIN TO COAST</span>
              <h2 className="at-heading">
                Landscapes Along the Journey
              </h2>
            </div>
            <p>
              Discover the different environments that
              shape this cycling adventure, from the
              Atlas Mountains and rural countryside
              to the Atlantic coastline.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item">
              <img src={images.mountains} alt="Atlas mountain landscape in Morocco" />
            </div>
            <div className="at-gallery-item">
              <img src={images.trails} alt="Natural mountain cycling terrain in Morocco" />
            </div>
            <div className="at-gallery-item">
              <img src={images.village} alt="Traditional village in rural Morocco" />
            </div>
            <div className="at-gallery-item">
              <img src={images.valley} alt="Mountain valley landscape in Morocco" />
            </div>
            <div className="at-gallery-item">
              <img src={images.coast} alt="Atlantic coast scenery in Morocco" />
            </div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">NINE DAYS IN MOROCCO</span>
              <h2 className="at-heading">
                Atlas to Atlantic Coast Bike Tour Itinerary
              </h2>
            </div>
            <p>
              A suggested nine-day structure connecting
              Marrakech and the Atlas region with Morocco's
              Atlantic coast. Final riding stages, transfers
              and overnight arrangements are confirmed
              during trip planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The itinerary below provides an overview of the
            experience. Daily distances, elevation gain,
            exact route sections and overnight locations
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
                What Is Included in Your Cycling Tour?
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
                Preparing for Your Atlas to Atlantic Cycling Tour
              </h2>
            </div>
            <p>
              Prepare your bicycle, equipment and fitness
              for a multi-day journey through mountain,
              rural and coastal environments in Morocco.
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
              alt="Cycling through the varied landscapes of Morocco"
            />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">
              Difficulty and Cycling Experience
            </h2>
            <p className="at-copy">
              A nine-day cycling journey requires suitable
              fitness and confidence on a bicycle. The
              difficulty depends on the selected route,
              daily distances, elevation gain, road surfaces
              and technical conditions.
            </p>
            <p className="at-copy">
              The journey connects mountain and coastal
              environments, so riding conditions can change
              during the trip. Tell us about your cycling
              experience, the type of terrain you normally
              ride and your preferred daily distances.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty,
              distances, elevation figures, road surfaces
              and daily stages must be confirmed against
              the actual route and riding conditions.
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
              cycling from the Atlas Mountains towards
              Morocco's Atlantic coast. Contact our team
              if you need more details before planning your trip.
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
            alt="Atlantic coastal landscape at the end of a cycling journey in Morocco"
          />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">
            YOUR MOROCCAN CYCLING JOURNEY STARTS HERE
          </span>
          <h2>
            Ready to Ride from the Atlas Mountains to the Atlantic?
          </h2>
          <p>
            Tell us your preferred dates, group size,
            cycling experience and riding preferences.
            We will discuss a private nine-day journey
            and help you plan your cycling adventure
            across Morocco.
          </p>
          <a className="at-button" href="/contact">
            Plan Your Cycling Adventure <span>→</span>
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
              from Atlas mountain trails to electric
              mountain biking and longer cycling journeys.
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
              rural landscapes and Atlantic coast with
              Mountain Bike Morocco.
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
              <a href="/destinations/marrakech">Marrakech</a>
              <a href="/destinations/atlantic-coast">Atlantic Coast</a>
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