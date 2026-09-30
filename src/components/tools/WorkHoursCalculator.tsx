"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { Briefcase, CalendarDays, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export function WorkHoursCalculator() {
  const t = useTranslations("Tools.work-hours-calculator.ui");
  const [start, setStart] = useState("09:00");
  const [end, setEnd] = useState("17:30");
  const [breakMins, setBreakMins] = useState("30");
  const [days, setDays] = useState("5");
  
  const [result, setResult] = useState<{daily: number, weekly: number} | null>(null);

  const calculate = () => {
    if (!start || !end) return;
    
    const [h1, m1] = start.split(":").map(Number);
    const [h2, m2] = end.split(":").map(Number);
    
    let t1 = h1 * 60 + m1;
    let t2 = h2 * 60 + m2;
    if (t2 < t1) t2 += 24 * 60; // Crosses midnight
    
    const b = parseInt(breakMins) || 0;
    const d = parseFloat(days) || 0;
    
    let dailyMins = Math.max(0, (t2 - t1) - b);
    let dailyHours = dailyMins / 60;
    
    setResult({
      daily: dailyHours,
      weekly: dailyHours * d
    });
  };

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('workHoursCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-foreground flex items-center gap-2" htmlFor="start">
                  <Clock className="w-4 h-4" /> {t('clockIn')}
                </label>
                <Input 
                  id="start" 
                  type="time" 
                  value={start} 
                  onChange={e => setStart(e.target.value)} 
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-foreground flex items-center gap-2" htmlFor="end">
                  <Clock className="w-4 h-4" /> {t('clockOut')}
                </label>
                <Input 
                  id="end" 
                  type="time" 
                  value={end} 
                  onChange={e => setEnd(e.target.value)} 
                  className="h-12"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="break">{t('breakMinutes')}</label>
                <Input 
                  id="break" 
                  type="number" 
                  min="0" 
                  value={breakMins} 
                  onChange={e => setBreakMins(e.target.value)} 
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-foreground flex items-center gap-2" htmlFor="days">
                  <CalendarDays className="w-4 h-4" /> {t('daysPerWeek')}
                </label>
                <Input 
                  id="days" 
                  type="number" 
                  min="0" 
                  max="7" 
                  value={days} 
                  onChange={e => setDays(e.target.value)} 
                  className="h-12"
                />
              </div>
            </div>
          </div>
        </ToolPanelContent>

        <Button onClick={calculate} size="lg" className="w-full h-12 mt-6 shadow-sm gap-2">
          {t('calculateHours')}
        </Button>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {result ? (
          <>
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">{t("hoursLog")}</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-background border-2 border-primary/20 rounded-xl p-8 text-center shadow-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                <div className="relative z-10">
                  <span className="text-sm font-bold text-primary mb-2 uppercase tracking-wider block">{t('weeklyTotal')}</span>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-6xl font-bold text-primary tracking-tight">{result.weekly.toFixed(2)}</span>
                    <span className="text-sm font-bold text-secondary-foreground uppercase tracking-wider">{t('hrs')}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid gap-3">
                <ToolResultItem 
                  label={t('dailyWorkHours')}
                  value={`${result.daily.toFixed(2)} ${t('hrs')}`}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <Briefcase className="w-12 h-12" />
            <p>{t("enterScheduleToCalculateHo")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
