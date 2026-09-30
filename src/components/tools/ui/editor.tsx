import React from "react";
import { Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { ToolPanel } from "./panels";
import { useTranslations } from "next-intl";

interface ToolEditorProps {
  inputLabel: React.ReactNode;
  outputLabel: React.ReactNode;
  input: string;
  output: string;
  onInputChange: (val: string) => void;
  onCopy?: () => void;
  error?: string | null;
  inputPlaceholder?: string;
  outputPlaceholder?: string;
  inputStats?: React.ReactNode;
  outputStats?: React.ReactNode;
}

export function ToolEditor({
  inputLabel,
  outputLabel,
  input,
  output,
  onInputChange,
  onCopy,
  error,
  inputPlaceholder = "Paste your input here...",
  outputPlaceholder = "Output will appear here...",
  inputStats,
  outputStats
}: ToolEditorProps) {
  const t = useTranslations("Common");

  const handleCopy = () => {
    if (output && onCopy) onCopy();
    else if (output) navigator.clipboard.writeText(output);
  };

  return (
    <ToolPanel className="p-0 overflow-hidden flex flex-col md:flex-row shadow-lg">
      {/* Input Pane */}
      <div className="flex-1 flex flex-col border-b md:border-b-0 md:border-r border-border bg-surface">
        <div className="px-4 py-3 border-b border-border bg-muted/30 flex items-center justify-between">
          <span className="text-sm font-semibold text-secondary-foreground flex items-center gap-2">
            {inputLabel}
          </span>
          {inputStats && (
            <div className="text-xs font-medium text-muted-foreground">{inputStats}</div>
          )}
        </div>
        <textarea 
          value={input} 
          onChange={(e) => onInputChange(e.target.value)}
          className="flex-1 min-h-[300px] w-full p-4 font-mono text-sm resize-none bg-transparent outline-none text-foreground placeholder:text-muted-foreground focus:ring-inset focus:ring-1 focus:ring-primary/50 transition-all"
          placeholder={inputPlaceholder}
          spellCheck={false}
        />
      </div>
      
      {/* Output Pane */}
      <div className="flex-1 flex flex-col bg-muted/10 relative">
        <div className="px-4 py-3 border-b border-border bg-muted/30 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-secondary-foreground flex items-center gap-2">
              {outputLabel}
            </span>
            {outputStats && (
              <div className="text-xs font-medium text-primary">{outputStats}</div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleCopy} className="text-muted-foreground hover:text-foreground transition-colors" title={t("copy")}>
              <Copy className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <textarea 
          value={output} 
          readOnly
          className={cn(
            "flex-1 min-h-[300px] w-full p-4 font-mono text-sm resize-none bg-transparent outline-none transition-colors",
            error ? 'text-error placeholder:text-error/70' : 'text-primary/90'
          )}
          placeholder={error ? "Invalid input provided." : outputPlaceholder}
          spellCheck={false}
        />
        
        {error && (
          <div className="absolute bottom-4 left-4 right-4 p-3 bg-error/10 border border-error/20 rounded-lg text-error text-sm font-medium backdrop-blur-sm">
            {error}
          </div>
        )}
      </div>
    </ToolPanel>
  );
}
