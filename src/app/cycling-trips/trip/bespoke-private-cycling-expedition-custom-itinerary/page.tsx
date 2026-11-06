import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bespoke Private Cycling Expedition – Custom Itinerary | Mountain Bike Morocco",
  description:
    "Design a private cycling expedition in Morocco around your preferred dates, riding style, experience and destinations. Build a custom itinerary with selected routes, local landscapes and support arranged to match your plans.",
  alternates: {
    canonical: "/cycling-trips/trip/bespoke-private-cycling-expedition-custom-itinerary",
  },
};

const images = {
  hero: "/images/atlas-mountains-cycling-expedition.jpg",
  overview: "/images/Explore-Atlas-Mountains-bike.jpg",
  mountains: "/images/atlas-mountains-cycling-tour.jpg",
  road: "/images/road-cycling-morocco.jpg",
  village: "/images/morocco-berbre-villages.jpg",
  valley: "/images/atlas-valley-cycling-morocco.jpg",
  cycling: "/images/atlas-cycling-adventure.jpg",
  final: "/images/atlas-to-desert-biking-tour.jpg",
};

const facts = [
  ["Duration", "Fully custom – agreed during planning"],
  ["Destination", "Morocco – selected regions and route to be agreed"],
  ["Region", "Atlas Mountains, Marrakech region, Anti-Atlas or desert-edge areas by request"],
  ["Starting point", "Agreed according to your itinerary"],
  ["Cycling style", "Road, gravel, MTB or E-MTB by agreement"],
  ["Difficulty", "Selected around your experience and preferred challenge"],
  ["Experience", "Private expedition designed around your interests and riding profile"],
  ["Tour format", "Bespoke private departure"],
  ["Best season", "Depends on the selected regions, dates and route conditions"],
];

const highlights = [
  { number: "01", title: "Your Expedition, Your Way", text: "Build a private cycling journey around the places you want to explore, the time you have available and the type of riding you enjoy. The itinerary is developed with you rather than selected from a fixed package." },
  { number: "02", title: "Choose Your Cycling Style", text: "Shape the expedition around road cycling, gravel, mountain biking or E-MTB. You can focus on one discipline or discuss a combination, subject to suitable routes, equipment and local conditions." },
  { number: "03", title: "Explore More Than One Landscape", text: "Consider the High Atlas, Marrakech countryside, remote valleys, Anti-Atlas or desert-edge landscapes. The final route and transfers depend on the regions selected and the time available." },
  { number: "04", title: "Private Guiding and Tailored Support", text: "Discuss the level of guiding, vehicle support, accommodation, luggage transfers, bike rental and other services you need. Every service is listed and confirmed in your individual proposal." },
];

const beyondTrail = [
  { title: "Ride at Your Preferred Pace", text: "Share your typical riding pace, daily distance preferences and appetite for climbing or technical terrain. Route choices can then be discussed around your experience and objectives." },
  { title: "Select the Landscapes That Inspire You", text: "Choose a region or combine areas where practical. The proposed route will account for travel time, seasonal conditions, road access and the style of riding you want." },
  { title: "Balance Riding and Time to Explore", text: "Your itinerary can include scenic pauses, village visits and time away from the bike where suitable. Any specific cultural visits or activities must be agreed and confirmed." },
  { title: "A Private Plan from First Enquiry to Departure", text: "Discuss dates, group size, bikes, accommodation, transfers and support with the team. The final itinerary and inclusions are confirmed in writing before booking." },
];

