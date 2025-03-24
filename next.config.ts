import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  basePath: '/test-next', // Replace with your repo name
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;
