import Link from "next/link";

const destinations = [
  {
    number: "01",
    title: "Atlas Mountains",
    label: "HIGH PASSES · MOUNTAIN TRAILS",
    image: "/images/atlas-mountains-cycling-tour-morocco.jpg",
    href: "/destinations/atlas-mountains",
    description:
      "The High Atlas is one of Morocco's most rewarding regions to explore by bike. Mountain tracks, rugged valleys, village lanes and high viewpoints create a varied setting for MTB, E-MTB, gravel and road cycling. The right route depends on altitude, the season, daily distance and your group's riding experience, so leave room to adapt the plan to the conditions.",
  },
  {
    number: "02",
    title: "Imlil Valley",
    label: "VILLAGE LIFE · TERRACED VALLEYS",
    image: "/images/toubkal-imlil-enduro-mtb-expedition.jpg",
    href: "/destinations/imlil",
    description:
      "The Imlil area offers a close-up experience of the Atlas, with stone villages, cultivated terraces and steep mountain scenery. Depending on the route, riders can explore local tracks and foothill roads or use the valley as part of a longer mountain journey. Trail surface, gradients and access should be checked in advance and matched to the group's ability.",
  },
  {
    number: "03",
    title: "Mount Toubkal Region",
    label: "DRAMATIC PEAKS · HIGH ATLAS",
    image: "/images/mountain-biking-atlas-mountains-morocco.jpg",
    href: "/destinations/toubkal",
    description:
      "Around the Toubkal region, the landscape rises quickly from cultivated valleys to rugged high mountain terrain. Cycling routes are best planned with careful attention to elevation, weather, track conditions and the time available. This region can be a memorable part of a guided MTB or E-MTB itinerary when the riding plan suits the season and the riders taking part.",
  },
  {
    number: "04",
    title: "Anti-Atlas",
    label: "ROCKY HILLS · QUIET ROUTES",
    image: "/images/south-morocco-cycling-tour.jpg",
    href: "/destinations/anti-atlas",
    description:
      "The Anti-Atlas brings a different character to a Moroccan cycling holiday, with rugged rock formations, dry valleys, remote settlements and quiet roads. It can suit riders looking for a journey away from busier mountain areas, particularly on gravel and road routes. Distances between services, temperature, water and support logistics need to be considered when planning each stage.",
  },
  {
    number: "05",
    title: "Marrakech & Countryside",
    label: "THE RED CITY · RIDES BEYOND",
    image: "/images/cycling-tour-from-marrakech.jpg",
    href: "/destinations/marrakech",
    description:
      "Marrakech is a practical starting point for short guided rides and longer journeys into the surrounding countryside. From the city, a cycling itinerary may head towards rural roads, foothills and nearby valleys, or connect with other regions of Morocco. Consider transfer times, the time of day, traffic, the chosen bike type and how much time you want to spend riding.",
  },
  {
    number: "06",
    title: "Agafay Desert",
    label: "OPEN HORIZONS · ROCKY TERRAIN",
    image: "/images/Desert-Agafay-Morocco.jpg",
    href: "/destinations/agafay-desert",
    description:
      "Within reach of Marrakech, the Agafay area offers an open, rocky landscape that contrasts with the greener Atlas valleys. Selected tracks can be considered for MTB, E-MTB or gravel riding, depending on surface and conditions. Plan carefully around heat, water, exposure, route distance and bike suitability, and confirm the intended route before setting off.",
  },
  {
    number: "07",
    title: "Sahara & Southern Morocco",
    label: "DESERT TRACKS · WIDE LANDSCAPES",
    image: "/images/sahara-morocco-cycling-holiday.jpg",
    href: "/destinations/sahara-desert",
    description:
      "Southern Morocco adds wide horizons, dry valleys, oasis settlements and desert-edge tracks to a cycling journey. Routes can be designed around scenic riding and regional discovery, but distances, temperature, water availability and support become especially important away from larger towns. A multi-region itinerary should allow realistic transfer time as well as time on the bike.",
  },
  {
    number: "08",
    title: "Atlantic Coast",
    label: "OCEAN AIR · COASTAL RIDING",
    image: "/images/essaouira-cycling-holiday.jpg",
    href: "/destinations/atlantic-coast",
    description:
      "Morocco's Atlantic coast offers a different rhythm, with ocean views, coastal communities and routes through the countryside. It may suit road and gravel riders looking for open roads and changing scenery, or travellers who want to combine riding with time beside the sea. Route choice should account for wind, road conditions, distances and the group's preferred pace.",
  },
];

