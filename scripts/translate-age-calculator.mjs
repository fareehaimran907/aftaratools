import fs from 'fs';
import path from 'path';

// Update en.json
const enPath = path.join(process.cwd(), 'messages', 'en.json');
const enContent = JSON.parse(fs.readFileSync(enPath, 'utf8'));
enContent.Tools['age-calculator'].ui = {
  calculateYourAge: "Calculate Your Age",
  dateOfBirth: "Date of Birth",
  calculate: "Calculate",
  years: "Years",
  months: "Months",
  days: "Days",
  nextBirthday: "Next Birthday",
  totalDays: "Total Days Lived"
};
fs.writeFileSync(enPath, JSON.stringify(enContent, null, 2));

// Update ar.json
const arPath = path.join(process.cwd(), 'messages', 'ar.json');
const arContent = JSON.parse(fs.readFileSync(arPath, 'utf8'));
arContent.Tools['age-calculator'].ui = {
  calculateYourAge: "احسب عمرك",
  dateOfBirth: "تاريخ الميلاد",
  calculate: "احسب",
  years: "سنوات",
  months: "أشهر",
  days: "أيام",
  nextBirthday: "عيد الميلاد القادم",
  totalDays: "إجمالي الأيام التي عشتها"
};
fs.writeFileSync(arPath, JSON.stringify(arContent, null, 2));

// Update AgeCalculator.tsx
const componentPath = path.join(process.cwd(), 'src', 'components', 'tools', 'AgeCalculator.tsx');
let compCode = fs.readFileSync(componentPath, 'utf8');

// Add import
if (!compCode.includes('useTranslations')) {
  compCode = compCode.replace('import { useState } from "react";', 'import { useState } from "react";\nimport { useTranslations } from "next-intl";');
}

// Add hook
if (!compCode.includes('const t = useTranslations')) {
  compCode = compCode.replace('export function AgeCalculator() {', 'export function AgeCalculator() {\n  const t = useTranslations("Tools.age-calculator.ui");');
}

// Replace strings
compCode = compCode.replace(/>Calculate Your Age</g, '>{t("calculateYourAge")}<');
compCode = compCode.replace(/>Date of Birth</g, '>{t("dateOfBirth")}<');
compCode = compCode.replace(/>Calculate</g, '>{t("calculate")}<');
compCode = compCode.replace(/>Years</g, '>{t("years")}<');
compCode = compCode.replace(/>Months</g, '>{t("months")}<');
compCode = compCode.replace(/>Days</g, '>{t("days")}<');
compCode = compCode.replace(/>Next Birthday</g, '>{t("nextBirthday")}<');
compCode = compCode.replace(/>Total Days Lived</g, '>{t("totalDays")}<');

fs.writeFileSync(componentPath, compCode);

console.log("Age Calculator translations added!");
