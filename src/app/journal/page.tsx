import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Morocco Cycling Journal | MTB, Gravel, E-MTB & Road Guides | Mountain Bike Morocco",
  description:
    "Read the Mountain Bike Morocco journal for practical cycling guides, Atlas Mountains trail inspiration, gravel and E-MTB advice, route-planning tips, and ideas for cycling holidays across Morocco.",
};

const articles = [
  {
    slug: "high-atlas-mtb-guide",
    category: "MOUNTAIN BIKE GUIDES",
    readTime: "6 min read",
    title: "A Rider’s Guide to Mountain Biking in the High Atlas",
    excerpt:
      "Discover what makes the High Atlas such a rewarding place to ride, from rocky singletrack and mountain paths to valley traverses and remote village landscapes.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    imageAlt: "Mountain bike singletrack through Morocco’s High Atlas Mountains",
    body: [
      "The High Atlas offers a varied mountain-bike experience: rocky paths, narrow tracks, open slopes, village trails and long descents between changes in altitude. Conditions can change quickly with elevation and season, so a route that looks short on a map may still demand fitness, technical confidence and time for breaks.",
      "Before choosing a ride, talk through your experience on loose surfaces, steep gradients and exposed terrain. Ask for a realistic overview of daily distance, climbing, technical sections and any hike-a-bike. A good itinerary matches the route to the riders rather than asking every rider to fit the same demanding schedule.",
      "Respect local life as you pass through mountain communities. Slow down near people and animals, give way when appropriate, avoid widening trails, and follow the guidance of your local team. These small choices help keep rides enjoyable for visitors and residents alike.",
    ],
    relatedLabel: "Explore Atlas Mountains tours",
    relatedHref: "/destinations/atlas-mountains",
  },
  {
    slug: "best-time-to-cycle-morocco",
    category: "TRIP PLANNING",
    readTime: "5 min read",
    title: "When Is the Best Time to Go Cycling in Morocco?",
    excerpt:
      "Plan around altitude, temperature, wind and the kind of terrain you want to ride instead of relying on one season for every region.",
    image: "/images/cycling-holiday-morocco.jpg",
    imageAlt: "Cycling holiday scenery in Morocco",
    body: [
      "Morocco’s riding conditions are not the same everywhere. Mountain routes can be cooler and more exposed than the plains, while desert and southern routes can be affected by heat, wind and large temperature differences between day and night. Coastal riding has its own considerations, including wind and changing surface conditions.",
      "When choosing dates, begin with the destination and the discipline. Ask about expected seasonal conditions, daylight, route access and how the daily stages may be adjusted. For a multi-day itinerary, allow enough flexibility for rest, transfers and changes to the plan if the weather or trail conditions make a section unsuitable.",
      "Use general seasonal guidance as a starting point, not a guarantee. Confirm the current forecast, route status and the details of your proposed itinerary shortly before travelling, and bring clothing layers appropriate to the elevations and regions on your route.",
    ],
    relatedLabel: "Compare Morocco destinations",
    relatedHref: "/destinations",
  },
  {
    slug: "mtb-or-emtb-morocco",
    category: "CHOOSING YOUR RIDE",
    readTime: "5 min read",
    title: "MTB or E-MTB in Morocco: Which Ride Suits You?",
    excerpt:
      "Understand the practical differences between a conventional mountain bike and an electric-assisted bike before choosing trails or a multi-day tour.",
    image: "/images/e-mtb-tour-morocco.jpg",
    imageAlt: "Electric mountain bike ready for a Morocco trail ride",
    body: [
      "A conventional mountain bike is a strong choice for riders who enjoy managing their own effort on climbs and want a familiar, direct riding feel. An E-MTB adds pedal assistance that can help a group manage elevation or keep a steady pace, but it does not remove the technical demands of loose trails, steep descents or remote terrain.",
      "For E-MTB trips, battery range and charging are part of route planning. The usable range depends on elevation, rider weight, assistance mode, surface, temperature and battery condition. A multi-day itinerary should specify how charging, spare batteries where relevant, mechanical assistance and transfers will work before the booking is confirmed.",
      "Choose the bike that fits the terrain, your skills and the kind of effort you want from the trip. Share your riding experience honestly and ask which bike options are available for the dates you are considering.",
    ],
    relatedLabel: "Explore E-MTB tours",
    relatedHref: "/cycling-trips/e-mtb",
  },
  {
    slug: "morocco-gravel-cycling-guide",
    category: "GRAVEL CYCLING",
    readTime: "6 min read",
    title: "Gravel Cycling in Morocco: Roads, Tracks and Preparation",
    excerpt:
      "Learn how terrain, tyre choice, daily distance, supplies and support shape a rewarding gravel journey through Morocco.",
    image: "/images/gravel-cycling-morocco.jpg",
    imageAlt: "Gravel cycling across rural tracks in Morocco",
    body: [
      "Gravel riding in Morocco can link quiet paved roads, hard-packed tracks and rougher sections through rural and open landscapes. Surface quality varies, sometimes on the same day, so route descriptions should explain what to expect rather than relying on distance alone.",
      "Bike setup matters. Tyre width and tread, puncture protection, gearing, brakes and carrying capacity should suit the route and the bike you plan to use. Bring basic repair supplies and discuss what the support team carries, how luggage is moved and where food and water can be obtained along remote stages.",
      "Before committing to a long ride, ask about the route profile, surface mix, resupply gaps and the plan for mechanical problems. A well-designed gravel trip balances adventurous tracks with a realistic schedule and a support plan that suits the terrain.",
    ],
    relatedLabel: "View gravel cycling tours",
    relatedHref: "/cycling-trips/gravel",
  },
  {
    slug: "cycling-tour-from-marrakech",
    category: "ROUTE INSPIRATION",
    readTime: "5 min read",
    title: "Planning a Cycling Tour from Marrakech",
    excerpt:
      "Use Marrakech as a starting point for a day ride, a mountain escape or a longer journey, with transfers and riding time planned realistically.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    imageAlt: "Cycling route and countryside near Marrakech",
    body: [
      "Marrakech can be a convenient base for a cycling holiday, but the best ride depends on how much time you have and where you want to spend it. A day trip may focus on accessible countryside, while a longer holiday can include mountain terrain, rural tracks or a route that continues into another region.",
      "Think about the full day rather than ride time alone. Transfers, bike setup, breaks, meals and the return journey all need space in the schedule. For a multi-day trip, clarify where each stage starts and finishes, how luggage is handled and what happens if a route needs to change.",
      "When you enquire, share your travel dates, group size, riding style, experience and preferred daily effort. Those details help narrow the destinations and tour formats that are worth considering.",
    ],
    relatedLabel: "Explore tours from Marrakech",
    relatedHref: "/cycling-trips/from-marrakech",
  },
  {
    slug: "desert-cycling-preparation",
    category: "DESERT CYCLING",
    readTime: "6 min read",
    title: "Preparing for a Desert Cycling Expedition",
    excerpt:
      "Desert journeys need careful preparation for heat, distance, water, navigation, bike maintenance and the logistics between stages.",
    image: "/images/desert-cycling-expeditions.jpg",
    imageAlt: "Cyclists preparing for a desert cycling expedition in Morocco",
    body: [
      "A desert cycling trip is more than a sequence of rides. Open terrain, limited services and long gaps between settlements make route planning, water, food, navigation and support essential parts of the itinerary. Daily distance should be agreed against the actual terrain and the ability of the group.",
      "Pack for a range of conditions. Sun protection, suitable layers, a reliable hydration system, repair essentials and personal medication should be considered alongside your usual cycling kit. The organiser should explain what the support vehicle carries, what you need to carry yourself and how communication and contingency plans work.",
      "Do not assume that all desert tracks are rideable or that a route can be followed independently without local knowledge. Check access, weather, services, support arrangements and the precise itinerary before departure, and follow local guidance during the trip.",
    ],
    relatedLabel: "Explore Sahara cycling tours",
    relatedHref: "/destinations/sahara-desert",
  },
  {
    slug: "cycling-atlantic-coast",
    category: "COASTAL CYCLING",
    readTime: "4 min read",
    title: "Discovering Morocco by Bike Along the Atlantic Coast",
    excerpt:
      "Coastal routes offer a different rhythm to mountain and desert riding, with wind, road surfaces and the choice of terrain shaping each day.",
    image: "/images/atlantic-coast-cycling-tour-morocco.jpg",
    imageAlt: "Cycling along Morocco’s Atlantic Coast",
    body: [
      "The Atlantic Coast offers a different style of cycling from the Atlas Mountains. Depending on the route, a day may include paved coastal roads, rural tracks, small settlements and open stretches exposed to the wind. Distance alone is not enough to describe the effort; wind direction and the road surface can make a substantial difference.",
      "Choose a bike and route that fit the experience you want. Road riders may prefer smoother paved stretches, while gravel or MTB riders may enjoy a route that uses suitable tracks away from busier roads. Confirm the surface mix, traffic exposure, support and planned stops before the trip.",
      "Leave room for changing conditions and treat local communities and coastal environments with care. A flexible itinerary lets the group enjoy the landscape without needing to force a ride when the conditions are unsuitable.",
    ],
    relatedLabel: "Explore Atlantic Coast tours",
    relatedHref: "/destinations/atlantic-coast",
  },
  {
    slug: "what-to-pack-cycling-morocco",
    category: "PRACTICAL ADVICE",
    readTime: "5 min read",
    title: "What to Pack for a Cycling Holiday in Morocco",
    excerpt:
      "Build a practical kit list around your discipline, season, altitude and the services included in your chosen tour.",
    image: "/images/group-cycling-tour-morocco.jpg",
    imageAlt: "Cycling group on a guided Morocco tour",
    body: [
      "Start with the essentials you use on every ride: a correctly fitted helmet, cycling clothing, gloves, suitable shoes, eyewear and a hydration system. Add a small personal repair kit appropriate to your bike, and confirm which spares and tools the support team will carry so you do not duplicate equipment unnecessarily.",
      "Morocco’s landscapes and elevation changes make layers useful. Depending on the route and season, consider sun protection, a light wind or rain layer, warmer clothing for early starts or higher elevations, and comfortable clothing for time off the bike. For desert or remote stages, follow the organiser’s guidance on water capacity and supplies.",
      "Before travelling, confirm whether a bike and helmet are provided, what sizes are available, what luggage allowance applies and whether transfers include space for bike cases. Keep essential medication and important personal items accessible, and make sure you know what is and is not included in your tour.",
    ],
    relatedLabel: "Ask about equipment and trip details",
    relatedHref: "/contact?request=cycling-equipment-planning",
  },

  {
    "slug": "best-mtb-trails-atlas-mountains",
    "category": "MOUNTAIN BIKE GUIDES",
    "readTime": "7 min read",
    "title": "The Best MTB Trails in the Atlas Mountains",
    "excerpt": "Explore the kinds of High Atlas terrain that make Morocco rewarding for mountain bikers, from rocky traverses and village tracks to flowing singletrack and long descents.",
    "image": "/images/atlas-mountains-singletrack.jpg",
    "imageAlt": "Mountain bike trail in the Atlas Mountains",
    "body": [
      "The Atlas Mountains offer a varied mix of riding rather than one uniform trail type. Depending on the valley and elevation, a ride may include loose rock, narrow paths, old mule tracks, smoother dirt and sections of technical singletrack. Trail difficulty can change quickly, so distance and elevation alone do not tell the whole story.",
      "When comparing routes, ask about the surface, exposure, steepness, hike-a-bike sections, daily climbing and the level of technical control expected. Riders should be comfortable braking on loose ground and managing uneven terrain; a local guide can help select a route that matches the group's ability and the conditions on the day.",
      "Protect the experience by yielding to walkers and animals, riding slowly through villages, and avoiding shortcuts that widen trails. The best route is not simply the most difficult one—it is the one that suits your skills and lets you enjoy the landscape responsibly."
    ],
    "relatedLabel": "Explore Atlas Mountains tours",
    "relatedHref": "/destinations/atlas-mountains"
  },
  {
    "slug": "complete-high-atlas-mountains-cycling-guide",
    "category": "DESTINATION GUIDES",
    "readTime": "8 min read",
    "title": "Complete High Atlas Mountains Cycling Guide",
    "excerpt": "Plan a High Atlas cycling holiday with a clearer picture of terrain, altitude, seasons, villages, logistics and how to choose the right riding style.",
    "image": "/images/atlas-mountains-cycling-tour-morocco.jpg",
    "imageAlt": "Cycling in Morocco’s High Atlas Mountains",
    "body": [
      "The High Atlas is a region of changing elevations, mountain valleys, rural settlements and routes that range from paved climbs to rough tracks and technical trails. A suitable itinerary depends on whether you want road miles, gravel exploration, mountain-bike descents or electric-assisted climbing. Some routes involve long transfers before the ride begins, so include logistics when comparing options.",
      "Altitude and weather deserve attention. Temperatures can differ significantly between valleys and higher passes, and exposed sections may feel cooler or windier than expected. Discuss daily distance, climbing, food and water stops, accommodation, luggage handling and the plan for adjusting a stage if conditions change.",
      "Before booking, share your riding experience and what you most enjoy about cycling. A thoughtful plan balances challenging rides with recovery time and allows you to experience local communities without rushing through them."
    ],
    "relatedLabel": "Explore High Atlas destinations",
    "relatedHref": "/destinations/atlas-mountains"
  },
  {
    "slug": "high-atlas-mountain-biking-technical-trails",
    "category": "TECHNICAL RIDING",
    "readTime": "7 min read",
    "title": "High Atlas Mountain Biking Routes: Technical Trails",
    "excerpt": "Understand the trail features, riding skills and preparation that help mountain bikers enjoy technical routes in the High Atlas.",
    "image": "/images/atlas-mountains-enduro-biking-tour.jpg",
    "imageAlt": "Technical mountain biking on Atlas Mountain trails",
    "body": [
      "Technical High Atlas routes may include loose stones, embedded rock, tight turns, steep gradients, narrow traverses and variable grip. Some sections are rideable only for confident riders, while others may be best walked. A route grade should describe these features honestly instead of relying on a single difficulty label.",
      "Practice controlled braking, looking ahead, choosing a line and staying balanced on uneven terrain before committing to a demanding multi-day route. Tyres, brake condition, suspension setup and gearing all influence control, and carrying basic repair supplies is especially important where services are limited.",
      "Ask your organiser which sections are optional, where regrouping takes place and what support is available if a rider needs to stop. Technical riding should feel challenging but managed, with decisions made for the whole group rather than pressure to continue."
    ],
    "relatedLabel": "View mountain bike tours",
    "relatedHref": "/cycling-trips/mtb"
  },
  {
    "slug": "berber-villages-high-atlas-cycling-culture",
    "category": "CULTURE & TRAVEL",
    "readTime": "6 min read",
    "title": "Berber Villages of the High Atlas: Cycling & Cultural Guide",
    "excerpt": "Learn how to ride thoughtfully through Amazigh communities, respect village life and make space for cultural encounters on a cycling holiday.",
    "image": "/images/berber-villages-cycling-expeditions.jpg",
    "imageAlt": "Cycling near traditional Berber villages in the High Atlas",
    "body": [
      "Cycling through the High Atlas can connect remote valleys and villages where daily life follows local routines, seasons and the landscape. The experience is richer when riders treat communities as places where people live and work, not simply as scenery along a route.",
      "Slow down near homes, schools, markets, people and animals. Ask before photographing individuals, respect private property and local customs, and follow a guide's advice on where to stop. A greeting and a patient approach are often more meaningful than trying to turn every encounter into a photo opportunity.",
      "When choosing a tour, ask how local guides and service providers are involved, how village visits are arranged and whether the schedule allows time to stop respectfully. Responsible cultural travel starts with listening and adapting to local guidance."
    ],
    "relatedLabel": "Explore Imlil and the Atlas",
    "relatedHref": "/destinations/imlil"
  },
  {
    "slug": "sahara-desert-ebike-adventure",
    "category": "E-MTB ADVENTURES",
    "readTime": "6 min read",
    "title": "Sahara Desert E-Bike Adventure",
    "excerpt": "See what to consider when planning an electric mountain-bike journey in southern Morocco, from terrain and battery strategy to water and support.",
    "image": "/images/sahara-desert-ebike-expeditions.jpg",
    "imageAlt": "Electric mountain biking on a southern Morocco expedition",
    "body": [
      "A Sahara-region E-MTB adventure can combine desert-edge tracks, stony plateaus, oasis areas and remote roads, but the route must be selected for the actual bike, surface and available support. Not every sandy or rocky track is appropriate for every bicycle, and a desert itinerary should be designed around realistic riding conditions.",
      "Battery use needs careful planning because distance, climbing, sand, wind, rider load and assistance mode all affect range. Confirm where charging is possible, what spare-battery or vehicle support exists, and how the itinerary works if a battery or bike develops a problem. Water, sun protection, navigation and temperature changes are equally important.",
      "Ask for the precise route outline, daily distance, surface mix, vehicle access and contingency plan before confirming a trip. A well-planned adventure keeps the remote setting exciting without treating essential logistics as an afterthought."
    ],
    "relatedLabel": "Explore Sahara cycling tours",
    "relatedHref": "/destinations/sahara-desert"
  },
  {
    "slug": "agafay-desert-day-trips-cycling-guide",
    "category": "DAY TRIP GUIDES",
    "readTime": "5 min read",
    "title": "Agafay Desert Day Trips: Cycling Guide",
    "excerpt": "Compare day-ride options around Agafay and prepare for rocky terrain, exposed weather, transfer timing and the right bike for the route.",
    "image": "/images/Agafay-desert-morocco.jpg",
    "imageAlt": "Cycling across the rocky Agafay Desert near Marrakech",
    "body": [
      "Agafay is known for its stony, open landscape rather than the vast dunes many travellers associate with the Sahara. Cycling routes can use rough tracks, hard-packed surfaces and rolling terrain, with the ride's difficulty depending on route choice, recent weather and the rider's experience.",
      "For a day trip, look beyond the riding hours. Confirm transfer time from Marrakech, bike setup, water provision, planned stops and whether the route suits MTB, E-MTB or gravel equipment. Exposed terrain can offer limited shade, so sun protection and hydration should be planned rather than left to chance.",
      "Choose a route that leaves enough time to enjoy the landscape and return comfortably. Tell your guide about your fitness and technical confidence, and ask how the ride can be shortened or adapted if the group needs a more relaxed pace."
    ],
    "relatedLabel": "Explore Agafay Desert tours",
    "relatedHref": "/destinations/agafay-desert"
  },
  {
    "slug": "cycling-morocco-september",
    "category": "SEASONAL CYCLING",
    "readTime": "5 min read",
    "title": "Cycling Morocco in September",
    "excerpt": "Plan September rides around regional temperatures, altitude, daylight and the type of cycling holiday you want to take.",
    "image": "/images/Explore-Atlas-Mountains-by-bike.jpg",
    "imageAlt": "Cycling through the Atlas Mountains in autumn",
    "body": [
      "September can be a useful month to consider for a Moroccan cycling holiday, but conditions vary widely between the mountains, inland plains, desert regions and Atlantic Coast. Higher routes may feel different from lowland or exposed desert rides, and the exact outlook depends on the dates and local weather.",
      "When planning, ask about typical daytime conditions for the particular region, early-start recommendations, water stops and whether the itinerary includes high passes or remote stages. A multi-day trip should have some flexibility for heat, wind or changes in trail conditions, particularly when daily distances are demanding.",
      "Pack layers for cool starts and higher elevations as well as sun protection for exposed sections. Check the forecast close to departure and confirm the actual route plan with the local team rather than assuming every region will have identical conditions."
    ],
    "relatedLabel": "Compare cycling destinations",
    "relatedHref": "/destinations"
  },
  {
    "slug": "cycling-morocco-october",
    "category": "SEASONAL CYCLING",
    "readTime": "5 min read",
    "title": "Cycling Morocco in October",
    "excerpt": "Use regional weather, altitude and route style to decide where October fits into your Morocco cycling plans.",
    "image": "/images/Explore-Atlas-Mountains-bike.jpg",
    "imageAlt": "Scenic cycling route through the Atlas Mountains",
    "body": [
      "October is often considered for riding in Morocco because it sits between the hottest part of summer and the cooler winter period, yet actual conditions depend on the region and elevation. Mountain mornings can be cool, while lower or more southerly routes can still be warm during the day.",
      "Choose the route before choosing the packing list. A high Atlas itinerary, an Agafay day ride and a longer desert expedition have different needs for clothing, water and support. Ask about daily climbing, exposed sections, likely start times and accommodation temperatures for your planned journey.",
      "Bring layers, sun protection and a light shell suited to the route, and recheck the forecast shortly before travelling. Seasonal averages provide context, not a guarantee for a specific departure."
    ],
    "relatedLabel": "Browse October-ready tours",
    "relatedHref": "/cycling-trips"
  },
  {
    "slug": "cycling-morocco-november",
    "category": "SEASONAL CYCLING",
    "readTime": "5 min read",
    "title": "Cycling Morocco in November",
    "excerpt": "Prepare for shorter days, cooler mornings and changing mountain conditions when considering a November cycling tour in Morocco.",
    "image": "/images/adventure-cycling-morocco.jpg",
    "imageAlt": "Cycling adventure in Morocco’s mountain landscape",
    "body": [
      "November can bring more variation in conditions across Morocco. Lower routes may remain suitable for cycling while higher mountain areas can be colder, more exposed or affected by weather that changes access and comfort. Route choice is therefore especially important for a late-autumn trip.",
      "Ask about daylight, start times, surface conditions, temperature ranges and what alternatives are available if a pass or trail is unsuitable. If your itinerary includes several regions, clarify transfers and accommodation so colder mornings or shorter days do not make the schedule feel rushed.",
      "Use layers you can add or remove, gloves appropriate to the likely temperature, lights where needed and waterproof protection if relevant to the forecast. Confirm current conditions before departure and follow local advice during the ride."
    ],
    "relatedLabel": "Explore Morocco cycling tours",
    "relatedHref": "/cycling-trips"
  },
  {
    "slug": "best-time-visit-morocco-cycling",
    "category": "TRIP PLANNING",
    "readTime": "7 min read",
    "title": "Best Time to Visit Morocco for Cycling",
    "excerpt": "Compare seasons and regions to choose travel dates that fit your preferred terrain, riding style and comfort level.",
    "image": "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    "imageAlt": "Multi-day cycling holiday in the Atlas Mountains",
    "body": [
      "There is no single best month for every cycling route in Morocco. Mountain rides are shaped by altitude and pass conditions; desert stages require careful planning for heat, water and exposure; coastal trips may be influenced by wind; and paved road routes have their own traffic and temperature considerations.",
      "Start with the experience you want—technical MTB, E-MTB climbing, gravel exploration or road endurance—then match the region and season to that goal. Ask about likely conditions for your exact travel dates, average daily effort, route access and whether the organiser can alter stages if the weather changes.",
      "Treat a seasonal guide as a starting point. Review current forecasts before travelling, pack for the full range of elevations on your itinerary and confirm inclusions and contingency arrangements with your tour provider."
    ],
    "relatedLabel": "Explore Morocco destinations",
    "relatedHref": "/destinations"
  },
  {
    "slug": "scenic-cycling-routes-morocco",
    "category": "ROUTE INSPIRATION",
    "readTime": "6 min read",
    "title": "Scenic Cycling Routes: The Best Views in Morocco",
    "excerpt": "Find out how to plan a scenic ride around mountain panoramas, valleys, desert-edge landscapes and the Atlantic coastline.",
    "image": "/images/atlas-cycling-adventure.jpg",
    "imageAlt": "Scenic cycling route across Morocco’s mountain valleys",
    "body": [
      "Some of Morocco's most memorable cycling days are defined as much by their setting as by the route profile: mountain views above valleys, terraced hillsides, open desert-edge plateaus and coastal scenery. The right route depends on whether you prefer quiet paved roads, gravel tracks or technical trails.",
      "Scenic does not always mean easy. A panoramic climb may involve sustained ascent, an exposed ridge can be affected by wind, and a rough track can take longer than the distance suggests. Ask about viewpoints, road surfaces, stopping places and how much time is built in to enjoy the surroundings.",
      "Choose a pace that gives the group time to stop safely and respectfully. A thoughtfully planned scenic ride balances photo opportunities with realistic mileage, hydration and the safety of the route."
    ],
    "relatedLabel": "Discover Morocco's destinations",
    "relatedHref": "/destinations"
  },
  {
    "slug": "spring-cycling-morocco-march-may",
    "category": "SEASONAL CYCLING",
    "readTime": "6 min read",
    "title": "Spring Cycling in Morocco: March–May",
    "excerpt": "Plan a spring ride with attention to shifting mountain temperatures, changing trail conditions and the distinct climates across Morocco.",
    "image": "/images/atlas-valley-cycling-morocco.jpg",
    "imageAlt": "Spring cycling through an Atlas Mountain valley",
    "body": [
      "Spring offers a range of possible cycling experiences across Morocco, but conditions change with region and elevation. Valleys can warm up while mountain mornings stay cool, and recent weather may affect loose surfaces or the condition of high routes. A flexible itinerary is valuable when travelling through multiple elevations.",
      "Discuss the exact dates and preferred style with your organiser. Technical MTB routes, gravel journeys and road tours require different equipment and daily pacing, while multi-day routes need realistic plans for water, food, transfers and accommodation. Ask how the schedule changes if a section is not appropriate on the day.",
      "Pack layers, sun protection and clothing for changing conditions, and check current forecasts rather than relying solely on the calendar. Spring is an opportunity to explore, not a guarantee of identical conditions from one region to another."
    ],
    "relatedLabel": "Browse spring cycling options",
    "relatedHref": "/cycling-trips"
  },
  {
    "slug": "planning-multi-day-cycling-tours",
    "category": "TRIP PLANNING",
    "readTime": "7 min read",
    "title": "Multi-Day Cycling Tours Planning",
    "excerpt": "Build a multi-day cycling itinerary around realistic stages, recovery, accommodation, luggage, support and the fitness of your group.",
    "image": "/images/group-adventure-cycling-morocco.jpg",
    "imageAlt": "Group preparing for a multi-day cycling trip in Morocco",
    "body": [
      "A strong multi-day plan balances riding with the practical details between stages. Daily distance, accumulated climbing, terrain, weather, transfer times and the group's experience all affect how demanding the trip will feel. Three moderate days in a row can be harder than one longer ride if recovery and logistics are not planned well.",
      "Before confirming, ask for a stage-by-stage outline that includes surface, ascent, planned stops, food and water access, accommodation, luggage handling and the support arrangements. Clarify how the group will be supported in case of punctures, mechanical problems, illness or a route change caused by conditions.",
      "Give the organiser accurate information about fitness, technical level and previous multi-day experience. A realistic itinerary should have room for rest and enjoyment—not just ambitious daily mileage—and should explain what is included and what riders need to arrange themselves."
    ],
    "relatedLabel": "Plan a cycling itinerary",
    "relatedHref": "/contact?request=multi-day-cycling-planning"
  },
  {
    "slug": "marrakech-to-atlas-mountains-by-bike",
    "category": "ROUTE INSPIRATION",
    "readTime": "6 min read",
    "title": "Marrakech to Atlas Mountains by Bike",
    "excerpt": "Understand the options for combining Marrakech with Atlas Mountain riding, including transfers, route styles and multi-day trip structure.",
    "image": "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    "imageAlt": "Cycling journey from Marrakech towards the Atlas Mountains",
    "body": [
      "Marrakech is a practical starting point for rides into nearby mountain areas, but a route from the city to the High Atlas may involve busy roads, transfer sections or a carefully chosen progression from lowland terrain to higher valleys. The best plan depends on whether you want a point-to-point journey or a base-and-ride holiday.",
      "Discuss where riding begins, whether any sections use a support vehicle, the amount of climbing, the surface mix and where each stage finishes. If the trip includes villages or high passes, ask about route access, accommodation, water stops and seasonal conditions.",
      "A well-designed itinerary can combine time in Marrakech with immersive mountain riding without forcing too much distance into one day. Share your group size, preferred cycling style and experience so the route can be matched to your goals."
    ],
    "relatedLabel": "Explore tours from Marrakech",
    "relatedHref": "/cycling-trips/from-marrakech"
  },
  {
    "slug": "atlas-mountains-e-bike-tours",
    "category": "E-MTB ADVENTURES",
    "readTime": "6 min read",
    "title": "Atlas Mountains E-Bike Tours",
    "excerpt": "Explore how pedal assistance can help riders tackle Atlas Mountain elevation while keeping terrain, battery range and technical ability in view.",
    "image": "/images/atlas-mountains-ebike-tour.jpg",
    "imageAlt": "E-bike tour in Morocco’s Atlas Mountains",
    "body": [
      "An E-MTB can make sustained climbs more manageable and help a mixed-ability group share a route, but it does not remove the demands of descending, cornering or controlling a bike on loose terrain. Tour choice should still reflect the technical skills and comfort of each rider.",
      "Battery range depends on elevation, terrain, assistance mode, temperature and rider load. Ask about charging points, spare batteries where available, vehicle support, charging overnight and the plan for mechanical issues. The itinerary should not assume that every remote section has convenient charging access.",
      "For the best fit, explain your usual riding experience, fitness and preferred daily effort. Confirm bike sizes, fit, pedals, helmet availability and support arrangements before booking."
    ],
    "relatedLabel": "Browse E-MTB tours",
    "relatedHref": "/cycling-trips/e-mtb"
  },
  {
    "slug": "best-cycling-routes-from-marrakech",
    "category": "ROUTE INSPIRATION",
    "readTime": "6 min read",
    "title": "Best Cycling Routes From Marrakech",
    "excerpt": "Compare countryside day trips, Agafay's rocky tracks and mountain rides when choosing a cycling route starting in Marrakech.",
    "image": "/images/atlas-marrakech-cycling-tour.jpg",
    "imageAlt": "Cycling route from Marrakech towards the mountains",
    "body": [
      "The best route from Marrakech depends on time available, riding style and the kind of landscape you want. A shorter countryside loop, a rocky Agafay ride and a High Atlas excursion can offer very different levels of climbing, technical terrain and transfer time. The name of a destination alone does not tell you how demanding a day will be.",
      "When comparing options, check distance, ascent, riding surface, traffic exposure, start time, water stops and how long the transfer takes. Road cyclists may prefer paved routes, while MTB and gravel riders may want tracks away from busy roads. E-MTB can broaden the choice but still requires suitable surfaces and battery planning.",
      "Share your ability, group size and available hours when enquiring. A route that fits the day and the group is usually more rewarding than trying to cover the greatest possible distance."
    ],
    "relatedLabel": "Explore cycling trips from Marrakech",
    "relatedHref": "/cycling-trips/from-marrakech"
  },
  {
    "slug": "gravel-cycling-in-morocco",
    "category": "GRAVEL CYCLING",
    "readTime": "6 min read",
    "title": "Gravel Cycling in Morocco",
    "excerpt": "Learn what makes a Morocco gravel holiday distinctive and how to prepare for mixed surfaces, remote stretches, daily distance and support.",
    "image": "/images/gravel-cycling-holiday-morocco.jpg",
    "imageAlt": "Gravel bike on a cycling holiday in Morocco",
    "body": [
      "Gravel riding in Morocco can connect quiet paved roads with hard-packed tracks, rough rural lanes and wide open landscapes. Conditions vary by region and may change over a single stage, so a route description should clarify the expected surface mix and not just the total kilometres.",
      "Choose tyres, gearing and repair equipment for the terrain and the bike you will use. Ask how luggage is transported, where water and food can be replenished, what the support vehicle carries and how remote sections are managed. These details are particularly important when a route travels far from settlements.",
      "A rewarding gravel tour balances exploration with a realistic schedule. Confirm the daily elevation, surface roughness, mechanical support and alternatives for adverse conditions, and make sure the stages match your fitness and experience."
    ],
    "relatedLabel": "Explore gravel cycling tours",
    "relatedHref": "/cycling-trips/gravel"
  },
  {
    "slug": "high-atlas-trails-techniques-training",
    "category": "TECHNICAL RIDING",
    "readTime": "8 min read",
    "title": "Mountain Biking the High Atlas: Trails, Techniques & Training",
    "excerpt": "Prepare for Atlas trail riding with a practical look at fitness, bike handling, descending skills and how to build confidence on technical terrain.",
    "image": "/images/singletrack-biking-morocco.jpg",
    "imageAlt": "Mountain bike riding on High Atlas singletrack",
    "body": [
      "A High Atlas ride may mix long climbs, rocky surfaces, tight turns and rough descents. Training should include aerobic fitness and time on similar terrain, not just indoor intensity or distance on smooth paths. Gradually build the ability to ride for several hours while maintaining concentration late in the day.",
      "On the bike, practise looking ahead, controlled braking, choosing a line, shifting weight and managing speed before attempting more technical sections. A correctly maintained bike and suitable tyre pressure support control, but sound judgement matters just as much as equipment. Walking a section is a sensible option when the consequences of a mistake are high.",
      "Tell your guide which skills you are comfortable with and which you are still developing. A well-matched route makes it possible to progress without turning every descent into a test, and it leaves space to enjoy the mountain environment."
    ],
    "relatedLabel": "Explore MTB tours",
    "relatedHref": "/cycling-trips/mtb"
  },
  {
    "slug": "womens-mountain-biking-morocco",
    "category": "CYCLING HOLIDAYS",
    "readTime": "6 min read",
    "title": "Women’s Mountain Biking in Morocco",
    "excerpt": "Plan a women-focused mountain biking holiday with attention to group needs, confidence, route choice, equipment fit and respectful local travel.",
    "image": "/images/women-cycling-tour-8-day.jpg",
    "imageAlt": "Women’s cycling expedition in Morocco",
    "body": [
      "A women-focused cycling trip can create a supportive space for riders to share a challenge, develop skills or explore Morocco together. The experience still needs to be designed around the actual riders: technical confidence, fitness, preferred daily effort, previous multi-day experience and goals for the trip.",
      "When organising a group, discuss bike sizing and fit, guide arrangements, accommodation, transfers, support on the trail and the balance between riding and cultural activities. A clear description of route difficulty helps everyone prepare and reduces pressure to ride beyond their comfort level.",
      "For travel through rural communities, follow local guidance and approach cultural encounters respectfully. Ask the organiser about the proposed itinerary and what measures are in place to support the group before, during and after each ride."
    ],
    "relatedLabel": "Ask about a women’s cycling trip",
    "relatedHref": "/contact?request=womens-cycling-tour"
  },
  {
    "slug": "morocco-road-cycling-holidays",
    "category": "ROAD CYCLING",
    "readTime": "7 min read",
    "title": "Morocco Road Cycling Holidays",
    "excerpt": "Discover what to consider when planning road cycling in Morocco, from climbing and road surfaces to traffic awareness and support.",
    "image": "/images/road-cycling-holiday-morocco.jpg",
    "imageAlt": "Road cycling holiday in Morocco",
    "body": [
      "Morocco offers road cyclists a mix of mountain climbs, open countryside, valleys and longer point-to-point routes. The character of a ride depends on road quality, traffic, elevation and weather. A long stage with sustained climbing requires a different plan from a flatter scenic loop, even if the distances appear similar.",
      "Ask for the stage profiles, expected road conditions, support arrangements, food and water stops, luggage transfers and the plan for punctures or mechanical issues. Discuss group pace and regrouping so stronger riders can enjoy the ride without leaving others unsupported.",
      "Preparation should match the itinerary: build endurance, practise riding at a steady pace and confirm what equipment and clothing are appropriate for the season. Always verify current route details and local conditions before travel."
    ],
    "relatedLabel": "Explore road cycling tours",
    "relatedHref": "/cycling-trips/road"
  },
  {
    "slug": "complete-e-bike-cycling-morocco",
    "category": "E-MTB ADVENTURES",
    "readTime": "8 min read",
    "title": "Complete E-Bike Cycling Morocco",
    "excerpt": "A broad guide to choosing an e-bike tour in Morocco, including terrain, battery planning, bike setup, support and daily effort.",
    "image": "/images/e-mtb-tour-from-marrakech.jpg",
    "imageAlt": "E-bike tour starting from Marrakech",
    "body": [
      "E-bike travel can open up longer climbs and give riders more options when choosing a route, but the correct bike and itinerary matter. An electric mountain bike is built for rough terrain, whereas other e-bike formats may be better suited to paved roads or smoother tracks. Ask what type of bike is being provided and what surfaces the route includes.",
      "Battery range varies according to elevation, surface, rider weight, temperature, assistance settings and battery condition. Multi-day plans should clarify where bikes are charged, whether a spare battery is available, what happens if charging is not possible and how the team supports a mechanical problem away from towns.",
      "Before confirming, check frame sizes, bike fit, pedals, helmet arrangements, luggage and transfer logistics. Tell the organiser about your fitness and experience so daily stages are designed to be enjoyable rather than relying on assistance as a substitute for sensible route planning."
    ],
    "relatedLabel": "Browse E-MTB tours",
    "relatedHref": "/cycling-trips/e-mtb"
  },
  {
    "slug": "complete-gravel-bike-morocco",
    "category": "GRAVEL CYCLING",
    "readTime": "8 min read",
    "title": "Complete Gravel Bike Morocco",
    "excerpt": "Use this practical guide to plan a gravel holiday around bike setup, surfaces, route distances, navigation, supplies and support.",
    "image": "/images/gravel-bike-tour-morocco.jpg",
    "imageAlt": "Gravel bike touring in Morocco",
    "body": [
      "A gravel holiday can combine quiet roads, compact dirt, loose stones and rural tracks. The right bike setup depends on the roughest surfaces planned, the load you carry and the length of remote sections. Tyre choice, puncture protection, gearing and brake condition should all be checked before departure.",
      "For multi-day routes, confirm navigation arrangements, daily elevation, resupply gaps and the support vehicle plan. A route that appears straightforward on a map can take longer when surfaces are rough or weather changes, so stage lengths should leave room for stops and repairs.",
      "Pack suitable tools and spares for your bike, then confirm what the organiser supplies. Good preparation makes it easier to enjoy the scenery and rural communities without letting avoidable mechanical or logistical issues dominate the trip."
    ],
    "relatedLabel": "View gravel cycling tours",
    "relatedHref": "/cycling-trips/gravel"
  },
  {
    "slug": "imlil-mount-toubkal-cycling",
    "category": "DESTINATION GUIDES",
    "readTime": "6 min read",
    "title": "Imlil and Mount Toubkal Cycling",
    "excerpt": "Explore cycling possibilities around Imlil and the Toubkal region while understanding mountain access, elevation and village etiquette.",
    "image": "/images/imlil-cycling-adventure-tour.jpeg",
    "imageAlt": "Cycling adventure near Imlil and Mount Toubkal",
    "body": [
      "Imlil is a mountain base for exploring nearby valleys and the wider Toubkal region. Cycling options depend on road access, trail suitability, altitude, technical confidence and current local conditions. Some routes are better suited to road or gravel bikes, while rougher tracks call for a capable MTB or E-MTB.",
      "Do not assume every walking trail is appropriate for bikes or that a route is open simply because it appears on a map. Ask a local guide about permitted tracks, expected surfaces, ascent, transfer needs and places where riding should give way to walking or local activity.",
      "The villages are lived-in communities, so ride considerately near homes, people and animals. Allow enough time for breaks and changes in elevation, and choose a route that respects both rider ability and local guidance."
    ],
    "relatedLabel": "Explore Imlil and Toubkal",
    "relatedHref": "/destinations/imlil"
  },
  {
    "slug": "best-mountain-bike-trails-morocco",
    "category": "MOUNTAIN BIKE GUIDES",
    "readTime": "7 min read",
    "title": "Best Mountain Bike Trails in Morocco",
    "excerpt": "Compare the broad types of mountain-bike terrain found in Morocco and learn what to ask before choosing a trail or guided tour.",
    "image": "/images/mtb-tours-morocco.jpg",
    "imageAlt": "Mountain biking on trails in Morocco",
    "body": [
      "Morocco's mountain-bike experiences vary by region, from Atlas mountain tracks and rocky descents to dry foothill trails and desert-edge routes. Conditions, gradients and technical features are highly local, so a general ranking of trails is less useful than matching the terrain to the rider and current route access.",
      "When researching a trail, look for more than dramatic photographs. Confirm the route length, elevation gain and loss, surface, exposure, hike-a-bike sections, water access and the experience required. Ask whether the route is suitable for your bike and whether local support can adapt the plan if conditions change.",
      "A strong MTB itinerary mixes challenge with realistic recovery and safe decision-making. Respect shared trails, avoid riding through private land without permission and follow local guidance on access and conditions."
    ],
    "relatedLabel": "Browse MTB tours",
    "relatedHref": "/cycling-trips/mtb"
  },
  {
    "slug": "jbel-saghro-cycling",
    "category": "DESTINATION GUIDES",
    "readTime": "6 min read",
    "title": "Jbel Saghro Cycling",
    "excerpt": "Prepare for cycling in the rugged Jbel Saghro region with guidance on remote terrain, route logistics, water and the support a trip needs.",
    "image": "/images/saghro-morocco-bike-tour.jpg",
    "imageAlt": "Cycling among the rugged landscapes of Jbel Saghro",
    "body": [
      "Jbel Saghro's rugged terrain and open landscapes can suit adventurous cyclists looking for a different setting from the High Atlas. Routes may include rocky tracks, remote stretches and large gaps between services, so a detailed plan is essential. A map distance alone cannot describe the time or effort required.",
      "Ask about the actual surface, daily elevation, water availability, accommodation, vehicle access and communications. The support plan should explain how mechanical issues, route changes or a rider who cannot continue are handled in places where help may not be immediately nearby.",
      "Prepare for sun, wind and temperature changes, and carry the water and personal items recommended for the exact itinerary. Travel with current local advice and avoid relying on an unverified track as your only navigation or safety plan."
    ],
    "relatedLabel": "Explore southern Morocco cycling",
    "relatedHref": "/destinations/sahara-desert"
  },
  {
    "slug": "high-atlas-mountains-singletrack",
    "category": "TECHNICAL RIDING",
    "readTime": "6 min read",
    "title": "High Atlas Mountains Singletrack",
    "excerpt": "Learn how to assess singletrack difficulty in the High Atlas and prepare for narrow trails, loose surfaces and changing mountain conditions.",
    "image": "/images/mtb-tour-atlas-mountains.jpg",
    "imageAlt": "Mountain bike on Atlas Mountain singletrack",
    "body": [
      "High Atlas singletrack may run across hillsides, through valleys or along old paths, with conditions that vary from flowing dirt to rocky, exposed or uneven sections. Narrow trails can leave little room to pass, and not every segment will be suitable for every rider or bike.",
      "Ask your guide how technical the route is, whether there are exposed traverses, how much walking may be involved and where the group can regroup safely. Skills such as looking ahead, controlled braking and managing speed on loose ground are more valuable than pushing to ride every metre.",
      "Use shared trails respectfully and slow down when meeting walkers, animals or local residents. A good singletrack day is built around safe choices and the quality of the ride, not a requirement to ride every section."
    ],
    "relatedLabel": "Explore Atlas MTB tours",
    "relatedHref": "/cycling-trips/mtb"
  },
  {
    "slug": "cycling-essaouira-atlantic-coast",
    "category": "COASTAL CYCLING",
    "readTime": "6 min read",
    "title": "Cycling Essaouira & the Atlantic Coast",
    "excerpt": "Plan coastal riding around Essaouira, rural tracks, paved routes, wind exposure and the different needs of road, gravel and MTB riders.",
    "image": "/images/essaouira-cycling-holiday.jpg",
    "imageAlt": "Cycling in the Essaouira and Atlantic Coast region",
    "body": [
      "The Essaouira area and Atlantic Coast offer a different rhythm from mountain and desert routes. Depending on the itinerary, cycling may link paved roads, rural tracks, open countryside and coastal stretches. Wind can affect both pace and comfort, so direction and shelter matter as much as distance.",
      "Road riders should discuss traffic exposure and road surface, while gravel and MTB riders should confirm that the tracks suit their tyres and equipment. Ask about water and food stops, planned breaks, transfers and whether the route includes sand or rough ground that changes the difficulty.",
      "Coastal and village areas are shared spaces. Ride predictably, respect local access and leave room to stop safely for views or breaks. Confirm the route and forecast shortly before departure."
    ],
    "relatedLabel": "Explore Atlantic Coast cycling",
    "relatedHref": "/destinations/atlantic-coast"
  },
  {
    "slug": "family-cycling-holidays-morocco",
    "category": "CYCLING HOLIDAYS",
    "readTime": "6 min read",
    "title": "Family Cycling Holidays in Morocco",
    "excerpt": "Plan a family cycling trip around age, confidence, route safety, rest breaks, support and activities that suit everyone travelling.",
    "image": "/images/cycling-holiday-trip-from-marrakech.jpg",
    "imageAlt": "Group cycling holiday in Morocco",
    "body": [
      "A successful family cycling holiday is paced around the youngest or least experienced rider, not the strongest person in the group. Shorter stages, clear stopping points, quiet routes and flexible plans can help make cycling enjoyable while leaving time for food, rest and non-riding activities.",
      "Ask about minimum ages, bike sizes, helmets, traffic exposure, surface difficulty, support vehicles and what happens if someone wants to finish a ride early. For families with different abilities, a route with optional extensions or split activities may work better than one fixed-distance day.",
      "Explain the group's experience and needs when enquiring, including any equipment requirements and preferences for accommodation. The itinerary should prioritise clear communication, appropriate supervision and a realistic amount of riding each day."
    ],
    "relatedLabel": "Ask about a family cycling trip",
    "relatedHref": "/contact?request=family-cycling-holiday"
  },
  {
    "slug": "ebike-touring-morocco-ride-further",
    "category": "E-MTB ADVENTURES",
    "readTime": "7 min read",
    "title": "E-Bike Touring in Morocco: Ride Further, Climb Higher",
    "excerpt": "Understand how pedal assistance can change a tour while keeping battery limits, route design, terrain and group pace central to planning.",
    "image": "/images/eBike-tour-atlas-mountains-morocco.jpg",
    "imageAlt": "E-bike touring in the Atlas Mountains",
    "body": [
      "E-bike touring can help riders manage sustained climbs or cover a varied itinerary at a more comfortable effort, but the extra assistance is only useful when the bike and route are a good match. Rocky trail riding calls for an appropriate E-MTB, while smoother road or gravel journeys may suit different equipment.",
      "Range depends on battery capacity, elevation, terrain, temperature, rider load and assistance mode. For longer or remote routes, confirm charging access, spare battery arrangements, support vehicle availability and the response plan for technical problems. Riders should also understand how to manage power so assistance is available throughout the stage.",
      "Discuss the route profile and riding style before choosing a tour. An e-bike can make climbs more accessible, but riders still need control, awareness and the skills required for the selected terrain."
    ],
    "relatedLabel": "Explore E-MTB adventures",
    "relatedHref": "/cycling-trips/e-mtb"
  },
  {
    "slug": "enduro-riding-morocco",
    "category": "TECHNICAL RIDING",
    "readTime": "6 min read",
    "title": "Enduro Riding in Morocco",
    "excerpt": "Prepare for enduro-style riding with attention to trail difficulty, bike setup, shuttle logistics, mechanical support and rider judgement.",
    "image": "/images/enduro-cycling-expeditions-morocco.jpg",
    "imageAlt": "Enduro mountain biking on rugged Moroccan trails",
    "body": [
      "Enduro riding places particular demands on bike control, descending confidence and equipment reliability. In Morocco, trail surfaces may include loose rock, uneven natural features and sections where line choice matters. The suitability of a trail depends on current conditions and the rider's experience, not just the bike category.",
      "Check suspension and brake condition, tyre choice, wheels and essential spares before riding. Ask whether transfers or shuttles are part of the plan, what mechanical support is available, how routes are graded and how the team responds if a trail becomes unsafe or a rider needs to stop.",
      "Ride within your ability, use protective equipment appropriate to the terrain and follow local guidance. A well-run enduro trip balances the excitement of technical descents with careful route choice and support."
    ],
    "relatedLabel": "Explore mountain bike tours",
    "relatedHref": "/cycling-trips/mtb"
  },
  {
    "slug": "luxury-cycling-holidays-morocco",
    "category": "CYCLING HOLIDAYS",
    "readTime": "6 min read",
    "title": "Luxury Cycling Holidays in Morocco",
    "excerpt": "Learn what to clarify when planning a premium cycling holiday, from route pacing and accommodation to private support and thoughtful local experiences.",
    "image": "/images/luxury-cycling-holiday-trip-morocco.jpg",
    "imageAlt": "Luxury cycling holiday in Morocco",
    "body": [
      "A luxury cycling holiday is defined by how well the experience is planned around the traveller, not simply by the accommodation category. It may include private guiding, carefully paced routes, luggage transfers, comfortable stays and time to enjoy food, landscapes and local culture between rides.",
      "Ask which services are included and which are optional: bike rental, equipment, vehicle support, private transfers, meals, accommodation standards, guiding ratios and itinerary changes. Clarify what happens if weather, route conditions or group preferences call for a change to the original plan.",
      "Share your preferred riding style, comfort expectations, group size and level of independence. The best plan combines service and flexibility with route choices that match your ability and the landscapes you want to experience."
    ],
    "relatedLabel": "Explore premium cycling options",
    "relatedHref": "/cycling-trips/luxury"
  }
,
  {
    "slug": "emtb-tours-morocco",
    "category": "E-MTB GUIDES",
    "readTime": "7 min read",
    "title": "E-MTB Tours in Morocco: A Complete Guide",
    "excerpt": "Discover how electric mountain bikes open up Morocco's Atlas trails, remote valleys and rewarding multi-day rides.",
    "image": "/images/e-mtb-tour-morocco.jpg",
    "imageAlt": "Electric mountain biking on a trail in Morocco",
    "body": [
      "E-MTB tours in Morocco combine mountain scenery, traditional villages and varied off-road terrain. Electric assistance can make long climbs more manageable, helping riders save energy for descents, exploration and full days in the mountains.",
      "Before choosing a tour, ask about the bike model, battery capacity, charging opportunities, spare batteries and the availability of mechanical support. The practical range depends on elevation gain, rider weight, terrain, assistance mode and battery condition, so a realistic route plan matters more than a headline range.",
      "Choose a route that matches your riding experience and comfort on loose surfaces. A guide can help adapt the pace and route to the group, while appropriate equipment, water, layers and basic repair supplies help you prepare for changing mountain conditions."
    ],
    "relatedLabel": "Explore E-MTB tours",
    "relatedHref": "/cycling-trips/e-mtb"
  },
  {
    "slug": "mountain-biking-morocco",
    "category": "MOUNTAIN BIKE GUIDES",
    "readTime": "8 min read",
    "title": "Mountain Biking in Morocco: The Essential Guide",
    "excerpt": "Plan a mountain-bike adventure through the Atlas Mountains with practical advice on trails, seasons, preparation and local guiding.",
    "image": "/images/atlas-mountains-cycling-tour-morocco.jpg",
    "imageAlt": "Mountain biking in Morocco's Atlas Mountains",
    "body": [
      "Mountain biking in Morocco offers a mix of rocky mountain tracks, flowing singletrack, remote valleys and routes connecting traditional Amazigh villages. The High Atlas is a major draw for riders looking for big landscapes and varied terrain, while other regions offer different riding conditions and scenery.",
      "Select your route according to technical ability, fitness and the amount of climbing you enjoy. Trail surfaces can be rocky, loose and uneven, and conditions may change with weather or local access. A local guide can help match the route to the group and explain trail conditions before the ride.",
      "Plan around the season, bring suitable protection and carry enough water, snacks and repair essentials. For multi-day trips, confirm accommodation, luggage transfers, vehicle support and what happens if the route needs to change."
    ],
    "relatedLabel": "Explore mountain bike tours",
    "relatedHref": "/cycling-trips/mtb"
  },
  {
    "slug": "gravel-cycling-morocco",
    "category": "GRAVEL CYCLING",
    "readTime": "7 min read",
    "title": "Gravel Cycling in Morocco: Routes and Planning",
    "excerpt": "Learn what to consider when planning a gravel ride across Morocco's mountain roads, rural tracks and wide-open landscapes.",
    "image": "/images/gravel-cycling-morocco.jpg",
    "imageAlt": "Gravel cycling across a rural Moroccan landscape",
    "body": [
      "Gravel cycling in Morocco can link quiet paved roads, dirt tracks, agricultural paths and remote mountain scenery. The character of a route varies by region, so it is worth checking surface conditions and elevation rather than judging a ride by distance alone.",
      "Tyre width and tread should suit the expected mix of gravel, hard-packed earth and rougher sections. Carry repair supplies, navigation, food and sufficient water, especially where services are widely spaced. Confirm that planned tracks are accessible and appropriate for cycling.",
      "For a supported trip, ask about daily distances, climbing, luggage transport, accommodation and backup support. A flexible itinerary can make it easier to respond to weather, surface conditions and the group's preferred pace."
    ],
    "relatedLabel": "Explore gravel cycling",
    "relatedHref": "/cycling-trips/gravel"
  },
  {
    "slug": "road-bike-morocco",
    "category": "ROAD CYCLING",
    "readTime": "7 min read",
    "title": "Road Cycling in Morocco: What to Know Before You Ride",
    "excerpt": "Prepare for Moroccan road rides with guidance on route choice, mountain climbs, road conditions, equipment and support.",
    "image": "/images/group-cycling-tour-morocco.jpg",
    "imageAlt": "Cyclists riding a road through the Moroccan mountains",
    "body": [
      "Road cycling in Morocco ranges from rolling countryside to demanding mountain climbs and long scenic roads. Routes around the Atlas Mountains can involve substantial elevation gain, so plan daily distances around climbing, fitness and the time available for stops.",
      "Check road surfaces, traffic exposure, weather and access to food and water before setting out. Use visible cycling clothing, lights when appropriate, a helmet and a reliable navigation plan. Conditions can differ considerably between mountain passes, rural roads and busier approaches to towns.",
      "For a guided holiday, clarify the support vehicle arrangements, group pace, mechanical assistance, luggage transfers and options for shorter or longer riding days. These details help you choose a trip that fits your experience and goals."
    ],
    "relatedLabel": "Explore road cycling holidays",
    "relatedHref": "/cycling-trips/road"
  },
  {
    "slug": "luxury-biking-morocco",
    "category": "LUXURY CYCLING",
    "readTime": "6 min read",
    "title": "Luxury Biking in Morocco: How to Plan a Premium Trip",
    "excerpt": "Understand the details that shape a premium cycling holiday, from private guiding and comfortable stays to flexible daily routes.",
    "image": "/images/luxury-cycling-holiday-trip-morocco.jpg",
    "imageAlt": "Premium cycling holiday in Morocco",
    "body": [
      "A premium biking holiday is about how thoughtfully the journey is organised. Private guiding, carefully chosen accommodation, luggage transfers and flexible pacing can make a cycling trip more comfortable without losing its connection to Morocco's landscapes and local culture.",
      "Ask providers to specify what is included in the price, such as bike rental, meals, transfers, vehicle support, guiding and accommodation. Confirm the standard of each service rather than relying on broad descriptions such as luxury or exclusive.",
      "Share your riding ability, preferred daily distance, comfort expectations and interests before confirming an itinerary. A well-planned trip balances riding ambitions with time to rest, explore villages and enjoy the places along the route."
    ],
    "relatedLabel": "Explore luxury cycling holidays",
    "relatedHref": "/cycling-trips/luxury"
  },
  {
    "slug": "family-holiday-morocco",
    "category": "FAMILY CYCLING",
    "readTime": "6 min read",
    "title": "Planning a Family Cycling Holiday in Morocco",
    "excerpt": "Find out how to plan a family-friendly cycling holiday with suitable routes, realistic distances, rest stops and practical support.",
    "image": "/images/group-cycling-tour-morocco.jpg",
    "imageAlt": "Family enjoying an outdoor cycling holiday in Morocco",
    "body": [
      "A family cycling holiday in Morocco works best when the route and daily schedule reflect the ages, confidence and interests of everyone taking part. Shorter rides, quieter tracks and time for breaks can help make the experience enjoyable for both children and adults.",
      "Before booking, ask about route surfaces, traffic exposure, climbing, bike sizes, helmets, child seats or other age-appropriate equipment, and vehicle support. Confirm that the operator can accommodate each rider's needs and explain how the itinerary can be adjusted if someone becomes tired.",
      "Build in time for meals, rest and cultural activities away from the bike. Bring sun protection, suitable layers and plenty of water, and check the availability of family-appropriate accommodation along the planned route."
    ],
    "relatedLabel": "Explore family cycling holidays",
    "relatedHref": "/cycling-trips/family"
  },
  {
    "slug": "mtb-tour-marrakech",
    "category": "MARRAKECH CYCLING",
    "readTime": "7 min read",
    "title": "MTB Tours from Marrakech: Atlas Trails and Day Trips",
    "excerpt": "Use Marrakech as a starting point for mountain-bike day rides and longer adventures into the nearby Atlas Mountains.",
    "image": "/images/day-ebike-tour-from-marrakech.jpg",
    "imageAlt": "Cycling adventure near Marrakech in Morocco",
    "body": [
      "Marrakech is a practical base for exploring a variety of cycling landscapes, including foothills, rural tracks and routes leading toward the Atlas Mountains. The right tour depends on how much time you have, your technical ability and whether you prefer a day trip or a multi-day journey.",
      "When comparing MTB tours from Marrakech, ask how long the transfer takes, how much time is spent riding, what the elevation profile looks like and which surfaces to expect. Confirm bike provision, guiding, meals, transport and the support available if a mechanical issue occurs.",
      "Bring suitable riding clothing, a helmet, water and sun protection, and choose a route that reflects your experience. If you want to ride more technical trails or travel deeper into the mountains, discuss your goals with the guide before the trip so the route can be planned accordingly."
    ],
    "relatedLabel": "Explore cycling trips from Marrakech",
    "relatedHref": "/cycling-trips"
  }
];

