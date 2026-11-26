import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Mountain Biking Tours Morocco | Private MTB Adventures",
  description:
    "Discover luxury mountain biking tours in Morocco. Enjoy private guided MTB adventures, spectacular Atlas Mountain trails, carefully selected accommodation and authentic Moroccan hospitality.",
  alternates: {
    canonical: "/luxury-mountain-biking-tour",
  },
  openGraph: {
    title: "Luxury Mountain Biking Tours Morocco | Mountain Bike Morocco",
    description:
      "Experience Morocco through private luxury mountain biking adventures, combining Atlas Mountain trails, personalised guiding and authentic local experiences.",
    url: "https://mountain-bike-morocco.com/luxury-mountain-biking-tour",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/mountain-biking-atlas-mountains-morocco.jpg",
        alt: "Luxury mountain biking adventure in the Atlas Mountains of Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Mountain Biking Tours Morocco | Mountain Bike Morocco",
    description:
      "Discover private mountain biking holidays in Morocco, with spectacular Atlas trails, personalised guiding and carefully planned cycling experiences.",
    images: ["/images/mountain-biking-atlas-mountains-morocco.jpg"],
  },
};

const tours = [
  {
    number: "01",
    duration: "6 days",
    label: "LUXURY MTB · ATLAS SINGLETRACK",
    destination: "HIGH ATLAS MOUNTAINS",
    title: "Luxury Atlas Singletrack Mountain Bike Tour",
    description:
      "Explore the High Atlas on a private mountain biking journey combining rewarding singletrack, spectacular mountain scenery and traditional Berber villages. Ride around Imlil and the foothills of Mount Toubkal with routes selected around your riding experience, fitness and preferred technical level. Enjoy a carefully planned itinerary with local guiding, comfortable accommodation options and time to appreciate the mountain landscape.",
    image: "/images/singletrack-biking-morocco.jpg",
    href: "/cycling-trips/trip/atlas-singletrack-mountain-bike-tour-6-day",
  },
  {
    number: "02",
    duration: "8 days",
    label: "PRIVATE MTB · TECHNICAL TRAILS",
    destination: "IMLIL & TOUBKAL",
    title: "Private Luxury Atlas Mountain Biking Adventure",
    description:
      "Spend more time discovering the High Atlas on an extended private mountain biking holiday. Explore technical trails, rocky paths and remote mountain valleys around Imlil and the Toubkal region. Your journey can be organised around your group's riding level, preferred daily distances and accommodation expectations, with local support throughout the experience.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/cycling-trips/trip/morocco-singletrack-atlas-mountains-8-day",
  },
  {
    number: "03",
    duration: "5 days",
    label: "LUXURY ENDURO · HIGH ATLAS",
    destination: "ATLAS MOUNTAINS",
    title: "Luxury Atlas Enduro MTB Experience",
    description:
      "Discover the more technical side of Morocco through a private enduro mountain biking experience. Ride challenging mountain trails, rocky descents and varied terrain with routes planned around your technical ability and fitness. Combine full days on the bike with comfortable accommodation and the opportunity to discover the character of the High Atlas.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/cycling-trips/trip/atlas-enduro-mtb-tour-5-day",
  },
  {
    number: "04",
    duration: "4 days",
    label: "PREMIUM E-MTB · ATLAS",
    destination: "HIGH ATLAS & IMLIL",
    title: "Luxury Atlas Mountains E-Bike Escape",
    description:
      "Discover the Atlas Mountains by electric mountain bike, combining scenic mountain routes with the freedom to explore more terrain. Enjoy a private cycling experience through mountain valleys and traditional villages, with daily routes adapted to battery range, elevation and trail conditions. A comfortable way to experience the landscapes and hospitality of the High Atlas.",
    image: "/images/imlil-cycling-adventure-tour.jpeg",
    href: "/cycling-trips/e-mtb",
  },
];

const destinations = [
  {
    title: "Imlil and Mount Toubkal",
    text:
      "Discover one of Morocco's most spectacular mountain regions, where traditional Berber villages, terraced fields and dramatic valleys sit beneath Mount Toubkal. Imlil provides an excellent base for private mountain biking experiences, with access to a variety of mountain tracks and trails. Enjoy the scenery and local hospitality while exploring routes selected around your riding ability.",
    image: "/images/imlil-cycling-adventure-tour.jpeg",
    href: "/destinations/imlil",
  },
  {
    title: "High Atlas Mountains",
    text:
      "The High Atlas offers an exceptional setting for a premium mountain biking holiday. Explore remote valleys, rocky mountain paths, challenging climbs and rewarding singletrack surrounded by dramatic landscapes. Carefully planned routes and local knowledge help create a memorable experience across this diverse mountain region.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Agafay Desert",
    text:
      "Discover a different side of Morocco in the rocky landscapes of Agafay. Located south of Marrakech, this distinctive desert environment offers open scenery, rolling tracks and opportunities for off-road cycling. Combine a mountain biking experience with the atmosphere of the desert and the convenience of being close to Marrakech.",
    image: "/images/Agafay-desert-morocco.jpg",
    href: "/destinations/agafay-desert",
  },
  {
    title: "Marrakech and the Foothills",
    text:
      "Combine the energy and atmosphere of Marrakech with private cycling experiences in the surrounding countryside. The foothills provide access to mountain landscapes and routes towards the High Atlas. This region is an excellent starting point for a luxury cycling holiday, with opportunities to combine riding, local culture and time in the city.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/destinations/marrakech",
  },
];

