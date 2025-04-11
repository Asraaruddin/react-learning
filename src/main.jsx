import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './day-3/app.jsx' // ✅ import your Day 3 app


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
