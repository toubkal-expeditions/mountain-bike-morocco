import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preparing for a Desert Cycling Expedition | Mountain Bike Morocco",
  description:
    "Prepare for a desert cycling expedition in Morocco with practical guidance on heat, water, navigation, bike maintenance, remote-route logistics and support.",
  alternates: { canonical: "/journal/desert-cycling-preparation" },
  openGraph: {
    title: "Preparing for a Desert Cycling Expedition",
    description:
      "A practical Morocco desert cycling guide covering route planning, water, food, equipment, navigation and support between remote stages.",
    type: "article",
    images: ["/images/desert-cycling-expeditions.jpg"],
  },
};

const relatedArticles = [
  {
    category: "DESERT CYCLING",
    title: "Sahara Desert E-Bike Adventure",
    text: "Explore the extra planning that electric-assisted riding needs across remote desert landscapes.",
    image: "/images/sahara-desert-ebike-expeditions.jpg",
    href: "/journal/sahara-desert-ebike-adventure",
  },
  {
    category: "TRIP PLANNING",
    title: "Multi-Day Cycling Tours Planning",
    text: "Plan realistic daily stages, recovery, accommodation, luggage and mechanical support.",
    image: "/images/group-adventure-cycling-morocco.jpg",
    href: "/journal/planning-multi-day-cycling-tours",
  },
  {
    category: "DESTINATION GUIDES",
    title: "Jbel Saghro Cycling",
    text: "Learn what to consider when planning a ride through rugged terrain and remote southern routes.",
    image: "/images/saghro-morocco-bike-tour.jpg",
    href: "/journal/jbel-saghro-cycling",
  },
];

const faqs = [
  {
    question: "What makes a desert cycling trip different from a mountain tour?",
    answer:
      "Remote sections, limited services, exposure to sun and wind, water access and navigation become central to the plan. Distances must be assessed against the actual surface and support options, not just the map. Confirm the stage plan and contingency arrangements before travelling.",
  },
  {
    question: "How much water should I carry?",
    answer:
      "There is no single amount that suits every trip. Requirements depend on temperature, effort, route length, resupply points and individual needs. Ask the organiser for a route-specific hydration plan, the capacity you should carry and how water will be replenished between settlements or support stops.",
  },
  {
    question: "Which bicycle is best for a desert expedition?",
    answer:
      "The right bike depends on the surface and route. A gravel bike may suit firm tracks and paved connectors, while rougher or sandy sections may call for a mountain bike. An E-MTB needs additional battery and charging planning. Ask for the terrain description before choosing or hiring equipment.",
  },
  {
    question: "Can I ride in the desert during summer?",
    answer:
      "Conditions can be very hot, and the safest option depends on the specific region, route and forecast. Do not assume a route is suitable based on general seasonal advice. Confirm current conditions with the local organiser and be prepared to adjust timing, distance or travel dates if heat creates an unacceptable risk.",
  },
  {
    question: "Is a support vehicle necessary?",
    answer:
      "Support arrangements should match the remoteness, route, group experience and available services. Some itineraries use a vehicle for luggage, supplies or mechanical help, while others have different arrangements. Confirm exactly what is included, where support can meet the group and how emergencies or route changes are handled.",
  },
  {
    question: "What should I tell the organiser before booking?",
    answer:
      "Share your dates, group size, riding experience, preferred cycling style, medical or dietary considerations relevant to the trip, and how comfortable you are with remote travel. Ask for the day-by-day route, water and food plan, accommodation, transfer details, equipment list, support arrangements and inclusions in writing.",
  },
];