const faqs = [
  {
    question: "Which destination is best for a cycling holiday in Morocco?",
    answer:
      "The best destination depends on your preferred riding style, experience, travel dates and trip length. The Atlas Mountains offer highland scenery and mountain tracks; Marrakech provides access to nearby countryside; Agafay has rocky open terrain; the Anti-Atlas and southern regions offer quieter landscapes; and the Atlantic coast brings a different coastal atmosphere. Share your preferences before choosing a route.",
  },
  {
    question: "Can I combine several destinations in one trip?",
    answer:
      "Yes, a multi-region journey can connect different landscapes, but transfer times and riding days need to be balanced realistically. Morocco is large and journey times can affect how much time remains for cycling. Start with the number of days available and your priority regions, then plan a route that leaves room for riding, rest and stops along the way.",
  },
  {
    question: "What type of bike is best for these destinations?",
    answer:
      "Mountain bikes are suited to appropriate trails and rougher tracks, E-MTBs add pedal assistance on climbs, gravel bikes suit suitable unpaved roads and mixed surfaces, and road bikes are best for paved routes. The correct choice depends on the actual route, not just the destination name. Confirm the surface and terrain before selecting a bike.",
  },
  {
    question: "When should I travel to Morocco for cycling?",
    answer:
      "Spring and autumn are often comfortable for many lower and mid-altitude routes, but conditions vary considerably with region and elevation. High mountain areas can be cold or affected by snow, while lower and desert areas can become very hot. Check the expected conditions for your exact route and travel dates before confirming plans.",
  },
  {
    question: "Are the destinations suitable for beginners and families?",
    answer:
      "Some routes can be suitable for recreational riders and families, while steep, rocky, exposed or remote terrain may require more experience. A destination alone does not determine difficulty. Share the ages and experience of the riders, the distances they enjoy and any equipment requirements so the route can be discussed accordingly.",
  },
  {
    question: "Can you help arrange a private itinerary?",
    answer:
      "You can enquire about a private itinerary based on your travel dates, group size, preferred riding discipline and destinations. The plan can then be discussed around realistic distances, transfers, accommodation preferences, equipment and seasonal conditions. Availability, inclusions and final arrangements should be confirmed before booking.",
  },
];

