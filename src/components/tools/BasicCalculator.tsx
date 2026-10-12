"use client";

import { useTranslations } from "next-intl";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, Copy, Check, RotateCcw, Delete } from "lucide-react";

export function BasicCalculator() {
  const t = useTranslations("Tools.basic-calculator.ui");
  const [display, setDisplay] = useState("0");
  const [prevValue, setPrevValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<string>("");

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPrevValue(null);
    setOperation(null);
    setWaitingForOperand(false);
    setHistory("");
  };

  const backspace = () => {
    if (waitingForOperand) return;
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  const toggleSign = () => {
    const value = parseFloat(display);
    if (!isNaN(value)) {
      setDisplay(String(-value));
    }
  };

  const inputPercent = () => {
    const value = parseFloat(display);
    if (!isNaN(value)) {
      setDisplay(String(value / 100));
    }
  };

  const performOperation = (nextOp: string) => {
    const inputValue = parseFloat(display);

    if (prevValue === null) {
      setPrevValue(inputValue);
      setHistory(`${inputValue} ${nextOp}`);
    } else if (operation) {
      const currentValue = prevValue || 0;
      let newValue = currentValue;

      switch (operation) {
        case "+":
          newValue = currentValue + inputValue;
          break;
        case "-":
          newValue = currentValue - inputValue;
          break;
        case "×":
        case "*":
          newValue = currentValue * inputValue;
          break;
        case "÷":
        case "/":
          if (inputValue === 0) {
            setDisplay(t("errorDivZero"));
            setPrevValue(null);
            setOperation(null);
            setWaitingForOperand(true);
            return;
          }
          newValue = currentValue / inputValue;
          break;
        default:
          break;
      }

      setPrevValue(newValue);
      setDisplay(String(Number(newValue.toFixed(10))));
      setHistory(nextOp === "=" ? "" : `${Number(newValue.toFixed(10))} ${nextOp}`);
    }

    setWaitingForOperand(true);
    setOperation(nextOp === "=" ? null : nextOp);
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key >= "0" && e.key <= "9") {
        inputDigit(e.key);
      } else if (e.key === ".") {
        inputDecimal();
      } else if (e.key === "+" || e.key === "-") {
        performOperation(e.key);
      } else if (e.key === "*") {
        performOperation("×");
      } else if (e.key === "/") {
        e.preventDefault();
        performOperation("÷");
      } else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        performOperation("=");
      } else if (e.key === "Backspace") {
        backspace();
      } else if (e.key === "Escape") {
        clear();
      }
    },
    [display, prevValue, operation, waitingForOperand]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const copyResult = () => {
    navigator.clipboard.writeText(display);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-6 bg-card border border-border/80 rounded-3xl shadow-2xl backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-border/50">
        <div className="flex items-center gap-2 text-primary font-semibold">
          <Calculator className="w-5 h-5" />
          <span>{t("title")}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={copyResult}
          className="h-8 px-2 text-muted-foreground hover:text-foreground"
          title={t("copy")}
        >
          {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          <span className="ml-1 text-xs">{copied ? t("copied") : t("copy")}</span>
        </Button>
      </div>

      {/* Screen Display */}
      <div className="bg-muted/50 rounded-2xl p-4 mb-5 border border-border/40 text-right">
        <div className="text-xs text-muted-foreground h-5 font-mono overflow-hidden text-ellipsis">
          {history || "\u00A0"}
        </div>
        <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-foreground overflow-x-auto whitespace-nowrap scrollbar-none py-1">
          {display}
        </div>
      </div>

      {/* Keypad Grid */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
        <Button
          variant="secondary"
          onClick={clear}
          className="h-12 sm:h-14 text-base font-semibold text-rose-500 hover:bg-rose-500/10 rounded-xl"
        >
          AC
        </Button>
        <Button
          variant="secondary"
          onClick={backspace}
          className="h-12 sm:h-14 text-base font-semibold rounded-xl"
        >
          <Delete className="w-5 h-5" />
        </Button>
        <Button
          variant="secondary"
          onClick={inputPercent}
          className="h-12 sm:h-14 text-base font-semibold rounded-xl"
        >
          %
        </Button>
        <Button
          variant="default"
          onClick={() => performOperation("÷")}
          className="h-12 sm:h-14 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
        >
          ÷
        </Button>

        <Button
          variant="outline"
          onClick={() => inputDigit("7")}
          className="h-12 sm:h-14 text-xl font-medium rounded-xl hover:bg-muted"
        >
          7
        </Button>
        <Button
          variant="outline"
          onClick={() => inputDigit("8")}
          className="h-12 sm:h-14 text-xl font-medium rounded-xl hover:bg-muted"
        >
          8
        </Button>
        <Button
          variant="outline"
          onClick={() => inputDigit("9")}
          className="h-12 sm:h-14 text-xl font-medium rounded-xl hover:bg-muted"
        >
          9
        </Button>
        <Button
          variant="default"
          onClick={() => performOperation("×")}
          className="h-12 sm:h-14 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
        >
          ×
        </Button>

        <Button
          variant="outline"
          onClick={() => inputDigit("4")}
          className="h-12 sm:h-14 text-xl font-medium rounded-xl hover:bg-muted"
        >
          4
        </Button>
        <Button
          variant="outline"
          onClick={() => inputDigit("5")}
          className="h-12 sm:h-14 text-xl font-medium rounded-xl hover:bg-muted"
        >
          5
        </Button>
        <Button
          variant="outline"
          onClick={() => inputDigit("6")}
          className="h-12 sm:h-14 text-xl font-medium rounded-xl hover:bg-muted"
        >
          6
        </Button>
        <Button
          variant="default"
          onClick={() => performOperation("-")}
          className="h-12 sm:h-14 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
        >
          -
        </Button>

        <Button
          variant="outline"
          onClick={() => inputDigit("1")}
          className="h-12 sm:h-14 text-xl font-medium rounded-xl hover:bg-muted"
        >
          1
        </Button>
        <Button
          variant="outline"
          onClick={() => inputDigit("2")}
          className="h-12 sm:h-14 text-xl font-medium rounded-xl hover:bg-muted"
        >
          2
        </Button>
        <Button
          variant="outline"
          onClick={() => inputDigit("3")}
          className="h-12 sm:h-14 text-xl font-medium rounded-xl hover:bg-muted"
        >
          3
        </Button>
        <Button
          variant="default"
          onClick={() => performOperation("+")}
          className="h-12 sm:h-14 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
        >
          +
        </Button>

        <Button
          variant="secondary"
          onClick={toggleSign}
          className="h-12 sm:h-14 text-base font-semibold rounded-xl"
        >
          ±
        </Button>
        <Button
          variant="outline"
          onClick={() => inputDigit("0")}
          className="h-12 sm:h-14 text-xl font-medium rounded-xl hover:bg-muted"
        >
          0
        </Button>
        <Button
          variant="outline"
          onClick={inputDecimal}
          className="h-12 sm:h-14 text-xl font-medium rounded-xl hover:bg-muted"
        >
          .
        </Button>
        <Button
          variant="default"
          onClick={() => performOperation("=")}
          className="h-12 sm:h-14 text-xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-md shadow-emerald-500/20"
        >
          =
        </Button>
      </div>
    </div>
  );
}
