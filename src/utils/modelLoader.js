import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const loadGLTFModel = (url) => {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      url,
      (gltf) => {
        resolve(gltf);
      },
      (progress) => {
        console.log(
          "Loading progress:",
          (progress.loaded / progress.total) * 100 + "%"
        );
      },
      (error) => {
        console.error("Error loading model:", error);
        reject(error);
      }
    );
  });
};
