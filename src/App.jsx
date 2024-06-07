import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
   <Login/>
    <Profile/>
  </UserContextProvider>
  )
}

export default App
