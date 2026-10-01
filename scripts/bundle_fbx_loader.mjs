import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as esbuild from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function bundle() {
  const fbxSourcePath = path.resolve(__dirname, '../node_modules/three/examples/jsm/loaders/FBXLoader.js');
  let source = fs.readFileSync(fbxSourcePath, 'utf8');

  // Replace import from 'three' with destructuring from window.THREE
  const threeImportRegex = /import\s*\{([\s\S]*?)\}\s*from\s*['"]three['"];/;
  const match = source.match(threeImportRegex);
  if (match) {
    const symbols = match[1];
    const replacement = `const {${symbols}} = (typeof window !== 'undefined' ? window.THREE : global.THREE);`;
    source = source.replace(threeImportRegex, replacement);
  }

  // Replace relative fflate import with package import
  source = source.replace("from '../libs/fflate.module.js'", "from 'fflate'");
  source = source.replace("from '../curves/NURBSCurve.js'", "from 'three/examples/jsm/curves/NURBSCurve.js'");

  // Add assignment to window.THREE
  source += `\nif (typeof window !== 'undefined' && window.THREE) {\n  window.THREE.FBXLoader = FBXLoader;\n}\n`;

  const tempEntry = path.resolve(__dirname, 'temp_fbx.js');
  fs.writeFileSync(tempEntry, source, 'utf8');

  const outPath = path.resolve(__dirname, '../public/models/temples/FBXLoader.bundle.js');

  await esbuild.build({
    entryPoints: [tempEntry],
    bundle: true,
    outfile: outPath,
    format: 'iife',
    platform: 'browser',
    minify: false,
    external: ['three']
  });

  fs.unlinkSync(tempEntry);
  console.log('Successfully bundled standalone FBXLoader to:', outPath);
  console.log('Bundle size (KB):', (fs.statSync(outPath).size / 1024).toFixed(1));
}

bundle().catch(console.error);
