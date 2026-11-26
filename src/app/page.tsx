import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Morocco Cycling Tours | MTB, E-MTB, Gravel & Road",
  description:
    "Discover guided Morocco cycling tours, from Atlas Mountains MTB and E-MTB adventures to gravel, road bike and private rides from Marrakech.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://mountain-bike-morocco.com/",
    siteName: "Mountain Bike Morocco",
    title: "Mountain Bike Tours in Morocco | Mountain Bike Morocco",
    description:
      "Explore the Atlas Mountains and beyond on guided MTB, E-MTB and gravel cycling adventures with local Moroccan guides.",
    images: [
      {
        url: "/images/morocco-cycling-tour-hero.jpg",
        alt: "Mountain biking in Morocco's Atlas Mountains",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mountain Bike Tours in Morocco | Mountain Bike Morocco",
    description:
      "Guided MTB, E-MTB and gravel cycling adventures across Morocco.",
    images: ["/images/morocco-cycling-tour-hero.jpg"],
  },
};

const tours = [
  {
    category: "MTB ADVENTURE",
    title: "Atlas Mountains Mountain Bike Tour",
    description:
      "Explore the spectacular trails of Morocco's High Atlas Mountains on a guided mountain biking adventure. Ride ancient mule tracks, discover traditional Amazigh villages, cross dramatic valleys and enjoy panoramic mountain scenery with experienced local guides. Each itinerary can be adapted to your experience, technical ability and preferred riding distance.",
    duration: "3–7 days",
    level: "Intermediate",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/cycling-trips/high-atlas",
  },
  {
    category: "MTB ADVENTURE",
    title: "High Atlas Singletrack Expedition",
    description:
      "Spend several days discovering the riding potential of the High Atlas. Each stage reveals a different landscape, from rocky mountain paths to terraced farmland and remote villages. We plan the route, local stays and support around your group's needs, creating a multi-day experience that balances riding, scenery and cultural discovery.",
    duration: "4–7 days",
    level: "Experienced",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/high-atlas",
  },
  {
    category: "MTB ADVENTURE",
    title: "Anti-Atlas Mountain Bike Tour",
    description:
      "Discover the rugged landscapes of southern Morocco on a mountain biking journey through the Anti-Atlas. Explore rocky tracks, remote valleys and traditional villages while enjoying the distinctive scenery of this quieter mountain region. Your itinerary can be adapted to your riding experience, preferred daily distances and available travel time.",
    duration: "3–6 days",
    level: "Intermediate",
    image: "/images/anti-atlas-cycling-tour.jpg",
    href: "/cycling-trips/mtb",
  },
  {
    category: "E-MTB EXPERIENCE",
    title: "Atlas Mountains E-MTB Adventure",
    description:
      "Discover more of Morocco with the assistance of a modern electric mountain bike. Explore scenic singletrack, remote mountain villages and rewarding descents, with flexible itineraries suited to different fitness levels. Enjoy the freedom to cover more terrain while experiencing the landscapes and culture of the Atlas Mountains.",
    duration: "2–6 days",
    level: "All levels",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/cycling-trips/e-mtb",
  },
  {
    category: "E-MTB EXPERIENCE",
    title: "E-Bike Day Tour from Marrakech",
    description:
      "Escape the busy streets of Marrakech and discover the surrounding countryside on an electric bike. Ride through foothills, rural tracks and traditional villages on a route selected according to your experience, available time and preferred riding style. Enjoy a rewarding day outdoors with assistance on the climbs and time to appreciate the scenery.",
    duration: "1 day",
    level: "Flexible",
    image: "/images/day-ebike-tour-from-marrakech.jpg",
    href: "/cycling-trips/from-marrakech",
  },
  {
    category: "E-MTB EXPERIENCE",
    title: "High Atlas Electric Bike Expedition",
    description:
      "Explore the High Atlas on an electric mountain bike journey designed to combine scenic climbs, mountain trails and visits to traditional villages. Electric assistance can help you cover more ground while keeping the experience focused on the landscape and the ride. Routes and daily distances can be adapted to your group and riding goals.",
    duration: "3–5 days",
    level: "All levels",
    image: "/images/atlas-mountains-ebike-tour.jpg",
    href: "/cycling-trips/e-mtb",
  },
  {
    category: "GRAVEL CYCLING",
    title: "Gravel Roads from the Atlas to the Desert",
    description:
      "Follow quiet mountain roads, remote gravel tracks and spectacular routes through changing Moroccan landscapes. Connect mountain passes, rural communities and wide-open valleys on a journey planned around your preferred pace, daily distance and cycling experience.",
    duration: "5–9 days",
    level: "Intermediate",
    image: "/images/gravel-cycling-morocco.jpg",
    href: "/cycling-trips/gravel",
  },
  {
    category: "GRAVEL CYCLING",
    title: "Southern Morocco Gravel Expedition",
    description:
      "Ride across the varied landscapes of southern Morocco on a gravel adventure linking quiet roads, remote tracks and open countryside. Experience the changing scenery, discover rural communities and enjoy long days in the saddle away from busy highways. Your itinerary can be tailored to your preferred distance and level of challenge.",
    duration: "5–8 days",
    level: "Intermediate",
    image: "/images/south-morocco-cycling-trips.jpg",
    href: "/cycling-trips/gravel",
  },
  {
    category: "GRAVEL CYCLING",
    title: "Atlas Mountains Gravel Adventure",
    description:
      "Discover the Atlas Mountains on a gravel bike, following quiet roads, mountain passes and tracks through traditional villages and dramatic valleys. This journey combines rewarding climbs, sweeping views and opportunities to experience local life along the route. Choose an itinerary suited to your riding experience, preferred pace and available time.",
    duration: "3–7 days",
    level: "Intermediate",
    image: "/images/gravel-bike-atlas-mountains.JPG",
    href: "/cycling-trips/gravel",
  },
];

