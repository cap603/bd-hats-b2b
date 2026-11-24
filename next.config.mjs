/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // /index.html is excluded from the middleware matcher (paths containing a
  // dot), so it must be redirected here. GSC 2026-11-24 still lists
  // http://www.bdjunyang.com/index.html as a canonical conflict; this sends it
  // to the canonical apex /en in one hop, including the www host.
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "https://bdjunyang.com/en",
        // permanent:true emits 308; use an explicit 301 to match the rest of
        // the site's redirect policy.
        statusCode: 301,
      },
    ];
  },
  env: {
    CACHE_BUST: "2026-08-03-v18",
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "sc01.alicdn.com" },
      { protocol: "https", hostname: "sc02.alicdn.com" },
      { protocol: "https", hostname: "sc04.alicdn.com" },
      { protocol: "https", hostname: "s.alicdn.com" },
    ],
  },
};

export default nextConfig;
