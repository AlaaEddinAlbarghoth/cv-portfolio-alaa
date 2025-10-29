#!/usr/bin/env node

/**
 * CV Ingestion Script
 * 
 * Usage: node scripts/ingest-cv.js <path-to-pdf>
 * 
 * This script would normally parse a PDF CV and update the site.json file.
 * For now, it provides instructions for manual updates.
 */

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(`
CV Ingestion Script
===================

Usage: node scripts/ingest-cv.js <path-to-pdf>

This script helps you update the portfolio content from a CV PDF.

For now, please manually update the following file:
  content/site.json

The structure follows this format:
- personal: Basic information (name, title, contact, summary)
- experience: Array of work experiences
- projects: Array of featured projects
- skills: Object with skill categories
- education: Array of education entries
- meta: SEO and metadata

You can also create an optional overrides.json file in the content folder
to override specific fields without modifying the main site.json.
  `);
  process.exit(0);
}

const pdfPath = args[0];

if (!fs.existsSync(pdfPath)) {
  console.error(`Error: File not found: ${pdfPath}`);
  process.exit(1);
}

console.log(`Processing CV: ${pdfPath}`);
console.log(`
Note: Automatic PDF parsing is not yet implemented.
Please manually update content/site.json with the information from your CV.

Future enhancements will include:
- Automatic PDF text extraction
- AI-powered content parsing
- Automatic site.json generation
`);

// Copy PDF to public/resume folder
const destPath = path.join(__dirname, '../public/resume/alaa-albarghoth-cv.pdf');
fs.copyFileSync(pdfPath, destPath);
console.log(`✓ CV copied to: public/resume/alaa-albarghoth-cv.pdf`);
