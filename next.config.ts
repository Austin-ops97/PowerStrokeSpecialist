import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "2pbqjgxycewduhvh.public.blob.vercel-storage.com",
        port: "",
        pathname: "/PowerStroke/**",
      },
    ],
  },
};

export default nextConfig;
