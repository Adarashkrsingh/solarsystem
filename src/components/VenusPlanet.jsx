import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function VenusPlanet({ orbitRadius, orbitSpeed, scale = 1 }) {
  const planetRef = useRef();
  const { scene, materials } = useGLTF("/models/venus/scene.gltf");

  // Clone the scene to avoid shared materials
  const clonedScene = scene.clone();

  // Enhance materials
  clonedScene.traverse((node) => {
    if (node.isMesh) {
      // Make sure material is properly lit
      if (node.material) {
        node.material = new THREE.MeshStandardMaterial({
          map: node.material.map,
          normalMap: node.material.normalMap,
          metalness: 0.3,
          roughness: 0.7,
          emissive: new THREE.Color(0x222222),
          emissiveIntensity: 0.2,
        });
      }
      // Enable shadows
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (planetRef.current) {
      planetRef.current.position.x = Math.cos(t * orbitSpeed) * orbitRadius;
      planetRef.current.position.z = Math.sin(t * orbitSpeed) * orbitRadius;
      planetRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={planetRef}>
      <pointLight
        intensity={0.5}
        distance={50}
        color="#ffffff"
        position={[2, 2, 2]}
      />
      <primitive object={clonedScene} scale={scale} dispose={null} />
    </group>
  );
}

useGLTF.preload("/models/venus/scene.gltf");
