import React from 'react';
import './Roadmap.css';

const Roadmap: React.FC = () => {
  const milestones = [
    {
      title: 'Horizonte actual — Coordinación institucional de incidencias',
      status: 'Hoy',
      desc: 'Módulo configurable para digitalizar el flujo de atención ciudadana en municipalidades. Reporte → validación → asignación → seguimiento → cierre. El ciudadano como sensor de entrada. La municipalidad como coordinador. El sereno como ejecutor en campo.',
      success: 'Caso validado: Alerta GAL, Municipalidad de Albarracín, Tacna. Primer lugar Hackatón Transformagob 2026.',
      model: 'Modelo: SaaS B2G — suscripción mensual por municipio. Perú tiene 1,874 municipalidades.'
    },
    {
      title: 'Horizonte próximo — Coordinación multilateral para eventos físicos',
      status: 'En 3 años',
      desc: 'El mismo mecanismo más allá de seguridad ciudadana. Servicios domiciliarios, logística de última milla, coordinación de voluntarios, empresas de servicios con terceros en campo. Cualquier organización con el patrón (múltiples actores + evento físico + sin canal común) es un cliente potencial.',
      success: '',
      model: 'Modelo: B2G + B2B.'
    },
    {
      title: 'Horizonte a largo plazo — Red hiperlocal con inteligencia urbana',
      status: 'Visión',
      desc: 'La capa de datos acumulada se convierte en el activo real. Heatmaps de incidencias, patrones de demanda por zona, predicción de eventos, API para instituciones y empresas. La red hiperlocal emerge porque los ciudadanos ya están en Grego coordinando eventos — la comunidad es el subproducto de la coordinación.',
      success: '',
      model: 'Modelo: B2G + B2B + datos como producto.'
    }
  ];

  return (
    <section id="roadmap" className="roadmap-section">
      <div className="container">
        <h2>De la coordinación de eventos a la inteligencia urbana.</h2>
        <p className="section-subtitle">
          Grego se construye en capas, cada una habilitando la siguiente.<br />
          El orden importa: una plataforma para coordinación de eventos multilateral permite construir un tejido digital de la ciudad.<br />
          Una red hiperlocal.
        </p>
        
        <div className="roadmap-timeline">
          {milestones.map((m, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="glass-card timeline-content">
                <div className="timeline-header">
                  <h3>{m.title}</h3>
                  <span className="status-badge">{m.status}</span>
                </div>
                <p>{m.desc}</p>
                {m.success && <p className="success-signal" style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}><strong>{m.success}</strong></p>}
                <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'var(--primary-color)' }}>{m.model}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
