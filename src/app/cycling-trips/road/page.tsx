import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Road Cycling Tours in Morocco | Atlas Mountain Passes & Cycling Holidays",
  description:
    "Discover guided road cycling tours in Morocco, from challenging High Atlas mountain passes to Marrakech, southern landscapes and Atlantic coastal roads. Explore private road cycling holidays and multi-day adventures.",
  alternates: {
    canonical: "/cycling-trips/road",
  },
  openGraph: {
    title: "Road Cycling Tours in Morocco | Mountain Bike Morocco",
    description:
      "Explore Morocco by road bike on guided cycling adventures through the High Atlas, mountain passes, rural valleys and Atlantic coast. Discover private tours and multi-day cycling holidays.",
    url: "https://mountain-bike-morocco.com/cycling-trips/road",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/road-cycling-tour-morocco.jpg",
        alt: "Road cycling through the High Atlas Mountains in Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Road Cycling Tours in Morocco | Mountain Bike Morocco",
    description:
      "Guided road cycling holidays across Morocco, featuring Atlas Mountain climbs, scenic roads and multi-day cycling adventures.",
    images: ["/images/road-cycling-tour-morocco.jpg"],
  },
};

type Tour = {
  number: string;
  label: string;
  title: string;
  duration: string;
  description: string;
  image: string;
  slug: string;
};

