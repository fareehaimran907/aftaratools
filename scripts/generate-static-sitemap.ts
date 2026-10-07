import fs from 'fs';
import path from 'path';
import sitemap from '../src/app/sitemap';
import robots from '../src/app/robots';

async function generate() {
  const sitemapData = await sitemap();
  const robotsData = robots();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  for (const entry of sitemapData) {
    xml += `  <url>\n`;
    xml += `    <loc>${entry.url}</loc>\n`;
    if (entry.lastModified) {
      xml += `    <lastmod>${entry.lastModified instanceof Date ? entry.lastModified.toISOString() : entry.lastModified}</lastmod>\n`;
    }
    if (entry.changeFrequency) {
      xml += `    <changefreq>${entry.changeFrequency}</changefreq>\n`;
    }
    if (entry.priority) {
      xml += `    <priority>${entry.priority}</priority>\n`;
    }
    xml += `  </url>\n`;
  }
  xml += `</urlset>\n`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), xml);

  let robotsTxt = `User-Agent: ${robotsData.rules.userAgent}\n`;
  if (robotsData.rules.allow) {
    for (const allow of Array.isArray(robotsData.rules.allow) ? robotsData.rules.allow : [robotsData.rules.allow]) {
      robotsTxt += `Allow: ${allow}\n`;
    }
  }
  if (robotsData.rules.disallow) {
    for (const disallow of Array.isArray(robotsData.rules.disallow) ? robotsData.rules.disallow : [robotsData.rules.disallow]) {
      robotsTxt += `Disallow: ${disallow}\n`;
    }
  }
  robotsTxt += `Sitemap: ${robotsData.sitemap}\n`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robotsTxt);

  console.log('Successfully generated public/sitemap.xml and public/robots.txt');
}

generate().catch(console.error);
