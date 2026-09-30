"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { Calculator, Percent } from "lucide-react";

export function SimpleInterestCalculator() {
  const t = useTranslations("Tools.simple-interest-calculator.ui");
  const [principal, setPrincipal] = useState("1000");
  const [rate, setRate] = useState("10");
  const [time, setTime] = useState("2");
  const [timeUnit, setTimeUnit] = useState("years");

  const p = parseFloat(principal) || 0;
  const r = parseFloat(rate) || 0;
  const tm = parseFloat(time) || 0;
  
  let timeInYears = tm;
  if (timeUnit === "months") {
    timeInYears = tm / 12;
  } else if (timeUnit === "days") {
    timeInYears = tm / 365;
  }
  
  const interest = p * (r / 100) * timeInYears;
  const finalAmount = p + interest;

  const format = (n: number) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-5 h-5 text-primary" />
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
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="time">{t('time')}</label>
                <div className="flex gap-2">
                  <Input id="time" type="number" min="0" value={time} onChange={e => setTime(e.target.value)} className="h-12 text-lg" />
                  <select value={timeUnit} onChange={e => setTimeUnit(e.target.value)} className="w-24 h-12 px-2 rounded-md border border-input bg-background text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all">
                    <option value="years">{t('years')}</option>
                    <option value="months">{t('months')}</option>
                    <option value="days">{t('days')}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
          <Percent className="w-5 h-5 text-primary" />
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
