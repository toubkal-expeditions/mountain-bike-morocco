import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Berber Villages of the High Atlas: Cycling & Cultural Guide | Mountain Bike Morocco",
  description:
    "Discover how to cycle respectfully through Amazigh villages in Morocco's High Atlas. Learn about local customs, photography, village etiquette, responsible tourism and planning a thoughtful cultural cycling journey.",
  alternates: { canonical: "/journal/berber-villages-high-atlas-cycling-culture" },
  openGraph: {
    title: "Berber Villages of the High Atlas: Cycling & Cultural Guide",
    description:
      "A practical guide to respectful cycling through High Atlas villages, with advice on etiquette, photography, local businesses and route planning.",
    type: "article",
    images: ["/images/berber-villages-cycling-expeditions.jpg"],
  },
};

const relatedArticles = [
  {
    category: "DESTINATION GUIDE",
    title: "Complete High Atlas Mountains Cycling Guide",
    text: "Plan around altitude, changing weather, route logistics, villages and the cycling style that best suits your holiday.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/journal/complete-high-atlas-mountains-cycling-guide",
  },
  {
    category: "TRAIL GUIDE",
    title: "The Best MTB Trails in the Atlas Mountains",
    text: "Explore the variety of High Atlas terrain, from village tracks and rocky traverses to singletrack and long descents.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/journal/best-mtb-trails-atlas-mountains",
  },
  {
    category: "ROUTE INSPIRATION",
    title: "Marrakech to Atlas Mountains by Bike",
    text: "Understand how to combine Marrakech with mountain riding, including transfer choices, route styles and multi-day planning.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/journal/marrakech-to-atlas-mountains-by-bike",
  },
];

const faqs = [
  {
    question: "Is it appropriate to cycle through villages in the High Atlas?",
    answer:
      "It can be, provided the route is suitable and riders behave considerately. Use established routes, slow down near homes and shared paths, give pedestrians and animals plenty of room, and follow local guidance. Some narrow lanes or private paths may not be appropriate to ride through, so respect requests to dismount or use an alternative.",
  },
  {
    question: "Can I take photographs of local people?",
    answer:
      "Ask permission before photographing people, especially children, inside homes, or during personal or religious moments. A friendly request and acceptance of a refusal are important. Avoid treating people as background scenery and do not share identifiable images publicly without appropriate permission.",
  },
  {
    question: "What does the word Amazigh mean?",
    answer:
      "Amazigh refers to Indigenous peoples of North Africa, with Amazigh communities and languages represented across Morocco. The word Berber is also widely used in travel writing and in the title of this guide. Individual people and communities may have their own preferred descriptions, so listen to how people identify themselves.",
  },
  {
    question: "How can cyclists support local communities responsibly?",
    answer:
      "When practical, use locally run cafés, guesthouses, guides, transport and other services. Pay agreed prices, ask before entering private spaces, avoid leaving rubbish and do not promise purchases or tips that you do not intend to make. Responsible support means treating local residents as hosts and partners, not as part of a staged attraction.",
  },
  {
    question: "Should I bring gifts for children I meet along the route?",
    answer:
      "It is generally better not to distribute sweets, money or gifts spontaneously to children on the roadside. Such actions can create expectations and unintended effects. Ask a trusted local guide about appropriate ways to support community initiatives if you want to contribute.",
  },
  {
    question: "Can a cycling itinerary include time for cultural visits?",
    answer:
      "You can ask for an itinerary with realistic time for village stops, local meals, markets or a locally guided visit where appropriate. The availability and suitability of activities varies by location and date, so they should be agreed in advance rather than assumed. Leave room for rest and for residents' daily routines.",
  },
];

