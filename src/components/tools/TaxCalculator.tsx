"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { Calculator, Percent } from "lucide-react";

export function TaxCalculator() {
  const t = useTranslations("Tools.tax-calculator.ui");
  const [price, setPrice] = useState("100");
  const [taxRate, setTaxRate] = useState("8.5");
  const [isTaxIncluded, setIsTaxIncluded] = useState(false);

  const p = parseFloat(price) || 0;
  const r = parseFloat(taxRate) || 0;
  
  let netPrice = 0;
  let taxAmount = 0;
  let grossPrice = 0;

  if (isTaxIncluded) {
    // Price includes tax, so p = net * (1 + r/100) -> net = p / (1 + r/100)
    netPrice = p / (1 + (r / 100));
    taxAmount = p - netPrice;
    grossPrice = p;
  } else {
    // Price is before tax
    netPrice = p;
    taxAmount = p * (r / 100);
    grossPrice = p + taxAmount;
  }

  const format = (n: number) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("taxDetails")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="price">{t('price')}</label>
                <Input id="price" type="number" min="0" value={price} onChange={e => setPrice(e.target.value)} className="h-12 text-lg" />
              </div>
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="tax">{t('taxRate')} (%)</label>
                <Input id="tax" type="number" min="0" step="0.1" value={taxRate} onChange={e => setTaxRate(e.target.value)} className="h-12 text-lg" />
              </div>
            </div>

            <label className="flex items-center gap-3 text-sm font-medium text-foreground cursor-pointer p-3 hover:bg-secondary/50 rounded-lg transition-colors border border-transparent hover:border-border">
              <input 
                type="checkbox" 
                checked={isTaxIncluded} 
                onChange={(e) => setIsTaxIncluded(e.target.checked)} 
                className="w-5 h-5 rounded border-border text-primary accent-primary focus:ring-primary" 
              />
              {t('priceAlreadyIncludesTax')}
            </label>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
          <Percent className="w-5 h-5 text-primary" />
          {t("priceBreakdown")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={t('totalFinalPrice')}
            value={format(grossPrice)}
            highlight={true}
          />
          <ToolResultItem 
            label={t('priceBeforeTax')}
            value={format(netPrice)}
          />
          <ToolResultItem 
            label={t('taxAmount')}
            value={format(taxAmount)}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
