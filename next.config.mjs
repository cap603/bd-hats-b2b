/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CACHE_BUST: "2026-07-23-v17",
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
      {
        protocol: 'https',
        hostname: 'sc04.alicdn.com',
      },
      {
        protocol: 'https',
        hostname: 's.alicdn.com',
      },
    ],
  },
};

export default nextConfig;
