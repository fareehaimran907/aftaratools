import { Link } from "@/i18n/routing";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { Wrench } from "lucide-react";

export function Header() {
  const t = useTranslations("Navigation");
  const tCat = useTranslations("Categories");

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-border transition-all duration-300">
      <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground group-hover:scale-105 transition-transform">
              <Wrench size={18} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground group-hover:opacity-80 transition-opacity">
              Aftara Tools
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link
              href="/"
              className="text-secondary-foreground hover:text-primary transition-colors"
            >
              {t("home")}
            </Link>
            <Link
              href={"/category/developer-tools" as any}
              className="text-secondary-foreground hover:text-primary transition-colors"
            >
              {tCat("developerTools") || "Developer Tools"}
            </Link>
            <Link
              href={"/category/finance" as any}
              className="text-secondary-foreground hover:text-primary transition-colors"
            >
              {tCat("finance") || "Finance"}
            </Link>
            <Link
              href={"/category/date-time" as any}
              className="text-secondary-foreground hover:text-primary transition-colors"
            >
              {tCat("time") || "Time"}
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
