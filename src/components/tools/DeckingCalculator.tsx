"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResult } from "@/components/tools/ui";
import { Hammer } from "lucide-react";
import { useTranslations } from "next-intl";

export function DeckingCalculator() {
  const t = useTranslations("Tools.decking-calculator.ui");
  const [length, setLength] = useState("20"); // ft
  const [width, setWidth] = useState("12"); // ft
  const [boardWidth, setBoardWidth] = useState("5.5"); // inches (standard 5/4x6 is 5.5")
  const [boardLength, setBoardLength] = useState("16"); // ft
  const [gap, setGap] = useState("0.125"); // inches (1/8")
  const [waste, setWaste] = useState("10"); // percent

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const bw = parseFloat(boardWidth) || 0;
  const bl = parseFloat(boardLength) || 0;
  const g = parseFloat(gap) || 0;
  const wastePct = parseFloat(waste) || 0;

  let totalBoards = 0;
  let totalScrews = 0;
  let totalArea = 0;

  if (l > 0 && w > 0 && bw > 0 && bl > 0) {
    totalArea = l * w;
    // Deck width in inches
    const widthInches = w * 12;
    // How many boards wide
    const boardsWide = widthInches / (bw + g);
    // How many boards long
    const boardsLong = l / bl;
    
    const exactBoards = boardsWide * boardsLong;
    totalBoards = Math.ceil(exactBoards * (1 + (wastePct / 100)));
    
    // Roughly 350 screws per 100 sq ft (assume 16" joist spacing)
    totalScrews = Math.ceil((totalArea / 100) * 350);
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Hammer className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('deckingMaterialCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('deckLengthFt')}</Label>
              <Input 
                type="number" 
                value={length} 
                onChange={e => setLength(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
              <p className="text-xs text-muted-foreground">{t('parallelToHouse')}</p>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('deckWidthDepthFt')}</Label>
              <Input 
                type="number" 
                value={width} 
                onChange={e => setWidth(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
              <p className="text-xs text-muted-foreground">{t('awayFromHouse')}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('boardLengthFt')}</Label>
              <Input 
                type="number" 
                value={boardLength} 
                onChange={e => setBoardLength(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('boardWidthIn')}</Label>
              <Input 
                type="number" 
                value={boardWidth} 
                onChange={e => setBoardWidth(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <div className="space-y-8">
          <ToolResult
            label={`${t('requiredBoards')} (${boardLength}' ${t('length')})`}
            value={`${totalBoards}`}
            highlight={true}
          />
          
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-primary/20">
            <div className="p-4 bg-background border border-border rounded-xl text-center shadow-sm hover:border-primary/30 transition-colors">
              <div className="text-xs font-semibold text-secondary-foreground mb-2 uppercase tracking-wider">{t('deckArea')}</div>
              <div className="text-2xl font-bold text-foreground">{totalArea} {t('sqFt')}</div>
            </div>
            <div className="p-4 bg-background border border-border rounded-xl text-center shadow-sm hover:border-primary/30 transition-colors">
              <div className="text-xs font-semibold text-secondary-foreground mb-2 uppercase tracking-wider">{t('screwsFasteners')}</div>
              <div className="text-2xl font-bold text-foreground">~{totalScrews}</div>
            </div>
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
