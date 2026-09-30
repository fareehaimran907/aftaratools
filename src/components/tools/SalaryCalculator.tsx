"use client";

import { useState } from "react";
import { Copy, RefreshCw, Calculator, DollarSign, Clock, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResult, ToolResultItem } from "@/components/tools/ui";

export function SalaryCalculator() {
  const t = useTranslations("Tools.salary-calculator.ui");
  const [amount, setAmount] = useState("50000");
  const [period, setPeriod] = useState("year");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  
  const [result, setResult] = useState<{
    hourly: number;
    daily: number;
    weekly: number;
    monthly: number;
    yearly: number;
  } | null>(null);

  const calculate = () => {
    const val = parseFloat(amount);
    const hpw = parseFloat(hoursPerWeek);
    if (isNaN(val) || isNaN(hpw) || val < 0 || hpw <= 0) return;

    const weeksPerYear = 52;
    const daysPerWeek = 5;
    
    let yearly = 0;
    
    switch(period) {
      case "hour": yearly = val * hpw * weeksPerYear; break;
      case "day": yearly = val * daysPerWeek * weeksPerYear; break;
      case "week": yearly = val * weeksPerYear; break;
      case "month": yearly = val * 12; break;
      case "year": yearly = val; break;
    }

    setResult({
      yearly: yearly,
      monthly: yearly / 12,
      weekly: yearly / weeksPerYear,
      daily: yearly / (weeksPerYear * daysPerWeek),
      hourly: yearly / (weeksPerYear * hpw)
    });
  };

  const format = (n: number) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD' });

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Calculator className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("incomeDetails")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground flex items-center gap-2" htmlFor="amount">
                <DollarSign className="w-4 h-4" /> {t('salaryAmount')}
              </label>
              <div className="flex gap-3">
                <Input id="amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} className="flex-1 h-12 text-lg" />
                <select id="period" value={period} onChange={e => setPeriod(e.target.value)} className="w-1/3 h-12 px-3 rounded-md border border-input bg-background text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all">
                  <option value="hour">{t('hour')}</option>
                  <option value="day">{t('day')}</option>
                  <option value="week">{t('week')}</option>
                  <option value="month">{t('month')}</option>
                  <option value="year">{t('year')}</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground flex items-center gap-2" htmlFor="hpw">
                <Clock className="w-4 h-4" /> {t('hoursPerWeek')}
              </label>
              <Input id="hpw" type="number" value={hoursPerWeek} onChange={e => setHoursPerWeek(e.target.value)} className="h-12" />
            </div>
          </div>
        </ToolPanelContent>
        <Button onClick={calculate} size="lg" className="w-full h-12 mt-6 shadow-sm gap-2">
          <RefreshCw className="w-4 h-4" /> {t('calculate')}
        </Button>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {result ? (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2 mb-6">
              <CalendarDays className="w-5 h-5 text-primary" />
              {t("salaryBreakdown")}</h3>
            
            <ToolResultItem 
              label={t('yearly')}
              value={format(result.yearly)}
              highlight={true}
            />
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <ToolResultItem 
                label={t('monthly')}
                value={format(result.monthly)}
              />
              <ToolResultItem 
                label={t('weekly')}
                value={format(result.weekly)}
              />
              <ToolResultItem 
                label={t('daily')}
                value={format(result.daily)}
              />
              <ToolResultItem 
                label={t('hourly')}
                value={format(result.hourly)}
              />
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <Calculator className="w-12 h-12" />
            <p>{t("enterYourIncomeDetailsToS")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
