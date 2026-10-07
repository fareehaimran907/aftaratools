"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Clock, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TimeDifferenceCalculator() {
  const t = useTranslations("Tools.time-difference-calculator.ui");
  const [mounted, setMounted] = useState(false);
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");
  
  const [result, setResult] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isReversed: boolean;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const pad = (n: number) => n.toString().padStart(2, "0");
    const formatDt = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
    
    setStartDateTime(formatDt(today));
    setEndDateTime(formatDt(tomorrow));
  }, []);

  useEffect(() => {
    if (!startDateTime || !endDateTime) {
      setResult(null);
      return;
    }

    const start = new Date(startDateTime);
    const end = new Date(endDateTime);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      setResult(null);
      return;
    }

    let diffMs = end.getTime() - start.getTime();
    const isReversed = diffMs < 0;

    if (isReversed) {
      diffMs = Math.abs(diffMs);
    }

    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    setResult({
      days,
      hours,
      minutes,
      seconds,
      isReversed
    });
  }, [startDateTime, endDateTime]);

  const reset = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const pad = (n: number) => n.toString().padStart(2, "0");
    const formatDt = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
    
    setStartDateTime(formatDt(today));
    setEndDateTime(formatDt(tomorrow));
  };

  if (!mounted) return null;

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-slate-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-4xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-10 space-y-4">
          <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl text-indigo-600 dark:text-indigo-400 mb-2">
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
                    <span>{t("startDateTime")}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="datetime-local"
                      step="1"
                      value={startDateTime}
                      onChange={(e) => setStartDateTime(e.target.value)}
                      className="w-full h-14 pl-4 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-slate-800 dark:text-slate-100"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
                    <span>{t("endDateTime")}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="datetime-local"
                      step="1"
                      value={endDateTime}
                      onChange={(e) => setEndDateTime(e.target.value)}
                      className="w-full h-14 pl-4 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-slate-800 dark:text-slate-100"
                    />
                  </div>
                  {result?.isReversed && (
                    <p className="text-amber-500 text-xs mt-1">{t("reversedNote")}</p>
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
            <div className="bg-gradient-to-br from-indigo-400 to-violet-500 dark:from-indigo-500 dark:to-violet-600 rounded-3xl p-1 shadow-xl shadow-indigo-200/50 dark:shadow-none h-full flex flex-col relative overflow-hidden">
              <div className="bg-indigo-50 dark:bg-slate-900 rounded-[1.4rem] p-6 lg:p-8 h-full flex flex-col relative z-10">
                
                {result ? (
                  <div className="flex-1 flex flex-col justify-center">
                    
                    <div className="text-center mb-8">
                      <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-4">
                        {t("difference")}
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-lg mx-auto w-full">
                        
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center">
                          <div className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                            {result.days}
                          </div>
                          <div className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                            {t("daysLabel")}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center">
                          <div className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                            {result.hours.toString().padStart(2, '0')}
                          </div>
                          <div className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                            {t("hoursLabel")}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center">
                          <div className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
                            {result.minutes.toString().padStart(2, '0')}
                          </div>
                          <div className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                            {t("minutesLabel")}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center">
                          <div className="text-3xl lg:text-4xl font-bold text-indigo-500 dark:text-indigo-400 tabular-nums">
                            {result.seconds.toString().padStart(2, '0')}
                          </div>
                          <div className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                            {t("secondsLabel")}
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 space-y-4 py-12">
                    <Clock className="w-16 h-16 opacity-20" />
                    <p>{t("selectDatesToCalculate")}</p>
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
