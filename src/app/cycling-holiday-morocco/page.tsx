import Link from "next/link";

const tourTypes = [
  {
    number: "01",
    label: "TRAILS & SINGLETRACK",
    title: "Mountain Bike Tours in Morocco",
    description:
      "Ride ancient mule tracks, rocky singletrack and flowing mountain trails across the High Atlas. Guided MTB tours connect high passes, terraced valleys and traditional Amazigh villages, with routes selected to suit your technical ability, fitness and appetite for adventure. Choose a day ride, a focused trail break or a multi-day expedition with local support and time to experience the landscapes beyond the trail.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/mtb",
    link: "Explore MTB tours",
  },
  {
    number: "02",
    label: "MORE DISTANCE, MORE FREEDOM",
    title: "E-MTB Tours in Morocco",
    description:
      "Electric mountain biking makes it possible to explore further while enjoying the climbs, views and descents that make the Atlas so rewarding. E-MTB itineraries can combine scenic mountain tracks, remote villages and varied terrain, with the daily distance adapted to your group. Whether you are travelling with mixed fitness levels or simply want to discover more in each day, the route is planned around your experience and preferred pace.",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/cycling-trips/e-mtb",
    link: "Discover E-MTB tours",
  },
  {
    number: "03",
    label: "QUIET ROADS & OPEN LANDSCAPES",
    title: "Gravel Cycling Holidays",
    description:
      "Follow quiet paved roads, remote gravel tracks and long routes through Morocco's changing landscapes. Gravel journeys can cross mountain passes, rural valleys and wide open plateaus, linking places that reward a curious, self-propelled traveller. We can plan shorter escapes or multi-day routes, taking account of road surface, elevation, daily distance, support and the kind of riding you most enjoy.",
    image: "/images/gravel-cycling-morocco.jpg",
    href: "/cycling-trips/gravel",
    link: "Explore gravel cycling",
  },
  {
    number: "04",
    label: "CLIMBS & SCENIC ASPHALT",
    title: "Road Cycling in Morocco",
    description:
      "Discover a road cyclist's Morocco through winding mountain roads, long climbs, quiet countryside and dramatic changes in altitude. A well-planned road trip balances satisfying riding with realistic stage lengths, suitable stops and time to appreciate the regions you pass through. Routes can be adjusted for your fitness, training goals and preferred daily elevation, from scenic touring to a more demanding cycling challenge.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/cycling-trips/road",
    link: "View road cycling options",
  },
  {
    number: "05",
    label: "TRAVEL AT YOUR OWN PACE",
    title: "Private Group Cycling Trips",
    description:
      "Travel with friends, a club or your own group on an itinerary shaped around your dates and shared goals. Choose your cycling style, daily distances, preferred accommodation and the regions you want to explore. Private trips give you greater flexibility over the pace and structure of the journey, with route planning and local support organised around the people travelling together.",
    image: "/images/group-cycling-tour-morocco.jpg",
    href: "/cycling-trips/private-groups",
    link: "Plan a private trip",
  },
  {
    number: "06",
    label: "COMFORT & LOCAL DISCOVERY",
    title: "Luxury Cycling Holidays",
    description:
      "Combine rewarding days in the saddle with considered accommodation, regional food and carefully planned logistics. A luxury cycling holiday is still about discovering Morocco actively, but with extra attention to comfort and the details between rides. We can discuss the riding you want to do, the style of places you prefer to stay and the balance of activity, culture and downtime that will make the journey feel right for you.",
    image: "/images/marrakech.jpg",
    href: "/cycling-trips/luxury",
    link: "Explore luxury cycling",
  },
  {
    number: "07",
    label: "ADVENTURES FOR ALL AGES",
    title: "Family Mountain Bike Tours",
    description:
      "A family cycling trip should feel enjoyable and achievable for everyone. Routes can be planned around ages, confidence, riding experience and the time your family wants to spend on the bike. We consider terrain, transfer times, rest breaks and other activities so that cycling is part of a memorable Moroccan holiday rather than a race against the clock.",
    image: "/images/atlas-mountains.jpg",
    href: "/cycling-trips/family",
    link: "Discover family cycling",
  },
  {
    number: "08",
    label: "A CITY BREAK WITH A RIDE",
    title: "Cycling Tours from Marrakech",
    description:
      "Use Marrakech as a starting point for a day on the trails or a longer journey into the surrounding landscapes. In a short transfer, the busy city can give way to foothills, agricultural valleys, mountain villages and open rocky terrain. Choose a ride that fits your schedule, then confirm the meeting point, transfers, equipment and route details with our team before travelling.",
    image: "/images/day-ebike-tour-from-marrakech.jpg",
    href: "/cycling-trips/from-marrakech",
    link: "Find rides from Marrakech",
  },
];

