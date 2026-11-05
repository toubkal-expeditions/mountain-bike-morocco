import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas to Sahara Road Cycling Expedition – 8 Days | Mountain Bike Morocco",
  description:
    "Ride from the Atlas Mountains towards the Sahara on an eight-day road cycling expedition in Morocco. Discover mountain roads, remote valleys, changing landscapes and the gateway to the desert.",
  alternates: {
    canonical:
      "/cycling-trips/trip/atlas-to-sahara-road-cycling-expedition-8-day",
  },
};

const images = {
  hero: "/images/road-cycling-holiday-tour-morocco.jpg",
  overview: "/images/atlas-mountains-cycling-expedition.jpg",
  mountains: "/images/atlas-mountains-road-cycling-tour.jpg",
  pass: "/images/road-cycling-tour-morocco.jpg",
  village: "/images/berber-villages-cycling-expeditions.jpg",
  valley: "/images/atlas-valley-cycling-morocco.jpg",
  cycling: "/images/7-days-cycling-road-from-marrakech.jpg",
  final: "/images/road-cycling-morocco.jpg",
};

const facts = [
  ["Duration", "8 days"],
  ["Destination", "Atlas Mountains to Sahara region"],
  ["Region", "Morocco"],
  ["Starting point", "To be confirmed"],
  ["Cycling style", "Road cycling"],
  ["Difficulty", "Moderate to challenging – route dependent"],
  ["Experience", "Previous road cycling experience recommended"],
  ["Tour format", "Private multi-day cycling expedition"],
  ["Best season", "Spring and autumn, subject to conditions"],
];

const highlights = [
  {
    number: "01",
    title: "From the Atlas to the Desert",
    text: "Experience a memorable cycling journey connecting the mountain landscapes of the Atlas with the changing scenery of southern Morocco and the Sahara region.",
  },
  {
    number: "02",
    title: "Spectacular Mountain Roads",
    text: "Discover Morocco's mountain landscapes by road bike, with winding roads, challenging climbs, panoramic views and changing terrain.",
  },
  {
    number: "03",
    title: "Valleys and Traditional Villages",
    text: "Explore rural landscapes and traditional Amazigh communities while travelling through the different regions of southern Morocco.",
  },
  {
    number: "04",
    title: "Eight Days of Cycling Adventure",
    text: "Enjoy a multi-day road cycling expedition combining mountain riding, changing landscapes and the atmosphere of Morocco's southern regions.",
  },
];

