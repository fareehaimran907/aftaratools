import { setRequestLocale, getTranslations } from "next-intl/server";
import { FileText, AlertTriangle, Scale, Settings } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Terms" });
  return {
    title: `${t("title")} - Aftara Tools`,
    description: t("intro"),
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Terms");

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            {t("lastUpdated")}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            {t("title")}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {t("intro")}
          </p>
        </div>

        <div className="grid gap-8">
          <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-xl">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {t("noWarrantyTitle")}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg ml-2 lg:ml-16">
              {t("noWarrantyText")}
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-red-500/10 text-red-600 dark:text-red-400 rounded-xl">
                <Scale className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {t("liabilityTitle")}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg ml-2 lg:ml-16">
              {t("liabilityText")}
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl">
                <ShieldCheckIcon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {t("acceptableUseTitle")}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg ml-2 lg:ml-16">
              {t("acceptableUseText")}
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl">
                <Settings className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {t("modificationsTitle")}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg ml-2 lg:ml-16">
              {t("modificationsText")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function ShieldCheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
