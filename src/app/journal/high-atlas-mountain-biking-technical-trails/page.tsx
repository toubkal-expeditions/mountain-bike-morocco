import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "High Atlas Mountain Biking Routes: Technical Trails | Mountain Bike Morocco",
  description:
    "Learn how to assess technical mountain-bike trails in Morocco's High Atlas, including loose rock, steep gradients, narrow traverses, line choice, preparation and responsible riding.",
  alternates: { canonical: "/journal/high-atlas-mountain-biking-technical-trails" },
  openGraph: {
    title: "High Atlas Mountain Biking Routes: Technical Trails",
    description:
      "A practical guide to technical trail features, skills, preparation and choosing a suitable High Atlas mountain-bike route.",
    type: "article",
    images: ["/images/atlas-mountains-enduro-biking-tour.jpg"],
  },
};

const relatedArticles = [
  {
    category: "TRAIL GUIDE",
    title: "The Best MTB Trails in the Atlas Mountains",
    text: "Compare the varied terrain of the High Atlas, from village tracks and rocky traverses to singletrack and long descents.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/journal/best-mtb-trails-atlas-mountains",
  },
  {
    category: "DESTINATION GUIDE",
    title: "Complete High Atlas Mountains Cycling Guide",
    text: "Plan around altitude, seasons, route logistics, village visits and the riding style that best suits your holiday.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/journal/complete-high-atlas-mountains-cycling-guide",
  },
  {
    category: "SKILLS & TRAINING",
    title: "Mountain Biking the High Atlas: Trails, Techniques & Training",
    text: "Build confidence with practical advice on bike control, fitness, pacing and preparing for several days on the bike.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/journal/mountain-biking-high-atlas-trails-techniques-training",
  },
];

const faqs = [
  {
    question: "Do all technical High Atlas routes require advanced skills?",
    answer:
      "No. Trail character varies by valley and route. Some itineraries combine easier tracks with a few more demanding sections, while others are designed around technical riding. Ask for a clear description of the surface, gradients, exposure, hike-a-bike sections and the expected riding standard before choosing.",
  },
  {
    question: "What does a technical trail grade tell me?",
    answer:
      "A grade is a guide, not a complete description. It should be considered alongside loose or embedded rock, steepness, narrowness, exposure, surface conditions and the consequences of a mistake. Ask the organiser how they describe difficulty and whether they can share specific examples of the terrain.",
  },
  {
    question: "Should I ride every technical section?",
    answer:
      "No. Walking a feature is a sensible decision whenever you feel uncertain, tired or unable to assess the line safely. A good ride is about sound judgement and an enjoyable day, not proving that every obstacle can be ridden.",
  },
  {
    question: "What bike is suitable for technical mountain trails?",
    answer:
      "The right bike depends on the route, your preferences and the terrain. Before travelling, confirm what bikes are available, whether the geometry and suspension suit the planned riding, what sizes can be supplied, and which repair spares and tools will be carried. A well-maintained and correctly fitted bike matters more than choosing equipment by label alone.",
  },
  {
    question: "How can I prepare if I live somewhere without rocky trails?",
    answer:
      "Practise fundamental skills on terrain you can access: controlled braking, looking ahead, smooth cornering, riding over small uneven features and choosing a line at a comfortable speed. Add steady endurance rides and strength work appropriate to your current fitness. Build gradually rather than trying difficult features before your fundamentals feel reliable.",
  },
  {
    question: "Can a guide adapt the route to our group's ability?",
    answer:
      "You can discuss route options around the group's experience, confidence, fitness and preferred daily effort. Make sure the organiser understands the abilities of the least experienced rider and confirms what alternatives are realistic for the planned day and conditions.",
  },
];

