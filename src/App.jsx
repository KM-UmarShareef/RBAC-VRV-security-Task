import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p className='text-center my-10 md:text-4xl text-xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-orange-300 to-purple-800'>VRV Security’s Assignment</p>
      <Dashboard/>
    </> 
  ) 
  }
    export default App
 