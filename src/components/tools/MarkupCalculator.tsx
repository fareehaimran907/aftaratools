"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { ArrowUpRight, DollarSign } from "lucide-react";

export function MarkupCalculator() {
  const t = useTranslations("Tools.markup-calculator.ui");
  const [cost, setCost] = useState("100");
  const [markup, setMarkup] = useState("50");

  const c = parseFloat(cost) || 0;
  const m = parseFloat(markup) || 0;
  
  const profit = c * (m / 100);
  const revenue = c + profit;

  const format = (n: number) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <DollarSign className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("pricingDetails")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="cost">{t('cost')}</label>
              <Input id="cost" type="number" min="0" value={cost} onChange={e => setCost(e.target.value)} className="h-12 text-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="markup">{t('markup')} (%)</label>
              <Input id="markup" type="number" min="0" value={markup} onChange={e => setMarkup(e.target.value)} className="h-12 text-lg" />
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
          <ArrowUpRight className="w-5 h-5 text-primary" />
          {t("sellingPrice")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={t('sellingPrice')}
            value={format(revenue)}
            highlight={true}
          />
          <ToolResultItem 
            label={t('profit')}
            value={format(profit)}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
