import { Project, SyntaxKind, Node } from "ts-morph";
import fs from "fs";
import path from "path";

// Function to convert text to a valid JSON key
function toCamelCase(str: string) {
  return str
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .trim()
    .split(/\s+/)
    .map((word, index) => {
      if (index === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

// Convert CamelCase component name to kebab-case tool id
function toKebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

const project = new Project();
const toolsDir = path.join(process.cwd(), "src/components/tools");
project.addSourceFilesAtPaths(`${toolsDir}/*.tsx`);

const enJsonPath = path.join(process.cwd(), "messages/en.json");
const enJson = JSON.parse(fs.readFileSync(enJsonPath, "utf-8"));

for (const sourceFile of project.getSourceFiles()) {
  const compName = sourceFile.getBaseNameWithoutExtension();
  const toolId = toKebabCase(compName);
  let hasModifications = false;
  const translations: Record<string, string> = {};

  // Ensure tool exists in en.json
  if (!enJson.Tools[toolId]) {
    enJson.Tools[toolId] = { title: compName, description: "" };
  }
  if (!enJson.Tools[toolId].ui) {
    enJson.Tools[toolId].ui = {};
  }

  // Find the main functional component
  const funcDecl = sourceFile.getFunction(compName);
  if (!funcDecl) continue;

  const jsxTexts = sourceFile.getDescendantsOfKind(SyntaxKind.JsxText);
  
  for (const jsxText of jsxTexts) {
    const text = jsxText.getLiteralText();
    const cleanText = text.replace(/\\n/g, '').trim();
    
    // Only translate actual text, skip whitespace/symbols
    if (cleanText.length > 0 && /[a-zA-Z]/.test(cleanText)) {
      const key = toCamelCase(cleanText);
      if (!key) continue;
      
      translations[key] = cleanText;
      enJson.Tools[toolId].ui[key] = cleanText;
      
      // Replace JSX text with {t('key')}
      const parent = jsxText.getParent();
      if (parent) {
        jsxText.replaceWithText(`{t('${key}')}`);
        hasModifications = true;
      }
    }
  }
  
  /*
  // Find placeholder attributes
  const jsxAttributes = sourceFile.getDescendantsOfKind(SyntaxKind.JsxAttribute);
  for (const attr of jsxAttributes) {
    if (attr.getName() === 'placeholder') {
      const init = attr.getInitializer();
      if (init && Node.isStringLiteral(init)) {
        const text = init.getLiteralValue();
        if (text.length > 0 && /[a-zA-Z]/.test(text)) {
          const key = toCamelCase(text) + "Placeholder";
          translations[key] = text;
          enJson.Tools[toolId].ui[key] = text;
          
          attr.setInitializer(`{t('${key}')}`);
          hasModifications = true;
        }
      }
    }
  }
  */

  if (hasModifications) {
    // Add useTranslations import
    const hasImport = sourceFile.getImportDeclaration("next-intl");
    if (!hasImport) {
      sourceFile.addImportDeclaration({
        namedImports: ["useTranslations"],
        moduleSpecifier: "next-intl"
      });
    } else {
      const namedImports = hasImport.getNamedImports();
      if (!namedImports.some(i => i.getName() === "useTranslations")) {
        hasImport.addNamedImport("useTranslations");
      }
    }

    // Add const t = useTranslations inside the component
    const body = funcDecl.getBody();
    if (Node.isBlock(body)) {
      const statements = body.getStatements();
      const hasT = statements.some(s => s.getText().includes('useTranslations('));
      if (!hasT) {
        body.insertStatements(0, `const t = useTranslations("Tools.${toolId}.ui");`);
      }
    }
    
    console.log(`Transformed ${compName}`);
  }
}

// Save all changes
project.saveSync();
fs.writeFileSync(enJsonPath, JSON.stringify(enJson, null, 2));

console.log("All components internationalized successfully!");
