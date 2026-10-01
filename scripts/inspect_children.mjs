import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

  console.log('Object name:', object.name);
  object.children.forEach((c, idx) => {
    const box = new THREE.Box3().setFromObject(c);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);
    console.log(`Child ${idx}: Name="${c.name}", Type=${c.type}`);
    console.log(`  Size: [${size.x.toFixed(1)}, ${size.y.toFixed(1)}, ${size.z.toFixed(1)}]`);
    console.log(`  Center: [${center.x.toFixed(1)}, ${center.y.toFixed(1)}, ${center.z.toFixed(1)}]`);
  });
}

main().catch(console.error);
