"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { useTranslations } from "next-intl";
import { Timer, Play, Pause, RotateCcw } from "lucide-react";

export function CountdownTimer() {
  const t = useTranslations("Tools.countdown-timer.ui");
  const [inputMinutes, setInputMinutes] = useState("5");
  const [timeLeft, setTimeLeft] = useState(5 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      // Optional: Play a sound here
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isRunning, timeLeft]);

  const start = () => {
    if (timeLeft === 0) {
      const mins = parseInt(inputMinutes) || 0;
      setTimeLeft(mins * 60);
    }
    setIsRunning(true);
  };
  
  const pause = () => setIsRunning(false);
  
  const reset = () => {
    setIsRunning(false);
    const mins = parseInt(inputMinutes) || 0;
    setTimeLeft(mins * 60);
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) {
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <ToolLayout.Stacked>
      <ToolPanel className="max-w-2xl mx-auto w-full text-center p-8 bg-surface border-border">
        <div className="flex flex-col items-center justify-center gap-3 mb-8">
          <Timer className="w-8 h-8 text-primary" />
          <h3 className="text-xl font-bold text-foreground">{t('countdownTimer')}</h3>
        </div>
        
        <ToolPanelContent className="space-y-10">
          {!isRunning && timeLeft === (parseInt(inputMinutes) || 0) * 60 && (
            <div className="flex justify-center items-center gap-3 bg-secondary/30 p-4 rounded-xl border border-border/50 max-w-xs mx-auto">
              <Input 
                type="number" 
                min="1" 
                value={inputMinutes} 
                onChange={e => {
                  setInputMinutes(e.target.value);
                  setTimeLeft((parseInt(e.target.value) || 0) * 60);
                }} 
                className="w-24 h-12 text-center text-xl font-bold bg-background" 
              />
              <span className="text-secondary-foreground font-semibold uppercase tracking-wider text-sm">{t('minutes')}</span>
            </div>
          )}
          
          <div className="py-4">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
              <span className={`relative text-8xl md:text-[120px] font-bold font-mono tracking-tighter ${timeLeft === 0 ? 'text-error animate-pulse' : 'text-primary'}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            {!isRunning ? (
              <Button onClick={start} size="lg" className="h-14 px-8 text-lg rounded-full gap-2 w-40">
                <Play className="w-5 h-5 fill-current" /> {t('start')}
              </Button>
            ) : (
              <Button onClick={pause} variant="secondary" size="lg" className="h-14 px-8 text-lg rounded-full gap-2 w-40">
                <Pause className="w-5 h-5 fill-current" /> {t('pause')}
              </Button>
            )}
            <Button onClick={reset} variant="outline" size="lg" className="h-14 w-14 rounded-full p-0">
              <RotateCcw className="w-5 h-5" />
              <span className="sr-only">{t('reset')}</span>
            </Button>
          </div>
        </ToolPanelContent>
      </ToolPanel>
    </ToolLayout.Stacked>
  );
}
