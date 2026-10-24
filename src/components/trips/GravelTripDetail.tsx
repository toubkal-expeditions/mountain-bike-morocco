import Link from "next/link";
import { notFound } from "next/navigation";

type GravelTrip = {
  number: string;
  label: string;
  title: string;
  duration: string;
  region: string;
  description: string;
  image: string;
  slug: string;
};

const trips: Record<string, GravelTrip> = {
  "atlas-mountains-gravel-ride-4-day": {
    number: "01",
    label: "MOUNTAIN ROADS & RURAL TRACKS",
    title: "Atlas Mountains Gravel Ride",
    duration: "4 days",
    region: "High Atlas",
    description: "Explore the changing landscapes of the High Atlas on a gravel cycling journey that can combine paved mountain roads, quieter rural tracks and views across traditional valleys. Route choice depends on road surface, elevation, distance and your experience on mixed terrain. Share your preferred pace and daily mileage so the itinerary can balance rewarding climbs with time to enjoy the scenery and villages along the way.",
    image: "/images/gravel-bike-atlas-mountains.JPG",
    slug: "atlas-mountains-gravel-ride-4-day",
  },
  "atlas-to-desert-gravel-adventure-5-day": {
    number: "02",
    label: "REMOTE LANDSCAPES & OPEN HORIZONS",
    title: "Atlas to Desert Gravel Adventure",
    duration: "5 days",
    region: "High Atlas & southern Morocco",
    description: "Connect mountain scenery with the drier landscapes of southern Morocco on a gravel journey planned around the regions you want to explore. These longer routes require realistic planning for transfers, surface changes, elevation, water and accommodation between stages. The exact itinerary should reflect your travel dates, riding level and available time rather than trying to cover too much distance each day.",
    image: "/images/gravel-desert-cycling-expedition.jpg",
    slug: "atlas-to-desert-gravel-adventure-5-day",
  },
  "gravel-cycling-from-marrakech-1-day": {
    number: "03",
    label: "A SHORT BREAK ON TWO WHEELS",
    title: "Gravel Cycling from Marrakech",
    duration: "1 day",
    region: "Marrakech & Atlas foothills",
    description: "Use Marrakech as a starting point for a gravel ride into the surrounding countryside and foothills. Depending on the route, a day can include quiet roads, rural tracks and views towards the Atlas Mountains, with time to stop and experience the area beyond the city. Start points, transfers and surface conditions vary, so discuss your preferred distance and the bike you plan to use before choosing a route.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    slug: "gravel-cycling-from-marrakech-1-day",
  },
  "anti-atlas-gravel-discovery-4-day": {
    number: "04",
    label: "GRANITE LANDSCAPES & QUIET ROADS",
    title: "Anti-Atlas Gravel Discovery",
    duration: "4 days",
    region: "Anti-Atlas",
    description: "Discover the rugged character of the Anti-Atlas through quiet roads, dry valleys, rocky hills and small settlements. The region can suit riders looking for a less familiar cycling landscape, but distances between services and the condition of remote tracks need careful consideration. A suitable plan takes account of temperature, water, tyre choice, repair equipment and the pace your group wants to maintain.",
    image: "/images/gravel-adventure-bike-morocco.jpg",
    slug: "anti-atlas-gravel-discovery-4-day",
  },
  "three-valleys-gravel-tour-4-day": {
    number: "05",
    label: "VALLEYS, VILLAGES & MOUNTAIN VIEWS",
    title: "Three Valleys Gravel Tour",
    duration: "4 days",
    region: "High Atlas valleys",
    description: "Build a gravel itinerary around several Atlas valleys, linking rural roads and selected tracks with time to stop in villages and enjoy the mountain setting. Elevation and surface can vary noticeably between valleys, so daily stages should be planned for your fitness, bike setup and available time. Transfers may be needed to connect riding areas or keep the journey at a comfortable pace.",
    image: "/images/gravel-biking-atlas-morocco.jpg",
    slug: "three-valleys-gravel-tour-4-day",
  },
  "south-morocco-gravel-expedition-5-day": {
    number: "06",
    label: "LONGER DISTANCES & WIDE LANDSCAPES",
    title: "South Morocco Gravel Expedition",
    duration: "5 days",
    region: "Southern Morocco",
    description: "Ride through the broad landscapes of southern Morocco on a journey that can combine quiet tarmac, gravel roads and selected remote tracks. Longer stages call for careful planning around water, food, heat, mechanical support and overnight stops. The route should be confirmed around the time of year, group experience and current conditions, with enough flexibility to adjust daily mileage when needed.",
    image: "/images/south-morocco-cycling-expedition.jpg",
    slug: "south-morocco-gravel-expedition-5-day",
  },
  "agafay-gravel-escape-1-day": {
    number: "07",
    label: "ROCKY TERRAIN NEAR THE RED CITY",
    title: "Agafay Gravel Escape",
    duration: "1 day",
    region: "Agafay & Marrakech foothills",
    description: "Explore the open, rocky landscapes around Agafay on a gravel ride that feels very different from the higher Atlas valleys. Stony tracks and exposed conditions can make a route more demanding than its distance suggests, especially in warm weather. A good plan accounts for hydration, sun protection, tyre suitability, navigation and realistic timing, and should match the surface to your bike and experience.",
    image: "/images/Agafay-desert-morocco.jpg",
    slug: "agafay-gravel-escape-1-day",
  },
  "high-atlas-and-ouirgane-gravel-tour-4-day": {
    number: "08",
    label: "SCENIC ROADS & CHANGING TERRAIN",
    title: "High Atlas and Ouirgane Gravel Tour",
    duration: "4 days",
    region: "High Atlas & Ouirgane",
    description: "Explore the western Atlas around Ouirgane and nearby valleys, where cultivated land, village roads and mountain views create a quieter cycling experience. A route can be planned for a short escape or as part of a longer holiday, depending on how much climbing and distance you prefer. The final route should account for surface conditions, weather, support and the pace of everyone in the group.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    slug: "high-atlas-and-ouirgane-gravel-tour-4-day",
  },
  "private-morocco-gravel-holiday-5-day": {
    number: "09",
    label: "PRIVATE RIDING & FLEXIBLE ROUTES",
    title: "Private Morocco Gravel Holiday",
    duration: "5 days (customisable)",
    region: "Morocco · private itinerary",
    description: "Plan a private gravel holiday around your travel dates, preferred riding distances and the landscapes you want to experience. The trip can focus on one region or consider a route connecting several areas, as long as driving time, road surfaces, accommodation and daily mileage remain practical. Share your group size, bike setup and experience so the itinerary can be discussed around your priorities.",
    image: "/images/gravel-cycling-holiday-morocco.jpg",
    slug: "private-morocco-gravel-holiday-5-day",
  },
};

