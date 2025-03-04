import { createContext, useContext, useState } from "react";

const ControlsContext = createContext(null);

export const ControlsProvider = ({ children }) => {
  const [controls, setControls] = useState({
    cameraDistance: 300, // Increased from 100 to 300
    sunScale: 10,
    sunRotationSpeed: 0.001,
    sunIntensity: 2,
  });

  const updateControls = (updates) => {
    setControls((prev) => ({ ...prev, ...updates }));
  };

  return (
    <ControlsContext.Provider value={{ controls, updateControls }}>
      {children}
    </ControlsContext.Provider>
  );
};

export const useControls = () => useContext(ControlsContext);
