import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useControls } from "../context/ControlsContext";
import Sun from "./Sun";
import { Planet } from "./Planet"; // Import the Planet component
import { VenusPlanet } from "./VenusPlanet";
import { EarthPlanet } from "./EarthPlanet";
import OrbitLine from "./OrbitLine";

const SolarSystem = ({ configurations }) => {
  const { controls } = useControls();

  // Define all 8 planets with their properties (orbit radius, speed, scale, color)
  const planets = [
    { orbitRadius: 90, orbitSpeed: 0.5, scale: 1, color: "#ffd93d" }, // Mercury
    { orbitRadius: 120, orbitSpeed: 0.4, scale: 1.5, color: "#ff6a00" }, // Venus
    { orbitRadius: 160, orbitSpeed: 0.3, scale: 1.8, color: "#4d96ff" }, // Earth
    { orbitRadius: 200, orbitSpeed: 0.25, scale: 1.5, color: "#ff4301" }, // Mars
    { orbitRadius: 260, orbitSpeed: 0.2, scale: 2, color: "#ffa600" }, // Jupiter
    { orbitRadius: 320, orbitSpeed: 0.15, scale: 2.5, color: "#fff5b7" }, // Saturn
    { orbitRadius: 370, orbitSpeed: 0.1, scale: 2, color: "#00d2ff" }, // Uranus
    { orbitRadius: 420, orbitSpeed: 0.08, scale: 2, color: "#4b9cd3" }, // Neptune
  ];

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas
        camera={{
          position: [0, controls.cameraDistance / 2, controls.cameraDistance],
          fov: 75,
        }}
        style={{ background: "#000000" }}
        shadows
      >
        {/* Lighting Setup */}
        <ambientLight intensity={0.3} />
        <hemisphereLight
          intensity={0.5}
          color="#ffffff"
          groundColor="#000000"
        />

        <Suspense fallback={null}>
          {/* Sun */}
          <Sun />
          
          {/* Venus with its orbit and color */}
          <OrbitLine radius={120} color="#ff6a00" />
          <VenusPlanet orbitRadius={120} orbitSpeed={0.4} scale={1.5} />
          
          {/* Earth with its orbit and color */}
          <OrbitLine radius={160} color="#4d96ff" />
          <EarthPlanet orbitRadius={160} orbitSpeed={0.3} scale={1.8} />
          
          {/* Other planets */}
          {planets.map((planet, index) => (
            <group key={index}>
              <OrbitLine radius={planet.orbitRadius} color={planet.color} />
              <Planet {...planet} /> {/* Pass the color as a prop */}
            </group>
          ))}

          {/* Stars in the background */}
          <Stars radius={400} depth={60} count={20000} factor={7} />
          
          {/* Orbit Controls */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxDistance={500}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SolarSystem;
