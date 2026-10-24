import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Enduro Riding in Morocco | Trails, Setup & Trip Planning",
  description:
    "Plan an enduro mountain-bike trip in Morocco with practical guidance on trail difficulty, bike setup, descending skills, shuttles, mechanical support and choosing a suitable route.",
  alternates: { canonical: "/journal/enduro-riding-morocco" },
  openGraph: {
    title: "Enduro Riding in Morocco | Mountain Bike Morocco",
    description:
      "A practical guide to enduro riding in Morocco, covering terrain, skills, bike setup, support logistics and responsible mountain biking.",
    type: "article",
    images: ["/images/enduro-cycling-expeditions-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "TECHNICAL RIDING",
    title: "High Atlas Mountain Biking Routes: Technical Trails",
    text: "Learn to assess rocky features, loose surfaces, line choice and the skills needed to make good decisions on technical trails.",
    image: "/images/atlas-mountains-enduro-biking-tour.jpg",
    href: "/journal/high-atlas-mountain-biking-technical-trails",
  },
  {
    category: "SKILLS & TRAINING",
    title: "Mountain Biking the High Atlas: Trails, Techniques & Training",
    text: "Prepare for mountain riding with guidance on fitness, bike control, pacing and building confidence progressively.",
    image: "/images/singletrack-biking-morocco.jpg",
    href: "/journal/high-atlas-trails-techniques-training",
  },
  {
    category: "TRAIL GUIDE",
    title: "Best Mountain Bike Trails in Morocco",
    text: "Compare the broad types of riding across Morocco and learn which questions to ask before selecting a guided route.",
    image: "/images/mtb-tours-morocco.jpg",
    href: "/journal/best-mountain-bike-trails-morocco",
  },
];

const faqs = [
  {
    question: "What is enduro mountain biking?",
    answer:
      "Enduro riding generally combines technical descents with climbs or transfers between trail sections. The balance varies by destination and itinerary. For a Morocco trip, ask how much climbing is pedalled, whether any sections use a shuttle or support vehicle, how technical the descents are and what riding standard is expected.",
  },
  {
    question: "Do I need advanced riding skills for an enduro trip in Morocco?",
    answer:
      "Many enduro routes are best suited to confident riders who can manage loose ground, steep sections and changing surfaces. Difficulty varies, so describe your actual experience and ask for details about the hardest features, exposure, trail width and possible alternatives before booking.",
  },
  {
    question: "What bike should I use for enduro riding?",
    answer:
      "The appropriate bike depends on the trail, your riding style and the itinerary. Confirm suspension condition, brake performance, tyre suitability, frame sizes and what equipment is available if hiring. If you bring your own bike, have it serviced and make sure it is suitable for the terrain planned.",
  },
  {
    question: "Are shuttles included in enduro tours?",
    answer:
      "Shuttle and vehicle support arrangements differ between trips and routes. Ask which transfers are included, whether a vehicle can reach the intended trailheads, how bikes are transported and what happens if access or weather changes the plan. Do not assume every trail has vehicle access.",
  },
  {
    question: "How should I prepare physically?",
    answer:
      "Build a foundation of regular riding, aerobic endurance and strength appropriate to your current fitness. Practise braking, cornering, looking ahead and controlling speed on familiar terrain. Multi-day trips also require enough recovery between rides, so gradually practise riding on consecutive days if that matches your planned itinerary.",
  },
  {
    question: "When is the best time for enduro riding in Morocco?",
    answer:
      "The best timing depends on the region, trail elevation and current weather. Mountain mornings may be cool, lower areas can be hot, and rain or recent weather may affect traction and access. Discuss the intended area and dates with the organiser and confirm conditions close to departure.",
  },
];

