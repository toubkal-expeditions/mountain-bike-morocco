import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mountain Biking the High Atlas | Trails, Techniques & Training",
  description:
    "Prepare for mountain biking in Morocco's High Atlas with practical advice on trail types, fitness, bike handling, climbing, descending, equipment and responsible riding.",
  alternates: { canonical: "/journal/high-atlas-trails-techniques-training" },
  openGraph: {
    title: "Mountain Biking the High Atlas: Trails, Techniques & Training",
    description:
      "A practical guide to High Atlas mountain biking, including trail choice, technique, training, bike setup and preparation for riding in Morocco.",
    type: "article",
    images: ["/images/singletrack-biking-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "MOUNTAIN BIKE GUIDES",
    title: "The Best MTB Trails in the Atlas Mountains",
    text: "Compare the trail types and riding experiences that make the High Atlas rewarding for mountain bikers.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/journal/best-mtb-trails-atlas-mountains",
  },
  {
    category: "TECHNICAL RIDING",
    title: "High Atlas Mountain Biking Routes: Technical Trails",
    text: "Learn how to prepare for loose rock, steep gradients, tight turns and changing grip on technical routes.",
    image: "/images/atlas-mountains-enduro-biking-tour.jpg",
    href: "/journal/high-atlas-mountain-biking-technical-trails",
  },
  {
    category: "CYCLING HOLIDAYS",
    title: "Women’s Mountain Biking in Morocco",
    text: "Plan a supportive mountain biking holiday around group goals, confidence, equipment fit and route choice.",
    image: "/images/women-cycling-tour-8-day.jpg",
    href: "/journal/womens-mountain-biking-morocco",
  },
];

const faqs = [
  {
    question: "How fit do I need to be for mountain biking in the High Atlas?",
    answer:
      "It depends on the route, elevation, surface and number of consecutive riding days. Build a base of comfortable aerobic riding, add climbing gradually and practise riding for several hours without losing concentration. Share your usual distance, climbing experience and preferred daily effort when discussing a route.",
  },
  {
    question: "Do I need advanced technical skills?",
    answer:
      "Not every Atlas route requires advanced skills, but narrow, rocky or steep trails can demand confident control. Ask for an honest description of surface, exposure, gradients, hike-a-bike sections and expected difficulty. Choose a route that fits your current ability rather than relying on a broad grade alone.",
  },
  {
    question: "What should I practise before the trip?",
    answer:
      "Practise looking ahead, controlled braking, cornering, smooth gear changes, body position and choosing a line on uneven ground. Build the skills gradually in a familiar setting and do not practise technical manoeuvres at speeds or on terrain beyond your current control.",
  },
  {
    question: "Which mountain bike is best for the High Atlas?",
    answer:
      "The right bike depends on the route, terrain, rider preference and the support available. Confirm suspension needs, tyre condition and width, gearing, brake condition and frame fit with your organiser or bike mechanic. If hiring, verify size, pedals, helmet availability and what happens if a mechanical issue cannot be repaired on the trail.",
  },
  {
    question: "Should I train for climbs or descents?",
    answer:
      "Both matter. Climbing fitness helps you manage sustained effort, while descending requires technique, judgement and concentration. Include aerobic rides, gradual climbing and controlled skills practice in your preparation. Recovery also matters because fatigue can reduce control late in a long ride.",
  },
  {
    question: "How can I ride responsibly around Atlas villages and trails?",
    answer:
      "Slow down near homes, pedestrians and animals, yield where appropriate, follow the local guide's instructions and avoid making new shortcuts that widen or damage a trail. Ask before photographing people, respect private spaces and leave gates and paths as you find them.",
  },
];

