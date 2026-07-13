import React from 'react';
import './Analogies.css';

const Analogies: React.FC = () => {
  const analogies = [
    {
      title: 'Como Google Maps con estado en cada punto',
      desc: 'Google Maps te dice dónde está un lugar. Grego te dice qué está pasando ahí, quién está atendiendo, en qué estado está y cuándo fue la última actualización — en tiempo real.'
    },
    {
      title: 'Como Shazam frente a Spotify',
      desc: 'Shazam no reemplaza donde escuchas música. Identifica y te permite llevarla a Youtube o Spotify. Grego no reemplaza los canales que ya usas para comunicarte. Registra el evento y te permite compartirlo por cualquiera de esos canales.'
    },
    {
      title: 'Como Twilio — pero para coordinación de eventos',
      desc: 'Twilio no es una empresa de llamadas — es una plataforma de comunicación que cualquier producto puede usar. Grego no es una app de serenazgo — es una plataforma de coordinación que cualquier institución o empresa puede configurar para su propio flujo de eventos.'
    },
    {
      title: 'Como Waze — pero para toda la ciudad',
      desc: 'Waze convierte a millones de conductores en sensores de tráfico sin que lo noten. Grego convierte a ciudadanos e instituciones en sensores urbanos. Los eventos que coordinan hoy construyen el mapa de inteligencia de la ciudad de mañana.'
    },
    {
      title: 'Como Nextdoor — pero con modelo de adopción invertido',
      desc: 'Nextdoor necesitaba masa ciudadana para tener valor. Grego entra por la institución — el ciudadano llega porque la municipalidad o empresa le da un canal oficial. La comunidad es el resultado de la coordinación, no su precondición.'
    }
  ];

  return (
    <section id="analogies" className="analogies-section">
      <div className="container">
        <h2>Si lo conoces, ya entiendes Grego</h2>
        
        <div className="analogies-grid">
          {analogies.map((analogy, i) => (
            <div key={i} className="glass-card analogy-card">
              <h3>{analogy.title}</h3>
              <p>{analogy.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analogies;
