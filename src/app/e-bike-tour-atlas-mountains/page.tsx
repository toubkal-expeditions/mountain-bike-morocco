import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Bike Tour Atlas Mountains Morocco | E-MTB Tours & Adventures",
  description:
    "Discover the Atlas Mountains by electric mountain bike. Explore guided E-MTB tours, Berber villages, mountain passes and spectacular valleys around Imlil, Toubkal and the High Atlas.",
  alternates: {
    canonical: "/e-bike-tour-atlas-mountains",
  },
  openGraph: {
    title: "E-Bike Tour Atlas Mountains Morocco | Mountain Bike Morocco",
    description:
      "Explore Morocco's High Atlas on guided electric mountain bike tours. Discover mountain valleys, traditional Berber villages and scenic E-MTB adventures around Imlil and Toubkal.",
    url: "https://mountain-bike-morocco.com/e-bike-tour-atlas-mountains",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/eBike-tour-atlas-mountains-morocco.jpg",
        alt: "Electric mountain biking adventure in the Atlas Mountains of Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Bike Tour Atlas Mountains Morocco | Mountain Bike Morocco",
    description:
      "Discover the High Atlas by electric mountain bike, riding scenic mountain trails, traditional Berber villages and spectacular valleys around Imlil and Toubkal.",
    images: ["/images/eBike-tour-atlas-mountains-morocco.jpg"],
  },
};

const tours = [
  {
    number: "01",
    duration: "4 days",
    label: "HIGH ATLAS · E-MTB ADVENTURE",
    destination: "IMLIL & TOUBKAL",
    title: "Atlas Mountains E-Bike Tour",
    description:
      "Discover the High Atlas on a four-day electric mountain bike journey through mountain valleys, traditional Berber villages and spectacular landscapes. Explore the area around Imlil and Toubkal, with routes combining mountain tracks, scenic climbs and rewarding descents. Pedal assistance makes it possible to explore more of the region while enjoying the experience at a comfortable pace.",
    image: "/images/day-ebike-tour-from-marrakech.jpg",
    href: "/cycling-trips/trip/atlas-mountains-e-bike-4-day",
  },
  {
    number: "02",
    duration: "5 days",
    label: "ATLAS · E-MTB EXPLORATION",
    destination: "HIGH ATLAS & AGAFAY",
    title: "Atlas E-MTB Tour Challenge",
    description:
      "Explore a wider section of the Atlas Mountains on a five-day electric mountain biking adventure. Ride through mountain valleys, traditional settlements and changing landscapes, with routes planned around elevation, battery range and trail conditions. The journey offers a combination of mountain exploration, off-road riding and opportunities to experience local culture.",
    image: "/images/atlas_mountain_ebike_tour_3days-2.jpg",
    href: "/cycling-trips/e-mtb",
  },
  {
    number: "03",
    duration: "8 days",
    label: "ATLAS · EXTENDED E-MTB JOURNEY",
    destination: "IMLIL & HIGH ATLAS",
    title: "Atlas Peaks E-MTB 8-Day Tour",
    description:
      "Spend more time discovering the High Atlas on an extended electric mountain bike journey. Travel through scenic valleys, mountain passes and traditional Berber villages, exploring different landscapes around Imlil and the wider Atlas region. With pedal assistance, the itinerary allows riders to cover more ground while enjoying the scenery, local hospitality and varied mountain terrain.",
    image: "/images/sahara-desert-ebike-expeditions.jpg",
    href: "/cycling-trips/e-mtb",
  },
  {
    number: "04",
    duration: "2 days",
    label: "ATLAS · SHORT E-MTB ESCAPE",
    destination: "OUIRGANE & AGAFAY",
    title: "Atlas Valley E-MTB Escape",
    description:
      "Enjoy a shorter electric mountain bike adventure connecting the landscapes of the Atlas Mountains and Agafay. Ride through mountain valleys, traditional villages and open countryside, discovering a different side of Morocco over two days. This shorter experience is ideal for riders who want to enjoy an E-MTB adventure without committing to a longer holiday.",
    image: "/images/ouirgane-valley-ebike-tour.jpg",
    href: "/cycling-trips/e-mtb",
  },
];

