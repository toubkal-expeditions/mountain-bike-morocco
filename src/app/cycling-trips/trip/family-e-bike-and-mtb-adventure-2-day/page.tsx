import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Family E-Bike & MTB Adventure – 2 Days | Mountain Bike Morocco",
  description:
    "Enjoy a 2-day family e-bike and MTB adventure in Morocco’s Ouirgane Valley and High Atlas. Explore scenic valley tracks, traditional villages and mountain landscapes on a guided ride planned around your family.",
  alternates: {
    canonical: "/cycling-trips/trip/family-e-bike-and-mtb-adventure-2-day",
  },
};

const images = {
  hero: "/images/group-ebike-tour-morocco.jpg",
  overview: "/images/ouirgane-valley-ebike-tour.jpg",
  mountains: "/images/atlas_mountain_ebike_tour_3days-6.jpg",
  road: "/images/e-bike-day-tour-atlas-morocco.jpg",
  village: "/images/berber-villages-cycling-expeditions.jpg",
  valley: "/images/imlil-cycling-adventure-tour.jpeg",
  cycling: "/images/group-emtb-tour-morocco.jpg",
  final: "/images/scott-ebike-tour-morocco.jpg",
};

const facts = [
  ["Duration", "2 days"],
  ["Destination", "Ouirgane Valley"],
  ["Region", "High Atlas Mountains"],
  ["Starting point", "Marrakech – to be confirmed"],
  ["Cycling style", "Family e-bike and MTB routes"],
  ["Difficulty", "Adapted to the family and selected route"],
  ["Experience", "Families with confident riders"],
  ["Tour format", "Private family adventure"],
  ["Best season", "Spring and autumn, subject to conditions"],
];

const highlights = [
  {
    number: "01",
    title: "Discover Ouirgane Valley Together",
    text: "Escape the city and spend two days exploring the beautiful landscapes of Ouirgane Valley and the High Atlas. Enjoy an e-bike and MTB experience surrounded by High Atlas foothills, open countryside and traditional rural scenery.",
  },
  {
    number: "02",
    title: "Family-Friendly Riding Routes",
    text: "Enjoy selected routes planned around the ages, confidence and cycling experience of everyone in your group. The terrain, distance and daily riding programme will be discussed before your trip.",
  },
  {
    number: "03",
    title: "Villages and Mountain Landscapes",
    text: "Discover the rural character of the valley, traditional villages and mountain scenery. Enjoy opportunities to stop, take photographs and appreciate the landscapes along the selected route.",
  },
  {
    number: "04",
    title: "Two Days at Your Family's Pace",
    text: "Enjoy a relaxed two-day escape with time for cycling, breaks and exploring the surroundings. The programme can be adapted to your group's comfort and riding ability.",
  },
];