const destinations = [
  {
    title: "High Atlas Mountains",
    description:
      "Ride through high mountain passes, deep valleys and dramatic landscapes. The Atlas offers a varied network of tracks and trails, with routes for adventurous riders looking for remote scenery and meaningful encounters with local communities.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/destinations/atlas-mountains",
    tag: "MOUNTAIN TRAILS",
  },
  {
    title: "Imlil and Mount Toubkal",
    description:
      "Discover the mountain villages around Imlil and the rugged foothills of Mount Toubkal. This region combines traditional architecture, terraced fields and spectacular mountain views.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil",
    tag: "VILLAGES & VALLEYS",
  },
  {
    title: "Agafay and the Desert",
    description:
      "Explore open, rocky terrain and wide horizons outside Marrakech. The Agafay region offers scenic tracks, changing light and a striking contrast to the high mountain trails.",
    image: "/images/Desert-Agafay-Morocco.jpg",
    href: "/destinations/agafay-desert",
    tag: "DESERT LANDSCAPES",
  },
];

const rideStyles = [
  {
    number: "01",
    title: "Mountain Bike Tours",
    description:
      "Ride ancient mule tracks, rocky singletrack and flowing mountain paths through the High Atlas and beyond.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/mtb",
    tag: "MTB ADVENTURES",
  },
  {
    number: "02",
    title: "E-MTB Tours",
    description:
      "Explore longer climbs, mountain villages and rewarding descents with the assistance of an electric mountain bike.",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/cycling-trips/e-mtb",
    tag: "ELECTRIC MOUNTAIN BIKING",
  },
  {
    number: "03",
    title: "Gravel Cycling",
    description:
      "Connect quiet roads, remote tracks and wide-open landscapes on a route planned around your riding goals.",
    image: "/images/gravel-cycling-morocco.jpg",
    href: "/cycling-trips/gravel",
    tag: "GRAVEL JOURNEYS",
  },
  {
    number: "04",
    title: "Road Cycling",
    description:
      "Discover mountain climbs, open roads and changing scenery on a road cycling holiday across Morocco.",
    image: "/images/road-cycling-morocco.jpg",
    href: "/cycling-trips/road",
    tag: "ROAD RIDES",
  },
  {
    number: "05",
    title: "Luxury Cycling",
    description:
      "Combine rewarding days in the saddle with considered accommodation, transfers and personal trip planning.",
    image: "/images/group-cycling-tour-morocco.jpg",
    href: "/cycling-trips/luxury",
    tag: "COMFORT & SERVICE",
  },
  {
    number: "06",
    title: "Private Group Tours",
    description:
      "Plan a cycling journey around your group's preferred dates, experience, destinations and pace.",
    image: "/images/group-cycling-atlas-mountains.jpg",
    href: "/cycling-trips/private-groups",
    tag: "YOUR GROUP, YOUR RIDE",
  },
];

const reasons = [
  {
    number: "01",
    title: "Local knowledge",
    text: "Our itineraries are shaped by knowledge of the region, its villages, tracks and changing conditions. We help you discover routes and places that make sense for your group, not simply follow a fixed checklist.",
  },
  {
    number: "02",
    title: "Rides for your level",
    text: "From relaxed scenic rides to technical mountain trails and longer gravel journeys, we discuss your experience and goals before recommending a suitable route, pace and itinerary.",
  },
  {
    number: "03",
    title: "Thoughtful support",
    text: "Good planning makes an adventure more enjoyable. We coordinate the practical details of your trip, explain what to expect and help you prepare for the terrain, weather, equipment and daily riding.",
  },
  {
    number: "04",
    title: "A closer look at Morocco",
    text: "Cycling creates time to appreciate everyday life beyond the main roads. Discover mountain scenery, local food, traditional villages and the different landscapes that make Morocco such a rewarding place to explore.",
  },
];

const faqs = [
  {
    question: "When is the best time for cycling in Morocco?",
    answer:
      "Spring and autumn are popular periods for many Moroccan cycling routes because temperatures are often more comfortable. Conditions vary by altitude and region, however. Mountain areas can be cold, while lower and desert regions can be hot. We recommend choosing dates according to your destination, riding style and preferred daily distances.",
  },
  {
    question: "Do I need to be an experienced mountain biker?",
    answer:
      "Not for every trip. The technical difficulty and daily effort depend on the itinerary. Some routes suit confident beginners and recreational riders, while remote singletrack and long mountain stages require more experience. Tell us about your riding background so the route can be matched to your abilities.",
  },
  {
    question: "Can I arrange a private or custom cycling holiday?",
    answer:
      "Yes. A private itinerary can be planned around your dates, group size, preferred bike type, accommodation and the places you want to visit. The route and support arrangements should also reflect your experience, fitness and the conditions expected during your trip.",
  },
  {
    question: "Can cycling tours start from Marrakech?",
    answer:
      "Many itineraries can begin in or near Marrakech, depending on the route. The city provides access to the foothills of the Atlas Mountains and other surrounding landscapes. Your proposed itinerary should confirm transfers, meeting points, riding locations and the time needed for each stage.",
  },
  {
    question: "What should I bring on a cycling tour?",
    answer:
      "Bring suitable cycling clothing, gloves, eye protection, comfortable footwear, sun protection and a reusable water bottle or hydration system. Depending on the season and altitude, you may also need warm layers and rain protection. We can provide a more specific equipment list once your route is selected.",
  },
];

const galleryImages = [
  {
    src: "/images/singletrack-mtb-atlas-mountains.jpg",
    alt: "Mountain biker riding singletrack in Morocco's Atlas Mountains",
  },
  {
    src: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    alt: "Cycling through the Atlas Mountains",
  },
  {
    src: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    alt: "Mountain biking near Imlil and Mount Toubkal",
  },
  {
    src: "/images/e-mtb-tour-morocco.jpg",
    alt: "Electric mountain bike tour in Morocco",
  },
  {
    src: "/images/gravel-cycling-morocco.jpg",
    alt: "Gravel cycling through Morocco",
  },
  {
    src: "/images/group-cycling-atlas-mountains.jpg",
    alt: "Cycling group in the Atlas Mountains",
  },
];

