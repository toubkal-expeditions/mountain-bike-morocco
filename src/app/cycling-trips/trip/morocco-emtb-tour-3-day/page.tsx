import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Morocco E-MTB Tour – 3 Days | Mountain Bike Morocco",
  description:
    "Discover the Atlas Mountains on a 3-day guided E-MTB tour from Marrakech. Ride mountain trails, explore traditional Berber villages and enjoy spectacular valleys on an electric mountain bike adventure.",
  alternates: {
    canonical: "/cycling-trips/trip/morocco-emtb-tour-3-day",
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
  ["Duration", "3 days / 2 nights"],
  ["Destination", "Atlas Mountains, Morocco"],
  ["Starting point", "Marrakech"],
  ["Main areas", "Imlil, Azzaden and surrounding valleys"],
  ["Cycling style", "Electric mountain biking"],
  ["Difficulty", "Adapted to selected routes"],
  ["Experience", "Basic MTB experience recommended"],
  ["Tour format", "Guided cycling adventure"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "Ride the Atlas Mountains",
    text: "Discover the mountain landscapes surrounding Marrakech, riding selected off-road routes through valleys, traditional villages and spectacular natural scenery.",
  },
  {
    number: "02",
    title: "Electric Mountain Bike Adventure",
    text: "Enjoy electric assistance on suitable climbs and mountain tracks. Explore more of the Atlas while adapting your riding pace to the terrain and your experience.",
  },
  {
    number: "03",
    title: "Traditional Berber Villages",
    text: "Ride through mountain communities and discover traditional architecture, terraced fields and the distinctive rural landscapes of the High Atlas.",
  },
  {
    number: "04",
    title: "Three Days of Adventure",
    text: "Make the most of a compact three-day journey combining mountain cycling, scenic stops and opportunities to experience the culture and hospitality of Morocco.",
  },
];

const beyondTrail = [
  {
    title: "High Atlas landscapes",
    text: "Discover dramatic mountain scenery, green valleys, rocky slopes and panoramic views across one of Morocco's most impressive natural regions.",
  },
  {
    title: "Traditional villages",
    text: "Explore rural mountain settlements and discover the traditional architecture and everyday life of communities throughout the Atlas.",
  },
  {
    title: "Moroccan hospitality",
    text: "Enjoy opportunities to experience local hospitality and discover the traditions and culture of the mountain communities along the journey.",
  },
  {
    title: "A different side of Morocco",
    text: "Travel beyond Marrakech and experience quieter mountain roads, natural trails and landscapes far removed from the busy city.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Marrakech – Imlil – Atlas Mountain Trails",
    location: "Marrakech – Imlil",
    distance: "Route-dependent",
    riding: "Mountain E-bike adventure",
    image: images.mountains,
    text: "Your adventure begins with the journey from Marrakech towards the High Atlas Mountains. Meet your local cycling team, prepare the E-bikes and review the selected route before starting your first ride. Explore mountain tracks and traditional villages around the Imlil area, enjoying changing views across the valleys and surrounding peaks. The route and riding pace are adapted to the group's experience and the conditions of the day.",
    details: [
      "Departure from Marrakech towards the Atlas Mountains",
      "Meet your guide and prepare the E-bikes",
      "Explore selected mountain routes around Imlil",
      "Discover traditional villages and mountain scenery",
      "Overnight arrangements according to your confirmed itinerary",
    ],
  },
  {
    day: "02",
    title: "Azzaden Valley – Ouirgane Mountain Adventure",
    location: "Azzaden Valley – Ouirgane",
    distance: "Route-dependent",
    riding: "Full-day E-MTB exploration",
    image: images.trails,
    text: "Continue your journey through the Atlas Mountains with a day dedicated to exploring selected mountain routes and rural valleys. Ride through traditional settlements and discover the changing landscapes of the Azzaden and Ouirgane areas. Depending on the confirmed route, the day can combine mountain tracks, off-road sections and scenic stops. Electric assistance can help on suitable climbs, while your guide adapts the pace to the group's riding ability.",
    details: [
      "Explore selected trails and mountain tracks",
      "Discover traditional villages and rural landscapes",
      "Enjoy views across the surrounding Atlas valleys",
      "Take breaks at suitable scenic locations",
      "Overnight arrangements according to your confirmed itinerary",
    ],
  },
  {
    day: "03",
    title: "Final Mountain Ride – Return to Marrakech",
    location: "Atlas Mountains – Marrakech",
    distance: "Route-dependent",
    riding: "Final E-MTB stage and return transfer",
    image: images.valley,
    text: "Enjoy your final day of mountain biking in Morocco. After breakfast, prepare for another selected E-MTB route through the Atlas foothills and surrounding rural landscapes. The final riding stage is planned according to your departure schedule, route conditions and riding preferences. After the ride, return to Marrakech by the agreed transfer arrangements, bringing your three-day mountain biking experience to an end.",
    details: [
      "Breakfast and preparation for the final ride",
      "Explore a selected final mountain cycling route",
      "Enjoy the last views of the Atlas Mountains",
      "Finish the riding programme",
      "Return transfer towards Marrakech",
    ],
  },
];

