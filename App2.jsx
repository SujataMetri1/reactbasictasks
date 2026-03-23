import { useState } from "react";

function App2() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div
      style={{
        backgroundColor: mode === "light" ? "white" : "black",
        color: mode === "light" ? "black" : "white",
        height: "100vh",
        padding: "20px",
      }}
    >
      <button onClick={toggleMode}>
        {mode === "light" ? "Dark" : "Light"}
      </button>

      <h1>Hello World</h1>
    </div>
  );
}

export default App2;