import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pkzgfnkjyxplbehskvzt.supabase.co",
      },
    ],
  },
} as NextConfig;

export default nextConfig;
