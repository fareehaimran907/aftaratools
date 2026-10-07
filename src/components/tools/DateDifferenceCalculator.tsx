"use client";
// Force HMR reload

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { CalendarRange, ArrowRight, RotateCcw, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DateDifferenceCalculator() {
  const t = useTranslations("Tools.date-difference-calculator.ui");
  const [mounted, setMounted] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [includeEndDay, setIncludeEndDay] = useState(false);
  
  // Real time results
  const [result, setResult] = useState<{
    years: number;
    months: number;
    days: number;
    totalDays: number;
    totalWeeks: number;
    remainingDays: number;
    totalMonths: number;
    isNegative: boolean;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
    // Set default dates
    const today = new Date();
    const nextMonth = new Date();
    nextMonth.setMonth(today.getMonth() + 1);
    
    setStartDate(today.toISOString().split("T")[0]);
    setEndDate(nextMonth.toISOString().split("T")[0]);
  }, []);

  useEffect(() => {
    if (!startDate || !endDate) {
      setResult(null);
      return;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Check if valid dates
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      setResult(null);
      return;
    }

    // Set time to midnight for accurate day calculation
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);

    const isNegative = end.getTime() < start.getTime();
    
    const s = isNegative ? new Date(end.getTime()) : new Date(start.getTime());
    const e = isNegative ? new Date(start.getTime()) : new Date(end.getTime());
    
    // Total days difference
    const diffTime = Math.abs(e.getTime() - s.getTime());
    let totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (includeEndDay) {
      totalDays += 1;
    }

    // Exact years, months, days logic
    let years = e.getFullYear() - s.getFullYear();
    let months = e.getMonth() - s.getMonth();
    let days = e.getDate() - s.getDate();

    if (days < 0) {
      months -= 1;
      // Get days in previous month
      const prevMonth = new Date(e.getFullYear(), e.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }
    
    if (includeEndDay) {
      days += 1;
      const daysInCurrentMonth = new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
      if (days > daysInCurrentMonth) {
        days -= daysInCurrentMonth;
        months += 1;
        if (months >= 12) {
          months -= 12;
          years += 1;
        }
      }
    }

    const totalWeeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;
    
    // Total months calculation (approximate for overall months)
    let totalMonths = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
    if (e.getDate() < s.getDate()) {
      totalMonths -= 1;
    }

    setResult({
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      remainingDays,
      totalMonths,
      isNegative
    });

  }, [startDate, endDate, includeEndDay]);

  const reset = () => {
    const today = new Date();
    setStartDate(today.toISOString().split("T")[0]);
    setEndDate(today.toISOString().split("T")[0]);
    setIncludeEndDay(false);
  };

  if (!mounted) return null;

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-slate-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-4xl mx-auto">
        
        {/* Header / Description */}
        <div className="flex flex-col items-center text-center mb-10 space-y-4">
          <div className="p-4 bg-sky-100 dark:bg-sky-900/30 rounded-2xl text-sky-600 dark:text-sky-400 mb-2">
            <CalendarRange className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("dateDifferenceTitle")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("dateDifferenceDesc")}</p>
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
                      className="w-full h-14 pl-4 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all text-slate-800 dark:text-slate-100"
                    />
                  </div>
                </div>

                <div className="flex justify-center -my-2 relative z-10">
                  <div className="bg-white dark:bg-slate-800 p-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-400">
                    <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
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
                      className="w-full h-14 pl-4 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none transition-all text-slate-800 dark:text-slate-100"
                    />
                  </div>
                </div>

                {/* Include End Day Toggle */}
                <label className="flex items-start gap-3 p-4 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <div className="relative flex items-center mt-0.5">
                    <input
                      type="checkbox"
                      checked={includeEndDay}
                      onChange={(e) => setIncludeEndDay(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 border-2 border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900 peer-checked:bg-sky-500 peer-checked:border-sky-500 transition-colors"></div>
                    <svg className="absolute w-3.5 h-3.5 top-0.5 left-0.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-slate-800 dark:text-slate-200">{t("includeEndDay")}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{t("includeEndDayDesc")}</div>
                  </div>
                </label>

                {/* Reset Button */}
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
            <div className="bg-sky-500 dark:bg-sky-600 rounded-3xl p-1 shadow-xl shadow-sky-200/50 dark:shadow-none h-full flex flex-col relative overflow-hidden">
              
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              
              <div className="bg-sky-50 dark:bg-slate-900 rounded-[1.4rem] p-6 lg:p-8 h-full flex flex-col relative z-10">
                <h3 className="text-sky-800 dark:text-sky-400 font-bold mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {t("timeDifference")}
                </h3>
                
                {result ? (
                  <div className="flex-1 flex flex-col justify-center space-y-8">
                    
                    {/* Primary Result (Y/M/D) */}
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                        {t("exactDifference")}
                      </div>
                      <div className="flex justify-center items-end gap-2 flex-wrap">
                        {result.years > 0 && (
                          <div className="flex items-baseline gap-1">
                            <span className="text-4xl md:text-5xl font-black text-slate-800 dark:text-slate-100">{result.years}</span>
                            <span className="text-lg font-medium text-slate-500 dark:text-slate-400">{t("yearsLabel")}</span>
                          </div>
                        )}
                        {result.months > 0 && (
                          <div className="flex items-baseline gap-1">
                            {result.years > 0 && <span className="text-2xl font-light text-slate-300 dark:text-slate-700 mx-1">,</span>}
                            <span className="text-4xl md:text-5xl font-black text-slate-800 dark:text-slate-100">{result.months}</span>
                            <span className="text-lg font-medium text-slate-500 dark:text-slate-400">{t("monthsLabel")}</span>
                          </div>
                        )}
                        {(result.days > 0 || (result.years === 0 && result.months === 0)) && (
                          <div className="flex items-baseline gap-1">
                            {(result.years > 0 || result.months > 0) && <span className="text-2xl font-light text-slate-300 dark:text-slate-700 mx-1">,</span>}
                            <span className="text-4xl md:text-5xl font-black text-slate-800 dark:text-slate-100">{result.days}</span>
                            <span className="text-lg font-medium text-slate-500 dark:text-slate-400">{t("daysLabel")}</span>
                          </div>
                        )}
                      </div>
                      {result.isNegative && (
                        <div className="mt-3 text-amber-600 dark:text-amber-400 font-medium text-sm flex items-center justify-center gap-1.5">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          {t("endDateBeforeStart")}
                        </div>
                      )}
                    </div>

                    <hr className="border-slate-200 dark:border-slate-800" />

                    {/* Alternative Formats */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center">
                        <span className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t("totalDays")}</span>
                        <span className="text-2xl font-bold text-sky-600 dark:text-sky-400">{result.totalDays.toLocaleString()}</span>
                      </div>

                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center">
                        <span className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t("inWeeks")}</span>
                        <div className="flex flex-col items-center">
                          <span className="text-xl font-bold text-sky-600 dark:text-sky-400">{result.totalWeeks.toLocaleString()} <span className="text-sm font-medium">{t("weeksShort")}</span></span>
                          {result.remainingDays > 0 && <span className="text-xs font-medium text-slate-400 mt-0.5">+{result.remainingDays} {t("daysShort")}</span>}
                        </div>
                      </div>

                      <div className="col-span-2 md:col-span-1 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center">
                        <span className="text-sm text-slate-500 dark:text-slate-400 mb-1">{t("approxMonths")}</span>
                        <span className="text-2xl font-bold text-sky-600 dark:text-sky-400">{result.totalMonths.toLocaleString()}</span>
                      </div>

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
