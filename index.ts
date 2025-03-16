import { $ } from 'bun'; 
import { writeFile } from 'fs/promises';

(async () => {
  for (let i = 1; i < 50; i++) {
    await $`mkdir -p day${i}`;
    
    // Create README.md with content
    const readmeContent = `# Day ${i}

## Problem Description

<!-- Add problem description here -->

## Solution Approach

<!-- Add your solution approach here -->

## Notes

<!-- Add any additional notes here -->
`;
    
    await writeFile(`day${i}/README.md`, readmeContent);
  }
})()
