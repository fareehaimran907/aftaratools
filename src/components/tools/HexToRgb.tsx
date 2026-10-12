"use client";

import { useTranslations } from "next-intl";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, RotateCcw, Palette, Sparkles } from "lucide-react";

export function HexToRgb() {
  const t = useTranslations("Tools.hex-to-rgb.ui");
  const [hex, setHex] = useState("#3B82F6");
  const [alpha, setAlpha] = useState("100");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const cleanHex = hex.trim().replace(/^#/, "");
  let r = 0, g = 0, b = 0;
  let isValid = false;

  if (cleanHex.length === 3) {
    r = parseInt(cleanHex[0] + cleanHex[0], 16);
    g = parseInt(cleanHex[1] + cleanHex[1], 16);
    b = parseInt(cleanHex[2] + cleanHex[2], 16);
    isValid = !isNaN(r) && !isNaN(g) && !isNaN(b);
  } else if (cleanHex.length === 6) {
    r = parseInt(cleanHex.slice(0, 2), 16);
    g = parseInt(cleanHex.slice(2, 4), 16);
    b = parseInt(cleanHex.slice(4, 6), 16);
    isValid = !isNaN(r) && !isNaN(g) && !isNaN(b);
  }

  const alphaVal = Math.max(0, Math.min(100, parseInt(alpha) || 100)) / 100;
  const rgbString = isValid ? `rgb(${r}, ${g}, ${b})` : "";
  const rgbaString = isValid ? `rgba(${r}, ${g}, ${b}, ${alphaVal})` : "";

  // Calculate HSL
  let hslString = "";
  if (isValid) {
    const rNorm = r / 255, gNorm = g / 255, bNorm = b / 255;
    const max = Math.max(rNorm, gNorm, bNorm), min = Math.min(rNorm, gNorm, bNorm);
    let h = 0, s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
        case gNorm: h = (bNorm - rNorm) / d + 2; break;
        case bNorm: h = (rNorm - gNorm) / d + 4; break;
      }
      h /= 6;
    }
    hslString = `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  }

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Palette className="w-5 h-5" />
          <span>{t("title")}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => { setHex("#3B82F6"); setAlpha("100"); }}
          className="h-8 text-xs text-muted-foreground"
        >
          <RotateCcw className="w-3.5 h-3.5 mr-1" />
          {t("reset")}
        </Button>
      </div>

      {/* Input controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="sm:col-span-2 space-y-2">
          <label className="text-sm font-medium text-muted-foreground">{t("hexColor")}</label>
          <div className="flex gap-2">
            <Input
              type="text"
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              placeholder="#3B82F6"
              className="font-mono text-lg uppercase h-12 bg-muted/40 rounded-xl"
            />
            <input
              type="color"
              value={isValid ? `#${cleanHex.length === 3 ? cleanHex.split("").map(c => c+c).join("") : cleanHex}` : "#000000"}
              onChange={(e) => setHex(e.target.value)}
              className="w-12 h-12 rounded-xl cursor-pointer border border-border shrink-0 bg-transparent p-1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm font-medium text-muted-foreground">
            <label>{t("opacity")}</label>
            <span className="font-mono">{alpha}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={alpha}
            onChange={(e) => setAlpha(e.target.value)}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer mt-3"
          />
        </div>
      </div>

      {/* Color Preview Swatch */}
      {isValid ? (
        <div className="space-y-6">
          <div
            className="h-28 rounded-2xl border border-border shadow-inner flex items-center justify-center transition-all duration-300"
            style={{ backgroundColor: rgbaString }}
          >
            <span
              className="font-mono font-bold text-lg px-4 py-1.5 rounded-full backdrop-blur-md bg-black/40 text-white shadow-sm"
            >
              {rgbaString}
            </span>
          </div>

          {/* Formats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 bg-muted/30 border border-border/50 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground font-semibold uppercase block">{t("rgbFormat")}</span>
                <span className="font-mono font-bold text-foreground text-sm">{rgbString}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => copy(rgbString, "rgb")} className="h-8 px-2 text-xs">
                {copiedKey === "rgb" ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </Button>
            </div>

            <div className="p-4 bg-muted/30 border border-border/50 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground font-semibold uppercase block">{t("rgbaFormat")}</span>
                <span className="font-mono font-bold text-foreground text-sm">{rgbaString}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => copy(rgbaString, "rgba")} className="h-8 px-2 text-xs">
                {copiedKey === "rgba" ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </Button>
            </div>

            <div className="p-4 bg-muted/30 border border-border/50 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground font-semibold uppercase block">{t("hslFormat")}</span>
                <span className="font-mono font-bold text-foreground text-sm">{hslString}</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => copy(hslString, "hsl")} className="h-8 px-2 text-xs">
                {copiedKey === "hsl" ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </Button>
            </div>

            <div className="p-4 bg-muted/30 border border-border/50 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground font-semibold uppercase block">{t("cssVar")}</span>
                <span className="font-mono font-bold text-foreground text-sm">--color: {r}, {g}, {b};</span>
              </div>
              <Button variant="ghost" size="sm" onClick={() => copy(`--color: ${r}, ${g}, ${b};`, "css")} className="h-8 px-2 text-xs">
                {copiedKey === "css" ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground border border-dashed rounded-2xl bg-muted/20">
          Enter a valid 3-character or 6-character HEX code (e.g. #3B82F6 or #FFF).
        </div>
      )}
    </div>
  );
}
