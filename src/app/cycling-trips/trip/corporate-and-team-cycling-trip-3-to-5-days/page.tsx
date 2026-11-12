import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Corporate and Team Cycling Trip – 3 to 5 Days | Mountain Bike Morocco",
  description:
    "Bring colleagues together in Morocco for a 3 to 5day corporate cycling trip in the Atlas region. Build shared experiences through guided rides, scenic breaks and a programme planned around your team's experience and objectives.",
  alternates: {
    canonical: "/cycling-trips/trip/corporate-and-team-cycling-trip-3-to-5-days",
  },
};

const images = {
  hero: "/images/group-events-cycling-morocco.JPG",
  overview: "/images/cycling-group-events-morocco.jpg",
  mountains: "/images/group-cycling-atlas-mountains.jpg",
  road: "/images/adventure-cycling-morocco.jpg",
  village: "/images/lunch-spot-cycling-morocco.jpg",
  valley: "/images/atlas-valley-cycling-morocco.jpg",
  cycling: "/images/morocco-group-cycling-adventure.jpg",
  final: "/images/mountain-bike-morocco-team.JPG",
};

const facts = [
  ["Duration", "3 to 5 days"],
  ["Destination", "Marrakech and the Atlas region – route to be agreed"],
  ["Region", "Marrakech, Atlas foothills and selected mountain areas"],
  ["Starting point", "Marrakech – exact meeting point to be confirmed"],
  ["Cycling style", "Guided road, gravel or MTB routes by agreement"],
  ["Difficulty", "Selected around the team's cycling experience"],
  ["Experience", "Designed for company teams and organised groups; rider profiles to be discussed"],
  ["Tour format", "Private corporate or team programme"],
  ["Best season", "Spring and autumn, subject to weather and route conditions"],
];

const highlights = [
  { number: "01", title: "Bring Your Team Together Beyond the Office", text: "Create a shared experience outside the workplace with a guided cycling programme in Morocco. A multi-day journey gives colleagues time to ride together, enjoy the landscape and connect in a different setting." },
  { number: "02", title: "A Programme Shaped Around Your Team", text: "Discuss your team's size, cycling confidence, preferred riding style and event objectives before the route is selected. The daily pace and ride format can be planned around the people taking part." },
  { number: "03", title: "Morocco's Atlas Landscapes as Your Backdrop", text: "Explore selected roads, gravel tracks or mountain-bike routes around Marrakech and the Atlas region. The precise riding areas and route profiles will be confirmed in the event proposal." },
  { number: "04", title: "Three Days with Optional Extensions", text: "Start with a three-day team cycling break and discuss extending the programme to four or five days. Additional days can include further rides, scenic pauses and team time according to the agreed schedule." },
];

const beyondTrail = [
  { title: "Shared Goals on the Road", text: "A team ride creates a common experience in which colleagues can support one another, share the effort and enjoy progress together. The route and pace should suit the team's agreed ability range." },
  { title: "A Different Setting for Team Connection", text: "Step away from the usual work environment and spend time together among the landscapes around Marrakech and the Atlas foothills." },
  { title: "Time for Conversation and Scenic Breaks", text: "Build in suitable pauses for refreshments, photographs and informal conversation. Any meeting, workshop or facilitated team-building activity should be arranged and confirmed separately." },
  { title: "A Private Programme for Your Organisation", text: "Plan a dedicated departure for your company, department, clients or leadership group. Group size, dates, services and event logistics will be confirmed in a tailored proposal." },
];

