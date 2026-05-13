// src/components/DnaCanvas.jsx
// Premium Glassy DNA Helix
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Cylinder, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const DNA_LENGTH = 40;
const RADIUS = 1.8;
const HEIGHT_SPACING = 0.35;
const TWIST = Math.PI * 0.12;

function RealisticDNA() {
  const groupRef = useRef();

  const dnaData = useMemo(() => {
    const bases = [];
    for (let i = 0; i < DNA_LENGTH; i++) {
      const y = (i - DNA_LENGTH / 2) * HEIGHT_SPACING;
      const angle1 = i * TWIST;
      const angle2 = angle1 + Math.PI;

      const p1 = new THREE.Vector3(Math.cos(angle1) * RADIUS, y, Math.sin(angle1) * RADIUS);
      const p2 = new THREE.Vector3(Math.cos(angle2) * RADIUS, y, Math.sin(angle2) * RADIUS);
      
      const isAT = Math.random() > 0.5;
      const color1 = isAT ? '#0ea5e9' : '#10b981';
      const color2 = isAT ? '#06b6d4' : '#14b8a6';

      bases.push({ p1, p2, color1, color2, index: i });
    }
    return bases;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.4;
    }
  });

  // Reusable Premium Glass Material
  const GlassMaterial = ({ color }) => (
    <meshPhysicalMaterial 
      color={color}
      metalness={0.5}
      roughness={0.1}
      transparent={true}
      opacity={0.8}
      ior={1.5}          // Index of refraction (still affects reflections)
      clearcoat={1}      // Shiny coat
      clearcoatRoughness={0.1}
    />
  );

  return (
    <group ref={groupRef}>
      {dnaData.map((base, i) => {
        const distance = base.p1.distanceTo(base.p2);
        const midPoint = base.p1.clone().lerp(base.p2, 0.5);
        
        const direction = base.p2.clone().sub(base.p1).normalize();
        const up = new THREE.Vector3(0, 1, 0);
        const quaternion = new THREE.Quaternion();
        if (Math.abs(direction.dot(up)) < 0.999) {
          quaternion.setFromUnitVectors(up, direction);
        } else {
          quaternion.setFromUnitVectors(up, new THREE.Vector3(1, 0, 0));
        }

        return (
          <group key={i}>
            {/* Backbone Glass Spheres */}
            <Sphere args={[0.2, 32, 32]} position={base.p1}>
              <GlassMaterial color={base.color1} />
            </Sphere>
            <Sphere args={[0.2, 32, 32]} position={base.p2}>
              <GlassMaterial color={base.color2} />
            </Sphere>

            {/* Glowing Base Pairs */}
            <group position={midPoint} quaternion={quaternion}>
              <Cylinder args={[0.04, 0.04, distance / 2, 16]} position={[0, -distance / 4, 0]}>
                <meshStandardMaterial color={base.color1} emissive={base.color1} emissiveIntensity={0.8} />
              </Cylinder>
              <Cylinder args={[0.04, 0.04, distance / 2, 16]} position={[0, distance / 4, 0]}>
                <meshStandardMaterial color={base.color2} emissive={base.color2} emissiveIntensity={0.8} />
              </Cylinder>
            </group>
          </group>
        );
      })}

      {/* Backbone Connections */}
      {dnaData.slice(0, -1).map((base, i) => {
        const nextBase = dnaData[i + 1];
        
        const drawLine = (pA, pB, color) => {
          const dist = pA.distanceTo(pB);
          const mid = pA.clone().lerp(pB, 0.5);
          const dir = pB.clone().sub(pA).normalize();
          const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
          
          return (
            <Cylinder args={[0.06, 0.06, dist, 16]} position={mid} quaternion={q}>
              <GlassMaterial color={color} />
            </Cylinder>
          );
        };

        return (
          <group key={`backbone-${i}`}>
            {drawLine(base.p1, nextBase.p1, '#ffffff')}
            {drawLine(base.p2, nextBase.p2, '#ffffff')}
          </group>
        );
      })}
    </group>
  );
}

export default function DnaCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 40 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      {/* Lights */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />
      <pointLight position={[-10, 5, -5]} intensity={2} color="#0ea5e9" />
      <pointLight position={[10, -5, 5]} intensity={2} color="#10b981" />
      
      <RealisticDNA />

      {/* Subtle floating particles */}
      <Sparkles count={100} scale={15} size={1.5} speed={0.2} color="#0ea5e9" opacity={0.28} />
    </Canvas>
  );
}
