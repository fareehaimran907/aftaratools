"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { BadgeDollarSign, Calculator, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function LoanCalculator() {
  const t = useTranslations("Tools.loan-calculator.ui");
  
  const [loanAmount, setLoanAmount] = useState<string>("10000");
  const [interestRate, setInterestRate] = useState<string>("5");
  const [loanTerm, setLoanTerm] = useState<string>("5");
  const [termUnit, setTermUnit] = useState<'years' | 'months'>('years');
  
  const [results, setResults] = useState<{
    monthlyPayment: number;
    totalInterest: number;
    totalPayment: number;
  } | null>(null);

  const calculateLoan = () => {
    const P = parseFloat(loanAmount);
    const annualRate = parseFloat(interestRate);
    const time = parseFloat(loanTerm);

    if (isNaN(P) || isNaN(annualRate) || isNaN(time) || P <= 0 || time <= 0) {
      setResults(null);
      return;
    }

    const r = (annualRate / 100) / 12; // Monthly interest rate
    const n = termUnit === 'years' ? time * 12 : time; // Total number of months

    let emi;
    let totalPaid;
    let totalInt;

    if (r === 0) {
      emi = P / n;
      totalPaid = P;
      totalInt = 0;
    } else {
      emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      totalPaid = emi * n;
      totalInt = totalPaid - P;
    }

    setResults({
      monthlyPayment: emi,
      totalInterest: totalInt,
      totalPayment: totalPaid,
    });
  };

  useEffect(() => {
    calculateLoan();
  }, [loanAmount, interestRate, loanTerm, termUnit]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value).replace('US', ''); // Simple fallback formatting
  };

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-emerald-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 dark:text-emerald-400 mb-2">
            <BadgeDollarSign className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700">
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("loanAmount")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-400 text-lg">$</span>
                  </div>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="w-full pl-8 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="10000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("interestRate")}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="w-full pl-4 pr-10 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="5"
                    step="0.1"
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <span className="text-slate-400">%</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("loanTerm")}
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(e.target.value)}
                    className="flex-1 pl-4 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="5"
                  />
                  <select
                    value={termUnit}
                    onChange={(e) => setTermUnit(e.target.value as 'years' | 'months')}
                    className="w-32 px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-slate-700 dark:text-slate-300"
                  >
                    <option value="years">{t("years")}</option>
                    <option value="months">{t("months")}</option>
                  </select>
                </div>
              </div>

              <Button
                onClick={calculateLoan}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-6 text-lg font-semibold shadow-lg shadow-emerald-600/20"
              >
                <Calculator className="w-5 h-5 mr-2" />
                {t("calculate")}
              </Button>

            </div>
          </Card>

          <div className="space-y-6">
            <Card className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-emerald-100 dark:border-emerald-900/30 overflow-hidden relative">
              
              <div className="absolute top-0 right-0 p-32 bg-emerald-50 dark:bg-emerald-900/10 rounded-full -mr-16 -mt-16 opacity-50 blur-3xl pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                  {t("loanSummary")}
                </h3>
                
                {results ? (
                  <div className="space-y-6">
                    <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800/50">
                      <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1 uppercase tracking-wider">
                        {t("monthlyPayment")}
                      </div>
                      <div className="text-4xl font-black text-emerald-700 dark:text-emerald-300">
                        {formatCurrency(results.monthlyPayment)}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
                          {t("totalPrincipal")}
                        </div>
                        <div className="text-xl font-bold text-slate-800 dark:text-slate-200">
                          {formatCurrency(parseFloat(loanAmount) || 0)}
                        </div>
                      </div>
                      
                      <div className="p-5 bg-orange-50 dark:bg-orange-900/20 rounded-2xl border border-orange-100 dark:border-orange-800/50">
                        <div className="text-xs font-semibold text-orange-600 dark:text-orange-400 mb-1 uppercase tracking-wider">
                          {t("totalInterest")}
                        </div>
                        <div className="text-xl font-bold text-orange-700 dark:text-orange-300">
                          {formatCurrency(results.totalInterest)}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700 flex justify-between items-center">
                      <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                        {t("totalPayment")}
                      </div>
                      <div className="text-xl font-bold text-slate-800 dark:text-slate-200">
                        {formatCurrency(results.totalPayment)}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 text-center">
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
