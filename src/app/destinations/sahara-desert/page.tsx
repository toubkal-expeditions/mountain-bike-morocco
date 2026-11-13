import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sahara Desert Cycling Tours | MTB, E-MTB, Gravel & Road",
  description:
    "Explore cycling tours in southern Morocco and the Sahara gateway region. Discover MTB, E-MTB, gravel and road cycling routes around Merzouga, Erg Chebbi, the Draa Valley and routes between the Atlas foothills and desert landscapes.",
};

const tours = [
  {
    number: "01",
    discipline: "MTB",
    label: "DESERT TRACKS & REMOTE LANDSCAPES",
    title: "Sahara Desert Mountain Bike Adventure",
    duration: "3 days",
    destination: "SAHARA DESERT",
    description: "Explore selected tracks on a guided mountain bike journey through southern Morocco’s desert-edge landscapes. Riding conditions can shift between hard-packed tracks, loose stones and sandy sections, so the route should match your bike, handling skills and experience. Confirm daily distances, elevation, water supply, support, accommodation and access for your dates before the trip is finalised.",
    image: "/images/south-morocco-cycling-tour.jpg",
  },
  {
    number: "02",
    discipline: "MTB · EXPEDITION",
    label: "SOUTHERN MOROCCO & DESERT TRAILS",
    title: "Southern Morocco MTB Expedition",
    duration: "5 days",
    destination: "SOUTHERN MOROCCO",
    description: "Ride a multi-day mountain bike itinerary through selected trails and tracks in southern Morocco, linking changing terrain and wide desert horizons. A realistic plan considers the surface, heat, remoteness, support vehicle access and distances between overnight stops. Share your riding level and preferred pace so technical sections, daily mileage, water stops and logistics can be reviewed together.",
    image: "/images/south-morocco-cycling-expedition.jpg",
  },
  {
    number: "03",
    discipline: "MTB · SAGHRO",
    label: "ROCKY MOUNTAINS & DESERT EDGE",
    title: "Saghro to Sahara Mountain Bike Journey",
    duration: "6 days",
    destination: "SAGHRO TO SAHARA",
    description: "Connect selected mountain and desert-edge riding areas on a longer MTB journey towards the Sahara region. The terrain and remoteness make thoughtful preparation essential: route options, technical difficulty, weather, water resupply, transfers and overnight arrangements all need to be checked. The final stages should be adapted to the group rather than relying on a fixed mileage target.",
    image: "/images/mtb-morocco-Saghro.JPG",
  },
  {
    number: "04",
    discipline: "E-MTB",
    label: "ELECTRIC-ASSISTED DESERT EXPLORATION",
    title: "Sahara Edge E-MTB Discovery Tour",
    duration: "2 days",
    destination: "SAHARA DESERT EDGE",
    description: "Discover selected tracks on an electric mountain bike, with a route planned around surface conditions, battery range and your experience. Pedal assistance can make climbs more manageable, but loose ground, heat and long distances still require good preparation. Before departure, confirm charging opportunities, spare battery arrangements where applicable, support, water stops and the technical level of each stage.",
    image: "/images/sahara-desert-ebike-expeditions.jpg",
  },
  {
    number: "05",
    discipline: "E-MTB · DESERT",
    label: "WIDE HORIZONS & SOUTHERN TRACKS",
    title: "Southern Morocco E-MTB Desert Escape",
    duration: "4 days",
    destination: "SOUTHERN MOROCCO",
    description: "Plan several days of electric mountain biking across suitable routes in southern Morocco, with stages selected to fit the terrain and your preferred pace. Battery range, charging access, surface quality, temperature and distances between villages all affect the itinerary. Confirm the bike setup, route access, overnight stops, water and support arrangements before the journey is booked.",
    image: "/images/southern-ebike-cycling-expeditions.jpg",
  },
  {
    number: "06",
    discipline: "E-MTB · EXPEDITION",
    label: "MOUNTAIN FOOTHILLS TO DESERT LANDSCAPES",
    title: "Atlas Foothills to Sahara E-Bike Expedition",
    duration: "6 days",
    destination: "ATLAS TO SAHARA",
    description: "Combine selected foothill routes and southern desert-edge landscapes on a multi-day e-bike itinerary. The route needs to account for differences in elevation, trail surfaces, battery range, charging opportunities and the practicalities of riding in remote areas. Daily distances, transfers, accommodation and support should be discussed around your equipment, fitness and the conditions expected for your travel dates.",
    image: "/images/saghro-morocco-e-bike-tour.jpg",
  },
  {
    number: "07",
    discipline: "GRAVEL",
    label: "LONG GRAVEL ROADS & OPEN COUNTRY",
    title: "Sahara Region Gravel Cycling Tour",
    duration: "3 days",
    destination: "SAHARA REGION",
    description: "Ride selected gravel roads and tracks in southern Morocco, where long horizons and changing terrain create a rewarding journey for riders who enjoy self-paced exploration. Route selection must take account of loose surfaces, tyre clearance, gearing, navigation and the distance between resupply points. Confirm the itinerary, support plan, water arrangements and expected daily mileage before setting off.",
    image: "/images/gravel-desert-cycling-morocco.JPG",
  },
  {
    number: "08",
    discipline: "GRAVEL · EXPEDITION",
    label: "REMOTE PISTES & CHANGING TERRAIN",
    title: "Southern Desert Gravel Expedition",
    duration: "5 days",
    destination: "SOUTHERN MOROCCO",
    description: "Spend several days following suitable gravel roads through selected southern Moroccan landscapes. This kind of trip is as much about planning as distance: road quality, sandy or rocky sections, navigation, temperature and resupply options all shape a sensible stage. Share your bike setup, experience and preferred daily distance so the route and support requirements can be assessed properly.",
    image: "/images/gravel-desert-cycling-expedition.jpg",
  },
  {
    number: "09",
    discipline: "GRAVEL · SAHARA EDGE",
    label: "VILLAGES, DRY VALLEYS & DESERT VIEWS",
    title: "Oases and Desert Roads Gravel Ride",
    duration: "4 days",
    destination: "SOUTHERN OASES",
    description: "Explore selected gravel routes linking southern Moroccan villages, dry valleys and desert-edge scenery. The exact itinerary should reflect the surfaces available and the group’s comfort with remote riding. Plan realistic distances, navigation, food and water stops, accommodation, transfers and support, and verify the road conditions and route access for the chosen season.",
    image: "/images/gravel-morocco-cycling-tour.JPG",
  },
  {
    number: "10",
    discipline: "ROAD",
    label: "PAVED ROADS THROUGH SOUTHERN MOROCCO",
    title: "Southern Morocco Road Cycling Tour",
    duration: "3 days",
    destination: "SOUTHERN MOROCCO",
    description: "Discover selected paved routes through southern Morocco on a road cycling break shaped around your fitness and preferred distance. The landscapes and climbing can vary from one area to another, so the final route should consider road surfaces, traffic, elevation, weather and access to food and water. Confirm stage lengths, support and overnight stops before travel.",
    image: "/images/road-cycling-holiday-morocco.jpg",
  },
  {
    number: "11",
    discipline: "ROAD · ENDURANCE",
    label: "LONGER STAGES & OPEN HORIZONS",
    title: "Sahara Gateway Road Cycling Challenge",
    duration: "5 days",
    destination: "SAHARA GATEWAY",
    description: "Build an endurance-focused road cycling trip around suitable paved roads in the wider south of Morocco. Daily distances and elevation should be matched to the group, while traffic exposure, road condition, temperature, recovery time and reliable water stops remain central to the plan. Share your cycling background and target mileage so the stages and support can be discussed realistically.",
    image: "/images/adventure-road-cycling-morocco.jpg",
  },
  {
    number: "12",
    discipline: "ROAD · MULTI-DAY",
    label: "MOUNTAIN FOOTHILLS & SOUTHERN ROUTES",
    title: "Atlas to Sahara Road Cycling Journey",
    duration: "7 days",
    destination: "ATLAS TO SAHARA",
    description: "Consider a multi-day road cycling journey from selected Atlas foothill roads towards southern Morocco’s desert-edge landscapes. The route needs to balance climbing, distances, road conditions, traffic, weather and the location of overnight stops. An appropriate itinerary depends on your current fitness and preferred daily mileage, with transfers and support confirmed before the trip is finalised.",
    image: "/images/atlas-to-desert-biking-tour.jpg",
  },
  {
    number: "13",
    discipline: "WOMEN'S CYCLING · MULTI-DAY",
    label: "A SHARED JOURNEY THROUGH SOUTHERN MOROCCO",
    title: "Women Cycling Tour",
    duration: "8 days",
    destination: "SOUTHERN MOROCCO",
    description: "An eight-day cycling journey designed around the interests, experience and pace of women travelling together. The itinerary can combine suitable southern Moroccan roads and desert-edge routes, with daily distances, accommodation, support and rest stops planned for the group. Share your preferred cycling style, experience and travel dates so the route and practical arrangements can be discussed before booking.",
    image: "/images/group-cycling-tour-morocco.jpg",
  },
  {
    number: "14",
    discipline: "GROUP CYCLING · EXPEDITION",
    label: "A SCHOOL GROUP JOURNEY THROUGH THE SAHARA REGION",
    title: "School Cycling Sahara Expedition",
    duration: "9 days",
    destination: "SAHARA REGION",
    description: "A nine-day school-group cycling expedition concept for exploring southern Morocco by bike. The route, daily mileage and riding terrain should be matched to participants' ages, experience and abilities, with appropriate adult supervision, safeguarding arrangements, qualified local support, water and medical contingencies agreed in advance. The final itinerary should only be confirmed after the group requirements, permissions, transport and accommodation have been reviewed.",
    image: "/images/south-morocco-cycling-expedition.jpg",
  },
  {
    number: "15",
    discipline: "DESERT CYCLING · EXPEDITION",
    label: "EIGHT DAYS ACROSS SOUTHERN MOROCCO",
    title: "Morocco Desert Cycling Expedition",
    duration: "8 days",
    destination: "SOUTHERN MOROCCO",
    description: "An eight-day expedition idea through selected desert-edge landscapes in southern Morocco, linking suitable tracks, rural roads and overnight stops according to the group and conditions. The exact route should reflect bike type, surface, weather, water access and support-vehicle logistics; soft dune sand is not suitable for most conventional cycling routes. Discuss your riding background, dates and preferred level of challenge to shape a realistic itinerary.",
    image: "/images/sahara-morocco-cycling-holiday.jpg",
  },
  {
    number: "16",
    discipline: "GRAVEL · BIKE CARAVAN",
    label: "TEN DAYS OF GRAVEL ROADS AND OPEN LANDSCAPES",
    title: "Morocco Gravel Bike Caravan",
    duration: "10 days",
    destination: "MOROCCO",
    description: "A ten-day gravel cycling journey built around selected roads and firm tracks across Morocco's changing landscapes. A longer caravan-style trip needs careful stage planning, suitable tyres and gearing, reliable navigation, food and water resupply, luggage arrangements and support between remote stops. The route should be selected for actual surface conditions and the group's pace, with transfers and overnight accommodation confirmed for the chosen dates.",
    image: "/images/gravel-desert-cycling-expedition.jpg",
  },
  {
    number: "17",
    discipline: "E-MTB · MULTI-DAY CARAVAN",
    label: "FROM MARRAKECH TOWARDS THE SAHARA",
    title: "Marrakech to Sahara E-MTB Caravan",
    duration: "9 days",
    destination: "MARRAKECH TO SAHARA",
    description: "A nine-day electric mountain bike journey concept travelling from Marrakech towards southern Morocco and the Sahara gateway region. The itinerary should balance suitable riding stages with transfers, changing elevation, surface conditions, battery range, charging opportunities and recovery time. Before booking, confirm the bike and battery setup, route access, support vehicle, water supplies, accommodation and realistic daily distances for everyone in the group.",
    image: "/images/e-mtb-tour-from-marrakech.jpg",
  },
];

