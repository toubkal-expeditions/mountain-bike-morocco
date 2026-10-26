import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gravel Cycling in Morocco | Mountain Bike Morocco",
  description:
    "Discover gravel cycling in Morocco with a practical guide to Atlas foothills, rural tracks, bike setup, route surfaces, water, equipment and multi-day trip planning.",
  alternates: { canonical: "/journal/gravel-cycling-morocco" },
  openGraph: {
    title: "Gravel Cycling in Morocco",
    description:
      "Plan a gravel cycling adventure in Morocco with advice on terrain, bike setup, route choice, preparation and local travel.",
    type: "article",
    images: ["/images/gravel-cycling-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "ROUTE INSPIRATION",
    title: "Best Cycling Routes From Marrakech",
    text: "Explore countryside routes, mountain foothills and open landscapes around Marrakech.",
    image: "/images/atlas-marrakech-cycling-tour.jpg",
    href: "/journal/best-cycling-routes-from-marrakech",
  },
  {
    category: "DESTINATION GUIDE",
    title: "Complete High Atlas Mountains Cycling Guide",
    text: "Discover how altitude, terrain, weather and logistics shape a cycling journey in the High Atlas.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/journal/complete-high-atlas-mountains-cycling-guide",
  },
  {
    category: "TRIP PLANNING",
    title: "Planning Multi-Day Cycling Tours",
    text: "Prepare realistic daily stages, accommodation, luggage transfers and support between rides.",
    image: "/images/group-adventure-cycling-morocco.jpg",
    href: "/journal/planning-multi-day-cycling-tours",
  },
];

const faqs = [
  {
    question: "Is Morocco suitable for a gravel cycling holiday?",
    answer:
      "Morocco offers paved connectors, rural tracks and unpaved roads that may suit gravel riding. The surface varies by region and route, so ask for a stage-by-stage description, tyre requirements, elevation and any rough or sandy sections before choosing an itinerary.",
  },
  {
    question: "What kind of gravel bike and tyres should I use?",
    answer:
      "The right setup depends on the route surface, luggage load and rider experience. Tyre width, tread, puncture protection, gearing, brakes and frame clearance all matter. Confirm the actual route conditions before deciding on your bike and tyre setup.",
  },
  {
    question: "Can beginners enjoy gravel cycling in Morocco?",
    answer:
      "Some routes may suit riders who are comfortable cycling on unpaved surfaces. Long remote stages, loose descents and extended climbs can be demanding. Share your normal riding distance, fitness and gravel experience so the route can be matched to your ability.",
  },
  {
    question: "How should I plan water and food for remote routes?",
    answer:
      "Do not assume every track has regular resupply points. Confirm the longest interval between reliable water and food stops, the carrying capacity required, support-vehicle access and the backup plan if a stop is unavailable.",
  },
  {
    question: "Can a gravel tour include the Atlas Mountains or desert regions?",
    answer:
      "Routes may be possible in several regions, but the bike choice and route design depend on surface, elevation, season and logistics. Clarify transfer times, accommodation, mechanical support and any sections that may be too rough or sandy for your setup.",
  },
  {
    question: "What should I check before booking a multi-day gravel tour?",
    answer:
      "Ask for each stage's distance, ascent, surface mix, expected riding hours, food and water options, luggage handling, accommodation, mechanical support, inclusions and emergency arrangements. Share your riding experience and equipment needs before confirming the itinerary.",
  },
];

