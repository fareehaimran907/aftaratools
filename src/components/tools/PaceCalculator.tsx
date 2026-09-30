"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Timer, Map, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

export function PaceCalculator() {
  const t = useTranslations("Tools.pace-calculator.ui");
  const [distance, setDistance] = useState("5");
  const [unit, setUnit] = useState("km");
  
  const [h, setH] = useState("0");
  const [m, setM] = useState("25");
  const [s, setS] = useState("0");

  const dist = parseFloat(distance) || 0;
  const hours = parseFloat(h) || 0;
  const mins = parseFloat(m) || 0;
  const secs = parseFloat(s) || 0;

  const totalMinutes = (hours * 60) + mins + (secs / 60);
  
  let paceMin = 0;
  let paceSec = 0;

  if (dist > 0 && totalMinutes > 0) {
    const paceDecimal = totalMinutes / dist;
    paceMin = Math.floor(paceDecimal);
    paceSec = Math.round((paceDecimal - paceMin) * 60);
    
    // Handle 60s rollover
    if (paceSec === 60) {
      paceMin += 1;
      paceSec = 0;
    }
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Timer className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('runningPaceCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Map className="w-4 h-4 text-muted-foreground" /> {t('distance')}
              </Label>
              <div className="flex shadow-sm rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-ring">
                <Input 
                  type="number" 
                  value={distance} 
                  onChange={e => setDistance(e.target.value)} 
                  className="rounded-none rounded-l-md border-r-0 h-12 flex-1 focus-visible:ring-0 shadow-none text-lg font-medium" 
                />
                <select 
                  value={unit} 
                  onChange={e => setUnit(e.target.value)} 
                  className="h-12 px-4 border border-input bg-secondary text-secondary-foreground text-sm font-semibold focus:outline-none"
                >
                  <option value="km">{t('kilometersKm')}</option>
                  <option value="mi">{t('milesMi')}</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" /> {t('totalTime')}
              </Label>
              <div className="flex gap-2 sm:gap-4">
                <div className="flex-1 space-y-1 text-center">
                  <Input type="number" value={h} onChange={e => setH(e.target.value)} className="h-12 text-center text-lg font-mono font-bold" /> 
                  <span className="text-xs font-semibold text-muted-foreground uppercase">{t('hrs')}</span>
                </div>
                <div className="flex-1 space-y-1 text-center">
                  <Input type="number" value={m} onChange={e => setM(e.target.value)} className="h-12 text-center text-lg font-mono font-bold" /> 
                  <span className="text-xs font-semibold text-muted-foreground uppercase">{t('mins')}</span>
                </div>
                <div className="flex-1 space-y-1 text-center">
                  <Input type="number" value={s} onChange={e => setS(e.target.value)} className="h-12 text-center text-lg font-mono font-bold" /> 
                  <span className="text-xs font-semibold text-muted-foreground uppercase">{t('secs')}</span>
                </div>
              </div>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {dist > 0 && totalMinutes > 0 ? (
          <div className="space-y-6 text-center">
            <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 shadow-sm relative overflow-hidden group hover:border-primary/40 transition-colors">
              <div className="absolute inset-0 bg-primary/5"></div>
              <div className="relative z-10">
                <span className="text-sm font-bold text-primary mb-2 uppercase tracking-wider block">{t('averagePace')}</span>
                <div className="flex items-baseline justify-center gap-1 mt-4">
                  <span className="text-7xl font-bold text-foreground font-mono tracking-tight">
                    {paceMin}:{paceSec.toString().padStart(2, '0')}
                  </span>
                </div>
                <div className="mt-4 inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-bold bg-primary/10 text-primary">
                  {t('per')} {unit}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <Timer className="w-12 h-12" />
            <p>{t("enterDistanceAndTimeToCal")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
