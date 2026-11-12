import Link from "next/link";

type MtbTour = {
  number: string;
  label: string;
  title: string;
  duration?: string;
  region?: string;
  description: string;
  image: string;
  href: string;
  link?: string;
};

const mtbTours: MtbTour[] = [
  {
    number: "01",
    label: "DAY RIDES & TRAIL SESSIONS",
    title: "Day Mountain Bike Tours",
    region: "Marrakech & Atlas foothills",
    description: "Make the most of a day in Morocco with a guided mountain bike ride planned around your time, confidence and preferred terrain. Explore trails and tracks in the Atlas foothills, ride through rural landscapes and take breaks to enjoy the views. Before setting off, discuss the route, elevation, technical features, transfers and equipment so the day matches your group rather than forcing everyone into the same pace.",
    image: "/images/day-ebike-tour-from-marrakech.jpg",
    href: "/contact",
    link: "Plan a day ride",
  },
  {
    number: "02",
    label: "MOUNTAIN TRAILS & SINGLETRACK",
    title: "Atlas Mountains MTB Tours",
    region: "High Atlas",
    description: "Ride in the High Atlas, where rocky trails, mountain tracks, terraced fields and Amazigh villages create a varied backdrop for a mountain biking holiday. A route can focus on flowing trail sections, technical riding or scenic exploration depending on your skills and the conditions. Multi-day trips can link different valleys and riding areas, with daily distances and transfers planned realistically around the terrain.",
    image: "/images/singletrack-mtb-atlas-mountains.jpg",
    href: "/destinations/atlas-mountains",
    link: "Explore the Atlas Mountains",
  },
  {
    number: "03",
    label: "TECHNICAL RIDING & BIG DESCENTS",
    title: "Enduro Mountain Biking",
    region: "High Atlas",
    description: "For riders who enjoy technical terrain and sustained descents, an enduro-focused trip can combine mountain climbs, rocky sections and rewarding downhill trails. The right itinerary depends on your experience, bike setup, fitness and comfort with exposure or loose surfaces. Share your riding level honestly so the guide can help choose appropriate routes and explain the day's terrain before you commit to a line.",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/contact",
    link: "Discuss an enduro trip",
  },
  {
    number: "04",
    label: "YOUR GROUP, YOUR ITINERARY",
    title: "Private MTB Holidays",
    region: "Morocco · private itinerary",
    description: "A private mountain bike holiday gives your group room to choose dates, riding style, daily effort and the balance between time on the trail and time exploring Morocco. Trips can be designed for friends, cycling clubs or riders travelling together with similar goals. We can discuss accommodation preferences, support arrangements, transfers and rest days before confirming a practical itinerary for your group.",
    image: "/images/group-cycling-tour-morocco.jpg",
    href: "/contact",
    link: "Build a private itinerary",
  },
  {
    number: "05",
    label: "RIDE MORE, CLIMB WITH SUPPORT",
    title: "E-MTB Adventures",
    region: "High Atlas",
    description: "An electric mountain bike can help you cover more ground and enjoy longer climbs while still experiencing the trails and landscapes of the Atlas. E-MTB routes need thoughtful planning around battery range, charging opportunities, elevation and the kind of terrain your group wants to ride. Tell us whether everyone will use an e-bike and what sort of ride you prefer so the plan accounts for the whole group.",
    image: "/images/e-mtb-tour-morocco.jpg",
    href: "/cycling-trips/e-mtb",
    link: "Discover E-MTB tours",
  },
  {
    number: "06",
    label: "A RIDE THAT FITS YOUR HOLIDAY",
    title: "MTB Trips from Marrakech",
    region: "Marrakech & High Atlas",
    description: "Marrakech is a convenient starting point for mountain biking experiences in nearby foothills and the wider Atlas region. Choose a shorter guided ride or use the city as the beginning of a longer journey. Transfer times, start points, riding duration and trail conditions vary by route, so confirm these details in advance and leave enough time to enjoy the experience without rushing back to the city.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/cycling-trips/from-marrakech",
    link: "Explore rides from Marrakech",
  },
  {
    number: "07",
    label: "ATLAS SINGLETRACK",
    title: "Atlas Singletrack Mountain Bike Tour",
    duration: "6 days",
    region: "High Atlas",
    description: "Ride a multi-day network of mountain tracks and singletrack through the High Atlas, with days planned around terrain, climbing and the confidence of the group. Expect rugged scenery, rural paths and time to experience mountain villages between rides.",
    image: "/images/atlas-mountains-singletrack.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    number: "08",
    label: "DESERT EXPEDITION",
    title: "Sahara Cycling Expedition",
    duration: "7 days",
    region: "Sahara & southern Morocco",
    description: "Explore the changing landscapes of southern Morocco on a cycling expedition that needs careful planning for distance, water, heat and remote-route support. The final riding format and daily stages should be matched to the group and the conditions.",
    image: "/images/sahara-desert-cycling-expeditions.jpg",
    href: "/destinations/sahara-desert",
  },
  {
    number: "09",
    label: "WOMEN’S MTB JOURNEY",
    title: "Women Cycling Atlas Mountains",
    duration: "6 days",
    region: "High Atlas",
    description: "Plan a women-focused mountain biking journey with a route and daily pace shaped around the riders taking part. Make room for mountain trails, village landscapes, confidence on the bike and thoughtful logistics throughout the trip.",
    image: "/images/women-cycling-tour-8-day.jpg",
    href: "/contact",
  },
  {
    number: "10",
    label: "ENDURO MTB",
    title: "Atlas Enduro MTB Tour",
    duration: "5 days",
    region: "High Atlas",
    description: "Combine mountain climbs with technical descents and rugged trails on an enduro-oriented trip. Route choices should reflect your descending experience, bike setup, fitness and current trail conditions.",
    image: "/images/atlas-mountains-enduro-biking-tour.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    number: "11",
    label: "HIGH ATLAS EXPEDITION",
    title: "Toubkal & Mgoun MTB Expedition",
    duration: "10 days",
    region: "Toubkal & Mgoun",
    description: "A longer mountain biking expedition idea connecting dramatic High Atlas landscapes and remote valleys. Stages, transfers, altitude, accommodation and recovery time need to be planned realistically before the itinerary is confirmed.",
    image: "/images/toubkal-cycling-expedition.jpg",
    href: "/destinations/toubkal",
  },
  {
    number: "12",
    label: "MOUNTAINS TO DESERT",
    title: "Atlas & Desert Cycling Tour",
    duration: "9 days",
    region: "Atlas & southern Morocco",
    description: "Link mountain scenery with the wide-open landscapes of the south on a multi-region cycling holiday. Choose the most suitable route style and allow enough time for transfers, changing terrain and support between stages.",
    image: "/images/atlas-to-desert-biking-tour.jpg",
    href: "/destinations/sahara-desert",
  },
  {
    number: "13",
    label: "ANTI-ATLAS MTB",
    title: "Anti-Atlas Mountain Bike Tour",
    duration: "8 days",
    region: "Anti-Atlas",
    description: "Discover rugged southern mountain landscapes, rocky tracks and quiet rural routes in the Anti-Atlas. Surface, temperature, daily distance and distance between services should inform the route and support plan.",
    image: "/images/anti-atlas-morocco-cycling-tour.jpg",
    href: "/destinations/anti-atlas",
  },
  {
    number: "14",
    label: "TOUBKAL REGION",
    title: "Toubkal Cycling Adventure",
    duration: "5 days",
    region: "Imlil & Toubkal",
    description: "Explore cycling routes around the Toubkal region, with options to balance climbing, village tracks and mountain viewpoints. The most suitable ride depends on local access, altitude, route surface and rider ability.",
    image: "/images/toubkal-adventure-cycling.jpg",
    href: "/destinations/toubkal",
  },
  {
    number: "15",
    label: "MOUNTAINS TO OCEAN",
    title: "Atlas to Atlantic Coast Bike Tour",
    duration: "9 days",
    region: "Atlas & Atlantic Coast",
    description: "Build a point-to-point cycling journey from mountain country towards Morocco’s Atlantic Coast. A clear itinerary should balance ride stages with transfers, wind exposure, accommodation and the group’s chosen cycling discipline.",
    image: "/images/atlantic-coast-cycling-tour-morocco.jpg",
    href: "/destinations/atlantic-coast",
  },
  {
    number: "16",
    label: "SHORT MTB ESCAPE",
    title: "Atlas Bike Adventure",
    duration: "4 days",
    region: "High Atlas",
    description: "A shorter multi-day MTB escape with a mix of mountain views, rural tracks and time on the trails. Daily climbs and technical features can be discussed around your experience and the kind of ride you prefer.",
    image: "/images/atlas-cycling-adventure.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    number: "17",
    label: "ENDURO ESCAPE",
    title: "Atlas Mountains Enduro Tour",
    duration: "3 days",
    region: "High Atlas",
    description: "Focus a long weekend on technical riding and rewarding descents in the Atlas Mountains. Make sure the plan reflects your skills, bike condition, transfer arrangements and whether any shuttle support is available for the selected route.",
    image: "/images/atlas-mountains-enduro-biking-tour-3-day.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    number: "18",
    label: "CLASSIC MOUNTAIN JOURNEY",
    title: "Atlas Mountains Cycling Tour",
    duration: "6 days",
    region: "High Atlas",
    description: "Explore the High Atlas over several days, combining mountain scenery, valley routes and local communities. The trip can be shaped around appropriate MTB terrain, daily distances, rests and the support needed by your group.",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    number: "19",
    label: "SINGLETRACK EXPEDITION",
    title: "Epic Singletrack Atlas Mountains",
    duration: "8 days",
    region: "High Atlas",
    description: "Spend more time exploring mountain trails and singletrack, with a route matched to technical ability and daily riding goals. Discuss steep or exposed sections, hike-a-bike, weather and trail conditions before confirming a demanding itinerary.",
    image: "/images/singletrack-biking-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    number: "20",
    label: "SOUTHERN MTB ADVENTURE",
    title: "Saghro Cycling Adventure",
    duration: "7 days",
    region: "Jbel Saghro & the south",
    description: "Ride through the rugged terrain and expansive landscapes of the Saghro region on a remote-route adventure. Planning should prioritise navigation, water, food, weather, mechanical support and realistic distances between services.",
    image: "/images/saghro-morocco-bike-tour.jpg",
    href: "/destinations/anti-atlas",
  },
  {
    number: "21",
    label: "WEEKEND MTB",
    title: "MTB Tour Atlas Mountains",
    duration: "2 days",
    region: "High Atlas",
    description: "A compact mountain-bike break for riders who want to fit Atlas trails into a short stay. Choose route difficulty, climbing and transfer times to make the most of two riding days without rushing the experience.",
    image: "/images/mtb-tour-atlas-mountains.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    number: "22",
    label: "PREMIUM CYCLING HOLIDAY",
    title: "Morocco Luxury Cycling Tour",
    duration: "7 days",
    region: "Morocco · private itinerary",
    description: "Pair rewarding days on the bike with carefully planned logistics, comfortable accommodation and time to discover local culture. Confirm which services, guiding, luggage transfers, meals and bike arrangements are included for your preferred itinerary.",
    image: "/images/morocco-luxury-bike-tour.jpg",
    href: "/cycling-trips/luxury",
  },
  {
    number: "23",
    label: "MOUNTAIN BIKE HOLIDAY",
    title: "Mountain Biking Atlas Mountains",
    duration: "8 days",
    region: "High Atlas",
    description: "Spend a week exploring the region’s varied mountain terrain, from rural tracks and valley paths to more technical sections where suitable. Routes should reflect the group’s fitness, handling skills, season and daily distance preferences.",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    number: "24",
    label: "MARRAKECH TO ATLAS",
    title: "Atlas Marrakech Cycling Adventure",
    duration: "5 days",
    region: "Marrakech & High Atlas",
    description: "Combine time in Marrakech with mountain biking routes in nearby foothills or the wider Atlas region. Plan transfers, bike setup, trail time and recovery so the trip works as one connected holiday.",
    image: "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    href: "/cycling-trips/from-marrakech",
  },
  {
    number: "25",
    label: "ENDURO TRAIL JOURNEY",
    title: "Atlas Enduro Trail Adventure",
    duration: "8 days",
    region: "High Atlas",
    description: "An extended enduro-focused itinerary for riders seeking technical trails and longer mountain descents. Discuss bike setup, route exposure, trail grading, recovery and mechanical support for the whole group.",
    image: "/images/enduro-cycling-holiday-morocco.jpg",
    href: "/destinations/atlas-mountains",
  },
  {
    number: "26",
    label: "MOROCCO MTB JOURNEY",
    title: "Morocco Cycling Adventure",
    duration: "4 days",
    region: "Morocco · route to be planned",
    description: "Create a short cycling holiday shaped around the landscapes and riding style that interest you most. Share dates, ability, preferred terrain and group size to discuss practical route options and support requirements.",
    image: "/images/morocco-cycling-adventure.jpg",
    href: "/destinations",
  }
];

