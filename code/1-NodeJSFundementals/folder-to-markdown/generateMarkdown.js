#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { program } = require('commander');

// Set up command-line options
program
  .version('1.0.0')
  .description('Generate a Markdown file from a folder structure.')
  .option('-p, --path <folderPath>', 'Path to the folder')
  .option('-o, --output <outputFile>', 'Output Markdown file', 'output.md')
  .parse(process.argv);

const options = program.opts();

if (!options.path) {
  console.error('Error: Please specify a folder path using the -p or --path option.');
  process.exit(1);
}

// Function to generate Markdown content
function generateMarkdown(folderPath, indentLevel = 0) {
  let markdownContent = '';

  // Get the folder name
  const folderName = path.basename(folderPath);

  // Add title or subtitle based on indent level
  const hashes = '#'.repeat(indentLevel + 1);
  markdownContent += `${hashes} ${folderName}\n\n`;

  // Read the contents of the folder
  let items = fs.readdirSync(folderPath);

  // Exclude specific folders
  const excludeFolders = ['.git', 'node_modules'];
  items = items.filter(item => !excludeFolders.includes(item));

  // Create a collator with numeric sorting enabled
  const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

  // Sort items using the collator
  items = items.sort((a, b) => collator.compare(a, b));

  // Exclude specific file extensions
  const includeExtensions = ['.mp4']; // Only include .mp4 files

  items.forEach(item => {
    const itemPath = path.join(folderPath, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory()) {
      // Recursively process subfolders
      markdownContent += generateMarkdown(itemPath, indentLevel + 1);
    } else if (stats.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (includeExtensions.includes(ext)) {
        // Use heading for files
        const fileHashes = '#'.repeat(indentLevel + 2); // Increase heading level for files
        const fileName = path.basename(item); // Include the file name with extension
        markdownContent += `${fileHashes} ${fileName}\n\n`;
      }
    }
  });

  // No need to add extra newline here

  return markdownContent;
}

// Generate the Markdown content
const markdown = generateMarkdown(options.path);

// Write the Markdown content to the output file
fs.writeFileSync(options.output, markdown);

console.log(`Markdown file generated: ${options.output}`);