const faqs = [
  {
    question: "What makes a luxury mountain biking holiday in Morocco different?",
    answer:
      "A luxury mountain biking holiday combines private guiding, carefully planned routes and comfortable accommodation with opportunities to discover Morocco's landscapes and culture. The experience can be organised around your group, preferred riding level, available time and accommodation expectations.",
  },
  {
    question: "Are luxury mountain biking tours privately guided?",
    answer:
      "Private guided experiences can be arranged for individuals, couples, families and groups. A private itinerary offers more flexibility when planning daily distances, riding pace, destinations and the type of trails you want to explore.",
  },
  {
    question: "What type of accommodation can I expect?",
    answer:
      "Accommodation options depend on the itinerary and destination. A journey can include carefully selected hotels, mountain lodges and comfortable guesthouses. Discuss your expectations and preferred accommodation style when planning your trip so that suitable options can be considered.",
  },
  {
    question: "Do I need advanced mountain biking experience?",
    answer:
      "Not necessarily. The required experience depends on the trails selected. Some routes may suit confident recreational riders, while technical singletrack and enduro trails require stronger bike-handling skills and experience on uneven terrain. Your itinerary should reflect your actual riding ability.",
  },
  {
    question: "When is the best time for luxury mountain biking in Morocco?",
    answer:
      "Spring and autumn are generally popular seasons for mountain biking in the Atlas Mountains because temperatures are often more comfortable. Conditions vary with altitude and weather, so the best travel period also depends on the routes and destinations included in your itinerary.",
  },
  {
    question: "Can a luxury mountain biking itinerary be customised?",
    answer:
      "Yes. A private journey can be discussed around your travel dates, group size, riding experience, preferred destinations and accommodation expectations. Daily distances, trail difficulty and time away from the bike can all be considered when planning the experience.",
  },
  {
    question: "Can you organise transfers from Marrakech?",
    answer:
      "Transfers from Marrakech can be discussed as part of your cycling arrangements. The practical details depend on the destinations, accommodation and itinerary. Share your arrival information and travel plans when making an enquiry.",
  },
  {
    question: "Can I combine mountain biking with local cultural experiences?",
    answer:
      "Yes. An Atlas mountain biking holiday can include time in traditional Berber villages, mountain valleys and local communities. Depending on the itinerary, there may be opportunities to enjoy local food, visit viewpoints and discover the region beyond the trails.",
  },
  {
    question: "Are luxury mountain biking tours suitable for couples or small groups?",
    answer:
      "Private cycling experiences can be discussed for couples, friends and small groups. The itinerary should take account of everyone's riding experience, fitness and expectations so that the route and daily schedule are appropriate for the group.",
  },
  {
    question: "What should I include in my luxury MTB tour enquiry?",
    answer:
      "Include your preferred travel dates, group size, riding experience, fitness, preferred type of trails and accommodation expectations. It is also useful to mention whether you prefer a technical mountain biking adventure, scenic riding or a combination of cycling and cultural experiences.",
  },
];

