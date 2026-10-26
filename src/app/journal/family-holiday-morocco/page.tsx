import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Family Cycling Holidays in Morocco | Mountain Bike Morocco",
  description:
    "Plan a family cycling holiday in Morocco with practical guidance on age-appropriate routes, shorter stages, bike choice, safety, rest stops and family-friendly trip logistics.",
  alternates: { canonical: "/journal/family-cycling-holidays-morocco" },
  openGraph: {
    title: "Family Cycling Holidays in Morocco",
    description:
      "A practical guide to planning a family cycling holiday in Morocco, from route choice and bike setup to support, rest breaks and responsible travel.",
    type: "article",
    images: ["/images/cycling-holiday-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "TRIP PLANNING",
    title: "Multi-Day Cycling Tours Planning",
    text: "Build realistic daily stages with time for recovery, meals, accommodation, luggage and support.",
    image: "/images/group-cycling-tour-morocco.jpg",
    href: "/journal/planning-multi-day-cycling-tours",
  },
  {
    category: "ROUTE INSPIRATION",
    title: "Best Cycling Routes From Marrakech",
    text: "Compare nearby countryside, rocky terrain and possible routes towards the Atlas foothills.",
    image: "/images/marrakech-city-bike-tou.jpeg",
    href: "/journal/best-cycling-routes-from-marrakech",
  },
  {
    category: "SEASONAL CYCLING",
    title: "Best Time to Visit Morocco for Cycling",
    text: "Choose dates by region, elevation, preferred riding style and the conditions expected on your route.",
    image: "/images/mountain-bike-morocco-hero.jpg",
    href: "/journal/best-time-visit-morocco-cycling",
  },
];

const faqs = [
  {
    question: "Is Morocco suitable for a family cycling holiday?",
    answer:
      "It can be, provided the route, distance, traffic exposure and terrain are chosen for the ages and confidence of everyone travelling. Some areas offer quiet rural roads or manageable tracks, while steep, rocky mountain routes may be unsuitable for younger or less-experienced riders. Discuss the actual route rather than assuming every cycling tour is family-friendly.",
  },
  {
    question: "What age should children be to join a cycling tour?",
    answer:
      "There is no single age that fits every route. The important factors are cycling ability, stamina, road awareness, confidence around other trail users and the ability to follow instructions. Share each child's age and experience with the organiser so the route, daily riding time and support can be considered appropriately.",
  },
  {
    question: "How far should a family ride each day?",
    answer:
      "Choose daily distance based on the youngest or least-experienced rider, the surface, climbing, weather and how much time the family wants for breaks and activities. A shorter stage with interesting stops is often more enjoyable than a demanding ride that leaves everyone exhausted. Confirm both distance and ascent before booking.",
  },
  {
    question: "Which bike type is best for families?",
    answer:
      "It depends on the route. Road bikes suit paved routes; gravel bikes work for suitable mixed surfaces; and mountain bikes may be better for rough, uneven tracks. E-bikes can help some adults manage climbs but require a clear battery and charging plan. Check children's frame sizes, fit, brakes, helmet availability and the condition of every bike in advance.",
  },
  {
    question: "Can we arrange a private family itinerary?",
    answer:
      "You can enquire about a private plan built around your dates, ages, riding experience and preferred regions. Ask how the itinerary can accommodate different abilities, flexible distances, rest days and non-riding activities. Availability, equipment, accommodation and support arrangements should be confirmed for your specific request.",
  },
  {
    question: "What should we pack for a family cycling holiday?",
    answer:
      "Start with well-fitting helmets, gloves, suitable shoes, water bottles or hydration packs, sun protection, comfortable cycling clothing and light layers for changing conditions. Bring any personal medication and favourite snacks that help keep the day comfortable. Confirm which tools, spare parts, bike equipment, luggage transfers and support services are provided.",
  },
];

