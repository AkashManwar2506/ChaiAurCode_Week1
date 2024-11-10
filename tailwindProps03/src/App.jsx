import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  
  const experience = ['akola', 'amd', 'mum', 'delhi'];
  return (
    <>
     <h1 className='bg-green-400 rounded-lg p-3 px-5'>Tailwind Test</h1>

     <Card username='Akash'city='Bengaluru' exp={experience}/>
     <Card username='R'city='Hydrabad' exp={experience}/>

    </>
  )
}

export default App
