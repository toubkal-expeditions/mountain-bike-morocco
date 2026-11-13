import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cycling Events in Morocco | MTB, E-MTB, Gravel & Road | Mountain Bike Morocco",
  description:
    "Explore cycling events and tailor-made group rides in Morocco, from Atlas Mountains MTB weekends and Agafay Desert rides to Sahara gravel expeditions, E-MTB caravans, women’s cycling trips and private team events.",
};

const events = [
  {
    number: "01",
    slug: "atlas-mountains-mtb-gathering",
    discipline: "MTB · GROUP RIDE",
    label: "HIGH ATLAS SINGLETRACK & MOUNTAIN VILLAGES",
    title: "Atlas Mountains MTB Gathering",
    duration: "3 days",
    location: "High Atlas Mountains",
    description:
      "Bring your mountain bike club or riding group to the High Atlas for three days of technical trails, flowing singletrack and spectacular mountain scenery. Ride through traditional Berber villages, terraced valleys and rugged mountain terrain around the Atlas foothills. The route, climbing, daily distance and technical difficulty can be planned around your group's riding experience and fitness.",
    highlights: [
      "High Atlas mountain trails",
      "Traditional Berber villages",
      "Routes planned for your group",
    ],
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
  },
  {
    number: "02",
    slug: "agafay-desert-cycling-challenge",
    discipline: "MTB · DESERT RIDE",
    label: "ROCKY DESERT TRACKS & OPEN PLATEAUS",
    title: "Agafay Desert Cycling Challenge",
    duration: "1 day",
    location: "Agafay Desert near Marrakech",
    description:
      "Take your group into the rocky landscapes of the Agafay Desert for a day of off-road cycling across rugged tracks, dry riverbeds and rolling hills. With the High Atlas on the horizon, this is a distinctive setting for a club ride, private challenge or organised group outing close to Marrakech. Choose a suitable route and riding distance according to the group's ability and preferred pace.",
    highlights: [
      "Rocky Agafay desert terrain",
      "Dry riverbeds and open plateaus",
      "Close to Marrakech",
    ],
    image: "/images/events-race-cycling-desert-agafay.JPG",
  },
  {
    number: "03",
    slug: "morocco-desert-cycling-expedition",
    discipline: "GRAVEL · EXPEDITION",
    label: "REMOTE DESERT LANDSCAPES & LONG RIDING STAGES",
    title: "Morocco Desert Cycling Expedition",
    duration: "8 days",
    location: "Desert regions of Morocco",
    description:
      "Discover the wide-open landscapes of southern Morocco on an eight-day gravel cycling expedition. Ride remote desert tracks, quiet rural roads and dry valleys, passing small settlements and dramatic natural scenery along the way. The journey is planned around achievable daily stages, with route navigation, accommodation, water stops, luggage transfers and support arrangements considered for the group.",
    highlights: [
      "Remote desert cycling routes",
      "Quiet roads and dry valleys",
      "Multi-day supported journey",
    ],
    image: "/images/gravel-desert-cycling-expedition.jpg",
  },
  {
    number: "04",
    slug: "morocco-gravel-bike-caravan",
    discipline: "GRAVEL · GROUP CARAVAN",
    label: "CROSS-COUNTRY RIDING & RURAL MOROCCO",
    title: "Morocco Gravel Bike Caravan",
    duration: "10 days",
    location: "Route planned across Morocco",
    description:
      "Set off on a ten-day gravel cycling journey across Morocco, linking quiet rural roads, remote tracks and changing landscapes between mountain foothills and the country's southern regions. Travel together as a group, discover local communities and experience Morocco beyond the usual tourist routes. The itinerary can be shaped around your group's interests, with daily stages, accommodation, navigation, luggage transfers and logistical support planned in advance.",
    highlights: [
      "Cross-country gravel routes",
      "Rural roads and local communities",
      "Ten-day group journey",
    ],
    image: "/images/gravel-desert-cycling-morocco.JPG",
  },
  {
    number: "05",
    slug: "marrakech-to-sahara-e-mtb-caravan",
    discipline: "E-MTB · CARAVAN",
    label: "ELECTRIC MOUNTAIN BIKING & DESERT JOURNEY",
    title: "Marrakech to Sahara E-MTB Caravan",
    duration: "9 days",
    location: "Marrakech to selected Sahara areas",
    description:
      "Journey south from Marrakech on a nine-day electric mountain bike adventure towards Morocco's desert regions. Combine mountain trails and off-road riding as the scenery changes from Atlas valleys to the landscapes of the southern desert gateway. The route needs careful planning around battery range, charging opportunities, terrain and daily distances, with transfers and technical support considered throughout the journey.",
    highlights: [
      "Electric mountain bike adventure",
      "Atlas valleys and southern landscapes",
      "Battery and charging planning",
    ],
    image: "/images/e-mtb-tour-morocco.jpg",
  },
  {
    number: "06",
    slug: "women-cycling-tour",
    discipline: "WOMEN’S CYCLING · GROUP TRIP",
    label: "SHARED RIDING & MOROCCAN DISCOVERY",
    title: "Women Cycling Tour",
    duration: "8 days",
    location: "Morocco · route agreed with the group",
    description:
      "Bring women together for an eight-day cycling adventure through Morocco, combining memorable rides, changing landscapes and opportunities to discover local culture. The programme can focus on mountain biking, E-MTB, gravel or road cycling, depending on the group's interests and experience. Discuss the route, daily distances, accommodation and riding support in advance to create a comfortable and rewarding shared journey.",
    highlights: [
      "A shared eight-day adventure",
      "Choice of cycling disciplines",
      "Routes suited to the group",
    ],
    image: "/images/cycling-holiday-trip-from-marrakech.jpg",
  },
  {
    number: "07",
    slug: "school-cycling-sahara-expedition",
    discipline: "COMMUNITY · DESERT CYCLING",
    label: "OUTDOOR LEARNING & DESERT DISCOVERY",
    title: "School Cycling Sahara Expedition",
    duration: "9 days",
    location: "Sahara region · itinerary by arrangement",
    description:
      "Give students the opportunity to explore Morocco through a nine-day cycling and outdoor-learning expedition in the Sahara region. The programme can combine guided cycling, desert landscapes, environmental discovery and encounters with local communities. Every itinerary must be assessed around the participants' ages and abilities, with appropriate supervision, safeguarding, accommodation, transport and emergency arrangements agreed before departure.",
    highlights: [
      "Sahara outdoor discovery",
      "Cycling and environmental learning",
      "Supervision and safeguarding planning",
    ],
    image: "/images/Desert-Agafay-Morocco.jpg",
  },
  {
    number: "08",
    slug: "atlantic-coast-cycling-weekend",
    discipline: "COASTAL CYCLING · GROUP WEEKEND",
    label: "ATLANTIC COAST ROADS & OPEN COUNTRYSIDE",
    title: "Atlantic Coast Cycling Weekend",
    duration: "3 days",
    location: "Essaouira and the Atlantic coast",
    description:
      "Spend three days cycling around Essaouira and Morocco's Atlantic coastline, discovering quiet roads, open countryside and traditional villages. Enjoy coastal scenery and the relaxed atmosphere of the region while riding together as a group. Road, gravel and suitable off-road routes can be considered according to your group's experience, preferred distances and available time.",
    highlights: [
      "Essaouira and Atlantic coastline",
      "Quiet roads and rural villages",
      "Road, gravel or off-road options",
    ],
    image: "/images/atlantic-coast-cycling-tour-morocco.jpg",
  },
  {
    number: "09",
    slug: "private-group-team-cycling-event",
    discipline: "PRIVATE EVENT · ANY DISCIPLINE",
    label: "CUSTOM ROUTES FOR CLUBS, FRIENDS & TEAMS",
    title: "Private Group or Team Cycling Event",
    duration: "Custom",
    location: "Choose a Moroccan destination",
    description:
      "Plan a private cycling experience for your club, company, friends or organised team in Morocco. Choose mountain biking, E-MTB, gravel or road cycling, then select a destination and route that match your group's ambitions. From a single guided ride to a multi-day expedition, the programme can be discussed around your dates, participant experience, accommodation, transfers and support requirements.",
    highlights: [
      "MTB, E-MTB, gravel or road",
      "Choose your Moroccan destination",
      "Private programme for your team",
    ],
    image: "/images/group-cycling-tour-morocco.jpg",
  },
];

