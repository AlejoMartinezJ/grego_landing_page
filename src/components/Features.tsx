import React from 'react';
import './Features.css';
import { Smartphone, Monitor, Navigation, Search, Map, ShieldCheck } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Smartphone size={24} />,
      title: 'Reporte ciudadano sin fricción',
      desc: 'El ciudadano reporta — Grego estructura el evento. Sin instalación, sin cuenta previa, completable en menos de 20 segundos. Accesible por QR, URL o SMS.'
    },
    {
      icon: <Monitor size={24} />,
      title: 'Panel de coordinación institucional',
      desc: 'Vista web para operadoras y coordinadores. Alertas en tiempo real, asignación de personal en un clic, historial trazable por evento. El flujo completo de atención digitalizado sin reemplazar los procesos existentes.'
    },
    {
      icon: <Navigation size={24} />,
      title: 'Vista de campo para el ejecutor',
      desc: 'Acceso móvil para el personal en campo — sereno, técnico, voluntario. Alerta con ubicación, navegación directa a Google Maps o Waze, formulario para actualizar el evento.'
    },
    {
      icon: <Search size={24} />,
      title: 'Portal público de seguimiento',
      desc: 'El ciudadano que reportó puede consultar el estado de su reporte por número de teléfono. Sin app, sin cuenta. Transparencia como diseño, no como promesa.'
    },
    {
      icon: <Map size={24} />,
      title: 'Hotspot comunitario',
      desc: 'Cada zona, barrio o evento tiene su propio espacio digital: tablero de anuncios, mercado local, mapa de vigilancia y canales enlazados. La red hiperlocal que emerge cuando la coordinación de eventos genera masa ciudadana.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Confirmaciones ponderadas',
      desc: 'Los reportes ciudadanos se validan por proximidad geográfica. Una confirmación desde 50 metros pesa más que una desde 5 km. El mecanismo que distingue la señal del ruido — y construye el activo de datos de largo plazo.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2>Lo que Grego hace hoy</h2>
        
        <div className="grid-3 features-grid">
          {features.map((feat, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feat.icon}</div>
              <div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
