// Hook de React para manejar estados (en este caso, mostrar u ocultar el login)
import { useState } from "react";

// Componentes principales de la aplicación
import Login from "./Components/Login/Login.jsx"; //importamos el componente de login
import Navbar from "./Components/Navbar/Navbar.jsx"; //importamos la barra de navegación
import Home from "./Pages/Home/Home.jsx"; //importamos la página de inicio
import Reglas from "./Components/Reglas/Reglas.jsx";

// Componentes de React Router para manejar rutas
import { Routes, Route } from "react-router-dom";

function App() {
  // Estado que controla si el login (modal) se muestra o no
  // Se usará principalmente en la fase beta del proyecto
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Login como modal global. Se muestra solo cuando showLogin es true.
        Está fuera del layout principal para que pueda flotar sobre toda la app.*/}
      {showLogin && <Login setShowLogin={setShowLogin} />}

      {/* Contenedor principal de la aplicación. Sirve para controlar el layout general (Navbar + contenido dinámico).*/}
      <div className="app">
        
        <Navbar setShowLogin={setShowLogin} /> {/*Barra de navegacion. Recibe setShowLogin que si esta loguea el usuario, oculta el login.*/}
        <Routes> {/* Routes define qué componente se renderizasegún la URL del navegador.*/}
          <Route path="/" element={<Home />} /> {/* Ruta principal (Home) */}
          <Route path="/reglas" element={<Reglas />} /> {/* Ruta de Reglas */}
        </Routes>
      </div>
    </>
  );
}

export default App;