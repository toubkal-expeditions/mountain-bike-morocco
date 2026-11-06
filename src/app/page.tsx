"use client";

import Link from "next/link";

const tours = [
  {
    category: "MTB ADVENTURE",
    title: "Atlas Mountains Mountain Bike Tour",
    description:
      "Explore the spectacular trails of Morocco's High Atlas Mountains on a guided mountain biking adventure. Ride ancient mule tracks, discover traditional Amazigh villages, cross dramatic valleys and enjoy panoramic mountain scenery with experienced local guides. Each itinerary can be adapted to your experience, technical ability and preferred riding distance.",
    duration: "3–7 days",
    level: "Intermediate",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/cycling-trips/high-atlas",
  },
  {
    category: "MTB ADVENTURE",
    title: "High Atlas Singletrack Expedition",
    description:
      "Spend several days discovering the riding potential of the High Atlas. Each stage reveals a different landscape, from rocky mountain paths to terraced farmland and remote villages. We plan the route, local stays and support around your group's needs, creating a multi-day experience that balances riding, scenery and cultural discovery.",
    duration: "4–7 days",
    level: "Experienced",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/cycling-trips/high-atlas",
  },
  {
    category: "MTB ADVENTURE",
    title: "Anti-Atlas Mountain Bike Tour",
    description:
      "Discover the rugged landscapes of southern Morocco on a mountain biking journey through the Anti-Atlas. Explore rocky tracks, remote valleys and traditional villages while enjoying the distinctive scenery of this quieter mountain region. Your itinerary can be adapted to your riding experience, preferred daily distances and available travel time.",
    duration: "3–6 days",
    level: "Intermediate",
    image: "/images/anti-atlas-cycling-tour.jpg",
    href: "/cycling-trips/mtb",
  },
  {
    category: "E-MTB EXPERIENCE",
    title: "Atlas Mountains E-MTB Adventure",
    description:
      "Discover more of Morocco with the assistance of a modern electric mountain bike. Explore scenic singletrack, remote mountain villages and rewarding descents, with flexible itineraries suited to different fitness levels. Enjoy the freedom to cover more terrain while experiencing the landscapes and culture of the Atlas Mountains.",
    duration: "2–6 days",
    level: "All levels",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/cycling-trips/e-mtb",
  },
  {
    category: "E-MTB EXPERIENCE",
    title: "E-Bike Day Tour from Marrakech",
    description:
      "Escape the busy streets of Marrakech and discover the surrounding countryside on an electric bike. Ride through foothills, rural tracks and traditional villages on a route selected according to your experience, available time and preferred riding style. Enjoy a rewarding day outdoors with assistance on the climbs and time to appreciate the scenery.",
    duration: "1 day",
    level: "Flexible",
    image: "/images/day-ebike-tour-from-marrakech.jpg",
    href: "/cycling-trips/from-marrakech",
  },
  {
    category: "E-MTB EXPERIENCE",
    title: "High Atlas Electric Bike Expedition",
    description:
      "Explore the High Atlas on an electric mountain bike journey designed to combine scenic climbs, mountain trails and visits to traditional villages. Electric assistance can help you cover more ground while keeping the experience focused on the landscape and the ride. Routes and daily distances can be adapted to your group and riding goals.",
    duration: "3–5 days",
    level: "All levels",
    image: "/images/atlas-mountains-ebike-tour.jpg",
    href: "/cycling-trips/e-mtb",
  },
  {
    category: "GRAVEL CYCLING",
    title: "Gravel Roads from the Atlas to the Desert",
    description:
      "Follow quiet mountain roads, remote gravel tracks and spectacular routes through changing Moroccan landscapes. Connect mountain passes, rural communities and wide-open valleys on a journey planned around your preferred pace, daily distance and cycling experience.",
    duration: "5–9 days",
    level: "Intermediate",
    image: "/images/gravel-cycling-morocco.jpg",
    href: "/cycling-trips/gravel",
  },
  {
    category: "GRAVEL CYCLING",
    title: "Southern Morocco Gravel Expedition",
    description:
      "Ride across the varied landscapes of southern Morocco on a gravel adventure linking quiet roads, remote tracks and open countryside. Experience the changing scenery, discover rural communities and enjoy long days in the saddle away from busy highways. Your itinerary can be tailored to your preferred distance and level of challenge.",
    duration: "5–8 days",
    level: "Intermediate",
    image: "/images/south-morocco-cycling-trips.jpg",
    href: "/cycling-trips/gravel",
  },
  {
    category: "GRAVEL CYCLING",
    title: "Atlas Mountains Gravel Adventure",
    description:
      "Discover the Atlas Mountains on a gravel bike, following quiet roads, mountain passes and tracks through traditional villages and dramatic valleys. This journey combines rewarding climbs, sweeping views and opportunities to experience local life along the route. Choose an itinerary suited to your riding experience, preferred pace and available time.",
    duration: "3–7 days",
    level: "Intermediate",
    image: "/images/gravel-bike-atlas-mountains.JPG",
    href: "/cycling-trips/gravel",
  },
];

