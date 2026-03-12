import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  typedRoutes: true,
};

export default nextConfig;
