import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Women’s Mountain Biking in Morocco | Plan Your MTB Holiday",
  description:
    "Plan a women-focused mountain biking holiday in Morocco with practical advice on route choice, riding confidence, equipment fit, group needs, guide support and respectful local travel.",
  alternates: { canonical: "/journal/womens-mountain-biking-morocco" },
  openGraph: {
    title: "Women’s Mountain Biking in Morocco | Mountain Bike Morocco",
    description:
      "A practical guide to planning a women-focused MTB trip in Morocco, from choosing suitable trails and support to equipment, preparation and travelling thoughtfully.",
    type: "article",
    images: ["/images/women-cycling-tour-8-day.jpg"],
  },
};

const relatedArticles = [
  {
    category: "MOUNTAIN BIKE GUIDES",
    title: "The Best MTB Trails in the Atlas Mountains",
    text: "Explore varied High Atlas terrain, from village tracks to rocky descents and flowing singletrack.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/journal/best-mtb-trails-atlas-mountains",
  },
  {
    category: "TECHNICAL RIDING",
    title: "High Atlas Mountain Biking Routes: Technical Trails",
    text: "Understand loose rock, steep gradients, trail exposure and how to choose routes that suit your skills.",
    image: "/images/atlas-mountains-enduro-biking-tour.jpg",
    href: "/journal/high-atlas-mountain-biking-technical-trails",
  },
  {
    category: "E-MTB ADVENTURES",
    title: "Atlas Mountains E-Bike Tours",
    text: "Learn how pedal assistance, battery range, charging and group ability shape an Atlas E-MTB itinerary.",
    image: "/images/atlas-mountains-ebike-tour.jpg",
    href: "/journal/atlas-mountains-e-bike-tours",
  },
];

const faqs = [
  {
    question: "Do I need to be an expert mountain biker to join a women-focused trip?",
    answer:
      "Not necessarily. Suitable trips can be planned for different levels, but the route must match the riders’ actual skills and fitness. Ask for a clear description of terrain, daily distance, climbing, technical features and any sections that may need to be walked before choosing a tour.",
  },
  {
    question: "Can a women’s cycling trip be arranged for a private group?",
    answer:
      "You can enquire about a private group itinerary. Share your dates, group size, experience, preferred riding style, daily-distance goals and accommodation preferences. These details help shape a realistic plan, and availability and arrangements should be confirmed directly.",
  },
  {
    question: "What should we ask about guides and on-trail support?",
    answer:
      "Ask who will guide the group, how route choice is adapted to ability, what communication and emergency arrangements are used, and what mechanical support or vehicle assistance is available. Clarify how the group will regroup and what happens if a rider needs to stop or change the planned stage.",
  },
  {
    question: "How can we make sure rental bikes fit properly?",
    answer:
      "Provide each rider’s height and any fit considerations in advance, then confirm frame sizes, saddle adjustment, cockpit reach, brakes, suspension, pedals and helmet availability. Arrange enough time for a test ride and small adjustments before starting a long or technical stage.",
  },
  {
    question: "What clothing and equipment should we bring?",
    answer:
      "Start with a well-fitting helmet, gloves, eye protection, suitable shoes, comfortable riding layers, sun protection and enough water capacity for the planned route. Bring any personal items you rely on, and ask for a route- and season-specific packing list once the itinerary and support arrangements are clear.",
  },
  {
    question: "How should we approach local culture while cycling in Morocco?",
    answer:
      "Follow local guidance, slow down around villages and pedestrians, respect private spaces and ask permission before photographing people. Treat stops and conversations as invitations rather than expectations, and support local businesses where appropriate without disrupting daily life.",
  },
];