const guides = [
  {
    tag: "DESTINATION GUIDE",
    title: "Discover the Atlas Mountains",
    text: "Explore the mountain region, its valleys, villages and riding possibilities.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    tag: "TRIP PLANNING",
    title: "Plan a cycling trip from Marrakech",
    text: "Understand the options for starting your cycling holiday in Marrakech.",
    image: "/images/day-ebike-tour-from-marrakech.jpg",
    href: "/cycling-trips/from-marrakech",
  },
  {
    tag: "LOCAL EXPERIENCES",
    title: "Explore Morocco beyond the trail",
    text: "Discover the villages, landscapes and local culture along the way.",
    image: "/images/berber-villages-cycling-expeditions.jpg",
    href: "/journal",
  },
];

export default function Home() {
  return (
    <main className="cycling-home">
      {/* HERO */}
      <section className="cycling-home__hero">
        <img
          className="cycling-home__hero-image"
          src="/images/morocco-cycling-tour-hero.jpg"
          alt="Mountain biking in Morocco's Atlas Mountains"
          fetchPriority="high"
        />
        <div className="cycling-home__hero-shade" />
        <div className="cycling-home__hero-content page-width">
          <p className="cycling-home__eyebrow">MOROCCO · HIGH ATLAS · SAHARA</p>
          <h1>Morocco Cycling Tours</h1>
          <p>
            Discover Morocco by bike. Ride Atlas Mountain trails, explore
            remote gravel roads and traditional villages, or plan a private
            cycling journey shaped around your experience.
          </p>
          <div className="cycling-home__hero-actions">
            <Link className="cycling-home__button cycling-home__button--gold" href="/cycling-trips">
              Explore Cycling Tours
            </Link>
            <Link className="cycling-home__button cycling-home__button--light" href="/contact">
              Plan Your Ride
            </Link>
          </div>
          <div className="cycling-home__hero-facts">
            <span>MTB &amp; E-MTB</span>
            <span>GRAVEL &amp; ROAD</span>
            <span>PRIVATE CYCLING TOURS</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION — WHY RIDE WITH US */}
      <section className="cycling-home__intro" id="intro">
        <div className="page-width cycling-home__intro-layout">
          <div className="cycling-home__intro-main">
            <div className="cycling-home__intro-image">
              <img
                src="/images/group-cycling-atlas-mountains.jpg"
                alt="Mountain bikers taking in the High Atlas mountain scenery in Morocco"
                loading="lazy"
              />
            </div>
            <div className="cycling-home__intro-story">
              <p>
                With local knowledge of Morocco’s mountain trails, gravel
                roads and changing landscapes, Mountain Bike Morocco helps
                riders discover the country in a way that suits their own
                experience and ambitions. From the High Atlas to the desert
                and coast, we focus on thoughtful route planning, good
                preparation and memorable days on two wheels.
              </p>
              <h3>Find the ride that feels right for you</h3>
              <div className="cycling-home__intro-trust" aria-label="Our cycling experiences">
                <span>MTB &amp; E-MTB</span>
                <span>GRAVEL &amp; ROAD</span>
                <span>PRIVATE CYCLING TOURS</span>
              </div>
            </div>
          </div>

          <div className="cycling-home__intro-features">
            <article className="cycling-home__intro-feature">
              <span className="cycling-home__intro-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M9 4h14v5a7 7 0 0 1-14 0V4Z" />
                  <path d="M9 7H4v3a6 6 0 0 0 6 6M23 7h5v3a6 6 0 0 1-6 6M16 16v6M11 28h10M13 22h6v6h-6z" />
                </svg>
              </span>
              <div>
                <h3>Local Atlas Experience</h3>
                <p>
                  Explore with a team familiar with the region’s mountain
                  villages, valleys, trail networks and the practical details
                  that shape a great day of riding.
                </p>
              </div>
            </article>

            <article className="cycling-home__intro-feature">
              <span className="cycling-home__intro-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M5 27V5M6 6h19l-4 6 4 6H6" />
                  <path d="M11 10h5M11 14h8" />
                </svg>
              </span>
              <div>
                <h3>Knowledgeable Local Guides</h3>
                <p>
                  Get route guidance shaped around the terrain, weather,
                  riding conditions and cultural places encountered along
                  the way.
                </p>
              </div>
            </article>

            <article className="cycling-home__intro-feature">
              <span className="cycling-home__intro-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <circle cx="8" cy="23" r="5" />
                  <circle cx="24" cy="23" r="5" />
                  <path d="m8 23 6-11 5 11H8l5-8h8l3 8M12 8h4M18 8h3" />
                </svg>
              </span>
              <div>
                <h3>Bike &amp; Mechanical Preparation</h3>
                <p>
                  Discuss bike choice, fit and equipment before departure.
                  Support and mechanical arrangements are planned according
                  to the tour you select.
                </p>
              </div>
            </article>

            <article className="cycling-home__intro-feature">
              <span className="cycling-home__intro-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M16 3 27 7v8c0 7-4.7 11.7-11 14-6.3-2.3-11-7-11-14V7l11-4Z" />
                  <path d="m11 16 3.5 3.5L21 13" />
                </svg>
              </span>
              <div>
                <h3>Safety &amp; Thoughtful Support</h3>
                <p>
                  Clear preparation, realistic route choices and agreed
                  support arrangements help you understand what to expect
                  before setting out.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* BROWSE CYCLING TOURS BY STYLE */}
      <section className="cycling-home__section cycling-home__section--sand" id="cycling-styles">
        <div className="page-width">
          <div className="cycling-home__section-heading">
            <div>
              <p className="cycling-home__eyebrow cycling-home__eyebrow--dark">
                BROWSE CYCLING TOURS
              </p>
              <h2>Choose the way you want to ride</h2>
            </div>
            <p>
              Start with the cycling style that suits you. Explore the options
              and compare the type of terrain, pace and experience you want
              from your time in Morocco.
            </p>
          </div>
          <div className="cycling-home__style-grid">
            {rideStyles.map((style) => (
              <article className="cycling-home__style-card" key={style.number}>
                <Link href={style.href} className="cycling-home__style-image">
                  <img src={style.image} alt={style.title} loading="lazy" />
                  <span>{style.tag}</span>
                </Link>
                <div className="cycling-home__style-content">
                  <span className="cycling-home__number">{style.number}</span>
                  <h3><Link href={style.href}>{style.title}</Link></h3>
                  <p>{style.description}</p>
                  <Link className="cycling-home__text-link" href={style.href}>
                    Explore tours <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BROWSE BY DESTINATION */}
      <section className="cycling-home__section">
        <div className="page-width">
          <div className="cycling-home__section-heading">
            <div>
              <p className="cycling-home__eyebrow cycling-home__eyebrow--dark">
                BROWSE TOURS BY PLACE
              </p>
              <h2>Where would you like to ride?</h2>
            </div>
            <p>
              Each region offers a different kind of ride. Discover the
              mountain trails, village routes and open landscapes, then ask
              us which itinerary best fits your plans.
            </p>
          </div>
          <div className="cycling-home__destination-grid">
            {destinations.map((destination) => (
              <article className="cycling-home__destination-card" key={destination.title}>
                <Link href={destination.href} className="cycling-home__destination-image">
                  <img src={destination.image} alt={destination.title} loading="lazy" />
                  <span>{destination.tag}</span>
                </Link>
                <div>
                  <h3><Link href={destination.href}>{destination.title}</Link></h3>
                  <p>{destination.description}</p>
                  <Link className="cycling-home__text-link" href={destination.href}>
                    Explore destination <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="cycling-home__center-action">
            <Link className="cycling-home__button cycling-home__button--dark" href="/destinations">
              Browse All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* POPULAR TOURS */}
      <section className="cycling-home__section cycling-home__section--sand" id="popular-tours">
        <div className="page-width">
          <div className="cycling-home__section-heading">
            <div>
              <p className="cycling-home__eyebrow cycling-home__eyebrow--dark">
                FIND YOUR NEXT ADVENTURE
              </p>
              <h2>Popular cycling tours in Morocco</h2>
            </div>
            <p>
              Explore a selection of MTB, E-MTB and gravel journeys. Tour
              duration and riding level are starting points; confirm the
              itinerary and details for your preferred dates with our team.
            </p>
          </div>
          <div className="cycling-home__tour-grid">
            {tours.slice(0, 6).map((tour) => (
              <article className="cycling-home__tour-card" key={tour.title}>
                <Link href={tour.href} className="cycling-home__tour-image">
                  <img src={tour.image} alt={tour.title} loading="lazy" />
                  <span>{tour.category}</span>
                </Link>
                <div className="cycling-home__tour-content">
                  <h3><Link href={tour.href}>{tour.title}</Link></h3>
                  <p>{tour.description}</p>
                  <div className="cycling-home__tour-meta">
                    <span>{tour.duration}</span>
                    <span>{tour.level}</span>
                  </div>
                  <div className="cycling-home__tour-actions">
                    <Link className="cycling-home__button cycling-home__button--gold" href={tour.href}>
                      View Tour
                    </Link>
                    <Link className="cycling-home__text-link" href="/contact">
                      Ask About Dates <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="cycling-home__center-action">
            <Link className="cycling-home__button cycling-home__button--dark" href="/cycling-trips">
              View All Cycling Tours
            </Link>
          </div>
        </div>
      </section>

      {/* MOUNTAIN BIKE & ENDURO TOURS */}
      <section className="cycling-home__section" id="mountain-bike-tours">
        <div className="page-width">
          <div className="cycling-home__section-heading">
            <div>
              <p className="cycling-home__eyebrow cycling-home__eyebrow--dark">
                MTB &amp; ENDURO ADVENTURES
              </p>
              <h2>Discover Morocco's mountain bike tours</h2>
            </div>
            <p>
              Explore the High Atlas and Anti-Atlas on guided mountain bike
              adventures. Ride mountain trails, technical singletrack and
              remote routes through spectacular Moroccan landscapes.
            </p>
          </div>

          <div className="cycling-home__tour-grid">
            {tours
              .filter((tour) => tour.category === "MTB ADVENTURE")
              .map((tour) => (
                <article className="cycling-home__tour-card" key={tour.title}>
                  <Link href={tour.href} className="cycling-home__tour-image">
                    <img src={tour.image} alt={tour.title} loading="lazy" />
                    <span>{tour.category}</span>
                  </Link>
                  <div className="cycling-home__tour-content">
                    <h3><Link href={tour.href}>{tour.title}</Link></h3>
                    <p>{tour.description}</p>
                    <div className="cycling-home__tour-meta">
                      <span>{tour.duration}</span>
                      <span>{tour.level}</span>
                    </div>
                    <div className="cycling-home__tour-actions">
                      <Link className="cycling-home__button cycling-home__button--gold" href={tour.href}>
                        View Tour
                      </Link>
                      <Link className="cycling-home__text-link" href="/contact">
                        Ask About Dates <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          <div className="cycling-home__center-action">
            <Link className="cycling-home__button cycling-home__button--dark" href="/cycling-trips/mtb">
              Explore All MTB Tours
            </Link>
          </div>
        </div>
      </section>

      {/* E-MTB ADVENTURES */}
      <section className="cycling-home__section cycling-home__section--sand" id="emtb-adventures">
        <div className="page-width">
          <div className="cycling-home__section-heading">
            <div>
              <p className="cycling-home__eyebrow cycling-home__eyebrow--dark">
                ELECTRIC MOUNTAIN BIKING
              </p>
              <h2>Explore further with E-MTB adventures</h2>
            </div>
            <p>
              Discover Morocco's mountain landscapes with electric mountain
              bike assistance. Enjoy rewarding climbs, scenic trails and
              longer riding days with itineraries adapted to your group.
            </p>
          </div>

          <div className="cycling-home__tour-grid">
            {tours
              .filter((tour) => tour.category === "E-MTB EXPERIENCE")
              .map((tour) => (
                <article className="cycling-home__tour-card" key={tour.title}>
                  <Link href={tour.href} className="cycling-home__tour-image">
                    <img src={tour.image} alt={tour.title} loading="lazy" />
                    <span>{tour.category}</span>
                  </Link>
                  <div className="cycling-home__tour-content">
                    <h3><Link href={tour.href}>{tour.title}</Link></h3>
                    <p>{tour.description}</p>
                    <div className="cycling-home__tour-meta">
                      <span>{tour.duration}</span>
                      <span>{tour.level}</span>
                    </div>
                    <div className="cycling-home__tour-actions">
                      <Link className="cycling-home__button cycling-home__button--gold" href={tour.href}>
                        View Tour
                      </Link>
                      <Link className="cycling-home__text-link" href="/contact">
                        Ask About Dates <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          <div className="cycling-home__center-action">
            <Link className="cycling-home__button cycling-home__button--dark" href="/cycling-trips/e-mtb">
              Explore All E-MTB Tours
            </Link>
          </div>
        </div>
      </section>

      {/* GRAVEL CYCLING TOURS */}
      <section className="cycling-home__section" id="gravel-adventures">
        <div className="page-width">
          <div className="cycling-home__section-heading">
            <div>
              <p className="cycling-home__eyebrow cycling-home__eyebrow--dark">
                GRAVEL CYCLING IN MOROCCO
              </p>
              <h2>Discover Morocco's gravel adventures</h2>
            </div>
            <p>
              Ride quiet mountain roads, remote tracks and spectacular
              landscapes. Discover multi-day gravel journeys through the
              Atlas Mountains and southern Morocco.
            </p>
          </div>

          <div className="cycling-home__tour-grid">
            {tours
              .filter((tour) => tour.category === "GRAVEL CYCLING")
              .map((tour) => (
                <article className="cycling-home__tour-card" key={tour.title}>
                  <Link href={tour.href} className="cycling-home__tour-image">
                    <img src={tour.image} alt={tour.title} loading="lazy" />
                    <span>{tour.category}</span>
                  </Link>
                  <div className="cycling-home__tour-content">
                    <h3><Link href={tour.href}>{tour.title}</Link></h3>
                    <p>{tour.description}</p>
                    <div className="cycling-home__tour-meta">
                      <span>{tour.duration}</span>
                      <span>{tour.level}</span>
                    </div>
                    <div className="cycling-home__tour-actions">
                      <Link className="cycling-home__button cycling-home__button--gold" href={tour.href}>
                        View Tour
                      </Link>
                      <Link className="cycling-home__text-link" href="/contact">
                        Ask About Dates <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          <div className="cycling-home__center-action">
            <Link className="cycling-home__button cycling-home__button--dark" href="/cycling-trips/gravel">
              Explore All Gravel Tours
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT / WHY RIDE WITH US */}
      <section className="cycling-home__about">
        <div className="page-width">
          <div className="cycling-home__about-heading">
            <div>
              <p className="cycling-home__eyebrow">ABOUT MOUNTAIN BIKE MOROCCO</p>
              <h2>Local knowledge. Thoughtful planning. More meaningful rides.</h2>
            </div>
            <p>
              A memorable cycling holiday needs more than a beautiful route.
              It takes honest advice, realistic preparation and an understanding
              of the places and people along the way.
            </p>
          </div>
          <div className="cycling-home__reason-grid">
            {reasons.map((reason) => (
              <article className="cycling-home__reason-card" key={reason.number}>
                <span>{reason.number}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
          <div className="cycling-home__about-bottom">
            <p>
              Tell us about your riding experience, preferred terrain and
              travel plans. We can help you explore the options and discuss
              the practical details of your trip.
            </p>
            <Link className="cycling-home__button cycling-home__button--gold" href="/about">
              About Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* CYCLING GALLERY */}
      <section className="cycling-home__section">
        <div className="page-width">
          <div className="cycling-home__section-heading">
            <div>
              <p className="cycling-home__eyebrow cycling-home__eyebrow--dark">
                MOROCCO ON TWO WHEELS
              </p>
              <h2>Scenes from the ride</h2>
            </div>
            <p>
              Mountain trails, remote roads and the landscapes that make
              every cycling journey different. Explore more images and trip
              stories in our journal.
            </p>
          </div>
          <div className="cycling-home__gallery">
            {galleryImages.map((photo, index) => (
              <Link
                href="/journal"
                className={`cycling-home__gallery-item cycling-home__gallery-item--${index + 1}`}
                key={photo.src}
                aria-label={`Explore cycling stories: ${photo.alt}`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </Link>
            ))}
          </div>
          <div className="cycling-home__center-action">
            <Link className="cycling-home__button cycling-home__button--dark" href="/journal">
              Explore the Journal
            </Link>
          </div>
        </div>
      </section>

      {/* TRAVEL GUIDES */}
      <section className="cycling-home__section cycling-home__section--sand">
        <div className="page-width">
          <div className="cycling-home__section-heading">
            <div>
              <p className="cycling-home__eyebrow cycling-home__eyebrow--dark">
                PLAN YOUR CYCLING HOLIDAY
              </p>
              <h2>Explore Morocco before you ride</h2>
            </div>
            <p>
              Get to know the regions, trip options and local experiences
              that can help you plan a cycling holiday with confidence.
            </p>
          </div>
          <div className="cycling-home__guide-grid">
            {guides.map((guide) => (
              <article className="cycling-home__guide-card" key={guide.title}>
                <Link href={guide.href} className="cycling-home__guide-image">
                  <img src={guide.image} alt={guide.title} loading="lazy" />
                </Link>
                <div>
                  <span>{guide.tag}</span>
                  <h3><Link href={guide.href}>{guide.title}</Link></h3>
                  <p>{guide.text}</p>
                  <Link className="cycling-home__text-link" href={guide.href}>
                    Read more <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cycling-home__faq">
        <div className="page-width cycling-home__faq-grid">
          <div>
            <p className="cycling-home__eyebrow cycling-home__eyebrow--dark">
              NEED TO KNOW
            </p>
            <h2>Frequently asked questions</h2>
            <p>
              Find answers to common questions about cycling in Morocco. If
              you have a specific route or trip in mind, get in touch and
              we can discuss the details.
            </p>
            <Link className="cycling-home__text-link" href="/contact">
              Ask us a question <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="cycling-home__faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cycling-home__cta">
        <img
          src="/images/group-cycling-atlas-mountains.jpg"
          alt="Cyclists riding together through Morocco's Atlas Mountains"
          loading="lazy"
        />
        <div className="cycling-home__cta-shade" />
        <div className="page-width cycling-home__cta-content">
          <p className="cycling-home__eyebrow">YOUR NEXT ADVENTURE STARTS HERE</p>
          <h2>Ready to discover Morocco by bike?</h2>
          <p>
            Tell us what kind of ride you have in mind. Share your preferred
            dates, experience and group size, and start planning your
            Moroccan cycling adventure.
          </p>
          <div className="cycling-home__hero-actions">
            <Link className="cycling-home__button cycling-home__button--gold" href="/contact">
              Plan Your Cycling Trip
            </Link>
            <Link className="cycling-home__button cycling-home__button--light" href="/cycling-trips">
              View All Tours
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="page-width footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <img
                className="brand__logo"
                src="/images/logo-mountain-bike-morocco-footer.png"
                alt="Mountain Bike Morocco"
              />
              <span>MOUNTAIN BIKE <em>MOROCCO</em></span>
            </Link>
            <p>
              Guided mountain biking, E-MTB, gravel and road cycling
              experiences across Morocco. Discover the landscapes, routes and
              local culture at your own pace.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/cycling-trips">All Cycling Tours</Link>
            <Link href="/cycling-trips/mtb">Mountain Bike</Link>
            <Link href="/cycling-trips/e-mtb">E-MTB Tours</Link>
            <Link href="/cycling-trips/gravel">Gravel Cycling</Link>
            <Link href="/cycling-trips/road">Road Cycling</Link>
            <Link href="/cycling-trips/luxury">Luxury Cycling</Link>
            <Link href="/cycling-trips/private-groups">Private Groups</Link>
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
            <h3>Let's plan</h3>
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

      <style>{`
        .cycling-home {
          --home-ink: #252a24;
          --home-muted: #686b63;
          --home-paper: #fffefa;
          --home-sand: #f4efe3;
          --home-gold: #c88b24;
          color: var(--home-ink);
          background: var(--home-paper);
        }
        .cycling-home__hero {
          position: relative;
          display: flex;
          min-height: min(690px, 78vh);
          align-items: center;
          overflow: hidden;
          background: #26362d;
          color: #fff;
        }
        .cycling-home__hero-image,
        .cycling-home__hero-shade {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .cycling-home__hero-image {
          object-fit: cover;
          object-position: center 48%;
        }
        .cycling-home__hero-shade {
          background: linear-gradient(90deg, rgba(13, 23, 18, .76), rgba(13, 23, 18, .32) 58%, rgba(13, 23, 18, .18)), linear-gradient(0deg, rgba(13, 23, 18, .42), transparent 45%);
        }
        .cycling-home__hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1180px;
          padding-top: 105px;
          padding-bottom: 115px;
        }
        .cycling-home__eyebrow {
          margin: 0 0 15px;
          color: #e6bd79;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .2em;
          line-height: 1.5;
        }
        .cycling-home__hero h1 {
          max-width: 800px;
          margin: 0 0 20px;
          color: #fff;
          font-size: clamp(43px, 7vw, 82px);
          font-weight: 650;
          letter-spacing: -.055em;
          line-height: .99;
        }
        .cycling-home__hero-content > p:not(.cycling-home__eyebrow) {
          max-width: 650px;
          margin: 0;
          color: rgba(255,255,255,.9);
          font-size: clamp(16px, 1.6vw, 19px);
          line-height: 1.75;
        }
        .cycling-home__hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }
        .cycling-home__button {
          display: inline-flex;
          min-height: 46px;
          align-items: center;
          justify-content: center;
          padding: 12px 22px;
          border: 1px solid transparent;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .08em;
          text-align: center;
          text-decoration: none;
          text-transform: uppercase;
          transition: transform .2s ease, background .2s ease, color .2s ease;
        }
        .cycling-home__button:hover { transform: translateY(-2px); }
        .cycling-home__button--gold { background: var(--home-gold); color: #fff; }
        .cycling-home__button--gold:hover { background: #a96f14; }
        .cycling-home__button--light { border-color: rgba(255,255,255,.75); color: #fff; }
        .cycling-home__button--light:hover { background: #fff; color: var(--home-ink); }
        .cycling-home__button--dark { background: #26362d; color: #fff; }
        .cycling-home__button--dark:hover { background: #3b5143; }
        .cycling-home__hero-facts {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 34px;
          margin-top: 45px;
          color: rgba(255,255,255,.85);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .15em;
        }
        .cycling-home__intro {
          padding: 76px 0 82px;
          background: #f7f7f5;
        }
        .cycling-home__intro-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(0, .9fr);
          gap: clamp(32px, 4vw, 58px);
          align-items: stretch;
        }
        .cycling-home__intro-main { min-width: 0; }
        .cycling-home__intro-image {
          height: clamp(300px, 31vw, 430px);
          overflow: hidden;
          border-radius: 18px;
          background: #d8d4ca;
        }
        .cycling-home__intro-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 48%;
        }
        .cycling-home__intro-story { padding: 27px 2px 0; }
        .cycling-home__intro-story > p {
          max-width: 760px;
          margin: 0 0 25px;
          color: var(--home-ink);
          font-size: clamp(15px, 1.35vw, 18px);
          line-height: 1.8;
        }
        .cycling-home__intro-story h3 {
          margin: 0 0 17px;
          color: var(--home-ink);
          font-size: 21px;
          font-weight: 650;
          letter-spacing: -.025em;
        }
        .cycling-home__intro-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .cycling-home__intro-trust span {
          display: inline-flex;
          min-height: 40px;
          align-items: center;
          padding: 9px 14px;
          border: 1px solid #deded9;
          border-radius: 5px;
          background: #fff;
          color: #315b60;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .08em;
        }
        .cycling-home__intro-features {
          display: grid;
          grid-template-columns: 1fr;
          align-content: stretch;
          border-left: 1px solid #e1e2de;
        }
        .cycling-home__intro-feature {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 22px;
          align-content: center;
          padding: 25px 0 25px 34px;
          border-bottom: 1px solid #dedfdb;
        }
        .cycling-home__intro-feature:last-child { border-bottom: 0; }
        .cycling-home__intro-icon {
          display: flex;
          width: 42px;
          height: 42px;
          align-items: flex-start;
          justify-content: center;
          color: #155363;
        }
        .cycling-home__intro-icon svg {
          width: 34px;
          height: 34px;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .cycling-home__intro-feature h3 {
          margin: 0 0 12px;
          color: #155363;
          font-size: clamp(17px, 1.55vw, 21px);
          font-weight: 700;
          line-height: 1.35;
        }
        .cycling-home__intro-feature p {
          max-width: 440px;
          margin: 0;
          color: #5d605e;
          font-size: 15px;
          line-height: 1.7;
        }
        .cycling-home__eyebrow--dark { color: #a66f1d; }
        .cycling-home__section-heading h2,
        .cycling-home__about-heading h2,
        .cycling-home__faq h2 {
          margin: 0;
          color: var(--home-ink);
          font-size: clamp(31px, 4.2vw, 49px);
          font-weight: 600;
          letter-spacing: -.05em;
          line-height: 1.08;
        }
        .cycling-home__section { padding: 78px 0 86px; }
        .cycling-home__section--sand { background: var(--home-sand); }
        .cycling-home__section-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 35px;
          margin-bottom: 34px;
        }
        .cycling-home__section-heading > p {
          max-width: 510px;
          margin: 0 0 3px;
          color: var(--home-muted);
          font-size: 14px;
          line-height: 1.8;
        }
        .cycling-home__style-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }
        .cycling-home__style-card,
        .cycling-home__destination-card,
        .cycling-home__tour-card,
        .cycling-home__guide-card {
          min-width: 0;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 5px 22px rgba(31, 34, 28, .055);
        }
        .cycling-home__style-image,
        .cycling-home__destination-image,
        .cycling-home__tour-image,
        .cycling-home__guide-image {
          position: relative;
          display: block;
          height: 220px;
          overflow: hidden;
          background: #d8d4ca;
        }
        .cycling-home__style-image img,
        .cycling-home__destination-image img,
        .cycling-home__tour-image img,
        .cycling-home__guide-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .45s ease;
        }
        .cycling-home__style-card:hover img,
        .cycling-home__destination-card:hover img,
        .cycling-home__tour-card:hover img,
        .cycling-home__guide-card:hover img { transform: scale(1.045); }
        .cycling-home__style-image > span,
        .cycling-home__destination-image > span,
        .cycling-home__tour-image > span {
          position: absolute;
          bottom: 13px;
          left: 14px;
          padding: 8px 10px;
          background: rgba(31, 43, 35, .88);
          color: #fff;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .13em;
        }
        .cycling-home__style-content { position: relative; padding: 23px 23px 25px; }
        .cycling-home__number {
          display: block;
          margin-bottom: 10px;
          color: #b47b25;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .15em;
        }
        .cycling-home__style-content h3,
        .cycling-home__destination-card h3,
        .cycling-home__tour-card h3,
        .cycling-home__guide-card h3 {
          margin: 0 0 10px;
          color: var(--home-ink);
          font-size: 21px;
          line-height: 1.2;
        }
        .cycling-home__style-content h3 a,
        .cycling-home__destination-card h3 a,
        .cycling-home__tour-card h3 a,
        .cycling-home__guide-card h3 a {
          color: inherit;
          text-decoration: none;
        }
        .cycling-home__style-content p,
        .cycling-home__destination-card p,
        .cycling-home__tour-card p,
        .cycling-home__guide-card p {
          margin: 0 0 17px;
          color: var(--home-muted);
          font-size: 13px;
          line-height: 1.75;
        }
        .cycling-home__text-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #a56c17;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .08em;
          text-decoration: none;
          text-transform: uppercase;
        }
        .cycling-home__text-link:hover { color: #74480c; }
        .cycling-home__destination-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }
        .cycling-home__destination-card > div { padding: 22px 23px 25px; }
        .cycling-home__center-action { display: flex; justify-content: center; margin-top: 32px; }
        .cycling-home__tour-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }
        .cycling-home__tour-image { height: 205px; }
        .cycling-home__tour-content { padding: 21px 22px 23px; }
        .cycling-home__tour-content h3 { min-height: 50px; font-size: 19px; }
        .cycling-home__tour-content > p {
          display: -webkit-box;
          min-height: 92px;
          overflow: hidden;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
        }
        .cycling-home__tour-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 13px 0;
          border-top: 1px solid #e9e5dd;
          border-bottom: 1px solid #e9e5dd;
        }
        .cycling-home__tour-meta span {
          padding: 6px 9px;
          background: #f4f0e8;
          color: #55584f;
          font-size: 10px;
          font-weight: 700;
        }
        .cycling-home__tour-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 13px;
          margin-top: 16px;
        }
        .cycling-home__tour-actions .cycling-home__button { min-height: 39px; padding: 9px 14px; font-size: 9px; }
        .cycling-home__about {
          padding: 82px 0 78px;
          background: #26362d;
          color: #fff;
        }
        .cycling-home__about-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 40px;
        }
        .cycling-home__about-heading h2 {
          max-width: 680px;
          color: #fff;
        }
        .cycling-home__about-heading > p {
          max-width: 450px;
          margin: 0 0 4px;
          color: rgba(255,255,255,.75);
          font-size: 14px;
          line-height: 1.85;
        }
        .cycling-home__reason-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 15px;
          margin-top: 38px;
        }
        .cycling-home__reason-card {
          min-height: 220px;
          padding: 23px 21px;
          border: 1px solid rgba(255,255,255,.18);
          background: rgba(255,255,255,.045);
        }
        .cycling-home__reason-card > span {
          display: block;
          margin-bottom: 23px;
          color: #e6bd79;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .16em;
        }
        .cycling-home__reason-card h3 { margin: 0 0 10px; color: #fff; font-size: 18px; }
        .cycling-home__reason-card p { margin: 0; color: rgba(255,255,255,.72); font-size: 12px; line-height: 1.75; }
        .cycling-home__about-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          margin-top: 31px;
          padding-top: 25px;
          border-top: 1px solid rgba(255,255,255,.18);
        }
        .cycling-home__about-bottom p {
          max-width: 720px;
          margin: 0;
          color: rgba(255,255,255,.82);
          font-size: 14px;
          line-height: 1.7;
        }
        .cycling-home__gallery {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          grid-auto-rows: 180px;
          gap: 12px;
        }
        .cycling-home__gallery-item { display: block; overflow: hidden; background: #ddd8cc; }
        .cycling-home__gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .45s ease;
        }
        .cycling-home__gallery-item:hover img { transform: scale(1.05); }
        .cycling-home__gallery-item--1,
        .cycling-home__gallery-item--4 { grid-row: span 2; }
        .cycling-home__guide-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }
        .cycling-home__guide-image { height: 190px; }
        .cycling-home__guide-card > div { padding: 21px 22px 24px; }
        .cycling-home__guide-card > div > span {
          display: block;
          margin-bottom: 10px;
          color: #a56c17;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .14em;
        }
        .cycling-home__faq { padding: 80px 0; background: #f4efe3; }
        .cycling-home__faq-grid {
          display: grid;
          grid-template-columns: minmax(0, .75fr) minmax(0, 1.25fr);
          gap: clamp(35px, 8vw, 110px);
          align-items: start;
        }
        .cycling-home__faq-grid > div:first-child > p:not(.cycling-home__eyebrow) {
          max-width: 400px;
          color: var(--home-muted);
          font-size: 14px;
          line-height: 1.8;
        }
        .cycling-home__faq-grid .cycling-home__text-link { margin-top: 10px; }
        .cycling-home__faq-list details {
          border-bottom: 1px solid #dcd5c7;
        }
        .cycling-home__faq-list details:first-child { border-top: 1px solid #dcd5c7; }
        .cycling-home__faq-list summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 17px 0;
          color: #292e27;
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          list-style: none;
        }
        .cycling-home__faq-list summary::-webkit-details-marker { display: none; }
        .cycling-home__faq-list summary span { color: #b47b25; font-size: 20px; font-weight: 400; }
        .cycling-home__faq-list details p {
          margin: 0;
          padding: 0 30px 18px 0;
          color: var(--home-muted);
          font-size: 13px;
          line-height: 1.8;
        }
        .cycling-home__cta {
          position: relative;
          display: flex;
          min-height: 440px;
          align-items: center;
          overflow: hidden;
          background: #24352b;
          color: #fff;
        }
        .cycling-home__cta > img,
        .cycling-home__cta-shade {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .cycling-home__cta > img { object-fit: cover; }
        .cycling-home__cta-shade { background: rgba(17, 28, 21, .72); }
        .cycling-home__cta-content {
          position: relative;
          z-index: 1;
          padding-top: 75px;
          padding-bottom: 75px;
        }
        .cycling-home__cta h2 {
          max-width: 700px;
          margin: 0 0 16px;
          color: #fff;
          font-size: clamp(36px, 5vw, 58px);
          letter-spacing: -.05em;
          line-height: 1.04;
        }
        .cycling-home__cta-content > p:not(.cycling-home__eyebrow) {
          max-width: 650px;
          margin: 0;
          color: rgba(255,255,255,.85);
          font-size: 15px;
          line-height: 1.8;
        }
        @media (max-width: 1000px) {
          .cycling-home__intro-layout { grid-template-columns: minmax(0, 1.1fr) minmax(0, .9fr); gap: 25px; }
          .cycling-home__intro-feature { grid-template-columns: 38px minmax(0, 1fr); gap: 15px; padding-left: 22px; }
          .cycling-home__intro-feature p { font-size: 14px; }
          .cycling-home__style-grid,
          .cycling-home__destination-grid,
          .cycling-home__tour-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .cycling-home__reason-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .cycling-home__section-heading,
          .cycling-home__about-heading { align-items: start; flex-direction: column; }
          .cycling-home__section-heading > p,
          .cycling-home__about-heading > p { max-width: 680px; }
        }
        @media (max-width: 680px) {
          .cycling-home__hero { min-height: 610px; }
          .cycling-home__hero-content { padding-top: 90px; padding-bottom: 90px; }
          .cycling-home__hero h1 { font-size: clamp(42px, 12vw, 58px); }
          .cycling-home__hero-facts { gap: 10px 18px; font-size: 9px; }
          .cycling-home__intro { padding: 55px 0 60px; }
          .cycling-home__intro-layout,
          .cycling-home__faq-grid { grid-template-columns: 1fr; gap: 28px; }
          .cycling-home__intro-image { height: 270px; border-radius: 12px; }
          .cycling-home__intro-story { padding-top: 21px; }
          .cycling-home__intro-features { border-left: 0; }
          .cycling-home__intro-feature {
            grid-template-columns: 40px minmax(0, 1fr);
            gap: 15px;
            padding: 22px 0;
            border-top: 1px solid #dedfdb;
            border-bottom: 0;
          }
          .cycling-home__intro-icon { width: 36px; height: 36px; }
          .cycling-home__intro-icon svg { width: 30px; height: 30px; }
          .cycling-home__intro-feature p { font-size: 14px; }
          .cycling-home__section { padding: 58px 0 64px; }
          .cycling-home__section-heading { gap: 15px; margin-bottom: 25px; }
          .cycling-home__style-grid,
          .cycling-home__destination-grid,
          .cycling-home__tour-grid,
          .cycling-home__guide-grid,
          .cycling-home__reason-grid { grid-template-columns: 1fr; }
          .cycling-home__style-image,
          .cycling-home__destination-image { height: 215px; }
          .cycling-home__tour-image { height: 220px; }
          .cycling-home__tour-content > p { min-height: 0; }
          .cycling-home__reason-card { min-height: 0; }
          .cycling-home__about { padding: 60px 0; }
          .cycling-home__about-bottom { align-items: start; flex-direction: column; }
          .cycling-home__gallery {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-auto-rows: 145px;
            gap: 8px;
          }
          .cycling-home__gallery-item--1,
          .cycling-home__gallery-item--4 { grid-row: span 1; }
          .cycling-home__faq { padding: 60px 0; }
          .cycling-home__cta { min-height: 430px; }
          .cycling-home__cta-content { padding-top: 65px; padding-bottom: 65px; }
        }
      `}</style>
    </main>
  );
}