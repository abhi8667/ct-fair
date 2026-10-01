import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';

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

  let tall = null;
  object.traverse(c => {
    if (c.name === 'Cube303') tall = c;
  });

  if (!tall) {
    console.error('Cube303 not found!');
    return;
  }

  console.log('Applying matrixWorld to orient temple upright...');
  object.updateMatrixWorld(true);
  const rawGeo = tall.geometry.clone();
  rawGeo.applyMatrix4(tall.matrixWorld);

  console.log('Merging vertices...');
  const geo = BufferGeometryUtils.mergeVertices(rawGeo, 0.001);
  geo.computeBoundingBox();

  const b0 = geo.boundingBox;
  const centerX = (b0.min.x + b0.max.x) / 2;
  const centerZ = (b0.min.z + b0.max.z) / 2;
  const minY = b0.min.y;
  const h = b0.max.y - minY;
  const s = 14.0 / h;

  // Translate base to y=0 and center X, Z
  geo.translate(-centerX, -minY, -centerZ);
  geo.scale(s, s, s);
  geo.computeVertexNormals();

  const posAttr = geo.attributes.position;
  const norAttr = geo.attributes.normal;
  const uvAttr = geo.attributes.uv;
  const idxAttr = geo.index;

  const nPos = posAttr.count;
  const nIdx = idxAttr.count;

  console.log('Processed Temple: Vertices =', nPos, 'Indices =', nIdx);

  // Buffer Layout:
  // [0..3]: Int32(nPos)
  // [4..7]: Int32(nIdx)
  // [8..15]: Reserved (zeros)
  // Float32 position: nPos * 3 * 4 bytes
  // Float32 normal: nPos * 3 * 4 bytes
  // Float32 uv: nPos * 2 * 4 bytes
  // Uint32 index: nIdx * 4 bytes
  const headerBytes = 16;
  const posBytes = nPos * 3 * 4;
  const norBytes = nPos * 3 * 4;
  const uvBytes = nPos * 2 * 4;
  const idxBytes = nIdx * 4;
  const totalBytes = headerBytes + posBytes + norBytes + uvBytes + idxBytes;

  const outBuffer = Buffer.alloc(totalBytes);
  outBuffer.writeInt32LE(nPos, 0);
  outBuffer.writeInt32LE(nIdx, 4);

  let offset = headerBytes;
  // Copy positions
  const posArr = new Uint8Array(posAttr.array.buffer, posAttr.array.byteOffset, posBytes);
  outBuffer.set(posArr, offset);
  offset += posBytes;

  // Copy normals
  const norArr = new Uint8Array(norAttr.array.buffer, norAttr.array.byteOffset, norBytes);
  outBuffer.set(norArr, offset);
  offset += norBytes;

  // Copy uvs
  const uvArr = new Uint8Array(uvAttr.array.buffer, uvAttr.array.byteOffset, uvBytes);
  outBuffer.set(uvArr, offset);
  offset += uvBytes;

  // Copy indices
  const idxArr = new Uint8Array(idxAttr.array.buffer, idxAttr.array.byteOffset, idxBytes);
  outBuffer.set(idxArr, offset);
  offset += idxBytes;

  const outPath = path.resolve(__dirname, '../public/models/temples/temple_mesh.bin');
  fs.writeFileSync(outPath, outBuffer);
  console.log('Saved packed binary to:', outPath);
  console.log('Size (MB):', (fs.statSync(outPath).size / 1024 / 1024).toFixed(2));
}

main().catch(console.error);
