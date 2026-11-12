#!/usr/bin/env bash
set -euo pipefail

# Run from the project root. This creates static tour routes and does not edit globals.css,
# app/layout.tsx, the home page, or the existing MTB listing page.
if [[ ! -d "src/app" ]]; then
  echo "ERROR: Run this script from your Next.js project root (the folder containing src/app)." >&2
  exit 1
fi

BASE="src/app/cycling-trips/trip"
COMPONENTS="$BASE/_components"

# Refuse to overwrite any existing generated detail page or shared detail component.
if [[ -e "$COMPONENTS/MtbTripDetail.tsx" || -e "$COMPONENTS/mtbTripData.ts" ]]; then
  echo "ERROR: Shared MTB trip detail files already exist. No files were changed." >&2
  echo "Please inspect $COMPONENTS before running this installer again." >&2
  exit 1
fi
if [[ -e "$BASE/atlas-singletrack-mountain-bike-tour-6-day/page.tsx" ]]; then
  echo "ERROR: $BASE/atlas-singletrack-mountain-bike-tour-6-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/sahara-cycling-expedition-7-day/page.tsx" ]]; then
  echo "ERROR: $BASE/sahara-cycling-expedition-7-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/women-cycling-atlas-mountains-6-day/page.tsx" ]]; then
  echo "ERROR: $BASE/women-cycling-atlas-mountains-6-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/atlas-enduro-mtb-tour-5-day/page.tsx" ]]; then
  echo "ERROR: $BASE/atlas-enduro-mtb-tour-5-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/toubkal-and-mgoun-mtb-expedition-10-day/page.tsx" ]]; then
  echo "ERROR: $BASE/toubkal-and-mgoun-mtb-expedition-10-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/atlas-and-desert-cycling-tour-9-day/page.tsx" ]]; then
  echo "ERROR: $BASE/atlas-and-desert-cycling-tour-9-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/anti-atlas-mountain-bike-tour-8-day/page.tsx" ]]; then
  echo "ERROR: $BASE/anti-atlas-mountain-bike-tour-8-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/toubkal-cycling-adventure-5-day/page.tsx" ]]; then
  echo "ERROR: $BASE/toubkal-cycling-adventure-5-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/atlas-to-atlantic-coast-bike-tour-9-day/page.tsx" ]]; then
  echo "ERROR: $BASE/atlas-to-atlantic-coast-bike-tour-9-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/atlas-bike-adventure-4-day/page.tsx" ]]; then
  echo "ERROR: $BASE/atlas-bike-adventure-4-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/atlas-mountains-enduro-tour-3-day/page.tsx" ]]; then
  echo "ERROR: $BASE/atlas-mountains-enduro-tour-3-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/atlas-mountains-cycling-tour-6-day/page.tsx" ]]; then
  echo "ERROR: $BASE/atlas-mountains-cycling-tour-6-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/epic-singletrack-atlas-mountains-8-day/page.tsx" ]]; then
  echo "ERROR: $BASE/epic-singletrack-atlas-mountains-8-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/saghro-cycling-adventure-7-day/page.tsx" ]]; then
  echo "ERROR: $BASE/saghro-cycling-adventure-7-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/mtb-tour-atlas-mountains-2-day/page.tsx" ]]; then
  echo "ERROR: $BASE/mtb-tour-atlas-mountains-2-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/morocco-luxury-cycling-tour-7-day/page.tsx" ]]; then
  echo "ERROR: $BASE/morocco-luxury-cycling-tour-7-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/mountain-biking-atlas-mountains-8-day/page.tsx" ]]; then
  echo "ERROR: $BASE/mountain-biking-atlas-mountains-8-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/atlas-marrakech-cycling-adventure-5-day/page.tsx" ]]; then
  echo "ERROR: $BASE/atlas-marrakech-cycling-adventure-5-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/atlas-enduro-trail-adventure-8-day/page.tsx" ]]; then
  echo "ERROR: $BASE/atlas-enduro-trail-adventure-8-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi
if [[ -e "$BASE/morocco-cycling-adventure-4-day/page.tsx" ]]; then
  echo "ERROR: $BASE/morocco-cycling-adventure-4-day/page.tsx already exists. No files were changed." >&2
  exit 1
