import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {},
};

export default nextConfig;
