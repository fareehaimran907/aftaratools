"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Map, Clock, Footprints } from "lucide-react";
import { useTranslations } from "next-intl";

export function RunningDistanceCalculator() {
  const t = useTranslations("Tools.running-distance-calculator.ui");
  const [unit, setUnit] = useState("km");
  
  const [paceM, setPaceM] = useState("5");
  const [paceS, setPaceS] = useState("0");

  const [timeH, setTimeH] = useState("0");
  const [timeM, setTimeM] = useState("45");
  const [timeS, setTimeS] = useState("0");

  const pm = parseFloat(paceM) || 0;
  const ps = parseFloat(paceS) || 0;
  
  const th = parseFloat(timeH) || 0;
  const tm = parseFloat(timeM) || 0;
  const ts = parseFloat(timeS) || 0;

  const paceMinutes = pm + (ps / 60);
  const totalMinutes = (th * 60) + tm + (ts / 60);
  
  let distance = 0;
  if (paceMinutes > 0 && totalMinutes > 0) {
    distance = totalMinutes / paceMinutes;
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Footprints className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('runningDistanceCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-6">
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <Footprints className="w-4 h-4 text-muted-foreground" /> {t('pacePer')} {unit})
              </Label>
              <div className="flex gap-4">
                <div className="flex-1 space-y-1 text-center">
                  <Input type="number" value={paceM} onChange={e => setPaceM(e.target.value)} className="h-12 text-center text-lg font-mono font-bold" /> 
                  <span className="text-xs font-semibold text-muted-foreground uppercase">{t('mins')}</span>
                </div>
                <div className="flex-1 space-y-1 text-center">
                  <Input type="number" value={paceS} onChange={e => setPaceS(e.target.value)} className="h-12 text-center text-lg font-mono font-bold" /> 
                  <span className="text-xs font-semibold text-muted-foreground uppercase">{t('secs')}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" /> {t('totalTime')}
              </Label>
              <div className="flex gap-2 sm:gap-4">
                <div className="flex-1 space-y-1 text-center">
                  <Input type="number" value={timeH} onChange={e => setTimeH(e.target.value)} className="h-12 text-center text-lg font-mono font-bold" /> 
                  <span className="text-xs font-semibold text-muted-foreground uppercase">{t('hrs')}</span>
                </div>
                <div className="flex-1 space-y-1 text-center">
                  <Input type="number" value={timeM} onChange={e => setTimeM(e.target.value)} className="h-12 text-center text-lg font-mono font-bold" /> 
                  <span className="text-xs font-semibold text-muted-foreground uppercase">{t('mins')}</span>
                </div>
                <div className="flex-1 space-y-1 text-center">
                  <Input type="number" value={timeS} onChange={e => setTimeS(e.target.value)} className="h-12 text-center text-lg font-mono font-bold" /> 
                  <span className="text-xs font-semibold text-muted-foreground uppercase">{t('secs')}</span>
                </div>
              </div>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {distance > 0 ? (
          <div className="space-y-6 text-center">
            <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 shadow-sm relative overflow-hidden group hover:border-primary/40 transition-colors">
              <div className="absolute inset-0 bg-primary/5"></div>
              <div className="relative z-10">
                <span className="text-sm font-bold text-primary mb-2 uppercase tracking-wider block">{t('totalDistance')}</span>
                <div className="flex items-baseline justify-center gap-2 mt-4">
                  <span className="text-7xl font-bold text-foreground font-mono tracking-tight">
                    {distance.toFixed(2)}
                  </span>
                </div>
                <div className="mt-6 flex justify-center">
                  <div className="inline-flex items-center rounded-full border border-input bg-background/50 px-1 shadow-sm">
                    <select 
                      value={unit} 
                      onChange={e => setUnit(e.target.value)} 
                      className="bg-transparent font-bold text-primary focus:outline-none px-3 py-1.5 text-sm cursor-pointer"
                    >
                      <option value="km">{t('kilometersKm')}</option>
                      <option value="mi">{t('milesMi')}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <Map className="w-12 h-12" />
            <p>{t("enterPaceAndTimeToCalcula")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
