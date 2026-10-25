import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jbel Saghro Cycling Guide | Mountain Bike Morocco",
  description:
    "Plan a cycling adventure in Jbel Saghro, southern Morocco. Explore rugged terrain, remote tracks, bike choice, route planning, water, support and responsible riding with this practical guide.",
  alternates: { canonical: "/journal/jbel-saghro-cycling" },
  openGraph: {
    title: "Jbel Saghro Cycling Guide",
    description:
      "Practical advice for cycling Jbel Saghro in southern Morocco, from terrain and bike setup to remote-route logistics, seasonal conditions and support.",
    type: "article",
    images: ["/images/saghro-morocco-bike-tour.jpg"],
  },
};

const relatedArticles = [
  {
    category: "MOUNTAIN BIKE GUIDES",
    title: "Best Mountain Bike Trails in Morocco",
    text: "Compare trail types across Morocco and match the terrain to your experience.",
    image: "/images/mtb-tours-morocco.jpg",
    href: "/journal/best-mountain-bike-trails-morocco",
  },
  {
    category: "GRAVEL CYCLING",
    title: "Complete Gravel Bike Morocco",
    text: "Plan your bike setup, navigation, daily distances and support for a gravel trip.",
    image: "/images/gravel-bike-tour-morocco.jpg",
    href: "/journal/complete-gravel-bike-morocco",
  },
  {
    category: "DESERT ADVENTURES",
    title: "Sahara Desert E-Bike Adventure",
    text: "Learn how terrain, battery range, water and remote travel shape an e-bike trip.",
    image: "/images/sahara-desert-ebike-expeditions.jpg",
    href: "/journal/sahara-desert-ebike-adventure",
  },
];

const faqs = [
  {
    question: "What is Jbel Saghro like for cycling?",
    answer:
      "The region is known for rugged, open landscapes and remote-feeling terrain. A ride may involve rocky tracks, rough surfaces and long gaps between services. The exact experience depends on route choice, recent conditions, bike type and the support plan.",
  },
  {
    question: "Is Jbel Saghro better for MTB or gravel?",
    answer:
      "It depends on the route. An MTB is generally the more flexible choice for rough, rocky or steep tracks. Gravel can work on routes with suitable road and hardpack surfaces, but tyre clearance, gearing and comfort should be assessed against the roughest sections. Ask for a route description before selecting a bike.",
  },
  {
    question: "When should I plan a cycling trip in Jbel Saghro?",
    answer:
      "Spring and autumn are often considered for southern Morocco, but conditions vary by year, altitude and route. Heat, cold nights, wind and recent rainfall can affect comfort and access. Check a current forecast and local route conditions for your travel dates rather than relying on the season alone.",
  },
  {
    question: "Will I have access to water and shops along the route?",
    answer:
      "Do not assume that supplies will be available at regular intervals on remote stages. Confirm water carrying capacity, food stops, resupply points, support-vehicle access and emergency arrangements in advance. The plan should account for the most remote section of each day.",
  },
  {
    question: "Can I ride Jbel Saghro on an E-MTB?",
    answer:
      "An E-MTB may suit some routes, but battery range and charging logistics are especially important when services are sparse. Route distance, climbing, surface, assistance mode, rider load and temperature affect battery use. Confirm charging options and the contingency plan before booking.",
  },
  {
    question: "What should I confirm before booking a Jbel Saghro trip?",
    answer:
      "Ask for daily distances, ascent, surface, technical difficulty, start and finish points, transfers, accommodation, water and meals, luggage handling, bike arrangements, mechanical support and emergency procedures. Also clarify inclusions, exclusions and how the itinerary may change if conditions are unsuitable.",
  },
];

