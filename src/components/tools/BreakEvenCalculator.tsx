"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { TrendingUp, Scale, AlertTriangle } from "lucide-react";

export function BreakEvenCalculator() {
  const t = useTranslations("Tools.break-even-calculator.ui");
  const [fixedCosts, setFixedCosts] = useState("10000");
  const [variableCost, setVariableCost] = useState("15");
  const [price, setPrice] = useState("40");

  const fc = parseFloat(fixedCosts) || 0;
  const vc = parseFloat(variableCost) || 0;
  const p = parseFloat(price) || 0;
  
  let breakEvenUnits = 0;
  if (p > vc) {
    breakEvenUnits = fc / (p - vc);
  }

  const breakEvenRevenue = breakEvenUnits * p;

  const format = (n: number) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Scale className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("costsPricing")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="fc">{t('fixedCosts')}</label>
              <Input id="fc" type="number" min="0" value={fixedCosts} onChange={e => setFixedCosts(e.target.value)} className="h-12 text-lg" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="vc">{t('variableCostPerUnit')}</label>
              <Input id="vc" type="number" min="0" value={variableCost} onChange={e => setVariableCost(e.target.value)} className="h-12 text-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="price">{t('sellingPricePerUnit')}</label>
              <Input id="price" type="number" min="0" value={price} onChange={e => setPrice(e.target.value)} className="h-12 text-lg" />
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {p <= vc && p > 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-error gap-4 p-8 text-center bg-error/5 rounded-xl border border-error/20">
            <AlertTriangle className="w-12 h-12" />
            <p className="font-medium text-lg">{t('sellingPriceMustBeGreaterThanVariableCostToBreakEven')}</p>
          </div>
        ) : (
          <>
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-primary" />
              {t("breakEvenPoint")}</h3>
            
            <div className="space-y-4">
              <ToolResultItem 
                label={t('unitsToSell')}
                value={Math.ceil(breakEvenUnits).toLocaleString()}
                highlight={true}
              />
              <ToolResultItem 
                label={t('breakevenRevenue')}
                value={format(breakEvenRevenue)}
              />
            </div>
          </>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
