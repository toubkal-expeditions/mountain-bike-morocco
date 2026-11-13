import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cycling Tours in Morocco | MTB, E-MTB, Gravel & Road",
  description:
    "Explore cycling tours in Morocco, from Atlas Mountain bike trails and electric-assisted adventures to gravel tracks, road climbs, family rides and private cycling holidays.",
};

type CyclingCategory = {
  number: string;
  label: string;
  title: string;
  description: string;
  image: string;
  href: string;
  linkText: string;
};

const cyclingCategories: CyclingCategory[] = [
  {
    number: "01",
    label: "TRAILS & SINGLETRACK",
    title: "Mountain Bike Tours",
    description:
      "Explore Morocco's mountain trails, rocky paths and Atlas singletrack with routes shaped around your riding experience. Choose a shorter trail day or a multi-day journey through valleys and mountain villages, with difficulty, elevation and support discussed before the trip is confirmed.",
    image: "/images/mountain-bike-morocco-hero.jpg",
    href: "/cycling-trips/mtb",
    linkText: "Explore MTB tours",
  },
  {
    number: "02",
    label: "ELECTRIC-ASSISTED RIDING",
    title: "E-MTB Tours",
    description:
      "Ride mountain tracks and scenic valleys with electric assistance on the climbs. E-MTB routes need practical planning for battery range, charging, elevation, trail conditions and the riding level of the group, so each stage is matched to the proposed itinerary.",
    image: "/images/eBike-tour-atlas-mountains-morocco.jpg",
    href: "/cycling-trips/e-mtb",
    linkText: "Explore E-MTB tours",
  },
  {
    number: "03",
    label: "QUIET ROADS & MIXED SURFACES",
    title: "Gravel Cycling Tours",
    description:
      "Discover rural lanes, mountain roads and selected unpaved tracks across changing Moroccan landscapes. Routes can range from a ride near Marrakech to a longer journey, with surface, tyre choice, daily distance, water stops and transfers considered in the plan.",
    image: "/images/gravel-adventure-bike-morocco.jpg",
    href: "/cycling-trips/gravel",
    linkText: "Explore gravel tours",
  },
  {
    number: "04",
    label: "CLIMBS & OPEN ROADS",
    title: "Road Cycling Tours",
    description:
      "Ride scenic roads, rolling countryside and rewarding mountain passes in Morocco. Compare day rides and multi-day road journeys around your fitness, preferred pace, climbing goals and the distances you want to cover, with road conditions and support discussed in advance.",
    image: "/images/road-cycling-tour-morocco.jpg",
    href: "/cycling-trips/road",
    linkText: "Explore road tours",
  },
  {
    number: "05",
    label: "COMFORT & LOCAL EXPERIENCES",
    title: "Luxury Cycling Holidays",
    description:
      "Combine days on the bike with carefully considered accommodation, regional transfers and time to experience Morocco beyond the route. Discuss your preferred riding style, comfort level, cultural interests and the services you want included before confirming a private or multi-day itinerary.",
    image: "/images/morocco-luxury-bike-tour.jpg",
    href: "/cycling-trips/luxury",
    linkText: "Explore luxury tours",
  },
  {
    number: "06",
    label: "RIDE TOGETHER",
    title: "Family MTB Tours",
    description:
      "Plan a family ride around the ages, confidence and experience of everyone taking part. Suitable routes, manageable stages, breaks and non-riding time can be considered so the trip balances time outdoors with comfort, flexibility and the landscapes along the way.",
    image: "/images/group-cycling-atlas-mountains.jpg",
    href: "/cycling-trips/family-mtb",
    linkText: "Explore family tours",
  },
  {
    number: "07",
    label: "FRIENDS, CLUBS & TEAMS",
    title: "Private Group Cycling Tours",
    description:
      "Bring friends, a club, colleagues or a mixed-ability group together for a cycling trip planned around your dates and priorities. Choose the cycling discipline, compare route ideas and discuss group size, accommodation, transfers, equipment and support before the itinerary is finalised.",
    image: "/images/group-cycling-tour-morocco.jpg",
    href: "/cycling-trips/private-groups",
    linkText: "Explore group tours",
  },
  {
    number: "08",
    label: "START IN THE RED CITY",
    title: "Cycling Tours from Marrakech",
    description:
      "Use Marrakech as a starting point for countryside rides, Agafay landscapes and journeys towards the Atlas Mountains. Choose a day ride or discuss a longer holiday, with your preferred bike type, route surface, riding time and transfers taken into account.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/cycling-trips/from-marrakech",
    linkText: "Explore Marrakech tours",
  },
];

