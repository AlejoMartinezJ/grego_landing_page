import React from 'react';
import './Institutions.css';
import { ArrowRight } from 'lucide-react';

const Institutions: React.FC = () => {
  const profiles = [
    {
      title: 'Para municipios y gobiernos locales',
      desc: 'Acceso a un panel de indicadores sobre comportamiento de zonas, densidad de eventos, focos de demanda no atendida. Una vista de la ciudad que hoy no existe en ninguna plataforma.'
    },
    {
      title: 'Para organizaciones de respuesta humanitaria',
      desc: 'En situaciones de desastre, Grego activa hotspots de emergencia, centraliza la información dispersa y estructura los reportes ciudadanos para quienes deben actuar.'
    },
    {
      title: 'Para empresas con presencia local',
      desc: 'Insights de demanda y comportamiento por zona geográfica. Canal directo con comunidades específicas. Presencia legítima en el ecosistema digital del barrio.'
    }
  ];

  return (
    <section id="institutions" className="institutions-section">
      <div className="container">
        <h2>Grego como infraestructura de ciudad</h2>
        <p className="section-subtitle">
          Grego no es solo una app para ciudadanos. Es una capa de datos e inteligencia urbana que puede integrarse con los sistemas de las instituciones que gestionan la ciudad.
        </p>

        <div className="grid-3 institutions-grid">
          {profiles.map((profile, i) => (
            <div key={i} className="institution-card">
              <h3>{profile.title}</h3>
              <p>{profile.desc}</p>
              <a href="#contact" className="contact-link">
                Contactar para más información <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Institutions;
