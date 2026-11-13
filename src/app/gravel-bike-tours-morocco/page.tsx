import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gravel Bike Tours Morocco | Atlas & Desert Gravel Adventures",
  description:
    "Discover guided gravel bike tours in Morocco. Ride the High Atlas, explore rural valleys and discover Agafay and southern landscapes on private day rides and multi-day gravel cycling holidays.",
  alternates: {
    canonical: "/gravel-bike-tours-morocco",
  },
  openGraph: {
    title: "Gravel Bike Tours Morocco | Mountain Bike Morocco",
    description:
      "Explore Morocco by gravel bike on guided rides through the Atlas Mountains, rural valleys, Agafay and southern landscapes. Discover day rides and private multi-day gravel holidays.",
    url: "https://mountain-bike-morocco.com/gravel-bike-tours-morocco",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/gravel-adventure-bike-morocco.jpg",
        alt: "Gravel cycling adventure through the landscapes of Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gravel Bike Tours Morocco | Mountain Bike Morocco",
    description:
      "Discover guided gravel cycling adventures across Morocco, from Atlas Mountain passes to remote valleys and southern landscapes.",
    images: ["/images/gravel-adventure-bike-morocco.jpg"],
  },
};

const tours = [
  {
    number: "01",
    duration: "4 days",
    label: "HIGH ATLAS · MOUNTAIN ROADS",
    destination: "HIGH ATLAS MOUNTAINS",
    title: "Atlas Mountains Gravel Ride",
    description:
      "Explore the changing landscapes of the High Atlas on a gravel cycling journey that can combine paved mountain roads, quieter rural tracks and views across traditional valleys. Route choice depends on road surface, elevation, distance and your experience on mixed terrain. Share your preferred pace and daily mileage so the itinerary can balance rewarding climbs with time to enjoy the scenery and villages along the way.",
    image: "/images/gravel-bike-atlas-mountains.JPG",
    href: "/cycling-trips/trip/atlas-mountains-gravel-ride-4-day",
  },
  {
    number: "02",
    duration: "5 days",
    label: "ATLAS TO SOUTHERN MOROCCO",
    destination: "ATLAS & SOUTHERN MOROCCO",
    title: "Atlas to Desert Gravel Adventure",
    description:
      "Connect mountain scenery with the drier landscapes of southern Morocco on a gravel journey planned around the regions you want to explore. These longer routes require realistic planning for transfers, surface changes, elevation, water and accommodation between stages. The itinerary should reflect your travel dates, riding level and available time rather than trying to cover too much distance each day.",
    image: "/images/gravel-desert-cycling-expedition.jpg",
    href: "/cycling-trips/trip/atlas-to-desert-gravel-adventure-5-day",
  },
  {
    number: "03",
    duration: "Day Tour",
    label: "MARRAKECH · COUNTRYSIDE RIDING",
    destination: "MARRAKECH & FOOTHILLS",
    title: "Gravel Cycling from Marrakech",
    description:
      "Use Marrakech as a starting point for a gravel ride into the surrounding countryside and foothills. Depending on the route, a day can include quiet roads, rural tracks and views towards the Atlas Mountains, with time to stop and experience the area beyond the city. Start points, transfers and surface conditions vary, so discuss your preferred distance and the bike you plan to use before choosing a route.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/cycling-trips/trip/gravel-cycling-from-marrakech-1-day",
  },
  {
    number: "04",
    duration: "4 days",
    label: "ANTI-ATLAS · REMOTE LANDSCAPES",
    destination: "ANTI-ATLAS MOUNTAINS",
    title: "Anti-Atlas Gravel Discovery",
    description:
      "Discover the rugged character of the Anti-Atlas through quiet roads, dry valleys, rocky hills and small settlements. The region can suit riders looking for a less familiar cycling landscape, but distances between services and the condition of remote tracks need careful consideration. A suitable plan takes account of temperature, water, tyre choice, repair equipment and the pace your group wants to maintain.",
    image: "/images/gravel-adventure-bike-morocco.jpg",
    href: "/cycling-trips/trip/anti-atlas-gravel-discovery-4-day",
  },
];

