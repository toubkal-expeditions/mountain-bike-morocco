import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Mountain Bike Morocco | Cycling Tours & Adventures",
  description:
    "Meet MTB Morocco, a local cycling team based at the foot of the High Atlas. Explore our MTB, E-MTB, gravel and road tours, bike fleet, responsible travel approach, safety support and verified rider reviews.",
};

const cyclingStyles = [
  {
    number: "01",
    label: "TECHNICAL TRAILS · MOUNTAIN SCENERY",
    title: "Mountain Bike Tours",
    description:
      "Follow mountain paths, rocky descents and rural tracks through Morocco’s varied terrain. We help match the route, technical difficulty, daily riding time and support plan to the people taking part, whether the goal is a focused MTB break or a longer trail journey.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
    href: "/cycling-trips/mtb",
    action: "Explore MTB Tours",
  },
  {
    number: "02",
    label: "ELECTRIC ASSIST · BIGGER DAYS OUT",
    title: "E-MTB Tours",
    description:
      "Electric mountain bikes can help riders manage longer climbs and explore more of a region. An E-MTB itinerary still needs thoughtful planning around terrain, battery range, charging, bike fit and technical support, so the ride remains practical as well as enjoyable.",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/cycling-trips/e-mtb",
    action: "Explore E-MTB Tours",
  },
  {
    number: "03",
    label: "QUIET TRACKS · LONG DISTANCES",
    title: "Gravel Cycling",
    description:
      "Gravel journeys connect backroads, village lanes and unpaved tracks, often taking riders away from busier routes. We consider surfaces, distance, resupply, luggage, navigation and support when shaping a route to suit a group’s goals and experience.",
    image: "/images/gravel-cycling-morocco.jpg",
    href: "/cycling-trips/gravel",
    action: "Explore Gravel Tours",
  },
  {
    number: "04",
    label: "OPEN ROADS · STAGE RIDING",
    title: "Road Cycling",
    description:
      "For riders who love steady kilometres, challenging climbs and changing landscapes, Morocco offers a rewarding variety of road rides. A good road programme balances stage length, elevation, traffic conditions, recovery time and the level of support agreed for the trip.",
    image: "/images/road-cycling-morocco.jpg",
    href: "/cycling-trips/road",
    action: "Explore Road Tours",
  },
];

const destinations = [
  {
    title: "Atlas Mountains & Imlil",
    text: "Mountain villages, high passes, valley tracks and views towards the High Atlas. Routes should be chosen with altitude, weather, terrain and rider experience in mind.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Marrakech & Agafay",
    text: "A practical starting point for day rides, rocky desert scenery and journeys towards the foothills. The right route depends on the season, surface conditions and how much time you have.",
    image: "/images/Agafay-desert-morocco.jpg",
    href: "/destinations/marrakech",
  },
  {
    title: "Sahara & Southern Morocco",
    text: "Longer expeditions can combine remote-feeling landscapes, desert-edge tracks and changing stages. Heat, water, support vehicles and overnight arrangements need careful planning.",
    image: "/images/south-morocco-cycling-expedition.jpg",
    href: "/destinations/sahara-desert",
  },
  {
    title: "Atlantic Coast",
    text: "Coastal roads and rural tracks bring a different rhythm to a cycling holiday. Wind, surface type, daily mileage and accommodation all influence the route plan.",
    image: "/images/atlantic-coast-cycling-tour-morocco.jpg",
    href: "/destinations/atlantic-coast",
  },
];

const principles = [
  {
    number: "01",
    title: "Local guides who know the terrain",
    text: "Mountain weather, trail surfaces and route options can change quickly. Local guiding and thoughtful route choices help the group make sensible decisions based on the conditions, rider ability and goals for the day.",
  },
  {
    number: "02",
    title: "A plan for remote riding",
    text: "Before heading into mountain valleys or quieter tracks, discuss the planned route, expected riding time, weather, water, meeting points and what happens if the group needs to shorten or change the ride.",
  },
  {
    number: "03",
    title: "Mechanical support that travels with you",
    text: "A support vehicle, tools and common spare parts help address many everyday mechanical problems. The exact support arrangement depends on the tour and should be confirmed as part of your trip briefing.",
  },
  {
    number: "04",
    title: "Clear communication and preparation",
    text: "Riders should share relevant experience and concerns before departure, wear a properly fitted helmet, carry the agreed essentials and have suitable travel insurance for their planned cycling activities.",
  },
];

