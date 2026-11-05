import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Berber Villages Group Tour – 4 to 6 Days | Mountain Bike Morocco",
  description:
    "Explore traditional Berber villages and High Atlas valleys on a guided four-to-six-day group cycling journey. Ride selected rural tracks, enjoy mountain scenery and discover the character of Morocco’s mountain communities.",
  alternates: {
    canonical: "/cycling-trips/trip/berber-villages-group-tour-4-to-6-days",
  },
};

const images = {
  hero: "/images/berber-villages-cycling-expeditions.jpg",
  overview: "/images/atlas-berber-valley-bike.JPG",
  mountains: "/images/atlas-mountains-cycling-expedition.jpg",
  road: "/images/adventure-cycling-morocco.jpg",
  village: "/images/morocco-berbre-villages.jpg",
  valley: "/images/atlas-valley-cycling-morocco.jpg",
  cycling: "/images/group-cycling-atlas-mountains.jpg",
  final: "/images/group-cycling-tour-morocco 2.jpg",
};

const facts = [
  ["Duration", "4 to 6 days"],
  ["Destination", "High Atlas villages and valleys"],
  ["Region", "High Atlas Mountains, Morocco"],
  ["Starting point", "Marrakech – to be confirmed"],
  ["Cycling style", "Guided group mountain biking"],
  ["Difficulty", "To be agreed according to the selected routes"],
  ["Experience", "For groups of recreational and experienced riders; route suitability to be discussed"],
  ["Tour format", "Group cycling journey"],
  ["Best season", "Spring and autumn, subject to conditions"],
];

const highlights = [
  { number: "01", title: "Ride Between Traditional Berber Villages", text: "Spend four to six days exploring the rural landscapes of the High Atlas. Follow selected tracks through valley scenery and village surroundings, with time to appreciate the architecture and everyday atmosphere of traditional mountain communities." },
  { number: "02", title: "A Group Journey at a Considered Pace", text: "Share the experience with your cycling group. The daily pace, route choice and length of each ride will be discussed around the group's experience, confidence and preferred style of riding." },
  { number: "03", title: "High Atlas Valleys and Mountain Scenery", text: "Discover the changing landscapes of the Atlas foothills, open countryside, rural paths and valley tracks. The exact route will be selected and confirmed during trip planning." },
  { number: "04", title: "Four Days with Optional Extensions", text: "Begin with a four-day group cycling programme and extend the journey to five or six days. Additional riding days can be planned around the group's interests and the routes available for the agreed dates." },
];

const beyondTrail = [
  { title: "The Character of Berber Villages", text: "Depending on the selected route, pass through or near traditional settlements and discover the architecture and everyday atmosphere of rural mountain communities." },
  { title: "High Atlas Valley Landscapes", text: "Explore a setting of mountain foothills, open countryside and rural tracks. The specific valleys and villages visited will depend on the itinerary confirmed for your group." },
  { title: "Time Beyond the Bike", text: "A multi-day journey creates room for scenic pauses, photographs and time to appreciate the surroundings rather than treating every ride as a race." },
  { title: "A Shared Group Experience", text: "Bring friends, a cycling club or an organised group together for a guided journey. The riding plan and arrangements will be discussed before departure." },
];

