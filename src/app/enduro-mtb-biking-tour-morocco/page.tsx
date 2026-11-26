import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enduro MTB Biking Tour Morocco | Atlas Mountains Enduro Adventures",
  description:
    "Discover enduro mountain biking in Morocco's Atlas Mountains. Explore guided enduro tours, technical singletrack, rocky descents and mountain trails around Imlil, Toubkal and the High Atlas.",
  alternates: {
    canonical: "/enduro-mtb-biking-tour-morocco",
  },
  openGraph: {
    title: "Enduro MTB Biking Tour Morocco | Mountain Bike Morocco",
    description:
      "Ride the spectacular trails of Morocco's Atlas Mountains. Discover guided enduro mountain biking adventures, technical descents and private MTB tours around Imlil and Toubkal.",
    url: "https://mountain-bike-morocco.com/enduro-mtb-biking-tour-morocco",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
        alt: "Enduro mountain biking through the Atlas Mountains of Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enduro MTB Biking Tour Morocco | Mountain Bike Morocco",
    description:
      "Explore the High Atlas on guided enduro mountain bike adventures, from technical singletrack to rocky mountain descents and remote Berber valleys.",
    images: ["/images/toubkal-imlil-enduro-mtb-expedition.jpg"],
  },
};

const tours = [
  {
    number: "01",
    duration: "5 days",
    label: "HIGH ATLAS · ENDURO RIDING",
    destination: "ATLAS MOUNTAINS",
    title: "Atlas Enduro MTB Tour",
    description:
      "Discover the challenging mountain trails of the High Atlas on an enduro-focused MTB journey. Ride technical sections, rocky paths and rewarding descents around Imlil and the Toubkal region. The itinerary is planned around your riding experience, fitness and preferred technical level, with route choices adapted to the conditions and terrain.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/cycling-trips/trip/atlas-enduro-mtb-tour-5-day",
  },
  {
    number: "02",
    duration: "8 days",
    label: "ATLAS · TECHNICAL SINGLETRACK",
    destination: "IMLIL & TOUBKAL",
    title: "Morocco Singletrack Atlas Mountains",
    description:
      "Spend more time exploring the High Atlas on an extended mountain biking adventure. Discover a variety of mountain trails, technical sections, rocky paths and remote valley routes around Imlil and the Toubkal region. This private guided experience is designed for riders who enjoy challenging terrain, mountain scenery and full days on the bike.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/cycling-trips/trip/morocco-singletrack-atlas-mountains-8-day",
  },
  {
    number: "03",
    duration: "6 days",
    label: "HIGH ATLAS · SINGLETRACK",
    destination: "HIGH ATLAS MOUNTAINS",
    title: "Atlas Singletrack Mountain Bike Tour",
    description:
      "Explore the mountain trails of the High Atlas on a guided MTB journey through spectacular valleys, traditional Berber villages and varied singletrack. Ride around Imlil and the foothills of Mount Toubkal, with routes selected according to your riding experience, fitness and preferred technical level. Enjoy rewarding climbs, flowing descents and memorable mountain scenery.",
    image: "/images/singletrack-biking-morocco.jpg",
    href: "/cycling-trips/trip/atlas-singletrack-mountain-bike-tour-6-day",
  },
  {
    number: "04",
    duration: "4 days",
    label: "ATLAS · E-MOUNTAIN BIKING",
    destination: "HIGH ATLAS & IMLIL",
    title: "Atlas Mountains E-Bike Adventure",
    description:
      "Explore the Atlas Mountains by electric mountain bike, covering more terrain while enjoying the spectacular scenery of the mountain valleys. E-MTB routes can combine climbs, village tracks and selected trails, with the daily riding plan adapted to battery range, elevation and trail conditions. A different way to experience the High Atlas and its mountain riding.",
    image: "/images/imlil-cycling-adventure-tour.jpeg",
    href: "/cycling-trips/e-mtb",
  },
];

