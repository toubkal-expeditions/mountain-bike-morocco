import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Atlas Mountains Cycling Tours in Morocco",
  description:
    "Explore the Atlas Mountains by mountain bike, E-MTB, gravel or road bike. Discover village trails, mountain passes and private cycling holidays with Mountain Bike Morocco.",
};

const tours = [
  {
    number: "01",
    label: "TRAILS & SINGLETRACK",
    title: "Atlas Mountains MTB Tour",
    duration: "Flexible duration",
    description:
      "Ride mountain tracks, rocky trails and singletrack routes through the High Atlas. Your itinerary can be shaped around riding confidence, fitness, the type of descent you enjoy and the time you have available. Discuss technical sections, daily elevation, transfers and local conditions before the route is confirmed.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/mtb",
  },
  {
    number: "02",
    label: "ELECTRIC-ASSISTED RIDING",
    title: "Atlas Mountains E-MTB Tour",
    duration: "Day rides & multi-day trips",
    description:
      "Explore the Atlas with electric assistance on selected mountain routes and countryside tracks. A suitable plan considers elevation, trail difficulty, battery range, charging opportunities and the experience of everyone riding. Choose a scenic outing or discuss a longer journey connecting valleys and traditional villages.",
    image: "/images/eBike-tour-atlas-mountains-morocco.jpg",
    href: "/cycling-trips/e-mtb",
  },
  {
    number: "03",
    label: "QUIET ROADS & TRACKS",
    title: "Atlas Mountains Gravel Cycling",
    duration: "Private itineraries",
    description:
      "Discover rural roads, gravel pistes and mountain valleys at a pace that leaves room to appreciate the landscape. Gravel routes can vary greatly in surface, climbing and remoteness, so discuss tyre choice, daily distance, water stops and support needs when planning your journey.",
    image: "/images/gravel-bike-atlas-mountains.JPG",
    href: "/cycling-trips/gravel",
  },
  {
    number: "04",
    label: "CLIMBS & MOUNTAIN PASSES",
    title: "Atlas Road Cycling Holiday",
    duration: "Custom trip lengths",
    description:
      "Take on mountain roads and rewarding climbs through changing scenery, with the route considered around your pace and experience. Elevation, road conditions, traffic, weather and transfer times all influence the daily stages. Build a realistic itinerary that gives you time to enjoy the ride as well as recover between days.",
    image: "/images/road-cycling-tour-morocco.jpg",
    href: "/cycling-trips/road",
  },
  {
    number: "05",
    label: "VILLAGES & VALLEY SCENERY",
    title: "Atlas Villages Cycling Journey",
    duration: "Short breaks & longer trips",
    description:
      "Connect mountain scenery with village life and quieter valleys. Depending on your preferred bike and riding level, a journey can combine gentle countryside roads, rougher tracks and time for cultural stops. The final route should be matched to the season, group ability and the logistics between overnight stays.",
    image: "/images/group-cycling-atlas-mountains.jpg",
    href: "/contact?tour=Atlas%20Villages%20Cycling%20Journey&request=details",
  },
  {
    number: "06",
    label: "PRIVATE MULTI-DAY ADVENTURE",
    title: "High Atlas Traverse",
    duration: "Tailor-made itinerary",
    description:
      "For riders who want to see more of the region, a traverse can link selected valleys and riding areas over several days. The itinerary needs to account for the kind of bike, daily distance, elevation, luggage and bike support, overnight arrangements and seasonal access. Share your priorities to start shaping a practical plan.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/cycling-trips/private-groups",
  },
  {
    number: "07",
    label: "TOUBKAL · HIGH ATLAS",
    title: "Toubkal Cycling Expedition",
    duration: "5 days",
    description:
      "Explore the mountain landscapes around the Toubkal region on a five-day cycling expedition linking selected Atlas valleys, village tracks and mountain roads. Daily routes should be planned around your riding style, fitness, altitude and the season, with realistic time for transfers and recovery. The final itinerary can be adapted to suit MTB, E-MTB or other appropriate cycling preferences after route conditions are reviewed.",
    image: "/images/toubkal-cycling-expedition.jpg",
    href: "/contact?tour=Toubkal%20Cycling%20Expedition&request=details",
  },
  {
    number: "08",
    label: "MULTI-DAY MOUNTAIN ADVENTURE",
    title: "Atlas Cycling Adventure",
    duration: "6 days",
    description:
      "Spend six days discovering the variety of the Atlas, from cultivated valleys and traditional villages to rugged mountain scenery and sweeping views. A multi-day adventure gives you time to explore more than one area, while keeping the route balanced with suitable riding stages and time to enjoy the landscape. Discuss your preferred discipline, group ability, accommodation and support needs when planning the journey.",
    image: "/images/mountain-biking-atlas-mountains.jpg",
    href: "/contact?tour=Atlas%20Cycling%20Adventure&request=details",
  },
  {
    number: "09",
    label: "MOUNTAIN TRACKS & VALLEY TRAILS",
    title: "Atlas Mountains Bike Tour",
    duration: "3 days",
    description:
      "A three-day Atlas bike tour is a way to experience mountain scenery and local routes without committing to a longer expedition. Choose from suitable tracks and roads according to your experience, preferred riding surface and daily distance. The plan should allow for the elevation, terrain, seasonal weather and transfer arrangements that make each mountain route different.",
    image: "/images/mtb-tour-atlas-mountains.jpg",
    href: "/contact?tour=Atlas%20Mountains%20Bike%20Tour&request=details",
  },
  {
    number: "10",
    label: "SHORT MTB ESCAPE",
    title: "MTB Tour Atlas Mountains",
    duration: "2 days",
    description:
      "Use two days to discover selected Atlas trails, mountain tracks and villages with a ride planned to fit your confidence and available time. This shorter trip can be shaped around scenic riding or more demanding terrain, depending on your skills and the local conditions. Discuss bike setup, technical difficulty, daily climbing and transfer times before confirming the route.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/contact?tour=MTB%20Tour%20Atlas%20Mountains&request=details",
  },
  {
    number: "11",
    label: "TECHNICAL TRAILS & DESCENTS",
    title: "Atlas Enduro Cycling Tour",
    duration: "4 days",
    description:
      "This four-day enduro concept is for riders interested in technical trails, mountain descents and challenging terrain across selected Atlas riding areas. Route choice must reflect your handling skills, fitness, bike setup and comfort with rocky or exposed sections. Discuss lift or vehicle support where relevant, daily elevation, transfers and alternative stages so the itinerary is realistic for your group.",
    image: "/images/enduro-morrocco-cycling-tour.jpg",
    href: "/contact?tour=Atlas%20Enduro%20Cycling%20Tour&request=details",
  },
  {
    number: "12",
    label: "IMLIL · VILLAGE TRAILS · ENDURO",
    title: "Imlil Valley Enduro Tour",
    duration: "2 days",
    description:
      "Discover the rugged trails and mountain scenery around Imlil on a two-day enduro-focused ride. The area offers a dramatic setting, but trail surfaces, gradients and exposure can vary, so the route should be matched to your ability and the conditions on the day. Plan time for bike checks, transfers, recovery and stops to enjoy the valley and surrounding villages.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/contact?tour=Imlil%20Valley%20Enduro%20Tour&request=details",
  },
];

