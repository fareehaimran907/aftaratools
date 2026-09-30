"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export function ConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const t = useTranslations("Consent");

  useEffect(() => {
    // Check if consent has already been given or rejected
    const consentState = localStorage.getItem("cookie-consent");
    if (!consentState) {
      setShowBanner(true);
    } else {
      applyConsent(JSON.parse(consentState));
    }

    // Listen for custom event from footer link
    const handleOpenPrefs = () => setShowPreferences(true);
    window.addEventListener("open-consent-preferences", handleOpenPrefs);
    return () => window.removeEventListener("open-consent-preferences", handleOpenPrefs);
  }, []);

  const applyConsent = (state: { ad_storage: "granted" | "denied", analytics_storage: "granted" | "denied" }) => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("consent", "update", state);
    }
  };

  const handleAcceptAll = () => {
    const state = { ad_storage: "granted" as const, analytics_storage: "granted" as const };
    localStorage.setItem("cookie-consent", JSON.stringify(state));
    applyConsent(state);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleRejectAll = () => {
    const state = { ad_storage: "denied" as const, analytics_storage: "denied" as const };
    localStorage.setItem("cookie-consent", JSON.stringify(state));
    applyConsent(state);
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner && !showPreferences) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none flex justify-center">
      <div className="bg-card border border-border rounded-xl shadow-2xl p-6 max-w-4xl w-full pointer-events-auto flex flex-col gap-5">
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{t("title")}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t("description")}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap justify-end gap-3 w-full">
          <button 
            onClick={() => setShowPreferences(true)}
            className="px-4 py-2 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-lg transition-colors whitespace-nowrap"
          >
            {t("managePreferences")}
          </button>
          <button 
            onClick={handleRejectAll}
            className="px-4 py-2 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-lg transition-colors whitespace-nowrap"
          >
            {t("rejectAll")}
          </button>
          <button 
            onClick={handleAcceptAll}
            className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-colors whitespace-nowrap"
          >
            {t("acceptAll")}
          </button>
        </div>
      </div>

      {showPreferences && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4 pointer-events-auto">
          <div className="bg-card border border-border rounded-xl shadow-2xl p-6 max-w-2xl w-full">
            <h3 className="text-xl font-bold text-foreground mb-4">{t("managePreferences")}</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start justify-between p-4 border border-border rounded-lg bg-muted/30">
                <div>
                  <h4 className="font-semibold text-foreground">{t("essentialCookies")}</h4>
                  <p className="text-sm text-muted-foreground">{t("essentialCookiesDesc")}</p>
                </div>
                <div className="shrink-0 pt-1">
                  <input type="checkbox" checked disabled className="w-5 h-5 rounded border-input" />
                </div>
              </div>
              
              <div className="flex items-start justify-between p-4 border border-border rounded-lg">
                <div>
                  <h4 className="font-semibold text-foreground">{t("adCookies")}</h4>
                  <p className="text-sm text-muted-foreground">{t("adCookiesDesc")}</p>
                </div>
                <div className="shrink-0 pt-1">
                  <input type="checkbox" id="pref-ad" defaultChecked className="w-5 h-5 rounded border-input text-primary focus:ring-primary" />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setShowPreferences(false)}
                className="px-4 py-2 text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-lg transition-colors"
              >
                {t("close")}
              </button>
              <button 
                onClick={() => {
                  const adGranted = (document.getElementById('pref-ad') as HTMLInputElement)?.checked;
                  const state = { 
                    ad_storage: (adGranted ? "granted" : "denied") as "granted" | "denied",
                    analytics_storage: "denied" as "denied"
                  };
                  localStorage.setItem("cookie-consent", JSON.stringify(state));
                  applyConsent(state);
                  setShowBanner(false);
                  setShowPreferences(false);
                }}
                className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-colors"
              >
                {t("savePreferences")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
