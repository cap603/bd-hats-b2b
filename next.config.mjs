/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CACHE_BUST: "2026-06-10-v13",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'sc01.alicdn.com',
      },
      {
        protocol: 'https',
        hostname: 'sc02.alicdn.com',
      },
    ],
  },
};

export default nextConfig;
