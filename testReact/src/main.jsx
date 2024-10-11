import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import "../App.css";
import './index.css'
import Greeting from './Greeting.jsx'
import Reacttxt from './Reacttxt.jsx'
import Amazonsale from './component/Amazonsale.jsx'

const Person = () => {return <h1>Heelo single funtion</h1>}


createRoot(document.getElementById('root')).render(
    // <Greeting /> ,

   <StrictMode>
        {/* <Person /> */}
        {/* <Greeting /> */}
        <Amazonsale />
   </StrictMode>
)

