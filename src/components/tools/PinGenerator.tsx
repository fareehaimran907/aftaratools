"use client";

import { useTranslations } from "next-intl";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, RotateCcw, Key, Shield, RefreshCw } from "lucide-react";

export function PinGenerator() {
  const t = useTranslations("Tools.pin-generator.ui");
  const [length, setLength] = useState(4);
  const [quantity, setQuantity] = useState(5);
  const [excludeRepeated, setExcludeRepeated] = useState(false);
  const [excludeSequential, setExcludeSequential] = useState(true);
  const [pins, setPins] = useState<string[]>(["4829", "7193", "8305", "2941", "6518"]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const generateSinglePin = (len: number): string => {
    const isSequential = (s: string) => {
      let asc = true, desc = true;
      for (let i = 0; i < s.length - 1; i++) {
        const diff = parseInt(s[i + 1]) - parseInt(s[i]);
        if (diff !== 1) asc = false;
        if (diff !== -1) desc = false;
      }
      return asc || desc;
    };

    let attempts = 0;
    while (attempts < 200) {
      attempts++;
      let pin = "";
      const available = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

      if (excludeRepeated && len <= 10) {
        const shuffled = [...available].sort(() => Math.random() - 0.5);
        pin = shuffled.slice(0, len).join("");
      } else {
        for (let i = 0; i < len; i++) {
          pin += Math.floor(Math.random() * 10).toString();
        }
      }

      if (excludeSequential && len > 2 && isSequential(pin)) {
        continue;
      }

      return pin;
    }
    return Math.floor(Math.random() * Math.pow(10, len)).toString().padStart(len, "0");
  };

  const generatePins = () => {
    const newPins: string[] = [];
    for (let i = 0; i < quantity; i++) {
      newPins.push(generateSinglePin(length));
    }
    setPins(newPins);
  };

  const copyPin = (pin: string, index: number) => {
    navigator.clipboard.writeText(pin);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const copyAllPins = () => {
    navigator.clipboard.writeText(pins.join("\n"));
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Key className="w-5 h-5" />
          <span>{t("title")}</span>
        </div>
        <Button variant="outline" size="sm" onClick={generatePins} className="h-8 text-xs font-semibold">
          <RefreshCw className="w-3.5 h-3.5 mr-1.5" />
          {t("regenerate")}
        </Button>
      </div>

      {/* Preset Length Pills */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
            {t("pinLength")}
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[4, 6, 8, 10].map((len) => (
              <Button
                key={len}
                variant={length === len ? "default" : "outline"}
                onClick={() => setLength(len)}
                className="h-10 text-sm font-bold font-mono"
              >
                {len} Digits
              </Button>
            ))}
          </div>
        </div>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <label className="flex items-center gap-2 text-xs font-medium cursor-pointer p-3 rounded-xl border border-border/60 bg-muted/20">
            <input
              type="checkbox"
              checked={excludeSequential}
              onChange={(e) => setExcludeSequential(e.target.checked)}
              className="rounded border-border text-primary"
            />
            <span>{t("avoidSequences")}</span>
          </label>

          <label className="flex items-center gap-2 text-xs font-medium cursor-pointer p-3 rounded-xl border border-border/60 bg-muted/20">
            <input
              type="checkbox"
              checked={excludeRepeated}
              onChange={(e) => setExcludeRepeated(e.target.checked)}
              className="rounded border-border text-primary"
            />
            <span>{t("noRepeats")}</span>
          </label>
        </div>
      </div>

      {/* Generated PINs List */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center justify-between text-xs text-muted-foreground font-semibold">
          <span>{t("generatedPins")} ({pins.length})</span>
          <Button variant="ghost" size="sm" onClick={copyAllPins} className="h-6 text-xs px-2">
            {copiedAll ? <Check className="w-3 h-3 text-emerald-500 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
            {copiedAll ? t("copiedAll") : t("copyAll")}
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {pins.map((pin, idx) => (
            <div
              key={idx}
              onClick={() => copyPin(pin, idx)}
              className="p-3 bg-muted/30 hover:bg-muted/60 border border-border/50 rounded-xl flex items-center justify-between cursor-pointer transition-colors group"
            >
              <span className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-foreground pl-2">
                {pin}
              </span>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                {copiedIndex === idx ? (
                  <Check className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={generatePins} className="w-full h-12 font-bold text-base bg-primary">
        {t("generateNewPins")}
      </Button>
    </div>
  );
}
