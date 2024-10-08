import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='w-full h-screen duration-200' style={{ height: '100vh' }}>
  <div>
    <button className='bg-slate-100'>React With Vite</button>
  </div>
  <div className="text-center flex-wrap space-x-3 p-3 m-4" style={{ backgroundColor: color }}>
    <button className='bg-red-600 rounded' onClick={() => setColor("red")}>red</button>
    <button className='bg-yellow-400 rounded' onClick={() => setColor("yellow")}>yellow</button>
    <button className='bg-white rounded' onClick={() => setColor("black")}>black</button>
    <button className='bg-green-600 rounded' onClick={() => setColor("green")}>green</button>
    <button className='bg-blue-700 rounded' onClick={() => setColor("blue")}>blue</button>
  </div>
</div>

    </>
  )
}

export default App
