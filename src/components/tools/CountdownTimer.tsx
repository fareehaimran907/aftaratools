"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Hourglass, Play, Pause, Square, RotateCcw, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CountdownTimer() {
  const t = useTranslations("Tools.countdown-timer.ui");
  const [mounted, setMounted] = useState(false);
  
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(5);
  const [seconds, setSeconds] = useState<number>(0);
  
  const [timeLeft, setTimeLeft] = useState<number>(300); // 5 mins in seconds
  const [totalTime, setTotalTime] = useState<number>(300);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    audioRef.current = new Audio("data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU..."); // dummy or simple base64 beep
    // We will just use visual alert for safety, audio might be blocked by browser without interaction
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      setIsActive(false);
      setIsFinished(true);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const calculateTotalSeconds = (h: number, m: number, s: number) => {
    return (h * 3600) + (m * 60) + s;
  };

  const setTimer = () => {
    const total = calculateTotalSeconds(hours, minutes, seconds);
    if (total > 0) {
      setTimeLeft(total);
      setTotalTime(total);
      setIsFinished(false);
    }
  };

  const handleStart = () => {
    if (timeLeft === 0 && totalTime > 0) {
      setTimeLeft(totalTime);
      setIsFinished(false);
    }
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsFinished(false);
    setTimeLeft(totalTime);
  };
  
  const handleEdit = (type: 'h' | 'm' | 's', val: string) => {
    let num = parseInt(val) || 0;
    if (num < 0) num = 0;
    
    if (type === 'h') setHours(num);
    if (type === 'm') setMinutes(Math.min(num, 59));
    if (type === 's') setSeconds(Math.min(num, 59));
  };

  // When inputs change, automatically update the timer IF it is not running
  useEffect(() => {
    if (!isActive) {
      setTimer();
    }
  }, [hours, minutes, seconds]);

  const formatTime = (timeInSeconds: number) => {
    const h = Math.floor(timeInSeconds / 3600);
    const m = Math.floor((timeInSeconds % 3600) / 60);
    const s = timeInSeconds % 60;
    
    const pad = (n: number) => n.toString().padStart(2, "0");
    
    if (h > 0) {
      return `${pad(h)}:${pad(m)}:${pad(s)}`;
    }
    return `${pad(m)}:${pad(s)}`;
  };

  const progress = totalTime > 0 ? ((totalTime - timeLeft) / totalTime) * 100 : 0;

  if (!mounted) return null;

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-slate-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-3xl mx-auto space-y-8">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-teal-100 dark:bg-teal-900/30 rounded-2xl text-teal-600 dark:text-teal-400 mb-2">
            <Hourglass className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700">
          
          {/* Preset or Edit Mode */}
          <div className={`transition-all duration-500 ${isActive || isFinished ? 'opacity-50 pointer-events-none hidden' : 'block'}`}>
            <div className="flex justify-center gap-4 mb-10">
              <div className="text-center">
                <input
                  type="number"
                  min="0"
                  value={hours}
                  onChange={(e) => handleEdit('h', e.target.value)}
                  className="w-20 h-16 text-center text-3xl font-bold bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none text-slate-800 dark:text-slate-100"
                />
                <div className="text-xs text-slate-500 mt-2 font-medium uppercase tracking-wider">{t("hours")}</div>
              </div>
              <div className="text-3xl font-bold text-slate-300 dark:text-slate-600 self-start mt-4">:</div>
              <div className="text-center">
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={minutes}
                  onChange={(e) => handleEdit('m', e.target.value)}
                  className="w-20 h-16 text-center text-3xl font-bold bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none text-slate-800 dark:text-slate-100"
                />
                <div className="text-xs text-slate-500 mt-2 font-medium uppercase tracking-wider">{t("minutes")}</div>
              </div>
              <div className="text-3xl font-bold text-slate-300 dark:text-slate-600 self-start mt-4">:</div>
              <div className="text-center">
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={seconds}
                  onChange={(e) => handleEdit('s', e.target.value)}
                  className="w-20 h-16 text-center text-3xl font-bold bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none text-slate-800 dark:text-slate-100"
                />
                <div className="text-xs text-slate-500 mt-2 font-medium uppercase tracking-wider">{t("seconds")}</div>
              </div>
            </div>
          </div>

          {/* Timer Display */}
          <div className="relative w-64 h-64 mx-auto flex items-center justify-center mb-10">
            {/* Progress Circle */}
            <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
              <circle
                cx="128"
                cy="128"
                r="120"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-slate-100 dark:text-slate-700"
              />
              <circle
                cx="128"
                cy="128"
                r="120"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray="753.98"
                strokeDashoffset={753.98 - (753.98 * (100 - progress)) / 100}
                className={`transition-all duration-1000 ease-linear ${isFinished ? 'text-red-500' : 'text-teal-500'}`}
              />
            </svg>
            
            <div className={`text-5xl font-mono font-bold tabular-nums tracking-tight z-10 ${isFinished ? 'text-red-500' : 'text-slate-800 dark:text-slate-100'}`}>
              {formatTime(timeLeft)}
            </div>
            
            {isFinished && (
              <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-red-500 font-bold bg-red-50 dark:bg-red-900/20 px-4 py-1.5 rounded-full text-sm">
                <Bell className="w-4 h-4 animate-bounce" />
                {t("timeUp")}
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4">
            {!isActive ? (
              <Button
                onClick={handleStart}
                className="w-20 h-20 rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/30 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
              >
                <Play className="w-8 h-8 ml-1" />
              </Button>
            ) : (
              <Button
                onClick={handlePause}
                className="w-20 h-20 rounded-full bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/30 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
              >
                <Pause className="w-8 h-8" />
              </Button>
            )}
            
            <Button
              variant="outline"
              onClick={handleReset}
              className="w-16 h-16 rounded-full border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-all"
            >
              <RotateCcw className="w-6 h-6" />
            </Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
