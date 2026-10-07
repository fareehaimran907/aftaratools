const fs = require("fs");
const path = require("path");

const enJsonPath = path.join(__dirname, "../messages/en.json");
const data = JSON.parse(fs.readFileSync(enJsonPath, "utf8"));

// 1. Home
data.Home.metaTitle = "Aftara Tools: Free Online Calculators & Converters";
data.Home.metaDescription =
  "Free online tools from Aftara: calculators, unit converters, text and developer utilities. Fast, easy to use, and available in 16 languages.";
data.Home.heroH1 = "Free Online Tools for Everyday Tasks";
data.Home.heroSub =
  "Aftara Tools brings together free calculators, converters, generators and formatters in one place. Pick a tool, enter your numbers or text, and get a result instantly in your browser. No sign-up is needed, and every tool is available in 16 languages.";

// 2. About
data.About.description =
  "Aftara Tools is a collection of free online tools built by Aftara, a software company. We make practical tools for students, professionals and developers, from everyday calculators and unit converters to text and code utilities. Our goal is simple: tools that are fast, clear and easy to use on any device, in your own language. If you have a question or a tool request, contact us at contact@aftaratools.com.";
data.About.teamText =
  "This site is operated by Aftara. We are dedicated to providing high-quality tools to the public. If you need to reach us, please see our Contact page.";

// 3. Contact
data.Contact.emailAddress = "contact@aftaratools.com";

// 4. Footer
data.Footer.tagline =
  "Aftara Tools is a product of Aftara. Free online tools in 16 languages.";

fs.writeFileSync(enJsonPath, JSON.stringify(data, null, 2));
console.log("Updated messages/en.json");

// 5. Update layout.tsx
const layoutPath = path.join(__dirname, "../src/app/[locale]/layout.tsx");
let layoutContent = fs.readFileSync(layoutPath, "utf8");
layoutContent = layoutContent.replace(
  /title: "Aftara Tools",/g,
  'title: "Aftara Tools",',
);
layoutContent = layoutContent.replace(
  /description: "Multilingual 100-Tool Website",/g,
  'description: "Simple tools for everyday tasks",',
);
fs.writeFileSync(layoutPath, layoutContent);
console.log("Updated layout.tsx");

// 6. Update page.tsx (Home)
const pagePath = path.join(__dirname, "../src/app/[locale]/page.tsx");
let pageContent = fs.readFileSync(pagePath, "utf8");
pageContent = pageContent.replace(
  /siteName: 'Antigravity Tools',/g,
  "siteName: 'Aftara Tools',",
);
pageContent = pageContent.replace(
  /name": "Antigravity Tools",/g,
  'name": "Aftara Tools",',
);
pageContent = pageContent.replace(
  /https:\/\/example.com/g,
  "https://aftaratools.com",
);
fs.writeFileSync(pagePath, pageContent);
console.log("Updated page.tsx");

// 7. Update Footer.tsx
const footerPath = path.join(__dirname, "../src/components/Footer.tsx");
let footerContent = fs.readFileSync(footerPath, "utf8");
footerContent = footerContent.replace(
  /&copy; \{currentYear\} Aftara Tools\./g,
  "&copy; {currentYear} Aftara Tools. by Aftara.",
);
fs.writeFileSync(footerPath, footerContent);
console.log("Updated Footer.tsx");

// 8. Update sitemap.ts
const sitemapPath = path.join(__dirname, "../src/app/sitemap.ts");
let sitemapContent = fs.readFileSync(sitemapPath, "utf8");
sitemapContent = sitemapContent.replace(
  /https:\/\/example\.com/g,
  "https://aftaratools.com",
);
fs.writeFileSync(sitemapPath, sitemapContent);
console.log("Updated sitemap.ts");

// 9. Update robots.ts
const robotsPath = path.join(__dirname, "../src/app/robots.ts");
let robotsContent = fs.readFileSync(robotsPath, "utf8");
robotsContent = robotsContent.replace(
  /https:\/\/example\.com/g,
  "https://aftaratools.com",
);
fs.writeFileSync(robotsPath, robotsContent);
console.log("Updated robots.ts");

// 10. Update contact/page.tsx
const contactPath = path.join(
  __dirname,
  "../src/app/[locale]/contact/page.tsx",
);
let contactContent = fs.readFileSync(contactPath, "utf8");
contactContent = contactContent.replace(
  /contact@100tools\.example\.com/g,
  "contact@aftaratools.com",
);
fs.writeFileSync(contactPath, contactContent);
console.log("Updated contact/page.tsx");

// 11. Update category/[category]/page.tsx
const catPath = path.join(
  __dirname,
  "../src/app/[locale]/category/[category]/page.tsx",
);
let catContent = fs.readFileSync(catPath, "utf8");
catContent = catContent.replace(
  /https:\/\/example\.com/g,
  "https://aftaratools.com",
);
fs.writeFileSync(catPath, catContent);
console.log("Updated category/[category]/page.tsx");
