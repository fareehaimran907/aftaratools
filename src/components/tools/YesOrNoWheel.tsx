"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RotateCw, CheckCircle2, XCircle, HelpCircle } from "lucide-react";

export function YesOrNoWheel() {
  const [includeMaybe, setIncludeMaybe] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [yesCount, setYesCount] = useState(0);
  const [noCount, setNoCount] = useState(0);

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setResult(null);

    const outcomes = includeMaybe ? ["YES", "NO", "MAYBE"] : ["YES", "NO"];
    const outcomeIndex = Math.floor(Math.random() * outcomes.length);
    const chosen = outcomes[outcomeIndex];

    const sliceAngle = 360 / outcomes.length;
    // Calculate angle that lands on chosen outcome
    const targetAngle = 360 - (outcomeIndex * sliceAngle + sliceAngle / 2) + 270;
    const spins = 1800 + Math.floor(Math.random() * 3) * 360;
    const finalRot = rotation + spins + (targetAngle - (rotation % 360));

    setRotation(finalRot);

    setTimeout(() => {
      setResult(chosen);
      if (chosen === "YES") setYesCount((c) => c + 1);
      else if (chosen === "NO") setNoCount((c) => c + 1);
      setIsSpinning(false);
    }, 3200);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl text-center space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <HelpCircle className="w-5 h-5" />
          <span>Yes or No Wheel Decider</span>
        </div>
        <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
          <input
            type="checkbox"
            checked={includeMaybe}
            onChange={(e) => setIncludeMaybe(e.target.checked)}
            className="rounded border-border text-primary"
          />
          <span>Include &quot;Maybe&quot;</span>
        </label>
      </div>

      {/* Wheel Visual */}
      <div className="flex flex-col items-center justify-center py-4">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 select-none">
          {/* Top Pointer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20 w-0 h-0 border-x-8 border-x-transparent border-t-[20px] border-t-foreground filter drop-shadow" />

          <svg
            viewBox="0 0 100 100"
            className="w-full h-full rounded-full shadow-2xl transition-transform duration-[3200ms] ease-out"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {includeMaybe ? (
              <>
                {/* 3 Slices: Yes, No, Maybe */}
                <path d="M 50 50 L 50 0 A 50 50 0 0 1 93.3 75 Z" fill="#10B981" stroke="#fff" strokeWidth="0.5" />
                <text x="65" y="40" fill="#fff" fontSize="7" fontWeight="bold" transform="rotate(30, 65, 40)">YES</text>

                <path d="M 50 50 L 93.3 75 A 50 50 0 0 1 6.7 75 Z" fill="#EF4444" stroke="#fff" strokeWidth="0.5" />
                <text x="50" y="75" fill="#fff" fontSize="7" fontWeight="bold">NO</text>

                <path d="M 50 50 L 6.7 75 A 50 50 0 0 1 50 0 Z" fill="#F59E0B" stroke="#fff" strokeWidth="0.5" />
                <text x="35" y="40" fill="#fff" fontSize="6" fontWeight="bold" transform="rotate(-30, 35, 40)">MAYBE</text>
              </>
            ) : (
              <>
                {/* 2 Slices: Yes (Green), No (Red) */}
                <path d="M 50 50 L 50 0 A 50 50 0 0 1 50 100 Z" fill="#10B981" stroke="#fff" strokeWidth="0.5" />
                <text x="75" y="52" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">YES</text>

                <path d="M 50 50 L 50 100 A 50 50 0 0 1 50 0 Z" fill="#EF4444" stroke="#fff" strokeWidth="0.5" />
                <text x="25" y="52" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">NO</text>
              </>
            )}
            <circle cx="50" cy="50" r="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          </svg>
        </div>

        {/* Current Outcome Announcement */}
        <div className="mt-6 min-h-[3rem] flex items-center justify-center">
          {isSpinning ? (
            <span className="text-lg font-bold text-muted-foreground animate-pulse">
              Deciding your fate...
            </span>
          ) : result ? (
            <div className="text-3xl font-black uppercase tracking-wider flex items-center gap-2">
              {result === "YES" && <CheckCircle2 className="w-8 h-8 text-emerald-500" />}
              {result === "NO" && <XCircle className="w-8 h-8 text-rose-500" />}
              {result === "MAYBE" && <HelpCircle className="w-8 h-8 text-amber-500" />}
              <span className={result === "YES" ? "text-emerald-500" : result === "NO" ? "text-rose-500" : "text-amber-500"}>
                {result}!
              </span>
            </div>
          ) : (
            <span className="text-sm text-muted-foreground">Click the button below to spin!</span>
          )}
        </div>
      </div>

      <Button
        onClick={spin}
        disabled={isSpinning}
        className="w-full h-12 font-bold text-base bg-primary shadow-lg shadow-primary/20"
      >
        <RotateCw className={`w-4 h-4 mr-2 ${isSpinning ? "animate-spin" : ""}`} />
        {isSpinning ? "Spinning..." : "SPIN THE WHEEL"}
      </Button>

      {/* History Stats */}
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border/60 text-center">
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl">
          <span className="text-xs text-muted-foreground block font-medium">YES Count</span>
          <span className="text-xl font-bold font-mono text-emerald-500">{yesCount}</span>
        </div>
        <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-2xl">
          <span className="text-xs text-muted-foreground block font-medium">NO Count</span>
          <span className="text-xl font-bold font-mono text-rose-500">{noCount}</span>
        </div>
      </div>
    </div>
  );
}
