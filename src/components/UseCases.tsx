import React from 'react';
import './UseCases.css';

const UseCases: React.FC = () => {
  const cases = [
    {
      title: 'El accidente que todos vieron pero nadie reportó',
      desc: 'Un vehículo se vuelca en Av. Salaverry a las 7am. El tráfico se detiene. Cuatro vecinos lo filman para sus historias, pero nadie lo reporta de forma útil. Con Grego, el primer reporte aparece en el mapa de la zona en segundos. Tres vecinos cercanos lo confirman. Los que salen al trabajo ven la alerta y toman otra ruta. Los servicios de emergencia reciben una señal estructurada con ubicación exacta — no un tweet entre miles.'
    },
    {
      title: 'La asociación que existía solo en papel',
      desc: 'La Asociación de Egresados de la UNI tiene 3,000 miembros registrados, un grupo de WhatsApp de 200 y una página web desactualizada desde 2019. Con Grego, la asociación tiene un hotspot propio: un lugar en el mapa donde sus miembros se encuentran, donde se publican eventos y oportunidades, donde los canales existentes están enlazados y donde los nuevos egresados la encuentran sin necesitar que alguien los invite.'
    },
    {
      title: 'Cuando la ciudad necesita verse a sí misma',
      desc: 'Un terremoto sacude Lima a las 3am. En los primeros 30 minutos, la información crítica está dispersa entre llamadas al 911, historias de Instagram y grupos de WhatsApp sin administrador. Con Grego, cada zona afectada se convierte en un hotspot activo: los equipos de rescate ven en tiempo real qué zonas ya tienen cobertura y cuáles no. Los puntos de acopio publican qué necesitan. Los ciudadanos desplazados encuentran refugios disponibles. La ciudad se organiza desde adentro.'
    },
    {
      title: 'El depósito invisible del barrio',
      desc: 'Don Jorge tiene un depósito de abarrotes en Jesús María. Vende al por mayor pero pierde ventas porque los vecinos del distrito no saben que existe. Publicar en plataformas grandes le cobra comisión y le exige delivery. Con Grego, publica en el Mercado de su hotspot: arroz, aceite, conservas a precio de depósito, retiro en el local. Sus vecinos compran. Él vende sin intermediarios. El dinero no sale del barrio.'
    },
    {
      title: 'Lo que una notificación puede cambiar',
      desc: 'Ignacia tiene 74 años y vive sola en un quinto piso sin ascensor. Cuando se enferma, bajar a la farmacia es un riesgo. Cuando necesita algo del mercado, depende de que alguien la llame ese día. Con Grego, Ignacia forma parte del Lobby de su barrio. Puede pedir ayuda. Sus vecinos — que existen, que están cerca, que estarían dispuestos — pueden verla y responder. La soledad urbana no es inevitable. A veces solo falta un lugar donde encontrarse.'
    },
    {
      title: 'El serenazgo que no puede estar en todas partes',
      desc: 'En un distrito de Lima hay 40 agentes de serenazgo para 200,000 habitantes. No pueden cubrir todo. Cuando ocurre un robo en el parque, los vecinos lo saben antes que ellos — pero esa información se pierde en grupos de WhatsApp sin estructura. Con Grego, el reporte llega geolocalizado, confirmado por varios vecinos, con marca de tiempo. El serenazgo recibe una señal accionable, no ruido. Los vecinos cercanos reciben una alerta. La respuesta llega más rápido porque la información llegó antes.'
    }
  ];

  return (
    <section id="usecases" className="usecases-section">
      <div className="container">
        <h2>Grego en la vida real</h2>
        
        <div className="grid-2 usecases-grid">
          {cases.map((c, i) => (
            <div key={i} className="usecase-card">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