const regions = [
  {
    title: "Merzouga and Erg Chebbi",
    text: "The Merzouga area is a well-known gateway to the Erg Chebbi dunes and the wider Sahara region. A cycling plan should distinguish between paved roads, firm desert tracks and soft sand, as not every surface is suitable for every bike. Confirm access, route conditions, local guidance and water arrangements before riding.",
    image: "/images/sahara-morocco-cycling-holiday.jpg",
    href: "/destinations/sahara-desert",
  },
  {
    title: "Draa Valley",
    text: "The Draa Valley offers a different southern Moroccan setting, with palm groves, villages and routes that can connect rural landscapes. Route choice depends on the road or track surface, distance between stops and the time available. Plan water, shade breaks, navigation and overnight stays around the season and your group’s pace.",
    image: "/images/south-morocco-cycling-tour.jpg",
    href: "/destinations/sahara-desert",
  },
  {
    title: "Saghro Mountains",
    text: "The Saghro region brings rocky mountain terrain and a transition between the Atlas and the desert regions. Selected MTB, E-MTB and gravel rides may suit experienced cyclists, but elevation, remote sections and changing surfaces need careful planning. Match the route to your bike, ability and support options.",
    image: "/images/mtb-morocco-Saghro.JPG",
    href: "/destinations/anti-atlas",
  },
  {
    title: "Atlas to Desert Routes",
    text: "A longer journey can link selected Atlas foothill routes with southern landscapes, creating a varied multi-day cycling itinerary. It requires realistic daily distances, clear transfer plans and careful consideration of elevation, surface conditions, water access and overnight locations. Choose the cycling style to suit the actual route rather than the destination name alone.",
    image: "/images/atlas-to-desert-biking-tour.jpg",
    href: "/destinations/atlas-mountains",
  },
];

