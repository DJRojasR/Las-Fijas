import './Reglas.css';

const Reglas = () => {
  const reglas = [
    {
      titulo: "Respeto y Profesionalismo",
      descripcion: "Mantén un tono respetuoso y profesional en todas las interacciones. Las críticas deben ser constructivas.",
      icono: "🤝"
    },
    {
      titulo: "Veracidad de la Información",
      descripcion: "Solo publica reseñas basadas en experiencias reales. No se permiten inventos, exageraciones o falsedades.",
      icono: "✅"
    },
    {
      titulo: "Confidencialidad",
      descripcion: "No compartas información personal de profesores o estudiantes. Respeta la privacidad de todos.",
      icono: "🔒"
    },
    {
      titulo: "Prohibido el Odio",
      descripcion: "No se toleran comentarios discriminatorios, de odio, acoso o ataques personales.",
      icono: "🚫"
    },
    {
      titulo: "Una Cuenta por Persona",
      descripcion: "No crees múltiples cuentas para manipular puntuaciones o reseñas.",
      icono: "👤"
    },
    {
      titulo: "Reportar Problemas",
      descripcion: "Si encuentras contenido inapropiado, repórtalo usando el botón correspondiente.",
      icono: "🚨",
    }
  ];

  const lineamientos = [
    "Las reseñas deben ser específicas y detalladas",
    "Incluye el semestre y materia en tus reseñas",
    "Sé objetivo en tu evaluación",
    "Balancea críticas con aspectos positivos",
    "Evita lenguaje ofensivo o agresivo"
  ];

  return (
    
    <div className="reglas-container">
      {/* Encabezado */}
      <div className="reglas-header">
        <h1 className="reglas-titulo">📜 Reglas del Foro Académico</h1>
        <p className="reglas-subtitulo">
          Para mantener una comunidad respetuosa y útil, por favor sigue estas reglas
        </p>
        <div className="reglas-nota">
          <span className="nota-icono">⚠️</span>
          <p>El incumplimiento de estas reglas puede resultar en la suspensión de tu cuenta</p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="reglas-contenido">
        {/* Sección de reglas principales */}
        <section className="reglas-seccion">
          <h2 className="seccion-titulo">Reglas Principales</h2>
          <div className="reglas-grid">
            {reglas.map((regla, index) => (
              <div 
                key={index} 
                className={`regla-card`}
              >
                <div className="regla-icono">{regla.icono}</div>
                <div className="regla-contenido">
                  <h3 className="regla-titulo">{regla.titulo}</h3>
                  <p className="regla-descripcion">{regla.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de lineamientos */}
        <section className="reglas-seccion">
          <h2 className="seccion-titulo">Lineamientos para Reseñas</h2>
          <div className="lineamientos-lista">
            {lineamientos.map((lineamiento, index) => (
              <div key={index} className="lineamiento-item">
                <span className="lineamiento-icono">✓</span>
                <p>{lineamiento}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de consecuencias */}
        <section className="consecuencias-seccion">
          <h2 className="seccion-titulo">Consecuencias por Incumplimiento</h2>
          <div className="consecuencias-grid">
            <div className="consecuencia-card">
              <div className="consecuencia-icono">👁️</div>
              <h3>Advertencia</h3>
              <p>Primera infracción menor</p>
            </div>
            <div className="consecuencia-card">
              <div className="consecuencia-icono">⏸️</div>
              <h3>Suspensión Temporal</h3>
              <p>Infracciones repetidas o graves</p>
            </div>
            <div className="consecuencia-card">
              <div className="consecuencia-icono">❌</div>
              <h3>Baneo Permanente</h3>
              <p>Infracciones críticas o múltiples</p>
            </div>
          </div>
        </section>

        {/* Sección de contacto */}
        <section className="contacto-seccion">
          <h2 className="seccion-titulo">¿Necesitas ayuda?</h2>
          <div className="contacto-contenido">
            <p>Si tienes dudas sobre las reglas o necesitas reportar algo:</p>
            <div className="contacto-opciones">
              <div className="contacto-opcion">
                <span className="opcion-icono">📧</span>
                <div>
                  <h4>Email de Soporte</h4>
                  <p>soporte@foroacademico.com</p>
                </div>
              </div>
              <div className="contacto-opcion">
                <span className="opcion-icono">🚨</span>
                <div>
                  <h4>Reportar Contenido</h4>
                  <p>Usa el botón "Reportar" en cualquier reseña</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Reglas;