export default function HighAtlasTrailsTechniquesTrainingPage() {
  return (
    <main className="high-atlas-mtb-skills-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Mountain Biking the High Atlas: Trails, Techniques &amp; Training</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">MOUNTAIN BIKING · TECHNIQUE · HIGH ATLAS</p>
          <h1>Mountain Biking the High Atlas: Trails, Techniques &amp; Training</h1>
          <p className="article-deck">
            Mountain biking in the High Atlas can combine sustained climbs, stony tracks, tight turns and rugged descents. A rewarding ride depends on more than fitness: choosing appropriate terrain, managing speed, keeping a maintained bike and staying alert over several hours all matter. This guide covers the preparation and riding habits that help you arrive with realistic expectations and make better decisions on the trail.
          </p>
          <div className="article-meta"><span>8 MIN READ</span><span>TECHNICAL RIDING · MOROCCO</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/singletrack-biking-morocco.jpg" alt="Mountain bike riding on High Atlas singletrack in Morocco" fetchPriority="high" />
          <figcaption>Confidence on mountain trails is built through preparation, control and choosing a route that matches your skills.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#atlas-trails">Understand High Atlas trails</a>
          <a href="#fitness-training">Build fitness for mountain days</a>
          <a href="#bike-handling">Practise essential bike handling</a>
          <a href="#climbing">Climbing with control</a>
          <a href="#descending">Descending and line choice</a>
          <a href="#bike-setup">Bike setup and equipment</a>
          <a href="#safety-recovery">Safety, fatigue and recovery</a>
          <a href="#trip-preparation">Prepare for a multi-day trip</a>
          <a href="#mtb-checklist">Training and kit checklist</a>
          <a href="#mtb-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            There is no single type of High Atlas trail. Depending on the valley, elevation and route, a ride can move between firm dirt, loose stones, old mule tracks, narrow paths and technical singletrack. Train for the demands you are likely to meet, ask for a clear description of the route and remember that good judgement is as important as riding ability.
          </p>

          <section id="atlas-trails">
            <h2>Understand the trails of the High Atlas</h2>
            <p>
              The High Atlas is a broad mountain region rather than one continuous trail network with a uniform level of difficulty. Some itineraries follow village tracks and open mountain paths; others include rougher terrain, steeper gradients and sustained descents. Surface and exposure can change during a single stage, so kilometre totals alone are a poor way to judge how challenging a route will feel.
            </p>
            <p>
              Before choosing a tour, ask about the surface, total ascent, steepness, width of the trail, loose sections, exposure and any hike-a-bike stretches. Find out whether the day is designed for scenic exploration, flowing trail riding or technical enduro-style descents. An accurate route description gives you a better basis for deciding whether the ride suits your experience.
            </p>
            <figure className="article-inline-image"><img src="/images/atlas-mountains-singletrack.jpg" alt="Singletrack route across the Atlas Mountains" loading="lazy" /><figcaption>Trail character can vary by valley and elevation, so ask for route details rather than relying on distance alone.</figcaption></figure>
            <div className="article-tip"><strong>Route-selection tip</strong><p>Share the trails you have ridden before, your confidence on loose surfaces and your preferred level of challenge. A well-matched route should be engaging without putting riders under pressure to attempt features they cannot safely control.</p></div>
          </section>

          <section id="fitness-training">
            <h2>Build fitness for long mountain days</h2>
            <p>
              A strong training base helps you climb steadily and remain attentive later in the ride. Start with regular aerobic sessions at a pace you can maintain comfortably, then increase riding time gradually. If your planned tour includes repeated climbing, include hills or structured climbing sessions and practise maintaining a smooth effort instead of riding every ascent at maximum intensity.
            </p>
            <h3>Progress duration before chasing speed</h3>
            <p>
              Increase the length of your rides in small steps and allow recovery between demanding sessions. A mountain holiday can involve several hours on uneven ground, frequent changes of pace and repeated descents. Training should help you stay composed over the full day, not only produce a strong first hour. If you are new to multi-day riding, practise on consecutive days so you understand how your body recovers overnight.
            </p>
            <h3>Include climbing and mixed terrain</h3>
            <p>
              Smooth-road fitness is useful, but it does not completely prepare you for loose climbs, rough tracks or repeated changes in traction. Where possible, ride safely on varied surfaces similar to those described for your trip. Use lower gears to keep a sustainable cadence and practise staying relaxed as the ground changes. If you do not have access to trails, combine steady endurance riding with strength and mobility work appropriate to your current fitness.
            </p>
            <div className="article-tip"><strong>Keep the plan realistic</strong><p>Training should build gradually around your current health and experience. If you have been inactive or have concerns about strenuous exercise, seek suitable professional advice before beginning a demanding programme.</p></div>
          </section>

          <section id="bike-handling">
            <h2>Practise the bike-handling skills that matter</h2>
            <p>
              Good handling starts with a stable, relaxed position and the ability to look far enough ahead to notice changes in the trail. Keep your elbows and knees loose, avoid gripping the bars unnecessarily tightly and allow the bike to move beneath you on uneven ground. A stiff position can make it harder to respond smoothly to rocks, ruts and small changes in direction.
            </p>
            <h3>Braking and cornering</h3>
            <p>
              Practise using both brakes progressively and adjusting speed before entering a corner or steep section. Sudden braking while turning on loose ground can reduce grip. Look through the corner toward the line you want to follow, keep movements measured and avoid trying new techniques at speed. Build confidence in a safe practice area before applying a skill on a remote mountain trail.
            </p>
            <h3>Gearing, cadence and traction</h3>
            <p>
              Change gear before a climb becomes so steep that you have to shift under heavy pressure. Use a cadence that feels sustainable and try to keep your pedalling smooth when traction is limited. On loose climbs, aggressive surges can spin the rear wheel; controlled effort and a balanced position are usually more helpful. If the surface or gradient is beyond your comfort level, stopping or walking a short section can be the sensible option.
            </p>
          </section>

          <section id="climbing">
            <h2>Climb steadily and manage effort</h2>
            <p>
              Mountain routes can include long ascents where pacing matters more than speed. Begin at an effort you believe you can sustain, settle into a comfortable cadence and eat and drink before you feel depleted. Watch for changes in gradient and surface and shift early enough to avoid straining the drivetrain. If your group has different fitness levels, agree on regrouping points so riders can climb at their own pace without feeling they must race.
            </p>
            <p>
              On rough climbs, choose a line with predictable grip and avoid sudden steering corrections. Staying centred and keeping your upper body relaxed can help the bike move over small obstacles. Not every climb is best ridden continuously: steep, loose or exposed stretches may be more safely managed by dismounting, especially when fatigue or poor traction makes control uncertain.
            </p>
            <p>
              Altitude, heat and changing weather can affect perceived effort. Do not use a training pace from home as a fixed target for every mountain stage. Ask about the planned ascent, elevation and expected duration, and let the guide know early if you are struggling so the group can discuss a sensible adjustment.
            </p>
          </section>

          <section id="descending">
            <h2>Descend with control and choose your line</h2>
            <figure className="article-inline-image"><img src="/images/atlas-mountains-enduro-biking-tour.jpg" alt="Mountain biker navigating a technical descent in the Atlas Mountains" loading="lazy" /><figcaption>On technical descents, look ahead and prioritise control over speed.</figcaption></figure>
            <p>
              Descending asks for more than courage. You need to judge grip, read the shape of the trail, manage braking and decide whether a section is within your current ability. Look ahead rather than fixing your eyes on the front wheel, keep your body mobile and control speed before a steep or loose feature. Leave room for changes in the surface and avoid following another rider so closely that you cannot react to their line or pace.
            </p>
            <h3>Read terrain before committing</h3>
            <p>
              Loose stones, ruts, embedded rocks and tight turns can affect a bike differently depending on speed, tyre pressure and conditions. When you are unsure, stop somewhere safe to inspect the line or ask your guide for advice. Walking a difficult feature is not a failure; it is part of choosing an appropriate level of risk. Never feel obliged to ride a technical section just because another person has done so.
            </p>
            <h3>Maintain space within the group</h3>
            <p>
              Agree on spacing and regrouping before a descent. Riders should be able to stop without catching the person ahead, and the group should know where to wait after a technical section. Avoid passing without clear communication and follow the guide's instructions about exposed areas, pedestrians, livestock and trail access.
            </p>
          </section>

          <section id="bike-setup">
            <h2>Bike setup, tyres and essential equipment</h2>
            <p>
              The right setup depends on the terrain and the bike you are riding. Before departure, check that brakes are working well, tyres are in good condition, wheels are secure, the drivetrain shifts reliably and the suspension—if fitted—is serviced and adjusted appropriately. A comfortable fit also matters: saddle height, cockpit reach and control position influence comfort and handling over long days.
            </p>
            <h3>Tyres, pressure and suspension</h3>
            <p>
              Tyre choice should reflect the actual trail surface, the rider's weight and the bike's compatibility. Avoid making a major setup change on the morning of a remote ride if you can test it beforehand. If you are hiring a bike, ask about frame size, suspension condition, tyre type, pedals, helmet availability and what the organiser can do if a mechanical problem cannot be fixed trailside.
            </p>
            <h3>Tools, spares and personal kit</h3>
            <p>
              Carry a suitable hydration system, sun protection, gloves, eye protection, a small first-aid item appropriate to your needs and a basic repair kit compatible with your bike. Depending on the route, useful spares may include a tube or tubeless repair supplies, pump or inflation system, tyre levers and a multi-tool. Confirm what your guide or support team carries so important items are covered without adding unnecessary weight.
            </p>
          </section>

          <section id="safety-recovery">
            <h2>Safety, fatigue and recovery on the trail</h2>
            <p>
              Technical riding requires attention, and fatigue can reduce judgement before you notice that you are tired. Eat and drink regularly, take breaks and speak up early about pain, unusual exhaustion or uncertainty with the terrain. A route that is appropriate in the morning may feel very different after hours of climbing and descending, so be willing to adjust the pace and expectations during the day.
            </p>
            <p>
              Discuss group procedures before riding: how the guide manages the front and back of the group, where everyone regroups, how riders communicate and what happens if someone has a mechanical issue or needs to stop. Confirm the available support and emergency arrangements for the actual route rather than assuming vehicle access is possible everywhere.
            </p>
            <p>
              Use a properly fitted helmet and any additional protective equipment appropriate to the terrain and your experience. Do not ride beyond your ability to impress the group, and do not hesitate to walk a feature. Good mountain biking involves making consistent decisions that protect both the rider and the people sharing the trail.
            </p>
          </section>

          <section id="trip-preparation">
            <h2>Prepare for a guided or multi-day High Atlas trip</h2>
            <p>
              When planning a guided ride, provide a clear picture of your experience, usual ride length, climbing ability, technical confidence and goals. Ask for the route's distance, total ascent, surface, expected hours and the level of support. These details help establish whether the itinerary suits you and whether the bike and equipment you plan to use are appropriate.
            </p>
            <p>
              Multi-day trips require extra attention to recovery, accommodation, meals, luggage transfers and the route between stages. Check how any transfers affect the riding time and whether a rest or shorter day is planned. If travelling with your own bike, organise transport and assembly time in advance; if hiring, confirm the size and setup as early as possible.
            </p>
            <ul className="article-checklist">
              <li><strong>Fitness:</strong> build aerobic endurance and practise climbing before the trip.</li>
              <li><strong>Skills:</strong> work on braking, cornering, line choice and traction on terrain suitable to your level.</li>
              <li><strong>Bike:</strong> service brakes, tyres, drivetrain, wheels and suspension before departure.</li>
              <li><strong>Route:</strong> confirm technical features, total ascent, daily duration and any hike-a-bike sections.</li>
              <li><strong>Support:</strong> clarify guide arrangements, mechanical kit, regrouping and contingency procedures.</li>
              <li><strong>Recovery:</strong> bring suitable clothing, nutrition, hydration and time to rest between stages.</li>
            </ul>
          </section>

          <section id="responsible-riding">
            <h2>Ride responsibly through the High Atlas</h2>
            <p>
              Trails may pass near homes, cultivated land, walkers and livestock. Slow down around people and animals, give way respectfully, follow local guide advice and avoid creating shortcuts that widen paths or damage the surrounding ground. Ask permission before photographing people, respect private spaces and leave gates and paths as you find them.
            </p>
            <p>
              Responsible riding also means respecting your own limits. Choose a route appropriate to your skills, keep group communication clear and avoid damaging trails through aggressive riding on fragile surfaces. The aim is to enjoy the mountains while preserving access and maintaining a positive relationship with the communities who live there.
            </p>
          </section>

          <section id="mtb-checklist">
            <h2>High Atlas MTB training and kit checklist</h2>
            <ul className="article-checklist">
              <li><strong>Training:</strong> steady endurance rides, gradual climbing and recovery days.</li>
              <li><strong>Handling practice:</strong> braking, cornering, looking ahead and choosing a line.</li>
              <li><strong>Bike check:</strong> brakes, tyres, wheels, drivetrain, controls and suspension if fitted.</li>
              <li><strong>Personal gear:</strong> helmet, gloves, eyewear, suitable shoes, layers and sun protection.</li>
              <li><strong>Hydration and food:</strong> capacity and supplies based on the specific route plan.</li>
              <li><strong>Trip details:</strong> route grade, group plan, support access, accommodation and daily stages.</li>
            </ul>
          </section>

          <section className="article-faq" id="mtb-faq">
            <h2>Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>Plan a ride that fits your experience</strong>
            <p>Use this guide as a preparation starting point. For your actual itinerary, confirm trail conditions, access, weather, route difficulty and support arrangements. Explore our <Link href="/cycling-trips/mtb">MTB tours</Link> or <Link href="/contact?request=high-atlas-mtb-planning">contact us to discuss your trip</Link>.</p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading">
            <div><p className="article-eyebrow">KEEP EXPLORING</p><h2>More guides for your Morocco cycling trip</h2></div>
            <Link className="article-text-link" href="/journal">View all Journal articles ↗</Link>
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
          <div><p className="article-eyebrow">YOUR NEXT HIGH ATLAS RIDE</p><h2>Ready to explore the Atlas by mountain bike?</h2><p>Share your preferred dates, group size, riding level and the kind of trails you enjoy. We can discuss suitable route options, daily effort and the support arrangements for your trip.</p></div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/cycling-trips/mtb">Explore MTB Tours ↗</Link><Link className="article-button article-button-outline" href="/contact?request=high-atlas-mtb-planning">Plan Your Trip</Link></div>
        </div>
      </section>

      <footer className="article-site-footer">
        <div className="article-shell article-footer-grid">
          <div className="article-footer-brand">
            <Link href="/" className="article-brand"><img src="/images/logo-mountain-bike-morocco-footer.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link>
            <p>Guided mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover landscapes, trails and local culture at your own pace.</p>
          </div>
          <div><h3>Explore</h3><Link href="/cycling-trips">All Cycling Tours</Link><Link href="/cycling-trips/mtb">Mountain Bike Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil">Imlil Valley</Link><Link href="/destinations/toubkal">Mount Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let's Plan</h3><Link href="/about">About Us</Link><Link href="/events">Events</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="article-shell article-footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>

      <style>{`
        .high-atlas-mtb-skills-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
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
        .article-inline-image{margin:28px 0 40px}.article-inline-image img{display:block;width:100%;max-height:450px;object-fit:cover}.article-inline-image figcaption{padding:10px 0 0;color:#777168;font-size:12px;line-height:1.6}
        .article-faq details{border-top:1px solid #dcd8d0;padding:18px 0}.article-faq details:last-child{border-bottom:1px solid #dcd8d0}.article-faq summary{cursor:pointer;list-style:none;font-size:16px;font-weight:700;color:#24221e}.article-faq summary::-webkit-details-marker{display:none}.article-faq summary:after{content:'+';float:right;color:#c65c35;font-size:22px}.article-faq details[open] summary:after{content:'−'}.article-faq details p{margin:13px 0 0;color:#625e57}
        .article-author-note{padding:22px 24px;background:#fff;border:1px solid #e0ddd6}.article-author-note strong{display:block;color:#24221e;margin-bottom:6px}.article-author-note p{margin:0;font-size:14px}.article-author-note a{color:#bd542f;text-decoration:underline;text-underline-offset:3px}
        .article-related{padding:76px 0 86px;background:#f0eee8}.article-section-heading{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:30px}.article-section-heading h2{font-size:clamp(30px,4vw,45px);line-height:1.1;letter-spacing:-.04em;margin:0}.article-text-link{font-size:13px;font-weight:800;text-decoration:none;color:#bd542f}.article-text-link:hover{text-decoration:underline}
        .article-related-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}.article-related-card{background:#fff;border:1px solid #e0ddd6;min-width:0}.article-related-image{display:block;overflow:hidden}.article-related-image img{display:block;width:100%;height:220px;object-fit:cover;transition:transform .3s ease}.article-related-image:hover img{transform:scale(1.03)}.article-related-content{padding:22px}.article-related-content .article-eyebrow{font-size:9px;margin-bottom:10px}.article-related-content h3{font-size:21px;line-height:1.2;margin:0 0 10px;letter-spacing:-.02em}.article-related-content h3 a{color:inherit;text-decoration:none}.article-related-content h3 a:hover{color:#bd542f}.article-related-content>p:not(.article-eyebrow){color:#68645d;font-size:13px;line-height:1.7;margin:0 0 17px}
        .article-cta{padding:65px 0;background:#23231f;color:#fff}.article-cta-inner{display:flex;justify-content:space-between;align-items:center;gap:35px}.article-cta .article-eyebrow{color:#f18b60}.article-cta h2{font-size:clamp(32px,4vw,48px);line-height:1.05;letter-spacing:-.04em;max-width:600px;margin:0 0 14px}.article-cta-inner>div:first-child>p:last-child{max-width:650px;color:#d1cdc5;margin:0;line-height:1.8}.article-cta-actions{display:flex;flex-wrap:wrap;gap:12px;flex-shrink:0}.article-button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 17px;font-size:12px;font-weight:800;text-decoration:none;transition:background .2s ease,color .2s ease}.article-button-light{background:#e7663b;color:#fff}.article-button-light:hover{background:#d6522a}.article-button-outline{border:1px solid #8f8b82;color:#fff}.article-button-outline:hover{background:#fff;color:#24221e}
        .article-site-footer{background:#181815;color:#fff;padding-top:55px}.article-footer-grid{display:grid;grid-template-columns:1.4fr repeat(3,minmax(0,1fr));gap:40px;padding-bottom:45px}.article-footer-grid>div{display:flex;flex-direction:column;align-items:flex-start;gap:11px}.article-footer-grid h3{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:#e98258;margin:0 0 7px}.article-footer-grid a:not(.article-brand){color:#d1cec7;font-size:13px;text-decoration:none}.article-footer-grid a:not(.article-brand):hover{color:#fff}.article-brand{display:flex;flex-direction:column;gap:12px;text-decoration:none;color:#fff;font-size:13px;font-weight:800;letter-spacing:.07em}.article-brand img{width:185px;max-height:60px;object-fit:contain;object-position:left center}.article-brand em{font-style:normal;color:#e98258;margin-left:5px}.article-footer-brand p{max-width:290px;font-size:13px;line-height:1.8;color:#aaa69d;margin:6px 0 0}.article-footer-bottom{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:1px solid #393832;padding-top:18px;padding-bottom:20px;color:#a9a59d;font-size:11px}.article-footer-bottom a{color:inherit;text-decoration:none}.article-footer-bottom a:hover{color:#fff}
        @media(max-width:900px){.article-hero{grid-template-columns:1fr;gap:28px;padding-top:22px}.article-hero h1{max-width:850px}.article-hero-image img{height:clamp(290px,58vw,480px)}.article-main-grid{grid-template-columns:1fr;padding-top:0}.article-toc{position:static;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 18px}.article-toc p{grid-column:1/-1}.article-related-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.article-cta-inner{align-items:flex-start;flex-direction:column}.article-footer-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:32px 22px}.article-footer-brand{grid-column:1/-1}}
        @media(max-width:560px){.article-shell{width:calc(100% - 34px)}.article-hero{padding-top:20px;padding-bottom:40px}.article-hero h1{font-size:43px}.article-deck{font-size:16px}.article-main-grid{padding-bottom:58px}.article-body{font-size:15px}.article-body .article-lead{font-size:18px}.article-toc{padding:16px;grid-template-columns:1fr 1fr}.article-related{padding:54px 0}.article-section-heading{align-items:flex-start;flex-direction:column;gap:15px}.article-related-grid{grid-template-columns:1fr}.article-related-image img{height:235px}.article-cta{padding:50px 0}.article-cta-actions{width:100%;flex-direction:column}.article-button{width:100%}.article-footer-grid{grid-template-columns:1fr 1fr;gap:28px 16px}.article-brand img{width:155px}.article-footer-grid>div{min-width:0}.article-footer-grid a:not(.article-brand){font-size:12px}.article-footer-bottom{flex-direction:column;gap:7px}}
        @media(prefers-reduced-motion:reduce){.high-atlas-mtb-skills-article *,.high-atlas-mtb-skills-article *:before,.high-atlas-mtb-skills-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
