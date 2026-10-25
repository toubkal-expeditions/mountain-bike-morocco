import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sahara Desert E-Bike Adventure | Mountain Bike Morocco",
  description:
    "Plan a Sahara-region electric mountain-bike adventure in Morocco with practical advice on terrain, battery range, charging, water, heat, support vehicles and route preparation.",
  alternates: { canonical: "/journal/sahara-desert-ebike-adventure" },
  openGraph: {
    title: "Sahara Desert E-Bike Adventure",
    description:
      "A practical guide to planning an E-MTB adventure in southern Morocco, covering terrain, battery strategy, water, support and route logistics.",
    type: "article",
    images: ["/images/sahara-desert-ebike-expeditions.jpg"],
  },
};

const relatedArticles = [
  {
    category: "DESERT DAY RIDES",
    title: "Agafay Desert Day Trips: Cycling Guide",
    text: "Learn how to plan a day ride on rocky desert-edge terrain near Marrakech, including timing, water and route choice.",
    image: "/images/Agafay-desert-morocco.jpg",
    href: "/journal/agafay-desert-day-trips-cycling-guide",
  },
  {
    category: "TRIP PLANNING",
    title: "Best Time to Visit Morocco for Cycling",
    text: "Compare regions and seasons before choosing dates for your preferred cycling style and route.",
    image: "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    href: "/journal/best-time-visit-morocco-cycling",
  },
  {
    category: "MULTI-DAY ADVENTURES",
    title: "Multi-Day Cycling Tours Planning",
    text: "Plan daily distance, accommodation, transfers, recovery time and support before setting off on a longer journey.",
    image: "/images/group-adventure-cycling-morocco.jpg",
    href: "/journal/planning-multi-day-cycling-tours",
  },
];

const faqs = [
  {
    question: "Can you ride an E-MTB through every type of Sahara terrain?",
    answer:
      "No. Deep, soft sand and some remote rocky tracks may be unsuitable for a particular bike or rider. Route choice needs to consider surface, tyres, bike weight, rider skill, access for support and current conditions. Ask for a route description rather than assuming all desert tracks are rideable.",
  },
  {
    question: "How far can an electric mountain bike travel on one charge?",
    answer:
      "There is no universal distance. Battery range is affected by battery capacity and condition, assistance mode, climbing, surface, wind, temperature, rider and luggage weight, tyre pressure and riding style. Plan from the actual bike and route, and keep a realistic reserve rather than relying only on a manufacturer's ideal-range estimate.",
  },
  {
    question: "Will there be charging points every day?",
    answer:
      "Do not assume so, especially on remote stages. Confirm overnight charging access, available power and sockets, time needed to recharge, and whether spare batteries or vehicle support are part of the plan. These details should be settled before confirming a multi-day route.",
  },
  {
    question: "How much water should I carry?",
    answer:
      "Water needs depend on temperature, exertion, distance, route exposure and access to reliable resupply. Ask the trip organiser for route-specific guidance and the plan for carrying and replenishing water. Do not rely on finding shops or safe water along remote stages unless this has been confirmed.",
  },
  {
    question: "Is an E-MTB desert expedition suitable for beginners?",
    answer:
      "Electric assistance can help with climbing, but it does not remove the need for balance, braking control, handling skills or stamina. Loose surfaces and remote conditions can be demanding. Share your experience honestly and ask for a route matched to your ability, including any sections where walking the bike may be expected.",
  },
  {
    question: "What should I check before booking?",
    answer:
      "Ask for the route outline, distance and elevation each day, surface types, battery and charging plan, water strategy, support access, accommodation, luggage arrangements, bike specifications and contingency procedures for mechanical or weather problems. Confirm what is included and what you must bring yourself.",
  },
];