export default function JbelSaghroCyclingPage() {
  return (
    <main className="jbel-saghro-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Jbel Saghro Cycling</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">DESTINATION GUIDE · SOUTHERN MOROCCO</p>
          <h1>Jbel Saghro Cycling</h1>
          <p className="article-deck">
            Jbel Saghro offers a rugged southern-Moroccan setting for riders seeking open landscapes, rocky tracks and a sense of remoteness beyond the better-known High Atlas. Successful trips depend on careful route selection, realistic daily stages, water planning and a support arrangement suited to the distance between services. This guide explains what to consider when choosing a cycling style and preparing for the terrain.
          </p>
          <div className="article-meta"><span>6 MIN READ</span><span>JBEL SAGHRO · SOUTH MOROCCO · CYCLING</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/saghro-morocco-bike-tour.jpg" alt="Cycling among the rugged landscapes of Jbel Saghro in southern Morocco" fetchPriority="high" />
          <figcaption>Plan remote stages around terrain, water, weather and access to support—not distance alone.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#saghro-landscape">Understanding the landscape</a>
          <a href="#saghro-riding">What cycling is like</a>
          <a href="#saghro-bike-choice">Choose your bike</a>
          <a href="#saghro-route-planning">Route planning and distance</a>
          <a href="#saghro-water-support">Water and remote support</a>
          <a href="#saghro-season">Weather and timing</a>
          <a href="#saghro-equipment">Equipment and bike setup</a>
          <a href="#saghro-accommodation">Logistics and accommodation</a>
          <a href="#saghro-responsible">Responsible riding</a>
          <a href="#saghro-checklist">Pre-trip checklist</a>
          <a href="#saghro-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            Jbel Saghro rewards preparation more than guesswork. Distances can look manageable on a map, but rough surfaces, climbing, heat, wind and long stretches without services affect how much ground a group can sensibly cover. Choose an itinerary that gives you time to ride well, manage supplies and respond calmly if the route or weather changes.
          </p>

          <section id="saghro-landscape">
            <h2>Understanding the Jbel Saghro landscape</h2>
            <p>
              Jbel Saghro lies in southern Morocco and has a character distinct from the greener valleys and higher, often snow-affected terrain of the High Atlas. The scenery is rugged and open, with rocky ridges, dry valleys and broad views. Routes can link remote areas, but road quality, surface and access vary, so the exact itinerary needs to be checked rather than inferred from a place name.
            </p>
            <p>
              The region is not the same as a dune-based Sahara ride. A cycling stage here may involve stony tracks, broken surfaces, gravelly sections and exposed terrain. Riders should expect the character of the route to change and allow time for slower technical sections, navigation and stops.
            </p>
            <figure className="article-inline-image"><img src="/images/mtb-morocco-Saghro.JPG" alt="Rugged Jbel Saghro terrain on a mountain biking journey in southern Morocco" loading="lazy" /><figcaption>Remote landscapes can make a trip memorable, but they also increase the importance of water, navigation and mechanical preparation.</figcaption></figure>
            <div className="article-tip"><strong>Ask for the route details</strong><p>Request the planned daily distance, ascent, surface description, start and finish points, and any remote sections before confirming that the route suits your group.</p></div>
          </section>

          <section id="saghro-riding">
            <h2>What cycling in Jbel Saghro is like</h2>
            <p>
              Riding can feel more expedition-like than a day tour close to a city. The rhythm of a stage depends on roughness, gradients, navigation, weather and the need to carry enough water. There may be fewer convenient places to stop for supplies, so plans should include realistic time for breaks and any transfer or support arrangements.
            </p>
            <p>
              Do not judge a route only by its distance. A shorter rocky stage can require more concentration and time than a longer paved ride. Groups with varied fitness or technical ability should agree on a pace that lets everyone ride safely and arrive with enough energy for the next day.
            </p>
          </section>

          <section id="saghro-bike-choice">
            <h2>Choose the right cycling style and bike</h2>
            <h3>Mountain biking</h3>
            <p>MTB is often the more versatile option for rough tracks, loose rock and uneven surfaces. Select a bike with reliable brakes, appropriate tyres and a setup that matches the terrain. Riders should be comfortable controlling the bike at lower speeds on loose surfaces and be prepared to walk sections that are too difficult or unsafe to ride.</p>
            <h3>Gravel cycling</h3>
            <p>Gravel can suit routes where roads and tracks remain manageable for the bike and tyres being used. Confirm the roughest surface, steepest gradients, tyre clearance and gearing before choosing a lightweight or fast-rolling setup. Remote rocky sections may be uncomfortable or unsuitable on a gravel bike with narrow tyres.</p>
            <h3>E-MTB</h3>
            <p>An E-MTB can assist with climbing, but battery strategy needs special attention when charging options are limited. Range depends on elevation, surface, assistance mode, rider load and temperature. Ask where charging will take place, whether spare batteries or vehicle support are available, and what happens if a battery runs low.</p>
            <h3>Road cycling</h3>
            <p>Road cycling should focus on suitable paved routes and confirmed road conditions. If an itinerary includes gravel or rocky tracks, check whether a road bike is appropriate and whether transfer sections are needed. Never assume every connecting line shown on a map is a suitable cycling road.</p>
          </section>

          <section id="saghro-route-planning">
            <h2>Route planning, elevation and realistic daily distances</h2>
            <p>
              A well-designed itinerary considers both distance and accumulated effort. Climbing, loose surfaces, technical handling, navigation and stops all affect the day. Ask for a stage-by-stage outline rather than a single total distance, and confirm whether the route includes hike-a-bike sections, vehicle transfers or exposed areas where conditions can change quickly.
            </p>
            <p>
              Build in enough time for food, rest, photographs and mechanical checks. For multi-day trips, the effort of successive stages matters just as much as the difficulty of one individual ride. A realistic plan should leave room to adapt without putting pressure on the group to ride faster than is comfortable.
            </p>
            <div className="article-tip"><strong>Plan for the slowest section</strong><p>Base the schedule on the roughest or most remote part of the day, not on your average speed from smoother roads.</p></div>
          </section>

          <section id="saghro-water-support">
            <h2>Water, food and support in remote terrain</h2>
            <p>
              Do not rely on finding water or shops at predictable intervals unless those stops have been confirmed. Ask how much water each rider should carry, where the planned resupply points are, whether the support vehicle can reach the route, and how food and emergency supplies will be handled if a stage takes longer than expected.
            </p>
            <p>
              Mechanical support is equally important. Clarify which tools and spares are carried, how punctures and more serious problems are managed, and what communication options are available in areas with weak mobile coverage. Any remote itinerary should have a clear response plan for injury, illness, mechanical failure and changes in weather.
            </p>
          </section>

          <section id="saghro-season">
            <h2>Weather and when to plan a Jbel Saghro cycling trip</h2>
            <p>
              Spring and autumn are often considered for cycling in southern Morocco, but conditions vary by year and route. Daytime heat, cool nights, wind and recent rainfall can change the comfort and difficulty of a stage. Summer exposure may make some itineraries demanding, while cooler months require preparation for low temperatures after sunset and early in the morning.
            </p>
            <p>
              Check a current forecast close to departure and ask your organiser about recent route conditions. Carry layers, sun protection and enough water capacity for the longest expected gap between reliable resupply points. Be prepared to adjust the itinerary if conditions make the planned route inappropriate.
            </p>
          </section>

          <section id="saghro-equipment">
            <h2>Equipment and bike setup</h2>
            <p>
              A basic preparation check should cover tyres, sealant or puncture equipment, brakes, chain, shifting, bolts and fit. Choose tyres and gearing for the actual surfaces and climbs, and carry the personal tools or spares suited to your components. If a bike is supplied, confirm size, condition, pedals, helmet availability and whether setup time is included before the first ride.
            </p>
            <p>
              Take suitable clothing for sun, wind and cooler evenings, plus gloves, eye protection, a helmet, comfortable riding shoes and a hydration system. Ask for a route-specific packing list and clarify what the organiser supplies so you can pack sensibly without leaving essential items behind.
            </p>
          </section>

          <section id="saghro-accommodation">
            <h2>Transfers, accommodation and multi-day logistics</h2>
            <p>
              Jbel Saghro journeys can involve long transfers and overnight stops where accommodation and meal choices are more limited than in major towns. Ask where each stage begins and ends, whether luggage is transferred, what accommodation is planned, which meals are included and how the group will reach the next riding area.
            </p>
            <p>
              Clarify inclusions, exclusions, group size and any minimum requirements. If the trip uses a support vehicle, confirm what it can carry and whether it can access each section of the route. These practical details are part of choosing a safe and enjoyable expedition, not minor administrative details to leave until the last minute.
            </p>
          </section>

          <section id="saghro-responsible">
            <h2>Responsible riding in southern Morocco</h2>
            <p>
              Use established routes, respect local access guidance and give walkers, animals and other road users space. Slow down near settlements, avoid cutting across crops or private land, and dismount when a narrow or uncertain section makes riding inappropriate. Take all litter with you and avoid leaving food packaging or repair materials at viewpoints and overnight stops.
            </p>
            <p>
              Treat local residents and hosts with respect, ask permission before taking photographs of people or private property, and follow guidance from your local team. Good preparation helps reduce avoidable pressure on communities and the landscape while making the trip better for everyone involved.
            </p>
          </section>

          <section id="saghro-checklist">
            <h2>Pre-trip checklist</h2>
            <ul className="article-checklist">
              <li><strong>Route:</strong> Confirm distance, ascent, surface, technical grade and start/finish points for every stage.</li>
              <li><strong>Water and food:</strong> Confirm carrying capacity, resupply points, meal arrangements and contingency supplies.</li>
              <li><strong>Bike:</strong> Check tyres, brakes, drivetrain, fit, pedals, helmet, tools and route-appropriate spares.</li>
              <li><strong>Support:</strong> Understand vehicle access, mechanical help, luggage handling and emergency procedures.</li>
              <li><strong>Conditions:</strong> Review the forecast, daylight, wind, heat and any recent route-access changes.</li>
              <li><strong>Trip details:</strong> Confirm accommodation, transfers, inclusions, exclusions, payment terms and group requirements.</li>
            </ul>
          </section>

          <section className="article-faq" id="saghro-faq">
            <h2>Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>Planning note</strong>
            <p>This guide provides general trip-planning information rather than live route, weather or access reports. Confirm current conditions, the precise itinerary, supply points and support arrangements with your organiser before travelling.</p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading"><div><p className="article-eyebrow">KEEP EXPLORING</p><h2>Related cycling guides</h2></div><Link className="article-text-link" href="/journal">View all journal articles ↗</Link></div>
          <div className="article-related-grid">
            {relatedArticles.map((article) => (
              <article className="article-related-card" key={article.href}>
                <Link href={article.href} className="article-related-image"><img src={article.image} alt={article.title} loading="lazy" /></Link>
                <div className="article-related-content"><p className="article-eyebrow">{article.category}</p><h3><Link href={article.href}>{article.title}</Link></h3><p>{article.text}</p><Link className="article-text-link" href={article.href}>Read article ↗</Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="article-cta">
        <div className="article-shell article-cta-inner">
          <div><p className="article-eyebrow">READY TO EXPLORE SOUTHERN MOROCCO?</p><h2>Plan a Jbel Saghro cycling trip around your group.</h2><p>Share your dates, riding style, experience and preferred daily distances so route options, water, accommodation and remote support can be discussed before booking.</p></div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/contact?request=jbel-saghro-cycling-planning">Plan Your Trip ↗</Link><Link className="article-button article-button-outline" href="/destinations/sahara-desert">Explore Southern Morocco</Link></div>
        </div>
      </section>

      <footer className="article-site-footer">
        <div className="article-shell article-footer-grid">
          <div className="article-footer-brand"><Link className="article-brand" href="/"><img src="/images/logo-mountain-bike-morocco-footer.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link><p>Guided mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, trails and local culture at your own pace.</p></div>
          <div><h3>Explore</h3><Link href="/cycling-trips">All Cycling Tours</Link><Link href="/cycling-trips/mtb">Mountain Bike Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil">Imlil Valley</Link><Link href="/destinations/toubkal">Mount Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let's Plan</h3><Link href="/about">About Us</Link><Link href="/events">Events</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="article-shell article-footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>

      <style>{`
        .jbel-saghro-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
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
        @media(prefers-reduced-motion:reduce){.jbel-saghro-article *,.jbel-saghro-article *:before,.jbel-saghro-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
