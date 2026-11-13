import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Beginner Mountain Biking Morocco | Guided MTB Tours",
  description:
    "Try beginner-friendly mountain biking in Morocco with guided MTB experiences around Marrakech and the Atlas Mountains. Find routes suited to your cycling experience, fitness and confidence.",
  alternates: {
    canonical: "/beginner-mountain-biking-morocco",
  },
  openGraph: {
    title: "Beginner Mountain Biking Morocco | Mountain Bike Morocco",
    description:
      "Start mountain biking in Morocco with guided rides around Marrakech and the Atlas Mountains. Explore suitable routes based on your experience and confidence.",
    url: "https://mountain-bike-morocco.com/beginner-mountain-biking-morocco",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
        alt: "Guided mountain biking experience in Morocco's Atlas Mountains",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beginner Mountain Biking Morocco | Mountain Bike Morocco",
    description:
      "Discover guided mountain biking in Morocco, with routes discussed around your experience, fitness and riding confidence.",
    images: ["/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"],
  },
};

const tours = [
  {
    number: "01",
    duration: "1 day",
    label: "GUIDED MTB · ATLAS MOUNTAINS",
    destination: "MARRAKECH & ATLAS FOOTHILLS",
    title: "Atlas Mountain Bike Day Trip",
    description:
      "Discover mountain biking beyond Marrakech on a guided day trip into the Atlas region. Discuss your cycling background, fitness and preferred riding style so that a suitable route can be considered for your day.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/cycling-trips/trip/atlas-mountain-bike-day-trip-1-day",
  },
  {
    number: "02",
    duration: "2 days",
    label: "FAMILY MTB · ATLAS MOUNTAINS",
    destination: "IMLIL & TOUBKAL VALLEY",
    title: "Family-Friendly Atlas MTB Weekend",
    description:
      "Enjoy a family-focused mountain biking weekend in the Atlas Mountains. The riding plan can be discussed around the ages, experience and confidence of everyone taking part, with particular attention to the youngest or least experienced rider.",
    image: "/images/imlil-cycling-adventure-tour.jpeg",
    href: "/cycling-trips/trip/family-friendly-atlas-mtb-weekend-2-day",
  },
  {
    number: "03",
    duration: "3 days",
    label: "SCENIC MTB · HIGH ATLAS",
    destination: "HIGH ATLAS MOUNTAINS",
    title: "Atlas Villages and Gentle Trails",
    description:
      "Discover mountain landscapes and traditional villages on a multi-day Atlas experience. Discuss your fitness, riding background and preferred terrain when planning the route and daily distances.",
    image: "/images/Explore-Atlas-Mountains-bike.jpg",
    href: "/cycling-trips/trip/atlas-villages-and-gentle-trails-3-day",
  },
];

const destinations = [
  {
    title: "Marrakech & Atlas Foothills",
    text:
      "Marrakech is a convenient starting point for discovering mountain biking beyond the city. The surrounding countryside and Atlas foothills offer different landscapes and riding possibilities depending on route conditions, fitness and experience.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/destinations/marrakech",
  },
  {
    title: "Imlil & Toubkal Valley",
    text:
      "Discover the mountain scenery and traditional villages around Imlil and the Toubkal region. A guided route should be selected carefully according to your ability, fitness and the terrain available.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil",
  },
  {
    title: "High Atlas Mountains",
    text:
      "Experience the landscapes of the High Atlas, from mountain tracks to rural valleys. There are different ways to explore the region, and route difficulty should always be matched to the riders taking part.",
    image: "/images/Explore-Atlas-Mountains-bike.jpg",
    href: "/destinations/atlas-mountains",
  },
];

