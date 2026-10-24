import Link from "next/link";
import { notFound } from "next/navigation";

type LuxuryTour = {
  number: string;
  label: string;
  title: string;
  duration: string;
  region: string;
  description: string;
  image: string;
  slug: string;
  routeType: string;
  difficulty: string;
  difficultyDescription: string;
  highlights: string[];
  stages: string[];
  gallery: string[];
  routeNotes: string;
};

const tours: Record<string, LuxuryTour> = {
  "high-atlas-luxury-cycling-escape-5-day": {
    "number": "01",
    "label": "BOUTIQUE STAYS & MOUNTAIN SCENERY",
    "title": "High Atlas Luxury Cycling Escape",
    "duration": "5 days",
    "region": "High Atlas Mountains",
    "description": "Explore the High Atlas through a carefully paced cycling journey that combines mountain scenery, rural roads and time to appreciate the places along the route. A luxury escape can balance rewarding rides with comfortable accommodation, regional food and thoughtful logistics. Your itinerary should be planned around the season, daily distance, climbing preferences and the level of support you would like, with accommodation and inclusions confirmed before travel.",
    "image": "/images/luxury-cycling-morocco.jpg",
    "slug": "high-atlas-luxury-cycling-escape-5-day",
    "routeType": "Boutique mountain cycling escape",
    "difficulty": "Moderate; route customisable",
    "difficultyDescription": "This journey can range from relaxed scenic cycling to more demanding mountain riding depending on the chosen route. Daily climbing, surface and distance should be set around fitness, weather and the group’s preferred pace.",
    "highlights": [
      "Enjoy High Atlas scenery with time for viewpoints and village stops",
      "Balance rewarding riding with comfortable stays and recovery",
      "Discuss accommodation, transfers and guiding before travel",
      "Shape daily distances and climbing around your group"
    ],
    "stages": [
      "Arrival, welcome briefing and bike check",
      "Opening ride through the Atlas foothills",
      "Scenic mountain route with village stops",
      "A longer ride or alternative scenic stage",
      "Final ride, departure arrangements and onward travel"
    ],
    "gallery": [
      "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
      "/images/group-cycling-tour-morocco.jpg",
      "/images/morocco-luxury-bike-tour.jpg",
      "/images/luxury-cycling-holiday-trip-morocco.jpg"
    ],
    "routeNotes": "A comfort-focused Atlas itinerary with the route, daily effort, overnight stays and included services agreed in the written proposal."
  },
  "ouirgane-boutique-cycling-weekend-2-day": {
    "number": "02",
    "label": "A PRIVATE COUNTRY ESCAPE",
    "title": "Ouirgane Boutique Cycling Weekend",
    "duration": "2 days",
    "region": "Ouirgane & Western Atlas",
    "description": "Enjoy a shorter escape into the quieter landscapes around Ouirgane, where cultivated valleys, mountain views and traditional settlements provide a relaxed setting for cycling. This itinerary can suit a couple or a small private group looking to combine riding with time in the countryside. The route, accommodation, transfer arrangements and riding pace should be agreed in advance so the weekend feels comfortable rather than rushed.",
    "image": "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    "slug": "ouirgane-boutique-cycling-weekend-2-day",
    "routeType": "Boutique two-day cycling escape",
    "difficulty": "Easy to moderate; route dependent",
    "difficultyDescription": "A shorter, flexible escape. Route gradients, surfaces and riding time should be matched to the group’s experience, with options discussed before the trip is confirmed.",
    "highlights": [
      "Ride through the cultivated valleys and foothills around Ouirgane",
      "Combine gentle cycling with a boutique countryside stay",
      "Allow time for local food and village scenery",
      "Choose the distance and pace that fit your weekend"
    ],
    "stages": [
      "Arrive in the Ouirgane area, check bikes and enjoy a scenic afternoon ride",
      "Morning ride through the surrounding valleys, then departure or onward transfer"
    ],
    "gallery": [
      "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
      "/images/luxury-cycling-morocco.jpg",
      "/images/group-cycling-tour-morocco.jpg"
    ],
    "routeNotes": "A short Western Atlas escape where accommodation, ride length, meals and transfers should be confirmed for the selected dates."
  },
  "private-luxury-endurance-cycling-camp-7-day": {
    "number": "03",
    "label": "PERSONALISED TRAINING & ENDURANCE",
    "title": "Private Luxury Endurance Cycling Camp",
    "duration": "7 days",
    "region": "Atlas Mountains · private itinerary",
    "description": "Plan a week of focused riding in Morocco with stages shaped around your fitness, climbing goals and preferred training rhythm. An endurance camp may combine longer cycling experiences, mountain routes and recovery time, while private logistics allow the daily programme to be discussed around the group. Route distances, elevation, accommodation, support and rest periods should all be considered before the final itinerary is confirmed.",
    "image": "/images/luxury-biking-ebike-tours-morocco.jpg",
    "slug": "private-luxury-endurance-cycling-camp-7-day",
    "routeType": "Private endurance-focused cycling camp",
    "difficulty": "Moderate to challenging; tailored to goals",
    "difficultyDescription": "Designed for riders with a clear fitness objective, but exact intensity can be adjusted. Training load, climbing, recovery and any support arrangements should be agreed with the group before travel.",
    "highlights": [
      "Build a week around your riding and endurance goals",
      "Balance longer rides with recovery and relaxed evenings",
      "Discuss support, accommodation and transfers for the group",
      "Adjust route effort around the riders and season"
    ],
    "stages": [
      "Arrival, goals discussion and bike setup",
      "Steady opening ride and pacing review",
      "Longer endurance stage with planned stops",
      "Recovery ride or optional cultural activity",
      "Main training ride based on group goals",
      "Scenic final full ride with support as agreed",
      "Wrap-up, bike packing and departure"
    ],
    "gallery": [
      "/images/luxury-biking-ebike-tours-morocco.jpg",
      "/images/luxury-cycling-holiday-tour-morocco.jpg",
      "/images/luxury-cycling-morocco.jpg",
      "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"
    ],
    "routeNotes": "A private riding programme rather than a fixed training prescription. Distances, elevation, recovery and any vehicle support are confirmed with the guide."
  },
  "luxury-family-cycling-holiday-6-day": {
    "number": "04",
    "label": "PRIVATE GROUPS & SHARED EXPERIENCES",
    "title": "Luxury Family Cycling Holiday",
    "duration": "6 days",
    "region": "Marrakech & Atlas Mountains",
    "description": "Discover Morocco together on a private cycling holiday designed around the ages, confidence and interests of the people travelling. A family itinerary can combine suitable rides with cultural visits, scenic stops and time to relax between activities. Routes must be selected carefully for the least experienced riders, while accommodation, transfers, equipment and daily schedules should be reviewed to ensure the trip works for the whole family.",
    "image": "/images/group-cycling-tour-morocco.jpg",
    "slug": "luxury-family-cycling-holiday-6-day",
    "routeType": "Private family cycling holiday",
    "difficulty": "Flexible; selected for the least experienced rider",
    "difficultyDescription": "The route should work for the least experienced person in the family. Distance, terrain, rest stops and non-cycling activities can be adjusted to ages, confidence, weather and energy levels.",
    "highlights": [
      "Plan appropriate routes for different ages and confidence levels",
      "Mix cycling with cultural stops and time to relax",
      "Discuss family-friendly accommodation and transfers",
      "Keep daily stages flexible around everyone travelling"
    ],
    "stages": [
      "Arrive, meet the team and review the family plan",
      "Easy introductory ride near the chosen base",
      "Scenic countryside ride with stops and flexible pace",
      "Cultural visit or shorter ride depending on the family",
      "Choose a highlight ride suitable for the group",
      "Final activity, check-out and onward travel"
    ],
    "gallery": [
      "/images/group-cycling-tour-morocco.jpg",
      "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
      "/images/luxury-cycling-morocco.jpg",
      "/images/cycling-holiday-morocco.jpg"
    ],
    "routeNotes": "A family-focused programme with riding and non-riding time chosen around the ages, interests and experience of everyone travelling."
  },
  "morocco-luxury-cycling-week-7-day": {
    "number": "05",
    "label": "A WEEK OF CURATED RIDING",
    "title": "Morocco Luxury Cycling Week",
    "duration": "7 days",
    "region": "Morocco · region tailored to dates",
    "description": "Spend a week discovering Morocco by bike with an itinerary that can connect mountain scenery, quiet countryside roads and selected cultural stops. The focus is on balancing rewarding rides with time to enjoy each destination rather than moving too quickly between regions. Daily mileage, climbing, travel time, accommodation preferences and support arrangements should be discussed together to create a practical journey for your dates and group.",
    "image": "/images/morocco-luxury-bike-tour.jpg",
    "slug": "morocco-luxury-cycling-week-7-day",
    "routeType": "Curated multi-day cycling holiday",
    "difficulty": "Flexible; matched to the chosen routes",
    "difficultyDescription": "The week can be tailored from relaxed scenic cycling to more demanding mountain stages. The final effort depends on route choice, elevation, daily distance and how much time you want for cultural visits and comfort.",
    "highlights": [
      "Connect scenic riding with carefully selected places to stay",
      "Choose one region or a manageable combination of landscapes",
      "Plan transfers and riding stages at a considered pace",
      "Make room for food, culture and time away from the bike"
    ],
    "stages": [
      "Arrival and itinerary briefing",
      "Opening ride in the chosen region",
      "Scenic cycling day with local stops",
      "Transfer or alternate ride depending on the route plan",
      "Signature ride and time to discover the area",
      "Final full riding day or relaxed scenic option",
      "Departure arrangements and onward travel"
    ],
    "gallery": [
      "/images/morocco-luxury-bike-tour.jpg",
      "/images/luxury-cycling-morocco.jpg",
      "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
      "/images/cycling-holiday-morocco.jpg"
    ],
    "routeNotes": "A seven-day framework for a curated holiday. Region selection, accommodation standard, services and day-to-day riding are confirmed in the final proposal."
  },
  "sahara-edge-luxury-cycling-expedition-7-day": {
    "number": "06",
    "label": "SOUTHERN LANDSCAPES & WIDE HORIZONS",
    "title": "Sahara Edge Luxury Cycling Expedition",
    "duration": "7 days",
    "region": "Southern Morocco · Sahara edge",
    "description": "Travel towards the south of Morocco on a cycling journey through changing landscapes, dry valleys and communities shaped by the desert environment. A longer expedition needs careful attention to temperatures, water, distances between services and transfer times. A considered schedule makes room for riding, local experiences and recovery, while accommodation and support are planned around the selected route and the group’s needs.",
    "image": "/images/sahara-morocco-cycling-holiday.jpg",
    "slug": "sahara-edge-luxury-cycling-expedition-7-day",
    "routeType": "Southern multi-day cycling expedition",
    "difficulty": "Moderate; heat and stage dependent",
    "difficultyDescription": "The main considerations are temperature, exposure, daily distance and the distance between services. Schedule and support should be matched to the season and group rather than assuming the same effort every day.",
    "highlights": [
      "Discover southern landscapes and oasis-country scenery",
      "Balance riding with transfers, comfort and recovery",
      "Plan carefully around heat, hydration and service access",
      "Discuss overnight stays and support before confirming"
    ],
    "stages": [
      "Travel south, settle in and review the route",
      "Opening ride through the southern landscape",
      "Longer stage with planned refreshment stops",
      "Scenic ride and time to explore a local area",
      "Flexible ride or transfer depending on conditions",
      "Final full ride or relaxed alternative stage",
      "Departure arrangements and onward journey"
    ],
    "gallery": [
      "/images/sahara-morocco-cycling-holiday.jpg",
      "/images/south-morocco-cycling-expedition.jpg",
      "/images/cycling-holiday-morocco.jpg",
      "/images/morocco-luxury-bike-tour.jpg"
    ],
    "routeNotes": "A southern trip concept; actual route, towns, daily riding, water stops, accommodation and transfer legs must be agreed for the chosen dates."
  },
  "skoura-palm-groves-and-kasbahs-ride-3-day": {
    "number": "07",
    "label": "PALM GROVES, KASBAHS & SOUTHERN ROADS",
    "title": "Skoura Palm Groves and Kasbahs Ride",
    "duration": "3 days",
    "region": "Skoura & southern oasis country",
    "description": "Explore the landscapes around Skoura through a short cycling journey featuring palm groves, oasis scenery and historic kasbah country. This experience can blend relaxed riding with time to appreciate local architecture and rural life. The final stages should be planned around the distance you want to ride, road or track conditions, the season and the standard of accommodation preferred for the trip.",
    "image": "/images/cycling-holiday-morocco.jpg",
    "slug": "skoura-palm-groves-and-kasbahs-ride-3-day",
    "routeType": "Oasis and cultural cycling escape",
    "difficulty": "Easy to moderate; route dependent",
    "difficultyDescription": "Often suited to a relaxed pace, depending on surface, heat and chosen distance. Plan around conditions, bike type and available daylight, with options adjusted for the group.",
    "highlights": [
      "Ride among palm groves and oasis landscapes",
      "Include time for kasbah country and local culture",
      "Balance cycling with relaxed stops and comfortable stays",
      "Choose a suitable pace for the three-day escape"
    ],
    "stages": [
      "Arrive in the Skoura area and take a short orientation ride",
      "Explore palm groves, oasis roads and cultural stops",
      "Final gentle ride or walk before departure"
    ],
    "gallery": [
      "/images/cycling-holiday-morocco.jpg",
      "/images/sahara-morocco-cycling-holiday.jpg",
      "/images/south-morocco-cycling-expedition.jpg"
    ],
    "routeNotes": "A short oasis-area trip combining cycling and local discovery. Exact riding distances, stops, accommodation and transfers should be confirmed."
  },
  "tafraoute-and-anti-atlas-boutique-cycling-5-day": {
    "number": "08",
    "label": "GRANITE LANDSCAPES & BOUTIQUE COMFORT",
    "title": "Tafraoute and Anti-Atlas Boutique Cycling",
    "duration": "5 days",
    "region": "Tafraoute & Anti-Atlas",
    "description": "Discover the distinctive rock formations, mountain roads and quiet communities of the Anti-Atlas on a boutique cycling escape. The region offers a different atmosphere from the High Atlas, with route options shaped by the terrain and the distance between overnight stops. Planning should account for elevation, weather, road surfaces and support needs while leaving enough time to enjoy the landscape and local culture.",
    "image": "/images/south-morocco-cycling-expedition.jpg",
    "slug": "tafraoute-and-anti-atlas-boutique-cycling-5-day",
    "routeType": "Boutique southern mountain cycling journey",
    "difficulty": "Moderate; elevation and temperature dependent",
    "difficultyDescription": "The region can involve climbing, remote stretches and warm exposed conditions. Select daily distance and elevation around fitness, time of year, service access and the group’s preferred riding style.",
    "highlights": [
      "Discover the granite scenery around Tafraoute",
      "Ride quiet mountain roads and selected rural tracks",
      "Combine cycling with local food and community stops",
      "Build a comfortable rhythm with sensible daily stages"
    ],
    "stages": [
      "Arrive in the Anti-Atlas area and review the route",
      "Opening ride through the surrounding landscape",
      "Longer scenic stage with planned breaks",
      "Explore another valley or choose a shorter alternative",
      "Final ride, check-out and departure arrangements"
    ],
    "gallery": [
      "/images/south-morocco-cycling-expedition.jpg",
      "/images/cycling-holiday-morocco.jpg",
      "/images/sahara-morocco-cycling-holiday.jpg",
      "/images/luxury-cycling-morocco.jpg"
    ],
    "routeNotes": "A five-day Anti-Atlas idea with confirmed overnight locations, daily routes and support arrangements set out in the final itinerary."
  },
  "tizi-n-test-luxury-cycling-journey-4-day": {
    "number": "09",
    "label": "ICONIC CLIMBS & SCENIC STAGES",
    "title": "Tizi n'Test Luxury Cycling Journey",
    "duration": "4 days",
    "region": "High Atlas · Tizi n’Test area",
    "description": "Build a short cycling journey around the mountain scenery and climbing routes of the Tizi n’Test region. The experience should be matched to your climbing ability, riding pace and comfort on descents, with the weather and road conditions checked for the travel dates. Discuss accommodation, transfers and any support requirements in advance so the riding stages and overnight stops fit together realistically.",
    "image": "/images/road-cycling-holiday-tour-morocco.jpg",
    "slug": "tizi-n-test-luxury-cycling-journey-4-day",
    "routeType": "Mountain-pass cycling journey",
    "difficulty": "Moderate to challenging; climb dependent",
    "difficultyDescription": "The signature pass can be demanding because of sustained gradients, altitude and descent conditions. Final ride length, climbing, start time and support should be discussed for the season and group.",
    "highlights": [
      "Experience mountain scenery around the Tizi n’Test area",
      "Plan climbs and descents around your experience",
      "Combine riding with carefully arranged stays and transfers",
      "Allow for weather and road conditions at altitude"
    ],
    "stages": [
      "Arrival and route briefing with a short warm-up ride",
      "Main mountain climb and scenic stops",
      "A second scenic stage or flexible local exploration",
      "Final ride and onward travel arrangements"
    ],
    "gallery": [
      "/images/road-cycling-holiday-tour-morocco.jpg",
      "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
      "/images/luxury-cycling-morocco.jpg"
    ],
    "routeNotes": "A mountain-focused journey requiring route and weather checks; the exact pass, daily climbing and transfer plan are confirmed before travel."
  },
  "todra-and-dades-luxury-road-journey-6-day": {
    "number": "10",
    "label": "GORGES, VALLEYS & COMFORTABLE STAGES",
    "title": "Todra and Dades Luxury Road Journey",
    "duration": "6 days",
    "region": "Todra Gorge & Dades Valley",
    "description": "Experience the dramatic scenery of the Todra and Dades regions on a luxury cycling holiday that balances riding with time to explore southern Morocco. Stages can be planned around your preferred daily distance, while transfers and overnight stops help connect the landscapes without making every day too demanding. Temperature, water, road conditions and the available services should be factored into the final schedule.",
    "image": "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    "slug": "todra-and-dades-luxury-road-journey-6-day",
    "routeType": "Southern road and valley journey",
    "difficulty": "Moderate; route dependent",
    "difficultyDescription": "Daily effort depends on distance, gradients, heat and how the stages are linked. Confirm the route, hydration stops, surface conditions and any support before booking.",
    "highlights": [
      "See the dramatic landscapes of Todra and Dades",
      "Balance scenic planned stages with comfortable overnight stops",
      "Plan for heat, water access and transfers",
      "Leave time to experience southern towns and local culture"
    ],
    "stages": [
      "Arrive in the region and review the itinerary",
      "Opening valley ride with a relaxed pace",
      "Scenic stage near the gorge or surrounding roads",
      "Longer ride with planned food and water stops",
      "Flexible scenic ride or transfer to the next stay",
      "Final ride, check-out and onward travel"
    ],
    "gallery": [
      "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
      "/images/sahara-morocco-cycling-holiday.jpg",
      "/images/south-morocco-cycling-expedition.jpg",
      "/images/cycling-holiday-morocco.jpg"
    ],
    "routeNotes": "A six-day southern road journey with route, overnight stays, services, water stops and any transfer days confirmed in the written proposal."
  },
  "private-luxury-cycling-holiday-morocco-7-day": {
    "number": "11",
    "label": "A JOURNEY DESIGNED AROUND YOU",
    "title": "Private Luxury Cycling Holiday in Morocco",
    "duration": "7 days · tailor-made option",
    "region": "Morocco · private itinerary",
    "description": "Create a private cycling holiday around your dates, riding style, destinations and preferred level of comfort. Your journey may focus on one region or connect several parts of Morocco if the available time allows. Share your group size, fitness, preferred bike type, accommodation expectations and support requirements so the route and practical inclusions can be discussed before you decide how to proceed.",
    "image": "/images/luxury-cycling-holiday-trip-morocco.jpg",
    "slug": "private-luxury-cycling-holiday-morocco-7-day",
    "routeType": "Custom private luxury cycling itinerary",
    "difficulty": "Designed around the group",
    "difficultyDescription": "The level is designed around the group and the routes selected. Share everyone’s experience, preferred daily distance and comfort priorities so the itinerary can balance suitable riding with travel and recovery.",
    "highlights": [
      "Choose regions and riding experiences around your interests",
      "Discuss the level of comfort and accommodation you prefer",
      "Balance cycling with culture, food and time to relax",
      "Agree services, transfers and inclusions before confirmation"
    ],
    "stages": [
      "Arrival, welcome and trip-planning briefing",
      "Opening ride selected for the group",
      "Main ride or scenic route in the chosen region",
      "Flexible culture, rest or transfer day as agreed",
      "Signature ride matched to your preferences",
      "Final full ride or relaxed alternative",
      "Review arrangements and depart"
    ],
    "gallery": [
      "/images/luxury-cycling-holiday-trip-morocco.jpg",
      "/images/luxury-cycling-morocco.jpg",
      "/images/morocco-luxury-bike-tour.jpg",
      "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"
    ],
    "routeNotes": "This is a customisable seven-day starting point, not a fixed package. Region, stages, lodging, guide services and inclusions are confirmed in the written proposal."
  }
};

