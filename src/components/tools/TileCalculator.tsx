"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResult } from "@/components/tools/ui";
import { Grid2X2 } from "lucide-react";
import { useTranslations } from "next-intl";

export function TileCalculator() {
  const t = useTranslations("Tools.tile-calculator.ui");
  const [areaSqFt, setAreaSqFt] = useState("100");
  const [tileLength, setTileLength] = useState("12"); // inches
  const [tileWidth, setTileWidth] = useState("12"); // inches
  const [waste, setWaste] = useState("10"); // 10% waste

  const a = parseFloat(areaSqFt) || 0;
  const l = parseFloat(tileLength) || 0;
  const w = parseFloat(tileWidth) || 0;
  const wastePct = parseFloat(waste) || 0;

  let totalTiles = 0;
  let tileAreaSqFt = 0;

  if (l > 0 && w > 0) {
    tileAreaSqFt = (l * w) / 144;
  }

  if (tileAreaSqFt > 0 && a > 0) {
    const exactTiles = a / tileAreaSqFt;
    const tilesWithWaste = exactTiles * (1 + (wastePct / 100));
    totalTiles = Math.ceil(tilesWithWaste);
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Grid2X2 className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('tileCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-secondary-foreground">{t('totalAreaToCoverSqFt')}</Label>
            <Input 
              type="number" 
              value={areaSqFt} 
              onChange={e => setAreaSqFt(e.target.value)} 
              className="h-12 text-lg focus-visible:ring-1 focus-visible:ring-primary" 
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('tileLengthInches')}</Label>
              <Input 
                type="number" 
                value={tileLength} 
                onChange={e => setTileLength(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary" 
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('tileWidthInches')}</Label>
              <Input 
                type="number" 
                value={tileWidth} 
                onChange={e => setTileWidth(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary" 
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm font-medium text-secondary-foreground">{t('wasteOverage')}</Label>
            <div className="relative">
              <Input 
                type="number" 
                value={waste} 
                onChange={e => setWaste(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary pr-8" 
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">%</div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mt-1">{t('standardRecommendationIs10ForStandardLayouts15ForDiagonal')}</p>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <div className="space-y-6">
          <ToolResult
            label={t('totalTilesNeeded')}
            value={`${totalTiles}`}
            highlight={true}
          />
          <div className="text-center">
            <span className="text-secondary-foreground text-sm font-medium px-4 py-2 bg-secondary rounded-full inline-block shadow-sm">
              {t('eachTileCovers')}{tileAreaSqFt.toFixed(3)} {t('sqFt')}
            </span>
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
