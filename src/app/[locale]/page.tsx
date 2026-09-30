import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { Metadata } from 'next';
import { routing, Locale } from '@/i18n/routing';
import { toolsRegistry } from '@/lib/tools/registry';
import { categoriesRegistry } from '@/lib/tools/categories';
import { ToolSearch } from '@/components/ToolSearch';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { ToolCard } from '@/components/ui/ToolCard';
import { Sparkles, Zap, Shield, Search } from 'lucide-react';

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
    }
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tHome = await getTranslations('Home');
  const pathnames = routing.pathnames as Record<string, any>;
  
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
    return {
      id: tool.id,
      slug: slug.startsWith('/') ? slug.slice(1) : slug,
      title: (content as any).title || (enContent as any).title || tool.id,
      description: (content as any).description || (enContent as any).description || "",
      category: tool.categoryId,
      icon: tool.icon,
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

  const popularTools = searchTools.slice(0, 6);

  return (
    <main className="min-h-screen pb-24 bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 px-4 border-b border-border bg-surface">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm font-medium text-secondary-foreground mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>{tHome("heroBadge")}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-foreground leading-[1.1]">
            {tHome("heroTitle1")} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              {tHome("heroTitle2")}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {tHome("heroDescription")}
          </p>
          
          <ToolSearch tools={searchTools} />
          
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-secondary-foreground">
            <span className="font-medium mr-2">{tHome("popular")}</span>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">{tHome("browseCategories")}</h2>
          <p className="text-lg text-secondary-foreground max-w-2xl">{tHome("browseCategoriesDesc")}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </section>

      {/* Popular Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-32">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">{tHome("mostPopularTools")}</h2>
            <p className="text-lg text-secondary-foreground max-w-2xl">{tHome("mostPopularToolsDesc")}</p>
          </div>
          <Link href={"/category/developer-tools" as any} className="hidden md:flex items-center text-primary font-medium hover:opacity-80 transition-opacity">
            {tHome("exploreAll")} <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTools.map(tool => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>
      </section>

      {/* Features/Why Use Section */}
      <section className="max-w-7xl mx-auto px-4 mt-32">
        <div className="bg-surface rounded-3xl p-8 md:p-16 border border-border shadow-sm">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">{tHome("whyUse")}</h2>
            <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">{tHome("whyUseDesc")}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{tHome("feature1Title")}</h3>
              <p className="text-secondary-foreground leading-relaxed">{tHome("feature1Desc")}</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{tHome("feature2Title")}</h3>
              <p className="text-secondary-foreground leading-relaxed">{tHome("feature2Desc")}</p>
            </div>
            
            <div className="text-center">
              <div className="w-14 h-14 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{tHome("feature3Title")}</h3>
              <p className="text-secondary-foreground leading-relaxed">{tHome("feature3Desc")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ArrowRight needed for popular tools link
function ArrowRight({ className }: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
}