const beyondTrail = [
  {
    title: "The Landscapes of Ouirgane Valley",
    text: "Discover the varied scenery of Ouirgane Valley and the High Atlas, with mountain foothills, open landscapes and rural tracks providing the setting for your cycling escape.",
  },
  {
    title: "Traditional Berber Villages",
    text: "Depending on the selected route, pass through or near traditional settlements and discover the architecture and everyday atmosphere of rural mountain communities.",
  },
  {
    title: "Time to Enjoy the Valley",
    text: "Two days allow time to enjoy the surroundings without treating the experience as a race. Make space for scenic stops, photographs and rest stops.",
  },
  {
    title: "A Private Family Experience",
    text: "The programme is planned around the ages, cycling confidence and interests of your group. Route choices and the pace of each day are discussed before departure.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Ride Ouirgane Valley by E-Bike and MTB",
    location: "Marrakech – Ouirgane Valley",
    distance: "To be confirmed",
    riding: "E-bike / MTB ride – selected route",
    image: images.overview,
    text: "Meet your guide at the agreed starting point in Marrakech or at the confirmed meeting location. Travel to Ouirgane Valley and the High Atlas according to your confirmed arrangements. After discussing the riding plan and checking that everyone's bicycle and equipment are suitable, begin your first e-bike and MTB ride. Follow a selected route through the valley and its surrounding countryside, enjoying rural scenery and views of the High Atlas foothills. The route and pace will reflect the ages, confidence and cycling experience of your group, with e-bike and standard MTB options confirmed in advance. Enjoy regular breaks and scenic stops before completing the day's ride. Accommodation and evening arrangements will follow the programme confirmed in your proposal.",
    details: [
      "Meet your guide at the agreed starting point",
      "Travel to Ouirgane Valley villages according to confirmed arrangements",
      "Discuss the route and riding plan for your group",
      "Check bicycles, helmets and personal equipment",
      "Begin your family e-bike and MTB ride",
      "Explore selected valley tracks and rural scenery",
      "Enjoy scenic stops, photographs and regular breaks",
      "Finish the day's ride and follow the agreed overnight arrangements",
    ],
  },
  {
    day: "02",
    title: "Family E-Bike and MTB Riding in Ouirgane Valley",
    location: "Ouirgane Valley – Marrakech",
    distance: "To be confirmed",
    riding: "E-bike / MTB ride – selected route",
    image: images.valley,
    text: "Enjoy the second day of your e-bike and MTB adventure in the Ouirgane Valley area. After breakfast according to your accommodation arrangements, meet your guide and prepare for another selected ride. The route will be planned around your group's comfort and the experience gained on the first day. Discover more of the valley's rural landscapes and enjoy time together on suitable tracks and trails. Take breaks when needed and enjoy the scenery at a comfortable pace. Complete the ride at the agreed finishing point before returning to Marrakech if this transfer is included in your confirmed programme.",
    details: [
      "Prepare for the second day's cycling programme",
      "Review the route and riding plan with your guide",
      "Check bicycles and equipment before departure",
      "Ride a selected route in the Ouirgane Valley area",
      "Discover more of the valley's rural scenery",
      "Enjoy rest stops and scenic photographs",
      "Complete the ride at the agreed finishing point",
      "Return to Marrakech according to confirmed arrangements",
    ],
  }
];

const inclusions = [
  "Two-day family e-bike and MTB programme planning",
  "Selected route planning based on family ages and riding experience",
  "Local cycling guide as specified in your proposal",
  "Family-friendly route selection and riding arrangements",
  "One night's accommodation only if specified in your proposal",
  "Bicycle rental if specifically included",
  "Helmets and protective equipment only when confirmed",
  "Transfers from Marrakech if specified in your proposal",
  "Meals and refreshments only when listed in your proposal",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Bicycles unless included in your proposal",
  "Personal cycling clothing and equipment",
  "Helmets and protective equipment unless confirmed",
  "Transfers unless specifically included",
  "Accommodation unless listed in your proposal",
  "Meals and drinks not specified in your itinerary",
  "Personal expenses and tips",
  "Additional activities not listed in your proposal",
  "Services not specifically listed in your proposal",
];

const preparation = [
  {
    title: "Discuss Every Family Member's Ability",
    text: "Before the trip, tell us the riders' experience, everyone's cycling experience and how comfortable each rider feels on different types of terrain. This helps us discuss suitable routes for both days.",
  },
  {
    title: "Choose Suitable Mountain Bikes",
    text: "Bicycles should be correctly sized and in good mechanical condition, with reliable brakes and tyres suitable for the selected routes. Discuss bicycle rental and available sizes before booking.",
  },
  {
    title: "Bring Essential Riding Equipment",
    text: "Bring a correctly fitting helmet for every rider, comfortable cycling clothing, gloves, suitable footwear, water bottles and personal sun protection. Confirm any additional protective equipment before departure.",
  },
  {
    title: "Prepare for Two Days in the Valley",
    text: "Bring a small overnight bag, personal essentials and suitable clothing for changing temperatures. The weather can vary between the valley and surrounding foothills, so bring an extra layer.",
  },
];

