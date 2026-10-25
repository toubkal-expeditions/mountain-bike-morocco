import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spring Cycling in Morocco: March–May | Mountain Bike Morocco",
  description:
    "Plan spring cycling in Morocco from March to May with regional guidance for the High Atlas, Marrakech, Agafay, southern routes and the Atlantic Coast, plus practical advice for MTB, E-MTB, gravel and road cycling.",
  alternates: { canonical: "/journal/spring-cycling-morocco-march-may" },
  openGraph: {
    title: "Spring Cycling in Morocco: March–May",
    description:
      "A practical spring cycling guide to Morocco, covering changing mountain conditions, warmer lowlands, route choice, equipment and planning a ride that suits your group.",
    type: "article",
    images: ["/images/atlas-valley-cycling-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "TRIP PLANNING",
    title: "Best Time to Visit Morocco for Cycling",
    text: "Compare seasons and regions to choose dates that suit your preferred route and riding style.",
    image: "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    href: "/journal/best-time-visit-morocco-cycling",
  },
  {
    category: "DESTINATION GUIDES",
    title: "Complete High Atlas Mountains Cycling Guide",
    text: "Understand terrain, altitude, village routes and the practical details behind an Atlas cycling holiday.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/journal/complete-high-atlas-mountains-cycling-guide",
  },
  {
    category: "SEASONAL CYCLING",
    title: "Cycling Morocco in October",
    text: "Explore the conditions that can shape an autumn ride across mountain, desert and coastal regions.",
    image: "/images/Explore-Atlas-Mountains-bike.jpg",
    href: "/journal/cycling-morocco-october",
  },
];

const faqs = [
  {
    question: "Is March a good month for cycling in Morocco?",
    answer:
      "March can work well for some lower and mid-altitude routes, but higher Atlas areas may still be cold, snowy or affected by recent weather. Choose the region and daily route carefully, check conditions close to departure and keep a lower-altitude alternative available if mountain access changes.",
  },
  {
    question: "Is April the best spring month for cycling?",
    answer:
      "April is a useful month to investigate for many itineraries, but it is not automatically best for every route. Altitude, recent rain, trail surface, wind and the type of cycling all matter. Ask for a route-specific view of likely conditions rather than choosing only by month.",
  },
  {
    question: "Is May too hot for cycling in Morocco?",
    answer:
      "May can be comfortable in some mountain and coastal settings while lower inland and southern areas may become quite warm, particularly later in the day. An early start, shade and water plan, realistic distance and an understanding of exposed sections are important. Conditions vary by location and year.",
  },
  {
    question: "Can I ride the High Atlas in spring?",
    answer:
      "Many lower and mid-altitude routes may be options in spring, while high passes and exposed trails can remain cold or affected by snow and weather. Confirm the intended route, elevation and access shortly before travelling. Be prepared to adjust the plan if conditions make a section unsuitable.",
  },
  {
    question: "Which cycling style is best in spring?",
    answer:
      "All four styles can be suitable when the actual route and conditions are matched to the rider. MTB suits trails, E-MTB can assist on climbs, gravel connects mixed-surface tracks and road cycling suits paved routes and passes. Surface, altitude, wind, fitness and bike setup matter more than the label alone.",
  },
  {
    question: "What should I pack for a spring cycling holiday in Morocco?",
    answer:
      "Pack a helmet, gloves, eyewear, sun protection, hydration capacity and riding clothing, plus layers for cool mornings and higher elevations. A light wind or waterproof layer may be useful. Confirm the route, expected temperatures, available support, bike arrangements and water stops before finalising your kit.",
  },
];

