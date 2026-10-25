import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gravel Cycling in Morocco: Roads, Tracks and Preparation | Mountain Bike Morocco",
  description:
    "Plan a gravel cycling tour in Morocco with practical guidance on terrain, bike setup, tyres, navigation, distance, water, equipment and multi-day support.",
  alternates: { canonical: "/journal/morocco-gravel-cycling-guide" },
  openGraph: {
    title: "Gravel Cycling in Morocco: Roads, Tracks and Preparation",
    description:
      "A practical guide to Moroccan gravel riding, from Atlas foothills and rural tracks to long-distance journeys and remote stages.",
    type: "article",
    images: ["/images/gravel-cycling-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "GRAVEL CYCLING",
    title: "Complete Gravel Bike Morocco",
    text: "Plan your bike setup, route distances, navigation, supplies and support for a longer gravel holiday.",
    image: "/images/gravel-bike-tour-morocco.jpg",
    href: "/journal/complete-gravel-bike-morocco",
  },
  {
    category: "ROUTE INSPIRATION",
    title: "Best Cycling Routes From Marrakech",
    text: "Compare countryside rides, Atlas foothills and routes that begin with a stay in Marrakech.",
    image: "/images/atlas-marrakech-cycling-tour.jpg",
    href: "/journal/best-cycling-routes-from-marrakech",
  },
  {
    category: "COASTAL CYCLING",
    title: "Cycling Essaouira & the Atlantic Coast",
    text: "Consider coastal tracks and paved roads, with wind and route surface shaping the daily effort.",
    image: "/images/atlantic-coast-cycling-tour-morocco.jpg",
    href: "/journal/cycling-essaouira-atlantic-coast",
  },
];

const faqs = [
  {
    question: "Is Morocco suitable for a gravel cycling holiday?",
    answer:
      "It can be a rewarding destination for gravel riders because an itinerary can combine quiet paved roads, compact dirt and rural tracks. Surfaces differ considerably by region and route, however. Ask for a clear surface description, route profile, expected daily distance and support details before deciding whether a particular trip suits your bike and experience.",
  },
  {
    question: "What tyres should I use for gravel cycling in Morocco?",
    answer:
      "Tyre choice depends on the roughest planned surfaces, the amount of loose rock, your load and your preference for speed or comfort. Wider tyres and puncture protection may be useful on rough tracks, while smoother routes may allow a faster setup. Confirm the route surface with the organiser before choosing a tyre width or tread pattern.",
  },
  {
    question: "How far should I plan to ride each day?",
    answer:
      "Daily distance should be set alongside elevation, surface, wind, temperature, luggage and the group's experience. A shorter rough stage can take more time and energy than a longer paved ride. Ask for expected riding time, climbing, stops and any transfers instead of comparing trips by kilometres alone.",
  },
  {
    question: "Can I use a gravel bike on Atlas Mountain tracks?",
    answer:
      "Some routes may suit a gravel bike, particularly where surfaces are firm and gradients are manageable. Rough, steep or technical tracks may be better suited to a mountain bike. The route should be checked against the bike's tyre clearance, gearing, braking, load and your comfort on loose surfaces.",
  },
  {
    question: "What should I carry on remote gravel stages?",
    answer:
      "Carry the water, food, navigation and repair equipment specified for the route, along with personal essentials and suitable clothing layers. Clarify what a support vehicle carries, how far apart resupply points are and what to do if a mechanical problem or route change occurs. Remote stretches need an agreed support plan rather than assumptions about finding supplies en route.",
  },
  {
    question: "Is a support vehicle always included?",
    answer:
      "Support arrangements vary by trip and should be confirmed before booking. Ask whether luggage transfers, mechanical assistance, food and water resupply, and transfers between stages are included. If a tour is designed to be self-supported, make sure you understand the navigation, carrying requirements and contingency plan for the complete route.",
  },
];

