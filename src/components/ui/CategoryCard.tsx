import { Link } from "@/i18n/routing";
import { ArrowRight, Box } from "lucide-react";
import { useTranslations } from "next-intl";

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  toolCount: number;
  featuredTools: { title: string; slug: string }[];
}

const getCategoryStyles = (category: string) => {
  const base = "transition-colors group-hover:bg-opacity-20";
  switch (category) {
    case "developer-tools":
      return { bg: "bg-[var(--cat-dev-bg)]", text: "text-[var(--cat-dev)]", border: "group-hover:border-[var(--cat-dev)]" };
    case "finance":
      return { bg: "bg-[var(--cat-finance-bg)]", text: "text-[var(--cat-finance)]", border: "group-hover:border-[var(--cat-finance)]" };
    case "date-time":
      return { bg: "bg-[var(--cat-time-bg)]", text: "text-[var(--cat-time)]", border: "group-hover:border-[var(--cat-time)]" };
    case "text":
      return { bg: "bg-[var(--cat-text-bg)]", text: "text-[var(--cat-text)]", border: "group-hover:border-[var(--cat-text)]" };
    case "converters":
      return { bg: "bg-[var(--cat-convert-bg)]", text: "text-[var(--cat-convert)]", border: "group-hover:border-[var(--cat-convert)]" };
    default:
      return { bg: "bg-accent", text: "text-primary", border: "group-hover:border-primary" };
  }
};

export function CategoryCard({ id, title, description, toolCount, featuredTools }: CategoryCardProps) {
    const t = useTranslations("CategoryCard");
  const styles = getCategoryStyles(id);

  return (
    <div className={`p-6 bg-surface rounded-2xl border border-border shadow-sm group hover:shadow-md transition-all duration-300 flex flex-col ${styles.border}`}>
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-xl ${styles.bg} ${styles.text}`}>
          <Box className="w-6 h-6" strokeWidth={2} />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">{title}</h2>
          <p className="text-sm text-secondary-foreground">{toolCount} {t("tools")}</p>
        </div>
      </div>
      
      <p className="text-secondary-foreground mb-6 line-clamp-2">{description}</p>
      
      <div className="flex-1 space-y-2 mb-6">
        {featuredTools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/${tool.slug}` as any}
            className="block text-sm font-medium text-foreground hover:text-primary transition-colors py-1.5 px-3 -mx-3 rounded-md hover:bg-secondary"
          >
            {tool.title}
          </Link>
        ))}
      </div>
      
      <div className="mt-auto pt-4 border-t border-border">
        <Link
          href={`/category/${id}` as any}
          className={`inline-flex items-center text-sm font-semibold ${styles.text} hover:opacity-80 transition-opacity`}
        >
          {t("viewAllTools")}<ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}
