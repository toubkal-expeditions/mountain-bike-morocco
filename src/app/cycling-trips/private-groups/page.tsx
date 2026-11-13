import Link from "next/link";

const groupTours = [
  {
    number: "01",
    duration: "2–3 days",
    label: "A SHARED ATLAS ESCAPE",
    destination: "ATLAS FOOTHILLS",
    title: "Private Atlas Mountain Bike Weekend",
    slug: "private-atlas-mountain-bike-weekend-2-to-3-days",
    description:
      "Bring your friends together for a private cycling escape in the Atlas foothills. Ride selected mountain tracks and rural trails, pause at viewpoints and leave room to enjoy the villages and valleys along the way. The route, technical difficulty, transfers and overnight arrangements can be discussed around your group's available time and riding experience.",
    image: "/images/group-cycling-atlas-mountains.jpg",
  },
  {
    number: "02",
    duration: "4 days",
    label: "CLUBS & RIDING COMMUNITIES",
    destination: "ATLAS MOUNTAINS",
    title: "Atlas Cycling Club Tour",
    slug: "atlas-cycling-club-tour-4-day",
    description:
      "Plan a multi-day riding trip for a cycling club or an established group of friends. A private itinerary gives you the opportunity to discuss daily distances, climbing, trail difficulty and the balance between riding and recovery. Share the range of abilities in your group so route options and support arrangements can be considered realistically before you travel.",
    image: "/images/group-cycling-tour-morocco.jpg",
  },
  {
    number: "03",
    duration: "5 days",
    label: "MOUNTAIN TRAILS & VILLAGES",
    destination: "HIGH ATLAS MOUNTAINS",
    title: "High Atlas Group MTB Adventure",
    slug: "high-atlas-group-mtb-adventure-5-day",
    description:
      "Explore the High Atlas as a group, following a route concept that connects mountain landscapes, village tracks and memorable viewpoints. The final itinerary should account for rider confidence, elevation, terrain and seasonal conditions rather than assuming every rider wants the same level of challenge. We can discuss the pace, support and stages that make sense for your group.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
  },
  {
    number: "04",
    duration: "6 days",
    label: "MOUNTAINS TO SOUTHERN LANDSCAPES",
    destination: "ATLAS TO SOUTHERN MOROCCO",
    title: "Atlas to Desert Group Expedition",
    slug: "atlas-to-desert-group-expedition-6-day",
    description:
      "Bring your group together for a journey concept that links the High Atlas with the changing landscapes of southern Morocco. The experience can combine selected riding stages, regional transfers and time to discover villages and dramatic terrain. Distance between regions, daily mileage, luggage logistics, accommodation and the season all need to be considered before the final plan is confirmed.",
    image: "/images/atlas-to-desert-biking-tour.jpg",
  },
  {
    number: "05",
    duration: "3–5 days",
    label: "ELECTRIC-ASSISTED RIDING",
    destination: "ATLAS MOUNTAINS",
    title: "Private E-MTB Group Holiday",
    slug: "private-emtb-group-holiday-3-to-5-days",
    description:
      "An electric mountain bike trip can be a good option for a group that wants to explore together while discussing different climbing preferences and riding goals. Battery capacity, charging opportunities, bike requirements, elevation and assistance settings should all be part of the planning conversation. We can help you consider suitable route options based on the group's experience and the conditions expected for your dates.",
    image: "/images/group-emtb-tour-morocco.jpg",
  },
  {
    number: "06",
    duration: "4–6 days",
    label: "GRAVEL ROADS & OPEN COUNTRY",
    destination: "MOROCCO · RURAL ROUTES",
    title: "Morocco Gravel Group Journey",
    slug: "morocco-gravel-group-journey-4-to-6-days",
    description:
      "Discover Morocco by gravel bike with a private group itinerary built around quiet roads, rural tracks and changing landscapes. Discuss preferred surfaces, daily distances, luggage support and the amount of climbing your group enjoys. The best route should reflect the experience of the riders taking part and leave realistic time for transfers, stops and changes in terrain.",
    image: "/images/gravel-adventure-bike-morocco.jpg",
  },
  {
    number: "07",
    duration: "4–7 days",
    label: "ROAD RIDING & MOUNTAIN PASSES",
    destination: "ATLAS MOUNTAIN PASSES",
    title: "Private Road Cycling Tour",
    slug: "private-road-cycling-tour-4-to-7-days",
    description:
      "Plan a road cycling holiday for a group that enjoys long rides, mountain climbs and scenic open roads. Routes can be discussed around fitness, preferred daily mileage, climbing goals and the amount of support required. Traffic, road surfaces, elevation, transfers and seasonal temperatures should be reviewed when deciding the daily stages and the regions to connect.",
    image: "/images/road-cycling-tour-morocco.jpg",
  },
  {
    number: "08",
    duration: "3–5 days",
    label: "FAMILY & FRIENDS",
    destination: "MOROCCO · FLEXIBLE ROUTES",
    title: "Mixed-Ability Private Cycling Break",
    slug: "mixed-ability-private-cycling-break-3-to-5-days",
    description:
      "A private group trip can be planned for friends or family members who have different cycling backgrounds. The most important starting point is an honest conversation about experience, confidence, age range, bike type and the amount of riding everyone wants to do. With those details, route choices, rest stops and alternative options can be considered to make the itinerary more comfortable for the whole group.",
    image: "/images/group-adventure-cycling-morocco.jpg",
  },
  {
    number: "09",
    duration: "2–4 days",
    label: "START FROM MARRAKECH",
    destination: "MARRAKECH & SURROUNDINGS",
    title: "Marrakech Group Cycling Escape",
    slug: "marrakech-group-cycling-escape-2-to-4-days",
    description:
      "Use Marrakech as the meeting point for a group ride in the surrounding countryside or as the start of a longer journey into the Atlas. A shorter itinerary can fit around a city stay, while a longer trip needs more thought about transfer times and daily riding. Tell us your group size, dates and preferred cycling style so the possible options can be discussed.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
  },
  {
    number: "10",
    duration: "4–6 days",
    label: "CULTURE & COUNTRY RIDING",
    destination: "HIGH ATLAS VILLAGES",
    title: "Berber Villages Group Tour",
    slug: "berber-villages-group-tour-4-to-6-days",
    description:
      "Experience the landscapes around Morocco's mountain villages with an itinerary that makes time for both cycling and cultural discovery. Route options can be considered around your group's confidence, daily distance and preferred terrain, with stops for viewpoints and local experiences where appropriate. Accommodation, transfers and support should be agreed as part of the overall plan.",
    image: "/images/berber-villages-cycling-expeditions.jpg",
  },
  {
    number: "11",
    duration: "3–5 days",
    label: "GROUP ADVENTURE & TEAM TIME",
    destination: "MOROCCO · GROUP ROUTES",
    title: "Corporate and Team Cycling Trip",
    slug: "corporate-and-team-cycling-trip-3-to-5-days",
    description:
      "Create an active group experience for colleagues, an organisation or a team looking to spend time together outdoors. The programme can be discussed around participant fitness, bike experience, available dates and the balance between riding and shared activities. Group size, transport, equipment, safety considerations and accommodation should be clarified before a final itinerary is agreed.",
    image: "/images/cycling-group-events-morocco.jpg",
  },
  {
    number: "12",
    duration: "Custom itinerary",
    label: "YOUR ROUTE, YOUR GROUP",
    destination: "PRIVATE · CUSTOM ROUTE",
    title: "Bespoke Private Cycling Expedition",
    slug: "bespoke-private-cycling-expedition-custom-itinerary",
    description:
      "If your group has a particular idea in mind, start with the experience you want rather than a fixed itinerary. Combine MTB, E-MTB, gravel or road stages where practical, and discuss the regions, trip length, accommodation style and level of support you prefer. Route feasibility, transport between areas, current conditions and the needs of every rider should guide the final plan.",
    image: "/images/morocco-group-cycling-adventure.jpg",
  },
];

