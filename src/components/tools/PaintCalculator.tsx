"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResult } from "@/components/tools/ui";
import { PaintBucket } from "lucide-react";
import { useTranslations } from "next-intl";

export function PaintCalculator() {
  const t = useTranslations("Tools.paint-calculator.ui");
  const [sqft, setSqft] = useState("400");
  const [coats, setCoats] = useState("2");
  const [coverage, setCoverage] = useState("350"); // 350 sqft per gallon is standard

  const area = parseFloat(sqft) || 0;
  const numCoats = parseFloat(coats) || 1;
  const cov = parseFloat(coverage) || 350;
  
  let gallons = 0;
  if (cov > 0) {
    gallons = (area * numCoats) / cov;
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <PaintBucket className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('paintCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-secondary-foreground">{t('totalSurfaceAreaSqFt')}</Label>
            <Input 
              type="number" 
              value={sqft} 
              onChange={e => setSqft(e.target.value)} 
              className="h-12 text-lg focus-visible:ring-1 focus-visible:ring-primary" 
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('numberOfCoats')}</Label>
              <select 
                value={coats} 
                onChange={e => setCoats(e.target.value)} 
                className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm font-medium focus-visible:ring-1 focus-visible:ring-ring shadow-sm outline-none"
              >
                <option value="1">{t('1Coat')}</option>
                <option value="2">{t('2Coats')}</option>
                <option value="3">{t('3Coats')}</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('coverageSqFtGallon')}</Label>
              <Input 
                type="number" 
                value={coverage} 
                onChange={e => setCoverage(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary" 
              />
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <div className="space-y-6">
          <ToolResult
            label={t('youWillNeed')}
            value={`${Math.ceil(gallons)}`}
            subValue={t('gallons')}
            highlight={true}
          />
          <div className="text-center">
            <span className="text-secondary-foreground text-sm font-medium px-4 py-2 bg-secondary rounded-full inline-block shadow-sm">
              {t('exactCalculation')}{gallons.toFixed(2)} {t('gallons')}
            </span>
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
