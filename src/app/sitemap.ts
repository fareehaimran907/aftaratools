import { MetadataRoute } from "next";
import { toolsRegistry } from "@/lib/tools/registry";
import { categoriesRegistry } from "@/lib/tools/categories";
import { routing } from "@/i18n/routing";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://aftaratools.com"));

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const pathnames = routing.pathnames as Record<string, any>;

  // Home pages
  for (const locale of routing.locales) {
    entries.push({
      url: `${baseUrl}${locale === "en" ? "" : `/${locale}`}`,
      changeFrequency: "daily",
      priority: 1.0,
    });
  }

  // Categories
  for (const category of Object.keys(categoriesRegistry)) {
    for (const locale of routing.locales) {
      entries.push({
        url: `${baseUrl}${locale === "en" ? "" : `/${locale}`}/category/${category}`,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  // Tools
  for (const tool of Object.values(toolsRegistry)) {
    const pathKey = `/${tool.id}`;
    for (const locale of routing.locales) {
      const slug =
        pathnames[pathKey]?.[locale] || pathnames[pathKey] || pathKey;
      const localePrefix = locale === "en" ? "" : `/${locale}`;

      entries.push({
        url: `${baseUrl}${localePrefix}${slug}`,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  // Legal pages
  const legalPages = ["privacy", "terms", "about", "contact"];
  for (const page of legalPages) {
    for (const locale of routing.locales) {
      entries.push({
        url: `${baseUrl}${locale === "en" ? "" : `/${locale}`}/${page}`,
        changeFrequency: "monthly",
        priority: 0.4,
      });
    }
  }

  return entries;
}
