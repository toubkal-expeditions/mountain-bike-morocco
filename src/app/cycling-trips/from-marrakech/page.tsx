import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cycling Tours from Marrakech | MTB, E-MTB & Gravel Morocco",
  description:
    "Discover guided cycling tours from Marrakech, from Atlas mountain bike and E-MTB day trips to Agafay gravel rides and multi-day cycling holidays across Morocco.",
  alternates: {
    canonical: "/cycling-trips/from-marrakech",
  },
  openGraph: {
    title: "Cycling Tours from Marrakech | MTB, E-MTB & Gravel Morocco",
    description:
      "Explore Morocco by bike from Marrakech. Discover guided MTB, electric mountain bike, gravel and road cycling day trips, plus multi-day Atlas adventures.",
    url: "https://mountain-bike-morocco.com/cycling-trips/from-marrakech",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/cycling-holiday-trip-from-marrakech.jpg",
        alt: "Cycling adventure from Marrakech towards the Atlas Mountains",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cycling Tours from Marrakech | Mountain Bike Morocco",
    description:
      "Plan a cycling adventure from Marrakech, with guided MTB, E-MTB, gravel and road rides in the Atlas Mountains and beyond.",
    images: ["/images/cycling-holiday-trip-from-marrakech.jpg"],
  },
};

