"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Copy, RefreshCw, FileText } from "lucide-react";
import { useTranslations } from "next-intl";

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export function LoremIpsumGenerator() {
  const t = useTranslations("Tools.lorem-ipsum-generator.ui");
  const [paragraphs, setParagraphs] = useState("3");
  const [text, setText] = useState<string[]>(Array(3).fill(LOREM));

  const generate = () => {
    const p = parseInt(paragraphs) || 3;
    const limit = Math.min(Math.max(p, 1), 50); // max 50 paragraphs
    setText(Array(limit).fill(LOREM));
  };

  const copyAll = () => {
    navigator.clipboard.writeText(text.join('\n\n'));
  };

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('loremIpsumGenerator')}</h3>
        </div>
        
        <ToolPanelContent className="space-y-6">
          <div className="space-y-2">
            <Label className="text-sm font-medium text-secondary-foreground">{t('paragraphs')}</Label>
            <input 
              type="number" 
              value={paragraphs} 
              onChange={e => setParagraphs(e.target.value)} 
              min="1" 
              max="50" 
              className="w-full h-12 px-4 rounded-xl border border-input bg-background focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none"
            />
          </div>
          
          <Button onClick={generate} className="w-full h-12 gap-2 text-md rounded-xl">
            <RefreshCw className="w-5 h-5" /> {t('generate')}
          </Button>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col h-[600px]">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-secondary-foreground">{t("generatedText")}</h3>
          <Button variant="outline" size="sm" onClick={copyAll} className="gap-2 bg-background shadow-sm hover:bg-secondary">
            <Copy className="w-4 h-4" /> {t('copy')}
          </Button>
        </div>
        
        <div className="p-6 rounded-xl border border-primary/20 bg-background text-sm leading-relaxed overflow-y-auto flex-1 shadow-inner">
          {text.map((p, i) => (
            <p key={i} className="mb-4 last:mb-0 text-foreground/90">{p}</p>
          ))}
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
