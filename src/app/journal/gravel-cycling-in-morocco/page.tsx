import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gravel Cycling in Morocco | Routes, Bikes & Planning Guide",
  description:
    "Plan a gravel cycling holiday in Morocco with practical guidance on mixed surfaces, bike setup, route choice, water, mechanical support and multi-day logistics.",
  alternates: { canonical: "/journal/gravel-cycling-in-morocco" },
  openGraph: {
    title: "Gravel Cycling in Morocco",
    description:
      "A practical guide to gravel riding in Morocco, from Atlas foothills and rural tracks to open southern landscapes, bike setup and multi-day preparation.",
    type: "article",
    images: ["/images/gravel-cycling-holiday-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "ROUTE INSPIRATION",
    title: "Best Cycling Routes From Marrakech",
    text: "Compare countryside rides, open rocky terrain, mountain foothills and route options from the city.",
    image: "/images/atlas-marrakech-cycling-tour.jpg",
    href: "/journal/best-cycling-routes-from-marrakech",
  },
  {
    category: "DESTINATION GUIDES",
    title: "Complete High Atlas Mountains Cycling Guide",
    text: "Learn how altitude, terrain, weather and logistics shape a cycling trip in the High Atlas.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/journal/complete-high-atlas-mountains-cycling-guide",
  },
  {
    category: "TRIP PLANNING",
    title: "Multi-Day Cycling Tours Planning",
    text: "Plan realistic stages, recovery time, accommodation, luggage transfers and support between rides.",
    image: "/images/group-adventure-cycling-morocco.jpg",
    href: "/journal/planning-multi-day-cycling-tours",
  },
];

const faqs = [
  {
    question: "Is Morocco suitable for a gravel cycling holiday?",
    answer:
      "Morocco offers a range of paved connectors, rural tracks and unpaved roads that may suit gravel riding, but the surface varies by region and route. Ask for a stage-by-stage description, tyre requirements, elevation and any rough or sandy sections before choosing a trip.",
  },
  {
    question: "What kind of gravel bike and tyres should I use?",
    answer:
      "The right setup depends on the route surface, load, rider experience and how much technical terrain is included. Tyre width and tread, puncture protection, gearing, brakes and frame clearance all matter. Confirm the actual route conditions before deciding on a bike or tyre choice.",
  },
  {
    question: "Can I do a gravel cycling trip as a beginner?",
    answer:
      "Some routes may suit riders who are comfortable on a bike and have experience with unpaved surfaces, while long remote stages, loose descents or extended climbing can be demanding. Discuss your usual distance, fitness, confidence on gravel and experience riding with luggage so the route can be matched to you.",
  },
  {
    question: "How do I plan water and food for remote gravel routes?",
    answer:
      "Do not assume every track has regular resupply points. Confirm the longest interval between reliable water and food stops, required carrying capacity, support-vehicle access and the plan if a shop or stop is unavailable. Carry the supplies advised for the specific stage and conditions.",
  },
  {
    question: "Can a gravel tour include the Atlas Mountains or desert regions?",
    answer:
      "It may be possible to plan gravel routes in different regions, but suitable bike choice and route design depend on the actual surface, elevation, season and logistics. For mountainous or remote stages, clarify transfer times, accommodation, mechanical support and any sections that may be too rough or sandy for your setup.",
  },
  {
    question: "What should I check before booking a multi-day gravel tour?",
    answer:
      "Ask for distance, ascent, surface mix, expected riding hours, food and water options, luggage handling, accommodation, mechanical support, inclusions and emergency arrangements for each stage. Share your riding experience and any equipment needs before confirming the itinerary.",
  },
];

