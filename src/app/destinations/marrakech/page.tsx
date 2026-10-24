import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marrakech Cycling Tours | MTB, E-MTB, Gravel & Road",
  description:
    "Discover cycling tours from Marrakech, Morocco. Explore mountain biking, E-MTB, gravel and road cycling around Agafay, the Atlas foothills, Ourika and nearby valleys.",
};

const tours = [
  {
    number: "01",
    discipline: "MTB",
    label: "TRAILS JUST BEYOND THE CITY",
    title: "Marrakech Mountain Bike Day Tour",
    duration: "1 day",
    description:
      "Leave the busy streets behind for a guided mountain bike ride in the countryside around Marrakech. Depending on your experience and the route selected, the day can include rural tracks, rolling foothills, open views and stops to appreciate the landscape. Confirm the meeting point, transfer time, trail surface, equipment and expected riding difficulty before setting off.",
    image: "/images/day-ebike-tour-from-marrakech.jpg",
  },
  {
    number: "02",
    discipline: "MTB · ATLAS",
    label: "MOUNTAIN TRACKS & VILLAGE ROUTES",
    title: "Marrakech to Atlas MTB Adventure",
    duration: "3 days",
    description:
      "Use Marrakech as the starting point for a three-day mountain bike escape towards selected Atlas foothill routes and traditional villages. A short multi-day trip can balance time on the bike with transfers and opportunities to enjoy the mountain scenery. The route should be chosen around handling skills, fitness, seasonal conditions and the technical demands of each trail.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
  },
  {
    number: "03",
    discipline: "MTB · ENDURO",
    label: "TECHNICAL TERRAIN & DESCENTS",
    title: "Atlas Foothills Enduro Tour from Marrakech",
    duration: "2 days",
    description:
      "For riders who enjoy more technical terrain, an enduro-focused escape can connect selected mountain tracks and descent-oriented trails outside Marrakech. The suitable route depends on your bike, fitness, confidence on loose surfaces and experience with steeper sections. Confirm trail access, recent conditions, transfers and the level of technical difficulty before the itinerary is finalised.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  },
  {
    number: "04",
    discipline: "E-MTB",
    label: "ELECTRIC-ASSISTED COUNTRYSIDE RIDING",
    title: "Marrakech E-MTB Day Adventure",
    duration: "1 day",
    description:
      "Explore the countryside around Marrakech on an electric mountain bike, with a route planned around your available time and riding experience. Pedal assistance can make some climbs more manageable, but trail surface and bike handling still matter. Discuss battery capacity, assistance settings, elevation, water stops, transfers and equipment before confirming the ride.",
    image: "/images/e-mtb-tour-from-marrakech.jpg",
  },
  {
    number: "05",
    discipline: "E-MTB · ATLAS",
    label: "CLIMBS, VALLEYS & MOUNTAIN VIEWS",
    title: "Marrakech and Atlas E-Bike Tour",
    duration: "4 days",
    description:
      "Combine time in Marrakech with several days of electric-assisted riding on suitable routes in the nearby Atlas region. The itinerary can include changing landscapes and rural settlements, with distances planned around elevation, terrain and your group's battery range. Charging opportunities, transfers, overnight stops and the technical demands of each stage should be reviewed before travel.",
    image: "/images/eBike-tour-atlas-mountains-morocco.jpg",
  },
  {
    number: "06",
    discipline: "E-MTB · PRIVATE",
    label: "A PERSONALISED RIDING BREAK",
    title: "Private Marrakech E-MTB Holiday",
    duration: "3 days",
    description:
      "A private E-MTB trip gives your group flexibility to choose dates, riding pace and the balance between time on the trails and exploring Marrakech. Share your bike type, group size, riding level and accommodation preferences so that battery range, charging, transfers and daily stages can be considered together. The final plan should reflect the routes available and the expected conditions.",
    image: "/images/group-ebike-tour-morocco.jpg",
  },
  {
    number: "07",
    discipline: "GRAVEL",
    label: "QUIET ROADS & RURAL TRACKS",
    title: "Marrakech Gravel Cycling Escape",
    duration: "2 days",
    description:
      "Discover the rural landscapes outside Marrakech on a short gravel cycling escape. A suitable route can link quiet paved roads with selected unpaved sections, depending on surface condition and your bike setup. Before setting off, check tyre suitability, navigation, water access, distance and elevation so the ride matches the group and leaves time to enjoy the countryside.",
    image: "/images/gravel-cycling-morocco.jpg",
  },
  {
    number: "08",
    discipline: "GRAVEL · AGAFAY",
    label: "OPEN TERRAIN & WIDE HORIZONS",
    title: "Marrakech to Agafay Gravel Tour",
    duration: "1 day",
    description:
      "Ride from the Marrakech area towards selected routes around the rocky landscapes of Agafay. The open scenery offers a contrast to the greener mountain valleys, but exposed terrain, loose stones and heat can make a ride demanding. Plan around water, sun protection, tyre choice, route access and a realistic pace, with the exact route checked for current conditions.",
    image: "/images/Desert-Agafay-Morocco.jpg",
  },
  {
    number: "09",
    discipline: "GRAVEL · ATLAS",
    label: "VILLAGES & FOOTHILL PISTES",
    title: "Marrakech to Atlas Gravel Journey",
    duration: "4 days",
    description:
      "Spend several days exploring suitable gravel roads and rural tracks between Marrakech and selected Atlas foothill areas. The journey can combine open countryside, village landscapes and changing mountain views. Daily distances should be based on the actual surface, elevation and services along the route, with time allowed for transfers, navigation and stops.",
    image: "/images/gravel-adventure-bike-morocco.jpg",
  },
  {
    number: "10",
    discipline: "ROAD",
    label: "PAVED CLIMBS & COUNTRYSIDE ROADS",
    title: "Marrakech Road Cycling Day Ride",
    duration: "1 day",
    description:
      "Discover the countryside around Marrakech by road bike on a paved route chosen to suit your fitness and available time. The day can focus on steady riding, scenic roads and a manageable amount of climbing, depending on the route. Traffic, road surfaces, start time, water stops and your preferred daily distance should be considered when the ride is planned.",
    image: "/images/road-cycling-tour-morocco.jpg",
  },
  {
    number: "11",
    discipline: "ROAD · ATLAS",
    label: "CLIMBING & MOUNTAIN SCENERY",
    title: "Marrakech to Atlas Road Cycling Tour",
    duration: "4 days",
    description:
      "Use Marrakech as a base for a multi-day road cycling journey into selected Atlas foothill areas. The route can include paved climbs and scenic countryside riding, with daily stages adapted to your experience and comfort on shared roads. Confirm gradients, surface conditions, traffic exposure, support and transfers before committing to the itinerary.",
    image: "/images/adventure-road-cycling-morocco.jpg",
  },
  {
    number: "12",
    discipline: "ROAD · MULTI-REGION",
    label: "FROM THE RED CITY TOWARDS THE COAST",
    title: "Marrakech to Atlantic Road Cycling Journey",
    duration: "6 days",
    description:
      "Discuss a six-day road cycling itinerary connecting Marrakech with selected routes towards the Atlantic region. A practical plan needs to balance ride days with the distances between regions, traffic, road quality, elevation and available support. The final stages and overnight stops should be confirmed around your travel dates, preferred daily mileage and recovery needs.",
    image: "/images/atlantic-coast-cycling-tour-morocco.jpg",
  },
];

const regions = [
  {
    title: "Marrakech Countryside",
    text:
      "The countryside around Marrakech can suit short guided rides and the start of longer cycling journeys. The right route depends on your chosen bike, preferred distance, traffic conditions and the surfaces available beyond the city.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/cycling-trips/from-marrakech",
  },
  {
    title: "Agafay Rocky Desert",
    text:
      "Agafay offers an open, rocky landscape within reach of Marrakech. Selected MTB, E-MTB and gravel rides may be possible depending on surface and route access. Take account of heat, water, exposure and tyre suitability when planning a ride.",
    image: "/images/Agafay-desert-morocco.jpg",
    href: "/destinations/agafay-desert",
  },
  {
    title: "Atlas Foothills",
    text:
      "The Atlas foothills bring mountain views, rural tracks and routes towards traditional settlements. MTB, E-MTB, gravel and road options each need to be matched to the actual terrain, elevation, your experience and the time available.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Ourika and Nearby Valleys",
    text:
      "Routes towards the Ourika area can add mountain scenery and rural landscapes to a Marrakech stay. The best approach depends on road and track conditions, distance, climbing, transfer time and whether you want a day ride or part of a longer trip.",
    image: "/images/morocco-berber-valley.jpg",
    href: "/destinations/imlil",
  },
];

const faqs = [
  {
    question: "What types of cycling tours can I take from Marrakech?",
    answer:
      "You can enquire about MTB, E-MTB, gravel and road cycling experiences, from short rides to multi-day itineraries. The right choice depends on your experience, preferred bike, riding time and the route surface. Confirm the exact itinerary, equipment, transfers and support before booking.",
  },
  {
    question: "Is Marrakech a good base for mountain biking?",
    answer:
      "Marrakech can be a convenient starting point for rides in the surrounding countryside and selected Atlas foothill areas. Technical difficulty and trail access vary, so the specific route should be chosen around your handling skills, fitness, equipment and current conditions rather than assuming every trail suits every rider.",
  },
  {
    question: "Can I cycle in the Agafay area?",
    answer:
      "You can enquire about suitable routes around Agafay, particularly for MTB and gravel-style riding. Rocky terrain and exposure can make the ride more demanding than the distance suggests. Check route access, water requirements, temperature, tyres and the group's experience before setting out.",
  },
  {
    question: "When is the best time for cycling around Marrakech?",
    answer:
      "Spring and autumn are often considered for many rides in the region, but conditions depend on the route, elevation and travel dates. Lower and exposed areas can become very hot in summer, while mountain routes can be cooler. Check the forecast and plan start times, hydration and daily distance accordingly.",
  },
  {
    question: "Can I combine Marrakech with an Atlas Mountains cycling trip?",
    answer:
      "A trip can potentially combine time in Marrakech with riding in selected Atlas areas. The itinerary needs to account for transfers, ride duration, daily climbing, rest time and the cycling discipline you prefer. Discuss travel dates and riding experience so that distances and logistics can be considered realistically.",
  },
  {
    question: "Can I book a private cycling tour from Marrakech?",
    answer:
      "You can enquire about a private ride or multi-day holiday. Share your dates, group size, cycling style, experience, preferred distance and equipment needs. Availability, route conditions, inclusions and support arrangements should be confirmed before final booking.",
  },
];

export default function MarrakechDestinationPage() {
  return (
    <>
      <main className="cycling-listing marrakech-destination-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/mountain-bike-morocco-hero.jpg"
            alt="Cycling landscapes around Marrakech and Morocco's Atlas Mountains"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">MARRAKECH · AGAFAY · ATLAS FOOTHILLS</p>
            <h1>Cycling Tours from Marrakech, Morocco</h1>
            <p className="cl-hero__intro">
              Discover Morocco on two wheels from the Red City. Explore MTB trails, electric-assisted mountain rides, gravel routes and road cycling options around Marrakech, Agafay and the Atlas foothills, with each journey planned around your riding experience, available time and preferred terrain.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { destination: "Marrakech", request: "planning" } }}
              >
                Plan Your Marrakech Trip
              </Link>
              <Link className="cl-button cl-button--outline" href="#marrakech-tours">
                Explore Cycling Tours
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
            <p className="cl-eyebrow cl-eyebrow--dark">START IN THE RED CITY</p>
            <h2>City culture, open landscapes and four ways to explore by bike.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              Marrakech offers a practical starting point for a cycling holiday that can range from a short countryside ride to a longer journey into the Atlas Mountains or towards the Atlantic. Leaving the busy city behind brings a change of pace, with rural roads, open foothills, villages and desert-edge scenery all possible depending on the route selected. Cycling gives you an opportunity to experience the landscape beyond the main sights and build a trip around the kind of riding you enjoy.
            </p>
            <p>
              Different disciplines call for different routes. MTB and enduro rides may involve rough tracks or technical descents; E-MTB itineraries need to account for battery capacity and elevation; gravel journeys depend on surface quality; and road cycling stages should reflect gradients, traffic and paved-road conditions. Share your experience, bike setup and preferred daily distance early so that the proposed route can be assessed realistically.
            </p>
            <p>
              Whether you want a single ride during a city break or several days linking Marrakech with the surrounding countryside, good planning should leave room for transfers, water stops, recovery and local discoveries. Exact routes, availability and inclusions should be confirmed for your travel dates.
            </p>
            <Link className="cl-text-link" href="/cycling-trips/from-marrakech">
              Explore all cycling trips from Marrakech <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="marrakech-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR CYCLING STYLE</p>
                <h2>MTB, E-MTB, gravel and road tours from Marrakech</h2>
              </div>
              <p>
                Explore a mixed collection of short rides and multi-day trip ideas based around Marrakech and nearby regions. Each route needs to be matched to the right bike, riding level, season and available time. Durations are starting points for planning; the final itinerary and details should be confirmed before booking.
              </p>
            </div>
            <div className="cl-tour-grid">
              {tours.map((tour) => (
                <article className="cl-tour-card" key={tour.number}>
                  <Link
                    className="cl-tour-card__image-link"
                    href={{ pathname: "/contact", query: { tour: tour.title, destination: "Marrakech", request: "details" } }}
                    aria-label={`More details about ${tour.title}`}
                  >
                    <img className="cl-tour-card__image" src={tour.image} alt={tour.title} loading="lazy" />
                    <span className="cl-tour-card__number">{tour.number}</span>
                  </Link>
                  <div className="cl-tour-card__body">
                    <p className="cl-card-label">{tour.discipline} · {tour.duration}</p>
                    <p className="cl-card-label">{tour.label}</p>
                    <h3>
                      <Link href={{ pathname: "/contact", query: { tour: tour.title, destination: "Marrakech", request: "details" } }}>
                        {tour.title}
                      </Link>
                    </h3>
                    <p>{tour.description}</p>
                    <div className="cl-tour-card__actions">
                      <Link
                        className="cl-button cl-button--dark"
                        href={{ pathname: "/contact", query: { tour: tour.title, destination: "Marrakech", request: "details" } }}
                      >
                        More Details
                      </Link>
                      <Link
                        className="cl-button cl-button--gold"
                        href={{ pathname: "/contact", query: { tour: tour.title, destination: "Marrakech", request: "booking" } }}
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
              <p className="cl-eyebrow">YOUR BIKE. YOUR ROUTE. YOUR PACE.</p>
              <h2>Choose the ride that fits your time in Marrakech.</h2>
            </div>
            <div>
              <p>
                Some riders want a short outing between city visits, while others want to spend several days exploring the foothills and mountain roads beyond Marrakech. Think about the terrain you enjoy, the daily distance you prefer and the time available for transfers and stops. The route, equipment and support can then be discussed around your group's needs and the conditions for your dates.
              </p>
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { destination: "Marrakech", request: "planning" } }}
              >
                Discuss Your Cycling Plans
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">WHERE TO RIDE</p>
              <h2>Explore cycling landscapes around Marrakech</h2>
            </div>
            <p>
              Marrakech connects city culture with a range of nearby landscapes. Explore these areas as starting points, then choose the cycling style that fits the actual road or trail surface, your experience and the time available.
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
            <img
              src="/images/cycling-tour-from-marrakech.jpg"
              alt="Cycling through the countryside near Marrakech, Morocco"
              loading="lazy"
            />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">BEYOND THE CITY</p>
            <h2>Ride for the landscape. Stay for the wider experience.</h2>
            <p>
              A cycling trip from Marrakech can add another dimension to a city stay. Beyond the markets, gardens and historic streets, the surrounding region offers rural landscapes and routes that change with elevation and terrain. A ride can include time to appreciate a viewpoint, pass through a settlement or stop for a break rather than moving quickly from one point to another.
            </p>
            <p>
              The practical details matter as much as the route idea. Transfers, start times, traffic, road and track surfaces, temperature, water access and the abilities of the group should all inform the plan. For E-MTB trips, add battery range and charging; for gravel, check tyre suitability and surfaces; for MTB, review technical sections; and for road cycling, confirm gradients and road conditions.
            </p>
            <Link className="cl-button cl-button--dark" href="/about">Learn About Our Approach</Link>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">WHY PLAN YOUR RIDE WITH US</p>
                <h2>Local insight and practical planning for cycling from Marrakech.</h2>
              </div>
              <p>
                The most suitable cycling day is one that reflects the riders taking part. Clear conversations about terrain, fitness, equipment and timings help make the experience more realistic and enjoyable.
              </p>
            </div>
            <div className="cl-why-grid">
              <article><span>01</span><h3>Routes matched to your bike</h3><p>Choose MTB, E-MTB, gravel or road routes based on the actual surface, your equipment and the kind of riding you enjoy.</p></article>
              <article><span>02</span><h3>Practical day planning</h3><p>Discuss start times, transfer duration, daily distance, water stops and the time needed to enjoy the ride without rushing.</p></article>
              <article><span>03</span><h3>Private trip options</h3><p>Share your group size, dates and experience so the route and pace can be discussed around your priorities.</p></article>
              <article><span>04</span><h3>More than a ride</h3><p>Make room for changing landscapes, village life, local food and the countryside beyond the city.</p></article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">PLAN YOUR MARRAKECH CYCLING TRIP</p>
              <h2>Three steps to start planning your ride.</h2>
            </div>
            <p>
              You do not need to have every detail decided before enquiring. Start with your dates, the cycling style you prefer and your group's experience, then review the practical details for a suitable route.
            </p>
          </div>
          <div className="cl-steps">
            <article><span>STEP 01</span><h3>Choose your cycling style</h3><p>Tell us whether you prefer MTB trails, electric-assisted climbing, gravel tracks or paved road cycling.</p></article>
            <article><span>STEP 02</span><h3>Discuss route and timing</h3><p>Compare destinations, daily distance, elevation, surfaces, transfers and seasonal conditions for your dates.</p></article>
            <article><span>STEP 03</span><h3>Confirm the details</h3><p>Review equipment, route access, support, inclusions and the itinerary before making final arrangements.</p></article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
              <h2>Cycling from Marrakech: FAQs</h2>
              <p>Find answers to common questions about riding styles, routes, planning and preparation. For advice about a particular trip, contact us with your dates and preferences.</p>
              <Link className="cl-text-link" href="/contact">Ask us about your trip <span aria-hidden="true">↗</span></Link>
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
            src="/images/mountain-biking-atlas-mountains-morocco.jpg"
            alt="Mountain scenery near Marrakech and the Atlas foothills"
            loading="lazy"
          />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR NEXT MOROCCO RIDE</p>
            <h2>Ready to explore Marrakech and beyond by bike?</h2>
            <p>
              Tell us when you would like to travel, which cycling style suits you and how much time you have. We can start a conversation about a route from Marrakech that reflects your plans and riding experience.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { destination: "Marrakech", request: "planning" } }}
              >
                Plan Your Cycling Holiday
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
            <Link href="/destinations/imlil">Imlil Valley</Link>
            <Link href="/destinations/toubkal">Mount Toubkal</Link>
            <Link href="/destinations/anti-atlas">Anti-Atlas</Link>
            <Link href="/destinations/agafay-desert">Agafay Desert</Link>
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
          <span>© {new Date().getFullYear()} Mountain Bike Morocco</span>
          <span>Morocco cycling adventures, thoughtfully planned.</span>
        </div>
      </footer>
    </>
  );
}