const itinerary = [
  { day: "01", title: "Start with Your Ideas and Expedition Brief", location: "Pre-trip planning – with the Mountain Bike Morocco team", distance: "Not applicable", riding: "Define your preferred cycling experience", image: images.overview, text: "The expedition begins with a conversation about your preferred dates, available time, group size, cycling background and the kind of journey you have in mind. Tell us which landscapes interest you, whether you prefer road, gravel, MTB or E-MTB, and what level of daily challenge feels right. This planning stage develops a route concept; it is not a fixed travel day or a confirmed service until included in your proposal.", details: ["Share your preferred travel dates and trip length", "Describe your cycling experience and fitness", "Choose your preferred riding style or combination", "Discuss regions, landscapes and places of interest", "Identify any bike, accommodation or support requirements", "Receive a proposed itinerary for review"] },
  { day: "02", title: "Shape the Route and Choose Your Landscapes", location: "Selected Moroccan regions – agreed in your proposal", distance: "Route-specific and confirmed before booking", riding: "Road, gravel, MTB or E-MTB as selected", image: images.mountains, text: "Once your priorities are clear, the route can be shaped around suitable riding areas and realistic transfers. Depending on the time available, you may focus on one region or discuss linking more than one landscape. Daily distances, elevation, surfaces, riding times and overnight stops are confirmed only after the route has been selected and checked for your dates.", details: ["Review the proposed route and daily stages", "Agree the balance of riding and transfers", "Confirm daily distances and elevation profiles", "Select overnight locations and accommodation standard", "Discuss vehicle support and luggage arrangements", "Approve the final route plan"] },
  { day: "03", title: "Begin Your Private Cycling Expedition", location: "Your agreed starting point in Morocco", distance: "As set out in your final itinerary", riding: "Private guided ride on your selected terrain", image: images.road, text: "Meet the guide and support team at the agreed starting point, review the route and check your bicycle and equipment. The opening ride follows the stage confirmed in your itinerary. The guide will brief you on the day's terrain, regrouping points and practical arrangements before setting out. The actual start location and ride are specific to your chosen expedition.", details: ["Meet the guide at the confirmed location", "Review the route, conditions and safety arrangements", "Check bicycle setup and personal equipment", "Begin the first confirmed riding stage", "Follow planned stops and regrouping points", "Finish at the overnight location listed in your itinerary"] },
  { day: "04", title: "Follow the Journey Through Your Chosen Region", location: "Your selected route – location varies by expedition", distance: "As set out in your final itinerary", riding: "A sequence of rides and transfers tailored to your plan", image: images.valley, text: "Continue through the landscapes selected for your journey. The expedition may include mountain roads, gravel tracks, singletrack or a combination, depending on the agreed riding style. If your plan links different regions, transfer stages will be built into the schedule. The exact number of riding days and the order of stages will vary with your custom itinerary.", details: ["Follow the confirmed route for the day", "Ride at the agreed pace and difficulty level", "Use planned refreshment and regrouping stops", "Allow for transfers where included in the route plan", "Enjoy the selected landscapes and local stops", "Review the next stage with your guide"] },
  { day: "05", title: "Complete Your Final Stage and Departure", location: "Final destination and departure point as agreed", distance: "As set out in your final itinerary", riding: "Final ride or transfer according to your chosen trip length", image: images.cycling, text: "Conclude the expedition with the final ride or travel stage specified in your personal itinerary. Depending on your chosen duration, the journey may be shorter or longer than the five illustrative stages shown here. Your departure transfer, luggage arrangements and any additional nights are confirmed in the written proposal. This framework is a planning example, not a fixed five-day tour.", details: ["Complete the final confirmed ride or transfer", "Return rental equipment if applicable", "Allow time for the agreed finish and any final stop", "Confirm onward transport and departure timing", "Follow the confirmed luggage and transfer arrangements"] },
];

const inclusions = [
  "Personalised itinerary planning based on the details agreed for your expedition",
  "Private cycling guide when specified in your proposal",
  "Route selection and daily stage planning for the agreed cycling style",
  "Vehicle support and luggage transfers only when listed in your proposal",
  "Bicycle rental, spare equipment or E-MTB battery arrangements if confirmed",
  "Accommodation and meals only as specified in the final itinerary",
  "Airport or regional transfers only when included in writing",
  "Additional activities or local experiences only when expressly confirmed",
];

const exclusions = [
  "International and domestic flights", "Travel insurance and personal medical expenses", "Bicycles unless included in your proposal", "Personal cycling clothing and equipment", "Helmets and protective equipment unless confirmed", "Transfers and luggage support unless specified", "Accommodation and meals not listed in the final itinerary", "Personal expenses, drinks and tips", "Activities or visits not included in the written proposal", "Additional services requested after confirmation unless separately agreed",
];