const destinations = [
  {
    title: "Imlil and Mount Toubkal",
    text:
      "Imlil is one of the best-known mountain villages in the High Atlas and an excellent base for exploring the surrounding landscape by electric mountain bike. Mountain tracks and valley routes lead through traditional settlements, terraced fields and dramatic scenery beneath Mount Toubkal. Pedal assistance can help riders manage longer climbs and enjoy more of the surrounding mountain environment.",
    image: "/images/eBike-tour-atlas-mountains-morocco.jpg",
    href: "/destinations/imlil",
  },
  {
    title: "High Atlas Mountains",
    text:
      "The High Atlas offers a varied environment for E-MTB adventures, with mountain roads, dirt tracks, village paths and scenic off-road routes. The terrain changes with altitude and location, creating different riding experiences throughout the region. Battery range, elevation and route difficulty are important considerations when planning each day's ride.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Ouirgane Valley",
    text:
      "Ouirgane offers a quieter mountain environment, with olive groves, traditional villages, open valleys and beautiful views across the surrounding hills. Its network of tracks and countryside routes provides opportunities for relaxed electric mountain biking and cultural discovery. It is a rewarding area to include in a multi-day Atlas E-MTB itinerary.",
    image: "/images/e-mtb-tour-from-marrakech.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Agafay Desert",
    text:
      "South of Marrakech, Agafay offers a different kind of E-MTB experience. Its dry, rocky terrain, open landscapes and rolling tracks create opportunities for off-road riding outside the higher mountain valleys. Routes should be selected with consideration for temperature, water, battery range and the riding ability of the group.",
    image: "/images/Agafay-desert-morocco.jpg",
    href: "/destinations/agafay-desert",
  },
];

const faqs = [
  {
    question: "Is the Atlas Mountains a good destination for E-MTB riding?",
    answer:
      "Yes. The Atlas Mountains offer an excellent setting for electric mountain biking, with mountain tracks, village paths, scenic climbs and varied off-road terrain. Pedal assistance can make longer climbs and more extensive routes accessible to a wider range of riders. The best itinerary depends on your experience, fitness, preferred terrain and battery range.",
  },
  {
    question: "Where are the best places for E-bike riding in the Atlas Mountains?",
    answer:
      "Imlil, the Toubkal region, Ourika and Ouirgane are among the areas to consider for an Atlas E-MTB adventure. Each offers different landscapes, routes and riding conditions. The best starting point depends on your available time, riding experience and the type of terrain you would like to explore.",
  },
  {
    question: "Do I need previous mountain biking experience?",
    answer:
      "The experience required depends on the planned route. Some mountain tracks and countryside roads may suit confident recreational riders, while rocky singletrack and technical descents require stronger bike-handling skills. Electric assistance helps with climbing, but it does not remove the need for control and confidence on uneven terrain.",
  },
  {
    question: "What type of electric mountain bike should I use?",
    answer:
      "A suitable full-suspension electric mountain bike is recommended for routes that include rough tracks, rocky terrain and off-road trails. The bike should have reliable brakes, suitable tyres and a battery capacity appropriate for the planned distance and elevation. Discuss the route and bike setup before travelling so that the equipment can be checked.",
  },
  {
    question: "How far can I ride on an electric mountain bike?",
    answer:
      "Battery range depends on the bike, battery capacity, rider weight, assistance level, elevation, terrain and weather conditions. Mountain routes with long climbs generally use more battery power than flatter tracks. Daily distances and charging arrangements should be planned around the actual route and the available battery capacity.",
  },
  {
    question: "When is the best time for an E-bike tour in the Atlas Mountains?",
    answer:
      "Spring and autumn are generally popular periods for E-MTB riding in the Atlas Mountains because temperatures are often more comfortable. Conditions vary with altitude and weather. Higher routes can be cold or affected by snow during winter, while summer temperatures can be demanding at lower elevations. Check the expected conditions for your planned routes and travel dates.",
  },
  {
    question: "Are Atlas Mountains E-bike tours suitable for beginners?",
    answer:
      "Some E-bike routes can suit beginners with a reasonable level of fitness and basic cycling confidence. Other routes include rocky tracks, sustained climbs and technical descents that require more experience. It is important to discuss your cycling background and comfort on off-road terrain before choosing an itinerary.",
  },
  {
    question: "Can I combine E-MTB riding with local cultural experiences?",
    answer:
      "Yes. E-bike journeys in the Atlas Mountains can include time in traditional Berber villages, mountain valleys and local communities. Depending on the itinerary, there may be opportunities to enjoy local food, stop for mint tea and experience the region beyond the trails. The daily schedule should leave enough time for both riding and discovery.",
  },
  {
    question: "Can I book a private guided Atlas E-bike tour?",
    answer:
      "You can enquire about a private electric mountain biking experience for yourself, a couple, friends or a group. Share your preferred dates, group size, riding experience, fitness and the type of routes you want to explore. These details help establish a suitable itinerary and the practical support arrangements for your trip.",
  },
  {
    question: "What should I check before booking an Atlas E-MTB tour?",
    answer:
      "Ask about the daily riding distance, elevation gain, route difficulty and expected terrain. Confirm the battery capacity, charging arrangements, bike hire, accommodation, transfers and support arrangements. It is also useful to understand what is included in the price and how routes may be adjusted if weather or trail conditions change.",
  },
];

