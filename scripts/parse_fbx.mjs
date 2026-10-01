import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  const fbxPath = path.resolve(__dirname, '../public/models/temples/temples.fbx');
  const buffer = fs.readFileSync(fbxPath);
  const arrayBuffer = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);

  console.log('Loading FBX with size:', arrayBuffer.byteLength);

  const loader = new FBXLoader();
  const object = loader.parse(arrayBuffer, path.dirname(fbxPath));
  console.log('FBX parsed successfully!');
  console.log('Children count:', object.children.length);

  const box = new THREE.Box3().setFromObject(object);
  const size = new THREE.Vector3();
  box.getSize(size);
  console.log('Bounding Box Min:', box.min.x.toFixed(2), box.min.y.toFixed(2), box.min.z.toFixed(2));
  console.log('Bounding Box Max:', box.max.x.toFixed(2), box.max.y.toFixed(2), box.max.z.toFixed(2));
  console.log('Size:', size.x.toFixed(2), size.y.toFixed(2), size.z.toFixed(2));

  const meshes = [];
  object.traverse((child) => {
    if (child.isMesh) {
      meshes.push({
        name: child.name,
        vertices: child.geometry.attributes.position ? child.geometry.attributes.position.count : 0,
      });
    }
  });
  console.log('Total meshes found:', meshes.length);
  console.log('Mesh samples:', meshes.slice(0, 10));
}

main().catch(console.error);
