"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, PenTool } from "lucide-react";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";

type Assignment = { id: string; name: string; weight: string; grade: string };

export function GradeCalculator() {
  const t = useTranslations("Tools.grade-calculator.ui");
  const [assignments, setAssignments] = useState<Assignment[]>([
    { id: "1", name: "Homework", weight: "20", grade: "95" },
    { id: "2", name: "Quizzes", weight: "20", grade: "85" },
    { id: "3", name: "Midterm", weight: "30", grade: "88" },
    { id: "4", name: "Final", weight: "30", grade: "" },
  ]);

  const addRow = () => {
    setAssignments([...assignments, { id: Math.random().toString(), name: "", weight: "", grade: "" }]);
  };

  const removeRow = (id: string) => {
    setAssignments(assignments.filter(a => a.id !== id));
  };

  const updateRow = (id: string, field: keyof Assignment, value: string) => {
    setAssignments(assignments.map(a => a.id === id ? { ...a, [field]: value } : a));
  };

  let totalWeight = 0;
  let earnedScore = 0;

  assignments.forEach(a => {
    const weight = parseFloat(a.weight) || 0;
    const grade = parseFloat(a.grade);
    
    if (weight > 0 && !isNaN(grade)) {
      totalWeight += weight;
      earnedScore += (grade * (weight / 100));
    }
  });

  const currentGrade = totalWeight > 0 ? (earnedScore / (totalWeight / 100)) : 0;

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <PenTool className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-foreground">{t("assignments")}</h3>
          </div>
          <Button variant="outline" size="sm" onClick={addRow} className="gap-2">
            <Plus className="w-4 h-4" /> {t('addCategory')}
          </Button>
        </div>
        
        <ToolPanelContent className="flex-1">
          <div className="space-y-3">
            <div className="grid grid-cols-[2fr_1fr_1fr_auto] gap-2 sm:gap-4 text-xs font-semibold text-secondary-foreground uppercase tracking-wider px-1 pb-2 border-b border-border">
              <div>{t('assignmentCategory')}</div>
              <div>{t('grade')} (%)</div>
              <div>{t('weight')} (%)</div>
              <div className="w-8"></div>
            </div>
            
            <div className="space-y-3 pt-2">
              {assignments.map(a => (
                <div key={a.id} className="grid grid-cols-[2fr_1fr_1fr_auto] gap-2 sm:gap-4 items-center bg-secondary/30 p-2 rounded-lg border border-border/50">
                  <div>
                    <Input value={a.name} onChange={e => updateRow(a.id, 'name', e.target.value)} placeholder={t("eGMidterm")} className="bg-background" />
                  </div>
                  <div>
                    <Input type="number" min="0" max="100" value={a.grade} onChange={e => updateRow(a.id, 'grade', e.target.value)} placeholder="0-100" className="bg-background" />
                  </div>
                  <div>
                    <Input type="number" min="0" max="100" value={a.weight} onChange={e => updateRow(a.id, 'weight', e.target.value)} placeholder="0-100" className="bg-background" />
                  </div>
                  <div className="w-8 flex justify-center">
                    <Button variant="ghost" size="icon" onClick={() => removeRow(a.id)} className="hover:bg-error/10 hover:text-error h-8 w-8 text-muted-foreground flex-shrink-0">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
          <PenTool className="w-5 h-5 text-primary" />
          {t("result")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={t('currentGrade')}
            value={`${currentGrade.toFixed(2)}%`}
            highlight={true}
          />
          <ToolResultItem 
            label={t('totalWeightEntered')}
            value={`${totalWeight}%`}
            valueClassName={totalWeight > 100 ? 'text-error' : ''}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
