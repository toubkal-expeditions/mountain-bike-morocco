import Link from "next/link";

const emtbTours = [
  {
    number: "01",
    duration: "Day Tour",
    label: "DAY RIDES & FLEXIBLE ADVENTURES",
    title: "E-MTB Day Tours from Marrakech",
    description:
      "Discover the landscapes around Marrakech on an electric mountain bike adventure designed around your available time and riding experience. Explore countryside tracks, rolling foothills and scenic trails while enjoying assistance on climbs and longer stretches. Before your ride, discuss the terrain, battery range, transfers and equipment to ensure the route suits your group and the conditions of the day.",
    image: "/images/day-ebike-tour-from-marrakech.jpg",
    href: "/cycling-trips/trip/emtb-day-tours-from-marrakech-day-tour",
  },
  {
    number: "02",
    duration: "Flexible duration",
    label: "HIGH MOUNTAINS & SCENIC TRAILS",
    title: "Atlas Mountains E-MTB Tours",
    description:
      "Explore the High Atlas by electric mountain bike, where mountain tracks, terraced valleys and traditional Amazigh villages create an unforgettable backdrop. Electric assistance can help you manage demanding climbs while leaving more energy to appreciate the scenery and enjoy the descent. Route selection should take account of elevation, trail conditions, battery capacity, technical difficulty and your group's experience.",
    image: "/images/eBike-tour-atlas-mountains-morocco.jpg",
    href: "/cycling-trips/trip/atlas-mountains-emtb-tours-flexible-duration",
  },
  {
    number: "03",
    duration: "3 days",
    label: "MULTI-DAY MOUNTAIN EXPLORATION",
    title: "Three-Day Atlas E-Bike Escape",
    description:
      "Spend several days discovering the Atlas Mountains with an itinerary that balances riding, mountain scenery and time in the villages along the route. A multi-day electric mountain bike trip requires careful planning for daily distances, charging arrangements, accommodation and luggage transfers where needed. The itinerary can be discussed around your dates, preferred pace and the kind of terrain you enjoy riding.",
    image: "/images/atlas_mountain_ebike_tour_3days-2.jpg",
    href: "/cycling-trips/trip/three-day-atlas-e-bike-escape-3-day",
  },
  {
    number: "04",
    duration: "Private itinerary",
    label: "PERSONALISED CYCLING HOLIDAYS",
    title: "Private E-MTB Holidays",
    description:
      "A private electric mountain bike holiday gives your group greater flexibility over travel dates, destinations, daily distances and the balance between riding and exploring Morocco. It can suit friends, couples, families with appropriate riding experience or cycling groups who want to travel together. Share your preferred bike type, fitness, group size and accommodation expectations so the practical arrangements can be considered before an itinerary is confirmed.",
    image: "/images/group-ebike-tour-morocco.jpg",
    href: "/cycling-trips/trip/private-emtb-holidays-private-itinerary",
  },
  {
    number: "05",
    duration: "Flexible duration",
    label: "VILLAGES, VALLEYS & RURAL TRACKS",
    title: "Imlil and Ouirgane E-MTB Adventures",
    description:
      "Discover the quieter side of the Atlas through mountain villages, cultivated valleys and rural tracks around the Imlil and Ouirgane areas. Electric assistance can make some climbs more manageable, but rocky surfaces, steep sections and changing trail conditions still require suitable handling skills. A route should be selected according to the abilities of your group, available riding time and the support required along the way.",
    image: "/images/ouirgane-valley-ebike-tour.jpg",
    href: "/cycling-trips/trip/imlil-and-ouirgane-emtb-adventures-flexible-duration",
  },
  {
    number: "06",
    duration: "Flexible duration",
    label: "OPEN LANDSCAPES & DESERT EDGE",
    title: "Agafay and Southern Morocco E-MTB",
    description:
      "Experience a different side of Morocco on electric-assisted rides through open, rocky landscapes and selected routes in the south. These environments offer wide horizons and a contrast to the greener mountain valleys, but exposed terrain and heat can increase the demands of a ride. Planning should account for water, temperature, battery range, route surfaces and support arrangements before departure.",
    image: "/images/saghro-morocco-e-bike-tour.jpg",
    href: "/cycling-trips/trip/agafay-and-southern-morocco-emtb-flexible-duration",
  },
  {
    number: "07",
    duration: "2 days",
    label: "BERBER VILLAGES & VALLEY TRACKS",
    title: "Atlas Berber Valley E-Bike Tour",
    description:
      "Spend two days riding through the Atlas foothills, with routes planned around traditional Berber villages, cultivated terraces and valley scenery. Electric assistance can help on climbs, while the daily distance and trail difficulty should be matched to your riding experience. The itinerary can include time for village stops and landscape viewpoints, with transfers and overnight arrangements discussed before travel.",
    image: "/images/berber-villages-cycling-expeditions.jpg",
    href: "/cycling-trips/trip/atlas-berber-valley-e-bike-tour-2-day",
  },
  {
    number: "08",
    duration: "4 days",
    label: "MOUNTAIN TRAILS & HIGH ATLAS SCENERY",
    title: "Atlas Mountains E-Bike Tour",
    description:
      "Explore the Atlas Mountains over four days of electric-assisted riding through mountain tracks, rural valleys and traditional settlements. Route planning should balance climbing, technical sections, daily distance and time to enjoy the landscape. Battery range, charging arrangements and support between stages need to be considered when shaping the final itinerary.",
    image: "/images/e-bike-tour-atlas-mountains.jpg",
    href: "/cycling-trips/trip/atlas-mountains-e-bike-tour-4-day",
  },
  {
    number: "09",
    duration: "8 days",
    label: "MOUNTAINS TO DESERT LANDSCAPES",
    title: "Atlas & Desert E-MTB Tour",
    description:
      "Connect the High Atlas with the changing landscapes of southern Morocco on an eight-day journey concept. The trip can combine mountain riding, remote tracks and desert-edge scenery, with transfer time planned realistically between regions. Daily stages, battery logistics, water, accommodation and seasonal conditions all need to be reviewed before the route is confirmed.",
    image: "/images/sahara-desert-ebike-expeditions.jpg",
    href: "/cycling-trips/trip/atlas-and-desert-emtb-tour-8-day",
  },
  {
    number: "10",
    duration: "4 days",
    label: "FAMILY RIDING & SHARED DISCOVERY",
    title: "Morocco Family E-Bike Tour",
    description:
      "Plan a four-day family cycling holiday around suitable routes, the ages and abilities of the riders, and the kind of experience everyone hopes to enjoy. Electric assistance may help eligible riders manage gentle climbs, but bike fit, handling skills and route selection remain important. The itinerary should include manageable stages, breaks, support arrangements and accommodation that work for your family.",
    image: "/images/group-ebike-tour-morocco.jpg",
    href: "/cycling-trips/trip/morocco-family-e-bike-tour-4-day",
  },
  {
    number: "11",
    duration: "5 days",
    label: "COMFORT, SCENERY & PRIVATE RIDING",
    title: "Atlas Luxury E-Bike Tour",
    description:
      "Combine electric-assisted riding in the Atlas with a more comfort-focused holiday planned around your preferred accommodation and pace. A five-day itinerary can be discussed with attention to route quality, transfers, daily distances and time to enjoy the region away from the bike. The final inclusions, lodging and support arrangements should be agreed before booking.",
    image: "/images/luxury-biking-ebike-tours-morocco.jpg",
    href: "/cycling-trips/trip/atlas-luxury-e-bike-tour-5-day",
  },
  {
    number: "12",
    duration: "3 days",
    label: "A SHORT MOROCCO CYCLING ESCAPE",
    title: "Morocco E-MTB Tour",
    description:
      "Make the most of a three-day trip with an electric mountain bike itinerary shaped around your experience and available time. Choose a suitable area, then discuss daily riding, transfers, charging opportunities and the balance between time on the trail and discovering local scenery. The route should reflect current conditions and the needs of your group.",
    image: "/images/e-mtb-tour-holiday-morocco.jpg",
    href: "/cycling-trips/trip/morocco-emtb-tour-3-day",
  },
  {
    number: "13",
    duration: "6 days",
    label: "FROM MOUNTAIN INTERIORS TO THE COAST",
    title: "Atlas to Atlantic Coast E-Bike Tour",
    description:
      "Discuss a six-day journey linking the Atlas region with Morocco's Atlantic coast, combining varied landscapes and electric-assisted riding. The itinerary needs to account for the distances between regions, transfer logistics and where suitable cycling stages fit. Daily routes, charging, accommodation and the season should all be considered before travel plans are finalised.",
    image: "/images/essaouira-cycling-holiday.jpg",
    href: "/cycling-trips/trip/atlas-to-atlantic-coast-e-bike-tour-6-day",
  },
  {
    number: "14",
    duration: "8 days",
    label: "SOUTHERN VALLEYS & OPEN TERRAIN",
    title: "South Morocco E-Bike Tour",
    description:
      "Explore southern Morocco over eight days with an itinerary designed around the region's valleys, mountain scenery and more open terrain. Route planning should allow for longer transfers, remote stretches, water, weather and charging needs. Share your preferred pace and the type of riding you enjoy so the proposed stages can be reviewed realistically.",
    image: "/images/south-ebike-tourmorocco.jpg",
    href: "/cycling-trips/trip/south-morocco-e-bike-tour-8-day",
  },
  {
    number: "15",
    duration: "3 days",
    label: "VALLEY TRAILS & RURAL VILLAGES",
    title: "Three Valley E-Bike Tour",
    description:
      "Discover three contrasting valleys on a three-day electric mountain bike experience, with riding planned around the terrain and the group's confidence. The route can balance countryside tracks, climbs and time to stop in villages or at scenic viewpoints. Daily distances, battery requirements and any transfers should be confirmed as part of the itinerary.",
    image: "/images/ouirgane-valley-ebike-tour.jpg",
    href: "/cycling-trips/trip/three-valley-e-bike-tour-3-day",
  },
  {
    number: "16",
    duration: "7 days",
    label: "CITY ACCESS & ATLAS EXPLORATION",
    title: "Atlas Marrakech E-Bike Tour",
    description:
      "Begin in Marrakech and explore selected countryside and Atlas routes on a seven-day electric mountain bike journey concept. A trip of this length gives room to discuss more than one riding area, while still allowing for realistic transfer times, battery planning and recovery. The final itinerary should match your travel dates, riding experience and preferred accommodation.",
    image: "/images/e-mtb-tour-from-marrakech.jpg",
    href: "/cycling-trips/trip/atlas-marrakech-e-bike-tour-7-day",
  },
  {
    number: "17",
    duration: "4 days",
    label: "ATLAS MOUNTAIN RIDING",
    title: "E-Bike Tour Atlas Mountains",
    description:
      "Spend four days exploring selected Atlas Mountain routes by electric bike. The terrain may range from rural tracks to more demanding mountain sections, so route choice should reflect the group's skills, fitness and confidence. Discuss battery range, charging options, accommodation and support before choosing the stages for your trip.",
    image: "/images/atlas_mountain_ebike_tour_3days-6.jpg",
    href: "/cycling-trips/trip/e-bike-tour-atlas-mountains-4-day",
  },
];

