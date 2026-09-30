"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolEditor } from "@/components/tools/ui";
import { FileCode2 } from "lucide-react";

function minifyHtml(html: string) {
  if (!html) return "";
  return html
    .replace(/<!--[\s\S]*?-->/g, '') // Remove comments
    .replace(/\s+/g, ' ') // Collapse whitespace
    .replace(/>\s+</g, '><') // Remove space between tags
    .trim();
}

export function HtmlMinifier() {
  const t = useTranslations("Tools.html-minifier.ui");
  const [input, setInput] = useState("");
  const output = minifyHtml(input);
  
  const inSize = new Blob([input]).size;
  const outSize = new Blob([output]).size;
  const saved = inSize - outSize;
  const savedPct = inSize > 0 ? ((saved / inSize) * 100).toFixed(1) : "0.0";

  return (
    <ToolLayout.Stacked>
      <ToolEditor
        inputLabel={<><FileCode2 className="w-4 h-4" /> {t('inputHtml')}</>}
        outputLabel={<>{t('minifiedHtml')}</>}
        input={input}
        output={output}
        onInputChange={setInput}
        inputStats={`${inSize} ${t('bytes')}`}
        outputStats={`${outSize} ${t('bytes')} (-${savedPct}%)`}
        inputPlaceholder="Paste your raw HTML here..."
        outputPlaceholder="Minified HTML will appear here..."
      />
    </ToolLayout.Stacked>
  );
}
