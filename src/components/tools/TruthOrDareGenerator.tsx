"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, HelpCircle, Flame, RefreshCw, Copy, Check } from "lucide-react";

const TRUTHS = [
  "What is the most embarrassing thing you've ever done in front of a crush?",
  "What is a secret you've never told your parents?",
  "If you had to delete every app on your phone except three, which three would you keep?",
  "What is the biggest lie you've ever told without getting caught?",
  "Who was your first celebrity crush?",
  "What is your biggest irrational fear?",
  "If you won $10 million tomorrow, what is the very first thing you would buy?",
  "What is the worst haircut or fashion choice you've ever made?",
  "Have you ever pretended to like a gift that you secretly hated?",
  "What is your guilty pleasure TV show or movie?",
  "If you could trade lives with anyone in this room for a day, who would it be and why?",
  "What is something you pretend to understand, but actually have no clue about?",
];

const DARES = [
  "Do your best impression of another person in this room until someone guesses who it is.",
  "Speak in an accent of the group's choice for the next three rounds.",
  "Show the last photo in your phone's camera roll to everyone.",
  "Let someone in the room text anything they want to one of your contacts.",
  "Do 15 jumping jacks while singing your favorite song at the top of your lungs.",
  "Try to balance a spoon on your nose for 30 seconds without dropping it.",
  "Send a funny voice memo to a friend explaining an absurd alien conspiracy.",
  "Talk in rhymes for the next two minutes.",
  "Act like a mime trapped in an invisible glass box for one full minute.",
  "Eat a spoonful of a condiment of the group's choice (e.g. mustard or hot sauce).",
  "Hold a plank for 45 seconds.",
  "Let someone style your hair however they want for the rest of the game.",
];

export function TruthOrDareGenerator() {
  const [currentPrompt, setCurrentPrompt] = useState<string>(
    "Choose TRUTH or DARE to start the game!"
  );
  const [promptType, setPromptType] = useState<"truth" | "dare" | null>(null);
  const [copied, setCopied] = useState(false);

  const getTruth = () => {
    const item = TRUTHS[Math.floor(Math.random() * TRUTHS.length)];
    setCurrentPrompt(item);
    setPromptType("truth");
  };

  const getDare = () => {
    const item = DARES[Math.floor(Math.random() * DARES.length)];
    setCurrentPrompt(item);
    setPromptType("dare");
  };

  const getRandom = () => {
    if (Math.random() >= 0.5) getTruth();
    else getDare();
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(currentPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl text-center space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>Truth or Dare Generator</span>
        </div>
        <Button variant="ghost" size="sm" onClick={getRandom} className="h-8 text-xs text-muted-foreground">
          <RefreshCw className="w-3.5 h-3.5 mr-1" />
          Random Choice
        </Button>
      </div>

      {/* Choice Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={getTruth}
          className="h-16 text-lg sm:text-xl font-black bg-blue-600 hover:bg-blue-500 text-white rounded-2xl shadow-lg shadow-blue-500/20 active:scale-95 transition-transform"
        >
          <HelpCircle className="w-6 h-6 mr-2" />
          TRUTH
        </Button>

        <Button
          onClick={getDare}
          className="h-16 text-lg sm:text-xl font-black bg-rose-600 hover:bg-rose-500 text-white rounded-2xl shadow-lg shadow-rose-500/20 active:scale-95 transition-transform"
        >
          <Flame className="w-6 h-6 mr-2" />
          DARE
        </Button>
      </div>

      {/* Prompt Card */}
      <div
        className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 min-h-[200px] flex flex-col justify-center items-center ${
          promptType === "truth"
            ? "bg-blue-500/10 border-blue-500/30 text-blue-950 dark:text-blue-100"
            : promptType === "dare"
            ? "bg-rose-500/10 border-rose-500/30 text-rose-950 dark:text-rose-100"
            : "bg-muted/30 border-border text-foreground"
        }`}
      >
        {promptType && (
          <span
            className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3 ${
              promptType === "truth" ? "bg-blue-500 text-white" : "bg-rose-500 text-white"
            }`}
          >
            {promptType.toUpperCase()}
          </span>
        )}

        <p className="text-xl sm:text-2xl font-bold leading-relaxed max-w-xl">
          {currentPrompt}
        </p>

        {promptType && (
          <Button
            variant="ghost"
            size="sm"
            onClick={copyPrompt}
            className="mt-4 text-xs text-muted-foreground hover:text-foreground"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
            {copied ? "Copied" : "Copy Prompt"}
          </Button>
        )}
      </div>
    </div>
  );
}
