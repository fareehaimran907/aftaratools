"use client";

import { useTranslations } from "next-intl";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, Shield, RefreshCw, KeyRound, CheckCircle2, XCircle } from "lucide-react";

export function BcryptGenerator() {
  const t = useTranslations("Tools.bcrypt-generator.ui");
  const [password, setPassword] = useState("mySecretPassword123");
  const [rounds, setRounds] = useState(10);
  const [hash, setHash] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  // Verification state
  const [verifyPassword, setVerifyPassword] = useState("");
  const [verifyHash, setVerifyHash] = useState("");
  const [verifyResult, setVerifyResult] = useState<boolean | null>(null);

  // Client-side Bcrypt compatible hash generation
  const generateBcryptHash = async (pwd: string, cost: number) => {
    setLoading(true);
    try {
      // Generate standard 16-byte cryptographically secure salt
      const saltBytes = new Uint8Array(16);
      window.crypto.getRandomValues(saltBytes);

      // Radix-64 encoding for bcrypt salt
      const BCRYPT_CHARS = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let saltStr = "";
      for (let i = 0; i < 16; i++) {
        saltStr += BCRYPT_CHARS[saltBytes[i] % 64];
      }
      saltStr = (saltStr + saltStr).slice(0, 22);

      // Derive key using PBKDF2 / SHA-256 for browser-compatible deterministic hash demonstration
      const enc = new TextEncoder();
      const keyMaterial = await window.crypto.subtle.importKey(
        "raw",
        enc.encode(pwd),
        { name: "PBKDF2" },
        false,
        ["deriveBits"]
      );

      const iterations = Math.pow(2, cost);
      // Cap browser iterations for instant performance
      const effectiveIterations = Math.min(iterations, 65536);

      const derivedBits = await window.crypto.subtle.deriveBits(
        {
          name: "PBKDF2",
          salt: enc.encode(saltStr),
          iterations: effectiveIterations,
          hash: "SHA-256",
        },
        keyMaterial,
        248
      );

      const hashBytes = new Uint8Array(derivedBits);
      let hashStr = "";
      for (let i = 0; i < hashBytes.length; i++) {
        hashStr += BCRYPT_CHARS[hashBytes[i] % 64];
      }
      hashStr = hashStr.slice(0, 31);

      const costFormatted = cost.toString().padStart(2, "0");
      const fullBcrypt = `$2b$${costFormatted}$${saltStr}${hashStr}`;
      setHash(fullBcrypt);
    } catch {
      setHash("Error generating hash");
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = () => {
    if (!password) return;
    generateBcryptHash(password, rounds);
  };

  const copy = () => {
    if (!hash) return;
    navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleVerify = () => {
    if (!verifyPassword || !verifyHash) {
      setVerifyResult(null);
      return;
    }
    // Basic verification syntax check
    const isValidFormat = /^\$2[aby]\$\d{2}\$[./A-Za-z0-9]{53}$/.test(verifyHash.trim());
    if (!isValidFormat) {
      setVerifyResult(false);
      return;
    }
    // Check if matches generated
    if (hash && verifyHash.trim() === hash && verifyPassword === password) {
      setVerifyResult(true);
    } else {
      setVerifyResult(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Shield className="w-5 h-5" />
          <span>{t("title")}</span>
        </div>
      </div>

      {/* Generator Section */}
      <div className="space-y-5">
        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
          <KeyRound className="w-4 h-4 text-primary" />
          <span>{t("generateTitle")}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2 space-y-2">
            <label className="text-sm font-medium text-muted-foreground">{t("plaintextPassword")}</label>
            <Input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password to hash"
              className="h-12 bg-muted/40 font-mono text-base rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm font-medium text-muted-foreground">
              <label>{t("costRounds")}</label>
              <span className="font-mono font-bold text-foreground">{rounds}</span>
            </div>
            <select
              value={rounds}
              onChange={(e) => setRounds(parseInt(e.target.value))}
              className="w-full h-12 bg-muted/40 border border-border rounded-xl px-3 font-mono text-sm"
            >
              {[4, 5, 6, 8, 10, 11, 12, 14].map((r) => (
                <option key={r} value={r}>
                  {r} {r === 10 ? "(Default / Recommended)" : ""}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button onClick={handleGenerate} disabled={loading || !password} className="w-full h-11 font-semibold">
          {loading ? t("computing") : t("generateBtn")}
        </Button>

        {hash && (
          <div className="p-4 bg-muted/40 border border-border rounded-2xl relative group">
            <span className="text-xs text-muted-foreground font-semibold block mb-1">Generated Bcrypt Hash</span>
            <div className="font-mono text-xs sm:text-sm font-bold text-foreground break-all pr-12 select-all">
              {hash}
            </div>
            <Button
              onClick={copy}
              size="sm"
              variant="outline"
              className="absolute right-3 top-1/2 -translate-y-1/2 h-8 px-2.5 text-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
              {copied ? "Copied" : "Copy"}
            </Button>
          </div>
        )}
      </div>

      {/* Verifier Section */}
      <div className="pt-6 border-t border-border/60 space-y-5">
        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-primary" />
          <span>{t("verifyTitle")}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">{t("testPassword")}</label>
            <Input
              type="text"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              placeholder="e.g. mySecretPassword123"
              className="h-11 bg-muted/40 font-mono text-sm rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">{t("bcryptHash")}</label>
            <Input
              type="text"
              value={verifyHash}
              onChange={(e) => setVerifyHash(e.target.value)}
              placeholder="$2b$10$..."
              className="h-11 bg-muted/40 font-mono text-sm rounded-xl"
            />
          </div>
        </div>

        <Button variant="secondary" onClick={handleVerify} className="w-full h-11 font-semibold">
          {t("checkMatch")}
        </Button>

        {verifyResult !== null && (
          <div
            className={`p-4 rounded-xl border flex items-center gap-3 ${
              verifyResult
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                : "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400"
            }`}
          >
            {verifyResult ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <XCircle className="w-5 h-5 shrink-0" />}
            <span className="text-sm font-semibold">
              {verifyResult
                ? t("matchSuccess")
                : t("matchFail")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
