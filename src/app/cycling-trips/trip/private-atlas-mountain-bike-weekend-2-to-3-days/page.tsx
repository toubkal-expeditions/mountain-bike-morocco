import type { Metadata } from "next";
import ContactEnquiryForm from "@/app/contact/ContactEnquiryForm";

export const metadata: Metadata = {
  title: "Private Atlas Mountain Bike Weekend – 2 to 3 Days | Mountain Bike Morocco",
  description:
    "Ride the Atlas on a private 2 or 3-day mountain-bike weekend in Morocco. Explore selected trails, mountain tracks and valley landscapes with a local guide and a route plan tailored to your group's riding experience.",
  alternates: {
    canonical: "/cycling-trips/trip/private-atlas-mountain-bike-weekend-2-to-3-days",
  },
};

const images = {
  hero: "/images/atlas-mountains-enduro-biking-tour-3-day.jpg",
  overview: "/images/atlas-mountains-singletrack.jpg",
  mountains: "/images/mtb-tour-atlas-mountains.jpg",
  road: "/images/singletrack-biking-morocco.jpg",
  village: "/images/atlas-berber-valley-bike.JPG",
  valley: "/images/atlas-mtb-tour-morocco.jpg",
  cycling: "/images/enduro-cycling-holiday-morocco.jpg",
  final: "/images/atlas-cycling-adventure.jpg",
};

const facts = [
  ["Duration", "2 or 3 days"],
  ["Destination", "High Atlas Mountains, Morocco"],
  ["Starting point", "Marrakech – meeting point to be confirmed"],
  ["Cycling style", "Private mountain biking and trail riding"],
  ["Difficulty", "Selected according to the group's riding level"],
  ["Experience", "Confident off-road riders; technical level discussed before booking"],
  ["Tour format", "Private guided MTB weekend"],
  ["Accommodation", "As confirmed in your personalised trip proposal"],
  ["Best season", "Spring and autumn, subject to mountain conditions"],
];

const highlights = [
  {
    number: "01",
    title: "A Private Atlas MTB Escape",
    text: "Make the most of a short mountain-bike break in Morocco's High Atlas. Ride as your own private group with a local guide and a programme shaped around your dates, preferred riding style and experience.",
  },
  {
    number: "02",
    title: "Choose Two or Three Days on the Trails",
    text: "Choose a focused two-day weekend or add a third day for more time on the mountain. The final programme, daily distances and riding hours are agreed with you before travel.",
  },
  {
    number: "03",
    title: "Singletrack, Mountain Tracks and Big Views",
    text: "Explore selected Atlas trails and mountain routes, with terrain chosen to match the group's ability and local conditions. Exact trails and technical features are confirmed during trip planning.",
  },
  {
    number: "04",
    title: "Ride at Your Own Group's Pace",
    text: "Enjoy the flexibility of a private guided weekend, with time for trail-side breaks, photographs and route adjustments where suitable. Share your riding preferences so the guide can plan accordingly.",
  },
];

const beyondTrail = [
  {
    title: "The High Atlas Mountains",
    text: "Discover the varied mountain landscapes surrounding the Atlas riding areas, from open slopes to dramatic valley views. The precise riding zone is selected according to your dates, experience and local trail conditions.",
  },
  {
    title: "Local Villages and Mountain Culture",
    text: "Depending on the agreed route, your ride may pass through or near traditional mountain villages. Stops are planned respectfully and according to the day's trail and riding schedule.",
  },
  {
    title: "A Weekend Built Around Your Riding",
    text: "Choose two days for a compact escape or three days for a longer MTB break. Route character, distance, climbing and riding time are discussed before your itinerary is confirmed.",
  },
  {
    title: "Private Guiding and Flexible Planning",
    text: "Ride with your own private group and local guide. Tell us about your preferred terrain, technical ability, fitness and dates so we can discuss a suitable weekend programme.",
  },
];

