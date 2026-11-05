import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "High Atlas Singletrack Expedition | Mountain Bike Morocco",
  description:
    "Explore Morocco's High Atlas on a mountain bike adventure featuring rugged singletrack, technical descents, remote valleys and traditional Amazigh villages.",
  alternates: {
    canonical: "/cycling-trips/high-atlas",
  },
  openGraph: {
    title: "High Atlas Singletrack Expedition | Mountain Bike Morocco",
    description:
      "Discover mountain biking adventures across Morocco's High Atlas Mountains.",
    url: "/cycling-trips/high-atlas",
    type: "website",
  },
};

const tripOptions = [
  {
    number: "01",
    duration: "6 days",
    label: "MULTI-DAY SINGLETRACK",
    title: "Atlas Singletrack Mountain Bike Tour",
    description:
      "Explore mountain tracks and singletrack through the Atlas region. Balance challenging riding, mountain scenery and rural communities with daily stages tailored to your experience.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/cycling-trips/trip/atlas-singletrack-mountain-bike-tour-6-day",
  },
  {
    number: "02",
    duration: "8 days",
    label: "EPIC TRAIL EXPEDITION",
    title: "Epic Singletrack Atlas Mountains",
    description:
      "Allow more time for an extended mountain biking journey across varied Atlas terrain. Discuss technical trails, daily distances, elevation and support when planning your expedition.",
    image: "/images/singletrack-biking-morocco.jpg",
    href: "/cycling-trips/trip/epic-singletrack-atlas-mountains-8-day",
  },
  {
    number: "03",
    duration: "5 days",
    label: "TECHNICAL DESCENTS",
    title: "Atlas Enduro MTB Tour",
    description:
      "Combine mountain climbs with technical descents and rugged trails. Choose routes according to your bike setup, riding ability, trail conditions and preferred level of challenge.",
    image: "/images/atlas-mountains-enduro-biking-tour.jpg",
    href: "/cycling-trips/trip/atlas-enduro-mtb-tour-5-day",
  },
  {
    number: "04",
    duration: "8 days",
    label: "PRIVATE MTB ADVENTURE",
    title: "Mountain Biking Atlas Mountains",
    description:
      "Create a mountain biking holiday around your group, preferred terrain and riding pace. Discuss accommodation, transfers, guiding and recovery time when planning your journey.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
    href: "/cycling-trips/trip/mountain-biking-atlas-mountains-8-day",
  },
];

const destinations = [
  {
    title: "High Atlas Mountains",
    text:
      "Explore dramatic mountain scenery, rocky trails and remote valleys. Route selection depends on altitude, trail access, technical difficulty and your group's riding experience.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Imlil and Toubkal Region",
    text:
      "Discover traditional Amazigh villages, terraced fields and rugged mountain tracks around Imlil. The route should reflect local conditions and the technical abilities of your group.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil-toubkal",
  },
  {
    title: "Marrakech and the Foothills",
    text:
      "Start from Marrakech and explore the countryside leading towards the Atlas Mountains. Combine riding with scenic viewpoints, rural tracks and opportunities to experience local culture.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
    href: "/destinations/marrakech",
  },
  {
    title: "Agafay and Open Terrain",
    text:
      "Experience open, rocky landscapes beyond the mountain valleys. Consider loose surfaces, temperature, water requirements and route conditions when planning your ride.",
    image: "/images/Agafay-desert-morocco.jpg",
    href: "/destinations/agafay-desert",
  },
];

const benefits = [
  {
    number: "01",
    title: "Authentic Atlas singletrack",
    text:
      "Discover narrow mountain trails, rocky paths and traditional routes connecting valleys and Amazigh villages, subject to local access and trail conditions.",
  },
  {
    number: "02",
    title: "Technical mountain descents",
    text:
      "Explore varied terrain and rewarding descents on routes selected to match your bike setup, handling skills and comfort on technical ground.",
  },
  {
    number: "03",
    title: "Thoughtful route planning",
    text:
      "Discuss daily distances, elevation, riding difficulty, accommodation and support before confirming the itinerary for your group.",
  },
  {
    number: "04",
    title: "More than the ride",
    text:
      "Make time for mountain scenery, traditional villages, local hospitality and the landscapes that give the High Atlas its distinctive character.",
  },
];

const planningSteps = [
  {
    number: "STEP 01",
    title: "Tell us about your riding",
    text:
      "Share your experience, fitness, group size, bike type and preferred terrain so the trip can be considered around your abilities.",
  },
  {
    number: "STEP 02",
    title: "Discuss your route",
    text:
      "Compare trail options, daily distances, elevation, technical sections and seasonal conditions for your preferred travel dates.",
  },
  {
    number: "STEP 03",
    title: "Review the details",
    text:
      "Discuss accommodation, transfers, equipment, guiding and support arrangements before confirming your expedition.",
  },
];

