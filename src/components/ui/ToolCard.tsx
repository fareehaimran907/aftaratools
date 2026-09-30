import { Link } from "@/i18n/routing";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ToolCardProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  icon?: string;
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

export function ToolCard({ slug, title, description, category, icon }: ToolCardProps) {
  const styles = getCategoryStyles(category);
  const IconComponent = (icon && (Icons as any)[icon]) ? (Icons as any)[icon] : Icons.Wrench;

  return (
    <Link href={`/${slug}` as any} className="group block h-full outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl">
      <div className={`h-full p-6 bg-surface rounded-2xl border border-border shadow-sm group-hover:shadow-md transition-all duration-300 relative overflow-hidden flex flex-col ${styles.border}`}>
        {/* Subtle background gradient on hover */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 ${styles.bg}`} />
        
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div className={`p-2.5 rounded-xl ${styles.bg} ${styles.text}`}>
            <IconComponent className="w-5 h-5" strokeWidth={2} />
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </div>
        
        <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors relative z-10">{title}</h3>
        <p className="text-sm text-secondary-foreground leading-relaxed flex-grow relative z-10 line-clamp-3">{description}</p>
      </div>
    </Link>
  );
}
