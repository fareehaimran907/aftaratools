import fs from 'fs';
import path from 'path';
import translate from 'google-translate-api-x';

const baseDir = 'src/content/tools';
const locales = ['ar', 'bn', 'de', 'es', 'fr', 'hi', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'tr'];
const enDir = path.join(baseDir, 'en');

const tools = fs.readdirSync(enDir).filter(f => f.endsWith('.json'));

let report = {};
locales.forEach(l => report[l] = { checked: 0, found: 0, fixed: 0, filesToFix: [] });

const delay = ms => new Promise(res => setTimeout(res, ms));

async function processFiles() {
  for (const locale of locales) {
    for (const tool of tools) {
      const enPath = path.join(enDir, tool);
      const locPath = path.join(baseDir, locale, tool);
      
      if (!fs.existsSync(locPath)) continue;

      let enData, locData;
      try {
        enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
        locData = JSON.parse(fs.readFileSync(locPath, 'utf8'));
      } catch (e) {
        continue;
      }

      const enFaq = enData.faq || [];
      if (enFaq.length === 0) continue;

      report[locale].checked++;

      let locFaq = locData.faq || [];
      let needsFix = false;

      while (locFaq.length < enFaq.length) {
        locFaq.push({ question: '', answer: '' });
      }

      for (let i = 0; i < enFaq.length; i++) {
        const enQ = enFaq[i];
        let locQ = locFaq[i];

        const isQuestionEnglish = !locQ.question || locQ.question === enQ.question || detectEnglish(locQ.question);
        const isAnswerEnglish = !locQ.answer || locQ.answer === enQ.answer || detectEnglish(locQ.answer);

        if (isQuestionEnglish && enQ.question && enQ.question.trim() !== '') {
          needsFix = true;
          try {
            await delay(1000);
            const res = await translate(enQ.question, { to: locale, forceBatch: false });
            locQ.question = res.text;
          } catch(err) {}
        }

        if (isAnswerEnglish && enQ.answer && enQ.answer.trim() !== '') {
          needsFix = true;
          try {
            await delay(1000);
            const res = await translate(enQ.answer, { to: locale, forceBatch: false });
            locQ.answer = res.text;
          } catch(err) {}
        }
      }

      if (needsFix) {
        report[locale].found++;
        report[locale].filesToFix.push(tool);
        locData.faq = locFaq;
        fs.writeFileSync(locPath, JSON.stringify(locData, null, 2) + '\n', 'utf8');
        report[locale].fixed++;
      }
    }
  }
  
  console.log('Language | FAQ Files Checked | English Text Found | Translations Fixed');
  console.log('---------|-------------------|--------------------|--------------------');
  for (const locale of locales) {
    const data = report[locale];
    console.log(`${locale.padEnd(8)} | ${String(data.checked).padEnd(17)} | ${String(data.found).padEnd(18)} | ${String(data.fixed).padEnd(18)}`);
  }
}

function detectEnglish(text) {
  if (!text) return true;
  const lower = text.toLowerCase();
  if (lower.includes('is it free') || lower.includes('how fast is') || lower.includes('does this work on mobile') || lower.includes('yes, our') || lower.includes('the tool is fully')) {
      return true;
  }
  return false;
}

processFiles().catch(console.error);
