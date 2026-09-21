export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroText: string;
  iconName: string;
  kd: string | number;
  priority: 'ALTA' | 'MEDIA' | 'BAJA';
  phase: 1 | 2 | 3;
  isUrgent?: boolean;
  sections: {
    title: string;
    content: string;
    bulletPoints?: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SITE_INFO = {
  name: 'Fontaneros Barcelona 24h',
  legalName: 'Fontaneros Barcelona 24h - Servicios Integrales de Fontanería',
  domain: 'https://fontanerosbarcelona24h.com',
  phoneDisplay: '657 144 186',
  phoneRaw: '+34657144186',
  whatsappUrl: 'https://wa.me/34657144186?text=Hola,%20necesito%20un%20fontanero%20en%20Barcelona',
  email: 'info@fontanerosbarcelona24h.com',
  gasInstallerReg: 'Nº Reg. 08/XXXXXX',
  teamSize: 'Más de 10 fontaneros en plantilla',
  responseMinutes: 30,
  availability: '24 horas / 365 días (Urgencias)',
  addressCountry: 'ES',
  addressRegion: 'Barcelona',
  guaranteeText: 'Garantía por escrito en todas las reparaciones e instalaciones.',
  insuranceText: 'Seguro de Responsabilidad Civil profesional e Instaladores Autorizados de Gas.',
};

export const AMB_ZONES = [
  'Barcelona (Eixample, Gràcia, Sarrià-Sant Gervasi, Ciutat Vella, Les Corts, Sants, Horta-Guinardó, Sant Martí, Nou Barris, Sant Andreu)',
  "L'Hospitalet de Llobregat",
  'Badalona',
  'Santa Coloma de Gramenet',
  'Sant Cugat del Vallès',
  'Cornellà de Llobregat',
  'Esplugues de Llobregat',
  'Sabadell',
  'Terrassa',
  'Sant Boi de Llobregat',
  'Viladecans',
  'Castelldefels'
];

export const TRUST_SIGNALS = [
  {
    title: '+10 Fontaneros en Plantilla',
    description: 'Equipo propio desplegado por el Área Metropolitana de Barcelona para una rápida respuesta y trato directo.',
    icon: 'Users'
  },
  {
    title: 'Servicio de Guardia 24 Horas',
    description: 'Unidades móviles preparadas las 24 horas para resolver cualquier urgencia o avería hidráulica.',
    icon: 'Clock'
  },
  {
    title: 'Garantía por Escrito',
    description: 'Todas nuestras intervenciones cuentan con garantía formal firmada para tu total tranquilidad.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Técnicos Cualificados',
    description: 'Personal en plantilla con amplia experiencia, Seguro de Responsabilidad Civil e Instaladores Autorizados de Gas.',
    icon: 'Award'
  }
];

export const HOME_FAQS = [
  {
    question: '¿Cuánto tarda en llegar un fontanero de urgencia a mi domicilio en Barcelona?',
    answer: 'Contamos con una plantilla de más de 10 fontaneros distribuidos en vehículos taller por Barcelona y los municipios del Área Metropolitana. El tiempo medio de llegada para urgencias es de 20 a 30 minutos desde la confirmación de la llamada.'
  },
  {
    question: '¿Atendéis urgencias de fontanería las 24 horas en festivos y fines de semana?',
    answer: 'Sí, nuestro servicio de fontanería de urgencia está operativo las 24 horas del día, los 365 días del año, incluyendo festivos nacionales, locales y fines de semana.'
  },
  {
    question: '¿Ofrecéis presupuesto previo sin compromiso antes de reparar o iniciar una obra?',
    answer: 'Por supuesto. Antes de iniciar cualquier trabajo, nuestro técnico evalúa la situación in situ y te facilita un presupuesto detallado sin compromiso para que conozcas el coste exacto sin sorpresas.'
  },
  {
    question: '¿Qué garantía tienen las reparaciones e instalaciones realizadas?',
    answer: 'Todas nuestras reparaciones e instalaciones disponen de garantía por escrito con plazo explícito firmado en el parte de trabajo, conforme a la legislación vigente.'
  },
  {
    question: '¿Qué zonas de Barcelona y municipios del Área Metropolitana cubrís?',
    answer: "Damos cobertura completa a los 10 distritos de Barcelona ciudad (Eixample, Gràcia, Sarrià, Les Corts, Sants, Horta, Sant Martí, Ciutat Vella, Nou Barris, Sant Andreu) y municipios del AMB como L'Hospitalet, Badalona, Santa Coloma, Sant Cugat, Cornellà, Esplugues, Sabadell y Terrassa."
  },
  {
    question: '¿Qué métodos de pago aceptáis tras finalizar el trabajo de fontanería?',
    answer: 'Aceptamos pago en efectivo, tarjeta de crédito/débito mediante TPV móvil, Bizum y transferencia bancaria para empresas y comunidades de propietarios.'
  },
  {
    question: '¿Cómo sé si la avería de fontanería la cubre mi seguro de hogar?',
    answer: 'Nuestros técnicos redactan partes de intervención e informes periciales detallados con fotografías para que los puedas presentar a tu compañía de seguros y solicitar el reembolso correspondiente.'
  }
];

export const ZONE_FAQS = [
  {
    question: '¿Atendéis a todos los barrios de Barcelona ciudad sin cobrar costes desmesurados de desplazamiento?',
    answer: 'Sí, cubrimos los 10 distritos urbanos de Barcelona (Ciutat Vella, Eixample, Sants-Montjuïc, Les Corts, Sarrià-Sant Gervasi, Gràcia, Horta-Guinardó, Nou Barris, Sant Andreu y Sant Martí) con desplazamientos optimizados y tarifas transparentes.'
  },
  {
    question: '¿Qué municipios del Área Metropolitana de Barcelona (AMB) cubrís con vuestras unidades móviles?',
    answer: "Desplazamos nuestros vehículos taller a L'Hospitalet de Llobregat, Badalona, Santa Coloma de Gramenet, Sant Cugat del Vallès, Cornellà, Esplugues, Sabadell, Terrassa, Sant Boi, Viladecans y Castelldefels."
  },
  {
    question: '¿Cuánto tiempo tarda un fontanero en desplazarse a un municipio del AMB fuera de Barcelona capital?',
    answer: 'El tiempo estimado medio para urgencias en municipios del AMB es de 25 a 35 minutos, ya que contamos con fontaneros ubicados en puntos estratégicos de las rondas y vías principales.'
  },
  {
    question: '¿Es posible solicitar una visita de valoración y presupuesto sin compromiso en cualquier zona?',
    answer: 'Sí, acudimos a tu domicilio o negocio en cualquier barrio o municipio cubierto para evaluar el trabajo a realizar y entregarte una propuesta económica cerrada antes de comenzar.'
  },
  {
    question: '¿Ofrecéis servicio de fontanería de urgencia las 24 horas en todos los distritos de Barcelona?',
    answer: 'Sí, nuestro equipo de guardia 24 horas atiende llamadas de emergencia durante noches, fines de semana y festivos en toda Barcelona y municipios colindantes.'
  },
  {
    question: '¿Cómo garantizáis una llegada rápida a barrios con tráfico denso como Eixample o Ciutat Vella?',
    answer: 'Nuestros fontaneros disponen de vehículos taller de dimensiones reducidas y motocicletas equipadas con herramientas esenciales para maniobrar ágilmente por el centro urbano.'
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'cambiar-banera-por-plato-de-ducha-barcelona',
    slug: 'cambiar-banera-por-plato-de-ducha-barcelona',
    title: 'Cambio de Bañera por Plato de Ducha',
    shortDescription: 'Sustituimos tu antigua bañera por un plato de ducha antideslizante en 1 solo día, sin obras complejas.',
    metaTitle: 'Cambio de Bañera por Plato de Ducha en Barcelona | Obra en 1 Día',
    metaDescription: 'Expertos en el cambio de bañera por plato de ducha en Barcelona. Obra rápida en 1 día, materiales antideslizantes de calidad y presupuesto cerrado sin compromiso.',
    h1: 'Cambio de Bañera por Plato de Ducha en Barcelona',
    heroText: 'Ganarás espacio, accesibilidad y seguridad en tu baño. Instalamos platos de ducha a medida de resina o carga mineral en tan solo 1 día con garantía por escrito.',
    iconName: 'Bath',
    kd: 0,
    priority: 'ALTA',
    phase: 1,
    isUrgent: false,
    sections: [
      {
        title: '¿Por qué cambiar tu bañera por un plato de ducha accesible?',
        content: 'El cambio de bañera por ducha es la reforma más eficiente para renovar tu cuarto de baño en Barcelona. Permite mejorar de forma inmediata la seguridad de personas mayores o con movilidad reducida, reducir el consumo de agua en el hogar y modernizar la estética de la estancia con un diseño actual y funcional.',
        bulletPoints: [
          'Prevención de caídas y máxima accesibilidad con platos antideslizantes C3 a cota cero.',
          'Ahorro de hasta un 70% en la factura del agua frente al baño convencional.',
          'Instalación express en 1 sola jornada ejecutada por fontaneros y albañiles en plantilla propia.',
          'Limpieza fácil con materiales antibacterianos y sin juntas inaccesibles.'
        ]
      },
      {
        title: 'Proceso de trabajo paso a paso en 1 jornada',
        content: 'Para minimizar las molestias en tu vivienda, aplicamos un protocolo de trabajo altamente coordinado:',
        bulletPoints: [
          'Protección de suelos y zonas de paso de la vivienda antes de iniciar la demolición.',
          'Retirada limpia de la bañera antigua y transporte de escombros al vertedero autorizado en Barcelona.',
          'Adecuación de la toma de agua, desagüe de alto caudal y fontanería interior.',
          'Impermeabilización del suelo y alicatado de la zona afectada con azulejos a juego.',
          'Montaje del plato de ducha de resina, grifería monomando o termostática y mampara de cristal templado.'
        ]
      },
      {
        title: 'Presupuesto cerrado sin sorpresas y materiales de alta calidad',
        content: 'Te facilitamos una valoración clara con todos los materiales, mano de obra, retiradas de escombros y licencias incluidas antes de iniciar la obra.'
      }
    ],
    faqs: [
      {
        question: '¿Cuánto tiempo se tarda en cambiar una bañera por ducha en Barcelona?',
        answer: 'La obra estándar se ejecuta en 1 solo día laborable. Dejamos el baño totalmente operativo para su uso al día siguiente tras el secado del sellado de silicona neutra.'
      },
      {
        question: '¿Qué tipo de plato de ducha se recomienda instalar?',
        answer: 'Recomendamos platos de ducha de resina con carga mineral y tratamiento antibacteriano, de clase 3 antideslizante y extraplanos (3 cm) para una entrada a cota cero.'
      },
      {
        question: '¿Es necesario hacer obras molestas o cambiar los azulejos de todo el baño?',
        answer: 'No, únicamente intervenimos en el hueco que deja la antigua bañera. Alicatamos esa zona específica con azulejos a juego o paneles decorativos sin afectar al resto del baño.'
      },
      {
        question: '¿Qué incluye el presupuesto cerrado de cambio de bañera por ducha?',
        answer: 'Incluye la retirada de la bañera vieja, desescombro y tasa de vertedero, modificación de tomas de agua y desagüe, impermeabilización, plato de ducha antideslizante, alicatado parcial, mampara de cristal templado y grifería.'
      },
      {
        question: '¿Cuándo se puede volver a utilizar la nueva ducha tras la instalación?',
        answer: 'Se recomienda esperar 24 horas tras la finalización del montaje para permitir el secado y curado completo de los sellados impermeables.'
      },
      {
        question: '¿Qué garantía ofrecemos en la instalación del plato de ducha y la mampara?',
        answer: 'Entregamos garantía por escrito firmada que cubre tanto la mano de obra de fontanería y albañilería como los materiales instalados por un periodo legal mínimo de 2 años.'
      }
    ]
  },
  {
    id: 'reforma-de-bano-barcelona',
    slug: 'reforma-de-bano-barcelona',
    title: 'Reforma Integral de Baño',
    shortDescription: 'Reformas integrales y parciales de cuartos de baño en Barcelona. Cambio de tuberías, sanitarios y revestimientos.',
    metaTitle: 'Reforma de Baño en Barcelona | Fontanería y Cambio de Sanitarios',
    metaDescription: 'Empresa especializada en reformas de baño en Barcelona. Renovación completa de tuberías de fontanería, alicatados y sanitarios con garantía por escrito.',
    h1: 'Reforma de Baño en Barcelona y Fontanería Integral',
    heroText: 'Transformamos tu baño con materiales de alta calidad y soluciones de fontanería eficientes. Proyectos personalizados llave en mano con equipo propio.',
    iconName: 'Layout',
    kd: 0,
    priority: 'ALTA',
    phase: 1,
    isUrgent: false,
    sections: [
      {
        title: 'Renovación completa de saneamiento y fontanería de baño',
        content: 'Una reforma de baño en Barcelona no debe centrarse solo en la estética exterior, sino en la calidad de la red de saneamiento. Si tu vivienda tiene más de 15 años, reemplazamos las tuberías de plomo o hierro por cobre o multicapa para evitar futuras fugas de agua y humedad.',
        bulletPoints: [
          'Sustitución de bajantes y colectores de saneamiento deteriorados.',
          'Distribución eficiente de tomas de agua fría, caliente y desagües.',
          'Instalación de sanitarios suspendidos, muebles de lavabo y grifería de bajo consumo.',
          'Colocación de platos de ducha o bañeras de hidromasaje a medida.'
        ]
      },
      {
        title: 'Diseño a medida y asesoramiento técnico profesional',
        content: 'Nos adaptamos a tu presupuesto y necesidades de espacio, optimizando la distribución para maximizar la luz, el almacenamiento y el confort diario en tu hogar.'
      }
    ],
    faqs: [
      {
        question: '¿Cuánto cuesta reformar un baño completo en Barcelona?',
        answer: 'El coste varía según las dimensiones y los acabados elegidos. Tras una visita gratuita sin compromiso, entregamos un presupuesto detallado cerrado sin sorpresas.'
      },
      {
        question: '¿Se renuevan las tuberías interiores durante la reforma?',
        answer: 'Sí, renovamos toda la red interior de fontanería y desagües sustituyendo conducciones antiguas de plomo o hierro por cobre o multicapa para evitar humedades.'
      },
      {
        question: '¿Cuánto tiempo dura una reforma integral de baño en Barcelona?',
        answer: 'Una reforma estándar suele completarse en un plazo de entre 4 y 7 días laborables, dependiendo del nivel de alicatado y redistribución de sanitarios.'
      },
      {
        question: '¿Os encargáis de la gestión de escombros y limpieza tras la obra?',
        answer: 'Sí, nos ocupamos de la retirada limpia de escombros, su transporte a vertederos autorizados y la desinfección del área para entregar la obra lista para disfrutar.'
      },
      {
        question: '¿Qué materiales de revestimiento y sanitarios me recomendáis instalar?',
        answer: 'Aconsejamos azulejos porcelánicos de baja porosidad, sanitarios de cerámica esmaltada con cisternas empotradas de bajo consumo y grifería monomando o termostática.'
      },
      {
        question: '¿Entregáis presupuesto cerrado y garantía por escrito antes de comenzar?',
        answer: 'Sí, firmamos un contrato de obra con presupuesto cerrado en materiales y mano de obra, acompañado de garantía por escrito en todas las instalaciones.'
      }
    ]
  },
  {
    id: 'reparacion-de-calderas-barcelona',
    slug: 'reparacion-de-calderas-barcelona',
    title: 'Reparación de Calderas de Gas y Calefacción',
    shortDescription: 'Técnicos de calderas autorizados en Barcelona. Reparación urgente de averías de calefacción y agua caliente.',
    metaTitle: 'Reparación de Calderas en Barcelona | Instalador Autorizado de Gas',
    metaDescription: 'Servicio de reparación de calderas en Barcelona. Instaladores autorizados de gas. Atendemos todas las marcas con piezas originales y garantía.',
    h1: 'Reparación de Calderas en Barcelona y Calefacción',
    heroText: '¿Tu caldera no enciende, pierde agua o marca error de presión? Nuestros instaladores autorizados de gas solucionan averías el mismo día con repuestos originales.',
    iconName: 'Flame',
    kd: '0-40',
    priority: 'ALTA',
    phase: 1,
    isUrgent: true,
    sections: [
      {
        title: 'Servicio técnico especializado en calderas de gas y condensación',
        content: 'Un fallo en la caldera interrumpe el agua caliente y la calefacción en el hogar. Disponemos de instaladores autorizados de gas (Nº Reg. 08/XXXXXX) para diagnosticar y reparar cualquier código de avería con total seguridad y cumpliendo la normativa RITE vigente.',
        bulletPoints: [
          'Reparación de bajadas de presión, fugas de agua o fallos de encendido.',
          'Sustitución de bombas de circulación, intercambiadores y placas electrónicas.',
          'Atendemos todas las marcas líderes: Junkers, Vaillant, Saunier Duval, Baxi, Ferroli, Ariston.',
          'Verificación de combustión y análisis de gases de evacuación.'
        ]
      },
      {
        title: 'Atención urgente 24h en Barcelona y AMB',
        content: 'Para urgencias invernales o falta total de agua caliente sanitaria, nuestros técnicos acuden a tu vivienda en menos de 30 minutos con repuestos originales de fábrica.'
      }
    ],
    faqs: [
      {
        question: '¿Los técnicos son instaladores autorizados de gas?',
        answer: 'Sí, todo nuestro personal especializado en calderas cuenta con la certificación de Instalador Autorizado de Gas conforme al Reglamento de Instalaciones Térmicas (RITE).'
      },
      {
        question: '¿Qué marcas de calderas reparáis en Barcelona?',
        answer: 'Reparamos todas las marcas del mercado: Vaillant, Junkers, Saunier Duval, Baxi, Beretta, Ferroli, Chaffoteaux, Viessmann y Ariston.'
      },
      {
        question: '¿Qué debo hacer si la caldera pierde agua o baja la presión por debajo de 1 bar?',
        answer: 'Debes apagar el equipo, revisar si la llave de llenado está bien cerrada y contactar con nuestro servicio técnico para revisar la membrana, vaso de expansión o válvula de seguridad.'
      },
      {
        question: '¿Cuánto tiempo lleva reparar una avería habitual de caldera?',
        answer: 'La mayoría de averías mecánicas o de sensor de presión se resuelven en el mismo día en un plazo de 1 a 2 horas tras la llegada del técnico.'
      },
      {
        question: '¿Qué garantía tienen las reparaciones de calderas y las piezas de repuesto?',
        answer: 'Todas las piezas originales instaladas cuentan con garantía oficial de fábrica y la mano de obra dispone de garantía por escrito de 6 meses.'
      },
      {
        question: '¿Atendéis averías de calefacción en días festivos o invernales?',
        answer: 'Sí, mantenemos guardia técnica de emergencias los 365 días del año para solucionar problemas de calefacción y agua caliente sin interrupciones.'
      }
    ]
  },
  {
    id: 'deteccion-de-fugas-de-agua-barcelona',
    slug: 'deteccion-de-fugas-de-agua-barcelona',
    title: 'Detección y Reparación de Fugas de Agua',
    shortDescription: 'Localización de fugas ocultas con geófono y cámara termográfica sin romper paredes en Barcelona.',
    metaTitle: 'Detección de Fugas de Agua en Barcelona | Sin Obras',
    metaDescription: 'Localizamos y reparamos fugas de agua no visibles en Barcelona mediante tecnología acústica y termografía. Presupuesto sin compromiso.',
    h1: 'Detección de Fugas de Agua en Barcelona sin Romper',
    heroText: 'Localizamos con precisión milimétrica la ubicación exacta de fugas ocultas en tuberías de agua potable, calefacción o piscinas utilizando geófono y termografía.',
    iconName: 'Search',
    kd: 15,
    priority: 'ALTA',
    phase: 1,
    isUrgent: true,
    sections: [
      {
        title: 'Tecnología avanzada para la localización de fugas no visibles',
        content: 'Una fuga de agua oculta puede provocar humedades, moho, aumento desmesurado en la factura del agua y daños estructurales en el inmueble. Empleamos equipos de última generación que evitan catas e inspecciones destructivas innecesarias.',
        bulletPoints: [
          'Geófonos acústicos de alta sensibilidad para escuchar filtraciones subterráneas.',
          'Cámaras de inspección termográfica para detectar variaciones de temperatura en tuberías incrustadas.',
          'Inyección de gas trazador inofensivo para pequeñas micropérdidas en circuitos cerrados.',
          'Localizadores por trazado de radiofrecuencia.'
        ]
      },
      {
        title: 'Reparación limpia y emisión de informe para seguros',
        content: 'Una vez localizada la fuga, la reparamos de inmediato y emitimos el informe técnico detallado que requiere tu compañía de seguros de hogar o comunidad.'
      }
    ],
    faqs: [
      {
        question: '¿Cómo detectáis una fuga de agua sin picar la pared o el suelo?',
        answer: 'Utilizamos geófonos acústicos y cámaras termográficas que identifican el punto exacto de fuga por sonido o diferencia de temperatura antes de realizar cualquier intervención.'
      },
      {
        question: '¿Emitís informe técnico oficial para la compañía de seguros de hogar?',
        answer: 'Sí, redactamos el parte de intervención con fotografías e informe pericial para que lo presentes a tu aseguradora y tramite la cobertura de daños.'
      },
      {
        question: '¿Qué síntomas indican que hay una fuga de agua no visible en mi propiedad?',
        answer: 'Aumento inusual en la factura del agua sin mayor consumo, manchas de humedad o moho en paredes/techos, rodapiés abombados o contador girando con grifos cerrados.'
      },
      {
        question: '¿Cuánto tiempo se tarda en localizar con precisión el punto exacto de la fuga?',
        answer: 'Mediante geófono o termografía, la localización suele completarse en un tiempo promedio de 1 a 2 horas según la complejidad de la red hidráulica.'
      },
      {
        question: '¿Podéis reparar la tubería dañada tras haber localizado la fuga de agua?',
        answer: 'Sí, tras fijar el punto exacto realizamos una apertura limpia focalizada y reparamos el tramo afectado de tubería en la misma visita.'
      },
      {
        question: '¿Detectáis también fugas ocultas en piscinas, jardines o circuitos de calefacción?',
        answer: 'Sí, disponemos de equipos de inyección de gas trazador específicos para detectar fugas en tubos enterrados de jardín, vasos de piscina y calefacción.'
      }
    ]
  },
  {
    id: 'desatascos-barcelona',
    slug: 'desatascos-barcelona',
    title: 'Desatascos y Desentupidos Urgentes',
    shortDescription: 'Desatasco rápido de tuberías, fregaderos, wáters y bajantes en Barcelona. Camión cuba y manguera de alta presión.',
    metaTitle: 'Desatascos en Barcelona 24h | Servicio con Camión Cuba',
    metaDescription: 'Servicio urgente de desatascos en Barcelona. Desatascamos fregaderos, botes sifónicos, sanitarios y bajantes comunitarias con manguera de alta presión 24/7.',
    h1: 'Desatascos en Barcelona y Servicio de Camión Cuba 24H',
    heroText: 'Solucionamos cualquier atrancamiento en tuberías, desagües o bajantes comunitarias con máxima rapidez. Equipos de agua a alta presión y fontaneros cualificados.',
    iconName: 'Droplets',
    kd: 63,
    priority: 'MEDIA',
    phase: 2,
    isUrgent: true,
    sections: [
      {
        title: 'Soluciones inmediatas para desatascos en viviendas y comunidades',
        content: 'Un atasco en el fregadero, el inodoro o la bajante principal causa malos olores e inundaciones en la propiedad. Atendemos solicitudes en Barcelona con herramientas portátiles de muelle helicoidal y vehículos taller equipados con agua a alta presión.',
        bulletPoints: [
          'Desatasco de fregaderos de cocina, picas y lavabos obstruidos.',
          'Eliminación de tapones de cal, grasas y toallitas en bajantes comunitarias.',
          'Limpieza técnica de botes sifónicos y arquetas de paso.',
          'Vaciado y achique de agua en garajes y trasteros inundados.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Qué herramientas utilizáis para eliminar un atasco sin dañar las tuberías?',
        answer: 'Utilizamos espirales electromecánicas de muelle flexible y mangueras con toberas de agua a alta presión que trituran los tapones sin rallar ni agrietar el PVC ni el hierro.'
      },
      {
        question: '¿Cuánto tarda un fontanero en desatascar un fregadero, inodoro o bajante?',
        answer: 'Un desatasco doméstico estándar suele quedar resuelto en 30 a 45 minutos desde la llegada del técnico al domicilio.'
      },
      {
        question: '¿Disponéis de vehículo con manguera de alta presión (camión cuba) para arquetas comunitarias?',
        answer: 'Sí, disponemos de vehículos equipados con bomba de agua a alta presión para limpiar arquetas de paso y colectores comunitarios obstruidos.'
      },
      {
        question: '¿Qué debo hacer si se desborda el agua del inodoro o de la ducha al usar el fregadero?',
        answer: 'Esto indica un atasco en la bajante principal o bote sifónico. Cierra la llave de paso de agua y contacta inmediatamente con nuestro teléfono de urgencias.'
      },
      {
        question: '¿El servicio de desatascos incluye la limpieza y desinfección del tramo afectado?',
        answer: 'Sí, tras retirar el tapón realizamos un lavado con agua a alta presión para dejar la tubería completamente limpia y libre de sedimentos causantes de malos olores.'
      },
      {
        question: '¿Atendéis avisos de desatascos urgentes durante fines de semana o noches?',
        answer: 'Sí, contamos con fontaneros de guardia las 24 horas del día, los 365 días del año para desatascos de urgencia en todo el AMB.'
      }
    ]
  },
  {
    id: 'inspeccion-y-limpieza-de-tuberias-barcelona',
    slug: 'inspeccion-y-limpieza-de-tuberias-barcelona',
    title: 'Inspección y Limpieza de Tuberías',
    shortDescription: 'Inspección de tuberías con cámara TV HD y limpieza preventiva con agua a presión.',
    metaTitle: 'Inspección de Tuberías con Cámara en Barcelona | Limpieza de Saneamiento',
    metaDescription: 'Inspeccionamos el interior de tus tuberías con cámara de televisión robotizada en Barcelona. Diagnóstico de roturas, raíces y atascos.',
    h1: 'Inspección y Limpieza de Tuberías en Barcelona',
    heroText: 'Localizamos roturas, incrustaciones de cal o intrusión de raíces mediante cámara de inspección de vídeo con grabación en alta definición.',
    iconName: 'Camera',
    kd: 20,
    priority: 'MEDIA',
    phase: 2,
    isUrgent: false,
    sections: [
      {
        title: 'Diagnóstico por imagen sin obras para redes de saneamiento',
        content: 'La inspección de tuberías con cámara TV nos permite ver el estado real del interior de los conductos antes de realizar cualquier sustitución o desembolso económico elevado.',
        bulletPoints: [
          'Grabación en vídeo digital HD con localizador de sonda de profundidad.',
          'Detección de fisuras, aplastamientos y desprendimientos de empalmes.',
          'Limpieza preventiva de sarro y sedimentos adheridos.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Se entrega informe en vídeo tras la inspección de tuberías con cámara TV?',
        answer: 'Sí, proporcionamos la grabación en vídeo HD en un pendrive o enlace de descarga junto con un informe técnico por escrito detallando las anomalías detectadas.'
      },
      {
        question: '¿Hasta qué diámetro y longitud de conducto puede inspeccionar la cámara robotizada?',
        answer: 'Nuestras cámaras pueden introducirse en tuberías desde 40 mm hasta 300 mm de diámetro y recorrer tramos de hasta 50 metros continuos.'
      },
      {
        question: '¿Qué tipo de averías u obstrucciones se pueden detectar en el interior de la bajante?',
        answer: 'Identificamos roturas, fisuras por asentamiento del edificio, acumulación de jabones/grasas, intrusión de raíces, tapones de cal y desalineación de juntas.'
      },
      {
        question: '¿Cómo ayuda la inspección con cámara TV a evitar obras destructivas innecesarias?',
        answer: 'Al localizar el punto exacto de la rotura con sonda de frecuencia, sabemos exactamente en qué baldosa o zona del suelo picar, evitando romper metros de azulejos.'
      },
      {
        question: '¿Cada cuánto tiempo se recomienda realizar una limpieza preventiva de bajantes en comunidades?',
        answer: 'En comunidades de vecinos se aconseja efectuar un mantenimiento preventivo de colectores y bajantes cada 1 o 2 años para prevenir reventones de aguas residuales.'
      },
      {
        question: '¿Qué diferencia hay entre una limpieza técnica de tuberías y un desatasco convencional?',
        answer: 'El desatasco abre paso a la obstrucción puntual, mientras que la limpieza con manguera de alta presión elimina completamente la capa interna de grasa y sarro adherido.'
      }
    ]
  },
  {
    id: 'instalacion-y-cambio-de-caldera-barcelona',
    slug: 'instalacion-y-cambio-de-caldera-barcelona',
    title: 'Instalación y Cambio de Caldera',
    shortDescription: 'Instalación de calderas de condensación de alta eficiencia energética con certificado de gas oficial.',
    metaTitle: 'Instalación y Cambio de Caldera en Barcelona | Instaladores Autorizados',
    metaDescription: 'Instalación de calderas de gas en Barcelona. Financiación a medida, certificado oficial de gas RITE y montaje con garantía oficial.',
    h1: 'Instalación y Cambio de Caldera de Gas en Barcelona',
    heroText: 'Ahorra hasta un 30% en tu factura de gas instalando una caldera de condensación de última generación con nuestros instaladores autorizados de gas.',
    iconName: 'Flame',
    kd: 30,
    priority: 'MEDIA',
    phase: 2,
    isUrgent: false,
    sections: [
      {
        title: 'Calderas de condensación homologadas con la máxima eficiencia',
        content: 'Asesoramos en la elección de la potencia exacta necesaria para tu vivienda o local comercial en Barcelona, garantizando una instalación profesional y certificada conforme a la normativa.',
        bulletPoints: [
          'Retirada de la caldera antigua e instalación limpia del nuevo equipo.',
          'Emisión del boletín / certificado de instalación de gas oficial RITE.',
          'Puesta en marcha e instrucción al usuario.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Emitís el certificado oficial de gas RITE tras la instalación de la caldera?',
        answer: 'Sí, entregamos el certificado de instalación RITE firmado y sellado por nuestro instalador autorizado de gas para dar de alta o actualizar el suministro ante la distribuidora.'
      },
      {
        question: '¿Cuánto se tarda en cambiar una caldera antigua por una caldera de condensación?',
        answer: 'La sustitución estándar se realiza en el mismo día, en una jornada laboral de unas 4 a 6 horas de trabajo limpio.'
      },
      {
        question: '¿Cuánto se puede ahorrar en la factura de calefacción con una caldera de eficiencia A+?',
        answer: 'Las calderas de condensación de última generación aprovechan el calor de los humos de evacuación y permiten reducir el consumo de gas hasta en un 30%.'
      },
      {
        question: '¿Qué marcas y modelos de calderas de gas recomendáis e instaláis en Barcelona?',
        answer: 'Instalamos las marcas más fiables y eficientes del mercado: Vaillant, Junkers/Bosch, Saunier Duval, Baxi, Viessmann y Ariston con garantía oficial.'
      },
      {
        question: '¿Qué conceptos incluye el presupuesto de instalación de caldera?',
        answer: 'Incluye la nueva caldera de condensación, kit de salida de humos, plantilla de conexiones, desmontaje del equipo viejo, instalación limpia, puesta en marcha y boletín de gas.'
      },
      {
        question: '¿Ofrecéis posibilidades de financiación para la compra y sustitución de la caldera?',
        answer: 'Sí, disponemos de opciones de financiación a medida en cómodas cuotas mensuales para que renueves tu calefacción sin realizar un gran desembolso inicial.'
      }
    ]
  },
  {
    id: 'fontanero-comunidades-barcelona',
    slug: 'fontanero-comunidades-barcelona',
    title: 'Fontanero para Comunidades de Vecinos',
    shortDescription: 'Mantenimiento de fontanería, reparación de bajantes y sustitución de contadores comunitarios en Barcelona.',
    metaTitle: 'Fontanero para Comunidades de Vecinos en Barcelona',
    metaDescription: 'Servicio de mantenimiento y reparaciones de fontanería para fincas y comunidades de propietarios en Barcelona. Atención directa a administradores de fincas.',
    h1: 'Fontanero para Comunidades de Propietarios en Barcelona',
    heroText: 'Soluciones integrales para fincas urbanas: mantenimiento de bajantes, cuartos de contadores, bombas de achique y grupos de presión.',
    iconName: 'Building',
    kd: 10,
    priority: 'MEDIA',
    phase: 2,
    isUrgent: false,
    sections: [
      {
        title: 'Servicio preferente para administradores de fincas y comunidades',
        content: 'Ofrecemos respuesta prioritaria en siniestros comunitarios como roturas de bajantes principales o desbordamientos en garajes y trasteros.',
        bulletPoints: [
          'Atención rápida a avisos de administradores y presidentes de comunidad.',
          'Sustitución de bajantes de uralita o plomo por PVC insonorizado.',
          'Reparación de colectores colgados y bombas de achique.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Atendéis avisos directos de administradores de fincas y presidentes de comunidad?',
        answer: 'Sí, contamos con un canal de atención telefónica prioritaria para gestores de fincas y presidentes de comunidad para resolver averías de forma inmediata.'
      },
      {
        question: '¿Qué trabajos de fontanería realizáis habitualmente en fincas urbanas comunitarias?',
        answer: 'Sustituimos bajantes de aguas pluviales y residuales, reparamos colectores colgados, instalamos grupos de presión de agua, cambiamos baterías de contadores y achicamos garajes.'
      },
      {
        question: '¿Emitís certificado o parte técnico para la aseguradora de la comunidad en caso de siniestro?',
        answer: 'Sí, redactamos el parte de siniestro pericial con fotografías y desglose de daños exigido por las compañías aseguradoras de comunidades.'
      },
      {
        question: '¿Cómo realizáis el cambio de bajantes comunitarias de uralita/fibrocemento o plomo?',
        answer: 'Realizamos la retirada respetando los protocolos de seguridad y sustituimos el conducto por bajantes de PVC insonorizado que reducen el ruido de descargas.'
      },
      {
        question: '¿Realizáis mantenimiento e inspección de grupos de presión y bombas de achique de garajes?',
        answer: 'Sí, ofrecemos contratos de mantenimiento preventivo periódico para verificar válvulas, presostatos y bombas de achique antes de épocas de lluvias intensas.'
      },
      {
        question: '¿Qué prioridad de respuesta tenéis ante una rotura grave de bajante principal o inundación?',
        answer: 'Las urgencias comunitarias que afectan a múltiples vecinos o zonas comunes disponen de respuesta prioritaria de intervención inmediata en menos de 30 minutos.'
      }
    ]
  },
  {
    id: 'renovacion-de-instalaciones-barcelona',
    slug: 'renovacion-de-instalaciones-barcelona',
    title: 'Renovación de Instalaciones de Fontanería',
    shortDescription: 'Cambio de tuberías comunitarias y particulares en pisos viejos sin molestias exageradas.',
    metaTitle: 'Renovación de Instalaciones de Fontanería en Barcelona',
    metaDescription: 'Cambiamos viejas tuberías de hierro y plomo por cobre y multicapa en Barcelona. Mejora la presión y calidad del agua de tu hogar.',
    h1: 'Renovación de Instalaciones de Fontanería en Barcelona',
    heroText: 'Modernizamos toda la red de distribución de agua potable y saneamiento de tu propiedad con tuberías de multicapa, PEX o cobre.',
    iconName: 'Wrench',
    kd: 15,
    priority: 'MEDIA',
    phase: 2,
    isUrgent: false,
    sections: [
      {
        title: 'Elimina el plomo y recupera la presión de agua original',
        content: 'Las viviendas de más de 30 años en Barcelona suelen sufrir problemas de falta de presión de agua o sabor metálico debido al óxido en tuberías antiguas. La renovación de la red elimina estos riesgos de raíz.',
        bulletPoints: [
          'Eliminación total de conductos de plomo peligrosos para la salud.',
          'Aumento del caudal y presión en grifos y duchas.',
          'Materiales con garantía anticorrosión por 25 años.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Por qué es necesario reemplazar las antiguas tuberías de plomo o hierro en pisos de Barcelona?',
        answer: 'Las tuberías de plomo están prohibidas por normativas sanitarias por intoxicación metálica, mientras que el hierro acumulado reduce la presión y genera óxido en el agua.'
      },
      {
        question: '¿Qué materiales de tubería modernos utilizáis para la nueva red de distribución de agua?',
        answer: 'Utilizamos tuberías de multicapa reforzado (PEX-Al-PEX) o cobre de alta pureza, inmunes a la corrosión y con máxima resistencia a la presión.'
      },
      {
        question: '¿Cuánto tiempo se tarda en renovar por completo la instalación de fontanería de un piso?',
        answer: 'Una renovación completa de agua fría, caliente y desagües para un piso de 3 habitaciones y 2 baños se ejecuta en un plazo de 2 a 4 días laborables.'
      },
      {
        question: '¿Es necesario dejar la vivienda inhabitable durante los días que dura la sustitución de tuberías?',
        answer: 'No, dejamos una toma de agua provisional operativa al final de cada jornada para que puedas disponer de suministro básico durante la obra.'
      },
      {
        question: '¿Mejorará el caudal y la presión de agua en los grifos y ducha tras la renovación?',
        answer: 'Sí, al eliminar las tuberías calcificadas u oxidadas por donde apenas pasaba agua, recuperarás el caudal y la presión originales de la red municipal.'
      },
      {
        question: '¿Qué garantía oficial ofrecemos sobre los nuevos materiales e instalación ejecutada?',
        answer: 'Entregamos certificado de garantía por escrito de 2 años en la mano de obra y garantía de hasta 25 años del fabricante en tuberías de multicapa y cobre.'
      }
    ]
  },
  {
    id: 'cambio-de-termo-electrico-barcelona',
    slug: 'cambio-de-termo-electrico-barcelona',
    title: 'Cambio e Instalación de Termo Eléctrico',
    shortDescription: 'Sustitución rápida de termos eléctricos picados o averiados de todas las capacidades.',
    metaTitle: 'Cambio e Instalación de Termo Eléctrico en Barcelona',
    metaDescription: 'Instalamos y sustituimos termos eléctricos en Barcelona en el día. Marcas Junkers, Ariston, Fleck y Cointra. Presupuesto sin compromiso.',
    h1: 'Cambio e Instalación de Termo Eléctrico en Barcelona',
    heroText: '¿Tu termo eléctrico pierde agua o salta el diferencial? Instalamos tu nuevo termo de 50L, 80L, 100L o 150L en el mismo día.',
    iconName: 'Zap',
    kd: 5,
    priority: 'BAJA',
    phase: 2,
    isUrgent: false,
    sections: [
      {
        title: 'Solución express para termo eléctrico perforado o sin calentar',
        content: 'Sustituimos el termo viejo averiado por modelos de alta eficiencia con ánodo de titanio antiquemaduras y de larga durabilidad contra la cal de Barcelona.',
        bulletPoints: [
          'Venta e instalación de las marcas Fleck, Ariston, Junkers, Thermor y Cointra.',
          'Instalación de latiguillos reforzados y válvula de seguridad antiquemaduras.',
          'Retirada limpia del termo antiguo para su posterior reciclaje.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Cuánto tiempo se tarda en cambiar un termo eléctrico perforado o averiado?',
        answer: 'El desmontaje del termo viejo y la instalación del nuevo equipo se realiza normalmente en un tiempo de 2 a 3 horas en la misma visita.'
      },
      {
        question: '¿Qué capacidad de termo eléctrico (litros) necesito según el número de personas en el hogar?',
        answer: 'Recomendamos: 50 Litros para 1-2 personas, 80 Litros para 2-3 personas, 100 Litros para 3-4 personas y 150 Litros o más para familias de más de 4 personas.'
      },
      {
        question: '¿Qué marcas de termos eléctricos de alta durabilidad recomendáis e instaláis en Barcelona?',
        answer: 'Trabajamos con marcas reconocidas por su resistencia a la cal como Ariston, Fleck, Junkers/Bosch, Thermor y Cointra.'
      },
      {
        question: '¿Qué debo hacer si el termo eléctrico pierde agua por la base o hace saltar el diferencial?',
        answer: 'Esto ocurre cuando el calderín interno se ha perforado por corrosión. Desconecta el enchufe eléctrico, cierra la llave de paso de entrada al termo y contáctanos.'
      },
      {
        question: '¿Incluye el servicio la retirada y transporte del termo eléctrico antiguo al punto limpio?',
        answer: 'Sí, nos encargamos de descolgar el termo viejo, transportarlo y gestionarlo en un centro de reciclaje o punto limpio autorizado sin recargo.'
      },
      {
        question: '¿Cómo influye la dureza del agua de Barcelona en la vida útil del termo y cómo prevenir la cal?',
        answer: 'El agua de Barcelona tiene un elevado nivel de cal que incrusta las resistencias. Aconsejamos termos con ánodo de titanio/magnesio o resistencias envainadas que no están en contacto directo con el agua.'
      }
    ]
  },
  {
    id: 'cambio-de-grifos-barcelona',
    slug: 'cambio-de-grifos-barcelona',
    title: 'Cambio de Grifos y Sanitarios',
    shortDescription: 'Instalación de grifería monomando, termostática y reparación de cisternas de inodoro.',
    metaTitle: 'Cambio de Grifos y Sanitarios en Barcelona | Fontanería Express',
    metaDescription: 'Servicio rápido de cambio de grifos, lavabos, bidet e inodoros en Barcelona. Reparación de fugas en cisternas y latiguillos.',
    h1: 'Cambio de Grifos y Sanitarios en Barcelona',
    heroText: 'Renueva los grifos de tu cocina o baño. Instalamos modelos monomando, termostáticos o lavabos completos de forma rápida y económica.',
    iconName: 'Droplet',
    kd: 5,
    priority: 'BAJA',
    phase: 2,
    isUrgent: false,
    sections: [
      {
        title: 'Reparación y montaje de sanitarios y grifería de diseño',
        content: 'Atendemos tanto la sustitución de grifos antiguos goteantes como la instalación de grifería empotrada y cisternas empotradas Geberit.',
        bulletPoints: [
          'Instalación de grifos monomando y termostáticos de ducha.',
          'Sustitución de mecanismos de cisterna de inodoro que pierden agua.',
          'Montaje de lavabos, bidés y grifería de cocina extraíble.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Puedo comprar el grifo o sanitario por mi cuenta y contratar únicamente la mano de obra?',
        answer: 'Sí, instalamos cualquier modelo de grifo, lavabo o inodoro que hayas adquirido en cualquier gran superficie o tienda especializada.'
      },
      {
        question: '¿Cuánto tiempo se tarda en sustituir un grifo de cocina, lavabo o ducha?',
        answer: 'La sustitución de un grifo estándar lleva entre 30 y 60 minutos, incluyendo la instalación de nuevos latiguillos y la verificación de estanqueidad.'
      },
      {
        question: '¿Reparáis cisternas de inodoro que pierden agua de forma continua o no cargan correctamente?',
        answer: 'Sí, cambiamos la válvula de descarga, el grifo flotador o las juntas de goma de la cisterna para detener la pérdida incesante de agua.'
      },
      {
        question: '¿Qué ventajas ofrece instalar una grifería termostática frente a un grifo monomando estándar?',
        answer: 'La grifería termostática mantiene la temperatura del agua constante, evita quemaduras accidentales al ducharse y reduce el consumo de agua al no tener que regular el caudal manualmente.'
      },
      {
        question: '¿Podéis instalar cisternas empotradas tipo Geberit o grifería integrada en pared?',
        answer: 'Sí, disponemos de fontaneros especialistas en instalaciones empotradas en tabiques de cartón yeso (pladur) o fábrica de ladrillo.'
      },
      {
        question: '¿Sustituís los latiguillos flexibles antiguos para evitar reventones de agua accidentales?',
        answer: 'Siempre que cambiamos un grifo revisamos el estado de los latiguillos y recomendamos cambiarlos por latiguillos flexibles de acero inoxidable reforzado.'
      }
    ]
  },
  {
    id: 'fontaneria-industrial-barcelona',
    slug: 'fontaneria-industrial-barcelona',
    title: 'Fontanería Industrial y Locales Comerciales',
    shortDescription: 'Instalaciones hidráulicas para naves industriales, restaurantes y comercios en Barcelona.',
    metaTitle: 'Fontanería Industrial en Barcelona | Redes de Agua Comercial',
    metaDescription: 'Servicios de fontanería industrial para naves, restaurantes y hoteles en Barcelona. Mantenimiento y montaje de redes de saneamiento.',
    h1: 'Fontanería Industrial y Comercial en Barcelona',
    heroText: 'Proyectos de fontanería para naves industriales, hostelería y superficies comerciales. Separadores de grasas y redes de gran caudal.',
    iconName: 'Factory',
    kd: 5,
    priority: 'BAJA',
    phase: 2,
    isUrgent: false,
    sections: [
      {
        title: 'Instalaciones de saneamiento y fontanería de gran capacidad',
        content: 'Diseñamos y ejecutamos redes de fluidos para la industria y el sector servicios en todo el AMB cumpliendo con las exigencias sanitarias.',
        bulletPoints: [
          'Instalación de separadores de grasas homologados para cocinas industriales.',
          'Montaje de baterías de contadores de gran diámetro.',
          'Redes de tuberías de inoxidable, cobre industrial y polietileno de alta densidad.'
        ]
      }
    ],
    faqs: [
      {
        question: '¿Realizáis mantenimiento preventivo hidráulico para naves industriales, hoteles y restaurantes?',
        answer: 'Sí, elaboramos contratos de mantenimiento preventivo a medida para revisar descalcificadores industriales, separadores de grasas, redes de saneamiento y grupos de presión.'
      },
      {
        question: '¿Es obligatoria la instalación de separadores de grasas en cocinas de hostelería en Barcelona?',
        answer: 'Sí, la normativa municipal y autonómica de saneamiento exige que restaurantes y cocinas industriales instalen arquetas separadoras de grasas homologadas para evitar vertidos al alcantarillado.'
      },
      {
        question: '¿Podéis diseñar e instalar baterías de contadores de agua de gran caudal para edificios comerciales?',
        answer: 'Sí, instalamos y renovamos baterías de contadores divisionarios de gran diámetro en acero inoxidable o polietileno homologado.'
      },
      {
        question: '¿Qué materiales específicos utilizamos en redes de tuberías industriales y colectores comerciales?',
        answer: 'Trabajamos con acero inoxidable AISI 316, polietileno de alta densidad (PE100) electrosoldado y cobre industrial de gran calibre.'
      },
      {
        question: '¿Ofrecéis servicio de respuesta urgente para averías que paralicen la actividad de un negocio?',
        answer: 'Entendemos que una rotura hidráulica en un restaurante u hotel requiere solución inmediata; por ello disponemos de técnicos comerciales de urgencia.'
      },
      {
        question: '¿Emitís informes y certificaciones técnicas necesarias para inspecciones municipales o sanitarias?',
        answer: 'Sí, entregamos la documentación técnica, boletines de agua e informes periciales requeridos por la administración pública o sanidad.'
      }
    ]
  }
];
