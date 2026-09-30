'use client';

import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Copy, Trash2, Eye, Type } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function BionicReadingConverter() {
  const t = useTranslations('Tools.bionic-reading-converter.ui');
  const [input, setInput] = useState('');
  
  const handleClear = () => {
    setInput('');
  };

  const handleCopy = async () => {
    const outputElement = document.getElementById('bionic-output');
    if (!outputElement) return;
    
    try {
      // Create a Range to select the HTML content
      const range = document.createRange();
      range.selectNode(outputElement);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      
      document.execCommand('copy');
      selection?.removeAllRanges();
      
      // Also try clipboard API for plain text fallback
      await navigator.clipboard.writeText(outputElement.innerText);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const convertToBionic = useCallback((text: string) => {
    if (!text) return null;
    
    // Split by paragraphs
    const paragraphs = text.split('\n');
    
    return paragraphs.map((paragraph, pIndex) => {
      // Split by words but preserve whitespace
      const tokens = paragraph.match(/\S+|\s+/g) || [];
      
      return (
        <p key={pIndex} className="mb-4 last:mb-0">
          {tokens.map((token, tIndex) => {
            if (/^\s+$/.test(token)) {
              return <span key={tIndex}>{token}</span>;
            }
            
            // It's a word. Find first half.
            const len = token.length;
            let mid = Math.ceil(len / 2);
            
            // Adjust for very short or long words
            if (len === 1) mid = 1;
            else if (len === 2) mid = 1;
            else if (len === 3) mid = 2;
            else if (len > 3) mid = Math.ceil(len * 0.4);

            const boldPart = token.slice(0, mid);
            const normalPart = token.slice(mid);
            
            return (
              <span key={tIndex}>
                <b className="font-bold text-foreground">{boldPart}</b>
                <span className="text-foreground/80">{normalPart}</span>
              </span>
            );
          })}
        </p>
      );
    });
  }, []);

  return (
    <ToolLayout.Split>
      <ToolPanel className="flex flex-col h-[600px] bg-surface">
        <div className="flex items-center gap-2 mb-6">
          <Type className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('inputText')}</h3>
        </div>
        
        <ToolPanelContent className="flex-1 flex flex-col">
          <textarea
            id="input-text"
            placeholder={t('placeholder')}
            className="flex-1 w-full p-4 rounded-xl border border-input bg-background/50 focus-visible:ring-1 focus-visible:ring-primary focus-visible:outline-none resize-none font-sans text-base leading-relaxed mb-4 shadow-inner"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex justify-end">
            <Button 
              variant="outline" 
              onClick={handleClear}
              className="text-muted-foreground hover:text-error hover:border-error hover:bg-error/10"
              disabled={!input}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              {t('clear')}
            </Button>
          </div>
        </ToolPanelContent>
      </ToolPanel>

      <ToolPanel className="bg-primary/5 border-primary/20 flex flex-col h-[600px]">
        <div className="flex items-center justify-between mb-4">
          <Label className="text-lg font-semibold text-foreground flex items-center">
            <Eye className="w-5 h-5 mr-2 text-primary" />
            {t('bionicOutput')}
          </Label>
          <Button 
            onClick={handleCopy} 
            disabled={!input}
            variant="outline"
            className="font-medium bg-background hover:bg-secondary shadow-sm"
          >
            <Copy className="w-4 h-4 mr-2" />
            {t('copyResult')}
          </Button>
        </div>
        
        <div 
          id="bionic-output"
          className="flex-1 p-6 rounded-xl bg-background border border-border/50 text-lg leading-relaxed font-sans max-w-none prose dark:prose-invert overflow-y-auto shadow-inner"
        >
          {input ? convertToBionic(input) : (
            <span className="text-muted-foreground italic text-base">
              {t('emptyOutput')}
            </span>
          )}
        </div>
        
        <div className="mt-4 p-4 rounded-xl bg-primary/10 border border-primary/20 text-sm text-foreground/80 leading-relaxed">
          <strong className="text-primary mr-2">{t('howItWorksTitle')}</strong>
          {t('howItWorksDescription')}
        </div>
      </ToolPanel>
    </ToolLayout.Split>
  );
}
