/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
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