const destinations = [
{
title: "High Atlas Mountains",
text: "A dramatic mountain setting for varied trails, high viewpoints, remote tracks and multi-day riding. The best route depends on altitude, weather, technical ability and the time available.",
image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
href: "/destinations/atlas-mountains",
},
{
title: "Imlil & Toubkal Region",
text: "Explore mountain villages, terraced valleys and rugged tracks around the Imlil area. Routes can be adapted to focus on scenic riding or more demanding terrain when conditions allow.",
image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
href: "/destinations/imlil-toubkal",
},
{
title: "Marrakech & the Foothills",
text: "Start from Marrakech and head towards rural roads, foothills and trail networks outside the city. This is a useful option for a single ride or for adding cycling to a wider Morocco holiday.",
image: "/images/cycling-tour-from-marrakech.jpg",
href: "/destinations/marrakech",
},
{
title: "Agafay & Open Terrain",
text: "Open rocky landscapes offer a different feel from high mountain trails. Plan carefully around temperature, water, route surface and exposure, especially during warmer months.",
image: "/images/Desert-Agafay-Morocco.jpg",
href: "/destinations/agafay-desert",
},
];

const faqs = [
{
question: "What level of fitness do I need for a Morocco mountain bike tour?",
answer:
"It depends on the route. A shorter ride with moderate terrain asks for a different level of fitness from a multi-day trip with long climbs, altitude or technical descents. Tell us about your usual riding, the distance you are comfortable with and how you feel about climbing so the itinerary can be matched to your group.",
},
{
question: "Are the trails suitable for beginners?",
answer:
"Some routes may suit newer riders with basic bike control, while narrow, rocky or steep trails can require confident handling and experience. We should discuss your ability and the terrain in advance rather than assuming every mountain route is beginner-friendly. A suitable route prioritises safe, enjoyable riding over difficulty for its own sake.",
},
{
question: "When is the best time for mountain biking in Morocco?",
answer:
"Spring and autumn are often good periods for many lower and mid-altitude routes, but conditions vary by region and elevation. Higher mountain areas can be cold or affected by snow, while lower landscapes may be very hot in summer. Choose dates based on the route and check the expected conditions before confirming your trip.",
},
{
question: "Can I bring my own mountain bike?",
answer:
"You can discuss travelling with your own bike when enquiring. The practical arrangements depend on your airline, transfers and the itinerary. Tell us your bike type and any special equipment needs so transport, assembly and support requirements can be considered before travel.",
},
{
question: "Can I book a private group mountain bike trip?",
answer:
"Yes, you can enquire about a private itinerary for friends, a club or a group travelling together. Share your dates, group size, riding level, preferred terrain and accommodation expectations. These details help shape a route and daily schedule that make sense for the group.",
},
{
question: "What should I bring for an MTB holiday?",
answer:
"Bring a properly fitting helmet, gloves, eye protection, riding clothing, suitable shoes, sun protection and a hydration system. Depending on the season and altitude, warm layers and a lightweight waterproof may also be useful. Ask for a route-specific packing list once the itinerary and support arrangements are clear.",
},
];

