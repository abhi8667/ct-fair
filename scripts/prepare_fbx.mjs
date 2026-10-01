import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fbxSourcePath = path.resolve(__dirname, '../node_modules/three/examples/jsm/loaders/FBXLoader.js');
let source = fs.readFileSync(fbxSourcePath, 'utf8');

// Replace import from 'three' with window.THREE destructuring
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

source += `\nif (typeof window !== 'undefined' && window.THREE) {\n  window.THREE.FBXLoader = FBXLoader;\n}\n`;

fs.writeFileSync(path.resolve(__dirname, 'temp_fbx.js'), source, 'utf8');
console.log('Prepared temp_fbx.js');
