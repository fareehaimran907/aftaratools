"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { LineChart, DollarSign, Plus, Percent, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function InvestmentCalculator() {
  const t = useTranslations("Tools.investment-calculator.ui");
  
  const [initialInvestment, setInitialInvestment] = useState<string>("10000");
  const [monthlyContribution, setMonthlyContribution] = useState<string>("500");
  const [years, setYears] = useState<string>("10");
  const [interestRate, setInterestRate] = useState<string>("7");
  
  const [results, setResults] = useState<{
    totalValue: number;
    totalInvested: number;
    totalInterest: number;
  } | null>(null);

  const calculateInvestment = () => {
    const p = parseFloat(initialInvestment);
    const pmt = parseFloat(monthlyContribution);
    const y = parseFloat(years);
    const r = parseFloat(interestRate) / 100;
    
    if (isNaN(p) || isNaN(pmt) || isNaN(y) || isNaN(r) || y < 0) {
      setResults(null);
      return;
    }

    const n = 12; // compounding monthly
    const totalMonths = y * n;
    const monthlyRate = r / n;

    // Compound interest for principal
    const principalFV = p * Math.pow(1 + monthlyRate, totalMonths);
    
    // Future value of a series for monthly contributions
    let contributionFV = 0;
    if (monthlyRate > 0) {
      contributionFV = pmt * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
    } else {
      contributionFV = pmt * totalMonths;
    }

    const totalValue = principalFV + contributionFV;
    const totalInvested = p + (pmt * totalMonths);
    const totalInterest = totalValue - totalInvested;

    setResults({
      totalValue,
      totalInvested,
      totalInterest
    });
  };

  useEffect(() => {
    calculateInvestment();
  }, [initialInvestment, monthlyContribution, years, interestRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
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
          <Card className="md:col-span-7 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("initialInvestment")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSign className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-lg"
                    placeholder="10000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("monthlyContribution")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Plus className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-lg"
                    placeholder="500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("yearsToGrow")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Calendar className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-lg"
                    placeholder="10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("expectedReturn")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <Percent className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full pl-4 pr-11 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-lg"
                    placeholder="7"
                    step="0.1"
                  />
                </div>
              </div>

            </div>
          </Card>

          <div className="md:col-span-5 space-y-6">
            <Card className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-emerald-100 dark:border-emerald-900/30 overflow-hidden relative">
              
              <div className="absolute top-0 right-0 p-32 bg-emerald-50 dark:bg-emerald-900/10 rounded-full -mr-16 -mt-16 opacity-50 blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center">
                  <LineChart className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-400" />
                  {t("result")}
                </h3>
                
                {results ? (
                  <div className="space-y-4">
                    
                    <div className="p-6 rounded-2xl bg-emerald-600 dark:bg-emerald-900/40 text-white border border-emerald-500 dark:border-emerald-800 mb-2">
                      <div className="text-emerald-100 text-sm font-semibold uppercase tracking-wider mb-1">
                        {t("totalValue")}
                      </div>
                      <div className="text-3xl sm:text-4xl font-black">
                        {formatCurrency(results.totalValue)}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 flex justify-between items-center">
                        <div className="text-slate-500 dark:text-slate-400 font-medium text-sm">
                          {t("totalInvested")}
                        </div>
                        <div className="text-lg font-bold text-slate-800 dark:text-slate-200">
                          {formatCurrency(results.totalInvested)}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50 flex justify-between items-center">
                        <div className="text-emerald-600 dark:text-emerald-400 font-medium text-sm">
                          {t("totalInterest")}
                        </div>
                        <div className="text-lg font-bold text-emerald-700 dark:text-emerald-300">
                          +{formatCurrency(results.totalInterest)}
                        </div>
                      </div>
                    </div>

                  </div>
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 text-center">
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