const roadTours: Tour[] = [
  {
    number: "01",
    label: "MOUNTAIN PASSES & PANORAMIC CLIMBS",
    title: "High Atlas Road Cycling Tour",
    slug: "high-atlas-road-cycling-tour-6-day",
    duration: "6 days",
    description:
      "Discover the High Atlas on a road cycling journey shaped around long climbs, mountain scenery and quiet stretches of road. The route can link valleys and high viewpoints while leaving time to recover and enjoy the places along the way. Daily distance, elevation gain and transfer requirements should be considered alongside your experience, the season and the group's preferred pace before an itinerary is confirmed.",
    image: "/images/road-cycling-tour-morocco.jpg",
  },
  {
    number: "02",
    label: "CLASSIC CLIMBING & OPEN VIEWS",
    title: "Tizi n'Test Mountain Pass Ride",
    slug: "tizi-n-test-mountain-pass-ride-1-day",
    duration: "1 day",
    description:
      "For road cyclists who enjoy sustained climbing and changing mountain scenery, the Tizi n'Test area can be a memorable focus for a ride. Road gradients, descent conditions, weather and traffic need to be considered carefully when planning this kind of route. Choose a realistic distance for the group and allow enough time for breaks, mechanical checks and safe progress across the pass.",
    image: "/images/road-cycling-holiday-tour-morocco.jpg",
  },
  {
    number: "03",
    label: "A ROAD RIDE FROM THE RED CITY",
    title: "Road Cycling from Marrakech",
    slug: "road-cycling-from-marrakech-1-day",
    duration: "1 day",
    description:
      "Use Marrakech as a starting point for a road cycling outing into the surrounding countryside and foothills. Depending on the route, a ride can combine rolling roads, rural scenery and views towards the Atlas Mountains. Start times, transfer arrangements, traffic and climbing vary between options, so discuss your preferred distance, fitness and available time before selecting a ride.",
    image: "/images/road-cycling-morocco.jpg",
  },
  {
    number: "04",
    label: "CLIMBS, DESCENTS & MOUNTAIN SCENERY",
    title: "Atlas Mountain Passes Cycling Holiday",
    slug: "atlas-mountain-passes-cycling-holiday-7-day",
    duration: "7 days",
    description:
      "Build a road cycling holiday around the Atlas passes and the valleys that connect them. This style of trip can suit experienced riders who want challenging days, varied elevation and rewarding landscapes, with stages designed around realistic riding time. A practical plan must account for road surfaces, weather at altitude, support vehicles where arranged, accommodation and recovery between demanding rides.",
    image: "/images/road-bike-tour-morocco.jpg",
  },
  {
    number: "05",
    label: "VALLEYS & TRADITIONAL VILLAGES",
    title: "Imlil and Toubkal Road Cycling Escape",
    slug: "imlil-and-toubkal-road-cycling-escape-3-day",
    duration: "3 days",
    description:
      "Explore roads and valley approaches around the Imlil and Toubkal region, where mountain views and traditional settlements create a distinctive backdrop for cycling. The route should be planned around the group's climbing ability, road conditions, elevation and available daylight. This can form a shorter escape or one part of a longer Atlas itinerary, depending on your dates and preferred daily mileage.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
  },
  {
    number: "06",
    label: "MOUNTAINS TO SOUTHERN LANDSCAPES",
    title: "Atlas to Sahara Road Cycling Expedition",
    slug: "atlas-to-sahara-road-cycling-expedition-8-day",
    duration: "8 days",
    description:
      "Connect the mountain landscapes of the Atlas with the drier regions of southern Morocco on a road cycling journey planned around changing scenery and manageable stages. Longer-distance trips require attention to transfer time, elevation, temperature, food, water and accommodation between towns. The final route should reflect the season, riding level and time available, with suitable flexibility for weather or road conditions.",
    image: "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
  },
  {
    number: "07",
    label: "COASTAL ROADS & OCEAN AIR",
    title: "Atlantic Coast Road Cycling Tour",
    slug: "atlantic-coast-road-cycling-tour-4-day",
    duration: "4 days",
    description:
      "Experience a different side of Morocco on coastal roads around the Atlantic, where ocean views, fishing communities and quieter stretches can offer a contrast to mountain climbing. Wind, road surface, traffic and the length of exposed sections all influence the riding experience. A well-paced itinerary makes room for breaks and local stops rather than focusing only on distance, and should be adapted to the group's experience and travel dates.",
    image: "/images/essaouira-cycling-holiday.jpg",
  },
  {
    number: "08",
    label: "SOUTHERN ROADS & WIDE HORIZONS",
    title: "South Morocco Road Cycling Journey",
    slug: "south-morocco-road-cycling-journey-6-day",
    duration: "6 days",
    description:
      "Ride through the wide landscapes of southern Morocco on a road cycling journey that can combine open stretches, dry valleys and traditional settlements. Temperature, water access, distances between services and the amount of climbing need to be considered carefully, particularly on longer stages. Discuss your expected daily mileage and support requirements so the itinerary can be shaped around realistic riding days.",
    image: "/images/south-morocco-cycling-expedition.jpg",
  },
  {
    number: "09",
    label: "YOUR GROUP, YOUR DISTANCE",
    title: "Private Morocco Road Cycling Holiday",
    slug: "private-morocco-road-cycling-holiday-7-day",
    duration: "7 days",
    description:
      "Plan a private road cycling holiday around your preferred dates, group size, climbing goals and daily distances. Your journey might focus on a single region or connect several landscapes if the travel time allows. Share your riding experience, bike setup, accommodation preferences and support expectations so the route, stages and practical arrangements can be discussed before final decisions are made.",
    image: "/images/road-cycling-holiday-morocco.jpg",
  },
];

const destinations = [
  {
    title: "High Atlas Mountains",
    text:
      "The High Atlas offers mountain roads, long climbs and changing elevations. Route selection should consider gradient, road conditions, weather and the group's experience, with appropriate time for recovery between demanding stages.",
    image: "/images/road-cycling-tour-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Marrakech and the Foothills",
    text:
      "Marrakech can be a convenient starting point for shorter rides and longer road journeys towards the Atlas. Confirm the start point, transfer arrangements, traffic conditions and preferred daily mileage when planning your ride.",
    image: "/images/road-cycling-morocco.jpg",
    href: "/destinations/marrakech",
  },
  {
    title: "Imlil and Toubkal Region",
    text:
      "Mountain approaches around Imlil offer striking scenery and routes shaped by the terrain. Consider elevation, gradients, road surface and changing mountain weather when choosing a ride in this region.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/destinations/imlil-toubkal",
  },
  {
    title: "Atlantic Coast",
    text:
      "Coastal roads offer a different rhythm, with ocean air, open views and communities along the route. Wind, traffic, road conditions and exposed sections should be factored into daily stage planning.",
    image: "/images/essaouira-cycling-holiday.jpg",
    href: "/destinations/atlantic-coast",
  },
];