const destinations = [
  {
    title: "High Atlas Mountains",
    description:
      "Ride through high mountain passes, deep valleys and dramatic landscapes. The Atlas offers a varied network of tracks and trails, with routes for adventurous riders looking for remote scenery and meaningful encounters with local communities. Discover mountain terrain and traditional settlements while exploring one of Morocco's most distinctive cycling regions.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Imlil and Mount Toubkal",
    description:
      "Discover the mountain villages around Imlil and the rugged foothills of Mount Toubkal. This region combines traditional architecture, terraced fields and spectacular mountain views, making it an inspiring base for guided rides and multi-day adventures. Explore the surrounding valleys and learn about the landscapes and communities of the High Atlas.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil",
  },
  {
    title: "Agafay and the Desert",
    description:
      "Explore open, rocky terrain and wide horizons outside Marrakech. The Agafay region and Morocco's desert landscapes offer a different kind of adventure, with scenic tracks, changing light and opportunities to combine cycling with cultural discovery. These landscapes are ideal for riders seeking a contrast to the high mountain trails.",
    image: "/images/Desert-Agafay-Morocco.jpg",
    href: "/destinations/agafay-desert",
  },
];

const reasons = [
  {
    number: "01",
    title: "Local knowledge",
    text: "Our itineraries are shaped by knowledge of the region, its villages, tracks and changing conditions. We help you discover routes and places that make sense for your group, not simply follow a fixed checklist.",
  },
  {
    number: "02",
    title: "Rides for your level",
    text: "From relaxed scenic rides to technical mountain trails and longer gravel journeys, we discuss your experience and goals before recommending a suitable route, pace and itinerary.",
  },
  {
    number: "03",
    title: "Thoughtful support",
    text: "Good planning makes an adventure more enjoyable. We coordinate the practical details of your trip, explain what to expect and help you prepare for the terrain, weather, equipment and daily riding.",
  },
  {
    number: "04",
    title: "A closer look at Morocco",
    text: "Cycling creates time to appreciate everyday life beyond the main roads. Discover mountain scenery, local food, traditional villages and the different landscapes that make Morocco such a rewarding place to explore.",
  },
];

const experiences = [
  {
    title: "Mountain Bike Tours",
    description:
      "Explore mountain trails, rocky paths and rewarding descents through the Atlas and beyond.",
    href: "/cycling-trips/mtb",
  },
  {
    title: "E-MTB Holidays",
    description:
      "Cover more ground and climb further with electric mountain bikes on carefully selected routes.",
    href: "/cycling-trips/e-mtb",
  },
  {
    title: "Gravel Cycling",
    description:
      "Follow quiet roads and remote tracks through mountains, valleys and open countryside.",
    href: "/cycling-trips/gravel",
  },
  {
    title: "Road Cycling",
    description:
      "Discover scenic climbs, winding mountain roads and long rides through Morocco's varied terrain.",
    href: "/cycling-trips/road",
  },
  {
    title: "Family Cycling",
    description:
      "Enjoy an itinerary planned around your family's ages, confidence, interests and preferred pace.",
    href: "/cycling-trips/family-mtb",
  },
  {
    title: "Luxury Cycling",
    description:
      "Combine active days outdoors with carefully selected accommodation, local experiences and attentive planning.",
    href: "/cycling-trips/luxury",
  },
  {
    title: "Private Group Tours",
    description:
      "Travel with friends or your own group on a route adapted to your dates and riding goals.",
    href: "/cycling-trips/private-groups",
  },
  {
    title: "Cycling from Marrakech",
    description:
      "Start near Marrakech and explore accessible mountain, countryside and desert landscapes.",
    href: "/cycling-trips/from-marrakech",
  },
];

