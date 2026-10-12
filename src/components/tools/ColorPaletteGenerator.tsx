"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, Lock, Unlock, RefreshCw, Palette, Download } from "lucide-react";

interface PaletteColor {
  hex: string;
  locked: boolean;
}

export function ColorPaletteGenerator() {
  const [colors, setColors] = useState<PaletteColor[]>([
    { hex: "#264653", locked: false },
    { hex: "#2A9D8F", locked: false },
    { hex: "#E9C46A", locked: false },
    { hex: "#F4A261", locked: false },
    { hex: "#E76F51", locked: false },
  ]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const getRandomHex = () =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()}`;

  const generate = useCallback(() => {
    setColors((prev) =>
      prev.map((c) => (c.locked ? c : { ...c, hex: getRandomHex() }))
    );
  }, []);

  const toggleLock = (index: number) => {
    setColors((prev) =>
      prev.map((c, i) => (i === index ? { ...c, locked: !c.locked } : c))
    );
  };

  const copyColor = (hex: string, index: number) => {
    navigator.clipboard.writeText(hex);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const copyAllCss = () => {
    const css = `:root {\n${colors
      .map((c, i) => `  --color-${i + 1}: ${c.hex};`)
      .join("\n")}\n}`;
    navigator.clipboard.writeText(css);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  // Spacebar to generate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" && e.target === document.body) {
        e.preventDefault();
        generate();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [generate]);

  const getLuminance = (hex: string) => {
    const clean = hex.replace("#", "");
    const r = parseInt(clean.slice(0, 2), 16) || 0;
    const g = parseInt(clean.slice(2, 4), 16) || 0;
    const b = parseInt(clean.slice(4, 6), 16) || 0;
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border/60">
        <div>
          <div className="flex items-center gap-2 text-primary font-semibold text-lg">
            <Palette className="w-5 h-5" />
            <span>Color Palette Generator</span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            Press <kbd className="px-1.5 py-0.5 bg-muted rounded border text-[10px] font-mono">Spacebar</kbd> or click Generate to create fresh palettes.
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" onClick={copyAllCss} className="text-xs h-9">
            {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-500 mr-1.5" /> : <Copy className="w-3.5 h-3.5 mr-1.5" />}
            {copiedAll ? "Copied CSS" : "Export CSS"}
          </Button>
          <Button onClick={generate} size="sm" className="text-xs h-9 font-semibold">
            <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
            Generate New
          </Button>
        </div>
      </div>

      {/* Palette Bars Container */}
      <div className="grid grid-cols-1 sm:grid-cols-5 rounded-2xl overflow-hidden border border-border/80 shadow-md h-96 sm:h-[400px]">
        {colors.map((c, idx) => {
          const lum = getLuminance(c.hex);
          const textColor = lum > 0.5 ? "text-neutral-900" : "text-white";
          const subColor = lum > 0.5 ? "text-neutral-900/70" : "text-white/70";

          return (
            <div
              key={idx}
              className="relative flex flex-row sm:flex-col justify-between items-center p-4 sm:p-6 transition-colors duration-300"
              style={{ backgroundColor: c.hex }}
            >
              {/* Lock Button */}
              <button
                onClick={() => toggleLock(idx)}
                className={`p-2 rounded-full backdrop-blur-md bg-black/20 hover:bg-black/40 text-white transition-all ${
                  c.locked ? "ring-2 ring-white/80" : ""
                }`}
                title={c.locked ? "Unlock color" : "Lock color"}
              >
                {c.locked ? <Lock className="w-4 h-4 text-amber-300" /> : <Unlock className="w-4 h-4 opacity-75" />}
              </button>

              {/* Color Code & Copy */}
              <div className="text-center">
                <button
                  onClick={() => copyColor(c.hex, idx)}
                  className={`group flex items-center gap-1.5 font-mono font-bold text-lg sm:text-xl tracking-wider ${textColor} hover:scale-105 transition-transform`}
                  title="Click to copy HEX"
                >
                  <span>{c.hex}</span>
                  {copiedIndex === idx ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
                <span className={`text-[11px] font-mono block mt-1 ${subColor}`}>
                  Color {idx + 1}
                </span>
              </div>

              {/* Native picker overlay on click */}
              <input
                type="color"
                value={c.hex}
                onChange={(e) => {
                  const val = e.target.value.toUpperCase();
                  setColors((prev) =>
                    prev.map((col, i) => (i === idx ? { ...col, hex: val } : col))
                  );
                }}
                className="w-7 h-7 opacity-0 hover:opacity-100 transition-opacity cursor-pointer rounded-full border border-white/40 p-0"
                title="Change manually"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
