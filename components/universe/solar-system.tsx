"use client";

import { Planet } from "./planet";
import { Sun } from "./sun";
import { OrbitLine } from "./orbit-line";
import { planets } from "@/lib/constants/planets";
import { InfoPanel } from "@/components/ui/info-panel";
import { Html } from "@react-three/drei";
import { usePlanetInteraction } from "@/lib/hooks/use-planet-interaction";

export function SolarSystem() {
  const { selectedPlanet, handlePlanetClick, handleCloseInfo } = usePlanetInteraction();
  const selectedPlanetData = planets.find((planet) => planet.name === selectedPlanet);

  return (
    <>
      {/* Sun */}
      <Sun />

      {/* Planets and Orbits */}
      {planets.map((planet) => (
        <group key={planet.name}>
          <OrbitLine radius={planet.orbitRadius} />
          <Planet
            planet={planet}
            onClick={handlePlanetClick}
          />
        </group>
      ))}

      {/* Info Panel for Selected Planet */}
      {selectedPlanet && selectedPlanetData && (
        <Html center>
          <InfoPanel
            planetName={selectedPlanetData.name}
            description={selectedPlanetData.description}
            onClose={handleCloseInfo}
          />
        </Html>
      )}
    </>
  );
}