const destinations = [
  {
    title: "High Atlas Mountains",
    text:
      "Mountain scenery, traditional settlements and varied tracks make the High Atlas a natural starting point for an electric mountain bike holiday. The right route depends on altitude, trail conditions, climbing ability, battery range and the amount of time you have available.",
    image: "/images/eBike-tour-atlas-mountains-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Imlil and Toubkal Region",
    text:
      "Explore the mountain landscapes around Imlil, where terraced fields, village paths and rugged tracks create a distinctive setting for guided riding. Discuss the route surface and technical difficulty in advance, particularly where trails are steep, rocky or exposed.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil-toubkal",
  },
  {
    title: "Marrakech and the Foothills",
    text:
      "Marrakech provides a convenient base for shorter E-MTB experiences and journeys into the surrounding countryside. Depending on the route, you can combine a city stay with guided riding, rural scenery and time exploring areas outside the busiest streets.",
    image: "/images/e-mtb-tour-from-marrakech.jpg",
    href: "/destinations/marrakech",
  },
  {
    title: "Agafay and Open Terrain",
    text:
      "The rocky landscapes around Agafay provide a contrast to the higher Atlas valleys. Route planning should take account of exposed conditions, loose stones, water requirements, temperature and battery capacity, particularly during warmer periods.",
    image: "/images/Agafay-desert-morocco.jpg",
    href: "/destinations/agafay-desert",
  },
];

