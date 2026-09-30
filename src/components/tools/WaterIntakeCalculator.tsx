"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { Droplet, Weight, Dumbbell } from "lucide-react";
import { useTranslations } from "next-intl";

export function WaterIntakeCalculator() {
  const t = useTranslations("Tools.water-intake-calculator.ui");
  const [kg, setKg] = useState("70");
  const [activity, setActivity] = useState("30");

  const w = parseFloat(kg) || 0;
  const a = parseFloat(activity) || 0;

  // Base requirement: 35ml per kg of body weight
  // Activity requirement: 350ml per 30 mins of exercise
  
  let totalMl = 0;
  if (w > 0) {
    totalMl = (w * 35) + ((a / 30) * 350);
  }

  const liters = totalMl / 1000;
  const oz = totalMl * 0.033814;
  const cups = oz / 8;

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Droplet className="w-5 h-5 text-blue-500 fill-blue-500/20" />
          <h3 className="font-bold text-foreground">{t('dailyWaterIntakeCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Weight className="w-4 h-4 text-muted-foreground" /> {t('weightKg')}
              </Label>
              <Input type="number" value={kg} onChange={e => setKg(e.target.value)} className="h-12" />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-muted-foreground" /> {t('dailyExerciseMins')}
              </Label>
              <Input type="number" value={activity} onChange={e => setActivity(e.target.value)} className="h-12" />
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-blue-500/5 border-blue-500/20 flex flex-col justify-center">
        {liters > 0 ? (
          <div className="space-y-6">
            <div className="bg-background border-2 border-blue-500/30 rounded-2xl p-8 text-center shadow-md relative overflow-hidden group hover:border-blue-500/60 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
              <div className="relative z-10">
                <span className="text-sm font-bold text-blue-600 mb-2 uppercase tracking-wider block">{t('recommendedDailyIntake')}</span>
                <div className="flex items-baseline justify-center gap-2 mt-4">
                  <span className="text-7xl font-bold text-foreground tracking-tight">{liters.toFixed(1)}</span>
                  <span className="text-2xl font-bold text-blue-500 uppercase tracking-wider">{t('liters')}</span>
                </div>
              </div>
            </div>
            
            <div className="grid gap-3">
              <div className="bg-background border border-border rounded-lg p-4 flex justify-between items-center shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400"></div>
                <div className="pl-2">
                  <span className="text-sm font-medium text-secondary-foreground block">{t('approx')}</span>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-baseline gap-1">
                    <span className="font-bold text-foreground text-xl">{oz.toFixed(0)}</span>
                    <span className="text-xs font-semibold text-muted-foreground uppercase">{t('ozOr').replace(' or', '')}</span>
                  </div>
                  <span className="text-muted-foreground font-medium">{t("or")}</span>
                  <div className="flex items-baseline gap-1">
                    <span className="font-bold text-foreground text-xl">{cups.toFixed(0)}</span>
                    <span className="text-xs font-semibold text-muted-foreground uppercase">{t('cups')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <Droplet className="w-12 h-12" />
            <p>{t("enterYourDetailsToCalculat")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
