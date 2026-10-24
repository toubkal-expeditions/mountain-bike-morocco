import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complete High Atlas Mountains Cycling Guide | Mountain Bike Morocco",
  description:
    "Plan a High Atlas cycling holiday in Morocco with practical guidance on terrain, altitude, season, riding styles, villages, equipment, transfers and route planning.",
  alternates: { canonical: "/journal/complete-high-atlas-mountains-cycling-guide" },
  openGraph: {
    title: "Complete High Atlas Mountains Cycling Guide",
    description:
      "A practical guide to planning an Atlas Mountains cycling trip, from choosing MTB, E-MTB, gravel or road routes to preparing for altitude, weather and logistics.",
    type: "article",
    images: ["/images/atlas-mountains-cycling-tour-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "MOUNTAIN BIKE GUIDES",
    title: "The Best MTB Trails in the Atlas Mountains",
    text: "Compare trail character, terrain and technical demands when choosing a route for your mountain-bike holiday.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/journal/best-mtb-trails-atlas-mountains",
  },
  {
    category: "TECHNICAL RIDING",
    title: "High Atlas Mountain Biking Routes: Technical Trails",
    text: "Learn what loose rock, steep gradients, narrow traverses and changing grip mean for your route choice.",
    image: "/images/atlas-mountains-enduro-biking-tour.jpg",
    href: "/journal/high-atlas-mountain-biking-technical-trails",
  },
  {
    category: "CULTURE & TRAVEL",
    title: "Berber Villages of the High Atlas: Cycling & Cultural Guide",
    text: "Ride considerately through Amazigh communities and make space for the everyday life along the route.",
    image: "/images/berber-villages-cycling-expeditions.jpg",
    href: "/journal/berber-villages-high-atlas-cycling-culture",
  },
];

const faqs = [
  {
    question: "Which cycling style is best for the High Atlas?",
    answer:
      "It depends on your preferred terrain and experience. MTB can suit trails and rough mountain tracks, E-MTB offers electric assistance on climbs, gravel can work well on unpaved roads and connecting tracks, and road cycling focuses on paved routes and mountain passes. A route description should clarify the surfaces and daily effort involved.",
  },
  {
    question: "How does altitude affect an Atlas cycling trip?",
    answer:
      "Higher elevations may feel cooler and can make sustained efforts more demanding, especially if you arrive directly from lower ground. Build in sensible pacing, drink regularly, and share any concerns with your trip organiser. The route and daily climbing should be chosen with the group's fitness and experience in mind.",
  },
  {
    question: "When should I plan a High Atlas cycling holiday?",
    answer:
      "Conditions vary with month, altitude and route. Spring and autumn can be suitable for many itineraries, but higher routes may be cold or affected by snow, and lower valleys can be warm. Check the expected conditions for your exact dates and route before confirming travel.",
  },
  {
    question: "Can beginners cycle in the High Atlas?",
    answer:
      "Some lower-intensity road, gravel or guided routes may suit less experienced cyclists, while technical singletrack, steep rocky trails and long climbs require more skill and fitness. Describe your normal rides and comfort level in advance so the route can be discussed honestly.",
  },
  {
    question: "Should I bring my own bike?",
    answer:
      "Either approach may be possible depending on the trip and equipment available. Ask about bike models and sizes, pedals, helmets, spare parts, luggage transfers and the room available for bike cases. If travelling with your own bike, check airline rules and transfer arrangements early.",
  },
  {
    question: "What details should I confirm before booking?",
    answer:
      "Ask for the planned route, distance, climbing, surface, technical level, accommodation, meals, transport, guiding, bike and repair support, water arrangements and inclusions. Also confirm how the itinerary may change if weather, access or trail conditions make the original plan unsuitable.",
  },
];

