import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title:
    "Atlas Mountains Cycling Tour Morocco – 6 Days | Mountain Bike Morocco",
  description:
    "Discover the High Atlas Mountains on a 6-day cycling tour in Morocco. Ride through Imlil, Azzaden Valley, Ouirgane and Amizmiz, exploring traditional Amazigh villages and spectacular mountain landscapes.",
  alternates: {
    canonical: "/cycling-trips/trip/atlas-mountains-cycling-tour-6-day",
  },
};

const images = {
  hero: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  overview: "/images/mountain-bike-morocco-hero.jpg",
  imlil: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  valley: "/images/singletrack-mtb-atlas-mountains.jpg",
  village: "/images/group-cycling-tour-morocco.jpg",
  ouirgane: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  cycling: "/images/singletrack-mtb-atlas-mountains.jpg",
  final: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
};

const facts = [
  ["Duration", "6 days / 5 nights"],
  ["Destination", "High Atlas Mountains, Morocco"],
  ["Starting point", "Marrakech"],
  ["Main areas", "Imlil, Azzaden Valley, Ouirgane and Amizmiz"],
  ["Cycling style", "Mountain roads and rural tracks"],
  ["Difficulty", "To be confirmed with your final route"],
  ["Experience", "Suitable for cyclists with appropriate fitness"],
  ["Tour format", "Private supported cycling tour"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "Discover the High Atlas",
    text: "Ride into the spectacular mountain landscapes south of Marrakech, where traditional villages, dramatic peaks and winding mountain routes define the experience.",
  },
  {
    number: "02",
    title: "Explore the Imlil Valley",
    text: "Discover the remarkable scenery around Imlil, a traditional mountain village surrounded by terraced fields, stone houses and the towering peaks of the High Atlas.",
  },
  {
    number: "03",
    title: "Ride through Azzaden Valley",
    text: "Explore the spectacular Azzaden Valley, with its red-earth Berber villages, walnut groves, traditional mountain paths and impressive views of the High Atlas.",
  },
  {
    number: "04",
    title: "Discover Ouirgane and Amizmiz",
    text: "Ride through the contrasting landscapes around Ouirgane and Amizmiz, discovering olive groves, rural villages, mountain tracks and peaceful valleys.",
  },
];