const itinerary = [
  {
    day: "01",
    title: "Marrakech to the Atlas – Bike Setup and First Trails",
    location: "Marrakech – selected High Atlas riding area",
    distance: "To be confirmed",
    riding: "Transfer, bike check and introductory trail ride",
    image: "/images/atlas-mountains-enduro-biking-tour.jpg",
    text: "Meet your guide at the agreed point in Marrakech and travel towards the selected Atlas riding area according to your confirmed arrangements. Check the bikes, suspension, brakes, tyres and protective equipment before heading out. Depending on arrival time and the agreed programme, begin with a warm-up ride to assess the group's pace and preferred terrain. Your guide will review the trail options and conditions for the weekend.",
    details: [
      "Meet your guide and review the private weekend plan",
      "Transfer from Marrakech if included in your confirmed arrangements",
      "Check bike setup, brakes, tyres, suspension and protective equipment",
      "Discuss technical preferences and the group's riding level",
      "Ride a suitable warm-up route if timing allows",
      "Settle into the confirmed accommodation arrangements",
    ],
  },
  {
    day: "02",
    title: "Atlas Singletrack and Mountain Trails",
    location: "High Atlas – selected MTB trails",
    distance: "To be confirmed",
    riding: "Main guided mountain-bike stage",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    text: "After breakfast, set out for a full day of mountain biking on trails selected for the group's ability and preferred riding style. The route may combine singletrack, mountain paths and connecting tracks, depending on the agreed programme and current conditions. Your guide will manage the pace and identify suitable options for the day. For a two-day itinerary, this is the final riding day before the return journey; for a three-day itinerary, continue the adventure with another day on the trails.",
    details: [
      "Review trail conditions and the day's route with your guide",
      "Warm up before moving onto the selected MTB trails",
      "Ride at a pace suited to the private group",
      "Pause for water, photographs and refreshments",
      "Finish the two-day programme or prepare for an optional third day",
    ],
  },
  {
    day: "03",
    title: "Optional Third Day – More Atlas Riding and Return to Marrakech",
    location: "High Atlas Mountains – Marrakech",
    distance: "To be confirmed",
    riding: "Optional additional MTB stage",
    image: "/images/atlas-mountains-cycling-tour.jpg",
    text: "For guests choosing the three-day option, enjoy an additional day of riding on another selected section of the Atlas. Your guide can discuss a different trail character or a variation on the previous day's route, depending on the group's energy and local conditions. After the ride, return bikes and equipment where applicable and travel back to Marrakech if the transfer is included in your arrangements. This third day is not part of the two-day option.",
    details: [
      "Choose the three-day option when confirming your booking",
      "Review the group's energy, equipment and local trail conditions",
      "Explore another selected Atlas MTB route",
      "Allow time for breaks and a final mountain stop",
      "Return to Marrakech if included in your confirmed arrangements",
    ],
  },
];

const inclusions = [
  "Two- or three-day private MTB programme planning",
  "Route planning based on the group's riding experience and preferences",
  "Local mountain-bike guide as specified in your proposal",
  "Selected Atlas trails and daily riding arrangements",
  "Accommodation only when specified in your proposal",
  "Bicycle rental if specifically included",
  "Helmets and protective equipment only when confirmed",
  "Transfers from Marrakech if specified in your proposal",
  "Meals and refreshments only when listed in your proposal",
  "On-route support only as detailed in your confirmed arrangements",
];

const exclusions = [
  "International flights",
  "Travel insurance and emergency assistance cover",
  "Bicycles unless included in your proposal",
  "Personal cycling clothing, shoes and equipment",
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
    title: "Share Your Riding Level and Preferences",
    text: "Tell us about each rider's off-road experience, technical confidence, fitness and preferred terrain. Mention whether you enjoy flowing singletrack, technical trails, mountain paths or a mix so the guide can discuss suitable route options.",
  },
  {
    title: "Bring a Suitable Mountain Bike",
    text: "Use a well-maintained mountain bike with reliable brakes, suitable tyres and gearing for the selected terrain. Discuss rental options, bike sizes and any setup requirements before booking. Check suspension and drivetrain condition before the first ride.",
  },
  {
    title: "Prepare Protective Riding Equipment",
    text: "Bring a correctly fitting helmet, gloves, suitable riding clothing, sturdy cycling shoes, water and personal sun protection. Knee and elbow protection may be appropriate depending on the terrain and your riding style; confirm equipment needs with your guide.",
  },
  {
    title: "Pack for a Mountain Weekend",
    text: "Mountain weather can change during the day. Pack a light waterproof or windproof layer, an additional warm layer, personal essentials and suitable clothing for the evenings. Confirm overnight arrangements before departure.",
  },
];