fi

mkdir -p "$COMPONENTS"
cat > "$COMPONENTS/mtbTripData.ts" <<'TS_DATA'
export type MtbTrip = {
  slug: string;
  title: string;
  duration: string;
  region: string;
  image: string;
  description: string;
};

export const mtbTrips: MtbTrip[] = [
  {
    "title": "Atlas Singletrack Mountain Bike Tour",
    "duration": "6 days",
    "region": "High Atlas",
    "image": "/images/atlas-mountains-singletrack.jpg",
    "description": "Ride a multi-day network of mountain tracks and singletrack through the High Atlas, with days planned around terrain, climbing and the confidence of the group. Expect rugged scenery, rural paths and time to experience mountain villages between rides.",
    "slug": "atlas-singletrack-mountain-bike-tour-6-day"
  },
  {
    "title": "Sahara Cycling Expedition",
    "duration": "7 days",
    "region": "Sahara & southern Morocco",
    "image": "/images/sahara-desert-cycling-expeditions.jpg",
    "description": "Explore the changing landscapes of southern Morocco on a cycling expedition that needs careful planning for distance, water, heat and remote-route support. The final riding format and daily stages should be matched to the group and the conditions.",
    "slug": "sahara-cycling-expedition-7-day"
  },
  {
    "title": "Women Cycling Atlas Mountains",
    "duration": "6 days",
    "region": "High Atlas",
    "image": "/images/women-cycling-tour-8-day.jpg",
    "description": "Plan a women-focused mountain biking journey with a route and daily pace shaped around the riders taking part. Make room for mountain trails, village landscapes, confidence on the bike and thoughtful logistics throughout the trip.",
    "slug": "women-cycling-atlas-mountains-6-day"
  },
  {
    "title": "Atlas Enduro MTB Tour",
    "duration": "5 days",
    "region": "High Atlas",
    "image": "/images/atlas-mountains-enduro-biking-tour.jpg",
    "description": "Combine mountain climbs with technical descents and rugged trails on an enduro-oriented trip. Route choices should reflect your descending experience, bike setup, fitness and current trail conditions.",
    "slug": "atlas-enduro-mtb-tour-5-day"
  },
  {
    "title": "Toubkal & Mgoun MTB Expedition",
    "duration": "10 days",
    "region": "Toubkal & Mgoun",
    "image": "/images/toubkal-cycling-expedition.jpg",
    "description": "A longer mountain biking expedition idea connecting dramatic High Atlas landscapes and remote valleys. Stages, transfers, altitude, accommodation and recovery time need to be planned realistically before the itinerary is confirmed.",
    "slug": "toubkal-and-mgoun-mtb-expedition-10-day"
  },
  {
    "title": "Atlas & Desert Cycling Tour",
    "duration": "9 days",
    "region": "Atlas & southern Morocco",
    "image": "/images/atlas-to-desert-biking-tour.jpg",
    "description": "Link mountain scenery with the wide-open landscapes of the south on a multi-region cycling holiday. Choose the most suitable route style and allow enough time for transfers, changing terrain and support between stages.",
    "slug": "atlas-and-desert-cycling-tour-9-day"
  },
  {
    "title": "Anti-Atlas Mountain Bike Tour",
    "duration": "8 days",
    "region": "Anti-Atlas",
    "image": "/images/anti-atlas-morocco-cycling-tour.jpg",
    "description": "Discover rugged southern mountain landscapes, rocky tracks and quiet rural routes in the Anti-Atlas. Surface, temperature, daily distance and distance between services should inform the route and support plan.",
    "slug": "anti-atlas-mountain-bike-tour-8-day"
  },
  {
    "title": "Toubkal Cycling Adventure",
    "duration": "5 days",
    "region": "Imlil & Toubkal",
    "image": "/images/toubkal-adventure-cycling.jpg",
    "description": "Explore cycling routes around the Toubkal region, with options to balance climbing, village tracks and mountain viewpoints. The most suitable ride depends on local access, altitude, route surface and rider ability.",
    "slug": "toubkal-cycling-adventure-5-day"
  },
  {
    "title": "Atlas to Atlantic Coast Bike Tour",
    "duration": "9 days",
    "region": "Atlas & Atlantic Coast",
    "image": "/images/atlantic-coast-cycling-tour-morocco.jpg",
    "description": "Build a point-to-point cycling journey from mountain country towards Morocco’s Atlantic Coast. A clear itinerary should balance ride stages with transfers, wind exposure, accommodation and the group’s chosen cycling discipline.",
    "slug": "atlas-to-atlantic-coast-bike-tour-9-day"
  },
  {
    "title": "Atlas Bike Adventure",
    "duration": "4 days",
    "region": "High Atlas",
    "image": "/images/atlas-cycling-adventure.jpg",
    "description": "A shorter multi-day MTB escape with a mix of mountain views, rural tracks and time on the trails. Daily climbs and technical features can be discussed around your experience and the kind of ride you prefer.",
    "slug": "atlas-bike-adventure-4-day"
  },
  {
    "title": "Atlas Mountains Enduro Tour",
    "duration": "3 days",
    "region": "High Atlas",
    "image": "/images/atlas-mountains-enduro-biking-tour-3-day.jpg",
    "description": "Focus a long weekend on technical riding and rewarding descents in the Atlas Mountains. Make sure the plan reflects your skills, bike condition, transfer arrangements and whether any shuttle support is available for the selected route.",
    "slug": "atlas-mountains-enduro-tour-3-day"
  },
  {
    "title": "Atlas Mountains Cycling Tour",
    "duration": "6 days",
    "region": "High Atlas",
    "image": "/images/atlas-mountains-cycling-tour-morocco.jpg",
    "description": "Explore the High Atlas over several days, combining mountain scenery, valley routes and local communities. The trip can be shaped around appropriate MTB terrain, daily distances, rests and the support needed by your group.",
    "slug": "atlas-mountains-cycling-tour-6-day"
  },
  {
    "title": "Epic Singletrack Atlas Mountains",
    "duration": "8 days",
    "region": "High Atlas",
    "image": "/images/singletrack-biking-morocco.jpg",
    "description": "Spend more time exploring mountain trails and singletrack, with a route matched to technical ability and daily riding goals. Discuss steep or exposed sections, hike-a-bike, weather and trail conditions before confirming a demanding itinerary.",
    "slug": "epic-singletrack-atlas-mountains-8-day"
  },
  {
    "title": "Saghro Cycling Adventure",
    "duration": "7 days",
    "region": "Jbel Saghro & the south",
    "image": "/images/saghro-morocco-bike-tour.jpg",
    "description": "Ride through the rugged terrain and expansive landscapes of the Saghro region on a remote-route adventure. Planning should prioritise navigation, water, food, weather, mechanical support and realistic distances between services.",
    "slug": "saghro-cycling-adventure-7-day"
  },
  {
    "title": "MTB Tour Atlas Mountains",
    "duration": "2 days",
    "region": "High Atlas",
    "image": "/images/mtb-tour-atlas-mountains.jpg",
    "description": "A compact mountain-bike break for riders who want to fit Atlas trails into a short stay. Choose route difficulty, climbing and transfer times to make the most of two riding days without rushing the experience.",
    "slug": "mtb-tour-atlas-mountains-2-day"
  },
  {
    "title": "Morocco Luxury Cycling Tour",
    "duration": "7 days",
    "region": "Morocco · private itinerary",
    "image": "/images/morocco-luxury-bike-tour.jpg",
    "description": "Pair rewarding days on the bike with carefully planned logistics, comfortable accommodation and time to discover local culture. Confirm which services, guiding, luggage transfers, meals and bike arrangements are included for your preferred itinerary.",
    "slug": "morocco-luxury-cycling-tour-7-day"
  },
  {
    "title": "Mountain Biking Atlas Mountains",
    "duration": "8 days",
    "region": "High Atlas",
    "image": "/images/mountain-biking-atlas-mountains-morocco.jpg",
    "description": "Spend a week exploring the region’s varied mountain terrain, from rural tracks and valley paths to more technical sections where suitable. Routes should reflect the group’s fitness, handling skills, season and daily distance preferences.",
    "slug": "mountain-biking-atlas-mountains-8-day"
  },
  {
    "title": "Atlas Marrakech Cycling Adventure",
    "duration": "5 days",
    "region": "Marrakech & High Atlas",
    "image": "/images/Atlas-Mountains-Bike-trip-From-Marrakech.jpg",
    "description": "Combine time in Marrakech with mountain biking routes in nearby foothills or the wider Atlas region. Plan transfers, bike setup, trail time and recovery so the trip works as one connected holiday.",
    "slug": "atlas-marrakech-cycling-adventure-5-day"
  },
  {
    "title": "Atlas Enduro Trail Adventure",
    "duration": "8 days",
    "region": "High Atlas",
    "image": "/images/enduro-cycling-holiday-morocco.jpg",
    "description": "An extended enduro-focused itinerary for riders seeking technical trails and longer mountain descents. Discuss bike setup, route exposure, trail grading, recovery and mechanical support for the whole group.",
    "slug": "atlas-enduro-trail-adventure-8-day"
  },
  {
    "title": "Morocco Cycling Adventure",
    "duration": "4 days",
    "region": "Morocco · route to be planned",
    "image": "/images/morocco-cycling-adventure.jpg",
    "description": "Create a short cycling holiday shaped around the landscapes and riding style that interest you most. Share dates, ability, preferred terrain and group size to discuss practical route options and support requirements.",
    "slug": "morocco-cycling-adventure-4-day"
  }
];
TS_DATA

