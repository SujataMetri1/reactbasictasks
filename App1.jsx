import React, { useState } from 'react'

const App1 = () => {
    const [count,setcount]=useState(0);

    const decrement=()=>{
        setcount(count-1)
    }
    const increment=()=>[
        setcount(count+1)
    ]
    const reset=()=>{
        setcount(0);
    }
  return (
    <div>
        <h2>{count}</h2>
          <button onClick={decrement}>-</button>
             <button onClick={increment}>+</button>
             <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App1