const faqs = [
  {
    question: "What experience do I need for a High Atlas singletrack trip?",
    answer:
      "It depends on the chosen route. Rocky, narrow or steep trails can require confident bike handling and previous mountain biking experience. Share your fitness, riding history and comfort on descents when enquiring.",
  },
  {
    question: "How long should I plan for the expedition?",
    answer:
      "Options include a six-day singletrack tour or an eight-day extended expedition. Confirm the riding days, route, transfers and overnight arrangements for your selected trip before booking.",
  },
  {
    question: "When is the best time to ride in the High Atlas?",
    answer:
      "Spring and autumn can be suitable for many routes, but conditions vary with altitude and location. Higher trails can experience cold, snow or changing weather, so discuss your intended route before choosing dates.",
  },
  {
    question: "Can I customise the itinerary?",
    answer:
      "You can enquire about a private trip based on your dates, group size, riding experience, preferred terrain and accommodation needs. The final plan should reflect route access and available support.",
  },
  {
    question: "Can I bring my own mountain bike?",
    answer:
      "You can discuss bringing your own bike when enquiring. Consider airline transport rules, transfers, assembly and spare parts. Share your bike type so the arrangements can be reviewed.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring a suitable helmet, gloves, riding clothing, eye protection, hydration and sun protection. Warm layers and waterproof clothing may be useful depending on the season and altitude. Request a packing list for your confirmed route.",
  },
];

function enquiryHref(request: "details" | "booking" = "details") {
  return `/contact?tour=${encodeURIComponent(
    "High Atlas Singletrack Expedition"
  )}&destination=${encodeURIComponent(
    "High Atlas Mountains, Morocco"
  )}&request=${request}`;
}

