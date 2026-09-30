import fs from 'fs';
import path from 'path';
import { toolsRegistry } from '../src/lib/tools/registry';
// @ts-ignore
import translate from 'google-translate-api-x';

const locales = ['ar', 'bn', 'de', 'es', 'fr', 'hi', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'tr'];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function run() {
  console.log(`Found ${Object.keys(toolsRegistry).length} tools.`);

  for (const toolId of Object.keys(toolsRegistry)) {
    const enFilePath = path.join(process.cwd(), 'src', 'content', 'tools', 'en', `${toolId}.json`);
    if (!fs.existsSync(enFilePath)) {
      console.warn(`No EN json found for ${toolId}`);
      continue;
    }
    
    const enContent = JSON.parse(fs.readFileSync(enFilePath, 'utf8'));

    // Extract all translatable strings in a deterministic order
    const stringsToTranslate = [
      enContent.seoTitle,
      enContent.metaDescription,
      enContent.h1,
      enContent.primaryKeyword,
      ...(enContent.secondaryKeywords || []),
      enContent.intro,
      enContent.whatIs,
      ...(enContent.howToUse || []),
      enContent.howItWorks,
      enContent.workedExample,
      enContent.resultInterpretation,
      ...(enContent.useCases || []),
      ...(enContent.tipsAndLimitations || []),
      ...(enContent.faq || []).map((f: any) => f.question),
      ...(enContent.faq || []).map((f: any) => f.answer),
      enContent.imageAlt,
      enContent.ogImageText
    ];

    for (const locale of locales) {
      const dirPath = path.join(process.cwd(), 'src', 'content', 'tools', locale);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      const filePath = path.join(dirPath, `${toolId}.json`);
      
      console.log(`Translating ${locale} for ${toolId}...`);
      
      let results;
      try {
        const res = await translate(stringsToTranslate, { from: 'en', to: locale, rejectOnPartialFail: false });
        results = res.map((r: any) => r ? r.text : null);
      } catch(e) {
        console.error(`Error translating ${toolId} for ${locale}:`, e);
        continue;
      }
      
      // Fallback
      results = results.map((r: string | null, i: number) => r || stringsToTranslate[i]);

      let pointer = 0;
      
      const secKeywordsCount = (enContent.secondaryKeywords || []).length;
      const howToUseCount = (enContent.howToUse || []).length;
      const useCasesCount = (enContent.useCases || []).length;
      const tipsCount = (enContent.tipsAndLimitations || []).length;
      const faqCount = (enContent.faq || []).length;

      const translatedContent = {
        seoTitle: results[pointer++],
        metaDescription: results[pointer++],
        h1: results[pointer++],
        primaryKeyword: results[pointer++],
        secondaryKeywords: results.slice(pointer, pointer += secKeywordsCount),
        slug: toolId,
        intro: results[pointer++],
        whatIs: results[pointer++],
        howToUse: results.slice(pointer, pointer += howToUseCount),
        howItWorks: results[pointer++],
        workedExample: results[pointer++],
        resultInterpretation: results[pointer++],
        useCases: results.slice(pointer, pointer += useCasesCount),
        tipsAndLimitations: results.slice(pointer, pointer += tipsCount),
        faq: [] as any[],
        relatedTools: enContent.relatedTools,
        lastReviewed: enContent.lastReviewed,
        imageAlt: "",
        ogImageText: ""
      };

      const faqQuestions = results.slice(pointer, pointer += faqCount);
      const faqAnswers = results.slice(pointer, pointer += faqCount);
      
      for (let i = 0; i < faqCount; i++) {
        translatedContent.faq.push({
          question: faqQuestions[i],
          answer: faqAnswers[i]
        });
      }

      translatedContent.imageAlt = results[pointer++];
      translatedContent.ogImageText = results[pointer++];
      
      fs.writeFileSync(filePath, JSON.stringify(translatedContent, null, 2));
      
      await delay(1000);
    }
  }
  console.log("Done generating fully mapped SEO JSONs.");
}

run();