type TourContent = {
  highlights: string[];
  difficulty: string;
  difficultyDescription: string;
  stages: string[];
  gallery: string[];
};

const tourContent: Record<string, TourContent> = {
  "atlas-mountains-gravel-ride-4-day": {
    highlights: ["Ride quiet mountain roads and selected rural tracks", "Explore High Atlas valleys and traditional settlements", "Balance climbing with the group’s preferred daily distance", "Leave time for viewpoints, refreshments and local stops"],
    difficulty: "Moderate; route dependent",
    difficultyDescription: "The challenge depends on climbing, surface and daily distance. Gravel riding can shift from smooth tarmac to stony tracks, so bike handling, tyre setup and confidence on loose surfaces should be discussed before confirming the route.",
    stages: ["Meet in the High Atlas, check the bikes and route plan", "Ride quiet mountain roads and selected rural tracks", "Explore a longer valley route with planned stops", "Complete a final scenic stage and arrange onward travel"],
    gallery: ["/images/gravel-bike-atlas-mountains.JPG", "/images/atlas-mountains-cycling-tour-morocco.jpg", "/images/gravel-biking-atlas-morocco.jpg"],
  },
  "atlas-to-desert-gravel-adventure-5-day": {
    highlights: ["Connect Atlas foothills with southern landscapes", "Experience changing road and track surfaces", "Plan transfers and riding stages around a realistic pace", "Prepare for exposure, water needs and remote sections"],
    difficulty: "Moderate to challenging; conditions dependent",
    difficultyDescription: "This trip may combine elevation in mountain areas with heat and exposure in southern regions. The actual challenge depends on the season, surface, stage length and logistics; route and support should be confirmed before booking.",
    stages: ["Arrive, check equipment and review the multi-region plan", "Ride rural and mountain roads in the Atlas area", "Complete a longer mixed-surface stage with planned stops", "Transfer south and prepare for changing terrain", "Explore a southern route and confirm onward arrangements"],
    gallery: ["/images/gravel-desert-cycling-expedition.jpg", "/images/south-morocco-cycling-expedition.jpg", "/images/gravel-cycling-holiday-morocco.jpg"],
  },
  "gravel-cycling-from-marrakech-1-day": {
    highlights: ["Start from Marrakech for a countryside gravel outing", "Combine quiet roads with selected unpaved tracks", "Choose a day ride or extend the experience into a short break", "Agree transfers, surface and start point in advance"],
    difficulty: "Flexible; beginner-friendly options may be discussed",
    difficultyDescription: "A shorter route can still include rough surfaces, climbing or exposed conditions. The route should match your recent riding experience, bike setup, preferred distance and the time available around Marrakech.",
    stages: ["One-day gravel ride from Marrakech, including a bike and route check, selected countryside roads and tracks, planned refreshment stops, and return arrangements"],
    gallery: ["/images/cycling-tour-from-marrakech.jpg", "/images/gravel-adventure-bike-morocco.jpg", "/images/gravel-bike-atlas-mountains.JPG"],
  },
  "anti-atlas-gravel-discovery-4-day": {
    highlights: ["Explore the rugged character of the Anti-Atlas", "Ride quiet roads, dry valleys and selected rocky tracks", "Plan water and repair needs for stretches between services", "Allow time for scenery and small-settlement stops"],
    difficulty: "Moderate to challenging; heat and surface dependent",
    difficultyDescription: "Uneven tracks, exposed conditions and distances between services can make the route demanding. Temperature, water, tyres, gearing and repair equipment should be planned for the travel season and actual route.",
    stages: ["Arrive in the region and check equipment and supplies", "Ride quiet roads and dry-valley tracks", "Explore a longer gravel loop with support and water stops", "Complete a scenic stage or transfer according to the plan"],
    gallery: ["/images/gravel-adventure-bike-morocco.jpg", "/images/south-morocco-cycling-expedition.jpg", "/images/Agafay-desert-morocco.jpg"],
  },
  "three-valleys-gravel-tour-4-day": {
    highlights: ["Link several Atlas valleys by rural roads and tracks", "Enjoy village landscapes and changing mountain scenery", "Balance climbs and distance to suit the group", "Plan transfers where they make the stages more comfortable"],
    difficulty: "Moderate; elevation dependent",
    difficultyDescription: "The route can vary substantially between valleys. Climbs, surface conditions and overall distance should be agreed based on your fitness and experience on gravel, with flexibility for weather and local access.",
    stages: ["Meet and prepare bikes before a valley orientation ride", "Connect rural roads and tracks through the first valley", "Explore a second valley with a planned village stop", "Ride a final scenic section and depart or transfer"],
    gallery: ["/images/gravel-biking-atlas-morocco.jpg", "/images/gravel-bike-atlas-mountains.JPG", "/images/atlas-mountains-cycling-tour-morocco.jpg"],
  },
  "south-morocco-gravel-expedition-5-day": {
    highlights: ["Discover broad southern landscapes and quiet routes", "Combine paved roads with selected gravel tracks", "Prepare carefully for water, heat and mechanical needs", "Allow practical overnight and support arrangements"],
    difficulty: "Moderate to challenging; route dependent",
    difficultyDescription: "Longer southern stages can involve heat, exposure and limited services. Daily distance, supplies, water, support and overnight stops must be reviewed for the season and route rather than assumed.",
    stages: ["Arrival, equipment inspection and route briefing", "Begin with a supported local gravel route", "Complete a longer stage with planned water and food stops", "Explore another southern landscape with route options", "Final riding stage or onward transfer, depending on travel plans"],
    gallery: ["/images/south-morocco-cycling-expedition.jpg", "/images/gravel-desert-cycling-expedition.jpg", "/images/gravel-cycling-holiday-morocco.jpg"],
  },
  "agafay-gravel-escape-1-day": {
    highlights: ["Ride through open rocky country close to Marrakech", "Explore a landscape distinct from high mountain valleys", "Consider heat, hydration and tyre choice carefully", "Choose a short outing or link it to a longer stay"],
    difficulty: "Easy to challenging depending on selected tracks",
    difficultyDescription: "The surface and exposure matter as much as distance. Some options may be straightforward, while rougher tracks require confident handling. The ride should be timed and equipped for current temperatures and water access.",
    stages: ["One-day Agafay gravel loop with an equipment check, selected rocky tracks, a planned hydration stop, and return transfer toward Marrakech"],
    gallery: ["/images/Agafay-desert-morocco.jpg", "/images/gravel-adventure-bike-morocco.jpg", "/images/cycling-tour-from-marrakech.jpg"],
  },
  "high-atlas-and-ouirgane-gravel-tour-4-day": {
    highlights: ["Explore the western Atlas and Ouirgane area", "Ride quieter village roads with mountain views", "Shape the route around climbing and surface preferences", "Choose a weekend escape or longer journey"],
    difficulty: "Moderate; route dependent",
    difficultyDescription: "Climbing, weather, road condition and the amount of unpaved terrain determine difficulty. Route details should be selected for the group, including tyre suitability, daily effort and any transfers between riding areas.",
    stages: ["Meet near the route area and check bikes and equipment", "Ride the first village-road and foothill loop", "Explore Ouirgane-area roads and selected gravel sections", "Complete a final scenic ride or return transfer"],
    gallery: ["/images/atlas-mountains-cycling-tour-morocco.jpg", "/images/gravel-bike-atlas-mountains.JPG", "/images/gravel-biking-atlas-morocco.jpg"],
  },
  "private-morocco-gravel-holiday-5-day": {
    highlights: ["Design a route around your dates and preferred distance", "Choose one region or discuss connecting multiple areas", "Match surfaces, daily stages and pace to the group", "Plan accommodation, transfers and bike support together"],
    difficulty: "Tailored to the agreed route",
    difficultyDescription: "Difficulty cannot be set until the route, distance, gradients and surfaces are agreed. Share your group’s riding experience, bike setup and preferred daily effort so the proposal can set realistic stages and support.",
    stages: ["Discuss dates, group size, bike setup and route priorities", "Confirm the first region and complete an introductory stage", "Ride the principal planned route with agreed stops and support", "Explore a second area or complete a longer stage if included", "Final ride, review arrangements and depart"],
    gallery: ["/images/gravel-cycling-holiday-morocco.jpg", "/images/gravel-bike-atlas-mountains.JPG", "/images/south-morocco-cycling-expedition.jpg"],
  },
};