const beyondTrail = [
  {
    title: "The High Atlas Mountains",
    text: "Discover the impressive mountain landscapes of the Atlas, with winding roads, high valleys and spectacular views.",
  },
  {
    title: "Southern Morocco",
    text: "Experience the changing scenery as the journey moves from the Atlas towards the drier landscapes of southern Morocco.",
  },
  {
    title: "Traditional Amazigh Communities",
    text: "Discover rural settlements, traditional architecture and the cultural character of communities along the selected route.",
  },
  {
    title: "The Sahara Region",
    text: "Reach the landscapes of Morocco's Sahara region and discover the desert environment beyond the mountain roads.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Arrival in Marrakech and Expedition Preparation",
    location: "Marrakech – agreed starting point",
    distance: "To be confirmed",
    riding: "Arrival and cycling preparation",
    image: images.overview,
    text: "Begin your Atlas to Sahara road cycling expedition in Marrakech or at the agreed meeting point. Meet the team, review the eight-day programme and prepare your bicycle and equipment. The day's arrangements depend on your arrival time and the final itinerary. The starting location, accommodation and any transfer arrangements will be confirmed in your trip proposal.",
    details: [
      "Meet the team at the agreed starting point",
      "Review the eight-day cycling programme",
      "Check your bicycle and equipment",
      "Discuss the planned route and daily arrangements",
      "Confirm the following day's departure",
    ],
  },
  {
    day: "02",
    title: "Ride Towards the Atlas Mountains",
    location: "Marrakech – Atlas Mountains",
    distance: "To be confirmed",
    riding: "Road cycling – mountain approach",
    image: images.mountains,
    text: "Begin the cycling journey towards the Atlas Mountains. The selected road route introduces the changing landscapes beyond Marrakech, with mountain scenery and opportunities to experience the rural character of the region. The exact route, climbing, distance and overnight arrangements will be determined by the confirmed expedition plan.",
    details: [
      "Review the day's route and road conditions",
      "Prepare for the mountain cycling stage",
      "Begin the selected road cycling route",
      "Discover the Atlas mountain scenery",
      "Take planned breaks along the route",
      "Finish at the agreed overnight location",
    ],
  },
  {
    day: "03",
    title: "Road Cycling Through the Atlas Landscapes",
    location: "Atlas Mountains – selected route",
    distance: "To be confirmed",
    riding: "Road cycling – mountain roads and climbs",
    image: images.pass,
    text: "Continue your expedition through the Atlas region. Enjoy a day of road cycling through mountain landscapes, with the route selected according to your experience, preferred pace and local conditions. The final itinerary will specify the roads, daily distance, elevation gain and overnight arrangements.",
    details: [
      "Prepare for the day's mountain ride",
      "Follow the selected road cycling route",
      "Experience the changing mountain scenery",
      "Explore selected rural areas and valleys",
      "Take breaks at suitable viewpoints",
      "Arrive at the agreed finishing location",
    ],
  },
  {
    day: "04",
    title: "From Mountain Valleys Towards Southern Morocco",
    location: "Atlas region – southern Morocco",
    distance: "To be confirmed",
    riding: "Road cycling – changing landscapes",
    image: images.valley,
    text: "Continue southwards through the selected roads connecting the Atlas region with southern Morocco. As the expedition progresses, the landscape changes from mountain environments towards drier valleys and open terrain. The exact route and overnight stop will be confirmed in the final programme.",
    details: [
      "Review the route and weather conditions",
      "Begin the selected southbound cycling stage",
      "Discover changing valley landscapes",
      "Ride through selected rural areas",
      "Take hydration and rest breaks",
      "Finish at the agreed overnight location",
    ],
  },
  {
    day: "05",
    title: "Discover the Roads and Valleys of Southern Morocco",
    location: "Southern Morocco – selected route",
    distance: "To be confirmed",
    riding: "Road cycling – valleys and open landscapes",
    image: images.cycling,
    text: "Experience another stage of your journey through southern Morocco. The selected roads offer an opportunity to discover the region's changing scenery, rural settlements and open landscapes. Daily distance, elevation and the precise overnight location will depend on the route confirmed for your group.",
    details: [
      "Prepare for another day on the road",
      "Ride the selected southern Morocco route",
      "Discover rural landscapes and villages",
      "Enjoy planned stops along the way",
      "Follow the agreed support arrangements",
      "Reach the confirmed overnight location",
    ],
  },
  {
    day: "06",
    title: "Continue Towards the Sahara Region",
    location: "Southern Morocco – Sahara approach",
    distance: "To be confirmed",
    riding: "Road cycling – desert approach",
    image: images.pass,
    text: "Continue towards the Sahara region as the expedition moves through the landscapes of southern Morocco. This stage focuses on road cycling through the selected paved routes and the changing environment around the desert approach. Riding on sand dunes is not part of this road cycling itinerary.",
    details: [
      "Review the day's route and conditions",
      "Prepare your bicycle and hydration equipment",
      "Begin the selected road cycling stage",
      "Discover the changing desert-edge landscapes",
      "Take breaks at suitable locations",
      "Finish at the agreed overnight location",
    ],
  },
  {
    day: "07",
    title: "Explore the Sahara Region by Road Bike",
    location: "Sahara region – selected route",
    distance: "To be confirmed",
    riding: "Road cycling – desert-region roads",
    image: images.final,
    text: "Experience the landscapes of the Sahara region during the final full cycling stage of your expedition. The selected paved roads provide the setting for a memorable ride through the desert environment. The route, distance, elevation and any additional activities or transfers will be specified in your final programme.",
    details: [
      "Prepare for the final full cycling stage",
      "Ride the selected paved desert-region roads",
      "Experience the landscapes of the Sahara region",
      "Take planned breaks and refreshments",
      "Complete the agreed cycling route",
      "Review the final day's arrangements",
    ],
  },
  {
    day: "08",
    title: "Expedition Finish and Departure",
    location: "Sahara region – agreed finishing point",
    distance: "To be confirmed",
    riding: "Departure and transfer arrangements",
    image: images.valley,
    text: "Complete your eight-day Atlas to Sahara road cycling expedition at the agreed finishing point. Depending on your travel arrangements, the final day may include a transfer towards Marrakech or another agreed destination. Any return transport, additional activities and departure arrangements will be confirmed in your proposal.",
    details: [
      "Enjoy breakfast if included in your arrangements",
      "Pack your bicycle and personal equipment",
      "Complete the agreed final arrangements",
      "Arrange the return transfer if included",
      "Finish your Atlas to Sahara expedition",
    ],
  },
];

const inclusions = [
  "Eight-day route planning and cycling arrangements",
  "Local cycling support as agreed in your itinerary",
  "Accommodation only if specifically included in your proposal",
  "Road bicycle rental if specifically included",
  "Transfers specified in your final proposal",
  "Support vehicle if explicitly included in your proposal",
  "Meals and refreshments only when listed in your proposal",
  "Equipment or luggage assistance if agreed",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Road bicycle unless included in your proposal",
  "Personal cycling equipment and clothing",
  "Accommodation unless specifically included",
  "Meals and drinks not specified in your itinerary",
  "Personal expenses and tips",
  "Additional accommodation or nights",
  "Services not specifically listed in your proposal",
];

const preparation = [
  {
    title: "Choose the Right Road Bike",
    text: "Use a road bicycle in good mechanical condition, with suitable gearing, reliable brakes and tyres appropriate for the confirmed paved routes.",
  },
  {
    title: "Prepare for Eight Days of Riding",
    text: "An eight-day expedition requires suitable fitness and the ability to manage consecutive days on the bicycle. Previous road cycling experience is recommended.",
  },
  {
    title: "Bring Your Cycling Equipment",
    text: "Bring a suitable helmet, cycling clothing, gloves, glasses, footwear, hydration equipment, sun protection and personal repair supplies.",
  },
  {
    title: "Be Ready for Changing Conditions",
    text: "Temperatures and weather can change between mountain and desert regions. Carry suitable layers and protection against sun, wind and changing temperatures.",
  },
];

