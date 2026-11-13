import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Bike Tours Morocco | Guided Electric Bike Holidays",
  description:
    "Discover guided e-bike tours in Morocco. Explore the High Atlas, Imlil, Marrakech, Agafay and southern landscapes on electric mountain bike day rides and multi-day cycling holidays.",
  alternates: {
    canonical: "/e-bike-tours-morocco",
  },
  openGraph: {
    title: "E-Bike Tours Morocco | Mountain Bike Morocco",
    description:
      "Explore Morocco by electric mountain bike on guided tours through the Atlas Mountains, traditional villages, mountain valleys and southern landscapes.",
    url: "https://mountain-bike-morocco.com/e-bike-tours-morocco",
    siteName: "Mountain Bike Morocco",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/eBike-tour-atlas-mountains-morocco.jpg",
        alt: "Electric mountain bike tour in Morocco's Atlas Mountains",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Bike Tours Morocco | Mountain Bike Morocco",
    description:
      "Discover guided electric mountain bike tours in Morocco, from Marrakech day rides to multi-day Atlas Mountain adventures.",
    images: ["/images/eBike-tour-atlas-mountains-morocco.jpg"],
  },
};

const tours = [
  {
    number: "01",
    duration: "Day Tour",
    label: "E-BIKE DAY RIDES · MARRAKECH",
    destination: "MARRAKECH & ATLAS FOOTHILLS",
    title: "E-MTB Day Tours from Marrakech",
    description:
      "Leave Marrakech behind for a guided electric mountain bike experience in the surrounding countryside and foothills. A day ride can be a good way to discover Moroccan landscapes without committing to a longer holiday. The route should be selected around your available time, riding confidence and preferred terrain. Before departure, discuss the expected distance, climbing, bike setup, battery range, transfers and support arrangements.",
    image: "/images/day-ebike-tour-from-marrakech.jpg",
    href: "/cycling-trips/trip/emtb-day-tours-from-marrakech-day-tour",
  },
  {
    number: "02",
    duration: "3 days",
    label: "ATLAS MOUNTAINS · MULTI-DAY",
    destination: "HIGH ATLAS MOUNTAINS",
    title: "Three-Day Atlas E-Bike Escape",
    description:
      "Spend three days exploring the Atlas Mountains by electric mountain bike. A multi-day journey offers more time to experience mountain scenery, rural tracks and traditional villages beyond the immediate surroundings of Marrakech. Daily stages should take account of elevation, riding surfaces, group ability and opportunities to recharge batteries. Ask about the proposed route, accommodation, luggage arrangements and support before confirming your itinerary.",
    image: "/images/atlas_mountain_ebike_tour_3days-2.jpg",
    href: "/cycling-trips/trip/three-day-atlas-e-bike-escape-3-day",
  },
  {
    number: "03",
    duration: "8 days",
    label: "ATLAS & SOUTHERN LANDSCAPES",
    destination: "ATLAS & SOUTHERN MOROCCO",
    title: "Atlas & Desert E-MTB Tour",
    description:
      "Discuss an eight-day electric mountain bike journey connecting the High Atlas with the landscapes of southern Morocco. A longer expedition can bring together very different environments, from mountain scenery to drier valleys and desert-edge terrain. The route needs to be planned around realistic daily distances, regional transfers, battery logistics, water, accommodation and seasonal conditions. Ask for the proposed stages and support arrangements before deciding whether this journey suits your group.",
    image: "/images/sahara-desert-ebike-expeditions.jpg",
    href: "/cycling-trips/trip/atlas-and-desert-emtb-tour-8-day",
  },
];

