import { useState } from 'react'
import Pill from './components/Pill';

function App() {
  const [color, setColor] = useState('white');
  
  return (
    <>
      <div onClick={(e)=> setColor('white')} style={{backgroundColor: color}} className='h-screen w-screen flex items-center justify-center bg-{color}-500'>
        <div className='bg-gray-100 w-max p-3 rounded-xl flex gap-5 shadow-lg'>
          <button onClick={(e)=>{
            e.stopPropagation()
            setColor('red')}}  className='bg-red-600 rounded-xl text-center p-2 text-white'>Red</button>
          <button onClick={(e)=> {
            e.stopPropagation()
            setColor('green')}} className='bg-green-600 rounded-xl text-center p-2 text-white'>Green</button>
          <button onClick={(e)=> {
            e.stopPropagation()
            setColor('blue')}} className='bg-blue-600 rounded-xl text-center p-2 text-white'>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
