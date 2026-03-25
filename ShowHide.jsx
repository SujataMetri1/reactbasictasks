import React, { useState } from 'react'

function ShowHide() {
    const [show,setShow]=useState(false);
    const changes=()=>{
        setShow(!show)
    }
  return (
    <div>
        <button onClick={changes}>
            {show ? 'Hide':'Show'}
        </button>
        <p>{show && <p>this is hidden message</p>}</p>
    </div>
  )
}

export default ShowHide