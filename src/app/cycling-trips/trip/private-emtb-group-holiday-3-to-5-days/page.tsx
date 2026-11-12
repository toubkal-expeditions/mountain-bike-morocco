
import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Private E-MTB Group Holiday in Morocco – 3 to 5 Days | Mountain Bike Morocco",
  description:
    "Plan a private 3 to 5-day e-MTB holiday in Morocco's Atlas Mountains. Ride guided mountain trails and valley routes with a programme tailored to your group's experience, preferred pace and dates.",
  alternates: {
    canonical: "/cycling-trips/trip/private-emtb-group-holiday-3-to-5-days",
  },
};

const images = {
  hero: "/images/e-mtb-tour-morocco.jpg",
  overview: "/images/atlas-mountains-ebike-tour.jpg",
  mountains: "/images/eBike-tour-atlas-mountains-morocco.jpg",
  road: "/images/e-mtb-tour-from-marrakech.jpg",
  village: "/images/ouirgane-valley-ebike-tour.jpg",
  valley: "/images/atlas_mountain_ebike_tour_3days-2.jpg",
  cycling: "/images/scott-ebike-tour-morocco.jpg",
  final: "/images/deluxe-ebike-tour-morocco.jpg",
};

const facts = [
  ["Duration", "3 to 5 days / 2 to 4 nights"],
  ["Destination", "Atlas Mountains and surrounding valleys, Morocco"],
  ["Starting point", "Marrakech or an agreed Atlas meeting point"],
  ["Cycling style", "Guided electric mountain biking (E-MTB)"],
  ["Difficulty", "Adapted to the group's riding ability and chosen trails"],
  ["Experience", "Suitable for riders comfortable on mountain-bike trails"],
  ["Tour format", "Private group holiday"],
  ["Accommodation", "Selected and confirmed with your trip proposal"],
  ["Best season", "Spring and autumn; conditions vary by altitude"],
];

const highlights = [
  { number: "01", title: "A Private Ride for Your Group", text: "Enjoy a dedicated E-MTB holiday planned around your own group, preferred dates, riding experience and the kind of mountain-bike terrain you want to explore." },
  { number: "02", title: "Explore the High Atlas by E-MTB", text: "Ride selected mountain tracks, valley trails and scenic routes with electric assistance helping you manage longer climbs and enjoy more time exploring." },
  { number: "03", title: "Choose Three, Four or Five Days", text: "Shape the holiday around your schedule. Choose a three-day escape or add further riding days for a longer Atlas experience." },
  { number: "04", title: "Ride at a Group-Friendly Pace", text: "Your guide can discuss suitable routes, regrouping points and daily objectives after learning about the group's fitness, trail skills and E-MTB experience." },
];

const beyondTrail = [
  { title: "Mountain Landscapes", text: "Discover the changing scenery of the High Atlas, from rugged slopes and high viewpoints to quieter mountain tracks selected for your group." },
  { title: "Valleys and Berber Villages", text: "Ride through selected valley landscapes and rural communities, with time to appreciate the region beyond the trails." },
  { title: "More Riding with Electric Assist", text: "E-MTB assistance can make sustained climbs more manageable, while route choice and assistance settings still need to suit each rider and bike." },
  { title: "Your Own Group Experience", text: "Keep the holiday private, with dates, daily ride length, trail character and rest stops discussed directly with your guide." },
];

