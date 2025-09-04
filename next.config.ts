import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for Vercel deployment
  experimental: {
    optimizePackageImports: ['@/components']
  }
};

export default nextConfig;
