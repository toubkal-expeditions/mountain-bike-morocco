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
    discipline: "MTB · GROUP RIDE",
    label: "MOUNTAIN TRAILS & LOCAL CULTURE",
    title: "Atlas Mountains MTB Gathering",
    duration: "3 days",
    location: "High Atlas Mountains",
    description:
      "Bring a group together for a mountain bike experience in the Atlas region. Build the programme around suitable trails, rider ability, daily distance and the time available for meals and local stops. The final route, guide support, accommodation and transport are agreed for your group and requested dates. This is a trip format available by arrangement, not a published event date.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
  },
  {
    number: "02",
    discipline: "MTB · DESERT RIDE",
    label: "ROCKY PLATEAUS & OPEN LANDSCAPES",
    title: "Agafay Desert Cycling Challenge",
    duration: "1 day",
    location: "Agafay Desert near Marrakech",
    description:
      "Create a focused day of riding across selected tracks and rocky terrain around Agafay. Route choice should match participants’ fitness, technical confidence and bike setup, with sensible time for hydration, breaks and support. Confirm the ride format, distance, terrain, transfers and available dates before promoting or booking it as a group event.",
    image: "/images/events-race-cycling-desert-agafay.JPG",
  },
  {
    number: "03",
    discipline: "GRAVEL · EXPEDITION",
    label: "DESERT ROADS & MULTI-DAY ADVENTURE",
    title: "Morocco Desert Cycling Expedition",
    duration: "8 days",
    location: "Desert regions of Morocco",
    description:
      "A multi-day desert cycling format for riders who want to travel through Morocco’s changing landscapes by bike. Route and stage planning should take account of terrain, heat, daily distance, water availability, accommodation and vehicle support. The actual route and included services are confirmed according to the season, group experience and travel dates.",
    image: "/images/gravel-desert-cycling-expedition.jpg",
  },
  {
    number: "04",
    discipline: "GRAVEL · GROUP CARAVAN",
    label: "QUIET ROADS & RURAL TRACKS",
    title: "Morocco Gravel Bike Caravan",
    duration: "10 days",
    location: "Route planned across Morocco",
    description:
      "Gather a group for a longer gravel journey linking selected rural roads and tracks. The route can be shaped around the group’s experience, preferred daily distance and the landscapes they hope to see. Surface conditions, resupply points, overnight stops, luggage, navigation and support arrangements need to be checked and agreed before the itinerary is finalised.",
    image: "/images/gravel-desert-cycling-morocco.JPG",
  },
  {
    number: "05",
    discipline: "E-MTB · CARAVAN",
    label: "ELECTRIC-ASSISTED MULTI-DAY JOURNEY",
    title: "Marrakech to Sahara E-MTB Caravan",
    duration: "9 days",
    location: "Marrakech to selected Sahara areas",
    description:
      "Plan a supported electric mountain bike journey from Marrakech towards selected desert landscapes. Daily stages must be realistic for terrain, battery range and charging access, with transfers used where necessary to keep the trip practical. Confirm bike models, charging arrangements, service support, accommodation, route access and the final sequence of riding days before booking.",
    image: "/images/e-mtb-tour-morocco.jpg",
  },
  {
    number: "06",
    discipline: "WOMEN’S CYCLING · GROUP TRIP",
    label: "A SUPPORTIVE SHARED ADVENTURE",
    title: "Women Cycling Tour",
    duration: "8 days",
    location: "Morocco · route agreed with the group",
    description:
      "A women-focused cycling trip that can be adapted to the group’s preferred discipline, riding experience and travel style. It may combine selected riding stages with time to enjoy local landscapes and culture. Before confirming, discuss the route, group size, daily distances, accommodation, support, equipment and any practical preferences that will help everyone feel prepared.",
    image: "/images/cycling-holiday-trip-from-marrakech.jpg",
  },
  {
    number: "07",
    discipline: "COMMUNITY · DESERT CYCLING",
    label: "A GROUP EXPERIENCE WITH A CLEAR PURPOSE",
    title: "School Cycling Sahara Expedition",
    duration: "9 days",
    location: "Sahara region · itinerary by arrangement",
    description:
      "A proposed expedition format for a school or organised group interested in cycling, outdoor learning and discovering desert regions of Morocco. The programme must be tailored to the participants’ ages and abilities, safeguarding needs, supervision, transport, accommodation and emergency arrangements. Dates, permissions, support and any educational or community activities should be confirmed with organisers in advance.",
    image: "/images/Desert-Agafay-Morocco.jpg",
  },
  {
    number: "08",
    discipline: "COASTAL CYCLING · GROUP WEEKEND",
    label: "ATLANTIC AIR & COUNTRYSIDE ROUTES",
    title: "Atlantic Coast Cycling Weekend",
    duration: "3 days",
    location: "Essaouira and the Atlantic coast",
    description:
      "Bring friends or a club together for a coastal cycling break around Essaouira. Choose road cycling, gravel riding or suitable MTB routes according to the group and local conditions. Wind exposure, surface type, planned mileage, accommodation, transfers and support can all be factored into the schedule once dates and participants are known.",
    image: "/images/atlantic-coast-cycling-tour-morocco.jpg",
  },
  {
    number: "09",
    discipline: "PRIVATE EVENT · ANY DISCIPLINE",
    label: "BUILT AROUND YOUR TEAM",
    title: "Private Group or Team Cycling Event",
    duration: "Custom",
    location: "Choose a Moroccan destination",
    description:
      "Create a private cycling event for a club, company, friends or a special group. The day or multi-day programme can focus on MTB, E-MTB, gravel or road riding and can include support logistics according to the agreed plan. Share your preferred destination, dates, group size, experience and goals to begin shaping a suitable format.",
    image: "/images/group-cycling-tour-morocco.jpg",
  },
];