export default function WomensMountainBikingMoroccoPage() {
  return (
    <main className="womens-mtb-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Women’s Mountain Biking in Morocco</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">WOMEN’S CYCLING · MOUNTAIN BIKE · MOROCCO</p>
          <h1>Women’s Mountain Biking in Morocco</h1>
          <p className="article-deck">
            A women-focused mountain biking holiday can be a chance to ride new terrain, build confidence, take on a shared challenge or explore Morocco with a group whose goals feel aligned. The best trip starts with practical planning: honest route information, the right bike fit, supportive communication, realistic daily stages and enough flexibility for everyone to enjoy the experience at their own pace.
          </p>
          <div className="article-meta"><span>6 MIN READ</span><span>CYCLING HOLIDAYS · MOROCCO</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/women-cycling-tour-8-day.jpg" alt="Women’s cycling expedition in Morocco" fetchPriority="high" />
          <figcaption>A thoughtful itinerary gives each rider room to enjoy the trail, the landscape and the group experience.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#why-womens-trip">Why choose a women-focused trip?</a>
          <a href="#choose-route">Choose the right route and pace</a>
          <a href="#group-confidence">Build confidence as a group</a>
          <a href="#guide-support">Guides, safety and support</a>
          <a href="#bike-fit">Bike fit and equipment</a>
          <a href="#where-ride">Where to ride in Morocco</a>
          <a href="#culture">Local culture and responsible travel</a>
          <a href="#plan-trip">Plan a trip that works for everyone</a>
          <a href="#women-checklist">Pre-trip checklist</a>
          <a href="#women-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            There is no single definition of a women’s cycling holiday. Some groups want technical singletrack and full riding days; others prefer scenic trails, steady climbing, time to practise skills or a balance between riding and cultural discovery. Start with the people in the group, then choose the route and support around them.
          </p>

          <section id="why-womens-trip">
            <h2>Why choose a women-focused mountain biking trip?</h2>
            <p>
              Riding with a group of women can create space to share goals, learn from each other and celebrate progress, whether that means completing a long climb, trying a new trail feature or simply spending several days outdoors together. Some riders value skills development; others want a memorable holiday where cycling is the main focus but not the only activity. Defining what a good trip looks like to the group helps the organiser make better choices.
            </p>
            <p>
              The label alone does not guarantee that a trip will suit everyone. Ask about the planned terrain, the expected pace, group size, guiding approach, accommodation and support. The aim is not to lower expectations or assume all women ride alike; it is to make the trip responsive to the riders who are actually taking part.
            </p>
            <figure className="article-inline-image"><img src="/images/group-cycling-tour-morocco.jpg" alt="Cyclists sharing a guided cycling experience in Morocco" loading="lazy" /><figcaption>Clear shared goals help a group choose an itinerary that feels rewarding for different riders.</figcaption></figure>
            <div className="article-tip"><strong>Start with your group’s priorities</strong><p>Before enquiring, discuss the balance you want between challenging riding, confidence-building, sightseeing, rest time and cultural experiences. You do not need identical ability levels, but you do need an honest conversation about the terrain each rider is ready to handle.</p></div>
          </section>

          <section id="choose-route">
            <h2>Choose the right route, difficulty and pace</h2>
            <p>
              Morocco offers a broad range of riding environments. High Atlas routes may include stony tracks, narrow paths, long climbs and technical descents; foothills near Marrakech can offer shorter outings; gravel itineraries may link rural roads and rougher tracks; and E-MTB can make some climbs more manageable while still requiring confident bike control. The best fit depends on current ability, fitness, preferred terrain and how much riding the group wants to do each day.
            </p>
            <h3>Ask for more than a difficulty grade</h3>
            <p>
              Request stage-by-stage information about distance, ascent, surface, steepness, exposure, expected ride time and any hike-a-bike sections. A broad label such as “moderate” can mean different things to different operators. If some riders are newer to mountain biking, ask whether the itinerary has options to shorten a stage, bypass a technical section or take extra time without leaving anyone unsupported.
            </p>
            <h3>Build in room for adjustments</h3>
            <p>
              Daily plans work best when there is time for breaks, water, photos and regrouping. Avoid treating every stage as a target that must be completed at one pace. Agree on clear regrouping points and make sure the guide understands the group’s priorities before the trip starts.
            </p>
            <div className="article-tip"><strong>Make the route specific</strong><p>Share examples of trails you ride at home, the length of your usual rides and what technical features feel comfortable. This is more useful than describing yourself only as a beginner, intermediate or advanced rider.</p></div>
          </section>

          <section id="group-confidence">
            <h2>Build confidence and keep the group experience positive</h2>
            <p>
              Confidence grows when riders are given clear information, time to make decisions and permission to progress at an individual pace. Before an unfamiliar section, a guide can explain the terrain, point out a possible line and help riders decide whether to ride, walk or take another option if one is available. No rider should feel pressured to attempt a feature to keep up appearances or avoid delaying the group.
            </p>
            <h3>Skills practice without pressure</h3>
            <p>
              If skills development is part of the goal, agree on that when planning. Useful areas to practise may include controlled braking, looking through turns, managing loose surfaces, choosing a line and changing gears before a climb becomes too steep. A suitable practice area and measured progression are better than trying a new technique at speed on an exposed trail.
            </p>
            <h3>Different abilities can share a trip</h3>
            <p>
              Mixed ability does not automatically prevent a good group holiday, but the route and logistics need to reflect it. Clarify how the group will regroup, whether support can assist if a rider needs a break, and how much flexibility is possible if someone finds a stage harder than expected. Agreeing these points in advance can reduce uncertainty once the group is on the trail.
            </p>
          </section>

          <section id="guide-support">
            <h2>Guides, safety and support on the trail</h2>
            <p>
              In remote or mountainous terrain, good planning matters as much as the route itself. Ask who will lead the ride, how routes are selected for the group, what communication is carried, how the support team handles a mechanical problem and what the plan is if weather or trail conditions change. Clarify whether a support vehicle is available for the proposed itinerary and which sections it can actually reach.
            </p>
            <p>
              Safety should be discussed clearly and without overpromising. Ask about helmets, first-aid arrangements, emergency communication, expected group size and procedures if someone is injured or unable to continue. Riders should also share relevant experience, confidence levels and any needs that may affect the ride, so the organiser can discuss suitable options before confirming the trip.
            </p>
            <figure className="article-inline-image"><img src="/images/atlas-mountains-singletrack.jpg" alt="A mountain bike trail crossing the Atlas Mountains" loading="lazy" /><figcaption>Route knowledge and communication are important when trails move through remote mountain terrain.</figcaption></figure>
            <div className="article-tip"><strong>Confirm the support details in writing</strong><p>Ask what is included, what riders need to carry themselves, how assistance works on each stage and who to contact before departure. Support arrangements can vary by route, so do not assume every area is vehicle-accessible.</p></div>
          </section>

          <section id="bike-fit">
            <h2>Bike fit, equipment and comfort</h2>
            <p>
              Bike fit can make a significant difference over several days. Provide each rider’s height and any particular fit needs ahead of time if bikes are being hired. Confirm the frame size, saddle adjustment, reach to the handlebars, brake-lever position, pedals, helmet availability and time for a test ride. If anyone has a familiar saddle, pedals or contact points that make riding more comfortable, ask whether bringing them is practical.
            </p>
            <h3>Check the bike before the first stage</h3>
            <p>
              Test brakes, gears, tyres, wheels and suspension where applicable, and make sure the bike feels controllable at low speed before heading onto a trail. Ask what spares and tools the guide carries, how punctures are handled and what happens if a bike cannot be repaired during the ride. On an E-MTB trip, clarify battery range, charging opportunities and how the itinerary accounts for different assistance use.
            </p>
            <h3>Pack for changing conditions</h3>
            <p>
              A basic kit usually includes a helmet, gloves, eye protection, suitable shoes, comfortable riding layers, sun protection and enough water capacity for the expected stage. Mountain mornings and higher elevations can be cooler than lower areas, so a light insulating layer and wind or rain shell may be useful depending on season and forecast. Keep personal medication and essential items accessible, and request a route-specific packing list before departure.
            </p>
          </section>

          <section id="where-ride">
            <h2>Where to ride in Morocco</h2>
            <h3>High Atlas Mountains and Imlil</h3>
            <p>
              The High Atlas combines dramatic mountain views with trails and tracks that vary considerably by valley and elevation. Some options suit scenic exploration, while others demand stronger technical control and climbing fitness. The Imlil area can be a starting point for mountain-focused itineraries, but the precise route, access and conditions should be confirmed before travel.
            </p>
            <h3>Marrakech foothills and Agafay</h3>
            <p>
              Routes near Marrakech can work well for shorter rides or as an introduction before a longer journey. Agafay’s open rocky landscape feels different from high mountain terrain, and heat, exposure and water capacity deserve attention when choosing the stage and time of day. The surface and route difficulty should be matched to the group rather than selected on scenery alone.
            </p>
            <h3>Choose a ride that fits the wider holiday</h3>
            <p>
              A trip does not have to be an uninterrupted sequence of long days. Some groups prefer a few focused riding stages with time for markets, local food, rest or cultural visits; others want a more immersive multi-day MTB expedition. Make the balance explicit during planning so transfers, recovery and non-riding activities are built into the schedule.
            </p>
            <p><Link className="article-text-link" href="/destinations/atlas-mountains">Explore Atlas Mountains destinations ↗</Link> &nbsp; <Link className="article-text-link" href="/cycling-trips/mtb">Browse MTB tours ↗</Link></p>
          </section>

          <section id="culture">
            <h2>Local culture and responsible travel</h2>
            <p>
              Cycling through rural communities means sharing paths and roads with people going about everyday life. Slow down near homes, pedestrians and animals; give others space; follow the guide’s advice about access; and avoid creating shortcuts around obstacles. Do not assume every track is public or appropriate to ride at speed.
            </p>
            <p>
              Ask permission before photographing people, especially children, and respect anyone who prefers not to be photographed. Be considerate around homes and community spaces, leave no rubbish, and support local businesses where appropriate. Cultural activities should be arranged with respect for local preferences rather than treated as guaranteed performances or attractions.
            </p>
            <div className="article-tip"><strong>Travel with curiosity and respect</strong><p>Learn a few local greetings, listen to your guide’s advice, and let interactions develop naturally. Small, thoughtful choices can help make the experience positive for both visitors and the communities along the route.</p></div>
          </section>

          <section id="plan-trip">
            <h2>Plan a women’s cycling trip that works for everyone</h2>
            <p>
              A strong enquiry gives the organiser enough detail to suggest realistic options. Include intended dates, group size, previous riding experience, preferred cycling style, average daily distance, technical confidence, equipment needs and the type of accommodation you prefer. Mention whether the group wants skills sessions, cultural activities, rest days or a particular balance between challenging riding and relaxed exploration.
            </p>
            <p>
              Ask for a proposed itinerary with stage details, inclusions, exclusions, transfer arrangements, bike provisions, support expectations and payment terms. Availability and specific services must be confirmed for your dates; a general article cannot guarantee a particular guide, bike model, support vehicle or route condition. Make sure every rider has reviewed the planned difficulty before booking.
            </p>
            <h3>Questions to settle before you confirm</h3>
            <ul className="article-checklist">
              <li><strong>Riding plan:</strong> daily distance, ascent, surface, technical level, start and finish points.</li>
              <li><strong>Group support:</strong> guide arrangements, regrouping plan, communication and mechanical help.</li>
              <li><strong>Equipment:</strong> bike size and fit, helmet, pedals, spares, luggage and E-MTB charging where relevant.</li>
              <li><strong>Logistics:</strong> accommodation, meals, transfers, luggage handling, rest time and weather alternatives.</li>
              <li><strong>Costs:</strong> what is included, what costs extra, payment terms and cancellation conditions.</li>
            </ul>
            <div className="article-author-note"><strong>Planning your own women’s MTB holiday?</strong><p>Share your preferred dates, group size and riding goals through our <Link href="/contact?request=womens-cycling-tour">trip enquiry page</Link>. The route, availability, equipment and support details can then be discussed for your group.</p></div>
          </section>

          <section id="women-checklist">
            <h2>Pre-trip checklist</h2>
            <ul className="article-checklist">
              <li>Choose a route based on actual skills and fitness, not only a broad difficulty grade.</li>
              <li>Confirm bike fit, pedals, helmet availability and test-ride time before the first stage.</li>
              <li>Review daily distance, climbing, surfaces, support arrangements and regrouping procedures.</li>
              <li>Pack layers, sun protection, water capacity, basic personal repair supplies and essential medication.</li>
              <li>Discuss recovery time, cultural activities, accommodation needs and any individual requirements before confirming.</li>
              <li>Check expected weather and ask who will communicate any route changes or travel updates.</li>
            </ul>
          </section>

          <section className="article-faq" id="women-faq">
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
            <div><p className="article-eyebrow">KEEP EXPLORING</p><h2>More guides for your Morocco ride.</h2></div>
            <Link className="article-text-link" href="/journal">View all journal articles ↗</Link>
          </div>
          <div className="article-related-grid">
            {relatedArticles.map((article) => (
              <article className="article-related-card" key={article.href}>
                <Link className="article-related-image" href={article.href}><img src={article.image} alt={article.title} loading="lazy" /></Link>
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
          <div><p className="article-eyebrow">YOUR NEXT ADVENTURE</p><h2>Make space for a great ride in Morocco.</h2><p>Tell us about your group, preferred dates and riding goals, and start a conversation about a route that suits you.</p></div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/contact?request=womens-cycling-tour">Plan a Women’s Cycling Trip ↗</Link><Link className="article-button article-button-outline" href="/cycling-trips/mtb">Explore MTB Tours</Link></div>
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
          <div><h3>Let’s Plan</h3><Link href="/about">About Us</Link><Link href="/events">Events</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="article-shell article-footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>
          <style>{`
        .womens-mtb-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
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
        .article-tip{margin:26px 0;padding:23px 25px;background:#eeeae2;border-left:3px solid #c65c35}.article-tip strong{display:block;margin-bottom:6px;color:#25231f}.article-tip p{margin:0}
        .article-checklist{margin:10px 0 24px;padding-left:23px}.article-checklist li{padding-left:5px;margin:0 0 12px;line-height:1.8}.article-checklist strong{color:#24221e}
        .article-inline-image{margin:28px 0 40px}.article-inline-image img{display:block;width:100%;max-height:450px;object-fit:cover}.article-inline-image figcaption{padding:10px 0 0;color:#777168;font-size:12px;line-height:1.6}
        .article-faq details{border-top:1px solid #dcd8d0;padding:18px 0}.article-faq details:last-child{border-bottom:1px solid #dcd8d0}.article-faq summary{cursor:pointer;list-style:none;font-size:16px;font-weight:700;color:#24221e}.article-faq summary::-webkit-details-marker{display:none}.article-faq summary:after{content:'+';float:right;color:#c65c35;font-size:22px}.article-faq details[open] summary:after{content:'−'}.article-faq details p{margin:13px 0 0;color:#625e57}
        .article-author-note{padding:22px 24px;background:#fff;border:1px solid #e0ddd6}.article-author-note strong{display:block;color:#24221e;margin-bottom:6px}.article-author-note p{margin:0;font-size:14px}.article-author-note a{color:#bd542f;text-decoration:underline;text-underline-offset:3px}
        .article-related{padding:76px 0 86px;background:#f0eee8}.article-section-heading{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:30px}.article-section-heading h2{font-size:clamp(30px,4vw,45px);line-height:1.1;letter-spacing:-.04em;margin:0}.article-text-link{font-size:13px;font-weight:800;text-decoration:none;color:#bd542f}.article-text-link:hover{text-decoration:underline}
        .article-related-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}.article-related-card{background:#fff;border:1px solid #e0ddd6;min-width:0}.article-related-image{display:block;overflow:hidden}.article-related-image img{display:block;width:100%;height:220px;object-fit:cover;transition:transform .3s ease}.article-related-image:hover img{transform:scale(1.03)}.article-related-content{padding:22px}.article-related-content .article-eyebrow{font-size:9px;margin-bottom:10px}.article-related-content h3{font-size:21px;line-height:1.2;margin:0 0 10px;letter-spacing:-.02em}.article-related-content h3 a{color:inherit;text-decoration:none}.article-related-content h3 a:hover{color:#bd542f}.article-related-content>p:not(.article-eyebrow){color:#68645d;font-size:13px;line-height:1.7;margin:0 0 17px}
        .article-cta{padding:65px 0;background:#23231f;color:#fff}.article-cta-inner{display:flex;justify-content:space-between;align-items:center;gap:35px}.article-cta .article-eyebrow{color:#f18b60}.article-cta h2{font-size:clamp(32px,4vw,48px);line-height:1.05;letter-spacing:-.04em;max-width:600px;margin:0 0 14px}.article-cta-inner>div:first-child>p:last-child{max-width:650px;color:#d1cdc5;margin:0;line-height:1.8}.article-cta-actions{display:flex;flex-wrap:wrap;gap:12px;flex-shrink:0}.article-button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 17px;font-size:12px;font-weight:800;text-decoration:none;transition:background .2s ease,color .2s ease}.article-button-light{background:#e7663b;color:#fff}.article-button-light:hover{background:#d6522a}.article-button-outline{border:1px solid #8f8b82;color:#fff}.article-button-outline:hover{background:#fff;color:#24221e}
        .article-site-footer{background:#181815;color:#fff;padding-top:55px}.article-footer-grid{display:grid;grid-template-columns:1.4fr repeat(3,minmax(0,1fr));gap:40px;padding-bottom:45px}.article-footer-grid>div{display:flex;flex-direction:column;align-items:flex-start;gap:11px}.article-footer-grid h3{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:#e98258;margin:0 0 7px}.article-footer-grid a:not(.article-brand){color:#d1cec7;font-size:13px;text-decoration:none}.article-footer-grid a:not(.article-brand):hover{color:#fff}.article-brand{display:flex;flex-direction:column;gap:12px;text-decoration:none;color:#fff;font-size:13px;font-weight:800;letter-spacing:.07em}.article-brand img{width:185px;max-height:60px;object-fit:contain;object-position:left center}.article-brand em{font-style:normal;color:#e98258;margin-left:5px}.article-footer-brand p{max-width:290px;font-size:13px;line-height:1.8;color:#aaa69d;margin:6px 0 0}.article-footer-bottom{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:1px solid #393832;padding-top:18px;padding-bottom:20px;color:#a9a59d;font-size:11px}.article-footer-bottom a{color:inherit;text-decoration:none}.article-footer-bottom a:hover{color:#fff}
        @media(max-width:900px){.article-hero{grid-template-columns:1fr;gap:28px;padding-top:22px}.article-hero h1{max-width:850px}.article-hero-image img{height:clamp(290px,58vw,480px)}.article-main-grid{grid-template-columns:1fr;padding-top:0}.article-toc{position:static;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 18px}.article-toc p{grid-column:1/-1}.article-related-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.article-cta-inner{align-items:flex-start;flex-direction:column}.article-footer-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:32px 22px}.article-footer-brand{grid-column:1/-1}}
        @media(max-width:560px){.article-shell{width:calc(100% - 34px)}.article-hero{padding-top:20px;padding-bottom:40px}.article-hero h1{font-size:43px}.article-deck{font-size:16px}.article-main-grid{padding-bottom:58px}.article-body{font-size:15px}.article-body .article-lead{font-size:18px}.article-toc{padding:16px;grid-template-columns:1fr 1fr}.article-related{padding:54px 0}.article-section-heading{align-items:flex-start;flex-direction:column;gap:15px}.article-related-grid{grid-template-columns:1fr}.article-related-image img{height:235px}.article-cta{padding:50px 0}.article-cta-actions{width:100%;flex-direction:column}.article-button{width:100%}.article-footer-grid{grid-template-columns:1fr 1fr;gap:28px 16px}.article-brand img{width:155px}.article-footer-grid>div{min-width:0}.article-footer-grid a:not(.article-brand){font-size:12px}.article-footer-bottom{flex-direction:column;gap:7px}}
        @media(prefers-reduced-motion:reduce){.womens-mtb-article *,.womens-mtb-article *:before,.womens-mtb-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