const destinations = [
  {
    title: "High Atlas Mountains",
    text:
      "The High Atlas offers mountain scenery, changing elevations, rural tracks and traditional settlements. Electric assistance can make sustained climbs more manageable, but the route still needs to match the bike and the rider. Surface conditions, gradients, altitude, battery capacity and the technical nature of each section should all be considered when choosing an itinerary.",
    image: "/images/eBike-tour-atlas-mountains-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Imlil and Toubkal Region",
    text:
      "Explore the mountain scenery and villages around Imlil and the Toubkal region. This is a high-mountain environment where gradients, rough surfaces and changing weather can influence the ride. Not every walking path or technical mountain trail is suitable for an electric mountain bike, so routes should be selected carefully and confirmed with a local guide.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil-toubkal",
  },
  {
    title: "Marrakech and the Foothills",
    text:
      "Marrakech is a convenient starting point for shorter electric mountain bike experiences in the surrounding countryside. The foothills provide a different perspective on the region, with opportunities to leave the busy city behind and explore rural landscapes. Route choice can be adapted around the time available, your riding background and the kind of terrain you want to experience.",
    image: "/images/e-mtb-tour-from-marrakech.jpg",
    href: "/destinations/marrakech",
  },
  {
    title: "Agafay and Open Terrain",
    text:
      "The rocky landscapes around Agafay offer a contrast to the greener Atlas valleys. Open terrain can be exposed to sun, wind and changing surface conditions, making water, clothing and route planning particularly important. Before choosing an Agafay ride, confirm the surface, expected distance, elevation, available shade and whether the route is appropriate for the type of electric bike being used.",
    image: "/images/Agafay-desert-morocco.jpg",
    href: "/destinations/agafay-desert",
  },
];

const faqs = [
  {
    question: "What is an e-bike tour in Morocco?",
    answer:
      "An e-bike tour uses an electric-assisted bicycle to help with pedalling while you explore trails, mountain roads and countryside routes. The motor provides assistance when you pedal; it does not turn the bicycle into a motorbike. On an electric mountain bike, assistance can make climbs and longer rides more manageable, but you still need to pedal, steer, brake and control the bike on changing surfaces.",
  },
  {
    question: "Where can I go on an e-bike tour in Morocco?",
    answer:
      "The High Atlas Mountains, Imlil and the countryside around Marrakech are among the areas to consider. Other itineraries may explore Agafay and landscapes in southern Morocco. Each destination offers different terrain and conditions. The most suitable area depends on your travel dates, riding experience, preferred surfaces, available time and the route that can be arranged for your group.",
  },
  {
    question: "Do I need experience riding an electric mountain bike?",
    answer:
      "Previous mountain biking experience is useful, especially on rough tracks, steep gradients and technical descents. An electric mountain bike can be heavier than a conventional bicycle, and its assistance changes how the bike responds when climbing. Riders who are new to E-MTBs should become familiar with the bike's weight, braking, handling and assistance settings before attempting demanding terrain.",
  },
  {
    question: "Can beginners join an e-bike tour in Morocco?",
    answer:
      "Some easier routes may suit recreational riders with basic cycling skills, but not every mountain trail is appropriate for beginners. Electric assistance helps with pedalling uphill; it does not remove the need for balance, braking skills or confidence on loose surfaces. Share your cycling background honestly when enquiring so that the route and daily effort can be discussed before choosing a trip.",
  },
  {
    question: "How far can I ride on an e-bike battery?",
    answer:
      "There is no single battery range that applies to every ride. Range varies according to the bike and battery, rider weight, elevation, assistance setting, temperature, tyre pressure, trail surface and riding style. Long climbs, rough ground and higher assistance levels can use more energy. A suitable itinerary should allow a realistic battery margin rather than relying on the maximum range stated by a manufacturer.",
  },
  {
    question: "How are e-bike batteries charged during a multi-day tour?",
    answer:
      "Charging arrangements depend on the route, accommodation and equipment being used. Before confirming a multi-day trip, ask where batteries will be charged, whether charging is available at each overnight stop, how long charging takes and what happens if a battery cannot be charged as planned. Remote stages may require additional planning or support, so the charging plan should be considered alongside daily distance and elevation.",
  },
  {
    question: "What happens if my battery runs low during a ride?",
    answer:
      "A low battery can make a climb or a long stage more demanding, particularly on a heavy electric mountain bike. The group should understand the expected battery use and the route's charging or support arrangements before setting out. Ask how the itinerary accounts for unexpected battery consumption, mechanical problems or a change in weather, especially on routes away from towns and regular services.",
  },
  {
    question: "Are e-bike tours suitable for technical singletrack?",
    answer:
      "Not every technical trail is suitable for every electric mountain bike or rider. E-MTBs can be heavier than conventional mountain bikes, and narrow, steep or highly technical trails require appropriate handling skills and suitable equipment. The route should be chosen for the actual bike, the surface and the group's ability. Tell us what kind of riding you enjoy so that the terrain can be discussed before your trip.",
  },
  {
    question: "What type of terrain can I expect?",
    answer:
      "Depending on the destination and itinerary, riding may include mountain roads, rural tracks, compact dirt, rocky paths and sections of paved road. Conditions can change with altitude, weather and recent rainfall. Ask for a description of the proposed surfaces and technical difficulty rather than assuming that every e-bike tour follows the same type of trail.",
  },
  {
    question: "When is the best time for an e-bike holiday in Morocco?",
    answer:
      "Spring and autumn are often suitable periods for many lower and mid-altitude routes, but conditions vary by region and elevation. Higher mountain areas can be cold or affected by snow, while lower terrain can become very hot in summer. Southern and desert routes have their own seasonal considerations. Check the expected conditions for your intended route and travel dates before confirming your trip.",
  },
  {
    question: "What should I wear and bring on an e-bike tour?",
    answer:
      "Wear comfortable cycling clothing suitable for the season and terrain. A properly fitting helmet, gloves, sunglasses, sun protection and enough water are important. Mountain weather can change quickly, so a lightweight windproof or warm layer may also be useful. For a multi-day trip, ask for a packing list based on the confirmed itinerary and check which equipment is supplied by the organiser.",
  },
  {
    question: "Can I bring my own electric mountain bike?",
    answer:
      "You can discuss travelling with your own E-MTB when making an enquiry. Airline battery policies, transport arrangements, charging requirements and the bike's condition all need consideration. Provide your bike model, battery specifications and dimensions so the practical arrangements can be reviewed before travel. Do not assume that an airline will accept an e-bike battery without checking its current rules.",
  },
  {
    question: "Can I arrange a private e-bike tour?",
    answer:
      "You can enquire about a private trip for friends, couples or a group travelling together. Share your travel dates, number of riders, experience levels, preferred regions, bike requirements and accommodation preferences. This information helps establish which route options and practical arrangements may be suitable for your group.",
  },
  {
    question: "What should I check before booking an e-bike tour?",
    answer:
      "Ask for the proposed daily distances, elevation gain, terrain description and technical difficulty. Confirm the type of electric bike, frame sizes, battery capacity, charging arrangements and mechanical support. It is also useful to understand what is included in the price, how transfers and accommodation are arranged, what meals are provided and what happens if weather or route conditions require a change.",
  },
];

