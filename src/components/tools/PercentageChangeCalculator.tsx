"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, RotateCcw, TrendingUp, TrendingDown, ArrowRight, Percent } from "lucide-react";

export function PercentageChangeCalculator() {
  const [initialValue, setInitialValue] = useState("100");
  const [finalValue, setFinalValue] = useState("125");
  const [copied, setCopied] = useState(false);

  const v1 = parseFloat(initialValue);
  const v2 = parseFloat(finalValue);

  const isValid = !isNaN(v1) && !isNaN(v2) && v1 !== 0;

  const diff = isValid ? v2 - v1 : 0;
  const percentChange = isValid ? (diff / Math.abs(v1)) * 100 : 0;
  const multiplier = isValid && v1 !== 0 ? v2 / v1 : 1;
  const isIncrease = diff > 0;
  const isDecrease = diff < 0;

  const handleReset = () => {
    setInitialValue("");
    setFinalValue("");
  };

  const copyResult = () => {
    if (!isValid) return;
    const text = `Initial: ${v1}, Final: ${v2}, Change: ${percentChange.toFixed(2)}% (${isIncrease ? "Increase" : "Decrease"})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Percent className="w-5 h-5" />
          <span>Percentage Change Calculator</span>
        </div>
        <Button variant="ghost" size="sm" onClick={handleReset} className="h-8 text-xs text-muted-foreground">
          <RotateCcw className="w-3.5 h-3.5 mr-1" />
          Reset
        </Button>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Initial Value (V₁)</label>
          <Input
            type="number"
            value={initialValue}
            onChange={(e) => setInitialValue(e.target.value)}
            placeholder="e.g. 100"
            className="text-lg font-mono h-12 bg-muted/40 rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Final Value (V₂)</label>
          <Input
            type="number"
            value={finalValue}
            onChange={(e) => setFinalValue(e.target.value)}
            placeholder="e.g. 125"
            className="text-lg font-mono h-12 bg-muted/40 rounded-xl"
          />
        </div>
      </div>

      {/* Results Card */}
      {isValid ? (
        <div className="space-y-6">
          <div
            className={`p-6 rounded-2xl border text-center transition-all ${
              isIncrease
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-500"
                : isDecrease
                ? "bg-rose-500/10 border-rose-500/30 text-rose-500"
                : "bg-muted/40 border-border text-foreground"
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              {isIncrease ? (
                <TrendingUp className="w-7 h-7" />
              ) : isDecrease ? (
                <TrendingDown className="w-7 h-7" />
              ) : null}
              <span className="text-sm font-bold uppercase tracking-wider">
                {isIncrease ? "Increase" : isDecrease ? "Decrease" : "No Change"}
              </span>
            </div>

            <div className="text-4xl sm:text-5xl font-mono font-extrabold tracking-tight">
              {isIncrease ? "+" : ""}
              {percentChange.toFixed(2)}%
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              From {v1} to {v2} is an absolute change of {diff > 0 ? `+${diff}` : diff}
            </p>
          </div>

          {/* Details Breakdown */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-muted/30 border border-border/40 rounded-xl">
              <span className="text-xs text-muted-foreground block">Absolute Difference</span>
              <span className="text-base font-semibold font-mono text-foreground">
                {diff > 0 ? `+${diff}` : diff}
              </span>
            </div>
            <div className="p-3 bg-muted/30 border border-border/40 rounded-xl">
              <span className="text-xs text-muted-foreground block">Multiplier</span>
              <span className="text-base font-semibold font-mono text-foreground">
                {multiplier.toFixed(4)}×
              </span>
            </div>
            <div className="p-3 bg-muted/30 border border-border/40 rounded-xl col-span-2 sm:col-span-1">
              <span className="text-xs text-muted-foreground block">Formula</span>
              <span className="text-xs font-mono text-foreground font-medium">
                ((V₂ - V₁) / |V₁|) × 100
              </span>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Button variant="outline" size="sm" onClick={copyResult} className="text-xs">
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500 mr-1.5" /> : <Copy className="w-3.5 h-3.5 mr-1.5" />}
              {copied ? "Copied Calculation" : "Copy Results"}
            </Button>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground border border-dashed rounded-2xl bg-muted/20">
          Enter non-zero initial and final values to calculate percentage change.
        </div>
      )}
    </div>
  );
}
