import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Mixed Ability Private Cycling Break in Morocco – 3 to 5 Days | Mountain Bike Morocco",
  description:
    "Enjoy a three-to-five-day private cycling break in Morocco designed for mixed-ability groups. Choose suitable routes, flexible distances and a relaxed pace through Atlas landscapes, villages and valleys.",
  alternates: {
    canonical: "/cycling-trips/trip/mixed-ability-private-cycling-break-3-to-5-days",
  },
};

const images = {
  hero: "/images/cycling-holiday-trip-from-marrakech.jpg",
  overview: "/images/mountain-biking-atlas-mountains-morocco.jpg",
  mountains: "/images/atlas-cycling-adventure.jpg",
  road: "/images/explore-morocco-cycling-holiday.jpg",
  village: "/images/berber-villages-cycling-expeditions.jpg",
  valley: "/images/atlas-valley-cycling-morocco.jpg",
  cycling: "/images/group-morocco-cycling.jpg",
  final: "/images/cycling-holiday-morocco.jpg",
};

const facts = [
  ["Duration", "3 to 5 days / flexible itinerary"],
  ["Destination", "Atlas Mountains, valleys and selected countryside routes"],
  ["Starting point", "Marrakech – meeting point to be confirmed"],
  ["Cycling style", "Private guided cycling with adaptable route options"],
  ["Difficulty", "Easy to challenging, depending on the chosen route"],
  ["Experience", "Mixed-ability riders with varied fitness and confidence"],
  ["Tour format", "Private break for couples, families or groups"],
  ["Accommodation", "Selected according to your personalised itinerary"],
  ["Best season", "Spring and autumn, subject to route and weather conditions"],
];

const highlights = [
  {
    number: "01",
    title: "One Private Break, Different Riding Levels",
    text: "Bring friends, partners or family members with different cycling backgrounds together for a private Moroccan cycling escape. The route plan can take account of varied fitness, confidence and experience rather than expecting everyone to ride at the same level.",
  },
  {
    number: "02",
    title: "Choose Routes That Suit the Group",
    text: "Discuss shorter and longer ride options, manageable climbs, terrain preferences and daily distances before departure. The final programme is designed around the group's shared goals and the practical options available on the selected routes.",
  },
  {
    number: "03",
    title: "Discover Atlas Villages and Landscapes",
    text: "Explore mountain scenery, rural tracks, quiet roads and traditional villages on routes selected for your group. Enjoy time for scenic stops, refreshments and discovering the landscapes beyond the ride.",
  },
  {
    number: "04",
    title: "A Flexible Three-to-Five-Day Escape",
    text: "Choose a three-day break or extend your stay to four or five days. The schedule can balance riding with rest, local experiences and time to enjoy Morocco at a comfortable group pace.",
  },
];

