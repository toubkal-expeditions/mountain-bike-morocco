import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Best MTB Trails in the Atlas Mountains | Mountain Bike Morocco",
  description:
    "Explore the kinds of High Atlas mountain-bike terrain to consider in Morocco, from rocky traverses and village tracks to technical singletrack, descents and responsible route planning.",
  alternates: { canonical: "/journal/best-mtb-trails-atlas-mountains" },
  openGraph: {
    title: "The Best MTB Trails in the Atlas Mountains",
    description:
      "A practical guide to choosing High Atlas mountain-bike trails by terrain, skill level, conditions and the experience you want from your ride.",
    type: "article",
    images: ["/images/atlas-mountains-singletrack.jpg"],
  },
};

const relatedArticles = [
  {
    category: "DESTINATION GUIDE",
    title: "Complete High Atlas Mountains Cycling Guide",
    text: "Plan around altitude, seasons, village routes, logistics and the cycling style that best fits your holiday.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/journal/complete-high-atlas-mountains-cycling-guide",
  },
  {
    category: "TECHNICAL RIDING",
    title: "High Atlas Mountain Biking Routes: Technical Trails",
    text: "Understand trail surfaces, steep sections, exposure and the preparation useful for technical mountain riding.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/journal/high-atlas-mountain-biking-technical-trails",
  },
  {
    category: "TRIP PLANNING",
    title: "Mountain Biking the High Atlas: Trails, Techniques & Training",
    text: "Build confidence with practical advice on handling, fitness, pacing and preparing for a multi-day ride.",
    image: "/images/mountain-bike-morocco-hero.jpg",
    href: "/journal/mountain-biking-high-atlas-trails-techniques-training",
  },
];

const faqs = [
  {
    question: "Are the Atlas Mountains trails suitable for beginners?",
    answer:
      "Some routes may suit newer mountain bikers who have basic bike control and are comfortable riding on uneven surfaces. Narrow, rocky or steep trails can demand more experience. Share your recent riding experience with the trip planner so the route can be matched to your group rather than choosing by scenery alone.",
  },
  {
    question: "Do all High Atlas routes use singletrack?",
    answer:
      "No. Depending on the area and itinerary, a ride can include village paths, wider dirt tracks, rocky traverses, road connections and singletrack. Ask for a route description that explains the surface, technical sections, elevation gain and any places where riders may need to walk the bike.",
  },
  {
    question: "What should I check before booking an MTB route?",
    answer:
      "Confirm approximate distance and climbing, technical difficulty, expected surface, transfer time, guide and support arrangements, bike availability, included equipment and the plan for changing conditions. Ask whether the route is suitable for the least experienced rider in your group.",
  },
  {
    question: "What is the best time of year to ride?",
    answer:
      "Conditions depend on altitude, location and the type of trail. Spring and autumn can be comfortable for many lower and mid-altitude rides, while high areas may be cold or affected by snow and lower terrain can be hot in summer. Check conditions for your exact route and travel dates before confirming plans.",
  },
];

