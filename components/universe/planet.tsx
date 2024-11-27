"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";
import type { Planet as PlanetType } from "@/lib/constants/planets";

interface PlanetProps {
  planet: PlanetType;
  onClick: (name: string) => void;
}

export function Planet({ planet, onClick }: PlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (planetRef.current) planetRef.current.rotation.y += delta * planet.rotationSpeed;
    if (orbitRef.current) orbitRef.current.rotation.y += delta * planet.orbitSpeed;
  });

  return (
    <group ref={orbitRef}>
      <group position={planet.position}>
        <Sphere
          ref={planetRef}
          args={[planet.radius, 32, 32]}
          onClick={() => onClick(planet.name)}
        >
          <meshStandardMaterial
            color={planet.color}
            metalness={0.5}
            roughness={0.6}
          />
        </Sphere>
      </group>
    </group>
  );
}