type TourContent = Pick<LuxuryTour, "highlights" | "difficulty" | "difficultyDescription" | "stages" | "gallery">;

function bookingHref(tour: LuxuryTour, request: "details" | "booking" = "details") {
  return `/contact?tour=${encodeURIComponent(tour.title)}&destination=${encodeURIComponent(tour.region)}&request=${request}`;
}

function getRouteStyle(tour: LuxuryTour) {
  return tour.routeType;
}

function getTerrainNotes(tour: LuxuryTour) {
  return tour.routeNotes;
}

function getBestFor(tour: LuxuryTour, content: TourContent) {
  const text = `${tour.title} ${tour.label}`.toLowerCase();
  if (text.includes("family")) return "Families and mixed-ability groups who want a carefully paced itinerary with suitable rides, cultural visits and time to relax.";
  if (text.includes("endurance")) return "Riders who want to build a week around fitness goals, longer stages and planned recovery.";
  if (text.includes("sahara") || text.includes("south") || text.includes("skoura") || text.includes("todra") || text.includes("dades")) return "Travellers who want to combine riding in southern landscapes with thoughtful logistics, local discovery and comfortable stays.";
  if (text.includes("private")) return "Couples, friends or groups who want to discuss a tailored cycling holiday, accommodation and support around shared preferences.";
  if (text.includes("weekend") || text.includes("ouirgane")) return "Riders looking for a shorter countryside escape with a considered pace and time to enjoy the setting.";
  return `Cyclists who want a ${content.difficulty.toLowerCase()} experience that balances suitable riding, comfort and time to discover Morocco.`;
}

