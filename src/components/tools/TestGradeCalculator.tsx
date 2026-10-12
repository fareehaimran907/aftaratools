"use client";

import { useTranslations } from "next-intl";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Check, RotateCcw, GraduationCap, Award, BookOpen } from "lucide-react";

export function TestGradeCalculator() {
  const t = useTranslations("Tools.test-grade-calculator.ui");
  const [totalQuestions, setTotalQuestions] = useState("50");
  const [wrongAnswers, setWrongAnswers] = useState("5");
  const [copied, setCopied] = useState(false);

  const total = parseInt(totalQuestions, 10);
  const wrong = parseInt(wrongAnswers, 10);

  const isValid = !isNaN(total) && total > 0 && !isNaN(wrong) && wrong >= 0 && wrong <= total;

  const correct = isValid ? total - wrong : 0;
  const percentage = isValid ? (correct / total) * 100 : 0;

  const getLetterGrade = (score: number) => {
    if (score >= 97) return { letter: "A+", gpa: "4.0", color: "text-emerald-500", pass: true };
    if (score >= 93) return { letter: "A", gpa: "4.0", color: "text-emerald-500", pass: true };
    if (score >= 90) return { letter: "A-", gpa: "3.7", color: "text-emerald-500", pass: true };
    if (score >= 87) return { letter: "B+", gpa: "3.3", color: "text-blue-500", pass: true };
    if (score >= 83) return { letter: "B", gpa: "3.0", color: "text-blue-500", pass: true };
    if (score >= 80) return { letter: "B-", gpa: "2.7", color: "text-blue-500", pass: true };
    if (score >= 77) return { letter: "C+", gpa: "2.3", color: "text-amber-500", pass: true };
    if (score >= 73) return { letter: "C", gpa: "2.0", color: "text-amber-500", pass: true };
    if (score >= 70) return { letter: "C-", gpa: "1.7", color: "text-amber-500", pass: true };
    if (score >= 65) return { letter: "D", gpa: "1.0", color: "text-orange-500", pass: true };
    return { letter: "F", gpa: "0.0", color: "text-rose-500", pass: false };
  };

  const gradeInfo = getLetterGrade(percentage);

  const copyResult = () => {
    if (!isValid) return;
    const text = `Score: ${percentage.toFixed(1)}% (${correct}/${total}), Grade: ${gradeInfo.letter}, GPA: ${gradeInfo.gpa}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setTotalQuestions("50");
    setWrongAnswers("0");
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <GraduationCap className="w-5 h-5" />
          <span>{t("title")}</span>
        </div>
        <Button variant="ghost" size="sm" onClick={handleReset} className="h-8 text-xs text-muted-foreground">
          <RotateCcw className="w-3.5 h-3.5 mr-1" />
          {t("reset")}
        </Button>
      </div>

      {/* Input Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">{t("totalQuestions")}</label>
          <Input
            type="number"
            min="1"
            max="1000"
            value={totalQuestions}
            onChange={(e) => setTotalQuestions(e.target.value)}
            placeholder="e.g. 50"
            className="text-lg font-mono h-12 bg-muted/40 rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">{t("wrongQuestions")}</label>
          <Input
            type="number"
            min="0"
            max={totalQuestions || "100"}
            value={wrongAnswers}
            onChange={(e) => setWrongAnswers(e.target.value)}
            placeholder="e.g. 5"
            className="text-lg font-mono h-12 bg-muted/40 rounded-xl"
          />
        </div>
      </div>

      {/* Results View */}
      {isValid ? (
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t("scorePercentage")}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-bold uppercase ${
                    gradeInfo.pass ? "bg-emerald-500/10 text-emerald-500" : "bg-rose-500/10 text-rose-500"
                  }`}
                >
                  {gradeInfo.pass ? t("passing") : t("failing")}
                </span>
              </div>
              <div className="text-5xl sm:text-6xl font-mono font-extrabold text-foreground tracking-tight">
                {percentage.toFixed(1)}%
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {correct} correct out of {total} total questions ({wrong} {t("missed")})
              </p>
            </div>

            <div className="flex items-center gap-6 border-t sm:border-t-0 sm:border-l border-border/60 pt-4 sm:pt-0 sm:pl-8">
              <div className="text-center">
                <span className="text-xs text-muted-foreground block mb-1">{t("letterGrade")}</span>
                <span className={`text-5xl font-black font-mono ${gradeInfo.color}`}>
                  {gradeInfo.letter}
                </span>
              </div>
              <div className="text-center">
                <span className="text-xs text-muted-foreground block mb-1">{t("gpaValue")}</span>
                <span className="text-3xl font-bold font-mono text-foreground">
                  {gradeInfo.gpa}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Grading Scale Table */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold flex items-center gap-2 text-foreground">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>{t("gradingChart")} for {total} Questions</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              {Array.from({ length: Math.min(8, total + 1) }).map((_, idx) => {
                const qWrong = idx;
                const pct = ((total - qWrong) / total) * 100;
                const g = getLetterGrade(pct);
                return (
                  <div
                    key={idx}
                    className={`p-2 rounded-lg border text-center ${
                      qWrong === wrong ? "bg-primary text-primary-foreground border-primary" : "bg-muted/30 border-border/40"
                    }`}
                  >
                    <span className="block font-medium">{qWrong} missed</span>
                    <span className="font-bold">{pct.toFixed(0)}% ({g.letter})</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Button variant="outline" size="sm" onClick={copyResult} className="text-xs">
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500 mr-1.5" /> : <Copy className="w-3.5 h-3.5 mr-1.5" />}
              {copied ? t("copied") : t("copyGrade")}
            </Button>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground border border-dashed rounded-2xl bg-muted/20">
          Please enter valid positive numbers for total and wrong questions.
        </div>
      )}
    </div>
  );
}
