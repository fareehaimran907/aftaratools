"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { TrendingUp, Rocket } from "lucide-react";

export function InvestmentCalculator() {
  const t = useTranslations("Tools.investment-calculator.ui");
  const [initial, setInitial] = useState("10000");
  const [contribution, setContribution] = useState("500");
  const [rate, setRate] = useState("7");
  const [years, setYears] = useState("10");

  const p = parseFloat(initial) || 0;
  const c = parseFloat(contribution) || 0;
  const r = (parseFloat(rate) || 0) / 100 / 12; // monthly rate
  const n = (parseFloat(years) || 0) * 12; // total months
  
  // Future Value of a Series formula
  // FV = P(1+r)^n + c[((1+r)^n - 1)/r]
  let futureValue = p;
  let totalContributed = p + (c * n);
  
  if (r === 0) {
    futureValue = p + (c * n);
  } else if (n > 0) {
    futureValue = p * Math.pow(1 + r, n) + c * ((Math.pow(1 + r, n) - 1) / r);
  }

  const interestEarned = Math.max(0, futureValue - totalContributed);

  const format = (num: number) => num.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("investmentPlan")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="initial">{t('initialInvestment')}</label>
                <Input id="initial" type="number" min="0" value={initial} onChange={e => setInitial(e.target.value)} className="h-12 text-lg" />
              </div>
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="contribution">{t('monthlyContribution')}</label>
                <Input id="contribution" type="number" min="0" value={contribution} onChange={e => setContribution(e.target.value)} className="h-12 text-lg" />
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="rate">{t('expectedReturn')} (%)</label>
                <Input id="rate" type="number" min="0" step="0.1" value={rate} onChange={e => setRate(e.target.value)} className="h-12 text-lg" />
              </div>
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="years">{t('yearsToGrow')}</label>
                <Input id="years" type="number" min="0" value={years} onChange={e => setYears(e.target.value)} className="h-12 text-lg" />
              </div>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
          <Rocket className="w-5 h-5 text-primary" />
          {t("growthProjection")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={t('futureValue')}
            value={format(futureValue)}
            highlight={true}
          />
          <ToolResultItem 
            label={t('interestEarned')}
            value={format(interestEarned)}
            valueClassName="text-primary"
          />
          <ToolResultItem 
            label={t('totalContributions')}
            value={format(totalContributed)}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
