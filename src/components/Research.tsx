import React from 'react';
import './Research.css';
import { ArrowRight } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <section id="research" className="research-section">
      <div className="container">
        <h2>Fundamento académico</h2>
        <div className="research-intro">
          <p>Grego nace en la intersección de la resiliencia urbana y la ingeniería de sistemas, poniendo énfasis en el concepto de "redes sociales hiperlocales". Su diseño está informado por investigación en sistemas de alerta temprana (UNDRR Sendai Framework), urban informatics, crowdsourcing de crisis y teoría de redes complejas aplicada a ciudades.</p>
        </div>
        
        <div className="whitepaper-box glass-panel">
          <div className="whitepaper-header">
            <span className="badge">Abstract / White Paper</span>
          </div>
          <h3>Un sistema de orquestación de información para la detección y respuesta temprana a eventos disruptivos urbanos</h3>
          <p className="coming-soon">Próximamente disponible para descarga.</p>
          <button className="btn btn-secondary mt-4">
            Notifícame cuando esté disponible <ArrowRight size={16} />
          </button>
        </div>
        
        <div className="references-section">
          <h4>Referencias clave</h4>
          <ul className="references-list">
            <li>UNDRR — Marco de Sendai para la Reducción del Riesgo de Desastres</li>
            <li>Rockefeller Foundation — 100 Resilient Cities</li>
            <li>BID — Sistemas de Alerta Temprana Multirriesgo para LAC</li>
            <li>SIATA Medellín — Sistema de Alerta Temprana del Valle de Aburrá</li>
            <li>Ushahidi — Crowdsourced Crisis Mapping</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Research;