const faqs = [
  {
    question: "When is the best time for cycling in Morocco?",
    answer:
      "Spring and autumn are popular periods for many Moroccan cycling routes because temperatures are often more comfortable. Conditions vary by altitude and region, however. Mountain areas can be cold, while lower and desert regions can be hot. We recommend choosing dates according to your destination, riding style and preferred daily distances.",
  },
  {
    question: "Do I need to be an experienced mountain biker?",
    answer:
      "Not for every trip. The technical difficulty and daily effort depend on the itinerary. Some routes suit confident beginners and recreational riders, while remote singletrack and long mountain stages require more experience. Tell us about your riding background so the route can be matched to your abilities.",
  },
  {
    question: "Can I arrange a private or custom cycling holiday?",
    answer:
      "Yes. A private itinerary can be planned around your dates, group size, preferred bike type, accommodation and the places you want to visit. The route and support arrangements should also reflect your experience, fitness and the conditions expected during your trip.",
  },
  {
    question: "Can cycling tours start from Marrakech?",
    answer:
      "Many itineraries can begin in or near Marrakech, depending on the route. The city provides access to the foothills of the Atlas Mountains and other surrounding landscapes. Your proposed itinerary should confirm transfers, meeting points, riding locations and the time needed for each stage.",
  },
  {
    question: "What should I bring on a cycling tour?",
    answer:
      "Bring suitable cycling clothing, gloves, eye protection, comfortable footwear, sun protection and a reusable water bottle or hydration system. Depending on the season and altitude, you may also need warm layers and rain protection. We can provide a more specific equipment list once your route is selected.",
  },
];