function makeDayDescription(tour: LuxuryTour, stage: string, index: number, total: number) {
  const lower = stage.toLowerCase();
  if (lower.includes("arrival") || lower.includes("welcome") || lower.includes("briefing") || lower.includes("bike check")) {
    return `Arrive, meet the team and review the planned experience for ${tour.title}. Confirm the accommodation, start time, bike arrangements, transfers and any personal preferences before the first ride.`;
  }
  if (lower.includes("departure") || lower.includes("onward travel") || lower.includes("depart") || lower.includes("check-out")) {
    return `Finish the trip with the final ride or departure arrangements agreed for your schedule. Confirm luggage, checkout, transfers and any onward travel details in advance.`;
  }
  if (lower.includes("recovery") || lower.includes("rest") || lower.includes("flexible") || lower.includes("cultural") || lower.includes("transfer")) {
    return `Keep this day flexible for a shorter ride, local experience, rest or transfer according to the chosen itinerary. The final plan should make clear what is included and how the day is arranged.`;
  }
  if (lower.includes("family")) {
    return `Choose an accessible ride or activity suited to the ages and confidence of everyone travelling, with planned breaks and a relaxed schedule. Route and support are confirmed for the group.`;
  }
  if (lower.includes("southern") || lower.includes("sahara") || lower.includes("skoura") || lower.includes("oasis")) {
    return `Explore the selected southern landscape with a sensible pace and planned refreshment stops. Temperature, water access, distance between services and comfortable overnight arrangements should be confirmed.`;
  }
  if (lower.includes("atlas") || lower.includes("mountain") || lower.includes("climb") || lower.includes("pass")) {
    return `Enjoy a planned ride through ${tour.region}, with the distance, climbing, breaks and support chosen for your group. Confirm route conditions, weather and the day's finish arrangements before departure.`;
  }
  return `Experience a ride or local activity selected around ${tour.region}, with time for breaks and discovery. Exact distance, route, services and support are confirmed in the final itinerary.`;
}

