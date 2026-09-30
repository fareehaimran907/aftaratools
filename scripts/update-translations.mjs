import fs from 'fs';
import path from 'path';

const messagesDir = path.join(process.cwd(), 'messages');
const files = fs.readdirSync(messagesDir);

for (const file of files) {
  if (file.endsWith('.json')) {
    const filePath = path.join(messagesDir, file);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    
    if (!content.Search) {
      content.Search = {
        placeholder: "Search tools...",
        noResults: "No tools found for \"{query}\"."
      };
      fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
      console.log(`Updated ${file}`);
    }
  }
}