const beyondTrail = [
  {
    title: "Amazigh village life",
    text: "Discover traditional mountain settlements and experience the architecture, hospitality and everyday culture of communities in the High Atlas.",
  },
  {
    title: "Mountain landscapes",
    text: "Travel through a changing landscape of terraced fields, rocky slopes, mountain passes and beautiful valley viewpoints.",
  },
  {
    title: "Local traditions",
    text: "Enjoy opportunities to discover local food, traditional hospitality and the cultural heritage of the mountain communities.",
  },
  {
    title: "Life in the valleys",
    text: "See how local communities live and work in the mountains, surrounded by orchards, irrigation channels and terraced agricultural land.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Marrakech",
    location: "Marrakech",
    distance: "No scheduled cycling",
    duration: "—",
    elevation: "—",
    terrain: "Arrival and preparation",
    image: images.overview,
    text: "Arrive in Marrakech, where our team will welcome you at the airport and transfer you to your accommodation. After checking in, enjoy some free time to relax or explore the historic Medina, its colourful souks and the famous Jemaa el-Fnaa Square. In the evening, meet your cycling guide for a welcome briefing covering the adventure ahead, the route, equipment and practical arrangements for your journey into the High Atlas Mountains.",
    details: [
      "Airport welcome and transfer to your accommodation",
      "Free time to explore Marrakech",
      "Welcome dinner and cycling programme briefing",
      "Bicycle and equipment preparation",
      "Overnight in Marrakech",
    ],
  },
  {
    day: "02",
    title: "Marrakech to Imlil – Into the High Atlas Mountains",
    location: "Marrakech – Imlil",
    distance: "Approx. 15–20 km",
    duration: "Approx. 2–3 hours",
    elevation: "Approx. +300–500 m",
    terrain: "Mountain roads, village lanes and valley riding",
    image: images.imlil,
    text: "After breakfast, leave Marrakech and travel towards the spectacular High Atlas Mountains. As you leave the city behind, the scenery gradually changes to mountain foothills, traditional settlements and beautiful countryside. Arrive in Imlil, a traditional Berber village situated at approximately 1,740 metres above sea level, surrounded by impressive peaks and terraced fields. After settling into your accommodation, prepare your bicycles and enjoy an introductory ride around the Imlil Valley. Explore the surrounding trails and mountain paths, discover traditional villages and enjoy your first experience of cycling in the High Atlas. Return to your guesthouse for dinner and a relaxing evening.",
    details: [
      "Breakfast and departure from Marrakech",
      "Journey into the High Atlas Mountains",
      "Discover Imlil and its traditional Berber villages",
      "Introductory cycling around the Imlil Valley",
      "Dinner and overnight in Imlil",
    ],
  },
  {
    day: "03",
    title: "Imlil to Ouirgane via Azzaden Valley",
    location: "Imlil – Azzaden Valley – Ouirgane",
    distance: "Approx. 35–50 km",
    duration: "Approx. 4–6 hours",
    elevation: "Approx. +800–1,100 m",
    terrain: "Mountain climbs, rural tracks, village routes and descents",
    image: images.valley,
    text: "After breakfast, begin one of the most spectacular stages of your cycling adventure. Leave Imlil and ride towards the beautiful Azzaden Valley, following mountain routes through traditional Berber villages, terraced farmland and impressive High Atlas scenery. Depending on the selected trail, the route may include a challenging ascent towards the Tizi Mzik area, rewarding you with magnificent views across the surrounding mountains. Continue into the Azzaden Valley, renowned for its red-earth villages, walnut groves and peaceful mountain atmosphere. Follow traditional paths and rural tracks connecting remote communities before continuing towards Ouirgane. Enjoy a traditional Moroccan lunch along the way and arrive in Ouirgane in the afternoon. Settle into your accommodation and enjoy the peaceful surroundings.",
    details: [
      "Breakfast and departure from Imlil",
      "Ride through traditional mountain villages",
      "Explore the spectacular Azzaden Valley",
      "Mountain trails and scenic descents towards Ouirgane",
      "Traditional lunch along the route",
      "Dinner and overnight in Ouirgane",
    ],
  },
  {
    day: "04",
    title: "Ouirgane to Amizmiz Valley",
    location: "Ouirgane – Amizmiz Valley",
    distance: "Approx. 35–45 km",
    duration: "Approx. 3–5 hours",
    elevation: "Approx. +500–800 m",
    terrain: "Rural tracks, mountain roads and rolling valley terrain",
    image: images.ouirgane,
    text: "After breakfast, leave Ouirgane and continue your cycling journey towards the beautiful Amizmiz Valley. Today's route explores the quieter landscapes of the High Atlas foothills, passing traditional Berber villages, olive groves, agricultural terraces and peaceful countryside. Follow scenic mountain roads and rural tracks connecting small communities, enjoying the changing landscapes as you ride between valleys. The route combines flowing sections, occasional climbs and beautiful mountain viewpoints. Stop along the way to appreciate the scenery and discover the local way of life. Enjoy a traditional Moroccan lunch before continuing towards Amizmiz. Arrive in the valley during the afternoon and settle into your accommodation for a relaxing evening.",
    details: [
      "Breakfast and departure from Ouirgane",
      "Cycle through traditional villages and rural landscapes",
      "Discover the countryside between Ouirgane and Amizmiz",
      "Enjoy mountain scenery and valley viewpoints",
      "Traditional Moroccan lunch",
      "Dinner and overnight in Amizmiz Valley",
    ],
  },
  {
    day: "05",
    title: "Amizmiz Valley Loop Ride and Transfer to Marrakech",
    location: "Amizmiz Valley – Marrakech",
    distance: "Approx. 25–30 km",
    duration: "Approx. 3–4 hours",
    elevation: "Approx. +400–700 m",
    terrain: "Circular mountain route, rural tracks and rolling climbs",
    image: images.cycling,
    text: "After breakfast, enjoy your final cycling day with a beautiful loop ride through the Amizmiz Valley. Explore the surrounding countryside on a circular route featuring traditional Berber villages, agricultural terraces, mountain tracks and spectacular views of the Atlas Mountains. Enjoy a varied ride combining flowing trails, gentle climbs and rewarding descents while discovering the peaceful rural atmosphere of the region. Stop along the way for photographs and refreshments, making the most of your final opportunity to experience the landscapes and culture of the Atlas foothills. After completing the loop, return to your accommodation to freshen up before travelling back to Marrakech by vehicle. Arrive in the city during the afternoon and enjoy your final evening in Morocco.",
    details: [
      "Breakfast and preparation for the final ride",
      "Circular cycling route through Amizmiz Valley",
      "Discover traditional villages and mountain landscapes",
      "Final cycling experience in the Atlas foothills",
      "Lunch and return to accommodation",
      "Afternoon transfer from Amizmiz to Marrakech",
      "Overnight in Marrakech",
    ],
  },
  {
    day: "06",
    title: "Departure from Marrakech",
    location: "Marrakech – Airport",
    distance: "No scheduled cycling",
    duration: "—",
    elevation: "—",
    terrain: "Departure and airport transfer",
    image: images.final,
    text: "Enjoy breakfast at your accommodation before checking out. Depending on your flight schedule, you may have some free time to enjoy a final walk around Marrakech or relax at your riad. At the appropriate time, our team will transfer you to Marrakech Menara Airport for your departure. Your six-day Atlas Mountains cycling adventure comes to an end, leaving you with unforgettable memories of Morocco's mountain landscapes, traditional Berber villages and spectacular cycling routes.",
    details: [
      "Breakfast at your accommodation",
      "Free time depending on your flight schedule",
      "Transfer to Marrakech Menara Airport",
      "End of your Atlas Mountains cycling adventure",
    ],
  },
];

