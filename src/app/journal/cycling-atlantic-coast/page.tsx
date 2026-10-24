import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Discovering Morocco by Bike Along the Atlantic Coast | Mountain Bike Morocco",
  description:
    "Plan a cycling holiday along Morocco's Atlantic Coast with practical advice on coastal winds, road and gravel routes, bike choice, daily distances, equipment and local travel.",
  alternates: { canonical: "/journal/cycling-atlantic-coast" },
  openGraph: {
    title: "Discovering Morocco by Bike Along the Atlantic Coast",
    description:
      "Explore practical advice for coastal cycling in Morocco, from Essaouira and rural tracks to route choice, wind, equipment and trip planning.",
    type: "article",
    images: ["/images/atlantic-coast-cycling-tour-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "COASTAL CYCLING",
    title: "Cycling Essaouira & the Atlantic Coast",
    text: "Explore coastal roads, rural tracks, wind exposure and riding options around Essaouira.",
    href: "/journal/cycling-essaouira-atlantic-coast",
    image: "/images/essaouira-cycling-holiday.jpg",
  },
  {
    category: "ROAD CYCLING",
    title: "Morocco Road Cycling Holidays",
    text: "Compare mountain climbs, rural roads, support arrangements and multi-day road cycling logistics.",
    href: "/journal/morocco-road-cycling-holidays",
    image: "/images/road-cycling-holiday-morocco.jpg",
  },
  {
    category: "GRAVEL CYCLING",
    title: "Gravel Cycling in Morocco: Roads, Tracks and Preparation",
    text: "Learn how surfaces, tyres, resupply, navigation and carrying capacity shape a gravel trip.",
    href: "/journal/morocco-gravel-cycling-guide",
    image: "/images/gravel-cycling-morocco.jpg",
  },
];

const faqs = [
  {
    question: "Is Morocco's Atlantic Coast suitable for a cycling holiday?",
    answer:
      "It can suit several cycling styles, depending on the exact route. Paved coastal roads may work for road bikes, while suitable rural tracks can appeal to gravel and mountain-bike riders. Route surface, traffic, wind exposure and the group's experience should be reviewed before choosing an itinerary.",
  },
  {
    question: "Is Essaouira a good starting point?",
    answer:
      "Essaouira can be a convenient base for rides in nearby countryside and coastal areas. The best starting point depends on your dates, intended distance, bike type and whether you want day rides or a point-to-point journey. Confirm transfer time and the planned start and finish locations when arranging a trip.",
  },
  {
    question: "Which bike should I bring?",
    answer:
      "Choose a bike that suits the planned surfaces. Road bikes are generally suited to paved routes; gravel bikes offer versatility on mixed surfaces; and MTB or E-MTB may be more appropriate for rougher tracks. Ask for a route description before deciding on tyres, gearing and luggage setup.",
  },
  {
    question: "How much does coastal wind affect a ride?",
    answer:
      "Wind direction and strength can change the effort of a stage and how comfortable exposed sections feel. Route direction, shelter, planned stops and daily distance should be considered together. Carry a light wind layer and confirm the expected conditions close to departure.",
  },
  {
    question: "Can I plan a multi-day coastal cycling tour?",
    answer:
      "Yes, a multi-day itinerary can combine different stretches of coast and inland countryside, provided daily distances and transfers are realistic. Discuss accommodation, luggage handling, food and water stops, mechanical support and the plan if weather or route conditions change.",
  },
  {
    question: "What should I pack for coastal cycling in Morocco?",
    answer:
      "Bring a correctly fitted helmet, gloves, suitable shoes, eyewear, sun protection, hydration capacity and basic repair items. A light windproof layer can be useful on exposed coastal stretches. The final list should reflect your bike type, the season, the planned route and the support included in your trip.",
  },
];