const destinations = [
  {
    title: "Imlil and Mount Toubkal",
    text:
      "Imlil is one of the best-known mountain villages in the High Atlas and an excellent base for exploring the surrounding landscape by enduro mountain bike. Trails and mountain tracks lead through traditional settlements, terraced fields and dramatic valleys beneath Mount Toubkal. Route selection should consider elevation, technical difficulty and the experience of your group.",
    image: "/images/imlil-cycling-adventure-tour.jpeg",
    href: "/destinations/imlil",
  },
  {
    title: "High Atlas Mountains",
    text:
      "The High Atlas offers a varied enduro riding environment, with rocky tracks, mountain paths, remote valleys and challenging descents. The terrain changes with altitude and location, making route planning important. Riders can experience dramatic scenery and traditional mountain communities while exploring different types of trails.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Agafay Desert",
    text:
      "South of Marrakech, Agafay offers a different kind of off-road mountain biking experience. Its dry, rocky terrain, open landscapes and rolling tracks create opportunities for riding outside the higher mountain valleys. Routes should be selected with consideration for temperature, water, terrain and the technical ability of the group.",
    image: "/images/Agafay-desert-morocco.jpg",
    href: "/destinations/agafay-desert",
  },
  {
    title: "Marrakech and the Foothills",
    text:
      "The countryside around Marrakech provides access to foothill routes and mountain landscapes towards the High Atlas. It can be a useful starting point for shorter rides or for combining a city stay with an enduro mountain biking holiday. The best route depends on your available time, preferred terrain and transfer arrangements.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/destinations/marrakech",
  },
];

const faqs = [
  {
    question: "Is Morocco a good destination for enduro mountain biking?",
    answer:
      "Yes. Morocco offers a varied environment for enduro mountain biking, particularly in the Atlas Mountains. The region has rocky mountain tracks, natural singletrack, technical descents, challenging climbs and traditional valley routes. The terrain varies considerably by location and altitude, so the best trails depend on your riding experience, preferred difficulty and the time of year.",
  },
  {
    question: "Where are the best places for enduro MTB in Morocco?",
    answer:
      "Imlil, the Toubkal region and the wider High Atlas offer different areas to explore by enduro mountain bike. The surrounding valleys provide varied terrain, from rocky paths and village tracks to more technical mountain trails and descents. The right starting point depends on your experience and the type of riding you enjoy.",
  },
  {
    question: "What level of experience do I need for an enduro MTB tour?",
    answer:
      "Enduro routes are generally more suitable for experienced mountain bikers who are confident on technical descents and uneven terrain. Some trails include rocky sections, loose surfaces, steep gradients and challenging turns. Your fitness, bike-handling skills and confidence on technical trails should guide route selection.",
  },
  {
    question: "What type of mountain bike should I bring?",
    answer:
      "A well-maintained full-suspension trail or enduro mountain bike is recommended for demanding mountain terrain. Appropriate tyres, reliable brakes, suitable gearing and a suspension setup suited to your riding style are important. Discuss the proposed trails and your bike setup before travelling so that equipment requirements can be checked.",
  },
  {
    question: "When is the best time for enduro mountain biking in Morocco?",
    answer:
      "Spring and autumn are generally popular periods for enduro mountain biking in the Atlas Mountains because temperatures are often more comfortable. Conditions vary with altitude and weather. Higher routes can be cold or affected by snow during winter, while summer temperatures can be demanding at lower elevations. Check the expected conditions for your planned routes and travel dates.",
  },
  {
    question: "Are the Atlas Mountains enduro trails technical?",
    answer:
      "Trail difficulty varies by location. Some routes follow mountain roads and village tracks, while others include rocky singletrack, loose surfaces, steep sections and technical descents. It is important to understand the expected terrain before choosing a tour. Your riding experience and confidence on technical trails should guide route selection.",
  },
  {
    question: "Can I book a private guided enduro mountain biking tour?",
    answer:
      "You can enquire about a private enduro mountain biking experience for yourself, a couple, friends or a group. Share your preferred dates, group size, riding experience, fitness and the type of trails you want to ride. These details help establish a suitable route and the practical support arrangements for your trip.",
  },
  {
    question: "Can I combine enduro riding with local cultural experiences?",
    answer:
      "Yes. Enduro mountain biking in the Atlas Mountains can include time in traditional Berber villages, mountain valleys and local communities. Depending on the itinerary, there may be opportunities to enjoy local food, take breaks at viewpoints and experience the region beyond the trails. The daily schedule should leave enough time for both riding and discovery.",
  },
  {
    question: "Are there enduro routes suitable for intermediate riders?",
    answer:
      "Some routes may suit intermediate riders, depending on their fitness, technical ability and experience on rocky terrain. Other enduro trails include sustained climbs, loose surfaces and more demanding descents. An honest assessment of your ability is important. Discuss the expected trail conditions and daily riding distances before choosing a tour.",
  },
  {
    question: "What should I check before booking an enduro MTB tour?",
    answer:
      "Ask about the daily riding distance, elevation gain, trail difficulty and expected terrain. Confirm the itinerary, accommodation, transfers, bike requirements and support arrangements. It is also useful to understand what is included in the price and how routes may be adjusted if weather or trail conditions change.",
  },
];