const inclusions = [
  "Trip planning and route coordination",
  "Local cycling support as agreed in your itinerary",
  "Accommodation specified in your final proposal",
  "Meals explicitly listed in your confirmed itinerary",
  "Support vehicle and transfers specified in your proposal",
  "Luggage assistance where included in your arrangements",
  "On-trip coordination and practical assistance",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Bicycle and personal cycling equipment unless agreed",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses and tips",
  "Additional nights and transfers not included in your proposal",
  "Services not specifically listed in your confirmed booking",
];

const preparation = [
  {
    title: "Choose the right bicycle",
    text: "Bring a well-maintained bicycle suitable for the confirmed route. A mountain bike, gravel bike or touring bicycle may be appropriate depending on the road surfaces and tracks selected for your trip. Discuss rental options and equipment with the team before travelling.",
  },
  {
    title: "Clothing and protection",
    text: "Pack a suitable helmet, gloves, cycling clothing, sunglasses and comfortable riding shoes. Mountain temperatures can change throughout the day, so bring warm layers and a lightweight windproof or waterproof jacket.",
  },
  {
    title: "Fitness and riding experience",
    text: "Prepare for several consecutive days of cycling. Your fitness should match the daily distances, elevation gain and terrain of the final agreed route. Share your riding experience with the team so the programme can be planned appropriately.",
  },
  {
    title: "Personal essentials",
    text: "Bring sun protection, reusable water bottles or a hydration system, personal medication and any preferred cycling nutrition. A small personal repair kit is also useful.",
  },
];

const faqs = [
  {
    q: "How long is the Atlas Mountains Cycling Tour?",
    a: "The tour is planned over six days and five nights, starting and finishing in Marrakech and exploring the High Atlas Mountains through Imlil, Azzaden Valley, Ouirgane and Amizmiz.",
  },
  {
    q: "Where does the cycling tour start?",
    a: "The tour starts in Marrakech. From the city, you travel towards Imlil and the High Atlas Mountains, where the main cycling experience takes place.",
  },
  {
    q: "Which places will we discover?",
    a: "The programme connects Marrakech, Imlil, the spectacular Azzaden Valley, Ouirgane and Amizmiz Valley. The journey includes mountain roads, rural tracks, traditional villages and beautiful valley scenery.",
  },
  {
    q: "Is this tour suitable for beginners?",
    a: "Suitability depends on the final route, daily distances, elevation and terrain. Contact us with details of your cycling experience and fitness so we can discuss an appropriate programme.",
  },
  {
    q: "What type of bicycle should I bring?",
    a: "The most suitable bicycle depends on the confirmed route and surfaces. A mountain bike or gravel bike may be appropriate for different versions of the trip. Discuss your equipment and rental possibilities with the team before travelling.",
  },
  {
    q: "Is a support vehicle available?",
    a: "The tour can be planned with support arrangements. The availability of a support vehicle, luggage assistance and transfers will be specified in your final trip proposal.",
  },
  {
    q: "When is the best time to visit the Atlas Mountains?",
    a: "Spring and autumn are generally suitable periods for cycling in the High Atlas. Conditions can vary with altitude, so the best dates depend on your preferred route and riding experience.",
  },
  {
    q: "Can I customise the itinerary?",
    a: "Yes. This private cycling experience can be discussed around your dates, group size, preferred riding style and fitness level. Daily distances, routes and arrangements can be agreed before booking.",
  },
];