function bookingHref(tour: GravelTrip, request: "details" | "booking" = "details") {
  return `/contact?tour=${encodeURIComponent(tour.title)}&destination=${encodeURIComponent(tour.region)}&request=${request}`;
}

function getRouteStyle(tour: GravelTrip) {
  const text = `${tour.title} ${tour.label} ${tour.region}`.toLowerCase();
  if (text.includes("desert") || text.includes("south")) return "Mixed-surface routes through open southern landscapes";
  if (text.includes("marrakech") || text.includes("agafay")) return "Countryside roads and nearby gravel tracks";
  if (text.includes("private")) return "Tailored gravel route and daily stages";
  if (text.includes("valley") || text.includes("atlas") || text.includes("ouirgane")) return "Quiet roads, rural tracks and mountain valleys";
  return "Mixed-surface gravel cycling";
}

function getTerrainNotes(tour: GravelTrip) {
  const text = `${tour.title} ${tour.label} ${tour.region}`.toLowerCase();
  if (text.includes("desert") || text.includes("south") || text.includes("agafay") || text.includes("anti-atlas")) return "Expect changing exposure and surface conditions, including rocky or dry tracks in some areas. Water, sun protection, tyre choice, repair tools and realistic stage lengths should be confirmed for the season.";
  if (text.includes("marrakech")) return "Route options can combine quieter paved roads and rural tracks outside the city. Start points, traffic, surface, climbing and transfer time should be confirmed for the chosen ride.";
  if (text.includes("valley") || text.includes("atlas") || text.includes("ouirgane")) return "Atlas gravel routes can mix paved mountain roads, village lanes, compact earth and rougher tracks. Gradient, surface, weather and bike setup influence the ride, so the exact route should be checked before departure.";
  return "The final terrain mix depends on the selected region and route. Confirm the surface, climbing, daily distance, water points and support arrangements against your group’s experience and travel dates.";
}

