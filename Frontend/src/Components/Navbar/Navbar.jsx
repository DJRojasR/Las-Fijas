import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar">
      {/* Logo a la izquierda */}
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          ForoAcadémico
        </Link>
      </div>

      {/* Menú hamburguesa (solo móvil) */}
      <button 
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Menú de navegación"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Enlaces de navegación CENTRADOS */}
      <div className={`navbar-center ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="navbar-links">
          <Link to="/" className={`nav-link ${isActive("/")}`}>
            Inicio
          </Link>
          <Link to="/profesores" className={`nav-link ${isActive("/profesores")}`}>
            Profesores
          </Link>
          <Link to="/recientes" className={`nav-link ${isActive("/recientes")}`}>
            Recientes
          </Link>
          <Link to="/mejores-valorados" className={`nav-link ${isActive("/mejores-valorados")}`}>
            Mejores
          </Link>
          <Link to="/reglas" className={`nav-link ${isActive("/reglas")}`}>
            Reglas
          </Link>
        </div>
      </div>

      {/* Botón de login a la derecha */}
      <div className="navbar-right">
        <button 
          className="btn-login"
          onClick={() => setShowLogin(true)}
        >
          Iniciar Sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;