export default function EnduroMtbBikingTourMoroccoPage() {
  return (
    <>
      <main className="cycling-listing gravel-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/toubkal-imlil-enduro-mtb-expedition.jpg"
            alt="Enduro mountain biking through the spectacular Atlas Mountains of Morocco"
            fetchPriority="high"
          />

          <div className="cl-hero__shade" />

          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">
              ENDURO MOUNTAIN BIKING · HIGH ATLAS · MOROCCO
            </p>

            <h1>Enduro MTB Biking Tour Morocco</h1>

            <p className="cl-hero__intro">
              Discover the technical trails and spectacular descents
              of Morocco's Atlas Mountains. Ride rocky mountain paths,
              natural singletrack and challenging terrain around Imlil,
              Toubkal and the High Atlas. Explore guided enduro MTB
              tours and private mountain biking adventures, with
              routes shaped around your riding experience, preferred
              technical level and ambitions. From demanding descents
              to multi-day mountain journeys, discover a different
              side of Morocco on two wheels.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your Enduro Adventure
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="#enduro-mtb-tours"
              >
                Explore Enduro Tours
              </Link>
            </div>

            <div className="cl-hero__meta">
              <span>TECHNICAL MOUNTAIN TRAILS</span>
              <span>ENDURO & SINGLETRACK</span>
              <span>GUIDED MTB ADVENTURES</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">
              RIDE THE HIGH ATLAS
            </p>

            <h2>
              Discover Morocco's enduro trails beneath the peaks of the Atlas.
            </h2>

            <img
              src="/images/atlas-mountains-singletrack.jpg"
              alt="Mountain biking on a technical singletrack trail in the High Atlas Mountains"
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
              enduro mountain biking in Morocco. High mountain
              valleys, rocky tracks, technical paths and dramatic
              descents create a varied environment for experienced
              riders who want to explore beyond the usual cycling
              routes. The region offers opportunities for challenging
              singletrack and rewarding enduro adventures.
            </p>

            <p>
              Around Imlil and Mount Toubkal, mountain trails wind
              through terraced fields, remote settlements and
              dramatic mountain scenery. The terrain can be rocky,
              uneven and demanding in places, so route selection
              should reflect your technical ability, fitness and
              experience on enduro mountain bikes.
            </p>

            <p>
              Different areas of the High Atlas offer different
              riding experiences. Some routes follow mountain
              tracks and village paths, while others include
              technical sections, loose surfaces and challenging
              descents. Elevation, weather and trail conditions
              all influence which routes are suitable.
            </p>

            <p>
              Whether you want a focused enduro ride or a longer
              mountain biking holiday, a well-planned itinerary
              should balance riding time, elevation, trail
              difficulty and opportunities to enjoy the landscape
              and local culture along the way.
            </p>

            <Link className="cl-text-link" href="/cycling-trips/mtb">
              Explore all mountain bike tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="enduro-mtb-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  CHOOSE YOUR ENDURO EXPERIENCE
                </p>

                <h2>
                  Guided enduro mountain biking tours in Morocco
                </h2>
              </div>

              <p>
                Explore mountain biking experiences ranging from
                enduro-focused journeys around Imlil to longer
                MTB adventures through the High Atlas. Each
                itinerary has different considerations, including
                daily distance, elevation, technical difficulty
                and trail conditions. Compare the options and
                enquire about the experience that best matches
                your riding.
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
                      ENDURO MTB · {tour.destination}
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
                  MORE MTB ADVENTURES
                </p>

                <h2>
                  Explore more mountain biking tours in Morocco
                </h2>
              </div>

              <p>
                Looking for a different destination or riding
                experience? Explore the full mountain biking
                collection for more guided routes, private
                itineraries and multi-day adventures across
                Morocco. Compare the available options and
                contact us to discuss a route around your dates,
                experience and group requirements.
              </p>
            </div>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--dark"
                href="/cycling-trips/mtb"
              >
                View All MTB Tours
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-dark-band">
          <div className="cl-wrap cl-dark-band__inner">
            <div>
              <p className="cl-eyebrow">
                TECHNICAL TRAILS. BIG MOUNTAINS. REAL ADVENTURE.
              </p>

              <h2>
                Find the right enduro trails for your riding level.
              </h2>
            </div>

            <div>
              <p>
                Enduro mountain biking in the Atlas Mountains can
                involve significant elevation changes, rocky
                tracks, loose surfaces and technical descents.
                A suitable itinerary takes account of your fitness,
                bike handling, preferred trail difficulty and
                the conditions on the ground. Choosing appropriate
                routes helps make the experience rewarding while
                keeping the riding within your capabilities.
              </p>

              <p>
                For multi-day journeys, daily distances and
                elevation need to be balanced with recovery,
                accommodation and transfers. Remote mountain
                stages also require practical planning for water,
                food, navigation and mechanical support.
              </p>

              <p>
                Before choosing a tour, discuss the expected
                trail difficulty, riding distance, elevation
                and your enduro bike setup. These details
                help establish whether the proposed routes
                are appropriate for your experience.
              </p>

              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Discuss Your Enduro Requirements
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
                Explore enduro mountain biking destinations around the Atlas.
              </h2>
            </div>

            <p>
              From the mountain villages around Imlil to the
              wider High Atlas and the rocky terrain of Agafay,
              the region offers different environments to
              explore by enduro mountain bike. Each area has
              its own character, trail conditions and riding
              demands. The right destination depends on your
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
                    ENDURO DESTINATION
                  </span>
                  <span className="home-tour-card__level">
                    {destination.title}
                  </span>
                </Link>

                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">
                    ENDURO MTB · {destination.title}
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
              alt="Enduro mountain biking through a traditional Berber valley in Morocco"
              loading="lazy"
            />
          </div>

          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">
              MORE THAN THE TRAILS
            </p>

            <h2>
              Experience the mountain culture beyond the ride.
            </h2>

            <p>
              An enduro mountain biking journey in the Atlas is
              about more than the trails. Routes pass through
              mountain villages, cultivated terraces and dramatic
              valleys, offering opportunities to experience the
              region and its communities along the way. Time away
              from the bike can be just as memorable as the riding.
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
              The best itinerary balances riding ambition with
              time to enjoy the places along the route. Trail
              conditions, elevation, weather and daily distances
              all influence how much riding fits comfortably
              into a day. A considered plan leaves room for
              breaks, local experiences and recovery.
            </p>

            <p>
              If scenery and local culture are important to
              your trip, ask how much time the itinerary allows
              for village stops, viewpoints and meals. The
              schedule should balance the riding objectives
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
                  What to consider when planning an Atlas enduro adventure.
                </h2>
              </div>

              <p>
                A successful enduro mountain biking trip balances
                riding ambition with practical details. Clear
                conversations about experience, terrain,
                equipment and daily distances help shape a
                journey that suits your group. Before choosing
                a tour, make sure you understand the expected
                trails and the support arrangements needed
                for your preferred type of riding.
              </p>
            </div>

            <div className="cl-why-grid">
              <article>
                <span>01</span>

                <h3>Routes suited to your ability</h3>

                <p>
                  Discuss your technical experience, fitness,
                  confidence on rocky terrain and preferred
                  trail difficulty when considering route options.
                </p>
              </article>

              <article>
                <span>02</span>

                <h3>Trail-aware planning</h3>

                <p>
                  Consider elevation, surface conditions,
                  technical sections and seasonal weather
                  when selecting suitable mountain trails.
                </p>
              </article>

              <article>
                <span>03</span>

                <h3>Practical logistics</h3>

                <p>
                  Plan around water, food, repairs, accommodation,
                  transfers and the support needed for longer
                  or more remote mountain stages.
                </p>
              </article>

              <article>
                <span>04</span>

                <h3>Time to discover the Atlas</h3>

                <p>
                  Make space for mountain views, village life,
                  local food and the landscapes beyond the
                  trails themselves.
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
                How to organise your Morocco enduro mountain biking tour.
              </h2>
            </div>

            <p>
              You do not need to have every detail decided before
              making an enquiry. Start with your dates, riding
              experience and group requirements, then discuss
              which routes and destinations might suit your
              plans. Sharing your preferred trail difficulty,
              fitness and bike setup helps establish the
              practical details of your adventure.
            </p>
          </div>

          <div className="cl-steps">
            <article>
              <span>STEP 01</span>

              <h3>Tell us about your riding</h3>

              <p>
                Share your experience, fitness, group size,
                bike setup and the type of trails you enjoy.
                Let us know your usual riding level and
                whether you are comfortable on technical,
                rocky and uneven terrain.
              </p>
            </article>

            <article>
              <span>STEP 02</span>

              <h3>Discuss the routes and trails</h3>

              <p>
                Compare destinations, trail difficulty,
                distances, elevation and seasonal conditions.
                Ask about the expected terrain and daily
                stages so you can understand the effort involved.
              </p>
            </article>

            <article>
              <span>STEP 03</span>

              <h3>Review the practical details</h3>

              <p>
                Discuss the itinerary, bike requirements,
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
                Enduro mountain biking in Morocco: frequently asked questions
              </h2>

              <p>
                Find answers to common questions about Atlas
                enduro mountain biking, trail difficulty, bike
                setup, seasons and preparing for your MTB holiday.
                Understanding the routes and practical
                arrangements can help you choose an experience
                that suits your riding ability. For advice about
                a particular journey, contact us with your dates
                and riding preferences.
              </p>

              <Link className="cl-text-link" href="/contact">
                Ask us about your enduro tour <span aria-hidden="true">↗</span>
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
            src="/images/toubkal-imlil-enduro-mtb-expedition.jpg"
            alt="Enduro mountain bike adventure on the trails of the Atlas Mountains"
            loading="lazy"
          />

          <div className="cl-final-cta__overlay" />

          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">
              YOUR NEXT ENDURO ADVENTURE
            </p>

            <h2>
              Ready to ride the enduro trails of Morocco's Atlas?
            </h2>

            <p>
              Tell us when you would like to travel, what kind
              of trails you enjoy and your mountain biking
              experience. Share your group size, preferred
              riding level and bike setup so you can start
              discussing routes, destinations and practical
              arrangements for your Atlas Mountains enduro holiday.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your Enduro Adventure
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="/cycling-trips/mtb"
              >
                View All MTB Tours
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