const eventFormats = [
  {
    title: "Club rides and cycling weekends",
    discipline: "CLUB RIDES · GROUP WEEKENDS",
    label: "ATLAS TRAILS & SHARED CYCLING EXPERIENCES",
    location: "Atlas Mountains and rural Morocco",
    duration: "One day or longer",
    text: "Bring your cycling club, friends or riding community together for a shared adventure in Morocco. Choose Atlas Mountain singletrack, scenic valley trails or countryside routes for a group ride suited to your members' experience. Plan a one-day gathering or a longer weekend with route planning, local guiding, accommodation and transport support discussed in advance.",
    highlights: [
      "Atlas trails and scenic valleys",
      "Routes suited to your club",
      "Guiding and logistics planning",
    ],
    image: "/images/atlas-berber-valley-bike.JPG",
  },
  {
    title: "Desert and gravel expeditions",
    discipline: "GRAVEL · DESERT EXPEDITIONS",
    label: "REMOTE TRACKS & MULTI-DAY GROUP JOURNEYS",
    location: "Southern Morocco and desert regions",
    duration: "Multi-day",
    text: "Take your group beyond the familiar routes on a gravel adventure through Morocco's desert regions and remote rural landscapes. Ride open plateaus, quiet tracks and roads connecting traditional settlements, with a multi-day itinerary shaped around realistic distances and terrain. Navigation, accommodation, water and food stops, luggage transfers and vehicle support can be discussed as part of the plan.",
    highlights: [
      "Remote desert landscapes",
      "Gravel tracks and rural roads",
      "Multi-day support arrangements",
    ],
    image: "/images/gravel-desert-cycling-morocco.JPG",
  },
  {
    title: "Private and purpose-led events",
    discipline: "PRIVATE · PURPOSE-LED EVENTS",
    label: "CUSTOM EXPERIENCES FOR GROUPS & TEAMS",
    location: "Choose your Moroccan destination",
    duration: "Tailor-made",
    text: "Create a cycling programme for a private group, school, company or team, with the destination and riding style selected around your objectives. From a guided mountain adventure to an organised outdoor-learning experience, the itinerary can be planned around participant needs, route difficulty, supervision, safety and practical logistics.",
    highlights: [
      "Private group and team events",
      "Flexible cycling disciplines",
      "Planning around participant needs",
    ],
    image: "/images/imlil-cycling-adventure-tour.jpeg",
  },
];

