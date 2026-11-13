import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agafay Desert Cycling Tours | MTB, E-MTB, Gravel & Road",
  description:
    "Discover cycling tours in Morocco’s Agafay Desert. Explore MTB, E-MTB, gravel and road cycling on selected rocky tracks and paved routes near Marrakech and Lake Takerkoust.",
};

const tours = [
  {
    number: "01",
    discipline: "MTB",
    label: "ROCKY TRACKS & OPEN LANDSCAPES",
    destination: "AGAFAY DESERT",
    title: "Agafay Desert Mountain Bike Day Tour",
    duration: "1 day",
    description: "Explore selected rocky tracks around Agafay on a guided mountain bike ride planned for your handling skills and fitness. The landscape is open and exposed, with loose stones and uneven surfaces that can make even a short ride demanding. Confirm the route, technical level, water plan, start time and current access before departure.",
    image: "/images/Agafay-desert-morocco.jpg",
  },
  {
    number: "02",
    discipline: "MTB · TRAILS",
    label: "PLATEAU RIDING & DESERT VIEWS",
    destination: "AGAFAY ROCKY PLATEAU",
    title: "Agafay Rocky Plateau MTB Adventure",
    duration: "2 days",
    description: "Spend two days riding selected tracks across the Agafay area, with stages designed around your group’s experience and the surfaces available. Expect a mix of rocky terrain, open views and stretches where route finding and pacing matter. The final plan should account for heat, elevation, transfer time, accommodation and reliable water access.",
    image: "/images/events-race-cycling-desert-agafay.JPG",
  },
  {
    number: "03",
    discipline: "MTB · PRIVATE",
    label: "A RIDE BUILT AROUND YOUR GROUP",
    destination: "AGAFAY & MARRAKECH",
    title: "Private Agafay MTB Escape",
    duration: "3 days",
    description: "Build a private mountain bike escape around Agafay and nearby countryside, with each ride chosen to match your group’s skill, stamina and appetite for rough terrain. Daily mileage should be realistic for the rocky surface and the conditions. Share your dates, bike setup and previous experience so the route, transfers and support can be discussed before confirming the trip.",
    image: "/images/mountain-bike-morocco-hero.jpg",
  },
  {
    number: "04",
    discipline: "E-MTB",
    label: "ELECTRIC-ASSISTED ROCKY TERRAIN",
    destination: "AGAFAY DESERT",
    title: "Agafay E-MTB Discovery Ride",
    duration: "1 day",
    description: "Discover the rocky desert-edge landscapes on an electric mountain bike, with route choice based on your experience and the bike’s capabilities. Pedal assistance can help on climbs, but loose surfaces and exposed conditions still require confident handling. Discuss battery range, elevation, charging, water stops, protective equipment and the route’s technical level before riding.",
    image: "/images/e-mtb-tour-morocco.jpg",
  },
  {
    number: "05",
    discipline: "E-MTB · SCENIC",
    label: "WIDE HORIZONS & RURAL TRACKS",
    destination: "AGAFAY & LAKE TAKERKOUST",
    title: "Agafay and Lake Takerkoust E-MTB Tour",
    duration: "2 days",
    description: "Combine suitable electric mountain bike routes around Agafay with selected countryside tracks in the wider Lake Takerkoust area. The itinerary needs to balance surface conditions, climbing, battery range and time between stops. Confirm the route access, charging arrangements, expected distances, water availability and transfer logistics for your dates.",
    image: "/images/day-ebike-tour-from-marrakech.jpg",
  },
  {
    number: "06",
    discipline: "E-MTB · ATLAS EDGE",
    label: "A LONGER DESERT-TO-FOOTHILLS JOURNEY",
    destination: "AGAFAY TO ATLAS",
    title: "Agafay to Atlas Foothills E-Bike Journey",
    duration: "4 days",
    description: "Plan a multi-day electric mountain bike journey linking selected Agafay tracks with routes towards the Atlas foothills. A practical itinerary depends on the terrain, distance between riding areas, battery capacity and charging opportunities. Daily stages, transfers, overnight stops and the group’s comfort on uneven ground should all be reviewed before the route is finalised.",
    image: "/images/saghro-morocco-e-bike-tour.jpg",
  },
  {
    number: "07",
    discipline: "GRAVEL",
    label: "GRAVEL TRACKS & OPEN COUNTRY",
    destination: "AGAFAY DESERT",
    title: "Agafay Desert Gravel Cycling Day",
    duration: "1 day",
    description: "Ride selected unpaved routes around Agafay on a gravel bike where the surface is appropriate for your tyres and setup. The landscape is wide and exposed, and loose stones can affect speed and handling. Route choice should be checked against current conditions, with distance, hydration, sun protection, navigation and a sensible pace agreed in advance.",
    image: "/images/gravel-cycling-morocco.jpg",
  },
  {
    number: "08",
    discipline: "GRAVEL · LAKE",
    label: "RURAL PISTES & WATERFRONT VIEWS",
    destination: "AGAFAY & LAKE TAKERKOUST",
    title: "Agafay to Lake Takerkoust Gravel Ride",
    duration: "2 days",
    description: "Explore a two-day gravel itinerary through selected tracks between the Agafay area and the Lake Takerkoust surroundings. The exact route should reflect the quality of unpaved surfaces, road connections and the group’s experience. Plan daily distance around heat and exposure, and confirm water stops, navigation, support and overnight arrangements before travel.",
    image: "/images/gravel-desert-cycling-morocco.JPG",
  },
  {
    number: "09",
    discipline: "GRAVEL · EXPEDITION",
    label: "REMOTE FEELING & CHANGING TERRAIN",
    destination: "AGAFAY TO ATLAS",
    title: "Agafay and Atlas Edge Gravel Expedition",
    duration: "4 days",
    description: "Spend several days exploring suitable gravel roads and tracks across the Agafay area and towards selected foothill landscapes. Each stage should be based on the actual surface, elevation, resupply options and distance between stops rather than distance alone. Discuss your bike setup, navigation preferences, group pace and support requirements when planning the itinerary.",
    image: "/images/gravel-desert-cycling-expedition.jpg",
  },
  {
    number: "10",
    discipline: "ROAD",
    label: "PAVED COUNTRYSIDE ROADS",
    destination: "MARRAKECH & AGAFAY",
    title: "Agafay Road Cycling Day Ride",
    duration: "1 day",
    description: "Enjoy a road cycling day on selected paved roads around the Marrakech countryside and the approaches to Agafay. The focus can be steady endurance riding and wide-open scenery, with the route tailored to your fitness and preferred distance. Traffic exposure, road surfaces, climbing, water stops and the best start time should be reviewed before the ride.",
    image: "/images/road-cycling-morocco.jpg",
  },
  {
    number: "11",
    discipline: "ROAD · ENDURANCE",
    label: "LONGER RIDES & ROLLING TERRAIN",
    destination: "MARRAKECH & AGAFAY",
    title: "Agafay Road Cycling Endurance Loop",
    duration: "2 days",
    description: "Plan a two-day road cycling break using suitable paved routes around Marrakech and the Agafay approaches. A route can be shaped around preferred daily mileage, climbing and time for recovery, but should account for traffic and changing road conditions. Confirm the precise route, support, water stops and overnight arrangements for your travel dates.",
    image: "/images/road-cycling-tour-morocco.jpg",
  },
  {
    number: "12",
    discipline: "ROAD · MULTI-DAY",
    label: "FROM DESERT EDGE TOWARDS THE MOUNTAINS",
    destination: "AGAFAY TO ATLAS",
    title: "Agafay to Atlas Road Cycling Journey",
    duration: "4 days",
    description: "Consider a multi-day road cycling itinerary starting around Marrakech and Agafay before heading towards selected Atlas foothill roads. The final route needs to balance gradients, traffic, road surface, transfers and overnight stops. Share your current fitness and preferred daily distance so stages can be discussed realistically and confirmed for the season.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  },
];

const regions = [
  {
    title: "Agafay Rocky Plateau",
    text: "Open, stony terrain and wide horizons define much of the Agafay landscape. Selected MTB, E-MTB and gravel routes may suit experienced riders, but loose surfaces and exposure make route checks, hydration and realistic pacing essential.",
    image: "/images/Agafay-desert-morocco.jpg",
    href: "/destinations/agafay-desert",
  },
  {
    title: "Lake Takerkoust",
    text: "The wider Lake Takerkoust area can add a different view to a cycling stay near Agafay. Suitable paved roads and unpaved tracks depend on the route, bike setup and current conditions, so confirm distance, surface and access before setting out.",
    image: "/images/Desert-Agafay-Morocco.jpg",
    href: "/destinations/marrakech",
  },
  {
    title: "Marrakech Countryside",
    text: "The countryside around Marrakech can work as a starting point for day rides and longer routes towards Agafay. Choose a route around the bike you plan to use, traffic exposure, available time and the group’s preferred distance.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/cycling-trips/from-marrakech",
  },
  {
    title: "Atlas Foothills",
    text: "For riders with more time, selected routes towards the Atlas foothills can extend a trip beyond the rocky desert-edge landscape. Terrain and elevation change significantly by route, so technical level, transfers, daily mileage and seasonal conditions need to be considered.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
];

const faqs = [
  {
    question: "What types of cycling can I do in Agafay?",
    answer: "You can enquire about MTB, E-MTB, gravel and road cycling options in the wider Agafay and Marrakech area. The best fit depends on the actual surface, your bike, experience, preferred distance and current route conditions. Confirm the itinerary, equipment and support before booking.",
  },
  {
    question: "Is Agafay suitable for mountain biking?",
    answer: "Selected routes may suit mountain biking, especially for riders comfortable with rocky and uneven terrain. Difficulty varies by track, and a route should be selected to match your handling skills, fitness and equipment. Check local access, weather, water needs and recent surface conditions before setting out.",
  },
  {
    question: "Can I ride a gravel bike in Agafay?",
    answer: "Some tracks may be suitable for gravel bikes, but loose stones and rough sections can vary considerably. Tyre width, tyre condition, gearing and rider experience all matter. The exact route should be checked before travel, rather than assuming every unpaved track is suitable for a gravel setup.",
  },
  {
    question: "Is Agafay a real sand desert?",
    answer: "Agafay is known for a rocky, arid landscape rather than the expansive sand dunes associated with the Sahara. Cycling routes commonly need to account for stony and uneven ground, open exposure and limited shade. Choose your bike and route for the terrain you will actually encounter.",
  },
  {
    question: "When is a good time to cycle in Agafay?",
    answer: "Conditions depend on the season and the exact route. The exposed terrain can become very hot, particularly during summer, so timing, hydration, sun protection and daily distance are important. Check the forecast close to departure and agree on a suitable start time and contingency plan.",
  },
  {
    question: "Can I combine Agafay with Marrakech or the Atlas Mountains?",
    answer: "A trip may combine riding around Agafay with selected routes near Marrakech or the Atlas foothills. The plan needs to account for transfers, road and trail surfaces, climbing, daily mileage and available time. Share your dates and cycling experience so the route and logistics can be discussed.",
  },
];

export default function AgafayDesertDestinationPage() {
  return (
    <>
      <main className="cycling-listing agafay-destination-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/Agafay-desert-morocco.jpg"
            alt="Cycling across the rocky landscapes of Agafay, Morocco"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">AGAFAY · LAKE TAKERKOUST · MARRAKECH</p>
            <h1>Agafay Desert Cycling Tours in Morocco</h1>
            <p className="cl-hero__intro">
              Ride through Morocco’s rugged Agafay landscape on a cycling trip planned around your bike and experience. Explore mountain bike tracks, electric-assisted rides, gravel routes and paved-road options near Agafay and Lake Takerkoust, with attention to terrain, exposure, water and the time you have available.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { destination: "Agafay Desert", request: "planning" } }}
              >
                Plan Your Agafay Trip
              </Link>
              <Link className="cl-button cl-button--outline" href="#agafay-tours">
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
            <p className="cl-eyebrow cl-eyebrow--dark">ON THE ROCKY DESERT EDGE</p>
            <h2>Rocky tracks, open horizons and four ways to ride Agafay.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              Agafay is a rocky, arid landscape within reach of Marrakech, offering a striking change from the city streets and greener mountain valleys. Rather than broad sand dunes, the area is known for stony hills, dry tracks and open views. The best cycling route depends on the surface available, your bike setup, the time of year and how comfortable you are riding in exposed conditions.
            </p>
            <p>
              Each discipline needs a different approach. MTB routes require confidence on uneven, rocky ground; E-MTB plans need to account for battery range and charging; gravel routes must suit tyre width and surface conditions; and road cycling should use suitable paved roads while considering traffic and gradients. Share your riding experience, equipment and preferred distance so the route can be assessed realistically.
            </p>
            <p>
              Whether you want a single day ride or a longer journey that combines Agafay with the Lake Takerkoust area or Atlas foothills, planning should allow for heat, water, transfers and regular breaks. Exact routes, access, availability and inclusions should be confirmed for your travel dates.
            </p>
            <Link className="cl-text-link" href="/destinations/agafay-desert">
              Explore cycling trips in the Agafay area <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="agafay-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR CYCLING STYLE</p>
                <h2>MTB, E-MTB, gravel and road cycling in Agafay</h2>
              </div>
              <p>
                Explore a mix of day rides and multi-day cycling ideas around Agafay and nearby landscapes. Each route needs to match your bike, riding level, season and available time. Durations are planning starting points; the final itinerary, surface conditions and details should be confirmed before booking.
              </p>
            </div>
            <div className="cl-tour-grid">
              {tours.map((tour) => (
                <article className="home-tour-card" key={tour.number}>
                  <Link
                    className="home-tour-card__image"
                    href={{ pathname: "/contact", query: { tour: tour.title, destination: "Agafay Desert", request: "details" } }}
                    aria-label={`More details about ${tour.title}`}
                  >
                    <img src={tour.image} alt={tour.title} loading="lazy" />
                    <span className="home-tour-card__category">{tour.label}</span>
                    <span className="home-tour-card__level">{tour.destination}</span>
                  </Link>
                  <div className="home-tour-card__body">
                    <p className="home-tour-card__eyebrow">{tour.discipline === "ROAD" || tour.discipline.startsWith("ROAD") ? "ROAD CYCLING TOUR" : tour.discipline === "GRAVEL" || tour.discipline.startsWith("GRAVEL") ? "GRAVEL CYCLING TOUR" : tour.discipline === "E-MTB" || tour.discipline.startsWith("E-MTB") ? "E-MTB TOUR" : "MOUNTAIN BIKE TOUR"}</p>
                    <h3 className="home-tour-card__title">
                      <Link href={{ pathname: "/contact", query: { tour: tour.title, destination: "Agafay Desert", request: "details" } }}>
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
                        href={{ pathname: "/contact", query: { tour: tour.title, destination: "Agafay Desert", request: "details" } }}
                      >
                        Explore Tour
                      </Link>
                      <Link
                        className="home-tour-card__link"
                        href={{ pathname: "/contact", query: { tour: tour.title, destination: "Agafay Desert", request: "booking" } }}
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
              <p className="cl-eyebrow">ROCKY TERRAIN. OPEN LANDSCAPES. YOUR PACE.</p>
              <h2>Choose a cycling route that fits Agafay’s terrain.</h2>
            </div>
            <div>
              <p>
                Some riders want a short scenic outing, while others prefer several days exploring rocky tracks and nearby countryside. Think about the terrain you enjoy, your comfort riding in exposed conditions, the daily distance you prefer and time needed for transfers and stops. The route, equipment, water plan and support can then be discussed around your group’s needs and the conditions for your dates.
              </p>
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { destination: "Agafay Desert", request: "planning" } }}
              >
                Discuss Your Agafay Ride
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">WHERE TO RIDE</p>
              <h2>Explore cycling areas around Agafay</h2>
            </div>
            <p>
              Agafay can be a starting point for rides through rocky landscapes, towards nearby lake-side areas or onward to the foothills. Treat each area as a route idea, then match the cycling style to the actual surface, your experience and the time available.
            </p>
          </div>
          <div className="cl-region-grid">
            {regions.map((region, index) => (
              <article className="home-tour-card" key={region.title}>
                <Link className="home-tour-card__image" href={region.href} aria-label={region.title}>
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
              src="/images/events-race-cycling-desert-agafay.JPG"
              alt="Cycling through the rocky landscape of Agafay, Morocco"
              loading="lazy"
            />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">A DIFFERENT SIDE OF MOROCCO</p>
            <h2>Ride the rocky plateaus and discover the wider region.</h2>
            <p>
              A cycling trip in Agafay offers a different perspective on the landscapes outside Marrakech. The open, rocky terrain brings changing viewpoints and a sense of space, with routes that can vary from rough tracks to nearby paved roads. A good ride leaves time for breaks and scenery rather than focusing only on distance.
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
                <h2>Thoughtful route planning for Agafay’s exposed, rocky terrain.</h2>
              </div>
              <p>
                The most suitable ride reflects the riders taking part and the conditions on the ground. Discussing terrain, fitness, equipment, heat and timing helps create a more realistic and enjoyable plan.
              </p>
            </div>
            <div className="cl-why-grid">
              <article><span>01</span><h3>Choose the right bike and route</h3><p>Match MTB, E-MTB, gravel or road cycling to the actual terrain, your tyres and your experience.</p></article>
              <article><span>02</span><h3>Plan around heat and hydration</h3><p>Discuss start times, water supplies, exposure, transfer time and daily distance before setting out.</p></article>
              <article><span>03</span><h3>Flexible private trips</h3><p>Share your group size, dates and riding experience so the route and pace can be matched to your priorities.</p></article>
              <article><span>04</span><h3>Enjoy the wider landscape</h3><p>Leave time for views, breaks and the wider landscapes around Agafay and Lake Takerkoust.</p></article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">PLAN YOUR AGAFAY CYCLING TRIP</p>
              <h2>Three steps to plan your ride with confidence.</h2>
            </div>
            <p>
              You do not need to have every detail decided before enquiring. Start with your dates, the cycling style you prefer and your group's experience, then review the practical details for a suitable route.
            </p>
          </div>
          <div className="cl-steps">
            <article><span>STEP 01</span><h3>Choose your cycling style</h3><p>Tell us whether you prefer rocky MTB tracks, electric-assisted riding, gravel routes or paved road cycling.</p></article>
            <article><span>STEP 02</span><h3>Discuss route and timing</h3><p>Review surface conditions, daily distance, heat, water access, transfers and seasonal conditions.</p></article>
            <article><span>STEP 03</span><h3>Confirm the details</h3><p>Confirm bike suitability, route access, support, water arrangements and the itinerary before finalising the trip.</p></article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
              <h2>Agafay Desert Cycling: FAQs</h2>
              <p>Find answers about cycling styles, rocky terrain, route preparation and timing in Agafay. For advice about a particular trip, contact us with your dates and preferences.</p>
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
            src="/images/Desert-Agafay-Morocco.jpg"
            alt="Open rocky hills and wide horizons in Agafay, Morocco"
            loading="lazy"
          />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR AGAFAY CYCLING ADVENTURE</p>
            <h2>Ready to explore Agafay and its rocky landscapes by bike?</h2>
            <p>
              Tell us when you would like to travel, which cycling style suits you and how much time you have. We can discuss an Agafay route that reflects your plans, riding experience and the conditions expected for your dates.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { destination: "Agafay Desert", request: "planning" } }}
              >
                Plan Your Agafay Cycling Trip
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
            <Link href="/destinations/agafay-desert">Agafay Desert</Link>
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
          <span>Agafay cycling adventures, thoughtfully planned.</span>
        </div>
      </footer>
    </>
  );
}