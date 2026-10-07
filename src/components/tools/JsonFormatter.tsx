"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Braces, Play, Trash2, Copy, CheckCircle2, FileJson, AlertTriangle } from "lucide-react";

export function JsonFormatter() {
  const t = useTranslations("Tools.json-formatter.ui");
  const [input, setInput] = useState('{"status": 200, "message": "Welcome to JSON Formatter!", "data": {"features": ["Beautify", "Validate", "Minify"], "isAwesome": true}}');
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    formatJson(input);
  }, []);

  const formatJson = (val: string) => {
    if (!val.trim()) {
      setOutput("");
      setError(null);
      return;
    }
    try {
      setError(null);
      const parsed = JSON.parse(val);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (err: any) {
      setError(err.message || t("invalidJson"));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setInput(val);
    formatJson(val);
  };

  const minifyJson = () => {
    try {
      if (!input.trim()) return;
      setError(null);
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
    } catch (err: any) {
      setError(err.message || t("invalidJson"));
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const clear = () => {
    setInput("");
    setOutput("");
    setError(null);
  };

  if (!mounted) return null;

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-slate-50 dark:bg-[#11111b] text-slate-900 dark:text-[#cdd6f4]">
      <div className="w-full max-w-5xl mx-auto space-y-6">
        
        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-3 bg-white dark:bg-[#1e1e2e] p-3 rounded-xl border border-slate-200 dark:border-[#313244] shadow-lg">
          <div className="flex items-center gap-2 px-3 text-slate-700 dark:text-[#cdd6f4] font-semibold border-r border-slate-200 dark:border-[#45475a] pr-4">
            <Braces className="w-5 h-5 text-[#89b4fa]" />
            <span>{t("jsonToolkit")}</span>
          </div>
        
        <div className="flex-1 flex items-center gap-2">
          <Button 
            onClick={() => formatJson(input)} 
            className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-[#89b4fa] dark:hover:bg-[#89b4fa]/90 dark:text-[#11111b] font-bold gap-2 rounded-lg"
          >
            <Play className="w-4 h-4" /> {t("format")}
          </Button>
          <Button 
            onClick={minifyJson} 
            variant="outline" 
            className="border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:border-[#45475a] dark:text-[#cdd6f4] dark:hover:bg-[#313244] dark:hover:text-white gap-2 rounded-lg bg-transparent"
          >
            <FileJson className="w-4 h-4" /> {t("minify")}
          </Button>
        </div>
        
        <div className="flex items-center gap-2 pl-4 border-l border-slate-200 dark:border-[#45475a]">
           <Button 
            onClick={handleCopy} 
            variant="ghost" 
            disabled={!output || !!error}
            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 dark:text-[#a6e3a1] dark:hover:text-[#a6e3a1] dark:hover:bg-[#a6e3a1]/10 gap-2 rounded-lg"
          >
            {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />} 
            {copied ? t("copied") : t("copy")}
          </Button>
          <Button 
            onClick={clear} 
            variant="ghost" 
            className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-[#f38ba8] dark:hover:text-[#f38ba8] dark:hover:bg-[#f38ba8]/10 gap-2 rounded-lg"
          >
            <Trash2 className="w-4 h-4" /> {t("clear")}
          </Button>
        </div>
      </div>

      {/* Editor Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        
        {/* Input Pane */}
        <div className="flex flex-col h-[500px] rounded-xl overflow-hidden border border-slate-200 dark:border-[#313244] shadow-lg bg-white dark:bg-[#181825]">
          <div className="bg-slate-50 dark:bg-[#11111b] px-4 py-2 text-xs font-mono text-slate-500 dark:text-[#a6adc8] flex justify-between items-center border-b border-slate-200 dark:border-[#313244]">
            <span>{t("input")}</span>
            <span className="text-red-500 dark:text-[#f38ba8]">{error ? "Invalid JSON" : ""}</span>
          </div>
          <textarea
            value={input}
            onChange={handleInputChange}
            placeholder={t("inputPlaceholder")}
            spellCheck="false"
            className="flex-1 w-full p-4 bg-transparent text-slate-800 dark:text-[#cdd6f4] font-mono text-sm leading-relaxed resize-none focus:outline-none focus:ring-0 custom-scrollbar"
          />
        </div>

        {/* Output Pane */}
        <div className={`flex flex-col h-[500px] rounded-xl overflow-hidden border shadow-lg ${error ? 'border-red-300 bg-red-50/50 dark:border-[#f38ba8]/50 dark:bg-[#f38ba8]/5' : 'border-slate-200 bg-white dark:border-[#313244] dark:bg-[#181825]'}`}>
          <div className={`px-4 py-2 text-xs font-mono flex justify-between items-center border-b ${error ? 'bg-red-50 text-red-600 border-red-200 dark:bg-[#f38ba8]/10 dark:text-[#f38ba8] dark:border-[#f38ba8]/20' : 'bg-slate-50 dark:bg-[#11111b] text-slate-500 dark:text-[#a6adc8] border-slate-200 dark:border-[#313244]'}`}>
            <span>{t("output")}</span>
          </div>
          
          {error ? (
            <div className="flex-1 p-6 font-mono text-sm text-red-600 dark:text-[#f38ba8] overflow-auto">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-bold">Syntax Error</span>
              </div>
              <pre className="whitespace-pre-wrap">{error}</pre>
            </div>
          ) : (
            <textarea
              readOnly
              value={output}
              placeholder={t("outputPlaceholder")}
              className="flex-1 w-full p-4 bg-transparent text-emerald-700 dark:text-[#a6e3a1] font-mono text-sm leading-relaxed resize-none focus:outline-none focus:ring-0 custom-scrollbar"
            />
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
