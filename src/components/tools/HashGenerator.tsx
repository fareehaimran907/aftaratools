"use client";

import { useTranslations } from "next-intl";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, Hash, RefreshCw } from "lucide-react";
import CryptoJS from "crypto-js";

export function HashGenerator() {
  const t = useTranslations("Tools.hash-generator.ui");
  const [input, setInput] = useState("Hello, World!");
  const [uppercase, setUppercase] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const hashes = useMemo(() => {
    if (!input) {
      return {
        md5: "",
        sha1: "",
        sha256: "",
        sha512: "",
        sha384: "",
        ripemd160: "",
      };
    }

    const fmt = (str: string) => (uppercase ? str.toUpperCase() : str.toLowerCase());

    return {
      md5: fmt(CryptoJS.MD5(input).toString()),
      sha1: fmt(CryptoJS.SHA1(input).toString()),
      sha256: fmt(CryptoJS.SHA256(input).toString()),
      sha512: fmt(CryptoJS.SHA512(input).toString()),
      sha384: fmt(CryptoJS.SHA384(input).toString()),
      ripemd160: fmt(CryptoJS.RIPEMD160(input).toString()),
    };
  }, [input, uppercase]);

  const copy = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  const copyAll = () => {
    const text = Object.entries(hashes)
      .map(([k, v]) => `${k.toUpperCase()}: ${v}`)
      .join("\n");
    navigator.clipboard.writeText(text);
    setCopiedKey("all");
    setTimeout(() => setCopiedKey(null), 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Hash className="w-5 h-5" />
          <span>{t("title")}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setUppercase(!uppercase)}
            className="text-xs h-8"
          >
            {uppercase ? "UPPERCASE" : "lowercase"}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setInput("")} className="text-xs h-8 text-muted-foreground">
            {t("clear")}
          </Button>
        </div>
      </div>

      {/* Input Text Area */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground">{t("inputString")}</label>
        <textarea
          rows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type or paste any text to hash..."
          className="w-full p-4 bg-muted/40 border border-border rounded-2xl font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Hash Results List */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs font-semibold text-muted-foreground">
          <span>Cryptographic Hash Outputs</span>
          <Button variant="ghost" size="sm" onClick={copyAll} className="h-6 text-xs px-2">
            {copiedKey === "all" ? <Check className="w-3 h-3 text-emerald-500 mr-1" /> : <Copy className="w-3 h-3 mr-1" />}
            {t("copyAll")}
          </Button>
        </div>

        {[
          { key: "sha256", label: "SHA-256 (256-bit)", val: hashes.sha256 },
          { key: "sha512", label: "SHA-512 (512-bit)", val: hashes.sha512 },
          { key: "md5", label: "MD5 (128-bit)", val: hashes.md5 },
          { key: "sha1", label: "SHA-1 (160-bit)", val: hashes.sha1 },
          { key: "sha384", label: "SHA-384 (384-bit)", val: hashes.sha384 },
          { key: "ripemd160", label: "RIPEMD-160", val: hashes.ripemd160 },
        ].map((item) => (
          <div
            key={item.key}
            className="p-3.5 bg-muted/30 border border-border/50 rounded-xl flex items-center justify-between gap-3 group"
          >
            <div className="min-w-0 flex-1">
              <span className="text-[11px] font-bold text-muted-foreground uppercase block mb-0.5">
                {item.label}
              </span>
              <div className="font-mono text-xs font-semibold text-foreground break-all select-all">
                {item.val || "—"}
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copy(item.val, item.key)}
              disabled={!item.val}
              className="h-8 px-2.5 shrink-0 text-xs"
            >
              {copiedKey === item.key ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
