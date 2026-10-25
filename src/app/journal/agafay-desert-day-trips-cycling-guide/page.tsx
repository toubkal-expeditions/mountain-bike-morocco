import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Agafay Desert Day Trips: Cycling Guide | Mountain Bike Morocco",
  description:
    "Plan a cycling day trip in Morocco’s Agafay Desert near Marrakech. Compare MTB, E-MTB and gravel options, route difficulty, timing, water, heat, equipment and responsible riding tips.",
  alternates: { canonical: "/journal/agafay-desert-day-trips-cycling-guide" },
  openGraph: {
    title: "Agafay Desert Day Trips: Cycling Guide",
    description:
      "A practical guide to cycling around the Agafay Desert near Marrakech, with advice on routes, cycling styles, timing, water, equipment and trip preparation.",
    type: "article",
    images: ["/images/Agafay-desert-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "DESERT E-MTB",
    title: "Sahara Desert E-Bike Adventure",
    text: "Review battery, charging, water and support considerations for a longer E-MTB journey in southern Morocco.",
    image: "/images/sahara-desert-ebike-expeditions.jpg",
    href: "/journal/sahara-desert-ebike-adventure",
  },
  {
    category: "SEASONAL CYCLING",
    title: "Best Time to Visit Morocco for Cycling",
    text: "Compare regions and seasonal conditions before choosing your preferred cycling dates.",
    image: "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    href: "/journal/best-time-visit-morocco-cycling",
  },
  {
    category: "ROUTE INSPIRATION",
    title: "Marrakech to Atlas Mountains by Bike",
    text: "Plan the transition from city streets to rural tracks and foothill routes near the High Atlas.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/journal/marrakech-to-atlas-mountains-by-bike",
  },
];

const faqs = [
  {
    question: "Is Agafay a sandy desert with dunes?",
    answer:
      "Agafay is generally known for a rocky, arid landscape rather than the large soft dunes associated with some Sahara areas. Riding surfaces can include stone, gravel, compacted tracks and loose sections. Ask for a route description so you know what terrain to expect on the day.",
  },
  {
    question: "Is an Agafay cycling day trip suitable for beginners?",
    answer:
      "Some routes may suit beginners with basic bike control, while rough or rocky sections can be challenging. Suitability depends on the exact route, distance, elevation, weather and the rider’s confidence. Share your experience before booking and ask whether the route can be adapted for the least experienced member of the group.",
  },
  {
    question: "Which bike is best for Agafay?",
    answer:
      "A mountain bike or suitable gravel bike may work well on selected tracks, depending on surface and route design. An E-MTB can assist on climbs and longer rides, but it still needs appropriate tyres, range and support. The best choice depends on the route, rider ability and the bike available for your date.",
  },
  {
    question: "When should I ride to avoid the strongest heat?",
    answer:
      "An early start is often sensible in warmer periods, but the suitable time depends on the season, forecast and trip length. Confirm the start time with the organiser, carry enough water and avoid assuming that a short distance means low exposure. Conditions can change quickly in open terrain.",
  },
  {
    question: "How much water should I bring?",
    answer:
      "Water needs depend on temperature, effort, duration and access to reliable resupply. Ask the trip organiser for route-specific advice and the planned refill points. Carry the recommended capacity from the start, and do not rely on finding shops or safe water along remote tracks unless this has been confirmed.",
  },
  {
    question: "Can I combine Agafay with Marrakech or the Atlas Mountains?",
    answer:
      "Yes, Agafay can be planned as a day ride within a broader Morocco trip. Allow time for transfers and confirm where the ride starts, how long the cycling lasts and whether the same-day plan leaves enough time for the other activities. Combining regions over several days may require separate logistics and a realistic schedule.",
  },
];

