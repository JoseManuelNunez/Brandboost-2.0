export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
  longDescription?: string; // For the detail page
  image?: string; // For the detail page
}

export const SERVICES: Service[] = [
  {
    id: 'branding',
    title: 'Branding & Strategy',
    description: 'Construimos identidades de marca memorables que resuenan con tu audiencia. Desde el logotipo hasta la voz de la marca, definimos una estrategia sólida para diferenciarte en el mercado.',
    features: ['Diseño de Identidad Visual', 'Estrategia de Comunicación', 'Manual de Marca', 'Rebranding Corporativo'],
    icon: '🎨',
    gradient: 'from-pink-500 to-rose-500',
    longDescription: `
        <p class="mb-4">En el mundo digital actual, una marca sólida es más que un simple logotipo o una paleta de colores atractiva. Es la promesa que haces a tus clientes y la experiencia que les brindas en cada punto de contacto. Nuestro servicio de Branding & Strategy se profundiza en el ADN de tu empresa para extraer su verdadera esencia.</p>
        <p class="mb-4">Trabajamos contigo para definir tu propósito, misión y valores, creando una narrativa coherente que conecte emocionalmente con tu audiencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Nuestro enfoque integral asegura que cada elemento visual y verbal de tu marca trabaje en armonía para construir confianza y lealtad a largo plazo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      `
  },
  {
    id: 'social-media',
    title: 'Impulso de Redes Sociales',
    description: 'Maximizamos tu presencia digital con contenido estratégico y gestión profesional. Creamos comunidades leales y aumentamos el engagement con tu marca.',
    features: ['Gestión de Comunidades', 'Creación de Contenido Viral', 'Calendarios Editoriales', 'Análisis de Métricas'],
    icon: '🚀',
    gradient: 'from-purple-500 to-indigo-500',
    longDescription: `
        <p class="mb-4">Las redes sociales son el corazón de la interacción moderna entre marcas y consumidores. No basta con estar presente; necesitas destacar, conversar y convertir. Nuestro servicio de Impulso de Redes Sociales transforma tus perfiles en canales dinámicos de crecimiento.</p>
        <p class="mb-4">Desarrollamos estrategias de contenido personalizadas que no solo entretienen, sino que también educan y venden. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Analizamos constantemente el rendimiento de cada publicación para optimizar el alcance y la participación, asegurando que cada esfuerzo contribuya a tus objetivos comerciales. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      `
  },
  {
    id: 'seo',
    title: 'SEO & Posicionamiento',
    description: 'Haz que te encuentren primero. Optimizamos tu sitio web para escalar posiciones en los motores de búsqueda y atraer tráfico orgánico de calidad.',
    features: ['Auditoría SEO', 'Optimización On-Page', 'Estrategia de Backlinks', 'SEO Local'],
    icon: '🔍',
    gradient: 'from-blue-400 to-cyan-500',
    longDescription: `
        <p class="mb-4">La visibilidad es clave en el inmenso océano de internet. Si tus clientes no pueden encontrarte, no existes para ellos. Nuestro servicio de SEO & Posicionamiento está diseñado para colocar a tu negocio en el foco de atención justo cuando tus clientes potenciales te están buscando.</p>
        <p class="mb-4">Implementamos técnicas avanzadas de optimización tanto dentro como fuera de tu sitio web (On-Page y Off-Page). Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Nos mantenemos al día con los constantes cambios en los algoritmos de búsqueda para asegurar que tu posicionamiento sea duradero y efectivo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      `
  },
  {
    id: 'audiovisual',
    title: 'Producción Audiovisual',
    description: 'Contamos historias a través de video y fotografía de alta calidad. Contenido visual impactante que captura la esencia de tu marca.',
    features: ['Videos Promocionales', 'Fotografía de Producto', 'Edición Profesional', 'Animación 2D/3D'],
    icon: '🎬',
    gradient: 'from-orange-400 to-red-500',
    longDescription: `
        <p class="mb-4">Una imagen vale más que mil palabras, y un video puede valer millones. En la era visual, la calidad de tu contenido audiovisual define la percepción de tu marca. Nuestro equipo de Producción Audiovisual crea piezas que no solo se ven bien, sino que transmiten emociones y mensajes claros.</p>
        <p class="mb-4">Desde la conceptualización hasta la post-producción, cuidamos cada detalle para entregar resultados cinematográficos. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Ya sea para campañas publicitarias, contenido de redes sociales o presentaciones corporativas, nuestro contenido visual elevará el estándar de tu comunicación. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      `
  },
  {
    id: 'marketing-campaigns',
    title: 'Campañas de Marketing',
    description: 'Estrategias integrales de publicidad pagada (Ads) y marketing digital orientadas a resultados y conversión de leads.',
    features: ['Google Ads', 'Meta Ads (Facebook/Instagram)', 'Email Marketing', 'Funnels de Venta'],
    icon: '💡',
    gradient: 'from-yellow-400 to-amber-500',
    longDescription: `
        <p class="mb-4">El marketing efectivo no es un gasto, es una inversión. Diseñamos y ejecutamos Campañas de Marketing orientadas a resultados tangibles: más leads, más ventas, mayor ROI. Utilizamos datos y creatividad para impactar a tu público ideal en el momento perfecto.</p>
        <p class="mb-4">Dominamos las plataformas publicitarias más potentes del mercado para maximizar tu presupuesto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Creamos embudos de venta (funnels) que guían a los usuarios desde el descubrimiento hasta la fidelización, optimizando cada etapa del customer journey. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      `
  },
  {
    id: 'web-apps',
    title: 'Desarrollo de Web Apps',
    description: 'Aplicaciones web modernas, rápidas y escalables. Transformamos tus ideas en plataformas digitales funcionales y atractivas.',
    features: ['Landing Pages de Alta Conversión', 'E-commerce', 'Paneles Administrativos', 'Webs Corporativas'],
    icon: '🖥️',
    gradient: 'from-green-400 to-emerald-600',
    longDescription: `
        <p class="mb-4">Tu sitio web es tu oficina abierta las 24 horas del día. Desarrollamos Web Apps que no solo son estéticamente impresionantes, sino también funcionalmente robustas, rápidas y seguras. Nos enfocamos en la experiencia de usuario (UX) para garantizar una navegación intuitiva y satisfactoria.</p>
        <p class="mb-4">Utilizamos las últimas tecnologías y frameworks para construir soluciones escalables que crecen junto con tu negocio. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Desde plataformas de comercio electrónico complejas hasta páginas corporativas elegantes, entregamos productos digitales de clase mundial. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      `
  },
  {
    id: 'mobile-apps',
    title: 'Desarrollo de Apps',
    description: 'Lleva tu negocio al bolsillo de tus clientes. Desarrollamos aplicaciones móviles nativas o híbridas con una experiencia de usuario impecable.',
    features: ['Apps iOS y Android', 'Diseño UX/UI Móvil', 'Integración con APIs', 'Mantenimiento y Soporte'],
    icon: '📱',
    gradient: 'from-blue-600 to-indigo-700',
    longDescription: `
        <p class="mb-4">La movilidad es el presente y futuro de la tecnología. Desarrollamos aplicaciones móviles que ofrecen soluciones directas y accesibles a tus usuarios, estén donde estén. Nos aseguramos de que tu app sea rápida, fluida y fácil de usar en cualquier dispositivo.</p>
        <p class="mb-4">Trabajamos con tecnologías nativas e híbridas para adaptarnos a tus necesidades y presupuesto sin comprometer la calidad. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Te acompañamos desde la idea inicial y el diseño de la interfaz hasta la publicación en tiendas y el mantenimiento posterior. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      `
  },
  {
    id: 'crm',
    title: 'Sistema de Gestión de CRM',
    description: 'Centraliza la relación con tus clientes. Implementamos y personalizamos sistemas CRM para optimizar tus ventas y seguimiento.',
    features: ['Seguimiento de Leads', 'Automatización de Ventas', 'Reportes en Tiempo Real', 'Integración Multicanal'],
    icon: '👥',
    gradient: 'from-violet-500 to-fuchsia-600',
    longDescription: `
        <p class="mb-4">Conocer a tus clientes es el primer paso para vender más. Implementamos Sistemas de Gestión de CRM que centralizan toda la información de tus prospectos y clientes, permitiéndote ofrecer una atención personalizada y oportuna.</p>
        <p class="mb-4">Automatizamos tareas repetitivas para que tu equipo de ventas se concentre en lo que mejor sabe hacer: cerrar tratos. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Obtén insights valiosos sobre el rendimiento de tu equipo y el comportamiento de tus clientes con reportes detallados y en tiempo real. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      `
  },
  {
    id: 'ai-integration',
    title: 'Integración de IA',
    description: 'El futuro es ahora. Implementamos soluciones de Inteligencia Artificial para automatizar procesos y mejorar la toma de decisiones.',
    features: ['Chatbots Inteligentes', 'Análisis Predictivo', 'Automatización de Procesos', 'Personalización con IA'],
    icon: '✨',
    gradient: 'from-teal-400 to-blue-500',
    longDescription: `
        <p class="mb-4">La Inteligencia Artificial está revolucionando la forma en que hacemos negocios. Ayudamos a tu empresa a adoptar estas tecnologías emergentes para optimizar operaciones, reducir costos y descubrir nuevas oportunidades de ingresos.</p>
        <p class="mb-4">Desde chatbots que atienden a tus clientes 24/7 hasta algoritmos que predicen tendencias de mercado, nuestras soluciones de IA están diseñadas para darte una ventaja competitiva real. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Nos aseguramos de que la implementación sea ética, segura y alineada con los objetivos estratégicos de tu organización. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      `
  }
];
