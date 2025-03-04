import { useState } from "react";
import SolarSystem from "./components/SolarSystem";
import ControlPanel from "./components/ControlPanel";
import { PLANET_DATA } from "./constants/planetData";
import { ControlsProvider } from "./context/ControlsContext";

const App = () => {
  const [configurations, setConfigurations] = useState(PLANET_DATA);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handleConfigUpdate = (planetId, updates) => {
    setConfigurations((prev) => ({
      ...prev,
      [planetId]: {
        ...prev[planetId],
        ...updates,
      },
    }));
  };

  return (
    <ControlsProvider>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <SolarSystem configurations={configurations} />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "300px",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            padding: "20px",
            color: "white",
            overflowY: "auto",
          }}
        >
          <ControlPanel />
        </div>
      </div>
    </ControlsProvider>
  );
};

export default App;
