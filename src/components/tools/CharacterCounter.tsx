"use client";

import { useState } from "react";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Type, Hash, Baseline, AlignJustify } from "lucide-react";
import { useTranslations } from "next-intl";

export function CharacterCounter() {
  const t = useTranslations("Tools.character-counter.ui");
  const [text, setText] = useState("");

  const chars = text.length;
  const charsNoSpaces = text.replace(/\s+/g, '').length;
  const spaces = text.split(' ').length - 1;
  const lines = text.trim() ? text.split(/\n/).length : 0;

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-full bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Type className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('characterCounter')}</h3>
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
            <Hash className="w-6 h-6 text-primary mx-auto mb-3" />
            <div className="text-sm font-semibold text-secondary-foreground mb-1 uppercase tracking-wider">{t('totalCharacters')}</div>
            <div className="text-4xl font-bold text-foreground">{chars.toLocaleString()}</div>
          </div>
          
          <div className="p-6 bg-background border border-border rounded-xl text-center shadow-sm">
            <Baseline className="w-6 h-6 text-primary mx-auto mb-3" />
            <div className="text-sm font-semibold text-secondary-foreground mb-1 uppercase tracking-wider">{t('withoutSpaces')}</div>
            <div className="text-4xl font-bold text-foreground">{charsNoSpaces.toLocaleString()}</div>
          </div>

          <div className="p-6 bg-background border border-border rounded-xl text-center shadow-sm">
            <Type className="w-6 h-6 text-muted-foreground mx-auto mb-3" />
            <div className="text-sm font-semibold text-secondary-foreground mb-1 uppercase tracking-wider">{t('spaces')}</div>
            <div className="text-4xl font-bold text-foreground">{spaces.toLocaleString()}</div>
          </div>

          <div className="p-6 bg-background border border-border rounded-xl text-center shadow-sm">
            <AlignJustify className="w-6 h-6 text-muted-foreground mx-auto mb-3" />
            <div className="text-sm font-semibold text-secondary-foreground mb-1 uppercase tracking-wider">{t('lines')}</div>
            <div className="text-4xl font-bold text-foreground">{lines.toLocaleString()}</div>
          </div>
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
