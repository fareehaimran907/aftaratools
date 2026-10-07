import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link, routing, Locale } from '@/i18n/routing';
import { Metadata } from 'next';
import { toolsRegistry } from '@/lib/tools/registry';
import { categoriesRegistry } from '@/lib/tools/categories';
import { getToolSeoContent } from '@/lib/tools/registry-helpers';
import { ToolSearch } from '@/components/ToolSearch';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { ToolCard } from '@/components/ui/ToolCard';
import { Sparkles, Zap, Shield, CheckCircle2, Lock, Globe, Check } from 'lucide-react';
import Script from 'next/script';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home' });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const localePrefix = locale === 'en' ? '' : `/${locale}`;
  const currentUrl = `${baseUrl}${localePrefix}`;

  const alternates: Record<string, string> = {};
  routing.locales.forEach(l => {
    alternates[l] = `${baseUrl}${l === 'en' ? '' : `/${l}`}`;
  });
  alternates['x-default'] = baseUrl;

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: {
      canonical: currentUrl,
      languages: alternates,
    },
    openGraph: {
      title: t('metaTitle'),
      description: t('metaDescription'),
      url: currentUrl,
      siteName: 'Antigravity Tools',
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metaTitle'),
      description: t('metaDescription'),
    }
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Home');
  const tTool = await getTranslations('Tools.age-calculator');
  const tToolTitle = tTool('title');
  const tToolYears = tTool('ui.years');
  const tToolMonths = tTool('ui.months');
  const pathnames = routing.pathnames as Record<string, any>;
  
  // Data prep
  const searchTools = Object.values(toolsRegistry).map(tool => {
    const content = tool.locales[locale as Locale] || {};
    const enContent = tool.locales.en || {};
    const pathKey = `/${tool.id}`;
    const slugObj = pathnames[pathKey];
    let slug = pathKey;
    if (typeof slugObj === 'object' && slugObj !== null) {
      slug = slugObj[locale] || slugObj.en || pathKey;
    } else if (typeof slugObj === 'string') {
      slug = slugObj;
    }
    
    const jsonContent = getToolSeoContent(tool.id, locale);
    const title = jsonContent?.h1 || jsonContent?.seoTitle || (content as any).title || (enContent as any).title || tool.id;
    const description = jsonContent?.intro || jsonContent?.metaDescription || (content as any).description || (enContent as any).description || "";

    return {
      id: tool.id,
      slug: slug.startsWith('/') ? slug.slice(1) : slug,
      title,
      description,
      category: tool.categoryId,
      icon: tool.icon,
      isPopular: !!(tool as any).popular
    };
  });

  const categories = Object.values(categoriesRegistry).map(cat => {
    const content = (cat.locales as any)[locale] || cat.locales.en;
    const catTools = searchTools.filter(t => t.category === cat.id);
    return {
      id: cat.id,
      title: content.title,
      description: content.description,
      toolCount: catTools.length,
      featuredTools: catTools.slice(0, 4),
    };
  });

  // Top popular tools
  const popularTools = searchTools.filter(t => t.isPopular).slice(0, 6);
  if (popularTools.length < 6) {
    const moreTools = searchTools.filter(t => !t.isPopular).slice(0, 6 - popularTools.length);
    popularTools.push(...moreTools);
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const currentUrl = `${baseUrl}${locale === 'en' ? '' : `/${locale}`}`;

  // Structured Data
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Antigravity Tools",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${currentUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Antigravity Tools",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": Array.from({length: 6}).map((_, i) => ({
      "@type": "Question",
      "name": t(`faq${i+1}Q` as any),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t(`faq${i+1}A` as any)
      }
    }))
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": popularTools.map((tool, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `${currentUrl}/${tool.slug}`
    }))
  };

  return (
    <main className="min-h-screen bg-background">
      <Script id="schema-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Script id="schema-org" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="schema-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 border-b border-border bg-surface">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-foreground leading-[1.1]">
            {t("heroH1")}
          </h1>
          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("heroSub")}
          </p>
          
          <ToolSearch tools={searchTools} />
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full"><CheckCircle2 className="w-4 h-4" /> {t("trustFree")}</span>
            <span className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full"><Lock className="w-4 h-4" /> {t("trustNoSignup")}</span>
            <span className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full"><Zap className="w-4 h-4" /> {t("trustBrowser")}</span>
            <span className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full"><Globe className="w-4 h-4" /> {t("trustLanguages")}</span>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-secondary-foreground">
            <span className="font-medium mr-2">{t("popular")}</span>
            {popularTools.slice(0, 3).map(tool => (
              <Link key={tool.id} href={`/${tool.slug}` as any} className="hover:text-primary hover:underline transition-all">
                {tool.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 mt-24">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">{t("browseCategories")}</h2>
          <p className="text-lg text-secondary-foreground max-w-2xl">{t("browseCategoriesDesc")}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </section>

      {/* Popular Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-32 bg-surface/50 py-16 rounded-3xl border border-border/50">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 px-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">{t("mostPopularTools")}</h2>
            <p className="text-lg text-secondary-foreground max-w-2xl">{t("mostPopularToolsDesc")}</p>
          </div>
          <Link href={"/category/developer-tools" as any} className="mt-4 md:mt-0 flex items-center text-primary font-medium hover:opacity-80 transition-opacity">
            {t("exploreAll")} <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {popularTools.map(tool => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>
      </section>

      {/* Features/Why Use Section */}
      <section className="max-w-7xl mx-auto px-4 mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">{t("whyUse")}</h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">{t("whyUseDesc")}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-card p-8 rounded-3xl border border-border hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">{t("featureSpeedTitle")}</h3>
            <p className="text-secondary-foreground leading-relaxed">{t("featureSpeedDesc")}</p>
          </div>
          
          <div className="bg-card p-8 rounded-3xl border border-border hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">{t("featurePrivacyTitle")}</h3>
            <p className="text-secondary-foreground leading-relaxed">{t("featurePrivacyDesc")}</p>
          </div>
          
          <div className="bg-card p-8 rounded-3xl border border-border hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
              <Check className="w-7 h-7 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-foreground">{t("featureAccuracyTitle")}</h3>
            <p className="text-secondary-foreground leading-relaxed">{t("featureAccuracyDesc")}</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="max-w-7xl mx-auto px-4 mt-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground tracking-tight">{t("howItWorksTitle")}</h2>
        <div className="flex flex-col md:flex-row gap-8 relative">
          <div className="flex-1 text-center relative z-10">
            <div className="w-16 h-16 bg-primary text-primary-foreground font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">1</div>
            <h3 className="text-xl font-bold mb-3">{t("howItWorksStep1")}</h3>
            <p className="text-secondary-foreground">{t("howItWorksStep1Desc")}</p>
          </div>
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-[2px] bg-border z-0"></div>
          <div className="flex-1 text-center relative z-10">
            <div className="w-16 h-16 bg-primary text-primary-foreground font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">2</div>
            <h3 className="text-xl font-bold mb-3">{t("howItWorksStep2")}</h3>
            <p className="text-secondary-foreground">{t("howItWorksStep2Desc")}</p>
          </div>
          <div className="flex-1 text-center relative z-10">
            <div className="w-16 h-16 bg-primary text-primary-foreground font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">3</div>
            <h3 className="text-xl font-bold mb-3">{t("howItWorksStep3")}</h3>
            <p className="text-secondary-foreground">{t("howItWorksStep3Desc")}</p>
          </div>
        </div>
      </section>

      {/* Featured Tool */}
      <section className="max-w-7xl mx-auto px-4 mt-32">
        <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-3xl p-10 md:p-16 border border-primary/20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>{t("featuredTool")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground tracking-tight">{tToolTitle}</h2>
            <p className="text-lg text-secondary-foreground mb-8">{t("featuredToolDesc")}</p>
            <Link href={"/age-calculator" as any} className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
              {t("featuredToolCTA")}
            </Link>
          </div>
          <div className="flex-1 w-full max-w-md bg-card rounded-2xl shadow-xl border border-border p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
            {/* Visual mockup of age calculator */}
            <div className="space-y-4">
              <div className="h-4 w-1/3 bg-muted rounded"></div>
              <div className="h-12 w-full bg-background border border-input rounded-xl"></div>
              <div className="h-12 w-full bg-primary/20 rounded-xl"></div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="h-24 bg-muted/50 rounded-xl border border-border/50 flex flex-col items-center justify-center"><div className="text-2xl font-bold">28</div><div className="text-xs">{tToolYears}</div></div>
                <div className="h-24 bg-muted/50 rounded-xl border border-border/50 flex flex-col items-center justify-center"><div className="text-2xl font-bold">342</div><div className="text-xs">{tToolMonths}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 mt-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground tracking-tight">{t("faqTitle")}</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <details key={num} className="group bg-card border border-border rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 font-semibold cursor-pointer list-none text-lg">
                <span>{t(`faq${num}Q` as any)}</span>
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="p-6 pt-0 text-secondary-foreground leading-relaxed">
                {t(`faq${num}A` as any)}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section className="max-w-7xl mx-auto px-4 mt-32 mb-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground tracking-tight">{t("languagesTitle")}</h2>
        <p className="text-secondary-foreground max-w-2xl mx-auto mb-10">{t("languagesDesc")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {routing.locales.map(l => (
            <a key={l} href={l === 'en' ? '/' : `/${l}`} className="px-4 py-2 rounded-lg bg-surface border border-border hover:border-primary hover:text-primary transition-colors uppercase text-sm font-bold">
              {l}
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 mt-16 mb-32 text-center bg-primary text-primary-foreground rounded-3xl p-12 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">{t("ctaTitle")}</h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-xl mx-auto">{t("ctaDesc")}</p>
        <Link href={"/category/developer-tools" as any} className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground rounded-xl font-bold hover:bg-muted transition-colors shadow-lg hover:shadow-xl">
          {t("ctaButton")}
        </Link>
      </section>
    </main>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
}
