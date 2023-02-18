/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    EMAILJS_TEMPALTE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPALTE_ID,
    EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
