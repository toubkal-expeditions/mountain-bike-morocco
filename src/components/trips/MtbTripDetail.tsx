import Link from "next/link";
import { notFound } from "next/navigation";

type MtbTrip = {
  number: string;
  label: string;
  title: string;
  duration: string;
  region: string;
  description: string;
  image: string;
  slug: string;
};

const trips: Record<string, MtbTrip> = {
  "atlas-singletrack-mountain-bike-tour-6-day": {
    number: "07",
    label: "ATLAS SINGLETRACK",
    title: "Atlas Singletrack Mountain Bike Tour",
    duration: "6 days",
    region: "High Atlas",
    description: "Ride a multi-day network of mountain tracks and singletrack through the High Atlas, with days planned around terrain, climbing and the confidence of the group. Expect rugged scenery, rural paths and time to experience mountain villages between rides.",
    image: "/images/atlas-mountains-singletrack.jpg",
    slug: "atlas-singletrack-mountain-bike-tour-6-day",
  },
  "sahara-cycling-expedition-7-day": {
    number: "08",
    label: "DESERT EXPEDITION",
    title: "Sahara Cycling Expedition",
    duration: "7 days",
    region: "Sahara & southern Morocco",
    description: "Explore the changing landscapes of southern Morocco on a cycling expedition that needs careful planning for distance, water, heat and remote-route support. The final riding format and daily stages should be matched to the group and the conditions.",
    image: "/images/sahara-desert-cycling-expeditions.jpg",
    slug: "sahara-cycling-expedition-7-day",
  },
  "women-cycling-atlas-mountains-6-day": {
    number: "09",
    label: "WOMEN’S MTB JOURNEY",
    title: "Women Cycling Atlas Mountains",
    duration: "6 days",
    region: "High Atlas",
    description: "Plan a women-focused mountain biking journey with a route and daily pace shaped around the riders taking part. Make room for mountain trails, village landscapes, confidence on the bike and thoughtful logistics throughout the trip.",
    image: "/images/women-cycling-tour-8-day.jpg",
    slug: "women-cycling-atlas-mountains-6-day",
  },
  "atlas-enduro-mtb-tour-5-day": {
    number: "10",
    label: "ENDURO MTB",
    title: "Atlas Enduro MTB Tour",
    duration: "5 days",
    region: "High Atlas",
    description: "Combine mountain climbs with technical descents and rugged trails on an enduro-oriented trip. Route choices should reflect your descending experience, bike setup, fitness and current trail conditions.",
    image: "/images/atlas-mountains-enduro-biking-tour.jpg",
    slug: "atlas-enduro-mtb-tour-5-day",
  },
  "toubkal-and-mgoun-mtb-expedition-10-day": {
    number: "11",
    label: "HIGH ATLAS EXPEDITION",
    title: "Toubkal & Mgoun MTB Expedition",
    duration: "10 days",
    region: "Toubkal & Mgoun",
    description: "A longer mountain biking expedition idea connecting dramatic High Atlas landscapes and remote valleys. Stages, transfers, altitude, accommodation and recovery time need to be planned realistically before the itinerary is confirmed.",
    image: "/images/toubkal-cycling-expedition.jpg",
    slug: "toubkal-and-mgoun-mtb-expedition-10-day",
  },
  "atlas-and-desert-cycling-tour-9-day": {
    number: "12",
    label: "MOUNTAINS TO DESERT",
    title: "Atlas & Desert Cycling Tour",
    duration: "9 days",
    region: "Atlas & southern Morocco",
    description: "Link mountain scenery with the wide-open landscapes of the south on a multi-region cycling holiday. Choose the most suitable route style and allow enough time for transfers, changing terrain and support between stages.",
    image: "/images/atlas-to-desert-biking-tour.jpg",
    slug: "atlas-and-desert-cycling-tour-9-day",
  },
  "anti-atlas-mountain-bike-tour-8-day": {
    number: "13",
    label: "ANTI-ATLAS MTB",
    title: "Anti-Atlas Mountain Bike Tour",
    duration: "8 days",
    region: "Anti-Atlas",
    description: "Discover rugged southern mountain landscapes, rocky tracks and quiet rural routes in the Anti-Atlas. Surface, temperature, daily distance and distance between services should inform the route and support plan.",
    image: "/images/anti-atlas-morocco-cycling-tour.jpg",
    slug: "anti-atlas-mountain-bike-tour-8-day",
  },
  "toubkal-cycling-adventure-5-day": {
    number: "14",
    label: "TOUBKAL REGION",
    title: "Toubkal Cycling Adventure",
    duration: "5 days",
    region: "Imlil & Toubkal",
    description: "Explore cycling routes around the Toubkal region, with options to balance climbing, village tracks and mountain viewpoints. The most suitable ride depends on local access, altitude, route surface and rider ability.",
    image: "/images/toubkal-adventure-cycling.jpg",
    slug: "toubkal-cycling-adventure-5-day",
  },
  "atlas-to-atlantic-coast-bike-tour-9-day": {
    number: "15",
    label: "MOUNTAINS TO OCEAN",
    title: "Atlas to Atlantic Coast Bike Tour",
    duration: "9 days",
    region: "Atlas & Atlantic Coast",
    description: "Build a point-to-point cycling journey from mountain country towards Morocco’s Atlantic Coast. A clear itinerary should balance ride stages with transfers, wind exposure, accommodation and the group’s chosen cycling discipline.",
    image: "/images/atlantic-coast-cycling-tour-morocco.jpg",
    slug: "atlas-to-atlantic-coast-bike-tour-9-day",
  },
  "atlas-bike-adventure-4-day": {
    number: "16",
    label: "SHORT MTB ESCAPE",
    title: "Atlas Bike Adventure",
    duration: "4 days",
    region: "High Atlas",
    description: "A shorter multi-day MTB escape with a mix of mountain views, rural tracks and time on the trails. Daily climbs and technical features can be discussed around your experience and the kind of ride you prefer.",
    image: "/images/atlas-cycling-adventure.jpg",
    slug: "atlas-bike-adventure-4-day",
  },
  "atlas-mountains-enduro-tour-3-day": {
    number: "17",
    label: "ENDURO ESCAPE",
    title: "Atlas Mountains Enduro Tour",
    duration: "3 days",
    region: "High Atlas",
    description: "Focus a long weekend on technical riding and rewarding descents in the Atlas Mountains. Make sure the plan reflects your skills, bike condition, transfer arrangements and whether any shuttle support is available for the selected route.",
    image: "/images/atlas-mountains-enduro-biking-tour-3-day.jpg",
    slug: "atlas-mountains-enduro-tour-3-day",
  },
  "atlas-mountains-cycling-tour-6-day": {
    number: "18",
    label: "CLASSIC MOUNTAIN JOURNEY",
    title: "Atlas Mountains Cycling Tour",
    duration: "6 days",
    region: "High Atlas",
    description: "Explore the High Atlas over several days, combining mountain scenery, valley routes and local communities. The trip can be shaped around appropriate MTB terrain, daily distances, rests and the support needed by your group.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    slug: "atlas-mountains-cycling-tour-6-day",
  },
  "epic-singletrack-atlas-mountains-8-day": {
    number: "19",
    label: "SINGLETRACK EXPEDITION",
    title: "Epic Singletrack Atlas Mountains",
    duration: "8 days",
    region: "High Atlas",
    description: "Spend more time exploring mountain trails and singletrack, with a route matched to technical ability and daily riding goals. Discuss steep or exposed sections, hike-a-bike, weather and trail conditions before confirming a demanding itinerary.",
    image: "/images/singletrack-biking-morocco.jpg",
    slug: "epic-singletrack-atlas-mountains-8-day",
  },
  "saghro-cycling-adventure-7-day": {
    number: "20",
    label: "SOUTHERN MTB ADVENTURE",
    title: "Saghro Cycling Adventure",
    duration: "7 days",
    region: "Jbel Saghro & the south",
    description: "Ride through the rugged terrain and expansive landscapes of the Saghro region on a remote-route adventure. Planning should prioritise navigation, water, food, weather, mechanical support and realistic distances between services.",
    image: "/images/saghro-morocco-bike-tour.jpg",
    slug: "saghro-cycling-adventure-7-day",
  },
  "mtb-tour-atlas-mountains-2-day": {
    number: "21",
    label: "WEEKEND MTB",
    title: "MTB Tour Atlas Mountains",
    duration: "2 days",
    region: "High Atlas",
    description: "A compact mountain-bike break for riders who want to fit Atlas trails into a short stay. Choose route difficulty, climbing and transfer times to make the most of two riding days without rushing the experience.",
    image: "/images/mtb-tour-atlas-mountains.jpg",
    slug: "mtb-tour-atlas-mountains-2-day",
  },
  "morocco-luxury-cycling-tour-7-day": {
    number: "22",
    label: "PREMIUM CYCLING HOLIDAY",
    title: "Morocco Luxury Cycling Tour",
    duration: "7 days",
    region: "Morocco · private itinerary",
    description: "Pair rewarding days on the bike with carefully planned logistics, comfortable accommodation and time to discover local culture. Confirm which services, guiding, luggage transfers, meals and bike arrangements are included for your preferred itinerary.",
    image: "/images/morocco-luxury-bike-tour.jpg",
    slug: "morocco-luxury-cycling-tour-7-day",
  },
  "mountain-biking-atlas-mountains-8-day": {
    number: "23",
    label: "MOUNTAIN BIKE HOLIDAY",
    title: "Mountain Biking Atlas Mountains",
    duration: "8 days",
    region: "High Atlas",
    description: "Spend a week exploring the region’s varied mountain terrain, from rural tracks and valley paths to more technical sections where suitable. Routes should reflect the group’s fitness, handling skills, season and daily distance preferences.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
    slug: "mountain-biking-atlas-mountains-8-day",
  },
  "atlas-marrakech-cycling-adventure-5-day": {
    number: "24",
    label: "MARRAKECH TO ATLAS",
    title: "Atlas Marrakech Cycling Adventure",
    duration: "5 days",
    region: "Marrakech & High Atlas",
    description: "Combine time in Marrakech with mountain biking routes in nearby foothills or the wider Atlas region. Plan transfers, bike setup, trail time and recovery so the trip works as one connected holiday.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    slug: "atlas-marrakech-cycling-adventure-5-day",
  },
  "atlas-enduro-trail-adventure-8-day": {
    number: "25",
    label: "ENDURO TRAIL JOURNEY",
    title: "Atlas Enduro Trail Adventure",
    duration: "8 days",
    region: "High Atlas",
    description: "An extended enduro-focused itinerary for riders seeking technical trails and longer mountain descents. Discuss bike setup, route exposure, trail grading, recovery and mechanical support for the whole group.",
    image: "/images/enduro-cycling-holiday-morocco.jpg",
    slug: "atlas-enduro-trail-adventure-8-day",
  },
  "morocco-cycling-adventure-4-day": {
    number: "26",
    label: "MOROCCO MTB JOURNEY",
    title: "Morocco Cycling Adventure",
    duration: "4 days",
    region: "Morocco · route to be planned",
    description: "Create a short cycling holiday shaped around the landscapes and riding style that interest you most. Share dates, ability, preferred terrain and group size to discuss practical route options and support requirements.",
    image: "/images/morocco-cycling-adventure.jpg",
    slug: "morocco-cycling-adventure-4-day",
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
  "atlas-singletrack-mountain-bike-tour-6-day": {
    highlights: ["Explore a mix of Atlas mountain tracks and singletrack", "Ride through rugged High Atlas scenery and rural valleys", "Set daily trail choices around group ability and conditions", "Allow time for local stops between riding stages"],
    difficulty: "Moderate to challenging",
    difficultyDescription: "Expect variable surfaces, climbing and sections of narrow trail. The exact technical level depends on the route selected, weather and the group’s trail experience. Share your comfort level with loose rock, steep gradients and hike-a-bike before confirming.",
    stages: ["High Atlas arrival and bike setup", "Singletrack orientation ride", "Valley trails and mountain tracks", "Longer trail link and viewpoints", "Choose-your-level singletrack day", "Final ride and departure arrangements"],
    gallery: ["/images/atlas-mountains-cycling-tour-morocco.jpg", "/images/group-cycling-tour-morocco.jpg"]
  },
  "sahara-cycling-expedition-7-day": {
    highlights: ["Discover the open landscapes of southern Morocco", "Ride remote tracks with careful water and support planning", "Experience changing terrain between settlements and desert scenery", "Balance riding time with transfers and recovery"],
    difficulty: "Moderate; conditions dependent",
    difficultyDescription: "The main challenges may be heat, exposure, long distances between services and the surface under the tyres. Daily distance and route choice should be agreed according to the season, support plan and each rider’s fitness.",
    stages: ["Travel south and prepare for the expedition", "Opening ride on local tracks", "Longer stage through southern landscapes", "Remote-route riding and support check", "Scenic tracks and local stops", "Flexible ride or transfer day", "Final stage and onward travel"],
    gallery: ["/images/atlas-to-desert-biking-tour.jpg", "/images/sahara-desert-cycling-expeditions.jpg"]
  },
  "women-cycling-atlas-mountains-6-day": {
    highlights: ["A women-focused group riding experience", "Build confidence through suitable route choices", "Discover High Atlas landscapes and village tracks", "Agree the pace, terrain and support before travel"],
    difficulty: "Adaptable to the group",
    difficultyDescription: "This trip should be planned around the experience and goals of the riders joining it. A suitable itinerary can prioritise confidence-building and scenic riding or include more technical terrain where everyone is comfortable.",
    stages: ["Arrival, introductions and bike setup", "Opening ride to agree the group pace", "Mountain trails and village landscapes", "Progressive ride with route options", "Choose a scenic or more technical route", "Final ride and departure arrangements"],
    gallery: ["/images/women-cycling-tour-8-day.jpg", "/images/group-cycling-tour-morocco.jpg"]
  },
  "atlas-enduro-mtb-tour-5-day": {
    highlights: ["Focus on technical trails and rewarding descents", "Match trail selection to rider ability and bike setup", "Include climbing, linking tracks and recovery time", "Review trail conditions and support before each ride"],
    difficulty: "Challenging",
    difficultyDescription: "An enduro-focused trip can include steep gradients, loose rock and technical descending. Confident bike handling and good fitness are recommended; the final grading should be confirmed with the guiding team against current trail conditions.",
    stages: ["Arrival, bike setup and trail briefing", "Warm-up ride and skills assessment", "Enduro stages and descent options", "Linking trails and a longer mountain ride", "Final descent and departure arrangements"],
    gallery: ["/images/toubkal-imlil-enduro-mtb-expedition.jpg", "/images/singletrack-biking-morocco.jpg"]
  },
  "toubkal-and-mgoun-mtb-expedition-10-day": {
    highlights: ["Plan an extended High Atlas mountain journey", "Explore changing valleys and remote mountain scenery", "Allow time for transfers, recovery and route adjustments", "Discuss altitude, support and daily stages in advance"],
    difficulty: "Challenging; route dependent",
    difficultyDescription: "The length of the trip does not guarantee easier days: climbing, altitude, weather and distance between services all matter. Fitness for repeated riding days and comfort with remote-route logistics should be discussed before booking.",
    stages: ["Arrival, equipment check and expedition briefing", "Opening ride in the High Atlas", "Mountain tracks and valley exploration", "Longer connecting stage", "Route day planned around Toubkal-region access", "Transfer and recovery window", "Ride in a new valley or trail area", "Longer mountain stage subject to conditions", "Scenic final riding day", "Departure and onward transfer"],
    gallery: ["/images/toubkal-cycling-expedition.jpg", "/images/toubkal-adventure-cycling.jpg"]
  },
  "atlas-and-desert-cycling-tour-9-day": {
    highlights: ["Combine mountain and southern Morocco landscapes", "Contrast Atlas trails with open-country tracks", "Plan transfers realistically between riding regions", "Adapt daily effort to climate and surface"],
    difficulty: "Moderate to challenging",
    difficultyDescription: "The mountain and southern sections may feel quite different. Riders should be prepared for varied surfaces and repeated days on the bike; heat, elevation and transfer times will influence the final schedule.",
    stages: ["Arrival and bike setup", "Opening ride in the Atlas foothills", "Mountain tracks and valley routes", "Longer High Atlas ride", "Transfer toward southern Morocco", "Ride on open-country tracks", "Explore local routes and landscapes", "Final full riding stage", "Wrap-up and departure arrangements"],
    gallery: ["/images/atlas-to-desert-biking-tour.jpg", "/images/sahara-desert-cycling-expeditions.jpg"]
  },
  "anti-atlas-mountain-bike-tour-8-day": {
    highlights: ["Explore rugged landscapes in the Anti-Atlas", "Ride rocky tracks and quiet rural routes", "Plan for sun exposure, water and sparse services", "Mix riding with time to experience local landscapes"],
    difficulty: "Moderate to challenging",
    difficultyDescription: "Expect rocky or uneven surfaces and possible exposure to heat. Fitness, tyre choice, daily distance and support arrangements should be matched to the season and the route actually available.",
    stages: ["Arrival and preparation for southern riding", "Opening ride on local tracks", "Rocky routes and rural landscapes", "Longer loop with planned support stops", "Explore a different section of the region", "Flexible stage or recovery window", "Scenic final full ride", "Departure arrangements"],
    gallery: ["/images/anti-atlas-morocco-cycling-tour.jpg", "/images/saghro-morocco-bike-tour.jpg"]
  },
  "toubkal-cycling-adventure-5-day": {
    highlights: ["Explore routes around Imlil and the Toubkal region", "Combine mountain scenery with village tracks", "Choose climbing and technical level to suit the group", "Allow for altitude and changing mountain weather"],
    difficulty: "Moderate to challenging",
    difficultyDescription: "Route difficulty depends on altitude, climb length, surface and technical features. Conditions in the mountains can change quickly, so the daily plan should be confirmed locally and adapted where necessary.",
    stages: ["Arrival near the Toubkal region and bike setup", "Opening ride on suitable valley routes", "Mountain tracks and village landscapes", "Longer ride with route options", "Final scenic ride and departure arrangements"],
    gallery: ["/images/toubkal-adventure-cycling.jpg", "/images/toubkal-imlil-enduro-mtb-expedition.jpg"]
  },
  "atlas-to-atlantic-coast-bike-tour-9-day": {
    highlights: ["Connect Atlas scenery with Morocco’s Atlantic Coast", "Experience changing landscapes across a point-to-point journey", "Plan for transfers, wind exposure and varied surfaces", "Balance riding days with time to rest and explore"],
    difficulty: "Moderate; route dependent",
    difficultyDescription: "The challenge depends on the mix of mountain, road and track sections chosen. Wind, accumulated distance and transfers can be as important as technical trail difficulty; the final route should specify riding surfaces and daily effort.",
    stages: ["Arrival and bike setup", "Opening ride around the Atlas foothills", "Mountain tracks and valley riding", "Longer stage through changing landscapes", "Transfer and ride in a new region", "Point-to-point stage toward the coast", "Coastal-area ride, subject to route", "Final full ride or flexible stage", "Departure arrangements"],
    gallery: ["/images/atlantic-coast-cycling-tour-morocco.jpg", "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"]
  },
  "atlas-bike-adventure-4-day": {
    highlights: ["A shorter multi-day MTB escape", "Ride a blend of mountain views and rural tracks", "Keep daily stages manageable for the available time", "Discuss technical sections and climbing in advance"],
    difficulty: "Moderate; adaptable",
    difficultyDescription: "A short trip can still involve sustained climbing or rough trails. The route should be chosen according to your fitness, bike-handling experience and preferred balance between scenic riding and technical sections.",
    stages: ["Arrival, bike check and introductory ride", "Mountain trails and local tracks", "Longer ride with a choice of route difficulty", "Final ride and departure arrangements"],
    gallery: ["/images/atlas-cycling-adventure.jpg", "/images/atlas-mountains-cycling-tour-morocco.jpg"]
  },
  "atlas-mountains-enduro-tour-3-day": {
    highlights: ["A focused enduro weekend in the High Atlas", "Prioritise technical trails and descents", "Choose routes around current trail conditions", "Keep time for bike checks and recovery"],
    difficulty: "Challenging",
    difficultyDescription: "Intended for riders comfortable with technical mountain terrain. Descent length and difficulty vary by trail; confirm any steep, loose or exposed sections with the guide before setting out.",
    stages: ["Arrival, bike check and trail briefing", "Enduro ride with selected descent options", "Final trail session and onward travel"],
    gallery: ["/images/atlas-mountains-enduro-biking-tour-3-day.jpg", "/images/toubkal-imlil-enduro-mtb-expedition.jpg"]
  },
  "atlas-mountains-cycling-tour-6-day": {
    highlights: ["Explore a variety of High Atlas routes", "Combine mountain views, valley riding and village landscapes", "Adapt daily distances to the group", "Include practical time for transfers and recovery"],
    difficulty: "Moderate; route dependent",
    difficultyDescription: "Difficulty can range from steady scenic tracks to more demanding climbs and rougher trails. Share your fitness and technical experience so the proposed itinerary can be adjusted appropriately.",
    stages: ["Arrival and bike setup", "Opening ride in the High Atlas", "Valley routes and mountain tracks", "Longer ride with planned rest stops", "Explore a new trail area", "Final ride and departure arrangements"],
    gallery: ["/images/atlas-mountains-cycling-tour-morocco.jpg", "/images/singletrack-mtb-atlas-mountains.jpg"]
  },
  "epic-singletrack-atlas-mountains-8-day": {
    highlights: ["Spend more time on Atlas singletrack", "Link trail areas and mountain tracks across multiple days", "Plan technical features around rider confidence", "Balance demanding riding with recovery and route options"],
    difficulty: "Challenging",
    difficultyDescription: "Designed as a more demanding trail-focused option. Expect the possibility of rocky sections, sustained climbs and hike-a-bike; the precise grading and daily route must be confirmed against local conditions.",
    stages: ["Arrival and bike setup", "Singletrack warm-up and skills check", "Mountain trails and connecting tracks", "Longer singletrack-focused stage", "Route exploration and technical options", "Recovery window or shorter ride", "Big trail day matched to the group", "Final ride and departure arrangements"],
    gallery: ["/images/singletrack-biking-morocco.jpg", "/images/atlas-mountains-singletrack.jpg"]
  },
  "saghro-cycling-adventure-7-day": {
    highlights: ["Explore the rugged scenery of the Jbel Saghro region", "Ride remote tracks with careful logistical planning", "Plan water, navigation and support between stages", "Enjoy expansive landscapes in southern Morocco"],
    difficulty: "Moderate to challenging",
    difficultyDescription: "Remote terrain can make logistics as demanding as the riding. Daily distances, water resupply, support access and weather should be considered carefully before confirming the plan.",
    stages: ["Travel to the region and prepare bikes", "Opening ride on local tracks", "Explore rocky terrain and broad landscapes", "Longer remote-route stage with support planning", "Ride a different section of the region", "Final full riding stage", "Departure and onward transfer"],
    gallery: ["/images/saghro-morocco-bike-tour.jpg", "/images/anti-atlas-morocco-cycling-tour.jpg"]
  },
  "mtb-tour-atlas-mountains-2-day": {
    highlights: ["Fit an Atlas MTB experience into a short break", "Choose route difficulty to suit your time and fitness", "Enjoy mountain scenery without a long holiday", "Confirm transfers and start points before travel"],
    difficulty: "Beginner-friendly to intermediate options",
    difficultyDescription: "The two-day format can be tailored, but not every Atlas trail is suitable for beginners. Request clear information about climb, distance, surface and technical features before selecting the route.",
    stages: ["Bike setup, route briefing and first Atlas ride", "Second ride chosen to match the group, then departure"],
    gallery: ["/images/mtb-tour-atlas-mountains.jpg", "/images/atlas-cycling-adventure.jpg"]
  },
  "morocco-luxury-cycling-tour-7-day": {
    highlights: ["Combine time on the bike with carefully planned logistics", "Discuss accommodation comfort and support preferences", "Choose riding stages to suit the group", "Leave room to discover landscapes and local culture"],
    difficulty: "Flexible; determined by chosen routes",
    difficultyDescription: "Luxury describes the intended holiday style rather than a technical grade. Riding difficulty, daily distance, accommodation and support inclusions should be agreed separately in the itinerary proposal.",
    stages: ["Arrival and personal bike/route briefing", "Opening ride with selected route options", "Scenic mountain ride and planned stops", "Flexible riding day or recovery time", "Explore another region or trail area", "Final full ride chosen to suit the group", "Wrap-up and departure arrangements"],
    gallery: ["/images/morocco-luxury-bike-tour.jpg", "/images/group-cycling-tour-morocco.jpg"]
  },
  "mountain-biking-atlas-mountains-8-day": {
    highlights: ["Spend a week exploring varied Atlas terrain", "Combine rural tracks, valley paths and suitable technical sections", "Match daily effort to the group’s fitness", "Allow for seasonal conditions and recovery"],
    difficulty: "Moderate to challenging; route dependent",
    difficultyDescription: "An eight-day trip means several consecutive riding days. Fitness, recovery, altitude and surface all affect difficulty; choose technical sections and daily distance with the guiding team in advance.",
    stages: ["Arrival, bike setup and briefing", "Opening ride on Atlas tracks", "Explore valley routes and village landscapes", "Longer mountain ride", "Flexible stage or recovery window", "New trail area and route options", "Final full riding stage", "Departure arrangements"],
    gallery: ["/images/mountain-biking-atlas-mountains-morocco.jpg", "/images/atlas-mountains-cycling-tour-morocco.jpg"]
  },
  "atlas-marrakech-cycling-adventure-5-day": {
    highlights: ["Combine a Marrakech stay with Atlas riding", "Arrange practical transfers between city and trail areas", "Choose scenic or more technical ride options", "Balance time on the bike with travel and recovery"],
    difficulty: "Flexible; moderate options available",
    difficultyDescription: "This trip can range from accessible foothill routes to more demanding Atlas terrain. Confirm the amount of riding, climbing, technical difficulty and transfer time before finalising dates.",
    stages: ["Meet in Marrakech and check bikes/route plan", "First ride in the foothills or Atlas area", "Mountain tracks and village scenery", "Longer ride selected for the group", "Final ride or city departure, depending on travel plans"],
    gallery: ["/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg", "/images/cycling-tour-from-marrakech.jpg"]
  },
  "atlas-enduro-trail-adventure-8-day": {
    highlights: ["Focus an extended trip on technical trail riding", "Build progression across multiple days where appropriate", "Include climbing, linking trails and recovery", "Plan mechanical support and trail conditions carefully"],
    difficulty: "Challenging",
    difficultyDescription: "Best suited to riders with confident technical handling and the fitness for repeated mountain days. Trail grading, exposure and descent length must be reviewed for the actual route before booking.",
    stages: ["Arrival, equipment check and trail briefing", "Warm-up trails and skills assessment", "Enduro stages and descent choices", "Longer linking ride through mountain terrain", "Technical trail day matched to conditions", "Flexible session or recovery window", "Final full enduro ride", "Wrap-up and departure arrangements"],
    gallery: ["/images/enduro-cycling-holiday-morocco.jpg", "/images/toubkal-imlil-enduro-mtb-expedition.jpg"]
  },
  "morocco-cycling-adventure-4-day": {
    highlights: ["Build a compact cycling holiday around your interests", "Discuss route type before committing to a region", "Choose daily effort to match available time", "Plan support and transfers around the final route"],
    difficulty: "Flexible; confirmed after route planning",
    difficultyDescription: "This is a broad trip concept rather than a fixed technical grade. Difficulty depends on whether the agreed plan focuses on scenic tracks, mountain climbs or more technical MTB terrain.",
    stages: ["Arrival, bike check and route planning", "Opening ride in the chosen region", "Main ride day matched to the group", "Final ride or onward transfer"],
    gallery: ["/images/morocco-cycling-adventure.jpg", "/images/mountain-bike-morocco-hero.jpg"]
  }
};

function bookingHref(tour: MtbTrip, request: "details" | "booking" = "details") {
  return `/contact?tour=${encodeURIComponent(tour.title)}&destination=${encodeURIComponent(tour.region)}&request=${request}`;
}

function getRouteStyle(tour: MtbTrip) {
  const text = `${tour.title} ${tour.label} ${tour.region}`.toLowerCase();
  if (text.includes("enduro")) return "Enduro-focused mountain riding";
  if (text.includes("singletrack")) return "Mountain tracks and singletrack";
  if (text.includes("sahara") || text.includes("desert") || text.includes("saghro")) return "Southern routes and open-country tracks";
  if (text.includes("coast") || text.includes("atlantic")) return "A point-to-point journey toward the coast";
  if (text.includes("women")) return "A women-focused group riding journey";
  if (text.includes("luxury")) return "A supported cycling holiday with comfort-focused planning";
  if (text.includes("marrakech")) return "Marrakech and Atlas foothill riding";
  return "A multi-day mountain biking journey";
}

function getTerrainNotes(tour: MtbTrip) {
  const text = `${tour.title} ${tour.label} ${tour.region}`.toLowerCase();
  if (text.includes("sahara") || text.includes("desert") || text.includes("saghro")) {
    return "Open and remote landscapes may bring greater sun exposure, longer gaps between services and variable track surfaces. Water, support, temperatures and realistic stage lengths should be confirmed for the season.";
  }
  if (text.includes("coast") || text.includes("atlantic")) {
    return "A journey toward the Atlantic can involve changing surfaces and weather, with wind and transfers affecting the overall effort. Confirm which sections are ridden and which, if any, require transport.";
  }
  if (text.includes("enduro")) {
    return "Expect route choices to be guided by technical confidence, trail condition and the availability of suitable climbs or transfers. Steep, loose or exposed sections should be discussed before the ride.";
  }
  if (text.includes("toubkal") || text.includes("mgoun") || text.includes("high atlas") || text.includes("atlas")) {
    return "Atlas terrain can vary between rural tracks, rocky paths, climbs and narrower trail sections. Elevation, weather, local access and the riders’ experience influence which routes are appropriate.";
  }
  return "The final terrain mix depends on the selected region and route. Confirm the surface, climbing, technical features and support arrangements against your group’s experience and travel dates.";
}

function getBestFor(tour: MtbTrip, content: TourContent) {
  const text = `${tour.title} ${tour.label}`.toLowerCase();
  if (text.includes("enduro") || text.includes("epic singletrack")) return "Riders with confident bike handling who enjoy technical trails and repeated days on the bike.";
  if (text.includes("women")) return "Riders looking for a women-focused group experience with pace and route choices discussed in advance.";
  if (text.includes("luxury")) return "Riders who want cycling combined with carefully planned logistics and comfort preferences.";
  if (text.includes("sahara") || text.includes("desert") || text.includes("saghro")) return "Riders who are comfortable planning for remote landscapes, changing surfaces and weather exposure.";
  return `Riders whose fitness and trail confidence fit a ${content.difficulty.toLowerCase()} route, with the final level agreed before travel.`;
}

function makeDayDescription(tour: MtbTrip, stage: string, index: number, total: number) {
  const lower = stage.toLowerCase();
  if (lower.includes("arrival") || lower.includes("meet") || lower.includes("setup") || lower.includes("preparation") || lower.includes("briefing")) {
    return `Meet the team, review the plan and check bikes and equipment. The starting location, transfer timing and any pre-ride arrangements for ${tour.title} should be confirmed before departure.`;
  }
  if (lower.includes("transfer") || lower.includes("departure") || lower.includes("onward travel") || lower.includes("wrap-up")) {
    return `Allow time for the planned transfer or departure arrangements. Whether riding is included on this stage depends on travel schedules and the final itinerary; confirm timings and luggage or bike transport in advance.`;
  }
  if (lower.includes("recovery") || lower.includes("flexible") || lower.includes("rest")) {
    return `Keep this stage flexible for recovery, local conditions or a shorter optional ride. The team can confirm whether it is a rest, transfer or riding day once the route and group requirements are agreed.`;
  }
  if (lower.includes("enduro") || lower.includes("descent") || lower.includes("technical") || lower.includes("trail session")) {
    return `Focus on the selected trail options in ${tour.region}, with the day's terrain chosen around rider confidence, bike setup and current conditions. Steep or exposed features should be discussed with the guide before setting off.`;
  }
  if (lower.includes("desert") || lower.includes("southern") || lower.includes("remote") || lower.includes("saghro") || lower.includes("open-country")) {
    return `Explore the planned tracks through ${tour.region}. Route distance, water stops, vehicle support and heat exposure need to be checked for the season rather than assumed in advance.`;
  }
  if (lower.includes("singletrack") || lower.includes("mountain") || lower.includes("valley") || lower.includes("village") || lower.includes("atlas")) {
    return `Ride a route selected for the group through the ${tour.region} area, with time for climbs, descents and planned stops. The exact track, distance and elevation are confirmed against local access and conditions.`;
  }
  if (index === total - 1) {
    return `Complete the final planned ride or wrap up the trip, depending on departure times and conditions. Confirm the finish point, transfer arrangements and any onward travel before the trip begins.`;
  }
  return `Explore a stage planned around ${tour.region}, your group's fitness and the intended riding style. The guide should confirm daily distance, climbing, surface, stops and support arrangements as part of the final itinerary.`;
}

function makeFaqs(tour: MtbTrip, content: TourContent) {
  return [
    {
      question: `What is included in the ${tour.duration} ${tour.title}?`,
      answer: `Inclusions can vary by the final proposal. Before confirming, ask us to list guiding, transfers, accommodation, meals, bike support, luggage arrangements and any equipment supplied for the ${tour.title}.`
    },
    {
      question: `How difficult is this ${tour.duration} tour?`,
      answer: `${content.difficulty}. ${content.difficultyDescription} Tell us about your recent riding experience so the planned route can be matched to the group.`
    },
    {
      question: `Can the itinerary be adapted to our group?`,
      answer: `The suggested itinerary is a starting framework, not a confirmed operating schedule. Route options, daily distance, rest time and logistics can be discussed around your travel dates, group size and preferences.`
    },
    {
      question: `What should I bring?`,
      answer: `Bring a properly fitting helmet, gloves, riding clothing, suitable shoes, eye protection, hydration and sun protection. Depending on the season and elevation, warm layers or waterproofs may be needed. Confirm the final packing list and what support equipment is provided before departure.`
    }
  ];
}

export default function MtbTripDetail({ slug }: { slug: string }) {
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
    "/images/singletrack-biking-morocco.jpg",
    "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    "/images/atlas-cycling-adventure.jpg",
    "/images/atlas-to-desert-biking-tour.jpg",
    "/images/mountain-biking-atlas-mountains-morocco.jpg",
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
    <main className="cycling-listing mtb-page mtb-trip-detail">
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
            <Link className="cl-button cl-button--outline" href="/cycling-trips/mtb">Back to MTB tours</Link>
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
            <h2 style={{ marginTop: 8, marginBottom: 18 }}>Discover the {tour.region} on a {tour.duration} mountain bike journey</h2>
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
          <div className="cl-section-heading"><div><p className="cl-eyebrow cl-eyebrow--dark">KEEP EXPLORING</p><h2>More mountain bike tours in Morocco</h2></div><p>Compare other trip ideas and enquire about the option that best fits your dates and riding goals.</p></div>
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
          <div><h3>Explore</h3><Link href="/cycling-holiday-morocco">All Cycling Tours</Link><Link href="/cycling-trips/mtb">Mountain Bike Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil-toubkal">Imlil &amp; Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations/agafay-desert">Agafay Desert</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let's plan</h3><Link href="/about">About Us</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="page-width footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span></div>
      </footer>
    </main>
  );
}
