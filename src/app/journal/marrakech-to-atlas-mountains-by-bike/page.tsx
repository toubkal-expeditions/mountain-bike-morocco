import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marrakech to Atlas Mountains by Bike | Mountain Bike Morocco",
  description:
    "Plan a cycling journey from Marrakech towards Morocco's Atlas Mountains. Compare MTB, E-MTB, gravel and road options, understand transfers and terrain, and prepare for a route that matches your group.",
  alternates: { canonical: "/journal/marrakech-to-atlas-mountains-by-bike" },
  openGraph: {
    title: "Marrakech to Atlas Mountains by Bike",
    description:
      "A practical guide to combining Marrakech with Atlas Mountain cycling, including route styles, terrain, transfers, timing and trip preparation.",
    type: "article",
    images: ["/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"],
  },
};

const relatedArticles = [
  {
    category: "DESTINATION GUIDES",
    title: "Complete High Atlas Mountains Cycling Guide",
    text: "Understand the terrain, altitude, villages and logistics that shape a journey through the High Atlas.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/journal/complete-high-atlas-mountains-cycling-guide",
  },
  {
    category: "ROUTE INSPIRATION",
    title: "Best Cycling Routes From Marrakech",
    text: "Compare nearby foothills, mountain routes and ways to make Marrakech the starting point for a ride.",
    image: "/images/atlas-marrakech-cycling-tour.jpg",
    href: "/journal/best-cycling-routes-from-marrakech",
  },
  {
    category: "TRIP PLANNING",
    title: "Best Time to Visit Morocco for Cycling",
    text: "Choose travel dates based on region, elevation, riding style and the conditions you prefer.",
    image: "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    href: "/journal/best-time-visit-morocco-cycling",
  },
];

const faqs = [
  {
    question: "Can I cycle directly from Marrakech into the Atlas Mountains?",
    answer:
      "It depends on the route and the experience you want. Some trips begin with riding from the city outskirts, while others use a transfer to reach quieter roads or trailheads. A direct point-to-point ride may involve busy roads, elevation gain and a long day, so confirm the exact route, surface, traffic exposure and support before deciding.",
  },
  {
    question: "How many days should I allow for Marrakech and the Atlas Mountains?",
    answer:
      "A single day may work for a ride near the city or foothills. Two or more riding days allow more time to reach mountain valleys, vary the terrain and avoid rushing between places. The ideal duration depends on your preferred cycling style, available dates, group ability and whether you want to include rest or cultural time.",
  },
  {
    question: "Which bike is best for a Marrakech-to-Atlas cycling trip?",
    answer:
      "Choose the bike for the surface, not just the destination name. MTB is suitable for rough trails and technical sections; E-MTB can assist on climbs but still requires confident bike handling; gravel suits many mixed-surface routes; and a road bike fits paved routes selected around traffic, surface quality and climbing. Ask for a route description before choosing equipment.",
  },
  {
    question: "Is the route suitable for beginner cyclists?",
    answer:
      "Some rides around the foothills may suit newer riders, but longer climbs, rough surfaces, altitude and technical descents can make other options demanding. Share your usual distance, climbing experience and confidence on loose terrain so a route can be chosen around the least experienced rider in the group.",
  },
  {
    question: "What should I ask about transfers and luggage?",
    answer:
      "Confirm where the ride starts and finishes, whether transfers are included, how bikes and luggage are carried, and whether the support vehicle can access each section. Clarify the daily schedule, expected riding time, overnight arrangements and what happens if weather or route conditions require a change.",
  },
  {
    question: "When is the best time to cycle from Marrakech to the Atlas Mountains?",
    answer:
      "Conditions depend on elevation and the specific route. Lower areas can be warm while mountain mornings and higher passes may be much cooler. Spring and autumn are often considered for many cycling itineraries, but always confirm current weather, access and route suitability for your dates rather than relying on a general seasonal rule.",
  },
];

