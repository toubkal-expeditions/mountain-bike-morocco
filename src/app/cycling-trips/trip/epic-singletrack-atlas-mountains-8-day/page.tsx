import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Epic Singletrack Atlas Mountains MTB Tour Morocco – 8 Days | Mountain Bike Morocco",
  description:
    "Ride eight days of epic mountain biking in Morocco's High Atlas. Discover natural singletrack, remote valleys, Amazigh villages and spectacular mountain descents on a private MTB adventure from Marrakech.",
  alternates: {
    canonical: "/cycling-trips/trip/epic-singletrack-atlas-mountains-8-day",
  },
};

const images = {
  hero: "/images/singletrack-mtb-atlas-mountains.jpg",
  overview: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  imlil: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  valley: "/images/singletrack-mtb-atlas-mountains.jpg",
  village: "/images/group-cycling-tour-morocco.jpg",
  mountain: "/images/mountain-bike-morocco-hero.jpg",
  cycling: "/images/singletrack-mtb-atlas-mountains.jpg",
  final: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
};

const facts = [
  ["Duration", "8 days / 7 nights"],
  ["Destination", "High Atlas Mountains, Morocco"],
  ["Starting point", "Marrakech"],
  ["Main areas", "Imlil and High Atlas valleys"],
  ["Cycling style", "Mountain biking and natural singletrack"],
  ["Difficulty", "Challenging, depending on selected trails"],
  ["Experience", "Previous mountain biking experience recommended"],
  ["Tour format", "Private supported MTB adventure"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "Eight Days of Atlas Riding",
    text: "Spend more time exploring the High Atlas, discovering different mountain landscapes and enjoying an extended mountain biking experience across several riding stages.",
  },
  {
    number: "02",
    title: "Epic Natural Singletrack",
    text: "Discover natural trails winding through rocky slopes, mountain villages and remote valleys, with trail choices discussed around your technical ability.",
  },
  {
    number: "03",
    title: "Technical Mountain Descents",
    text: "Experience the changing character of Atlas terrain, from flowing natural trails to more demanding sections selected according to the group's riding level.",
  },
  {
    number: "04",
    title: "Remote Atlas Valleys",
    text: "Explore the landscapes and traditional Amazigh communities of the High Atlas, discovering a side of Morocco beyond the main tourist routes.",
  },
];