function makeFaqs(tour: LuxuryTour, content: TourContent) {
  return [
    { question: `What is included in the ${tour.duration} ${tour.title}?`, answer: `Inclusions vary by itinerary. Ask for a written breakdown covering guiding, accommodation, meals, transfers, luggage support, bike arrangements and any special experiences so you know exactly what is included.` },
    { question: `How demanding is this luxury cycling holiday?`, answer: `${content.difficulty}. ${content.difficultyDescription} Share your recent riding experience, preferred distance and any comfort or support needs so the trip can be planned realistically.` },
    { question: "Can accommodation and the itinerary be customised?", answer: "Accommodation standard, route, daily effort, transfer arrangements and cultural activities can be discussed for a private enquiry. Any selected services and inclusions should be written into the proposal before booking." },
    { question: "Can I bring my own bike?", answer: "You can enquire about travelling with your own bike. Packing, airline rules, transfers, assembly, storage and mechanical support should be checked against the final itinerary." },
    { question: "Is this tour suitable for families or mixed-ability groups?", answer: "Suitability depends on the chosen itinerary and the people travelling. Share ages, riding experience, fitness and preferred daily effort so the route, activities and schedule can be designed appropriately." },
    { question: "What should I bring?", answer: "Bring cycling clothing suited to the season, a helmet, gloves, eye protection, sun protection, hydration and basic personal items. Depending on region and altitude, warm layers or a waterproof jacket may be useful. Confirm a trip-specific packing list before travel." },
    { question: "When is the best time for a luxury cycling trip in Morocco?", answer: "Conditions vary by region and altitude. Spring and autumn are often comfortable for many routes, while mountain areas can be colder and southern areas can be very hot in summer. Choose dates based on the selected route and confirm the expected conditions before finalising the trip." },
  ];
}

