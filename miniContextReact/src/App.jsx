import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>Hello react the is UserContext Practice</h1>
     <Login />
     <Profile />
     
    </UserContextProvider>
  )
}

export default App