const inclusions = [
  "Trip planning and itinerary coordination",
  "Local cycling guide as specified in your proposal",
  "Accommodation for two nights as confirmed",
  "Meals explicitly listed in your itinerary",
  "E-MTB rental if specifically included and confirmed",
  "Helmet and cycling equipment where specified",
  "Transfers from and to Marrakech where agreed",
  "Support vehicle or luggage assistance where specified",
];

const exclusions = [
  "International flights",
  "Travel insurance",
  "E-MTB rental unless specified in your proposal",
  "Personal cycling equipment and clothing",
  "Meals and drinks not listed in the itinerary",
  "Personal expenses and tips",
  "Additional nights and transfers not included",
  "Optional activities and services not listed in your proposal",
];

const preparation = [
  {
    title: "Mountain Biking Experience",
    text: "Basic mountain biking experience is recommended. You should be comfortable riding on uneven surfaces, controlling your bicycle and managing braking on changing terrain. Tell us about your riding experience before booking.",
  },
  {
    title: "E-MTB and Equipment",
    text: "Discuss your preferred E-MTB, frame size and equipment requirements before travelling. Bicycle models, sizes, helmets and rental availability must be confirmed in advance.",
  },
  {
    title: "Fitness and Riding Confidence",
    text: "The route should match your fitness, riding confidence and experience. Electric assistance can help on suitable climbs, but mountain biking still requires balance, control and confidence on off-road terrain.",
  },
  {
    title: "Clothing and Essentials",
    text: "Bring padded cycling shorts, gloves, suitable footwear, sunglasses and comfortable riding clothing. A light waterproof layer, sun protection and a reusable water bottle are also recommended.",
  },
];

const faqs = [
  {
    q: "What is the Morocco E-MTB Tour – 3 Days?",
    a: "It is a three-day electric mountain biking adventure from Marrakech into the Atlas Mountains. The proposed experience combines selected mountain routes, rural landscapes and traditional villages.",
  },
  {
    q: "How long is the tour?",
    a: "The tour is planned over three days and two nights. The exact overnight arrangements depend on the itinerary confirmed for your booking.",
  },
  {
    q: "Where does the tour start?",
    a: "The journey starts in Marrakech and travels towards the Atlas Mountains. The exact meeting point and transfer arrangements are confirmed before departure.",
  },
  {
    q: "Do I need mountain biking experience?",
    a: "Basic mountain biking experience is recommended. Your ability to ride on uneven surfaces, control your bicycle and manage descents should be considered when selecting the route.",
  },
  {
    q: "Are E-MTB bikes included?",
    a: "E-MTB rental must be confirmed in your trip proposal. Bicycle models, frame sizes, availability and any additional equipment should be agreed before booking.",
  },
  {
    q: "What is the difficulty level?",
    a: "Difficulty depends on the selected route, terrain, riding distance and your experience. The itinerary should be discussed with the cycling team so the route is appropriate for your group.",
  },
  {
    q: "How far will we ride each day?",
    a: "Daily distances and elevation depend on the selected routes and the conditions of the trip. Exact figures should be confirmed with your final itinerary rather than assumed in advance.",
  },
  {
    q: "Will we ride through Berber villages?",
    a: "The proposed experience includes opportunities to discover traditional villages and rural mountain landscapes. The exact villages visited depend on the final route.",
  },
  {
    q: "Is the tour guided?",
    a: "Local cycling guide arrangements should be confirmed in your booking proposal, including the guiding service and any additional support.",
  },
  {
    q: "What is the best season for this tour?",
    a: "Spring and autumn are generally suitable periods for cycling in the Atlas Mountains. Conditions can vary with elevation and weather, so the selected dates and routes should be discussed before booking.",
  },
  {
    q: "Can the itinerary be customised?",
    a: "The route and riding programme can be discussed around your travel dates, experience and preferences. Any changes to accommodation, transfers and included services must be confirmed before booking.",
  },
];

