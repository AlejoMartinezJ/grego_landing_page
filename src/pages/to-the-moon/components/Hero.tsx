import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="map-overlay"></div>
        {/* Pulsing pins simulation */}
        <div className="pulsing-pin" style={{ top: '25%', left: '15%' }}></div>
        <div className="pulsing-pin" style={{ top: '65%', left: '85%', animationDelay: '0.5s' }}></div>
        <div className="pulsing-pin" style={{ top: '35%', left: '80%', animationDelay: '1s' }}></div>
        <div className="pulsing-pin" style={{ top: '75%', left: '20%', animationDelay: '1.5s' }}></div>
        <div className="pulsing-pin" style={{ top: '45%', left: '10%', animationDelay: '2s' }}></div>
        <div className="pulsing-pin" style={{ top: '20%', left: '75%', animationDelay: '2.5s' }}></div>
      </div>
      
      <div className="container hero-content">
        <h1 className="hero-title">
          La ciudad, en tiempo real.<br />
          <span className="text-gradient">Organizada por las personas que la viven.</span>
        </h1>
        <p className="hero-subtitle">
          A living meta-layer over the city — built by citizens, for citizens.
        </p>
        <p className="hero-description">
          Grego es una red hiperlocal que da a cada comunidad, barrio y lugar de la ciudad un espacio digital propio: un punto en el mapa donde encontrarse, organizarse e informarse. Una capa viva que refleja lo que ocurre en la ciudad, alimentada por quienes la habitan.
        </p>
        
        <div className="hero-actions">
          <a href="#about" className="btn btn-primary">
            Conoce más <ArrowRight size={20} />
          </a>
          <a href="#research" className="btn btn-secondary">
            <FileText size={20} /> Leer el White Paper
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