export default function MoroccoGravelCyclingGuidePage() {
  return (
    <main className="morocco-gravel-cycling-guide-article" id="top">
      <div className="article-shell article-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Gravel Cycling in Morocco: Roads, Tracks and Preparation</span>
      </div>

      <header className="article-shell article-hero">
        <div className="article-hero-copy">
          <p className="article-eyebrow">GRAVEL CYCLING · ROUTE CHOICE · PREPARATION</p>
          <h1>Gravel Cycling in Morocco: Roads, Tracks and Preparation</h1>
          <p className="article-deck">
            Morocco offers gravel riders a changing mix of quiet paved roads, firm dirt, rural tracks and rougher stretches through mountain foothills and open landscapes. The most enjoyable trip starts with an honest picture of the terrain, a bike that fits it, realistic daily stages and a clear plan for navigation, supplies and support.
          </p>
          <div className="article-meta"><span>6 MIN READ</span><span>BIKE SETUP · ROUTE PLANNING · LOGISTICS</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/gravel-cycling-morocco.jpg" alt="Gravel cycling across rural tracks in Morocco" fetchPriority="high" />
          <figcaption>Choose the bike and route together: surface, elevation and support matter as much as distance.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#what-gravel-means">What gravel means in Morocco</a>
          <a href="#regions-and-terrain">Regions and terrain</a>
          <a href="#bike-setup">Bike setup and tyres</a>
          <a href="#daily-stages">Plan realistic daily stages</a>
          <a href="#navigation-support">Navigation and support</a>
          <a href="#food-water">Food, water and resupply</a>
          <a href="#season-and-packing">Season and packing</a>
          <a href="#responsible-riding">Responsible riding</a>
          <a href="#trip-checklist">Pre-trip checklist</a>
          <a href="#faq">FAQs</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            Gravel cycling works best when the route, bike and trip logistics have been planned as one system. Morocco can offer rewarding variety, but a road that looks smooth on a map may become rough, rocky or slow in places. Ask for the details that help you understand how each stage will actually ride.
          </p>

          <section id="what-gravel-means">
            <h2>What gravel cycling means in Morocco</h2>
            <p>
              A gravel itinerary may combine paved backroads, compact dirt, farm tracks and sections of loose stone. The mix varies with the region and the exact route, and conditions can change after weather or from one valley to the next. That variety is part of the appeal, but it also means a single label such as “gravel” does not tell you everything you need to know.
            </p>
            <p>
              Before choosing a trip, ask how much of the route is paved, how much is unsealed, and whether any sections are rocky, sandy, steep or likely to require walking. Clarify whether the journey is point-to-point or based from one accommodation, and whether transfers are used to avoid busy roads or connect distinct riding areas.
            </p>
            <div className="article-tip"><strong>Planning principle</strong><p>Ask for surface mix, elevation gain, likely riding time and resupply gaps—not just the total distance—so you can compare routes realistically.</p></div>
          </section>

          <section id="regions-and-terrain">
            <h2>Regions and terrain: where gravel can work well</h2>
            <h3>Atlas foothills and rural valleys</h3>
            <p>
              Foothill routes can bring together villages, changing views and a variety of road and track surfaces. Climbs and descents may be longer than expected, and the condition of an unpaved section matters when carrying luggage. Discuss whether a stage is designed for steady exploration or sustained riding and climbing.
            </p>
            <h3>Marrakech and the surrounding countryside</h3>
            <p>
              Marrakech can be a convenient starting point for a day ride or a longer trip. The route should account for the way out of the city, traffic exposure, transfer times and the point where more relaxed rural riding begins. A well-planned day leaves room for bike setup, breaks and the return journey rather than counting only time spent pedalling.
            </p>
            <h3>Agafay and southern landscapes</h3>
            <p>
              Open and dry terrain can feel very different from shaded mountain valleys. Loose surfaces, exposure to sun and wind, limited services and longer distances between supplies may affect the stage. These routes need a careful plan for water, navigation, timing and mechanical support.
            </p>
            <h3>Atlantic Coast and rural tracks</h3>
            <p>
              Coastal and countryside routes may offer a mix of paved roads and unsealed tracks, with wind influencing the effort of a day. Ask how exposed the route is, whether the stages can be adapted to conditions, and which sections are most appropriate for a gravel bike rather than a road bike or mountain bike.
            </p>
            <figure className="article-inline-image">
              <img src="/images/gravel-cycling-trip-morocco.jpg" alt="Cycling on a gravel route through the Moroccan countryside" loading="lazy" />
              <figcaption>Route quality can change through the day, so surface descriptions and local route advice are important.</figcaption>
            </figure>
          </section>

          <section id="bike-setup">
            <h2>Bike setup: tyres, gearing, brakes and carrying capacity</h2>
            <p>
              Choose a bike and setup around the roughest surface expected on the itinerary. Tyre width and tread, puncture protection, gearing, brake condition and wheel strength can all influence comfort and reliability. Wider tyres can offer more comfort and grip on loose tracks, while a faster setup may suit a route dominated by smooth roads and firm dirt.
            </p>
            <p>
              Make sure the gearing allows you to climb at a sustainable cadence, especially if you carry luggage or ride over loose ground. Check tyres, sealant or tubes, brake pads, rotors, chain wear and shifting before departure. If you use your own bike, confirm that the planned surfaces fit its tyre clearance and geometry.
            </p>
            <p>
              Luggage also changes the ride. Panniers, frame bags or a small bikepacking setup affect handling in different ways, particularly on rough descents. Ask whether luggage is carried by a support vehicle or whether you are expected to carry everything between overnight stops.
            </p>
            <div className="article-tip"><strong>Before you travel</strong><p>Confirm whether bike hire is available, what sizes and models are offered, which pedals are fitted, whether helmets are provided and which spares and tools are included.</p></div>
          </section>

          <section id="daily-stages">
            <h2>Plan realistic daily stages</h2>
            <p>
              Kilometres do not tell the whole story. A long paved stage may be faster than a much shorter day on rough tracks with repeated climbs. Elevation, surface, wind, temperature, luggage, fitness and time available for breaks all change the amount of effort a stage requires.
            </p>
            <p>
              Ask for a day-by-day outline with the expected distance, climbing, surface mix, approximate riding time, planned stops and transfer sections. A multi-day plan should also consider recovery, accommodation check-in times and whether a shorter alternative is available if the group is tired or conditions change.
            </p>
            <p>
              If your group includes different fitness levels, describe this honestly at the planning stage. It may be better to choose a route with a steadier pace or add a rest day than to build every stage around the strongest rider. The aim is to enjoy the riding consistently, not simply to finish a schedule that looks ambitious on paper.
            </p>
          </section>

          <section id="navigation-support">
            <h2>Navigation, transfers and mechanical support</h2>
            <p>
              Reliable navigation is essential, particularly when tracks branch or remote stages have few obvious landmarks. Confirm whether a guide will ride with the group, whether GPS files or maps are provided, and what the procedure is if riders become separated. Downloaded maps and a charged device are useful, but they should fit into a wider route and communication plan.
            </p>
            <p>
              Support can mean different things from one trip to another. Ask whether the price includes luggage transfers, vehicle assistance, mechanical help, water and food resupply, and transfers between riding areas. If the itinerary is self-supported, make sure you understand the distance between services, what you must carry and how to respond to a mechanical issue or route change.
            </p>
            <p>
              A practical plan should explain who to contact, what communication is available in remote areas, and how the itinerary may change if weather or route conditions make a section unsuitable. These arrangements are worth clarifying before a deposit or travel booking is made.
            </p>
          </section>

          <section id="food-water">
            <h2>Food, water and resupply on the route</h2>
            <p>
              Water availability can vary significantly by route. Do not assume there will be a shop or reliable refill point at every village or junction. Confirm carrying capacity, planned stops, resupply gaps and whether support provides additional water. In exposed or warm conditions, follow route-specific advice from the organiser and plan conservatively.
            </p>
            <p>
              Food and breaks are part of the stage plan too. Ask whether meals, snacks and drinks are included, where lunch typically happens, and whether there are options for dietary requirements. Keep personal snacks accessible so you can manage your energy between planned stops.
            </p>
          </section>

          <section id="season-and-packing">
            <h2>Season, clothing and what to pack</h2>
            <p>
              Conditions differ by region and elevation. Mountain mornings may be cool even when lower areas are warm, while open or desert-edge stages may have more sun and wind exposure. Confirm the expected conditions for your actual route and travel dates rather than using general seasonal advice as a guarantee.
            </p>
            <p>
              Start with a properly fitted helmet, gloves, eyewear, suitable shoes, layered riding clothing and sun protection. Add a light wind or rain layer and warmer clothing when the route or time of year calls for it. Carry basic repair items appropriate to your bike, but first check which tools and spares your support team will bring.
            </p>
            <p>
              For trips involving transfers or overnight stays, check luggage limits, bike-case arrangements and whether you will need to pack and unpack the bike yourself. Keep essential personal items and medication accessible throughout the journey.
            </p>
          </section>

          <section id="responsible-riding">
            <h2>Responsible riding on rural tracks</h2>
            <p>
              Tracks often connect working land and lived-in communities. Slow down near pedestrians, livestock and homes, give way when appropriate, and avoid riding through crops or creating new shortcuts around difficult sections. Ask before photographing people and follow local guidance about access and etiquette.
            </p>
            <p>
              Take rubbish with you, use refillable bottles where practical and avoid leaving food packaging on the route. Responsible travel means considering not only the landscape but also the people who use these roads and paths every day.
            </p>
          </section>

          <section id="trip-checklist">
            <h2>Gravel trip planning checklist</h2>
            <ul className="article-checklist">
              <li><strong>Route profile:</strong> Confirm distance, climbing, surface mix, estimated riding time and transfer sections for every stage.</li>
              <li><strong>Bike and tyres:</strong> Match tyre width, gearing, brakes and carrying capacity to the roughest planned terrain.</li>
              <li><strong>Navigation:</strong> Confirm guide arrangements, route files, device charging and the plan if the group gets separated.</li>
              <li><strong>Water and food:</strong> Clarify resupply distances, carrying capacity, meal arrangements and any dietary requirements.</li>
              <li><strong>Support and repairs:</strong> Ask what the support vehicle carries and what you must bring for punctures or mechanical issues.</li>
              <li><strong>Accommodation and luggage:</strong> Check what is included, how bags are moved and how the bike is transported between regions.</li>
              <li><strong>Conditions:</strong> Confirm route access and the current outlook shortly before departure, especially for remote or exposed stages.</li>
            </ul>
          </section>

          <section id="faq" className="article-faq">
            <h2>Frequently asked questions</h2>
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>Plan the route around the real conditions</strong>
            <p>This guide provides general preparation advice. Confirm the exact route, current access, bike requirements, inclusions and support arrangements for your selected dates before booking.</p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading"><div><p className="article-eyebrow article-eyebrow-dark">KEEP EXPLORING</p><h2>More cycling guides</h2></div><Link className="article-text-link" href="/journal">View all journal articles ↗</Link></div>
          <div className="article-related-grid">
            {relatedArticles.map((item) => (
              <article className="article-related-card" key={item.href}>
                <Link className="article-related-image" href={item.href}><img src={item.image} alt={item.title} loading="lazy" /></Link>
                <div className="article-related-content"><p className="article-eyebrow article-eyebrow-dark">{item.category}</p><h3><Link href={item.href}>{item.title}</Link></h3><p>{item.text}</p><Link className="article-text-link" href={item.href}>Read article ↗</Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="article-cta">
        <div className="article-shell article-cta-inner"><div><p className="article-eyebrow">YOUR NEXT RIDE</p><h2>Plan a gravel journey that fits your bike, pace and ambitions.</h2><p>Share your travel dates, experience, preferred surfaces and daily distance. We can discuss routes and the practical details that need to be confirmed for your trip.</p></div><div className="article-cta-actions"><Link className="article-button article-button-light" href="/contact?request=gravel-cycling-planning">Plan your trip ↗</Link><Link className="article-button article-button-outline" href="/cycling-trips/gravel">Browse gravel tours</Link></div></div>
      </section>

      <footer className="article-site-footer">
        <div className="article-shell article-footer-grid">
          <div className="article-footer-brand"><Link href="/" className="article-brand"><img src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link><p>Guided MTB, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, trails and local culture at your own pace.</p></div>
          <div><h3>Explore</h3><Link href="/cycling-trips">All Cycling Tours</Link><Link href="/cycling-trips/mtb">Mountain Bike Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil">Imlil Valley</Link><Link href="/destinations/toubkal">Mount Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let&apos;s Plan</h3><Link href="/about">About Us</Link><Link href="/events">Events</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="article-shell article-footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>

      <style>{`
        .morocco-gravel-cycling-guide-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
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
        @media(prefers-reduced-motion:reduce){.morocco-gravel-cycling-guide-article *,.morocco-gravel-cycling-guide-article *:before,.morocco-gravel-cycling-guide-article *:after{scroll-behavior:auto!important;transition:none!important}}
`}</style>
    </main>
  );
}
