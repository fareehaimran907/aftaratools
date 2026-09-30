import { notFound } from "next/navigation";
import { getToolIdBySlug } from "@/lib/tools/registry-helpers";
import { toolsRegistry } from "@/lib/tools/registry";
import { routing, Locale } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { Link } from "@/i18n/routing";

export function generateStaticParams() {
  const params: { locale: string; tool: string }[] = [];
  const pathnames = routing.pathnames as Record<string, any>;
  
  for (const locale of routing.locales) {
    for (const [key, value] of Object.entries(pathnames)) {
      if (key !== '/' && key.startsWith('/')) {
        const slug = value[locale]?.slice(1) || key.slice(1);
        params.push({ locale, tool: slug });
      }
    }
  }
  return params;
}

import fs from 'fs';
import path from 'path';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; tool: string }> }): Promise<Metadata> {
  const { locale, tool: slug } = await params;
  const toolId = getToolIdBySlug(slug, locale as Locale) || slug;
  const toolEntry = toolsRegistry[toolId];
  
  if (!toolEntry) {
    return {};
  }
  
  const pathnames = routing.pathnames as Record<string, any>;
  const pathKey = `/${toolEntry.id}`;
  const alternates: Record<string, string> = {};
  
  for (const l of routing.locales) {
    const s = pathnames[pathKey]?.[l] || pathnames[pathKey] || pathKey;
    const localePrefix = l === 'en' ? '' : `/${l}`;
    
    // Check if translation exists before adding hreflang
    const checkPath = path.join(process.cwd(), 'src', 'content', 'tools', l, `${toolId}.json`);
    if (fs.existsSync(checkPath)) {
      alternates[l] = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'}${localePrefix}${s}`;
    }
  }
  if (alternates['en']) {
    alternates['x-default'] = alternates['en'];
  }

  // Check for structured SEO JSON file
  let jsonContent: any = null;
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'tools', locale, `${toolId}.json`);
    if (fs.existsSync(filePath)) {
      jsonContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (e) {
    // Ignore error and fallback
  }

  const localeContent = toolEntry.locales[locale as Locale];
  
  const seoTitle = jsonContent?.title || `${localeContent?.title || toolEntry.id} - Free Online ${localeContent?.title || toolEntry.id}`;
  const seoDescription = jsonContent?.metaDescription || localeContent?.description || `Free online ${localeContent?.primaryKeyword || toolEntry.id} tool.`;
  const canonicalUrl = alternates[locale as string];
  
  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: canonicalUrl,
      languages: alternates,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: canonicalUrl,
      type: "website",
      siteName: "100 Tools",
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
    },
    robots: {
      index: !!jsonContent,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    }
  };
}

import dynamic from 'next/dynamic';

