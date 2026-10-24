import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Time to Visit Morocco for Cycling | Mountain Bike Morocco",
  description:
    "Discover the best time to cycle in Morocco by season and region. Compare the High Atlas, Marrakech and Agafay, the Sahara and Atlantic Coast for MTB, E-MTB, gravel and road cycling.",
  alternates: { canonical: "/journal/best-time-visit-morocco-cycling" },
  openGraph: {
    title: "Best Time to Visit Morocco for Cycling",
    description:
      "A practical month-by-month and region-by-region guide to planning a Morocco cycling holiday, from spring and autumn trips to coastal summer rides and winter route considerations.",
    type: "article",
    images: ["/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg"],
  },
};

const relatedArticles = [
  {
    category: "SEASONAL CYCLING",
    title: "Cycling Morocco in September",
    text: "Explore late-summer conditions and the details to check before choosing a route.",
    image: "/images/Explore-Atlas-Mountains-by-bike.jpg",
    href: "/journal/cycling-morocco-september",
  },
  {
    category: "SEASONAL CYCLING",
    title: "Cycling Morocco in October",
    text: "Compare regional route options and preparation for autumn riding.",
    image: "/images/Explore-Atlas-Mountains-bike.jpg",
    href: "/journal/cycling-morocco-october",
  },
  {
    category: "DESTINATION GUIDES",
    title: "Complete High Atlas Mountains Cycling Guide",
    text: "Plan around altitude, terrain, weather, riding style and mountain logistics.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/journal/complete-high-atlas-mountains-cycling-guide",
  },
];

const faqs = [
  {
    question: "What is the best month for cycling in Morocco?",
    answer:
      "There is no single best month for every route. Spring and autumn are useful starting points for many multi-region trips, but the most suitable dates depend on altitude, destination, riding style, exposure and your tolerance for heat or cold. Confirm actual conditions and access for your chosen route before booking.",
  },
  {
    question: "Is spring a good time for mountain biking in the Atlas?",
    answer:
      "Spring can be a good period to explore many Atlas routes, especially at lower and mid elevations, but conditions vary with altitude and recent weather. Higher trails and passes may still be cold or affected by snow or rain. Ask about the precise route, elevation profile and suitable alternatives.",
  },
  {
    question: "Can I cycle in Morocco during summer?",
    answer:
      "Yes, but route selection and timing become particularly important in hot inland and desert areas. Coastal routes may feel cooler, and some mountain itineraries may be planned around elevation and early starts. Ask about shade, water, daily distance, start time and contingency options rather than assuming every region has the same conditions.",
  },
  {
    question: "When is the best time for a Sahara cycling trip?",
    answer:
      "Spring and autumn are often practical seasons to investigate for desert journeys, but exact dates and route conditions matter. Desert days can still be hot and nights cool, while wind and remoteness affect logistics. Confirm water supply, support, overnight arrangements and the plan for changing a stage if necessary.",
  },
  {
    question: "What about road and gravel cycling on the Atlantic Coast?",
    answer:
      "Coastal conditions differ from inland and mountain weather, and wind can be as important as temperature for cyclists. For gravel, confirm the surface and tyre requirements; for road cycling, consider traffic, route profile and support. Discuss the exact route and forecast for your dates.",
  },
  {
    question: "How far in advance should I choose dates and book?",
    answer:
      "Start once you know your approximate travel window, group size and preferred cycling style. Multi-day trips may need coordination of guides, accommodation, transfers, bike sizes and support. Before confirming, ask for the itinerary, inclusions, cancellation terms and any seasonal constraints that apply to your particular route.",
  },
];

