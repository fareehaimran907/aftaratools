"use client";

import { useTranslations } from "next-intl";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check, Radio, Volume2, ArrowRightLeft, RotateCcw } from "lucide-react";

const MORSE_MAP: Record<string, string> = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.", G: "--.", H: "....",
  I: "..", J: ".---", K: "-.-", L: ".-..", M: "--", N: "-.", O: "---", P: ".--.",
  Q: "--.-", R: ".-.", S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..", "0": "-----", "1": ".----", "2": "..---", "3": "...--",
  "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  ".": ".-.-.-", ",": "--..--", "?": "..--..", "'": ".----.", "!": "-.-.--",
  "/": "-..-.", "(": "-.--.", ")": "-.--.-", "&": ".-...", ":": "---...",
  ";": "-.-.-.", "=": "-...-", "+": ".-.-.", "-": "-....-", "_": "..--.-",
  '"': ".-..-.", "$": "...-..-", "@": ".--.-.", " ": "/",
};

const REVERSE_MORSE: Record<string, string> = Object.entries(MORSE_MAP).reduce(
  (acc, [letter, morse]) => ({ ...acc, [morse]: letter }),
  {}
);

export function MorseCodeTranslator() {
  const t = useTranslations("Tools.morse-code-translator.ui");
  const [textToMorse, setTextToMorse] = useState(true);
  const [input, setInput] = useState("SOS");
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const translate = (val: string, isTextToMorse: boolean) => {
    if (!val.trim()) return "";
    if (isTextToMorse) {
      return val
        .toUpperCase()
        .split("")
        .map((char) => MORSE_MAP[char] || char)
        .join(" ");
    } else {
      return val
        .trim()
        .split(" ")
        .map((code) => (code === "/" ? " " : REVERSE_MORSE[code] || "?"))
        .join("");
    }
  };

  const output = translate(input, textToMorse);

  const swap = () => {
    setInput(output);
    setTextToMorse(!textToMorse);
  };

  const copy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Play audio sound using Web Audio API
  const playMorse = async () => {
    const morseCode = textToMorse ? output : input;
    if (!morseCode || isPlaying) return;

    try {
      setIsPlaying(true);
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const dotDuration = 0.08; // seconds

      let currentTime = audioCtx.currentTime + 0.05;

      for (const symbol of morseCode) {
        if (symbol === "." || symbol === "-") {
          const duration = symbol === "." ? dotDuration : dotDuration * 3;
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();

          osc.type = "sine";
          osc.frequency.setValueAtTime(750, currentTime);

          gain.gain.setValueAtTime(0, currentTime);
          gain.gain.linearRampToValueAtTime(0.2, currentTime + 0.005);
          gain.gain.setValueAtTime(0.2, currentTime + duration - 0.005);
          gain.gain.linearRampToValueAtTime(0, currentTime + duration);

          osc.connect(gain);
          gain.connect(audioCtx.destination);

          osc.start(currentTime);
          osc.stop(currentTime + duration);

          currentTime += duration + dotDuration; // Inter-element space
        } else if (symbol === " ") {
          currentTime += dotDuration * 3; // Space between letters
        } else if (symbol === "/") {
          currentTime += dotDuration * 7; // Space between words
        }
      }

      setTimeout(() => {
        setIsPlaying(false);
      }, (currentTime - audioCtx.currentTime) * 1000);
    } catch {
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 bg-card border border-border rounded-3xl shadow-xl space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-border/60">
        <div className="flex items-center gap-2 text-primary font-semibold text-lg">
          <Radio className="w-5 h-5" />
          <span>{t("title")}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={swap} className="h-8 text-xs">
            <ArrowRightLeft className="w-3.5 h-3.5 mr-1" />
            {t("switchDirection")}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setInput("")} className="h-8 text-xs text-muted-foreground">
            {t("clear")}
          </Button>
        </div>
      </div>

      {/* Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground">
          {textToMorse ? t("textInput") : t("morseInput")}
        </label>
        <textarea
          rows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={textToMorse ? "Type text to translate into Morse code..." : "Type morse code (e.g. ... --- ...)"}
          className="w-full p-4 bg-muted/40 border border-border rounded-2xl font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Output */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm font-medium text-muted-foreground">
          <span>{textToMorse ? t("morseOutput") : t("textOutput")}</span>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={playMorse}
              disabled={isPlaying || !output}
              className="h-8 text-xs"
            >
              <Volume2 className="w-3.5 h-3.5 mr-1 text-primary" />
              {isPlaying ? t("playing") : t("playAudio")}
            </Button>
            <Button variant="default" size="sm" onClick={copy} disabled={!output} className="h-8 text-xs font-semibold">
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
              {copied ? t("copied") : t("copy")}
            </Button>
          </div>
        </div>

        <div className="p-4 sm:p-5 bg-muted/30 border border-border rounded-2xl min-h-[5rem] flex items-center">
          <div className="font-mono text-lg font-bold text-foreground break-all select-all tracking-widest">
            {output || <span className="text-muted-foreground font-normal text-sm tracking-normal">Translation appears here...</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
