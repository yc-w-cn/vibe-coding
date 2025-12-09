import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/vibe-coding',
  assetPrefix: '/vibe-coding',
};

export default nextConfig;
