"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Clock, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TimeDurationCalculator() {
  const t = useTranslations("Tools.time-duration-calculator.ui");
  const [mounted, setMounted] = useState(false);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:30");
  
  const [result, setResult] = useState<{
    hours: number;
    minutes: number;
    totalMinutes: number;
    decimalHours: number;
    crossesMidnight: boolean;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!startTime || !endTime) {
      setResult(null);
      return;
    }

    const [startH, startM] = startTime.split(":").map(Number);
    const [endH, endM] = endTime.split(":").map(Number);

    if (isNaN(startH) || isNaN(startM) || isNaN(endH) || isNaN(endM)) {
      setResult(null);
      return;
    }

    let startTotalMins = startH * 60 + startM;
    let endTotalMins = endH * 60 + endM;

    let crossesMidnight = false;
    if (endTotalMins < startTotalMins) {
      endTotalMins += 24 * 60;
      crossesMidnight = true;
    }

    const totalMinutes = endTotalMins - startTotalMins;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const decimalHours = +(totalMinutes / 60).toFixed(2);

    setResult({
      hours,
      minutes,
      totalMinutes,
      decimalHours,
      crossesMidnight
    });
  }, [startTime, endTime]);

  const reset = () => {
    setStartTime("09:00");
    setEndTime("17:30");
  };

  if (!mounted) return null;

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-slate-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-4xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-10 space-y-4">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400 mb-2">
            <Clock className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700 h-full flex flex-col justify-center">
              <div className="space-y-6">
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
                    <span>{t("startTime")}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="w-full h-14 pl-4 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-800 dark:text-slate-100"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
                    <span>{t("endTime")}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="w-full h-14 pl-4 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all text-slate-800 dark:text-slate-100"
                    />
                  </div>
                  {result?.crossesMidnight && (
                    <p className="text-amber-500 text-xs mt-1">{t("crossesMidnightNote")}</p>
                  )}
                </div>

                <Button
                  onClick={reset}
                  variant="outline"
                  className="w-full h-12 rounded-xl text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 mt-4"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  {t("reset")}
                </Button>

              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-blue-400 to-indigo-500 dark:from-blue-500 dark:to-indigo-600 rounded-3xl p-1 shadow-xl shadow-blue-200/50 dark:shadow-none h-full flex flex-col relative overflow-hidden">
              <div className="bg-blue-50 dark:bg-slate-900 rounded-[1.4rem] p-6 lg:p-8 h-full flex flex-col relative z-10">
                
                {result ? (
                  <div className="flex-1 flex flex-col justify-center">
                    
                    <div className="text-center mb-8">
                      <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                        {t("duration")}
                      </div>
                      <div className="flex justify-center items-baseline gap-2">
                        <span className="text-5xl md:text-6xl font-black text-slate-800 dark:text-slate-100 tabular-nums">
                          {result.hours}<span className="text-3xl text-slate-500 dark:text-slate-400 font-bold ml-1">{t("hLabel")}</span>
                        </span>
                        <span className="text-5xl md:text-6xl font-black text-slate-800 dark:text-slate-100 tabular-nums ml-2">
                          {result.minutes}<span className="text-3xl text-slate-500 dark:text-slate-400 font-bold ml-1">{t("mLabel")}</span>
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto w-full">
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">
                          {result.decimalHours}
                        </div>
                        <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                          {t("decimalHoursLabel")}
                        </div>
                      </div>
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center">
                        <div className="text-3xl font-bold text-indigo-500 dark:text-indigo-400 tabular-nums">
                          {result.totalMinutes}
                        </div>
                        <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                          {t("totalMinutesLabel")}
                        </div>
                      </div>
                    </div>

                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 space-y-4 py-12">
                    <Clock className="w-16 h-16 opacity-20" />
                    <p>{t("selectTimesToCalculate")}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
