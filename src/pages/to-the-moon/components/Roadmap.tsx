import React from 'react';
import './Roadmap.css';

const Roadmap: React.FC = () => {
  const milestones = [
    {
      title: 'MVP 1 — Comunidad hiperlocal',
      status: 'En desarrollo',
      desc: 'Mapa de puntos de interés, Lobby con anuncios, mercado, canales enlazados, directorio vecinal básico.',
      success: 'Señal de éxito: comunidades activas con retorno orgánico semanal.'
    },
    {
      title: 'MVP 2 — Mercado local',
      status: 'Próximamente',
      desc: 'Tablón de anuncios georreferenciado en el mercado: vender, comprar, buscar, donar. Personas dispuestas a pagar por el servicio.',
      success: 'Señal de éxito: primeras transacciones entre vecinos completadas.'
    },
    {
      title: 'MVP 3 — Sensor ciudadano',
      status: 'Horizonte',
      desc: 'Reportes geolocalizados, validación cruzada, mapa de eventos en tiempo real, API para actores institucionales.',
      success: 'Señal de éxito: eventos auto-confirmados en menos de 10 minutos.'
    },
    {
      title: 'Visión a largo plazo — Grego 2.0',
      status: 'Futuro',
      desc: 'Middleware de resiliencia urbana: integración con sistemas de emergencia, serenazgo, municipios. Dashboard institucional.',
      success: 'Red de ciudades resilientes.'
    }
  ];

  return (
    <section id="roadmap" className="roadmap-section">
      <div className="container">
        <h2>Hacia dónde vamos</h2>
        <p className="section-subtitle">
          Grego se construye en capas, de adentro hacia afuera. Primero la comunidad. Luego la economía local. Luego la inteligencia urbana.
        </p>
        
        <div className="roadmap-timeline">
          {milestones.map((m, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-content">
                <div className="timeline-header">
                  <h3>{m.title}</h3>
                  <span className="status-badge">{m.status}</span>
                </div>
                <p>{m.desc}</p>
                <p className="success-signal"><strong>{m.success}</strong></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