export default function EnduroRidingMoroccoPage() {
  return (
    <main className="enduro-morocco-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Enduro Riding in Morocco</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">TECHNICAL RIDING · MOROCCO</p>
          <h1>Enduro Riding in Morocco</h1>
          <p className="article-deck">
            Morocco’s mountain terrain can deliver demanding climbs, rocky descents and varied natural trails. A rewarding enduro trip starts with a clear understanding of your riding level, the character of the routes, the bike and support arrangements, and the conditions expected on the day.
          </p>
          <div className="article-meta"><span>6 MIN READ</span><span>TRAILS · SETUP · TRIP PLANNING</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/enduro-cycling-expeditions-morocco.jpg" alt="Enduro mountain biking on rugged trails in Morocco" fetchPriority="high" />
          <figcaption>Good enduro days combine exciting terrain with thoughtful route choices, reliable equipment and enough support to ride within your abilities.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#what-is-enduro">What defines enduro riding?</a>
          <a href="#terrain">Terrain and trail character</a>
          <a href="#skills">Skills and riding judgement</a>
          <a href="#bike-setup">Bike setup and equipment</a>
          <a href="#shuttles-support">Shuttles and support</a>
          <a href="#fitness-preparation">Fitness and preparation</a>
          <a href="#choose-trip">Choosing a suitable trip</a>
          <a href="#responsible-riding">Safety and responsible riding</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            Enduro riding places particular demands on bike control, descending confidence and equipment reliability. In Morocco, trails may include loose rock, uneven natural features and sections where line choice matters. The right trip is not simply the one with the biggest descent; it is the one that fits your skills and has realistic arrangements for the terrain, group and conditions.
          </p>

          <section id="what-is-enduro">
            <h2>What defines an enduro riding trip?</h2>
            <p>
              Enduro usually combines technical descending with climbs or transfers between trail sections. Depending on the itinerary, riders may pedal up, use a vehicle for selected transfers, or combine both approaches. Different destinations use the term in different ways, so it is worth checking exactly what a proposed trip involves rather than relying on the label alone.
            </p>
            <p>
              Ask about the balance between climbing and descending, the number of trail runs planned, average time in the saddle, and how much riding is expected on natural trails versus roads or tracks. For multi-day trips, the schedule should also account for fatigue, weather, recovery and the practical time needed to move between riding areas.
            </p>
            <div className="article-tip">
              <strong>Planning tip</strong>
              <p>Ask the organiser to describe a typical riding day, including climbs, transfers, descent length, technical features, meal stops and the plan if a route becomes unsuitable.</p>
            </div>
          </section>

          <section id="terrain">
            <h2>Terrain and trail character in Morocco</h2>
            <p>
              Moroccan mountain routes can vary from hard-packed tracks to loose stones, embedded rock, ruts, narrow paths and steep natural sections. The surface can change several times within the same ride. A trail that looks straightforward in a photograph may feel different when it is dusty, wet, exposed or unfamiliar, and recent weather can affect grip and access.
            </p>
            <p>
              The High Atlas and nearby mountain valleys are often associated with rugged terrain and large changes in elevation. Other areas may offer dry foothills, rocky open ground or long stretches between services. These differences matter when choosing tyres, suspension, daily distance and the kind of support that is useful. The exact route should be discussed for your travel dates rather than assumed from the regional name.
            </p>
            <p>
              Before committing to a technical route, ask about the steepest sections, loose or slippery surfaces, exposure, rock steps, narrow traverses and whether any segments are commonly walked. Honest details help you choose a ride that feels challenging without being outside your ability.
            </p>
          </section>

          <section id="skills">
            <h2>Skills, speed control and riding judgement</h2>
            <p>
              Technical descending rewards looking ahead, smooth inputs and controlled speed. Practise progressive braking, balanced cornering and choosing a line on familiar terrain before travelling. Keep enough space from the rider ahead to see the surface, and avoid following another rider through a feature before you have assessed it for yourself.
            </p>
            <h3>Read the trail before committing</h3>
            <p>
              If a feature is unclear, stop somewhere safe and inspect it from the side of the trail. Decide where you want to go, check that the run-out is clear, and leave yourself room to slow down before a corner or obstacle. Walking a section is a sensible choice whenever you are uncertain, tired or unable to identify a safe line.
            </p>
            <h3>Ride within the group’s ability</h3>
            <p>
              Groups rarely have identical experience and confidence. Make sure the route, pace and regrouping plan work for the least experienced rider. If you feel rushed or start making mistakes because of fatigue, stop and reassess. Enduro is not improved by treating every descent as a race or by attempting features simply to keep up with other riders.
            </p>
          </section>

          <section id="bike-setup">
            <h2>Bike setup, equipment and mechanical readiness</h2>
            <p>
              A correctly fitted, well-maintained bike makes it easier to focus on the trail. Before the trip, confirm which bike type is appropriate, whether rental sizes are available, and what level of suspension, tyres and brakes the itinerary calls for. If bringing your own bike, arrange a service before travelling and check the condition of tyres, wheels, drivetrain, suspension and brake pads.
            </p>
            <ul className="article-checklist">
              <li><strong>Brakes:</strong> test lever feel and stopping power before each ride, especially before long descents.</li>
              <li><strong>Tyres and wheels:</strong> check for cuts, loose spokes, damaged rims and a suitable setup for the planned surface.</li>
              <li><strong>Suspension and controls:</strong> confirm settings are appropriate for your weight and riding style, and ensure all controls work reliably.</li>
              <li><strong>Helmet and protection:</strong> use a properly fitted helmet and consider suitable gloves, eye protection and additional protective equipment for your riding level.</li>
              <li><strong>Repair essentials:</strong> clarify which tools, tubes or tubeless supplies, pump and spares you should carry.</li>
              <li><strong>Personal kit:</strong> bring water, food, sun protection, suitable layers and any personal essentials required for a long day outside.</li>
            </ul>
            <p>
              Ask what mechanical support is included and who carries common spares. On remote routes, a problem may take time to resolve, and replacement parts may not be immediately available. Knowing the support plan before departure helps you pack sensibly and set realistic expectations.
            </p>
          </section>

          <section id="shuttles-support">
            <h2>Shuttles, transfers and on-trail support</h2>
            <p>
              Some enduro itineraries use vehicle transfers to connect trail sections, while others rely more heavily on pedalling. Shuttle access depends on road conditions, local arrangements and whether a vehicle can reach the planned start or finish. Not every trail is vehicle-accessible, and a shuttle should not be assumed unless it is explicitly included in the trip details.
            </p>
            <p>
              Clarify how bikes are transported, what happens if access changes, where luggage is carried, and whether the support vehicle remains with the group or operates between agreed points. It is also useful to understand the plan for a mechanical problem, an injured or exhausted rider, poor weather or a route change. Remote mountain riding benefits from clear communication and a shared understanding of the day's plan.
            </p>
            <p>
              Before booking, ask for a written outline of inclusions: guiding, vehicle transfers, accommodation, meals, bike hire, spares and any extra costs. Specific arrangements vary by trip, so confirm them rather than relying on assumptions about what a guided enduro holiday usually includes.
            </p>
          </section>

          <section id="fitness-preparation">
            <h2>Fitness and preparation for several days of riding</h2>
            <p>
              Enduro days can feel demanding even when the distance is modest because technical terrain requires concentration and repeated changes in effort. Build endurance through regular rides, add climbing appropriate to your current fitness, and practise skills on terrain you can manage safely. Strength and mobility work may support comfort and control, but increase training gradually and allow time for recovery.
            </p>
            <p>
              If your trip lasts several days, prepare for consecutive riding days and be realistic about recovery. Sleep, food, hydration and the ability to maintain focus matter as much as peak fitness. Discuss the expected effort and the group's pace before booking, particularly if participants have different levels of experience.
            </p>
            <p>
              Share your recent riding experience honestly. Mention the technical terrain you normally ride, how comfortable you are with steep descents, your preferred daily effort and any concerns about exposure or loose surfaces. Clear information makes it easier to discuss the most suitable route options.
            </p>
          </section>

          <section id="choose-trip">
            <h2>How to choose the right enduro trip</h2>
            <p>Use these questions to compare options before confirming your itinerary:</p>
            <ul className="article-checklist">
              <li><strong>What is the technical level?</strong> Ask for the hardest features, surface types, steepness and any exposed sections.</li>
              <li><strong>How much climbing is involved?</strong> Clarify daily elevation, pedalling time and the role of shuttles or transfers.</li>
              <li><strong>Does the bike suit the route?</strong> Confirm bike availability, size, suspension, tyres, brakes and repair support.</li>
              <li><strong>What happens if plans change?</strong> Ask about weather, trail access, mechanical issues, fatigue and route alternatives.</li>
              <li><strong>What is included?</strong> Get clarity on guiding, transfers, meals, accommodation, luggage, bike hire and additional costs.</li>
              <li><strong>Can the trip suit everyone?</strong> Discuss group experience, pace, rest needs and the least experienced rider's comfort level.</li>
            </ul>
            <p>
              A strong enduro itinerary balances exciting riding with practical logistics and sound judgement. It should give riders enough information to understand the challenge and allow the guide to adapt the plan when conditions require it.
            </p>
          </section>

          <section id="responsible-riding">
            <h2>Safety and responsible riding</h2>
            <p>
              Mountain routes may be shared with walkers, residents, pack animals and other trail users. Slow down near villages, give people and animals plenty of space, follow local guidance and avoid blocking narrow paths. Stay on established routes and do not create shortcuts that damage fragile slopes or widen existing trails.
            </p>
            <p>
              Conditions can change over a day or between valleys. Agree on communication and regrouping points, follow the guide's safety instructions, carry suitable personal supplies and be willing to alter the plan if weather, fatigue or trail conditions make a route inappropriate. Responsible riding includes knowing when to stop, walk a feature or choose an easier alternative.
            </p>
            <div className="article-author-note">
              <strong>Before you travel</strong>
              <p>This guide provides general planning advice, not live trail reports. Confirm the precise route, trail access, expected weather, inclusions and support arrangements for your own dates before departure.</p>
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
            <div><p className="article-eyebrow article-eyebrow-dark">KEEP EXPLORING</p><h2>More enduro and trail-riding guides</h2></div>
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
            <p className="article-eyebrow">PLAN YOUR RIDE</p>
            <h2>Find an enduro route that matches your skills and goals.</h2>
            <p>Share your riding experience, preferred terrain, travel dates and group size to discuss route difficulty, bike setup, transfers and support before confirming your trip.</p>
          </div>
          <div className="article-cta-actions">
            <Link className="article-button article-button-light" href="/contact?request=enduro-trip-planning">Plan an enduro trip ↗</Link>
            <Link className="article-button article-button-outline" href="/cycling-trips/mtb">Explore MTB tours ↗</Link>
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
        <div className="article-shell article-footer-bottom"><span>© {new Date().getFullYear()} Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span></div>
      </footer>

      <style>{`
        .enduro-morocco-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
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
        @media(prefers-reduced-motion:reduce){.enduro-morocco-article *,.enduro-morocco-article *:before,.enduro-morocco-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
