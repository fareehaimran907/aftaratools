const fs = require('fs');

const file1 = fs.readFileSync('C:/Users/Ahsan/.gemini/antigravity-ide/brain/792b82f2-d5fc-4430-80ca-9131353dfeb1/.system_generated/steps/1890/content.md', 'utf8');
const file2 = fs.readFileSync('C:/Users/Ahsan/.gemini/antigravity-ide/brain/792b82f2-d5fc-4430-80ca-9131353dfeb1/.system_generated/steps/1891/content.md', 'utf8');

function extractTools(html, domain) {
    const regex = /href="([^"]+)"/g;
    let match;
    const links = new Set();
    while ((match = regex.exec(html)) !== null) {
        if (match[1].includes('/tools/') || match[1].includes('-tools')) {
            links.add(match[1]);
        }
    }
    return Array.from(links);
}

console.log("100tools.dev:");
console.log(extractTools(file1, '100tools').slice(0, 30));

console.log("\n10015.io:");
console.log(extractTools(file2, '10015').slice(0, 30));