export default function DestinationsPage() {
  return (
    <>
      <main className="cycling-listing destinations-page">
        <section className="cl-hero">
          <img
            className="cl-hero__image"
            src="/images/mountain-bike-morocco-hero.jpg"
            alt="Cycling through the mountain landscapes of Morocco"
            fetchPriority="high"
          />
          <div className="cl-hero__shade" />
          <div className="cl-wrap cl-hero__content">
            <p className="cl-eyebrow">DISCOVER MOROCCO · MOUNTAINS · DESERT · COAST</p>
            <h1>Explore Morocco by Bike</h1>
            <p className="cl-hero__intro">
              From the high valleys of the Atlas Mountains to the rocky landscapes of Agafay, the wide horizons of the south and the Atlantic coast, Morocco offers many different ways to explore on two wheels. Discover the regions and find a destination that fits your riding style, travel dates and sense of adventure.
            </p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="#destination-list">
                Explore Destinations
              </Link>
              <Link className="cl-button cl-button--outline" href="/contact">
                Plan Your Cycling Trip
              </Link>
            </div>
            <div className="cl-hero__meta">
              <span>ATLAS MOUNTAINS</span>
              <span>DESERT LANDSCAPES</span>
              <span>ATLANTIC COAST</span>
            </div>
          </div>
        </section>

        <section className="cl-intro cl-wrap">
          <div className="cl-intro__heading">
            <p className="cl-eyebrow cl-eyebrow--dark">ONE COUNTRY · MANY LANDSCAPES</p>
            <h2>Choose the setting for your next Moroccan cycling adventure.</h2>
          </div>
          <div className="cl-intro__copy">
            <p>
              Morocco's regions have distinct landscapes and riding conditions. In the Atlas Mountains, steep terrain, high viewpoints and village tracks shape the experience. Around Marrakech, countryside routes make it possible to add cycling to a city break or start a longer trip. Farther south, dry valleys and desert-edge landscapes offer a different sense of space, while the Atlantic coast brings ocean air and coastal roads.
            </p>
            <p>
              The destination is only one part of choosing a trip. Your bike type, experience, group, travel dates and preferred daily distance all affect which route will work best. Surface conditions, elevation, seasonal weather, transfer times and available support should be considered before an itinerary is confirmed.
            </p>
            <p>
              Browse the regions below as a starting point. Once you know which landscapes appeal to you, you can discuss a guided day ride, a multi-day cycling holiday or a private itinerary that connects more than one area.
            </p>
            <Link className="cl-text-link" href="/cycling-trips">
              Explore all cycling tours <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        <section className="cl-tours" id="destination-list">
          <div className="cl-wrap">
            <div className="cl-section-heading">
              <div>
                <p className="cl-eyebrow cl-eyebrow--dark">CHOOSE YOUR LANDSCAPE</p>
                <h2>Eight destinations to explore across Morocco</h2>
              </div>
              <p>
                Each region offers a different atmosphere and different riding possibilities. Explore the highlights, then choose a destination based on the type of terrain you enjoy and the time available for your trip.
              </p>
            </div>
            <div className="cl-tour-grid">
              {destinations.map((destination) => (
                <article className="cl-tour-card" key={destination.number}>
                  <Link
                    className="cl-tour-card__image-link"
                    href={destination.href}
                    aria-label={`Discover ${destination.title}`}
                  >
                    <img
                      className="cl-tour-card__image"
                      src={destination.image}
                      alt={destination.title}
                      loading="lazy"
                    />
                    <span className="cl-tour-card__number">{destination.number}</span>
                  </Link>
                  <div className="cl-tour-card__body">
                    <p className="cl-card-label">{destination.label}</p>
                    <h3>
                      <Link href={destination.href}>{destination.title}</Link>
                    </h3>
                    <p>{destination.description}</p>
                    <Link className="cl-text-link" href={destination.href}>
                      Explore destination <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cl-dark-band">
          <div className="cl-wrap cl-dark-band__inner">
            <div>
              <p className="cl-eyebrow">YOUR ROUTE · YOUR RHYTHM</p>
              <h2>Connect landscapes without rushing the journey.</h2>
            </div>
            <div>
              <p>
                A multi-region cycling holiday can bring together mountain scenery, rural valleys, desert-edge tracks and coastal roads, but travel time matters. Start with the days you have available and the places you most want to experience. The best itinerary leaves enough time for riding, rest, transfers and the unexpected details that make travelling by bike memorable.
              </p>
              <Link className="cl-button cl-button--gold" href="/contact">
                Plan a Multi-Region Trip
              </Link>
            </div>
          </div>
        </section>

        <section className="cl-regions cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">FIND YOUR RIDING STYLE</p>
              <h2>Match the destination to the bike and the experience.</h2>
            </div>
            <p>
              A region can support different kinds of cycling, but not every track or road suits every bike. Consider the route surface, elevation, distances and the experience of everyone in your group before deciding which discipline to ride.
            </p>
          </div>
          <div className="cl-region-grid">
            <article className="cl-region-card">
              <Link className="cl-region-card__image-wrap" href="/cycling-trips/mtb" aria-label="Mountain bike tours">
                <img src="/images/singletrack-mtb-atlas-mountains.jpg" alt="Mountain bike trail in the Atlas Mountains" loading="lazy" />
                <span>01</span>
              </Link>
              <div className="cl-region-card__body">
                <h3><Link href="/cycling-trips/mtb">Mountain Bike Tours</Link></h3>
                <p>Explore suitable trails, rocky tracks and mountain routes, with difficulty chosen to fit the riders and route conditions.</p>
                <Link className="cl-text-link" href="/cycling-trips/mtb">Explore MTB tours <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
            <article className="cl-region-card">
              <Link className="cl-region-card__image-wrap" href="/cycling-trips/e-mtb" aria-label="E-MTB tours">
                <img src="/images/eBike-tour-atlas-mountains-morocco.jpg" alt="Electric mountain bike ride in Morocco" loading="lazy" />
                <span>02</span>
              </Link>
              <div className="cl-region-card__body">
                <h3><Link href="/cycling-trips/e-mtb">E-MTB Adventures</Link></h3>
                <p>Plan electric-assisted mountain riding with attention to elevation, battery range, terrain and charging requirements.</p>
                <Link className="cl-text-link" href="/cycling-trips/e-mtb">Explore E-MTB tours <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
            <article className="cl-region-card">
              <Link className="cl-region-card__image-wrap" href="/cycling-trips/gravel" aria-label="Gravel cycling tours">
                <img src="/images/gravel-cycling-morocco.jpg" alt="Gravel cycling across the Moroccan countryside" loading="lazy" />
                <span>03</span>
              </Link>
              <div className="cl-region-card__body">
                <h3><Link href="/cycling-trips/gravel">Gravel Cycling</Link></h3>
                <p>Discover quiet roads and suitable mixed surfaces across rural areas and open landscapes.</p>
                <Link className="cl-text-link" href="/cycling-trips/gravel">Explore gravel tours <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
            <article className="cl-region-card">
              <Link className="cl-region-card__image-wrap" href="/cycling-trips/road" aria-label="Road cycling tours">
                <img src="/images/road-cycling-tour-morocco.jpg" alt="Road cycling on a Moroccan mountain route" loading="lazy" />
                <span>04</span>
              </Link>
              <div className="cl-region-card__body">
                <h3><Link href="/cycling-trips/road">Road Cycling</Link></h3>
                <p>Plan paved routes, mountain climbs and longer road stages around your fitness and travel preferences.</p>
                <Link className="cl-text-link" href="/cycling-trips/road">Explore road tours <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          </div>
        </section>

        <section className="cl-editorial">
          <div className="cl-editorial__image">
            <img src="/images/group-cycling-tour-morocco.jpg" alt="Cyclists discovering the Moroccan landscape together" loading="lazy" />
          </div>
          <div className="cl-editorial__content">
            <p className="cl-eyebrow cl-eyebrow--dark">MORE THAN THE ROUTE</p>
            <h2>Make room for the places and people along the way.</h2>
            <p>
              Travelling by bike can change the way you experience Morocco. The journey gives you time to notice the shift from mountain landscapes to rural valleys, stop at viewpoints, pass through villages and appreciate how daily life changes from region to region. These moments can become an important part of the holiday, alongside the riding itself.
            </p>
            <p>
              A thoughtful itinerary avoids trying to cover too much ground in too few days. Choose realistic daily distances, allow for transfer time and consider the group's energy as well as the route. With those details accounted for, there is more room to enjoy the landscape and shape a trip that feels balanced rather than rushed.
            </p>
            <Link className="cl-button cl-button--dark" href="/about">Learn About Our Approach</Link>
          </div>
        </section>

        <section className="cl-why">
          <div className="cl-wrap">
            <div className="cl-section-heading cl-section-heading--light">
              <div>
                <p className="cl-eyebrow">PLAN WITH CONFIDENCE</p>
                <h2>Choose your destination with the whole journey in mind.</h2>
              </div>
              <p>
                The right destination is about more than the scenery. Clear planning around terrain, season, bike type and logistics helps turn an idea into a practical cycling holiday.
              </p>
            </div>
            <div className="cl-why-grid">
              <article><span>01</span><h3>Match the terrain</h3><p>Choose a region and route surface that suit your bike, handling skills, fitness and preferred challenge.</p></article>
              <article><span>02</span><h3>Consider the season</h3><p>Altitude and temperature can vary considerably between regions, so check conditions for your intended route and dates.</p></article>
              <article><span>03</span><h3>Allow realistic travel time</h3><p>Transfers between destinations take time. Balance driving and riding days with recovery and opportunities to explore.</p></article>
              <article><span>04</span><h3>Plan around your group</h3><p>Riders may have different fitness, experience and preferences. Build the itinerary around the people taking part.</p></article>
            </div>
          </div>
        </section>

        <section className="cl-planning cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">START PLANNING</p>
              <h2>Three steps to choose your cycling destination.</h2>
            </div>
            <p>
              You do not need a complete itinerary before making an enquiry. Start with what interests you most, then discuss the practical details needed to shape the trip.
            </p>
          </div>
          <div className="cl-steps">
            <article><span>STEP 01</span><h3>Choose the landscapes</h3><p>Tell us whether you are drawn to mountain trails, village valleys, open desert terrain, rural roads or the coast.</p></article>
            <article><span>STEP 02</span><h3>Share your riding plans</h3><p>Discuss bike type, group size, riding experience, available dates and the amount of time you want to spend cycling.</p></article>
            <article><span>STEP 03</span><h3>Review the itinerary</h3><p>Consider route surfaces, daily distances, seasonal conditions, transfers, accommodation and support before confirming arrangements.</p></article>
          </div>
        </section>

        <section className="cl-faq">
          <div className="cl-wrap cl-faq__inner">
            <div className="cl-faq__intro">
              <p className="cl-eyebrow cl-eyebrow--dark">GOOD TO KNOW</p>
              <h2>Morocco cycling destinations: FAQs</h2>
              <p>Find answers to common questions about choosing a region, combining destinations and matching your bike to the route. Contact us to discuss your particular dates and plans.</p>
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
          <img src="/images/atlas-mountains-cycling-tour-morocco.jpg" alt="Mountain scenery in Morocco's Atlas region" loading="lazy" />
          <div className="cl-final-cta__overlay" />
          <div className="cl-wrap cl-final-cta__content">
            <p className="cl-eyebrow">YOUR NEXT MOROCCO ADVENTURE</p>
            <h2>Which part of Morocco will you explore by bike?</h2>
            <p>Tell us about your travel dates, preferred cycling style and the landscapes you want to discover. We can start a conversation about destinations and route options that fit the time you have available.</p>
            <div className="cl-actions">
              <Link className="cl-button cl-button--gold" href="/contact">Plan Your Cycling Holiday</Link>
              <Link className="cl-button cl-button--outline" href="/cycling-trips">Browse Cycling Tours</Link>
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
            <Link href="/destinations/imlil">Imlil Valley</Link>
            <Link href="/destinations/toubkal">Mount Toubkal</Link>
            <Link href="/destinations/marrakech">Marrakech</Link>
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
