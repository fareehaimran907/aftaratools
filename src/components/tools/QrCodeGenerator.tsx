"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResult } from "@/components/tools/ui";
import { Button } from "@/components/ui/button";
import { Download, QrCode } from "lucide-react";

export function QrCodeGenerator() {
  const t = useTranslations("Tools.qr-code-generator.ui");
  const [input, setInput] = useState("https://example.com");
  const [size, setSize] = useState("250");
  
  // URL to free public QR API
  // encodeURIComponent safely encodes the data
  const qrUrl = input ? `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(input)}` : "";

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <QrCode className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t("contentSettings")}</h3>
        </div>
        
        <ToolPanelContent className="flex-1">
          <div className="space-y-2">
            <label className="text-sm font-medium text-secondary-foreground">{t('urlOrText')}</label>
            <textarea 
              value={input} 
              onChange={e => setInput(e.target.value)} 
              className="w-full min-h-[150px] p-4 rounded-xl border border-input bg-background font-mono text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none"
              placeholder={t("enterURLOrTextToEncode")}
              spellCheck={false}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-secondary-foreground">{t('size')}</label>
            <select 
              value={size} 
              onChange={e => setSize(e.target.value)} 
              className="w-full h-12 px-4 rounded-xl border border-input bg-background text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all cursor-pointer"
            >
              <option value="150">{t('small150x150')}</option>
              <option value="250">{t('medium250x250')}</option>
              <option value="500">{t('large500x500')}</option>
              <option value="1000">{t('highres1000x1000')}</option>
            </select>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolResult className="flex flex-col justify-center items-center py-12 gap-8" highlight>
        {qrUrl ? (
          <>
            <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:scale-105 duration-300">
              {/* We use standard img for simplicity with external uncontrolled domain */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={qrUrl} alt={t("generatedQRCode")} width={parseInt(size)} height={parseInt(size)} className="max-w-full h-auto drop-shadow-sm" />
            </div>
            <Button asChild size="lg" className="shadow-sm">
              <a href={qrUrl} target="_blank" rel="noopener noreferrer" download="qrcode.png">
                <Download className="w-5 h-5 mr-2" /> {t('downloadImage')}
              </a>
            </Button>
          </>
        ) : (
          <div className="p-8 text-center text-muted-foreground border-2 border-dashed border-border rounded-xl w-full max-w-sm flex flex-col items-center gap-4">
            <QrCode className="w-12 h-12 text-muted-foreground/30" />
            <p>{t('enterTextAboveToGenerateAQrCode')}</p>
          </div>
        )}
      </ToolResult>
    </ToolLayout.Split>
  );
}
