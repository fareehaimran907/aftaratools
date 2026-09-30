import { setRequestLocale, getTranslations } from "next-intl/server";
import { Info, Target, ShieldCheck, Activity, BookOpen, Scale } from "lucide-react";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");

  const cards = [
    {
      title: t("standardizedFormulasTitle"),
      text: t("standardizedFormulasText"),
      icon: <Scale className="w-8 h-8 text-blue-500 mb-4" />
    },
    {
      title: t("medicalGuidelinesTitle"),
      text: t("medicalGuidelinesText"),
      icon: <Activity className="w-8 h-8 text-rose-500 mb-4" />
    },
    {
      title: t("privacyFirstTitle"),
      text: t("privacyFirstText"),
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500 mb-4" />
    },
    {
      title: t("continuousTestingTitle"),
      text: t("continuousTestingText"),
      icon: <Target className="w-8 h-8 text-purple-500 mb-4" />
    }
  ];

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-3xl rounded-full mix-blend-multiply filter dark:mix-blend-soft-light opacity-50 animate-blob"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-6">
            <Info className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            {t("title")}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="space-y-16">
          <section className="bg-card border border-border/50 rounded-3xl p-8 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <Target className="w-6 h-6 text-primary" />
              {t("missionTitle")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("missionText")}
            </p>
          </section>

          <section>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("methodologyTitle")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t("methodologyIntro")}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cards.map((card, idx) => (
                <div key={idx} className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-all duration-300 hover:border-border group">
                  <div className="transform group-hover:scale-110 transition-transform duration-300 origin-left">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-card border border-border/50 rounded-3xl p-8 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-primary" />
              {t("editorialGuidelinesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t("editorialGuidelinesText")}
            </p>

            <div className="bg-muted/50 rounded-2xl p-6 border border-border/50">
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                {t("disclaimer")}
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
