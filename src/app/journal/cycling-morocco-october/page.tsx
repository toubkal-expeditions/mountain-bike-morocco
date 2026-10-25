import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cycling Morocco in October | Mountain Bike Morocco",
  description:
    "Plan an October cycling holiday in Morocco with regional guidance for the High Atlas, Marrakech and Agafay, southern desert routes and the Atlantic Coast. Compare MTB, E-MTB, gravel and road cycling considerations.",
  alternates: { canonical: "/journal/cycling-morocco-october" },
  openGraph: {
    title: "Cycling Morocco in October",
    description:
      "A practical guide to planning October cycling in Morocco, with region-by-region advice on terrain, seasonal conditions, daily timing, kit and route selection.",
    type: "article",
    images: ["/images/Explore-Atlas-Mountains-bike.jpg"],
  },
};

const relatedArticles = [
  {
    category: "SEASONAL CYCLING",
    title: "Cycling Morocco in September",
    text: "Review the earlier-season trade-offs around heat, altitude and choosing a region for your ride.",
    image: "/images/Explore-Atlas-Mountains-by-bike.jpg",
    href: "/journal/cycling-morocco-september",
  },
  {
    category: "SEASONAL CYCLING",
    title: "Cycling Morocco in November",
    text: "Plan for shorter days, cooler starts and changing conditions between mountains and southern routes.",
    image: "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    href: "/journal/cycling-morocco-november",
  },
  {
    category: "TRIP PLANNING",
    title: "Best Time to Visit Morocco for Cycling",
    text: "Compare seasons and regions before choosing the dates and riding style for your holiday.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/journal/best-time-visit-morocco-cycling",
  },
];

const faqs = [
  {
    question: "Is October a good month for cycling in Morocco?",
    answer:
      "October is often worth considering, but conditions vary between regions and elevations. Mountain areas can have cool mornings and changing weather, while lower and southern routes may remain warm. Choose the route first and confirm conditions close to departure rather than relying on a country-wide seasonal assumption.",
  },
  {
    question: "Can I mountain bike in the High Atlas in October?",
    answer:
      "Possible routes depend on elevation, recent weather, trail surface and your riding ability. Ask about the exact route, climbing, technical sections, exposure and alternatives if weather makes a stage unsuitable. Higher or remote routes need more careful checking than a broad destination description can provide.",
  },
  {
    question: "Is October suitable for a Sahara cycling trip?",
    answer:
      "October may be considered for southern and desert itineraries, but heat, wind, remoteness and water access still need route-specific planning. Confirm daily distances, start times, refill points, support access and the plan for changing or shortening a stage if conditions require it.",
  },
  {
    question: "What should I pack for October cycling in Morocco?",
    answer:
      "Bring a fitted helmet, riding clothing, gloves, eyewear, sun protection and adequate water capacity for your route. Add layers for cool mornings and higher elevations, plus a wind or rain layer where appropriate. Ask the operator what bike, spares and other equipment are included before deciding what to carry.",
  },
  {
    question: "Which cycling style is best in October?",
    answer:
      "There is no single best style across every region. MTB suits appropriate trails, E-MTB needs realistic battery and charging plans, gravel works on suitable unpaved roads, and road cycling depends on traffic, elevation and route profile. Match the style to the terrain, your skills and the type of day you want.",
  },
  {
    question: "Should I book a private October cycling tour?",
    answer:
      "A private itinerary can make it easier to discuss dates, daily distances, route preferences and support needs around your group. Availability, services and the final route must still be confirmed for the requested dates. Share your riding level, group size, equipment needs and preferred regions when making an enquiry.",
  },
];