export default function BerberVillagesHighAtlasCyclingCulturePage() {
  return (
    <main className="berber-culture-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Berber Villages of the High Atlas: Cycling &amp; Cultural Guide</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">CULTURE &amp; TRAVEL · HIGH ATLAS</p>
          <h1>Berber Villages of the High Atlas: Cycling &amp; Cultural Guide</h1>
          <p className="article-deck">
            Cycling through the High Atlas is not only about trails and mountain views. Routes may pass through living Amazigh communities where people work, travel, welcome guests and follow the rhythms of everyday life. This guide explains how to plan a cultural cycling journey and move through villages with respect.
          </p>
          <div className="article-meta"><span>6 MIN READ</span><span>LOCAL CULTURE · RESPONSIBLE TRAVEL</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/berber-villages-cycling-expeditions.jpg" alt="Cycling along a mountain track near villages in the High Atlas" fetchPriority="high" />
          <figcaption>Allow time to experience the landscape thoughtfully and respect the people who live along the route.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#living-landscape">Villages as living places</a>
          <a href="#ride-respectfully">Ride respectfully</a>
          <a href="#greetings-etiquette">Greetings and etiquette</a>
          <a href="#photography">Photography and privacy</a>
          <a href="#local-economy">Support local businesses</a>
          <a href="#cultural-stops">Plan meaningful stops</a>
          <a href="#route-preparation">Route and trip preparation</a>
          <a href="#responsible-checklist">Responsible travel checklist</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            The High Atlas is a mountain landscape shaped by valleys, terraced fields, village lanes and daily journeys between homes, farms and markets. When cycling routes pass through these places, a considerate pace matters as much as the chosen trail. A good cultural ride gives riders time to notice the landscape while allowing local people to continue their day without being treated as part of a tourist display.
          </p>

          <section id="living-landscape">
            <h2>Understand the villages as living places</h2>
            <p>
              Many High Atlas routes connect small settlements spread across steep valleys and mountain slopes. Paths and lanes may be used by residents walking to work, children travelling to school, farmers moving tools or produce, and animals being led between places. A route that looks quiet on a map may still be an important everyday connection for the people who live there.
            </p>
            <p>
              The communities of Morocco are diverse, and local customs, language, architecture and daily routines vary by area. Amazigh communities are an important part of the country's cultural heritage. The word “Berber” remains common in travel writing, while “Amazigh” is widely used as a self-description and broader cultural term. Rather than assuming every village is the same, let local people and guides explain the place you are visiting.
            </p>
            <p>
              The most meaningful encounters often come from listening and taking time, not from trying to turn every stop into a formal activity. A short greeting, a respectful visit to a local café or a conversation arranged through a local guide can be more valuable than rushing between viewpoints.
            </p>
            <div className="article-tip">
              <strong>Travel thoughtfully</strong>
              <p>Remember that village lanes are not a private cycling trail. Slow down, make space for people and animals, and follow local advice about where to ride or walk the bike.</p>
            </div>
          </section>

          <section id="ride-respectfully">
            <h2>How to ride respectfully through villages</h2>
            <p>
              Reduce speed well before entering a settlement, especially where walls, bends or buildings limit visibility. Avoid riding quickly past doorways and people working close to the path. If a lane is narrow or busy, stop in a safe place and allow other users to pass before continuing.
            </p>
            <p>
              Keep the group together without blocking the road. Avoid sudden overtaking, loud group conversations or playing music through speakers. Give pack animals and livestock a wide berth and follow your guide's instructions; an animal can react unpredictably when startled, particularly on a narrow path.
            </p>
            <p>
              Use established tracks and respect signs, barriers and requests from residents. A route shown on an app does not automatically mean that every section is public or suitable for cycling. If someone asks riders to dismount, wait or take a different path, respond calmly and follow that direction.
            </p>
            <h3>Leave space for everyday life</h3>
            <p>
              Do not stop a large group in front of a home, doorway, water point or working area. Move to a place where people can pass freely, and keep equipment and bikes tidy rather than spreading across a shared lane. Small choices like these reduce disruption and make the visit more comfortable for everyone.
            </p>
          </section>

          <section id="greetings-etiquette">
            <h2>Greetings, hospitality and local etiquette</h2>
            <p>
              A friendly greeting is often a good beginning, but interactions should always follow the other person's lead. Your local guide can suggest a suitable greeting and explain when a longer conversation is welcome. In some situations, a brief hello and a smile are enough; people may be busy, working or simply prefer privacy.
            </p>
            <p>
              If you are invited into a home or business, listen to your host and ask what is appropriate. Customs around hospitality, shoes, food and shared spaces can differ, so avoid assuming the same practice applies everywhere. If you have dietary restrictions or other needs, explain them politely rather than expecting a host to anticipate them.
            </p>
            <p>
              Avoid making assumptions about people's income, beliefs, family life or views based on where they live. Cultural curiosity is welcome when it is expressed respectfully, but residents do not owe visitors explanations or conversation. A good guide can help create opportunities for genuine exchange without putting anyone under pressure.
            </p>
          </section>

          <section id="photography">
            <h2>Photography, privacy and social media</h2>
            <p>
              Ask permission before taking close-up photographs of people, particularly children. A person being visible on a public path does not mean they have agreed to become the subject of a photograph or online post. If someone declines, respect that answer without asking repeatedly or taking the picture anyway.
            </p>
            <p>
              Be especially careful around homes, family gatherings, religious spaces and moments of work or rest. Do not enter courtyards or private areas to get a better angle. When photographing a group or a local activity, ask your guide how to approach the request and whether any additional permission is needed.
            </p>
            <p>
              Before posting identifiable images publicly, consider whether the people shown would be comfortable with the image and its caption. Avoid revealing private details about a person's home or routine. Landscape photographs can communicate the beauty of a place without making an individual the focus of the story.
            </p>
          </section>

          <section id="local-economy">
            <h2>Support the local economy in practical ways</h2>
            <p>
              When suitable, choose locally run cafés, guesthouses, shops, guides and transport providers. These services can make a trip more connected to the places you ride through, while giving visitors a chance to learn from people who know the area. Ask what is available rather than assuming every settlement offers the same services or opening hours.
            </p>
            <p>
              Pay the agreed price, clarify what is included before a service begins and avoid bargaining over small amounts in a way that makes an interaction uncomfortable. If you want to buy something, do so because you value it rather than out of pressure. Never promise to return, send money or buy items later unless you genuinely intend to follow through.
            </p>
            <p>
              Responsible tourism does not mean distributing money or gifts indiscriminately. Giving sweets, cash or items directly to children on a route can create unwanted expectations and unequal interactions. If you would like to support a local initiative, ask a trusted guide or established community organisation about options that are appropriate and useful.
            </p>
            <div className="article-tip">
              <strong>Ask before you go</strong>
              <p>Discuss which village stops, locally run services or cultural visits are appropriate for your route. Availability varies, and any planned activity should be agreed with the people involved rather than assumed.</p>
            </div>
          </section>

          <section id="cultural-stops">
            <h2>Plan cultural stops without rushing the ride</h2>
            <p>
              A cultural stop works best when it fits naturally into the day's route. Depending on the location and arrangements, your ride might include a pause at a local café, a meal, a visit with a locally based guide or time to explore a settlement on foot. Not every village is a visitor attraction, and some places are best experienced from the established public route.
            </p>
            <p>
              Allow enough time for the stop, but stay flexible if the venue is closed, the route takes longer than expected or the people you hoped to meet are unavailable. Do not build a schedule around an unconfirmed invitation or assume that residents will be ready to welcome a group at a particular time.
            </p>
            <p>
              Cycling and cultural exploration have different rhythms. Leave room for breaks, water, food and conversation, and avoid pressuring a guide or host to fit an unrealistic timetable. On multi-day trips, a balanced itinerary can combine rewarding riding with opportunities to learn about local landscapes and everyday life.
            </p>
          </section>

          <section id="route-preparation">
            <h2>Choose a route and prepare for the region</h2>
            <p>
              Village routes can include paved lanes, dirt tracks, rough paths and sections of uneven terrain. Before choosing a ride, discuss the distance, climbing, surface, technical difficulty and how much time will be spent cycling versus transferring between areas. The route should reflect the whole group's riding ability and not assume that everyone is comfortable on narrow or rocky paths.
            </p>
            <p>
              Conditions change with elevation and season. Mornings at higher altitudes can be cold even when lower valleys are warm, and weather can affect the condition of unpaved tracks. Confirm the expected conditions and any route-access details close to departure rather than treating this guide as a live trail report.
            </p>
            <p>
              Carry the essentials for the planned ride: a properly fitted helmet, suitable clothing, water, snacks, sun protection and a light extra layer where needed. Ask what equipment, mechanical support, transfers and luggage handling are included. When travelling with a local guide, clarify how the group will communicate, regroup and handle a change in the day's plan.
            </p>
          </section>

          <section id="responsible-checklist">
            <h2>A responsible village-cycling checklist</h2>
            <p>Before and during your ride, keep these practical points in mind:</p>
            <ul className="article-checklist">
              <li><strong>Use suitable routes:</strong> follow established paths and local advice; respect private areas and requests to dismount.</li>
              <li><strong>Control your speed:</strong> slow down in villages and give residents, children, walkers and animals plenty of room.</li>
              <li><strong>Ask before photographing:</strong> respect refusals and take extra care with children, homes and private moments.</li>
              <li><strong>Support local services thoughtfully:</strong> agree on prices, pay fairly and avoid making promises you cannot keep.</li>
              <li><strong>Reduce your impact:</strong> carry rubbish out, avoid shortcuts and keep noise to a considerate level.</li>
              <li><strong>Stay flexible:</strong> allow time for stops and follow the guide's decisions if conditions or local circumstances change.</li>
            </ul>
            <p>
              The goal is to leave a positive impression and enjoy a richer journey. Respectful travel is not a performance or a checklist to complete; it is an ongoing habit of noticing who shares the route with you, asking rather than assuming, and accepting that local people set the terms of their own hospitality.
            </p>
            <div className="article-author-note">
              <strong>Planning note</strong>
              <p>This guide offers general cultural and trip-planning advice. Customs differ between places and individuals. Ask local guides for current, location-specific guidance, and follow the preferences of the people you meet.</p>
            </div>
          </section>

          <section className="article-faq" id="faq">
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
            <div><p className="article-eyebrow article-eyebrow-dark">KEEP EXPLORING</p><h2>More High Atlas and cultural guides</h2></div>
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
          <div>
            <p className="article-eyebrow">TRAVEL WITH RESPECT</p>
            <h2>Explore the High Atlas with curiosity and care.</h2>
            <p>Tell us what kind of riding interests you and whether you would like to include time in villages and local cultural stops. We can discuss route options, local guidance and practical arrangements for your dates.</p>
          </div>
          <div className="article-cta-actions">
            <Link className="article-button article-button-light" href="/contact?request=high-atlas-cultural-cycling-planning">Plan a cultural cycling trip ↗</Link>
            <Link className="article-button article-button-outline" href="/destinations/atlas-mountains">Explore the Atlas ↗</Link>
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
        .berber-culture-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
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
        @media(prefers-reduced-motion:reduce){.berber-culture-article *,.berber-culture-article *:before,.berber-culture-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
