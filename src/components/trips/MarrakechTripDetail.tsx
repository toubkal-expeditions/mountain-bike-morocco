import Link from "next/link";
import { notFound } from "next/navigation";

type MarrakechTrip = {
  number: string;
  label: string;
  title: string;
  duration: string;
  region: string;
  description: string;
  image: string;
  slug: string;
};

const trips: Record<string, MarrakechTrip> = {
  "atlas-mountain-bike-day-trip-1-day": {
    number: "01",
    label: "ATLAS FOOTHILLS · MTB",
    title: "Atlas Mountain Bike Day Trip",
    duration: "1 day",
    region: "Atlas foothills from Marrakech",
    description: "Leave Marrakech behind for a guided mountain bike experience in the Atlas foothills. Ride selected tracks through open countryside and changing mountain scenery, with the route chosen around your handling skills, fitness and preferred level of challenge. Before the ride, discuss the start point, transfer time, terrain, equipment and planned distance so the day fits your travel schedule.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    slug: "atlas-mountain-bike-day-trip-1-day",
},
  "marrakech-emtb-adventure-1-day": {
    number: "02",
    label: "ELECTRIC ASSISTANCE · SCENIC RIDING",
    title: "Marrakech E-MTB Adventure",
    duration: "1 day",
    region: "Marrakech & Atlas foothills",
    description: "Explore trails and countryside around Marrakech on an electric mountain bike. Pedal assistance can make selected climbs more manageable, while the route still needs to suit your riding experience and the bike's capabilities. Discuss battery range, elevation, trail surfaces, charging needs and the amount of time available before confirming the day's itinerary.",
    image: "/images/e-mtb-tour-from-marrakech.jpg",
    slug: "marrakech-emtb-adventure-1-day",
},
  "agafay-desert-cycling-tour-1-day": {
    number: "03",
    label: "ROCKY DESERT · OPEN HORIZONS",
    title: "Agafay Desert Cycling Tour",
    duration: "1 day",
    region: "Agafay near Marrakech",
    description: "Discover the rocky landscapes around Agafay on a cycling experience from Marrakech. The open terrain offers a striking contrast to the higher Atlas valleys, but stony surfaces, exposure and heat can make route choice important. Your ride should be planned around suitable tyres and bike type, water, temperature, the group's experience and the time needed for transfers.",
    image: "/images/Desert-Agafay-Morocco.jpg",
    slug: "agafay-desert-cycling-tour-1-day",
},
  "atlas-foothills-gravel-ride-1-day": {
    number: "04",
    label: "GRAVEL · COUNTRY TRACKS",
    title: "Atlas Foothills Gravel Ride",
    duration: "1 day",
    region: "Atlas foothills from Marrakech",
    description: "Follow quiet roads and gravel tracks into the countryside beyond Marrakech. This ride can be discussed for cyclists who want a mix of open landscapes, rural routes and moderate changes in elevation without committing to a long multi-day journey. Route surfaces, traffic exposure, climbing and distance should be matched to your bike, experience and preferred pace.",
    image: "/images/gravel-cycling-morocco.jpg",
    slug: "atlas-foothills-gravel-ride-1-day",
},
  "road-cycling-from-marrakech-1-day": {
    number: "05",
    label: "ROAD CYCLING · CLIMBS & VIEWS",
    title: "Road Cycling from Marrakech",
    duration: "1 day",
    region: "Marrakech & Atlas foothills",
    description: "Use Marrakech as a starting point for a road ride through the surrounding countryside and towards selected Atlas foothill routes. The day's experience depends on the route, climbing, traffic and conditions, so distance and difficulty should be agreed with your group in advance. Share your cycling level, bike setup and available riding time to help shape a sensible plan.",
    image: "/images/road-cycling-tour-morocco.jpg",
    slug: "road-cycling-from-marrakech-1-day",
},
  "imlil-valley-cycling-experience-1-day": {
    number: "06",
    label: "VILLAGES · VALLEY SCENERY",
    title: "Imlil Valley Cycling Experience",
    duration: "1 day",
    region: "Imlil & High Atlas",
    description: "Travel from Marrakech towards the High Atlas and discover the landscapes around Imlil and nearby villages. Depending on your preferred cycling discipline, the experience may involve suitable mountain tracks or quieter road sections, with time to stop and appreciate the scenery. Elevation, surfaces, weather and the riding confidence of everyone taking part should guide the final route choice.",
    image: "/images/morocco-berber-valley.jpg",
    slug: "imlil-valley-cycling-experience-1-day",
},
  "marrakech-to-atlas-cycling-escape-2-day": {
    number: "07",
    label: "SHORT BREAK · ATLAS DISCOVERY",
    title: "Marrakech to Atlas Cycling Escape",
    duration: "2 days",
    region: "Marrakech & High Atlas",
    description: "Turn a city stay into a two-day cycling break by combining time in Marrakech with riding in the Atlas foothills. The itinerary can be discussed around your preferred bike type, riding level and how much time you want to spend on the trail or road. Transfers, daily distances, overnight arrangements and recovery time should be considered together when shaping the trip.",
    image: "/images/cycling-holiday-trip-from-marrakech.jpg",
    slug: "marrakech-to-atlas-cycling-escape-2-day",
},
  "atlas-berber-villages-cycling-tour-3-day": {
    number: "08",
    label: "BERBER VILLAGES · RURAL ROUTES",
    title: "Atlas Berber Villages Cycling Tour",
    duration: "3 days",
    region: "High Atlas villages",
    description: "Spend three days discovering the mountain landscapes and rural communities of the Atlas region. The route can combine selected cycling stages with time to pause at viewpoints and experience local village life. Daily distance, terrain, elevation and the transfer plan should be suited to your group, with accommodation and support details discussed before the itinerary is confirmed.",
    image: "/images/berber-villages-cycling-expeditions.jpg",
    slug: "atlas-berber-villages-cycling-tour-3-day",
},
  "marrakech-and-high-atlas-mtb-tour-4-day": {
    number: "09",
    label: "MTB · HIGH ATLAS EXPLORATION",
    title: "Marrakech and High Atlas MTB Tour",
    duration: "4 days",
    region: "Marrakech & High Atlas",
    description: "Use Marrakech as your gateway to a four-day mountain bike journey through selected Atlas routes. A longer trip offers more time to explore changing landscapes and rural valleys, but the route needs to reflect your ability, technical confidence, available support and the conditions of the season. Discuss daily riding distances, transfer stages, equipment and accommodation before settling on a programme.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    slug: "marrakech-and-high-atlas-mtb-tour-4-day",
},
  "atlas-to-desert-cycling-journey-5-day": {
    number: "10",
    label: "MULTI-REGION · MOUNTAINS TO SOUTH",
    title: "Atlas to Desert Cycling Journey",
    duration: "5 days",
    region: "High Atlas & southern Morocco",
    description: "For riders who have more time, an itinerary from Marrakech can connect Atlas mountain scenery with the changing landscapes of southern Morocco. A five-day concept must balance cycling time with the distances between regions, transfers, rest and accommodation. The final mix of road, gravel or mountain biking should be agreed around your group and the conditions expected along the route.",
    image: "/images/atlas-to-desert-biking-tour.jpg",
    slug: "atlas-to-desert-cycling-journey-5-day",
},
  "family-cycling-day-from-marrakech-1-day": {
    number: "11",
    label: "FAMILY OPTIONS · FLEXIBLE PACING",
    title: "Family Cycling Day from Marrakech",
    duration: "1 day",
    region: "Marrakech countryside & foothills",
    description: "Add a shared outdoor experience to a family stay in Marrakech with a cycling route selected around the ages and abilities of everyone taking part. The plan should leave room for breaks and avoid assuming that every rider is comfortable on the same terrain. Share heights for bike sizing, cycling confidence, preferred pace and available time so suitable options can be discussed.",
    image: "/images/group-cycling-atlas-mountains.jpg",
    slug: "family-cycling-day-from-marrakech-1-day",
},
  "private-cycling-holiday-from-marrakech-custom-itinerary": {
    number: "12",
    label: "PRIVATE TRIP · YOUR ROUTE",
    title: "Private Cycling Holiday from Marrakech",
    duration: "Tailor-made",
    region: "Marrakech, Atlas & Morocco by request",
    description: "Build a private cycling holiday around your dates, preferred discipline and the regions you want to discover. Marrakech can be the start or end point for a day ride or a longer journey into the Atlas and beyond. Share your group size, riding experience, bike preferences, accommodation style and travel priorities so the route, transfers and daily stages can be discussed as a complete plan.",
    image: "/images/group-cycling-tour-morocco.jpg",
    slug: "private-cycling-holiday-from-marrakech-custom-itinerary",
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
  "atlas-mountain-bike-day-trip-1-day": {
    highlights: ["Ride selected Atlas foothill tracks beyond Marrakech", "Choose terrain around bike handling and confidence", "Enjoy mountain scenery with planned stops", "Coordinate transfers and ride timing around your city stay"],
    difficulty: "Moderate; route dependent",
    difficultyDescription: "The ride may include uneven tracks, climbs and loose surfaces. Technical demands depend on the chosen loop, conditions and rider experience; discuss the route before setting off.",
    stages: ["Full-day Atlas foothills ride from Marrakech, including transfer, route briefing, planned riding stops and return arrangements"],
    gallery: ["/images/Explore-Atlas-Mountains-bike.jpg", "/images/cycling-tour-from-marrakech.jpg", "/images/group-cycling-atlas-mountains.jpg"],
},
  "marrakech-emtb-adventure-1-day": {
    highlights: ["Explore the countryside on an electric mountain bike", "Use assistance on suitable climbs and rolling tracks", "Plan battery range around the selected route", "Balance riding with scenic stops outside the city"],
    difficulty: "Beginner to intermediate options; route dependent",
    difficultyDescription: "Pedal assistance does not remove the need for bike control on rocky or steep ground. Route distance, battery capacity, elevation and trail surfaces should be matched to rider confidence and the available equipment.",
    stages: ["E-MTB countryside ride with bike setup, assistance and battery briefing, selected foothill routes, planned stops and return to Marrakech"],
    gallery: ["/images/e-mtb-tour-from-marrakech.jpg", "/images/group-cycling-tour-morocco.jpg", "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"],
},
  "agafay-desert-cycling-tour-1-day": {
    highlights: ["Experience Agafay’s open, rocky landscapes", "Choose a ride suited to the bike and surface", "Plan water and timing around exposure and heat", "Add countryside scenery within reach of Marrakech"],
    difficulty: "Moderate; heat and surface dependent",
    difficultyDescription: "The rocky terrain may be uneven and exposed even when the ride is short. Temperature, tyre suitability, water, wind and the ability of the group all influence the appropriate route.",
    stages: ["Agafay day ride with transfer from Marrakech, route and water briefing, cycling across suitable rocky tracks, planned shade and photo stops, and return transfer"],
    gallery: ["/images/Agafay-desert-morocco.jpg", "/images/gravel-cycling-morocco.jpg", "/images/atlas-to-desert-biking-tour.jpg"],
},
  "atlas-foothills-gravel-ride-1-day": {
    highlights: ["Ride rural tracks and quiet roads outside Marrakech", "Mix compact gravel with selected paved connections", "Match tyre choice and distance to route conditions", "Leave room for landscape and village stops"],
    difficulty: "Easy to moderate; route dependent",
    difficultyDescription: "Gravel difficulty depends on the quality of the track, gradients and traffic on connecting roads. The final loop should match tyre setup, handling experience and preferred daily mileage.",
    stages: ["Gravel ride through the Atlas foothills with route briefing, quiet roads and selected rural tracks, planned water stops and return to Marrakech"],
    gallery: ["/images/gravel-cycling-morocco.jpg", "/images/cycling-tour-from-marrakech.jpg", "/images/group-cycling-tour-morocco.jpg"],
},
  "road-cycling-from-marrakech-1-day": {
    highlights: ["Start from Marrakech for a scenic road ride", "Select a loop around fitness and climbing goals", "Discuss traffic exposure and road surfaces in advance", "Fit the ride around the day’s available hours"],
    difficulty: "Flexible; depends on distance and climbing",
    difficultyDescription: "Road cycling effort depends on the selected distance, elevation and traffic environment. Agree the pace, climbs, start time and support plan before confirming the route.",
    stages: ["Road cycling day from Marrakech, including bike check, selected countryside or foothill route, planned refreshment stops and return arrangements"],
    gallery: ["/images/road-cycling-tour-morocco.jpg", "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg", "/images/group-cycling-tour-morocco.jpg"],
},
  "imlil-valley-cycling-experience-1-day": {
    highlights: ["Travel from Marrakech into the High Atlas setting", "Discover Imlil-area villages and valley scenery", "Choose road or suitable off-road riding style", "Allow for altitude, gradients and weather"],
    difficulty: "Moderate; route and discipline dependent",
    difficultyDescription: "The approach to the High Atlas can involve sustained climbing and changing surfaces. Route and cycling discipline should be chosen based on altitude, weather, bike type and the comfort of everyone riding.",
    stages: ["Imlil Valley cycling day with transfer from Marrakech, route briefing, chosen valley ride and village viewpoints, breaks and return or onward transfer"],
    gallery: ["/images/morocco-berber-valley.jpg", "/images/toubkal-imlil-enduro-mtb-expedition.jpg", "/images/berber-villages-cycling-expeditions.jpg"],
},
  "marrakech-to-atlas-cycling-escape-2-day": {
    highlights: ["Make a short city stay into a two-day cycling break", "Explore Atlas foothills and rural routes", "Plan overnight arrangements around the riding area", "Balance two riding days with transfer time"],
    difficulty: "Moderate; route tailored to the group",
    difficultyDescription: "Two consecutive days require suitable pacing and recovery. The final level depends on the selected discipline, climbing, route surface and daily distances.",
    stages: ["Meet in Marrakech, bike check and first foothill ride", "Second Atlas ride, selected route stops and return or onward transfer"],
    gallery: ["/images/cycling-holiday-trip-from-marrakech.jpg", "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg", "/images/group-cycling-tour-morocco.jpg"],
},
  "atlas-berber-villages-cycling-tour-3-day": {
    highlights: ["Explore rural routes around High Atlas villages", "Make time for viewpoints and cultural stops", "Plan realistic stages and support between villages", "Choose road, gravel or MTB options where suitable"],
    difficulty: "Moderate; terrain dependent",
    difficultyDescription: "Village routes can mix paved sections and rougher tracks, with elevation changing between valleys. Confirm the daily distances, surfaces and chosen discipline for the group before travel.",
    stages: ["Arrival or transfer into the Atlas and route briefing", "Ride between selected village and valley routes with planned stops", "Final cycling stage and departure transfer arrangements"],
    gallery: ["/images/berber-villages-cycling-expeditions.jpg", "/images/morocco-berber-valley.jpg", "/images/group-cycling-atlas-mountains.jpg"],
},
  "marrakech-and-high-atlas-mtb-tour-4-day": {
    highlights: ["Combine a Marrakech start with four days in the High Atlas", "Explore selected mountain tracks and rural valleys", "Adapt technical terrain to rider confidence", "Allow for transfers, recovery and changing conditions"],
    difficulty: "Moderate to challenging; route dependent",
    difficultyDescription: "A four-day MTB tour can involve repeated climbs and variable trail surfaces. The final technical grade should be based on route access, weather, elevation and the group’s experience.",
    stages: ["Marrakech meet-up, bike setup and transfer into the Atlas", "Opening MTB ride through suitable trails and village tracks", "Longer mountain ride with route options and support plan", "Final riding stage and return or onward transfer"],
    gallery: ["/images/singletrack-mtb-atlas-mountains.jpg", "/images/toubkal-imlil-enduro-mtb-expedition.jpg", "/images/Explore-Atlas-Mountains-bike.jpg"],
},
  "atlas-to-desert-cycling-journey-5-day": {
    highlights: ["Connect Atlas scenery with southern Morocco landscapes", "Plan a mix of riding and regional transfers", "Consider temperature, water and surface changes", "Balance daily distance with time to discover the regions"],
    difficulty: "Moderate to challenging; itinerary dependent",
    difficultyDescription: "The combination of mountain and southern landscapes may bring varied elevation, surface, heat and logistics. The discipline mix, daily effort and transfer plan should be agreed before the journey is confirmed.",
    stages: ["Meet in Marrakech and prepare bikes for the journey", "Ride selected Atlas foothill or mountain routes", "Continue across planned connecting routes with support", "Transfer toward southern landscapes and complete a suitable ride", "Final stage or return transfer, depending on confirmed routing"],
    gallery: ["/images/atlas-to-desert-biking-tour.jpg", "/images/group-cycling-tour-morocco.jpg", "/images/Desert-Agafay-Morocco.jpg"],
},
  "family-cycling-day-from-marrakech-1-day": {
    highlights: ["Choose a ride around the ages and abilities in the family", "Keep distances and surfaces appropriate for the group", "Allow time for breaks, scenery and shared activities", "Confirm bike fit, equipment and transfer needs"],
    difficulty: "Family-friendly options; route confirmed in advance",
    difficultyDescription: "Suitability depends on ages, heights, confidence and surface conditions. Not every trail is appropriate for every rider, so the final route and pace should be agreed around the least-experienced participant.",
    stages: ["Family cycling day with bike-fit checks, suitable route briefing, manageable riding sections, breaks and return to Marrakech"],
    gallery: ["/images/group-cycling-atlas-mountains.jpg", "/images/group-cycling-tour-morocco.jpg", "/images/cycling-tour-from-marrakech.jpg"],
},
  "private-cycling-holiday-from-marrakech-custom-itinerary": {
    highlights: ["Build a private itinerary around your group and dates", "Choose between MTB, E-MTB, gravel and road stages", "Combine Marrakech with the Atlas or other regions", "Discuss accommodation, transfers and support together"],
    difficulty: "Fully adaptable; determined by chosen routes",
    difficultyDescription: "This is a tailor-made trip rather than a fixed grade. Difficulty and duration depend on the cycling discipline, daily distances, route surfaces and regions chosen with the group.",
    stages: ["Discuss your goals, dates and cycling experience in Marrakech", "Choose the first region and agree a suitable opening ride", "Continue with selected cycling stages and planned transfers", "Explore another region or add a flexible rest day", "Final ride or departure arrangements, adjusted to the agreed itinerary"],
    gallery: ["/images/group-cycling-tour-morocco.jpg", "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg", "/images/gravel-cycling-morocco.jpg"],
},
};

function bookingHref(tour: MarrakechTrip, request: "details" | "booking" = "details") {
  return `/contact?tour=${encodeURIComponent(tour.title)}&destination=${encodeURIComponent(tour.region)}&request=${request}`;
}

function getRouteStyle(tour: MarrakechTrip) {
  const text = `${tour.title} ${tour.label} ${tour.region}`.toLowerCase();
  if (text.includes("e-mtb") || text.includes("e-bike")) return "Electric-assisted mountain biking";
  if (text.includes("gravel")) return "Mixed-surface gravel cycling";
  if (text.includes("road cycling") || text.includes("road ride")) return "Paved-road cycling";
  if (text.includes("family")) return "Family-paced cycling, route selected to suit riders";
  if (text.includes("private")) return "Private, multi-discipline itinerary";
  if (text.includes("desert") || text.includes("agafay")) return "Open-country and rocky desert routes";
  if (text.includes("mtb") || text.includes("mountain bike")) return "Off-road mountain biking";
  return "Cycling around Marrakech and the Atlas region";
}

function getTerrainNotes(tour: MarrakechTrip) {
  const text = `${tour.title} ${tour.label} ${tour.region}`.toLowerCase();
  if (text.includes("desert") || text.includes("agafay")) return "Open, rocky terrain can be exposed to sun and heat. Confirm surface, wind, water stops, bike suitability and timing for the season.";
  if (text.includes("gravel")) return "Expect a route mix that may include rural gravel tracks and paved connectors. Tyre choice, surface condition, traffic exposure and water planning should be confirmed.";
  if (text.includes("road cycling")) return "Paved-road conditions, traffic, climb length and vehicle support depend on the selected loop. Discuss distance, elevation and start time before travel.";
  if (text.includes("i m l i l") || text.includes("imlil") || text.includes("atlas") || text.includes("berber") || text.includes("mountain")) return "Atlas-area terrain varies with elevation and route: paved village roads, rural tracks, climbs and rougher paths may be included depending on the chosen discipline.";
  if (text.includes("e-mtb") || text.includes("electric")) return "Trail surface and elevation affect both handling and battery range. Confirm charge capacity, charging opportunities and support before the ride.";
  return "Final terrain depends on the agreed discipline and route. Confirm surface, daily distance, elevation, transfers and support for your dates.";
}

function getBestFor(tour: MarrakechTrip, content: TourContent) {
  const text = `${tour.title} ${tour.label}`.toLowerCase();
  if (text.includes("family")) return "Families whose ages, bike sizes and riding confidence fit the agreed route and pace.";
  if (text.includes("private")) return "Groups wanting a tailor-made mix of riding styles, regions and support preferences.";
  if (text.includes("e-mtb")) return "Riders who want electric assistance, with routes and battery arrangements planned in advance.";
  if (text.includes("gravel")) return "Cyclists comfortable with mixed surfaces and a bike setup suitable for rural tracks.";
  if (text.includes("road cycling")) return "Road riders whose fitness and climbing goals match the chosen distance and route.";
  if (text.includes("desert") || text.includes("agafay")) return "Riders comfortable with exposed conditions and a route selected for the bike and terrain.";
  return `Riders whose experience fits a ${content.difficulty.toLowerCase()} route, with the final plan agreed before travel.`;
}

function makeDayDescription(tour: MarrakechTrip, stage: string, index: number, total: number) {
  const lower = stage.toLowerCase();
  if (lower.includes("transfer") || lower.includes("departure") || lower.includes("return") || lower.includes("onward")) return `Allow for the planned travel and cycling arrangements around ${tour.region}. Confirm departure time, finish point, luggage and bike transport, and whether this stage includes a full ride or a shorter option.`;
  if (lower.includes("briefing") || lower.includes("setup") || lower.includes("meet") || lower.includes("bike check") || lower.includes("prepare")) return `Meet in or travel from Marrakech, review the day plan and check bikes and equipment. The guide should confirm the route, conditions, transfers and support arrangements before the ride begins.`;
  if (lower.includes("family")) return `Keep the riding pace and stops appropriate for the family. The route and distance should be confirmed against the ages, bike fit, confidence and conditions, with flexibility if anyone needs a shorter option.`;
  if (lower.includes("desert") || lower.includes("agafay") || lower.includes("southern")) return `Explore the selected open-country routes around ${tour.region}. Water, sun exposure, surface conditions, transfers and support should be checked for the season rather than assumed.`;
  if (lower.includes("gravel") || lower.includes("rural tracks")) return `Ride the selected blend of rural tracks and connecting roads around ${tour.region}. Confirm surface, tyre suitability, navigation, water stops and daily mileage for the group before departure.`;
  if (lower.includes("road")) return `Follow the planned road route around ${tour.region}, with distance, climbing, pace and traffic exposure agreed in advance. Stops and any support vehicle arrangements should be confirmed before setting off.`;
  if (lower.includes("electric") || lower.includes("e-mtb") || lower.includes("battery")) return `Ride a suitable electric-assisted route with battery range, elevation, assistance settings and charging or support arrangements checked against the planned distance.`;
  if (lower.includes("village") || lower.includes("valley") || lower.includes("atlas") || lower.includes("foothill")) return `Explore the selected cycling routes around ${tour.region}, leaving time for climbs, views and planned stops. Exact surfaces, distance and elevation should be confirmed against local access and conditions.`;
  if (index === total - 1) return `Complete the final planned ride or wrap up the trip according to departure times and conditions. Confirm the finish point and onward transfer before the trip begins.`;
  return `Follow a stage planned around ${tour.region}, your group’s fitness and the preferred cycling discipline. Confirm daily distance, surface, stops, weather and support arrangements as part of the itinerary.`;
}

function makeFaqs(tour: MarrakechTrip, content: TourContent) {
  return [
    { question: `What is included in ${tour.title}?`, answer: `Inclusions depend on the final proposal. Ask us to list guiding, transfers, accommodation, meals, bike rental or support, luggage arrangements and any equipment supplied before confirming.` },
    { question: `How difficult is this ${tour.duration} trip?`, answer: `${content.difficulty}. ${content.difficultyDescription} Share your experience and preferred pace so the route can be discussed around your group.` },
    { question: "Can the itinerary be adapted?", answer: "Yes. The outline is a planning framework rather than a confirmed operating schedule. Route choices, daily distance, rest time and logistics can be discussed around dates, group size and preferred cycling style." },
    { question: "What should I bring?", answer: "Bring a suitable helmet, gloves, riding clothes, footwear, eye protection, water and sun protection. Bike-specific tools, spares, layers or waterproofs depend on the route, season and support arrangements; request a final packing list before travel." }
  ];
}

export default function MarrakechTripDetail({ slug }: { slug: string }) {
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

  const galleryImages = Array.from(new Set([tour.image, ...content.gallery])).slice(0, 9);

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
    <main className="cycling-listing marrakech-cycling-page mtb-trip-detail">
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
            <Link className="cl-button cl-button--outline" href="/cycling-trips/from-marrakech">Back to Marrakech tours</Link>
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
            <h2 style={{ marginTop: 8, marginBottom: 18 }}>Discover {tour.region} on a {tour.duration} cycling journey</h2>
            <p style={{ fontSize: 16, lineHeight: 1.85 }}>{tour.description}</p>
            <p style={{ fontSize: 15, lineHeight: 1.85 }}>This trip is designed as a starting point for planning your ride. Route choice, daily riding time, technical sections, transfers and accommodation should be confirmed around your travel dates and the needs of your group. We recommend sharing your recent riding experience and preferred terrain before the itinerary is finalised.</p>
            <p style={{ fontSize: 15, lineHeight: 1.85 }}>Whether you are looking for long mountain days, singletrack, enduro-style descents or a broader cycling journey, the final plan should balance time on your bike with realistic recovery, local conditions and the support available along the route.</p>
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
          <div className="cl-section-heading"><div><p className="cl-eyebrow cl-eyebrow--dark">KEEP EXPLORING</p><h2>More cycling tours from Marrakech</h2></div><p>Compare other trip ideas and enquire about the option that best fits your dates and riding goals.</p></div>
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
          <div className="footer-brand"><Link className="brand" href="/"><img className="brand__logo" src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link><p>Guided mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, trails and local culture at your own pace.</p></div>
          <div><h3>Explore</h3><Link href="/cycling-holiday-morocco">All Cycling Tours</Link><Link href="/cycling-trips/mtb">Cycling Tours from Marrakech</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil-toubkal">Imlil &amp; Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations/agafay-desert">Agafay Desert</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let's plan</h3><Link href="/about">About Us</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="page-width footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span></div>
      </footer>
    </main>
  );
}
