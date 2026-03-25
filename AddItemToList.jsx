import React, { useState } from 'react'

function AddItemToList() {
    const [input,setInput]=useState("");
    const [items,setItems]=useState([])

 const handleAdd=()=>{
    if(input.trim()==="")return;
    setItems([...items,input]);
    setInput();
 }

    const handleRe =(indexRemove)=>{
        const newItems=items.filter((_, index)=>index !==indexRemove  );
        setItems(newItems)
    };
  return (
    <div>
        <input type="text" value={input} placeholder='Enter Items here' onChange={(e)=>setInput(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
        <ul>
           {items.map((item,index) => (
          <li key={index}>{item}</li>
        ))}
        </ul>
        <ul>
  {items.map((item, index) => (
    <li key={index}>
      {item}
      <button onClick={() => handleRe(index)}>Delete</button>
    </li>
  ))}
</ul>
    </div>
  )
}

export default AddItemToList