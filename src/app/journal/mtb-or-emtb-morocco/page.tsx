import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MTB or E-MTB in Morocco: Which Ride Suits You? | Mountain Bike Morocco",
  description:
    "Compare conventional mountain bikes and electric mountain bikes for Morocco cycling tours. Understand terrain, battery range, climbing, skills, equipment and route planning before choosing your ride.",
  alternates: { canonical: "/journal/mtb-or-emtb-morocco" },
  openGraph: {
    title: "MTB or E-MTB in Morocco: Which Ride Suits You?",
    description:
      "A practical guide to choosing between a conventional mountain bike and an E-MTB for Atlas Mountain trails, Marrakech rides and multi-day cycling trips in Morocco.",
    type: "article",
    images: ["/images/e-mtb-tour-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "MOUNTAIN BIKE GUIDES",
    title: "A Rider’s Guide to Mountain Biking in the High Atlas",
    text: "Learn how trail type, altitude, fitness and technical confidence shape a High Atlas MTB route.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/journal/high-atlas-mtb-guide",
  },
  {
    category: "E-MTB ADVENTURES",
    title: "Complete E-Bike Cycling Morocco",
    text: "Explore bike types, battery planning, route design and support for electric-assisted cycling.",
    image: "/images/e-mtb-tour-from-marrakech.jpg",
    href: "/journal/complete-e-bike-cycling-morocco",
  },
  {
    category: "TECHNICAL RIDING",
    title: "The Best MTB Trails in the Atlas Mountains",
    text: "Compare rocky traverses, village tracks, singletrack and longer descents before choosing a route.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/journal/best-mtb-trails-atlas-mountains",
  },
];

const faqs = [
  {
    question: "Is an MTB or an E-MTB better for the Atlas Mountains?",
    answer:
      "Both can be suitable, depending on the route and the riders. A conventional MTB can work well for technical trails and riders who prefer a simpler setup. An E-MTB can help manage sustained climbs or make longer routes more accessible, but it still needs to match the terrain and the rider’s descending skills. Ask which bike and route combination is appropriate for your experience and travel dates.",
  },
  {
    question: "Does an E-MTB make technical trails easier?",
    answer:
      "Pedal assistance can make climbing less demanding, but it does not remove the need for balance, braking control, cornering skills or confidence on loose and steep terrain. An E-MTB is often heavier than a conventional bike, which can change how it feels on tight turns, technical descents and when lifting or pushing it.",
  },
  {
    question: "How far can I ride on an E-MTB battery in Morocco?",
    answer:
      "There is no single reliable distance. Usable range changes with elevation gain, trail surface, rider and luggage weight, assistance mode, temperature, battery age and riding style. Ask the organiser for a route-specific estimate, charging plan and contingency options rather than planning around the maximum range advertised for a bike.",
  },
  {
    question: "Can a group mix MTB and E-MTB riders?",
    answer:
      "Often, yes, but the group should agree on a suitable route and pace. Differences in climbing speed, battery needs and descending confidence can affect the day. Discuss the bikes each rider will use, charging or spare-battery arrangements, daily distance, regrouping points and support before confirming the itinerary.",
  },
  {
    question: "Which bike is better for a beginner?",
    answer:
      "The better choice depends on confidence, fitness, the terrain and the bike’s fit. An E-MTB may help with climbing but is heavier and still requires good control. A conventional MTB may feel simpler for some riders. Beginners should choose a route with manageable surfaces and gradients and get clear advice on bike size, setup and expected difficulty.",
  },
  {
    question: "Should I bring my own bike or rent one?",
    answer:
      "Either can work, but confirm the available models, sizes, fit, pedals, helmet, maintenance support and what spares are included. If bringing your own bike, check airline packing rules, transfers, assembly time and whether the planned terrain suits your setup. For an E-MTB, specifically confirm battery and charger arrangements.",
  },
];

