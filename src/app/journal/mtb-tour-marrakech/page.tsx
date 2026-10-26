import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MTB Tour From Marrakech: Trails, Routes & Planning | Mountain Bike Morocco",
  description:
    "Plan an MTB tour from Marrakech with practical guidance on Atlas Mountain trails, terrain, difficulty, seasons, equipment, guided rides and route planning.",
  alternates: { canonical: "/journal/mtb-tour-marrakech" },
  openGraph: {
    title: "MTB Tour From Marrakech: Trails, Routes & Planning",
    description:
      "Explore mountain biking around Marrakech, from Atlas foothill trails to rural tracks, with advice on routes, difficulty, equipment and trip planning.",
    type: "article",
    images: ["/images/mountain-bike-morocco-hero.jpg"],
  },
};

const relatedArticles = [
  {
    category: "ROUTE INSPIRATION",
    title: "Best Cycling Routes From Marrakech",
    text: "Explore cycling options around Marrakech, including rural tracks, foothill routes and journeys into the Atlas Mountains.",
    image: "/images/marrakech-city-bike-tou.jpeg",
    href: "/journal/best-cycling-routes-from-marrakech",
  },
  {
    category: "MOUNTAIN BIKING",
    title: "Complete High Atlas Mountains Cycling Guide",
    text: "Understand the terrain, elevation, landscapes and practical considerations when planning a ride in the High Atlas.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/journal/complete-high-atlas-mountains-cycling-guide",
  },
  {
    category: "SEASONAL CYCLING",
    title: "Best Time to Visit Morocco for Cycling",
    text: "Choose your travel dates according to the region, altitude, riding style and seasonal conditions.",
    image: "/images/mountain-bike-morocco-hero.jpg",
    href: "/journal/best-time-visit-morocco-cycling",
  },
];

const faqs = [
  {
    question: "Can I take an MTB tour from Marrakech?",
    answer:
      "Marrakech can be a convenient starting point for mountain biking excursions into nearby countryside and the Atlas foothills. The available route depends on your dates, riding experience, trail conditions, transport arrangements and the type of mountain biking you want to do. Confirm the actual route and logistics before booking.",
  },
  {
    question: "What type of terrain can I expect?",
    answer:
      "Depending on the route, mountain biking around Marrakech can include rural tracks, rocky paths, loose surfaces, climbs, descents and sections of natural singletrack. Conditions vary considerably between locations. Ask for a route description that explains the surface, elevation gain, technical sections and any hike-a-bike portions.",
  },
  {
    question: "Do I need previous mountain biking experience?",
    answer:
      "The experience required depends on the trail. Some routes may suit confident recreational cyclists, while technical singletrack and steep rocky descents require stronger bike-handling skills. Be honest about your experience on loose surfaces, corners, braking and descents so the route can be matched to your ability.",
  },
  {
    question: "What is the best time for mountain biking near Marrakech?",
    answer:
      "Spring and autumn are often attractive periods for riding, although conditions depend on altitude, weather and the exact route. Summer can be hot in lower and exposed areas, while mountain temperatures may differ from those in Marrakech. Check the forecast and ask about trail conditions for your planned dates.",
  },
  {
    question: "Should I choose a mountain bike or an E-MTB?",
    answer:
      "A conventional mountain bike may be suitable for riders who want a traditional, lightweight riding experience. An E-MTB can assist on climbs and help manage longer routes, but it is heavier and requires battery planning. Choose according to the route, your fitness, handling experience and the equipment available.",
  },
  {
    question: "What should I bring on an MTB tour?",
    answer:
      "Bring a correctly fitted helmet, gloves, suitable cycling shoes, comfortable clothing, sun protection, enough water and any personal medication you need. Depending on the season and elevation, light layers may be useful. Confirm whether the organiser supplies the bike, helmet, tools, spare parts, refreshments and transport.",
  },
];

