import React from 'react';
import './Team.css';

const Team: React.FC = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <h2>De dónde viene Grego</h2>
        
        <div className="team-content">
          <p>Grego nació en Lima, Perú. Después de 8 años proponiendo proyectos orientados a mejorar la capacidad de respuesta de la ciudad frente a eventos disruptivos. Su origen se dió en la intersección de dos preguntas: La compleja fue ¿cómo optimizar la respuesta de los sistemas de seguridad urbana? — planteada en mi tesis de ingeniería en la PUCP sobre ruteo de vehículos de Serenazgo — y la simple, ¿por qué después de 3 años aquí no tengo cercanía con ningún vecino? — planteada una noche mientras necesitaba un huevo para preparar sopa.</p>
          <p>La respuesta a ambas preguntas es la misma: las comunidades urbanas carecen de representación digital. Grego es esa representación.</p>
          
          <div className="team-academic-note glass-panel">
            <p><strong>Nota Académica:</strong> El proyecto se enmarca dentro del campo de la Investigación Operativo y Resiliencia Urbana, con influencia del Grupo para el Manejo de Crisis y Desastres (CID, PUCP), dedicado a contribuir a la mejora de actividades de respuesta humanitaria, en casos de crisis y desastres.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
