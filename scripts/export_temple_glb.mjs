// Setup DOM mocks before importing Three
global.document = {
  createElementNS: () => ({
    src: '',
    addEventListener: () => {},
    removeEventListener: () => {},
    setAttribute: () => {},
    style: {}
  }),
  createElement: () => ({
    width: 1,
    height: 1,
    getContext: () => null
  })
};
global.FileReader = class FileReader {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then((buf) => {
      this.result = buf;
      if (this.onload) this.onload({ target: this });
    });
  }
};
global.window = global;

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const fbxPath = path.resolve(__dirname, '../public/models/temples/temples.fbx');
  const buffer = fs.readFileSync(fbxPath);
  const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);

  const loader = new FBXLoader();
  const object = loader.parse(arrayBuffer, path.dirname(fbxPath));

  // Find the central tall temple: Cube303
  let tallTemple = null;
  object.traverse((child) => {
    if (child.name === 'Cube303') {
      tallTemple = child;
    }
  });

  if (!tallTemple) {
    console.error('Cube303 not found!');
    return;
  }

  console.log('Selected Temple Mesh:', tallTemple.name, 'vertices:', tallTemple.geometry.attributes.position.count);

  tallTemple.geometry.computeBoundingBox();
  const bb = tallTemple.geometry.boundingBox;
  console.log('Min:', bb.min.x, bb.min.y, bb.min.z);
  console.log('Max:', bb.max.x, bb.max.y, bb.max.z);

  const height = bb.max.y - bb.min.y;
  const targetH = 14.0;
  const scale = targetH / height;
  console.log('Scale factor:', scale);

  const geo = tallTemple.geometry.clone();
  // Strip any textures or embedded materials so GLTFExporter exports cleanly
  geo.center();
  geo.computeBoundingBox();
  // Shift so bottom is at y = 0
  const yShift = (geo.boundingBox.max.y - geo.boundingBox.min.y) / 2;
  geo.translate(0, yShift, 0);
  geo.scale(scale, scale, scale);

  geo.computeBoundingBox();
  console.log('Scaled BB Y:', geo.boundingBox.min.y, 'to', geo.boundingBox.max.y);
  console.log('Scaled BB X size:', geo.boundingBox.max.x - geo.boundingBox.min.x);
  console.log('Scaled BB Z size:', geo.boundingBox.max.z - geo.boundingBox.min.z);

  // Standard architectural material
  const mat = new THREE.MeshStandardMaterial({
    color: 0xdfd4be,
    roughness: 0.94,
    metalness: 0.05
  });
  const templeMesh = new THREE.Mesh(geo, mat);
  templeMesh.name = 'IndianTemple_TallKeep';

  const exporter = new GLTFExporter();
  try {
    const gltf = await exporter.parseAsync(templeMesh, { binary: true });
    const outputPath = path.resolve(__dirname, '../public/models/temples/temple_tall.glb');
    fs.writeFileSync(outputPath, Buffer.from(gltf));
    console.log('Successfully saved GLB to:', outputPath);
    console.log('File size:', (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2), 'MB');
  } catch (err) {
    console.error('parseAsync error:', err);
  }
}

main().catch(console.error);
