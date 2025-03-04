import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const EarthPlanet = ({ orbitRadius, orbitSpeed, scale }) => {
  const ref = useRef();

  // Animate Earth: rotation around its own axis and orbit around the Sun
  useFrame(({ clock }) => {
    if (ref.current) {
      // Rotation around its own axis
      ref.current.rotation.y += 0.01; // Adjust this value for rotational speed around its axis

      // Orbit around the Sun: use time to calculate position on the orbit
      const t = clock.getElapsedTime(); // Get the elapsed time since the start
      const x = Math.cos(t * orbitSpeed) * orbitRadius;
      const z = Math.sin(t * orbitSpeed) * orbitRadius;

      // Update position to orbit around the Sun (assumed to be at the origin)
      ref.current.position.set(x, 0, z);
    }
  });

  return (
    <mesh ref={ref} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} /> {/* The Earth geometry */}
      <meshStandardMaterial color="#4d96ff" /> {/* The Earth color */}
    </mesh>
  );
};

export { EarthPlanet };
