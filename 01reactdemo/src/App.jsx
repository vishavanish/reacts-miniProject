import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  // const [counter, setCount] = useState(10)
  function incre(){
    if(counter<0){
      counter = 0
    }
    counter = counter + 1
    console.log(counter);
    setCounter(counter)
 
    
    return counter
  }
  function decre(){
    if(counter>0){
      setCounter(counter-1)
    setCounter(counter-1)
    }
  }
  const num=10
  let [counter ,setCounter] =useState(num)

  return (
    <>
     
      <h1>this is react using vite library </h1>
      <div className="card">
        <button onClick={incre}>
          
          count increase {counter}
        </button>

      </div>
      <div>
        <button onClick={decre}>count decrease {counter}</button>
      </div>
      <footer>{counter}</footer>
    </>
  )
}

export default App
