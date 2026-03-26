
  import { useState } from "react";

function Greeting() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello, {name || "Guest"} 👋</h2>
    </div>
  );
}

export default Greeting