const preparation = [
  { title: "Share Your Riding Profile", text: "Tell us about your recent cycling experience, typical weekly riding, preferred daily distances, climbing ability and comfort on different surfaces. This helps us propose a realistic route and level of challenge." },
  { title: "Choose Your Cycling Discipline", text: "Let us know whether you want road cycling, gravel, MTB or E-MTB, and whether you will bring your own bicycle. If you need a rental, share your height, preferred frame size and equipment requirements." },
  { title: "Decide What Matters on the Journey", text: "Consider the landscapes you want to see, accommodation preferences, travel pace, cultural stops and the balance between riding and transfers. These choices help shape a coherent itinerary." },
  { title: "Confirm the Practical Details", text: "Before departure, review the final route, dates, accommodation, meals, transfers, guiding and support services. Bring suitable clothing, footwear, hydration and personal riding equipment for the confirmed conditions." },
];

const faqs = [
  { q: "How long is the Bespoke Private Cycling Expedition?", a: "There is no fixed duration. The trip length is planned around your available dates, preferred regions and the route you want to ride. Your proposal will set out the agreed number of days and stages." },
  { q: "Can I choose where the expedition goes?", a: "Yes. Share the landscapes or regions that interest you, such as the Atlas Mountains, Marrakech area, Anti-Atlas or desert-edge areas. The final route depends on available time, access, seasonal conditions and practical transfers." },
  { q: "Which type of cycling can I choose?", a: "You can enquire about road cycling, gravel, mountain biking or E-MTB. A combination may be possible where routes, bikes and logistics make sense. The selected discipline will be confirmed in your itinerary." },
  { q: "Can the itinerary be designed for my ability?", a: "Yes. Provide an overview of your experience, fitness, technical confidence and preferred daily challenge. Route difficulty, distances and elevation should be reviewed and agreed before booking." },
  { q: "Can I book as a solo rider or with a private group?", a: "You can enquire for a solo private trip, couple, friends or a private group. Availability, guiding arrangements and pricing depend on the group size and requested dates." },
  { q: "Can the expedition include vehicle support?", a: "Support vehicles, luggage transfers and other assistance can be discussed. They are included only when availability and details are confirmed in your written proposal." },
  { q: "Can I bring my own bike?", a: "Yes, you can discuss travelling with your own bicycle. Share the bike type and any transport or maintenance requirements. Rental options can also be discussed, subject to availability and confirmation." },
  { q: "Are accommodation and meals included?", a: "They depend on your chosen itinerary and preferences. Your proposal will specify the accommodation, meal basis and any other services included in the price." },
  { q: "Can I combine different regions in one trip?", a: "Potentially, depending on the total duration and transfer times. The planning stage will establish whether a multi-region route allows enough time for the riding experience you want." },
  { q: "When is the best time to travel?", a: "The best period depends on the regions, altitude and riding style selected. Conditions can vary across Morocco, so the proposed route should be checked for your preferred dates." },
  { q: "How do I request a custom itinerary?", a: "Contact the team with your preferred dates, trip length, group size, cycling style, riding experience and the places you hope to explore. These details provide a starting point for a tailored route proposal." },
];

const relatedTours = [
  { category: "PRIVATE MTB", title: "Private Atlas Mountain Bike Weekend", text: "Explore a private mountain-bike escape in the Atlas region with a route shaped around your riding level.", image: "/images/atlas-mountains-singletrack.jpg", href: "/cycling-trips/trip/private-atlas-mountain-bike-weekend-2-to-3-days" },
  { category: "GRAVEL CYCLING", title: "Morocco Gravel Group Journey", text: "Discover Morocco's varied landscapes on gravel routes through selected regions.", image: "/images/gravel-adventure-bike-morocco.jpg", href: "/cycling-trips/trip/morocco-gravel-group-journey-4-to-6-day" },
  { category: "ROAD CYCLING", title: "Private Road Cycling Tour", text: "Plan a private road cycling holiday with route choices discussed around your preferred challenge.", image: "/images/road-cycling-holiday-morocco.jpg", href: "/cycling-trips/trip/private-road-cycling-tour-4-to-7-day" },
];

