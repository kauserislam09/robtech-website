/**
 * Development script to validate release metadata JSON files in public/update/*.json
 * Run with: node scripts/validate-releases.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const updateDir = path.join(__dirname, '../public/update');

function validateManifest(filePath) {
  const fileName = path.basename(filePath);
  console.log(`Validating ${fileName}...`);

  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);

    if (!data.appId || !data.name || !data.latest) {
      throw new Error('Missing required root properties: appId, name, latest');
    }

    if (typeof data.latest.versionCode !== 'number' || data.latest.versionCode <= 0) {
      throw new Error(`Invalid versionCode: ${data.latest.versionCode}`);
    }

    if (data.latest.apkUrl) {
      if (!data.latest.apkUrl.startsWith('https://')) {
        throw new Error(`Insecure apkUrl (must start with https://): ${data.latest.apkUrl}`);
      }
    }

    if (data.latest.releasePageUrl) {
      if (!data.latest.releasePageUrl.startsWith('https://')) {
        throw new Error(`Insecure releasePageUrl (must start with https://): ${data.latest.releasePageUrl}`);
      }
    }

    if (!data.releaseNotes || !Array.isArray(data.releaseNotes.en)) {
      throw new Error('Missing or invalid releaseNotes.en array');
    }

    console.log(`  ✓ ${fileName} is VALID.`);
    return true;
  } catch (err) {
    console.error(`  ✗ ${fileName} FAILED validation: ${err.message}`);
    return false;
  }
}

function runValidation() {
  if (!fs.existsSync(updateDir)) {
    console.error(`Directory not found: ${updateDir}`);
    process.exit(1);
  }

  const files = fs.readdirSync(updateDir).filter((f) => f.endsWith('.json'));
  let totalValid = 0;

  for (const file of files) {
    if (validateManifest(path.join(updateDir, file))) {
      totalValid++;
    }
  }

  console.log(`\nValidation complete: ${totalValid}/${files.length} release JSON files passed.`);
}

runValidation();
