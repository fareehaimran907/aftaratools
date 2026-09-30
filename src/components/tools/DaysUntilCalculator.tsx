"use client";

import { useState } from "react";
import { Copy, RefreshCw, CalendarClock, Timer } from "lucide-react";
import { calculateAgeInfo } from "@/lib/calculations/age";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { useTranslations } from "next-intl";

export function DaysUntilCalculator() {
  const t = useTranslations("Tools.days-until-calculator.ui");
  const [targetDate, setTargetDate] = useState("");
  const [result, setResult] = useState<{
    years: number;
    months: number;
    days: number;
    totalDays: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    if (!targetDate) return;
    try {
      setError(null);
      const today = new Date();
      // Ensure we compare midnight to midnight local time
      const todayStr = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, '0') + "-" + String(today.getDate()).padStart(2, '0');
      
      const target = new Date(targetDate);
      if (isNaN(target.getTime())) {
        throw new Error("Invalid date selected");
      }
      
      if (target.getTime() < new Date(todayStr).getTime()) {
        throw new Error("Date must be in the future");
      }

      const res = calculateAgeInfo(todayStr, target);
      setResult(res);
    } catch (err: any) {
      setError(err.message);
      setResult(null);
    }
  };

  const reset = () => {
    setTargetDate("");
    setResult(null);
    setError(null);
  };

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <CalendarClock className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('daysUntil')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="target-date">{t('selectFutureDateEventHolidayDeadline')}</label>
              <Input 
                id="target-date"
                type="date" 
                value={targetDate} 
                onChange={(e) => setTargetDate(e.target.value)} 
                className="h-12 text-lg"
              />
            </div>
          </div>
        </ToolPanelContent>

        <Button onClick={calculate} size="lg" className="w-full h-12 mt-6 shadow-sm gap-2">
          {t('calculate')}
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
                <Timer className="w-5 h-5 text-primary" />
                {t('timeRemaining')}
              </h3>
              <div className="flex gap-2">
                <Button onClick={() => navigator.clipboard.writeText(`${result.totalDays} days remaining!`)} variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10">
                  <Copy className="w-4 h-4 text-primary" />
                </Button>
                <Button onClick={reset} variant="ghost" size="icon" className="h-8 w-8 hover:bg-error/10">
                  <RefreshCw className="w-4 h-4 text-error" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-background border border-border rounded-xl p-8 text-center shadow-sm">
                <span className="block text-6xl font-bold text-primary tracking-tight mb-2">{result.totalDays.toLocaleString()}</span>
                <span className="text-sm font-medium text-secondary-foreground uppercase tracking-wider">{t('totalDays')}</span>
              </div>

              <div className="bg-secondary border border-border/50 rounded-lg p-4 text-center">
                <p className="text-xs text-secondary-foreground uppercase tracking-widest mb-1">{t('whichIsExactly')}</p>
                <p className="font-semibold text-foreground">
                  {result.years > 0 ? `${result.years} years, ` : ""}
                  {result.months > 0 ? `${result.months} months, ` : ""}
                  {result.days} {t('days')}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <CalendarClock className="w-12 h-12" />
            <p>{t("selectAFutureDate")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
