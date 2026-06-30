import React from 'react';
import './Impact.css';
import { HeartHandshake, Siren, Activity } from 'lucide-react';

const Impact: React.FC = () => {
  const impacts = [
    {
      icon: <HeartHandshake size={32} />,
      title: 'Impacto social',
      desc: 'Reconstruir el tejido comunitario urbano. Reducir el aislamiento social. Activar la ayuda mutua entre vecinos que hoy no se conocen.'
    },
    {
      icon: <Siren size={32} />,
      title: 'Impacto en emergencias',
      desc: 'Acelerar la respuesta ciudadana ante desastres. Reducir el tiempo entre que ocurre un evento y que los actores relevantes lo saben. Descentralizar la inteligencia de crisis.'
    },
    {
      icon: <Activity size={32} />,
      title: 'Impacto económico',
      desc: 'Activar economías hiperlocales. Reducir la dependencia de plataformas de delivery centralizadas. Conectar oferta y demanda dentro de la misma comunidad.'
    }
  ];

  return (
    <section id="impact" className="impact-section">
      <div className="container">
        <h2>El problema es grande.<br/>La oportunidad también.</h2>
        
        <div className="stats-container glass-panel">
          <div className="stat-item">
            <span className="stat-number">#2</span>
            <span className="stat-label">
              Latinoamérica es la segunda región más propensa
              a desastres del mundo con 2,300+ eventos desde los 2000
            </span>
            <span className="stat-source"> — Fuente: UNDRR · OCHA, 2024</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">85%</span>
            <span className="stat-label">
              de la población vive en ciudades, sin una capa
              digital que conecte sus comunidades
            </span>
            <span className="stat-source"> — Fuente: UN Population Division, 2026</span>
          </div>
        </div>

        <div className="grid-3 impact-grid">
          {impacts.map((impact, i) => (
            <div key={i} className="impact-card glass-card">
              <div className="impact-icon">{impact.icon}</div>
              <h3>{impact.title}</h3>
              <p>{impact.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
