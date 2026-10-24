import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Bike Touring in Morocco: Ride Further, Climb Higher | Mountain Bike Morocco",
  description:
    "Plan an e-bike tour in Morocco with practical advice on climbing, route choice, battery planning, terrain, pacing, equipment and support across the Atlas Mountains and beyond.",
  alternates: { canonical: "/journal/ebike-touring-morocco-ride-further" },
  openGraph: {
    title: "E-Bike Touring in Morocco: Ride Further, Climb Higher",
    description:
      "Learn how pedal assistance can change a cycling journey in Morocco while keeping route design, battery range, riding confidence and logistics in focus.",
    type: "article",
    images: ["/images/eBike-tour-atlas-mountains-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "E-MTB ADVENTURES",
    title: "Atlas Mountains E-Bike Tours",
    text: "Explore how pedal assistance can support mountain climbs while keeping terrain, battery range and handling in mind.",
    image: "/images/atlas-mountains-ebike-tour.jpg",
    href: "/journal/atlas-mountains-e-bike-tours",
  },
  {
    category: "E-BIKE PLANNING",
    title: "Complete E-Bike Cycling Morocco",
    text: "Compare e-bike types, setup, charging, daily distances and support before choosing a Morocco itinerary.",
    image: "/images/e-mtb-tour-from-marrakech.jpg",
    href: "/journal/complete-e-bike-cycling-morocco",
  },
  {
    category: "DESERT CYCLING",
    title: "Sahara Desert E-Bike Adventure",
    text: "Understand the extra preparation required for heat, water, battery use and remote desert stages.",
    image: "/images/sahara-desert-ebike-expeditions.jpg",
    href: "/journal/sahara-desert-ebike-adventure",
  },
];

const faqs = [
  {
    question: "Does an e-bike make every mountain route easy?",
    answer:
      "No. Pedal assistance can reduce the effort needed to climb, but it does not remove the need for bike control, fitness, balance or sound judgement. Steep descents, loose rocks, narrow tracks and altitude can still make a route demanding. Choose a route that matches the least experienced rider in the group.",
  },
  {
    question: "How should I estimate battery range for a day tour?",
    answer:
      "Use the actual route rather than a manufacturer's maximum range figure. Elevation, surface, assistance mode, rider and luggage weight, temperature, tyre pressure and battery condition affect consumption. Ask for a conservative estimate that includes climbing and an appropriate reserve.",
  },
  {
    question: "Is e-bike touring suitable for mixed-ability groups?",
    answer:
      "It can work well when the route, distance and regrouping plan suit everyone. Pedal assistance does not make descending skill or technical confidence equal, so discuss each rider's experience, preferred pace and comfort on rough terrain before choosing an itinerary.",
  },
  {
    question: "Where can I go e-bike touring in Morocco?",
    answer:
      "Depending on the bike and route, options may include suitable Atlas foothills and mountain valleys, countryside outside Marrakech, selected gravel routes and longer supported journeys. The surface and technical demands should match the exact bike being used, and local access and conditions need to be checked for the intended dates.",
  },
  {
    question: "Can I plan a multi-day e-bike tour?",
    answer:
      "Yes, but each stage needs a realistic distance, climbing target, battery plan and charging arrangement. Confirm where the bike can be charged overnight, whether the charger is compatible, how luggage is handled and what the backup plan is if a stage uses more power than expected.",
  },
  {
    question: "What should I confirm before booking?",
    answer:
      "Ask about the bike category and size, fit, battery capacity, route surface, expected ascent, conservative range estimate, charging, helmet and pedals, mechanical support, transfers, accommodation, inclusions and cancellation terms. These details should be confirmed for your specific dates and itinerary.",
  },
];

