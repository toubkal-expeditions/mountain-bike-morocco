import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Morocco Road Cycling Holidays | Routes, Climbs & Planning Guide",
  description:
    "Plan a road cycling holiday in Morocco with practical guidance on Atlas Mountain climbs, route choice, road conditions, traffic awareness, seasons, equipment and support.",
  alternates: { canonical: "/journal/morocco-road-cycling-holidays" },
  openGraph: {
    title: "Morocco Road Cycling Holidays | Mountain Bike Morocco",
    description:
      "A practical guide to road cycling holidays in Morocco, covering mountain passes, scenic roads, equipment, support and route planning.",
    type: "article",
    images: ["/images/road-cycling-holiday-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "SCENIC ROUTES",
    title: "Scenic Cycling Routes: The Best Views in Morocco",
    text: "Compare mountain landscapes, rural roads and coastal scenery when deciding where to ride.",
    image: "/images/atlas-cycling-adventure.jpg",
    href: "/journal/scenic-cycling-routes-morocco",
  },
  {
    category: "TRIP PLANNING",
    title: "Best Time to Visit Morocco for Cycling",
    text: "Consider regional climate, altitude and seasonal variation before choosing your dates.",
    image: "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    href: "/journal/best-time-visit-morocco-cycling",
  },
  {
    category: "MULTI-DAY RIDES",
    title: "Multi-Day Cycling Tours Planning",
    text: "Build realistic stages around daily distance, climbing, recovery, transfers and support.",
    image: "/images/group-adventure-cycling-morocco.jpg",
    href: "/journal/planning-multi-day-cycling-tours",
  },
];

const faqs = [
  {
    question: "Is Morocco suitable for a road cycling holiday?",
    answer:
      "Morocco offers mountain climbs, rural roads, valleys and coastal routes that can suit a range of road cyclists. Route suitability depends on road surface, traffic, elevation, weather and the rider’s experience. Ask for a stage-by-stage plan and confirm current conditions before travelling.",
  },
  {
    question: "What fitness level do I need for the Atlas Mountain climbs?",
    answer:
      "It depends on the length and gradient of the climb, altitude, daily distance and how much climbing is repeated over several days. Share your usual weekly riding, the longest ride you are comfortable with and your preferred pace so the route can be discussed realistically.",
  },
  {
    question: "Can I bring my own road bike?",
    answer:
      "You can discuss travelling with your own bike. Confirm airline packing rules, transfer space, assembly time, luggage arrangements and what mechanical support is available. If you need a rental bike, ask about sizes, fit, gearing, pedals and the opportunity for a test ride before the first long stage.",
  },
  {
    question: "What bike and gearing are best for Morocco?",
    answer:
      "The best setup depends on the route profile, road surface, rider strength and expected daily climbing. Before departure, confirm the climbs and gradients on the planned itinerary, then choose gearing that allows a sustainable cadence. Tyres, brakes and the overall bike condition should suit the route and load.",
  },
  {
    question: "Are support vehicles and luggage transfers available?",
    answer:
      "Support varies by itinerary and needs to be confirmed for your dates. Ask whether a vehicle follows the route, which road sections it can reach, whether water or luggage is carried, how mechanical issues are handled and what happens if a rider cannot continue a stage.",
  },
  {
    question: "When is the best time for road cycling in Morocco?",
    answer:
      "There is no single best season for every region. Conditions vary between high mountain passes, Marrakech and other lowland areas, the south and the Atlantic Coast. Spring and autumn are often considered for many routes, but check expected temperatures, wind, precipitation and elevation-specific conditions for your actual itinerary.",
  },
];

