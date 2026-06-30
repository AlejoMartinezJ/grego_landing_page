import React from 'react';
import './About.css';
import { MapPin, LayoutDashboard, Rss, Store, ShieldAlert, MessagesSquare } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>Una meta-capa viva sobre la ciudad</h2>
        <div className="about-intro">
          <p>Grego es una plataforma móvil que organiza la actividad humana alrededor de los lugares y comunidades donde ocurre — no alrededor de personas individuales o algoritmos de engagement. Cada lugar, barrio, evento o comunidad es un <strong>punto de interés</strong>: su espacio digital propio con tablero de anuncios, mercado local, mapa de vigilancia y canales de comunicación enlazados.</p>
        </div>
        
        <div className="abstraction-diagram">
          <div className="diagram-step">
            <div className="diagram-box main-box">
              <MapPin size={32} className="diagram-icon" />
              <h4>Lugar / Comunidad / Evento</h4>
            </div>
            <div className="diagram-arrow">↓</div>
            <div className="diagram-box hotspot-box">
              <h4>Punto de interés</h4>
              <span>(Hotspot en el mapa)</span>
            </div>
            <div className="diagram-arrow">↓</div>
            <div className="diagram-box lobby-box">
              <LayoutDashboard size={24} className="diagram-icon-small" />
              <h4>Lobby</h4>
              <span>(panel de entrada)</span>
            </div>
            <div className="diagram-arrow">↓</div>
            
            <div className="diagram-grid">
              <div className="diagram-module">
                <Rss size={20} />
                <span>Anuncios</span>
              </div>
              <div className="diagram-module">
                <Store size={20} />
                <span>Mercado</span>
              </div>
              <div className="diagram-module">
                <ShieldAlert size={20} />
                <span>Vigilancia</span>
              </div>
              <div className="diagram-module">
                <MessagesSquare size={20} />
                <span>Canales</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="synthesis-quote">
          <blockquote>
            "Imagina Google Maps con un foro de Reddit en cada punto de interés. Eso es Grego."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