const faqs = [
  {
    q: "How long is the Family E-Bike & MTB Adventure?",
    a: "This is a two-day e-bike and MTB experience in the Ouirgane Valley area. The exact meeting time, daily routes, riding duration and finishing arrangements will be confirmed in your proposal.",
  },
  {
    q: "Is this tour suitable for families with children?",
    a: "The experience is designed around cycling. Suitability depends on the ages, confidence and cycling experience of the children and adults in your group. Share these details with us so we can discuss appropriate routes for both days.",
  },
  {
    q: "What age do children need to be to join?",
    a: "A fixed minimum age has not been specified for this tour. The appropriate age depends on the child's cycling ability, confidence, bicycle size and the terrain selected. Please tell us the ages of everyone joining before booking.",
  },
  {
    q: "Do children need previous e-bike and MTB experience?",
    a: "Previous e-bike and MTB experience is not necessarily required for every possible route, but all riders should be able to ride a bicycle confidently. Route suitability depends on each child's ability and the conditions of the selected terrain.",
  },
  {
    q: "Is this tour suitable for beginner cyclists?",
    a: "Riders should be comfortable riding a bicycle before joining an e-bike and MTB route. Whether the escape is suitable for beginners depends on the selected terrain and the experience of everyone in the family. Discuss your group's ability with us before booking.",
  },
  {
    q: "Where is Ouirgane Valley and the High Atlas?",
    a: "Ouirgane Valley is in the High Atlas region of Morocco, south of Marrakech. The exact meeting point and route locations for your cycling escape will be confirmed during trip planning.",
  },
  {
    q: "What kind of trails will we ride?",
    a: "Routes will be selected according to your group's experience and confidence. They may include suitable countryside tracks, rural paths and selected e-bike and MTB routes. The exact terrain and technical difficulty will be discussed before the trip.",
  },
  {
    q: "How difficult is the Ouirgane Valley and the High Atlas family ride?",
    a: "The intended difficulty is easy to moderate, depending on the selected routes. Trail surfaces, gradients and distances can vary. The final programme should be chosen after reviewing the experience and ability of everyone in your group.",
  },
  {
    q: "How far will we cycle each day?",
    a: "Daily distances have not been fixed on this page. They will depend on the selected routes, the ages and abilities of the riders and the agreed pace. Both days' distances will be discussed during trip planning.",
  },
  {
    q: "How much time will we spend cycling?",
    a: "The riding duration depends on the selected routes, the group's ability and the number of breaks. Your planned schedule and approximate riding times for both days will be discussed before booking.",
  },
  {
    q: "Is accommodation included?",
    a: "Accommodation arrangements depend on your selected programme and final proposal. The tour is designed as a two-day escape, but the accommodation type and whether it is included must be confirmed before booking.",
  },
  {
    q: "Are mountain bikes available for children?",
    a: "Bicycle availability and children's sizes need to be confirmed before booking. Please provide the height or approximate bicycle size needed for each rider so that suitable equipment can be discussed.",
  },
  {
    q: "Are helmets included?",
    a: "Helmet availability and inclusion depend on the equipment arrangements confirmed in your proposal. Every rider should have a correctly fitting helmet suitable for e-bike and MTB riding.",
  },
  {
    q: "How do we get from Marrakech to Ouirgane Valley villages?",
    a: "Transport arrangements depend on your selected programme and final proposal. If you need transfers from your accommodation in Marrakech, mention this when enquiring so the available options can be discussed.",
  },
  {
    q: "Are meals included during the two days?",
    a: "Meals and refreshments depend on the arrangements confirmed in your proposal. Check your personalised itinerary for the meals included and any opportunities to arrange additional refreshments.",
  },
  {
    q: "What is the best season for cycling in Ouirgane Valley and the High Atlas?",
    a: "Spring and autumn can offer pleasant conditions for cycling in the region. Temperatures and weather vary throughout the year, so the selected routes and departure times should be checked before the trip.",
  },
  {
    q: "Can we organise a private trip just for our family?",
    a: "The programme can be discussed as a private experience. Share your preferred dates, group size, riders' experience and cycling abilities so that the routes and arrangements can be planned around your group.",
  },
  {
    q: "What should we bring for the two-day escape?",
    a: "Bring a correctly fitting helmet, comfortable cycling clothing, gloves, suitable footwear, water and sun protection for every rider. You should also bring personal overnight essentials and an extra layer for cooler conditions.",
  },
  {
    q: "Can the routes be adapted for younger children?",
    a: "Route selection should take the ages and abilities of all riders into account. Tell us about the youngest riders and their cycling experience so that suitable options can be discussed before confirming the programme.",
  },
];

