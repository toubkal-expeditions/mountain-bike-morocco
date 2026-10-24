import Link from "next/link";
import { notFound } from "next/navigation";

type FamilyTrip = {
  number: string;
  label: string;
  title: string;
  duration: string;
  region: string;
  description: string;
  image: string;
  slug: string;
};

const trips: Record<string, FamilyTrip> = {
  "family-friendly-atlas-mtb-weekend-2-day": {
    number: "01" ,
    label: "FAMILY WEEKEND · ATLAS FOOTHILLS" ,
    title: "Family-Friendly Atlas MTB Weekend" ,
    duration: "2 days" ,
    region: "Atlas foothills" ,
    description: "Spend two days discovering the Atlas foothills with a family cycling itinerary shaped around the ages, confidence and interests of everyone taking part. The route can focus on appropriate tracks, manageable distances and regular breaks to enjoy mountain scenery and village life. Before confirming the trip, discuss bike fit, trail surfaces, climbing, transfers and any support your family may need." ,
    image: "/images/group-cycling-atlas-mountains.jpg" ,
    slug: "family-friendly-atlas-mtb-weekend-2-day" ,
  },
  "marrakech-family-mountain-bike-ride-1-day": {
    number: "02" ,
    label: "SHORT RIDE · FROM MARRAKECH" ,
    title: "Marrakech Family Mountain Bike Ride" ,
    duration: "1 day" ,
    region: "Marrakech countryside" ,
    description: "Add a cycling experience to a Marrakech stay with a guided ride outside the busiest parts of the city. The programme can be discussed around your available time and the riding confidence of each family member, with a suitable route, breaks and transport arranged in advance. Share the ages and experience of the riders so the proposed terrain and duration can be considered carefully." ,
    image: "/images/cycling-tour-from-marrakech.jpg" ,
    slug: "marrakech-family-mountain-bike-ride-1-day" ,
  },
  "ouirgane-valley-family-mtb-escape-2-day": {
    number: "03" ,
    label: "VALLEY TRACKS · VILLAGE DISCOVERY" ,
    title: "Ouirgane Valley Family MTB Escape" ,
    duration: "2 days" ,
    region: "Ouirgane & western Atlas" ,
    description: "Explore the quieter landscapes of the western Atlas, where cultivated valleys, villages and countryside tracks provide a setting for a relaxed family adventure. A two-day trip can balance time on the bike with stops to take in the scenery and learn about local life. Route choice should reflect the group’s cycling skills, the surface conditions and the pace that will make the experience enjoyable for everyone." ,
    image: "/images/morocco-berber-valley.jpg" ,
    slug: "ouirgane-valley-family-mtb-escape-2-day" ,
  },
  "atlas-villages-and-gentle-trails-3-day": {
    number: "04" ,
    label: "VILLAGES · SCENIC RIDING" ,
    title: "Atlas Villages and Gentle Trails" ,
    duration: "3 days" ,
    region: "Atlas foothills & villages" ,
    description: "Discover mountain foothills and rural settlements on a three-day journey that leaves room for family time as well as riding. The route can be designed around suitable tracks, realistic daily distances and places to pause rather than maximising kilometres. Discuss the youngest rider’s ability, everyone else’s experience, accommodation preferences and the practical arrangements needed between stages before settling on an itinerary." ,
    image: "/images/Explore-Atlas-Mountains-by-bike.jpg" ,
    slug: "atlas-villages-and-gentle-trails-3-day" ,
  },
  "family-e-bike-and-mtb-adventure-2-day": {
    number: "05" ,
    label: "ELECTRIC ASSISTANCE · SHARED ADVENTURE" ,
    title: "Family E-Bike and MTB Adventure" ,
    duration: "2 days" ,
    region: "Atlas foothills" ,
    description: "For families with appropriate cycling experience, a mixed electric-assist and standard family cycling experience may be worth discussing. The route must account for each rider’s bike, handling skills, battery range, charging and comfort on the chosen terrain. We can help you review the options, but the final route should only be confirmed once the equipment and abilities of everyone in the group are understood." ,
    image: "/images/group-ebike-tour-morocco.jpg" ,
    slug: "family-e-bike-and-mtb-adventure-2-day" ,
  },
  "four-day-family-atlas-explorer-4-day": {
    number: "06" ,
    label: "MULTI-DAY HOLIDAY · HIGH ATLAS" ,
    title: "Four-Day Family Atlas Explorer" ,
    duration: "4 days" ,
    region: "High Atlas" ,
    description: "Create a longer family cycling holiday through selected Atlas foothill routes and rural landscapes. A four-day itinerary offers the possibility of mixing riding with recovery time, village stops and time away from the bike. Distances, elevation and trail difficulty should be chosen with the whole family in mind, with transfers, accommodation, food preferences and support arrangements discussed before travel." ,
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg" ,
    slug: "four-day-family-atlas-explorer-4-day" ,
  },
  "marrakech-countryside-family-cycling-3-day": {
    number: "07" ,
    label: "COUNTRYSIDE · FLEXIBLE PACING" ,
    title: "Marrakech Countryside Family Cycling" ,
    duration: "3 days" ,
    region: "Marrakech & surrounding countryside" ,
    description: "Enjoy a family-friendly introduction to cycling in the countryside around Marrakech, with an itinerary tailored to the group’s interests and experience. Depending on the chosen route, the ride may include rural landscapes, open views and time to pause between sections. Confirm the surface, distance, traffic exposure, start point and transfer arrangements in advance so the day or multi-day plan suits every rider." ,
    image: "/images/cycling-holiday-trip-from-marrakech.jpg" ,
    slug: "marrakech-countryside-family-cycling-3-day" ,
  },
  "private-family-mtb-holiday-in-morocco-5-day": {
    number: "08" ,
    label: "PRIVATE GROUP · PERSONALISED ITINERARY" ,
    title: "Private Family MTB Holiday in Morocco" ,
    duration: "5 days" ,
    region: "Morocco · private itinerary" ,
    description: "Plan a private five-day holiday that reflects your family’s preferred pace, interests and experience on two wheels. The journey can be discussed around a suitable region, a realistic amount of riding, rest time and opportunities to discover local culture. Share group size, ages, heights for bike sizing, preferred dates and accommodation needs so practical details can be considered before the final route is agreed." ,
    image: "/images/group-cycling-tour-morocco.jpg" ,
    slug: "private-family-mtb-holiday-in-morocco-5-day" ,
  },
  "high-atlas-family-adventure-5-day": {
    number: "09" ,
    label: "MOUNTAIN SCENERY · FAMILY EXPLORATION" ,
    title: "High Atlas Family Adventure" ,
    duration: "5 days" ,
    region: "High Atlas" ,
    description: "Experience the landscapes of the High Atlas on a five-day family trip built around suitable riding and time to explore. The area offers a varied mountain backdrop, but routes can differ considerably in surface, gradient and remoteness. A careful plan should take account of the abilities of all riders, seasonal conditions, daily distances, suitable equipment and the support required along the route." ,
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg" ,
    slug: "high-atlas-family-adventure-5-day" ,
  },
  "morocco-family-cycling-week-7-day": {
    number: "10" ,
    label: "LONGER HOLIDAY · CULTURE AND CYCLING" ,
    title: "Morocco Family Cycling Week" ,
    duration: "7 days" ,
    region: "Morocco · family itinerary" ,
    description: "For families who want a longer holiday, a seven-day cycling journey can combine selected rides with time to enjoy Morocco’s landscapes and culture. The route should be paced realistically, with rest or non-riding activities built in where useful. The most suitable programme depends on the ages and abilities in your group, preferred destinations, travel dates, transport arrangements and the type of accommodation you want." ,
    image: "/images/women-cycling-tour-8-day.jpg" ,
    slug: "morocco-family-cycling-week-7-day" ,
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
  "family-friendly-atlas-mtb-weekend-2-day": {
    highlights: ["Family-paced riding in the Atlas foothills", "Manageable stages with planned rest stops", "Mountain views and village landscapes", "Route choices discussed around each rider’s confidence"],
    difficulty: "Family-paced; route dependent" ,
    difficultyDescription: "The appropriate level depends on each rider’s age, height, confidence, experience and bike fit, as well as the chosen surface and gradients. Not every mountain trail is suitable for every child. The route should be agreed after discussing the whole group." ,
    stages: ["Meet the guide, check bike fit and begin with a suitable foothill ride", "Enjoy a second scenic ride with breaks before finishing the trip"],
    gallery: ["/images/Explore-Atlas-Mountains-by-bike.jpg", "/images/morocco-berber-valley.jpg"],
  },
  "marrakech-family-mountain-bike-ride-1-day": {
    highlights: ["A family cycling experience during a Marrakech stay", "Route and pace planned around the riders", "Time for breaks and countryside views", "Start point and transfers confirmed in advance"],
    difficulty: "Easy to moderate; route dependent" ,
    difficultyDescription: "This is a day-ride concept rather than a fixed graded route. The surface, traffic exposure, distance and elevation should be selected to suit the ages and abilities of the family. Confirm bike sizes, start point and breaks before travel." ,
    stages: ["Meet your guide, check equipment and enjoy a family-paced countryside ride with regular stops"],
    gallery: ["/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg", "/images/group-cycling-tour-morocco.jpg"],
  },
  "ouirgane-valley-family-mtb-escape-2-day": {
    highlights: ["Explore Ouirgane and western Atlas scenery", "Follow suitable countryside tracks and valley routes", "Build in time for village stops and rest", "Choose distance and terrain around the family"],
    difficulty: "Family-paced; route dependent" ,
    difficultyDescription: "Valley routes may include uneven surfaces and changing gradients. The final itinerary should be based on each rider’s confidence, bike fit and comfort on unpaved tracks. The guide should confirm access, weather and the appropriate daily effort." ,
    stages: ["Arrive in the Ouirgane area and take a suitable introductory valley ride", "Explore another section of the valley with family-paced stops and a flexible finish"],
    gallery: ["/images/Explore-Atlas-Mountains-by-bike.jpg", "/images/group-cycling-atlas-mountains.jpg"],
  },
  "atlas-villages-and-gentle-trails-3-day": {
    highlights: ["Visit scenic Atlas villages and rural landscapes", "Choose gentler tracks where route conditions allow", "Keep daily riding flexible and unhurried", "Balance cycling with cultural stops and recovery"],
    difficulty: "Easy to moderate; tailored to the group" ,
    difficultyDescription: "A three-day family trip should prioritise suitable route surfaces, manageable gradients and enough time for breaks. The specific trail difficulty and daily distance must be confirmed after the abilities and ages of all riders are known." ,
    stages: ["Arrival, bike fit and a short introductory route", "Family-paced village and foothill ride with planned breaks", "Final scenic ride or shorter route before departure"],
    gallery: ["/images/group-cycling-atlas-mountains.jpg", "/images/morocco-berber-valley.jpg"],
  },
  "family-e-bike-and-mtb-adventure-2-day": {
    highlights: ["Discuss a mixed standard-bike and e-bike group", "Plan around battery range and charging options", "Choose suitable surfaces for each rider", "Enjoy mountain scenery with time to pause"],
    difficulty: "Adapted to equipment and rider ability" ,
    difficultyDescription: "Mixing e-bikes and standard family cyclings requires a route and pace that work for everyone. Bike fit, handling skills, battery range, charging access and terrain suitability need to be reviewed before the itinerary is agreed." ,
    stages: ["Bike fitting, battery and equipment checks, then a suitable shared ride", "Second family-paced outing with charging and route logistics confirmed beforehand"],
    gallery: ["/images/e-mtb-tour-morocco.jpg", "/images/group-cycling-atlas-mountains.jpg"],
  },
  "four-day-family-atlas-explorer-4-day": {
    highlights: ["Explore several Atlas landscapes at a family pace", "Combine rides with village stops and recovery time", "Choose daily distances around the youngest rider", "Discuss accommodation and transfers in advance"],
    difficulty: "Family-paced; tailored itinerary" ,
    difficultyDescription: "Four days allows a flexible balance of riding and non-riding time, but the route must still fit the ages, confidence and fitness of the group. Daily distance, climbing, support and possible rest periods should be agreed before booking." ,
    stages: ["Arrival, equipment check and a short warm-up ride", "Explore suitable Atlas foothill tracks with planned breaks", "Choose a scenic ride or lower-effort day to suit the group", "Final family ride and onward travel arrangements"],
    gallery: ["/images/group-cycling-atlas-mountains.jpg", "/images/group-cycling-tour-morocco.jpg"],
  },
  "marrakech-countryside-family-cycling-3-day": {
    highlights: ["Use Marrakech as a convenient starting point", "Explore suitable countryside routes beyond the city", "Plan for regular stops and comfortable daily stages", "Review traffic exposure and transfers in advance"],
    difficulty: "Easy to moderate; route dependent" ,
    difficultyDescription: "The countryside around Marrakech contains varied road and track conditions. The family’s route should be checked for surface, traffic, heat, riding distance and transfer arrangements, and adjusted to the comfort level of each participant." ,
    stages: ["Meet the team and enjoy an introductory countryside ride", "Follow a suitable rural route with breaks and a flexible pace", "Short final ride or local cycling experience before departure"],
    gallery: ["/images/cycling-tour-from-marrakech.jpg", "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"],
  },
  "private-family-mtb-holiday-in-morocco-5-day": {
    highlights: ["Private itinerary shaped around your family", "Time for riding, rest and cultural discovery", "Bike sizing and equipment needs discussed in advance", "Choose region, pace and support arrangements together"],
    difficulty: "Customised to the family" ,
    difficultyDescription: "A private itinerary can be planned around a broad range of experience levels, but every route needs to be appropriate for the riders participating. Share ages, heights, confidence, fitness and preferred terrain before agreeing daily stages." ,
    stages: ["Arrival, introductions, bike fitting and trip briefing", "Introductory family ride and route familiarisation", "Main scenic ride chosen for the group", "Flexible riding or cultural day with rest time", "Final ride and departure arrangements"],
    gallery: ["/images/group-cycling-atlas-mountains.jpg", "/images/morocco-berber-valley.jpg"],
  },
  "high-atlas-family-adventure-5-day": {
    highlights: ["Discover High Atlas mountain scenery as a family", "Select routes around ability and conditions", "Keep time for recovery and village visits", "Review altitude, weather and support needs"],
    difficulty: "Moderate only where suitable; route dependent" ,
    difficultyDescription: "High Atlas terrain can be demanding in places. The itinerary should prioritise route suitability for the youngest and least experienced rider, with climbing, altitude, surface and weather considered before a stage is confirmed." ,
    stages: ["Arrival, bike setup and family route briefing", "Scenic ride on suitable foothill trails", "Village and valley ride with planned breaks", "Flexible route day or rest and cultural activities", "Final suitable ride and onward travel"],
    gallery: ["/images/Explore-Atlas-Mountains-by-bike.jpg", "/images/group-cycling-atlas-mountains.jpg"],
  },
  "morocco-family-cycling-week-7-day": {
    highlights: ["A longer cycling holiday with flexible pacing", "Combine selected rides with cultural discoveries", "Build rest or non-riding time into the week", "Match routes and accommodation to the family"],
    difficulty: "Customised; depends on chosen route" ,
    difficultyDescription: "A seven-day holiday does not need to mean seven consecutive riding days. The programme can balance cycling with rest and cultural activities. Route surface, distance, elevation and support should be suitable for everyone in the family." ,
    stages: ["Arrival, family briefing and bike-fitting arrangements", "Introductory ride near the first overnight area", "Scenic cycling stage with suitable terrain", "Cultural or recovery day, with optional short riding", "Ride in a new area if transfers and conditions allow", "Family-selected scenic ride or flexible activities", "Final arrangements and departure"],
    gallery: ["/images/group-cycling-tour-morocco.jpg", "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"],
  },
};

function bookingHref(tour: FamilyTrip, request: "details" | "booking" = "details") {
  return `/contact?tour=${encodeURIComponent(tour.title)}&destination=${encodeURIComponent(tour.region)}&request=${request}`;
}

function getRouteStyle(tour: FamilyTrip) {
  const text = `${tour.title} ${tour.label} ${tour.region}`.toLowerCase();
  if (text.includes("marrakech")) return "Countryside cycling near Marrakech";
  if (text.includes("valley") || text.includes("ouirgane")) return "Valley tracks and village scenery";
  if (text.includes("e-bike")) return "Family e-bike and standard-bike options";
  if (text.includes("private")) return "Private, family-paced itinerary";
  return "Family family cycling and scenic tracks";
}

function getTerrainNotes(tour: FamilyTrip) {
  const text = `${tour.title} ${tour.label} ${tour.region}`.toLowerCase();
  if (text.includes("marrakech")) return "Countryside surfaces, traffic exposure, heat, start points and transfer arrangements should be reviewed for the selected route.";
  if (text.includes("ouirgane") || text.includes("valley")) return "Valley tracks can vary in surface and gradient. Route selection should be matched to the family's confidence, bike fit and daily pace.";
  if (text.includes("high atlas") || text.includes("atlas")) return "Mountain areas may include uneven tracks, gradients and changes in weather. The final route must be appropriate for the youngest and least experienced rider.";
  if (text.includes("e-bike")) return "For a mixed e-bike and standard-bike group, review battery range, charging, bike fit, handling skills and the suitability of the route for all riders.";
  return "Surface, gradients, distance, weather and access vary by route. Confirm the chosen itinerary against every rider's experience and needs.";
}

function getBestFor(tour: FamilyTrip, content: TourContent) {
  const text = `${tour.title} ${tour.label}`.toLowerCase();
  if (text.includes("day ride") || text.includes("marrakech")) return "Families looking to add a suitable, guided countryside ride to a Marrakech stay.";
  if (text.includes("private")) return "Families who want to discuss a private programme based on their ages, experience and preferred pace.";
  if (text.includes("e-bike")) return "Families with appropriate riding experience who want to discuss a mix of electric-assist and standard bikes.";
  return `Families who want a shared cycling experience with route choice and breaks planned around the group; the proposed level is ${content.difficulty.toLowerCase()}.`;
}

function makeDayDescription(tour: FamilyTrip, stage: string, index: number, total: number) {
  const lower = stage.toLowerCase();
  if (lower.includes("arrival") || lower.includes("meet") || lower.includes("setup") || lower.includes("briefing") || lower.includes("fit")) {
    return `Meet the team, check bike fit and equipment for each family member, and review the plan for ${tour.title}. The start point, transfers and any pre-ride arrangements should be confirmed before the trip.`;
  }
  if (lower.includes("departure") || lower.includes("final arrangements") || lower.includes("finish")) {
    return `Finish with the planned short ride or departure arrangements, depending on the group's energy and travel times. Confirm the finish point, bike transport and onward transfers in advance.`;
  }
  if (lower.includes("rest") || lower.includes("recovery") || lower.includes("cultural") || lower.includes("flexible")) {
    return `Keep this stage flexible for rest, local discovery or an optional shorter ride. The final plan should allow for the group's energy, weather and travel needs rather than requiring everyone to ride every day.`;
  }
  if (lower.includes("village") || lower.includes("valley") || lower.includes("scenic") || lower.includes("countryside")) {
    return `Enjoy a family-paced route around ${tour.region}, with suitable terrain and regular opportunities to stop. Confirm route surface, distance, road crossings, water stops and support with the guide.`;
  }
  if (lower.includes("battery") || lower.includes("charging") || lower.includes("bike check")) {
    return `Check bike fit and equipment before setting out. If electric bikes are included, confirm charge level, expected range and charging options; the day's route should suit every rider in the group.`;
  }
  return `On day ${index + 1} of ${total}, follow a route chosen for the family's experience and confidence, with breaks and a flexible pace. Daily distance, gradients, surface and support arrangements should be confirmed for the final itinerary.`;
}

function makeFaqs(tour: FamilyTrip, content: TourContent) {
  return [
    {
      question: `Is ${tour.title} suitable for our children?`,
      answer: `Suitability depends on age, height, cycling confidence, bike fit and the route conditions. Not every mountain trail is appropriate for every child, so share the ages and experience of all riders before selecting the route.`,
    },
    {
      question: `Can the daily distance be adjusted?`,
      answer: `Yes, the proposed itinerary can be discussed around the ages, confidence and energy of the family. Distances, climbing, breaks and non-riding time should be agreed after the route and local conditions are reviewed.`,
    },
    {
      question: `Are bikes and helmets included?`,
      answer: `Equipment inclusions vary and should not be assumed. Confirm available bike sizes, helmets, any rental charges, transfers and support arrangements in the written proposal before booking.`,
    },
    {
      question: `How difficult is this family tour?`,
      answer: `${content.difficulty}. ${content.difficultyDescription}`,
    },
  ];
}

export default function FamilyTripDetail({ slug }: { slug: string }) {
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
    "/images/group-cycling-atlas-mountains.jpg",
    "/images/group-cycling-tour-morocco.jpg",
    "/images/Explore-Atlas-Mountains-by-bike.jpg",
    "/images/morocco-berber-valley.jpg",
    "/images/cycling-tour-from-marrakech.jpg",
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
    <main className="cycling-listing mtb-page mtb-trip-detail family-trip-detail">
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
            <Link className="cl-button cl-button--outline" href="/cycling-trips/family-mtb">Back to Family MTB tours</Link>
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
            <p className="cl-eyebrow cl-eyebrow--dark">FAMILY TOUR OVERVIEW</p>
            <h2 style={{ marginTop: 8, marginBottom: 18 }}>Discover {tour.region} together on a {tour.duration} family cycling journey</h2>
            <p style={{ fontSize: 16, lineHeight: 1.85 }}>{tour.description}</p>
            <p style={{ fontSize: 15, lineHeight: 1.85 }}>This trip is designed as a starting point for planning your ride. Route choice, daily riding time, technical sections, transfers and accommodation should be confirmed around your travel dates and the needs of your group. We recommend sharing your recent riding experience and preferred terrain before the itinerary is finalised.</p>
            <p style={{ fontSize: 15, lineHeight: 1.85 }}>A family cycling holiday should balance time on the bike with regular breaks, realistic distances, local conditions and activities that suit the ages and confidence of everyone taking part.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 22 }}>
              <span style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "9px 12px", fontSize: 12, fontWeight: 700 }}>✓ Private enquiry available</span>
              <span style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "9px 12px", fontSize: 12, fontWeight: 700 }}>✓ Route matched to ability</span>
              <span style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: "9px 12px", fontSize: 12, fontWeight: 700 }}>✓ Details confirmed before booking</span>
            </div>
          </div>
          <aside style={{ background: "#ffffff", border: "1px solid #dedbd3", padding: 26, boxShadow: "0 8px 25px rgba(37,38,32,.05)" }}>
            <p className="cl-eyebrow cl-eyebrow--dark">PLAN THIS ADVENTURE</p>
            <h3 style={{ marginTop: 8, marginBottom: 14 }}>Ask about dates and availability</h3>
            <p style={{ lineHeight: 1.75, fontSize: 14 }}>Tell us the ages and heights of the riders, their experience, preferred dates and accommodation needs. We can then discuss route suitability, equipment and practical arrangements.</p>
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
          <p>Explore family cycling and mountain scenery from Morocco. The final photo selection can be expanded as your own tour gallery grows.</p>
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
          <div className="cl-section-heading"><div><p className="cl-eyebrow cl-eyebrow--dark">KEEP EXPLORING</p><h2>More family cycling tours in Morocco</h2></div><p>Explore other family cycling options and enquire about the itinerary that best fits your ages, dates and preferences.</p></div>
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
          <div className="footer-brand"><Link className="brand" href="/"><img className="brand__logo" src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link><p>Guided family MTB, E-MTB and cycling experiences across Morocco. Discover the landscapes and local culture together at your own pace.</p></div>
          <div><h3>Explore</h3><Link href="/cycling-holiday-morocco">All Cycling Tours</Link><Link href="/cycling-trips/family-mtb">Family MTB Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil-toubkal">Imlil &amp; Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations/agafay-desert">Agafay Desert</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let's plan</h3><Link href="/about">About Us</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="page-width footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span></div>
      </footer>
    </main>
  );
}
