"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Hourglass, Calendar, CheckCircle2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DaysUntilCalculator() {
  const t = useTranslations("Tools.days-until-calculator.ui");
  const [mounted, setMounted] = useState(false);
  const [targetDate, setTargetDate] = useState("");
  const [timeRemaining, setTimeRemaining] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
    // Default to a week from now
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    nextWeek.setHours(0, 0, 0, 0); // Midnight
    
    // YYYY-MM-DD
    const pad = (n: number) => n.toString().padStart(2, "0");
    const formatted = `${nextWeek.getFullYear()}-${pad(nextWeek.getMonth() + 1)}-${pad(nextWeek.getDate())}`;
    setTargetDate(formatted);
  }, []);

  useEffect(() => {
    if (!targetDate) {
      setTimeRemaining(null);
      return;
    }

    const target = new Date(targetDate);
    // Add timezone offset to make it midnight local time rather than UTC
    target.setMinutes(target.getMinutes() + target.getTimezoneOffset());
    target.setHours(0, 0, 0, 0);

    if (isNaN(target.getTime())) {
      setTimeRemaining(null);
      return;
    }

    const interval = setInterval(() => {
      const now = new Date();
      
      let diff = target.getTime() - now.getTime();
      const isPast = diff < 0;
      
      if (isPast) {
        diff = Math.abs(diff);
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      
      setTimeRemaining({ days, hours, minutes, seconds, isPast });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const reset = () => {
    const today = new Date();
    today.setDate(today.getDate() + 7);
    const pad = (n: number) => n.toString().padStart(2, "0");
    setTargetDate(`${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`);
  };

  const getTodayFormatted = () => {
    const today = new Date();
    return today.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (!mounted) return null;

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-slate-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-4xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-10 space-y-4">
          <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded-2xl text-amber-600 dark:text-amber-400 mb-2">
            <Hourglass className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700 h-full flex flex-col justify-center">
              <div className="space-y-6">
                
                <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-slate-800 text-sm text-center text-slate-600 dark:text-slate-400">
                  {t("todayIs")} <strong className="text-slate-800 dark:text-slate-200 block mt-1">{getTodayFormatted()}</strong>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex justify-between">
                    <span>{t("targetDate")}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={targetDate}
                      onChange={(e) => setTargetDate(e.target.value)}
                      className="w-full h-14 pl-4 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all text-slate-800 dark:text-slate-100"
                    />
                  </div>
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

          <div className="lg:col-span-7">
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 dark:from-amber-500 dark:to-orange-600 rounded-3xl p-1 shadow-xl shadow-amber-200/50 dark:shadow-none h-full flex flex-col relative overflow-hidden">
              
              <div className="bg-amber-50 dark:bg-slate-900 rounded-[1.4rem] p-6 lg:p-8 h-full flex flex-col relative z-10">
                
                {timeRemaining ? (
                  <div className="flex-1 flex flex-col justify-center py-4 text-center">
                    
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 font-semibold text-sm mx-auto mb-8">
                      {timeRemaining.isPast ? t("timeSince") : t("timeUntil")}
                    </div>

                    <div className="flex justify-center items-baseline gap-2 mb-8">
                      <span className="text-7xl md:text-8xl font-black text-slate-800 dark:text-slate-100 tabular-nums">
                        {timeRemaining.days.toLocaleString()}
                      </span>
                      <span className="text-2xl font-medium text-slate-500 dark:text-slate-400">
                        {timeRemaining.days === 1 ? t("dayLabelSingular") : t("dayLabel")}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-sm mx-auto w-full">
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="text-2xl font-bold text-slate-700 dark:text-slate-200 tabular-nums">{timeRemaining.hours.toString().padStart(2, "0")}</div>
                        <div className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">{t("hoursLabel")}</div>
                      </div>
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700">
                        <div className="text-2xl font-bold text-slate-700 dark:text-slate-200 tabular-nums">{timeRemaining.minutes.toString().padStart(2, "0")}</div>
                        <div className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">{t("minutesLabel")}</div>
                      </div>
                      <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm border border-slate-100 dark:border-slate-700 relative overflow-hidden">
                        <div className="absolute inset-0 bg-amber-500/5 dark:bg-amber-500/10 animate-pulse"></div>
                        <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 tabular-nums relative z-10">{timeRemaining.seconds.toString().padStart(2, "0")}</div>
                        <div className="text-xs font-medium text-amber-600/70 dark:text-amber-400/70 mt-1 uppercase tracking-wider relative z-10">{t("secondsLabel")}</div>
                      </div>
                    </div>

                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 space-y-4 py-12">
                    <Calendar className="w-16 h-16 opacity-20" />
                    <p>{t("selectTargetDate")}</p>
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
