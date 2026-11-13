
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "One-Day Mountain Bike Trips from Marrakech | Guided MTB Morocco",
  description:
    "Book a guided one-day mountain bike trip from Marrakech and explore the Atlas Mountains, Imlil or nearby countryside. Find an MTB day ride shaped around your experience, preferred terrain and schedule.",
  alternates: {
    canonical: "/one-day-mtb-trips-from-marrakech",
  },
  openGraph: {
    title: "One-Day Mountain Bike Trips from Marrakech | Mountain Bike Morocco",
    description:
      "Ride beyond the city on a guided mountain bike day trip from Marrakech, with possible routes in the Atlas Mountains, Imlil and the surrounding countryside.",
    url: "https://mountain-bike-morocco.com/one-day-mtb-trips-from-marrakech",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/cycling-tour-from-marrakech.jpg",
        alt: "Mountain biking day trip from Marrakech into the Atlas Mountains",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One-Day Mountain Bike Trips from Marrakech | Mountain Bike Morocco",
    description:
      "Explore the Atlas foothills and countryside on a guided one-day mountain biking trip from Marrakech.",
    images: ["/images/cycling-tour-from-marrakech.jpg"],
  },
};

const tours = [
  {
    number: "01",
    duration: "1 day",
    label: "GUIDED MTB · HIGH ATLAS",
    destination: "HIGH ATLAS MOUNTAINS",
    title: "High Atlas Mountain Bike Day Trip",
    description:
      "Trade the city for the High Atlas on a guided mountain bike day trip from Marrakech. Ride mountain tracks and varied off-road terrain, with the route discussed around your experience, preferred challenge and time available.",
    image: "/images/biking-in-morocco-day.jpeg",
    href: "/cycling-trips/trip/atlas-mountain-bike-day-trip-1-day",
  },
  {
    number: "02",
    duration: "1 day",
    label: "MTB · MARRAKECH COUNTRYSIDE",
    destination: "MARRAKECH COUNTRYSIDE",
    title: "Marrakech Countryside Family MTB Day Ride",
    description:
      "Explore the countryside beyond Marrakech on a family-focused mountain bike day ride. Discuss the route, pace and terrain in advance so the experience can take account of each rider’s age, confidence and off-road experience.",
    image: "/images/mountain-biking-atlas-mountains.jpg",
    href: "/cycling-trips/trip/marrakech-family-mountain-bike-ride-1-day",
  },
  {
    number: "03",
    duration: "1 day",
    label: "PRIVATE MTB · MOROCCO",
    destination: "MARRAKECH & ATLAS",
    title: "Private MTB Day Trip from Marrakech",
    description:
      "Arrange a private mountain biking day around your group, riding level and preferred terrain. Share how much time you have and what kind of ride you want to experience so suitable options beyond Marrakech can be discussed.",
    image: "/images/atlas-cycling-adventure.jpg",
    href: "/cycling-trips/mtb",
  },
];

const destinations = [
  {
    title: "High Atlas Mountains",
    text:
      "Discover mountain tracks, rural landscapes and traditional villages in the High Atlas. A day trip from Marrakech offers an opportunity to explore the mountains, with the route selected according to your riding ability and current trail conditions.",
    image: "/images/atlas-valley-cycling-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Imlil & Toubkal Valley",
    text:
      "Explore the mountain scenery and villages around Imlil and the Toubkal region. This area offers a distinctive mountain biking environment, with route difficulty and daily riding plans depending on your experience and conditions.",
    image: "/images/morocco-berber-valley.jpg",
    href: "/destinations/imlil",
  },
  {
    title: "Marrakech & Surrounding Countryside",
    text:
      "Start your cycling day in Marrakech and discover the landscapes beyond the city. Depending on your preferences and available time, different countryside and foothill riding areas can be considered.",
    image: "/images/biking-in-morocco.jpeg",
    href: "/destinations/marrakech",
  },
];

