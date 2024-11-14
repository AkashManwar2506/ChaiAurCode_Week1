import { useEffect, useState, useCallback, useRef} from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('');
  const [numAllowed, setNumAllowed] = useState(false);
  const [spCharAllowed, setSpCharAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const inputField = useRef()

  const passGenerator = useCallback( () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str+="1234567890";
    if (spCharAllowed) str+="~!@#$%^&*()-_";

    let pass = "";
    for (let i=1; i<=length; i++){
      pass+=str[Math.floor(Math.random()*str.length)];
    }
    return pass;
  })

  useEffect(()=>{
    setPassword(passGenerator())
    return
  },[length, spCharAllowed, numAllowed])

  function copyPassword(){
    navigator.clipboard.writeText(inputField.current.value);
    inputField.current.select()
  }

  return (
    <>
      <h1>Password Generator</h1>
      <input type="text" ref={inputField} value={password} readOnly/>
      <button onClick={copyPassword}>Copy</button>
      <hr />
      <input type='range' id='length' min="6" max="30" value={length} onChange={(e)=> setLength(e.target.value)}/>
      <label htmlFor="length">Length: {length}</label>
      <br />
      <input type="checkbox" name="numAllowed" id="numAllowed" defaultChecked={numAllowed} onChange={(e)=> setNumAllowed(prev=> !prev)}/>
      <label htmlFor="numAllowed">Number Allowed</label>
      <br />
      <input type="checkbox" name="spCharAllowed" id="spCharAllowed" defaultChecked={spCharAllowed} onChange={(e)=> setSpCharAllowed(prev=> !prev)}/>
      <label htmlFor="spCharAllowed">Sp Char Allowed</label>
    </>
  )
}

export default App