const marrakechTours = [
  {
    number: "01",
    duration: "1 day",
    label: "ATLAS FOOTHILLS · MTB",
    destination: "ATLAS FOOTHILLS",
    title: "Atlas Mountain Bike Day Trip",
    slug: "atlas-mountain-bike-day-trip-1-day",
    description:
      "Leave Marrakech behind for a guided mountain bike experience in the Atlas foothills. Ride selected tracks through open countryside and changing mountain scenery, with the route chosen around your handling skills, fitness and preferred level of challenge. Before the ride, discuss the start point, transfer time, terrain, equipment and planned distance so the day fits your travel schedule.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
  },
  {
    number: "02",
    duration: "1 day",
    label: "ELECTRIC ASSISTANCE · SCENIC RIDING",
    destination: "MARRAKECH & ATLAS FOOTHILLS",
    title: "Marrakech E-MTB Adventure",
    slug: "marrakech-emtb-adventure-1-day",
    description:
      "Explore trails and countryside around Marrakech on an electric mountain bike. Pedal assistance can make selected climbs more manageable, while the route still needs to suit your riding experience and the bike's capabilities. Discuss battery range, elevation, trail surfaces, charging needs and the amount of time available before confirming the day's itinerary.",
    image: "/images/e-mtb-tour-from-marrakech.jpg",
  },
  {
    number: "03",
    duration: "1 day",
    label: "ROCKY DESERT · OPEN HORIZONS",
    destination: "AGAFAY DESERT",
    title: "Agafay Desert Cycling Tour",
    slug: "agafay-desert-cycling-tour-1-day",
    description:
      "Discover the rocky landscapes around Agafay on a cycling experience from Marrakech. The open terrain offers a striking contrast to the higher Atlas valleys, but stony surfaces, exposure and heat can make route choice important. Your ride should be planned around suitable tyres and bike type, water, temperature, the group's experience and the time needed for transfers.",
    image: "/images/Desert-Agafay-Morocco.jpg",
  },
  {
    number: "04",
    duration: "1 day",
    label: "GRAVEL · COUNTRY TRACKS",
    destination: "ATLAS FOOTHILLS",
    title: "Atlas Foothills Gravel Ride",
    slug: "atlas-foothills-gravel-ride-1-day",
    description:
      "Follow quiet roads and gravel tracks into the countryside beyond Marrakech. This ride can be discussed for cyclists who want a mix of open landscapes, rural routes and moderate changes in elevation without committing to a long multi-day journey. Route surfaces, traffic exposure, climbing and distance should be matched to your bike, experience and preferred pace.",
    image: "/images/gravel-cycling-morocco.jpg",
  },
  {
    number: "05",
    duration: "1 day",
    label: "ROAD CYCLING · CLIMBS & VIEWS",
    destination: "MARRAKECH & ATLAS FOOTHILLS",
    title: "Road Cycling from Marrakech",
    slug: "road-cycling-from-marrakech-1-day",
    description:
      "Use Marrakech as a starting point for a road ride through the surrounding countryside and towards selected Atlas foothill routes. The day's experience depends on the route, climbing, traffic and conditions, so distance and difficulty should be agreed with your group in advance. Share your cycling level, bike setup and available riding time to help shape a sensible plan.",
    image: "/images/road-cycling-tour-morocco.jpg",
  },
  {
    number: "06",
    duration: "1 day",
    label: "VILLAGES · VALLEY SCENERY",
    destination: "IMLIL & TOUBKAL",
    title: "Imlil Valley Cycling Experience",
    slug: "imlil-valley-cycling-experience-1-day",
    description:
      "Travel from Marrakech towards the High Atlas and discover the landscapes around Imlil and nearby villages. Depending on your preferred cycling discipline, the experience may involve suitable mountain tracks or quieter road sections, with time to stop and appreciate the scenery. Elevation, surfaces, weather and the riding confidence of everyone taking part should guide the final route choice.",
    image: "/images/morocco-berber-valley.jpg",
  },
  {
    number: "07",
    duration: "2 days",
    label: "SHORT BREAK · ATLAS DISCOVERY",
    destination: "MARRAKECH TO HIGH ATLAS",
    title: "Marrakech to Atlas Cycling Escape",
    slug: "marrakech-to-atlas-cycling-escape-2-day",
    description:
      "Turn a city stay into a two-day cycling break by combining time in Marrakech with riding in the Atlas foothills. The itinerary can be discussed around your preferred bike type, riding level and how much time you want to spend on the trail or road. Transfers, daily distances, overnight arrangements and recovery time should be considered together when shaping the trip.",
    image: "/images/cycling-holiday-trip-from-marrakech.jpg",
  },
  {
    number: "08",
    duration: "3 days",
    label: "BERBER VILLAGES · RURAL ROUTES",
    destination: "ATLAS MOUNTAIN VILLAGES",
    title: "Atlas Berber Villages Cycling Tour",
    slug: "atlas-berber-villages-cycling-tour-3-day",
    description:
      "Spend three days discovering the mountain landscapes and rural communities of the Atlas region. The route can combine selected cycling stages with time to pause at viewpoints and experience local village life. Daily distance, terrain, elevation and the transfer plan should be suited to your group, with accommodation and support details discussed before the itinerary is confirmed.",
    image: "/images/berber-villages-cycling-expeditions.jpg",
  },
  {
    number: "09",
    duration: "4 days",
    label: "MTB · HIGH ATLAS EXPLORATION",
    destination: "HIGH ATLAS MOUNTAINS",
    title: "Marrakech and High Atlas MTB Tour",
    slug: "marrakech-and-high-atlas-mtb-tour-4-day",
    description:
      "Use Marrakech as your gateway to a four-day mountain bike journey through selected Atlas routes. A longer trip offers more time to explore changing landscapes and rural valleys, but the route needs to reflect your ability, technical confidence, available support and the conditions of the season. Discuss daily riding distances, transfer stages, equipment and accommodation before settling on a programme.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
  },
  {
    number: "10",
    duration: "5 days",
    label: "MULTI-REGION · MOUNTAINS TO SOUTH",
    destination: "ATLAS TO SOUTHERN MOROCCO",
    title: "Atlas to Desert Cycling Journey",
    slug: "atlas-to-desert-cycling-journey-5-day",
    description:
      "For riders who have more time, an itinerary from Marrakech can connect Atlas mountain scenery with the changing landscapes of southern Morocco. A five-day concept must balance cycling time with the distances between regions, transfers, rest and accommodation. The final mix of road, gravel or mountain biking should be agreed around your group and the conditions expected along the route.",
    image: "/images/atlas-to-desert-biking-tour.jpg",
  },
  {
    number: "11",
    duration: "1 day",
    label: "FAMILY OPTIONS · FLEXIBLE PACING",
    destination: "MARRAKECH COUNTRYSIDE",
    title: "Family Cycling Day from Marrakech",
    slug: "family-cycling-day-from-marrakech-1-day",
    description:
      "Add a shared outdoor experience to a family stay in Marrakech with a cycling route selected around the ages and abilities of everyone taking part. The plan should leave room for breaks and avoid assuming that every rider is comfortable on the same terrain. Share heights for bike sizing, cycling confidence, preferred pace and available time so suitable options can be discussed.",
    image: "/images/group-cycling-atlas-mountains.jpg",
  },
  {
    number: "12",
    duration: "Tailor-made",
    label: "PRIVATE TRIP · YOUR ROUTE",
    destination: "PRIVATE · CUSTOM ROUTE",
    title: "Private Cycling Holiday from Marrakech",
    slug: "private-cycling-holiday-from-marrakech-custom-itinerary",
    description:
      "Build a private cycling holiday around your dates, preferred discipline and the regions you want to discover. Marrakech can be the start or end point for a day ride or a longer journey into the Atlas and beyond. Share your group size, riding experience, bike preferences, accommodation style and travel priorities so the route, transfers and daily stages can be discussed as a complete plan.",
    image: "/images/group-cycling-tour-morocco.jpg",
  },
];

