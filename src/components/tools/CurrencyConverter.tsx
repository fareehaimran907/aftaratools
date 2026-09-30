"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Globe, ArrowRightLeft } from "lucide-react";

export function CurrencyConverter() {
  const t = useTranslations("Tools.currency-converter.ui");
  const [amount, setAmount] = useState("100");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");

  // Static mock rates for demonstration since actual live API is not guaranteed
  const exchangeRates: Record<string, number> = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 150.1,
    AUD: 1.53,
    CAD: 1.35,
    CHF: 0.88,
    CNY: 7.19,
    INR: 82.9
  };

  const a = parseFloat(amount) || 0;
  
  const rateFrom = exchangeRates[from] || 1;
  const rateTo = exchangeRates[to] || 1;
  
  // Convert to USD first (base), then to target
  const converted = (a / rateFrom) * rateTo;

  const format = (n: number, currency: string) => n.toLocaleString(undefined, { style: 'currency', currency });

  return (
    <ToolLayout.Stacked>
      <ToolPanel>
        <div className="flex items-center gap-2 mb-6">
          <Globe className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('currencyConverterEstimated')}</h3>
        </div>
        
        <ToolPanelContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="amount">{t('amount')}</label>
              <Input id="amount" type="number" min="0" value={amount} onChange={e => setAmount(e.target.value)} className="h-12 text-lg" />
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="from">{t('from')}</label>
                <select id="from" value={from} onChange={e => setFrom(e.target.value)} className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all">
                  {Object.keys(exchangeRates).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              
              <div className="pt-6">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <ArrowRightLeft className="w-4 h-4 text-secondary-foreground" />
                </div>
              </div>
              
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="to">{t('to')}</label>
                <select id="to" value={to} onChange={e => setTo(e.target.value)} className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all">
                  {Object.keys(exchangeRates).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-border">
            <div className="p-8 bg-primary/5 border border-primary/20 rounded-xl text-center shadow-sm">
              <div className="text-secondary-foreground text-sm font-medium mb-3">{format(a, from)} =</div>
              <div className="text-5xl font-bold text-primary tracking-tight">{format(converted, to)}</div>
            </div>
            <p className="text-xs text-center text-muted-foreground mt-4 flex items-center justify-center gap-1">
              <span className="w-2 h-2 rounded-full bg-warning/50 inline-block"></span>
              {t('noteTheseRatesAreStaticEstimatesForDemonstrationPurposesOnly')}
            </p>
          </div>
        </ToolPanelContent>
      </ToolPanel>
    </ToolLayout.Stacked>
  );
}