export default function FamilyCyclingHolidaysMoroccoPage() {
  return (
    <main className="family-cycling-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/journal">Journal</Link>
        <span>/</span>
        <span>Family Cycling Holidays in Morocco</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">
            FAMILY ADVENTURES · CYCLING HOLIDAYS · MOROCCO
          </p>
          <h1>Family Cycling Holidays in Morocco</h1>
          <p className="article-deck">
            A family cycling holiday works best when everyone has room to enjoy
            the journey. Morocco offers a range of landscapes—from the
            countryside around Marrakech to mountain valleys and quieter rural
            roads—but the right itinerary depends on age, confidence, route
            surface and how much riding feels fun for the whole group. Plan
            shorter stages, useful stops and flexible support before you travel.
          </p>
          <div className="article-meta">
            <span>6 MIN READ</span>
            <span>FAMILY ROUTES · SAFETY · TRIP PLANNING</span>
          </div>
        </div>

        <figure className="article-hero-image">
          <img
            src="/images/cycling-holiday-morocco.jpg"
            alt="Cycling holiday in Morocco"
            fetchPriority="high"
          />
          <figcaption>
            Choose a route and daily rhythm that let every family member enjoy
            the ride.
          </figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#family-rhythm">Plan around the whole family</a>
          <a href="#choose-region">Choose the right region</a>
          <a href="#choose-bike">Choose bikes and routes</a>
          <a href="#distance-breaks">Distance, breaks and pace</a>
          <a href="#safety-support">Safety and support</a>
          <a href="#accommodation">Accommodation and activities</a>
          <a href="#season-equipment">Season and packing</a>
          <a href="#responsible-family">Responsible family travel</a>
          <a href="#family-checklist">Pre-trip checklist</a>
          <a href="#family-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            The most enjoyable family cycling itinerary is paced around the
            youngest or least-experienced rider, not the strongest adult.
            Shorter stages, clear stopping points, safe transitions between
            riding sections and time away from the bike can turn a challenging
            holiday into a shared adventure. Plan the ride for the people in
            your family rather than trying to fit your family into a standard
            adult itinerary.
          </p>

          <section id="family-rhythm">
            <h2>Plan around the whole family</h2>
            <p>
              Start with an honest picture of each rider&apos;s experience.
              Consider who is confident on paved roads, who has ridden on dirt,
              who enjoys hills and who may need extra time on descents or loose
              surfaces. A child who cycles confidently in a park may still need
              practice with gravel, traffic, uneven ground or longer days in the
              saddle.
            </p>
            <p>
              Agree on the main goal of the holiday. Some families want easy
              scenic rides with time for picnics and village stops; others may
              have teenagers eager for mountain trails. The right plan can
              include different types of days, but transitions and support need
              to be discussed in advance. Build in flexibility so that the
              family can shorten a stage or take a rest without feeling that the
              trip has failed.
            </p>

            <figure className="article-inline-image">
              <img
                src="/images/group-cycling-tour-morocco.jpg"
                alt="Cycling group enjoying a guided Morocco cycling holiday"
                loading="lazy"
              />
              <figcaption>
                Good family planning allows different riders to share the
                experience without forcing everyone to ride at the same level.
              </figcaption>
            </figure>

            <div className="article-tip">
              <strong>Start with the least-experienced rider</strong>
              <p>
                When estimating daily distance, climbing and technical
                difficulty, use the needs of the youngest or least-confident
                cyclist as the starting point. Stronger riders can enjoy extra
                activities while the group stays together for key moments.
              </p>
            </div>
          </section>

          <section id="choose-region">
            <h2>Choose a region that suits your family</h2>

            <h3>Marrakech and the surrounding countryside</h3>
            <p>
              Marrakech can be a practical base for shorter rides and day trips,
              with the option to combine cycling with markets, gardens, food and
              cultural visits. The best routes usually start away from the
              busiest traffic and use a suitable mix of quieter roads or tracks.
              Ask about transfer time, traffic exposure and whether the route
              has easy places to stop or return early if needed.
            </p>

            <h3>Atlas foothills and mountain valleys</h3>
            <p>
              Rural valleys offer scenery and the opportunity to experience
              mountain villages, but elevation and surface can make a route
              harder than it appears. Choose routes with manageable climbs,
              suitable stopping points and an appropriate surface for the bikes
              available. High or exposed trails may not suit young riders,
              particularly if the weather is cold, wet or windy.
            </p>

            <h3>Agafay and open landscapes</h3>
            <p>
              The rocky terrain around Agafay can be striking, but exposed
              routes may have little shade and loose or uneven surfaces. For a
              family ride, discuss temperature, water capacity, surface, route
              length and an early-return option. Do not assume every desert-style
              excursion is suitable for children just because it is described
              as a day trip.
            </p>

            <p>
              For more route ideas, explore our{" "}
              <Link href="/journal/best-cycling-routes-from-marrakech">
                Best Cycling Routes From Marrakech
              </Link>{" "}
              guide and the{" "}
              <Link href="/journal/complete-high-atlas-mountains-cycling-guide">
                Complete High Atlas Mountains Cycling Guide
              </Link>
              .
            </p>
          </section>

          <section id="choose-bike">
            <h2>Choose suitable bikes and routes</h2>

            <h3>Road cycling on paved routes</h3>
            <p>
              A road-based family ride can work when the chosen roads have
              suitable traffic levels, visibility and safe places to regroup.
              Confirm junctions, road shoulder or verge conditions where
              relevant, and how the group will be supported. For younger riders
              or those new to road cycling, avoid assuming that a long distance
              on smooth pavement will automatically be easy.
            </p>

            <h3>Gravel cycling on manageable tracks</h3>
            <p>
              Gravel can offer a quiet way to explore rural areas, but the term
              covers many surfaces. Compact dirt is different from deep gravel,
              loose stones or steep rutted tracks. Ask for details of the
              roughest section and match tyre width, gearing and braking to the
              route. If riders have different bikes, choose a surface that works
              for everyone.
            </p>

            <h3>Mountain biking and E-MTB</h3>
            <p>
              MTB can suit families with confident off-road riders, provided
              the trail difficulty matches their skills. Technical descents,
              exposure, sharp drop-offs or long hike-a-bike sections may not be
              appropriate. E-MTB can help some adults manage climbs, but battery
              range, charging and bike weight still matter, and assistance does
              not replace handling skills. Confirm suitable bike sizes and safe
              setups for every rider.
            </p>

            <div className="article-tip">
              <strong>Ask for specific route information</strong>
              <p>
                Request daily distance, ascent, surface types, traffic exposure,
                technical features, rest stops and the plan for returning early.
                A clear route description is more useful than a general label
                such as “easy family ride.”
              </p>
            </div>
          </section>

          <section id="distance-breaks">
            <h2>Keep daily distance, breaks and pace realistic</h2>
            <p>
              There is no universal number of kilometres that works for every
              family. Terrain, temperature, climbing, bike fit, confidence and
              the time needed for food and stops all affect the day. A short
              route can feel demanding on loose surfaces or in heat, while a
              longer ride on gentle terrain may be comfortable for experienced
              young riders.
            </p>
            <p>
              Build regular breaks into the plan and identify places where the
              group can safely stop. Carry enough water for the actual route,
              plus snacks that suit the riders. Start early when conditions make
              that sensible, but do not pack the schedule so tightly that a
              slow section or an unexpected stop creates pressure. Leave room
              for spontaneous discoveries, photos and time to enjoy the
              destination.
            </p>
            <ul className="article-checklist">
              <li>
                Agree on a comfortable riding time as well as a distance.
              </li>
              <li>
                Plan frequent breaks and identify food and water stops.
              </li>
              <li>
                Allow extra time for climbs, loose surfaces and young riders
                learning new skills.
              </li>
              <li>
                Discuss a shorter alternative or early-return plan before
                setting off.
              </li>
            </ul>
          </section>

          <section id="safety-support">
            <h2>Safety, guiding and support for families</h2>
            <p>
              Safety planning starts with route selection. Ask how the guide
              assesses the surface, traffic, technical sections and weather, and
              how the group will be managed if riders become separated or
              someone needs to stop. Children should understand basic group
              signals, how to follow instructions and what to do if they have a
              problem with a bike or feel unwell.
            </p>
            <p>
              Confirm helmet availability and fit, bike condition, brake
              performance, suitable saddle and handlebar setup, and whether
              tools or spares are carried. For longer routes, ask whether a
              support vehicle is available, what it can carry and how it can
              reach the planned riding areas. Do not assume a vehicle can follow
              every narrow track or remote path.
            </p>
            <p>
              Make the family&apos;s comfort part of the plan. Encourage children
              to say when they are tired, cold, hot or worried about a section.
              A responsible itinerary should allow the guide and adults to
              adjust the route, walk an unsuitable part or stop when conditions
              call for it.
            </p>
          </section>

          <section id="accommodation">
            <h2>Accommodation, meals and activities beyond the bike</h2>
            <p>
              A family holiday is more than riding time. Check whether the
              accommodation suits your family size, sleeping arrangements and
              preferred comfort level, and confirm meal options and timing
              around the riding day. Useful questions include whether there is
              space to store bikes, how luggage moves between stops and what
              happens if the family wants a rest day.
            </p>
            <p>
              Consider adding non-riding activities such as exploring Marrakech,
              spending time in a village with a local host, visiting a market or
              enjoying a relaxed afternoon at your accommodation. These breaks
              can help younger travellers recover and give everyone a different
              way to connect with the places they visit. Confirm which
              activities are included and which need separate arrangements.
            </p>
          </section>

          <section id="season-equipment">
            <h2>Choose the season and pack thoughtfully</h2>
            <p>
              Conditions vary between the city, mountain valleys and open desert
              terrain. A comfortable season for one region may bring chilly
              mornings at altitude or warmer, exposed riding elsewhere. Check
              the expected weather for the exact route and dates, and leave
              flexibility if your plan includes multiple elevations. Seasonal
              guidance is useful, but it is not a live forecast.
            </p>
            <p>
              Pack well-fitting helmets, gloves, suitable shoes, cycling
              clothing, sunglasses or protective eyewear, sun protection, water
              bottles or hydration packs and light layers. Bring personal
              medication and any comfort items younger riders may need. Ask the
              organiser for the route-specific packing list and confirm which
              bike equipment, repair tools, spares and luggage services are
              provided.
            </p>
          </section>

          <section id="responsible-family">
            <h2>Travel responsibly as a family</h2>
            <p>
              Rural roads and village paths are shared with residents,
              pedestrians, livestock and other travellers. Slow down near homes,
              give people and animals plenty of space and follow local guidance
              on where cycling is appropriate. Ask before taking photos of
              people, keep access clear when stopping and avoid riding through
              cultivated land or creating shortcuts off established tracks.
            </p>
            <p>
              Help children understand that local communities are places where
              people live and work, not just scenery. Carry reusable bottles
              where practical, take litter with you and support local services
              thoughtfully. Small habits make the trip more pleasant for your
              family and more respectful to the people who welcome visitors.
            </p>
          </section>

          <section id="family-checklist">
            <h2>Family cycling holiday checklist</h2>
            <ul className="article-checklist">
              <li>
                <strong>Riders:</strong> Share each person&apos;s age, confidence,
                experience and comfort on different surfaces.
              </li>
              <li>
                <strong>Route:</strong> Confirm distance, ascent, road exposure,
                terrain and a suitable alternative if needed.
              </li>
              <li>
                <strong>Bikes:</strong> Check frame size, fit, helmet fit,
                brakes, tyres, pedals and basic spares.
              </li>
              <li>
                <strong>Daily rhythm:</strong> Agree on realistic riding times,
                rest breaks, food and water access.
              </li>
              <li>
                <strong>Support:</strong> Clarify guiding, transfer logistics,
                luggage, mechanical help and emergency arrangements.
              </li>
              <li>
                <strong>Accommodation:</strong> Confirm family arrangements,
                meal options, bike storage and non-riding activities.
              </li>
              <li>
                <strong>Conditions:</strong> Check the forecast and pack layers
                and sun protection for the actual route.
              </li>
            </ul>
          </section>

          <section
            className="article-faq"
            id="family-faq"
            aria-labelledby="family-faq-title"
          >
            <h2 id="family-faq-title">Frequently asked questions</h2>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>Planning note</strong>
            <p>
              This guide provides general trip-planning information rather than
              a promise that any specific route or activity will suit every
              family. Route access, equipment availability, services and
              conditions should be confirmed for your dates and group.
            </p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading">
            <div>
              <p className="article-eyebrow article-eyebrow-dark">
                KEEP EXPLORING
              </p>
              <h2>More guides for planning your Morocco ride.</h2>
            </div>
            <Link className="article-text-link" href="/journal">
              Explore all articles ↗
            </Link>
          </div>

          <div className="article-related-grid">
            {relatedArticles.map((item) => (
              <article className="article-related-card" key={item.href}>
                <Link
                  href={item.href}
                  className="article-related-image"
                >
                  <img src={item.image} alt={item.title} loading="lazy" />
                </Link>
                <div className="article-related-content">
                  <p className="article-eyebrow article-eyebrow-dark">
                    {item.category}
                  </p>
                  <h3>
                    <Link href={item.href}>{item.title}</Link>
                  </h3>
                  <p>{item.text}</p>
                  <Link className="article-text-link" href={item.href}>
                    Read article ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="article-cta">
        <div className="article-shell article-cta-inner">
          <div>
            <p className="article-eyebrow">YOUR FAMILY ADVENTURE</p>
            <h2>Plan a cycling holiday that suits everyone.</h2>
            <p>
              Share your travel dates, riders’ ages and experience, preferred
              regions and the kind of days you want to enjoy together. We can
              discuss suitable route styles and the practical details to
              confirm.
            </p>
          </div>
          <div className="article-cta-actions">
            <Link
              className="article-button article-button-light"
              href="/contact?request=family-cycling-planning"
            >
              Plan a family trip ↗
            </Link>
            <Link
              className="article-button article-button-outline"
              href="/destinations"
            >
              Explore destinations
            </Link>
          </div>
        </div>
      </section>

      <footer className="article-site-footer">
        <div className="article-shell article-footer-grid">
          <div className="article-footer-brand">
            <Link className="article-brand" href="/">
              <img
                src="/images/mountain-bike-morocco-logo.png"
                alt="Mountain Bike Morocco"
              />
              <span>
                MOUNTAIN BIKE <em>MOROCCO</em>
              </span>
            </Link>
            <p>
              Guided MTB, E-MTB, gravel and road cycling adventures across
              Morocco. Discover the landscapes and local culture at your own
              pace.
            </p>
          </div>

          <div>
            <h3>Explore</h3>
            <Link href="/cycling-trips">All Cycling Tours</Link>
            <Link href="/cycling-trips/mtb">Mountain Bike Tours</Link>
            <Link href="/cycling-trips/e-mtb">E-MTB Tours</Link>
            <Link href="/cycling-trips/gravel">Gravel Cycling</Link>
            <Link href="/cycling-trips/road">Road Cycling</Link>
          </div>

          <div>
            <h3>Destinations</h3>
            <Link href="/destinations/atlas-mountains">Atlas Mountains</Link>
            <Link href="/destinations/imlil">Imlil Valley</Link>
            <Link href="/destinations/toubkal">Mount Toubkal</Link>
            <Link href="/destinations/marrakech">Marrakech</Link>
            <Link href="/destinations">All Destinations</Link>
          </div>

          <div>
            <h3>Let&apos;s Plan</h3>
            <Link href="/about">About Us</Link>
            <Link href="/events">Events</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Plan Your Trip</Link>
          </div>
        </div>

        <div className="article-shell article-footer-bottom">
          <span>© {new Date().getFullYear()} Mountain Bike Morocco</span>
          <span>Morocco cycling adventures, thoughtfully planned.</span>
          <Link href="#top">Back to top ↑</Link>
        </div>
      </footer>

      <style>{`
        .family-cycling-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
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
        @media(prefers-reduced-motion:reduce){.family-cycling-article *,.family-cycling-article *:before,.family-cycling-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}