const destinations = [
  {
    title: "Marrakech Countryside",
    text:
      "The countryside around Marrakech offers a convenient way to add cycling to a city break. Discuss the route surface, transfer time, riding duration and traffic exposure before choosing a ride that suits your group and bike type.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/destinations/marrakech",
  },
  {
    title: "Atlas Mountains",
    text:
      "The High Atlas provides mountain scenery, rural tracks and routes through traditional settlements. The right itinerary depends on elevation, trail conditions, season, riding style and how much time you have away from the city.",
    image: "/images/Explore-Atlas-Mountains-bike.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Imlil and Toubkal Region",
    text:
      "Around Imlil, mountain villages and steep valley landscapes create a distinctive setting for cycling. Route choice should take account of climbing, surface conditions, weather and the confidence of the riders in your group.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil-toubkal",
  },
  {
    title: "Agafay Desert",
    text:
      "Agafay offers rocky terrain and open horizons within reach of Marrakech. Exposed conditions and heat can affect how a ride feels, making water, timing, suitable equipment and a realistic pace important parts of the plan.",
    image: "/images/Agafay-desert-morocco.jpg",
    href: "/destinations/agafay-desert",
  },
];

const faqs = [
  {
    question: "Can I start a cycling tour in Marrakech?",
    answer:
      "Marrakech can be a practical starting point for a day ride or a longer cycling itinerary, depending on the route. Some experiences take place in the surrounding countryside, while others travel further into the Atlas or southern Morocco. Confirm the departure point, transfer time, riding duration and inclusions before finalising your plans.",
  },
  {
    question: "What types of cycling can I do from Marrakech?",
    answer:
      "Options to discuss include mountain biking, E-MTB, gravel, road cycling and private multi-day journeys. The best fit depends on your bike, experience, preferred terrain, available time and seasonal conditions. Share your priorities so the route can be considered around the kind of ride you want.",
  },
  {
    question: "Are day trips from Marrakech suitable for beginners?",
    answer:
      "Suitability depends on the route and the rider. Some countryside rides may suit recreational cyclists, while technical mountain trails, steep climbs or exposed surfaces can require stronger skills and fitness. Describe your experience honestly so you can discuss an appropriate route rather than assuming every ride is beginner-friendly.",
  },
  {
    question: "When is a good time to cycle from Marrakech?",
    answer:
      "Spring and autumn are often considered for many lower and mid-altitude routes, but conditions vary with elevation and region. Summer heat can make exposed routes demanding, while higher mountain areas can be colder or affected by snow in winter. Check conditions for the specific route and dates before confirming an itinerary.",
  },
  {
    question: "Can the tour be tailored to my group?",
    answer:
      "You can enquire about private or tailor-made arrangements. Useful details include your dates, group size, cycling discipline, experience, preferred daily distance, bike requirements and accommodation preferences. These help shape a realistic itinerary and identify which logistics need to be confirmed.",
  },
  {
    question: "Can I combine Marrakech with the Atlas Mountains?",
    answer:
      "A cycling holiday can be planned to include time in Marrakech and selected Atlas routes. The appropriate balance depends on how many days you have, the amount of riding you want to do and transfer time between places. Discuss priorities first so the itinerary leaves enough time for both travel and the ride itself.",
  },
  {
    question: "What should I bring for a cycling day from Marrakech?",
    answer:
      "Bring a properly fitting helmet, gloves, suitable footwear, comfortable riding clothing, sun protection and enough water for the planned route. Depending on the discipline, season and elevation, other useful items may include spare layers, a lightweight waterproof and basic personal riding equipment. Request a route-specific list once the ride and equipment arrangements are confirmed.",
  },
];

