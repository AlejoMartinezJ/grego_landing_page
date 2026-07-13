import React from 'react';
import './Analogies.css';

const Analogies: React.FC = () => {
  const analogies = [
    {
      title: 'Como Google Maps — pero con voz propia',
      desc: 'Google Maps te dice dónde está un lugar. Grego te dice qué está pasando ahí, quién vive alrededor, qué necesitan y qué ofrecen.'
    },
    {
      title: 'Como Reddit — pero anclado a tu ciudad',
      desc: 'Reddit tiene comunidades para cada tema. Grego tiene comunidades para cada lugar. La diferencia: aquí tus vecinos son los autores, y lo que publican te afecta directamente.'
    },
    {
      title: 'Como Waze — pero para toda la ciudad',
      desc: 'Waze convierte a millones de conductores en sensores de tráfico sin que ellos lo noten. Grego convierte a los ciudadanos en sensores urbanos.'
    },
    {
      title: 'Como WhatsApp — pero organizado por lugar',
      desc: 'El Lobby de Grego no depende de que alguien lo mantenga vivo — la comunidad lo alimenta naturalmente porque está anclado a un lugar real.'
    },
    {
      title: 'Como Nextdoor — pero para Latinoamérica',
      desc: 'Grego parte del tejido comunitario latinoamericano: la asociación de comerciantes, la junta vecinal, el grupo del colegio, el gremio.'
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
