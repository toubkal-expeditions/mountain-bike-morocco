import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cycling Essaouira & the Atlantic Coast | Mountain Bike Morocco",
  description:
    "Plan cycling around Essaouira and Morocco's Atlantic Coast with practical advice on coastal routes, wind, rural tracks, road cycling, gravel, MTB and trip logistics.",
  alternates: { canonical: "/journal/cycling-essaouira-atlantic-coast" },
  openGraph: {
    title: "Cycling Essaouira & the Atlantic Coast",
    description:
      "A practical guide to cycling near Essaouira and Morocco's Atlantic Coast, including route choice, wind, road surfaces, equipment and responsible travel.",
    type: "article",
    images: ["/images/essaouira-cycling-holiday.jpg"],
  },
};

const relatedArticles = [
  {
    category: "GRAVEL CYCLING",
    title: "Complete Gravel Bike Morocco",
    text: "Plan gravel routes with useful guidance on surfaces, tyres, navigation, daily distance, water and multi-day support.",
    image: "/images/gravel-bike-tour-morocco.jpg",
    href: "/journal/complete-gravel-bike-morocco",
  },
  {
    category: "ROAD CYCLING",
    title: "Morocco Road Cycling Holidays",
    text: "Explore road cycling logistics, mountain climbs, traffic awareness, support and planning routes across Morocco.",
    image: "/images/road-cycling-holiday-morocco.jpg",
    href: "/journal/morocco-road-cycling-holidays",
  },
  {
    category: "ROUTE INSPIRATION",
    title: "Best Cycling Routes From Marrakech",
    text: "Compare possible rides from Marrakech, from nearby countryside and rocky terrain to longer journeys towards the mountains.",
    image: "/images/atlas-marrakech-cycling-tour.jpg",
    href: "/journal/best-cycling-routes-from-marrakech",
  },
];

const faqs = [
  {
    question: "Is Essaouira good for cycling?",
    answer:
      "It can be a rewarding base for coastal rides, rural tracks and longer journeys, depending on the route and riding style. Wind, road surface, traffic, distance between services and the group's experience should all be considered when choosing an itinerary.",
  },
  {
    question: "Which bike is best for the Atlantic Coast?",
    answer:
      "A road bike suits planned paved routes, while a gravel bike can be useful where the itinerary includes suitable dirt and rural tracks. MTB or E-MTB may fit rougher trails and uneven sections. Confirm the surfaces and technical demands for the exact route before choosing or hiring a bike.",
  },
  {
    question: "How much does wind affect coastal cycling?",
    answer:
      "Wind can noticeably change effort and comfort, especially on exposed roads and open tracks. A headwind may slow the group, while crosswinds can affect handling. Route direction, sheltered sections, clothing and the option to adjust daily distance are worth discussing during planning.",
  },
  {
    question: "Can I do a day ride or a multi-day tour?",
    answer:
      "Both formats can be considered. A day ride needs a practical start point and return plan; a multi-day trip also needs accommodation, luggage arrangements, food and water stops, route continuity and a support plan. The right format depends on your dates, fitness and preferred distance.",
  },
  {
    question: "When should I cycle near Essaouira?",
    answer:
      "The most suitable period depends on your route, temperature preference and wind tolerance. Coastal conditions can differ from the High Atlas and the desert, so consider the expected weather for your specific dates and keep enough flexibility to adapt exposed stages.",
  },
  {
    question: "What should I pack for Atlantic Coast cycling?",
    answer:
      "Bring a correctly fitted helmet, gloves, eyewear, water capacity, snacks, sun protection and layers that suit the forecast. A wind-resistant layer may be useful on exposed sections. For multi-day rides, confirm which repair tools, spares, luggage transfers and mechanical support are included.",
  },
];



