"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Timer, Play, Pause, RotateCcw, Flag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Lap {
  id: number;
  time: number; // total time at this lap
  diff: number; // difference from previous lap
}

export function Stopwatch() {
  const t = useTranslations("Tools.stopwatch.ui");
  const [mounted, setMounted] = useState(false);
  
  const [time, setTime] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [laps, setLaps] = useState<Lap[]>([]);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(0);
  const pausedTimeRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleStart = () => {
    if (!isActive) {
      setIsActive(true);
      startTimeRef.current = Date.now() - pausedTimeRef.current;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10);
    }
  };

  const handlePause = () => {
    if (isActive) {
      setIsActive(false);
      pausedTimeRef.current = time;
      if (timerRef.current) clearInterval(timerRef.current);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setLaps([]);
    pausedTimeRef.current = 0;
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleLap = () => {
    if (isActive) {
      const lastLapTime = laps.length > 0 ? laps[0].time : 0;
      const newLap: Lap = {
        id: laps.length + 1,
        time: time,
        diff: time - lastLapTime
      };
      setLaps([newLap, ...laps]);
    }
  };

  const formatTime = (ms: number, showMs = true) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);

    const pad = (n: number, z = 2) => n.toString().padStart(z, "0");

    let result = "";
    if (hours > 0) result += `${pad(hours)}:`;
    result += `${pad(minutes)}:${pad(seconds)}`;
    
    if (showMs) {
      result += `.${pad(milliseconds)}`;
    }
    
    return result;
  };

  if (!mounted) return null;

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-slate-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-3xl mx-auto space-y-8">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-2xl text-orange-600 dark:text-orange-400 mb-2">
            <Timer className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700">
          
          {/* Main Display */}
          <div className="text-center mb-12">
            <div className="text-6xl md:text-8xl font-mono font-bold tracking-tight text-slate-900 dark:text-slate-100 tabular-nums">
              {formatTime(time)}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-6 mb-12">
            <Button
              variant="outline"
              onClick={handleLap}
              disabled={!isActive}
              className={`w-16 h-16 rounded-full border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center transition-all ${!isActive ? 'opacity-50 cursor-not-allowed text-slate-400' : 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'}`}
              title={t("lap")}
            >
              <Flag className="w-6 h-6" />
            </Button>

            {!isActive ? (
              <Button
                onClick={handleStart}
                className="w-24 h-24 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/30 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
              >
                <Play className="w-10 h-10 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handlePause}
                className="w-24 h-24 rounded-full bg-amber-500 hover:bg-amber-600 text-white shadow-lg shadow-amber-500/30 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
              >
                <Pause className="w-10 h-10" />
              </Button>
            )}
            
            <Button
              variant="outline"
              onClick={handleReset}
              className="w-16 h-16 rounded-full border-2 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-all"
              title={t("reset")}
            >
              <RotateCcw className="w-6 h-6" />
            </Button>
          </div>
          
          {/* Laps */}
          {laps.length > 0 && (
            <div className="border-t border-slate-100 dark:border-slate-700 pt-6">
              <div className="flex justify-between items-center mb-4 px-4">
                <h3 className="font-semibold text-slate-700 dark:text-slate-300">{t("laps")}</h3>
                <Button variant="ghost" size="sm" onClick={() => setLaps([])} className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20">
                  <Trash2 className="w-4 h-4 mr-2" />
                  {t("clearLaps")}
                </Button>
              </div>
              <div className="max-h-64 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                {laps.map((lap) => (
                  <div key={lap.id} className="flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 px-6 py-4 rounded-xl text-sm font-mono">
                    <span className="text-slate-500">#{lap.id.toString().padStart(2, '0')}</span>
                    <span className="text-orange-500 dark:text-orange-400">+{formatTime(lap.diff)}</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{formatTime(lap.time)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
