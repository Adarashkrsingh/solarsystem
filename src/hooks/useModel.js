import { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

export const useModel = (path) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
  }, [path]);

  const gltf = useGLTF(path, true, true, (error) => {
    console.error("Model loading error:", error);
    setError(error);
    setLoading(false);
  });

  return { gltf, error, loading };
};
