import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planning a Cycling Tour from Marrakech | Mountain Bike Morocco",
  description:
    "Plan a cycling tour from Marrakech with practical guidance on choosing a region and bike, transfers, daily distance, route conditions, equipment and support.",
  alternates: { canonical: "/journal/cycling-tour-from-marrakech" },
  openGraph: {
    title: "Planning a Cycling Tour from Marrakech",
    description:
      "A practical guide to planning a Morocco cycling trip from Marrakech, from nearby countryside rides to Atlas Mountain and multi-day routes.",
    type: "article",
    images: ["/images/cycling-tour-from-marrakech.jpg"],
  },
};

const relatedArticles = [
  {
    category: "ROUTE INSPIRATION",
    title: "Best Cycling Routes From Marrakech",
    text: "Compare countryside rides, Atlas foothills and routes that begin with a stay in Marrakech.",
    image: "/images/atlas-marrakech-cycling-tour.jpg",
    href: "/journal/best-cycling-routes-from-marrakech",
  },
  {
    category: "DESTINATION GUIDES",
    title: "Marrakech to Atlas Mountains by Bike",
    text: "Plan a journey from the city towards mountain landscapes, with realistic transfers and riding stages.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/journal/marrakech-to-atlas-mountains-by-bike",
  },
  {
    category: "TRIP PLANNING",
    title: "Multi-Day Cycling Tours Planning",
    text: "Build a sensible itinerary around distance, climbing, recovery, accommodation and support.",
    image: "/images/group-adventure-cycling-morocco.jpg",
    href: "/journal/planning-multi-day-cycling-tours",
  },
];

const faqs = [
  {
    question: "Can I start a cycling tour directly from Marrakech?",
    answer:
      "Yes, many itineraries can use Marrakech as the starting point, but the exact ride may begin in the surrounding countryside or a mountain area reached by transfer. Ask where the cycling starts, how long the transfer takes and how much riding time is planned before the return journey.",
  },
  {
    question: "Which cycling style is best for a Marrakech-based trip?",
    answer:
      "It depends on your preferred terrain and the route. Road bikes suit paved routes, gravel bikes suit suitable mixed-surface itineraries, and MTB or E-MTB options are often better for rougher tracks and technical trails. Confirm the actual surface and difficulty before choosing equipment.",
  },
  {
    question: "Can I book a one-day ride or a multi-day tour?",
    answer:
      "Both formats may be possible depending on the route and arrangements. A day ride should account for transfers, bike setup, breaks and the return trip. A multi-day itinerary also needs realistic stages, accommodation, luggage logistics, recovery and support plans.",
  },
  {
    question: "How do I choose a route for my ability?",
    answer:
      "Share your recent riding experience, fitness, preferred daily distance, climbing comfort and technical confidence. Ask for the surface mix, elevation gain, expected riding time and any sections that may be steep, loose or exposed. This is more useful than choosing a route by distance alone.",
  },
  {
    question: "Is a support vehicle included?",
    answer:
      "Support varies by itinerary and should be confirmed in writing. Ask whether transfers, luggage transport, water and food resupply, mechanical assistance and any emergency arrangements are included, and what you are expected to carry yourself.",
  },
  {
    question: "What should I tell you when enquiring about a Marrakech cycling trip?",
    answer:
      "Include your travel dates, group size, preferred cycling style, riding experience, desired trip length and any bike or accommodation preferences. If you have a specific region in mind, mention it; if not, share what you want from the ride and ask which options may suit.",
  },
];

