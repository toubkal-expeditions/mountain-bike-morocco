import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Atlas Mountains MTB Tours | Guided Mountain Biking Morocco",
  description:
    "Explore the Atlas Mountains by mountain bike. Discover guided MTB tours around Imlil and Toubkal, High Atlas singletrack, technical descents and multi-day adventures in Morocco.",
  alternates: {
    canonical: "/atlas-mountains-mtb-tours",
  },
  openGraph: {
    title: "Atlas Mountains MTB Tours | Mountain Bike Morocco",
    description:
      "Ride Morocco's High Atlas on guided mountain bike tours. Explore Imlil, the Toubkal region, remote Berber villages and mountain singletrack on private and multi-day MTB adventures.",
    url: "https://mountain-bike-morocco.com/atlas-mountains-mtb-tours",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/atlas-mountains-singletrack.jpg",
        alt: "Mountain biking on singletrack trails in the Atlas Mountains",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Mountains MTB Tours | Mountain Bike Morocco",
    description:
      "Explore the High Atlas by mountain bike, from Imlil and Toubkal trails to multi-day singletrack adventures in Morocco.",
    images: ["/images/atlas-mountains-singletrack.jpg"],
  },
};

const tours = [
  {
    number: "01",
    duration: "5 days",
    label: "ATLAS · ENDURO MTB",
    destination: "HIGH ATLAS MOUNTAINS",
    title: "Atlas Enduro MTB Tour",
    description:
      "Discover the mountain trails and descents of the Atlas region on a five-day enduro mountain biking adventure. Ride through rugged mountain landscapes and explore varied terrain with a guided itinerary designed for riders who enjoy technical trails, challenging descents and genuine mountain biking.",
    image: "/images/enduro-cycling-expeditions-morocco.jpg",
    href: "/cycling-trips/trip/atlas-enduro-mtb-tour-5-day",
  },
  {
    number: "02",
    duration: "6 days",
    label: "ATLAS · MOUNTAIN CYCLING",
    destination: "HIGH ATLAS MOUNTAINS",
    title: "Atlas Mountains Cycling Tour",
    description:
      "Experience six days of cycling through the spectacular Atlas Mountains. Discover mountain roads, traditional villages and beautiful valleys while exploring the region at a rewarding pace. This journey is an opportunity to experience the landscapes and culture of the High Atlas on two wheels.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/cycling-trips/trip/atlas-mountains-cycling-tour-6-day",
  },
  {
    number: "03",
    duration: "6 days",
    label: "HIGH ATLAS · SINGLETRACK",
    destination: "HIGH ATLAS SINGLETRACK",
    title: "Atlas Singletrack Mountain Bike Tour",
    description:
      "Explore the High Atlas on a six-day guided mountain biking adventure. Ride selected singletrack and mountain trails through remote valleys and traditional Amazigh villages, with an itinerary planned around the group's technical ability, fitness and preferred riding style.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/trip/atlas-singletrack-mountain-bike-tour-6-day",
  },
];

const destinations = [
  {
    title: "High Atlas Mountains",
    text:
      "The High Atlas is a varied mountain biking destination, with rocky tracks, remote village paths, mountain passes and challenging descents. Route selection depends on your riding experience, fitness, the season and the condition of the trails.",
    image: "/images/Explore-Atlas-Mountains-bike.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Imlil & Toubkal Valley",
    text:
      "Beneath Mount Toubkal, the Imlil Valley is surrounded by dramatic peaks, terraced fields and traditional Amazigh villages. Its mountain setting offers different riding possibilities, with routes selected according to elevation, trail surfaces and technical ability.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil",
  },
  {
    title: "Marrakech & Atlas Foothills",
    text:
      "Marrakech is a convenient gateway to the Atlas Mountains and surrounding countryside. Depending on your itinerary, you can travel from the city to the mountain foothills and combine time in Marrakech with guided riding in the surrounding region.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/destinations/marrakech",
  },
];