const itinerary = [
  { day: "01", title: "Meet Your Guide and Ride into the Atlas Countryside", location: "Marrakech – High Atlas villages", distance: "To be confirmed", riding: "Group MTB ride – selected route", image: images.overview, text: "Meet your guide at the agreed starting point in Marrakech or at the confirmed meeting location. Travel to the Atlas villages area according to the arrangements confirmed for your group. Review the riding plan, check bicycles and equipment, and begin the first selected ride through valley surroundings and rural countryside. The route and pace will reflect the group's experience and local trail conditions. Enjoy regular breaks and scenic stops before finishing at the agreed point. Accommodation and evening arrangements will follow the final proposal.", details: ["Meet your guide at the agreed starting point", "Transfer to the confirmed Atlas riding area if included", "Review the route and group riding plan", "Check bicycles, helmets and personal equipment", "Begin the first selected village and valley ride", "Enjoy scenic stops and regular breaks", "Finish the ride and follow the agreed overnight arrangements"] },
  { day: "02", title: "Explore More Village and Valley Tracks", location: "High Atlas villages and valleys", distance: "To be confirmed", riding: "Group MTB ride – selected route", image: images.village, text: "After breakfast according to your accommodation arrangements, meet your guide and prepare for another day of group cycling. Follow a selected route through the rural landscapes of the High Atlas, discovering more valley scenery and village surroundings. The terrain, distance and riding duration will depend on the route agreed for your group. Allow time for photographs, refreshments and breaks before completing the day's ride.", details: ["Prepare for the day's cycling programme", "Review route conditions and the riding plan", "Check bicycles and equipment before departure", "Ride selected rural tracks and village surroundings", "Discover more of the valley landscape", "Enjoy rest stops and time for photographs", "Complete the ride at the agreed finishing point"] },
  { day: "03", title: "A Further Day Among the Atlas Mountain Communities", location: "High Atlas – selected village route", distance: "To be confirmed", riding: "Group MTB ride – route to be agreed", image: images.valley, text: "Continue your group journey with a route selected to reveal another perspective on the Atlas countryside. Ride suitable tracks and paths in the agreed area, with the guide adapting the pace to the group's needs and the conditions encountered. The exact villages, route profile and riding time will be confirmed during planning. Enjoy a relaxed finish and the overnight arrangements included in your programme.", details: ["Meet the guide and review the day's route", "Prepare bicycles and personal riding equipment", "Set out on the selected village and valley route", "Enjoy mountain and countryside scenery", "Take breaks at suitable points along the ride", "Finish at the agreed location", "Continue with the confirmed accommodation arrangements"] },
  { day: "04", title: "Complete the Four-Day Berber Villages Group Journey", location: "High Atlas – return arrangements to be confirmed", distance: "To be confirmed", riding: "Group MTB ride – selected final-day route", image: images.mountains, text: "Enjoy the final day of the four-day programme with a ride chosen around the group's interests and experience. After breakfast and a route briefing, set out through selected rural tracks and mountain scenery. The distance, climbing and riding time will be agreed in advance and adjusted to local conditions. Complete the ride at the confirmed finishing point before following the return or onward transfer arrangements in your proposal. Groups extending to five or six days continue with the additional programme below.", details: ["Review the final route of the four-day programme", "Prepare bicycles and equipment", "Ride selected tracks through the Atlas countryside", "Enjoy time for scenic stops and group photographs", "Finish the four-day core programme", "Follow the confirmed return or onward transfer arrangements"] },
  { day: "05", title: "Optional Extension – Discover More of the Atlas Countryside", location: "High Atlas – area to be confirmed", distance: "To be confirmed", riding: "Optional group MTB ride", image: images.road, text: "For groups choosing the five-day option, add another day of guided cycling in an area agreed during trip planning. The route may focus on further village surroundings, valley scenery or suitable rural tracks, depending on availability and conditions. The day's distance, terrain and riding duration will be confirmed with your group before departure.", details: ["Continue with the five-day extension", "Review the additional route with your guide", "Ride selected countryside tracks and village surroundings", "Allow time for breaks and photographs", "Finish at the agreed point and follow the overnight plan"] },
  { day: "06", title: "Optional Extension – A Final Ride in the High Atlas", location: "High Atlas – return to Marrakech as agreed", distance: "To be confirmed", riding: "Optional final group MTB ride", image: images.cycling, text: "Choose the six-day option for one more day of riding and time in the Atlas region. Your guide will lead a final route selected around the group's experience, interests and local conditions. After the ride, complete the journey at the agreed finishing point and follow the transfer arrangements confirmed in your itinerary.", details: ["Begin the final day of the six-day extension", "Confirm the route and conditions with your guide", "Enjoy a final selected ride in the Atlas countryside", "Take time for a last group stop and photographs", "Complete the journey and follow confirmed transfer arrangements"] },
];

const inclusions = [
  "Four-to-six-day group cycling programme as confirmed in your proposal",
  "Route planning based on the group's riding experience and agreed dates",
  "Local cycling guide when specified in your proposal",
  "Accommodation only when listed in your confirmed itinerary",
  "Bicycle rental if specifically included",
  "Helmets and protective equipment only when confirmed",
  "Transfers from Marrakech if specified in your proposal",
  "Meals and refreshments only when listed in your proposal",
  "Support arrangements only when specified in your booking details",
];

const exclusions = [
  "International flights", "Travel insurance and emergency assistance cover", "Bicycles unless included in your proposal", "Personal cycling clothing and equipment", "Helmets and protective equipment unless confirmed", "Transfers unless specifically included", "Accommodation unless listed in your proposal", "Meals and drinks not specified in your itinerary", "Personal expenses and tips", "Additional activities not listed in your proposal", "Services not specifically listed in your proposal",
];

