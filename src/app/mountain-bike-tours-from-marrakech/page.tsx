import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Mountain Bike Tours from Marrakech | Guided MTB Morocco",
  description:
    "Book a guided mountain bike tour from Marrakech and explore the Atlas Mountains, Imlil Valley and Agafay. Discover private MTB day trips and multi-day cycling adventures in Morocco.",
  alternates: {
    canonical: "/mountain-bike-tours-from-marrakech",
  },
  openGraph: {
    title: "Mountain Bike Tours from Marrakech | Mountain Bike Morocco",
    description:
      "Discover guided mountain bike tours from Marrakech. Explore Atlas Mountain trails, Imlil Valley and Agafay on private MTB day trips and multi-day adventures.",
    url: "https://mountain-bike-morocco.com/mountain-bike-tours-from-marrakech",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
        alt: "Mountain biking in the Atlas Mountains from Marrakech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mountain Bike Tours from Marrakech | Mountain Bike Morocco",
    description:
      "Ride Morocco's Atlas Mountains on a guided MTB adventure from Marrakech. Explore private day rides and multi-day mountain biking tours.",
    images: ["/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"],
  },
};

const tours = [
  {
    number: "01",
    duration: "8 days",
    label: "HIGH ATLAS · SINGLETRACK",
    destination: "HIGH ATLAS MOUNTAINS",
    title: "Morocco Singletrack Atlas Mountains",
    description:
      "Spend eight days exploring the mountain trails and landscapes of the High Atlas on a private guided mountain biking adventure. Discover varied terrain, traditional Amazigh villages and rewarding singletrack riding, with the itinerary organised around the group's experience and riding ability.",
    image: "/images/singletrack-biking-morocco.jpg",
    href: "/cycling-trips/trip/morocco-singletrack-atlas-mountains-8-day",
  },
  {
    number: "02",
    duration: "6 days",
    label: "ATLAS · TECHNICAL TRAILS",
    destination: "ATLAS MOUNTAINS",
    title: "Atlas Singletrack Mountain Bike Tour",
    description:
      "Explore the High Atlas on a six-day mountain biking journey through mountain landscapes, rural valleys and selected singletrack trails. The riding programme can be planned around your group's technical ability, fitness, preferred terrain and daily riding expectations.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/trip/atlas-singletrack-mountain-bike-tour-6-day",
  },
  {
    number: "03",
    duration: "Flexible",
    label: "PRIVATE MTB · CUSTOM ROUTE",
    destination: "MARRAKECH & ATLAS",
    title: "Private Mountain Bike Experience from Marrakech",
    description:
      "Prefer to organise your own riding schedule? Enquire about a private mountain biking experience starting from Marrakech. Whether you have a few hours or more time to explore, discuss your riding level, group size and preferred terrain to identify suitable options.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/cycling-trips/mtb",
  },
];

const destinations = [
  {
    title: "High Atlas Mountains",
    text:
      "Discover the mountain scenery of the High Atlas, where rocky tracks, village paths, mountain climbs and descents create a varied riding environment. Routes differ in distance, elevation and technical difficulty, making it important to choose an itinerary that matches your experience and the conditions.",
    image: "/images/Explore-Atlas-Mountains-bike.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Imlil Valley",
    text:
      "Located beneath Mount Toubkal, the Imlil Valley offers a dramatic mountain setting surrounded by traditional Amazigh villages and rugged landscapes. It is an appealing area to explore by mountain bike, with route selection depending on elevation, terrain, technical ability and available time.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil",
  },
  {
    title: "Agafay Desert",
    text:
      "Experience a different side of Morocco in the rocky landscapes of the Agafay Desert. Its open scenery and dry terrain offer an alternative to the mountain valleys of the Atlas. Riding plans should take account of rocky surfaces, exposure, temperatures and the group's experience.",
    image: "/images/Agafay-desert-morocco.jpg",
    href: "/destinations/agafay-desert",
  },
];