const faqs = [
  {
    question: "Where are the best places for mountain biking in the Atlas Mountains?",
    answer:
      "The Imlil and Toubkal valleys, the surrounding High Atlas villages and mountain routes all offer different riding experiences. The best area for your trip depends on your preferred terrain, technical ability, fitness, available time and the season.",
  },
  {
    question: "What level of experience do I need for Atlas Mountains MTB tours?",
    answer:
      "The required experience depends on the itinerary. Some mountain tracks may suit recreational off-road riders, while technical singletrack, steep descents and demanding climbs require stronger bike-handling skills and fitness. Share your previous riding experience before selecting a route.",
  },
  {
    question: "When is the best time for mountain biking in the Atlas Mountains?",
    answer:
      "Spring and autumn are popular seasons for many Atlas mountain biking trips, with generally favourable conditions in several riding areas. Weather changes with altitude and location. Lower elevations can be hot in summer, while higher mountain routes may experience cold conditions or snow during winter.",
  },
  {
    question: "Are Atlas Mountains mountain bike tours guided?",
    answer:
      "These MTB adventures are organised around guided riding and local route knowledge. The guiding, support arrangements and itinerary depend on the selected tour and your group's requirements. Contact us to discuss the details before booking.",
  },
  {
    question: "Can I arrange a private Atlas Mountains MTB tour?",
    answer:
      "You can enquire about private mountain biking arrangements for individuals, couples and groups. Provide your preferred dates, group size, riding experience and preferred terrain so the itinerary and practical arrangements can be discussed.",
  },
  {
    question: "Can I start an Atlas Mountains MTB tour from Marrakech?",
    answer:
      "Yes. Marrakech is a common starting point for mountain biking journeys into the High Atlas. Travel time and transfer arrangements depend on the selected riding area, route and itinerary.",
  },
  {
    question: "Can I bring my own mountain bike?",
    answer:
      "You can discuss travelling with your own mountain bike when making an enquiry. Your bike should be suitable for the planned terrain and in good mechanical condition. Remember to confirm bike transport, spare parts and equipment arrangements before travelling.",
  },
  {
    question: "What should I bring for an Atlas Mountains MTB tour?",
    answer:
      "Bring a properly fitting helmet, gloves, suitable riding clothing, cycling shoes and sun protection. Protective equipment should match the terrain and technical difficulty of your chosen route. Depending on the season and altitude, warm layers and waterproof clothing may also be necessary.",
  },
];

