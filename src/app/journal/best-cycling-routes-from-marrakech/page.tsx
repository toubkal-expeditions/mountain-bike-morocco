import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Cycling Routes From Marrakech | Mountain Bike Morocco",
  description:
    "Compare the best cycling route styles from Marrakech, from nearby countryside and Agafay's rocky terrain to High Atlas climbs, gravel tracks and road rides. Learn how to choose the route, bike and daily effort for your trip.",
  alternates: { canonical: "/journal/best-cycling-routes-from-marrakech" },
  openGraph: {
    title: "Best Cycling Routes From Marrakech",
    description:
      "A practical guide to cycling from Marrakech, with ideas for countryside rides, Agafay, Atlas foothills, road routes and multi-day mountain journeys.",
    type: "article",
    images: ["/images/atlas-marrakech-cycling-tour.jpg"],
  },
};

const relatedArticles = [
  {
    category: "ROUTE INSPIRATION",
    title: "Marrakech to Atlas Mountains by Bike",
    text: "Compare route formats, transfers and riding options when linking Marrakech with the High Atlas.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/journal/marrakech-to-atlas-mountains-by-bike",
  },
  {
    category: "DESERT CYCLING",
    title: "Agafay Desert Day Trips: Cycling Guide",
    text: "Understand the rocky terrain, route planning, water needs and timing for a ride near Marrakech.",
    image: "/images/Agafay-desert-morocco.jpg",
    href: "/journal/agafay-desert-day-trips-cycling-guide",
  },
  {
    category: "SCENIC ROUTES",
    title: "Scenic Cycling Routes: The Best Views in Morocco",
    text: "Explore landscapes and route types that make a cycling holiday memorable beyond the kilometres.",
    image: "/images/atlas-cycling-adventure.jpg",
    href: "/journal/scenic-cycling-routes-morocco",
  },
];

const faqs = [
  {
    question: "Can I start a cycling tour directly from Marrakech?",
    answer:
      "Some rides can start near the city, while others use a transfer to reach quieter countryside, Agafay or Atlas foothills. Confirm the start point, transfer duration, route surface, traffic exposure and time spent actually riding before choosing an itinerary.",
  },
  {
    question: "Which cycling route is best for a one-day trip?",
    answer:
      "A suitable one-day route depends on your preferred bike, fitness, riding experience and how much time you want to spend transferring. Nearby countryside or an Agafay ride may work for some groups; a mountain route may need a longer transfer and more time. Ask for distance, climbing and expected riding time rather than choosing by destination name alone.",
  },
  {
    question: "Is Agafay suitable for mountain bikes and gravel bikes?",
    answer:
      "Agafay has open, rocky terrain and the best bike depends on the exact route and surface. MTB may suit rougher tracks, while gravel can work on appropriate unpaved roads. Ask for the route description, loose or technical sections, expected exposure to heat and support plan before deciding.",
  },
  {
    question: "Can road cyclists ride from Marrakech into the Atlas Mountains?",
    answer:
      "Road cycling routes can be planned around paved roads and mountain climbs, but the route should account for traffic, road conditions, elevation, distance and daylight. Some trips start outside the city to avoid less suitable sections. Confirm the exact roads and support arrangements before booking.",
  },
  {
    question: "Is an E-MTB a good choice for the foothills?",
    answer:
      "An E-MTB can help with climbing, but battery range depends on elevation, terrain, assistance mode, temperature and rider load. Technical descents still require good bike handling. Ask about bike sizes, charging, spare batteries if available, and how the route is selected for your group.",
  },
  {
    question: "What should I tell you before booking a route from Marrakech?",
    answer:
      "Share your dates, group size, cycling style, usual distance, climbing and technical experience, and whether you prefer a day ride or a multi-day trip. Also ask about transfers, bike and helmet availability, water stops, luggage, accommodation where relevant, mechanical support and what is included in the price.",
  },
];

