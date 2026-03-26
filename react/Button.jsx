import React from 'react'

function Button(text,color) {
  return (
   <button style={{ backgroundColor: color, color: "#fff", padding: "10px" }}>
      {text}
    </button>
  )
}

export default Button