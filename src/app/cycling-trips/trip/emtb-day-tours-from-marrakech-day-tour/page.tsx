import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-MTB Day Tour from Marrakech | Electric Mountain Bike Morocco",
  description:
    "Explore the landscapes around Marrakech on a guided electric mountain bike day tour. Ride countryside tracks, foothills and scenic trails with a local cycling team.",
  alternates: {
    canonical: "/cycling-trips/trip/emtb-day-tours-from-marrakech-day-tour",
  },
};

const images = {
  hero: "/images/e-mtb-tour-morocco.jpg",
  overview: "/images/day-ebike-tour-from-marrakech.jpg",
  atlas: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  valley: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  village: "/images/mountain-bike-morocco-intro.jpg",
  cycling: "/images/singletrack-mtb-atlas-mountains.jpg",
  trail: "/images/Desert-Agafay-Morocco.jpg",
  final: "/images/mtb-morocco-Saghro.JPG",
};

const facts = [
  ["Duration", "1 day"],
  ["Starting point", "Marrakech"],
  ["Destination", "Marrakech countryside and Atlas region"],
  ["Cycling style", "Electric mountain biking"],
  ["Bike type", "E-MTB"],
  ["Difficulty", "Adaptable to riding experience"],
  ["Experience", "Guided day adventure"],
  ["Tour format", "Private or group arrangements"],
  ["Best season", "Spring and autumn"],
];

const highlights = [
  {
    number: "01",
    title: "Explore Beyond Marrakech",
    text: "Leave the busy streets behind and discover the countryside, open landscapes and mountain scenery surrounding Marrakech on an electric mountain bike.",
  },
  {
    number: "02",
    title: "Ride with Electric Assistance",
    text: "Enjoy the advantages of an electric mountain bike on changing terrain. Pedal assistance helps you manage climbs and enjoy more of the day's riding.",
  },
  {
    number: "03",
    title: "Discover Natural Trails",
    text: "Explore selected rural tracks, mountain paths and scenic routes according to your experience, the weather and the type of E-MTB available.",
  },
  {
    number: "04",
    title: "Ride with Local Guides",
    text: "Discover the region with a local cycling team who can help select suitable routes and coordinate the practical arrangements for your day.",
  },
];

const beyondTrail = [
  {
    title: "Amazigh mountain culture",
    text: "Discover the traditional architecture, communities and everyday life of the villages surrounding the Atlas Mountains.",
  },
  {
    title: "Landscapes beyond the city",
    text: "Experience the contrast between Marrakech and the open countryside, foothills and mountain scenery nearby.",
  },
  {
    title: "Local hospitality",
    text: "Take time to appreciate the welcoming atmosphere of rural Morocco and enjoy opportunities to discover local traditions.",
  },
  {
    title: "Moroccan flavours",
    text: "Depending on the selected programme, enjoy a break to experience local food and the atmosphere of the countryside.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "E-MTB Adventure from Marrakech",
    location: "Marrakech – Countryside and Atlas region",
    distance: "Route-dependent",
    riding: "Guided electric mountain biking",
    image: images.overview,
    text: "Your day begins in Marrakech, where you meet your local cycling team and prepare for the ride. After reviewing your experience, bicycle setup and preferred riding style, travel towards the selected riding area. Once your E-MTB is ready, begin exploring the countryside and natural landscapes outside the city. The route is selected according to the group's ability, weather and trail conditions.",
    details: [
      "Meet your local guide and cycling team",
      "Transfer from Marrakech to the selected riding area",
      "E-MTB setup and route briefing",
      "Begin your guided electric mountain bike ride",
    ],
  },
  {
    day: "02",
    title: "Ride Through the Countryside and Mountain Trails",
    location: "Selected riding area near Marrakech",
    distance: "Route-dependent",
    riding: "Electric-assisted mountain biking",
    image: images.trail,
    text: "Continue your ride through the selected countryside and mountain terrain. Depending on the route, discover quiet tracks, natural paths, open landscapes and scenic viewpoints. Electric assistance makes it possible to approach climbs differently while still enjoying an active mountain biking experience. Your guide adjusts the pace and route to suit the group and the conditions.",
    details: [
      "Explore selected natural and countryside trails",
      "Enjoy electric assistance on suitable climbs",
      "Discover scenic landscapes outside Marrakech",
      "Take breaks for photographs and refreshments",
    ],
  },
  {
    day: "03",
    title: "Discover Villages and Scenic Landscapes",
    location: "Countryside and surrounding villages",
    distance: "Route-dependent",
    riding: "Guided E-MTB experience",
    image: images.village,
    text: "The ride continues through the landscapes surrounding Marrakech, with opportunities to discover traditional villages and the character of rural Morocco. The exact route depends on the selected riding area and the group's preferences. Enjoy a day that combines electric mountain biking, beautiful scenery and an introduction to the region beyond the city.",
    details: [
      "Ride through selected rural routes",
      "Discover traditional village landscapes",
      "Enjoy scenic stops along the route",
      "Experience the region with a local guide",
    ],
  },
  {
    day: "04",
    title: "Return to Marrakech",
    location: "Selected riding area – Marrakech",
    distance: "According to selected route",
    riding: "Final ride and return transfer",
    image: images.atlas,
    text: "After completing the agreed route, return your E-MTB and prepare for the journey back to Marrakech. Depending on the programme, there may be time for a final stop to enjoy the scenery before the return transfer. Your day tour concludes in Marrakech according to the arrangements confirmed at booking.",
    details: [
      "Complete the selected E-MTB route",
      "Return bicycle and equipment",
      "Final stop depending on the programme",
      "Return transfer to Marrakech if included",
    ],
  },
];

