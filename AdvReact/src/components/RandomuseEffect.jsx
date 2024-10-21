import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function RandomuseEffect() {
    const [toggle , setToggle] = useState(false)

  return (
    <div>
        <button onClick={()=> setToggle(!toggle)}>Click me</button>
        {toggle && <RandomComponent />}
    </div>
  )
}

const RandomComponent =() =>{
    useEffect( ()=>{
        console.log("Mount");
        setInterval( ()=>{
            console.log("set Interval ");
        },2000)
        
    },[])
    return(
    <>
    <h2>hello Im Learning React</h2>
    </>
    )

  }
export default RandomuseEffect