const itinerary = [
  { day: "01", title: "Arrive in Marrakech and Begin the Team Cycling Experience", location: "Marrakech – selected Atlas riding area", distance: "To be confirmed", riding: "Introductory team ride – route to be agreed", image: images.overview, text: "Meet the local team at the agreed location and review the programme, riding expectations and practical arrangements. Depending on the route selected, transfer to a suitable starting area around Marrakech or the Atlas foothills. Check bicycles and equipment, agree the group riding pace and set out on an introductory ride. Allow time for scenic pauses and a relaxed finish. Any accommodation, meals, meeting facilities or evening activities will follow the arrangements confirmed in your corporate proposal.", details: ["Meet the guide and event coordinator at the agreed location", "Review the schedule, safety briefing and group riding plan", "Check bicycles, helmets and personal equipment", "Transfer to the selected riding area if included", "Enjoy an introductory team ride at an agreed pace", "Pause for photographs and refreshments as arranged", "Finish the ride and follow the confirmed evening programme"] },
  { day: "02", title: "Ride Together Through the Atlas Foothills", location: "Marrakech region – route to be confirmed", distance: "To be confirmed", riding: "Guided team ride – selected road, gravel or MTB route", image: images.road, text: "After breakfast if included in your arrangements, meet the guide for the main riding day. The route may use quiet roads, gravel tracks or mountain-bike terrain, depending on your team's experience and the event brief. The guide will explain the route and regrouping plan before departure. Build in suitable breaks so colleagues can ride at a comfortable pace and enjoy the scenery. Daily distance, elevation and riding time will be agreed before the trip.", details: ["Review the day's route and regrouping arrangements", "Prepare bicycles and riding equipment", "Set out on the agreed team cycling route", "Ride at a pace suited to the confirmed group profile", "Include planned regrouping and refreshment stops", "Enjoy time together in the Atlas landscape", "Return to the agreed finishing point"] },
  { day: "03", title: "Complete the Three-Day Team Cycling Break", location: "Marrakech and the Atlas region – return plan to be confirmed", distance: "To be confirmed", riding: "Final core team ride – selected route", image: images.mountains, text: "Enjoy the final day of the three-day programme with a route selected around the team's interests and the conditions. After a briefing and equipment check, set out for a final team ride with time for scenic stops and a shared finish. The programme can conclude in the Atlas region or return towards Marrakech, depending on the transfer and event arrangements confirmed in advance. Teams extending to four or five days continue with the optional programme below.", details: ["Confirm the final-day schedule with the event lead", "Check bicycles and equipment before departure", "Ride the selected final route as a team", "Allow time for a group stop and photographs", "Complete the three-day core programme", "Follow the agreed return or onward arrangements"] },
  { day: "04", title: "Optional Extension – Add Another Day of Team Riding", location: "Marrakech region or Atlas area – to be agreed", distance: "To be confirmed", riding: "Optional guided team ride", image: images.valley, text: "For organisations choosing the four-day option, add another day of cycling in an area selected during planning. The ride may explore a different landscape or use a route suited to the team's preferred cycling style. The day's schedule can include appropriate breaks and time together off the bike. Any additional meeting or team activity must be agreed and confirmed as part of the event plan.", details: ["Continue with the four-day extension", "Review the additional route and schedule", "Prepare equipment for the selected ride", "Enjoy another guided team cycling experience", "Include planned breaks and shared time", "Finish at the agreed location"] },
  { day: "05", title: "Optional Extension – Final Ride and Team Departure", location: "Atlas region – return to Marrakech as agreed", distance: "To be confirmed", riding: "Optional final team ride", image: images.cycling, text: "Choose the five-day option for one more day of riding and time together in Morocco. The final route will be selected around the team's experience, interests and local conditions. After the ride, regroup at the agreed finishing point and follow the departure or onward transfer arrangements included in your confirmed proposal.", details: ["Begin the final day of the five-day programme", "Confirm route conditions and departure timing", "Enjoy a final selected ride with the group", "Allow time for a team photograph and closing stop", "Complete the cycling programme", "Follow the confirmed transfer and departure arrangements"] },
];

const inclusions = [
  "Corporate or team cycling programme for three to five days as confirmed in your proposal",
  "Initial discussion of team size, rider experience and event objectives",
  "Route planning for the agreed cycling style and team profile",
  "Local cycling guide when specified in your proposal",
  "Event coordination or additional support only when listed in your proposal",
  "Bicycle rental and helmets if specifically included",
  "Transfers from Marrakech if specified in your proposal",
  "Accommodation, meals and refreshments only when listed in your proposal",
  "Meeting space, facilitation or team activities only when expressly confirmed",
];

const exclusions = [
  "International and domestic flights", "Travel insurance and personal medical expenses", "Bicycles unless included in your proposal", "Personal cycling clothing and equipment", "Helmets and protective equipment unless confirmed", "Transfers unless specifically included", "Accommodation unless listed in your proposal", "Meals, drinks and refreshments not specified", "Meeting rooms, workshops or facilitators unless confirmed", "Personal expenses and tips", "Additional activities or services not listed in your proposal",
];