cat > "$COMPONENTS/MtbTripDetail.tsx" <<'TS_COMPONENT'
import Link from "next/link";
import { notFound } from "next/navigation";
import { mtbTrips } from "./mtbTripData";

type Props = { slug: string };

function contactHref(title: string, region: string, request: "details" | "booking") {
  return `/contact?tour=${encodeURIComponent(title)}&destination=${encodeURIComponent(region)}&request=${request}`;
}

export default function MtbTripDetail({ slug }: Props) {
  const trip = mtbTrips.find((item) => item.slug === slug);
  if (!trip) notFound();

  const relatedTrips = mtbTrips
    .filter((item) => item.slug !== trip.slug)
    .sort((a, b) => Number(b.region === trip.region) - Number(a.region === trip.region))
    .slice(0, 3);

  return (
    <main className="cycling-listing mtb-page">
      <section className="cl-hero">
        <img className="cl-hero__image" src={trip.image} alt={`${trip.title} in Morocco`} fetchPriority="high" />
        <div className="cl-hero__shade" />
        <div className="cl-wrap cl-hero__content">
          <p className="cl-eyebrow">MOUNTAIN BIKE TOUR · {trip.duration.toUpperCase()}</p>
          <h1>{trip.title}</h1>
          <p className="cl-hero__intro">{trip.description}</p>
          <div className="cl-actions">
            <Link className="cl-button cl-button--gold" href={contactHref(trip.title, trip.region, "booking")}>Enquire about this tour</Link>
            <Link className="cl-button cl-button--outline" href="/cycling-trips/mtb">All MTB tours</Link>
          </div>
          <div className="cl-hero__meta">
            <span>{trip.duration.toUpperCase()}</span>
            <span>{trip.region.toUpperCase()}</span>
            <span>GUIDED MTB EXPERIENCE</span>
          </div>
        </div>
      </section>

      <section className="cl-intro cl-wrap">
        <div className="cl-intro__heading">
          <p className="cl-eyebrow cl-eyebrow--dark">YOUR MOROCCO MTB HOLIDAY</p>
          <h2>Explore {trip.region} by mountain bike</h2>
        </div>
        <div className="cl-intro__copy">
          <p>{trip.description}</p>
          <p>
            The exact route, daily riding distance, elevation, technical difficulty and support arrangements should be agreed around your experience, travel dates and the conditions in the region. This helps make the journey enjoyable and realistic for everyone in the group rather than relying on a one-size-fits-all plan.
          </p>
          <p>
            Before confirming, share how often you ride, the terrain you enjoy, your preferred bike and any accommodation or transfer requirements. The final itinerary can then be reviewed with those details in mind.
          </p>
          <Link className="cl-text-link" href={contactHref(trip.title, trip.region, "details")}>Ask about route details <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="cl-regions cl-wrap">
        <div className="cl-section-heading">
          <div>
            <p className="cl-eyebrow cl-eyebrow--dark">TRIP OVERVIEW</p>
            <h2>Plan the ride around your group</h2>
          </div>
          <p>
            Use these planning points to shape a trip that suits your ability, schedule and preferred mountain-bike experience. Specific stages should be confirmed before booking.
          </p>
        </div>
        <div className="cl-region-grid">
          <article className="cl-region-card">
            <div className="cl-region-card__body">
              <p className="cl-card-label">DURATION</p>
              <h3>{trip.duration}</h3>
              <p>Allow time for the planned rides, transfers, rest stops and any changes required by weather or trail conditions.</p>
            </div>
          </article>
          <article className="cl-region-card">
            <div className="cl-region-card__body">
              <p className="cl-card-label">REGION</p>
              <h3>{trip.region}</h3>
              <p>Confirm the route and meeting point in advance, including realistic transfer times and the areas the group plans to explore.</p>
            </div>
          </article>
          <article className="cl-region-card">
            <div className="cl-region-card__body">
              <p className="cl-card-label">RIDING LEVEL</p>
              <h3>Matched to your experience</h3>
              <p>Discuss fitness, bike handling, climbing comfort and technical-trail experience before selecting the daily route.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="cl-dark-band">
        <div className="cl-wrap cl-dark-band__inner">
          <div>
            <p className="cl-eyebrow">MAKE IT YOUR TRIP</p>
            <h2>Know the route before you ride.</h2>
          </div>
          <div>
            <p>
              Ask about daily distances, elevation, trail surfaces, guide support, bike logistics, accommodation and transfers. A clear plan helps you choose the right trip and arrive prepared.
            </p>
            <Link className="cl-button cl-button--gold" href={contactHref(trip.title, trip.region, "booking")}>Request booking information</Link>
          </div>
        </div>
      </section>

      <section className="cl-wrap cl-planning">
        <div className="cl-section-heading">
          <div>
            <p className="cl-eyebrow cl-eyebrow--dark">BEFORE YOU BOOK</p>
            <h2>Frequently asked questions</h2>
          </div>
        </div>
        <div className="cl-faq">
          <details className="cl-faq__item">
            <summary>Is this tour suitable for my riding level?</summary>
            <p>Suitability depends on fitness, bike handling, terrain and the route selected. Share your recent riding experience so the trip can be matched to your group.</p>
          </details>
          <details className="cl-faq__item">
            <summary>Are the exact daily stages fixed?</summary>
            <p>The final stages should be confirmed with the guide according to conditions, transfers, route access and the group's ability. Ask for the current itinerary before making travel arrangements.</p>
          </details>
          <details className="cl-faq__item">
            <summary>What equipment should I bring?</summary>
            <p>Plan for a well-maintained bike, helmet, gloves, eye protection, suitable shoes, hydration and sun protection. Layers and a waterproof may be useful depending on season and elevation; request a packing list for your confirmed route.</p>
          </details>
          <details className="cl-faq__item">
            <summary>How do I ask about availability and price?</summary>
            <p>Use the enquiry button and include your dates, group size, riding level and any equipment or accommodation preferences. Availability, inclusions and price can then be confirmed for your requested itinerary.</p>
          </details>
        </div>
      </section>

      <section className="cl-tours">
        <div className="cl-wrap">
          <div className="cl-section-heading">
            <div>
              <p className="cl-eyebrow cl-eyebrow--dark">KEEP EXPLORING</p>
              <h2>Related MTB tours</h2>
            </div>
            <p>Compare a few other fixed-duration trips before choosing the route that best fits your plans.</p>
          </div>
          <div className="cl-tour-grid">
            {relatedTrips.map((related) => (
              <article className="cl-tour-card" key={related.slug}>
                <Link className="cl-tour-card__image-link" href={`/cycling-trips/trip/${related.slug}`} aria-label={related.title}>
                  <img className="cl-tour-card__image" src={related.image} alt={related.title} loading="lazy" />
                </Link>
                <div className="cl-tour-card__body">
                  <p className="cl-card-label">{related.region}</p>
                  <p className="cl-tour-card__duration">{related.duration}</p>
                  <h3><Link href={`/cycling-trips/trip/${related.slug}`}>{related.title}</Link></h3>
                  <div className="cl-tour-card__actions" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px", paddingTop: "18px" }}>
                    <Link className="cl-button cl-button--dark" href={`/cycling-trips/trip/${related.slug}`} style={{ width: "100%", minWidth: 0, minHeight: "46px", padding: "10px 8px", fontSize: "12px", textAlign: "center", justifyContent: "center", backgroundColor: "#252620", color: "#ffffff", border: "1px solid #252620" }}>More Details</Link>
                    <Link className="cl-button cl-button--gold" href={contactHref(related.title, related.region, "booking")} style={{ width: "100%", minWidth: 0, minHeight: "46px", padding: "10px 8px", fontSize: "12px", textAlign: "center", justifyContent: "center" }}>Booking</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cl-final-cta">
        <div className="cl-wrap">
          <p className="cl-eyebrow">READY TO RIDE?</p>
          <h2>Let’s plan your {trip.duration} MTB trip in Morocco.</h2>
          <p>Tell us your dates, group size and riding goals to start shaping the right itinerary.</p>
          <Link className="cl-button cl-button--gold" href={contactHref(trip.title, trip.region, "booking")}>Enquire about {trip.title}</Link>
        </div>
      </section>
    </main>
  );
}
TS_COMPONENT

mkdir -p "$BASE/atlas-singletrack-mountain-bike-tour-6-day"
cat > "$BASE/atlas-singletrack-mountain-bike-tour-6-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function AtlasSingletrackMountainBikeTourPage() {
  return <MtbTripDetail slug="atlas-singletrack-mountain-bike-tour-6-day" />;
}
TS_PAGE

mkdir -p "$BASE/sahara-cycling-expedition-7-day"
cat > "$BASE/sahara-cycling-expedition-7-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function SaharaCyclingExpeditionPage() {
  return <MtbTripDetail slug="sahara-cycling-expedition-7-day" />;
}
TS_PAGE

mkdir -p "$BASE/women-cycling-atlas-mountains-6-day"
cat > "$BASE/women-cycling-atlas-mountains-6-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function WomenCyclingAtlasMountainsPage() {
  return <MtbTripDetail slug="women-cycling-atlas-mountains-6-day" />;
}
TS_PAGE

