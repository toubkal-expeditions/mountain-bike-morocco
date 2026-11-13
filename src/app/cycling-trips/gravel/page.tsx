
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gravel Cycling Tours in Morocco | Atlas & Desert Gravel Adventures",
  description:
    "Discover guided gravel cycling tours in Morocco, from Atlas Mountain roads and rural tracks to Agafay and the southern desert. Explore private gravel holidays and multi-day cycling adventures.",
  alternates: {
    canonical: "/cycling-trips/gravel",
  },
  openGraph: {
    title: "Gravel Cycling Tours in Morocco | Mountain Bike Morocco",
    description:
      "Explore Morocco by gravel bike on guided rides through the High Atlas, rural valleys, Agafay and southern landscapes. Discover day rides and private multi-day gravel holidays.",
    url: "https://mountain-bike-morocco.com/cycling-trips/gravel",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/gravel-adventure-bike-morocco.jpg",
        alt: "Gravel cycling adventure through the landscapes of Morocco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gravel Cycling Tours in Morocco | Mountain Bike Morocco",
    description:
      "Guided gravel cycling adventures across Morocco, from Atlas Mountain roads to remote valleys and desert landscapes.",
    images: ["/images/gravel-adventure-bike-morocco.jpg"],
  },
};

type Tour = {
  number: string;
  label: string;
  title: string;
  destination: string;
  duration: string;
  description: string;
  image: string;
  slug: string;
};

