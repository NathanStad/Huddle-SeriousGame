<template>
  <div ref="canvasContainer"></div>
  <button @click="flipModel">Retourner le modèle</button>
  <button @click="toggleDrawing">Mode Dessin: {{ isDrawing ? 'ON' : 'OFF' }}</button>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Chameleon from "./assets/chamelon"; // Assurez-vous que Chameleon.js est accessible

const canvasContainer = ref(null);
let model = null;
let isFlipped = false;
const isDrawing = ref(false);
const isRotating = ref(true);
let chameleonControls = null;

onMounted(() => {
  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  if (canvasContainer.value) {
    canvasContainer.value.appendChild(renderer.domElement);
  }

  // Add lighting
  const light = new THREE.AmbientLight(0xffffff, 1);
  scene.add(light);

  // Load GLB model
  const loader = new GLTFLoader();
  loader.load("/models/model.glb", (gltf) => {
    model = gltf.scene;
    model.scale.set(1, 1, 1);
    scene.add(model);

    // Initialiser Chameleon pour dessiner sur le modèle
    chameleonControls = Chameleon.create(model.children[0].geometry, renderer.domElement);
  });

  // Orbit Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.maxPolarAngle = Math.PI / 2;

  camera.position.set(0, 2, 5);
  controls.update();

  function animate() {
    requestAnimationFrame(animate);
    if (isRotating.value && model) {
      model.rotation.y += 0.005;
    }
    if (chameleonControls) {
      chameleonControls.update();
    }
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
});

const flipModel = () => {
  if (model) {
    model.rotation.y += Math.PI;
  }
};

const toggleDrawing = () => {
  isDrawing.value = !isDrawing.value;
  if (chameleonControls) {
    if (isDrawing.value) {
      chameleonControls.useDrawingTexture();
    } else {
      chameleonControls.useViewingTexture();
    }
  }
};
</script>

<style>
button {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px;
  background: #333;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}
</style>