const AgeCalculator = dynamic(() => import('@/components/tools/AgeCalculator').then(mod => mod.AgeCalculator), { ssr: true });
const PercentageCalculator = dynamic(() => import('@/components/tools/PercentageCalculator').then(mod => mod.PercentageCalculator), { ssr: true });
const JsonFormatter = dynamic(() => import('@/components/tools/JsonFormatter').then(mod => mod.JsonFormatter), { ssr: true });
const DateDifferenceCalculator = dynamic(() => import('@/components/tools/DateDifferenceCalculator').then(mod => mod.DateDifferenceCalculator), { ssr: true });
const DaysBetweenDates = dynamic(() => import('@/components/tools/DaysBetweenDates').then(mod => mod.DaysBetweenDates), { ssr: true });
const DaysUntilCalculator = dynamic(() => import('@/components/tools/DaysUntilCalculator').then(mod => mod.DaysUntilCalculator), { ssr: true });
const WeeksBetweenDates = dynamic(() => import('@/components/tools/WeeksBetweenDates').then(mod => mod.WeeksBetweenDates), { ssr: true });
const MonthsBetweenDates = dynamic(() => import('@/components/tools/MonthsBetweenDates').then(mod => mod.MonthsBetweenDates), { ssr: true });
const TimeDurationCalculator = dynamic(() => import('@/components/tools/TimeDurationCalculator').then(mod => mod.TimeDurationCalculator), { ssr: true });
const TimeDifferenceCalculator = dynamic(() => import('@/components/tools/TimeDifferenceCalculator').then(mod => mod.TimeDifferenceCalculator), { ssr: true });
const UnixTimestampConverter = dynamic(() => import('@/components/tools/UnixTimestampConverter').then(mod => mod.UnixTimestampConverter), { ssr: true });
const SalaryCalculator = dynamic(() => import('@/components/tools/SalaryCalculator').then(mod => mod.SalaryCalculator), { ssr: true });
const DiscountCalculator = dynamic(() => import('@/components/tools/DiscountCalculator').then(mod => mod.DiscountCalculator), { ssr: true });
const TipCalculator = dynamic(() => import('@/components/tools/TipCalculator').then(mod => mod.TipCalculator), { ssr: true });
const TaxCalculator = dynamic(() => import('@/components/tools/TaxCalculator').then(mod => mod.TaxCalculator), { ssr: true });
const ProfitMarginCalculator = dynamic(() => import('@/components/tools/ProfitMarginCalculator').then(mod => mod.ProfitMarginCalculator), { ssr: true });
const MarkupCalculator = dynamic(() => import('@/components/tools/MarkupCalculator').then(mod => mod.MarkupCalculator), { ssr: true });
const BreakEvenCalculator = dynamic(() => import('@/components/tools/BreakEvenCalculator').then(mod => mod.BreakEvenCalculator), { ssr: true });
const RoiCalculator = dynamic(() => import('@/components/tools/RoiCalculator').then(mod => mod.RoiCalculator), { ssr: true });
const SimpleInterestCalculator = dynamic(() => import('@/components/tools/SimpleInterestCalculator').then(mod => mod.SimpleInterestCalculator), { ssr: true });
const CompoundInterestCalculator = dynamic(() => import('@/components/tools/CompoundInterestCalculator').then(mod => mod.CompoundInterestCalculator), { ssr: true });
const LoanCalculator = dynamic(() => import('@/components/tools/LoanCalculator').then(mod => mod.LoanCalculator), { ssr: true });
const MortgageCalculator = dynamic(() => import('@/components/tools/MortgageCalculator').then(mod => mod.MortgageCalculator), { ssr: true });
const EmiCalculator = dynamic(() => import('@/components/tools/EmiCalculator').then(mod => mod.EmiCalculator), { ssr: true });
const HourlyToSalaryCalculator = dynamic(() => import('@/components/tools/HourlyToSalaryCalculator').then(mod => mod.HourlyToSalaryCalculator), { ssr: true });
const SalaryToHourlyCalculator = dynamic(() => import('@/components/tools/SalaryToHourlyCalculator').then(mod => mod.SalaryToHourlyCalculator), { ssr: true });
const PercentageIncreaseCalculator = dynamic(() => import('@/components/tools/PercentageIncreaseCalculator').then(mod => mod.PercentageIncreaseCalculator), { ssr: true });
const PercentageDecreaseCalculator = dynamic(() => import('@/components/tools/PercentageDecreaseCalculator').then(mod => mod.PercentageDecreaseCalculator), { ssr: true });
const InvestmentCalculator = dynamic(() => import('@/components/tools/InvestmentCalculator').then(mod => mod.InvestmentCalculator), { ssr: true });
const CurrencyConverter = dynamic(() => import('@/components/tools/CurrencyConverter').then(mod => mod.CurrencyConverter), { ssr: true });
const WorldTimeConverter = dynamic(() => import('@/components/tools/WorldTimeConverter').then(mod => mod.WorldTimeConverter), { ssr: true });
const TimeZoneConverter = dynamic(() => import('@/components/tools/TimeZoneConverter').then(mod => mod.TimeZoneConverter), { ssr: true });
const CountdownTimer = dynamic(() => import('@/components/tools/CountdownTimer').then(mod => mod.CountdownTimer), { ssr: true });
const Stopwatch = dynamic(() => import('@/components/tools/Stopwatch').then(mod => mod.Stopwatch), { ssr: true });
const PomodoroTimer = dynamic(() => import('@/components/tools/PomodoroTimer').then(mod => mod.PomodoroTimer), { ssr: true });
const SleepCalculator = dynamic(() => import('@/components/tools/SleepCalculator').then(mod => mod.SleepCalculator), { ssr: true });
const WakeUpTimeCalculator = dynamic(() => import('@/components/tools/WakeUpTimeCalculator').then(mod => mod.WakeUpTimeCalculator), { ssr: true });
const BedtimeCalculator = dynamic(() => import('@/components/tools/BedtimeCalculator').then(mod => mod.BedtimeCalculator), { ssr: true });
const WorkHoursCalculator = dynamic(() => import('@/components/tools/WorkHoursCalculator').then(mod => mod.WorkHoursCalculator), { ssr: true });
const OvertimeCalculator = dynamic(() => import('@/components/tools/OvertimeCalculator').then(mod => mod.OvertimeCalculator), { ssr: true });
const LengthConverter = dynamic(() => import('@/components/tools/LengthConverter').then(mod => mod.LengthConverter), { ssr: true });
const WeightConverter = dynamic(() => import('@/components/tools/WeightConverter').then(mod => mod.WeightConverter), { ssr: true });
const HeightConverter = dynamic(() => import('@/components/tools/HeightConverter').then(mod => mod.HeightConverter), { ssr: true });
const TemperatureConverter = dynamic(() => import('@/components/tools/TemperatureConverter').then(mod => mod.TemperatureConverter), { ssr: true });
const AreaConverter = dynamic(() => import('@/components/tools/AreaConverter').then(mod => mod.AreaConverter), { ssr: true });
const VolumeConverter = dynamic(() => import('@/components/tools/VolumeConverter').then(mod => mod.VolumeConverter), { ssr: true });
const SpeedConverter = dynamic(() => import('@/components/tools/SpeedConverter').then(mod => mod.SpeedConverter), { ssr: true });
const DataStorageConverter = dynamic(() => import('@/components/tools/DataStorageConverter').then(mod => mod.DataStorageConverter), { ssr: true });
const NumberBaseConverter = dynamic(() => import('@/components/tools/NumberBaseConverter').then(mod => mod.NumberBaseConverter), { ssr: true });
const BinaryToDecimal = dynamic(() => import('@/components/tools/BinaryToDecimal').then(mod => mod.BinaryToDecimal), { ssr: true });
const DecimalToBinary = dynamic(() => import('@/components/tools/DecimalToBinary').then(mod => mod.DecimalToBinary), { ssr: true });
const HexToDecimal = dynamic(() => import('@/components/tools/HexToDecimal').then(mod => mod.HexToDecimal), { ssr: true });
const RomanNumeralConverter = dynamic(() => import('@/components/tools/RomanNumeralConverter').then(mod => mod.RomanNumeralConverter), { ssr: true });
const FractionCalculator = dynamic(() => import('@/components/tools/FractionCalculator').then(mod => mod.FractionCalculator), { ssr: true });
const RatioCalculator = dynamic(() => import('@/components/tools/RatioCalculator').then(mod => mod.RatioCalculator), { ssr: true });
const AverageCalculator = dynamic(() => import('@/components/tools/AverageCalculator').then(mod => mod.AverageCalculator), { ssr: true });
const GpaCalculator = dynamic(() => import('@/components/tools/GpaCalculator').then(mod => mod.GpaCalculator), { ssr: true });
const GradeCalculator = dynamic(() => import('@/components/tools/GradeCalculator').then(mod => mod.GradeCalculator), { ssr: true });
const FinalGradeCalculator = dynamic(() => import('@/components/tools/FinalGradeCalculator').then(mod => mod.FinalGradeCalculator), { ssr: true });
const BmiCalculator = dynamic(() => import('@/components/tools/BmiCalculator').then(mod => mod.BmiCalculator), { ssr: true });
const BmrCalculator = dynamic(() => import('@/components/tools/BmrCalculator').then(mod => mod.BmrCalculator), { ssr: true });
const CalorieCalculator = dynamic(() => import('@/components/tools/CalorieCalculator').then(mod => mod.CalorieCalculator), { ssr: true });
const MacroCalculator = dynamic(() => import('@/components/tools/MacroCalculator').then(mod => mod.MacroCalculator), { ssr: true });
const BodyFatCalculator = dynamic(() => import('@/components/tools/BodyFatCalculator').then(mod => mod.BodyFatCalculator), { ssr: true });
const WaterIntakeCalculator = dynamic(() => import('@/components/tools/WaterIntakeCalculator').then(mod => mod.WaterIntakeCalculator), { ssr: true });
const PaceCalculator = dynamic(() => import('@/components/tools/PaceCalculator').then(mod => mod.PaceCalculator), { ssr: true });
const RunningDistanceCalculator = dynamic(() => import('@/components/tools/RunningDistanceCalculator').then(mod => mod.RunningDistanceCalculator), { ssr: true });
const SpeedDistanceTimeCalculator = dynamic(() => import('@/components/tools/SpeedDistanceTimeCalculator').then(mod => mod.SpeedDistanceTimeCalculator), { ssr: true });
const SquareFootageCalculator = dynamic(() => import('@/components/tools/SquareFootageCalculator').then(mod => mod.SquareFootageCalculator), { ssr: true });
const PaintCalculator = dynamic(() => import('@/components/tools/PaintCalculator').then(mod => mod.PaintCalculator), { ssr: true });
const TileCalculator = dynamic(() => import('@/components/tools/TileCalculator').then(mod => mod.TileCalculator), { ssr: true });
const ConcreteCalculator = dynamic(() => import('@/components/tools/ConcreteCalculator').then(mod => mod.ConcreteCalculator), { ssr: true });
const BoardFootCalculator = dynamic(() => import('@/components/tools/BoardFootCalculator').then(mod => mod.BoardFootCalculator), { ssr: true });
const CostPerSquareFootCalculator = dynamic(() => import('@/components/tools/CostPerSquareFootCalculator').then(mod => mod.CostPerSquareFootCalculator), { ssr: true });
const MulchCalculator = dynamic(() => import('@/components/tools/MulchCalculator').then(mod => mod.MulchCalculator), { ssr: true });
const PlantSpacingCalculator = dynamic(() => import('@/components/tools/PlantSpacingCalculator').then(mod => mod.PlantSpacingCalculator), { ssr: true });
const StepCalculator = dynamic(() => import('@/components/tools/StepCalculator').then(mod => mod.StepCalculator), { ssr: true });
const DeckingCalculator = dynamic(() => import('@/components/tools/DeckingCalculator').then(mod => mod.DeckingCalculator), { ssr: true });
const FenceCalculator = dynamic(() => import('@/components/tools/FenceCalculator').then(mod => mod.FenceCalculator), { ssr: true });
const Base64EncodeDecode = dynamic(() => import('@/components/tools/Base64EncodeDecode').then(mod => mod.Base64EncodeDecode), { ssr: true });
const UrlEncodeDecode = dynamic(() => import('@/components/tools/UrlEncodeDecode').then(mod => mod.UrlEncodeDecode), { ssr: true });
const HtmlEncodeDecode = dynamic(() => import('@/components/tools/HtmlEncodeDecode').then(mod => mod.HtmlEncodeDecode), { ssr: true });
const Md5Generator = dynamic(() => import('@/components/tools/Md5Generator').then(mod => mod.Md5Generator), { ssr: true });
const Sha1Generator = dynamic(() => import('@/components/tools/Sha1Generator').then(mod => mod.Sha1Generator), { ssr: true });
const Sha256Generator = dynamic(() => import('@/components/tools/Sha256Generator').then(mod => mod.Sha256Generator), { ssr: true });
const UuidGenerator = dynamic(() => import('@/components/tools/UuidGenerator').then(mod => mod.UuidGenerator), { ssr: true });
const JwtDecoder = dynamic(() => import('@/components/tools/JwtDecoder').then(mod => mod.JwtDecoder), { ssr: true });
const HtmlMinifier = dynamic(() => import('@/components/tools/HtmlMinifier').then(mod => mod.HtmlMinifier), { ssr: true });
const CssMinifier = dynamic(() => import('@/components/tools/CssMinifier').then(mod => mod.CssMinifier), { ssr: true });
const JsMinifier = dynamic(() => import('@/components/tools/JsMinifier').then(mod => mod.JsMinifier), { ssr: true });
const SqlFormatter = dynamic(() => import('@/components/tools/SqlFormatter').then(mod => mod.SqlFormatter), { ssr: true });
const XmlFormatter = dynamic(() => import('@/components/tools/XmlFormatter').then(mod => mod.XmlFormatter), { ssr: true });
const WordCounter = dynamic(() => import('@/components/tools/WordCounter').then(mod => mod.WordCounter), { ssr: true });
const CharacterCounter = dynamic(() => import('@/components/tools/CharacterCounter').then(mod => mod.CharacterCounter), { ssr: true });
const LoremIpsumGenerator = dynamic(() => import('@/components/tools/LoremIpsumGenerator').then(mod => mod.LoremIpsumGenerator), { ssr: true });
const BionicReadingConverter = dynamic(() => import('@/components/tools/BionicReadingConverter').then(mod => mod.BionicReadingConverter), { ssr: true });
const PasswordGenerator = dynamic(() => import('@/components/tools/PasswordGenerator').then(mod => mod.PasswordGenerator), { ssr: true });
const QrCodeGenerator = dynamic(() => import('@/components/tools/QrCodeGenerator').then(mod => mod.QrCodeGenerator), { ssr: true });
const RandomNumberGenerator = dynamic(() => import('@/components/tools/RandomNumberGenerator').then(mod => mod.RandomNumberGenerator), { ssr: true });