const regions = [
  {
    title: "Imlil & Toubkal",
    text:
      "Discover dramatic mountain scenery, terraced fields and traditional villages around the Imlil area. Routes differ in gradient and surface, so choose an outing that suits your riding experience and the conditions on the day.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil-toubkal",
  },
  {
    title: "Ouirgane & the Western Atlas",
    text:
      "A quieter landscape of valleys, cultivated land and rural tracks. This area can work well for scenic riding and mixed-ability groups when the chosen route, daily effort and support arrangements are considered carefully.",
    image: "/images/ouirgane-valley-ebike-tour.jpg",
    href: "/destinations/ouirgane",
  },
  {
    title: "High Atlas Mountain Trails",
    text:
      "Explore high viewpoints, rocky tracks and mountain terrain. Altitude, weather and trail conditions can change the character of a ride, particularly on longer routes away from towns and regular services.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
    href: "/cycling-trips/mtb",
  },
  {
    title: "Marrakech & the Foothills",
    text:
      "Start near Marrakech and head into the countryside for a shorter ride or as the beginning of a longer Atlas itinerary. Confirm the meeting point, transfer time and route surface before setting out.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/cycling-trips/from-marrakech",
  },
];

const faqs = [
  {
    question: "What kind of cycling can I do in the Atlas Mountains?",
    answer:
      "The region offers different possibilities depending on location and route, including mountain biking, E-MTB, gravel cycling and road cycling. Trail surface, gradient, elevation and remoteness vary considerably. Share your preferred discipline and experience so the itinerary can be considered around your group rather than assuming one route suits everyone.",
  },
  {
    question: "When is the best time to ride in the Atlas Mountains?",
    answer:
      "Spring and autumn are often comfortable periods for many lower and mid-altitude routes, but conditions depend on elevation and the specific area. Higher routes can be cold or affected by snow, and lower valleys can be hot in summer. Check conditions for your intended route and travel dates before confirming a trip.",
  },
  {
    question: "Are Atlas Mountain routes suitable for beginners?",
    answer:
      "Some roads and easier tracks may suit recreational riders, while rocky trails, steep gradients and technical descents require more experience. Tell us about your fitness, handling skills and usual riding distance so a suitable route can be discussed. Do not assume every mountain path is appropriate for every rider or bike.",
  },
  {
    question: "Can I combine different cycling styles on one holiday?",
    answer:
      "A private itinerary can be discussed around the bikes and terrain you prefer. Combining disciplines may require different equipment, route surfaces and logistics, so the daily stages should be designed carefully. Share the group's priorities and experience levels when enquiring.",
  },
  {
    question: "Can I start my Atlas cycling trip in Marrakech?",
    answer:
      "Marrakech is a common starting point for journeys towards the Atlas foothills and mountain areas. Transfer distances and start points depend on the route. Confirm driving time, riding time, equipment transport and the planned finish point as part of the itinerary.",
  },
  {
    question: "Can you organise a private Atlas Mountains cycling holiday?",
    answer:
      "You can enquire about a private trip for friends, families or cycling groups. Helpful details include dates, group size, preferred discipline, riding level, desired daily effort and accommodation preferences. These details help guide the discussion about route options and logistics before arrangements are confirmed.",
  },
];

