"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResult } from "@/components/tools/ui";
import { Sprout } from "lucide-react";
import { useTranslations } from "next-intl";

export function PlantSpacingCalculator() {
  const t = useTranslations("Tools.plant-spacing-calculator.ui");
  const [length, setLength] = useState("20"); // feet
  const [width, setWidth] = useState("10"); // feet
  const [spacing, setSpacing] = useState("12"); // inches
  const [layout, setLayout] = useState<"square"|"triangular">("square");

  const l = parseFloat(length) || 0;
  const w = parseFloat(width) || 0;
  const s = parseFloat(spacing) || 0; // spacing in inches

  let totalPlants = 0;

  if (l > 0 && w > 0 && s > 0) {
    const spacingInFeet = s / 12;
    
    // Area method (Square grid)
    const areaSqFt = l * w;
    const areaPerPlant = spacingInFeet * spacingInFeet;
    
    if (layout === "square") {
      totalPlants = Math.floor(areaSqFt / areaPerPlant);
    } else {
      // Triangular / Equilateral layout allows roughly 15% more plants
      totalPlants = Math.floor(areaSqFt / (areaPerPlant * 0.866));
    }
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Sprout className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('plantSpacingCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="flex p-1 bg-secondary rounded-lg mb-4">
            <button 
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${layout === 'square' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => setLayout("square")}
            >
              {t('squareGrid')}
            </button>
            <button 
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${layout === 'triangular' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => setLayout("triangular")}
            >
              {t('triangularOffset')}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('bedLengthFt')}</Label>
              <Input 
                type="number" 
                value={length} 
                onChange={e => setLength(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('bedWidthFt')}</Label>
              <Input 
                type="number" 
                value={width} 
                onChange={e => setWidth(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm font-medium text-secondary-foreground">{t('plantSpacingInchesBetweenCenters')}</Label>
            <Input 
              type="number" 
              value={spacing} 
              onChange={e => setSpacing(e.target.value)} 
              className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <div className="space-y-6">
          <ToolResult
            label={t('estimatedTotalPlants')}
            value={`${totalPlants}`}
            highlight={true}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