export default function CyclingTourFromMarrakechPage() {
  return (
    <main className="cycling-tour-from-marrakech-article" id="top">
      <div className="article-shell article-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Planning a Cycling Tour from Marrakech</span>
      </div>

      <header className="article-shell article-hero">
        <div className="article-hero-copy">
          <p className="article-eyebrow">ROUTE INSPIRATION · CITY STARTS · MOROCCO</p>
          <h1>Planning a Cycling Tour from Marrakech</h1>
          <p className="article-deck">
            Marrakech can be a convenient starting point for a day ride, a mountain escape or a longer cycling journey across Morocco. The right plan considers not only the route itself, but also transfers, bike setup, riding time, breaks, the group's ability and what support is available along the way.
          </p>
          <div className="article-meta"><span>5 MIN READ</span><span>ROUTE CHOICE · LOGISTICS · PREPARATION</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/cycling-tour-from-marrakech.jpg" alt="Cycling route and countryside near Marrakech" fetchPriority="high" />
          <figcaption>Start with the riding experience you want, then plan transfers and timing around it.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#choose-your-trip">Choose the type of trip</a>
          <a href="#regions">Where to ride from Marrakech</a>
          <a href="#cycling-style">Choose your cycling style</a>
          <a href="#timing-transfers">Timing and transfers</a>
          <a href="#daily-distance">Distance and daily effort</a>
          <a href="#equipment-support">Equipment and support</a>
          <a href="#season-preparation">Season and preparation</a>
          <a href="#booking-questions">Questions to ask</a>
          <a href="#trip-checklist">Pre-trip checklist</a>
          <a href="#faq">FAQs</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            A successful cycling trip from Marrakech is planned around the full experience, not only the kilometres on the bike. The start point, road conditions, surface, climb, transfer time and group pace all affect how the day feels. A little planning makes it easier to choose a route that fits your time and riding preferences.
          </p>

          <section id="choose-your-trip">
            <h2>First, choose the kind of cycling trip you want</h2>
            <p>
              Some visitors want a guided day ride that fits around a wider stay in Marrakech. Others prefer to spend several days cycling through foothills and valleys, or use the city as the beginning of a longer journey into the High Atlas or towards southern Morocco. These formats have different logistical needs, so it helps to decide how much of your holiday should be spent riding before comparing tours.
            </p>
            <p>
              For a day outing, consider the total time from leaving your accommodation to returning, including transfers, bike fitting, stops and lunch. For a multi-day journey, think about daily stage length, accommodation changes, luggage, rest time and how the itinerary connects one region to another.
            </p>
            <div className="article-tip"><strong>Start with four details</strong><p>Share your dates, group size, cycling style and recent riding experience. These details help narrow the route choices before you decide on a full itinerary.</p></div>
          </section>

          <section id="regions">
            <h2>Where to ride from Marrakech</h2>
            <h3>Marrakech countryside and foothills</h3>
            <p>
              Routes in the countryside around Marrakech can suit riders looking for an accessible introduction to cycling in Morocco. The exact surface and traffic exposure vary by route. Ask where the ride begins, how the route avoids busy roads where possible, and whether the itinerary is better suited to a road bike, gravel bike or mountain bike.
            </p>
            <h3>Agafay and open rocky terrain</h3>
            <p>
              The Agafay area offers open, rocky landscapes that feel different from high mountain valleys. Route planning should account for surface, exposure to sun and wind, water capacity and the availability of support. A dry-looking landscape does not mean every track is smooth or suitable for every bicycle.
            </p>
            <h3>The Atlas foothills and High Atlas</h3>
            <p>
              For a more mountain-focused experience, a transfer from Marrakech may connect you with higher valleys, rural tracks and routes with sustained climbing. Altitude, weather and terrain can change how demanding a stage feels. Confirm expected elevation, technical sections and the return or overnight arrangements before booking.
            </p>
            <h3>Longer journeys beyond the city</h3>
            <p>
              Multi-day itineraries may link several riding areas or continue into southern landscapes. These routes need a stage-by-stage plan for accommodation, food, luggage transfers, vehicle support where included and what happens if conditions require a change. Avoid assuming that every region can be connected comfortably in one day; transfer distances and ride time both matter.
            </p>
            <figure className="article-inline-image">
              <img src="/images/atlas-marrakech-cycling-tour.jpg" alt="Cycling through the landscapes outside Marrakech towards the Atlas region" loading="lazy" />
              <figcaption>The best route depends on how much time you have and what kind of terrain you want to ride.</figcaption>
            </figure>
          </section>

          <section id="cycling-style">
            <h2>Choose a cycling style that matches the route</h2>
            <h3>Mountain biking (MTB)</h3>
            <p>
              MTB is often the right choice when the itinerary includes rough tracks, rocky surfaces or technical trails. Ask about trail width, loose sections, steepness, exposure and any places where riders may need to walk. Your experience on similar terrain is just as important as general fitness.
            </p>
            <h3>Electric mountain biking (E-MTB)</h3>
            <p>
              An E-MTB can support longer climbs and help riders manage a varied day, but battery range and charging need to be included in route design. Check the bike type, sizing, battery plan, charging access and the level of technical riding expected.
            </p>
            <h3>Gravel cycling</h3>
            <p>
              Gravel can be a good fit for itineraries that combine paved backroads with suitable unsealed tracks. Ask for a clear surface description, tyre recommendations, daily elevation and the roughest sections. Some rocky or steep tracks are better suited to MTB than to a gravel bike.
            </p>
            <h3>Road cycling</h3>
            <p>
              Road cyclists may prefer paved loops, mountain climbs or point-to-point routes. Discuss road quality, traffic, climbing, descent conditions and the support plan. A scenic route should still have realistic timing and safe places for stops.
            </p>
          </section>

          <section id="timing-transfers">
            <h2>Plan timing, meeting points and transfers</h2>
            <p>
              A cycling day often starts before the first pedal stroke. Confirm the pickup location, departure time, transfer duration, bike setup arrangements and expected return. If the ride begins well outside the city, make sure the schedule allows enough time for the route and planned breaks without rushing the return journey.
            </p>
            <p>
              For multi-day trips, ask where each stage starts and ends and how riders and luggage move between locations. Clarify whether any road sections are covered by transfer, whether the vehicle follows the group or meets it at specific points, and how those arrangements work if a rider needs to stop early.
            </p>
          </section>

          <section id="daily-distance">
            <h2>Choose realistic distance and daily effort</h2>
            <p>
              Distance alone is not a reliable measure of difficulty. A short technical route can take longer than a paved ride of greater length, while sustained climbing, heat, wind, altitude and luggage can increase the effort of a stage. Ask for the elevation gain, surface mix, approximate riding time and planned stops as well as kilometres.
            </p>
            <p>
              If your group includes different fitness levels, share that in advance and ask whether the route can be adjusted. It is often better to have a comfortable pace with time for scenery and breaks than to plan an ambitious distance that leaves no room to enjoy the day.
            </p>
            <p>
              For a multi-day holiday, consider accumulated fatigue. A sequence of demanding stages needs recovery, food, hydration and enough time to settle into accommodation. Build flexibility into the itinerary where possible so the plan can respond to weather or a change in group energy.
            </p>
          </section>

          <section id="equipment-support">
            <h2>Equipment, bike hire and support</h2>
            <p>
              Before you travel, confirm whether bikes are provided or whether you should bring your own. Ask about available models, frame sizes, pedals, helmets, adjustment time and what personal kit is expected. If you bring your own bicycle, clarify bike-case storage, transfer space and whether assembly support is available.
            </p>
            <p>
              Support varies between trips, so check exactly what is included. This may involve a guide, luggage transfers, mechanical help, food and water resupply or a support vehicle, but none should be assumed without confirmation. Ask what tools and spares are carried, who to contact if a problem occurs and how the plan handles route changes.
            </p>
            <div className="article-tip"><strong>Make the inclusions clear</strong><p>Request a written outline of guiding, transfers, bike arrangements, accommodation, meals, luggage handling and any extra costs before confirming your booking.</p></div>
          </section>

          <section id="season-preparation">
            <h2>Season, clothing and preparation</h2>
            <p>
              Conditions differ between Marrakech, open foothills and higher mountain areas. Temperatures, wind, rainfall and daylight can affect comfort and route choice, particularly when an itinerary moves between elevations. Ask about the likely conditions for your exact route and dates rather than relying on one general seasonal rule.
            </p>
            <p>
              Bring a correctly fitted helmet, gloves, eyewear, suitable shoes, hydration capacity, sun protection and a light layer for changing conditions. Higher routes may feel cooler than the city, and longer trips may need clothing for both riding and evenings. Follow the organiser's route-specific advice on water, food, repair kit and personal medication.
            </p>
          </section>

          <section id="booking-questions">
            <h2>Questions to ask before you book</h2>
            <ul className="article-checklist">
              <li><strong>Route:</strong> Where does the ride start, what surfaces are included, and what is the climbing and technical level?</li>
              <li><strong>Schedule:</strong> How long are the transfers, riding time, stops and expected return?</li>
              <li><strong>Equipment:</strong> Is a suitable bike available, and what should you bring yourself?</li>
              <li><strong>Support:</strong> What happens with punctures, mechanical issues, fatigue or changing conditions?</li>
              <li><strong>Inclusions:</strong> Which meals, transfers, accommodation, luggage services and guiding are covered?</li>
              <li><strong>Flexibility:</strong> Can the route or daily effort be adapted to the group if needed?</li>
            </ul>
          </section>

          <section id="trip-checklist">
            <h2>Pre-trip checklist</h2>
            <ul className="article-checklist">
              <li>Share your dates, group size, cycling style and recent riding experience.</li>
              <li>Confirm the start point, transfers, planned riding time and return arrangements.</li>
              <li>Review the route surface, elevation, difficulty and seasonal considerations.</li>
              <li>Confirm bike hire or own-bike logistics, equipment and mechanical support.</li>
              <li>Check what food, water, accommodation, luggage handling and transfers are included.</li>
              <li>Ask for the final itinerary and contact details before travelling.</li>
            </ul>
          </section>

          <section id="faq" className="article-faq">
            <h2>FAQs: Cycling tours from Marrakech</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <aside className="article-author-note">
            <strong>Plan with the details that matter</strong>
            <p>Use this guide as a starting point. Route access, weather, equipment availability and trip inclusions must be confirmed for the actual departure and itinerary.</p>
          </aside>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading">
            <div><p className="article-eyebrow article-eyebrow-dark">KEEP EXPLORING</p><h2>More cycling guides for Morocco</h2></div>
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
          <div><p className="article-eyebrow">YOUR MOROCCO RIDE STARTS HERE</p><h2>Turn your Marrakech stay into a cycling adventure.</h2><p>Tell us when you are travelling, how you like to ride and what kind of landscape you want to explore. Start with a few details and discuss suitable options for your group.</p></div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/contact?request=marrakech-cycling-tour">Plan your ride ↗</Link><Link className="article-button article-button-outline" href="/cycling-trips/from-marrakech">Explore tours</Link></div>
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
        <div className="article-shell article-footer-bottom"><span>© {new Date().getFullYear()} Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span><Link href="#top">Back to top ↑</Link></div>
      </footer>
    </main>
  );
}

      <style>{`
        .cycling-tour-from-marrakech-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
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
        @media(prefers-reduced-motion:reduce){.cycling-tour-from-marrakech-article *,.cycling-tour-from-marrakech-article *:before,.cycling-tour-from-marrakech-article *:after{scroll-behavior:auto!important;transition:none!important}}
`}</style>
