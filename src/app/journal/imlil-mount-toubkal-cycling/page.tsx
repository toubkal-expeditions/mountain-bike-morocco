import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Imlil and Mount Toubkal Cycling Guide | Mountain Bike Morocco",
  description:
    "Explore cycling around Imlil and the Mount Toubkal region with practical guidance on terrain, altitude, route choice, seasons, village etiquette, equipment and trip planning.",
  alternates: { canonical: "/journal/imlil-mount-toubkal-cycling" },
  openGraph: {
    title: "Imlil and Mount Toubkal Cycling Guide",
    description:
      "Plan an Imlil and Toubkal-region cycling trip with practical advice on routes, elevation, bike choice, mountain conditions and local culture.",
    type: "article",
    images: ["/images/imlil-cycling-adventure-tour.jpeg"],
  },
};

const relatedArticles = [
  {
    category: "DESTINATION GUIDES",
    title: "Complete High Atlas Mountains Cycling Guide",
    text: "Compare terrain, elevation, seasons and practical logistics across the High Atlas.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/journal/complete-high-atlas-mountains-cycling-guide",
  },
  {
    category: "MOUNTAIN BIKE GUIDES",
    title: "The Best MTB Trails in the Atlas Mountains",
    text: "Understand the mix of rocky traverses, village tracks and singletrack in the Atlas.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/journal/best-mtb-trails-atlas-mountains",
  },
  {
    category: "E-MTB ADVENTURES",
    title: "Atlas Mountains E-Bike Tours",
    text: "Learn how battery range, climbing and support affect an electric-assisted mountain ride.",
    image: "/images/atlas-mountains-ebike-tour.jpg",
    href: "/journal/atlas-mountains-e-bike-tours",
  },
];

const faqs = [
  {
    question: "Is Imlil suitable for every type of cycling?",
    answer:
      "The wider region offers different surfaces and gradients, but not every route suits every bike. Road cycling is best planned around suitable paved roads; gravel routes need a surface and gradient mix that fits the bike; rougher, steeper tracks may call for an MTB or E-MTB. Confirm the actual route rather than choosing by destination name alone.",
  },
  {
    question: "Can I cycle to Mount Toubkal summit?",
    answer:
      "Mount Toubkal is primarily a trekking summit objective, not a standard cycling summit route. Cycling plans should use appropriate roads and trails in the surrounding region and respect access restrictions, pedestrian routes and local guidance. Do not assume a trekking path is rideable or suitable for bicycles.",
  },
  {
    question: "How does altitude affect cycling near Imlil?",
    answer:
      "Higher routes can feel more demanding because of climbing, thinner air, cooler temperatures and exposure to changing weather. Increase effort gradually, keep the daily plan realistic, and tell your guide about your fitness and recent riding experience. Anyone concerned about altitude or a medical issue should seek suitable professional advice before travelling.",
  },
  {
    question: "When is a good time to cycle around Imlil?",
    answer:
      "Conditions vary by elevation and year. Spring and autumn can be appealing for many routes, but high areas may be cold, windy or affected by snow or recent weather, while summer sun can be strong on exposed sections. Check conditions for the exact route and travel dates before setting out.",
  },
  {
    question: "Should I bring my own bike or arrange one locally?",
    answer:
      "Either option may be possible depending on your itinerary and the equipment available. If bringing your own bike, consider airline packing rules, transfers and assembly time. If arranging a bike, confirm size, type, fit, pedals, helmet, condition and included spares before booking.",
  },
  {
    question: "What should I ask before booking a cycling trip near Imlil?",
    answer:
      "Ask for route distance, ascent, surface, technical difficulty, start and finish points, transfer time, water and meal arrangements, equipment, mechanical support and the plan if weather changes. Also confirm accommodation, luggage handling, inclusions, exclusions and whether the proposed itinerary matches your group’s ability.",
  },
];