function getBestFor(tour: GravelTrip, content: TourContent) {
  const text = `${tour.title} ${tour.label}`.toLowerCase();
  if (text.includes("private")) return "Riders who want a route shaped around their dates, preferred daily distance, bike setup and group needs.";
  if (text.includes("marrakech") || text.includes("agafay")) return "Riders looking for a shorter gravel outing or an introduction to Morocco’s mixed-surface routes.";
  if (text.includes("desert") || text.includes("south") || text.includes("anti-atlas")) return "Riders comfortable preparing for changing surfaces, sun exposure and more remote sections where support needs to be planned.";
  return `Riders whose fitness and gravel-bike handling suit a ${content.difficulty.toLowerCase()} route, with the exact surface and daily effort agreed before travel.`;
}

function makeDayDescription(tour: GravelTrip, stage: string, index: number, total: number) {
  const lower = stage.toLowerCase();
  if (lower.includes("arrival") || lower.includes("meet") || lower.includes("check") || lower.includes("preparation") || lower.includes("briefing") || lower.includes("discuss")) return `Meet the team, check the bike and equipment, and review the proposed route for ${tour.title}. Starting location, transfer timing, route surface and support arrangements should be confirmed before departure.`;
  if (lower.includes("transfer") || lower.includes("departure") || lower.includes("return") || lower.includes("depart")) return "Allow time for the planned finish, transfer or onward travel. Whether riding is included on this stage depends on the final schedule; confirm timings and bike or luggage transport in advance.";
  if (lower.includes("water") || lower.includes("support") || lower.includes("longer")) return `Ride a selected route through ${tour.region}, with the day planned around surface, elevation, water and food stops. Daily distance and support should be confirmed for the conditions and group.`;
  if (lower.includes("valley") || lower.includes("track") || lower.includes("gravel") || lower.includes("road") || lower.includes("ride") || lower.includes("loop")) return `Explore a gravel route selected for the group through ${tour.region}, combining suitable paved roads and unpaved tracks where appropriate. Confirm the surface, climbing, distance and stops with the guide before the ride.`;
  if (lower.includes("flexible") || lower.includes("final")) return "Keep this stage flexible for route conditions, a shorter optional ride or onward arrangements. The guide should confirm the final plan based on weather, access and the group’s preferences.";
  if (index === total - 1) return "Complete the final planned stage or wrap up the trip depending on departure timings and conditions. Confirm the finish point and transfers before the journey begins.";
  return `Explore a stage planned around ${tour.region}, the group's fitness and the preferred mix of gravel roads and tracks. Surface, distance, climbing, stops and support are confirmed as part of the final itinerary.`;
}

