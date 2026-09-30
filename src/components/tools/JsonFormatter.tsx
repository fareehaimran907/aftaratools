"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolEditor } from "@/components/tools/ui";
import { Button } from "@/components/ui/button";
import { Code, RefreshCw } from "lucide-react";

export function JsonFormatter() {
  const t = useTranslations("Tools.json-formatter.ui");
  const [input, setInput] = useState('{"hello": "world"}');
  const [output, setOutput] = useState('{\n  "hello": "world"\n}');
  const [error, setError] = useState<string | null>(null);

  const formatJson = () => {
    if (!input.trim()) {
      setOutput("");
      setError(null);
      return;
    }
    
    try {
      setError(null);
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (err: any) {
      setError(err.message || "Invalid JSON");
      setOutput("");
    }
  };

  const reset = () => {
    setInput("");
    setOutput("");
    setError(null);
  };

  return (
    <ToolLayout.Stacked>
      <ToolEditor
        inputLabel={<><Code className="w-4 h-4" /> {t("inputJSON")}</>}
        outputLabel="Formatted JSON"
        input={input}
        output={output}
        onInputChange={(val) => {
          setInput(val);
          if (error) setError(null);
        }}
        error={error}
        inputPlaceholder="Paste your JSON here..."
        outputPlaceholder="Formatted JSON will appear here..."
      />

      <div className="flex justify-center gap-4">
        <Button onClick={formatJson} size="lg" className="min-w-[150px] shadow-sm">
          {t('formatJson')}
        </Button>
        <Button onClick={reset} size="lg" variant="outline" className="min-w-[100px] flex gap-2">
          <RefreshCw className="w-4 h-4" /> {t("reset")}</Button>
      </div>
    </ToolLayout.Stacked>
  );
}
