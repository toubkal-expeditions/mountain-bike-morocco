import Link from "next/link";

const familyTours = [
  {
    number: "01",
    duration: "2 days",
    label: "FAMILY WEEKEND · ATLAS FOOTHILLS",
    title: "Family-Friendly Atlas MTB Weekend",
    slug: "family-friendly-atlas-mtb-weekend-2-day",
    description:
      "Spend two days discovering the Atlas foothills with a family mountain biking itinerary shaped around the ages, confidence and interests of everyone taking part. The route can focus on appropriate tracks, manageable distances and regular breaks to enjoy mountain scenery and village life. Before confirming the trip, discuss bike fit, trail surfaces, climbing, transfers and any support your family may need.",
    image: "/images/group-cycling-atlas-mountains.jpg",
  },
  {
    number: "02",
    duration: "1 day",
    label: "SHORT RIDE · FROM MARRAKECH",
    title: "Marrakech Family Mountain Bike Ride",
    slug: "marrakech-family-mountain-bike-ride-1-day",
    description:
      "Add a cycling experience to a Marrakech stay with a guided ride outside the busiest parts of the city. The programme can be discussed around your available time and the riding confidence of each family member, with a suitable route, breaks and transport arranged in advance. Share the ages and experience of the riders so the proposed terrain and duration can be considered carefully.",
    image: "/images/cycling-tour-from-marrakech.jpg",
  },
  {
    number: "03",
    duration: "2 days",
    label: "VALLEY TRACKS · VILLAGE DISCOVERY",
    title: "Ouirgane Valley Family MTB Escape",
    slug: "ouirgane-valley-family-mtb-escape-2-day",
    description:
      "Explore the quieter landscapes of the western Atlas, where cultivated valleys, villages and countryside tracks provide a setting for a relaxed family adventure. A two-day trip can balance time on the bike with stops to take in the scenery and learn about local life. Route choice should reflect the group's cycling skills, the surface conditions and the pace that will make the experience enjoyable for everyone.",
    image: "/images/morocco-berber-valley.jpg",
  },
  {
    number: "04",
    duration: "3 days",
    label: "VILLAGES · SCENIC RIDING",
    title: "Atlas Villages and Gentle Trails",
    slug: "atlas-villages-and-gentle-trails-3-day",
    description:
      "Discover mountain foothills and rural settlements on a three-day journey that leaves room for family time as well as riding. The route can be designed around suitable tracks, realistic daily distances and places to pause rather than maximising kilometres. Discuss the youngest rider's ability, everyone else's experience, accommodation preferences and the practical arrangements needed between stages before settling on an itinerary.",
    image: "/images/Explore-Atlas-Mountains-by-bike.jpg",
  },
  {
    number: "05",
    duration: "2 days",
    label: "ELECTRIC ASSISTANCE · SHARED ADVENTURE",
    title: "Family E-Bike and MTB Adventure",
    slug: "family-e-bike-and-mtb-adventure-2-day",
    description:
      "For families with appropriate cycling experience, a mixed electric-assist and standard mountain bike experience may be worth discussing. The route must account for each rider's bike, handling skills, battery range, charging and comfort on the chosen terrain. We can help you review the options, but the final route should only be confirmed once the equipment and abilities of everyone in the group are understood.",
    image: "/images/group-ebike-tour-morocco.jpg",
  },
  {
    number: "06",
    duration: "4 days",
    label: "MULTI-DAY HOLIDAY · HIGH ATLAS",
    title: "Four-Day Family Atlas Explorer",
    slug: "four-day-family-atlas-explorer-4-day",
    description:
      "Create a longer family mountain biking holiday through selected Atlas foothill routes and rural landscapes. A four-day itinerary offers the possibility of mixing riding with recovery time, village stops and time away from the bike. Distances, elevation and trail difficulty should be chosen with the whole family in mind, with transfers, accommodation, food preferences and support arrangements discussed before travel.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
  },
  {
    number: "07",
    duration: "3 days",
    label: "COUNTRYSIDE · FLEXIBLE PACING",
    title: "Marrakech Countryside Family Cycling",
    slug: "marrakech-countryside-family-cycling-3-day",
    description:
      "Enjoy a family-friendly introduction to cycling in the countryside around Marrakech, with an itinerary tailored to the group's interests and experience. Depending on the chosen route, the ride may include rural landscapes, open views and time to pause between sections. Confirm the surface, distance, traffic exposure, start point and transfer arrangements in advance so the day or multi-day plan suits every rider.",
    image: "/images/cycling-holiday-trip-from-marrakech.jpg",
  },
  {
    number: "08",
    duration: "5 days",
    label: "PRIVATE GROUP · PERSONALISED ITINERARY",
    title: "Private Family MTB Holiday in Morocco",
    slug: "private-family-mtb-holiday-in-morocco-5-day",
    description:
      "Plan a private five-day holiday that reflects your family's preferred pace, interests and experience on two wheels. The journey can be discussed around a suitable region, a realistic amount of riding, rest time and opportunities to discover local culture. Share group size, ages, heights for bike sizing, preferred dates and accommodation needs so practical details can be considered before the final route is agreed.",
    image: "/images/group-cycling-tour-morocco.jpg",
  },
  {
    number: "09",
    duration: "5 days",
    label: "MOUNTAIN SCENERY · FAMILY EXPLORATION",
    title: "High Atlas Family Adventure",
    slug: "high-atlas-family-adventure-5-day",
    description:
      "Experience the landscapes of the High Atlas on a five-day family trip built around suitable riding and time to explore. The area offers a varied mountain backdrop, but routes can differ considerably in surface, gradient and remoteness. A careful plan should take account of the abilities of all riders, seasonal conditions, daily distances, suitable equipment and the support required along the route.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
  },
  {
    number: "10",
    duration: "7 days",
    label: "LONGER HOLIDAY · CULTURE AND CYCLING",
    title: "Morocco Family Cycling Week",
    slug: "morocco-family-cycling-week-7-day",
    description:
      "For families who want a longer holiday, a seven-day cycling journey can combine selected rides with time to enjoy Morocco's landscapes and culture. The route should be paced realistically, with rest or non-riding activities built in where useful. The most suitable programme depends on the ages and abilities in your group, preferred destinations, travel dates, transport arrangements and the type of accommodation you want.",
    image: "/images/women-cycling-tour-8-day.jpg",
  },
];