const faqs = [
  {
    q: "How long is the Atlas to Sahara Road Cycling Expedition?",
    a: "The expedition is an eight-day road cycling experience connecting the Atlas Mountains with the Sahara region of Morocco.",
  },
  {
    q: "Where does the expedition start?",
    a: "The starting point and meeting arrangements will be confirmed in your trip proposal. Marrakech can be discussed as a starting location.",
  },
  {
    q: "Where does the expedition finish?",
    a: "The finishing point will depend on the selected route and final programme. Return transfers and onward travel arrangements must be confirmed before booking.",
  },
  {
    q: "How many kilometres will we cycle each day?",
    a: "Daily distances have not been fixed on this page. They depend on the selected roads, your cycling experience and the final route. Exact distances will be confirmed during trip planning.",
  },
  {
    q: "How much elevation gain should I expect?",
    a: "Elevation gain depends on the selected mountain roads and daily routes. Exact figures will be provided once the itinerary has been planned.",
  },
  {
    q: "Is this expedition suitable for beginner cyclists?",
    a: "Previous road cycling experience is recommended. The expedition involves multiple consecutive riding days, and its difficulty depends on the route, daily distances and climbing.",
  },
  {
    q: "Will we cycle on the Sahara sand dunes?",
    a: "No. This is a road cycling expedition. Cycling takes place on selected roads in the Sahara region, not on soft sand dunes.",
  },
  {
    q: "Do I need to bring my own road bicycle?",
    a: "You can discuss bringing your own road bicycle or arranging a rental. Bicycle availability, specifications and rental costs must be confirmed before booking.",
  },
  {
    q: "Is a support vehicle included?",
    a: "Support vehicle arrangements depend on the selected programme. A support vehicle is only included when it is specifically confirmed in your proposal.",
  },
  {
    q: "Is accommodation included?",
    a: "Accommodation arrangements depend on your selected programme. The included nights, accommodation category and meal arrangements will be specified in your final proposal.",
  },
  {
    q: "Are transfers from Marrakech included?",
    a: "Transfers depend on your starting point and final itinerary. Any included pick-up, drop-off or return transport will be confirmed before booking.",
  },
  {
    q: "What is the best season for this expedition?",
    a: "Spring and autumn can offer suitable conditions for cycling in Morocco. Weather varies between the Atlas and desert regions, so the route should be checked before departure.",
  },
  {
    q: "Can the expedition be organised privately?",
    a: "Yes. The expedition can be discussed as a private cycling experience, with route selection and arrangements planned around your group and cycling experience.",
  },
  {
    q: "What should I bring?",
    a: "Bring a helmet, road cycling clothing, gloves, suitable shoes, hydration equipment, sun protection, a windproof layer and personal bicycle repair supplies.",
  },
];

const relatedTours = [
  {
    category: "ROAD CYCLING",
    title: "Imlil and Toubkal Road Cycling Escape",
    text: "Discover the mountain roads, valleys and traditional villages of Morocco's High Atlas on a three-day cycling escape.",
    image: "/images/imlil-cycling-adventure-tour.jpeg",
    href: "/cycling-trips/trip/imlil-and-toubkal-road-cycling-escape-3-day",
  },
  {
    category: "ROAD CYCLING",
    title: "Tizi n'Test Mountain Pass Ride",
    text: "Experience a memorable High Atlas road cycling adventure through mountain landscapes and winding roads.",
    image: "/images/atlas-mountains-road-cycling-tour.jpg",
    href: "/cycling-trips/trip/tizi-n-test-mountain-pass-ride-1-day",
  },
  {
    category: "CYCLING FROM MARRAKECH",
    title: "Cycling Trips from Marrakech",
    text: "Explore cycling experiences through the Atlas Mountains and countryside around Marrakech.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/cycling-trips",
  },
];

