"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Weight, ArrowRightLeft } from "lucide-react";
import { useTranslations } from "next-intl";

const UNITS: Record<string, number> = {
  "Kilograms": 1,
  "Grams": 0.001,
  "Milligrams": 0.000001,
  "Metric Tons": 1000,
  "Pounds (lbs)": 0.453592,
  "Ounces (oz)": 0.0283495,
  "Stones": 6.35029
};

export function WeightConverter() {
  const t = useTranslations("Tools.weight-converter.ui");
  const [val, setVal] = useState("1");
  const [fromUnit, setFromUnit] = useState("Kilograms");
  const [toUnit, setToUnit] = useState("Pounds (lbs)");

  const v = parseFloat(val) || 0;
  const baseValue = v * (UNITS[fromUnit] || 1);
  const result = baseValue / (UNITS[toUnit] || 1);

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Weight className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('weightConverter')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('from')}</Label>
              <div className="flex shadow-sm rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-ring">
                <Input 
                  type="number" 
                  value={val} 
                  onChange={e => setVal(e.target.value)} 
                  className="rounded-none rounded-l-md border-r-0 h-14 flex-1 focus-visible:ring-0 shadow-none text-xl font-medium" 
                />
                <select 
                  value={fromUnit} 
                  onChange={e => setFromUnit(e.target.value)} 
                  className="h-14 px-4 border border-input bg-secondary text-secondary-foreground text-sm font-semibold focus:outline-none"
                >
                  {Object.keys(UNITS).map(u => <option key={u} value={u}>{u}</option>)}
                </select>
              </div>
            </div>

            <div className="flex justify-center -my-2 relative z-10">
              <div className="bg-background border border-border rounded-full p-2 text-muted-foreground shadow-sm">
                <ArrowRightLeft className="w-4 h-4 rotate-90 sm:rotate-0" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('to')}</Label>
              <select 
                value={toUnit} 
                onChange={e => setToUnit(e.target.value)} 
                className="w-full h-14 px-4 rounded-md border border-input bg-background text-sm font-semibold shadow-sm focus-visible:ring-1 focus-visible:ring-ring"
              >
                {Object.keys(UNITS).map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <div className="space-y-6 text-center">
          <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 shadow-sm relative overflow-hidden group hover:border-primary/40 transition-colors">
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="relative z-10">
              <span className="text-sm font-bold text-primary mb-2 uppercase tracking-wider block">{toUnit}</span>
              <div className="mt-4">
                <span className="text-5xl sm:text-6xl font-bold text-foreground font-mono tracking-tight break-all">
                  {result.toLocaleString(undefined, { maximumFractionDigits: 6 })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
