import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  env: {
    EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    EMAILJS_TEMPALTE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPALTE_ID,
    EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    NOTION_TOKEN: process.env.NEXT_PUBLIC_NOTION_TOKEN,
    NOTION_DATABASE_ID: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID,
    HASNODE_API_KEY: process.env.NEXT_PUBLIC_HASHNODE_KEY,
  },

  // Optimize images with Next.js 16 Image component
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      {
        protocol: "https",
        hostname: "ayushsoni1010.com",
      },
    ],
  },
};

export default nextConfig;
