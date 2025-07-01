import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 💥 This tells Next to chill about linting during build
  },
};

export default nextConfig;