export default function BespokePrivateCyclingExpeditionPage() {
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
          <img src={images.hero} alt="Cycling expedition through the Atlas Mountains in Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · PRIVATE CYCLING · BESPOKE EXPEDITION · CUSTOM ITINERARY</span>
          <h1>Bespoke Private Cycling Expedition</h1>
          <p className="at-hero-description">
            Plan a private cycling journey
            shaped around your dates,
            preferred riding style and
            the landscapes you want to explore.
            From Atlas mountain routes
            to gravel, road or E-MTB adventures,
            every stage is developed
            around your riding experience
            and preferred pace.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Private Expedition <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>TAILOR-MADE</strong><span>Flexible trip length</span></div>
            <div><strong>MOROCCO</strong><span>Selected regions</span></div>
            <div><strong>PRIVATE</strong><span>Dedicated departure</span></div>
            <div><strong>YOUR ROUTE</strong><span>Designed with you</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>Custom Itinerary</strong></div>
          <div className="at-fact"><span>Destination</span><strong>Marrakech and the Atlas region</strong></div>
          <div className="at-fact"><span>Experience</span><strong>Private Expedition</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Tailored Guiding</strong></div>
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
            <span className="at-eyebrow">A PRIVATE EXPEDITION DESIGNED AROUND YOU</span>
            <h2 className="at-heading">Discover Morocco on a Journey Designed Around You</h2>
            <p className="at-copy">
              The Bespoke Private Cycling Expedition is a tailor-made
              cycling journey for riders, couples, friends or private groups
              who want to explore Morocco on their own terms
              with a route built around their preferences.
            </p>
            <p className="at-copy">
              Choose road cycling, gravel, mountain biking or E-MTB routes
              across the regions selected for your journey.
              The riding format, route profile and pace
              will be developed around your
              experience and preferred challenge.
            </p>
            <p className="at-copy">
              Daily distances, elevation, overnight stops,
              riding times, accommodation,
              meeting points and transfer
              arrangements are developed
              with you and confirmed before
              booking once we understand your
              experience and priorities.
            </p>
            <a className="at-text-link" href="#itinerary">Explore the custom itinerary framework →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE MOROCCO CYCLING EXPEDITION</span>
            <h2 className="at-heading">A Cycling Journey Built Around Your Own Priorities</h2>
            <p className="at-copy">
              Explore Morocco at a pace and on a route that reflects what you want from the journey, whether that means mountain climbs, remote gravel tracks, flowing singletrack or scenic road riding.
            </p>
            <p className="at-copy">
              Your itinerary can combine guided riding, transfers, scenic pauses and time to discover places along the way. Every stage is planned around your riding profile, preferred landscapes and agreed travel arrangements.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Bespoke Private Cycling Expedition</h3>
            <p>A private cycling journey in Morocco, with duration, route, riding style and support arranged around your preferences.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>Custom</strong></li>
              <li><span>Destination</span><strong>Marrakech and the Atlas region</strong></li>
              <li><span>Tour format</span><strong>Private expedition</strong></li>
              <li><span>Route style</span><strong>Road, gravel, MTB or E-MTB</strong></li>
              <li><span>Travel style</span><strong>Tailor-made</strong></li>
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
              <h2 className="at-heading">Highlights of Your Bespoke Cycling Expedition</h2>
            </div>
            <p>
              Explore Morocco through a private cycling journey developed around your preferred terrain, regions and travel dates.
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
            <h2 className="at-heading">Choose the Route and Terrain That Suit You</h2>
            <p className="at-copy">
              Your route is selected around your cycling experience and the type of riding you enjoy. Depending on your brief, the expedition may focus on paved mountain roads, gravel tracks, singletrack or a combination of terrain.
            </p>
            <p className="at-copy">
              Surfaces, gradients, distances and daily riding times depend on the chosen regions and current conditions. We review the route concept with you before confirming the stages, transfers and overnight stops.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Custom duration and route plan</li>
              <li><span>02</span>Routes shaped around your riding profile</li>
              <li><span>03</span>Selected landscapes across Morocco</li>
              <li><span>04</span>Private guiding and support by agreement</li>
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
              Review the key planning details for your private expedition. Route, distances, riding times, accommodation, meeting points and transfers are developed around your preferences and confirmed in your proposal.
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
          <img src={images.village} alt="A scenic pause during a cycling expedition in Morocco" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Go Beyond a Standard Cycling Holiday</h2>
          <p className="at-copy">
            A bespoke expedition gives you the freedom to choose the balance between riding and discovery. Add scenic pauses, selected local visits or quieter days where suitable, with every activity and service agreed as part of the itinerary.
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
              <span className="at-eyebrow">MOROCCO CYCLING LANDSCAPES</span>
              <h2 className="at-heading">Explore the Landscapes That Inspire Your Expedition</h2>
            </div>
            <p>
              From Atlas mountain scenery and rural valleys to open gravel country, the landscapes are selected to match your chosen route and available time.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="High Atlas mountain scenery in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.road} alt="Rural cycling track in the Atlas foothills" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional rural village in the Atlas region" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Valley landscape in the High Atlas Mountains" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="Cyclists exploring Morocco by bike" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">A FLEXIBLE ROUTE FRAMEWORK</span>
              <h2 className="at-heading">Your Bespoke Cycling Itinerary</h2>
            </div>
            <p>
              A custom expedition has no standard day count or fixed route. The framework below shows how planning and riding stages may be organised; the actual sequence, duration and destinations are created for your trip.
            </p>
          </div>
          <p className="at-itinerary-intro">
            The five sections below are illustrative stages, not a fixed five-day package. Your actual itinerary may be shorter or longer and will depend on the selected regions, riding style, route conditions and travel dates. Distances, elevation, accommodation, transfers and support are confirmed in your individual proposal.
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
              <h2 className="at-heading">What Is Included in Your Private Expedition?</h2>
            </div>
            <p>
              Your final proposal will list the services selected for your expedition, including guiding, bicycle arrangements, accommodation, meals, transfers and support where confirmed.
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
              <h2 className="at-heading">Preparing for Your Bespoke Cycling Expedition</h2>
            </div>
            <p>
              Preparation depends on your chosen discipline, route, season and trip length. Review the final itinerary and equipment recommendations before departure.
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
            <img src={images.cycling} alt="Private guided cycling in Morocco" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">A ROUTE FOR YOUR RIDING STYLE</span>
            <h2 className="at-heading">Difficulty and Cycling Experience</h2>
            <p className="at-copy">
              The journey is planned as
              a private cycling
              experience with difficulty selected
              around your riding profile and
              preferred challenge.
              Actual difficulty will depend
              on gradients, surfaces, daily
              distances and local conditions.
            </p>
            <p className="at-copy">
              Before confirming the route,
              we need to understand your
              experience, cycling confidence
              and preferred riding style.
              This helps us discuss suitable
              terrain, daily distances
              and a realistic pace.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> You should be comfortable
              with the selected cycling format.
              Final route suitability, difficulty,
              daily distances, equipment, guiding
              and support arrangements must be
              discussed and confirmed before booking.
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
              about the Bespoke Private Cycling Expedition. Contact
              our team if you need more
              details before planning
              your custom cycling itinerary.
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
          <img src={images.final} alt="Private cycling expedition in Morocco" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR PRIVATE MOROCCO CYCLING EXPEDITION STARTS HERE</span>
          <h2>Ready to Design Your Own Cycling Expedition in Morocco?</h2>
          <p>
            Tell us your preferred dates,
            group size, your cycling experience
            and preferred riding style.
            We can discuss suitable routes,
            daily riding durations,
            equipment, accommodation
            and transfers for your
            private cycling expedition
            across the regions selected for your journey.
          </p>
          <a className="at-button" href="/contact">Plan Your Private Expedition <span>→</span></a>
        </div>
      </section>

      <section className="at-related-section">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">EXPLORE MORE</span>
              <h2 className="at-heading">More Private Cycling Experiences in Morocco</h2>
            </div>
            <p>
              Explore other private cycling holidays and specialist routes across Morocco, including mountain-bike, gravel and road cycling experiences.
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