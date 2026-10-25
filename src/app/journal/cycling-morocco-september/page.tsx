import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cycling Morocco in September | Mountain Bike Morocco",
  description:
    "Plan a September cycling holiday in Morocco with practical guidance on Atlas Mountain weather, Marrakech and Agafay rides, desert routes, the Atlantic Coast, equipment and daily timing.",
  alternates: { canonical: "/journal/cycling-morocco-september" },
  openGraph: {
    title: "Cycling Morocco in September",
    description:
      "A practical guide to choosing Moroccan cycling regions and preparing for September conditions across MTB, E-MTB, gravel and road cycling holidays.",
    type: "article",
    images: ["/images/Explore-Atlas-Mountains-by-bike.jpg"],
  },
};

const relatedArticles = [
  {
    category: "SEASONAL CYCLING",
    title: "Cycling Morocco in October",
    text: "Compare regional conditions and route styles when planning a ride later in autumn.",
    image: "/images/Explore-Atlas-Mountains-bike.jpg",
    href: "/journal/cycling-morocco-october",
  },
  {
    category: "SEASONAL CYCLING",
    title: "Cycling Morocco in November",
    text: "Plan for cooler starts, changing mountain conditions and a different balance of regions.",
    image: "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    href: "/journal/cycling-morocco-november",
  },
  {
    category: "TRIP PLANNING",
    title: "Best Time to Visit Morocco for Cycling",
    text: "Compare seasons and landscapes before settling on dates for your cycling holiday.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/journal/best-time-visit-morocco-cycling",
  },
];

const faqs = [
  {
    question: "Is September a good month for cycling in Morocco?",
    answer:
      "September can be a useful month to consider, but it is not equally comfortable everywhere. Lower areas and open desert terrain may remain hot, while mountain temperatures vary with altitude and time of day. Choose the region and route first, then check the forecast close to departure.",
  },
  {
    question: "Can I mountain bike in the High Atlas in September?",
    answer:
      "High Atlas rides may be possible, but route suitability depends on elevation, recent weather, surface conditions and the rider’s experience. Ask about the exact route, climbing, technical sections and any exposed high-altitude stretches before confirming a trip.",
  },
  {
    question: "Is the Sahara too hot for cycling in September?",
    answer:
      "Conditions in southern and desert regions can still be hot in September. The exact experience varies by location and date, so ask about early starts, distance, shade, water resupply and support arrangements. Do not rely on a generic month-by-month description instead of route-specific advice.",
  },
  {
    question: "What should I pack for a September cycling holiday?",
    answer:
      "Start with a properly fitted helmet, riding clothing, gloves, eyewear, sun protection and enough hydration capacity for the route. Add light layers for cooler mornings or higher elevations, plus a wind or rain layer if the itinerary and forecast call for one. Confirm what equipment and spares the operator provides.",
  },
  {
    question: "Which cycling style works best in September?",
    answer:
      "There is no single best style for every region. MTB suits appropriate trails, E-MTB can help with climbing when battery and charging needs are planned, gravel opens up suitable rural tracks, and road cycling is shaped by traffic, elevation and heat. Choose based on route conditions and your riding preferences.",
  },
  {
    question: "How far ahead should I plan a September cycling trip?",
    answer:
      "Start planning early enough to discuss availability, accommodation, transfers, bike sizes and route options, especially for a private or multi-day itinerary. Reconfirm weather, trail conditions, start times and equipment details closer to travel.",
  },
];