function ToolWidget({ toolId }: { toolId: string }) {
  switch (toolId) {
    case 'age-calculator': return <AgeCalculator />;
    case 'percentage-calculator': return <PercentageCalculator />;
    case 'json-formatter': return <JsonFormatter />;
    case 'date-difference-calculator': return <DateDifferenceCalculator />;
    case 'days-between-dates': return <DaysBetweenDates />;
    case 'days-until-calculator': return <DaysUntilCalculator />;
    case 'weeks-between-dates': return <WeeksBetweenDates />;
    case 'months-between-dates': return <MonthsBetweenDates />;
    case 'time-duration-calculator': return <TimeDurationCalculator />;
    case 'time-difference-calculator': return <TimeDifferenceCalculator />;
    case 'unix-timestamp-converter': return <UnixTimestampConverter />;
    case 'world-time-converter': return <WorldTimeConverter />;
    case 'time-zone-converter': return <TimeZoneConverter />;
    case 'countdown-timer': return <CountdownTimer />;
    case 'stopwatch': return <Stopwatch />;
    case 'pomodoro-timer': return <PomodoroTimer />;
    case 'sleep-calculator': return <SleepCalculator />;
    case 'wake-up-time-calculator': return <WakeUpTimeCalculator />;
    case 'bedtime-calculator': return <BedtimeCalculator />;
    case 'work-hours-calculator': return <WorkHoursCalculator />;
    case 'overtime-calculator': return <OvertimeCalculator />;
    case 'salary-calculator': return <SalaryCalculator />;
    case 'discount-calculator': return <DiscountCalculator />;
    case 'tip-calculator': return <TipCalculator />;
    case 'tax-calculator': return <TaxCalculator />;
    case 'profit-margin-calculator': return <ProfitMarginCalculator />;
    case 'markup-calculator': return <MarkupCalculator />;
    case 'break-even-calculator': return <BreakEvenCalculator />;
    case 'roi-calculator': return <RoiCalculator />;
    case 'simple-interest-calculator': return <SimpleInterestCalculator />;
    case 'compound-interest-calculator': return <CompoundInterestCalculator />;
    case 'loan-calculator': return <LoanCalculator />;
    case 'mortgage-calculator': return <MortgageCalculator />;
    case 'emi-calculator': return <EmiCalculator />;
    case 'hourly-to-salary-calculator': return <HourlyToSalaryCalculator />;
    case 'salary-to-hourly-calculator': return <SalaryToHourlyCalculator />;
    case 'percentage-increase-calculator': return <PercentageIncreaseCalculator />;
    case 'percentage-decrease-calculator': return <PercentageDecreaseCalculator />;
    case 'investment-calculator': return <InvestmentCalculator />;
    case 'currency-converter': return <CurrencyConverter />;
    case 'length-converter': return <LengthConverter />;
    case 'weight-converter': return <WeightConverter />;
    case 'height-converter': return <HeightConverter />;
    case 'temperature-converter': return <TemperatureConverter />;
    case 'area-converter': return <AreaConverter />;
    case 'volume-converter': return <VolumeConverter />;
    case 'speed-converter': return <SpeedConverter />;
    case 'data-storage-converter': return <DataStorageConverter />;
    case 'number-base-converter': return <NumberBaseConverter />;
    case 'binary-to-decimal': return <BinaryToDecimal />;
    case 'decimal-to-binary': return <DecimalToBinary />;
    case 'hex-to-decimal': return <HexToDecimal />;
    case 'roman-numeral-converter': return <RomanNumeralConverter />;
    case 'fraction-calculator': return <FractionCalculator />;
    case 'ratio-calculator': return <RatioCalculator />;
    case 'average-calculator': return <AverageCalculator />;
    case 'gpa-calculator': return <GpaCalculator />;
    case 'grade-calculator': return <GradeCalculator />;
    case 'final-grade-calculator': return <FinalGradeCalculator />;
    case 'bmi-calculator': return <BmiCalculator />;
    case 'bmr-calculator': return <BmrCalculator />;
    case 'calorie-calculator': return <CalorieCalculator />;
    case 'macro-calculator': return <MacroCalculator />;
    case 'body-fat-calculator': return <BodyFatCalculator />;
    case 'water-intake-calculator': return <WaterIntakeCalculator />;
    case 'pace-calculator': return <PaceCalculator />;
    case 'running-distance-calculator': return <RunningDistanceCalculator />;
    case 'speed-distance-time-calculator': return <SpeedDistanceTimeCalculator />;
    case 'square-footage-calculator': return <SquareFootageCalculator />;
    case 'paint-calculator': return <PaintCalculator />;
    case 'tile-calculator': return <TileCalculator />;
    case 'concrete-calculator': return <ConcreteCalculator />;
    case 'board-foot-calculator': return <BoardFootCalculator />;
    case 'cost-per-square-foot-calculator': return <CostPerSquareFootCalculator />;
    case 'mulch-calculator': return <MulchCalculator />;
    case 'plant-spacing-calculator': return <PlantSpacingCalculator />;
    case 'step-calculator': return <StepCalculator />;
    case 'decking-calculator': return <DeckingCalculator />;
    case 'fence-calculator': return <FenceCalculator />;
    case 'base64-encode-decode': return <Base64EncodeDecode />;
    case 'url-encode-decode': return <UrlEncodeDecode />;
    case 'html-encode-decode': return <HtmlEncodeDecode />;
    case 'md5-generator': return <Md5Generator />;
    case 'sha1-generator': return <Sha1Generator />;
    case 'sha256-generator': return <Sha256Generator />;
    case 'uuid-generator': return <UuidGenerator />;
    case 'jwt-decoder': return <JwtDecoder />;
    case 'html-minifier': return <HtmlMinifier />;
    case 'css-minifier': return <CssMinifier />;
    case 'js-minifier': return <JsMinifier />;
    case 'sql-formatter': return <SqlFormatter />;
    case 'xml-formatter': return <XmlFormatter />;
    case 'word-counter': return <WordCounter />;
    case 'character-counter': return <CharacterCounter />;
    case 'lorem-ipsum-generator': return <LoremIpsumGenerator />;
    case 'bionic-reading-converter': return <BionicReadingConverter />;
    case 'password-generator': return <PasswordGenerator />;
    case 'qr-code-generator': return <QrCodeGenerator />;
    case 'random-number-generator': return <RandomNumberGenerator />;
    default: return <p className="text-gray-500">Interactive widget for {toolId}</p>;
  }
}

