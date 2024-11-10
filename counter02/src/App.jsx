import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function incr(){
    setCount(count + 1);
  }
  function decr(){
    if (count>0) setCount(count - 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter : {count}</h2>
      <button onClick={incr}>Increase Count</button>
      <button onClick={decr}>Decrease Count</button>
    </>
  )
}

export default App
