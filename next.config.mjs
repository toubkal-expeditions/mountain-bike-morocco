/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

  async redirects() {
    return [
      {
        source: "/cycling-trips/trip/atlas-mountains-enduro-biking-tour-3-day",
        destination: "/cycling-trips/trip/atlas-mountains-enduro-tour-3-day",
        permanent: true,
      },
      {
        source: "/cycling-trips/trip/atlas-mountains-gravel-ride",
        destination: "/cycling-trips/trip/atlas-mountains-gravel-ride-4-day",
        permanent: true,
      },
      {
        source: "/cycling-trips/trip/atlas-singletrack-mtb-adventure",
        destination: "/cycling-trips/trip/atlas-singletrack-mountain-bike-tour-6-day",
        permanent: true,
      },
      {
        source: "/cycling-trips/trip/atlas-to-atlantic-coast-ebike-tour-6-day",
        destination: "/cycling-trips/trip/atlas-to-atlantic-coast-e-bike-tour-6-day",
        permanent: true,
      },
      {
        source: "/cycling-trips/trip/day-ebike-tour-from-marrakech",
        destination: "/cycling-trips/trip/emtb-day-tours-from-marrakech-day-tour",
        permanent: true,
      },
      {
        source: "/cycling-trips/trip/family-e-bike-mtb-adventure-2-day",
        destination: "/cycling-trips/trip/family-e-bike-and-mtb-adventure-2-day",
        permanent: true,
      },
      {
        source: "/cycling-trips/trip/four-day-family-atlas-explorer",
        destination: "/cycling-trips/trip/four-day-family-atlas-explorer-4-day",
        permanent: true,
      },
      {
        source: "/cycling-trips/trip/marrakech-high-atlas-mtb-tour-4-days",
        destination: "/cycling-trips/trip/marrakech-and-high-atlas-mtb-tour-4-day",
        permanent: true,
      },
      {
        source: "/cycling-trips/trip/marrakech-to-atlas-cycling-escape-2-days",
        destination: "/cycling-trips/trip/marrakech-to-atlas-cycling-escape-2-day",
        permanent: true,
      },
      {
        source: "/cycling-trips/trip/mixed-ability-private-cycling-break-3-to-5-day",
        destination: "/cycling-trips/trip/mixed-ability-private-cycling-break-3-to-5-days",
        permanent: true,
      },
      {
        source: "/cycling-trips/trip/morocco-gravel-group-journey-4-to-6-day",
        destination: "/cycling-trips/trip/morocco-gravel-group-journey-4-to-6-days",
        permanent: true,
      },
      {
        source: "/cycling-trips/trip/private-e-mtb-group-holiday-3-to-5-day",
        destination: "/cycling-trips/trip/private-emtb-group-holiday-3-to-5-days",
        permanent: true,
      },
      {
        source: "/cycling-trips/trip/private-family-mtb-holiday-morocco-5-day",
        destination: "/cycling-trips/trip/private-family-mtb-holiday-in-morocco-5-day",
        permanent: true,
      },
      {
        source: "/cycling-trips/trip/three-valley-gravel-tour-4-day",
        destination: "/cycling-trips/trip/three-valleys-gravel-tour-4-day",
        permanent: true,
      },
      {
        source: "/cycling-trips/trip/todra-dades-luxury-road-journey-6-day",
        destination: "/cycling-trips/trip/todra-and-dades-luxury-road-journey-6-day",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;