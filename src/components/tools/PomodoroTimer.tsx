"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { ClockAlert, Play, Pause, RotateCcw, Brain, Coffee, Bed, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

type Mode = 'pomodoro' | 'shortBreak' | 'longBreak';

const DEFAULT_DURATIONS = {
  pomodoro: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

export function PomodoroTimer() {
  const t = useTranslations("Tools.pomodoro-timer.ui");
  const [mounted, setMounted] = useState(false);
  
  const [mode, setMode] = useState<Mode>('pomodoro');
  const [timeLeft, setTimeLeft] = useState<number>(DEFAULT_DURATIONS.pomodoro);
  const [isActive, setIsActive] = useState(false);
  const [pomodorosCompleted, setPomodorosCompleted] = useState(0);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      setIsActive(false);
      handleComplete();
      if (timerRef.current) clearInterval(timerRef.current);
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  const handleComplete = () => {
    if (mode === 'pomodoro') {
      const completed = pomodorosCompleted + 1;
      setPomodorosCompleted(completed);
      if (completed % 4 === 0) {
        setMode('longBreak');
        setTimeLeft(DEFAULT_DURATIONS.longBreak);
      } else {
        setMode('shortBreak');
        setTimeLeft(DEFAULT_DURATIONS.shortBreak);
      }
    } else {
      setMode('pomodoro');
      setTimeLeft(DEFAULT_DURATIONS.pomodoro);
    }
  };

  const switchMode = (newMode: Mode) => {
    setMode(newMode);
    setTimeLeft(DEFAULT_DURATIONS[newMode]);
    setIsActive(false);
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimeLeft(DEFAULT_DURATIONS[mode]);
  };

  const formatTime = (timeInSeconds: number) => {
    const m = Math.floor(timeInSeconds / 60);
    const s = timeInSeconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const progress = ((DEFAULT_DURATIONS[mode] - timeLeft) / DEFAULT_DURATIONS[mode]) * 100;

  const modeColors = {
    pomodoro: "bg-rose-500 hover:bg-rose-600 text-rose-500",
    shortBreak: "bg-emerald-500 hover:bg-emerald-600 text-emerald-500",
    longBreak: "bg-blue-500 hover:bg-blue-600 text-blue-500",
  };

  const currentTheme = modeColors[mode];

  if (!mounted) return null;

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-slate-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-3xl mx-auto space-y-8">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-rose-100 dark:bg-rose-900/30 rounded-2xl text-rose-600 dark:text-rose-400 mb-2">
            <ClockAlert className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <div className={`p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700 transition-colors duration-500 ${mode === 'pomodoro' ? 'bg-rose-50/50 dark:bg-rose-950/10' : mode === 'shortBreak' ? 'bg-emerald-50/50 dark:bg-emerald-950/10' : 'bg-blue-50/50 dark:bg-blue-950/10'}`}>
          
          {/* Mode Selector */}
          <div className="flex justify-center gap-2 mb-10 bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 w-fit mx-auto">
            <Button
              variant="ghost"
              onClick={() => switchMode('pomodoro')}
              className={`rounded-xl px-6 py-2 transition-all ${mode === 'pomodoro' ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 font-bold' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              <Brain className="w-4 h-4 mr-2" />
              {t("pomodoro")}
            </Button>
            <Button
              variant="ghost"
              onClick={() => switchMode('shortBreak')}
              className={`rounded-xl px-6 py-2 transition-all ${mode === 'shortBreak' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-bold' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              <Coffee className="w-4 h-4 mr-2" />
              {t("shortBreak")}
            </Button>
            <Button
              variant="ghost"
              onClick={() => switchMode('longBreak')}
              className={`rounded-xl px-6 py-2 transition-all ${mode === 'longBreak' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-bold' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              <Bed className="w-4 h-4 mr-2" />
              {t("longBreak")}
            </Button>
          </div>

          {/* Timer Display */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto flex flex-col items-center justify-center mb-10 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-100 dark:border-slate-700">
            {/* Progress Circle SVG */}
            <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90 p-4">
              <circle
                cx="50%"
                cy="50%"
                r="46%"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                className="text-slate-100 dark:text-slate-700/50"
              />
              <circle
                cx="50%"
                cy="50%"
                r="46%"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                strokeDasharray="289%"
                strokeDashoffset={`${289 - (289 * progress) / 100}%`}
                className={`transition-all duration-1000 ease-linear ${currentTheme.split(' ')[2]}`}
              />
            </svg>
            
            <div className={`text-6xl md:text-7xl font-mono font-bold tabular-nums tracking-tight z-10 text-slate-800 dark:text-slate-100`}>
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <Button
              variant="outline"
              onClick={handleReset}
              className="w-16 h-16 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 transition-all shadow-sm"
              title={t("reset")}
            >
              <RotateCcw className="w-6 h-6" />
            </Button>
            
            {!isActive ? (
              <Button
                onClick={handleStart}
                className={`w-24 h-24 rounded-full text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 ${currentTheme.split(' ')[0]} ${currentTheme.split(' ')[1]}`}
              >
                <Play className="w-10 h-10 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handlePause}
                className="w-24 h-24 rounded-full bg-slate-800 dark:bg-slate-100 text-white dark:text-slate-900 shadow-xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
              >
                <Pause className="w-10 h-10" />
              </Button>
            )}
            
            <Button
              variant="outline"
              disabled
              className="w-16 h-16 rounded-full border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center text-slate-300 dark:text-slate-600 transition-all shadow-sm cursor-not-allowed"
              title="Settings (Coming Soon)"
            >
              <Settings className="w-6 h-6" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white dark:bg-slate-800 px-6 py-3 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
              <span className="text-slate-500 dark:text-slate-400 font-medium">{t("completed")}:</span>
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-3 h-3 rounded-full ${i < (pomodorosCompleted % 4) || (pomodorosCompleted > 0 && pomodorosCompleted % 4 === 0) ? 'bg-rose-500' : 'bg-slate-200 dark:bg-slate-700'}`}
                  />
                ))}
              </div>
              <span className="font-bold text-slate-800 dark:text-slate-200 ml-2">
                #{pomodorosCompleted}
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
