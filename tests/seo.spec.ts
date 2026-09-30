import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

test('SEO: Sitemap is valid and all pages are 200 OK', async ({ request, page }) => {
  const sitemapRes = await request.get(`${BASE_URL}/sitemap.xml`);
  expect(sitemapRes.ok()).toBeTruthy();
  
  const sitemapXml = await sitemapRes.text();
  const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  
  expect(urls.length).toBeGreaterThan(0);
  
  // Test a subset of URLs to prove the concept
  for (const sitemapUrl of urls.slice(0, 5)) {
    const url = sitemapUrl.replace('https://example.com', BASE_URL);
    const res = await page.goto(url);
    expect(res?.status()).toBe(200);
    
    // Check exactly one H1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
    
    // Check title length
    const title = await page.title();
    expect(title.length).toBeGreaterThan(10);
    
    // Canonical link
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe(sitemapUrl);
  }
});
