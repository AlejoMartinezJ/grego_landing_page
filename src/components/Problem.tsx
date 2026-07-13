import React from 'react';
import { Shuffle, Timer, Ban, Maximize2 } from 'lucide-react';
import './Problem.css';

const Problem: React.FC = () => {
  const problems = [
    {
      icon: <Shuffle size={32} className="problem-icon" />,
      title: 'Sin canal común',
      description: 'Cada actor se comunica en su propio chat. El estado del evento se pierde en la triangulación.'
    },
    {
      icon: <Timer size={32} className="problem-icon" />,
      title: 'Tiempo perdido en preguntar',
      description: 'Una buena porción del tiempo de respuesta se consume preguntando lo que ya debería ser visible.'
    },
    {
      icon: <Ban size={32} className="problem-icon" />,
      title: 'Sin registro, sin trazabilidad',
      description: 'Los eventos ocurren, se atienden o no, y desaparecen. Sin historial, sin métricas, sin aprendizaje.'
    },
    {
      icon: <Maximize2 size={32} className="problem-icon" />,
      title: 'La escalabilidad es imposible',
      description: 'Un negocio local, cientos de pedidos, cientos de motorizados, la trazabilidad se hace inmanejable porque se hace uno por uno.'
    }
  ];

  return (
    <section id="problem" className="problem-section">
      <div className="container">
        <h2>Falta una capa de estado compartido.</h2>
        <div className="problem-intro">
          <p>Cuando ocurre un incidente en tu barrio, una instalación en tu edificio o una emergencia en tu zona — los actores involucrados coordinan en canales separados. Uno en WhatsApp, otro en una app institucional, otro sin canal. Nadie ve el mismo estado del evento. El resultado: llamadas duplicadas, tiempos perdidos en preguntar lo que ya debería estar visible, y ciudadanos sin confirmación de que alguien ya lo atendió.</p>
          <p>Las soluciones existentes tienen trazabilidad — pero solo dentro de su propio flujo. Una app de delivery sabe el estado de tu pedido. Una app de serenazgo sabe el estado de su patrulla. Ninguna permite coordinar multilateralmente para cualquier evento, con cualquier actor, fuera de su propio servicio.</p>
        </div>
        
        <div className="grid-2 problem-grid">
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

        <div className="problem-field-data glass-panel mt-12" style={{ marginTop: '3rem', padding: '24px', textAlign: 'center', borderLeft: '4px solid var(--primary-color)' }}>
          <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Un ejemplo, validado en campo:</strong> 180 incidencias de orden público por mes. 20 minutos de tiempo promedio de respuesta. 0 registros digitales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
