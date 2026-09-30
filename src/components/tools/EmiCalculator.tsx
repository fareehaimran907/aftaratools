"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { Banknote, CreditCard } from "lucide-react";

export function EmiCalculator() {
  const t = useTranslations("Tools.emi-calculator.ui");
  const [amount, setAmount] = useState("500000");
  const [rate, setRate] = useState("8");
  const [months, setMonths] = useState("60");

  const p = parseFloat(amount) || 0;
  const r = (parseFloat(rate) || 0) / 100 / 12; // monthly interest
  const n = parseFloat(months) || 0;
  
  let emi = 0;
  if (r === 0) {
    emi = n > 0 ? p / n : 0;
  } else if (n > 0) {
    emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }

  const totalAmount = emi * n;
  const totalInterest = Math.max(0, totalAmount - p);

  const format = (num: number) => num.toLocaleString();

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Banknote className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("eMIDetails")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="amount">{t('loanAmountPrincipal')}</label>
              <Input id="amount" type="number" min="0" value={amount} onChange={e => setAmount(e.target.value)} className="h-12 text-lg" />
            </div>
            
            <div className="flex gap-4">
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="rate">{t('annualRate')} (%)</label>
                <Input id="rate" type="number" min="0" step="0.1" value={rate} onChange={e => setRate(e.target.value)} className="h-12 text-lg" />
              </div>
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="months">{t('tenureMonths')}</label>
                <Input id="months" type="number" min="0" value={months} onChange={e => setMonths(e.target.value)} className="h-12 text-lg" />
              </div>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
          <CreditCard className="w-5 h-5 text-primary" />
          {t("paymentSummary")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={t('monthlyEmi')}
            value={format(emi)}
            highlight={true}
          />
          <ToolResultItem 
            label={t('totalInterestPayable')}
            value={format(totalInterest)}
            valueClassName="text-error"
          />
          <ToolResultItem 
            label={t('totalPaymentPrincipalInterest')}
            value={format(totalAmount)}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
