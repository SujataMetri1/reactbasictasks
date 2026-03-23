import React, { useState } from "react";

function SearchBar() {
    const [query,setQuery]=useState("");

    function debounce(func,delay){
        let timer;
        return(...args)=>{
            clearTimeout(timer);
            timer=setTimeout(()=>
                func(...args),delay) 
        };
    }

    const fetchResults=debounce((searchTerm)=>{
        console.log("Fetching API result is:",searchTerm);
        
    },800)

 
  return (
    <input type="text"placeholder="Search..." value={query} onChange={(e) => {
     setQuery(e.target.value);
        fetchResults(e.target.value);
      }}
    />
  );
}

export default SearchBar;