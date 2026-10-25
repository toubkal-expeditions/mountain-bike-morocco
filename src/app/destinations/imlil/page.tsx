import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Imlil Valley Cycling Tours in Morocco | MTB, E-MTB, Gravel & Road",
  description:
    "Explore Imlil and the Toubkal region by MTB, E-MTB, gravel or road bike. Discover village routes, Atlas Mountain scenery and mixed cycling holidays planned around your riding style.",
};

const tours = [
  {
    number: "01",
    discipline: "MTB",
    label: "TRAILS & VILLAGE TRACKS",
    title: "Imlil Valley MTB Tour",
    duration: "2 days",
    description:
      "Discover the trails and mountain tracks around Imlil on a two-day mountain bike escape. Ride through changing valley scenery, pass traditional settlements and enjoy views of the surrounding High Atlas. The route should be matched to your handling skills, fitness and preferred level of challenge, with time for bike checks, transfers and stops along the way.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
  },
  {
    number: "02",
    discipline: "MTB",
    label: "HIGH ATLAS SINGLETRACK",
    title: "Toubkal Foothills MTB Adventure",
    duration: "3 days",
    description:
      "Spend three days exploring selected mountain bike routes in the foothills around the Toubkal region. A multi-day itinerary can balance trail riding, mountain scenery and village stops, with distances and technical difficulty adjusted to the group. Trail access and current conditions should be checked before the route is confirmed, especially on steep or rocky sections.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
  },
  {
    number: "03",
    discipline: "MTB · ENDURO",
    label: "TECHNICAL TRAILS & DESCENTS",
    title: "Imlil Valley Enduro Tour",
    duration: "2 days",
    description:
      "For riders looking for a more technical experience, this two-day enduro concept focuses on selected descents and rugged mountain trails around Imlil. Route choice depends on experience, bike setup, fitness and comfort with loose or exposed terrain. Discuss trail difficulty, transfer or vehicle support where available, and alternative stages before deciding on the itinerary.",
    image: "/images/enduro-morrocco-cycling-tour.jpg",
  },
  {
    number: "04",
    discipline: "E-MTB",
    label: "ELECTRIC-ASSISTED VALLEY RIDING",
    title: "Imlil to Ouirgane E-MTB Tour",
    duration: "3 days",
    description:
      "Explore the Atlas by electric mountain bike on a journey connecting selected valley routes around Imlil and Ouirgane. Electric assistance can help with climbing, but the plan still needs to account for surface, elevation, battery range, charging and the abilities of everyone riding. Daily stages should be chosen after checking route options and conditions.",
    image: "/images/ouirgane-valley-ebike-tour.jpg",
  },
  {
    number: "05",
    discipline: "E-MTB",
    label: "MOUNTAIN SCENERY & BIG CLIMBS",
    title: "High Atlas E-MTB Adventure",
    duration: "4 days",
    description:
      "Use four days to explore the mountain scenery and rural tracks of the High Atlas with electric assistance. The itinerary can include selected climbs, village routes and varied landscapes, with daily distances planned around battery capacity, elevation, charging opportunities and the group's confidence on technical terrain. Confirm the bike and support arrangements before travel.",
    image: "/images/eBike-tour-atlas-mountains-morocco.jpg",
  },
  {
    number: "06",
    discipline: "E-MTB",
    label: "VILLAGES & QUIETER ROUTES",
    title: "Imlil Village E-Bike Escape",
    duration: "2 days",
    description:
      "Enjoy a shorter electric-assisted cycling break around the Imlil area, combining manageable stages with time to appreciate mountain views and village life. A suitable route depends on the bike, rider experience, gradients and track surface. Discuss battery range and charging needs in advance so the riding plan remains comfortable and realistic.",
    image: "/images/group-ebike-tour-morocco.jpg",
  },
  {
    number: "07",
    discipline: "GRAVEL",
    label: "QUIET ROADS & GRAVEL PISTES",
    title: "Imlil to Ouirgane Gravel Escape",
    duration: "3 days",
    description:
      "Explore rural roads and suitable gravel tracks through the Atlas foothills on a three-day journey between selected valley areas. Gravel surfaces and gradients can vary, so route planning should account for tyre choice, braking confidence, climbing, water stops and the distance between services. The final route should reflect your experience and the current condition of the tracks.",
    image: "/images/gravel-bike-atlas-mountains.JPG",
  },
  {
    number: "08",
    discipline: "GRAVEL",
    label: "MOUNTAIN VILLAGES & OPEN TRACKS",
    title: "High Atlas Villages Gravel Tour",
    duration: "4 days",
    description:
      "Ride a selection of quiet roads and gravel routes around the High Atlas, linking rural landscapes and traditional villages where practical. This four-day concept can be adapted to your preferred daily distance and amount of climbing. Discuss surface conditions, navigation, luggage, water and support before the itinerary is finalised.",
    image: "/images/gravel-cycling-morocco.jpg",
  },
  {
    number: "09",
    discipline: "GRAVEL",
    label: "FROM MARRAKECH INTO THE ATLAS",
    title: "Marrakech to Imlil Gravel Journey",
    duration: "2 days",
    description:
      "Combine a Marrakech start with a short gravel-focused journey towards the Atlas, using suitable roads and tracks selected for your group. A route should take account of traffic near the city, surface changes, elevation and the transition into mountain terrain. Confirm meeting points, transfers and safe, suitable riding sections before departure.",
    image: "/images/cycling-tour-from-marrakech.jpg",
  },
  {
    number: "10",
    discipline: "ROAD",
    label: "CLIMBS & MOUNTAIN ROADS",
    title: "Imlil and Atlas Road Cycling Tour",
    duration: "3 days",
    description:
      "Explore paved mountain roads and the countryside around Imlil on a road cycling break planned around your pace and climbing experience. Daily elevation, road conditions, traffic, weather and recovery time all influence the route. The itinerary should identify suitable road sections and allow enough time for transfers and stops between riding stages.",
    image: "/images/road-cycling-tour-morocco.jpg",
  },
  {
    number: "11",
    discipline: "ROAD",
    label: "LONGER CLIMBS & PANORAMIC VIEWS",
    title: "High Atlas Mountain Passes Ride",
    duration: "4 days",
    description:
      "Plan a four-day road cycling trip focused on selected mountain roads and climbs in the Atlas region. The route can be shaped around your fitness, preferred daily distance and appetite for elevation, with realistic stages and recovery time. Road condition, traffic, seasonal weather and transfer distances should be reviewed before the route is confirmed.",
    image: "/images/road-cycling-morocco.jpg",
  },
  {
    number: "12",
    discipline: "ROAD · PRIVATE TOUR",
    label: "TAILOR-MADE ROAD CYCLING",
    title: "Atlas Villages Road Cycling Holiday",
    duration: "5 days",
    description:
      "Take more time to explore the Atlas by road bike with an itinerary linking selected villages, mountain scenery and quieter paved routes. A private journey gives you room to discuss travel dates, support, accommodation, luggage handling and daily effort. Choose roads and stages based on current conditions and the experience of your group, rather than committing to unrealistic distances.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
  },
];

