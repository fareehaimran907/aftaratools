"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Copy,
  Check,
  FileText,
  Bold,
  Italic,
  Heading,
  List,
  Code,
  Quote,
  Download,
  Eye,
  Edit3,
} from "lucide-react";

export function MarkdownEditor() {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Editor

This is a **live, real-time** markdown editor and preview tool.

### Features:
- **Instant preview** side-by-side
- Rich formatting shortcuts
- Export to \`.md\` file or copy raw HTML

> "Simplicity is the soul of efficiency." — Austin Freeman

\`\`\`javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
\`\`\`

1. First item
2. Second item
3. Third item
`);
  const [copied, setCopied] = useState(false);
  const [mode, setMode] = useState<"split" | "edit" | "preview">("split");

  // Basic markdown to HTML converter for client-side live preview
  const parseMarkdown = (md: string) => {
    let html = md
      // Escape HTML
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-5 mb-2">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-black mt-6 mb-3">$1</h1>')
      // Blockquote
      .replace(/^\> (.*$)/gim, '<blockquote class="border-l-4 border-primary pl-4 italic my-3 text-muted-foreground">$1</blockquote>')
      // Code blocks
      .replace(/```([\s\S]*?)```/gim, '<pre class="bg-muted/70 p-4 rounded-xl font-mono text-xs my-3 overflow-x-auto"><code>$1</code></pre>')
      // Inline code
      .replace(/`([^`]+)`/gim, '<code class="bg-muted px-1.5 py-0.5 rounded font-mono text-xs text-primary">$1</code>')
      // Bold & Italic
      .replace(/\*\*(.*?)\*\*/gim, '<strong class="font-bold">$1</strong>')
      .replace(/\*(.*?)\*/gim, '<em class="italic">$1</em>')
      // Unordered lists
      .replace(/^\s*-\s+(.*$)/gim, '<li class="ml-4 list-disc">$1</li>')
      // Ordered lists
      .replace(/^\s*\d+\.\s+(.*$)/gim, '<li class="ml-4 list-decimal">$1</li>')
      // Paragraphs
      .replace(/\n\n+/g, '</p><p class="mb-3 leading-relaxed">');

    return `<p class="mb-3 leading-relaxed">${html}</p>`;
  };

  const insertText = (before: string, after: string = "") => {
    setMarkdown((prev) => prev + before + after);
  };

  const downloadMd = () => {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "document.md";
    link.click();
    URL.revokeObjectURL(url);
  };

  const copyMd = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  const chars = markdown.length;

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 bg-card border border-border rounded-3xl shadow-xl space-y-4">
      {/* Top Header & Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border/60">
        <div className="flex items-center gap-1.5 flex-wrap">
          <Button variant="ghost" size="sm" onClick={() => insertText("**Bold**")} className="h-8 w-8 p-0" title="Bold">
            <Bold className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => insertText("*Italic*")} className="h-8 w-8 p-0" title="Italic">
            <Italic className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => insertText("\n## Heading\n")} className="h-8 w-8 p-0" title="Heading">
            <Heading className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => insertText("\n- List item\n")} className="h-8 w-8 p-0" title="Bullet List">
            <List className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => insertText("\n> Blockquote\n")} className="h-8 w-8 p-0" title="Quote">
            <Quote className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm" onClick={() => insertText("`code`")} className="h-8 w-8 p-0" title="Code">
            <Code className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          {/* Mode Switcher */}
          <div className="flex border border-border rounded-lg overflow-hidden text-xs">
            <button
              onClick={() => setMode("edit")}
              className={`px-2.5 py-1 ${mode === "edit" ? "bg-primary text-primary-foreground font-semibold" : "bg-muted/40"}`}
            >
              Edit
            </button>
            <button
              onClick={() => setMode("split")}
              className={`px-2.5 py-1 ${mode === "split" ? "bg-primary text-primary-foreground font-semibold" : "bg-muted/40"}`}
            >
              Split
            </button>
            <button
              onClick={() => setMode("preview")}
              className={`px-2.5 py-1 ${mode === "preview" ? "bg-primary text-primary-foreground font-semibold" : "bg-muted/40"}`}
            >
              Preview
            </button>
          </div>

          <Button variant="outline" size="sm" onClick={downloadMd} className="h-8 text-xs">
            <Download className="w-3.5 h-3.5 mr-1" />
            Export .md
          </Button>

          <Button variant="default" size="sm" onClick={copyMd} className="h-8 text-xs font-semibold">
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
            {copied ? "Copied" : "Copy"}
          </Button>
        </div>
      </div>

      {/* Editor & Preview Split View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[500px]">
        {/* Editor Side */}
        {(mode === "edit" || mode === "split") && (
          <div className={`flex flex-col h-full ${mode === "edit" ? "col-span-2" : ""}`}>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              placeholder="Write your markdown here..."
              className="w-full flex-1 p-4 bg-muted/20 border border-border rounded-2xl font-mono text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
        )}

        {/* Live Preview Side */}
        {(mode === "preview" || mode === "split") && (
          <div className={`flex flex-col h-full ${mode === "preview" ? "col-span-2" : ""}`}>
            <div
              dangerouslySetInnerHTML={{ __html: parseMarkdown(markdown) }}
              className="w-full flex-1 p-6 bg-muted/30 border border-border rounded-2xl overflow-y-auto text-foreground text-sm prose dark:prose-invert max-w-none"
            />
          </div>
        )}
      </div>

      {/* Footer Word Count */}
      <div className="flex justify-between items-center text-xs text-muted-foreground pt-1">
        <span>{words} words &bull; {chars} characters</span>
        <span>~{Math.max(1, Math.ceil(words / 200))} min read</span>
      </div>
    </div>
  );
}
