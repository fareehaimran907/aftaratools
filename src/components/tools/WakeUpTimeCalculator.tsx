"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Sunrise, Calculator, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function WakeUpTimeCalculator() {
  const t = useTranslations("Tools.wake-up-time-calculator.ui");
  
  const [mode, setMode] = useState<'now' | 'later'>('now');
  const [time, setTime] = useState<string>("22:30");
  const [results, setResults] = useState<{ time: Date; cycles: number; isOptimal: boolean }[]>([]);

  useEffect(() => {
    if (mode === 'now') {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    }
  }, [mode]);

  const calculateWakeUpTimes = () => {
    const cycleLength = 90; // minutes
    const fallAsleepTime = 15; // minutes
    
    // Parse time
    const baseDate = new Date();
    
    if (mode === 'now') {
      // Use current time
      const now = new Date();
      baseDate.setHours(now.getHours(), now.getMinutes(), 0, 0);
    } else {
      const [hours, minutes] = time.split(':').map(Number);
      baseDate.setHours(hours, minutes, 0, 0);
    }
    
    let calculatedResults: { time: Date; cycles: number; isOptimal: boolean }[] = [];

    // Calculate wake up times (adding cycles + 15 mins)
    for (let i = 3; i <= 6; i++) {
      const totalSleep = (i * cycleLength) + fallAsleepTime;
      calculatedResults.push({
        time: new Date(baseDate.getTime() + totalSleep * 60000),
        cycles: i,
        isOptimal: i === 5 || i === 6
      });
    }
    
    setResults(calculatedResults);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
    setMode('later');
    setResults([]); // Clear results when time changes
  };

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-indigo-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-3xl mx-auto space-y-8">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl text-indigo-600 dark:text-indigo-400 mb-2">
            <Sunrise className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <Card className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700">
          
          <div className="flex flex-col items-center gap-6">
            
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Button
                variant={mode === 'now' ? 'default' : 'outline'}
                onClick={() => {
                  setMode('now');
                  setResults([]);
                }}
                className={`rounded-xl px-6 py-6 transition-all ${mode === 'now' ? 'bg-indigo-600 text-white hover:bg-indigo-700' : ''}`}
              >
                <Moon className="w-5 h-5 mr-2" />
                {t("sleepNow")}
              </Button>
              <div className="text-slate-400 font-medium">OR</div>
              <div className="flex flex-col items-center">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
                  {t("sleepAtTime")}
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={handleTimeChange}
                  className="text-2xl font-bold text-center bg-transparent border-b-2 border-indigo-200 dark:border-indigo-800 focus:border-indigo-500 dark:focus:border-indigo-400 outline-none pb-1 text-slate-800 dark:text-slate-100"
                />
              </div>
            </div>
            
            <Button
              onClick={calculateWakeUpTimes}
              className="w-full max-w-sm mt-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl py-6 text-lg font-semibold shadow-lg shadow-indigo-600/20"
            >
              <Calculator className="w-5 h-5 mr-2" />
              {t("calculate")}
            </Button>
          </div>
          
          {results.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-700 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-xl font-bold text-center mb-2 text-slate-800 dark:text-slate-100">
                {t("youShouldWakeUpAt")}
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