export default function AgafayDesertDayTripsCyclingGuidePage() {
  return (
    <main className="agafay-cycling-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Agafay Desert Day Trips: Cycling Guide</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">DESERT DAY RIDES · MARRAKECH REGION</p>
          <h1>Agafay Desert Day Trips: Cycling Guide</h1>
          <p className="article-deck">
            Just beyond Marrakech, Agafay offers open, arid scenery and rocky terrain for a different kind of cycling day. The best ride is built around the actual surface, the conditions, your bike and the time available—not just the landscape in a photograph. Use this guide to compare cycling styles, plan a sensible route and prepare for sun, wind and limited services on open tracks.
          </p>
          <div className="article-meta"><span>7 MIN READ</span><span>AGAFAY · DAY-TRIP PLANNING</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/Agafay-desert-morocco.jpg" alt="The rocky, arid landscape of Morocco’s Agafay Desert near Marrakech" fetchPriority="high" />
          <figcaption>Choose the route for the surface and conditions, then leave time to enjoy the wide landscape.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#understand-agafay">Understand the landscape</a>
          <a href="#choose-cycling-style">Choose your cycling style</a>
          <a href="#route-distance">Route length and difficulty</a>
          <a href="#timing-season">Timing and season</a>
          <a href="#water-heat">Water, sun and exposure</a>
          <a href="#bike-support">Bike, equipment and support</a>
          <a href="#responsible-riding">Ride responsibly</a>
          <a href="#day-plan">Plan your day</a>
          <a href="#agafay-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            An Agafay ride can be a memorable addition to a Marrakech holiday, but it should not be treated as an unplanned spin across an empty desert. Routes vary in surface, exposure and access to services. Before setting off, understand the day’s distance and terrain, confirm the bike and support arrangements, and carry the water and protection recommended for the expected conditions.
          </p>

          <section id="understand-agafay">
            <h2>Understand the Agafay landscape before you ride</h2>
            <p>
              Agafay is often described as a desert, but its character is different from the tall, soft sand dunes many travellers picture. The area is known for rocky hills, dry valleys, stony plateaus and pale, open ground. Tracks may alternate between hard-packed earth, gravel, loose stones and rougher sections, so grip and comfort can change throughout a ride.
            </p>
            <p>
              A route that looks short on a map can take longer when the surface is uneven, the track climbs or the group stops to manage technical sections. Dust, wind and strong sun can also affect how a ride feels. Ask for a clear description of the terrain and not just a mileage figure, especially if you are new to off-road cycling.
            </p>
            <p>
              The open setting is part of the appeal, but it also means shade and services may be limited away from established stops. Keep the route within the group’s ability and make sure the organiser has considered access, resupply and what to do if a rider needs to stop early.
            </p>
            <div className="article-tip">
              <strong>Ask before you book</strong>
              <p>Request the approximate ride time, distance, elevation gain, surface types, technical difficulty and where the group can refill water or access support.</p>
            </div>
          </section>

          <section id="choose-cycling-style">
            <h2>Choose a cycling style that suits the route</h2>
            <h3>Mountain biking</h3>
            <p>
              A mountain bike is a natural option for rougher tracks and rocky sections where wider tyres and control are useful. The exact bike setup should match the route: tyre choice, brakes, gearing and suspension can all affect comfort and confidence. Not every Agafay track calls for a highly technical bike, so choose based on the terrain rather than the name of the destination alone.
            </p>
            <h3>Electric mountain biking</h3>
            <p>
              An E-MTB may make climbs and longer loops more manageable for some riders, particularly when the group wants to cover varied ground without focusing entirely on physical effort. Battery use depends on elevation, assistance mode, surface, temperature, rider weight and bike condition. Confirm the expected range and charging plan if your itinerary is longer than a short outing.
            </p>
            <h3>Gravel cycling</h3>
            <p>
              A gravel bike can suit selected firm tracks and linking roads, provided the route avoids terrain that is too rough or loose for its tyres and geometry. Ask about the narrowest or rockiest sections and whether the plan can be adjusted. If you are riding a road-oriented gravel setup, comfort and safe control matter more than trying to ride every track.
            </p>
            <h3>Road cycling</h3>
            <p>
              Road cycling in the wider Marrakech region is a different experience from riding the rocky Agafay tracks themselves. A road-focused itinerary should use suitable paved roads and consider traffic, visibility and junctions. Do not assume a road bike is appropriate simply because a route appears to cross the Agafay area; confirm the actual surface for every stage.
            </p>
          </section>

          <section id="route-distance">
            <h2>Match distance and difficulty to your group</h2>
            <p>
              For a day trip, it is tempting to select the longest available route. A better approach is to consider total time outdoors, temperature, how technical the surface is and how much riding experience each person has. A shorter rocky route can require more attention than a longer ride on smooth gravel or paved roads.
            </p>
            <p>
              Before choosing a route, be honest about braking control, cornering on loose ground, climbing fitness and comfort riding away from town. If several people are travelling together, the plan should work for the least experienced rider, not only the strongest person. Ask whether the guide can adapt the pace or shorten the route if required.
            </p>
            <p>
              Also confirm what “ride duration” means. It may refer to time in the saddle rather than the full door-to-door outing, which can include transfers, bike fitting, instructions, stops and a return journey. Having the schedule in writing makes it easier to plan the rest of the day.
            </p>
          </section>

          <section id="timing-season">
            <h2>Choose the right time of day and season</h2>
            <p>
              Conditions in Agafay vary through the year. Warm periods can bring strong sun and hot surfaces, while mornings, evenings and cooler months may feel much fresher. Wind and dust can change comfort and visibility too. Rather than relying on a single “best month,” match your dates and departure time to the forecast and the planned effort.
            </p>
            <p>
              An early start is often helpful during warmer weather because it provides more time to ride before temperatures rise. For a late-day trip, check the planned finish time and leave enough daylight for the return and any transfer. Ask the organiser what happens if weather makes the route uncomfortable or unsuitable.
            </p>
            <p>
              If you are combining Agafay with the Atlas Mountains, remember that conditions can differ between low, exposed terrain and higher elevations. Pack for the whole itinerary rather than assuming all areas will have the same temperature.
            </p>
          </section>

          <section id="water-heat">
            <h2>Plan water, sun protection and exposure</h2>
            <p>
              Open terrain can mean long periods with little shade. Carry the water capacity recommended for the actual route, and confirm whether refills are available and reliable. The amount you need varies with temperature, duration, pace, climbing and individual needs; do not assume a single bottle will be sufficient for every ride.
            </p>
            <p>
              Use sun protection suited to the conditions: sunscreen, eyewear, a helmet with suitable ventilation and clothing that you are comfortable riding in. A light layer can be useful when wind picks up. Keep food and personal essentials accessible, and tell the guide about any relevant needs before departure.
            </p>
            <p>
              Agree on a simple group plan before starting. Riders should know the expected pace, where stops will happen, how to communicate if separated and how to respond if someone feels unwell or needs to stop. On a remote or exposed route, those details are part of good preparation, not optional extras.
            </p>
            <div className="article-tip">
              <strong>Carry what the route requires</strong>
              <p>Ask the organiser for a route-specific water and food recommendation, plus confirmation of planned refill points and support access. Do not rely on shops or water sources unless they are verified for your itinerary.</p>
            </div>
          </section>

          <section id="bike-support">
            <h2>Check the bike, equipment and support arrangements</h2>
            <p>
              If you are hiring a bike, confirm the model or type, frame size, saddle setup, pedals, helmet availability and condition before riding. A brief fit check can prevent discomfort and make handling easier. If you bring your own bike, ask how it will be transported and whether there is suitable space for a bike case or luggage.
            </p>
            <p>
              For off-road routes, check tyres, brakes, shifting and tyre pressure before departure. Carry the personal spares appropriate to your bike and clarify which tools or repair supplies the guide carries. On E-MTB rides, confirm battery status, assistance controls and how the range estimate is managed for the chosen route.
            </p>
            <p>
              Find out whether support is provided by the guide alone or includes a vehicle, and whether that vehicle can reach the planned tracks. Ask how mechanical issues, a rider becoming too tired, route changes or a weather interruption are handled. The answer may differ for a short day ride and a longer remote route.
            </p>
          </section>

          <section id="responsible-riding">
            <h2>Ride responsibly in a lived-in landscape</h2>
            <p>
              Agafay is not an empty playground; people live, work and travel through the surrounding landscape. Ride at a controlled speed near homes, people, livestock and other trail users. Slow down early, give others room and follow your guide’s advice about shared tracks, local access and where riding is appropriate.
            </p>
            <p>
              Keep to agreed routes and avoid creating shortcuts across fragile ground. Take rubbish with you, including wrappers and used repair items, and do not leave food waste behind. Ask before photographing people or entering private land, and treat local businesses and communities respectfully when stopping for refreshments or services.
            </p>
            <p>
              Responsible riding also means being willing to change the plan. If a track is damaged, crowded or unsuitable for the group, choose the safer option rather than forcing a section. A good day is measured by the quality of the ride and the way the group treats the place, not only by kilometres completed.
            </p>
          </section>

          <section id="day-plan">
            <h2>Build a practical Agafay cycling day</h2>
            <p>
              A well-planned outing normally includes time for transfer, bike setup and a short briefing before riding. Leave space for water and snack stops, route adjustments and the return transfer. If you want to visit Marrakech’s sights or make another appointment after the ride, confirm the full expected schedule rather than planning from saddle time alone.
            </p>
            <h3>Before confirming your trip</h3>
            <ul className="article-checklist">
              <li><strong>Route details:</strong> Confirm surface, distance, elevation, estimated riding time and technical difficulty.</li>
              <li><strong>Bike and fit:</strong> Agree the bike type, size, pedals, helmet and any personal equipment you must bring.</li>
              <li><strong>Water and food:</strong> Confirm carrying capacity, reliable refill points and whether snacks or meals are included.</li>
              <li><strong>Transport:</strong> Ask where pickup and drop-off take place, whether transfers are included and how bikes are carried.</li>
              <li><strong>Support and changes:</strong> Understand the guide’s plan for mechanical problems, fatigue or unsuitable conditions.</li>
              <li><strong>Inclusions and price:</strong> Get a clear breakdown of guiding, equipment, transfers, refreshments and any extra costs.</li>
            </ul>
            <p>
              Once those details are clear, you can decide whether a short MTB session, an E-MTB loop, a gravel route or a longer multi-region ride fits your holiday. If you are unsure, share your available time, riding experience and preferred bike style and ask for a route recommendation.
            </p>
          </section>

          <section id="agafay-faq" className="article-faq">
            <h2>Agafay cycling: frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>A note on route conditions</strong>
            <p>This guide is intended for planning and general preparation. It is not a live report of trail access, weather, road conditions or services. Confirm the exact route and current conditions with your trip organiser before you travel.</p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading">
            <div><p className="article-eyebrow article-eyebrow-dark">KEEP EXPLORING</p><h2>More cycling guides</h2></div>
            <Link className="article-text-link" href="/journal">View all journal articles ↗</Link>
          </div>
          <div className="article-related-grid">
            {relatedArticles.map((article) => (
              <article className="article-related-card" key={article.href}>
                <Link className="article-related-image" href={article.href}>
                  <img src={article.image} alt={article.title} loading="lazy" />
                </Link>
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
            <p className="article-eyebrow">YOUR RIDE, PLANNED WELL</p>
            <h2>Make Agafay part of your Morocco cycling holiday.</h2>
            <p>Tell us your dates, riding experience, preferred bike and available time. We can discuss suitable route options and the details to confirm before you set off.</p>
          </div>
          <div className="article-cta-actions">
            <Link className="article-button article-button-light" href="/contact?request=agafay-cycling-day-trip">Plan an Agafay ride ↗</Link>
            <Link className="article-button article-button-outline" href="/destinations/agafay-desert">Explore Agafay</Link>
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
        .agafay-cycling-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
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
        @media(prefers-reduced-motion:reduce){.agafay-cycling-article *,.agafay-cycling-article *:before,.agafay-cycling-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
