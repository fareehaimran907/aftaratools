"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResult } from "@/components/tools/ui";
import { Leaf } from "lucide-react";
import { useTranslations } from "next-intl";

export function MulchCalculator() {
  const t = useTranslations("Tools.mulch-calculator.ui");
  const [length, setLength] = useState("20"); // feet
  const [width, setWidth] = useState("10"); // feet
  const [depth, setDepth] = useState("3"); // inches

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const d = parseFloat(depth) || 0;

  // Calculate cubic yards
  // (length(ft) * width(ft) * (depth(in) / 12)) / 27
  let cubicYards = 0;
  let cubicFeet = 0;
  
  if (l > 0 && w > 0 && d > 0) {
    const depthInFeet = d / 12;
    cubicFeet = l * w * depthInFeet;
    cubicYards = cubicFeet / 27;
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Leaf className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('mulchTopsoilCalculator')}</h3>
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
            <Label className="text-sm font-medium text-secondary-foreground">{t('depthInches')}</Label>
            <Input 
              type="number" 
              value={depth} 
              onChange={e => setDepth(e.target.value)} 
              className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
            />
            <p className="text-xs text-muted-foreground">{t('standardMulchDepthIs24Inches')}</p>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <div className="space-y-8">
          <ToolResult
            label={t('youWillNeed')}
            value={cubicYards.toFixed(2)}
            subValue={t('cubicYards')}
            highlight={true}
          />
          
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-primary/20">
            <div className="p-4 bg-background border border-border rounded-xl text-center shadow-sm hover:border-primary/30 transition-colors">
              <div className="text-xs font-semibold text-secondary-foreground mb-2 uppercase tracking-wider">{t('2CuFtBags')}</div>
              <div className="text-3xl font-bold text-foreground">{Math.ceil(cubicFeet / 2)}</div>
            </div>
            <div className="p-4 bg-background border border-border rounded-xl text-center shadow-sm hover:border-primary/30 transition-colors">
              <div className="text-xs font-semibold text-secondary-foreground mb-2 uppercase tracking-wider">{t('3CuFtBags')}</div>
              <div className="text-3xl font-bold text-foreground">{Math.ceil(cubicFeet / 3)}</div>
            </div>
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
