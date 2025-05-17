import {React,useContext} from 'react'
import { CounterContext } from '../context/counter'

export default function Counter() {
    const counterContext = useContext(CounterContext)
  return (
    <div>
        <button onClick={()=>{counterContext.setCount(counterContext.count + 1)}}>Increment</button>
        <button onClick={()=>{counterContext.setCount(counterContext.count - 1)}}>Decrement</button>
    </div>
  )
}