const inclusions = [
  "Route planning and day-tour coordination",
  "Local cycling guide as specified in your proposal",
  "E-MTB bicycle where explicitly included",
  "Helmet and equipment where specified",
  "Transfers where included in your arrangements",
  "Support services where confirmed",
  "Refreshments or meals explicitly listed in your proposal",
  "On-tour coordination and practical assistance",
];

const exclusions = [
  "Accommodation in Marrakech",
  "International and domestic flights",
  "Travel insurance and emergency assistance cover",
  "Personal cycling clothing and accessories",
  "Meals and drinks not specified in your proposal",
  "Personal expenses and tips",
  "Additional activities outside the agreed programme",
  "Services not specifically listed in your confirmed booking",
];

const preparation = [
  {
    title: "Cycling experience",
    text: "An E-MTB day tour can be adapted to different riding backgrounds. Share your mountain biking experience and confidence on natural terrain so the team can discuss a suitable route.",
  },
  {
    title: "E-MTB and equipment",
    text: "Check the bicycle size and setup before riding. If an E-MTB is included, the model, battery arrangements, helmet and other equipment should be confirmed before your tour.",
  },
  {
    title: "Fitness and riding",
    text: "Electric assistance supports your pedalling but does not replace good riding technique. Be prepared for a day outdoors, changing surfaces and the physical demands of mountain biking.",
  },
  {
    title: "Personal essentials",
    text: "Bring comfortable cycling clothing, gloves, sunglasses, sun protection and suitable footwear. Carry water and any personal items recommended by your guide.",
  },
];

const faqs = [
  {
    q: "How long is the E-MTB day tour from Marrakech?",
    a: "This is a one-day electric mountain bike experience starting from Marrakech. The total programme and time spent riding depend on the selected route and transfer arrangements.",
  },
  {
    q: "Where does the E-MTB tour start?",
    a: "The tour starts in Marrakech. The meeting point and any pickup arrangements are confirmed when your day-tour programme is organised.",
  },
  {
    q: "What type of bike is used?",
    a: "The experience is designed around electric mountain bikes. The available model, frame size, battery capacity and equipment should be confirmed before booking.",
  },
  {
    q: "Do I need previous mountain biking experience?",
    a: "Some cycling experience is helpful, particularly if the selected route includes natural trails. Tell us about your experience so the team can discuss a suitable route and level of difficulty.",
  },
  {
    q: "Is the E-MTB bicycle included?",
    a: "Bicycle arrangements depend on the package selected. Your proposal should clearly state whether an E-MTB, helmet and other equipment are included or arranged separately.",
  },
  {
    q: "Can beginners join the E-MTB day tour?",
    a: "The route can be discussed according to your experience and confidence. Beginners should be comfortable riding a bicycle and should communicate their experience before the tour.",
  },
  {
    q: "How far will we ride?",
    a: "Distance and elevation depend on the chosen route, battery arrangements, terrain and group ability. The expected riding distance can be confirmed before booking.",
  },
  {
    q: "Does the tour include hotel pickup?",
    a: "Pickup and return transfers depend on the selected package. Confirm your accommodation location and transfer requirements with the team when requesting your proposal.",
  },
  {
    q: "Is the tour private?",
    a: "Private and group arrangements can be discussed. Contact the team with your preferred date and group size to confirm the available options.",
  },
  {
    q: "What should I bring for the ride?",
    a: "Bring comfortable cycling clothing, suitable footwear, sunglasses, gloves, sun protection and water. Your team will confirm the bicycle and equipment arrangements before the tour.",
  },
];

