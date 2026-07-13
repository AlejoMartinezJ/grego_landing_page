import React from 'react';
import './Institutions.css';
import { ArrowRight } from 'lucide-react';

const Institutions: React.FC = () => {
  const profiles = [
    {
      title: 'Para municipios y gobiernos locales',
      desc: 'Digitalización del flujo de atención ciudadana sin desarrollo a medida. El mismo módulo configurable para cualquier territorio, tipo de incidencia y estructura institucional. Acceso a datos reales de lo que ocurre en la ciudad — densidad de eventos, tiempos de respuesta, patrones de demanda.'
    },
    {
      title: 'Para organizaciones de respuesta humanitaria',
      desc: 'En situaciones de desastre, Grego activa hotspots de emergencia por zona afectada. Centraliza la información dispersa en redes sociales. Estructura los reportes ciudadanos para que lleguen a quienes deben actuar con ubicación, validación y timestamp.'
    },
    {
      title: 'Para empresas con coordinación de terceros en campo',
      desc: 'Servicios domiciliarios, logística, instalaciones — cualquier empresa con el patrón de múltiples actores coordinando sobre un evento físico. Grego da el estado compartido que hoy no hay por WhatsApp, aplicaciones de servicios ni logísticas.'
    }
  ];

  return (
    <section id="institutions" className="institutions-section">
      <div className="container">
        <h2>Grego como infraestructura de coordinación urbana.</h2>
        <p className="section-subtitle">
          Grego no es una app para un distrito. Es el primer módulo de una infraestructura de resiliencia urbana reutilizable, que cualquier municipio o empresa puede adoptar, diseñada desde la experiencia del ciudadano hacia afuera.
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
