"use client";

import { UniverseScene } from "@/components/universe/scene";
import { Controls } from "@/components/ui/controls";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <UniverseScene />

      {/* Header UI */}
      <div className="absolute top-0 left-0 w-full p-6 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Universe Explorer 3D
          </h1>
          <p className="text-gray-300 max-w-md text-lg">
            Embark on an immersive journey through space. Explore planets, stars, 
            and the mysteries of our cosmos.
          </p>
        </div>
      </div>

      {/* Controls Component */}
      <Controls onStartTour={() => console.log("Starting tour...")} />
    </main>
  );
}
