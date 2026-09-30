"use client";

import { useState } from "react";
import { calculatePercentage } from "@/lib/calculations/percentage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { Percent, RefreshCw, AlertCircle } from "lucide-react";

export function PercentageCalculator() {
  const t = useTranslations("Tools.percentage-calculator.ui");
  const [value, setValue] = useState("20");
  const [total, setTotal] = useState("150");
  const [result, setResult] = useState<number | null>(30);
  const [error, setError] = useState<string | null>(null);

  const calculate = () => {
    try {
      setError(null);
      const v = parseFloat(value);
      const t = parseFloat(total);
      const res = calculatePercentage(v, t);
      setResult(res);
    } catch (err: any) {
      setError(err.message);
      setResult(null);
    }
  };

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Percent className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("calculatePercentage")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
              <div className="flex-1 space-y-2 w-full">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="value">{t('whatIs')}</label>
                <div className="relative">
                  <Input 
                    id="value"
                    type="number" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                    className="pr-8 h-12 text-lg"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary-foreground font-medium">%</span>
                </div>
              </div>
              <span className="text-lg font-medium text-secondary-foreground pb-2 sm:pb-3 hidden sm:block">{t('of')}</span>
              <div className="flex-1 space-y-2 w-full">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="total">{t('amount')}</label>
                <Input 
                  id="total"
                  type="number" 
                  value={total} 
                  onChange={(e) => setTotal(e.target.value)} 
                  className="h-12 text-lg"
                />
              </div>
            </div>
          </div>
        </ToolPanelContent>
        <Button onClick={calculate} size="lg" className="w-full h-12 mt-6 shadow-sm gap-2">
          <RefreshCw className="w-4 h-4" /> {t('calculate')}
        </Button>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {error ? (
          <div className="h-full flex flex-col items-center justify-center text-error gap-4 p-8 text-center bg-error/5 rounded-xl border border-error/20">
            <AlertCircle className="w-12 h-12" />
            <p className="font-medium">{error}</p>
          </div>
        ) : result !== null ? (
          <>
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
              <Percent className="w-5 h-5 text-primary" />
              {t("result")}</h3>
            <div className="space-y-4">
              <ToolResultItem 
                label={t('result')}
                value={result.toString()}
                highlight={true}
              />
            </div>
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <Percent className="w-12 h-12" />
            <p>{t("enterValuesToCalculatePerc")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