const exploreOptions = [
  {
    number: "01",
    eyebrow: "MTB ADVENTURES",
    title: "Mountain Bike Tours in Morocco",
    description:
      "Explore Morocco's mountain biking trails on a guided adventure through the High Atlas Mountains. Ride ancient mule tracks, rocky singletrack and flowing mountain paths connecting remote valleys and traditional Amazigh villages. Each route can be planned around your riding experience, technical ability and preferred riding distance, from rewarding day rides to multi-day mountain bike expeditions. Discover spectacular scenery, experience the region with local guides and enjoy the freedom of exploring beyond the usual tourist routes.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    alt: "Mountain biker riding a singletrack trail in Morocco's Atlas Mountains",
    href: "/cycling-trips/mtb",
    linkText: "Explore mountain bike tours",
  },
  {
    number: "02",
    eyebrow: "E-MTB EXPERIENCES",
    title: "Electric Mountain Biking in Morocco",
    description:
      "Discover more of the Atlas Mountains with an electric mountain bike holiday in Morocco. E-MTB assistance can make longer climbs and extended routes more accessible, leaving more time to explore mountain villages, scenic valleys and rewarding descents. Choose an itinerary that reflects your fitness, experience and preferred riding style, with routes ranging from scenic countryside rides to challenging mountain adventures. Enjoy a flexible way to discover Morocco's varied terrain by bike.",
    image: "/images/e-mtb-tour-morocco.jpg",
    alt: "Electric mountain bike adventure in Morocco",
    href: "/cycling-trips/e-mtb",
    linkText: "Discover E-MTB tours",
  },
  {
    number: "03",
    eyebrow: "GRAVEL JOURNEYS",
    title: "Gravel Cycling and Remote Roads",
    description:
      "Experience a different side of Morocco on a gravel cycling adventure across quiet roads, remote tracks and wide-open landscapes. Travel through mountain passes, agricultural valleys and rural communities while discovering routes away from busy highways. A gravel cycling holiday can combine challenging climbs, long scenic stages and opportunities to experience local culture along the way. Choose a shorter escape or a multi-day expedition connecting different regions, with daily distances and terrain adapted to your goals and experience.",
    image: "/images/gravel-cycling-morocco.jpg",
    alt: "Gravel cycling across Morocco's remote mountain roads",
    href: "/cycling-trips/gravel",
    linkText: "Explore gravel cycling",
  },
  {
    number: "04",
    eyebrow: "PRIVATE HOLIDAYS",
    title: "Private Cycling Holidays in Morocco",
    description:
      "Create a private cycling holiday designed around your interests, travel dates and riding ambitions. Choose your preferred bike type, destinations, daily distances and accommodation style, then build an itinerary that works for your group. Explore the High Atlas Mountains, ride scenic countryside roads or combine different landscapes in one journey. Private trips are ideal for friends, couples, families and cycling clubs who want greater flexibility over the pace and structure of their holiday. Start with your ideas and develop a practical route with local guidance.",
    image: "/images/group-cycling-tour-morocco.jpg",
    alt: "Cyclists enjoying a guided group cycling adventure in Morocco",
    href: "/cycling-trips/private-groups",
    linkText: "Plan a private journey",
  },
  {
    number: "05",
    eyebrow: "LUXURY CYCLING",
    title: "Luxury Cycling Holidays in Morocco",
    description:
      "Combine rewarding days on the bike with carefully selected accommodation, regional food and thoughtful local support. A luxury cycling holiday can connect the High Atlas, countryside roads and southern landscapes at a pace that suits your group. Share your preferred riding style, travel dates, daily distances and comfort preferences so the itinerary can be planned around the experience you want, with logistics and route details confirmed before you travel.",
    image: "/images/group-cycling-tour-morocco.jpg",
    alt: "A guided cycling holiday through Morocco with local support",
    href: "/cycling-trips/luxury",
    linkText: "Explore luxury cycling",
  },
  {
    number: "06",
    eyebrow: "CYCLING FROM MARRAKECH",
    title: "Cycling Trips from Marrakech",
    description:
      "Begin your cycling adventure in Marrakech and ride beyond the city into the foothills of the Atlas Mountains, rural valleys and the rocky landscapes around Agafay. Choose a shorter ride during a city break or discuss a longer itinerary linking different regions. Your route should reflect your available time, cycling experience and preferred terrain, with meeting points, transfers and daily distances agreed as part of the plan.",
    image: "/images/day-ebike-tour-from-marrakech.jpg",
    alt: "Cycling in the countryside near Marrakech, Morocco",
    href: "/cycling-trips/from-marrakech",
    linkText: "Explore trips from Marrakech",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero__image" aria-hidden="true">
          <img
            src="/images/mountain-bike-morocco-hero.jpg"
            alt=""
            fetchPriority="high"
          />
        </div>

        <div className="hero__content page-width">
          <p className="eyebrow eyebrow--light">
            MOROCCO · HIGH ATLAS · SAHARA
          </p>
          <h1>Ride the Atlas. Feel the Freedom.</h1>
          <p className="hero__subtitle">
            Discover Morocco by bike, from the high mountain trails of the
            Atlas to quiet gravel roads, traditional villages and open desert
            landscapes.
          </p>
          <div className="hero__actions">
            <Link className="button button--gold" href="/cycling-trips">
              Explore Cycling Tours
            </Link>
            <Link className="button button--outline-light" href="/contact">
              Plan Your Adventure
            </Link>
          </div>
        </div>

        <div className="hero__bottom page-width">
          <span>LOCAL GUIDES</span>
          <span>MTB · E-MTB · GRAVEL · ROAD</span>
          <span>MADE FOR YOUR JOURNEY</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="intro section page-width">
        <div>
          <p className="eyebrow">DISCOVER MOROCCO BY BIKE</p>
          <h2>More than a ride. A different way to discover Morocco.</h2>
        </div>
        <div className="intro__copy">
          <p>
            Morocco is a country of extraordinary contrasts. In a single
            journey, you can move from mountain villages and terraced valleys
            to wide gravel tracks, rocky desert landscapes and lively historic
            cities. Travelling by bike lets you experience these places at a
            pace that leaves room for discovery.
          </p>
          <p>
            Our cycling experiences bring together rewarding routes, local
            knowledge and practical trip planning. Whether you are looking for
            technical mountain biking, a multi-day gravel adventure, a road
            cycling holiday or a private trip with friends, the journey should
            suit the way you want to ride.
          </p>
          <Link className="text-link" href="/about">
            Discover our approach <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* CYCLING TOURS */}
      <section className="section section--soft">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">FIND YOUR NEXT ADVENTURE</p>
              <h2>Explore cycling tours in Morocco</h2>
            </div>
            <p>
              Choose a riding style, explore a destination or work with us to
              plan a route that fits your dates, experience and ambitions.
              Each journey can be shaped around the landscapes you most want
              to discover.
            </p>
          </div>

          <div className="tour-grid">
            {tours.map((tour) => (
              <article className="tour-card" key={tour.title}>
                <Link
                  className="tour-card__image"
                  href={tour.href}
                  aria-label={`Explore ${tour.title}`}
                >
                  <img src={tour.image} alt={tour.title} loading="lazy" />
                  <span className="image-tag">{tour.category}</span>
                </Link>
                <div className="tour-card__body">
                  <h3>
                    <Link href={tour.href}>{tour.title}</Link>
                  </h3>
                  <p>{tour.description}</p>
                  <div className="tour-meta">
                    <span>{tour.duration}</span>
                    <span>{tour.level}</span>
                  </div>
                  <Link className="text-link" href={tour.href}>
                    Explore this tour <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="center-action">
            <Link className="button button--dark" href="/cycling-trips">
              View All Cycling Tours
            </Link>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="section page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CHOOSE YOUR LANDSCAPE</p>
            <h2>Where will your Moroccan cycling journey take you?</h2>
          </div>
          <p>
            Every region has its own character. Explore high mountain scenery,
            traditional settlements, open desert terrain and the countryside
            surrounding Marrakech to find the right setting for your next
            adventure.
          </p>
        </div>

        <div className="destination-grid">
          {destinations.map((destination) => (
            <article className="destination-card" key={destination.title}>
              <Link
                href={destination.href}
                className="destination-card__image"
                aria-label={`Discover ${destination.title}`}
              >
                <img
                  src={destination.image}
                  alt={destination.title}
                  loading="lazy"
                />
              </Link>
              <div className="destination-card__body">
                <h3>
                  <Link href={destination.href}>{destination.title}</Link>
                </h3>
                <p>{destination.description}</p>
                <Link className="text-link" href={destination.href}>
                  Discover the region <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CYCLING EXPERIENCES */}
      <section className="section section--dark">
        <div className="page-width">
          <div className="section-heading section-heading--dark">
            <div>
              <p className="eyebrow">A RIDE FOR EVERY ADVENTURE</p>
              <h2>Find the cycling experience that fits you</h2>
            </div>
            <p>
              There is no single way to explore Morocco. Your ideal holiday
              might be a challenging mountain ride, a relaxed gravel journey, a
              road cycling escape or a private adventure built around your
              group. Start with the experience you want and let the route
              follow.
            </p>
          </div>

          <div className="experience-grid">
            {experiences.map((experience, index) => (
              <article className="experience-card" key={experience.title}>
                <span className="experience-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                <Link
                  href={experience.href}
                  className="text-link text-link--light"
                >
                  Learn more <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MARRAKECH INTRODUCTION */}
      <section className="section page-width split-section">
        <div className="split-section__image">
          <img
            src="/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg"
            alt="Cycling adventure through Morocco's Atlas Mountains"
            loading="lazy"
          />
        </div>
        <div className="split-section__content">
          <p className="eyebrow">YOUR ADVENTURE STARTS HERE</p>
          <h2>Cycling holidays from Marrakech into the Atlas Mountains</h2>
          <p>
            Marrakech is a natural starting point for exploring the landscapes
            beyond the city. Within reach are mountain foothills, rural roads,
            traditional villages and trails that lead into the High Atlas.
            Starting from Marrakech can make it easier to combine a cycling
            holiday with time to discover the city's architecture, markets and
            food.
          </p>
          <p>
            We can help you consider transfer times, the best area for your
            preferred riding style, how many days to spend on the bike and
            whether to include a multi-day journey. The aim is to create a
            balanced itinerary with enough time to ride, rest and experience
            the places along the way.
          </p>
          <Link
            className="button button--gold"
            href="/cycling-trips/from-marrakech"
          >
            Explore Marrakech Tours
          </Link>
        </div>
      </section>

      {/* PLANNING STEPS */}
      <section className="section section--soft">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SIMPLE, PERSONAL, WELL PLANNED</p>
              <h2>How to plan your cycling holiday</h2>
            </div>
            <p>
              Planning a cycling trip should feel straightforward. We start
              with your ideas, discuss the practical details and develop an
              itinerary that reflects your group, the season and the kind of
              riding you want to experience.
            </p>
          </div>

          <div className="steps-grid">
            <article>
              <span>01</span>
              <h3>Tell us what you want</h3>
              <p>
                Share your dates, group size, cycling experience and preferred
                bike style. Let us know whether you want a day ride, a
                multi-day expedition or a fully private holiday.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Shape your itinerary</h3>
              <p>
                Discuss possible regions, daily distances, terrain,
                accommodation and support. The proposed route should balance
                riding ambitions with realistic travel times and conditions.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Prepare for the ride</h3>
              <p>
                Confirm the practical arrangements and receive guidance on
                equipment, clothing, weather and what to expect. Good
                preparation helps you enjoy the journey with confidence.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Discover Morocco</h3>
              <p>
                Set off to explore mountain tracks, quiet roads and local
                communities, with your agreed itinerary and support
                arrangements guiding the way.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* BEST SEASON */}
      <section className="section page-width split-section split-section--reverse">
        <div className="split-section__image">
          <img
            src="/images/mountain-biking-atlas-mountains-morocco.jpg"
            alt="Mountain biking among the landscapes of the High Atlas"
            loading="lazy"
          />
        </div>
        <div className="split-section__content">
          <p className="eyebrow">PLAN AROUND THE SEASONS</p>
          <h2>When is the best time to go cycling in Morocco?</h2>
          <p>
            The best time for a cycling holiday depends on where you want to
            ride. Spring and autumn are often attractive for many mountain and
            countryside routes, while conditions at higher elevations can be
            cooler and more changeable. Lower regions and desert areas may
            experience intense heat, particularly during summer.
          </p>
          <p>
            Altitude, route exposure, daily distance and the type of cycling
            all affect the best travel window. Rather than choosing dates
            based on one general rule, plan around the region and experience
            you want. We recommend checking expected conditions and preparing
            for temperature changes between valleys and mountain passes.
          </p>
          <Link className="text-link" href="/journal">
            Read our cycling guides <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* BEYOND THE TRAIL */}
      <section className="section section--soft">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">BEYOND THE TRAIL</p>
              <h2>Discover the people, culture and landscapes of Morocco</h2>
            </div>
            <p>
              A cycling journey is also an opportunity to experience the
              country beyond its scenery. Travel through working villages,
              pause to enjoy local food and notice how architecture, farming
              and daily life change from one region to another.
            </p>
          </div>

          <div className="culture-grid">
            <article className="culture-card">
              <img
                src="/images/berber-villages-cycling-expeditions.jpg"
                alt="Traditional Amazigh villages in the Moroccan mountains"
                loading="lazy"
              />
              <div>
                <h3>Villages and local life</h3>
                <p>
                  Mountain villages offer a window into the everyday rhythms
                  of rural Morocco. With thoughtful planning and respect for
                  local customs, cycling can create opportunities to
                  appreciate these places at a slower pace.
                </p>
              </div>
            </article>
            <article className="culture-card">
              <img
                src="/images/marrakech-city-bike-tou.jpeg"
                alt="Architecture and everyday life in Marrakech"
                loading="lazy"
              />
              <div>
                <h3>Food, traditions and hospitality</h3>
                <p>
                  Make time for regional dishes, markets, traditional
                  buildings and conversations along the route. These
                  experiences add depth to a cycling holiday and help connect
                  the landscapes you ride through with the people who call
                  them home.
                </p>
              </div>
            </article>
            <article className="culture-card">
              <img
                src="/images/atlas-mountains-cycling-tour-morocco.jpg"
                alt="The mountain landscapes and valleys of the Moroccan Atlas"
                loading="lazy"
              />
              <div>
                <h3>Landscapes beyond the route</h3>
                <p>
                  Leave time to appreciate the changing scenery between rides,
                  from terraced valleys and mountain passes to open desert
                  horizons. A well-planned cycling holiday balances the time
                  on the bike with opportunities to stop, take in the views
                  and discover the character of each region.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* MORE WAYS TO EXPLORE */}
      <section className="more-explore section">
        <div className="page-width more-explore__inner">
          <div className="more-explore__heading">
            <div className="more-explore__heading-copy">
              <p className="eyebrow">MORE WAYS TO EXPLORE</p>
              <h2 id="more-ways-title">
                One country.
                <br />
                <em>Endless ways to ride.</em>
              </h2>
            </div>
            <p>
              Discover Morocco through a cycling experience that matches your
              ambitions. Ride Atlas Mountain singletrack, explore remote
              gravel roads, travel further on an electric mountain bike, or
              plan a private cycling holiday with your own itinerary. From
              short rides near Marrakech to multi-day mountain expeditions,
              find a different way to experience Morocco&apos;s landscapes,
              villages and culture.
            </p>
          </div>

          <div className="more-explore__secondary">
            {exploreOptions.map((option) => (
              <article className="more-explore__card" key={option.number}>
                <Link
                  href={option.href}
                  className="more-explore__card-image"
                  aria-label={option.linkText}
                >
                  <img
                    src={option.image}
                    alt={option.alt}
                    loading="lazy"
                  />
                </Link>
                <div className="more-explore__card-content">
                  <span className="more-explore__number">
                    {option.number} — {option.eyebrow}
                  </span>
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                  <Link
                    className="more-explore__link"
                    href={option.href}
                  >
                    {option.linkText} <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="more-explore__bottom">
            <div>
              <span className="more-explore__number">
                YOUR RIDE. YOUR MOROCCO.
              </span>
              <p>
                Not sure which cycling holiday is right for you? Tell us
                about your dates, experience and preferred landscapes, and
                start planning your Moroccan cycling adventure.
              </p>
            </div>
            <Link className="more-explore__cta" href="/contact">
              Plan your cycling trip <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY RIDE WITH US */}
      <section className="section section--dark">
        <div className="page-width">
          <div className="section-heading section-heading--dark">
            <div>
              <p className="eyebrow">LOCAL KNOWLEDGE, REAL EXPERIENCES</p>
              <h2>Why ride with a local Morocco cycling team?</h2>
            </div>
            <p>
              A great trip depends on more than a good trail. Regional
              knowledge, realistic planning and clear communication help make
              a cycling holiday more rewarding. Our approach starts with
              understanding what you want from the journey and matching those
              expectations to the places and routes available.
            </p>
          </div>
          <div className="reasons-grid">
            {reasons.map((reason) => (
              <article key={reason.number}>
                <span>{reason.number}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">HELPFUL INFORMATION</p>
            <h2>Frequently asked questions about cycling in Morocco</h2>
          </div>
          <p>
            Find answers to common questions about timing, riding experience,
            private trips and preparation. If your plans are more specific,
            contact us to discuss the details of your proposed journey.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="page-width final-cta__inner">
          <p className="eyebrow eyebrow--light">
            YOUR NEXT ADVENTURE STARTS HERE
          </p>
          <h2>Ready to discover Morocco by bike?</h2>
          <p>
            Tell us what kind of ride you have in mind. Together, we can
            explore the possible routes, choose a destination and start
            shaping a cycling holiday around your plans.
          </p>
          <Link className="button button--gold" href="/contact">
            Plan Your Cycling Trip
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="page-width footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <img
                className="brand__logo"
src="/images/logo-mountain-bike-morocco-footer.png"                alt="Mountain Bike Morocco"
              />
              <span>
                MOUNTAIN BIKE <em>MOROCCO</em>
              </span>
            </Link>
            <p>
              Guided mountain biking, E-MTB, gravel and road cycling
              experiences across Morocco. Discover the landscapes, routes and
              local culture at your own pace.
            </p>
          </div>

          <div>
            <h3>Explore</h3>
            <Link href="/cycling-trips">All Cycling Tours</Link>
            <Link href="/cycling-trips/mtb">Mountain Bike</Link>
            <Link href="/cycling-trips/e-mtb">E-MTB Tours</Link>
            <Link href="/cycling-trips/gravel">Gravel Cycling</Link>
            <Link href="/cycling-trips/road">Road Cycling</Link>
          </div>

          <div>
            <h3>Destinations</h3>
            <Link href="/destinations/atlas-mountains">Atlas Mountains</Link>
            <Link href="/destinations/imlil">Imlil &amp; Toubkal</Link>
            <Link href="/destinations/marrakech">Marrakech</Link>
            <Link href="/destinations/agafay-desert">Agafay Desert</Link>
            <Link href="/destinations">All Destinations</Link>
          </div>

          <div>
            <h3>Let's plan</h3>
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
    </main>
  );
}