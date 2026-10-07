"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { LineChart, DollarSign, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function RoiCalculator() {
  const t = useTranslations("Tools.roi-calculator.ui");
  
  const [investment, setInvestment] = useState<string>("1000");
  const [returnAmount, setReturnAmount] = useState<string>("1250");
  
  const [results, setResults] = useState<{
    roi: number;
    investmentGain: number;
  } | null>(null);

  const calculateROI = () => {
    const inv = parseFloat(investment);
    const ret = parseFloat(returnAmount);
    
    if (isNaN(inv) || isNaN(ret) || inv <= 0) {
      setResults(null);
      return;
    }

    const investmentGain = ret - inv;
    const roi = (investmentGain / inv) * 100;

    setResults({
      roi,
      investmentGain
    });
  };

  useEffect(() => {
    calculateROI();
  }, [investment, returnAmount]);

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
            <LineChart className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <Card className="md:col-span-6 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700">
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("investmentAmount")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSign className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-lg"
                    placeholder="1000"
                    min="1"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("returnAmount")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSign className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={returnAmount}
                    onChange={(e) => setReturnAmount(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-lg"
                    placeholder="1250"
                  />
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
                          {t("returnOnInvestment")}
                        </div>
                      </div>
                      <div className="text-4xl font-black flex items-center gap-2">
                        {results.roi.toFixed(2)}%
                        <TrendingUp className="w-6 h-6 text-emerald-200" />
                      </div>
                    </div>

                    <div className="flex justify-between items-center pb-2">
                      <div>
                        <div className="text-emerald-100 dark:text-slate-400 font-semibold mb-1">
                          {t("investmentGain")}
                        </div>
                      </div>
                      <div className="text-3xl font-bold">
                        {formatCurrency(results.investmentGain)}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center text-emerald-200 dark:text-slate-500 text-center">
                    <LineChart className="w-12 h-12 mb-4 opacity-50" />
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
