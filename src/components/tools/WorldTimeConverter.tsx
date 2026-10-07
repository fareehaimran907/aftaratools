"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Globe, Plus, Trash2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const POPULAR_ZONES = [
  { id: "UTC", label: "UTC / GMT", tz: "UTC" },
  { id: "America/New_York", label: "New York (EST/EDT)", tz: "America/New_York" },
  { id: "America/Los_Angeles", label: "Los Angeles (PST/PDT)", tz: "America/Los_Angeles" },
  { id: "Europe/London", label: "London (GMT/BST)", tz: "Europe/London" },
  { id: "Europe/Paris", label: "Paris (CET/CEST)", tz: "Europe/Paris" },
  { id: "Asia/Dubai", label: "Dubai (GST)", tz: "Asia/Dubai" },
  { id: "Asia/Tokyo", label: "Tokyo (JST)", tz: "Asia/Tokyo" },
  { id: "Asia/Singapore", label: "Singapore (SGT)", tz: "Asia/Singapore" },
  { id: "Australia/Sydney", label: "Sydney (AEST/AEDT)", tz: "Australia/Sydney" }
];

export function WorldTimeConverter() {
  const t = useTranslations("Tools.world-time-converter.ui");
  const [mounted, setMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  // Custom time instead of current time
  const [isCustom, setIsCustom] = useState(false);
  const [customTime, setCustomTime] = useState<string>("");
  
  const [selectedZones, setSelectedZones] = useState<string[]>([
    "UTC",
    "America/New_York",
    "Europe/London",
    "Asia/Tokyo"
  ]);

  const [tzToAdd, setTzToAdd] = useState(POPULAR_ZONES[5].id);

  useEffect(() => {
    setMounted(true);
    
    // Set initial custom time string
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, "0");
    setCustomTime(`${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`);

    const interval = setInterval(() => {
      if (!isCustom) {
        setCurrentTime(new Date());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isCustom]);

  useEffect(() => {
    if (isCustom && customTime) {
      const d = new Date(customTime);
      if (!isNaN(d.getTime())) {
        setCurrentTime(d);
      }
    }
  }, [isCustom, customTime]);

  const addZone = () => {
    if (!selectedZones.includes(tzToAdd)) {
      setSelectedZones([...selectedZones, tzToAdd]);
    }
  };

  const removeZone = (tz: string) => {
    setSelectedZones(selectedZones.filter(z => z !== tz));
  };

  const formatTime = (date: Date, tz: string) => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        hour: "2-digit",
        minute: "2-digit",
        second: isCustom ? undefined : "2-digit",
        hour12: true
      }).format(date);
    } catch (e) {
      return "Invalid TZ";
    }
  };

  const formatDate = (date: Date, tz: string) => {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric"
      }).format(date);
    } catch (e) {
      return "";
    }
  };

  const getOffset = (date: Date, tz: string) => {
    try {
      const targetStr = new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        timeZoneName: "longOffset"
      }).format(date);
      const match = targetStr.match(/GMT([+-]\d{2}:\d{2})?/);
      return match ? match[0] : "";
    } catch (e) {
      return "";
    }
  };

  if (!mounted) return null;

  const getAvailableZones = () => POPULAR_ZONES.filter(z => !selectedZones.includes(z.id));

  return (
    <div className="w-[calc(100%+3rem)] md:w-[calc(100%+5rem)] -m-6 md:-m-10 p-6 md:p-10 bg-slate-50 dark:bg-transparent text-slate-900 dark:text-slate-100">
      <div className="w-full max-w-4xl mx-auto space-y-8">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl text-indigo-600 dark:text-indigo-400 mb-2">
            <Globe className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl">{t("description")}</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 dark:border-slate-700">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 pb-8 border-b border-slate-100 dark:border-slate-700">
            <div className="flex items-center bg-slate-100 dark:bg-slate-900 rounded-xl p-1 w-full md:w-auto">
              <button
                onClick={() => setIsCustom(false)}
                className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${!isCustom ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'}`}
              >
                {t("liveTime")}
              </button>
              <button
                onClick={() => setIsCustom(true)}
                className={`flex-1 md:flex-none px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${isCustom ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm' : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-100'}`}
              >
                {t("customTime")}
              </button>
            </div>
            
            {isCustom && (
              <div className="w-full md:w-auto">
                <input
                  type="datetime-local"
                  value={customTime}
                  onChange={(e) => setCustomTime(e.target.value)}
                  className="w-full h-12 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-800 dark:text-slate-100"
                />
              </div>
            )}
          </div>

          <div className="space-y-4">
            {selectedZones.map(tz => {
              const zoneDef = POPULAR_ZONES.find(z => z.id === tz);
              const label = zoneDef ? zoneDef.label : tz;
              
              return (
                <div key={tz} className="relative group bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 overflow-hidden transition-all hover:border-indigo-200 dark:hover:border-indigo-800">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 text-indigo-500">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{label}</h4>
                      <div className="text-sm text-slate-500 flex items-center gap-2">
                        <span>{formatDate(currentTime, tz)}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                        <span className="font-mono">{getOffset(currentTime, tz)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
                    <div className="text-3xl font-mono font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                      {formatTime(currentTime, tz)}
                    </div>
                    <button
                      onClick={() => removeZone(tz)}
                      className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors opacity-100 md:opacity-0 md:group-hover:opacity-100"
                      title={t("remove")}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row gap-4 items-center">
            <select
              value={tzToAdd}
              onChange={(e) => setTzToAdd(e.target.value)}
              className="w-full sm:flex-1 h-12 px-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-800 dark:text-slate-100"
            >
              {getAvailableZones().map(z => (
                <option key={z.id} value={z.id}>{z.label}</option>
              ))}
              {getAvailableZones().length === 0 && (
                <option value="" disabled>{t("allZonesAdded")}</option>
              )}
            </select>
            <Button
              onClick={addZone}
              disabled={getAvailableZones().length === 0}
              className="w-full sm:w-auto h-12 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl"
            >
              <Plus className="w-5 h-5 mr-2" />
              {t("addZone")}
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
