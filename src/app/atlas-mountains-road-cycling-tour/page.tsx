
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas Mountains Road Cycling Tour Morocco | Mountain Bike Morocco",
  description:
    "Discover road cycling in Morocco's Atlas Mountains. Ride spectacular mountain roads, legendary passes, traditional villages and scenic valleys on guided road cycling tours.",
  alternates: {
    canonical: "/atlas-mountains-road-cycling-tour",
  },
  openGraph: {
    title: "Atlas Mountains Road Cycling Tour Morocco",
    description:
      "Explore the High Atlas on a road bike. Discover mountain passes, scenic roads, traditional Berber villages and guided cycling adventures in Morocco.",
    url: "https://mountain-bike-morocco.com/atlas-mountains-road-cycling-tour",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/atlas-mountains-road-cycling-tour.jpg",
        alt: "Road cycling through the Atlas Mountains of Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Mountains Road Cycling Tour Morocco",
    description:
      "Discover guided road cycling adventures through the Atlas Mountains, mountain passes and scenic valleys of Morocco.",
    images: ["/images/atlas-mountains-road-cycling-tour.jpg"],
  },
};

const tours = [
  {
    number: "01",
    duration: "8 days",
    label: "ROAD CYCLING · HIGH ATLAS",
    destination: "ATLAS MOUNTAINS",
    title: "Atlas Mountains Road Cycling Adventure",
    description:
      "Discover the High Atlas on a multi-day road cycling journey through spectacular mountain scenery, traditional Berber villages and beautiful valleys. Ride paved mountain roads, enjoy challenging climbs and experience rewarding descents through changing landscapes. This guided adventure can be adapted around your cycling experience, preferred daily distances and climbing ambitions.",
    image: "/images/road-cycling-tour-morocco.jpg",
    href: "/cycling-trips/road",
  },
  {
    number: "02",
    duration: "6 days",
    label: "ROAD CYCLING · MOUNTAIN PASSES",
    destination: "TIZI N'TEST",
    title: "Tizi n'Test Road Cycling Tour",
    description:
      "Take on one of the most memorable mountain road experiences in Morocco. The Tizi n'Test route climbs through the western High Atlas, passing mountain villages, dramatic slopes and spectacular viewpoints. A guided road cycling experience for riders who enjoy sustained climbs, mountain scenery and rewarding descents.",
    image: "/images/road-cycling-holiday-tour-morocco.jpg",
    href: "/cycling-trips/road",
  },
  {
    number: "03",
    duration: "5 days",
    label: "ROAD CYCLING · ATLAS PASSES",
    destination: "HIGH ATLAS",
    title: "High Atlas Mountain Pass Cycling Escape",
    description:
      "Explore the paved roads of the High Atlas on a private road cycling experience. Ride through mountain foothills, quiet valleys and scenic mountain roads while enjoying the changing landscapes of central Morocco. Daily distances and climbing can be adjusted to suit your fitness, experience and preferred riding style.",
    image: "/images/road-bike-tour-morocco.jpg",
    href: "/cycling-trips/road",
  },
  {
    number: "04",
    duration: "7 days",
    label: "ROAD CYCLING · MOROCCO DISCOVERY",
    destination: "MARRAKECH & ATLAS",
    title: "Marrakech to Atlas Road Cycling Adventure",
    description:
      "Begin your cycling holiday in Marrakech and discover the mountain roads leading towards the High Atlas. Ride through changing countryside, traditional settlements and impressive mountain landscapes. Combine challenging cycling stages with time to discover Morocco's culture, scenery and local hospitality.",
    image: "/images/7-days-cycling-road-from-marrakech.jpg",
    href: "/cycling-trips/road",
  },
];

const destinations = [
  {
    title: "High Atlas Mountains",
    text:
      "The High Atlas is one of Morocco's most rewarding regions for road cycling. Paved mountain roads climb through dramatic scenery, remote villages and spectacular valleys. The region offers a variety of riding experiences, from steady mountain ascents to demanding passes and long descents. Routes should be selected according to your fitness, experience and preferred daily elevation.",
    image: "/images/road-cycling-tour-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Tizi n'Test Pass",
    text:
      "Tizi n'Test is a memorable road cycling challenge through the western High Atlas. Its winding mountain road passes through changing landscapes, traditional settlements and impressive viewpoints. The climb requires preparation and suitable gearing, while road conditions, traffic and weather should be considered when planning the ride.",
    image: "/images/road-cycling-holiday-tour-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Imlil and Mount Toubkal",
    text:
      "The Imlil region provides access to the mountain landscapes beneath Mount Toubkal. Road cycling routes in the surrounding area include mountain approaches, valley roads and scenic climbs through traditional Berber villages. The terrain is varied, making it important to choose routes that match your riding ability and available time.",
    image: "/images/atlas-valley-cycling-morocco.jpg",
    href: "/destinations/imlil",
  },
  {
    title: "Marrakech and the Foothills",
    text:
      "Marrakech is a natural starting point for road cycling adventures in the Atlas Mountains. From the city, riders can reach the foothills and mountain roads leading towards Imlil, Asni and Ouirgane. These areas offer opportunities for shorter rides, challenging climbs and multi-day cycling holidays.",
    image: "/images/road-cycling-morocco.jpg",
    href: "/destinations/marrakech",
  },
];

