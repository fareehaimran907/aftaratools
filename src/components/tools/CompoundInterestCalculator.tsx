"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { TrendingUp, Info, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CompoundInterestCalculator() {
  const t = useTranslations("Tools.compound-interest-calculator.ui");
  
  const [principal, setPrincipal] = useState<string>("10000");
  const [rate, setRate] = useState<string>("5");
  const [time, setTime] = useState<string>("10");
  const [compoundingFrequency, setCompoundingFrequency] = useState<string>("12"); // Monthly by default
  const [monthlyContribution, setMonthlyContribution] = useState<string>("100");
  
  const [results, setResults] = useState<{
    futureValue: number;
    totalInterest: number;
    totalPrincipal: number;
  } | null>(null);

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal);
    const R = parseFloat(rate); // Annual interest rate in %
    const T = parseFloat(time); // Time in years
    const n = parseFloat(compoundingFrequency); // Compounding periods per year
    const PMT = parseFloat(monthlyContribution) || 0;

    if (isNaN(P) || isNaN(R) || isNaN(T) || P < 0 || T <= 0) {
      setResults(null);
      return;
    }

    const r = R / 100; // Decimal interest rate
    
    // Future value of the principal
    const futureValueOfPrincipal = P * Math.pow(1 + r / n, n * T);

    // Future value of a series (if there are monthly contributions)
    // Formula for Future Value of a Series: PMT * (((1 + r/n)^(n*t) - 1) / (r/n))
    // We assume contributions are made at the end of each period, and to align with monthly contributions,
    // we should ideally compound monthly for the series part.
    // To simplify and match standard compound interest calculators with monthly additions:
    const months = T * 12;
    const monthlyRate = r / 12;
    let futureValueOfSeries = 0;
    
    if (PMT > 0 && monthlyRate > 0) {
      futureValueOfSeries = PMT * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    } else if (PMT > 0 && monthlyRate === 0) {
      futureValueOfSeries = PMT * months;
    }

    // In a strict financial calculator, if compounding is e.g. Annually (n=1), but contributions are Monthly,
    // it gets complex. The standard simplification for these tools when PMT is monthly is to use monthly rate for the PMT portion
    // or just assume compounding is also monthly. For flexibility, we'll keep the principal compounding as selected,
    // but the series will use monthly compounding (as payments are monthly).

    const totalFutureValue = futureValueOfPrincipal + futureValueOfSeries;
    const totalInvested = P + (PMT * months);
    const totalInt = totalFutureValue - totalInvested;

    setResults({
      futureValue: totalFutureValue,
      totalInterest: totalInt,
      totalPrincipal: totalInvested,
    });
  };

  useEffect(() => {
    calculateCompoundInterest();
  }, [principal, rate, time, compoundingFrequency, monthlyContribution]);

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700">
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("initialInvestment")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Wallet className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="10000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("monthlyContribution")}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(e.target.value)}
                    className="w-full pl-4 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("annualInterestRate")}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    className="w-full pl-4 pr-10 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="5"
                    step="0.1"
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <span className="text-slate-400 font-semibold">%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {t("yearsToGrow")}
                  </label>
                  <input
                    type="number"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="10"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {t("compoundFrequency")}
                  </label>
                  <select
                    value={compoundingFrequency}
                    onChange={(e) => setCompoundingFrequency(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-slate-700 dark:text-slate-300"
                  >
                    <option value="1">{t("annually")}</option>
                    <option value="2">{t("semiAnnually")}</option>
                    <option value="4">{t("quarterly")}</option>
                    <option value="12">{t("monthly")}</option>
                    <option value="365">{t("daily")}</option>
                  </select>
                </div>
              </div>

              <Button
                onClick={calculateCompoundInterest}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-6 text-lg font-semibold shadow-lg shadow-emerald-600/20"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                {t("calculate")}
              </Button>

            </div>
          </Card>

          <div className="space-y-6">
            <Card className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-emerald-100 dark:border-emerald-900/30 overflow-hidden relative h-full">
              
              <div className="absolute top-0 right-0 p-32 bg-emerald-50 dark:bg-emerald-900/10 rounded-full -mr-16 -mt-16 opacity-50 blur-3xl pointer-events-none"></div>

              <div className="relative z-10 h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                  {t("summary")}
                </h3>
                
                {results ? (
                  <div className="space-y-6">
                    
                    <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 text-center">
                      <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1 uppercase tracking-wider">
                        {t("futureValue")}
                      </div>
                      <div className="text-4xl font-black text-emerald-700 dark:text-emerald-300 break-all">
                        {formatNumber(results.futureValue)}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider break-words">
                          {t("totalContributions")}
                        </div>
                        <div className="text-xl font-bold text-slate-800 dark:text-slate-200">
                          {formatNumber(results.totalPrincipal)}
                        </div>
                      </div>
                      
                      <div className="p-5 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-800/30">
                        <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1 uppercase tracking-wider break-words">
                          {t("totalInterestEarned")}
                        </div>
                        <div className="text-xl font-bold text-emerald-700 dark:text-emerald-300">
                          {formatNumber(results.totalInterest)}
                        </div>
                      </div>
                    </div>

                  </div>
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 text-center flex-1">
                    <Info className="w-12 h-12 mb-4 opacity-50" />
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
