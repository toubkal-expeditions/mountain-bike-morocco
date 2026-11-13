import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Private Mountain Bike Tours Morocco | Bespoke Guided MTB Adventures",
  description:
    "Book a private mountain bike tour in Morocco. Ride Atlas Mountain trails, Imlil and remote Berber valleys with a guided MTB itinerary tailored to your group, ability and travel dates.",
  alternates: {
    canonical: "/private-mountain-bike-tours-morocco",
  },
  openGraph: {
    title: "Private Mountain Bike Tours Morocco | Mountain Bike Morocco",
    description:
      "Discover private guided mountain biking in Morocco. Explore Atlas Mountain singletrack, Imlil and remote valleys on a tailor-made MTB adventure.",
    url: "https://mountain-bike-morocco.com/private-mountain-bike-tours-morocco",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/singletrack-biking-morocco.jpg",
        alt: "Private guided mountain biking adventure in Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Mountain Bike Tours Morocco | Mountain Bike Morocco",
    description:
      "Plan a private guided MTB adventure in Morocco, with routes and itineraries shaped around your group.",
    images: ["/images/singletrack-biking-morocco.jpg"],
  },
};

const tours = [
  {
    number: "01",
    duration: "2–3 days",
    label: "PRIVATE MTB · HIGH ATLAS",
    destination: "HIGH ATLAS MOUNTAINS",
    title: "Private Atlas Mountain Bike Weekend",
    description:
      "Enjoy a private mountain biking escape in the High Atlas. Ride mountain tracks and discover traditional villages and scenic valleys with a route planned around your group's experience, available time and preferred terrain.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/cycling-trips/trip/private-atlas-mountain-bike-weekend-2-to-3-days",
  },
  {
    number: "02",
    duration: "Custom itinerary",
    label: "PRIVATE CYCLING · MOROCCO",
    destination: "MARRAKECH & MOROCCO",
    title: "Private Cycling Holiday from Marrakech",
    description:
      "Begin your private cycling holiday in Marrakech and plan a journey around the riding you want to experience. Discuss your preferred destinations, cycling style and travel dates to create an itinerary for your group.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/cycling-trips/trip/private-cycling-holiday-from-marrakech-custom-itinerary",
  },
  {
    number: "03",
    duration: "Custom itinerary",
    label: "BESPOKE · PRIVATE EXPEDITION",
    destination: "MOROCCO",
    title: "Bespoke Private Cycling Expedition",
    description:
      "Plan a private cycling expedition shaped around your interests and travel plans. Discuss mountain routes, destinations, daily riding and support arrangements to develop a journey that suits your group.",
    image: "/images/Explore-Atlas-Mountains-bike.jpg",
    href: "/cycling-trips/trip/bespoke-private-cycling-expedition-custom-itinerary",
  },
];

const destinations = [
  {
    title: "High Atlas Mountains",
    text:
      "Ride through the High Atlas and discover mountain tracks, remote valleys and traditional Berber villages. Private MTB routes can be considered according to your technical ability, fitness, preferred terrain and the season.",
    image: "/images/Explore-Atlas-Mountains-bike.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Imlil & Toubkal Valley",
    text:
      "Explore the mountain landscapes and villages around Imlil and Mount Toubkal. This area offers a distinctive setting for private guided mountain biking, with route choices depending on trail conditions and rider experience.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil",
  },
  {
    title: "Marrakech & Atlas Foothills",
    text:
      "Start from Marrakech and head into the surrounding countryside and Atlas foothills. This is a convenient option for a private mountain biking experience combining access from the city with guided riding beyond it.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/destinations/marrakech",
  },
];