export default function HighAtlasSingletrackPage() {
  return (
    <>
      <main className="cycling-listing mtb-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/singletrack-mtb-atlas-mountains.jpg"
            alt="Mountain biking through the High Atlas Mountains of Morocco"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">
              MOUNTAIN BIKE · SINGLETRACK · MOROCCO
            </p>
            <h1>High Atlas Singletrack Expedition</h1>
            <p className="cl-hero__intro">
              Ride beyond the ordinary on a mountain biking adventure through
              Morocco's High Atlas, discovering rugged singletrack, dramatic
              mountain scenery, remote valleys and traditional Amazigh
              villages. Explore the available journeys and discuss a route
              that suits your riding experience, preferred terrain and travel
              dates.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={enquiryHref("booking")}
              >
                Plan Your Expedition
              </Link>
              <Link
                className="cl-button cl-button--outline"
                href="#high-atlas-tours"
              >
                Explore MTB Tours
              </Link>
            </div>
            <div className="cl-hero__meta">
              <span>HIGH ATLAS SINGLETRACK</span>
              <span>PRIVATE TRIP OPTIONS</span>
              <span>ROUTES TO SUIT YOUR LEVEL</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">
              RIDE THE HIGH ATLAS
            </p>
            <h2>Mountain biking shaped by the landscape.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              Morocco's High Atlas Mountains offer a striking setting for
              mountain biking, with rocky paths, remote valleys, mountain
              villages and sweeping views across rugged terrain. A carefully
              planned trip can combine rewarding climbs, technical descents
              and quieter trails away from busy roads.
            </p>
            <p>
              Every group has different goals. Some riders want challenging
              singletrack and enduro-style descents, while others prefer a
              longer journey that balances riding with cultural discovery.
              Discuss your experience, fitness, preferred terrain and travel
              dates so the route can be planned around your group.
            </p>
            <p>
              Trail access, weather, altitude and local conditions can affect
              the final itinerary. Distances, elevation, accommodation and
              support should be confirmed for your selected trip before
              booking.
            </p>
            <Link className="cl-text-link" href="/cycling-trips">
              Explore all cycling tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="high-atlas-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  CHOOSE YOUR ADVENTURE
                </p>
                <h2>High Atlas mountain bike tours</h2>
              </div>
              <p>
                Compare singletrack journeys, technical trail adventures and
                private mountain biking holidays. Each trip can be discussed
                according to your available time, preferred terrain and riding
                experience.
              </p>
            </div>

            <div className="cl-tour-grid">
              {tripOptions.map((tour) => (
                <article className="cl-tour-card" key={tour.number}>
                  <Link
                    className="cl-tour-card__image-link"
                    href={tour.href}
                    aria-label={`More details about ${tour.title}`}
                  >
                    <img
                      className="cl-tour-card__image"
                      src={tour.image}
                      alt={tour.title}
                      loading="lazy"
                    />
                    <span className="cl-tour-card__number">
                      {tour.number}
                    </span>
                  </Link>
                  <div className="cl-tour-card__body">
                    <p className="cl-card-label">
                      {tour.label} · {tour.duration}
                    </p>
                    <h3>
                      <Link href={tour.href}>{tour.title}</Link>
                    </h3>
                    <p>{tour.description}</p>
                    <div className="cl-tour-card__actions">
                      <Link
                        className="cl-button cl-button--dark"
                        href={tour.href}
                      >
                        More Details
                      </Link>
                      <Link
                        className="cl-button cl-button--gold"
                        href={{
                          pathname: "/contact",
                          query: {
                            tour: tour.title,
                            destination: "High Atlas Mountains, Morocco",
                            request: "booking",
                          },
                        }}
                      >
                        Booking
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
              <p className="cl-eyebrow">BEYOND THE TRAIL</p>
              <h2>Discover Morocco one mountain valley at a time.</h2>
            </div>
            <div>
              <p>
                A High Atlas expedition is about more than the descent. The
                landscape shifts between mountain ridges, terraced fields,
                traditional villages and wide-open valleys. Between rides,
                there may be time to enjoy local hospitality and experience
                the character of mountain life.
              </p>
              <p>
                Your route should balance riding ambitions with sensible
                daily stages, rest stops and practical logistics. The final
                itinerary should reflect the conditions and arrangements
                agreed for your trip.
              </p>
              <Link
                className="cl-button cl-button--gold"
                href={enquiryHref("details")}
              >
                Discuss Your Route
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
              <h2>Explore the landscapes of the High Atlas</h2>
            </div>
            <p>
              Explore mountain trails, traditional villages and the
              countryside around Marrakech. The best riding area depends
              on your experience, available time, route access and seasonal
              conditions.
            </p>
          </div>

          <div className="cl-region-grid">
            {destinations.map((destination, index) => (
              <article className="cl-region-card" key={destination.title}>
                <Link
                  className="cl-region-card__image-wrap"
                  href={destination.href}
                  aria-label={destination.title}
                >
                  <img
                    src={destination.image}
                    alt={destination.title}
                    loading="lazy"
                  />
                  <span>0{index + 1}</span>
                </Link>
                <div className="cl-region-card__body">
                  <h3>
                    <Link href={destination.href}>
                      {destination.title}
                    </Link>
                  </h3>
                  <p>{destination.text}</p>
                  <Link className="cl-text-link" href={destination.href}>
                    Explore the region <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cl-editorial">
          <div className="cl-editorial__image">
            <img
              src="/images/mountain-biking-atlas-mountains-morocco.jpg"
              alt="Mountain biking through the rugged Atlas Mountains"
              loading="lazy"
            />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">
              THE EXPERIENCE
            </p>
            <h2>Discover the trails, villages and quieter side of Morocco.</h2>
            <p>
              A High Atlas mountain biking holiday offers the chance to travel
              through changing landscapes, pause at mountain viewpoints and
              discover rural Morocco beyond the main roads. Depending on the
              route, the journey can combine challenging riding with village
              visits, local hospitality and time to appreciate the scenery.
            </p>
            <p>
              A well-planned itinerary gives attention to daily distances,
              elevation, technical difficulty, recovery time and transfers.
              These practical details are especially important when riding
              remote trails or connecting different valleys. Discussing them
              in advance helps establish realistic stages for your group.
            </p>
            <Link className="cl-button cl-button--dark" href="/about">
              Learn About Our Approach
            </Link>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">WHY PLAN YOUR RIDE WITH US</p>
                <h2>Local insight and practical planning for your MTB holiday.</h2>
              </div>
              <p>
                A successful mountain biking expedition balances exciting
                trails with sensible planning. Discussing your experience,
                preferred terrain and practical requirements helps shape
                an itinerary that suits your group.
              </p>
            </div>

            <div className="cl-why-grid">
              {benefits.map((benefit) => (
                <article key={benefit.number}>
                  <span>{benefit.number}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">
                PLAN YOUR EXPEDITION
              </p>
              <h2>Three steps to start planning your High Atlas ride.</h2>
            </div>
            <p>
              You do not need to have every detail decided before making an
              enquiry. Start with your dates, riding preferences and group
              requirements, then discuss the routes and practical arrangements
              that might suit your plans.
            </p>
          </div>

          <div className="cl-steps">
            {planningSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">
                GOOD TO KNOW
              </p>
              <h2>High Atlas mountain biking: frequently asked questions.</h2>
              <p>
                Find answers to common questions about trail difficulty,
                trip duration, seasonal conditions and preparing for your
                expedition. For advice about a particular journey, contact
                us with your dates and riding preferences.
              </p>
              <Link className="cl-text-link" href="/contact">
                Ask us about your trip <span aria-hidden="true">↗</span>
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
            src="/images/singletrack-mtb-atlas-mountains.jpg"
            alt="High Atlas mountain biking trails in Morocco"
            loading="lazy"
          />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR NEXT MTB ADVENTURE</p>
            <h2>Ready for your High Atlas singletrack expedition?</h2>
            <p>
              Tell us your travel dates, group size, riding experience and
              preferred terrain. We can discuss suitable routes, accommodation,
              transfers and support before you decide on your expedition.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={enquiryHref("booking")}
              >
                Plan Your Expedition
              </Link>
              <Link
                className="cl-button cl-button--outline"
                href="/cycling-trips/mtb"
              >
                Explore MTB Tours
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
              experiences across Morocco. Discover the landscapes, trails
              and local culture at your own pace.
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
            <Link href="/destinations/imlil-toubkal">Imlil &amp; Toubkal</Link>
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
          <span>© 2026 Mountain Bike Morocco</span>
          <span>Morocco cycling adventures, thoughtfully planned.</span>
        </div>
      </footer>
    </>
  );
}