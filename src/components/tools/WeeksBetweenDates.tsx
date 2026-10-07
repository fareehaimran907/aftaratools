"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { CalendarRange, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WeeksBetweenDates() {
  const t = useTranslations("Tools.weeks-between-dates.ui");
  const [mounted, setMounted] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [includeEndDay, setIncludeEndDay] = useState(false);
  
  const [result, setResult] = useState<{
    decimalWeeks: number;
    fullWeeks: number;
    remainingDays: number;
    totalDays: number;
    isReversed: boolean;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
    const today = new Date();
    const nextMonth = new Date(today);
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    const pad = (n: number) => n.toString().padStart(2, "0");
    setStartDate(`${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`);
    setEndDate(`${nextMonth.getFullYear()}-${pad(nextMonth.getMonth() + 1)}-${pad(nextMonth.getDate())}`);
  }, []);

  useEffect(() => {
    if (!startDate || !endDate) {
      setResult(null);
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      setResult(null);
      return;
    }

    let diffMs = end.getTime() - start.getTime();
    const isReversed = diffMs < 0;

    if (isReversed) {
      diffMs = Math.abs(diffMs);
    }

    let totalDays = diffMs / (1000 * 60 * 60 * 24);

    if (includeEndDay) {
      totalDays += 1;
    }

    const decimalWeeks = +(totalDays / 7).toFixed(2);
    const fullWeeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;

    setResult({
      decimalWeeks,
      fullWeeks,
      remainingDays,
      totalDays,
      isReversed
    });
  }, [startDate, endDate, includeEndDay]);

  const reset = () => {
    const today = new Date();
    const nextMonth = new Date(today);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    
    const pad = (n: number) => n.toString().padStart(2, "0");
    setStartDate(`${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`);
    setEndDate(`${nextMonth.getFullYear()}-${pad(nextMonth.getMonth() + 1)}-${pad(nextMonth.getDate())}`);
    setIncludeEndDay(false);
  };

  if (!mounted) return null;

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-slate-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-4xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-10 space-y-4">
          <div className="p-4 bg-teal-100 dark:bg-teal-900/30 rounded-2xl text-teal-600 dark:text-teal-400 mb-2">
            <CalendarRange className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Column */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700 h-full flex flex-col justify-center">
              <div className="space-y-6">
                
                {/* Start Date */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
                    <span>{t("startDate")}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full h-14 pl-4 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all text-slate-800 dark:text-slate-100"
                    />
                  </div>
                </div>

                {/* End Date */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
                    <span>{t("endDate")}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full h-14 pl-4 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all text-slate-800 dark:text-slate-100"
                    />
                  </div>
                  {result?.isReversed && (
                    <p className="text-amber-500 text-xs mt-1">{t("endDateBeforeStart")}</p>
                  )}
                </div>

                {/* Include End Day Checkbox */}
                <div className="pt-2">
                  <label className="flex items-center gap-3 cursor-pointer group p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={includeEndDay}
                        onChange={(e) => setIncludeEndDay(e.target.checked)}
                        className="peer appearance-none w-6 h-6 border-2 border-slate-300 dark:border-slate-600 rounded-lg checked:bg-teal-500 checked:border-teal-500 transition-colors cursor-pointer"
                      />
                      <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" viewBox="0 0 14 10" fill="none">
                        <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 select-none group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {t("includeEndDay")}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 select-none mt-0.5">
                        {t("includeEndDayDesc")}
                      </div>
                    </div>
                  </label>
                </div>

                <Button
                  onClick={reset}
                  variant="outline"
                  className="w-full h-12 rounded-xl text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  {t("reset")}
                </Button>

              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-teal-400 to-emerald-500 dark:from-teal-500 dark:to-emerald-600 rounded-3xl p-1 shadow-xl shadow-teal-200/50 dark:shadow-none h-full flex flex-col relative overflow-hidden">
              <div className="bg-teal-50 dark:bg-slate-900 rounded-[1.4rem] p-6 lg:p-8 h-full flex flex-col relative z-10">
                
                {result ? (
                  <div className="flex-1 flex flex-col justify-center">
                    
                    <div className="text-center mb-8">
                      <div className="text-sm font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2">
                        {t("totalWeeks")}
                      </div>
                      <div className="flex justify-center items-baseline gap-2">
                        <span className="text-6xl md:text-7xl font-black text-slate-800 dark:text-slate-100 tabular-nums">
                          {result.decimalWeeks}
                        </span>
                        <span className="text-2xl font-medium text-slate-500 dark:text-slate-400">
                          {t("weeksLabel")}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto w-full">
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center">
                        <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 tabular-nums">
                          {result.fullWeeks}
                        </div>
                        <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                          {t("fullWeeksLabel")}
                        </div>
                      </div>
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center">
                        <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">
                          {result.remainingDays}
                        </div>
                        <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                          {t("extraDaysLabel")}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 text-center bg-teal-100/50 dark:bg-slate-800/50 py-3 px-4 rounded-xl text-sm text-slate-600 dark:text-slate-400 border border-teal-200/50 dark:border-slate-700/50">
                      {t("equivalentTo")} <strong className="text-slate-800 dark:text-slate-200">{result.totalDays}</strong> {t("daysLabel")}
                    </div>

                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 space-y-4 py-12">
                    <CalendarRange className="w-16 h-16 opacity-20" />
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