const faqs = [
  {
    question: "Are these events confirmed for specific dates?",
    answer:
      "The events shown here are event and group-trip formats, not a live calendar of confirmed departures. Contact us with your preferred dates and group size to ask about availability and confirm whether a programme can be arranged.",
  },
  {
    question: "Which cycling styles can an event include?",
    answer:
      "Depending on the format and route, an event may be planned around mountain biking, electric mountain biking, gravel cycling or road cycling. The suitable style depends on the participants, equipment, terrain and local conditions.",
  },
  {
    question: "Can you organise an event for a cycling club or private group?",
    answer:
      "Private group programmes can be discussed. Share the number of participants, their experience, destination preferences, approximate dates and what you want the event to achieve. The route, schedule and support requirements can then be assessed.",
  },
  {
    question: "Can the itinerary be customised?",
    answer:
      "The trip format, route, riding distance, pace and duration may be adapted where practical. The exact plan depends on availability, seasonal conditions, route access, the group’s abilities and the services agreed before confirmation.",
  },
  {
    question: "What should we include in an event enquiry?",
    answer:
      "Include your preferred dates, group size, cycling discipline, experience level, desired destination, approximate duration and any requirements for bikes, transfers, accommodation or support. For school or youth groups, also raise supervision and safeguarding needs at the start.",
  },
  {
    question: "How do we confirm an event booking?",
    answer:
      "Start with an enquiry so the proposed dates, route, availability, inclusions, price and practical arrangements can be reviewed. Treat an event as confirmed only after the details and booking arrangements have been agreed directly.",
  },
];

