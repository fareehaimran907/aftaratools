"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Library, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function RomanNumeralConverter() {
  const t = useTranslations("Tools.roman-numeral-converter.ui");
  const [val, setVal] = useState("2024");
  const [mode, setMode] = useState<"toRoman"|"toNumber">("toRoman");

  const toRoman = (num: number) => {
    if (num < 1 || num > 3999) return t('rangeError');
    const lookup: Record<string, number> = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman = '', i;
    for (i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  };

  const toNumber = (roman: string) => {
    const lookup: Record<string, number> = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let num = 0;
    const str = roman.toUpperCase();
    for (let i = 0; i < str.length; i++) {
      const current = lookup[str[i]];
      const next = lookup[str[i+1]];
      if (current === undefined) return t('invalidRoman');
      if (next && current < next) {
        num -= current;
      } else {
        num += current;
      }
    }
    return num.toString();
  };

  const result = mode === "toRoman" 
    ? toRoman(parseInt(val) || 0)
    : toNumber(val);

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Library className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('romanNumeralConverter')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="flex p-1 bg-secondary rounded-lg mb-6">
            <button 
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${mode === 'toRoman' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => { setMode("toRoman"); setVal("2024"); }}
            >
              {t('numberRoman')}
            </button>
            <button 
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${mode === 'toNumber' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => { setMode("toNumber"); setVal("MMXXIV"); }}
            >
              {t('romanNumber')}
            </button>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{mode === "toRoman" ? t('numberInputLabel') : t('romanNumeralLabel')}</Label>
              <Input 
                type={mode === "toRoman" ? "number" : "text"} 
                value={val} 
                onChange={e => setVal(e.target.value)}
                className={`h-14 text-2xl tracking-widest focus-visible:ring-1 focus-visible:ring-primary shadow-sm ${mode === "toNumber" ? "uppercase font-serif" : "font-mono"}`} 
              />
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <div className="space-y-6 text-center">
          <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 shadow-sm relative overflow-hidden group hover:border-primary/40 transition-colors">
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-bold text-primary mb-2 uppercase tracking-wider block">{t('result')}</span>
              <div className="mt-2">
                <span className={`text-5xl sm:text-7xl font-bold tracking-tight break-all ${(result === t('invalidRoman') || result === t('rangeError')) ? 'text-error text-xl sm:text-2xl font-sans' : 'text-foreground'} ${mode === 'toRoman' ? 'font-serif tracking-widest' : 'font-mono'}`}>
                  {result || "0"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
