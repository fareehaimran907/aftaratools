"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { useTranslations } from "next-intl";
import { Timer, Play, Pause, RotateCcw, Flag } from "lucide-react";

export function Stopwatch() {
  const t = useTranslations("Tools.stopwatch.ui");
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime(prev => prev + 10); // +10ms
      }, 10);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning]);

  const start = () => setIsRunning(true);
  const pause = () => setIsRunning(false);
  const reset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };
  const lap = () => {
    setLaps(prev => [time, ...prev]);
  };

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface text-center p-8">
        <div className="flex items-center justify-center gap-2 mb-8 text-primary">
          <Timer className="w-6 h-6" />
          <h3 className="text-xl font-bold text-foreground">{t('stopwatch')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 flex flex-col items-center justify-center space-y-12">
          <div className="relative inline-block py-8">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
            <span className="relative text-6xl md:text-[80px] font-bold font-mono tracking-tighter text-primary block w-full text-center">
              {formatTime(time)}
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {!isRunning ? (
              <Button onClick={start} size="lg" className="h-14 px-8 text-lg rounded-full gap-2 min-w-[140px] bg-success hover:bg-success/90 text-white shadow-sm">
                <Play className="w-5 h-5 fill-current" /> {t('start')}
              </Button>
            ) : (
              <Button onClick={pause} variant="secondary" size="lg" className="h-14 px-8 text-lg rounded-full gap-2 min-w-[140px] shadow-sm">
                <Pause className="w-5 h-5 fill-current" /> {t('pause')}
              </Button>
            )}
            <Button onClick={lap} variant="outline" size="lg" className="h-14 px-6 rounded-full gap-2 shadow-sm border-border" disabled={!isRunning}>
              <Flag className="w-5 h-5" /> {t('lap')}
            </Button>
            <Button onClick={reset} variant="destructive" size="lg" className="h-14 w-14 rounded-full p-0 shadow-sm" disabled={time === 0}>
              <RotateCcw className="w-5 h-5" />
              <span className="sr-only">{t('reset')}</span>
            </Button>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-6">
          <Flag className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("laps")}</h3>
        </div>
        
        <div className="flex-1 overflow-hidden flex flex-col">
          {laps.length > 0 ? (
            <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin">
              {laps.map((lapTime, index) => {
                const previousLap = laps[index + 1] || 0;
                const diff = lapTime - previousLap;
                return (
                  <div key={index} className="flex justify-between items-center p-4 bg-background border border-border rounded-xl shadow-sm text-sm font-mono transition-all hover:border-primary/30">
                    <span className="text-secondary-foreground font-semibold uppercase tracking-wider">{t('lap')}{laps.length - index}</span>
                    <div className="flex gap-6 items-center">
                      <span className="text-muted-foreground">+{formatTime(diff)}</span>
                      <span className="text-primary font-bold text-lg">{formatTime(lapTime)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
             <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
               <Flag className="w-12 h-12" />
               <p>{t("noLapsRecordedYet")}</p>
             </div>
          )}
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
