"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { useTranslations } from "next-intl";
import { Timer, Play, Pause, RotateCcw, Brain, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

export function PomodoroTimer() {
  const t = useTranslations("Tools.pomodoro-timer.ui");
  const WORK_TIME = 25 * 60;
  const BREAK_TIME = 5 * 60;
  
  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<"work" | "break">("work");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      // Auto switch modes
      if (mode === "work") {
        setMode("break");
        setTimeLeft(BREAK_TIME);
      } else {
        setMode("work");
        setTimeLeft(WORK_TIME);
      }
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isRunning, timeLeft, mode]);

  const toggle = () => setIsRunning(!isRunning);
  
  const reset = () => {
    setIsRunning(false);
    setTimeLeft(mode === "work" ? WORK_TIME : BREAK_TIME);
  };

  const switchMode = (newMode: "work" | "break") => {
    setIsRunning(false);
    setMode(newMode);
    setTimeLeft(newMode === "work" ? WORK_TIME : BREAK_TIME);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const isWork = mode === "work";

  return (
    <ToolLayout.Stacked>
      <ToolPanel className={cn(
        "max-w-2xl mx-auto w-full text-center p-8 transition-colors duration-500",
        isWork ? "bg-surface" : "bg-success/5"
      )}>
        <div className="flex flex-col items-center justify-center gap-3 mb-8">
          <Timer className={cn("w-8 h-8", isWork ? "text-primary" : "text-success")} />
          <h3 className="text-xl font-bold text-foreground">{t('pomodoroTimer')}</h3>
        </div>
        
        <ToolPanelContent className="space-y-10">
          <div className="flex justify-center gap-2 p-1 bg-secondary/30 rounded-full max-w-[300px] mx-auto border border-border/50">
            <Button 
              variant={isWork ? "default" : "ghost"} 
              onClick={() => switchMode("work")}
              className={cn("flex-1 rounded-full gap-2 transition-all", isWork ? "shadow-sm" : "")}
            >
              <Brain className="w-4 h-4" /> {t('work25m')}
            </Button>
            <Button 
              variant={!isWork ? "default" : "ghost"} 
              onClick={() => switchMode("break")}
              className={cn("flex-1 rounded-full gap-2 transition-all", !isWork ? "bg-success hover:bg-success/90 shadow-sm text-white" : "")}
            >
              <Coffee className="w-4 h-4" /> {t('break5m')}
            </Button>
          </div>
          
          <div className="py-6">
            <div className="relative inline-block">
              <div className={cn("absolute inset-0 blur-3xl rounded-full opacity-50", isWork ? "bg-primary/20" : "bg-success/20")}></div>
              <span className={cn(
                "relative text-[120px] md:text-[140px] font-bold font-mono tracking-tighter leading-none block w-full",
                isWork ? "text-primary" : "text-success"
              )}>
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button 
              onClick={toggle} 
              size="lg" 
              className={cn(
                "h-16 px-12 text-xl rounded-full gap-3 shadow-sm min-w-[200px] transition-all",
                !isWork && !isRunning ? "bg-success hover:bg-success/90 text-white" : "",
                isRunning && "bg-secondary text-foreground hover:bg-secondary/80 border-border"
              )}
            >
              {isRunning ? (
                <><Pause className="w-6 h-6 fill-current" /> {t("pause")}</>
              ) : (
                <><Play className="w-6 h-6 fill-current" /> {t("start")}</>
              )}
            </Button>
            <Button 
              onClick={reset} 
              variant="outline" 
              size="lg" 
              className="h-16 w-16 rounded-full p-0 shadow-sm border-border bg-background"
            >
              <RotateCcw className="w-6 h-6" />
              <span className="sr-only">{t('reset')}</span>
            </Button>
          </div>
        </ToolPanelContent>
      </ToolPanel>
    </ToolLayout.Stacked>
  );
}
