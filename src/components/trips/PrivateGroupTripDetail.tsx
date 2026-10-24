import Link from "next/link";
import { notFound } from "next/navigation";

type PrivateGroupTour = {
  number: string;
  label: string;
  title: string;
  duration: string;
  region: string;
  description: string;
  image: string;
  slug: string;
};

const trips: Record<string, PrivateGroupTour> = {
  "private-atlas-mountain-bike-weekend-2-to-3-days": {
    number: "01",
    label: "A SHARED ATLAS ESCAPE",
    title: "Private Atlas Mountain Bike Weekend",
    duration: "2–3 days",
    region: "High Atlas & Morocco",
    description: "Bring your friends together for a private cycling escape in the Atlas foothills. Ride selected mountain tracks and rural trails, pause at viewpoints and leave room to enjoy the villages and valleys along the way. The route, technical difficulty, transfers and overnight arrangements can be discussed around your group's available time and riding experience.",
    image: "/images/group-cycling-atlas-mountains.jpg",
    slug: "private-atlas-mountain-bike-weekend-2-to-3-days",
  },
  "atlas-cycling-club-tour-4-day": {
    number: "02",
    label: "CLUBS & RIDING COMMUNITIES",
    title: "Atlas Cycling Club Tour",
    duration: "4 days",
    region: "High Atlas & Morocco",
    description: "Plan a multi-day riding trip for a cycling club or an established group of friends. A private itinerary gives you the opportunity to discuss daily distances, climbing, trail difficulty and the balance between riding and recovery. Share the range of abilities in your group so route options and support arrangements can be considered realistically before you travel.",
    image: "/images/group-cycling-tour-morocco.jpg",
    slug: "atlas-cycling-club-tour-4-day",
  },
  "high-atlas-group-mtb-adventure-5-day": {
    number: "03",
    label: "MOUNTAIN TRAILS & VILLAGES",
    title: "High Atlas Group MTB Adventure",
    duration: "5 days",
    region: "High Atlas & Morocco",
    description: "Explore the High Atlas as a group, following a route concept that connects mountain landscapes, village tracks and memorable viewpoints. The final itinerary should account for rider confidence, elevation, terrain and seasonal conditions rather than assuming every rider wants the same level of challenge. We can discuss the pace, support and stages that make sense for your group.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
    slug: "high-atlas-group-mtb-adventure-5-day",
  },
  "atlas-to-desert-group-expedition-6-day": {
    number: "04",
    label: "MOUNTAINS TO SOUTHERN LANDSCAPES",
    title: "Atlas to Desert Group Expedition",
    duration: "6 days",
    region: "Atlas & southern Morocco",
    description: "Bring your group together for a journey concept that links the High Atlas with the changing landscapes of southern Morocco. The experience can combine selected riding stages, regional transfers and time to discover villages and dramatic terrain. Distance between regions, daily mileage, luggage logistics, accommodation and the season all need to be considered before the final plan is confirmed.",
    image: "/images/atlas-to-desert-biking-tour.jpg",
    slug: "atlas-to-desert-group-expedition-6-day",
  },
  "private-emtb-group-holiday-3-to-5-days": {
    number: "05",
    label: "ELECTRIC-ASSISTED RIDING",
    title: "Private E-MTB Group Holiday",
    duration: "3–5 days",
    region: "Morocco · electric mountain biking",
    description: "An electric mountain bike trip can be a good option for a group that wants to explore together while discussing different climbing preferences and riding goals. Battery capacity, charging opportunities, bike requirements, elevation and assistance settings should all be part of the planning conversation. We can help you consider suitable route options based on the group's experience and the conditions expected for your dates.",
    image: "/images/group-emtb-tour-morocco.jpg",
    slug: "private-emtb-group-holiday-3-to-5-days",
  },
  "morocco-gravel-group-journey-4-to-6-days": {
    number: "06",
    label: "GRAVEL ROADS & OPEN COUNTRY",
    title: "Morocco Gravel Group Journey",
    duration: "4–6 days",
    region: "Morocco · gravel routes",
    description: "Discover Morocco by gravel bike with a private group itinerary built around quiet roads, rural tracks and changing landscapes. Discuss preferred surfaces, daily distances, luggage support and the amount of climbing your group enjoys. The best route should reflect the experience of the riders taking part and leave realistic time for transfers, stops and changes in terrain.",
    image: "/images/gravel-adventure-bike-morocco.jpg",
    slug: "morocco-gravel-group-journey-4-to-6-days",
  },
  "private-road-cycling-tour-4-to-7-days": {
    number: "07",
    label: "ROAD RIDING & MOUNTAIN PASSES",
    title: "Private Road Cycling Tour",
    duration: "4–7 days",
    region: "Morocco · road routes",
    description: "Plan a road cycling holiday for a group that enjoys long rides, mountain climbs and scenic open roads. Routes can be discussed around fitness, preferred daily mileage, climbing goals and the amount of support required. Traffic, road surfaces, elevation, transfers and seasonal temperatures should be reviewed when deciding the daily stages and the regions to connect.",
    image: "/images/road-cycling-tour-morocco.jpg",
    slug: "private-road-cycling-tour-4-to-7-days",
  },
  "mixed-ability-private-cycling-break-3-to-5-days": {
    number: "08",
    label: "FAMILY & FRIENDS",
    title: "Mixed-Ability Private Cycling Break",
    duration: "3–5 days",
    region: "Morocco · private itinerary",
    description: "A private group trip can be planned for friends or family members who have different cycling backgrounds. The most important starting point is an honest conversation about experience, confidence, age range, bike type and the amount of riding everyone wants to do. With those details, route choices, rest stops and alternative options can be considered to make the itinerary more comfortable for the whole group.",
    image: "/images/group-adventure-cycling-morocco.jpg",
    slug: "mixed-ability-private-cycling-break-3-to-5-days",
  },
  "marrakech-group-cycling-escape-2-to-4-days": {
    number: "09",
    label: "START FROM MARRAKECH",
    title: "Marrakech Group Cycling Escape",
    duration: "2–4 days",
    region: "Marrakech & nearby regions",
    description: "Use Marrakech as the meeting point for a group ride in the surrounding countryside or as the start of a longer journey into the Atlas. A shorter itinerary can fit around a city stay, while a longer trip needs more thought about transfer times and daily riding. Tell us your group size, dates and preferred cycling style so the possible options can be discussed.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    slug: "marrakech-group-cycling-escape-2-to-4-days",
  },
  "berber-villages-group-tour-4-to-6-days": {
    number: "10",
    label: "CULTURE & COUNTRY RIDING",
    title: "Berber Villages Group Tour",
    duration: "4–6 days",
    region: "Morocco · private itinerary",
    description: "Experience the landscapes around Morocco's mountain villages with an itinerary that makes time for both cycling and cultural discovery. Route options can be considered around your group's confidence, daily distance and preferred terrain, with stops for viewpoints and local experiences where appropriate. Accommodation, transfers and support should be agreed as part of the overall plan.",
    image: "/images/berber-villages-cycling-expeditions.jpg",
    slug: "berber-villages-group-tour-4-to-6-days",
  },
  "corporate-and-team-cycling-trip-3-to-5-days": {
    number: "11",
    label: "GROUP ADVENTURE & TEAM TIME",
    title: "Corporate and Team Cycling Trip",
    duration: "3–5 days",
    region: "Morocco · private itinerary",
    description: "Create an active group experience for colleagues, an organisation or a team looking to spend time together outdoors. The programme can be discussed around participant fitness, bike experience, available dates and the balance between riding and shared activities. Group size, transport, equipment, safety considerations and accommodation should be clarified before a final itinerary is agreed.",
    image: "/images/cycling-group-events-morocco.jpg",
    slug: "corporate-and-team-cycling-trip-3-to-5-days",
  },
  "bespoke-private-cycling-expedition-custom-itinerary": {
    number: "12",
    label: "YOUR ROUTE, YOUR GROUP",
    title: "Bespoke Private Cycling Expedition",
    duration: "Custom itinerary",
    region: "Morocco · private itinerary",
    description: "If your group has a particular idea in mind, start with the experience you want rather than a fixed itinerary. Combine MTB, E-MTB, gravel or road stages where practical, and discuss the regions, trip length, accommodation style and level of support you prefer. Route feasibility, transport between areas, current conditions and the needs of every rider should guide the final plan.",
    image: "/images/morocco-group-cycling-adventure.jpg",
    slug: "bespoke-private-cycling-expedition-custom-itinerary",
  }
};

