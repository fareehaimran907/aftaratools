import fs from 'fs';

const filePath = 'src/app/[locale]/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Note: generateMetadata must also be localized.
// I'll manually handle generateMetadata replacement.
content = content.replace(
  /title: '100 Tools - Premium Free Online Tools'/g,
  "title: t('metaTitle')"
);
content = content.replace(
  /description: 'Calculate, convert, generate and analyze everything you need with our suite of 100\+ premium online tools\.'/g,
  "description: t('metaDescription')"
);

// We need to add getTranslations inside generateMetadata
content = content.replace(
  /export async function generateMetadata\(\{ params \}: \{ params: Promise<\{ locale: string \}> \}\): Promise<Metadata> \{/g,
  "export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {\n  const { locale } = await params;\n  const t = await getTranslations({ locale, namespace: 'Home' });"
);

// Remove the `const { locale } = await params;` that was originally there since we just injected it
content = content.replace(
  /  const \{ locale \} = await params;\n  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL \|\| 'https:\/\/example\.com';/g,
  "  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';"
);

// Body replacements
content = content.replace(
  /<span>100\+ Free Online Tools<\/span>/g,
  '<span>{tHome("heroBadge")}</span>'
);

content = content.replace(
  /Calculate, convert & <br className="hidden md:block" \/>/g,
  '{tHome("heroTitle1")} <br className="hidden md:block" />'
);

content = content.replace(
  /generate everything\./g,
  '{tHome("heroTitle2")}'
);

content = content.replace(
  /The premium productivity platform for developers, finance professionals, and everyday tasks\. Fast, private, and beautifully designed\./g,
  '{tHome("heroDescription")}'
);

content = content.replace(
  /<span className="font-medium mr-2">Popular:<\/span>/g,
  '<span className="font-medium mr-2">{tHome("popular")}</span>'
);

content = content.replace(
  /<h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">Browse Categories<\/h2>/g,
  '<h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">{tHome("browseCategories")}</h2>'
);

content = content.replace(
  /<p className="text-lg text-secondary-foreground max-w-2xl">Find exactly what you need organized by workflow\.<\/p>/g,
  '<p className="text-lg text-secondary-foreground max-w-2xl">{tHome("browseCategoriesDesc")}</p>'
);

content = content.replace(
  /<h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">Most Popular Tools<\/h2>/g,
  '<h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">{tHome("mostPopularTools")}</h2>'
);

content = content.replace(
  /<p className="text-lg text-secondary-foreground max-w-2xl">The tools our community uses most frequently\.<\/p>/g,
  '<p className="text-lg text-secondary-foreground max-w-2xl">{tHome("mostPopularToolsDesc")}</p>'
);

content = content.replace(
  /Explore All <ArrowRight className="w-4 h-4 ml-2" \/>/g,
  '{tHome("exploreAll")} <ArrowRight className="w-4 h-4 ml-2" />'
);

content = content.replace(
  /<h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">Why use 100 Tools\?<\/h2>/g,
  '<h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">{tHome("whyUse")}</h2>'
);

content = content.replace(
  /<p className="text-lg text-secondary-foreground max-w-2xl mx-auto">Built with modern technology to provide the best user experience\.<\/p>/g,
  '<p className="text-lg text-secondary-foreground max-w-2xl mx-auto">{tHome("whyUseDesc")}</p>'
);

content = content.replace(
  /<h3 className="text-xl font-bold mb-3 text-foreground">Lightning Fast<\/h3>/g,
  '<h3 className="text-xl font-bold mb-3 text-foreground">{tHome("feature1Title")}</h3>'
);

content = content.replace(
  /<p className="text-secondary-foreground leading-relaxed">Instant results without page reloads\. Optimized for speed and low latency\.<\/p>/g,
  '<p className="text-secondary-foreground leading-relaxed">{tHome("feature1Desc")}</p>'
);

content = content.replace(
  /<h3 className="text-xl font-bold mb-3 text-foreground">Privacy First<\/h3>/g,
  '<h3 className="text-xl font-bold mb-3 text-foreground">{tHome("feature2Title")}</h3>'
);

content = content.replace(
  /<p className="text-secondary-foreground leading-relaxed">Calculations happen directly in your browser\. Your data never leaves your device\.<\/p>/g,
  '<p className="text-secondary-foreground leading-relaxed">{tHome("feature2Desc")}</p>'
);

content = content.replace(
  /<h3 className="text-xl font-bold mb-3 text-foreground">Premium Design<\/h3>/g,
  '<h3 className="text-xl font-bold mb-3 text-foreground">{tHome("feature3Title")}</h3>'
);

content = content.replace(
  /<p className="text-secondary-foreground leading-relaxed">Carefully crafted interfaces that are beautiful, intuitive, and easy to use\.<\/p>/g,
  '<p className="text-secondary-foreground leading-relaxed">{tHome("feature3Desc")}</p>'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Replaced strings in src/app/[locale]/page.tsx");