const regions = [
  {
    title: "High Atlas Mountains",
    text: "High passes, rugged valleys, mountain tracks and far-reaching views make the Atlas a natural focus for mountain biking and multi-day cycling. Routes can link traditional villages and remote terrain, with options for riders seeking technical trails or scenic exploration.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Imlil & the Toubkal Region",
    text: "Around Imlil, terraced fields, stone villages and dramatic mountain scenery create a distinctive setting for guided rides. Explore the foothills of the Toubkal region and build a route around the terrain, season and time available to your group.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil-toubkal",
  },
  {
    title: "Agafay & the Desert Landscapes",
    text: "Open rocky terrain and wide horizons offer a different riding experience from the mountains. The Agafay area and routes towards desert regions can add contrast to a cycling holiday, with careful planning around temperature, distance, water and the conditions on the ground.",
    image: "/images/Desert-Agafay-Morocco.jpg",
    href: "/destinations/agafay-desert",
  },
  {
    title: "Marrakech & the Countryside",
    text: "Marrakech makes a practical base for short cycling experiences and the start of longer journeys. Explore rural roads, foothills and nearby communities, or use the city to combine riding with markets, architecture, gardens and Moroccan food.",
    image: "/images/marrakech.jpg",
    href: "/destinations/marrakech",
  },
];

const faqs = [
  {
    question: "What is the best time of year for a cycling holiday in Morocco?",
    answer:
      "Spring and autumn are popular for many regions because daytime temperatures are often more comfortable. Conditions vary with altitude and location: high mountain routes can be cold, while lower and desert areas can become very hot. The best dates depend on your route, riding style and preferred daily effort, so we recommend checking conditions for the specific itinerary before booking.",
  },
  {
    question: "Do I need to be an experienced cyclist?",
    answer:
      "Not every trip requires advanced experience. Some scenic rides suit recreational cyclists, while technical singletrack, long mountain stages and remote routes require stronger skills and fitness. Tell us how often you ride, the terrain you enjoy and your usual daily distance so that the itinerary can be matched to your ability.",
  },
  {
    question: "Can you organise a custom or private cycling holiday?",
    answer:
      "Yes. You can discuss your travel dates, group size, preferred bike type, riding level, destinations and accommodation preferences. The route should also account for realistic daily distances, terrain, transfers and seasonal conditions. These details help shape a practical trip around your priorities.",
  },
  {
    question: "Can I start a cycling tour in Marrakech?",
    answer:
      "Many rides can start in or near Marrakech, depending on the route and duration. Some experiences are designed as day trips, while longer holidays travel further into the Atlas or other regions. Confirm the start point, transfer arrangements, riding time and what is included before your trip.",
  },
  {
    question: "Can I bring my own bike?",
    answer:
      "That depends on the tour and the support arrangements. When you enquire, tell us what bike you ride and whether you plan to travel with it. We can then discuss the practical details that need to be confirmed for your chosen itinerary, including transport and any available bike options.",
  },
  {
    question: "What should I pack?",
    answer:
      "Bring cycling clothing suited to the season, gloves, eye protection, comfortable shoes, sun protection and a reliable hydration system. Mountain routes may require warm layers and a lightweight waterproof, even when lower areas are warm. Once your route is agreed, ask for a trip-specific equipment list.",
  },
];

