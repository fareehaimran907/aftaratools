"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel } from "@/components/tools/ui";
import { Button } from "@/components/ui/button";
import { Copy, RefreshCw, Hash } from "lucide-react";

export function UuidGenerator() {
  const t = useTranslations("Tools.uuid-generator.ui");
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState("5");

  const generate = () => {
    const c = parseInt(count) || 1;
    const limit = Math.min(Math.max(c, 1), 100);
    const newUuids = Array.from({ length: limit }, () => crypto.randomUUID());
    setUuids(newUuids);
  };

  const copyAll = () => {
    if (uuids.length > 0) {
      navigator.clipboard.writeText(uuids.join('\n'));
    }
  };

  return (
    <ToolLayout.Stacked>
      <ToolPanel className="bg-surface shadow-sm p-6 flex flex-col md:flex-row gap-4 items-center justify-between border border-border">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <label className="text-sm font-medium text-secondary-foreground whitespace-nowrap">{t('howManyUuids')}</label>
          <input 
            type="number" 
            value={count} 
            onChange={e => setCount(e.target.value)} 
            min="1" 
            max="100" 
            className="w-24 h-10 px-3 rounded-md border border-input bg-background font-mono text-center outline-none focus:border-primary/50"
          />
        </div>
        <Button onClick={generate} size="lg" className="w-full md:w-auto gap-2 shadow-sm">
          <RefreshCw className="w-4 h-4" /> {t('generate')}
        </Button>
      </ToolPanel>

      <ToolPanel className="p-0 overflow-hidden shadow-lg border border-border bg-surface flex flex-col min-h-[300px]">
        <div className="px-4 py-3 border-b border-border bg-muted/30 flex items-center justify-between">
          <span className="text-sm font-semibold text-secondary-foreground flex items-center gap-2">
            <Hash className="w-4 h-4" /> {t('generatedUuids')}
          </span>
          <button onClick={copyAll} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-xs font-medium" title={t('copyAll')}>
            <Copy className="w-3.5 h-3.5" /> {t('copyAll')}
          </button>
        </div>
        <textarea 
          value={uuids.join('\n')}
          readOnly
          className="flex-1 w-full p-4 bg-transparent font-mono text-sm break-all outline-none resize-none text-foreground placeholder:text-muted-foreground"
          placeholder={t("clickGenerateToCreateUUI")}
          spellCheck={false}
        />
      </ToolPanel>
    </ToolLayout.Stacked>
  );
}
