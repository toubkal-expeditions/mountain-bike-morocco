import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Bike Touring Atlas of Marrakech | E-MTB Tours Morocco",
  description:
    "Discover the Atlas Mountains by electric mountain bike from Marrakech. Explore guided E-MTB tours, traditional Berber villages, mountain valleys and scenic routes around Imlil and Toubkal.",
  alternates: {
    canonical: "/e-bike-touring-atlas-of-marrakech",
  },
  openGraph: {
    title: "E-Bike Touring Atlas of Marrakech | Mountain Bike Morocco",
    description:
      "Explore the High Atlas by electric mountain bike. Discover guided E-MTB day rides and multi-day adventures from Marrakech through Imlil and the surrounding valleys.",
    url: "https://mountain-bike-morocco.com/e-bike-touring-atlas-of-marrakech",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/imlil-cycling-adventure-tour.jpeg",
        alt: "Electric mountain biking adventure in the Atlas Mountains near Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Bike Touring Atlas of Marrakech | Mountain Bike Morocco",
    description:
      "Ride the Atlas Mountains by electric mountain bike, exploring mountain passes, Berber villages and beautiful valleys from Marrakech.",
    images: ["/images/imlil-cycling-adventure-tour.jpeg"],
  },
};

const tours = [
  {
    number: "01",
    duration: "4 days",
    label: "HIGH ATLAS · E-MTB ADVENTURE",
    destination: "HIGH ATLAS MOUNTAINS",
    title: "Atlas Mountains E-Bike Tour",
    description:
      "Explore the High Atlas by electric mountain bike on a guided journey through mountain valleys, traditional villages and scenic mountain tracks. Electric assistance makes sustained climbs more accessible while preserving the experience of riding through the mountains. The itinerary can be adapted around your fitness, preferred riding pace and the terrain you want to discover.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/cycling-trips/trip/atlas-mountains-e-bike-4-day",
  },
  {
    number: "02",
    duration: "Day Tour",
    label: "MARRAKECH · ATLAS DAY RIDE",
    destination: "IMLIL & TOUBKAL",
    title: "E-Bike Day Tour from Marrakech",
    description:
      "Leave Marrakech behind and discover the mountain scenery around Imlil on an electric mountain bike. Enjoy assisted climbs, mountain tracks and views across traditional villages and valleys beneath Mount Toubkal. A guided day ride can combine time on the bike with stops to enjoy the scenery and experience the local mountain culture.",
    image: "/images/imlil-cycling-adventure-tour.jpeg",
    href: "/cycling-trips/e-mtb",
  },
  {
    number: "03",
    duration: "3 days",
    label: "ATLAS · VALLEY EXPLORATION",
    destination: "ATLAS VALLEYS",
    title: "Atlas Valley E-Bike Adventure",
    description:
      "Discover the changing landscapes of the Atlas through a multi-day electric mountain biking experience. Ride between mountain villages, explore rural tracks and enjoy panoramic views across the valleys. Electric assistance can help manage longer climbs and varied elevations, while the daily route is planned around your experience, battery range and riding preferences.",
    image: "/images/atlas-berber-valley-bike.JPG",
    href: "/cycling-trips/e-mtb",
  },
  {
    number: "04",
    duration: "4 days",
    label: "MARRAKECH · PRIVATE E-MTB",
    destination: "MARRAKECH & HIGH ATLAS",
    title: "Private Atlas E-Bike Experience",
    description:
      "Enjoy a private electric mountain biking experience starting from Marrakech and exploring selected areas of the High Atlas. This option allows the itinerary to be discussed around your dates, group size, preferred daily distance and riding ability. Combine mountain tracks, village routes and scenic viewpoints with the flexibility of a privately planned adventure.",
    image: "/images/mountain-bike-morocco-hero.jpg",
    href: "/cycling-trips/e-mtb",
  },
];

