import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Callback from './use-callback.jsx'
import Memo from './use-memo.jsx'
import Layouteffect from './use-layouteffect.jsx'
import ImperativeHandle from './use-imperativehandle.jsx'
import Context from './use-context.jsx'
import UseOnlineStatus from './use-debugvalue.jsx'
import Transition from './use-transition.jsx'
import Effect from './use-effect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Effect />
  </StrictMode>,
)
