import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const arabic = Noto_Sans_Arabic({ subsets: ["arabic"], display: "swap" });

import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AdSenseLoader } from "@/components/ads/AdSenseLoader";
import { ConsentBanner } from "@/components/ads/ConsentBanner";

export const metadata: Metadata = {
  title: "100 Tools",
  description: "Multilingual 100-Tool Website",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const isRtl = locale === 'ar';
  const fontClass = isRtl ? arabic.className : inter.className;

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <AdSenseLoader />
      </head>
      <body className={fontClass} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
              <ConsentBanner />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
