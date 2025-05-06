import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200 " style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl">
            <button onClick={() => {setColor("red")}} className="outline-none px-4 py-1 text-white shadow-2xl rounded-full " style={{backgroundColor:"red"}}>Red</button>
            <button onClick={() => {setColor("green")}} className="outline-none px-4 py-1 text-white shadow-2xl rounded-full " style={{backgroundColor:"green"}}>Green</button>
            <button onClick={() => {setColor("blue")}} className="outline-none px-4 py-1 text-white shadow-2xl rounded-full " style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={() => {setColor("black")}} className="outline-none px-4 py-1 text-white shadow-2xl rounded-full " style={{backgroundColor:"black"}}>Black</button>
            <button onClick={() => {setColor("purple")}} className="outline-none px-4 py-1 text-white shadow-2xl rounded-full " style={{backgroundColor:"purple"}}>Purple</button>
            <button onClick={() => {setColor("gold")}} className="outline-none px-4 py-1 text-white shadow-2xl rounded-full " style={{backgroundColor:"gold"}}>Gold</button>
            <button onClick={() => {setColor("brown")}} className="outline-none px-4 py-1 text-white shadow-2xl rounded-full " style={{backgroundColor:"brown"}}>Brown</button>
            <button onClick={() => {setColor("grey")}} className="outline-none px-4 py-1 text-white shadow-2xl rounded-full " style={{backgroundColor:"grey"}}>Grey</button>
            <button onClick={() => {setColor("violet")}} className="outline-none px-4 py-1 text-white shadow-2xl rounded-full " style={{backgroundColor:"violet"}}>Violet</button>
            <button onClick={() => {setColor("indigo")}} className="outline-none px-4 py-1 text-white shadow-2xl rounded-full " style={{backgroundColor:"indigo"}}>Indigo</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
