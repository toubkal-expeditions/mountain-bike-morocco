import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complete Gravel Bike Morocco Guide | Mountain Bike Morocco",
  description:
    "Plan a gravel cycling holiday in Morocco with practical advice on bike setup, tyres, gearing, surfaces, navigation, water, support and multi-day routes.",
  alternates: { canonical: "/journal/complete-gravel-bike-morocco" },
  openGraph: {
    title: "Complete Gravel Bike Morocco Guide",
    description:
      "A practical guide to gravel cycling in Morocco, from Atlas foothills and rural tracks to southern routes, with advice on setup, logistics and preparation.",
    type: "article",
    images: ["/images/gravel-bike-tour-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "GRAVEL CYCLING",
    title: "Gravel Cycling in Morocco",
    text: "Explore the surfaces, landscapes and route-planning decisions that shape a Moroccan gravel trip.",
    image: "/images/gravel-cycling-holiday-morocco.jpg",
    href: "/journal/gravel-cycling-in-morocco",
  },
  {
    category: "TRIP PLANNING",
    title: "Multi-Day Cycling Tours Planning",
    text: "Plan realistic stages with time for recovery, transfers, meals, luggage and mechanical support.",
    image: "/images/group-adventure-cycling-morocco.jpg",
    href: "/journal/planning-multi-day-cycling-tours",
  },
  {
    category: "ROUTE INSPIRATION",
    title: "Marrakech to Atlas Mountains by Bike",
    text: "Compare options for linking Marrakech with foothills and longer journeys into the mountains.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/journal/marrakech-to-atlas-mountains-by-bike",
  },
];

const faqs = [
  {
    question: "What kind of gravel bike is best for Morocco?",
    answer:
      "The best setup depends on the roughest surface, expected distance, elevation, luggage and your handling preferences. A sturdy frame, reliable brakes, suitable gearing and tyres with enough volume and puncture protection are useful starting points. Ask for the route's actual surfaces before selecting tyres or assuming a lightweight race setup will be suitable.",
  },
  {
    question: "Are Morocco's gravel routes suitable for beginners?",
    answer:
      "Some easier rural roads and compact tracks may suit riders who are new to gravel, while loose stone, corrugations, steep gradients and remote sections require more confidence and preparation. Consider both distance and terrain difficulty, and choose a route that matches the least experienced rider in the group.",
  },
  {
    question: "How much water should I carry?",
    answer:
      "Water needs depend on temperature, effort, route length and the distance between reliable resupply points. Do not assume that villages, shops or cafés will be available along every stage. Confirm the planned stops with the organiser and carry enough capacity for the longest expected gap, with a contingency plan for delays.",
  },
  {
    question: "Do I need navigation equipment?",
    answer:
      "A route file or map, a charged navigation device or phone, and an offline backup can be helpful, particularly away from larger towns. Download information before leaving connectivity, protect devices from dust and heat, and understand the route and agreed regrouping points rather than relying on a screen alone.",
  },
  {
    question: "Can I join a multi-day gravel tour with my own bike?",
    answer:
      "You can discuss bringing your own bike with the tour organiser. Confirm airline packing rules, transfers, luggage space, assembly time, spare parts and the tools available during the trip. Share the bike model and any special components in advance so support can be considered realistically.",
  },
  {
    question: "What should I confirm before booking a gravel holiday?",
    answer:
      "Ask for daily distance, climbing, road and track surfaces, expected riding time, resupply points, accommodation, luggage transfers, mechanical support, navigation arrangements and the plan for a route change. Confirm bike availability, equipment, inclusions, exclusions and cancellation terms before paying.",
  },
];

