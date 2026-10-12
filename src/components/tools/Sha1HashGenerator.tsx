"use client";

import { useTranslations } from "next-intl";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, Hash, CheckCircle2, XCircle } from "lucide-react";
import CryptoJS from "crypto-js";

export function Sha1HashGenerator() {
  const t = useTranslations("Tools.sha1-hash-generator.ui");
  const [input, setInput] = useState("The quick brown fox jumps over the lazy dog");
  const [uppercase, setUppercase] = useState(false);
  const [copied, setCopied] = useState(false);
  const [verifyChecksum, setVerifyChecksum] = useState("");

  const hash = useMemo(() => {
    if (!input) return "";
    const h = CryptoJS.SHA1(input).toString();
    return uppercase ? h.toUpperCase() : h.toLowerCase();
  }, [input, uppercase]);

  const copy = () => {
    if (!hash) return;
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isMatch = verifyChecksum.trim()
    ? verifyChecksum.trim().toLowerCase() === hash.toLowerCase()
    : null;

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Hash className="w-5 h-5" />
          <span>{t("title")}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setUppercase(!uppercase)}
          className="text-xs h-8"
        >
          {uppercase ? "UPPERCASE" : "lowercase"}
        </Button>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground">{t("inputString")}</label>
        <textarea
          rows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to generate 40-character SHA-1 digest..."
          className="w-full p-4 bg-muted/40 border border-border rounded-2xl font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="p-4 sm:p-5 bg-muted/40 border border-border rounded-2xl relative group">
        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider block mb-1">
          {t("digestLabel")}
        </span>
        <div className="font-mono text-sm sm:text-base font-bold text-foreground break-all pr-12 select-all">
          {hash || "—"}
        </div>
        <Button
          onClick={copy}
          disabled={!hash}
          size="sm"
          className="absolute right-3 top-1/2 -translate-y-1/2 h-9 px-3 text-xs"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
          {copied ? t("copied") : t("copy")}
        </Button>
      </div>

      <div className="pt-4 border-t border-border/60 space-y-3">
        <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">
          {t("verifyLabel")}
        </label>
        <Input
          type="text"
          value={verifyChecksum}
          onChange={(e) => setVerifyChecksum(e.target.value)}
          placeholder="Paste expected SHA-1 hash to verify match..."
          className="h-10 bg-muted/30 font-mono text-xs rounded-xl"
        />

        {isMatch !== null && (
          <div
            className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-semibold ${
              isMatch
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                : "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400"
            }`}
          >
            {isMatch ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
            <span>{isMatch ? "Valid Match! Checksums are identical." : "Mismatch! Hashes do not match."}</span>
          </div>
        )}
      </div>
    </div>
  );
}
