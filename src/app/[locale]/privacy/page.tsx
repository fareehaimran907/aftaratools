import { setRequestLocale, getTranslations } from "next-intl/server";
import { Shield, EyeOff, Server, HardDrive } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Privacy" });
  return {
    title: `${t("title")} - 100 Tools`,
    description: t("intro")
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Privacy");

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            {t("lastUpdated")}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            {t("title")}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {t("intro")}
          </p>
        </div>

        <div className="space-y-12">
          <div className="flex flex-col md:flex-row gap-8 items-start bg-card border border-border/50 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <div className="p-4 bg-red-500/10 text-red-600 dark:text-red-400 rounded-2xl shrink-0">
              <EyeOff className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">{t("dataCollectionTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("dataCollectionText")}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start bg-card border border-border/50 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <div className="p-4 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl shrink-0">
              <Server className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">{t("analyticsTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("analyticsText")}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start bg-card border border-border/50 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <div className="p-4 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-2xl shrink-0">
              <HardDrive className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">{t("thirdPartyTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("thirdPartyText")}
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">{t("optOutTitle")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("optOutText")}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start bg-card border border-border/50 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <div className="p-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl shrink-0">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">{t("userRightsTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("userRightsText")}
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">{t("childrenTitle")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("childrenText")}
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-6 mb-2">{t("dataRetentionTitle")}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t("dataRetentionText")}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground">
            {t("contactUs")}
          </p>
        </div>
      </div>
    </main>
  );
}
