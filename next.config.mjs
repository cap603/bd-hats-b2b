/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CACHE_BUST: "2026-06-10-v6",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
