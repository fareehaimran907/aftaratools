"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Receipt, DollarSign, Percent, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function TipCalculator() {
  const t = useTranslations("Tools.tip-calculator.ui");
  
  const [billAmount, setBillAmount] = useState<string>("50");
  const [tipPercentage, setTipPercentage] = useState<string>("15");
  const [numberOfPeople, setNumberOfPeople] = useState<string>("1");
  
  const [results, setResults] = useState<{
    tipAmount: number;
    totalAmount: number;
    tipPerPerson: number;
    totalPerPerson: number;
  } | null>(null);

  const calculateTip = () => {
    const bill = parseFloat(billAmount);
    const tipPercent = parseFloat(tipPercentage);
    const people = parseInt(numberOfPeople, 10);
    
    if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people < 1 || bill < 0 || tipPercent < 0) {
      setResults(null);
      return;
    }

    const tipAmount = bill * (tipPercent / 100);
    const totalAmount = bill + tipAmount;
    
    const tipPerPerson = tipAmount / people;
    const totalPerPerson = totalAmount / people;

    setResults({
      tipAmount,
      totalAmount,
      tipPerPerson,
      totalPerPerson
    });
  };

  useEffect(() => {
    calculateTip();
  }, [billAmount, tipPercentage, numberOfPeople]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "USD"
    }).format(value);
  }

  const tipOptions = [10, 15, 18, 20, 25];

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-emerald-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 dark:text-emerald-400 mb-2">
            <Receipt className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <Card className="md:col-span-6 bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700">
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("billAmount")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSign className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={billAmount}
                    onChange={(e) => setBillAmount(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-lg"
                    placeholder="50.00"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {t("tipPercentage")}
                  </label>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    {tipPercentage}%
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {tipOptions.map((tip) => (
                    <Button
                      key={tip}
                      variant="outline"
                      onClick={() => setTipPercentage(tip.toString())}
                      className={`flex-1 min-w-[3rem] transition-colors ${
                        parseFloat(tipPercentage) === tip 
                          ? "!bg-emerald-600 hover:!bg-emerald-700 !text-white !border-emerald-600" 
                          : "border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
                      }`}
                    >
                      {tip}%
                    </Button>
                  ))}
                </div>

                <div className="relative mt-2">
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <Percent className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={tipPercentage}
                    onChange={(e) => setTipPercentage(e.target.value)}
                    className="w-full pl-4 pr-11 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-lg"
                    placeholder="15"
                    min="0"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("numberOfPeople")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Users className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={numberOfPeople}
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-lg"
                    placeholder="1"
                    min="1"
                    step="1"
                  />
                </div>
              </div>

            </div>
          </Card>

          <div className="md:col-span-6 space-y-6">
            <div className="bg-emerald-600 dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border-0 overflow-hidden relative text-white">
              
              <div className="absolute top-0 right-0 p-32 bg-emerald-500 dark:bg-emerald-900/20 rounded-full -mr-16 -mt-16 opacity-50 blur-3xl pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                
                {results ? (
                  <>
                    <div className="flex justify-between items-center border-b border-emerald-500/50 dark:border-slate-700 pb-6">
                      <div>
                        <div className="text-emerald-100 dark:text-slate-400 font-semibold mb-1">
                          {t("tipAmount")}
                        </div>
                        <div className="text-sm text-emerald-200 dark:text-slate-500">
                          {parseInt(numberOfPeople) > 1 && t("perPerson")}
                        </div>
                      </div>
                      <div className="text-4xl font-black">
                        {formatCurrency(parseInt(numberOfPeople) > 1 ? results.tipPerPerson : results.tipAmount)}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pb-2">
                      <div>
                        <div className="text-emerald-100 dark:text-slate-400 font-semibold mb-1">
                          {t("totalAmount")}
                        </div>
                        <div className="text-sm text-emerald-200 dark:text-slate-500">
                          {parseInt(numberOfPeople) > 1 && t("perPerson")}
                        </div>
                      </div>
                      <div className="text-4xl font-black">
                        {formatCurrency(parseInt(numberOfPeople) > 1 ? results.totalPerPerson : results.totalAmount)}
                      </div>
                    </div>

                    {parseInt(numberOfPeople) > 1 && (
                      <div className="pt-4 mt-2 border-t border-emerald-500/30 dark:border-slate-700/50 space-y-3">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-emerald-200 dark:text-slate-400">{t("totalTipOverall")}</span>
                          <span className="font-bold">{formatCurrency(results.tipAmount)}</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-emerald-200 dark:text-slate-400">{t("totalBillOverall")}</span>
                          <span className="font-bold">{formatCurrency(results.totalAmount)}</span>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="py-12 flex flex-col items-center justify-center text-emerald-200 dark:text-slate-500 text-center">
                    <Receipt className="w-12 h-12 mb-4 opacity-50" />
                    <p>{t("enterDetails")}</p>
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
