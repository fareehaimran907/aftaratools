"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel } from "@/components/tools/ui";
import { Label } from "@/components/ui/label";
import { Code2, Key } from "lucide-react";

export function JwtDecoder() {
  const t = useTranslations("Tools.jwt-decoder.ui");
  const [token, setToken] = useState("");

  let header = "";
  let payload = "";
  let isError = false;

  if (token) {
    try {
      const parts = token.split('.');
      if (parts.length === 3) {
        // Decode header
        header = JSON.stringify(JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/'))), null, 2);
        // Decode payload
        payload = JSON.stringify(JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'))), null, 2);
      } else {
        isError = true;
      }
    } catch {
      isError = true;
    }
  }

  return (
    <ToolLayout.Stacked>
      <ToolPanel className="p-0 overflow-hidden shadow-lg border border-border bg-surface flex flex-col">
        <div className="px-4 py-3 border-b border-border bg-muted/30 flex items-center justify-between">
          <span className="text-sm font-semibold text-secondary-foreground flex items-center gap-2">
            <Key className="w-4 h-4" /> {t('encodedJwtHeaderpayloadsignature')}
          </span>
        </div>
        <textarea 
          value={token} 
          onChange={e => setToken(e.target.value)} 
          className={`w-full min-h-[150px] p-4 bg-transparent font-mono text-sm break-all outline-none resize-none transition-colors ${isError && token ? 'text-error focus:ring-1 focus:ring-error inset-0' : 'text-foreground focus:ring-1 focus:ring-primary/50 inset-0'}`}
          placeholder={t("eyJhbGciOiJIUzI1NiIsInR5cCI6Ik")}
          spellCheck={false}
        />
        {isError && token && (
          <div className="p-3 bg-error/10 border-t border-error/20 text-error text-sm font-medium">
            {t('invalidJwtFormat')}
          </div>
        )}
      </ToolPanel>

      {!isError && token && (
        <ToolPanel className="p-0 overflow-hidden flex flex-col md:flex-row shadow-lg">
          {/* Header Pane */}
          <div className="flex-1 flex flex-col border-b md:border-b-0 md:border-r border-border bg-surface">
            <div className="px-4 py-3 border-b border-border bg-error/5 flex items-center justify-between">
              <span className="text-sm font-semibold text-error flex items-center gap-2">
                <Code2 className="w-4 h-4" /> {t('header')}
              </span>
            </div>
            <textarea 
              value={header}
              readOnly
              className="flex-1 min-h-[250px] w-full p-4 font-mono text-sm resize-none bg-error/5 outline-none text-error"
            />
          </div>
          
          {/* Payload Pane */}
          <div className="flex-1 flex flex-col bg-surface">
            <div className="px-4 py-3 border-b border-border bg-purple-500/5 flex items-center justify-between">
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> {t('payload')}
              </span>
            </div>
            <textarea 
              value={payload}
              readOnly
              className="flex-1 min-h-[250px] w-full p-4 font-mono text-sm resize-none bg-purple-500/5 outline-none text-purple-600 dark:text-purple-400"
            />
          </div>
        </ToolPanel>
      )}
    </ToolLayout.Stacked>
  );
}
