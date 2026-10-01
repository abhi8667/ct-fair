import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
if (typeof window !== 'undefined' && window.THREE) {
  window.THREE.FBXLoader = FBXLoader;
}