const destinations = [
  {
    title: "High Atlas Mountains",
    text:
      "Mountain roads and selected tracks lead through changing elevations, terraced valleys and traditional settlements. Route planning should consider gradients, surface, weather and the riding experience of your group. The High Atlas can offer a rewarding setting for riders looking for mountain scenery and varied terrain.",
    image: "/images/gravel-bike-atlas-mountains.JPG",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Marrakech and the Foothills",
    text:
      "The countryside around Marrakech can provide a starting point for shorter gravel outings and longer journeys towards the Atlas. Confirm start locations, transfers, surfaces and traffic conditions when planning your ride. It is an option for riders who want to combine a city stay with time on quieter roads and rural tracks.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/destinations/marrakech",
  },
  {
    title: "Agafay and Open Terrain",
    text:
      "Agafay offers open views and rocky terrain on the edge of the city. Temperature, water, tyre choice and the exact condition of tracks are important considerations for an enjoyable ride. Its dry, open landscape provides a different experience from the higher Atlas valleys.",
    image: "/images/Agafay-desert-morocco.jpg",
    href: "/destinations/agafay-desert",
  },
  {
    title: "Southern Morocco",
    text:
      "The south offers wide horizons, dry valleys and routes that can connect remote communities and distinctive landscapes. Longer journeys need practical staging, water planning and reliable logistics. Consider the season, daily distances and transfers when planning a multi-day expedition.",
    image: "/images/south-morocco-cycling-expedition.jpg",
    href: "/destinations",
  },
];

const faqs = [
  {
    question: "What is gravel cycling like in Morocco?",
    answer:
      "Gravel cycling can combine quiet paved roads, compact dirt, rocky tracks and rural routes, depending on the region. Conditions vary, so the planned route should fit your bike, tyres, handling skills and experience. Discuss the intended surface and daily distance before confirming your trip.",
  },
  {
    question: "Where can I go on a gravel bike tour in Morocco?",
    answer:
      "The High Atlas Mountains, the countryside around Marrakech, Agafay and the southern regions are among the areas to consider. The Anti-Atlas also offers a different landscape for riders interested in quieter roads and remote valleys. The most suitable destination depends on your dates, riding experience, preferred terrain and available time.",
  },
  {
    question: "Do I need to be an experienced cyclist?",
    answer:
      "The experience required depends on the route, distance, elevation and surface. Some shorter rides may suit recreational cyclists, while remote or mountainous itineraries can require stronger fitness, confident bike handling and experience with longer days. Share your usual riding distance and terrain preferences so the route can be considered appropriately.",
  },
  {
    question: "What type of gravel bike should I bring?",
    answer:
      "The best setup depends on the specific route and its surfaces. Tyre width, gearing, braking, carrying capacity and the condition of the bike all matter, especially on rougher tracks. Tell us what bike you ride and the terrain you prefer so equipment needs can be discussed against the proposed itinerary.",
  },
  {
    question: "When is the best time for a gravel cycling holiday?",
    answer:
      "Spring and autumn are often comfortable periods for many Moroccan regions, but conditions vary with altitude and location. Mountain routes can be cold or affected by snow, while lower and desert-edge areas can become very hot in summer. Check the expected conditions for your route and dates before confirming travel.",
  },
  {
    question: "What should I carry on a gravel ride in Morocco?",
    answer:
      "Carry suitable water capacity, sun protection, basic repair tools, spare tubes or a tubeless repair kit, a pump or inflator and essential personal items. Depending on the season and elevation, extra layers or rain protection may be needed. Remote routes require particular attention to navigation, food, water and mechanical preparation.",
  },
  {
    question: "Can I book a private gravel tour?",
    answer:
      "You can enquire about a private route for a couple, friends, club or group. Useful details include dates, group size, preferred daily distance, bike setup, fitness and accommodation expectations. Those details help shape a practical itinerary and identify any transfers or support arrangements that may be needed.",
  },
  {
    question: "Can a gravel trip combine several regions?",
    answer:
      "A multi-region journey may be possible, but driving time between areas needs to be balanced against riding days and recovery. The right plan depends on your total time, desired distances, road conditions and the areas you want to visit. An itinerary should avoid adding more regions than can be enjoyed comfortably.",
  },
  {
    question: "Are gravel routes in Morocco suitable for beginners?",
    answer:
      "Some shorter routes on suitable roads and compact tracks may be appropriate for riders with basic cycling experience. More remote or mountainous routes can involve longer distances, sustained climbing, rough surfaces and limited services. Discuss your experience honestly so that the proposed terrain and daily stages can be considered before choosing a tour.",
  },
  {
    question: "What should I check before booking a gravel tour?",
    answer:
      "Ask for the proposed daily distances, elevation gain, terrain description and expected road surfaces. Confirm the bike requirements, accommodation, transfers, luggage arrangements and mechanical support. It is also useful to understand what is included in the price and how changes to the route would be handled if weather or riding conditions require an adjustment.",
  },
];