const destinations = [
  {
    title: "High Atlas Mountains",
    text:
      "Mountain valleys, rural tracks and high viewpoints provide a varied setting for private cycling trips. Route selection should match the group's experience, preferred bike type, available time and seasonal conditions.",
    image: "/images/group-cycling-atlas-mountains.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Imlil and Toubkal Region",
    text:
      "Explore village landscapes and mountain scenery around the Imlil area. Discuss trail difficulty, elevation, daily distances and the amount of time your group wants to spend riding versus exploring.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil-toubkal",
  },
  {
    title: "Marrakech and the Foothills",
    text:
      "Marrakech makes a practical meeting point for day rides and longer group journeys. Nearby countryside and foothill routes can provide a short escape or a starting point for travelling further into Morocco.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/destinations/marrakech",
  },
  {
    title: "Southern Morocco and the Desert Edge",
    text:
      "Southern landscapes offer a different setting for a group adventure, with broad horizons and remote-feeling routes. Transfers, water, temperature, surface conditions and daily distance need careful consideration.",
    image: "/images/atlas-to-desert-biking-tour.jpg",
    href: "/destinations/agafay-desert",
  },
];

const faqs = [
  {
    question: "Can we organise a private cycling tour just for our group?",
    answer:
      "You can enquire about a private itinerary for friends, a cycling club, family members or colleagues. Share your proposed dates, group size, preferred cycling discipline, experience levels and accommodation preferences. Those details help start a conversation about suitable routes and practical arrangements.",
  },
  {
    question: "Can a private group include riders with different abilities?",
    answer:
      "Potentially, depending on the route and the group. It is important to discuss the range of cycling experience, fitness, confidence and preferred daily effort in advance. Suitable routes, rest stops or alternative stages can then be considered, without assuming a challenging trail or long day will work for everyone.",
  },
  {
    question: "Which cycling styles can a group choose?",
    answer:
      "Group trips can be discussed around mountain biking, E-MTB, gravel cycling or road cycling. A mixed-discipline itinerary may be possible in some circumstances, but transport, equipment, route suitability and the group's interests need to be reviewed before deciding on the plan.",
  },
  {
    question: "How far in advance should we enquire?",
    answer:
      "It is useful to enquire as early as you can, especially when coordinating multiple riders, accommodation, bike requirements and transport. Availability cannot be assumed until the details are checked. Include your approximate dates and group size in the first enquiry so the practical options can be discussed.",
  },
  {
    question: "Can we start our trip in Marrakech?",
    answer:
      "Marrakech can be a convenient meeting point for some rides and longer cycling itineraries. The right starting location depends on your chosen region, trip duration and route. Confirm meeting arrangements, transfer times, riding stages and inclusions before finalising travel plans.",
  },
  {
    question: "Can you help with bikes, transfers and accommodation?",
    answer:
      "These are important parts of planning a private group trip and should be raised at the enquiry stage. Tell us what equipment your group needs, whether riders will bring their own bikes, your accommodation preferences and any luggage or vehicle support requirements. The arrangements need to be reviewed for your specific itinerary.",
  },
  {
    question: "How do we get a quote for our group?",
    answer:
      "Use the booking or enquiry button on a tour card or contact page and include your preferred dates, group size, cycling style, rider experience and estimated trip length. The programme, availability, inclusions and costs should be confirmed for your actual requirements before you make a booking decision.",
  },
];

