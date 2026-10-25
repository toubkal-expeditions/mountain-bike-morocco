import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What to Pack for a Cycling Holiday in Morocco | Mountain Bike Morocco",
  description:
    "Use this practical packing guide for cycling in Morocco. Prepare bike equipment, clothing layers, sun protection, hydration, repairs and travel essentials around your route, season and cycling style.",
  alternates: { canonical: "/journal/what-to-pack-cycling-morocco" },
  openGraph: {
    title: "What to Pack for a Cycling Holiday in Morocco",
    description:
      "A practical Morocco cycling packing list for MTB, E-MTB, gravel and road tours, with advice on clothing, bike spares, hydration and travel logistics.",
    type: "article",
    images: ["/images/group-cycling-tour-morocco.jpg"],
  },
};

const packingRelatedArticles = [
  {
    category: "TRIP PLANNING",
    title: "Best Time to Visit Morocco for Cycling",
    text: "Choose dates with the route, altitude, regional climate and riding style in mind.",
    image: "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    href: "/journal/best-time-visit-morocco-cycling",
  },
  {
    category: "GRAVEL CYCLING",
    title: "Complete Gravel Bike Morocco",
    text: "Prepare tyres, gearing, navigation, luggage and repair supplies for rough tracks.",
    image: "/images/gravel-bike-tour-morocco.jpg",
    href: "/journal/complete-gravel-bike-morocco",
  },
  {
    category: "E-MTB ADVENTURES",
    title: "Complete E-Bike Cycling Morocco",
    text: "Understand battery range, charging logistics, bike fit and support before riding.",
    image: "/images/e-mtb-tour-from-marrakech.jpg",
    href: "/journal/complete-e-bike-cycling-morocco",
  },
];

const packingFaqs = [
  {
    question: "What are the essentials for any cycling holiday in Morocco?",
    answer:
      "Start with a properly fitted helmet, gloves, suitable riding shoes, eyewear, comfortable cycling clothing, sun protection, a hydration system and any personal medication. Add discipline-specific equipment and layers that match the route, elevation and forecast. Confirm which tools, spares and other items your operator supplies.",
  },
  {
    question: "Should I bring my own bike or use a rental bike?",
    answer:
      "Either option may work, depending on the tour and equipment available for your dates. If bringing your own bike, consider airline rules, a suitable bike case, transfers, assembly and any specialist spares. If using a supplied bike, confirm its type, frame size, fit, pedals, condition and what is included before travelling.",
  },
  {
    question: "What clothing should I pack for the Atlas Mountains?",
    answer:
      "Pack in layers. Conditions may differ between a warm valley, an exposed climb and a cool early start. A breathable riding kit, light windproof or waterproof layer, warmer layer, gloves and comfortable off-bike clothing are useful starting points. The exact list depends on the season, altitude and planned stages.",
  },
  {
    question: "How much water should I carry?",
    answer:
      "Follow the route-specific guidance from your organiser and plan capacity around the longest gap between reliable refill points. Do not assume water or shops will be available in remote areas. Ask how resupply works, whether a support vehicle can reach the route and what contingency supplies are carried.",
  },
  {
    question: "What repair tools and spare parts do I need?",
    answer:
      "The right kit depends on your bike and the tour's support plan. Many riders carry a suitable pump or inflator, tyre repair supplies, a spare tube where relevant, tyre levers, a multi-tool and a quick link compatible with their chain. Ask which tools and spares the guide or support vehicle carries so you can avoid gaps or unnecessary duplication.",
  },
  {
    question: "What should I pack differently for an E-MTB tour?",
    answer:
      "Confirm what charging equipment is supplied and whether you should bring a compatible charger. Ask about charging access, battery handling, any spare-battery arrangement and the plan for remote stages. Do not assume that power sockets or charging opportunities are available every night, and follow the bike manufacturer's instructions for battery care.",
  },
  {
    question: "Do I need different equipment for desert cycling?",
    answer:
      "Desert and southern routes can require especially careful planning for sun, heat, wind, dust, water and long gaps between services. Pack adequate sun protection, eye protection, suitable layers and the hydration capacity specified for the route. Confirm food, water, navigation, communication and vehicle support arrangements before departure.",
  },
  {
    question: "How should I pack luggage for a multi-day cycling tour?",
    answer:
      "Separate daily riding essentials from clothing and items needed only at the overnight stop. Keep valuables, medication, travel documents and anything you may need during the ride accessible. Confirm luggage limits, whether bags are transferred, what should go in a day pack and whether a bike case can be transported between the airport and tour start.",
  },
];

