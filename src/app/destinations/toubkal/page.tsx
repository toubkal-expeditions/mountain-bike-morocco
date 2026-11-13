import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mount Toubkal Cycling Tours in Morocco | MTB, E-MTB, Gravel & Road",
  description:
    "Explore the Mount Toubkal region by MTB, E-MTB, gravel or road bike. Discover High Atlas trails, mountain roads and mixed cycling holidays planned around your riding style.",
};

const tours = [
  {
    number: "01",
    discipline: "MTB",
    label: "MOUNTAIN TRAILS & VILLAGE TRACKS",
    title: "Toubkal Foothills MTB Adventure",
    duration: "3 days",
    destination: "TOUBKAL FOOTHILLS",
    description:
      "Explore selected mountain bike trails and tracks in the foothills of Mount Toubkal on a three-day journey through striking High Atlas scenery. The ride can combine rural tracks, rocky terrain and views across traditional villages, with difficulty matched to your experience. Trail access, gradients and conditions should be checked for your travel dates before the route is confirmed.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  },
  {
    number: "02",
    discipline: "MTB · EXPEDITION",
    label: "MULTI-DAY MOUNTAIN RIDING",
    title: "Toubkal Cycling Expedition",
    duration: "5 days",
    destination: "TOUBKAL & HIGH ATLAS",
    description:
      "Spend five days exploring the Toubkal region and surrounding Atlas landscapes by mountain bike. An expedition-style itinerary can connect suitable trails and valley tracks while leaving room for transfers, recovery and village stops. The exact route should reflect your fitness, bike handling skills, daily-distance preferences and the terrain conditions expected during your trip.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
  },
  {
    number: "03",
    discipline: "MTB · ENDURO",
    label: "TECHNICAL TRAILS & DESCENTS",
    title: "Atlas Enduro Cycling Tour",
    duration: "4 days",
    destination: "ATLAS MOUNTAINS",
    description:
      "For confident riders who enjoy technical terrain, this four-day enduro concept focuses on selected mountain descents, rugged tracks and climbing between ride zones. Difficulty depends on trail surface, exposure and current access, so honest information about experience and bike setup is essential. Discuss support, transfers and easier alternatives before the itinerary is finalised.",
    image: "/images/enduro-morrocco-cycling-tour.jpg",
  },
  {
    number: "04",
    discipline: "E-MTB",
    label: "ELECTRIC-ASSISTED MOUNTAIN ROUTES",
    title: "Toubkal E-MTB Adventure",
    duration: "3 days",
    destination: "TOUBKAL REGION",
    description:
      "Discover suitable mountain routes around the Toubkal region with electric assistance on the climbs. A three-day ride can balance time on the bike with views, village stops and recovery, but still needs careful planning around gradients, rocky surfaces, battery capacity and charging. Route choice should suit every rider's handling skills and the expected conditions.",
    image: "/images/eBike-tour-atlas-mountains-morocco.jpg",
  },
  {
    number: "05",
    discipline: "E-MTB",
    label: "HIGH ATLAS CLIMBS & VALLEYS",
    title: "High Atlas E-MTB Tour",
    duration: "4 days",
    destination: "HIGH ATLAS MOUNTAINS",
    description:
      "Use four days to explore selected tracks, valleys and mountain scenery in the High Atlas on an electric mountain bike. Electric assistance can help manage climbing effort, while route planning must still consider elevation, surface, battery range and possible charging stops. Daily stages should be realistic for your group and confirmed after the routes and logistics have been reviewed.",
    image: "/images/e-mtb-tour-morocco.jpg",
  },
  {
    number: "06",
    discipline: "E-MTB · PRIVATE",
    label: "VILLAGES & PANORAMIC RIDING",
    title: "Toubkal and Atlas Valleys E-MTB Journey",
    duration: "5 days",
    destination: "TOUBKAL & ATLAS VALLEYS",
    description:
      "A five-day electric mountain bike journey can connect selected valleys and mountain villages around the Toubkal region, depending on route access and conditions. Plan the ride around battery needs, daily elevation, charging opportunities, transfers and accommodation. The balance of riding and time to explore can be tailored to the experience and pace of your group.",
    image: "/images/group-ebike-tour-morocco.jpg",
  },
  {
    number: "07",
    discipline: "GRAVEL",
    label: "RURAL ROADS & GRAVEL PISTES",
    title: "Toubkal and Atlas Gravel Tour",
    duration: "3 days",
    destination: "TOUBKAL & ATLAS",
    description:
      "Explore suitable rural roads and gravel tracks near the Toubkal region on a three-day cycling break. Surface quality and gradients vary, so the route should be chosen around your tyres, riding confidence, daily distance and the conditions on the ground. Allow time for water stops, route checks and transfers between riding areas where needed.",
    image: "/images/gravel-bike-atlas-mountains.JPG",
  },
  {
    number: "08",
    discipline: "GRAVEL",
    label: "VILLAGES & OPEN MOUNTAIN TRACKS",
    title: "High Atlas Villages Gravel Adventure",
    duration: "4 days",
    destination: "HIGH ATLAS VILLAGES",
    description:
      "Ride through selected Atlas foothill landscapes on a four-day gravel trip that combines quieter roads, rougher tracks and village scenery where practical. The itinerary should account for climbing, surface changes, water availability, navigation and the distance between services. Share your preferred pace and gravel experience so suitable stages can be considered.",
    image: "/images/gravel-cycling-morocco.jpg",
  },
  {
    number: "09",
    discipline: "GRAVEL · MULTI-REGION",
    label: "MOUNTAINS TOWARDS THE SOUTH",
    title: "Atlas to Desert Gravel Journey",
    duration: "6 days",
    destination: "ATLAS TO DESERT",
    description:
      "Discuss a six-day gravel journey linking suitable Atlas foothill routes with changing landscapes farther south. Connecting regions requires realistic transfer times and careful choices about road surfaces, daily distance and support. The final itinerary should be built around your dates and preferences, with route conditions and logistical details checked before travel.",
    image: "/images/atlas-to-desert-biking-tour.jpg",
  },
  {
    number: "10",
    discipline: "ROAD",
    label: "PAVED ROADS & MOUNTAIN SCENERY",
    title: "Toubkal Region Road Cycling Tour",
    duration: "3 days",
    destination: "TOUBKAL REGION",
    description:
      "Discover suitable paved roads around the Toubkal region and Atlas foothills on a three-day road cycling break. The route should fit your climbing experience, preferred daily distance and comfort riding on shared roads. Traffic, weather, road surface and transfers must be considered when choosing each stage, with recovery time built into the plan.",
    image: "/images/road-cycling-tour-morocco.jpg",
  },
  {
    number: "11",
    discipline: "ROAD · CLIMBING",
    label: "MOUNTAIN PASSES & PANORAMIC RIDES",
    title: "Atlas Mountain Passes Road Tour",
    duration: "4 days",
    destination: "ATLAS MOUNTAIN PASSES",
    description:
      "Spend four days riding selected paved climbs and mountain roads in the wider Toubkal and High Atlas region. A good itinerary balances elevation and distance with the group's fitness, road conditions, traffic and opportunities to recover. Specific passes and stages should only be selected after checking current access and the conditions for your travel dates.",
    image: "/images/road-cycling-morocco.jpg",
  },
  {
    number: "12",
    discipline: "ROAD · PRIVATE TOUR",
    label: "A LONGER ATLAS CYCLING HOLIDAY",
    title: "Toubkal to Marrakech Road Cycling Journey",
    duration: "5 days",
    destination: "TOUBKAL TO MARRAKECH",
    description:
      "Combine selected Atlas road routes with a journey towards Marrakech over five days, subject to suitable roads and confirmed logistics. Daily climbs, traffic, transfer requirements and the group's preferred pace should shape the route. Discuss your cycling level, travel dates and accommodation preferences before choosing the final stages.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
  },
];

const regions = [
  {
    title: "Imlil Valley",
    text:
      "Explore terraced fields, mountain villages and rugged scenery in the valley below Toubkal. Routes can be considered for MTB, E-MTB, gravel or road cycling depending on the specific terrain, conditions and the experience of your group.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil",
  },
  {
    title: "High Atlas Mountains",
    text:
      "The wider High Atlas offers mountain tracks, climbing roads and changing landscapes. Choose appropriate routes based on bike type, elevation, surface conditions, season and the amount of riding time available.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Ouirgane Valley",
    text:
      "A quieter landscape of cultivated valleys, village roads and rural tracks to consider as part of a broader Atlas cycling trip. Route suitability depends on the chosen discipline, track surface and current conditions.",
    image: "/images/ouirgane-valley-ebike-tour.jpg",
    href: "/destinations/ouirgane",
  },
  {
    title: "Marrakech & the Foothills",
    text:
      "Marrakech can be a starting or finishing point for cycling trips into the Atlas. Confirm meeting points, traffic considerations, transfers and the route surface for the chosen riding style.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/destinations/marrakech",
  },
];

const faqs = [
  {
    question: "Which cycling styles can I enjoy around Mount Toubkal?",
    answer:
      "You can enquire about MTB, E-MTB, gravel and road cycling options, depending on the specific route and conditions. Technical trails, rough tracks and paved roads each call for different equipment and skills. The itinerary should be matched to your preferred discipline, experience and travel dates.",
  },
  {
    question: "Is the Toubkal region suitable for beginner cyclists?",
    answer:
      "Some easier road or track options may suit recreational cyclists, while technical trails, steep climbs and rough surfaces require more experience. Share your usual riding distance, fitness and handling confidence so an appropriate route can be discussed. Not every mountain route is suitable for every rider or bicycle.",
  },
  {
    question: "When is the best time to cycle around Mount Toubkal?",
    answer:
      "Spring and autumn are often comfortable periods for many lower and mid-altitude routes, but conditions depend on elevation and the specific itinerary. Higher areas can be cold or affected by snow, while lower valleys can become hot. Check the conditions for your planned route and travel dates before confirming a trip.",
  },
  {
    question: "Can I combine MTB, E-MTB, gravel and road cycling in one holiday?",
    answer:
      "A mixed cycling holiday may be possible if route locations, bike availability, transfers and group preferences are compatible. Each discipline needs suitable surfaces and equipment, so discuss the order of activities, bike logistics and daily distances before settling on an itinerary.",
  },
  {
    question: "What should I consider for an E-MTB ride in the Toubkal region?",
    answer:
      "Battery range depends on capacity, elevation, assistance settings, terrain, temperature and riding style. Longer or remote rides need a realistic battery margin and a plan for charging or support where available. Confirm route conditions and the bike arrangements before departure.",
  },
  {
    question: "Can I arrange a private cycling holiday around Toubkal?",
    answer:
      "You can enquire about a private trip for friends, couples or a group travelling together. Share your dates, group size, preferred cycling discipline, experience and accommodation preferences. These details help identify suitable route options and practical arrangements to confirm before travel.",
  },
];

export default function ToubkalDestinationPage() {
  return (
    <>
      <main className="cycling-listing toubkal-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/toubkal-imlil-enduro-mtb-expedition.jpg"
            alt="Mountain cycling scenery around Toubkal in Morocco's High Atlas"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">MOUNT TOUBKAL · HIGH ATLAS · MOROCCO</p>
            <h1>Mount Toubkal Cycling Tours in Morocco</h1>
            <p className="cl-hero__intro">
              Discover the Mount Toubkal region and surrounding Atlas Mountains through
              a choice of MTB trails, E-MTB adventures, gravel routes and road
              cycling. From shorter rides to multi-day journeys, explore route
              options shaped around your experience, preferred bike and the
              landscapes you want to see.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href={{ pathname: "/contact", query: { destination: "Mount Toubkal", request: "planning" } }}>
                Plan Your Mount Toubkal Trip
              </Link>
              <Link className="cl-button cl-button--outline" href="#toubkal-tours">
                Explore Cycling Tours
              </Link>
            </div>
            <div className="cl-hero__meta">
              <span>MTB · E-MTB · GRAVEL · ROAD</span>
              <span>PRIVATE OPTIONS</span>
              <span>ROUTES TO SUIT YOUR LEVEL</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">RIDE THE MOUNT TOUBKAL REGION</p>
            <h2>One iconic mountain region. Four ways to explore it by bike.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              Toubkal sits in a striking mountain landscape of terraced fields,
              traditional settlements and rugged slopes below the High Atlas.
              The area can be a starting point for different cycling
              experiences, from technical mountain bike trails and electric-
              assisted climbs to gravel outings and road rides on suitable
              paved routes. The best choice depends on the route, the season
              and the kind of riding you enjoy.
            </p>
            <p>
              A good itinerary begins with an honest conversation about fitness,
              handling skills, bike type, daily distance and available time.
              MTB and enduro routes may involve rough or technical surfaces;
              E-MTB plans need to account for battery use; gravel journeys
              depend on the condition of tracks; and road cycling stages should
              reflect elevation, traffic and the condition of paved roads.
              Checking these details helps keep the plan practical for your
              group.
            </p>
            <p>
              You can start with a short local ride or discuss a longer journey
              connecting selected valleys and riding areas. Time for transfers,
              recovery, village stops and changing mountain conditions should
              be built into the plan rather than added at the last minute.
            </p>
            <Link className="cl-text-link" href="/destinations/atlas-mountains">
              Explore the Atlas Mountains <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="toubkal-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR CYCLING STYLE</p>
                <h2>MTB, E-MTB, gravel and road tours around Mount Toubkal</h2>
              </div>
              <p>
                Explore a mixed collection of cycling trip ideas for the Toubkal
                Valley and nearby Atlas routes. Durations are starting points
                for planning; the final route, inclusions, availability and
                daily stages should be confirmed for your dates and group.
              </p>
            </div>
            <div className="cl-tour-grid">
              {tours.map((tour) => (
                <article className="home-tour-card" key={tour.number}>
                  <Link
                    className="home-tour-card__image"
                    href={{ pathname: "/contact", query: { tour: tour.title, request: "details" } }}
                    aria-label={`More details about ${tour.title}`}
                  >
                    <img src={tour.image} alt={tour.title} loading="lazy" />
                    <span className="home-tour-card__category">{tour.label}</span>
                    <span className="home-tour-card__level">{tour.destination}</span>
                  </Link>
                  <div className="home-tour-card__body">
                    <p className="home-tour-card__eyebrow">
                      {tour.discipline.includes("ROAD")
                        ? "ROAD CYCLING TOUR"
                        : tour.discipline.includes("GRAVEL")
                          ? "GRAVEL CYCLING TOUR"
                          : tour.discipline.includes("E-MTB")
                            ? "E-MTB TOUR"
                            : "MOUNTAIN BIKE TOUR"}
                    </p>
                    <h3 className="home-tour-card__title">
                      <Link href={{ pathname: "/contact", query: { tour: tour.title, request: "details" } }}>
                        {tour.title}
                      </Link>
                    </h3>
                    <p className="home-tour-card__description">{tour.description}</p>
                    <div className="home-tour-card__meta">
                      <span className="home-tour-card__meta-item">
                        <span className="home-tour-card__meta-icon" aria-hidden="true">◷</span>
                        {tour.duration}
                      </span>
                    </div>
                    <div className="home-tour-card__actions">
                      <Link
                        className="home-tour-card__button"
                        href={{ pathname: "/contact", query: { tour: tour.title, request: "details" } }}
                      >
                        Explore Tour
                      </Link>
                      <Link
                        className="home-tour-card__link"
                        href={{ pathname: "/contact", query: { tour: tour.title, request: "booking" } }}
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
              <p className="cl-eyebrow">YOUR BIKE. YOUR ROUTE. YOUR PACE.</p>
              <h2>Choose a cycling experience that fits the mountain terrain.</h2>
            </div>
            <div>
              <p>
                The right ride depends on more than distance alone. Technical
                trails need suitable handling skills, electric bikes need a
                realistic battery plan, gravel routes require the right tyres
                and road stages depend on climbing, traffic and conditions.
                Share your preferences and we can discuss which options may fit
                your group before an itinerary is confirmed.
              </p>
              <Link className="cl-button cl-button--gold" href={{ pathname: "/contact", query: { destination: "Mount Toubkal", request: "planning" } }}>
                Discuss Your Cycling Plans
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">EXPLORE NEARBY AREAS</p>
              <h2>Discover more of the High Atlas</h2>
            </div>
            <p>
              Toubkal can be one part of a wider cycling holiday. Depending on
              your chosen bike and the route conditions, explore nearby valleys
              or connect the area with a journey starting from Marrakech.
            </p>
          </div>
          <div className="cl-region-grid">
            {regions.map((region, index) => (
              <article className="home-tour-card" key={region.title}>
                <Link
                  className="home-tour-card__image"
                  href={region.href}
                  aria-label={region.title}
                >
                  <img src={region.image} alt={region.title} loading="lazy" />
                  <span className="home-tour-card__category">CYCLING DESTINATION</span>
                  <span className="home-tour-card__level">0{index + 1}</span>
                </Link>
                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">WHERE TO RIDE</p>
                  <h3 className="home-tour-card__title">
                    <Link href={region.href}>{region.title}</Link>
                  </h3>
                  <p className="home-tour-card__description">{region.text}</p>
                  <div className="home-tour-card__actions">
                    <Link className="home-tour-card__button" href={region.href}>
                      Explore Destination
                    </Link>
                    <Link className="home-tour-card__link" href={region.href}>
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
            <img src="/images/toubkal-imlil-enduro-mtb-expedition.jpg" alt="Cycling terrain in the Mount Toubkal region of Morocco" loading="lazy" />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">BEYOND THE RIDE</p>
            <h2>Make time for the villages, valleys and mountain views.</h2>
            <p>
              The experience of cycling around Toubkal is not measured only in
              kilometres. A ride may bring you through cultivated valleys,
              mountain settlements and landscapes that change with every
              turn. Leaving room for pauses and local experiences can make the
              journey feel more rewarding than rushing through a list of
              stages.
            </p>
            <p>
              Good planning helps make those moments possible. Consider the
              cycling discipline, daily effort, transfers, accommodation,
              equipment, seasonal conditions and the preferences of everyone
              in the group. Whether you choose MTB, E-MTB, gravel or road
              cycling, the itinerary should be grounded in suitable routes and
              realistic travel times.
            </p>
            <Link className="cl-button cl-button--dark" href="/about">Learn About Our Approach</Link>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">PLAN WITH LOCAL KNOWLEDGE</p>
                <h2>A practical plan for your preferred style of cycling.</h2>
              </div>
              <p>
                Routes vary across the mountain region, so the itinerary should
                take account of your preferred cycling style, abilities and
                the conditions at your travel dates. Discuss the practical
                details before final arrangements are made.
              </p>
            </div>
            <div className="cl-why-grid">
              <article><span>01</span><h3>Choice of disciplines</h3><p>Compare MTB, E-MTB, gravel and road options according to the surfaces and experience you want.</p></article>
              <article><span>02</span><h3>Routes matched to you</h3><p>Discuss fitness, handling skills, daily distance and the amount of climbing that feels right for your group.</p></article>
              <article><span>03</span><h3>Realistic logistics</h3><p>Consider transfers, bike setup, accommodation, luggage and battery needs where relevant.</p></article>
              <article><span>04</span><h3>Time to explore</h3><p>Allow space for mountain scenery, village stops, rest and changing conditions along the route.</p></article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">PLAN YOUR MOUNT TOUBKAL CYCLING HOLIDAY</p>
              <h2>Three steps to start planning your trip.</h2>
            </div>
            <p>
              You do not need a complete itinerary before contacting us. Start
              with your travel dates, preferred cycling style and group details,
              then discuss routes and practical arrangements.
            </p>
          </div>
          <div className="cl-steps">
            <article><span>STEP 01</span><h3>Choose your riding style</h3><p>Tell us whether you prefer MTB trails, electric-assisted riding, gravel tracks, paved roads or a combination.</p></article>
            <article><span>STEP 02</span><h3>Discuss route options</h3><p>Compare duration, terrain, elevation, daily distances, season and the experience of everyone taking part.</p></article>
            <article><span>STEP 03</span><h3>Confirm the details</h3><p>Review route suitability, bike requirements, transfers, accommodation, availability and inclusions before booking.</p></article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
              <h2>Mount Toubkal region cycling: frequently asked questions</h2>
              <p>Find answers to common questions about cycling disciplines, routes and planning a ride around Toubkal. Contact us with your dates and preferences to discuss a more specific itinerary.</p>
              <Link className="cl-text-link" href={{ pathname: "/contact", query: { destination: "Mount Toubkal", request: "details" } }}>Ask us about your trip <span aria-hidden="true">↗</span></Link>
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
          <img src="/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg" alt="Cycling through mountain scenery in Morocco's Atlas region" loading="lazy" />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR NEXT MOUNT TOUBKAL ADVENTURE</p>
            <h2>Ready to explore the High Atlas by bike?</h2>
            <p>
              Tell us when you would like to travel, which cycling style you
              prefer and how much time you have. We can start discussing
              suitable route options around Toubkal, nearby valleys and the wider
              Atlas region.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href={{ pathname: "/contact", query: { destination: "Mount Toubkal", request: "planning" } }}>Plan Your Toubkal Holiday</Link>
              <Link className="cl-button cl-button--outline" href="/destinations">Explore All Destinations</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer cycling-listing__footer">
        <div className="page-width footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <img className="brand__logo" src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" />
              <span>MOUNTAIN BIKE <em>MOROCCO</em></span>
            </Link>
            <p>Guided mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, trails and local culture at your own pace.</p>
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
            <Link href="/destinations/imlil">Mount Toubkal region</Link>
            <Link href="/destinations/toubkal">Mount Toubkal</Link>
            <Link href="/destinations/marrakech">Marrakech</Link>
            <Link href="/destinations">All Destinations</Link>
          </div>
          <div>
            <h3>Let's plan</h3>
            <Link href="/about">About Us</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/contact">Contact</Link>
            <Link href={{ pathname: "/contact", query: { destination: "Mount Toubkal", request: "planning" } }}>Plan Your Trip</Link>
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