const faqs = [
  {
    question: "Can I book a mountain bike tour starting in Marrakech?",
    answer:
      "Yes. Marrakech is a convenient starting point for guided mountain biking experiences in Morocco. You can enquire about a day ride or a longer adventure in the Atlas Mountains. Your departure arrangements, transfer requirements, riding area and itinerary can be discussed before booking.",
  },
  {
    question: "Where can I go mountain biking from Marrakech?",
    answer:
      "Popular areas to consider include the Atlas foothills, Imlil Valley, the High Atlas Mountains and Agafay Desert. Each destination offers a different landscape and riding experience. The best option depends on your available time, technical ability, preferred terrain and the conditions at the time of your trip.",
  },
  {
    question: "Are mountain bike tours from Marrakech suitable for beginners?",
    answer:
      "Some countryside and less technical routes may suit riders with limited mountain biking experience. However, steep descents, technical singletrack and demanding mountain terrain require greater confidence and ability. Tell us about your experience so that suitable route options can be discussed.",
  },
  {
    question: "What level of mountain biking experience do I need?",
    answer:
      "There is no single level required for every trip. Suitable experience depends on the selected route and its terrain. When enquiring, describe your off-road riding background, climbing fitness, confidence on descents and experience with technical trails. This helps determine which type of adventure is appropriate.",
  },
  {
    question: "When is the best time for mountain biking in the Atlas Mountains?",
    answer:
      "Spring and autumn are generally popular seasons for mountain biking in many parts of the Atlas Mountains, thanks to more moderate temperatures. Conditions can vary considerably with altitude and location. Lower areas can be hot in summer, while higher mountain routes may experience cold weather or snow during winter.",
  },
  {
    question: "Can I arrange a private mountain bike tour?",
    answer:
      "Yes. You can enquire about private mountain biking arrangements for individuals, couples, families and groups. Share your preferred dates, group size, riding experience and the type of terrain you want to explore. The route and practical arrangements can then be discussed around your requirements.",
  },
  {
    question: "Can I bring my own mountain bike?",
    answer:
      "You can discuss bringing your own mountain bike when planning your trip. Your bike should be suitable for the planned terrain and in good mechanical condition. Make sure to confirm bike transport, equipment requirements, spare parts and any support arrangements before travelling.",
  },
  {
    question: "What should I bring for an MTB tour?",
    answer:
      "Bring a properly fitting helmet, gloves, suitable cycling clothing, riding shoes and sun protection. For more technical routes, appropriate protective equipment may also be advisable. Depending on the season, altitude and expected weather, additional layers and waterproof clothing may be useful.",
  },
];

