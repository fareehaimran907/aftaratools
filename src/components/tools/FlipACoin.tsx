"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Coins, RotateCw, History, Trophy } from "lucide-react";

export function FlipACoin() {
  const [result, setResult] = useState<"heads" | "tails" | null>("heads");
  const [isFlipping, setIsFlipping] = useState(false);
  const [headsCount, setHeadsCount] = useState(1);
  const [tailsCount, setTailsCount] = useState(0);
  const [history, setHistory] = useState<("heads" | "tails")[]>(["heads"]);
  const [rotation, setRotation] = useState(0);

  const flip = () => {
    if (isFlipping) return;
    setIsFlipping(true);

    const isHeads = Math.random() >= 0.5;
    const extraRotations = 1800 + Math.floor(Math.random() * 4) * 360;
    const finalRot = isHeads ? extraRotations : extraRotations + 180;

    setRotation((prev) => prev + finalRot);

    setTimeout(() => {
      const outcome = isHeads ? "heads" : "tails";
      setResult(outcome);
      if (isHeads) setHeadsCount((c) => c + 1);
      else setTailsCount((c) => c + 1);
      setHistory((prev) => [outcome, ...prev.slice(0, 9)]);
      setIsFlipping(false);
    }, 1200);
  };

  const resetStats = () => {
    setHeadsCount(0);
    setTailsCount(0);
    setHistory([]);
    setResult(null);
  };

  const totalFlips = headsCount + tailsCount;

  return (
    <div className="w-full max-w-xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl text-center space-y-8">
      <div className="flex items-center justify-between pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Coins className="w-5 h-5" />
          <span>Flip a Coin</span>
        </div>
        <Button variant="ghost" size="sm" onClick={resetStats} className="h-8 text-xs text-muted-foreground">
          Reset Stats
        </Button>
      </div>

      {/* 3D Animated Coin */}
      <div className="py-6 flex flex-col items-center justify-center">
        <div
          onClick={flip}
          className="w-40 h-40 sm:w-48 sm:h-48 cursor-pointer select-none perspective-1000 transition-transform active:scale-95"
          style={{ perspective: "1000px" }}
        >
          <div
            className="w-full h-full relative rounded-full shadow-2xl transition-transform duration-[1200ms] ease-out"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${rotation}deg)`,
            }}
          >
            {/* Heads Side */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 border-4 border-amber-200 flex flex-col items-center justify-center text-amber-950 font-black shadow-inner"
              style={{ backfaceVisibility: "hidden" }}
            >
              <Trophy className="w-12 h-12 mb-1 opacity-90" />
              <span className="text-xl sm:text-2xl tracking-widest uppercase font-mono">HEADS</span>
            </div>

            {/* Tails Side */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 border-4 border-amber-300 flex flex-col items-center justify-center text-amber-950 font-black shadow-inner"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <Coins className="w-12 h-12 mb-1 opacity-90" />
              <span className="text-xl sm:text-2xl tracking-widest uppercase font-mono">TAILS</span>
            </div>
          </div>
        </div>

        {/* Current Result Announcement */}
        <div className="mt-6 min-h-[2.5rem]">
          {isFlipping ? (
            <span className="text-lg font-bold text-muted-foreground animate-pulse">
              Flipping through the air...
            </span>
          ) : result ? (
            <div className="text-2xl font-black uppercase tracking-wider text-foreground">
              Result: <span className="text-primary">{result}</span>!
            </div>
          ) : (
            <span className="text-sm text-muted-foreground">Click the coin or button to flip</span>
          )}
        </div>
      </div>

      <Button
        onClick={flip}
        disabled={isFlipping}
        className="w-full h-12 font-bold text-base bg-primary shadow-lg shadow-primary/20"
      >
        <RotateCw className={`w-4 h-4 mr-2 ${isFlipping ? "animate-spin" : ""}`} />
        {isFlipping ? "Flipping..." : "Flip Coin"}
      </Button>

      {/* Stats Counter */}
      <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border/60 text-center">
        <div className="p-3 bg-muted/30 rounded-2xl border border-border/40">
          <span className="text-xs text-muted-foreground block font-medium">Heads</span>
          <span className="text-xl font-bold font-mono text-primary">{headsCount}</span>
          <span className="text-[10px] text-muted-foreground block">
            {totalFlips ? `${Math.round((headsCount / totalFlips) * 100)}%` : "0%"}
          </span>
        </div>

        <div className="p-3 bg-muted/30 rounded-2xl border border-border/40">
          <span className="text-xs text-muted-foreground block font-medium">Tails</span>
          <span className="text-xl font-bold font-mono text-primary">{tailsCount}</span>
          <span className="text-[10px] text-muted-foreground block">
            {totalFlips ? `${Math.round((tailsCount / totalFlips) * 100)}%` : "0%"}
          </span>
        </div>

        <div className="p-3 bg-muted/30 rounded-2xl border border-border/40">
          <span className="text-xs text-muted-foreground block font-medium">Total Flips</span>
          <span className="text-xl font-bold font-mono text-foreground">{totalFlips}</span>
          <span className="text-[10px] text-muted-foreground block">100%</span>
        </div>
      </div>
    </div>
  );
}
