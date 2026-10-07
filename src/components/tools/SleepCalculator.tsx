"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Moon, Sun, Clock, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function SleepCalculator() {
  const t = useTranslations("Tools.sleep-calculator.ui");
  
  const [mode, setMode] = useState<'wake' | 'sleep'>('wake'); // 'wake': I need to wake up at X, 'sleep': I'm going to sleep at X
  const [time, setTime] = useState<string>("07:00");
  const [results, setResults] = useState<{ time: Date; cycles: number; isOptimal: boolean }[]>([]);

  const calculateSleepTimes = () => {
    const cycleLength = 90; // minutes
    const fallAsleepTime = 15; // minutes
    
    // Parse time
    const baseDate = new Date();
    const [hours, minutes] = time.split(':').map(Number);
    baseDate.setHours(hours, minutes, 0, 0);
    
    let calculatedResults: { time: Date; cycles: number; isOptimal: boolean }[] = [];

    if (mode === 'wake') {
      // Calculate bedtimes (subtracting cycles + 15 mins)
      for (let i = 6; i >= 3; i--) {
        const totalSleep = (i * cycleLength) + fallAsleepTime;
        calculatedResults.push({
          time: new Date(baseDate.getTime() - totalSleep * 60000),
          cycles: i,
          isOptimal: i === 5 || i === 6
        });
      }
    } else {
      // Calculate wake up times (adding cycles + 15 mins)
      for (let i = 3; i <= 6; i++) {
        const totalSleep = (i * cycleLength) + fallAsleepTime;
        calculatedResults.push({
          time: new Date(baseDate.getTime() + totalSleep * 60000),
          cycles: i,
          isOptimal: i === 5 || i === 6
        });
      }
    }
    
    setResults(calculatedResults);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    setResults([]); // Clear results when time changes
  };

  const handleModeChange = (newMode: 'wake' | 'sleep') => {
    setMode(newMode);
    setResults([]);
  };

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-indigo-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-3xl mx-auto space-y-8">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl text-indigo-600 dark:text-indigo-400 mb-2">
            <Moon className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <Card className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700">
          
          <div className="flex justify-center gap-2 mb-8 bg-slate-50 dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 w-fit mx-auto">
            <Button
              variant="ghost"
              onClick={() => handleModeChange('wake')}
              className={`rounded-lg px-6 py-2 transition-all ${mode === 'wake' ? 'bg-white dark:bg-slate-800 shadow-sm text-indigo-600 dark:text-indigo-400 font-bold' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              <Sun className="w-4 h-4 mr-2" />
              {t("wakeAt")}
            </Button>
            <Button
              variant="ghost"
              onClick={() => handleModeChange('sleep')}
              className={`rounded-lg px-6 py-2 transition-all ${mode === 'sleep' ? 'bg-white dark:bg-slate-800 shadow-sm text-indigo-600 dark:text-indigo-400 font-bold' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              <Moon className="w-4 h-4 mr-2" />
              {t("sleepAt")}
            </Button>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center">
              <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">
                {mode === 'wake' ? t("iWantToWakeUpAt") : t("iWillGoToBedAt")}
              </label>
              <input
                type="time"
                value={time}
                onChange={handleTimeChange}
                className="text-4xl md:text-5xl font-bold text-center bg-transparent border-b-2 border-indigo-200 dark:border-indigo-800 focus:border-indigo-500 dark:focus:border-indigo-400 outline-none pb-2 text-slate-800 dark:text-slate-100"
              />
            </div>
            
            <Button
              onClick={calculateSleepTimes}
              className="w-full max-w-sm mt-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-6 text-lg font-semibold shadow-lg shadow-indigo-600/20"
            >
              <Calculator className="w-5 h-5 mr-2" />
              {t("calculate")}
            </Button>
          </div>
          
          {results.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-700 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-xl font-bold text-center mb-2 text-slate-800 dark:text-slate-100">
                {mode === 'wake' ? t("youShouldGoToBedAt") : t("youShouldWakeUpAt")}
              </h3>
              <p className="text-center text-slate-500 dark:text-slate-400 text-sm mb-8">
                {t("resultsDescription")}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.map((result, idx) => (
                  <div 
                    key={idx} 
                    className={`p-6 rounded-2xl flex items-center justify-between border ${result.isOptimal ? 'bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-800 shadow-sm' : 'bg-slate-50 border-slate-200 dark:bg-slate-900/50 dark:border-slate-700'}`}
                  >
                    <div>
                      <div className={`text-2xl font-bold ${result.isOptimal ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-700 dark:text-slate-300'}`}>
                        {result.time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                        {result.cycles} {t("cycles")} ({(result.cycles * 90) / 60} {t("hours")})
                      </div>
                    </div>
                    {result.isOptimal && (
                      <div className="px-3 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold rounded-full uppercase tracking-wider">
                        {t("optimal")}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </Card>
      </div>
    </div>
  );
}