const faqs = [
  {
    question: "What is a private mountain bike tour in Morocco?",
    answer:
      "A private mountain bike tour is organised for your own group rather than as a scheduled shared departure. You can discuss the route, riding pace, trip duration and practical arrangements according to your dates, experience and preferences.",
  },
  {
    question: "Can I customise my private MTB itinerary?",
    answer:
      "Yes. You can discuss the riding areas, trip duration, preferred terrain and travel arrangements when making an enquiry. The final itinerary depends on your requirements, the season, trail conditions and available logistics.",
  },
  {
    question: "Where can we go mountain biking on a private tour?",
    answer:
      "The High Atlas, Imlil and the Toubkal region are among the mountain biking areas to consider. Other destinations may also be possible depending on your available time, riding preferences and the type of journey you want to plan.",
  },
  {
    question: "Can private MTB tours start from Marrakech?",
    answer:
      "Yes. Marrakech is a convenient starting point for private mountain biking trips into the Atlas foothills and mountain regions. Transfers and departure arrangements depend on the selected route and itinerary.",
  },
  {
    question: "Are private mountain bike tours suitable for different skill levels?",
    answer:
      "Routes can be discussed according to your group's experience and fitness. Share your technical ability, confidence on descents and previous off-road riding experience so that an appropriate itinerary can be considered.",
  },
  {
    question: "Can couples or small groups book a private MTB tour?",
    answer:
      "You can enquire about private arrangements for individuals, couples, friends and larger groups. Share your group size and preferred dates so the practical arrangements can be discussed.",
  },
  {
    question: "Can we bring our own mountain bikes?",
    answer:
      "You can discuss travelling with your own bikes when making an enquiry. Your bike should be suitable for the planned terrain and in good mechanical condition. Transport, spare parts and equipment requirements should be confirmed before departure.",
  },
  {
    question: "What is included in a private mountain bike tour?",
    answer:
      "Arrangements depend on the selected itinerary. When enquiring, you can discuss guiding, transfers, accommodation, meals, bike arrangements and any additional support required for your group. Confirm the inclusions before booking.",
  },
];

