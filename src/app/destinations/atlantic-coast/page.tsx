import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atlantic Coast Cycling Tours in Morocco | MTB, E-MTB, Gravel & Road",
  description:
    "Discover cycling tours around Essaouira and Morocco’s Atlantic coast. Explore MTB trails, E-MTB rides, gravel roads and road cycling around Sidi Kaouki, argan countryside and the Atlantic shoreline.",
};

const tours = [
  {
    number: "01",
    discipline: "MTB",
    label: "COASTAL TRACKS & OCEAN VIEWS",
    destination: "ESSAOUIRA · ATLANTIC COAST",
    title: "Essaouira Atlantic Coast Mountain Bike Tour",
    duration: "1 day",
    description:
      "Explore suitable coastal tracks and countryside trails around Essaouira on a guided mountain bike outing. The route can be adjusted to your technical confidence, fitness and the ground conditions, with time for coastal views and breaks. Before confirming, discuss the expected distance, trail difficulty, bike setup, transfers and available support for your chosen date.",
    image: "/images/atlantic-coast-cycling-tour-morocco.jpg",
  },
  {
    number: "02",
    discipline: "MTB · COAST & COUNTRYSIDE",
    label: "ARGAN GROVES & RURAL TRAILS",
    destination: "ARGAN COUNTRYSIDE",
    title: "Argan Country and Atlantic Trails MTB Ride",
    duration: "2 days",
    description:
      "Spend two days riding selected trails and tracks through the countryside beyond Essaouira, where argan country meets the Atlantic region. Trail surfaces and technical sections vary, so the itinerary should be matched to the riders rather than relying on a fixed difficulty rating. Confirm route access, daily mileage, meals, accommodation and transport before departure.",
    image: "/images/mountain-bike-morocco-hero.jpg",
  },
  {
    number: "03",
    discipline: "MTB · MULTI-DAY",
    label: "VILLAGES, HILLS & COASTAL LANDSCAPES",
    destination: "ESSAOUIRA TO SIDI KAOUKI",
    title: "Essaouira to Sidi Kaouki MTB Journey",
    duration: "3 days",
    description:
      "Plan a multi-day mountain bike journey around Essaouira and the Sidi Kaouki area using suitable trails, tracks and connecting roads. A practical itinerary balances riding time with the terrain, wind, weather, overnight stops and opportunities to rest. Share your experience and preferred pace so the daily stages, bike requirements and support can be agreed ahead of the trip.",
    image: "/images/atlantic-coast-cycling-tour-morocco.jpg",
  },
  {
    number: "04",
    discipline: "E-MTB",
    label: "ELECTRIC-ASSISTED COASTAL EXPLORATION",
    destination: "ESSAOUIRA · ATLANTIC COAST",
    title: "Essaouira Coastal E-MTB Discovery",
    duration: "1 day",
    description:
      "Discover selected coastal and countryside routes by electric mountain bike, with a ride planned around your experience and the available terrain. Assistance can make undulating routes more manageable, but battery range, surface conditions and wind still matter. Confirm bike availability, charging arrangements, route difficulty, water stops and transfer details before booking.",
    image: "/images/e-mtb-tour-from-marrakech.jpg",
  },
  {
    number: "05",
    discipline: "E-MTB · COUNTRYSIDE",
    label: "ARGAN LANDSCAPES AT YOUR OWN PACE",
    destination: "ARGAN COUNTRYSIDE",
    title: "Argan Country E-MTB Adventure",
    duration: "2 days",
    description:
      "Ride into the countryside around Essaouira on a two-day electric mountain bike trip concept. The route can combine appropriate tracks and quieter connectors, with distances selected to suit your riding level and battery capacity. Discuss the bike model, charging access, daily elevation, accommodation, support and the actual ground conditions expected for your travel dates.",
    image: "/images/eBike-tour-atlas-mountains-morocco.jpg",
  },
  {
    number: "06",
    discipline: "E-MTB · MULTI-DAY",
    label: "FROM THE CITY TOWARDS THE ATLANTIC",
    destination: "MARRAKECH TO ATLANTIC",
    title: "Marrakech to Essaouira E-MTB Journey",
    duration: "4 days",
    description:
      "Build a multi-day electric mountain bike holiday that links selected riding areas between Marrakech and the Atlantic coast, with transfers used where they make the itinerary more practical. The plan must allow for changing elevation, battery range, charging opportunities, road and trail surfaces, and recovery time. Confirm daily riding sections, logistics and support before the journey is finalised.",
    image: "/images/e-mtb-tour-morocco.jpg",
  },
  {
    number: "07",
    discipline: "GRAVEL",
    label: "QUIET ROADS & COASTAL TRACKS",
    destination: "ESSAOUIRA · ATLANTIC COAST",
    title: "Essaouira Atlantic Gravel Cycling Tour",
    duration: "2 days",
    description:
      "Ride selected paved lanes and firm gravel roads around Essaouira, taking in the countryside and Atlantic atmosphere at a measured pace. Gravel conditions can change, so the route should suit your tyre clearance, gearing and comfort on loose surfaces. Confirm navigation, daily mileage, food and water stops, accommodation and support arrangements before departure.",
    image: "/images/gravel-cycling-morocco.jpg",
  },
  {
    number: "08",
    discipline: "GRAVEL · EXPEDITION",
    label: "OPEN COUNTRY & LONGER RIDING DAYS",
    destination: "ATLANTIC COAST",
    title: "Atlantic Coast Gravel Expedition",
    duration: "4 days",
    description:
      "Spend several days exploring suitable gravel routes in the wider Essaouira region. This trip concept focuses on quiet connectors, rural scenery and a steady rhythm rather than unverified mileage promises. The final stages should reflect the actual road and track surfaces, wind, weather, resupply points and the group’s fitness, with navigation and vehicle support agreed in advance.",
    image: "/images/gravel-adventure-bike-morocco.jpg",
  },
  {
    number: "09",
    discipline: "GRAVEL · COAST & COUNTRYSIDE",
    label: "SIDI KAOUKI & ARGAN COUNTRY",
    destination: "SIDI KAOUKI · ATLANTIC COAST",
    title: "Sidi Kaouki and Argan Country Gravel Ride",
    duration: "3 days",
    description:
      "Connect selected gravel roads and firm tracks around Sidi Kaouki and the rural landscapes south of Essaouira. The journey offers a way to explore beyond the main roads, but route selection should take account of sandy sections, changing surfaces and the distance between services. Confirm suitable tyres, daily distances, water and food arrangements and overnight stops for your dates.",
    image: "/images/atlantic-coast-cycling-tour-morocco.jpg",
  },
  {
    number: "10",
    discipline: "ROAD",
    label: "PAVED COASTAL ROADS & OCEAN AIR",
    destination: "ESSAOUIRA · ATLANTIC COAST",
    title: "Essaouira Atlantic Road Cycling Tour",
    duration: "1 day",
    description:
      "Enjoy a road cycling outing on selected paved routes around Essaouira and its nearby countryside. The day can be planned around your target distance, fitness and preferred pace, while taking account of wind, road conditions, traffic and climbing. Confirm the route, support, planned stops, start time and current conditions before riding.",
    image: "/images/road-cycling-tour-morocco.jpg",
  },
  {
    number: "11",
    discipline: "ROAD · ENDURANCE",
    label: "LONGER STAGES THROUGH RURAL MOROCCO",
    destination: "MARRAKECH TO ATLANTIC",
    title: "Marrakech to Atlantic Coast Road Cycling Journey",
    duration: "4 days",
    description:
      "Plan a multi-day road cycling journey linking selected paved routes around Marrakech with the Atlantic coast near Essaouira. The best plan balances elevation, daily distance, traffic exposure, wind and recovery time, and may include transfers to keep the ride comfortable and realistic. Share your experience and target mileage so suitable stages, accommodation and support can be discussed.",
    image: "/images/adventure-road-cycling-morocco.jpg",
  },
  {
    number: "12",
    discipline: "ROAD · MULTI-DAY",
    label: "ATLANTIC HORIZONS & COASTAL COUNTRYSIDE",
    destination: "ATLANTIC COAST",
    title: "Atlantic Coast Road Cycling Escape",
    duration: "3 days",
    description:
      "Explore selected paved roads in the Essaouira region on a three-day road cycling escape. Each stage should be tailored to the group’s fitness and the road conditions, with careful attention to wind, traffic, food and water stops and overnight locations. The exact route and daily distances should be confirmed for your dates rather than assumed from the tour title alone.",
    image: "/images/atlantic-coast-cycling-tour-morocco.jpg",
  },
];

