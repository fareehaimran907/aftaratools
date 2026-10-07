import { setRequestLocale, getTranslations } from "next-intl/server";
import { Mail, MessageSquare, Send } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Contact" });
  return {
    title: `${t("title")} - Aftara Tools`,
    description: t("description"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");

  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-bl from-blue-500/20 via-purple-500/10 to-transparent blur-3xl -z-10 rounded-full opacity-50 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 text-primary rounded-full mb-6">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-6">
            {t("title")}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="bg-card border border-border/50 rounded-3xl p-8 sm:p-10 shadow-sm mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  {t("formName")}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder={t("formNamePlaceholder")}
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  {t("formEmail")}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder={t("formEmailPlaceholder")}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-foreground"
              >
                {t("formSubject")}
              </label>
              <input
                type="text"
                id="subject"
                className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={t("formSubjectPlaceholder")}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                {t("formMessage")}
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y"
                placeholder={t("formMessagePlaceholder")}
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold rounded-xl px-8 py-3.5 hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none"
            >
              <Send className="w-5 h-5" />
              {t("formSubmit")}
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
          <div className="bg-card border border-border/50 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 hover:border-border transition-colors">
            <div className="p-3 bg-primary/10 text-primary rounded-xl shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                {t("emailUs")}
              </h3>
              <a
                href="mailto:aftaratech@gmail.com"
                className="text-primary hover:underline text-sm break-all"
              >
                {t("emailAddress")}
              </a>
            </div>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-6 flex items-center justify-center sm:justify-start">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("responseTime")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
