import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-MTB Morocco | Electric Mountain Bike Tours & Adventures",
  description:
    "Discover E-MTB tours in Morocco. Explore the Atlas Mountains, Imlil, Agafay and southern Morocco on guided electric mountain bike adventures with local support.",
  alternates: {
    canonical: "/e-mtb-morocco",
  },
  openGraph: {
    title: "E-MTB Morocco | Electric Mountain Bike Tours",
    description:
      "Explore Morocco on an electric mountain bike. Discover guided E-MTB adventures through the Atlas Mountains, traditional Berber villages and spectacular landscapes.",
    url: "https://mountain-bike-morocco.com/e-mtb-morocco",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/e-mtb-tour-morocco.jpg",
        alt: "Electric mountain biking adventure in the Atlas Mountains of Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-MTB Morocco | Electric Mountain Bike Tours",
    description:
      "Discover guided electric mountain bike adventures through Morocco's Atlas Mountains, valleys and desert landscapes.",
    images: ["/images/e-mtb-tour-morocco.jpg"],
  },
};

const tours = [
  {
    number: "01",
    duration: "8 days",
    label: "E-MTB · HIGH ATLAS ADVENTURE",
    destination: "ATLAS MOUNTAINS",
    title: "Atlas Mountains E-MTB Adventure",
    description:
      "Discover the High Atlas on an extended electric mountain biking journey through mountain valleys, traditional Berber villages and spectacular landscapes. Pedal assistance helps make longer climbs and mountain routes more accessible, while the daily itinerary can be adapted to your riding experience, fitness and preferred terrain. Enjoy a multi-day experience exploring the region around Imlil and Mount Toubkal.",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/cycling-trips/e-mtb",
  },
  {
    number: "02",
    duration: "5 days",
    label: "E-MTB · MOUNTAIN VALLEYS",
    destination: "IMLIL & HIGH ATLAS",
    title: "High Atlas Electric Mountain Bike Tour",
    description:
      "Explore the mountain landscapes around Imlil on a guided E-MTB experience. Ride through traditional villages, mountain tracks and scenic valleys while electric assistance helps you manage the climbs and enjoy more time exploring. Routes can be selected according to your riding ability, battery range and the conditions along the way.",
    image: "/images/day-ebike-tour-from-marrakech.jpg",
    href: "/cycling-trips/e-mtb",
  },
  {
    number: "03",
    duration: "4 days",
    label: "E-MTB · PRIVATE CYCLING",
    destination: "ATLAS FOOTHILLS",
    title: "Atlas Valley E-MTB Escape",
    description:
      "Discover the quieter landscapes of the Atlas foothills on an electric mountain bike. Follow mountain tracks and valley routes through traditional settlements and changing countryside. A private guided experience offers flexibility around daily distances, elevation and the type of riding you prefer, with time to enjoy the scenery and local culture.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/cycling-trips/e-mtb",
  },
  {
    number: "04",
    duration: "8 days",
    label: "E-MTB · SOUTHERN MOROCCO",
    destination: "SOUTH MOROCCO & DESERT",
    title: "South Morocco E-MTB Adventure",
    description:
      "Experience a different side of Morocco on an electric mountain biking journey through the landscapes of the south. Discover dry valleys, traditional settlements and changing desert scenery on routes selected for your riding experience and the capabilities of your electric mountain bike. The itinerary can combine off-road riding with local culture and time to appreciate the landscapes.",
    image: "/images/mtb-morocco-Saghro.JPG",
    href: "/cycling-trips/e-mtb",
  },
];

const destinations = [
  {
    title: "Imlil and Mount Toubkal",
    text:
      "Imlil is an excellent starting point for exploring the High Atlas by electric mountain bike. Mountain tracks and valley routes pass through traditional Berber villages, terraced fields and dramatic scenery beneath Mount Toubkal. Pedal assistance can make longer climbs more manageable, while route selection should consider elevation, battery range and the experience of your group.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil",
  },
  {
    title: "High Atlas Mountains",
    text:
      "The High Atlas offers a varied landscape for E-MTB adventures, with mountain tracks, remote valleys, village paths and panoramic routes. Electric assistance provides additional support on climbs and allows riders to explore different parts of the mountain landscape. Routes should be planned around battery capacity, elevation, terrain and weather conditions.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Agafay Desert",
    text:
      "South of Marrakech, Agafay offers a distinctive environment for electric mountain biking. Its rocky terrain, rolling tracks and open landscapes create opportunities for off-road exploration. Routes should be selected with consideration for temperature, water, battery range and the technical ability of the group.",
    image: "/images/Desert-Agafay-Morocco.jpg",
    href: "/destinations/agafay-desert",
  },
  {
    title: "Marrakech and the Foothills",
    text:
      "The countryside around Marrakech provides access to the foothills and mountain landscapes towards the High Atlas. It is an excellent starting point for shorter electric mountain bike experiences or for combining a city stay with a longer cycling holiday. The best route depends on your available time, riding preferences and transfer arrangements.",
    image: "/images/day-ebike-tour-from-marrakech.jpg",
    href: "/destinations/marrakech",
  },
];