const beyondTrail = [
  {
    title: "A Group with Different Abilities",
    text: "A mixed-ability holiday works best when expectations are discussed openly. Share the group's recent riding experience, preferred terrain and any concerns so the route can be planned with realistic options for everyone.",
  },
  {
    title: "Flexible Routes and Regrouping Points",
    text: "Where the selected route allows, the day can include shorter alternatives, optional extensions or agreed regrouping points. The exact arrangements depend on the terrain, group size, guide plan and local conditions.",
  },
  {
    title: "More Than Just Time on the Bike",
    text: "Build in time for village stops, mountain views, local food and relaxed moments between rides. The itinerary can balance cycling with the wider experience of travelling through Morocco.",
  },
  {
    title: "Extend Your Break to Five Days",
    text: "The three-day programme forms the core escape. Optional fourth and fifth days can add another riding area, a more relaxed schedule or extra time to explore, depending on the route agreed with your group.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Meet in Marrakech and Set the Group's Riding Plan",
    location: "Marrakech – selected Atlas riding area",
    distance: "To be confirmed",
    riding: "Welcome, equipment check and adaptable introductory ride",
    image: "/images/cycling-holiday-trip-from-marrakech.jpg",
    text: "Meet your guide at the agreed point and talk through the group's experience, expectations and preferred cycling style. Travel to the selected riding area if a transfer is included, then check bicycles, helmets and essential equipment. Begin with a suitable introductory route where timing and conditions allow. This first ride helps establish a comfortable rhythm and identify any adjustments needed for the following days. The exact route, distance and overnight arrangements are confirmed in your personalised itinerary.",
    details: [
      "Meet your guide and review the private programme",
      "Discuss the group's different riding levels and preferences",
      "Transfer to the agreed starting area if included",
      "Check bicycles, helmets and personal equipment",
      "Enjoy an introductory ride suited to the agreed group plan",
      "Review the next day's route and overnight arrangements",
    ],
  },
  {
    day: "02",
    title: "Explore Atlas Trails and Countryside at a Comfortable Pace",
    location: "Selected Atlas valleys and villages",
    distance: "To be confirmed",
    riding: "Guided ride with route options where practical",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
    text: "After breakfast, set out on a route selected for the group's overall ability and interests. Depending on the area, the ride may combine quiet roads, rural tracks or gentle mountain trails. Where the route and guiding arrangements allow, shorter alternatives or agreed regrouping points can help the day work for riders with different levels of confidence and fitness. Enjoy regular breaks and time to appreciate the scenery before reaching the agreed finish and overnight stop.",
    details: [
      "Review the route, weather and riding conditions",
      "Choose the agreed route option for the group",
      "Ride at a sustainable pace with suitable breaks",
      "Use agreed regrouping points where the route allows",
      "Enjoy village and landscape stops along the way",
      "Finish at the overnight location in your confirmed plan",
    ],
  },
  {
    day: "03",
    title: "A Final Day of Cycling for the Three-Day Break",
    location: "Selected Atlas route – agreed finish point",
    distance: "To be confirmed",
    riding: "Flexible final ride and return arrangements",
    image: "/images/atlas-cycling-adventure.jpg",
    text: "Enjoy the final ride of the three-day private break. The route can be chosen to suit the group's energy after the first two days, with a shorter scenic option or a more active stage where appropriate. Take time for photographs, refreshments and a final look at the landscapes before completing the core itinerary. Guests extending to four or five days continue with the optional stages below.",
    details: [
      "Review the group's preferred pace for the final core day",
      "Ride the agreed route through the selected landscape",
      "Include scenic stops and breaks as appropriate",
      "Finish the three-day option or continue with an extension",
      "Return transfer arrangements follow your confirmed itinerary",
    ],
  },
  {
    day: "04",
    title: "Optional Extension – Discover More of the Atlas",
    location: "Additional Atlas area – to be confirmed",
    distance: "To be confirmed",
    riding: "Optional additional ride with adaptable route choices",
    image: "/images/explore-morocco-cycling-holiday.jpg",
    text: "For the four-day option, add another day to explore a different section of the chosen region or enjoy a more relaxed schedule. The route may offer a new valley, village scenery or an additional trail or road stage, depending on the group's preferences and the conditions. The day's distance, terrain and finish point are agreed in advance so the ride remains appropriate for the group.",
    details: [
      "Add the fourth day to your private itinerary",
      "Choose the additional route with your guide",
      "Agree the terrain and distance for the group",
      "Allow time for refreshments and scenic stops",
      "Stay overnight according to the confirmed programme",
    ],
  },
  {
    day: "05",
    title: "Optional Fifth Day – A Relaxed Final Ride and Return",
    location: "Selected final route – Marrakech or agreed finish point",
    distance: "To be confirmed",
    riding: "Optional final ride and departure",
    image: "/images/group-morocco-cycling.jpg",
    text: "Choose a fifth day for one more ride or a gentler finish to your cycling break. Depending on the group's energy and departure schedule, this may be a shorter morning route, a final scenic loop or additional time to enjoy the area. Prepare bicycles and luggage for the return journey, with the finishing location and any transfers confirmed in your personalised proposal.",
    details: [
      "Enjoy breakfast and review the final day's schedule",
      "Complete the agreed final ride if timing allows",
      "Adapt the route to the group's energy and preferences",
      "Prepare bicycles and luggage for the return journey",
      "Transfer to Marrakech or the agreed finish point if included",
    ],
  },
];

