import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title:
    "Atlas Mountains Enduro Tour Morocco – 3 Days | Mountain Bike Morocco",
  description:
    "Experience a 3-day private enduro mountain biking adventure in Morocco's Atlas Mountains. Discover selected mountain trails, technical terrain and spectacular landscapes from Marrakech.",
  alternates: {
    canonical: "/cycling-trips/trip/atlas-mountains-enduro-tour-3-day",
  },
};

const images = {
  hero: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  overview: "/images/singletrack-mtb-atlas-mountains.jpg",
  mountains: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  trails: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  village: "/images/group-cycling-tour-morocco.jpg",
  valley: "/images/mountain-bike-morocco-hero.jpg",
  cycling: "/images/singletrack-mtb-atlas-mountains.jpg",
  final: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
};

const facts = [
  ["Duration", "3 days / 2 nights"],
  ["Destination", "Atlas Mountains, Morocco"],
  ["Starting point", "Marrakech"],
  ["Main areas", "Atlas mountain region"],
  ["Cycling style", "Enduro mountain biking"],
  ["Difficulty", "Moderate to challenging, route-dependent"],
  ["Experience", "Previous MTB experience recommended"],
  ["Tour format", "Private enduro MTB adventure"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "Ride the Atlas Mountains",
    text: "Explore selected mountain biking routes through the dramatic landscapes of the Atlas Mountains, with changing terrain, mountain views and opportunities to discover the region by bike.",
  },
  {
    number: "02",
    title: "Enduro Riding Experience",
    text: "Enjoy a mountain biking experience focused on selected trails and varied terrain. The technical character of each ride is planned around your experience and the confirmed route.",
  },
  {
    number: "03",
    title: "Mountain Trails and Villages",
    text: "Discover the rural character of the Atlas Mountains, riding through mountain landscapes and areas surrounding traditional villages and agricultural terraces.",
  },
  {
    number: "04",
    title: "A Private MTB Adventure",
    text: "Ride with a programme planned around your group, preferred riding style and ability. Route choices, daily stages and support arrangements are discussed before the trip.",
  },
];

const beyondTrail = [
  {
    title: "Traditional mountain villages",
    text: "Discover the character of rural communities, traditional houses and the everyday life of villages located throughout the Atlas Mountains.",
  },
  {
    title: "Spectacular mountain scenery",
    text: "Experience rugged slopes, open valleys and impressive mountain views as you explore the region and its varied landscapes by mountain bike.",
  },
  {
    title: "Local culture and traditions",
    text: "Discover Moroccan hospitality, local architecture, regional food and the traditions of communities living in the Atlas mountain region.",
  },
  {
    title: "More than the trails",
    text: "Take time between riding stages to enjoy the natural environment, discover rural landscapes and experience the distinctive atmosphere of the Atlas Mountains.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Marrakech and Enduro Tour Preparation",
    location: "Marrakech",
    distance: "No fixed riding distance",
    riding: "Arrival, briefing and bike preparation",
    image: images.overview,
    text: "Arrive in Marrakech and meet the local team. After settling into your accommodation, discuss the three-day enduro mountain biking programme and the arrangements for your journey into the Atlas Mountains. There will be time to check your bicycle and equipment, talk through your riding experience and review the proposed routes. Depending on arrival time and the final arrangements, the first day can also include travel towards the mountain region.",
    details: [
      "Arrival and welcome in Marrakech",
      "Meet the local cycling team",
      "Mountain bike and equipment check",
      "Enduro tour briefing and route preparation",
    ],
  },
  {
    day: "02",
    title: "Enduro Mountain Biking in the Atlas Mountains",
    location: "Atlas Mountains",
    distance: "Route-dependent",
    riding: "Full-day enduro mountain biking",
    image: images.trails,
    text: "Enjoy the main riding day of your enduro adventure in the Atlas Mountains. Explore selected mountain biking routes and natural terrain, with the riding programme planned around your experience and preferred level of technical challenge. The exact trails, distance, elevation gain and riding conditions depend on the confirmed route and local conditions. Take time to enjoy the mountain scenery and the landscapes surrounding the riding areas.",
    details: [
      "Prepare your mountain bike for the day's ride",
      "Explore selected enduro routes and mountain terrain",
      "Ride stages suited to your experience and ability",
      "Enjoy the landscapes of the Atlas mountain region",
    ],
  },
  {
    day: "03",
    title: "Final Mountain Ride and Return to Marrakech",
    location: "Atlas Mountains – Marrakech",
    distance: "Route-dependent",
    riding: "Optional morning ride and return transfer",
    image: images.valley,
    text: "Depending on your departure time and the final arrangements, enjoy an additional morning ride in the Atlas Mountains. The route can be selected according to the time available, trail conditions and your group's preferences. After the riding experience, prepare for the return journey towards Marrakech and your onward travel arrangements.",
    details: [
      "Breakfast and preparation",
      "Optional final enduro ride if time allows",
      "Return journey towards Marrakech",
      "End of the three-day enduro adventure",
    ],
  },
];