export default function CyclingMoroccoSeptemberPage() {
  return (
    <main className="september-cycling-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Cycling Morocco in September</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">SEASONAL CYCLING · TRIP PLANNING</p>
          <h1>Cycling Morocco in September</h1>
          <p className="article-deck">
            September can be a useful time to consider a cycling holiday in Morocco, but the right plan depends on where you ride. Mountain valleys, open rocky terrain, desert routes and the Atlantic Coast all have different conditions. Use this guide to compare regions, choose a suitable cycling style and prepare for changing temperatures, strong sun and varied daily demands.
          </p>
          <div className="article-meta"><span>5 MIN READ</span><span>SEPTEMBER · MOROCCO</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/Explore-Atlas-Mountains-by-bike.jpg" alt="Cycling through an Atlas Mountain landscape in Morocco" fetchPriority="high" />
          <figcaption>Plan around the region, the elevation and the actual conditions expected for your dates.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#why-september">Why plan for September?</a>
          <a href="#choose-region">Choose the right region</a>
          <a href="#cycling-style">Match the cycling style</a>
          <a href="#daily-plan">Plan daily timing and distance</a>
          <a href="#packing">What to pack</a>
          <a href="#booking-checklist">Before you book</a>
          <a href="#september-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            The most useful way to plan a September ride is to start with the route—not a blanket promise about the weather. Morocco covers very different landscapes and elevations, so a mountain itinerary and a desert itinerary can feel completely different during the same week.
          </p>

          <section id="why-september">
            <h2>Why September needs a region-by-region plan</h2>
            <p>
              September sits between the main summer period and the cooler months, but conditions do not change at the same speed across the country. Lower elevations and exposed southern regions may still experience considerable heat. Mountain mornings can feel cooler than afternoons, and wind or recent weather can affect an exposed route. The actual experience depends on the dates, altitude and terrain you choose.
            </p>
            <p>
              This is why a good itinerary takes account of more than the calendar. Daily distance, accumulated climbing, the amount of shade, opportunities to refill water and the distance to support all influence how comfortable and enjoyable a ride feels. Ask for details of the proposed route rather than relying only on a destination name.
            </p>
            <div className="article-tip"><strong>Planning principle</strong><p>Choose a region and riding objective first, then confirm the conditions, route, start time and equipment requirements for your actual dates.</p></div>
          </section>

          <section id="choose-region">
            <h2>Choose the right Moroccan region</h2>
            <h3>High Atlas Mountains</h3>
            <p>
              The High Atlas offers mountain scenery, village tracks and routes that can combine climbs with rugged descents. Altitude makes a difference: conditions at higher elevations can be cooler and less predictable than in the foothills. Before choosing a route, discuss the elevation profile, technical level, exposure, transfer time and whether the plan includes remote sections.
            </p>
            <h3>Marrakech and the Agafay area</h3>
            <p>
              Rides around Marrakech and the rocky Agafay landscape can fit a shorter cycling day or a wider holiday. Open terrain can offer little shade, so timing, water capacity and route support matter. An early departure may help with warmer conditions, but the start time should be agreed with the team based on the expected forecast and itinerary.
            </p>
            <h3>Southern routes and the Sahara</h3>
            <p>
              A desert or southern expedition requires more careful planning around heat, water, distance between services and access for support. Confirm where water is available, what the support vehicle carries, how the route can be adapted and what happens if conditions become unsuitable. Avoid assuming that a planned distance is appropriate simply because it is listed in a tour description.
            </p>
            <h3>Atlantic Coast</h3>
            <p>
              Coastal rides offer a different mix of roads, rural tracks and open landscapes. Wind can influence effort and pace, so the route, direction of travel and daily distance should be considered together. Confirm the expected surface and traffic conditions if a trip combines paved roads and off-road sections.
            </p>
          </section>

          <section id="cycling-style">
            <h2>Match your cycling style to the route</h2>
            <h3>Mountain biking</h3>
            <p>
              MTB is a good fit for riders who want trails, rocky tracks and varied terrain where a mountain bike is appropriate. Technical ability matters more than distance alone: loose surfaces, steep gradients and narrow sections may require confident handling. Tell the guide what trails you usually ride and which features you prefer to avoid.
            </p>
            <h3>E-MTB</h3>
            <p>
              Electric assistance can help riders manage climbs or enjoy a longer route, but it does not remove the need to plan for heat, effort and terrain. Battery range depends on the bike, elevation, assist level, rider weight and surface. Confirm charging opportunities, battery capacity, bike size and mechanical support before committing to a longer stage.
            </p>
            <h3>Gravel cycling</h3>
            <p>
              Gravel routes can link rural roads and suitable unpaved tracks, making them useful for riders who enjoy exploring beyond paved highways. Surface and tyre choice are important: rough, loose or rocky tracks can require a different setup from smooth hard-packed roads. Ask for a route description and confirm whether the itinerary is mostly paved, mostly unpaved or mixed.
            </p>
            <h3>Road cycling</h3>
            <p>
              Road cycling can focus on mountain climbs, quieter regional roads and longer point-to-point journeys. In September, plan the target distance around elevation, traffic, heat and the availability of reliable stops. If you are building a multi-day route, include recovery time and confirm luggage transfers and mechanical support.
            </p>
          </section>

          <section id="daily-plan">
            <h2>Plan daily timing, distance and support</h2>
            <p>
              Start by being realistic about the amount of riding your group wants to do. A route with a modest distance can still be demanding if it includes long climbs, rough surfaces or limited opportunities to stop. Consider the time needed for transfers, breaks, meals and enjoying the landscape as well as time on the bike.
            </p>
            <ul className="article-checklist">
              <li><strong>Discuss start times.</strong> Ask whether an earlier start is recommended for the specific region and forecast.</li>
              <li><strong>Confirm water and food.</strong> Check planned refill points, lunch arrangements and what you must carry between stops.</li>
              <li><strong>Understand the route profile.</strong> Review climbing, surface, technical sections, exposure and likely ride duration.</li>
              <li><strong>Clarify support.</strong> Ask what mechanical help, spare parts, transfer support and communication arrangements are included.</li>
              <li><strong>Keep room for adjustments.</strong> A sensible itinerary should have a plan for changing a stage if weather or conditions make the original route inappropriate.</li>
            </ul>
            <div className="article-tip"><strong>For private groups</strong><p>Share the experience level and comfort range of every rider. Planning around the least experienced participant helps create a route everyone can enjoy.</p></div>
          </section>

          <section id="packing">
            <h2>What to pack for September cycling</h2>
            <p>
              Packing should follow the specific route and forecast. Strong sun protection is useful for exposed rides, while mountain trips may need extra layers for cool starts and higher elevations. Bring a properly fitted helmet, suitable footwear, gloves, eyewear, riding clothing and a hydration setup with the capacity recommended for the route.
            </p>
            <p>
              Ask whether the bike, helmet, repair kit and spare parts are provided or whether you should bring your own. For an E-MTB tour, confirm charger compatibility, battery arrangements and whether charging is possible overnight. For a remote ride, clarify what the support team carries and do not assume that supplies will be available between villages or stops.
            </p>
            <ul className="article-checklist">
              <li>Helmet, gloves, eyewear and sun protection.</li>
              <li>Enough water capacity for the longest section between confirmed refills.</li>
              <li>Light extra layers for early starts, wind or higher elevations.</li>
              <li>Personal medication and any essential items you need during the ride.</li>
              <li>Route-appropriate repair items and a clear understanding of the support plan.</li>
            </ul>
          </section>

          <section id="booking-checklist">
            <h2>Before you book a September cycling holiday</h2>
            <p>
              A few targeted questions help ensure that the trip matches your expectations. Ask for the proposed itinerary, daily distances, elevation, surface type, accommodation arrangements, included meals, transfers and any extra costs. Confirm what is available for your dates rather than assuming that every option operates in the same way throughout the season.
            </p>
            <ul className="article-checklist">
              <li><strong>Route suitability:</strong> Does the itinerary match my fitness, technical skills and preferred cycling style?</li>
              <li><strong>Seasonal conditions:</strong> What should I expect for the chosen region and elevation, and when will the weather be checked again?</li>
              <li><strong>Equipment:</strong> What bike models and sizes are available, and what should I bring?</li>
              <li><strong>Logistics:</strong> How do transfers, luggage, meals, accommodation and support work?</li>
              <li><strong>Flexibility:</strong> What is the alternative plan if a route or stage is unsuitable on the day?</li>
            </ul>
          </section>

          <section id="september-faq" className="article-faq">
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
            <p>This guide offers general preparation advice, not a live weather report or confirmation of trail conditions. Check the forecast close to departure and confirm the route and support arrangements with your local team.</p>
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
            <p className="article-eyebrow">MAKE YOUR SEPTEMBER PLAN</p>
            <h2>Choose a route that fits your ride.</h2>
            <p>Tell us your dates, group size, preferred cycling style and the regions you want to explore. We can discuss suitable itinerary options and the details to confirm before travel.</p>
          </div>
          <div className="article-cta-actions">
            <Link className="article-button article-button-light" href="/contact?request=september-cycling-planning">Plan your trip ↗</Link>
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
        .september-cycling-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
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
        @media(prefers-reduced-motion:reduce){.september-cycling-article *,.september-cycling-article *:before,.september-cycling-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
