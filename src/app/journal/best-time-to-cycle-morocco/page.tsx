import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "When Is the Best Time to Go Cycling in Morocco? | Mountain Bike Morocco",
  description:
    "Plan a cycling holiday in Morocco around the season, altitude, route surface and riding style. Compare conditions across the High Atlas, Marrakech, the desert and the Atlantic Coast.",
  alternates: { canonical: "/journal/best-time-to-cycle-morocco" },
  openGraph: {
    title: "When Is the Best Time to Go Cycling in Morocco?",
    description:
      "A practical seasonal guide to MTB, E-MTB, gravel and road cycling in Morocco, from the High Atlas to the desert and Atlantic Coast.",
    type: "article",
    images: ["/images/cycling-holiday-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "SEASONAL CYCLING",
    title: "Best Time to Visit Morocco for Cycling",
    text: "Compare seasons and regions before choosing dates for your preferred cycling holiday.",
    image: "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    href: "/journal/best-time-visit-morocco-cycling",
  },
  {
    category: "SPRING GUIDE",
    title: "Spring Cycling in Morocco: March–May",
    text: "Prepare for changing temperatures between mountain mornings and warmer lowland afternoons.",
    image: "/images/atlas-valley-cycling-morocco.jpg",
    href: "/journal/spring-cycling-morocco-march-may",
  },
  {
    category: "AUTUMN GUIDE",
    title: "Cycling Morocco in October",
    text: "Use terrain, altitude and route conditions to plan an autumn ride that fits your group.",
    image: "/images/Explore-Atlas-Mountains-bike.jpg",
    href: "/journal/cycling-morocco-october",
  },
];

const faqs = [
  {
    question: "What is generally the best season for cycling in Morocco?",
    answer:
      "Spring and autumn are often practical starting points for many itineraries, but there is no single ideal season for every region or discipline. Altitude, route surface, wind, heat and current access conditions can change what works best. Choose the destination and riding style first, then review conditions for your intended dates.",
  },
  {
    question: "Can I ride in the Atlas Mountains during winter?",
    answer:
      "Some lower routes may be suitable, but higher areas can be very cold or affected by snow, ice or weather-related access issues. Do not assume a high pass or mountain trail will be rideable. Confirm the exact route and recent conditions before departure and keep an alternative plan available.",
  },
  {
    question: "Is summer too hot for cycling in Morocco?",
    answer:
      "Summer heat can make exposed lowland and desert routes demanding, particularly around the middle of the day. Higher elevations may be cooler but can still have strong sun and changing weather. Routes, start times, water capacity, shade and support need to be planned for the actual conditions.",
  },
  {
    question: "When should I visit for a Sahara cycling trip?",
    answer:
      "Desert trips require careful attention to daytime heat, overnight temperatures, wind, water and distance between services. Many riders look to cooler parts of the year, but the right dates depend on the route and conditions. Confirm the support plan, resupply points and contingency arrangements before booking.",
  },
  {
    question: "Does the best time change for MTB, gravel and road cycling?",
    answer:
      "Yes. MTB depends heavily on trail condition, technical terrain and elevation; gravel trips need reliable surfaces, navigation and resupply; road rides are influenced by temperature, traffic, wind and climbing. E-MTB trips also require realistic battery and charging plans. Match the season to both the region and your chosen bike style.",
  },
  {
    question: "How far in advance should I confirm the route?",
    answer:
      "Start with your dates, experience, preferred daily effort and the areas you want to visit. Ask for a realistic route outline, accommodation and transfer plan, equipment arrangements and support details. Recheck forecasts, trail access and road conditions close to departure because seasonal guidance cannot replace current local information.",
  },
];