type TourContent = {
  highlights: string[];
  difficulty: string;
  difficultyDescription: string;
  stages: string[];
  gallery: string[];
};

const tourContent: Record<string, TourContent> = {
  "private-atlas-mountain-bike-weekend-2-to-3-days": {
      "highlights": [
          "A private Atlas escape with friends",
          "Route and pace selected for the group",
          "Time for mountain views and rural stops",
          "Discuss transfers and overnight plans in advance"
      ],
      "difficulty": "Adaptable to the group",
      "difficultyDescription": "A short private weekend can suit a range of riders if the selected route, distance and surface are agreed honestly in advance. Share the experience range so the plan can include realistic options and support.",
      "stages": [
          "Meet the group and review bikes",
          "Ride selected Atlas foothill trails",
          "Final ride and departure arrangements"
      ],
      "gallery": [
          "/images/group-cycling-atlas-mountains.jpg",
          "/images/group-cycling-tour-morocco.jpg",
          "/images/mountain-biking-atlas-mountains-morocco.jpg"
      ]
  },
  "atlas-cycling-club-tour-4-day": {
      "highlights": [
          "Bring a club or established riding group together",
          "Set daily mileage and climbing goals",
          "Plan regrouping points and support stops",
          "Balance riding with recovery and social time"
      ],
      "difficulty": "Adaptable; group pace agreed",
      "difficultyDescription": "Club trips should reflect the abilities of the riders taking part. Daily distance, climbing and regrouping points can be discussed, and any technical sections should be clearly described before travel.",
      "stages": [
          "Meet the club and agree group pace",
          "Opening ride and route familiarisation",
          "Longer group ride with planned stops",
          "Final ride and departure"
      ],
      "gallery": [
          "/images/group-cycling-tour-morocco.jpg",
          "/images/group-adventure-cycling-morocco.jpg",
          "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"
      ]
  },
  "high-atlas-group-mtb-adventure-5-day": {
      "highlights": [
          "Explore High Atlas scenery together",
          "Link mountain landscapes and village routes",
          "Match technical sections to the group",
          "Allow realistic time for transfers and rest"
      ],
      "difficulty": "Moderate to challenging; route dependent",
      "difficultyDescription": "High Atlas terrain can combine climbs, rougher surfaces and variable weather. The itinerary should account for the least experienced riders in the group while still providing suitable options for stronger riders where practical.",
      "stages": [
          "Arrival, group briefing and bike checks",
          "High Atlas opening ride",
          "Village routes and mountain viewpoints",
          "Longer group ride with support stops",
          "Final ride and departure arrangements"
      ],
      "gallery": [
          "/images/mountain-biking-atlas-mountains-morocco.jpg",
          "/images/group-cycling-atlas-mountains.jpg",
          "/images/berber-villages-cycling-expeditions.jpg"
      ]
  },
  "atlas-to-desert-group-expedition-6-day": {
      "highlights": [
          "Connect Atlas and southern landscapes",
          "Combine riding stages with planned transfers",
          "Balance daily effort and group logistics",
          "Discuss luggage and support arrangements"
      ],
      "difficulty": "Moderate to challenging; logistics dependent",
      "difficultyDescription": "Connecting mountain and southern regions involves varied surfaces, temperature and transfer requirements. Confirm daily stages, water, luggage movements and support before finalising a multi-region group expedition.",
      "stages": [
          "Arrival and expedition briefing",
          "Opening ride in the High Atlas",
          "Mountain tracks and village routes",
          "Transfer toward southern Morocco",
          "Southern landscapes and group ride",
          "Final ride and onward travel"
      ],
      "gallery": [
          "/images/atlas-to-desert-biking-tour.jpg",
          "/images/group-cycling-tour-morocco.jpg",
          "/images/morocco-group-cycling-adventure.jpg"
      ]
  },
  "private-emtb-group-holiday-3-to-5-days": {
      "highlights": [
          "Ride together with electric assistance",
          "Plan battery range and charging opportunities",
          "Match routes to group ability",
          "Agree support and bike requirements before travel"
      ],
      "difficulty": "Adaptable; e-bike logistics matter",
      "difficultyDescription": "The route must consider each rider’s experience as well as battery range, elevation, charging stops and compatible equipment. The whole group should agree on riding pace and the support arrangements before departure.",
      "stages": [
          "Meet the group and check e-bikes",
          "Opening assisted ride and battery check",
          "Group route with charging and support plan",
          "Flexible riding or recovery stage",
          "Final ride and departure arrangements"
      ],
      "gallery": [
          "/images/group-emtb-tour-morocco.jpg",
          "/images/group-cycling-atlas-mountains.jpg",
          "/images/e-mtb-tour-morocco.jpg"
      ]
  },
  "morocco-gravel-group-journey-4-to-6-days": {
      "highlights": [
          "Explore quiet roads and rural tracks",
          "Choose surfaces to suit the bikes in the group",
          "Plan water and mechanical support",
          "Discuss daily mileage and regional transfers"
      ],
      "difficulty": "Moderate; surface dependent",
      "difficultyDescription": "Gravel surfaces can vary from compact tracks to rougher sections. Bike setup, tyre choice, navigation, water and group mileage should be agreed around the least experienced riders and the expected conditions.",
      "stages": [
          "Group briefing and bike setup",
          "Quiet roads and rural gravel tracks",
          "Longer mixed-surface group stage",
          "Transfer or recovery window",
          "Southern or Atlas route exploration",
          "Final ride and departure"
      ],
      "gallery": [
          "/images/gravel-adventure-bike-morocco.jpg",
          "/images/group-adventure-cycling-morocco.jpg",
          "/images/atlas-to-desert-biking-tour.jpg"
      ]
  },
  "private-road-cycling-tour-4-to-7-days": {
      "highlights": [
          "Ride Morocco’s open roads and mountain climbs",
          "Plan daily distances and elevation goals",
          "Consider pace, regrouping and support vehicles",
          "Build recovery into the multi-day schedule"
      ],
      "difficulty": "Moderate to challenging; route dependent",
      "difficultyDescription": "Road tours can include sustained climbing and repeated riding days. Fitness, traffic awareness, daily distance, elevation and support vehicle arrangements should be discussed when deciding the route.",
      "stages": [
          "Group briefing and road-bike checks",
          "Opening road ride and pace assessment",
          "Mountain roads and climbing stage",
          "Longer road stage with support stops",
          "Route day matched to group goals",
          "Scenic ride and recovery time",
          "Final stage and departure"
      ],
      "gallery": [
          "/images/road-cycling-tour-morocco.jpg",
          "/images/group-cycling-tour-morocco.jpg",
          "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"
      ]
  },
  "mixed-ability-private-cycling-break-3-to-5-days": {
      "highlights": [
          "Plan around a range of riding experience",
          "Use realistic daily stages and rest stops",
          "Discuss alternate routes where practical",
          "Keep the trip flexible for the group"
      ],
      "difficulty": "Flexible; planned around the group",
      "difficultyDescription": "A mixed-ability trip needs a realistic pace, regular regrouping and route options where available. Share everyone’s comfort level, age range and preferred riding style before the itinerary is designed.",
      "stages": [
          "Meet the group and agree a comfortable pace",
          "Opening route with optional distances",
          "Scenic ride with planned rest stops",
          "Choose a shorter or longer route option",
          "Final group ride and departure"
      ],
      "gallery": [
          "/images/group-adventure-cycling-morocco.jpg",
          "/images/group-cycling-atlas-mountains.jpg",
          "/images/group-cycling-tour-morocco.jpg"
      ]
  },
  "marrakech-group-cycling-escape-2-to-4-days": {
      "highlights": [
          "Use Marrakech as a convenient meeting point",
          "Explore nearby countryside and foothills",
          "Fit cycling around a short city stay",
          "Confirm start points and transfers"
      ],
      "difficulty": "Flexible; short-break friendly",
      "difficultyDescription": "A Marrakech-based group escape can be tailored to available time and riding experience. Transfer time, traffic exposure, route surface and the chosen distance affect the day and should be checked before departure.",
      "stages": [
          "Meet in Marrakech and review the plan",
          "Opening countryside ride",
          "Atlas foothill route or optional rest",
          "Final ride and onward travel"
      ],
      "gallery": [
          "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
          "/images/cycling-tour-from-marrakech.jpg",
          "/images/group-cycling-atlas-mountains.jpg"
      ]
  },
  "berber-villages-group-tour-4-to-6-days": {
      "highlights": [
          "Combine cycling with village and cultural discovery",
          "Explore mountain and rural landscapes",
          "Set the pace around the whole group",
          "Plan meaningful stops into each stage"
      ],
      "difficulty": "Easy to challenging depending on route",
      "difficultyDescription": "Village-focused group tours vary by terrain, elevation and route length. A good plan leaves room for cultural stops while making sure the daily ride and support arrangements suit the group.",
      "stages": [
          "Group briefing and bike setup",
          "Ride through village landscapes",
          "Cultural stops and rural routes",
          "Longer group ride with flexible pace",
          "Explore a new valley or local route",
          "Final ride and departure"
      ],
      "gallery": [
          "/images/berber-villages-cycling-expeditions.jpg",
          "/images/group-cycling-atlas-mountains.jpg",
          "/images/morocco-berber-valley.jpg"
      ]
  },
  "corporate-and-team-cycling-trip-3-to-5-days": {
      "highlights": [
          "Build a shared team experience outdoors",
          "Choose a route that fits participant ability",
          "Discuss safety, equipment and logistics",
          "Combine riding with team time"
      ],
      "difficulty": "Adaptable to participants and goals",
      "difficultyDescription": "Corporate trips should account for varied fitness, cycling confidence, equipment and group size. Route alternatives, briefing, transport, emergency arrangements and non-riding activities should be discussed before confirming the programme.",
      "stages": [
          "Arrival and team briefing",
          "Introductory group ride",
          "Team challenge or longer route option",
          "Flexible activity and recovery window",
          "Final group ride and wrap-up"
      ],
      "gallery": [
          "/images/cycling-group-events-morocco.jpg",
          "/images/group-adventure-cycling-morocco.jpg",
          "/images/group-cycling-tour-morocco.jpg"
      ]
  },
  "bespoke-private-cycling-expedition-custom-itinerary": {
      "highlights": [
          "Combine cycling styles where practical",
          "Shape route and duration around the group",
          "Discuss accommodation and support preferences",
          "Build a route concept from your priorities"
      ],
      "difficulty": "To be agreed after consultation",
      "difficultyDescription": "A bespoke trip has no single difficulty rating until the route and cycling disciplines are selected. Share the group’s experience range, dates and priorities so the proposed itinerary can be made realistic and clearly described.",
      "stages": [
          "Group discovery meeting and route planning",
          "Opening ride in the agreed region",
          "Main group ride with support options",
          "Flexible stage for varied abilities",
          "Final ride, review and onward travel"
      ],
      "gallery": [
          "/images/morocco-group-cycling-adventure.jpg",
          "/images/group-cycling-atlas-mountains.jpg",
          "/images/group-cycling-tour-morocco.jpg"
      ]
  }
};

