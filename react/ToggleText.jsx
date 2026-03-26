
import { useState } from "react";

function ToggleText() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && <p>This is a paragraph</p>}
    </div>
  );
}

export default ToggleText