"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { TrendingUp, ArrowUpRight } from "lucide-react";

export function PercentageIncreaseCalculator() {
  const t = useTranslations("Tools.percentage-increase-calculator.ui");
  const [initialValue, setInitialValue] = useState("100");
  const [finalValue, setFinalValue] = useState("120");

  const initial = parseFloat(initialValue) || 0;
  const final = parseFloat(finalValue) || 0;
  
  let difference = final - initial;
  let increase = 0;
  
  if (initial !== 0) {
    increase = (difference / Math.abs(initial)) * 100;
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("values")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="initial">{t('initialValue')}</label>
                <Input id="initial" type="number" value={initialValue} onChange={e => setInitialValue(e.target.value)} className="h-12 text-lg" />
              </div>
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="final">{t('finalValue')}</label>
                <Input id="final" type="number" value={finalValue} onChange={e => setFinalValue(e.target.value)} className="h-12 text-lg" />
              </div>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
          <ArrowUpRight className="w-5 h-5 text-primary" />
          {t("increaseBreakdown")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={t('change')}
            value={`${increase.toFixed(2)}%`}
            highlight={true}
            valueClassName={increase >= 0 ? "text-primary" : "text-error"}
          />
          <ToolResultItem 
            label={t('absoluteChange')}
            value={`${difference > 0 ? '+' : ''}${difference}`}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