const preparation = [
  { title: "Define Your Team and Event Objectives", text: "Share the expected number of participants, preferred dates, rider experience and the purpose of the event. Let us know whether the priority is a shared cycling experience, client hospitality, a company break or a wider programme with other activities." },
  { title: "Choose the Right Cycling Format", text: "Discuss whether road cycling, gravel riding or cycling best suits your team. The selected format should reflect the team's experience, confidence, fitness and the routes available for your dates." },
  { title: "Confirm Equipment and Rider Details", text: "Provide participant heights and any bicycle requirements if rental is requested. Riders should bring suitable clothing, footwear, a correctly fitting helmet where not supplied, water and personal sun protection." },
  { title: "Plan the Event Logistics", text: "Confirm arrival times, transfers, accommodation, meals, dietary requirements and any non-cycling activities in advance. Meeting facilities, workshops and facilitated team-building sessions are not assumed unless included in the written proposal." },
];

const faqs = [
  { q: "How long is the Corporate and Team Cycling Trip?", a: "The programme is designed for three to five days. The three-day itinerary is the core option, with optional extensions to four or five days. The final schedule will be confirmed in your corporate proposal." },
  { q: "Who is this trip suitable for?", a: "It can be planned for company teams, departments, leadership groups, clients or organised work groups. Share the participant profile and cycling experience so that an appropriate format can be discussed." },
  { q: "Can participants have different cycling abilities?", a: "Please provide an overview of the team's experience and confidence. Route choice, pace and any group split or alternative activity must be discussed and confirmed before booking; separate guides or support are not assumed unless specified." },
  { q: "Can we choose road, gravel or mountain biking?", a: "The cycling style can be discussed during planning. The suitable option will depend on the team's experience, preferred terrain, available routes and local conditions." },
  { q: "Can the trip include team-building activities?", a: "The cycling journey itself provides a shared team experience. Workshops, facilitated team-building sessions, meeting rooms or other activities can be discussed, but are only included if specifically confirmed in the proposal." },
  { q: "Can we organise a private departure for our company?", a: "Yes, you can enquire about a dedicated programme for your organisation. Dates, team size, route plan, staffing and services will need to be confirmed." },
  { q: "How many people can take part?", a: "A fixed group-size limit is not specified here. Tell us the expected number of participants so that suitable routes, guiding and logistics can be discussed." },
  { q: "Where does the trip start?", a: "Marrakech is the proposed meeting point. The exact location, transfer arrangements and riding area will be confirmed in your event itinerary." },
  { q: "Are bicycles and helmets provided?", a: "Rental bicycles and helmets may be discussed, but availability, sizes and inclusion must be confirmed in writing. Please share participant heights and bicycle preferences when enquiring." },
  { q: "Are accommodation and meals included?", a: "Accommodation, meals and refreshments depend on the programme selected. Your proposal should list the overnight arrangements and exactly which meals and services are included." },
  { q: "Can you arrange transfers from Marrakech?", a: "Transfers can be discussed as part of the event logistics. Share your arrival details and accommodation location so the required transport can be included in the proposal if available." },
  { q: "What happens if some colleagues do not cycle?", a: "Please mention non-riding participants when enquiring. Any alternative activities, transfers or spectator arrangements need to be discussed and confirmed separately." },
  { q: "What is the best season for a team cycling trip in Morocco?", a: "Spring and autumn are often considered for cycling in the region, but conditions vary by route and date. The proposed riding areas and schedule should be checked for your preferred travel period." },
  { q: "How do we request a corporate proposal?", a: "Contact the team with your preferred dates, expected team size, participant experience, preferred cycling style and any event requirements. These details will help shape a programme and clarify the services to be quoted." },
];

const relatedTours = [
  { category: "TEAM CYCLING", title: "Atlas Cycling Club Tour", text: "Bring riders together for a guided multi-day cycling experience among Morocco's Atlas landscapes.", image: "/images/group-cycling-atlas-mountains.jpg", href: "/cycling-trips/trip/atlas-cycling-club-tour-4-day" },
  { category: "MARRAKECH CYCLING", title: "Marrakech Group Cycling Escape", text: "Explore the countryside around Marrakech on a flexible team cycling break.", image: "/images/group-cycling-tour-morocco.jpg", href: "/cycling-trips/trip/marrakech-group-cycling-escape-2-to-4-day" },
  { category: "PRIVATE CYCLING", title: "Mixed Ability Private Cycling Break", text: "Plan a private cycling journey with route choices discussed around different rider abilities.", image: "/images/morocco-group-cycling-adventure.jpg", href: "/cycling-trips/trip/mixed-ability-private-cycling-break-3-to-5-day" },
];

