import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A Rider’s Guide to Mountain Biking in the High Atlas | Mountain Bike Morocco",
  description:
    "Plan a High Atlas mountain biking trip with practical advice on trail types, route difficulty, altitude, bike setup, seasonal conditions and responsible riding in Morocco.",
  alternates: { canonical: "/journal/high-atlas-mtb-guide" },
  openGraph: {
    title: "A Rider’s Guide to Mountain Biking in the High Atlas",
    description:
      "A practical guide to mountain biking in Morocco’s High Atlas, including terrain, trail selection, preparation, equipment and route planning.",
    type: "article",
    images: ["/images/singletrack-mtb-atlas-mountains.jpg"],
  },
};

const relatedArticles = [
  {
    category: "TRAIL GUIDES",
    title: "The Best MTB Trails in the Atlas Mountains",
    text: "Compare trail styles in the High Atlas, from rocky traverses and village paths to flowing singletrack and longer descents.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/journal/best-mtb-trails-atlas-mountains",
  },
  {
    category: "TECHNICAL RIDING",
    title: "High Atlas Mountain Biking Routes: Technical Trails",
    text: "Understand loose rock, tight turns, steep gradients, line choice and the features that shape technical difficulty.",
    image: "/images/atlas-mountains-enduro-biking-tour.jpg",
    href: "/journal/high-atlas-mountain-biking-technical-trails",
  },
  {
    category: "SKILLS & TRAINING",
    title: "Mountain Biking the High Atlas: Trails, Techniques & Training",
    text: "Prepare your fitness and bike-handling skills for climbs, uneven surfaces and technical descents.",
    image: "/images/singletrack-biking-morocco.jpg",
    href: "/journal/high-atlas-trails-techniques-training",
  },
];

const faqs = [
  {
    question: "What is mountain biking in the High Atlas like?",
    answer:
      "It varies from valley to valley. Routes may include rocky mountain paths, dirt tracks, old mule paths, rural roads, narrow singletrack and sustained descents. Ask for a description of the actual route surface, technical features, ascent and expected riding time instead of choosing by distance alone.",
  },
  {
    question: "Do I need to be an advanced rider?",
    answer:
      "Not every High Atlas ride is advanced, but many routes include uneven ground, loose surfaces or climbs. Choose a route around your current fitness, bike control and experience, and discuss any features that feel outside your comfort zone. A suitable route should challenge you appropriately without requiring you to ride beyond your ability.",
  },
  {
    question: "Which bike is best for the High Atlas?",
    answer:
      "A mountain bike is usually the most versatile option for rough tracks and technical trails. E-MTBs can help with sustained climbing, while smoother roads or gravel itineraries may suit other bike styles. Confirm the route surface, bike availability, size, fit and support arrangements before you travel.",
  },
  {
    question: "When should I plan a High Atlas mountain bike trip?",
    answer:
      "Spring and autumn are often considered for many lower and mid-altitude routes, but conditions depend on elevation, recent weather and the exact trail. Higher areas can be cold or snow-affected, while lower exposed terrain can be hot in summer. Check current conditions for your intended route and dates.",
  },
  {
    question: "How fit do I need to be?",
    answer:
      "Fitness needs depend on daily distance, climbing, altitude, surface and how continuous the technical riding is. Tell your organiser what you normally ride, how much elevation you are comfortable with and whether you prefer a steady pace or demanding days. This helps set realistic stages and recovery time.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring a correctly fitted helmet, gloves, eyewear, suitable shoes, riding clothing, sun protection, water capacity and layers for changing mountain weather. Confirm whether bike hire, helmet, tools, spares, luggage transfers, food and mechanical support are included, and build your personal kit list around the final itinerary.",
  },
];

