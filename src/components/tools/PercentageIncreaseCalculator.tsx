"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { TrendingUp, ArrowRight, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PercentageIncreaseCalculator() {
  const t = useTranslations("Tools.percentage-increase-calculator.ui");
  
  const [initialValue, setInitialValue] = useState<string>("100");
  const [finalValue, setFinalValue] = useState<string>("125");
  
  const [results, setResults] = useState<{
    absoluteIncrease: number;
    percentageIncrease: number;
  } | null>(null);

  const calculateIncrease = () => {
    const initial = parseFloat(initialValue);
    const final = parseFloat(finalValue);
    
    if (isNaN(initial) || isNaN(final) || initial === 0) {
      setResults(null);
      return;
    }

    const absoluteIncrease = final - initial;
    const percentageIncrease = (absoluteIncrease / Math.abs(initial)) * 100;

    setResults({
      absoluteIncrease,
      percentageIncrease
    });
  };

  useEffect(() => {
    calculateIncrease();
  }, [initialValue, finalValue]);

  const formatNumber = (value: number, isPercent = false) => {
    return new Intl.NumberFormat(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 4
    }).format(value) + (isPercent ? "%" : "");
  }

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-emerald-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 dark:text-emerald-400 mb-2">
            <TrendingUp className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Card className="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700">
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("initialValue")}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={initialValue}
                    onChange={(e) => setInitialValue(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-lg"
                    placeholder="100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("finalValue")}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={finalValue}
                    onChange={(e) => setFinalValue(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-lg"
                    placeholder="125"
                  />
                </div>
              </div>

            </div>
          </Card>

          <div className="space-y-6">
            <Card className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-emerald-100 dark:border-emerald-900/30 overflow-hidden relative">
              
              <div className="absolute top-0 right-0 p-32 bg-emerald-50 dark:bg-emerald-900/10 rounded-full -mr-16 -mt-16 opacity-50 blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-400" />
                  {t("result")}
                </h3>
                
                {results ? (
                  <div className="space-y-4">
                    
                    <div className="p-6 rounded-2xl bg-emerald-600 dark:bg-emerald-900/40 text-white border border-emerald-500 dark:border-emerald-800 mb-2">
                      <div className="text-emerald-100 text-sm font-semibold uppercase tracking-wider mb-1">
                        {t("percentageIncrease")}
                      </div>
                      <div className="text-4xl sm:text-5xl font-black flex items-center">
                        {formatNumber(results.percentageIncrease, true)}
                        {results.percentageIncrease > 0 && <TrendingUp className="w-8 h-8 ml-3 opacity-80" />}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 flex justify-between items-center">
                      <div className="text-slate-500 dark:text-slate-400 font-medium">
                        {t("absoluteIncrease")}
                      </div>
                      <div className="text-xl font-bold text-slate-800 dark:text-slate-200">
                        {results.absoluteIncrease > 0 ? "+" : ""}{formatNumber(results.absoluteIncrease)}
                      </div>
                    </div>

                    <div className="flex items-center justify-center space-x-4 mt-6 text-slate-400">
                      <span className="font-semibold text-slate-600 dark:text-slate-300">{formatNumber(parseFloat(initialValue || "0"))}</span>
                      <ArrowRight className="w-4 h-4" />
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">{formatNumber(parseFloat(finalValue || "0"))}</span>
                    </div>

                  </div>
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 text-center">
                    <TrendingUp className="w-12 h-12 mb-4 opacity-50" />
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
