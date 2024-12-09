import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// Ce fichier est le point d'entrée pour React. 
// Il charge l'application en utilisant la méthode createRoot de ReactDOM.