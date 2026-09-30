"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { PieChart, Flame, Utensils } from "lucide-react";
import { useTranslations } from "next-intl";

export function MacroCalculator() {
  const t = useTranslations("Tools.macro-calculator.ui");
  const [calories, setCalories] = useState("2000");
  const [plan, setPlan] = useState("balanced");

  const c = parseFloat(calories) || 0;
  
  // Ratios (Protein, Fat, Carbs)
  const ratios: Record<string, [number, number, number]> = {
    balanced: [0.3, 0.3, 0.4],
    lowcarb: [0.4, 0.4, 0.2],
    highprotein: [0.4, 0.25, 0.35],
    keto: [0.2, 0.75, 0.05]
  };

  const [pRatio, fRatio, cRatio] = ratios[plan];

  const pCals = c * pRatio;
  const fCals = c * fRatio;
  const cCals = c * cRatio;

  // Grams
  const pGrams = pCals / 4;
  const fGrams = fCals / 9;
  const cGrams = cCals / 4;

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <PieChart className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('macroCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-warning" /> {t('dailyCalories')}
              </Label>
              <div className="relative">
                <Input 
                  type="number" 
                  value={calories} 
                  onChange={e => setCalories(e.target.value)} 
                  className="h-12 text-lg font-bold pr-12" 
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-muted-foreground text-sm font-medium uppercase">
                  {t("kcal")}</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-primary" /> {t('dietPlan')}
              </Label>
              <select 
                value={plan} 
                onChange={e => setPlan(e.target.value)} 
                className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="balanced">{t('balanced303040')}</option>
                <option value="lowcarb">{t('lowCarb404020')}</option>
                <option value="highprotein">{t('highProtein402535')}</option>
                <option value="keto">{t('keto20755')}</option>
              </select>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {c > 0 ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-background border-t-4 border-t-blue-500 rounded-xl p-6 text-center shadow-sm relative overflow-hidden hover:-translate-y-1 transition-transform">
                <div className="text-sm font-bold text-blue-500 mb-2 uppercase tracking-wider flex items-center justify-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  {t('protein')}
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{Math.round(pGrams)}</span>
                  <span className="text-sm font-medium text-muted-foreground">{t('g')}</span>
                </div>
                <div className="mt-3 inline-block px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 text-xs font-bold">
                  {Math.round(pRatio * 100)}%
                </div>
              </div>
              
              <div className="bg-background border-t-4 border-t-warning rounded-xl p-6 text-center shadow-sm relative overflow-hidden hover:-translate-y-1 transition-transform">
                <div className="text-sm font-bold text-warning mb-2 uppercase tracking-wider flex items-center justify-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-warning"></div>
                  {t('fats')}
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{Math.round(fGrams)}</span>
                  <span className="text-sm font-medium text-muted-foreground">{t('g')}</span>
                </div>
                <div className="mt-3 inline-block px-2.5 py-0.5 rounded-full bg-warning/10 text-warning-foreground text-xs font-bold">
                  {Math.round(fRatio * 100)}%
                </div>
              </div>
              
              <div className="bg-background border-t-4 border-t-success rounded-xl p-6 text-center shadow-sm relative overflow-hidden hover:-translate-y-1 transition-transform">
                <div className="text-sm font-bold text-success mb-2 uppercase tracking-wider flex items-center justify-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  {t('carbs')}
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{Math.round(cGrams)}</span>
                  <span className="text-sm font-medium text-muted-foreground">{t('g')}</span>
                </div>
                <div className="mt-3 inline-block px-2.5 py-0.5 rounded-full bg-success/10 text-success-foreground text-xs font-bold">
                  {Math.round(cRatio * 100)}%
                </div>
              </div>
            </div>
            
            <div className="h-4 flex rounded-full overflow-hidden shadow-inner">
              <div className="bg-blue-500 transition-all duration-500" style={{ width: `${pRatio * 100}%` }}></div>
              <div className="bg-warning transition-all duration-500" style={{ width: `${fRatio * 100}%` }}></div>
              <div className="bg-success transition-all duration-500" style={{ width: `${cRatio * 100}%` }}></div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <PieChart className="w-12 h-12" />
            <p>{t("enterCaloriesToCalculateMa")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