export default function WhatToPackCyclingMoroccoPage() {
  return (
    <main className="packing-article" id="top">
      <div className="article-shell article-breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>What to Pack for a Cycling Holiday in Morocco</span>
      </div>

      <header className="article-shell article-hero">
        <div className="article-hero-copy">
          <p className="article-eyebrow">PRACTICAL ADVICE · CYCLING HOLIDAYS</p>
          <h1>What to Pack for a Cycling Holiday in Morocco</h1>
          <p className="article-deck">
            The best packing list is built around the ride you are actually taking. A day on paved roads outside Marrakech needs a different kit from a technical MTB journey in the High Atlas or a remote multi-day desert expedition. Use this guide to prepare the essentials, understand what to confirm with your tour organiser and avoid carrying items you will not need.
          </p>
          <div className="article-meta"><span>5 MIN READ</span><span>PACKING · EQUIPMENT · TRIP PREPARATION</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/group-cycling-tour-morocco.jpg" alt="Cyclists preparing for a guided cycling tour in Morocco" fetchPriority="high" />
          <figcaption>Pack for your route, season and support arrangements—not for every possible situation.</figcaption>
        </figure>
      </header>

      <div className="article-shell article-main-grid">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#packing-first">Start with the itinerary</a>
          <a href="#packing-basics">Essential riding kit</a>
          <a href="#packing-bike">Bike, tools and spares</a>
          <a href="#packing-clothing">Clothing and layers</a>
          <a href="#packing-sun-water">Sun protection, water and food</a>
          <a href="#packing-style">Pack for your cycling style</a>
          <a href="#packing-regions">Pack for the region and season</a>
          <a href="#packing-travel">Travel documents and luggage</a>
          <a href="#packing-provided">What to confirm is provided</a>
          <a href="#packing-checklist">Final packing checklist</a>
          <a href="#packing-faq">Frequently asked questions</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            A good packing plan keeps you comfortable on the bike and prepared for the practical realities of travel. Begin with the route and season, then check what is supplied, what support is available and how luggage will be moved. That is more reliable than packing for a generic cycling holiday and discovering that a key item does not suit the terrain.
          </p>

          <section id="packing-first">
            <h2>Start with your itinerary, not your suitcase</h2>
            <p>
              Before choosing equipment, review the planned distance, elevation, surface, climate and overnight arrangements. A supported day ride close to Marrakech may have regular stops and easy access to supplies. A multi-day mountain or desert route may involve longer stretches without services, cooler mornings, remote terrain or limits on the luggage that can be carried.
            </p>
            <p>
              Ask for a stage-by-stage itinerary and a route-specific packing list. Confirm whether your tour includes a bike, helmet, repair tools, water, meals, luggage transfers, a support vehicle or a guide carrying shared equipment. Write down what you need to bring personally and what the organiser will supply so important items are not overlooked—or packed twice.
            </p>
            <div className="article-tip"><strong>Best first step</strong><p>Ask your organiser: “What must I bring myself, what will you provide, and what should I carry while riding each day?”</p></div>
          </section>

          <section id="packing-basics">
            <h2>Essential riding kit for Morocco</h2>
            <p>
              Most riders can start with a small set of essentials and then adapt it to the route. Prioritise comfort, fit and reliable function over bringing lots of specialist gear you may never use. Test shoes, clothing, eyewear and hydration equipment before travelling, especially if they are new to you.
            </p>
            <ul className="article-checklist">
              <li><strong>Helmet:</strong> Bring a properly fitted helmet in good condition unless one is confirmed as supplied and suitable.</li>
              <li><strong>Gloves:</strong> Choose gloves that suit your discipline and help with grip, comfort and protection.</li>
              <li><strong>Eyewear:</strong> Sunglasses or clear lenses can help with sun, dust, wind and trail debris.</li>
              <li><strong>Shoes and pedals:</strong> Confirm pedal compatibility if you use clipless shoes, and bring shoes suitable for any walking sections.</li>
              <li><strong>Hydration system:</strong> Carry bottles or a pack with enough capacity for the planned gap between reliable refills.</li>
              <li><strong>Phone and navigation:</strong> Bring a charged phone and any route-navigation equipment specified by your guide. Do not rely on mobile coverage everywhere.</li>
              <li><strong>Personal medication:</strong> Keep necessary medication in its original packaging and accessible during transfers and rides.</li>
            </ul>
            <figure className="article-inline-image"><img src="/images/group-cycling-tour-morocco.jpg" alt="Cycling group checking their equipment before a Morocco ride" loading="lazy" /><figcaption>Lay out daily essentials before departure and check that everything fits comfortably on the bike or in your riding pack.</figcaption></figure>
          </section>

          <section id="packing-bike">
            <h2>Bike, tools and spare parts</h2>
            <p>
              Whether you travel with your own bike or use a supplied one, reliability starts with a setup that matches the route. Before departure, check the tyres, brakes, drivetrain, shifting, wheels, bolts and overall fit. For a multi-day trip, make sure the bike has been serviced and that you know how to use any equipment you plan to carry.
            </p>
            <h3>If you bring your own bike</h3>
            <p>
              Confirm airline rules and baggage fees, pack the bike securely in an appropriate case or bag, and check whether transfers have room for your bike luggage. Consider bringing any specialist parts that are difficult to source for your particular model, such as a compatible derailleur hanger, electronic-shifting charging cable or suspension component tool, if relevant. Keep essential parts and tools organised so reassembly is straightforward.
            </p>
            <h3>If a bike is provided</h3>
            <p>
              Confirm the bike type, available frame sizes, seat and cockpit adjustment, pedals, helmet availability and whether the tour includes time for setup and a test ride. Tell the organiser about any fit needs or adaptations well before arrival. A suitable fit makes a major difference to comfort over several consecutive days.
            </p>
            <h3>A practical repair kit</h3>
            <p>
              The right kit varies with tyre system, drivetrain and support. Depending on your bike, you might carry a pump or inflator, tyre levers, a spare tube or tubeless repair supplies, a multi-tool, a compatible quick link and small personal spares. Confirm what the guide or support vehicle carries, and do not assume a shared kit contains parts compatible with every rider's bike.
            </p>
            <div className="article-tip"><strong>Check the support plan</strong><p>Ask which repairs you are expected to handle yourself, what the guide carries, whether a support vehicle can access the route and how a serious mechanical problem is managed.</p></div>
          </section>

          <section id="packing-clothing">
            <h2>Clothing: use layers rather than one bulky outfit</h2>
            <p>
              Morocco includes varied elevations and climates. A warm afternoon in a lower valley can contrast with a cool start or a windy mountain pass. Lightweight layers are easier to adjust throughout the day than one heavy garment, and they can be packed away as conditions change.
            </p>
            <ul className="article-checklist">
              <li><strong>On the bike:</strong> Comfortable cycling shorts or liners, jerseys, socks and shoes suited to your chosen discipline.</li>
              <li><strong>Wind or rain layer:</strong> A compact shell can be useful for exposed climbs, descents, wind or changing weather.</li>
              <li><strong>Warm layer:</strong> Pack an insulating layer for early starts, higher elevations and cool evenings when appropriate for the season.</li>
              <li><strong>Off-bike clothing:</strong> Bring comfortable clothes for accommodation, meals and time between riding stages.</li>
              <li><strong>Gloves and extra socks:</strong> A spare pair can be useful on longer trips or if conditions become wet or dusty.</li>
              <li><strong>Modest, practical clothing:</strong> Choose comfortable attire for village visits and time in local communities, and follow local guidance at cultural or religious sites.</li>
            </ul>
            <p>
              Avoid buying a completely new riding wardrobe immediately before departure. Wear your main kit on a training ride first to check for chafing, fit problems, pressure points or issues with pockets and layers. Familiar, tested equipment is usually more useful than untested extras.
            </p>
          </section>

          <section id="packing-sun-water">
            <h2>Sun protection, hydration and ride-day food</h2>
            <p>
              Sun exposure and the distance between reliable resupply points deserve special attention, especially on open routes. Pack sun protection that you know how to use comfortably while riding, and ask how much water capacity is recommended for each stage. Do not assume there will be shops, taps or cafés where you need them.
            </p>
            <p>
              Useful items may include high-protection sunscreen, lip protection, sunglasses, a cap or lightweight cover for time off the bike, and a hydration system suited to the planned route. For food, bring familiar ride snacks if you know what works for you. Confirm which meals and snacks are supplied, where resupply takes place and what to carry if the ride lasts longer than expected.
            </p>
            <p>
              For remote mountain or desert stages, follow the organiser's advice about minimum water capacity, food and contingency supplies. If you have dietary requirements or allergies, communicate them in advance instead of relying on finding suitable food during the ride.
            </p>
            <div className="article-tip"><strong>Plan for the longest gap</strong><p>Base your water and food capacity on the least-serviced part of the itinerary, not on the availability of cafés at the start or end of the day.</p></div>
          </section>

          <section id="packing-style">
            <h2>Pack for your cycling style</h2>
            <h3>Mountain biking (MTB)</h3>
            <p>For technical trails, prioritise a correctly fitted helmet, gloves, sturdy shoes, eyewear and a repair kit suited to rough surfaces. Knee or elbow protection may be appropriate for the route and rider, particularly on technical or enduro-focused days. Ask about trail difficulty, the likelihood of walking sections and what protection the guide recommends.</p>
            <h3>Electric mountain biking (E-MTB)</h3>
            <p>Confirm whether the bike and charger are supplied, how charging is organised and whether riders need to carry a charger or battery key. Follow the manufacturer's advice for battery care and transport. If you bring your own bike, check charger compatibility and travel rules for the battery before departure; airline and transport requirements can differ.</p>
            <h3>Gravel cycling</h3>
            <p>Choose clothing and equipment for a mix of paved roads and unpaved tracks. Tyre width, puncture protection, gearing and carrying capacity should match the roughest planned surface. A small repair kit, navigation access and enough room for water and food are especially important if stages pass through rural areas with few services.</p>
            <h3>Road cycling</h3>
            <p>Road riders should bring a helmet, glasses, gloves, road shoes, suitable clothing and route-compatible repair equipment. Confirm whether the support team carries tubes or other parts for your wheel and tyre setup. Visibility, lights where needed and awareness of road conditions are important considerations, particularly for early starts or changing daylight.</p>
          </section>

          <section id="packing-regions">
            <h2>Adapt your packing to the region and season</h2>
            <p>
              The route matters as much as the month. Check the itinerary for elevation, exposed passes, shade, the likely surface and how far you may be from resupply. Seasonal descriptions are useful for planning, but they are not a substitute for a current forecast and advice from the team operating the ride.
            </p>
            <h3>High Atlas and Imlil</h3>
            <p>Prepare for changes between valley and mountain temperatures. Layering, a windproof shell and suitable footwear are valuable when a route includes high or exposed sections. Confirm any altitude-related considerations and what happens if the conditions are unsuitable for a planned stage.</p>
            <h3>Marrakech and Agafay</h3>
            <p>For warmer or open terrain, give particular attention to sun protection, hydration capacity and dust-resistant eyewear. The right amount of water, the expected shade and support access should be determined from the actual route rather than a general assumption about how long a day ride takes.</p>
            <h3>Sahara and southern Morocco</h3>
            <p>Ask for a remote-stage packing plan covering water, food, navigation, communication and mechanical support. Temperature can differ between daytime and night, so layers may still matter. Confirm how luggage, supplies and overnight arrangements are handled before deciding what you must carry on the bike.</p>
            <h3>Essaouira and the Atlantic Coast</h3>
            <p>Wind can affect comfort and effort along coastal routes. A light wind layer, eye protection and a flexible clothing plan may be useful. Ask how exposed the route is, whether surfaces are paved or unpaved and whether the day's plan changes according to conditions.</p>
          </section>

          <section id="packing-travel">
            <h2>Travel documents, personal items and luggage</h2>
            <p>
              Keep your passport, booking information, travel insurance details, emergency contacts, payment cards and any essential medication secure and accessible. Check that your travel insurance covers the activities planned, including the type of cycling and any remote or technical riding involved. Share any important health or dietary information with the organiser before the trip where relevant.
            </p>
            <p>
              For multi-day tours, pack a smaller day-riding bag separately from luggage intended for the overnight stop. Confirm the size and weight of luggage that can be transported, whether soft bags are preferred, if bike cases can be stored or transferred, and what you should keep with you while riding. A compact dry bag or waterproof pouch can help protect important items from dust or rain.
            </p>
            <p>
              Bring charging cables and a suitable power adapter for your devices, and consider a power bank if it is compatible with your travel arrangements. Store important documents and device backups safely. These small preparations can make travel days and multi-day logistics simpler.
            </p>
          </section>

          <section id="packing-provided">
            <h2>What to confirm is provided before you travel</h2>
            <p>
              Inclusions vary by tour, so ask for written confirmation instead of assuming that every trip includes the same equipment or services. A clear list also helps you pack lighter and plan your budget more accurately.
            </p>
            <ul className="article-checklist">
              <li><strong>Bike and fit:</strong> Bike category, frame size, pedals, helmet, setup time and test ride.</li>
              <li><strong>Tools and spares:</strong> Shared repair kit, common spare parts, mechanical help and support-vehicle access.</li>
              <li><strong>Water and meals:</strong> What is supplied, what you must carry, dietary arrangements and refill points.</li>
              <li><strong>Luggage:</strong> Daily carrying requirements, luggage-transfer limits, bike-case handling and overnight storage.</li>
              <li><strong>Navigation and communication:</strong> Who carries route information, whether phones work on route and what emergency plans exist.</li>
              <li><strong>Accommodation and transfers:</strong> What is included, where you will stay, how transfers work and what to bring for overnight stops.</li>
            </ul>
          </section>

          <section id="packing-checklist">
            <h2>Final packing checklist</h2>
            <p>Use this as a starting point, then adapt it to the itinerary and your organiser's instructions.</p>
            <ul className="article-checklist">
              <li><strong>Riding essentials:</strong> Helmet, gloves, eyewear, shoes, suitable kit, hydration system and personal medication.</li>
              <li><strong>Weather:</strong> Sun protection, a light wind or rain layer and warmer clothing appropriate to the season and elevation.</li>
              <li><strong>Bike and repairs:</strong> Confirmed bike setup, compatible tools and spares, tyre supplies and any specialist parts.</li>
              <li><strong>Food and water:</strong> Ride snacks, dietary items and enough capacity for the planned resupply gaps.</li>
              <li><strong>Travel:</strong> Passport, booking information, insurance details, emergency contacts, cards and charging cables.</li>
              <li><strong>Luggage:</strong> Separate day kit from overnight clothing, check transfer limits and label bags and bike cases.</li>
              <li><strong>Final checks:</strong> Test your clothing and equipment, review the forecast and confirm inclusions with your tour organiser.</li>
            </ul>
          </section>

          <section className="article-faq" id="packing-faq">
            <h2>Frequently asked questions</h2>
            {packingFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <div className="article-author-note">
            <strong>Planning note</strong>
            <p>This guide is a general checklist, not a substitute for your route-specific equipment list. Confirm current travel, airline, bike-battery, weather and support requirements with the relevant providers before departure.</p>
          </div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading"><div><p className="article-eyebrow">KEEP PREPARING</p><h2>Related cycling guides</h2></div><Link className="article-text-link" href="/journal">View all journal articles ↗</Link></div>
          <div className="article-related-grid">
            {packingRelatedArticles.map((article) => (
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
          <div><p className="article-eyebrow">READY TO PLAN YOUR RIDE?</p><h2>Get a packing list that matches your Morocco cycling tour.</h2><p>Tell us your destination, cycling style, travel dates and whether you will use your own bike. We can discuss the practical arrangements and what you should prepare before departure.</p></div>
          <div className="article-cta-actions"><Link className="article-button article-button-light" href="/contact?request=cycling-packing-and-equipment">Ask About Your Trip ↗</Link><Link className="article-button article-button-outline" href="/cycling-trips">Explore Cycling Tours</Link></div>
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
        .packing-article{background:#fbfaf7;color:#201f1c;min-height:100vh}
        .packing-article .article-shell{width:min(1180px,calc(100% - 48px));margin-inline:auto}
        .packing-article .article-breadcrumbs{display:flex;flex-wrap:wrap;gap:10px;padding-top:25px;padding-bottom:20px;font-size:12px;color:#777168}
        .packing-article .article-breadcrumbs a{color:inherit;text-decoration:none}.packing-article .article-breadcrumbs a:hover{color:#c65c35}
        .packing-article .article-hero{padding:44px 0 60px;display:grid;grid-template-columns:.95fr 1.05fr;gap:clamp(30px,5vw,68px);align-items:center}
        .packing-article .article-eyebrow{font-size:11px;line-height:1.5;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#e7663b;margin:0 0 16px}
        .packing-article .article-hero h1{font-size:clamp(42px,5.8vw,76px);line-height:.99;letter-spacing:-.055em;margin:0 0 22px;max-width:700px}
        .packing-article .article-deck{font-size:18px;line-height:1.8;color:#5d5953;margin:0;max-width:660px}
        .packing-article .article-meta{display:flex;flex-wrap:wrap;gap:18px;margin-top:25px;font-size:10px;font-weight:800;letter-spacing:.13em;color:#777168}
        .packing-article .article-hero-image{margin:0;position:relative;min-width:0}.packing-article .article-hero-image img{display:block;width:100%;height:clamp(320px,40vw,515px);object-fit:cover}.packing-article .article-hero-image figcaption{padding:10px 0 0;font-size:12px;color:#777168;line-height:1.6}
        .packing-article .article-main-grid{display:grid;grid-template-columns:220px minmax(0,760px);justify-content:space-between;gap:clamp(28px,5vw,75px);padding-top:20px;padding-bottom:90px}
        .packing-article .article-toc{align-self:start;position:sticky;top:30px;display:flex;flex-direction:column;gap:12px;padding:20px;border:1px solid #dedbd4;background:#fff}
        .packing-article .article-toc p{font-size:10px;font-weight:800;letter-spacing:.16em;color:#bd542f;margin:0 0 5px}.packing-article .article-toc a{font-size:13px;line-height:1.45;color:#514d47;text-decoration:none}.packing-article .article-toc a:hover{color:#bd542f}
        .packing-article .article-body{min-width:0;font-size:16px;color:#4e4a45}.packing-article .article-body p{margin:0 0 19px;line-height:1.9}.packing-article .article-body .article-lead{font-size:20px;line-height:1.8;color:#292723;margin-bottom:38px}
        .packing-article .article-body section{scroll-margin-top:35px;margin:0 0 38px}.packing-article .article-body h2{font-size:clamp(28px,3.2vw,38px);line-height:1.12;letter-spacing:-.035em;color:#211f1b;margin:0 0 17px}.packing-article .article-body h3{font-size:22px;line-height:1.2;margin:24px 0 12px;color:#211f1b}
        .packing-article .article-inline-image{margin:28px 0 24px}.packing-article .article-inline-image img{display:block;width:100%;max-height:430px;object-fit:cover}.packing-article .article-inline-image figcaption{padding-top:10px;color:#777168;font-size:12px;line-height:1.6}
        .packing-article .article-tip{margin:26px 0;padding:23px 25px;background:#eeeae2;border-left:3px solid #c65c35}.packing-article .article-tip strong{display:block;margin-bottom:6px;color:#25231f}.packing-article .article-tip p{margin:0}
        .packing-article .article-checklist{margin:10px 0 24px;padding-left:23px}.packing-article .article-checklist li{padding-left:5px;margin:0 0 12px;line-height:1.8}.packing-article .article-checklist strong{color:#24221e}
        .packing-article .article-body a{color:#bd542f}.packing-article .article-text-link{font-size:13px;font-weight:800;text-decoration:none;color:#bd542f}.packing-article .article-text-link:hover{text-decoration:underline}
        .packing-article .article-faq details{border-top:1px solid #dcd8d0;padding:18px 0}.packing-article .article-faq details:last-child{border-bottom:1px solid #dcd8d0}.packing-article .article-faq summary{cursor:pointer;list-style:none;font-size:16px;font-weight:700;color:#24221e}.packing-article .article-faq summary::-webkit-details-marker{display:none}.packing-article .article-faq summary:after{content:'+';float:right;color:#c65c35;font-size:22px}.packing-article .article-faq details[open] summary:after{content:'−'}.packing-article .article-faq details p{margin:13px 0 0;color:#625e57}
        .packing-article .article-author-note{padding:22px 24px;background:#fff;border:1px solid #e0ddd6}.packing-article .article-author-note strong{display:block;color:#24221e;margin-bottom:6px}.packing-article .article-author-note p{margin:0;font-size:14px}
        .packing-article .article-related{padding:76px 0 86px;background:#f0eee8}.packing-article .article-section-heading{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:30px}.packing-article .article-section-heading h2{font-size:clamp(30px,4vw,45px);line-height:1.1;letter-spacing:-.04em;margin:0}.packing-article .article-related-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}.packing-article .article-related-card{background:#fff;border:1px solid #e0ddd6;min-width:0}.packing-article .article-related-image{display:block;overflow:hidden}.packing-article .article-related-image img{display:block;width:100%;height:220px;object-fit:cover;transition:transform .3s ease}.packing-article .article-related-image:hover img{transform:scale(1.03)}.packing-article .article-related-content{padding:22px}.packing-article .article-related-content .article-eyebrow{font-size:9px;margin-bottom:10px}.packing-article .article-related-content h3{font-size:21px;line-height:1.2;margin:0 0 10px;letter-spacing:-.02em}.packing-article .article-related-content h3 a{color:inherit;text-decoration:none}.packing-article .article-related-content h3 a:hover{color:#bd542f}.packing-article .article-related-content>p:not(.article-eyebrow){color:#68645d;font-size:13px;line-height:1.7;margin:0 0 17px}
        .packing-article .article-cta{padding:65px 0;background:#23231f;color:#fff}.packing-article .article-cta-inner{display:flex;justify-content:space-between;align-items:center;gap:35px}.packing-article .article-cta .article-eyebrow{color:#f18b60}.packing-article .article-cta h2{font-size:clamp(32px,4vw,48px);line-height:1.05;letter-spacing:-.04em;max-width:600px;margin:0 0 14px}.packing-article .article-cta-inner>div:first-child>p:last-child{max-width:650px;color:#d1cdc5;margin:0;line-height:1.8}.packing-article .article-cta-actions{display:flex;flex-wrap:wrap;gap:12px;flex-shrink:0}.packing-article .article-button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 17px;font-size:12px;font-weight:800;text-decoration:none;transition:background .2s ease,color .2s ease}.packing-article .article-button-light{background:#e7663b;color:#fff!important}.packing-article .article-button-light:hover{background:#d6522a}.packing-article .article-button-outline{border:1px solid #8f8b82;color:#fff!important}.packing-article .article-button-outline:hover{background:#fff;color:#24221e!important}
        .packing-article .article-site-footer{background:#181815;color:#fff;padding-top:55px}.packing-article .article-footer-grid{display:grid;grid-template-columns:1.4fr repeat(3,minmax(0,1fr));gap:40px;padding-bottom:45px}.packing-article .article-footer-grid>div{display:flex;flex-direction:column;align-items:flex-start;gap:11px}.packing-article .article-footer-grid h3{font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:#e98258;margin:0 0 7px}.packing-article .article-footer-grid a:not(.article-brand){color:#d1cec7;font-size:13px;text-decoration:none}.packing-article .article-footer-grid a:not(.article-brand):hover{color:#fff}.packing-article .article-brand{display:flex;flex-direction:column;gap:12px;text-decoration:none;color:#fff;font-size:13px;font-weight:800;letter-spacing:.07em}.packing-article .article-brand img{width:185px;max-height:60px;object-fit:contain;object-position:left center}.packing-article .article-brand em{font-style:normal;color:#e98258;margin-left:5px}.packing-article .article-footer-brand p{max-width:290px;font-size:13px;line-height:1.8;color:#aaa69d;margin:6px 0 0}.packing-article .article-footer-bottom{display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:1px solid #393832;padding-top:18px;padding-bottom:20px;color:#a9a59d;font-size:11px}.packing-article .article-footer-bottom a{color:inherit;text-decoration:none}.packing-article .article-footer-bottom a:hover{color:#fff}
        @media(max-width:900px){.packing-article .article-hero{grid-template-columns:1fr;gap:28px;padding-top:22px}.packing-article .article-hero h1{max-width:850px}.packing-article .article-hero-image img{height:clamp(290px,58vw,480px)}.packing-article .article-main-grid{grid-template-columns:1fr;padding-top:0}.packing-article .article-toc{position:static;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 18px}.packing-article .article-toc p{grid-column:1/-1}.packing-article .article-related-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.packing-article .article-cta-inner{align-items:flex-start;flex-direction:column}.packing-article .article-footer-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:32px 22px}.packing-article .article-footer-brand{grid-column:1/-1}}
        @media(max-width:560px){.packing-article .article-shell{width:calc(100% - 34px)}.packing-article .article-hero{padding-top:20px;padding-bottom:40px}.packing-article .article-hero h1{font-size:43px}.packing-article .article-deck{font-size:16px}.packing-article .article-main-grid{padding-bottom:58px}.packing-article .article-body{font-size:15px}.packing-article .article-body .article-lead{font-size:18px}.packing-article .article-toc{padding:16px;grid-template-columns:1fr 1fr}.packing-article .article-related{padding:54px 0}.packing-article .article-section-heading{align-items:flex-start;flex-direction:column;gap:15px}.packing-article .article-related-grid{grid-template-columns:1fr}.packing-article .article-related-image img{height:235px}.packing-article .article-cta{padding:50px 0}.packing-article .article-cta-actions{width:100%;flex-direction:column}.packing-article .article-button{width:100%}.packing-article .article-footer-grid{grid-template-columns:1fr 1fr;gap:28px 16px}.packing-article .article-brand img{width:155px}.packing-article .article-footer-grid>div{min-width:0}.packing-article .article-footer-grid a:not(.article-brand){font-size:12px}.packing-article .article-footer-bottom{flex-direction:column;gap:7px}}
        @media(prefers-reduced-motion:reduce){.packing-article *,.packing-article *:before,.packing-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