export default function AtlasToSaharaRoadCyclingExpeditionPage() {
  return (
    <main className="atlas-tour">
      <style>{`
        .atlas-tour {
          --paper:#f4f2eb;--paper-deep:#eae6db;--ink:#20241f;
          --muted:#62665d;--gold:#c6a05b;--gold-light:#dfc17f;
          --green:#21372b;--line:#dedbd1;
          background:var(--paper);color:var(--ink);
          font-family:Arial,Helvetica,sans-serif;font-size:16px;
          line-height:1.8;overflow:hidden
        }
        .atlas-tour *{box-sizing:border-box}
        .atlas-tour img{display:block;width:100%;height:100%;object-fit:cover}
        .atlas-tour a{color:inherit}
        .atlas-tour .at-container{width:min(1240px,calc(100% - 64px));margin-inline:auto}
        .atlas-tour .at-eyebrow{display:block;color:#946c30;font-size:11px;font-weight:700;letter-spacing:2px;line-height:1.6;text-transform:uppercase}
        .atlas-tour .at-heading{margin:12px 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:clamp(32px,3.5vw,48px);font-weight:400;letter-spacing:-1.25px;line-height:1.14}
        .atlas-tour .at-section{padding:86px 0}
        .atlas-tour .at-section-head{display:grid;grid-template-columns:1.15fr .85fr;align-items:end;gap:44px;margin-bottom:36px}
        .atlas-tour .at-section-head .at-heading{margin-bottom:0}
        .atlas-tour .at-section-head>p{max-width:480px;margin:0 0 4px auto;color:var(--muted);font-size:15px;line-height:1.85}
        .atlas-tour .at-copy{color:#5f6359;font-size:16px;line-height:1.95}
        .atlas-tour .at-button{display:inline-flex;min-height:49px;align-items:center;justify-content:center;gap:15px;padding:13px 22px;border:1px solid var(--gold);background:var(--gold);color:#1f211b;font-size:12px;font-weight:700;letter-spacing:1px;text-decoration:none;text-transform:uppercase;transition:.2s}
        .atlas-tour .at-button:hover{background:#a98343;border-color:#a98343;color:#fff}
        .atlas-tour .at-text-link{display:inline-block;margin-top:20px;border-bottom:1px solid var(--gold);padding-bottom:5px;font-size:12px;font-weight:700;letter-spacing:1px;text-decoration:none;text-transform:uppercase}
        .atlas-tour .at-hero{position:relative;display:flex;min-height:680px;align-items:flex-end;background:#202a22;color:#fff;isolation:isolate}
        .atlas-tour .at-hero-image,.atlas-tour .at-hero-shade{position:absolute;inset:0}
        .atlas-tour .at-hero-image{z-index:-2}
        .atlas-tour .at-hero-image img{object-position:center 48%}
        .atlas-tour .at-hero-shade{z-index:-1;background:linear-gradient(90deg,rgba(9,14,10,.88),rgba(9,14,10,.64) 43%,rgba(9,14,10,.22)),linear-gradient(0deg,rgba(9,14,10,.78),rgba(9,14,10,.08) 72%)}
        .atlas-tour .at-hero-content{position:relative;z-index:1;width:min(1240px,calc(100% - 64px));margin:0 auto;padding:110px 0 65px;color:#fff!important}
        .atlas-tour .at-hero .at-eyebrow{color:#f0ce88!important;font-size:12px}
        .atlas-tour .at-hero h1{max-width:900px;margin:19px 0 22px;color:#fff!important;font-family:Georgia,'Times New Roman',serif;font-size:clamp(48px,6.5vw,84px);font-weight:400;letter-spacing:-2.7px;line-height:1.02;text-shadow:0 2px 20px #0005}
        .atlas-tour .at-hero-description{max-width:570px;margin:0;color:#fff!important;font-size:17px;line-height:1.85;text-shadow:0 1px 8px #0006}
        .atlas-tour .at-hero-actions{display:flex;flex-wrap:wrap;align-items:center;gap:22px;margin-top:30px}
        .atlas-tour .at-hero .at-button{background:#d1ac67;border-color:#d1ac67;color:#191d17!important}
        .atlas-tour .at-hero .at-button:hover{background:#f0d59b;border-color:#f0d59b}
        .atlas-tour .at-hero-back{color:#fff!important;font-size:13px;font-weight:600;text-decoration:none}
        .atlas-tour .at-hero-back:hover{color:#f0ce88!important}
        .atlas-tour .at-hero-bottom{display:flex;flex-wrap:wrap;gap:34px;margin-top:53px;padding-top:22px;border-top:1px solid #ffffff5c}
        .atlas-tour .at-hero-bottom div{min-width:105px}
        .atlas-tour .at-hero-bottom strong{display:block;color:#fff!important;font-size:13px;letter-spacing:1.3px}
        .atlas-tour .at-hero-bottom span{color:#eeeae1!important;font-size:11px;letter-spacing:1px;text-transform:uppercase}
        .atlas-tour .at-fact-strip{position:relative;z-index:2;background:#fffefa;border-bottom:1px solid var(--line)}
        .atlas-tour .at-fact-strip-inner{display:grid;grid-template-columns:repeat(4,1fr)}
        .atlas-tour .at-fact{min-height:104px;padding:23px 25px;border-right:1px solid var(--line)}
        .atlas-tour .at-fact:last-child{border-right:0}
        .atlas-tour .at-fact span{display:block;margin-bottom:5px;color:#8b7652;font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase}
        .atlas-tour .at-fact strong{display:block;color:var(--ink);font-family:Georgia,'Times New Roman',serif;font-size:17px;font-weight:400;line-height:1.4}
        .atlas-tour .at-subnav{background:var(--green);color:#fff}
        .atlas-tour .at-subnav-inner{display:flex;flex-wrap:wrap;justify-content:center;gap:9px 30px;padding:16px 0}
        .atlas-tour .at-subnav a{color:#eee9dc;font-size:10px;font-weight:700;letter-spacing:1.3px;text-decoration:none;text-transform:uppercase}
        .atlas-tour .at-subnav a:hover{color:var(--gold-light)}
        .atlas-tour .at-overview-grid{display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:75px}
        .atlas-tour .at-overview-image{position:relative;min-height:570px}
        .atlas-tour .at-overview-image img{position:absolute;inset:0}
        .atlas-tour .at-overview-image:after{position:absolute;right:-18px;bottom:-18px;z-index:-1;width:48%;height:48%;border:1px solid var(--gold);content:""}
        .atlas-tour .at-overview-content{padding:25px 0}
        .atlas-tour .at-overview-content .at-copy{margin:0 0 17px}
        .atlas-tour .at-booking-card{padding:32px;background:#fffefa;border:1px solid var(--line);box-shadow:0 15px 45px #20241f0f}
        .atlas-tour .at-booking-card h3{margin:8px 0 12px;font-family:Georgia,'Times New Roman',serif;font-size:27px;font-weight:400;line-height:1.25}
        .atlas-tour .at-booking-card p{color:var(--muted);font-size:14px;line-height:1.8}
        .atlas-tour .at-booking-list{margin:22px 0;padding:0;list-style:none}
        .atlas-tour .at-booking-list li{display:flex;justify-content:space-between;gap:15px;padding:11px 0;border-bottom:1px solid var(--line);font-size:13px}
        .atlas-tour .at-booking-list span{color:var(--muted)}
        .atlas-tour .at-booking-list strong{text-align:right}
        .atlas-tour .at-booking-card .at-button{width:100%}
        .atlas-tour .at-highlight-section{background:#eae6db}
        .atlas-tour .at-highlight-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#d8d2c5;border:1px solid #d8d2c5}
        .atlas-tour .at-highlight{min-height:245px;padding:31px 25px;background:var(--paper)}
        .atlas-tour .at-highlight-number{display:block;margin-bottom:28px;color:#b28a4c;font-family:Georgia,serif;font-size:25px}
        .atlas-tour .at-highlight h3{margin:0 0 12px;font-family:Georgia,serif;font-size:22px;font-weight:400;line-height:1.25}
        .atlas-tour .at-highlight p{margin:0;color:var(--muted);font-size:13px;line-height:1.8}
        .atlas-tour .at-terrain-grid{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:70px}
        .atlas-tour .at-terrain-image{height:490px;overflow:hidden}
        .atlas-tour .at-terrain-image img,.atlas-tour .at-gallery-item img,.atlas-tour .at-related-image img{transition:transform .6s}
        .atlas-tour .at-terrain-image:hover img,.atlas-tour .at-gallery-item:hover img,.atlas-tour .at-related-card:hover .at-related-image img{transform:scale(1.04)}
        .atlas-tour .at-terrain-points{margin:28px 0 0;padding:0;list-style:none}
        .atlas-tour .at-terrain-points li{display:grid;grid-template-columns:32px 1fr;gap:13px;padding:15px 0;border-top:1px solid var(--line);color:var(--muted);font-size:14px}
        .atlas-tour .at-terrain-points span{color:#a27b40;font-weight:700}
        .atlas-tour .at-facts-section,.atlas-tour .at-faq-section{background:#fffefa}
        .atlas-tour .at-facts-layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:75px}
        .atlas-tour .at-facts-table{border-top:1px solid var(--line)}
        .atlas-tour .at-facts-row{display:grid;grid-template-columns:.7fr 1.3fr;gap:25px;padding:16px 0;border-bottom:1px solid var(--line);font-size:14px}
        .atlas-tour .at-facts-row span{color:var(--muted)}
        .atlas-tour .at-facts-row strong{font-weight:600}
        .atlas-tour .at-culture{display:grid;grid-template-columns:1fr 1fr;min-height:520px;background:var(--green);color:#fff}
        .atlas-tour .at-culture-image{min-height:520px}
        .atlas-tour .at-culture-content{align-self:center;padding:70px clamp(35px,7vw,100px)}
        .atlas-tour .at-culture .at-eyebrow{color:var(--gold-light)}
        .atlas-tour .at-culture .at-heading{color:#fff}
        .atlas-tour .at-culture .at-copy{color:#e1e2d8}
        .atlas-tour .at-culture-grid{display:grid;grid-template-columns:1fr 1fr;gap:25px;margin-top:30px}
        .atlas-tour .at-culture-item{padding-top:16px;border-top:1px solid #ffffff40}
        .atlas-tour .at-culture-item h3{margin:0 0 7px;color:#f1d49a;font-family:Georgia,serif;font-size:19px;font-weight:400}
        .atlas-tour .at-culture-item p{margin:0;color:#d7dbd1;font-size:12px;line-height:1.8}
        .atlas-tour .at-gallery-grid{display:grid;grid-template-columns:1.25fr .75fr .75fr;grid-template-rows:245px 245px;gap:14px}
        .atlas-tour .at-gallery-item{overflow:hidden}
        .atlas-tour .at-gallery-item:first-child{grid-row:span 2}
        .atlas-tour .at-itinerary-section,.atlas-tour .at-prep-section{background:#eae6db}
        .atlas-tour .at-itinerary-intro{max-width:700px;margin:0 0 42px;color:var(--muted);font-size:15px;line-height:1.9}
        .atlas-tour .at-itinerary-list{display:grid;gap:22px}
        .atlas-tour .at-day{display:grid;grid-template-columns:1fr 1fr;min-height:370px;background:#fffefa;border:1px solid #e0dcd1}
        .atlas-tour .at-day:nth-child(even) .at-day-image{order:2}
        .atlas-tour .at-day-image{min-height:370px}
        .atlas-tour .at-day-content{align-self:center;padding:40px clamp(25px,5vw,65px)}
        .atlas-tour .at-day-number{color:#a27b40;font-family:Georgia,serif;font-size:38px;line-height:1}
        .atlas-tour .at-day-content h3{margin:12px 0;font-family:Georgia,serif;font-size:clamp(24px,2.6vw,32px);font-weight:400;line-height:1.2}
        .atlas-tour .at-day-location{margin-bottom:16px;color:#927344;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase}
        .atlas-tour .at-day-content>p{color:var(--muted);font-size:14px;line-height:1.85}
        .atlas-tour .at-day-meta{display:flex;flex-wrap:wrap;gap:8px 20px;margin:18px 0;padding:13px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);color:#62665d;font-size:11px}
        .atlas-tour .at-day-content ul{display:grid;gap:7px;margin:15px 0 0;padding-left:18px;color:#62665d;font-size:12px}
        .atlas-tour .at-inclusions-grid{display:grid;grid-template-columns:1fr 1fr;gap:30px}
        .atlas-tour .at-inclusion-card{padding:38px;background:#fffefa;border:1px solid var(--line)}
        .atlas-tour .at-inclusion-card h3{margin:0 0 22px;font-family:Georgia,serif;font-size:29px;font-weight:400}
        .atlas-tour .at-inclusion-card ul{display:grid;gap:13px;margin:0;padding:0;list-style:none}
        .atlas-tour .at-inclusion-card li{display:grid;grid-template-columns:22px 1fr;gap:10px;color:var(--muted);font-size:14px;line-height:1.7}
        .atlas-tour .at-inclusion-card li span{color:#a27b40;font-weight:700}
        .atlas-tour .at-prep-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
        .atlas-tour .at-prep-card{padding:28px 24px;background:var(--paper);border-top:2px solid var(--gold)}
        .atlas-tour .at-prep-card h3{margin:0 0 13px;font-family:Georgia,serif;font-size:21px;font-weight:400}
        .atlas-tour .at-prep-card p{margin:0;color:var(--muted);font-size:13px;line-height:1.85}
        .atlas-tour .at-difficulty-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:75px;align-items:center}
        .atlas-tour .at-difficulty-image{height:430px}
        .atlas-tour .at-difficulty-note{margin-top:25px;padding:22px 25px;background:#eae6db;border-left:3px solid var(--gold);color:var(--muted);font-size:13px;line-height:1.85}
        .atlas-tour .at-faq-layout{display:grid;grid-template-columns:.7fr 1.3fr;gap:75px}
        .atlas-tour .at-faq-list{border-top:1px solid var(--line)}
        .atlas-tour .at-faq-list details{padding:19px 0;border-bottom:1px solid var(--line)}
        .atlas-tour .at-faq-list summary{position:relative;padding-right:35px;color:var(--ink);cursor:pointer;font-family:Georgia,serif;font-size:19px;line-height:1.45;list-style:none}
        .atlas-tour .at-faq-list summary::-webkit-details-marker{display:none}
        .atlas-tour .at-faq-list summary:after{position:absolute;top:0;right:3px;color:#a27b40;content:"+";font-family:Arial,sans-serif;font-size:23px}
        .atlas-tour .at-faq-list details[open] summary:after{content:"−"}
        .atlas-tour .at-faq-list details p{max-width:690px;margin:13px 0 0;color:var(--muted);font-size:14px;line-height:1.85}
        .atlas-tour .at-final-cta{position:relative;display:flex;min-height:500px;align-items:center;background:#1e2a22;color:#fff;isolation:isolate}
        .atlas-tour .at-final-image,.atlas-tour .at-final-shade{position:absolute;inset:0}
        .atlas-tour .at-final-image{z-index:-2}
        .atlas-tour .at-final-shade{z-index:-1;background:linear-gradient(90deg,rgba(10,17,12,.88),rgba(10,17,12,.35))}
        .atlas-tour .at-final-content{width:min(1240px,calc(100% - 64px));margin:0 auto;padding:90px 0}
        .atlas-tour .at-final-content .at-eyebrow{color:#f0ce88}
        .atlas-tour .at-final-content h2{max-width:750px;margin:15px 0 20px;color:#fff;font-family:Georgia,serif;font-size:clamp(38px,5.5vw,68px);font-weight:400;letter-spacing:-1.8px;line-height:1.1}
        .atlas-tour .at-final-content p{max-width:580px;margin-bottom:28px;color:#f0eee6;font-size:16px;line-height:1.85}
        .atlas-tour .at-related-section{padding:86px 0}
        .atlas-tour .at-related-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:25px}
        .atlas-tour .at-related-card{background:#fffefa;border:1px solid var(--line)}
        .atlas-tour .at-related-image{height:255px;overflow:hidden}
        .atlas-tour .at-related-content{padding:25px}
        .atlas-tour .at-related-content .at-eyebrow{font-size:9px;letter-spacing:1.4px}
        .atlas-tour .at-related-content h3{margin:10px 0;font-family:Georgia,serif;font-size:24px;font-weight:400;line-height:1.25}
        .atlas-tour .at-related-content p{color:var(--muted);font-size:13px;line-height:1.8}
        .atlas-tour .at-related-content a{display:inline-block;margin-top:8px;padding-bottom:4px;border-bottom:1px solid var(--gold);font-size:11px;font-weight:700;letter-spacing:1px;text-decoration:none;text-transform:uppercase}
        .atlas-tour .at-footer{background:#171d18;color:#eeeae1}
        .atlas-tour .at-footer-main{display:grid;grid-template-columns:1.3fr .8fr .9fr 1fr;gap:45px;padding:65px 0 50px}
        .atlas-tour .at-footer-brand img{width:190px;height:auto;object-fit:contain;object-position:left center}
        .atlas-tour .at-footer-brand p{max-width:300px;margin-top:20px;color:#b9beb5;font-size:13px;line-height:1.9}
        .atlas-tour .at-footer h3{margin:0 0 19px;color:#e4c78c;font-size:11px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase}
        .atlas-tour .at-footer-links{display:grid;gap:11px}
        .atlas-tour .at-footer-links a{color:#c4c8c0;font-size:13px;text-decoration:none}
        .atlas-tour .at-footer-links a:hover{color:#e4c78c}
        .atlas-tour .at-footer-bottom{display:flex;justify-content:space-between;gap:20px;padding:20px 0;border-top:1px solid #ffffff26;color:#9fa69c;font-size:11px}
        @media(max-width:1000px){
          .atlas-tour .at-overview-grid,.atlas-tour .at-terrain-grid,.atlas-tour .at-facts-layout,.atlas-tour .at-difficulty-grid,.atlas-tour .at-faq-layout{gap:40px}
          .atlas-tour .at-highlight-grid{grid-template-columns:repeat(2,1fr)}
          .atlas-tour .at-prep-grid{grid-template-columns:repeat(2,1fr)}
          .atlas-tour .at-footer-main{grid-template-columns:1.2fr 1fr}
        }
        @media(max-width:700px){
          .atlas-tour .at-container{width:min(100% - 40px,1240px)}
          .atlas-tour .at-section{padding:65px 0}
          .atlas-tour .at-hero{min-height:650px}
          .atlas-tour .at-hero-content{width:calc(100% - 40px);padding:90px 0 42px}
          .atlas-tour .at-hero h1{font-size:clamp(43px,12vw,62px);letter-spacing:-1.8px}
          .atlas-tour .at-hero-description{font-size:15px}
          .atlas-tour .at-hero-bottom{gap:18px 25px;margin-top:38px}
          .atlas-tour .at-fact-strip-inner{grid-template-columns:repeat(2,1fr)}
          .atlas-tour .at-fact{min-height:90px;padding:17px 15px}
          .atlas-tour .at-fact:nth-child(2){border-right:0}
          .atlas-tour .at-fact:nth-child(-n+2){border-bottom:1px solid var(--line)}
          .atlas-tour .at-subnav-inner{justify-content:flex-start;gap:12px 20px}
          .atlas-tour .at-subnav a{font-size:9px}
          .atlas-tour .at-section-head{grid-template-columns:1fr;gap:14px}
          .atlas-tour .at-section-head>p{margin:0}
          .atlas-tour .at-overview-grid,.atlas-tour .at-terrain-grid,.atlas-tour .at-facts-layout,.atlas-tour .at-difficulty-grid,.atlas-tour .at-faq-layout{grid-template-columns:1fr;gap:35px}
          .atlas-tour .at-overview-image{min-height:390px;margin-right:12px}
          .atlas-tour .at-booking-card{padding:25px}
          .atlas-tour .at-highlight-grid{grid-template-columns:1fr 1fr}
          .atlas-tour .at-highlight{min-height:230px;padding:23px 17px}
          .atlas-tour .at-highlight h3{font-size:19px}
          .atlas-tour .at-highlight p{font-size:12px}
          .atlas-tour .at-terrain-image{height:350px}
          .atlas-tour .at-culture{grid-template-columns:1fr}
          .atlas-tour .at-culture-image{min-height:330px}
          .atlas-tour .at-culture-content{padding:55px 25px}
          .atlas-tour .at-culture-grid{gap:20px 15px}
          .atlas-tour .at-gallery-grid{grid-template-columns:1fr 1fr;grid-template-rows:250px 170px 170px}
          .atlas-tour .at-gallery-item:first-child{grid-column:span 2;grid-row:auto}
          .atlas-tour .at-day{grid-template-columns:1fr}
          .atlas-tour .at-day:nth-child(even) .at-day-image{order:0}
          .atlas-tour .at-day-image{min-height:260px}
          .atlas-tour .at-day-content{padding:28px 23px}
          .atlas-tour .at-inclusions-grid{grid-template-columns:1fr}
          .atlas-tour .at-inclusion-card{padding:28px 23px}
          .atlas-tour .at-prep-grid{grid-template-columns:1fr}
          .atlas-tour .at-difficulty-image{height:330px}
          .atlas-tour .at-final-content{width:calc(100% - 40px);padding:75px 0}
          .atlas-tour .at-related-grid{grid-template-columns:1fr}
          .atlas-tour .at-related-image{height:240px}
          .atlas-tour .at-footer-main{grid-template-columns:1fr 1fr;gap:35px 22px;padding:50px 0 35px}
          .atlas-tour .at-footer-bottom{flex-direction:column;gap:8px}
        }
        @media(max-width:420px){
          .atlas-tour .at-highlight-grid{grid-template-columns:1fr}
          .atlas-tour .at-highlight{min-height:auto}
          .atlas-tour .at-facts-row{grid-template-columns:1fr;gap:3px}
          .atlas-tour .at-footer-main{grid-template-columns:1fr}
        }
      `}</style>

      <section className="at-hero">
        <div className="at-hero-image">
          <img src={images.hero} alt="Road cycling through the landscapes of Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · ATLAS MOUNTAINS · SAHARA · 8 DAYS</span>
          <h1>Atlas to Sahara Road Cycling Expedition</h1>
          <p className="at-hero-description">
            Journey from the mountain landscapes of
            the Atlas towards the Sahara region.
            Discover Morocco by road bike on an
            eight-day expedition through changing
            scenery, valleys and traditional villages.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your 8-Day Expedition <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>08 DAYS</strong><span>Road cycling</span></div>
            <div><strong>ATLAS</strong><span>Mountain region</span></div>
            <div><strong>SAHARA</strong><span>Desert region</span></div>
            <div><strong>MOROCCO</strong><span>Expedition</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>8 Days</strong></div>
          <div className="at-fact"><span>Journey</span><strong>Atlas to Sahara</strong></div>
          <div className="at-fact"><span>Experience</span><strong>Morocco Expedition</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Road Cycling</strong></div>
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
            <img src={images.overview} alt="Atlas Mountains cycling expedition in Morocco" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">AN EIGHT-DAY MOROCCAN EXPEDITION</span>
            <h2 className="at-heading">From the Atlas Mountains Towards the Sahara</h2>
            <p className="at-copy">
              The Atlas to Sahara Road Cycling
              Expedition is an eight-day journey
              through some of Morocco's changing
              landscapes. Starting in the Atlas
              region, the expedition travels towards
              the southern landscapes and the
              Sahara region.
            </p>
            <p className="at-copy">
              Discover mountain roads, rural valleys,
              traditional Amazigh villages and the
              changing scenery of southern Morocco.
              Each stage offers a different perspective
              on the country's landscapes and
              cycling environment.
            </p>
            <p className="at-copy">
              The precise starting point, daily routes,
              distances, elevation gain, overnight
              locations and transfer arrangements
              will be confirmed according to your
              selected programme and cycling level.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the eight-day expedition →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE ROAD CYCLING EXPERIENCE</span>
            <h2 className="at-heading">Eight Days Across Morocco's Changing Landscapes</h2>
            <p className="at-copy">
              This expedition is designed for riders
              who want to experience Morocco through
              a longer road cycling journey. From
              mountain scenery to the drier landscapes
              of the south, the route offers a varied
              cycling experience.
            </p>
            <p className="at-copy">
              The programme can be discussed around
              your cycling background, preferred pace
              and travel arrangements. The selected
              route will determine the daily distance,
              climbing and overall difficulty.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Atlas to Sahara Road Cycling Expedition</h3>
            <p>An eight-day road cycling journey from the Atlas region towards the Sahara.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>8 days</strong></li>
              <li><span>Journey</span><strong>Atlas to Sahara region</strong></li>
              <li><span>Tour format</span><strong>Private cycling expedition</strong></li>
              <li><span>Route style</span><strong>Road cycling</strong></li>
              <li><span>Experience</span><strong>Mountains, valleys and desert region</strong></li>
            </ul>
            <a className="at-button" href="/contact">Enquire About This Expedition <span>→</span></a>
          </aside>
        </div>
      </section>

      <section className="at-section at-highlight-section" id="highlights">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">THE EXPERIENCE</span>
              <h2 className="at-heading">Highlights of the Atlas to Sahara Expedition</h2>
            </div>
            <p>
              Discover Morocco over eight days
              of road cycling, from Atlas mountain
              landscapes towards the southern
              valleys and Sahara region.
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
            <img src={images.pass} alt="Road cycling landscape in Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE &amp; TERRAIN</span>
            <h2 className="at-heading">From Mountain Roads to the Sahara Region</h2>
            <p className="at-copy">
              The expedition connects the Atlas
              region with the landscapes of southern
              Morocco. The selected roads can
              include mountain terrain, winding
              climbs, open valleys and drier
              desert-region landscapes.
            </p>
            <p className="at-copy">
              The daily riding programme depends
              on your experience, the selected roads
              and local conditions. Route direction,
              starting points and finishing
              arrangements determine the total
              distance and elevation gain.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Road cycling through the Atlas region</li>
              <li><span>02</span>Mountain roads and changing landscapes</li>
              <li><span>03</span>Southern valleys and rural communities</li>
              <li><span>04</span>Roads in the Sahara region – not sand dunes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR EXPEDITION</span>
            <h2 className="at-heading">Tour Information</h2>
            <p className="at-copy">
              Review the main details of this
              eight-day road cycling journey.
              Daily distances, elevation,
              starting and finishing points,
              accommodation, road conditions
              and transfer arrangements should
              be confirmed in your trip proposal.
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
          <img src={images.village} alt="Traditional Amazigh village in Morocco" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover the Landscapes and Culture of Southern Morocco</h2>
          <p className="at-copy">
            This expedition is about more than
            the kilometres on the road. Along
            the selected route, discover the
            changing landscapes, traditional
            settlements and rural character
            of Morocco's mountain and southern regions.
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
              <span className="at-eyebrow">EIGHT DAYS ON THE ROAD</span>
              <h2 className="at-heading">Explore the Landscapes of the Atlas and Sahara</h2>
            </div>
            <p>
              From mountain scenery and rural
              valleys to the changing landscapes
              of southern Morocco, experience
              the country by road bike.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="Atlas Mountains road cycling scenery" /></div>
            <div className="at-gallery-item"><img src={images.pass} alt="Mountain road in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional village in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Southern Morocco valley landscape" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Road cycling in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EIGHT DAYS ACROSS MOROCCO</span>
              <h2 className="at-heading">Atlas to Sahara Road Cycling Itinerary</h2>
            </div>
            <p>
              Eight days connecting the Atlas
              region with the Sahara. The precise
              daily routes, distances, elevation,
              overnight arrangements and transfers
              are confirmed during trip planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines the proposed
            structure of the eight-day expedition.
            Exact route selection, daily distance,
            elevation gain, meeting point,
            accommodation, road conditions and
            transfer arrangements depend on
            the final programme agreed with your group.
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
              <h2 className="at-heading">What Is Included in Your Expedition?</h2>
            </div>
            <p>
              Final inclusions are confirmed in
              your booking proposal. Check your
              personalised itinerary for services,
              accommodation, transport and
              support included in your experience.
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
              <h2 className="at-heading">Preparing for Your Atlas to Sahara Expedition</h2>
            </div>
            <p>
              Prepare your bicycle, fitness
              and equipment for eight days
              of road cycling through the
              changing landscapes of Morocco.
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
            <img src={images.cycling} alt="Road cycling through the landscapes of Morocco" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">RIDE AT YOUR LEVEL</span>
            <h2 className="at-heading">Difficulty and Cycling Experience</h2>
            <p className="at-copy">
              An eight-day road cycling expedition
              requires suitable fitness and the
              ability to manage consecutive days
              on the bicycle. The selected route
              may include mountain climbs,
              long riding stages and changing
              weather conditions.
            </p>
            <p className="at-copy">
              Previous road cycling experience
              is recommended. Tell us about
              the distances you normally ride,
              your climbing experience and
              your preferred pace so we can
              discuss suitable arrangements
              for your expedition.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Final difficulty,
              daily riding distance, elevation gain,
              road conditions and overnight arrangements
              must be checked against the actual
              itinerary before booking. This page
              does not promise fixed mileage or
              elevation figures.
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
              about the Atlas to Sahara Road
              Cycling Expedition. Contact our
              team if you need more details
              before planning your journey.
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
          <img src={images.final} alt="Road cycling landscapes in Morocco" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR MOROCCAN CYCLING EXPEDITION STARTS HERE</span>
          <h2>Ready to Ride from the Atlas Towards the Sahara?</h2>
          <p>
            Tell us your preferred dates,
            group size, cycling experience
            and bicycle requirements.
            We can discuss the route,
            daily distances, accommodation,
            support and arrangements for
            your eight-day expedition.
          </p>
          <a className="at-button" href="/contact">Plan Your Atlas to Sahara Expedition <span>→</span></a>
        </div>
      </section>

      <section className="at-related-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EXPLORE MORE</span>
              <h2 className="at-heading">More Road Cycling Adventures in Morocco</h2>
            </div>
            <p>
              Discover more ways to experience
              Morocco by road bike, from the
              mountain roads of the High Atlas
              to longer cycling journeys.
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