function bookingHref(tour: PrivateGroupTour, request: "details" | "booking" = "details") {
  return `/contact?tour=${encodeURIComponent(tour.title)}&destination=${encodeURIComponent(tour.region)}&request=${request}`;
}

function getRouteStyle(tour: PrivateGroupTour) {
  const text = `${tour.title} ${tour.label}`.toLowerCase();
  if (text.includes("e-mtb")) return "Electric-assisted group cycling";
  if (text.includes("gravel")) return "Mixed-surface gravel riding";
  if (text.includes("road")) return "Paved roads and mountain climbs";
  if (text.includes("corporate") || text.includes("team")) return "Team cycling and shared activities";
  if (text.includes("village")) return "Village routes and cultural stops";
  if (text.includes("desert")) return "Mountain and southern Morocco stages";
  if (text.includes("marrakech")) return "Marrakech countryside and foothill routes";
  if (text.includes("mtb") || text.includes("mountain bike")) return "Mountain biking and rural tracks";
  return "Private cycling itinerary tailored to the group";
}

function getTerrainNotes(tour: PrivateGroupTour) {
  const text = `${tour.title} ${tour.label}`.toLowerCase();
  if (text.includes("gravel")) return "Surface can vary from compact tracks to rougher gravel. Tyre choice, navigation, water, mechanical preparation and daily distance should be confirmed for the selected route.";
  if (text.includes("road")) return "Road surface, traffic, climbing, descent length and wind can affect the effort. Confirm route choice, support vehicles and regrouping points before travel.";
  if (text.includes("desert")) return "Southern stages may bring heat, open exposure and longer gaps between services. Water, transfers, support and realistic distances need to be planned for the season.";
  if (text.includes("e-mtb")) return "Battery range, charging, elevation and terrain should be considered alongside rider ability. The group’s bike requirements and support plan must be agreed before departure.";
  if (text.includes("marrakech")) return "Countryside and foothill conditions vary by route. Start point, transfers, traffic exposure, surface and timing should be checked for the planned ride.";
  return "Terrain depends on the agreed cycling discipline and region. Confirm road or trail surfaces, climbing, daily mileage, support and regrouping arrangements against the group’s experience and dates.";
}