const beyondTrail = [
  {
    title: "Amazigh village life",
    text: "Discover traditional mountain communities, stone houses, terraced fields and the hospitality that gives the High Atlas its distinctive character.",
  },
  {
    title: "Changing mountain scenery",
    text: "Experience the contrasts of the Atlas, from rugged slopes and open mountain viewpoints to green valleys and cultivated terraces.",
  },
  {
    title: "Local traditions",
    text: "Enjoy opportunities to discover regional food, traditional architecture and the cultural heritage of communities throughout the mountain region.",
  },
  {
    title: "More time in the mountains",
    text: "With eight days available, the journey allows a more extended experience of the region, balancing riding stages with time to appreciate the landscape.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Marrakech",
    location: "Marrakech",
    distance: "No scheduled riding",
    riding: "Arrival and MTB preparation",
    image: images.overview,
    text: "Arrive in Marrakech and meet the local team. After settling into your accommodation, discuss the eight-day mountain biking programme, your riding experience and the type of trails you enjoy. Check your bicycle and equipment, review the arrangements and prepare for the journey towards the High Atlas.",
    details: [
      "Arrival and welcome in Marrakech",
      "Meet the local mountain biking team",
      "Bicycle and equipment check",
      "Review the planned riding programme",
    ],
  },
  {
    day: "02",
    title: "Marrakech to Imlil – First Atlas Trails",
    location: "Marrakech – Imlil",
    distance: "Route-dependent",
    riding: "Mountain tracks and natural trails",
    image: images.imlil,
    text: "Leave Marrakech and travel towards the High Atlas Mountains. The landscape changes as the road climbs towards the Toubkal region, passing traditional settlements and cultivated valleys. Begin your riding programme around the Imlil area, exploring suitable trails and getting familiar with the mountain terrain.",
    details: [
      "Transfer towards the High Atlas",
      "Discover the mountain scenery around Imlil",
      "First mountain biking trails",
      "Overnight in the mountain region",
    ],
  },
  {
    day: "03",
    title: "Imlil Singletrack and Mountain Descents",
    location: "Imlil and surrounding trails",
    distance: "Route-dependent",
    riding: "Natural singletrack and descents",
    image: images.valley,
    text: "Spend a full day exploring the natural trails around the Imlil region. Ride through rocky mountain landscapes and traditional settlements, discovering the varied character of the local terrain. The selected trails and technical sections will reflect the group's experience, fitness and preferred style of mountain biking.",
    details: [
      "Explore natural trails around Imlil",
      "Ride selected singletrack sections",
      "Discover traditional mountain settlements",
      "Enjoy views across the Atlas landscape",
    ],
  },
  {
    day: "04",
    title: "Epic Atlas Trails and Valley Exploration",
    location: "High Atlas mountain valleys",
    distance: "Route-dependent",
    riding: "Singletrack and mountain terrain",
    image: images.mountain,
    text: "Continue deeper into the High Atlas riding experience. Discover another selection of mountain trails and valley landscapes, with a programme designed to provide variety across the journey. Natural tracks, climbs and descents are selected according to the final route and the conditions on the ground.",
    details: [
      "Explore another area of the High Atlas",
      "Discover changing mountain terrain",
      "Ride selected natural singletrack",
      "Experience the rural character of the region",
    ],
  },
  {
    day: "05",
    title: "Remote Trails and Mountain Landscapes",
    location: "High Atlas region",
    distance: "Route-dependent",
    riding: "Natural trails and technical sections",
    image: images.village,
    text: "Enjoy another full day dedicated to mountain biking. Explore selected trails through the mountain landscape, passing rural communities and open valley scenery. The extended tour allows more time to discover the region, while the daily riding programme remains adaptable to your group's ability and preferred trail style.",
    details: [
      "Continue the mountain biking journey",
      "Explore selected natural trails",
      "Discover remote mountain scenery",
      "Adapt the riding stage to the group",
    ],
  },
  {
    day: "06",
    title: "High Atlas Singletrack Adventure",
    location: "High Atlas mountain valleys",
    distance: "Route-dependent",
    riding: "Singletrack and mountain descents",
    image: images.cycling,
    text: "Discover more of the High Atlas on a further day of mountain biking. Depending on the agreed route, the riding may include natural singletrack, rocky sections, mountain tracks and selected descents. The aim is to enjoy a varied mountain biking experience without committing to an unconfirmed trail grade or distance.",
    details: [
      "Explore additional Atlas riding terrain",
      "Ride natural singletrack where suitable",
      "Enjoy selected mountain descents",
      "Take in the surrounding landscapes",
    ],
  },
  {
    day: "07",
    title: "Final Full Day of Atlas Mountain Biking",
    location: "High Atlas and surrounding valleys",
    distance: "Route-dependent",
    riding: "Selected trails and descents",
    image: images.imlil,
    text: "Enjoy the final full riding day of your eight-day adventure. Return to selected trails or explore another part of the mountain region, depending on the final programme. Finish the riding experience with time to appreciate the Atlas landscapes and the villages encountered along the journey.",
    details: [
      "Final full day of mountain biking",
      "Explore the agreed trail programme",
      "Enjoy the last mountain descents",
      "Complete the Atlas riding experience",
    ],
  },
  {
    day: "08",
    title: "Return to Marrakech",
    location: "High Atlas – Marrakech",
    distance: "No scheduled riding unless agreed",
    riding: "Supported return journey",
    image: images.final,
    text: "After breakfast, enjoy your final views of the High Atlas before returning to Marrakech. Transfer arrangements and any additional riding can be discussed during trip planning. Your eight-day Epic Singletrack Atlas Mountains tour concludes in the city.",
    details: [
      "Breakfast in the mountain region",
      "Final equipment arrangements",
      "Return transfer to Marrakech",
      "End of the mountain biking tour",
    ],
  },
];

const inclusions = [
  "Trip planning and trail coordination",
  "Local mountain biking support as agreed in your itinerary",
  "Accommodation specified in your final proposal",
  "Meals explicitly listed in your confirmed itinerary",
  "Support vehicle and transfers specified in your proposal",
  "Luggage assistance where included in your arrangements",
  "On-trip coordination and practical assistance",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Mountain bike and personal cycling equipment unless agreed",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses and tips",
  "Additional nights and transfers not included in your proposal",
  "Services not specifically listed in your confirmed booking",
];