const inclusions = [
  "Trip planning and route coordination",
  "Local cycling support as agreed in your itinerary",
  "Accommodation specified in your final proposal",
  "Meals explicitly listed in your confirmed itinerary",
  "Mountain bike rental if specifically included",
  "Support vehicle and transfers specified in your proposal",
  "Any additional services expressly listed in your booking confirmation",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Mountain bike rental unless agreed in your proposal",
  "Personal cycling equipment, protective gear and clothing",
  "Meals and drinks not specified in the itinerary",
  "Personal expenses and tips",
  "Additional nights and transfers not included in your proposal",
];

const preparation = [
  {
    title: "Choose a Suitable Enduro Bike",
    text: "Your mountain bike should be suitable for the terrain included in the confirmed route. Discuss the bicycle type, suspension, brakes, tyres and recommended setup with the team before travelling.",
  },
  {
    title: "Bring Suitable Protection",
    text: "A suitable helmet and appropriate protective equipment are important for enduro mountain biking. Depending on the selected terrain and your riding style, knee and elbow protection, gloves and other protective gear may be recommended.",
  },
  {
    title: "Fitness and Riding Experience",
    text: "Enduro riding requires balance, bike control and confidence on varied terrain. Previous mountain biking experience is recommended. Share your riding background and fitness level so the route can be discussed appropriately.",
  },
  {
    title: "Cycling Equipment and Clothing",
    text: "Bring comfortable mountain biking clothing, suitable footwear, gloves, cycling glasses and hydration equipment. Sun protection and basic personal repair supplies are also recommended.",
  },
];

const faqs = [
  {
    q: "How long is the Atlas Mountains Enduro Tour?",
    a: "The tour is planned over three days and two nights, with arrival and departure arrangements based around Marrakech. The riding programme and transfers are organised according to the confirmed itinerary.",
  },
  {
    q: "Where does the enduro tour start?",
    a: "The tour starts in Marrakech before travelling towards the Atlas Mountains. The exact riding area and return arrangements depend on the final route and your travel plans.",
  },
  {
    q: "What type of mountain biking is included?",
    a: "The experience is designed around enduro mountain biking on selected routes and varied mountain terrain. The exact trail character and technical demands depend on the final route and local conditions.",
  },
  {
    q: "Do I need previous enduro experience?",
    a: "Previous mountain biking experience is recommended. Riders should be comfortable with bike handling, braking, balance and changing terrain. The selected routes should match your actual riding ability and experience.",
  },
  {
    q: "Are the trails suitable for beginners?",
    a: "Enduro mountain biking is not automatically suitable for beginners. Suitability depends on the trails selected and your experience. Share your riding background before booking so the technical demands can be discussed.",
  },
  {
    q: "How much riding is included each day?",
    a: "The riding programme depends on the final route, trail conditions, available time and your group's ability. Daily distances, elevation gain and the number of riding stages will be discussed and confirmed in your trip proposal.",
  },
  {
    q: "Are the daily distances and elevations fixed?",
    a: "No fixed distances or elevation figures are promised on this page. They depend on the selected routes, local conditions and the final programme agreed with your group.",
  },
  {
    q: "Can I bring my own enduro mountain bike?",
    a: "You can discuss bringing your own mountain bike when planning the trip. If you prefer to rent a bicycle, availability, specifications and rental costs should be confirmed in your proposal.",
  },
  {
    q: "Will a support vehicle be available?",
    a: "Support arrangements can be discussed when planning your private tour. The availability of a support vehicle, luggage assistance and transfers will be specified in your final trip proposal.",
  },
  {
    q: "What is the best time for an enduro tour in the Atlas Mountains?",
    a: "Spring and autumn are generally suitable periods for mountain biking in Morocco. Weather and trail conditions can vary depending on the exact location and elevation, so travel dates should be selected with the planned route in mind.",
  },
  {
    q: "Can I customise the three-day itinerary?",
    a: "The private tour can be discussed around your travel dates, group size, mountain biking experience and preferred riding style. The final routes, bicycle arrangements, accommodation and support services are agreed before booking.",
  },
];