const faqs = [
  {
    question: "Can I go mountain biking from Marrakech for just one day?",
    answer:
      "Yes. You can enquire about guided one-day mountain biking experiences starting from Marrakech. The riding area and route depend on your experience, available time, preferred terrain and practical transfer arrangements.",
  },
  {
    question: "Where can I go mountain biking on a day trip from Marrakech?",
    answer:
      "The Atlas foothills, High Atlas and areas around Imlil are among the destinations to consider. The most suitable option depends on the type of riding you want, your experience and how much time you have available.",
  },
  {
    question: "How long does a one-day MTB trip take?",
    answer:
      "A day trip generally includes the necessary travel arrangements, riding time and return journey to Marrakech. The exact schedule depends on the selected destination, route length, terrain and transfer distance.",
  },
  {
    question: "Are one-day MTB trips suitable for beginners?",
    answer:
      "Some routes may be appropriate for less experienced riders, but not all mountain trails are suitable for beginners. Share your cycling background, fitness and confidence on off-road terrain so that an appropriate route can be discussed.",
  },
  {
    question: "Can experienced riders enjoy a one-day MTB trip?",
    answer:
      "Yes. Experienced riders can discuss routes with more challenging terrain, technical singletrack or longer riding distances, depending on the area and current trail conditions. Share your technical level and riding preferences when enquiring.",
  },
  {
    question: "Are the day trips private or shared?",
    answer:
      "Private arrangements can be discussed for individuals, couples, families and groups. Share your group size and preferred date when making an enquiry so that the available arrangements can be confirmed.",
  },
  {
    question: "Is transport from Marrakech included?",
    answer:
      "Transport arrangements depend on the selected trip. Discuss pickup arrangements, transfers to the riding area and return transport when making your enquiry. Confirm the final inclusions before booking.",
  },
  {
    question: "Can I bring my own mountain bike?",
    answer:
      "You can discuss bringing your own mountain bike when planning your trip. The bike should be suitable for the selected terrain and in good mechanical condition. Bike transport and any equipment requirements should be confirmed in advance.",
  },
];

