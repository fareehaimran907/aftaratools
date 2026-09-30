"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Activity, Ruler, PersonStanding } from "lucide-react";
import { useTranslations } from "next-intl";

export function BodyFatCalculator() {
  const t = useTranslations("Tools.body-fat-calculator.ui");
  const [gender, setGender] = useState<"male"|"female">("male");
  const [waist, setWaist] = useState("85");
  const [neck, setNeck] = useState("38");
  const [height, setHeight] = useState("175");
  const [hip, setHip] = useState("100"); // for women
  
  // US Navy Method (Metric)
  let bf = 0;
  const w = parseFloat(waist) || 0;
  const n = parseFloat(neck) || 0;
  const h = parseFloat(height) || 0;
  const hipVal = parseFloat(hip) || 0;
  
  if (w > 0 && n > 0 && h > 0) {
    if (gender === "male") {
      // 495 / (1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(height)) - 450
      if (w - n > 0) {
        bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
      }
    } else {
      if (w + hipVal - n > 0) {
        bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hipVal - n) + 0.22100 * Math.log10(h)) - 450;
      }
    }
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Activity className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('bodyFatCalculatorNavyMethod')}</h3>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-muted-foreground" /> {t('heightCm')}
                </Label>
                <Input type="number" value={height} onChange={e => setHeight(e.target.value)} className="h-12" />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <PersonStanding className="w-4 h-4 text-muted-foreground" /> {t('neckCm')}
                </Label>
                <Input type="number" value={neck} onChange={e => setNeck(e.target.value)} className="h-12" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <PersonStanding className="w-4 h-4 text-muted-foreground" /> {t('waistCmAtNavel')}
                </Label>
                <Input type="number" value={waist} onChange={e => setWaist(e.target.value)} className="h-12" />
              </div>
              {gender === "female" && (
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <PersonStanding className="w-4 h-4 text-muted-foreground" /> {t('hipsCm')}
                  </Label>
                  <Input type="number" value={hip} onChange={e => setHip(e.target.value)} className="h-12" />
                </div>
              )}
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {bf > 0 && bf < 100 ? (
          <div className="space-y-6 text-center">
            <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 shadow-sm relative overflow-hidden group hover:border-primary/40 transition-colors">
              <div className="absolute inset-0 bg-primary/5"></div>
              <div className="relative z-10">
                <span className="text-sm font-bold text-primary mb-2 uppercase tracking-wider block">{t('estimatedBodyFat')}</span>
                <div className="flex items-baseline justify-center gap-2 mt-4">
                  <span className="text-7xl font-bold text-foreground tracking-tight">{bf.toFixed(1)}</span>
                  <span className="text-3xl font-bold text-primary">%</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <Activity className="w-12 h-12" />
            <p>{t("enterYourMeasurementsToCal")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