const preparation = [
  { title: "Share the Group's Riding Experience", text: "Before booking, tell us the number of riders, their mountain-bike experience and the type of terrain they are comfortable riding. This helps us discuss suitable routes and a realistic pace for the group." },
  { title: "Choose Suitable Mountain Bikes", text: "Bicycles should be correctly sized and in good mechanical condition, with reliable brakes and tyres suitable for the selected routes. Discuss rental availability and sizes before confirming your trip." },
  { title: "Bring Essential Riding Equipment", text: "Bring a correctly fitting helmet, comfortable cycling clothing, gloves, suitable footwear, water bottles and personal sun protection. Confirm any additional protective equipment before departure." },
  { title: "Pack for a Multi-Day Mountain Journey", text: "Bring a practical overnight bag, personal essentials and clothing for changing temperatures. Conditions can vary between valleys and surrounding foothills, so an extra layer is useful." },
];

const faqs = [
  { q: "How long is the Berber Villages Group Tour?", a: "The journey is offered as a four-to-six-day group cycling programme. The four-day itinerary is the core option, with optional extensions to five or six days. Exact daily routes and arrangements will be confirmed in your proposal." },
  { q: "Which villages and valleys will we visit?", a: "The tour focuses on traditional Berber villages and High Atlas valley landscapes. The exact villages and route locations will depend on the selected itinerary, local conditions and arrangements confirmed for your group." },
  { q: "Is this a group tour or a private tour?", a: "This page describes a group journey. Group size, departure dates and whether the departure is shared or organised for a private group should be confirmed when you enquire." },
  { q: "What kind of terrain will we ride?", a: "Depending on the selected route, riding may include countryside tracks, rural paths and suitable mountain-bike trails. Trail surfaces, gradients and technical difficulty will be discussed before the trip." },
  { q: "How difficult is the tour?", a: "A fixed difficulty level has not been specified. It will depend on the selected routes, gradients, surfaces and daily distances. Share the group's experience so that suitable options can be discussed." },
  { q: "How far will we cycle each day?", a: "Daily distances have not been fixed on this page. They will depend on the selected routes, the group's ability and the agreed pace. Your proposed distances and riding times will be discussed before booking." },
  { q: "Can we choose four, five or six days?", a: "Yes. The four-day programme is the core option. You can discuss extending the journey to five or six days, with additional riding days planned around the group's interests and the routes available for your dates." },
  { q: "Where does the tour start?", a: "Marrakech is the proposed starting point, but the exact meeting location and transfer arrangements must be confirmed in your itinerary." },
  { q: "Is accommodation included?", a: "Accommodation depends on the selected programme and final proposal. Check your personalised itinerary for the overnight locations, accommodation type and services included." },
  { q: "Are mountain bikes available to rent?", a: "Bicycle rental availability and sizes need to be confirmed before booking. Please provide the height or approximate bicycle size required for each rider so suitable equipment can be discussed." },
  { q: "Are helmets included?", a: "Helmet availability and inclusion depend on the equipment arrangements confirmed in your proposal. Every rider should have a correctly fitting helmet suitable for mountain biking." },
  { q: "Are transfers from Marrakech included?", a: "Transfers depend on your selected programme and final proposal. Mention your accommodation location and transport needs when enquiring so the available arrangements can be discussed." },
  { q: "Are meals included during the tour?", a: "Meals and refreshments depend on the arrangements confirmed in your proposal. Check your personalised itinerary for the meals included and any additional refreshment arrangements." },
  { q: "What is the best season for cycling in the High Atlas?", a: "Spring and autumn can offer pleasant conditions for cycling in the region. Weather and temperatures vary throughout the year, so routes and departure times should be checked for your dates." },
  { q: "Can our cycling club or friends book as a group?", a: "You can enquire as a cycling club, group of friends or organised party. Share your preferred dates, group size and riding experience so that the format and route options can be discussed." },
  { q: "What should we bring?", a: "Bring a correctly fitting helmet, comfortable cycling clothing, gloves, suitable footwear, water and sun protection. For a multi-day trip, also bring personal overnight essentials and an extra layer for cooler conditions." },
];

