"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { LineChart, Briefcase } from "lucide-react";

export function RoiCalculator() {
  const t = useTranslations("Tools.roi-calculator.ui");
  const [investment, setInvestment] = useState("1000");
  const [returned, setReturned] = useState("1500");

  const i = parseFloat(investment) || 0;
  const r = parseFloat(returned) || 0;
  
  const profit = r - i;
  const roi = i > 0 ? (profit / i) * 100 : 0;

  const format = (n: number) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("investmentDetails")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="investment">{t('initialInvestment')}</label>
              <Input id="investment" type="number" min="0" value={investment} onChange={e => setInvestment(e.target.value)} className="h-12 text-lg" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="returned">{t('finalValueReturned')}</label>
              <Input id="returned" type="number" min="0" value={returned} onChange={e => setReturned(e.target.value)} className="h-12 text-lg" />
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
          <LineChart className="w-5 h-5 text-primary" />
          {t("returnOnInvestment")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={t('roi')}
            value={`${roi.toFixed(2)}%`}
            highlight={true}
            valueClassName={roi >= 0 ? "text-primary" : "text-error"}
          />
          <ToolResultItem 
            label={t('profit')}
            value={format(profit)}
            valueClassName={profit >= 0 ? "" : "text-error"}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