export default function CorporateAndTeamCyclingTrip3To5DaysPage() {
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
          <img src={images.hero} alt="Scenic Marrakech and the Atlas region in the High Atlas Mountains of Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · MARRAKECH · ATLAS REGION · CORPORATE TEAM CYCLING · 3 TO 5 DAYS</span>
          <h1>Corporate and Team Cycling Trip</h1>
          <p className="at-hero-description">
            Bring your colleagues together
            for three to five days of cycling
            around Marrakech and the Atlas region.
            Discover scenic roads, gravel tracks
            and mountain landscapes
            on a guided programme planned
            around your team's experience,
            event objectives and preferred pace.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Team Cycling Trip <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>03–05 DAYS</strong><span>Team cycling journey</span></div>
            <div><strong>MOROCCO</strong><span>Atlas region</span></div>
            <div><strong>PRIVATE</strong><span>Company departure</span></div>
            <div><strong>TEAM</strong><span>Shared experience</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>3–5 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Marrakech and the Atlas region</strong></div>
          <div className="at-fact"><span>Experience</span><strong>Team Cycling Experience</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Guided Cycling</strong></div>
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
            <img src={images.overview} alt="Mountain landscapes and countryside in Marrakech and the Atlas region" />
          </div>
          <div className="at-overview-content">
            <span className="at-eyebrow">A THREE-TO-FIVE-DAY CORPORATE TEAM CYCLING ESCAPE</span>
            <h2 className="at-heading">Discover Morocco Together on a Team Cycling Trip</h2>
            <p className="at-copy">
              The Corporate and Team Cycling Trip is a private three-to-five-day
              cycling programme for colleagues, clients or organised teams
              who want to share an active experience
              in Morocco beyond the workplace.
            </p>
            <p className="at-copy">
              Choose from suitable road, gravel or mountain-bike routes
              around Marrakech and the Atlas region.
              The riding format, route profile and pace
              will be discussed around your team's
              experience and event objectives.
            </p>
            <p className="at-copy">
              Routes for each riding day, distances,
              riding durations, accommodation,
              meeting point and transfer
              arrangements will be discussed
              and confirmed after we
              understand your team's
              experience and needs.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the three-to-five-day journey →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR THREE-TO-FIVE-DAY CORPORATE CYCLING EXPERIENCE</span>
            <h2 className="at-heading">Three to Five Days of Cycling, Valley Landscapes and Time Together</h2>
            <p className="at-copy">
              Step away from the usual work setting
              and share a cycling experience
              in the landscapes around
              Marrakech and the Atlas region.
            </p>
            <p className="at-copy">
              The programme can combine guided rides,
              scenic pauses and time together off the bike.
              Routes and daily schedules are planned
              around participant experience,
              preferred cycling style and
              the requirements agreed for your event.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Corporate and Team Cycling Trip</h3>
            <p>A private three-to-five-day cycling programme around Marrakech and the Atlas region, shaped around your team and event objectives.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>3–5 days</strong></li>
              <li><span>Destination</span><strong>Marrakech and the Atlas region</strong></li>
              <li><span>Tour format</span><strong>Team cycling journey</strong></li>
              <li><span>Route style</span><strong>Road, gravel or MTB by agreement</strong></li>
              <li><span>Travel style</span><strong>Private team programme</strong></li>
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
              <h2 className="at-heading">Highlights of Your Corporate and Team Cycling Trip</h2>
            </div>
            <p>
              Enjoy three to five days of team
              cycling through Morocco’s Atlas scenery
              and rural landscapes
              on a guided programme
              designed around your team.
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
            <img src={images.road} alt="Rural cycling track in the Atlas foothills near the Atlas region" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE &amp; TERRAIN</span>
            <h2 className="at-heading">Choose the Right Route for Your Team</h2>
            <p className="at-copy">
              The team journey focuses on
              routes selected according
              to the experience and ability
              of your team. Depending
              on the agreed programme,
              the terrain may include
              countryside tracks, rural
              paths and suitable
              cycling trails.
            </p>
            <p className="at-copy">
              Trail surfaces, gradients
              and distances will depend
              on the selected routes and
              local conditions. The aim
              is to create a rewarding multi-day
              team cycling journey at a
              comfortable pace for
              everyone in your team.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Three-to-five-day team cycling journey</li>
              <li><span>02</span>Routes selected around team experience and riding ability</li>
              <li><span>03</span>Marrakech countryside and Atlas landscapes</li>
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
              of this three-to-five-day group
              cycling experience
              in Marrakech and the Atlas region.
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
          <img src={images.village} alt="Colleagues sharing a break during a cycling trip in Morocco" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Connect Beyond the Workplace</h2>
          <p className="at-copy">
            This experience is about more than time on the bike.
            Across three to five days, colleagues can
            share a challenge, enjoy Morocco’s landscapes
            and make time for conversation and scenic pauses.
            Any workshops or facilitated team activities
            should be arranged separately and confirmed
            in the event proposal.
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
              <span className="at-eyebrow">CORPORATE TEAM CYCLING MOMENTS</span>
              <h2 className="at-heading">Explore the Scenery of Marrakech and the Atlas region</h2>
            </div>
            <p>
              Discover Atlas foothills,
              countryside tracks, rural
              villages and memorable
              landscapes during your
              three-to-five-day team cycling experience.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="High Atlas mountain scenery in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.road} alt="Rural cycling track in the Atlas foothills" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional rural village in the Atlas region" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Valley landscape in the High Atlas Mountains" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Team cycling ride in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">THREE TO FIVE DAYS IN MOROCCO</span>
              <h2 className="at-heading">Corporate and Team Cycling Trip Itinerary</h2>
            </div>
            <p>
              Four to five days of group mountain
              biking through selected
              valley landscapes. Daily
              routes, distances and riding
              durations are confirmed
              during planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines a three-day core journey with optional extensions to four or five days. The exact
            routes, distances, riding times,
            accommodation, meeting point,
            finishing point and transfer
            arrangements depend on the
            final programme agreed with
            your team and the riding
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
              <h2 className="at-heading">What Is Included in Your Team Cycling Trip?</h2>
            </div>
            <p>
              Final inclusions are confirmed
              in your booking proposal.
              Check your personalised itinerary
              for guiding, bicycles, equipment,
              accommodation, transport
              and meals included in your
              three-to-five-day experience.
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
              <h2 className="at-heading">Preparing for Your Corporate and Team Cycling Trip</h2>
            </div>
            <p>
              Prepare your bicycles,
              equipment and overnight
              essentials for three to five days
              of cycling in
              the Atlas region.
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
            <img src={images.cycling} alt="Cycling group enjoying a guided ride in Morocco" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">A ROUTE FOR YOUR GROUP</span>
            <h2 className="at-heading">Difficulty and Cycling Experience</h2>
            <p className="at-copy">
              The journey is planned as
              a team cycling
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
              participants' experience,
              cycling confidence and
              preferred riding style.
              This helps us discuss suitable
              terrain and a comfortable pace
              throughout the journey.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> All participants should be comfortable
              with the selected cycling format.
              Final route suitability, difficulty,
              daily distances, equipment, guiding
              and event logistics must be discussed
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
              about the Corporate and Team Cycling Trip. Contact
              our team if you need more
              details before planning
              your three-to-five-day cycling trip.
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
          <img src={images.final} alt="Corporate team cycling trip in Morocco" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR MOROCCO TEAM CYCLING EXPERIENCE STARTS HERE</span>
          <h2>Ready to Plan Your Three-to-Five-Day Team Cycling Trip?</h2>
          <p>
            Tell us your preferred dates,
            team size, participants’ cycling experience
            and preferred riding style.
            We can discuss suitable routes,
            daily riding durations,
            equipment, accommodation
            and transfers for your
            three-to-five-day corporate cycling experience
            around Marrakech and the Atlas region.
          </p>
          <a className="at-button" href="/contact">Plan Your Team Cycling Trip <span>→</span></a>
        </div>
      </section>

      <section className="at-section at-enquiry-section" id="enquire">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">PLAN YOUR JOURNEY</span>
              <h2 className="at-heading">
                Enquire About Your Corporate and Team Cycling Trip
              </h2>
            </div>
            <p>
              Tell us your preferred dates, team size, participants' cycling experience and preferred riding style so we can start planning your corporate cycling programme in Morocco.
            </p>
          </div>
          <ContactEnquiryForm
            tourName="Corporate and Team Cycling Trip – 3 to 5 Days"
            destination="Marrakech and the Atlas region"
            cyclingType="Road, Gravel or Mountain Biking"
          />
        </div>
      </section>

      <section className="at-related-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EXPLORE MORE</span>
              <h2 className="at-heading">More Group Cycling Experiences in Morocco</h2>
            </div>
            <p>
              Discover more ways to explore
              Morocco by bike, from group
              cycling days around Marrakech
              to cycling breaks
              in the Atlas Mountains and
              guided cycling experiences.
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