export default function MtbTourMarrakechPage() {
  return (
    <main className="family-cycling-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/journal">Journal</Link>
        <span>/</span>
        <span>MTB Tour From Marrakech</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">
            MOUNTAIN BIKING · MARRAKECH · ATLAS MOUNTAINS
          </p>
          <h1>MTB Tour From Marrakech: Trails, Routes &amp; Planning</h1>
          <p className="article-deck">
            Marrakech is a practical starting point for exploring Morocco by
            mountain bike. Beyond the city, the surrounding countryside and
            Atlas foothills offer changing landscapes, rural tracks, rocky
            terrain and opportunities to discover local communities along the
            way. Choosing the right ride means matching the route, elevation
            and technical difficulty to your experience, fitness and available
            time.
          </p>
          <div className="article-meta">
            <span>7 MIN READ</span>
            <span>MTB ROUTES · TERRAIN · TRIP PLANNING</span>
          </div>
        </div>

        <figure className="article-hero-image">
          <img
            src="/images/mountain-bike-morocco-hero.jpg"
            alt="Mountain biking in the landscapes of Morocco"
            fetchPriority="high"
          />
          <figcaption>
            Plan your ride around the terrain, elevation and experience you
            want from a mountain biking adventure in Morocco.
          </figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#why-marrakech">Why start in Marrakech?</a>
          <a href="#mtb-terrain">Trails and terrain</a>
          <a href="#choose-route">Choose the right route</a>
          <a href="#difficulty-fitness">Difficulty and fitness</a>
          <a href="#guided-mtb">Guides and trip logistics</a>
          <a href="#best-season">When to ride</a>
          <a href="#bike-equipment">Bike choice and equipment</a>
          <a href="#responsible-riding">Responsible trail riding</a>
          <a href="#mtb-checklist">Before you book</a>
          <a href="#mtb-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            A good MTB tour from Marrakech is about more than finding a trail.
            The most rewarding ride combines suitable terrain, a realistic
            distance, an appropriate level of technical challenge and enough
            time to enjoy the landscapes. Before choosing a tour, understand
            what the route involves and make sure the riding style matches
            your abilities and expectations.
          </p>

          <section id="why-marrakech">
            <h2>Why start a mountain bike tour from Marrakech?</h2>
            <p>
              Marrakech offers a convenient base for a cycling holiday, with
              accommodation, restaurants, transport connections and access to
              several different landscapes. Depending on the itinerary, a ride
              can head towards rural countryside, the foothills of the Atlas
              Mountains or more open, rocky terrain beyond the city.
            </p>
            <p>
              This variety makes it possible to plan different kinds of
              mountain biking experiences. Riders with limited time may prefer
              a day trip, while those seeking a deeper exploration can consider
              a multi-day itinerary with overnight stays outside the city.
              The best option depends on your available days, fitness, riding
              experience and preferred balance between cycling and cultural
              activities.
            </p>
            <p>
              Marrakech is a starting point rather than a guarantee of easy
              trail access. Some riding areas require a transfer before the
              ride begins. Ask how long the transfer takes, where the route
              starts and finishes, and whether transport is available after
              the ride.
            </p>

            <div className="article-tip">
              <strong>Choose the ride before choosing the distance</strong>
              <p>
                Decide whether you want flowing singletrack, scenic dirt
                roads, challenging descents or a longer cross-country journey.
                These experiences can involve very different terrain and
                technical demands, even when the daily distances are similar.
              </p>
            </div>
          </section>

          <section id="mtb-terrain">
            <h2>Explore the trails and terrain around Marrakech</h2>

            <h3>Atlas foothills and mountain valleys</h3>
            <p>
              The Atlas foothills and surrounding valleys offer a mountain
              landscape of changing elevation, rocky ground, rural tracks and
              traditional settlements. Routes can combine climbs with long
              descents, but the difficulty depends on the exact trail and
              conditions. A scenic mountain route is not necessarily an easy
              route, particularly when loose stones, steep gradients or narrow
              sections are involved.
            </p>
            <p>
              When comparing itineraries, ask about the total ascent as well
              as the distance. Find out whether climbing is continuous or
              broken into shorter sections, whether any parts require walking
              with the bike and how technical the descents are.
            </p>

            <h3>Rural tracks and countryside routes</h3>
            <p>
              Riding through the countryside can provide a more relaxed way
              to experience the landscapes around Marrakech. Depending on the
              itinerary, the route may follow compact dirt tracks, gravel
              roads and paths connecting rural areas. Surface quality can
              change after weather events or with local use, so the same
              distance may feel very different from one day to another.
            </p>
            <p>
              These routes can be appealing to riders who enjoy exploring
              rather than concentrating entirely on technical trails. Still,
              confirm the amount of climbing, the condition of the surface
              and the suitability of the route for your bike.
            </p>

            <h3>Rocky terrain and natural singletrack</h3>
            <p>
              More technical routes may include narrow paths, loose rock,
              uneven ground, sharp turns and steep descents. These features
              reward confident handling and good braking control. They can
              also make a route unsuitable for riders who are new to
              off-road cycling.
            </p>
            <p>
              Ask the guide to describe the most technical sections rather
              than relying on broad labels such as intermediate or advanced.
              If you are uncertain, choose a route with options to walk
              difficult sections or adapt the ride when conditions require it.
            </p>

            <p>
              For broader route inspiration, read our{" "}
              <Link href="/journal/best-cycling-routes-from-marrakech">
                Best Cycling Routes From Marrakech
              </Link>{" "}
              guide and our{" "}
              <Link href="/journal/complete-high-atlas-mountains-cycling-guide">
                Complete High Atlas Mountains Cycling Guide
              </Link>
              .
            </p>
          </section>

          <section id="choose-route">
            <h2>Choose an MTB route that fits your plans</h2>
            <p>
              The right route depends on the kind of day you want to have.
              Some riders prefer a shorter ride with time for photographs,
              village stops and lunch. Others want sustained climbing,
              technical descents or a full day on the bike. Establish your
              priorities before comparing tour descriptions.
            </p>

            <h3>Day trips from Marrakech</h3>
            <p>
              A day trip can suit visitors who want to experience mountain
              biking without changing accommodation. Check the full schedule,
              including transfers, bike setup, riding time and the expected
              return to Marrakech. A trip advertised as a full day may include
              significant transport time, so clarify how much time you will
              actually spend riding.
            </p>

            <h3>Multi-day mountain biking adventures</h3>
            <p>
              A multi-day itinerary gives you more time to explore different
              landscapes and travel beyond the immediate surroundings of
              Marrakech. It also requires planning for accommodation, meals,
              luggage, bike maintenance and recovery between stages. Ask how
              daily distances and elevation change over the trip and whether
              there are alternatives if a stage proves too demanding.
            </p>

            <h3>Private and customised routes</h3>
            <p>
              A private itinerary can be useful when riders have different
              experience levels, specific travel dates or a preferred riding
              style. Share your background honestly and explain whether you
              prioritise flow, scenery, technical terrain, fitness or cultural
              stops. A customised plan should still be based on actual route
              conditions and realistic daily stages.
            </p>

            <div className="article-tip">
              <strong>Ask for the route details</strong>
              <p>
                Before booking, request distance, ascent, estimated riding
                time, surface types, technical features, transfer duration and
                the available options if you need to shorten the ride.
              </p>
            </div>
          </section>

          <section id="difficulty-fitness">
            <h2>Understand difficulty, fitness and technical skills</h2>
            <p>
              Mountain bike difficulty has several parts. Physical effort
              depends on distance, climbing, altitude, temperature and how
              continuously you ride. Technical difficulty depends on the
              surface, gradients, obstacles, corners and the amount of
              control required on descents.
            </p>
            <p>
              A fit road cyclist may be comfortable riding for several hours
              but still need time to develop confidence on loose stones or
              narrow singletrack. Similarly, an experienced trail rider may
              need to adjust expectations when a route includes sustained
              climbing or a long day in exposed conditions.
            </p>
            <p>
              Be clear about the trails you normally ride, your experience
              descending on rough ground and the distance you can comfortably
              manage. Ask whether the guide can adjust the route to suit your
              ability, and whether walking a difficult section is a practical
              option.
            </p>
            <ul className="article-checklist">
              <li>Check both physical effort and technical difficulty.</li>
              <li>Ask for total ascent, descent and estimated riding time.</li>
              <li>Explain your experience on loose and rocky terrain.</li>
              <li>Discuss alternatives for difficult or exposed sections.</li>
            </ul>
          </section>

          <section id="guided-mtb">
            <h2>Guides, transfers and trip logistics</h2>
            <p>
              A local guide can help with navigation, route selection and
              adapting the ride to the conditions. Before booking, ask about
              the guide's experience with your preferred riding style, the
              group size and how the pace is managed. Make sure the itinerary
              includes clear meeting arrangements and contact information.
            </p>
            <p>
              Transfers are an important part of many rides outside Marrakech.
              Confirm where you will be collected, how long the journey takes
              and whether the vehicle can transport your bike safely. For
              multi-day tours, clarify how luggage, meals and accommodation
              are handled and what support is available if you experience a
              mechanical problem.
            </p>
            <p>
              Ask what happens if the weather changes or a trail is unsuitable
              on the day. Responsible planning includes the flexibility to
              modify the route when conditions, safety or the group's ability
              make the original plan impractical.
            </p>
          </section>

          <section id="best-season">
            <h2>When is the best time for an MTB tour from Marrakech?</h2>
            <p>
              Spring and autumn are often popular periods for cycling in
              Morocco because conditions can be comfortable in many areas.
              However, the best time depends on the route, altitude, weather
              and the type of riding you prefer. Conditions in Marrakech may
              differ considerably from those in mountain valleys or at higher
              elevations.
            </p>

            <h3>Spring</h3>
            <p>
              Spring can offer pleasant riding conditions in many locations,
              but mountain weather can still change quickly. Ask about
              temperatures at the route's highest point and whether recent
              rainfall has affected the trail surface.
            </p>

            <h3>Summer</h3>
            <p>
              Lower and exposed routes can become very hot in summer. Early
              starts, adequate water and a realistic riding schedule are
              especially important. Higher elevations may offer different
              conditions, but should not be assumed to be cool or safe without
              checking the forecast.
            </p>

            <h3>Autumn and winter</h3>
            <p>
              Autumn can be suitable for a range of rides, depending on
              conditions. Winter brings shorter days and potentially cold,
              wet or snowy weather at higher elevations. Confirm current
              trail conditions and bring layers appropriate to the elevation
              and expected weather.
            </p>
            <p>
              Seasonal guidance is a starting point rather than a live
              forecast. Check conditions close to departure and remain
              flexible if the route needs to change.
            </p>
          </section>

          <section id="bike-equipment">
            <h2>Choose your bike and prepare your equipment</h2>

            <h3>Mountain bike or E-MTB?</h3>
            <p>
              A conventional mountain bike can be suitable for a wide range
              of off-road routes when its frame size, tyres, gearing and
              suspension are appropriate. An E-MTB provides pedal assistance
              on climbs, but it is heavier and its battery range depends on
              elevation, assistance level, rider weight and terrain.
            </p>
            <p>
              Choose based on the actual route and your riding experience,
              not simply on the distance advertised. Confirm the available
              sizes, bike condition, helmet arrangements and whether you can
              test the setup before starting the ride.
            </p>

            <h3>What to pack</h3>
            <p>
              Bring a properly fitted helmet, gloves, suitable cycling shoes,
              comfortable riding clothes, sunglasses or protective eyewear,
              sunscreen and sufficient water. Lightweight layers can help
              with changing conditions, especially when a ride gains
              elevation. Take any personal medication and consider snacks
              suitable for a long day outdoors.
            </p>
            <p>
              Confirm whether the organiser supplies tools, spare tubes,
              repair equipment, refreshments and a support vehicle. If you
              are bringing your own bike, discuss transport, assembly and
              any tools or parts specific to your setup.
            </p>
          </section>

          <section id="responsible-riding">
            <h2>Ride responsibly and respect local communities</h2>
            <p>
              Many routes pass through working countryside and inhabited
              villages. Slow down near homes, pedestrians, livestock and
              other trail users. Give people plenty of room, follow local
              guidance and avoid blocking paths or entrances when stopping.
            </p>
            <p>
              Stay on appropriate established routes and do not cut across
              cultivated land. Ask permission before photographing people,
              carry your rubbish out and treat local customs with respect.
              Responsible riding helps protect access to the landscapes and
              communities that make cycling in Morocco rewarding.
            </p>
            <p>
              Conditions and access can vary between locations. Follow your
              guide's advice and do not assume that every visible track is
              suitable or open for cycling.
            </p>
          </section>

          <section id="mtb-checklist">
            <h2>MTB tour from Marrakech: booking checklist</h2>
            <ul className="article-checklist">
              <li>
                <strong>Route:</strong> Confirm the location, surface,
                distance, elevation gain and estimated riding time.
              </li>
              <li>
                <strong>Difficulty:</strong> Ask about technical descents,
                loose ground, exposed sections and hike-a-bike portions.
              </li>
              <li>
                <strong>Guide:</strong> Clarify group size, pace, route
                adjustments and communication arrangements.
              </li>
              <li>
                <strong>Transport:</strong> Confirm pickup location, transfer
                duration and bike transport arrangements.
              </li>
              <li>
                <strong>Equipment:</strong> Check bike size, condition, helmet,
                tools, spares and any E-MTB charging requirements.
              </li>
              <li>
                <strong>Support:</strong> Ask what happens if there is a
                mechanical problem, bad weather or a need to shorten the ride.
              </li>
              <li>
                <strong>Conditions:</strong> Check the forecast and confirm
                the route is appropriate for the expected conditions.
              </li>
            </ul>
          </section>

          <section
            className="article-faq"
            id="mtb-faq"
            aria-labelledby="mtb-faq-title"
          >
            <h2 id="mtb-faq-title">Frequently asked questions</h2>
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
              This guide provides general information for planning an MTB
              tour from Marrakech. Route access, trail conditions, equipment,
              transport and services can vary. Confirm the actual itinerary
              and current conditions with your tour organiser before departure.
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
                <Link href={item.href} className="article-related-image">
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
            <p className="article-eyebrow">YOUR MOROCCO MTB ADVENTURE</p>
            <h2>Find the right ride for your next adventure.</h2>
            <p>
              Tell us your dates, riding experience, preferred terrain and
              available time. Use those details to discuss a suitable
              mountain biking route and confirm the practical arrangements
              before travelling.
            </p>
          </div>
          <div className="article-cta-actions">
            <Link
              className="article-button article-button-light"
              href="/contact?request=mtb-tour-marrakech"
            >
              Plan an MTB tour ↗
            </Link>
            <Link
              className="article-button article-button-outline"
              href="/cycling-trips/mtb"
            >
              Explore MTB tours
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
          <span>© 2026 Mountain Bike Morocco</span>
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