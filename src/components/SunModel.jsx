import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useControls } from "../context/ControlsContext";

export function SunModel(props) {
  const group = useRef();
  const { scene } = useGLTF("/models/sun/scene.gltf");
  const { controls } = useControls();

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += controls.sunRotationSpeed;
    }
  });

  return (
    <group ref={group} {...props}>
      <primitive
        object={scene}
        scale={controls.sunScale}
        position={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/sun/scene.gltf");
