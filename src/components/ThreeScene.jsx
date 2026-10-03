import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';

export default function ThreeScene({
  activeMode = 'titanium',
  onSceneReady,
  interactiveShowcase = false
}) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const objectsRef = useRef({});
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isDown: false, prevX: 0, prevY: 0 });
  const scrollRef = useRef({ current: 0, target: 0 });
  const reqIdRef = useRef(null);

  const [stats, setStats] = useState({ fps: 60, polyCount: '18.4K', activeShader: 'PBR Physical' });

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        stencil: false
      });
    } catch {
      console.warn('WebGL initialization failed');
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(2.2, 0.4, 6.5);
    cameraRef.current = camera;

    // Group holding the XYZ core artifact
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);
    objectsRef.current.masterGroup = masterGroup;

    // 1. Central Core: Faceted futuristic hyper-structure (Icosahedron / Octahedron combo)
    const coreGeo = new THREE.IcosahedronGeometry(1.35, 1);
    
    // Titanium / Obsidian Physical Material
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x12151c,
      roughness: 0.18,
      metalness: 0.92,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
      reflectivity: 0.85,
      flatShading: true,
      wireframe: false
    });

    const coreMesh = new THREE.Mesh(coreGeo, coreMaterial);
    coreMesh.castShadow = true;
    coreMesh.receiveShadow = true;
    masterGroup.add(coreMesh);
    objectsRef.current.coreMesh = coreMesh;
    objectsRef.current.coreMaterial = coreMaterial;

    // 2. Inner Glowing Energy Core
    const innerGeo = new THREE.SphereGeometry(0.7, 32, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    masterGroup.add(innerMesh);
    objectsRef.current.innerMesh = innerMesh;
    objectsRef.current.innerMat = innerMat;

    // 3. Gyroscopic Orbital Rings with micro-notches
    const ringsGroup = new THREE.Group();
    masterGroup.add(ringsGroup);
    objectsRef.current.ringsGroup = ringsGroup;

    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.25,
      metalness: 0.9,
      side: THREE.DoubleSide
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.0, 0.022, 16, 100), ringMat);
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.35, 0.016, 16, 100), ringMat);
    const ring3 = new THREE.Mesh(new THREE.TorusGeometry(2.7, 0.012, 16, 100), ringMat);

    ring1.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    ring3.rotation.z = Math.PI / 6;

    ringsGroup.add(ring1);
    ringsGroup.add(ring2);
    ringsGroup.add(ring3);
    objectsRef.current.rings = [ring1, ring2, ring3];

    // 4. Subtle Outer Geometric Cage (floating brackets / futuristic corner markers)
    const cageGeo = new THREE.BoxGeometry(3.2, 3.2, 3.2);
    const cageMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.12
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    masterGroup.add(cageMesh);
    objectsRef.current.cageMesh = cageMesh;

    // 5. Surrounding Quantum Dust / Starfield Particles
    const particleCount = 1400;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x00f2fe);
    const c2 = new THREE.Color(0xa855f7);
    const c3 = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      // Distribute in a spherical halo
      const r = 3.0 + Math.random() * 12.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);

      const mixC = Math.random() > 0.5 ? c1 : (Math.random() > 0.5 ? c2 : c3);
      particleColors[i * 3] = mixC.r;
      particleColors[i * 3 + 1] = mixC.g;
      particleColors[i * 3 + 2] = mixC.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    objectsRef.current.particles = particles;

    // 6. Neural Constellation Network (connecting floating satellite nodes)
    const nodeCount = 14;
    const nodePositions = [];
    const nodeGroup = new THREE.Group();
    masterGroup.add(nodeGroup);
    objectsRef.current.nodeGroup = nodeGroup;

    for (let i = 0; i < nodeCount; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 4.5,
        (Math.random() - 0.5) * 4.5,
        (Math.random() - 0.5) * 4.5
      );
      nodePositions.push(pos);

      const nodeGeom = new THREE.SphereGeometry(0.04, 12, 12);
      const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
      const node = new THREE.Mesh(nodeGeom, nodeMaterial);
      node.position.copy(pos);
      nodeGroup.add(node);
    }

    // Connect some nodes with subtle glowing lines
    const lineIndices = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < 2.5) {
          lineIndices.push(nodePositions[i], nodePositions[j]);
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry().setFromPoints(lineIndices);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.15
    });
    const nodeLines = new THREE.LineSegments(lineGeo, lineMat);
    nodeGroup.add(nodeLines);

    // 7. Lighting Setup: High-end Cinematic Lighting
    const ambientLight = new THREE.AmbientLight(0x0a0e17, 1.8);
    scene.add(ambientLight);

    // Dynamic mouse-tracking interactive light
    const cursorPointLight = new THREE.PointLight(0x00f2fe, 3.2, 14);
    cursorPointLight.position.set(3, 2, 4);
    scene.add(cursorPointLight);
    objectsRef.current.cursorPointLight = cursorPointLight;

    // Back rim light (luminescent violet)
    const rimLight = new THREE.DirectionalLight(0xa855f7, 2.4);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    // Key light (crisp titanium white/ice cyan)
    const keyLight = new THREE.DirectionalLight(0xe0f2fe, 2.2);
    keyLight.position.set(5, 6, 6);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Bottom subtle warm reflection
    const bounceLight = new THREE.PointLight(0x38bdf8, 1.2, 8);
    bounceLight.position.set(0, -3.5, 2);
    scene.add(bounceLight);

    // Event Listeners: Mouse Move & Parallax
    const handleMouseMove = (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = normX;
      mouseRef.current.targetY = normY;

      if (mouseRef.current.isDown) {
        const deltaX = e.clientX - mouseRef.current.prevX;
        const deltaY = e.clientY - mouseRef.current.prevY;
        masterGroup.rotation.y += deltaX * 0.005;
        masterGroup.rotation.x += deltaY * 0.005;
        mouseRef.current.prevX = e.clientX;
        mouseRef.current.prevY = e.clientY;
      }
    };

    const handleMouseDown = (e) => {
      mouseRef.current.isDown = true;
      mouseRef.current.prevX = e.clientX;
      mouseRef.current.prevY = e.clientY;
    };

    const handleMouseUp = () => {
      mouseRef.current.isDown = false;
    };

    // Scroll tracking
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      scrollRef.current.target = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    };

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    handleScroll();

    // Notify parent ready
    if (onSceneReady) {
      onSceneReady();
    }

    // Animation Loop
    let clock = new THREE.Clock();
    let frameCounter = 0;
    let lastFpsUpdate = 0;

    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // FPS calculation every 500ms
      frameCounter++;
      if (elapsedTime - lastFpsUpdate > 0.5) {
        const currentFps = Math.round(frameCounter / (elapsedTime - lastFpsUpdate));
        setStats(prev => ({ ...prev, fps: currentFps }));
        frameCounter = 0;
        lastFpsUpdate = elapsedTime;
      }

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.06;

      // Smooth scroll interpolation
      scrollRef.current.current += (scrollRef.current.target - scrollRef.current.current) * 0.05;
      const scrollProgress = scrollRef.current.current; // 0 to 1

      // 1. Dynamic Camera Choreography along Scroll Path
      // Hero (0.0): Right aligned, looking at artifact
      // About (0.18): Centered closer, architectural perspective
      // Capabilities (0.38): Left shifted, allowing right-panel focus
      // Showcase (0.58): Close dramatic central angle
      // Work (0.78): Zoomed slightly out, top-angle perspective
      // Philosophy & Contact (0.95 - 1.0): Deep centered upward perspective

      let targetCamX = 2.2;
      let targetCamY = 0.4;
      let targetCamZ = 6.5;

      let targetObjX = 1.0;
      let targetObjY = 0.0;
      let targetObjZ = 0.0;

      if (scrollProgress < 0.15) {
        // Hero
        const t = scrollProgress / 0.15;
        targetCamX = THREE.MathUtils.lerp(2.2, 0.0, t);
        targetCamY = THREE.MathUtils.lerp(0.4, 0.2, t);
        targetCamZ = THREE.MathUtils.lerp(6.5, 5.6, t);
        targetObjX = THREE.MathUtils.lerp(1.2, 0.0, t);
      } else if (scrollProgress < 0.35) {
        // About section
        const t = (scrollProgress - 0.15) / 0.2;
        targetCamX = THREE.MathUtils.lerp(0.0, -1.8, t);
        targetCamY = THREE.MathUtils.lerp(0.2, -0.1, t);
        targetCamZ = THREE.MathUtils.lerp(5.6, 6.0, t);
        targetObjX = THREE.MathUtils.lerp(0.0, -0.8, t);
      } else if (scrollProgress < 0.55) {
        // Capabilities
        const t = (scrollProgress - 0.35) / 0.2;
        targetCamX = THREE.MathUtils.lerp(-1.8, 0.0, t);
        targetCamY = THREE.MathUtils.lerp(-0.1, 0.4, t);
        targetCamZ = THREE.MathUtils.lerp(6.0, 5.2, t);
        targetObjX = THREE.MathUtils.lerp(-0.8, 0.0, t);
      } else if (scrollProgress < 0.75) {
        // 3D Showcase (Major visual focus)
        const t = (scrollProgress - 0.55) / 0.2;
        targetCamX = THREE.MathUtils.lerp(0.0, 1.4, t);
        targetCamY = THREE.MathUtils.lerp(0.4, 0.8, t);
        targetCamZ = THREE.MathUtils.lerp(5.2, 6.8, t);
        targetObjX = THREE.MathUtils.lerp(0.0, 0.7, t);
      } else {
        // Philosophy & Contact
        const t = (scrollProgress - 0.75) / 0.25;
        targetCamX = THREE.MathUtils.lerp(1.4, 0.0, t);
        targetCamY = THREE.MathUtils.lerp(0.8, -0.3, t);
        targetCamZ = THREE.MathUtils.lerp(6.8, 6.0, t);
        targetObjX = THREE.MathUtils.lerp(0.7, 0.0, t);
      }

      // Parallax mouse offset
      camera.position.x += (targetCamX + mouseRef.current.x * 0.45 - camera.position.x) * 0.06;
      camera.position.y += (targetCamY + mouseRef.current.y * 0.35 - camera.position.y) * 0.06;
      camera.position.z += (targetCamZ - camera.position.z) * 0.06;
      camera.lookAt(targetObjX * 0.5, targetObjY, 0);

      // Move master group with scroll
      masterGroup.position.x += (targetObjX - masterGroup.position.x) * 0.06;
      masterGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.12;

      // 2. Object Rotations & Dynamics
      if (!mouseRef.current.isDown) {
        coreMesh.rotation.y += 0.006;
        coreMesh.rotation.x = Math.sin(elapsedTime * 0.5) * 0.15;

        ring1.rotation.x += 0.008;
        ring1.rotation.y += 0.004;

        ring2.rotation.y += 0.01;
        ring2.rotation.z += 0.006;

        ring3.rotation.z -= 0.009;
        ring3.rotation.x += 0.005;

        cageMesh.rotation.y -= 0.003;
        cageMesh.rotation.x -= 0.002;
        nodeGroup.rotation.y += 0.004;
      }

      // Pulsing energy core
      const pulse = 1.0 + Math.sin(elapsedTime * 2.4) * 0.12;
      innerMesh.scale.set(pulse, pulse, pulse);

      // Particles slow drift
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = Math.sin(elapsedTime * 0.015) * 0.1;

      // Interactive cursor light
      cursorPointLight.position.x = mouseRef.current.x * 5.0;
      cursorPointLight.position.y = mouseRef.current.y * 3.5;
      cursorPointLight.position.z = 3.5 + Math.sin(elapsedTime) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update Visual Mode according to user choice in Showcase
  useEffect(() => {
    const { coreMesh, coreMaterial, innerMesh, innerMat, cageMesh } = objectsRef.current;
    if (!coreMesh || !coreMaterial || !innerMesh || !innerMat || !cageMesh) return;

    if (activeMode === 'titanium') {
      coreMaterial.wireframe = false;
      coreMaterial.color.setHex(0x12151c);
      coreMaterial.metalness = 0.92;
      coreMaterial.roughness = 0.18;
      innerMat.opacity = 0.35;
      innerMat.color.setHex(0x00f2fe);
      cageMesh.visible = true;
      setStats(prev => ({ ...prev, activeShader: 'Titanium PBR Physical' }));
    } else if (activeMode === 'quantum') {
      coreMaterial.wireframe = false;
      coreMaterial.color.setHex(0x021329);
      coreMaterial.metalness = 0.5;
      coreMaterial.roughness = 0.1;
      innerMat.opacity = 0.85;
      innerMat.color.setHex(0x38bdf8);
      cageMesh.visible = true;
      setStats(prev => ({ ...prev, activeShader: 'Quantum Luminescent' }));
    } else if (activeMode === 'wireframe') {
      coreMaterial.wireframe = true;
      coreMaterial.color.setHex(0x00f2fe);
      innerMat.opacity = 0.7;
      innerMat.color.setHex(0xa855f7);
      cageMesh.visible = true;
      setStats(prev => ({ ...prev, activeShader: 'Laser Holographic Wireframe' }));
    } else if (activeMode === 'neural') {
      coreMaterial.wireframe = false;
      coreMaterial.color.setHex(0x1c102a);
      coreMaterial.metalness = 0.95;
      coreMaterial.roughness = 0.3;
      innerMat.opacity = 0.9;
      innerMat.color.setHex(0xd946ef);
      cageMesh.visible = false;
      setStats(prev => ({ ...prev, activeShader: 'Neural Synapse Grid' }));
    }
  }, [activeMode]);

  return (
    <div
      ref={mountRef}
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 ${
        interactiveShowcase ? 'pointer-events-auto cursor-grab active:cursor-grabbing' : ''
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        overflow: 'hidden'
      }}
    >
      {/* Real-time Render Telemetry Overlay for futuristic aesthetic */}
      <div className="webgl-render-telemetry">
        <span className="telemetry-fps-dot"></span>
        <span className="telemetry-stat-text">{stats.fps} FPS</span>
        <span className="telemetry-sep">/</span>
        <span className="telemetry-stat-text">GL: {stats.polyCount}</span>
        <span className="telemetry-sep">/</span>
        <span className="telemetry-shader-name">{stats.activeShader}</span>
      </div>
    </div>
  );
}