const regions = [
  {
    title: "Imlil & Toubkal",
    text:
      "Discover the mountain village setting, terraced fields and dramatic views around Imlil and the Toubkal region. Choose trails, electric-assisted routes or suitable roads according to your experience and the conditions on the ground.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/toubkal",
  },
  {
    title: "Ouirgane Valley",
    text:
      "A quieter Atlas landscape of cultivated valleys, villages and rural tracks. Depending on route conditions, it can be considered for MTB, E-MTB and gravel outings, or as part of a wider multi-day journey.",
    image: "/images/ouirgane-valley-ebike-tour.jpg",
    href: "/destinations/ouirgane",
  },
  {
    title: "High Atlas Foothills",
    text:
      "Explore selected mountain tracks and paved roads with changing elevation and broad views. Route difficulty varies, so plan around the type of bike, the group's riding experience and the season.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Marrakech & the Countryside",
    text:
      "Use Marrakech as a starting point for shorter rides or a longer journey into the Atlas. Confirm the starting point, transfers, traffic considerations and route surface for the chosen cycling discipline.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/destinations/marrakech",
  },
];

const faqs = [
  {
    question: "Which cycling styles can I enjoy around Imlil?",
    answer:
      "Depending on the specific route, current conditions and your experience, you can discuss mountain biking, E-MTB, gravel and road cycling options. Trail access, surface, gradients and traffic differ across the area, so the itinerary should be matched to the chosen bike and riding style.",
  },
  {
    question: "Is Imlil suitable for beginner cyclists?",
    answer:
      "Some easier roads or selected tracks may suit recreational riders, while technical trails, steep climbs and rough surfaces require more experience. Share your usual riding distance, fitness and bike handling confidence so an appropriate route can be discussed. Not every mountain trail is suitable for every rider or bicycle.",
  },
  {
    question: "When is the best time to cycle around Imlil?",
    answer:
      "Spring and autumn are often comfortable periods for many lower and mid-altitude routes, but the conditions depend on elevation and the specific itinerary. Higher areas can be cold or affected by snow, and summer temperatures can rise in lower valleys. Check conditions for your travel dates and planned route before confirming a trip.",
  },
  {
    question: "Can I combine MTB, E-MTB, gravel and road cycling in one holiday?",
    answer:
      "A mixed cycling holiday may be possible if route locations, bike availability, transfers and group preferences are compatible. Different disciplines need different surfaces and equipment, so discuss the order of activities, bike logistics and daily distances before settling on an itinerary.",
  },
  {
    question: "What should I consider for an E-MTB ride?",
    answer:
      "Battery capacity, elevation, assistance settings, rider weight, temperature, terrain and charging opportunities affect range. The plan should include a suitable battery margin and realistic stages. Confirm the bike and support arrangements before setting out on longer or more remote routes.",
  },
  {
    question: "Can I arrange a private cycling holiday?",
    answer:
      "You can enquire about a private trip for friends, couples or a group travelling together. Share travel dates, group size, cycling discipline, riding experience and accommodation preferences. These details help identify suitable route options and the practical arrangements that need to be confirmed.",
  },
];