const preparation = [
  {
    title: "Choose a suitable mountain bike",
    text: "A well-maintained mountain bike suitable for natural trails and varied mountain terrain is recommended. A full-suspension bike may be appropriate depending on the selected routes. Discuss bicycle rental, setup and equipment options with the team before travelling.",
  },
  {
    title: "Protective equipment",
    text: "Bring a suitable helmet, gloves, knee protection where appropriate, cycling glasses and comfortable riding clothing. A full-face helmet may be recommended for more technical routes depending on the final programme.",
  },
  {
    title: "Fitness for eight riding days",
    text: "Prepare for a multi-day mountain biking journey. The programme may involve consecutive riding stages, climbing, uneven surfaces and technical descents. Share your riding experience and fitness level before the route is confirmed.",
  },
  {
    title: "Personal essentials",
    text: "Bring sun protection, hydration equipment, personal medication and preferred cycling nutrition. A small repair kit and basic spare parts are useful for an extended mountain biking trip.",
  },
];

const faqs = [
  {
    q: "How long is the Epic Singletrack Atlas Mountains Tour?",
    a: "The tour is planned over eight days and seven nights, starting in Marrakech and exploring mountain biking terrain in Morocco's High Atlas region.",
  },
  {
    q: "Where does the tour start?",
    a: "The tour starts in Marrakech before travelling towards the High Atlas Mountains. The main riding experience takes place in the mountain region, with the exact areas determined by the confirmed itinerary.",
  },
  {
    q: "What type of trails can I expect?",
    a: "The tour focuses on natural mountain trails and singletrack, with selected technical sections and descents where suitable. The exact trail selection depends on the confirmed route, conditions and the group's technical ability.",
  },
  {
    q: "Is this tour suitable for beginner mountain bikers?",
    a: "This is an extended mountain biking experience focused on natural trails and singletrack. Previous mountain biking experience is recommended. Share your technical ability and riding background so the suitability of the route can be discussed.",
  },
  {
    q: "What mountain bike should I bring?",
    a: "A suitable mountain bike in good mechanical condition is recommended. A full-suspension bike may be appropriate depending on the selected trails. Discuss your bicycle setup and rental possibilities with the team before travelling.",
  },
  {
    q: "Are the riding distances and elevation fixed?",
    a: "No fixed daily distances or elevation figures are promised on this page. They depend on the selected trails, the group's ability and the final route agreed before booking.",
  },
  {
    q: "Is a support vehicle available?",
    a: "Support arrangements can be discussed when planning your private tour. The availability of a support vehicle, luggage assistance and transfers will be specified in your final trip proposal.",
  },
  {
    q: "When is the best time for mountain biking in the Atlas?",
    a: "Spring and autumn are generally suitable periods for mountain biking in the High Atlas. Weather and trail conditions vary with altitude and season, so the best dates depend on the chosen route.",
  },
  {
    q: "Can the itinerary be adapted to my riding level?",
    a: "The private tour can be discussed around your riding experience, preferred trail style and travel dates. Share your technical ability and expectations so the route and daily stages can be planned appropriately.",
  },
];

const relatedTours = [
  {
    category: "CYCLING ADVENTURE",
    title: "Atlas Mountains Cycling Tour",
    text: "Discover the High Atlas, traditional villages and beautiful mountain valleys on a multi-day cycling journey.",
    image: images.overview,
    href: "/cycling-trips/trip/atlas-mountains-cycling-tour-6-day",
  },
  {
    category: "SINGLETRACK MTB",
    title: "Atlas Singletrack Mountain Bike Tour",
    text: "Explore natural singletrack trails and mountain terrain on a focused six-day MTB adventure.",
    image: images.valley,
    href: "/cycling-trips/trip/atlas-singletrack-mountain-bike-tour-6-day",
  },
  {
    category: "ENDURO MTB ADVENTURE",
    title: "Atlas Enduro MTB Tour",
    text: "Discover a trail-focused mountain biking experience with selected descents in Morocco's Atlas region.",
    image: images.imlil,
    href: "/cycling-trips/trip/atlas-enduro-mtb-tour-5-day",
  },
];

