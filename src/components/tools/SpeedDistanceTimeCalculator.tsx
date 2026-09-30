"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Zap, Map, Clock, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function SpeedDistanceTimeCalculator() {
  const t = useTranslations("Tools.speed-distance-time-calculator.ui");
  const [speed, setSpeed] = useState("");
  const [distance, setDistance] = useState("100");
  const [time, setTime] = useState("2");
  const [mode, setMode] = useState<"speed"|"distance"|"time">("speed");

  const s = parseFloat(speed);
  const d = parseFloat(distance);
  const tm = parseFloat(time);

  let result = 0;
  let label = "";
  let icon = <Zap className="w-5 h-5 text-primary" />;

  if (mode === "speed" && !isNaN(d) && !isNaN(tm) && tm > 0) {
    result = d / tm;
    label = "Speed (units / hour)";
    icon = <Zap className="w-5 h-5 text-primary" />;
  } else if (mode === "distance" && !isNaN(s) && !isNaN(tm)) {
    result = s * tm;
    label = "Distance (units)";
    icon = <Map className="w-5 h-5 text-primary" />;
  } else if (mode === "time" && !isNaN(d) && !isNaN(s) && s > 0) {
    result = d / s;
    label = "Time (hours)";
    icon = <Clock className="w-5 h-5 text-primary" />;
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <ArrowRight className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('speedDistanceTime')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="flex p-1 bg-secondary rounded-lg">
            <button 
              className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${mode === 'speed' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => { setMode("speed"); setSpeed(""); }}
            >
              {t('solveForSpeed')}
            </button>
            <button 
              className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${mode === 'distance' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => { setMode("distance"); setDistance(""); }}
            >
              {t('solveForDistance')}
            </button>
            <button 
              className={`flex-1 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${mode === 'time' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
              onClick={() => { setMode("time"); setTime(""); }}
            >
              {t('solveForTime')}
            </button>
          </div>

          <div className="space-y-6">
            {mode !== "distance" && (
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Map className="w-4 h-4 text-muted-foreground" /> {t('distance')}
                </Label>
                <Input type="number" value={distance} onChange={e => setDistance(e.target.value)} className="h-12" />
              </div>
            )}
            {mode !== "time" && (
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" /> {t('timeHours')}
                </Label>
                <Input type="number" value={time} onChange={e => setTime(e.target.value)} className="h-12" />
              </div>
            )}
            {mode !== "speed" && (
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-muted-foreground" /> {t('speed')}
                </Label>
                <Input type="number" value={speed} onChange={e => setSpeed(e.target.value)} className="h-12" />
              </div>
            )}
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {result > 0 ? (
          <div className="space-y-6 text-center">
            <div className="bg-background border-2 border-primary/20 rounded-2xl p-8 shadow-sm relative overflow-hidden group hover:border-primary/40 transition-colors">
              <div className="absolute inset-0 bg-primary/5"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {icon}
                </div>
                <span className="text-sm font-bold text-primary mb-2 uppercase tracking-wider block">{label}</span>
                <div className="flex items-baseline justify-center gap-2 mt-2">
                  <span className="text-7xl font-bold text-foreground font-mono tracking-tight">
                    {result.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <ArrowRight className="w-12 h-12" />
            <p>{t("enterTheKnownValuesToCalc")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
