import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Cycling Tours in Morocco",
  description:
    "Discover luxury cycling holidays in Morocco, combining guided rides through the Atlas Mountains, boutique stays, private itineraries, southern landscapes and carefully planned local experiences.",
};

type Tour = {
  number: string;
  label: string;
  title: string;
  duration: string;
  description: string;
  image: string;
  slug: string;
  destination: string;
};

const luxuryTours: Tour[] = [
  {
    number: "01",
    label: "BOUTIQUE STAYS & MOUNTAIN SCENERY",
    title: "High Atlas Luxury Cycling Escape",
    slug: "high-atlas-luxury-cycling-escape-5-day",
    duration: "5 days · Tailor-made option",
    description:
      "Explore the High Atlas through a carefully paced cycling journey that combines mountain scenery, rural roads and time to appreciate the places along the route. A luxury escape can balance rewarding rides with comfortable accommodation, regional food and thoughtful logistics. Your itinerary should be planned around the season, daily distance, climbing preferences and the level of support you would like, with accommodation and inclusions confirmed before travel.",
    image: "/images/luxury-cycling-morocco.jpg",
    destination: "HIGH ATLAS MOUNTAINS",
  },
  {
    number: "02",
    label: "A PRIVATE COUNTRY ESCAPE",
    title: "Ouirgane Boutique Cycling Weekend",
    slug: "ouirgane-boutique-cycling-weekend-2-day",
    duration: "2 days",
    description:
      "Enjoy a shorter escape into the quieter landscapes around Ouirgane, where cultivated valleys, mountain views and traditional settlements provide a relaxed setting for cycling. This itinerary can suit a couple or a small private group looking to combine riding with time in the countryside. The route, accommodation, transfer arrangements and riding pace should be agreed in advance so the weekend feels comfortable rather than rushed.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    destination: "OUIRGANE & WESTERN ATLAS",
  },
  {
    number: "03",
    label: "PERSONALISED TRAINING & ENDURANCE",
    title: "Private Luxury Endurance Cycling Camp",
    slug: "private-luxury-endurance-cycling-camp-7-day",
    duration: "7 days",
    description:
      "Plan a week of focused riding in Morocco with stages shaped around your fitness, climbing goals and preferred training rhythm. An endurance camp may combine longer road rides, mountain routes and recovery time, while private logistics allow the daily programme to be discussed around the group. Route distances, elevation, accommodation, support and rest periods should all be considered before the final itinerary is confirmed.",
    image: "/images/luxury-biking-ebike-tours-morocco.jpg",
    destination: "ATLAS MOUNTAINS",
  },
  {
    number: "04",
    label: "PRIVATE GROUPS & SHARED EXPERIENCES",
    title: "Luxury Family Cycling Holiday",
    slug: "luxury-family-cycling-holiday-6-day",
    duration: "6 days",
    description:
      "Discover Morocco together on a private cycling holiday designed around the ages, confidence and interests of the people travelling. A family itinerary can combine suitable rides with cultural visits, scenic stops and time to relax between activities. Routes must be selected carefully for the least experienced riders, while accommodation, transfers, equipment and daily schedules should be reviewed to ensure the trip works for the whole family.",
    image: "/images/group-cycling-tour-morocco.jpg",
    destination: "ATLAS & MARRAKECH",
  },
  {
    number: "05",
    label: "A WEEK OF CURATED RIDING",
    title: "Morocco Luxury Cycling Week",
    slug: "morocco-luxury-cycling-week-7-day",
    duration: "7 days",
    description:
      "Spend a week discovering Morocco by bike with an itinerary that can connect mountain scenery, quiet countryside roads and selected cultural stops. The focus is on balancing rewarding rides with time to enjoy each destination rather than moving too quickly between regions. Daily mileage, climbing, travel time, accommodation preferences and support arrangements should be discussed together to create a practical journey for your dates and group.",
    image: "/images/morocco-luxury-bike-tour.jpg",
    destination: "MOROCCO · MULTI-REGION",
  },
  {
    number: "06",
    label: "SOUTHERN LANDSCAPES & WIDE HORIZONS",
    title: "Sahara Edge Luxury Cycling Expedition",
    slug: "sahara-edge-luxury-cycling-expedition-7-day",
    duration: "7 days",
    description:
      "Travel towards the south of Morocco on a cycling journey through changing landscapes, dry valleys and communities shaped by the desert environment. A longer expedition needs careful attention to temperatures, water, distances between services and transfer times. A considered schedule makes room for riding, local experiences and recovery, while accommodation and support are planned around the selected route and the group's needs.",
    image: "/images/sahara-morocco-cycling-holiday.jpg",
    destination: "SOUTHERN MOROCCO · SAHARA EDGE",
  },
  {
    number: "07",
    label: "PALM GROVES, KASBAHS & SOUTHERN ROADS",
    title: "Skoura Palm Groves and Kasbahs Ride",
    slug: "skoura-palm-groves-and-kasbahs-ride-3-day",
    duration: "3 days",
    description:
      "Explore the landscapes around Skoura through a short cycling journey featuring palm groves, oasis scenery and historic kasbah country. This experience can blend relaxed riding with time to appreciate local architecture and rural life. The final stages should be planned around the distance you want to ride, road or track conditions, the season and the standard of accommodation preferred for the trip.",
    image: "/images/cycling-holiday-morocco.jpg",
    destination: "SKOURA OASIS & KASBAH COUNTRY",
  },
  {
    number: "08",
    label: "GRANITE LANDSCAPES & BOUTIQUE COMFORT",
    title: "Tafraoute and Anti-Atlas Boutique Cycling",
    slug: "tafraoute-and-anti-atlas-boutique-cycling-5-day",
    duration: "5 days",
    description:
      "Discover the distinctive rock formations, mountain roads and quiet communities of the Anti-Atlas on a boutique cycling escape. The region offers a different atmosphere from the High Atlas, with route options shaped by the terrain and the distance between overnight stops. Planning should account for elevation, weather, road surfaces and support needs while leaving enough time to enjoy the landscape and local culture.",
    image: "/images/south-morocco-cycling-expedition.jpg",
    destination: "TAFRAOUTE & ANTI-ATLAS",
  },
  {
    number: "09",
    label: "ICONIC CLIMBS & SCENIC STAGES",
    title: "Tizi n'Test Luxury Cycling Journey",
    slug: "tizi-n-test-luxury-cycling-journey-4-day",
    duration: "4 days",
    description:
      "Build a short road cycling journey around the mountain scenery and climbing routes of the Tizi n'Test region. The experience should be matched to your climbing ability, riding pace and comfort on descents, with the weather and road conditions checked for the travel dates. Discuss accommodation, transfers and any support requirements in advance so the riding stages and overnight stops fit together realistically.",
    image: "/images/road-cycling-holiday-tour-morocco.jpg",
    destination: "TIZI N'TEST · HIGH ATLAS",
  },
  {
    number: "10",
    label: "GORGES, VALLEYS & COMFORTABLE STAGES",
    title: "Todra and Dades Luxury Road Journey",
    slug: "todra-and-dades-luxury-road-journey-6-day",
    duration: "6 days",
    description:
      "Experience the dramatic scenery of the Todra and Dades regions on a road cycling holiday that balances riding with time to explore southern Morocco. Stages can be planned around your preferred daily distance, while transfers and overnight stops help connect the landscapes without making every day too demanding. Temperature, water, road conditions and the available services should be factored into the final schedule.",
    image: "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    destination: "TODRA & DADES GORGES",
  },
  {
    number: "11",
    label: "A JOURNEY DESIGNED AROUND YOU",
    title: "Private Luxury Cycling Holiday in Morocco",
    slug: "private-luxury-cycling-holiday-morocco-7-day",
    duration: "7 days · tailor-made option",
    description:
      "Create a private cycling holiday around your dates, riding style, destinations and preferred level of comfort. Your journey may focus on one region or connect several parts of Morocco if the available time allows. Share your group size, fitness, preferred bike type, accommodation expectations and support requirements so the route and practical inclusions can be discussed before you decide how to proceed.",
    image: "/images/luxury-cycling-holiday-trip-morocco.jpg",
    destination: "PRIVATE · CUSTOM ROUTE",
  },
];

