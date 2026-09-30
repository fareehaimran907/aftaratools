"use client";

import { useState } from "react";
import { Copy, RefreshCw, CalendarDays, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { useTranslations } from "next-intl";

export function WeeksBetweenDates() {
  const t = useTranslations("Tools.weeks-between-dates.ui");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  const [result, setResult] = useState<{
    weeks: number;
    remainingDays: number;
    totalDays: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    if (!startDate || !endDate) {
      setError("Please select both dates.");
      return;
    }
    
    try {
      setError(null);
      const start = new Date(startDate);
      const end = new Date(endDate);
      
      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        throw new Error("Invalid dates provided");
      }
      
      let d1 = start;
      let d2 = end;
      if (d2.getTime() < d1.getTime()) {
        d1 = end;
        d2 = start;
      }
      
      const totalDays = Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
      
      setResult({
        totalDays,
        weeks: Math.floor(totalDays / 7),
        remainingDays: totalDays % 7
      });
    } catch (err: any) {
      setError(err.message);
      setResult(null);
    }
  };

  const reset = () => {
    setStartDate("");
    setEndDate("");
    setResult(null);
    setError(null);
  };

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <CalendarDays className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('weeksBetweenDates')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="start-date">{t('startDate')}</label>
              <Input 
                id="start-date"
                type="date" 
                value={startDate} 
                onChange={(e) => setStartDate(e.target.value)} 
                className="h-12 text-lg"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="end-date">{t('endDate')}</label>
              <Input 
                id="end-date"
                type="date" 
                value={endDate} 
                onChange={(e) => setEndDate(e.target.value)} 
                className="h-12 text-lg"
              />
            </div>
          </div>
        </ToolPanelContent>

        <Button onClick={calculate} size="lg" className="w-full h-12 mt-6 shadow-sm gap-2">
          {t('calculateWeeks')}
        </Button>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {error ? (
          <div className="h-full flex flex-col items-center justify-center text-error gap-4 p-8 text-center bg-error/5 rounded-xl border border-error/20">
            <p className="font-medium">{error}</p>
          </div>
        ) : result ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-primary" />
                {t("result")}</h3>
              <div className="flex gap-2">
                <Button onClick={() => navigator.clipboard.writeText(`${result.weeks} weeks and ${result.remainingDays} days`)} variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10">
                  <Copy className="w-4 h-4 text-primary" />
                </Button>
                <Button onClick={reset} variant="ghost" size="icon" className="h-8 w-8 hover:bg-error/10">
                  <RefreshCw className="w-4 h-4 text-error" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-1 bg-background border border-border rounded-xl p-4 text-center shadow-sm">
                  <span className="block text-5xl font-bold text-primary tracking-tight mb-1">{result.weeks.toLocaleString()}</span>
                  <span className="text-xs font-semibold text-secondary-foreground uppercase tracking-wider">{t('weeks')}</span>
                </div>
                <div className="flex-1 bg-background border border-border rounded-xl p-4 text-center shadow-sm">
                  <span className="block text-5xl font-bold text-primary tracking-tight mb-1">{result.remainingDays}</span>
                  <span className="text-xs font-semibold text-secondary-foreground uppercase tracking-wider">{t('days')}</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <CalendarDays className="w-12 h-12" />
            <p>{t("selectDatesToCalculate")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
