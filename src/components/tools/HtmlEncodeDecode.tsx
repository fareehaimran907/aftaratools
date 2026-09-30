"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolEditor } from "@/components/tools/ui";
import { Code, ArrowRightLeft } from "lucide-react";

function encodeHTML(str: string) {
  return str.replace(/[\u00A0-\u9999<>\&]/g, function(i) {
    return '&#'+i.charCodeAt(0)+';';
  });
}

function decodeHTML(str: string) {
  if (typeof window === "undefined") return str; // SSR safety
  const txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
}

export function HtmlEncodeDecode() {
  const t = useTranslations("Tools.html-encode-decode.ui");
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"encode"|"decode">("encode");

  let output = "";
  if (input) {
    if (mode === "encode") {
      output = encodeHTML(input);
    } else {
      output = decodeHTML(input);
    }
  }

  return (
    <ToolLayout.Stacked>
      <ToolPanel className="flex items-center gap-6 p-4 md:p-6 bg-surface shadow-sm">
        <div className="flex items-center gap-2 text-secondary-foreground font-medium">
          <ArrowRightLeft className="w-5 h-5 text-primary" />
          <span>{t("mode")}</span>
        </div>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input 
              type="radio" 
              checked={mode === "encode"} 
              onChange={() => setMode("encode")} 
              className="text-primary focus:ring-primary accent-primary w-4 h-4"
            />
            <span className="text-sm font-medium group-hover:text-primary transition-colors">{t('encode')}</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input 
              type="radio" 
              checked={mode === "decode"} 
              onChange={() => setMode("decode")} 
              className="text-primary focus:ring-primary accent-primary w-4 h-4"
            />
            <span className="text-sm font-medium group-hover:text-primary transition-colors">{t('decode')}</span>
          </label>
        </div>
      </ToolPanel>

      <ToolEditor
        inputLabel={<><Code className="w-4 h-4" /> {t('input')}</>}
        outputLabel={<>{t('output')}</>}
        input={input}
        output={output}
        onInputChange={setInput}
        inputPlaceholder={mode === "encode" ? "Type raw text or HTML here..." : "Paste encoded HTML entities here..."}
        outputPlaceholder={mode === "encode" ? "Encoded HTML will appear here..." : "Decoded HTML will appear here..."}
      />
    </ToolLayout.Stacked>
  );
}