export default function LuxuryTripDetail({ slug }: { slug: string }) {
  const tour = tours[slug];
  if (!tour) notFound();
  const content: TourContent = tour;

  const relatedTours = Object.values(tours)
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

  // Use only this tour's own featured and gallery images. The previous
  // shared fallback list mixed images between tours and included filenames
  // that did not match the listing's image paths.
  const galleryImages = Array.from(new Set([
    tour.image,
    ...content.gallery,
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
    ["Daily riding & activities", "Confirmed in your tailored itinerary before booking"],
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
    { title: "Bike & personal equipment", text: "Discuss bike arrangements, luggage transfers, personal equipment and any support you need. Confirm which services and equipment are provided before travel." },
    { title: "Clothing & protection", text: "Bring a properly fitting helmet, gloves, eye protection, luxury cycling shoes and sun protection. Depending on season and elevation, warm layers and a lightweight waterproof may also be necessary." },
    { title: "Hydration & personal needs", text: "Confirm water-carrying needs, snacks, meals, dietary requirements and any personal support before departure. Remote or exposed routes require additional planning." },
  ];

  return (
    <main className="cycling-listing luxury-page luxury-trip-detail">
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
            <Link className="cl-button cl-button--outline" href="/cycling-trips/luxury">Back to Luxury cycling tours</Link>
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
            <h2 style={{ marginTop: 8, marginBottom: 18 }}>Discover {tour.region} on a {tour.duration} luxury cycling holiday</h2>
            <p style={{ fontSize: 16, lineHeight: 1.85 }}>{tour.description}</p>
            <p style={{ fontSize: 15, lineHeight: 1.85 }}>This trip is a starting point for planning your cycling experience. Route choice, daily mileage, elevation, transfers and accommodation should be confirmed around your travel dates and the needs of your group. Share your recent riding experience, climbing comfort and preferred pace before the itinerary is finalised.</p>
            <p style={{ fontSize: 15, lineHeight: 1.85 }}>Whether you prefer mountain scenery, relaxed countryside rides, a family-friendly itinerary or a multi-region journey, the final plan should balance cycling with comfort, recovery, local experiences and the support arranged for your group.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}>
              <span style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "9px 12px", fontSize: 12, fontWeight: 700 }}>✓ Private enquiry available</span>
              <span style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "9px 12px", fontSize: 12, fontWeight: 700 }}>✓ Route matched to ability</span>
              <span style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "9px 12px", fontSize: 12, fontWeight: 700 }}>✓ Details confirmed before booking</span>
            </div>
          </div>
          <aside style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: 26, boxShadow: "0 8px 25px rgba(37,38,32,.05)" }}>
            <p className="cl-eyebrow cl-eyebrow--dark">PLAN THIS ADVENTURE</p>
            <h3 style={{ marginTop: 8, marginBottom: 14 }}>Ask about dates and availability</h3>
            <p style={{ lineHeight: 1.75, fontSize: 14 }}>Tell us when you want to travel, who is joining, the kind of cycling you enjoy and the comfort level you prefer. We can then discuss suitable routes, accommodation, transfers and the practical details.</p>
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
          <div><p className="cl-eyebrow cl-eyebrow--dark">THE LUXURY CYCLING EXPERIENCE</p><h2>Comfort, discovery and the rhythm of the journey</h2></div>
          <p>The aim is to create the right balance of riding, comfort and discovery for your group. Exact services, route details and timings are confirmed in the itinerary for your dates.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 24, alignItems: "stretch" }}>
          <div style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: 24 }}>
            <h3 style={{ marginTop: 0 }}>Journey character</h3>
            <p style={{ lineHeight: 1.8 }}>{terrainNotes}</p>
            <p style={{ lineHeight: 1.8 }}>{bestFor}</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 20 }}>
              {[["Riding style", routeStyle], ["Trip format", tour.duration], ["Region", tour.region], ["Difficulty", content.difficulty]].map(([label, value]) => (
                <div key={label} style={{ padding: 13, background: "#f4f2ed", borderLeft: "3px solid #c28a2c" }}><span style={{ display: "block", fontSize: 10, fontWeight: 800, letterSpacing: ".06em", color: "#777168", marginBottom: 5 }}>{label.toUpperCase()}</span><strong style={{ display: "block", fontSize: 13, lineHeight: 1.5 }}>{value}</strong></div>
              ))}
            </div>
          </div>
          <div style={{ border: "1px solid #dedbd3", background: "#ffffff", padding: 24 }}>
            <h3 style={{ marginTop: 0 }}>Illustrative journey profile</h3>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>A visual guide to changing effort across planned stages—not a surveyed elevation chart for this specific tour.</p>
            <svg viewBox="0 0 640 220" role="img" aria-label="Illustrative journey profile, not measured tour data" style={{ display: "block", width: "100%", height: "auto", marginTop: 12 }}>
              <defs><linearGradient id="luxuryAreaFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#c28a2c" stopOpacity=".28"/><stop offset="100%" stopColor="#c28a2c" stopOpacity=".03"/></linearGradient></defs>
              {[45, 85, 125, 165].map((y) => <line key={y} x1="16" y1={y} x2="624" y2={y} stroke="#e9e4db" strokeWidth="1" />)}
              <path d="M16 175 L60 160 L95 128 L130 143 L164 90 L205 105 L244 57 L278 83 L315 48 L350 88 L388 72 L425 120 L463 94 L498 133 L535 112 L575 151 L624 142 L624 190 L16 190 Z" fill="url(#luxuryAreaFill)" />
              <path d="M16 175 L60 160 L95 128 L130 143 L164 90 L205 105 L244 57 L278 83 L315 48 L350 88 L388 72 L425 120 L463 94 L498 133 L535 112 L575 151 L624 142" fill="none" stroke="#a66d18" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
              <text x="16" y="212" fill="#777168" fontSize="12">Start</text><text x="320" y="212" fill="#777168" fontSize="12" textAnchor="middle">Trip days</text><text x="624" y="212" fill="#777168" fontSize="12" textAnchor="end">Finish</text>
            </svg>
            <p style={{ fontSize: 11, lineHeight: 1.55, color: "#777168", marginBottom: 0 }}>Actual route distance, elevation, accommodation and service details should be requested in the final trip proposal.</p>
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
          <div><p className="cl-eyebrow cl-eyebrow--dark">LOCAL HIGHLIGHTS & CULTURE</p><h2>Beyond the ride</h2></div>
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
            <ul style={{ paddingLeft: 20, lineHeight: 1.95, fontSize: 14 }}><li>Local guiding and daily experience plan</li><li>Accommodation and meals, if included</li><li>Transfers, luggage and bike transport</li><li>Mechanical support and emergency arrangements</li><li>Rental bike or equipment, if requested</li><li>Price, payment schedule and cancellation terms</li></ul>
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
                ["Riding comfort", "Match the ride type, daily distance and terrain to the experience and confidence of everyone travelling."],
                ["Endurance", "Agree daily effort, rest and recovery time."],
                ["Conditions", "Weather and local conditions can affect the plan."],
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
          <div className="cl-section-heading"><div><p className="cl-eyebrow cl-eyebrow--dark">KEEP EXPLORING</p><h2>More luxury cycling tours in Morocco</h2></div><p>Compare other trip ideas and enquire about the option that best fits your dates and riding goals.</p></div>
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
          <div className="footer-brand"><Link className="brand" href="/"><img className="brand__logo" src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link><p>Guided mountain biking, E-MTB, gravel and luxury cycling experiences across Morocco. Discover the landscapes, roads and local culture at your own pace.</p></div>
          <div><h3>Explore</h3><Link href="/cycling-holiday-morocco">All Cycling Tours</Link><Link href="/cycling-trips/luxury">Luxury Cycling Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/luxury">Luxury Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil-toubkal">Imlil &amp; Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations/agafay-desert">Agafay Desert</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let's plan</h3><Link href="/about">About Us</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="page-width footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span></div>
      </footer>
    </main>
  );
}
