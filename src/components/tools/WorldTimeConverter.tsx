"use client";

import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { useTranslations } from "next-intl";

const CITIES = [
  { name: "New York", tz: "America/New_York" },
  { name: "London", tz: "Europe/London" },
  { name: "Tokyo", tz: "Asia/Tokyo" },
  { name: "Sydney", tz: "Australia/Sydney" },
  { name: "Dubai", tz: "Asia/Dubai" },
  { name: "Paris", tz: "Europe/Paris" },
  { name: "Singapore", tz: "Asia/Singapore" },
  { name: "Los Angeles", tz: "America/Los_Angeles" },
];

export function WorldTimeConverter() {
  const t = useTranslations("Tools.world-time-converter.ui");
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null; // Hydration safe

  const formatTime = (date: Date, tz: string) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(date);
  };
  
  const formatDate = (date: Date, tz: string) => {
    return new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  return (
    <ToolLayout.Stacked>
      <ToolPanel>
        <div className="flex items-center gap-2 mb-6">
          <Globe className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('worldTimeConverter')}</h3>
        </div>
        
        <ToolPanelContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {CITIES.map(city => (
              <div key={city.name} className="p-6 bg-secondary/50 hover:bg-secondary transition-colors rounded-xl flex flex-col items-center justify-center text-center border border-border/50 group">
                <span className="text-sm font-semibold text-secondary-foreground mb-3 uppercase tracking-wider group-hover:text-foreground transition-colors">{city.name}</span>
                <span className="text-2xl font-bold text-primary font-mono tracking-tight">{formatTime(time, city.tz)}</span>
                <span className="text-xs font-medium text-muted-foreground mt-2">{formatDate(time, city.tz)}</span>
              </div>
            ))}
          </div>
        </ToolPanelContent>
      </ToolPanel>
    </ToolLayout.Stacked>
  );
}
