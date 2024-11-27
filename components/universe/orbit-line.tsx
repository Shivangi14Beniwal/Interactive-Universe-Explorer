"use client";

import { Line } from "@react-three/drei";
import * as THREE from "three";

interface OrbitLineProps {
  radius: number;
}

export function OrbitLine({ radius }: OrbitLineProps) {
  const points = Array.from({ length: 65 }, (_, i) => {
    const theta = (i / 64) * Math.PI * 2;
    return new THREE.Vector3(radius * Math.cos(theta), 0, radius * Math.sin(theta));
  });

  return (
    <Line
      points={points}
      color="#ffffff"
      opacity={0.25}
      transparent
      lineWidth={1}
    />
  );
}