const faqs = [
  {
    question: "Is Morocco a good destination for road cycling?",
    answer:
      "Yes. Morocco offers a varied road cycling landscape, from the paved mountain passes of the High Atlas to scenic valley roads and quieter countryside routes. The combination of mountain climbs, changing scenery and traditional villages makes it an excellent destination for road cycling holidays.",
  },
  {
    question: "What are the best road cycling routes in the Atlas Mountains?",
    answer:
      "Popular mountain road experiences include the Tizi n'Test and Tizi n'Tichka passes, the roads around Imlil and Asni, and the scenic valleys of the High Atlas. The best route depends on your cycling experience, preferred distance, climbing ability and available time.",
  },
  {
    question: "Do I need to be an experienced cyclist?",
    answer:
      "Not every road cycling route requires advanced experience, but mountain roads can involve sustained climbs, long descents and significant elevation changes. You should be comfortable riding on paved roads and managing your bicycle on descents. Your fitness and experience will help determine the most suitable itinerary.",
  },
  {
    question: "How difficult is road cycling in the Atlas Mountains?",
    answer:
      "Difficulty varies depending on the route. Valley roads can offer more manageable riding, while mountain passes involve longer climbs and greater elevation gain. Weather, altitude, road conditions and daily distance also influence the challenge. Routes should be selected to match your ability.",
  },
  {
    question: "What type of road bike should I use?",
    answer:
      "A road bike with reliable brakes, suitable gearing and comfortable tyres is a good choice for paved Atlas mountain roads. Compact gearing can make sustained climbs easier to manage. Before travelling, check the condition of your bicycle, tyres, drivetrain and braking system.",
  },
  {
    question: "When is the best time for road cycling in Morocco?",
    answer:
      "Spring and autumn are generally popular seasons for road cycling in the Atlas Mountains because temperatures are often more comfortable. Conditions can change with altitude, and higher mountain passes may be cold or affected by winter weather. Lower routes can offer different riding opportunities throughout the year.",
  },
  {
    question: "Can I ride the Tizi n'Test and Tizi n'Tichka passes?",
    answer:
      "Both are recognised mountain road cycling challenges in the High Atlas. They involve sustained climbing and changing road conditions, so preparation and route planning are important. A guided itinerary can help organise the stages, transfers and support arrangements around your experience.",
  },
  {
    question: "Are support vehicles available during road cycling tours?",
    answer:
      "Support arrangements can be discussed when planning your tour. Depending on the itinerary, a support vehicle can help with luggage, refreshments, mechanical assistance and transfers. Confirm the available support and what is included before booking.",
  },
  {
    question: "Can I combine road cycling with cultural experiences?",
    answer:
      "Yes. Cycling through the Atlas Mountains offers opportunities to discover traditional Berber villages, mountain landscapes and local hospitality. Depending on the itinerary, you can include village visits, local meals, scenic stops and time to explore the region beyond the roads.",
  },
  {
    question: "Can I book a private guided road cycling tour?",
    answer:
      "You can enquire about a private road cycling experience for yourself, a couple, friends or a group. Share your preferred dates, group size, cycling experience and daily distance preferences. These details help establish suitable routes, climbing stages and practical arrangements for your trip.",
  },
];