function getBestFor(tour: PrivateGroupTour, content: TourContent) {
  const text = `${tour.title} ${tour.label}`.toLowerCase();
  if (text.includes("club")) return "Cycling clubs or established groups who want to plan shared mileage, climbing goals, regrouping points and support.";
  if (text.includes("corporate") || text.includes("team")) return "Work teams or organisations seeking a shared outdoor activity with route options appropriate to participants.";
  if (text.includes("mixed-ability") || text.includes("family")) return "Groups with different cycling backgrounds who value a realistic pace, planned stops and suitable route alternatives.";
  if (text.includes("bespoke")) return "Groups with a specific idea and a desire to discuss cycling discipline, regions, duration, accommodation and support from the beginning.";
  return `Private groups whose riding experience and preferences fit a ${content.difficulty.toLowerCase()} itinerary, with details agreed before travel.`;
}

function makeDayDescription(tour: PrivateGroupTour, stage: string, index: number, total: number) {
  const lower = stage.toLowerCase();
  if (lower.includes("arrival") || lower.includes("meet") || lower.includes("briefing") || lower.includes("setup") || lower.includes("planning")) return `Bring the group together to review the route concept, check bikes and equipment, and confirm the day’s logistics. Start location, transfer timing and any pre-ride arrangements for ${tour.title} should be agreed before departure.`;
  if (lower.includes("transfer") || lower.includes("departure") || lower.includes("onward travel") || lower.includes("wrap-up")) return `Allow time for agreed departure or transfer arrangements. Whether riding is included depends on the travel schedule and final plan; confirm finish point, luggage and bike transport, and timings in advance.`;
  if (lower.includes("recovery") || lower.includes("flexible") || lower.includes("rest")) return `Keep this stage flexible for recovery, route adjustments or optional riding. The group can decide whether it works best as a shorter ride, a rest period or a transfer once the broader itinerary is agreed.`;
  if (lower.includes("team")) return `Build the day around a shared group activity and route choice that suits participants’ fitness and experience. Briefing, equipment, regrouping and support arrangements should be confirmed beforehand.`;
  if (lower.includes("club") || lower.includes("pace") || lower.includes("mixed")) return `Use this stage to ride together at the pace agreed for the group, with sensible regrouping points and planned stops. Distance, elevation and route options should reflect the riders taking part.`;
  if (lower.includes("desert") || lower.includes("southern")) return `Explore the selected routes through ${tour.region}. Heat, water, transfer times, surface and support must be checked for the season rather than assumed in advance.`;
  if (index === total - 1) return `Complete the final planned ride or wrap up the trip according to departure times and conditions. Confirm the finish point, transfers and onward travel before the trip begins.`;
  return `Ride a stage selected for the group, with the cycling discipline, distance, climbing and stops confirmed against current conditions and the experience of the riders. Keep support and regrouping arrangements clear throughout the day.`;
}

function makeFaqs(tour: PrivateGroupTour, content: TourContent) {
  return [
    { question: `What is included in the ${tour.duration} ${tour.title}?`, answer: `Inclusions vary by proposal. Before confirming, ask for a written list covering guiding, accommodation, meals, transfers, luggage handling, bike support, equipment and any activities planned for the group.` },
    { question: `Can the route be adapted to our group?`, answer: `Yes, the route concept can be discussed around dates, group size, cycling disciplines, experience levels and preferences. The final plan should be confirmed once route access, conditions, transfers and support arrangements have been reviewed.` },
    { question: `How difficult is this group trip?`, answer: `${content.difficulty}. ${content.difficultyDescription} Share the riding experience and fitness range of the group so route options and daily effort can be planned realistically.` },
    { question: `Can different cycling styles be combined?`, answer: `Some mixed-discipline trips may be possible, but logistics, bike transport, pace and route access need careful planning. Describe the disciplines and expectations of your group during the enquiry.` },
    { question: `What should we bring?`, answer: `Bring a correctly fitting helmet, appropriate riding clothing, footwear, sun protection, water capacity and personal essentials. Bike tools, spares, warm layers and rain protection depend on the discipline, route and season; confirm the packing list after the itinerary is discussed.` },
  ];
}

