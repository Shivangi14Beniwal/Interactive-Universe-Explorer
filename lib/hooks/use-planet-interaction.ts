"use client";

import { useState } from "react";
import type { Planet } from "@/lib/constants/planets";

export function usePlanetInteraction() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

  const handlePlanetClick = (name: string) => {
    setSelectedPlanet(name);
  };

  const handleCloseInfo = () => {
    setSelectedPlanet(null);
  };

  return {
    selectedPlanet,
    handlePlanetClick,
    handleCloseInfo,
  };
}