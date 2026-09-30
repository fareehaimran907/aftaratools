"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { TrendingUp, DollarSign } from "lucide-react";

export function ProfitMarginCalculator() {
  const t = useTranslations("Tools.profit-margin-calculator.ui");
  const [revenue, setRevenue] = useState("1000");
  const [cost, setCost] = useState("600");

  const r = parseFloat(revenue) || 0;
  const c = parseFloat(cost) || 0;
  
  const profit = Math.max(0, r - c);
  const margin = r > 0 ? (profit / r) * 100 : 0;

  const format = (n: number) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <DollarSign className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("financialDetails")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="revenue">{t('revenueSellingPrice')}</label>
              <Input id="revenue" type="number" min="0" value={revenue} onChange={e => setRevenue(e.target.value)} className="h-12 text-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="cost">{t('costOfGoodsSold')}</label>
              <Input id="cost" type="number" min="0" value={cost} onChange={e => setCost(e.target.value)} className="h-12 text-lg" />
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-primary" />
          {t("profitability")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={t('grossProfit')}
            value={format(profit)}
            highlight={true}
          />
          <ToolResultItem 
            label={t('margin')}
            value={`${margin.toFixed(2)}%`}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
