"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { Receipt, Users } from "lucide-react";

export function TipCalculator() {
  const t = useTranslations("Tools.tip-calculator.ui");
  const [bill, setBill] = useState("100");
  const [tipPercent, setTipPercent] = useState("20");
  const [people, setPeople] = useState("1");

  const b = parseFloat(bill) || 0;
  const tipRate = parseFloat(tipPercent) || 0;
  const p = Math.max(1, parseInt(people) || 1);
  
  const tipAmount = b * (tipRate / 100);
  const total = b + tipAmount;
  
  const tipPerPerson = tipAmount / p;
  const totalPerPerson = total / p;

  const format = (n: number) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Receipt className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("billDetails")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="bill">{t('billAmount')}</label>
              <Input id="bill" type="number" min="0" value={bill} onChange={e => setBill(e.target.value)} className="h-12 text-lg" />
            </div>
            
            <div className="flex gap-4">
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="tip">{t('tip')} (%)</label>
                <Input id="tip" type="number" min="0" value={tipPercent} onChange={e => setTipPercent(e.target.value)} className="h-12 text-lg" />
              </div>
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground flex items-center gap-2" htmlFor="people">
                  <Users className="w-4 h-4" /> {t('numberOfPeople')}
                </label>
                <Input id="people" type="number" min="1" value={people} onChange={e => setPeople(e.target.value)} className="h-12 text-lg" />
              </div>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
          <Receipt className="w-5 h-5 text-primary" />
          {t("totalBreakdown")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={<>{t('total')} <span className="text-sm font-normal text-secondary-foreground opacity-80">/ {t('person')}</span></>}
            value={format(totalPerPerson)}
            highlight={true}
          />
          <ToolResultItem 
            label={<>{t('tipAmount')} <span className="text-sm font-normal text-secondary-foreground opacity-80">/ {t('person')}</span></>}
            value={format(tipPerPerson)}
          />
          
          <div className="pt-4 mt-4 border-t border-border/50 grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-secondary-foreground">{t('totalTip')}</div>
              <div className="font-semibold text-foreground">{format(tipAmount)}</div>
            </div>
            <div>
              <div className="text-sm text-secondary-foreground">{t('totalBill')}</div>
              <div className="font-semibold text-foreground">{format(total)}</div>
            </div>
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
