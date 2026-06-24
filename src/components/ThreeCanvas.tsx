'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points in a sphere
function generateSphereParticles(count: number, radius: number) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = radius * Math.cbrt(Math.random());
    
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

function ParticleNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const [positions] = useState(() => generateSphereParticles(180, 2.5));
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      // Gentle orbital rotation
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;

      // Parallax hover reaction
      pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, mouse.current.x * 0.4, 0.05);
      pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, mouse.current.y * 0.4, 0.05);
    }
  });

  return (
    <group>
      {/* Abstract Blue Wireframe Ring */}
      <mesh rotation={[0.5, 0.5, 0]}>
        <torusGeometry args={[2.0, 0.008, 16, 100]} />
        <meshBasicMaterial color="#D4AF37" opacity={0.15} transparent />
      </mesh>
      <mesh rotation={[-0.5, 1.2, 0.5]}>
        <torusGeometry args={[1.7, 0.005, 16, 100]} />
        <meshBasicMaterial color="#EFBF04" opacity={0.12} transparent />
      </mesh>
      
      {/* Floating Particles */}
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#D4AF37"
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

export default function ThreeCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Beautiful SVG/CSS fallback representing enterprise architecture
    return (
      <div className="w-full h-full flex items-center justify-center relative bg-transparent overflow-hidden">
        <svg className="w-full h-full max-w-[500px] max-h-[500px]" viewBox="0 0 100 100">
          <defs>
            <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="30" fill="url(#goldGlow)" />
          {/* Outer ring */}
          <circle cx="50" cy="50" r="25" fill="none" stroke="#D4AF37" strokeWidth="0.15" strokeDasharray="1,2" className="animate-[spin_40s_linear_infinite]" style={{ transformOrigin: '50px 50px' }} />
          {/* Inner ring */}
          <circle cx="50" cy="50" r="18" fill="none" stroke="#EFBF04" strokeWidth="0.1" className="animate-[spin_25s_linear_infinite_reverse]" style={{ transformOrigin: '50px 50px' }} />
          {/* Connection Lines */}
          <line x1="28" y1="35" x2="50" y2="18" stroke="#D4AF37" strokeWidth="0.08" strokeOpacity="0.3" />
          <line x1="50" y1="18" x2="72" y2="35" stroke="#D4AF37" strokeWidth="0.08" strokeOpacity="0.3" />
          <line x1="72" y1="35" x2="68" y2="65" stroke="#D4AF37" strokeWidth="0.08" strokeOpacity="0.3" />
          <line x1="68" y1="65" x2="32" y2="65" stroke="#D4AF37" strokeWidth="0.08" strokeOpacity="0.3" />
          <line x1="32" y1="65" x2="28" y2="35" stroke="#D4AF37" strokeWidth="0.08" strokeOpacity="0.3" />
          <line x1="50" y1="18" x2="50" y2="82" stroke="#EFBF04" strokeWidth="0.05" strokeOpacity="0.2" />
          {/* Core Nodes */}
          <circle cx="50" cy="18" r="1.5" fill="#D4AF37" className="animate-[pulse_3s_ease-in-out_infinite]" />
          <circle cx="72" cy="35" r="1" fill="#EFBF04" />
          <circle cx="68" cy="65" r="1.5" fill="#D4AF37" />
          <circle cx="32" cy="65" r="1" fill="#EFBF04" />
          <circle cx="28" cy="35" r="1.5" fill="#D4AF37" />
          <circle cx="50" cy="50" r="2.5" fill="#D4AF37" className="animate-[pulse_2s_ease-in-out_infinite]" />
        </svg>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 2, 5]} intensity={2} color="#FFFFFF" />
        <ParticleNetwork />
      </Canvas>
      
      {/* Floating UI Badges */}
      <div className="absolute top-1/4 left-10 p-3 rounded-lg glass-panel text-[11px] font-sans font-medium tracking-wider uppercase flex items-center space-x-2 animate-float border border-gold/10">
        <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
        <span>SAP ERP Architecture</span>
      </div>
      <div className="absolute bottom-1/4 right-10 p-3 rounded-lg glass-panel text-[11px] font-sans font-medium tracking-wider uppercase flex items-center space-x-2 animate-float border border-gold/10" style={{ animationDelay: '2s' }}>
        <span className="w-2 h-2 rounded-full bg-slate-dark" />
        <span>Digital Transformation</span>
      </div>
    </div>
  );
}