export default function MoroccoRoadCyclingHolidaysPage() {
  return (
    <main className="road-cycling-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Morocco Road Cycling Holidays</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">ROAD CYCLING · MOUNTAIN PASSES · MOROCCO</p>
          <h1>Morocco Road Cycling Holidays</h1>
          <p className="article-deck">
            Morocco gives road cyclists a varied setting for long climbs, quiet rural stretches, mountain valleys and point-to-point journeys. The character of each ride depends on the road surface, traffic, elevation and weather. A rewarding holiday starts with a route that matches your experience and priorities, with realistic daily stages and the practical details confirmed before you travel.
          </p>
          <div className="article-meta"><span>7 MIN READ</span><span>ROAD CYCLING · MOROCCO</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/road-cycling-holiday-morocco.jpg" alt="Road cycling holiday through Morocco's varied landscapes" fetchPriority="high" />
          <figcaption>Choose a road route around the climbing, surfaces and daily distances you actually want to ride.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#why-road">Why choose Morocco for road cycling?</a>
          <a href="#route-types">Choose your route style</a>
          <a href="#climbs">Mountain climbs and pacing</a>
          <a href="#roads-safety">Road conditions and traffic</a>
          <a href="#regions">Where to ride</a>
          <a href="#season">Seasons and daily timing</a>
          <a href="#bike-equipment">Bike, kit and equipment</a>
          <a href="#support">Support and logistics</a>
          <a href="#plan-holiday">Plan your road cycling holiday</a>
          <a href="#road-checklist">Pre-trip checklist</a>
          <a href="#road-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            A road cycling holiday works best when the itinerary balances the riding itself with time to recover, eat well and enjoy the places along the way. Morocco can offer challenging mountain stages, scenic countryside and journeys that link different regions, but the best option is not necessarily the one with the biggest mileage. It is the one that fits your ability, preferred effort and the experience you want from the trip.
          </p>

          <section id="why-road">
            <h2>Why choose Morocco for a road cycling holiday?</h2>
            <p>
              The country’s geography creates a range of riding possibilities. In the High Atlas, roads climb toward mountain passes and traverse broad valleys. Around Marrakech, routes can move from the city’s outskirts towards rural foothills. Further south, the landscape opens into dry plains, oases and long-distance links between settlements, while the Atlantic region brings its own coastal character and wind considerations.
            </p>
            <p>
              This variety makes route planning important. A holiday designed around climbing and elevation will feel very different from a trip focused on steady endurance rides or a scenic point-to-point journey. Before choosing, consider the daily distance you enjoy, how much climbing feels manageable, whether you prefer repeated loops or moving between overnight stops, and how much non-riding time you want.
            </p>
            <figure className="article-inline-image"><img src="/images/adventure-road-cycling-morocco.jpg" alt="Road cyclists exploring a scenic road in Morocco" loading="lazy" /><figcaption>Scenic roads are most enjoyable when the route’s demands and daily rhythm suit the riders.</figcaption></figure>
            <div className="article-tip"><strong>Begin with your riding goals</strong><p>Decide whether the priority is climbing, endurance, landscapes, a personal challenge or a balanced cycling holiday. That decision helps narrow the regions, daily distances and support arrangements to discuss.</p></div>
          </section>

          <section id="route-types">
            <h2>Choose the right route style</h2>
            <h3>Mountain-pass journeys</h3>
            <p>
              A pass-focused itinerary suits riders who enjoy sustained climbs and the satisfaction of reaching a high point under their own power. The total ascent, gradient changes and altitude matter as much as the distance. Ask for the key climbs, approximate elevation gain, descent length and whether the stage includes a long transfer before or after the ride.
            </p>
            <h3>Road loops from a base</h3>
            <p>
              Staying in one area for several nights can reduce the need to move luggage every day and allow route options to change with the weather or group energy. Loops are useful when riders prefer familiar accommodation and a simpler logistics plan, though start points and roads should still be chosen to avoid unnecessarily busy sections where possible.
            </p>
            <h3>Point-to-point cycling holidays</h3>
            <p>
              Travelling between regions can make the holiday feel like a journey rather than a series of separate rides. It also adds planning needs: luggage transfers, accommodation availability, food and water stops, backup transport, and realistic stage distances. Build a schedule that leaves enough time at the end of the day for recovery and arrival logistics.
            </p>
            <div className="article-tip"><strong>Compare full stages, not just kilometres</strong><p>For each day, look at distance, ascent, road surface, traffic, stops, expected ride time and transfer time. These details offer a much clearer picture than mileage alone.</p></div>
          </section>

          <section id="climbs">
            <h2>Mountain climbs, elevation and sustainable pacing</h2>
            <p>
              The High Atlas can be a memorable setting for road riding, but climbing demands accumulate across a multi-day itinerary. Two routes of similar length can feel very different if one has a continuous ascent, repeated steep sections or higher elevation. Plan a pace you can sustain, especially when the following day also includes significant climbing.
            </p>
            <h3>Prepare for long ascents</h3>
            <p>
              Practise steady effort on climbs before travelling, and use gearing that lets you maintain a comfortable cadence without forcing a very hard gear. Start conservatively, eat and drink at regular intervals, and avoid turning every climb into a race. On a group trip, agree on regrouping points and remember that riders may need different amounts of time on a long ascent.
            </p>
            <h3>Descents deserve attention too</h3>
            <p>
              Long mountain descents can place sustained demands on braking, concentration and tyre condition. Keep a controlled speed, leave space, look ahead and respect visibility, road surface and other road users. Check the bike before each stage and be prepared to slow down if the surface, weather or traffic changes.
            </p>
            <figure className="article-inline-image"><img src="/images/7-days-cycling-road-from-marrakech.jpg" alt="Road cycling route from Marrakech toward Morocco's mountain landscapes" loading="lazy" /><figcaption>Build enough recovery time into an itinerary with repeated climbs and long descents.</figcaption></figure>
          </section>

          <section id="roads-safety">
            <h2>Road conditions, traffic awareness and safety</h2>
            <p>
              Road conditions can vary by route, from smooth paved stretches to rougher edges, broken surfaces or sections affected by weather and maintenance. Traffic levels also change around towns, junctions and popular routes. Do not assume that a road is quiet simply because it crosses a rural landscape; ask which sections are planned and what alternatives may be available if conditions are unsuitable.
            </p>
            <p>
              Ride predictably, communicate before changing position, signal clearly where appropriate and remain aware of vehicles approaching from behind or emerging at junctions. In a group, leave enough space for safe braking and avoid blocking narrow roads. Follow local traffic rules and the guide’s instructions, and use lights or high-visibility clothing when visibility calls for them.
            </p>
            <h3>Check the route before departure</h3>
            <p>
              Ask about current roadworks, known surface issues, traffic-heavy sections and the plan for weather-related changes. A guide or organiser should be able to explain the route and expected riding conditions for the itinerary, but no article can guarantee live road conditions. These should be checked close to travel and again before each stage if conditions are changing.
            </p>
            <div className="article-tip"><strong>Safety is part of route quality</strong><p>A scenic route is not automatically the best route. Prefer a plan that gives riders adequate visibility, reasonable traffic exposure, suitable road surfaces and time to ride without pressure.</p></div>
          </section>

          <section id="regions">
            <h2>Where to ride in Morocco</h2>
            <h3>High Atlas Mountains</h3>
            <p>
              The Atlas is a strong option for riders looking for elevation and mountain scenery. Routes can vary in length and difficulty, so discuss the specific passes, daily ascent, road surface and altitude rather than booking on the region name alone. Cooler conditions may be possible at higher points even when the lowlands are warm.
            </p>
            <h3>Marrakech and the foothills</h3>
            <p>
              Marrakech can be a convenient base or start point for road rides into the surrounding countryside and toward mountain areas. A thoughtful route plan considers how to leave the city, the amount of traffic near urban areas, the transfer distance to the ride start and whether a loop or point-to-point stage best fits your schedule.
            </p>
            <h3>Southern Morocco and longer routes</h3>
            <p>
              Southern routes can connect wide landscapes and settlements over longer distances. Food, water, shade, support and accommodation need to be planned carefully, especially on exposed stages. Check how remote the route is, where supplies are available and whether the support vehicle can reach the planned road sections.
            </p>
            <h3>Atlantic Coast</h3>
            <p>
              Coastal riding offers a different experience, often with more open horizons and a chance of wind affecting pace. The route should account for wind direction, exposure and road traffic around towns. A day with a headwind may take substantially more effort than the same distance in calmer conditions, so keep the schedule flexible enough to enjoy the ride.
            </p>
            <p><Link className="article-text-link" href="/destinations/atlas-mountains">Explore Atlas Mountains destinations ↗</Link> &nbsp; <Link className="article-text-link" href="/cycling-trips/road">Browse road cycling tours ↗</Link></p>
          </section>

          <section id="season">
            <h2>Seasons, weather and daily timing</h2>
            <p>
              There is no single best month for every road cycling route in Morocco. Mountain passes, lowland countryside, southern regions and the Atlantic Coast can experience different conditions at the same time. Temperature, wind, precipitation, altitude and daylight hours should all be considered when choosing dates and deciding how long a stage should be.
            </p>
            <p>
              For higher routes, bring layers for cool starts and changes in weather. On exposed or lower-altitude stages, sun protection and a dependable water plan become especially important. In warmer conditions, an early departure and regular replenishment breaks can help make the day more manageable. In all seasons, confirm the expected conditions for the actual route rather than relying only on a general seasonal rule.
            </p>
            <h3>Keep the daily plan realistic</h3>
            <p>
              Plan time for café or lunch stops, punctures, photographs and any regrouping the group needs. Avoid setting a timetable that leaves no margin for unexpected delays. If the itinerary combines several regions, consider the effect of transfers on rest and recovery instead of treating transfer days as if they have no physical cost.
            </p>
          </section>

          <section id="bike-equipment">
            <h2>Road bike, clothing and equipment</h2>
            <p>
              The right bike setup depends on the roads, elevation profile, rider comfort and how much luggage needs to be carried. Before departure, confirm whether a rental bike is available and ask about frame sizes, fit, gearing, brakes, tyres, pedals and bottle capacity. If you bring your own bike, check airline packing requirements, transfer space and how much time is available for assembly and adjustment.
            </p>
            <h3>Core equipment for a road cycling holiday</h3>
            <ul className="article-checklist">
              <li>A correctly fitted helmet, gloves, eye protection and suitable cycling shoes.</li>
              <li>Comfortable bib shorts or riding clothing, plus layers suited to the forecast and elevation.</li>
              <li>Enough bottle capacity for the route, with food and electrolyte options that suit your needs.</li>
              <li>Basic personal repair items, including spare tubes or a compatible puncture repair option.</li>
              <li>Sun protection, a small first-aid or personal essentials kit, and any required medication.</li>
              <li>Lights or reflective items when visibility, departure time or route conditions make them useful.</li>
            </ul>
            <p>
              Before the first stage, test the fit, shifting and braking, inspect tyres and wheels, and make sure the bike feels stable under normal riding conditions. Clarify which tools and spares the support team carries and which small items each rider should keep accessible.
            </p>
          </section>

          <section id="support">
            <h2>Support vehicles, luggage and trip logistics</h2>
            <p>
              Support arrangements can make a multi-day holiday more comfortable, but the details differ from one itinerary to another. Ask whether a vehicle accompanies the group, what it carries, which roads it can access and how it communicates with the riders. Confirm the plan for punctures, mechanical issues, illness, missed turns or a rider who needs to stop before the planned finish.
            </p>
            <p>
              For point-to-point trips, confirm where bags are collected and delivered, what luggage allowance applies, and whether the vehicle has enough room for bike cases or additional equipment. Accommodation, meals, transfers, water stops and mechanical support should be written clearly into the trip proposal so you can understand what is included and what you need to arrange yourself.
            </p>
            <div className="article-tip"><strong>Get the support plan in writing</strong><p>Ask what help is available on each stage and what alternatives exist if the route changes. Do not assume that every road, trail or remote region has continuous vehicle access or immediate assistance.</p></div>
          </section>

          <section id="plan-holiday">
            <h2>Plan a road cycling holiday that suits you</h2>
            <p>
              A useful enquiry includes your travel dates, group size, riding background, usual distance, preferred daily distance, climbing goals and whether you want a base-based trip or a point-to-point journey. Mention any equipment needs, accommodation preferences, rest-day ideas or places you especially want to see. With that information, the itinerary can be discussed around a clearer set of priorities.
            </p>
            <p>
              Ask for a proposed schedule with distance, climbing, road surface, expected ride time, planned stops, transfer details and the support arrangement for each day. Confirm inclusions, exclusions, payment terms, cancellation conditions and how changes caused by weather or road conditions are handled. Availability and specific services need to be confirmed for your dates.
            </p>
            <h3>Questions to settle before booking</h3>
            <ul className="article-checklist">
              <li><strong>Route:</strong> daily distance, ascent, key climbs, road surfaces and any traffic-heavy sections.</li>
              <li><strong>Pacing:</strong> expected riding time, rest stops, regrouping points and recovery between stages.</li>
              <li><strong>Bike:</strong> rental availability, sizing, gearing, pedals, helmet and pre-ride test time.</li>
              <li><strong>Support:</strong> vehicle access, luggage transfers, water, mechanical assistance and emergency communication.</li>
              <li><strong>Logistics:</strong> accommodation, meals, transfers, included services and additional costs.</li>
            </ul>
            <div className="article-author-note"><strong>Planning a road cycling holiday in Morocco?</strong><p>Share your preferred dates, group size and riding goals through our <Link href="/contact?request=morocco-road-cycling-holidays">trip enquiry page</Link>. We can discuss route options, bike arrangements, support and practical details for your proposed itinerary.</p></div>
          </section>

          <section id="road-checklist">
            <h2>Pre-trip checklist</h2>
            <ul className="article-checklist">
              <li>Choose the route around your climbing ability, preferred distance and experience with group road riding.</li>
              <li>Review each day’s distance, ascent, road conditions, traffic exposure and planned stops.</li>
              <li>Confirm bike setup, gearing, pedals, fit, spares and whether a test ride is available.</li>
              <li>Pack layers, sun protection, adequate water capacity, riding food and personal essentials.</li>
              <li>Ask exactly what the support vehicle, luggage transfers and mechanical arrangements cover.</li>
              <li>Check current conditions and agree how route changes or delays will be communicated.</li>
            </ul>
          </section>

          <section className="article-faq" id="road-faq">
            <h2>Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading">
            <div><p className="article-eyebrow">KEEP EXPLORING</p><h2>More guides for your Morocco ride.</h2></div>
            <Link className="article-text-link" href="/journal">View all journal articles ↗</Link>
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
          <div><p className="article-eyebrow">YOUR NEXT ADVENTURE</p><h2>Find your road through Morocco.</h2><p>Tell us about your dates, group, preferred distances and climbing goals, and start planning a road cycling trip around your priorities.</p></div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/contact?request=morocco-road-cycling-holidays">Plan Your Road Cycling Trip ↗</Link><Link className="article-button article-button-outline" href="/cycling-trips/road">Explore Road Tours</Link></div>
        </div>
      </section>

      <footer className="article-site-footer">
        <div className="article-shell article-footer-grid">
          <div className="article-footer-brand">
            <Link href="/" className="article-brand"><img src="/images/logo-mountain-bike-morocco-footer.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link>
            <p>Guided mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, trails and local culture at your own pace.</p>
          </div>
          <div><h3>Explore</h3><Link href="/cycling-trips">All Cycling Tours</Link><Link href="/cycling-trips/mtb">Mountain Bike Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil">Imlil Valley</Link><Link href="/destinations/toubkal">Mount Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let’s Plan</h3><Link href="/about">About Us</Link><Link href="/events">Events</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="article-shell article-footer-bottom"><span>© {new Date().getFullYear()} Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>

      <style>{`
        .road-cycling-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
        .article-shell{width:min(1180px,calc(100% - 48px));margin-inline:auto}
        .article-breadcrumbs{display:flex;flex-wrap:wrap;gap:10px;padding-top:25px;padding-bottom:20px;font-size:12px;color:#777168}
        .article-breadcrumbs a{color:inherit;text-decoration:none}.article-breadcrumbs a:hover{color:#c65c35}
        .article-hero{padding:44px 0 60px;display:grid;grid-template-columns:.95fr 1.05fr;gap:clamp(30px,5vw,68px);align-items:center}
        .article-eyebrow{font-size:11px;line-height:1.5;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#e7663b;margin:0 0 16px}
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
        @media(prefers-reduced-motion:reduce){.road-cycling-article *,.road-cycling-article *:before,.road-cycling-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
