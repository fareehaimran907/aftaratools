"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Tags, DollarSign, Percent, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function DiscountCalculator() {
  const t = useTranslations("Tools.discount-calculator.ui");
  
  const [originalPrice, setOriginalPrice] = useState<string>("100");
  const [discount, setDiscount] = useState<string>("20");
  const [tax, setTax] = useState<string>("5");
  
  const [results, setResults] = useState<{
    discountAmount: number;
    priceAfterDiscount: number;
    taxAmount: number;
    finalPrice: number;
    savings: number; // total savings
  } | null>(null);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const disc = parseFloat(discount);
    const taxRate = parseFloat(tax || "0");

    if (isNaN(price) || isNaN(disc) || price < 0 || disc < 0 || isNaN(taxRate) || taxRate < 0) {
      setResults(null);
      return;
    }

    const discountAmount = price * (disc / 100);
    const priceAfterDiscount = price - discountAmount;
    const taxAmount = priceAfterDiscount * (taxRate / 100);
    const finalPrice = priceAfterDiscount + taxAmount;
    
    // Total savings without tax (since tax is applied to the discounted price, 
    // the true "savings" compared to paying full price + tax on full price is interesting.
    // Full price with tax would be: price + price*(taxRate/100)
    // Savings = (price + price*(taxRate/100)) - finalPrice
    const originalPriceWithTax = price + (price * (taxRate / 100));
    const savings = originalPriceWithTax - finalPrice;

    setResults({
      discountAmount,
      priceAfterDiscount,
      taxAmount,
      finalPrice,
      savings
    });
  };

  useEffect(() => {
    calculateDiscount();
  }, [originalPrice, discount, tax]);

  const formatCurrency = (value: number) => {
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
            <Tags className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700">
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("originalPrice")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <DollarSign className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("discountPercentage")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Percent className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="20"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("taxPercentage")} <span className="text-slate-400 font-normal">({t("optional")})</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Percent className="w-5 h-5 text-slate-400" />
                  </div>
                  <input
                    type="number"
                    value={tax}
                    onChange={(e) => setTax(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="0"
                  />
                </div>
              </div>

              <Button
                onClick={calculateDiscount}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-6 text-lg font-semibold shadow-lg shadow-emerald-600/20"
              >
                <Tags className="w-5 h-5 mr-2" />
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
                    
                    <div className="p-6 rounded-2xl border text-center bg-emerald-50 dark:bg-emerald-900/20 border-emerald-100 dark:border-emerald-800/50 relative overflow-hidden">
                      <div className="text-sm font-semibold mb-1 uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        {t("finalPrice")}
                      </div>
                      <div className="text-4xl font-black text-emerald-700 dark:text-emerald-300">
                        {formatCurrency(results.finalPrice)}
                      </div>
                      {results.savings > 0 && (
                        <div className="mt-3 inline-block bg-emerald-100 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-100 text-xs font-bold px-3 py-1 rounded-full">
                          {t("youSave")} {formatCurrency(results.savings)}
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
                          {t("originalPrice")}
                        </div>
                        <div className="text-lg font-semibold text-slate-700 dark:text-slate-300 line-through opacity-70">
                          {formatCurrency(parseFloat(originalPrice || "0"))}
                        </div>
                      </div>
                      
                      <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
                          {t("discountAmount")}
                        </div>
                        <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                          -{formatCurrency(results.discountAmount)}
                        </div>
                      </div>
                      
                      {parseFloat(tax || "0") > 0 && (
                        <div className="col-span-2 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-700 flex justify-between items-center">
                          <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            {t("taxAmount")} ({tax}%)
                          </div>
                          <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                            +{formatCurrency(results.taxAmount)}
                          </div>
                        </div>
                      )}
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