const itinerary = [
  { day: "01", title: "Arrive in the Atlas – Bike Setup and First Trails", location: "Marrakech and the selected Atlas riding area", distance: "To be confirmed", riding: "Arrival, E-MTB checks and introductory ride", image: "/images/e-mtb-tour-holiday-morocco.jpg", text: "Meet your guide at the agreed point and travel to the selected Atlas riding area if this transfer is part of your package. Check the E-MTBs, battery condition, brakes, tyres and rider equipment before heading out for an introductory ride suited to the group's arrival time and ability.", details: ["Meet your guide and review the private holiday plan", "Check each E-MTB, battery, charger and riding equipment", "Discuss assistance modes, range and battery management", "Enjoy an introductory trail ride if timing and conditions allow", "Review the following day's route and arrangements"] },
  { day: "02", title: "Atlas Mountain Trails – A Full Day on the E-MTB", location: "Selected High Atlas mountain and valley trails", distance: "To be confirmed", riding: "Guided E-MTB trail ride", image: "/images/atlas_mountain_ebike_tour_3days-6.jpg", text: "Set out on a longer guided ride through the Atlas terrain chosen for your group's skills. The day may combine mountain tracks, flowing trail sections and scenic climbs. Your guide will set the route and pace around the group's confidence, battery range and local trail conditions.", details: ["Check weather, trail conditions and battery charge", "Ride the selected mountain route with your private guide", "Use planned regrouping and refreshment stops", "Manage battery use in line with the day's climbing and distance", "Return to the agreed accommodation or meeting point"] },
  { day: "03", title: "Valley Routes and a Three-Day Holiday Finish", location: "Selected Atlas valley and trail network", distance: "To be confirmed", riding: "Guided E-MTB ride; three-day option concludes", image: "/images/group-emtb-tour-morocco.jpg", text: "Explore a different part of the selected riding area, with a route shaped around the group's interests and the previous days' riding. For the three-day option, this is the final ride before the agreed departure arrangements. Groups staying longer can continue with the optional additional stages below.", details: ["Choose a route that complements the first two days", "Ride selected valley trails and connecting tracks", "Take time for scenic stops and a relaxed lunch break", "For the three-day option, prepare for the confirmed departure", "For longer holidays, review the next stage with your guide"] },
  { day: "04", title: "Optional Extra Day – New Trails and Higher Viewpoints", location: "An additional Atlas route selected for the group", distance: "To be confirmed", riding: "Optional guided E-MTB ride for four-day holidays", image: "/images/e-bike-tour-atlas-mountains.jpg", text: "Add a fourth day to extend the holiday with another route in the Atlas region. Depending on weather, trail access and group ability, your guide can select a new valley, mountain track or viewpoint ride. This stage is included in the four- and five-day options only when confirmed in your itinerary.", details: ["Review the group's energy and preferred ride length", "Select a suitable additional trail route with the guide", "Ride at a pace that works for the whole group", "Allow time for breaks and photographs", "Four-day option concludes after the agreed ride"] },
  { day: "05", title: "Optional Final Ride – A Last Atlas Adventure", location: "Selected final trail area in the Atlas region", distance: "To be confirmed", riding: "Optional guided E-MTB ride for five-day holidays", image: "/images/saghro-morocco-e-bike-tour.jpg", text: "For the five-day holiday, enjoy one final guided ride selected to round off the trip. The route may focus on a favourite trail style or a different landscape, depending on the group's preferences and current conditions. After the ride, follow the confirmed transfer or departure arrangements.", details: ["Confirm the final route and battery plan with your guide", "Enjoy the last selected E-MTB trails of the holiday", "Return bikes and chargers if rental equipment is used", "Prepare luggage for the agreed onward transfer", "Conclude your private E-MTB group holiday"] },
];

const inclusions = [
  "Private E-MTB holiday planning and route coordination",
  "Local guide for the rides as specified in your proposal",
  "Three, four or five-day programme according to the option booked",
  "Selected Atlas mountain and valley riding stages",
  "E-MTB rental, battery and charger only if specifically included",
  "Helmet and protective equipment only when listed in your proposal",
  "Accommodation only when confirmed in the booking details",
  "Transfers from Marrakech or between riding areas only when confirmed",
  "Meals, refreshments and support vehicle only as detailed in your proposal",
  "Mechanical assistance and luggage handling only as specified",
];

const exclusions = [
  "International flights and travel to Morocco",
  "Travel insurance and personal accident cover",
  "E-MTB rental unless included in your proposal",
  "Personal cycling clothing, shoes and protective equipment unless listed",
  "Transfers unless specifically confirmed",
  "Accommodation unless included in the written itinerary",
  "Meals and drinks not specified in the proposal",
  "Personal expenses and tips",
  "Additional activities or extra riding days not booked",
  "Services not specifically listed in your confirmed arrangements",
];

const preparation = [
  { title: "Tell Us About Every Rider", text: "Share the group size, mountain-bike experience, trail confidence, fitness and any differences in ability. Let us know whether everyone has ridden an E-MTB before so the route and pace can be discussed properly." },
  { title: "Understand E-MTB Range", text: "Battery range depends on rider weight, terrain, elevation, assistance mode, temperature and battery condition. Your guide will help plan suitable stages and charging arrangements, but the daily route must be matched to the actual bikes being used." },
  { title: "Bring Suitable Trail Equipment", text: "Bring a correctly fitting helmet, gloves, suitable footwear, eye protection and comfortable riding clothing. Knee and elbow protection are recommended for riders tackling more technical trails." },
  { title: "Prepare for Mountain Conditions", text: "Temperatures can change with altitude and weather. Pack layers, sun protection, a lightweight waterproof jacket and personal water capacity, and confirm what equipment is supplied before travelling." },
];

