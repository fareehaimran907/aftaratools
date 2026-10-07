import { setRequestLocale, getTranslations } from "next-intl/server";
import { AlertTriangle, ShieldAlert, Scale, FileText } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Disclaimer" });
  return {
    title: `${t("title")} - Aftara Tools`,
    description: t("intro"),
  };
}

export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Disclaimer");

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
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
            <div className="p-4 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-2xl shrink-0">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("accuracyTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("accuracyText")}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start bg-card border border-border/50 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <div className="p-4 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-2xl shrink-0">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("medicalTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("medicalText")}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start bg-card border border-border/50 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <div className="p-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-2xl shrink-0">
              <Scale className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("financialTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("financialText")}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start bg-card border border-border/50 rounded-3xl p-8 hover:shadow-md transition-shadow">
            <div className="p-4 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-2xl shrink-0">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {t("legalTitle")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {t("legalText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
