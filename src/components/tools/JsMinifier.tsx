"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolEditor } from "@/components/tools/ui";
import { FileCode2 } from "lucide-react";

function minifyJs(js: string) {
  if (!js) return "";
  // Extremely basic minification for demonstration
  return js
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
    .replace(/\/\/.*/g, '') // Remove line comments
    .replace(/\s+/g, ' ') // Collapse whitespace
    .replace(/\s*([=+\-*/<>!&|{}\[\]();:,])\s*/g, '$1') // Remove space around operators
    .trim();
}

export function JsMinifier() {
  const t = useTranslations("Tools.js-minifier.ui");
  const [input, setInput] = useState("");
  const output = minifyJs(input);
  
  const inSize = new Blob([input]).size;
  const outSize = new Blob([output]).size;
  const saved = inSize - outSize;
  const savedPct = inSize > 0 ? ((saved / inSize) * 100).toFixed(1) : "0.0";

  return (
    <ToolLayout.Stacked>
      <ToolEditor
        inputLabel={<><FileCode2 className="w-4 h-4" /> {t('inputJs')}</>}
        outputLabel={<>{t('minifiedJs')}</>}
        input={input}
        output={output}
        onInputChange={setInput}
        inputStats={`${inSize} ${t('bytes')}`}
        outputStats={`${outSize} ${t('bytes')} (-${savedPct}%)`}
        inputPlaceholder="Paste your raw JS here..."
        outputPlaceholder="Minified JS will appear here..."
      />
    </ToolLayout.Stacked>
  );
}
