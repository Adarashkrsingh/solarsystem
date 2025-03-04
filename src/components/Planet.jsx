import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Planet = ({ orbitRadius, orbitSpeed, scale = 1, color = "#FDB813" }) => {
  const planetRef = useRef();
  const { scene } = useGLTF("/models/sun/scene.gltf");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (planetRef.current) {
      // Update position for orbit
      planetRef.current.position.x = Math.cos(t * orbitSpeed) * orbitRadius;
      planetRef.current.position.z = Math.sin(t * orbitSpeed) * orbitRadius;
      // Self rotation
      planetRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={planetRef}>
      <primitive object={scene.clone()} scale={scale} />
    </group>
  );
};

export default Planet;