const faqs = [
  {
    question: "Which type of cycling tour should I choose?",
    answer:
      "Start with the riding you enjoy most. MTB focuses on off-road trails, E-MTB adds electric assistance, gravel combines quieter roads and suitable unpaved tracks, and road cycling centres on paved routes and climbs. Luxury, family, private-group and Marrakech options describe the trip format or starting point. Share your experience and preferences to help narrow the choice.",
  },
  {
    question: "Are the tours suitable for different experience levels?",
    answer:
      "Experience requirements depend on the route surface, elevation, distance, weather and cycling discipline. Some day rides may suit recreational riders, while technical trails or long mountain stages can require more fitness and handling experience. Ask about the actual route before making a booking decision.",
  },
  {
    question: "Can I choose a day tour or a multi-day holiday?",
    answer:
      "Options vary by category and itinerary. Some rides are designed as day trips, while others can span several days or be tailored for a private group. Duration, route stages, accommodation and transfers should be confirmed for the specific tour you choose.",
  },
  {
    question: "Can a tour be tailored for my group?",
    answer:
      "You can enquire about private or customised arrangements. Include your dates, group size, cycling style, experience, preferred daily distance and accommodation expectations so the route and practical arrangements can be considered against your needs.",
  },
  {
    question: "What should I confirm before booking?",
    answer:
      "Confirm the itinerary, riding distance, elevation, route surface, difficulty, equipment, transfers, accommodation, support services, inclusions and any additional costs. Conditions and availability can vary by season and region, so treat a trip as confirmed only once the details have been agreed.",
  },
];

