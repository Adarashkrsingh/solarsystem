import { Suspense } from "react";
import { SunModel } from "./SunModel";

const Sun = () => {
  return (
    <group>
      <pointLight intensity={2} distance={300} color="#FDB813" />

      <Suspense fallback={<SunFallback />}>
        <SunModel scale={0.5} position={[0, 0, 0]} />
      </Suspense>
    </group>
  );
};

// Fallback sphere while model loads
const SunFallback = () => (
  <mesh>
    <sphereGeometry args={[5, 32, 32]} />
    <meshBasicMaterial color="#FDB813" />
  </mesh>
);

export default Sun;