export default function AtlasMountainsDestinationPage() {
  return (
    <>
      <main className="cycling-listing destination-detail-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/mountain-biking-atlas-mountains-morocco.jpg"
            alt="Cycling through the Atlas Mountains of Morocco"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">HIGH ATLAS · MOUNTAIN TRAILS · MOROCCO</p>
            <h1>Atlas Mountains Cycling Tours</h1>
            <p className="cl-hero__intro">
              Discover the Atlas Mountains by bike, from rocky mountain trails
              and village tracks to quiet roads and scenic gravel routes. Choose
              a cycling style that fits your experience and explore a region
              shaped by dramatic landscapes, traditional communities and
              ever-changing mountain terrain.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="/contact?destination=Atlas%20Mountains">
                Plan Your Atlas Trip
              </Link>
              <Link className="cl-button cl-button--outline" href="#atlas-tours">
                Explore Cycling Tours
              </Link>
            </div>
            <div className="cl-hero__meta">
              <span>MTB · E-MTB · GRAVEL · ROAD</span>
              <span>GUIDED & PRIVATE OPTIONS</span>
              <span>ROUTES TO SUIT YOUR LEVEL</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">RIDE THE HIGH ATLAS</p>
            <h2>A mountain journey shaped by trails, villages and wide-open views.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              The Atlas Mountains offer a varied setting for a cycling holiday
              in Morocco. Mountain tracks cross rugged slopes, roads climb
              towards high passes and routes pass through valleys where fields
              and villages follow the shape of the land. Riding gives you time
              to experience these changing landscapes gradually, with stops for
              viewpoints and local discoveries along the way.
            </p>
            <p>
              There is no single route that suits every cyclist. Mountain bikers
              may prefer technical trails and descents; E-MTB riders may want
              assistance on longer climbs; gravel cyclists may enjoy quieter
              tracks and rural roads; and road riders may be drawn to sustained
              climbs and mountain passes. The best plan takes account of your
              experience, the time available, seasonal conditions and how much
              riding you want to do each day.
            </p>
            <p>
              Transfers, altitude, route surface, support and accommodation all
              affect the shape of a multi-day journey. Share your priorities
              before confirming an itinerary so the practical details can be
              considered alongside the experience you want from the mountains.
            </p>
            <Link className="cl-text-link" href="/destinations">
              Explore all destinations <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="atlas-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR RIDE</p>
                <h2>Ways to explore the Atlas Mountains by bike</h2>
              </div>
              <p>
                Start with the style of riding you enjoy. These trip options are
                a starting point for discussing routes, duration and support.
                The final itinerary should reflect your group's experience,
                preferred terrain and the conditions at your travel dates.
              </p>
            </div>
            <div className="cl-tour-grid">
              {tours.map((tour) => (
                <article className="cl-tour-card" key={tour.number}>
                  <Link className="cl-tour-card__image-link" href={tour.href} aria-label={tour.title}>
                    <img className="cl-tour-card__image" src={tour.image} alt={tour.title} loading="lazy" />
                    <span className="cl-tour-card__number">{tour.number}</span>
                  </Link>
                  <div className="cl-tour-card__body">
                    <p className="cl-card-label">{tour.label}</p>
                    <h3><Link href={tour.href}>{tour.title}</Link></h3>
                    <p>{tour.description}</p>
                    <p className="atlas-tour-duration">{tour.duration}</p>
                    <div className="cl-tour-card__actions">
                      <Link className="cl-button cl-button--dark" href={`/contact?tour=${encodeURIComponent(tour.title)}&request=details`}>More Details</Link>
                      <Link className="cl-button cl-button--gold" href={`/contact?tour=${encodeURIComponent(tour.title)}&request=booking`}>Booking</Link>
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
              <p className="cl-eyebrow">YOUR LEVEL. YOUR TERRAIN.</p>
              <h2>Choose the right route for the way you like to ride.</h2>
            </div>
            <div>
              <p>
                A mountain route can feel very different depending on surface,
                elevation, weather and daily distance. Be clear about your
                experience and preferences when planning, and allow enough time
                for transfers, recovery and stops. Thoughtful preparation helps
                make the ride more enjoyable and realistic for everyone in the
                group.
              </p>
              <Link className="cl-button cl-button--gold" href="/contact?destination=Atlas%20Mountains">
                Talk Through Your Route
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">EXPLORE THE REGION</p>
              <h2>Discover different corners of the Atlas</h2>
            </div>
            <p>
              The High Atlas is not one uniform riding area. Valleys, foothills
              and higher mountain routes each have their own character. Explore
              these starting points and choose the landscapes that best fit
              your available time and cycling style.
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
            <img src="/images/group-cycling-atlas-mountains.jpg" alt="Cyclists exploring the Atlas Mountain landscape" loading="lazy" />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">MORE THAN THE MILES</p>
            <h2>Take time to experience mountain life along the route.</h2>
            <p>
              The experience of cycling in the Atlas goes beyond the route line
              on a map. There are viewpoints worth stopping for, villages set
              into the hillsides and valleys where everyday life follows a
              different rhythm from the city. A thoughtfully paced journey
              leaves room to notice these details instead of rushing from one
              stage to the next.
            </p>
            <p>
              When planning a trip, consider how riding days connect with
              transfers, accommodation, meals and opportunities to explore.
              Choosing an appropriate daily distance can make the journey more
              rewarding, especially when the route includes demanding climbs,
              rough surfaces or longer stretches between services. Seasonal
              weather and current trail access should also be checked before
              the itinerary is finalised.
            </p>
            <Link className="cl-button cl-button--dark" href="/contact?destination=Atlas%20Mountains">Plan a Personalised Journey</Link>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">PLAN WITH CARE</p>
                <h2>Practical details make a difference in the mountains.</h2>
              </div>
              <p>
                The route should fit the riders, the season and the support
                available. Consider these points when you begin planning an
                Atlas Mountains cycling holiday.
              </p>
            </div>
            <div className="cl-why-grid">
              <article><span>01</span><h3>Terrain matched to you</h3><p>Choose surfaces and technical difficulty that fit your handling skills, fitness and preferred riding style.</p></article>
              <article><span>02</span><h3>Realistic daily stages</h3><p>Take elevation, distance, recovery time and the time needed for stops into account when mapping the route.</p></article>
              <article><span>03</span><h3>Seasonal awareness</h3><p>Mountain weather changes with elevation and season, so check route conditions and access before departure.</p></article>
              <article><span>04</span><h3>Clear logistics</h3><p>Discuss transfers, luggage, equipment, accommodation and any support needed between riding areas.</p></article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">START PLANNING</p>
              <h2>Three steps towards your Atlas cycling trip.</h2>
            </div>
            <p>
              You do not need a complete itinerary before making an enquiry.
              Start with the basics and use them to guide a conversation about
              routes and practical arrangements.
            </p>
          </div>
          <div className="cl-steps">
            <article><span>STEP 01</span><h3>Share your riding style</h3><p>Tell us whether you prefer MTB, E-MTB, gravel or road cycling, along with your experience, fitness and group size.</p></article>
            <article><span>STEP 02</span><h3>Choose the landscapes</h3><p>Discuss the valleys and mountain areas you would like to see, how long you have and the daily effort you prefer.</p></article>
            <article><span>STEP 03</span><h3>Review the details</h3><p>Confirm the proposed stages, transfer times, equipment, accommodation and inclusions before final arrangements are made.</p></article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
              <h2>Atlas Mountains cycling: frequently asked questions</h2>
              <p>Find answers to common questions about routes, seasons and preparing for a ride. For advice about a specific itinerary, contact us with your dates and cycling preferences.</p>
              <Link className="cl-text-link" href="/contact?destination=Atlas%20Mountains">Ask us about your trip <span aria-hidden="true">↗</span></Link>
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
          <img src="/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg" alt="A cycling journey through Morocco's Atlas Mountains" loading="lazy" />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR ATLAS ADVENTURE</p>
            <h2>Ready to explore the Atlas Mountains by bike?</h2>
            <p>
              Tell us when you would like to travel, which kind of cycling you
              enjoy and what you want to experience in the mountains. Start a
              conversation about route options, trip length and the practical
              details needed for your journey.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="/contact?destination=Atlas%20Mountains">Plan Your Atlas Holiday</Link>
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
          <span>© 2026 Mountain Bike Morocco</span>
          <span>Morocco cycling adventures, thoughtfully planned.</span>
        </div>
      </footer>
    </>
  );
}