export default function EBikeTouringMoroccoPage() {
  return (
    <main className="ebike-touring-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>E-Bike Touring in Morocco</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">E-BIKE TOURING · CLIMBS · MOROCCO</p>
          <h1>E-Bike Touring in Morocco: Ride Further, Climb Higher</h1>
          <p className="article-deck">
            Pedal assistance can change how a day in Morocco feels: long climbs may become more manageable, riders with different fitness levels may be able to share a route, and a tour can link landscapes that would otherwise ask for a bigger effort. The best experience still depends on selecting a suitable bike, setting realistic stages and planning honestly for battery range, charging, terrain and support.
          </p>
          <div className="article-meta"><span>7 MIN READ</span><span>E-BIKE TOURING · MOROCCO</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/eBike-tour-atlas-mountains-morocco.jpg" alt="E-bike touring through Morocco's Atlas Mountains" fetchPriority="high" />
          <figcaption>Plan around the route, the climb and realistic battery use—not just the distance shown on a map.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#touring-benefits">What e-bike touring changes</a>
          <a href="#choose-the-bike">Choose the right bike</a>
          <a href="#climbing">Climb further, pace better</a>
          <a href="#battery-plan">Battery range and energy planning</a>
          <a href="#touring-regions">Where to tour in Morocco</a>
          <a href="#daily-stages">Build realistic daily stages</a>
          <a href="#mixed-ability">Touring with mixed-ability riders</a>
          <a href="#bike-prep">Bike setup and kit</a>
          <a href="#support">Safety and support</a>
          <a href="#plan-your-tour">Plan your tour</a>
          <a href="#tour-checklist">Pre-trip checklist</a>
          <a href="#tour-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            E-bike touring is not simply conventional cycling with a motor added. Assistance can make sustained climbing more comfortable, but bike weight, traction, braking, battery management and route surfaces still shape the ride. In Morocco, where a route can move from paved approaches to rough tracks and mountain gradients, a good tour combines the right equipment with a stage plan that suits the riders and the places they want to reach.
          </p>

          <section id="touring-benefits">
            <h2>What e-bike touring changes</h2>
            <p>
              The main benefit of pedal assistance is the ability to manage effort differently. It may help riders keep a steady rhythm on a long climb, conserve energy for later stages or enjoy a scenic route without every ascent becoming the defining challenge of the day. This can be useful around the Atlas foothills and mountain valleys, where elevation often matters as much as kilometres.
            </p>
            <p>
              Assistance should create better choices rather than encourage endless extra distance. A comfortable ride still needs time for food, water, photographs, village stops and safe descents. Choose the experience first: a mountain-focused adventure, a relaxed countryside tour, a multi-day journey or a private itinerary for a mixed group. Then select the bike and route to suit it.
            </p>
            <figure className="article-inline-image"><img src="/images/atlas-mountains-ebike-tour.jpg" alt="Electric bike touring in the Atlas Mountains" loading="lazy" /><figcaption>Pedal assistance can help manage climbs while leaving time to enjoy the landscape.</figcaption></figure>
            <div className="article-tip"><strong>Ride the day you want—not the biggest distance possible</strong><p>Agree on the daily effort, terrain and time available before setting the route. A well-paced ride usually feels more rewarding than an itinerary stretched to the limit of the battery.</p></div>
          </section>

          <section id="choose-the-bike">
            <h2>Choose the right bike for the route</h2>
            <h3>E-MTB for rough tracks and mountain trails</h3>
            <p>An electric mountain bike is built for off-road handling, with tyres, brakes and often suspension suited to dirt and rock. It can be suitable for selected Atlas routes, foothill tracks and some rugged terrain when the route's technical level matches the rider. Assistance helps with the pedalling effort; it does not replace line choice, balance or controlled braking.</p>
            <h3>Trekking, hybrid or road e-bike for smoother touring</h3>
            <p>For paved roads, smoother tracks and luggage-carrying travel, a trekking or road-oriented e-bike may be more appropriate. Confirm the permitted surfaces, tyre width, gearing, luggage capacity, brakes and battery specification. A bike designed for asphalt should not be assumed suitable for steep, rocky singletrack.</p>
            <p>Ask which model or category is supplied, which frame sizes are available and what is included. Clarify whether pedals, helmet, charger, luggage rack or bags, spare parts and a suitable lock are provided or need to be arranged separately.</p>
          </section>

          <section id="climbing">
            <h2>Climb further while keeping the ride enjoyable</h2>
            <p>Assistance modes let riders choose how much support they receive, but higher output uses more energy. A lower or mid setting may be more efficient on steady gradients when it still feels comfortable; a higher setting can be useful for short, steep sections, depending on the bike and the rider. Learn the controls before the tour and practise starting, stopping and changing assistance on safe ground.</p>
            <p>Climbing technique still matters. Maintain a smooth cadence, keep traction on loose surfaces and avoid sudden changes in power where the rear wheel might spin. On narrow or technical mountain paths, choose a line that leaves room for safe control. Walk a section when the surface or gradient is beyond your confidence rather than forcing the bike through it.</p>
            <h3>Remember the descent</h3>
            <p>Extra bike weight can affect stopping distance and handling. Keep enough space from other riders, control speed before tight corners and use brakes smoothly. The route needs to fit descending skill as well as climbing ability; an easier ascent does not automatically make a technical descent suitable.</p>
          </section>

          <section id="battery-plan">
            <h2>Battery range and energy planning</h2>
            <p>There is no single range figure that can be promised for all tours. Battery use changes with elevation, surface, assistance setting, rider and luggage weight, tyre pressure, temperature and the battery's condition. Long mountain climbs or rough tracks can use much more energy than a smoother ride of similar length.</p>
            <p>Request a conservative estimate based on the actual route, including total ascent and expected riding time. Build a reserve into the plan rather than expecting to finish with the battery nearly empty. If several assistance modes are available, agree how to manage energy across the stage and what to do if the battery level falls faster than expected.</p>
            <ul className="article-checklist">
              <li>Confirm approximate distance, climbing and surface for each stage.</li>
              <li>Ask for a route-specific battery estimate, not only a manufacturer headline.</li>
              <li>Check charger compatibility and where overnight charging is planned.</li>
              <li>Understand the alternative route or support option if range becomes a concern.</li>
            </ul>
            <div className="article-tip"><strong>Remote routes need a realistic reserve</strong><p>Do not assume that a village or accommodation stop will have a compatible charger or a spare battery available. Confirm arrangements before the itinerary is finalised.</p></div>
          </section>

          <section id="touring-regions">
            <h2>Where to go e-bike touring in Morocco</h2>
            <h3>High Atlas Mountains</h3>
            <p>The Atlas offers a variety of paved climbs, mountain roads, village tracks and off-road routes. Select the bike around the surface and the riders' handling skills. Altitude and weather can change the feel of a stage, so discuss the route, climbing, start point and backup options before travel.</p>
            <p><Link className="article-text-link" href="/destinations/atlas-mountains">Explore Atlas Mountains destinations ↗</Link> &nbsp; <Link className="article-text-link" href="/journal/atlas-mountains-e-bike-tours">Read the Atlas e-bike guide ↗</Link></p>
            <h3>Marrakech and the nearby foothills</h3>
            <p>Marrakech can be a practical starting point for a day ride or the first stage of a longer journey. Confirm where the ride begins, whether a transfer is included, which surfaces are planned and where water stops are expected. The exact route should match the bike being used.</p>
            <p><Link className="article-text-link" href="/destinations/marrakech">Explore Marrakech cycling ↗</Link></p>
            <h3>Agafay and open terrain</h3>
            <p>Selected routes through rocky, open landscapes can offer a different experience from high mountain trails. Heat, wind exposure, water capacity and the ability to adjust the route all need consideration. Use a bike with tyres and braking suited to the actual surface.</p>
            <p><Link className="article-text-link" href="/destinations/agafay-desert">Explore Agafay Desert ↗</Link></p>
            <h3>Southern and longer journeys</h3>
            <p>Longer tours may pass through areas with fewer services and limited charging options. Each stage should account for battery range, luggage, water, overnight accommodation and support access before a remote route is confirmed.</p>
            <p><Link className="article-text-link" href="/destinations/sahara-desert">Explore Sahara and southern Morocco ↗</Link></p>
          </section>

          <section id="daily-stages">
            <h2>Build realistic daily stages</h2>
            <p>When planning a multi-day journey, consider accumulated fatigue as well as the distance for each day. A stage with sustained climbing, rough surfaces or technical descents may take longer than expected, even when pedal assistance reduces climbing effort. Leave time for stops, meals, mechanical checks and enjoying the route.</p>
            <p>Ask for a stage-by-stage outline showing distance, elevation gain, surface, expected riding time, accommodation, luggage transfers, food and water access, charging locations and support arrangements. If the tour crosses different regions, confirm transfer durations so driving does not unexpectedly dominate the day.</p>
            <p>Recovery time also matters. A rest day, shorter stage or flexible alternative can be useful on a longer itinerary, especially for riders who are new to e-bikes or travelling with different levels of experience.</p>
          </section>

          <section id="mixed-ability">
            <h2>Touring with mixed-ability riders</h2>
            <p>E-bikes can make it easier for riders with different fitness levels to share a trip, but the whole group still needs compatible expectations. People may have different bike-handling skills, descending confidence, range needs and preferred pace. Select regrouping points and realistic stage lengths rather than allowing the strongest rider to set the schedule.</p>
            <p>Clarify whether every participant will use an e-bike, whether non-electric riders may join, how the guide manages pace and what charging needs exist across the group. Battery size and assistance use vary, so the itinerary should not assume every bike will consume energy at the same rate.</p>
          </section>

          <section id="bike-prep">
            <h2>Bike setup, clothing and equipment</h2>
            <p>Check bike fit and controls before riding. Saddle height, brake reach, handlebar position, tyre pressure and suspension setup affect comfort and confidence. Ask about pedals, helmet sizes, lights where needed, puncture supplies and whether the tour provides mechanical support or expects riders to carry specific tools.</p>
            <ul className="article-checklist">
              <li>A properly fitted helmet, gloves, eye protection and suitable cycling clothing.</li>
              <li>Comfortable shoes and an extra layer for cool starts or higher elevations.</li>
              <li>Enough water capacity and sun protection for exposed sections.</li>
              <li>Personal essentials and medication, plus agreed repair items.</li>
              <li>Compatible charger and required accessories if using your own bike.</li>
              <li>A small off-bike bag for items needed after riding.</li>
            </ul>
            <p>Before each stage, check tyres, brakes, shifting, battery mounting and battery level. Report unusual motor behaviour, damage or battery concerns to the guide or technician before continuing.</p>
          </section>

          <section id="support">
            <h2>Safety and support on the route</h2>
            <p>A good tour plan explains how punctures, mechanical problems, rider fatigue, poor weather or route access changes will be handled. Ask where support vehicles can reach the route, how the group communicates if separated and what the backup plan is for a battery or motor issue. In remote areas, response time can depend on terrain and access.</p>
            <p>Follow the bike manufacturer's charging and storage instructions. Keep connectors protected from moisture and impact, use only compatible chargers and do not improvise electrical repairs in the field. Tell the guide immediately if a battery is damaged, unusually hot or behaving unexpectedly.</p>
            <div className="article-tip"><strong>Confirm what support actually includes</strong><p>Clarify guiding, spare parts, vehicle access, luggage handling, charging, accommodation and any services that may carry an additional cost before confirming your trip.</p></div>
          </section>

          <section id="plan-your-tour">
            <h2>Plan your e-bike tour in Morocco</h2>
            <p>Start with your dates, group size, previous cycling experience and the kind of landscape you want to explore. Explain whether you prefer mountain trails, smoother road touring, gravel tracks or a multi-day journey. That information helps frame the conversation about bike type, stage length, battery use and support.</p>
            <p>Before booking, ask for the proposed route, approximate daily distance and ascent, expected surface, charging arrangements, overnight stops, equipment details and a clear list of inclusions and exclusions. Availability and specific arrangements should be confirmed for your chosen dates.</p>
            <div className="article-author-note"><strong>Planning an e-bike tour?</strong><p>Share your preferred dates, group size, riding experience and terrain on our <Link href="/contact?request=ebike-touring-morocco-ride-further">trip enquiry page</Link>. We can discuss which tour format, equipment and support arrangements may suit your trip.</p></div>
          </section>

          <section id="tour-checklist">
            <h2>Pre-trip checklist</h2>
            <ul className="article-checklist">
              <li>Confirm bike category, frame size, fit, pedals, brakes and tyre suitability.</li>
              <li>Review each stage's distance, ascent, surface and realistic expected duration.</li>
              <li>Understand the battery estimate, reserve power, charger and charging plan.</li>
              <li>Confirm water, food stops, accommodation, luggage transfer and support access.</li>
              <li>Ask how mechanical or battery issues will be handled in remote areas.</li>
              <li>Check inclusions, exclusions, payment terms and cancellation conditions.</li>
            </ul>
          </section>

          <section id="tour-faq" className="article-faq">
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
            <div><p className="article-eyebrow">KEEP EXPLORING</p><h2>More cycling guides</h2></div>
            <Link className="article-text-link" href="/journal">View all journal articles ↗</Link>
          </div>
          <div className="article-related-grid">
            {relatedArticles.map((article) => (
              <article className="article-related-card" key={article.href}>
                <Link href={article.href} className="article-related-image"><img src={article.image} alt={article.title} loading="lazy" /></Link>
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
            <p className="article-eyebrow">YOUR NEXT RIDE</p>
            <h2>Ready to ride further in Morocco?</h2>
            <p>Share your dates, preferred terrain, group size and riding experience. We can discuss route options, battery planning, bike setup and support before you choose an itinerary.</p>
          </div>
          <div className="article-cta-actions">
            <Link className="article-button article-button-light" href="/contact?request=ebike-touring-morocco-ride-further">Plan Your E-Bike Tour ↗</Link>
            <Link className="article-button article-button-outline" href="/cycling-trips/e-mtb">Explore E-MTB Tours</Link>
          </div>
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
        .ebike-touring-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
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
      `}</style>
    </main>
  );
}
