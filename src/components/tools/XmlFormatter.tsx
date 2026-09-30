"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolEditor } from "@/components/tools/ui";
import { FileCode } from "lucide-react";

function formatXml(xml: string) {
  if (!xml) return "";
  let formatted = '';
  let pad = 0;
  
  const lines = xml
    .replace(/(>)(<)(\/*)/g, '$1\n$2$3')
    .split('\n');
    
  lines.forEach((node) => {
    let indent = 0;
    if (node.match(/.+<\/\w[^>]*>$/)) {
      indent = 0;
    } else if (node.match(/^<\/\w/)) {
      if (pad !== 0) { pad -= 1; }
    } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
      indent = 1;
    } else {
      indent = 0;
    }
    
    formatted += '  '.repeat(pad) + node + '\n';
    pad += indent;
  });
  
  return formatted.trim();
}

export function XmlFormatter() {
  const t = useTranslations("Tools.xml-formatter.ui");
  const [input, setInput] = useState("");
  const output = formatXml(input);

  return (
    <ToolLayout.Stacked>
      <ToolEditor
        inputLabel={<><FileCode className="w-4 h-4" /> {t('rawXml')}</>}
        outputLabel={<>{t('formattedXml')}</>}
        input={input}
        output={output}
        onInputChange={setInput}
        inputPlaceholder="<root><item>Hello</item></root>"
        outputPlaceholder="Formatted XML will appear here..."
      />
    </ToolLayout.Stacked>
  );
}
