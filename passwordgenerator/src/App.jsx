import { useState ,useCallback ,useEffect ,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length ,setLength] = useState(5)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed ,setCharAllowed] = useState(false)
  const [password , setPassword]  = useState("")
  const [buttonText, setButtonText] = useState('Copy');

  const passwordGenerator = useCallback(() => {
    let pass= ""
    let str="ABCDEFGHIJKLMNOPQRWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str += "!@#$%^&*(){}?"
    }
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random()* str.length + 1) //return char
      pass += str.charAt(char)
    }
    setPassword(pass)
    console.log(pass)

  }, [length ,numberAllowed ,charAllowed ,setPassword])

  const clickTOCopyCLipBoard = useCallback( () => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
    setButtonText('Copied')
    setTimeout(() => {
      setButtonText('Copy');
    }, 2500);
  },[password ,buttonText])

  useEffect(() => {
    passwordGenerator()
    // clickTOCopyCLipBoard()
    
  }, [length ,numberAllowed ,charAllowed ,setPassword])

  const passRef = useRef(null)

  return (
    <>
        <div className="flex justify-center items-center h-screen" style={{height:"100vh", backgroundColor :'#000f'}}>
        <div className='flex flex-wrap text-sm gap-x-4 gap-y-4 bg-neutral-300 p-6 rounded-lg shadow-lg'>
          
          <div className='flex flex-col items-start shadow-lg rounded-lg p-4 bg-white'>
            <label className='mb-2 font-semibold'>Enter Password</label>
            <input 
              className='p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
              type='text' 
              value={password} 
              placeholder='Enter your password' 
              readOnly
              ref={passRef}
            />
            <button onClick={clickTOCopyCLipBoard} className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition'>
              {buttonText}
            </button>
          </div>

          <div className='flex flex-col items-start shadow-lg rounded-lg p-4 bg-white'>
            <label className='mb-2 font-semibold'>Length</label>
            <input 
              className='w-full' 
              type='range' 
              min={1} 
              max={14} 
              value={length} 
              onChange={(e) => {setLength(e.target.value)}} 
            />
            <label className='mt-2'>Length: {length}</label>
          </div>

          <div className='flex items-center shadow-lg p-4 bg-white rounded-lg'>
            <input 
              type='checkbox' 
              className='mr-2' 
              checked={numberAllowed} 
              onChange={(e) => {setNumberAllowed(e.target.checked)}} 
            />
            <label>Number Allowed</label>
          </div>

          <div className='flex items-center shadow-lg p-4 bg-white rounded-lg'>
            <input 
              type='checkbox' 
              className='mr-2' 
              checked={charAllowed} 
              onChange={(e) => {setCharAllowed(e.target.checked)}} 
            />
            <label>Character Allowed</label>
          </div>
        </div>
      </div>

     
    </>
  )
}

export default App
