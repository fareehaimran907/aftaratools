"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolEditor } from "@/components/tools/ui";
import { Database } from "lucide-react";

import { format } from "sql-formatter";

function formatSql(sql: string) {
  if (!sql) return "";
  try {
    return format(sql, {
      language: "sql",
      linesBetweenQueries: 2,
    });
  } catch (e) {
    // If it fails to parse (e.g. invalid syntax while typing), return the original or a best effort
    return sql;
  }
}

export function SqlFormatter() {
  const t = useTranslations("Tools.sql-formatter.ui");
  const [input, setInput] = useState("");
  const output = formatSql(input);

  return (
    <ToolLayout.Stacked>
      <ToolEditor
        inputLabel={<><Database className="w-4 h-4" /> {t('rawSql')}</>}
        outputLabel={<>{t('formattedSql')}</>}
        input={input}
        output={output}
        onInputChange={setInput}
        inputPlaceholder="SELECT * FROM users WHERE id = 1"
        outputPlaceholder="Formatted SQL will appear here..."
      />
    </ToolLayout.Stacked>
  );
}
