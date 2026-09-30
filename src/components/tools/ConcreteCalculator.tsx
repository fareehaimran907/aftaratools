"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResult } from "@/components/tools/ui";
import { Cuboid } from "lucide-react";
import { useTranslations } from "next-intl";

export function ConcreteCalculator() {
  const t = useTranslations("Tools.concrete-calculator.ui");
  const [length, setLength] = useState("10"); // feet
  const [width, setWidth] = useState("10"); // feet
  const [depth, setDepth] = useState("4"); // inches

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const d = parseFloat(depth) || 0;

  // Calculate cubic yards
  // (length(ft) * width(ft) * (depth(in) / 12)) / 27
  let cubicYards = 0;
  if (l > 0 && w > 0 && d > 0) {
    const depthInFeet = d / 12;
    const cubicFeet = l * w * depthInFeet;
    cubicYards = cubicFeet / 27;
  }

  // Common bag sizes yield in cubic yards
  // 40lb bag = 0.011 cubic yards
  // 60lb bag = 0.017 cubic yards
  // 80lb bag = 0.022 cubic yards

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Cuboid className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('concreteCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('lengthFt')}</Label>
              <Input 
                type="number" 
                value={length} 
                onChange={e => setLength(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('widthFt')}</Label>
              <Input 
                type="number" 
                value={width} 
                onChange={e => setWidth(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium text-secondary-foreground">{t('depthThicknessInches')}</Label>
            <Input 
              type="number" 
              value={depth} 
              onChange={e => setDepth(e.target.value)} 
              className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <div className="space-y-8">
          <ToolResult
            label={t('volumeRequired')}
            value={cubicYards.toFixed(2)}
            subValue={t('cubicYards')}
            highlight={true}
          />
          
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-primary/20">
            <div className="p-4 bg-background border border-border rounded-xl text-center shadow-sm hover:border-primary/30 transition-colors">
              <div className="text-xs font-semibold text-secondary-foreground mb-2 uppercase tracking-wider">{t('80lbBags')}</div>
              <div className="text-2xl font-bold text-foreground">{Math.ceil(cubicYards / 0.022)}</div>
            </div>
            <div className="p-4 bg-background border border-border rounded-xl text-center shadow-sm hover:border-primary/30 transition-colors">
              <div className="text-xs font-semibold text-secondary-foreground mb-2 uppercase tracking-wider">{t('60lbBags')}</div>
              <div className="text-2xl font-bold text-foreground">{Math.ceil(cubicYards / 0.017)}</div>
            </div>
            <div className="p-4 bg-background border border-border rounded-xl text-center shadow-sm hover:border-primary/30 transition-colors">
              <div className="text-xs font-semibold text-secondary-foreground mb-2 uppercase tracking-wider">{t('40lbBags')}</div>
              <div className="text-2xl font-bold text-foreground">{Math.ceil(cubicYards / 0.011)}</div>
            </div>
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