const faqs = [
  { q: "Can we choose a three-, four- or five-day holiday?", a: "Yes. The programme is designed to be flexible: the first three days form the core option, with a fourth and fifth riding day added for longer holidays. The exact sequence and departure arrangements will be confirmed in your proposal." },
  { q: "Is this a private group tour?", a: "Yes, this page describes a private group holiday. Your dates, group size, guide arrangements and riding plan are discussed for your group rather than joining a scheduled public departure." },
  { q: "Do all riders need E-MTB experience?", a: "Previous E-MTB experience is helpful but not always essential. Riders should have suitable mountain-bike handling skills for the selected trails. Tell us about each rider so the route and introductory briefing can be matched to the group." },
  { q: "Can we bring our own electric mountain bikes?", a: "You can discuss bringing your own bikes when enquiring. Confirm transport, battery and charger arrangements in advance. Rental may be available if the correct sizes and models are confirmed for your dates." },
  { q: "Are E-MTBs and batteries included?", a: "Bike rental is included only when it is specifically listed in your written proposal. If you bring your own bikes, discuss charging, battery transport and compatibility before travel." },
  { q: "How difficult are the trails?", a: "Difficulty depends on trail surface, gradient, exposure, technical features, weather and the riders' skills. Electric assistance helps on climbs but does not remove the need for good bike handling. The route should be agreed after reviewing the group's experience." },
  { q: "Where does the holiday take place?", a: "The programme focuses on selected Atlas mountain and valley riding areas. The precise base, trails, meeting point and any transfers from Marrakech are confirmed according to your dates and preferences." },
  { q: "Are accommodation, meals and transfers included?", a: "They are included only when specified in your confirmed proposal. Your itinerary will set out the accommodation, meals, transfers, bike arrangements and any additional support." },
  { q: "What is the best time of year for an E-MTB holiday?", a: "Spring and autumn are often comfortable periods for riding, but conditions vary with altitude and weather. The most suitable dates and trail areas should be checked when planning your trip." },
];

const relatedTours = [
  {
    category: "E-MTB ADVENTURE",
    title: "Atlas Mountains E-Bike Tour",
    text: "Explore mountain tracks and scenic valleys with electric assistance on a guided Atlas ride.",
    image: "/images/group-ebike-tour-morocco.jpg",
    href: "/cycling-trips/trip/atlas-mountains-e-bike-tour-4-day",
  },
  {
    category: "E-MTB FROM MARRAKECH",
    title: "E-MTB Tour from Marrakech",
    text: "Escape the city for a guided electric mountain-bike experience in the nearby Atlas region.",
    image: "/images/e-bike-day-tour-atlas-morocco.jpg",
    href: "/cycling-trips/trip/marrakech-emtb-adventure-1-day",
  },
  {
    category: "MULTI-DAY E-MTB",
    title: "Atlas to Desert E-MTB Tour",
    text: "Discover a longer electric mountain-bike journey through changing landscapes in Morocco.",
    image: "/images/atlas-to-desert-e-mtb-tour.jpg",
    href: "/cycling-trips/trip/atlas-and-desert-emtb-tour-8-day",
  },
];