const faqs = [
  {
    question: "Can beginners go mountain biking in Morocco?",
    answer:
      "Yes. Beginners can enquire about guided mountain biking experiences in Morocco. The most important step is choosing a route that matches your current fitness, off-road experience and confidence. Not every mountain trail is suitable for a first-time rider, so route selection should be discussed before departure.",
  },
  {
    question: "Do I need previous mountain biking experience?",
    answer:
      "Previous experience is helpful, but the requirements depend on the selected route. Tell us whether you have ridden off-road before, how comfortable you are on uneven surfaces and whether you have experience with descents. This information helps determine which options may be appropriate.",
  },
  {
    question: "Where can beginners go mountain biking near Marrakech?",
    answer:
      "Marrakech provides access to several surrounding riding areas, including parts of the Atlas foothills and mountain regions. The best location depends on your experience, fitness, available time and current trail conditions.",
  },
  {
    question: "Are Atlas Mountain trails suitable for beginners?",
    answer:
      "The Atlas Mountains contain a wide variety of terrain, from easier tracks to steep and technical trails. Not all routes are suitable for beginners. A route should be selected according to your riding ability and the conditions on the day.",
  },
  {
    question: "How fit do I need to be for a beginner MTB tour?",
    answer:
      "A reasonable level of general fitness is useful, particularly when a route includes climbing or longer distances. Requirements vary between trips, so share your usual activity level and any concerns when making an enquiry.",
  },
  {
    question: "Can I book a one-day beginner mountain bike trip?",
    answer:
      "You can enquire about a guided one-day mountain biking experience from Marrakech. Share your available date and riding experience so that suitable route possibilities can be discussed.",
  },
  {
    question: "Can families and children join beginner MTB tours?",
    answer:
      "Some family-focused trips may be suitable, depending on the ages, cycling experience and confidence of everyone taking part. Children should have suitable bikes and protective equipment, and the route must be appropriate for the youngest or least experienced rider.",
  },
  {
    question: "What equipment do I need for beginner mountain biking?",
    answer:
      "A suitable mountain bike, correctly fitted helmet, comfortable cycling clothing, gloves, water and appropriate footwear are important. The specific bike and equipment requirements depend on the selected route. Confirm rental or bike arrangements before your trip.",
  },
];