export default function GravelBikeToursMoroccoPage() {
  return (
    <>
      <main className="cycling-listing gravel-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/gravel-adventure-bike-morocco.jpg"
            alt="Gravel cyclist exploring the landscapes of Morocco"
            fetchPriority="high"
          />

          <div className="cl-hero__shade" />

          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">
              GRAVEL BIKE TOURS · ATLAS · MOROCCO
            </p>

            <h1>Gravel Bike Tours in Morocco</h1>

            <p className="cl-hero__intro">
              Discover Morocco by gravel bike, following quiet
              mountain roads, rural tracks and open landscapes
              from the High Atlas to the south. Explore guided
              day rides and multi-day cycling adventures planned
              around your riding experience, preferred distance
              and the kind of terrain you want to discover.
              Whether you are looking for a short escape from
              Marrakech or a longer journey through Morocco,
              start with a route that fits your ambitions and
              the practical details of the ride.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your Gravel Tour
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="#morocco-gravel-tours"
              >
                Explore Gravel Tours
              </Link>
            </div>

            <div className="cl-hero__meta">
              <span>MOUNTAIN ROADS & RURAL TRACKS</span>
              <span>DAY RIDES & MULTI-DAY TOURS</span>
              <span>ATLAS & SOUTHERN MOROCCO</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">
              BEYOND THE BEATEN ROAD
            </p>

            <h2>
              Discover Morocco's landscapes one gravel road at a time.
            </h2>

            <img
              src="/images/gravel-bike-atlas-mountains.JPG"
              alt="Gravel cycling through the mountain landscapes of Morocco's High Atlas"
              loading="lazy"
              style={{
                display: "block",
                width: "100%",
                aspectRatio: "16 / 9",
                objectFit: "cover",
                marginTop: "24px",
              }}
            />
          </div>

          <div className="cl-intro__copy">
            <p>
              Gravel cycling offers a flexible way to experience
              the contrasts of Morocco. A single journey can pass
              through farming landscapes, traditional villages,
              mountain foothills and dry open terrain. Quiet roads
              and selected tracks provide the opportunity to travel
              beyond the busiest routes while experiencing the
              changing scenery at a pace that leaves room for
              discovery.
            </p>

            <p>
              Each region has its own demands. Gradients, surface
              quality, distance between services, weather and
              transfers can all affect the ride. Your preferred
              daily mileage, bike setup, fitness and confidence
              on rough terrain should help shape the itinerary.
              On remote stages, planning for water, navigation
              and basic repairs is particularly important.
            </p>

            <p>
              From the mountain roads of the High Atlas to the
              rugged landscapes of the Anti-Atlas and the open
              terrain around Agafay, Morocco offers different
              environments to explore by gravel bike. A well-planned
              route balances the riding with time to enjoy the
              scenery and experience the places along the way.
            </p>

            <p>
              Whether you want a short ride near Marrakech or a
              multi-day trip through mountain and southern
              landscapes, the aim is to choose a route that feels
              rewarding and realistic for your group. Daily
              distances, elevation, road surfaces and support
              arrangements should all be considered before departure.
            </p>

            <Link className="cl-text-link" href="/cycling-trips/gravel">
              Explore all gravel cycling tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="morocco-gravel-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  CHOOSE YOUR GRAVEL EXPERIENCE
                </p>

                <h2>
                  Guided gravel bike tours and cycling holidays in Morocco
                </h2>
              </div>

              <p>
                Discover gravel experiences ranging from day rides
                near Marrakech to multi-day journeys through the
                Atlas and southern landscapes. Each itinerary has
                different practical considerations, including
                riding distance, terrain, elevation, accommodation
                and transfers. Explore the options and ask for the
                details that matter to your trip.
              </p>
            </div>

            <div className="cl-tour-grid">
              {tours.map((tour) => (
                <article className="home-tour-card" key={tour.number}>
                  <Link
                    className="home-tour-card__image"
                    href={tour.href}
                    aria-label={`More details about ${tour.title}`}
                  >
                    <img
                      src={tour.image}
                      alt={tour.title}
                      loading="lazy"
                    />
                    <span className="home-tour-card__category">
                      {tour.label}
                    </span>
                    <span className="home-tour-card__level">
                      {tour.destination}
                    </span>
                  </Link>

                  <div className="home-tour-card__body">
                    <p className="home-tour-card__eyebrow">
                      GRAVEL · {tour.destination}
                    </p>

                    <h3 className="home-tour-card__title">
                      <Link href={tour.href}>{tour.title}</Link>
                    </h3>

                    <p className="home-tour-card__description">
                      {tour.description}
                    </p>

                    <div className="home-tour-card__meta">
                      <span className="home-tour-card__meta-item">
                        <span
                          className="home-tour-card__meta-icon"
                          aria-hidden="true"
                        >
                          ◷
                        </span>
                        {tour.duration}
                      </span>
                    </div>

                    <div className="home-tour-card__actions">
                      <Link
                        className="home-tour-card__button"
                        href={tour.href}
                      >
                        More Details
                      </Link>
                      <Link
                        className="home-tour-card__link"
                        href={{
                          pathname: "/contact",
                          query: {
                            tour: tour.title,
                            request: "booking",
                          },
                        }}
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  MORE GRAVEL ITINERARIES
                </p>

                <h2>
                  Explore the full range of gravel cycling tours
                </h2>
              </div>

              <p>
                Looking for a different duration or destination?
                Explore the complete gravel collection for more
                routes, private itineraries and multi-day cycling
                experiences across Morocco. Compare the available
                options and contact us if you would like to discuss
                a route around your dates, experience and group
                requirements.
              </p>
            </div>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--dark"
                href="/cycling-trips/gravel"
              >
                View All Gravel Tours
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-dark-band">
          <div className="cl-wrap cl-dark-band__inner">
            <div>
              <p className="cl-eyebrow">
                YOUR BIKE. YOUR PACE. YOUR ROUTE.
              </p>

              <h2>
                Plan your gravel adventure around the terrain.
              </h2>
            </div>

            <div>
              <p>
                Gravel routes can change quickly from smooth roads
                to stony or uneven tracks. A well-considered
                itinerary matches the surface to your equipment,
                keeps daily distances realistic and allows for
                water, food, repairs and recovery. The right bike
                setup also matters, particularly when a route
                includes rougher tracks or sustained mountain
                climbs.
              </p>

              <p>
                For multi-day rides, transfer times and accommodation
                need to fit the journey. Longer or more remote
                stages require careful planning around services,
                water availability, mechanical support and
                seasonal conditions. A realistic route allows
                enough time to enjoy the ride without making
                every day unnecessarily demanding.
              </p>

              <p>
                Before choosing a tour, discuss the expected
                surfaces, daily mileage, elevation and the
                equipment you intend to use. These details help
                establish whether a route is appropriate for
                your experience and the type of gravel bike
                you plan to ride.
              </p>

              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Discuss Your Gravel Requirements
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">
                WHERE TO RIDE
              </p>

              <h2>
                Discover gravel cycling destinations across Morocco.
              </h2>
            </div>

            <p>
              From the High Atlas to the countryside around
              Marrakech and the open terrain of Agafay, Morocco
              offers different environments to explore by gravel
              bike. Mountain roads, valley tracks and drier
              southern landscapes each have their own riding
              conditions. The right destination depends on
              your riding preferences, available time, equipment
              and seasonal conditions.
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
                  <span className="home-tour-card__category">
                    GRAVEL DESTINATION
                  </span>
                  <span className="home-tour-card__level">
                    {destination.title}
                  </span>
                </Link>

                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">
                    GRAVEL CYCLING · {destination.title}
                  </p>

                  <h3 className="home-tour-card__title">
                    <Link href={destination.href}>
                      {destination.title}
                    </Link>
                  </h3>

                  <p className="home-tour-card__description">
                    {destination.text}
                  </p>

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
              src="/images/gravel-cycling-holiday-morocco.jpg"
              alt="Gravel cycling holiday through Morocco's varied landscapes"
              loading="lazy"
            />
          </div>

          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">
              MORE THAN THE MILEAGE
            </p>

            <h2>
              Leave room to experience the places between the roads.
            </h2>

            <p>
              A memorable gravel trip is not only about distance.
              Rural tracks connect landscapes and communities,
              and there is value in having time to stop for views,
              explore a village or enjoy a break between riding
              stages. Morocco's changing terrain gives each region
              its own character, from mountain valleys to dry
              open horizons.
            </p>

            <p>
              In the Atlas Mountains, roads and tracks wind through
              valleys, cultivated land and traditional settlements.
              Further south, the landscape becomes drier and more
              open, creating a different kind of cycling experience.
              Each region offers its own atmosphere and reasons
              to take time away from the bike.
            </p>

            <p>
              The best itinerary balances ambition with practicality.
              Terrain, gradients, weather, access to services and
              time spent transferring between regions all shape
              how much riding fits comfortably into a day. A
              considered plan makes space for both the ride and
              the experience of travelling through the country.
            </p>

            <p>
              If local culture and scenery are important to your
              journey, ask how much time the itinerary allows for
              village stops, meals and viewpoints. The daily
              schedule should balance the riding objectives with
              enough time to enjoy the places through which you
              travel.
            </p>

            <Link
              className="cl-button cl-button--dark"
              href="/about"
            >
              Learn About Our Approach
            </Link>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">
                  PLAN WITH CONFIDENCE
                </p>

                <h2>
                  What to consider when planning a gravel cycling holiday.
                </h2>
              </div>

              <p>
                A successful gravel trip balances riding ambition
                with practical details. Clear conversations about
                experience, terrain, equipment and daily distances
                help shape a journey that suits your group. Before
                choosing a tour, make sure you understand the
                route and the support arrangements needed for
                the type of riding you want to enjoy.
              </p>
            </div>

            <div className="cl-why-grid">
              <article>
                <span>01</span>

                <h3>Routes suited to your riding</h3>

                <p>
                  Discuss your preferred daily distance, climbing,
                  bike handling and comfort on mixed surfaces
                  when considering route options.
                </p>
              </article>

              <article>
                <span>02</span>

                <h3>Surface-aware planning</h3>

                <p>
                  Choose suitable routes and equipment with
                  consideration for rough tracks, loose sections,
                  road conditions and seasonal weather.
                </p>
              </article>

              <article>
                <span>03</span>

                <h3>Practical logistics</h3>

                <p>
                  Plan around water, food, repairs, accommodation,
                  transfers and the support needed for longer
                  or more remote stages.
                </p>
              </article>

              <article>
                <span>04</span>

                <h3>Time to discover Morocco</h3>

                <p>
                  Make space for mountain views, village life,
                  local food and the changing landscapes beyond
                  the route itself.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">
                START PLANNING
              </p>

              <h2>
                How to organise your gravel cycling tour in Morocco.
              </h2>
            </div>

            <p>
              You do not need to have every detail decided before
              making an enquiry. Start with your dates, riding
              preferences and group requirements, then discuss
              which regions and route options might suit your
              plans. Sharing your experience, preferred daily
              distance and bike setup helps establish the
              practical details.
            </p>
          </div>

          <div className="cl-steps">
            <article>
              <span>STEP 01</span>

              <h3>Tell us about your riding</h3>

              <p>
                Share your experience, fitness, group size,
                preferred bike setup and the type of terrain
                you enjoy. Let us know your usual daily
                distance and whether you are comfortable
                riding on rougher tracks.
              </p>
            </article>

            <article>
              <span>STEP 02</span>

              <h3>Discuss the route and terrain</h3>

              <p>
                Compare destinations, distances, elevation,
                road surfaces and seasonal conditions. Ask
                for the proposed terrain and daily stages
                so you can understand the effort involved.
              </p>
            </article>

            <article>
              <span>STEP 03</span>

              <h3>Review the practical details</h3>

              <p>
                Discuss the itinerary, equipment, transfers,
                accommodation, meals and support before making
                final arrangements. Confirm what is included,
                what is not included and how changes to the
                route would be handled.
              </p>
            </article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">
                GOOD TO KNOW
              </p>

              <h2>
                Gravel bike tours in Morocco: frequently asked questions
              </h2>

              <p>
                Find answers to common questions about gravel
                terrain, bike setup, seasons, destinations and
                preparing for a cycling holiday. Understanding
                the route and its practical arrangements can
                help you choose a trip that suits your experience.
                For advice about a particular journey, contact
                us with your travel dates and riding preferences.
              </p>

              <Link className="cl-text-link" href="/contact">
                Ask us about your gravel tour <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="cl-faq-list">
              {faqs.map((faq, index) => (
                <details
                  className="cl-faq-item"
                  key={faq.question}
                  open={index === 0}
                >
                  <summary>
                    {faq.question}
                    <span aria-hidden="true">+</span>
                  </summary>

                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cl-final-cta">
          <img
            src="/images/gravel-desert-cycling-expedition.jpg"
            alt="Open landscapes along a gravel cycling route in Morocco"
            loading="lazy"
          />

          <div className="cl-final-cta__overlay" />

          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">
              YOUR NEXT GRAVEL ADVENTURE
            </p>

            <h2>
              Ready to explore Morocco beyond the beaten road?
            </h2>

            <p>
              Tell us when you would like to travel, what kind
              of terrain you enjoy and how far you prefer to
              ride each day. Share your experience, group size
              and bike setup so you can start discussing gravel
              routes, destinations and practical arrangements
              for your Morocco cycling holiday.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your Gravel Holiday
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="/cycling-trips/gravel"
              >
                View All Gravel Tours
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer cycling-listing__footer">
        <div className="page-width footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <img
                className="brand__logo"
                src="/images/mountain-bike-morocco-logo.png"
                alt="Mountain Bike Morocco"
              />

              <span>
                MOUNTAIN BIKE <em>MOROCCO</em>
              </span>
            </Link>

            <p>
              Guided mountain biking, E-MTB, gravel and road cycling
              experiences across Morocco. Discover the landscapes,
              trails and local culture at your own pace.
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
            <Link href="/destinations/imlil">Imlil &amp; Toubkal</Link>
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
          <span>© {2026} Mountain Bike Morocco</span>
          <span>Morocco cycling adventures, thoughtfully planned.</span>
        </div>
      </footer>
    </>
  );
}