"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { BadgeDollarSign, CalendarDays, Clock, DollarSign, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function SalaryToHourlyCalculator() {
  const t = useTranslations("Tools.salary-to-hourly-calculator.ui");
  
  const [annualSalary, setAnnualSalary] = useState<string>("50000");
  const [hoursPerWeek, setHoursPerWeek] = useState<string>("40");
  const [daysPerWeek, setDaysPerWeek] = useState<string>("5");
  const [weeksPerYear, setWeeksPerYear] = useState<string>("52");
  
  const [results, setResults] = useState<{
    hourly: number;
    daily: number;
    weekly: number;
    biWeekly: number;
    monthly: number;
  } | null>(null);

  const calculateSalary = () => {
    const salary = parseFloat(annualSalary);
    const hpw = parseFloat(hoursPerWeek || "40");
    const dpw = parseFloat(daysPerWeek || "5");
    const wpy = parseFloat(weeksPerYear || "52");
    
    if (isNaN(salary) || salary <= 0 || isNaN(hpw) || hpw <= 0 || isNaN(dpw) || dpw <= 0 || isNaN(wpy) || wpy <= 0) {
      setResults(null);
      return;
    }

    const monthly = salary / 12;
    const biWeekly = salary / 26;
    const weekly = salary / wpy;
    const daily = weekly / dpw;
    const hourly = weekly / hpw;

    setResults({
      hourly,
      daily,
      weekly,
      biWeekly,
      monthly
    });
  };

  useEffect(() => {
    calculateSalary();
  }, [annualSalary, hoursPerWeek, daysPerWeek, weeksPerYear]);

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  }

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-emerald-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-5xl mx-auto space-y-8">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 dark:text-emerald-400 mb-2">
            <BadgeDollarSign className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <Card className="lg:col-span-1 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700">
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("annualSalary")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSign className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={annualSalary}
                    onChange={(e) => setAnnualSalary(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-lg"
                    placeholder="50000"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-4">{t("workSchedule")}</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                      {t("hoursPerWeek")}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Clock className="w-4 h-4 text-slate-400" />
                      </div>
                      <input
                        type="number"
                        value={hoursPerWeek}
                        onChange={(e) => setHoursPerWeek(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                      {t("daysPerWeek")}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CalendarDays className="w-4 h-4 text-slate-400" />
                      </div>
                      <input
                        type="number"
                        value={daysPerWeek}
                        onChange={(e) => setDaysPerWeek(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                      {t("weeksPerYear")}
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CalendarDays className="w-4 h-4 text-slate-400" />
                      </div>
                      <input
                        type="number"
                        value={weeksPerYear}
                        onChange={(e) => setWeeksPerYear(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-emerald-100 dark:border-emerald-900/30 overflow-hidden relative">
              
              <div className="absolute top-0 right-0 p-32 bg-emerald-50 dark:bg-emerald-900/10 rounded-full -mr-16 -mt-16 opacity-50 blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-400" />
                  {t("salaryBreakdown")}
                </h3>
                
                {results ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="sm:col-span-2 p-6 rounded-2xl bg-emerald-600 dark:bg-emerald-900/40 text-white border border-emerald-500 dark:border-emerald-800 mb-2">
                      <div className="text-emerald-100 text-sm font-semibold uppercase tracking-wider mb-1">
                        {t("hourlyRate")}
                      </div>
                      <div className="text-4xl sm:text-5xl font-black">
                        {formatNumber(results.hourly)}
                      </div>
                    </div>

                    {[
                      { label: t("monthly"), value: results.monthly },
                      { label: t("biWeekly"), value: results.biWeekly },
                      { label: t("weekly"), value: results.weekly },
                      { label: t("daily"), value: results.daily },
                    ].map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 flex justify-between items-center">
                        <div className="text-slate-500 dark:text-slate-400 font-medium">
                          {item.label}
                        </div>
                        <div className="text-xl font-bold text-slate-800 dark:text-slate-200">
                          {formatNumber(item.value)}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-16 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 text-center">
                    <BadgeDollarSign className="w-12 h-12 mb-4 opacity-50" />
                    <p>{t("enterDetails")}</p>
                  </div>
                )}
              </div>
            </Card>
          </div>

        </div>

      </div>
    </div>
  );
}
