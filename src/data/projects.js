export const projects = [
  {
    label: 'Landing institucional',
    title: 'Presencia web para un negocio agroindustrial',
    description:
      'Sitio de una página con catálogo de productos, botón de consulta por WhatsApp en cada ítem y sección institucional — pensado para un negocio que hoy no tiene ninguna presencia online.',
    tags: ['Catálogo de productos', 'Consulta por WhatsApp', 'Responsive'],
    twoColumn: true,
    shots: [
      {
        src: '/img/inicio_el_rustico.png',
        label: 'inicio',
        alt: 'Inicio de una landing institucional para un negocio agroindustrial, con catálogo y botón de WhatsApp',
      },
      {
        src: '/img/menu_el_rustico.png',
        label: 'catálogo',
        alt: 'Catálogo de productos organizado por categoría, con botón de consulta por WhatsApp en cada producto',
      },
    ],
  },
  {
    label: 'Carta digital',
    title: 'Panel de gestión + vista pública para gastronomía',
    description:
      'Dos sistemas conectados: un panel donde el dueño carga productos, categorías y adicionales, y una vista pública para que el cliente final navegue la carta desde el celular.',
    tags: ['Panel de administración', 'Vista para el cliente', 'Adicionales por producto'],
    twoColumn: false,
    shots: [
      {
        src: '/img/menu_cliente.png',
        label: 'vista del cliente',
        alt: 'Vista pública de la carta digital, organizada por categorías como parrilla y guarniciones',
      },
      {
        src: '/img/menu_productos.png',
        label: 'panel de productos',
        alt: 'Panel de administración con la lista de productos del menú y su estado',
      },
      {
        src: '/img/menu_adicionales.png',
        label: 'adicionales',
        alt: 'Panel de adicionales configurables por producto, con precio de cada uno',
      },
    ],
  },
  {
    label: 'Control de stock',
    title: 'Dashboard de inventario con alertas',
    description:
      'Vista general del estado del stock, alertas automáticas de productos bajos o en exceso, e historial de movimientos con motivo — para saber qué entró, qué salió y por qué.',
    tags: ['Alertas de stock bajo', 'Historial de movimientos', 'Valorización de inventario'],
    twoColumn: false,
    shots: [
      {
        src: '/img/panel_dashboard.png',
        label: 'dashboard',
        alt: 'Dashboard de control de stock con indicadores de stock bajo, agotados y exceso',
      },
      {
        src: '/img/panel_productos.png',
        label: 'productos',
        alt: 'Listado de productos en stock con ubicación, cantidad y precio',
      },
      {
        src: '/img/panel_movimiento.png',
        label: 'movimientos',
        alt: 'Historial de movimientos de stock, con entradas y salidas registradas',
      },
    ],
  },
  {
    label: 'Sitio turístico',
    title: 'Presencia web para un complejo de cabañas en las sierras',
    description:
      'Sitio de una página para un complejo de cabañas en La Falda, Córdoba, con sección institucional que cuenta la historia del lugar y una grilla de comodidades pensada para resolver las dudas típicas antes de reservar. Los botones de reserva y de WhatsApp quedan siempre a la vista.',
    tags: ['Sección institucional', 'Grilla de comodidades', 'Responsive'],
    twoColumn: false,
    shots: [
      {
        src: '/img/inicio_cabañas_granja.png',
        label: 'inicio',
        alt: 'Inicio del sitio de Cabañas la Granja, con foto del complejo, la pileta y botones de reserva',
      },
      {
        src: '/img/about_cabañas_granja.png',
        label: 'nosotros',
        alt: 'Sección institucional con la historia del complejo y estadísticas de años de trayectoria y huéspedes',
      },
      {
        src: '/img/amenities_cabañas_granja.png',
        label: 'comodidades',
        alt: 'Grilla de comodidades y servicios del complejo, con íconos de wifi, pileta, estacionamiento y más',
      },
    ],
  },
];
