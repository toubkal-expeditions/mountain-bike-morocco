import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cycling Morocco in November | Mountain Bike Morocco",
  description:
    "Plan a November cycling holiday in Morocco with practical guidance for the High Atlas, Marrakech and Agafay, southern desert routes and the Atlantic Coast. Compare MTB, E-MTB, gravel and road cycling conditions, clothing and route planning.",
  alternates: { canonical: "/journal/cycling-morocco-november" },
  openGraph: {
    title: "Cycling Morocco in November",
    description:
      "A practical guide to November cycling in Morocco, including regional conditions, shorter days, cooler starts, equipment and route choices.",
    type: "article",
    images: ["/images/adventure-cycling-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "SEASONAL CYCLING",
    title: "Cycling Morocco in October",
    text: "Compare late-autumn planning with October routes and preparation advice.",
    image: "/images/Explore-Atlas-Mountains-bike.jpg",
    href: "/journal/cycling-morocco-october",
  },
  {
    category: "TRIP PLANNING",
    title: "Best Time to Visit Morocco for Cycling",
    text: "Compare regions, seasons and cycling styles before choosing your dates.",
    image: "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    href: "/journal/best-time-visit-morocco-cycling",
  },
  {
    category: "SEASONAL CYCLING",
    title: "Spring Cycling in Morocco: March–May",
    text: "Explore a different seasonal window and learn how elevation can affect route choices.",
    image: "/images/atlas-valley-cycling-morocco.jpg",
    href: "/journal/spring-cycling-morocco-march-may",
  },
];

const faqs = [
  {
    question: "Is November a good month for cycling in Morocco?",
    answer:
      "It can be, depending on the region, altitude and route. Lower areas and some southern itineraries may remain suitable, while high mountain routes can be colder and more weather-dependent. Check the conditions for your specific dates and route rather than treating the whole country as one climate zone.",
  },
  {
    question: "Can I mountain bike in the High Atlas in November?",
    answer:
      "Some routes may be possible, but suitability depends on elevation, recent weather, trail condition and the experience of the group. Ask about the exact route, daily climbing, exposure, access and alternatives if conditions make a high or remote section unsuitable.",
  },
  {
    question: "Is November suitable for a Sahara cycling trip?",
    answer:
      "A desert itinerary may be an option, but remoteness, water, wind, daylight and support logistics need careful planning. Confirm refill points, start times, vehicle access, overnight arrangements and the procedure for changing a stage if weather or a mechanical issue intervenes.",
  },
  {
    question: "What clothes should I pack for November cycling?",
    answer:
      "Bring your usual riding essentials plus layers for cool starts and higher elevations. A lightweight windproof or waterproof layer, warm gloves where needed, sun protection and sufficient water capacity can all be useful. Ask for a route-specific list once the altitude, daily schedule and support arrangements are known.",
  },
  {
    question: "Which cycling style works best in November?",
    answer:
      "There is no single best style for every region. MTB depends on trail conditions, E-MTB on battery range and charging, gravel on suitable unpaved surfaces, and road cycling on route profile, traffic and weather. Choose the discipline that fits the actual route and your ability.",
  },
  {
    question: "Are shorter days important when planning a tour?",
    answer:
      "Yes. Build a realistic schedule with an early enough start, planned breaks and a margin for slower sections or mechanical issues. Confirm expected riding time, transfers and the plan for completing the stage before dark, especially on remote routes.",
  },
];

