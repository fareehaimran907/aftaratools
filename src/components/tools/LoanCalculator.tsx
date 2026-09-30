"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { Banknote, Landmark } from "lucide-react";

export function LoanCalculator() {
  const t = useTranslations("Tools.loan-calculator.ui");
  const [amount, setAmount] = useState("10000");
  const [rate, setRate] = useState("5");
  const [years, setYears] = useState("5");

  const p = parseFloat(amount) || 0;
  const r = (parseFloat(rate) || 0) / 100 / 12; // monthly rate
  const n = (parseFloat(years) || 0) * 12; // total months
  
  let payment = 0;
  if (r === 0) {
    payment = n > 0 ? p / n : 0;
  } else if (n > 0) {
    payment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }

  const totalPaid = payment * n;
  const totalInterest = Math.max(0, totalPaid - p);

  const format = (num: number) => num.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Banknote className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("loanDetails")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="amount">{t('loanAmount')}</label>
              <Input id="amount" type="number" min="0" value={amount} onChange={e => setAmount(e.target.value)} className="h-12 text-lg" />
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
          {t("paymentBreakdown")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={t('monthlyPayment')}
            value={format(payment)}
            highlight={true}
          />
          <ToolResultItem 
            label={t('totalInterest')}
            value={format(totalInterest)}
            valueClassName="text-error"
          />
          <ToolResultItem 
            label={t('totalCostOfLoan')}
            value={format(totalPaid)}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