export default function SaharaDesertEBikeAdventurePage() {
  return (
    <main className="sahara-ebike-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Sahara Desert E-Bike Adventure</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">E-MTB ADVENTURES · SOUTHERN MOROCCO</p>
          <h1>Sahara Desert E-Bike Adventure</h1>
          <p className="article-deck">
            An electric mountain-bike journey around Morocco’s desert regions can bring together stony plateaus, desert-edge tracks, oasis landscapes and remote roads. The best experience depends on choosing suitable terrain and planning the details carefully: battery range, charging, water, support and the pace of each day all matter as much as the scenery.
          </p>
          <div className="article-meta"><span>6 MIN READ</span><span>E-MTB · DESERT TRIP PLANNING</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/sahara-desert-ebike-expeditions.jpg" alt="Electric mountain biking on an expedition through southern Morocco" fetchPriority="high" />
          <figcaption>Plan around the real terrain, available power and support—not just the distance on the map.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#choose-terrain">Understand the terrain</a>
          <a href="#route-design">Design a realistic route</a>
          <a href="#battery-range">Battery range and charging</a>
          <a href="#water-heat">Water, heat and exposure</a>
          <a href="#support-mechanics">Support and mechanical planning</a>
          <a href="#bike-equipment">Bike setup and equipment</a>
          <a href="#daily-rhythm">A sensible daily rhythm</a>
          <a href="#booking-checklist">Before you book</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            A desert E-MTB adventure should feel remote and rewarding without leaving essentials to chance. In southern Morocco, route surfaces and resupply options can vary significantly. Electric assistance may help with climbs and longer distances, but it also introduces extra planning around battery charge, charging access, bike weight and technical support. A good itinerary accounts for these realities before the group starts riding.
          </p>

          <section id="choose-terrain">
            <h2>Understand the terrain before choosing a route</h2>
            <p>
              “Desert cycling” can describe many different landscapes. A route may use firm dirt roads, compacted tracks, stony plateaus, rocky lanes near settlements or sections of softer sand. These surfaces ride very differently, and a track that looks straightforward on a map may become slow or tiring when loose stones, corrugations or sand are involved.
            </p>
            <p>
              An E-MTB can be a suitable choice for varied off-road terrain when its tyres, suspension, gearing and rider skill match the route. It is not automatically a solution for deep sand or every rough track. Ask which sections are normally ridden, whether any sections may need to be walked, how technical features are handled and whether a support vehicle can access the route if needed.
            </p>
            <p>
              Make sure the intended ride fits the least experienced member of the group, not just the strongest rider. The route description should cover technical difficulty as well as distance and climbing, and should explain how the guide will adjust the day if the surface or conditions differ from expectations.
            </p>
            <div className="article-tip">
              <strong>Ask for specifics</strong>
              <p>Request a day-by-day outline that names the typical surfaces, distance, elevation gain, likely riding time and any sections where walking the bike could be necessary.</p>
            </div>
          </section>

          <section id="route-design">
            <h2>Design a realistic route through southern Morocco</h2>
            <p>
              A route should be shaped by your travel dates, group experience, available daylight, access to accommodation and the position of reliable resupply points. Avoid judging an itinerary only by its total distance: slow terrain, wind, heat, elevation changes and technical riding can make a shorter stage feel much more demanding than a longer ride on firm tracks.
            </p>
            <p>
              Ask whether the trip is a point-to-point journey or a series of rides based from a few overnight stops. Point-to-point routes can create a strong sense of crossing a landscape, but they need careful coordination of luggage, accommodation and transfers. A base-based itinerary may allow greater flexibility if the weather or riders' energy changes.
            </p>
            <p>
              Build in recovery time, particularly if riders are arriving after a long flight or unfamiliar with riding a loaded or electric mountain bike. It is better to leave room for a relaxed meal, a mechanical check and a change of plan than to schedule every day to the limit.
            </p>
          </section>

          <section id="battery-range">
            <h2>Plan battery range and charging carefully</h2>
            <p>
              Battery use depends on much more than kilometres. Climbing, loose surfaces, wind, temperature, rider and luggage weight, tyre choice, tyre pressure, assistance mode and the condition of the battery all influence how quickly power is consumed. A high-assistance setting may be useful on a steep section, but using it throughout the day can reduce the reserve available later.
            </p>
            <p>
              Before departure, learn the bike’s assistance modes and display, and agree with your guide how the group will manage battery use. Do not assume that everyone’s battery will last the same length of time, even if the bikes are the same model. Riders should know how to check charge, change modes and recognise when a conservative approach is needed.
            </p>
            <h3>Confirm the charging plan overnight</h3>
            <p>
              Remote accommodation may have different charging facilities from a hotel in a city. Confirm whether sockets are available, whether the group can safely charge all batteries at once, how long a full charge generally takes and whether charging is included in the overnight arrangements. If spare batteries or vehicle charging are part of the plan, clarify their availability and how they will be transported.
            </p>
            <p>
              Keep a reserve for unexpected detours, slower surfaces or an unplanned climb. Battery planning should be linked to the actual route and the exact bikes being provided, rather than an optimistic range figure considered in isolation.
            </p>
            <div className="article-tip">
              <strong>Battery rule of thumb</strong>
              <p>Plan the day around the most demanding stage, not the easiest kilometres. Ask the organiser to explain how the route changes if a battery drains faster than expected or a charging point is unavailable.</p>
            </div>
          </section>

          <section id="water-heat">
            <h2>Manage water, heat and exposure</h2>
            <p>
              Open landscapes can offer little shade, and conditions can feel very different from the temperature in a town or at the overnight stop. Water needs vary with weather, exertion, route length and individual physiology, so there is no single amount that suits every rider. The trip plan should specify how much capacity riders should carry and where reliable replenishment is expected.
            </p>
            <p>
              Ask whether water will be carried by riders, the guide or a support vehicle, and how the group will handle longer stretches without a confirmed refill point. Do not assume cafés, shops or safe drinking water will be available on remote tracks. Keep drinking and rest breaks realistic and tell the guide promptly if you feel unwell, unusually fatigued or affected by the heat.
            </p>
            <p>
              Sun protection, suitable clothing and a plan for cooler mornings or evening temperatures are also important. Depending on the season and route, riders may need a breathable sun layer, sunglasses, sunscreen, a light wind layer and enough clothing for a temperature drop after sunset. Follow local advice on timing and route choice when conditions become uncomfortable or unsafe.
            </p>
          </section>

          <section id="support-mechanics">
            <h2>Know what support and mechanical backup are available</h2>
            <p>
              Remote riding means that even a straightforward problem can take time to resolve. Before booking, ask what the guide carries, whether the group has access to a support vehicle, which sections are vehicle-accessible and what the response plan is if a bike develops a serious fault. Confirm how luggage and personal equipment will move between overnight stops.
            </p>
            <p>
              E-MTBs have both conventional bicycle components and electrical systems. A flat tyre, damaged chain or loose component may be repairable on the trail, while a motor or battery fault may require a different response. Discuss what spare parts and tools are available, how a replacement bike would be arranged if possible and how the day's plan changes if a repair takes longer than expected.
            </p>
            <p>
              A support vehicle can improve flexibility, but its availability should never be assumed for every narrow track or remote section. Ask about vehicle access and the communication plan. Riders should know who to contact, how the group regroups if separated and what to do if a phone has no signal.
            </p>
          </section>

          <section id="bike-equipment">
            <h2>Choose the right bike setup and personal equipment</h2>
            <p>
              The bike should fit comfortably and be appropriate for the surface and technical difficulty. Confirm frame sizes, tyre type, suspension, brakes, battery capacity, charger compatibility and whether pedals or helmets are included. If you use your own bike, ask about transport, assembly, charging equipment and the spares you should bring.
            </p>
            <p>
              Carry the essentials recommended for the specific route: helmet, gloves, eyewear, suitable riding shoes, layered clothing, sun protection, personal medication and enough hydration capacity for the planned stage. A small personal repair kit may be useful, but coordinate it with the support team so you know which tools and spares are already carried.
            </p>
            <p>
              Before the first long stage, test the bike controls and saddle position, practise changing assistance modes and check braking behaviour on an appropriate surface. Make sure the group is clear on battery charging arrangements and that chargers, keys and any removable components are accounted for before leaving accommodation.
            </p>
            <ul className="article-checklist">
              <li><strong>Bike fit:</strong> confirm frame size, saddle position, brake reach and control comfort.</li>
              <li><strong>Battery and charger:</strong> check compatibility, condition and the agreed overnight charging plan.</li>
              <li><strong>Tyres and brakes:</strong> confirm they suit the route and are checked before departure.</li>
              <li><strong>Personal kit:</strong> helmet, gloves, glasses, sun protection, layers and water capacity.</li>
              <li><strong>Repair arrangements:</strong> understand what you carry and what the guide or support vehicle provides.</li>
            </ul>
          </section>

          <section id="daily-rhythm">
            <h2>Build a daily rhythm that leaves room for the landscape</h2>
            <p>
              On an expedition, the most enjoyable day is not necessarily the longest one. Early starts may help avoid the warmest period, while a slower lunch stop or time to explore an oasis settlement can make the journey more memorable. The exact schedule depends on the season, route and accommodation, so ask for an outline rather than expecting every day to run identically.
            </p>
            <p>
              Start with a bike and safety check, review the route and confirm water and battery plans. Agree on regrouping points and the signals riders should use if they need to stop. During the day, keep the group at a pace that allows everyone to manage the terrain safely; electric assistance does not eliminate fatigue or the need for technical control.
            </p>
            <p>
              At the end of the stage, allow time to recharge batteries, inspect the bike, replenish supplies and prepare for the next day. If a route is delayed or conditions change, the guide should be able to discuss an adjustment without pressuring riders to continue beyond a sensible limit.
            </p>
          </section>

          <section id="booking-checklist">
            <h2>What to confirm before booking a Sahara E-MTB adventure</h2>
            <p>Use these questions to understand what is planned and what is included before you commit to dates.</p>
            <ul className="article-checklist">
              <li><strong>Route detail:</strong> daily distance, climbing, surface types, riding time and technical difficulty.</li>
              <li><strong>Battery strategy:</strong> the bike model, realistic expected range, charging facilities, spare-battery options and the contingency plan.</li>
              <li><strong>Water and food:</strong> carrying capacity, confirmed refill points, meal arrangements and remote-stage supplies.</li>
              <li><strong>Support and safety:</strong> guide arrangements, vehicle access, communications, first-aid provisions and mechanical backup.</li>
              <li><strong>Accommodation and transfers:</strong> overnight stops, luggage handling, bike transport and any transfer time not included in the ride.</li>
              <li><strong>Inclusions and exclusions:</strong> clarify bikes, helmets, charging, meals, transfers, spares and any extra costs in writing.</li>
            </ul>
            <p>
              A well-planned route balances adventure with good decision-making. Be candid about your riding experience, ask questions about anything unclear and choose an itinerary with enough flexibility to respond to conditions. The remote setting should be part of the appeal—not a reason to leave practical arrangements unresolved.
            </p>
            <div className="article-author-note">
              <strong>Planning note</strong>
              <p>This article provides general planning guidance, not live trail conditions or a fixed itinerary. Routes, services, charging access and weather vary. Confirm current details with the trip organiser and use a plan tailored to your dates, group and equipment.</p>
            </div>
          </section>

          <section className="article-faq" id="faq">
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
            <div><p className="article-eyebrow article-eyebrow-dark">KEEP EXPLORING</p><h2>More cycling guides for Morocco</h2></div>
            <Link className="article-text-link" href="/journal">View all journal articles ↗</Link>
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
          <div>
            <p className="article-eyebrow">PLAN YOUR DESERT RIDE</p>
            <h2>Make the adventure ambitious—and the logistics thoughtful.</h2>
            <p>Tell us about your riding experience, preferred dates and the kind of southern Morocco landscape you want to explore. We can discuss route options, battery and support arrangements, and the details to confirm before travel.</p>
          </div>
          <div className="article-cta-actions">
            <Link className="article-button article-button-light" href="/contact?request=sahara-ebike-adventure">Plan an E-MTB trip ↗</Link>
            <Link className="article-button article-button-outline" href="/destinations/sahara-desert">Explore Sahara tours ↗</Link>
          </div>
        </div>
      </section>

      <footer className="article-site-footer">
        <div className="article-shell article-footer-grid">
          <div className="article-footer-brand">
            <Link className="article-brand" href="/"><img src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link>
            <p>Guided mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, trails and local culture at your own pace.</p>
          </div>
          <div><h3>Explore</h3><Link href="/cycling-trips">All Cycling Tours</Link><Link href="/cycling-trips/mtb">Mountain Bike Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil">Imlil Valley</Link><Link href="/destinations/toubkal">Mount Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let&apos;s Plan</h3><Link href="/about">About Us</Link><Link href="/events">Events</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="article-shell article-footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span></div>
      </footer>

      <style>{`
        .sahara-ebike-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
        .article-shell{width:min(1180px,calc(100% - 48px));margin-inline:auto}
        .article-breadcrumbs{display:flex;flex-wrap:wrap;gap:10px;padding-top:25px;padding-bottom:20px;font-size:12px;color:#777168}
        .article-breadcrumbs a{color:inherit;text-decoration:none}.article-breadcrumbs a:hover{color:#c65c35}
        .article-hero{padding:44px 0 60px;display:grid;grid-template-columns:.95fr 1.05fr;gap:clamp(30px,5vw,68px);align-items:center}
        .article-eyebrow{font-size:11px;line-height:1.5;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#e7663b;margin:0 0 16px}
        .article-eyebrow-dark{color:#bd542f}
        .article-hero h1{font-size:clamp(42px,5.8vw,76px);line-height:.99;letter-spacing:-.055em;margin:0 0 22px;max-width:700px}
        .article-deck{font-size:18px;line-height:1.8;color:#5d5953;margin:0;max-width:660px}
        .article-meta{display:flex;flex-wrap:wrap;gap:18px;margin-top:25px;font-size:10px;font-weight:800;letter-spacing:.13em;color:#777168}
        .article-hero-image{margin:0;position:relative;min-width:0}.article-hero-image img{display:block;width:100%;height:clamp(320px,40vw,515px);object-fit:cover}.article-hero-image figcaption{padding:10px 0 0;font-size:12px;color:#777168}
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
        .article-cta{padding:65px 0;background:#23231f;color:#fff}.article-cta-inner{display:flex;justify-content:space-between;align-items:center;gap:35px}.article-cta .article-eyebrow{color:#f18b60}.article-cta h2{font-size:clamp(32px,4vw,48px);line-height:1.05;letter-spacing:-.04em;max-width:600px;margin:0 0 14px}.article-cta-inner>div:first-child>p:last-child{max-width:650px;color:#d1cdc5;margin:0}.article-cta-actions{display:flex;flex-wrap:wrap;gap:12px;flex-shrink:0}.article-button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 17px;font-size:12px;font-weight:800;text-decoration:none;transition:background .2s ease,color .2s ease}.article-button-light{background:#e7663b;color:#fff}.article-button-light:hover{background:#d6522a}.article-button-outline{border:1px solid #8f8b82;color:#fff}.article-button-outline:hover{background:#fff;color:#24221e}
        .article-site-footer{background:#181815;color:#fff;padding-top:55px}.article-footer-grid{display:grid;grid-template-columns:1.4fr repeat(3,minmax(0,1fr));gap:40px;padding-bottom:45px}.article-footer-grid>div{display:flex;flex-direction:column;align-items:flex-start;gap:11px}.article-footer-grid h3{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:#e98258;margin:0 0 7px}.article-footer-grid a:not(.article-brand){color:#d1cec7;font-size:13px;text-decoration:none}.article-footer-grid a:not(.article-brand):hover{color:#fff}.article-brand{display:flex;flex-direction:column;gap:12px;text-decoration:none;color:#fff;font-size:13px;font-weight:800;letter-spacing:.07em}.article-brand img{width:185px;max-height:60px;object-fit:contain;object-position:left center}.article-brand em{font-style:normal;color:#e98258;margin-left:5px}.article-footer-brand p{max-width:290px;font-size:13px;line-height:1.8;color:#aaa69d;margin:6px 0 0}.article-footer-bottom{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:1px solid #393832;padding-top:18px;padding-bottom:20px;color:#a9a59d;font-size:11px}
        @media(max-width:900px){.article-hero{grid-template-columns:1fr;gap:28px;padding-top:22px}.article-hero h1{max-width:850px}.article-hero-image img{height:clamp(290px,58vw,480px)}.article-main-grid{grid-template-columns:1fr;padding-top:0}.article-toc{position:static;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 18px}.article-toc p{grid-column:1/-1}.article-related-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.article-cta-inner{align-items:flex-start;flex-direction:column}.article-footer-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:32px 22px}.article-footer-brand{grid-column:1/-1}}
        @media(max-width:560px){.article-shell{width:calc(100% - 34px)}.article-hero{padding-top:20px;padding-bottom:40px}.article-hero h1{font-size:43px}.article-deck{font-size:16px}.article-main-grid{padding-bottom:58px}.article-body{font-size:15px}.article-body .article-lead{font-size:18px}.article-toc{padding:16px;grid-template-columns:1fr 1fr}.article-related{padding:54px 0}.article-section-heading{align-items:flex-start;flex-direction:column;gap:15px}.article-related-grid{grid-template-columns:1fr}.article-related-image img{height:235px}.article-cta{padding:50px 0}.article-cta-actions{width:100%;flex-direction:column}.article-button{width:100%}.article-footer-grid{grid-template-columns:1fr 1fr;gap:28px 16px}.article-brand img{width:155px}.article-footer-grid>div{min-width:0}.article-footer-grid a:not(.article-brand){font-size:12px}.article-footer-bottom{flex-direction:column;gap:7px}}
        @media(prefers-reduced-motion:reduce){.sahara-ebike-article *,.sahara-ebike-article *:before,.sahara-ebike-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