mkdir -p "$BASE/atlas-enduro-mtb-tour-5-day"
cat > "$BASE/atlas-enduro-mtb-tour-5-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function AtlasEnduroMTBTourPage() {
  return <MtbTripDetail slug="atlas-enduro-mtb-tour-5-day" />;
}
TS_PAGE

mkdir -p "$BASE/toubkal-and-mgoun-mtb-expedition-10-day"
cat > "$BASE/toubkal-and-mgoun-mtb-expedition-10-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function ToubkalMgounMTBExpeditionPage() {
  return <MtbTripDetail slug="toubkal-and-mgoun-mtb-expedition-10-day" />;
}
TS_PAGE

mkdir -p "$BASE/atlas-and-desert-cycling-tour-9-day"
cat > "$BASE/atlas-and-desert-cycling-tour-9-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function AtlasDesertCyclingTourPage() {
  return <MtbTripDetail slug="atlas-and-desert-cycling-tour-9-day" />;
}
TS_PAGE

mkdir -p "$BASE/anti-atlas-mountain-bike-tour-8-day"
cat > "$BASE/anti-atlas-mountain-bike-tour-8-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function AntiAtlasMountainBikeTourPage() {
  return <MtbTripDetail slug="anti-atlas-mountain-bike-tour-8-day" />;
}
TS_PAGE

