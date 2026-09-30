import { Link } from "@/i18n/routing";
import { Wrench } from "lucide-react";
import { getToolSeoContent } from "@/lib/tools/registry-helpers";

import { useTranslations, useLocale } from "next-intl";

import { PrivacySettingsButton } from "@/components/PrivacySettingsButton";

export function Footer() {
  const tCat = useTranslations("Categories");
  const tNav = useTranslations("Navigation");
  const tFooter = useTranslations("Footer");
  const locale = useLocale();
  
  const getToolTitle = (id: string, fallback: string) => {
    const jsonContent = getToolSeoContent(id, locale);
    return jsonContent?.h1 || jsonContent?.seoTitle || fallback;
  };

  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group inline-flex">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground group-hover:scale-105 transition-transform">
                <Wrench size={16} strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground group-hover:opacity-80 transition-opacity">
                100 Tools
              </span>
            </Link>
            <p className="text-sm text-secondary-foreground leading-relaxed mb-6">
              {tFooter("tagline") || "The premium productivity platform for all your daily calculation, conversion, and generation needs."}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">{tNav("categories") || "Categories"}</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground">
              <li><Link href={"/category/developer-tools" as any} className="hover:text-primary transition-colors">{tCat("developerTools") || "Developer Tools"}</Link></li>
              <li><Link href={"/category/finance" as any} className="hover:text-primary transition-colors">{tCat("finance") || "Finance"}</Link></li>
              <li><Link href={"/category/date-time" as any} className="hover:text-primary transition-colors">{tCat("time") || "Date & Time"}</Link></li>
              <li><Link href={"/category/text" as any} className="hover:text-primary transition-colors">{tCat("text") || "Text Tools"}</Link></li>
              <li><Link href={"/category/converters" as any} className="hover:text-primary transition-colors">{tCat("converters") || "Converters"}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">{tFooter("popularTools") || "Popular Tools"}</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground">
              <li><Link href={"/age-calculator" as any} className="hover:text-primary transition-colors">{getToolTitle("age-calculator", "Age Calculator")}</Link></li>
              <li><Link href={"/json-formatter" as any} className="hover:text-primary transition-colors">{getToolTitle("json-formatter", "JSON Formatter")}</Link></li>
              <li><Link href={"/percentage-calculator" as any} className="hover:text-primary transition-colors">{getToolTitle("percentage-calculator", "Percentage Calculator")}</Link></li>
              <li><Link href={"/base64-encode-decode" as any} className="hover:text-primary transition-colors">{getToolTitle("base64-encode-decode", "Base64 Encoder")}</Link></li>
              <li><Link href={"/salary-calculator" as any} className="hover:text-primary transition-colors">{getToolTitle("salary-calculator", "Salary Calculator")}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">{tFooter("company") || "Company"}</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground">
              <li><Link href={"/about" as any} className="hover:text-primary transition-colors">{tNav("about") || "About Us"}</Link></li>
              <li><Link href={"/contact" as any} className="hover:text-primary transition-colors">{tNav("contact") || "Contact"}</Link></li>
              <li><Link href={"/privacy" as any} className="hover:text-primary transition-colors">{tFooter("privacy") || "Privacy Policy"}</Link></li>
              <li><Link href={"/terms" as any} className="hover:text-primary transition-colors">{tFooter("terms") || "Terms of Service"}</Link></li>
              <li><Link href={"/cookie" as any} className="hover:text-primary transition-colors">{tFooter("cookie") || "Cookie Policy"}</Link></li>
              <li><Link href={"/disclaimer" as any} className="hover:text-primary transition-colors">{tFooter("disclaimer") || "Disclaimer"}</Link></li>
              <li>
                <PrivacySettingsButton label={tFooter("privacySettings") || "Privacy Settings"} />
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-secondary-foreground text-sm">
            &copy; {new Date().getFullYear()} 100 Tools. {tFooter("allRightsReserved") || "All rights reserved."}
          </div>
          <div className="text-sm text-muted-foreground flex gap-4">
            <span>{tFooter("builtWith") || "Built with Next.js"}</span>
            <span>{tFooter("madeWithHeart") || "Made with ❤️"}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
