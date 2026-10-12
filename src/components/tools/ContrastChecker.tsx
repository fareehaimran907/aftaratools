"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, Contrast, RefreshCw, CheckCircle2, XCircle, ArrowRightLeft } from "lucide-react";

export function ContrastChecker() {
  const [foreground, setForeground] = useState("#FFFFFF");
  const [background, setBackground] = useState("#1E293B");
  const [copied, setCopied] = useState(false);

  // Helper to parse hex to linear RGB
  const getLuminance = (hex: string) => {
    const clean = hex.replace("#", "");
    const r = (parseInt(clean.slice(0, 2), 16) || 0) / 255;
    const g = (parseInt(clean.slice(2, 4), 16) || 0) / 255;
    const b = (parseInt(clean.slice(4, 6), 16) || 0) / 255;

    const toLinear = (c: number) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
    return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);

  const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
  const formattedRatio = ratio.toFixed(2);

  // WCAG 2.1 Criteria
  const normalAA = ratio >= 4.5;
  const normalAAA = ratio >= 7.0;
  const largeAA = ratio >= 3.0;
  const largeAAA = ratio >= 4.5;
  const uiComponents = ratio >= 3.0;

  const swapColors = () => {
    setForeground(background);
    setBackground(foreground);
  };

  const copyResult = () => {
    const text = `Contrast Ratio: ${formattedRatio}:1 (Foreground: ${foreground}, Background: ${background})`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Contrast className="w-5 h-5" />
          <span>Color Contrast Ratio Checker (WCAG)</span>
        </div>
        <Button variant="ghost" size="sm" onClick={swapColors} className="h-8 text-xs text-muted-foreground">
          <ArrowRightLeft className="w-3.5 h-3.5 mr-1" />
          Swap
        </Button>
      </div>

      {/* Color Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Text / Foreground Color</label>
          <div className="flex gap-2">
            <Input
              type="text"
              value={foreground}
              onChange={(e) => setForeground(e.target.value)}
              className="font-mono uppercase h-12 bg-muted/40 rounded-xl"
            />
            <input
              type="color"
              value={foreground.length === 7 ? foreground : "#FFFFFF"}
              onChange={(e) => setForeground(e.target.value)}
              className="w-12 h-12 rounded-xl cursor-pointer border border-border p-1 bg-transparent shrink-0"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Background Color</label>
          <div className="flex gap-2">
            <Input
              type="text"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              className="font-mono uppercase h-12 bg-muted/40 rounded-xl"
            />
            <input
              type="color"
              value={background.length === 7 ? background : "#000000"}
              onChange={(e) => setBackground(e.target.value)}
              className="w-12 h-12 rounded-xl cursor-pointer border border-border p-1 bg-transparent shrink-0"
            />
          </div>
        </div>
      </div>

      {/* Hero Contrast Ratio & Live Preview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {/* Ratio Display */}
        <div className="p-6 rounded-2xl border border-border bg-muted/20 flex flex-col justify-center items-center text-center">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
            Contrast Ratio
          </span>
          <div className="text-5xl sm:text-6xl font-mono font-black text-foreground">
            {formattedRatio}:1
          </div>
          <span
            className={`mt-3 px-3 py-1 rounded-full text-xs font-bold uppercase ${
              normalAA ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
            }`}
          >
            {normalAA ? "Passes WCAG AA" : "Fails WCAG AA"}
          </span>
        </div>

        {/* Live Preview Card */}
        <div
          className="p-6 rounded-2xl border border-border flex flex-col justify-between shadow-inner"
          style={{ backgroundColor: background, color: foreground }}
        >
          <div>
            <span className="text-xs font-mono uppercase opacity-75">Live Preview</span>
            <h4 className="text-xl font-bold mt-1">Sample Heading</h4>
            <p className="text-sm opacity-90 mt-1 leading-relaxed">
              This is an example paragraph to test readability and visual contrast.
            </p>
          </div>
          <div className="pt-3">
            <span
              className="inline-block text-xs font-semibold px-3 py-1.5 rounded-lg border"
              style={{ borderColor: foreground }}
            >
              Interactive Element
            </span>
          </div>
        </div>
      </div>

      {/* WCAG Compliance Badges */}
      <div className="space-y-3 mb-6">
        <h4 className="text-sm font-semibold text-foreground">WCAG 2.1 Compliance Status</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Normal Text */}
          <div className="p-4 bg-muted/30 border border-border/50 rounded-2xl">
            <span className="text-xs font-semibold text-muted-foreground block mb-2">Normal Text</span>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between font-mono">
                <span>AA (4.5:1)</span>
                {normalAA ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <XCircle className="w-4 h-4 text-rose-500" />}
              </div>
              <div className="flex items-center justify-between font-mono">
                <span>AAA (7.0:1)</span>
                {normalAAA ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <XCircle className="w-4 h-4 text-rose-500" />}
              </div>
            </div>
          </div>

          {/* Large Text */}
          <div className="p-4 bg-muted/30 border border-border/50 rounded-2xl">
            <span className="text-xs font-semibold text-muted-foreground block mb-2">Large Text (18pt+)</span>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between font-mono">
                <span>AA (3.0:1)</span>
                {largeAA ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <XCircle className="w-4 h-4 text-rose-500" />}
              </div>
              <div className="flex items-center justify-between font-mono">
                <span>AAA (4.5:1)</span>
                {largeAAA ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <XCircle className="w-4 h-4 text-rose-500" />}
              </div>
            </div>
          </div>

          {/* UI Components */}
          <div className="p-4 bg-muted/30 border border-border/50 rounded-2xl">
            <span className="text-xs font-semibold text-muted-foreground block mb-2">UI Components</span>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between font-mono">
                <span>AA (3.0:1)</span>
                {uiComponents ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <XCircle className="w-4 h-4 text-rose-500" />}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <Button variant="outline" size="sm" onClick={copyResult} className="text-xs">
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500 mr-1.5" /> : <Copy className="w-3.5 h-3.5 mr-1.5" />}
          {copied ? "Copied" : "Copy Results"}
        </Button>
      </div>
    </div>
  );
}
