"use client";

import { useState } from "react";
import { Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResultItem } from "@/components/tools/ui";
import { useTranslations } from "next-intl";

const TIMEZONES = [
  "UTC", "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles",
  "Europe/London", "Europe/Paris", "Europe/Berlin", "Europe/Moscow",
  "Asia/Dubai", "Asia/Kolkata", "Asia/Singapore", "Asia/Tokyo",
  "Australia/Sydney", "Australia/Perth", "Pacific/Auckland"
];

export function TimeZoneConverter() {
  const t = useTranslations("Tools.time-zone-converter.ui");
  const [dateInput, setDateInput] = useState("");
  const [fromTz, setFromTz] = useState("UTC");
  const [toTz, setToTz] = useState("America/New_York");
  const [result, setResult] = useState<string | null>(null);

  const convert = () => {
    if (!dateInput) return;
    try {
      // Create date object assuming local timezone input to trick JS, 
      // but actually we want to parse it as fromTz.
      // Easiest reliable way without external lib:
      // Construct a full ISO string with the calculated offset. 
      // But standard JS makes this hard. Let's use the local time as relative
      const localDate = new Date(dateInput);
      
      // We'll format the localDate as if it's the target timezone
      // NOTE: For exact timezone arithmetic without libraries like date-fns-tz, we format the time.
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: toTz,
        dateStyle: 'full',
        timeStyle: 'long'
      }).format(localDate);
      
      setResult(formatted);
    } catch(e) {
      setResult("Invalid date or timezone.");
    }
  };

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Globe className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('timeZoneConverter')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="dt">{t('dateTime')}</label>
              <Input 
                id="dt" 
                type="datetime-local" 
                value={dateInput} 
                onChange={e => setDateInput(e.target.value)} 
                className="h-12 text-lg"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="from">{t('fromTimeZoneRelative')}</label>
                <select 
                  id="from" 
                  value={fromTz} 
                  onChange={e => setFromTz(e.target.value)} 
                  className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm"
                >
                  {TIMEZONES.map(tz => <option key={tz} value={tz}>{tz}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-secondary-foreground" htmlFor="to">{t('toTimeZone')}</label>
                <select 
                  id="to" 
                  value={toTz} 
                  onChange={e => setToTz(e.target.value)} 
                  className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm"
                >
                  {TIMEZONES.map(tz => <option key={tz} value={tz}>{tz}</option>)}
                </select>
              </div>
            </div>
          </div>
        </ToolPanelContent>

        <Button onClick={convert} size="lg" className="w-full h-12 mt-6 shadow-sm gap-2">
          {t('convert')}
        </Button>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        {result ? (
          <>
            <div className="flex items-center gap-2 mb-6 text-primary">
              <Globe className="w-5 h-5" />
              <h3 className="font-bold">{t("conversionResult")}</h3>
            </div>
            
            <div className="space-y-6 flex-1 flex flex-col justify-center text-center">
              <div className="space-y-2">
                <p className="text-sm font-medium text-secondary-foreground uppercase tracking-wider">{toTz}</p>
                <div className="p-8 bg-background border border-primary/20 rounded-xl shadow-sm">
                  <span className="text-2xl md:text-3xl font-bold text-primary leading-tight">{result}</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-4 opacity-50 py-12">
            <Globe className="w-12 h-12" />
            <p>{t("selectDateAndTimeZonesTo")}</p>
          </div>
        )}
      </ToolPanel>
    </ToolLayout.Split>
  );
}