export default function CyclingEssaouiraAtlanticCoastPage() {
  return (
    <main className="coastal-cycling-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Cycling Essaouira &amp; the Atlantic Coast</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">COASTAL CYCLING · ESSAOUIRA · MOROCCO</p>
          <h1>Cycling Essaouira &amp; the Atlantic Coast</h1>
          <p className="article-deck">
            The Atlantic Coast offers a different rhythm from Morocco’s high mountains and desert routes. Around Essaouira, a cycling day may link paved roads, rural tracks, open countryside and coastal stretches. Wind, surface and route direction can shape the ride as much as distance, so thoughtful planning helps make the most of this varied landscape.
          </p>
          <div className="article-meta"><span>6 MIN READ</span><span>COASTAL ROUTES · GRAVEL · ROAD CYCLING</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/essaouira-cycling-holiday.jpg" alt="Cycling holiday in the Essaouira and Atlantic Coast region" fetchPriority="high" />
          <figcaption>Coastal routes around Essaouira combine open landscapes, rural roads and changing wind conditions.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#coast-character">What coastal cycling is like</a>
          <a href="#choose-bike">Choose the right cycling style</a>
          <a href="#wind-weather">Wind and weather</a>
          <a href="#route-planning">Plan routes and daily distance</a>
          <a href="#equipment">Bike setup and equipment</a>
          <a href="#multi-day">Day rides or multi-day journeys</a>
          <a href="#responsible">Ride responsibly</a>
          <a href="#checklist">Pre-trip checklist</a>
          <a href="#faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            Essaouira and Morocco’s Atlantic Coast are not one continuous, uniform cycling route. Depending on your plan, you may ride paved coastal roads, quiet rural lanes, compact dirt tracks or rougher sections away from the main roads. The right bike, route direction and distance should reflect the actual surfaces and the conditions expected on the day.
          </p>

          <section id="coast-character">
            <h2>What coastal cycling around Essaouira is like</h2>
            <p>
              The area offers a distinct contrast to the High Atlas: open horizons, coastal air, agricultural landscapes and villages connected by local roads. Some rides can be planned as a loop from one base, while others work better as point-to-point journeys with transfers or overnight stops. The experience depends on how much time you want on the bike and whether you prefer paved mileage, gravel exploration or rougher trails.
            </p>
            <p>
              Do not judge a route only by its distance on a map. Surface quality, wind direction, junctions, road traffic, navigation and the availability of water or food all affect the ride. Before setting off, confirm the proposed route, start and finish points, likely riding time and options if the weather or group pace changes.
            </p>
            <figure className="article-inline-image"><img src="/images/atlantic-coast-cycling-tour-morocco.jpg" alt="Cycling journey along Morocco's Atlantic Coast" loading="lazy" /><figcaption>Choose a route around its real surfaces and logistics, not just the coastline shown on a map.</figcaption></figure>
          </section>

          <section id="choose-bike">
            <h2>Choose the right cycling style</h2>
            <h3>Road cycling on paved routes</h3>
            <p>
              A road bike can suit riders whose priority is paved distance, steady rhythm and longer road stages. Planning should account for road condition, traffic, junctions, group visibility and any narrow or busy sections. If the itinerary heads away from the coast or into the foothills, ask whether the full stage is suitable for a road bike and whether transfers are planned between riding areas.
            </p>
            <h3>Gravel cycling on rural tracks</h3>
            <p>
              Gravel can be a good option where the selected route combines tarmac with appropriate dirt roads and compact tracks. Tyre width, puncture protection, gearing and luggage weight make a difference, especially if the route includes loose stones or remote stretches. Confirm the roughest section rather than assuming every rural road is smooth or rideable after recent weather.
            </p>
            <h3>MTB and E-MTB on rougher terrain</h3>
            <p>
              Mountain bikes are more appropriate when the route includes uneven, rocky or technical paths. An E-MTB can support longer climbs, but battery range, charging, bike weight and assistance needs must be considered. A route should still match riders’ descending and handling skills; pedal assistance does not remove technical demands.
            </p>
            <div className="article-tip"><strong>Bike-choice tip</strong><p>Ask for the route surface breakdown, technical features, expected distance and elevation before choosing or hiring a bike. If riders in the same group use different bikes, the route should work safely for the least-suited setup.</p></div>
          </section>

          <section id="wind-weather">
            <h2>Plan around wind and changing coastal weather</h2>
            <p>
              Wind is a major planning factor on exposed coastal roads and open tracks. A headwind can turn an otherwise moderate stage into a demanding day, while crosswinds may affect control and group spacing. Consider the direction of travel, sheltered alternatives and whether start times can be adjusted to reduce exposure during the most challenging part of the day.
            </p>
            <p>
              Coastal conditions may differ from those in Marrakech, the Atlas Mountains or the desert. Carry a light wind-resistant layer, check the forecast near departure and avoid treating a general seasonal description as a live weather report. If a route is exposed, agree on how the guide will regroup the riders and what alternatives are possible if conditions deteriorate.
            </p>
          </section>

          <section id="route-planning">
            <h2>Plan the route, distance and stops</h2>
            <p>
              A suitable daily distance depends on surface, climbing, wind, rider fitness and how much time the group wants for pauses. For a day trip, confirm the meeting point, transfer time, expected riding duration and return arrangements. For point-to-point cycling, also plan where each stage finishes, how luggage moves and how the group reaches food, water and accommodation.
            </p>
            <p>
              Navigation needs attention where multiple rural tracks meet or signage is limited. Ask whether the guide carries the route, how regrouping works and whether riders should bring a phone, GPS device or offline map. On unfamiliar roads, keep group formation predictable and follow the guide’s instructions at junctions.
            </p>
            <ul className="article-checklist">
              <li>Confirm start and finish points, riding distance and expected duration.</li>
              <li>Ask about wind exposure, surface type, traffic and difficult junctions.</li>
              <li>Identify planned food, water and rest stops before remote stretches.</li>
              <li>Clarify transfers, luggage arrangements and what happens if the group runs late.</li>
            </ul>
          </section>

          <section id="equipment">
            <h2>Bike setup and equipment for the Atlantic Coast</h2>
            <p>
              The correct setup depends on the bike and planned surface. Road riders should check tyres, brakes, drivetrain and gearing for the intended distance. Gravel riders should select tyres and pressure for the roughest section while considering puncture resistance and comfort. MTB riders should ensure suspension and tyres are in good condition and suitable for the route.
            </p>
            <p>
              Carry a helmet, gloves, eyewear, water, snacks and sun protection. A wind-resistant layer may be valuable even when temperatures feel mild at the start. Bring basic repair essentials that fit your bike and confirm what a guide or support vehicle will carry. For multi-day trips, check the luggage allowance and whether there is a secure arrangement for bike transport during transfers.
            </p>
            <figure className="article-inline-image"><img src="/images/gravel-cycling-holiday-morocco.jpg" alt="Gravel bicycle prepared for a cycling holiday in Morocco" loading="lazy" /><figcaption>Bike setup should match the roughest planned surface and the distance between support points.</figcaption></figure>
          </section>

          <section id="multi-day">
            <h2>Day rides and multi-day coastal journeys</h2>
            <p>
              A day ride is often the simpler option when you want to add cycling to a visit to Essaouira. Keep the plan realistic, allow time for transfers and breaks, and confirm the return arrangements before departure. A multi-day route offers more time to explore, but needs a stage-by-stage plan for accommodation, meals, luggage, mechanical support and route changes.
            </p>
            <p>
              If a journey links the coast with inland regions, discuss how the transfer sections fit with the riding days. The best itinerary avoids spending the whole holiday in a vehicle or forcing excessive mileage into a single stage. Build the plan around your available dates, riding preferences, group ability and the experience you want from the places along the route.
            </p>
            <p>For wider cycling options, see our <Link href="/journal/complete-gravel-bike-morocco">Complete Gravel Bike Morocco guide</Link> and <Link href="/journal/morocco-road-cycling-holidays">Morocco Road Cycling Holidays guide</Link>.</p>
          </section>

          <section id="responsible">
            <h2>Ride responsibly and respect local communities</h2>
            <p>
              Rural roads and tracks are part of everyday life. Slow down near homes, yield to pedestrians and animals, give vehicles space and avoid blocking narrow roads while regrouping. Take rubbish with you, stay on agreed routes and ask before photographing people. If a track crosses farmland or a settlement, follow local guidance and avoid creating new lines or damaging cultivated areas.
            </p>
            <p>
              On group rides, communicate clearly, keep appropriate spacing and tell the guide early if you feel unwell, tired or uncertain about a section. Thoughtful riding protects the experience for your group and for the people who live along the route.
            </p>
          </section>

          <section id="checklist">
            <h2>Pre-trip checklist</h2>
            <ul className="article-checklist">
              <li>Choose a cycling style based on the route surface and your experience.</li>
              <li>Confirm the distance, elevation, wind exposure, traffic and expected riding time.</li>
              <li>Check bike fit, tyres, brakes, drivetrain and repair essentials.</li>
              <li>Pack water, snacks, sun protection, eyewear and a suitable wind layer.</li>
              <li>Clarify transfers, luggage, meals, mechanical support and the return plan.</li>
              <li>Check the latest forecast and agree on alternatives if conditions change.</li>
            </ul>
          </section>

          <section className="article-faq" id="faq" aria-labelledby="article-faq-title">
            <h2 id="article-faq-title">Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>Planning note</strong>
            <p>This guide provides general route-planning advice, not a live report on road access, weather or local conditions. Confirm route details, logistics, current conditions and support arrangements for your dates before departure.</p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading">
            <div><p className="article-eyebrow article-eyebrow-dark">KEEP EXPLORING</p><h2>More cycling guides</h2></div>
            <Link href="/journal" className="article-text-link">Back to the Journal ↗</Link>
          </div>
          <div className="article-related-grid">
            {relatedArticles.map((item) => (
              <article className="article-related-card" key={item.title}>
                <Link href={item.href} className="article-related-image"><img src={item.image} alt={item.title} loading="lazy" /></Link>
                <div className="article-related-content">
                  <p className="article-eyebrow article-eyebrow-dark">{item.category}</p>
                  <h3><Link href={item.href}>{item.title}</Link></h3>
                  <p>{item.text}</p>
                  <Link href={item.href} className="article-text-link">Read guide ↗</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="article-cta">
        <div className="article-shell article-cta-inner">
          <div><p className="article-eyebrow">EXPLORE THE ATLANTIC COAST</p><h2>Plan a cycling trip shaped around your preferred coast and countryside routes.</h2><p>Tell us your dates, cycling style and preferred daily distance to discuss a practical coastal itinerary.</p></div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/destinations/atlantic-coast">Explore Atlantic Coast</Link><Link className="article-button article-button-outline" href="/contact?request=essaouira-atlantic-coast-cycling">Plan Your Ride</Link></div>
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
          <div><h3>Let&apos;s Plan</h3><Link href="/about">About Us</Link><Link href="/events">Events</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="article-shell article-footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>

      <style>{`
        .coastal-cycling-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
        .article-shell{width:min(1180px,calc(100% - 48px));margin-inline:auto}
        .article-breadcrumbs{display:flex;flex-wrap:wrap;gap:10px;padding-top:25px;padding-bottom:20px;font-size:12px;color:#777168}
        .article-breadcrumbs a{color:inherit;text-decoration:none}.article-breadcrumbs a:hover{color:#c65c35}
        .article-hero{padding:44px 0 60px;display:grid;grid-template-columns:.95fr 1.05fr;gap:clamp(30px,5vw,68px);align-items:center}
        .article-eyebrow{font-size:11px;line-height:1.5;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#e7663b;margin:0 0 16px}.article-eyebrow-dark{color:#bd542f}
        .article-hero h1{font-size:clamp(42px,5.8vw,76px);line-height:.99;letter-spacing:-.055em;margin:0 0 22px;max-width:700px}
        .article-deck{font-size:18px;line-height:1.8;color:#5d5953;margin:0;max-width:660px}
        .article-meta{display:flex;flex-wrap:wrap;gap:18px;margin-top:25px;font-size:10px;font-weight:800;letter-spacing:.13em;color:#777168}
        .article-hero-image{margin:0;position:relative;min-width:0}.article-hero-image img{display:block;width:100%;height:clamp(320px,40vw,515px);object-fit:cover}.article-hero-image figcaption{padding:10px 0 0;font-size:12px;color:#777168;line-height:1.6}
        .article-main-grid{display:grid;grid-template-columns:220px minmax(0,760px);justify-content:space-between;gap:clamp(28px,5vw,75px);padding-top:20px;padding-bottom:90px}
        .article-toc{align-self:start;position:sticky;top:30px;display:flex;flex-direction:column;gap:12px;padding:20px;border:1px solid #dedbd4;background:#fff}.article-toc p{font-size:10px;font-weight:800;letter-spacing:.16em;color:#bd542f;margin:0 0 5px}.article-toc a{font-size:13px;line-height:1.45;color:#514d47;text-decoration:none}.article-toc a:hover{color:#bd542f}
        .article-body{min-width:0;font-size:16px;color:#4e4a45}.article-body p{margin:0 0 19px;line-height:1.9}.article-body .article-lead{font-size:20px;line-height:1.8;color:#292723;margin-bottom:38px}.article-body section{scroll-margin-top:35px;margin:0 0 38px}.article-body h2{font-size:clamp(28px,3.2vw,38px);line-height:1.12;letter-spacing:-.035em;color:#211f1b;margin:0 0 17px}.article-body h3{font-size:22px;line-height:1.2;margin:24px 0 12px;color:#211f1b}
        .article-inline-image{margin:28px 0 24px}.article-inline-image img{display:block;width:100%;max-height:430px;object-fit:cover}.article-inline-image figcaption{padding-top:10px;color:#777168;font-size:12px;line-height:1.6}
        .article-tip{margin:26px 0;padding:23px 25px;background:#eeeae2;border-left:3px solid #c65c35}.article-tip strong{display:block;margin-bottom:6px;color:#25231f}.article-tip p{margin:0}
        .article-checklist{margin:10px 0 24px;padding-left:23px}.article-checklist li{padding-left:5px;margin:0 0 12px;line-height:1.8}.article-checklist strong{color:#24221e}.article-body a{color:#bd542f}.article-text-link{font-size:13px;font-weight:800;text-decoration:none;color:#bd542f}.article-text-link:hover{text-decoration:underline}
        .article-faq details{border-top:1px solid #dcd8d0;padding:18px 0}.article-faq details:last-child{border-bottom:1px solid #dcd8d0}.article-faq summary{cursor:pointer;list-style:none;font-size:16px;font-weight:700;color:#24221e}.article-faq summary::-webkit-details-marker{display:none}.article-faq summary:after{content:'+';float:right;color:#c65c35;font-size:22px}.article-faq details[open] summary:after{content:'−'}.article-faq details p{margin:13px 0 0;color:#625e57}
        .article-author-note{padding:22px 24px;background:#fff;border:1px solid #e0ddd6}.article-author-note strong{display:block;color:#24221e;margin-bottom:6px}.article-author-note p{margin:0;font-size:14px}
        .article-related{padding:76px 0 86px;background:#f0eee8}.article-section-heading{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:30px}.article-section-heading h2{font-size:clamp(30px,4vw,45px);line-height:1.1;letter-spacing:-.04em;margin:0}.article-related-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}.article-related-card{background:#fff;border:1px solid #e0ddd6;min-width:0}.article-related-image{display:block;overflow:hidden}.article-related-image img{display:block;width:100%;height:220px;object-fit:cover;transition:transform .3s ease}.article-related-image:hover img{transform:scale(1.03)}.article-related-content{padding:22px}.article-related-content .article-eyebrow{font-size:9px;margin-bottom:10px}.article-related-content h3{font-size:21px;line-height:1.2;margin:0 0 10px;letter-spacing:-.02em}.article-related-content h3 a{color:inherit;text-decoration:none}.article-related-content h3 a:hover{color:#bd542f}.article-related-content>p:not(.article-eyebrow){color:#68645d;font-size:13px;line-height:1.7;margin:0 0 17px}
        .article-cta{padding:65px 0;background:#23231f;color:#fff}.article-cta-inner{display:flex;justify-content:space-between;align-items:center;gap:35px}.article-cta .article-eyebrow{color:#f18b60}.article-cta h2{font-size:clamp(32px,4vw,48px);line-height:1.05;letter-spacing:-.04em;max-width:600px;margin:0 0 14px}.article-cta-inner>div:first-child>p:last-child{max-width:650px;color:#d1cdc5;margin:0;line-height:1.8}.article-cta-actions{display:flex;flex-wrap:wrap;gap:12px;flex-shrink:0}.article-button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 17px;font-size:12px;font-weight:800;text-decoration:none;transition:background .2s ease,color .2s ease}.article-button-light{background:#e7663b;color:#fff!important}.article-button-light:hover{background:#d6522a}.article-button-outline{border:1px solid #8f8b82;color:#fff!important}.article-button-outline:hover{background:#fff;color:#24221e!important}
        .article-site-footer{background:#181815;color:#fff;padding-top:55px}.article-footer-grid{display:grid;grid-template-columns:1.4fr repeat(3,minmax(0,1fr));gap:40px;padding-bottom:45px}.article-footer-grid>div{display:flex;flex-direction:column;align-items:flex-start;gap:11px}.article-footer-grid h3{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:#e98258;margin:0 0 7px}.article-footer-grid a:not(.article-brand){color:#d1cec7;font-size:13px;text-decoration:none}.article-footer-grid a:not(.article-brand):hover{color:#fff}.article-brand{display:flex;flex-direction:column;gap:12px;text-decoration:none;color:#fff;font-size:13px;font-weight:800;letter-spacing:.07em}.article-brand img{width:185px;max-height:60px;object-fit:contain;object-position:left center}.article-brand em{font-style:normal;color:#e98258;margin-left:5px}.article-footer-brand p{max-width:290px;font-size:13px;line-height:1.8;color:#aaa69d;margin:6px 0 0}.article-footer-bottom{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:1px solid #393832;padding-top:18px;padding-bottom:20px;color:#a9a59d;font-size:11px}.article-footer-bottom a{color:inherit;text-decoration:none}.article-footer-bottom a:hover{color:#fff}
        @media(max-width:900px){.article-hero{grid-template-columns:1fr;gap:28px;padding-top:22px}.article-hero h1{max-width:850px}.article-hero-image img{height:clamp(290px,58vw,480px)}.article-main-grid{grid-template-columns:1fr;padding-top:0}.article-toc{position:static;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 18px}.article-toc p{grid-column:1/-1}.article-related-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.article-cta-inner{align-items:flex-start;flex-direction:column}.article-footer-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:32px 22px}.article-footer-brand{grid-column:1/-1}}
        @media(max-width:560px){.article-shell{width:calc(100% - 34px)}.article-hero{padding-top:20px;padding-bottom:40px}.article-hero h1{font-size:43px}.article-deck{font-size:16px}.article-main-grid{padding-bottom:58px}.article-body{font-size:15px}.article-body .article-lead{font-size:18px}.article-toc{padding:16px;grid-template-columns:1fr 1fr}.article-related{padding:54px 0}.article-section-heading{align-items:flex-start;flex-direction:column;gap:15px}.article-related-grid{grid-template-columns:1fr}.article-related-image img{height:235px}.article-cta{padding:50px 0}.article-cta-actions{width:100%;flex-direction:column}.article-button{width:100%}.article-footer-grid{grid-template-columns:1fr 1fr;gap:28px 16px}.article-brand img{width:155px}.article-footer-grid>div{min-width:0}.article-footer-grid a:not(.article-brand){font-size:12px}.article-footer-bottom{flex-direction:column;gap:7px}}
        @media(prefers-reduced-motion:reduce){.coastal-cycling-article *,.coastal-cycling-article *:before,.coastal-cycling-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
