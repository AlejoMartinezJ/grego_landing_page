import React from 'react';
import './Features.css';
import { Map, Layout, MessageSquare, ShoppingBag, ShieldCheck, Link } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Map size={24} />,
      title: 'El Punto de interés',
      desc: 'Cada barrio, mercado o evento tiene su propio punto de interés (o hotspot) — un pin en el mapa con toda su información organizada.'
    },
    {
      icon: <Layout size={24} />,
      title: 'El Lobby',
      desc: 'El panel de entrada. Contiene el tablero de anuncios, el mercado local, el mapa de vigilancia y canales enlazados.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Anuncios',
      desc: 'El foro de la comunidad. Vecinos e instituciones publican anuncios y noticias enlazables a canales externos.'
    },
    {
      icon: <ShoppingBag size={24} />,
      title: 'Mercado hiperlocal',
      desc: 'Tablón de avisos georreferenciado. Vende, compra, dona o busca sin costos de delivery, con vecinos de tu misma zona.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Vigilancia ciudadana',
      desc: 'Mapa en tiempo real de eventos reportados por ciudadanos con validación cruzada para distinguir lo real del ruido.'
    },
    {
      icon: <Link size={24} />,
      title: 'Canales',
      desc: 'Directorio de grupos externos (WhatsApp, Facebook, Discord). Un punto de entrada al ecosistema digital de la comunidad.'
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