import { AdBanner, AdInContent } from '@/components/ads';
import { getTranslations } from 'next-intl/server';
import { RelatedTools } from '@/components/RelatedTools';

export default async function ToolPage({ params }: { params: Promise<{ locale: string; tool: string }> }) {
  const { locale, tool: slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Navigation");
  const tPage = await getTranslations("Page");

  const toolId = getToolIdBySlug(slug, locale as Locale) || slug;
  const toolEntry = toolsRegistry[toolId];

  if (!toolEntry) {
    notFound();
  }

  let jsonContent: any = null;
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'tools', locale, `${toolId}.json`);
    if (fs.existsSync(filePath)) {
      jsonContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (e) {
    // Ignore error and fallback
  }

  const rawLocaleContent = toolEntry.locales[locale as Locale];
  const enContent = toolEntry.locales.en;
  
  const localeContent: any = {
    title: jsonContent?.seoTitle || jsonContent?.title || rawLocaleContent?.title || enContent?.title || toolEntry.id,
    intro: jsonContent?.intro || jsonContent?.hero || rawLocaleContent?.intro || enContent?.intro || "",
    primaryKeyword: jsonContent?.primaryKeyword || rawLocaleContent?.primaryKeyword || enContent?.primaryKeyword || toolEntry.id,
    howToUse: jsonContent?.howToUse || (rawLocaleContent?.howToUse && rawLocaleContent?.howToUse.length > 0) ? rawLocaleContent?.howToUse : enContent?.howToUse,
    explanation: jsonContent?.whatIs || rawLocaleContent?.explanation || enContent?.explanation,
    howItWorks: jsonContent?.howItWorks || jsonContent?.formula || rawLocaleContent?.formula || enContent?.formula,
    example: jsonContent?.workedExample || jsonContent?.example,
    useCases: jsonContent?.useCases,
    tipsAndLimitations: jsonContent?.tipsAndLimitations || jsonContent?.benefits,
    cta: jsonContent?.cta,
    h1: jsonContent?.h1 || rawLocaleContent?.title || enContent?.title || toolEntry.id,
    faq: jsonContent?.faq || (rawLocaleContent?.faq && rawLocaleContent?.faq.length > 0) ? rawLocaleContent?.faq : enContent?.faq,
    whatIs: jsonContent?.whatIs,
    workedExample: jsonContent?.workedExample,
    formula: jsonContent?.formula || (rawLocaleContent as any)?.formula || (enContent as any)?.formula,
    benefits: jsonContent?.benefits || (rawLocaleContent as any)?.benefits || (enContent as any)?.benefits
  };

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  const localePrefix = locale === 'en' ? '' : `/${locale}`;
  const pathnames = routing.pathnames as Record<string, any>;
  const pathKey = `/${toolEntry.id}`;
  const slugCurrent = pathnames[pathKey]?.[locale] || pathnames[pathKey] || pathKey;
  const currentUrl = `${baseUrl}${localePrefix}${slugCurrent}`;

  const schemas: any[] = [];

  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: localeContent.primaryKeyword || toolEntry.id,
    description: `Free online ${localeContent.primaryKeyword || toolEntry.id} tool.`,
    url: currentUrl,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
    },
    inLanguage: locale,
  });

  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('home'),
        item: baseUrl + localePrefix
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: toolEntry.categoryId.replace('-', ' '),
        item: baseUrl + localePrefix + `/category/${toolEntry.categoryId}`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: localeContent.title || toolEntry.id,
        item: currentUrl
      }
    ]
  });

  if (localeContent.faq && localeContent.faq.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: localeContent.faq.map((f: any) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer
        }
      }))
    });
  }

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "developer-tools":
        return { bg: "bg-[var(--cat-dev-bg)]", text: "text-[var(--cat-dev)]", gradient: "from-[var(--cat-dev)]", border: "border-[var(--cat-dev)]" };
      case "finance":
        return { bg: "bg-[var(--cat-finance-bg)]", text: "text-[var(--cat-finance)]", gradient: "from-[var(--cat-finance)]", border: "border-[var(--cat-finance)]" };
      case "date-time":
        return { bg: "bg-[var(--cat-time-bg)]", text: "text-[var(--cat-time)]", gradient: "from-[var(--cat-time)]", border: "border-[var(--cat-time)]" };
      case "text":
        return { bg: "bg-[var(--cat-text-bg)]", text: "text-[var(--cat-text)]", gradient: "from-[var(--cat-text)]", border: "border-[var(--cat-text)]" };
      case "converters":
        return { bg: "bg-[var(--cat-convert-bg)]", text: "text-[var(--cat-convert)]", gradient: "from-[var(--cat-convert)]", border: "border-[var(--cat-convert)]" };
      case "health":
        return { bg: "bg-emerald-500/10", text: "text-emerald-500", gradient: "from-emerald-500", border: "border-emerald-500" };
      default:
        return { bg: "bg-primary/10", text: "text-primary", gradient: "from-primary", border: "border-primary" };
    }
  };

  const styles = getCategoryStyles(toolEntry.categoryId);

  const hasContent = Boolean(
    (localeContent.howToUse && localeContent.howToUse.length > 0) ||
    localeContent.explanation ||
    localeContent.formula ||
    localeContent.example ||
    localeContent.useCases ||
    localeContent.benefits ||
    (localeContent.faq && localeContent.faq.length > 0)
  );

  return (
    <main className="min-h-screen pb-24 bg-background">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      
      {/* Tool Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4 border-b border-border bg-surface mb-12">
        <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${styles.gradient}/10 via-background to-background`} />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <nav className="text-sm text-secondary-foreground mb-6 flex gap-2 items-center">
            <Link href="/" className="hover:text-primary transition-colors">{t('home')}</Link>
            <span>&gt;</span>
            <Link href={`/category/${toolEntry.categoryId}` as any} className={`hover:${styles.text} transition-colors capitalize font-medium`}>
              {toolEntry.categoryId.replace('-', ' ')}
            </Link>
            <span>&gt;</span>
            <span className="text-foreground font-medium">{localeContent.title}</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 capitalize text-foreground tracking-tight">
              {localeContent.h1}
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed">
              {localeContent.intro}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 space-y-12">
        <section>
          <AdBanner />

          {/* Features Strip */}
          {localeContent.tipsAndLimitations && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {localeContent.tipsAndLimitations.map((benefit: string, idx: number) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border shadow-sm">
                  <div className={`p-1.5 rounded-full ${styles.bg} ${styles.text}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <p className="text-sm font-medium text-secondary-foreground leading-snug">{benefit}</p>
                </div>
              ))}
            </div>
          )}

          {/* Main Tool Widget Container */}
          <div className={`bg-surface rounded-3xl border border-border shadow-sm overflow-hidden`}>
            {/* Top accent bar for the widget */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${styles.gradient} to-transparent opacity-80`} />
            <div className="p-6 md:p-10">
              <ToolWidget toolId={toolId} />
            </div>
          </div>
          
          <div className="mt-8">
            <AdInContent />
          </div>
        </section>

        {hasContent ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              {(localeContent.whatIs || localeContent.explanation) && (
                <section className="bg-surface border border-border p-8 rounded-2xl shadow-sm">
                  <h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">{tPage("whatIs", { title: localeContent.title || localeContent.h1 || toolEntry.id }) || `What is the ${localeContent.title}?`}</h2>
                  <p className="text-secondary-foreground leading-relaxed text-lg">{localeContent.whatIs || localeContent.explanation}</p>
                </section>
              )}

              {localeContent.howToUse && localeContent.howToUse.length > 0 && (
                <section className="bg-surface border border-border p-8 rounded-2xl shadow-sm">
                  <h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">{tPage("howToUse", { title: localeContent.title || localeContent.h1 || toolEntry.id }) || `How to use the ${localeContent.title}`}</h2>
                  <ol className="list-decimal pl-5 space-y-4 text-secondary-foreground marker:text-primary marker:font-medium">
                    {localeContent.howToUse.map((step: string, idx: number) => (
                      <li key={idx} className="pl-3 leading-relaxed">{step}</li>
                    ))}
                  </ol>
                </section>
              )}

              {(localeContent.workedExample || localeContent.example) && (
                <section className="bg-surface border border-border p-8 rounded-2xl shadow-sm">
                  <h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">{tPage("example") || "Example"}</h2>
                  <p className="text-secondary-foreground leading-relaxed text-lg italic bg-secondary/30 p-5 rounded-xl border-l-4 border-l-primary">{localeContent.workedExample || localeContent.example}</p>
                </section>
              )}

              {localeContent.useCases && localeContent.useCases.length > 0 && (
                <section className="bg-surface border border-border p-8 rounded-2xl shadow-sm">
                  <h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">{tPage("useCases") || "Common Use Cases"}</h2>
                  <ul className="space-y-4">
                    {localeContent.useCases.map((useCase: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`mt-1 p-1 rounded-full ${styles.bg} ${styles.text}`}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span className="text-secondary-foreground leading-relaxed">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {localeContent.howItWorks && (
                <section className="bg-surface border border-border p-8 rounded-2xl shadow-sm">
                  <h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">{tPage("howItWorks") || "How it Works"}</h2>
                  <div className={`p-5 rounded-xl border border-border/50 overflow-x-auto ${styles.bg}`}>
                    <code className={`font-mono text-base font-medium ${styles.text}`}>{localeContent.howItWorks}</code>
                  </div>
                </section>
              )}

              {localeContent.faq && localeContent.faq.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">{tPage("faq") || "Frequently Asked Questions"}</h2>
                  <div className="space-y-4">
                    {localeContent.faq.map((faqItem: any, idx: number) => (
                      <details key={idx} className="group bg-surface border border-border rounded-2xl shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between p-6 text-lg font-medium text-foreground hover:bg-secondary/50 transition-colors">
                          {faqItem.question}
                          <span className={`ml-4 flex-shrink-0 transition-transform duration-200 group-open:rotate-180 ${styles.text}`}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </summary>
                        <div className="px-6 pb-6 text-secondary-foreground leading-relaxed">
                          <p className="pt-4 border-t border-border">{faqItem.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <RelatedTools currentToolId={toolId} locale={locale as Locale} />
                
                {localeContent.cta && (
                  <div className={`p-6 rounded-2xl bg-gradient-to-br ${styles.gradient} to-background border ${styles.border} shadow-sm`}>
                    <h3 className={`text-xl font-bold mb-3 ${styles.text}`}>{tPage("readyToStart") || "Ready to start?"}</h3>
                    <p className="text-secondary-foreground mb-4 leading-relaxed">{localeContent.cta}</p>
                    <a href="#" className="w-full flex justify-center py-2.5 px-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity">
                      {tPage("useToolNow") || "Use Tool Now"}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <RelatedTools currentToolId={toolId} locale={locale as Locale} orientation="horizontal" />
          </div>
        )}

        <AdBanner />
      </div>
    </main>
  );
}
