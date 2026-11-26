import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Gravel Bike Tour High Atlas Mountains Morocco | Gravel Cycling Adventures",
  description:
    "Discover the High Atlas Mountains by gravel bike. Explore scenic mountain roads, remote Berber villages, quiet valleys and unforgettable gravel cycling routes in Morocco.",
  alternates: {
    canonical: "/gravel-bike-tour-in-the-high-atlas-mountains",
  },
  openGraph: {
    title:
      "Gravel Bike Tour High Atlas Mountains Morocco | Mountain Bike Morocco",
    description:
      "Explore Morocco's High Atlas by gravel bike, riding mountain roads, remote valleys and traditional Berber villages on guided gravel cycling adventures.",
    url: "https://mountain-bike-morocco.com/gravel-bike-tour-in-the-high-atlas-mountains",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/gravel-bike-atlas-mountains.JPG",
        alt: "Gravel cycling adventure through the High Atlas Mountains of Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Gravel Bike Tour High Atlas Mountains Morocco | Mountain Bike Morocco",
    description:
      "Discover the High Atlas on a gravel bike, exploring mountain roads, Berber villages and spectacular Moroccan landscapes.",
    images: ["/images/gravel-bike-atlas-mountains.JPG"],
  },
};

const tours = [
  {
    number: "01",
    duration: "5 days",
    label: "HIGH ATLAS · GRAVEL ADVENTURE",
    destination: "IMLIL & HIGH ATLAS",
    title: "High Atlas Gravel Discovery",
    description:
      "Discover the mountain landscapes of Morocco on a five-day gravel cycling journey through the High Atlas. Ride quiet mountain roads, rural tracks and scenic valley routes, passing traditional Berber villages and spectacular mountain scenery. This journey combines rewarding riding with opportunities to experience the landscapes and culture of the Atlas.",
    image: "/images/gravel-bike-atlas-mountains.JPG",
    href: "/cycling-trips/gravel",
  },
  {
    number: "02",
    duration: "5 days",
    label: "ATLAS TO DESERT · GRAVEL JOURNEY",
    destination: "ATLAS & SOUTH MOROCCO",
    title: "Atlas to Desert Gravel Adventure",
    description:
      "Experience the changing landscapes of southern Morocco on a gravel cycling adventure connecting mountain scenery with drier desert regions. Ride through open countryside, traditional settlements and remote landscapes, enjoying a varied journey that combines challenging cycling with the discovery of Morocco beyond its main tourist routes.",
    image: "/images/gravel-desert-cycling-expedition.jpg",
    href: "/cycling-trips/gravel",
  },
  {
    number: "03",
    duration: "6 days",
    label: "MOUNTAIN ROADS · GRAVEL TOUR",
    destination: "HIGH ATLAS & VALLEYS",
    title: "Atlas Mountains Gravel Cycling Tour",
    description:
      "Explore the High Atlas at a relaxed but rewarding pace on a multi-day gravel cycling experience. Follow scenic mountain roads and quieter countryside routes through valleys, villages and changing landscapes. The itinerary can be adapted around your cycling experience, preferred daily distance and the type of terrain you enjoy.",
    image: "/images/gravel-adventure-bike-morocco.jpg",
    href: "/cycling-trips/gravel",
  },
  {
    number: "04",
    duration: "4 days",
    label: "MOROCCO · GRAVEL ESCAPE",
    destination: "MARRAKECH & ATLAS",
    title: "Marrakech to Atlas Gravel Escape",
    description:
      "Combine the atmosphere of Marrakech with the open roads and mountain scenery of the High Atlas. This shorter gravel cycling escape offers a chance to explore beyond the city, discovering quiet roads, rural landscapes and traditional villages along the way. A rewarding option for riders looking for a shorter cycling holiday in Morocco.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/cycling-trips/gravel",
  },
];

const destinations = [
  {
    title: "Imlil and Mount Toubkal",
    text:
      "Located beneath Mount Toubkal, Imlil is an excellent starting point for discovering the mountain landscapes of the High Atlas. The surrounding area offers scenic roads, village routes and challenging climbs through terraced fields and traditional Berber settlements. Gravel riders can enjoy dramatic mountain scenery and a close connection with local life.",
    image: "/images/gravel-bike-atlas-mountains.JPG",
    href: "/destinations/imlil",
  },
  {
    title: "High Atlas Mountains",
    text:
      "The High Atlas offers an exceptional setting for gravel cycling, with winding mountain roads, quiet paved routes and countryside tracks connecting remote valleys and traditional villages. The terrain varies with altitude and location, offering rewarding climbs, long descents and spectacular views across the mountains.",
    image: "/images/gravel-adventure-bike-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Ouirgane Valley",
    text:
      "Ouirgane offers a quieter mountain environment, with olive groves, traditional villages and open countryside surrounded by the foothills of the High Atlas. Its scenic roads and rural tracks create opportunities for enjoyable gravel cycling away from busier routes, with beautiful views throughout the valley.",
    image: "/images/gravel-cycling-holiday-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Agafay and Southern Landscapes",
    text:
      "Beyond the higher mountain valleys, the landscapes around Agafay and southern Morocco offer a different gravel cycling experience. Open terrain, dry countryside and rocky landscapes create opportunities to explore another side of Morocco. Routes should be selected according to weather, surface conditions and the experience of the group.",
    image: "/images/gravel-desert-cycling-expedition.jpg",
    href: "/destinations/agafay-desert",
  },
];