export default function ImlilDestinationPage() {
  return (
    <>
      <main className="cycling-listing imlil-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/toubkal-imlil-enduro-mtb-expedition.jpg"
            alt="Mountain cycling scenery around Imlil in Morocco's High Atlas"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">IMLIL · TOUBKAL · HIGH ATLAS</p>
            <h1>Imlil Valley Cycling Tours in Morocco</h1>
            <p className="cl-hero__intro">
              Discover the Imlil Valley and surrounding Atlas Mountains through
              a choice of MTB trails, E-MTB adventures, gravel routes and road
              cycling. From shorter rides to multi-day journeys, explore route
              options shaped around your experience, preferred bike and the
              landscapes you want to see.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href={{ pathname: "/contact", query: { destination: "Imlil Valley", request: "planning" } }}>
                Plan Your Imlil Trip
              </Link>
              <Link className="cl-button cl-button--outline" href="#imlil-tours">
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
            <p className="cl-eyebrow cl-eyebrow--dark">RIDE THE IMLIL VALLEY</p>
            <h2>One mountain region. Different ways to experience it by bike.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              Imlil sits in a striking mountain landscape of terraced fields,
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

        <section className="cl-tours" id="imlil-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR CYCLING STYLE</p>
                <h2>MTB, E-MTB, gravel and road tours around Imlil</h2>
              </div>
              <p>
                Explore a mixed collection of cycling trip ideas for the Imlil
                Valley and nearby Atlas routes. Durations are starting points
                for planning; the final route, inclusions, availability and
                daily stages should be confirmed for your dates and group.
              </p>
            </div>
            <div className="cl-tour-grid">
              {tours.map((tour) => (
                <article className="cl-tour-card" key={tour.number}>
                  <Link
                    className="cl-tour-card__image-link"
                    href={{ pathname: "/contact", query: { tour: tour.title, request: "details" } }}
                    aria-label={`More details about ${tour.title}`}
                  >
                    <img className="cl-tour-card__image" src={tour.image} alt={tour.title} loading="lazy" />
                    <span className="cl-tour-card__number">{tour.number}</span>
                  </Link>
                  <div className="cl-tour-card__body">
                    <p className="cl-card-label">{tour.discipline} · {tour.duration}</p>
                    <p className="cl-card-label">{tour.label}</p>
                    <h3>
                      <Link href={{ pathname: "/contact", query: { tour: tour.title, request: "details" } }}>
                        {tour.title}
                      </Link>
                    </h3>
                    <p>{tour.description}</p>
                    <div className="cl-tour-card__actions">
                      <Link
                        className="cl-button cl-button--dark"
                        href={{ pathname: "/contact", query: { tour: tour.title, request: "details" } }}
                      >
                        More Details
                      </Link>
                      <Link
                        className="cl-button cl-button--gold"
                        href={{ pathname: "/contact", query: { tour: tour.title, request: "booking" } }}
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
              <Link className="cl-button cl-button--gold" href={{ pathname: "/contact", query: { destination: "Imlil Valley", request: "planning" } }}>
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
              Imlil can be one part of a wider cycling holiday. Depending on
              your chosen bike and the route conditions, explore nearby valleys
              or connect the area with a journey starting from Marrakech.
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
                  <Link className="cl-text-link" href={region.href}>
                    Explore the area <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cl-editorial">
          <div className="cl-editorial__image">
            <img src="/images/group-cycling-atlas-mountains.jpg" alt="Cyclists exploring the High Atlas Mountains in Morocco" loading="lazy" />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">BEYOND THE RIDE</p>
            <h2>Make time for the villages, valleys and mountain views.</h2>
            <p>
              The experience of cycling around Imlil is not measured only in
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
              <p className="cl-eyebrow cl-eyebrow--dark">PLAN YOUR IMLIL CYCLING HOLIDAY</p>
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
              <h2>Imlil Valley cycling: frequently asked questions</h2>
              <p>Find answers to common questions about cycling disciplines, routes and planning a ride around Imlil. Contact us with your dates and preferences to discuss a more specific itinerary.</p>
              <Link className="cl-text-link" href={{ pathname: "/contact", query: { destination: "Imlil Valley", request: "details" } }}>Ask us about your trip <span aria-hidden="true">↗</span></Link>
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
            <p className="cl-eyebrow">YOUR NEXT IMLIL ADVENTURE</p>
            <h2>Ready to explore the High Atlas by bike?</h2>
            <p>
              Tell us when you would like to travel, which cycling style you
              prefer and how much time you have. We can start discussing
              suitable route options around Imlil, nearby valleys and the wider
              Atlas region.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href={{ pathname: "/contact", query: { destination: "Imlil Valley", request: "planning" } }}>Plan Your Imlil Holiday</Link>
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
            <Link href="/destinations/imlil">Imlil Valley</Link>
            <Link href="/destinations/toubkal">Mount Toubkal</Link>
            <Link href="/destinations/marrakech">Marrakech</Link>
            <Link href="/destinations">All Destinations</Link>
          </div>
          <div>
            <h3>Let's plan</h3>
            <Link href="/about">About Us</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/contact">Contact</Link>
            <Link href={{ pathname: "/contact", query: { destination: "Imlil Valley", request: "planning" } }}>Plan Your Trip</Link>
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