const faqs = [
  {
    q: "Is this tour available for two or three days?",
    a: "Yes. You can request a two-day weekend or extend the programme to three days. The third itinerary day shown on this page applies only to the three-day option. Confirm your preferred duration when enquiring.",
  },
  {
    q: "Is the Private Atlas Mountain Bike Weekend suitable for beginners?",
    a: "This is a mountain-bike weekend intended for riders who are confident on a bicycle and have relevant off-road experience for the routes selected. Share your group's experience so the team can discuss suitable terrain before confirming the trip.",
  },
  {
    q: "What type of trails will we ride?",
    a: "The route may include selected Atlas singletrack, mountain paths and connecting tracks. The exact trail character, technical level and daily distances depend on your preferences, the guide's assessment and local conditions.",
  },
  {
    q: "Where does the weekend start?",
    a: "Marrakech is the proposed meeting and transfer point. The exact meeting location, departure time and transfer arrangements will be confirmed in your personalised proposal.",
  },
  {
    q: "How difficult are the Atlas trails?",
    a: "Difficulty varies by route and conditions. Tell us about your technical ability, fitness and preferred riding style so the guide can discuss suitable trails. Final route choices are reviewed locally before riding.",
  },
  {
    q: "How much riding will we do each day?",
    a: "Daily distances, climbing and riding times are not fixed on this page. They depend on the selected routes, terrain, weather and group ability, and will be discussed during trip planning.",
  },
  {
    q: "Can we bring our own mountain bikes?",
    a: "Yes, you can discuss bringing your own bikes. Share the bike type and setup when enquiring. Rental may be possible if specifically arranged and confirmed in your proposal.",
  },
  {
    q: "Are accommodation and transfers included?",
    a: "Accommodation and transfers are included only when listed in your confirmed proposal. The team will clarify meeting arrangements, overnight stays and transport for your selected two- or three-day option.",
  },
  {
    q: "Can we book the weekend as a private group?",
    a: "This tour is planned for a private group. Share your preferred dates, group size and riding experience so the team can discuss availability and a suitable programme.",
  },
];

const relatedTours = [
  {
    category: "MTB ADVENTURE",
    title: "Atlas Singletrack MTB Adventure",
    text: "Explore selected singletrack and mountain routes on a guided Atlas mountain-bike journey.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/cycling-trips/trip/atlas-singletrack-mtb-adventure",
  },
  {
    category: "MTB ADVENTURE",
    title: "High Atlas Enduro MTB Tour",
    text: "Discover a longer enduro-focused ride through the mountain landscapes of the High Atlas.",
    image: "/images/atlas-mountains-enduro-biking-tour.jpg",
    href: "/cycling-trips/trip/high-atlas-enduro-mtb-tour",
  },
  {
    category: "PRIVATE MTB",
    title: "Private Family MTB Holiday in Morocco – 5 Days",
    text: "Plan a private mountain-bike holiday with selected Atlas trails and a tailored riding pace.",
    image: "/images/group-emtb-tour-morocco.jpg",
    href: "/cycling-trips/trip/private-family-mtb-holiday-morocco-5-day",
  },
];

