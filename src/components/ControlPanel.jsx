import { useControls } from "../context/ControlsContext";

const ControlPanel = () => {
  const { controls, updateControls } = useControls();

  return (
    <div className="control-panel" style={{ color: "white", padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Solar System Controls</h2>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Sun Size (Scale: {controls.sunScale.toFixed(1)})
        </label>
        <input
          type="range"
          min="5"
          max="20"
          step="0.5"
          value={controls.sunScale}
          onChange={(e) =>
            updateControls({ sunScale: parseFloat(e.target.value) })
          }
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Sun Rotation Speed ({controls.sunRotationSpeed.toFixed(3)})
        </label>
        <input
          type="range"
          min="0"
          max="0.01"
          step="0.001"
          value={controls.sunRotationSpeed}
          onChange={(e) =>
            updateControls({ sunRotationSpeed: parseFloat(e.target.value) })
          }
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Sun Light Intensity ({controls.sunIntensity.toFixed(1)})
        </label>
        <input
          type="range"
          min="0"
          max="5"
          step="0.1"
          value={controls.sunIntensity}
          onChange={(e) =>
            updateControls({ sunIntensity: parseFloat(e.target.value) })
          }
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Camera Distance ({controls.cameraDistance})
        </label>
        <input
          type="range"
          min="100"
          max="500"
          value={controls.cameraDistance}
          onChange={(e) =>
            updateControls({ cameraDistance: parseInt(e.target.value) })
          }
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default ControlPanel;