const regions = [
  {
    title: "Essaouira and the Old Port",
    text: "Essaouira is a natural starting point for a cycling holiday, with the historic medina and port close to a wider network of roads and countryside. Plan riding stages around traffic, wind, the time needed to leave town and the type of terrain you want to explore. Route access and any transfers should be checked for your dates.",
    image: "/images/atlantic-coast-cycling-tour-morocco.jpg",
    href: "/destinations/atlantic-coast",
  },
  {
    title: "Sidi Kaouki and the Southern Coast",
    text: "The coastline south of Essaouira offers a different setting for selected coastal rides and countryside routes. The surface can shift from paved roads to firm tracks or sandy ground, so the route should suit your bike and experience. Factor in wind exposure, water, stops and the return transfer when planning the day.",
    image: "/images/gravel-cycling-morocco.jpg",
    href: "/destinations/atlantic-coast",
  },
  {
    title: "Argan Countryside",
    text: "Beyond the coast, the surrounding countryside includes rural settlements and argan-growing landscapes. Selected quiet roads and tracks may suit gravel, MTB or E-MTB itineraries depending on their actual condition. Choose the riding style around the surface and the group’s preferences, and plan realistic distances with reliable resupply and support.",
    image: "/images/morocco-berber-valley.jpg",
    href: "/destinations/atlantic-coast",
  },
  {
    title: "Atlantic Road Routes",
    text: "Paved roads in the wider region can suit road cycling and mixed cycling itineraries when selected carefully. Wind, traffic, road quality and elevation can affect both the pace and the feel of a ride. Check the proposed route, daily distance, stop locations and available support before confirming the plan.",
    image: "/images/road-cycling-tour-morocco.jpg",
    href: "/destinations/atlantic-coast",
  },
];

