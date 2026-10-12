"use client";

import { useTranslations } from "next-intl";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, Lock, RefreshCw, ShieldCheck, ShieldAlert, Sparkles } from "lucide-react";

export function StrongPasswordGenerator() {
  const t = useTranslations("Tools.strong-password-generator.ui");
  const [length, setLength] = useState(24);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+~|}{[]:;?><,./-=";

    if (excludeAmbiguous) {
      upper = upper.replace(/[IO]/g, "");
      lower = lower.replace(/[lo]/g, "");
      numbers = numbers.replace(/[01]/g, "");
    }

    let charset = "";
    if (useUpper) charset += upper;
    if (useLower) charset += lower;
    if (useNumbers) charset += numbers;
    if (useSymbols) charset += symbols;

    if (!charset) {
      setPassword("Please select at least one character set.");
      return;
    }

    // Cryptographically secure generation
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    let result = "";
    for (let i = 0; i < length; i++) {
      result += charset[array[i] % charset.length];
    }
    setPassword(result);
  };

  useEffect(() => {
    generate();
  }, [length, useUpper, useLower, useNumbers, useSymbols, excludeAmbiguous]);

  const copy = () => {
    if (!password || password.startsWith("Please")) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Entropy calculation
  let poolSize = 0;
  if (useUpper) poolSize += 26;
  if (useLower) poolSize += 26;
  if (useNumbers) poolSize += 10;
  if (useSymbols) poolSize += 30;
  const entropy = Math.round(length * Math.log2(poolSize || 1));

  const getStrengthLabel = () => {
    if (entropy < 40) return { label: "Weak", color: "bg-rose-500", text: "text-rose-500" };
    if (entropy < 65) return { label: "Medium", color: "bg-amber-500", text: "text-amber-500" };
    if (entropy < 90) return { label: "Strong", color: "bg-blue-500", text: "text-blue-500" };
    return { label: "Very Strong", color: "bg-emerald-500", text: "text-emerald-500" };
  };

  const strength = getStrengthLabel();

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Lock className="w-5 h-5" />
          <span>{t("title")}</span>
        </div>
        <Button variant="ghost" size="sm" onClick={generate} className="h-8 text-xs text-muted-foreground">
          <RefreshCw className="w-3.5 h-3.5 mr-1" />
          {t("regenerate")}
        </Button>
      </div>

      {/* Password Display Box */}
      <div className="p-4 sm:p-5 bg-muted/40 border border-border rounded-2xl mb-6 relative group">
        <div className="font-mono text-xl sm:text-2xl font-bold text-foreground break-all select-all pr-12 min-h-[2.5rem] flex items-center">
          {password}
        </div>
        <Button
          onClick={copy}
          size="sm"
          className="absolute right-3 top-1/2 -translate-y-1/2 h-10 px-3 font-semibold shadow-sm"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
          {copied ? t("copied") : t("copy")}
        </Button>
      </div>

      {/* Strength & Entropy meter */}
      <div className="space-y-2 mb-8">
        <div className="flex justify-between items-center text-xs font-semibold">
          <span className="text-muted-foreground">{t("passwordStrength")}: <strong className={strength.text}>{strength.label}</strong></span>
          <span className="text-muted-foreground font-mono">{entropy} bits entropy</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${strength.color}`}
            style={{ width: `${Math.min(100, (entropy / 128) * 100)}%` }}
          />
        </div>
      </div>

      {/* Settings Grid */}
      <div className="space-y-5 mb-8">
        {/* Length Slider */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-sm font-semibold">
            <span>{t("passwordLength")}</span>
            <span className="font-mono text-base font-bold text-primary">{length}</span>
          </div>
          <input
            type="range"
            min="8"
            max="128"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>

        {/* Character Set Checkboxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <label className="flex items-center gap-2.5 text-xs font-medium cursor-pointer p-3 rounded-xl border border-border/60 bg-muted/20">
            <input
              type="checkbox"
              checked={useUpper}
              onChange={(e) => setUseUpper(e.target.checked)}
              className="rounded border-border text-primary"
            />
            <span>{t("includeUppercase")}</span>
          </label>

          <label className="flex items-center gap-2.5 text-xs font-medium cursor-pointer p-3 rounded-xl border border-border/60 bg-muted/20">
            <input
              type="checkbox"
              checked={useLower}
              onChange={(e) => setUseLower(e.target.checked)}
              className="rounded border-border text-primary"
            />
            <span>{t("includeLowercase")}</span>
          </label>

          <label className="flex items-center gap-2.5 text-xs font-medium cursor-pointer p-3 rounded-xl border border-border/60 bg-muted/20">
            <input
              type="checkbox"
              checked={useNumbers}
              onChange={(e) => setUseNumbers(e.target.checked)}
              className="rounded border-border text-primary"
            />
            <span>{t("includeNumbers")}</span>
          </label>

          <label className="flex items-center gap-2.5 text-xs font-medium cursor-pointer p-3 rounded-xl border border-border/60 bg-muted/20">
            <input
              type="checkbox"
              checked={useSymbols}
              onChange={(e) => setUseSymbols(e.target.checked)}
              className="rounded border-border text-primary"
            />
            <span>{t("includeSymbols")}</span>
          </label>

          <label className="sm:col-span-2 flex items-center gap-2.5 text-xs font-medium cursor-pointer p-3 rounded-xl border border-border/60 bg-muted/20">
            <input
              type="checkbox"
              checked={excludeAmbiguous}
              onChange={(e) => setExcludeAmbiguous(e.target.checked)}
              className="rounded border-border text-primary"
            />
            <span>{t("excludeAmbiguous")}</span>
          </label>
        </div>
      </div>

      <Button onClick={generate} className="w-full h-12 font-bold text-base bg-primary">
        {t("generateBtn")}
      </Button>
    </div>
  );
}