export default function AtlasMountainsRoadCyclingTourPage() {
  return (
    <>
      <main className="cycling-listing gravel-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/atlas-mountains-road-cycling-tour.jpg"
            alt="Road cycling through the mountain roads of the Moroccan Atlas"
            fetchPriority="high"
          />

          <div className="cl-hero__shade" />

          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">
              ROAD CYCLING · ATLAS MOUNTAINS · MOROCCO
            </p>

            <h1>Atlas Mountains Road Cycling Tours in Morocco</h1>

            <p className="cl-hero__intro">
              Discover the Atlas Mountains on a road bike,
              riding spectacular mountain roads, scenic
              valleys and legendary passes through the
              heart of Morocco. From the winding climbs
              of Tizi n'Test and Tizi n'Tichka to the
              mountain landscapes around Imlil and
              Mount Toubkal, experience rewarding climbs,
              beautiful descents and traditional Berber
              villages. Explore guided road cycling
              adventures shaped around your fitness,
              cycling experience and travel ambitions.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your Road Cycling Tour
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="#atlas-road-cycling-tours"
              >
                Explore Road Tours
              </Link>
            </div>

            <div className="cl-hero__meta">
              <span>ROAD CYCLING ADVENTURES</span>
              <span>HIGH ATLAS MOUNTAIN PASSES</span>
              <span>GUIDED CYCLING TOURS</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">
              DISCOVER THE ATLAS BY ROAD BIKE
            </p>

            <h2>
              Ride Morocco's spectacular mountain roads and legendary passes.
            </h2>

            <img
              src="/images/adventure-road-cycling-morocco.jpg"
              alt="Road cyclist exploring the mountain roads of Morocco"
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
              Road cycling in the Atlas Mountains is
              an opportunity to experience Morocco
              through its dramatic mountain landscapes,
              winding roads and traditional villages.
              The region offers a variety of paved
              routes, from scenic valley rides to
              demanding mountain passes with long,
              rewarding climbs.
            </p>

            <p>
              Around Imlil, Asni and Ouirgane, mountain
              roads connect villages and valleys beneath
              the High Atlas peaks. Further afield,
              the famous Tizi n'Test and Tizi n'Tichka
              passes provide memorable challenges
              for cyclists who enjoy sustained
              climbing and spectacular views.
            </p>

            <p>
              Every route has a different character.
              Some roads offer steady gradients and
              quieter countryside, while others include
              longer climbs, hairpin bends and exposed
              mountain sections. Choosing the right
              itinerary depends on your fitness,
              experience and preferred daily distance.
            </p>

            <p>
              Whether you are planning a short cycling
              escape or a multi-day road cycling holiday,
              a well-organised trip should balance
              riding distance, elevation, recovery time
              and opportunities to discover the
              landscapes and culture of Morocco.
            </p>

            <Link className="cl-text-link" href="/cycling-trips/road">
              Explore all road cycling tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="atlas-road-cycling-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  CHOOSE YOUR ROAD CYCLING EXPERIENCE
                </p>

                <h2>
                  Guided road cycling tours in the Atlas Mountains
                </h2>
              </div>

              <p>
                Explore road cycling experiences through
                the High Atlas and the mountain landscapes
                surrounding Marrakech. From memorable
                mountain pass climbs to multi-day cycling
                journeys, each itinerary offers a
                different combination of distance,
                elevation and scenery. Compare the
                experiences and enquire about a route
                suited to your cycling goals.
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
                      ROAD CYCLING · {tour.destination}
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
                  MORE ROAD CYCLING ADVENTURES
                </p>

                <h2>
                  Explore more road cycling tours and routes in Morocco
                </h2>
              </div>

              <p>
                Looking for a different destination or
                cycling experience? Explore the full
                road cycling collection for more guided
                routes and multi-day cycling adventures
                across Morocco. Compare the available
                options and contact us to discuss an
                itinerary around your dates, fitness
                and group requirements.
              </p>
            </div>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--dark"
                href="/cycling-trips/road"
              >
                View All Road Cycling Tours
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-dark-band">
          <div className="cl-wrap cl-dark-band__inner">
            <div>
              <p className="cl-eyebrow">
                CLIMB HIGHER · DISCOVER MORE
              </p>

              <h2>
                Experience the legendary mountain roads of the High Atlas.
              </h2>
            </div>

            <div>
              <p>
                The Atlas Mountains offer some of Morocco's
                most memorable road cycling experiences.
                Long mountain climbs, winding roads and
                spectacular descents create a rewarding
                challenge for riders who enjoy exploring
                new landscapes by bicycle.
              </p>

              <p>
                Mountain cycling requires preparation.
                Elevation gain, road surface, weather,
                traffic and daily distance all influence
                the difficulty of a route. Suitable
                gearing, reliable brakes and appropriate
                clothing are important when riding
                through the mountains.
              </p>

              <p>
                Before choosing a tour, discuss your
                cycling experience, preferred daily
                distance, climbing ability and support
                requirements. These details help
                establish an itinerary that suits
                your group and travel plans.
              </p>

              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Discuss Your Road Cycling Tour
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
                Discover the best road cycling landscapes in the Atlas.
              </h2>
            </div>

            <p>
              From the high mountain passes to the
              valleys around Imlil and the foothills
              near Marrakech, the Atlas offers a
              variety of road cycling experiences.
              Each region has its own character,
              climbing profile and scenery. The
              right destination depends on your
              cycling experience, preferred routes
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
                    ROAD CYCLING DESTINATION
                  </span>
                  <span className="home-tour-card__level">
                    {destination.title}
                  </span>
                </Link>

                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">
                    ROAD CYCLING · {destination.title}
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
              src="/images/road-cycling-holiday-morocco.jpg"
              alt="Road cycling holiday through the mountain landscapes of Morocco"
              loading="lazy"
            />
          </div>

          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">
              MORE THAN THE RIDE
            </p>

            <h2>
              Discover Morocco's mountain culture along the road.
            </h2>

            <p>
              A road cycling journey through the Atlas
              Mountains is about more than the climbs
              and kilometres. The roads connect
              traditional villages, mountain valleys
              and changing landscapes, offering a
              closer experience of rural Morocco.
            </p>

            <p>
              Around Imlil, Asni and Ouirgane,
              traditional settlements sit among
              terraced fields and mountain slopes.
              Further along the mountain roads,
              the scenery changes with the altitude,
              revealing impressive views across
              the High Atlas.
            </p>

            <p>
              A thoughtfully planned cycling holiday
              allows time to enjoy the journey beyond
              the bicycle. Local food, village visits,
              scenic stops and comfortable accommodation
              can all form part of the experience.
            </p>

            <p>
              Whether you are travelling as a couple,
              with friends or as a cycling group,
              the best experience balances challenging
              riding with local discovery and time
              to appreciate the landscapes.
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
                  What to consider when planning an Atlas road cycling tour.
                </h2>
              </div>

              <p>
                A successful road cycling holiday
                balances riding ambitions with practical
                details. Understanding the terrain,
                elevation, daily distance and support
                arrangements helps establish a suitable
                itinerary. Before choosing a tour,
                discuss your fitness, experience and
                preferred type of mountain riding.
              </p>
            </div>

            <div className="cl-why-grid">
              <article>
                <span>01</span>

                <h3>Routes matched to your fitness</h3>

                <p>
                  Choose mountain roads, climbs and
                  daily distances that reflect your
                  cycling experience and fitness level.
                </p>
              </article>

              <article>
                <span>02</span>

                <h3>Mountain-ready equipment</h3>

                <p>
                  Prepare your road bike with suitable
                  gearing, reliable brakes, appropriate
                  tyres and comfortable riding equipment.
                </p>
              </article>

              <article>
                <span>03</span>

                <h3>Well-planned cycling stages</h3>

                <p>
                  Consider elevation gain, weather,
                  road conditions, recovery time and
                  daily riding distances when planning
                  your itinerary.
                </p>
              </article>

              <article>
                <span>04</span>

                <h3>Time to discover Morocco</h3>

                <p>
                  Make space for mountain views,
                  traditional villages, local food
                  and the landscapes beyond the roads.
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
                How to organise your Atlas Mountains road cycling holiday.
              </h2>
            </div>

            <p>
              You do not need to have every detail
              decided before making an enquiry.
              Start with your dates, cycling experience
              and group requirements, then discuss
              which routes and mountain passes might
              suit your plans. Sharing your preferred
              daily distance and climbing ambitions
              helps establish the practical details
              of your adventure.
            </p>
          </div>

          <div className="cl-steps">
            <article>
              <span>STEP 01</span>

              <h3>Tell us about your cycling</h3>

              <p>
                Share your experience, fitness,
                group size and the type of road
                cycling you enjoy. Let us know
                your preferred daily distance
                and climbing ability.
              </p>
            </article>

            <article>
              <span>STEP 02</span>

              <h3>Discuss routes and mountain passes</h3>

              <p>
                Compare destinations, daily
                distances, elevation and road
                conditions. Discuss the mountain
                climbs and cycling stages that
                best match your experience.
              </p>
            </article>

            <article>
              <span>STEP 03</span>

              <h3>Review the practical details</h3>

              <p>
                Discuss the itinerary, bicycle
                requirements, accommodation,
                transfers and support before
                making final arrangements.
                Confirm what is included in
                your cycling holiday.
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
                Atlas Mountains road cycling: frequently asked questions
              </h2>

              <p>
                Find answers to common questions about
                road cycling in Morocco, mountain passes,
                route difficulty, seasons and preparing
                for your cycling holiday. Understanding
                the terrain and practical arrangements
                can help you choose an experience that
                suits your riding ability. For advice
                about a particular journey, contact us
                with your dates and preferences.
              </p>

              <Link className="cl-text-link" href="/contact">
                Ask us about your road cycling tour <span aria-hidden="true">↗</span>
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
            src="/images/7-days-cycling-road-from-marrakech.jpg"
            alt="Road cycling adventure through the Atlas Mountains of Morocco"
            loading="lazy"
          />

          <div className="cl-final-cta__overlay" />

          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">
              YOUR NEXT ROAD CYCLING ADVENTURE
            </p>

            <h2>
              Ready to discover the Atlas Mountains by road bike?
            </h2>

            <p>
              Tell us when you would like to travel,
              what kind of routes you enjoy and your
              road cycling experience. Share your
              group size, preferred riding level and
              daily distance so you can start discussing
              mountain passes, cycling stages and
              practical details for your holiday.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your Road Cycling Tour
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="/cycling-trips/road"
              >
                View All Road Cycling Tours
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