const faqs = [
  {
    question: "What cycling styles can I choose around Essaouira?",
    answer:
      "The page features MTB, E-MTB, gravel and road cycling trip ideas. The right option depends on your preferred terrain, equipment and experience. Before booking, confirm the proposed route, surface, daily mileage, support and seasonal conditions for your dates.",
  },
  {
    question: "Is the Atlantic coast suitable for mountain biking?",
    answer:
      "Some trails and tracks in the wider countryside may be suitable for MTB, but not every coastal path or sandy section is rideable. A route should be checked for access, surface, technical difficulty and local conditions, then matched to the group’s experience and bike setup.",
  },
  {
    question: "Can I ride a gravel bike around Essaouira?",
    answer:
      "Gravel bikes can suit a combination of paved roads and firm tracks where the route and conditions are appropriate. Deep sand, loose ground and rough sections may require a different bike or a route change. Confirm tyre clearance, gearing, navigation, daily distance and support before departure.",
  },
  {
    question: "How windy is cycling on the Atlantic coast?",
    answer:
      "Wind can be an important factor along the coast and may affect speed, comfort and route choice. Daily plans should allow flexibility, with suitable clothing, sensible start times and an alternative route when conditions call for it. Check the forecast close to departure.",
  },
  {
    question: "Can I combine Marrakech and Essaouira in one cycling holiday?",
    answer:
      "Yes, a holiday can be planned to include selected riding near Marrakech and time on the Atlantic coast. Depending on your available days and cycling style, transfers may make the itinerary more practical than riding every kilometre between regions. Confirm the stages, transfer time, accommodation and support before booking.",
  },
  {
    question: "What should I confirm before booking a coastal cycling trip?",
    answer:
      "Discuss travel dates, group size, cycling experience, bike type, expected daily distance, surface conditions, accommodation, food and water stops, transfers and support. Confirm availability and the final itinerary directly before making travel arrangements.",
  },
];

