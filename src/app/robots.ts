import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://gauravkparab.com/sitemap.xml",
    host: "https://gauravkparab.com",
  };
}
