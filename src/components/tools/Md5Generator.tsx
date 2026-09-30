"use client";

import { useState } from "react";
import MD5 from "crypto-js/md5";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolEditor } from "@/components/tools/ui";
import { Hash } from "lucide-react";

export function Md5Generator() {
  const t = useTranslations("Tools.md5generator.ui");
  const [input, setInput] = useState("");

  const hash = input ? MD5(input).toString() : "d41d8cd98f00b204e9800998ecf8427e";

  return (
    <ToolLayout.Stacked>
      <ToolEditor
        inputLabel={<><Hash className="w-4 h-4" /> {t('inputString')}</>}
        outputLabel={<>{t('md5Hash')}</>}
        input={input}
        output={hash}
        onInputChange={setInput}
        inputPlaceholder="Type text to hash..."
        outputStats={!input ? <span className="text-muted-foreground">{t('theDefaultHashShownIsForAnEmptyString')}</span> : undefined}
      />
    </ToolLayout.Stacked>
  );
}
