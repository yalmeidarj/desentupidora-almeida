/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    // Used to guard against accidentally leaking SANITY_API_READ_TOKEN to the browser
    taint: true,
  },
  logging: {
    fetches: { fullUrl: false },
  },
  async redirects() {
    return [
      {
        source: "/rj/centro-rj",
        destination: "/rj/desentupidora-centro-rj",
        permanent: true,
      },
      {
        source: "/rj/zona-sul-rj",
        destination: "/rj/desentupidora-zona-sul-rj",
        permanent: true,
      },
      {
        source: "/rj/zona-norte-rj",
        destination: "/rj/desentupidora-zona-norte-rj",
        permanent: true,
      },
      {
        source: "/rj/zona-oeste-rj",
        destination: "/rj/desentupidora-zona-oeste-rj",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap.ts",
      },
    ];
  },
};
