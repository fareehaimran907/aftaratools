"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Divide } from "lucide-react";

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export function FractionCalculator() {
  const t = useTranslations("Tools.fraction-calculator.ui");
  const [num1, setNum1] = useState("1");
  const [den1, setDen1] = useState("2");
  const [op, setOp] = useState("+");
  const [num2, setNum2] = useState("1");
  const [den2, setDen2] = useState("4");

  const calculate = () => {
    const n1 = parseInt(num1) || 0;
    const d1 = parseInt(den1) || 1;
    const n2 = parseInt(num2) || 0;
    const d2 = parseInt(den2) || 1;

    let resNum = 0;
    let resDen = 1;

    if (d1 === 0 || d2 === 0) return { num: t('error'), den: t('divByZero'), decimal: 0 };

    switch (op) {
      case "+":
        resNum = n1 * d2 + n2 * d1;
        resDen = d1 * d2;
        break;
      case "-":
        resNum = n1 * d2 - n2 * d1;
        resDen = d1 * d2;
        break;
      case "*":
        resNum = n1 * n2;
        resDen = d1 * d2;
        break;
      case "/":
        resNum = n1 * d2;
        resDen = d1 * n2;
        break;
    }

    if (resDen === 0) return { num: t('error'), den: t('divByZero'), decimal: 0 };

    const divisor = Math.abs(gcd(resNum, resDen));
    resNum /= divisor;
    resDen /= divisor;

    if (resDen < 0) {
      resNum = -resNum;
      resDen = -resDen;
    }

    return { num: resNum, den: resDen, decimal: resNum / resDen };
  };

  const result = calculate();

  return (
    <ToolLayout.Stacked>
      <ToolPanel>
        <div className="flex items-center gap-2 mb-6">
          <Divide className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('fractionCalculator')}</h3>
        </div>

        <ToolPanelContent className="space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 bg-secondary/30 p-8 rounded-xl border border-border">
            
            <div className="flex flex-col w-20 space-y-2">
              <Input type="number" value={num1} onChange={e => setNum1(e.target.value)} className="text-center font-bold h-12 text-lg" />
              <div className="h-1 bg-border rounded-full w-full mx-auto" />
              <Input type="number" value={den1} onChange={e => setDen1(e.target.value)} className="text-center font-bold h-12 text-lg" />
            </div>

            <select value={op} onChange={e => setOp(e.target.value)} className="h-12 px-4 rounded-xl border border-input bg-background font-bold text-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-sm">
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">×</option>
              <option value="/">÷</option>
            </select>

            <div className="flex flex-col w-20 space-y-2">
              <Input type="number" value={num2} onChange={e => setNum2(e.target.value)} className="text-center font-bold h-12 text-lg" />
              <div className="h-1 bg-border rounded-full w-full mx-auto" />
              <Input type="number" value={den2} onChange={e => setDen2(e.target.value)} className="text-center font-bold h-12 text-lg" />
            </div>

            <div className="text-3xl font-bold text-muted-foreground">=</div>

            <div className="flex flex-col w-24 space-y-2 bg-primary/10 p-3 rounded-xl border border-primary/20 shadow-sm">
              <div className="text-center font-bold text-2xl text-primary">{result.num}</div>
              {result.den !== 1 && result.den !== t('divByZero') && (
                <>
                  <div className="h-1 bg-primary/20 rounded-full w-full mx-auto" />
                  <div className="text-center font-bold text-2xl text-primary">{result.den}</div>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 pt-6">
            <span className="text-sm font-medium text-secondary-foreground uppercase tracking-widest">{t('decimal')}</span>
            <span className="font-mono text-2xl md:text-3xl text-foreground font-bold tracking-tight bg-secondary px-6 py-2 rounded-lg border border-border">
              {result.decimal.toLocaleString(undefined, { maximumFractionDigits: 6 })}
            </span>
          </div>
        </ToolPanelContent>
      </ToolPanel>
    </ToolLayout.Stacked>
  );
}
