import { useState,useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/counter'
import { CounterContext } from './context/counter'
import Counter2 from './components/counter2'

function App() {
  const counterContext = useContext(CounterContext)
  return (
   <>
   <div>
    <h1>Counter of {counterContext.name}</h1>
    <p>Count is {counterContext.count}</p>
    <Counter />
    <Counter />
    <Counter />
    <Counter />
    <Counter2 />
   </div>
   </>
  )
}

export default App