export default function AtlasMountainsMtbToursPage() {
  return (
    <>
      <main className="cycling-listing atlas-mtb-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/atlas-mountains-singletrack.jpg"
            alt="Mountain biking on a singletrack trail in Morocco's Atlas Mountains"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />

          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">
              MOUNTAIN BIKING · HIGH ATLAS · MOROCCO
            </p>

            <h1>Atlas Mountains MTB Tours</h1>

            <p className="cl-hero__intro">
              Discover the High Atlas on a guided mountain biking
              adventure in Morocco. Ride mountain singletrack, explore
              remote valleys and traditional Amazigh villages, and
              experience the landscapes around Imlil and Mount Toubkal.
              From technical trail riding to multi-day MTB journeys,
              explore the Atlas on an adventure planned around your
              experience and riding preferences.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{
                  pathname: "/contact",
                  query: {
                    tour: "Atlas Mountains MTB Tours",
                    request: "booking",
                  },
                }}
              >
                Plan Your Atlas MTB Adventure
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="#atlas-mtb-tours"
              >
                Explore MTB Tours
              </Link>
            </div>

            <div className="cl-hero__meta">
              <span>GUIDED MTB ADVENTURES</span>
              <span>HIGH ATLAS SINGLETRACK & MOUNTAIN TRAILS</span>
              <span>PRIVATE TOUR OPTIONS</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">
              RIDE THE HIGH ATLAS
            </p>
            <h2>
              Discover the Atlas Mountains, one trail at a time.
            </h2>
          </div>

          <div className="cl-intro__copy">
            <p>
              The Atlas Mountains are among Morocco's most distinctive
              mountain biking destinations. Rising above the plains of
              Marrakech, the High Atlas combines rugged peaks, mountain
              passes, rocky tracks and traditional villages connected
              by paths that cross the valleys and hillsides.
            </p>

            <p>
              Around Imlil and the Toubkal region, mountain bikers can
              discover varied terrain and dramatic scenery beneath
              North Africa's highest peak. Further across the High Atlas,
              longer journeys offer the opportunity to explore different
              valleys, experience rural mountain life and discover the
              changing character of the region.
            </p>

            <p>
              Choosing the right MTB adventure means considering more
              than distance. Trail difficulty, elevation, daily climbing,
              fitness and seasonal conditions all influence the ride.
              Whether you prefer technical singletrack or a longer
              mountain biking journey, your itinerary should reflect
              your experience and the type of terrain you enjoy.
            </p>

            <Link className="cl-text-link" href="/cycling-trips/mtb">
              Explore all mountain bike tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="atlas-mtb-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  GUIDED ATLAS MOUNTAIN BIKE ADVENTURES
                </p>
                <h2>
                  Discover mountain bike tours in the Atlas Mountains
                </h2>
              </div>

              <p>
                Find an Atlas MTB adventure to match your riding style.
                Explore enduro trail riding, a multi-day Atlas cycling
                journey and guided singletrack through the High Atlas.
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
                      ATLAS MTB · {tour.destination}
                    </p>

                    <h3 className="home-tour-card__title">
                      <Link href={tour.href}>{tour.title}</Link>
                    </h3>

                    <p className="home-tour-card__description">
                      {tour.description}
                    </p>

                    <div className="home-tour-card__meta">
                      <span className="home-tour-card__meta-item">
                        <span className="home-tour-card__meta-icon" aria-hidden="true">◷</span>
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
          </div>
        </section>

        <section className="cl-dark-band">
          <div className="cl-wrap cl-dark-band__inner">
            <div>
              <p className="cl-eyebrow">
                BEYOND THE ORDINARY
              </p>
              <h2>
                Experience Morocco's High Atlas on two wheels.
              </h2>
            </div>

            <div>
              <p>
                Mountain biking in the Atlas is an opportunity to
                experience a remarkable mountain landscape from a
                different perspective. Follow trails through remote
                valleys, pass traditional settlements and discover
                terrain that changes with every climb and descent.
                From flowing mountain tracks to more demanding technical
                sections, each ride has its own character. The best
                experience begins with choosing routes that suit your
                skills, fitness and expectations.
              </p>

              <Link
                className="cl-button cl-button--gold"
                href={{
                  pathname: "/contact",
                  query: {
                    tour: "Private Atlas Mountains MTB Tour",
                    request: "booking",
                  },
                }}
              >
                Discuss Your Atlas MTB Trip
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">
                EXPLORE THE RIDING AREAS
              </p>
              <h2>
                Discover the mountain biking regions of the Atlas.
              </h2>
            </div>

            <p>
              The High Atlas covers a wide area, with different
              landscapes and riding conditions from one valley to
              another. Explore the mountain regions around Imlil,
              Toubkal and Marrakech to find the setting that best
              matches your MTB adventure.
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
                    MTB DESTINATION
                  </span>
                  <span className="home-tour-card__level">
                    {destination.title}
                  </span>
                </Link>

                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">
                    ATLAS MTB · {destination.title}
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
              src="/images/singletrack-biking-morocco.jpg"
              alt="Mountain biker riding a trail in the High Atlas Mountains"
              loading="lazy"
            />
          </div>

          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">
              THE ATLAS MOUNTAINS EXPERIENCE
            </p>

            <h2>
              Singletrack, mountain landscapes and traditional villages.
            </h2>

            <p>
              The High Atlas offers a distinctive environment for
              mountain biking. Rocky tracks, remote settlements,
              changing elevations and expansive mountain views create
              a riding experience shaped by the landscape. The character
              of each route depends on its surface, altitude, gradient
              and the valleys it crosses.
            </p>

            <p>
              A successful multi-day trip also needs thoughtful
              planning beyond the riding itself. Daily distances,
              climbing, transfers, rest stops, accommodation and
              support arrangements all contribute to the overall
              experience. Discussing these details in advance helps
              create an itinerary that works for your group.
            </p>

            <Link
              className="cl-button cl-button--dark"
              href="/destinations/atlas-mountains"
            >
              Discover the Atlas Mountains
            </Link>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">
                  PLAN YOUR MOUNTAIN BIKE ADVENTURE
                </p>
                <h2>
                  The right route makes all the difference.
                </h2>
              </div>

              <p>
                Atlas mountain trails vary in technical difficulty,
                climbing, distance and terrain. Taking these factors
                into account helps you choose a ride that is both
                rewarding and appropriate for your experience.
              </p>
            </div>

            <div className="cl-why-grid">
              <article>
                <span>01</span>
                <h3>Riding experience</h3>
                <p>
                  Consider your off-road experience, technical skills,
                  confidence on descents and ability to handle
                  changing mountain terrain.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Terrain and difficulty</h3>
                <p>
                  Look at trail surfaces, elevation gain, technical
                  sections and daily riding distances before choosing
                  your mountain biking itinerary.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Local route knowledge</h3>
                <p>
                  Discuss route conditions, seasonal factors, transfers
                  and the practical arrangements needed for your
                  chosen mountain ride.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Private experiences</h3>
                <p>
                  Share your dates, group size and riding preferences
                  to discuss an itinerary that reflects your priorities
                  and travel plans.
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
                How to plan your Atlas Mountains MTB tour.
              </h2>
            </div>

            <p>
              Start with your travel dates, group details and riding
              preferences. From there, discuss suitable mountain
              routes and the practical arrangements needed for your
              trip. The itinerary will depend on your experience,
              the season and the areas you want to explore.
            </p>
          </div>

          <div className="cl-steps">
            <article>
              <span>STEP 01</span>
              <h3>Tell us about your riding</h3>
              <p>
                Share your travel dates, group size, previous mountain
                biking experience and the type of trails you enjoy.
              </p>
            </article>

            <article>
              <span>STEP 02</span>
              <h3>Choose your riding area</h3>
              <p>
                Consider Imlil, the Toubkal Valley and the wider High
                Atlas according to the landscapes and mountain biking
                experience you want to discover.
              </p>
            </article>

            <article>
              <span>STEP 03</span>
              <h3>Review your itinerary</h3>
              <p>
                Discuss route difficulty, daily riding time, transfers,
                equipment, accommodation and support arrangements
                before confirming your trip.
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
                Atlas Mountains MTB tours: FAQs
              </h2>

              <p>
                Planning a mountain biking trip in Morocco? Find
                answers to common questions about riding levels,
                seasons, destinations and private tour arrangements.
                If you have a particular route or travel date in mind,
                contact us to discuss your options.
              </p>

              <Link className="cl-text-link" href="/contact">
                Ask us about your Atlas MTB trip <span aria-hidden="true">↗</span>
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
            src="/images/atlas-mountains-singletrack.jpg"
            alt="Mountain biking adventure in Morocco's Atlas Mountains"
            loading="lazy"
          />

          <div className="cl-final-cta__overlay" />

          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">
              YOUR NEXT ATLAS MOUNTAIN BIKE ADVENTURE
            </p>

            <h2>
              Ready to ride the Atlas Mountains?
            </h2>

            <p>
              Tell us when you plan to travel, how you like to ride
              and what kind of mountain biking experience you are
              looking for. Start planning a guided MTB adventure
              through Morocco's High Atlas.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{
                  pathname: "/contact",
                  query: {
                    tour: "Atlas Mountains MTB Tours",
                    request: "booking",
                  },
                }}
              >
                Plan Your Atlas MTB Tour
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
            <Link href="/destinations/imlil">Imlil Valley</Link>
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