const faqs = [
  {
    question: "What is an E-MTB tour in Morocco?",
    answer:
      "An E-MTB tour uses an electric mountain bike to assist your pedalling while you explore trails, mountain tracks and countryside routes. Assistance can help on climbs and longer rides, but you still need to pedal, control the bike and ride within your abilities. The suitable route depends on your fitness, handling skills, the terrain and the conditions on the day.",
  },
  {
    question: "Do I need experience riding an electric mountain bike?",
    answer:
      "Experience with a mountain bike is useful because electric assistance does not remove the challenges of rocky surfaces, steep gradients, loose stones or technical descents. Riders new to E-MTBs should become familiar with the bike's weight, braking and assistance settings before attempting difficult terrain. Tell us about your experience so the route can be discussed appropriately.",
  },
  {
    question: "How far can I ride on an E-MTB battery?",
    answer:
      "Battery range varies with the bike and battery, rider weight, elevation, assistance setting, temperature, trail surface and riding style. Long climbs and high assistance levels can use more energy than easier terrain. Your itinerary should allow a realistic battery margin and account for available charging or other support where required.",
  },
  {
    question: "When is the best time for an E-MTB holiday in Morocco?",
    answer:
      "Spring and autumn are often suitable periods for many lower and mid-altitude routes, but the best dates depend on the region and elevation. Higher mountain areas may be cold or affected by snow, while lower terrain can become very hot in summer. Check conditions for your intended route and travel dates before confirming your trip.",
  },
  {
    question: "Can beginners join an electric mountain bike tour?",
    answer:
      "Some easier routes may suit recreational riders with basic cycling skills, but not every mountain trail is appropriate for beginners. Electric assistance helps with pedalling but does not make technical descents or difficult surfaces automatically easy. Share the group's experience, fitness and confidence so a more appropriate route can be considered.",
  },
  {
    question: "Can I bring my own electric mountain bike?",
    answer:
      "You can discuss travelling with your own E-MTB when making an enquiry. Airline battery policies, transport arrangements, charging requirements and the bike's condition all need consideration. Provide the bike model, battery details and any special equipment needs so the arrangements can be reviewed before travel.",
  },
  {
    question: "Can an E-MTB trip be organised for a private group?",
    answer:
      "You can enquire about a private trip for friends, a cycling club or a group travelling together. Useful details include your travel dates, number of riders, experience levels, preferred regions, bike requirements and accommodation preferences. If riders have different abilities or battery requirements, these should be considered during route planning.",
  },
];

