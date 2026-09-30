"use client";

import { useState } from "react";
import { ToolLayout, ToolPanel, ToolPanelContent, ToolResult } from "@/components/tools/ui";
import { FileText, Type, AlignLeft, Hash } from "lucide-react";
import { useTranslations } from "next-intl";

export function WordCounter() {
  const t = useTranslations("Tools.word-counter.ui");
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s+/g, '').length;
  const paragraphs = text.trim() ? text.split(/\n+/).filter(p => p.trim().length > 0).length : 0;

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('wordCounter')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 flex flex-col min-h-[400px]">
          <textarea 
            value={text} 
            onChange={e => setText(e.target.value)} 
            className="w-full flex-1 p-4 rounded-xl border border-input bg-background/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none resize-none font-mono text-sm leading-relaxed"
            placeholder={t("startTypingOrPasteYourTex")}
          />
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col justify-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-background border border-border rounded-xl text-center shadow-sm">
            <Type className="w-6 h-6 text-primary mx-auto mb-3" />
            <div className="text-sm font-semibold text-secondary-foreground mb-1 uppercase tracking-wider">{t('words')}</div>
            <div className="text-4xl font-bold text-foreground">{words.toLocaleString()}</div>
          </div>
          
          <div className="p-6 bg-background border border-border rounded-xl text-center shadow-sm">
            <Hash className="w-6 h-6 text-primary mx-auto mb-3" />
            <div className="text-sm font-semibold text-secondary-foreground mb-1 uppercase tracking-wider">{t('characters')}</div>
            <div className="text-4xl font-bold text-foreground">{chars.toLocaleString()}</div>
          </div>

          <div className="p-6 bg-background border border-border rounded-xl text-center shadow-sm">
            <Hash className="w-6 h-6 text-muted-foreground mx-auto mb-3" />
            <div className="text-sm font-semibold text-secondary-foreground mb-1 uppercase tracking-wider">{t('noSpaces')}</div>
            <div className="text-4xl font-bold text-foreground">{charsNoSpaces.toLocaleString()}</div>
          </div>

          <div className="p-6 bg-background border border-border rounded-xl text-center shadow-sm">
            <AlignLeft className="w-6 h-6 text-muted-foreground mx-auto mb-3" />
            <div className="text-sm font-semibold text-secondary-foreground mb-1 uppercase tracking-wider">{t('paragraphs')}</div>
            <div className="text-4xl font-bold text-foreground">{paragraphs.toLocaleString()}</div>
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
