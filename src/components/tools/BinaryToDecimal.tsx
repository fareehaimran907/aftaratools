"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Binary, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function BinaryToDecimal() {
  const t = useTranslations("Tools.binary-to-decimal.ui");
  const [val, setVal] = useState("1010");

  const convert = (value: string) => {
    if (!value) return "";
    if (!/^[01]+$/.test(value)) return t('invalidBinaryNumber');
    const dec = parseInt(value, 2);
    return dec.toString(10);
  };

  const result = convert(val);

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Binary className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('binaryToDecimalConverter')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('binaryNumber')}</Label>
              <Input 
                type="text" 
                value={val} 
                onChange={e => setVal(e.target.value)} 
                placeholder={t("eG1010")} 
                className="h-14 text-2xl font-mono tracking-widest focus-visible:ring-1 focus-visible:ring-primary shadow-sm" 
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
              <span className="text-sm font-bold text-primary mb-2 uppercase tracking-wider block">{t('decimalResult')}</span>
              <div className="mt-2">
                <span className={`text-6xl sm:text-7xl font-bold font-mono tracking-tight break-all ${result === t('invalidBinaryNumber') ? 'text-error text-2xl' : 'text-foreground'}`}>
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
