export interface Planet {
  name: string;
  radius: number;
  position: [number, number, number];
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
  rotationSpeed: number;
  description: string;
}

export const planets: Planet[] = [
  {
    name: "Mercury",
    radius: 0.4,
    position: [3.5, 0, 0],
    color: "#A0522D",
    orbitRadius: 3.5,
    orbitSpeed: 0.48,
    rotationSpeed: 0.08,
    description: "The smallest and innermost planet in the Solar System."
  },
  {
    name: "Venus",
    radius: 0.9,
    position: [6.5, 0, 0],
    color: "#DEB887",
    orbitRadius: 6.5,
    orbitSpeed: 0.35,
    rotationSpeed: 0.07,
    description: "Often called Earth's sister planet due to their similar size."
  },
  {
    name: "Earth",
    radius: 1,
    position: [10, 0, 0],
    color: "#2E8BC0",
    orbitRadius: 10,
    orbitSpeed: 0.3,
    rotationSpeed: 0.1,
    description: "Our home planet, the only known planet to harbor life."
  },
  {
    name: "Mars",
    radius: 0.5,
    position: [13, 0, 0],
    color: "#CD5C5C",
    orbitRadius: 13,
    orbitSpeed: 0.24,
    rotationSpeed: 0.09,
    description: "The Red Planet, named after the Roman god of war."
  },
  {
    name: "Jupiter",
    radius: 2.2,
    position: [17, 0, 0],
    color: "#DEB887",
    orbitRadius: 17,
    orbitSpeed: 0.13,
    rotationSpeed: 0.12,
    description: "The largest planet in our Solar System."
  }
];