export default function PrivateGroupCyclingPage() {
  return (
    <>
      <main className="cycling-listing private-groups-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/group-cycling-tour-morocco.jpg"
            alt="A group cycling together in Morocco's mountain landscapes"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">PRIVATE GROUPS · LOCAL GUIDES · MOROCCO</p>
            <h1>Private Group Cycling Tours in Morocco</h1>
            <p className="cl-hero__intro">
              Bring your friends, family, cycling club or colleagues together for a journey through Morocco. Explore MTB trails, E-MTB routes, gravel roads or scenic road cycling with a private itinerary planned around your group's interests, experience and available time.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { request: "booking", tour: "Private Group Cycling Tour" } }}
              >
                Plan Your Group Trip
              </Link>
              <Link className="cl-button cl-button--outline" href="#group-options">
                Explore Group Tours
              </Link>
            </div>
            <div className="cl-hero__meta">
              <span>PRIVATE ITINERARIES</span>
              <span>FRIENDS · CLUBS · TEAMS</span>
              <span>MTB · E-MTB · GRAVEL · ROAD</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">RIDE TOGETHER</p>
            <h2>A Morocco cycling experience built around your group.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              Travelling with a group creates space to share the challenge of a climb, stop together at a mountain viewpoint and discover the landscapes and communities along the route. Morocco offers a wide variety of cycling settings, from the valleys and mountain tracks of the High Atlas to open countryside, desert-edge terrain and long roads between regions.
            </p>
            <p>
              A successful group itinerary begins with the people taking part. Riding ability, fitness, preferred bike type, daily distance and the amount of time available can vary widely. Sharing those details early helps identify route options and a sensible pace, while transfers, accommodation, equipment and support can be considered before plans are finalised.
            </p>
            <p>
              Whether you are organising a weekend with friends, a cycling club trip, a family adventure or a company activity, start with your priorities. The final programme should reflect the group's interests, practical requirements and the conditions expected for your travel dates.
            </p>
            <Link className="cl-text-link" href="/cycling-trips">
              Explore all cycling tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="group-options">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR GROUP EXPERIENCE</p>
                <h2>Private cycling trips for friends, clubs and teams</h2>
              </div>
              <p>
                Choose a starting point for your trip, from a short Atlas escape to a multi-day cross-region expedition. Every programme should be reviewed against your group size, riding experience, travel dates and the practical details needed for your chosen route.
              </p>
            </div>
            <div className="cl-tour-grid">
              {groupTours.map((tour) => (
                <article className="home-tour-card" key={tour.number}>
                  <Link
                    className="home-tour-card__image"
                    href={`/cycling-trips/trip/${tour.slug}`}
                    aria-label={`More details about ${tour.title}`}
                  >
                    <img
                      src={tour.image}
                      alt={tour.title}
                      loading="lazy"
                    />
                    <span className="home-tour-card__category">
                      {tour.label}
                    </span>
                    <span className="home-tour-card__level">
                      {tour.destination}
                    </span>
                  </Link>
                  <div className="home-tour-card__body">
                    <p className="home-tour-card__eyebrow">
                      PRIVATE GROUP CYCLING · {tour.destination}
                    </p>
                    <h3 className="home-tour-card__title">
                      <Link href={`/cycling-trips/trip/${tour.slug}`}>
                        {tour.title}
                      </Link>
                    </h3>
                    <p className="home-tour-card__description">
                      {tour.description}
                    </p>
                    <div className="home-tour-card__meta">
                      <span className="home-tour-card__meta-item">
                        <span className="home-tour-card__meta-icon" aria-hidden="true">◷</span>
                        {tour.duration}
                      </span>
                    </div>
                    <div className="home-tour-card__actions">
                      <Link
                        className="home-tour-card__button"
                        href={`/cycling-trips/trip/${tour.slug}`}
                      >
                        More Details
                      </Link>
                      <Link
                        className="home-tour-card__link"
                        href={{ pathname: "/contact", query: { tour: tour.title, request: "booking" } }}
                      >
                        Booking
                      </Link>
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
              <p className="cl-eyebrow">YOUR GROUP. YOUR PACE. YOUR ROUTE.</p>
              <h2>Plan a ride that works for everyone taking part.</h2>
            </div>
            <div>
              <p>
                The best group adventure is not necessarily the longest or most demanding one. Discuss the range of rider experience, the terrain everyone enjoys, the time available and the pace you would like to keep. These conversations help identify a realistic starting point for route planning, logistics and support.
              </p>
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { request: "booking", tour: "Private Group Cycling Tour" } }}
              >
                Tell Us About Your Group
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">WHERE TO RIDE TOGETHER</p>
              <h2>Explore group cycling destinations across Morocco</h2>
            </div>
            <p>
              The region you choose shapes the character of your trip. Consider mountain trails, village roads, open terrain or a multi-region route, then match your choice to the group's riding style, schedule and expected conditions.
            </p>
          </div>
          <div className="cl-region-grid">
            {destinations.map((destination) => (
              <article className="home-tour-card" key={destination.title}>
                <Link
                  className="home-tour-card__image"
                  href={destination.href}
                  aria-label={destination.title}
                >
                  <img
                    src={destination.image}
                    alt={destination.title}
                    loading="lazy"
                  />
                  <span className="home-tour-card__category">
                    CYCLING DESTINATION
                  </span>
                  <span className="home-tour-card__level">
                    {destination.title}
                  </span>
                </Link>
                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">
                    PRIVATE GROUP CYCLING · {destination.title}
                  </p>
                  <h3 className="home-tour-card__title">
                    <Link href={destination.href}>
                      {destination.title}
                    </Link>
                  </h3>
                  <p className="home-tour-card__description">
                    {destination.text}
                  </p>
                  <div className="home-tour-card__actions">
                    <Link
                      className="home-tour-card__button"
                      href={destination.href}
                    >
                      Explore Region
                    </Link>
                    <Link
                      className="home-tour-card__link"
                      href={destination.href}
                    >
                      Discover
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cl-editorial">
          <div className="cl-editorial__image">
            <img src="/images/group-cycling-morocco.JPG" alt="Cyclists sharing a guided cycling journey in Morocco" loading="lazy" />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">MORE THAN A ROUTE</p>
            <h2>Make room for shared moments off the bike, too.</h2>
            <p>
              A group cycling holiday is about more than the miles covered. It is the shared experience of discovering a new landscape, pausing at a viewpoint, enjoying a meal after a ride and seeing how the scenery changes from one region to another. Leaving enough time for these moments often makes the journey more enjoyable than trying to fit too much into every day.
            </p>
            <p>
              Thoughtful planning also helps keep a group together. Consider differences in fitness, bike handling, daily effort and preferred pace alongside transfers, accommodation and the season. When these details are discussed early, the group can compare realistic options before committing to an itinerary.
            </p>
            <Link className="cl-button cl-button--dark" href="/about">Learn About Our Approach</Link>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">WHY PLAN A PRIVATE GROUP TRIP</p>
                <h2>Flexible planning with the whole group in mind.</h2>
              </div>
              <p>
                A private trip gives you a starting point for discussing the experience you want together. Clear expectations around route difficulty, time, equipment and support help establish a programme that is practical for the riders taking part.
              </p>
            </div>
            <div className="cl-why-grid">
              <article><span>01</span><h3>Your group, your priorities</h3><p>Discuss destinations, travel dates, daily distances and the balance between riding and exploring as a group.</p></article>
              <article><span>02</span><h3>Riding matched to experience</h3><p>Share everyone's riding background and preferences so route options can be considered realistically.</p></article>
              <article><span>03</span><h3>Practical arrangements</h3><p>Review transport, equipment, accommodation, luggage support and any other requirements for your group.</p></article>
              <article><span>04</span><h3>Time to discover Morocco</h3><p>Build in space for mountain scenery, villages, local food and the moments that make a journey memorable.</p></article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">PLAN YOUR GROUP CYCLING HOLIDAY</p>
              <h2>Three steps to get your group adventure started.</h2>
            </div>
            <p>
              You do not need a finished itinerary before making an enquiry. Start with a few key details, then discuss route options, availability and the arrangements required for your chosen trip.
            </p>
          </div>
          <div className="cl-steps">
            <article><span>STEP 01</span><h3>Share your group details</h3><p>Tell us your dates, group size, cycling discipline, experience range and the type of trip you have in mind.</p></article>
            <article><span>STEP 02</span><h3>Compare suitable options</h3><p>Discuss regions, distances, route difficulty, accommodation preferences, transfers and support requirements.</p></article>
            <article><span>STEP 03</span><h3>Review the plan</h3><p>Check the proposed itinerary, inclusions, availability and costs before making a booking decision.</p></article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
              <h2>Private group cycling in Morocco: FAQs</h2>
              <p>Find answers to common questions about group size, cycling ability, route choice and arranging a private trip. For advice about your group, contact us with your dates and preferences.</p>
              <Link className="cl-text-link" href="/contact">Ask about your group trip <span aria-hidden="true">↗</span></Link>
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
          <img src="/images/group-cycling-atlas-mountains.jpg" alt="A private cycling group exploring Morocco's Atlas Mountains" loading="lazy" />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR NEXT GROUP ADVENTURE</p>
            <h2>Ready to plan a cycling trip together?</h2>
            <p>Tell us your dates, group size and the kind of riding your group enjoys. We can start a conversation about suitable routes, destinations and the practical arrangements for a private cycling adventure in Morocco.</p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href={{ pathname: "/contact", query: { request: "booking", tour: "Private Group Cycling Tour" } }}>Plan Your Group Trip</Link>
              <Link className="cl-button cl-button--outline" href="/cycling-trips">View All Cycling Tours</Link>
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
            <Link href="/journal">Journal</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Plan Your Trip</Link>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>© 2026 Mountain Bike Morocco</span>
          <span>Morocco cycling adventures, thoughtfully planned.</span>
        </div>
      </footer>
    </>
  );
}