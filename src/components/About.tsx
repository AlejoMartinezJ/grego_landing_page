import React from 'react';
import './About.css';

const About: React.FC = () => {
  const steps = [
    {
      num: '1.',
      title: 'El evento ocurre.',
      desc: 'Uno de los actores lo registra en Grego en segundos — ubicación, tipo, descripción mínima.'
    },
    {
      num: '2.',
      title: 'Grego genera un estado compartido del evento.',
      desc: 'Ubicación, actores, metadata, historial. Accesible por enlace, QR o número de teléfono.'
    },
    {
      num: '3.',
      title: 'Se comparte. Todos los actores ven el mismo estado en tiempo real.',
      desc: 'Sin preguntar. Sin llamar. Sin duplicar coordinación.'
    },
    {
      num: '4.',
      title: 'Cada actor continúa en su canal habitual.',
      desc: 'Pero con el estado de Grego como referencia común. Grego es la capa de estado que WhatsApp no tiene.'
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>Una plataforma de coordinación geolocalizada y multilateral para eventos físicos.</h2>
        <div className="about-intro">
          <p>Grego habilita a múltiples actores coordinar sobre múltiples eventos físicos — sin depender de un servicio específico, sin cambiar los canales que ya usan, compartiendo el estado del evento en tiempo real. No reemplaza WhatsApp ni las apps institucionales. Les da la capa de estado que les falta.</p>
          <div className="glass-panel" style={{ padding: '24px', margin: '2rem 0', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            <p>Shazam no reemplaza Spotify. Identifica la canción y te lleva a donde ya escuchas.</p>
            <p>Grego no reemplaza WhatsApp ni los canales existentes. Registra el evento, le da estructura y estado, y cada actor lo lleva a donde se sigue comunicando.</p>
          </div>
        </div>
        
        <div className="stepper-container" style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '800px', margin: '0 auto' }}>
          {steps.map((step, i) => (
            <div key={i} className="glass-card stepper-card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '32px', color: 'var(--primary-color)', lineHeight: 1 }}>{step.num}</div>
              <div>
                <h4 style={{ marginBottom: '8px', fontSize: '18px' }}>{step.title}</h4>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="synthesis-quote" style={{ marginTop: '4rem' }}>
          <blockquote style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--primary-color)', lineHeight: 1.3 }}>
            "Apúntalo en Grego. Ahí lo vamos revisando."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
