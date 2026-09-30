"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { ThermometerSun, ArrowRightLeft } from "lucide-react";
import { useTranslations } from "next-intl";

export function TemperatureConverter() {
  const t = useTranslations("Tools.temperature-converter.ui");
  const [val, setVal] = useState("0");
  const [fromUnit, setFromUnit] = useState("Celsius");
  const [toUnit, setToUnit] = useState("Fahrenheit");

  const v = parseFloat(val) || 0;
  
  let result = 0;
  
  // Convert from anything to Celsius first
  let c = v;
  if (fromUnit === "Fahrenheit") c = (v - 32) * 5/9;
  if (fromUnit === "Kelvin") c = v - 273.15;
  
  // Convert from Celsius to target
  if (toUnit === "Celsius") result = c;
  if (toUnit === "Fahrenheit") result = (c * 9/5) + 32;
  if (toUnit === "Kelvin") result = c + 273.15;

  let tempColor = "text-foreground";
  let bgGradient = "from-primary/10 to-primary/5";
  if (c <= 0) {
    tempColor = "text-blue-500";
    bgGradient = "from-blue-500/20 to-blue-500/5";
  } else if (c >= 30) {
    tempColor = "text-error";
    bgGradient = "from-error/20 to-error/5";
  }

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <ThermometerSun className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('temperatureConverter')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('from')}</Label>
              <div className="flex shadow-sm rounded-md overflow-hidden focus-within:ring-1 focus-within:ring-ring">
                <Input 
                  type="number" 
                  value={val} 
                  onChange={e => setVal(e.target.value)} 
                  className="rounded-none rounded-l-md border-r-0 h-14 flex-1 focus-visible:ring-0 shadow-none text-xl font-medium" 
                />
                <select 
                  value={fromUnit} 
                  onChange={e => setFromUnit(e.target.value)} 
                  className="h-14 px-4 border border-input bg-secondary text-secondary-foreground text-sm font-semibold focus:outline-none"
                >
                  <option value="Celsius">{t('celsius')}</option>
                  <option value="Fahrenheit">{t('fahrenheit')}</option>
                  <option value="Kelvin">{t('kelvin')}</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center -my-2 relative z-10">
              <div className="bg-background border border-border rounded-full p-2 text-muted-foreground shadow-sm">
                <ArrowRightLeft className="w-4 h-4 rotate-90 sm:rotate-0" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-secondary-foreground">{t('to')}</Label>
              <select 
                value={toUnit} 
                onChange={e => setToUnit(e.target.value)} 
                className="w-full h-14 px-4 rounded-md border border-input bg-background text-sm font-semibold shadow-sm focus-visible:ring-1 focus-visible:ring-ring"
              >
                <option value="Celsius">{t('celsius')}</option>
                <option value="Fahrenheit">{t('fahrenheit')}</option>
                <option value="Kelvin">{t('kelvin')}</option>
              </select>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center p-0 overflow-hidden relative">
        <div className={`absolute inset-0 bg-gradient-to-b ${bgGradient} transition-colors duration-1000`}></div>
        <div className="relative z-10 p-6 flex flex-col h-full justify-center">
          <div className="bg-background/80 backdrop-blur-sm border-2 border-primary/10 rounded-3xl p-8 shadow-xl text-center transition-all">
            <span className="text-sm font-bold text-secondary-foreground mb-4 uppercase tracking-wider block">{toUnit}</span>
            <div className="flex items-center justify-center gap-2">
              <span className={`text-6xl sm:text-7xl font-bold tracking-tight font-mono transition-colors duration-500 ${tempColor}`}>
                {result.toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </span>
              <span className={`text-4xl font-bold opacity-70 ${tempColor}`}>°</span>
            </div>
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
