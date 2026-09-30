"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { ToolLayout, ToolPanel, ToolPanelContent } from "@/components/tools/ui";
import { Scale } from "lucide-react";

export function RatioCalculator() {
  const t = useTranslations("Tools.ratio-calculator.ui");
  const [a, setA] = useState("2");
  const [b, setB] = useState("5");
  const [c, setC] = useState("10");
  const [d, setD] = useState("");

  // We are solving A : B = C : D
  const calculateD = () => {
    const valA = parseFloat(a);
    const valB = parseFloat(b);
    const valC = parseFloat(c);
    
    if (valA && valB && valC) {
      setD(((valB * valC) / valA).toString());
    }
  };

  const calculateC = () => {
    const valA = parseFloat(a);
    const valB = parseFloat(b);
    const valD = parseFloat(d);
    
    if (valA && valB && valD) {
      setC(((valA * valD) / valB).toString());
    }
  };

  return (
    <ToolLayout.Stacked>
      <ToolPanel>
        <div className="flex items-center gap-2 mb-6">
          <Scale className="w-5 h-5 text-primary" />
          <h3 className="font-bold text-foreground">{t('ratioCalculatorAbCd')}</h3>
        </div>

        <ToolPanelContent className="space-y-8">
          <p className="text-sm text-muted-foreground text-center">
            {t('enter3ValuesToCalculateThe4thMissingValue')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 bg-secondary/30 p-8 rounded-xl border border-border">
            
            <div className="flex gap-3 items-center">
              <Input type="number" value={a} onChange={e => { setA(e.target.value); }} onBlur={calculateD} className="w-24 h-14 text-xl text-center font-bold" />
              <span className="text-3xl font-bold text-muted-foreground">:</span>
              <Input type="number" value={b} onChange={e => { setB(e.target.value); }} onBlur={calculateD} className="w-24 h-14 text-xl text-center font-bold" />
            </div>

            <div className="text-3xl font-bold text-muted-foreground">=</div>

            <div className="flex gap-3 items-center">
              <Input type="number" value={c} onChange={e => { setC(e.target.value); }} onBlur={calculateD} className="w-24 h-14 text-xl text-center font-bold text-primary bg-primary/5 border-primary/30 focus-visible:ring-primary/50" placeholder="C" />
              <span className="text-3xl font-bold text-muted-foreground">:</span>
              <Input type="number" value={d} onChange={e => { setD(e.target.value); }} onBlur={calculateC} className="w-24 h-14 text-xl text-center font-bold text-primary bg-primary/5 border-primary/30 focus-visible:ring-primary/50" placeholder="D" />
            </div>

          </div>
        </ToolPanelContent>
      </ToolPanel>
    </ToolLayout.Stacked>
  );
}
