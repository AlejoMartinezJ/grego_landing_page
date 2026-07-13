import React from 'react';
import './Team.css';

const Team: React.FC = () => {
  return (
    <section id="team" className="team-section">
      <div className="container">
        <h2>De dónde viene Grego</h2>
        
        <div className="team-content">
          <p>Grego nació de la intersección de dos preguntas simultáneas. La compleja: ¿cómo optimizar la respuesta de los sistemas de seguridad urbana? — planteada mientras se desarrollaba una tesis de ingeniería industrial en la PUCP sobre ruteo de vehículos de Serenazgo, hace 8 años. La simple: ¿por qué después de años viviendo en un mismo barrio, este se siente más desconectado que antes? — planteada una noche mientras necesitaba ayuda y era impensable tocar la puerta de un vecino.</p>
          
          <div className="team-academic-note glass-panel" style={{ marginTop: '24px', marginBottom: '24px', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--primary-color)' }}>
            <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              La respuesta a ambas es la misma: las comunidades urbanas carecen de una capa de coordinación compartida. Grego es esa capa.
            </p>
          </div>
          
          <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '32px' }}>
            <strong>Nota académica:</strong> El proyecto se enmarca en el campo de la Investigación Operativa y Resiliencia Urbana.
          </p>
          
          <div className="team-milestones" style={{ margin: '30px 0', textAlign: 'left', background: 'var(--glass-bg)', padding: '24px', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '16px', color: 'var(--primary-color)' }}>Hitos del fundador</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-secondary)' }}>
              <li style={{ marginBottom: '8px' }}>2018 — Tesis PUCP en optimización de ruteo de vehículos de Serenazgo — primer proyecto formal en resiliencia urbana</li>
              <li style={{ marginBottom: '8px' }}>2020 — Primer hackathon ganada: solución logística sobre blockchain para hospitales durante pandemia COVID-19</li>
              <li style={{ marginBottom: '8px' }}>2021 — Miembro fundador, Asociación Blockchain del Perú (ABPE)</li>
              <li style={{ marginBottom: '8px' }}>2026 — Segundo hackathon ganada: Alerta GAL, Hackatón Transformagob 2026, PCM / SGTD — como participante individual</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
