"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { Calculator, DollarSign } from "lucide-react";

export function SalaryToHourlyCalculator() {
  const t = useTranslations("Tools.salary-to-hourly-calculator.ui");
  const [salary, setSalary] = useState("52000");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [weeksPerYear, setWeeksPerYear] = useState("52");

  const s = parseFloat(salary) || 0;
  const hpw = parseFloat(hoursPerWeek) || 0;
  const wpy = parseFloat(weeksPerYear) || 0;
  
  let hourly = 0;
  if (hpw > 0 && wpy > 0) {
    hourly = s / (hpw * wpy);
  }

  const format = (n: number) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("salaryDetails")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="salary">{t('annualSalary')}</label>
              <Input id="salary" type="number" min="0" value={salary} onChange={e => setSalary(e.target.value)} className="h-12 text-lg" />
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
          <DollarSign className="w-5 h-5 text-primary" />
          {t("equivalentWage")}</h3>
        
        <div className="space-y-4">
          <ToolResultItem 
            label={t('hourlyWage')}
            value={format(hourly)}
            highlight={true}
          />
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
