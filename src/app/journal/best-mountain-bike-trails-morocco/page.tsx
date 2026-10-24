import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Mountain Bike Trails in Morocco | Mountain Bike Morocco",
  description:
    "Compare Morocco’s mountain-bike regions, from High Atlas singletrack and Imlil valley routes to Agafay’s rocky terrain and southern trails. Learn how to choose routes by skill, season and support needs.",
  alternates: { canonical: "/journal/best-mountain-bike-trails-morocco" },
  openGraph: {
    title: "Best Mountain Bike Trails in Morocco",
    description:
      "A practical guide to Morocco MTB terrain, including the High Atlas, Imlil, Marrakech foothills, Agafay and the south.",
    type: "article",
    images: ["/images/mtb-tours-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "HIGH ATLAS",
    title: "The Best MTB Trails in the Atlas Mountains",
    text: "Explore rocky traverses, village tracks and singletrack in the High Atlas, with advice on choosing trails that fit your riding confidence.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/journal/best-mtb-trails-atlas-mountains",
  },
  {
    category: "TECHNICAL RIDING",
    title: "High Atlas Mountain Biking Routes: Technical Trails",
    text: "Learn how surface, exposure, braking, line choice and fatigue affect a technical ride in the mountains.",
    image: "/images/atlas-mountains-enduro-biking-tour.jpg",
    href: "/journal/high-atlas-mountain-biking-technical-trails",
  },
  {
    category: "SOUTHERN MOROCCO",
    title: "Jbel Saghro Cycling",
    text: "Plan for rugged southern terrain with careful attention to water, remote stages, bike setup and support.",
    image: "/images/saghro-morocco-bike-tour.jpg",
    href: "/journal/jbel-saghro-cycling",
  },
];

const faqs = [
  {
    question: "Where are the best mountain-bike trails in Morocco?",
    answer:
      "There is no single best region for every rider. The High Atlas and Imlil area offer varied mountain terrain; the Marrakech and Agafay foothills can suit shorter rides on rocky tracks; and some southern regions offer rugged, remote-feeling routes. The best choice depends on your experience, dates, preferred surfaces and the support available for the planned route.",
  },
  {
    question: "Are Morocco MTB trails suitable for beginners?",
    answer:
      "Some routes may be appropriate for riders with basic bike control and confidence on uneven surfaces, while steep, rocky or narrow trails require more experience. Ask for a clear description of technical features, climbing, surface and any exposed sections. Choose a route that suits the least experienced member of the group.",
  },
  {
    question: "Is a full-suspension mountain bike necessary?",
    answer:
      "The best bike depends on the route and your comfort. Rough, rocky or technical trails may be more comfortable on a capable mountain bike with reliable brakes and suitable tyres. Smoother tracks may allow other setups. Confirm the expected terrain, bike availability, sizes and included equipment before booking.",
  },
  {
    question: "When is the best time to go mountain biking in Morocco?",
    answer:
      "Conditions differ by region and altitude. Spring and autumn are often useful periods to consider for many lower and mid-altitude routes, but high mountain areas can be cold or affected by snow and lower terrain can be very hot in summer. Check current conditions for your exact route and dates.",
  },
  {
    question: "Can I combine different MTB regions on one trip?",
    answer:
      "Yes, a multi-day itinerary may combine regions, but transfer time, daily riding effort, rest and accommodation all need to be considered. Avoid packing too many distant regions into a short holiday. Ask for a day-by-day outline showing riding time and transfers.",
  },
  {
    question: "What should I check before booking an MTB tour?",
    answer:
      "Confirm the route, daily distance and ascent, surface, technical difficulty, guide and support arrangements, equipment, transfers, water stops, accommodation and what is included in the price. Also ask how the plan may change if weather or trail access makes the original route unsuitable.",
  },
];

