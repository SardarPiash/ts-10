import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    domains: ["cdn.10minuteschool.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-southeast-1.amazonaws.com',
        pathname: '/cdn.10minuteschool.com/**',
      },
    ],
  },
};

export default nextConfig;