const relatedTours = [
  {
    category: "E-MTB ADVENTURE",
    title: "Atlas Mountains E-MTB Tour",
    text: "Discover the Atlas Mountains on a guided electric mountain-bike journey through selected trails and valley landscapes.",
    image: "/images/atlas-mountains-ebike-tour.jpg",
    href: "/cycling-trips/e-mtb",
  },
  {
    category: "DAY E-BIKE TOUR",
    title: "E-Bike Day Tour from Marrakech",
    text: "Enjoy a guided day ride from Marrakech and discover the countryside on an electric mountain bike.",
    image: "/images/day-ebike-tour-from-marrakech.jpg",
    href: "/cycling-trips/trip/day-ebike-tour-from-marrakech",
  },
  {
    category: "MOUNTAIN BIKING",
    title: "Atlas Mountains Mountain Bike Tour",
    text: "Explore the mountain landscapes of Morocco on a guided MTB adventure through selected Atlas trails, valleys and traditional villages.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/mtb",
  },
];

export default function FamilyEBikeMtbAdventure2DayPage() {
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

        .atlas-tour .at-enquiry-section {
          background: var(--green);
          color: #fff;
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
          <img src={images.hero} alt="Family e-bike and MTB group ride in Ouirgane Valley, Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · OUIRGANE VALLEY · FAMILY E-BIKE & MTB · PRIVATE · 2 DAYS</span>
          <h1>Family E-Bike &amp; MTB Adventure</h1>
          <p className="at-hero-description">
            Escape to the Atlas Mountains
            for two days of cycling
            in beautiful Ouirgane Valley and the High Atlas.
            Discover rural tracks, traditional
            villages and mountain scenery
            on a guided experience planned
            around your group's ages,
            confidence and riding ability.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your E-Bike & MTB Adventure <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>02 DAYS</strong><span>Family cycling escape</span></div>
            <div><strong>OUIRGANE</strong><span>Ouirgane Valley</span></div>
            <div><strong>FAMILY</strong><span>Ride together</span></div>
            <div><strong>MTB</strong><span>Guided riding</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>2 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Ouirgane Valley and the High Atlas</strong></div>
          <div className="at-fact"><span>Experience</span><strong>E-Bike & MTB Adventure</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Guided E-Bike & MTB</strong></div>
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
            <img src={images.overview} alt="Mountain landscapes and countryside in Ouirgane Valley and the High Atlas" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A TWO-DAY FAMILY E-BIKE & MTB ADVENTURE</span>
            <h2 className="at-heading">Discover Ouirgane Valley Together by E-Bike and MTB</h2>
            <p className="at-copy">
              Your Family
              E-Bike & MTB Adventure is a two-day
              e-bike and MTB experience
              for families who want to
              explore the High Atlas
              countryside together.
            </p>
            <p className="at-copy">
              Discover selected tracks,
              rural landscapes and
              traditional villages while
              enjoying the scenery of
              Ouirgane Valley and its
              surrounding foothills.
            </p>
            <p className="at-copy">
              Both days' routes, distances,
              riding durations, accommodation,
              meeting point and transfer
              arrangements will be discussed
              and confirmed after we
              understand your group's
              experience and needs.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the two-day journey →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR TWO-DAY FAMILY ESCAPE</span>
            <h2 className="at-heading">Two Days of Cycling, Valley Landscapes and Time Together</h2>
            <p className="at-copy">
              Leave the city behind and
              enjoy a rider-focused
              e-bike and MTB adventure in
              the beautiful surroundings
              of Ouirgane Valley and the High Atlas.
            </p>
            <p className="at-copy">
              Explore selected routes
              over two days, with time
              for scenic stops, rural
              discoveries and family
              breaks. The programme
              is planned around the
              experience and ability
              of everyone joining.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Family E-Bike &amp; MTB Adventure</h3>
            <p>A two-day family e-bike and MTB experience in Ouirgane Valley, with selected routes planned around your group's riding ability.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>2 days</strong></li>
              <li><span>Destination</span><strong>Ouirgane Valley and the High Atlas</strong></li>
              <li><span>Tour format</span><strong>Private cycling escape</strong></li>
              <li><span>Route style</span><strong>Selected valley trails</strong></li>
              <li><span>Travel style</span><strong>Family-focused experience</strong></li>
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
              <h2 className="at-heading">Highlights of Your Family E-Bike &amp; MTB Adventure</h2>
            </div>
            <p>
              Enjoy two days of family
              e-bike and MTB riding, Atlas
              scenery and rural discoveries
              on a guided programme
              designed around your group.
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
            <img src={images.road} alt="Rural cycling track in the High Atlas foothills near Ouirgane Valley villages" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE &amp; TERRAIN</span>
            <h2 className="at-heading">Explore Ouirgane Valley and the Surrounding High Atlas</h2>
            <p className="at-copy">
              The two-day adventure focuses
              on routes selected according
              to the experience and ability
              of your group. Depending
              on the agreed programme,
              the terrain may include
              countryside tracks, rural
              paths and suitable
              e-bike and MTB routes.
            </p>
            <p className="at-copy">
              Trail surfaces, gradients
              and distances will depend
              on the selected routes and
              local conditions. The aim
              is to create two enjoyable
              days of riding at a
              comfortable pace for
              everyone in your group.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Two-day family e-bike and MTB adventure</li>
              <li><span>02</span>Routes selected around ages and riding ability</li>
              <li><span>03</span>Ouirgane Valley and High Atlas foothill scenery</li>
              <li><span>04</span>Flexible pace with time for rest stops</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR ESCAPE</span>
            <h2 className="at-heading">Tour Information</h2>
            <p className="at-copy">
              Review the main details
              of this two-day family
              e-bike and MTB experience
              in Ouirgane Valley and the High Atlas.
              Exact distances, riding times,
              accommodation, meeting point
              and transfers will be confirmed
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
          <img src={images.village} alt="Traditional village and rural scenery in the Atlas Mountains" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover the Rural Character of Ouirgane Valley</h2>
          <p className="at-copy">
            Your cycling escape is about
            more than e-bike and MTB riding.
            Across two days, discover
            the landscapes and rural
            atmosphere of Ouirgane Valley and the High Atlas.
            Enjoy time outdoors, explore
            selected village surroundings
            and appreciate the scenery
            of the High Atlas foothills.
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
              <span className="at-eyebrow">FAMILY E-BIKE & MTB MOMENTS</span>
              <h2 className="at-heading">Explore the Scenery of Ouirgane Valley and the High Atlas</h2>
            </div>
            <p>
              Discover High Atlas foothills,
              countryside tracks, rural
              villages and memorable
              landscapes during your
              two-day cycling escape.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="High Atlas mountain scenery in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.road} alt="Rural cycling track in the High Atlas foothills" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional rural village in the Atlas region" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Valley landscape in the High Atlas Mountains" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Group e-bike and MTB ride in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">TWO DAYS IN OUIRGANE VALLEY</span>
              <h2 className="at-heading">Family E-Bike &amp; MTB Adventure Itinerary</h2>
            </div>
            <p>
              Two days of family mountain
              biking through selected
              valley landscapes. Daily
              routes, distances and riding
              durations are confirmed
              during planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines the
            proposed structure of the
            two-day family adventure. The exact
            routes, distances, riding times,
            accommodation, meeting point,
            finishing point and transfer
            arrangements depend on the
            final programme agreed with
            your group and the riding
            experience of everyone joining.
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
              <h2 className="at-heading">What Is Included in Your E-Bike & MTB Adventure?</h2>
            </div>
            <p>
              Final inclusions are confirmed
              in your booking proposal.
              Check your personalised itinerary
              for guiding, bicycles, equipment,
              accommodation, transport
              and meals included in your
              two-day experience.
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
              <h2 className="at-heading">Preparing for Your Family E-Bike &amp; MTB Adventure</h2>
            </div>
            <p>
              Prepare your bicycles,
              equipment and overnight
              essentials for two days
              of e-bike and MTB riding in
              the High Atlas countryside.
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
            <img src={images.cycling} alt="Family e-bike and MTB group enjoying a guided ride in Morocco" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">A ROUTE FOR YOUR FAMILY</span>
            <h2 className="at-heading">Difficulty and Cycling Experience</h2>
            <p className="at-copy">
              The adventure is planned as
              a rider-focused e-bike and MTB
              experience, with an intended
              easy-to-moderate level depending
              on the selected routes.
              Actual difficulty will depend
              on gradients, surfaces, daily
              distances and local conditions.
            </p>
            <p className="at-copy">
              Before confirming the routes,
              we need to understand the
              riders' experience, their
              cycling confidence and the
              experience of the adults.
              This helps us discuss suitable
              terrain and a comfortable pace
              for both days.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Children
              should be confident bicycle riders
              before joining an e-bike and MTB
              route. Final suitability, route
              difficulty, daily distances,
              equipment and supervision
              arrangements must be discussed
              and confirmed before booking.
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
              about the Family E-Bike & MTB Adventure. Contact
              our team if you need more
              details before planning
              your two-day cycling trip.
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
          <img src={images.final} alt="Family e-bike and MTB adventure in Morocco's Atlas Mountains" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR OUIRGANE FAMILY ADVENTURE STARTS HERE</span>
          <h2>Ready to Plan Your Two-Day E-Bike & MTB Adventure?</h2>
          <p>
            Tell us your preferred dates,
            group size, riders' experience
            and cycling experience.
            We can discuss suitable routes,
            daily riding durations,
            equipment, accommodation
            and transfers for your
            two-day family cycling adventure in Ouirgane Valley.
          </p>
          <a className="at-button" href="/contact">Plan Your E-Bike & MTB Adventure <span>→</span></a>
        </div>
      </section>

      <section className="at-section at-enquiry-section" id="enquire">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">PLAN YOUR JOURNEY</span>
              <h2 className="at-heading">
                Enquire About the Family E-Bike &amp; MTB Adventure
              </h2>
            </div>
            <p>
              Tell us your preferred dates, family group size, children's ages
              and heights, and cycling experience so we can discuss suitable
              routes, bicycles and arrangements for your two-day adventure
              in Ouirgane Valley.
            </p>
          </div>
          <ContactEnquiryForm
            tourName="Family E-Bike & MTB Adventure – 2 Days"
            destination="Ouirgane Valley, High Atlas, Morocco"
            cyclingType="Family E-Bike and MTB"
          />
        </div>
      </section>

      <section className="at-related-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EXPLORE MORE</span>
              <h2 className="at-heading">More Village and Mountain Bike Adventures in Morocco</h2>
            </div>
            <p>
              Discover more ways to explore
              Morocco by bike, from family
              cycling days around Marrakech
              to e-bike and MTB weekends
              in the Atlas Mountains and
              guided MTB adventures.
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
          <span> Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}