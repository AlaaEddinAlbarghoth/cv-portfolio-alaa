#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Copy routes-manifest files from .next to out directory after build
const copyRoutesManifests = () => {
  try {
    const nextDir = path.join(process.cwd(), '.next');
    const outDir = path.join(process.cwd(), 'out');
    
    if (!fs.existsSync(outDir)) {
      console.log('No out directory found, skipping routes-manifest copy');
      return;
    }

    const manifestsToCopy = [
      'routes-manifest.json',
      'app-path-routes-manifest.json'
    ];

    manifestsToCopy.forEach(manifest => {
      const sourcePath = path.join(nextDir, manifest);
      const destPath = path.join(outDir, manifest);
      
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied ${manifest} to out directory`);
      } else {
        console.log(`Warning: ${manifest} not found in .next directory`);
      }
    });
  } catch (error) {
    console.error('Error copying routes-manifest files:', error);
    process.exit(1);
  }
};

copyRoutesManifests();