const destinations = [
  {
    title: "High Atlas Mountains",
    text:
      "Mountain scenery, traditional villages and varied roads and tracks make the High Atlas a compelling setting for a luxury cycling escape. The best route depends on elevation, riding ability, the season and how much time you want to spend in each place.",
    image: "/images/luxury-cycling-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Marrakech and the Foothills",
    text:
      "Use Marrakech as a starting point for countryside rides and journeys towards the Atlas. A private itinerary can combine cycling with time in the city, but transfer times, start points, traffic and preferred daily mileage should be considered in advance.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/destinations/marrakech",
  },
  {
    title: "Ouirgane and the Western Atlas",
    text:
      "Valleys, cultivated land and mountain views create a quieter setting for a short cycling retreat. Consider this area for a weekend or as part of a broader itinerary, with routes selected to match your preferred pace and the available time.",
    image: "/images/group-cycling-tour-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Southern Morocco",
    text:
      "The south offers open landscapes, oasis areas and striking rock scenery. Longer cycling itineraries should plan around temperature, water, distances between services, road conditions and comfortable overnight stops.",
    image: "/images/sahara-morocco-cycling-holiday.jpg",
    href: "/destinations/sahara-desert",
  },
];

const faqs = [
  {
    question: "What makes a luxury cycling holiday different?",
    answer:
      "A luxury cycling holiday places emphasis on the overall experience as well as the ride. Depending on the itinerary, this may include private planning, carefully selected accommodation, comfortable transfers, regional food and more time to explore destinations. The exact inclusions and service level should be agreed before booking rather than assumed to be part of every trip.",
  },
  {
    question: "Do luxury cycling tours suit experienced riders?",
    answer:
      "They can. Some journeys focus on demanding mountain climbs or longer endurance stages, while others prioritise scenic riding and a relaxed pace. Share your normal daily distance, fitness, climbing experience and route preferences so the itinerary can be considered around your goals.",
  },
  {
    question: "Can a luxury itinerary be customised?",
    answer:
      "You can enquire about a private itinerary based on your dates, group size, preferred terrain, accommodation and daily riding distance. The route may focus on one region or connect several destinations, depending on the time available and the logistics involved. Confirm the proposed services and inclusions before making final arrangements.",
  },
  {
    question: "Can a cycling holiday include both the Atlas and the south?",
    answer:
      "A multi-region journey may connect mountain scenery with southern landscapes, provided the schedule allows enough time for riding and transfers. Travel distances, seasonal conditions and your preferred daily effort should be considered when deciding how many regions to include.",
  },
  {
    question: "Are family luxury cycling holidays available?",
    answer:
      "You can enquire about a family-focused itinerary. The route and activities should reflect the age, confidence and experience of each participant, particularly the least experienced rider. Discuss suitable distances, rest time, transfers, equipment and accommodation so the plan works for everyone travelling.",
  },
  {
    question: "What is included in the price?",
    answer:
      "Inclusions vary by itinerary and need to be confirmed directly for the specific trip. When enquiring, ask for a clear breakdown covering guiding, accommodation, meals, transfers, bike arrangements, support services and any additional costs so you can compare options accurately.",
  },
  {
    question: "When is the best time for a luxury cycling trip in Morocco?",
    answer:
      "Spring and autumn are often comfortable periods for many routes, but conditions differ by region and elevation. Mountain areas can be cold or affected by changing weather, while lower and southern areas can be very hot in summer. The best dates depend on your route, preferred riding style and the conditions expected for the itinerary.",
  },
];

