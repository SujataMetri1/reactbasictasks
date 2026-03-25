import React, { useState } from 'react'

function Level() {
    const[hide,setHide]=useState(false);

    const handleClick=()=>{
        setHide(!hide)
    }
  return (
    <div>
        <button onClick={handleClick} >show/hide </button><br />
            {hide ? 'welcome':"plase login"}
        </div>
  )
}

export default Level