export default function CyclingAtlanticCoastArticlePage() {
  return (
    <main className="atlas-mtb-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Discovering Morocco by Bike Along the Atlantic Coast</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">COASTAL CYCLING · MOROCCO</p>
          <h1>Discovering Morocco by Bike Along the Atlantic Coast</h1>
          <p className="article-deck">
            From open coastal roads to quiet rural tracks, Morocco's Atlantic edge offers a different rhythm from the high mountains and desert. Plan around the surface, wind, daily distance and the style of riding you enjoy.
          </p>
          <div className="article-meta"><span>6 MIN READ</span><span>ROUTE INSPIRATION</span><span>ROAD · GRAVEL · MTB</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/atlantic-coast-cycling-tour-morocco.jpg" alt="Cycling through the landscapes of Morocco's Atlantic Coast" fetchPriority="high" />
          <figcaption>Plan for the combination of open horizons, varied surfaces and coastal wind.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc" aria-label="Article contents">
          <p>IN THIS GUIDE</p>
          <a href="#why-the-coast">Why ride the Atlantic Coast?</a>
          <a href="#where-to-ride">Where to ride</a>
          <a href="#choose-your-bike">Choose the right bike</a>
          <a href="#wind-weather">Wind, weather and timing</a>
          <a href="#route-planning">Plan daily stages</a>
          <a href="#equipment-support">Equipment and support</a>
          <a href="#responsible-riding">Responsible riding</a>
          <a href="#before-you-book">Before you book</a>
          <a href="#faqs">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            A rewarding coastal cycling trip starts with a realistic route plan. Check what the route is made of, how exposed it is to wind, where you can stop and how the group will be supported if a bike problem or change in conditions affects the day.
          </p>

          <section id="why-the-coast">
            <h2>Why cycle Morocco's Atlantic Coast?</h2>
            <p>
              Coastal riding can provide a refreshing contrast to mountain passes and desert tracks. The terrain may be less defined by sustained climbing, but wind, surface changes and distance between services can still shape the effort. On some routes, cycling between coastal settlements and inland countryside creates a varied day without the need to chase altitude.
            </p>
            <p>
              The coast also lends itself to combining riding with time away from the bike. When the schedule allows, leave room to explore local markets, enjoy a meal, or rest rather than building every day around maximum mileage. The right balance depends on whether your priority is training, exploration or a relaxed cycling holiday.
            </p>
            <div className="article-tip"><strong>Planning tip</strong><p>Choose the route for the experience you want, then check daily distance, wind exposure, surface and transfers before judging whether it fits your group.</p></div>
          </section>

          <section id="where-to-ride">
            <h2>1. Where to ride along the coast</h2>
            <h3>Essaouira and nearby countryside</h3>
            <p>
              Essaouira can be a practical base for rides into nearby rural areas and coastal landscapes. Routes vary in surface and traffic exposure, so ask whether a proposed ride stays mostly on paved roads, uses compact tracks or includes rougher sections. Start and finish points should also account for transfers and the time you want to spend riding.
            </p>
            <h3>Coastal roads and open countryside</h3>
            <p>
              Paved routes can suit road cyclists looking for steady mileage and changing views. Consider road quality, traffic, shoulders, junctions and wind direction when planning the route. On exposed stretches, the same distance can feel very different depending on whether the wind is favourable or against you.
            </p>
            <h3>Rural tracks and mixed surfaces</h3>
            <p>
              Some inland sections may link quiet paved lanes with dirt or gravel tracks. These can suit gravel bikes or mountain bikes when the surface and technical demands are appropriate. Confirm the roughest section of the route when selecting tyres and bike type instead of choosing equipment based only on the overall description.
            </p>
            <div className="article-tip"><strong>Route note</strong><p>Ask for the surface mix and the planned start and finish points before choosing your bike or estimating how long the ride will take.</p></div>
          </section>

          <section id="choose-your-bike">
            <h2>2. Choose the right bike for the route</h2>
            <p>
              Bike choice should follow the route surface and the kind of ride planned. No single category is best for every coastal itinerary; a route that is excellent on a road bike may be uncomfortable or unsuitable on rough tracks, while a technical MTB route can be unnecessarily demanding on a narrow-tyred bike.
            </p>
            <h3>Road cycling</h3>
            <p>Best considered for routes primarily on suitable paved roads. Check traffic exposure, road condition, gradients and the expected stage distance.</p>
            <h3>Gravel cycling</h3>
            <p>A versatile option for planned routes combining paved roads with compatible dirt or gravel. Tyres, gearing, luggage and puncture protection matter.</p>
            <h3>Mountain biking and E-MTB</h3>
            <p>MTB can be useful where routes include rougher terrain or more technical tracks. E-MTB assistance may support climbing and longer days, but battery range, charging and the bike's terrain suitability must be part of the plan.</p>
          </section>

          <section id="wind-weather">
            <h2>3. Plan for wind, weather and timing</h2>
            <p>
              Wind is one of the key variables on coastal rides. It can increase effort, reduce comfort on exposed roads and affect the group's pace. Consider route direction, available shelter, rest stops and the ability to shorten a stage if conditions are less favourable than expected.
            </p>
            <p>
              Temperatures and conditions vary with season and location. Bring sun protection, enough hydration capacity and a lightweight windproof layer. For trips that combine coastal areas with higher or inland locations, pack layers suited to the full itinerary rather than only the coast.
            </p>
            <p>
              Check a current forecast before each ride and confirm whether the guide or organiser has identified alternative routes. General seasonal advice can help with preparation, but it should not replace a route-specific assessment for your travel dates.
            </p>
          </section>

          <section id="route-planning">
            <h2>4. Plan realistic daily stages</h2>
            <p>
              Build your plan around more than a target number of kilometres. Road surface, wind, navigation, stops, transfers and group fitness all affect how much time a route takes. A manageable stage should leave room to eat, refill water, make small adjustments and reach the planned finish without rushing.
            </p>
            <h3>For a day ride</h3>
            <p>Confirm the meeting point, start time, ride duration, route surface, planned stops and return arrangements. If you are visiting as part of a wider holiday, leave enough time for transfer, bike setup and a comfortable finish.</p>
            <h3>For a multi-day journey</h3>
            <p>Ask for a stage-by-stage outline covering distance, elevation, surface, accommodation, luggage handling and available resupply. Clarify how mechanical problems will be managed and what support the trip includes. The itinerary should allow for changes if weather or route conditions make a section unsuitable.</p>
          </section>

          <section id="equipment-support">
            <h2>5. Equipment and support</h2>
            <p>
              Start with a correctly fitted helmet, gloves, suitable shoes, eyewear, comfortable cycling clothing and a hydration system. Carry basic tools and repair supplies appropriate to your bike, but confirm what the support team will carry so you can avoid unnecessary duplication.
            </p>
            <p>
              Before departure, check your tyres, brake pads, chain, gears and any lights required by the planned route. If you are hiring a bike, confirm frame size, fit, pedals, helmet availability and the process for reporting a mechanical issue. For E-MTB rides, ask about battery capacity, charging opportunities and the plan if a battery or motor problem occurs.
            </p>
            <p>
              On a guided or supported trip, clarify whether transport, luggage transfers, food, water and mechanical assistance are included. Do not assume every service is available on every itinerary; request a clear list of inclusions and what you need to arrange yourself.
            </p>
          </section>

          <section id="responsible-riding">
            <h2>6. Responsible coastal riding</h2>
            <p>
              Ride courteously around local communities, give pedestrians and other road users space, and slow down near homes, animals and busy settlement areas. Use established routes rather than creating shortcuts or widening tracks, and take litter away with you.
            </p>
            <p>
              When stopping for photographs, be mindful of people's privacy and avoid blocking paths or access points. Supporting local cafés, shops and accommodation where practical can help make a cycling journey a positive part of the places you visit.
            </p>
          </section>

          <section id="before-you-book">
            <h2>7. Before you book: a coastal cycling checklist</h2>
            <ul className="article-checklist">
              <li>Confirm the planned route, surface mix and expected traffic exposure.</li>
              <li>Discuss distance, elevation, wind exposure and the group's riding level.</li>
              <li>Check weather expectations and whether a route alternative is available.</li>
              <li>Confirm bike hire, size, fit, pedals, helmet and repair support if needed.</li>
              <li>Clarify accommodation, transfers, luggage, meals and resupply for multi-day rides.</li>
              <li>Request a written summary of inclusions, exclusions and contact arrangements.</li>
            </ul>
            <p>
              You do not need every decision made before you enquire. Share your dates, group size, preferred cycling style, riding experience and whether you want a day ride or a longer holiday. Those details make it easier to discuss realistic options for your trip.
            </p>
            <p><Link href="/contact" className="article-text-link">Plan your Atlantic Coast cycling trip ↗</Link></p>
          </section>

          <section className="article-faq" id="faqs" aria-labelledby="article-faq-title">
            <h2 id="article-faq-title">Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>Planning note</strong>
            <p>This guide offers general route-planning advice, not a live coastal conditions report. Confirm the route, current forecast, access, equipment and support arrangements with the trip organiser before travelling.</p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading">
            <div><p className="article-eyebrow article-eyebrow-dark">KEEP EXPLORING</p><h2>More cycling guides for Morocco</h2></div>
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
          <div><p className="article-eyebrow">YOUR NEXT RIDE STARTS HERE</p><h2>Discover Morocco at the pace of the coast.</h2><p>Tell us your dates, preferred cycling style and the type of coastal experience you want to plan. We can discuss suitable route options and the practical details to confirm before you travel.</p></div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/destinations/atlantic-coast">Explore the Atlantic Coast</Link><Link className="article-button article-button-outline" href="/contact?request=coastal-cycling-planning&destination=Atlantic%20Coast">Plan your coastal ride</Link></div>
        </div>
      </section>

      <footer className="article-site-footer">
        <div className="article-shell article-footer-grid">
          <div className="article-footer-brand">
            <Link className="article-brand" href="/"><img src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link>
            <p>Guided mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, trails and local culture at your own pace.</p>
            <a href="https://wa.me/212707222426" target="_blank" rel="noreferrer">WhatsApp: +212 707 22 24 26</a>
            <a href="mailto:mountainbikemorocco@gmail.com">mountainbikemorocco@gmail.com</a>
          </div>
          <div><h3>Explore</h3><Link href="/cycling-trips">All Cycling Tours</Link><Link href="/cycling-trips/mtb">Mountain Bike Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil">Imlil Valley</Link><Link href="/destinations/toubkal">Mount Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations/atlantic-coast">Atlantic Coast</Link></div>
          <div><h3>Let's Plan</h3><Link href="/about">About Us</Link><Link href="/events">Events</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="article-shell article-footer-bottom"><span>© {new Date().getFullYear()} Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span></div>
      </footer>

      <style>{`
        .atlas-mtb-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
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
        @media(prefers-reduced-motion:reduce){.atlas-mtb-article *,.atlas-mtb-article *:before,.atlas-mtb-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
