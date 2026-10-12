"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, RotateCcw, Palette } from "lucide-react";

export function RgbToHex() {
  const [r, setR] = useState(59);
  const [g, setG] = useState(130);
  const [b, setB] = useState(246);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const clamp = (val: number) => Math.max(0, Math.min(255, isNaN(val) ? 0 : val));

  const red = clamp(r);
  const green = clamp(g);
  const blue = clamp(b);

  const toHex = (n: number) => n.toString(16).padStart(2, "0").toUpperCase();
  const hexUpper = `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
  const hexLower = hexUpper.toLowerCase();
  const rgbString = `rgb(${red}, ${green}, ${blue})`;

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleReset = () => {
    setR(59);
    setG(130);
    setB(246);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Palette className="w-5 h-5" />
          <span>RGB to HEX Converter</span>
        </div>
        <Button variant="ghost" size="sm" onClick={handleReset} className="h-8 text-xs text-muted-foreground">
          <RotateCcw className="w-3.5 h-3.5 mr-1" />
          Reset
        </Button>
      </div>

      {/* Live Color Swatch */}
      <div
        className="h-28 rounded-2xl border border-border shadow-inner flex items-center justify-center mb-8 transition-all duration-300"
        style={{ backgroundColor: rgbString }}
      >
        <span className="font-mono font-bold text-xl px-5 py-2 rounded-full backdrop-blur-md bg-black/40 text-white shadow-sm">
          {hexUpper}
        </span>
      </div>

      {/* R, G, B Sliders & Inputs */}
      <div className="space-y-5 mb-8">
        {/* Red */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-sm font-semibold">
            <span className="text-rose-500">Red (R)</span>
            <Input
              type="number"
              min="0"
              max="255"
              value={r}
              onChange={(e) => setR(parseInt(e.target.value) || 0)}
              className="w-20 text-center font-mono h-8 bg-muted/40"
            />
          </div>
          <input
            type="range"
            min="0"
            max="255"
            value={red}
            onChange={(e) => setR(parseInt(e.target.value))}
            className="w-full h-2.5 bg-muted rounded-lg appearance-none cursor-pointer accent-rose-500"
          />
        </div>

        {/* Green */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-sm font-semibold">
            <span className="text-emerald-500">Green (G)</span>
            <Input
              type="number"
              min="0"
              max="255"
              value={g}
              onChange={(e) => setG(parseInt(e.target.value) || 0)}
              className="w-20 text-center font-mono h-8 bg-muted/40"
            />
          </div>
          <input
            type="range"
            min="0"
            max="255"
            value={green}
            onChange={(e) => setG(parseInt(e.target.value))}
            className="w-full h-2.5 bg-muted rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
        </div>

        {/* Blue */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-sm font-semibold">
            <span className="text-blue-500">Blue (B)</span>
            <Input
              type="number"
              min="0"
              max="255"
              value={b}
              onChange={(e) => setB(parseInt(e.target.value) || 0)}
              className="w-20 text-center font-mono h-8 bg-muted/40"
            />
          </div>
          <input
            type="range"
            min="0"
            max="255"
            value={blue}
            onChange={(e) => setB(parseInt(e.target.value))}
            className="w-full h-2.5 bg-muted rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
        </div>
      </div>

      {/* Copy Outputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-4 bg-muted/30 border border-border/50 rounded-2xl flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground font-semibold uppercase block">HEX (Uppercase)</span>
            <span className="font-mono font-bold text-foreground text-sm">{hexUpper}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => copy(hexUpper, "upper")} className="h-8 px-2 text-xs">
            {copiedKey === "upper" ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          </Button>
        </div>

        <div className="p-4 bg-muted/30 border border-border/50 rounded-2xl flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground font-semibold uppercase block">HEX (Lowercase)</span>
            <span className="font-mono font-bold text-foreground text-sm">{hexLower}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => copy(hexLower, "lower")} className="h-8 px-2 text-xs">
            {copiedKey === "lower" ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          </Button>
        </div>

        <div className="p-4 bg-muted/30 border border-border/50 rounded-2xl flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground font-semibold uppercase block">RGB String</span>
            <span className="font-mono font-bold text-foreground text-sm">{rgbString}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => copy(rgbString, "rgb")} className="h-8 px-2 text-xs">
            {copiedKey === "rgb" ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          </Button>
        </div>

        <div className="p-4 bg-muted/30 border border-border/50 rounded-2xl flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground font-semibold uppercase block">CSS Color Code</span>
            <span className="font-mono font-bold text-foreground text-sm">color: {hexUpper};</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => copy(`color: ${hexUpper};`, "css")} className="h-8 px-2 text-xs">
            {copiedKey === "css" ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