export default function PrivateEMTBGroupHolidayPage() {
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
        .atlas-tour .at-enquiry-section { background: var(--green); }
        .atlas-tour .at-enquiry-section .at-eyebrow,
        .atlas-tour .at-enquiry-section .at-heading,
        .atlas-tour .at-enquiry-section .at-section-head > p { color: #fff !important; }
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
          <img src={images.hero} alt="E-MTB rider exploring a trail in Morocco's Atlas Mountains" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · PRIVATE E-MTB GROUP HOLIDAY · 3 TO 5 DAYS</span>
          <h1>Private E-MTB Group Holiday in Morocco</h1>
          <p className="at-hero-description">
            Explore the Atlas Mountains on a private electric mountain-bike holiday lasting three to five days.
            Ride selected trails and valley routes with your own guide, with the programme
            shaped around your group's trail skills, preferred pace and travel dates.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Private E-MTB Holiday <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>3–5 DAYS</strong><span>Private E-MTB escape</span></div>
            <div><strong>ATLAS MOUNTAINS</strong><span>Mountain trails & valleys</span></div>
            <div><strong>PRIVATE</strong><span>Your group, your pace</span></div>
            <div><strong>PRIVATE TOUR</strong><span>Guided trail riding</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>3 to 5 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Atlas Mountains and valleys</strong></div>
          <div className="at-fact"><span>Experience</span><strong>Private E-MTB Group Holiday</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Private Guided E-MTB</strong></div>
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
            <img src={images.overview} alt="Atlas mountain landscapes in Morocco" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">PRIVATE ELECTRIC MOUNTAIN BIKING IN THE ATLAS</span>
            <h2 className="at-heading">Ride the Atlas on a Private E-MTB Holiday</h2>
            <p className="at-copy">
              This private E-MTB holiday gives your group three to five days to explore selected trails and mountain routes in Morocco’s Atlas region. Ride with your own guide and shape the programme around your preferred terrain and ability.
            </p>
            <p className="at-copy">
              Electric assistance can make sustained climbs more manageable and open up longer trail days. The exact routes, daily distances and elevation are selected around your group’s skills, battery range and local conditions.
            </p>
            <p className="at-copy">
              Choose a three-day escape or extend the holiday to four or five days. Trail choices, accommodation, meeting point, bike arrangements and transfers are discussed and confirmed after we understand your group’s needs.
            </p>
            <a className="at-text-link" href="#itinerary">Explore the flexible itinerary →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE ATLAS E-MTB HOLIDAY</span>
            <h2 className="at-heading">Three to Five Days of Atlas E-MTB Riding</h2>
            <p className="at-copy">
              Leave the city behind and explore the Atlas Mountains on a private guided electric mountain-bike holiday.
            </p>
            <p className="at-copy">
              Ride selected mountain trails and valley routes over three to five days, with time for scenic stops and regrouping. The programme is planned around your group’s trail experience, preferred pace and daily riding goals.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Private E-MTB Group Holiday</h3>
            <p>A private three-to-five-day electric mountain-bike holiday in the Atlas, with guided trails and daily stages planned around your group's riding ability and preferences.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>3 to 5 days</strong></li>
              <li><span>Destination</span><strong>Atlas Mountains and valleys</strong></li>
              <li><span>Tour format</span><strong>Private guided E-MTB riding</strong></li>
              <li><span>Route style</span><strong>Mountain trails and valley routes</strong></li>
              <li><span>Travel style</span><strong>Private group</strong></li>
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
              <h2 className="at-heading">Highlights of Your Private E-MTB Group Holiday</h2>
            </div>
            <p>
              Enjoy three to five days of guided E-MTB riding, Atlas scenery and selected mountain trails on a private programme designed around your group.
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
            <img src={images.road} alt="E-MTB rider on a mountain trail in the Atlas" />
          </div>
          <div>
            <span className="at-eyebrow">E-MTB TRAILS &amp; TERRAIN</span>
            <h2 className="at-heading">Ride Atlas Mountain Trails with Electric Assist</h2>
            <p className="at-copy">
              The holiday focuses on selected E-MTB routes in the Atlas region. Depending on the agreed programme and the group’s ability, rides may include mountain tracks, natural singletrack, valley trails and connecting paths through rural settlements.
            </p>
            <p className="at-copy">
              Trail surfaces, gradients, technical features and distances depend on the selected routes and local conditions. Electric assistance supports climbing, but riders still need the handling skills to manage the chosen terrain. Your guide will agree a suitable pace and regrouping plan.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Private three-to-five-day E-MTB holiday</li>
              <li><span>02</span>Trails selected around group ability and pace</li>
              <li><span>03</span>Atlas singletrack, mountain tracks and valley trails</li>
              <li><span>04</span>Private guide with planned regrouping and breaks</li>
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
              of this private three-to-five-day E-MTB holiday
              in Morocco’s Atlas Mountains.
              Trail choices, bike arrangements,
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
          <img src={images.village} alt="Traditional village in Morocco's Atlas Mountains" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover the Atlas Beyond the Trails</h2>
          <p className="at-copy">
            Your holiday is about more than the kilometres. Between rides, discover the landscapes and rural atmosphere of the Atlas Mountains, enjoy time outdoors and explore selected village surroundings at a relaxed pace.
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
              <span className="at-eyebrow">PRIVATE E-MTB RIDING MOMENTS</span>
              <h2 className="at-heading">Explore the Atlas on an E-MTB</h2>
            </div>
            <p>
              Discover mountain trails, traditional
              villages and open landscapes
              across the Atlas during your
              private E-MTB holiday.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="E-MTB riding scenery in Morocco’s Atlas Mountains" /></div>
            <div className="at-gallery-item"><img src={images.road} alt="E-MTB rider on a mountain trail in the Atlas" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional village in the Atlas region of Morocco" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Atlas valley landscape in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="E-MTB group riding in the Atlas Mountains" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">THREE TO FIVE DAYS OF PRIVATE E-MTB RIDING</span>
              <h2 className="at-heading">Private E-MTB Group Holiday Itinerary</h2>
            </div>
            <p>
              Choose a three-, four- or five-day private E-MTB programme in the Atlas. Daily trails, distances, climbing and riding times are confirmed during planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary shows a flexible five-day framework. The three-day option finishes after Day 3; the four-day option adds Day 4; and the five-day option includes all stages. Exact routes, distances, riding times, accommodation, meeting point and transfer arrangements depend on the programme agreed with your group.
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
              <h2 className="at-heading">What Is Included in Your Private E-MTB Group Holiday?</h2>
            </div>
            <p>
              Final inclusions are confirmed in your booking proposal. Check your personalised itinerary for guiding, E-MTBs, batteries, equipment, accommodation, transport and meals included in your private holiday.
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
              <h2 className="at-heading">Preparing for Your Private E-MTB Group Holiday</h2>
            </div>
            <p>
              Prepare your E-MTB equipment, riding kit and overnight essentials for three to five days in the Atlas Mountains.
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
            <img src={images.cycling} alt="E-MTB riders enjoying a guided trail in Morocco" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">TRAILS FOR YOUR PRIVATE GROUP</span>
            <h2 className="at-heading">Difficulty and Riding Experience</h2>
            <p className="at-copy">
              The holiday is planned as a private guided E-MTB experience. Difficulty depends on the selected trails, gradients, technical features, daily distances and local conditions, and must be matched to the skills of the riders taking part.
            </p>
            <p className="at-copy">
              Before confirming the routes, we need to understand each rider’s mountain-bike and E-MTB experience, fitness, trail confidence and preferred pace. This helps us select suitable stages and plan battery use across three to five days.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> All riders should have the bike-handling skills required for the selected trails and be comfortable managing an electric mountain bike. Electric assistance does not remove technical trail difficulty. Final suitability, route difficulty, battery arrangements, daily distances, equipment and support must be discussed and confirmed before booking.
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
              about your private E-MTB group holiday. Contact
              our team if you need more
              details before planning
              your three-to-five-day E-MTB holiday.
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
          <img src={images.final} alt="Private E-MTB adventure in Morocco’s Atlas Mountains" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR PRIVATE ATLAS E-MTB HOLIDAY STARTS HERE</span>
          <h2>Ready to Plan Your Private E-MTB Holiday?</h2>
          <p>
            Tell us your preferred dates, group size, riders’ experience and trail preferences. We can discuss suitable routes, daily distances, climbing, E-MTB rental, battery and charging arrangements, accommodation and transfers for your three-to-five-day private holiday.
          </p>
          <a className="at-button" href="/contact">Plan Your Private E-MTB Holiday <span>→</span></a>
        </div>
      </section>

      <section className="at-section at-enquiry-section" id="enquiry">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">PLAN YOUR PRIVATE E-MTB HOLIDAY</span>
              <h2 className="at-heading">
                Enquire About Your Private Group E-MTB Holiday
              </h2>
            </div>
            <p>
              Tell us your preferred dates, group size, cycling experience,
              E-MTB requirements and the Atlas trails you would like to
              explore. We can discuss suitable routes, daily distances,
              accommodation, equipment, transfers and support for your
              private three-to-five-day E-MTB holiday.
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
              <h2 className="at-heading">More E-MTB Adventures in Morocco</h2>
            </div>
            <p>
              Discover more ways to explore Morocco by electric mountain bike, from day rides near Marrakech to multi-day Atlas and desert adventures.
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
              Discover Morocco by bike. Explore the Atlas Mountains and surrounding valleys,
              rural valleys and unforgettable landscapes with
              Mountain Bike Morocco.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <div className="at-footer-links">
              <a href="/cycling-trips">All Cycling Tours</a>
              <a href="/cycling-trips/mtb">Mountain Bike Tours</a>
              <a href="/cycling-trips/e-mtb">E-cycling Tours</a>
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