const relatedTours = [
  {
    category: "MOUNTAIN BIKE ADVENTURE",
    title: "Atlas Singletrack Mountain Bike Tour",
    text: "Discover mountain trails and spectacular singletrack in the High Atlas.",
    image: images.cycling,
    href: "/cycling-trips/trip/atlas-singletrack-mountain-bike-tour-6-day",
  },
  {
    category: "E-BIKE EXPERIENCE",
    title: "Atlas Mountains E-Bike Tour",
    text: "Explore the mountain valleys with the assistance of an electric mountain bike.",
    image: images.imlil,
    href: "/cycling-trips/trip/atlas-mountains-e-bike-tour-4-day",
  },
  {
    category: "MOUNTAIN ADVENTURE",
    title: "Atlas Enduro MTB Tour",
    text: "Discover a more trail-focused mountain biking experience in Morocco.",
    image: images.valley,
    href: "/cycling-trips/trip/atlas-enduro-mtb-tour-5-day",
  },
];

export default function AtlasMountainsCyclingTour6DayPage() {
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

        /* HERO */

        .atlas-tour .at-hero {
          position: relative;
          display: flex;
          min-height: 720px;
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
            linear-gradient(0deg, rgba(9,14,10,.82) 0%, rgba(9,14,10,.05) 75%);
        }

        .atlas-tour .at-hero-content {
          position: relative;
          z-index: 1;
          width: min(1240px, calc(100% - 64px));
          margin: 0 auto;
          padding: 115px 0 58px;
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
          max-width: 620px;
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
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          margin-top: 48px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,.36);
        }

        .atlas-tour .at-hero-bottom div { min-width: 0; }

        .atlas-tour .at-hero-bottom strong {
          display: block;
          color: #fff !important;
          font-size: 15px;
          letter-spacing: 1.3px;
        }

        .atlas-tour .at-hero-bottom span {
          color: #eeeae1 !important;
          font-size: 10px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* TOUR SUMMARY */

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
          min-height: 112px;
          padding: 24px 25px;
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
          font-size: 18px;
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

        /* OVERVIEW */

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

        /* HIGHLIGHTS */

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

        /* ROUTE */

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

        /* TOUR INFORMATION */

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

        /* CULTURE */

        .atlas-tour .at-culture {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 520px;
          background: var(--green);
          color: #fff;
        }

        .atlas-tour .at-culture-image { min-height: 520px; }

        .atlas-tour .at-culture-content {
          align-self: center;
          padding: 70px clamp(35px, 7vw, 100px);
        }

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

        /* GALLERY */

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

        /* ITINERARY */

        .atlas-tour .at-itinerary-section { background: #eae6db; }

        .atlas-tour .at-itinerary-intro {
          max-width: 780px;
          margin: 0 0 42px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.9;
        }

        .atlas-tour .at-itinerary-note {
          max-width: 780px;
          margin: -22px 0 38px;
          padding: 15px 19px;
          border-left: 3px solid var(--gold);
          background: rgba(255,254,250,.7);
          color: #62665d;
          font-size: 12px;
          line-height: 1.8;
        }

        .atlas-tour .at-itinerary-list {
          display: grid;
          gap: 28px;
        }

        .atlas-tour .at-day {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 450px;
          background: #fffefa;
          border: 1px solid #e0dcd1;
          overflow: hidden;
        }

        .atlas-tour .at-day:nth-child(even) .at-day-image { order: 2; }

        .atlas-tour .at-day-image {
          min-height: 450px;
          overflow: hidden;
        }

        .atlas-tour .at-day-image img { transition: transform .6s ease; }

        .atlas-tour .at-day:hover .at-day-image img {
          transform: scale(1.035);
        }

        .atlas-tour .at-day-content {
          align-self: center;
          padding: 42px clamp(25px, 4vw, 55px);
        }

        .atlas-tour .at-day-number {
          display: inline-flex;
          width: 54px;
          height: 54px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--gold);
          border-radius: 50%;
          color: #a27b40;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 23px;
          line-height: 1;
        }

        .atlas-tour .at-day-content h3 {
          margin: 16px 0 10px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(24px, 2.6vw, 32px);
          font-weight: 400;
          line-height: 1.2;
        }

        .atlas-tour .at-day-location {
          margin-bottom: 17px;
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
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          margin: 23px 0 19px;
          background: var(--line);
          border: 1px solid var(--line);
        }

        .atlas-tour .at-day-meta span {
          display: flex;
          min-height: 76px;
          flex-direction: column;
          justify-content: center;
          gap: 4px;
          padding: 12px 15px;
          background: #f7f5ef;
          color: #343a31;
          font-size: 13px;
          line-height: 1.5;
        }

        .atlas-tour .at-day-meta strong {
          color: #927344;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .atlas-tour .at-day-content ul {
          display: grid;
          gap: 7px;
          margin: 15px 0 0;
          padding-left: 18px;
          color: #62665d;
          font-size: 12px;
        }

        /* INCLUSIONS */

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

        /* PREPARATION */

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

        /* DIFFICULTY */

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

        /* FAQ */

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

        /* FINAL CTA */

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

        /* RELATED TOURS */

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

        .atlas-tour .at-related-image {
          height: 255px;
          overflow: hidden;
        }

        .atlas-tour .at-related-image img { transition: transform .5s ease; }

        .atlas-tour .at-related-card:hover .at-related-image img {
          transform: scale(1.04);
        }

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

        /* FOOTER */

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

        /* RESPONSIVE */

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

          .atlas-tour .at-hero { min-height: 690px; }
          .atlas-tour .at-hero-content {
            width: calc(100% - 40px);
            padding: 90px 0 42px;
          }

          .atlas-tour .at-hero h1 {
            font-size: clamp(43px, 12vw, 62px);
            letter-spacing: -1.8px;
          }

          .atlas-tour .at-hero-description { font-size: 15px; }

          .atlas-tour .at-hero-bottom {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px 25px;
            margin-top: 38px;
          }

          .atlas-tour .at-fact-strip-inner { grid-template-columns: repeat(2, 1fr); }
          .atlas-tour .at-fact { min-height: 90px; padding: 17px 15px; }
          .atlas-tour .at-fact:nth-child(2) { border-right: 0; }
          .atlas-tour .at-fact:nth-child(-n+2) { border-bottom: 1px solid var(--line); }

          .atlas-tour .at-subnav-inner {
            justify-content: flex-start;
            gap: 12px 20px;
          }

          .atlas-tour .at-subnav a { font-size: 9px; }

          .atlas-tour .at-section-head {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .atlas-tour .at-section-head > p { margin: 0; }

          .atlas-tour .at-overview-grid,
          .atlas-tour .at-terrain-grid,
          .atlas-tour .at-facts-layout,
          .atlas-tour .at-difficulty-grid,
          .atlas-tour .at-faq-layout {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .atlas-tour .at-overview-image {
            min-height: 390px;
            margin-right: 12px;
          }

          .atlas-tour .at-booking-card { padding: 25px; }
          .atlas-tour .at-highlight-grid { grid-template-columns: 1fr 1fr; }

          .atlas-tour .at-highlight {
            min-height: 230px;
            padding: 23px 17px;
          }

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

          .atlas-tour .at-gallery-item:first-child {
            grid-column: span 2;
            grid-row: auto;
          }

          .atlas-tour .at-day { grid-template-columns: 1fr; }
          .atlas-tour .at-day:nth-child(even) .at-day-image { order: 0; }
          .atlas-tour .at-day-image { min-height: 280px; }
          .atlas-tour .at-day-content { padding: 30px 23px; }

          .atlas-tour .at-day-meta span {
            min-height: 70px;
            padding: 11px 12px;
          }

          .atlas-tour .at-inclusions-grid { grid-template-columns: 1fr; }
          .atlas-tour .at-inclusion-card { padding: 28px 23px; }
          .atlas-tour .at-prep-grid { grid-template-columns: 1fr; }
          .atlas-tour .at-difficulty-image { height: 330px; }

          .atlas-tour .at-final-content {
            width: calc(100% - 40px);
            padding: 75px 0;
          }

          .atlas-tour .at-related-grid { grid-template-columns: 1fr; }
          .atlas-tour .at-related-image { height: 240px; }

          .atlas-tour .at-footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 35px 22px;
            padding: 50px 0 35px;
          }

          .atlas-tour .at-footer-bottom {
            flex-direction: column;
            gap: 8px;
          }
        }

        @media (max-width: 420px) {
          .atlas-tour .at-highlight-grid { grid-template-columns: 1fr; }
          .atlas-tour .at-highlight { min-height: auto; }
          .atlas-tour .at-facts-row { grid-template-columns: 1fr; gap: 3px; }
          .atlas-tour .at-day-meta { grid-template-columns: 1fr 1fr; }
          .atlas-tour .at-footer-main { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO */}
      <section className="at-hero">
        <div className="at-hero-image">
          <img
            src={images.hero}
            alt="Cycling through the High Atlas Mountains in Morocco"
          />
        </div>
        <div className="at-hero-shade" />

        <div className="at-hero-content">
          <span className="at-eyebrow">
            MOROCCO · HIGH ATLAS · PRIVATE CYCLING TOUR
          </span>

          <h1>Atlas Mountains Cycling Tour</h1>

          <p className="at-hero-description">
            Discover the High Atlas on two wheels. Ride through spectacular
            mountain scenery, explore traditional Amazigh villages and
            experience the remarkable valleys around Imlil, Azzaden, Ouirgane
            and Amizmiz.
          </p>

          <div className="at-hero-actions">
            <a className="at-button" href="#enquiry">
              Enquire About This Tour <span>→</span>
            </a>
            <a className="at-hero-back" href="#itinerary">
              View the Itinerary
            </a>
          </div>

          <div className="at-hero-bottom">
            <div>
              <strong>06 DAYS</strong>
              <span>Total tour duration</span>
            </div>
            <div>
              <strong>04 RIDING DAYS</strong>
              <span>Planned cycling stages</span>
            </div>
            <div>
              <strong>HIGH ATLAS</strong>
              <span>Mountain region</span>
            </div>
            <div>
              <strong>PRIVATE</strong>
              <span>Tour format</span>
            </div>
          </div>
        </div>
      </section>

      {/* KEY TOUR INFORMATION */}
      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact">
            <span>Duration</span>
            <strong>6 Days / 5 Nights</strong>
          </div>
          <div className="at-fact">
            <span>Riding programme</span>
            <strong>4 Planned Riding Days</strong>
          </div>
          <div className="at-fact">
            <span>Starting point</span>
            <strong>Marrakech</strong>
          </div>
          <div className="at-fact">
            <span>Tour style</span>
            <strong>Private Cycling</strong>
          </div>
        </div>
      </section>

      {/* SECTION NAVIGATION */}
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

      {/* OVERVIEW */}
      <section className="at-section" id="overview">
        <div className="at-container at-overview-grid">
          <div className="at-overview-image">
            <img
              src={images.overview}
              alt="Mountain landscape in the Moroccan High Atlas"
            />
          </div>

          <div className="at-overview-content">
            <span className="at-eyebrow">A JOURNEY INTO THE ATLAS</span>
            <h2 className="at-heading">
              Discover the High Atlas, One Ride at a Time
            </h2>

            <p className="at-copy">
              The Atlas Mountains Cycling Tour is a six-day journey into one
              of Morocco&apos;s most beautiful mountain regions. Leaving
              Marrakech behind, travel towards the High Atlas and discover a
              landscape of dramatic peaks, green valleys, traditional villages
              and winding mountain roads.
            </p>

            <p className="at-copy">
              Explore the areas around Imlil and the spectacular Azzaden
              Valley before continuing towards Ouirgane and Amizmiz. Along
              the way, experience the character of rural mountain life,
              discover Amazigh heritage and enjoy the changing scenery of
              the Atlas foothills.
            </p>

            <p className="at-copy">
              This private cycling experience can be discussed around your
              riding level, preferred distances and travel dates. The final
              route, daily stages and support arrangements are agreed with
              you before the trip.
            </p>

            <a className="at-text-link" href="#itinerary">
              Discover the itinerary →
            </a>
          </div>
        </div>
      </section>

      {/* PRIVATE TOUR INFORMATION */}
      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE ATLAS EXPERIENCE</span>
            <h2 className="at-heading">
              A Mountain Journey Planned Around You
            </h2>

            <p className="at-copy">
              Every cycling group has its own pace and preferences. Share your
              experience, the kind of riding you enjoy and the time you have
              available. We can discuss a suitable programme and clarify the
              route, accommodation, meals and support arrangements before
              confirming your booking.
            </p>

            <p className="at-copy">
              Whether you prefer relaxed valley riding or a more demanding
              mountain itinerary, the details should be agreed in advance so
              that your experience matches your expectations.
            </p>
          </div>

          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Atlas Mountains Cycling Tour</h3>
            <p>
              Six days exploring the mountain landscapes south of Marrakech.
            </p>

            <ul className="at-booking-list">
              <li>
                <span>Duration</span>
                <strong>6 days / 5 nights</strong>
              </li>
              <li>
                <span>Riding days</span>
                <strong>4 planned days</strong>
              </li>
              <li>
                <span>Starting city</span>
                <strong>Marrakech</strong>
              </li>
              <li>
                <span>Main areas</span>
                <strong>Imlil, Azzaden & Amizmiz</strong>
              </li>
              <li>
                <span>Tour format</span>
                <strong>Private</strong>
              </li>
              <li>
                <span>Route details</span>
                <strong>Customised</strong>
              </li>
            </ul>

            <a className="at-button" href="#enquiry">
              Enquire About This Tour <span>→</span>
            </a>
          </aside>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="at-section at-highlight-section" id="highlights">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">THE EXPERIENCE</span>
              <h2 className="at-heading">
                Highlights of the Atlas Mountains Cycling Tour
              </h2>
            </div>

            <p>
              From the mountain scenery around Imlil to the spectacular
              Azzaden Valley and the quieter countryside near Ouirgane
              and Amizmiz, discover the landscapes and culture that make
              cycling in the High Atlas so distinctive.
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

      {/* ROUTE AND TERRAIN */}
      <section className="at-section" id="route">
        <div className="at-container at-terrain-grid">
          <div className="at-terrain-image">
            <img
              src={images.valley}
              alt="Mountain biking terrain in the Atlas Mountains"
            />
          </div>

          <div>
            <span className="at-eyebrow">THE ROUTE & TERRAIN</span>
            <h2 className="at-heading">
              Mountain Roads, Traditional Valleys and Open Landscapes
            </h2>

            <p className="at-copy">
              The High Atlas offers a varied setting for cycling. Mountain
              roads connect remote settlements, valley tracks pass through
              cultivated landscapes and the surrounding peaks create
              spectacular views throughout the journey.
            </p>

            <p className="at-copy">
              Your journey connects Imlil with the Azzaden Valley before
              continuing through Ouirgane towards Amizmiz. The exact balance
              of paved roads, rural tracks, climbing and descending depends
              on the final route. We recommend discussing your preferred
              bicycle and riding style before confirming the programme.
            </p>

            <ul className="at-terrain-points">
              <li>
                <span>01</span>
                Mountain roads and scenic valley routes
              </li>
              <li>
                <span>02</span>
                Traditional villages and rural tracks
              </li>
              <li>
                <span>03</span>
                Changing elevation and mountain scenery
              </li>
              <li>
                <span>04</span>
                Daily distances adapted to the agreed itinerary
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* TOUR DETAILS */}
      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR JOURNEY</span>
            <h2 className="at-heading">Tour Information</h2>
            <p className="at-copy">
              Review the main details of this six-day cycling experience.
              Exact distances, elevation, accommodation and support services
              are confirmed in your personalised trip proposal.
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

      {/* CULTURE */}
      <section className="at-culture">
        <div className="at-culture-image">
          <img
            src={images.village}
            alt="Traditional Amazigh village in the Atlas Mountains"
          />
        </div>

        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE TRAIL</span>
          <h2 className="at-heading">
            Discover the Culture of the High Atlas
          </h2>

          <p className="at-copy">
            A cycling journey in the Atlas Mountains is about more than the
            roads and landscapes. It is also an opportunity to discover the
            traditional communities, local architecture and hospitality that
            give this region its distinctive character.
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

      {/* GALLERY */}
      <section className="at-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">MOUNTAIN MOMENTS</span>
              <h2 className="at-heading">
                The Landscapes of the High Atlas
              </h2>
            </div>

            <p>
              Explore the mountain scenery, traditional settlements and
              beautiful valleys that shape this cycling experience.
            </p>
          </div>

          <div className="at-gallery-grid">
            <div className="at-gallery-item">
              <img src={images.imlil} alt="Imlil mountain scenery" />
            </div>
            <div className="at-gallery-item">
              <img src={images.valley} alt="Azzaden Valley mountain trail" />
            </div>
            <div className="at-gallery-item">
              <img src={images.village} alt="Traditional Atlas village" />
            </div>
            <div className="at-gallery-item">
              <img src={images.ouirgane} alt="Ouirgane mountain landscape" />
            </div>
            <div className="at-gallery-item">
              <img src={images.cycling} alt="Cycling in the High Atlas" />
            </div>
          </div>
        </div>
      </section>

      {/* DAY-BY-DAY ITINERARY */}
      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">SIX DAYS IN THE MOUNTAINS</span>
              <h2 className="at-heading">
                Atlas Mountains Cycling Tour Itinerary
              </h2>
            </div>

            <p>
              A six-day cycling adventure connecting Marrakech, Imlil,
              Azzaden Valley, Ouirgane and Amizmiz, combining spectacular
              mountain scenery, traditional Berber villages and rural trails.
            </p>
          </div>

          <p className="at-itinerary-intro">
            Starting in Marrakech, the journey enters the High Atlas
            Mountains and continues through Imlil, the spectacular Azzaden
            Valley, Ouirgane and Amizmiz. Enjoy several days of mountain
            cycling before returning to Marrakech for your final evening.
            The daily riding details below provide indicative planning
            ranges for the proposed stages.
          </p>

          <p className="at-itinerary-note">
            <strong>About the ride figures:</strong> Distances, riding times
            and elevation gains are approximate planning estimates. Actual
            figures will vary according to the selected roads and tracks,
            route conditions and any changes agreed with your guide. The
            final figures should be confirmed against the route GPX before
            your trip.
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
                    <span>
                      <strong>Ride distance</strong>
                      {day.distance}
                    </span>
                    <span>
                      <strong>Riding time</strong>
                      {day.duration}
                    </span>
                    <span>
                      <strong>Elevation gain</strong>
                      {day.elevation}
                    </span>
                    <span>
                      <strong>Terrain</strong>
                      {day.terrain}
                    </span>
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

      {/* INCLUSIONS AND EXCLUSIONS */}
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
              The final inclusions are confirmed in your booking proposal.
              Review the services listed below and check your personalised
              itinerary before confirming your trip.
            </p>
          </div>

          <div className="at-inclusions-grid">
            <div className="at-inclusion-card">
              <h3>Included</h3>
              <ul>
                {inclusions.map((item) => (
                  <li key={item}>
                    <span>+</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="at-inclusion-card">
              <h3>Not Included</h3>
              <ul>
                {exclusions.map((item) => (
                  <li key={item}>
                    <span>−</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PREPARATION */}
      <section className="at-section at-prep-section" id="preparation">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">BEFORE YOU TRAVEL</span>
              <h2 className="at-heading">
                Preparing for Your Atlas Cycling Adventure
              </h2>
            </div>

            <p>
              A little preparation makes a big difference. Consider your
              bicycle, clothing, fitness and personal equipment before
              travelling to Morocco.
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

      {/* DIFFICULTY */}
      <section className="at-section">
        <div className="at-container at-difficulty-grid">
          <div className="at-difficulty-image">
            <img
              src={images.cycling}
              alt="Cycling through mountain terrain in Morocco"
            />
          </div>

          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">Difficulty and Fitness</h2>

            <p className="at-copy">
              The difficulty of this tour depends on the selected route,
              daily distance, elevation gain and type of terrain. The High
              Atlas is a mountainous region, so some routes can involve
              sustained climbing and changing road conditions.
            </p>

            <p className="at-copy">
              Tell us about your normal weekly riding, previous cycling
              holidays and the kind of terrain you enjoy. This helps us
              discuss a suitable itinerary and realistic daily stages.
            </p>

            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty, distances and
              elevation figures must be confirmed against the actual route
              before booking. This page does not promise a fixed technical
              grade or daily mileage.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="at-section at-faq-section" id="faqs">
        <div className="at-container at-faq-layout">
          <div>
            <span className="at-eyebrow">GOOD TO KNOW</span>
            <h2 className="at-heading">Frequently Asked Questions</h2>

            <p className="at-copy">
              Find answers to common questions about cycling in the High
              Atlas. Contact our team if you need more details before
              planning your trip.
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

      {/* FINAL CALL TO ACTION */}
      <section className="at-final-cta">
        <div className="at-final-image">
          <img
            src={images.final}
            alt="High Atlas mountain scenery in Morocco"
          />
        </div>

        <div className="at-final-shade" />

        <div className="at-final-content">
          <span className="at-eyebrow">
            YOUR ATLAS ADVENTURE STARTS HERE
          </span>

          <h2>Ready to Discover the Atlas Mountains by Bike?</h2>

          <p>
            Tell us your preferred dates, group size and cycling experience.
            We will discuss a private mountain cycling experience and help
            you plan your journey through Imlil, Azzaden Valley, Ouirgane
            and Amizmiz.
          </p>

          <a className="at-button" href="#enquiry">
            Plan Your Atlas Cycling Tour <span>→</span>
          </a>
        </div>
      </section>

      {/* ENQUIRY FORM — BEFORE RELATED TOURS */}
      <section
        className="at-section"
        id="enquiry"
        style={{ backgroundColor: "var(--green)" }}
      >
        <div className="at-container">
          <ContactEnquiryForm
            tourName="Atlas Mountains Cycling Tour – 6 Days"
            destination="High Atlas Mountains, Morocco"
            cyclingType="Road Cycling"
          />
        </div>
      </section>

      {/* RELATED TOURS */}
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
              Discover more ways to experience Morocco, from mountain
              singletrack to electric mountain biking and enduro adventures.
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

      {/* FOOTER */}
      <footer className="at-footer">
        <div className="at-container at-footer-main">
          <div className="at-footer-brand">
            <img
              src="/images/logo-mountain-bike-morocco-footer.png"
              alt="Mountain Bike Morocco"
            />

            <p>
              Discover Morocco by bike. Explore the Atlas Mountains, remote
              valleys and unforgettable landscapes with Mountain Bike Morocco.
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