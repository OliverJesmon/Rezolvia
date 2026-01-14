// GLBViewer.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function GLBViewer({ modelPath = '/Model/cpu.glb' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- Scene ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x313647);

    // 📏 Use container size for camera aspect
    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 2, 2); // closer since space is limited

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(2, 2, 3);
    scene.add(dirLight);

    // --- Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.enablePan = false; // optional: disable panning for small areas

    // --- Load Model ---
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        scene.add(gltf.scene);

        // 🔍 Auto-center & scale model to fit view
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());

        // Center the model
        gltf.scene.position.x -= center.x;
        gltf.scene.position.y -= center.y;
        gltf.scene.position.z -= center.z;

        // Scale to fit
        const maxDim = Math.max(size.x, size.y, size.z);
        const fitHeight = 1.5; // adjust based on desired size
        const scale = fitHeight / maxDim;
        gltf.scene.scale.set(scale, scale, scale);
      },
      undefined,
      (error) => console.error('Error loading model:', error)
    );

    // --- Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    // Use ResizeObserver for container-aware resizing (better than window!)
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // --- Animation Loop ---
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // --- Cleanup ---
    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      controls.dispose();
      renderer.dispose();
    };
  }, [modelPath]);

  // 💡 Critical: Set explicit size on container via parent styles
  return <div ref={mountRef} style={{
  width: '300px',
  height: '300px',
 
  overflow: 'hidden'}} />;
}