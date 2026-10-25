import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Cycling Holidays in Morocco | Private Tours & Comfort",
  description:
    "Plan a luxury cycling holiday in Morocco with practical guidance on route pacing, private guiding, accommodation, luggage transfers, local experiences and what to confirm before booking.",
  alternates: { canonical: "/journal/luxury-cycling-holidays-morocco" },
  openGraph: {
    title: "Luxury Cycling Holidays in Morocco | Mountain Bike Morocco",
    description:
      "A practical guide to premium cycling holidays in Morocco, from private routes and comfortable stays to local experiences and thoughtful trip logistics.",
    type: "article",
    images: ["/images/luxury-cycling-holiday-trip-morocco.jpg"],
  },
};

const relatedArticles = [
  {
    category: "TRIP PLANNING",
    title: "Multi-Day Cycling Tours Planning",
    text: "Balance riding stages, accommodation, recovery, luggage and support for a smoother multi-day journey.",
    image: "/images/group-adventure-cycling-morocco.jpg",
    href: "/journal/planning-multi-day-cycling-tours",
  },
  {
    category: "DESTINATION GUIDE",
    title: "Complete High Atlas Mountains Cycling Guide",
    text: "Compare mountain regions, altitude, terrain and practical logistics before choosing an Atlas itinerary.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/journal/complete-high-atlas-mountains-cycling-guide",
  },
  {
    category: "SEASONAL CYCLING",
    title: "Best Time to Visit Morocco for Cycling",
    text: "Use season, region and elevation to help choose dates that fit the type of riding you want.",
    image: "/images/8-Day-Morocco-Cycling-Tour-Atlas-Mountains.jpg",
    href: "/journal/best-time-visit-morocco-cycling",
  },
];

const faqs = [
  {
    question: "What makes a cycling holiday in Morocco luxurious?",
    answer:
      "Luxury can mean a well-paced private itinerary, thoughtful accommodation choices, reliable transfers, luggage handling, attentive guiding and time to enjoy local food and landscapes. The right mix is personal, so explain what matters most to you and confirm precisely what is included before booking.",
  },
  {
    question: "Do luxury cycling holidays have to be easy rides?",
    answer:
      "No. A premium trip can include demanding climbs, technical trails or longer distances. Comfort comes from planning the route and support around your ability, recovery needs and preferences, not from removing the challenge. Be clear about your riding experience and the level of effort you enjoy.",
  },
  {
    question: "Which parts of Morocco are suitable for a luxury cycling trip?",
    answer:
      "The High Atlas, areas around Marrakech, the Agafay region, southern Morocco and parts of the Atlantic Coast can all offer different experiences. The best combination depends on your riding style, available time, travel season and how much you want to move between regions.",
  },
  {
    question: "Can the itinerary be private and customised?",
    answer:
      "You can enquire about a private itinerary built around your dates, group size, preferred cycling style, daily distance, accommodation preferences and places you want to visit. Routes, services and availability should be confirmed individually before you make final arrangements.",
  },
  {
    question: "What should be included in a luxury cycling package?",
    answer:
      "Ask for a written breakdown covering guiding, accommodation, meals, transfers, luggage transport, bike hire if required, support services, entry fees where applicable and exclusions. Also clarify group size, cancellation terms, payment schedule and what happens if weather or access changes the route.",
  },
  {
    question: "When is the best time for a premium cycling holiday in Morocco?",
    answer:
      "Timing depends on the regions and elevation in your itinerary. Mountain areas may be cool or changeable while lower and southern regions can be hot, particularly in summer. Choose dates around your intended routes and confirm expected conditions close to departure rather than relying on a single national season label.",
  },
];

