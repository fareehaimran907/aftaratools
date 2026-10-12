"use client";

import { useTranslations } from "next-intl";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, RotateCcw, Percent, Equal } from "lucide-react";

export function PercentageDifferenceCalculator() {
  const t = useTranslations("Tools.percentage-difference-calculator.ui");
  const [valA, setValA] = useState("80");
  const [valB, setValB] = useState("100");
  const [copied, setCopied] = useState(false);

  const a = parseFloat(valA);
  const b = parseFloat(valB);

  const isValid = !isNaN(a) && !isNaN(b) && a + b !== 0;

  const diff = isValid ? Math.abs(a - b) : 0;
  const avg = isValid ? (a + b) / 2 : 0;
  const percentDiff = isValid && avg !== 0 ? (diff / Math.abs(avg)) * 100 : 0;

  const handleReset = () => {
    setValA("");
    setValB("");
  };

  const copyResult = () => {
    if (!isValid) return;
    const text = `Value A: ${a}, Value B: ${b}, Percentage Difference: ${percentDiff.toFixed(2)}%`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Percent className="w-5 h-5" />
          <span>{t("title")}</span>
        </div>
        <Button variant="ghost" size="sm" onClick={handleReset} className="h-8 text-xs text-muted-foreground">
          <RotateCcw className="w-3.5 h-3.5 mr-1" />
          {t("reset")}
        </Button>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">{t("valueA")}</label>
          <Input
            type="number"
            value={valA}
            onChange={(e) => setValA(e.target.value)}
            placeholder="e.g. 80"
            className="text-lg font-mono h-12 bg-muted/40 rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">{t("valueB")}</label>
          <Input
            type="number"
            value={valB}
            onChange={(e) => setValB(e.target.value)}
            placeholder="e.g. 100"
            className="text-lg font-mono h-12 bg-muted/40 rounded-xl"
          />
        </div>
      </div>

      {/* Results Card */}
      {isValid ? (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
              {t("percentDiff")}
            </span>
            <div className="text-4xl sm:text-5xl font-mono font-extrabold text-foreground tracking-tight">
              {percentDiff.toFixed(2)}%
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
              Between {a} and {b} with an average of {avg}
            </p>
          </div>

          {/* Details Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-muted/30 border border-border/40 rounded-xl">
              <span className="text-xs text-muted-foreground block">{t("absDiff")}</span>
              <span className="text-base font-semibold font-mono text-foreground">{diff}</span>
            </div>
            <div className="p-3 bg-muted/30 border border-border/40 rounded-xl">
              <span className="text-xs text-muted-foreground block">{t("average")}</span>
              <span className="text-base font-semibold font-mono text-foreground">{avg}</span>
            </div>
            <div className="p-3 bg-muted/30 border border-border/40 rounded-xl">
              <span className="text-xs text-muted-foreground block">Formula</span>
              <span className="text-xs font-mono text-foreground font-medium">
                (|A - B| / ((A+B)/2)) × 100
              </span>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Button variant="outline" size="sm" onClick={copyResult} className="text-xs">
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500 mr-1.5" /> : <Copy className="w-3.5 h-3.5 mr-1.5" />}
              {copied ? t("copied") : t("copyResults")}
            </Button>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground border border-dashed rounded-2xl bg-muted/20">
          Enter two numerical values where the sum is not zero.
        </div>
      )}
    </div>
  );
}
