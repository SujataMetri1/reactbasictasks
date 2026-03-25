import React, { useState } from "react";

function ColorToggle() {
  // Step 1: State to track color
  const [isRed, setIsRed] = useState(true);

  // Step 2: Function to toggle color
  const toggleColor = () => {
    setIsRed(!isRed); // Switch true ↔ false
  };

  return (
    <div>
      {/* Step 3: Button to toggle */}
      <button onClick={toggleColor}>Toggle Color</button>

      {/* Step 4: Text with inline style */}
      <h2 style={{ color: isRed ? "red" : "green" }}>
        This text changes color!
      </h2>
    </div>
  );
}

export default ColorToggle;