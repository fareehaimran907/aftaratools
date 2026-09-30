"use client";

import { useState } from "react";
import SHA1 from "crypto-js/sha1";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolEditor } from "@/components/tools/ui";
import { Hash } from "lucide-react";

export function Sha1Generator() {
  const t = useTranslations("Tools.sha1generator.ui");
  const [input, setInput] = useState("");

  const hash = input ? SHA1(input).toString() : "da39a3ee5e6b4b0d3255bfef95601890afd80709";

  return (
    <ToolLayout.Stacked>
      <ToolEditor
        inputLabel={<><Hash className="w-4 h-4" /> {t('inputString')}</>}
        outputLabel={<>{t('sha1Hash')}</>}
        input={input}
        output={hash}
        onInputChange={setInput}
        inputPlaceholder="Type text to hash..."
        outputStats={!input ? <span className="text-muted-foreground">{t('theDefaultHashShownIsForAnEmptyString')}</span> : undefined}
      />
    </ToolLayout.Stacked>
  );
}