export default function MarrakechToAtlasMountainsByBikePage() {
  return (
    <main className="marrakech-atlas-cycling-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Marrakech to Atlas Mountains by Bike</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">ROUTE INSPIRATION · MARRAKECH · HIGH ATLAS</p>
          <h1>Marrakech to Atlas Mountains by Bike</h1>
          <p className="article-deck">
            Marrakech makes a practical starting point for a cycling holiday, but the journey towards the Atlas can take several forms: a day ride in the foothills, a transfer to a quieter starting point, or a multi-day route linking mountain valleys. The best plan balances the riding you want with realistic distances, the right surface, support and enough time to enjoy the places along the way.
          </p>
          <div className="article-meta"><span>6 MIN READ</span><span>ROUTE INSPIRATION · MOROCCO</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg" alt="Cycling journey from Marrakech towards the Atlas Mountains" fetchPriority="high" />
          <figcaption>A thoughtful route connects Marrakech with mountain landscapes without forcing too much into a single day.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#route-overview">Understand the journey</a>
          <a href="#choose-format">Choose your route format</a>
          <a href="#cycling-styles">Pick a cycling style</a>
          <a href="#route-planning">Build a practical route</a>
          <a href="#itinerary-ideas">Trip format ideas</a>
          <a href="#terrain-level">Terrain and riding level</a>
          <a href="#season-weather">Timing and conditions</a>
          <a href="#transfers-support">Transfers and support</a>
          <a href="#packing">What to bring</a>
          <a href="#responsible-riding">Ride responsibly</a>
          <a href="#before-booking">Before you book</a>
          <a href="#marrakech-atlas-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            A cycling trip from Marrakech to the Atlas Mountains is not one fixed route. The right itinerary depends on whether you want to ride every kilometre, use a transfer to reach quieter terrain, focus on mountain trails or combine riding with time in villages and valleys. Set the goal first, then choose the route, bike and daily effort that fit your group.
          </p>

          <section id="route-overview">
            <h2>Understand what “Marrakech to the Atlas” can mean</h2>
            <p>
              Marrakech sits close to a wide range of landscapes, but the experience changes as you move away from the city and towards the foothills and higher mountain areas. A short ride near Marrakech may suit a limited schedule, while a deeper journey into the High Atlas typically needs more time for transport, climbing, route choices and the practicalities of being away from the city.
            </p>
            <p>
              Some cyclists picture a continuous point-to-point journey. Others want Marrakech as a base, with a transfer to a trailhead or mountain village before riding. Neither format is automatically better: the decision depends on how much time you want on the bike, the roads or trails you want to ride, and whether the ride itself or seeing several places is the main priority.
            </p>
            <div className="article-tip"><strong>Decide what you want the journey to feel like</strong><p>If your priority is quiet mountain riding, a transfer may help avoid unappealing or busy connecting sections. If you want a continuous crossing, ask for a stage-by-stage description that makes the road surface, elevation, traffic exposure and daily distance clear.</p></div>
          </section>

          <section id="choose-format">
            <h2>Choose the route format that fits your trip</h2>
            <h3>Day ride from Marrakech</h3>
            <p>
              A day ride can work well if you have limited time or want to add cycling to a wider city stay. Discuss how long the transfer takes if one is needed, the actual time available for riding, and how much climbing or technical terrain is involved. A clear plan helps prevent the day from becoming mostly travel when your main goal is to ride.
            </p>
            <h3>Transfer to a mountain start point</h3>
            <p>
              Starting closer to the foothills or a selected valley can put more of the day's time into riding. Ask where the ride begins, whether the transfer is included, how bikes are transported and what time you are expected to return. These details are particularly useful if you are travelling with your own bike or a group with varied confidence levels.
            </p>
            <h3>Multi-day point-to-point journey</h3>
            <p>
              A multi-day trip can allow the landscape to change gradually, with riding stages and overnight stops chosen as a coherent route. It needs more planning around luggage, accommodation, meals, bike support and weather flexibility. Transfers between stages may still be useful, so clarify which days are riding days and which include vehicle travel.
            </p>
            <h3>Base-and-ride holiday</h3>
            <p>
              Staying in one or two bases can reduce the need to repack every day and gives you options to adjust rides around weather or energy levels. This works well when the group values a comfortable rhythm, local exploration and different rides from the same area rather than a continuous point-to-point itinerary.
            </p>
          </section>

          <section id="cycling-styles">
            <h2>Pick a cycling style for the terrain</h2>
            <h3>Mountain biking (MTB)</h3>
            <p>
              MTB is the natural option when the plan includes rough tracks, rocky trails, narrow paths or technical descents. Ask which parts are smooth, which are loose or exposed, and whether any sections may require walking the bike. A route that sounds short on paper can feel demanding when it includes sustained climbing or technical terrain.
            </p>
            <h3>Electric mountain biking (E-MTB)</h3>
            <p>
              E-MTB assistance can make climbs more manageable or help a mixed-ability group share an itinerary, but it does not remove the need for safe handling on descents. Battery range varies with elevation, surface, rider weight, assistance mode and temperature. Confirm bike sizes, charging options, battery arrangements and the plan if a mechanical issue occurs away from vehicle access.
            </p>
            <h3>Gravel cycling</h3>
            <p>
              Gravel can be a good fit for riders who like a mix of paved roads and rural tracks. The important detail is the actual surface: compact dirt, loose gravel, rocky tracks and sandy sections have different demands. Ask about tyre clearance, gearing, daily climbing, water access and whether any sections are rough enough to suit a different bike.
            </p>
            <h3>Road cycling</h3>
            <p>
              Road riders may prefer paved routes that focus on climbs, mountain views or quieter connecting roads. Clarify road conditions, traffic exposure, shoulder availability, total elevation and support arrangements. A scenic road itinerary should still account for the practicalities of traffic, weather, resupply and how riders are regrouped safely.
            </p>
            <p>
              A mixed cycling holiday is possible to discuss, but different bike types and route surfaces affect logistics. If some riders want MTB and others prefer road or gravel, ask whether separate routes or a shared base would make more sense than expecting everyone to follow the same line.
            </p>
          </section>

          <figure className="article-inline-image">
            <img src="/images/Explore-Atlas-Mountains-bike.jpg" alt="Cycling through the Atlas Mountain landscape near Marrakech" loading="lazy" />
            <figcaption>Use the route and its surface—not only the destination name—to choose the right bike and daily plan.</figcaption>
          </figure>

          <section id="route-planning">
            <h2>Build a practical route from city to mountains</h2>
            <p>
              Start with a map and a realistic sense of the group's ability, but do not plan from distance alone. The shortest line between two places may use busy roads or steep climbs that do not match the riding experience you want. Routes can be adjusted to prioritise riding quality, scenic stops, cultural visits, or a more continuous journey.
            </p>
            <h3>Confirm the stage details</h3>
            <ul className="article-checklist">
              <li><strong>Start and finish:</strong> confirm the actual meeting point, finish location and how riders return to accommodation.</li>
              <li><strong>Surface:</strong> identify paved road, compact gravel, loose stone, rural tracks and technical trail sections.</li>
              <li><strong>Climbing:</strong> ask about total ascent, the longest climb and any steep or exposed sections.</li>
              <li><strong>Time:</strong> distinguish riding hours from transfers, lunch stops, route briefings and cultural visits.</li>
              <li><strong>Resupply:</strong> understand where water and food can be obtained and what you must carry between stops.</li>
              <li><strong>Flexibility:</strong> ask what happens if weather, access or a rider's condition means the original plan needs to change.</li>
            </ul>
            <p>
              If a section connects the city with the mountains, ask specifically whether it will be ridden or covered by vehicle. A hybrid approach can make the trip more enjoyable by reserving riding time for the terrain that best suits your group, but the format should be clear before you book.
            </p>
          </section>

          <section id="itinerary-ideas">
            <h2>Trip format ideas to discuss</h2>
            <p>
              The following are planning frameworks, not fixed departures or guaranteed itineraries. Their suitability depends on your dates, ability, selected terrain and what is available when the trip is arranged.
            </p>
            <h3>One-day foothills ride</h3>
            <p>
              A compact option for riders who have a day to spare. Select a route based on time available, surface and elevation, and confirm how transfers affect the riding window. It may be preferable to spend more time on a well-chosen trail than to attempt a long city-to-mountain distance simply to say the journey was continuous.
            </p>
            <h3>Two- or three-day mountain escape</h3>
            <p>
              Several days allow for a wider choice of valleys and a more relaxed pace. Discuss whether you will stay in one base or move between overnight stops, how luggage is handled, and whether each day has a different technical or fitness demand. Leave room for recovery and time to experience the area beyond the trail.
            </p>
            <h3>Longer Atlas cycling holiday</h3>
            <p>
              A longer trip may link multiple mountain areas or combine different kinds of riding. The main challenge is balancing ambition and logistics: connecting regions can involve significant transfers, while remote routes need clear food, water and support plans. Keep the number of destinations realistic and protect time for the riding that matters most to you.
            </p>
            <div className="article-tip"><strong>Think in stages, not just endpoints</strong><p>Ask for each day’s start, finish, approximate riding distance, climbing, surface and support plan. This gives you a more useful picture of the trip than a headline saying it goes from Marrakech to the Atlas.</p></div>
          </section>

          <section id="terrain-level">
            <h2>Match terrain and effort to your riding level</h2>
            <p>
              The region offers varied cycling, from paved climbs and rolling foothill roads to rough tracks, rocky paths and technical singletrack. Your experience should guide the route, especially where descents are steep, loose or narrow. Be honest about the terrain you enjoy and the level of challenge you want; a good itinerary aims for rewarding riding rather than difficulty for its own sake.
            </p>
            <h3>Use your normal riding as a reference</h3>
            <p>
              Share the distance and elevation you regularly ride, how comfortable you are on gravel or loose rock, and whether you have experience with consecutive days. Fitness and technical skill are different: strong road fitness does not automatically mean a rider will enjoy a rocky MTB descent, while good trail skills do not necessarily prepare someone for long paved climbs.
            </p>
            <p>
              For mixed-ability groups, plan around the least experienced rider or discuss separate options where practical. Agree on regrouping points, pace expectations and the level of support available. If a ride includes sections that can be walked, confirm whether that is an accepted option rather than treating every obstacle as compulsory.
            </p>
          </section>

          <section id="season-weather">
            <h2>Plan timing around altitude and conditions</h2>
            <p>
              The weather can feel different between Marrakech, the foothills and higher mountain routes. Lower areas may be warm while mornings and exposed mountain sections are cooler; conditions at altitude can change quickly. The best period depends on the exact route and elevation, so check current forecasts and access conditions near departure rather than relying only on a general seasonal recommendation.
            </p>
            <h3>Prepare for a range of temperatures</h3>
            <p>
              Layers are useful when a ride begins early, climbs into cooler terrain or includes time off the bike at viewpoints and villages. During warm periods, begin with a sensible plan for water, sun protection and shade stops. If the route is exposed or remote, ask the organiser how the day will be adjusted during heat, wind or unexpected weather.
            </p>
            <p>
              Flexible planning matters if the trip includes higher passes, unpaved mountain tracks or several regions. Keep a clear understanding of the route alternatives and who makes decisions if the original stage is unsuitable on the day.
            </p>
          </section>

          <section id="transfers-support">
            <h2>Clarify transfers, luggage and mechanical support</h2>
            <p>
              Transport is part of the route design, not a minor detail. Ask whether airport or city transfers are included, where bikes are loaded and unloaded, how luggage moves between stops, and how much time each transfer takes. If you are bringing your own bike, confirm transport space, packing arrangements and whether you will have time to assemble and check it before riding.
            </p>
            <h3>Know what support can reach</h3>
            <p>
              A support vehicle can be helpful on accessible roads but may not be able to follow every trail. Confirm what tools and spares the guide carries, what you should bring personally, and what happens if a bike develops a problem in a remote section. Ask how the group handles a puncture, illness, route change or rider who needs to stop early.
            </p>
            <ul className="article-checklist">
              <li><strong>Bike setup:</strong> confirm frame sizes, pedals, helmet availability and any hire-bike conditions.</li>
              <li><strong>Luggage:</strong> ask about baggage limits, daypack needs and how luggage is transferred.</li>
              <li><strong>Accommodation:</strong> confirm the planned type, meal arrangements and whether rooms are shared or private.</li>
              <li><strong>Communication:</strong> agree on how the group stays together and what to do if separated.</li>
              <li><strong>Inclusions:</strong> request a written breakdown of guiding, transfers, meals, bikes and other services.</li>
            </ul>
          </section>

          <section id="packing">
            <h2>What to bring for the Marrakech-to-Atlas ride</h2>
            <p>
              Your packing list depends on the bike, length of trip, season and support level. For any ride, plan for basic personal comfort and the conditions expected along the route. Confirm in advance which equipment is provided and which items you must bring yourself.
            </p>
            <ul className="article-checklist">
              <li><strong>Riding essentials:</strong> a correctly fitted helmet, gloves, suitable shoes, eye protection and comfortable clothing.</li>
              <li><strong>Hydration and sun protection:</strong> enough capacity for the longest interval between water stops, plus sunscreen and sunglasses.</li>
              <li><strong>Layers:</strong> a light wind or rain layer and warmer clothing when the route reaches higher or cooler terrain.</li>
              <li><strong>Repair basics:</strong> tubes or repair equipment compatible with your bike, tyre levers and a pump or inflator, unless confirmed as part of the support kit.</li>
              <li><strong>Personal items:</strong> medication, a small first-aid item if needed, travel documents and cash for incidental purchases.</li>
              <li><strong>For multi-day trips:</strong> confirm luggage size, laundry options, charging needs for electronics and where you can refill water.</li>
            </ul>
            <p>
              Do not assume every remote stop has the same choice of equipment, food or services as a city. Request a route-specific packing list once the format and support arrangements are confirmed.
            </p>
          </section>

          <section id="responsible-riding">
            <h2>Ride responsibly through villages and mountain landscapes</h2>
            <p>
              Cycling near mountain communities means sharing roads and paths with people going about their daily lives, including walkers, animals and local traffic. Reduce speed through settlements, give others space, ask before photographing people and respect private property. Leave gates as you find them and avoid creating shortcuts that widen or damage trails.
            </p>
            <p>
              A thoughtful itinerary allows time to stop without putting pressure on the group to rush through a village or viewpoint. Supporting local services where appropriate and following the guide’s advice helps make the trip more respectful. Carry out waste, use refill options where available and follow local guidance for sensitive areas.
            </p>
            <p>
              The landscape is part of the reason to make this journey, but responsible riding also means understanding your limits. Choose a line that matches your skill, walk sections when appropriate and do not risk injury simply to keep up with another rider.
            </p>
          </section>

          <section id="before-booking">
            <h2>Before you book: a practical checklist</h2>
            <p>
              A clear enquiry helps the organiser suggest a route that suits your group. Share your intended dates, the number of riders, the cycling style you prefer, your usual level of fitness and technical confidence, and whether you want a continuous point-to-point trip or a base-and-ride format.
            </p>
            <ul className="article-checklist">
              <li>Ask for a stage-by-stage outline with distance, climbing, surface and approximate riding time.</li>
              <li>Clarify which sections are ridden and which are covered by transfer.</li>
              <li>Confirm route difficulty, group pace, support availability and possible alternatives.</li>
              <li>Check what is included in the price, including accommodation, meals, bikes, transfers and guiding.</li>
              <li>Discuss weather, access and cancellation or itinerary-change arrangements before making non-refundable bookings.</li>
              <li>Confirm equipment, luggage handling, water access and any dietary or accommodation requirements.</li>
            </ul>
            <p>
              An itinerary should make the experience and its practical demands understandable before you commit. If anything is unclear, ask for clarification rather than assuming a service or route feature is included.
            </p>
          </section>

          <section id="marrakech-atlas-faq" className="article-faq">
            <h2>Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>Make Marrakech the start of a better mountain ride</strong>
            <p>Tell us how you want to ride, how many days you have and which landscapes interest you most. <Link href="/contact">Contact Mountain Bike Morocco</Link> to discuss route formats, transfers and the practical details to confirm for your dates.</p>
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
            <h2>Start in Marrakech. Find your route into the mountains.</h2>
            <p>Share your dates, riding level, preferred cycling style and trip length. We can discuss the route format, transfers, terrain and support that need to be confirmed for your journey.</p>
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
        <div className="article-shell article-footer-bottom"><span>© {new Date().getFullYear()} Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>

      <style>{`
        .marrakech-atlas-cycling-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
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
        @media(prefers-reduced-motion:reduce){.marrakech-atlas-cycling-article *,.marrakech-atlas-cycling-article *:before,.marrakech-atlas-cycling-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