const journalCategories = [
  { number: "01", title: "Trail guides", text: "Terrain, technical riding and route planning for mountain-bike adventures.", href: "#category-trail-guides" },
  { number: "02", title: "Trip planning", text: "Seasonal considerations, packing lists and questions to ask before booking.", href: "#guide-best-time-to-cycle-morocco" },
  { number: "03", title: "Cycling styles", text: "MTB, E-MTB, gravel and road cycling—find the format that fits you.", href: "#journal-style-links" },
  { number: "04", title: "Morocco destinations", text: "Ideas for mountain valleys, desert tracks, rural roads and the coast.", href: "#category-destinations" },
];

const faqs = [
  {
    question: "Can I use the journal to choose a cycling tour?",
    answer:
      "Yes. The guides explain different riding styles, destinations and planning considerations. Once you have an idea of your preferred route or terrain, compare the relevant tour pages and contact us to discuss dates, availability, inclusions and the details of your group.",
  },
  {
    question: "Are the route descriptions live trail reports?",
    answer:
      "No. Journal articles provide general inspiration and preparation advice; they are not live reports of trail conditions, road closures, weather or access. Confirm current conditions and the exact route plan before travelling.",
  },
  {
    question: "Do I need my own bike for a tour in Morocco?",
    answer:
      "That depends on the tour and the equipment available for your dates. Ask about bike models, frame sizes, setup, pedals, helmets, spare parts and what you should bring. If you plan to travel with your own bike, also confirm transfer and luggage arrangements.",
  },
  {
    question: "Can I get advice for a private cycling trip?",
    answer:
      "Yes. Share the intended dates, group size, riding experience, preferred discipline, approximate daily distance and the regions you would like to explore. The team can then discuss suitable trip formats and which practical details need to be confirmed.",
  },
];