const faqs = [
  {
    question: "What is E-MTB mountain biking?",
    answer:
      "E-MTB stands for electric mountain biking. An electric mountain bike uses a motor to provide pedal assistance while you ride. You still pedal and control the bike as normal, but the assistance helps reduce the effort required on climbs and longer routes. The level of assistance can usually be adjusted to suit the terrain and your riding preferences.",
  },
  {
    question: "Is Morocco a good destination for electric mountain biking?",
    answer:
      "Yes. Morocco offers a varied landscape for electric mountain biking, including the Atlas Mountains, traditional mountain valleys, foothill tracks and the rocky terrain around Agafay. The best routes depend on your riding experience, the type of E-MTB available and the battery range required for the planned journey.",
  },
  {
    question: "Do I need previous mountain biking experience?",
    answer:
      "You do not necessarily need advanced mountain biking experience, but you should be comfortable riding a bicycle and handling uneven surfaces. Some routes include rocky tracks, loose terrain and technical sections. Your experience and confidence should guide the choice of route and daily distance.",
  },
  {
    question: "How far can I ride on an electric mountain bike?",
    answer:
      "The distance depends on battery capacity, assistance level, rider weight, elevation, terrain, temperature and riding style. Mountain routes with long climbs and rough surfaces can use more battery than flatter terrain. The daily itinerary should account for the expected range and available charging or battery support arrangements.",
  },
  {
    question: "Can I ride an E-MTB in the Atlas Mountains?",
    answer:
      "Yes. The Atlas Mountains offer a variety of mountain tracks, village routes and scenic trails suitable for electric mountain biking when selected appropriately. Routes around Imlil and the surrounding valleys can include significant elevation changes, so battery range, terrain and rider experience should be considered when planning.",
  },
  {
    question: "When is the best time for E-MTB in Morocco?",
    answer:
      "Spring and autumn are generally popular seasons for electric mountain biking in the Atlas Mountains because temperatures are often more comfortable. Conditions vary with altitude and weather. Lower desert and foothill routes can be hot during summer, so the timing and daily schedule should reflect the destination.",
  },
  {
    question: "Are electric mountain bikes suitable for beginners?",
    answer:
      "Electric mountain bikes can make climbs and longer routes more accessible, but they are still mountain bikes and require balance, braking skills and control on uneven terrain. Beginners should start with routes that match their experience and avoid technical trails beyond their ability.",
  },
  {
    question: "Can I combine E-MTB riding with local cultural experiences?",
    answer:
      "Yes. Electric mountain biking in Morocco can include time in traditional Berber villages, mountain valleys and local communities. Depending on the itinerary, there may be opportunities to enjoy local food, stop at viewpoints and discover the region beyond the trails.",
  },
  {
    question: "What should I check about the E-MTB before booking?",
    answer:
      "Ask about the bike type, battery capacity, expected range, charging arrangements and whether spare batteries or support are available. It is also useful to understand the planned terrain, daily distance, elevation gain and technical difficulty before choosing a tour.",
  },
  {
    question: "Can I book a private guided E-MTB tour?",
    answer:
      "You can enquire about a private electric mountain biking experience for yourself, a couple, friends or a group. Share your preferred dates, group size, riding experience and the type of landscapes you want to explore. These details help establish suitable routes and practical arrangements for your trip.",
  },
];