export default function BestTimeToVisitMoroccoCyclingPage() {
  return (
    <main className="best-time-cycling-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Best Time to Visit Morocco for Cycling</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">TRIP PLANNING · SEASONS · MOROCCO</p>
          <h1>Best Time to Visit Morocco for Cycling</h1>
          <p className="article-deck">
            The best time to cycle in Morocco depends on where you want to ride. The High Atlas, Marrakech and Agafay, the Sahara and the Atlantic Coast each have different seasonal patterns, and altitude can make conditions change quickly within one itinerary. Use this guide to compare the broad seasons, match them to your preferred cycling style and identify the route details to confirm before travelling.
          </p>
          <div className="article-meta"><span>8 MIN READ</span><span>SEASONS · MOROCCO</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg" alt="Cycling journey through Morocco’s Atlas Mountains" fetchPriority="high" />
          <figcaption>Plan around the region and the route you intend to ride, not the calendar month alone.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#season-overview">How seasons affect cycling</a>
          <a href="#spring-cycling">Spring: March–May</a>
          <a href="#summer-cycling">Summer: June–August</a>
          <a href="#autumn-cycling">Autumn: September–November</a>
          <a href="#winter-cycling">Winter: December–February</a>
          <a href="#region-guide">Choose by region</a>
          <a href="#cycling-style">Match the cycling style</a>
          <a href="#plan-dates">Plan your dates</a>
          <a href="#packing">What to pack</a>
          <a href="#booking-checklist">Before you book</a>
          <a href="#best-time-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            Morocco is a country of contrasts: coastal breezes, warm inland plains, high mountain terrain and dry southern landscapes can all feature in one cycling holiday. Spring and autumn are often useful starting points for planning, but a good decision also considers elevation, distance, exposure, expected daylight and the kind of riding you want to do. A seasonal guide helps narrow the options; current route information should decide the final plan.
          </p>

          <section id="season-overview">
            <h2>How seasons affect a cycling holiday in Morocco</h2>
            <p>
              There is no single climate that describes the whole country. The Atlantic Coast is influenced by the ocean, inland areas can become much hotter in summer, mountain conditions change with elevation, and the south has arid desert and pre-desert landscapes. The Moroccan National Tourist Office also highlights these contrasting regional influences in its <a href="https://www.visitmorocco.com/en/travel-info/climate-and-seasons" target="_blank" rel="noreferrer">climate and seasons guide</a>.
            </p>
            <p>
              For cyclists, comfortable temperatures are only one part of the decision. Rain can affect trail surfaces, mountain passes can be exposed or cold, wind can shape a coastal ride, and summer heat changes the way you should plan starts, water and rest. Ask about the actual route rather than choosing a trip solely by its headline season.
            </p>
            <div className="article-tip"><strong>Start with the route</strong><p>Choose the region and cycling style first, then check the likely conditions for your travel dates, including altitude range, daily distance, surface, support and any alternative route if the original plan becomes unsuitable.</p></div>
          </section>

          <section id="spring-cycling">
            <h2>Spring cycling in Morocco: March to May</h2>
            <p>
              Spring is a useful period to consider for a trip that combines multiple regions. Lower valleys and foothills can warm up while higher Atlas routes remain cooler, so layers and a flexible plan are important. Spring conditions can change from one altitude band to another, and recent rainfall may influence the grip and condition of unpaved trails.
            </p>
            <h3>Best uses for spring</h3>
            <p>
              Spring may suit riders who want to combine Atlas foothills, mountain villages, Marrakech-area routes and southern landscapes in one itinerary. It can work for MTB, E-MTB, gravel or road cycling, provided the selected route matches the group's ability and current conditions. For high passes or technical trails, confirm access, exposure and any remaining snow or wet sections before departure.
            </p>
            <p>
              A spring itinerary benefits from packing layers, sun protection and a light weatherproof shell. If your journey covers several elevations, ask how the guide handles a change in conditions and whether daily distances leave time for stops and route adjustments.
            </p>
          </section>

          <section id="summer-cycling">
            <h2>Summer cycling in Morocco: June to August</h2>
            <p>
              Summer needs more careful route and timing choices, particularly in inland cities and exposed lowland or desert terrain where heat can become demanding. Coastal areas may feel different because of sea breezes, and some mountain routes offer cooler conditions at elevation, although climbs, exposed trails and afternoon temperatures still need to be considered.
            </p>
            <h3>Plan around heat, not only distance</h3>
            <p>
              On hot days, early starts, shade breaks, adequate water capacity and realistic daily distances become central to the plan. Confirm water refill points, food stops, support access and the procedure for shortening a stage. Avoid assuming a remote route has shade or easy access to supplies simply because the distance looks manageable on a map.
            </p>
            <p>
              Summer can be a better fit for certain coastal or carefully selected mountain journeys than for exposed desert riding at the hottest part of the day. Share your preferred dates and fitness level with the organiser so route, start time and support arrangements can be discussed before committing.
            </p>
          </section>

          <section id="autumn-cycling">
            <h2>Autumn cycling in Morocco: September to November</h2>
            <p>
              Autumn is often a strong option to investigate for a multi-region cycling holiday because conditions begin to shift after the summer heat. September can still feel summery in lower inland areas; October and November can bring cooler starts and more noticeable variation between the coast, the desert and the High Atlas. These are broad patterns, not guarantees for a particular week.
            </p>
            <h3>Choose your autumn month carefully</h3>
            <p>
              If your priority is the Atlas, ask about elevation and the likely condition of mountain routes. For Agafay or southern desert stages, plan water, start time, exposure and support. Coastal gravel and road itineraries should account for wind, road surface and traffic. The right choice depends on the precise route, not simply on the label “autumn”.
            </p>
            <p>
              September, October and November each deserve their own planning check. If you have flexibility, share a date range rather than one fixed date, and ask whether the itinerary could be adjusted to suit current conditions while preserving the experience you want.
            </p>
          </section>

          <section id="winter-cycling">
            <h2>Winter cycling in Morocco: December to February</h2>
            <p>
              Winter riding can be practical in some lower, coastal and southern areas, but nights and early mornings can be cold, while higher Atlas terrain may be affected by snow, ice or weather that changes access. A sunny city afternoon does not tell you whether a high, exposed route will be suitable on the same day.
            </p>
            <h3>Build in flexibility</h3>
            <p>
              For winter trips, check the elevation profile, daylight, recent weather and contingency options. Ask about lower-altitude alternatives if your preferred mountain route is inaccessible, and pack warm layers as well as normal riding kit. For remote desert journeys, confirm night-time accommodation, water and food logistics, communication and support arrangements.
            </p>
            <p>
              Winter can still be rewarding when the route is chosen for the conditions and the itinerary leaves space to adapt. It is better to confirm a realistic plan than to rely on a generic promise that one season suits every region.
            </p>
          </section>

          <section id="region-guide">
            <h2>Choose the best time by region</h2>
            <h3>High Atlas Mountains</h3>
            <p>
              Altitude has a major influence on mountain cycling. Higher trails and passes may be colder and more weather-dependent than valleys or foothills. When comparing dates, ask for the route's elevation range, expected surface, amount of climbing and any access restrictions. Technical riding, long descents and remote traverses all need conditions that suit the group.
            </p>
            <h3>Marrakech and the Agafay Desert</h3>
            <p>
              These areas can work for day rides or as the beginning of a longer cycling holiday, but rocky open terrain may offer limited shade. Warmer months require extra attention to start times, water, rest and exposed sections. Confirm transfer times, ride duration, surface and where the group can refill water.
            </p>
            <h3>Sahara and southern Morocco</h3>
            <p>
              Spring and autumn are often useful periods to investigate for desert journeys, but heat, wind, large day-to-night temperature changes and distances between services remain important. Confirm the water and food plan, overnight arrangements, luggage handling, vehicle support and what happens if a rider cannot continue.
            </p>
            <h3>Atlantic Coast</h3>
            <p>
              Coastal routes can be considered across a broader part of the year, but wind and local conditions influence effort and comfort. For road cycling, consider traffic, route profile and safe stopping places; for gravel, check track surfaces, tyre suitability and connections between unpaved sections. Avoid judging the coast only by temperature—wind can change how a ride feels.
            </p>
          </section>

          <section id="cycling-style">
            <h2>Match the season to your cycling style</h2>
            <h3>Mountain biking (MTB)</h3>
            <p>
              Choose routes around grip, technical difficulty, gradient and the ability of the group. Wet surfaces, loose rock, heat and exposure can change the feel of a trail even when distance and elevation are unchanged. Ask about hike-a-bike sections, how much singletrack is included and what alternatives are available if conditions change.
            </p>
            <h3>Electric mountain biking (E-MTB)</h3>
            <p>
              Battery range depends on the bike, rider weight, elevation gain, assistance mode, temperature and riding conditions. Confirm the expected route, charging opportunities, spare-battery arrangements and the plan if power runs low away from a charging point. Seasonal daylight also influences how much riding should be planned in a day.
            </p>
            <h3>Gravel cycling</h3>
            <p>
              Gravel routes depend on surface quality, tyre width, gearing and the amount of paved road between dirt sections. Recent rain may change traction, while heat and long stretches without services affect water and resupply plans. Request a realistic route profile and the expected surface mix before choosing tyres or daily distances.
            </p>
            <h3>Road cycling</h3>
            <p>
              Road itineraries should balance climbing, temperatures, wind, traffic and daylight. Mountain passes may have different conditions from lowland roads, so ask about elevation, support vehicle access and alternatives. For longer point-to-point rides, the wind direction and timing of the stage can affect the effort more than the kilometre total suggests.
            </p>
          </section>

          <section id="plan-dates">
            <h2>How to choose dates for your cycling trip</h2>
            <p>
              Start by listing the places you most want to visit and the type of riding you enjoy. Next, compare the broad seasonal pattern for those regions, then check the actual conditions and route profile with the organiser. If you are combining the mountains, desert and coast, allow enough time for transfers and avoid planning every ride at the limit of your energy or daylight.
            </p>
            <div className="article-tip"><strong>Questions worth asking</strong><p>What altitude will we reach? What surfaces are planned? How much climbing and ride time should we expect? Where are water and food available? What support is included? Is there a sensible alternative if the route is too hot, wet, windy or otherwise unsuitable?</p></div>
            <p>
              A good itinerary is more than a list of destinations. It should explain daily riding, transfers, accommodation, luggage, meals, bike arrangements, guide support and what is included in the price. Get these details confirmed for the exact tour and dates before booking.
            </p>
          </section>

          <section id="packing">
            <h2>What to pack for different seasons</h2>
            <p>
              Begin with a correctly fitted helmet, gloves, eyewear, suitable shoes, riding clothes, sun protection and hydration. Add layers for cool starts and high elevations, and a windproof or waterproof shell if the route and forecast call for it. For hot or remote stages, ask how much water you should carry and where refills are planned.
            </p>
            <ul className="article-checklist">
              <li><strong>Spring and autumn:</strong> versatile layers, sun protection and a light weatherproof shell for changing conditions.</li>
              <li><strong>Summer:</strong> early-start clothing, sun protection and sufficient water capacity; confirm breaks and refill options.</li>
              <li><strong>Winter or high routes:</strong> warmer layers, gloves suited to the conditions and a route-specific check of access and weather.</li>
              <li><strong>Bike and repairs:</strong> confirm bike size, tyres, pedals, charging needs, personal tools and the support spares available.</li>
              <li><strong>Multi-day trips:</strong> clarify luggage limits, transfers, accommodation, meals and how essentials are carried during the ride.</li>
            </ul>
          </section>

          <section id="booking-checklist">
            <h2>Before you book: a practical checklist</h2>
            <p>Send the organiser the details that affect a route recommendation:</p>
            <ul className="article-checklist">
              <li><strong>Travel window:</strong> your dates, flexibility and number of riding days.</li>
              <li><strong>Preferred region:</strong> High Atlas, Marrakech and Agafay, southern desert landscapes or Atlantic Coast.</li>
              <li><strong>Rider profile:</strong> MTB, E-MTB, gravel or road; recent experience; fitness; preferred daily distance and climbing.</li>
              <li><strong>Group requirements:</strong> group size, mixed abilities, bike sizes, equipment, dietary needs and rest-day preferences.</li>
              <li><strong>Trip logistics:</strong> inclusions, guide and vehicle support, water access, luggage handling, accommodation and contingency plans.</li>
            </ul>
            <p>
              Seasonal guides provide broad orientation, not live forecasts or route-access guarantees. Confirm current conditions, availability, inclusions and the final itinerary directly before travelling.
            </p>
          </section>

          <section id="best-time-faq" className="article-faq">
            <h2>Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>Remember: choose the route, not just the month</strong>
            <p>Seasonal patterns are only a starting point. Current weather, elevation, surface conditions, services and your group's ability should guide the final itinerary. For an official regional climate overview, see the <a href="https://www.visitmorocco.com/en/travel-info/climate-and-seasons" target="_blank" rel="noreferrer">Moroccan National Tourist Office's climate and seasons guide</a>.</p>
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
            <p className="article-eyebrow">PLAN YOUR MOROCCO RIDE</p>
            <h2>Choose the season that fits your route.</h2>
            <p>Tell us when you want to travel, which regions interest you and the kind of cycling you enjoy. We can discuss routes and practical details for your preferred dates.</p>
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
        .best-time-cycling-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
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
        @media(prefers-reduced-motion:reduce){.best-time-cycling-article *,.best-time-cycling-article *:before,.best-time-cycling-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