const faqs = [
  {
    question: "What is road cycling like in Morocco?",
    answer:
      "Road cycling in Morocco can include mountain passes, rolling countryside, open southern roads and coastal routes. The experience varies significantly by region, elevation, road surface and traffic. Share your preferred riding style and daily distance so the route can be discussed around your experience and the conditions expected during your trip.",
  },
  {
    question: "How fit do I need to be for a road cycling holiday?",
    answer:
      "Fitness requirements depend on the distance, climbing, altitude and number of consecutive riding days. A scenic day ride requires a different level of preparation from a journey with long mountain climbs. Be clear about your usual distance, climbing experience and preferred pace when planning an itinerary.",
  },
  {
    question: "When is the best time for road cycling in Morocco?",
    answer:
      "Spring and autumn are often comfortable periods for many routes, but conditions vary by region and elevation. Mountain passes can be cold or affected by changing weather, while lower and southern areas can become very hot in summer. Check conditions for the chosen route and dates before finalising travel plans.",
  },
  {
    question: "Can the route include the Atlas Mountains and the south?",
    answer:
      "A multi-region road cycling holiday can potentially link mountain and southern landscapes, provided there is enough time for transfers and riding days. The itinerary should avoid making daily distances or driving stages too demanding. Share your available dates and priorities to discuss a realistic plan.",
  },
  {
    question: "Can I bring my own road bike?",
    answer:
      "You can discuss travelling with your own road bike when enquiring. Airline policies, packing, transfers, assembly and any spare equipment should be considered in advance. Tell us your bike type and any special requirements so the practical arrangements can be reviewed against the planned route.",
  },
  {
    question: "Are private road cycling tours available?",
    answer:
      "You can enquire about a private ride for a couple, friends, a cycling club or a group travelling together. Useful details include dates, group size, experience, target distances, climbing preferences, bike setup and accommodation expectations. These details help shape an itinerary around your priorities.",
  },
  {
    question: "What should I bring for road cycling in Morocco?",
    answer:
      "Bring a well-maintained bike, helmet, gloves, suitable clothing, eye protection, sun protection, enough water capacity and basic repair equipment. Depending on the season and elevation, extra layers and a lightweight waterproof jacket may be useful. A route-specific packing list should reflect the expected conditions and support arrangements.",
  },
];

function tourDetailHref(slug: string) {
  return `/cycling-trips/trip/${slug}`;
}

function contactHref(tourTitle: string, request: "details" | "booking") {
  return `/contact?tour=${encodeURIComponent(tourTitle)}&request=${request}`;
}

