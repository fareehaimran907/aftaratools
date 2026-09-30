"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { HeartPulse, PersonStanding, Ruler, Weight } from "lucide-react";
import { useTranslations } from "next-intl";

export function BmrCalculator() {
  const t = useTranslations("Tools.bmr-calculator.ui");
  const [gender, setGender] = useState<"male"|"female">("male");
  const [age, setAge] = useState("30");
  const [cm, setCm] = useState("170");
  const [kg, setKg] = useState("70");
  
  // Mifflin-St Jeor Equation
  let bmr = 0;
  const w = parseFloat(kg) || 0;
  const h = parseFloat(cm) || 0;
  const a = parseFloat(age) || 0;
  
  if (w > 0 && h > 0 && a > 0) {
    if (gender === "male") {
      bmr = (10 * w) + (6.25 * h) - (5 * a) + 5;
    } else {
      bmr = (10 * w) + (6.25 * h) - (5 * a) - 161;
    }
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <HeartPulse className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('bmrCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="flex p-1 bg-secondary rounded-lg">
            <button 
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${gender === 'male' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => setGender('male')}
            >
              {t('male')}
            </button>
            <button 
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${gender === 'female' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => setGender('female')}
            >
              {t('female')}
            </button>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <PersonStanding className="w-4 h-4 text-muted-foreground" /> {t('ageYears')}
              </Label>
              <Input type="number" value={age} onChange={e => setAge(e.target.value)} className="h-12" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-muted-foreground" /> {t('heightCm')}
                </Label>
                <Input type="number" value={cm} onChange={e => setCm(e.target.value)} className="h-12" />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Weight className="w-4 h-4 text-muted-foreground" /> {t('weightKg')}
                </Label>
                <Input type="number" value={kg} onChange={e => setKg(e.target.value)} className="h-12" />
              </div>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {bmr > 0 ? (
          <div className="space-y-6 text-center">
            <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 shadow-sm relative overflow-hidden group hover:border-primary/40 transition-colors">
              <div className="absolute inset-0 bg-primary/5"></div>
              <div className="relative z-10">
                <span className="text-sm font-bold text-primary mb-2 uppercase tracking-wider block">{t('basalMetabolicRate')}</span>
                <div className="flex items-baseline justify-center gap-2 mt-4">
                  <span className="text-6xl font-bold text-foreground tracking-tight">{Math.round(bmr).toLocaleString()}</span>
                </div>
                <span className="text-sm font-bold text-secondary-foreground uppercase tracking-wider mt-2 block">{t('caloriesDay')}</span>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-sm text-primary/80 leading-relaxed font-medium">
                {t('thisIsTheAmountOfEnergyYourBodyBurnsAtRestJustToKeepYouAlive')}
              </p>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <HeartPulse className="w-12 h-12" />
            <p>{t("enterYourDetailsToCalculat")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