const faqs = [
  {
    question: "What kinds of cycling trips can I plan in the Sahara region?",
    answer: "You can enquire about MTB, E-MTB, gravel and road cycling routes in southern Morocco and around selected Sahara gateway areas. Suitability depends on the surface, bike setup, experience, season and available support. The exact itinerary, route access and inclusions should be confirmed for your dates.",
  },
  {
    question: "Can I cycle directly on Sahara sand dunes?",
    answer: "Soft dune sand is generally unsuitable for conventional MTB, E-MTB, gravel and road bikes. Cycling itineraries usually need to focus on suitable roads and firm tracks around desert gateway areas rather than assuming dunes are rideable. Confirm the actual route and surface with a local guide before making plans.",
  },
  {
    question: "Is a gravel bike suitable for a Sahara cycling trip?",
    answer: "A gravel bike can suit some firm tracks and paved or hard-packed roads, but not every desert route is appropriate. Loose sand, rocks, tyre clearance, gearing and carrying capacity all matter. The route should be selected for the bike and conditions, with water, navigation and support planned in advance.",
  },
  {
    question: "How should I prepare for desert cycling?",
    answer: "Preparation should cover heat and weather, water and food, sun protection, navigation, bike maintenance and a realistic daily distance. Remote routes may have long gaps between services, so confirm resupply points and support before departure. Your route and start times should be adapted to the season and current conditions.",
  },
  {
    question: "When is the best time for cycling in southern Morocco?",
    answer: "Conditions vary by location and season, and desert-edge areas can become very hot. Choose travel dates and daily start times with temperature, daylight and route exposure in mind. Check the forecast close to departure and confirm a suitable plan with appropriate breaks, water and contingency arrangements.",
  },
  {
    question: "Can I combine the Sahara region with the Atlas Mountains?",
    answer: "A multi-day itinerary may combine selected Atlas foothill roads or tracks with southern Moroccan routes. The plan needs to account for transfer times, elevation, surface types, daily mileage, overnight stops and support. Share your dates and preferred cycling style so a practical route can be discussed.",
  },
];

