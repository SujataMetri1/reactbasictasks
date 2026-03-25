import React, { useState } from 'react';

function Toggle() {
  const click = true;
  const LoginIn = true;

  const [mode, setMode] = useState('light');

  const toggleChange = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <button>Click</button>

      {/* Conditional Styling */}
      <h2 style={{ color: click ? "red" : "gray" }}>
        Color Text
      </h2>

      {/* Conditional Rendering */}
      <h2>
        {LoginIn ? "Welcome" : "Please Login"}
      </h2>

      {/* Toggle Button */}
      <button onClick={toggleChange}>
        Switch to {mode === 'light' ? 'Dark' : 'Light'}
      </button>

      {/* Theme Display */}
      <h3>Current Mode: {mode}</h3>
    </div>
  );
}

export default Toggle;