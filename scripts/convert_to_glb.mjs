import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Minimal mock for Node environment
global.document = {
  createElementNS: (ns, tag) => {
    return {
      src: '',
      addEventListener: () => {},
      removeEventListener: () => {},
      setAttribute: () => {},
      style: {}
    };
  },
  createElement: (tag) => {
    return {
      width: 1,
      height: 1,
      getContext: () => ({
        drawImage: () => {},
        getImageData: () => ({ data: new Uint8Array(4) })
      })
    };
  }
};
global.window = global;

async function main() {
  const fbxPath = path.resolve(__dirname, '../public/models/temples/temples.fbx');
  const buffer = fs.readFileSync(fbxPath);
  const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);

  console.log('Reading FBX (bytes):', arrayBuffer.byteLength);

  const loader = new FBXLoader();
  const object = loader.parse(arrayBuffer, path.dirname(fbxPath));
  console.log('Parsed FBX! Object children count:', object.children.length);

  const box = new THREE.Box3().setFromObject(object);
  const size = new THREE.Vector3();
  box.getSize(size);
  console.log('Bounding Box Size:', size.x.toFixed(2), size.y.toFixed(2), size.z.toFixed(2));
  console.log('Center:', box.getCenter(new THREE.Vector3()));

  // Export to GLB
  const exporter = new GLTFExporter();
  exporter.parse(
    object,
    (gltf) => {
      const outputPath = path.resolve(__dirname, '../public/models/temples/temples.glb');
      fs.writeFileSync(outputPath, Buffer.from(gltf));
      console.log('Successfully created GLB at:', outputPath);
      console.log('GLB size (bytes):', fs.statSync(outputPath).size);
    },
    (err) => {
      console.error('Export error:', err);
    },
    { binary: true }
  );
}

main().catch(console.error);