function makeFaqs(tour: GravelTrip, content: TourContent) {
  return [
    { question: `What is included in the ${tour.title}?`, answer: `Inclusions depend on the final proposal. Before confirming, ask us to list guiding, transfers, accommodation, meals, luggage arrangements, mechanical support and any equipment supplied for ${tour.title}.` },
    { question: `How difficult is this gravel tour?`, answer: `${content.difficulty}. ${content.difficultyDescription} Share your usual riding distance and experience on loose or rough surfaces so the route can be matched to the group.` },
    { question: `Can the route and daily distance be adjusted?`, answer: `The itinerary shown is an indicative planning framework, not a confirmed operating schedule. Route choice, daily distance, rest time and transfers can be discussed around dates, group size and bike setup.` },
    { question: `What equipment should I bring?`, answer: `Bring a suitable gravel bike, helmet, gloves, riding clothing, eye protection, water capacity, sun protection and basic repair equipment. Tyre choice, spares, navigation and extra layers depend on the selected surfaces, season and route.` },
  ];
}

export default function GravelTripDetail({ slug }: { slug: string }) {
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
  const itineraryLabel = /\b\d+\s*days?\b/i.test(tour.duration) ? "Day" : "Stage";
  const itinerary = content.stages.map((stage, index) => ({
    day: index + 1,
    title: stage,
    description: makeDayDescription(tour, stage, index, content.stages.length),
  }));

  const galleryImages = Array.from(new Set([
    tour.image,
    ...content.gallery,
    "/images/gravel-bike-atlas-mountains.JPG",
    "/images/gravel-desert-cycling-expedition.jpg",
    "/images/cycling-tour-from-marrakech.jpg",
    "/images/gravel-adventure-bike-morocco.jpg",
    "/images/gravel-biking-atlas-morocco.jpg",
    "/images/south-morocco-cycling-expedition.jpg",
    "/images/Agafay-desert-morocco.jpg",
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
    <main className="cycling-listing gravel-page mtb-trip-detail">
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
            <Link className="cl-button cl-button--outline" href="/cycling-trips/gravel">Back to Gravel tours</Link>
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
            <h2 style={{ marginTop: 8, marginBottom: 18 }}>Discover the {tour.region} on a gravel cycling journey ({tour.duration})</h2>
            <p style={{ fontSize: 16, lineHeight: 1.85 }}>{tour.description}</p>
            <p style={{ fontSize: 15, lineHeight: 1.85 }}>This trip is designed as a starting point for planning your ride. Route choice, daily riding time, rougher track sections, transfers and accommodation should be confirmed around your travel dates and the needs of your group. We recommend sharing your recent riding experience and preferred terrain before the itinerary is finalised.</p>
            <p style={{ fontSize: 15, lineHeight: 1.85 }}>Whether you prefer quiet paved roads, gravel tracks, rolling foothills or longer mixed-surface stages, the plan should balance time on the bike with realistic recovery, local conditions and support along the route.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}>
              <span style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "9px 12px", fontSize: 12, fontWeight: 700 }}>✓ Private enquiry available</span>
              <span style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "9px 12px", fontSize: 12, fontWeight: 700 }}>✓ Route matched to ability</span>
              <span style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "9px 12px", fontSize: 12, fontWeight: 700 }}>✓ Details confirmed before booking</span>
            </div>
          </div>
          <aside style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: 26, boxShadow: "0 8px 25px rgba(37,38,32,.05)" }}>
            <p className="cl-eyebrow cl-eyebrow--dark">PLAN THIS ADVENTURE</p>
            <h3 style={{ marginTop: 8, marginBottom: 14 }}>Ask about dates and availability</h3>
            <p style={{ lineHeight: 1.75, fontSize: 14 }}>Tell us when you want to travel, how many riders are in your group and what kind of trails you enjoy. We can then discuss a realistic route and confirm the practical details.</p>
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
          <div><p className="cl-eyebrow cl-eyebrow--dark">THE RIDING EXPERIENCE</p><h2>Gravel surfaces, route planning and the pace of the journey</h2></div>
          <p>The aim is to choose a gravel route that suits your group, not to publish unverified mileage or elevation figures. These details are confirmed in the itinerary for your dates.</p>
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
            <h3 style={{ marginTop: 0 }}>Illustrative route-effort profile</h3>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>A visual guide to the changing effort of a gravel ride—not a surveyed elevation chart for this specific tour.</p>
            <svg viewBox="0 0 640 220" role="img" aria-label="Illustrative gravel-route effort profile, not measured elevation data" style={{ display: "block", width: "100%", height: "auto", marginTop: 12 }}>
              <defs><linearGradient id="gravelAreaFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#c28a2c" stopOpacity=".28"/><stop offset="100%" stopColor="#c28a2c" stopOpacity=".03"/></linearGradient></defs>
              {[45, 85, 125, 165].map((y) => <line key={y} x1="16" y1={y} x2="624" y2={y} stroke="#e9e4db" strokeWidth="1" />)}
              <path d="M16 175 L60 160 L95 128 L130 143 L164 90 L205 105 L244 57 L278 83 L315 48 L350 88 L388 72 L425 120 L463 94 L498 133 L535 112 L575 151 L624 142 L624 190 L16 190 Z" fill="url(#gravelAreaFill)" />
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
          <p>Explore gravel roads, rural tracks and Moroccan landscapes. The final route-specific photo selection can be updated as your tour gallery grows.</p>
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
          <div><p className="cl-eyebrow cl-eyebrow--dark">SUGGESTED GRAVEL ITINERARY</p><h2>Your suggested {tour.duration} itinerary</h2></div>
          <p>This is an indicative outline based on the advertised trip length. It is not a confirmed operating schedule; exact routes, riding distances, elevation, transfers and overnight stops must be confirmed for your dates.</p>
        </div>
        <article style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", background: "#ffffff", border: "1px solid #dedbd3", marginBottom: 20 }}>
          <div style={{ minHeight: 230, background: "#e7e2d9" }}><img src={tour.image} alt={`${tour.title} featured landscape`} loading="lazy" style={{ width: "100%", height: "100%", minHeight: 230, objectFit: "cover", display: "block" }} /></div>
          <div style={{ padding: "26px 28px", alignSelf: "center" }}>
            <p className="cl-eyebrow cl-eyebrow--dark">ITINERARY AT A GLANCE</p>
            <h3 style={{ fontSize: 22, lineHeight: 1.35, marginTop: 8 }}>{tour.duration} in {tour.region}</h3>
            <p style={{ fontSize: 14, lineHeight: 1.8 }}>The stage sequence is a framework for discussion. It can be adjusted to arrival times, local conditions, riding experience and realistic daily distances for your group.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}><span style={{ background: "#f4f2ed", padding: "8px 10px", fontSize: 11, fontWeight: 800 }}>{itinerary.length} PLANNED STAGES</span><span style={{ background: "#f4f2ed", padding: "8px 10px", fontSize: 11, fontWeight: 800 }}>ROUTES TO CONFIRM</span></div>
          </div>
        </article>
        <div style={{ display: "grid", gap: 12 }}>
          {itinerary.map((item, index) => (
            <article key={`${item.day}-${item.title}`} style={{ display: "grid", gridTemplateColumns: "minmax(82px, .18fr) minmax(0, 1fr)", gap: 0, background: "#ffffff", border: "1px solid #dedbd3", overflow: "hidden" }}>
              <div style={{ background: index === 0 ? "#252620" : "#f4f2ed", color: index === 0 ? "#ffffff" : "#252620", padding: "20px 16px", display: "flex", flexDirection: "column", justifyContent: "center", borderTop: index === 0 ? "3px solid #c28a2c" : "3px solid #dedbd3" }}>
                <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".11em" }}>{itineraryLabel.toUpperCase()}</span>
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
              <span style={{ display: "inline-block", color: "#a66d18", fontSize: 10, fontWeight: 800, letterSpacing: ".08em", marginBottom: 8 }}>{itineraryLabel.toUpperCase()} {String(item.day).padStart(2, "0")}</span>
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
                ["Conditions", "Weather and local trail access can affect the plan."],
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
          <div className="cl-section-heading"><div><p className="cl-eyebrow cl-eyebrow--dark">KEEP EXPLORING</p><h2>More gravel cycling tours in Morocco</h2></div><p>Compare other gravel trip ideas and enquire about the option that best fits your dates and riding goals.</p></div>
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
          <div className="footer-brand"><Link className="brand" href="/"><img className="brand__logo" src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link><p>Guided mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, tracks and local culture at your own pace.</p></div>
          <div><h3>Explore</h3><Link href="/cycling-holiday-morocco">All Cycling Tours</Link><Link href="/cycling-trips/mtb">Mountain Bike Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil-toubkal">Imlil &amp; Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations/agafay-desert">Agafay Desert</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let's plan</h3><Link href="/about">About Us</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="page-width footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span></div>
      </footer>
    </main>
  );
}