export default function DesertCyclingPreparationPage() {
  return (
    <main className="desert-cycling-preparation-article" id="top">
      <div className="article-shell article-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Preparing for a Desert Cycling Expedition</span>
      </div>

      <header className="article-shell article-hero">
        <div className="article-hero-copy">
          <p className="article-eyebrow">DESERT CYCLING · REMOTE ROUTES · MOROCCO</p>
          <h1>Preparing for a Desert Cycling Expedition</h1>
          <p className="article-deck">
            Desert cycling rewards careful preparation. Open terrain, exposed tracks and long gaps between services mean route logistics are just as important as bike fitness. A well-planned expedition considers water, food, navigation, equipment, support and the ability of everyone in the group before setting out.
          </p>
          <div className="article-meta"><span>6 MIN READ</span><span>ROUTE PLANNING · EQUIPMENT · SAFETY</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/desert-cycling-expeditions.jpg" alt="Cyclists preparing for a desert cycling expedition in Morocco" fetchPriority="high" />
          <figcaption>In remote terrain, a clear support and resupply plan is part of the ride.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#desert-difference">What makes desert riding different</a>
          <a href="#choose-route">Choose the right route</a>
          <a href="#water-food">Water, food and resupply</a>
          <a href="#bike-equipment">Bike and equipment</a>
          <a href="#navigation-support">Navigation and support</a>
          <a href="#heat-weather">Heat and changing conditions</a>
          <a href="#pace-recovery">Pacing and recovery</a>
          <a href="#responsible-travel">Responsible travel</a>
          <a href="#trip-checklist">Pre-trip checklist</a>
          <a href="#faq">FAQs</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            A desert expedition is not simply a longer day ride with fewer buildings around. The surface, exposure, resupply gaps and distance from services all influence the plan. Before you travel, make sure you understand the route and what you need to carry, what the support team will provide, and what happens if weather, a mechanical problem or fatigue changes the day's plan.
          </p>

          <section id="desert-difference">
            <h2>What makes desert cycling different?</h2>
            <p>
              Morocco's desert and semi-desert regions include a variety of landscapes rather than one uniform surface. A route may combine hard-packed tracks, stony plains, loose gravel, rocky sections, sandy patches and paved connectors. Each surface affects speed, control, tyre choice and how much energy a rider uses. A stage that appears manageable on a map can become demanding when the surface is rough or exposed.
            </p>
            <p>
              Services may be sparse between villages or overnight stops. That makes planning for water, food, navigation, communication and mechanical issues essential. The organiser should be able to explain the approximate riding day, where the group can resupply, how luggage is moved and which support arrangements are available along each stage.
            </p>
            <div className="article-tip"><strong>Think beyond kilometres</strong><p>Ask about surface, elevation, exposure, expected riding time, resupply gaps and support access—not only the distance listed for each day.</p></div>
          </section>

          <section id="choose-route">
            <h2>Choose a route that matches your group</h2>
            <h3>Mountain bike routes</h3>
            <p>
              An MTB can be suitable for rougher tracks and rocky terrain where confident handling and control matter. Check whether the route includes loose descents, deep sand, steep climbs or sections where pushing the bike may be necessary. Fitness alone does not guarantee that a technical route will feel comfortable.
            </p>
            <h3>Gravel journeys</h3>
            <p>
              Gravel bikes can work well on firm tracks and mixed-surface routes, but the roughest section should inform the setup. Confirm the amount of sand, loose rock and broken ground, and ask whether tyre width, tread, gearing and luggage load are appropriate for the planned route.
            </p>
            <h3>E-MTB expeditions</h3>
            <p>
              Electric assistance may make climbing more manageable, but it adds charging and battery-range decisions. Range changes with terrain, load, assistance level, temperature and battery condition. Confirm how charging is handled overnight, whether spare batteries or other support are available and how the route is adapted if energy use is higher than expected.
            </p>
            <h3>Road cycling</h3>
            <p>
              A road-bike itinerary should be built around paved sections with a clear understanding of surface quality, traffic, wind and distances between services. If the plan includes unsealed desert tracks, ask whether a road bike is truly suitable or whether a different route or bicycle is more appropriate.
            </p>
            <figure className="article-inline-image">
              <img src="/images/atlas-desert-cycling-tour.jpg" alt="Cycling route through Morocco's open desert and mountain landscapes" loading="lazy" />
              <figcaption>Choose your bike and route according to the roughest planned surface and the support available.</figcaption>
            </figure>
          </section>

          <section id="water-food">
            <h2>Water, food and resupply</h2>
            <p>
              Hydration planning needs to reflect the actual route, expected conditions, riding effort and access to resupply. Ask how much carrying capacity riders should have, where refill points are planned and whether the support team carries additional water. Do not rely on finding shops, fountains or accommodation at convenient intervals unless those points are part of the confirmed itinerary.
            </p>
            <p>
              Food matters too. Long days and remote sections can make it difficult to replace energy at short notice. Confirm what meals, snacks and emergency supplies are included and what you should carry personally. Mention dietary requirements before the trip so the organiser can discuss practical arrangements in advance.
            </p>
            <p>
              Carrying capacity should fit your bike and the expected gaps between support stops. Make sure bottles or a hydration pack are secure and easy to access while riding. For remote stages, ask for the planned stops and follow the local team's route-specific guidance rather than using a generic hydration number for every journey.
            </p>
          </section>

          <section id="bike-equipment">
            <h2>Bike choice, setup and equipment</h2>
            <p>
              Start with a reliable, properly maintained bike suited to the route's roughest surface. Before departure, check tyres, sealant or tubes, brakes, drivetrain, shifting, wheels and bolts. Confirm your tyre setup, puncture protection, gearing and carrying solution against the expected terrain and load. If hiring a bike, allow time for fit adjustments and a test ride before the expedition begins.
            </p>
            <h3>Personal kit to discuss</h3>
            <ul className="article-checklist">
              <li>A correctly fitting helmet, gloves, eyewear and suitable cycling shoes.</li>
              <li>Sun protection and clothing layers for temperature changes between daytime riding and evenings.</li>
              <li>Enough personal carrying capacity for water, food, phone and essential items.</li>
              <li>Basic repair supplies appropriate to the bike, including a pump or inflator and puncture repair options.</li>
              <li>Any personal medication and a small first-aid item appropriate to your needs.</li>
            </ul>
            <p>
              Do not assume every spare or tool is supplied. Ask what the guide or support vehicle carries, which repairs riders are expected to manage, and what happens if a bike cannot be repaired beside the trail. Keep essential items protected from dust and accessible without unpacking all your luggage.
            </p>
          </section>

          <section id="navigation-support">
            <h2>Navigation, communication and support</h2>
            <p>
              Remote route finding should not depend on guesswork. Confirm who leads the ride, whether navigation devices or route files are provided, how the group stays together and what communication is available where mobile coverage is limited. Riders should understand the meeting procedure if someone stops, has a mechanical issue or becomes separated from the group.
            </p>
            <p>
              Support vehicles, guides, luggage transport and mechanical assistance differ by trip. Confirm exactly what is included, where a vehicle can reasonably access the route and whether it accompanies the group continuously or meets it at agreed locations. Clarify the emergency plan and the process for changing a stage if weather or a rider's condition requires it.
            </p>
            <div className="article-tip"><strong>Ask for the support plan in writing</strong><p>The itinerary should describe guide arrangements, vehicle access, luggage handling, mechanical support, communication and the response plan for an emergency or route change.</p></div>
          </section>

          <section id="heat-weather">
            <h2>Plan around heat, wind and changing conditions</h2>
            <p>
              Conditions vary by region, elevation and date. Heat can increase the effort of a ride and make an exposed stage less comfortable, while wind, dust or changing weather can affect pace and visibility. Do not assume every desert route is suitable year-round. Ask the local organiser to assess conditions for your specific dates and route and be prepared to alter timing, distance or travel plans if necessary.
            </p>
            <p>
              Clothing should allow for strong sun during the day and cooler conditions later, particularly when the itinerary includes higher ground or overnight stays outside towns. Confirm the planned start times and expected riding duration, and follow local guidance on exposure, water, rest stops and when it is sensible to pause or stop a ride.
            </p>
          </section>

          <section id="pace-recovery">
            <h2>Set a realistic pace and allow for recovery</h2>
            <p>
              Desert riding can feel deceptively steady: a long stretch of open terrain may conceal rough surfaces, wind resistance or little shade. Choose daily distance according to the ground, elevation, group ability and support plan. Include breaks, meals and time for small repairs rather than planning only around an ideal moving speed.
            </p>
            <p>
              On a multi-day expedition, fatigue builds from one stage to the next. A suitable itinerary allows riders to recover, sleep, eat and prepare equipment for the following day. Share your recent riding experience honestly and ask whether the plan includes shorter options or a sensible way to adjust if a stage proves harder than expected.
            </p>
          </section>

          <section id="responsible-travel">
            <h2>Ride responsibly through desert communities and landscapes</h2>
            <p>
              Keep to agreed routes, avoid creating new tracks around difficult sections and give way to pedestrians, animals and local traffic. Slow down near settlements, ask permission before photographing people and respect private property and local guidance. Pack out rubbish and avoid leaving food wrappers, tubes or other waste along remote tracks.
            </p>
            <p>
              Local knowledge also helps visitors understand access and the context of a route. Follow your guide's instructions around livestock, village areas, water points and sensitive landscapes. Responsible riding preserves the quality of the experience for the next group and for the people who live and work in the region.
            </p>
          </section>

          <section id="trip-checklist">
            <h2>Desert expedition pre-trip checklist</h2>
            <ul className="article-checklist">
              <li>Confirm the route, surfaces, daily distance, elevation and expected riding time.</li>
              <li>Understand water and food provision, resupply gaps and what you must carry yourself.</li>
              <li>Check the bike, tyres, brakes, gearing, repair supplies and any E-bike charging arrangements.</li>
              <li>Review guide, navigation, communication, support-vehicle and emergency procedures.</li>
              <li>Ask what accommodation, meals, luggage transfers and mechanical support are included.</li>
              <li>Share your experience, group needs and relevant requirements before finalising the itinerary.</li>
              <li>Check the latest conditions with the organiser before departure and be flexible if the plan must change.</li>
            </ul>
          </section>

          <section id="faq" className="article-faq">
            <h2>FAQs: preparing for a desert cycling expedition</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>Plan for the actual route, not a generic desert itinerary.</strong>
            <p>Use this guide as a preparation starting point. Exact routes, conditions, support and inclusions should be confirmed with the local organiser before travel.</p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading">
            <div><p className="article-eyebrow article-eyebrow-dark">KEEP EXPLORING</p><h2>More cycling guides</h2></div>
            <Link className="article-text-link" href="/journal">View all Journal articles ↗</Link>
          </div>
          <div className="article-related-grid">
            {relatedArticles.map((article) => (
              <article className="article-related-card" key={article.href}>
                <Link href={article.href} className="article-related-image"><img src={article.image} alt={article.title} loading="lazy" /></Link>
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
            <p className="article-eyebrow">PLAN YOUR MOROCCO RIDE</p>
            <h2>Thinking about a desert cycling expedition?</h2>
            <p>Share your dates, preferred cycling style and experience to discuss a route, the support arrangements and what you should prepare before travelling.</p>
          </div>
          <div className="article-cta-actions">
            <Link className="article-button article-button-light" href="/contact?request=desert-cycling-planning">Plan your trip ↗</Link>
            <Link className="article-button article-button-outline" href="/destinations/sahara-desert">Explore desert tours</Link>
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
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil">Imlil Valley</Link><Link href="/destinations/toubkal">Mount Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations/sahara-desert">Sahara Desert</Link></div>
          <div><h3>Let&apos;s Plan</h3><Link href="/about">About Us</Link><Link href="/events">Events</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="article-shell article-footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>
      <style>{`
        .desert-cycling-preparation-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
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
        @media(prefers-reduced-motion:reduce){.desert-cycling-preparation-article *,.desert-cycling-preparation-article *:before,.desert-cycling-preparation-article *:after{scroll-behavior:auto!important;transition:none!important}}
`}</style>
    </main>
  );
}