mkdir -p "$BASE/toubkal-cycling-adventure-5-day"
cat > "$BASE/toubkal-cycling-adventure-5-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function ToubkalCyclingAdventurePage() {
  return <MtbTripDetail slug="toubkal-cycling-adventure-5-day" />;
}
TS_PAGE

mkdir -p "$BASE/atlas-to-atlantic-coast-bike-tour-9-day"
cat > "$BASE/atlas-to-atlantic-coast-bike-tour-9-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function AtlastoAtlanticCoastBikeTourPage() {
  return <MtbTripDetail slug="atlas-to-atlantic-coast-bike-tour-9-day" />;
}
TS_PAGE

mkdir -p "$BASE/atlas-bike-adventure-4-day"
cat > "$BASE/atlas-bike-adventure-4-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function AtlasBikeAdventurePage() {
  return <MtbTripDetail slug="atlas-bike-adventure-4-day" />;
}
TS_PAGE

mkdir -p "$BASE/atlas-mountains-enduro-tour-3-day"
cat > "$BASE/atlas-mountains-enduro-tour-3-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function AtlasMountainsEnduroTourPage() {
  return <MtbTripDetail slug="atlas-mountains-enduro-tour-3-day" />;
}
TS_PAGE

mkdir -p "$BASE/atlas-mountains-cycling-tour-6-day"
cat > "$BASE/atlas-mountains-cycling-tour-6-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function AtlasMountainsCyclingTourPage() {
  return <MtbTripDetail slug="atlas-mountains-cycling-tour-6-day" />;
}
TS_PAGE

