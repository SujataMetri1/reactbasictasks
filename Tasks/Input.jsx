import React, { useState } from 'react'

function Input() {
    const [input,setInput]=useState('');

    const handleChange=(e)=>{
        setInput(e.target.value)
    }
  return (
    <div>
        <input type="text"  value={input} placeholder='enter the input' onChange={handleChange}/>
        <p>hello +{input} </p>
    </div>
  )
}

export default Input