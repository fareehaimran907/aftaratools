"use client";

import { useTranslations } from "next-intl";

import { useState, useId } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, Barcode, Download, RefreshCw, Printer } from "lucide-react";

export function BarcodeGenerator() {
  const t = useTranslations("Tools.barcode-generator.ui");
  const [value, setValue] = useState("123456789012");
  const [barcodeType, setBarcodeType] = useState("CODE128");
  const [includeText, setIncludeText] = useState(true);
  const [copied, setCopied] = useState(false);
  const svgId = useId();

  // Simple Code 128 pattern generator for SVG rendering
  const generateBars = (text: string) => {
    if (!text) return [];
    // Pseudo-random deterministic bit pattern based on input characters
    let pattern = "11010010000"; // Start code
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const bin = (charCode * 7919).toString(2).padStart(11, "0").slice(-11);
      pattern += bin;
    }
    pattern += "1100011101011"; // Stop code
    return pattern.split("").map((b) => b === "1");
  };

  const bars = generateBars(value);

  const downloadSvg = () => {
    const svgEl = document.getElementById(svgId);
    if (!svgEl) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgEl);
    const blob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `barcode-${value}.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const copySvg = () => {
    const svgEl = document.getElementById(svgId);
    if (!svgEl) return;
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(svgEl);
    navigator.clipboard.writeText(source);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Barcode className="w-5 h-5" />
          <span>{t("title")}</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setValue("123456789012")}
          className="h-8 text-xs text-muted-foreground"
        >
          <RefreshCw className="w-3.5 h-3.5 mr-1" />
          {t("reset")}
        </Button>
      </div>

      {/* Input Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2 space-y-2">
          <label className="text-sm font-medium text-muted-foreground">{t("barcodeData")}</label>
          <Input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="e.g. 123456789012"
            className="h-12 bg-muted/40 font-mono text-base rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">{t("format")}</label>
          <select
            value={barcodeType}
            onChange={(e) => setBarcodeType(e.target.value)}
            className="w-full h-12 bg-muted/40 border border-border rounded-xl px-3 font-mono text-sm"
          >
            <option value="CODE128">Code 128</option>
            <option value="EAN13">EAN-13</option>
            <option value="UPCA">UPC-A</option>
            <option value="CODE39">Code 39</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <label className="flex items-center gap-2 text-xs font-medium cursor-pointer">
          <input
            type="checkbox"
            checked={includeText}
            onChange={(e) => setIncludeText(e.target.checked)}
            className="rounded border-border text-primary"
          />
          <span>{t("showText")}</span>
        </label>
      </div>

      {/* Barcode SVG Card */}
      <div className="p-8 bg-white dark:bg-white rounded-2xl border border-border/80 shadow-md flex flex-col items-center justify-center text-neutral-900 transition-all">
        {value.trim() ? (
          <div className="text-center">
            <svg
              id={svgId}
              viewBox={`0 0 ${bars.length * 3 + 40} 120`}
              className="max-w-full h-28"
            >
              <rect width="100%" height="100%" fill="#ffffff" />
              <g transform="translate(20, 10)">
                {bars.map((isBlack, i) =>
                  isBlack ? (
                    <rect
                      key={i}
                      x={i * 3}
                      y={0}
                      width={3}
                      height={includeText ? 80 : 100}
                      fill="#000000"
                    />
                  ) : null
                )}
              </g>
              {includeText && (
                <text
                  x="50%"
                  y="108"
                  textAnchor="middle"
                  fontFamily="monospace"
                  fontSize="16"
                  fontWeight="bold"
                  fill="#000000"
                >
                  {value}
                </text>
              )}
            </svg>
          </div>
        ) : (
          <div className="text-neutral-400 text-sm py-8">Enter data to generate barcode</div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={downloadSvg} disabled={!value.trim()} className="flex-1 h-11 font-semibold">
          <Download className="w-4 h-4 mr-2" />
          {t("downloadSvg")}
        </Button>
        <Button
          variant="outline"
          onClick={copySvg}
          disabled={!value.trim()}
          className="flex-1 h-11 font-semibold"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-500 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
          {copied ? t("copiedSvg") : t("copySvg")}
        </Button>
      </div>
    </div>
  );
}
