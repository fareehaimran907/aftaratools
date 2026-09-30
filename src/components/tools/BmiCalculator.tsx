"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { Activity, Ruler, Weight } from "lucide-react";
import { useTranslations } from "next-intl";

export function BmiCalculator() {
  const t = useTranslations("Tools.bmi-calculator.ui");
  const [system, setSystem] = useState<"metric"|"imperial">("metric");
  
  // Metric
  const [cm, setCm] = useState("170");
  const [kg, setKg] = useState("70");
  
  // Imperial
  const [ft, setFt] = useState("5");
  const [inc, setInc] = useState("7");
  const [lbs, setLbs] = useState("154");

  let bmi = 0;
  
  if (system === "metric") {
    const heightM = (parseFloat(cm) || 0) / 100;
    const weightKg = parseFloat(kg) || 0;
    if (heightM > 0) bmi = weightKg / (heightM * heightM);
  } else {
    const heightIn = (parseFloat(ft) || 0) * 12 + (parseFloat(inc) || 0);
    const weightLbs = parseFloat(lbs) || 0;
    if (heightIn > 0) bmi = (weightLbs / (heightIn * heightIn)) * 703;
  }

  let status = "";
  let colorClass = "text-foreground";
  let bgClass = "bg-primary/5";
  
  if (bmi > 0) {
    if (bmi < 18.5) { 
      status = "Underweight"; 
      colorClass = "text-blue-500"; 
      bgClass = "bg-blue-500/10";
    }
    else if (bmi < 25) { 
      status = "Normal weight"; 
      colorClass = "text-success"; 
      bgClass = "bg-success/10";
    }
    else if (bmi < 30) { 
      status = "Overweight"; 
      colorClass = "text-warning"; 
      bgClass = "bg-warning/10";
    }
    else { 
      status = "Obese"; 
      colorClass = "text-error"; 
      bgClass = "bg-error/10";
    }
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Activity className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('bmiCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="flex p-1 bg-secondary rounded-lg">
            <button 
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${system === 'metric' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => setSystem('metric')}
            >
              {t('metric')}
            </button>
            <button 
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${system === 'imperial' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => setSystem('imperial')}
            >
              {t('imperial')}
            </button>
          </div>

          {system === "metric" ? (
            <div className="space-y-6">
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
          ) : (
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="space-y-2 flex-1">
                  <Label className="flex items-center gap-2">
                    <Ruler className="w-4 h-4 text-muted-foreground" /> {t('heightFt')}
                  </Label>
                  <Input type="number" value={ft} onChange={e => setFt(e.target.value)} className="h-12" />
                </div>
                <div className="space-y-2 flex-1">
                  <Label>{t('heightIn')}</Label>
                  <Input type="number" value={inc} onChange={e => setInc(e.target.value)} className="h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Weight className="w-4 h-4 text-muted-foreground" /> {t('weightLbs')}
                </Label>
                <Input type="number" value={lbs} onChange={e => setLbs(e.target.value)} className="h-12" />
              </div>
            </div>
          )}
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {bmi > 0 ? (
          <div className="space-y-8">
            <div className={`border-2 rounded-2xl p-8 text-center shadow-sm relative overflow-hidden transition-colors ${bgClass} border-transparent`}>
              <div className="relative z-10">
                <span className="text-sm font-bold text-secondary-foreground mb-2 uppercase tracking-wider block">{t('yourBmi')}</span>
                <span className={`text-6xl font-bold tracking-tight block ${colorClass}`}>{bmi.toFixed(1)}</span>
                <div className={`mt-4 inline-flex px-4 py-1.5 rounded-full text-sm font-bold bg-background/50 border border-current ${colorClass}`}>
                  {status}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-4 gap-1 h-2 rounded-full overflow-hidden opacity-80">
                <div className="bg-blue-500"></div>
                <div className="bg-success"></div>
                <div className="bg-warning"></div>
                <div className="bg-error"></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground font-medium px-1">
                <span>{t("Lt185")}</span>
                <span>18.5 - 24.9</span>
                <span>25 - 29.9</span>
                <span>30+</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <Activity className="w-12 h-12" />
            <p>{t("enterYourHeightAndWeight")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
