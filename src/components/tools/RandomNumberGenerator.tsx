"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResult, ToolResultItem } from "@/components/tools/ui";
import { Button } from "@/components/ui/button";
import { RefreshCw, Shuffle } from "lucide-react";

export function RandomNumberGenerator() {
  const t = useTranslations("Tools.random-number-generator.ui");
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [result, setResult] = useState<number | null>(null);

  const generate = () => {
    const minVal = parseInt(min) || 0;
    const maxVal = parseInt(max) || 0;
    
    if (minVal >= maxVal) {
      setResult(minVal);
      return;
    }
    
    // Inclusive max
    const random = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    setResult(random);
  };

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Shuffle className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("rangeSettings")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1">
          <div className="space-y-2">
            <label className="text-sm font-medium text-secondary-foreground">{t('minimum')}</label>
            <input 
              type="number" 
              value={min} 
              onChange={e => setMin(e.target.value)} 
              className="w-full h-14 px-4 rounded-xl border border-input bg-background text-lg font-mono outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-secondary-foreground">{t('maximum')}</label>
            <input 
              type="number" 
              value={max} 
              onChange={e => setMax(e.target.value)} 
              className="w-full h-14 px-4 rounded-xl border border-input bg-background text-lg font-mono outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
            />
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <div className="flex flex-col gap-6">
        <ToolResult className="flex-1 justify-center items-center py-12" highlight>
          <div className="text-sm font-semibold tracking-wider uppercase text-primary/70 mb-4">{t('result')}</div>
          <div className="text-8xl sm:text-9xl font-black tracking-tighter text-foreground drop-shadow-sm">
            {result !== null ? result : "-"}
          </div>
        </ToolResult>
        <Button onClick={generate} size="lg" className="h-14 text-lg w-full shadow-lg hover:shadow-xl transition-all">
          <RefreshCw className="w-5 h-5 mr-3" /> {t('generateRandomNumber')}
        </Button>
      </div>
    </ToolLayout.Split>
  );
}
