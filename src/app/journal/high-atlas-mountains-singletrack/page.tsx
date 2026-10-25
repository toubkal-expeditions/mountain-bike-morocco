import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "High Atlas Mountains Singletrack | Mountain Bike Morocco",
  description:
    "Explore the character of High Atlas singletrack in Morocco, from narrow village paths and flowing dirt to rocky traverses. Learn how to judge difficulty, choose equipment and plan responsibly.",
  alternates: { canonical: "/journal/high-atlas-mountains-singletrack" },
  openGraph: {
    title: "High Atlas Mountains Singletrack",
    description:
      "A practical guide to High Atlas singletrack, technical features, route choice, bike setup and responsible mountain riding in Morocco.",
    type: "article",
    images: ["/images/mtb-tour-atlas-mountains.jpg"],
  },
};

const relatedArticles = [
  {
    category: "HIGH ATLAS",
    title: "The Best MTB Trails in the Atlas Mountains",
    text: "Compare trail styles in the High Atlas, from rocky traverses and village paths to flowing singletrack and longer descents.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/journal/best-mtb-trails-atlas-mountains",
  },
  {
    category: "TECHNICAL RIDING",
    title: "High Atlas Mountain Biking Routes: Technical Trails",
    text: "Prepare for loose rock, tight turns, steep gradients, line choice and changing mountain conditions.",
    image: "/images/atlas-mountains-enduro-biking-tour.jpg",
    href: "/journal/high-atlas-mountain-biking-technical-trails",
  },
  {
    category: "TRAINING & SKILLS",
    title: "Mountain Biking the High Atlas: Trails, Techniques & Training",
    text: "Build confidence with practical advice on braking, balance, climbing, descending and preparing for mountain rides.",
    image: "/images/singletrack-biking-morocco.jpg",
    href: "/journal/high-atlas-trails-techniques-training",
  },
];

const faqs = [
  {
    question: "What is High Atlas singletrack like?",
    answer:
      "It varies by location and route. You may encounter narrow dirt paths, rocky sections, hillside traverses, old village tracks and rougher technical features. Ask for a route-specific description rather than assuming every singletrack section has the same surface or difficulty.",
  },
  {
    question: "Is High Atlas singletrack suitable for beginners?",
    answer:
      "Some routes may suit riders with basic bike control and confidence on uneven ground, but narrow, steep, loose or exposed trail sections can require more experience. Choose routes based on actual riding ability and discuss alternatives for any feature that feels beyond your comfort level.",
  },
  {
    question: "Which bike works best for singletrack?",
    answer:
      "A mountain bike with suitable tyres, reliable brakes and gearing for the climbs is often the most versatile choice for rough singletrack. Suspension and tyre width should match the terrain and rider preferences. Confirm the proposed surfaces before choosing or hiring a bike.",
  },
  {
    question: "How should I judge trail difficulty?",
    answer:
      "Consider surface, steepness, width, exposure, obstacles, climbing and how sustained the technical sections are. Ask about hike-a-bike stretches and whether there is room to stop safely. Distance alone is not a reliable measure of how challenging a route will feel.",
  },
  {
    question: "When is the best time for singletrack in the High Atlas?",
    answer:
      "Conditions depend on altitude, aspect and recent weather. Spring and autumn are often considered for many lower and mid-altitude rides, but high routes can be cold, wet or snow-affected, while exposed lower terrain can be very hot in summer. Check current local conditions for your exact route and dates.",
  },
  {
    question: "What should I carry on a singletrack ride?",
    answer:
      "Carry a correctly fitted helmet, gloves, eyewear, water, snacks, sun protection and layers suitable for the forecast. Take basic personal repair essentials and a charged phone or navigation device. Confirm which tools, spares, guide support and emergency arrangements are provided for your route.",
  },
];

