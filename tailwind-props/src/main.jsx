import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './assets/components/card.jsx'
let myObj={
  name:"Abdullah",
  age:20
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Card name="React" newObj={myObj} btnText="Click Me"/>
    <Card name="Tailwind" />
  </StrictMode>,
)
