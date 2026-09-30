import { toolsRegistry } from '../src/lib/tools/registry';

function runAudit() {
  const tools = Object.values(toolsRegistry);
  const toolIds = new Set(tools.map(t => t.id));
  
  let toolsWithRelated = 0;
  let brokenLinks = 0;
  let selfLinks = 0;
  
  const inboundLinks = new Map<string, number>();
  tools.forEach(t => inboundLinks.set(t.id, 0));

  console.log("=== Internal Link Audit Report ===");
  console.log(`Total Tools: ${tools.length}`);

  tools.forEach(tool => {
    const related = tool.relatedToolIds || [];
    const validRelated = [];
    
    related.forEach(relatedId => {
      if (relatedId === tool.id) {
        selfLinks++;
      } else if (!toolIds.has(relatedId)) {
        brokenLinks++;
        console.log(`[BROKEN] ${tool.id} links to missing tool: ${relatedId}`);
      } else {
        validRelated.push(relatedId);
        inboundLinks.set(relatedId, (inboundLinks.get(relatedId) || 0) + 1);
      }
    });

    if (validRelated.length > 0) {
      toolsWithRelated++;
    }
    
    // Check if enough related tools
    if (validRelated.length < 4) {
      console.log(`[WARNING] ${tool.id} has only ${validRelated.length} explicit related tools.`);
    }
  });

  const orphans = Array.from(inboundLinks.entries()).filter(([id, count]) => count === 0).map(([id]) => id);
  
  console.log("\n=== Summary ===");
  console.log(`Tools with explicit Related Links: ${toolsWithRelated}`);
  console.log(`Potential Orphans (0 explicit inbound links): ${orphans.length}`);
  console.log(`Broken Internal Links: ${brokenLinks}`);
  console.log(`Self Links: ${selfLinks}`);
  
  if (orphans.length > 0) {
    console.log(`\nOrphan Tools List:`);
    orphans.slice(0, 10).forEach(id => console.log(`- ${id}`));
    if (orphans.length > 10) console.log(`...and ${orphans.length - 10} more.`);
  }
}

runAudit();
