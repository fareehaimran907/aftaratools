"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { AlignVerticalSpaceBetween } from "lucide-react";
import { useTranslations } from "next-intl";

export function FenceCalculator() {
  const t = useTranslations("Tools.fence-calculator.ui");
  const [length, setLength] = useState("100"); // feet
  const [postSpacing, setPostSpacing] = useState("8"); // feet
  const [rails, setRails] = useState("3");
  const [picketWidth, setPicketWidth] = useState("5.5"); // inches
  const [picketSpacing, setPicketSpacing] = useState("0"); // inches

  const l = parseFloat(length) || 0;
  const ps = parseFloat(postSpacing) || 0;
  const r = parseFloat(rails) || 0;
  const pw = parseFloat(picketWidth) || 0;
  const pSpace = parseFloat(picketSpacing) || 0;

  let totalPosts = 0;
  let totalRails = 0;
  let totalPickets = 0;

  if (l > 0) {
    if (ps > 0) {
      // 1 post at start, plus 1 every spacing interval
      totalPosts = Math.ceil(l / ps) + 1;
      
      // Number of sections
      const sections = totalPosts - 1;
      // Rails (assumes rails span one section)
      totalRails = sections * r;
    }
    
    if (pw >= 0 && pSpace >= 0) {
      const lengthInches = l * 12;
      const spacingTotal = pw + pSpace;
      if (spacingTotal > 0) {
        totalPickets = Math.ceil(lengthInches / spacingTotal);
      }
    }
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <AlignVerticalSpaceBetween className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('fenceMaterialCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-secondary-foreground">{t('totalFenceLengthFt')}</Label>
            <Input 
              type="number" 
              value={length} 
              onChange={e => setLength(e.target.value)} 
              className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('postSpacingFt')}</Label>
              <Input 
                type="number" 
                value={postSpacing} 
                onChange={e => setPostSpacing(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
              <p className="text-xs text-muted-foreground">{t('standardIs6Or8')}</p>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('horizontalRailsPerPanel')}</Label>
              <Input 
                type="number" 
                value={rails} 
                onChange={e => setRails(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
              <p className="text-xs text-muted-foreground">{t('usually2Or3')}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('picketWidthIn')}</Label>
              <Input 
                type="number" 
                value={picketWidth} 
                onChange={e => setPicketWidth(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('picketSpacingIn')}</Label>
              <Input 
                type="number" 
                value={picketSpacing} 
                onChange={e => setPicketSpacing(e.target.value)} 
                className="h-12 focus-visible:ring-1 focus-visible:ring-primary"
              />
              <p className="text-xs text-muted-foreground">{t('0ForSolidPrivacy')}</p>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between items-center p-6 bg-background border-2 border-primary/20 rounded-2xl shadow-sm hover:border-primary/40 transition-colors">
              <div className="text-lg font-bold text-secondary-foreground">{t('pickets')}</div>
              <div className="text-5xl font-bold text-primary">{totalPickets}</div>
            </div>
            <div className="flex justify-between items-center p-6 bg-background border border-border rounded-xl shadow-sm">
              <div className="text-base font-semibold text-secondary-foreground">{t('posts')}</div>
              <div className="text-3xl font-bold text-foreground">{totalPosts}</div>
            </div>
            <div className="flex justify-between items-center p-6 bg-background border border-border rounded-xl shadow-sm">
              <div className="text-base font-semibold text-secondary-foreground">{t('rails')}</div>
              <div className="text-3xl font-bold text-foreground">{totalRails}</div>
            </div>
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