export default function GravelCyclingInMoroccoPage() {
  return (
    <main className="gravel-cycling-morocco-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Gravel Cycling in Morocco</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">GRAVEL CYCLING · MIXED SURFACES · MOROCCO</p>
          <h1>Gravel Cycling in Morocco</h1>
          <p className="article-deck">
            A gravel cycling holiday in Morocco can bring together quiet paved links, hard-packed tracks, rough rural roads and wide-open landscapes. The best experience depends on how the surfaces change along the route, how much climbing is involved, and whether food, water and mechanical support are planned for the distance between settlements. Use this guide to compare routes and prepare a bike and itinerary that match the ride you want.
          </p>
          <div className="article-meta"><span>6 MIN READ</span><span>GRAVEL CYCLING · MOROCCO</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/gravel-cycling-holiday-morocco.jpg" alt="Gravel cycling holiday across Morocco's rural landscape" fetchPriority="high" />
          <figcaption>Good gravel planning starts with the real surface, realistic stages and a clear support plan.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#gravel-overview">What gravel riding means in Morocco</a>
          <a href="#regions-and-terrain">Regions and terrain</a>
          <a href="#bike-setup">Bike and tyre setup</a>
          <a href="#distance-and-climbing">Distance, climbing and pace</a>
          <a href="#water-and-support">Water, food and support</a>
          <a href="#multi-day-logistics">Multi-day logistics</a>
          <a href="#season-and-preparation">Season and preparation</a>
          <a href="#responsible-gravel">Responsible riding</a>
          <a href="#gravel-checklist">Gravel trip checklist</a>
          <a href="#gravel-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            Gravel riding is about linking places and surfaces, not simply finding the roughest road. In Morocco, a stage may move between smooth tarmac, packed earth, stones, washboard sections and loose material. A clear route description helps you choose the right bike, pack the right equipment and understand the daily effort before setting out.
          </p>

          <section id="gravel-overview">
            <h2>What makes gravel cycling in Morocco distinctive?</h2>
            <p>
              Morocco's variety makes it possible to plan gravel-focused days around mountain foothills, rural valleys and more open southern landscapes. Some routes are a series of firm tracks connected by quiet paved roads; others can include rougher surfaces and longer stretches away from facilities. The experience changes with the region and route designer, so the label “gravel” on its own is not enough to understand what a ride will demand.
            </p>
            <p>
              Before choosing an itinerary, ask for the percentage of paved and unpaved riding, the type of surface expected, the total ascent, the longest stage, and where the route becomes more remote. These details influence tyre choice, comfort, carrying capacity and the amount of time you need each day. They also help you judge whether you want a relaxed scenic trip or a more demanding expedition.
            </p>
            <div className="article-tip"><strong>Planning tip</strong><p>Ask for a stage-by-stage route summary that includes distance, ascent, surface mix, resupply options and support access. A route file or profile is useful, but it should be accompanied by a plain-language description of the ground you will ride.</p></div>
          </section>

          <section id="regions-and-terrain">
            <h2>Regions and terrain: choose the kind of gravel journey</h2>
            <figure className="article-inline-image"><img src="/images/gravel-bike-atlas-mountains.JPG" alt="Gravel bicycle route in Morocco's Atlas Mountain region" loading="lazy" /><figcaption>Foothill tracks and paved links can create varied gravel stages, but the actual surface should always be confirmed.</figcaption></figure>
            <h3>Atlas foothills and rural valleys</h3>
            <p>
              Foothills and valleys can combine village roads, dirt tracks, rolling terrain and mountain views. Elevation and temperatures may change noticeably over a stage, especially when the route climbs away from lower valleys. Discuss road conditions, climbing, the location of water stops and whether sections are steep or loose enough to make pushing the bike a possibility.
            </p>
            <h3>Marrakech countryside and nearby routes</h3>
            <p>
              Routes near Marrakech can be useful for a day ride or as the opening stage of a longer holiday. Some may use paved connections to reach quieter rural tracks, while others start outside the city to focus on better-suited riding. Confirm the start point, transfer time, traffic exposure and how much of the day is planned as actual cycling.
            </p>
            <h3>Open southern landscapes</h3>
            <p>
              Longer southern journeys may involve more exposed terrain, fewer services and greater distances between reliable stops. Gravel bikes can manage many firm tracks, but deep sand, sharp rocks, rough descents or heavily corrugated roads can change the suitability of a route. Ask what the surface is expected to be on the most difficult sections rather than assuming all unpaved roads are alike.
            </p>
          </section>

          <section id="bike-setup">
            <h2>Choose a bike setup that matches the surface</h2>
            <p>
              A gravel bike should be chosen for the actual route, rider and luggage load. Tyre clearance, casing strength, tread, gearing and braking all influence comfort and control. A wider tyre may improve comfort and grip on rough ground if the frame allows it, while a smoother tread may roll well on firm tracks and paved connectors. There is no single setup that suits every route in Morocco.
            </p>
            <h3>Tyres, gearing and puncture protection</h3>
            <p>
              Ask whether the route includes loose stones, sharp rock, washboard, soft sand or long paved sections. Select tyres and pressures around those conditions and your total load. Gearing should leave enough range for sustained climbs at a comfortable cadence, particularly if you will be carrying luggage or tackling consecutive riding days. Confirm compatibility and setup before travel rather than making major changes at the start of the trip.
            </p>
            <h3>Repair kit and bike checks</h3>
            <p>
              Carry basic tools and spares that fit your bike, including a suitable way to repair a puncture, a pump or inflation system, tyre levers and the small parts required by your setup. Check tyres, brakes, shifting, chain wear, bolts and wheel condition before departure. Ask the organiser what the support team carries so you can avoid gaps as well as unnecessary duplication.
            </p>
            <div className="article-tip"><strong>Bike-hire reminder</strong><p>If you plan to hire a bike, confirm the available frame size, tyre clearance, luggage mounting options, pedals, helmet, repair items and what happens if a mechanical problem cannot be fixed on the route.</p></div>
          </section>

          <section id="distance-and-climbing">
            <h2>Plan realistic daily distance, climbing and pace</h2>
            <p>
              Kilometres alone do not predict how a gravel stage will feel. A longer day on firm, rolling tracks may be manageable, while a shorter route with repeated climbs, loose surfaces or navigation challenges can require more time and concentration. Wind, heat, luggage and accumulated fatigue also affect progress. Build the itinerary around terrain and the group, not only a target distance.
            </p>
            <p>
              When reviewing a route, look at both total ascent and where the climbing occurs. Long climbs early in the day may be easier to manage than a series of steep rises after many hours in the saddle. Make sure the schedule allows for breaks, meals, photographs, repairs and unexpected delays. For a mixed-ability group, plan around a pace that the least experienced rider can sustain comfortably.
            </p>
            <h3>Navigation and route confidence</h3>
            <p>
              Rural tracks can branch, change condition or become difficult to distinguish on the ground. Ask how navigation is handled, whether the guide rides with the group or a support vehicle follows parts of the route, and what communication is available if riders become separated. Offline maps and a charged device can be helpful, but they are not substitutes for route knowledge and a clear group plan.
            </p>
          </section>

          <section id="water-and-support">
            <h2>Water, food and mechanical support on remote stages</h2>
            <p>
              Resupply is one of the most important planning questions for gravel routes. Some stages may pass through settlements with opportunities to stop; others may have long intervals without dependable shops, taps or cafés. Ask for the longest expected gap between reliable water sources and confirm how much water-carrying capacity riders need. Treat planned stops as a guide, and understand the backup plan if a stop is closed or unavailable.
            </p>
            <p>
              Food planning matters too, especially on days that include sustained climbing or rough surfaces. Confirm what meals or snacks are provided, when the group is likely to stop, and whether dietary needs can be accommodated. Carry enough for the stage based on the organiser's route-specific advice rather than relying on the next village being open.
            </p>
            <p>
              Support arrangements vary. Clarify whether a vehicle can reach the route, how luggage moves between overnight stops, which spares are carried, and what happens after a major mechanical issue or if a rider is unable to continue. Remote riding rewards preparation; it should not depend on a vague promise that help will always be nearby.
            </p>
          </section>

          <section id="multi-day-logistics">
            <h2>What to organise for a multi-day gravel trip</h2>
            <p>
              A multi-day trip needs a practical plan for more than riding. Confirm where each stage begins and ends, what accommodation is expected, when meals are served, how luggage is transferred and whether there are rest or shorter days. Transfers between regions can take time, so ask whether a day described as a cycling stage also includes a substantial vehicle journey.
            </p>
            <p>
              If you are travelling with your own bike, check airline packing requirements, transfer space for the bike case and the time allowed for assembly and checks. If a rental is planned, confirm the bike fit, pedal type, included accessories and whether a replacement can be arranged if a problem occurs. Write down what is included in the tour price and what costs may be separate.
            </p>
            <ul className="article-checklist">
              <li><strong>Daily plan:</strong> distance, ascent, surface, expected riding hours and finish time.</li>
              <li><strong>Logistics:</strong> accommodation, meals, luggage transfers and any vehicle connections.</li>
              <li><strong>Support:</strong> guide arrangements, mechanical tools, communication and contingency options.</li>
              <li><strong>Equipment:</strong> bike size and setup, pedals, helmet, personal spares and luggage requirements.</li>
              <li><strong>Inclusions:</strong> clarify guiding, transport, accommodation, food and any additional costs.</li>
            </ul>
          </section>

          <section id="season-and-preparation">
            <h2>Season, clothing and preparation</h2>
            <p>
              Conditions depend on region, elevation and the exact travel dates. Lower and southern areas can be hot, while mountain mornings and higher sections may feel cool, especially when wind or changing weather is involved. Ask for route-specific advice close to departure and keep a flexible layer system: sun protection, breathable riding clothes, an insulating layer and a light wind or rain shell may all be useful depending on the itinerary.
            </p>
            <p>
              Before travelling, build endurance with rides that resemble the planned duration and include some climbing and mixed surfaces if possible. Practise riding with the bags or hydration system you expect to use. Make sure your bike is serviced before the trip and that you are comfortable repairing common issues. A little rehearsal at home can make the first remote stage less stressful.
            </p>
            <p>
              Do not overlook recovery. Consecutive days of vibration and time in the saddle can be tiring even when the distance looks reasonable on paper. Comfortable contact points, food and fluid intake, sleep and a well-paced itinerary help make a multi-day ride more enjoyable.
            </p>
          </section>

          <section id="responsible-gravel">
            <h2>Ride responsibly through rural Morocco</h2>
            <p>
              Gravel routes often pass close to farms, homes and working rural tracks. Slow down near people and animals, give walkers space, close gates if the route asks you to, and avoid cutting new lines across fields or fragile ground. Keep noise low in villages, ask before taking identifiable photographs and follow a local guide's advice about access and etiquette.
            </p>
            <p>
              Pack out wrappers, tubes and other waste, and avoid leaving food scraps along the trail. Support local businesses when suitable, and remember that a track used for cycling may also be a practical route for residents. Good riding protects the landscape and helps keep cycling a welcome activity in the places we visit.
            </p>
          </section>

          <section id="gravel-checklist">
            <h2>Gravel trip checklist</h2>
            <p>Before confirming a route, use this list to make sure the main practical questions have been answered:</p>
            <ul className="article-checklist">
              <li><strong>Route:</strong> surface mix, distance, ascent, technical sections and expected riding time.</li>
              <li><strong>Bike:</strong> tyre clearance, gearing, brakes, luggage capacity and overall mechanical condition.</li>
              <li><strong>Supplies:</strong> water capacity, food stops, longest resupply gap and emergency provisions.</li>
              <li><strong>Support:</strong> guide, vehicle access, repair spares, communication and contingency procedures.</li>
              <li><strong>Trip details:</strong> accommodation, transfers, luggage, inclusions, group pace and cancellation terms.</li>
            </ul>
            <div className="article-tip"><strong>Before you book</strong><p>Send your expected dates, group size, riding experience, preferred daily distance and bike setup. Ask for the specific route information that is still unclear, especially surface details, resupply and support on remote stages.</p></div>
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
            <p>Use this guide as a starting point, then confirm the current route, surface, weather and logistical arrangements for your dates. Explore the <Link href="/cycling-trips/gravel">gravel cycling tours</Link> or <Link href="/contact?request=gravel-cycling-planning">ask us about planning your trip</Link>.</p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading">
            <div><p className="article-eyebrow">KEEP EXPLORING</p><h2>More guides for your Morocco cycling trip</h2></div>
            <Link className="article-text-link" href="/journal">View all Journal articles ↗</Link>
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
          <div><p className="article-eyebrow">YOUR NEXT GRAVEL ADVENTURE</p><h2>Ready to explore Morocco by gravel bike?</h2><p>Share your preferred dates, group size, riding experience and the kind of terrain you enjoy. The route, daily stages and support arrangements can then be discussed around your plans.</p></div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/cycling-trips/gravel">Explore Gravel Tours ↗</Link><Link className="article-button article-button-outline" href="/contact?request=gravel-cycling-planning">Plan Your Trip</Link></div>
        </div>
      </section>

      <footer className="article-site-footer">
        <div className="article-shell article-footer-grid">
          <div className="article-footer-brand">
            <Link href="/" className="article-brand"><img src="/images/logo-mountain-bike-morocco-footer.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link>
            <p>Guided mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover landscapes, trails and local culture at your own pace.</p>
          </div>
          <div><h3>Explore</h3><Link href="/cycling-trips">All Cycling Tours</Link><Link href="/cycling-trips/mtb">Mountain Bike Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil">Imlil Valley</Link><Link href="/destinations/toubkal">Mount Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let's Plan</h3><Link href="/about">About Us</Link><Link href="/events">Events</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="article-shell article-footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>

      <style>{`
        .gravel-cycling-morocco-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
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
        @media(prefers-reduced-motion:reduce){.gravel-cycling-morocco-article *,.gravel-cycling-morocco-article *:before,.gravel-cycling-morocco-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}