export default function EventsPage() {
  return (
    <>
      <main className="cycling-listing events-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/events-race-cycling-desert-agafay.JPG"
            alt="Cycling event across the open rocky landscapes of Morocco"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">CYCLING EVENTS · GROUP ADVENTURES · MOROCCO</p>
            <h1>Cycling Events and Group Adventures in Morocco</h1>
            <p className="cl-hero__intro">
              Bring people together through cycling, from Atlas Mountain bike weekends and Agafay Desert rides to Sahara expeditions, gravel caravans and private group experiences. Explore event formats for MTB, E-MTB, gravel and road cycling, then discuss dates, routes and practical arrangements for your group.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { request: "event-planning" } }}
              >
                Plan a Cycling Event
              </Link>
              <Link className="cl-button cl-button--outline" href="#cycling-events-list">
                Explore Event Ideas
              </Link>
            </div>
            <div className="cl-hero__meta">
              <span>MTB · E-MTB · GRAVEL · ROAD</span>
              <span>PRIVATE GROUP OPTIONS</span>
              <span>DATES BY ARRANGEMENT</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">GET TOGETHER AND RIDE</p>
            <h2>From one-day group rides to longer cycling expeditions, make the journey the event.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              Morocco offers different settings for cycling meet-ups and group adventures, from mountain trails and rocky desert terrain to rural gravel routes and paved roads. The right event begins with the people taking part: their riding experience, preferred bike, fitness, available time and what they want to get from the experience.
            </p>
            <p>
              Use this page to explore event formats and trip ideas. The listings are not a live schedule of publicly confirmed events, and no departure should be treated as confirmed until dates, availability and arrangements have been agreed. Route access, terrain, weather, support, accommodation and transport all need to be checked for the planned itinerary.
            </p>
            <Link className="cl-text-link" href="/cycling-trips">
              Explore all cycling tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="cycling-events-list">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">EVENTS AND GROUP TRIP IDEAS</p>
                <h2>Find a cycling event format for your group</h2>
              </div>
              <p>
                Browse possible group experiences below. Durations are planning starting points rather than confirmed departure dates; the final route, availability, inclusions and support are discussed directly for your requested trip.
              </p>
            </div>

            <div className="cl-tour-grid">
              {events.map((event) => (
                <article className="home-tour-card" key={event.number}>
                  <Link
                    className="home-tour-card__image"
                    href={`/events/${event.slug}`}
                    aria-label={`More details about ${event.title}`}
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                    />
                    <span className="home-tour-card__category">
                      {event.discipline}
                    </span>
                    <span className="home-tour-card__level">
                      {event.duration}
                    </span>
                  </Link>

                  <div className="home-tour-card__body">
                    <p className="home-tour-card__eyebrow">
                      {event.label}
                    </p>

                    <h3 className="home-tour-card__title">
                      <Link href={`/events/${event.slug}`}>
                        {event.title}
                      </Link>
                    </h3>

                    <p className="home-tour-card__description">
                      {event.description}
                    </p>

                    <div className="home-tour-card__meta">
                      <span className="home-tour-card__meta-item">
                        <span className="home-tour-card__meta-icon" aria-hidden="true">⌖</span>
                        {event.location}
                      </span>
                      <span className="home-tour-card__meta-item">
                        <span className="home-tour-card__meta-icon" aria-hidden="true">◷</span>
                        {event.duration}
                      </span>
                    </div>

                    <div className="home-tour-card__actions">
                      <Link
                        className="home-tour-card__button"
                        href={`/events/${event.slug}`}
                      >
                        More Details
                      </Link>
                      <Link
                        className="home-tour-card__link"
                        href={{
                          pathname: "/contact",
                          query: {
                            event: event.title,
                            destination: event.location,
                            request: "event-enquiry",
                          },
                        }}
                      >
                        Enquire <span aria-hidden="true">↗</span>
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
              <p className="cl-eyebrow">YOUR GROUP. YOUR GOAL. YOUR RIDE.</p>
              <h2>A successful cycling event is built around its riders.</h2>
            </div>
            <div>
              <p>
                A club gathering, a company group ride and a multi-day desert expedition all need different planning. Begin with the purpose of the event, who will attend and the kind of riding they enjoy. From there, discuss a realistic route, schedule, level of support and the arrangements that need to be confirmed before the event goes ahead.
              </p>
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { request: "private-event-planning" } }}
              >
                Discuss Your Group Event
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR EVENT STYLE</p>
              <h2>Three ways to bring people together through cycling</h2>
            </div>
            <p>
              The event format should fit the people attending, their equipment and the kind of experience you want to create. These broad formats can be used as a starting point for your enquiry.
            </p>
          </div>

          <div className="cl-region-grid">
            {eventFormats.map((format) => (
              <article className="home-tour-card" key={format.title}>
                <Link
                  className="home-tour-card__image"
                  href={{
                    pathname: "/contact",
                    query: {
                      event: format.title,
                      request: "event-planning",
                    },
                  }}
                  aria-label={`Plan ${format.title}`}
                >
                  <img
                    src={format.image}
                    alt={format.title}
                    loading="lazy"
                  />
                  <span className="home-tour-card__category">
                    {format.discipline}
                  </span>
                  <span className="home-tour-card__level">
                    {format.duration}
                  </span>
                </Link>

                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">
                    {format.label}
                  </p>

                  <h3 className="home-tour-card__title">
                    <Link
                      href={{
                        pathname: "/contact",
                        query: {
                          event: format.title,
                          request: "event-planning",
                        },
                      }}
                    >
                      {format.title}
                    </Link>
                  </h3>

                  <p className="home-tour-card__description">
                    {format.text}
                  </p>

                  <div className="home-tour-card__meta">
                    <span className="home-tour-card__meta-item">
                      <span className="home-tour-card__meta-icon" aria-hidden="true">⌖</span>
                      {format.location}
                    </span>
                    <span className="home-tour-card__meta-item">
                      <span className="home-tour-card__meta-icon" aria-hidden="true">◷</span>
                      {format.duration}
                    </span>
                  </div>

                  <div className="home-tour-card__actions">
                    <Link
                      className="home-tour-card__button"
                      href={{
                        pathname: "/contact",
                        query: {
                          event: format.title,
                          request: "event-planning",
                        },
                      }}
                    >
                      Plan This Format
                    </Link>
                    <Link
                      className="home-tour-card__link"
                      href={{
                        pathname: "/contact",
                        query: {
                          event: format.title,
                          request: "event-planning",
                        },
                      }}
                    >
                      Enquire <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cl-editorial">
          <div className="cl-editorial__image">
            <img
              src="/images/group-cycling-tour-morocco.jpg"
              alt="Cyclists sharing a group cycling experience in Morocco"
              loading="lazy"
            />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">PLAN WELL, RIDE WELL</p>
            <h2>Clear expectations help the whole group enjoy the ride.</h2>
            <p>
              The best events balance riding with the needs of the people taking part. Before choosing a route, consider experience levels, equipment, daily distance, technical difficulty and how much time the group wants for rest and local stops. A programme that looks exciting on paper still needs to be practical for the actual participants and conditions.
            </p>
            <p>
              For desert and remote-area routes, planning should include water and food, heat and weather considerations, navigation, communications, mechanical support, transfers and a realistic backup plan. E-MTB itineraries need charging and battery-range planning, while road and gravel rides should be checked for current surfaces, traffic and safe route options. If the event includes young people or an organised institution, supervision and safeguarding arrangements must be raised before the itinerary is confirmed.
            </p>
            <Link className="cl-button cl-button--dark" href="/contact">
              Talk Through the Details
            </Link>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">WHAT TO PLAN BEFORE YOU RIDE</p>
                <h2>A good event starts with clear details and realistic planning.</h2>
              </div>
              <p>
                Each event is different, so begin with a few essential decisions. The final plan should be reviewed against current route conditions, participant ability and the services available for your dates.
              </p>
            </div>
            <div className="cl-why-grid">
              <article><span>01</span><h3>The right riding format</h3><p>Choose MTB, E-MTB, gravel or road cycling to suit the terrain, equipment and experience of the group.</p></article>
              <article><span>02</span><h3>A practical schedule</h3><p>Discuss the duration, daily mileage, pace, stops and how the riding programme fits the group’s available time.</p></article>
              <article><span>03</span><h3>Support and logistics</h3><p>Confirm transport, accommodation, food and water, bike support, navigation and other relevant services.</p></article>
              <article><span>04</span><h3>Dates and availability</h3><p>Check the proposed dates and actual availability directly. Treat the event as confirmed only after arrangements are agreed.</p></article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">START YOUR EVENT ENQUIRY</p>
              <h2>Three steps from your idea to a cycling event plan.</h2>
            </div>
            <p>
              You can begin with an outline rather than a finished itinerary. Share what you have in mind and review the options before finalising the practical details.
            </p>
          </div>
          <div className="cl-steps">
            <article><span>STEP 01</span><h3>Tell us about the group</h3><p>Share participant numbers, age range where relevant, cycling experience, preferred discipline and the purpose of the event.</p></article>
            <article><span>STEP 02</span><h3>Discuss location and timing</h3><p>Choose a destination, preferred dates and duration, then review route options and seasonal considerations.</p></article>
            <article><span>STEP 03</span><h3>Confirm the arrangements</h3><p>Review availability, itinerary, inclusions, support and the booking terms before treating the event as confirmed.</p></article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">EVENT PLANNING FAQs</p>
              <h2>Questions about cycling events in Morocco</h2>
              <p>These answers explain how to use the event ideas on this page and what to prepare before making an enquiry.</p>
              <Link className="cl-text-link" href="/contact">Ask about an event <span aria-hidden="true">↗</span></Link>
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
            src="/images/events-race-cycling-desert-agafay.JPG"
            alt="Open desert terrain for a Morocco cycling group event"
            loading="lazy"
          />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">LET’S PLAN YOUR NEXT RIDE</p>
            <h2>Have an idea for a cycling event in Morocco?</h2>
            <p>
              Tell us your preferred dates, group size, cycling style and what you want the event to include. We can then discuss whether a suitable programme can be arranged and which practical details need to be confirmed.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { request: "event-planning" } }}
              >
                Enquire About an Event
              </Link>
              <Link className="cl-button cl-button--outline" href="/cycling-trips">
                View Cycling Tours
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
            <Link href="/journal">Journal</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/contact">Plan Your Trip</Link>
          </div>
        </div>
        <div className="page-width footer-bottom">
          <span>© {2026} Mountain Bike Morocco. All rights reserved.</span>
          <span>Morocco cycling adventures, thoughtfully planned.</span>
        </div>
      </footer>
    </>
  );
}