const faqs = [
  {
    question: "Is the High Atlas suitable for gravel cycling?",
    answer:
      "Yes. The High Atlas offers a varied environment for gravel cycling, with quiet mountain roads, countryside routes, rural tracks and challenging climbs. Riders can explore traditional villages, mountain valleys and spectacular landscapes. The best route depends on your preferred surface, cycling experience and fitness.",
  },
  {
    question: "Where are the best places for gravel cycling in the Atlas Mountains?",
    answer:
      "Imlil, the Toubkal region, Ouirgane and the wider High Atlas offer different possibilities for gravel riding. Each area has its own scenery, elevation and road conditions. A suitable itinerary can combine mountain roads, village routes and quieter countryside sections.",
  },
  {
    question: "Do I need previous gravel cycling experience?",
    answer:
      "Previous gravel cycling experience is useful, particularly for routes that include loose surfaces, steep climbs or uneven tracks. Confident road cyclists may enjoy routes based mainly on paved mountain roads. Your experience and comfort on different surfaces should be considered when planning the itinerary.",
  },
  {
    question: "What type of gravel bike should I bring?",
    answer:
      "A reliable gravel bike with suitable gearing, comfortable tyres and dependable brakes is recommended. Tyre width and tread should be selected according to the planned surfaces. For routes that include rougher tracks, a more robust setup may be appropriate. Discuss the itinerary before travelling so that your equipment can be checked.",
  },
  {
    question: "Are the Atlas gravel routes difficult?",
    answer:
      "Difficulty varies according to the route, elevation, distance and surface conditions. Some rides follow quiet paved mountain roads, while others include longer climbs, rougher tracks and more demanding terrain. Daily distances and elevation should be planned around the group's experience and fitness.",
  },
  {
    question: "When is the best time for a gravel bike tour in the High Atlas?",
    answer:
      "Spring and autumn are generally popular seasons for gravel cycling in the High Atlas because temperatures are often more comfortable. Conditions vary with altitude and weather. Higher mountain routes can be cold or affected by snow during winter, while lower areas can become hot during summer.",
  },
  {
    question: "Can beginners join a High Atlas gravel cycling tour?",
    answer:
      "Some routes may suit confident recreational cyclists who have basic experience riding longer distances. Other itineraries include sustained climbs, remote roads and rougher surfaces that require greater fitness and cycling confidence. It is important to discuss your experience before selecting a route.",
  },
  {
    question: "Can I combine gravel cycling with cultural experiences?",
    answer:
      "Yes. A gravel cycling journey through the Atlas can include traditional Berber villages, mountain communities, local food and scenic stops. Depending on the itinerary, there may be opportunities to enjoy mint tea, discover village life and experience the region beyond the riding routes.",
  },
  {
    question: "Can I book a private guided gravel bike tour?",
    answer:
      "You can enquire about a private gravel cycling experience for yourself, a couple, friends or a group. Share your preferred dates, group size, cycling experience, fitness and preferred terrain. These details help establish a suitable route and the practical support arrangements for your trip.",
  },
  {
    question: "What should I check before booking a gravel tour?",
    answer:
      "Ask about the daily riding distance, elevation gain, road surfaces and route difficulty. Confirm bike hire, accommodation, transfers, luggage support and assistance arrangements. It is also useful to understand what is included in the price and how routes may be adjusted if weather or road conditions change.",
  },
];