export default function MountainBikeToursFromMarrakechPage() {
  return (
    <>
      <main className="cycling-listing marrakech-cycling-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"
            alt="Mountain biking in the Atlas Mountains on a guided trip from Marrakech"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />

          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">
              MOUNTAIN BIKING · MARRAKECH · HIGH ATLAS
            </p>

            <h1>Mountain Bike Tours from Marrakech</h1>

            <p className="cl-hero__intro">
              Discover Morocco beyond the city on a guided mountain
              biking adventure from Marrakech. Ride through the Atlas
              foothills, explore the mountain landscapes around Imlil
              and experience the trails of the High Atlas. From private
              day rides to multi-day singletrack journeys, find a
              mountain biking experience planned around your riding
              ability, preferred terrain and available time.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{
                  pathname: "/contact",
                  query: {
                    tour: "Mountain Bike Tours from Marrakech",
                    request: "booking",
                  },
                }}
              >
                Plan Your MTB Adventure
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="#marrakech-mtb-tours"
              >
                Explore MTB Tours
              </Link>
            </div>

            <div className="cl-hero__meta">
              <span>GUIDED MTB ADVENTURES</span>
              <span>ATLAS SINGLETRACK & MOUNTAIN TRAILS</span>
              <span>PRIVATE TOUR OPTIONS</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">
              YOUR MOUNTAIN BIKE ADVENTURE STARTS HERE
            </p>
            <h2>
              From Marrakech to the trails of the High Atlas.
            </h2>
          </div>

          <div className="cl-intro__copy">
            <p>
              Marrakech is an ideal starting point for exploring
              Morocco by mountain bike. Beyond the city, the
              surroundings open into rural countryside, rocky
              foothills, mountain valleys and traditional Amazigh
              villages. The nearby Atlas Mountains offer a striking
              change of scenery and opportunities to discover
              different types of off-road terrain.
            </p>

            <p>
              Depending on your plans, you can enquire about a
              shorter ride outside Marrakech or a longer mountain
              biking journey through the High Atlas. Some routes
              focus on scenic tracks and countryside riding, while
              others involve significant climbing, technical
              singletrack and demanding descents. Choosing the
              right route is an important part of planning your trip.
            </p>

            <p>
              Our mountain biking experiences can be discussed as
              private trips, with the programme shaped around your
              travel dates, group size, riding ability and preferred
              style of cycling. Whether you are visiting Marrakech
              for a few days or planning a dedicated MTB holiday,
              start by telling us what kind of ride you have in mind.
            </p>

            <Link className="cl-text-link" href="/cycling-trips/mtb">
              Explore all mountain bike tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="marrakech-mtb-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  GUIDED MOUNTAIN BIKE ADVENTURES
                </p>
                <h2>
                  Discover mountain bike tours from Marrakech
                </h2>
              </div>

              <p>
                Choose from selected MTB adventures in Morocco,
                including multi-day Atlas singletrack journeys
                and private mountain biking experiences. Compare
                the trips and enquire about the option that best
                matches your riding plans.
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
                      MOUNTAIN BIKE TOUR
                    </p>

                    <h3 className="home-tour-card__title">
                      <Link href={tour.href}>{tour.title}</Link>
                    </h3>

                    <p className="home-tour-card__description">
                      {tour.description}
                    </p>

                    <div className="home-tour-card__meta">
                      <span className="home-tour-card__meta-item">
                        <span className="home-tour-card__meta-icon" aria-hidden="true">
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
                        Explore Tour
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
              <p className="cl-eyebrow">
                MORE THAN A CITY CYCLING TRIP
              </p>
              <h2>
                Discover Morocco's mountain landscapes on two wheels.
              </h2>
            </div>

            <div>
              <p>
                A mountain bike tour from Marrakech can take you
                well beyond the familiar city surroundings. Explore
                rural tracks in the foothills, ride through mountain
                valleys or plan a longer journey into the High Atlas.
                Each area offers a different character, from open
                landscapes and village routes to more technical
                mountain trails. The right experience starts with
                matching the route to your skills, fitness and
                expectations.
              </p>

              <Link
                className="cl-button cl-button--gold"
                href={{
                  pathname: "/contact",
                  query: {
                    tour: "Private Mountain Bike Tour from Marrakech",
                    request: "booking",
                  },
                }}
              >
                Discuss Your MTB Trip
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
                Mountain biking destinations around Marrakech
              </h2>
            </div>

            <p>
              The areas surrounding Marrakech offer a variety
              of landscapes for off-road cycling. Discover the
              mountain scenery of the High Atlas, the villages
              around Imlil and the rocky desert environment of
              Agafay before deciding where you would like to ride.
            </p>
          </div>

          <div className="cl-region-grid">
            {destinations.map((destination, index) => (
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
                    CYCLING DESTINATION
                  </span>
                  <span className="home-tour-card__level">
                    0{index + 1}
                  </span>
                </Link>

                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">
                    WHERE TO RIDE
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
                      Explore Destination
                    </Link>

                    <Link
                      className="home-tour-card__link"
                      href={destination.href}
                    >
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
              src="/images/singletrack-mtb-atlas-mountains.jpg"
              alt="Mountain biking on a singletrack trail in the Atlas Mountains"
              loading="lazy"
            />
          </div>

          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">
              THE ATLAS MOUNTAINS EXPERIENCE
            </p>

            <h2>
              Ride beyond the ordinary and discover Morocco's mountain trails.
            </h2>

            <p>
              The High Atlas offers a memorable setting for
              mountain biking, with rugged mountain scenery,
              traditional settlements, rocky tracks and changing
              landscapes. Riding here is about more than distance.
              The character of the trails, the elevation and the
              scenery all contribute to the experience.
            </p>

            <p>
              A well-planned MTB itinerary should balance riding
              time with transfers, rest stops and the practical
              needs of the group. For a multi-day adventure,
              daily distances, accommodation and support
              arrangements should be considered alongside the
              route itself. This helps create a realistic riding
              programme suited to the group.
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
                Every mountain biking route has its own character.
                Technical difficulty, climbing, distance, surfaces
                and weather conditions all influence the ride.
                Planning around your experience and expectations
                helps identify an appropriate adventure.
              </p>
            </div>

            <div className="cl-why-grid">
              <article>
                <span>01</span>
                <h3>Riding experience</h3>
                <p>
                  Consider your technical skills, confidence on
                  descents and previous off-road riding experience
                  when choosing a route.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Terrain and difficulty</h3>
                <p>
                  Think about trail surfaces, elevation, technical
                  sections and daily riding distances before
                  selecting your MTB adventure.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Local route planning</h3>
                <p>
                  Take account of transfer times, seasonal
                  conditions, trail accessibility and the
                  practical arrangements needed for your ride.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Private experiences</h3>
                <p>
                  Share your travel dates and group details to
                  discuss a mountain biking itinerary organised
                  around your riding priorities.
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
                How to plan your mountain bike tour from Marrakech.
              </h2>
            </div>

            <p>
              Start with your travel dates, group size and
              mountain biking experience. From there, discuss
              possible destinations, route options and the
              practical details needed to organise your trip.
            </p>
          </div>

          <div className="cl-steps">
            <article>
              <span>STEP 01</span>
              <h3>Tell us about your ride</h3>
              <p>
                Share your preferred dates, group size, mountain
                biking experience and the type of terrain you
                enjoy riding.
              </p>
            </article>

            <article>
              <span>STEP 02</span>
              <h3>Discuss your destination</h3>
              <p>
                Consider the Atlas foothills, Imlil Valley,
                High Atlas or Agafay according to your
                available time and preferred riding experience.
              </p>
            </article>

            <article>
              <span>STEP 03</span>
              <h3>Review your itinerary</h3>
              <p>
                Discuss route difficulty, riding schedule,
                transfers, equipment, accommodation and
                support arrangements before confirming your trip.
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
                Mountain bike tours from Marrakech: FAQs
              </h2>

              <p>
                Planning a mountain biking trip in Morocco?
                Find answers to common questions about starting
                from Marrakech, choosing a destination, riding
                ability, seasons and equipment. If you have
                particular dates or a route in mind, contact
                us to discuss your plans.
              </p>

              <Link className="cl-text-link" href="/contact">
                Ask us about your MTB trip <span aria-hidden="true">↗</span>
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
            src="/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"
            alt="Mountain bike adventure from Marrakech into the Atlas Mountains"
            loading="lazy"
          />

          <div className="cl-final-cta__overlay" />

          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">
              YOUR NEXT MOUNTAIN BIKE ADVENTURE
            </p>

            <h2>
              Ready to explore Morocco by mountain bike?
            </h2>

            <p>
              Tell us when you are travelling, how you like to
              ride and what kind of mountain biking experience
              you are looking for. Share your dates, group size
              and riding level to start planning a guided MTB
              adventure from Marrakech into the Atlas Mountains.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{
                  pathname: "/contact",
                  query: {
                    tour: "Mountain Bike Tours from Marrakech",
                    request: "booking",
                  },
                }}
              >
                Plan Your MTB Tour
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