function slugifyTourTitle(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function tourDetailsHref(tour: MtbTour) {
  const days = tour.duration?.match(/(\d+)\s*days?/i)?.[1];
  if (days) {
    return `/cycling-trips/trip/${slugifyTourTitle(tour.title)}-${days}-day`;
  }
  // The first six cards are flexible tour categories rather than fixed-duration itineraries.
  // Keep their existing destinations instead of inventing a number of days.
  return tour.href || tourContactHref(tour.title, tour.region, "details");
}

function tourContactHref(tourTitle: string, destination: string | undefined, request: "details" | "booking") {
  return `/contact?tour=${encodeURIComponent(tourTitle)}&destination=${encodeURIComponent(destination || "Morocco")}&request=${request}`;
}

export default function MountainBikeToursMoroccoPage() {
return (
<>
<main className="cycling-listing mtb-page">
<section className="cl-hero">
<img
         className="cl-hero__image"
         src="/images/mountain-bike-morocco-hero.jpg"
         alt="Mountain biking through the Atlas Mountains in Morocco"
         fetchPriority="high"
       />
<div className="cl-hero__shade" />
<div className="cl-wrap cl-hero__content">
<h1>Mountain Bike Tours in Morocco</h1>
<p className="cl-hero__intro">
Discover Morocco by mountain bike, from rugged Atlas trails and
remote valleys to guided rides close to Marrakech. Find a route
that fits your riding experience, preferred terrain and the kind
of adventure you want from your time on the bike.
</p>
<div className="cl-actions">
<Link className="cl-button cl-button--gold" href="/contact">
Plan your MTB trip
</Link>
<Link
             className="cl-button cl-button--outline"
             href="#mtb-options"
           >
Explore MTB tours
</Link>
</div>
<div className="cl-hero__meta">
<span>GUIDED RIDING</span>
<span>PRIVATE OPTIONS</span>
<span>ROUTES TO SUIT YOUR LEVEL</span>
</div>
</div>
</section>

    <section className="cl-intro cl-wrap">
      <div className="cl-intro__heading">
<h2>
          Mountain biking shaped by trails, landscapes and local knowledge.
        </h2>
      </div>
      <div className="cl-intro__copy">
        <p>
          A mountain bike holiday in Morocco brings together rugged
          terrain, mountain scenery and the chance to explore places that
          feel far removed from the busy streets of the cities. In the
          Atlas Mountains, trails and tracks pass through changing
          landscapes, traditional villages and valleys shaped by everyday
          rural life. The experience can be as much about the journey and
          the people you meet as it is about the descent.
        </p>
        <p>
          No two groups ride in exactly the same way. Some want technical
          singletrack and demanding days; others prefer scenic routes,
          moderate climbs and time to stop along the way. We encourage you
          to share your experience, fitness, preferred bike and travel
          dates early, so the route, support and daily distances can be
          discussed realistically before you travel.
        </p>
        <Link className="cl-text-link" href="/cycling-holiday-morocco">
          Explore all cycling tours <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>

    <section className="cl-tours" id="mtb-options">
      <div className="cl-wrap">
        <div className="cl-section-heading">
          <div>
            <p className="cl-eyebrow cl-eyebrow--dark">
              CHOOSE YOUR RIDE
            </p>
            <h2>Mountain bike holidays and trail experiences</h2>
          </div>
          <p>
            Start with the kind of riding you enjoy. From a single guided
            trail day to an enduro-focused trip or a private multi-day
            journey, the details should be shaped around your ability, the
            terrain and the season.
          </p>
        </div>
        <div className="cl-tour-grid">
          {mtbTours.map((tour) => {
            const detailHref = tourDetailsHref(tour);
            return (
            <article className="cl-tour-card" key={tour.number}>
              <Link
                className="cl-tour-card__image-link"
                href={detailHref}
                aria-label={tour.title}
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
                <p className="cl-card-label">{tour.label}</p>
                {tour.duration && (
                  <p
                    className="cl-tour-card__duration"
                    style={{ fontSize: "12px", lineHeight: 1.5, color: "#777168", margin: "-5px 0 12px" }}
                  >
                    {tour.duration} · {tour.region}
                  </p>
                )}
                <h3>
                  <Link href={detailHref}>{tour.title}</Link>
                </h3>
                <p>{tour.description}</p>
                <div
                  className="cl-tour-card__actions"
                  style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px", width: "100%", paddingTop: "18px" }}
                >
                  <Link
                    className="cl-button cl-button--dark"
                    style={{ width: "100%", minWidth: 0, minHeight: "46px", padding: "10px 8px", fontSize: "12px", textAlign: "center", justifyContent: "center", backgroundColor: "#252620", color: "#ffffff", border: "1px solid #252620" }}
                    href={detailHref}
                  >
                    More Details
                  </Link>
                  <Link
                    className="cl-button cl-button--gold"
                    style={{ width: "100%", minWidth: 0, minHeight: "46px", padding: "10px 8px", fontSize: "12px", textAlign: "center", justifyContent: "center" }}
                    href={tourContactHref(tour.title, tour.region, "booking")}
                  >
                    Booking
                  </Link>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>

    <section className="cl-dark-band">
      <div className="cl-wrap cl-dark-band__inner">
        <div>
          <p className="cl-eyebrow">YOUR SKILLS. YOUR PACE.</p>
          <h2>
            Choose a trail that challenges you for the right reasons.
          </h2>
        </div>
        <div>
          <p>
            Technical difficulty, elevation, surface and daily distance all
            affect how a ride feels. Tell us what you have ridden before
            and what you want to improve or experience. We can discuss the
            route options and the practical details that need to be checked
            before an itinerary is confirmed.
          </p>
          <Link className="cl-button cl-button--gold" href="/contact">
            Talk through your riding level
          </Link>
        </div>
      </div>
    </section>

    <section className="cl-regions cl-wrap">
      <div className="cl-section-heading">
        <div>
          <p className="cl-eyebrow cl-eyebrow--dark">WHERE TO RIDE</p>
          <h2>Explore mountain biking regions in Morocco</h2>
        </div>
        <p>
          The right area depends on the kind of trail experience you want,
          how long you have and the conditions at your travel dates.
          Explore these regions as a starting point for planning your ride.
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
              <img
                src={destination.image}
                alt={destination.title}
                loading="lazy"
              />
              <span>0{index + 1}</span>
            </Link>
            <div className="cl-region-card__body">
              <h3>
                <Link href={destination.href}>{destination.title}</Link>
              </h3>
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
          alt="Cyclists exploring mountain landscapes in Morocco"
          loading="lazy"
        />
      </div>
      <div className="cl-editorial__content">
        <p className="cl-eyebrow cl-eyebrow--dark">BEYOND THE TRAIL</p>
        <h2>Ride for the landscapes. Stay for the experience.</h2>
        <p>
          A memorable mountain bike trip is not measured only in kilometres
          or metres descended. It can include a pause above a valley, a
          conversation in a village, a meal after a long ride and the
          changing scenery as the route moves from one landscape to
          another. Travelling by bike gives you time to notice details that
          can be missed when moving quickly between destinations.
        </p>
        <p>
          Good planning helps leave room for these moments. Consider the
          riding you want to do alongside transfer times, recovery,
          accommodation and the seasonal conditions. A thoughtfully paced
          itinerary can bring together the challenge of the trail and the
          pleasure of discovering Morocco at ground level.
        </p>
        <Link className="cl-button cl-button--dark" href="/about">
          Learn about our approach
        </Link>
      </div>
    </section>

    <section className="cl-why">
      <div className="cl-wrap">
        <div className="cl-section-heading cl-section-heading--light">
          <div>
            <p className="cl-eyebrow">WHY RIDE WITH US</p>
            <h2>
              Local insight and practical planning for your MTB holiday.
            </h2>
          </div>
          <p>
            The best route is one that suits the riders taking part. Clear
            conversations about terrain, fitness and expectations help you
            prepare for a trip that feels rewarding, realistic and
            enjoyable.
          </p>
        </div>
        <div className="cl-why-grid">
          <article>
            <span>01</span>
            <h3>Local route knowledge</h3>
            <p>
              Discuss trail options, regional terrain and the conditions
              that may affect your ride at different times of year.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Riding matched to you</h3>
            <p>
              Choose a route direction based on your handling skills,
              fitness, confidence and preferred level of challenge.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Thoughtful logistics</h3>
            <p>
              Talk through transfers, equipment, daily stages and the
              support arrangements needed for your itinerary.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>More than riding</h3>
            <p>
              Make time for mountain scenery, village life, local food and
              the cultural experiences along the way.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section className="cl-planning cl-wrap">
      <div className="cl-section-heading">
        <div>
          <p className="cl-eyebrow cl-eyebrow--dark">
            PLAN YOUR MTB HOLIDAY
          </p>
          <h2>Three steps to start planning your Morocco ride.</h2>
        </div>
        <p>
          You do not need a complete itinerary before making an enquiry.
          Start with your dates, riding preferences and group details, then
          discuss which route options may suit your trip.
        </p>
      </div>
      <div className="cl-steps">
        <article>
          <span>STEP 01</span>
          <h3>Share your experience</h3>
          <p>
            Tell us about your riding background, fitness, group size,
            preferred bike and the type of terrain you enjoy.
          </p>
        </article>
        <article>
          <span>STEP 02</span>
          <h3>Discuss the route</h3>
          <p>
            Compare regions, season, daily distances, technical difficulty,
            elevation and the amount of time you have available.
          </p>
        </article>
        <article>
          <span>STEP 03</span>
          <h3>Confirm the details</h3>
          <p>
            Review the itinerary, transfers, equipment, accommodation and
            inclusions before final arrangements are made.
          </p>
        </article>
      </div>
    </section>

    <section className="cl-faq">
      <div className="cl-wrap cl-faq__inner">
        <div className="cl-faq__intro">
          <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
          <h2>Mountain biking in Morocco: FAQs</h2>
          <p>
            Read answers to common questions about trail difficulty,
            seasons and preparing for a mountain bike holiday. For advice
            about a specific route, contact us with your dates and riding
            preferences.
          </p>
          <Link className="cl-text-link" href="/contact">
            Ask us about your trip <span aria-hidden="true">↗</span>
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
        alt="Atlas Mountains in Morocco"
        loading="lazy"
      />
      <div className="cl-final-cta__overlay" />
      <div className="cl-wrap cl-final-cta__content">
        <p className="cl-eyebrow">YOUR NEXT MTB ADVENTURE</p>
        <h2>Ready to ride the trails of Morocco?</h2>
        <p>
          Tell us when you would like to travel, how you like to ride and
          what kind of trail experience you are looking for. We can start a
          conversation about a mountain bike trip that fits your plans.
        </p>
        <div className="cl-actions">
          <Link className="cl-button cl-button--gold" href="/contact">
            Plan your MTB holiday
          </Link>
          <Link
            className="cl-button cl-button--outline"
            href="/cycling-holiday-morocco"
          >
            View all cycling tours
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
          experiences across Morocco. Discover the landscapes, trails and
          local culture at your own pace.
        </p>
      </div>
      <div>
        <h3>Explore</h3>
        <Link href="/cycling-holiday-morocco">All Cycling Tours</Link>
        <Link href="/cycling-trips/mtb">Mountain Bike Tours</Link>
        <Link href="/cycling-trips/e-mtb">E-MTB Tours</Link>
        <Link href="/cycling-trips/gravel">Gravel Cycling</Link>
        <Link href="/cycling-trips/road">Road Cycling</Link>
      </div>
      <div>
        <h3>Destinations</h3>
        <Link href="/destinations/atlas-mountains">Atlas Mountains</Link>
        <Link href="/destinations/imlil-toubkal">
          Imlil &amp; Toubkal
        </Link>
        <Link href="/destinations/marrakech">Marrakech</Link>
        <Link href="/destinations/agafay-desert">Agafay Desert</Link>
        <Link href="/destinations">All Destinations</Link>
      </div>
      <div>
        <h3>Let&apos;s plan</h3>
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