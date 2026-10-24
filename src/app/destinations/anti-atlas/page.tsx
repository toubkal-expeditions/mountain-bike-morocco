import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anti-Atlas Cycling Tours in Morocco | MTB, E-MTB, Gravel & Road",
  description:
    "Explore the Anti-Atlas and Tafraoute by mountain bike, E-MTB, gravel or road bike. Discover granite landscapes, rural routes and southern Morocco cycling adventures.",
};

const tours = [
  {
    number: "01",
    discipline: "MTB",
    label: "GRANITE TRAILS & ROCKY TERRAIN",
    title: "Tafraoute Granite Trails MTB Tour",
    duration: "3 days",
    description:
      "Discover the distinctive granite landscapes around Tafraoute on a three-day mountain bike trip. The itinerary can combine rocky tracks, village approaches and selected trails through the Anti-Atlas foothills, with route difficulty matched to your handling skills. Trail access, terrain and weather should be checked for your travel dates, and daily stages should leave room for water stops and recovery.",
    image: "/images/anti-atlas-cycling-tour.jpg",
  },
  {
    number: "02",
    discipline: "MTB · ADVENTURE",
    label: "REMOTE TRACKS & SOUTHERN VALLEYS",
    title: "Anti-Atlas Mountain Bike Adventure",
    duration: "5 days",
    description:
      "Spend five days exploring selected tracks and mountain scenery across the Anti-Atlas. A multi-day journey can link rugged hills, quiet settlements and wide-open southern landscapes, depending on current access and local conditions. The route should reflect your fitness, bike setup, preferred daily distance and experience on loose or rocky surfaces, with transfers and support agreed in advance.",
    image: "/images/anti-atlas-morocco-cycling-tour.jpg",
  },
  {
    number: "03",
    discipline: "MTB · EXPEDITION",
    label: "A LONGER SOUTHERN CROSSING",
    title: "Anti-Atlas and Tafraoute Expedition",
    duration: "6 days",
    description:
      "Explore a wider section of the Anti-Atlas on a six-day mountain bike expedition concept built around selected trails and rural tracks. Distances and technical demands can vary considerably between areas, so the itinerary needs careful planning around riding ability, water, accommodation, transfers and seasonal temperatures. Confirm the route and available support before making final travel arrangements.",
    image: "/images/mtb-morocco-Saghro.JPG",
  },
  {
    number: "04",
    discipline: "E-MTB",
    label: "ELECTRIC-ASSISTED MOUNTAIN RIDING",
    title: "Anti-Atlas E-MTB Discovery",
    duration: "3 days",
    description:
      "Explore suitable tracks and scenic routes around the Anti-Atlas with electric assistance for the climbs. A three-day E-MTB trip can balance riding with stops to appreciate the region's rugged terrain and village landscapes. The plan should account for elevation, surface, battery capacity, assistance settings and charging options, while keeping the technical difficulty appropriate for your group.",
    image: "/images/saghro-morocco-e-bike-tour.jpg",
  },
  {
    number: "05",
    discipline: "E-MTB · MULTI-DAY",
    label: "VILLAGES & OPEN MOUNTAIN SCENERY",
    title: "Tafraoute and Anti-Atlas E-Bike Tour",
    duration: "4 days",
    description:
      "Spend four days riding selected Anti-Atlas foothill routes and exploring the landscapes around Tafraoute by electric mountain bike. Electric assistance may make some climbs more manageable, but rocky surfaces and loose tracks still require good control and appropriate equipment. Battery range, water, charging, support and the distance between overnight stops all need to be considered before the route is confirmed.",
    image: "/images/southern-ebike-cycling-expeditions.jpg",
  },
  {
    number: "06",
    discipline: "E-MTB · PRIVATE",
    label: "A PERSONALISED SOUTHERN JOURNEY",
    title: "Private Anti-Atlas E-MTB Holiday",
    duration: "5 days",
    description:
      "A private five-day E-MTB holiday gives your group flexibility to select suitable riding areas, daily effort and time for cultural stops. Share your bike type, group size, fitness, battery requirements and accommodation preferences so the practical details can be discussed early. The final itinerary should be planned around confirmed route access, available charging or support arrangements and expected temperatures.",
    image: "/images/group-ebike-tour-morocco.jpg",
  },
  {
    number: "07",
    discipline: "GRAVEL",
    label: "QUIET ROADS & GRAVEL PISTES",
    title: "Anti-Atlas Gravel Cycling Tour",
    duration: "4 days",
    description:
      "Ride a mix of quiet paved roads and suitable gravel tracks through the Anti-Atlas region on a four-day trip. The appeal lies in the changing terrain, open views and connections between rural settlements. Route choice should consider surface quality, tyre clearance, elevation, water access and daily distance, with alternatives available if road or track conditions are not suitable.",
    image: "/images/gravel-biking-atlas-morocco.jpg",
  },
  {
    number: "08",
    discipline: "GRAVEL · TAFRAOUTE",
    label: "GRANITE COUNTRY & RURAL ROUTES",
    title: "Tafraoute Gravel Bike Escape",
    duration: "3 days",
    description:
      "Discover the countryside around Tafraoute on a three-day gravel escape linking suitable rural roads and unpaved sections. The ride can be paced around your experience and the time available for exploring the distinctive granite scenery. Before confirming, check the exact surfaces, navigation requirements, water stops and the amount of climbing expected each day.",
    image: "/images/gravel-morocco-cycling-tour.JPG",
  },
  {
    number: "09",
    discipline: "GRAVEL · SOUTHERN ROUTE",
    label: "SOUTHERN TRACKS & WIDE HORIZONS",
    title: "Anti-Atlas to the South Gravel Journey",
    duration: "6 days",
    description:
      "Discuss a six-day gravel journey through selected Anti-Atlas and southern routes, with the stages planned around the surfaces your bike can handle. The itinerary should balance riding time with transfers, navigation, temperatures and the distance between services. Route details and logistics need to be checked for your dates rather than assuming every track is passable throughout the year.",
    image: "/images/gravel-desert-cycling-morocco.JPG",
  },
  {
    number: "10",
    discipline: "ROAD",
    label: "PAVED ROADS & MOUNTAIN VIEWS",
    title: "Anti-Atlas Road Cycling Tour",
    duration: "4 days",
    description:
      "Explore suitable paved roads in the Anti-Atlas on a four-day road cycling trip through rugged hills and southern Moroccan landscapes. The route should reflect your climbing experience, preferred daily distance and comfort riding on shared roads. Road surfaces, traffic, elevation, weather and support arrangements should be reviewed before confirming each stage.",
    image: "/images/road-cycling-tour-morocco.jpg",
  },
  {
    number: "11",
    discipline: "ROAD · TAFRAOUTE",
    label: "CLIMBS & PANORAMIC RIDES",
    title: "Tafraoute and Anti-Atlas Road Tour",
    duration: "5 days",
    description:
      "Spend five days riding selected paved routes around Tafraoute and the Anti-Atlas, with stages designed around the group's fitness and appetite for climbing. The journey can combine scenic roads and time to explore local towns, while avoiding unrealistic distances between overnight stops. Confirm road conditions, transfers and support before settling on the itinerary.",
    image: "/images/adventure-road-cycling-morocco.jpg",
  },
  {
    number: "12",
    discipline: "ROAD · MULTI-REGION",
    label: "MOUNTAINS TOWARDS THE ATLANTIC",
    title: "Anti-Atlas to Atlantic Road Cycling Journey",
    duration: "7 days",
    description:
      "Consider a seven-day road cycling journey connecting selected Anti-Atlas routes with the Atlantic region, subject to suitable roads and realistic transfer arrangements. Daily climbing, traffic, road surfaces and the group's preferred pace should shape the stages. The final itinerary should leave room for recovery and be confirmed against current access and travel conditions.",
    image: "/images/atlantic-coast-cycling-tour-morocco.jpg",
  },
];