export default function EMTBMoroccoPage() {
  return (
    <>
      <main className="cycling-listing gravel-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/e-mtb-tour-morocco.jpg"
            alt="Electric mountain biking through the Atlas Mountains of Morocco"
            fetchPriority="high"
          />

          <div className="cl-hero__shade" />

          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">
              E-MTB · ELECTRIC MOUNTAIN BIKING · MOROCCO
            </p>

            <h1>Electric Mountain Bike Tours in Morocco</h1>

            <p className="cl-hero__intro">
              Discover Morocco on an electric mountain bike,
              exploring spectacular mountain landscapes,
              traditional Berber villages and remote valleys.
              Pedal assistance makes longer climbs and
              mountain routes more accessible, allowing
              you to enjoy more of the scenery along the way.
              From the High Atlas around Imlil and Mount
              Toubkal to the rocky landscapes of Agafay
              and southern Morocco, explore guided E-MTB
              adventures shaped around your riding experience,
              preferred terrain and travel ambitions.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your E-MTB Adventure
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="#morocco-emtb-tours"
              >
                Explore E-MTB Tours
              </Link>
            </div>

            <div className="cl-hero__meta">
              <span>ELECTRIC MOUNTAIN BIKING</span>
              <span>ATLAS & DESERT LANDSCAPES</span>
              <span>GUIDED E-MTB ADVENTURES</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">
              EXPLORE MORE WITH ELECTRIC ASSISTANCE
            </p>

            <h2>
              Discover Morocco's mountain landscapes on an electric mountain bike.
            </h2>

            <img
              src="/images/atlas-mountains-cycling-tour-morocco.jpg"
              alt="Cycling through the mountain landscapes of the Moroccan Atlas"
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
              Electric mountain biking offers a different way
              to discover Morocco's diverse landscapes.
              Pedal assistance helps reduce the effort
              required on climbs and can make longer
              mountain routes more accessible, allowing
              riders to explore more of the countryside
              while still enjoying the experience of
              riding off-road.
            </p>

            <p>
              Around Imlil and Mount Toubkal, mountain
              tracks pass through traditional villages,
              terraced fields and dramatic valleys.
              Electric assistance can help riders manage
              the changing elevations, although route
              selection should always consider terrain,
              technical difficulty and battery range.
            </p>

            <p>
              Beyond the High Atlas, Morocco offers
              different environments for electric
              mountain biking. The foothills around
              Marrakech, the rocky landscapes of Agafay
              and the wider southern regions each offer
              their own character and riding conditions.
            </p>

            <p>
              Whether you want a shorter guided ride
              or a longer E-MTB holiday, a well-planned
              itinerary should balance daily distance,
              elevation, battery capacity and opportunities
              to enjoy the landscape and local culture.
            </p>

            <Link className="cl-text-link" href="/cycling-trips/e-mtb">
              Explore all E-MTB tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="morocco-emtb-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  CHOOSE YOUR E-MTB EXPERIENCE
                </p>

                <h2>
                  Guided electric mountain bike tours in Morocco
                </h2>
              </div>

              <p>
                Explore electric mountain biking experiences
                across the Atlas Mountains and southern
                Morocco. From multi-day mountain journeys
                around Imlil to routes through the foothills
                and desert landscapes, each itinerary has
                different considerations, including daily
                distance, elevation, battery range and
                terrain. Compare the experiences and
                enquire about a route suited to your plans.
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
                  MORE ELECTRIC CYCLING ADVENTURES
                </p>

                <h2>
                  Explore more E-MTB tours and cycling experiences in Morocco
                </h2>
              </div>

              <p>
                Looking for a different destination or riding
                experience? Explore the full E-MTB collection
                for more guided routes and multi-day electric
                mountain biking adventures across Morocco.
                Compare the available options and contact
                us to discuss an itinerary around your dates,
                riding experience and group requirements.
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
                RIDE FURTHER WITH ELECTRIC ASSISTANCE
              </p>

              <h2>
                Discover more of the Atlas with an electric mountain bike.
              </h2>
            </div>

            <div>
              <p>
                Electric assistance can make mountain climbs
                and longer routes more manageable, but
                E-MTB riding still requires good bike
                handling and awareness of the terrain.
                Rocky tracks, loose surfaces and changing
                elevations all influence how a route
                should be planned.
              </p>

              <p>
                Battery range is an important consideration
                on mountain journeys. Elevation, assistance
                level, rider weight, terrain and temperature
                can all affect how much energy is used.
                Daily distances should be planned around
                the capabilities of the bike and the
                conditions expected along the route.
              </p>

              <p>
                Before choosing a tour, discuss the bike
                type, battery capacity, charging arrangements,
                expected distance and elevation. These
                details help establish whether the proposed
                itinerary is suitable for your group.
              </p>

              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Discuss Your E-MTB Requirements
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
                Explore Morocco's electric mountain biking destinations.
              </h2>
            </div>

            <p>
              From the mountain villages around Imlil to
              the wider High Atlas and the rocky terrain
              of Agafay, Morocco offers a variety of
              landscapes to explore by electric mountain
              bike. Each region has its own character,
              terrain and riding conditions. The right
              destination depends on your experience,
              preferred routes and available time.
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
                    ELECTRIC MOUNTAIN BIKING · {destination.title}
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
              src="/images/atlas-mountains-cycling-tour-morocco.jpg"
              alt="Mountain valley and traditional Berber village in Morocco"
              loading="lazy"
            />
          </div>

          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">
              MORE THAN THE RIDE
            </p>

            <h2>
              Discover the landscapes and culture of Morocco along the way.
            </h2>

            <p>
              An electric mountain biking journey in Morocco
              is about more than the distance covered.
              Routes pass through mountain villages,
              cultivated terraces and dramatic valleys,
              offering opportunities to experience the
              region and its communities along the way.
            </p>

            <p>
              Around Imlil and the Toubkal region,
              traditional settlements sit within a
              landscape of steep mountain slopes and
              changing elevations. Exploring these
              valleys by E-MTB offers a different
              perspective on the High Atlas, with
              opportunities to enjoy the scenery
              at your own pace.
            </p>

            <p>
              Electric assistance can help make longer
              mountain routes more accessible, leaving
              more opportunity to appreciate the
              landscape and enjoy stops along the way.
              Local food, village visits and scenic
              viewpoints can all form part of a
              thoughtfully planned itinerary.
            </p>

            <p>
              Whether you are travelling as a couple,
              with friends or as a group, the best
              experience balances riding, local
              discovery and the practical details
              of travelling through the mountains.
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
                  What to consider when planning an E-MTB adventure.
                </h2>
              </div>

              <p>
                A successful electric mountain biking trip
                balances riding ambition with practical
                details. Understanding the bike, battery
                range, terrain and daily elevation helps
                establish a suitable itinerary. Before
                choosing a tour, discuss your experience,
                equipment requirements and the support
                arrangements needed for your preferred route.
              </p>
            </div>

            <div className="cl-why-grid">
              <article>
                <span>01</span>

                <h3>Suitable electric bikes</h3>

                <p>
                  Discuss the E-MTB type, motor assistance,
                  battery capacity and bike setup required
                  for the planned terrain.
                </p>
              </article>

              <article>
                <span>02</span>

                <h3>Battery-aware route planning</h3>

                <p>
                  Consider distance, elevation, assistance
                  levels, terrain and charging arrangements
                  when planning daily riding stages.
                </p>
              </article>

              <article>
                <span>03</span>

                <h3>Routes matched to your ability</h3>

                <p>
                  Choose trails and mountain tracks that
                  reflect your bike-handling skills,
                  fitness and experience on uneven terrain.
                </p>
              </article>

              <article>
                <span>04</span>

                <h3>Time to discover Morocco</h3>

                <p>
                  Make space for mountain views, village
                  life, local food and the landscapes
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
                How to organise your electric mountain biking tour in Morocco.
              </h2>
            </div>

            <p>
              You do not need to have every detail decided
              before making an enquiry. Start with your
              dates, riding experience and group requirements,
              then discuss which routes and destinations
              might suit your plans. Sharing your preferred
              daily distance, terrain and E-MTB requirements
              helps establish the practical details of
              your adventure.
            </p>
          </div>

          <div className="cl-steps">
            <article>
              <span>STEP 01</span>

              <h3>Tell us about your riding</h3>

              <p>
                Share your experience, fitness, group size
                and the type of routes you enjoy. Let us
                know whether you have your own E-MTB or
                need to discuss bike arrangements.
              </p>
            </article>

            <article>
              <span>STEP 02</span>

              <h3>Discuss routes and battery range</h3>

              <p>
                Compare destinations, daily distances,
                elevation and terrain. Discuss battery
                capacity, charging arrangements and
                support options for your planned route.
              </p>
            </article>

            <article>
              <span>STEP 03</span>

              <h3>Review the practical details</h3>

              <p>
                Discuss the itinerary, bike requirements,
                accommodation, transfers and support
                before making final arrangements. Confirm
                what is included and how route changes
                would be handled if conditions change.
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
                Electric mountain biking in Morocco: frequently asked questions
              </h2>

              <p>
                Find answers to common questions about
                E-MTB riding, electric bike range, trail
                difficulty, seasons and preparing for
                your cycling holiday. Understanding the
                bike and practical arrangements can help
                you choose an experience that suits your
                riding ability. For advice about a
                particular journey, contact us with
                your dates and preferences.
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
            src="/images/mtb-morocco-Saghro.JPG"
            alt="Explore the landscapes of Morocco on an electric mountain bike"
            loading="lazy"
          />

          <div className="cl-final-cta__overlay" />

          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">
              YOUR NEXT E-MTB ADVENTURE
            </p>

            <h2>
              Ready to discover Morocco on an electric mountain bike?
            </h2>

            <p>
              Tell us when you would like to travel, what
              kind of routes you enjoy and your electric
              mountain biking experience. Share your group
              size, preferred riding level and bike
              requirements so you can start discussing
              destinations, battery arrangements and
              practical details for your E-MTB holiday.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your E-MTB Adventure
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