export default function CompleteGravelBikeMoroccoPage() {
  return (
    <main className="complete-gravel-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Complete Gravel Bike Morocco</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">GRAVEL CYCLING · ROUTES · MOROCCO</p>
          <h1>Complete Gravel Bike Morocco</h1>
          <p className="article-deck">
            Gravel cycling in Morocco can connect quiet paved roads, compact dirt, loose stone, rural tracks and wide-open landscapes. The best experience comes from matching the bike to the route and planning realistically for distance, climbing, navigation, water and mechanical support. This guide covers the practical decisions to make before choosing a gravel holiday, from tyre setup and gearing to resupply and multi-day logistics.
          </p>
          <div className="article-meta"><span>8 MIN READ</span><span>GRAVEL CYCLING · MOROCCO</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/gravel-bike-tour-morocco.jpg" alt="Gravel bike touring through Morocco's varied landscape" fetchPriority="high" />
          <figcaption>Match your bike, luggage and route plan to the surfaces and distances you expect to ride.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#what-is-gravel">What is gravel cycling in Morocco?</a>
          <a href="#choose-route">Choose the right route</a>
          <a href="#bike-setup">Bike, tyres and gearing</a>
          <a href="#surfaces">Understand the surfaces</a>
          <a href="#distance-climbing">Distance, climbing and pacing</a>
          <a href="#navigation">Navigation and route planning</a>
          <a href="#water-food">Water, food and resupply</a>
          <a href="#regions">Where to ride</a>
          <a href="#multi-day">Multi-day gravel logistics</a>
          <a href="#equipment">Equipment and repairs</a>
          <a href="#responsible">Responsible riding</a>
          <a href="#gravel-checklist">Pre-trip checklist</a>
          <a href="#gravel-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            Morocco is not one uniform gravel destination. A route may move between asphalt, smooth hardpack, stony tracks, corrugated sections and rougher mountain roads. These surfaces affect speed, comfort, tyre choice, navigation and how much energy a stage requires. Before comparing tour descriptions, ask what the route is actually like and how the daily plan handles the roughest or most remote sections.
          </p>

          <section id="what-is-gravel">
            <h2>What is gravel cycling in Morocco?</h2>
            <p>
              Gravel cycling sits between road riding and more technical mountain biking, although the balance varies by route. In Morocco, a gravel journey can follow quiet rural roads between villages, cross foothill tracks, link valleys or travel through broad southern landscapes. Some routes favour distance and steady pedalling; others include rough surfaces that call for confident bike handling and a slower pace.
            </p>
            <p>
              The appeal is the variety. Riders can experience changing terrain and scenery while carrying enough equipment for a longer journey. However, a gravel label does not guarantee smooth or easy tracks. Loose stones, washboard surfaces, short steep sections and limited services may make a stage more demanding than the distance suggests.
            </p>
            <figure className="article-inline-image"><img src="/images/gravel-adventure-bike-morocco.jpg" alt="Gravel bike prepared for a journey on Moroccan rural tracks" loading="lazy" /><figcaption>A varied surface mix makes advance route information especially useful.</figcaption></figure>
            <div className="article-tip"><strong>Ask for surface detail, not just the route name</strong><p>Confirm how much of each stage is paved, hardpack, loose gravel or rough track. This helps you choose a suitable bike, tyres and daily distance.</p></div>
          </section>

          <section id="choose-route">
            <h2>Choose a route that fits your goals</h2>
            <p>
              Start by deciding what matters most to you: long days in the saddle, varied scenery, remote tracks, cultural stops, challenging climbs or a relaxed journey with time to explore. A route built around steady mileage will differ from one that prioritises mountain views and technical dirt. Your group’s experience, fitness, available time and luggage also affect what is realistic.
            </p>
            <h3>Day rides and short escapes</h3>
            <p>
              A day ride from Marrakech or another base can be a useful introduction to the terrain without the demands of carrying luggage between overnight stops. Confirm transfer time, where the ride begins, how long you will be on the bike, the planned surface and whether food and water stops are available.
            </p>
            <h3>Multi-day gravel journeys</h3>
            <p>
              Longer routes require more attention to daily stage length, total climbing, accommodation, luggage transfers and recovery. Ask for a stage-by-stage outline rather than relying only on the overall trip distance. The itinerary should account for the slowest expected surfaces and leave room for stops, navigation and unexpected delays.
            </p>
            <p><Link className="article-text-link" href="/journal/planning-multi-day-cycling-tours">Read the multi-day cycling planning guide ↗</Link> &nbsp; <Link className="article-text-link" href="/cycling-trips/gravel">Explore gravel tours ↗</Link></p>
          </section>

          <section id="bike-setup">
            <h2>Bike setup: tyres, gearing and comfort</h2>
            <p>
              There is no single perfect gravel setup for every Moroccan itinerary. Tyre width and tread should reflect the roughest expected surface, while puncture protection matters more on remote routes where repairs can take time. Wider tyres can improve comfort and grip on loose surfaces, but the final choice also depends on frame clearance, wheel and tyre compatibility, rider weight and luggage.
            </p>
            <h3>Tyres and puncture protection</h3>
            <p>
              A tyre that rolls quickly on smooth tarmac may be less comfortable or secure on rough, loose tracks. Discuss the route before choosing very narrow tyres, and check the condition of the casing, tread, sealant if using a tubeless setup, valves and spare tubes. Carry a repair option compatible with your wheel and tyre system.
            </p>
            <h3>Gearing and braking</h3>
            <p>
              Sustained climbs and a loaded bike make appropriate gearing important. Check that the lowest gear feels manageable for the steepest expected ascent, and inspect the drivetrain and brake pads before departure. Brakes need to be in good condition for long descents, especially when carrying bags or riding on loose gravel.
            </p>
            <h3>Fit and carried luggage</h3>
            <p>
              A comfortable contact point setup, reliable bottle access and secure bags help make long days more enjoyable. Test the bike with the luggage you intend to carry and check that bags do not interfere with steering, pedalling or tyre clearance. If a support vehicle carries most luggage, clarify what you still need to carry while riding.
            </p>
            <div className="article-tip"><strong>Service the bike before travel</strong><p>Check tyres, sealant or tubes, brake pads, chain, gears, bolts and lights if relevant. A small issue can be more complicated to solve when the route is remote.</p></div>
          </section>

          <section id="surfaces">
            <h2>Understand the surfaces you may encounter</h2>
            <h3>Paved roads and quiet lanes</h3>
            <p>
              Paved sections can connect villages and route segments efficiently, but road conditions and traffic differ by area. Stay alert, ride predictably, and confirm whether the itinerary uses busy roads or quieter alternatives. A gravel bike can handle mixed riding, yet long paved stretches may influence tyre and gearing choices.
            </p>
            <h3>Compact dirt and hardpack</h3>
            <p>
              Firm dirt can allow steady progress in suitable weather, although grip changes with dust, loose material, moisture and corrugations. Keep a controlled pace, give other riders room, and adjust tyre pressure only within safe limits for your setup and load.
            </p>
            <h3>Loose stone, washboard and rough tracks</h3>
            <p>
              Loose gravel and corrugated surfaces can increase vibration, reduce traction and slow progress. Expect the average speed to fall, especially when carrying luggage or climbing. Use a relaxed but controlled grip, look ahead, avoid abrupt braking on loose corners and leave enough space to react to changes in surface.
            </p>
            <p>
              If a section is too rough or steep for your comfort, walking briefly may be a sensible choice. The route should match the group's ability and the available support rather than forcing a rider onto terrain they cannot manage confidently.
            </p>
          </section>

          <section id="distance-climbing">
            <h2>Distance, climbing and pacing</h2>
            <p>
              Daily distance alone is a poor measure of how hard a gravel stage will feel. Climbing, surface quality, wind, heat, luggage and the time required for navigation all affect the day. A shorter stage with rough tracks and sustained climbing may take longer than a longer route on smooth roads. Ask for both distance and elevation, as well as a realistic estimate of time in the saddle.
            </p>
            <p>
              Choose a pace that allows you to eat, drink, look ahead and respond safely to terrain. On multi-day trips, avoid turning every stage into a personal time trial. Consistent effort and recovery make it easier to enjoy the later days, particularly when surfaces are demanding or the route crosses remote areas.
            </p>
            <ul className="article-checklist">
              <li>Review distance, climbing and expected riding time for every stage.</li>
              <li>Ask which sections are roughest and how they affect the planned pace.</li>
              <li>Leave time for stops, navigation, photos and local visits.</li>
              <li>Discuss shorter alternatives or transfer support if the group needs a more manageable day.</li>
            </ul>
          </section>

          <section id="navigation">
            <h2>Navigation and route planning</h2>
            <p>
              On rural and remote tracks, junctions can be less obvious than on paved roads. Download the planned route before setting out, check that your device is charged and protect it from dust, vibration and heat. An offline map or second navigation option is useful where mobile coverage may be limited. If you follow a guide, understand the regrouping points and the agreed process if riders become separated.
            </p>
            <h3>Use route files as a tool, not a substitute for judgement</h3>
            <p>
              A GPS line cannot tell you whether a track has changed, a gate is closed, a surface has deteriorated or local conditions make the planned route unsuitable. Follow the agreed route and local guidance, and do not improvise a shortcut into unfamiliar terrain simply to save time. Ask who makes route decisions and how updates are shared during the trip.
            </p>
            <div className="article-tip"><strong>Prepare before you lose signal</strong><p>Save offline maps, the route file, accommodation details and emergency contacts. Bring a charging cable or power bank, and make sure your device can handle a full riding day.</p></div>
          </section>

          <section id="water-food">
            <h2>Water, food and resupply</h2>
            <p>
              Water and food planning are central to gravel rides, especially when routes include exposed landscapes or long gaps between settlements. Do not assume shops, cafés or reliable taps will be available whenever you need them. Ask the organiser about the longest expected gap between stops and carry enough capacity for that section, with an allowance for delays or a slower pace.
            </p>
            <p>
              Eat before you become very hungry and drink regularly rather than waiting until you feel depleted. For long days, bring ride food that you know you can tolerate and plan meal stops around the route. In warmer conditions, sun protection, shade breaks and realistic daily timing matter just as much as the distance shown on a map.
            </p>
            <p>
              If dietary requirements or allergies affect your planning, communicate them before departure and confirm what can be arranged at overnight stops. Keep litter secure and take it with you until it can be disposed of appropriately.
            </p>
          </section>

          <section id="regions">
            <h2>Where to ride gravel in Morocco</h2>
            <h3>High Atlas foothills and mountain valleys</h3>
            <p>
              The Atlas region can offer a varied mix of paved roads, rural tracks and mountain terrain. Route difficulty depends on the specific valley, altitude, surface and climbing. Some stages require a slower pace or a transfer between riding areas, so confirm the actual surface mix and daily ascent before choosing your bike setup.
            </p>
            <p><Link className="article-text-link" href="/destinations/atlas-mountains">Explore the Atlas Mountains ↗</Link></p>
            <h3>Marrakech countryside and Agafay</h3>
            <p>
              The areas around Marrakech can suit a day ride or part of a longer trip, with the surface varying from paved connections to dirt and rocky tracks. In open terrain, plan carefully around heat, shade, water and exposure. Ask where the ride starts, how transfers work and what the route's roughest sections are like.
            </p>
            <p><Link className="article-text-link" href="/destinations/marrakech">Explore Marrakech ↗</Link> &nbsp; <Link className="article-text-link" href="/destinations/agafay-desert">Explore Agafay ↗</Link></p>
            <h3>Southern Morocco and longer journeys</h3>
            <p>
              Southern routes can deliver broad landscapes and a sense of space, but distances between services and the remoteness of some tracks require careful planning. Confirm water, accommodation, navigation, luggage handling, repair options and vehicle access before booking a multi-day itinerary.
            </p>
            <p><Link className="article-text-link" href="/destinations/sahara-desert">Explore southern Morocco and the Sahara ↗</Link></p>
            <h3>Atlantic Coast and rural roads</h3>
            <p>
              Coastal routes can combine paved sections with rural tracks and village connections. Wind, traffic, surface and resupply options all influence the route, so check the daily plan and allow enough time for stops rather than choosing a route by distance alone.
            </p>
            <p><Link className="article-text-link" href="/destinations/atlantic-coast">Explore the Atlantic Coast ↗</Link></p>
          </section>

          <section id="multi-day">
            <h2>Plan a multi-day gravel tour</h2>
            <p>
              A multi-day trip needs a coherent stage plan, suitable overnight stops and a realistic approach to fatigue. Ask whether the group will carry its own luggage, use a support vehicle or transfer bags between stops. Confirm accommodation, meals, the daily start time and how the organiser handles changes to the route or a mechanical problem.
            </p>
            <p>
              Build the itinerary around the group's least experienced rider and the likely pace on the roughest surface. A rest day, shorter stage or transfer can make a longer journey more enjoyable. Make sure the plan explains what is included and what riders must arrange themselves, rather than assuming every service is part of the tour.
            </p>
            <p><Link className="article-text-link" href="/journal/planning-multi-day-cycling-tours">Read the multi-day cycling planning guide ↗</Link></p>
          </section>

          <section id="equipment">
            <h2>Equipment, spares and mechanical support</h2>
            <p>
              Carry the equipment appropriate to your route and your ability to repair common problems. At minimum, think about punctures, a pump or inflator, tyre levers, a multi-tool and a chain repair option compatible with your bike. If you use tubeless tyres, confirm sealant condition, plug availability and whether you also carry a tube. Remote stages can make a simple tyre problem a longer delay if the kit does not match the bike.
            </p>
            <p>
              Confirm what a guide or support vehicle carries, whether spare parts are available and what happens if a bike cannot be repaired on the trail. A support vehicle may not be able to reach every section. Keep your bike in good condition before travelling and check chain wear, brake pads, tyre casing, gears, wheels and fasteners in advance.
            </p>
            <ul className="article-checklist">
              <li>Helmet, gloves, eyewear, suitable shoes and comfortable cycling clothing.</li>
              <li>Tyre repair equipment compatible with your wheel and tyre system.</li>
              <li>Multi-tool, chain repair option and essential spares appropriate to your bike.</li>
              <li>Navigation device or phone with offline maps and a charging option.</li>
              <li>Water capacity, sun protection, weather layers and personal medication.</li>
              <li>Clear information about luggage, mechanical support and emergency procedures.</li>
            </ul>
          </section>

          <section id="responsible">
            <h2>Ride responsibly and respect local communities</h2>
            <p>
              Gravel routes often pass through working countryside and villages. Slow down around people and animals, give way where needed, keep noise low and ask before photographing individuals. Stay on established tracks instead of creating shortcuts, and leave gates and property as you find them. Local guidance is important where paths are shared or access is uncertain.
            </p>
            <p>
              Carry waste until you can dispose of it properly, use refill options when safe and practical, and avoid disturbing livestock or sensitive areas. Consider how your visit can support local businesses through appropriate meals, accommodation and services. A good ride should leave the route and communities respected after you pass through.
            </p>
          </section>

          <section id="gravel-checklist">
            <h2>Quick pre-trip checklist</h2>
            <ul className="article-checklist">
              <li>Confirm the stage-by-stage distance, climbing, surface mix and likely riding time.</li>
              <li>Choose tyres, gearing, luggage and repair equipment for the roughest planned surface.</li>
              <li>Download route files and offline maps, and confirm regrouping and communication arrangements.</li>
              <li>Clarify water and food stops, longest resupply gaps and the plan for unexpected delays.</li>
              <li>Understand accommodation, luggage transfers, support vehicle access and mechanical assistance.</li>
              <li>Confirm the inclusions, exclusions, bike requirements and cancellation terms before booking.</li>
            </ul>
            <div className="article-author-note"><strong>Planning a gravel cycling holiday in Morocco?</strong><p>Share your preferred dates, group size, experience, desired daily distance and regions on our <Link href="/contact?request=complete-gravel-bike-morocco">trip enquiry page</Link>. We can discuss a route format and the practical details that need to be confirmed for your proposed itinerary.</p></div>
          </section>

          <section id="gravel-faq" className="article-faq">
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
            <h2>Ready to plan your gravel cycling holiday?</h2>
            <p>Tell us your preferred dates, route ideas, group size and riding experience. We can discuss surfaces, daily distance, resupply, luggage and support before an itinerary is confirmed.</p>
          </div>
          <div className="article-cta-actions">
            <Link className="article-button article-button-light" href="/contact?request=complete-gravel-bike-morocco">Plan Your Gravel Trip ↗</Link>
            <Link className="article-button article-button-outline" href="/cycling-trips/gravel">Explore Gravel Tours</Link>
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
        <div className="article-shell article-footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>

      <style>{`
        .complete-gravel-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
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
        @media(prefers-reduced-motion:reduce){.complete-gravel-article *,.complete-gravel-article *:before,.complete-gravel-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