const gravelTours: Tour[] = [
  {
    number: "01",
    label: "MOUNTAIN ROADS & RURAL TRACKS",
    title: "Atlas Mountains Gravel Ride",
    destination: "HIGH ATLAS MOUNTAINS",
    slug: "atlas-mountains-gravel-ride-4-day",
    duration: "4 days",
    description:
      "Explore the changing landscapes of the High Atlas on a gravel cycling journey that can combine paved mountain roads, quieter rural tracks and views across traditional valleys. Route choice depends on road surface, elevation, distance and your experience on mixed terrain. Share your preferred pace and daily mileage so the itinerary can balance rewarding climbs with time to enjoy the scenery and villages along the way.",
    image: "/images/gravel-bike-atlas-mountains.JPG",
  },
  {
    number: "02",
    label: "REMOTE LANDSCAPES & OPEN HORIZONS",
    title: "Atlas to Desert Gravel Adventure",
    destination: "ATLAS TO SOUTHERN MOROCCO",
    slug: "atlas-to-desert-gravel-adventure-5-day",
    duration: "5 days",
    description:
      "Connect mountain scenery with the drier landscapes of southern Morocco on a gravel journey planned around the regions you want to explore. These longer routes require realistic planning for transfers, surface changes, elevation, water and accommodation between stages. The exact itinerary should reflect your travel dates, riding level and available time rather than trying to cover too much distance each day.",
    image: "/images/gravel-desert-cycling-expedition.jpg",
  },
  {
    number: "03",
    label: "A SHORT BREAK ON TWO WHEELS",
    title: "Gravel Cycling from Marrakech",
    destination: "MARRAKECH & ATLAS FOOTHILLS",
    slug: "gravel-cycling-from-marrakech-1-day",
    duration: "1 day",
    description:
      "Use Marrakech as a starting point for a gravel ride into the surrounding countryside and foothills. Depending on the route, a day can include quiet roads, rural tracks and views towards the Atlas Mountains, with time to stop and experience the area beyond the city. Start points, transfers and surface conditions vary, so discuss your preferred distance and the bike you plan to use before choosing a route.",
    image: "/images/cycling-tour-from-marrakech.jpg",
  },
  {
    number: "04",
    label: "GRANITE LANDSCAPES & QUIET ROADS",
    title: "Anti-Atlas Gravel Discovery",
    destination: "ANTI-ATLAS MOUNTAINS",
    slug: "anti-atlas-gravel-discovery-4-day",
    duration: "4 days",
    description:
      "Discover the rugged character of the Anti-Atlas through quiet roads, dry valleys, rocky hills and small settlements. The region can suit riders looking for a less familiar cycling landscape, but distances between services and the condition of remote tracks need careful consideration. A suitable plan takes account of temperature, water, tyre choice, repair equipment and the pace your group wants to maintain.",
    image: "/images/gravel-adventure-bike-morocco.jpg",
  },
  {
    number: "05",
    label: "VALLEYS, VILLAGES & MOUNTAIN VIEWS",
    title: "Three Valleys Gravel Tour",
    destination: "ATLAS THREE VALLEYS",
    slug: "three-valleys-gravel-tour-4-day",
    duration: "4 days",
    description:
      "Build a gravel itinerary around several Atlas valleys, linking rural roads and selected tracks with time to stop in villages and enjoy the mountain setting. Elevation and surface can vary noticeably between valleys, so daily stages should be planned for your fitness, bike setup and available time. Transfers may be needed to connect riding areas or keep the journey at a comfortable pace.",
    image: "/images/gravel-biking-atlas-morocco.jpg",
  },
  {
    number: "06",
    label: "LONGER DISTANCES & WIDE LANDSCAPES",
    title: "South Morocco Gravel Expedition",
    destination: "SOUTHERN MOROCCO",
    slug: "south-morocco-gravel-expedition-5-day",
    duration: "5 days",
    description:
      "Ride through the broad landscapes of southern Morocco on a journey that can combine quiet tarmac, gravel roads and selected remote tracks. Longer stages call for careful planning around water, food, heat, mechanical support and overnight stops. The route should be confirmed around the time of year, group experience and current conditions, with enough flexibility to adjust daily mileage when needed.",
    image: "/images/south-morocco-cycling-expedition.jpg",
  },
  {
    number: "07",
    label: "ROCKY TERRAIN NEAR THE RED CITY",
    title: "Agafay Gravel Escape",
    destination: "AGAFAY DESERT",
    slug: "agafay-gravel-escape-1-day",
    duration: "1 day",
    description:
      "Explore the open, rocky landscapes around Agafay on a gravel ride that feels very different from the higher Atlas valleys. Stony tracks and exposed conditions can make a route more demanding than its distance suggests, especially in warm weather. A good plan accounts for hydration, sun protection, tyre suitability, navigation and realistic timing, and should match the surface to your bike and experience.",
    image: "/images/Agafay-desert-morocco.jpg",
  },
  {
    number: "08",
    label: "SCENIC ROADS & CHANGING TERRAIN",
    title: "High Atlas and Ouirgane Gravel Tour",
    destination: "OUIRGANE & HIGH ATLAS",
    slug: "high-atlas-and-ouirgane-gravel-tour-4-day",
    duration: "4 days",
    description:
      "Explore the western Atlas around Ouirgane and nearby valleys, where cultivated land, village roads and mountain views create a quieter cycling experience. A route can be planned for a short escape or as part of a longer holiday, depending on how much climbing and distance you prefer. The final route should account for surface conditions, weather, support and the pace of everyone in the group.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
  },
  {
    number: "09",
    label: "PRIVATE RIDING & FLEXIBLE ROUTES",
    title: "Private Morocco Gravel Holiday",
    destination: "YOUR CHOICE OF REGION",
    slug: "private-morocco-gravel-holiday-5-day",
    duration: "5 days (customisable)",
    description:
      "Plan a private gravel holiday around your travel dates, preferred riding distances and the landscapes you want to experience. The trip can focus on one region or consider a route connecting several areas, as long as driving time, road surfaces, accommodation and daily mileage remain practical. Share your group size, bike setup and experience so the itinerary can be discussed around your priorities.",
    image: "/images/gravel-cycling-holiday-morocco.jpg",
  },
];

