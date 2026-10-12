"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, Type, RotateCcw } from "lucide-react";

export function TextCaseConverter() {
  const [text, setText] = useState("The quick brown fox jumps over the lazy dog");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Conversion functions
  const toUpper = (s: string) => s.toUpperCase();
  const toLower = (s: string) => s.toLowerCase();

  const toSentence = (s: string) =>
    s.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());

  const toTitle = (s: string) =>
    s
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const cleanWords = (s: string) =>
    s
      .replace(/[^a-zA-Z0-9]+/g, " ")
      .trim()
      .split(/\s+/);

  const toCamel = (s: string) => {
    const words = cleanWords(s);
    return words
      .map((w, i) => (i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()))
      .join("");
  };

  const toSnake = (s: string) => cleanWords(s).map((w) => w.toLowerCase()).join("_");
  const toKebab = (s: string) => cleanWords(s).map((w) => w.toLowerCase()).join("-");
  const toConstant = (s: string) => cleanWords(s).map((w) => w.toUpperCase()).join("_");
  const toDot = (s: string) => cleanWords(s).map((w) => w.toLowerCase()).join(".");

  const toAlternating = (s: string) =>
    s
      .split("")
      .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
      .join("");

  const copy = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  const cases = [
    { key: "upper", label: "UPPERCASE", value: toUpper(text) },
    { key: "lower", label: "lowercase", value: toLower(text) },
    { key: "title", label: "Title Case", value: toTitle(text) },
    { key: "sentence", label: "Sentence case", value: toSentence(text) },
    { key: "camel", label: "camelCase", value: toCamel(text) },
    { key: "kebab", label: "kebab-case", value: toKebab(text) },
    { key: "snake", label: "snake_case", value: toSnake(text) },
    { key: "constant", label: "CONSTANT_CASE", value: toConstant(text) },
    { key: "dot", label: "dot.case", value: toDot(text) },
    { key: "alternating", label: "aLtErNaTiNg cAsE", value: toAlternating(text) },
  ];

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Type className="w-5 h-5" />
          <span>Text Case Converter</span>
        </div>
        <Button variant="ghost" size="sm" onClick={() => setText("")} className="h-8 text-xs text-muted-foreground">
          <RotateCcw className="w-3.5 h-3.5 mr-1" />
          Clear
        </Button>
      </div>

      {/* Input Text Area */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-semibold text-muted-foreground">
          <label>Original Text</label>
          <span>{wordCount} words &bull; {charCount} characters</span>
        </div>
        <textarea
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here to convert into various cases..."
          className="w-full p-4 bg-muted/40 border border-border rounded-2xl font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Converted Cases Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
        {cases.map((c) => (
          <div
            key={c.key}
            className="p-4 bg-muted/20 hover:bg-muted/40 border border-border/50 rounded-2xl flex flex-col justify-between transition-colors group"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-muted-foreground uppercase">{c.label}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copy(c.value, c.key)}
                className="h-7 px-2 text-xs"
              >
                {copiedKey === c.key ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500 mr-1" />
                ) : (
                  <Copy className="w-3.5 h-3.5 mr-1" />
                )}
                {copiedKey === c.key ? "Copied" : "Copy"}
              </Button>
            </div>
            <div className="font-mono text-sm font-semibold text-foreground break-all select-all line-clamp-2">
              {c.value || "—"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
