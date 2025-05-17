import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/items'
import Cart from './components/Cart'

function App() {
  return (
  <>
  <Item name="Mackbook Pro" price={100}/>
  <Item name="Vivo Y21 T" price={50}/>
  <Item name="TCL LED" price={500}/>
  <Cart />
  </>
  )
}

export default App
