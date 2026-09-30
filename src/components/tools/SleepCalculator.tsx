"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Moon, Sunrise, Info } from "lucide-react";
import { useTranslations } from "next-intl";

export function SleepCalculator() {
  const t = useTranslations("Tools.sleep-calculator.ui");
  const [wakeTime, setWakeTime] = useState("07:00");
  const [bedTimes, setBedTimes] = useState<Date[]>([]);

  const calculate = () => {
    if (!wakeTime) return;
    const [h, m] = wakeTime.split(":").map(Number);
    
    // Base date doesn't matter, just need relative math
    const target = new Date();
    target.setHours(h, m, 0, 0);
    // Move to tomorrow if time already passed to ensure positive math
    target.setDate(target.getDate() + 1); 

    // A sleep cycle is typically 90 mins. Add 15 mins to fall asleep.
    // Recommended cycles: 6 (9hrs), 5 (7.5hrs), 4 (6hrs)
    const cycles = [6, 5, 4, 3];
    const newBedTimes = cycles.map(c => {
      const cycleMins = c * 90;
      const totalMins = cycleMins + 15; // +15 to fall asleep
      const d = new Date(target.getTime());
      d.setMinutes(d.getMinutes() - totalMins);
      return d;
    });

    setBedTimes(newBedTimes);
  };

  const formatTime = (d: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(d);
  };

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Moon className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('sleepCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-3">
              <label className="text-sm font-medium text-secondary-foreground flex items-center gap-2" htmlFor="wake">
                <Sunrise className="w-4 h-4 text-warning" />
                {t('iWantToWakeUpAt')}
              </label>
              <Input 
                id="wake" 
                type="time" 
                value={wakeTime} 
                onChange={e => setWakeTime(e.target.value)} 
                className="h-14 text-2xl font-bold font-mono tracking-wider text-center"
              />
            </div>
          </div>
        </ToolPanelContent>

        <Button onClick={calculate} size="lg" className="w-full h-12 mt-6 shadow-sm gap-2">
          {t('calculate')}
        </Button>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {bedTimes.length > 0 ? (
          <div className="space-y-6">
            <div className="bg-primary/10 rounded-xl p-4 flex gap-3 text-sm border border-primary/20 shadow-sm text-primary">
              <Info className="w-5 h-5 shrink-0 mt-0.5" />
              <p>
                {t('toWakeUpRefreshedAt')} <strong className="font-bold text-foreground mx-1">{wakeTime}</strong>, {t('youShouldTryToFallAsleepAtOneOfTheseTimesIncludes15MinsToFallAsleep')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-background border-2 border-primary/40 rounded-xl p-6 text-center shadow-md relative overflow-hidden group hover:border-primary transition-colors">
                <div className="absolute top-0 right-0 bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-bl-lg">{t("recommended")}</div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{t('6Cycles9h')}</div>
                <div className="text-4xl font-bold text-foreground flex items-center justify-center gap-2 font-mono">
                  <Moon className="w-6 h-6 text-primary fill-primary/20" />
                  {formatTime(bedTimes[0])}
                </div>
              </div>
              
              <div className="bg-background border-2 border-primary/20 rounded-xl p-6 text-center shadow-sm hover:border-primary/50 transition-colors">
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{t('5Cycles75h')}</div>
                <div className="text-4xl font-bold text-foreground flex items-center justify-center gap-2 font-mono">
                  <Moon className="w-6 h-6 text-primary" />
                  {formatTime(bedTimes[1])}
                </div>
              </div>
              
              <div className="bg-background/50 border border-border rounded-xl p-6 text-center">
                <div className="text-sm font-semibold text-secondary-foreground mb-2 uppercase tracking-wider">{t('4Cycles6h')}</div>
                <div className="text-3xl font-bold text-muted-foreground font-mono">{formatTime(bedTimes[2])}</div>
              </div>
              
              <div className="bg-background/30 border border-border/50 rounded-xl p-6 text-center opacity-80">
                <div className="text-sm font-semibold text-secondary-foreground mb-2 uppercase tracking-wider">{t('3Cycles45h')}</div>
                <div className="text-2xl font-bold text-muted-foreground font-mono">{formatTime(bedTimes[3])}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <Moon className="w-12 h-12" />
            <p>{t("enterWakeTimeToCalculateS")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
