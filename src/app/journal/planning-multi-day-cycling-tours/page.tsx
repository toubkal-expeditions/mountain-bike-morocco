import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Multi-Day Cycling Tours Planning | Mountain Bike Morocco",
  description:
    "Plan a multi-day cycling tour in Morocco with practical guidance on stages, daily distance, climbing, recovery, accommodation, luggage, bike support and choosing an itinerary that fits your group.",
  alternates: { canonical: "/journal/planning-multi-day-cycling-tours" },
  openGraph: {
    title: "Multi-Day Cycling Tours Planning",
    description:
      "A practical guide to planning a multi-day cycling holiday in Morocco, from stage design and recovery to transfers, accommodation and support.",
    type: "article",
    images: ["/images/group-adventure-cycling-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "TRIP PLANNING",
    title: "Best Time to Visit Morocco for Cycling",
    text: "Compare seasons and regions before choosing travel dates for your cycling holiday.",
    image: "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    href: "/journal/best-time-visit-morocco-cycling",
  },
  {
    category: "DESTINATION GUIDES",
    title: "Complete High Atlas Mountains Cycling Guide",
    text: "Learn how elevation, villages, terrain and transfers shape a journey through the High Atlas.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/journal/complete-high-atlas-mountains-cycling-guide",
  },
  {
    category: "SEASONAL CYCLING",
    title: "Cycling Morocco in October",
    text: "Use region-specific advice to assess an autumn itinerary across mountains, desert and coast.",
    image: "/images/Explore-Atlas-Mountains-bike.jpg",
    href: "/journal/cycling-morocco-october",
  },
];

const faqs = [
  {
    question: "How many days should I plan for a cycling tour in Morocco?",
    answer:
      "The right length depends on your available time, chosen region, riding style and how much ground you hope to cover. A short trip can focus on one area, while a longer holiday can include rest days or connect multiple regions. Include transfer time as well as riding days when comparing itineraries.",
  },
  {
    question: "How far should we ride each day?",
    answer:
      "Distance alone is not a reliable measure of difficulty. Climbing, surface, altitude, technical terrain, temperature and time spent off the bike all affect the day. Share the distance and elevation you normally ride, then discuss realistic stages that leave time for meals, stops and recovery.",
  },
  {
    question: "Should a multi-day cycling trip include rest days?",
    answer:
      "Rest or lighter days can be useful, especially on trips with repeated climbs, technical trails, long road stages or transfers between regions. The decision depends on fitness, trip length and personal priorities. A well-planned itinerary does not need every day to be the hardest day.",
  },
  {
    question: "Can one itinerary include MTB, E-MTB, gravel and road cycling?",
    answer:
      "A trip may combine different riding styles, but each change brings practical considerations around bike setup, terrain, transfers and group ability. If riders have different preferences, discuss the options before booking so the daily plan can be made coherent and safe rather than assuming all routes suit every bike.",
  },
  {
    question: "What should I confirm about accommodation and meals?",
    answer:
      "Ask for the proposed accommodation type, room arrangements, meal inclusions, drinking-water plan, dietary requirements and approximate arrival times. Standards and availability can vary by region, especially on remote routes, so clarify what is confirmed and where options are more limited.",
  },
  {
    question: "How are luggage and mechanical support handled?",
    answer:
      "Arrangements depend on the trip. Confirm whether luggage transfers are included, what bags you should use, what tools and spares accompany the ride, how mechanical problems are handled and whether a support vehicle can access each stage. Remote trails may not be accessible to a vehicle at every point.",
  },
];