const destinations = [
  {
    title: "Atlas Foothills",
    text:
      "A useful area to consider for family rides through changing mountain scenery and rural landscapes. The chosen tracks should match the group's ability and account for gradients, road crossings and surface conditions.",
    image: "/images/Explore-Atlas-Mountains-bike.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    title: "Imlil and the Toubkal Region",
    text:
      "Mountain villages and dramatic views create a memorable setting around Imlil. Route selection matters here: discuss elevation, trail surfaces and the experience of each rider before choosing a ride for the family.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil-toubkal",
  },
  {
    title: "Marrakech Countryside",
    text:
      "The countryside around Marrakech can work well for a shorter cycling experience during a city break. Confirm the start point, route surface, riding time, transfers and any traffic exposure before the trip.",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/destinations/marrakech",
  },
  {
    title: "Ouirgane and the Western Atlas",
    text:
      "Valleys, cultivated land and quiet rural scenery provide another region to consider for a family itinerary. Daily stages can be discussed around your available time and the level of challenge that suits everyone.",
    image: "/images/morocco-berber-valley.jpg",
    href: "/destinations/atlas-mountains",
  },
];

const faqs = [
  {
    question: "Are the mountain bike tours suitable for children?",
    answer:
      "Suitability depends on each child's age, height, cycling confidence and experience, as well as the route surface and difficulty. Not every mountain trail is appropriate for children. Share the ages and abilities of everyone in your family so suitable options can be discussed before a route is selected.",
  },
  {
    question: "Can the riding distance be adjusted for our family?",
    answer:
      "The itinerary should be planned around the family's abilities, available time and the terrain. Shorter riding stages, extra breaks and non-riding time can be considered when discussing the programme. Daily distances and elevation should be confirmed only after the route and conditions have been reviewed.",
  },
  {
    question: "Do we need to bring our own bikes?",
    answer:
      "You can discuss using your own bikes or arranging suitable equipment as part of the enquiry. Bike sizes, brake condition, helmet fit and the type of terrain all matter. If travelling with your own equipment, confirm transport and assembly arrangements in advance.",
  },
  {
    question: "When is a good time for family mountain biking in Morocco?",
    answer:
      "Spring and autumn are often considered for many lower and mid-altitude routes, though weather varies by region and elevation. Higher mountain areas can be cold, and exposed lower landscapes can be very hot. The best dates depend on the chosen route, the ages of the riders and the conditions expected at that time.",
  },
  {
    question: "Can we combine riding with cultural activities?",
    answer:
      "Yes, the itinerary can be discussed to leave time for village visits, scenery, local food and other activities alongside riding. The most realistic combination depends on transfer times, the length of each ride and your overall holiday duration.",
  },
  {
    question: "Can we book a private family cycling holiday?",
    answer:
      "You can enquire about a private itinerary. Share your travel dates, group size, ages, cycling experience, preferred terrain and accommodation preferences. These details help shape a realistic plan and clarify which arrangements need to be confirmed before booking.",
  },
  {
    question: "What should our family bring?",
    answer:
      "A properly fitting helmet, gloves, suitable footwear, comfortable riding clothes, sun protection and water are useful basics. Depending on the season and elevation, warm layers and a lightweight waterproof may also be needed. Request a route-specific packing list once the itinerary and equipment arrangements are clearer.",
  },
];

