"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Percent, DollarSign, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

export function SimpleInterestCalculator() {
  const t = useTranslations("Tools.simple-interest-calculator.ui");
  
  const [principal, setPrincipal] = useState<string>("10000");
  const [rate, setRate] = useState<string>("5");
  const [time, setTime] = useState<string>("5");
  const [timeUnit, setTimeUnit] = useState<"years" | "months">("years");
  
  const [results, setResults] = useState<{
    interest: number;
    totalAmount: number;
  } | null>(null);

  const calculateInterest = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const tVal = parseFloat(time);
    
    if (isNaN(p) || isNaN(r) || isNaN(tVal) || p <= 0 || r < 0 || tVal <= 0) {
      setResults(null);
      return;
    }

    // Convert time to years for formula
    const years = timeUnit === "years" ? tVal : tVal / 12;

    const interest = (p * r * years) / 100;
    const totalAmount = p + interest;

    setResults({
      interest,
      totalAmount
    });
  };

  useEffect(() => {
    calculateInterest();
  }, [principal, rate, time, timeUnit]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "USD"
    }).format(value);
  }

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-emerald-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 dark:text-emerald-400 mb-2">
            <Percent className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <Card className="md:col-span-6 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700">
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("principalAmount")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSign className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-lg"
                    placeholder="10000"
                    min="1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("interestRate")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Percent className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-lg"
                    placeholder="5"
                    step="0.1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("timePeriod")}
                </label>
                <div className="relative flex gap-2">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Clock className="w-5 h-5 text-slate-400" />
                    </div>
                    <input
                      type="number"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-lg"
                      placeholder="5"
                      min="1"
                    />
                  </div>
                  <select
                    value={timeUnit}
                    onChange={(e) => setTimeUnit(e.target.value as "years" | "months")}
                    className="w-32 px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-sm appearance-none"
                  >
                    <option value="years">{t("years")}</option>
                    <option value="months">{t("months")}</option>
                  </select>
                </div>
              </div>

            </div>
          </Card>

          <div className="md:col-span-6 space-y-6">
            <Card className="bg-emerald-600 dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border-0 overflow-hidden relative text-white">
              
              <div className="absolute top-0 right-0 p-32 bg-emerald-500 dark:bg-emerald-900/20 rounded-full -mr-16 -mt-16 opacity-50 blur-3xl pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                
                {results ? (
                  <>
                    <div className="flex justify-between items-center border-b border-emerald-500/50 dark:border-slate-700 pb-6">
                      <div>
                        <div className="text-emerald-100 dark:text-slate-400 font-semibold mb-1">
                          {t("totalInterest")}
                        </div>
                      </div>
                      <div className="text-3xl font-black">
                        {formatCurrency(results.interest)}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pb-2">
                      <div>
                        <div className="text-emerald-100 dark:text-slate-400 font-semibold mb-1">
                          {t("totalAmount")}
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-white flex items-center gap-2">
                        {formatCurrency(results.totalAmount)}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center text-emerald-200 dark:text-slate-500 text-center">
                    <Percent className="w-12 h-12 mb-4 opacity-50" />
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