mkdir -p "$BASE/epic-singletrack-atlas-mountains-8-day"
cat > "$BASE/epic-singletrack-atlas-mountains-8-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function EpicSingletrackAtlasMountainsPage() {
  return <MtbTripDetail slug="epic-singletrack-atlas-mountains-8-day" />;
}
TS_PAGE

mkdir -p "$BASE/saghro-cycling-adventure-7-day"
cat > "$BASE/saghro-cycling-adventure-7-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function SaghroCyclingAdventurePage() {
  return <MtbTripDetail slug="saghro-cycling-adventure-7-day" />;
}
TS_PAGE

mkdir -p "$BASE/mtb-tour-atlas-mountains-2-day"
cat > "$BASE/mtb-tour-atlas-mountains-2-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function MTBTourAtlasMountainsPage() {
  return <MtbTripDetail slug="mtb-tour-atlas-mountains-2-day" />;
}
TS_PAGE

mkdir -p "$BASE/morocco-luxury-cycling-tour-7-day"
cat > "$BASE/morocco-luxury-cycling-tour-7-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function MoroccoLuxuryCyclingTourPage() {
  return <MtbTripDetail slug="morocco-luxury-cycling-tour-7-day" />;
}
TS_PAGE

mkdir -p "$BASE/mountain-biking-atlas-mountains-8-day"
cat > "$BASE/mountain-biking-atlas-mountains-8-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function MountainBikingAtlasMountainsPage() {
  return <MtbTripDetail slug="mountain-biking-atlas-mountains-8-day" />;
}
TS_PAGE

mkdir -p "$BASE/atlas-marrakech-cycling-adventure-5-day"
cat > "$BASE/atlas-marrakech-cycling-adventure-5-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function AtlasMarrakechCyclingAdventurePage() {
  return <MtbTripDetail slug="atlas-marrakech-cycling-adventure-5-day" />;
}
TS_PAGE

mkdir -p "$BASE/atlas-enduro-trail-adventure-8-day"
cat > "$BASE/atlas-enduro-trail-adventure-8-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function AtlasEnduroTrailAdventurePage() {
  return <MtbTripDetail slug="atlas-enduro-trail-adventure-8-day" />;
}
TS_PAGE

mkdir -p "$BASE/morocco-cycling-adventure-4-day"
cat > "$BASE/morocco-cycling-adventure-4-day/page.tsx" <<'TS_PAGE'
import MtbTripDetail from "../_components/MtbTripDetail";

export default function MoroccoCyclingAdventurePage() {
  return <MtbTripDetail slug="morocco-cycling-adventure-4-day" />;
}
TS_PAGE

echo "Created 20 static MTB tour pages under src/app/cycling-trips/trip/."
echo "No [slug] folder or dynamicParams setting was created."
echo "Next, install the updated MTB listing file separately so its 20 More Details links point to these routes."
