import React from 'react';
import './UseCases.css';

const UseCases: React.FC = () => {
  const cases = [
    {
      title: 'Seguridad ciudadana (validado)',
      subtitle: 'El serenazgo que no puede estar en todas partes',
      desc: 'En un distrito de Lima hay 50 agentes de serenazgo para 100,000 habitantes. Cuando ocurre un robo en el parque, los vecinos lo saben antes que ellos — pero esa información se pierde en grupos de WhatsApp sin estructura. Con Grego, el reporte llega geolocalizado, confirmado por vecinos cercanos, con marca de tiempo. El serenazgo recibe una señal accionable, no ruido. El ciudadano recibe confirmación de que alguien atendió. El cuaderno físico se convierte en registro digital trazable.'
    },
    {
      title: 'Servicios públicos domiciliarios',
      subtitle: 'Un dolor oculto, normalizado y que escala todos los días',
      desc: 'Calidda coordina una instalación de gas en un edificio. Cuatro actores: inspector, instaladora, inquilino, propietario. Cada uno en su propio chat, preguntando lo que ya debería ser visible. El inquilino no sabe si el propietario confirmó la instalación. El propietario no sabe si el inspector ya llegó. Calidda no tiene registro trazable del proceso. Con Grego, el evento tiene un estado compartido desde el primer momento. Nadie pregunta — todos ven.'
    },
    {
      title: 'Delivery y servicios locales',
      subtitle: 'Cinco pedidos en simultáneo. Cero visibilidad de ninguno',
      desc: 'Un restaurante local maneja cinco deliveries al mismo tiempo. Uno por PedidosYa, otro por WhatsApp directo, dos por teléfono y uno coordinado con un repartidor propio. Cada pedido vive en un canal distinto. El dueño no sabe en qué estado está cada uno sin preguntar uno por uno. El cliente no sabe si su pedido salió. El repartidor no tiene cómo confirmar la entrega sin llamar. Con Grego, cada pedido es un evento con estado compartido: todos los actores ven lo mismo, en tiempo real, sin importar el canal por donde llegó el pedido.'
    },
    {
      title: 'Emergencias y desastres',
      subtitle: 'Cuando la ciudad necesita verse a sí misma',
      desc: 'Un terremoto sacude Lima a las 3am. En los primeros 30 minutos, la información crítica está dispersa entre llamadas al 911, historias de Instagram y grupos de WhatsApp sin administrador. Con Grego, cada zona afectada tiene un estado compartido: qué zona ya tiene cobertura, qué punto de acopio necesita qué, dónde hay refugio disponible. Los equipos de rescate no duplican esfuerzos. Los voluntarios saben adónde ir. La ciudad se organiza desde adentro.'
    },
    {
      title: 'Accidente en vía publica',
      subtitle: 'El accidente que todos vieron pero nadie reportó',
      desc: 'Un vehículo vuelca en una avenida principal a las 7am. Cuatro vecinos lo filman, pero nadie lo reporta de forma útil. Con Grego, el primer reporte aparece en el mapa en segundos. Tres vecinos cercanos lo confirman por proximidad. Los servicios de emergencia reciben una señal estructurada con ubicación exacta — no una llamada, historia o tweet entre miles. Los que van al trabajo ven la alerta y toman otra ruta.'
    }
  ];

  return (
    <section id="usecases" className="usecases-section">
      <div className="container">
        <h2>El mismo problema. Industrias distintas.</h2>
        <p className="section-subtitle">
          El patrón es siempre idéntico: múltiples actores, un evento anclado a un lugar físico, sin espacio digital compartido que refleje el estado en tiempo real.
        </p>
        
        <div className="grid-2 usecases-grid">
          {cases.map((c, i) => (
            <div key={i} className="usecase-card">
              <span style={{ color: 'var(--primary-color)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>{c.title}</span>
              <h3 style={{ marginTop: '8px', marginBottom: '12px' }}>{c.subtitle}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