export default function EBikeToursMoroccoPage() {
  return (
    <>
      <main className="cycling-listing emtb-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/eBike-tour-atlas-mountains-morocco.jpg"
            alt="Electric mountain bike adventure in Morocco's Atlas Mountains"
            fetchPriority="high"
          />

          <div className="cl-hero__shade" />

          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">
              E-BIKE TOURS · ATLAS MOUNTAINS · MOROCCO
            </p>

            <h1>E-Bike Tours in Morocco</h1>

            <p className="cl-hero__intro">
              Discover Morocco on an electric mountain bike, from
              the mountain roads and rural tracks of the High Atlas
              to traditional villages, the countryside around
              Marrakech and the open landscapes of the south.
              Explore guided e-bike day rides and multi-day cycling
              adventures planned around your riding experience,
              preferred terrain, battery requirements and available
              time. Whether you are considering a short escape or
              a longer journey, the right route starts with a clear
              understanding of the ride and its practical details.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your E-Bike Tour
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="#morocco-e-bike-tours"
              >
                Explore E-Bike Tours
              </Link>
            </div>

            <div className="cl-hero__meta">
              <span>ELECTRIC-ASSISTED RIDING</span>
              <span>DAY RIDES & MULTI-DAY TOURS</span>
              <span>ATLAS MOUNTAINS & MOROCCO</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">
              RIDE FURTHER. DISCOVER MORE.
            </p>
            <h2>
              Explore Morocco's mountain landscapes by electric bike.
            </h2>

            <img
              src="/images/eBike-tour-atlas-mountains-morocco.jpg"
              alt="Electric mountain bike riding through the High Atlas Mountains of Morocco"
              loading="lazy"
              style={{
                display: "block",
                width: "100%",
                aspectRatio: "16 / 9",
                objectFit: "cover",
                marginTop: "24px",
              }}
            />
          </div>

          <div className="cl-intro__copy">
            <p>
              An electric mountain bike can open up different
              ways to experience Morocco. Pedal assistance helps
              support your effort on climbs and can make it easier
              to maintain a steady pace across varied terrain.
              In the Atlas Mountains, this can create more
              opportunities to enjoy mountain views, pass through
              traditional villages and explore rural landscapes
              without making every climb the main challenge of
              the day.
            </p>

            <p>
              An E-MTB is still a bicycle that requires active
              riding. You need to steer, brake, manage your speed
              and respond to the surface beneath your tyres.
              Electric assistance does not make a steep descent,
              loose gravel or technical trail automatically easy.
              Choosing a route that matches your confidence and
              the type of bike is just as important as choosing
              the destination.
            </p>

            <p>
              The experience can vary considerably between a
              short countryside ride and a multi-day mountain
              journey. A day trip may focus on a single riding
              area, while a longer itinerary can involve changing
              elevations, different overnight locations and
              additional transport arrangements. Each option
              needs to be considered in terms of distance,
              climbing, terrain and the time available.
            </p>

            <p>
              Battery planning is another important part of an
              electric bike holiday. Range depends on the battery,
              assistance level, elevation, surface, temperature
              and riding style. A good plan considers charging
              opportunities and support before the ride begins,
              particularly when travelling through remote valleys
              or areas with limited services.
            </p>

            <p>
              Whether you have time for a guided day ride or want
              to discuss a longer mountain itinerary, an e-bike
              holiday can combine time on the bike with
              opportunities to discover Morocco's landscapes
              and local culture. Share your riding experience
              and travel plans so that the route, equipment
              and practical arrangements can be discussed.
            </p>

            <Link className="cl-text-link" href="/cycling-trips/e-mtb">
              Explore all E-MTB tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="morocco-e-bike-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  CHOOSE YOUR E-BIKE EXPERIENCE
                </p>
                <h2>
                  Guided e-bike tours and cycling holidays in Morocco
                </h2>
              </div>

              <p>
                Discover a selection of electric mountain bike
                experiences, from day rides near Marrakech to
                multi-day journeys through the Atlas and southern
                landscapes. Each itinerary has different practical
                considerations, including riding time, terrain,
                elevation, battery use and support. Explore the
                options and ask for the details that matter to
                your trip.
              </p>
            </div>

            <div className="cl-tour-grid">
              {tours.map((tour) => (
                <article className="home-tour-card" key={tour.number}>
                  <Link
                    className="home-tour-card__image"
                    href={tour.href}
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
                      E-MTB · {tour.destination}
                    </p>

                    <h3 className="home-tour-card__title">
                      <Link href={tour.href}>{tour.title}</Link>
                    </h3>

                    <p className="home-tour-card__description">
                      {tour.description}
                    </p>

                    <div className="home-tour-card__meta">
                      <span className="home-tour-card__meta-item">
                        <span
                          className="home-tour-card__meta-icon"
                          aria-hidden="true"
                        >
                          ◷
                        </span>
                        {tour.duration}
                      </span>
                    </div>

                    <div className="home-tour-card__actions">
                      <Link
                        className="home-tour-card__button"
                        href={tour.href}
                      >
                        More Details
                      </Link>
                      <Link
                        className="home-tour-card__link"
                        href={{
                          pathname: "/contact",
                          query: {
                            tour: tour.title,
                            request: "booking",
                          },
                        }}
                      >
                        Enquire
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">
                  MORE E-MTB ITINERARIES
                </p>
                <h2>
                  Explore the full range of electric mountain bike tours
                </h2>
              </div>

              <p>
                Looking for a different duration or destination?
                Explore the complete E-MTB collection for more
                day rides, private itineraries and multi-day
                cycling experiences across Morocco. Compare
                the available options and contact us if you
                would like to discuss a route around your
                dates, experience and group requirements.
              </p>
            </div>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--dark"
                href="/cycling-trips/e-mtb"
              >
                View All E-MTB Tours
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-dark-band">
          <div className="cl-wrap cl-dark-band__inner">
            <div>
              <p className="cl-eyebrow">
                YOUR BATTERY. YOUR ROUTE. YOUR PACE.
              </p>
              <h2>
                Plan your electric bike adventure around the ride.
              </h2>
            </div>

            <div>
              <p>
                Electric assistance can help you enjoy longer
                climbs, but battery use depends on elevation,
                terrain, assistance level, temperature and
                riding conditions. The range shown by a bike
                manufacturer is not a guarantee of how far
                you will travel on a particular mountain route.
                Long climbs, loose surfaces and higher assistance
                settings can all increase energy use.
              </p>

              <p>
                A realistic plan considers the battery capacity,
                expected daily distance, charging opportunities
                and the support available along the route.
                For multi-day trips, ask where batteries will
                be charged overnight and what arrangements
                are available if charging is not possible.
                These details are especially important when
                riding through mountain valleys or away from
                regular services.
              </p>

              <p>
                Bike suitability matters too. Frame size,
                riding position, tyre choice, brakes and the
                bike's overall condition all influence comfort
                and control. The type of electric bike should
                match the surfaces and gradients planned for
                the itinerary.
              </p>

              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Discuss Your E-Bike Requirements
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">
                WHERE TO RIDE
              </p>
              <h2>
                Discover e-bike destinations across Morocco.
              </h2>
            </div>

            <p>
              From the High Atlas to the countryside around
              Marrakech and the open terrain of Agafay, Morocco
              offers different environments to explore by
              electric mountain bike. Mountain routes, valley
              tracks and drier southern landscapes each have
              their own riding conditions. The right destination
              depends on your riding preferences, available
              time, equipment and seasonal conditions.
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
                    E-MTB DESTINATION
                  </span>
                  <span className="home-tour-card__level">
                    {destination.title}
                  </span>
                </Link>

                <div className="home-tour-card__body">
                  <p className="home-tour-card__eyebrow">
                    ELECTRIC MOUNTAIN BIKING · {destination.title}
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
            <img
              src="/images/group-ebike-tour-morocco.jpg"
              alt="Riders enjoying an electric mountain bike adventure in Morocco"
              loading="lazy"
            />
          </div>

          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">
              MORE THAN THE RIDE
            </p>

            <h2>
              Discover Morocco's landscapes, villages and mountain culture.
            </h2>

            <p>
              An e-bike holiday is about more than electric
              assistance. It is an opportunity to travel through
              changing landscapes, pause at mountain viewpoints
              and experience rural Morocco at a pace that leaves
              space for discovery. A journey can include village
              stops, time to appreciate the scenery and
              opportunities to experience local food and culture
              between rides.
            </p>

            <p>
              In the Atlas Mountains, the landscape changes
              with altitude and location. Mountain villages,
              cultivated valleys, open slopes and high passes
              create a varied setting for a cycling journey.
              The experience is not only about covering distance;
              allowing time for stops and enjoying the surroundings
              can be an important part of the trip.
            </p>

            <p>
              A well-planned itinerary allows the practical
              details to support the experience. Distances,
              elevation, battery capacity, charging, recovery
              time and transfers all deserve attention. These
              considerations become particularly important
              when a route connects different valleys or
              travels away from regular services.
            </p>

            <p>
              If you are interested in local culture as well
              as riding, ask how much time the itinerary allows
              for village visits, meals and stops along the way.
              The daily schedule should balance the riding
              objectives with enough time to enjoy the places
              through which you travel.
            </p>

            <Link
              className="cl-button cl-button--dark"
              href="/about"
            >
              Learn About Our Approach
            </Link>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">
                  PLAN WITH CONFIDENCE
                </p>
                <h2>
                  What to consider when planning an e-bike holiday.
                </h2>
              </div>

              <p>
                Electric mountain bike trips require a balance
                between riding ambition and practical details.
                Clear conversations about experience, terrain,
                equipment and battery range help you prepare
                for a journey that suits your group. Before
                choosing a tour, make sure you understand
                what the route involves and what support
                is available.
              </p>
            </div>

            <div className="cl-why-grid">
              <article>
                <span>01</span>
                <h3>Routes suited to your ability</h3>
                <p>
                  Discuss your riding confidence, fitness and
                  preferred terrain so that route options can
                  be considered around your experience. Ask
                  about steep sections, loose surfaces and
                  technical descents before choosing a ride.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Battery-aware planning</h3>
                <p>
                  Consider daily elevation, distance, assistance
                  settings and charging options when planning
                  each stage. Ask how the itinerary accounts
                  for changing conditions and unexpected
                  battery consumption.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Thoughtful logistics</h3>
                <p>
                  Talk through bike requirements, transfers,
                  accommodation, luggage arrangements and
                  mechanical support. For multi-day routes,
                  confirm where batteries can be charged
                  overnight.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Time to discover Morocco</h3>
                <p>
                  Make room for mountain views, village life,
                  local food and the places that give your
                  Moroccan journey its character. A good
                  itinerary should balance riding time with
                  opportunities to enjoy the surroundings.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">
                START PLANNING
              </p>
              <h2>
                How to organise your e-bike tour in Morocco.
              </h2>
            </div>

            <p>
              You do not need to have every detail decided
              before making an enquiry. Start with your dates,
              riding preferences and group requirements, then
              discuss which regions and route options might
              suit your plans. The more information you can
              share about your experience and equipment needs,
              the easier it is to assess the practical details.
            </p>
          </div>

          <div className="cl-steps">
            <article>
              <span>STEP 01</span>
              <h3>Tell us about your riding</h3>
              <p>
                Share your experience, fitness, group size,
                preferred bike type and the style of terrain
                you enjoy. Let us know whether you regularly
                ride off-road and whether you have previous
                experience with electric mountain bikes.
              </p>
            </article>

            <article>
              <span>STEP 02</span>
              <h3>Discuss the route and battery plan</h3>
              <p>
                Compare destinations, distances, elevation,
                likely battery requirements, charging
                arrangements and seasonal conditions. Ask
                for the proposed terrain and daily stages
                so you can understand the effort involved.
              </p>
            </article>

            <article>
              <span>STEP 03</span>
              <h3>Review the practical details</h3>
              <p>
                Discuss the itinerary, equipment, transfers,
                accommodation, meals and support before making
                final arrangements. Confirm what is included,
                what is not included and how changes to the
                route would be handled.
              </p>
            </article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">
                GOOD TO KNOW
              </p>

              <h2>
                E-bike tours in Morocco: frequently asked questions
              </h2>

              <p>
                Find answers to common questions about electric
                mountain bike riding, batteries, route difficulty,
                destinations and preparing for a cycling holiday.
                Understanding the terrain, equipment and daily
                arrangements can help you choose a trip that
                suits your experience. For advice about a
                particular journey, contact us with your
                travel dates and riding preferences.
              </p>

              <Link className="cl-text-link" href="/contact">
                Ask us about your e-bike tour <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="cl-faq-list">
              {faqs.map((faq, index) => (
                <details
                  className="cl-faq-item"
                  key={faq.question}
                  open={index === 0}
                >
                  <summary>
                    {faq.question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="cl-final-cta">
          <img
            src="/images/mountain-biking-atlas-mountains-morocco.jpg"
            alt="Atlas Mountain scenery for an electric mountain bike holiday in Morocco"
            loading="lazy"
          />

          <div className="cl-final-cta__overlay" />

          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">
              YOUR NEXT E-BIKE ADVENTURE
            </p>

            <h2>
              Ready to explore Morocco on an electric mountain bike?
            </h2>

            <p>
              Tell us when you would like to travel, how you
              prefer to ride, your experience and what kind
              of landscape you want to explore. Let us know
              your group size and whether you need an electric
              bike or plan to bring your own. Start planning
              your e-bike holiday by discussing the routes,
              equipment, battery arrangements and practical
              details for your trip.
            </p>

            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href="/contact"
              >
                Plan Your E-Bike Holiday
              </Link>

              <Link
                className="cl-button cl-button--outline"
                href="/cycling-trips/e-mtb"
              >
                View All E-MTB Tours
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer cycling-listing__footer">
        <div className="page-width footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <img
                className="brand__logo"
                src="/images/mountain-bike-morocco-logo.png"
                alt="Mountain Bike Morocco"
              />
              <span>
                MOUNTAIN BIKE <em>MOROCCO</em>
              </span>
            </Link>

            <p>
              Guided mountain biking, E-MTB, gravel and road cycling
              experiences across Morocco. Discover the landscapes,
              trails and local culture at your own pace.
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
          <span>© {2026} Mountain Bike Morocco</span>
          <span>Morocco cycling adventures, thoughtfully planned.</span>
        </div>
      </footer>
    </>
  );
}