export default function OneDayMtbTripsFromMarrakechPage() {
  return (
    <>
      <main className="cycling-listing atlas-mtb-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/cycling-tour-from-marrakech.jpg"
            alt="Mountain biking day trip from Marrakech in the Atlas Mountains"
            fetchPriority="high"
          />

          <div className="cl-hero__shade" />

          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">
              ONE-DAY MTB TRIPS · GUIDED RIDING · MARRAKECH
            </p>

            <h1>One-Day Mountain Bike Trips from Marrakech</h1>

            <p className="cl-hero__intro">
              Discover Morocco by mountain bike on a guided day
              trip from Marrakech. Explore the Atlas foothills,
              mountain valleys and countryside beyond the city
              on a ride planned around your available time,
              preferred terrain and riding experience. Whether
              you are looking for a scenic mountain biking
              experience or a more challenging day on the trails,
              discover the possibilities for a memorable MTB
              adventure in Morocco.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{
                  pathname: "/contact",
                  query: {
                    tour: "One-Day MTB Trips from Marrakech",
                    request: "booking",
                  },
                }}
              >
                Plan Your MTB Day Trip
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="#one-day-mtb-tours"
              >
                Explore Day Trips
              </Link>
            </div>

            <div className="cl-hero__meta">
              <span>GUIDED ONE-DAY MTB ADVENTURES</span>
              <span>STARTING FROM MARRAKECH</span>
              <span>ATLAS MOUNTAINS & COUNTRYSIDE</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">
              DISCOVER MOROCCO BY MTB
            </p>
            <h2>
              Leave the city behind for a day on Morocco’s mountain bike trails.
            </h2>
          </div>

          <div className="cl-intro__copy">
            <p>
              A one-day mountain bike trip from Marrakech is an
              opportunity to discover a different side of Morocco.
              Leave the busy streets behind and explore mountain
              landscapes, rural tracks and traditional villages
              with a guided riding experience.
            </p>

            <p>
              The High Atlas offers a striking setting for
              mountain biking, with changing landscapes and
              different types of terrain. Areas around Imlil
              and the Toubkal region provide access to mountain
              environments where routes can vary considerably
              in difficulty and technical character.
            </p>

            <p>
              Whether you are visiting Marrakech for a short
              stay or adding a cycling experience to a longer
              holiday, a day trip can be planned around your
              schedule. Your riding experience, preferred
              terrain and available time all help determine
              which destination and route should be considered.
            </p>

            <Link className="cl-text-link" href="/cycling-trips/mtb">
              Explore mountain bike tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="one-day-mtb-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  GUIDED DAY RIDING EXPERIENCES
                </p>
                <h2>
                  Choose a guided MTB day ride from Marrakech
                </h2>
              </div>

              <p>
                Compare day-ride options for the High Atlas,
                Marrakech countryside and private groups. The
                right route depends on your riding experience,
                preferred terrain and available time.
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
                ONE DAY · A NEW PERSPECTIVE
              </p>
              <h2>
                Make the most of a day beyond Marrakech.
              </h2>
            </div>

            <div>
              <p>
                You do not need a multi-day cycling holiday to
                experience Morocco by mountain bike. A carefully
                planned day ride can introduce you to the
                landscapes beyond Marrakech, from rural
                countryside to the foothills and mountain
                valleys of the Atlas. The right itinerary
                depends on your riding level, available time
                and the distance you want to travel.
              </p>

              <Link
                className="cl-button cl-button--gold"
                href={{
                  pathname: "/contact",
                  query: {
                    tour: "One-Day Mountain Bike Trip from Marrakech",
                    request: "booking",
                  },
                }}
              >
                Discuss Your Day Trip
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">
                CHOOSE YOUR RIDING AREA
              </p>
              <h2>
                Find a riding area for your Marrakech MTB day trip.
              </h2>
            </div>

            <p>
              Discover different landscapes within reach of
              Marrakech, from the mountain scenery of the
              High Atlas to the valleys around Imlil and
              the countryside beyond the city.
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
              src="/images/mtb-tour-atlas-mountains.jpg"
              alt="Mountain biking on a trail in Morocco's Atlas Mountains"
              loading="lazy"
            />
          </div>

          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">
              MORE THAN A DAY IN THE CITY
            </p>

            <h2>
              Discover a different side of Morocco on two wheels.
            </h2>

            <p>
              Marrakech is an excellent starting point for
              discovering the landscapes beyond the city.
              A guided mountain bike day trip gives you the
              opportunity to explore a different environment
              and experience Morocco from a new perspective.
            </p>

            <p>
              The riding experience can vary significantly
              depending on the destination. Mountain routes
              may include climbs, loose surfaces and technical
              descents, while other areas offer different
              types of countryside riding. Discussing your
              experience in advance helps identify a suitable
              option for your day.
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
                  PLAN YOUR MTB DAY TRIP
                </p>
                <h2>
                  What makes a great one-day mountain biking experience?
                </h2>
              </div>

              <p>
                A successful day ride starts with the right
                planning. Consider your riding level, available
                time, preferred terrain and the practical
                arrangements needed to reach your chosen
                riding area.
              </p>
            </div>

            <div className="cl-why-grid">
              <article>
                <span>01</span>
                <h3>Your riding experience</h3>
                <p>
                  Share your mountain biking background and
                  technical ability so that suitable route
                  options can be discussed.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Your preferred terrain</h3>
                <p>
                  Discuss whether you prefer mountain tracks,
                  singletrack, scenic countryside routes
                  or more technical riding.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Your available time</h3>
                <p>
                  Consider your departure time, travel distance
                  and the amount of riding you want to include
                  in your day.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Your practical arrangements</h3>
                <p>
                  Discuss transport, bike arrangements,
                  equipment and any additional support
                  required for your trip.
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
                How to organise your one-day MTB trip from Marrakech.
              </h2>
            </div>

            <p>
              Share your travel date and riding preferences.
              From there, discuss possible destinations,
              route options and the practical arrangements
              for your mountain biking day trip.
            </p>
          </div>

          <div className="cl-steps">
            <article>
              <span>STEP 01</span>
              <h3>Tell us about your ride</h3>
              <p>
                Share your preferred date, group size,
                cycling experience and the type of terrain
                you would like to explore.
              </p>
            </article>

            <article>
              <span>STEP 02</span>
              <h3>Choose your destination</h3>
              <p>
                Discuss the Atlas Mountains, Imlil and
                other riding areas according to your
                available time and preferences.
              </p>
            </article>

            <article>
              <span>STEP 03</span>
              <h3>Confirm your arrangements</h3>
              <p>
                Review the route, riding schedule, transfers,
                bike arrangements and other practical details
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
                One-day mountain biking from Marrakech: FAQs
              </h2>

              <p>
                Find answers to common questions about guided
                mountain biking day trips from Marrakech,
                including destinations, route difficulty,
                transport and equipment. If you have a
                particular date or riding experience in mind,
                get in touch with your details.
              </p>

              <Link className="cl-text-link" href="/contact">
                Ask us about a day trip <span aria-hidden="true">↗</span>
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
            src="/images/biking-in-morocco.jpg"
            alt="Mountain biking adventure in the Atlas Mountains from Marrakech"
            loading="lazy"
          />

          <div className="cl-final-cta__overlay" />

          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">
              YOUR MOROCCO MTB DAY TRIP
            </p>

            <h2>
              Plan your one-day mountain bike trip from Marrakech.
            </h2>

            <p>
              Tell us when you are visiting Marrakech, who
              is riding and what kind of mountain biking
              experience you are looking for. Start planning
              a guided day trip into the landscapes beyond
              the city.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{
                  pathname: "/contact",
                  query: {
                    tour: "One-Day MTB Trips from Marrakech",
                    request: "booking",
                  },
                }}
              >
                Plan Your MTB Day Trip
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