export default function GravelBikeTourHighAtlasPage() {
  return (
    <>
      <main className="cycling-listing gravel-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/gravel-bike-atlas-mountains.JPG"
            alt="Gravel cycling through the spectacular High Atlas Mountains of Morocco"
            fetchPriority="high"
          />

          <div className="cl-hero__shade" />

          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">
              GRAVEL CYCLING · HIGH ATLAS · MOROCCO
            </p>

            <h1>Gravel Bike Tour in the High Atlas Mountains</h1>

            <p className="cl-hero__intro">
              Discover the High Atlas on a gravel bike, exploring
              quiet mountain roads, remote Berber villages and
              spectacular valleys beneath Mount Toubkal. Ride
              through the landscapes around Imlil, Ouirgane and
              the wider Atlas region, with rewarding climbs,
              scenic descents and changing mountain scenery.
              Whether you are looking for a short gravel escape
              or a longer cycling journey, find an experience
              shaped around your riding level, preferred terrain
              and ambitions.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your Gravel Adventure
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="#high-atlas-gravel-tours"
              >
                Explore Gravel Tours
              </Link>
            </div>

            <div className="cl-hero__meta">
              <span>GRAVEL CYCLING ADVENTURES</span>
              <span>HIGH ATLAS & BERBER VALLEYS</span>
              <span>GUIDED GRAVEL TOURS</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">
              EXPLORE THE HIGH ATLAS
            </p>

            <h2>
              Discover Morocco's mountain landscapes on two wheels.
            </h2>

            <img
              src="/images/gravel-adventure-bike-morocco.jpg"
              alt="Gravel bike exploring the mountain roads of Morocco"
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
              The High Atlas offers a distinctive setting for
              gravel cycling in Morocco. Winding mountain roads,
              quiet countryside routes, traditional villages
              and dramatic landscapes create a varied environment
              for riders who want to explore beyond the usual
              cycling destinations. The region combines rewarding
              climbs with long descents and spectacular scenery.
            </p>

            <p>
              Around Imlil and Mount Toubkal, roads wind through
              terraced fields, mountain villages and changing
              landscapes. Riding through these valleys offers
              a different perspective on the High Atlas, with
              views of the surrounding mountains and opportunities
              to discover local communities along the way.
            </p>

            <p>
              Different areas of the Atlas offer different
              riding experiences. Some routes follow smooth
              mountain roads and quiet secondary roads, while
              others include rougher countryside tracks and
              gravel sections. Elevation, weather, surface
              conditions and route distance all influence
              which rides are suitable.
            </p>

            <p>
              Whether you want a short guided ride or a longer
              gravel cycling holiday, a well-planned itinerary
              should balance riding time, elevation, daily
              distance and opportunities to enjoy the landscape
              and local culture along the way.
            </p>

            <Link className="cl-text-link" href="/cycling-trips/gravel">
              Explore all gravel tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="high-atlas-gravel-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  CHOOSE YOUR GRAVEL EXPERIENCE
                </p>

                <h2>
                  Guided gravel bike tours in the High Atlas Mountains
                </h2>
              </div>

              <p>
                Explore gravel cycling experiences ranging from
                shorter mountain escapes to longer adventures
                through the High Atlas and southern Morocco.
                Each itinerary has different considerations,
                including daily distance, elevation, road
                surfaces and support arrangements. Compare
                the options and enquire about the experience
                that best matches your riding.
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
                      GRAVEL TOUR · {tour.destination}
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
                  MORE GRAVEL ADVENTURES
                </p>

                <h2>
                  Explore more gravel cycling tours in Morocco
                </h2>
              </div>

              <p>
                Looking for a different destination or riding
                experience? Explore the full gravel collection
                for more guided routes, private itineraries
                and multi-day adventures across Morocco.
                Compare the available options and contact us
                to discuss a route around your dates, experience
                and group requirements.
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
                MORE ROADS. MORE DISCOVERY. MORE ATLAS.
              </p>

              <h2>
                Explore further through Morocco's mountain landscapes.
              </h2>
            </div>

            <div>
              <p>
                Gravel cycling in the High Atlas offers a
                rewarding way to discover Morocco beyond its
                main roads and busy destinations. Quiet mountain
                routes, countryside tracks and traditional
                villages create opportunities to experience
                the region at your own pace. A suitable
                itinerary can combine challenging climbs
                with scenic descents and time to enjoy the
                surrounding landscapes.
              </p>

              <p>
                Route planning is an important part of a
                successful gravel journey. Daily distance,
                elevation, road surfaces, weather and the
                availability of food and water all influence
                how much riding can comfortably be planned.
                Remote mountain stages need particular
                attention to practical support and logistics.
              </p>

              <p>
                Before choosing a tour, discuss the expected
                riding distance, elevation, surface conditions
                and your bike setup. These details help
                establish whether the proposed routes are
                appropriate for your experience and equipment.
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
                Explore gravel cycling destinations around the Atlas.
              </h2>
            </div>

            <p>
              From the mountain villages around Imlil to the
              wider High Atlas, Ouirgane Valley and the dry
              landscapes towards Agafay, the region offers
              different environments to explore by gravel bike.
              Each area has its own character, routes and
              riding conditions. The right destination
              depends on your experience, preferred terrain
              and available time.
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
                    GRAVEL · {destination.title}
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
              alt="Gravel cycling holiday through the mountain landscapes of Morocco"
              loading="lazy"
            />
          </div>

          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">
              MORE THAN THE RIDE
            </p>

            <h2>
              Experience the mountain culture beyond the roads.
            </h2>

            <p>
              A gravel cycling journey in the Atlas is about
              more than the riding. Routes pass through
              mountain villages, cultivated terraces and
              dramatic valleys, offering opportunities to
              experience the region and its communities
              along the way. Time away from the bike can
              be just as memorable as exploring the roads.
            </p>

            <p>
              Around Imlil and the Toubkal region, traditional
              settlements sit within a landscape of steep
              mountain slopes and changing elevations.
              Cycling through these valleys offers a
              different perspective on the High Atlas,
              with views and surroundings that change
              throughout the journey.
            </p>

            <p>
              The variety of mountain roads and countryside
              routes makes it possible to combine rewarding
              riding with opportunities to discover the
              different landscapes along the way. The best
              itinerary balances cycling ambitions with
              time to enjoy village stops, viewpoints
              and local experiences.
            </p>

            <p>
              If scenery and local culture are important
              to your trip, ask how much time the itinerary
              allows for village visits, mint tea stops
              and meals. The schedule should balance the
              riding objectives with the experience of
              travelling through the mountains.
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
                  What to consider when planning a High Atlas gravel adventure.
                </h2>
              </div>

              <p>
                A successful gravel cycling trip balances
                riding ambitions with practical details.
                Clear conversations about experience,
                equipment and daily distances help shape
                a journey that suits your group. Before
                choosing a tour, make sure you understand
                the expected routes, road surfaces and
                support arrangements needed for your
                preferred type of riding.
              </p>
            </div>

            <div className="cl-why-grid">
              <article>
                <span>01</span>

                <h3>Routes suited to your ability</h3>

                <p>
                  Discuss your cycling experience, fitness,
                  confidence on different surfaces and
                  preferred route difficulty when considering
                  gravel tour options.
                </p>
              </article>

              <article>
                <span>02</span>

                <h3>Bike and equipment</h3>

                <p>
                  Consider your bike setup, tyre width,
                  gearing, brakes, repair equipment and
                  luggage requirements when preparing
                  for mountain routes.
                </p>
              </article>

              <article>
                <span>03</span>

                <h3>Practical logistics</h3>

                <p>
                  Plan around water, food, accommodation,
                  transfers, luggage support, repairs
                  and the assistance needed for longer
                  mountain stages.
                </p>
              </article>

              <article>
                <span>04</span>

                <h3>Time to discover the Atlas</h3>

                <p>
                  Make space for mountain views, village
                  life, local food and the landscapes
                  beyond the cycling routes themselves.
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
                How to organise your High Atlas gravel bike tour.
              </h2>
            </div>

            <p>
              You do not need to have every detail decided
              before making an enquiry. Start with your
              dates, riding experience and group requirements,
              then discuss which routes and destinations
              might suit your plans. Sharing your preferred
              terrain, fitness and bike setup helps establish
              the practical details of your adventure.
            </p>
          </div>

          <div className="cl-steps">
            <article>
              <span>STEP 01</span>

              <h3>Tell us about your riding</h3>

              <p>
                Share your experience, fitness, group size,
                bike setup and the type of routes you enjoy.
                Let us know whether you are comfortable
                with mountain climbs, gravel tracks and
                longer distances.
              </p>
            </article>

            <article>
              <span>STEP 02</span>

              <h3>Discuss the routes and terrain</h3>

              <p>
                Compare destinations, riding distances,
                elevation and seasonal conditions. Ask
                about the expected road surfaces, daily
                stages and route difficulty.
              </p>
            </article>

            <article>
              <span>STEP 03</span>

              <h3>Review the practical details</h3>

              <p>
                Discuss the itinerary, bike requirements,
                transfers, accommodation and support
                before making final arrangements. Confirm
                what is included, what is not included
                and how changes to the route would be handled.
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
                Gravel cycling in the High Atlas: frequently asked questions
              </h2>

              <p>
                Find answers to common questions about High
                Atlas gravel tours, route difficulty, bike
                setup, road surfaces, seasons and preparing
                for your cycling holiday. Understanding the
                routes and practical arrangements can help
                you choose an experience that suits your
                riding ability. For advice about a particular
                journey, contact us with your dates and
                cycling preferences.
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
            src="/images/south-morocco-cycling-expedition.jpg"
            alt="Gravel cycling adventure through the mountain landscapes of Morocco"
            loading="lazy"
          />

          <div className="cl-final-cta__overlay" />

          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">
              YOUR NEXT GRAVEL ADVENTURE
            </p>

            <h2>
              Ready to explore Morocco's High Atlas by gravel bike?
            </h2>

            <p>
              Tell us when you would like to travel, what
              kind of routes you enjoy and your cycling
              experience. Share your group size, preferred
              riding level and bike requirements so you
              can start discussing destinations, daily
              distances and practical details for your
              High Atlas gravel cycling holiday.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your Gravel Adventure
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