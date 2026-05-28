"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function MemoryGraph() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const host = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, host.clientWidth / host.clientHeight, 0.1, 1000);
    camera.position.z = 9;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(host.clientWidth, host.clientHeight);
    host.appendChild(renderer.domElement);

    const nodes = Array.from({ length: 44 }, (_, i) => {
      const geometry = new THREE.SphereGeometry(i % 7 === 0 ? 0.08 : 0.045, 16, 16);
      const material = new THREE.MeshBasicMaterial({ color: i % 3 === 0 ? 0x31d7ff : i % 3 === 1 ? 0x7f5cff : 0x45f2a6 });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set((Math.random() - 0.5) * 7, (Math.random() - 0.5) * 4, (Math.random() - 0.5) * 4);
      scene.add(mesh);
      return mesh;
    });

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x31d7ff, transparent: true, opacity: 0.18 });
    for (let i = 0; i < nodes.length - 1; i += 1) {
      const geometry = new THREE.BufferGeometry().setFromPoints([nodes[i].position, nodes[(i + 5) % nodes.length].position]);
      scene.add(new THREE.Line(geometry, lineMaterial));
    }

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      scene.rotation.y += 0.0025;
      scene.rotation.x = Math.sin(Date.now() * 0.0003) * 0.08;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = host.clientWidth / host.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(host.clientWidth, host.clientHeight);
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      host.replaceChildren();
    };
  }, []);

  return (
    <section className="glass rounded-lg p-5">
      <div className="mb-3">
        <h2 className="text-lg font-semibold">Cognitive Memory Graph</h2>
        <p className="text-sm text-slate-400">Semantic, episodic, temporal, and graph memories with decay-aware promotion.</p>
      </div>
      <div ref={mountRef} className="h-72 w-full rounded-lg bg-slate-950/40 neural-grid" />
    </section>
  );
}

