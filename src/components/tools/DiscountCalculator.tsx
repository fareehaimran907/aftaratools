"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResult, ToolResultItem } from "@/components/tools/ui";
import { Percent, Tag } from "lucide-react";

export function DiscountCalculator() {
  const t = useTranslations("Tools.discount-calculator.ui");
  const [price, setPrice] = useState("100");
  const [discount, setDiscount] = useState("20");
  const [discountType, setDiscountType] = useState("percent"); // percent or fixed

  const p = parseFloat(price) || 0;
  const d = parseFloat(discount) || 0;
  
  let savings = 0;
  if (discountType === "percent") {
    savings = p * (d / 100);
  } else {
    savings = d;
  }
  
  // ensure we don't save more than the price
  savings = Math.min(savings, p);
  const finalPrice = Math.max(0, p - savings);

  const format = (n: number) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Tag className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("discountDetails")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="price">{t('originalPrice')}</label>
              <Input id="price" type="number" min="0" value={price} onChange={e => setPrice(e.target.value)} className="h-12 text-lg" />
            </div>
            
            <div className="flex gap-4">
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="discount">{t('discount')}</label>
                <Input id="discount" type="number" min="0" value={discount} onChange={e => setDiscount(e.target.value)} className="h-12 text-lg" />
              </div>
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="type">{t('type')}</label>
                <select id="type" value={discountType} onChange={e => setDiscountType(e.target.value)} className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all">
                  <option value="percent">{t('off')}</option>
                  <option value="fixed">{t('fixedAmountOff')}</option>
                </select>
              </div>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
          <Percent className="w-5 h-5 text-primary" />
          {t("priceBreakdown")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={t('finalPrice')}
            value={format(finalPrice)}
            highlight={true}
          />
          <ToolResultItem 
            label={t('youSave')}
            value={format(savings)}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
