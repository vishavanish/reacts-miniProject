import React , {useState} from 'react'

function Count() { 
    const [count, setCount] = useState(0)

    // const handleClick = () => {
    //   setCount( count + 1)
    // }
     const handlePre= () => {
        setCount((currentState) => {
           const newState = currentState + 1;
            return newState;
        })
        
     }
    return (
      <>
      <h1>Count value : {count}</h1>
      {/* <button onClick={handleClick}>Add</button> */}
      <button onClick={handlePre}>Previous Value</button>
      </>
    )
}

export default Count