const destinations = [
  {
    title: "Imlil and Mount Toubkal",
    text:
      "Imlil is an excellent starting point for exploring the High Atlas by electric mountain bike. Mountain tracks lead through traditional settlements, terraced fields and spectacular valleys beneath Mount Toubkal. Electric assistance can make longer climbs more manageable, while route choice should still reflect elevation, trail conditions and your experience.",
    image: "/images/imlil-cycling-adventure-tour.jpeg",
    href: "/destinations/imlil",
  },
  {
    title: "High Atlas Mountains",
    text:
      "The High Atlas offers a varied environment for E-MTB riding, with mountain roads, rocky tracks, village paths and changing elevations. Electric mountain bikes provide additional assistance on climbs, allowing riders to explore more of the landscape. The right route depends on your riding ability, battery range and preferred terrain.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Agafay Desert",
    text:
      "The rocky landscapes of Agafay provide a different experience from the higher Atlas valleys. Explore open terrain, dry tracks and rolling hills on an electric mountain bike. Route planning should consider temperature, water, surface conditions and battery requirements, especially during warmer periods.",
    image: "/images/Agafay-desert-morocco.jpg",
    href: "/destinations/agafay-desert",
  },
  {
    title: "Marrakech and the Foothills",
    text:
      "The countryside around Marrakech offers opportunities to combine a city stay with electric mountain biking in the surrounding foothills. Depending on the route, rides can include quieter rural tracks, mountain views and traditional settlements. Transfers, riding distance and terrain can be considered when planning your experience.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/destinations/marrakech",
  },
];

const faqs = [
  {
    question: "What is an E-MTB tour in the Atlas Mountains?",
    answer:
      "An E-MTB tour is a guided electric mountain biking experience using a mountain bike with pedal assistance. The electric motor supports your pedalling, particularly on climbs and longer mountain routes. You still ride, steer and control the bike yourself, but the assistance can make changes in elevation more manageable.",
  },
  {
    question: "Can I explore the Atlas Mountains by e-bike from Marrakech?",
    answer:
      "Yes. Marrakech provides a convenient starting point for guided electric mountain biking experiences in the High Atlas. Routes can include the Imlil area, mountain valleys and surrounding foothills. Depending on your chosen itinerary, transport from Marrakech to the riding area can be arranged as part of the experience.",
  },
  {
    question: "Do I need previous mountain biking experience?",
    answer:
      "You should be comfortable riding a bicycle and have enough confidence to control a mountain bike on the terrain selected for your tour. Some routes follow easier mountain tracks, while others include rocky or uneven sections. Your riding experience, fitness and confidence should help determine the most suitable itinerary.",
  },
  {
    question: "How difficult is electric mountain biking in the Atlas?",
    answer:
      "Difficulty depends on the route, elevation, surface and technical sections. Electric assistance helps with pedalling effort on climbs, but it does not remove the need for balance, bike handling and control. Some mountain tracks can be rocky or uneven, so discuss the expected terrain before choosing your tour.",
  },
  {
    question: "How far can an electric mountain bike travel?",
    answer:
      "Battery range depends on the battery capacity, assistance mode, rider weight, elevation, terrain, temperature and riding style. Long climbs and higher assistance settings generally use more energy. The daily route should be planned around the actual bike equipment and expected conditions, with charging or spare-battery arrangements considered for longer rides.",
  },
  {
    question: "When is the best time for an Atlas E-MTB tour?",
    answer:
      "Spring and autumn are often comfortable periods for electric mountain biking in the Atlas Mountains. Conditions vary with altitude and location. Winter can bring cold weather or snow to higher routes, while summer temperatures can be demanding at lower elevations. The itinerary should be selected according to your travel dates and the expected conditions.",
  },
  {
    question: "Are electric mountain bikes suitable for beginners?",
    answer:
      "Some guided routes may suit people with basic cycling experience, provided they are comfortable controlling a mountain bike. Electric assistance can help with climbing, but riders still need to manage braking, balance, corners and uneven surfaces. A suitable route should be chosen according to your confidence and experience.",
  },
  {
    question: "Can a group with different fitness levels ride together?",
    answer:
      "Electric assistance can help riders with different fitness levels enjoy the same journey, depending on their riding ability and the route. However, everyone should be comfortable handling a mountain bike on the planned terrain. Discuss the group's experience and preferences when arranging a private tour.",
  },
  {
    question: "What should I wear and bring for an E-MTB ride?",
    answer:
      "Wear comfortable cycling clothing, suitable shoes, a helmet and gloves. Bring water, sun protection and any personal medication you need. Depending on the altitude and season, an additional layer or rain protection may be useful. Your guide can advise on equipment requirements for the specific route.",
  },
  {
    question: "Can I book a private electric mountain bike tour?",
    answer:
      "You can enquire about a private E-MTB experience for individuals, couples, families or groups. Share your dates, group size, riding experience and preferred route length. This information helps establish suitable trails, bike requirements, transfers and support arrangements for your trip.",
  },
];

