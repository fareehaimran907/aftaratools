"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResult } from "@/components/tools/ui";
import { ListTree } from "lucide-react";
import { useTranslations } from "next-intl";

export function StepCalculator() {
  const t = useTranslations("Tools.step-calculator.ui");
  const [totalRise, setTotalRise] = useState("108"); // inches
  const [targetRiser, setTargetRiser] = useState("7.25"); // inches
  const [targetTread, setTargetTread] = useState("10"); // inches

  const rise = parseFloat(totalRise) || 0;
  const targetR = parseFloat(targetRiser) || 0;
  const targetT = parseFloat(targetTread) || 0;

  let numSteps = 0;
  let actualRiser = 0;
  let totalRun = 0;

  if (rise > 0 && targetR > 0) {
    numSteps = Math.round(rise / targetR);
    if (numSteps === 0) numSteps = 1;
    
    actualRiser = rise / numSteps;
    // Number of treads is usually one less than number of risers (assuming top tread is the landing)
    totalRun = (numSteps - 1) * targetT;
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <ListTree className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('stairStepCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-secondary-foreground">{t('totalRiseHeightInches')}</Label>
            <Input 
              type="number" 
              value={totalRise} 
              onChange={e => setTotalRise(e.target.value)} 
              className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
            />
            <p className="text-xs text-muted-foreground">{t('totalVerticalDistanceFromLowerFloorToUpperFloor')}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('targetRiserHeightIn')}</Label>
              <Input 
                type="number" 
                value={targetRiser} 
                onChange={e => setTargetRiser(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
              <p className="text-xs text-muted-foreground">{t('standardMaxIsUsually775')}</p>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('targetTreadDepthIn')}</Label>
              <Input 
                type="number" 
                value={targetTread} 
                onChange={e => setTargetTread(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
              <p className="text-xs text-muted-foreground">{t('standardMinIsUsually10')}</p>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <div className="space-y-8">
          <ToolResult
            label={t('numberOfRisers')}
            value={`${numSteps}`}
            highlight={true}
          />
          
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-primary/20">
            <div className="p-4 bg-background border border-border rounded-xl text-center shadow-sm hover:border-primary/30 transition-colors">
              <div className="text-xs font-semibold text-secondary-foreground mb-2 uppercase tracking-wider">{t('actualRiserHeight')}</div>
              <div className="text-3xl font-bold text-foreground">{actualRiser.toFixed(2)}"</div>
            </div>
            <div className="p-4 bg-background border border-border rounded-xl text-center shadow-sm hover:border-primary/30 transition-colors flex flex-col justify-center">
              <div className="text-xs font-semibold text-secondary-foreground mb-1 uppercase tracking-wider">{t('totalRunHorizontalDistance')}</div>
              <div className="text-2xl font-bold text-foreground">{totalRun.toFixed(2)}"</div>
              <div className="text-sm font-medium text-muted-foreground">({(totalRun / 12).toFixed(2)} {t('ft')})</div>
            </div>
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
