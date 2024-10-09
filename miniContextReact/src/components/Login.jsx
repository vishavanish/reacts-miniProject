import React from 'react'
import { useState , useContext} from "react";
import UserContext from '../context/UserContext'

function Login() {

    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const submitResponse = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return(
        <div>
            <div>
                <h2>Login</h2>
          
                <label for="username">Username:</label>
                <input type="text" id="usename" value={username} onChange={(e) => setUsername(e.target.value)} required/>

                <label for="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

                <button onClick={submitResponse}>Login</button>
           
            </div>

        </div>  
    )
}

export default Login;