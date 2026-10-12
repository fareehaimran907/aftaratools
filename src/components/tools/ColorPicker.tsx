"use client";

import { useTranslations } from "next-intl";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, Pipette, RefreshCw, Sparkles } from "lucide-react";

export function ColorPicker() {
  const t = useTranslations("Tools.color-picker.ui");
  const [color, setColor] = useState("#6366F1");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const hex = color.toUpperCase();
  const r = parseInt(hex.slice(1, 3), 16) || 0;
  const g = parseInt(hex.slice(3, 5), 16) || 0;
  const b = parseInt(hex.slice(5, 7), 16) || 0;

  // HSL calculation
  const rN = r / 255, gN = g / 255, bN = b / 255;
  const max = Math.max(rN, gN, bN), min = Math.min(rN, gN, bN);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rN: h = (gN - bN) / d + (gN < bN ? 6 : 0); break;
      case gN: h = (bN - rN) / d + 2; break;
      case bN: h = (rN - gN) / d + 4; break;
    }
    h = Math.round(h * 60);
  }
  const hDeg = h;
  const sPct = Math.round(s * 100);
  const lPct = Math.round(l * 100);

  const rgbStr = `rgb(${r}, ${g}, ${b})`;
  const hslStr = `hsl(${hDeg}, ${sPct}%, ${lPct}%)`;

  // Color harmonies
  const hslToHex = (hVal: number, sVal: number, lVal: number) => {
    hVal = ((hVal % 360) + 360) % 360;
    const sDec = sVal / 100, lDec = lVal / 100;
    const c = (1 - Math.abs(2 * lDec - 1)) * sDec;
    const x = c * (1 - Math.abs(((hVal / 60) % 2) - 1));
    const m = lDec - c / 2;
    let r1 = 0, g1 = 0, b1 = 0;
    if (hVal < 60) { r1 = c; g1 = x; }
    else if (hVal < 120) { r1 = x; g1 = c; }
    else if (hVal < 180) { g1 = c; b1 = x; }
    else if (hVal < 240) { g1 = x; b1 = c; }
    else if (hVal < 300) { r1 = x; b1 = c; }
    else { r1 = c; b1 = x; }
    const toH = (val: number) => Math.round((val + m) * 255).toString(16).padStart(2, "0").toUpperCase();
    return `#${toH(r1)}${toH(g1)}${toH(b1)}`;
  };

  const complementary = hslToHex(hDeg + 180, sPct, lPct);
  const analogous1 = hslToHex(hDeg - 30, sPct, lPct);
  const analogous2 = hslToHex(hDeg + 30, sPct, lPct);
  const triadic1 = hslToHex(hDeg + 120, sPct, lPct);
  const triadic2 = hslToHex(hDeg + 240, sPct, lPct);

  // Luminance
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  const textColor = lum > 0.5 ? "#000000" : "#FFFFFF";

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Pipette className="w-5 h-5" />
          <span>{t("title")}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setColor("#6366F1")}
          className="h-8 text-xs text-muted-foreground"
        >
          <RefreshCw className="w-3.5 h-3.5 mr-1" />
          {t("reset")}
        </Button>
      </div>

      {/* Hero Visual Picker */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div
          className="sm:col-span-2 h-44 rounded-2xl border border-border shadow-inner p-5 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
          style={{ backgroundColor: color }}
        >
          <div className="flex justify-between items-start">
            <span
              className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase backdrop-blur-md bg-black/30 text-white"
            >
              Preview
            </span>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
            />
          </div>
          <div className="backdrop-blur-md bg-black/40 rounded-xl p-3 inline-block self-start text-white">
            <div className="text-2xl font-bold font-mono">{hex}</div>
            <div className="text-xs opacity-80 font-mono">{rgbStr}</div>
          </div>
        </div>

        {/* Quick controls */}
        <div className="space-y-4 flex flex-col justify-center">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-muted-foreground">{t("pickColor")}</label>
            <div className="flex gap-2">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-12 h-11 rounded-xl cursor-pointer border border-border p-1 bg-transparent shrink-0"
              />
              <Input
                type="text"
                value={hex}
                onChange={(e) => setColor(e.target.value)}
                className="font-mono uppercase h-11 bg-muted/40 rounded-xl"
              />
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => {
              const rand = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0").toUpperCase()}`;
              setColor(rand);
            }}
            className="w-full text-xs font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-primary" />
            {t("randomColor")}
          </Button>
        </div>
      </div>

      {/* {t("colorHarmonies")} */}
      <div className="mb-8 space-y-3">
        <h4 className="text-sm font-semibold text-foreground">Color Harmonies</h4>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div
            onClick={() => setColor(complementary)}
            className="h-20 rounded-xl p-2 flex flex-col justify-between cursor-pointer border border-border/60 transition-transform hover:scale-105 shadow-sm"
            style={{ backgroundColor: complementary }}
          >
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/40 text-white w-fit">Comp</span>
            <span className="text-xs font-mono font-bold text-white drop-shadow">{complementary}</span>
          </div>

          <div
            onClick={() => setColor(analogous1)}
            className="h-20 rounded-xl p-2 flex flex-col justify-between cursor-pointer border border-border/60 transition-transform hover:scale-105 shadow-sm"
            style={{ backgroundColor: analogous1 }}
          >
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/40 text-white w-fit">Analog 1</span>
            <span className="text-xs font-mono font-bold text-white drop-shadow">{analogous1}</span>
          </div>

          <div
            onClick={() => setColor(analogous2)}
            className="h-20 rounded-xl p-2 flex flex-col justify-between cursor-pointer border border-border/60 transition-transform hover:scale-105 shadow-sm"
            style={{ backgroundColor: analogous2 }}
          >
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/40 text-white w-fit">Analog 2</span>
            <span className="text-xs font-mono font-bold text-white drop-shadow">{analogous2}</span>
          </div>

          <div
            onClick={() => setColor(triadic1)}
            className="h-20 rounded-xl p-2 flex flex-col justify-between cursor-pointer border border-border/60 transition-transform hover:scale-105 shadow-sm"
            style={{ backgroundColor: triadic1 }}
          >
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/40 text-white w-fit">Triadic 1</span>
            <span className="text-xs font-mono font-bold text-white drop-shadow">{triadic1}</span>
          </div>

          <div
            onClick={() => setColor(triadic2)}
            className="h-20 rounded-xl p-2 flex flex-col justify-between cursor-pointer border border-border/60 transition-transform hover:scale-105 shadow-sm"
            style={{ backgroundColor: triadic2 }}
          >
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/40 text-white w-fit">Triadic 2</span>
            <span className="text-xs font-mono font-bold text-white drop-shadow">{triadic2}</span>
          </div>
        </div>
      </div>

      {/* Copy Formats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3 bg-muted/30 border border-border/40 rounded-xl flex items-center justify-between">
          <div>
            <span className="text-[10px] text-muted-foreground font-bold uppercase block">HEX</span>
            <span className="font-mono font-bold text-foreground text-xs">{hex}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => copy(hex, "hex")} className="h-7 px-2">
            {copiedKey === "hex" ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
          </Button>
        </div>

        <div className="p-3 bg-muted/30 border border-border/40 rounded-xl flex items-center justify-between">
          <div>
            <span className="text-[10px] text-muted-foreground font-bold uppercase block">RGB</span>
            <span className="font-mono font-bold text-foreground text-xs">{rgbStr}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => copy(rgbStr, "rgb")} className="h-7 px-2">
            {copiedKey === "rgb" ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
          </Button>
        </div>

        <div className="p-3 bg-muted/30 border border-border/40 rounded-xl flex items-center justify-between">
          <div>
            <span className="text-[10px] text-muted-foreground font-bold uppercase block">HSL</span>
            <span className="font-mono font-bold text-foreground text-xs">{hslStr}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => copy(hslStr, "hsl")} className="h-7 px-2">
            {copiedKey === "hsl" ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
