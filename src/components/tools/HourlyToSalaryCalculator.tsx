"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { Clock, Calendar } from "lucide-react";

export function HourlyToSalaryCalculator() {
  const t = useTranslations("Tools.hourly-to-salary-calculator.ui");
  const [hourlyWage, setHourlyWage] = useState("25");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [weeksPerYear, setWeeksPerYear] = useState("52");

  const hw = parseFloat(hourlyWage) || 0;
  const hpw = parseFloat(hoursPerWeek) || 0;
  const wpy = parseFloat(weeksPerYear) || 0;
  
  const yearly = hw * hpw * wpy;
  const monthly = yearly / 12;
  const weekly = hw * hpw;
  const daily = weekly / 5;

  const format = (n: number) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("hourlyDetails")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="wage">{t('hourlyWage')}</label>
              <Input id="wage" type="number" min="0" value={hourlyWage} onChange={e => setHourlyWage(e.target.value)} className="h-12 text-lg" />
            </div>
            
            <div className="flex gap-4">
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="hpw">{t('hoursWeek')}</label>
                <Input id="hpw" type="number" min="0" max="168" value={hoursPerWeek} onChange={e => setHoursPerWeek(e.target.value)} className="h-12 text-lg" />
              </div>
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="wpy">{t('weeksYear')}</label>
                <Input id="wpy" type="number" min="0" max="52" value={weeksPerYear} onChange={e => setWeeksPerYear(e.target.value)} className="h-12 text-lg" />
              </div>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
          <Calendar className="w-5 h-5 text-primary" />
          {t("salaryBreakdown")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={t('yearlySalary')}
            value={format(yearly)}
            highlight={true}
          />
          <ToolResultItem 
            label={t('monthly')}
            value={format(monthly)}
          />
          <ToolResultItem 
            label={t('weekly')}
            value={format(weekly)}
          />
          <ToolResultItem 
            label={t('daily')}
            value={format(daily)}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
