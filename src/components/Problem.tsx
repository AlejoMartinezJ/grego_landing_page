import React from 'react';
import { MapPinOff, Rss, UsersRound } from 'lucide-react';
import './Problem.css';

const Problem: React.FC = () => {
  const problems = [
    {
      icon: <MapPinOff size={32} className="problem-icon" />,
      title: 'Sin lugar en el mapa',
      description: 'Tu barrio existe, pero no tiene una presencia digital organizada que lo represente.'
    },
    {
      icon: <Rss size={32} className="problem-icon" />,
      title: 'Información dispersa',
      description: 'Las noticias de tu zona llegan por diez canales distintos, tarde, sin contexto y con mucho ruido.'
    },
    {
      icon: <UsersRound size={32} className="problem-icon" />,
      title: 'Comunidad desconectada',
      description: 'Los vecinos no se conocen. La ayuda mutua ocurre por azar, no por diseño.'
    }
  ];

  return (
    <section id="problem" className="problem-section">
      <div className="container">
        <h2>El mundo digital ya no refleja la realidad</h2>
        <div className="problem-intro">
          <p>Las comunidades existen en el mundo físico — en los barrios, los mercados, los colegios, las asociaciones de vecinos. Pero en el mundo digital están fragmentadas: dispersas entre grupos de WhatsApp con mucho ruido, páginas de Facebook sobresaturadas, perfiles individuales sin actividad real.</p>
          <p>Cuando ocurre algo en tu barrio, te enteras tarde — si es que te enteras. Cuando necesitas algo de un vecino, no tienes cómo encontrarlo. Cuando quieres ayudar en una emergencia, no sabes a dónde ir.</p>
          <p><strong>El tejido social se debilita. La distancia digital entre personas que viven a metros de distancia crece.</strong></p>
        </div>
        
        <div className="grid-3 problem-grid">
          {problems.map((prob, index) => (
            <div key={index} className="glass-card problem-card">
              <div className="icon-wrapper">
                {prob.icon}
              </div>
              <h3>{prob.title}</h3>
              <p>{prob.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
