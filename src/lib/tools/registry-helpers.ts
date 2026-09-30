import { routing, Locale } from "@/i18n/routing";
import fs from 'fs';
import path from 'path';

export function getToolIdBySlug(slug: string, locale: Locale): string | undefined {
  const pathnames = routing.pathnames as Record<string, Record<string, string> | string>;
  for (const [key, value] of Object.entries(pathnames)) {
    if (key.startsWith('/') && key !== '/') {
      const toolId = key.slice(1);
      if (typeof value === 'object' && (value as Record<string, string>)[locale] === `/${slug}`) {
        return toolId;
      }
      if (typeof value === 'string' && value === `/${slug}`) {
        return toolId;
      }
    }
  }
  return undefined;
}

export function getToolSeoContent(toolId: string, locale: string) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'tools', locale, `${toolId}.json`);
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (e) {
    // Ignore error
  }
  return null;
}