export default function CompleteHighAtlasCyclingGuidePage() {
  return (
    <main className="atlas-mtb-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Complete High Atlas Mountains Cycling Guide</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">DESTINATION GUIDE · HIGH ATLAS · MOROCCO</p>
          <h1>Complete High Atlas Mountains Cycling Guide</h1>
          <p className="article-deck">
            Plan a more rewarding ride through Morocco’s High Atlas with a clear view of the terrain, seasons, altitude, cycling styles and practical details that shape a trip. Use this guide to compare options, prepare your group and ask the right questions before you confirm an itinerary.
          </p>
          <div className="article-meta"><span>8 MIN READ</span><span>DESTINATION & TRIP PLANNING</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/atlas-mountains-cycling-tour-morocco.jpg" alt="Cycling journey through the High Atlas Mountains of Morocco" fetchPriority="high" />
          <figcaption>The High Atlas combines changing elevations, rural valleys and different surfaces across one region.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#overview">Getting to know the High Atlas</a>
          <a href="#cycling-styles">Choose your cycling style</a>
          <a href="#terrain-routes">Terrain and route types</a>
          <a href="#altitude-weather">Altitude and weather</a>
          <a href="#villages-culture">Villages and local culture</a>
          <a href="#trip-length">Day rides or multi-day trips</a>
          <a href="#equipment-logistics">Equipment and logistics</a>
          <a href="#best-season">Season and timing</a>
          <a href="#booking-checklist">Booking checklist</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            The High Atlas is not one single cycling route. It is a broad mountain region with valleys, settlements, paved climbs, dirt tracks and trails that change with elevation and local conditions. Your best itinerary will depend on the kind of cycling you enjoy, the time available, the effort your group wants each day and how much time you want to spend discovering places off the bike.
          </p>

          <section id="overview">
            <h2>Getting to know the High Atlas</h2>
            <p>
              The High Atlas rises south of Marrakech and offers a dramatic change of scenery from the city and plains. Mountain valleys, terraced fields, small settlements, rocky slopes and high viewpoints create a varied setting for cycling. A trip may focus on one area for several rides or link different valleys as part of a longer journey, depending on the route and available time.
            </p>
            <p>
              The landscape can change noticeably over a relatively short distance. A road ride might follow a steady climb before crossing an exposed pass, while an off-road journey could move from a wider track to uneven stone and a narrow path. This variety is part of the region’s appeal, but it makes route descriptions and local guidance important. Distance alone does not tell you how demanding a day will feel.
            </p>
            <p>
              Before choosing a trip, think about the experience you want: focused training on climbs, technical trail riding, unhurried gravel exploration, a supported e-bike journey or a mix of riding and cultural stops. Being clear about your priorities helps shape a realistic plan.
            </p>
          </section>

          <section id="cycling-styles">
            <h2>Choose the cycling style that fits your trip</h2>
            <h3>Mountain biking (MTB)</h3>
            <p>
              MTB routes may include rocky trails, compact dirt, old mountain paths and technical singletrack. They suit riders who enjoy varied surfaces and are comfortable adjusting their line and speed as the terrain changes. Ask for a practical description of steep sections, loose ground, hike-a-bike stretches and the overall technical level rather than relying only on a broad grade.
            </p>
            <h3>Electric mountain biking (E-MTB)</h3>
            <p>
              Electric assistance can help riders manage longer climbs or cover more ground, but it does not remove the need for bike control, fitness or route planning. Battery range depends on elevation, assist mode, rider weight, terrain and conditions. Confirm charging opportunities, spare-battery arrangements where relevant, and whether the route pace accommodates both e-bike and non-electric riders.
            </p>
            <h3>Gravel cycling</h3>
            <p>
              Gravel can be a good choice for riders who enjoy mixed-surface journeys on rural roads, compact dirt and connecting tracks. Surface quality and traffic conditions may vary, so confirm the balance of paved and unpaved riding, tyre recommendations, daily distance and climbing. A gravel route may still be physically demanding if it includes long ascents or rough ground.
            </p>
            <h3>Road cycling</h3>
            <p>
              Road cyclists can focus on sustained climbs, mountain passes, valley roads and longer point-to-point days. When comparing routes, look at elevation gain as well as distance, road conditions, traffic exposure, descent length and support arrangements. Weather can change quickly at altitude, so layers and a plan for stops matter even on a paved itinerary.
            </p>
            <div className="article-tip">
              <strong>Planning tip</strong>
              <p>Tell the organiser what you ride most often at home, what surfaces you enjoy and how much climbing feels comfortable. Those details are more useful than choosing a trip solely from the name or photograph.</p>
            </div>
          </section>

          <section id="terrain-routes">
            <h2>Terrain and route types in the Atlas</h2>
            <p>
              Depending on the area, cycling may use smooth paved roads, broken tarmac, compact dirt, gravel, loose stones, rocky traverses or narrow paths. Some itineraries combine several surface types in the same day. For trail riding, ask whether the route includes exposed sections, tight turns, steep gradients or places where riders may need to push the bike. For road and gravel trips, ask about the quality of the road surface and how much time is spent on busier connecting roads.
            </p>
            <p>
              Think about how the surface suits your tyres, bike setup and experience. A route described as “scenic” may still have demanding climbs or rough sections, while a shorter trail day can feel more challenging than a longer ride on smoother ground. The organiser should be able to discuss what is typical for the planned route and which parts may change according to current conditions.
            </p>
            <p>
              Avoid choosing difficulty for its own sake. The best route is one that gives the group the desired level of challenge while leaving enough energy to enjoy the landscape and complete the day safely. If riders have different abilities, raise that early and ask whether the plan can offer suitable options without splitting support arrangements unsafely.
            </p>
          </section>

          <section id="altitude-weather">
            <h2>Altitude, weather and pacing</h2>
            <p>
              Higher elevations can feel cooler and may make a sustained effort more demanding, especially when arriving from lower ground. Temperatures can differ between valleys and exposed passes, and wind or changing weather can affect how a ride feels. Give yourself time to settle into the trip and avoid treating every day as a test of maximum pace.
            </p>
            <p>
              Build a sensible rhythm around the whole itinerary. Start at a pace that allows conversation, take regular food and water breaks, and communicate early if anyone is struggling with effort, cold, heat or altitude. A route that is comfortable on the first morning should also leave enough energy for later days if the trip is multi-day.
            </p>
            <p>
              Weather and access are route-specific. Do not assume a high pass or trail is rideable simply because it appears on a map or in an old trip report. Check current local information and be prepared to adjust the route if snow, rain, poor visibility, heat or trail conditions make the original plan unsuitable.
            </p>
          </section>

          <section id="villages-culture">
            <h2>Villages, culture and considerate travel</h2>
            <p>
              Cycling through the High Atlas can bring you close to communities where paths and roads are part of everyday life. Villages are places where people live and work, not just stops for photographs. Ride slowly near homes, give way to walkers and animals, follow local guidance and ask permission before taking close-up photographs of people. A greeting and a respectful approach can make an interaction more comfortable for everyone.
            </p>
            <p>
              If your itinerary includes a meal, rest stop or overnight stay with local hosts, confirm what is included and share any dietary needs in advance. Allow time for these experiences rather than trying to squeeze every stop between ambitious riding targets. Respect for local routines and the landscape should be part of the plan, not an afterthought.
            </p>
            <p>
              Keep to the agreed route, take rubbish with you and avoid creating shortcuts that widen existing paths. Where routes are shared with walkers, residents or animals, reduce speed and pass with care. These small decisions help protect the places that make riding in the mountains special.
            </p>
          </section>

          <section id="trip-length">
            <h2>Day rides or a multi-day cycling trip?</h2>
            <p>
              A day ride can work well if you have limited time, are based in Marrakech or want to try a particular terrain before planning a longer holiday. Confirm transfer time, start and finish points, riding hours, the amount of climbing and whether the schedule allows breaks. A short ride is not necessarily easy, particularly if the route is steep or technically demanding.
            </p>
            <p>
              A multi-day trip can connect different valleys or combine cycling with time to rest and explore. It requires more attention to accommodation, luggage transfers, daily distances, mechanical support, meals and the plan if weather disrupts a stage. Avoid building an itinerary with too many long riding days in a row unless your experience and fitness support that pattern.
            </p>
            <p>
              Private trips may provide more flexibility around dates and pace, while group departures can follow a set itinerary. Availability, inclusions and route options should be confirmed for the actual trip rather than assumed from general descriptions. Leave time in the overall travel plan for arrival, bike setup and recovery after the final ride.
            </p>
          </section>

          <section id="equipment-logistics">
            <h2>Equipment, bike hire and support logistics</h2>
            <p>
              Start with the basics: a correctly fitting helmet, gloves, eyewear, appropriate shoes, comfortable riding clothing and a hydration system with enough capacity for the planned stage. Depending on season and elevation, bring a warm layer and a lightweight wind or rain shell. Sun protection is useful on exposed roads and open tracks.
            </p>
            <p>
              If you plan to hire a bike, confirm model or type, size availability, pedals, helmet provision, setup, spare parts and the process for reporting mechanical issues. E-MTB riders should ask about battery range and charging; gravel and road riders should confirm tyre options and the likely road or track surface. If you bring your own bike, check airline packing rules, transfers, bike-case storage and whether tools for assembly are available.
            </p>
            <p>
              Clarify what support means for your itinerary. Ask whether a guide, support vehicle or mechanic is included, what water and food stops are planned, how luggage moves between overnight stays and what happens if a rider cannot continue. These arrangements differ by trip and should be written down clearly before you travel.
            </p>
            <div className="article-tip">
              <strong>Before you leave home</strong>
              <p>Request a route-specific packing list and a clear breakdown of inclusions. This helps avoid carrying unnecessary kit while making sure essential equipment and support are accounted for.</p>
            </div>
          </section>

          <section id="best-season">
            <h2>When to plan your High Atlas cycling holiday</h2>
            <p>
              The most suitable season depends on elevation, cycling style and the exact route. Spring and autumn are often considered for many itineraries, but high areas may still be cold or affected by snow, while lower valleys can be warm. Summer conditions may be more comfortable at higher elevations than in exposed lowland areas, but heat, water and shade still need careful planning. Winter rides require especially careful route and weather checks.
            </p>
            <p>
              Rather than choosing dates from a general “best month” list, start with the region and style of riding you want. Ask what the expected temperature range, daylight, surface condition and pass accessibility may be during your travel window. If your holiday combines mountain, desert and coastal regions, remember that each can have a different climate over the same dates.
            </p>
            <p>
              Build flexibility into plans that rely on high routes or long transfers. A sensible alternative route or a rest day can help protect the overall experience when conditions change. Confirm the latest local advice shortly before the ride, as a guide published online cannot provide a live report of conditions.
            </p>
          </section>

          <section id="booking-checklist">
            <h2>A practical checklist before booking</h2>
            <p>Before confirming a High Atlas cycling holiday, use this list to make sure the itinerary matches your group and expectations:</p>
            <ul className="article-checklist">
              <li><strong>Route and surfaces:</strong> What roads, tracks or trails will be ridden, and how technical are the difficult sections?</li>
              <li><strong>Distance and climbing:</strong> What is the approximate daily distance, elevation gain and riding time?</li>
              <li><strong>Ability and pace:</strong> Is the route suitable for your experience and the least confident rider in your group?</li>
              <li><strong>Dates and conditions:</strong> What seasonal or altitude-related issues should be considered?</li>
              <li><strong>Equipment:</strong> What bike, helmet, pedals, spares and tools are available or included?</li>
              <li><strong>Support and transfers:</strong> How are guiding, luggage, mechanical problems, water stops and rider changes managed?</li>
              <li><strong>Accommodation and meals:</strong> What is included, and what needs to be arranged separately?</li>
              <li><strong>Costs and flexibility:</strong> What is the full list of inclusions, exclusions, cancellation terms and possible route alternatives?</li>
            </ul>
            <p>
              A good enquiry makes these conversations easier. Share your preferred dates, group size, cycling style, recent riding experience and the kind of landscape you want to explore. The more specific your brief, the easier it is to discuss a realistic itinerary rather than a generic list of possibilities.
            </p>
          </section>

          <section>
            <h2>Build a trip around the way you want to ride</h2>
            <p>
              The High Atlas can suit very different cycling holidays, from a single guided outing to a supported multi-day journey. The key is to match the route, daily effort, equipment and support to your group—not to select an itinerary based on a headline distance or an attractive photograph alone.
            </p>
            <p>
              Start by exploring the Atlas destination and the types of cycling available. When you are ready to discuss the details, send your travel window, group size, riding experience and preferred terrain. That information creates a useful starting point for reviewing routes and what needs to be confirmed before you travel.
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
            <p>This is general trip-planning guidance, not a live route or weather report. Confirm current trail access, road conditions, equipment, inclusions and support arrangements with the organiser for your intended dates.</p>
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
          <div><p className="article-eyebrow">YOUR NEXT RIDE STARTS HERE</p><h2>Plan your High Atlas cycling adventure.</h2><p>Share your preferred cycling style, riding experience and travel dates to discuss a route and support plan that fit your group.</p></div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/destinations/atlas-mountains">Explore the Atlas Mountains</Link><Link className="article-button article-button-outline" href="/contact?request=high-atlas-trip-planning&destination=High%20Atlas">Plan your trip</Link></div>
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