export default function AtlanticCoastDestinationPage() {
  return (
    <>
      <main className="cycling-listing atlantic-coast-destination-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/atlantic-coast-cycling-tour-morocco.jpg"
            alt="Cycling through the countryside along Morocco’s Atlantic coast near Essaouira"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">ESSAOUIRA · SIDI KAOUKI · ATLANTIC COAST</p>
            <h1>Essaouira & Atlantic Coast Cycling Tours in Morocco</h1>
            <p className="cl-hero__intro">
              Explore Morocco’s Atlantic side by bike, from the countryside around Essaouira to quieter coastal roads and selected gravel tracks. Choose from mountain biking, electric-assisted rides, gravel adventures and road cycling, with routes planned around your riding experience, the actual terrain and conditions for your dates.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { destination: "Essaouira & Atlantic Coast", request: "planning" } }}
              >
                Plan Your Coastal Trip
              </Link>
              <Link className="cl-button cl-button--outline" href="#atlantic-coast-tours">
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
            <p className="cl-eyebrow cl-eyebrow--dark">MOROCCO’S ATLANTIC COAST</p>
            <h2>Coastal air, rural tracks and open roads—four ways to explore Essaouira.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              Essaouira makes a distinctive base for a cycling holiday in Morocco. The Atlantic setting, surrounding countryside and routes towards places such as Sidi Kaouki offer an alternative to the high mountain terrain of the Atlas. Depending on the trip, riders can explore suitable paved roads, firm tracks and selected trails, with the itinerary built around the landscapes and riding style they enjoy.
            </p>
            <p>
              Each discipline calls for a different plan. MTB routes should match your technical ability and the condition of the trails; E-MTB journeys need realistic battery and charging plans; gravel routes need suitable tyres and a careful look at loose or sandy sections; and road cycling should account for wind, traffic, road surfaces and elevation. The best route is the one that fits the rider and conditions, rather than a fixed distance chosen in advance.
            </p>
            <p>
              A short coastal ride can fit into a city break, while a longer itinerary can explore more of the rural region or link selected riding areas with Marrakech. Confirm route access, daily mileage, weather considerations, support, accommodation and transfers before the trip is finalised.
            </p>
            <Link className="cl-text-link" href="/destinations">
              Explore all cycling destinations <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="atlantic-coast-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR CYCLING STYLE</p>
                <h2>MTB, E-MTB, gravel and road cycling near Essaouira</h2>
              </div>
              <p>
                Compare day rides and multi-day cycling ideas across the Atlantic coast and its surrounding countryside. Durations are planning starting points. Route access, surface conditions, distance, support and final inclusions should be confirmed with your travel dates and group requirements.
              </p>
            </div>
            <div className="cl-tour-grid">
              {tours.map((tour) => (
                <article className="home-tour-card" key={tour.number}>
                  <Link
                    className="home-tour-card__image"
                    href={{ pathname: "/contact", query: { tour: tour.title, destination: "Essaouira & Atlantic Coast", request: "details" } }}
                    aria-label={`More details about ${tour.title}`}
                  >
                    <img src={tour.image} alt={tour.title} loading="lazy" />
                    <span className="home-tour-card__category">{tour.discipline}</span>
                    <span className="home-tour-card__level">{tour.destination}</span>
                  </Link>
                  <div className="home-tour-card__body">
                    <p className="home-tour-card__eyebrow">
                      {tour.discipline.startsWith("ROAD") ? "ROAD CYCLING TOUR" : tour.discipline.startsWith("GRAVEL") ? "GRAVEL CYCLING TOUR" : tour.discipline.startsWith("E-MTB") ? "E-MTB TOUR" : "MOUNTAIN BIKE TOUR"}
                    </p>
                    <h3 className="home-tour-card__title">
                      <Link href={{ pathname: "/contact", query: { tour: tour.title, destination: "Essaouira & Atlantic Coast", request: "details" } }}>
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
                        href={{ pathname: "/contact", query: { tour: tour.title, destination: "Essaouira & Atlantic Coast", request: "details" } }}
                      >
                        Explore Tour
                      </Link>
                      <Link
                        className="home-tour-card__link"
                        href={{ pathname: "/contact", query: { tour: tour.title, destination: "Essaouira & Atlantic Coast", request: "booking" } }}
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
              <p className="cl-eyebrow">COASTAL ROUTES. RURAL LANDSCAPES. YOUR PACE.</p>
              <h2>Choose the ride that matches your bike, ability and time away.</h2>
            </div>
            <div>
              <p>
                Your trip might be a short introduction to coastal riding, a gravel-focused journey through the countryside or a multi-day holiday combining different parts of the region. Consider the terrain you enjoy, your preferred daily mileage, wind exposure, and how much time you want for stops. Those details help shape a practical route and support plan.
              </p>
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { destination: "Essaouira & Atlantic Coast", request: "planning" } }}
              >
                Discuss Your Coastal Ride
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">WHERE TO RIDE</p>
              <h2>Discover cycling areas around Essaouira and the Atlantic</h2>
            </div>
            <p>
              Coastal towns, countryside and paved regional roads offer different ways to explore the area. Treat each place as a starting point for a route discussion, then match the riding style to the real surface, conditions and level of experience.
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
              src="/images/atlantic-coast-cycling-tour-morocco.jpg"
              alt="A cycling route in the countryside near Morocco’s Atlantic coast"
              loading="lazy"
            />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">A DIFFERENT SIDE OF MOROCCO</p>
            <h2>Explore beyond Essaouira’s medina, one ride at a time.</h2>
            <p>
              Cycling offers a different view of the Atlantic region: the pace slows, the landscape opens up and the route itself becomes part of the experience. A carefully chosen ride can give you time to notice the changing countryside, stop for a view or take a break in a local settlement rather than simply chasing a distance target.
            </p>
            <p>
              Good preparation is essential. Wind and weather can change the feel of a coastal day, while rural tracks may vary in firmness or become sandy. Routes should be checked for access and difficulty, and planned around water, food, equipment, navigation, transfers and the abilities of everyone in the group. For E-MTB trips, battery range and charging also need to be built into the stages.
            </p>
            <Link className="cl-button cl-button--dark" href="/about">Learn About Our Approach</Link>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">WHY PLAN YOUR RIDE WITH US</p>
                <h2>Thoughtful route choices for a more rewarding coastal cycling holiday.</h2>
              </div>
              <p>
                A good cycling experience starts with clear expectations. Discussing your bike, fitness, available time and preferred terrain makes it easier to choose routes that are realistic for the conditions and enjoyable for the group.
              </p>
            </div>
            <div className="cl-why-grid">
              <article><span>01</span><h3>Routes matched to your bike</h3><p>Choose MTB, E-MTB, gravel or road routes according to the actual surface, your equipment and the riding you enjoy.</p></article>
              <article><span>02</span><h3>Practical daily planning</h3><p>Discuss mileage, wind exposure, start times, food and water stops, transfers and how much time you want to spend riding.</p></article>
              <article><span>03</span><h3>Private trip options</h3><p>Share dates, group size and experience so the pace, itinerary and support can be planned around your group.</p></article>
              <article><span>04</span><h3>Time to enjoy the region</h3><p>Make room for Atlantic views, countryside, local stops and the places between the start and finish of the ride.</p></article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">PLAN YOUR ESSAOUIRA CYCLING TRIP</p>
              <h2>Three steps to start planning your ride.</h2>
            </div>
            <p>
              You do not need every detail decided before you enquire. Start with your dates, preferred cycling style and group experience, then work through the practical details to identify a suitable route.
            </p>
          </div>
          <div className="cl-steps">
            <article><span>STEP 01</span><h3>Choose your cycling style</h3><p>Tell us whether you prefer MTB trails, electric-assisted riding, gravel tracks or paved road cycling.</p></article>
            <article><span>STEP 02</span><h3>Discuss the route and timing</h3><p>Review daily distances, surfaces, wind exposure, transfers, stop locations and seasonal conditions for your dates.</p></article>
            <article><span>STEP 03</span><h3>Confirm the arrangements</h3><p>Check bike setup, route access, accommodation, support, inclusions and the final itinerary before making arrangements.</p></article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
              <h2>Essaouira and Atlantic coast cycling: FAQs</h2>
              <p>Find answers to common questions about cycling styles, route planning and coastal conditions. For a specific trip, send us your dates and preferences.</p>
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
            src="/images/atlantic-coast-cycling-tour-morocco.jpg"
            alt="Morocco Atlantic coast countryside for a cycling holiday"
            loading="lazy"
          />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR NEXT MOROCCO RIDE</p>
            <h2>Ready to explore Essaouira and the Atlantic coast by bike?</h2>
            <p>
              Tell us when you would like to travel, which cycling style suits you and how much time you have. Start planning an Atlantic coast ride shaped around your preferences, riding experience and the conditions for your dates.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { destination: "Essaouira & Atlantic Coast", request: "planning" } }}
              >
                Plan Your Cycling Holiday
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
            <Link href="/destinations/agafay-desert">Agafay Desert</Link>
            <Link href="/destinations/marrakech">Marrakech</Link>
          </div>
          <div>
            <h3>Let’s Plan</h3>
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