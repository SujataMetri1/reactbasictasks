import React, { useState } from 'react';

function Hide() {
  const [isvisibity, setisvisibility] = useState(false);

  return (
    <div>
      <button onClick={() => setisvisibility(!isvisibity)}>
        Show / Hide
      </button>

      {isvisibity && <p>Hello React</p>}
    </div>
  );
}

export default Hide;