export default function BestTimeToCycleMoroccoPage() {
  return (
    <main className="best-time-cycle-morocco-article" id="top">
      <div className="article-shell article-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>When Is the Best Time to Go Cycling in Morocco?</span>
      </div>

      <header className="article-shell article-hero">
        <div className="article-hero-copy">
          <p className="article-eyebrow">TRIP PLANNING · SEASONS · MOROCCO</p>
          <h1>When Is the Best Time to Go Cycling in Morocco?</h1>
          <p className="article-deck">
            The best time to cycle in Morocco depends on where you want to ride and what kind of experience you want. Mountain altitude, desert heat, coastal wind and route surfaces can vary widely, so it is more useful to match the season to your itinerary than to look for one perfect month for the whole country.
          </p>
          <div className="article-meta"><span>5 MIN READ</span><span>SEASONS · REGIONS · ROUTE PLANNING</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/cycling-holiday-morocco.jpg" alt="Cycling holiday scenery in Morocco" fetchPriority="high" />
          <figcaption>Choose travel dates around the terrain, altitude and style of riding you want to experience.</figcaption>
        </figure>
      </header>

      <div className="article-shell article-main-grid">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#start-with-region">Start with the region</a>
          <a href="#spring">Spring cycling</a>
          <a href="#summer">Summer cycling</a>
          <a href="#autumn">Autumn cycling</a>
          <a href="#winter">Winter cycling</a>
          <a href="#region-guide">Regional differences</a>
          <a href="#choose-discipline">Choose your cycling style</a>
          <a href="#prepare">Prepare for the season</a>
          <a href="#checklist">Pre-trip checklist</a>
          <a href="#faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            Morocco brings together high mountain routes, dry foothills, desert landscapes and an Atlantic coastline. These areas do not share one climate. Use seasonal information to narrow your options, then confirm the conditions for the specific route and dates you are considering.
          </p>

          <section id="start-with-region">
            <h2>Start with the region, not just the month</h2>
            <p>
              A spring ride in a mountain valley can feel very different from a spring ride in an exposed desert landscape. Elevation influences temperature, high passes can experience cold or unsettled conditions, and coastal routes may be shaped by wind. Even within one itinerary, a long transfer between regions can mean a significant change in conditions.
            </p>
            <p>
              Begin by deciding whether your priority is Atlas singletrack, assisted mountain climbs, rural gravel roads, scenic road cycling or a longer desert expedition. Once the main region and riding style are clear, discuss the route surface, daily distance, climbing and support plan with the organiser.
            </p>
            <figure className="article-inline-image"><img src="/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg" alt="Multi-day cycling journey in the Atlas Mountains" loading="lazy" /><figcaption>Altitude and terrain can matter as much as the calendar when choosing a cycling itinerary.</figcaption></figure>
          </section>

          <section id="spring">
            <h2>Spring cycling in Morocco</h2>
            <p>
              Spring can work well for many cycling holidays, particularly where riders want to combine mountain scenery with lower-elevation routes. Conditions still change with altitude and recent weather. Mornings in the mountains may be cool, and higher routes can remain affected by winter conditions even when lower valleys feel mild.
            </p>
            <h3>What to plan for</h3>
            <p>
              Pack layers that can be adjusted during the day, and ask whether the planned route includes high passes or exposed ridgelines. A flexible itinerary can be useful if a stage needs to be adapted. For more detailed month-by-month preparation, see our <Link href="/journal/spring-cycling-morocco-march-may">spring cycling guide</Link>.
            </p>
          </section>

          <section id="summer">
            <h2>Summer cycling: manage heat and exposure</h2>
            <p>
              In hotter months, exposed lowland and desert routes can become physically demanding. A ride that is manageable in cool conditions may be uncomfortable when temperatures rise, especially where shade and services are limited. Higher elevations can offer a different experience, but do not remove the need for sun protection, hydration and realistic pacing.
            </p>
            <p>
              Ask about early starts, the amount of shade, reliable water access, the distance between resupply points and whether the schedule can be shortened if conditions require it. Never rely on a generic description of a region as “cooler” or “hotter” instead of checking current local conditions for the actual route.
            </p>
            <div className="article-tip"><strong>Heat-planning tip</strong><p>Agree on water capacity, refill opportunities, turnaround points and the support response before setting out on a remote or exposed stage.</p></div>
          </section>

          <section id="autumn">
            <h2>Autumn cycling: plan around changing temperatures</h2>
            <p>
              Autumn is often considered for mountain and multi-region trips because conditions can be more comfortable than during the hottest period. However, mornings and evenings can cool quickly, particularly at elevation, while lower and southern areas can remain warm. Wind and recent weather may also change how exposed routes feel.
            </p>
            <p>
              For a September, October or November trip, choose the intended riding area first and use month-specific guidance to refine your packing and daily schedule. Our guides to <Link href="/journal/cycling-morocco-september">cycling in September</Link> and <Link href="/journal/cycling-morocco-october">cycling in October</Link> cover those considerations in more detail.
            </p>
          </section>

          <section id="winter">
            <h2>Winter cycling: choose lower routes carefully</h2>
            <p>
              Winter can bring cold mornings and difficult conditions at higher elevations. Snow, ice, rainfall or strong wind may affect the suitability of mountain routes and passes. Lower areas can be more practical for some rides, but the conditions still depend on the weather and the exact route.
            </p>
            <p>
              If travelling in winter, ask which stages have flexible alternatives, whether any passes are essential to the itinerary and how the organiser monitors changing conditions. Bring warm layers for early starts and descents, and make sure the route has sensible options if weather makes a planned section unsuitable.
            </p>
          </section>

          <section id="region-guide">
            <h2>How conditions vary by region</h2>
            <h3>High Atlas Mountains and Imlil</h3>
            <p>
              Elevation, exposure and mountain weather are central considerations. Check the expected conditions for the particular valley or pass, and ask how much climbing and technical terrain a ride includes. The same date can be comfortable at one elevation and much colder higher up.
            </p>
            <h3>Marrakech and Agafay</h3>
            <p>
              These areas can offer accessible day rides and open rocky landscapes, but heat, sun exposure, surface and water planning matter. An early start and a route with clear support arrangements can make a significant difference in warmer periods.
            </p>
            <h3>Sahara and southern Morocco</h3>
            <p>
              Desert trips need careful planning for heat, wind, large day-to-night temperature differences and the distance between services. Ask for the full resupply and support plan rather than relying on a season label alone.
            </p>
            <h3>Atlantic Coast</h3>
            <p>
              Coastal rides may be affected by wind and variable conditions along exposed stretches. Clarify the surface mix, traffic exposure and planned stops, especially if your itinerary combines paved roads with gravel or rural tracks.
            </p>
            <p><Link className="article-text-link" href="/destinations">Explore all cycling destinations ↗</Link></p>
          </section>

          <section id="choose-discipline">
            <h2>Choose dates for your cycling style</h2>
            <h3>Mountain biking and enduro</h3>
            <p>Technical trails depend on surface conditions, access, elevation and rider ability. Ask about loose sections, steep descents and alternatives if a route is wet, snow-affected or otherwise unsuitable.</p>
            <h3>E-MTB</h3>
            <p>In addition to seasonal conditions, plan battery range and charging around the terrain, climbing, assistance mode and the availability of support. Do not assume remote stages have convenient charging options.</p>
            <h3>Gravel cycling</h3>
            <p>Ask about the mixture of hard-packed tracks, loose gravel, rough ground and paved connections. Surface changes affect comfort, speed, tyres and daily distance, especially after weather has altered a track.</p>
            <h3>Road cycling</h3>
            <p>Temperature, climbing, wind, road surface and traffic conditions all influence the day. Choose distances around elevation and support as well as the number of kilometres, and confirm road conditions close to departure.</p>
          </section>

          <section id="prepare">
            <h2>Prepare for the season and route</h2>
            <p>
              Seasonal advice is a starting point, not a forecast. As your trip approaches, check the current weather, route access and any local guidance for mountain passes, rural tracks or remote desert stages. For multi-day rides, the plan should allow for rest, transfers and changes when conditions require them.
            </p>
            <p>
              Share your group’s riding experience, preferred bike type, daily-distance expectations and any equipment requirements before booking. The more clearly you understand what each stage involves, the easier it is to choose a suitable season and itinerary.
            </p>
          </section>

          <section id="checklist">
            <h2>Pre-trip checklist</h2>
            <ul className="article-checklist">
              <li>Choose the destination and riding style before picking dates.</li>
              <li>Ask about elevation, road or trail surface, distance and daily effort.</li>
              <li>Confirm bike availability, size, fit, equipment and mechanical support.</li>
              <li>Plan for water, sun protection, layers and expected conditions.</li>
              <li>Clarify accommodation, transfers, food stops and remote-stage support.</li>
              <li>Recheck forecasts and route access close to departure.</li>
            </ul>
          </section>

          <section id="faq" className="article-faq">
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
            <p>This guide offers general planning information, not a live weather or trail-access report. Check current local conditions and confirm the exact route and support arrangements before travel.</p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading">
            <div><p className="article-eyebrow article-eyebrow-dark">KEEP EXPLORING</p><h2>More cycling guides for Morocco.</h2></div>
            <Link className="article-text-link" href="/journal">View all articles ↗</Link>
          </div>
          <div className="article-related-grid">
            {relatedArticles.map((article) => (
              <article className="article-related-card" key={article.href}>
                <Link className="article-related-image" href={article.href}><img src={article.image} alt={article.title} loading="lazy" /></Link>
                <div className="article-related-content">
                  <p className="article-eyebrow article-eyebrow-dark">{article.category}</p>
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
          <div><p className="article-eyebrow">PLAN YOUR RIDE</p><h2>Choose the season. Find the right route. Ride Morocco.</h2><p>Share your dates, preferred cycling style, experience and the regions you would like to explore. We can discuss route options and practical arrangements for your trip.</p></div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/contact">Plan your trip ↗</Link><Link className="article-button article-button-outline" href="/destinations">Explore destinations</Link></div>
        </div>
      </section>

      <footer className="article-site-footer">
        <div className="article-shell article-footer-grid">
          <div className="article-footer-brand">
            <Link className="article-brand" href="/"><img src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link>
            <p>Guided MTB, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, trails and local culture at your own pace.</p>
          </div>
          <div><h3>Explore</h3><Link href="/cycling-trips">All Cycling Tours</Link><Link href="/cycling-trips/mtb">Mountain Bike Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil">Imlil Valley</Link><Link href="/destinations/toubkal">Mount Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let&apos;s Plan</h3><Link href="/about">About Us</Link><Link href="/events">Events</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="article-shell article-footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>

      <style>{`
        .best-time-cycle-morocco-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
        .article-shell{width:min(1180px,calc(100% - 48px));margin-inline:auto}
        .article-breadcrumbs{display:flex;flex-wrap:wrap;gap:10px;padding-top:25px;padding-bottom:20px;font-size:12px;color:#777168}
        .article-breadcrumbs a{color:inherit;text-decoration:none}.article-breadcrumbs a:hover{color:#c65c35}
        .article-hero{padding:44px 0 60px;display:grid;grid-template-columns:.95fr 1.05fr;gap:clamp(30px,5vw,68px);align-items:center}
        .article-eyebrow{font-size:11px;line-height:1.5;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#e7663b;margin:0 0 16px}.article-eyebrow-dark{color:#bd542f}
        .article-hero h1{font-size:clamp(42px,5.8vw,76px);line-height:.99;letter-spacing:-.055em;margin:0 0 22px;max-width:700px}
        .article-deck{font-size:18px;line-height:1.8;color:#5d5953;margin:0;max-width:660px}
        .article-meta{display:flex;flex-wrap:wrap;gap:18px;margin-top:25px;font-size:10px;font-weight:800;letter-spacing:.13em;color:#777168}
        .article-hero-image{margin:0;position:relative;min-width:0}.article-hero-image img{display:block;width:100%;height:clamp(320px,40vw,515px);object-fit:cover}.article-hero-image figcaption{padding:10px 0 0;font-size:12px;color:#777168;line-height:1.6}
        .article-main-grid{display:grid;grid-template-columns:220px minmax(0,760px);justify-content:space-between;gap:clamp(28px,5vw,75px);padding-top:20px;padding-bottom:90px}
        .article-toc{align-self:start;position:sticky;top:30px;display:flex;flex-direction:column;gap:12px;padding:20px;border:1px solid #dedbd4;background:#fff}.article-toc p{font-size:10px;font-weight:800;letter-spacing:.16em;color:#bd542f;margin:0 0 5px}.article-toc a{font-size:13px;line-height:1.45;color:#514d47;text-decoration:none}.article-toc a:hover{color:#bd542f}
        .article-body{min-width:0;font-size:16px;color:#4e4a45}.article-body p{margin:0 0 19px;line-height:1.9}.article-body .article-lead{font-size:20px;line-height:1.8;color:#292723;margin-bottom:38px}.article-body section{scroll-margin-top:35px;margin:0 0 38px}.article-body h2{font-size:clamp(28px,3.2vw,38px);line-height:1.12;letter-spacing:-.035em;color:#211f1b;margin:0 0 17px}.article-body h3{font-size:22px;line-height:1.2;margin:24px 0 12px;color:#211f1b}
        .article-inline-image{margin:28px 0 24px}.article-inline-image img{display:block;width:100%;max-height:430px;object-fit:cover}.article-inline-image figcaption{padding-top:10px;color:#777168;font-size:12px;line-height:1.6}
        .article-tip{margin:26px 0;padding:23px 25px;background:#eeeae2;border-left:3px solid #c65c35}.article-tip strong{display:block;margin-bottom:6px;color:#25231f}.article-tip p{margin:0}
        .article-checklist{margin:10px 0 24px;padding-left:23px}.article-checklist li{padding-left:5px;margin:0 0 12px;line-height:1.8}.article-checklist strong{color:#24221e}.article-body a{color:#bd542f}.article-text-link{font-size:13px;font-weight:800;text-decoration:none;color:#bd542f}.article-text-link:hover{text-decoration:underline}
        .article-faq details{border-top:1px solid #dcd8d0;padding:18px 0}.article-faq details:last-child{border-bottom:1px solid #dcd8d0}.article-faq summary{cursor:pointer;list-style:none;font-size:16px;font-weight:700;color:#24221e}.article-faq summary::-webkit-details-marker{display:none}.article-faq summary:after{content:'+';float:right;color:#c65c35;font-size:22px}.article-faq details[open] summary:after{content:'−'}.article-faq details p{margin:13px 0 0;color:#625e57}
        .article-author-note{padding:22px 24px;background:#fff;border:1px solid #e0ddd6}.article-author-note strong{display:block;color:#24221e;margin-bottom:6px}.article-author-note p{margin:0;font-size:14px}
        .article-related{padding:76px 0 86px;background:#f0eee8}.article-section-heading{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:30px}.article-section-heading h2{font-size:clamp(30px,4vw,45px);line-height:1.1;letter-spacing:-.04em;margin:0}.article-related-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}.article-related-card{background:#fff;border:1px solid #e0ddd6;min-width:0}.article-related-image{display:block;overflow:hidden}.article-related-image img{display:block;width:100%;height:220px;object-fit:cover;transition:transform .3s ease}.article-related-image:hover img{transform:scale(1.03)}.article-related-content{padding:22px}.article-related-content .article-eyebrow{font-size:9px;margin-bottom:10px}.article-related-content h3{font-size:21px;line-height:1.2;margin:0 0 10px;letter-spacing:-.02em}.article-related-content h3 a{color:inherit;text-decoration:none}.article-related-content h3 a:hover{color:#bd542f}.article-related-content>p:not(.article-eyebrow){color:#68645d;font-size:13px;line-height:1.7;margin:0 0 17px}
        .article-cta{padding:65px 0;background:#23231f;color:#fff}.article-cta-inner{display:flex;justify-content:space-between;align-items:center;gap:35px}.article-cta .article-eyebrow{color:#f18b60}.article-cta h2{font-size:clamp(32px,4vw,48px);line-height:1.05;letter-spacing:-.04em;max-width:600px;margin:0 0 14px}.article-cta-inner>div:first-child>p:last-child{max-width:650px;color:#d1cdc5;margin:0;line-height:1.8}.article-cta-actions{display:flex;flex-wrap:wrap;gap:12px;flex-shrink:0}.article-button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 17px;font-size:12px;font-weight:800;text-decoration:none;transition:background .2s ease,color .2s ease}.article-button-light{background:#e7663b;color:#fff!important}.article-button-light:hover{background:#d6522a}.article-button-outline{border:1px solid #8f8b82;color:#fff!important}.article-button-outline:hover{background:#fff;color:#24221e!important}
        .article-site-footer{background:#181815;color:#fff;padding-top:55px}.article-footer-grid{display:grid;grid-template-columns:1.4fr repeat(3,minmax(0,1fr));gap:40px;padding-bottom:45px}.article-footer-grid>div{display:flex;flex-direction:column;align-items:flex-start;gap:11px}.article-footer-grid h3{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:#e98258;margin:0 0 7px}.article-footer-grid a:not(.article-brand){color:#d1cec7;font-size:13px;text-decoration:none}.article-footer-grid a:not(.article-brand):hover{color:#fff}.article-brand{display:flex;flex-direction:column;gap:12px;text-decoration:none;color:#fff;font-size:13px;font-weight:800;letter-spacing:.07em}.article-brand img{width:185px;max-height:60px;object-fit:contain;object-position:left center}.article-brand em{font-style:normal;color:#e98258;margin-left:5px}.article-footer-brand p{max-width:290px;font-size:13px;line-height:1.8;color:#aaa69d;margin:6px 0 0}.article-footer-bottom{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:1px solid #393832;padding-top:18px;padding-bottom:20px;color:#a9a59d;font-size:11px}.article-footer-bottom a{color:inherit;text-decoration:none}.article-footer-bottom a:hover{color:#fff}
        @media(max-width:900px){.article-hero{grid-template-columns:1fr;gap:28px;padding-top:22px}.article-hero h1{max-width:850px}.article-hero-image img{height:clamp(290px,58vw,480px)}.article-main-grid{grid-template-columns:1fr;padding-top:0}.article-toc{position:static;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 18px}.article-toc p{grid-column:1/-1}.article-related-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.article-cta-inner{align-items:flex-start;flex-direction:column}.article-footer-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:32px 22px}.article-footer-brand{grid-column:1/-1}}
        @media(max-width:560px){.article-shell{width:calc(100% - 34px)}.article-hero{padding-top:20px;padding-bottom:40px}.article-hero h1{font-size:43px}.article-deck{font-size:16px}.article-main-grid{padding-bottom:58px}.article-body{font-size:15px}.article-body .article-lead{font-size:18px}.article-toc{padding:16px;grid-template-columns:1fr 1fr}.article-related{padding:54px 0}.article-section-heading{align-items:flex-start;flex-direction:column;gap:15px}.article-related-grid{grid-template-columns:1fr}.article-related-image img{height:235px}.article-cta{padding:50px 0}.article-cta-actions{width:100%;flex-direction:column}.article-button{width:100%}.article-footer-grid{grid-template-columns:1fr 1fr;gap:28px 16px}.article-brand img{width:155px}.article-footer-grid>div{min-width:0}.article-footer-grid a:not(.article-brand){font-size:12px}.article-footer-bottom{flex-direction:column;gap:7px}}
        @media(prefers-reduced-motion:reduce){.best-time-cycle-morocco-article *,.best-time-cycle-morocco-article *:before,.best-time-cycle-morocco-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}