export default function PrivateGroupTripDetail({ slug }: { slug: string }) {
  const tour = trips[slug];
  if (!tour) notFound();
  const content = tourContent[slug];
  if (!content) notFound();

  const relatedTours = Object.values(trips)
    .filter((item) => item.slug !== tour.slug)
    .slice(0, 3);
  const faqs = makeFaqs(tour, content);
  const routeStyle = getRouteStyle(tour);
  const terrainNotes = getTerrainNotes(tour);
  const bestFor = getBestFor(tour, content);
  const itinerary = content.stages.map((stage, index) => ({
    day: index + 1,
    title: stage,
    description: makeDayDescription(tour, stage, index, content.stages.length),
  }));

  const galleryImages = Array.from(new Set([
    tour.image,
    ...content.gallery,
    "/images/group-cycling-tour-morocco.jpg",
    "/images/atlas-mountains-cycling-tour-morocco.jpg",
    "/images/group-emtb-tour-morocco.jpg",
    "/images/group-adventure-cycling-morocco.jpg",
    "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    "/images/berber-villages-cycling-expeditions.jpg",
    "/images/cycling-group-events-morocco.jpg",
    "/images/morocco-group-cycling-adventure.jpg",
    "/images/gravel-adventure-bike-morocco.jpg",
    "/images/road-cycling-tour-morocco.jpg",
  ])).slice(0, 9);

  const sectionLinks = [
    ["Overview", "overview"],
    ["Highlights", "highlights"],
    ["Trip facts", "trip-facts"],
    ["Gallery", "gallery"],
    ["Itinerary", "itinerary"],
    ["Difficulty", "difficulty"],
    ["Inclusions", "inclusions"],
    ["FAQs", "faqs"],
    ["Enquire", "enquire"],
  ];

  const infoRows = [
    ["Trip duration", tour.duration],
    ["Destination / region", tour.region],
    ["Riding style", routeStyle],
    ["Suggested level", content.difficulty],
    ["Terrain", terrainNotes],
    ["Daily distance & climbing", "Confirmed in your tailored itinerary before booking"],
    ["Accommodation & meals", "Listed in the written trip proposal"],
    ["Guide, transfers & support", "Exact inclusions confirmed for your dates"],
  ];

  const miniFacts = [
    { label: "DURATION", value: tour.duration },
    { label: "REGION", value: tour.region },
    { label: "RIDE STYLE", value: routeStyle },
    { label: "LEVEL", value: content.difficulty },
  ];

  const planningCards = [
    { title: "Fitness & daily effort", text: `Plan for repeat riding days rather than a single ride. Tell us your usual ride length, climbing experience and how you recover between days so the ${tour.duration} plan can suit the group.` },
    { title: "Bike & equipment", text: "Discuss your bike type, tyre choice, brakes, tools, spares and whether you need a rental bike. Bike transport and mechanical support should be confirmed before travel." },
    { title: "Clothing & protection", text: "Bring a properly fitting helmet, gloves, eye protection, riding shoes and sun protection. Depending on season and elevation, warm layers and a lightweight waterproof may also be necessary." },
    { title: "Hydration & personal needs", text: "Confirm water-carrying needs, snacks, meals, dietary requirements and any personal support before departure. Remote or exposed routes require additional planning." },
  ];

  return (
    <main className="cycling-listing mtb-page mtb-trip-detail private-group-trip-detail private-group-trip-detail">
      {/* Cinematic tour hero — intentionally uses the existing brand hero styles */}
      <section className="cl-hero">
        <img className="cl-hero__image" src={tour.image} alt={tour.title} fetchPriority="high" />
        <div className="cl-hero__shade" />
        <div className="cl-wrap cl-hero__content">
          <p className="cl-eyebrow">{tour.label}</p>
          <h1>{tour.title}</h1>
          <p className="cl-hero__intro">{tour.description}</p>
          <div className="cl-actions">
            <Link className="cl-button cl-button--gold" href={bookingHref(tour, "booking")}>Enquire about this tour</Link>
            <Link className="cl-button cl-button--outline" href="/cycling-trips/private-groups">Back to group tours</Link>
          </div>
          <div className="cl-hero__meta">
            <span>{tour.duration.toUpperCase()}</span>
            <span>{tour.region.toUpperCase()}</span>
            <span>{content.difficulty.toUpperCase()}</span>
          </div>
        </div>
      </section>

      {/* Compact trip facts strip */}
      <section className="cl-wrap" aria-label="Tour summary" style={{ position: "relative", zIndex: 2, marginTop: "-24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 190px), 1fr))", background: "#ffffff", border: "1px solid #dedbd3", boxShadow: "0 12px 34px rgba(37,38,32,.08)" }}>
          {miniFacts.map((fact, index) => (
            <div key={fact.label} style={{ padding: "20px 22px", borderRight: index === miniFacts.length - 1 ? 0 : "1px solid #e8e4dc", borderBottom: "1px solid #e8e4dc", minWidth: 0 }}>
              <p className="cl-eyebrow cl-eyebrow--dark" style={{ marginBottom: 7 }}>{fact.label}</p>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 15, lineHeight: 1.45, color: "#252620" }}>{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <nav aria-label="Tour sections" className="mtb-trip-nav" style={{ position: "sticky", top: 0, zIndex: 5, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "9px 20px", padding: "14px 18px", marginTop: 20, background: "#f4f2ed", borderBottom: "1px solid #dedbd3", borderTop: "1px solid #dedbd3" }}>
        {sectionLinks.map(([label, id]) => (
          <a key={id} href={`#${id}`} style={{ color: "#252620", textDecoration: "none", fontSize: 12, fontWeight: 800, letterSpacing: ".045em", textTransform: "uppercase" }}>{label}</a>
        ))}
      </nav>

      {/* Overview and enquiry card */}
      <section id="overview" className="cl-wrap" style={{ paddingTop: 62, paddingBottom: 54, scrollMarginTop: 85 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1.55fr))", gap: 34, alignItems: "start" }}>
          <div>
            <p className="cl-eyebrow cl-eyebrow--dark">TOUR OVERVIEW</p>
            <h2 style={{ marginTop: 8, marginBottom: 18 }}>Plan a {tour.duration} private group cycling journey in {tour.region}</h2>
            <p style={{ fontSize: 16, lineHeight: 1.85 }}>{tour.description}</p>
            <p style={{ fontSize: 15, lineHeight: 1.85 }}>This trip is designed as a starting point for planning your ride. Route choice, daily riding time, technical sections, transfers and accommodation should be confirmed around your travel dates and the needs of your group. We recommend sharing your recent riding experience and preferred terrain before the itinerary is finalised.</p>
            <p style={{ fontSize: 15, lineHeight: 1.85 }}>Whether you are looking for long mountain days, singletrack, enduro-style descents or a broader cycling journey, the final plan should balance time on the bike with realistic recovery, local conditions and the support available along the route.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}>
              <span style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "9px 12px", fontSize: 12, fontWeight: 700 }}>✓ Private enquiry available</span>
              <span style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "9px 12px", fontSize: 12, fontWeight: 700 }}>✓ Route matched to ability</span>
              <span style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "9px 12px", fontSize: 12, fontWeight: 700 }}>✓ Details confirmed before booking</span>
            </div>
          </div>
          <aside style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: 26, boxShadow: "0 8px 25px rgba(37,38,32,.05)" }}>
            <p className="cl-eyebrow cl-eyebrow--dark">PLAN THIS ADVENTURE</p>
            <h3 style={{ marginTop: 8, marginBottom: 14 }}>Ask about dates and availability</h3>
            <p style={{ lineHeight: 1.75, fontSize: 14 }}>Tell us when you want to travel, how many riders are in your group and what kind of cycling experience your group enjoys. We can then discuss a realistic route and confirm the practical details.</p>
            <div style={{ borderTop: "1px solid #e5e1d9", borderBottom: "1px solid #e5e1d9", padding: "14px 0", margin: "18px 0" }}>
              {[["Trip", tour.title], ["Duration", tour.duration], ["Region", tour.region], ["Level", content.difficulty]].map(([label, value]) => (
                <div key={label} style={{ display: "grid", gridTemplateColumns: "95px 1fr", gap: 10, padding: "6px 0", fontSize: 13 }}><span style={{ color: "#777168" }}>{label}</span><strong style={{ color: "#252620" }}>{value}</strong></div>
              ))}
            </div>
            <Link className="cl-button cl-button--gold" href={bookingHref(tour, "booking")} style={{ width: "100%", justifyContent: "center" }}>Enquire about this tour</Link>
            <p style={{ fontSize: 12, lineHeight: 1.6, color: "#777168", marginTop: 12, marginBottom: 0 }}>No dates or departure availability are assumed on this page. Details are confirmed directly with you.</p>
          </aside>
        </div>
      </section>

      {/* Departure / trip planning choices, with no invented fixed dates */}
      <section className="cl-planning cl-wrap" style={{ paddingTop: 10, paddingBottom: 52 }}>
        <div className="cl-section-heading">
          <div><p className="cl-eyebrow cl-eyebrow--dark">DEPARTURE OPTIONS</p><h2>Find a departure that works for you</h2></div>
          <p>Dates and arrangements are discussed on enquiry. These options explain how to start planning; they are not a list of confirmed departures.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))", gap: 14 }}>
          {[
            { title: "Private departure", tag: "YOUR GROUP", text: "Travel with friends or your own group and discuss a pace, start date and route focus that work for everyone." },
            { title: "Flexible travel dates", tag: "DATES ON REQUEST", text: "Share your preferred dates and we can discuss practical timings, seasonal conditions and route availability." },
            { title: "Tailored route plan", tag: "MADE TO FIT", text: "Fine-tune technical difficulty, daily effort, accommodation preferences and support before confirming the itinerary." },
          ].map((item, index) => (
            <article key={item.title} style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "22px 22px 24px", position: "relative" }}>
              <span style={{ display: "inline-block", color: "#a66d18", fontSize: 10, letterSpacing: ".12em", fontWeight: 800, marginBottom: 13 }}>{item.tag}</span>
              <h3 style={{ margin: "0 0 10px", fontSize: 19 }}>{item.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.text}</p>
              <Link className="cl-text-link" href={bookingHref(tour, "details")} style={{ display: "inline-block", marginTop: 16 }}>Ask about this option <span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="cl-planning cl-wrap" style={{ paddingTop: 26, paddingBottom: 62, scrollMarginTop: 86 }}>
        <div className="cl-section-heading">
          <div><p className="cl-eyebrow cl-eyebrow--dark">TOUR HIGHLIGHTS</p><h2>What makes this ride special</h2></div>
          <p>Use these highlights to compare the trip with your riding goals. The selected route and stops are confirmed during trip planning.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))", gap: 14 }}>
          {content.highlights.map((highlight, index) => (
            <article key={highlight} style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "23px 22px", minHeight: 170 }}>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, borderRadius: "50%", background: "#f4f2ed", color: "#9a681d", fontSize: 12, fontWeight: 800, marginBottom: 15 }}>{String(index + 1).padStart(2, "0")}</span>
              <h3 style={{ margin: "0 0 9px", fontSize: 17, lineHeight: 1.4 }}>{highlight}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.7 }}>{index === 0 ? tour.description : `This element of the trip is planned around ${tour.region}, the season and the group's experience.`}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Trail and riding information */}
      <section className="cl-wrap" style={{ paddingTop: 15, paddingBottom: 58 }}>
        <div className="cl-section-heading">
          <div><p className="cl-eyebrow cl-eyebrow--dark">THE RIDING EXPERIENCE</p><h2>Trails, terrain and the pace of the journey</h2></div>
          <p>The aim is to choose the right ride for your group, not to publish unverified mileage or elevation figures. These details are confirmed in the itinerary for your dates.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 24, alignItems: "stretch" }}>
          <div style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: 24 }}>
            <h3 style={{ marginTop: 0 }}>Route character</h3>
            <p style={{ lineHeight: 1.8 }}>{terrainNotes}</p>
            <p style={{ lineHeight: 1.8 }}>{bestFor}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 20 }}>
              {[["Riding style", routeStyle], ["Trip format", tour.duration], ["Region", tour.region], ["Difficulty", content.difficulty]].map(([label, value]) => (
                <div key={label} style={{ padding: 13, background: "#f4f2ed", borderLeft: "3px solid #c28a2c" }}><span style={{ display: "block", fontSize: 10, fontWeight: 800, letterSpacing: ".06em", color: "#777168", marginBottom: 5 }}>{label.toUpperCase()}</span><strong style={{ display: "block", fontSize: 13, lineHeight: 1.5 }}>{value}</strong></div>
              ))}
            </div>
          </div>
          <div style={{ border: "1px solid #dedbd3", background: "#ffffff", padding: 24 }}>
            <h3 style={{ marginTop: 0 }}>Illustrative terrain profile</h3>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>A visual guide to the changing effort of a mountain ride—not a surveyed elevation chart for this specific tour.</p>
            <svg viewBox="0 0 640 220" role="img" aria-label="Illustrative mountain terrain profile, not measured elevation data" style={{ display: "block", width: "100%", height: "auto", marginTop: 12 }}>
              <defs><linearGradient id="mtbAreaFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#c28a2c" stopOpacity=".28"/><stop offset="100%" stopColor="#c28a2c" stopOpacity=".03"/></linearGradient></defs>
              {[45, 85, 125, 165].map((y) => <line key={y} x1="16" y1={y} x2="624" y2={y} stroke="#e9e4db" strokeWidth="1" />)}
              <path d="M16 175 L60 160 L95 128 L130 143 L164 90 L205 105 L244 57 L278 83 L315 48 L350 88 L388 72 L425 120 L463 94 L498 133 L535 112 L575 151 L624 142 L624 190 L16 190 Z" fill="url(#mtbAreaFill)" />
              <path d="M16 175 L60 160 L95 128 L130 143 L164 90 L205 105 L244 57 L278 83 L315 48 L350 88 L388 72 L425 120 L463 94 L498 133 L535 112 L575 151 L624 142" fill="none" stroke="#a66d18" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
              <text x="16" y="212" fill="#777168" fontSize="12">Start</text><text x="320" y="212" fill="#777168" fontSize="12" textAnchor="middle">Ride stages</text><text x="624" y="212" fill="#777168" fontSize="12" textAnchor="end">Finish</text>
            </svg>
            <p style={{ fontSize: 11, lineHeight: 1.55, color: "#777168", marginBottom: 0 }}>Actual distance, ascent, descent and GPX information should be requested with the final route proposal.</p>
          </div>
        </div>
      </section>

      {/* Practical tour facts table */}
      <section id="trip-facts" className="cl-wrap" style={{ paddingTop: 18, paddingBottom: 58, scrollMarginTop: 86 }}>
        <div className="cl-section-heading">
          <div><p className="cl-eyebrow cl-eyebrow--dark">TRIP INFORMATION</p><h2>Detailed tour facts</h2></div>
          <p>Use this summary when comparing tours. Items that depend on the chosen itinerary are marked for confirmation rather than shown as guaranteed inclusions.</p>
        </div>
        <div style={{ overflowX: "auto", background: "#ffffff", border: "1px solid #dedbd3" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", minWidth: 490 }}>
            <tbody>{infoRows.map(([label, value], index) => (
              <tr key={label} style={{ background: index % 2 === 0 ? "#ffffff" : "#f7f5f0", borderBottom: "1px solid #e7e3dc" }}>
                <th scope="row" style={{ width: "31%", padding: "14px 16px", fontSize: 13, verticalAlign: "top", color: "#252620" }}>{label}</th>
                <td style={{ padding: "14px 16px", fontSize: 13, lineHeight: 1.7, color: "#56544d" }}>{value}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <p style={{ marginTop: 10, fontSize: 12, color: "#777168", lineHeight: 1.65 }}>All operational details are confirmed in writing before a booking is finalised.</p>
      </section>

      {/* Region and culture */}
      <section className="cl-planning cl-wrap" style={{ paddingTop: 12, paddingBottom: 62 }}>
        <div className="cl-section-heading">
          <div><p className="cl-eyebrow cl-eyebrow--dark">LOCAL HIGHLIGHTS & CULTURE</p><h2>Beyond the trail</h2></div>
          <p>A cycling journey is also a chance to take in the landscapes, villages and local culture along the way. Stops depend on the final route and timing.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: 14 }}>
          {[
            { title: "Mountain and valley landscapes", text: `Explore the scenery of ${tour.region}, with route choices that may pass through changing valleys, ridgelines and rural terrain where local access permits.` },
            { title: "Village life and local encounters", text: "Leave realistic time for planned stops, refreshments and respectful encounters with communities along the route. Specific stops should be confirmed with your guide." },
            { title: "Moroccan food and hospitality", text: "Discuss meals, dietary needs and local food experiences as part of the trip plan. The exact meal arrangements and what is included will be stated in your proposal." },
            { title: "A pace that leaves room to explore", text: "A well-paced itinerary considers more than riding distance: transfers, rest, weather, photo stops and the interests of the people travelling with you." },
          ].map((item, index) => (
            <article key={item.title} style={{ background: "#fff", border: "1px solid #dedbd3", padding: 22 }}>
              <span style={{ color: "#a66d18", fontSize: 11, letterSpacing: ".1em", fontWeight: 800 }}>LOCAL MOMENT 0{index + 1}</span>
              <h3 style={{ fontSize: 17, lineHeight: 1.4, margin: "10px 0" }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.8 }}>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="cl-regions cl-wrap" style={{ paddingTop: 18, paddingBottom: 58, scrollMarginTop: 86 }}>
        <div className="cl-section-heading">
          <div><p className="cl-eyebrow cl-eyebrow--dark">GALLERY</p><h2>A closer look at the ride</h2></div>
          <p>Explore a selection of Morocco cycling and mountain scenery. The final route-specific photo selection can be updated as your tour gallery grows.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 10 }}>
          {galleryImages.map((image, index) => (
            <figure key={`${image}-${index}`} style={{ margin: 0, position: "relative", overflow: "hidden", background: "#e6e1d8", aspectRatio: index === 0 ? "1.45 / 1" : "1.15 / 1", gridColumn: index === 0 ? "span 2" : undefined }}>
              <img src={image} alt={`${tour.title} gallery image ${index + 1}`} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <figcaption style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "18px 12px 10px", color: "#fff", fontSize: 11, fontWeight: 700, background: "linear-gradient(transparent, rgba(0,0,0,.62))" }}>{index === 0 ? tour.title : `${tour.region} · Riding scenery`}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Day-by-day itinerary */}
      <section id="itinerary" className="cl-wrap" style={{ paddingTop: 18, paddingBottom: 64, scrollMarginTop: 86 }}>
        <div className="cl-section-heading">
          <div><p className="cl-eyebrow cl-eyebrow--dark">DAY-BY-DAY EXPEDITION JOURNEY</p><h2>Your suggested {tour.duration} itinerary</h2></div>
          <p>This is an indicative outline based on the advertised trip length. It is not a confirmed operating schedule; exact routes, riding distances, elevation, transfers and overnight stops must be confirmed for your dates.</p>
        </div>
        <article style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", background: "#ffffff", border: "1px solid #dedbd3", marginBottom: 20 }}>
          <div style={{ minHeight: 230, background: "#e7e2d9" }}><img src={tour.image} alt={`${tour.title} featured landscape`} loading="lazy" style={{ width: "100%", height: "100%", minHeight: 230, objectFit: "cover", display: "block" }} /></div>
          <div style={{ padding: "26px 28px", alignSelf: "center" }}>
            <p className="cl-eyebrow cl-eyebrow--dark">ITINERARY AT A GLANCE</p>
            <h3 style={{ fontSize: 22, lineHeight: 1.35, marginTop: 8 }}>{tour.duration} in {tour.region}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.8 }}>The day sequence gives you a framework for discussion. It can be adjusted to arrival times, local conditions, riding experience and the distances that make sense for your group.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}><span style={{ background: "#f4f2ed", padding: "8px 10px", fontSize: 11, fontWeight: 800 }}>{itinerary.length} PLANNED STAGES</span><span style={{ background: "#f4f2ed", padding: "8px 10px", fontSize: 11, fontWeight: 800 }}>ROUTES TO CONFIRM</span></div>
          </div>
        </article>
        <div style={{ display: "grid", gap: 12 }}>
          {itinerary.map((item, index) => (
            <article key={`${item.day}-${item.title}`} style={{ display: "grid", gridTemplateColumns: "minmax(82px, .18fr) minmax(0, 1fr)", gap: 0, background: "#ffffff", border: "1px solid #dedbd3", overflow: "hidden" }}>
              <div style={{ background: index === 0 ? "#252620" : "#f4f2ed", color: index === 0 ? "#ffffff" : "#252620", padding: "20px 16px", display: "flex", flexDirection: "column", justifyContent: "center", borderTop: index === 0 ? "3px solid #c28a2c" : "3px solid #dedbd3" }}>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".11em" }}>DAY</span>
                <strong style={{ fontSize: 29, lineHeight: 1.25 }}>{String(item.day).padStart(2, "0")}</strong>
              </div>
              <div style={{ padding: "20px 23px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, justifyContent: "space-between" }}>
                  <h3 style={{ margin: "0 0 8px", fontSize: 18, lineHeight: 1.4 }}>{item.title}</h3>
                  <span style={{ color: "#a66d18", fontSize: 10, fontWeight: 800, letterSpacing: ".08em" }}>{index === 0 ? "ARRIVAL / PREPARATION" : index === itinerary.length - 1 ? "FINAL STAGE" : "RIDE DAY / ROUTE TO CONFIRM"}</span>
                </div>
                <p style={{ margin: "2px 0 12px", fontSize: 14, lineHeight: 1.8 }}>{item.description}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))", gap: 8 }}>
                  {[ ["Route", "Confirmed with your guide"], ["Distance / climbing", "Provided in the final itinerary"], ["Overnight", "Specified in the tour proposal"] ].map(([label, value]) => (
                    <div key={label} style={{ background: "#f7f5f0", padding: "10px 12px" }}><span style={{ display: "block", fontSize: 10, fontWeight: 800, letterSpacing: ".04em", color: "#777168", marginBottom: 4 }}>{label.toUpperCase()}</span><span style={{ fontSize: 12, lineHeight: 1.5 }}>{value}</span></div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p style={{ marginTop: 14, fontSize: 12, lineHeight: 1.7, color: "#777168" }}>Important: the stage names above are planning outlines derived from the tour concept. They do not confirm a specific GPX track, hotel, transfer, meal or elevation profile.</p>
      </section>

      {/* Summary table */}
      <section className="cl-wrap" style={{ paddingTop: 10, paddingBottom: 58 }}>
        <div className="cl-section-heading">
          <div><p className="cl-eyebrow cl-eyebrow--dark">DAY-BY-DAY SUMMARY</p><h2>Review the trip structure</h2></div>
          <p>Use the summary to discuss how riding, transfer time and rest could fit together. Final timing depends on the confirmed route.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))", gap: 10 }}>
          {itinerary.map((item) => (
            <div key={item.day} style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: 16 }}>
              <span style={{ display: "inline-block", color: "#a66d18", fontSize: 10, fontWeight: 800, letterSpacing: ".08em", marginBottom: 8 }}>DAY {String(item.day).padStart(2, "0")}</span>
              <h3 style={{ margin: "0 0 8px", fontSize: 15, lineHeight: 1.45 }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: 12, lineHeight: 1.65, color: "#666258" }}>{item.day === 1 ? "Arrival, preparation and route briefing" : item.day === itinerary.length ? "Final ride or onward departure" : "Planned riding stage; route and effort confirmed in advance"}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Includes / excluded / preparation */}
      <section id="inclusions" className="cl-wrap" style={{ paddingTop: 12, paddingBottom: 60, scrollMarginTop: 86 }}>
        <div className="cl-section-heading">
          <div><p className="cl-eyebrow cl-eyebrow--dark">WHAT TO EXPECT</p><h2>Inclusions, exclusions and trip arrangements</h2></div>
          <p>We avoid assuming that accommodation, meals, transfers or equipment are included until these items are confirmed in your written proposal.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 270px), 1fr))", gap: 16 }}>
          <article style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: 24 }}>
            <p className="cl-eyebrow cl-eyebrow--dark">CONFIRM AS INCLUDED</p>
            <h3 style={{ marginTop: 8 }}>What your proposal should list</h3>
            <ul style={{ paddingLeft: 20, lineHeight: 1.95, fontSize: 14 }}><li>Local guiding and daily route plan</li><li>Accommodation and meals, if included</li><li>Transfers, luggage and bike transport</li><li>Mechanical support and emergency arrangements</li><li>Rental bike or equipment, if requested</li><li>Price, payment schedule and cancellation terms</li></ul>
          </article>
          <article style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: 24 }}>
            <p className="cl-eyebrow cl-eyebrow--dark">CHECK BEFORE TRAVEL</p>
            <h3 style={{ marginTop: 8 }}>Items that may be separate</h3>
            <ul style={{ paddingLeft: 20, lineHeight: 1.95, fontSize: 14 }}><li>Flights and travel to the meeting point</li><li>Personal travel and medical insurance</li><li>Personal clothing, helmets or specialist kit</li><li>Bike rental, unless clearly included</li><li>Additional nights or activities outside the plan</li><li>Tips and personal purchases</li></ul>
            <p style={{ fontSize: 12, lineHeight: 1.65, color: "#777168" }}>This is a checklist for your enquiry, not a statement of confirmed inclusions or exclusions.</p>
          </article>
        </div>
      </section>

      <section className="cl-planning cl-wrap" style={{ paddingTop: 10, paddingBottom: 58 }}>
        <div className="cl-section-heading">
          <div><p className="cl-eyebrow cl-eyebrow--dark">PLANNING DETAILS</p><h2>Prepare for the journey</h2></div>
          <p>A few practical conversations before departure help the team plan the right bike, route, support and daily pace.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: 14 }}>
          {planningCards.map((item, index) => (
            <article key={item.title} style={{ padding: 22, background: "#ffffff", border: "1px solid #dedbd3" }}>
              <span style={{ display: "inline-block", fontSize: 10, fontWeight: 800, letterSpacing: ".1em", color: "#a66d18", marginBottom: 10 }}>PREPARATION 0{index + 1}</span>
              <h3 style={{ marginTop: 0, fontSize: 17 }}>{item.title}</h3>
              <p style={{ marginBottom: 0, fontSize: 13, lineHeight: 1.8 }}>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Difficulty */}
      <section id="difficulty" className="cl-dark-band" style={{ scrollMarginTop: 86 }}>
        <div className="cl-wrap cl-dark-band__inner">
          <div><p className="cl-eyebrow">DIFFICULTY & RIDER EXPERIENCE</p><h2>{content.difficulty}</h2></div>
          <div>
            <p>{content.difficultyDescription}</p>
            <p>{bestFor}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 150px), 1fr))", gap: 10, margin: "18px 0 22px" }}>
              {[
                ["Fitness", "Plan for repeated days, not only one strong ride."],
                ["Bike handling", "Discuss comfort on loose, steep or technical terrain."],
                ["Endurance", "Agree daily effort, rest and recovery time."],
                ["Conditions", "Weather and local route access can affect the plan."],
              ].map(([label, text]) => <div key={label} style={{ border: "1px solid rgba(255,255,255,.24)", padding: 13 }}><strong style={{ display: "block", marginBottom: 5, fontSize: 12 }}>{label}</strong><span style={{ display: "block", fontSize: 11, lineHeight: 1.65, opacity: .92 }}>{text}</span></div>)}
            </div>
            <Link className="cl-button cl-button--gold" href={bookingHref(tour, "details")}>Discuss difficulty and route options</Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="cl-faq" style={{ scrollMarginTop: 86 }}>
        <div className="cl-wrap cl-faq__inner">
          <div className="cl-faq__intro"><p className="cl-eyebrow cl-eyebrow--dark">FREQUENTLY ASKED QUESTIONS</p><h2>Questions about {tour.title}</h2><p>Here are useful points to cover before you confirm your trip. Exact arrangements are written into the final proposal.</p><Link className="cl-text-link" href={bookingHref(tour, "details")}>Ask a question about this tour <span aria-hidden="true">↗</span></Link></div>
          <div className="cl-faq-list">
            {faqs.map((faq, index) => <details className="cl-faq-item" key={faq.question} open={index === 0}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}
            <details className="cl-faq-item"><summary>Are exact distances and elevation published here?<span aria-hidden="true">+</span></summary><p>No measured distance or elevation is assumed here. Ask for route-specific details and, where available, the planned GPX information before booking.</p></details>
            <details className="cl-faq-item"><summary>Can the trip be adjusted for our group?<span aria-hidden="true">+</span></summary><p>Discuss dates, group size, riding style, fitness, accommodation preferences and support needs. Any changes should be agreed before the itinerary is confirmed.</p></details>
          </div>
        </div>
      </section>

      {/* Strong enquiry CTA */}
      <section id="enquire" className="cl-final-cta" style={{ scrollMarginTop: 86 }}>
        <img src={tour.image} alt={`${tour.title} in ${tour.region}`} loading="lazy" />
        <div className="cl-final-cta__overlay" />
        <div className="cl-wrap cl-final-cta__content">
          <p className="cl-eyebrow">LET'S PLAN YOUR RIDE</p>
          <h2>Ready to plan {tour.title}?</h2>
          <p>Share your dates, group size, riding experience and what you would like to get out of this {tour.duration} trip. We can then discuss the route, support and arrangements that fit your plans.</p>
          <div className="cl-actions"><Link className="cl-button cl-button--gold" href={bookingHref(tour, "booking")}>Enquire / Booking</Link><Link className="cl-button cl-button--outline" href={bookingHref(tour, "details")}>Request more details</Link></div>
        </div>
      </section>

      {/* Related tours keep the card and button system used by the listing page */}
      <section className="cl-tours" style={{ paddingTop: 56, paddingBottom: 64 }}>
        <div className="cl-wrap">
          <div className="cl-section-heading"><div><p className="cl-eyebrow cl-eyebrow--dark">KEEP EXPLORING</p><h2>More private group cycling tours in Morocco</h2></div><p>Compare other private group options and enquire about the trip that best fits your group, dates and riding goals.</p></div>
          <div className="cl-tour-grid">{relatedTours.map((related) => (
            <article className="cl-tour-card" key={related.slug}>
              <Link className="cl-tour-card__image-link" href={`/cycling-trips/trip/${related.slug}`} aria-label={related.title}><img className="cl-tour-card__image" src={related.image} alt={related.title} loading="lazy" /><span className="cl-tour-card__number">{related.number}</span></Link>
              <div className="cl-tour-card__body"><p className="cl-card-label">{related.label}</p><p className="cl-tour-card__duration" style={{ fontSize: 12, lineHeight: 1.5, color: "#777168", margin: "-5px 0 12px" }}>{related.duration} · {related.region}</p><h3><Link href={`/cycling-trips/trip/${related.slug}`}>{related.title}</Link></h3><p>{related.description}</p>
                <div className="cl-tour-card__actions" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 10, width: "100%", paddingTop: 18 }}><Link className="cl-button cl-button--dark" style={{ width: "100%", minWidth: 0, minHeight: 46, padding: "10px 8px", fontSize: 12, textAlign: "center", justifyContent: "center", backgroundColor: "#252620", color: "#ffffff", border: "1px solid #252620" }} href={`/cycling-trips/trip/${related.slug}`}>More Details</Link><Link className="cl-button cl-button--gold" style={{ width: "100%", minWidth: 0, minHeight: 46, padding: "10px 8px", fontSize: 12, textAlign: "center", justifyContent: "center" }} href={bookingHref(related, "booking")}>Booking</Link></div>
              </div>
            </article>))}</div>
        </div>
      </section>

      <footer className="site-footer cycling-listing__footer">
        <div className="page-width footer-grid">
          <div className="footer-brand"><Link className="brand" href="/"><img className="brand__logo" src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link><p>Guided private group mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, trails and local culture at your own pace.</p></div>
          <div><h3>Explore</h3><Link href="/cycling-holiday-morocco">All Cycling Tours</Link><Link href="/cycling-trips/private-groups">Private Group Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil-toubkal">Imlil &amp; Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations/agafay-desert">Agafay Desert</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let's plan</h3><Link href="/about">About Us</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="page-width footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span></div>
      </footer>
    </main>
  );
}
