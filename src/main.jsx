import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './day-3/app.jsx' // ✅ import your Day 3 app
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import  'bootstrap' ;
import './index.css';
import App from './App.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

