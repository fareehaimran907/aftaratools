"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { Calculator, BarChart3 } from "lucide-react";

export function AverageCalculator() {
  const t = useTranslations("Tools.average-calculator.ui");
  const [val, setVal] = useState("10, 20, 30, 40, 50");

  const numbers = val.split(/[\s,]+/).map(n => parseFloat(n)).filter(n => !isNaN(n));
  
  const sum = numbers.reduce((a, b) => a + b, 0);
  const count = numbers.length;
  const mean = count > 0 ? sum / count : 0;
  
  // Median calculation
  const sorted = [...numbers].sort((a, b) => a - b);
  let median = 0;
  if (count > 0) {
    const mid = Math.floor(count / 2);
    median = count % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("dataSet")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-3">
            <label className="text-sm font-medium text-secondary-foreground">{t('enterNumbersSeparatedByCommasOrSpaces')}</label>
            <textarea 
              value={val} 
              onChange={e => setVal(e.target.value)} 
              className="w-full min-h-[200px] p-4 rounded-xl border border-input bg-background text-base resize-y outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all font-mono"
              placeholder={t("eG12345")}
            />
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
          <BarChart3 className="w-5 h-5 text-primary" />
          {t("statistics")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={t('averageMean')}
            value={mean.toLocaleString(undefined, { maximumFractionDigits: 4 })}
            highlight={true}
          />
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <ToolResultItem 
              label={t('median')}
              value={median.toLocaleString(undefined, { maximumFractionDigits: 4 })}
            />
            <ToolResultItem 
              label={t('count')}
              value={count.toString()}
            />
            <ToolResultItem 
              label={t('sum')}
              value={sum.toLocaleString()}
            />
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
