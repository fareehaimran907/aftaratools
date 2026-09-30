"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResult } from "@/components/tools/ui";
import { Plus, Trash2, Maximize, GripVertical } from "lucide-react";
import { useTranslations } from "next-intl";

type Area = { id: string; length: string; width: string };

export function SquareFootageCalculator() {
  const t = useTranslations("Tools.square-footage-calculator.ui");
  const [areas, setAreas] = useState<Area[]>([
    { id: "1", length: "10", width: "12" }
  ]);

  const addArea = () => {
    setAreas([...areas, { id: Math.random().toString(), length: "", width: "" }]);
  };

  const removeArea = (id: string) => {
    setAreas(areas.filter(a => a.id !== id));
  };

  const updateArea = (id: string, field: keyof Area, value: string) => {
    setAreas(areas.map(a => a.id === id ? { ...a, [field]: value } : a));
  };

  let totalSqFt = 0;
  areas.forEach(a => {
    const l = parseFloat(a.length) || 0;
    const w = parseFloat(a.width) || 0;
    totalSqFt += (l * w);
  });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Maximize className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('squareFootageCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-[1fr_1fr_auto] gap-3 sm:gap-4 text-xs font-semibold text-secondary-foreground uppercase tracking-wider px-2">
              <div>{t('lengthFt')}</div>
              <div>{t('widthFt')}</div>
              <div className="w-10"></div>
            </div>
            
            <div className="space-y-3">
              {areas.map((a, index) => (
                <div key={a.id} className="grid grid-cols-[1fr_1fr_auto] gap-3 sm:gap-4 items-center p-3 bg-background rounded-lg border border-border shadow-sm group">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                      <GripVertical className="w-4 h-4 text-muted-foreground opacity-20 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <Input 
                      type="number" 
                      value={a.length} 
                      onChange={e => updateArea(a.id, 'length', e.target.value)} 
                      placeholder="L" 
                      className="pl-8 focus-visible:ring-1 focus-visible:ring-primary font-medium bg-secondary/50 border-transparent hover:border-border" 
                    />
                  </div>
                  <div>
                    <Input 
                      type="number" 
                      value={a.width} 
                      onChange={e => updateArea(a.id, 'width', e.target.value)} 
                      placeholder="W" 
                      className="focus-visible:ring-1 focus-visible:ring-primary font-medium bg-secondary/50 border-transparent hover:border-border" 
                    />
                  </div>
                  <div className="w-10 flex justify-end">
                    {areas.length > 1 && (
                      <Button variant="ghost" size="icon" onClick={() => removeArea(a.id)} className="text-muted-foreground hover:text-error hover:bg-error/10 h-9 w-9 rounded-full flex-shrink-0">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="outline" onClick={addArea} className="w-full mt-4 border-dashed border-2 py-6 text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all">
              <Plus className="w-4 h-4 mr-2" /> {t('addArea')}
            </Button>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <div className="space-y-6">
          <ToolResult
            label={t('totalArea')}
            value={totalSqFt.toFixed(2)}
            subValue={t('squareFeetSqFt')}
            highlight={true}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
