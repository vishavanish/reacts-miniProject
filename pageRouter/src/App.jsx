import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='text-3xl text-black mt-2'>React Router</h1> */}
      <Header />
      <Footer/>


    </>
  )
}

export default App
