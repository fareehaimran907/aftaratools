import fs from 'fs';
import path from 'path';

const CANONICAL_SITE_URL = 'https://aftaratools.online';
const locales = ['en', 'es', 'fr', 'de', 'pt', 'it', 'ru', 'tr', 'ar', 'hi', 'id', 'ja', 'ko', 'nl', 'pl', 'bn'];
const staticPages = ['about', 'contact', 'cookie', 'disclaimer', 'privacy', 'terms'];

// Parse routing.ts for pathnames
const routingContent = fs.readFileSync(path.join(process.cwd(), 'src', 'i18n', 'routing.ts'), 'utf8');

// Parse tool pathnames from routing.ts
// Match entries like "/slug": { "en": "...", ... }
const pathnamesMatch = routingContent.match(/pathnames:\s*\{([\s\S]*?)\n\s*\}\s*\}\);/);
let pathnames = {};

if (pathnamesMatch) {
  try {
    // Clean and parse pathnames object
    const rawObjStr = '{' + pathnamesMatch[1].replace(/,\s*$/, '') + '}';
    // Simple evaluation since it's pure JSON-like object
    const fn = new Function('return ' + rawObjStr);
    pathnames = fn();
  } catch (err) {
    console.error('Failed to parse pathnames directly, fallback to regex:', err);
  }
}

// Read tools from registry.ts
const registryContent = fs.readFileSync(path.join(process.cwd(), 'src', 'lib', 'tools', 'registry.ts'), 'utf8');
const toolMatches = [...registryContent.matchAll(/"([^"]+)":\s*\{\s*"id":\s*"\1"/g)].map(m => m[1]);

// Read categories from categories.ts
const categoriesContent = fs.readFileSync(path.join(process.cwd(), 'src', 'lib', 'tools', 'categories.ts'), 'utf8');
const categoryMatches = [...categoriesContent.matchAll(/"([^"]+)":\s*\{\s*id:\s*"\1"/g)].map(m => m[1]);

console.log(`Found ${toolMatches.length} tools, ${categoryMatches.length} categories.`);

const urls = [];

// 1. Home
const homeAlternates = {};
for (const l of locales) {
  homeAlternates[l] = `${CANONICAL_SITE_URL}${l === 'en' ? '' : `/${l}`}`;
}
homeAlternates['x-default'] = CANONICAL_SITE_URL;

for (const l of locales) {
  urls.push({
    loc: homeAlternates[l],
    lastmod: new Date().toISOString().split('T')[0],
    alternates: homeAlternates
  });
}

// 2. Static pages
for (const page of staticPages) {
  const pageAlternates = {};
  for (const l of locales) {
    pageAlternates[l] = `${CANONICAL_SITE_URL}${l === 'en' ? '' : `/${l}`}/${page}`;
  }
  pageAlternates['x-default'] = `${CANONICAL_SITE_URL}/${page}`;

  for (const l of locales) {
    urls.push({
      loc: pageAlternates[l],
      lastmod: new Date().toISOString().split('T')[0],
      alternates: pageAlternates
    });
  }
}

// 3. Categories
for (const cat of categoryMatches) {
  const catAlternates = {};
  for (const l of locales) {
    catAlternates[l] = `${CANONICAL_SITE_URL}${l === 'en' ? '' : `/${l}`}/category/${cat}`;
  }
  catAlternates['x-default'] = `${CANONICAL_SITE_URL}/category/${cat}`;

  for (const l of locales) {
    urls.push({
      loc: catAlternates[l],
      lastmod: new Date().toISOString().split('T')[0],
      alternates: catAlternates
    });
  }
}

// 4. Tools
let publishedTools = 0;
for (const toolId of toolMatches) {
  const pathKey = `/${toolId}`;
  const publishedLocales = [];
  const toolAlternates = {};
  let latestMtime = new Date(0);

  for (const l of locales) {
    const filePath = path.join(process.cwd(), 'src', 'content', 'tools', l, `${toolId}.json`);
    if (fs.existsSync(filePath)) {
      publishedLocales.push(l);
      const s = pathnames[pathKey]?.[l] || pathnames[pathKey] || pathKey;
      const localePrefix = l === 'en' ? '' : `/${l}`;
      toolAlternates[l] = `${CANONICAL_SITE_URL}${localePrefix}${s}`;

      try {
        const stat = fs.statSync(filePath);
        if (stat.mtime > latestMtime) {
          latestMtime = stat.mtime;
        }
      } catch {}
    }
  }

  if (publishedLocales.length > 0) {
    publishedTools++;
    if (toolAlternates['en']) {
      toolAlternates['x-default'] = toolAlternates['en'];
    }

    const lastmod = (latestMtime.getTime() > 0 ? latestMtime : new Date()).toISOString().split('T')[0];

    for (const l of publishedLocales) {
      urls.push({
        loc: toolAlternates[l],
        lastmod,
        alternates: toolAlternates
      });
    }
  }
}

console.log(`Included ${publishedTools} tools in sitemap. Total URLs generated: ${urls.length}`);

// Generate XML
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

for (const entry of urls) {
  xml += '  <url>\n';
  xml += `    <loc>${entry.loc}</loc>\n`;
  xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
  for (const [lang, href] of Object.entries(entry.alternates)) {
    xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}"/>\n`;
  }
  xml += '  </url>\n';
}

xml += '</urlset>\n';

fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xml, 'utf8');
console.log('Successfully wrote public/sitemap.xml with xhtml:link hreflang annotations.');