export default function EpicSingletrackAtlasMountains8DayPage() {
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
            alt="Epic mountain biking singletrack in Morocco's High Atlas Mountains"
          />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · HIGH ATLAS · 8 DAYS</span>
          <h1>Epic Singletrack Atlas Mountains</h1>
          <p className="at-hero-description">
            Eight days of mountain biking through Morocco's High Atlas.
            Discover natural singletrack, remote valleys, traditional
            Amazigh villages and spectacular mountain descents on a private
            MTB adventure planned around your riding experience.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Plan Your MTB Adventure <span>→</span>
            </a>
            <a className="at-hero-back" href="/cycling-trips">
              Explore All Cycling Tours
            </a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>08 DAYS</strong><span>Epic MTB adventure</span></div>
            <div><strong>HIGH ATLAS</strong><span>Morocco</span></div>
            <div><strong>SINGLETRACK</strong><span>Mountain trails</span></div>
            <div><strong>MARRAKECH</strong><span>Starting point</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>8 Days / 7 Nights</strong></div>
          <div className="at-fact"><span>Region</span><strong>High Atlas Mountains</strong></div>
          <div className="at-fact"><span>Starting point</span><strong>Marrakech</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Epic Singletrack MTB</strong></div>
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
            <img src={images.overview} alt="High Atlas mountain scenery in Morocco" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">AN EXTENDED MTB ADVENTURE</span>
            <h2 className="at-heading">Eight Days Exploring the Epic Singletrack of the High Atlas</h2>
            <p className="at-copy">
              The Epic Singletrack Atlas Mountains tour is an eight-day
              mountain biking adventure through the spectacular landscapes
              of Morocco. Starting in Marrakech, travel towards the High
              Atlas and discover a region of rugged mountains, remote
              valleys and traditional Amazigh villages.
            </p>
            <p className="at-copy">
              The experience is focused on natural singletrack, mountain
              trails and varied terrain. Explore the areas around Imlil
              and other parts of the High Atlas region, with the selected
              riding programme designed around your group's experience.
            </p>
            <p className="at-copy">
              The additional days create more time to discover the mountain
              environment and enjoy a varied programme of riding. Exact
              trails, daily stages, distances and support arrangements are
              agreed before your private trip is confirmed.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the itinerary →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE MTB EXPERIENCE</span>
            <h2 className="at-heading">A Longer Trail Journey, Planned Around Your Riding</h2>
            <p className="at-copy">
              Eight days in the Atlas offer the opportunity to explore
              different mountain landscapes and enjoy several days of
              natural trail riding. Whether you prefer flowing singletrack,
              rocky trails or more technical descents, your riding
              preferences help shape the proposed programme.
            </p>
            <p className="at-copy">
              The final route should reflect your technical confidence,
              fitness, preferred trail conditions and the time available.
              Daily stages, accommodation and support arrangements are
              agreed before confirming your booking.
            </p>
            <p className="at-copy">
              This is a private mountain biking experience. Share your
              previous riding experience, group size and preferred dates
              so the team can discuss a suitable route through the region.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Epic Singletrack Atlas Mountains</h3>
            <p>Eight days exploring natural trails and mountain terrain in Morocco's High Atlas.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>8 days / 7 nights</strong></li>
              <li><span>Starting city</span><strong>Marrakech</strong></li>
              <li><span>Main region</span><strong>High Atlas</strong></li>
              <li><span>Tour format</span><strong>Private MTB</strong></li>
              <li><span>Trail programme</span><strong>Customised</strong></li>
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
              <h2 className="at-heading">Highlights of the Epic Singletrack Atlas Tour</h2>
            </div>
            <p>
              Discover an extended mountain biking experience through
              natural trails, varied mountain terrain and traditional
              landscapes in Morocco's High Atlas.
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
              src={images.valley}
              alt="Natural singletrack mountain biking terrain in the Atlas Mountains"
            />
          </div>
          <div>
            <span className="at-eyebrow">THE TRAILS & TERRAIN</span>
            <h2 className="at-heading">Epic Natural Singletrack and Mountain Descents</h2>
            <p className="at-copy">
              The High Atlas offers a varied mountain environment for
              mountain biking. Natural trails wind through rocky slopes,
              traditional settlements and cultivated valleys, while
              mountain tracks connect different areas of the region.
            </p>
            <p className="at-copy">
              Across eight days, the riding programme can include a
              selection of different trail environments. The balance
              between flowing singletrack, technical sections, climbing
              and descending depends on the final route and the group's
              riding ability.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Natural singletrack and mountain trails</li>
              <li><span>02</span>Selected technical sections and descents</li>
              <li><span>03</span>Rocky terrain and changing mountain surfaces</li>
              <li><span>04</span>Multiple riding stages across the Atlas region</li>
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
              Review the main details of this eight-day mountain biking
              experience. Exact distances, elevation, trail grades,
              accommodation and support services are confirmed in your
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
          <img
            src={images.village}
            alt="Traditional Amazigh village in the High Atlas Mountains"
          />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE TRAIL</span>
          <h2 className="at-heading">Discover the Culture of the High Atlas</h2>
          <p className="at-copy">
            An extended mountain biking journey in Morocco is about more
            than trails and descents. Between riding stages, discover
            traditional mountain communities, local architecture and
            the hospitality that gives the High Atlas its distinctive
            character.
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
              Explore the mountain scenery, natural trails and traditional
              settlements that shape this extended mountain biking journey.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.imlil} alt="Mountain biking scenery around Imlil" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Natural singletrack in the High Atlas" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional mountain village in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.mountain} alt="High Atlas mountain landscape" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Mountain biking trails in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EIGHT DAYS ON THE TRAILS</span>
              <h2 className="at-heading">Epic Singletrack Atlas Mountains Itinerary</h2>
            </div>
            <p>
              An extended eight-day structure connecting Marrakech with
              the High Atlas mountain biking region. The programme includes
              several riding stages and time to discover the mountain
              landscapes and local communities.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The itinerary below provides an overview of the experience.
            Daily distances, elevation gain, exact trail routes and
            overnight arrangements depend on the final programme agreed
            with your group.
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
              <h2 className="at-heading">What Is Included in Your MTB Tour?</h2>
            </div>
            <p>
              The final inclusions are confirmed in your booking proposal.
              Review the services listed below and check your personalised
              itinerary before confirming your eight-day trip.
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
              <h2 className="at-heading">Preparing for Eight Days of Singletrack</h2>
            </div>
            <p>
              Prepare your bicycle, protective equipment and fitness
              before travelling to Morocco. Good preparation is especially
              important for an extended mountain biking journey.
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
              alt="Mountain biking through natural technical terrain in Morocco"
            />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">Difficulty and Technical Ability</h2>
            <p className="at-copy">
              This is an extended mountain biking tour focused on natural
              trails and singletrack. The overall difficulty depends on
              the selected routes, daily distances, elevation gain and
              technical terrain. Mountain trails can include loose
              surfaces, rocky sections, uneven ground and demanding
              descents.
            </p>
            <p className="at-copy">
              Previous mountain biking experience is recommended. Tell us
              about your riding background, the type of trails you normally
              ride and your confidence on technical descents. This helps
              us discuss suitable routes and realistic daily stages for
              your group.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty, distances,
              elevation figures and technical trail grades must be
              confirmed against the actual route before booking. This
              page does not promise a fixed technical grade or daily mileage.
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
              mountain biking adventure in the High Atlas. Contact our
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
          <img
            src={images.final}
            alt="High Atlas mountain scenery in Morocco"
          />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR MTB ADVENTURE STARTS HERE</span>
          <h2>Ready for Eight Days of Epic Atlas Singletrack?</h2>
          <p>
            Tell us your preferred dates, group size and mountain biking
            experience. We will discuss a private eight-day MTB adventure
            and help you plan your journey through the High Atlas.
          </p>
          <a className="at-button" href="/contact">
            Plan Your MTB Adventure <span>→</span>
          </a>
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
              Discover more ways to experience Morocco, from scenic Atlas
              cycling journeys to focused singletrack and enduro mountain
              biking adventures.
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
          <span>© {new Date().getFullYear()} Mountain Bike Morocco. All rights reserved.</span>
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}