const eventFormats = [
  {
    title: "Club rides and cycling weekends",
    text: "Bring a cycling club or group of friends together for a shared ride, a weekend away or a multi-day journey. Choose the discipline, preferred pace and the amount of support needed, then confirm the route and logistics around your dates.",
    image: "/images/group-cycling-tour-morocco.jpg",
  },
  {
    title: "Desert and gravel expeditions",
    text: "Plan a longer group adventure using selected gravel roads and desert routes. Good preparation matters: daily distances, heat, water, resupply, accommodation, navigation, communications and vehicle support should all be considered before the final itinerary is confirmed.",
    image: "/images/gravel-desert-cycling-expedition.jpg",
  },
  {
    title: "Private and purpose-led events",
    text: "For private groups, schools or organised teams, start by defining the purpose of the event and who will take part. Programme design should account for rider experience, supervision, safety, route difficulty and support requirements, with dates and practical details agreed with the organisers.",
    image: "/images/cycling-holiday-trip-from-marrakech.jpg",
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
                <article className="cl-tour-card" key={event.number}>
                  <Link
                    className="cl-tour-card__image-link"
                    href={{ pathname: "/contact", query: { event: event.title, destination: event.location, request: "event-details" } }}
                    aria-label={`More details about ${event.title}`}
                  >
                    <img className="cl-tour-card__image" src={event.image} alt={event.title} loading="lazy" />
                    <span className="cl-tour-card__number">{event.number}</span>
                  </Link>
                  <div className="cl-tour-card__body">
                    <p className="cl-card-label">{event.discipline} · {event.duration}</p>
                    <p className="cl-card-label">{event.label}</p>
                    <h3>
                      <Link href={{ pathname: "/contact", query: { event: event.title, destination: event.location, request: "event-details" } }}>
                        {event.title}
                      </Link>
                    </h3>
                    <p>{event.description}</p>
                    <div className="cl-tour-card__actions">
                      <Link
                        className="cl-button cl-button--dark"
                        href={{ pathname: "/contact", query: { event: event.title, destination: event.location, request: "event-details" } }}
                      >
                        More Details
                      </Link>
                      <Link
                        className="cl-button cl-button--gold"
                        href={{ pathname: "/contact", query: { event: event.title, destination: event.location, request: "event-enquiry" } }}
                      >
                        Enquire
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
            {eventFormats.map((format, index) => (
              <article className="cl-region-card" key={format.title}>
                <Link
                  className="cl-region-card__image-wrap"
                  href={{ pathname: "/contact", query: { event: format.title, request: "event-planning" } }}
                  aria-label={format.title}
                >
                  <img src={format.image} alt={format.title} loading="lazy" />
                  <span>0{index + 1}</span>
                </Link>
                <div className="cl-region-card__body">
                  <h3>
                    <Link href={{ pathname: "/contact", query: { event: format.title, request: "event-planning" } }}>
                      {format.title}
                    </Link>
                  </h3>
                  <p>{format.text}</p>
                  <Link
                    className="cl-text-link"
                    href={{ pathname: "/contact", query: { event: format.title, request: "event-planning" } }}
                  >
                    Plan this format <span aria-hidden="true">↗</span>
                  </Link>
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
          <span>© 2026 Mountain Bike Morocco</span>
          <span>Morocco cycling adventures, thoughtfully planned.</span>
        </div>
      </footer>
    </>
  );
}