export default function BestCyclingRoutesFromMarrakechPage() {
  return (
    <main className="best-marrakech-routes-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Best Cycling Routes From Marrakech</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">ROUTE INSPIRATION · MARRAKECH · MOROCCO</p>
          <h1>Best Cycling Routes From Marrakech</h1>
          <p className="article-deck">
            Marrakech is a useful starting point for several kinds of cycling holiday: countryside loops, rocky tracks near Agafay, rides into the Atlas foothills, and longer journeys towards mountain valleys. The best route is not simply the one with the most distance or elevation; it is the one that fits your bike, experience, available time and the kind of scenery you want to explore.
          </p>
          <div className="article-meta"><span>6 MIN READ</span><span>ROUTE INSPIRATION · MOROCCO</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/atlas-marrakech-cycling-tour.jpg" alt="Cycling route from Marrakech towards the Atlas Mountains" fetchPriority="high" />
          <figcaption>Start with the landscape and riding style you want, then build a realistic route from Marrakech.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#route-overview">Understand the route options</a>
          <a href="#countryside-rides">Countryside rides</a>
          <a href="#agafay-routes">Agafay rocky terrain</a>
          <a href="#atlas-foothills">Atlas foothills and valleys</a>
          <a href="#choose-your-style">Choose your cycling style</a>
          <a href="#day-or-multi-day">Day ride or multi-day trip</a>
          <a href="#planning-details">What to check before riding</a>
          <a href="#timing-conditions">Timing and conditions</a>
          <a href="#route-checklist">Route checklist</a>
          <a href="#marrakech-routes-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            A route from Marrakech can mean a short ride through nearby rural landscapes or the starting point for a much bigger journey into the High Atlas. Before choosing, compare surface, climbing, traffic, transfer time and how much riding you want to do during the day. These details make a more useful guide than a route name alone.
          </p>

          <section id="route-overview">
            <h2>Understand the main cycling route options</h2>
            <p>
              The area around Marrakech offers a number of distinct riding settings within a broader holiday itinerary. Lower countryside routes can be a good way to add cycling to a city stay. Agafay provides a more open and rocky landscape, while the Atlas foothills and mountain valleys bring greater variation in elevation, terrain and temperature. Road cyclists may focus on paved routes and climbs; mountain bikers and gravel riders generally need more detail about surface and technical features.
            </p>
            <p>
              The practical starting point matters. Depending on the route, a tour may begin in or near Marrakech, include a vehicle transfer to quieter roads, or travel further towards a mountain valley before the ride starts. Ask for the start and finish points and the estimated transfer time, so you can understand how much of the day is spent cycling.
            </p>
            <div className="article-tip"><strong>Planning tip</strong><p>Ask for the route distance, total ascent, surface, expected riding time and transfer duration together. Those details make it easier to compare two tours that sound similar but may feel very different on the bike.</p></div>
          </section>

          <section id="countryside-rides">
            <h2>1. Countryside rides around Marrakech</h2>
            <p>
              Rural tracks and quieter roads outside the city can offer a gentler introduction to cycling in the region. Depending on the route, riders may pass cultivated land, small settlements and open views towards the mountains. A countryside ride can suit visitors who have limited time or want a cycling day without committing to a remote or technical expedition.
            </p>
            <p>
              Surface varies from route to route. A ride designed for a gravel bike may use firm dirt roads and paved connectors; an MTB ride can take in rougher tracks where appropriate. Road cyclists should confirm that the planned roads are suitable for their experience and comfort with local traffic. Do not assume all rural tracks are smooth, or that every quiet-looking road has the same traffic conditions throughout the day.
            </p>
            <h3>Who may enjoy this option?</h3>
            <p>
              This format can work for a half-day or full-day excursion, especially for mixed groups who prefer a moderate pace and frequent stops. It is also useful for riders who want to try a local route before deciding whether to book a longer journey. Tell the organiser if your group includes different fitness levels or anyone who would prefer a less technical ride.
            </p>
          </section>

          <section id="agafay-routes">
            <h2>2. Agafay: rocky open terrain near the city</h2>
            <figure className="article-inline-image"><img src="/images/Agafay-desert-morocco.jpg" alt="Rocky landscape in the Agafay area near Marrakech" loading="lazy" /><figcaption>Agafay offers a different feel from the higher Atlas: open rocky landscapes, exposed stretches and broad views.</figcaption></figure>
            <p>
              Agafay is known for its dry, open terrain and rocky surfaces. It can be an appealing option for riders who want to leave the city behind without planning a long journey into the high mountains. The actual riding experience depends on the selected route: some tracks are suitable for steady scenic riding, while rougher sections may require confident bike handling and a suitable mountain bike.
            </p>
            <p>
              Heat and exposure deserve attention, particularly during warmer periods. Confirm start time, shade and water opportunities, the amount of time spent in exposed areas, and whether the ride includes a support vehicle. Gravel bikes may be appropriate on firmer tracks, but the tyre clearance, surface and technical sections should be checked rather than assumed.
            </p>
            <p>
              Agafay is not a substitute for every kind of desert expedition. If you want long-distance remote riding, multiple stages or a route deeper into southern Morocco, discuss a different itinerary and allow time for transfers and support planning.
            </p>
          </section>

          <section id="atlas-foothills">
            <h2>3. Atlas foothills and mountain valleys</h2>
            <p>
              For riders seeking more elevation and a mountain setting, the foothills and valleys of the High Atlas can be a natural next step. Routes may combine paved climbs, village roads, rough tracks and trail sections, depending on the cycling style. The higher you travel, the more important it becomes to plan around temperature changes, altitude, weather and the time needed to reach the start point.
            </p>
            <p>
              A single-day mountain ride can work if the transfer and riding time fit the schedule. For a more immersive experience, a multi-day itinerary may connect several valleys or include time to explore villages between stages. It is better to make a realistic plan than to fit too many kilometres into a single day and rush through the landscape.
            </p>
            <p>
              MTB riders should ask about loose rock, narrow trails, steep sections and whether any portions may need to be walked. Gravel riders should clarify the proportion of paved roads to unpaved tracks. Road cyclists will want the exact climb profile, road condition, traffic exposure and support plan. An E-MTB route should include a practical approach to battery range and charging.
            </p>
            <div className="article-tip"><strong>Remember the elevation</strong><p>Conditions can feel very different between Marrakech and a mountain start point. Ask about expected temperatures, the earliest start time, layering needs and what happens if weather makes a section unsuitable.</p></div>
          </section>

          <section id="choose-your-style">
            <h2>Choose the right cycling style for the route</h2>
            <h3>Mountain bike (MTB)</h3>
            <p>Choose MTB when the planned route includes rough tracks, rocky ground or trails that benefit from wider tyres and confident handling. Ask for a clear description of technical sections, gradients and whether the ride is intended for beginners, intermediate riders or experienced mountain bikers.</p>
            <h3>Electric mountain bike (E-MTB)</h3>
            <p>Pedal assistance can help with climbing and make a longer foothill route more manageable, but it does not remove the need for good descending skills. Confirm bike size, battery range, charging opportunities and the support plan for mechanical issues before booking.</p>
            <h3>Gravel cycling</h3>
            <p>Gravel can be a good fit for mixed-surface routes that combine dirt roads and paved links without requiring technical MTB trails. The route surface matters: loose stones, deep sand, sharp rocks and steep sections may change which bike and tyres are appropriate.</p>
            <h3>Road cycling</h3>
            <p>For road cycling, focus on paved routes, elevation profile, road condition, traffic, daylight and support. Some itineraries may begin outside the city to prioritise riding on roads that suit the group. Ask for planned distances and climbing, not only a list of destinations.</p>
          </section>

          <section id="day-or-multi-day">
            <h2>Should you choose a day ride or a multi-day trip?</h2>
            <p>
              A day ride is useful if you have limited time, want to keep Marrakech as your base or are adding cycling to a wider holiday. It should allow enough time for the transfer, bike setup, breaks and the ride itself without leaving the return journey rushed. Agree the approximate finish time and the expected difficulty before setting off.
            </p>
            <p>
              A multi-day trip opens up more options. You can reach further into the Atlas, vary the terrain, spend more time in rural areas and avoid returning to the city after each ride. It also introduces more planning: accommodation, luggage transfer, meals, stage-to-stage distances, mechanical support and recovery all need to be considered.
            </p>
            <ul className="article-checklist">
              <li><strong>Half-day:</strong> best when time is limited; confirm the actual riding time after transfers.</li>
              <li><strong>Full day:</strong> leaves room for a longer ride and breaks, but distance and elevation should still be realistic.</li>
              <li><strong>Two or more days:</strong> works well for linking different areas; plan recovery, accommodation and luggage handling.</li>
            </ul>
          </section>

          <section id="planning-details">
            <h2>Practical details that shape the experience</h2>
            <h3>Transfers and meeting points</h3>
            <p>Ask where the ride begins and ends, how long the transfer takes, whether it is included, and how bicycles and luggage are carried. If your schedule is tight, leave some flexibility for traffic and delays.</p>
            <h3>Bike hire and equipment</h3>
            <p>Confirm bike type, available sizes, fit, pedals and helmet arrangements well before travelling. If you bring your own bike, clarify case storage, assembly time, transfer space and any support for repairs. A route-specific equipment list is more helpful than packing without knowing the terrain.</p>
            <h3>Water, food and mechanical support</h3>
            <p>Find out how water and food stops are planned, what you need to carry, and which tools or spare parts the guide or support vehicle will have. Remote or exposed routes may have fewer convenient refill points, so do not assume supplies will be available on demand.</p>
          </section>

          <section id="timing-conditions">
            <h2>Choose timing around the route, not just the calendar</h2>
            <p>
              Seasonal conditions vary between lower countryside, exposed Agafay tracks and higher Atlas terrain. Spring and autumn are often considered for many cycling trips, but elevation, recent weather and the exact route affect comfort and access. Lower and southern areas can become very hot, while mountain mornings and high sections can be cool or windy.
            </p>
            <p>
              Ask for a route recommendation for your actual dates. A useful plan takes start time, expected daylight, water needs, clothing layers and an alternative route into account. Check conditions close to travel and follow local guidance if weather or trail access changes.
            </p>
          </section>

          <section id="route-checklist">
            <h2>Questions to ask before choosing a Marrakech cycling route</h2>
            <ul className="article-checklist">
              <li><strong>Route:</strong> What are the distance, total ascent, surface types and technical features?</li>
              <li><strong>Time:</strong> How much time is spent cycling versus transferring, setting up and taking breaks?</li>
              <li><strong>Fit:</strong> Does the route suit our fitness, bike-handling experience and group pace?</li>
              <li><strong>Bike:</strong> Which bike and tyres are appropriate, and what hire sizes are available?</li>
              <li><strong>Support:</strong> What happens in case of a puncture, mechanical problem, illness or route change?</li>
              <li><strong>Inclusions:</strong> Are transfers, guides, meals, water, equipment and accommodation included?</li>
              <li><strong>Conditions:</strong> What weather or access issues should we prepare for on our dates?</li>
            </ul>
            <p>An itinerary should explain its practical demands before you commit. If an important detail is unclear, ask for it to be confirmed rather than assuming a service or route feature is included.</p>
          </section>

          <section id="marrakech-routes-faq" className="article-faq">
            <h2>Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>Find a route that fits your Marrakech stay</strong>
            <p>Share your dates, group size, riding level and preferred terrain. <Link href="/contact">Contact Mountain Bike Morocco</Link> to discuss the route format, bike, transfer and support details that need to be confirmed for your trip.</p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading">
            <div><p className="article-eyebrow article-eyebrow-dark">KEEP EXPLORING</p><h2>More guides for your Morocco ride</h2></div>
            <Link className="article-text-link" href="/journal">View the Journal ↗</Link>
          </div>
          <div className="article-related-grid">
            {relatedArticles.map((article) => (
              <article className="article-related-card" key={article.href}>
                <Link className="article-related-image" href={article.href}><img src={article.image} alt={article.title} loading="lazy" /></Link>
                <div className="article-related-content">
                  <p className="article-eyebrow">{article.category}</p>
                  <h3><Link href={article.href}>{article.title}</Link></h3>
                  <p>{article.text}</p>
                  <Link className="article-text-link" href={article.href}>Read article ↗</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="article-cta">
        <div className="article-shell article-cta-inner">
          <div>
            <p className="article-eyebrow">PLAN YOUR MOROCCO RIDE</p>
            <h2>Choose your route from Marrakech with confidence.</h2>
            <p>Tell us your dates, riding level, preferred cycling style and how much time you have. We can discuss suitable routes, transfers, terrain and the support that needs to be confirmed for your journey.</p>
          </div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/contact">Plan your trip ↗</Link><Link className="article-button article-button-outline" href="/cycling-trips/from-marrakech">Explore rides from Marrakech</Link></div>
        </div>
      </section>

      <footer className="article-site-footer">
        <div className="article-shell article-footer-grid">
          <div className="article-footer-brand">
            <Link href="/" className="article-brand"><img src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link>
            <p>Guided mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, trails and local culture at your own pace.</p>
          </div>
          <div><h3>Explore</h3><Link href="/cycling-trips">All Cycling Tours</Link><Link href="/cycling-trips/mtb">Mountain Bike Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil">Imlil Valley</Link><Link href="/destinations/toubkal">Mount Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let's Plan</h3><Link href="/about">About Us</Link><Link href="/events">Events</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="article-shell article-footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>

      <style>{`
        .best-marrakech-routes-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
        .article-shell{width:min(1180px,calc(100% - 48px));margin-inline:auto}
        .article-breadcrumbs{display:flex;flex-wrap:wrap;gap:10px;padding-top:25px;padding-bottom:20px;font-size:12px;color:#777168}
        .article-breadcrumbs a{color:inherit;text-decoration:none}.article-breadcrumbs a:hover{color:#c65c35}
        .article-hero{padding:44px 0 60px;display:grid;grid-template-columns:.95fr 1.05fr;gap:clamp(30px,5vw,68px);align-items:center}
        .article-eyebrow{font-size:11px;line-height:1.5;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#e7663b;margin:0 0 16px}
        .article-eyebrow-dark{color:#bd542f}
        .article-hero h1{font-size:clamp(42px,5.8vw,76px);line-height:.99;letter-spacing:-.055em;margin:0 0 22px;max-width:700px}
        .article-deck{font-size:18px;line-height:1.8;color:#5d5953;margin:0;max-width:660px}
        .article-meta{display:flex;flex-wrap:wrap;gap:18px;margin-top:25px;font-size:10px;font-weight:800;letter-spacing:.13em;color:#777168}
        .article-hero-image{margin:0;position:relative;min-width:0}.article-hero-image img{display:block;width:100%;height:clamp(320px,40vw,515px);object-fit:cover}.article-hero-image figcaption{padding:10px 0 0;font-size:12px;color:#777168;line-height:1.6}
        .article-main-grid{display:grid;grid-template-columns:220px minmax(0,760px);justify-content:space-between;gap:clamp(28px,5vw,75px);padding-top:20px;padding-bottom:90px}
        .article-toc{align-self:start;position:sticky;top:30px;display:flex;flex-direction:column;gap:12px;padding:20px;border:1px solid #dedbd4;background:#fff}
        .article-toc p{font-size:10px;font-weight:800;letter-spacing:.16em;color:#bd542f;margin:0 0 5px}.article-toc a{font-size:13px;line-height:1.45;color:#514d47;text-decoration:none}.article-toc a:hover{color:#bd542f}
        .article-body{min-width:0;font-size:16px;color:#4e4a45}.article-body p{margin:0 0 19px;line-height:1.9}.article-body .article-lead{font-size:20px;line-height:1.8;color:#292723;margin-bottom:38px}
        .article-body section{scroll-margin-top:35px;margin:0 0 38px}.article-body h2{font-size:clamp(28px,3.2vw,38px);line-height:1.12;letter-spacing:-.035em;color:#211f1b;margin:0 0 17px}.article-body h3{font-size:22px;line-height:1.2;margin:24px 0 12px;color:#211f1b}
        .article-tip{margin:26px 0;padding:23px 25px;background:#eeeae2;border-left:3px solid #c65c35}.article-tip strong{display:block;margin-bottom:6px;color:#25231f}.article-tip p{margin:0}
        .article-checklist{margin:10px 0 24px;padding-left:23px}.article-checklist li{padding-left:5px;margin:0 0 12px;line-height:1.8}.article-checklist strong{color:#24221e}
        .article-inline-image{margin:28px 0 40px}.article-inline-image img{display:block;width:100%;max-height:450px;object-fit:cover}.article-inline-image figcaption{padding:10px 0 0;color:#777168;font-size:12px;line-height:1.6}
        .article-faq details{border-top:1px solid #dcd8d0;padding:18px 0}.article-faq details:last-child{border-bottom:1px solid #dcd8d0}.article-faq summary{cursor:pointer;list-style:none;font-size:16px;font-weight:700;color:#24221e}.article-faq summary::-webkit-details-marker{display:none}.article-faq summary:after{content:'+';float:right;color:#c65c35;font-size:22px}.article-faq details[open] summary:after{content:'−'}.article-faq details p{margin:13px 0 0;color:#625e57}
        .article-author-note{padding:22px 24px;background:#fff;border:1px solid #e0ddd6}.article-author-note strong{display:block;color:#24221e;margin-bottom:6px}.article-author-note p{margin:0;font-size:14px}.article-author-note a{color:#bd542f;text-decoration:underline;text-underline-offset:3px}
        .article-related{padding:76px 0 86px;background:#f0eee8}.article-section-heading{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:30px}.article-section-heading h2{font-size:clamp(30px,4vw,45px);line-height:1.1;letter-spacing:-.04em;margin:0}.article-text-link{font-size:13px;font-weight:800;text-decoration:none;color:#bd542f}.article-text-link:hover{text-decoration:underline}
        .article-related-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}.article-related-card{background:#fff;border:1px solid #e0ddd6;min-width:0}.article-related-image{display:block;overflow:hidden}.article-related-image img{display:block;width:100%;height:220px;object-fit:cover;transition:transform .3s ease}.article-related-image:hover img{transform:scale(1.03)}.article-related-content{padding:22px}.article-related-content .article-eyebrow{font-size:9px;margin-bottom:10px}.article-related-content h3{font-size:21px;line-height:1.2;margin:0 0 10px;letter-spacing:-.02em}.article-related-content h3 a{color:inherit;text-decoration:none}.article-related-content h3 a:hover{color:#bd542f}.article-related-content>p:not(.article-eyebrow){color:#68645d;font-size:13px;line-height:1.7;margin:0 0 17px}
        .article-cta{padding:65px 0;background:#23231f;color:#fff}.article-cta-inner{display:flex;justify-content:space-between;align-items:center;gap:35px}.article-cta .article-eyebrow{color:#f18b60}.article-cta h2{font-size:clamp(32px,4vw,48px);line-height:1.05;letter-spacing:-.04em;max-width:600px;margin:0 0 14px}.article-cta-inner>div:first-child>p:last-child{max-width:650px;color:#d1cdc5;margin:0;line-height:1.8}.article-cta-actions{display:flex;flex-wrap:wrap;gap:12px;flex-shrink:0}.article-button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 17px;font-size:12px;font-weight:800;text-decoration:none;transition:background .2s ease,color .2s ease}.article-button-light{background:#e7663b;color:#fff}.article-button-light:hover{background:#d6522a}.article-button-outline{border:1px solid #8f8b82;color:#fff}.article-button-outline:hover{background:#fff;color:#24221e}
        .article-site-footer{background:#181815;color:#fff;padding-top:55px}.article-footer-grid{display:grid;grid-template-columns:1.4fr repeat(3,minmax(0,1fr));gap:40px;padding-bottom:45px}.article-footer-grid>div{display:flex;flex-direction:column;align-items:flex-start;gap:11px}.article-footer-grid h3{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:#e98258;margin:0 0 7px}.article-footer-grid a:not(.article-brand){color:#d1cec7;font-size:13px;text-decoration:none}.article-footer-grid a:not(.article-brand):hover{color:#fff}.article-brand{display:flex;flex-direction:column;gap:12px;text-decoration:none;color:#fff;font-size:13px;font-weight:800;letter-spacing:.07em}.article-brand img{width:185px;max-height:60px;object-fit:contain;object-position:left center}.article-brand em{font-style:normal;color:#e98258;margin-left:5px}.article-footer-brand p{max-width:290px;font-size:13px;line-height:1.8;color:#aaa69d;margin:6px 0 0}.article-footer-bottom{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:1px solid #393832;padding-top:18px;padding-bottom:20px;color:#a9a59d;font-size:11px}.article-footer-bottom a{color:inherit;text-decoration:none}.article-footer-bottom a:hover{color:#fff}
        @media(max-width:900px){.article-hero{grid-template-columns:1fr;gap:28px;padding-top:22px}.article-hero h1{max-width:850px}.article-hero-image img{height:clamp(290px,58vw,480px)}.article-main-grid{grid-template-columns:1fr;padding-top:0}.article-toc{position:static;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 18px}.article-toc p{grid-column:1/-1}.article-related-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.article-cta-inner{align-items:flex-start;flex-direction:column}.article-footer-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:32px 22px}.article-footer-brand{grid-column:1/-1}}
        @media(max-width:560px){.article-shell{width:calc(100% - 34px)}.article-hero{padding-top:20px;padding-bottom:40px}.article-hero h1{font-size:43px}.article-deck{font-size:16px}.article-main-grid{padding-bottom:58px}.article-body{font-size:15px}.article-body .article-lead{font-size:18px}.article-toc{padding:16px;grid-template-columns:1fr 1fr}.article-related{padding:54px 0}.article-section-heading{align-items:flex-start;flex-direction:column;gap:15px}.article-related-grid{grid-template-columns:1fr}.article-related-image img{height:235px}.article-cta{padding:50px 0}.article-cta-actions{width:100%;flex-direction:column}.article-button{width:100%}.article-footer-grid{grid-template-columns:1fr 1fr;gap:28px 16px}.article-brand img{width:155px}.article-footer-grid>div{min-width:0}.article-footer-grid a:not(.article-brand){font-size:12px}.article-footer-bottom{flex-direction:column;gap:7px}}
        @media(prefers-reduced-motion:reduce){.best-marrakech-routes-article *,.best-marrakech-routes-article *:before,.best-marrakech-routes-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
