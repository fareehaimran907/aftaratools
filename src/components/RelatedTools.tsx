import { Link } from "@/i18n/routing";
import { toolsRegistry } from "@/lib/tools/registry";
import { Locale, routing } from "@/i18n/routing";
import { ToolCard } from "@/components/ui/ToolCard";
import { useTranslations } from "next-intl";
import { getToolSeoContent } from "@/lib/tools/registry-helpers";

export function RelatedTools({ currentToolId, locale, orientation = "vertical" }: { currentToolId: string; locale: Locale; orientation?: "vertical" | "horizontal" }) {
    const t = useTranslations("RelatedTools");
  const currentTool = toolsRegistry[currentToolId];
  if (!currentTool) return null;

  // 1. Get explicit related tools
  const explicitRelatedIds = currentTool.relatedToolIds || [];
  
  // 2. Fallback/supplement with category tools if we have fewer than 6
  const categoryTools = Object.values(toolsRegistry)
    .filter(t => t.categoryId === currentTool.categoryId && t.id !== currentToolId)
    .map(t => t.id);
    
  // Combine, deduplicate, and remove self
  const candidateIds = Array.from(new Set([...explicitRelatedIds, ...categoryTools]))
    .filter(id => id !== currentToolId);

  // 3. Resolve valid translated tools
  const pathnames = routing.pathnames as Record<string, any>;
  const validRelatedTools = candidateIds
    .map(id => toolsRegistry[id])
    .filter(Boolean)
    .map(tool => {
      const pathKey = `/${tool.id}`;
      const slugObj = pathnames[pathKey];
      let slug = pathKey;
      if (typeof slugObj === 'object' && slugObj !== null) {
        slug = slugObj[locale] || slugObj.en || pathKey;
      } else if (typeof slugObj === 'string') {
        slug = slugObj;
      }
      
      const jsonContent = getToolSeoContent(tool.id, locale);
      const title = jsonContent?.h1 || jsonContent?.seoTitle || tool.locales[locale]?.title || tool.locales.en?.title || tool.id;
      const description = jsonContent?.intro || jsonContent?.metaDescription || tool.locales[locale]?.description || tool.locales.en?.description || "";
      
      return {
        id: tool.id,
        category: tool.categoryId,
        icon: tool.icon,
        title,
        description,
        slug: slug.startsWith('/') ? slug.slice(1) : slug,
      };
    })
    .slice(0, 4); // Limit to 4 for sidebar

  // 4. Get some popular tools (different category) to ensure broad coverage
  const popularTools = Object.values(toolsRegistry)
    .filter(t => t.id !== currentToolId && t.categoryId !== currentTool.categoryId && !candidateIds.includes(t.id))
    .slice(0, 2) // Limit to 2 for sidebar
    .map(tool => {
      const pathKey = `/${tool.id}`;
      const slugObj = pathnames[pathKey];
      let slug = pathKey;
      if (typeof slugObj === 'object' && slugObj !== null) {
        slug = slugObj[locale] || slugObj.en || pathKey;
      } else if (typeof slugObj === 'string') {
        slug = slugObj;
      }
      
      const jsonContent = getToolSeoContent(tool.id, locale);
      const title = jsonContent?.h1 || jsonContent?.seoTitle || tool.locales[locale]?.title || tool.locales.en?.title || tool.id;
      const description = jsonContent?.intro || jsonContent?.metaDescription || tool.locales[locale]?.description || tool.locales.en?.description || "";
      
      return {
        id: tool.id,
        category: tool.categoryId,
        icon: tool.icon,
        title,
        description,
        slug: slug.startsWith('/') ? slug.slice(1) : slug,
      };
    });

  if (validRelatedTools.length === 0 && popularTools.length === 0) return null;

  return (
    <div className={orientation === "horizontal" ? "space-y-12" : "space-y-10"}>
      {validRelatedTools.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-5 text-foreground">{t("relatedTools")}</h2>
          <div className={orientation === "horizontal" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" : "flex flex-col gap-4"}>
            {validRelatedTools.map(tool => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </section>
      )}

      {popularTools.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-5 text-foreground">{t("popular")}</h2>
          <div className={orientation === "horizontal" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" : "flex flex-col gap-4"}>
            {popularTools.map(tool => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