function tourDetailHref(slug: string) {
  return `/cycling-trips/trip/${slug}`;
}

function contactHref(tourTitle: string, request: "details" | "booking") {
  return `/contact?tour=${encodeURIComponent(tourTitle)}&request=${request}`;
}

export default function LuxuryCyclingToursPage() {
  return (
    <>
      <main className="cycling-listing luxury-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/luxury-cycling-morocco.jpg"
            alt="A premium cycling journey through Morocco's landscapes"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">LUXURY CYCLING · PRIVATE JOURNEYS · MOROCCO</p>
            <h1>Luxury Cycling Tours in Morocco</h1>
            <p className="cl-hero__intro">
              Discover Morocco by bike with a journey that balances rewarding
              riding, carefully planned logistics and time to enjoy the places
              along the way. Explore the Atlas Mountains, rural valleys and
              southern landscapes on a cycling holiday shaped around your
              pace, preferences and preferred level of comfort.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="/contact">
                Plan Your Luxury Cycling Trip
              </Link>
              <Link className="cl-button cl-button--outline" href="#luxury-options">
                Explore Luxury Tours
              </Link>
            </div>
            <div className="cl-hero__meta">
              <span>PRIVATE ITINERARIES</span>
              <span>CURATED CYCLING EXPERIENCES</span>
              <span>COMFORT & LOCAL DISCOVERY</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">RIDE WELL. DISCOVER DEEPLY.</p>
            <h2>Thoughtful cycling holidays with room for comfort and discovery.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              A luxury cycling holiday in Morocco can combine the pleasure of
              riding with time to appreciate the country's varied landscapes,
              regional food and local culture. From mountain roads in the High
              Atlas to rural valleys and the wide horizons of the south, each
              region offers a different perspective and a different rhythm.
            </p>
            <p>
              Comfort does not mean every day needs to be easy or that every
              itinerary should look the same. Some riders want sustained climbs
              and long stages; others prefer shorter rides with more time for
              village visits, scenery and relaxation. Accommodation preferences,
              transfer arrangements, riding support and realistic daily
              distances should all be considered together when planning the trip.
            </p>
            <p>
              Whether you are planning a weekend escape, a private family holiday
              or a multi-day journey, start with your dates, riding style and
              priorities. Clear conversations about what is included help ensure
              the final experience reflects your expectations.
            </p>
            <Link className="cl-text-link" href="/cycling-trips">
              Explore all cycling tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="luxury-options">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR LUXURY CYCLING EXPERIENCE</p>
                <h2>Private cycling holidays, boutique escapes and curated journeys</h2>
              </div>
              <p>
                Choose a trip that fits your schedule and riding ambitions,
                from a short countryside escape to a full week on the road.
                Every itinerary should be discussed around your preferred pace,
                accommodation, route, support arrangements and the time you have
                available.
              </p>
            </div>
            <div className="cl-tour-grid">
              {luxuryTours.map((tour) => (
                <article className="home-tour-card" key={tour.number}>
                  <Link
                    className="home-tour-card__image"
                    href={tourDetailHref(tour.slug)}
                    aria-label={`More details about ${tour.title}`}
                  >
                    <img
                      src={tour.image}
                      alt={tour.title}
                      loading="lazy"
                    />
                    <span className="home-tour-card__category">{tour.label}</span>
                    <span className="home-tour-card__level">{tour.destination}</span>
                  </Link>
                  <div className="home-tour-card__body">
                    <p className="home-tour-card__eyebrow">
                      {`LUXURY CYCLING · ${tour.destination}`}
                    </p>
                    <h3 className="home-tour-card__title">
                      <Link href={tourDetailHref(tour.slug)}>{tour.title}</Link>
                    </h3>
                    <p className="home-tour-card__description">{tour.description}</p>
                    <div className="home-tour-card__meta">
                      <span className="home-tour-card__meta-item">
                        <span className="home-tour-card__meta-icon" aria-hidden="true">◆</span>
                        {tour.duration}
                      </span>
                    </div>
                    <div className="home-tour-card__actions">
                      <Link
                        className="home-tour-card__button"
                        href={tourDetailHref(tour.slug)}
                      >
                        More Details
                      </Link>
                      <Link
                        className="home-tour-card__link"
                        href={contactHref(tour.title, "booking")}
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
              <p className="cl-eyebrow">YOUR RIDE. YOUR PACE. YOUR EXPERIENCE.</p>
              <h2>Make time for both the journey and the places you discover.</h2>
            </div>
            <div>
              <p>
                A rewarding cycling holiday depends on more than the route
                itself. Daily stages, accommodation, transfers, rest time and
                local experiences all influence the way a trip feels. Share the
                balance you want between challenging rides and comfortable
                downtime so that the details can be discussed before the itinerary
                is confirmed.
              </p>
              <Link className="cl-button cl-button--gold" href="/contact">
                Discuss Your Ideal Holiday
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">WHERE TO RIDE</p>
              <h2>Explore destinations for a luxury cycling holiday</h2>
            </div>
            <p>
              From high mountain views to oasis landscapes and quiet countryside,
              every region brings a different character to the trip. Consider
              the riding you prefer, the season and the available time when
              choosing where your journey should go.
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
                  <img src={destination.image} alt={destination.title} loading="lazy" />
                  <span className="home-tour-card__category">LUXURY CYCLING DESTINATION</span>
                  <span className="home-tour-card__level">{destination.title}</span>
                </Link>
                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">
                    {`LUXURY CYCLING · ${destination.title}`}
                  </p>
                  <h3 className="home-tour-card__title">
                    <Link href={destination.href}>{destination.title}</Link>
                  </h3>
                  <p className="home-tour-card__description">{destination.text}</p>
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
              src="/images/luxury-cycling-holiday-trip-morocco.jpg"
              alt="Cycling holiday through the landscapes of Morocco"
              loading="lazy"
            />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">BEYOND THE BIKE</p>
            <h2>Enjoy Morocco at a pace that leaves room for discovery.</h2>
            <p>
              The most memorable journeys often leave space between the planned
              activities. A pause to appreciate a valley, a meal featuring local
              ingredients or a walk through a village can become as meaningful
              as the ride itself. A thoughtful cycling itinerary balances
              movement with opportunities to experience the character of each
              place.
            </p>
            <p>
              That balance starts with practical planning. Route choices should
              consider the group's fitness, travel time, weather, daily mileage
              and preferred level of comfort. Accommodation, transfers and any
              support services should be discussed clearly so that the experience
              matches what you expect from a private or boutique cycling holiday.
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
                <p className="cl-eyebrow">WHY PLAN WITH US</p>
                <h2>Personalised planning for a more rewarding Moroccan cycling holiday.</h2>
              </div>
              <p>
                Your ideal trip depends on your riding goals and the experience
                you want beyond the bike. Clear planning helps bring together
                route choice, accommodation preferences, logistics and local
                discovery in a way that suits your group.
              </p>
            </div>
            <div className="cl-why-grid">
              <article>
                <span>01</span>
                <h3>Built around your priorities</h3>
                <p>
                  Discuss the riding style, pace, destinations and comfort level
                  that matter most to you.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Thoughtful daily stages</h3>
                <p>
                  Consider distance, elevation, travel time and recovery so the
                  itinerary feels balanced rather than rushed.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Clear arrangements</h3>
                <p>
                  Review proposed accommodation, transfers, guiding, meals and
                  any support services before confirming the trip.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Local experiences</h3>
                <p>
                  Make space for Moroccan food, village visits, mountain scenery
                  and the details that give a journey its character.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">PLAN YOUR LUXURY CYCLING HOLIDAY</p>
              <h2>Three steps to start shaping your private journey.</h2>
            </div>
            <p>
              You do not need to finalise every detail before making an enquiry.
              Start with the dates, destinations and riding experience you have
              in mind, then discuss the practical details and inclusions.
            </p>
          </div>
          <div className="cl-steps">
            <article>
              <span>STEP 01</span>
              <h3>Share your priorities</h3>
              <p>
                Tell us your dates, group size, riding experience, preferred
                destinations and accommodation expectations.
              </p>
            </article>
            <article>
              <span>STEP 02</span>
              <h3>Discuss your itinerary</h3>
              <p>
                Compare route options, daily distance, elevation, transfer time
                and the balance of riding with local experiences.
              </p>
            </article>
            <article>
              <span>STEP 03</span>
              <h3>Review inclusions</h3>
              <p>
                Confirm proposed accommodation, guiding, meals, transfers,
                equipment arrangements and costs before booking.
              </p>
            </article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
              <h2>Luxury cycling in Morocco: FAQs</h2>
              <p>
                Find answers to common questions about private itineraries,
                accommodation, route planning and trip inclusions. For a
                tailored recommendation, contact us with your dates and the type
                of experience you would like to create.
              </p>
              <Link className="cl-text-link" href="/contact">
                Ask us about your trip <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="cl-faq-list">
              {faqs.map((faq, index) => (
                <details className="cl-faq-item" key={faq.question} open={index === 0}>
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
            src="/images/morocco-luxury-bike-tour.jpg"
            alt="A cycling holiday through Morocco's mountain and countryside landscapes"
            loading="lazy"
          />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR NEXT CYCLING JOURNEY</p>
            <h2>Ready to discover Morocco in your own way?</h2>
            <p>
              Tell us when you want to travel, how you like to ride and what
              comfort and local experiences matter most to you. We can start a
              conversation about a private cycling holiday built around your
              plans.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="/contact">
                Plan Your Luxury Holiday
              </Link>
              <Link className="cl-button cl-button--outline" href="/cycling-trips">
                View All Cycling Tours
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
              <span>MOUNTAIN BIKE <em>MOROCCO</em></span>
            </Link>
            <p>
              Guided mountain biking, E-MTB, gravel and road cycling experiences
              across Morocco. Discover the landscapes, trails and local culture
              at your own pace.
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