export default function MtbOrEmtbMoroccoPage() {
  return (
    <main className="mtb-emtb-morocco-article" id="top">
      <div className="article-shell article-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>MTB or E-MTB in Morocco: Which Ride Suits You?</span>
      </div>

      <header className="article-shell article-hero">
        <div className="article-hero-copy">
          <p className="article-eyebrow">BIKE CHOICE · MTB & E-MTB · MOROCCO</p>
          <h1>MTB or E-MTB in Morocco: Which Ride Suits You?</h1>
          <p className="article-deck">
            The right bike depends on the routes you want to ride, your experience, the amount of climbing you enjoy and the practical support available. A conventional mountain bike and an electric mountain bike can both be excellent options in Morocco, but they create different demands on terrain, pacing, equipment and trip planning.
          </p>
          <div className="article-meta"><span>5 MIN READ</span><span>BIKE CHOICE · BATTERY · ROUTE PLANNING</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/e-mtb-tour-morocco.jpg" alt="Electric mountain bike ready for a trail ride in Morocco" fetchPriority="high" />
          <figcaption>Choose your bike around the terrain, your riding confidence and the experience you want from the trip.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#start-with-goals">Start with your goals</a>
          <a href="#conventional-mtb">Conventional MTB</a>
          <a href="#electric-mtb">What changes with E-MTB?</a>
          <a href="#terrain-route">Match the bike to the terrain</a>
          <a href="#battery-planning">Battery and charging</a>
          <a href="#mixed-groups">Mixed-ability groups</a>
          <a href="#bike-fit">Fit and equipment</a>
          <a href="#choose-bike">Which bike is right for you?</a>
          <a href="#checklist">Pre-trip checklist</a>
          <a href="#faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            Morocco offers everything from rough Atlas tracks and technical singletrack to rocky foothills, smoother gravel links and long days with plenty of climbing. Before deciding between an MTB and an E-MTB, look at the complete ride: surface, elevation, expected distance, technical difficulty, battery support and how you want to manage your effort.
          </p>

          <section id="start-with-goals">
            <h2>Start with the experience you want</h2>
            <p>
              Some riders want to earn the climbs under their own power and enjoy a direct, relatively simple bike setup. Others want help managing repeated ascents, keeping a mixed-ability group together or extending the distance they can cover in a day. Neither choice is automatically better; the right one is the one that suits your goals and the actual route.
            </p>
            <p>
              Think about your normal riding, fitness, preferred pace and the type of terrain you enjoy. If you love technical descents, handling confidence and bike control still matter whichever motor or drivetrain you choose. If you are planning several days in remote areas, also consider mechanical support, charging, luggage and the possibility of changing the route if conditions require it.
            </p>
            <figure className="article-inline-image"><img src="/images/atlas-mountains-ebike-tour.jpg" alt="E-bike tour in the Atlas Mountains of Morocco" loading="lazy" /><figcaption>The route, not just the bike category, determines how demanding a ride will feel.</figcaption></figure>
          </section>

          <section id="conventional-mtb">
            <h2>Choosing a conventional mountain bike</h2>
            <p>
              A conventional MTB is a versatile option for rocky trails, rough tracks and singletrack where bike control and a suitable suspension setup are important. It generally has fewer electrical components to manage and does not depend on charging stops. Riders who enjoy controlling their own climbing effort may prefer its familiar feel and typically lower bike weight compared with an E-MTB.
            </p>
            <h3>Where an MTB can make sense</h3>
            <p>
              Consider a conventional mountain bike for technical trail days, shorter routes with manageable climbing, or longer trips where charging opportunities are limited. The best choice still depends on the frame, tyres, gearing, suspension, brakes and overall fit. A bike that is poorly matched to the terrain can make even a relatively short ride tiring or uncomfortable.
            </p>
            <div className="article-tip"><strong>MTB tip</strong><p>Confirm the route’s roughest surface, steepest descent and expected climbing before deciding on bike setup. Tyres, brakes and suspension should match those features.</p></div>
          </section>

          <section id="electric-mtb">
            <h2>What changes when you choose an E-MTB?</h2>
            <p>
              An electric mountain bike adds pedal assistance to help riders manage climbs and maintain a chosen effort. This can make some routes more accessible and help a group with different fitness levels share an itinerary. However, assistance is not a substitute for technique: descending, cornering, braking and riding loose ground remain the rider’s responsibility.
            </p>
            <h3>Weight, handling and effort</h3>
            <p>
              E-MTBs are often heavier than conventional bikes. That difference can be noticeable on tight switchbacks, when lifting a bike over an obstacle or pushing it uphill. Battery and motor placement also affect how a bike feels. A test ride, good fit and a route suited to your experience are valuable before committing to a multi-day trip.
            </p>
            <h3>Choose the correct electric bike format</h3>
            <p>
              Not every e-bike is designed for rough mountain trails. An E-MTB is built for off-road terrain, while a trekking e-bike or electric road bike may suit smoother routes better. Ask which model is offered, its intended use, available frame sizes, battery capacity and what the itinerary expects the bike to handle.
            </p>
            <p><Link className="article-text-link" href="/journal/complete-e-bike-cycling-morocco">Read our complete e-bike cycling guide ↗</Link></p>
          </section>

          <section id="terrain-route">
            <h2>Match the bike to Morocco’s terrain</h2>
            <h3>High Atlas and Imlil</h3>
            <p>
              Rocky tracks, uneven paths, sustained climbs and technical descents call for a capable bike and confident handling. A conventional MTB and an E-MTB may both fit suitable routes, but route difficulty, bike weight and the rider’s descending skills should guide the decision. Higher elevation and changing weather also affect the daily plan.
            </p>
            <h3>Marrakech foothills and Agafay</h3>
            <p>
              Day rides around the city and open rocky terrain can suit either bike depending on the surface and climbing. Consider heat, exposure, distance between stops and whether the route is smooth or technical. For an E-MTB, discuss assistance use and the range needed for the full ride, not just the distance shown on a map.
            </p>
            <h3>Longer and remote journeys</h3>
            <p>
              Multi-day routes may require luggage transfers, mechanical support and a clear plan for food, water and overnight stops. An E-MTB trip also requires charging logistics and a contingency plan if battery capacity or a charging point is unavailable. A conventional MTB removes the charging requirement but does not remove the need for careful preparation and support.
            </p>
          </section>

          <section id="battery-planning">
            <h2>Battery range and charging need their own plan</h2>
            <p>
              There is no single battery range that applies to every Moroccan route. Climbing, surface, rider and luggage weight, assistance mode, temperature, battery condition and riding style can all change the usable range. High elevation gain or a long stretch of technical riding may use more power than a shorter route on smoother ground.
            </p>
            <p>
              Ask for a route-specific estimate and discuss charging locations, whether the charger travels with the group, access to overnight power, spare batteries where available and the plan for a delayed or changed stage. Avoid relying solely on a manufacturer’s best-case range figure when planning remote sections.
            </p>
            <div className="article-tip"><strong>E-MTB planning tip</strong><p>Confirm how much elevation and distance each battery must cover, where charging will happen and what the group will do if a charging opportunity is missed.</p></div>
          </section>

          <section id="mixed-groups">
            <h2>Can MTB and E-MTB riders travel together?</h2>
            <p>
              Mixed-bike groups can work well when the route and schedule are planned around everyone taking part. Pedal assistance may change climbing pace, while battery limits may influence the route an E-MTB rider can take. Descending ability, fitness and comfort on technical ground remain important, so the group should not be organised around motor assistance alone.
            </p>
            <p>
              Before confirming a trip, discuss group size, experience, bike type, average pace, preferred terrain, regrouping points and rest breaks. A support vehicle may help with some logistics, but remote roads and trails can limit where it can safely travel. Agree on a realistic stage plan and an option to adjust it if a rider is tired or conditions change.
            </p>
          </section>

          <section id="bike-fit">
            <h2>Bike fit, equipment and support</h2>
            <p>
              Fit matters as much as the category of bike. Check frame size, saddle position, reach, handlebar setup and brake comfort. For rough riding, inspect tyres, sealant or tubes, brake pads, suspension and drivetrain condition. If renting, confirm which pedals are available and whether helmet, tools, spares and on-route mechanical help are included.
            </p>
            <p>
              E-MTB riders should also ask about charger compatibility, battery handling, charging time, display controls and the support plan for electrical faults. Riders bringing their own bike should consider airline rules, transfers, case storage, assembly time and how they will carry essential equipment during the ride.
            </p>
          </section>

          <section id="choose-bike">
            <h2>Which bike is right for your Morocco trip?</h2>
            <h3>A conventional MTB may fit you if…</h3>
            <p>You enjoy managing climbs under your own power, prefer a simpler bike setup, expect technical trails and want to avoid planning around charging access.</p>
            <h3>An E-MTB may fit you if…</h3>
            <p>You would value pedal assistance on repeated climbs, want to manage your effort over longer routes, or are travelling with riders whose fitness levels differ. You should still be comfortable controlling a heavier bike on the planned terrain.</p>
            <p>
              If you are unsure, describe your usual rides, preferred terrain, climbing experience, travel dates and group needs in an enquiry. The most useful recommendation considers the entire itinerary, not just a bike specification.
            </p>
            <p><Link className="article-text-link" href="/cycling-trips/mtb">Explore MTB tours ↗</Link> &nbsp; <Link className="article-text-link" href="/cycling-trips/e-mtb">Explore E-MTB tours ↗</Link></p>
          </section>

          <section id="checklist">
            <h2>Pre-trip checklist</h2>
            <ul className="article-checklist">
              <li>Confirm the route surface, elevation, daily distance and technical level.</li>
              <li>Choose a bike type suited to the terrain and your skills.</li>
              <li>Verify frame size, bike fit, helmet, pedals, tyres, brakes and tools.</li>
              <li>For an E-MTB, confirm battery range estimates, charging and contingency arrangements.</li>
              <li>Clarify support, luggage, food and water stops, transfers and accommodation.</li>
              <li>Check current conditions and ask how the itinerary may change if necessary.</li>
            </ul>
          </section>

          <section id="faq" className="article-faq">
            <h2>Frequently asked questions</h2>
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>Plan around the rider, the route and the conditions</strong>
            <p>This guide is intended to help you compare bike formats. Confirm availability, specifications, route access and trip support directly before booking a particular departure.</p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading"><div><p className="article-eyebrow article-eyebrow-dark">KEEP EXPLORING</p><h2>More cycling guides</h2></div><Link className="article-text-link" href="/journal">View all journal articles ↗</Link></div>
          <div className="article-related-grid">
            {relatedArticles.map((item) => (
              <article className="article-related-card" key={item.href}>
                <Link className="article-related-image" href={item.href}><img src={item.image} alt={item.title} loading="lazy" /></Link>
                <div className="article-related-content"><p className="article-eyebrow article-eyebrow-dark">{item.category}</p><h3><Link href={item.href}>{item.title}</Link></h3><p>{item.text}</p><Link className="article-text-link" href={item.href}>Read article ↗</Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="article-cta">
        <div className="article-shell article-cta-inner"><div><p className="article-eyebrow">YOUR NEXT RIDE</p><h2>Choose the bike and route that fit your Morocco adventure.</h2><p>Share your travel dates, riding experience, preferred terrain and whether you would like pedal assistance. We can discuss which trip options may suit your plans.</p></div><div className="article-cta-actions"><Link className="article-button article-button-light" href="/contact">Plan your trip ↗</Link><Link className="article-button article-button-outline" href="/cycling-trips">Browse cycling tours</Link></div></div>
      </section>

      <footer className="article-site-footer">
        <div className="article-shell article-footer-grid">
          <div className="article-footer-brand"><Link href="/" className="article-brand"><img src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link><p>Guided MTB, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, trails and local culture at your own pace.</p></div>
          <div><h3>Explore</h3><Link href="/cycling-trips">All Cycling Tours</Link><Link href="/cycling-trips/mtb">Mountain Bike Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil">Imlil Valley</Link><Link href="/destinations/toubkal">Mount Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let&apos;s Plan</h3><Link href="/about">About Us</Link><Link href="/events">Events</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="article-shell article-footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>

      <style>{`
        .mtb-emtb-morocco-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
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
        @media(prefers-reduced-motion:reduce){.mtb-emtb-morocco-article *,.mtb-emtb-morocco-article *:before,.mtb-emtb-morocco-article *:after{scroll-behavior:auto!important;transition:none!important}}
`}</style>
    </main>
  );
}