export default function HighAtlasMtbGuidePage() {
  return (
    <main className="high-atlas-mtb-guide-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>A Rider’s Guide to Mountain Biking in the High Atlas</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">MOUNTAIN BIKE GUIDES · HIGH ATLAS · MOROCCO</p>
          <h1>A Rider’s Guide to Mountain Biking in the High Atlas</h1>
          <p className="article-deck">
            The High Atlas offers a varied mountain-bike experience, with rugged tracks, village paths, narrow singletrack and long descents between changes in elevation. The most rewarding ride is one that matches your fitness and bike-handling skills to the terrain, leaves time to enjoy the landscape and respects the communities that make these valleys home.
          </p>
          <div className="article-meta"><span>6 MIN READ</span><span>TRAILS · ROUTE CHOICE · PREPARATION</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/singletrack-mtb-atlas-mountains.jpg" alt="Mountain bike singletrack through Morocco’s High Atlas Mountains" fetchPriority="high" />
          <figcaption>High Atlas riding links mountain terrain, village tracks and changing valley landscapes.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#why-high-atlas">Why ride the High Atlas?</a>
          <a href="#trail-types">Understand trail types</a>
          <a href="#choose-route">Choose a suitable route</a>
          <a href="#fitness-altitude">Fitness and altitude</a>
          <a href="#bike-equipment">Bike and equipment</a>
          <a href="#season-conditions">Weather and seasons</a>
          <a href="#ride-responsibly">Ride responsibly</a>
          <a href="#plan-trip">Plan a cycling trip</a>
          <a href="#checklist">Pre-trip checklist</a>
          <a href="#faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            Mountain biking in the High Atlas is not a single trail experience. Depending on the area, the ride may follow compact dirt, loose stone, uneven mountain paths, farm tracks, old mule routes or technical singletrack. Route selection should take account of the terrain and the riders—not just the distance shown on a map.
          </p>

          <section id="why-high-atlas">
            <h2>Why ride the High Atlas?</h2>
            <p>
              The High Atlas provides a strong sense of variety. A ride can move between open slopes, terraced fields, mountain villages and rugged valleys, with the scenery and surface changing as elevation rises or falls. Some routes focus on steady exploration and landscape, while others are better suited to confident riders looking for technical features or sustained descents.
            </p>
            <p>
              Cycling also gives you time to notice the places between destinations. Plan space for stops, local food, viewpoints and village interactions instead of trying to maximise every kilometre. The schedule should leave room for a natural pace and for small changes if the conditions or group energy call for them.
            </p>
            <figure className="article-inline-image"><img src="/images/atlas-mountains-cycling-tour-morocco.jpg" alt="Cycling through a High Atlas Mountain landscape" loading="lazy" /><figcaption>The best ride balances terrain, scenery, effort and time to enjoy the region.</figcaption></figure>
          </section>

          <section id="trail-types">
            <h2>Understand the trail types</h2>
            <h3>Mountain tracks and rural paths</h3>
            <p>
              Wider tracks can be useful for scenic riding and linking valleys, but surface quality still varies. Expect the possibility of loose stones, erosion, ruts or steep sections. Ask how much of the ride is on rough track versus paved road, and whether any sections are used by walkers, local residents or livestock.
            </p>
            <h3>Singletrack and technical terrain</h3>
            <p>
              Narrow paths may include tight turns, embedded rock, steep gradients or exposed traverses. These features require controlled speed and confident line choice. If you are unsure about a feature, walking it is a sensible option. Review the <Link href="/journal/high-atlas-mountain-biking-technical-trails">technical trails guide</Link> for more detail on difficulty and preparation.
            </p>
            <h3>Road and gravel links</h3>
            <p>
              Some itineraries use quiet roads or gravel sections to connect trail areas. This can make a route more varied, but means tyre choice, traffic exposure and the distance between stops become part of the planning. Confirm the surface mix before choosing a bike or agreeing to daily distances.
            </p>
            <div className="article-tip"><strong>Route tip</strong><p>Ask for a stage-by-stage description of surface, ascent, technical features, transfer time and expected riding time. A single difficulty label rarely tells the full story.</p></div>
          </section>

          <section id="choose-route">
            <h2>Choose a route that fits your riding level</h2>
            <p>
              Before choosing a route, think about the terrain you ride comfortably at home. Can you brake smoothly on loose ground? Are you confident cornering on uneven surfaces? Do you enjoy long climbs, steep descents or a steady scenic ride? Specific answers help match the plan to the group and avoid surprises once you are on the trail.
            </p>
            <p>
              Beginner and intermediate riders may prefer routes with manageable gradients, room to stop and alternatives around technical features. Advanced riders may want more singletrack or steeper descents, but the itinerary should still account for fatigue, weather, visibility and how the group will regroup. For broader trail inspiration, read <Link href="/journal/best-mtb-trails-atlas-mountains">The Best MTB Trails in the Atlas Mountains</Link>.
            </p>
            <ul className="article-checklist">
              <li>Ask about the surface and the steepest or most technical sections.</li>
              <li>Compare daily ascent and descent as well as total distance.</li>
              <li>Clarify whether there are hike-a-bike sections or exposed traverses.</li>
              <li>Make sure the pace and planned stops suit everyone in the group.</li>
            </ul>
          </section>

          <section id="fitness-altitude">
            <h2>Prepare for fitness, climbing and altitude</h2>
            <p>
              Mountain days often involve repeated efforts rather than one continuous climb. Rough surfaces and technical descents can also increase concentration demands, even when the distance looks modest. Training that includes steady aerobic rides, climbing, controlled descending and back-to-back riding days can help prepare you for a multi-day itinerary.
            </p>
            <p>
              Elevation affects comfort and effort differently for different people. Start conservatively, drink regularly, eat throughout longer stages and let your guide know if you feel unwell or unusually fatigued. Do not assume that fitness alone makes a high or exposed route appropriate; conditions and route access matter too.
            </p>
          </section>

          <section id="bike-equipment">
            <h2>Choose the right bike and equipment</h2>
            <p>
              A mountain bike is generally the most versatile option for rough tracks and technical trails. Reliable brakes, suitable tyres, gearing for sustained climbs and a properly adjusted fit are key. E-MTB can support climbing effort, but it still needs the right handling skills and careful battery planning. Gravel or road bikes may suit itineraries with smoother surfaces, provided the route is designed for them.
            </p>
            <p>
              If you hire a bike, confirm the frame size, setup, pedals, helmet availability and what repair tools or spares are included. If you bring your own bike, ask about transport, luggage handling and assembly time. Check tyres, brakes, drivetrain, suspension if fitted, and the condition of any lights or navigation devices before departing.
            </p>
          </section>

          <section id="season-conditions">
            <h2>Weather and seasonal conditions</h2>
            <p>
              Conditions can vary substantially between lower valleys and higher mountain routes. Mornings may be cool, exposed sections windy, and high areas affected by cold, rain or snow at certain times. Lower and open terrain can become very hot during summer. Recent weather may also alter grip or access on unpaved routes.
            </p>
            <p>
              Use seasonal guidance as a starting point, then confirm conditions close to travel. Pack layers, sun protection and enough water for the planned route, and allow flexibility in case a stage needs to change. A sensible itinerary should not force the group onto a route when conditions are unsuitable.
            </p>
          </section>

          <section id="ride-responsibly">
            <h2>Ride responsibly through mountain communities</h2>
            <p>
              Some routes pass through villages, agricultural land and paths used by people and animals. Slow down near homes, give walkers and livestock space, ask before photographing people and follow local guidance about access. Avoid cutting corners or riding around obstacles in ways that widen or damage a trail.
            </p>
            <p>
              Carry out your rubbish, respect private property and be considerate when stopping or regrouping. Travelling with local knowledge can help you understand which paths are appropriate for cycling and how to approach village areas thoughtfully.
            </p>
          </section>

          <section id="plan-trip">
            <h2>Plan your High Atlas mountain bike trip</h2>
            <p>
              Start with your preferred riding style, dates, group size and the amount of time available. Then discuss route choice, elevation, accommodation, meals, transfers, luggage, mechanical support and what is included in the price. If you want to connect multiple valleys or add a desert or coastal stage, make sure travel time and recovery are built into the itinerary.
            </p>
            <p>
              You do not need to arrive with a finished plan. Share what you want from the ride and be honest about your experience, and use the discussion to clarify options and trade-offs before confirming the details. Explore <Link href="/destinations/atlas-mountains">Atlas Mountains destinations</Link> or <Link href="/cycling-trips/mtb">mountain bike tours</Link> for more inspiration.
            </p>
          </section>

          <section id="checklist">
            <h2>High Atlas MTB trip checklist</h2>
            <ul className="article-checklist">
              <li>Confirm route surface, technical level, ascent, descent and daily riding time.</li>
              <li>Prepare bike fit, tyres, brakes, drivetrain and suspension if fitted.</li>
              <li>Pack helmet, gloves, eyewear, water, food, sun protection and layers.</li>
              <li>Ask about guides, transfers, luggage, accommodation and mechanical support.</li>
              <li>Review weather and agree on alternatives if route conditions change.</li>
              <li>Respect local people, livestock, paths and village access.</li>
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
            <p>This guide provides general preparation advice, not a live trail report. Confirm current route access, weather, equipment, support arrangements and inclusions for your exact dates before travelling.</p>
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
          <div><p className="article-eyebrow">RIDE THE HIGH ATLAS</p><h2>Plan a mountain bike journey that fits you.</h2><p>Share your riding experience, preferred terrain and travel dates to discuss suitable routes and practical arrangements.</p></div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/cycling-trips/mtb">Explore MTB Tours</Link><Link className="article-button article-button-outline" href="/contact?request=high-atlas-mtb-guide">Plan Your Ride</Link></div>
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
        <div className="article-shell article-footer-bottom"><span>© {new Date().getFullYear()} Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>
      <style>{`
        .high-atlas-mtb-guide-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
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
        @media(prefers-reduced-motion:reduce){.high-atlas-mtb-guide-article *,.high-atlas-mtb-guide-article *:before,.high-atlas-mtb-guide-article *:after{scroll-behavior:auto!important;transition:none!important}}
`}</style>
    </main>
  );
}
