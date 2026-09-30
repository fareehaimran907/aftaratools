"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolEditor } from "@/components/tools/ui";
import { Link2, ArrowRightLeft } from "lucide-react";

export function UrlEncodeDecode() {
  const t = useTranslations("Tools.url-encode-decode.ui");
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"encode"|"decode">("encode");

  let output = "";
  let error = null;

  if (input) {
    try {
      if (mode === "encode") {
        output = encodeURIComponent(input);
      } else {
        output = decodeURIComponent(input);
      }
    } catch (e) {
      error = "Invalid URL for " + mode;
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
        inputLabel={<><Link2 className="w-4 h-4" /> {t('input')}</>}
        outputLabel={<>{t('output')}</>}
        input={input}
        output={output}
        onInputChange={setInput}
        error={error}
        inputPlaceholder={mode === "encode" ? "Type URL parameters here..." : "Paste encoded URL here..."}
        outputPlaceholder={mode === "encode" ? "Encoded URL will appear here..." : "Decoded URL will appear here..."}
      />
    </ToolLayout.Stacked>
  );
}
