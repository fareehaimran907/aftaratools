"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { Search, Command, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface ToolItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
}

export function ToolSearch({ tools }: { tools: ToolItem[] }) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Search");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return tools.filter(
      (tool) =>
        tool.title.toLowerCase().includes(lowerQuery) ||
        tool.description.toLowerCase().includes(lowerQuery)
    ).slice(0, 5);
  }, [query, tools]);

  return (
    <div className="relative w-full max-w-2xl mx-auto z-50 text-left" ref={searchRef}>
      <div 
        className={`relative flex items-center transition-all duration-300 rounded-2xl ${
          isFocused ? "ring-2 ring-primary ring-offset-2 ring-offset-background shadow-xl" : "shadow-lg"
        }`}
      >
        <div className="absolute left-5 text-muted-foreground">
          <Search size={22} strokeWidth={2.5} />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={t("placeholder") || "Search for tools..."}
          className="w-full pl-14 pr-16 py-5 rounded-2xl border border-border bg-surface text-foreground text-lg focus:outline-none transition-colors"
        />
        <div className="absolute right-5 flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-md border border-border">
          <Command size={14} /> K
        </div>
      </div>

      {(isFocused && query.trim()) && (
        <div className="absolute top-[calc(100%+12px)] left-0 right-0 bg-surface/95 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-200">
          {results.length > 0 ? (
            <ul className="py-2">
              {results.map((tool, index) => (
                <li key={tool.id}>
                  <Link
                    href={`/${tool.slug}` as any}
                    className="flex items-center justify-between px-6 py-3.5 hover:bg-secondary/80 transition-colors group"
                    onClick={() => {
                      setQuery("");
                      setIsFocused(false);
                    }}
                  >
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                        {tool.title}
                      </h4>
                      <p className="text-sm text-secondary-foreground mt-0.5 line-clamp-1">{tool.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-6 py-12 text-center">
              <Search className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
              <p className="text-secondary-foreground font-medium">
                {t("noResults", { query }) || `No tools found for "${query}"`}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{t("tryADifferentSearchTermOr")}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