export default function GravelCyclingMoroccoPage() {
  return (
    <main className="gravel-cycling-morocco-article" id="top">
      <div className="article-shell article-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/journal">Journal</Link>
        <span>/</span>
        <span>Gravel Cycling in Morocco</span>
      </div>

      <header className="article-shell article-hero">
        <div className="article-hero-copy">
          <p className="article-eyebrow">
            GRAVEL CYCLING · MIXED SURFACES · MOROCCO
          </p>
          <h1>Gravel Cycling in Morocco</h1>
          <p className="article-deck">
            A gravel cycling holiday in Morocco can connect quiet paved
            roads, hard-packed tracks, rough rural routes and wide-open
            landscapes. The best experience depends on the surfaces,
            elevation, daily distance and the support available between
            settlements. Discover how to choose a suitable route, prepare
            your bike and plan a rewarding gravel adventure across Morocco.
          </p>
          <div className="article-meta">
            <span>6 MIN READ</span>
            <span>GRAVEL CYCLING · MOROCCO</span>
          </div>
        </div>

        <figure className="article-hero-image">
          <img
            src="/images/gravel-cycling-morocco.jpg"
            alt="Gravel cycling adventure through Morocco's mountain and rural landscapes"
            fetchPriority="high"
          />
          <figcaption>
            Choose your gravel route around the real terrain, realistic
            daily stages and reliable support.
          </figcaption>
        </figure>
      </header>

      <div className="article-shell article-main-grid">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#gravel-overview">Gravel cycling in Morocco</a>
          <a href="#regions-and-terrain">Regions and terrain</a>
          <a href="#bike-setup">Bike and tyre setup</a>
          <a href="#distance-and-climbing">Distance and climbing</a>
          <a href="#water-and-support">Water, food and support</a>
          <a href="#multi-day-logistics">Multi-day logistics</a>
          <a href="#season-and-preparation">Season and preparation</a>
          <a href="#responsible-gravel">Responsible riding</a>
          <a href="#gravel-checklist">Trip checklist</a>
          <a href="#gravel-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            Gravel riding in Morocco is about connecting places and
            landscapes across different surfaces. A single stage may
            include smooth tarmac, packed earth, stones, corrugated tracks
            and loose gravel. Understanding these changes helps you choose
            the right bike, carry the right equipment and plan each day
            around the effort the route actually requires.
          </p>

          <section id="gravel-overview">
            <h2>Discover Morocco beyond the main roads</h2>
            <p>
              Gravel cycling offers a different way to experience Morocco.
              Rather than following paved roads throughout the journey,
              riders can explore rural valleys, quiet countryside and
              mountain foothills using a mixture of tracks and road
              connections. The scenery and riding character can change
              considerably from one region to another.
            </p>
            <p>
              Some routes use firm tracks connected by quiet paved roads.
              Others include rougher surfaces, loose stones, corrugations
              and longer distances between facilities. The word
              &quot;gravel&quot; alone does not describe how difficult a
              route will be. Before booking, ask about the surface mix,
              total ascent, daily distance and the most demanding sections.
            </p>
            <p>
              A well-planned itinerary balances the riding itself with
              opportunities to experience the landscape and local
              communities. Depending on the route, your journey might
              include traditional villages, agricultural valleys, broad
              mountain views and quieter roads far from busy tourist
              areas.
            </p>
            <div className="article-tip">
              <strong>Planning tip</strong>
              <p>
                Request a stage-by-stage route summary covering distance,
                ascent, surfaces, water stops and support access. A route
                map is useful, but a clear description of the terrain is
                equally important.
              </p>
            </div>
          </section>

          <section id="regions-and-terrain">
            <h2>Gravel cycling in the Atlas Mountains and beyond</h2>
            <figure className="article-inline-image">
              <img
                src="/images/gravel-bike-atlas-mountains.JPG"
                alt="Gravel bicycle exploring tracks in Morocco's Atlas Mountains"
                loading="lazy"
              />
              <figcaption>
                Atlas foothills and rural valleys can offer varied gravel
                stages, depending on the surface and elevation.
              </figcaption>
            </figure>

            <h3>Atlas foothills and rural valleys</h3>
            <p>
              The Atlas foothills and surrounding valleys can combine
              village roads, dirt tracks, rolling terrain and mountain
              scenery. Elevation and temperature may change noticeably
              during a ride, especially when a route climbs away from
              lower valleys. Ask about steep gradients, loose surfaces,
              water access and the possibility of sections that may be
              easier to walk than ride.
            </p>

            <h3>Marrakech and the surrounding countryside</h3>
            <p>
              The countryside around Marrakech can work well for a day
              ride or as the start of a longer cycling holiday. Depending
              on the route, riders may use paved connections to reach
              quieter tracks and open landscapes. Confirm the starting
              point, transfer time, traffic exposure and how much of the
              day will be spent riding rather than travelling by vehicle.
            </p>

            <h3>Agafay and open southern landscapes</h3>
            <p>
              Rocky, exposed landscapes can provide a memorable setting
              for gravel exploration, but not every unpaved surface is
              suitable for every gravel bike. Firm tracks can ride very
              differently from deep sand, sharp stones or heavily
              corrugated roads. Ask for details about the most difficult
              sections before choosing your equipment and daily distance.
            </p>
          </section>

          <section id="bike-setup">
            <h2>Choose a bike and equipment for the route</h2>
            <p>
              The best gravel bike setup depends on the terrain, your
              experience and the amount of luggage you plan to carry.
              Tyre clearance, casing strength, tread, gearing and braking
              all influence comfort and control. Wider tyres may improve
              comfort on rough ground when the frame permits them, while
              a smoother tread may work well on firm tracks and paved
              connectors.
            </p>

            <h3>Tyres, gearing and puncture protection</h3>
            <p>
              Ask whether the route includes loose stones, sharp rock,
              washboard surfaces, soft sand or long paved sections.
              Choose tyres and pressures for those conditions and your
              total load. Suitable gearing is important for sustained
              climbs, especially when carrying luggage or riding on
              consecutive days. Confirm compatibility and setup before
              travelling.
            </p>

            <h3>Repair kit and bike checks</h3>
            <p>
              Carry basic tools and spares that fit your bike, including
              puncture-repair equipment, a pump or inflation system, tyre
              levers and any small parts required by your setup. Before
              departure, check tyres, brakes, shifting, chain, bolts and
              wheels. Ask the organiser what mechanical support is
              available and what the support team carries.
            </p>

            <div className="article-tip">
              <strong>Hiring a gravel bike?</strong>
              <p>
                Confirm the available frame size, fit, tyre clearance,
                pedals, helmet, luggage options and repair equipment.
                Also ask what happens if a mechanical problem cannot be
                fixed during the ride.
              </p>
            </div>
          </section>

          <section id="distance-and-climbing">
            <h2>Plan realistic distance, climbing and daily effort</h2>
            <p>
              Kilometres alone do not tell you how demanding a gravel
              stage will feel. A longer day on firm, rolling tracks may
              be manageable, while a shorter route with steep climbs,
              loose surfaces or navigation challenges can require more
              time and concentration. Wind, heat, luggage and accumulated
              fatigue also affect your pace.
            </p>
            <p>
              Review both the total ascent and where the climbing occurs.
              Make sure the daily schedule allows time for breaks, meals,
              photographs, repairs and unexpected delays. If your group
              has different levels of experience, plan around a pace that
              the least experienced rider can sustain comfortably.
            </p>

            <h3>Navigation and route confidence</h3>
            <p>
              Rural tracks can branch, change condition or become
              difficult to identify on the ground. Ask how navigation is
              handled, whether a guide rides with the group and whether
              support vehicles can access the planned route. Offline maps
              and a charged device can help, but they do not replace local
              route knowledge and an agreed plan if riders become
              separated.
            </p>
          </section>

          <section id="water-and-support">
            <h2>Water, food and mechanical support</h2>
            <p>
              Resupply is one of the most important questions when
              planning a gravel journey. Some stages pass through
              settlements with places to stop; others may have long gaps
              without dependable shops, taps or cafés. Confirm the
              longest interval between reliable water sources and the
              carrying capacity riders will need.
            </p>
            <p>
              Food planning matters too, particularly on days with
              sustained climbing or rough surfaces. Confirm what meals
              and snacks are provided, when the group expects to stop
              and whether dietary needs can be accommodated. Carry
              supplies appropriate to the stage rather than assuming the
              next village will have everything you need.
            </p>
            <p>
              Support arrangements vary from one trip to another. Clarify
              whether a vehicle can reach the route, how luggage moves
              between overnight stops, which mechanical spares are
              available and what happens if a rider cannot continue.
              Remote riding requires a practical contingency plan.
            </p>
          </section>

          <section id="multi-day-logistics">
            <h2>Organise a multi-day gravel cycling adventure</h2>
            <p>
              A multi-day trip needs a practical plan beyond the riding
              itself. Confirm where each stage begins and ends, what
              accommodation is planned, when meals are provided, how
              luggage is transferred and whether the itinerary includes
              rest days or shorter stages. Transfers between regions can
              take time, so clarify whether a day includes substantial
              vehicle travel as well as cycling.
            </p>
            <p>
              If you are travelling with your own bike, check airline
              packing requirements, transfer space for your bike case
              and the time allowed for assembly and safety checks. If a
              rental bike is planned, confirm the fit, pedal type,
              included accessories and replacement arrangements.
            </p>
            <ul className="article-checklist">
              <li>
                <strong>Daily plan:</strong> distance, ascent, surface,
                expected riding hours and finish time.
              </li>
              <li>
                <strong>Logistics:</strong> accommodation, meals, luggage
                transfers and vehicle connections.
              </li>
              <li>
                <strong>Support:</strong> guiding, mechanical tools,
                communication and contingency options.
              </li>
              <li>
                <strong>Equipment:</strong> bike fit, pedals, helmet,
                personal spares and luggage requirements.
              </li>
              <li>
                <strong>Inclusions:</strong> clarify guiding, transport,
                accommodation, food and additional costs.
              </li>
            </ul>
          </section>

          <section id="season-and-preparation">
            <h2>Choose the season and prepare for the terrain</h2>
            <p>
              Conditions depend on the region, elevation and travel
              dates. Lower and southern areas can be hot, while mountain
              mornings and higher sections may feel cool, particularly
              when wind or changing weather is involved. Ask for
              route-specific advice close to departure rather than
              relying on a general seasonal description.
            </p>
            <p>
              Prepare with rides that resemble the planned duration and
              include climbing and mixed surfaces when possible. Practise
              using the bags or hydration system you expect to carry.
              Have your bike serviced before travelling and make sure
              you can manage common repairs. Comfortable contact points,
              sufficient food and fluids, sleep and realistic pacing all
              help on consecutive riding days.
            </p>
            <p>
              Pack breathable riding clothing, sun protection and
              adjustable layers suited to the route and forecast. A
              lightweight insulating layer and wind or rain shell may
              be useful when conditions change at elevation.
            </p>
          </section>

          <section id="responsible-gravel">
            <h2>Experience rural Morocco responsibly</h2>
            <p>
              Gravel routes may pass close to farms, homes and working
              rural tracks. Slow down near people and animals, give
              walkers space and follow local guidance about access.
              Avoid cutting across fields or fragile ground, close gates
              when appropriate and ask before taking identifiable
              photographs of people.
            </p>
            <p>
              Carry out wrappers, used tubes and other waste. Keep noise
              low in villages and respect that a track used for cycling
              may also be an important route for local residents.
              Supporting local businesses where possible can help make
              cycling a welcome activity in the places you visit.
            </p>
          </section>

          <section id="gravel-checklist">
            <h2>Gravel cycling trip checklist</h2>
            <p>
              Before confirming your route, make sure the main practical
              questions have been answered.
            </p>
            <ul className="article-checklist">
              <li>
                <strong>Route:</strong> surface mix, distance, ascent,
                technical sections and expected riding time.
              </li>
              <li>
                <strong>Bike:</strong> tyre clearance, gearing, brakes,
                luggage capacity and mechanical condition.
              </li>
              <li>
                <strong>Supplies:</strong> water capacity, food stops,
                longest resupply gap and emergency provisions.
              </li>
              <li>
                <strong>Support:</strong> guide, vehicle access, spares,
                communication and contingency procedures.
              </li>
              <li>
                <strong>Trip details:</strong> accommodation, transfers,
                luggage, inclusions and group pace.
              </li>
            </ul>
            <div className="article-tip">
              <strong>Before you book</strong>
              <p>
                Share your dates, group size, riding experience, preferred
                daily distance and bike setup. Ask for specific details
                about surface conditions, resupply and support on remote
                stages.
              </p>
            </div>
          </section>

          <section id="gravel-faq" className="article-faq">
            <h2>Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>Plan your gravel ride around the details that matter.</strong>
            <p>
              Use this guide as a starting point, then confirm the current
              route, surface, weather and logistics for your travel dates.
              Explore our{" "}
              <Link href="/cycling-trips/gravel">gravel cycling tours</Link>{" "}
              or{" "}
              <Link href="/contact?request=gravel-cycling-planning">
                ask us about planning your trip
              </Link>.
            </p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading">
            <div>
              <p className="article-eyebrow article-eyebrow-dark">
                KEEP EXPLORING
              </p>
              <h2>More guides for your Morocco cycling trip</h2>
            </div>
            <Link className="article-text-link" href="/journal">
              View all Journal articles ↗
            </Link>
          </div>

          <div className="article-related-grid">
            {relatedArticles.map((article) => (
              <article className="article-related-card" key={article.href}>
                <Link
                  className="article-related-image"
                  href={article.href}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                  />
                </Link>
                <div className="article-related-content">
                  <p className="article-eyebrow article-eyebrow-dark">
                    {article.category}
                  </p>
                  <h3>
                    <Link href={article.href}>{article.title}</Link>
                  </h3>
                  <p>{article.text}</p>
                  <Link className="article-text-link" href={article.href}>
                    Read article ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="article-cta">
        <div className="article-shell article-cta-inner">
          <div>
            <p className="article-eyebrow">YOUR NEXT GRAVEL ADVENTURE</p>
            <h2>Ready to explore Morocco by gravel bike?</h2>
            <p>
              Share your preferred dates, group size, riding experience and
              the kind of terrain you enjoy. The route, daily stages and
              support arrangements can then be discussed around your plans.
            </p>
          </div>
          <div className="article-cta-actions">
            <Link
              className="article-button article-button-light"
              href="/cycling-trips/gravel"
            >
              Explore Gravel Tours ↗
            </Link>
            <Link
              className="article-button article-button-outline"
              href="/contact?request=gravel-cycling-planning"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>

      <footer className="article-site-footer">
        <div className="article-shell article-footer-grid">
          <div className="article-footer-brand">
            <Link href="/" className="article-brand">
              <img
                src="/images/mountain-bike-morocco-logo.png"
                alt="Mountain Bike Morocco"
              />
              <span>
                MOUNTAIN BIKE <em>MOROCCO</em>
              </span>
            </Link>
            <p>
              Guided mountain biking, E-MTB, gravel and road cycling
              experiences across Morocco. Discover landscapes, trails and
              local culture at your own pace.
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
            <Link href="/destinations/imlil">Imlil Valley</Link>
            <Link href="/destinations/toubkal">Mount Toubkal</Link>
            <Link href="/destinations/marrakech">Marrakech</Link>
            <Link href="/destinations">All Destinations</Link>
          </div>

          <div>
            <h3>Let&apos;s Plan</h3>
            <Link href="/about">About Us</Link>
            <Link href="/events">Events</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Plan Your Trip</Link>
          </div>
        </div>

        <div className="article-shell article-footer-bottom">
          <span>© {new Date().getFullYear()} Mountain Bike Morocco</span>
          <span>Morocco cycling adventures, thoughtfully planned.</span>
          <Link href="#top">Back to top ↑</Link>
        </div>
      </footer>

      <style>{`
        .gravel-cycling-morocco-article {
          background: #fbfaf7;
          color: #201f1c;
          font-family: Arial, Helvetica, sans-serif;
          line-height: 1.65;
          min-height: 100vh;
        }

        .article-shell {
          width: min(1180px, calc(100% - 48px));
          margin-inline: auto;
        }

        .article-breadcrumbs {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding-top: 25px;
          padding-bottom: 20px;
          font-size: 12px;
          color: #777168;
        }

        .article-breadcrumbs a {
          color: inherit;
          text-decoration: none;
        }

        .article-breadcrumbs a:hover {
          color: #c65c35;
        }

        .article-hero {
          padding: 44px 0 60px;
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: clamp(30px, 5vw, 68px);
          align-items: center;
        }

        .article-eyebrow {
          font-size: 11px;
          line-height: 1.5;
          font-weight: 800;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: #e7663b;
          margin: 0 0 16px;
        }

        .article-eyebrow-dark {
          color: #bd542f;
        }

        .article-hero h1 {
          font-size: clamp(42px, 5.8vw, 76px);
          line-height: .99;
          letter-spacing: -.055em;
          margin: 0 0 22px;
          max-width: 700px;
        }

        .article-deck {
          font-size: 18px;
          line-height: 1.8;
          color: #5d5953;
          margin: 0;
          max-width: 660px;
        }

        .article-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 25px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .13em;
          color: #777168;
        }

        .article-hero-image {
          margin: 0;
          position: relative;
          min-width: 0;
        }

        .article-hero-image img {
          display: block;
          width: 100%;
          height: clamp(320px, 40vw, 515px);
          object-fit: cover;
        }

        .article-hero-image figcaption {
          padding: 10px 0 0;
          font-size: 12px;
          color: #777168;
          line-height: 1.6;
        }

        .article-main-grid {
          display: grid;
          grid-template-columns: 220px minmax(0, 760px);
          justify-content: space-between;
          gap: clamp(28px, 5vw, 75px);
          padding-top: 20px;
          padding-bottom: 90px;
        }

        .article-toc {
          align-self: start;
          position: sticky;
          top: 30px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 20px;
          border: 1px solid #dedbd4;
          background: #fff;
        }

        .article-toc p {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .16em;
          color: #bd542f;
          margin: 0 0 5px;
        }

        .article-toc a {
          font-size: 13px;
          line-height: 1.45;
          color: #514d47;
          text-decoration: none;
        }

        .article-toc a:hover {
          color: #bd542f;
        }

        .article-body {
          min-width: 0;
          font-size: 16px;
          color: #4e4a45;
        }

        .article-body p {
          margin: 0 0 19px;
          line-height: 1.9;
        }

        .article-body .article-lead {
          font-size: 20px;
          line-height: 1.8;
          color: #292723;
          margin-bottom: 38px;
        }

        .article-body section {
          scroll-margin-top: 35px;
          margin: 0 0 38px;
        }

        .article-body h2 {
          font-size: clamp(28px, 3.2vw, 38px);
          line-height: 1.12;
          letter-spacing: -.035em;
          color: #211f1b;
          margin: 0 0 17px;
        }

        .article-body h3 {
          font-size: 22px;
          line-height: 1.2;
          margin: 24px 0 12px;
          color: #211f1b;
        }

        .article-tip {
          margin: 26px 0;
          padding: 23px 25px;
          background: #eeeae2;
          border-left: 3px solid #c65c35;
        }

        .article-tip strong {
          display: block;
          margin-bottom: 6px;
          color: #25231f;
        }

        .article-tip p {
          margin: 0;
        }

        .article-checklist {
          margin: 10px 0 24px;
          padding-left: 23px;
        }

        .article-checklist li {
          padding-left: 5px;
          margin: 0 0 12px;
          line-height: 1.8;
        }

        .article-checklist strong {
          color: #24221e;
        }

        .article-inline-image {
          margin: 28px 0 40px;
        }

        .article-inline-image img {
          display: block;
          width: 100%;
          max-height: 450px;
          object-fit: cover;
        }

        .article-inline-image figcaption {
          padding: 10px 0 0;
          color: #777168;
          font-size: 12px;
          line-height: 1.6;
        }

        .article-body a {
          color: #bd542f;
        }

        .article-faq details {
          border-top: 1px solid #dcd8d0;
          padding: 18px 0;
        }

        .article-faq details:last-child {
          border-bottom: 1px solid #dcd8d0;
        }

        .article-faq summary {
          cursor: pointer;
          list-style: none;
          font-size: 16px;
          font-weight: 700;
          color: #24221e;
        }

        .article-faq summary::-webkit-details-marker {
          display: none;
        }

        .article-faq summary:after {
          content: '+';
          float: right;
          color: #c65c35;
          font-size: 22px;
        }

        .article-faq details[open] summary:after {
          content: '−';
        }

        .article-faq details p {
          margin: 13px 0 0;
          color: #625e57;
        }

        .article-author-note {
          padding: 22px 24px;
          background: #fff;
          border: 1px solid #e0ddd6;
        }

        .article-author-note strong {
          display: block;
          color: #24221e;
          margin-bottom: 6px;
        }

        .article-author-note p {
          margin: 0;
          font-size: 14px;
        }

        .article-author-note a {
          color: #bd542f;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .article-related {
          padding: 76px 0 86px;
          background: #f0eee8;
        }

        .article-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 30px;
          margin-bottom: 30px;
        }

        .article-section-heading h2 {
          font-size: clamp(30px, 4vw, 45px);
          line-height: 1.1;
          letter-spacing: -.04em;
          margin: 0;
        }

        .article-text-link {
          font-size: 13px;
          font-weight: 800;
          text-decoration: none;
          color: #bd542f;
        }

        .article-text-link:hover {
          text-decoration: underline;
        }

        .article-related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .article-related-card {
          background: #fff;
          border: 1px solid #e0ddd6;
          min-width: 0;
        }

        .article-related-image {
          display: block;
          overflow: hidden;
        }

        .article-related-image img {
          display: block;
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: transform .3s ease;
        }

        .article-related-image:hover img {
          transform: scale(1.03);
        }

        .article-related-content {
          padding: 22px;
        }

        .article-related-content .article-eyebrow {
          font-size: 9px;
          margin-bottom: 10px;
        }

        .article-related-content h3 {
          font-size: 21px;
          line-height: 1.2;
          margin: 0 0 10px;
          letter-spacing: -.02em;
        }

        .article-related-content h3 a {
          color: inherit;
          text-decoration: none;
        }

        .article-related-content h3 a:hover {
          color: #bd542f;
        }

        .article-related-content > p:not(.article-eyebrow) {
          color: #68645d;
          font-size: 13px;
          line-height: 1.7;
          margin: 0 0 17px;
        }

        .article-cta {
          padding: 65px 0;
          background: #23231f;
          color: #fff;
        }

        .article-cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 35px;
        }

        .article-cta .article-eyebrow {
          color: #f18b60;
        }

        .article-cta h2 {
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.05;
          letter-spacing: -.04em;
          max-width: 600px;
          margin: 0 0 14px;
        }

        .article-cta-inner > div:first-child > p:last-child {
          max-width: 650px;
          color: #d1cdc5;
          margin: 0;
          line-height: 1.8;
        }

        .article-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          flex-shrink: 0;
        }

        .article-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 17px;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          transition: background .2s ease, color .2s ease;
        }

        .article-button-light {
          background: #e7663b;
          color: #fff;
        }

        .article-button-light:hover {
          background: #d6522a;
        }

        .article-button-outline {
          border: 1px solid #8f8b82;
          color: #fff;
        }

        .article-button-outline:hover {
          background: #fff;
          color: #24221e;
        }

        .article-site-footer {
          background: #181815;
          color: #fff;
          padding-top: 55px;
        }

        .article-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr repeat(3, minmax(0, 1fr));
          gap: 40px;
          padding-bottom: 45px;
        }

        .article-footer-grid > div {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 11px;
        }

        .article-footer-grid h3 {
          font-size: 11px;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: #e98258;
          margin: 0 0 7px;
        }

        .article-footer-grid a:not(.article-brand) {
          color: #d1cec7;
          font-size: 13px;
          text-decoration: none;
        }

        .article-footer-grid a:not(.article-brand):hover {
          color: #fff;
        }

        .article-brand {
          display: flex;
          flex-direction: column;
          gap: 12px;
          text-decoration: none;
          color: #fff;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .07em;
        }

        .article-brand img {
          width: 185px;
          max-height: 60px;
          object-fit: contain;
          object-position: left center;
        }

        .article-brand em {
          font-style: normal;
          color: #e98258;
          margin-left: 5px;
        }

        .article-footer-brand p {
          max-width: 290px;
          font-size: 13px;
          line-height: 1.8;
          color: #aaa69d;
          margin: 6px 0 0;
        }

        .article-footer-bottom {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          border-top: 1px solid #393832;
          padding-top: 18px;
          padding-bottom: 20px;
          color: #a9a59d;
          font-size: 11px;
        }

        .article-footer-bottom a {
          color: inherit;
          text-decoration: none;
        }

        .article-footer-bottom a:hover {
          color: #fff;
        }

        @media (max-width: 900px) {
          .article-hero {
            grid-template-columns: 1fr;
            gap: 28px;
            padding-top: 22px;
          }

          .article-hero h1 {
            max-width: 850px;
          }

          .article-hero-image img {
            height: clamp(290px, 58vw, 480px);
          }

          .article-main-grid {
            grid-template-columns: 1fr;
            padding-top: 0;
          }

          .article-toc {
            position: static;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px 18px;
          }

          .article-toc p {
            grid-column: 1 / -1;
          }

          .article-related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .article-cta-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .article-footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 32px 22px;
          }

          .article-footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 560px) {
          .article-shell {
            width: calc(100% - 34px);
          }

          .article-hero {
            padding-top: 20px;
            padding-bottom: 40px;
          }

          .article-hero h1 {
            font-size: 43px;
          }

          .article-deck {
            font-size: 16px;
          }

          .article-main-grid {
            padding-bottom: 58px;
          }

          .article-body {
            font-size: 15px;
          }

          .article-body .article-lead {
            font-size: 18px;
          }

          .article-toc {
            padding: 16px;
            grid-template-columns: 1fr 1fr;
          }

          .article-related {
            padding: 54px 0;
          }

          .article-section-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }

          .article-related-grid {
            grid-template-columns: 1fr;
          }

          .article-related-image img {
            height: 235px;
          }

          .article-cta {
            padding: 50px 0;
          }

          .article-cta-actions {
            width: 100%;
            flex-direction: column;
          }

          .article-button {
            width: 100%;
          }

          .article-footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px 16px;
          }

          .article-brand img {
            width: 155px;
          }

          .article-footer-grid > div {
            min-width: 0;
          }

          .article-footer-grid a:not(.article-brand) {
            font-size: 12px;
          }

          .article-footer-bottom {
            flex-direction: column;
            gap: 7px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gravel-cycling-morocco-article *,
          .gravel-cycling-morocco-article *::before,
          .gravel-cycling-morocco-article *::after {
            scroll-behavior: auto !important;
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}