const inclusions = [
  "Three-to-five-day private cycling programme planning",
  "Route planning around the group's varied fitness, confidence and experience",
  "Private cycling guide or ride support as specified in your proposal",
  "Selected cycling stages and route options agreed for the group",
  "Accommodation only when specified in your proposal",
  "Bicycle rental if specifically included and confirmed",
  "Luggage handling and bicycle transfers only when confirmed",
  "Transfers from Marrakech if specified in your proposal",
  "Meals and refreshments only when listed in your proposal",
  "Support vehicle or additional guiding only as detailed in your confirmed arrangements",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Bicycles unless included in your proposal",
  "Personal cycling clothing, shoes, helmet and equipment",
  "Transfers unless specifically included",
  "Accommodation unless listed in your proposal",
  "Meals and drinks not specified in your itinerary",
  "Personal expenses and tips",
  "Additional activities or extra nights not listed in your proposal",
  "Services not specifically listed in your proposal",
];

const preparation = [
  {
    title: "Share Everyone's Riding Experience",
    text: "Before booking, describe the group's recent cycling experience, confidence on different surfaces, typical ride duration and preferred pace. Honest information helps shape a programme that is enjoyable and realistic for the whole group.",
  },
  {
    title: "Choose Suitable Bikes and Equipment",
    text: "The best bicycle depends on the selected route, which may include paved roads, gravel tracks or mountain-bike terrain. Discuss the route before choosing your bike. Bring a well-maintained bicycle, helmet, gloves, suitable shoes, water bottles and personal repair essentials, or confirm rental arrangements in advance.",
  },
  {
    title: "Prepare at Your Own Level",
    text: "Build a comfortable base of fitness before travelling, but do not assume every rider needs the same training target. Share any limits on distance, climbing or technical terrain so the itinerary can take account of the group's range of abilities.",
  },
  {
    title: "Pack for Changing Mountain Conditions",
    text: "Weather can vary with altitude, season and time of day. Bring sun protection, a light waterproof or windproof layer, warmer clothing for cooler mornings and evenings, personal medication and comfortable off-bike clothes. Confirm luggage limits and resupply arrangements in advance.",
  },
];

const faqs = [
  {
    q: "Is this private cycling break suitable for mixed-ability groups?",
    a: "The trip is designed to be planned around riders with different levels of fitness and confidence. Share each person's experience and preferences before booking so the routes, distances and daily rhythm can be discussed realistically.",
  },
  {
    q: "Can stronger and less experienced riders enjoy the same trip?",
    a: "The itinerary can be planned with a shared group experience in mind. Depending on the route and guiding arrangements, shorter alternatives, optional extensions or regrouping points may be possible. Separate groups or guides should only be assumed if specifically confirmed in your proposal.",
  },
  {
    q: "Can we choose a three-, four- or five-day break?",
    a: "Yes. Day 3 completes the core three-day option, while Days 4 and 5 are optional extensions. The final route, overnight arrangements and services are confirmed in your personalised proposal.",
  },
  {
    q: "What type of cycling will we do?",
    a: "The cycling style depends on the group's preferences and the selected area. Routes may be planned around suitable paved roads, gravel tracks or mountain-bike trails. Discuss the terrain you enjoy and the bicycles available before confirming the itinerary.",
  },
  {
    q: "Do all riders need the same fitness level?",
    a: "No, but the organiser should share the range of abilities in the group. The daily plan can then be discussed around realistic distances, climbing, surfaces and rest stops. The exact options depend on the route and local conditions.",
  },
  {
    q: "Can the daily distances and difficulty be customised?",
    a: "The route can be discussed around the group's preferred distance, climbing, technical confidence and available time. Exact distances, elevation gain and riding times are confirmed once the route has been selected.",
  },
  {
    q: "Where does the tour start and finish?",
    a: "Marrakech is the proposed meeting point. The actual starting area, route direction, finishing point and transfer arrangements depend on the selected itinerary and will be confirmed in your personalised proposal.",
  },
  {
    q: "What is the best time of year for this trip?",
    a: "Spring and autumn are often suitable periods for multi-day cycling in Morocco, but the best dates depend on the route, altitude and weather. Confirm seasonal conditions for your selected travel dates before booking.",
  },
];