const regions = [
  {
    title: "Tafraoute",
    text:
      "Tafraoute is a useful starting point for exploring the distinctive granite scenery and rural landscapes of the Anti-Atlas. Depending on the specific route, riders can consider MTB trails, E-MTB outings, gravel tracks or suitable paved roads.",
    image: "/images/anti-atlas-cycling-tour.jpg",
    href: "/destinations/anti-atlas",
  },
  {
    title: "Anti-Atlas Foothills",
    text:
      "The foothills offer rugged hills, quiet rural routes and broad southern views. Choose the cycling discipline according to the actual surface and your experience, and check distances, water access and conditions before setting out.",
    image: "/images/anti-atlamountain-biking.jpg",
    href: "/destinations/anti-atlas",
  },
  {
    title: "Southern Morocco",
    text:
      "A wider southern itinerary can connect mountain scenery with dry valleys and open landscapes. Longer trips need realistic transfer times, careful water planning and stages suited to the chosen bike and the time of year.",
    image: "/images/south-morocco-cycling-tour.jpg",
    href: "/destinations/sahara-desert",
  },
  {
    title: "Atlantic Coast",
    text:
      "The Atlantic region can provide a different finish or extension to a southern cycling holiday. Road and gravel stages should be planned around the route surface, prevailing conditions, traffic and the time needed to connect regions.",
    image: "/images/atlantic-coast-cycling-tour-morocco.jpg",
    href: "/destinations/atlantic-coast",
  },
];

