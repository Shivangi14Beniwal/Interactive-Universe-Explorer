"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Preload } from "@react-three/drei";
import { SolarSystem } from "./solar-system";
import { Suspense } from "react";
import { Loading } from "@/components/ui/loading";

export function UniverseScene() {
  return (
    <div className="w-full h-screen bg-black relative">
      <Canvas
        camera={{
          position: [0, 20, 35],
          fov: 60,
        }}
        dpr={[1, 2]}
        gl={{ antialias: true }}
      >
        <Suspense fallback={<Loading />}>
          <ambientLight intensity={0.3} />
          <pointLight position={[0, 0, 0]} intensity={2} />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />
          <OrbitControls
            enablePan
            enableZoom
            enableRotate
            minDistance={10}
            maxDistance={100}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <SolarSystem />
          <Preload all />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-4 text-white/60 text-sm">
        Use mouse to orbit • Scroll to zoom
      </div>
    </div>
  );
}
