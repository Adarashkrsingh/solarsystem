const LoadingScreen = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "white",
        fontSize: "1.5em",
      }}
    >
      Loading...
    </div>
  );
};

export default LoadingScreen;