export default function ElectricMountainBikeToursPage() {
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
            <p className="cl-eyebrow">E-MTB · ATLAS MOUNTAINS · MOROCCO</p>
            <h1>Electric Mountain Bike Tours in Morocco</h1>
            <p className="cl-hero__intro">
              Discover Morocco on an electric mountain bike, from Atlas Mountain
              trails and traditional villages to scenic countryside routes near
              Marrakech. Explore more of the landscape with a ride planned around
              your experience, preferred terrain, battery range and the kind of
              adventure you want.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="/contact">
                Plan Your E-MTB Trip
              </Link>
              <Link className="cl-button cl-button--outline" href="#emtb-options">
                Explore E-MTB Tours
              </Link>
            </div>
            <div className="cl-hero__meta">
              <span>ELECTRIC-ASSISTED RIDING</span>
              <span>PRIVATE OPTIONS</span>
              <span>ROUTES TO SUIT YOUR LEVEL</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">RIDE FURTHER. DISCOVER MORE.</p>
            <h2>Explore Morocco's mountain landscapes with electric assistance.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              An electric mountain bike can open up different ways to experience
              Morocco. Pedal-assisted riding can help on long climbs and make it
              easier to maintain a steady pace across varied terrain. In the
              Atlas Mountains, this can create more opportunities to enjoy
              mountain views, pass through traditional villages and explore
              remote countryside without making every climb the main focus of
              the day.
            </p>
            <p>
              Choosing the right E-MTB journey still requires careful planning.
              Bike handling, elevation, trail surface, battery range and the
              availability of charging all affect how a ride feels. We recommend
              sharing your riding experience, preferred bike type, travel dates
              and expectations at the beginning so that the route and practical
              arrangements can be discussed realistically.
            </p>
            <p>
              Whether you have time for a guided day ride or want to discuss a
              longer mountain itinerary, the aim is to find an experience that
              balances enjoyable riding with the landscapes and local culture
              you want to discover.
            </p>
            <Link className="cl-text-link" href="/cycling-trips">
              Explore all cycling tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="emtb-options">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR E-MTB EXPERIENCE</p>
                <h2>Electric mountain bike holidays and guided riding experiences</h2>
              </div>
              <p>
                Choose from day rides and multi-day journeys through Morocco's
                mountain regions, valleys, desert landscapes and coast. Each
                itinerary should be matched to your riding experience, battery
                requirements, available time and preferred terrain.
              </p>
            </div>

            <div className="cl-tour-grid">
              {emtbTours.map((tour) => (
                <article className="cl-tour-card" key={tour.number}>
                  <Link
                    className="cl-tour-card__image-link"
                    href={tour.href}
                    aria-label={`More details about ${tour.title}`}
                  >
                    <img
                      className="cl-tour-card__image"
                      src={tour.image}
                      alt={tour.title}
                      loading="lazy"
                    />
                    <span className="cl-tour-card__number">{tour.number}</span>
                  </Link>
                  <div className="cl-tour-card__body">
                    <p className="cl-card-label">{tour.label} · {tour.duration}</p>
                    <h3>
                      <Link href={tour.href}>
                        {tour.title}
                      </Link>
                    </h3>
                    <p>{tour.description}</p>
                    <div className="cl-tour-card__actions">
                      <Link
                        className="cl-button cl-button--dark"
                        href={tour.href}
                      >
                        More Details
                      </Link>
                      <Link
                        className="cl-button cl-button--gold"
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
              <p className="cl-eyebrow">YOUR BATTERY. YOUR ROUTE. YOUR PACE.</p>
              <h2>Good E-MTB planning means more confidence on every ride.</h2>
            </div>
            <div>
              <p>
                Electric assistance can help you enjoy longer climbs, but battery
                use depends on elevation, terrain, assistance level and riding
                conditions. A realistic plan considers your bike's range,
                charging opportunities, daily distance and the support available
                along the route. We can discuss these details with you before
                your itinerary is confirmed.
              </p>
              <Link className="cl-button cl-button--gold" href="/contact">
                Discuss Your E-MTB Requirements
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">WHERE TO RIDE</p>
              <h2>Explore E-MTB destinations across Morocco</h2>
            </div>
            <p>
              The best destination depends on your preferred riding style, the
              amount of climbing you enjoy, the available time and seasonal
              conditions. Explore these regions as a starting point for planning
              an electric mountain bike experience.
            </p>
          </div>
          <div className="cl-region-grid">
            {destinations.map((destination, index) => (
              <article className="cl-region-card" key={destination.title}>
                <Link className="cl-region-card__image-wrap" href={destination.href} aria-label={destination.title}>
                  <img src={destination.image} alt={destination.title} loading="lazy" />
                  <span>0{index + 1}</span>
                </Link>
                <div className="cl-region-card__body">
                  <h3><Link href={destination.href}>{destination.title}</Link></h3>
                  <p>{destination.text}</p>
                  <Link className="cl-text-link" href={destination.href}>Explore the region <span aria-hidden="true">↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cl-editorial">
          <div className="cl-editorial__image">
            <img src="/images/group-ebike-tour-morocco.jpg" alt="Riders enjoying an electric-assisted cycling adventure in Morocco" loading="lazy" />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">BEYOND THE BATTERY</p>
            <h2>Discover the landscapes, villages and quieter trails of Morocco.</h2>
            <p>
              An E-MTB holiday is about more than electric assistance. It is an
              opportunity to travel through changing landscapes, pause at
              mountain viewpoints and experience rural Morocco at a pace that
              leaves space for discovery. The journey can include village visits,
              time to appreciate the scenery and opportunities to experience
              local food and culture between rides.
            </p>
            <p>
              A well-planned itinerary allows the practical details to support
              the experience. Distances, elevation, battery capacity, charging,
              recovery time and transfers all deserve attention. These
              considerations are especially important when a route connects
              different valleys or travels away from regular services. Planning
              them in advance helps establish realistic stages for your group.
            </p>
            <Link className="cl-button cl-button--dark" href="/about">Learn About Our Approach</Link>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">WHY PLAN YOUR RIDE WITH US</p>
                <h2>Local insight and practical planning for your E-MTB holiday.</h2>
              </div>
              <p>
                Electric mountain bike trips require a balance between riding
                ambition and practical details. Clear conversations about
                experience, terrain, equipment and battery range help you prepare
                for a journey that suits your group.
              </p>
            </div>
            <div className="cl-why-grid">
              <article><span>01</span><h3>Routes suited to your ability</h3><p>Discuss riding confidence, fitness and preferred terrain so that the route can be considered around your experience.</p></article>
              <article><span>02</span><h3>Battery-aware planning</h3><p>Consider daily elevation, distance, assistance settings and charging options when planning each stage of the journey.</p></article>
              <article><span>03</span><h3>Thoughtful logistics</h3><p>Talk through bike requirements, transfers, accommodation and any support needed for your chosen route.</p></article>
              <article><span>04</span><h3>More than the ride</h3><p>Make time for mountain views, village life, local food and the places that give your Moroccan journey its character.</p></article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">PLAN YOUR E-MTB HOLIDAY</p>
              <h2>Three steps to start planning your electric bike adventure.</h2>
            </div>
            <p>
              You do not need to have every detail decided before making an
              enquiry. Start with your dates, riding preferences and group
              requirements, then discuss which regions and route options might
              suit your plans.
            </p>
          </div>
          <div className="cl-steps">
            <article><span>STEP 01</span><h3>Tell us about your riding</h3><p>Share your experience, fitness, group size, preferred bike type and the style of terrain you enjoy.</p></article>
            <article><span>STEP 02</span><h3>Discuss the route and battery plan</h3><p>Compare destinations, distances, elevation, likely battery requirements, charging arrangements and seasonal conditions.</p></article>
            <article><span>STEP 03</span><h3>Review the practical details</h3><p>Discuss the itinerary, equipment, transfers, accommodation and inclusions before making final arrangements.</p></article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
              <h2>Electric mountain biking in Morocco: FAQs</h2>
              <p>
                Find answers to common questions about E-MTB riding, batteries,
                route difficulty and preparing for a cycling holiday. For advice
                about a particular journey, contact us with your dates and riding
                preferences.
              </p>
              <Link className="cl-text-link" href="/contact">Ask us about your trip <span aria-hidden="true">↗</span></Link>
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
          <img src="/images/mountain-biking-atlas-mountains-morocco.jpg" alt="Atlas Mountain scenery for an electric mountain bike holiday" loading="lazy" />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR NEXT E-MTB ADVENTURE</p>
            <h2>Ready to discover Morocco on an electric mountain bike?</h2>
            <p>
              Tell us when you would like to travel, how you prefer to ride and
              what kind of landscape you want to explore. We can start a
              conversation about the routes, equipment and practical arrangements
              for an E-MTB holiday that fits your plans.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="/contact">Plan Your E-MTB Holiday</Link>
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
          <span>© {new Date().getFullYear()} Mountain Bike Morocco</span>
          <span>Morocco cycling adventures, thoughtfully planned.</span>
        </div>
      </footer>
    </>
  );
}