export default function MultiDayCyclingToursPlanningPage() {
  return (
    <main className="multi-day-cycling-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Multi-Day Cycling Tours Planning</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">TRIP PLANNING · MULTI-DAY CYCLING · MOROCCO</p>
          <h1>Multi-Day Cycling Tours Planning</h1>
          <p className="article-deck">
            A rewarding cycling holiday is about more than linking rides on a calendar. Daily distance, climbing, terrain, recovery, accommodation, transfers and support all influence how a trip feels from one day to the next. Plan the whole journey—not just the kilometres—and choose stages that match the riders travelling together.
          </p>
          <div className="article-meta"><span>7 MIN READ</span><span>TRIP PLANNING · MOROCCO</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/group-adventure-cycling-morocco.jpg" alt="Cyclists preparing for a multi-day cycling journey in Morocco" fetchPriority="high" />
          <figcaption>A realistic itinerary balances riding, transfers, recovery and time to experience each region.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#planning-overview">Start with the whole journey</a>
          <a href="#trip-length">Choose trip length and regions</a>
          <a href="#daily-stages">Build realistic daily stages</a>
          <a href="#pace-recovery">Pace and recovery</a>
          <a href="#cycling-style">Match the cycling style</a>
          <a href="#logistics">Accommodation, meals and transfers</a>
          <a href="#support">Luggage and mechanical support</a>
          <a href="#group">Plan for the whole group</a>
          <a href="#packing">What to pack</a>
          <a href="#booking-checklist">Before you book</a>
          <a href="#planning-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            A strong multi-day plan balances riding with the practical details between stages. Distance, accumulated climbing, surface, weather, transfers and group experience all affect how demanding a trip will feel. Several moderate days in a row can be harder than one longer ride if recovery and logistics have not been planned well.
          </p>

          <section id="planning-overview">
            <h2>Start by planning the whole journey</h2>
            <p>
              Begin with the experience you want rather than a list of destinations. Some riders want a mountain-bike holiday centred on technical trails and descents; others prefer gravel exploration, road climbs, electric-assisted mountain routes or a mixed cycling journey. Your chosen style helps determine the regions, surfaces, daily effort and support that make sense.
            </p>
            <p>
              Next, consider how much time you have and what you would like to see between rides. Morocco's regions offer very different landscapes, but travelling between them can take a meaningful part of a day. Trying to add too many places may reduce time on the bike and leave little room for rest, unexpected delays or cultural stops.
            </p>
            <div className="article-tip"><strong>Design the itinerary around the riders and the route</strong><p>Tell your organiser how you usually ride, the terrain you enjoy, the daily distance you are comfortable with and how much time you want for exploring off the bike. These details are more useful than choosing a tour only by its total kilometres.</p></div>
          </section>

          <section id="trip-length">
            <h2>Choose the right trip length and number of regions</h2>
            <p>
              A shorter multi-day trip can be built around one main area, such as the Atlas foothills or valleys reached from Marrakech. Staying in a more compact region can reduce transfers and give you time to understand the terrain. A longer holiday may connect mountain areas with southern landscapes or the Atlantic Coast, provided there is enough time to move between them without rushing.
            </p>
            <h3>Keep transfers visible in the schedule</h3>
            <p>
              A transfer day is not automatically a rest day. Packing bikes, loading luggage, travelling across the country, checking in and preparing for the next stage can all take energy. Make sure the itinerary clearly identifies riding time, transfer time and any scheduled activities instead of treating every calendar day as equivalent.
            </p>
            <p>
              It can also help to plan a base-and-ride holiday rather than moving accommodation every night. The best structure depends on where the trails or roads are, what support is available and whether the group values variety or a slower rhythm.
            </p>
          </section>

          <section id="daily-stages">
            <h2>Build realistic daily stages</h2>
            <p>
              Daily distance is only one part of the workload. A paved road stage, a gravel day on rough tracks and a technical MTB route can feel very different at the same number of kilometres. Elevation gain, altitude, loose surfaces, weather, navigation and the amount of time spent pushing or walking the bike should all be part of stage planning.
            </p>
            <h3>Use more than one measure of difficulty</h3>
            <ul className="article-checklist">
              <li><strong>Distance:</strong> how far you will travel under your own power, not including vehicle transfers.</li>
              <li><strong>Elevation:</strong> total climbing and the length or steepness of major ascents.</li>
              <li><strong>Surface:</strong> paved road, compact gravel, loose stone, sand, rocky trail or mixed terrain.</li>
              <li><strong>Technical level:</strong> braking, cornering, exposure, obstacles and confidence required on descents.</li>
              <li><strong>Time:</strong> likely hours in the saddle, breaks, food stops and daylight available.</li>
            </ul>
            <p>
              Ask for an honest description of the most challenging part of each day. If one section is substantially harder than the rest, knowing that in advance lets you assess whether it suits the group and discuss an alternative if necessary.
            </p>
          </section>

          <section id="pace-recovery">
            <h2>Plan pace, recovery and lighter days</h2>
            <p>
              The first day should not set a pace that becomes difficult to sustain for the rest of the trip. When a journey includes multiple climbs, rough trails or consecutive long stages, fatigue can affect handling, concentration and enjoyment. A lighter day, shorter loop or scheduled rest day may help keep the overall experience enjoyable.
            </p>
            <h3>Give the itinerary room to breathe</h3>
            <p>
              Build in time for breakfast, bike checks, stops to take in the scenery, lunch, arrivals and basic preparation for the following day. Remote regions may bring delays or changes in conditions, so a schedule with no margin can become stressful quickly. If the trip includes both riding and cultural visits, agree on which activities are priorities and which can be flexible.
            </p>
            <p>
              Share any concerns about fitness, recent riding volume, altitude or recovery needs when planning. This is especially important when the group includes riders with different experience levels or people returning to cycling after a break.
            </p>
          </section>

          <section id="cycling-style">
            <h2>Match the route to the cycling style</h2>
            <h3>Mountain biking (MTB)</h3>
            <p>
              MTB itineraries may use village tracks, rocky traverses, technical singletrack and long descents. Difficulty can vary sharply between stages, so clarify the expected handling skills, trail exposure, hike-a-bike sections and available alternatives. Suspension, tyre choice and reliable braking matter on rough terrain.
            </p>
            <h3>Electric mountain biking (E-MTB)</h3>
            <p>
              E-MTB can assist on climbs and help riders manage a longer route, but the plan needs to account for battery capacity, elevation gain, assistance settings and charging opportunities. Confirm that bikes, frame sizes, chargers and any spare batteries or support arrangements are available for the specific trip.
            </p>
            <h3>Gravel cycling</h3>
            <p>
              Gravel tours often combine quiet paved roads with dirt tracks and rougher rural surfaces. Ask for a surface breakdown, tyre recommendations, gearing, distance between water points and whether any sandy or rocky stretches may slow progress. A route described as gravel can still be demanding if the surface is rough or the climbing is sustained.
            </p>
            <h3>Road cycling</h3>
            <p>
              Road itineraries are shaped by distance, climbing, road surface, traffic and the location of support or resupply. Several consecutive mountain-pass days can accumulate fatigue even when the mileage appears manageable. Confirm daily elevation, departure times, water and food stops, vehicle support and any transfer sections.
            </p>
            <p>
              Mixed-style holidays are possible to discuss, but they should be planned deliberately. Switching between bikes or riding surfaces can affect equipment, luggage and group rhythm; do not assume every route is equally suitable for every discipline.
            </p>
          </section>

          <section id="logistics">
            <h2>Accommodation, meals and transfers matter</h2>
            <p>
              Overnight arrangements influence both comfort and the shape of each day. Ask what type of accommodation is planned, whether rooms are shared or private, what meals are included and when the group is likely to arrive. Facilities and choice can vary by region, especially on remote routes, so make sure expectations are clear before confirming.
            </p>
            <h3>Consider the spaces between stages</h3>
            <p>
              Check how the group gets to the start of each ride and back to the accommodation, whether luggage is transferred separately and whether bike cases can be stored securely. If a route crosses large distances, clarify what the transfer involves and whether there are stops for food, water or sightseeing.
            </p>
            <p>
              Share dietary needs, accessibility considerations and accommodation preferences early. The sooner these are understood, the easier it is to see whether the proposed route and overnight stops meet the group's needs. Ask for inclusions and exclusions in writing so you can compare options accurately.
            </p>
          </section>

          <section id="support">
            <h2>Clarify luggage, mechanical support and safety</h2>
            <p>
              Support may range from a guide carrying basic tools to a vehicle following accessible road stages. A support vehicle cannot necessarily reach every trail, so ask how mechanical problems, route changes and rider fatigue are handled in remote terrain. Understand what support is included rather than assuming a vehicle will always be beside the group.
            </p>
            <ul className="article-checklist">
              <li><strong>Luggage:</strong> confirm bag limits, collection times, what stays with you during the day and how luggage is transferred.</li>
              <li><strong>Repairs:</strong> ask which tools and spares the guide carries, what you should bring and what happens after a major mechanical issue.</li>
              <li><strong>Navigation:</strong> clarify who leads the route and what the group should do if a rider becomes separated.</li>
              <li><strong>Communication:</strong> ask how the team communicates across the group and what arrangements apply where mobile coverage is limited.</li>
              <li><strong>Emergency planning:</strong> understand the basic response plan and who to contact if someone is injured or unable to continue.</li>
            </ul>
            <div className="article-tip"><strong>Remote routes need a realistic support plan</strong><p>Ask what can actually access each stage, which services are available and what changes may be needed if weather, road access or a mechanical problem affects the day.</p></div>
          </section>

          <section id="group">
            <h2>Plan for the whole group—not only the strongest rider</h2>
            <p>
              Friends and clubs often have a range of fitness, technical confidence and daily-distance preferences. A good plan makes those differences explicit. Discuss the hardest stage, the pace expected, whether there are shorter alternatives and how the group will handle different riding speeds before the itinerary is confirmed.
            </p>
            <p>
              Private trips can offer more flexibility, but flexibility works best when priorities are agreed in advance. Decide whether your group prefers more riding, more time in villages and towns, comfortable accommodation, technical trails or a balance of all four. Share any important equipment needs and be honest about experience, so the route can be matched to the group rather than an idealised rider.
            </p>
            <p>
              For mixed-ability groups, consider planning a few days around shared stages and adding optional extensions only where the logistics are clear. The goal is for everyone to finish the holiday feeling they took part in a worthwhile journey, not simply that they kept up with the fastest person.
            </p>
          </section>

          <section id="packing">
            <h2>What to pack for a multi-day cycling tour</h2>
            <p>
              The right kit depends on season, elevation, bike type and the amount of support available. Confirm what is supplied by the organiser and what must fit in your own day bag or luggage. Avoid packing solely for the first day's forecast if your route crosses several regions or altitudes.
            </p>
            <ul className="article-checklist">
              <li><strong>Riding essentials:</strong> helmet, gloves, eyewear, suitable shoes, comfortable riding kit and sun protection.</li>
              <li><strong>Layers:</strong> lightweight windproof or waterproof clothing and warmer layers for early starts or high elevations.</li>
              <li><strong>Hydration:</strong> bottles or a hydration pack sized for the longest stage and the expected refill options.</li>
              <li><strong>Personal repairs:</strong> basic tools, spares or puncture supplies appropriate to your bike, coordinated with the support team.</li>
              <li><strong>Personal items:</strong> medication, identification, phone, charging cable and any essential items you need easily accessible.</li>
              <li><strong>Off-bike comfort:</strong> casual clothing and shoes appropriate for accommodation, transfers and village stops.</li>
            </ul>
          </section>

          <section id="booking-checklist">
            <h2>Before you book: multi-day tour checklist</h2>
            <ul className="article-checklist">
              <li><strong>Route outline:</strong> request the planned regions, daily stages, distance, climbing and main surfaces.</li>
              <li><strong>Group fit:</strong> explain each rider's experience, fitness, bike preference and any constraints.</li>
              <li><strong>Schedule:</strong> check riding days, transfer time, rest or lighter days and expected arrival times.</li>
              <li><strong>Inclusions:</strong> clarify accommodation, meals, water, guiding, luggage transfers, bikes and support services.</li>
              <li><strong>Safety and changes:</strong> ask about route alternatives, weather adjustments, mechanical problems and emergency procedures.</li>
              <li><strong>Costs and confirmation:</strong> request a written summary of inclusions, exclusions, payment terms and what is confirmed for your dates.</li>
            </ul>
            <p>
              An itinerary is strongest when the route details and logistics are clear enough for you to understand the demands of each day. Confirm availability and all key arrangements with the tour provider before making non-refundable travel plans.
            </p>
          </section>

          <section id="planning-faq" className="article-faq">
            <h2>Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>Build a trip that works from the first ride to the last</strong>
            <p>Whether you are planning an MTB expedition, an E-MTB holiday, a gravel journey or a road cycling tour, share your intended dates, group size and riding preferences. <Link href="/contact">Contact Mountain Bike Morocco</Link> to discuss a practical itinerary and the details that need to be confirmed.</p>
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
            <h2>Plan the journey—not just the daily kilometres.</h2>
            <p>Tell us your dates, group size, cycling style and the regions you would like to explore. We can discuss stage lengths, support and the practical details to confirm for a multi-day trip.</p>
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
        .multi-day-cycling-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
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
        @media(prefers-reduced-motion:reduce){.multi-day-cycling-article *,.multi-day-cycling-article *:before,.multi-day-cycling-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
