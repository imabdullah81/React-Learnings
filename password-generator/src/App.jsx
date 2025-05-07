import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str = str + "!@#$%^&*()?/|";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed,setPassword]);
  
  /*const copyClipboard = useCallback(()=>{
    passRef.current?.select();
    passRef.current.focus();
    passRef.current?.setSelectionRange(0,6);
    document.execCommand('copy');
    window.navigator.clipboard.writeText(password);
  },[password])*/
  const copyClipboard = useCallback(() => {
    const input = passRef.current;
    if (!input) return;
  
    // Optional: visually select it
    input.focus();
    input.setSelectionRange(0, 6);
  
    // Actually copy only the selected part
    const firstSix = input.value.substring(0, 6);
    navigator.clipboard.writeText(firstSix);
  }, []);
  
  
 useEffect(()=>{
  passwordGenerator();
 },[length,numberAllowed,charAllowed,passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 ">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white text-black"
          placeholder='password'
          readOnly
          ref={passRef}
          />
          <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0' onClick={copyClipboard}
          >Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={8}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label >Length : {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => setnumberAllowed((prev)=>!prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => setcharAllowed((prev)=>!prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App