export default function CyclingMoroccoNovemberPage() {
  return (
    <main className="november-cycling-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Cycling Morocco in November</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">SEASONAL CYCLING · TRIP PLANNING</p>
          <h1>Cycling Morocco in November</h1>
          <p className="article-deck">
            November can offer rewarding cycling in Morocco, but it is a month when choosing the right region and building flexibility into the plan become especially important. High mountain routes may bring colder mornings and more changeable conditions, while lower landscapes, southern itineraries and the coast can feel quite different. This guide helps you compare options and prepare for the actual route and dates.
          </p>
          <div className="article-meta"><span>5 MIN READ</span><span>NOVEMBER · MOROCCO</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/adventure-cycling-morocco.jpg" alt="Cycling adventure across a rugged Moroccan mountain landscape" fetchPriority="high" />
          <figcaption>In November, choose a route around altitude, daylight and local conditions, not the month alone.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#why-november">What November changes</a>
          <a href="#choose-region">Choose the right region</a>
          <a href="#cycling-style">Match the cycling style</a>
          <a href="#daylight">Daylight, distance and support</a>
          <a href="#packing">What to pack</a>
          <a href="#booking-checklist">Before you book</a>
          <a href="#november-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            Morocco is not one uniform cycling destination. In November, altitude, exposure, wind, recent rainfall and daylight can change the feel of a ride from one region to the next. Begin with the experience you want, then check the route profile, access and support plan for your dates.
          </p>

          <section id="why-november">
            <h2>What changes when you cycle Morocco in November?</h2>
            <p>
              November sits later in the autumn transition, so riders should be prepared for cooler starts and a wider range of conditions between lowlands and higher terrain. A sunny afternoon in a lower valley does not guarantee that an exposed mountain route will be comfortable, dry or accessible. Equally, a cool morning should not be used to assume every southern route will be cold throughout the day.
            </p>
            <p>
              Shorter daylight also affects stage planning. Long climbs, technical descents, transfers and stops can take more time than expected, particularly when a group has varied fitness or experience. A good itinerary includes time for breaks, an honest estimate of ride duration and a clear plan for adapting the route if conditions change.
            </p>
            <div className="article-tip"><strong>Planning principle</strong><p>Ask for the actual route, altitude range, expected riding time and contingency options. A broad seasonal description is useful background, but it cannot replace a route-specific check close to departure.</p></div>
          </section>

          <section id="choose-region">
            <h2>Choose the right Moroccan region</h2>
            <h3>High Atlas Mountains</h3>
            <p>
              The High Atlas offers mountain tracks, village paths and routes with very different levels of technical difficulty. In November, higher and more exposed sections deserve particular attention because temperatures and weather can differ from conditions in the foothills. Confirm the intended elevation, surface, climbing, exposure and whether access or trail conditions will be checked before the ride. Ask what lower-altitude alternative is available if the planned route is unsuitable.
            </p>
            <h3>Marrakech and Agafay</h3>
            <p>
              The landscapes around Marrakech and Agafay can be considered for a day ride or as one part of a longer trip. Rocky open terrain may have limited shade, and wind or recent weather can affect comfort and the surface under tyres. Clarify the start point, transfer time, distance, amount of climbing, expected technical features and where water stops are planned.
            </p>
            <h3>Southern Morocco and the Sahara</h3>
            <p>
              Southern routes can combine desert landscapes, rural tracks and long distances between services. A remote stage needs a practical plan for drinking water, food, navigation, communication and mechanical support. Confirm how the group is supported, where resupply happens and what happens if a rider needs to stop or a vehicle cannot reach a section directly. Avoid assuming that services will be available simply because a route passes near a settlement on the map.
            </p>
            <h3>Atlantic Coast</h3>
            <p>
              Coastal and inland routes near the Atlantic can offer a different option from the mountains, but wind, road traffic and route surface still matter. Discuss whether the itinerary uses paved roads, gravel tracks or a mixture, and whether the chosen bike and tyres suit the planned surfaces. When travelling point to point, consider wind direction and the time needed to complete the stage without rushing.
            </p>
          </section>

          <section id="cycling-style">
            <h2>Match the cycling style to the route</h2>
            <h3>Mountain biking</h3>
            <p>
              MTB routes can include rocky paths, loose surfaces, steep gradients and technical descents. Select trails based on demonstrated riding ability and the conditions on the day. Ask about hike-a-bike sections, exposure, how much of the ride is singletrack and how the guide will adapt the route for a mixed-ability group.
            </p>
            <h3>E-MTB</h3>
            <p>
              Electric assistance can help with climbing and make some itineraries more accessible, but colder conditions, elevation and riding mode can affect battery performance. Confirm battery range, charging opportunities, whether a spare battery is available and how the support plan works if a battery runs low away from a charging point.
            </p>
            <h3>Gravel cycling</h3>
            <p>
              Gravel itineraries depend on the quality and consistency of unpaved roads, loose stones, washboard sections and the amount of pavement between trail sections. Ask about tyre width, gearing, route condition, water stops and the daily distance. November is not a guarantee of perfect surfaces; recent weather and local maintenance can still change the experience.
            </p>
            <h3>Road cycling</h3>
            <p>
              Road rides should be built around daylight, climbing, road surface, traffic and safe stopping points. Confirm the planned ascent and descent, the route profile and support arrangements. For mountain passes or longer point-to-point days, ask how the itinerary can be adapted if weather, visibility or the group's pace changes.
            </p>
          </section>

          <section id="daylight">
            <h2>Plan daylight, daily distance and support</h2>
            <p>
              Avoid planning every day to the limit of the available daylight. Estimate actual riding time rather than relying only on kilometres: steep climbing, technical ground, photo stops and village visits all change the pace. A shorter, well-planned stage can make a better trip than an ambitious route that leaves no room for delays.
            </p>
            <p>
              Before booking, clarify whether a guide, support vehicle, luggage transfer, meals and mechanical assistance are included. For remote rides, ask how the group will communicate if separated, where the guide carries essential tools and what the process is if someone cannot continue. The details can vary by tour, so have the arrangements confirmed for the specific itinerary.
            </p>
            <div className="article-tip"><strong>Build in a margin</strong><p>Plan a sensible finish time, keep a light or visibility equipment available when appropriate, and agree on a turnaround or route-shortening option before starting a long stage.</p></div>
          </section>

          <section id="packing">
            <h2>What to pack for November cycling</h2>
            <p>
              Use a route-specific kit list, with extra attention to layering for cool starts and high elevations. The essentials typically include a correctly fitted helmet, gloves, riding clothing, suitable shoes, eye protection, sun protection and adequate water capacity. Add a lightweight windproof or waterproof layer according to the planned route and forecast; warmer layers may be useful if the itinerary includes early starts or exposed mountain sections.
            </p>
            <p>
              Bring the personal repair items you are comfortable using, but first ask which tools and spares the guide or support team carries. For E-MTB, confirm charger and battery arrangements. For desert stages, clarify water capacity, refill access and how food and supplies are carried. If travelling with your own bike, allow for airline rules, bike-case transport, assembly and transfer space.
            </p>
            <ul className="article-checklist">
              <li><strong>Clothing:</strong> layers for cool starts and higher ground, plus a wind or rain shell appropriate to the forecast.</li>
              <li><strong>Riding essentials:</strong> helmet, gloves, eyewear, suitable shoes, sun protection and hydration.</li>
              <li><strong>Bike and repairs:</strong> suitable tyres, basic personal tools and clarity about the support spares available.</li>
              <li><strong>Remote stages:</strong> a confirmed water and food plan, communication approach and support access.</li>
              <li><strong>Before travel:</strong> confirm bike provision, sizes, luggage limits, transfers and what is included in the price.</li>
            </ul>
          </section>

          <section id="booking-checklist">
            <h2>Before you book a November cycling holiday</h2>
            <p>Share enough detail for the team to assess whether the route and timing suit your group. A useful enquiry includes:</p>
            <ul className="article-checklist">
              <li><strong>Dates and flexibility:</strong> travel dates, number of riding days and whether you can move a stage if conditions require it.</li>
              <li><strong>Riding profile:</strong> preferred discipline, recent experience, fitness, daily distance and climbing expectations.</li>
              <li><strong>Destination priorities:</strong> High Atlas, Marrakech and Agafay, southern desert routes or the Atlantic Coast.</li>
              <li><strong>Group needs:</strong> group size, different experience levels, equipment requirements, dietary needs and rest preferences.</li>
              <li><strong>Operational details:</strong> inclusions, transfers, accommodation, guide and support arrangements, water access and contingency plans.</li>
            </ul>
            <p>
              These details help the operator discuss realistic options. Availability, route access, support services and any final itinerary should be confirmed directly for your travel dates; they should not be inferred from a general article or sample programme.
            </p>
          </section>

          <section id="november-faq" className="article-faq">
            <h2>Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>A practical note before you ride</strong>
            <p>This guide offers general trip-planning information. It is not a live trail report or weather forecast. Confirm current conditions, access, route details and support arrangements with your guide or tour organiser before travelling.</p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading">
            <div><p className="article-eyebrow article-eyebrow-dark">KEEP PLANNING</p><h2>More seasonal cycling guides</h2></div>
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
            <p className="article-eyebrow">PLAN YOUR NOVEMBER RIDE</p>
            <h2>Choose a route that fits your ride.</h2>
            <p>Tell us your dates, preferred cycling style, group size and riding experience. We can discuss suitable regions and the practical details that need to be confirmed for your itinerary.</p>
          </div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/contact">Plan your trip ↗</Link><Link className="article-button article-button-outline" href="/cycling-trips">Browse cycling tours</Link></div>
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
        <div className="article-shell article-footer-bottom"><span>© {new Date().getFullYear()} Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>

      <style>{`
        .november-cycling-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
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
        .article-faq details{border-top:1px solid #dcd8d0;padding:18px 0}.article-faq details:last-child{border-bottom:1px solid #dcd8d0}.article-faq summary{cursor:pointer;list-style:none;font-size:16px;font-weight:700;color:#24221e}.article-faq summary::-webkit-details-marker{display:none}.article-faq summary:after{content:'+';float:right;color:#c65c35;font-size:22px}.article-faq details[open] summary:after{content:'−'}.article-faq details p{margin:13px 0 0;color:#625e57}
        .article-author-note{padding:22px 24px;background:#fff;border:1px solid #e0ddd6}.article-author-note strong{display:block;color:#24221e;margin-bottom:6px}.article-author-note p{margin:0;font-size:14px}
        .article-related{padding:76px 0 86px;background:#f0eee8}.article-section-heading{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:30px}.article-section-heading h2{font-size:clamp(30px,4vw,45px);line-height:1.1;letter-spacing:-.04em;margin:0}.article-text-link{font-size:13px;font-weight:800;text-decoration:none;color:#bd542f}.article-text-link:hover{text-decoration:underline}
        .article-related-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}.article-related-card{background:#fff;border:1px solid #e0ddd6;min-width:0}.article-related-image{display:block;overflow:hidden}.article-related-image img{display:block;width:100%;height:220px;object-fit:cover;transition:transform .3s ease}.article-related-image:hover img{transform:scale(1.03)}.article-related-content{padding:22px}.article-related-content .article-eyebrow{font-size:9px;margin-bottom:10px}.article-related-content h3{font-size:21px;line-height:1.2;margin:0 0 10px;letter-spacing:-.02em}.article-related-content h3 a{color:inherit;text-decoration:none}.article-related-content h3 a:hover{color:#bd542f}.article-related-content>p:not(.article-eyebrow){color:#68645d;font-size:13px;line-height:1.7;margin:0 0 17px}
        .article-cta{padding:65px 0;background:#23231f;color:#fff}.article-cta-inner{display:flex;justify-content:space-between;align-items:center;gap:35px}.article-cta .article-eyebrow{color:#f18b60}.article-cta h2{font-size:clamp(32px,4vw,48px);line-height:1.05;letter-spacing:-.04em;max-width:600px;margin:0 0 14px}.article-cta-inner>div:first-child>p:last-child{max-width:650px;color:#d1cdc5;margin:0;line-height:1.8}.article-cta-actions{display:flex;flex-wrap:wrap;gap:12px;flex-shrink:0}.article-button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 17px;font-size:12px;font-weight:800;text-decoration:none;transition:background .2s ease,color .2s ease}.article-button-light{background:#e7663b;color:#fff}.article-button-light:hover{background:#d6522a}.article-button-outline{border:1px solid #8f8b82;color:#fff}.article-button-outline:hover{background:#fff;color:#24221e}
        .article-site-footer{background:#181815;color:#fff;padding-top:55px}.article-footer-grid{display:grid;grid-template-columns:1.4fr repeat(3,minmax(0,1fr));gap:40px;padding-bottom:45px}.article-footer-grid>div{display:flex;flex-direction:column;align-items:flex-start;gap:11px}.article-footer-grid h3{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:#e98258;margin:0 0 7px}.article-footer-grid a:not(.article-brand){color:#d1cec7;font-size:13px;text-decoration:none}.article-footer-grid a:not(.article-brand):hover{color:#fff}.article-brand{display:flex;flex-direction:column;gap:12px;text-decoration:none;color:#fff;font-size:13px;font-weight:800;letter-spacing:.07em}.article-brand img{width:185px;max-height:60px;object-fit:contain;object-position:left center}.article-brand em{font-style:normal;color:#e98258;margin-left:5px}.article-footer-brand p{max-width:290px;font-size:13px;line-height:1.8;color:#aaa69d;margin:6px 0 0}.article-footer-bottom{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:1px solid #393832;padding-top:18px;padding-bottom:20px;color:#a9a59d;font-size:11px}.article-footer-bottom a{color:inherit;text-decoration:none}.article-footer-bottom a:hover{color:#fff}
        @media(max-width:900px){.article-hero{grid-template-columns:1fr;gap:28px;padding-top:22px}.article-hero h1{max-width:850px}.article-hero-image img{height:clamp(290px,58vw,480px)}.article-main-grid{grid-template-columns:1fr;padding-top:0}.article-toc{position:static;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 18px}.article-toc p{grid-column:1/-1}.article-related-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.article-cta-inner{align-items:flex-start;flex-direction:column}.article-footer-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:32px 22px}.article-footer-brand{grid-column:1/-1}}
        @media(max-width:560px){.article-shell{width:calc(100% - 34px)}.article-hero{padding-top:20px;padding-bottom:40px}.article-hero h1{font-size:43px}.article-deck{font-size:16px}.article-main-grid{padding-bottom:58px}.article-body{font-size:15px}.article-body .article-lead{font-size:18px}.article-toc{padding:16px;grid-template-columns:1fr 1fr}.article-related{padding:54px 0}.article-section-heading{align-items:flex-start;flex-direction:column;gap:15px}.article-related-grid{grid-template-columns:1fr}.article-related-image img{height:235px}.article-cta{padding:50px 0}.article-cta-actions{width:100%;flex-direction:column}.article-button{width:100%}.article-footer-grid{grid-template-columns:1fr 1fr;gap:28px 16px}.article-brand img{width:155px}.article-footer-grid>div{min-width:0}.article-footer-grid a:not(.article-brand){font-size:12px}.article-footer-bottom{flex-direction:column;gap:7px}}
        @media(prefers-reduced-motion:reduce){.november-cycling-article *,.november-cycling-article *:before,.november-cycling-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
