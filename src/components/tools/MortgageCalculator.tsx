"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { Home, Landmark } from "lucide-react";

export function MortgageCalculator() {
  const t = useTranslations("Tools.mortgage-calculator.ui");
  const [price, setPrice] = useState("300000");
  const [down, setDown] = useState("60000"); // 20%
  const [rate, setRate] = useState("6.5");
  const [years, setYears] = useState("30");

  const homePrice = parseFloat(price) || 0;
  const downPayment = parseFloat(down) || 0;
  
  const p = Math.max(0, homePrice - downPayment);
  const r = (parseFloat(rate) || 0) / 100 / 12; // monthly rate
  const n = (parseFloat(years) || 0) * 12; // total months
  
  let payment = 0;
  if (r === 0) {
    payment = n > 0 ? p / n : 0;
  } else if (n > 0) {
    payment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }

  const format = (num: number) => num.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Home className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("propertyDetails")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="price">{t('homePrice')}</label>
                <Input id="price" type="number" min="0" value={price} onChange={e => setPrice(e.target.value)} className="h-12 text-lg" />
              </div>
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="down">{t('downPayment')}</label>
                <Input id="down" type="number" min="0" value={down} onChange={e => setDown(e.target.value)} className="h-12 text-lg" />
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="rate">{t('interestRate')} (%)</label>
                <Input id="rate" type="number" min="0" step="0.1" value={rate} onChange={e => setRate(e.target.value)} className="h-12 text-lg" />
              </div>
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="years">{t('loanTermYears')}</label>
                <Input id="years" type="number" min="0" value={years} onChange={e => setYears(e.target.value)} className="h-12 text-lg" />
              </div>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
          <Landmark className="w-5 h-5 text-primary" />
          {t("mortgageSummary")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={t('monthlyPayment')}
            value={format(payment)}
            highlight={true}
          />
          <ToolResultItem 
            label={t('principalLoanAmount')}
            value={format(p)}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
