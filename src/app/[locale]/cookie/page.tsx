import { setRequestLocale, getTranslations } from "next-intl/server";
import { Cookie, Info, Lock, Settings2 } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Cookie" });
  return {
    title: `${t("title")} - 100 Tools`,
    description: t("intro")
  };
}

export default async function CookiePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Cookie");

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full mb-6">
            <Cookie className="w-10 h-10" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            {t("title")}
          </h1>
          <p className="text-sm font-medium text-muted-foreground mb-6">
            {t("lastUpdated")}
          </p>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t("intro")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border/50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl">
                <Info className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{t("whatAreCookiesTitle")}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t("whatAreCookiesText")}
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl">
                <Settings2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{t("howWeUseCookiesTitle")}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t("howWeUseCookiesText")}
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-2xl">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{t("noTrackingTitle")}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t("noTrackingText")}
            </p>
          </div>
        </div>

        <div className="mt-12 bg-muted/30 border border-border/50 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-foreground mb-3">{t("managingCookiesTitle")}</h2>
          <p className="text-muted-foreground">
            {t("managingCookiesText")}
          </p>
        </div>
      </div>
    </main>
  );
}
