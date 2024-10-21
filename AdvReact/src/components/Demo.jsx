import React from 'react'

function Demo() {
    const [count, setCount] = React.useState(0)

    const handleClick = () => {
    setCount( count + 1)
    }

    const sayHi =() =>{
      console.log("Hi React");
    }

    const sayHello =() =>{
      console.log("Hello React");
    }
    sayHello()
  return (
    <>
        <h1>Count value : {count}</h1>
      <button onClick={handleClick}>Add</button>
      <button onClick={sayHi}>Hi</button>
      </>
  )
}

export default Demo