const relatedTours = [
  {
    category: "MOUNTAIN BIKE ADVENTURE",
    title: "Atlas Bike Adventure – 4 Days",
    text: "Explore the Atlas Mountains on a private multi-day mountain biking adventure from Marrakech.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/trip/atlas-bike-adventure-4-day",
  },
  {
    category: "ATLAS MTB ADVENTURE",
    title: "Atlas Singletrack Mountain Bike Tour",
    text: "Discover selected natural singletrack, mountain trails and rural landscapes in the High Atlas.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/trip/atlas-singletrack-mountain-bike-tour-6-day",
  },
  {
    category: "MOUNTAIN BIKE ADVENTURE",
    title: "Anti-Atlas Mountain Bike Tour – 8 Days",
    text: "Discover rugged mountain scenery, remote valleys and varied mountain biking terrain in southern Morocco.",
    image: "/images/gravel-cycling-morocco.jpg",
    href: "/cycling-trips/trip/anti-atlas-mountain-bike-tour-8-day",
  },
];

export default function AtlasMountainsEnduroTour3DayPage() {
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
            alt="Enduro mountain biking adventure in the Atlas Mountains of Morocco"
          />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">
            MOROCCO · ATLAS MOUNTAINS · ENDURO MTB · 3 DAYS
          </span>
          <h1>Atlas Mountains Enduro Tour</h1>
          <p className="at-hero-description">
            Experience a three-day enduro mountain biking adventure in
            Morocco's Atlas Mountains. Ride selected mountain routes,
            discover varied terrain and enjoy spectacular landscapes
            on a private MTB journey planned around your ability.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Plan Your Enduro Adventure <span>→</span>
            </a>
            <a className="at-hero-back" href="/cycling-trips">
              Explore All Cycling Tours
            </a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>03 DAYS</strong><span>Enduro adventure</span></div>
            <div><strong>ATLAS</strong><span>Mountain region</span></div>
            <div><strong>ENDURO MTB</strong><span>Mountain trails</span></div>
            <div><strong>MOROCCO</strong><span>Mountain landscapes</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>3 Days / 2 Nights</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Atlas Mountains</strong></div>
          <div className="at-fact"><span>Starting point</span><strong>Marrakech</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Enduro Mountain Biking</strong></div>
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
              alt="Natural mountain biking singletrack in Morocco's Atlas Mountains"
            />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">AN ATLAS ENDURO MTB JOURNEY</span>
            <h2 className="at-heading">
              Discover the Atlas Mountains on an Enduro Bike
            </h2>
            <p className="at-copy">
              The Atlas Mountains Enduro Tour is a three-day
              mountain biking experience designed for riders
              who want to explore selected routes and varied
              mountain terrain in Morocco. Starting from
              Marrakech, the journey takes you towards the
              landscapes of the Atlas mountain region.
            </p>
            <p className="at-copy">
              The riding programme focuses on enjoying the
              mountain environment by bike. Depending on the
              selected route, the terrain may include natural
              trails, mountain tracks and rural connections.
              The exact technical character of the ride is
              determined by the confirmed itinerary.
            </p>
            <p className="at-copy">
              This private enduro experience can be discussed
              around your preferred travel dates, group size
              and riding ability. Route choices, daily stages,
              bicycle arrangements and support services are
              agreed before your trip.
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
            <span className="at-eyebrow">YOUR PRIVATE ENDURO EXPERIENCE</span>
            <h2 className="at-heading">Three Days of Mountain Trail Riding</h2>
            <p className="at-copy">
              Explore selected mountain routes in the Atlas
              region on a private enduro mountain biking
              adventure. The riding programme can be discussed
              according to your experience, preferred terrain
              and the time available during your stay.
            </p>
            <p className="at-copy">
              Share your mountain biking background, the
              type of trails you normally ride and your
              preferred level of technical challenge. The
              route, daily stages, transfers and overnight
              arrangements can then be discussed around
              your group.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Atlas Mountains Enduro Tour</h3>
            <p>
              Three days exploring selected mountain routes
              and varied terrain in the Atlas Mountains.
            </p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>3 days / 2 nights</strong></li>
              <li><span>Starting city</span><strong>Marrakech</strong></li>
              <li><span>Main region</span><strong>Atlas Mountains</strong></li>
              <li><span>Tour format</span><strong>Private Enduro MTB</strong></li>
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
                Highlights of the Atlas Mountains Enduro Tour
              </h2>
            </div>
            <p>
              Discover mountain scenery, selected trails,
              varied terrain and traditional villages on
              a private three-day enduro mountain biking
              journey through Morocco.
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
              src={images.trails}
              alt="Enduro mountain bike terrain in Morocco's Atlas Mountains"
            />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE & TERRAIN</span>
            <h2 className="at-heading">
              Natural Trails, Mountain Tracks and Varied Terrain
            </h2>
            <p className="at-copy">
              The Atlas Mountains provide a varied mountain
              environment for enduro riding. Depending on
              the selected area and confirmed itinerary,
              routes may include natural trails, mountain
              tracks and rural connections through changing
              landscapes.
            </p>
            <p className="at-copy">
              The exact surfaces, technical difficulty and
              riding conditions depend on the final route.
              Trail selection should take account of your
              experience, bike setup and local conditions.
              These details are discussed before booking.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Selected enduro routes and mountain terrain</li>
              <li><span>02</span>Natural trails and rural mountain tracks</li>
              <li><span>03</span>Mountain landscapes and traditional villages</li>
              <li><span>04</span>Daily stages planned around your riding ability</li>
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
              Review the main details of this three-day
              enduro mountain biking experience. Exact
              distances, elevation, trail surfaces, technical
              demands, accommodation and support services
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

      <section className="at-culture">
        <div className="at-culture-image">
          <img
            src={images.village}
            alt="Rural mountain village and landscape in Morocco"
          />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE TRAILS</span>
          <h2 className="at-heading">
            Discover the Landscapes and Culture of the Atlas
          </h2>
          <p className="at-copy">
            This journey is about more than the trails.
            Between riding stages, discover the landscapes,
            architecture and communities that give the
            Atlas Mountains their distinctive character.
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
              <span className="at-eyebrow">ENDURO MTB MOMENTS</span>
              <h2 className="at-heading">
                Explore the Landscapes Along the Journey
              </h2>
            </div>
            <p>
              Discover the mountain scenery, rural landscapes
              and natural terrain that make the Atlas Mountains
              an exciting region to explore by mountain bike.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.trails} alt="Enduro mountain bike trail in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.mountains} alt="Atlas Mountains landscape in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Rural village landscape in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Mountain valley scenery in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Natural mountain biking terrain in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">THREE DAYS IN MOROCCO</span>
              <h2 className="at-heading">
                Atlas Mountains Enduro Tour Itinerary
              </h2>
            </div>
            <p>
              A suggested three-day structure connecting
              Marrakech with the Atlas Mountains. Final
              riding stages, transfers and overnight
              arrangements are confirmed during trip planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The itinerary below provides an overview of the
            experience. Daily distances, elevation gain,
            exact trail sections and technical demands depend
            on the final programme agreed with your group.
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
              <h2 className="at-heading">
                What Is Included in Your Enduro Tour?
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
                Preparing for Your Atlas Mountains Enduro Tour
              </h2>
            </div>
            <p>
              Prepare your mountain bike, protective equipment
              and fitness for a multi-day enduro mountain
              biking adventure through the Atlas Mountains.
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
              alt="Mountain biking terrain in Morocco's Atlas Mountains"
            />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">
              Enduro Difficulty and Riding Experience
            </h2>
            <p className="at-copy">
              Enduro mountain biking requires balance, bike
              control and confidence on varied terrain.
              The difficulty of this tour depends on the
              selected trails, daily distances, elevation
              gain and technical conditions. Previous
              mountain biking experience is recommended.
            </p>
            <p className="at-copy">
              Tell us about your cycling experience,
              the type of trails you normally ride and
              your preferred level of technical challenge.
              We can then discuss a suitable itinerary,
              route options and bicycle setup for the journey.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty,
              distances, elevation figures and trail surfaces
              must be confirmed against the actual route and
              local conditions before booking. This page
              does not promise a fixed technical grade,
              daily mileage or specific trail conditions.
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
              enduro mountain biking in the Atlas Mountains.
              Contact our team if you need more details
              before planning your trip.
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
            alt="Enduro mountain biking landscape in the Atlas Mountains"
          />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">
            YOUR ENDURO ADVENTURE STARTS HERE
          </span>
          <h2>Ready to Ride the Atlas Mountains?</h2>
          <p>
            Tell us your preferred dates, group size,
            mountain bike requirements and riding experience.
            We will discuss a private three-day enduro
            journey and help you plan your mountain biking
            adventure in Morocco.
          </p>
          <a className="at-button" href="/contact">
            Plan Your Enduro Adventure <span>→</span>
          </a>
        </div>
      </section>

      {/* Enquiry form: after the final CTA and before related tours */}
      <section
        className="at-section"
        id="enquiry"
        style={{ backgroundColor: "var(--green)" }}
      >
        <div className="at-container">
          <ContactEnquiryForm
            tourName="Atlas Mountains Enduro Tour – 3 Days"
            destination="Atlas Mountains, Morocco"
            cyclingType="Enduro MTB"
          />
        </div>
      </section>

      <section className="at-related-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EXPLORE MORE</span>
              <h2 className="at-heading">
                More Mountain Bike Adventures in Morocco
              </h2>
            </div>
            <p>
              Discover more ways to experience Morocco,
              from Atlas mountain enduro trails to longer
              singletrack and mountain biking journeys.
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
            © {2026} Mountain Bike Morocco. All rights reserved.
          </span>
          <span>Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}