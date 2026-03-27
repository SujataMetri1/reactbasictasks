import React from 'react'

import { useState } from "react";

export default function CharCounter() {
  const [text, setText] = useState("");
  const maxLength = 25;

  return (
    <div>
      <textarea
        value={text}
        maxLength={maxLength}
        onChange={(e) => setText(e.target.value)}
      />
      <p>
        {text.length}/{maxLength}
      </p>
      {text.length === maxLength && <p>Limit reached!</p>}
    </div>
  );
}