const faqs = [
  {
    question: "What types of cycling can I do in the Anti-Atlas?",
    answer:
      "You can enquire about mountain biking, E-MTB, gravel and road cycling options. Each discipline needs suitable terrain and equipment: technical trails are different from gravel pistes and paved climbs. The route should be selected around your experience, preferred bike, travel dates and current conditions.",
  },
  {
    question: "Is the Anti-Atlas suitable for beginner cyclists?",
    answer:
      "Some easier road or track options may suit recreational riders, while rocky MTB terrain, steep climbs and remote routes can require stronger skills and fitness. Share your usual riding distance, handling confidence and experience so an appropriate route can be discussed. Not every route or surface suits every rider.",
  },
  {
    question: "When is a good time to cycle in the Anti-Atlas?",
    answer:
      "Spring and autumn are often considered for many southern Morocco cycling routes, but the best dates depend on the specific route and local temperatures. Exposed areas can become very hot, and conditions vary from day to day. Check the forecast for your travel dates and build water, shade and recovery stops into the itinerary.",
  },
  {
    question: "Can I combine MTB, E-MTB, gravel and road cycling in one trip?",
    answer:
      "A mixed cycling itinerary may be possible if the locations, transfers, bike arrangements and group preferences fit together. Each activity needs a suitable surface and setup. Discuss the order of riding days, distances and any transport requirements before the plan is confirmed.",
  },
  {
    question: "What should I consider for an E-MTB trip in the Anti-Atlas?",
    answer:
      "Battery range depends on capacity, elevation, assistance level, surface, temperature and riding style. Longer or remote routes need a realistic battery margin and a plan for charging or support where available. Confirm water requirements and route access, especially on exposed stages.",
  },
  {
    question: "Can I book a private cycling holiday around Tafraoute?",
    answer:
      "You can enquire about a private trip for friends, a club or a group travelling together. Share your dates, group size, chosen cycling discipline, riding experience, daily-distance preferences and accommodation needs. The final itinerary, inclusions and logistics should be confirmed before booking.",
  },
];

