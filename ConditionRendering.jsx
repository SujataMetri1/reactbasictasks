import React from 'react'

function ConditionRendering() {
    const isLoginIn=true;
      if(isLoginIn){
            return "Welcome Back!.";
        }else{
            return "GoBack to Home";
        }

}

export default ConditionRendering