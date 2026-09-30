"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResult } from "@/components/tools/ui";
import { Trees } from "lucide-react";
import { useTranslations } from "next-intl";

export function BoardFootCalculator() {
  const t = useTranslations("Tools.board-foot-calculator.ui");
  const [thickness, setThickness] = useState("1"); // inches
  const [width, setWidth] = useState("6"); // inches
  const [length, setLength] = useState("8"); // feet
  const [quantity, setQuantity] = useState("1"); 
  const [price, setPrice] = useState(""); 

  const th = parseFloat(thickness) || 0;
  const w = parseFloat(width) || 0;
  const l = parseFloat(length) || 0;
  const q = parseFloat(quantity) || 1;
  const p = parseFloat(price) || 0;

  // Board Feet = (Thickness(in) * Width(in) * Length(ft)) / 12
  let bf = 0;
  let totalBf = 0;
  
  if (th > 0 && w > 0 && l > 0) {
    bf = (th * w * l) / 12;
    totalBf = bf * q;
  }
  
  const totalCost = totalBf * p;

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Trees className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('boardFootCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('thicknessIn')}</Label>
              <Input 
                type="number" 
                value={thickness} 
                onChange={e => setThickness(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('widthIn')}</Label>
              <Input 
                type="number" 
                value={width} 
                onChange={e => setWidth(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('lengthFt')}</Label>
              <Input 
                type="number" 
                value={length} 
                onChange={e => setLength(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('quantity')}</Label>
              <Input 
                type="number" 
                value={quantity} 
                onChange={e => setQuantity(e.target.value)} 
                min="1" 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('pricePerBf')}</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-muted-foreground">$</span>
                </div>
                <Input 
                  type="number" 
                  value={price} 
                  onChange={e => setPrice(e.target.value)} 
                  placeholder="0.00" 
                  className="pl-7 h-12 focus-visible:ring-1 focus-visible:ring-primary"
                />
              </div>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <div className="space-y-8">
          <ToolResult
            label={t('totalBoardFeet')}
            value={totalBf.toFixed(2)}
            highlight={true}
          />
          
          {p > 0 && (
            <div className="pt-6 border-t border-primary/20 flex flex-col items-center">
              <div className="text-xs font-semibold text-secondary-foreground mb-2 uppercase tracking-wider">{t('totalCost')}</div>
              <div className="text-3xl font-bold text-foreground">
                ${totalCost.toFixed(2)}
              </div>
            </div>
          )}
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