const destinations = [
  {
    title: "High Atlas Mountains",
    text:
      "Mountain roads and selected tracks lead through changing elevations, terraced valleys and traditional settlements. Route planning should consider gradients, surface, weather and the riding experience of your group.",
    image: "/images/gravel-bike-atlas-mountains.JPG",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Marrakech and the Foothills",
    text:
      "The countryside around Marrakech can provide a starting point for shorter gravel outings and longer journeys towards the Atlas. Confirm start locations, transfers, surfaces and traffic conditions when planning your ride.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/destinations/marrakech",
  },
  {
    title: "Agafay and Open Terrain",
    text:
      "Agafay offers open views and rocky terrain on the edge of the city. Temperature, water, tyre choice and the exact condition of tracks are important considerations for an enjoyable ride.",
    image: "/images/Agafay-desert-morocco.jpg",
    href: "/destinations/agafay-desert",
  },
  {
    title: "Southern Morocco",
    text:
      "The south offers wide horizons, dry valleys and routes that can connect remote communities and distinctive landscapes. Longer journeys need practical staging, water planning and reliable logistics.",
    image: "/images/south-morocco-cycling-expedition.jpg",
    href: "/destinations",
  },
];

const faqs = [
  {
    question: "What is gravel cycling like in Morocco?",
    answer:
      "Gravel cycling can combine quiet paved roads, compact dirt, rocky tracks and rural routes, depending on the region. Conditions vary, so the planned route should fit your bike, tyres, handling skills and experience. Discuss the intended surface and daily distance before confirming your trip.",
  },
  {
    question: "Do I need to be an experienced cyclist?",
    answer:
      "The experience required depends on the route, distance, elevation and surface. Some shorter rides may suit recreational cyclists, while remote or mountainous itineraries can require stronger fitness, confident bike handling and experience with longer days. Share your usual riding distance and terrain preferences so the route can be considered appropriately.",
  },
  {
    question: "What type of gravel bike should I bring?",
    answer:
      "The best setup depends on the specific route and its surfaces. Tyre width, gearing, braking, carrying capacity and the condition of the bike all matter, especially on rougher tracks. Tell us what bike you ride and the terrain you prefer so equipment needs can be discussed against the proposed itinerary.",
  },
  {
    question: "When is the best time for a gravel cycling holiday?",
    answer:
      "Spring and autumn are often comfortable periods for many Moroccan regions, but conditions vary with altitude and location. Mountain routes can be cold or affected by snow, while lower and desert-edge areas can become very hot in summer. Check the expected conditions for your route and dates before confirming travel.",
  },
  {
    question: "Can I book a private gravel tour?",
    answer:
      "You can enquire about a private route for a couple, friends, club or group. Useful details include dates, group size, preferred daily distance, bike setup, fitness and accommodation expectations. Those details help shape a practical itinerary and identify any transfers or support arrangements that may be needed.",
  },
  {
    question: "What should I carry on a gravel ride in Morocco?",
    answer:
      "Carry suitable water capacity, sun protection, basic repair tools, spare tubes or a tubeless repair kit, a pump or inflator and essential personal items. Depending on the season and elevation, extra layers or rain protection may be needed. Remote routes require particular attention to navigation, food, water and mechanical preparation.",
  },
  {
    question: "Can a gravel trip combine several regions?",
    answer:
      "A multi-region journey may be possible, but driving time between areas needs to be balanced against riding days and recovery. The right plan depends on your total time, desired distances, road conditions and the areas you want to visit. An itinerary should avoid adding more regions than can be enjoyed comfortably.",
  },
];

function contactHref(tourTitle: string, request: "details" | "booking") {
  return `/contact?tour=${encodeURIComponent(tourTitle)}&request=${request}`;
}