export default function RoadCyclingToursPage() {
  return (
    <>
      <main className="cycling-listing road-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/road-cycling-tour-morocco.jpg"
            alt="Road cycling through mountain landscapes in Morocco"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">ROAD CYCLING · MOUNTAIN PASSES · MOROCCO</p>
            <h1>Road Cycling Tours in Morocco</h1>
            <p className="cl-hero__intro">
              Discover Morocco by road bike, from the climbs and mountain passes
              of the Atlas to rural valleys, southern landscapes and Atlantic
              coastal roads. Explore a cycling holiday planned around your
              experience, preferred distance, elevation goals and the kind of
              journey you want to make.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="/contact">
                Plan Your Road Cycling Trip
              </Link>
              <Link className="cl-button cl-button--outline" href="#road-options">
                Explore Road Tours
              </Link>
            </div>
            <div className="cl-hero__meta">
              <span>SCENIC ROADS & CLIMBS</span>
              <span>PRIVATE OPTIONS</span>
              <span>ROUTES TO SUIT YOUR LEVEL</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">RIDE THE OPEN ROAD</p>
            <h2>Mountain passes, quiet valleys and unforgettable Moroccan landscapes.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              Morocco offers road cyclists a varied setting for day rides and
              multi-day journeys. The Atlas Mountains bring challenging climbs
              and changing elevations, while the countryside around Marrakech
              provides access to rural roads and foothill scenery. Further south,
              wide horizons and drier landscapes create a different rhythm, and
              the Atlantic coast can offer a contrasting experience by the sea.
            </p>
            <p>
              The best trip is not simply the one with the most kilometres or
              the greatest amount of climbing. Road surface, weather, elevation,
              traffic, recovery time and distances between overnight stops all
              affect how a route feels. Sharing your riding background and
              preferred daily distance early helps make it possible to discuss
              realistic stages and useful support arrangements.
            </p>
            <p>
              Whether you want a focused climbing trip, a relaxed scenic escape
              or a longer journey connecting several regions, the route should
              leave room to enjoy the landscape as well as complete the ride.
            </p>
            <Link className="cl-text-link" href="/cycling-trips">
              Explore all cycling tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="road-options">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR ROAD CYCLING EXPERIENCE</p>
                <h2>Road cycling holidays, mountain climbs and scenic routes</h2>
              </div>
              <p>
                Choose the kind of ride that suits your goals, from a day on the
                roads near Marrakech to a multi-day journey through mountain
                passes or southern landscapes. Each option should be adapted to
                your fitness, available time and preferred daily mileage.
              </p>
            </div>
            <div className="cl-tour-grid">
              {roadTours.map((tour) => (
                <article className="cl-tour-card" key={tour.number}>
                  <Link
                    className="cl-tour-card__image-link"
                    href={tourDetailHref(tour.slug)}
                    aria-label={`More details about ${tour.title}`}
                  >
                    <img
                      className="cl-tour-card__image"
                      src={tour.image}
                      alt={tour.title}
                      loading="lazy"
                    />
                    <span className="cl-tour-card__number">{tour.number}</span>
                  </Link>
                  <div className="cl-tour-card__body">
                    <p className="cl-card-label">{tour.label}</p>
                    <h3>
                      <Link href={tourDetailHref(tour.slug)}>{tour.title}</Link>
                    </h3>
                    <p>{tour.description}</p>
                    <p className="cl-card-duration">{tour.duration}</p>
                    <div className="cl-tour-card__actions">
                      <Link
                        className="cl-button cl-button--dark"
                        href={tourDetailHref(tour.slug)}
                      >
                        More Details
                      </Link>
                      <Link
                        className="cl-button cl-button--gold"
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
              <p className="cl-eyebrow">YOUR DISTANCE. YOUR CLIMBS. YOUR PACE.</p>
              <h2>Plan a road cycling journey that challenges you in the right way.</h2>
            </div>
            <div>
              <p>
                Route distance alone does not tell the whole story. Elevation,
                road surface, wind, temperature and the number of consecutive
                riding days all influence the demands of a cycling holiday.
                Discuss your usual pace and experience so that the proposed
                stages can be considered realistically, with time for recovery
                and stops along the way.
              </p>
              <Link className="cl-button cl-button--gold" href="/contact">
                Discuss Your Riding Goals
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">WHERE TO RIDE</p>
              <h2>Explore road cycling destinations across Morocco</h2>
            </div>
            <p>
              Each region offers a different character, from high mountain
              climbs to countryside roads and coastal stretches. Consider your
              preferred terrain, available time and the season when choosing
              where to ride.
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
                  <img src={destination.image} alt={destination.title} loading="lazy" />
                  <span>0{index + 1}</span>
                </Link>
                <div className="cl-region-card__body">
                  <h3>
                    <Link href={destination.href}>{destination.title}</Link>
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
              src="/images/road-cycling-holiday-morocco.jpg"
              alt="Road cycling holiday in the Moroccan mountains"
              loading="lazy"
            />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">MORE THAN THE MILEAGE</p>
            <h2>Ride for the climbs. Stay for the places along the way.</h2>
            <p>
              A memorable road cycling trip is about more than the numbers on a
              route profile. The view from a mountain pass, a break in a village
              and the changing character of the landscape all contribute to the
              experience. Morocco's regions offer a variety of settings for
              cyclists who want to combine focused riding with time to discover
              the places they travel through.
            </p>
            <p>
              Thoughtful planning creates room for both. Consider your daily
              distance alongside elevation, weather, transfer time, recovery
              and accommodation. On longer routes, a sensible stage plan and
              clear support arrangements help the group enjoy the ride without
              rushing through every stop.
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
                <h2>Local insight and practical planning for your road cycling holiday.</h2>
              </div>
              <p>
                Every cyclist has different goals. Clear conversations about
                fitness, climbing experience, daily distance and travel dates
                help shape an itinerary that is more likely to feel rewarding
                and manageable for the group.
              </p>
            </div>
            <div className="cl-why-grid">
              <article>
                <span>01</span>
                <h3>Routes matched to your goals</h3>
                <p>
                  Discuss climbing ambitions, preferred daily mileage and your
                  experience on long road rides before choosing a route.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Realistic daily stages</h3>
                <p>
                  Consider elevation, weather, road conditions and recovery time
                  when planning consecutive riding days.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Practical trip logistics</h3>
                <p>
                  Discuss accommodation, transfers, bike transport and any
                  support arrangements needed for the itinerary.
                </p>
              </article>
              <article>
                <span>04</span>
                <h3>Space to experience Morocco</h3>
                <p>
                  Leave room for mountain views, village stops, local food and
                  the landscapes that make each region distinctive.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">PLAN YOUR ROAD CYCLING HOLIDAY</p>
              <h2>Three steps to start planning your Morocco ride.</h2>
            </div>
            <p>
              You do not need every detail decided before making an enquiry.
              Start with your dates, riding goals and preferred regions, then
              discuss the route and practical arrangements that fit your trip.
            </p>
          </div>
          <div className="cl-steps">
            <article>
              <span>STEP 01</span>
              <h3>Share your riding experience</h3>
              <p>
                Tell us about your fitness, typical daily distance, climbing
                experience, group size and preferred pace.
              </p>
            </article>
            <article>
              <span>STEP 02</span>
              <h3>Discuss the route</h3>
              <p>
                Compare regions, road conditions, elevation, stage length,
                season and the amount of time available.
              </p>
            </article>
            <article>
              <span>STEP 03</span>
              <h3>Review the details</h3>
              <p>
                Discuss itinerary, accommodation, transfers, bike requirements
                and inclusions before final arrangements are made.
              </p>
            </article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
              <h2>Road cycling in Morocco: FAQs</h2>
              <p>
                Find answers to common questions about route difficulty, seasons
                and preparing for a road cycling holiday. For route-specific
                advice, contact us with your dates and riding preferences.
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
            src="/images/7-days-cycling-road-from-marrakech.jpg"
            alt="Road cycling journey starting from Marrakech in Morocco"
            loading="lazy"
          />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR NEXT ROAD CYCLING ADVENTURE</p>
            <h2>Ready to discover Morocco from the saddle?</h2>
            <p>
              Tell us when you want to travel, how far you like to ride and
              whether your ideal trip focuses on mountain climbs, scenic roads
              or a journey across several regions. We can start a conversation
              about a road cycling holiday shaped around your plans.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="/contact">
                Plan Your Road Cycling Holiday
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