export default function CyclingHolidayMoroccoPage() {
  return (
    <>
    <main className="cycling-listing">
      <section className="cl-hero">
        <img
          className="cl-hero__image"
          src="/images/mountain-bike-morocco-hero.jpg"
          alt="Cycling adventure in the Atlas Mountains of Morocco"
          fetchPriority="high"
        />
        <div className="cl-hero__shade" />
        <div className="cl-wrap cl-hero__content">
          <p className="cl-eyebrow">MTB · E-MTB · GRAVEL · ROAD CYCLING</p>
          <h1>Cycling Holidays in Morocco</h1>
          <p className="cl-hero__intro">
            Discover Morocco by bike, from Atlas Mountain trails and quiet gravel
            roads to scenic road climbs and rides from Marrakech. Find the style
            of cycling that suits you, then shape a journey around your dates,
            experience and sense of adventure.
          </p>
          <div className="cl-actions">
            <a className="cl-button cl-button--gold" href="#cycling-tours">Explore cycling tours</a>
            <Link className="cl-button cl-button--outline" href="/contact">Plan your trip</Link>
          </div>
          <div className="cl-hero__meta">
            <span>LOCAL KNOWLEDGE</span><span>FLEXIBLE ITINERARIES</span><span>MADE FOR YOUR RIDE</span>
          </div>
        </div>
      </section>

      <section className="cl-intro cl-wrap">
        <div className="cl-intro__heading">
          <p className="cl-eyebrow cl-eyebrow--dark">DISCOVER MOROCCO BY BIKE</p>
          <h2>A cycling holiday shaped around the way you want to explore.</h2>
        </div>
        <div className="cl-intro__copy">
          <p>
            Morocco is a rewarding destination for cyclists because its landscapes
            change so dramatically. The High Atlas offers mountain tracks, steep
            climbs and remote villages; quieter roads and gravel routes cross
            valleys and open plateaus; and the countryside around Marrakech gives
            riders a chance to get out of the city and into a different rhythm.
          </p>
          <p>
            Mountain biking, electric mountain biking, gravel riding and road
            cycling all reveal a different side of the country. The right trip
            depends on your experience, the kind of terrain you enjoy, how far you
            want to ride each day and whether you prefer a short escape or a
            multi-day journey. Start with the tour styles below and contact us to
            discuss the practical details of your ideal route.
          </p>
          <Link className="cl-text-link" href="/about">Meet your local team <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="cl-tours" id="cycling-tours">
        <div className="cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">FIND YOUR RIDE</p>
              <h2>Explore cycling tours in Morocco</h2>
            </div>
            <p>
              From technical trails to long-distance road and gravel journeys,
              explore different ways to experience Morocco by bike. Each trip
              should match your riding level, available time and travel plans.
            </p>
          </div>
          <div className="cl-tour-grid">
            {tourTypes.map((tour) => (
              <article className="cl-tour-card" key={tour.number}>
                <Link className="cl-tour-card__image-link" href={tour.href} aria-label={tour.title}>
                  <img className="cl-tour-card__image" src={tour.image} alt={tour.title} loading="lazy" />
                  <span className="cl-tour-card__number">{tour.number}</span>
                </Link>
                <div className="cl-tour-card__body">
                  <p className="cl-card-label">{tour.label}</p>
                  <h3><Link href={tour.href}>{tour.title}</Link></h3>
                  <p>{tour.description}</p>
                  <Link className="cl-text-link" href={tour.href}>{tour.link} <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cl-dark-band">
        <div className="cl-wrap cl-dark-band__inner">
          <div>
            <p className="cl-eyebrow">YOUR TRIP, YOUR PACE</p>
            <h2>Not sure which cycling tour is right for you?</h2>
          </div>
          <div>
            <p>
              Tell us about your riding experience, the dates you have in mind and
              the kind of landscapes you want to discover. We can help you compare
              tour styles and identify the route details that need to be confirmed
              before you travel.
            </p>
            <Link className="cl-button cl-button--gold" href="/contact">Talk to us about your trip</Link>
          </div>
        </div>
      </section>

      <section className="cl-regions cl-wrap">
        <div className="cl-section-heading">
          <div>
            <p className="cl-eyebrow cl-eyebrow--dark">WHERE WILL YOU RIDE?</p>
            <h2>Discover Morocco's cycling regions</h2>
          </div>
          <p>
            Choose a region for its terrain, scenery and character—or combine
            several areas in a longer journey. The final route should reflect the
            season, riding style and time you have available.
          </p>
        </div>
        <div className="cl-region-grid">
          {regions.map((region, index) => (
            <article className="cl-region-card" key={region.title}>
              <Link className="cl-region-card__image-wrap" href={region.href} aria-label={region.title}>
                <img src={region.image} alt={region.title} loading="lazy" />
                <span>0{index + 1}</span>
              </Link>
              <div className="cl-region-card__body">
                <h3><Link href={region.href}>{region.title}</Link></h3>
                <p>{region.text}</p>
                <Link className="cl-text-link" href={region.href}>Explore the region <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cl-editorial">
        <div className="cl-editorial__image">
          <img src="/images/group-cycling-tour-morocco.jpg" alt="Cyclists discovering Morocco with local support" loading="lazy" />
        </div>
        <div className="cl-editorial__content">
          <p className="cl-eyebrow cl-eyebrow--dark">MORE THAN THE MILES</p>
          <h2>Experience Morocco beyond the bike.</h2>
          <p>
            A cycling holiday is about more than the route on a map. It is the
            mountain village you stop to explore, the changing light across a
            valley, a meal shared after a ride and the local stories that give a
            place its character. Travelling by bike can make these moments part of
            the journey rather than something you pass on the way to the next stop.
          </p>
          <p>
            We believe the best itinerary balances riding with the practical
            details that make a trip enjoyable: sensible stages, time to rest,
            clear arrangements and an understanding of what the terrain demands.
            Tell us what you want from your holiday and we can discuss how to build
            those priorities into the plan.
          </p>
          <Link className="cl-button cl-button--dark" href="/about">Learn about our approach</Link>
        </div>
      </section>

      <section className="cl-why">
        <div className="cl-wrap">
          <div className="cl-section-heading cl-section-heading--light">
            <div>
              <p className="cl-eyebrow">WHY RIDE WITH US</p>
              <h2>Local insight. Thoughtful planning. Better days on the bike.</h2>
            </div>
            <p>
              A successful cycling holiday starts with a route that fits the
              people riding it. We focus on practical planning, honest discussions
              about difficulty and helping you understand what to expect.
            </p>
          </div>
          <div className="cl-why-grid">
            <article><span>01</span><h3>Local knowledge</h3><p>Plan with an understanding of the region, its villages, route options and the conditions that can affect a day of riding.</p></article>
            <article><span>02</span><h3>Routes to suit you</h3><p>Discuss your skills, fitness and preferred terrain before settling on a suitable style of ride and daily distance.</p></article>
            <article><span>03</span><h3>Clear preparation</h3><p>Talk through logistics, equipment, transfers and the details you need to understand before setting off.</p></article>
            <article><span>04</span><h3>Meaningful discovery</h3><p>Make space for landscapes, local food and cultural encounters alongside the riding itself.</p></article>
          </div>
        </div>
      </section>

      <section className="cl-planning cl-wrap">
        <div className="cl-section-heading">
          <div>
            <p className="cl-eyebrow cl-eyebrow--dark">HOW TO GET STARTED</p>
            <h2>From your first idea to a planned cycling trip.</h2>
          </div>
          <p>
            You do not need to have every detail decided before making an enquiry.
            Start with the basics and refine the route as you learn which options
            fit your group and travel dates.
          </p>
        </div>
        <div className="cl-steps">
          <article><span>STEP 01</span><h3>Tell us what you enjoy</h3><p>Share your preferred cycling style, riding background, group size and the kind of experience you want from Morocco.</p></article>
          <article><span>STEP 02</span><h3>Choose a route direction</h3><p>Discuss regions, season, daily distance, terrain and how much time you have available for riding and travel.</p></article>
          <article><span>STEP 03</span><h3>Confirm the details</h3><p>Review the itinerary, logistics, equipment and inclusions before confirming arrangements for your trip.</p></article>
        </div>
      </section>

      <section className="cl-faq">
        <div className="cl-wrap cl-faq__inner">
          <div className="cl-faq__intro">
            <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
            <h2>Frequently asked questions</h2>
            <p>Find answers to common questions about planning a cycling holiday in Morocco. If you need advice for a particular route, contact us with your travel dates and riding preferences.</p>
            <Link className="cl-text-link" href="/contact">Ask us a question <span aria-hidden="true">↗</span></Link>
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
        <img src="/images/atlas-mountains.jpg" alt="Mountain scenery in Morocco" loading="lazy" />
        <div className="cl-final-cta__overlay" />
        <div className="cl-wrap cl-final-cta__content">
          <p className="cl-eyebrow">YOUR MOROCCO CYCLING ADVENTURE</p>
          <h2>Ready to find your ride?</h2>
          <p>Share your dates, riding style and the places you would love to discover. Start a conversation about a cycling holiday that fits your plans.</p>
          <div className="cl-actions">
            <Link className="cl-button cl-button--gold" href="/contact">Plan your cycling holiday</Link>
            <Link className="cl-button cl-button--outline" href="/cycling-trips">Browse cycling trips</Link>
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
            Guided mountain biking, E-MTB, gravel and road cycling experiences
            across Morocco. Discover the landscapes, routes and local culture
            at your own pace.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link href="/cycling-holiday-morocco">All Cycling Tours</Link>
          <Link href="/cycling-trips/mtb">Mountain Bike</Link>
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
          <h3>Let's plan</h3>
          <Link href="/about">About Us</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact">Plan Your Trip</Link>
        </div>
      </div>

      <div className="page-width footer-bottom">
        <span>© {new Date().getFullYear()} Mountain Bike Morocco</span>
        <span>Morocco cycling adventures, thoughtfully planned.</span>
      </div>
    </footer>
    </>
  );
}
