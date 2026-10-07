"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Globe, ArrowRightLeft, RefreshCw, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CurrencyConverter() {
  const t = useTranslations("Tools.currency-converter.ui");
  
  const [amount, setAmount] = useState<string>("100");
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  
  const [rates, setRates] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const popularCurrencies = [
    "USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY", "HKD", "NZD", "INR", "BRL", "ZAR", "MXN", "SGD", "AED"
  ];

  useEffect(() => {
    const fetchRates = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await response.json();
        if (data && data.rates) {
          setRates(data.rates);
          setLastUpdated(new Date(data.time_last_update_utc).toLocaleDateString());
        }
      } catch (error) {
        console.error("Failed to fetch rates:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRates();
  }, []);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const calculateConversion = () => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || Object.keys(rates).length === 0) return null;

    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];

    if (!fromRate || !toRate) return null;

    // Convert to USD first, then to target currency
    const amountInUSD = numAmount / fromRate;
    const result = amountInUSD * toRate;

    return result;
  };

  const result = calculateConversion();
  const exchangeRate = calculateConversion() ? calculateConversion()! / parseFloat(amount || "1") : 0;

  const formatCurrency = (value: number, currency: string) => {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currency,
      maximumFractionDigits: 2
    }).format(value);
  }

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-emerald-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 dark:text-emerald-400 mb-2">
            <Globe className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <Card className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Amount & From Currency */}
            <div className="w-full md:w-2/5 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("amount")}
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-semibold text-2xl text-center"
                  placeholder="100"
                />
              </div>
              <div>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none font-medium"
                >
                  {popularCurrencies.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                  <option disabled>──────────</option>
                  {Object.keys(rates).filter(c => !popularCurrencies.includes(c)).sort().map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center w-full md:w-1/5 pt-6 md:pt-0">
              <Button
                variant="outline"
                className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 hover:text-emerald-700"
                onClick={handleSwap}
              >
                <ArrowRightLeft className="w-6 h-6" />
              </Button>
            </div>

            {/* To Currency & Result */}
            <div className="w-full md:w-2/5 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  {t("convertedAmount")}
                </label>
                <div className="w-full px-4 py-4 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl font-bold text-2xl text-center text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                  {isLoading ? (
                    <RefreshCw className="w-6 h-6 animate-spin" />
                  ) : result !== null ? (
                    formatCurrency(result, toCurrency)
                  ) : (
                    "-"
                  )}
                </div>
              </div>
              <div>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none font-medium"
                >
                  {popularCurrencies.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                  <option disabled>──────────</option>
                  {Object.keys(rates).filter(c => !popularCurrencies.includes(c)).sort().map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Rate Info */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/50 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-emerald-500" />
              <span>
                1 {fromCurrency} = {exchangeRate.toFixed(4)} {toCurrency}
              </span>
            </div>
            {lastUpdated && (
              <div className="mt-2 sm:mt-0">
                {t("lastUpdated")}: {lastUpdated}
              </div>
            )}
          </div>

        </Card>

      </div>
    </div>
  );
}