export default function HighAtlasMountainsSingletrackPage() {
  return (
    <main className="high-atlas-singletrack-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>High Atlas Mountains Singletrack</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">TECHNICAL RIDING · HIGH ATLAS · MOROCCO</p>
          <h1>High Atlas Mountains Singletrack</h1>
          <p className="article-deck">
            Singletrack in Morocco’s High Atlas can link mountain slopes, valleys and village landscapes through narrow, varied trails. Some sections flow across compact dirt; others become rocky, steep or exposed. Knowing what to expect—and choosing a route that matches your confidence—is the foundation of an enjoyable ride.
          </p>
          <div className="article-meta"><span>6 MIN READ</span><span>SINGLETRACK · SKILLS · ROUTE PLANNING</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/mtb-tour-atlas-mountains.jpg" alt="Mountain bike route through the High Atlas Mountains" fetchPriority="high" />
          <figcaption>High Atlas singletrack can change quickly from flowing path to rocky, technical trail.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#singletrack">What singletrack means</a>
          <a href="#trail-character">Read the trail character</a>
          <a href="#technical-features">Technical features</a>
          <a href="#bike-setup">Choose the right bike setup</a>
          <a href="#riding-skills">Skills and trail awareness</a>
          <a href="#route-planning">Plan distance and elevation</a>
          <a href="#season">Weather and seasonal conditions</a>
          <a href="#responsible">Ride responsibly</a>
          <a href="#checklist">Pre-ride checklist</a>
          <a href="#faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            High Atlas singletrack is not one standard trail type. Routes can include compact dirt, loose stones, embedded rock, narrow hillside paths, old mule tracks and short technical steps. The character of a trail may vary within the same ride, so a useful plan describes the surfaces and features instead of relying on a general difficulty label.
          </p>

          <section id="singletrack">
            <h2>What singletrack means in the High Atlas</h2>
            <p>
              Singletrack describes a narrow path that is generally about the width of one bike. In the High Atlas, it may follow a contour across a hillside, descend towards a valley, connect settlements or thread through agricultural and mountain terrain. The route may feel smooth and flowing in one place and rough or technical a short distance later.
            </p>
            <p>
              The trail can also be part of a working landscape. Walkers, local residents, livestock and pack animals may use some paths. Riders should be ready to slow down, give space and wait where necessary rather than treating every narrow section as a downhill track.
            </p>
            <figure className="article-inline-image"><img src="/images/singletrack-mtb-atlas-mountains.jpg" alt="Narrow mountain-bike trail across the Atlas Mountains" loading="lazy" /><figcaption>Trail width, surface and visibility can matter as much as the overall distance.</figcaption></figure>
          </section>

          <section id="trail-character">
            <h2>Learn to read the trail character</h2>
            <h3>Flowing dirt and compact paths</h3>
            <p>
              Firmer dirt and gently curving trail can make it easier to maintain momentum, but dust, loose gravel or uneven edges can still affect traction. Look ahead, keep a relaxed grip and leave enough space to react when the path bends or the surface changes.
            </p>
            <h3>Rocky and uneven sections</h3>
            <p>
              Embedded stones, loose rock and small steps require controlled speed and careful line choice. Check that the route suits your skills and bike, and do not feel obliged to ride every feature. Walking a short section can be the sensible option when traction, exposure or visibility is uncertain.
            </p>
            <h3>Hillside traverses and narrow paths</h3>
            <p>
              On narrow trails, there may be little room to pass or stop safely. Stay aware of the edge, avoid sudden direction changes and dismount when a feature exceeds your comfort. Ask about exposed sections before the ride so expectations are clear in advance.
            </p>
            <div className="article-tip"><strong>Trail-planning tip</strong><p>Ask for the route surface, narrow or exposed sections, steepest features and any hike-a-bike stretches. “Singletrack” alone is not a technical difficulty rating.</p></div>
          </section>

          <section id="technical-features">
            <h2>Technical features to ask about</h2>
            <p>
              Technical difficulty can come from several factors working together: loose ground, steep gradients, tight turns, drops or steps, poor visibility, exposure and fatigue late in the ride. A short section can feel challenging even when the overall ride is not especially long. Clarify which features are continuous and which are isolated so you can judge whether the route is appropriate.
            </p>
            <p>
              If you ride with a guide, ask how the group will approach a difficult feature and where riders can regroup. A good briefing explains the line, hazards and alternatives without pressuring anyone to ride beyond their ability. For further detail, read our <Link href="/journal/high-atlas-mountain-biking-technical-trails">technical trails guide</Link>.
            </p>
          </section>

          <section id="bike-setup">
            <h2>Choose a suitable bike and setup</h2>
            <p>
              A capable mountain bike is usually the most versatile choice for rough High Atlas singletrack. Reliable brakes, tyres suited to the surface, appropriate gearing and a well-maintained drivetrain matter more than a label on the frame. Suspension can improve comfort and control on rough ground, but the best setup depends on your route, ability and preferences.
            </p>
            <p>
              If you are hiring a bike, confirm the frame size, fit, pedals, helmet availability, tyre condition and what spares are included. E-MTB riders should also discuss battery range, charging options, bike weight on technical terrain and how the itinerary will accommodate the whole group. Check brake pads, tyre pressure, wheels and drivetrain before setting off.
            </p>
            <ul className="article-checklist">
              <li><strong>Tyres:</strong> Choose suitable tread and pressure for the surface, rider weight and conditions.</li>
              <li><strong>Brakes:</strong> Confirm consistent braking and adequate pad condition for sustained descents.</li>
              <li><strong>Fit:</strong> Set saddle, controls and suspension to the rider before the first technical section.</li>
              <li><strong>Repair kit:</strong> Carry the essentials for your bike and know what support is available.</li>
            </ul>
          </section>

          <section id="riding-skills">
            <h2>Skills that make singletrack more enjoyable</h2>
            <p>
              Good mountain riding starts with looking ahead, managing speed before a turn and using both brakes progressively. A neutral stance, relaxed arms and light hands help the bike move beneath you on uneven ground. On climbs, choose a gear that allows smooth pedalling and keep traction in mind rather than trying to force every steep section.
            </p>
            <p>
              Practice basic balance, controlled braking and cornering on terrain that is comfortably within your ability before attempting more technical trails. Fatigue affects judgement and coordination, so take breaks, drink regularly and tell your guide when the pace or trail difficulty feels too demanding. A successful ride is one where you finish with energy and confidence, not only one with the most difficult features completed.
            </p>
          </section>

          <section id="route-planning">
            <h2>Plan distance, climbing and logistics together</h2>
            <p>
              Distance alone does not predict how long a singletrack route will take. A short stage with repeated climbs, loose rock or technical descents can demand more time than a longer ride on smooth tracks. Ask for an estimate of ascent, descent, expected riding time, transfers and likely stopping points, then check whether the schedule leaves room for breaks and unexpected delays.
            </p>
            <p>
              On remote or multi-day routes, discuss water and food availability, luggage handling, accommodation, communication and mechanical support. Make sure the route plan includes a sensible response to changing weather, injury or a bike problem. For wider route options, see <Link href="/journal/best-mtb-trails-atlas-mountains">The Best MTB Trails in the Atlas Mountains</Link> and the <Link href="/journal/high-atlas-trails-techniques-training">High Atlas techniques and training guide</Link>.
            </p>
          </section>

          <section id="season">
            <h2>Weather and seasonal conditions</h2>
            <p>
              Conditions vary with altitude, aspect and recent weather. Higher sections can be cold, wet or snow-affected at times, while lower and exposed trails may be hot and dusty in summer. Rain can change traction and the safety of certain paths, and wind or cloud may affect comfort and visibility. Check conditions close to departure and rely on local guidance for route access.
            </p>
            <p>
              Pack layers that match the elevation and forecast, plus sun protection and enough water for the planned route. If your itinerary includes multiple valleys or a higher pass, leave flexibility to change the sequence or choose an alternative trail if conditions require it.
            </p>
          </section>

          <section id="responsible">
            <h2>Respect the trail and the people who use it</h2>
            <p>
              Keep speed low near houses and villages, yield to walkers and animals, and stop where there is enough room for others to pass. Avoid cutting corners or creating new lines that erode the hillside. Ask before photographing people, take rubbish with you and follow the route agreed with your guide. These simple habits help maintain access and show respect for communities whose paths are part of everyday life.
            </p>
          </section>

          <section id="checklist">
            <h2>Pre-ride singletrack checklist</h2>
            <ul className="article-checklist">
              <li>Confirm route surface, technical grade, exposure, distance and ascent.</li>
              <li>Check bike fit, brakes, tyres, drivetrain and suspension if fitted.</li>
              <li>Carry water, snacks, sun protection, layers and personal repair essentials.</li>
              <li>Understand guide, communication, transfer and mechanical-support arrangements.</li>
              <li>Review the forecast and agree on alternatives if trail conditions change.</li>
              <li>Be prepared to walk a section if it is beyond your ability or unsafe to ride.</li>
            </ul>
          </section>

          <section className="article-faq" id="faq" aria-labelledby="article-faq-title">
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
            <p>This guide provides general preparation advice, not a live trail report. Confirm local access, weather, route conditions, equipment and support arrangements for your dates before riding.</p>
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
          <div><p className="article-eyebrow">RIDE THE HIGH ATLAS</p><h2>Find your line on Morocco’s singletrack.</h2><p>Share your riding experience, preferred terrain and dates to discuss a route that fits your confidence and goals.</p></div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/cycling-trips/mtb">Explore MTB Tours</Link><Link className="article-button article-button-outline" href="/contact?request=high-atlas-singletrack">Plan Your Ride</Link></div>
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
        .high-atlas-singletrack-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
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
        @media(prefers-reduced-motion:reduce){.high-atlas-singletrack-article *,.high-atlas-singletrack-article *:before,.high-atlas-singletrack-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
