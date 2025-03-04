import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { useControls } from "../context/ControlsContext";
import Sun from "./Sun";
import Planet from "./Planet";
import { VenusPlanet } from "./VenusPlanet";
import { EarthPlanet } from "./EarthPlanet";
import OrbitLine from "./OrbitLine";

const SolarSystem = ({ configurations }) => {
  const { controls } = useControls();

  
  const planets = [
    { orbitRadius: 90, orbitSpeed: 0.5, scale: 1, color: "#ffd93d" }, // Mercury
    // Venus and Earth are handled separately
    { orbitRadius: 200, orbitSpeed: 0.25, scale: 1.5, color: "#ff4301" }, // Mars
    { orbitRadius: 260, orbitSpeed: 0.2, scale: 2, color: "#ffa600" }, // Jupiter
    { orbitRadius: 320, orbitSpeed: 0.15, scale: 2.5, color: "#fff5b7" }, // Saturn
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
        {}
        <ambientLight intensity={0.3} />
        <hemisphereLight
          intensity={0.5}
          color="#ffffff"
          groundColor="#000000"
        />

        <Suspense fallback={null}>
          <Sun />
          {/* Venus with increased size */}
          <OrbitLine radius={120} color="#ffd93d" />
          <VenusPlanet orbitRadius={120} orbitSpeed={0.4} scale={8} />{" "}
          {}
          {}
          <OrbitLine radius={160} color="#4d96ff" />
          <EarthPlanet orbitRadius={160} orbitSpeed={0.3} scale={6} />
          {}
          {planets.map((planet, index) => (
            <group key={index}>
              <OrbitLine radius={planet.orbitRadius} color={planet.color} />
              <Planet {...planet} />
            </group>
          ))}
          <Stars radius={400} depth={60} count={20000} factor={7} />
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
