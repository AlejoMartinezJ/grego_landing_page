export const venezuelaEmergency = {
  id: 'venezuela-2026',

  // ── Banner ─────────────────────────────────────────────
  banner: {
    label:   '🔴 EMERGENCIA',
    text:    'Terremotos en Venezuela — Grego puede ayudar',
    cta:     'Ver cómo →',
    color:   '#C0392B',   // rojo alerta — excepción al dark theme
  },

  // ── Modal header ───────────────────────────────────────
  header: {
    eyebrow:   'GREGO RESPONDE A LOS',
    title:     'Terremotos de 7.2 y 7.5 en Venezuela',
    subtitle:  'Junio 2026'
  },

  // ── El problema central ────────────────────────────────
  problem: {
    title: 'Un problema crítico en medio de la emergencia',
    text: `La información está dispersa entre redes sociales,
           WhatsApp y medios. Esto provoca duplicación de esfuerzos,
           desperdicio de recursos y demoras fatales para conectar
           las necesidades con la ayuda disponible. Los equipos de
           rescate no saben quién cubre qué zona. Los voluntarios
           no saben adónde ir. Los puntos de acopio no comunican
           qué necesitan. Las personas desplazadas no encuentran
           alojamiento disponible.`,
  },

  // ── Cómo Grego ayuda HOY ───────────────────────────────
  capabilities: [
    {
      icon:  '📍',
      title: 'Hotspots por zona afectada',
      text:  `Cada zona afectada se convierte en un hotspot con su
              propio Lobby de coordinación. Los equipos de rescate
              ven en tiempo real quién cubre cada área. Se elimina
              la duplicación de esfuerzos.`,
      status: 'disponible',
    },
    {
      icon:  '🗺️',
      title: 'Mapa de puntos de acopio',
      text:  `Cada punto de colecta publica en su Lobby qué necesita,
              su horario y su estado actual. Una sola fuente de verdad
              para donantes que no saben adónde ir según su ubicación.`,
      status: 'disponible',
    },
    {
      icon:  '🛒',
      title: 'Mercado de voluntarios profesionales',
      text:  `Psicólogos, médicos, rescatistas, mecánicos, traductores, asesores
              legales — ofrecen sus servicios en el Mercado de cada punto
              de Grego. Las organizaciones conectan con ellos sin
              gastar donaciones en servicios que pueden ser voluntarios.`,
      status: 'disponible',
    },
    {
      icon:  '🔴',
      title: 'Vigilancia y seguridad ciudadana',
      text:  `Los ciudadanos reportan incidentes de seguridad en
              tiempo real — zonas de riesgo, saqueos, accesos
              bloqueados. Los reportes son validados por otros
              usuarios de la misma zona antes de propagarse.`,
      status: 'disponible',
    },
    {
      icon:  '🏠',
      title: 'Conectar refugiados con alojamiento',
      text:  `Personas que necesitan refugio temporal y personas
              dispuestas a ofrecerlo se encuentran en el mismo
              Lobby de zona. Sin plataforma centralizada, esta
              conexión hoy ocurre por azar o no ocurre.`,
      status: 'disponible',
    },
  ],

  // ── Lo que aún necesitamos construir ──────────────────
  gaps: {
    title: 'Lo que aún necesitamos para responder mejor',
    items: [
      {
        icon:  '📵',
        title: 'PWA offline-first',
        text:  `En zonas sin señal, los reportes de daños y necesidades
                deben guardarse localmente y sincronizarse cuando vuelve
                la conectividad. Es la prioridad técnica #1 para
                emergencias en campo.`,
      },
      {
        icon:  '📱',
        title: 'SMS / USSD gateway',
        text:  `Donde solo hay red 2G o SMS — sin datos, sin acceso
                a plataformas web — un ciudadano debe poder mandar
                un mensaje de texto y recibir información de su zona.
                Requiere infraestructura adicional (Twilio + backend ligero).`,
      },
    ],
    callout: `Si eres desarrollador con experiencia en PWA offline
              o SMS gateways y quieres contribuir, escríbenos.`,
  },

  // ── CTAs ───────────────────────────────────────────────
  ctas: [
    {
      label:   'Soy una organización en Venezuela',
      text:    'Cuéntanos cómo podemos ayudarte',
      href:    '#contact',
      style:   'primary',
    },
    {
      label:   'Quiero colaborar técnicamente',
      text:    'Desarrolladores, diseñadores, investigadores',
      href:    '#contact',
      style:   'secondary',
    },
    {
      label:   'Soy de prensa o investigador',
      text:    'Información sobre el proyecto',
      href:    '#contact',
      style:   'ghost',
    },
  ],

  // ── Footer del modal ───────────────────────────────────
  footer: {
    text: `Grego es un proyecto en desarrollo activo nacido en Lima, Perú.
           Esta respuesta de emergencia se activa como prueba de concepto
           del potencial de la plataforma en contextos de crisis urbana.`,
    disclaimer: `Los componentes disponibles hoy corresponden al MVP 1 y MVP 2
                 de la plataforma. La integración institucional formal está
                 en desarrollo.`,
  },
};

export type EmergencyContent = typeof venezuelaEmergency;
