"use client";

import { useState, useEffect } from "react";
import { calculatePercentage } from "@/lib/calculations/percentage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { Percent, RefreshCw, AlertCircle, Info } from "lucide-react";

export function PercentageCalculator() {
  const t = useTranslations("Tools.percentage-calculator.ui");
  const [value, setValue] = useState("25");
  const [total, setTotal] = useState("200");
  const [result, setResult] = useState<number | null>(50);
  const [error, setError] = useState<string | null>(null);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const calculate = () => {
    try {
      setError(null);
      const v = parseFloat(value);
      const tot = parseFloat(total);
      if (isNaN(v) || isNaN(tot)) {
        setResult(null);
        return;
      }
      const res = calculatePercentage(v, tot);
      setResult(res);
    } catch (err: any) {
      setResult(null);
    }
  };

  useEffect(() => {
    calculate();
  }, [value, total]);

  const percentageValue = parseFloat(value) || 0;
  const clampedPercentage = Math.min(Math.max(percentageValue, 0), 100);

  if (!mounted) return null;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Centered Single Card Layout */}
      <div className="bg-surface rounded-3xl shadow-xl border border-emerald-500/20 overflow-hidden">
        
        {/* Header Area with Donut Motif */}
        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-8 border-b border-emerald-500/10 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-20 h-20 shrink-0">
            {/* Circular Donut Motif SVG */}
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="12" className="text-emerald-500/20" />
              <circle 
                cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="12" 
                strokeDasharray="251.2" 
                strokeDashoffset={251.2 - (251.2 * clampedPercentage) / 100}
                className="text-emerald-500 transition-all duration-700 ease-out" 
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <Percent className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold font-heading text-emerald-900">{t("calculatePercentage")}</h2>
          </div>
        </div>

        <div className="p-8 space-y-8">
          
          {/* Interactive Inputs */}
          <div className="space-y-6">
            <div className="bg-emerald-500/5 p-6 rounded-2xl border border-emerald-500/20 space-y-4">
              <div className="flex justify-between items-end gap-4">
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="value">{t("whatIs")}</label>
                  <div className="relative">
                    <Input 
                      id="value"
                      type="number" 
                      value={value} 
                      onChange={(e) => setValue(e.target.value)} 
                      className="pr-10 h-14 text-2xl font-bold bg-surface border-emerald-500/30 focus:ring-emerald-500 rounded-xl"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600 font-bold text-xl">%</span>
                  </div>
                </div>
                <div className="pb-3 text-emerald-500 font-bold hidden sm:block">
                  {t("of")}
                </div>
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-semibold text-foreground" htmlFor="total">{t("amount")}</label>
                  <Input 
                    id="total"
                    type="number" 
                    value={total} 
                    onChange={(e) => setTotal(e.target.value)} 
                    className="h-14 text-2xl font-bold bg-surface border-emerald-500/30 focus:ring-emerald-500 rounded-xl"
                  />
                </div>
              </div>
              
              {/* Slider Micro-interaction */}
              <div className="pt-4 px-2">
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={clampedPercentage} 
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full accent-emerald-500 cursor-pointer h-2 bg-emerald-500/20 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-xs font-medium text-emerald-600/70 mt-2 px-1">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Gauge Result Presentation */}
          <div className="bg-emerald-500 text-white rounded-2xl p-8 shadow-lg shadow-emerald-500/20 relative overflow-hidden">
            {/* Abstract grid lines */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
            
            {error ? (
              <div className="relative z-10 flex flex-col items-center justify-center text-emerald-50 gap-3 py-4 text-center">
                <AlertCircle className="w-10 h-10" />
                <p className="font-semibold text-lg">{error}</p>
              </div>
            ) : result !== null ? (
              <div className="relative z-10 text-center">
                <p className="text-emerald-100 font-medium mb-1 uppercase tracking-wider text-sm">{t("result")}</p>
                <div className="text-5xl sm:text-6xl font-extrabold font-heading tracking-tight">
                  {result.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                </div>
                
                {/* Result Bar */}
                <div className="mt-8 h-3 w-full bg-emerald-900/40 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white transition-all duration-1000 ease-out rounded-full"
                    style={{ width: `${clampedPercentage}%` }}
                  />
                </div>
              </div>
            ) : (
               <div className="relative z-10 flex flex-col items-center justify-center text-emerald-100 gap-3 py-4 text-center">
                <RefreshCw className="w-10 h-10 opacity-50" />
                <p className="font-medium">{t("enterValuesToCalculatePerc")}</p>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
