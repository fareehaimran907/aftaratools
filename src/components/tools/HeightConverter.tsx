"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Ruler, ArrowRightLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export function HeightConverter() {
  const t = useTranslations("Tools.height-converter.ui");
  const [cm, setCm] = useState("170");
  const [ft, setFt] = useState("5");
  const [inc, setInc] = useState("7");
  
  const [lastEdited, setLastEdited] = useState<"metric"|"imperial">("metric");

  const updateMetric = (val: string) => {
    setCm(val);
    setLastEdited("metric");
    const v = parseFloat(val) || 0;
    const totalInches = v / 2.54;
    const f = Math.floor(totalInches / 12);
    const i = Math.round(totalInches % 12);
    setFt(f.toString());
    setInc(i.toString());
  };

  const updateImperial = (fStr: string, iStr: string) => {
    setFt(fStr);
    setInc(iStr);
    setLastEdited("imperial");
    const f = parseFloat(fStr) || 0;
    const i = parseFloat(iStr) || 0;
    const totalInches = (f * 12) + i;
    const totalCm = totalInches * 2.54;
    setCm(totalCm.toFixed(1));
  };

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Ruler className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('heightConverter')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-8 flex flex-col justify-center">
          <div className="space-y-4">
            <div className={`p-6 rounded-xl border-2 transition-colors ${lastEdited === 'metric' ? 'border-primary bg-primary/5' : 'border-border bg-background hover:border-primary/50'}`}>
              <h3 className="font-bold text-sm uppercase tracking-wider text-secondary-foreground mb-4">{t('metricCentimeters')}</h3>
              <div className="flex items-center shadow-sm rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-primary">
                <Input 
                  type="number" 
                  value={cm} 
                  onChange={e => updateMetric(e.target.value)} 
                  className="rounded-none rounded-l-md border-r-0 h-16 flex-1 focus-visible:ring-0 shadow-none text-3xl font-bold bg-transparent" 
                />
                <div className="h-16 flex items-center px-6 border border-l-0 border-input bg-secondary/50 text-secondary-foreground font-semibold">
                  {t('cm')}
                </div>
              </div>
            </div>

            <div className="flex justify-center -my-3 relative z-10">
              <div className="bg-background border-2 border-border rounded-full p-3 text-muted-foreground shadow-sm">
                <ArrowRightLeft className="w-5 h-5 rotate-90" />
              </div>
            </div>

            <div className={`p-6 rounded-xl border-2 transition-colors ${lastEdited === 'imperial' ? 'border-primary bg-primary/5' : 'border-border bg-background hover:border-primary/50'}`}>
              <h3 className="font-bold text-sm uppercase tracking-wider text-secondary-foreground mb-4">{t('imperialFeetInches')}</h3>
              <div className="flex gap-3">
                <div className="flex-1 flex items-center shadow-sm rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-primary bg-transparent">
                  <Input 
                    type="number" 
                    value={ft} 
                    onChange={e => updateImperial(e.target.value, inc)} 
                    className="rounded-none rounded-l-md border-r-0 h-16 flex-1 focus-visible:ring-0 shadow-none text-2xl font-bold bg-transparent" 
                  />
                  <div className="h-16 flex items-center px-4 border border-l-0 border-input bg-secondary/50 text-secondary-foreground font-semibold text-sm">
                    {t('ft')}
                  </div>
                </div>
                <div className="flex-1 flex items-center shadow-sm rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-primary bg-transparent">
                  <Input 
                    type="number" 
                    value={inc} 
                    onChange={e => updateImperial(ft, e.target.value)} 
                    className="rounded-none rounded-l-md border-r-0 h-16 flex-1 focus-visible:ring-0 shadow-none text-2xl font-bold bg-transparent" 
                  />
                  <div className="h-16 flex items-center px-4 border border-l-0 border-input bg-secondary/50 text-secondary-foreground font-semibold text-sm">
                    {t('in')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="relative z-10 w-full max-w-sm flex">
          <div className="w-8 border-r-2 border-primary/30 flex flex-col justify-between items-end pr-2 text-xs font-mono text-primary/50 h-[300px]">
            <span>200</span>
            <span>150</span>
            <span>100</span>
            <span>50</span>
            <span>0</span>
          </div>
          <div className="flex-1 pl-8 flex items-end h-[300px]">
            <div 
              className="w-16 bg-gradient-to-t from-primary/80 to-primary/40 rounded-t-lg transition-all duration-500 ease-in-out relative flex justify-center shadow-lg"
              style={{ height: `${Math.min(100, Math.max(10, (parseFloat(cm) || 0) / 2.5))}%` }}
            >
              <div className="absolute -top-12 bg-background border border-primary/30 rounded-lg px-3 py-1.5 shadow-md text-sm font-bold whitespace-nowrap text-foreground flex items-center gap-1.5">
                <Ruler className="w-3.5 h-3.5 text-primary" />
                {cm} {t('cm')}
              </div>
            </div>
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
