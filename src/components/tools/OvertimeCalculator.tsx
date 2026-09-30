"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { Calculator, DollarSign } from "lucide-react";
import { useTranslations } from "next-intl";

export function OvertimeCalculator() {
  const t = useTranslations("Tools.overtime-calculator.ui");
  const [hourlyRate, setHourlyRate] = useState("25");
  const [regularHours, setRegularHours] = useState("40");
  const [totalHours, setTotalHours] = useState("48");
  const [multiplier, setMultiplier] = useState("1.5");

  const r = parseFloat(hourlyRate) || 0;
  const rh = parseFloat(regularHours) || 0;
  const th = parseFloat(totalHours) || 0;
  const m = parseFloat(multiplier) || 0;
  
  const actualRegularHours = Math.min(rh, th);
  const overtimeHours = Math.max(0, th - rh);
  
  const regularPay = actualRegularHours * r;
  const overtimeRate = r * m;
  const overtimePay = overtimeHours * overtimeRate;
  const totalPay = regularPay + overtimePay;

  const format = (num: number) => num.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('overtimeCalculator')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="rate">{t('hourlyRate')}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                    <DollarSign className="w-4 h-4" />
                  </div>
                  <Input 
                    id="rate" 
                    type="number" 
                    min="0" 
                    value={hourlyRate} 
                    onChange={e => setHourlyRate(e.target.value)} 
                    className="pl-9 h-12"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="multiplier">{t('otMultiplier')}</label>
                <select 
                  id="multiplier" 
                  value={multiplier} 
                  onChange={e => setMultiplier(e.target.value)} 
                  className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm"
                >
                  <option value="1.5">{t('timeAndAHalf15x')}</option>
                  <option value="2.0">{t('doubleTime20x')}</option>
                  <option value="1.0">{t('straightTime10x')}</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="reg">{t('standardWeeklyHours')}</label>
                <Input 
                  id="reg" 
                  type="number" 
                  min="0" 
                  value={regularHours} 
                  onChange={e => setRegularHours(e.target.value)} 
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="tot">{t('totalHoursWorked')}</label>
                <Input 
                  id="tot" 
                  type="number" 
                  min="0" 
                  value={totalHours} 
                  onChange={e => setTotalHours(e.target.value)} 
                  className="h-12 border-primary/30 focus-visible:ring-primary/50"
                />
              </div>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-6">
          <DollarSign className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-bold text-foreground">{t("paySummary")}</h3>
        </div>

        <div className="space-y-6">
          <div className="bg-background border-2 border-primary/20 rounded-xl p-8 text-center shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
            <div className="relative z-10">
              <span className="text-sm font-bold text-primary mb-2 uppercase tracking-wider block">{t('totalGrossPay')}</span>
              <span className="text-5xl md:text-6xl font-bold text-primary tracking-tight">{format(totalPay)}</span>
            </div>
          </div>
          
          <div className="grid gap-3">
            <ToolResultItem 
              label={`${t('regularPay')} (${actualRegularHours} ${t('hrs')})`}
              value={format(regularPay)}
            />
            <div className="bg-background border border-success/30 rounded-lg p-4 flex justify-between items-center shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-success"></div>
              <div className="pl-2">
                <span className="text-sm font-medium text-secondary-foreground block mb-1">
                  {t('overtimePay')} ({overtimeHours} {t('hrs')} @ {format(overtimeRate)}/{t('hr')})
                </span>
              </div>
              <span className="font-semibold text-success text-lg">{format(overtimePay)}</span>
            </div>
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
