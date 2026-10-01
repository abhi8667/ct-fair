import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// DOM mocks
global.document = {
  createElementNS: () => ({ src: '', addEventListener: () => {}, removeEventListener: () => {}, setAttribute: () => {}, style: {} }),
  createElement: () => ({ width: 1, height: 1, getContext: () => null })
};
global.window = global;

async function main() {
  const fbxPath = path.resolve(__dirname, '../public/models/temples/temples.fbx');
  const buffer = fs.readFileSync(fbxPath);
  const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);

  const loader = new FBXLoader();
  const object = loader.parse(arrayBuffer, path.dirname(fbxPath));

  object.traverse(child => {
    if (child.isMesh) {
      console.log('Mesh:', child.name);
      const mats = Array.isArray(child.material) ? child.material : [child.material];
      mats.forEach((m, i) => {
        console.log(`  Mat ${i}: Name="${m.name}", Type=${m.type}`);
        if (m.map) console.log(`    Map: ${m.map.name}`);
      });
    }
  });
}

main().catch(console.error);
