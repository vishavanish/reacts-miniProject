import React from "react"
import { useParams } from 'react-router-dom';

function User() {
    const {id}= useParams()
    return(
        <div className="text-center mb-6 text-sm mt-5 p-0 font-semibold border-lime-950">User : {id}</div>
    )
    
}

export default User

