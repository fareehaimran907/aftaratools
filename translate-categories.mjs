import fs from 'fs';
import { translate } from 'google-translate-api-x';

const supportedLocales = ['ar', 'bn', 'de', 'es', 'fr', 'hi', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'tr'];

const categories = {
  "date-time": { title: "Date & Time", description: "Calculators and tools for date and time." },
  "finance": { title: "Finance", description: "Financial calculators for salary, percentages, and loans." },
  "developer-tools": { title: "Developer Tools", description: "Formatters, validators, and encoders for developers." },
  "converters": { title: "Converters", description: "Easily convert between different units and formats." },
  "education": { title: "Education", description: "Calculators and tools for students and teachers." },
  "health": { title: "Health & Fitness", description: "Tools for tracking health metrics and fitness goals." },
  "home": { title: "Home & DIY", description: "Calculators for home projects and everyday tasks." },
  "text": { title: "Text Tools", description: "Utilities for manipulating, analyzing, and formatting text." }
};

const existing = {
  "date-time": {
    en: { title: "Date & Time", description: "Calculators and tools for date and time." },
    es: { title: "Fecha y hora", description: "Calculadoras y herramientas para fecha y hora." },
    ru: { title: "Дата и время", description: "Калькуляторы и инструменты для даты и времени." },
    ar: { title: "التاريخ والوقت", description: "حاسبات وأدوات للتاريخ والوقت." }
  },
  "finance": {
    en: { title: "Finance", description: "Financial calculators for salary, percentages, and loans." },
    es: { title: "Finanzas", description: "Calculadoras financieras." },
    ru: { title: "Финансы", description: "Финансовые калькуляторы." },
    ar: { title: "التمويل", description: "الآلات الحاسبة المالية." }
  },
  "developer-tools": {
    en: { title: "Developer Tools", description: "Formatters, validators, and encoders for developers." },
    es: { title: "Herramientas para desarrolladores", description: "Herramientas para desarrolladores." },
    ru: { title: "Инструменты разработчика", description: "Инструменты для разработчиков." },
    ar: { title: "أدوات المطورين", description: "أدوات للمطورين." }
  },
  "converters": {
    en: { title: "Converters", description: "Easily convert between different units and formats." },
    es: { title: "Convertidores", description: "Convierte fácilmente entre diferentes unidades y formatos." },
    ru: { title: "Конвертеры", description: "Легко конвертируйте между различными единицами и форматами." },
    ar: { title: "محولات", description: "قم بالتحويل بسهولة بين الوحدات والتنسيقات المختلفة." }
  },
  "education": {
    en: { title: "Education", description: "Calculators and tools for students and teachers." },
    es: { title: "Educación", description: "Calculadoras y herramientas para estudiantes y profesores." },
    ru: { title: "Образование", description: "Калькуляторы и инструменты для учеников и учителей." },
    ar: { title: "تعليم", description: "حاسبات وأدوات للطلاب والمعلمين." }
  },
  "health": {
    en: { title: "Health & Fitness", description: "Tools for tracking health metrics and fitness goals." },
    es: { title: "Salud y bienestar", description: "Herramientas para métricas de salud y objetivos de estado físico." },
    ru: { title: "Здоровье и фитнес", description: "Инструменты для отслеживания показателей здоровья и фитнеса." },
    ar: { title: "الصحة واللياقة", description: "أدوات لتتبع مقاييس الصحة وأهداف اللياقة." }
  },
  "home": {
    en: { title: "Home & DIY", description: "Calculators for home projects and everyday tasks." },
    es: { title: "Hogar y bricolaje", description: "Calculadoras para proyectos domésticos y tareas diarias." },
    ru: { title: "Дом и хобби", description: "Калькуляторы для домашних проектов и повседневных задач." },
    ar: { title: "المنزل وأعمال يدوية", description: "حاسبات للمشاريع المنزلية والمهام اليومية." }
  },
  "text": {
    en: { title: "Text Tools", description: "Utilities for manipulating, analyzing, and formatting text." },
    es: { title: "Herramientas de texto", description: "Utilidades para manipular, analizar y formatear texto." },
    ru: { title: "Текстовые инструменты", description: "Утилиты для обработки, анализа и форматирования текста." },
    ar: { title: "أدوات النصوص", description: "أدوات لمعالجة وتحليل وتنسيق النصوص." }
  }
};

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  for (const catId of Object.keys(categories)) {
    const enText = categories[catId];
    for (const loc of supportedLocales) {
      if (!existing[catId][loc]) {
        console.log(`Translating ${catId} to ${loc}`);
        const resTitle = await translate(enText.title, { to: loc });
        await sleep(500);
        const resDesc = await translate(enText.description, { to: loc });
        await sleep(500);
        existing[catId][loc] = {
            title: resTitle.text,
            description: resDesc.text
        };
      }
    }
  }

  const output = `export const categoriesRegistry = {\n` + 
    Object.keys(existing).map(catId => {
      let catBlock = `  "${catId}": {\n    id: "${catId}",\n    locales: {\n`;
      const locs = Object.keys(existing[catId]).map(loc => {
        return `      ${loc}: { title: ${JSON.stringify(existing[catId][loc].title)}, description: ${JSON.stringify(existing[catId][loc].description)} }`;
      }).join(',\n');
      catBlock += locs + `\n    }\n  }`;
      return catBlock;
    }).join(',\n') + `\n};\n`;

  fs.writeFileSync('src/lib/tools/categories.ts', output);
  console.log('Done!');
}

run();
