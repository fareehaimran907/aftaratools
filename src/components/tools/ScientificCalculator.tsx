"use client";

import { useTranslations } from "next-intl";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, RotateCcw, Delete } from "lucide-react";

export function ScientificCalculator() {
  const t = useTranslations("Tools.scientific-calculator.ui");
  const [expression, setExpression] = useState("");
  const [display, setDisplay] = useState("0");
  const [isRad, setIsRad] = useState(false);
  const [copied, setCopied] = useState(false);
  const [memory, setMemory] = useState<number>(0);

  const factorial = (n: number): number => {
    if (n < 0 || !Number.isInteger(n)) return NaN;
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
  };

  const evaluateExpression = (expr: string) => {
    try {
      if (!expr.trim()) return "0";

      // Replace math tokens
      let parsed = expr
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/π/g, "Math.PI")
        .replace(/e/g, "Math.E");

      // Replace functions
      if (!isRad) {
        // Degree conversions for trig
        parsed = parsed.replace(/sin\(([^)]+)\)/g, "Math.sin(($1) * Math.PI / 180)");
        parsed = parsed.replace(/cos\(([^)]+)\)/g, "Math.cos(($1) * Math.PI / 180)");
        parsed = parsed.replace(/tan\(([^)]+)\)/g, "Math.tan(($1) * Math.PI / 180)");
      } else {
        parsed = parsed.replace(/sin\(/g, "Math.sin(");
        parsed = parsed.replace(/cos\(/g, "Math.cos(");
        parsed = parsed.replace(/tan\(/g, "Math.tan(");
      }

      parsed = parsed.replace(/ln\(/g, "Math.log(");
      parsed = parsed.replace(/log\(/g, "Math.log10(");
      parsed = parsed.replace(/sqrt\(/g, "Math.sqrt(");
      parsed = parsed.replace(/\^/g, "**");

      // Handle factorial n!
      parsed = parsed.replace(/(\d+)!/g, (_, n) => `${factorial(parseInt(n))}`);

      // Evaluate safely
      const result = Function(`"use strict"; return (${parsed});`)();
      if (typeof result === "number") {
        if (!isFinite(result)) return "Error";
        return String(Number(result.toFixed(10)));
      }
      return "Error";
    } catch {
      return "Error";
    }
  };

  const handleAppend = (token: string) => {
    if (display === "Error") {
      setExpression(token);
      setDisplay(token);
      return;
    }
    setExpression((prev) => prev + token);
    setDisplay((prev) => (prev === "0" ? token : prev + token));
  };

  const handleEquals = () => {
    if (!expression) return;
    const res = evaluateExpression(expression);
    setDisplay(res);
    setExpression(res === "Error" ? "" : res);
  };

  const handleClear = () => {
    setExpression("");
    setDisplay("0");
  };

  const handleBackspace = () => {
    if (expression.length > 0) {
      const nextExpr = expression.slice(0, -1);
      setExpression(nextExpr);
      setDisplay(nextExpr.length === 0 ? "0" : nextExpr);
    }
  };

  const copyResult = () => {
    navigator.clipboard.writeText(display);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key >= "0" && e.key <= "9") handleAppend(e.key);
      else if (e.key === ".") handleAppend(".");
      else if (e.key === "+" || e.key === "-") handleAppend(e.key);
      else if (e.key === "*") handleAppend("×");
      else if (e.key === "/") {
        e.preventDefault();
        handleAppend("÷");
      } else if (e.key === "(" || e.key === ")") handleAppend(e.key);
      else if (e.key === "^") handleAppend("^");
      else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        handleEquals();
      } else if (e.key === "Backspace") handleBackspace();
      else if (e.key === "Escape") handleClear();
    },
    [expression, display, isRad]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 bg-card border border-border rounded-3xl shadow-2xl">
      {/* Header controls */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
        <div className="flex items-center gap-2">
          <Button
            variant={isRad ? "outline" : "default"}
            size="sm"
            onClick={() => setIsRad(false)}
            className="text-xs h-7 px-3 font-semibold"
          >
            {t("degrees")}
          </Button>
          <Button
            variant={isRad ? "default" : "outline"}
            size="sm"
            onClick={() => setIsRad(true)}
            className="text-xs h-7 px-3 font-semibold"
          >
            {t("radians")}
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={copyResult}
            className="h-8 px-2 text-muted-foreground hover:text-foreground text-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
            {copied ? t("copied") : t("copy")}
          </Button>
        </div>
      </div>

      {/* Screen Display */}
      <div className="bg-muted/40 rounded-2xl p-4 sm:p-5 mb-5 border border-border/60 text-right">
        <div className="text-xs sm:text-sm font-mono text-muted-foreground h-6 overflow-x-auto whitespace-nowrap scrollbar-none">
          {expression || "\u00A0"}
        </div>
        <div className="text-3xl sm:text-4xl font-mono font-bold text-foreground overflow-x-auto whitespace-nowrap scrollbar-none py-1">
          {display}
        </div>
      </div>

      {/* Scientific Keypad Grid */}
      <div className="grid grid-cols-5 gap-2 sm:gap-2.5">
        {/* Row 1 */}
        <Button variant="secondary" onClick={() => handleAppend("sin(")} className="h-11 sm:h-12 font-mono text-sm">
          sin
        </Button>
        <Button variant="secondary" onClick={() => handleAppend("cos(")} className="h-11 sm:h-12 font-mono text-sm">
          cos
        </Button>
        <Button variant="secondary" onClick={() => handleAppend("tan(")} className="h-11 sm:h-12 font-mono text-sm">
          tan
        </Button>
        <Button variant="secondary" onClick={() => handleAppend("log(")} className="h-11 sm:h-12 font-mono text-sm">
          log
        </Button>
        <Button variant="secondary" onClick={() => handleAppend("ln(")} className="h-11 sm:h-12 font-mono text-sm">
          ln
        </Button>

        {/* Row 2 */}
        <Button variant="secondary" onClick={() => handleAppend("^")} className="h-11 sm:h-12 font-mono text-sm">
          xʸ
        </Button>
        <Button variant="secondary" onClick={() => handleAppend("sqrt(")} className="h-11 sm:h-12 font-mono text-sm">
          √
        </Button>
        <Button variant="secondary" onClick={() => handleAppend("(")} className="h-11 sm:h-12 font-mono text-sm">
          (
        </Button>
        <Button variant="secondary" onClick={() => handleAppend(")")} className="h-11 sm:h-12 font-mono text-sm">
          )
        </Button>
        <Button variant="secondary" onClick={() => handleAppend("!")} className="h-11 sm:h-12 font-mono text-sm">
          n!
        </Button>

        {/* Row 3 */}
        <Button variant="secondary" onClick={() => handleAppend("π")} className="h-11 sm:h-12 font-mono text-sm">
          π
        </Button>
        <Button variant="outline" onClick={() => handleAppend("7")} className="h-11 sm:h-12 font-medium text-lg">
          7
        </Button>
        <Button variant="outline" onClick={() => handleAppend("8")} className="h-11 sm:h-12 font-medium text-lg">
          8
        </Button>
        <Button variant="outline" onClick={() => handleAppend("9")} className="h-11 sm:h-12 font-medium text-lg">
          9
        </Button>
        <Button variant="default" onClick={() => handleAppend("÷")} className="h-11 sm:h-12 font-bold text-lg bg-primary">
          ÷
        </Button>

        {/* Row 4 */}
        <Button variant="secondary" onClick={() => handleAppend("e")} className="h-11 sm:h-12 font-mono text-sm">
          e
        </Button>
        <Button variant="outline" onClick={() => handleAppend("4")} className="h-11 sm:h-12 font-medium text-lg">
          4
        </Button>
        <Button variant="outline" onClick={() => handleAppend("5")} className="h-11 sm:h-12 font-medium text-lg">
          5
        </Button>
        <Button variant="outline" onClick={() => handleAppend("6")} className="h-11 sm:h-12 font-medium text-lg">
          6
        </Button>
        <Button variant="default" onClick={() => handleAppend("×")} className="h-11 sm:h-12 font-bold text-lg bg-primary">
          ×
        </Button>

        {/* Row 5 */}
        <Button variant="secondary" onClick={handleBackspace} className="h-11 sm:h-12 text-sm text-amber-500">
          <Delete className="w-4 h-4" />
        </Button>
        <Button variant="outline" onClick={() => handleAppend("1")} className="h-11 sm:h-12 font-medium text-lg">
          1
        </Button>
        <Button variant="outline" onClick={() => handleAppend("2")} className="h-11 sm:h-12 font-medium text-lg">
          2
        </Button>
        <Button variant="outline" onClick={() => handleAppend("3")} className="h-11 sm:h-12 font-medium text-lg">
          3
        </Button>
        <Button variant="default" onClick={() => handleAppend("-")} className="h-11 sm:h-12 font-bold text-lg bg-primary">
          -
        </Button>

        {/* Row 6 */}
        <Button variant="secondary" onClick={handleClear} className="h-11 sm:h-12 font-semibold text-rose-500">
          AC
        </Button>
        <Button variant="outline" onClick={() => handleAppend("0")} className="h-11 sm:h-12 font-medium text-lg">
          0
        </Button>
        <Button variant="outline" onClick={() => handleAppend(".")} className="h-11 sm:h-12 font-medium text-lg">
          .
        </Button>
        <Button
          variant="default"
          onClick={handleEquals}
          className="h-11 sm:h-12 font-bold text-xl bg-emerald-600 hover:bg-emerald-500 text-white col-span-2 shadow-lg shadow-emerald-600/20"
        >
          =
        </Button>
      </div>
    </div>
  );
}
