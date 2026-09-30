"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResult, ToolResultItem } from "@/components/tools/ui";
import { Button } from "@/components/ui/button";
import { Copy, RefreshCw, KeyRound, Settings2 } from "lucide-react";

export function PasswordGenerator() {
  const t = useTranslations("Tools.password-generator.ui");
  const [length, setLength] = useState("16");
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const generate = () => {
    let charset = "";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) charset += "0123456789";
    if (symbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    if (charset === "") {
      setPassword("Error: Select constraints");
      return;
    }

    const len = parseInt(length) || 16;
    const l = Math.min(Math.max(len, 4), 128); // min 4, max 128
    
    let result = "";
    for (let i = 0; i < l; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }
    setPassword(result);
  };

  const copy = () => {
    if (password && !password.startsWith("Error")) {
      navigator.clipboard.writeText(password);
    }
  };

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Settings2 className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("constraints")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm font-medium">
              <label className="text-secondary-foreground">{t('passwordLength')}</label>
              <span className="text-foreground w-8 text-right">{length}</span>
            </div>
            <input 
              type="range" 
              min="4" 
              max="128" 
              value={length} 
              onChange={e => setLength(e.target.value)}
              className="w-full accent-primary bg-secondary h-2 rounded-full appearance-none cursor-pointer"
            />
          </div>
          
          <div className="space-y-4 pt-4">
            <label className="flex items-center gap-3 cursor-pointer group p-2 hover:bg-secondary/50 rounded-lg transition-colors">
              <input type="checkbox" checked={uppercase} onChange={e => setUppercase(e.target.checked)} className="w-5 h-5 accent-primary border-border" />
              <span className="font-medium text-foreground">{t('uppercaseAz')}</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group p-2 hover:bg-secondary/50 rounded-lg transition-colors">
              <input type="checkbox" checked={lowercase} onChange={e => setLowercase(e.target.checked)} className="w-5 h-5 accent-primary border-border" />
              <span className="font-medium text-foreground">{t('lowercaseAz')}</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group p-2 hover:bg-secondary/50 rounded-lg transition-colors">
              <input type="checkbox" checked={numbers} onChange={e => setNumbers(e.target.checked)} className="w-5 h-5 accent-primary border-border" />
              <span className="font-medium text-foreground">{t('numbers09')}</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group p-2 hover:bg-secondary/50 rounded-lg transition-colors">
              <input type="checkbox" checked={symbols} onChange={e => setSymbols(e.target.checked)} className="w-5 h-5 accent-primary border-border" />
              <span className="font-medium text-foreground">{t('symbols')}</span>
            </label>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <div className="flex flex-col gap-6">
        <ToolResult className="flex-1 justify-center items-center py-12" highlight>
          <div className="relative w-full max-w-sm group">
            <input 
              type="text" 
              value={password}
              readOnly
              className="w-full h-16 pl-6 pr-14 rounded-xl border-2 border-primary/20 bg-primary/5 font-mono text-xl sm:text-2xl text-center text-foreground outline-none placeholder:text-primary/30 shadow-inner"
              placeholder="••••••••••••••••"
            />
            <button 
              className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center rounded-lg bg-background text-muted-foreground hover:text-primary hover:bg-secondary transition-colors border border-border" 
              onClick={copy}
              title={t("copyPassword")}
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </ToolResult>
        <Button onClick={generate} size="lg" className="h-14 text-lg w-full shadow-lg hover:shadow-xl transition-all">
          <RefreshCw className="w-5 h-5 mr-3" /> {t('generatePassword')}
        </Button>
      </div>
    </ToolLayout.Split>
  );
}