const whyRideWithUs = [
  {
    number: "01",
    title: "Local knowledge, not just a route file",
    text: "The Atlas is our home riding region. Local guides help you understand the terrain, choose an appropriate pace and make the most of the villages, valleys and landscapes along the way.",
  },
  {
    number: "02",
    title: "A ride matched to your group",
    text: "We encourage an honest conversation about fitness, handling skills, preferred distances and the type of riding you enjoy. The aim is to build a trip around the riders—not force everyone into the same itinerary.",
  },
  {
    number: "03",
    title: "Support beyond the saddle",
    text: "Transfers, luggage movement, refreshment stops and mechanical assistance can make a big difference on a multi-day trip. Confirm the exact services included in your chosen itinerary before booking.",
  },
  {
    number: "04",
    title: "Morocco experienced at human pace",
    text: "Ride between mountain villages, rocky plateaus, desert-edge landscapes and the coast. A cycling journey leaves room to notice the country’s changing scenery and everyday life along the way.",
  },
];

const riderReviews = [
  {
    quote: "From the initial inquiry to the planning and trip itself, the team delivered. Mustapha’s route planning and guiding skills are truly outstanding.",
    name: "Bret M",
    date: "Jan 2026",
  },
  {
    quote: "The whole team exceeded expectations in every way. Loved every minute of our 8-day tour. MTB welcomed us like family.",
    name: "Lara K",
    date: "Apr 2026",
  },
  {
    quote: "MTB Morocco is a professional organization that worked hard to meet and exceed my expectations. I recommend them 100%.",
    name: "IEHansel33",
    date: "Sep 2025",
  },
  {
    quote: "They set the riding route well to our level. We enjoyed mountain scenery, small towns and valleys, with a friendly, hospitable team.",
    name: "Kieran H",
    date: "Apr 2026",
  },
  {
    quote: "The entire experience was seamlessly organized, from 4x4 support during transfers to lunch and snacks. Exploring the High Atlas was a great experience!",
    name: "Vera W",
    date: "Apr 2026",
  },
  {
    quote: "They were thorough, detailed, responsive, personable, and informative. I felt well taken care of in their hands.",
    name: "Stella D",
    date: "Apr 2026",
  },
];

const tripAdvisorUrl =
  "https://www.tripadvisor.com/Attraction_Review-g293734-d7318443-Reviews-Mountain_Bike_Morocco-Marrakech_Marrakech_Safi.html";

