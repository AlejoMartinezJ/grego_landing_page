import React from 'react';
import { ArrowRight, Trophy } from 'lucide-react';
import './ValidatedCase.css';

const ValidatedCase: React.FC = () => {
  return (
    <section id="validated-case" className="validated-case-section">
      <div className="container">
        <h2>Alerta GAL — El caso que valida la necesidad.</h2>
        <p className="section-subtitle">
          Municipalidad Distrital de Coronel Gregorio Albarracín Lanchipa · Tacna, Perú · 2026
        </p>

        <div className="case-study-content">
          <div className="glass-card case-block">
            <h3>El problema documentado</h3>
            <p>180 incidencias de orden público por mes en las cercanías del Mercado Santa Rosa. Tiempo promedio de respuesta: 20 minutos — consumidos en triangulación, no en desplazamiento. Registros digitales previos: cero.</p>
          </div>

          <div className="glass-card case-block">
            <h3>Lo que se construyó</h3>
            <p>Prototipo funcional del flujo completo en 3 días. Cuatro componentes integrados:</p>
            <ul>
              <li>Canal de reporte ciudadano sin instalación — QR, SMS o URL</li>
              <li>Panel web para la operadora — alertas, asignación, historial</li>
              <li>Vista móvil para el sereno — ubicación, navegación, cierre en campo</li>
              <li>Portal público de seguimiento — consulta por teléfono, sin cuenta</li>
            </ul>
          </div>

          <div className="glass-card case-block highlight-block">
            <h3><Trophy size={20} style={{ color: 'var(--primary-color)' }} /> El reconocimiento: Primer lugar — Hackatón Transformagob 2026</h3>
            <p>Organizada por la PCM / Secretaría de Gobierno y Transformación Digital<br />
            Más de 1,000 participantes · 18 desafíos de laboratorios de innovación pública<br />
            Ganador como participante individual</p>
          </div>

          <div className="glass-card case-block">
            <h3>Estado actual</h3>
            <p>La Municipalidad de Albarracín testeando el prototipo en producción desde la misma semana del reconocimiento. Conversación activa sobre figura de acompañamiento formal del piloto.</p>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a href="https://app.grego.pe/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Ver demo de Alerta GAL <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValidatedCase;