export default function BestMountainBikeTrailsMoroccoPage() {
  return (
    <main className="best-mtb-morocco-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Best Mountain Bike Trails in Morocco</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">MOUNTAIN BIKE GUIDES · MOROCCO</p>
          <h1>Best Mountain Bike Trails in Morocco</h1>
          <p className="article-deck">
            Morocco offers a wide variety of mountain-bike experiences, from High Atlas singletrack and old village paths to dry foothill tracks and rugged southern routes. The best trail is not simply the hardest or most famous one: it is the route that suits your skills, the current conditions and the kind of riding you want to enjoy.
          </p>
          <div className="article-meta"><span>7 MIN READ</span><span>MTB ROUTES · TERRAIN · PLANNING</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/mtb-tours-morocco.jpg" alt="Mountain biking on a trail in Morocco" fetchPriority="high" />
          <figcaption>Choose routes by terrain, experience and local conditions—not just by distance or reputation.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#regions">Morocco’s MTB regions</a>
          <a href="#high-atlas">High Atlas and singletrack</a>
          <a href="#imlil-toubkal">Imlil and Toubkal</a>
          <a href="#marrakech-agafay">Marrakech and Agafay</a>
          <a href="#south">Southern Morocco</a>
          <a href="#choose-trail">Choose a trail for your level</a>
          <a href="#prepare">Equipment and preparation</a>
          <a href="#season">When to ride</a>
          <a href="#responsible">Responsible riding</a>
          <a href="#checklist">Pre-trip checklist</a>
          <a href="#faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            Morocco is not a single mountain-bike destination with one consistent trail style. Terrain changes from valley to valley and from low foothills to high mountain passes. You may encounter rocky ground, compact dirt, old mule tracks, narrow singletrack, rough road connections and long descents. A useful trail guide explains those differences so you can match the route to your ability and the sort of experience you want.
          </p>

          <section id="regions">
            <h2>Morocco’s mountain-bike regions at a glance</h2>
            <p>
              When researching MTB routes, start with the landscape and the time you have available. The High Atlas is a natural choice for riders who want mountain scenery and varied terrain. Areas around Imlil offer a village-and-valley setting close to the higher mountains. The foothills around Marrakech and the rocky Agafay landscape can suit shorter rides or an introduction to Morocco’s dry terrain, while some southern regions feel more remote and require careful logistical planning.
            </p>
            <p>
              These are broad descriptions rather than fixed trail ratings. Conditions, access and the character of a route can vary between nearby tracks. Ask for the proposed itinerary, not just the name of a region, and check the exact surface, climbing, technical features and transfer times before you decide.
            </p>
            <figure className="article-inline-image"><img src="/images/mountain-biking-atlas-mountains-morocco.jpg" alt="Mountain biking through the rugged Atlas Mountain landscape" loading="lazy" /><figcaption>Different Moroccan regions offer different riding experiences, from high mountain paths to dry foothill tracks.</figcaption></figure>
          </section>

          <section id="high-atlas">
            <h2>High Atlas: mountain tracks, singletrack and long descents</h2>
            <p>
              The High Atlas is known for dramatic elevation changes and a varied mountain environment. Depending on the route, a ride may combine rocky traverses, dirt tracks, narrow trail sections and sustained descents. These can be rewarding for confident riders, but a route’s distance does not tell the whole story: loose stone, steep gradients, exposure and repeated climbs can make a comparatively short stage demanding.
            </p>
            <p>
              For technical rides, ask about the expected surface, the steepest or most exposed sections, hike-a-bike stretches, and whether the guide will explain challenging features before the group reaches them. Less technical itineraries can still deliver outstanding scenery by using wider tracks and connecting paths. The important thing is that the trail style fits your confidence and leaves enough time to enjoy the journey.
            </p>
            <div className="article-tip"><strong>Trail-planning tip</strong><p>Ask for an honest description of technical difficulty, ascent and surface. A clear route brief is more useful than a broad label such as “easy” or “advanced.”</p></div>
            <p>Explore more in our <Link href="/journal/best-mtb-trails-atlas-mountains">guide to the best MTB trails in the Atlas Mountains</Link> and the <Link href="/journal/high-atlas-mountain-biking-technical-trails">technical trails guide</Link>.</p>
          </section>

          <section id="imlil-toubkal">
            <h2>Imlil and the Mount Toubkal region</h2>
            <p>
              Around Imlil and the Toubkal region, routes can pass through mountain villages, terraced slopes and valleys with views of the surrounding high peaks. Access and suitable riding surfaces differ by route. Some sections are more appropriate for road or gravel bikes, while rougher tracks may call for an MTB or an E-MTB built for the conditions. Avoid assuming that every path used by walkers or pack animals is suitable for cycling at speed.
            </p>
            <p>
              Plan for altitude and variable weather, especially if your ride climbs above the valley. Morning temperatures can differ significantly from afternoon conditions, and wind or recent rain can change comfort and traction. Be ready to adapt the route if the conditions or the group’s energy level make the original plan unsuitable.
            </p>
            <p>For regional context, see <Link href="/journal/imlil-mount-toubkal-cycling">Imlil and Mount Toubkal Cycling</Link>.</p>
          </section>

          <section id="marrakech-agafay">
            <h2>Marrakech foothills and Agafay’s rocky terrain</h2>
            <p>
              The landscape outside Marrakech offers a different kind of ride from the higher Atlas. The foothills and Agafay area may include dry tracks, rough rocky surfaces and wide-open views. These routes can work well for a day ride, a warm-up before a longer holiday or a mixed itinerary that combines time in the city with cycling in the surrounding countryside.
            </p>
            <p>
              Exposure to sun and wind can make these rides feel more demanding than the distance suggests. Carry enough water for the planned stage, check start and finish points, and agree on a plan for transfers and mechanical problems. During hotter periods, ask whether the start time or route should be adjusted to avoid the warmest part of the day.
            </p>
            <div className="article-inline-cards">
              <Link href="/destinations/marrakech"><img src="/images/atlas-marrakech-cycling-tour.jpg" alt="Cycling routes near Marrakech" loading="lazy" /><span>MARRAKECH</span><strong>Rural tracks and foothill rides</strong></Link>
              <Link href="/destinations/agafay-desert"><img src="/images/Desert-Agafay-Morocco.jpg" alt="Rocky Agafay landscape" loading="lazy" /><span>AGAFAY</span><strong>Open terrain and desert-edge routes</strong></Link>
            </div>
          </section>

          <section id="south">
            <h2>Southern Morocco and remote-feeling routes</h2>
            <p>
              Further south, some routes offer wide landscapes, rocky tracks and long distances between services. They can be attractive for experienced riders who enjoy a sense of expedition, but the support plan is especially important. Check where water and food will be available, how luggage is moved, where the ride finishes each day and what happens if weather or a mechanical issue interrupts the stage.
            </p>
            <p>
              Mountain biking and gravel may be better suited than a narrow-tyred setup on rough surfaces, but the exact bike choice depends on the route. For remote regions such as Jbel Saghro, review the <Link href="/journal/jbel-saghro-cycling">Jbel Saghro cycling guide</Link> before finalising a plan.
            </p>
          </section>

          <section id="choose-trail">
            <h2>Choose a trail that fits your riding level</h2>
            <h3>Beginner and intermediate riders</h3>
            <p>
              Look for routes with a clear surface description, manageable climbing and enough time for breaks. A wider track may be a better fit than narrow technical singletrack, even when both offer mountain views. Being new to mountain biking does not mean you must avoid adventure; it means the route should be selected honestly around current skills and comfort.
            </p>
            <h3>Confident and advanced riders</h3>
            <p>
              If you enjoy technical descents, loose rock and narrow lines, ask for specific information about the trail’s character and exposure. Check that the route is suitable for your bike, that your group shares a compatible skill level, and that support arrangements make sense for the remoteness of the ride. More difficult is not automatically better if the route becomes stressful or unsafe.
            </p>
            <h3>Groups with mixed abilities</h3>
            <p>
              Plan around the least experienced rider and discuss alternatives before the trip. A good itinerary can sometimes include separate route options or regrouping points, but this needs to be coordinated with guides and any support vehicle in advance. Make sure everyone understands the daily distance, terrain and pace expectation.
            </p>
          </section>

          <section id="prepare">
            <h2>Equipment and preparation</h2>
            <p>
              Use a bike that is appropriate for the roughest surface on your planned route. Check brakes, tyres, drivetrain, suspension if fitted, and the condition of wheels before the ride. For hired bikes, confirm frame size, pedals, helmet availability and the equipment included. Carry personal essentials and clarify which tools, spare parts and mechanical assistance are provided by the organiser.
            </p>
            <p>
              A correctly fitted helmet, gloves, eye protection, suitable shoes and layered riding clothes are useful starting points. Sun protection and sufficient water capacity are important on exposed terrain. Depending on the season and elevation, a windproof or waterproof layer and warmer clothing may also be needed. For multi-day trips, confirm luggage limits, bike transport, accommodation, meal arrangements and whether charging is available if you are using an E-MTB.
            </p>
            <ul className="article-checklist">
              <li><strong>Bike fit:</strong> Confirm frame size, saddle position, controls, pedals and tyre choice.</li>
              <li><strong>Route brief:</strong> Know the surface, distance, ascent, start and finish points and expected duration.</li>
              <li><strong>Water and food:</strong> Check refill points and carry enough for the most remote stretch.</li>
              <li><strong>Support:</strong> Confirm guide, transfers, luggage handling and mechanical contingency plans.</li>
              <li><strong>Weather:</strong> Review conditions for the actual route and elevation close to departure.</li>
            </ul>
          </section>

          <section id="season">
            <h2>When is the best time to ride?</h2>
            <p>
              The best season depends on the region and the route. Spring and autumn are often considered for many lower and mid-altitude rides, but high mountain routes can be cold or affected by snow and lower, exposed landscapes can be very hot in summer. Road and coastal routes have different considerations, including wind and traffic. Check current conditions and local access for the dates you plan to travel.
            </p>
            <p>
              Leave flexibility in the schedule if your itinerary crosses different elevations or remote areas. An alternative route, earlier start or rest day may be sensible if weather or trail conditions change. Treat this article as planning guidance rather than a live report of current trail conditions.
            </p>
          </section>

          <section id="responsible">
            <h2>Responsible mountain biking in Morocco</h2>
            <p>
              Many trails and tracks are part of everyday life for local residents, walkers and animals. Reduce speed near homes, give pedestrians plenty of space, follow agreed routes and avoid creating shortcuts that damage the path. Ask permission before photographing people, take rubbish with you and support local businesses respectfully when making stops. A thoughtful approach helps protect the landscapes and community relationships that make a cycling holiday meaningful.
            </p>
          </section>

          <section id="checklist">
            <h2>Questions to ask before booking</h2>
            <ul className="article-checklist">
              <li>What is the day-by-day distance, climbing and expected riding time?</li>
              <li>Which surfaces and technical features should riders expect?</li>
              <li>What guide, vehicle, luggage and mechanical support is included?</li>
              <li>Are bikes, helmets, pedals and spare parts supplied or hired separately?</li>
              <li>What are the water, food, accommodation and transfer arrangements?</li>
              <li>How can the itinerary be adapted if conditions change or a rider needs a different pace?</li>
            </ul>
            <p>
              Compare tours by the full riding experience rather than headline mileage alone. A well-planned itinerary should explain what is included, what you need to bring, and how the route fits your group’s experience and dates.
            </p>
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
            <p>This guide offers general route-selection and preparation advice. Confirm current trail access, weather, equipment, local requirements and support arrangements for your actual itinerary before travelling.</p>
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
          <div><p className="article-eyebrow">YOUR NEXT RIDE STARTS HERE</p><h2>Find your trail in Morocco.</h2><p>Share your riding experience, preferred terrain, group size and dates to discuss a mountain-bike itinerary that suits you.</p></div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/cycling-trips/mtb">Explore MTB Tours</Link><Link className="article-button article-button-outline" href="/contact?request=mtb-tour-planning">Plan Your MTB Trip</Link></div>
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
        .best-mtb-morocco-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
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
        @media(prefers-reduced-motion:reduce){.best-mtb-morocco-article *,.best-mtb-morocco-article *:before,.best-mtb-morocco-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