export default function ImlilMountToubkalCyclingPage() {
  return (
    <main className="imlil-toubkal-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Imlil and Mount Toubkal Cycling</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">DESTINATION GUIDE · HIGH ATLAS · MOROCCO</p>
          <h1>Imlil and Mount Toubkal Cycling</h1>
          <p className="article-deck">
            Imlil is a mountain base for exploring valleys and routes across the wider Toubkal region. Cycling here rewards thoughtful planning: road access, elevation, technical difficulty and changing mountain conditions all influence the ride. This guide explains how to choose a suitable cycling style, plan stages realistically and enjoy the area while respecting village life and local access guidance.
          </p>
          <div className="article-meta"><span>6 MIN READ</span><span>IMLIL · MOUNT TOUBKAL · CYCLING</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/imlil-cycling-adventure-tour.jpeg" alt="Cycling adventure in the mountain landscape near Imlil and Mount Toubkal" fetchPriority="high" />
          <figcaption>Plan around the route surface, elevation and conditions, rather than assuming every track is suitable for cycling.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#imlil-cycling">Cycling around Imlil</a>
          <a href="#toubkal-region">The Toubkal region</a>
          <a href="#choose-discipline">Choose your cycling style</a>
          <a href="#routes-difficulty">Route difficulty and elevation</a>
          <a href="#conditions-season">Weather and seasons</a>
          <a href="#equipment-support">Equipment and support</a>
          <a href="#villages-culture">Village etiquette and culture</a>
          <a href="#day-or-multiday">Day rides or multi-day trips</a>
          <a href="#responsible-riding">Responsible riding</a>
          <a href="#imlil-checklist">Pre-trip checklist</a>
          <a href="#imlil-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            The Imlil area combines steep mountain slopes, terraced valleys, villages and access routes into the High Atlas. That variety creates options for different cycling styles, but the landscape is not a purpose-built bike park: roads, paths and tracks have different users and may change with weather, maintenance and local activity. The best trip is one that matches your riding level and follows a route confirmed for the conditions.
          </p>

          <section id="imlil-cycling">
            <h2>Cycling around Imlil</h2>
            <p>
              Imlil sits in a dramatic mountain setting and is a natural base for exploring the surrounding valleys. A cycling day might focus on paved mountain roads, rural tracks, rougher trail sections or a mix of riding and short transfers. The right choice depends on how much time you have, how technical you want the route to be and how much climbing your group is comfortable with.
            </p>
            <p>
              Before choosing a route, ask where the ride starts and finishes, what proportion is on asphalt or dirt, whether any sections are narrow or steep, and how the route returns to the base. If a description simply says “Atlas trails,” ask for practical details such as distance, ascent, surface and technical features.
            </p>
            <figure className="article-inline-image"><img src="/images/atlas-berber-valley-bike.JPG" alt="Cycling through a mountain valley near traditional settlements in the Atlas region" loading="lazy" /><figcaption>Valley routes can combine mountain views with village roads and tracks; the exact surface should be confirmed for each ride.</figcaption></figure>
            <div className="article-tip"><strong>Start with the route, not the label</strong><p>Ask for the planned distance, climbing, surface and technical difficulty before deciding whether to ride a road bike, gravel bike, MTB or E-MTB.</p></div>
          </section>

          <section id="toubkal-region">
            <h2>Understanding the Mount Toubkal region</h2>
            <p>
              Mount Toubkal is best known as a trekking objective, while cycling itineraries explore appropriate roads and tracks in the surrounding mountain region. A trekking path is not automatically rideable, and some routes are narrow, steep, busy with walkers or unsuitable for bicycles. Respect local access guidance and never assume a summit trail is part of a cycling itinerary.
            </p>
            <p>
              Routes in the wider area can involve significant elevation changes, loose surfaces and exposed sections. Travel time may include transfers from Marrakech or between valleys, so consider logistics alongside the kilometres you expect to ride. A realistic itinerary leaves time for stops, changing conditions and enjoyment of the landscape.
            </p>
          </section>

          <section id="choose-discipline">
            <h2>Choose the cycling style that fits your trip</h2>
            <h3>Mountain biking</h3>
            <p>MTB is the most flexible choice for rougher tracks and more technical terrain. Select a route that fits your handling skills and comfort with loose rock, tight turns and steep gradients. A local guide can help identify suitable lines and sections where walking is the safer choice.</p>
            <h3>Gravel cycling</h3>
            <p>Gravel can work well when the route mixes paved roads with manageable dirt or hardpack. Check the roughest surface, tyre clearance, gearing and climbing before choosing a lightweight setup. Some mountain tracks may be too steep or rocky for the gravel riding experience your group expects.</p>
            <h3>Road cycling</h3>
            <p>Road cycling is best planned around appropriate paved roads, traffic levels, road conditions and the amount of climbing. Confirm the stage profile and whether any transfer sections are needed to avoid unsuitable or busy road segments.</p>
            <h3>E-MTB</h3>
            <p>An electric mountain bike can help riders manage sustained climbs, but the bike still requires confident control on descents and uneven ground. Battery use rises with elevation, terrain, rider load and assistance mode, so charging and support plans matter on longer routes.</p>
          </section>

          <section id="routes-difficulty">
            <h2>Route difficulty, climbing and altitude</h2>
            <p>
              A route’s distance alone does not explain how demanding it will feel. Climbing, altitude, road surface, loose stones, steep ramps and the number of technical descents can make a shorter ride surprisingly tiring. Ask for the total ascent and a stage-by-stage outline, along with details of any sections that involve pushing or carrying a bike.
            </p>
            <p>
              Be realistic about recent riding experience and fitness. If you have not ridden at elevation recently, avoid planning every day around a personal best. A good itinerary balances the challenge with breaks, food, water and enough time to make decisions calmly when terrain or weather changes.
            </p>
            <div className="article-tip"><strong>Share your riding experience honestly</strong><p>Tell your organiser the type of terrain you are used to, your typical ride length, your climbing comfort and any technical features you prefer to avoid.</p></div>
          </section>

          <section id="conditions-season">
            <h2>Weather and the best time to ride</h2>
            <p>
              Conditions can differ sharply between lower valleys and higher mountain routes. Spring and autumn may offer comfortable riding in many areas, but weather varies by year and elevation. Higher sections can be cold, windy or affected by snow, while exposed lower routes can be hot and sunny. Check the outlook for the exact route and dates, rather than relying only on a general seasonal recommendation.
            </p>
            <p>
              Carry layers suitable for early starts and changing conditions. If the itinerary includes high passes or remote terrain, ask how the guide will respond to poor weather, whether an alternative route is available and how the group will receive updates. Flexibility is especially valuable when combining different elevations over several days.
            </p>
          </section>

          <section id="equipment-support">
            <h2>Equipment, bike setup and support</h2>
            <p>
              The right equipment depends on the cycling style, surface and support included. Confirm bike type, frame size, fit, pedals, helmet availability, tyre setup, brakes and the condition of the drivetrain if you are arranging a bike locally. If travelling with your own bike, consider airline packing rules, transfers, assembly time and spare parts for your specific components.
            </p>
            <p>
              Ask what tools and spares the support team carries, how mechanical issues are handled and whether luggage or a support vehicle is included. On an E-MTB trip, clarify battery capacity, charging arrangements and how the daily route accommodates different battery levels. Do not assume power or parts will be available in remote areas.
            </p>
            <figure className="article-inline-image"><img src="/images/imlil-cycling-adventure-tour.jpeg" alt="Cycling equipment and a mountain bike ready for a ride in the Imlil area" loading="lazy" /><figcaption>Confirm bike fit, spares and support arrangements before travel so the plan matches the route.</figcaption></figure>
          </section>

          <section id="villages-culture">
            <h2>Village etiquette and cultural respect</h2>
            <p>
              The villages and valleys around Imlil are lived-in places, not just scenery. Ride at a controlled speed near people, livestock and homes; give walkers space; and follow your guide’s advice about passing through settlements or using private tracks. When stopping, keep access clear and avoid blocking doorways or narrow paths.
            </p>
            <p>
              Ask permission before photographing people, homes or private activities, and respect a refusal without argument. Supporting local businesses where appropriate and following guidance from local hosts helps keep the experience considerate and mutually beneficial. Pack out rubbish and avoid shortcuts that widen trails or damage fields and terraces.
            </p>
          </section>

          <section id="day-or-multiday">
            <h2>Day rides or multi-day cycling trips?</h2>
            <p>
              A day ride can be a good way to experience the region without moving luggage between overnight stops. It may suit visitors with limited time or riders who want to pair cycling with other activities. Confirm transfer duration, time on the bike, start location, refreshments and the expected return time before finalising your plans.
            </p>
            <p>
              Multi-day journeys can connect several valleys and riding areas, but they require realistic daily stages, accommodation plans, luggage handling and recovery time. Ask for the full itinerary including where each day starts and ends, what is included, how transfers work and what happens if weather affects a route.
            </p>
            <p>For a tailored itinerary, share your dates, group size, experience, preferred cycling discipline and the kind of landscapes you want to explore.</p>
            <Link className="article-text-link" href="/contact?request=imlil-toubkal-cycling-planning">Plan an Imlil cycling trip <span aria-hidden="true">↗</span></Link>
          </section>

          <section id="responsible-riding">
            <h2>Responsible riding in the High Atlas</h2>
            <p>
              Choose established routes, give pedestrians and animals priority, slow down around villages and avoid riding through crops or private areas. If the trail narrows or becomes unsafe, dismount and walk where appropriate. Follow any local access restrictions and adapt the plan if conditions have changed since the route was prepared.
            </p>
            <p>
              Bring reusable water containers where practical, take all rubbish with you and avoid leaving food packaging at viewpoints. Treat local guides and hosts as partners whose knowledge helps you understand the region and make appropriate decisions about routes and stops.
            </p>
          </section>

          <section id="imlil-checklist">
            <h2>Pre-trip checklist</h2>
            <ul className="article-checklist">
              <li><strong>Route:</strong> Confirm distance, ascent, surfaces, technical grade and start/finish points.</li>
              <li><strong>Conditions:</strong> Check the forecast, altitude, daylight and any access changes for the planned date.</li>
              <li><strong>Bike:</strong> Confirm type, size, fit, pedals, helmet, tyres, brakes and spares.</li>
              <li><strong>Support:</strong> Understand transfer, luggage, food, water, mechanical and emergency arrangements.</li>
              <li><strong>Group:</strong> Share each rider’s experience, fitness, preferences and any relevant needs.</li>
              <li><strong>Inclusions:</strong> Clarify accommodation, meals, equipment, transfers, exclusions and payment terms.</li>
            </ul>
          </section>

          <section className="article-faq" id="imlil-faq">
            <h2>Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>Planning note</strong>
            <p>This guide provides general trip-planning information, not live trail or weather reports. Confirm the route, access, equipment and current conditions with your organiser before travelling.</p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading"><div><p className="article-eyebrow">KEEP EXPLORING</p><h2>Related cycling guides</h2></div><Link className="article-text-link" href="/journal">View all journal articles ↗</Link></div>
          <div className="article-related-grid">
            {relatedArticles.map((article) => (
              <article className="article-related-card" key={article.href}>
                <Link href={article.href} className="article-related-image"><img src={article.image} alt={article.title} loading="lazy" /></Link>
                <div className="article-related-content"><p className="article-eyebrow">{article.category}</p><h3><Link href={article.href}>{article.title}</Link></h3><p>{article.text}</p><Link className="article-text-link" href={article.href}>Read article ↗</Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="article-cta">
        <div className="article-shell article-cta-inner">
          <div><p className="article-eyebrow">READY TO RIDE THE HIGH ATLAS?</p><h2>Plan an Imlil cycling experience that fits your group.</h2><p>Share your dates, cycling style and preferred level of challenge so the route and practical arrangements can be discussed before you book.</p></div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/contact?request=imlil-toubkal-cycling-planning">Plan Your Trip ↗</Link><Link className="article-button article-button-outline" href="/destinations/imlil">Explore Imlil</Link></div>
        </div>
      </section>

      <footer className="article-site-footer">
        <div className="article-shell article-footer-grid">
          <div className="article-footer-brand"><Link className="article-brand" href="/"><img src="/images/logo-mountain-bike-morocco-footer.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link><p>Guided mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, trails and local culture at your own pace.</p></div>
          <div><h3>Explore</h3><Link href="/cycling-trips">All Cycling Tours</Link><Link href="/cycling-trips/mtb">Mountain Bike Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil">Imlil Valley</Link><Link href="/destinations/toubkal">Mount Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let's Plan</h3><Link href="/about">About Us</Link><Link href="/events">Events</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="article-shell article-footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>

      <style>{`
        .imlil-toubkal-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
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
        .article-inline-image{margin:28px 0 24px}.article-inline-image img{display:block;width:100%;max-height:430px;object-fit:cover}.article-inline-image figcaption{padding-top:10px;color:#777168;font-size:12px;line-height:1.6}
        .article-tip{margin:26px 0;padding:23px 25px;background:#eeeae2;border-left:3px solid #c65c35}.article-tip strong{display:block;margin-bottom:6px;color:#25231f}.article-tip p{margin:0}
        .article-checklist{margin:10px 0 24px;padding-left:23px}.article-checklist li{padding-left:5px;margin:0 0 12px;line-height:1.8}.article-checklist strong{color:#24221e}
        .article-body a{color:#bd542f}.article-text-link{font-size:13px;font-weight:800;text-decoration:none;color:#bd542f}.article-text-link:hover{text-decoration:underline}
        .article-faq details{border-top:1px solid #dcd8d0;padding:18px 0}.article-faq details:last-child{border-bottom:1px solid #dcd8d0}.article-faq summary{cursor:pointer;list-style:none;font-size:16px;font-weight:700;color:#24221e}.article-faq summary::-webkit-details-marker{display:none}.article-faq summary:after{content:'+';float:right;color:#c65c35;font-size:22px}.article-faq details[open] summary:after{content:'−'}.article-faq details p{margin:13px 0 0;color:#625e57}
        .article-author-note{padding:22px 24px;background:#fff;border:1px solid #e0ddd6}.article-author-note strong{display:block;color:#24221e;margin-bottom:6px}.article-author-note p{margin:0;font-size:14px}
        .article-related{padding:76px 0 86px;background:#f0eee8}.article-section-heading{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:30px}.article-section-heading h2{font-size:clamp(30px,4vw,45px);line-height:1.1;letter-spacing:-.04em;margin:0}.article-related-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}.article-related-card{background:#fff;border:1px solid #e0ddd6;min-width:0}.article-related-image{display:block;overflow:hidden}.article-related-image img{display:block;width:100%;height:220px;object-fit:cover;transition:transform .3s ease}.article-related-image:hover img{transform:scale(1.03)}.article-related-content{padding:22px}.article-related-content .article-eyebrow{font-size:9px;margin-bottom:10px}.article-related-content h3{font-size:21px;line-height:1.2;margin:0 0 10px;letter-spacing:-.02em}.article-related-content h3 a{color:inherit;text-decoration:none}.article-related-content h3 a:hover{color:#bd542f}.article-related-content>p:not(.article-eyebrow){color:#68645d;font-size:13px;line-height:1.7;margin:0 0 17px}
        .article-cta{padding:65px 0;background:#23231f;color:#fff}.article-cta-inner{display:flex;justify-content:space-between;align-items:center;gap:35px}.article-cta .article-eyebrow{color:#f18b60}.article-cta h2{font-size:clamp(32px,4vw,48px);line-height:1.05;letter-spacing:-.04em;max-width:600px;margin:0 0 14px}.article-cta-inner>div:first-child>p:last-child{max-width:650px;color:#d1cdc5;margin:0;line-height:1.8}.article-cta-actions{display:flex;flex-wrap:wrap;gap:12px;flex-shrink:0}.article-button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 17px;font-size:12px;font-weight:800;text-decoration:none;transition:background .2s ease,color .2s ease}.article-button-light{background:#e7663b;color:#fff!important}.article-button-light:hover{background:#d6522a}.article-button-outline{border:1px solid #8f8b82;color:#fff!important}.article-button-outline:hover{background:#fff;color:#24221e!important}
        .article-site-footer{background:#181815;color:#fff;padding-top:55px}.article-footer-grid{display:grid;grid-template-columns:1.4fr repeat(3,minmax(0,1fr));gap:40px;padding-bottom:45px}.article-footer-grid>div{display:flex;flex-direction:column;align-items:flex-start;gap:11px}.article-footer-grid h3{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:#e98258;margin:0 0 7px}.article-footer-grid a:not(.article-brand){color:#d1cec7;font-size:13px;text-decoration:none}.article-footer-grid a:not(.article-brand):hover{color:#fff}.article-brand{display:flex;flex-direction:column;gap:12px;text-decoration:none;color:#fff;font-size:13px;font-weight:800;letter-spacing:.07em}.article-brand img{width:185px;max-height:60px;object-fit:contain;object-position:left center}.article-brand em{font-style:normal;color:#e98258;margin-left:5px}.article-footer-brand p{max-width:290px;font-size:13px;line-height:1.8;color:#aaa69d;margin:6px 0 0}.article-footer-bottom{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:1px solid #393832;padding-top:18px;padding-bottom:20px;color:#a9a59d;font-size:11px}.article-footer-bottom a{color:inherit;text-decoration:none}.article-footer-bottom a:hover{color:#fff}
        @media(max-width:900px){.article-hero{grid-template-columns:1fr;gap:28px;padding-top:22px}.article-hero h1{max-width:850px}.article-hero-image img{height:clamp(290px,58vw,480px)}.article-main-grid{grid-template-columns:1fr;padding-top:0}.article-toc{position:static;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 18px}.article-toc p{grid-column:1/-1}.article-related-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.article-cta-inner{align-items:flex-start;flex-direction:column}.article-footer-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:32px 22px}.article-footer-brand{grid-column:1/-1}}
        @media(max-width:560px){.article-shell{width:calc(100% - 34px)}.article-hero{padding-top:20px;padding-bottom:40px}.article-hero h1{font-size:43px}.article-deck{font-size:16px}.article-main-grid{padding-bottom:58px}.article-body{font-size:15px}.article-body .article-lead{font-size:18px}.article-toc{padding:16px;grid-template-columns:1fr 1fr}.article-related{padding:54px 0}.article-section-heading{align-items:flex-start;flex-direction:column;gap:15px}.article-related-grid{grid-template-columns:1fr}.article-related-image img{height:235px}.article-cta{padding:50px 0}.article-cta-actions{width:100%;flex-direction:column}.article-button{width:100%}.article-footer-grid{grid-template-columns:1fr 1fr;gap:28px 16px}.article-brand img{width:155px}.article-footer-grid>div{min-width:0}.article-footer-grid a:not(.article-brand){font-size:12px}.article-footer-bottom{flex-direction:column;gap:7px}}
        @media(prefers-reduced-motion:reduce){.imlil-toubkal-article *,.imlil-toubkal-article *:before,.imlil-toubkal-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
