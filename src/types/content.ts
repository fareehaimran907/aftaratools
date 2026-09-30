export interface ToolLocaleContent {
  // Common / Legacy
  title?: string;
  primaryKeyword?: string;
  hero?: string;
  whatIs?: string;
  howToUse?: string[];
  formula?: string;
  example?: string;
  useCases?: string[];
  benefits?: string[];
  cta?: string;
  h1?: string;
  faq?: { question: string; answer: string }[];
  
  // Strict SEO 20-field requirements
  seoTitle?: string;
  metaDescription?: string;
  secondaryKeywords?: string[];
  slug?: string;
  intro?: string;
  howItWorks?: string;
  workedExample?: string;
  resultInterpretation?: string;
  tipsAndLimitations?: string[];
  relatedTools?: { slug: string; title: string; description: string }[];
  disclaimer?: string;
  lastReviewed?: string;
  imageAlt?: string;
  ogImageText?: string;
}