export default function LuxuryMountainBikingTourPage() {
  return (
    <>
      <main className="cycling-listing gravel-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/mountain-biking-atlas-mountains-morocco.jpg"
            alt="Luxury mountain biking adventure through the Atlas Mountains of Morocco"
            fetchPriority="high"
          />

          <div className="cl-hero__shade" />

          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">
              LUXURY MOUNTAIN BIKING · PRIVATE TOURS · MOROCCO
            </p>

            <h1>Luxury Mountain Biking Tours in Morocco</h1>

            <p className="cl-hero__intro">
              Discover Morocco through exceptional mountain
              biking experiences, combining spectacular Atlas
              Mountain trails, private local guiding and
              carefully planned journeys. Explore traditional
              Berber villages, remote mountain valleys and
              rewarding singletrack around Imlil and Mount
              Toubkal. Whether you are planning a private
              cycling escape, a multi-day MTB adventure or
              a special holiday with friends, enjoy an
              experience shaped around your riding level,
              preferred accommodation and travel ambitions.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your Luxury MTB Tour
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="#luxury-mtb-tours"
              >
                Explore Luxury Tours
              </Link>
            </div>

            <div className="cl-hero__meta">
              <span>PRIVATE MTB EXPERIENCES</span>
              <span>SELECTED ACCOMMODATION</span>
              <span>PERSONALISED GUIDING</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">
              RIDE MOROCCO IN COMFORT
            </p>

            <h2>
              Discover the Atlas through a more personal mountain biking experience.
            </h2>

            <img
              src="/images/atlas-mountains-singletrack.jpg"
              alt="Mountain biking through the spectacular trails of the High Atlas"
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
              A luxury mountain biking holiday in Morocco brings
              together rewarding riding, local knowledge and
              carefully planned travel arrangements. The Atlas
              Mountains offer a remarkable setting for this
              experience, with dramatic valleys, traditional
              villages, rocky mountain tracks and spectacular
              trails beneath the peaks.
            </p>

            <p>
              Around Imlil and Mount Toubkal, routes pass through
              mountain communities and changing landscapes.
              Private guiding allows the riding experience to
              be discussed around your technical ability,
              fitness and preferred daily distances, while
              accommodation and practical arrangements can
              be considered as part of the wider journey.
            </p>

            <p>
              A premium cycling experience is not only about
              the time spent on the bike. It is also about
              discovering the region at a comfortable pace,
              enjoying local hospitality and having the
              flexibility to shape the itinerary around
              your interests.
            </p>

            <p>
              Whether you prefer technical singletrack,
              challenging enduro trails or scenic mountain
              rides, a well-planned private itinerary can
              balance riding ambitions with comfortable
              accommodation, transfers and time to enjoy
              Morocco beyond the trails.
            </p>

            <Link className="cl-text-link" href="/cycling-trips/mtb">
              Explore all mountain bike tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="luxury-mtb-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  PRIVATE & PREMIUM CYCLING EXPERIENCES
                </p>

                <h2>
                  Luxury mountain biking tours in Morocco
                </h2>
              </div>

              <p>
                Discover private mountain biking journeys through
                the Atlas Mountains and beyond. From singletrack
                adventures around Imlil to longer MTB holidays
                through the High Atlas, each experience can be
                discussed around your preferred trails, riding
                level, travel dates and accommodation expectations.
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
                      LUXURY MOUNTAIN BIKE · {tour.destination}
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
                  MORE PRIVATE CYCLING EXPERIENCES
                </p>

                <h2>
                  Discover more ways to explore Morocco by bike
                </h2>
              </div>

              <p>
                Looking for a different destination or riding
                experience? Explore our mountain biking collection
                for more guided routes, private itineraries and
                multi-day adventures across Morocco. Discuss
                your preferred travel dates, group requirements
                and accommodation expectations with our team
                to start planning your cycling holiday.
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
                A MORE PERSONAL WAY TO RIDE
              </p>

              <h2>
                Enjoy a private mountain biking journey shaped around you.
              </h2>
            </div>

            <div>
              <p>
                A private luxury cycling experience gives you
                the flexibility to discuss the type of riding,
                destinations and daily schedule that suit your
                group. Whether you want technical singletrack,
                scenic mountain routes or a combination of
                different terrain, the itinerary should reflect
                your experience and expectations.
              </p>

              <p>
                Accommodation, transfers and daily logistics
                are important parts of a multi-day journey.
                Discuss your preferred accommodation style,
                travel arrangements and the practical support
                needed for your planned routes before confirming
                your trip.
              </p>

              <p>
                With the right planning, your mountain biking
                holiday can combine rewarding days on the trails
                with comfortable places to stay, local food
                and opportunities to discover the culture
                and landscapes of Morocco.
              </p>

              <Link
                className="cl-button cl-button--gold"
                href="/contact"
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
                DISCOVER MOROCCO
              </p>

              <h2>
                Explore exceptional destinations for your cycling holiday.
              </h2>
            </div>

            <p>
              From the mountain villages around Imlil to the
              wider High Atlas and the rocky landscapes of
              Agafay, Morocco offers a variety of destinations
              for a private mountain biking experience. Each
              region has its own character, terrain and
              opportunities to discover the country beyond
              the bike.
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
                    LUXURY CYCLING DESTINATION
                  </span>
                  <span className="home-tour-card__level">
                    {destination.title}
                  </span>
                </Link>

                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">
                    PRIVATE CYCLING · {destination.title}
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
              alt="Traditional Berber village in the Atlas Mountains of Morocco"
              loading="lazy"
            />
          </div>

          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">
              BEYOND THE TRAILS
            </p>

            <h2>
              Discover the culture and hospitality of the Moroccan mountains.
            </h2>

            <p>
              A luxury mountain biking holiday is an opportunity
              to experience more than the trails. The Atlas
              Mountains are home to traditional Berber villages,
              cultivated valleys and communities whose hospitality
              is an important part of travelling through the region.
            </p>

            <p>
              Around Imlil and the Toubkal region, mountain
              settlements sit within a dramatic landscape
              of steep slopes, terraced fields and changing
              elevations. Exploring these areas by bike offers
              a memorable way to discover the mountain scenery
              and local way of life.
            </p>

            <p>
              A thoughtfully planned itinerary can include
              time to enjoy local food, stop at scenic viewpoints
              and discover the places along your route. The
              balance between riding, accommodation and local
              experiences can be discussed when organising
              your private journey.
            </p>

            <p>
              Whether you are travelling as a couple, with
              friends or as a small group, the experience
              should reflect what matters most to you:
              the trails, the landscapes, the hospitality
              and the time spent discovering Morocco.
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
                  THE PRIVATE CYCLING EXPERIENCE
                </p>

                <h2>
                  What to expect from a luxury mountain biking holiday.
                </h2>
              </div>

              <p>
                A successful premium cycling holiday brings
                together suitable trails, experienced local
                guidance and practical arrangements that
                reflect your expectations. From the first
                enquiry to the daily riding schedule, clear
                planning helps create an experience that
                balances adventure, comfort and discovery.
              </p>
            </div>

            <div className="cl-why-grid">
              <article>
                <span>01</span>

                <h3>Private local guiding</h3>

                <p>
                  Explore the mountains with local knowledge
                  and routes discussed around your riding
                  ability, experience and preferred terrain.
                </p>
              </article>

              <article>
                <span>02</span>

                <h3>Personalised itineraries</h3>

                <p>
                  Consider daily distances, elevation,
                  destinations and riding pace when shaping
                  a journey around your group.
                </p>
              </article>

              <article>
                <span>03</span>

                <h3>Comfortable accommodation</h3>

                <p>
                  Discuss selected hotels, mountain lodges
                  and guesthouses that complement the
                  destinations and style of your journey.
                </p>
              </article>

              <article>
                <span>04</span>

                <h3>Thoughtful trip planning</h3>

                <p>
                  Consider transfers, practical support,
                  local experiences and time away from the
                  bike as part of the overall itinerary.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">
                PLAN YOUR LUXURY MTB HOLIDAY
              </p>

              <h2>
                How to organise your private mountain biking experience.
              </h2>
            </div>

            <p>
              Start with your travel dates, group size and
              preferred riding experience. You do not need
              to have every detail decided before making
              an enquiry. Sharing your expectations for
              trails, accommodation and travel arrangements
              helps establish the options for your journey
              through Morocco.
            </p>
          </div>

          <div className="cl-steps">
            <article>
              <span>STEP 01</span>

              <h3>Tell us about your plans</h3>

              <p>
                Share your preferred dates, group size,
                riding experience, fitness and the type
                of mountain biking you enjoy. Include
                your accommodation expectations and
                any special interests for the trip.
              </p>
            </article>

            <article>
              <span>STEP 02</span>

              <h3>Discuss your private itinerary</h3>

              <p>
                Explore suitable destinations, routes,
                daily distances and trail difficulty.
                Discuss accommodation options, transfers
                and the balance between cycling and
                discovering the region.
              </p>
            </article>

            <article>
              <span>STEP 03</span>

              <h3>Review the arrangements</h3>

              <p>
                Go through the itinerary, accommodation,
                transport and support arrangements before
                confirming your journey. Check what is
                included, what is not included and
                the practical details for your trip.
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
                Luxury mountain biking in Morocco: frequently asked questions
              </h2>

              <p>
                Find answers to common questions about private
                mountain biking holidays, accommodation,
                guiding, destinations and planning your trip.
                Understanding the riding and practical
                arrangements can help you choose an experience
                that reflects your expectations. For advice
                about a particular journey, contact us with
                your dates and preferences.
              </p>

              <Link className="cl-text-link" href="/contact">
                Ask us about your luxury MTB tour <span aria-hidden="true">↗</span>
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
            alt="Private mountain biking adventure in the Atlas Mountains of Morocco"
            loading="lazy"
          />

          <div className="cl-final-cta__overlay" />

          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">
              YOUR PRIVATE MOROCCAN MTB ADVENTURE
            </p>

            <h2>
              Discover Morocco through a luxury mountain biking experience.
            </h2>

            <p>
              Tell us when you would like to travel, what kind
              of trails you enjoy and the experience you expect
              from your holiday. Share your group size, riding
              level and accommodation preferences to start
              discussing a private mountain biking journey
              through the Atlas Mountains.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your Luxury MTB Tour
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