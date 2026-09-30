"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { BookOpen, Target, AlertCircle } from "lucide-react";

export function FinalGradeCalculator() {
  const t = useTranslations("Tools.final-grade-calculator.ui");
  const [current, setCurrent] = useState("82");
  const [desired, setDesired] = useState("90");
  const [weight, setWeight] = useState("30");

  const c = parseFloat(current) || 0;
  const d = parseFloat(desired) || 0;
  const w = parseFloat(weight) || 0;
  
  let required = 0;
  
  if (w > 0 && w <= 100) {
    // Formula: Required = (Desired - Current * (100 - w) / 100) / (w / 100)
    const weightDec = w / 100;
    required = (d - c * (1 - weightDec)) / weightDec;
  }

  return (
    <ToolLayout.Stacked>
      <ToolPanel>
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('finalGradeCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground">{t('currentGrade')} (%)</label>
              <Input type="number" value={current} onChange={e => setCurrent(e.target.value)} className="h-12 text-lg" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground">{t('desiredClassGrade')} (%)</label>
              <Input type="number" value={desired} onChange={e => setDesired(e.target.value)} className="h-12 text-lg" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground">{t('finalExamWeight')} (%)</label>
              <Input type="number" value={weight} onChange={e => setWeight(e.target.value)} className="h-12 text-lg" />
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <div className="p-8 bg-primary/5 border border-primary/20 rounded-xl text-center shadow-sm">
              <div className="flex items-center justify-center gap-2 text-secondary-foreground font-medium mb-3 uppercase tracking-wider text-sm">
                <Target className="w-4 h-4 text-primary" />
                {t('youNeedToScore')}
              </div>
              <div className="text-6xl font-bold text-primary tracking-tight py-2">{required.toFixed(2)}%</div>
              <div className="text-secondary-foreground font-medium mt-3">{t('onTheFinalExam')}</div>
            </div>
            
            {required > 100 && (
              <div className="mt-4 p-4 bg-error/10 border border-error/20 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />
                <p className="text-sm text-error font-medium">
                  {t('itLooksLikeScoringThisGradeIsMathematicallyImpossibleUnlessThereIsExtraCreditAvailable')}
                </p>
              </div>
            )}
          </div>
        </ToolPanelContent>
      </ToolPanel>
    </ToolLayout.Stacked>
  );
}
