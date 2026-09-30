"use client";

import { useState, useEffect } from "react";
import { Copy, RefreshCw, Clock, Calendar, ArrowRightLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { useTranslations } from "next-intl";

export function UnixTimestampConverter() {
  const t = useTranslations("Tools.unix-timestamp-converter.ui");
  const [timestamp, setTimestamp] = useState<string>("");
  const [dateResult, setDateResult] = useState<string>("");
  const [dateInput, setDateInput] = useState<string>("");
  const [timestampResult, setTimestampResult] = useState<string>("");

  useEffect(() => {
    // initialize with current
    const now = new Date();
    setTimestamp(Math.floor(now.getTime() / 1000).toString());
    const isoString = now.toISOString();
    setDateInput(isoString.slice(0, 16)); // YYYY-MM-DDTHH:mm
  }, []);

  const convertToDate = () => {
    if (!timestamp) return;
    let ts = Number(timestamp);
    // If it's too large, it might be milliseconds
    if (timestamp.length > 11) {
      // Milliseconds
    } else {
      ts = ts * 1000;
    }
    const d = new Date(ts);
    if (isNaN(d.getTime())) {
      setDateResult("Invalid timestamp");
    } else {
      setDateResult(d.toUTCString() + " | Local: " + d.toLocaleString());
    }
  };

  const convertToTimestamp = () => {
    if (!dateInput) return;
    const d = new Date(dateInput);
    if (isNaN(d.getTime())) {
      setTimestampResult("Invalid date");
    } else {
      setTimestampResult(Math.floor(d.getTime() / 1000).toString());
    }
  };

  return (
    <ToolLayout.Stacked>
      <ToolPanel>
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('timestampToDate')}</h3>
        </div>
        <ToolPanelContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="timestamp">{t('unixTimestamp')}</label>
              <div className="flex gap-2">
                <Input 
                  id="timestamp"
                  type="number" 
                  value={timestamp} 
                  onChange={(e) => setTimestamp(e.target.value)} 
                  placeholder={t("eG1700000000")}
                  className="h-12 text-lg font-mono"
                />
                <Button onClick={convertToDate} className="h-12 px-6">{t('convert')}</Button>
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium text-secondary-foreground">{t("result")}</label>
              <div className="flex items-center w-full min-h-[48px] px-4 rounded-md border border-border bg-secondary/50 font-mono text-sm break-words">
                {dateResult || "Enter a timestamp..."}
              </div>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <div className="flex justify-center -my-3 relative z-10">
        <div className="bg-background border border-border rounded-full p-2 shadow-sm text-muted-foreground">
          <ArrowRightLeft className="w-4 h-4 rotate-90" />
        </div>
      </div>

      <ToolPanel>
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('dateToTimestamp')}</h3>
        </div>
        <ToolPanelContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-sm font-medium text-secondary-foreground" htmlFor="datetime">{t('localDateTime')}</label>
              <div className="flex gap-2">
                <Input 
                  id="datetime"
                  type="datetime-local" 
                  value={dateInput} 
                  onChange={(e) => setDateInput(e.target.value)} 
                  className="h-12"
                />
                <Button onClick={convertToTimestamp} className="h-12 px-6">{t('convert')}</Button>
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium text-secondary-foreground">{t("result")}</label>
              <div className="flex justify-between items-center w-full min-h-[48px] px-4 rounded-md border border-border bg-secondary/50 font-mono text-lg">
                <span className="truncate">{timestampResult || "Enter a date..."}</span>
                {timestampResult && (
                  <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10 ml-2 shrink-0" onClick={() => navigator.clipboard.writeText(timestampResult)}>
                    <Copy className="w-4 h-4 text-primary" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </ToolPanelContent>
      </ToolPanel>
    </ToolLayout.Stacked>
  );
}