const relatedTours = [
  {
    category: "GROUP CYCLING",
    title: "Atlas Cycling Club Tour",
    text: "Join a guided cycling journey through scenic Atlas roads and valleys with an organised cycling group.",
    image: "/images/group-cycling-atlas-mountains.jpg",
    href: "/cycling-trips/trip/atlas-cycling-club-tour-4-day",
  },
  {
    category: "FAMILY CYCLING",
    title: "Four-Day Family Atlas Explorer",
    text: "Explore Atlas landscapes on a private family cycling journey with a flexible pace and selected routes.",
    image: "/images/atlas-mountains-cycling-expedition.jpg",
    href: "/cycling-trips/trip/four-day-family-atlas-explorer",
  },
  {
    category: "PRIVATE E-MTB",
    title: "Private E-MTB Group Holiday",
    text: "Enjoy a private electric mountain-bike escape with a flexible itinerary through Morocco's mountain landscapes.",
    image: "/images/e-mtb-tour-holiday-morocco.jpg",
    href: "/cycling-trips/trip/private-e-mtb-group-holiday-3-to-5-day",
  },
];

export default function MixedAbilityPrivateCyclingBreakPage() {
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
        .atlas-tour #enquiry { background: var(--green); color: #fff; }
        .atlas-tour #enquiry .at-container { text-align: left; }
        .atlas-tour #enquiry .at-eyebrow { color: var(--gold-light); text-align: left; }
        .atlas-tour #enquiry .at-heading { color: #fff; text-align: left; }
        .atlas-tour #enquiry .at-enquiry-intro { max-width: 720px; margin: 0 0 32px; color: #e1e2d8; font-size: 15px; line-height: 1.9; text-align: left; }
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
          <img src={images.hero} alt="Private group cycling journey through Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · MIXED-ABILITY CYCLING · PRIVATE TOUR · 3–5 DAYS</span>
          <h1>Mixed Ability Private Cycling Break</h1>
          <p className="at-hero-description">
            Bring riders with different levels of fitness and experience together for a flexible
            three-to-five-day private cycling break. Explore selected Atlas roads, rural tracks
            and trails with a route plan shaped around your group's interests, confidence
            and preferred pace.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Private Cycling Break <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>3–5 DAYS</strong><span>Flexible private break</span></div>
            <div><strong>ATLAS REGION</strong><span>Routes for varied abilities</span></div>
            <div><strong>MIXED ABILITY</strong><span>Routes for varied abilities</span></div>
            <div><strong>PRIVATE TOUR</strong><span>Guided cycling</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>3 to 5 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Atlas Mountains, valleys and countryside</strong></div>
          <div className="at-fact"><span>Experience</span><strong>Different fitness and experience levels</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Private flexible cycling break</strong></div>
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
            <img src={images.overview} alt="High Atlas mountain landscapes in Morocco" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A PRIVATE CYCLING BREAK FOR DIFFERENT ABILITIES</span>
            <h2 className="at-heading">Explore Morocco Together on a Three-to-Five-Day Cycling Break</h2>
            <p className="at-copy">
              This private cycling break brings together riders with different levels of fitness, confidence and experience. Explore selected Atlas roads, rural tracks and trails with a programme discussed around your group's preferences, pace and available time.
            </p>
            <p className="at-copy">
              Discover selected paved Atlas roads, valley routes and rural landscapes. The exact stages, daily distances and climbing are chosen according to your riding style and local conditions.
            </p>
            <p className="at-copy">
              The route, distances, terrain, riding times, accommodation, meeting point and transfer arrangements will be discussed and confirmed after we understand your group's experience and preferences. Day 3 completes the core option; Days 4 and 5 can extend the journey.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the full itinerary →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR MIXED-ABILITY PRIVATE CYCLING BREAK</span>
            <h2 className="at-heading">Three to Five Days of Private Cycling in Morocco</h2>
            <p className="at-copy">
              Leave the city behind and enjoy a private cycling adventure through selected mountain and valley landscapes in Morocco, with route choices discussed around the group's different abilities.
            </p>
            <p className="at-copy">
              Enjoy a mix of suitable roads, tracks or trails selected for the group's interests and experience. The programme can include shorter or longer route choices where practical, with time for scenic stops and agreed regrouping points.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Private Cycling Tour</h3>
            <p>A flexible three-to-five-day private cycling experience in Morocco, planned around the different fitness levels, confidence and interests within your group.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>3–5 days</strong></li>
              <li><span>Destination</span><strong>Atlas Mountains, valleys and countryside</strong></li>
              <li><span>Tour format</span><strong>Private mixed-ability cycling break</strong></li>
              <li><span>Route style</span><strong>Adaptable routes across selected roads, tracks and trails</strong></li>
              <li><span>Travel style</span><strong>Private tour</strong></li>
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
              <h2 className="at-heading">Highlights of Your Mixed-Ability Private Cycling Break</h2>
            </div>
            <p>
              Enjoy three to five days exploring Morocco together, with route choices and daily distances discussed around the range of abilities in your private group.
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
            <img src={images.road} alt="A scenic cycling route through Morocco" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE &amp; TERRAIN</span>
            <h2 className="at-heading">Explore Morocco at Your Group’s Pace</h2>
            <p className="at-copy">
              The cycling terrain is selected after discussing the group's preferred style and experience. Depending on the agreed programme, stages may include suitable paved roads, gravel tracks or mountain-bike trails through valleys, villages and open landscapes.
            </p>
            <p className="at-copy">
              Surface conditions, gradients, technical difficulty and distances depend on the selected routes and local conditions. The aim is to create a rewarding private journey with realistic route choices, a comfortable rhythm and agreed regrouping arrangements where practical.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Flexible three-to-five-day private cycling break</li>
              <li><span>02</span>Routes discussed around different abilities and confidence levels</li>
              <li><span>03</span>Selected roads, tracks, trails and varied landscapes</li>
              <li><span>04</span>Flexible pacing with agreed breaks and regrouping points where practical</li>
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
              of this flexible three-to-five-day private cycling journey
              in Morocco.
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
          <img src={images.village} alt="Rural village landscape in Morocco" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover Morocco Beyond the Ride</h2>
          <p className="at-copy">
            Your cycling break is about more than the kilometres. Across three to five days, discover Morocco's changing landscapes, from mountain foothills and rural valleys to traditional villages and open countryside. Enjoy time outdoors, take scenic breaks and appreciate the places you explore together.
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
              <span className="at-eyebrow">CYCLING MOMENTS IN MOROCCO</span>
              <h2 className="at-heading">Explore Morocco Together by Bike</h2>
            </div>
            <p>
              Explore Atlas landscapes, traditional villages
              and rural tracks during your flexible
              three-to-five-day private cycling break.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="Cycling landscapes in the Atlas Mountains" /></div>
            <div className="at-gallery-item"><img src={images.road} alt="A scenic cycling route through Morocco" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional village in the Moroccan countryside" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Valley landscape along a road route in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Group cycling in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">THREE TO FIVE DAYS OF PRIVATE GROUP CYCLING</span>
              <h2 className="at-heading">Mixed-Ability Private Cycling Break Itinerary</h2>
            </div>
            <p>
              Choose three, four or five days of private cycling through selected Moroccan landscapes. Routes, distances, terrain and riding times are discussed around the group's different abilities and confirmed during planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines a flexible three-to-five-day private cycling break. Day 3 completes the core three-day option, while Days 4 and 5 are optional extensions. Exact routes, terrain, distances, riding times, accommodation, meeting point, finishing point and transfers depend on the programme agreed with you.
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
              <h2 className="at-heading">What Is Included in Your Private Cycling Break?</h2>
            </div>
            <p>
              Final inclusions are confirmed in your booking proposal. Check your personalised itinerary for guiding, bicycles, equipment, accommodation, transport and meals included in your private cycling break.
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
              <h2 className="at-heading">Preparing for Your Private Cycling Break</h2>
            </div>
            <p>
              Prepare your bicycles, equipment and overnight essentials for three to five days of cycling in Morocco.
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
            <img src={images.cycling} alt="Private group cycling in Morocco" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">A ROUTE FOR YOUR PRIVATE GROUP</span>
            <h2 className="at-heading">Difficulty and Riding Experience</h2>
            <p className="at-copy">
              The journey is planned as a private guided cycling experience. Difficulty depends on the selected surface, gradients, technical sections, daily distances, remoteness and local weather. The route needs to reflect the range of ability and experience within the group.
            </p>
            <p className="at-copy">
              Before confirming the routes, we need to understand each rider's cycling experience, fitness, confidence on different surfaces, bicycle setup and preferred pace. This helps us discuss suitable stages for the three-, four- or five-day option.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> Riders should be comfortable with the surfaces and distances selected for the group. Final suitability, route difficulty, daily distances, bicycle setup, regrouping arrangements and any additional guiding or support must be discussed and confirmed before booking.
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
              about your Mixed-Ability Private Cycling Break. Contact
              our team if you need more
              details before planning
              your private cycling holiday.
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
          <img src={images.final} alt="Private group cycling journey through Morocco" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR PRIVATE MOROCCO CYCLING BREAK STARTS HERE</span>
          <h2>Ready to Plan Your Private Cycling Break?</h2>
          <p>
            Tell us your preferred dates, group size, each rider’s experience and the type of cycling you enjoy. We can discuss suitable routes, daily distances, terrain, equipment, accommodation and transfers for your three-to-five-day private cycling break.
          </p>
          <a className="at-button" href="/contact">Plan Your Private Cycling Break <span>→</span></a>
        </div>
      </section>

      <section className="at-section" id="enquiry">
        <div className="at-container">
          <span className="at-eyebrow">START PLANNING YOUR RIDE</span>
          <h2 className="at-heading">
            Plan Your Mixed-Ability Private Cycling Break
          </h2>
          <p className="at-enquiry-intro">
            Tell us your preferred travel dates, group size and the cycling
            experience of each rider. Let us know your preferred terrain,
            daily distances and any bicycle, accommodation or transfer
            requirements. Our team will use these details to help plan a
            private Moroccan cycling break that suits your group.
          </p>
          <ContactEnquiryForm />
        </div>
      </section>

      <section className="at-related-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EXPLORE MORE</span>
              <h2 className="at-heading">More Private Cycling Adventures in Morocco</h2>
            </div>
            <p>
              Discover more ways to explore Morocco by bike, from Atlas mountain routes to family-friendly and group cycling journeys through the country's varied landscapes.
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
              rural valleys and unforgettable landscapes with
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
              <a href="/cycling-trips/road">Cycling</a>
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