export default function SaharaDesertDestinationPage() {
  return (
    <>
      <main className="cycling-listing sahara-desert-destination-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/sahara-morocco-cycling-holiday.jpg"
            alt="Cycling across the southern desert landscapes of Sahara, Morocco"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">SOUTHERN MOROCCO · MERZOUGA · SAHARA</p>
            <h1>Sahara Desert Cycling Tours in Morocco</h1>
            <p className="cl-hero__intro">
              Ride through Morocco’s rugged Sahara landscape on a cycling trip planned around your bike and experience. Explore mountain bike tracks, electric-assisted rides, gravel routes and paved-road options near Merzouga and Erg Chebbi, with attention to terrain, exposure, water and the time you have available.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { destination: "Sahara Desert", request: "planning" } }}
              >
                Plan Your Sahara Trip
              </Link>
              <Link className="cl-button cl-button--outline" href="#sahara-tours">
                Explore Cycling Tours
              </Link>
            </div>
            <div className="cl-hero__meta">
              <span>MTB · E-MTB · GRAVEL · ROAD</span>
              <span>DAY RIDES & MULTI-DAY TRIPS</span>
              <span>PRIVATE OPTIONS</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">SOUTHERN MOROCCO DESERT ROUTES</p>
            <h2>Desert roads, remote tracks and four ways to explore southern Morocco.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              Morocco’s Sahara gateway region lies far beyond Marrakech and offers a landscape very different from the High Atlas: broad dry valleys, palm groves, plateaus and the great dunes near Merzouga. A cycling trip here needs careful planning because routes, access, water sources and support can be far apart. The best cycling route depends on the surface available, your bike setup, the time of year and how comfortable you are riding in exposed conditions.
            </p>
            <p>
              Each discipline needs a different approach. MTB routes require confidence on uneven, rocky ground; E-MTB plans need to account for battery range and charging; gravel routes must suit tyre width and surface conditions; and road cycling should use suitable paved roads while considering traffic and gradients. Share your riding experience, equipment and preferred distance so the route can be assessed realistically.
            </p>
            <p>
              Whether you want a shorter ride or a longer journey linking Merzouga, Erg Chebbi, the Draa Valley or Atlas foothill routes, planning should allow for heat, water, transfers, resupply points and regular breaks. Exact routes, access, availability and inclusions should be confirmed for your travel dates.
            </p>
            <Link className="cl-text-link" href="/destinations/sahara-desert">
              Explore cycling trips in the Sahara region <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="sahara-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR CYCLING STYLE</p>
                <h2>MTB, E-MTB, gravel and road cycling in the Sahara region</h2>
              </div>
              <p>
                Explore a mix of day rides and multi-day cycling ideas across southern Morocco and the Sahara gateway areas. Each route needs to match your bike, riding level, season and available time. Durations are planning starting points; the final itinerary, surface conditions and details should be confirmed before booking.
              </p>
            </div>
            <div className="cl-tour-grid">
              {tours.map((tour) => (
                <article className="home-tour-card" key={tour.number}>
                  <Link
                    className="home-tour-card__image"
                    href={{ pathname: "/contact", query: { tour: tour.title, destination: "Sahara Desert", request: "details" } }}
                    aria-label={`More details about ${tour.title}`}
                  >
                    <img src={tour.image} alt={tour.title} loading="lazy" />
                    <span className="home-tour-card__category">{tour.label}</span>
                    <span className="home-tour-card__level">{tour.destination}</span>
                  </Link>
                  <div className="home-tour-card__body">
                    <p className="home-tour-card__eyebrow">
                      {tour.discipline.includes("ROAD")
                        ? "ROAD CYCLING TOUR"
                        : tour.discipline.includes("GRAVEL")
                          ? "GRAVEL CYCLING TOUR"
                          : tour.discipline.includes("E-MTB")
                            ? "E-MTB TOUR"
                            : tour.discipline.includes("WOMEN'S")
                              ? "WOMEN'S CYCLING TOUR"
                              : tour.discipline.includes("GROUP")
                                ? "GROUP CYCLING EXPEDITION"
                                : tour.discipline.includes("DESERT CYCLING")
                                  ? "DESERT CYCLING EXPEDITION"
                                  : "MOUNTAIN BIKE TOUR"}
                    </p>
                    <h3 className="home-tour-card__title">
                      <Link href={{ pathname: "/contact", query: { tour: tour.title, destination: "Sahara Desert", request: "details" } }}>
                        {tour.title}
                      </Link>
                    </h3>
                    <p className="home-tour-card__description">{tour.description}</p>
                    <div className="home-tour-card__meta">
                      <span className="home-tour-card__meta-item">
                        <span className="home-tour-card__meta-icon" aria-hidden="true">◷</span>
                        {tour.duration}
                      </span>
                    </div>
                    <div className="home-tour-card__actions">
                      <Link
                        className="home-tour-card__button"
                        href={{ pathname: "/contact", query: { tour: tour.title, destination: "Sahara Desert", request: "details" } }}
                      >
                        Explore Tour
                      </Link>
                      <Link
                        className="home-tour-card__link"
                        href={{ pathname: "/contact", query: { tour: tour.title, destination: "Sahara Desert", request: "booking" } }}
                      >
                        Enquire Now
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cl-dark-band">
          <div className="cl-wrap cl-dark-band__inner">
            <div>
              <p className="cl-eyebrow">SOUTHERN ROUTES. OPEN LANDSCAPES. YOUR PACE.</p>
              <h2>Choose a cycling route that fits the terrain and your experience.</h2>
            </div>
            <div>
              <p>
                Some riders want a short scenic outing, while others prefer several days exploring desert tracks and nearby countryside. Think about the terrain you enjoy, your comfort riding in exposed conditions, the daily distance you prefer and time needed for transfers and stops. The route, equipment, water plan and support can then be discussed around your group’s needs and the conditions for your dates.
              </p>
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { destination: "Sahara Desert", request: "planning" } }}
              >
                Discuss Your Sahara Ride
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">WHERE TO RIDE</p>
              <h2>Explore cycling areas across southern Morocco</h2>
            </div>
            <p>
              Southern Morocco offers route ideas through palm-filled valleys, desert-edge tracks and selected mountain foothills. Match each cycling style to the actual surface, your experience and the time available. Treat each area as a route idea, then match the cycling style to the actual surface, your experience and the time available.
            </p>
          </div>
          <div className="cl-region-grid">
            {regions.map((region, index) => (
              <article className="home-tour-card" key={region.title}>
                <Link
                  className="home-tour-card__image"
                  href={region.href}
                  aria-label={region.title}
                >
                  <img src={region.image} alt={region.title} loading="lazy" />
                  <span className="home-tour-card__category">CYCLING DESTINATION</span>
                  <span className="home-tour-card__level">0{index + 1}</span>
                </Link>
                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">WHERE TO RIDE</p>
                  <h3 className="home-tour-card__title">
                    <Link href={region.href}>{region.title}</Link>
                  </h3>
                  <p className="home-tour-card__description">{region.text}</p>
                  <div className="home-tour-card__actions">
                    <Link className="home-tour-card__button" href={region.href}>
                      Explore Destination
                    </Link>
                    <Link className="home-tour-card__link" href={region.href}>
                      Discover More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cl-editorial">
          <div className="cl-editorial__image">
            <img
              src="/images/south-morocco-cycling-expedition.jpg"
              alt="Cycling through the southern desert landscape of Sahara, Morocco"
              loading="lazy"
            />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">A DIFFERENT SIDE OF MOROCCO</p>
            <h2>Ride southern roads and tracks and discover the wider region.</h2>
            <p>
              A cycling trip in southern Morocco offers a different perspective on the country’s remote desert-edge landscapes. The open, changing desert-edge terrain brings changing viewpoints and a sense of space, with routes that can vary from rough tracks to nearby paved roads. A good ride leaves time for breaks and scenery rather than focusing only on distance.
            </p>
            <p>
              The practical details matter as much as the route idea. Track conditions, access, start time, temperature, water supply, transfers and each rider’s ability should inform the plan. For E-MTB trips, check battery range and charging; for gravel, confirm tyre suitability; for MTB, assess technical sections; and for road cycling, confirm paved-route conditions and traffic exposure.
            </p>
            <Link className="cl-button cl-button--dark" href="/about">Learn About Our Approach</Link>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">PLAN YOUR RIDE WITH CARE</p>
                <h2>Thoughtful route planning for Sahara’s exposed, changing desert-edge terrain.</h2>
              </div>
              <p>
                The most suitable ride reflects the riders taking part and the conditions on the ground. Discussing terrain, fitness, equipment, heat and timing helps create a more realistic and enjoyable plan.
              </p>
            </div>
            <div className="cl-why-grid">
              <article><span>01</span><h3>Choose the right bike and route</h3><p>Match MTB, E-MTB, gravel or road cycling to the actual terrain, your tyres and your experience.</p></article>
              <article><span>02</span><h3>Plan around heat and hydration</h3><p>Discuss start times, water supplies, exposure, transfer time and daily distance before setting out.</p></article>
              <article><span>03</span><h3>Flexible private trips</h3><p>Share your group size, dates and riding experience so the route and pace can be matched to your priorities.</p></article>
              <article><span>04</span><h3>Enjoy the wider landscape</h3><p>Leave time for views, breaks and the wider landscapes around Merzouga and Erg Chebbi.</p></article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">PLAN YOUR SAHARA CYCLING TRIP</p>
              <h2>Three steps to plan your ride with confidence.</h2>
            </div>
            <p>
              You do not need to have every detail decided before enquiring. Start with your dates, the cycling style you prefer and your group's experience, then review the practical details for a suitable route.
            </p>
          </div>
          <div className="cl-steps">
            <article><span>STEP 01</span><h3>Choose your cycling style</h3><p>Tell us whether you prefer MTB tracks, electric-assisted riding, gravel routes or paved road cycling.</p></article>
            <article><span>STEP 02</span><h3>Discuss route and timing</h3><p>Review surface conditions, daily distance, heat, water access, transfers and seasonal conditions.</p></article>
            <article><span>STEP 03</span><h3>Confirm the details</h3><p>Confirm bike suitability, route access, support, water arrangements and the itinerary before finalising the trip.</p></article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
              <h2>Sahara Desert Cycling: FAQs</h2>
              <p>Find answers about cycling styles, desert-edge terrain, route preparation and timing in Sahara. For advice about a particular trip, contact us with your dates and preferences.</p>
              <Link className="cl-text-link" href="/contact">Ask us about your trip <span aria-hidden="true">↗</span></Link>
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

        <section className="cl-final-cta">
          <img
            src="/images/sahara-morocco-cycling-holiday.jpg"
            alt="Wide-open southern Moroccan desert-edge landscapes"
            loading="lazy"
          />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR SAHARA CYCLING ADVENTURE</p>
            <h2>Ready to explore Sahara and its southern desert landscapes by bike?</h2>
            <p>
              Tell us when you would like to travel, which cycling style suits you and how much time you have. We can discuss a Sahara route that reflects your plans, riding experience and the conditions expected for your dates.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { destination: "Sahara Desert", request: "planning" } }}
              >
                Plan Your Sahara Cycling Trip
              </Link>
              <Link className="cl-button cl-button--outline" href="/cycling-trips">
                View All Cycling Tours
              </Link>
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
            <Link href="/destinations/anti-atlas">Anti-Atlas</Link>
            <Link href="/destinations/sahara-desert">Sahara Desert</Link>
          </div>
          <div>
            <h3>Let's Plan</h3>
            <Link href="/about">About Us</Link>
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
    </>
  );
}