export default function BestMtbTrailsAtlasMountainsPage() {
  return (
    <main className="atlas-mtb-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>The Best MTB Trails in the Atlas Mountains</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">MOUNTAIN BIKE GUIDES · HIGH ATLAS</p>
          <h1>The Best MTB Trails in the Atlas Mountains</h1>
          <p className="article-deck">
            Explore the kinds of High Atlas terrain that make Morocco rewarding for mountain bikers—from rocky traverses and village tracks to flowing singletrack and long descents. The right ride is the one that fits your skills, conditions and appetite for adventure.
          </p>
          <div className="article-meta"><span>7 MIN READ</span><span>TRAIL CHOICE & PREPARATION</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/atlas-mountains-singletrack.jpg" alt="A mountain-bike trail crossing the rugged Atlas Mountains" fetchPriority="high" />
          <figcaption>High Atlas terrain can shift from rocky tracks to narrow trail sections within the same ride.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#terrain">Understanding the terrain</a>
          <a href="#singletrack">Singletrack and technical trails</a>
          <a href="#village-paths">Village paths and mountain tracks</a>
          <a href="#choose-route">Choosing the right route</a>
          <a href="#prepare">How to prepare</a>
          <a href="#responsible-riding">Ride responsibly</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            The Atlas Mountains are not one continuous trail with a single difficulty rating. Routes change with elevation, valley, surface and local conditions. One day may combine rocky traverses, compact dirt and old paths between settlements; another may focus on narrow singletrack or a long descent. Planning around the actual trail character is more useful than relying on distance alone.
          </p>

          <section id="terrain">
            <h2>Understanding High Atlas mountain-bike terrain</h2>
            <p>
              The High Atlas landscape includes steep-sided valleys, terraced slopes, high viewpoints, rural tracks and rocky ground. That variety is a big part of the appeal, but it also means that a route's headline distance only tells part of the story. A shorter ride with loose stone, tight turns and sustained climbing can feel more demanding than a longer day on smoother tracks.
            </p>
            <p>
              When comparing rides, look for a description of surface and difficulty as well as kilometres. Ask how much climbing is involved, whether the descent is continuous or broken into sections, whether there are exposed edges, and whether any steep or rough stretches may require you to walk the bike. These details help you choose a route that feels rewarding instead of stressful.
            </p>
          </section>

          <section id="singletrack">
            <h2>1. Singletrack and technical mountain trails</h2>
            <p>
              Narrow singletrack can be a highlight for experienced riders who enjoy precise line choice, controlled braking and changing terrain. The trail may be rocky, uneven or winding, with tight turns that reward looking ahead and staying relaxed on the bike. Some sections may be smooth and flowing; others can demand slower, more deliberate riding.
            </p>
            <p>
              Technical trails are not automatically the best choice for every rider. Be honest about your comfort on loose surfaces, your ability to manage steep gradients and your experience on narrow paths. A local guide can explain the main features before a section begins and help a group choose appropriate alternatives when the terrain is beyond someone's ability or the conditions are unsuitable.
            </p>
            <div className="article-tip">
              <strong>Trail tip</strong>
              <p>Ask whether technical sections have safe places to stop and regroup. A good route plan gives riders time to assess a feature before attempting it.</p>
            </div>
          </section>

          <section id="village-paths">
            <h2>2. Village paths, mule tracks and wider mountain routes</h2>
            <p>
              Not every memorable ride needs to be a difficult singletrack challenge. Wider dirt routes and established paths can link valleys, rural settlements and mountain viewpoints. They can be a better fit for mixed-ability groups or riders who want to balance time on the bike with pauses to appreciate the landscape and local life.
            </p>
            <p>
              Paths may also be part of everyday village access, used by walkers, residents and animals. Slow down near homes, give people plenty of space and follow your guide's direction about where to pass. These are shared routes, not closed cycling circuits, so courtesy is an important part of a good day out.
            </p>
          </section>

          <section>
            <h2>3. Long descents and changing mountain surfaces</h2>
            <p>
              A route with a rewarding descent can still require fitness and concentration. Riders may climb for a long period before descending over loose rock, hard-packed dirt or broken ground. Fatigue can affect judgement, especially late in the day, so pacing and food and water breaks matter as much as technical skill.
            </p>
            <p>
              Before setting off, ask what the descent involves and whether the group will be supported by a guide or vehicle. Confirm where the ride starts and finishes, how transfers work, and what happens if someone is tired or a bike develops a mechanical issue. The precise arrangements vary by trip and should be confirmed with the organiser.
            </p>
          </section>

          <section id="choose-route">
            <h2>How to choose the right Atlas MTB route</h2>
            <p>Use these questions to compare options before you book:</p>
            <ul className="article-checklist">
              <li><strong>Technical confidence:</strong> Are you comfortable with loose rocks, narrow paths, steep turns and changing grip?</li>
              <li><strong>Fitness and climbing:</strong> What daily distance and elevation can the whole group enjoy consistently?</li>
              <li><strong>Surface:</strong> Will the route use singletrack, wider dirt tracks, paved connections or a mixture?</li>
              <li><strong>Altitude and weather:</strong> What conditions are expected for the planned dates and elevation?</li>
              <li><strong>Support:</strong> What guiding, mechanical help, transfers, water stops and luggage arrangements are included?</li>
              <li><strong>Group fit:</strong> Can the route be adapted to the least experienced rider without putting anyone under pressure?</li>
            </ul>
            <p>
              A good trip description should make these things clear. If the details are not available yet, ask before confirming the booking. The most enjoyable itinerary is usually one that balances challenge, scenery, time to recover and enough flexibility to respond to conditions.
            </p>
          </section>

          <section id="prepare">
            <h2>How to prepare for a High Atlas mountain-bike ride</h2>
            <p>
              Arrive with a bike that is appropriately sized and mechanically sound. Check the brakes, tyres, drivetrain and suspension setup before the ride, and make sure you know how to use the bike's controls. If you are hiring equipment, confirm the available sizes and what is included—especially helmet, pedals, repair tools and spare parts.
            </p>
            <p>
              Bring a correctly fitted helmet, gloves, eye protection, comfortable riding clothing, suitable shoes and enough water capacity for the route. Depending on season and altitude, a warm layer and a lightweight wind or rain layer may be useful. Ask the organiser what snacks, water, tools and emergency supplies are provided so you can pack sensibly rather than assume all tours carry the same equipment.
            </p>
            <p>
              You do not need to train for a race to enjoy a mountain-bike holiday, but regular rides that include climbing and uneven surfaces will help you feel more comfortable. Practise smooth braking, choosing a line and riding at a controlled speed on terrain similar to what you expect. If the trip is multi-day, build consistency and recovery into your preparation, not just maximum effort.
            </p>
          </section>

          <section id="responsible-riding">
            <h2>Ride responsibly through the mountains</h2>
            <p>
              Respect for local communities and the landscape should shape every ride. Give way to pedestrians and animals, reduce speed when passing homes, follow the route agreed with your guide and avoid creating shortcuts that widen or damage paths. Close gates if you have been asked to do so, take rubbish with you and ask before photographing people.
            </p>
            <p>
              Conditions, access and trail surfaces can change, and this guide is not a live trail report. Check the current situation for your planned route, listen to local guidance and be willing to adjust the day if weather, visibility or trail conditions make the original plan unsuitable.
            </p>
          </section>

          <section>
            <h2>Make the trail fit the adventure you want</h2>
            <p>
              The best MTB trail in the Atlas is not necessarily the steepest or most technical. It is the route that matches your confidence and fitness, gives you the right amount of challenge, and leaves room to enjoy the mountains and the communities along the way. Start with your experience and travel dates, then build the itinerary around realistic riding days and support arrangements.
            </p>
            <p>
              If you are deciding between a single guided ride and a longer mountain-bike holiday, explore the available options and ask for details about trail surface, climbing, difficulty and equipment before making a decision.
            </p>
          </section>

          <section className="article-faq" aria-labelledby="article-faq-title">
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
            <p>This guide offers general preparation advice. Confirm your exact route, current conditions, trail access, equipment and support arrangements with the trip organiser before travelling.</p>
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
          <div><p className="article-eyebrow">YOUR NEXT RIDE STARTS HERE</p><h2>Find your route in the High Atlas.</h2><p>Tell us about your riding experience, preferred terrain and travel dates to discuss a route that fits your group.</p></div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/destinations/atlas-mountains">Explore Atlas Mountains</Link><Link className="article-button article-button-outline" href="/contact?request=mtb-route-planning&destination=Atlas%20Mountains">Plan your MTB trip</Link></div>
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