export default function AllCyclingToursPage() {
  return (
    <>
      <main className="cycling-listing all-cycling-tours-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/mountain-bike-morocco-hero.jpg"
            alt="Cycling through Morocco's Atlas Mountains"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">CYCLING HOLIDAYS · MOROCCO</p>
            <h1>Find Your Cycling Tour in Morocco</h1>
            <p className="cl-hero__intro">
              From Atlas Mountain trails and electric-assisted climbs to quiet
              gravel tracks, open roads and private cycling holidays, discover
              different ways to experience Morocco by bike. Choose the riding
              style that fits your interests, experience and available time.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact?request=cycling-tour-planning"
              >
                Plan Your Cycling Holiday
              </Link>
              <Link
                className="cl-button cl-button--outline"
                href="#cycling-styles"
              >
                Explore Cycling Styles
              </Link>
            </div>
            <div className="cl-hero__meta">
              <span>MTB · E-MTB · GRAVEL · ROAD</span>
              <span>DAY RIDES & MULTI-DAY TRIPS</span>
              <span>PRIVATE OPTIONS</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE HOW YOU RIDE</p>
            <h2>One country, many ways to explore it by bike.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              Morocco's riding landscapes range from mountain valleys and rocky
              trails to rural roads, open southern terrain and the Atlantic
              coast. The best way to explore depends on the bike you prefer,
              the terrain you enjoy and the amount of time you have. Our cycling
              categories help you compare different styles before looking at
              individual routes and itineraries.
            </p>
            <p>
              Every trip should be planned with realistic distances, elevation,
              road or trail conditions, seasonal weather and support in mind.
              For multi-day holidays, transfers, accommodation, equipment and
              recovery time also affect the experience. Use the categories
              below to find an appropriate starting point, then enquire about
              the details of the tour that interests you.
            </p>
            <Link className="cl-text-link" href="/destinations">
              Explore cycling destinations <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="cycling-styles">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  EXPLORE YOUR OPTIONS
                </p>
                <h2>Find the cycling experience that fits your trip.</h2>
              </div>
              <p>
                Browse by cycling discipline or by the way you want to travel.
                Each category has its own routes, practical considerations and
                trip formats to explore.
              </p>
            </div>

            <div className="cl-tour-grid">
              {cyclingCategories.map((category) => (
                <article
                  className="home-tour-card"
                  key={category.href}
                >
                  <Link
                    className="home-tour-card__image"
                    href={category.href}
                    aria-label={category.title}
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      loading="lazy"
                    />
                    <span className="home-tour-card__category">
                      {category.label}
                    </span>
                    <span className="home-tour-card__level">
                      {category.number} · MOROCCO
                    </span>
                  </Link>

                  <div className="home-tour-card__body">
                    <p className="home-tour-card__eyebrow">
                      CYCLING HOLIDAYS · MOROCCO
                    </p>

                    <h3 className="home-tour-card__title">
                      <Link href={category.href}>
                        {category.title}
                      </Link>
                    </h3>

                    <p className="home-tour-card__description">
                      {category.description}
                    </p>

                    <div className="home-tour-card__meta">
                      <span className="home-tour-card__meta-item">
                        <span
                          className="home-tour-card__meta-icon"
                          aria-hidden="true"
                        >
                          ◆
                        </span>
                        {category.label}
                      </span>
                    </div>

                    <div className="home-tour-card__actions">
                      <Link
                        className="home-tour-card__button"
                        href={category.href}
                      >
                        {category.linkText}
                      </Link>
                      <Link
                        className="home-tour-card__link"
                        href={`/contact?request=cycling-tour-planning&category=${encodeURIComponent(category.title)}`}
                      >
                        Enquire <span aria-hidden="true">↗</span>
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
              <p className="cl-eyebrow">YOUR BIKE. YOUR PACE. YOUR MOROCCO.</p>
              <h2>Choose a route around the experience you want.</h2>
            </div>
            <div>
              <p>
                The right trip is about more than the region or the distance.
                Bike type, riding confidence, surface, climbing, daily effort
                and time for stops all make a difference. If you are unsure
                which category fits, tell us what you like riding and the kind
                of holiday you have in mind so the options can be discussed.
              </p>
              <Link
                className="cl-button cl-button--gold"
                href="/contact?request=cycling-tour-planning"
              >
                Help Me Choose a Tour
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">DISCOVER MOROCCO</p>
              <h2>Explore the places you can ride.</h2>
            </div>
            <p>
              The Atlas Mountains, Marrakech foothills, southern landscapes and
              Atlantic coast each offer a different setting. Explore the
              destinations to compare landscapes and consider what suits your
              preferred cycling style.
            </p>
          </div>

          <div className="cl-region-grid">
            <article className="home-tour-card">
              <Link
                className="home-tour-card__image"
                href="/destinations/atlas-mountains"
                aria-label="Atlas Mountains"
              >
                <img
                  src="/images/atlas-mountains-cycling-tour-morocco.jpg"
                  alt="Cycling in the Atlas Mountains"
                  loading="lazy"
                />
                <span className="home-tour-card__category">
                  CYCLING DESTINATION
                </span>
                <span className="home-tour-card__level">
                  Atlas Mountains
                </span>
              </Link>
              <div className="home-tour-card__body">
                <p className="home-tour-card__eyebrow">
                  CYCLING IN MOROCCO
                </p>
                <h3 className="home-tour-card__title">
                  <Link href="/destinations/atlas-mountains">
                    Atlas Mountains
                  </Link>
                </h3>
                <p className="home-tour-card__description">
                  Mountain scenery, climbs, rural tracks and routes linking
                  valleys and villages.
                </p>
                <div className="home-tour-card__actions">
                  <Link
                    className="home-tour-card__button"
                    href="/destinations/atlas-mountains"
                  >
                    Explore Region
                  </Link>
                  <Link
                    className="home-tour-card__link"
                    href="/destinations/atlas-mountains"
                  >
                    Discover <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </article>

            <article className="home-tour-card">
              <Link
                className="home-tour-card__image"
                href="/destinations/marrakech"
                aria-label="Marrakech and the foothills"
              >
                <img
                  src="/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"
                  alt="Cycling route beginning near Marrakech"
                  loading="lazy"
                />
                <span className="home-tour-card__category">
                  CYCLING DESTINATION
                </span>
                <span className="home-tour-card__level">
                  Marrakech & Foothills
                </span>
              </Link>
              <div className="home-tour-card__body">
                <p className="home-tour-card__eyebrow">
                  CYCLING IN MOROCCO
                </p>
                <h3 className="home-tour-card__title">
                  <Link href="/destinations/marrakech">
                    Marrakech & Foothills
                  </Link>
                </h3>
                <p className="home-tour-card__description">
                  A practical base for countryside rides, day trips and
                  journeys towards the mountains.
                </p>
                <div className="home-tour-card__actions">
                  <Link
                    className="home-tour-card__button"
                    href="/destinations/marrakech"
                  >
                    Explore Region
                  </Link>
                  <Link
                    className="home-tour-card__link"
                    href="/destinations/marrakech"
                  >
                    Discover <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </article>

            <article className="home-tour-card">
              <Link
                className="home-tour-card__image"
                href="/destinations/sahara-desert"
                aria-label="Southern Morocco"
              >
                <img
                  src="/images/atlas-to-desert-biking-tour.jpg"
                  alt="Open landscapes on a cycling route through southern Morocco"
                  loading="lazy"
                />
                <span className="home-tour-card__category">
                  CYCLING DESTINATION
                </span>
                <span className="home-tour-card__level">
                  Southern Morocco
                </span>
              </Link>
              <div className="home-tour-card__body">
                <p className="home-tour-card__eyebrow">
                  CYCLING IN MOROCCO
                </p>
                <h3 className="home-tour-card__title">
                  <Link href="/destinations/sahara-desert">
                    Southern Morocco
                  </Link>
                </h3>
                <p className="home-tour-card__description">
                  Open horizons and longer journeys that require careful
                  planning for heat, water and transfers.
                </p>
                <div className="home-tour-card__actions">
                  <Link
                    className="home-tour-card__button"
                    href="/destinations/sahara-desert"
                  >
                    Explore Region
                  </Link>
                  <Link
                    className="home-tour-card__link"
                    href="/destinations/sahara-desert"
                  >
                    Discover <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </article>

            <article className="home-tour-card">
              <Link
                className="home-tour-card__image"
                href="/destinations/atlantic-coast"
                aria-label="Atlantic Coast"
              >
                <img
                  src="/images/atlantic-coast-cycling-tour-morocco.jpg"
                  alt="Cycling landscapes along Morocco's Atlantic coast"
                  loading="lazy"
                />
                <span className="home-tour-card__category">
                  CYCLING DESTINATION
                </span>
                <span className="home-tour-card__level">
                  Atlantic Coast
                </span>
              </Link>
              <div className="home-tour-card__body">
                <p className="home-tour-card__eyebrow">
                  CYCLING IN MOROCCO
                </p>
                <h3 className="home-tour-card__title">
                  <Link href="/destinations/atlantic-coast">
                    Atlantic Coast
                  </Link>
                </h3>
                <p className="home-tour-card__description">
                  Coastal countryside and open routes where wind, surfaces and
                  season help shape the ride.
                </p>
                <div className="home-tour-card__actions">
                  <Link
                    className="home-tour-card__button"
                    href="/destinations/atlantic-coast"
                  >
                    Explore Region
                  </Link>
                  <Link
                    className="home-tour-card__link"
                    href="/destinations/atlantic-coast"
                  >
                    Discover <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="cl-editorial">
          <div className="cl-editorial__image">
            <img
              src="/images/group-cycling-tour-morocco.jpg"
              alt="Cyclists exploring Morocco together"
              loading="lazy"
            />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">PLAN WITH CONFIDENCE</p>
            <h2>A better cycling holiday starts with clear details.</h2>
            <p>
              Before choosing a trip, think about your preferred bike, usual
              riding distance, climbing experience and the type of landscape
              you want to discover. These basics help compare the different
              tour styles and identify which routes deserve a closer look.
            </p>
            <p>
              For a specific tour, confirm what the itinerary includes, how
              difficult the route is expected to be, where each stage begins
              and ends, and what support or equipment is available. The final
              plan should reflect the group, the season and the current route
              conditions.
            </p>
            <Link className="cl-button cl-button--dark" href="/about">
              Learn About Our Approach
            </Link>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
              <h2>Choosing a cycling tour in Morocco: FAQs</h2>
              <p>
                Review these general questions, then open the category that
                best fits your interests to compare individual routes and trip
                details.
              </p>
              <Link
                className="cl-text-link"
                href="/contact?request=cycling-tour-planning"
              >
                Ask us about choosing a tour{" "}
                <span aria-hidden="true">↗</span>
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
            src="/images/mountain-bike-morocco-hero.jpg"
            alt="Morocco cycling adventure in the Atlas Mountains"
            loading="lazy"
          />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR NEXT CYCLING ADVENTURE</p>
            <h2>Ready to discover Morocco by bike?</h2>
            <p>
              Tell us when you want to travel, who is riding and what kind of
              terrain you enjoy. Start a conversation about a cycling
              experience that fits your plans.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact?request=cycling-tour-planning"
              >
                Plan Your Cycling Holiday
              </Link>
              <Link
                className="cl-button cl-button--outline"
                href="/destinations"
              >
                Explore Destinations
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
              experiences across Morocco. Discover the landscapes, trails and
              local culture at your own pace.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/cycling-trips">All Cycling Tours</Link>
            <Link href="/cycling-trips/mtb">Mountain Bike Tours</Link>
            <Link href="/cycling-trips/e-mtb">E-MTB Tours</Link>
            <Link href="/cycling-trips/gravel">Gravel Cycling</Link>
            <Link href="/cycling-trips/road">Road Cycling</Link>
            <Link href="/cycling-trips/luxury">Luxury Cycling</Link>
          </div>
          <div>
            <h3>Destinations</h3>
            <Link href="/destinations/atlas-mountains">Atlas Mountains</Link>
            <Link href="/destinations/imlil">Imlil Valley</Link>
            <Link href="/destinations/toubkal">Mount Toubkal</Link>
            <Link href="/destinations/marrakech">Marrakech</Link>
            <Link href="/destinations">All Destinations</Link>
          </div>
          <div>
            <h3>Let's Plan</h3>
            <Link href="/about">About Us</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact?request=cycling-tour-planning">
              Plan Your Trip
            </Link>
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