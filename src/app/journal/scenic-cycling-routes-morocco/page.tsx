import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scenic Cycling Routes: The Best Views in Morocco | Mountain Bike Morocco",
  description:
    "Discover scenic cycling routes across Morocco, from High Atlas panoramas and village valleys to Agafay's rocky plateaus, southern desert landscapes and Atlantic coastal roads.",
  alternates: { canonical: "/journal/scenic-cycling-routes-morocco" },
  openGraph: {
    title: "Scenic Cycling Routes: The Best Views in Morocco",
    description:
      "Plan a memorable scenic cycling holiday in Morocco with guidance on mountain panoramas, valleys, desert-edge landscapes, coastal routes and choosing the right riding style.",
    type: "article",
    images: ["/images/atlas-cycling-adventure.jpg"],
  },
};

const relatedArticles = [
  {
    category: "DESTINATION GUIDES",
    title: "Complete High Atlas Mountains Cycling Guide",
    text: "Plan a High Atlas trip around terrain, altitude, weather, villages and your preferred riding style.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/journal/complete-high-atlas-mountains-cycling-guide",
  },
  {
    category: "MOUNTAIN BIKE GUIDES",
    title: "The Best MTB Trails in the Atlas Mountains",
    text: "Compare trail types, technical features and preparation for a mountain biking trip in the Atlas.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/journal/best-mtb-trails-atlas-mountains",
  },
  {
    category: "TRIP PLANNING",
    title: "Best Time to Visit Morocco for Cycling",
    text: "Compare broad seasonal patterns by region and choose dates that suit your route and riding style.",
    image: "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    href: "/journal/best-time-visit-morocco-cycling",
  },
];

const faqs = [
  {
    question: "Where are the most scenic places to cycle in Morocco?",
    answer:
      "The High Atlas offers mountain panoramas and valley scenery; areas around Imlil feature villages and terraced slopes; Agafay has open rocky terrain; southern routes have wide, dry landscapes; and the Atlantic Coast offers ocean views and rural roads. The best option depends on your cycling style, available time, fitness and the conditions on your chosen route.",
  },
  {
    question: "Are the most scenic cycling routes suitable for beginners?",
    answer:
      "Some scenic routes are suitable for newer riders, but beautiful scenery does not guarantee easy riding. Climbing, loose surfaces, exposure, traffic and distance all affect difficulty. Share your experience and comfort level before choosing a route, and ask for the surface, elevation profile and available alternatives.",
  },
  {
    question: "Which cycling style is best for sightseeing in Morocco?",
    answer:
      "Road cycling can suit paved mountain passes and quiet rural roads; gravel suits riders who want to explore unpaved tracks; MTB is suited to trails and rougher terrain; and E-MTB can help some riders manage longer climbs. Choose based on the actual surface and route profile rather than the views alone.",
  },
  {
    question: "Can we stop for photos during a guided ride?",
    answer:
      "Yes, a scenic itinerary can include planned viewpoints and pauses, but agree on the pace and likely stopping time in advance. Stops should be made in safe places away from traffic, trail users and livestock, and riders should respect people's privacy when passing through villages.",
  },
  {
    question: "What is the best season for scenic cycling in Morocco?",
    answer:
      "There is no single ideal season for every region. Spring and autumn are useful periods to investigate for many routes, while summer heat, winter mountain conditions and coastal wind can influence the best choice. Confirm recent conditions, elevation, surface and the forecast for your exact dates.",
  },
  {
    question: "Can a scenic cycling holiday combine the mountains, desert and coast?",
    answer:
      "A multi-region itinerary may be possible when enough time is available, but distances between areas and transfer logistics need to be realistic. Decide which experiences matter most, then allow time for the journey between them, recovery, and adjustments for weather or route conditions.",
  },
];

