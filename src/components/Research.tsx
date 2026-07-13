import React from 'react';
import './Research.css';

const Research: React.FC = () => {
  return (
    <section id="research" className="research-section">
      <div className="container">
        <h2>Fundamento académico</h2>
        <div className="research-intro">
          <p>Grego nace en la intersección de la ingeniería de sistemas, la investigación operativa y la resiliencia urbana. Su diseño está informado por el Marco de Sendai para la Reducción del Riesgo de Desastres (UNDRR), los sistemas de alerta temprana multirriesgo del BID para LAC, el caso SIATA Medellín como referente técnico en crowdsourcing de crisis, e influencia del Grupo para el Manejo de Crisis y Desastres (CID, PUCP).</p>
        </div>
        
        <div className="whitepaper-box glass-panel">
          <div className="whitepaper-header">
            <span className="badge">Abstract / White Paper</span>
          </div>
          <h3>Un sistema de orquestación de información para la detección y respuesta temprana a eventos disruptivos urbanos</h3>
          <p className="coming-soon">Próximamente disponible para descarga.</p>
        </div>
        
        <div className="references-section">
          <h4>Referencias clave</h4>
          <ul className="references-list">
            <li>UNDRR — Marco de Sendai para la Reducción del Riesgo de Desastres</li>
            <li>Rockefeller Foundation — 100 Resilient Cities</li>
            <li>BID — Sistemas de Alerta Temprana Multirriesgo para LAC</li>
            <li>SIATA Medellín — Sistema de Alerta Temprana del Valle de Aburrá</li>
            <li>Ushahidi — Crowdsourced Crisis Mapping</li>
            <li>CID PUCP — Grupo para el Manejo de Crisis y Desastres</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Research;
