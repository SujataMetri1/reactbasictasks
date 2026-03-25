import React from 'react'

function LoginLogout() {
    const isLogin=false;
  return (
    <div>
        <button>login/logout</button>
        {isLogin ? "login success":"login failure"}
    </div>
  )
}

export default LoginLogout