export default function PrivateMountainBikeToursMoroccoPage() {
  return (
    <>
      <main className="cycling-listing atlas-mtb-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/singletrack-biking-morocco.jpg"
            alt="Mountain biker exploring a trail in Morocco's Atlas Mountains"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />

          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">
              PRIVATE MTB · GUIDED RIDING · MOROCCO
            </p>

            <h1>Private Mountain Bike Tours in Morocco</h1>

            <p className="cl-hero__intro">
              Explore Morocco on a private mountain biking adventure
              planned around your group. Ride Atlas Mountain trails,
              discover remote valleys and pass through traditional
              Berber villages with an itinerary shaped by your riding
              experience, preferred terrain and travel dates. Whether
              you are planning a short MTB escape or a longer private
              expedition, discover a more personal way to ride Morocco.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{
                  pathname: "/contact",
                  query: {
                    tour: "Private Mountain Bike Tours Morocco",
                    request: "booking",
                  },
                }}
              >
                Plan Your Private MTB Tour
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="#private-mtb-tours"
              >
                Explore Private Tours
              </Link>
            </div>

            <div className="cl-hero__meta">
              <span>PRIVATE GUIDED MTB ADVENTURES</span>
              <span>TAILOR-MADE RIDING ITINERARIES</span>
              <span>ATLAS MOUNTAINS & MOROCCO</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">
              YOUR OWN MOROCCO MTB ADVENTURE
            </p>
            <h2>
              Discover Morocco by mountain bike, on your own terms.
            </h2>
          </div>

          <div className="cl-intro__copy">
            <p>
              A private mountain bike tour gives you the freedom to
              explore Morocco with your own group and a journey planned
              around your interests. Instead of following a fixed shared
              departure, you can discuss the riding areas, trip duration,
              pace and practical arrangements that suit your plans.
            </p>

            <p>
              The Atlas Mountains provide a varied setting for mountain
              biking, with mountain tracks, singletrack, traditional
              villages and changing landscapes. Around Imlil and the
              Toubkal region, you can discover distinctive mountain
              scenery and consider different routes according to your
              riding experience and the conditions.
            </p>

            <p>
              Whether you are travelling as a couple, a group of friends
              or a private riding party, your itinerary should reflect
              the abilities and expectations of everyone taking part.
              Route difficulty, daily distances, transfers and support
              arrangements can be discussed during the planning process.
            </p>

            <Link className="cl-text-link" href="/cycling-trips/private-groups">
              Explore private cycling experiences <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="private-mtb-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  PRIVATE CYCLING ADVENTURES
                </p>
                <h2>
                  Discover private mountain biking experiences in Morocco
                </h2>
              </div>

              <p>
                Choose from private Atlas Mountain riding escapes and
                tailor-made cycling journeys starting in Marrakech.
                Each option offers an opportunity to discuss the route,
                duration and arrangements around your group.
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
                YOUR GROUP · YOUR ROUTE
              </p>
              <h2>
                A private cycling experience shaped around you.
              </h2>
            </div>

            <div>
              <p>
                Every riding group has its own ambitions. Some riders
                are looking for technical singletrack and challenging
                mountain descents, while others prefer scenic mountain
                tracks and time to discover rural Morocco. A private
                itinerary gives you the opportunity to discuss the
                riding style, daily distances, pace and travel
                arrangements before confirming your adventure.
              </p>

              <Link
                className="cl-button cl-button--gold"
                href={{
                  pathname: "/contact",
                  query: {
                    tour: "Private Mountain Bike Tour Morocco",
                    request: "booking",
                  },
                }}
              >
                Discuss Your Private Tour
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
                Explore Morocco's mountain biking destinations.
              </h2>
            </div>

            <p>
              Discover different landscapes for your private MTB
              journey, from the High Atlas mountains to the valleys
              around Imlil and the countryside beyond Marrakech.
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
              src="/images/atlas-mountains-singletrack.jpg"
              alt="Mountain biking through the Atlas Mountains in Morocco"
              loading="lazy"
            />
          </div>

          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">
              THE PRIVATE MTB EXPERIENCE
            </p>

            <h2>
              More freedom to explore, with a journey built around your group.
            </h2>

            <p>
              Private mountain biking in Morocco allows you to experience
              the trails and landscapes at a pace that suits your group.
              Your preferred riding style, technical ability and available
              travel time all help determine which areas and routes are
              appropriate for your adventure.
            </p>

            <p>
              For a multi-day journey, consider daily distances, elevation,
              transfers and accommodation alongside the riding itself.
              Discussing these practical details in advance helps shape
              an itinerary that works for everyone taking part.
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
                  PLAN A PRIVATE MTB ADVENTURE
                </p>
                <h2>
                  The details that shape your private riding experience.
                </h2>
              </div>

              <p>
                A successful private MTB itinerary starts with
                understanding your group. Consider your riding level,
                preferred terrain, travel dates and practical
                requirements before selecting a route.
              </p>
            </div>

            <div className="cl-why-grid">
              <article>
                <span>01</span>
                <h3>Your riding level</h3>
                <p>
                  Share your technical experience, confidence on
                  descents and fitness so suitable routes can
                  be discussed.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Your preferred terrain</h3>
                <p>
                  Discuss singletrack, mountain tracks, climbs,
                  descents and the type of riding you want
                  to experience.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Your group and dates</h3>
                <p>
                  Share your travel dates, group size and available
                  time to help plan the practical details of
                  your journey.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Your private itinerary</h3>
                <p>
                  Discuss destinations, transfers, accommodation
                  and support arrangements for your group's
                  mountain biking adventure.
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
                How to organise your private mountain bike tour.
              </h2>
            </div>

            <p>
              Start by sharing your riding preferences and travel
              plans. From there, discuss suitable destinations,
              route options and practical arrangements for your
              private Morocco MTB adventure.
            </p>
          </div>

          <div className="cl-steps">
            <article>
              <span>STEP 01</span>
              <h3>Tell us about your group</h3>
              <p>
                Share your preferred dates, group size, riding
                experience and the type of mountain biking
                you enjoy.
              </p>
            </article>

            <article>
              <span>STEP 02</span>
              <h3>Discuss your route</h3>
              <p>
                Consider the Atlas Mountains, Imlil and other
                destinations according to your preferred
                terrain and available time.
              </p>
            </article>

            <article>
              <span>STEP 03</span>
              <h3>Review the arrangements</h3>
              <p>
                Discuss the itinerary, difficulty, transfers,
                equipment, accommodation and support before
                confirming your trip.
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
                Private mountain bike tours in Morocco: FAQs
              </h2>

              <p>
                Find answers to common questions about private
                mountain biking in Morocco, including custom
                itineraries, destinations, group arrangements
                and riding levels. If you have a particular
                trip in mind, get in touch with your details.
              </p>

              <Link className="cl-text-link" href="/contact">
                Ask us about a private MTB tour <span aria-hidden="true">↗</span>
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
            src="/images/singletrack-biking-morocco.jpg"
            alt="Private mountain biking adventure in Morocco"
            loading="lazy"
          />

          <div className="cl-final-cta__overlay" />

          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">
              YOUR PRIVATE MOROCCO MTB ADVENTURE
            </p>

            <h2>
              Ready to plan your private mountain bike tour?
            </h2>

            <p>
              Tell us when you are travelling, who is riding
              and what kind of mountain biking experience you
              are looking for. Start planning a private guided
              adventure across Morocco.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{
                  pathname: "/contact",
                  query: {
                    tour: "Private Mountain Bike Tours Morocco",
                    request: "booking",
                  },
                }}
              >
                Plan Your Private MTB Tour
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="/cycling-trips/private-groups"
              >
                View Private Cycling Tours
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