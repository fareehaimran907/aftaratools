"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";

type Course = { id: string; name: string; credits: string; grade: string };

const GRADE_POINTS: Record<string, number> = {
  "A+": 4.0, "A": 4.0, "A-": 3.7,
  "B+": 3.3, "B": 3.0, "B-": 2.7,
  "C+": 2.3, "C": 2.0, "C-": 1.7,
  "D+": 1.3, "D": 1.0, "F": 0.0
};

export function GpaCalculator() {
  const t = useTranslations("Tools.gpa-calculator.ui");
  const [courses, setCourses] = useState<Course[]>([
    { id: "1", name: "Math", credits: "3", grade: "A" },
    { id: "2", name: "Science", credits: "4", grade: "B+" },
    { id: "3", name: "History", credits: "3", grade: "A-" },
  ]);

  const addCourse = () => {
    setCourses([...courses, { id: Math.random().toString(), name: "", credits: "3", grade: "A" }]);
  };

  const removeCourse = (id: string) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  const updateCourse = (id: string, field: keyof Course, value: string) => {
    setCourses(courses.map(c => c.id === id ? { ...c, [field]: value } : c));
  };

  let totalPoints = 0;
  let totalCredits = 0;

  courses.forEach(c => {
    const credits = parseFloat(c.credits) || 0;
    const points = GRADE_POINTS[c.grade] || 0;
    if (credits > 0) {
      totalCredits += credits;
      totalPoints += (credits * points);
    }
  });

  const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-foreground">{t("courseList")}</h3>
          </div>
          <Button variant="outline" size="sm" onClick={addCourse} className="gap-2">
            <Plus className="w-4 h-4" /> {t('addCourse')}
          </Button>
        </div>
        
        <ToolPanelContent className="flex-1">
          <div className="space-y-3">
            <div className="grid grid-cols-[2fr_1fr_1fr_auto] gap-2 sm:gap-4 text-xs font-semibold text-secondary-foreground uppercase tracking-wider px-1 pb-2 border-b border-border">
              <div>{t('courseName')}</div>
              <div>{t('credits')}</div>
              <div>{t('grade')}</div>
              <div className="w-8"></div>
            </div>
            
            <div className="space-y-3 pt-2">
              {courses.map(course => (
                <div key={course.id} className="grid grid-cols-[2fr_1fr_1fr_auto] gap-2 sm:gap-4 items-center bg-secondary/30 p-2 rounded-lg border border-border/50">
                  <div>
                    <Input value={course.name} onChange={e => updateCourse(course.id, 'name', e.target.value)} placeholder={t("course")} className="bg-background" />
                  </div>
                  <div>
                    <Input type="number" min="0" value={course.credits} onChange={e => updateCourse(course.id, 'credits', e.target.value)} className="bg-background" />
                  </div>
                  <div>
                    <select value={course.grade} onChange={e => updateCourse(course.id, 'grade', e.target.value)} className="w-full h-10 px-1 sm:px-3 rounded-md border border-input bg-background text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all">
                      {Object.keys(GRADE_POINTS).map(g => <option key={g} value={g}>{g}</option>)}
                    </select>
                  </div>
                  <div className="w-8 flex justify-center">
                    <Button variant="ghost" size="icon" onClick={() => removeCourse(course.id)} className="hover:bg-error/10 hover:text-error h-8 w-8 text-muted-foreground flex-shrink-0">
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
          <GraduationCap className="w-5 h-5 text-primary" />
          {t("result")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={t('cumulativeGpa')}
            value={gpa.toFixed(2)}
            highlight={true}
          />
          <ToolResultItem 
            label={t('totalCredits')}
            value={totalCredits.toString()}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
