"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Binary, ArrowRight, ArrowDown, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UnixTimestampConverter() {
  const t = useTranslations("Tools.unix-timestamp-converter.ui");
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState<number>(Math.floor(Date.now() / 1000));
  
  // Timestamp to Date
  const [timestampInput, setTimestampInput] = useState<string>("");
  const [tsResult, setTsResult] = useState<{ local: string; gmt: string } | null>(null);
  
  // Date to Timestamp
  const [dateInput, setDateInput] = useState<string>("");
  const [dateResult, setDateResult] = useState<{ seconds: number; ms: number } | null>(null);

  const [copiedCurrent, setCopiedCurrent] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimestampInput(Math.floor(Date.now() / 1000).toString());
    
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, "0");
    setDateInput(`${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`);

    const interval = setInterval(() => {
      setCurrentTime(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!timestampInput) {
      setTsResult(null);
      return;
    }
    const val = parseInt(timestampInput, 10);
    if (isNaN(val)) {
      setTsResult(null);
      return;
    }
    // Auto detect ms vs sec. If it's > 10^12, assume MS
    const isMs = val > 10000000000;
    const dateObj = isMs ? new Date(val) : new Date(val * 1000);
    
    if (isNaN(dateObj.getTime())) {
      setTsResult(null);
    } else {
      setTsResult({
        local: dateObj.toLocaleString(),
        gmt: dateObj.toUTCString()
      });
    }
  }, [timestampInput]);

  useEffect(() => {
    if (!dateInput) {
      setDateResult(null);
      return;
    }
    const d = new Date(dateInput);
    if (isNaN(d.getTime())) {
      setDateResult(null);
    } else {
      setDateResult({
        seconds: Math.floor(d.getTime() / 1000),
        ms: d.getTime()
      });
    }
  }, [dateInput]);

  const copyCurrent = () => {
    navigator.clipboard.writeText(currentTime.toString());
    setCopiedCurrent(true);
    setTimeout(() => setCopiedCurrent(false), 2000);
  };

  if (!mounted) return null;

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-slate-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 dark:text-emerald-400 mb-2">
            <Binary className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <div className="bg-emerald-500 dark:bg-emerald-600 rounded-3xl p-6 md:p-8 text-white shadow-lg text-center flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-left">
            <h3 className="text-emerald-100 font-medium uppercase tracking-wider text-sm mb-1">{t("currentEpoch")}</h3>
            <div className="text-4xl md:text-5xl font-mono font-bold tracking-tight tabular-nums">
              {currentTime}
            </div>
          </div>
          <Button
            onClick={copyCurrent}
            variant="secondary"
            className="rounded-xl h-12 px-6 bg-white text-emerald-600 hover:bg-emerald-50 border-0"
          >
            {copiedCurrent ? <Check className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
            {copiedCurrent ? t("copied") : t("copy")}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Timestamp to Date */}
          <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700 flex flex-col h-full">
            <h3 className="text-xl font-bold mb-6">{t("tsToDate")}</h3>
            
            <div className="space-y-6 flex-1 flex flex-col">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("enterTimestamp")}</label>
                <input
                  type="number"
                  value={timestampInput}
                  onChange={(e) => setTimestampInput(e.target.value)}
                  placeholder="e.g. 1711234567"
                  className="w-full h-14 pl-4 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-slate-800 dark:text-slate-100 font-mono"
                />
              </div>

              <div className="flex justify-center py-2 text-slate-300 dark:text-slate-600">
                <ArrowDown className="w-6 h-6" />
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 flex-1">
                {tsResult ? (
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">{t("gmtTime")}</div>
                      <div className="font-medium">{tsResult.gmt}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">{t("localTime")}</div>
                      <div className="font-medium">{tsResult.local}</div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-slate-400 text-sm">
                    {t("invalidTimestamp")}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Date to Timestamp */}
          <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700 flex flex-col h-full">
            <h3 className="text-xl font-bold mb-6">{t("dateToTs")}</h3>
            
            <div className="space-y-6 flex-1 flex flex-col">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">{t("enterDate")}</label>
                <input
                  type="datetime-local"
                  step="1"
                  value={dateInput}
                  onChange={(e) => setDateInput(e.target.value)}
                  className="w-full h-14 pl-4 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all text-slate-800 dark:text-slate-100"
                />
              </div>

              <div className="flex justify-center py-2 text-slate-300 dark:text-slate-600">
                <ArrowDown className="w-6 h-6" />
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-5 border border-slate-100 dark:border-slate-800 flex-1">
                {dateResult ? (
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">{t("secondsLabel")}</div>
                      <div className="font-mono font-bold text-lg text-emerald-600 dark:text-emerald-400">{dateResult.seconds}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">{t("msLabel")}</div>
                      <div className="font-mono text-sm text-slate-600 dark:text-slate-400">{dateResult.ms}</div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-slate-400 text-sm">
                    {t("invalidDate")}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
