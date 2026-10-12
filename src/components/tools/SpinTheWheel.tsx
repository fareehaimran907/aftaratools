"use client";

import { useTranslations } from "next-intl";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RotateCw, Plus, Trash2, Trophy, Sparkles } from "lucide-react";

const PALETTE = [
  "#EF4444", "#F97316", "#F59E0B", "#10B981", "#06B6D4",
  "#3B82F6", "#6366F1", "#8B5CF6", "#EC4899", "#14B8A6"
];

export function SpinTheWheel() {
  const t = useTranslations("Tools.spin-the-wheel.ui");
  const [items, setItems] = useState<string[]>([
    "Pizza", "Burger", "Sushi", "Tacos", "Pasta", "Salad"
  ]);
  const [newItem, setNewItem] = useState("");
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  const addItem = () => {
    if (newItem.trim() && !items.includes(newItem.trim())) {
      setItems([...items, newItem.trim()]);
      setNewItem("");
    }
  };

  const removeItem = (index: number) => {
    if (items.length > 2) {
      setItems(items.filter((_, i) => i !== index));
    }
  };

  const spin = () => {
    if (isSpinning || items.length < 2) return;
    setIsSpinning(true);
    setWinner(null);

    const extraDegrees = 1800 + Math.floor(Math.random() * 360);
    const newRot = rotation + extraDegrees;
    setRotation(newRot);

    setTimeout(() => {
      // Determine winner based on pointer at top (270 deg)
      const degreesPerSlice = 360 / items.length;
      const normalizedAngle = (360 - (newRot % 360) + 270) % 360;
      const winningIndex = Math.floor(normalizedAngle / degreesPerSlice) % items.length;
      setWinner(items[winningIndex]);
      setIsSpinning(false);
    }, 3500);
  };

  const sliceAngle = 360 / items.length;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl space-y-8">
      <div className="flex items-center justify-between pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <RotateCw className="w-5 h-5" />
          <span>{t("title")}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Wheel Graphic Container */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 select-none">
            {/* Top Pointer Arrow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20 w-0 h-0 border-x-8 border-x-transparent border-t-[20px] border-t-rose-500 filter drop-shadow-md" />

            {/* Rotating SVG Wheel */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full rounded-full shadow-2xl transition-transform duration-[3500ms] ease-out"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {items.map((item, idx) => {
                const startAngle = idx * sliceAngle;
                const endAngle = (idx + 1) * sliceAngle;
                const rad = (deg: number) => (deg * Math.PI) / 180;
                const x1 = 50 + 50 * Math.cos(rad(startAngle));
                const y1 = 50 + 50 * Math.sin(rad(startAngle));
                const x2 = 50 + 50 * Math.cos(rad(endAngle));
                const y2 = 50 + 50 * Math.sin(rad(endAngle));
                const largeArc = sliceAngle > 180 ? 1 : 0;
                const pathData = `M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArc} 1 ${x2} ${y2} Z`;

                const midAngle = startAngle + sliceAngle / 2;
                const textX = 50 + 32 * Math.cos(rad(midAngle));
                const textY = 50 + 32 * Math.sin(rad(midAngle));

                return (
                  <g key={idx}>
                    <path
                      d={pathData}
                      fill={PALETTE[idx % PALETTE.length]}
                      stroke="#ffffff"
                      strokeWidth="0.5"
                    />
                    <text
                      x={textX}
                      y={textY}
                      fill="#ffffff"
                      fontSize="4.5"
                      fontWeight="bold"
                      textAnchor="middle"
                      dominantBaseline="central"
                      transform={`rotate(${midAngle + 90}, ${textX}, ${textY})`}
                    >
                      {item.slice(0, 10)}
                    </text>
                  </g>
                );
              })}
              <circle cx="50" cy="50" r="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            </svg>
          </div>

          <Button
            onClick={spin}
            disabled={isSpinning}
            className="mt-6 px-10 h-12 text-base font-bold bg-primary shadow-lg shadow-primary/20"
          >
            <RotateCw className={`w-4 h-4 mr-2 ${isSpinning ? "animate-spin" : ""}`} />
            {isSpinning ? t("spinning") : t("spinBtn")}
          </Button>

          {/* Winner Banner */}
          {winner && (
            <div className="mt-5 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-center animate-bounce">
              <span className="text-xs font-bold uppercase tracking-wider block">{t("winner")}</span>
              <span className="text-2xl font-black">{winner}</span>
            </div>
          )}
        </div>

        {/* Options Editor Sidebar */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold uppercase text-muted-foreground">{t("wheelSlices")} ({items.length})</h4>
          </div>

          <div className="flex gap-2">
            <Input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addItem()}
              placeholder={t("addChoice")}
              className="h-10 bg-muted/40 rounded-xl"
            />
            <Button size="sm" onClick={addItem} className="h-10 px-3">
              <Plus className="w-4 h-4" />
            </Button>
          </div>

          <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
            {items.map((it, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 bg-muted/30 border border-border/50 rounded-xl text-xs font-medium"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: PALETTE[idx % PALETTE.length] }}
                  />
                  <span>{it}</span>
                </div>
                {items.length > 2 && (
                  <button
                    onClick={() => removeItem(idx)}
                    className="text-muted-foreground hover:text-rose-500 transition-colors p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