export default function EBikeTouringAtlasOfMarrakechPage() {
  return (
    <>
      <main className="cycling-listing gravel-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/imlil-cycling-adventure-tour.jpeg"
            alt="Electric mountain biking through the Atlas Mountains of Morocco"
            fetchPriority="high"
          />

          <div className="cl-hero__shade" />

          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">
              E-BIKE TOURS · ATLAS MOUNTAINS · MARRAKECH
            </p>

            <h1>E-Bike Touring in the Atlas Mountains of Marrakech</h1>

            <p className="cl-hero__intro">
              Discover the mountains surrounding Marrakech by
              electric mountain bike, riding through traditional
              Berber villages, scenic valleys and spectacular
              High Atlas landscapes. Explore guided E-MTB day
              rides and multi-day cycling adventures around
              Imlil and Mount Toubkal. Electric pedal assistance
              helps you enjoy longer climbs and changing
              elevations while experiencing the mountains at
              your own pace. Whether you are planning a short
              escape from Marrakech or a longer mountain
              adventure, find an experience that suits your
              riding ability and travel plans.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your E-Bike Tour
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="#atlas-ebike-tours"
              >
                Explore E-Bike Tours
              </Link>
            </div>

            <div className="cl-hero__meta">
              <span>ELECTRIC MOUNTAIN BIKING</span>
              <span>GUIDED DAY & MULTI-DAY RIDES</span>
              <span>MARRAKECH & HIGH ATLAS</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">
              EXPLORE MORE WITH ELECTRIC ASSISTANCE
            </p>

            <h2>
              Discover the Atlas Mountains on an electric mountain bike.
            </h2>

            <img
              src="/images/atlas-mountains-cycling-tour-morocco.jpg"
              alt="Electric mountain biking in the Atlas Mountains near Marrakech"
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
              Electric mountain biking offers an exciting way
              to discover the Atlas Mountains around Marrakech.
              Pedal assistance helps reduce the effort required
              on sustained climbs, allowing riders to explore
              mountain tracks, traditional villages and scenic
              valleys while enjoying the experience of riding
              through the landscape.
            </p>

            <p>
              Around Imlil and the Toubkal region, mountain
              routes pass through terraced fields, remote
              settlements and spectacular high-altitude
              scenery. The terrain varies from accessible
              tracks to rougher mountain paths, so choosing
              the right route remains important regardless
              of electric assistance.
            </p>

            <p>
              E-MTB riding can also make it easier for people
              with different fitness levels to enjoy a shared
              cycling experience. However, bike handling,
              trail conditions, elevation and battery range
              still need to be considered when planning
              each day's ride.
            </p>

            <p>
              Whether you want a day ride from Marrakech or
              a multi-day adventure through the Atlas valleys,
              a well-planned itinerary balances riding time,
              battery capacity, elevation and opportunities
              to enjoy the mountain scenery and local culture.
            </p>

            <Link className="cl-text-link" href="/cycling-trips/e-mtb">
              Explore all E-MTB tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="atlas-ebike-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  CHOOSE YOUR E-BIKE EXPERIENCE
                </p>

                <h2>
                  Guided electric mountain bike tours from Marrakech
                </h2>
              </div>

              <p>
                Explore electric mountain biking experiences
                ranging from day rides near Marrakech to
                multi-day adventures through the High Atlas.
                Each itinerary has different practical
                considerations, including daily distance,
                elevation, terrain, battery range and
                accommodation. Explore the options and
                enquire about an experience that matches
                your riding preferences.
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
                      E-MTB · {tour.destination}
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
                  MORE E-MTB ITINERARIES
                </p>

                <h2>
                  Explore the full range of electric mountain bike tours
                </h2>
              </div>

              <p>
                Looking for a different duration or destination?
                Explore the complete E-MTB collection for more
                guided routes, private itineraries and multi-day
                cycling experiences across Morocco. Compare
                the available options and contact us to discuss
                a route around your dates, riding experience
                and group requirements.
              </p>
            </div>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--dark"
                href="/cycling-trips/e-mtb"
              >
                View All E-MTB Tours
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-dark-band">
          <div className="cl-wrap cl-dark-band__inner">
            <div>
              <p className="cl-eyebrow">
                MORE MOUNTAINS. MORE POSSIBILITIES.
              </p>

              <h2>
                Enjoy the climbs and discover more of the Atlas by e-bike.
              </h2>
            </div>

            <div>
              <p>
                Electric mountain bikes provide pedal assistance
                when climbing, helping riders manage sustained
                gradients and explore more varied terrain.
                However, the motor does not replace the need
                for suitable bike handling, balance and control,
                especially on rocky or uneven mountain tracks.
              </p>

              <p>
                Battery range is an important part of planning.
                Elevation, assistance settings, rider weight,
                temperature and terrain all influence how much
                energy a ride requires. Daily routes should
                be planned around the equipment being used
                and the support available.
              </p>

              <p>
                For multi-day rides, consider charging
                arrangements, spare batteries where available,
                accommodation, transfers and the distance
                between riding stages. A practical itinerary
                allows you to enjoy the mountains without
                making the days unnecessarily demanding.
              </p>

              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Discuss Your E-Bike Requirements
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
                Discover electric mountain biking destinations around Marrakech.
              </h2>
            </div>

            <p>
              From the mountain villages around Imlil to the
              wider High Atlas and the rocky landscapes of
              Agafay, the region offers different environments
              to explore by electric mountain bike. Each
              destination has its own terrain, riding
              conditions and practical requirements.
              Choose an area that suits your experience,
              preferred distance and travel plans.
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
                    E-MTB DESTINATION
                  </span>
                  <span className="home-tour-card__level">
                    {destination.title}
                  </span>
                </Link>

                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">
                    E-BIKE TOURING · {destination.title}
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
              src="/images/atlas-berber-valley-bike.JPG"
              alt="Cycling through a traditional Berber village in the Atlas Mountains"
              loading="lazy"
            />
          </div>

          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">
              MORE THAN THE RIDE
            </p>

            <h2>
              Experience the mountain villages and landscapes beyond Marrakech.
            </h2>

            <p>
              An electric mountain biking journey in the Atlas
              is about more than reaching the next climb.
              Mountain tracks connect traditional settlements,
              cultivated terraces and spectacular viewpoints,
              offering opportunities to experience the region
              and its communities along the way.
            </p>

            <p>
              Around Imlil and the Toubkal region, villages
              sit within a landscape of steep slopes and
              dramatic mountain scenery. Riding through
              these valleys provides a different perspective
              on the High Atlas, with surroundings that
              change throughout the journey.
            </p>

            <p>
              Electric assistance can help make longer
              climbs more manageable, leaving more opportunity
              to enjoy the route and the places along the way.
              The best itinerary still balances riding
              ambitions with realistic daily distances,
              elevation and battery requirements.
            </p>

            <p>
              If local culture and scenery are important
              to your trip, ask how much time the itinerary
              allows for village stops, viewpoints and
              local meals. The daily schedule should make
              room for both the cycling experience and
              the mountain environment.
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
                  What to consider when planning an Atlas E-MTB holiday.
                </h2>
              </div>

              <p>
                A successful electric mountain biking trip
                balances riding ambitions with practical
                details. Clear conversations about experience,
                terrain, battery range and daily distances
                help shape a journey that suits your group.
                Before choosing a tour, make sure you
                understand the proposed routes and the
                equipment and support arrangements.
              </p>
            </div>

            <div className="cl-why-grid">
              <article>
                <span>01</span>

                <h3>Routes suited to your ability</h3>

                <p>
                  Discuss your cycling experience, fitness,
                  bike-handling confidence and preferred
                  terrain when considering route options.
                </p>
              </article>

              <article>
                <span>02</span>

                <h3>Battery-aware planning</h3>

                <p>
                  Consider battery capacity, assistance
                  settings, elevation and charging or
                  spare-battery arrangements for longer rides.
                </p>
              </article>

              <article>
                <span>03</span>

                <h3>Practical logistics</h3>

                <p>
                  Plan around transport, food, water,
                  accommodation, charging facilities and
                  the support needed during your journey.
                </p>
              </article>

              <article>
                <span>04</span>

                <h3>Time to enjoy the Atlas</h3>

                <p>
                  Make space for mountain views, traditional
                  villages, local food and the landscapes
                  beyond the riding routes.
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
                How to organise your E-MTB tour from Marrakech.
              </h2>
            </div>

            <p>
              You do not need to have every detail decided
              before making an enquiry. Start with your
              dates, riding experience and group requirements,
              then discuss which routes and destinations
              might suit your plans. Sharing your preferred
              distance, fitness and e-bike requirements
              helps establish the practical details.
            </p>
          </div>

          <div className="cl-steps">
            <article>
              <span>STEP 01</span>

              <h3>Tell us about your riding</h3>

              <p>
                Share your cycling experience, fitness,
                group size and the type of terrain you
                enjoy. Let us know whether you prefer
                relaxed mountain rides, longer climbs
                or more challenging off-road tracks.
              </p>
            </article>

            <article>
              <span>STEP 02</span>

              <h3>Discuss the route and equipment</h3>

              <p>
                Compare destinations, daily distances,
                elevation and trail conditions. Discuss
                the e-bike type, battery range and
                charging arrangements for the proposed
                itinerary.
              </p>
            </article>

            <article>
              <span>STEP 03</span>

              <h3>Review the practical details</h3>

              <p>
                Discuss the itinerary, transfers,
                accommodation, meals and support before
                making final arrangements. Confirm what
                is included and how changes to the
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
                E-bike touring in the Atlas Mountains: frequently asked questions
              </h2>

              <p>
                Find answers to common questions about
                electric mountain biking, battery range,
                trail difficulty, seasons and preparing
                for an E-MTB holiday. Understanding the
                route and equipment requirements can help
                you choose an experience that suits your
                riding ability. For advice about a
                particular journey, contact us with
                your travel dates and preferences.
              </p>

              <Link className="cl-text-link" href="/contact">
                Ask us about your E-MTB tour <span aria-hidden="true">↗</span>
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
            src="/images/imlil-cycling-adventure-tour.jpeg"
            alt="Electric mountain bike adventure in the Atlas Mountains of Morocco"
            loading="lazy"
          />

          <div className="cl-final-cta__overlay" />

          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">
              YOUR NEXT E-BIKE ADVENTURE
            </p>

            <h2>
              Ready to explore the Atlas Mountains by electric bike?
            </h2>

            <p>
              Tell us when you would like to travel, what
              kind of terrain you enjoy and your cycling
              experience. Share your group size, preferred
              riding distance and e-bike requirements so
              you can start discussing routes, destinations
              and practical arrangements for your Atlas
              Mountains E-MTB holiday.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your E-Bike Holiday
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="/cycling-trips/e-mtb"
              >
                View All E-MTB Tours
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