const relatedTours = [
  { category: "GROUP MOUNTAIN BIKING", title: "High Atlas Group MTB Adventure", text: "Ride selected Atlas trails and mountain landscapes on a guided group mountain-bike journey.", image: "/images/group-adventure-cycling-morocco.jpg", href: "/cycling-trips/trip/high-atlas-group-mtb-adventure-5-day" },
  { category: "ATLAS CYCLING", title: "Atlas Cycling Club Tour", text: "Discover Morocco's mountain scenery and rural tracks on a multi-day cycling experience.", image: "/images/group-cycling-atlas-mountains.jpg", href: "/cycling-trips/trip/atlas-cycling-club-tour-4-day" },
  { category: "MOUNTAIN BIKING", title: "Atlas Mountains Mountain Bike Tour", text: "Explore the mountain landscapes of Morocco on a guided MTB adventure through selected Atlas trails, valleys and traditional villages.", image: "/images/singletrack-mtb-atlas-mountains.jpg", href: "/cycling-trips/mtb" },
];

export default function BerberVillagesGroupTour4To6DaysPage() {
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
          <img src={images.hero} alt="Scenic Berber villages and High Atlas valleys in the High Atlas Mountains of Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · HIGH ATLAS · BERBER VILLAGES · GROUP MTB · 4 TO 6 DAYS</span>
          <h1>Berber Villages Group Tour</h1>
          <p className="at-hero-description">
            Escape to the Atlas Mountains
            for four to six days of cycling
            in beautiful Berber villages and High Atlas valleys.
            Discover rural tracks, traditional
            villages and mountain scenery
            on a guided experience planned
            around your group's experience levels,
            confidence and riding ability.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Group Cycling Tour <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>04–06 DAYS</strong><span>Group cycling journey</span></div>
            <div><strong>HIGH ATLAS</strong><span>Atlas Valley</span></div>
            <div><strong>GROUP</strong><span>Ride together</span></div>
            <div><strong>MTB</strong><span>Guided riding</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>4–6 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Berber villages and High Atlas valleys</strong></div>
          <div className="at-fact"><span>Experience</span><strong>MTB Escape</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Guided Mountain Biking</strong></div>
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
            <img src={images.overview} alt="Mountain landscapes and countryside in Berber villages and High Atlas valleys" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A FOUR-TO-SIX-DAY GROUP MTB ESCAPE</span>
            <h2 className="at-heading">Discover Berber Villages and High Atlas Valleys by Bike</h2>
            <p className="at-copy">
              The Berber Villages Group Tour is a four-to-six-day
              mountain-bike journey for cycling groups
              looking to explore the High Atlas
              countryside together.
            </p>
            <p className="at-copy">
              Discover selected tracks,
              rural landscapes and
              traditional villages while
              enjoying the scenery of
              Berber villages, High Atlas valleys and their
              surrounding foothills.
            </p>
            <p className="at-copy">
              All riding days' routes, distances,
              riding durations, accommodation,
              meeting point and transfer
              arrangements will be discussed
              and confirmed after we
              understand your group's
              experience and needs.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the four-to-six-day journey →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR FOUR-TO-SIX-DAY GROUP ESCAPE</span>
            <h2 className="at-heading">Four to Six Days of Cycling, Valley Landscapes and Time Together</h2>
            <p className="at-copy">
              Leave the city behind and
              enjoy a rider-focused
              mountain-bike escape in
              the beautiful surroundings
              of Berber villages and High Atlas valleys.
            </p>
            <p className="at-copy">
              Explore selected routes
              over four to six days, with time
              for scenic stops, rural
              discoveries and group
              breaks. The programme
              is planned around the
              experience and ability
              of everyone joining.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Berber Villages Group Tour</h3>
            <p>A four-to-six-day group mountain-bike journey through selected Berber village and High Atlas valley routes.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>4–6 days</strong></li>
              <li><span>Destination</span><strong>Berber villages and High Atlas valleys</strong></li>
              <li><span>Tour format</span><strong>Group cycling journey</strong></li>
              <li><span>Route style</span><strong>Selected valley trails</strong></li>
              <li><span>Travel style</span><strong>Group-focused experience</strong></li>
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
              <h2 className="at-heading">Highlights of Your Berber Villages Group Tour</h2>
            </div>
            <p>
              Enjoy four to six days of group
              cycling through Atlas scenery
              and rural landscapes
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
            <img src={images.road} alt="Rural cycling track in the Atlas foothills near Berber villages" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE &amp; TERRAIN</span>
            <h2 className="at-heading">Explore the Valley and Surrounding Atlas Foothills</h2>
            <p className="at-copy">
              The group journey focuses on
              routes selected according
              to the experience and ability
              of your group. Depending
              on the agreed programme,
              the terrain may include
              countryside tracks, rural
              paths and suitable
              mountain-bike trails.
            </p>
            <p className="at-copy">
              Trail surfaces, gradients
              and distances will depend
              on the selected routes and
              local conditions. The aim
              is to create a rewarding multi-day
              group cycling journey at a
              comfortable pace for
              everyone in your group.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Four-to-six-day group mountain-bike journey</li>
              <li><span>02</span>Routes selected around group experience and riding ability</li>
              <li><span>03</span>Traditional Berber villages and Atlas foothill scenery</li>
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
              of this four-to-six-day group
              mountain-bike experience
              in Berber villages and High Atlas valleys.
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
          <h2 className="at-heading">Discover the Rural Character of Berber Villages</h2>
          <p className="at-copy">
            Your cycling escape is about
            more than mountain biking.
            Across four to six days, discover
            the landscapes and rural
            atmosphere of Berber villages and High Atlas valleys.
            Enjoy time outdoors, explore
            selected village surroundings
            and appreciate the scenery
            of the Atlas foothills.
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
              <span className="at-eyebrow">GROUP MTB MOMENTS</span>
              <h2 className="at-heading">Explore the Scenery of Berber villages and High Atlas valleys</h2>
            </div>
            <p>
              Discover Atlas foothills,
              countryside tracks, rural
              villages and memorable
              landscapes during your
              four-to-six-day cycling escape.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="High Atlas mountain scenery in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.road} alt="Rural cycling track in the Atlas foothills" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional rural village in the Atlas region" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Valley landscape in the High Atlas Mountains" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Group mountain-bike ride in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">FOUR TO SIX DAYS IN THE HIGH ATLAS</span>
              <h2 className="at-heading">Berber Villages Group Tour Itinerary</h2>
            </div>
            <p>
              Four to six days of group mountain
              biking through selected
              valley landscapes. Daily
              routes, distances and riding
              durations are confirmed
              during planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines a four-day core journey with optional extensions to five or six days. The exact
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
              <h2 className="at-heading">What Is Included in Your Group Cycling Tour?</h2>
            </div>
            <p>
              Final inclusions are confirmed
              in your booking proposal.
              Check your personalised itinerary
              for guiding, bicycles, equipment,
              accommodation, transport
              and meals included in your
              four-to-six-day experience.
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
              <h2 className="at-heading">Preparing for Your Berber Villages Group Tour</h2>
            </div>
            <p>
              Prepare your bicycles,
              equipment and overnight
              essentials for four to six days
              of mountain biking in
              the Atlas countryside.
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
            <img src={images.cycling} alt="Mountain-bike group enjoying a guided ride in Morocco" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">A ROUTE FOR YOUR GROUP</span>
            <h2 className="at-heading">Difficulty and Cycling Experience</h2>
            <p className="at-copy">
              The journey is planned as
              a group mountain-bike
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
              throughout the journey.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Riders
              should be confident bicycle riders
              before joining a mountain-bike
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
              about the Berber villages and High Atlas valleys
              MTB Escape. Contact
              our team if you need more
              details before planning
              your four-to-six-day cycling trip.
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
          <img src={images.final} alt="Mountain biking adventure in Morocco's Atlas Mountains" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR HIGH ATLAS GROUP ESCAPE STARTS HERE</span>
          <h2>Ready to Plan Your Four-to-Six-Day MTB Escape?</h2>
          <p>
            Tell us your preferred dates,
            group size, riders' experience
            and cycling experience.
            We can discuss suitable routes,
            daily riding durations,
            equipment, accommodation
            and transfers for your
            four-to-six-day Berber villages and High Atlas valleys
            cycling adventure.
          </p>
          <a className="at-button" href="/contact">Plan Your Group Cycling Tour <span>→</span></a>
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
              Morocco by bike, from group
              cycling days around Marrakech
              to mountain-bike weekends
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
          <span>© {new Date().getFullYear()} Mountain Bike Morocco. All rights reserved.</span>
          <span> Ride the Atlas. Feel the Freedom.</span>
        </div>
      </footer>
    </main>
  );
}