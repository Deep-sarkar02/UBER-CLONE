import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// step : 27 import the browser router
import { BrowserRouter } from 'react-router-dom'
import Usercontext from './context/Usercontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* step : 27 wrap the App component with BrowserRouter */}
    {/* step 35 :- wrap the full application by this usercontext */}
    <Usercontext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Usercontext>
  </StrictMode>,
)