const relatedTours = [
  {
    category: "E-MTB EXPERIENCE",
    title: "E-MTB Tour in Morocco",
    text: "Discover longer electric mountain bike experiences through selected mountain routes and the landscapes of the Atlas region.",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/cycling-trips/trip/emtb-tour-morocco",
  },
  {
    category: "MARRAKECH CYCLING",
    title: "Cycling Trips from Marrakech",
    text: "Explore more cycling experiences from Marrakech, with routes into the countryside and surrounding mountain landscapes.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/cycling-trips/trip/cycling-tour-from-marrakech",
  },
  {
    category: "MOUNTAIN BIKE ADVENTURE",
    title: "Atlas Enduro Trail Adventure",
    text: "Discover mountain biking and natural trails in the Atlas Mountains on a longer guided cycling adventure.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/cycling-trips/trip/atlas-enduro-trail-adventure-8-day",
  },
];

export default function EmtbDayToursFromMarrakechPage() {
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
          <img src={images.hero} alt="Electric mountain biking in Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · MARRAKECH · E-MTB DAY TOUR</span>
          <h1>E-MTB Day Tour from Marrakech</h1>
          <p className="at-hero-description">
            Escape the city and discover Morocco by electric mountain bike.
            Ride selected countryside routes, natural trails and scenic
            landscapes around Marrakech with a local cycling team.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">
              Book Your E-MTB Day Tour <span>→</span>
            </a>
            <a className="at-hero-back" href="/cycling-trips">
              Explore All Cycling Tours
            </a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>1 DAY</strong><span>Guided experience</span></div>
            <div><strong>E-MTB</strong><span>Electric mountain bike</span></div>
            <div><strong>TRAILS</strong><span>Natural terrain</span></div>
            <div><strong>MARRAKECH</strong><span>Starting point</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>1 Day</strong></div>
          <div className="at-fact"><span>Region</span><strong>Marrakech & Surroundings</strong></div>
          <div className="at-fact"><span>Starting point</span><strong>Marrakech</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Guided E-MTB</strong></div>
        </div>
      </section>

      <nav className="at-subnav">
        <div className="at-container at-subnav-inner">
          <a href="#overview">Overview</a>
          <a href="#highlights">Highlights</a>
          <a href="#route">Routes & Terrain</a>
          <a href="#itinerary">Itinerary</a>
          <a href="#included">Included</a>
          <a href="#preparation">Preparation</a>
          <a href="#faqs">FAQs</a>
        </div>
      </nav>

      <section className="at-section" id="overview">
        <div className="at-container at-overview-grid">
          <div className="at-overview-image">
            <img src={images.overview} alt="Electric bike day tour from Marrakech" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A DAY OF ELECTRIC MOUNTAIN BIKING</span>
            <h2 className="at-heading">Discover the Landscapes Around Marrakech by E-MTB</h2>
            <p className="at-copy">
              The E-MTB Day Tour from Marrakech is designed for riders
              who want to discover the countryside and mountain scenery
              surrounding the city on an electric mountain bike.
            </p>
            <p className="at-copy">
              Leave the urban atmosphere behind and explore selected
              rural tracks, natural trails and scenic routes. Electric
              pedal assistance makes it easier to approach climbs and
              enjoy a varied day of riding.
            </p>
            <p className="at-copy">
              The route, distance and difficulty are selected according
              to your riding experience, the available E-MTB and local
              trail conditions. Pickup, bicycle rental and support
              arrangements are confirmed in your personalised proposal.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the day itinerary →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR DAY ON AN ELECTRIC MOUNTAIN BIKE</span>
            <h2 className="at-heading">A Different Way to Explore Morocco</h2>
            <p className="at-copy">
              An E-MTB opens up new possibilities for exploring the
              countryside around Marrakech. Pedal assistance helps
              you manage changing terrain while keeping you involved
              in the ride.
            </p>
            <p className="at-copy">
              Depending on the selected route, your day may include
              countryside tracks, mountain approaches, natural paths
              and scenic stops. The riding programme is discussed
              around your experience and expectations.
            </p>
            <p className="at-copy">
              Tell us your preferred date, group size and mountain
              biking experience. Our team can then discuss the
              available routes, E-MTB arrangements and transfers
              for your day outside Marrakech.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>E-MTB Day Tour from Marrakech</h3>
            <p>A guided electric mountain bike experience in the countryside around Marrakech.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>1 day</strong></li>
              <li><span>Starting city</span><strong>Marrakech</strong></li>
              <li><span>Bike type</span><strong>Electric MTB</strong></li>
              <li><span>Tour format</span><strong>Guided experience</strong></li>
              <li><span>Route</span><strong>Selected local trails</strong></li>
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
              <h2 className="at-heading">Highlights of the E-MTB Day Tour</h2>
            </div>
            <p>
              Enjoy a day of electric mountain biking beyond Marrakech,
              discovering natural terrain, rural landscapes and
              selected routes with a local cycling guide.
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
            <img src={images.trail} alt="Natural trails and countryside around Marrakech" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTES & LANDSCAPES</span>
            <h2 className="at-heading">Discover the Trails Around Marrakech</h2>
            <p className="at-copy">
              The countryside around Marrakech offers a variety of
              landscapes for electric mountain biking. Depending on
              the selected area, the ride may include rural tracks,
              natural paths, foothills and open mountain scenery.
            </p>
            <p className="at-copy">
              Route selection depends on your riding experience,
              the available bicycle, battery range, weather and
              trail conditions. Your guide can discuss a suitable
              combination of terrain for your day.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Selected countryside routes near Marrakech</li>
              <li><span>02</span>Natural tracks and mountain paths</li>
              <li><span>03</span>Scenic foothills and rural landscapes</li>
              <li><span>04</span>Routes adapted to your riding experience</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="at-section at-facts-section">
        <div className="at-container at-facts-layout">
          <div>
            <span className="at-eyebrow">PLAN YOUR DAY</span>
            <h2 className="at-heading">Tour Information</h2>
            <p className="at-copy">
              Review the main details of this E-MTB day experience.
              The final route, riding distance, elevation, bicycle
              arrangements and transfers are confirmed in your
              trip proposal.
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
          <img src={images.village} alt="Moroccan village and countryside near the Atlas Mountains" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Experience the Landscapes and Culture of Morocco</h2>
          <p className="at-copy">
            An E-MTB day outside Marrakech is also an opportunity
            to discover the region's rural character. Between
            riding sections, enjoy the scenery, traditional
            villages and local atmosphere.
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
              <span className="at-eyebrow">MOROCCAN MOMENTS</span>
              <h2 className="at-heading">Discover the Scenery Beyond Marrakech</h2>
            </div>
            <p>
              Explore the countryside, mountain landscapes and
              natural riding terrain that make an electric
              mountain bike day outside Marrakech memorable.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.atlas} alt="Atlas Mountain scenery in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Mountain valley in the Atlas region" /></div>
            <div className="at-gallery-item"><img src={images.trail} alt="Natural countryside trail near Marrakech" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Moroccan countryside village" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Mountain biking on a natural trail in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">YOUR DAY ON THE TRAILS</span>
              <h2 className="at-heading">E-MTB Day Tour Itinerary</h2>
            </div>
            <p>
              A guided electric mountain bike experience starting
              in Marrakech and exploring a selected riding area
              in the surrounding countryside.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The following stages describe the experience rather
            than four separate travel days. The actual day schedule,
            riding distance, elevation, stops and transfer times
            depend on the selected route and confirmed arrangements.
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
              <span className="at-eyebrow">YOUR DAY-TOUR ARRANGEMENTS</span>
              <h2 className="at-heading">What Is Included in Your E-MTB Tour?</h2>
            </div>
            <p>
              The final inclusions depend on the package selected.
              Check your personalised proposal for bicycle rental,
              guiding, transfers and any additional services.
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
              <h2 className="at-heading">Preparing for Your E-MTB Day Tour</h2>
            </div>
            <p>
              Prepare your clothing, personal equipment and
              riding experience before travelling to Marrakech.
              Good preparation helps you enjoy the day comfortably.
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
            <img src={images.cycling} alt="Mountain biking on a natural trail in Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">FIND YOUR RHYTHM</span>
            <h2 className="at-heading">Difficulty and E-MTB Experience</h2>
            <p className="at-copy">
              The difficulty of this day tour depends on the
              selected terrain, distance, elevation and your
              mountain biking experience. Electric assistance
              can make climbs more manageable, but natural
              trails still require balance and bike control.
            </p>
            <p className="at-copy">
              Tell us whether you are new to mountain biking,
              regularly ride natural trails or have experience
              on technical terrain. This helps the team discuss
              a route that matches your confidence and expectations.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Confirm the actual
              route grade, distance, elevation, battery range
              and bicycle specifications before booking.
              Riders should be comfortable controlling a bicycle
              on the terrain selected for the tour and follow
              their guide's safety instructions.
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
              Find answers to common questions about this
              electric mountain bike day tour from Marrakech.
              Contact our team if you need more details before
              planning your ride.
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
          <img src={images.final} alt="Mountain landscape in Morocco" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR E-MTB ADVENTURE STARTS HERE</span>
          <h2>Discover the Countryside Around Marrakech by E-MTB</h2>
          <p>
            Tell us your preferred date, group size and mountain
            biking experience. We will discuss the available
            routes, E-MTB arrangements and transfer options
            for your day outside Marrakech.
          </p>
          <a className="at-button" href="/contact">
            Plan Your E-MTB Day Tour <span>→</span>
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
              Discover more ways to explore Morocco by bike,
              from electric mountain bike experiences to
              longer Atlas Mountain cycling adventures.
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
              countryside and unforgettable routes with Mountain Bike Morocco.
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