export default function HighAtlasTechnicalTrailsPage() {
  return (
    <main className="atlas-technical-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>High Atlas Mountain Biking Routes: Technical Trails</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">TECHNICAL RIDING · HIGH ATLAS</p>
          <h1>High Atlas Mountain Biking Routes: Technical Trails</h1>
          <p className="article-deck">
            The High Atlas offers rewarding mountain terrain, but technical riding means more than steep descents. Learn how to read trail surfaces, choose a realistic line, prepare your bike and decide when a section is better walked than ridden.
          </p>
          <div className="article-meta"><span>7 MIN READ</span><span>TRAIL SKILLS & PREPARATION</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/atlas-mountains-enduro-biking-tour.jpg" alt="Technical mountain-bike riding on rocky Atlas Mountain terrain" fetchPriority="high" />
          <figcaption>Technical routes reward a measured pace, a clear view of the trail and good decisions before committing to a feature.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#trail-features">What makes a trail technical?</a>
          <a href="#surface-and-line">Surface and line choice</a>
          <a href="#control">Braking, balance and vision</a>
          <a href="#climbs-descents">Climbs and descents</a>
          <a href="#bike-setup">Bike setup and equipment</a>
          <a href="#fitness">Fitness and preparation</a>
          <a href="#route-choice">Choose the right route</a>
          <a href="#responsible-riding">Safety and responsible riding</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            Technical High Atlas routes may include loose stones, embedded rock, tight turns, steep gradients, narrow traverses and variable grip. One route can change character several times in a day. Understanding those features—and being honest about your confidence on them—helps you enjoy the riding without turning every section into a test.
          </p>

          <section id="trail-features">
            <h2>What makes a High Atlas trail technical?</h2>
            <p>
              Trail difficulty is shaped by more than distance or elevation gain. A short section can be challenging when the surface is loose, the trail narrows, the gradient steepens or there is little room to correct a mistake. A longer ride on a wider, predictable track can feel much easier even when the overall distance is greater.
            </p>
            <p>
              In the High Atlas, riders may encounter stones that move under the tyres, rock steps, ruts, sharp turns, uneven natural surfaces and transitions between compact dirt and loose gravel. Weather and recent use can alter grip. A line that felt straightforward when dry may need more care after rain or when loose material has shifted.
            </p>
            <p>
              Before committing to a ride, ask for a description of the hardest sections rather than relying on a single label such as easy, moderate or difficult. Useful details include how long the technical stretches last, whether they are exposed, how steep they are, and whether riders can stop safely to look at a feature.
            </p>
            <div className="article-tip">
              <strong>Route-planning tip</strong>
              <p>Ask the guide to explain the terrain in plain language: loose rock, narrow traverses, steep steps and likely hike-a-bike sections are more useful clues than a grade alone.</p>
            </div>
          </section>

          <section id="surface-and-line">
            <h2>Reading the surface and choosing a line</h2>
            <p>
              Line choice begins before the obstacle. Look ahead, identify the clearest route through the feature and notice where the trail opens up again. Keep your speed low enough to make a controlled decision, and avoid staring only at the rock or rut directly in front of your wheel. Looking towards the space you want to travel helps your body and bike follow the chosen direction.
            </p>
            <p>
              Loose stones can move under braking or cornering forces, so abrupt inputs are more likely to unsettle the bike. Where possible, make speed adjustments before the turn, keep movements smooth and leave room to change your plan. If the line is unclear, stop at a safe place and inspect it from beside the trail.
            </p>
            <p>
              Not every obstacle has one correct line for every rider. Tyre choice, bike setup, confidence, fatigue and conditions affect what feels manageable. A guide can point out common options, but you should choose a line that matches your ability and walk a section when you cannot see a safe way through it.
            </p>
          </section>

          <section id="control">
            <h2>Braking, balance and looking ahead</h2>
            <p>
              On technical terrain, control usually comes from combining several small habits instead of making one dramatic movement. Keep your hands relaxed, look farther along the trail than the front wheel, and stay balanced so the bike can move beneath you. Your exact body position changes with the gradient and obstacle, so practise fundamental skills on terrain where you can stop easily and repeat a feature without pressure.
            </p>
            <h3>Brake progressively</h3>
            <p>
              Use controlled, progressive braking and try to manage speed before entering a corner or steep section. Sudden braking while turning on loose ground can reduce grip. The amount of braking available depends on the surface and conditions, so leave more margin when the trail is unfamiliar or dusty, wet or especially rocky.
            </p>
            <h3>Keep the ride within your comfort zone</h3>
            <p>
              A technical trail is not a place to follow another rider blindly. Leave enough space to see the surface and react, and regroup where the trail widens. If you feel tense or rushed, stop at a safe place, breathe and review the next section. Confidence grows through repeated, manageable practice rather than pressure to keep up.
            </p>
          </section>

          <section id="climbs-descents">
            <h2>Technical climbs and long descents</h2>
            <p>
              Technical climbs require pacing and traction as well as fitness. Loose surfaces and uneven steps can interrupt momentum, while short steep sections can demand a good choice of gear and a steady effort. If you lose traction repeatedly, dismounting and walking a short stretch can be more efficient than forcing an unsafe attempt.
            </p>
            <p>
              Descents bring a different set of demands. Speed can build quickly on an open section and then meet a tight bend, loose patch or rock step. Stay attentive even when the trail looks familiar, and do not assume the person in front has cleared every feature. Give yourself room to slow down and make decisions rather than treating the descent as a race.
            </p>
            <p>
              Fatigue can affect judgement late in the day. Food, water, breaks and a realistic daily schedule support good decisions as much as technical practice does. Ask how the route is organised, where the group will regroup, and what support is available if someone becomes tired or has a mechanical issue.
            </p>
          </section>

          <section id="bike-setup">
            <h2>Bike setup, equipment and trail-side repairs</h2>
            <p>
              A correctly fitted, well-maintained bike helps you focus on the trail. Before travelling, confirm which bike type is appropriate for the route, the available frame sizes and the condition of the equipment supplied. If bringing your own bike, check that brakes, tyres, drivetrain and suspension are serviced before departure, and make sure you are comfortable with the bike's controls.
            </p>
            <ul className="article-checklist">
              <li><strong>Tyres and grip:</strong> ask about suitable tyre condition and pressure for the planned surface, and inspect for cuts or damage before riding.</li>
              <li><strong>Brakes:</strong> check lever feel and stopping power before the ride, especially before a long descent.</li>
              <li><strong>Helmet and eye protection:</strong> use a properly fitted helmet and protect your eyes from dust, wind and small debris.</li>
              <li><strong>Basic repair needs:</strong> confirm which tools, tubes or tubeless repair supplies, pump and spares you should carry and what the support team provides.</li>
              <li><strong>Personal essentials:</strong> carry water, snacks, sun protection and an extra layer suited to the elevation and forecast.</li>
            </ul>
            <p>
              The support arrangement varies by trip. Ask whether a guide carries repair tools, whether a support vehicle can access the route, and how the group will manage a mechanical problem on remote terrain. Do not assume that every trail section is accessible to a vehicle or that all replacement parts will be available immediately.
            </p>
          </section>

          <section id="fitness">
            <h2>Prepare your skills and fitness before the trip</h2>
            <p>
              Preparation does not require access to identical mountain terrain. Build a reliable base with regular rides, comfortable climbing efforts and enough endurance to stay focused throughout the planned day. For multi-day trips, practise riding on consecutive days so you can understand how your body responds to repeated effort and recovery time.
            </p>
            <p>
              Work on core handling skills on safe, familiar ground: controlled braking, steady cornering, looking through a turn, riding over small bumps and stopping smoothly. Increase difficulty gradually and avoid attempting features that exceed your skill just because they appear in a video or guide. If you are new to technical riding, a skills session with a qualified instructor can help identify what to practise.
            </p>
            <p>
              Share your honest experience with the tour organiser. Explain the terrain you usually ride, the length of ride you are comfortable with, your climbing experience and which features make you nervous. That information helps when discussing an appropriate itinerary and makes expectations clearer for everyone in the group.
            </p>
          </section>

          <section id="route-choice">
            <h2>How to choose a technical route that suits you</h2>
            <p>Before you confirm a route, use these questions to compare options:</p>
            <ul className="article-checklist">
              <li><strong>What is the hardest feature?</strong> Ask about the steepest, narrowest or loosest sections, not just the overall grade.</li>
              <li><strong>How much climbing is involved?</strong> Consider elevation gain, altitude, surface and the number of days riding in a row.</li>
              <li><strong>Can the itinerary be adapted?</strong> Confirm whether there are alternative tracks or opportunities to walk difficult sections.</li>
              <li><strong>What support is included?</strong> Clarify guiding, transfers, luggage handling, mechanical help and emergency communication arrangements.</li>
              <li><strong>What are the likely conditions?</strong> Check seasonal temperatures, forecast, trail condition and any route access considerations close to departure.</li>
              <li><strong>Does it suit the whole group?</strong> Plan for the least experienced rider rather than assuming everyone has the same skills and pace.</li>
            </ul>
            <p>
              A well-chosen route should offer a meaningful challenge while leaving room for learning, breaks and enjoyment. The goal is not to make every stage as technical as possible; it is to find terrain that fits your ability and the kind of holiday you want.
            </p>
          </section>

          <section id="responsible-riding">
            <h2>Safety and responsible riding in mountain communities</h2>
            <p>
              High Atlas tracks may be shared by residents, walkers, pack animals and other users. Slow down in and near villages, give people and animals plenty of space, follow your guide's instructions and avoid blocking paths. Be courteous when passing and do not assume a trail is reserved for cyclists simply because it appears on a route plan.
            </p>
            <p>
              Stick to established routes and avoid shortcuts that can widen trails or damage fragile slopes. Carry out rubbish, respect private property and ask before photographing people. Local customs and daily routines vary from place to place; a respectful approach makes a cycling visit more considerate and often more rewarding.
            </p>
            <p>
              Mountain weather, remoteness and changing trail surfaces all deserve respect. Before departure, agree on the group's pace, regrouping points and communication plan. Follow the guide's decisions about conditions, and be ready to change or shorten the route if weather, trail condition, a mechanical issue or rider fatigue makes the original plan unsuitable.
            </p>
            <div className="article-author-note">
              <strong>Planning note</strong>
              <p>This guide is general preparation advice, not a report of live trail conditions. Specific routes, technical features, access and support should be confirmed for your dates and the conditions expected on the day.</p>
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
            <div><p className="article-eyebrow article-eyebrow-dark">KEEP EXPLORING</p><h2>More Atlas riding guides</h2></div>
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
            <p className="article-eyebrow">FIND YOUR LEVEL</p>
            <h2>Choose a High Atlas ride that challenges you in the right way.</h2>
            <p>Share your experience, preferred terrain, dates and group size. Discuss route difficulty, support and the practical details before confirming your cycling plans.</p>
          </div>
          <div className="article-cta-actions">
            <Link className="article-button article-button-light" href="/contact?request=technical-mtb-route-planning">Plan an MTB trip ↗</Link>
            <Link className="article-button article-button-outline" href="/destinations/atlas-mountains">Explore the Atlas ↗</Link>
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
        .atlas-technical-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
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
        @media(prefers-reduced-motion:reduce){.atlas-technical-article *,.atlas-technical-article *:before,.atlas-technical-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
