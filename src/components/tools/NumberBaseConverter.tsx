"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Hash, ArrowRightLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export function NumberBaseConverter() {
  const t = useTranslations("Tools.number-base-converter.ui");
  const [val, setVal] = useState("10");
  const [fromBase, setFromBase] = useState("10");
  const [toBase, setToBase] = useState("2");

  const convert = (value: string, from: number, to: number) => {
    if (!value) return "";
    try {
      // Parse to decimal first
      const dec = parseInt(value, from);
      if (isNaN(dec)) return "Invalid input";
      // Convert to target base
      return dec.toString(to).toUpperCase();
    } catch {
      return "Error";
    }
  };

  const result = convert(val, parseInt(fromBase), parseInt(toBase));

  const BASES = [
    { label: "Binary (Base 2)", value: "2" },
    { label: "Octal (Base 8)", value: "8" },
    { label: "Decimal (Base 10)", value: "10" },
    { label: "Hexadecimal (Base 16)", value: "16" }
  ];

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Hash className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('numberBaseConverter')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('from')}</Label>
              <div className="flex shadow-sm rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-ring">
                <Input 
                  type="text" 
                  value={val} 
                  onChange={e => setVal(e.target.value)} 
                  className="rounded-none rounded-l-md border-r-0 h-14 flex-1 focus-visible:ring-0 shadow-none text-xl font-mono uppercase font-bold" 
                />
                <select 
                  value={fromBase} 
                  onChange={e => setFromBase(e.target.value)} 
                  className="h-14 px-4 border border-input bg-secondary text-secondary-foreground text-sm font-semibold focus:outline-none"
                >
                  {BASES.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
                </select>
              </div>
            </div>

            <div className="flex justify-center -my-2 relative z-10">
              <div className="bg-background border border-border rounded-full p-2 text-muted-foreground shadow-sm">
                <ArrowRightLeft className="w-4 h-4 rotate-90 sm:rotate-0" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('to')}</Label>
              <select 
                value={toBase} 
                onChange={e => setToBase(e.target.value)} 
                className="w-full h-14 px-4 rounded-md border border-input bg-background text-sm font-semibold shadow-sm focus-visible:ring-1 focus-visible:ring-ring"
              >
                {BASES.map(b => <option key={b.value} value={b.value}>{b.label}</option>)}
              </select>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <div className="space-y-6 text-center">
          <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 shadow-sm relative overflow-hidden group hover:border-primary/40 transition-colors">
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="relative z-10">
              <span className="text-sm font-bold text-primary mb-2 uppercase tracking-wider block">{t("base")}{toBase}</span>
              <div className="mt-4">
                <span className="text-5xl sm:text-6xl font-bold text-foreground font-mono tracking-tight break-all">
                  {result}
                </span>
              </div>
            </div>
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
