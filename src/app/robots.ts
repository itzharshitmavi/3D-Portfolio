import type { MetadataRoute } from "next";
import { config } from "@/data/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: process.env.NEXT_PUBLIC_SITE_URL ? "/" : undefined,
      // internal component playground — not part of the site
      disallow: !process.env.NEXT_PUBLIC_SITE_URL ? ["/"] : ["/api/", "/components", "/components1", "/components2", "/components3", "/components-mono"],
    },
    sitemap: `${config.site}/sitemap.xml`,
    host: config.site,
  };
}
