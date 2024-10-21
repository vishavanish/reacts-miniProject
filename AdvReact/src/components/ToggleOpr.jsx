import React from 'react'
import { useState } from 'react'

function ToggleOpr() {
    const [user , setUser] = useState(null)

    const login = () => {
        //u can use api or db to check user or not user
        setUser({name: "avanish"})
    }
    const logout = () => {
        //u can use api or db to check user or not user
        setUser(null)
    }
    
  return(
    <>
    {user ? <div>
        <h1>Username : {user.name}</h1>
        <button onClick={logout}>Logout</button>
    </div> : 
    <div>
    <h3>Plz login</h3>
    <button onClick={login}>Login</button>
    </div>
    }
    
    </>
  )
}

export default ToggleOpr