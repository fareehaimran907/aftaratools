"use client";

import { useTranslations } from "next-intl";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dices, RefreshCw } from "lucide-react";

export function RollADie() {
  const t = useTranslations("Tools.roll-a-die.ui");
  const [diceCount, setDiceCount] = useState(2);
  const [sides, setSides] = useState(6);
  const [values, setValues] = useState<number[]>([3, 5]);
  const [isRolling, setIsRolling] = useState(false);
  const [history, setHistory] = useState<number[]>([8]);

  const roll = () => {
    if (isRolling) return;
    setIsRolling(true);

    // Rapid shake animation
    let count = 0;
    const interval = setInterval(() => {
      setValues(
        Array.from({ length: diceCount }, () => Math.floor(Math.random() * sides) + 1)
      );
      count++;
      if (count > 8) {
        clearInterval(interval);
        const finalValues = Array.from(
          { length: diceCount },
          () => Math.floor(Math.random() * sides) + 1
        );
        setValues(finalValues);
        const sum = finalValues.reduce((a, b) => a + b, 0);
        setHistory((prev) => [sum, ...prev.slice(0, 9)]);
        setIsRolling(false);
      }
    }, 60);
  };

  const totalSum = values.reduce((a, b) => a + b, 0);

  // SVG dots for standard 6-sided die
  const renderD6Dots = (val: number) => {
    const dotPos: Record<number, number[][]> = {
      1: [[50, 50]],
      2: [[25, 25], [75, 75]],
      3: [[25, 25], [50, 50], [75, 75]],
      4: [[25, 25], [25, 75], [75, 25], [75, 75]],
      5: [[25, 25], [25, 75], [50, 50], [75, 25], [75, 75]],
      6: [[25, 25], [25, 50], [25, 75], [75, 25], [75, 50], [75, 75]],
    };

    const dots = dotPos[val] || [];
    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {dots.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="8" fill="currentColor" />
        ))}
      </svg>
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl space-y-8">
      <div className="flex items-center justify-between pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Dices className="w-5 h-5" />
          <span>{t("title")}</span>
        </div>
      </div>

      {/* Controls: Dice Count & Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
            {t("diceCount")} ({diceCount})
          </label>
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5, 6].map((cnt) => (
              <Button
                key={cnt}
                variant={diceCount === cnt ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setDiceCount(cnt);
                  setValues(Array.from({ length: cnt }, () => Math.floor(Math.random() * sides) + 1));
                }}
                className="flex-1 h-9 font-bold"
              >
                {cnt}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
            {t("dieType")}
          </label>
          <div className="flex gap-1.5">
            {[6, 4, 8, 10, 12, 20].map((s) => (
              <Button
                key={s}
                variant={sides === s ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setSides(s);
                  setValues(Array.from({ length: diceCount }, () => Math.floor(Math.random() * s) + 1));
                }}
                className="flex-1 h-9 font-bold text-xs"
              >
                D{s}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Dice Display Area */}
      <div className="p-8 bg-muted/20 border border-border/80 rounded-2xl flex flex-wrap items-center justify-center gap-4 sm:gap-6 min-h-[160px]">
        {values.map((v, i) => (
          <div
            key={i}
            onClick={roll}
            className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-border/80 bg-card text-primary shadow-xl flex items-center justify-center cursor-pointer select-none transition-all ${
              isRolling ? "scale-90 rotate-12" : "hover:scale-105 active:scale-95"
            }`}
          >
            {sides === 6 ? (
              <div className="w-14 h-14 sm:w-16 sm:h-16 text-primary">{renderD6Dots(v)}</div>
            ) : (
              <span className="font-mono text-3xl sm:text-4xl font-extrabold text-foreground">
                {v}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Sum & Roll Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-muted/40 rounded-2xl border border-border">
        <div>
          <span className="text-xs text-muted-foreground uppercase font-bold block">{t("totalSum")}</span>
          <span className="text-3xl font-black font-mono text-foreground">{totalSum}</span>
          <span className="text-xs text-muted-foreground ml-2">
            ({values.join(" + ")})
          </span>
        </div>

        <Button
          onClick={roll}
          disabled={isRolling}
          className="w-full sm:w-auto px-8 h-12 font-bold text-base bg-primary"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isRolling ? "animate-spin" : ""}`} />
          {isRolling ? t("rolling") : t("rollDice")}
        </Button>
      </div>
    </div>
  );
}
