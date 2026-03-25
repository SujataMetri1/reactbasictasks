import React, { useState } from 'react'

function FormValidation() {
    const [username,setUsename]=useState("");
    const [message,setMessage]=useState("");

    const handleChange=(e)=>{
        setUsename(e.target.value)
    }

        const handleSubmit=()=>{
            if(username.trim()===""){
                setMessage("input values not be empty")
            }else{
                setMessage(`welcome,${username}`)
            }
        }

  return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={handleChange}
        style={{
          padding: "10px",
          fontSize: "16px",
          background:"red",
         borderRadius: "5px",
          border: "1px solid #ccc",
        }} 
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
      <p style={{ marginTop: "20px", fontSize: "18px", color: "blue" }}>
        {message}
      </p>
    </div>
  )
}

export default FormValidation