export default function ScenicCyclingRoutesMoroccoPage() {
  return (
    <main className="scenic-cycling-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Scenic Cycling Routes: The Best Views in Morocco</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">ROUTE INSPIRATION · LANDSCAPES · MOROCCO</p>
          <h1>Scenic Cycling Routes: The Best Views in Morocco</h1>
          <p className="article-deck">
            Morocco rewards cyclists with far more than one kind of scenery. High mountain panoramas, terraced valleys, traditional villages, rocky desert-edge plateaus and open Atlantic coastlines each create a different kind of ride. The best scenic route is one that pairs the landscape you want to experience with a surface, distance and level of effort that suit your group.
          </p>
          <div className="article-meta"><span>7 MIN READ</span><span>ROUTE INSPIRATION · MOROCCO</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/atlas-cycling-adventure.jpg" alt="Scenic cycling route across Morocco’s mountain valleys" fetchPriority="high" />
          <figcaption>Choose a route that leaves time to enjoy the scenery as well as the ride.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#scenic-riding">What makes a route scenic?</a>
          <a href="#high-atlas">High Atlas panoramas</a>
          <a href="#imlil-valleys">Imlil and village valleys</a>
          <a href="#agafay-plateau">Agafay and desert-edge views</a>
          <a href="#southern-landscapes">Southern Morocco and the Sahara</a>
          <a href="#atlantic-coast">Atlantic Coast routes</a>
          <a href="#cycling-styles">Choose your cycling style</a>
          <a href="#plan-scenic-ride">Plan a scenic ride</a>
          <a href="#what-to-bring">What to bring</a>
          <a href="#scenic-checklist">Before you book</a>
          <a href="#scenic-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            Some of the most memorable cycling days are defined by the moment a valley opens up, a mountain range comes into view or the landscape changes across a long descent. To enjoy these moments, plan beyond a map line: consider the riding surface, climbing, wind, time of day, safe places to stop and the pace your group wants to keep.
          </p>

          <section id="scenic-riding">
            <h2>What makes a cycling route scenic?</h2>
            <p>
              A scenic route can be a paved road climbing toward a mountain pass, a gravel track crossing an agricultural valley, a trail above a traditional settlement or a quiet coastal road with the ocean in view. The best experience comes from matching the route to your interests and comfort. A rider seeking long road climbs may value open mountain views, while a gravel rider might prefer a quieter track that connects small settlements and changing landscapes.
            </p>
            <p>
              Scenery and difficulty are not the same thing. A panoramic climb can require sustained fitness, an exposed ridge can feel demanding in wind, and a rocky trail can be slow even when the distance looks short. Ask for a realistic description of the surface, elevation gain, technical features, expected ride time and where the route allows safe stops.
            </p>
            <div className="article-tip"><strong>Plan to experience the view</strong><p>Build in enough time for planned viewpoints and breaks. Trying to cover too much ground can turn a scenic ride into a race against the clock, especially when transfers, climbing and photo stops are involved.</p></div>
          </section>

          <section id="high-atlas">
            <h2>High Atlas Mountains: big panoramas and mountain roads</h2>
            <p>
              The High Atlas is an obvious place to start when mountain scenery is a priority. Routes may look out across layered ridgelines, steep-sided valleys, terraced slopes and villages set into the landscape. Depending on the route and elevation, a day may involve a paved climb, a rough mountain track, a technical trail or a combination of surfaces connected by transfers.
            </p>
            <h3>Choose the right viewpoint and elevation</h3>
            <p>
              Higher viewpoints can offer dramatic views, but they also bring cooler temperatures, wind exposure and more demanding climbing. When choosing a route, check the elevation profile and the amount of time spent climbing, not only the overall distance. Ask whether a viewpoint is reached by road, gravel or trail and whether a support vehicle can access the area if that is part of the trip plan.
            </p>
            <p>
              For MTB riders, route selection should reflect trail skill and comfort with loose rock or narrow sections. Road cyclists should ask about traffic, road surface and the gradient of longer climbs. Gravel riders need to understand the surface mix and whether the route includes steep or rough sections that call for suitable tyres and gearing.
            </p>
          </section>

          <section id="imlil-valleys">
            <h2>Imlil and the Atlas valleys: villages, terraces and winding tracks</h2>
            <p>
              Around Imlil and the wider mountain valleys, a scenic ride may combine mountain backdrops with terraced fields, stone-built settlements, footpaths, mule tracks and narrow roads. These landscapes are lived-in places, so the experience is best when riding pace, route choice and stops respect village routines and other trail users.
            </p>
            <h3>Ride respectfully through local communities</h3>
            <p>
              Slow down near homes, schools, markets and animals. Give walkers and livestock space, follow the guide's instructions, and ask permission before photographing people or private property. If a route passes through a village, leave enough time for a calm passage rather than treating the settlement as an obstacle between viewpoints.
            </p>
            <p>
              These valleys can suit different cycling styles when the route is chosen appropriately. Some rides focus on paved roads and steady climbing; others use unpaved tracks or technical trail sections. Confirm the planned surface and daily effort so the ride fits the group rather than relying on the destination name alone.
            </p>
          </section>

          <section id="agafay-plateau">
            <h2>Agafay and desert-edge landscapes: wide horizons near Marrakech</h2>
            <p>
              The rocky terrain around Agafay offers a different visual experience from the green terraces and high ridges of the Atlas. Open plateaus, pale stone, changing light and far-off mountain views can make a day ride feel expansive, even when it begins within reach of Marrakech. MTB, E-MTB and gravel routes may be possible depending on the chosen surface and the rider's experience.
            </p>
            <h3>Exposure and timing matter</h3>
            <p>
              Open terrain can offer limited shade, so heat, wind, water capacity and the time of day matter. Ask how much of the route is exposed, where drinking water is available and whether the itinerary has safe alternatives if conditions become uncomfortable. Do not judge a desert-edge ride only by kilometres: rocky surfaces and repeated small climbs can take longer than expected.
            </p>
            <p>
              If you want a slower, photography-focused ride, make that preference clear while planning. The organiser can discuss a realistic distance and route that balances riding with time to appreciate the landscape.
            </p>
          </section>

          <section id="southern-landscapes">
            <h2>Southern Morocco and the Sahara: space, colour and distance</h2>
            <p>
              Southern routes can reveal broad open landscapes, dry valleys, oasis areas, rocky plateaus and changing desert scenery. The visual rewards often come from the scale of the landscape and the sense of travelling between places rather than from one single viewpoint. Multi-day trips need careful planning because services can be far apart and support arrangements become especially important away from larger settlements.
            </p>
            <h3>Make remote scenery part of a realistic plan</h3>
            <p>
              Before choosing a remote stage, confirm the route, water and food plan, luggage arrangements, overnight stops, communications and how support is organised. Temperatures can differ between daytime and night, and wind or heat may change how the day feels. Scenic stops should be balanced with a safe route and enough time to reach the planned overnight location.
            </p>
            <p>
              A southern expedition can be rewarding for MTB, gravel or E-MTB riders depending on the terrain and the itinerary. Ask how much is paved, gravel or rough track, what the longest unsupported sections are and what happens if a rider needs to shorten a stage.
            </p>
          </section>

          <section id="atlantic-coast">
            <h2>Atlantic Coast: ocean views, rural roads and coastal tracks</h2>
            <p>
              Morocco's Atlantic side offers another kind of scenic ride, with coastal light, sea views, fishing communities and countryside routes near the shore. Some itineraries favour paved roads for road cycling, while others use rural tracks that suit gravel or mixed-surface riding. Conditions can be shaped by wind as much as temperature, so the direction and timing of a stage may influence the effort.
            </p>
            <h3>Understand the surface and route connections</h3>
            <p>
              For road riding, ask about traffic, shoulder width, climbing and safe stopping points. For gravel, check whether tracks are firm, sandy, stony or mixed, and ask about the amount of paved road between unpaved sections. A route can be scenic without being suitable for every bike or tyre setup.
            </p>
            <p>
              If the coast is part of a longer journey, include transfer time and allow for changes in wind or weather. The best trip is one that gives you enough space to enjoy the route without needing to push through every stage at maximum effort.
            </p>
          </section>

          <section id="cycling-styles">
            <h2>Choose a cycling style to match the scenery</h2>
            <h3>Mountain biking (MTB)</h3>
            <p>
              MTB opens up trails, rough mountain tracks and uneven terrain that road bikes cannot use. It is a good option when the scenery you want is linked to singletrack, mountain descents and remote paths. Technical ability, bike setup, gradient and exposure need to match the route; ask about hike-a-bike sections and alternative lines if a section is beyond your comfort level.
            </p>
            <h3>Electric mountain biking (E-MTB)</h3>
            <p>
              E-MTB can help some groups manage longer climbs or cover more ground while still riding off-road. Range depends on battery capacity, elevation gain, assistance mode, rider weight, temperature and surface. For scenic routes, confirm the expected distance, charging opportunities, spare-battery plan and whether every rider will use an e-bike.
            </p>
            <h3>Gravel cycling</h3>
            <p>
              Gravel can link quieter tracks, villages and wide landscapes that may be missed on a main road. The main question is the actual surface: compact dirt feels very different from loose rock or deep sand. Ask for a surface breakdown, elevation profile, likely tyre needs, water access and the amount of road traffic or paved riding between gravel sections.
            </p>
            <h3>Road cycling</h3>
            <p>
              Road cycling can be ideal for mountain passes, winding rural roads and longer panoramic climbs. Scenic road riding still needs careful planning around traffic, road surface, gradients, wind, daylight and vehicle support. Check whether the route includes busy connectors and how the daily distance is balanced with time to pause at viewpoints.
            </p>
          </section>

          <section id="plan-scenic-ride">
            <h2>How to plan a scenic cycling day</h2>
            <p>
              Begin with the view or landscape you most want to experience, then select the right region and riding style. Confirm how you will reach the start point, the expected time on the bike, elevation gain, surface and any transfers. A scenic ride often works best when the itinerary is realistic enough to include planned breaks rather than leaving all stops to whatever time remains at the end.
            </p>
            <div className="article-tip"><strong>Questions to ask before choosing a route</strong><p>Where are the main viewpoints? How much climbing is involved? What surface will we ride? Is there exposure to heat or wind? Where can we safely stop? What water, guide and vehicle support is included? Is there an alternative if the weather or trail conditions change?</p></div>
            <p>
              If your group has mixed abilities, talk through the differences before booking. Riders may have different expectations about speed, technical difficulty and how often to stop. A well-planned route finds a suitable balance between the scenic experience, the group's ability and a realistic daily schedule.
            </p>
          </section>

          <section id="what-to-bring">
            <h2>What to bring for a scenic cycling holiday</h2>
            <p>
              Start with essential riding equipment and add items for the specific terrain and weather. A scenic route can climb into cooler air, cross exposed plateaus or spend long periods away from shops, so packing should reflect the actual plan rather than a generic list.
            </p>
            <ul className="article-checklist">
              <li><strong>Riding basics:</strong> a correctly fitted helmet, gloves, eyewear, suitable shoes, comfortable kit and sun protection.</li>
              <li><strong>Hydration and food:</strong> enough water capacity for the stage and an understanding of where refills and meals are planned.</li>
              <li><strong>Layers:</strong> a light wind or rain shell and warmer clothing if the route reaches higher elevations or starts early.</li>
              <li><strong>Bike preparation:</strong> tyres and gearing suited to the stated surface, plus clarification of tools, spares and mechanical support.</li>
              <li><strong>Photography:</strong> secure your phone or camera, and stop only where it is safe to do so without blocking roads or trails.</li>
            </ul>
          </section>

          <section id="scenic-checklist">
            <h2>Before you book: scenic route checklist</h2>
            <p>Share these details with your trip organiser so the route can be matched to your group:</p>
            <ul className="article-checklist">
              <li><strong>Preferred landscape:</strong> High Atlas panoramas, village valleys, Agafay, southern desert areas or the Atlantic Coast.</li>
              <li><strong>Riding style:</strong> MTB, E-MTB, gravel, road cycling or a combination.</li>
              <li><strong>Daily effort:</strong> distance, climbing, technical difficulty and time you want for breaks.</li>
              <li><strong>Group profile:</strong> riding experience, fitness, group size, equipment and any mixed-ability considerations.</li>
              <li><strong>Trip logistics:</strong> transfer time, route support, accommodation, water and food arrangements, and alternatives if conditions change.</li>
            </ul>
            <p>
              Photos and route descriptions offer inspiration, but they cannot guarantee current conditions or the exact views on a particular day. Confirm the itinerary, access, forecast and inclusions before travel, and keep some flexibility for weather or local conditions.
            </p>
          </section>

          <section id="scenic-faq" className="article-faq">
            <h2>Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>The best view is part of a good ride, not a reason to rush</strong>
            <p>Choose a route that suits your ability, gives you time to enjoy the landscape and respects the people and places along the way. If you are unsure which region or cycling style fits your trip, <Link href="/contact">share your plans with the Mountain Bike Morocco team</Link> and ask about practical route options.</p>
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
            <h2>Find a route with views worth taking your time for.</h2>
            <p>Tell us which landscapes interest you, your preferred cycling style and how much riding you want to do. We can discuss route options and the practical details to confirm for your dates.</p>
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
        .scenic-cycling-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
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
        @media(prefers-reduced-motion:reduce){.scenic-cycling-article *,.scenic-cycling-article *:before,.scenic-cycling-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
