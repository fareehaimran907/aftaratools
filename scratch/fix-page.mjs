import fs from 'fs';

const filePath = 'src/app/[locale]/[tool]/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  /<h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">What is the \{localeContent\.title\}\?<\/h2>/g,
  '<h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">{tPage("whatIs", { title: localeContent.title || localeContent.h1 || toolEntry.id }) || `What is the ${localeContent.title}?`}</h2>'
);

content = content.replace(
  /<h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">How to use the \{localeContent\.title\}<\/h2>/g,
  '<h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">{tPage("howToUse", { title: localeContent.title || localeContent.h1 || toolEntry.id }) || `How to use the ${localeContent.title}`}</h2>'
);

content = content.replace(
  /<h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">Example<\/h2>/g,
  '<h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">{tPage("example") || "Example"}</h2>'
);

content = content.replace(
  /<h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">Common Use Cases<\/h2>/g,
  '<h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">{tPage("useCases") || "Common Use Cases"}</h2>'
);

content = content.replace(
  /<h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">How it Works<\/h2>/g,
  '<h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">{tPage("howItWorks") || "How it Works"}</h2>'
);

content = content.replace(
  /<h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">Frequently Asked Questions<\/h2>/g,
  '<h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">{tPage("faq") || "Frequently Asked Questions"}</h2>'
);

content = content.replace(
  /<h3 className={`text-xl font-bold mb-3 \$\{styles\.text\}`\}>Ready to start\?<\/h3>/g,
  '<h3 className={`text-xl font-bold mb-3 ${styles.text}`}>{tPage("readyToStart") || "Ready to start?"}</h3>'
);

content = content.replace(
  /Use Tool Now/g,
  '{tPage("useToolNow") || "Use Tool Now"}'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Replaced strings in page.tsx");
