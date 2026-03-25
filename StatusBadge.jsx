import React, { useState } from "react";
import styles from "./Status.module.css";

function StatusBadge() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <h3
        className={isActive ? styles.active : styles.inactive}
      >
        {isActive ? "Active" : "Inactive"}
      </h3>

      <button onClick={() => setIsActive(!isActive)}>
        Toggle Status
      </button>
    </div>
  );
}

export default StatusBadge;