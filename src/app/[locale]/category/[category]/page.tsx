import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing, Locale } from "@/i18n/routing";
import { categoriesRegistry } from "@/lib/tools/categories";
import { toolsRegistry } from "@/lib/tools/registry";
import { Metadata } from "next";
import { ToolCard } from "@/components/ui/ToolCard";
import { Box } from "lucide-react";
import { Link } from "@/i18n/routing";

export async function generateStaticParams() {
  const params: { locale: string; category: string }[] = [];
  routing.locales.forEach((locale) => {
    Object.keys(categoriesRegistry).forEach((category) => {
      params.push({ locale, category });
    });
  });
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; category: string }> }): Promise<Metadata> {
  const { locale, category } = await params;
  const categoryData = categoriesRegistry[category as keyof typeof categoriesRegistry];
  if (!categoryData) return {};
  
  const content = (categoryData.locales as any)[locale] || categoryData.locales.en;
  const seoTitle = `${content?.title || category} Tools - Free Online Premium Tools`;
  const seoDescription = content?.description || `Explore our premium suite of free online ${content?.title || category} tools.`;

  const alternates: Record<string, string> = {};
  const pathnames = routing.pathnames as Record<string, any>;
  const pathKey = `/category/${category}`;
  
  for (const l of routing.locales) {
    const s = pathnames[pathKey]?.[l] || pathnames[pathKey] || pathKey;
    const localePrefix = l === 'en' ? '' : `/${l}`;
    alternates[l] = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}${localePrefix}${s}`;
  }
  if (routing.locales.includes('en' as any)) {
    alternates['x-default'] = alternates['en'];
  }

  const canonicalUrl = alternates[locale];

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: alternates,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: canonicalUrl,
      type: "website",
      siteName: "100 Tools",
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    }
  };
}

const getCategoryStyles = (category: string) => {
  switch (category) {
    case "developer-tools":
      return { bg: "bg-[var(--cat-dev-bg)]", text: "text-[var(--cat-dev)]", gradient: "from-[var(--cat-dev)]" };
    case "finance":
      return { bg: "bg-[var(--cat-finance-bg)]", text: "text-[var(--cat-finance)]", gradient: "from-[var(--cat-finance)]" };
    case "date-time":
      return { bg: "bg-[var(--cat-time-bg)]", text: "text-[var(--cat-time)]", gradient: "from-[var(--cat-time)]" };
    case "text":
      return { bg: "bg-[var(--cat-text-bg)]", text: "text-[var(--cat-text)]", gradient: "from-[var(--cat-text)]" };
    case "converters":
      return { bg: "bg-[var(--cat-convert-bg)]", text: "text-[var(--cat-convert)]", gradient: "from-[var(--cat-convert)]" };
    default:
      return { bg: "bg-primary/10", text: "text-primary", gradient: "from-primary" };
  }
};

export default async function CategoryPage({ params }: { params: Promise<{ locale: string; category: string }> }) {
  const { locale, category } = await params;
  setRequestLocale(locale);

  const categoryData = categoriesRegistry[category as keyof typeof categoriesRegistry];
  if (!categoryData) {
    notFound();
  }

  const content = (categoryData.locales as any)[locale] || categoryData.locales.en;
  
  const pathnames = routing.pathnames as Record<string, any>;
  const categoryTools = Object.values(toolsRegistry)
    .filter(tool => tool.categoryId === category)
    .map(tool => {
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
        title: tool.locales[locale as Locale]?.title || tool.locales.en?.title || tool.id,
        description: tool.locales[locale as Locale]?.description || tool.locales.en?.description || "",
        slug: slug.startsWith('/') ? slug.slice(1) : slug,
        category: category,
        icon: tool.icon
      };
    });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const localePrefix = locale === 'en' ? '' : `/${locale}`;
  const pathKey = `/category/${category}`;
  const slugCurrent = pathnames[pathKey]?.[locale] || pathnames[pathKey] || pathKey;
  const currentUrl = `${baseUrl}${localePrefix}${slugCurrent}`;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl + localePrefix
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: content?.title || category,
        item: currentUrl
      }
    ]
  };

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${content?.title || category} Tools`,
    description: content?.description,
    url: currentUrl,
  };

  const styles = getCategoryStyles(category);

  return (
    <main className="min-h-screen pb-24 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([collectionJsonLd, breadcrumbJsonLd]) }}
      />
      
      {/* Category Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 px-4 border-b border-border bg-surface">
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${styles.gradient}/10 via-background to-background`} />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <nav className="text-sm text-secondary-foreground mb-6 flex gap-2 items-center justify-center md:justify-start">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>&gt;</span>
              <span className="text-foreground font-medium">{content?.title}</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-foreground">
              {content?.title} Tools
            </h1>
            <p className="text-lg text-secondary-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {content?.description}
            </p>
          </div>
          
          <div className="hidden md:flex items-center justify-center w-48 h-48 rounded-full border border-border bg-surface shadow-xl relative">
            <div className={`absolute inset-0 rounded-full opacity-20 ${styles.bg}`}></div>
            <Box className={`w-20 h-20 relative z-10 ${styles.text}`} strokeWidth={1.5} />
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-16">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">All {content?.title} Tools ({categoryTools.length})</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryTools.map(tool => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>
        
        {categoryTools.length === 0 && (
          <div className="text-center py-24 bg-surface rounded-2xl border border-border">
            <p className="text-secondary-foreground text-lg">More tools coming soon to this category.</p>
          </div>
        )}
      </section>
    </main>
  );
}
