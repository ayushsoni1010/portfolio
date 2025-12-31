import type { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://ayushsoni1010.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};

module.exports = config;