export default function AntiAtlasDestinationPage() {
  return (
    <>
      <main className="cycling-listing anti-atlas-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/anti-atlas-cycling-tour.jpg"
            alt="Cycling scenery among the rugged hills of Morocco's Anti-Atlas"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">ANTI-ATLAS · TAFRAOUTE · SOUTHERN MOROCCO</p>
            <h1>Anti-Atlas Cycling Tours in Morocco</h1>
            <p className="cl-hero__intro">
              Explore the rugged Anti-Atlas by mountain bike, E-MTB, gravel or road bike. From granite scenery around Tafraoute to quiet rural routes and the wider southern landscapes, discover cycling options shaped around your preferred terrain, riding experience and available time.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href={{ pathname: "/contact", query: { destination: "Anti-Atlas", request: "planning" } }}>
                Plan Your Anti-Atlas Trip
              </Link>
              <Link className="cl-button cl-button--outline" href="#anti-atlas-tours">
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
            <p className="cl-eyebrow cl-eyebrow--dark">RIDE SOUTHERN MOROCCO</p>
            <h2>Granite hills, quiet routes and four ways to explore by bike.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              The Anti-Atlas offers a different feel from Morocco's higher mountain regions. Around Tafraoute and the surrounding countryside, riders can encounter rugged hills, striking rock formations, dry valleys and small settlements linked by rural roads and tracks. The region can suit several styles of cycling, but the right route depends on whether you prefer technical mountain biking, electric-assisted riding, gravel routes or longer days on paved roads.
            </p>
            <p>
              Planning should start with your experience, bike setup, travel dates and preferred daily distance. Mountain bike routes may involve rough or rocky terrain; E-MTB plans need to account for battery range and exposed conditions; gravel itineraries depend on the surface and navigation; and road cycling stages should reflect elevation, traffic and road condition. In all cases, water, temperature and realistic distances matter.
            </p>
            <p>
              You can enquire about a short ride based around Tafraoute or a longer journey connecting selected areas of southern Morocco. Transfers, overnight stops, recovery time and local route conditions should be checked before the final itinerary is agreed.
            </p>
            <Link className="cl-text-link" href="/destinations">
              Explore all cycling destinations <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="anti-atlas-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR CYCLING STYLE</p>
                <h2>MTB, E-MTB, gravel and road tours in the Anti-Atlas</h2>
              </div>
              <p>
                Explore a mixed collection of cycling trip ideas for Tafraoute and the Anti-Atlas. Durations are starting points for discussion; the final route, availability, inclusions, daily stages and support arrangements should be confirmed for your group and travel dates.
              </p>
            </div>
            <div className="cl-tour-grid">
              {tours.map((tour) => (
                <article className="cl-tour-card" key={tour.number}>
                  <Link
                    className="cl-tour-card__image-link"
                    href={{ pathname: "/contact", query: { tour: tour.title, duration: tour.duration, discipline: tour.discipline, destination: "Anti-Atlas", request: "details" } }}
                    aria-label={`More details about ${tour.title}`}
                  >
                    <img className="cl-tour-card__image" src={tour.image} alt={tour.title} loading="lazy" />
                    <span className="cl-tour-card__number">{tour.number}</span>
                  </Link>
                  <div className="cl-tour-card__body">
                    <p className="cl-card-label">{tour.discipline} · {tour.duration}</p>
                    <p className="cl-card-label">{tour.label}</p>
                    <h3>
                      <Link href={{ pathname: "/contact", query: { tour: tour.title, duration: tour.duration, discipline: tour.discipline, destination: "Anti-Atlas", request: "details" } }}>
                        {tour.title}
                      </Link>
                    </h3>
                    <p>{tour.description}</p>
                    <div className="cl-tour-card__actions">
                      <Link className="cl-button cl-button--dark" href={{ pathname: "/contact", query: { tour: tour.title, duration: tour.duration, discipline: tour.discipline, destination: "Anti-Atlas", request: "details" } }}>
                        More Details
                      </Link>
                      <Link className="cl-button cl-button--gold" href={{ pathname: "/contact", query: { tour: tour.title, duration: tour.duration, discipline: tour.discipline, destination: "Anti-Atlas", request: "booking" } }}>
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
              <p className="cl-eyebrow">YOUR BIKE. YOUR TERRAIN. YOUR PACE.</p>
              <h2>Good planning makes a southern cycling journey more rewarding.</h2>
            </div>
            <div>
              <p>
                Routes in the Anti-Atlas can vary in surface, exposure, elevation and access to services. Before choosing a trip, discuss your bike, riding ability, daily distance and the kind of terrain you enjoy. A realistic plan also considers water, temperatures, accommodation, transfers and support, particularly where the route moves away from larger towns.
              </p>
              <Link className="cl-button cl-button--gold" href={{ pathname: "/contact", query: { destination: "Anti-Atlas", request: "planning" } }}>
                Discuss Your Route
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">WHERE TO RIDE</p>
              <h2>Explore the landscapes around the Anti-Atlas</h2>
            </div>
            <p>
              Tafraoute can be a starting point for exploring the surrounding hills and rural roads, while longer journeys may connect with other southern regions or the Atlantic. Choose locations according to your cycling style, available time and the conditions on the ground.
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
            <img src="/images/anti-atlas-morocco-cycling-tour.jpg" alt="Rugged Anti-Atlas landscapes in southern Morocco" loading="lazy" />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">BEYOND THE RIDE</p>
            <h2>Take time to discover the character of southern Morocco.</h2>
            <p>
              A cycling holiday in the Anti-Atlas is as much about the landscape between stages as it is about the kilometres covered. Granite formations, village life, open valleys and the changing light across the hills can all become part of the experience. A thoughtful itinerary leaves enough time to pause, explore and enjoy the region rather than rushing from one point to the next.
            </p>
            <p>
              This is especially important in exposed terrain, where temperatures, water availability, road surface and services can shape the practical side of a ride. Matching the route to the bike and group, and confirming local conditions before departure, helps keep the trip enjoyable and realistic.
            </p>
            <Link className="cl-button cl-button--dark" href="/about">Learn About Our Approach</Link>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">WHY PLAN WITH US</p>
                <h2>Local context and practical preparation for your cycling trip.</h2>
              </div>
              <p>
                The most suitable route depends on the people riding it. Clear discussions about terrain, pace, bike type, distance and travel dates help you choose a practical way to experience the Anti-Atlas.
              </p>
            </div>
            <div className="cl-why-grid">
              <article><span>01</span><h3>Routes matched to your bike</h3><p>Consider the actual surface and technical demands before choosing MTB, E-MTB, gravel or road stages.</p></article>
              <article><span>02</span><h3>Realistic daily distances</h3><p>Plan around elevation, terrain, heat and the time needed for stops rather than distance alone.</p></article>
              <article><span>03</span><h3>Thoughtful logistics</h3><p>Discuss transfers, accommodation, water planning, equipment and support for the selected route.</p></article>
              <article><span>04</span><h3>Time to explore</h3><p>Leave room for village stops, viewpoints and the distinctive landscapes that make the south memorable.</p></article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">PLAN YOUR ANTI-ATLAS TRIP</p>
              <h2>Three steps to start planning your cycling holiday.</h2>
            </div>
            <p>
              You do not need a complete itinerary before making an enquiry. Start with your preferred cycling style, dates and group details, then discuss suitable regions and practical options.
            </p>
          </div>
          <div className="cl-steps">
            <article><span>STEP 01</span><h3>Tell us how you ride</h3><p>Share your experience, fitness, bike type, group size and preferred daily distance.</p></article>
            <article><span>STEP 02</span><h3>Discuss the route</h3><p>Compare terrain, surface, elevation, temperatures, water stops and possible overnight locations.</p></article>
            <article><span>STEP 03</span><h3>Confirm the details</h3><p>Review the itinerary, transfers, support, accommodation and inclusions before final arrangements are made.</p></article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
              <h2>Anti-Atlas cycling: frequently asked questions</h2>
              <p>Find answers to common questions about riding styles, season and planning a trip through southern Morocco. For advice on a particular route, contact us with your dates and riding preferences.</p>
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
          <img src="/images/south-morocco-cycling-tour.jpg" alt="Southern Morocco cycling landscapes" loading="lazy" />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR NEXT SOUTHERN CYCLING ADVENTURE</p>
            <h2>Ready to discover the Anti-Atlas by bike?</h2>
            <p>Tell us when you plan to travel, which bike you prefer and the kind of terrain you want to explore. We can start discussing a route and the practical details for your Anti-Atlas cycling holiday.</p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href={{ pathname: "/contact", query: { destination: "Anti-Atlas", request: "planning" } }}>Plan Your Cycling Holiday</Link>
              <Link className="cl-button cl-button--outline" href="/destinations">View All Destinations</Link>
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
          <span>© {new Date().getFullYear()} Mountain Bike Morocco</span>
          <span>Morocco cycling adventures, thoughtfully planned.</span>
        </div>
      </footer>
    </>
  );
}