export default function FamilyMountainBikeToursPage() {
  return (
    <>
      <main className="cycling-listing family-mtb-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/group-cycling-atlas-mountains.jpg"
            alt="Cycling adventure in the Atlas Mountains of Morocco"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">FAMILY CYCLING · ATLAS MOUNTAINS · MOROCCO</p>
            <h1>Family Mountain Bike Tours in Morocco</h1>
            <p className="cl-hero__intro">
              Discover Morocco together on a family cycling adventure, from the
              Atlas foothills and rural valleys to guided rides near Marrakech.
              Explore options shaped around your group's experience, preferred
              pace and the kind of journey everyone wants to share.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { tour: "Family Mountain Bike Tours in Morocco", request: "booking" } }}
              >
                Plan Your Family Trip
              </Link>
              <Link className="cl-button cl-button--outline" href="#family-tours">
                Explore Family Tours
              </Link>
            </div>
            <div className="cl-hero__meta">
              <span>FAMILY-PACED OPTIONS</span>
              <span>PRIVATE ITINERARIES</span>
              <span>ROUTES DISCUSSED AROUND YOUR GROUP</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">ADVENTURE TOGETHER</p>
            <h2>Discover Morocco by bike, with room for everyone to enjoy the journey.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              A family cycling holiday is about sharing an experience as much as
              reaching a destination. Morocco offers mountain scenery, rural
              valleys, traditional villages and countryside around Marrakech
              that can provide a memorable backdrop for time together. The right
              trip leaves space to stop, look around and enjoy the places along
              the way instead of measuring the holiday only by kilometres.
            </p>
            <p>
              Families can have very different riding levels and expectations.
              Children may need shorter stages and frequent breaks, while
              confident adults may be interested in longer rides or more varied
              terrain. We recommend sharing the ages, heights, experience and
              interests of everyone travelling so that route options, equipment
              and practical arrangements can be discussed realistically.
            </p>
            <p>
              The routes shown below are starting points for planning. Final
              distances, riding surfaces, elevation, bike availability,
              transfers and other inclusions should be checked for your dates
              before a booking is confirmed.
            </p>
            <Link className="cl-text-link" href="/cycling-trips">
              Explore all cycling tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="family-tours">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR FAMILY ADVENTURE</p>
                <h2>Family mountain bike holidays and shared cycling experiences</h2>
              </div>
              <p>
                Explore short rides and multi-day journeys across Morocco. Each
                option should be adapted to the ages, riding abilities and
                interests of your group, with realistic distances and time for
                breaks built into the plan.
              </p>
            </div>

            <div className="cl-tour-grid">
              {familyTours.map((tour) => (
                <article className="cl-tour-card" key={tour.number}>
                  <Link
                    className="cl-tour-card__image-link"
                    href={`/cycling-trips/trip/${tour.slug}`}
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
                      <Link href={`/cycling-trips/trip/${tour.slug}`}>
                        {tour.title}
                      </Link>
                    </h3>
                    <p>{tour.description}</p>
                    <div className="cl-tour-card__actions">
                      <Link
                        className="cl-button cl-button--dark"
                        href={`/cycling-trips/trip/${tour.slug}`}
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
              <p className="cl-eyebrow">YOUR FAMILY. YOUR PACE.</p>
              <h2>A good family ride balances adventure with comfort and confidence.</h2>
            </div>
            <div>
              <p>
                Choosing an appropriate route means considering more than the
                total distance. Surface, gradients, weather, traffic exposure,
                bike fit and the confidence of younger riders all matter. We can
                discuss the experience your family wants and the practical
                details that need to be checked before a route is confirmed.
              </p>
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { tour: "Family MTB route planning", request: "details" } }}
              >
                Discuss Your Family's Riding Level
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">WHERE TO RIDE TOGETHER</p>
              <h2>Explore family cycling destinations in Morocco</h2>
            </div>
            <p>
              The best area depends on the time you have, the kind of scenery
              your family wants to experience and the skills of the riders.
              These destinations are a useful starting point for discussing
              the right route and pace.
            </p>
          </div>
          <div className="cl-region-grid">
            {destinations.map((destination, index) => (
              <article className="cl-region-card" key={destination.title}>
                <Link
                  className="cl-region-card__image-wrap"
                  href={destination.href}
                  aria-label={destination.title}
                >
                  <img src={destination.image} alt={destination.title} loading="lazy" />
                  <span>0{index + 1}</span>
                </Link>
                <div className="cl-region-card__body">
                  <h3><Link href={destination.href}>{destination.title}</Link></h3>
                  <p>{destination.text}</p>
                  <Link className="cl-text-link" href={destination.href}>
                    Explore the region <span aria-hidden="true">↗</span>
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
              alt="A cycling group enjoying the Moroccan countryside"
              loading="lazy"
            />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">MORE THAN THE RIDE</p>
            <h2>Make time for village life, mountain views and shared memories.</h2>
            <p>
              The best family holidays leave room for the moments between the
              rides: a stop to take in the views, a quiet village, a meal after
              a morning outdoors or a chance to discover a different landscape.
              Cycling can be one part of a broader Moroccan experience, giving
              families time to see rural areas at a pace that encourages
              curiosity and conversation.
            </p>
            <p>
              A realistic itinerary also protects time for rest and changes of
              plan. Travel distances, weather, the group's energy and the
              character of the route can all influence how a day feels. When
              these are considered in advance, the holiday can balance active
              time with flexibility for different ages and interests.
            </p>
            <Link className="cl-button cl-button--dark" href="/about">
              Learn About Our Approach
            </Link>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">WHY PLAN WITH US</p>
                <h2>Thoughtful planning for a family adventure in Morocco.</h2>
              </div>
              <p>
                Every family is different. Talking through experience,
                preferences and practical needs helps establish a route that is
                appropriate for the people taking part—not just the distance on
                a map.
              </p>
            </div>
            <div className="cl-why-grid">
              <article>
                <span>01</span>
                <h3>Routes matched to your group</h3>
                <p>Discuss the ages, experience, confidence and interests of everyone taking part before choosing terrain and daily distances.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Realistic daily stages</h3>
                <p>Allow time for breaks, changing conditions and the pace that helps the whole family enjoy the ride.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Practical arrangements</h3>
                <p>Consider bike sizes, equipment, transfers, accommodation and support requirements as part of the planning process.</p>
              </article>
              <article>
                <span>04</span>
                <h3>Space to discover</h3>
                <p>Make room for mountain scenery, village visits and cultural experiences alongside the cycling itself.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">PLAN YOUR FAMILY HOLIDAY</p>
              <h2>Three steps to start planning your family cycling trip.</h2>
            </div>
            <p>
              You do not need a complete itinerary before making an enquiry.
              Begin with a few details about your family and the experience you
              want, then discuss what could work for your travel dates.
            </p>
          </div>
          <div className="cl-steps">
            <article>
              <span>STEP 01</span>
              <h3>Tell us who's riding</h3>
              <p>Share the ages and heights of the riders, their cycling experience, group size and whether everyone needs a bike.</p>
            </article>
            <article>
              <span>STEP 02</span>
              <h3>Choose a region and pace</h3>
              <p>Discuss the landscapes you want to explore, how much riding feels right and the balance between activity and rest.</p>
            </article>
            <article>
              <span>STEP 03</span>
              <h3>Review the arrangements</h3>
              <p>Confirm the route, equipment, transfers, accommodation, inclusions and any support needed before making final plans.</p>
            </article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
              <h2>Family mountain biking in Morocco: FAQs</h2>
              <p>
                Review common questions about route suitability, equipment and
                planning. For advice about your family, share the ages of the
                riders, their experience and your preferred dates.
              </p>
              <Link className="cl-text-link" href="/contact">
                Ask us about your family trip <span aria-hidden="true">↗</span>
              </Link>
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
            src="/images/mountain-biking-atlas-mountains-morocco.jpg"
            alt="Atlas Mountain landscapes in Morocco"
            loading="lazy"
          />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR NEXT FAMILY ADVENTURE</p>
            <h2>Ready to discover Morocco together?</h2>
            <p>
              Tell us who will be riding, when you plan to travel and what kind
              of experience your family would enjoy. We can start a conversation
              about suitable routes, equipment and the practical details for a
              cycling holiday in Morocco.
            </p>
            <div className="cl-actions">
              <Link
                className="cl-button cl-button--gold"
                href={{ pathname: "/contact", query: { tour: "Family Mountain Bike Tours in Morocco", request: "booking" } }}
              >
                Plan Your Family Holiday
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
            <p>
              Guided mountain biking, E-MTB, gravel and road cycling experiences
              across Morocco. Discover the landscapes, trails and local culture
              at your own pace.
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
          <span>© {new Date().getFullYear()} Mountain Bike Morocco</span>
          <span>Morocco cycling adventures, thoughtfully planned.</span>
        </div>
      </footer>
    </>
  );
}