export default function BeginnerMountainBikingMoroccoPage() {
  return (
    <>
      <main className="cycling-listing atlas-mtb-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"
            alt="Guided mountain biking in the Atlas Mountains near Marrakech"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />

          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">
              BEGINNER MTB · GUIDED RIDING · MOROCCO
            </p>

            <h1>Beginner Mountain Biking in Morocco</h1>

            <p className="cl-hero__intro">
              Discover mountain biking in Morocco with a guided
              experience suited to your cycling background and
              confidence. From the countryside around Marrakech
              to the mountain landscapes of the High Atlas, explore
              different riding areas with route options discussed
              around your fitness, experience and preferred terrain.
              Whether you are new to off-road cycling or building
              confidence on mountain trails, start with a route
              appropriate for your level.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{
                  pathname: "/contact",
                  query: {
                    tour: "Beginner Mountain Biking in Morocco",
                    request: "booking",
                  },
                }}
              >
                Plan Your MTB Experience
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="#beginner-mtb-tours"
              >
                Explore MTB Tours
              </Link>
            </div>

            <div className="cl-hero__meta">
              <span>GUIDED MOUNTAIN BIKING</span>
              <span>ROUTES DISCUSSED FOR YOUR LEVEL</span>
              <span>MARRAKECH & ATLAS MOUNTAINS</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">
              START YOUR MTB ADVENTURE
            </p>
            <h2>
              Discover the trails of Morocco, one ride at a time.
            </h2>
          </div>

          <div className="cl-intro__copy">
            <p>
              Mountain biking in Morocco is not only for experienced
              riders. With an appropriate route and suitable guidance,
              it can be a rewarding way to discover the countryside,
              mountain landscapes and traditional villages beyond
              the main tourist routes.
            </p>

            <p>
              Around Marrakech, the Atlas foothills provide access
              to a variety of landscapes and off-road riding
              possibilities. Further into the mountains, areas
              around Imlil and the Toubkal region offer a different
              riding environment, with terrain that can become
              steep and technical.
            </p>

            <p>
              If you are new to mountain biking, it is important
              to be realistic about your fitness and technical
              ability. Share your previous cycling experience,
              confidence on uneven surfaces and expectations so
              that suitable options can be discussed before
              choosing a trip.
            </p>

            <Link className="cl-text-link" href="/cycling-trips/mtb">
              Explore all mountain bike tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="beginner-mtb-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  GUIDED MOUNTAIN BIKE EXPERIENCES
                </p>
                <h2>
                  Explore mountain biking tours in Morocco
                </h2>
              </div>

              <p>
                Discover day trips and multi-day riding experiences
                around Marrakech and the Atlas Mountains. Discuss
                your experience and fitness before selecting the
                most appropriate route.
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
                      BEGINNER MTB · {tour.destination}
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
          </div>
        </section>

        <section className="cl-dark-band">
          <div className="cl-wrap cl-dark-band__inner">
            <div>
              <p className="cl-eyebrow">
                BUILD YOUR RIDING CONFIDENCE
              </p>
              <h2>
                The right route makes all the difference.
              </h2>
            </div>

            <div>
              <p>
                Every rider starts somewhere. A suitable mountain
                biking experience should take account of your
                cycling background, fitness and confidence on
                off-road terrain. Some routes may involve loose
                surfaces, steep sections or technical descents,
                so it is important to discuss the difficulty
                honestly before selecting your ride.
              </p>

              <Link
                className="cl-button cl-button--gold"
                href={{
                  pathname: "/contact",
                  query: {
                    tour: "Beginner Mountain Biking Morocco",
                    request: "booking",
                  },
                }}
              >
                Discuss Your Riding Level
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">
                DISCOVER WHERE TO RIDE
              </p>
              <h2>
                Explore mountain biking destinations around Marrakech.
              </h2>
            </div>

            <p>
              From the countryside near Marrakech to the mountain
              valleys of the High Atlas, discover different settings
              for a guided cycling experience. The right location
              depends on your riding ability and preferred terrain.
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
                    BEGINNER MTB DESTINATION
                  </span>
                  <span className="home-tour-card__level">
                    {destination.title}
                  </span>
                </Link>

                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">
                    MOUNTAIN BIKING · {destination.title}
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
              src="/images/imlil-cycling-adventure-tour.jpeg"
              alt="Cycling through the mountain landscapes around Imlil in Morocco"
              loading="lazy"
            />
          </div>

          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">
              YOUR FIRST MTB EXPERIENCE
            </p>

            <h2>
              Discover Morocco's mountain landscapes at your own pace.
            </h2>

            <p>
              Getting started with mountain biking is about more
              than choosing a destination. The route, surface,
              elevation and length of the ride all influence how
              challenging the experience will be. A guided ride
              should be selected with these factors in mind.
            </p>

            <p>
              The Atlas region offers a varied mountain environment.
              Some tracks are more accessible than others, while
              certain mountain routes include steep climbs, loose
              stones and technical descents. Discussing your
              experience in advance helps establish realistic
              expectations for your trip.
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
                  PREPARE FOR YOUR FIRST MTB RIDE
                </p>
                <h2>
                  What to consider before choosing your mountain bike tour.
                </h2>
              </div>

              <p>
                A good first experience starts with choosing a
                suitable ride. Consider your cycling background,
                physical fitness, equipment and confidence on
                different surfaces before selecting a route.
              </p>
            </div>

            <div className="cl-why-grid">
              <article>
                <span>01</span>
                <h3>Your cycling experience</h3>
                <p>
                  Explain whether you mainly ride on roads,
                  cycle paths, gravel or off-road trails.
                  Previous experience helps when discussing
                  suitable routes.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Your fitness level</h3>
                <p>
                  Consider how comfortable you are with
                  longer rides, climbing and spending time
                  cycling on uneven terrain.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Your riding confidence</h3>
                <p>
                  Share how comfortable you feel with loose
                  surfaces, uneven tracks, corners and
                  downhill sections.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Your equipment</h3>
                <p>
                  Discuss the appropriate mountain bike,
                  helmet and protective equipment for the
                  selected route and riding conditions.
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
                How to organise your first mountain biking experience.
              </h2>
            </div>

            <p>
              Tell us a little about your cycling background
              and travel plans. From there, discuss possible
              destinations, route difficulty and practical
              arrangements for your guided MTB experience.
            </p>
          </div>

          <div className="cl-steps">
            <article>
              <span>STEP 01</span>
              <h3>Share your experience</h3>
              <p>
                Tell us how often you cycle, whether you have
                ridden off-road before and how comfortable
                you feel on uneven terrain.
              </p>
            </article>

            <article>
              <span>STEP 02</span>
              <h3>Discuss suitable routes</h3>
              <p>
                Consider possible riding areas around
                Marrakech and the Atlas Mountains according
                to your experience and fitness.
              </p>
            </article>

            <article>
              <span>STEP 03</span>
              <h3>Prepare for your ride</h3>
              <p>
                Confirm the route, difficulty, equipment,
                meeting arrangements and any support
                required before your departure.
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
                Beginner mountain biking in Morocco: FAQs
              </h2>

              <p>
                Find answers to common questions about starting
                mountain biking in Morocco, including route
                difficulty, fitness, equipment and guided
                experiences around Marrakech and the Atlas
                Mountains. If you are unsure which ride may
                suit you, get in touch with your details.
              </p>

              <Link className="cl-text-link" href="/contact">
                Ask us about beginner MTB tours <span aria-hidden="true">↗</span>
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
            alt="Guided mountain biking adventure in Morocco"
            loading="lazy"
          />

          <div className="cl-final-cta__overlay" />

          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">
              START YOUR MOROCCO MTB ADVENTURE
            </p>

            <h2>
              Ready to discover mountain biking in Morocco?
            </h2>

            <p>
              Tell us about your cycling experience, when you
              are travelling and what kind of ride you have
              in mind. We can discuss suitable guided mountain
              biking options around Marrakech and the Atlas
              Mountains.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{
                  pathname: "/contact",
                  query: {
                    tour: "Beginner Mountain Biking in Morocco",
                    request: "booking",
                  },
                }}
              >
                Plan Your MTB Experience
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="/cycling-trips/mtb"
              >
                View Mountain Bike Tours
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