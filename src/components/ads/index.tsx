import { AdConfig } from "@/config/ads";
import { useTranslations } from "next-intl";

export function AdBanner() {
  const t = useTranslations("ads");
  if (!AdConfig.enabled) return null;
  return (
    <div className="w-full min-h-[90px] bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700 my-8 rounded-lg overflow-hidden relative">
      <span className="text-gray-400 text-xs uppercase tracking-widest">{t("advertisement")}</span>
    </div>
  );
}

export function AdRectangle() {
  const t = useTranslations("ads");
  if (!AdConfig.enabled) return null;
  return (
    <div className="w-full max-w-[300px] mx-auto min-h-[250px] bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700 my-8 rounded-lg overflow-hidden relative">
      <span className="text-gray-400 text-xs uppercase tracking-widest">{t("advertisement")}</span>
    </div>
  );
}

export function AdInContent() {
  const t = useTranslations("ads");
  if (!AdConfig.enabled) return null;
  return (
    <div className="w-full min-h-[120px] bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-200 dark:border-gray-700 my-8 rounded-lg overflow-hidden relative">
      <span className="text-gray-400 text-xs uppercase tracking-widest">{t("advertisement")}</span>
    </div>
  );
}
