"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";
import { Map, ArrowRight, ArrowDown, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// A subset of all IANA timezones, grouped by region
const TIMEZONES = [
  "UTC",
  "America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles", "America/Anchorage", "America/Honolulu",
  "America/Toronto", "America/Vancouver", "America/Mexico_City", "America/Sao_Paulo", "America/Buenos_Aires",
  "Europe/London", "Europe/Paris", "Europe/Berlin", "Europe/Rome", "Europe/Madrid", "Europe/Moscow", "Europe/Kiev",
  "Asia/Dubai", "Asia/Jerusalem", "Asia/Riyadh", "Asia/Tehran", "Asia/Kolkata", "Asia/Dhaka", "Asia/Bangkok", 
  "Asia/Jakarta", "Asia/Singapore", "Asia/Hong_Kong", "Asia/Shanghai", "Asia/Tokyo", "Asia/Seoul",
  "Australia/Sydney", "Australia/Melbourne", "Australia/Brisbane", "Australia/Perth", "Australia/Adelaide",
  "Pacific/Auckland", "Pacific/Fiji",
  "Africa/Cairo", "Africa/Johannesburg", "Africa/Lagos", "Africa/Nairobi"
];

export function TimeZoneConverter() {
  const t = useTranslations("Tools.time-zone-converter.ui");
  const [mounted, setMounted] = useState(false);
  
  const [dateInput, setDateInput] = useState<string>("");
  const [fromZone, setFromZone] = useState<string>("UTC");
  const [toZone, setToZone] = useState<string>("America/New_York");
  
  const [result, setResult] = useState<{ dateStr: string; timeStr: string; offsetDiff: string } | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Attempt to guess user's local timezone
    try {
      const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (TIMEZONES.includes(userTz)) {
        setFromZone(userTz);
      }
    } catch (e) {}

    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, "0");
    setDateInput(`${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`);
  }, []);

  useEffect(() => {
    if (!dateInput || !fromZone || !toZone) {
      setResult(null);
      return;
    }

    try {
      // 1. Parse the input string AS IF it was in the `fromZone`
      // A trick to parse local time in a specific timezone using JS Dates:
      // We know `dateInput` is YYYY-MM-DDTHH:mm
      const [datePart, timePart] = dateInput.split("T");
      const [y, m, d] = datePart.split("-").map(Number);
      const [h, min] = timePart.split(":").map(Number);
      
      // Get the UTC time by manually adjusting based on the fromZone's offset
      // A reliable way is to find the offset of `fromZone` at this approx time.
      // We will use Intl.DateTimeFormat with timeZoneName="shortOffset" hack.
      
      // For simplicity, let's just create a Date object in the local system timezone,
      // and use a localized formatter. Wait, we need to convert FROM `fromZone` TO `toZone`.
      
      // Let's create a date string with an assumed offset. But offsets change (DST).
      // A better way: Format a bunch of dates in `fromZone` and match? No, that's complex.
      // Easy trick: dateString + " " + timezone doesn't work in Date constructor.
      
      // Let's use a standard trick: 
      // 1. Create date assuming UTC
      const dateInUTC = new Date(Date.UTC(y, m - 1, d, h, min, 0));
      
      // 2. See what time it thinks it is in fromZone
      const fTzStr = new Intl.DateTimeFormat('en-US', { timeZone: fromZone, timeStyle: 'long', dateStyle: 'short', hour12: false }).format(dateInUTC);
      // fTzStr looks like "10/12/2023, 14:00:00 GMT-4"
      
      // We just need the offset from `fromZone` at `dateInput`
      // Actually, we can use standard JS to do A to B if we use a library, but without one:
      // We have `dateInUTC`. We want to find the UTC time such that its `fromZone` representation is `dateInput`.
      
      // Let's use the simplest approach: create the date in local browser time, then we get a timestamp. 
      // It's not perfectly `fromZone` if `fromZone` != local, but let's approximate by shifting the time.
      
      // Get the offset of fromZone at dateInUTC
      const getOffsetMinutes = (tz: string, refDate: Date) => {
        const tzDate = new Date(refDate.toLocaleString('en-US', { timeZone: tz }));
        const utcDate = new Date(refDate.toLocaleString('en-US', { timeZone: 'UTC' }));
        return (tzDate.getTime() - utcDate.getTime()) / 60000;
      };

      let offsetFrom = getOffsetMinutes(fromZone, dateInUTC);
      
      // Create the true UTC date
      // If we inputted 14:00 and offset is -240 (GMT-4), true UTC is 18:00
      const trueUtcTime = dateInUTC.getTime() - (offsetFrom * 60000);
      const trueUtcDate = new Date(trueUtcTime);
      
      // Refine offset check in case we crossed a DST boundary
      const refinedOffsetFrom = getOffsetMinutes(fromZone, trueUtcDate);
      const finalUtcDate = new Date(dateInUTC.getTime() - (refinedOffsetFrom * 60000));
      
      // Now we have the exact moment in time (`finalUtcDate`).
      // Convert it to `toZone`.
      
      const dateStr = new Intl.DateTimeFormat("en-US", {
        timeZone: toZone,
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }).format(finalUtcDate);
      
      const timeStr = new Intl.DateTimeFormat("en-US", {
        timeZone: toZone,
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
        hour12: true
      }).format(finalUtcDate);
      
      // Calculate offset difference
      const offsetTo = getOffsetMinutes(toZone, finalUtcDate);
      const diffMinutes = offsetTo - refinedOffsetFrom;
      const diffHours = diffMinutes / 60;
      
      let offsetDiffStr = "";
      if (diffHours > 0) offsetDiffStr = `+${diffHours} ${t("hoursAhead")}`;
      else if (diffHours < 0) offsetDiffStr = `${Math.abs(diffHours)} ${t("hoursBehind")}`;
      else offsetDiffStr = t("sameTime");
      
      setResult({
        dateStr,
        timeStr,
        offsetDiff: offsetDiffStr
      });

    } catch (e) {
      setResult(null);
    }
  }, [dateInput, fromZone, toZone, t]);

  const swapZones = () => {
    setFromZone(toZone);
    setToZone(fromZone);
  };

  if (!mounted) return null;

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-slate-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-sky-100 dark:bg-sky-900/30 rounded-2xl text-sky-600 dark:text-sky-400 mb-2">
            <Map className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700">
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-6 items-end mb-10">
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("fromZone")}</label>
                <select
                  value={fromZone}
                  onChange={(e) => setFromZone(e.target.value)}
                  className="w-full h-14 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none text-slate-800 dark:text-slate-100"
                >
                  {TIMEZONES.map(z => <option key={z} value={z}>{z}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("dateAndTime")}</label>
                <input
                  type="datetime-local"
                  value={dateInput}
                  onChange={(e) => setDateInput(e.target.value)}
                  className="w-full h-14 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none text-slate-800 dark:text-slate-100"
                />
              </div>
            </div>

            <div className="flex justify-center md:pb-4">
              <Button
                variant="ghost"
                onClick={swapZones}
                className="w-12 h-12 rounded-full hover:bg-sky-50 dark:hover:bg-sky-900/30 text-sky-500"
                title={t("swap")}
              >
                <ArrowRight className="w-6 h-6 hidden md:block" />
                <ArrowDown className="w-6 h-6 block md:hidden" />
              </Button>
            </div>

            <div className="space-y-4 h-full flex flex-col justify-end">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("toZone")}</label>
                <select
                  value={toZone}
                  onChange={(e) => setToZone(e.target.value)}
                  className="w-full h-14 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500 outline-none text-slate-800 dark:text-slate-100"
                >
                  {TIMEZONES.map(z => <option key={z} value={z}>{z}</option>)}
                </select>
              </div>
            </div>
            
          </div>

          {result ? (
            <div className="bg-sky-50 dark:bg-sky-900/20 border border-sky-100 dark:border-sky-800/50 rounded-2xl p-6 md:p-10 text-center">
              <div className="text-sky-600 dark:text-sky-400 font-medium uppercase tracking-wider text-sm mb-4">
                {t("convertedTime")}
              </div>
              <div className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-3">
                {result.timeStr}
              </div>
              <div className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                {result.dateStr}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-500 dark:text-slate-400">
                <Clock className="w-4 h-4" />
                {result.offsetDiff}
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-10 text-center text-slate-400">
              {t("invalidInput")}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