export default function PrivateAtlasMountainBikeWeekendPage() {
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
          <img src={images.hero} alt="High Atlas private mountain biking ride in the Atlas Mountains of Morocco" />
        </div>
        <div className="at-hero-shade" />
        <div className="at-hero-content">
          <span className="at-eyebrow">MOROCCO · HIGH ATLAS · PRIVATE MTB · 2 OR 3 DAYS</span>
          <h1>Private Atlas Mountain Bike Weekend</h1>
          <p className="at-hero-description">
            Discover Morocco’s High Atlas on a private two- or three-day mountain-bike escape.
            Explore selected singletrack, mountain trails and valley scenery
            with a local guide and a route plan shaped around your group’s
            technical ability and riding preferences.
          </p>
          <div className="at-hero-actions">
            <a className="at-button" href="/contact">Plan Your Private Atlas MTB Weekend <span>→</span></a>
            <a className="at-hero-back" href="/cycling-trips">Explore All Cycling Tours</a>
          </div>
          <div className="at-hero-bottom">
            <div><strong>02–03 DAYS</strong><span>Private MTB weekend</span></div>
            <div><strong>ATLAS</strong><span>Mountain trails</span></div>
            <div><strong>PRIVATE</strong><span>Your own group</span></div>
            <div><strong>MTB</strong><span>Guided trail riding</span></div>
          </div>
        </div>
      </section>

      <section className="at-fact-strip">
        <div className="at-container at-fact-strip-inner">
          <div className="at-fact"><span>Duration</span><strong>2 or 3 Days</strong></div>
          <div className="at-fact"><span>Destination</span><strong>the High Atlas Mountains of Morocco</strong></div>
          <div className="at-fact"><span>Experience</span><strong>Private Atlas Mountain Bike Weekend</strong></div>
          <div className="at-fact"><span>Tour style</span><strong>Private Guided MTB</strong></div>
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
            <span className="at-eyebrow">A PRIVATE TWO- OR THREE-DAY ATLAS MTB ESCAPE</span>
            <h2 className="at-heading">Ride the High Atlas on Your Own Private MTB Weekend</h2>
            <p className="at-copy">
              Private Atlas Mountain Bike Weekend is a 2–3-day
              weekend for mountain bikers who want to explore
              the mountain landscapes beyond Marrakech.
              Ride selected trails with your own group and a local guide.
            </p>
            <p className="at-copy">
              Discover selected Atlas singletrack, mountain tracks and open landscapes. The exact trails and technical character are chosen according to your group’s experience and local conditions.
            </p>
            <p className="at-copy">
              The two- or three-day route, distances, riding times, accommodation, meeting point and transfer arrangements will be discussed and confirmed after we understand your group’s experience and preferences.
            </p>
            <a className="at-text-link" href="#itinerary">Discover the 2–3-day journey →</a>
          </div>
        </div>
      </section>

      <section className="at-section" style={{ paddingTop: 0 }}>
        <div className="at-container at-overview-grid">
          <div>
            <span className="at-eyebrow">YOUR PRIVATE ATLAS MTB WEEKEND</span>
            <h2 className="at-heading">2 or 3 Days of Atlas Trails and Mountain-Bike Riding</h2>
            <p className="at-copy">
              Leave the city behind and
              enjoy a rider-focused
              private mountain-bike adventure in
              the spectacular surroundings
              of Morocco’s High Atlas Mountains.
            </p>
            <p className="at-copy">
              Explore selected trails over two or three days, with time for scenic stops and route adjustments. The programme is planned around your group’s experience and preferred riding style.
            </p>
          </div>
          <aside className="at-booking-card">
            <span className="at-eyebrow">TRIP AT A GLANCE</span>
            <h3>Private Atlas Mountain Bike Weekend</h3>
            <p>A 2–3-day private mountain biking experience in the Atlas Mountains of Morocco, with selected routes planned around your group's riding ability.</p>
            <ul className="at-booking-list">
              <li><span>Duration</span><strong>2 or 3 days</strong></li>
              <li><span>Destination</span><strong>the High Atlas Mountains of Morocco</strong></li>
              <li><span>Tour format</span><strong>Guided private riding escape</strong></li>
              <li><span>Route style</span><strong>Singletrack and mountain trails</strong></li>
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
              <h2 className="at-heading">Highlights of Your Private Atlas Mountain Bike Weekend</h2>
            </div>
            <p>
              Enjoy two or three days of private mountain biking, Atlas scenery and selected trails on a guided programme designed around your group.
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
            <img src={images.road} alt="Mountain biking on a selected Atlas trail" />
          </div>
          <div>
            <span className="at-eyebrow">THE ROUTE &amp; TERRAIN</span>
            <h2 className="at-heading">Ride Selected Mountain Trails and Discover Atlas Villages</h2>
            <p className="at-copy">
              The 2–3-day adventure focuses on mountain-bike routes selected according to the experience and ability of your group. Depending on the agreed programme, the terrain may include mountain paths, forest or valley tracks and trails suited to your group’s technical level.
            </p>
            <p className="at-copy">
              Trail surfaces, gradients and distances depend on the selected routes and local conditions. The aim is to create a rewarding private riding weekend at a suitable pace for your group.
            </p>
            <ul className="at-terrain-points">
              <li><span>01</span>Two- or three-day private mountain biking holiday</li>
              <li><span>02</span>Routes selected around technical ability</li>
              <li><span>03</span>Atlas mountain trails and valley scenery</li>
              <li><span>04</span>Private pace with time for trail-side breaks</li>
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
              of this 2–3-day private MTB
              weekend
              in the Atlas Mountains of Morocco.
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
          <img src={images.village} alt="Traditional Berber village in the Atlas Mountains of Morocco" />
        </div>
        <div className="at-culture-content">
          <span className="at-eyebrow">BEYOND THE RIDE</span>
          <h2 className="at-heading">Discover the Character of the Atlas Mountains</h2>
          <p className="at-copy">
            Your cycling escape is about
            more than cycling.
            Across two or three days, discover
            the landscapes and rural
            atmosphere of Morocco’s Atlas Mountains.
            Enjoy time outdoors, explore
            selected village surroundings
            and appreciate the scenery
            of the High Atlas Mountains.
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
              <span className="at-eyebrow">ATLAS MOUNTAIN MOMENTS</span>
              <h2 className="at-heading">Explore the Scenery of the Atlas Mountains</h2>
            </div>
            <p>
              Discover mountain trails, traditional
              villages and open landscapes
              across the Atlas during your
              2–3-day private MTB holiday.
            </p>
          </div>
          <div className="at-gallery-grid">
            <div className="at-gallery-item"><img src={images.mountains} alt="Atlas mountain scenery in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.road} alt="Mountain biking on a selected Atlas trail" /></div>
            <div className="at-gallery-item"><img src={images.village} alt="Traditional village in the Atlas Mountains of Morocco" /></div>
            <div className="at-gallery-item"><img src={images.valley} alt="Atlas valley landscape in Morocco" /></div>
            <div className="at-gallery-item"><img src={images.cycling} alt="High Atlas private mountain biking ride in Morocco" /></div>
          </div>
        </div>
      </section>

      <section className="at-section at-itinerary-section" id="itinerary">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">TWO OR THREE DAYS IN THE ATLAS MOUNTAINS</span>
              <h2 className="at-heading">Private Atlas Mountain Bike Weekend Itinerary</h2>
            </div>
            <p>
              Two or three days of private mountain biking on selected Atlas mountain trails. Daily routes, distances and riding times are confirmed during planning.
            </p>
          </div>
          <p className="at-itinerary-intro">
            This itinerary outlines the proposed structure of the 2–3-day private MTB holiday. Exact routes, distances, riding times, accommodation, meeting point, finishing point and transfer arrangements depend on the final programme agreed with your group and the riding experience of everyone joining.
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
              <h2 className="at-heading">What Is Included in Your Private Atlas Mountain Bike Weekend?</h2>
            </div>
            <p>
              Final inclusions are confirmed
              in your booking proposal.
              Check your personalised itinerary
              for guiding, bicycles, equipment,
              accommodation, transport
              and meals included in your
              2–3-day experience.
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
              <h2 className="at-heading">Preparing for Your Private Atlas Mountain Bike Weekend</h2>
            </div>
            <p>
              Prepare your bicycles,
              equipment and overnight
              essentials for two or three days
              of private mountain biking in
              the Atlas Mountains of Morocco.
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
            <img src={images.cycling} alt="Private mountain-bike group enjoying a guided ride in Morocco" loading="lazy" />
          </div>
          <div>
            <span className="at-eyebrow">A ROUTE FOR YOUR PRIVATE GROUP</span>
            <h2 className="at-heading">Difficulty and Riding Experience</h2>
            <p className="at-copy">
              The adventure is planned as a private mountain biking experience. Difficulty will depend on the selected trails, gradients, surfaces, daily distances and local conditions, and must be matched to the ability of every rider.
            </p>
            <p className="at-copy">
              Before confirming the routes,
              we need to understand each
              rider's off-road experience,
              technical confidence and
              fitness level.
              This helps us discuss suitable terrain and a comfortable pace across all two or three days.
            </p>
            <div className="at-difficulty-note">
              <strong>Important:</strong> All riders should be confident on a bicycle and have the off-road skills required for the selected mountain-bike routes. Final suitability, route
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
              about Private Atlas Mountain Bike Weekend. Contact
              our team if you need more
              details before planning
              your 2–3-day mountain-bike holiday.
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
          <img src={images.final} alt="Private mountain-bike adventure in Morocco's Atlas Mountains" />
        </div>
        <div className="at-final-shade" />
        <div className="at-final-content">
          <span className="at-eyebrow">YOUR PRIVATE ATLAS MTB WEEKEND STARTS HERE</span>
          <h2>Ready to Plan Your Private Atlas MTB Weekend?</h2>
          <p>
            Tell us your preferred dates,
            group size, riders' experience
            and cycling experience.
            We can discuss suitable routes,
            daily riding durations,
            equipment, accommodation
            and transfers for your
            2–3-day private mountain biking holiday in the Atlas Mountains of Morocco.
          </p>
          <a className="at-button" href="/contact">Plan Your Private Atlas MTB Weekend <span>→</span></a>
        </div>
      </section>

      <section className="at-section at-enquiry-section" id="enquiry">
        <div className="at-container">
          <div className="at-section-head">
            <div>
              <span className="at-eyebrow">PLAN YOUR PRIVATE ATLAS MTB WEEKEND</span>
              <h2 className="at-heading">
                Enquire About the Private Atlas Mountain Bike Weekend
              </h2>
            </div>
            <p>
              Tell us your preferred dates, group size, riding experience and
              whether you would like a two- or three-day weekend. We can discuss
              suitable trails, equipment, accommodation and transfer
              arrangements for your private Atlas mountain-bike escape.
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
              <h2 className="at-heading">More Atlas Mountain Bike Adventures in Morocco</h2>
            </div>
            <p>
              Discover more ways to explore
              Morocco by bike, from shorter private mountain biking escapes to longer private mountain-bike journeys in the Atlas and other regions of Morocco.
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
              Discover Morocco by bike. Explore the Atlas Mountains of Morocco,
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