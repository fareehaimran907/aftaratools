"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { TrendingUp, Layers } from "lucide-react";

export function CompoundInterestCalculator() {
  const t = useTranslations("Tools.compound-interest-calculator.ui");
  const [principal, setPrincipal] = useState("1000");
  const [rate, setRate] = useState("10");
  const [time, setTime] = useState("5");
  const [compounds, setCompounds] = useState("12"); // default monthly

  const p = parseFloat(principal) || 0;
  const r = parseFloat(rate) || 0;
  const tm = parseFloat(time) || 0;
  const n = parseFloat(compounds) || 1;
  
  // A = P(1 + r/n)^(nt)
  const ratePerPeriod = r / 100 / n;
  const periods = n * tm;
  const finalAmount = p * Math.pow(1 + ratePerPeriod, periods);
  const interest = finalAmount - p;

  const format = (num: number) => num.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Layers className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("interestDetails")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="principal">{t('principalAmount')}</label>
              <Input id="principal" type="number" min="0" value={principal} onChange={e => setPrincipal(e.target.value)} className="h-12 text-lg" />
            </div>
            
            <div className="flex gap-4">
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="rate">{t('annualRate')} (%)</label>
                <Input id="rate" type="number" min="0" step="0.1" value={rate} onChange={e => setRate(e.target.value)} className="h-12 text-lg" />
              </div>
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="time">{t('timeYears')}</label>
                <Input id="time" type="number" min="0" value={time} onChange={e => setTime(e.target.value)} className="h-12 text-lg" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="compounds">{t('compoundFrequency')}</label>
              <select id="compounds" value={compounds} onChange={e => setCompounds(e.target.value)} className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all">
                <option value="365">{t('daily')}</option>
                <option value="12">{t('monthly')}</option>
                <option value="4">{t('quarterly')}</option>
                <option value="2">{t('semiannually')}</option>
                <option value="1">{t('annually')}</option>
              </select>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-primary" />
          {t("growthBreakdown")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={t('finalBalance')}
            value={format(finalAmount)}
            highlight={true}
          />
          <ToolResultItem 
            label={t('interestEarned')}
            value={format(interest)}
            valueClassName="text-primary"
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