export default function JournalPage() {
  return (
    <>
      <main className="cycling-listing journal-page">
        <section className="cl-hero journal-hero">
          <img
            className="cl-hero__image"
            src="/images/mountain-bike-morocco-hero.jpg"
            alt="Mountain biking through Morocco’s dramatic mountain landscape"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">THE MOUNTAIN BIKE MOROCCO JOURNAL</p>
            <h1>Stories, guides and ideas for cycling Morocco.</h1>
            <p className="cl-hero__intro">
              Explore practical riding advice, destination inspiration and planning guides for MTB, E-MTB, gravel and road cycling. Whether you are preparing for your first Atlas Mountains ride or considering a longer desert expedition, start here and build a better-informed plan for your time in Morocco.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="#latest-guides">Explore the Journal</Link>
              <Link className="cl-button cl-button--outline" href="/cycling-trips">Browse Cycling Tours</Link>
            </div>
          </div>
        </section>

        <section className="journal-intro cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">RIDE WITH MORE CONFIDENCE</p>
              <h2>Good rides start with useful information.</h2>
            </div>
            <p>
              Morocco offers a wide range of cycling experiences, and each one asks different questions. Trail choice, altitude, surface, weather, equipment and daily distance all shape the trip. Our journal brings these topics together so you can compare options, prepare sensibly and know what to clarify before you book.
            </p>
          </div>
          <div className="journal-category-grid">
            {journalCategories.map((category) => (
              <a className="journal-category-card" href={category.href.replace("#category-trail-guides", "#latest-guides")} key={category.number}>
                <span>{category.number}</span>
                <h3>{category.title}</h3>
                <p>{category.text}</p>
                <b aria-hidden="true">↘</b>
              </a>
            ))}
          </div>
        </section>

        <section className="journal-dark-band">
          <div className="cl-wrap journal-dark-band__inner">
            <div>
              <p className="cl-eyebrow">FOUR WAYS TO EXPLORE</p>
              <h2>One country. Different ways to ride.</h2>
            </div>
            <p>
              Mountain biking, E-MTB, gravel and road cycling each reveal a different side of Morocco. The best choice depends on terrain, experience, daily effort and the kind of journey you want. Use the journal to research the options, then compare tour formats and ask about the practical details before confirming a trip.
            </p>
            <div className="journal-style-links" id="journal-style-links">
              <Link href="/cycling-trips/mtb">Mountain Bike <span>↗</span></Link>
              <Link href="/cycling-trips/e-mtb">E-MTB <span>↗</span></Link>
              <Link href="/cycling-trips/gravel">Gravel Cycling <span>↗</span></Link>
              <Link href="/cycling-trips/road">Road Cycling <span>↗</span></Link>
            </div>
          </div>
        </section>

        <section className="journal-long-reads cl-wrap" id="latest-guides">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">IN-DEPTH ARTICLES</p>
              <h2>All cycling articles and in-depth guides.</h2>
            </div>
            <p>
              Browse concise summaries of our cycling guides and choose the topics you want to explore in depth. Each article has its own page, with practical advice for planning a cycling holiday in Morocco.
            </p>
          </div>
          <div className="journal-long-reads__list">
            {articles.map((article, index) => (
              <article className="journal-long-article" id={`guide-${article.slug}`} key={article.slug}>
                <div className="journal-long-article__number">{String(index + 1).padStart(2, "0")}</div>
                <Link
                  className="journal-long-article__image"
                  href={`/journal/${article.slug}`}
                  aria-label={`Read ${article.title}`}
                >
                  <img src={article.image} alt={article.imageAlt} loading="lazy" />
                </Link>
                <div className="journal-long-article__content">
                  <div className="journal-article-card__meta"><span>{article.category}</span><span>{article.readTime}</span></div>
                  <h2><Link href={`/journal/${article.slug}`}>{article.title}</Link></h2>
                  <p className="journal-long-article__lead">{article.excerpt}</p>
                  <div className="journal-long-article__actions">
                    <Link className="journal-article-read-link" href={`/journal/${article.slug}`}>
                      Read article <span aria-hidden="true">↗</span>
                    </Link>
                    <Link className="cl-text-link" href={article.relatedHref}>
                      {article.relatedLabel} <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="journal-destination-band" id="category-destinations">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">FIND YOUR LANDSCAPE</p>
                <h2>Continue exploring Morocco.</h2>
              </div>
              <p>Start with a region that fits your interests, then compare the routes and cycling styles available for your dates.</p>
            </div>
            <div className="journal-destination-grid">
              <Link href="/destinations/atlas-mountains" className="journal-destination-card"><img src="/images/atlas-mountains-cycling-expedition.jpg" alt="Atlas Mountains" loading="lazy" /><span>HIGH ATLAS</span><h3>Mountain trails and valleys</h3><b>Explore destination ↗</b></Link>
              <Link href="/destinations/agafay-desert" className="journal-destination-card"><img src="/images/Agafay-desert-morocco.jpg" alt="Agafay rocky desert near Marrakech" loading="lazy" /><span>AGAFAY</span><h3>Rocky desert landscapes</h3><b>Explore destination ↗</b></Link>
              <Link href="/destinations/sahara-desert" className="journal-destination-card"><img src="/images/sahara-desert-cycling-expeditions.jpg" alt="Cycling holiday through Morocco’s desert regions" loading="lazy" /><span>SAHARA & SOUTH</span><h3>Longer desert journeys</h3><b>Explore destination ↗</b></Link>
              <Link href="/destinations/atlantic-coast" className="journal-destination-card"><img src="/images/atlantic-coast-cycling-tour-morocco.jpg" alt="Cycling landscape along Morocco’s Atlantic Coast" loading="lazy" /><span>ATLANTIC COAST</span><h3>Coastal roads and rural tracks</h3><b>Explore destination ↗</b></Link>
            </div>
          </div>
        </section>

        <section className="cl-faq journal-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">JOURNAL FAQS</p>
              <h2>Questions before you plan your ride?</h2>
              <p>Use the articles to begin your research, and contact the team when you need to discuss a specific route or trip.</p>
              <Link className="cl-text-link" href="/contact">Ask about a cycling trip <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="cl-faq-list">
              {faqs.map((faq, index) => (
                <details className="cl-faq-item" key={faq.question} open={index === 0}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cl-final-cta journal-final-cta">
          <img src="/images/group-cycling-atlas-mountains.jpg" alt="Cyclists enjoying a ride in the Atlas Mountains" loading="lazy" />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">READY TO PUT YOUR RESEARCH INTO ACTION?</p>
            <h2>Have a route or cycling idea in mind?</h2>
            <p>
              Tell us when you would like to travel, what kind of riding you enjoy, your experience and which parts of Morocco interest you. You can start with an idea rather than a finished itinerary; confirm route details, inclusions and availability before booking.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href={{ pathname: "/contact", query: { request: "journal-trip-planning" } }}>Plan Your Trip</Link>
              <Link className="cl-button cl-button--outline" href="/cycling-trips">View All Cycling Tours</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer cycling-listing__footer">
        <div className="page-width footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <img className="brand__logo" src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" />
              <span>MOUNTAIN BIKE <em>MOROCCO</em></span>
            </Link>
            <p>Guided mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, trails and local culture at your own pace.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/cycling-trips">All Cycling Tours</Link>
            <Link href="/cycling-trips/mtb">Mountain Bike Tours</Link>
            <Link href="/cycling-trips/e-mtb">E-MTB Tours</Link>
            <Link href="/cycling-trips/gravel">Gravel Cycling</Link>
            <Link href="/cycling-trips/road">Road Cycling</Link>
          </div>
          <div>
            <h3>Destinations</h3>
            <Link href="/destinations/atlas-mountains">Atlas Mountains</Link>
            <Link href="/destinations/imlil">Imlil Valley</Link>
            <Link href="/destinations/toubkal">Mount Toubkal</Link>
            <Link href="/destinations/marrakech">Marrakech</Link>
            <Link href="/destinations">All Destinations</Link>
          </div>
          <div>
            <h3>Let&apos;s Plan</h3>
            <Link href="/about">About Us</Link>
            <Link href="/events">Events</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Plan Your Trip</Link>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>© 2026 Mountain Bike Morocco</span>
          <span>Morocco cycling adventures, thoughtfully planned.</span>
        </div>
      </footer>

      <style>{`
        .journal-page { background: #fbfaf7; color: #201f1c; }
        .journal-page .cl-hero { min-height: 700px; }
        .journal-page .cl-hero__content { max-width: 820px; }
        .journal-page .cl-hero h1 { max-width: 780px; }
        .journal-intro { padding-top: clamp(66px, 7vw, 98px); padding-bottom: clamp(64px, 7vw, 94px); }
        .journal-category-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; margin-top: 34px; }
        .journal-category-card { position: relative; display: flex; min-height: 225px; flex-direction: column; padding: 24px; text-decoration: none; color: inherit; border: 1px solid #dedbd4; background: #fff; transition: transform .2s ease, border-color .2s ease; }
        .journal-category-card:hover { transform: translateY(-3px); border-color: #c65c35; }
        .journal-category-card > span { color: #c65c35; font-size: 11px; font-weight: 800; letter-spacing: .16em; }
        .journal-category-card h3 { margin: 22px 0 10px; font-size: 22px; line-height: 1.15; }
        .journal-category-card p { margin: 0; color: #68645f; font-size: 14px; line-height: 1.7; }
        .journal-category-card b { margin-top: auto; padding-top: 16px; align-self: flex-end; color: #c65c35; font-size: 21px; }
        .journal-featured { padding: clamp(60px, 7vw, 92px) 0; background: #eeece6; }
        .journal-featured__grid { display: grid; grid-template-columns: 1.05fr .95fr; align-items: center; gap: clamp(30px, 5vw, 70px); }
        .journal-featured__image { position: relative; min-height: 420px; overflow: hidden; }
        .journal-featured__image img { width: 100%; height: 100%; min-height: 420px; position: absolute; inset: 0; object-fit: cover; }
        .journal-featured__image > span { position: absolute; top: 20px; left: 20px; padding: 9px 12px; background: #c65c35; color: #fff; font-size: 10px; font-weight: 800; letter-spacing: .14em; }
        .journal-featured__content h2 { margin: 14px 0 18px; max-width: 560px; font-size: clamp(32px, 4vw, 48px); line-height: 1.05; letter-spacing: -.035em; }
        .journal-featured__content > p:not(.cl-eyebrow) { color: #5f5b55; font-size: 16px; line-height: 1.85; }
        .journal-featured__meta { display: flex; flex-wrap: wrap; gap: 18px; margin: 23px 0; color: #777168; font-size: 12px; text-transform: uppercase; letter-spacing: .1em; }
        .journal-latest { padding-top: clamp(74px, 8vw, 110px); padding-bottom: clamp(76px, 8vw, 110px); }
        .journal-article-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; margin-top: 34px; }
        .journal-article-card { min-width: 0; border: 1px solid #e2dfd9; background: #fff; }
        .journal-article-card__image { position: relative; display: block; aspect-ratio: 1.45 / 1; overflow: hidden; background: #e5e0d6; }
        .journal-article-card__image img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s ease; }
        .journal-article-card__image:hover img { transform: scale(1.045); }
        .journal-article-card__image > span { position: absolute; left: 14px; bottom: 14px; padding: 7px 10px; background: rgba(255,255,255,.95); color: #24221f; font-size: 11px; font-weight: 800; }
        .journal-article-card__body { display: flex; flex-direction: column; padding: 22px; min-height: 300px; }
        .journal-article-card__meta { display: flex; align-items: center; justify-content: space-between; gap: 10px; color: #827b72; font-size: 10px; font-weight: 800; letter-spacing: .09em; text-transform: uppercase; }
        .journal-article-card__meta span:first-child { color: #bd5a36; }
        .journal-article-card h3 { margin: 16px 0 12px; font-size: 23px; line-height: 1.18; letter-spacing: -.02em; }
        .journal-article-card h3 a { color: inherit; text-decoration: none; }
        .journal-article-card h3 a:hover { color: #bd5a36; }
        .journal-article-card__body > p { margin: 0 0 20px; color: #65615a; font-size: 14px; line-height: 1.8; }
        .journal-article-card__body .cl-text-link { margin-top: auto; }
        .journal-dark-band { padding: clamp(58px, 6vw, 82px) 0; background: #22231f; color: #fff; }
        .journal-dark-band__inner { display: grid; grid-template-columns: .85fr 1fr; gap: 25px 64px; align-items: start; }
        .journal-dark-band h2 { margin: 14px 0 0; font-size: clamp(32px, 4vw, 48px); line-height: 1.07; letter-spacing: -.035em; }
        .journal-dark-band__inner > p { margin: 0; color: #d1cec7; line-height: 1.85; }
        .journal-style-links { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; margin-top: 10px; }
        .journal-style-links a { display: flex; justify-content: space-between; gap: 10px; padding: 17px 18px; border: 1px solid #55564f; color: #fff; text-decoration: none; font-size: 14px; font-weight: 700; }
        .journal-style-links a:hover { border-color: #d36b43; color: #f0a17f; }
        .journal-long-reads { padding-top: clamp(70px, 8vw, 105px); padding-bottom: clamp(75px, 8vw, 108px); }
        /* Two journal articles per row on desktop, with a single column on small screens. */
        .journal-long-reads__list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: stretch; gap: 28px; margin-top: 34px; }
        .journal-long-article { display: flex; min-width: 0; flex-direction: column; overflow: hidden; padding: 0; border: 1px solid #dedbd4; background: #fff; scroll-margin-top: 100px; }
        .journal-long-article__number { padding: 17px 22px 0; color: #bf5d38; font-size: 12px; font-weight: 800; letter-spacing: .12em; }
        .journal-long-article__image { flex: 0 0 auto; aspect-ratio: 16 / 9; margin: 14px 22px 0; overflow: hidden; background: #e4e0d7; }
        .journal-long-article__image img { display: block; width: 100%; height: 100%; min-height: 0; object-fit: cover; transition: transform .35s ease; }
        .journal-long-article:hover .journal-long-article__image img { transform: scale(1.035); }
        .journal-long-article__content { display: flex; flex: 1; flex-direction: column; padding: 20px 22px 25px; }
        .journal-long-article__content h2 { margin: 13px 0 12px; font-size: clamp(22px, 2.2vw, 29px); line-height: 1.15; letter-spacing: -.025em; }
        .journal-long-article__content h2 a { color: inherit; text-decoration: none; transition: color .2s ease; }
        .journal-long-article__content h2 a:hover { color: #bd5a36; }
        .journal-long-article__image { display: block; color: inherit; text-decoration: none; }
        .journal-long-article__content p { margin: 0 0 13px; color: #5f5b55; font-size: 14px; line-height: 1.8; }
        .journal-long-article__content .journal-long-article__lead { display: -webkit-box; min-height: 5.1em; overflow: hidden; color: #292722; font-size: 15px; line-height: 1.7; -webkit-box-orient: vertical; -webkit-line-clamp: 3; }
        .journal-long-article__actions { display: flex; flex-wrap: wrap; align-items: center; gap: 14px 18px; margin-top: auto; padding-top: 12px; }
        .journal-article-read-link { display: inline-flex; align-items: center; gap: 10px; min-height: 42px; padding: 11px 14px; background: #24251f; color: #fff; text-decoration: none; font-size: 12px; font-weight: 800; letter-spacing: .02em; transition: background .2s ease; }
        .journal-article-read-link:hover { background: #bd5a36; }
        .journal-long-article__actions .cl-text-link { display: inline-flex; align-self: flex-start; margin-top: 0; padding-top: 0; }
        .journal-destination-band { padding: clamp(70px, 8vw, 100px) 0; background: #eeece6; }
        .journal-destination-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; margin-top: 34px; }
        .journal-destination-card { position: relative; display: flex; min-height: 325px; flex-direction: column; justify-content: flex-end; overflow: hidden; padding: 22px; color: #fff; text-decoration: none; background: #25251f; }
        .journal-destination-card::after { position: absolute; inset: 0; content: ""; background: linear-gradient(180deg, rgba(0,0,0,.02) 14%, rgba(0,0,0,.75) 100%); }
        .journal-destination-card img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform .45s ease; }
        .journal-destination-card:hover img { transform: scale(1.05); }
        .journal-destination-card > *:not(img) { position: relative; z-index: 1; }
        .journal-destination-card span { font-size: 10px; font-weight: 800; letter-spacing: .15em; }
        .journal-destination-card h3 { margin: 11px 0 14px; font-size: 23px; line-height: 1.15; }
        .journal-destination-card b { font-size: 12px; }
        .journal-faq { padding-top: 20px; }
        .journal-final-cta { margin-top: 0; }
        @media (max-width: 1000px) {
          .journal-category-grid, .journal-destination-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .journal-article-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .journal-long-reads__list { gap: 20px; }
          .journal-long-article__image { margin-right: 17px; margin-left: 17px; }
          .journal-long-article__content { padding-right: 17px; padding-left: 17px; }
          .journal-style-links { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 680px) {
          .journal-page .cl-hero { min-height: 620px; }
          .journal-category-grid, .journal-article-grid, .journal-destination-grid { grid-template-columns: 1fr; }
          .journal-category-card { min-height: 195px; }
          .journal-featured__grid, .journal-dark-band__inner { grid-template-columns: 1fr; }
          .journal-featured__image, .journal-featured__image img { min-height: 280px; }
          .journal-article-card__body { min-height: 0; }
          .journal-style-links { grid-template-columns: 1fr; }
          .journal-long-reads__list { grid-template-columns: 1fr; gap: 22px; }
          .journal-long-article__number { padding-right: 18px; padding-left: 18px; }
          .journal-long-article__image { margin: 12px 18px 0; }
          .journal-long-article__content { padding: 18px 18px 22px; }
          .journal-long-article__content h2 { font-size: 25px; }
        }
      `}</style>
    </>
  );
}