export default function LuxuryCyclingHolidaysMoroccoPage() {
  return (
    <main className="luxury-cycling-morocco-article" id="top">
      <div className="article-breadcrumbs article-shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link><span>/</span><Link href="/journal">Journal</Link><span>/</span><span>Luxury Cycling Holidays in Morocco</span>
      </div>

      <header className="article-hero article-shell">
        <div className="article-hero-copy">
          <p className="article-eyebrow">PREMIUM CYCLING · MOROCCO</p>
          <h1>Luxury Cycling Holidays in Morocco</h1>
          <p className="article-deck">
            A premium cycling holiday is about more than a comfortable room after a ride. Thoughtful route planning, a pace that suits your group, reliable transfers, carefully chosen stays and time to experience Morocco beyond the bike can make the whole journey feel more rewarding. This guide explains what to consider and what to confirm before you book.
          </p>
          <div className="article-meta"><span>6 MIN READ</span><span>PRIVATE TRIPS · COMFORT · PLANNING</span></div>
        </div>
        <figure className="article-hero-image">
          <img src="/images/luxury-cycling-holiday-trip-morocco.jpg" alt="Cycling holiday through Morocco's landscapes with time to enjoy the journey" fetchPriority="high" />
          <figcaption>Great cycling and thoughtful hospitality work best when the route, pace and logistics are designed to fit the travellers.</figcaption>
        </figure>
      </header>

      <div className="article-main-grid article-shell">
        <aside className="article-toc">
          <p>IN THIS GUIDE</p>
          <a href="#luxury-means">What luxury means on a cycling trip</a>
          <a href="#choose-region">Choose the right region</a>
          <a href="#riding-style">Match the riding to you</a>
          <a href="#accommodation">Accommodation and recovery</a>
          <a href="#guiding-support">Guiding, transfers and support</a>
          <a href="#food-culture">Food and local experiences</a>
          <a href="#responsible-travel">Responsible travel</a>
          <a href="#budget-inclusions">Budget and inclusions</a>
          <a href="#booking-checklist">Booking checklist</a>
          <a href="#luxury-faqs">FAQs</a>
        </aside>

        <article className="article-body">
          <p className="article-lead">
            A luxury cycling holiday should make the practical parts of travel feel considered while preserving the joy of riding. For some people that means a private guide and flexible daily start times; for others it means comfortable accommodation, luggage transfers, good meals or space to enjoy the landscape at an unhurried pace. Define your priorities before choosing a package.
          </p>

          <section id="luxury-means">
            <h2>What does luxury mean on a cycling holiday?</h2>
            <p>
              Luxury is personal. It may involve staying in characterful properties, travelling with a private guide, keeping transfers simple, arranging luggage to move separately, or having time built into the itinerary for a village visit or a long lunch. It can also mean clear communication, well-maintained equipment and a realistic schedule that does not rush the group from one stop to the next.
            </p>
            <p>
              Comfort should complement the riding, not distract from it. A well-designed itinerary understands the effort of the day, the time needed to reach the next accommodation and the recovery that makes tomorrow enjoyable. Before booking, list the two or three things that matter most to you and ask how the itinerary will deliver them.
            </p>
            <div className="article-tip"><strong>Planning tip</strong><p>Ask for a day-by-day outline with riding time, transfers, accommodation, meals, luggage arrangements and included services clearly separated from optional extras.</p></div>
          </section>

          <section id="choose-region">
            <h2>Choose the right region for your trip</h2>
            <p>
              The High Atlas suits travellers who want mountain scenery, climbs, valleys and routes that can be shaped around road, gravel, MTB or E-MTB preferences. Areas around Marrakech and the Agafay landscape can work well for short rides or as a starting point before heading farther into the mountains. Southern Morocco offers a different scale and atmosphere, while parts of the Atlantic Coast bring coastal roads and rural tracks into the mix.
            </p>
            <p>
              Combining several regions can be rewarding, but travel time matters. A trip that changes accommodation every night may feel less relaxing than a plan with a few carefully chosen bases. Discuss how far you want to travel between riding areas and whether you prefer a single-region immersion or a route that links different landscapes.
            </p>
            <h3>Think about altitude and season</h3>
            <p>
              Mountain temperatures can be very different from those in Marrakech or the lower southern regions. Weather, pass access, daylight and road conditions all influence which routes make sense. The best itinerary for your dates may not be the same in every region, so confirm conditions and have a realistic alternative for exposed or unsuitable stages.
            </p>
          </section>

          <section id="riding-style">
            <h2>Match the riding style to your group</h2>
            <h3>Road cycling</h3>
            <p>Road trips may focus on sustained climbs, scenic paved routes or point-to-point stages. Ask about road surfaces, traffic, climbing totals, support-vehicle access and the distances expected each day.</p>
            <h3>Gravel cycling</h3>
            <p>Gravel itineraries can combine quiet roads, compact dirt and rougher tracks. The route should match the bike and tyres, with realistic plans for navigation, resupply and remoteness.</p>
            <h3>Mountain biking and E-MTB</h3>
            <p>MTB trips can include natural trails and technical terrain, while E-MTB assistance may make selected climbs more accessible. Neither removes the need for sound bike handling. Confirm the expected difficulty, bike type, charging plan and support arrangements in advance.</p>
            <p>For a private group, the least experienced or least confident rider should be considered when selecting the route. A premium experience should feel tailored, not pressured.</p>
          </section>

          <section id="accommodation">
            <h2>Accommodation, comfort and recovery</h2>
            <p>
              Accommodation can shape the rhythm of a cycling holiday as much as the route itself. Consider location, room arrangements, storage for bikes, opportunities to clean kit, meal timings and how much time is needed to reach the next day's start. If you prefer fewer hotel changes, ask whether a base-and-ride format could work for your chosen region.
            </p>
            <p>
              Rest and recovery belong in the schedule. Long climbs, technical trails, warm weather and consecutive riding days can all add to fatigue. Leave time for showers, food, stretching, bike checks and sleep. A thoughtful itinerary is not simply the fullest itinerary; it is one that balances memorable riding with enough room to enjoy each stage.
            </p>
          </section>

          <section id="guiding-support">
            <h2>Private guiding, transfers and practical support</h2>
            <p>
              Private guiding can help make daily decisions more responsive to weather, group energy and route preferences. Before confirming, ask about guide-to-rider arrangements, language, route briefing, navigation, mechanical support and the plan for illness, injury or an unexpected change in conditions. Do not assume every remote track is reachable by support vehicle.
            </p>
            <p>
              Clarify whether transfers, luggage transport, airport pickup, bike hire, helmets, spare parts and support vehicles are included. For E-MTB journeys, ask how batteries will be charged and what options exist where charging is limited. For long-distance road or gravel tours, understand what support is available between stops and how luggage reaches the next accommodation.
            </p>
            <h3>Keep expectations explicit</h3>
            <p>Ask for written details of daily distances, elevation, route surfaces, group size and what happens if someone wants a shorter day. Clear expectations help avoid surprises and give the organiser the information needed to plan well.</p>
          </section>

          <section id="food-culture">
            <h2>Food, culture and experiences between rides</h2>
            <p>
              Morocco's landscapes are only one part of the journey. Local food, markets, village life, architecture and time spent in different regions can make a cycling holiday feel distinctive. Rather than treating every stop as a quick photo opportunity, build in time to eat, rest and learn about the places you pass through.
            </p>
            <p>
              Tell the organiser about dietary needs, preferred meal timings and any cultural visits that matter to you. When visiting villages and private spaces, follow local guidance, ask before photographing people and keep riding considerate around pedestrians and animals. Supporting local businesses respectfully can make the trip more connected to the places you explore.
            </p>
          </section>

          <section id="responsible-travel">
            <h2>Responsible and lower-impact travel</h2>
            <p>
              Comfort and responsible travel can sit together. Respect trail access, avoid shortcuts that erode the ground, slow down near people and animals, and take rubbish back out of remote areas. Listen to local advice about routes and conditions, and remember that trails and village paths are part of working landscapes as well as recreational routes.
            </p>
            <p>
              Ask about ways your trip can support local guides, accommodation providers, restaurants and other services in the places you visit. Choose a realistic route rather than pushing through conditions that are unsafe or likely to damage trails. Thoughtful decisions can improve the experience for both visitors and host communities.
            </p>
          </section>

          <section id="budget-inclusions">
            <h2>Budget, package inclusions and value</h2>
            <p>
              A higher-priced package should be clear about what the extra cost covers. Compare private guiding, accommodation category, transfers, meals, luggage support, equipment, group size and flexibility rather than relying on the word “luxury” alone. Two itineraries with similar prices may include very different services.
            </p>
            <p>
              Ask for a written breakdown of included services, optional extras, payment terms, cancellation conditions and any additional charges likely to arise. Clarify what happens if weather, trail access or transport issues require a change of plan. Transparent information helps you judge whether a proposal matches your expectations.
            </p>
          </section>

          <section id="booking-checklist">
            <h2>Luxury cycling holiday booking checklist</h2>
            <ul className="article-checklist">
              <li><strong>Route and effort:</strong> daily distance, elevation, surface, technical level and alternatives.</li>
              <li><strong>Accommodation:</strong> property style, room arrangements, meal options, bike storage and location.</li>
              <li><strong>Support:</strong> guide arrangements, transfers, luggage, mechanical help and contingency plans.</li>
              <li><strong>Equipment:</strong> bike type and size, helmets, pedals, spares and any personal kit you should bring.</li>
              <li><strong>Inclusions:</strong> meals, transfers, entry fees, optional services, exclusions and additional costs.</li>
              <li><strong>Travel details:</strong> dates, group size, dietary requirements, fitness and any special requests.</li>
            </ul>
            <div className="article-tip"><strong>Before you confirm</strong><p>Make sure the itinerary, support services, accommodation and payment terms are clear in writing. If something is important to you, include it explicitly in the planning conversation.</p></div>
          </section>

          <section id="luxury-faqs" className="article-faq">
            <h2>Luxury cycling holidays in Morocco: FAQs</h2>
            {faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
          </section>

          <div className="article-author-note"><strong>Plan around your priorities</strong><p>Every group defines comfort differently. Share your preferred cycling style, dates, group size, target daily effort and accommodation preferences so the trip can be discussed around what matters most to you.</p></div>
        </article>
      </div>

      <section className="article-related">
        <div className="article-shell">
          <div className="article-section-heading"><div><p className="article-eyebrow article-eyebrow-dark">KEEP EXPLORING</p><h2>More guides for planning your ride.</h2></div><Link className="article-text-link" href="/journal">View all journal articles ↗</Link></div>
          <div className="article-related-grid">
            {relatedArticles.map((article) => <article className="article-related-card" key={article.href}><Link className="article-related-image" href={article.href}><img src={article.image} alt={article.title} loading="lazy" /></Link><div className="article-related-content"><p className="article-eyebrow article-eyebrow-dark">{article.category}</p><h3><Link href={article.href}>{article.title}</Link></h3><p>{article.text}</p><Link className="article-text-link" href={article.href}>Read article ↗</Link></div></article>)}
          </div>
        </div>
      </section>

      <section className="article-cta"><div className="article-shell article-cta-inner"><div><p className="article-eyebrow">PLAN YOUR MOROCCO RIDE</p><h2>Want a cycling holiday shaped around you?</h2><p>Tell us your preferred regions, cycling style, travel dates and comfort priorities. We can discuss the route options and the practical details that should be confirmed before booking.</p></div><div className="article-cta-actions"><Link className="article-button article-button-light" href="/contact?request=luxury-cycling-holiday">Plan your trip ↗</Link><Link className="article-button article-button-outline" href="/cycling-trips">Browse cycling tours</Link></div></div></section>

      <footer className="article-site-footer">
        <div className="article-shell article-footer-grid">
          <div className="article-footer-brand"><Link className="article-brand" href="/"><img src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" /><span>MOUNTAIN BIKE <em>MOROCCO</em></span></Link><p>Guided mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, trails and local culture at your own pace.</p></div>
          <div><h3>Explore</h3><Link href="/cycling-trips">All Cycling Tours</Link><Link href="/cycling-trips/mtb">Mountain Bike Tours</Link><Link href="/cycling-trips/e-mtb">E-MTB Tours</Link><Link href="/cycling-trips/gravel">Gravel Cycling</Link><Link href="/cycling-trips/road">Road Cycling</Link></div>
          <div><h3>Destinations</h3><Link href="/destinations/atlas-mountains">Atlas Mountains</Link><Link href="/destinations/imlil">Imlil Valley</Link><Link href="/destinations/toubkal">Mount Toubkal</Link><Link href="/destinations/marrakech">Marrakech</Link><Link href="/destinations">All Destinations</Link></div>
          <div><h3>Let&apos;s Plan</h3><Link href="/about">About Us</Link><Link href="/events">Events</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link><Link href="/contact">Plan Your Trip</Link></div>
        </div>
        <div className="article-shell article-footer-bottom"><span>© 2026 Mountain Bike Morocco</span><span>Morocco cycling adventures, thoughtfully planned.</span></div>
      </footer>

      <style>{`
        .luxury-cycling-morocco-article{background:#fbfaf7;color:#201f1c;font-family:Arial,Helvetica,sans-serif;line-height:1.65}
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
        @media(prefers-reduced-motion:reduce){.luxury-cycling-morocco-article *,.luxury-cycling-morocco-article *:before,.luxury-cycling-morocco-article *:after{scroll-behavior:auto!important;transition:none!important}}
      `}</style>
    </main>
  );
}
