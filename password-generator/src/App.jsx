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

  }, [length, numberAllowed, charAllowed, setPassword]);

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


  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-2xl px-6 py-8 my-10 bg-gray-900 text-orange-500">
        <h1 className="text-white text-center text-2xl font-semibold mb-6">
          🔐 Password Generator
        </h1>

        {/* Password Display & Copy Button */}
        <div className="flex flex-col sm:flex-row items-stretch gap-2 mb-6">
          <input
            type="text"
            value={password}
            className="w-full py-2 px-4 rounded-lg bg-white text-black outline-none text-sm sm:text-base"
            placeholder="Generated password"
            readOnly
            ref={passRef}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg text-white font-medium text-sm sm:text-base"
            onClick={copyClipboard}
          >
            Copy
          </button>
        </div>

        {/* Settings */}
        <div className="space-y-4 text-sm">
          {/* Length Slider */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <label className="text-white font-medium">Length: {length}</label>
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full sm:w-40 cursor-pointer accent-orange-500"
            />
          </div>

          {/* Checkboxes */}
          <div className="flex flex-col sm:flex-row gap-4">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => setnumberAllowed((prev) => !prev)}
                className="accent-orange-500"
              />
              Include Numbers
            </label>

            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                onChange={() => setcharAllowed((prev) => !prev)}
                className="accent-orange-500"
              />
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
    </>

  )
}

export default App