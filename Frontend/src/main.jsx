import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// BrowserRouter:
// Se encarga de manejar la navegación de la aplicación usando la URL del navegador.
// Permite cambiar de "página" sin recargar el sitio,
// interpretando las rutas y mostrando el componente correspondiente.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
