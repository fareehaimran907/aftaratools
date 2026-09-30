"use client";

import { useState } from "react";
import { Copy, RefreshCw, Clock, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { useTranslations } from "next-intl";

export function TimeDifferenceCalculator() {
  const t = useTranslations("Tools.time-difference-calculator.ui");
  const [time1, setTime1] = useState("12:00");
  const [time2, setTime2] = useState("14:30");
  
  const [result, setResult] = useState<{
    hours: number;
    minutes: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    if (!time1 || !time2) {
      setError("Please select both times.");
      return;
    }
    
    try {
      setError(null);
      const [h1, m1] = time1.split(":").map(Number);
      const [h2, m2] = time2.split(":").map(Number);
      
      let t1 = h1 * 60 + m1;
      let t2 = h2 * 60 + m2;
      
      let diff = Math.abs(t2 - t1);
      
      setResult({
        hours: Math.floor(diff / 60),
        minutes: diff % 60
      });
    } catch (err: any) {
      setError("Invalid time format");
      setResult(null);
    }
  };

  const reset = () => {
    setTime1("12:00");
    setTime2("14:30");
    setResult(null);
    setError(null);
  };

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('timeDifference')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="time-1">{t('firstTime')}</label>
                <Input 
                  id="time-1"
                  type="time" 
                  value={time1} 
                  onChange={(e) => setTime1(e.target.value)} 
                  className="h-12 text-lg"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="time-2">{t('secondTime')}</label>
                <Input 
                  id="time-2"
                  type="time" 
                  value={time2} 
                  onChange={(e) => setTime2(e.target.value)} 
                  className="h-12 text-lg"
                />
              </div>
            </div>
          </div>
        </ToolPanelContent>

        <Button onClick={calculate} size="lg" className="w-full h-12 mt-6 shadow-sm gap-2">
          {t('calculateAbsoluteDifference')}
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
                <ArrowRightLeft className="w-5 h-5 text-primary" />
                {t('difference')}
              </h3>
              <div className="flex gap-2">
                <Button onClick={() => navigator.clipboard.writeText(`${result.hours}h ${result.minutes}m`)} variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10">
                  <Copy className="w-4 h-4 text-primary" />
                </Button>
                <Button onClick={reset} variant="ghost" size="icon" className="h-8 w-8 hover:bg-error/10">
                  <RefreshCw className="w-4 h-4 text-error" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-background border border-border rounded-xl p-8 text-center shadow-sm flex items-center justify-center gap-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-primary tracking-tight">{result.hours}</span>
                  <span className="text-sm font-bold text-secondary-foreground uppercase tracking-wider">{t('h')}</span>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-bold text-primary tracking-tight">{result.minutes}</span>
                  <span className="text-sm font-bold text-secondary-foreground uppercase tracking-wider">{t('m')}</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <Clock className="w-12 h-12" />
            <p>{t("selectTimesToCompare")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
