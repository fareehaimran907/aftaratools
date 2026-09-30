"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolEditor } from "@/components/tools/ui";
import { FileCode2 } from "lucide-react";

function minifyCss(css: string) {
  if (!css) return "";
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ') // Collapse whitespace
    .replace(/\s*([\{\}\:\;\,])\s*/g, '$1') // Remove space around separators
    .replace(/;}/g, '}') // Remove last semicolon in block
    .trim();
}

export function CssMinifier() {
  const t = useTranslations("Tools.css-minifier.ui");
  const [input, setInput] = useState("");
  const output = minifyCss(input);
  
  const inSize = new Blob([input]).size;
  const outSize = new Blob([output]).size;
  const saved = inSize - outSize;
  const savedPct = inSize > 0 ? ((saved / inSize) * 100).toFixed(1) : "0.0";

  return (
    <ToolLayout.Stacked>
      <ToolEditor
        inputLabel={<><FileCode2 className="w-4 h-4" /> {t('inputCss')}</>}
        outputLabel={<>{t('minifiedCss')}</>}
        input={input}
        output={output}
        onInputChange={setInput}
        inputStats={`${inSize} ${t('bytes')}`}
        outputStats={`${outSize} ${t('bytes')} (-${savedPct}%)`}
        inputPlaceholder="Paste your raw CSS here..."
        outputPlaceholder="Minified CSS will appear here..."
      />
    </ToolLayout.Stacked>
  );
}
