"use client";

import { useState } from "react";
import { Copy, RefreshCw, Clock, Hourglass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { useTranslations } from "next-intl";

export function TimeDurationCalculator() {
  const t = useTranslations("Tools.time-duration-calculator.ui");
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");
  const [crossesMidnight, setCrossesMidnight] = useState(false);
  
  const [result, setResult] = useState<{
    hours: number;
    minutes: number;
    totalMinutes: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    if (!startTime || !endTime) {
      setError("Please select both times.");
      return;
    }
    
    try {
      setError(null);
      const [startH, startM] = startTime.split(":").map(Number);
      const [endH, endM] = endTime.split(":").map(Number);
      
      let startTotal = startH * 60 + startM;
      let endTotal = endH * 60 + endM;
      
      if (endTotal < startTotal || crossesMidnight) {
        endTotal += 24 * 60; // Add 24 hours
      }
      
      const diff = endTotal - startTotal;
      
      setResult({
        hours: Math.floor(diff / 60),
        minutes: diff % 60,
        totalMinutes: diff
      });
    } catch (err: any) {
      setError("Invalid time format");
      setResult(null);
    }
  };

  const reset = () => {
    setStartTime("09:00");
    setEndTime("17:00");
    setCrossesMidnight(false);
    setResult(null);
    setError(null);
  };

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('timeDurationCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="start-time">{t('startTime')}</label>
                <Input 
                  id="start-time"
                  type="time" 
                  value={startTime} 
                  onChange={(e) => setStartTime(e.target.value)} 
                  className="h-12 text-lg"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="end-time">{t('endTime')}</label>
                <Input 
                  id="end-time"
                  type="time" 
                  value={endTime} 
                  onChange={(e) => setEndTime(e.target.value)} 
                  className="h-12 text-lg"
                />
              </div>
            </div>
            
            <div className="pt-2">
              <label className="flex items-center gap-3 text-sm font-medium text-foreground cursor-pointer w-fit">
                <input 
                  type="checkbox" 
                  checked={crossesMidnight} 
                  onChange={(e) => setCrossesMidnight(e.target.checked)} 
                  className="rounded border-border text-primary focus:ring-primary h-4 w-4" 
                />
                {t('endsOnTheNextDayCrossesMidnight')}
              </label>
            </div>
          </div>
        </ToolPanelContent>

        <Button onClick={calculate} size="lg" className="w-full h-12 mt-6 shadow-sm gap-2">
          {t('calculateDuration')}
        </Button>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {error ? (
          <div className="h-full flex flex-col items-center justify-center text-error gap-4 p-8 text-center bg-error/5 rounded-xl border border-error/20">
            <p className="font-medium">{error}</p>
          </div>
        ) : result !== null ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Hourglass className="w-5 h-5 text-primary" />
                {t("durationResult")}</h3>
              <div className="flex gap-2">
                <Button onClick={() => navigator.clipboard.writeText(`${result.hours} hours, ${result.minutes} minutes`)} variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10">
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
                  <span className="block text-5xl font-bold text-primary tracking-tight mb-1">{result.hours}</span>
                  <span className="text-xs font-semibold text-secondary-foreground uppercase tracking-wider">{t('hours')}</span>
                </div>
                <div className="flex-1 bg-background border border-border rounded-xl p-4 text-center shadow-sm">
                  <span className="block text-5xl font-bold text-primary tracking-tight mb-1">{result.minutes}</span>
                  <span className="text-xs font-semibold text-secondary-foreground uppercase tracking-wider">{t('minutes')}</span>
                </div>
              </div>

              <div className="pt-2">
                <ToolResultItem 
                  label={t('totalTimeInMinutes')}
                  value={`${result.totalMinutes} ${t('minutes')}`}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <Clock className="w-12 h-12" />
            <p>{t("selectStartAndEndTimes")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
