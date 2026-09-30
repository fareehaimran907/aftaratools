"use client";

import { useState } from "react";
import SHA256 from "crypto-js/sha256";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolEditor } from "@/components/tools/ui";
import { Hash } from "lucide-react";

export function Sha256Generator() {
  const t = useTranslations("Tools.sha256generator.ui");
  const [input, setInput] = useState("");

  const hash = input ? SHA256(input).toString() : "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

  return (
    <ToolLayout.Stacked>
      <ToolEditor
        inputLabel={<><Hash className="w-4 h-4" /> {t('inputString')}</>}
        outputLabel={<>{t('sha256Hash')}</>}
        input={input}
        output={hash}
        onInputChange={setInput}
        inputPlaceholder="Type text to hash..."
        outputStats={!input ? <span className="text-muted-foreground">{t('theDefaultHashShownIsForAnEmptyString')}</span> : undefined}
      />
    </ToolLayout.Stacked>
  );
}