export default function GravelCyclingToursPage() {
  return (
    <>
      <main className="cycling-listing gravel-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/gravel-adventure-bike-morocco.jpg"
            alt="Gravel cyclist exploring the landscapes of Morocco"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">GRAVEL · MOUNTAIN ROADS · MOROCCO</p>
            <h1>Gravel Cycling Tours in Morocco</h1>
            <p className="cl-hero__intro">
              Discover Morocco on two wheels, following quiet roads, rural tracks
              and wide-open landscapes from the Atlas Mountains to the south.
              Explore gravel routes planned around your experience, preferred
              distance and the type of adventure you want from your cycling
              holiday.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="/contact">
                Plan Your Gravel Trip
              </Link>
              <Link className="cl-button cl-button--outline" href="#gravel-options">
                Explore Gravel Tours
              </Link>
            </div>
            <div className="cl-hero__meta">
              <span>QUIET ROADS & TRACKS</span>
              <span>PRIVATE OPTIONS</span>
              <span>ROUTES TO SUIT YOUR LEVEL</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">BEYOND THE BEATEN ROAD</p>
            <h2>Ride between mountain valleys, rural tracks and wide Moroccan horizons.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              Gravel cycling offers a flexible way to experience the contrasts
              of Morocco. A single journey can pass through farming landscapes,
              traditional villages, mountain foothills and dry open terrain.
              Quiet roads and selected tracks provide the opportunity to travel
              beyond the busiest routes while experiencing the changing scenery
              at a pace that leaves room for discovery.
            </p>
            <p>
              Each region has its own demands. Gradients, surface quality,
              distance between services, weather and transfers can all affect
              the ride. Your preferred daily mileage, bike setup, fitness and
              confidence on rough terrain should help shape the itinerary. On
              remote stages, planning for water, navigation and basic repairs is
              particularly important.
            </p>
            <p>
              Whether you want a short ride near Marrakech or a multi-day trip
              through mountain and southern landscapes, the aim is to choose a
              route that feels rewarding and realistic for your group.
            </p>
            <Link className="cl-text-link" href="/cycling-trips">
              Explore all cycling tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="gravel-options">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR GRAVEL EXPERIENCE</p>
                <h2>Gravel cycling holidays and routes across Morocco</h2>
              </div>
              <p>
                Choose from short rides, Atlas Mountain routes and longer
                journeys through changing landscapes. The day counts shown are
                suggested itinerary lengths and can be tailored to your group.
                Final routes, surface conditions, daily distance, elevation, bike
                suitability and logistics should be confirmed before booking.
              </p>
            </div>
            <div className="cl-tour-grid">
              {gravelTours.map((tour) => (
                <article className="home-tour-card" key={tour.number}>
                  <Link
                    className="home-tour-card__image"
                    href={`/cycling-trips/trip/${tour.slug}`}
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
                      GRAVEL CYCLING · {tour.destination}
                    </p>

                    <h3 className="home-tour-card__title">
                      <Link href={`/cycling-trips/trip/${tour.slug}`}>
                        {tour.title}
                      </Link>
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
                          ◆
                        </span>
                        {tour.duration}
                      </span>
                    </div>

                    <div className="home-tour-card__actions">
                      <Link
                        className="home-tour-card__button"
                        href={`/cycling-trips/trip/${tour.slug}`}
                      >
                        More Details
                      </Link>
                      <Link
                        className="home-tour-card__link"
                        href={contactHref(tour.title, "booking")}
                      >
                        Booking <span aria-hidden="true">↗</span>
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
              <p className="cl-eyebrow">YOUR BIKE. YOUR PACE. YOUR ROUTE.</p>
              <h2>Make the most of every kilometre with thoughtful route planning.</h2>
            </div>
            <div>
              <p>
                Gravel routes can change quickly from smooth roads to stony or
                uneven tracks. A well-considered itinerary matches the surface
                to your equipment, keeps daily distances realistic and allows
                for water, food, repairs and recovery. For multi-day rides,
                transfer times and accommodation also need to fit the journey.
              </p>
              <Link className="cl-button cl-button--gold" href="/contact">
                Discuss Your Gravel Trip
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">WHERE TO RIDE</p>
              <h2>Explore gravel cycling regions in Morocco</h2>
            </div>
            <p>
              From mountain roads to dry southern landscapes, each region offers
              a different kind of ride. Consider your travel dates, available
              time, preferred surface and daily distance when deciding where to
              begin.
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
                    GRAVEL DESTINATION
                  </span>
                  <span className="home-tour-card__level">
                    {destination.title}
                  </span>
                </Link>

                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">
                    GRAVEL CYCLING · {destination.title}
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
                      Discover <span aria-hidden="true">↗</span>
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
              src="/images/gravel-cycling-holiday-morocco.jpg"
              alt="Gravel cycling holiday through Morocco's varied landscapes"
              loading="lazy"
            />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">MORE THAN THE MILEAGE</p>
            <h2>Leave room to experience the places between the roads.</h2>
            <p>
              A memorable gravel trip is not only about distance. Rural tracks
              connect landscapes and communities, and there is value in having
              time to stop for views, explore a village or enjoy a break between
              riding stages. Morocco's changing terrain gives each region its
              own character, from mountain valleys to dry open horizons.
            </p>
            <p>
              The best itinerary balances ambition with practicality. Terrain,
              gradients, weather, access to services and time spent transferring
              between regions all shape how much riding fits comfortably into a
              day. A considered plan makes space for both the ride and the
              experience of travelling through the country.
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
                <h2>Local knowledge and practical details for your gravel holiday.</h2>
              </div>
              <p>
                A good gravel itinerary begins with an honest conversation about
                the terrain you enjoy, how far you want to ride and what support
                the journey requires. Those details help make the plan suited to
                your group and the realities of the route.
              </p>
            </div>
            <div className="cl-why-grid">
              <article>
                <span>01</span>
                <h3>Routes that fit your riding</h3>
                <p>Consider your preferred daily distance, climbing, bike handling and comfort on mixed surfaces when discussing route options.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Surface-aware planning</h3>
                <p>Choose a suitable route and equipment with consideration for rough tracks, loose sections, road conditions and seasonal weather.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Practical logistics</h3>
                <p>Plan around water, food, repairs, accommodation, transfers and the support needed for longer or more remote stages.</p>
              </article>
              <article>
                <span>04</span>
                <h3>Time to discover Morocco</h3>
                <p>Make space for mountain views, village life, local food and the changing landscapes beyond the route itself.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">PLAN YOUR GRAVEL HOLIDAY</p>
              <h2>Three steps to start planning your Morocco gravel ride.</h2>
            </div>
            <p>
              You do not need every detail decided before you enquire. Begin
              with your dates, preferred landscapes and riding level, then
              discuss which routes and practical arrangements best fit your
              plans.
            </p>
          </div>
          <div className="cl-steps">
            <article>
              <span>STEP 01</span>
              <h3>Share your riding preferences</h3>
              <p>Tell us about your bike, riding experience, group size, preferred terrain and usual daily distance.</p>
            </article>
            <article>
              <span>STEP 02</span>
              <h3>Choose regions and routes</h3>
              <p>Compare surfaces, gradients, season, daily stages and the time needed to connect different riding areas.</p>
            </article>
            <article>
              <span>STEP 03</span>
              <h3>Review the practical details</h3>
              <p>Discuss accommodation, transfers, water and food planning, support arrangements and inclusions before finalising the trip.</p>
            </article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
              <h2>Gravel cycling in Morocco: FAQs</h2>
              <p>
                Find practical answers about gravel terrain, equipment, seasons
                and planning a multi-day ride. For route-specific advice, get in
                touch with your travel dates and riding preferences.
              </p>
              <Link className="cl-text-link" href="/contact">
                Ask us about your trip <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="cl-faq-list">
              {faqs.map((faq, index) => (
                <details className="cl-faq-item" key={faq.question} open={index === 0}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cl-final-cta">
          <img
            src="/images/gravel-desert-cycling-expedition.jpg"
            alt="Open landscapes along a gravel cycling route in Morocco"
            loading="lazy"
          />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR NEXT GRAVEL ADVENTURE</p>
            <h2>Ready to explore Morocco beyond the beaten road?</h2>
            <p>
              Tell us when you want to travel, what kind of terrain you enjoy and
              how far you prefer to ride each day. We can start a conversation
              about gravel routes, regions and practical arrangements for your
              Morocco cycling holiday.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="/contact">
                Plan Your Gravel Holiday
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
          <span>© {2026} Mountain Bike Morocco</span>
          <span>Morocco cycling adventures, thoughtfully planned.</span>
        </div>
      </footer>
    </>
  );
}
