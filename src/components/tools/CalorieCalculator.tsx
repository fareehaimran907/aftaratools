"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { ActivitySquare, PersonStanding, Ruler, Weight, Dumbbell } from "lucide-react";
import { useTranslations } from "next-intl";

export function CalorieCalculator() {
  const t = useTranslations("Tools.calorie-calculator.ui");
  const [gender, setGender] = useState<"male"|"female">("male");
  const [age, setAge] = useState("30");
  const [cm, setCm] = useState("170");
  const [kg, setKg] = useState("70");
  const [activity, setActivity] = useState("1.55");
  
  // Mifflin-St Jeor Equation for BMR
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

  const tdee = bmr * (parseFloat(activity) || 1.2);
  const lose = tdee - 500;
  const gain = tdee + 500;

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <ActivitySquare className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('dailyCalorieCalculator')}</h3>
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-xs">
                <PersonStanding className="w-3.5 h-3.5 text-muted-foreground" /> {t('age')}
              </Label>
              <Input type="number" value={age} onChange={e => setAge(e.target.value)} className="h-10" />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-xs">
                <Ruler className="w-3.5 h-3.5 text-muted-foreground" /> {t('heightCm')}
              </Label>
              <Input type="number" value={cm} onChange={e => setCm(e.target.value)} className="h-10" />
            </div>
            <div className="space-y-2">
              <Label className="flex items-center gap-2 text-xs">
                <Weight className="w-3.5 h-3.5 text-muted-foreground" /> {t('weightKg')}
              </Label>
              <Input type="number" value={kg} onChange={e => setKg(e.target.value)} className="h-10" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-muted-foreground" /> {t('activityLevel')}
            </Label>
            <select 
              value={activity} 
              onChange={e => setActivity(e.target.value)} 
              className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="1.2">{t('sedentaryLittleOrNoExercise')}</option>
              <option value="1.375">{t('lightlyActiveLightExercise13Daysweek')}</option>
              <option value="1.55">{t('moderatelyActiveModerateExercise35Daysweek')}</option>
              <option value="1.725">{t('veryActiveHardExercise67Daysweek')}</option>
              <option value="1.9">{t('extraActiveVeryHardExercisephysicalJob')}</option>
            </select>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {tdee > 0 ? (
          <div className="space-y-6">
            <div className="bg-background border-2 border-primary/20 rounded-xl p-6 text-center shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/5"></div>
              <div className="relative z-10">
                <span className="text-sm font-bold text-primary mb-2 uppercase tracking-wider block">{t('maintainWeight')}</span>
                <div className="flex items-baseline justify-center gap-2 mt-2">
                  <span className="text-5xl font-bold text-foreground tracking-tight">{Math.round(tdee).toLocaleString()}</span>
                  <span className="text-sm font-bold text-secondary-foreground uppercase tracking-wider">{t('kcal')}</span>
                </div>
              </div>
            </div>
            
            <div className="grid gap-3">
              <div className="bg-success/10 border border-success/30 rounded-lg p-4 flex justify-between items-center shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-success"></div>
                <div className="pl-2">
                  <span className="text-sm font-bold text-success block">{t('loseWeight05kgweek')}</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-bold text-success text-xl">{Math.round(lose).toLocaleString()}</span>
                  <span className="text-xs font-semibold text-success/70 uppercase">{t('kcal')}</span>
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-4 flex justify-between items-center shadow-sm relative overflow-hidden">
                <div className="pl-2">
                  <span className="text-sm font-medium text-secondary-foreground block">{t('gainWeight05kgweek')}</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-bold text-foreground text-xl">{Math.round(gain).toLocaleString()}</span>
                  <span className="text-xs font-semibold text-muted-foreground uppercase">{t('kcal')}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <ActivitySquare className="w-12 h-12" />
            <p>{t("enterYourDetailsToCalculat")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