const faqs = [
  {
    question: "What kinds of cycling tours can I explore?",
    answer:
      "The website is organised around mountain biking, E-MTB, gravel and road cycling. Depending on the route and trip format, options can include day rides, multi-day holidays, private groups and longer cycling expeditions. Ask about the specific route, services and availability for your dates.",
  },
  {
    question: "Do I need to be an expert cyclist?",
    answer:
      "Not every cycling holiday requires the same level of experience. The right option depends on fitness, handling skills, route surface and daily distance. Share an honest picture of your riding experience so the proposed trip can be assessed against your needs.",
  },
  {
    question: "Can a tour be customised for my group?",
    answer:
      "You can enquire about private or tailored trips. Useful details include your dates, group size, preferred cycling style, experience, target distance and the places you hope to visit. A final programme depends on route conditions and the services that can be arranged.",
  },
  {
    question: "Can I start a ride from Marrakech?",
    answer:
      "Marrakech can be a useful base for rides in the surrounding countryside, the Agafay area and journeys towards the Atlas Mountains. The best starting point and transfers depend on the selected route and duration.",
  },
  {
    question: "Are all tours guaranteed to run on the dates I choose?",
    answer:
      "No. Availability, route access and seasonal conditions need to be checked for the requested dates. Treat a trip as confirmed only after the itinerary, services, price and booking arrangements have been agreed directly.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="cycling-listing about-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/mountain-bike-morocco-hero.jpg"
            alt="Cycling adventure through the mountain landscapes of Morocco"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">ABOUT US · CYCLING HOLIDAYS · MOROCCO</p>
            <h1>Discover Morocco One Ride at a Time</h1>
            <p className="cl-hero__intro">
              Mountain Bike Morocco brings together ideas for exploring the country by bike—from mountain trails and electric-assisted adventures to gravel tracks, open roads and longer journeys towards the desert. Our aim is to help you find a ride that fits your interests, experience and travel plans.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="/cycling-trips">
                Explore Cycling Tours
              </Link>
              <Link className="cl-button cl-button--outline" href="/contact">
                Talk About Your Trip
              </Link>
            </div>
            <div className="cl-hero__meta">
              <span>MTB &amp; E-MTB</span>
              <span>Gravel &amp; Road</span>
              <span>From Day Rides to Expeditions</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">WHO WE ARE</p>
            <h2>A cycling holiday should feel personal, not one-size-fits-all.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              Mountain Bike Morocco is built around a simple idea: the best way to discover a place is to choose the right journey through it. Morocco offers a remarkable mix of high mountains, dry plateaus, rural valleys, coastal landscapes and desert regions. Cycling makes it possible to experience those changes at a human pace, with time to notice the terrain and places along the way.
            </p>
            <p>
              We present different ways to ride so you can compare the kind of experience you want. Some travellers are looking for technical mountain trails. Others prefer the extra range offered by an electric mountain bike, the quieter routes of gravel cycling, or a road itinerary built around climbs and longer stages. The best starting point is an honest conversation about your ability, interests, dates and expectations.
            </p>
            <p>
              Our pages are designed to help you explore possible tours and destinations, understand what each style involves, and prepare useful questions before making an enquiry. Specific routes, dates, inclusions, equipment and support arrangements should always be confirmed for the trip you choose.
            </p>
            <Link className="cl-text-link" href="/contact">
              Tell us what kind of ride you have in mind <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="about-page__why-section">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">WHY RIDE WITH US</p>
                <h2>Local knowledge, carefully planned routes, and support beyond the saddle.</h2>
              </div>
              <p>
                A memorable cycling holiday is built from more than beautiful scenery. It needs the right route, honest advice, good preparation and a team that understands how the day should work for the people riding it.
              </p>
            </div>
            <div className="about-page__why-grid">
              {whyRideWithUs.map((item) => (
                <article className="about-page__why-card" key={item.number}>
                  <span className="about-page__number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page__detail-section" id="equipment-fleet">
          <div className="cl-wrap about-page__split">
            <div className="about-page__split-image">
              <img
                src="/images/e-mtb-tour-morocco.jpg"
                alt="A mountain bike ready for a cycling journey through Morocco"
                loading="lazy"
              />
            </div>
            <div className="about-page__split-copy">
              <p className="cl-eyebrow cl-eyebrow--dark">EQUIPMENT &amp; FLEET</p>
              <h2>Well-maintained bikes, real spares, on-trail repairs.</h2>
              <p>
                A bike should be ready for the terrain before the ride begins. On mountain routes, small mechanical issues can become major interruptions if there is no plan to deal with them. Bike checks, correct fit and the right tools are part of sensible preparation—not optional extras.
              </p>
              <p>
                Our tour planning includes discussing the bike you will ride, size and fit, the type of terrain, and what support is available on your chosen itinerary. Mechanical support and spare parts help the team respond to common trail-side problems, while a support vehicle can assist where the route and tour format allow.
              </p>
              <p>
                If you need a supplied bike, tell us your height, preferred discipline and riding experience when enquiring. Bike models, sizes, E-MTB availability and the exact equipment included should be confirmed for your dates. If you bring your own bike, arrange a service before travelling and let us know about any specialist parts it may require.
              </p>
              <Link className="cl-button cl-button--dark" href="/contact?request=equipment-and-bike-availability">
                Ask About Bikes &amp; Equipment
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-editorial">
          <div className="cl-editorial__image">
            <img
              src="/images/group-cycling-atlas-mountains.jpg"
              alt="Cyclists riding together through the Atlas region of Morocco"
              loading="lazy"
            />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">WHY TRAVEL BY BIKE?</p>
            <h2>See the spaces between the destinations.</h2>
            <p>
              A cycling trip is not only about reaching a summit, crossing a valley or finishing a stage. It is also about the changing light on the landscape, the feel of a road as it climbs, the contrast between a mountain morning and a warm desert afternoon, and the small stops that make a journey memorable.
            </p>
            <p>
              Morocco rewards a flexible approach. A route that looks straightforward on a map can feel very different once elevation, road surface, wind, heat and distance are considered. We encourage travellers to plan around the conditions and people taking part—not just the number of kilometres they hope to cover.
            </p>
            <p>
              Whether you have a few hours or several days, start with the experience you want and build the practical details around it.
            </p>
            <Link className="cl-button cl-button--dark" href="/destinations">
              Explore Moroccan Destinations
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="cycling-styles">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">WAYS TO RIDE</p>
                <h2>Four cycling styles. A country full of different terrain.</h2>
              </div>
              <p>
                Pick the discipline that matches your interests and then compare routes, trip length and the support that may be needed. Not every style suits every destination, so the final choice should reflect the terrain and your experience.
              </p>
            </div>
            <div className="cl-tour-grid">
              {cyclingStyles.map((style) => (
                <article className="cl-tour-card" key={style.number}>
                  <Link className="cl-tour-card__image-link" href={style.href} aria-label={style.title}>
                    <img className="cl-tour-card__image" src={style.image} alt={style.title} loading="lazy" />
                    <span className="cl-tour-card__number">{style.number}</span>
                  </Link>
                  <div className="cl-tour-card__body">
                    <p className="cl-card-label">{style.label}</p>
                    <h3>{style.title}</h3>
                    <p>{style.description}</p>
                    <div className="cl-tour-card__actions">
                      <Link className="cl-button cl-button--dark" href={style.href}>{style.action}</Link>
                      <Link className="cl-button cl-button--gold" href="/contact">Ask a Question</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cl-dark-band">
          <div className="cl-wrap cl-dark-band__inner">
            <div>
              <p className="cl-eyebrow">A ROUTE FOR YOUR RIDING STYLE</p>
              <h2>From an easy-going day out to a demanding multi-day expedition.</h2>
            </div>
            <div>
              <p>
                Distance alone does not tell you how difficult a ride will be. Elevation, altitude, technical terrain, heat, surface quality and the amount of support all matter. When comparing tours, look beyond the headline distance and ask how the actual riding days are expected to feel.
              </p>
              <Link className="cl-button cl-button--gold" href="/contact">
                Help Me Choose a Tour
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">WHERE WE RIDE</p>
              <h2>Explore Morocco’s changing landscapes.</h2>
            </div>
            <p>
              Every region brings different scenery and practical considerations. Browse the destination pages for ideas, then confirm route details and availability for your preferred dates.
            </p>
          </div>
          <div className="cl-region-grid">
            {destinations.map((destination) => (
              <article className="cl-region-card" key={destination.title}>
                <Link className="cl-region-card__image-wrap" href={destination.href} aria-label={destination.title}>
                  <img src={destination.image} alt={destination.title} loading="lazy" />
                </Link>
                <div className="cl-region-card__body">
                  <h3>{destination.title}</h3>
                  <p>{destination.text}</p>
                  <Link className="cl-text-link" href={destination.href}>
                    Explore destination <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-page__responsible-section">
          <div className="cl-wrap about-page__responsible-grid">
            <div className="about-page__responsible-copy">
              <p className="cl-eyebrow cl-eyebrow--dark">RESPONSIBLE TOURISM</p>
              <h2>Ride with respect for the places and people that make Morocco special.</h2>
              <p>
                The best cycling journeys leave more than a photograph behind. We encourage riders to treat mountain trails, village lanes, farmland, coastlines and desert environments with care, and to remember that these landscapes are part of people’s everyday lives.
              </p>
              <p>
                Responsible travel starts with small decisions: follow the guide’s route advice, stay on appropriate tracks, carry litter out, use water thoughtfully, ask before photographing people and respect homes, livestock, crops and local customs. Where possible, choose local services and make time to learn from the communities along the route.
              </p>
              <p>
                Group size, access and seasonal conditions can affect how and where a ride should take place. We encourage flexible planning and respectful behaviour so the experience works for riders and the places they visit.
              </p>
            </div>
            <div className="about-page__responsible-image">
              <img
                src="/images/group-cycling-atlas-mountains.jpg"
                alt="Cyclists exploring a rural route in Morocco’s Atlas Mountains"
                loading="lazy"
              />
              <div className="about-page__image-caption">
                <span>RIDE CONSIDERATELY</span>
                <strong>Respect the trail. Respect the community.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">SAFETY &amp; SUPPORT</p>
                <h2>Riding remote mountains demands a serious safety culture.</h2>
              </div>
              <p>
                Remote routes call for preparation, clear communication and sensible decisions on the day. Our guides and support planning are there to help the group manage the real conditions of riding in mountains and rural areas.
              </p>
            </div>
            <div className="cl-why-grid">
              {principles.map((principle) => (
                <article key={principle.number}>
                  <span>{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-reviews" id="reviews">
          <div className="cl-wrap">
            <div className="about-reviews__header">
              <p className="cl-eyebrow cl-eyebrow--dark">TRUSTED BY RIDERS WORLDWIDE</p>
              <h2>Real reviews from real cyclists</h2>
              <div className="about-reviews__score" aria-label="5.0 out of 5 stars on TripAdvisor">
                <strong>5.0</strong>
                <span className="about-reviews__stars" aria-hidden="true">★★★★★</span>
              </div>
              <p className="about-reviews__summary">17 Google reviews · 142 TripAdvisor reviews</p>
              <a
                className="about-reviews__all-link"
                href={tripAdvisorUrl}
                target="_blank"
                rel="noreferrer"
              >
                Read all 142 reviews on TripAdvisor <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="about-reviews__grid">
              {riderReviews.map((review) => (
                <article className="about-review-card" key={review.name}>
                  <div className="about-review-card__topline">
                    <span className="about-reviews__stars" aria-label="5 out of 5 stars">★★★★★</span>
                    <a href={tripAdvisorUrl} target="_blank" rel="noreferrer" className="about-review-card__source">
                      TripAdvisor <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                  <span className="about-review-card__quote-mark" aria-hidden="true">“</span>
                  <blockquote>{review.quote}</blockquote>
                  <p className="about-review-card__author">
                    <strong>{review.name}</strong><span> · {review.date}</span>
                  </p>
                </article>
              ))}
            </div>
            <p className="about-reviews__note">
              Review excerpts are shortened for display. Names and dates are shown as listed in the review source; read the full reviews on TripAdvisor.
            </p>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">HOW TO GET STARTED</p>
              <h2>Let’s turn your first idea into a practical plan.</h2>
            </div>
            <p>
              You do not need a completed itinerary to start an enquiry. A few details help narrow the options and identify the questions that need to be resolved before a trip is confirmed.
            </p>
          </div>
          <div className="cl-steps">
            <article><span>STEP 01</span><h3>Tell us about your riding</h3><p>Share your preferred cycling style, experience, fitness, group size and the kind of terrain you enjoy.</p></article>
            <article><span>STEP 02</span><h3>Choose a region and timeframe</h3><p>Let us know when you hope to travel, how many days you have and which Moroccan landscapes interest you most.</p></article>
            <article><span>STEP 03</span><h3>Review the trip details</h3><p>Ask about the route, daily distances, equipment, accommodation, transfers, support, inclusions and availability before confirming.</p></article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">ABOUT MOUNTAIN BIKE MOROCCO</p>
              <h2>Frequently asked questions</h2>
              <p>Use these answers as a starting point, and contact us to discuss the details of a particular tour.</p>
              <Link className="cl-text-link" href="/contact">Ask us a question <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="cl-faq-list">
              {faqs.map((faq, index) => (
                <details className="cl-faq-item" key={faq.question} open={index === 0}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cl-final-cta">
          <img
            src="/images/group-cycling-atlas-mountains.jpg"
            alt="Cycling group riding through Morocco’s mountain landscape"
            loading="lazy"
          />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR MOROCCO CYCLING STORY STARTS HERE</p>
            <h2>Tell us what you want from your next ride.</h2>
            <p>
              Whether you are planning a trail-focused MTB break, an E-MTB journey, a gravel expedition, a road cycling holiday or a private group trip, start with your preferred dates, experience and ideas. We can then discuss suitable options and the practical details that need to be confirmed.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="/contact?request=plan-cycling-trip">
                Plan Your Trip
              </Link>
              <Link className="cl-button cl-button--outline" href="/cycling-trips">
                View All Cycling Tours
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer cycling-listing__footer">
        <div className="page-width footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <img className="brand__logo" src="/images/mountain-bike-morocco-logo.png" alt="Mountain Bike Morocco" />
              <span>MOUNTAIN BIKE <em>MOROCCO</em></span>
            </Link>
            <p>Guided mountain biking, E-MTB, gravel and road cycling experiences across Morocco. Discover the landscapes, trails and local culture at your own pace.</p>
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
            <Link href="/destinations/imlil-toubkal">Imlil &amp; Toubkal</Link>
            <Link href="/destinations/marrakech">Marrakech</Link>
            <Link href="/destinations/agafay-desert">Agafay Desert</Link>
            <Link href="/destinations">All Destinations</Link>
          </div>
          <div>
            <h3>Let's Plan</h3>
            <Link href="/about">About Us</Link>
            <Link href="/events">Events</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Plan Your Trip</Link>
          </div>
        </div>
        <div className="page-width footer-bottom">
<span>© 2026 Mountain Bike Morocco</span>          <span>Morocco cycling adventures, thoughtfully planned.</span>
        </div>
      </footer>

      <style>{`
        .about-page__why-section {
          padding: clamp(76px, 8vw, 116px) 0;
          background: #f1eee8;
        }
        .about-page__why-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          margin-top: 38px;
        }
        .about-page__why-card {
          min-height: 255px;
          padding: 27px 25px 29px;
          border: 1px solid rgba(32, 35, 29, 0.13);
          background: #fffefa;
        }
        .about-page__number {
          display: inline-block;
          margin-bottom: 25px;
          color: #c8794e;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .16em;
        }
        .about-page__why-card h3 {
          margin-bottom: 13px;
          font-size: clamp(19px, 1.8vw, 24px);
          line-height: 1.2;
        }
        .about-page__why-card p {
          margin: 0;
          color: #55584f;
          font-size: 15px;
          line-height: 1.8;
        }
        .about-page__detail-section {
          padding: clamp(76px, 9vw, 126px) 0;
          background: #fffefa;
        }
        .about-page__split {
          display: grid;
          grid-template-columns: minmax(0, .94fr) minmax(0, 1.06fr);
          align-items: center;
          gap: clamp(34px, 6vw, 86px);
        }
        .about-page__split-image {
          min-height: 520px;
          overflow: hidden;
          background: #d9d6cc;
        }
        .about-page__split-image img {
          width: 100%;
          height: 100%;
          min-height: 520px;
          object-fit: cover;
        }
        .about-page__split-copy h2,
        .about-page__responsible-copy h2 {
          max-width: 660px;
          margin-bottom: 22px;
          font-size: clamp(34px, 4.2vw, 56px);
          letter-spacing: -.055em;
          line-height: 1.08;
        }
        .about-page__split-copy p:not(.cl-eyebrow),
        .about-page__responsible-copy p:not(.cl-eyebrow) {
          color: #55584f;
          font-size: 16px;
          line-height: 1.9;
        }
        .about-page__split-copy .cl-button { margin-top: 8px; }
        .about-page__responsible-section {
          padding: clamp(76px, 9vw, 126px) 0;
          background: #f1eee8;
        }
        .about-page__responsible-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, .88fr);
          align-items: center;
          gap: clamp(38px, 7vw, 96px);
        }
        .about-page__responsible-image {
          position: relative;
          min-height: 490px;
          overflow: hidden;
          background: #d9d6cc;
        }
        .about-page__responsible-image img {
          width: 100%;
          height: 100%;
          min-height: 490px;
          object-fit: cover;
        }
        .about-page__image-caption {
          position: absolute;
          right: 18px;
          bottom: 18px;
          left: 18px;
          display: grid;
          gap: 6px;
          padding: 18px 21px;
          background: rgba(24, 29, 23, .88);
          color: #fff;
        }
        .about-page__image-caption span {
          color: #f1bd99;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .18em;
        }
        .about-page__image-caption strong { font-size: 18px; line-height: 1.3; }
        .about-reviews {
          padding: clamp(75px, 8.5vw, 118px) 0;
          background: #f8f7f5;
        }
        .about-reviews__header {
          max-width: 760px;
          margin: 0 auto 54px;
          text-align: center;
        }
        .about-reviews__header .cl-eyebrow {
          justify-content: center;
          margin-bottom: 18px;
          color: #e65d32;
        }
        .about-reviews__header .cl-eyebrow::before { display: none; }
        .about-reviews__header h2 {
          margin: 0 auto 24px;
          color: #201e1c;
          font-size: clamp(38px, 5.2vw, 62px);
          letter-spacing: -.06em;
          line-height: 1.04;
        }
        .about-reviews__score {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          margin-bottom: 7px;
        }
        .about-reviews__score strong {
          color: #e65d32;
          font-size: 27px;
          font-weight: 600;
        }
        .about-reviews__stars {
          color: #e38d17;
          font-size: 19px;
          letter-spacing: 1px;
          white-space: nowrap;
        }
        .about-reviews__summary { margin: 0 0 18px; color: #79756f; font-size: 15px; }
        .about-reviews__all-link {
          display: inline-flex;
          min-height: 43px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 10px 21px;
          border: 1px solid #ddd9d3;
          border-radius: 999px;
          background: #fff;
          color: #27231f;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          transition: background .2s ease, border-color .2s ease;
        }
        .about-reviews__all-link:hover { border-color: #c8794e; background: #fff8f2; }
        .about-reviews__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: start;
          gap: 22px;
        }
        .about-review-card {
          min-width: 0;
          padding: 26px 27px 24px;
          border: 1px solid #e1ddd8;
          border-radius: 5px;
          background: #fff;
          box-shadow: 0 2px 7px rgba(25, 21, 16, .045);
        }
        .about-review-card__topline { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
        .about-review-card__topline .about-reviews__stars { font-size: 18px; }
        .about-review-card__source { color: #716c66; font-size: 12px; font-weight: 700; white-space: nowrap; }
        .about-review-card__quote-mark { display: block; height: 30px; margin-top: 11px; color: #27231f; font-family: Georgia, serif; font-size: 40px; font-weight: 700; line-height: 1; }
        .about-review-card blockquote { margin: 0 0 19px; color: #4d4945; font-size: 16px; line-height: 1.72; }
        .about-review-card__author { margin: 0; color: #89817a; font-size: 14px; line-height: 1.5; }
        .about-review-card__author strong { color: #24211e; font-weight: 700; }
        .about-reviews__note { margin: 24px 0 0; color: #79756f; font-size: 12px; text-align: center; }
        @media (max-width: 1000px) {
          .about-page__why-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .about-reviews__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .about-page__split { gap: 34px; }
          .about-page__split-image, .about-page__split-image img { min-height: 430px; }
          .about-page__responsible-grid { gap: 34px; }
          .about-page__responsible-image, .about-page__responsible-image img { min-height: 430px; }
        }
        @media (max-width: 680px) {
          .about-page__why-grid,
          .about-reviews__grid,
          .about-page__split,
          .about-page__responsible-grid { grid-template-columns: 1fr; }
          .about-page__why-card { min-height: auto; }
          .about-page__number { margin-bottom: 16px; }
          .about-page__split-image, .about-page__split-image img,
          .about-page__responsible-image, .about-page__responsible-image img { min-height: 300px; }
          .about-review-card { padding: 23px; }
          .about-reviews__header { margin-bottom: 36px; }
          .about-reviews__header h2 { font-size: clamp(36px, 10vw, 46px); }
        }
      `}</style>
    </>
  );
}