export default function EBikeTourAtlasMountainsPage() {
  return (
    <>
      <main className="cycling-listing gravel-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/eBike-tour-atlas-mountains-morocco.jpg"
            alt="Electric mountain biking through the spectacular Atlas Mountains of Morocco"
            fetchPriority="high"
          />

          <div className="cl-hero__shade" />

          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">
              E-BIKE TOURING · HIGH ATLAS · MOROCCO
            </p>

            <h1>E-Bike Tour Atlas Mountains</h1>

            <p className="cl-hero__intro">
              Discover the High Atlas on an electric mountain bike,
              exploring spectacular valleys, traditional Berber
              villages and beautiful mountain landscapes beneath
              Mount Toubkal. Enjoy guided E-MTB tours around Imlil,
              Ouirgane and the surrounding Atlas Mountains, with
              pedal assistance helping you explore more of the
              region. Whether you are looking for a short mountain
              escape or a longer multi-day journey, find an
              experience shaped around your riding level, preferred
              terrain and ambitions.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your E-Bike Adventure
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="#atlas-ebike-tours"
              >
                Explore E-Bike Tours
              </Link>
            </div>

            <div className="cl-hero__meta">
              <span>E-MOUNTAIN BIKE ADVENTURES</span>
              <span>HIGH ATLAS & BERBER VALLEYS</span>
              <span>GUIDED E-BIKE TOURS</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">
              EXPLORE THE HIGH ATLAS
            </p>

            <h2>
              Discover Morocco's mountain landscapes with the freedom of an electric bike.
            </h2>

            <img
              src="/images/atlas_mountain_ebike_tour_3days-2.jpg"
              alt="Electric mountain biking through the Atlas Mountains of Morocco"
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
              The Atlas Mountains offer a distinctive setting for
              electric mountain biking in Morocco. High mountain
              valleys, traditional villages, open countryside and
              dramatic landscapes create a varied environment for
              riders who want to explore beyond the usual cycling
              routes. E-MTB riding combines the experience of
              mountain biking with pedal assistance that helps
              manage longer climbs and changing terrain.
            </p>

            <p>
              Around Imlil and Mount Toubkal, mountain tracks wind
              through terraced fields, remote settlements and
              dramatic mountain scenery. Electric assistance can
              make it easier to explore more of the surrounding
              valleys, while still allowing riders to enjoy the
              character of the mountain trails.
            </p>

            <p>
              Different areas of the High Atlas offer different
              riding experiences. Some routes follow mountain
              tracks and village paths, while others include
              off-road sections, rocky surfaces and sustained
              climbs. Elevation, weather, battery range and trail
              conditions all influence which routes are suitable.
            </p>

            <p>
              Whether you want a short guided ride or a longer
              E-MTB holiday, a well-planned itinerary should
              balance riding time, elevation, battery capacity
              and opportunities to enjoy the landscape and local
              culture along the way.
            </p>

            <Link className="cl-text-link" href="/cycling-trips/e-mtb">
              Explore all E-bike tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="atlas-ebike-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  CHOOSE YOUR E-MTB EXPERIENCE
                </p>

                <h2>
                  Guided electric mountain bike tours in the Atlas Mountains
                </h2>
              </div>

              <p>
                Explore electric mountain biking experiences
                ranging from shorter valley rides to longer
                adventures through the High Atlas. Each itinerary
                has different considerations, including daily
                distance, elevation, battery range, charging
                arrangements and trail conditions. Compare the
                options and enquire about the experience that
                best matches your riding.
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
                      E-BIKE TOUR · {tour.destination}
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
                  MORE E-BIKE ADVENTURES
                </p>

                <h2>
                  Explore more electric mountain bike tours in Morocco
                </h2>
              </div>

              <p>
                Looking for a different destination or riding
                experience? Explore the full E-bike collection
                for more guided routes, private itineraries and
                multi-day adventures across Morocco. Compare
                the available options and contact us to discuss
                a route around your dates, experience and group
                requirements.
              </p>
            </div>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--dark"
                href="/cycling-trips/e-mtb"
              >
                View All E-Bike Tours
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-dark-band">
          <div className="cl-wrap cl-dark-band__inner">
            <div>
              <p className="cl-eyebrow">
                MORE DISTANCE. MORE DISCOVERY. MORE ATLAS.
              </p>

              <h2>
                Explore more of the mountains with electric assistance.
              </h2>
            </div>

            <div>
              <p>
                Electric mountain biking in the Atlas Mountains
                can make longer climbs and extended routes more
                accessible. Pedal assistance helps riders manage
                elevation changes while enjoying the landscapes
                and mountain trails. A suitable itinerary still
                needs to consider fitness, bike handling,
                preferred terrain and the conditions on the ground.
              </p>

              <p>
                Battery range is an important part of planning
                an E-MTB journey. Daily distances, climbing,
                assistance settings, terrain and charging
                opportunities all influence how much riding
                can be comfortably planned. Remote mountain
                stages need particular attention to battery
                capacity and practical support.
              </p>

              <p>
                Before choosing a tour, discuss the expected
                riding distance, elevation, battery capacity,
                charging arrangements and your E-bike setup.
                These details help establish whether the
                proposed routes are appropriate for your
                experience and equipment.
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
                Explore electric mountain biking destinations around the Atlas.
              </h2>
            </div>

            <p>
              From the mountain villages around Imlil to the
              wider High Atlas, Ouirgane Valley and the rocky
              terrain of Agafay, the region offers different
              environments to explore by electric mountain bike.
              Each area has its own character, routes and riding
              conditions. The right destination depends on your
              experience, preferred terrain and available time.
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
                    E-BIKE DESTINATION
                  </span>
                  <span className="home-tour-card__level">
                    {destination.title}
                  </span>
                </Link>

                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">
                    E-MTB · {destination.title}
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
              src="/images/group-ebike-tour-morocco.jpg"
              alt="Group electric mountain bike tour through the Atlas Mountains of Morocco"
              loading="lazy"
            />
          </div>

          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">
              MORE THAN THE RIDE
            </p>

            <h2>
              Experience the mountain culture beyond the trails.
            </h2>

            <p>
              An electric mountain biking journey in the Atlas
              is about more than the riding. Routes pass through
              mountain villages, cultivated terraces and dramatic
              valleys, offering opportunities to experience the
              region and its communities along the way. Time away
              from the bike can be just as memorable as exploring
              the mountain tracks.
            </p>

            <p>
              Around Imlil and the Toubkal region, traditional
              settlements sit within a landscape of steep
              mountain slopes and changing elevations. Riding
              through these valleys offers a different perspective
              on the High Atlas, with views and surroundings
              that change throughout the journey.
            </p>

            <p>
              Electric assistance can help make longer mountain
              routes more accessible, leaving more opportunity
              to discover the different landscapes along the way.
              The best itinerary balances riding ambition with
              time to enjoy village stops, viewpoints and local
              experiences.
            </p>

            <p>
              If scenery and local culture are important to
              your trip, ask how much time the itinerary allows
              for village visits, mint tea stops and meals.
              The schedule should balance the riding objectives
              with the experience of travelling through the
              mountains.
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
                  What to consider when planning an Atlas E-bike adventure.
                </h2>
              </div>

              <p>
                A successful E-MTB trip balances riding
                ambitions with practical details. Clear
                conversations about experience, battery range,
                equipment and daily distances help shape a
                journey that suits your group. Before choosing
                a tour, make sure you understand the expected
                routes and the charging and support arrangements
                needed for your preferred type of riding.
              </p>
            </div>

            <div className="cl-why-grid">
              <article>
                <span>01</span>

                <h3>Routes suited to your ability</h3>

                <p>
                  Discuss your cycling experience, fitness,
                  confidence on off-road terrain and preferred
                  route difficulty when considering E-MTB options.
                </p>
              </article>

              <article>
                <span>02</span>

                <h3>Battery range and charging</h3>

                <p>
                  Consider battery capacity, climbing, assistance
                  settings, daily distances and charging
                  opportunities when planning each stage.
                </p>
              </article>

              <article>
                <span>03</span>

                <h3>Practical logistics</h3>

                <p>
                  Plan around water, food, charging, repairs,
                  accommodation, transfers and the support
                  needed for longer mountain stages.
                </p>
              </article>

              <article>
                <span>04</span>

                <h3>Time to discover the Atlas</h3>

                <p>
                  Make space for mountain views, village life,
                  local food and the landscapes beyond the
                  riding routes themselves.
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
                How to organise your Atlas Mountains E-bike tour.
              </h2>
            </div>

            <p>
              You do not need to have every detail decided before
              making an enquiry. Start with your dates, riding
              experience and group requirements, then discuss
              which routes and destinations might suit your
              plans. Sharing your preferred terrain, fitness
              and E-bike setup helps establish the practical
              details of your adventure.
            </p>
          </div>

          <div className="cl-steps">
            <article>
              <span>STEP 01</span>

              <h3>Tell us about your riding</h3>

              <p>
                Share your experience, fitness, group size,
                bike setup and the type of routes you enjoy.
                Let us know whether you are comfortable on
                mountain tracks, rocky paths and uneven terrain.
              </p>
            </article>

            <article>
              <span>STEP 02</span>

              <h3>Discuss the routes and battery range</h3>

              <p>
                Compare destinations, riding distances,
                elevation and seasonal conditions. Ask about
                battery capacity, charging arrangements and
                the expected daily stages.
              </p>
            </article>

            <article>
              <span>STEP 03</span>

              <h3>Review the practical details</h3>

              <p>
                Discuss the itinerary, E-bike requirements,
                transfers, accommodation and support before
                making final arrangements. Confirm what is
                included, what is not included and how
                changes to the route would be handled.
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
                Find answers to common questions about Atlas
                E-bike tours, route difficulty, battery range,
                bike setup, seasons and preparing for your
                electric mountain biking holiday. Understanding
                the routes and practical arrangements can help
                you choose an experience that suits your riding
                ability. For advice about a particular journey,
                contact us with your dates and riding preferences.
              </p>

              <Link className="cl-text-link" href="/contact">
                Ask us about your E-bike tour <span aria-hidden="true">↗</span>
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
            src="/images/mountain-biking-atlas-mountains-morocco.jpg"
            alt="Electric mountain bike adventure in the Atlas Mountains of Morocco"
            loading="lazy"
          />

          <div className="cl-final-cta__overlay" />

          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">
              YOUR NEXT E-MTB ADVENTURE
            </p>

            <h2>
              Ready to explore Morocco's Atlas Mountains by E-bike?
            </h2>

            <p>
              Tell us when you would like to travel, what kind
              of routes you enjoy and your cycling experience.
              Share your group size, preferred riding level
              and E-bike requirements so you can start
              discussing destinations, battery arrangements
              and practical details for your Atlas Mountains
              electric mountain biking holiday.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your E-Bike Adventure
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="/cycling-trips/e-mtb"
              >
                View All E-Bike Tours
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