export default function CyclingMoroccoOctoberPage() {
  return (
    <main className="october-cycling-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Cycling Morocco in October</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">SEASONAL CYCLING · TRIP PLANNING</p>
          <h1>Cycling Morocco in October</h1>
          <p className="article-deck">
            October can be an appealing month to consider a cycling holiday in Morocco, but the best itinerary still depends on where you ride. High mountain valleys, rocky terrain around Marrakech, southern desert routes and the Atlantic Coast each bring different conditions. Use this guide to compare regions, choose a suitable cycling style and plan the practical details for your dates.
          </p>
          <div className="article-meta"><span>5 MIN READ</span><span>OCTOBER · MOROCCO</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/Explore-Atlas-Mountains-bike.jpg" alt="Scenic cycling route through the Atlas Mountains in Morocco" fetchPriority="high" />
          <figcaption>Choose a route around the region, elevation and the conditions expected for your actual dates.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#why-october">Why consider October?</a>
          <a href="#choose-region">Choose the right region</a>
          <a href="#cycling-style">Match the cycling style</a>
          <a href="#daily-plan">Plan daily timing and distance</a>
          <a href="#packing">What to pack</a>
          <a href="#booking-checklist">Before you book</a>
          <a href="#october-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            There is no single October weather pattern for the whole of Morocco. Elevation, exposure, recent weather and distance from the coast all affect how a ride feels. Start with the kind of cycling you want to do, then check the conditions and logistics for the specific route rather than assuming the same plan suits every region.
          </p>

          <section id="why-october">
            <h2>Why plan an October cycling holiday region by region?</h2>
            <p>
              October sits in the transition from the hotter months towards winter, but the change is not uniform across the country. Lower elevations may still be warm during the day, while mountain mornings can feel crisp and exposed high routes may experience wind or unsettled conditions. Coastal rides bring their own considerations, including wind and the balance between road traffic and quieter rural tracks.
            </p>
            <p>
              The month alone cannot tell you whether a route will be comfortable or appropriate. Daily climbing, surface, technical features, shade, water access and distance from mechanical or vehicle support all affect the ride. The most useful pre-trip conversation covers the route profile and the plan for responding if conditions change.
            </p>
            <div className="article-tip"><strong>Planning principle</strong><p>Choose your region and riding objective first. Then confirm the route, forecast, start time, equipment and support arrangements for the actual travel dates.</p></div>
          </section>

          <section id="choose-region">
            <h2>Choose the right Moroccan region</h2>
            <h3>High Atlas Mountains</h3>
            <p>
              The High Atlas combines mountain scenery, rural tracks and routes with a wide range of elevation and technical difficulty. October conditions can differ substantially between the foothills and higher terrain. Ask about the planned altitude, climbing, trail surface, exposure, transfer times and whether there is an alternative route if weather makes a pass or remote section unsuitable.
            </p>
            <h3>Marrakech and the Agafay area</h3>
            <p>
              The areas around Marrakech and Agafay can work for a day ride or as part of a longer cycling holiday. Rocky open terrain may offer limited shade, so water capacity, sun protection and the timing of the ride remain important even as the season changes. Confirm where the ride starts, how much time is spent on the bike and what the route surface will be.
            </p>
            <h3>Southern routes and the Sahara</h3>
            <p>
              Southern and desert itineraries need realistic planning for the distances between services, water resupply, wind, exposed terrain and support access. Ask who carries supplies, how the group communicates on remote stretches and what the fallback plan is if the weather or a mechanical problem changes the day. A multi-day route should not rely on assumptions about what will be available en route.
            </p>
            <h3>Atlantic Coast</h3>
            <p>
              Coastal journeys can combine paved roads, rural tracks and open landscapes. Wind can affect pace and effort, so the direction of travel, daily distance and opportunities to stop should be considered together. If the route mixes roads and unpaved sections, confirm the planned surface and the type of bike and tyres best suited to it.
            </p>
          </section>

          <section id="cycling-style">
            <h2>Match your cycling style to the route</h2>
            <h3>Mountain biking</h3>
            <p>
              MTB suits riders who want trails, rocky tracks and varied terrain. Technical difficulty can matter more than the number of kilometres: loose surfaces, tight turns, steep gradients and narrow paths call for confident bike handling. Describe the trails you usually ride and any features you want to avoid so the proposed route can be discussed realistically.
            </p>
            <h3>E-MTB</h3>
            <p>
              Electric assistance can make climbs more manageable or help a group cover a longer route, but battery range depends on the bike, elevation, assist level, rider and surface. Confirm the available bike sizes, battery capacity, charging opportunities and mechanical support. Remote days need a plan for battery use rather than assuming every part of the route has somewhere to recharge.
            </p>
            <h3>Gravel cycling</h3>
            <p>
              Gravel cycling can link rural roads with suitable unpaved tracks and offers a different way to explore the countryside. Surface quality varies, so ask whether the route is mostly hard-packed, rough, loose or rocky. Tyre width, gearing, comfort and repair equipment should suit the planned terrain and the distance between support points.
            </p>
            <h3>Road cycling</h3>
            <p>
              Road cycling can focus on climbs, scenic regional roads or longer point-to-point journeys. Plan distances around elevation, traffic, wind and the available rest stops rather than simply setting a kilometre target. For a multi-day ride, also confirm luggage transfers, accommodation, bike maintenance support and time to recover between demanding stages.
            </p>
          </section>

          <section id="daily-plan">
            <h2>Plan daily timing, distance and support</h2>
            <p>
              October does not remove the need to plan each day carefully. A short route with substantial climbing or rough surfaces may take longer than expected, while a long transfer can reduce the practical time available for riding. Include stops, meals, sightseeing and the group's preferred pace when comparing itineraries.
            </p>
            <ul className="article-checklist">
              <li><strong>Review the route profile.</strong> Confirm distance, elevation gain, surface, technical sections and likely ride duration.</li>
              <li><strong>Agree the start time.</strong> Discuss the forecast and the conditions expected on the route before setting the day's schedule.</li>
              <li><strong>Confirm water and food.</strong> Ask where refills and meals are planned and how much water riders should carry between stops.</li>
              <li><strong>Understand support.</strong> Clarify mechanical assistance, spare parts, vehicle access and communication for remote stages.</li>
              <li><strong>Build in flexibility.</strong> Know which alternatives are possible if high routes, trails or roads become unsuitable.</li>
            </ul>
            <div className="article-tip"><strong>For private groups</strong><p>Share each rider's comfort level and recent riding experience. A sensible route should work for the group as a whole, including the least experienced rider.</p></div>
          </section>

          <section id="packing">
            <h2>What to pack for October cycling</h2>
            <p>
              Prepare for changing temperatures rather than packing for one expected condition. A base layer and light extra layer can be useful on cool starts or higher routes, while sun protection and adequate hydration remain important on exposed lower terrain. A windproof or waterproof layer may be appropriate depending on the planned route and forecast.
            </p>
            <p>
              Bring a properly fitted helmet, riding clothing, gloves, eyewear and suitable footwear. Confirm whether a bike, helmet, repair kit and spare parts are provided, and what personal tools or supplies you should carry. E-MTB riders should check battery and charger arrangements; riders bringing their own bicycle should clarify transport, assembly and luggage details before travelling.
            </p>
            <ul className="article-checklist">
              <li>Helmet, gloves, eyewear and season-appropriate riding clothing.</li>
              <li>Sun protection and enough water capacity for the longest planned section between refills.</li>
              <li>Light layers for cooler mornings, elevation changes or wind.</li>
              <li>Personal medication and essential items you need during the ride.</li>
              <li>Route-appropriate repair supplies and clear information about the support plan.</li>
            </ul>
          </section>

          <section id="booking-checklist">
            <h2>Before you book an October cycling holiday</h2>
            <p>
              Ask for a clear description of the itinerary and what is included. Confirm daily distances, elevation, surface type, accommodation, meals, transfers, bike arrangements, support and any extra costs. Seasonal suitability and availability should be checked for your travel dates; do not assume a route is operating or appropriate without confirmation.
            </p>
            <ul className="article-checklist">
              <li><strong>Route suitability:</strong> Does the route match my fitness, technical skills and preferred cycling style?</li>
              <li><strong>Conditions:</strong> How will the forecast and trail or road conditions be checked before each stage?</li>
              <li><strong>Equipment:</strong> What bike models and sizes are available, and what should I bring?</li>
              <li><strong>Logistics:</strong> How are transfers, luggage, meals, accommodation and mechanical assistance handled?</li>
              <li><strong>Flexibility:</strong> What alternative is available if a planned stage becomes unsuitable?</li>
            </ul>
          </section>

          <section id="october-faq" className="article-faq">
            <h2>Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>A note on seasonal planning</strong>
            <p>This article offers general trip-planning advice, not a live weather report or confirmation of trail access. Check the forecast close to departure and confirm the route and support arrangements with your local team.</p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading">
            <div><p className="article-eyebrow article-eyebrow-dark">KEEP PLANNING</p><h2>More seasonal cycling guides</h2></div>
            <Link href="/journal" className="article-text-link">Back to the Journal ↗</Link>
          </div>
          <div className="article-related-grid">
            {relatedArticles.map((article) => (
              <article className="article-related-card" key={article.title}>
                <Link className="article-related-image" href={article.href}><img src={article.image} alt={article.title} loading="lazy" /></Link>
                <div className="article-related-content">
                  <p className="article-eyebrow article-eyebrow-dark">{article.category}</p>
                  <h3><Link href={article.href}>{article.title}</Link></h3>
                  <p>{article.text}</p>
                  <Link href={article.href} className="article-text-link">Read article ↗</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="article-cta">
        <div className="article-shell article-cta-inner">
          <div>
            <p className="article-eyebrow">MAKE YOUR OCTOBER PLAN</p>
            <h2>Choose a route that fits your ride.</h2>
            <p>Tell us your dates, group size, preferred cycling style and the regions you want to explore. We can discuss itinerary options and the details to confirm before travel.</p>
          </div>
          <div className="article-cta-actions">
            <Link className="article-button article-button-light" href="/contact?request=october-cycling-planning">Plan your trip ↗</Link>
            <Link className="article-button article-button-outline" href="/destinations">Explore destinations</Link>
          </div>
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
        .october-cycling-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
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
        @media(prefers-reduced-motion:reduce){.october-cycling-article *,.october-cycling-article *:before,.october-cycling-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
