import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  const addValue = () => {
    counter = counter + 1;
    if(counter <= 20){
      setCounter(counter);
    }
    else counter=20;
    
  }
  const removeValue = () => {
    counter = counter - 1;
    if(counter >= 0){
      setCounter(counter);
    }
    else counter=0;
  }
  return (
    <>
      <div className="card">
        <h1>TASBEEH</h1>
        <h2>Counter Value : {counter}</h2>
        <button onClick={addValue}>INC</button>
        <br />
        <button onClick={removeValue}>DEC</button>
      </div>
    </>
  )
}

export default App
