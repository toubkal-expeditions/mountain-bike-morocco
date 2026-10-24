import Link from "next/link";
import { notFound } from "next/navigation";

type RoadTour = {
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

const tours: Record<string, RoadTour> = {
  "high-atlas-road-cycling-tour-6-day": {
    "number": "01",
    "label": "MOUNTAIN PASSES & PANORAMIC CLIMBS",
    "title": "High Atlas Road Cycling Tour",
    "duration": "6 days",
    "region": "High Atlas Mountains",
    "description": "Discover the High Atlas on a road cycling journey shaped around long climbs, mountain scenery and quiet stretches of road. The route can link valleys and high viewpoints while leaving time to recover and enjoy the places along the way. Daily distance, elevation gain and transfer requirements should be considered alongside your experience, the season and the group's preferred pace before an itinerary is confirmed.",
    "image": "/images/road-cycling-tour-morocco.jpg",
    "slug": "high-atlas-road-cycling-tour-6-day",
    "routeType": "Mountain-road stage tour",
    "difficulty": "Moderate to challenging",
    "difficultyDescription": "This trip can involve sustained climbing, rolling mountain roads and several consecutive riding days. The true effort depends on the selected route, daily elevation, weather and your usual riding pace. Confirm the expected distance and climbing before booking.",
    "highlights": [
      "Climb through striking High Atlas mountain scenery",
      "Link rural valleys and mountain roads at a considered pace",
      "Plan daily elevation around the group’s fitness and goals",
      "Make time for viewpoints, village stops and recovery"
    ],
    "stages": [
      "Arrival, bike check and route briefing",
      "Opening ride on foothill roads",
      "A longer climb with planned stops",
      "Valley roads and a new mountain landscape",
      "Main scenic pass ride, subject to conditions",
      "Final ride, bike check and departure arrangements"
    ],
    "gallery": [
      "/images/road-cycling-holiday-tour-morocco.jpg",
      "/images/road-bike-tour-morocco.jpg",
      "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
      "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"
    ],
    "routeNotes": "A road-focused journey with mountain climbs and valley connectors; exact pass choices and daily elevation should be confirmed for the travel dates."
  },
  "tizi-n-test-mountain-pass-ride-1-day": {
    "number": "02",
    "label": "CLASSIC CLIMBING & OPEN VIEWS",
    "title": "Tizi n'Test Mountain Pass Ride",
    "duration": "1 day",
    "region": "High Atlas · Tizi n’Test area",
    "description": "For road cyclists who enjoy sustained climbing and changing mountain scenery, the Tizi n’Test area can be a memorable focus for a ride. Road gradients, descent conditions, weather and traffic need to be considered carefully when planning this kind of route. Choose a realistic distance for the group and allow enough time for breaks, mechanical checks and safe progress across the pass.",
    "image": "/images/road-cycling-holiday-tour-morocco.jpg",
    "slug": "tizi-n-test-mountain-pass-ride-1-day",
    "routeType": "Single-day mountain-pass ride",
    "difficulty": "Challenging; climb dependent",
    "difficultyDescription": "A mountain-pass ride can be demanding because of sustained gradients, total elevation, altitude and descent conditions. It is best suited to riders comfortable with extended climbs and confident road-bike handling. Confirm distance, elevation and expected weather before setting out.",
    "highlights": [
      "Focus on a classic High Atlas climbing experience",
      "Enjoy wide mountain views and changing terrain",
      "Plan a realistic pace with regular stops",
      "Review weather, traffic and descent conditions before departure"
    ],
    "stages": [
      "Meet for a route and safety briefing, warm up on the approach roads, complete the planned climb and scenic stops, then descend carefully and return by the agreed route or transfer. Exact start, distance and timings must be confirmed for the selected date."
    ],
    "gallery": [
      "/images/road-cycling-tour-morocco.jpg",
      "/images/road-cycling-morocco.jpg",
      "/images/road-bike-tour-morocco.jpg",
      "/images/road-cycling-holiday-morocco.jpg"
    ],
    "routeNotes": "A single-day road ride centred on a mountain pass. Exact approach, turn-around point, road conditions and transport support must be checked locally."
  },
  "road-cycling-from-marrakech-1-day": {
    "number": "03",
    "label": "A ROAD RIDE FROM THE RED CITY",
    "title": "Road Cycling from Marrakech",
    "duration": "1 day",
    "region": "Marrakech & Atlas foothills",
    "description": "Use Marrakech as a starting point for a road cycling outing into the surrounding countryside and foothills. Depending on the route, a ride can combine rolling roads, rural scenery and views towards the Atlas Mountains. Start times, transfer arrangements, traffic and climbing vary between options, so discuss your preferred distance, fitness and available time before selecting a ride.",
    "image": "/images/road-cycling-morocco.jpg",
    "slug": "road-cycling-from-marrakech-1-day",
    "routeType": "Day ride from Marrakech",
    "difficulty": "Easy to challenging, route dependent",
    "difficultyDescription": "The difficulty can range from a relaxed countryside ride to a more demanding foothill route. Distance, traffic, heat, climbing and the group’s pace should determine the final plan. Share your normal ride length and fitness level when enquiring.",
    "highlights": [
      "Start with a convenient Marrakech-based ride plan",
      "Explore countryside roads and foothill landscapes",
      "Choose distance and climbing to suit your group",
      "Build in time for refreshment stops and transfers"
    ],
    "stages": [
      "Meet in Marrakech or the agreed start point, check bikes and review the route. Ride the selected countryside or foothill loop with planned stops, then return to the agreed finish point. Distance, climbing, start time and any transfer arrangements are confirmed in advance."
    ],
    "gallery": [
      "/images/road-cycling-morocco.jpg",
      "/images/road-cycling-tour-morocco.jpg",
      "/images/road-cycling-holiday-morocco.jpg",
      "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"
    ],
    "routeNotes": "A single-day ride starting from Marrakech or a nearby agreed start point. The route and transfer needs vary with the distance selected."
  },
  "atlas-mountain-passes-cycling-holiday-7-day": {
    "number": "04",
    "label": "CLIMBS, DESCENTS & MOUNTAIN SCENERY",
    "title": "Atlas Mountain Passes Cycling Holiday",
    "duration": "7 days",
    "region": "High Atlas Mountains",
    "description": "Build a road cycling holiday around the Atlas passes and the valleys that connect them. This style of trip can suit experienced riders who want challenging days, varied elevation and rewarding landscapes, with stages designed around realistic riding time. A practical plan must account for road surfaces, weather at altitude, support vehicles where arranged, accommodation and recovery between demanding rides.",
    "image": "/images/road-bike-tour-morocco.jpg",
    "slug": "atlas-mountain-passes-cycling-holiday-7-day",
    "routeType": "Multi-day mountain-pass journey",
    "difficulty": "Challenging; elevation dependent",
    "difficultyDescription": "Expect repeated riding days and potentially significant climbing. Fitness for sustained ascents, confident descending, road awareness and recovery between stages are important. Final daily distance and elevation must be confirmed against route and weather conditions.",
    "highlights": [
      "Explore a sequence of Atlas road stages and climbs",
      "Balance demanding ascents with suitable recovery",
      "Experience changing valleys and high mountain scenery",
      "Plan logistics and support around consecutive riding days"
    ],
    "stages": [
      "Arrival, bike setup and itinerary briefing",
      "Opening road stage in the foothills",
      "A longer climb with recovery stops",
      "Valley connector and mountain scenery",
      "Main pass day, subject to weather and road conditions",
      "A second scenic road stage or adjusted route",
      "Final ride and departure arrangements"
    ],
    "gallery": [
      "/images/road-bike-tour-morocco.jpg",
      "/images/road-cycling-tour-morocco.jpg",
      "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
      "/images/road-cycling-holiday-morocco.jpg"
    ],
    "routeNotes": "A multi-day road itinerary with several mountain stages. Pass selection, road access, lodging and daily elevation will be specified in the final plan."
  },
  "imlil-and-toubkal-road-cycling-escape-3-day": {
    "number": "05",
    "label": "VALLEYS & TRADITIONAL VILLAGES",
    "title": "Imlil and Toubkal Road Cycling Escape",
    "duration": "3 days",
    "region": "Imlil & Toubkal region",
    "description": "Explore roads and valley approaches around the Imlil and Toubkal region, where mountain views and traditional settlements create a distinctive backdrop for cycling. The route should be planned around the group’s climbing ability, road conditions, elevation and available daylight. This can form a shorter escape or one part of a longer Atlas itinerary, depending on your dates and preferred daily mileage.",
    "image": "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    "slug": "imlil-and-toubkal-road-cycling-escape-3-day",
    "routeType": "Short mountain-road escape",
    "difficulty": "Moderate to challenging",
    "difficultyDescription": "Climbing and elevation can make this short escape more demanding than the distance alone suggests. Discuss fitness, preferred daily mileage, descent confidence and seasonal weather before confirming the route.",
    "highlights": [
      "Ride scenic roads around the Imlil and Toubkal region",
      "Combine foothill routes with mountain viewpoints",
      "Keep the stages appropriate for three days",
      "Leave time for villages, breaks and transfers"
    ],
    "stages": [
      "Arrival, bike check and orientation ride",
      "Main mountain-road stage with planned climbing and stops",
      "Final scenic ride and onward transfer or departure"
    ],
    "gallery": [
      "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
      "/images/road-cycling-tour-morocco.jpg",
      "/images/road-cycling-holiday-morocco.jpg",
      "/images/road-cycling-morocco.jpg"
    ],
    "routeNotes": "A short road escape around the Imlil/Toubkal area; route access, start locations and daily climbing should be agreed locally."
  },
  "atlas-to-sahara-road-cycling-expedition-8-day": {
    "number": "06",
    "label": "MOUNTAINS TO SOUTHERN LANDSCAPES",
    "title": "Atlas to Sahara Road Cycling Expedition",
    "duration": "8 days",
    "region": "High Atlas & southern Morocco",
    "description": "Connect the mountain landscapes of the Atlas with the drier regions of southern Morocco on a road cycling journey planned around changing scenery and manageable stages. Longer-distance trips require attention to transfer time, elevation, temperature, food, water and accommodation between towns. The final route should reflect the season, riding level and time available, with suitable flexibility for weather or road conditions.",
    "image": "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    "slug": "atlas-to-sahara-road-cycling-expedition-8-day",
    "routeType": "Point-to-point multi-region road expedition",
    "difficulty": "Challenging; distance and climate dependent",
    "difficultyDescription": "This expedition combines consecutive riding days with changes in elevation and climate. Heat, exposed sections, long distances between services and transfer timings matter. The final route should match the group’s fitness and the season.",
    "highlights": [
      "Link Atlas mountain roads with southern landscapes",
      "Experience changing elevation and climate across the journey",
      "Plan support, food, water and overnight stops carefully",
      "Balance riding days with transfers and recovery windows"
    ],
    "stages": [
      "Arrival and bike preparation",
      "Opening ride on Atlas foothill roads",
      "Mountain road stage with planned climb",
      "A longer connecting stage through the Atlas region",
      "Transfer or shorter stage toward southern Morocco",
      "Road ride through southern landscapes",
      "Final full riding stage subject to route conditions",
      "Wrap-up and onward travel"
    ],
    "gallery": [
      "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
      "/images/south-morocco-cycling-expedition.jpg",
      "/images/road-cycling-tour-morocco.jpg",
      "/images/road-cycling-holiday-morocco.jpg"
    ],
    "routeNotes": "A multi-region road journey from mountain settings toward the south. Final route, overnight locations and any non-riding transfers need written confirmation."
  },
  "atlantic-coast-road-cycling-tour-4-day": {
    "number": "07",
    "label": "COASTAL ROADS & OCEAN AIR",
    "title": "Atlantic Coast Road Cycling Tour",
    "duration": "4 days",
    "region": "Atlantic Coast & Essaouira area",
    "description": "Experience a different side of Morocco on coastal roads around the Atlantic, where ocean views, fishing communities and quieter stretches can offer a contrast to mountain climbing. Wind, road surface, traffic and the length of exposed sections all influence the riding experience. A well-paced itinerary makes room for breaks and local stops rather than focusing only on distance, and should be adapted to the group’s experience and travel dates.",
    "image": "/images/essaouira-cycling-holiday.jpg",
    "slug": "atlantic-coast-road-cycling-tour-4-day",
    "routeType": "Coastal road-cycling break",
    "difficulty": "Easy to moderate; wind dependent",
    "difficultyDescription": "Distance may be manageable, but coastal wind, exposed roads, traffic and weather can change the effort. Route and pace should be adjusted for the group, and conditions checked before each stage.",
    "highlights": [
      "Explore road routes around Morocco’s Atlantic coastline",
      "Balance riding with ocean views and local stops",
      "Allow for wind exposure and changing coastal conditions",
      "Keep daily stages flexible to match the group"
    ],
    "stages": [
      "Arrival and bike setup near the coast",
      "Opening coastal road ride with planned stops",
      "Longer coastal or countryside stage, weather permitting",
      "Final relaxed ride and departure arrangements"
    ],
    "gallery": [
      "/images/essaouira-cycling-holiday.jpg",
      "/images/road-cycling-morocco.jpg",
      "/images/road-cycling-holiday-morocco.jpg",
      "/images/road-cycling-tour-morocco.jpg"
    ],
    "routeNotes": "Coastal and nearby countryside roads around an agreed base. Daily routes will depend on wind, traffic, road surface and the group’s target distance."
  },
  "south-morocco-road-cycling-journey-6-day": {
    "number": "08",
    "label": "SOUTHERN ROADS & WIDE HORIZONS",
    "title": "South Morocco Road Cycling Journey",
    "duration": "6 days",
    "region": "Southern Morocco",
    "description": "Ride through the wide landscapes of southern Morocco on a road cycling journey that can combine open stretches, dry valleys and traditional settlements. Temperature, water access, distances between services and the amount of climbing need to be considered carefully, particularly on longer stages. Discuss your expected daily mileage and support requirements so the itinerary can be shaped around realistic riding days.",
    "image": "/images/south-morocco-cycling-expedition.jpg",
    "slug": "south-morocco-road-cycling-journey-6-day",
    "routeType": "Multi-day southern road journey",
    "difficulty": "Moderate to challenging; heat dependent",
    "difficultyDescription": "The main factors are repeated riding days, temperatures, exposed roads and the distance between services. Daily distances should be matched to the season and the group’s fitness, with reliable hydration and support arrangements confirmed.",
    "highlights": [
      "Ride open southern roads and dry valley landscapes",
      "Plan carefully around heat, hydration and resupply",
      "Link suitable stages with practical overnight stops",
      "Experience rural communities and changing scenery"
    ],
    "stages": [
      "Arrival and journey briefing",
      "Opening road ride in the southern region",
      "Longer stage with planned water and food stops",
      "Explore a different landscape or valley road",
      "Scenic full riding stage with suitable support",
      "Final ride and onward travel arrangements"
    ],
    "gallery": [
      "/images/south-morocco-cycling-expedition.jpg",
      "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
      "/images/road-cycling-holiday-morocco.jpg",
      "/images/road-cycling-tour-morocco.jpg"
    ],
    "routeNotes": "A southern road itinerary that should specify daily distance, water stops, overnight towns and support arrangements once dates are known."
  },
  "private-morocco-road-cycling-holiday-7-day": {
    "number": "09",
    "label": "YOUR GROUP, YOUR DISTANCE",
    "title": "Private Morocco Road Cycling Holiday",
    "duration": "7 days",
    "region": "Morocco · private itinerary",
    "description": "Plan a private road cycling holiday around your preferred dates, group size, climbing goals and daily distances. Your journey might focus on a single region or connect several landscapes if the travel time allows. Share your riding experience, bike setup, accommodation preferences and support expectations so the route, stages and practical arrangements can be discussed before final decisions are made.",
    "image": "/images/road-cycling-holiday-morocco.jpg",
    "slug": "private-morocco-road-cycling-holiday-7-day",
    "routeType": "Custom private road-cycling itinerary",
    "difficulty": "Set to group ability and goals",
    "difficultyDescription": "Because this is a private itinerary, the level can be designed around the group, from scenic road rides to demanding climbs. Daily distance, elevation, recovery and support need to be agreed before confirmation.",
    "highlights": [
      "Shape the route around your group’s riding goals",
      "Choose preferred distances and climbing priorities",
      "Discuss accommodation, transfers and support needs",
      "Build a schedule around your dates and recovery preferences"
    ],
    "stages": [
      "Arrival, introductions and ride-plan briefing",
      "Opening road stage to establish group pace",
      "Scenic or climbing-focused ride",
      "Longer stage or alternate region depending on the plan",
      "Flexible ride or recovery window",
      "Final full riding stage or scenic option",
      "Wrap-up and departure arrangements"
    ],
    "gallery": [
      "/images/road-cycling-holiday-morocco.jpg",
      "/images/road-cycling-tour-morocco.jpg",
      "/images/road-bike-tour-morocco.jpg",
      "/images/road-cycling-morocco.jpg"
    ],
    "routeNotes": "The itinerary is customisable; final regions, route stages, distance and services are confirmed in the written proposal."
  }
};


type TourContent = Pick<RoadTour, "highlights" | "difficulty" | "difficultyDescription" | "stages" | "gallery">;



function bookingHref(tour: RoadTour, request: "details" | "booking" = "details") {
  return `/contact?tour=${encodeURIComponent(tour.title)}&destination=${encodeURIComponent(tour.region)}&request=${request}`;
}

function getRouteStyle(tour: RoadTour) {
  return tour.routeType;
}

function getTerrainNotes(tour: RoadTour) {
  return tour.routeNotes;
}

function getBestFor(tour: RoadTour, content: TourContent) {
  const text = `${tour.title} ${tour.label}`.toLowerCase();
  if (text.includes("pass") || text.includes("climb")) return "Road riders who enjoy sustained climbs, confident descending and the changing scenery of mountain routes.";
  if (text.includes("marrakech") || text.includes("day ride")) return "Riders looking for a flexible road ride with distance and elevation matched to their time and experience.";
  if (text.includes("coast") || text.includes("atlantic")) return "Riders who enjoy scenic road stages where wind, road conditions and transfer planning are considered.";
  if (text.includes("sahara") || text.includes("south morocco")) return "Riders prepared to plan for long distances, sun exposure, water stops and changing conditions in southern Morocco.";
  if (text.includes("private")) return "Couples, friends or groups who want to discuss a road-cycling itinerary around shared dates, pace and goals.";
  return `Road cyclists whose fitness and riding experience fit a ${content.difficulty.toLowerCase()} route, with distances and elevation confirmed before travel.`;
}

function makeDayDescription(tour: RoadTour, stage: string, index: number, total: number) {
  const lower = stage.toLowerCase();
  if (lower.includes("arrival") || lower.includes("briefing") || lower.includes("bike check") || lower.includes("setup")) {
    return `Meet the team, check your road bike and review the planned route for ${tour.title}. Confirm the start point, expected riding time, weather, traffic and any transfer arrangements before the stage begins.`;
  }
  if (lower.includes("departure") || lower.includes("onward travel") || lower.includes("wrap-up") || lower.includes("return")) {
    return `Complete the final agreed stage or departure arrangements. Whether this includes a full ride depends on travel timings and the confirmed itinerary; check the finish point, luggage and bike transport in advance.`;
  }
  if (lower.includes("transfer") || lower.includes("recovery") || lower.includes("flexible") || lower.includes("rest")) {
    return `Keep this stage flexible for a shorter ride, transfer or recovery depending on the route conditions and the group's needs. The final programme should clarify whether riding is planned and what support is available.`;
  }
  if (lower.includes("coast") || lower.includes("atlantic")) {
    return `Ride the agreed coastal roads and countryside connectors, adjusting the stage for wind, traffic, road surface and conditions. Daily distance, stops and any support arrangements should be confirmed for the date.`;
  }
  if (lower.includes("southern") || lower.includes("sahara") || lower.includes("south morocco")) {
    return `Explore the selected southern road stage with planned food, water and rest stops. Heat, distances between services and exposed sections should inform the final start time and support plan.`;
  }
  if (lower.includes("pass") || lower.includes("climb") || lower.includes("mountain") || lower.includes("atlas")) {
    return `Follow the planned road route through ${tour.region}, with climbing pace and stops set for the group. Confirm expected elevation, descent conditions, road access and weather before the stage.`;
  }
  if (index === total - 1) {
    return `Complete the final road stage or wrap up the trip, depending on departure times and conditions. Confirm the finish point, transfer arrangements and onward travel before the trip begins.`;
  }
  return `Ride a road stage selected around ${tour.region}, your group's preferred pace and planned daily distance. Route, elevation, stops and support arrangements should be confirmed as part of the final itinerary.`;
}

function makeFaqs(tour: RoadTour, content: TourContent) {
  return [
    { question: `What is included in the ${tour.duration} ${tour.title}?`, answer: `Inclusions vary by proposal. Before confirming, ask us to list guiding, transfers, accommodation, meals, luggage support, bike arrangements and any support vehicle planned for ${tour.title}.` },
    { question: `How difficult is this road cycling tour?`, answer: `${content.difficulty}. ${content.difficultyDescription} Share your typical ride distance and climbing experience so the route can be matched to your group.` },
    { question: "Can I bring my own road bike?", answer: "You can discuss bringing your own bike. Airline packing rules, transfers, assembly, gearing, tyres and repair spares should be reviewed against the final route and travel arrangements." },
    { question: "Can the itinerary be adjusted?", answer: "The outline is a planning framework. Daily distances, climbing, rest stops and transfers can be discussed around your travel dates, riding experience, group size and goals." },
    { question: "What should I bring?", answer: "Bring a helmet, gloves, suitable cycling clothing, eye protection, sun protection, hydration and basic repair items. Extra layers or rain protection may be useful at altitude or in changing weather. Confirm a route-specific packing list before travel." },
  ];
}


export default function RoadTripDetail({ slug }: { slug: string }) {
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

  const galleryImages = Array.from(new Set([
    tour.image,
    ...content.gallery,
    "/images/road-cycling-tour-morocco.jpg",
    "/images/road-cycling-morocco.jpg",
    "/images/road-cycling-holiday-morocco.jpg",
    "/images/road-bike-tour-morocco.jpg",
    "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    "/images/essaouira-cycling-holiday.jpg",
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
    { title: "Road bike & equipment", text: "Discuss your road bike, tyre choice, gearing, brakes, tools and spares, and whether you need a rental bike. Bike transport and mechanical support should be confirmed before travel." },
    { title: "Clothing & protection", text: "Bring a properly fitting helmet, gloves, eye protection, road cycling shoes and sun protection. Depending on season and elevation, warm layers and a lightweight waterproof may also be necessary." },
    { title: "Hydration & personal needs", text: "Confirm water-carrying needs, snacks, meals, dietary requirements and any personal support before departure. Remote or exposed routes require additional planning." },
  ];

  return (
    <main className="cycling-listing road-page road-trip-detail">
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
            <Link className="cl-button cl-button--outline" href="/cycling-trips/road">Back to Road tours</Link>
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
            <h2 style={{ marginTop: 8, marginBottom: 18 }}>Discover {tour.region} on a {tour.duration} road cycling journey</h2>
            <p style={{ fontSize: 16, lineHeight: 1.85 }}>{tour.description}</p>
            <p style={{ fontSize: 15, lineHeight: 1.85 }}>This trip is a starting point for planning your road ride. Route choice, daily mileage, elevation, transfers and accommodation should be confirmed around your travel dates and the needs of your group. Share your recent riding experience, climbing comfort and preferred pace before the itinerary is finalised.</p>
            <p style={{ fontSize: 15, lineHeight: 1.85 }}>Whether you are looking for sustained mountain climbs, scenic valley roads, coastal stages or a longer road-cycling journey, the final plan should balance time in the saddle with realistic recovery, local conditions and any support available along the route.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}>
              <span style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "9px 12px", fontSize: 12, fontWeight: 700 }}>✓ Private enquiry available</span>
              <span style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "9px 12px", fontSize: 12, fontWeight: 700 }}>✓ Route matched to ability</span>
              <span style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "9px 12px", fontSize: 12, fontWeight: 700 }}>✓ Details confirmed before booking</span>
            </div>
          </div>
          <aside style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: 26, boxShadow: "0 8px 25px rgba(37,38,32,.05)" }}>
            <p className="cl-eyebrow cl-eyebrow--dark">PLAN THIS ADVENTURE</p>
            <h3 style={{ marginTop: 8, marginBottom: 14 }}>Ask about dates and availability</h3>
            <p style={{ lineHeight: 1.75, fontSize: 14 }}>Tell us when you want to travel, how many riders are in your group and what distance, climbing and road scenery you prefer. We can then discuss a realistic route and confirm the practical details.</p>
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
          <div><p className="cl-eyebrow cl-eyebrow--dark">THE ROAD CYCLING EXPERIENCE</p><h2>Roads, climbs and the rhythm of the journey</h2></div>
          <p>The aim is to choose the right ride for your group, not to publish unverified mileage or elevation figures. These details are confirmed in the itinerary for your dates.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 24, alignItems: "stretch" }}>
          <div style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: 24 }}>
            <h3 style={{ marginTop: 0 }}>Road route character</h3>
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
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>A visual guide to changing effort across road stages—not a surveyed elevation chart for this specific tour.</p>
            <svg viewBox="0 0 640 220" role="img" aria-label="Illustrative mountain terrain profile, not measured elevation data" style={{ display: "block", width: "100%", height: "auto", marginTop: 12 }}>
              <defs><linearGradient id="roadAreaFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#c28a2c" stopOpacity=".28"/><stop offset="100%" stopColor="#c28a2c" stopOpacity=".03"/></linearGradient></defs>
              {[45, 85, 125, 165].map((y) => <line key={y} x1="16" y1={y} x2="624" y2={y} stroke="#e9e4db" strokeWidth="1" />)}
              <path d="M16 175 L60 160 L95 128 L130 143 L164 90 L205 105 L244 57 L278 83 L315 48 L350 88 L388 72 L425 120 L463 94 L498 133 L535 112 L575 151 L624 142 L624 190 L16 190 Z" fill="url(#roadAreaFill)" />
              <path d="M16 175 L60 160 L95 128 L130 143 L164 90 L205 105 L244 57 L278 83 L315 48 L350 88 L388 72 L425 120 L463 94 L498 133 L535 112 L575 151 L624 142" fill="none" stroke="#a66d18" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
              <text x="16" y="212" fill="#777168" fontSize="12">Start</text><text x="320" y="212" fill="#777168" fontSize="12" textAnchor="middle">Ride stages</text><text x="624" y="212" fill="#777168" fontSize="12" textAnchor="end">Finish</text>
            </svg>
            <p style={{ fontSize: 11, lineHeight: 1.55, color: "#777168", marginBottom: 0 }}>Actual distance, elevation gain, descent details and GPX information should be requested with the final road-route proposal.</p>
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
                ["Bike handling", "Discuss confidence on descents, cornering, road surfaces and traffic awareness."],
                ["Endurance", "Agree daily effort, rest and recovery time."],
                ["Conditions", "Weather, traffic and road conditions can affect the plan."],
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
          <div className="cl-section-heading"><div><p className="cl-eyebrow cl-eyebrow--dark">KEEP EXPLORING</p><h2>More road cycling tours in Morocco</h2></div><p>Compare other trip ideas and enquire about the option that best fits your dates and riding goals.</p></div>
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
          <div className="footer-brand"><Link className="brand" href="/"><img className="brand__logo" src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link><p>Guided mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, roads and local culture at your own pace.</p></div>
          <div><h3>Explore</h3><Link href="/cycling-holiday-morocco">All Cycling Tours</Link><Link href="/cycling-trips/road">Road Cycling Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil-toubkal">Imlil &amp; Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations/agafay-desert">Agafay Desert</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let's plan</h3><Link href="/about">About Us</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="page-width footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span></div>
      </footer>
    </main>
  );
}