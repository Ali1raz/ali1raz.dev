import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.site_url.replace(/\/$/, "");
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