const relatedTours = [
  {
    category: "E-MTB ADVENTURE",
    title: "Atlas Mountains E-Bike Tour – 4 Days",
    text: "Explore the Atlas Mountains on a longer electric mountain biking journey through valleys, villages and spectacular mountain scenery.",
    image: "/images/atlas-mountains-ebike-tour.jpg",
    href: "/cycling-trips/trip/atlas-mountains-e-bike-tour-4-day",
  },
  {
    category: "LUXURY E-BIKE",
    title: "Atlas Luxury E-Bike Tour – 5 Days",
    text: "Enjoy a private five-day E-bike journey with selected mountain routes and a personalised Atlas Mountains experience.",
    image: "/images/eBike-tour-atlas-mountains-morocco.jpg",
    href: "/cycling-trips/trip/atlas-luxury-e-bike-tour-5-day",
  },
  {
    category: "MOUNTAIN BIKE ADVENTURE",
    title: "Atlas Singletrack Mountain Bike Tour",
    text: "Discover natural singletrack, mountain trails and traditional villages on a guided High Atlas mountain biking adventure.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/trip/atlas-singletrack-mountain-bike-tour-6-day",
  },
];

export default function MoroccoEMtbTour3DayPage() {
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

        /* GREEN ENQUIRY SECTION */
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
          <img src={images.hero} alt="Electric mountain biking in the Atlas Mountains of Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · ATLAS MOUNTAINS · E-MTB · 3 DAYS</span>
          <h1>Morocco E-MTB Tour</h1>
          <p className="at-hero-description">
            Three days of electric mountain biking through
            the spectacular Atlas Mountains. Discover
            mountain trails, traditional villages and
            beautiful valleys on a guided adventure from Marrakech.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your E-MTB Adventure <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>03 DAYS</strong><span>Mountain adventure</span></div>
            <div><strong>ATLAS</strong><span>Mountain region</span></div>
            <div><strong>E-MTB</strong><span>Electric mountain bike</span></div>
            <div><strong>MOROCCO</strong><span>Guided experience</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>3 Days / 2 Nights</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Atlas Mountains</strong></div>
          <div className="at-fact"><span>Starting point</span><strong>Marrakech</strong></div>
          <div className="at-fact"><span>Cycling style</span><strong>Electric Mountain Bike</strong></div>
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
            <img src={images.overview} alt="Atlas Mountains E-bike cycling landscape in Morocco" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">THREE DAYS OF ELECTRIC MOUNTAIN BIKING</span>
            <h2 className="at-heading">Discover the Atlas Mountains on an E-MTB</h2>
            <p className="at-copy">
              Escape the energy of Marrakech and discover
              the spectacular mountain landscapes of the
              High Atlas on a three-day electric mountain
              biking adventure.
            </p>
            <p className="at-copy">
              Explore selected off-road routes, traditional
              Berber villages and beautiful valleys while
              enjoying the assistance of an electric mountain
              bike on suitable climbs.
            </p>
            <p className="at-copy">
              This compact cycling journey combines
              mountain riding with opportunities to experience
              the culture and landscapes of rural Morocco.
              The exact route, daily distances, accommodation
              and included services are confirmed before booking.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the itinerary →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR THREE-DAY ADVENTURE</span>
            <h2 className="at-heading">A Mountain Biking Escape from Marrakech</h2>
            <p className="at-copy">
              Travel from Marrakech towards the Atlas Mountains
              and discover a different side of Morocco.
              Over three days, explore selected mountain
              routes and rural valleys with the support
              of electric assistance.
            </p>
            <p className="at-copy">
              The proposed journey includes riding around
              the Imlil area and exploring selected routes
              through the surrounding valleys. The exact
              stages are adapted to your experience,
              route conditions and trip arrangements.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Morocco E-MTB Tour – 3 Days</h3>
            <p>A guided electric mountain biking adventure through the Atlas Mountains from Marrakech.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>3 days / 2 nights</strong></li>
              <li><span>Starting city</span><strong>Marrakech</strong></li>
              <li><span>Main region</span><strong>Atlas Mountains</strong></li>
              <li><span>Cycling style</span><strong>Electric MTB</strong></li>
              <li><span>Experience</span><strong>Basic MTB recommended</strong></li>
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
              <h2 className="at-heading">Highlights of the Morocco E-MTB Tour</h2>
            </div>
            <p>
              Experience three days of electric mountain
              biking, mountain scenery and cultural discovery
              in the Atlas Mountains of Morocco.
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
            <img src={images.trails} alt="Off-road cycling terrain in the Atlas Mountains" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE & TERRAIN</span>
            <h2 className="at-heading">Mountain Trails, Valleys and Traditional Villages</h2>
            <p className="at-copy">
              The Atlas Mountains offer varied terrain
              for electric mountain biking. Depending on
              the selected route, riders can discover
              mountain tracks, rural paths, traditional
              settlements and panoramic valley scenery.
            </p>
            <p className="at-copy">
              Electric assistance can help make suitable
              climbs more manageable, while off-road
              sections still require good bike control
              and confidence. The route should be selected
              according to the experience and ability
              of the group.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Selected mountain roads and off-road tracks</li>
              <li><span>02</span>Electric assistance on suitable climbs</li>
              <li><span>03</span>Traditional villages and rural valleys</li>
              <li><span>04</span>Routes adapted to rider experience</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR JOURNEY</span>
            <h2 className="at-heading">Morocco E-MTB Tour Information</h2>
            <p className="at-copy">
              Review the main details of this three-day
              electric mountain biking experience.
              Your final itinerary and trip services
              are confirmed during booking.
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
          <img src={images.village} alt="Traditional Berber village in the Atlas Mountains" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE TRAIL</span>
          <h2 className="at-heading">Discover the Culture of the Atlas Mountains</h2>
          <p className="at-copy">
            The experience goes beyond the riding.
            Between mountain stages, discover traditional
            villages, local landscapes and the distinctive
            culture of Morocco's High Atlas region.
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
              <span className="at-eyebrow">MOUNTAIN BIKING IN MOROCCO</span>
              <h2 className="at-heading">Explore the Landscapes of the High Atlas</h2>
            </div>
            <p>
              From mountain tracks and traditional villages
              to open valleys and dramatic slopes, discover
              the natural scenery that makes the Atlas
              Mountains a remarkable cycling destination.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="High Atlas mountain landscape" /></div>
            <div className="at-gallery-item"><img src={images.trails} alt="Atlas mountain cycling trails" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional mountain village in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Valley scenery in the Atlas Mountains" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Electric mountain bike in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">THREE DAYS IN THE ATLAS</span>
              <h2 className="at-heading">Morocco E-MTB Tour Itinerary</h2>
            </div>
            <p>
              A suggested three-day programme from Marrakech
              into the Atlas Mountains, combining selected
              mountain routes and opportunities to discover
              traditional villages and valleys.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The itinerary is a proposed outline. Daily
            distances, elevation, exact trails, overnight
            locations, E-bike rental and transfers must
            be confirmed in your final trip proposal.
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
              <h2 className="at-heading">What Is Included in the E-MTB Tour?</h2>
            </div>
            <p>
              The final inclusions depend on the services
              agreed for your booking. Check the proposal
              for bicycle rental, accommodation, meals,
              transfers and support arrangements.
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
              <h2 className="at-heading">Preparing for Your E-MTB Adventure</h2>
            </div>
            <p>
              Prepare your cycling equipment, fitness
              and riding confidence for three days
              exploring mountain terrain in Morocco.
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
              alt="Electric mountain bike ready for an Atlas Mountains ride"
            />
          </div>
          <div>
            <span className="at-eyebrow">KNOW YOUR RIDING LEVEL</span>
            <h2 className="at-heading">E-MTB Tour Difficulty</h2>
            <p className="at-copy">
              Electric assistance can make selected
              mountain climbs more manageable, but
              an E-MTB remains a mountain bike and
              requires appropriate riding skills.
            </p>
            <p className="at-copy">
              Riders should be comfortable controlling
              their bicycle on uneven surfaces and
              managing descents. The route and technical
              difficulty should be selected according
              to the experience and confidence of the group.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> This page does
              not promise a fixed technical grade,
              daily distance or elevation figure.
              The actual route, bicycle availability,
              equipment and support arrangements
              must be confirmed before booking.
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
              our three-day electric mountain biking
              experience in the Atlas Mountains.
              Contact us to discuss your dates and
              riding experience.
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
          <img src={images.final} alt="Mountain biking adventure in the Atlas Mountains" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR MOROCCAN E-MTB ADVENTURE STARTS HERE</span>
          <h2>Ready to Ride the Atlas Mountains?</h2>
          <p>
            Tell us your preferred dates, group size
            and mountain biking experience. We will
            discuss suitable routes, E-MTB arrangements
            and the details of your three-day adventure
            from Marrakech.
          </p>
          <a className="at-button" href="/contact">Plan Your E-MTB Adventure <span>→</span></a>
        </div>
      </section>

      {/* CONTACT ENQUIRY FORM */}
      <section className="at-section at-enquiry-section" id="enquiry">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">START PLANNING YOUR RIDE</span>
              <h2 className="at-heading">
                Plan Your Morocco E-MTB Adventure
              </h2>
            </div>
            <p>
              Tell us your preferred travel dates, group size and
              mountain biking experience. Let us know your E-MTB
              rental and equipment requirements, preferred routes
              and any accommodation or transfer arrangements.
              Our team will use these details to help plan your
              three-day electric mountain biking adventure from Marrakech.
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
              Looking for a longer journey or a different
              riding experience? Explore more electric
              mountain biking and mountain bike tours
              across Morocco.
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
          <span>© {2026} Mountain Bike Morocco. All rights reserved.</span>
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}