export default function SpringCyclingMoroccoMarchMayPage() {
  return (
    <main className="spring-cycling-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Spring Cycling in Morocco: March–May</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">SEASONAL CYCLING · SPRING CONDITIONS · MOROCCO</p>
          <h1>Spring Cycling in Morocco: March–May</h1>
          <p className="article-deck">
            Spring gives cyclists several ways to experience Morocco, from mountain valleys waking up after winter to open tracks near Marrakech and longer journeys farther south. Conditions can change sharply with altitude and region, so the most useful plan is built around a specific route, current weather and the style of riding you enjoy.
          </p>
          <div className="article-meta"><span>8 MIN READ</span><span>SEASONAL CYCLING · MOROCCO</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/atlas-valley-cycling-morocco.jpg" alt="Cycling route through an Atlas Mountain valley in spring" fetchPriority="high" />
          <figcaption>Plan for spring's changing temperatures across valleys, plateaus and mountain routes.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#spring-overview">What spring is like</a>
          <a href="#march-cycling">Cycling in March</a>
          <a href="#april-cycling">Cycling in April</a>
          <a href="#may-cycling">Cycling in May</a>
          <a href="#spring-regions">Choose a region</a>
          <a href="#spring-styles">Choose your cycling style</a>
          <a href="#spring-planning">Plan your spring ride</a>
          <a href="#spring-kit">What to pack</a>
          <a href="#spring-checklist">Before you book</a>
          <a href="#spring-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            March, April and May are not one uniform riding season. A warm afternoon in a lower valley can coincide with a cold mountain start, and a route that looks straightforward on a map may be affected by recent rain, loose surfaces or access conditions. Treat the month as a starting point, then plan around the exact region and elevation you want to ride.
          </p>

          <section id="spring-overview">
            <h2>What is spring cycling like in Morocco?</h2>
            <p>
              Spring can bring a broad range of cycling experiences within the same trip. The High Atlas has substantial differences between lower valleys and higher passes; Marrakech and the Agafay area are generally lower and more exposed; southern routes can warm quickly; and the Atlantic Coast may feel cooler or windier than inland destinations. Recent weather can change trail surfaces and mountain access, so local, route-specific information is essential.
            </p>
            <p>
              For riders, the main advantage of spring is flexibility: a trip may combine mountain days, rural tracks and lower-altitude rides. The main planning challenge is managing transitions between those environments. Build an itinerary with realistic distances, time to transfer between regions and alternatives if a trail or pass is unsuitable on the day.
            </p>
            <div className="article-tip"><strong>Plan around the route, not the calendar alone</strong><p>Ask about current trail or road access, elevation, surface, the forecast and the plan for changing conditions. A month can guide the conversation, but it cannot guarantee the weather or availability of a particular route.</p></div>
          </section>

          <section id="march-cycling">
            <h2>Cycling in March: keep altitude and access flexible</h2>
            <p>
              March is an early-spring transition. Lower and mid-altitude routes may offer riding opportunities, but the High Atlas can still have cold mornings, snow or weather-affected access at higher elevations. Even when a route is open, shaded trails, exposed passes and long descents can feel much colder than the start point in Marrakech or a valley town.
            </p>
            <h3>Choose sensible alternatives</h3>
            <p>
              If mountain access is a priority, discuss more than one route with your organiser. Ask which sections are usually most sensitive to cold or recent precipitation, what the plan is if a high route is unsuitable and whether a lower-altitude day can preserve the character of the trip. A flexible plan is more useful than committing to a difficult pass solely because it appears on an itinerary.
            </p>
            <p>
              For MTB and gravel, recent rain can affect grip, drainage and the condition of unpaved tracks. Road riders should check the intended climb, road conditions and any exposed sections. E-MTB riders should also consider that cool temperatures, climbing and assistance level can influence expected battery range.
            </p>
          </section>

          <section id="april-cycling">
            <h2>Cycling in April: a useful month to compare route options</h2>
            <p>
              April can be a practical period to investigate a spring cycling holiday, particularly when the itinerary can move between regions and elevations. Mountain valleys may feel milder while higher routes can remain changeable. Lower inland areas may be pleasant for riding, but exposed tracks can still be demanding in sun or wind, and conditions should be confirmed for your dates.
            </p>
            <h3>Balance mountain rides with recovery and transfers</h3>
            <p>
              A multi-day trip might link Atlas foothills, village valleys or lower landscapes, but transfer time and climbing can make the schedule more demanding than daily kilometres suggest. Make sure ride days leave enough time for meals, stops and recovery. If the route includes a high pass or remote track, agree on what would trigger a change of plan.
            </p>
            <p>
              April is also a good prompt to clarify bike suitability. Ask whether the route is predominantly paved, compact gravel, loose rock or technical trail, and whether your tyres, gearing, brakes and suspension are appropriate. The right setup should be based on the actual planned surface, not only on the name of the destination.
            </p>
          </section>

          <section id="may-cycling">
            <h2>Cycling in May: pay attention to heat in lower regions</h2>
            <p>
              As spring progresses, lower inland and southern areas can become warmer, especially later in the day. Mountain and coastal conditions may differ, and higher elevations can still have cool starts or changing weather. An itinerary that works well in one region may require a different start time, distance or support plan in another.
            </p>
            <h3>Time the ride and manage exposure</h3>
            <p>
              Ask how much of the route is exposed, where reliable water refills are available and whether early departures are appropriate. Open plateaus and remote tracks can offer little shade, so hydration capacity and realistic pacing matter. For longer stages, confirm the support arrangements and what happens if a rider needs to shorten the route or stop early.
            </p>
            <p>
              In May, it may be sensible to compare mountain or coastal options with lower southern routes rather than assuming one region is always preferable. The final choice should reflect current temperatures, wind, elevation, the riders' experience and the activities you most want from the trip.
            </p>
          </section>

          <section id="spring-regions">
            <h2>Where to cycle in Morocco during spring</h2>
            <h3>High Atlas Mountains</h3>
            <p>
              The High Atlas offers mountain scenery, village valleys, steep climbs, rocky trails and mixed-surface tracks. Spring routes need careful consideration of altitude, cold mornings, recent weather and access to higher sections. Discuss the precise route and a lower alternative, especially if your plan depends on a pass, exposed descent or a remote trail.
            </p>
            <h3>Marrakech and the Agafay Desert</h3>
            <p>
              The landscapes around Marrakech and Agafay can be useful options when a shorter ride or lower-altitude alternative fits the trip. Terrain can be rocky, dry and exposed, so surface, wind, water access and start time remain important. Ask whether the route suits MTB, E-MTB or gravel and how much rough ground is involved.
            </p>
            <h3>Southern Morocco and desert routes</h3>
            <p>
              Southern routes may offer wide valleys, rocky plateaus and longer journeys between settlements. Logistics deserve particular attention: confirm food and water, luggage, overnight stops, vehicle or guide support and the distance between services. Warmer weather later in spring may influence daily timing and how much exposed riding is sensible.
            </p>
            <h3>Atlantic Coast</h3>
            <p>
              Coastal riding can offer rural roads, ocean views and mixed-surface routes, but wind may shape effort and comfort. Road cyclists should clarify traffic and road surface, while gravel riders should check the amount of loose or sandy ground. The coast can be a good contrast to mountain riding when transfer time and route connections are planned realistically.
            </p>
          </section>

          <section id="spring-styles">
            <h2>Choose the right cycling style for spring</h2>
            <h3>Mountain biking (MTB)</h3>
            <p>
              MTB suits riders who want trails, rough tracks and descents, but spring surface conditions can change after rain and higher routes may be affected by weather. Ask for the technical level, loose or exposed sections, daily climbing and any hike-a-bike. Be clear about the trail features you are comfortable riding.
            </p>
            <h3>Electric mountain biking (E-MTB)</h3>
            <p>
              E-MTB can help some riders manage long climbs, although range varies with elevation gain, battery capacity, assistance mode, temperature and rider setup. Confirm the likely distance, charging plan, battery support and the availability of suitable bikes and sizes before travelling. Routes should still be matched to handling ability and conditions.
            </p>
            <h3>Gravel cycling</h3>
            <p>
              Gravel can connect valleys, rural tracks and quieter roads. The term covers a wide range of surfaces, from smooth compact dirt to rough stone or sand. Ask for a surface breakdown, elevation profile, tyre and gearing recommendations, water points and whether the itinerary includes sections that may be slow after recent rain.
            </p>
            <h3>Road cycling</h3>
            <p>
              Road cycling can be a good fit for mountain climbs, paved passes and longer rural routes. Spring conditions still vary with elevation and wind, so review road surface, traffic, daily climbing, daylight and support. If the route reaches high passes, ask what alternatives are available if weather or access is unsuitable.
            </p>
          </section>

          <section id="spring-planning">
            <h2>How to plan a spring cycling holiday</h2>
            <p>
              Begin with your travel dates, preferred region and the type of riding you enjoy most. Then discuss the intended route, daily distance, elevation, surface, transfer times, accommodation and support. If you are visiting multiple regions, allow enough time for road transfers and recovery rather than trying to cover too much of the country in a short stay.
            </p>
            <div className="article-tip"><strong>Questions worth confirming before departure</strong><p>What are current route conditions? Which elevations are planned? Is there a lower route if weather changes? How much water can riders carry? What equipment and spares are provided? How are transfers and luggage handled? What is the plan if a stage needs to be shortened?</p></div>
            <p>
              Groups with mixed fitness or technical ability should discuss alternatives in advance. A route that is rewarding for an experienced rider can feel too demanding for another member of the group. Agree on an achievable pace and make sure the itinerary balances riding with time to rest and enjoy the places along the way.
            </p>
          </section>

          <section id="spring-kit">
            <h2>What to pack for spring cycling in Morocco</h2>
            <p>
              Spring packing should reflect both warm riding and the possibility of cold starts, wind or changing mountain weather. Confirm the actual route and support arrangements before buying or packing extra equipment.
            </p>
            <ul className="article-checklist">
              <li><strong>Riding basics:</strong> a correctly fitted helmet, gloves, eyewear, suitable shoes, comfortable kit and sun protection.</li>
              <li><strong>Layers:</strong> a light windproof or waterproof layer and warmer clothing for early starts or higher elevations.</li>
              <li><strong>Hydration:</strong> enough capacity for the planned stage, plus a clear understanding of refill points and any remote sections.</li>
              <li><strong>Bike setup:</strong> tyres, gearing and brakes suited to the route surface, with clarity about tools, spares and mechanical support.</li>
              <li><strong>Personal essentials:</strong> any medication you need, a small first-aid item for personal use and a secure way to carry phone and identification.</li>
            </ul>
          </section>

          <section id="spring-checklist">
            <h2>Before you book: spring cycling checklist</h2>
            <ul className="article-checklist">
              <li><strong>Dates and region:</strong> share the dates and the areas you most want to ride.</li>
              <li><strong>Riding level:</strong> describe your current riding, fitness, technical confidence and preferred daily distance.</li>
              <li><strong>Route conditions:</strong> ask about current access, recent weather, altitude and alternative routes.</li>
              <li><strong>Equipment:</strong> confirm bike availability, sizes, helmet arrangements, spares and what you should bring.</li>
              <li><strong>Logistics:</strong> clarify transfers, meals, accommodation, water access, luggage and support on remote stages.</li>
            </ul>
            <p>
              Seasonal guides provide a starting point, not a live trail report or weather guarantee. Confirm conditions close to departure and stay flexible if the safest or most enjoyable route changes.
            </p>
          </section>

          <section id="spring-faq" className="article-faq">
            <h2>Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>Build your spring ride around the conditions on the ground</strong>
            <p>Whether you want Atlas trails, gravel tracks, road climbs or an E-MTB adventure, choose a route that fits your ability and the expected conditions. <Link href="/contact">Share your dates and riding preferences with Mountain Bike Morocco</Link> to discuss practical options for your trip.</p>
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
            <h2>Make the most of Morocco's spring riding season.</h2>
            <p>Tell us when you plan to travel, your preferred cycling style and which regions interest you. We can discuss route options and the practical details to confirm for your dates.</p>
          </div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/contact">Plan your trip ↗</Link><Link className="article-button article-button-outline" href="/destinations">Explore destinations</Link></div>
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
        .spring-cycling-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
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
        .article-author-note{padding:22px 24px;background:#fff;border:1px solid #e0ddd6}.article-author-note strong{display:block;color:#24221e;margin-bottom:6px}.article-author-note p{margin:0;font-size:14px}.article-author-note a{color:#bd542f;text-decoration:underline;text-underline-offset:3px}
        .article-related{padding:76px 0 86px;background:#f0eee8}.article-section-heading{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:30px}.article-section-heading h2{font-size:clamp(30px,4vw,45px);line-height:1.1;letter-spacing:-.04em;margin:0}.article-text-link{font-size:13px;font-weight:800;text-decoration:none;color:#bd542f}.article-text-link:hover{text-decoration:underline}
        .article-related-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}.article-related-card{background:#fff;border:1px solid #e0ddd6;min-width:0}.article-related-image{display:block;overflow:hidden}.article-related-image img{display:block;width:100%;height:220px;object-fit:cover;transition:transform .3s ease}.article-related-image:hover img{transform:scale(1.03)}.article-related-content{padding:22px}.article-related-content .article-eyebrow{font-size:9px;margin-bottom:10px}.article-related-content h3{font-size:21px;line-height:1.2;margin:0 0 10px;letter-spacing:-.02em}.article-related-content h3 a{color:inherit;text-decoration:none}.article-related-content h3 a:hover{color:#bd542f}.article-related-content>p:not(.article-eyebrow){color:#68645d;font-size:13px;line-height:1.7;margin:0 0 17px}
        .article-cta{padding:65px 0;background:#23231f;color:#fff}.article-cta-inner{display:flex;justify-content:space-between;align-items:center;gap:35px}.article-cta .article-eyebrow{color:#f18b60}.article-cta h2{font-size:clamp(32px,4vw,48px);line-height:1.05;letter-spacing:-.04em;max-width:600px;margin:0 0 14px}.article-cta-inner>div:first-child>p:last-child{max-width:650px;color:#d1cdc5;margin:0;line-height:1.8}.article-cta-actions{display:flex;flex-wrap:wrap;gap:12px;flex-shrink:0}.article-button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 17px;font-size:12px;font-weight:800;text-decoration:none;transition:background .2s ease,color .2s ease}.article-button-light{background:#e7663b;color:#fff}.article-button-light:hover{background:#d6522a}.article-button-outline{border:1px solid #8f8b82;color:#fff}.article-button-outline:hover{background:#fff;color:#24221e}
        .article-site-footer{background:#181815;color:#fff;padding-top:55px}.article-footer-grid{display:grid;grid-template-columns:1.4fr repeat(3,minmax(0,1fr));gap:40px;padding-bottom:45px}.article-footer-grid>div{display:flex;flex-direction:column;align-items:flex-start;gap:11px}.article-footer-grid h3{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:#e98258;margin:0 0 7px}.article-footer-grid a:not(.article-brand){color:#d1cec7;font-size:13px;text-decoration:none}.article-footer-grid a:not(.article-brand):hover{color:#fff}.article-brand{display:flex;flex-direction:column;gap:12px;text-decoration:none;color:#fff;font-size:13px;font-weight:800;letter-spacing:.07em}.article-brand img{width:185px;max-height:60px;object-fit:contain;object-position:left center}.article-brand em{font-style:normal;color:#e98258;margin-left:5px}.article-footer-brand p{max-width:290px;font-size:13px;line-height:1.8;color:#aaa69d;margin:6px 0 0}.article-footer-bottom{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:1px solid #393832;padding-top:18px;padding-bottom:20px;color:#a9a59d;font-size:11px}.article-footer-bottom a{color:inherit;text-decoration:none}.article-footer-bottom a:hover{color:#fff}
        @media(max-width:900px){.article-hero{grid-template-columns:1fr;gap:28px;padding-top:22px}.article-hero h1{max-width:850px}.article-hero-image img{height:clamp(290px,58vw,480px)}.article-main-grid{grid-template-columns:1fr;padding-top:0}.article-toc{position:static;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 18px}.article-toc p{grid-column:1/-1}.article-related-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.article-cta-inner{align-items:flex-start;flex-direction:column}.article-footer-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:32px 22px}.article-footer-brand{grid-column:1/-1}}
        @media(max-width:560px){.article-shell{width:calc(100% - 34px)}.article-hero{padding-top:20px;padding-bottom:40px}.article-hero h1{font-size:43px}.article-deck{font-size:16px}.article-main-grid{padding-bottom:58px}.article-body{font-size:15px}.article-body .article-lead{font-size:18px}.article-toc{padding:16px;grid-template-columns:1fr 1fr}.article-related{padding:54px 0}.article-section-heading{align-items:flex-start;flex-direction:column;gap:15px}.article-related-grid{grid-template-columns:1fr}.article-related-image img{height:235px}.article-cta{padding:50px 0}.article-cta-actions{width:100%;flex-direction:column}.article-button{width:100%}.article-footer-grid{grid-template-columns:1fr 1fr;gap:28px 16px}.article-brand img{width:155px}.article-footer-grid>div{min-width:0}.article-footer-grid a:not(.article-brand){font-size:12px}.article-footer-bottom{flex-direction:column;gap:7px}}
        @media(prefers-reduced-motion:reduce){.spring-cycling-article *,.spring-cycling-article *:before,.spring-cycling-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
