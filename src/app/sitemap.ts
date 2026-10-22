import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { routing, Locale } from '@/i18n/routing';
import { toolsRegistry } from '@/lib/tools/registry';
import { categoriesRegistry } from '@/lib/tools/categories';
import { getBaseUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const pathnames = routing.pathnames as Record<string, any>;
  const entries: MetadataRoute.Sitemap = [];

  // 1. Home
  const homeAlternates: Record<string, string> = {};
  for (const l of routing.locales) {
    homeAlternates[l] = `${baseUrl}${l === 'en' ? '' : `/${l}`}`;
  }
  homeAlternates['x-default'] = baseUrl;

  for (const l of routing.locales) {
    entries.push({
      url: homeAlternates[l],
      lastModified: new Date(),
      alternates: {
        languages: homeAlternates,
      },
    });
  }

  // 2. Static informational pages
  const staticPages = ['about', 'contact', 'cookie', 'disclaimer', 'privacy', 'terms'];
  for (const pageName of staticPages) {
    const pageAlternates: Record<string, string> = {};
    for (const l of routing.locales) {
      pageAlternates[l] = `${baseUrl}${l === 'en' ? '' : `/${l}`}/${pageName}`;
    }
    pageAlternates['x-default'] = `${baseUrl}/${pageName}`;

    for (const l of routing.locales) {
      entries.push({
        url: pageAlternates[l],
        lastModified: new Date(),
        alternates: {
          languages: pageAlternates,
        },
      });
    }
  }

  // 3. Category pages
  for (const category of Object.keys(categoriesRegistry)) {
    const categoryAlternates: Record<string, string> = {};
    for (const l of routing.locales) {
      categoryAlternates[l] = `${baseUrl}${l === 'en' ? '' : `/${l}`}/category/${category}`;
    }
    categoryAlternates['x-default'] = `${baseUrl}/category/${category}`;

    for (const l of routing.locales) {
      entries.push({
        url: categoryAlternates[l],
        lastModified: new Date(),
        alternates: {
          languages: categoryAlternates,
        },
      });
    }
  }

  // 4. Tool pages
  for (const toolId of Object.keys(toolsRegistry)) {
    const pathKey = `/${toolId}`;
    const publishedLocales: Locale[] = [];
    const toolAlternates: Record<string, string> = {};
    let latestMtime = new Date(0);

    for (const l of routing.locales) {
      const filePath = path.join(process.cwd(), 'src', 'content', 'tools', l, `${toolId}.json`);
      if (fs.existsSync(filePath)) {
        publishedLocales.push(l);
        const s = pathnames[pathKey]?.[l] || pathnames[pathKey] || pathKey;
        const localePrefix = l === 'en' ? '' : `/${l}`;
        toolAlternates[l] = `${baseUrl}${localePrefix}${s}`;

        try {
          const stat = fs.statSync(filePath);
          if (stat.mtime > latestMtime) {
            latestMtime = stat.mtime;
          }
        } catch {
          // ignore
        }
      }
    }

    if (publishedLocales.length > 0) {
      if (toolAlternates['en']) {
        toolAlternates['x-default'] = toolAlternates['en'];
      }

      const lastModified = latestMtime.getTime() > 0 ? latestMtime : new Date();

      for (const l of publishedLocales) {
        entries.push({
          url: toolAlternates[l],
          lastModified,
          alternates: {
            languages: toolAlternates,
          },
        });
      }
    }
  }

  return entries;
}
