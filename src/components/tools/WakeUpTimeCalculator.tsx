"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Sunrise, Info } from "lucide-react";
import { useTranslations } from "next-intl";

export function WakeUpTimeCalculator() {
  const t = useTranslations("Tools.wake-up-time-calculator.ui");
  const [wakeTimes, setWakeTimes] = useState<Date[]>([]);

  const calculate = () => {
    // Going to bed right now
    const target = new Date();
    // Add 15 mins to fall asleep
    target.setMinutes(target.getMinutes() + 15);

    const cycles = [6, 5, 4, 3];
    const times = cycles.map(c => {
      const cycleMins = c * 90;
      const d = new Date(target.getTime());
      d.setMinutes(d.getMinutes() + cycleMins);
      return d;
    }).reverse(); // shortest to longest sleep

    setWakeTimes(times);
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
          <Sunrise className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('wakeupTimeCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 flex flex-col items-center justify-center space-y-8 py-12 text-center">
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-foreground tracking-tight">{t("readyForBed")}</h4>
            <p className="text-secondary-foreground text-sm max-w-[280px] mx-auto">
              {t('ifYouHeadToBedRightNowWhenShouldYouWakeUpToFeelRefreshed')}
            </p>
          </div>
          
          <Button onClick={calculate} size="lg" className="h-16 px-10 text-lg rounded-full shadow-sm gap-2">
            {t('imGoingToBedNow')}
          </Button>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {wakeTimes.length > 0 ? (
          <div className="space-y-6">
            <div className="bg-primary/10 rounded-xl p-4 flex gap-3 text-sm border border-primary/20 shadow-sm text-primary">
              <Info className="w-5 h-5 shrink-0 mt-0.5" />
              <p>
                {t('weAdded15MinutesForYouToFallAsleepSetYourAlarmForOneOfTheseTimesToWakeUpBetween90minuteSleepCycles')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-background border-2 border-primary/40 rounded-xl p-6 text-center shadow-md relative overflow-hidden group hover:border-primary transition-colors">
                <div className="absolute top-0 right-0 bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-bl-lg">{t("recommended")}</div>
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{t('6Cycles9h')}</div>
                <div className="text-4xl font-bold text-foreground flex items-center justify-center gap-2 font-mono">
                  <Sunrise className="w-6 h-6 text-primary fill-primary/20" />
                  {formatTime(wakeTimes[3])}
                </div>
              </div>
              
              <div className="bg-background border-2 border-primary/20 rounded-xl p-6 text-center shadow-sm hover:border-primary/50 transition-colors">
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{t('5Cycles75h')}</div>
                <div className="text-4xl font-bold text-foreground flex items-center justify-center gap-2 font-mono">
                  <Sunrise className="w-6 h-6 text-primary" />
                  {formatTime(wakeTimes[2])}
                </div>
              </div>
              
              <div className="bg-background/50 border border-border rounded-xl p-6 text-center">
                <div className="text-sm font-semibold text-secondary-foreground mb-2 uppercase tracking-wider">{t('4Cycles6h')}</div>
                <div className="text-3xl font-bold text-muted-foreground font-mono">{formatTime(wakeTimes[1])}</div>
              </div>
              
              <div className="bg-background/30 border border-border/50 rounded-xl p-6 text-center opacity-80">
                <div className="text-sm font-semibold text-secondary-foreground mb-2 uppercase tracking-wider">{t('3Cycles45h')}</div>
                <div className="text-2xl font-bold text-muted-foreground font-mono">{formatTime(wakeTimes[0])}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <Sunrise className="w-12 h-12" />
            <p>{t("clickTheButtonWhenYouReG")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