export default function CyclingToursFromMarrakechPage() {
  return (
    <>
      <main className="cycling-listing marrakech-cycling-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/cycling-holiday-trip-from-marrakech.jpg"
            alt="Cycling adventure starting from Marrakech towards the Atlas Mountains"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">MARRAKECH · ATLAS MOUNTAINS · MOROCCO</p>
            <h1>Cycling Tours from Marrakech</h1>
            <p className="cl-hero__intro">
              Start your Moroccan cycling adventure in Marrakech and discover
              the countryside, Atlas foothills, mountain villages and rocky
              desert landscapes beyond the city. Choose a guided day ride or
              discuss a longer cycling holiday shaped around your preferred
              discipline, available time and riding experience.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { tour: "Cycling Tours from Marrakech", request: "booking" } }}
              >
                Plan Your Marrakech Ride
              </Link>
              <Link className="cl-button cl-button--outline" href="#marrakech-tours">
                Explore Cycling Tours
              </Link>
            </div>
            <div className="cl-hero__meta">
              <span>DAY RIDES & MULTI-DAY TRIPS</span>
              <span>MTB · E-MTB · GRAVEL · ROAD</span>
              <span>PRIVATE OPTIONS</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">YOUR RIDE STARTS HERE</p>
            <h2>Discover the landscapes beyond the Red City, one ride at a time.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              Marrakech is more than a city break destination. It can also be a
              practical starting point for exploring Morocco by bike, with the
              countryside, Atlas foothills and selected mountain regions within
              reach of a planned itinerary. A ride can be a shorter addition to
              a city stay or the first stage of a longer journey through changing
              landscapes and traditional villages.
            </p>
            <p>
              There is no single route that suits every rider. Mountain bikers
              may want trail-focused terrain, E-MTB riders may prefer supported
              climbs, gravel cyclists may look for quieter tracks and road
              cyclists may prioritise scenic roads and elevation. Route surfaces,
              traffic, weather and transfer time should all be considered before
              choosing the right experience.
            </p>
            <p>
              Share your travel dates, cycling level, preferred bike type and
              available riding time when making an enquiry. These details help
              establish a realistic route and clarify equipment, transfers,
              daily distance and other practical arrangements before you travel.
            </p>
            <Link className="cl-text-link" href="/cycling-trips">
              Explore all cycling tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="marrakech-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR MARRAKECH CYCLING EXPERIENCE</p>
                <h2>Day rides and multi-day cycling holidays from Marrakech</h2>
              </div>
              <p>
                Explore different ways to ride from Marrakech, including MTB,
                electric mountain biking, gravel, road cycling and private
                journeys into the Atlas and beyond. Every itinerary should be
                matched to the riders, the chosen bike and the conditions along
                the route.
              </p>
            </div>
            <div className="cl-tour-grid">
              {marrakechTours.map((tour) => (
                <article className="home-tour-card" key={tour.number}>
                  <Link
                    className="home-tour-card__image"
                    href={`/cycling-trips/trip/${tour.slug}`}
                    aria-label={`More details about ${tour.title}`}
                  >
                    <img
                      src={tour.image}
                      alt={tour.title}
                      loading="lazy"
                    />
                    <span className="home-tour-card__category">{tour.label}</span>
                    <span className="home-tour-card__level">{tour.destination}</span>
                  </Link>
                  <div className="home-tour-card__body">
                    <p className="home-tour-card__eyebrow">
                      CYCLING FROM MARRAKECH · {tour.destination}
                    </p>
                    <h3 className="home-tour-card__title">
                      <Link href={`/cycling-trips/trip/${tour.slug}`}>
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
                        href={`/cycling-trips/trip/${tour.slug}`}
                      >
                        More Details
                      </Link>
                      <Link
                        className="home-tour-card__link"
                        href={{ pathname: "/contact", query: { tour: tour.title, request: "booking" } }}
                      >
                        Booking
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
              <p className="cl-eyebrow">FROM CITY STREETS TO OPEN TRAILS</p>
              <h2>Choose the ride that fits your time, ability and curiosity.</h2>
            </div>
            <div>
              <p>
                A successful cycling day starts with a route that fits the
                group. Consider riding style, elevation, surface, traffic
                exposure and how much time is available after transfers. For
                multi-day trips, the plan also needs to consider accommodation,
                daily stages, recovery and the distances between regions. These
                details can be discussed before you choose an itinerary.
              </p>
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { tour: "Private Cycling Tour from Marrakech", request: "booking" } }}
              >
                Discuss Your Cycling Plans
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">WHERE TO RIDE</p>
              <h2>Explore cycling destinations from Marrakech</h2>
            </div>
            <p>
              Marrakech can be the starting point for short rides in the
              countryside or a longer journey towards the High Atlas and other
              regions. Explore the areas below and discuss which landscape best
              suits your riding style and available time.
            </p>
          </div>
          <div className="cl-region-grid">
            {destinations.map((destination) => (
              <article className="home-tour-card" key={destination.title}>
                <Link
                  className="home-tour-card__image"
                  href={destination.href}
                  aria-label={destination.title}
                >
                  <img
                    src={destination.image}
                    alt={destination.title}
                    loading="lazy"
                  />
                  <span className="home-tour-card__category">CYCLING DESTINATION</span>
                  <span className="home-tour-card__level">{destination.title}</span>
                </Link>
                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">
                    CYCLING FROM MARRAKECH · {destination.title}
                  </p>
                  <h3 className="home-tour-card__title">
                    <Link href={destination.href}>{destination.title}</Link>
                  </h3>
                  <p className="home-tour-card__description">{destination.text}</p>
                  <div className="home-tour-card__actions">
                    <Link
                      className="home-tour-card__button"
                      href={destination.href}
                    >
                      Explore Region
                    </Link>
                    <Link
                      className="home-tour-card__link"
                      href={destination.href}
                    >
                      Discover
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
              src="/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"
              alt="Cycling through mountain landscapes outside Marrakech"
              loading="lazy"
            />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">BEYOND THE CITY</p>
            <h2>Make space for Morocco's quieter roads, valleys and villages.</h2>
            <p>
              Starting from Marrakech gives you the option to combine the energy
              of the city with time outdoors. Beyond the urban centre, the
              landscape changes into open countryside, foothills and mountain
              valleys. Cycling lets you explore these transitions at ground
              level and choose a pace that leaves time to appreciate the places
              along the way.
            </p>
            <p>
              The best experience is not always the longest ride. A thoughtfully
              planned itinerary balances the cycling itself with transfer time,
              stops, terrain and the interests of your group. If you are planning
              a longer holiday, consider how riding days connect with overnight
              stays and the regions you want to discover.
            </p>
            <Link className="cl-button cl-button--dark" href="/about">
              Learn About Our Approach
            </Link>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">WHY PLAN WITH US</p>
                <h2>Local insight and practical planning for your Marrakech ride.</h2>
              </div>
              <p>
                Routes outside the city vary in terrain, traffic, elevation and
                travel time. Planning around your experience and expectations
                helps turn a cycling idea into a realistic day ride or a more
                extended journey.
              </p>
            </div>
            <div className="cl-why-grid">
              <article>
                <span>01</span>
                <h3>Choose your cycling style</h3>
                <p>Compare MTB, E-MTB, gravel and road options according to your bike, experience and preferred terrain.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Plan realistic distances</h3>
                <p>Allow for climbs, surfaces, breaks and transfers rather than choosing a route by distance alone.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Consider the practical details</h3>
                <p>Discuss equipment, start points, transport, accommodation and support before confirming the itinerary.</p>
              </article>
              <article>
                <span>04</span>
                <h3>Leave room to explore</h3>
                <p>Make time for landscapes, village stops and the experiences that make a journey more than a ride.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">PLAN YOUR RIDE</p>
              <h2>Three steps to plan a cycling tour from Marrakech.</h2>
            </div>
            <p>
              You do not need a complete route before getting in touch. Start
              with the basics, then discuss suitable options and the details that
              need to be confirmed for your dates.
            </p>
          </div>
          <div className="cl-steps">
            <article>
              <span>STEP 01</span>
              <h3>Share your preferences</h3>
              <p>Tell us your travel dates, group size, cycling discipline, riding level and available time.</p>
            </article>
            <article>
              <span>STEP 02</span>
              <h3>Choose an area and route</h3>
              <p>Discuss Marrakech countryside, Atlas foothills, Imlil, Agafay or a longer multi-region journey.</p>
            </article>
            <article>
              <span>STEP 03</span>
              <h3>Review the arrangements</h3>
              <p>Confirm route difficulty, equipment, transfers, accommodation and inclusions before travel.</p>
            </article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
              <h2>Cycling tours from Marrakech: FAQs</h2>
              <p>
                Read answers to common questions about ride types, destinations
                and planning. For a recommendation based on your dates and
                experience, send us your preferences and the kind of route you
                want to explore.
              </p>
              <Link className="cl-text-link" href="/contact">
                Ask us about your trip <span aria-hidden="true">↗</span>
              </Link>
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
            src="/images/cycling-holiday-trip-from-marrakech.jpg"
            alt="Cycling holiday beginning in Marrakech and exploring Morocco beyond the city"
            loading="lazy"
          />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR NEXT CYCLING ADVENTURE</p>
            <h2>Ready to ride beyond Marrakech?</h2>
            <p>
              Tell us when you are travelling, how you like to ride and which
              landscapes you want to discover. Start planning a cycling day or
              a longer Moroccan journey built around your time, group and riding
              preferences.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { tour: "Cycling Tours from Marrakech", request: "booking" } }}
              >
                Plan Your Ride
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
            <p>
              Guided mountain biking, E-MTB, gravel and road cycling experiences
              across Morocco. Discover the landscapes, trails and local culture
              at your own pace.
            </p>
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
            <Link href="/destinations/imlil-toubkal">Imlil &amp; Toubkal</Link>
            <Link href="/destinations/marrakech">Marrakech</Link>
            <Link href="/destinations/agafay-desert">Agafay Desert</Link>
            <Link href="/destinations">All Destinations</Link>
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