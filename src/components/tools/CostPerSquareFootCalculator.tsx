"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResult } from "@/components/tools/ui";
import { CircleDollarSign } from "lucide-react";
import { useTranslations } from "next-intl";

export function CostPerSquareFootCalculator() {
  const t = useTranslations("Tools.cost-per-square-foot-calculator.ui");
  const [totalCost, setTotalCost] = useState("350000");
  const [sqft, setSqft] = useState("2000");

  const cost = parseFloat(totalCost) || 0;
  const area = parseFloat(sqft) || 0;
  
  let costPerSqft = 0;
  if (cost > 0 && area > 0) {
    costPerSqft = cost / area;
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <CircleDollarSign className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('costPerSquareFoot')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('totalPriceOrCost')}</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-muted-foreground">$</span>
                </div>
                <Input 
                  type="number" 
                  value={totalCost} 
                  onChange={e => setTotalCost(e.target.value)} 
                  className="pl-7 h-14 text-lg focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('totalSquareFootage')}</Label>
              <Input 
                type="number" 
                value={sqft} 
                onChange={e => setSqft(e.target.value)} 
                className="h-14 text-lg focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <div className="space-y-6">
          <ToolResult
            label={t('costPerSquareFoot')}
            value={`$${costPerSqft.toFixed(2)}`}
            subValue={t('sqFt')}
            highlight={true}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
