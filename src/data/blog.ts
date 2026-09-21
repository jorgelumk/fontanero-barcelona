export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  h1: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  content: string;
  faqs?: FAQItem[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'como-desatascar-un-fregadero',
    h1: 'Cómo desatascar un fregadero: 6 métodos que funcionan',
    title: 'Cómo desatascar un fregadero: 6 métodos que funcionan',
    metaTitle: 'Cómo desatascar un fregadero: 6 métodos que funcionan',
    metaDescription: 'Guía paso a paso para desatascar el fregadero con métodos caseros y cuándo dejar de insistir y llamar a un profesional. Sin dañar las tuberías.',
    excerpt: 'Guía paso a paso para desatascar el fregadero con métodos caseros y cuándo dejar de insistir y llamar a un profesional. Sin dañar las tuberías.',
    category: 'Desatascos y Limpieza',
    readTime: '7 min de lectura',
    date: '1 de Septiembre, 2026',
    author: 'Equipo Técnico Fontaneros Barcelona 24h',
    image: '/images/desatascar-fregadero-atascado.jpg',
    content: `
      <p class="lead">
        El fregadero que traga despacio es la avería doméstica más común y también la que más gente empeora intentando arreglarla. Antes de verter nada por el desagüe, conviene entender qué lo está obstruyendo.
      </p>

      <p>
        En una cocina el tapón casi nunca es un objeto. Es una acumulación de grasa que se ha ido solidificando en las paredes de la tubería, mezclada con restos de comida y jabón. Por eso los métodos que funcionan son los que disuelven o arrastran esa grasa, y por eso los productos agresivos suelen fallar: atacan la superficie del tapón pero no lo eliminan.
      </p>

      <h2>1. Agua muy caliente</h2>
      <p>
        El método más simple y el que más veces resuelve un atasco incipiente. Hierve dos litros de agua y viértelos en tres tandas, esperando un minuto entre cada una. El calor reblandece la grasa y el peso del agua la arrastra.
      </p>
      <p>
        Una advertencia importante: si tu desagüe es de PVC, usa agua caliente pero no hirviendo. El PVC empieza a deformarse por encima de los 60 grados y una tubería deformada es un problema mucho más caro que un atasco.
      </p>

      <h2>2. Bicarbonato y vinagre</h2>
      <p>
        Es el remedio casero más buscado y sí funciona, siempre que el atasco sea de grasa y no esté muy compactado.
      </p>
      <p>
        Retira el agua estancada que puedas. Vierte media taza de bicarbonato directamente por el desagüe, empujándolo con una cuchara si hace falta. Añade una taza de vinagre blanco. Tapa el desagüe con un trapo para que la reacción empuje hacia abajo en lugar de hacia arriba. Espera veinte minutos y aclara con agua caliente.
      </p>

      <h2>3. Desatascador de goma</h2>
      <p>
        La técnica importa más que la fuerza. Llena el fregadero con unos cinco centímetros de agua para que la ventosa haga sello. Si tienes fregadero de dos senos, tapa el segundo desagüe con un trapo húmedo o toda la presión se escapará por ahí. Bombea con movimientos cortos y secos, unas quince veces, y retira la ventosa de golpe.
      </p>

      <h2>4. Limpiar el sifón</h2>
      <p>
        Si los métodos anteriores no han funcionado, el tapón está en el sifón, esa curva en forma de U bajo el fregadero. Es donde se acumula casi todo.
      </p>
      <p>
        Coloca un cubo debajo, afloja las dos tuercas con la mano o con una llave inglesa, retira la pieza y límpiala. Es sucio pero no tiene complicación. Al montarlo, revisa que la junta de goma esté bien asentada.
      </p>

      <h2>5. Sonda manual</h2>
      <p>
        Para atascos más profundos, una sonda de fontanería (un cable flexible con manivela) llega donde no llega el sifón. Introdúcela girando, sin forzar. Si notas resistencia dura y no cede, no insistas: podrías estar empujando el tapón hacia un tramo más estrecho.
      </p>

      <h2>6. Lo que no debes hacer nunca</h2>
      <p>
        <strong>Sosa cáustica y productos químicos agresivos.</strong> Generan calor, dañan las juntas y las tuberías de PVC, y si el atasco no cede te dejan el desagüe lleno de un líquido corrosivo que luego alguien tendrá que manipular.
      </p>
      <p>
        <strong>Mezclar productos de limpieza.</strong> Combinar lejía con amoniaco o con productos antical libera gases tóxicos. Nunca mezcles dos productos distintos en un desagüe.
      </p>
      <p>
        <strong>Insistir con la sonda a ciegas.</strong> En tuberías antiguas se puede perforar un codo. La reparación cuesta mucho más que el desatasco.
      </p>

      <h2>Cuándo llamar a un profesional</h2>
      <p>
        Hay cuatro señales de que el problema no está en tu fregadero:
      </p>
      <ul>
        <li>El atasco vuelve cada pocas semanas</li>
        <li>Se atasca más de un desagüe de la casa a la vez</li>
        <li>Sale <a href="/blog/olor-a-alcantarilla-en-casa">olor a alcantarilla</a> junto con el atasco</li>
        <li>El agua sube por otro desagüe cuando vacías el fregadero</li>
      </ul>
      <p>
        En esos casos la obstrucción está en la bajante común o en el colector del edificio, no en tu tramo, y ningún método casero va a resolverlo. Un <a href="/desatascos-barcelona">desatasco profesional en Barcelona</a> con máquina eléctrica o agua a presión elimina el tapón entero en lugar de perforarlo, que es la diferencia entre resolverlo y aplazarlo un mes.
      </p>
      <p>
        En Fontaneros Barcelona 24h atendemos desatascos las 24 horas en Barcelona y área metropolitana. Somos <a href="/">fontaneros en Barcelona</a> con más de diez profesionales en plantilla, así que la respuesta es rápida incluso de noche.
      </p>

      <div class="my-10 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">¿Necesitas ayuda con un desatasco urgente?</h3>
          <p class="text-sm text-slate-600 mb-0">
            En <strong>Fontaneros Barcelona 24h</strong> acudimos en menos de 30 minutos a cualquier punto de Barcelona y AMB.
          </p>
        </div>
        <a href="tel:+34657144186" class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider no-underline inline-block">
          Llamar al 657 144 186
        </a>
      </div>
    `,
    faqs: [
      {
        question: '¿Cuánto tarda en desatascarse un fregadero con bicarbonato y vinagre?',
        answer: 'Entre veinte y treinta minutos de reposo antes de aclarar con agua caliente. Si tras dos intentos el agua sigue sin bajar, el tapón está demasiado compactado y hará falta desmontar el sifón o usar una sonda.'
      },
      {
        question: '¿Es malo usar sosa cáustica en el fregadero?',
        answer: 'Sí. Genera calor al reaccionar, deteriora las juntas de goma y puede deformar las tuberías de PVC. Además, si no resuelve el atasco deja el desagüe lleno de un producto corrosivo que complica cualquier intervención posterior.'
      },
      {
        question: '¿Por qué se atasca el fregadero una y otra vez?',
        answer: 'Si el atasco reaparece cada pocas semanas, la obstrucción no está en tu sifón sino en la bajante del edificio. Requiere una inspección con cámara para localizar el punto exacto.'
      }
    ]
  },
  {
    slug: 'como-purgar-los-radiadores',
    h1: 'Cómo purgar los radiadores paso a paso',
    title: 'Cómo purgar los radiadores paso a paso | Guía de Fontanería',
    metaTitle: 'Cómo purgar los radiadores paso a paso | Guía 2026',
    metaDescription: 'Aprende a purgar los radiadores correctamente, con la calefacción apagada, y a revisar la presión de la caldera después. Guía de fontaneros profesionales.',
    excerpt: 'Aprende a purgar los radiadores correctamente, con la calefacción apagada, y a revisar la presión de la caldera después. Guía de fontaneros profesionales.',
    category: 'Calefacción y Calderas',
    readTime: '6 min de lectura',
    date: '3 de Septiembre, 2026',
    author: 'Equipo Técnico Fontaneros Barcelona 24h',
    image: '/images/purgar-radiadores-llave-purga.jpg',
    content: `
      <p class="lead">
        Si tus radiadores calientan por abajo pero siguen fríos por arriba, o hacen un ruido de borboteo cuando arranca la calefacción, tienen aire dentro. Purgarlos es una de las pocas operaciones de fontanería que cualquiera puede hacer en casa sin herramientas especiales, y hacerlo cada otoño reduce el consumo de forma apreciable.
      </p>

      <h2>Por qué se llenan de aire</h2>
      <p>
        El circuito de calefacción es cerrado y está lleno de agua a presión. Con el tiempo entra aire por microfugas en juntas y purgadores, y también se genera por la propia corrosión interna del sistema. Como el aire pesa menos que el agua, se acumula en la parte alta de los radiadores y bloquea la circulación justo donde más se nota.
      </p>

      <h2>Con la calefacción encendida o apagada</h2>
      <p>
        Esta es la duda más frecuente y la respuesta es clara: <strong>apagada</strong>.
      </p>
      <p>
        Purga siempre con la caldera apagada y los radiadores fríos, después de al menos una hora sin funcionar. Con el sistema en marcha, la bomba mantiene el agua en movimiento y el aire no se ha depositado todavía en la parte alta, así que la purga sale incompleta. Además el agua del circuito puede superar los 70 grados y existe riesgo real de quemadura.
      </p>

      <h2>Paso a paso</h2>
      <p><strong>1. Apaga la caldera</strong> y espera a que los radiadores se enfríen del todo.</p>
      <p><strong>2. Empieza por el radiador más cercano a la caldera</strong> y avanza alejándote. Si la vivienda tiene varias plantas, empieza por la más baja.</p>
      <p><strong>3. Localiza el purgador</strong>, en el lateral superior del radiador, en el extremo opuesto a la llave de paso. Es un pequeño tornillo cuadrado o con ranura.</p>
      <p><strong>4. Coloca un recipiente debajo</strong> y un trapo. Va a salir agua sucia y mancha.</p>
      <p><strong>5. Abre despacio</strong>, un cuarto de vuelta, con la llave de purga cuadrada. Oirás salir el aire.</p>
      <p><strong>6. Cierra en cuanto salga agua limpia y continua</strong>, sin burbujas. No hace falta apretar con fuerza: se daña la junta.</p>
      <p><strong>7. Repite en todos los radiadores</strong> siguiendo el orden.</p>

      <h2>El paso que casi todo el mundo olvida</h2>
      <p>
        Al purgar has sacado agua del circuito, así que <strong>la presión de la caldera ha bajado</strong>. Si no la recuperas, la caldera puede bloquearse o trabajar mal.
      </p>
      <p>
        Mira el manómetro. Debe marcar entre 1 y 1,5 bares en frío. Si está por debajo, abre la llave de llenado hasta alcanzar ese valor y ciérrala bien. Es un error frecuente dejarla entreabierta, lo que sobrepresiona el circuito y acaba disparando la válvula de seguridad.
      </p>
      <p>
        Tienes el detalle completo en nuestra guía sobre la <a href="/blog/presion-de-la-caldera">presión de la caldera</a>.
      </p>

      <h2>Radiadores antiguos de hierro fundido</h2>
      <p>
        En instalaciones antiguas el purgador puede estar agarrotado por la cal. No lo fuerces: el riesgo de partirlo y provocar una fuga a presión es alto. Aplica un producto desoxidante, espera y prueba con suavidad. Si no cede, es trabajo de profesional.
      </p>

      <h2>Cuándo el problema no es el aire</h2>
      <p>
        Purgar no arregla todo. Si después de purgar correctamente:
      </p>
      <ul>
        <li>El radiador sigue frío entero</li>
        <li>Está frío por abajo y caliente por arriba (al revés de lo normal)</li>
        <li>Hay que purgar cada pocas semanas</li>
      </ul>
      <p>
        no tienes aire, tienes otra cosa. Frío por abajo suele significar lodos acumulados y el circuito necesita un lavado químico. Aire recurrente significa que entra por algún punto, normalmente una microfuga o un vaso de expansión agotado.
      </p>
      <p>
        En esos casos conviene una revisión. Nuestro servicio de <a href="/reparacion-de-calderas-barcelona">reparación de calderas en Barcelona</a> incluye diagnóstico del circuito completo, no solo del aparato. Somos <a href="/">fontaneros en Barcelona</a> con instaladores de gas autorizados.
      </p>

      <div class="my-10 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">¿Problemas con tu caldera o calefacción?</h3>
          <p class="text-sm text-slate-600 mb-0">
            Consúltanos por teléfono o WhatsApp para atención urgente las 24 horas.
          </p>
        </div>
        <a href="tel:+34657144186" class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider no-underline inline-block">
          Llamar al 657 144 186
        </a>
      </div>
    `,
    faqs: [
      {
        question: '¿Se purgan los radiadores con la calefacción encendida o apagada?',
        answer: 'Apagada y con los radiadores fríos. Con el sistema en marcha el aire no se ha acumulado en la parte alta y la purga sale incompleta, además del riesgo de quemadura con agua a más de 70 grados.'
      },
      {
        question: '¿En qué orden hay que purgar los radiadores?',
        answer: 'Empezando por el más cercano a la caldera y avanzando hacia el más lejano. En viviendas de varias plantas, de la planta más baja a la más alta.'
      },
      {
        question: '¿Por qué baja la presión de la caldera después de purgar?',
        answer: 'Porque al purgar sale agua del circuito además del aire. Hay que rellenar hasta dejar el manómetro entre 1 y 1,5 bares en frío y cerrar bien la llave de llenado.'
      }
    ]
  },
  {
    slug: 'cisterna-pierde-agua',
    h1: 'La cisterna pierde agua: causas y cómo arreglarla',
    title: 'La cisterna pierde agua: causas y cómo arreglarla | Guía Completa',
    metaTitle: 'La cisterna pierde agua: causas y cómo arreglarla',
    metaDescription: 'Si oyes correr el agua sin parar o ves un hilo cayendo en la taza, la cisterna pierde. Te explicamos las tres causas habituales y cómo solucionarlas.',
    excerpt: 'Si oyes correr el agua sin parar o ves un hilo cayendo en la taza, la cisterna pierde. Te explicamos las tres causas habituales y cómo solucionarlas.',
    category: 'Reparaciones Domésticas',
    readTime: '6 min de lectura',
    date: '5 de Septiembre, 2026',
    author: 'Equipo Técnico Fontaneros Barcelona 24h',
    image: '/images/cisterna-pierde-agua-mecanismo.jpg',
    content: `
      <p class="lead">
        Una cisterna que gotea desperdicia entre 100 y 200 litros al día sin que se note en ningún charco. Se va directamente al desagüe y aparece a final de trimestre en la factura, multiplicada. Es la fuga más cara de las que pasan desapercibidas.
      </p>

      <h2>Cómo confirmar que pierde</h2>
      <p>
        A veces se oye un siseo continuo y no hay duda. Cuando la pérdida es pequeña, hay un truco sencillo: echa unas gotas de colorante alimentario en la cisterna y no tires de la cadena. Espera treinta minutos. Si aparece color en la taza, la válvula de descarga está dejando pasar agua.
      </p>

      <h2>Causa 1: la goma de la válvula de descarga</h2>
      <p>
        Es la más frecuente, con diferencia. La junta de goma que sella la salida hacia la taza se endurece y se deforma con los años y la cal, y deja de asentar bien.
      </p>
      <p>
        El síntoma es un hilo de agua cayendo constantemente por la pared interior de la taza. La solución es sustituir la goma, una pieza de pocos euros disponible en cualquier ferretería. Hay que cerrar la llave de paso, vaciar la cisterna, desmontar el mecanismo de descarga y cambiarla.
      </p>
      <p>
        Si tienes una cisterna Roca de doble pulsador, este es el fallo habitual y la pieza es específica del modelo. Conviene llevar la antigua a la tienda para comparar.
      </p>

      <h2>Causa 2: el flotador mal ajustado</h2>
      <p>
        Si el agua rebosa por el tubo de rebosadero (ese tubo vertical del interior), el problema es que la cisterna se llena por encima del nivel correcto.
      </p>
      <p>
        El flotador debe cortar la entrada de agua unos dos centímetros por debajo del borde del rebosadero. En los mecanismos modernos se ajusta con un clip o un tornillo sobre la varilla. Bájalo un poco y vuelve a probar.
      </p>

      <h2>Causa 3: la válvula de entrada agotada</h2>
      <p>
        Si el flotador está bien colocado pero la cisterna no deja de llenarse, la válvula de entrada ya no cierra. La cal es la culpable habitual en Barcelona, donde el agua es especialmente dura.
      </p>
      <p>
        En algunos casos basta con desmontarla y limpiar la cal con vinagre. Cuando la membrana interna está dañada, hay que sustituir la válvula completa.
      </p>

      <h2>Por qué en Barcelona pasa más</h2>
      <p>
        El agua de Barcelona tiene una dureza alta, lo que significa mucho calcio y magnesio disueltos. Esa cal se deposita en gomas, membranas y asientos de válvula y acorta su vida útil de forma notable respecto a zonas de agua blanda.
      </p>
      <p>
        Es el mismo motivo por el que aquí los grifos gotean antes y los termos duran menos. Si te interesa el tema, lo explicamos en detalle en <a href="/blog/agua-del-grifo-barcelona-potable">el agua del grifo de Barcelona</a>.
      </p>

      <h2>Cuándo llamar a un fontanero</h2>
      <p>
        Puedes resolver tú mismo un cambio de goma o un ajuste de flotador. Merece la pena llamar si:
      </p>
      <ul>
        <li>La cisterna es empotrada, de las que van dentro del tabique</li>
        <li>Has cambiado la goma y sigue perdiendo</li>
        <li>La llave de paso está agarrotada y no cierra</li>
        <li>Ves humedad en la pared o en el suelo alrededor del inodoro</li>
      </ul>
      <p>
        Ese último punto es importante: si además de perder hacia la taza hay humedad exterior, la fuga no está solo en el mecanismo y conviene revisarla antes de que afecte al vecino de abajo.
      </p>
      <p>
        Nuestro servicio de <a href="/cambio-de-grifos-barcelona">reparación e instalación de sanitarios en Barcelona</a> cubre cisternas, grifería y mecanismos. Somos <a href="/">fontaneros en Barcelona</a> disponibles las 24 horas.
      </p>

      <div class="my-10 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">¿Necesitas reparar tu inodoro o cisterna?</h3>
          <p class="text-sm text-slate-600 mb-0">
            Llámanos o escríbenos por WhatsApp al 657 144 186.
          </p>
        </div>
        <a href="tel:+34657144186" class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider no-underline inline-block">
          Llamar al 657 144 186
        </a>
      </div>
    `,
    faqs: [
      {
        question: '¿Cuánta agua gasta una cisterna que pierde?',
        answer: 'Entre 100 y 200 litros diarios en una pérdida continua, lo que supone entre 9.000 y 18.000 litros en un trimestre. Es la fuga doméstica que más encarece la factura sin dejar rastro visible.'
      },
      {
        question: '¿Cómo sé si mi cisterna pierde agua?',
        answer: 'Echa unas gotas de colorante alimentario en la cisterna y espera media hora sin tirar de la cadena. Si aparece color en la taza, la válvula de descarga está dejando pasar agua.'
      },
      {
        question: '¿Por qué la cisterna Roca de doble pulsador pierde agua?',
        answer: 'Casi siempre por el deterioro de la goma de la válvula de descarga, que se endurece con la cal. Es una pieza específica del modelo y conviene llevar la antigua a la tienda para comprar la correcta.'
      }
    ]
  },
  {
    slug: 'como-desatascar-un-wc',
    h1: 'Cómo desatascar un WC sin llamar al fontanero',
    title: 'Cómo desatascar un WC sin llamar al fontanero | Guía Urgencias',
    metaTitle: 'Cómo desatascar un WC sin llamar al fontanero',
    metaDescription: 'Métodos efectivos para desatascar el inodoro, qué hacer si el agua está a punto de rebosar y en qué casos el atasco no está en tu taza sino en la bajante.',
    excerpt: 'Métodos efectivos para desatascar el inodoro, qué hacer si el agua está a punto de rebosar y en qué casos el atasco no está en tu taza sino en la bajante.',
    category: 'Desatascos y Urgencias',
    readTime: '7 min de lectura',
    date: '7 de Septiembre, 2026',
    author: 'Equipo Técnico Fontaneros Barcelona 24h',
    image: '/images/como-desatascar-un-wc.jpg',
    content: `
      <p class="lead">
        Lo primero, antes de cualquier método: <strong>no vuelvas a tirar de la cadena</strong>. Es el impulso natural y es exactamente lo que provoca que el baño acabe inundado. Si la taza está llena y el agua no baja, otra descarga solo añade siete litros más.
      </p>
      <p>
        Si el agua está subiendo peligrosamente, levanta la tapa de la cisterna y sujeta con la mano el flotador hacia arriba, o cierra directamente la llave de paso que hay junto al inodoro. Eso corta la entrada de agua y te da margen.
      </p>

      <h2>Espera veinte minutos</h2>
      <p>
        Suena a poco, pero funciona más veces de lo que parece. Muchos atascos de inodoro son de papel higiénico, que se disgrega solo. Con la taza llena, la presión del agua ayuda. Si al cabo de veinte minutos el nivel ha bajado algo, el tapón está cediendo y probablemente se resuelva con agua caliente.
      </p>

      <h2>Agua caliente y jabón</h2>
      <p>
        Vierte medio vaso de jabón lavavajillas en la taza y déjalo bajar dos minutos: es lubricante y ayuda a deslizar el tapón. Después añade unos cuatro litros de agua caliente, no hirviendo, desde una altura de medio metro. La combinación de temperatura, lubricación y golpe de caída resuelve la mayoría de los atascos domésticos.
      </p>
      <p>
        <strong>Importante:</strong> nunca agua hirviendo. La porcelana sanitaria puede agrietarse por choque térmico, y cambiar una taza cuesta bastante más que un desatasco.
      </p>

      <h2>El desatascador, bien usado</h2>
      <p>
        El desatascador de inodoro no es el mismo que el de fregadero. Necesitas el que tiene una prolongación de goma en el centro, que es la que encaja en el sifón de la taza.
      </p>
      <p>
        Asegúrate de que hay agua suficiente para cubrir la campana. Encájala en el orificio de salida, presiona hacia abajo con firmeza y tira hacia arriba con decisión, unas quince veces. El movimiento útil es el de succión, no el de empuje: estás intentando aflojar el tapón, no empujarlo más adentro.
      </p>

      <h2>La sonda de inodoro</h2>
      <p>
        Si el desatascador falla, una sonda específica para WC (con la punta protegida para no rayar la porcelana) alcanza el codo del sifón. Introdúcela girando la manivela con suavidad. En cuanto notes el tapón, sigue girando sin empujar fuerte.
      </p>

      <h2>Lo que no debes hacer</h2>
      <p>
        <strong>Sosa cáustica en el inodoro.</strong> No disuelve papel ni residuos orgánicos compactados, se queda estancada en el sifón y convierte cualquier intervención posterior en peligrosa. Si luego llamas a un fontanero, tiene derecho a negarse a trabajar con producto cáustico en la taza.
      </p>
      <p>
        <strong>Una percha de alambre.</strong> Raya el esmalte interior de la porcelana, y una vez rayada esa zona acumula suciedad y el inodoro se atasca con más facilidad.
      </p>
      <p>
        <strong>Objetos duros para empujar.</strong> Si el atasco lo causa un objeto (una toallita, un juguete, un bastoncillo), empujarlo lo lleva a la bajante y convierte un problema de cinco minutos en una obra.
      </p>

      <h2>Cuándo el atasco no está en tu inodoro</h2>
      <p>
        Hay señales que indican que el problema está más abajo, en la bajante del edificio, y ahí no hay método casero que valga:
      </p>
      <ul>
        <li>Al tirar de la cadena, sube agua por la ducha o por el bidé</li>
        <li>Se atascan varios sanitarios a la vez</li>
        <li>Sale <a href="/blog/olor-a-alcantarilla-en-casa">olor a alcantarilla</a> de forma persistente</li>
        <li>El atasco se repite cada pocas semanas</li>
      </ul>
      <p>
        En comunidades de Barcelona con instalaciones antiguas esto es frecuente, sobre todo en fincas con bajantes originales. Requiere inspección con cámara para localizar el punto exacto y máquina de agua a presión para limpiarlo.
      </p>
      <p>
        Atendemos <a href="/desatascos-barcelona">desatascos urgentes en Barcelona</a> las 24 horas, incluidos fines de semana y festivos. Somos <a href="/">fontaneros en Barcelona</a> con más de diez profesionales, así que en una urgencia de noche hay alguien disponible de verdad.
      </p>

      <div class="my-10 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">¿WC atascado que no cede?</h3>
          <p class="text-sm text-slate-600 mb-0">
            Llegamos en 30 minutos. Llama al 657 144 186 o escríbenos por WhatsApp.
          </p>
        </div>
        <a href="tel:+34657144186" class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider no-underline inline-block">
          Llamar al 657 144 186
        </a>
      </div>
    `,
    faqs: [
      {
        question: '¿Qué hago si el inodoro está a punto de rebosar?',
        answer: 'No tires de la cadena otra vez. Cierra la llave de paso junto al inodoro o levanta la tapa de la cisterna y sujeta el flotador hacia arriba para cortar la entrada de agua.'
      },
      {
        question: '¿Se puede echar agua hirviendo en el inodoro para desatascarlo?',
        answer: 'No. La porcelana puede agrietarse por choque térmico. Usa agua caliente pero no hirviendo, a unos 60 grados como máximo.'
      },
      {
        question: '¿Por qué sube agua por la ducha cuando tiro de la cadena?',
        answer: 'Porque la obstrucción está en la bajante común del edificio y no en tu inodoro. El agua busca la salida más próxima. Requiere intervención profesional con inspección de cámara.'
      }
    ]
  },
  {
    slug: 'presion-de-la-caldera',
    h1: 'Presión de la caldera: cuál es la correcta y cómo ajustarla',
    title: 'Presión de la caldera: cuál es la correcta y cómo ajustarla',
    metaTitle: 'Presión de la caldera: cuál es la correcta y cómo ajustarla',
    metaDescription: 'La presión de la caldera debe estar entre 1 y 1,5 bares en frío. Te explicamos cómo subirla, cómo bajarla y qué significa que no pare de caer.',
    excerpt: 'La presión de la caldera debe estar entre 1 y 1,5 bares en frío. Te explicamos cómo subirla, cómo bajarla y qué significa que no pare de caer.',
    category: 'Calefacción y Calderas',
    readTime: '7 min de lectura',
    date: '9 de Septiembre, 2026',
    author: 'Equipo Técnico Fontaneros Barcelona 24h',
    image: '/images/presion-caldera-manometro.jpg',
    content: `
      <p class="lead">
        El manómetro de la caldera es ese reloj pequeño de la parte frontal o inferior. Marca la presión del circuito de calefacción y es el indicador que más averías anticipa, porque casi cualquier problema del circuito acaba reflejándose ahí.
      </p>

      <h2>Cuál es la presión correcta</h2>
      <p>
        <strong>Entre 1 y 1,5 bares con la caldera fría.</strong> Ese es el rango de casi todos los fabricantes y suele estar marcado en verde en la esfera.
      </p>
      <p>
        El matiz de "en frío" es importante. Cuando la calefacción lleva un rato funcionando, el agua se dilata y la presión sube de forma normal hasta 1,8 o incluso 2 bares. Eso no es una avería. Mide siempre con la instalación apagada y fría desde hace al menos una hora.
      </p>
      <p>
        En viviendas de varias plantas el valor puede ser algo mayor, porque la columna de agua suma presión. Como referencia, hay que añadir 0,1 bares por cada metro de altura entre la caldera y el radiador más alto.
      </p>

      <h2>Cómo subir la presión</h2>
      <p>
        Si el manómetro marca por debajo de 1 bar, la caldera puede bloquearse y mostrar un código de error.
      </p>
      <p>
        Localiza la llave de llenado, situada bajo la caldera. Suele ser una llave de color (azul o negra) conectada entre la tubería de agua fría y el circuito. En algunos modelos son dos llaves que hay que abrir a la vez.
      </p>
      <p>
        Ábrela <strong>muy despacio</strong>. Oirás entrar el agua. Vigila el manómetro sin apartar la vista y cierra en cuanto alcances 1,2 bares. El proceso dura segundos, no minutos.
      </p>
      <p>
        Después, comprueba que la llave queda bien cerrada. Dejarla entreabierta es el error más común: la presión sigue subiendo poco a poco hasta que la válvula de seguridad descarga y aparece un charco bajo la caldera.
      </p>

      <h2>Cómo bajar la presión</h2>
      <p>
        Si el manómetro pasa de 2,5 bares en frío, hay que aliviar el circuito.
      </p>
      <p>
        La forma más sencilla y segura es <strong>purgar un radiador</strong>. Coloca un recipiente, abre el purgador un cuarto de vuelta y deja salir agua hasta que el manómetro baje a 1,2 bares. Ciérralo.
      </p>
      <p>
        También se puede descargar por la válvula de seguridad, pero no es recomendable hacerlo a mano: esas válvulas tienden a no volver a sellar bien después de accionarse manualmente, y entonces tienes una fuga permanente.
      </p>

      <h2>Si la presión baja una y otra vez</h2>
      <p>
        Rellenar cada pocos días no es normal. Significa que el agua se está escapando por algún sitio, y las causas habituales son tres:
      </p>
      <p>
        <strong>Una fuga en el circuito.</strong> Puede estar a la vista en una unión de radiador o ser una microfuga en tubería empotrada, que no da la cara hasta que aparece una mancha de humedad. Si sospechas esto, la <a href="/deteccion-de-fugas-de-agua-barcelona">detección de fugas</a> localiza el punto sin picar paredes.
      </p>
      <p>
        <strong>El vaso de expansión agotado.</strong> Es un depósito con una membrana y una cámara de aire que absorbe la dilatación del agua. Cuando la membrana se rompe, la presión oscila mucho: sube demasiado en caliente y cae en frío. Es una avería muy común a partir de los ocho o diez años y la reparación es sencilla.
      </p>
      <p>
        <strong>La válvula de seguridad que gotea.</strong> Si hay humedad bajo la caldera o en el desagüe de seguridad, está descargando de forma continua.
      </p>

      <h2>Si la presión sube sola</h2>
      <p>
        Lo contrario también avisa. Si la presión sube en frío sin que nadie rellene, casi siempre es la llave de llenado que no cierra del todo y deja pasar agua de red al circuito. Se cambia y se resuelve.
      </p>

      <h2>Una advertencia sobre el gas</h2>
      <p>
        Ajustar la presión del agua es una operación doméstica sin riesgo. <strong>Manipular cualquier componente de gas no lo es.</strong> Si la caldera muestra errores de encendido, huele a gas o se apaga sola, no abras el aparato: cierra la llave de gas, ventila y llama a un instalador autorizado.
      </p>
      <p>
        Nuestro servicio de <a href="/reparacion-de-calderas-barcelona">reparación de calderas en Barcelona</a> trabaja con instaladores de gas autorizados y atiende urgencias las 24 horas. Somos <a href="/">fontaneros en Barcelona</a> y área metropolitana.
      </p>

      <div class="my-10 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">¿Tu caldera pierde presión o no funciona?</h3>
          <p class="text-sm text-slate-600 mb-0">
            Llámanos al 657 144 186 para revisión y reparación inmediata.
          </p>
        </div>
        <a href="tel:+34657144186" class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider no-underline inline-block">
          Llamar al 657 144 186
        </a>
      </div>
    `,
    faqs: [
      {
        question: '¿A cuánto tiene que estar la presión de la caldera?',
        answer: 'Entre 1 y 1,5 bares con la caldera fría y apagada desde hace al menos una hora. En caliente es normal que suba hasta 1,8 o 2 bares.'
      },
      {
        question: '¿Cómo se baja la presión de la caldera?',
        answer: 'Purgando un radiador. Coloca un recipiente bajo el purgador, ábrelo un cuarto de vuelta y deja salir agua hasta que el manómetro marque 1,2 bares.'
      },
      {
        question: '¿Por qué baja la presión de la caldera continuamente?',
        answer: 'Por una fuga en el circuito, por el vaso de expansión agotado o por la válvula de seguridad goteando. Si hay que rellenar cada pocos días, requiere revisión profesional.'
      }
    ]
  },
  {
    slug: 'cuanto-cuesta-cambiar-banera-por-plato-de-ducha',
    h1: 'Cuánto cuesta cambiar la bañera por un plato de ducha',
    title: '¿Cuánto cuesta cambiar la bañera por un plato de ducha?',
    metaTitle: 'Cuánto cuesta cambiar la bañera por un plato de ducha 2026',
    metaDescription: 'Qué factores determinan el precio del cambio de bañera por plato de ducha, qué debe incluir un presupuesto serio y cuánto tarda la obra. Guía práctica.',
    excerpt: 'Qué factores determinan el precio del cambio de bañera por plato de ducha, qué debe incluir un presupuesto serio y cuánto tarda la obra. Guía práctica.',
    category: 'Reformas y Baño',
    readTime: '8 min de lectura',
    date: '11 de Septiembre, 2026',
    author: 'Equipo Técnico Fontaneros Barcelona 24h',
    image: '/images/cambio-banera-plato-ducha-precio.jpg',
    content: `
      <p class="lead">
        Es una de las reformas más solicitadas y también una de las que más varía de presupuesto a presupuesto. La diferencia entre dos ofertas para el mismo baño puede ser del doble, y casi nunca es porque una empresa sea más cara: es porque están presupuestando cosas distintas.
      </p>
      <p>
        Este artículo explica qué determina el precio para que puedas comparar presupuestos con criterio.
      </p>

      <h2>Los factores que mueven el precio</h2>
      <p>
        <strong>El tamaño y el material del plato.</strong> Un plato de resina a medida cuesta bastante más que uno estándar de cerámica. La resina permite cortarse al milímetro para aprovechar todo el hueco de la bañera, es antideslizante y es extraplano, pero es la partida más cara del material.
      </p>
      <p>
        <strong>La altura del desagüe.</strong> Aquí está la sorpresa más frecuente. Un plato extraplano necesita menos altura que una bañera, pero el desagüe existente puede quedar demasiado alto. Si hay que rebajar el forjado o modificar el recorrido del desagüe, se añaden horas de trabajo.
      </p>
      <p>
        <strong>El estado del alicatado.</strong> Al retirar la bañera queda una franja sin azulejo en la pared, de entre 15 y 30 centímetros. Si el azulejo original ya no se fabrica, hay que decidir entre alicatar solo esa franja con una pieza distinta, alicatar la zona de ducha completa o cambiar el baño entero. Cada opción cambia el precio de forma sustancial.
      </p>
      <p>
        <strong>La mampara.</strong> Desde una mampara corredera estándar hasta un panel fijo de cristal templado a medida hay una diferencia importante.
      </p>
      <p>
        <strong>La retirada de escombros.</strong> Una bañera de hierro fundido pesa entre 80 y 120 kilos y hay que trocearla o bajarla entera por la escalera. En fincas antiguas de Barcelona sin ascensor, esto es mano de obra real que debe figurar en el presupuesto.
      </p>

      <h2>Qué debe incluir un presupuesto serio</h2>
      <p>
        Desconfía de cualquier presupuesto que no detalle estas partidas por separado:
      </p>
      <ul>
        <li>Retirada de la bañera y de la grifería antigua</li>
        <li>Gestión y transporte de escombros a punto limpio autorizado</li>
        <li>Adaptación del desagüe y comprobación de pendientes</li>
        <li>Plato de ducha, con modelo, medidas y material especificados</li>
        <li>Alicatado de la zona afectada, con solución concreta para la franja</li>
        <li>Grifería nueva, termostática o monomando</li>
        <li>Mampara, con tipo de vidrio y espesor</li>
        <li>Sellado perimetral e impermeabilización</li>
        <li>Días de obra comprometidos</li>
      </ul>
      <p>
        Un presupuesto de una sola línea con un precio cerrado es una invitación a los extras. Los extras aparecen precisamente en lo que no estaba detallado.
      </p>

      <h2>Cuánto tarda</h2>
      <p>
        Un cambio estándar, sin sorpresas estructurales, se resuelve en uno o dos días de trabajo. Los baños que se prolongan una semana suelen ser los que han encontrado un problema de desagüe o de impermeabilización al levantar la bañera.
      </p>
      <p>
        Pregunta siempre si el baño queda operativo al final de cada jornada. En una vivienda con un solo baño, eso importa tanto como el precio.
      </p>

      <h2>Sin obra y sin cambiar los azulejos</h2>
      <p>
        Existen soluciones que instalan el plato sobre la base de la bañera sin picar, y que resuelven la franja de pared con un panel en lugar de alicatar. Son más rápidas y más baratas.
      </p>
      <p>
        Tienen sentido cuando el desagüe lo permite y el azulejo está en buen estado. No son adecuadas si hay humedad previa, si el desagüe necesita modificación o si el suelo tiene desnivel. Un profesional honesto te dirá cuándo esta opción no es aconsejable aunque sea más cómoda de vender.
      </p>

      <h2>Accesibilidad</h2>
      <p>
        Si el motivo del cambio es la movilidad de una persona mayor, hay decisiones que no son de precio sino de seguridad: plato antideslizante con clasificación C3, barra de apoyo anclada a pared maciza (no a tabique hueco), asiento abatible y grifería termostática con bloqueo de temperatura para evitar quemaduras.
      </p>
      <p>
        Merece la pena incorporarlas desde el principio: añadirlas después cuesta más.
      </p>

      <h2>Pide presupuesto</h2>
      <p>
        En Fontaneros Barcelona 24h hacemos el <a href="/cambiar-banera-por-plato-de-ducha-barcelona">cambio de bañera por plato de ducha en Barcelona</a> con presupuesto detallado por partidas y sin coste. Vamos, medimos, revisamos el estado del desagüe y te decimos exactamente qué se puede hacer y qué no.
      </p>
      <p>
        Somos <a href="/">fontaneros en Barcelona</a> y área metropolitana, con más de diez profesionales en plantilla.
      </p>

      <div class="my-10 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">¿Quieres un presupuesto sin compromiso en 24h?</h3>
          <p class="text-sm text-slate-600 mb-0">
            Llámanos al 657 144 186 o escríbenos por WhatsApp.
          </p>
        </div>
        <a href="tel:+34657144186" class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider no-underline inline-block">
          Pedir Presupuesto Gratis
        </a>
      </div>
    `,
    faqs: [
      {
        question: '¿Cuánto tarda el cambio de bañera por plato de ducha?',
        answer: 'Entre uno y dos días de trabajo en un cambio estándar. Se alarga cuando hay que modificar el desagüe o aparece humedad previa bajo la bañera.'
      },
      {
        question: '¿Hay que cambiar todos los azulejos del baño?',
        answer: 'No necesariamente. Al retirar la bañera queda una franja sin alicatar de 15 a 30 cm. Puede resolverse alicatando solo esa zona, cubriéndola con un panel o alicatando la zona de ducha completa.'
      },
      {
        question: '¿Se puede cambiar la bañera por ducha sin obra?',
        answer: 'Sí, cuando el desagüe lo permite y el alicatado está en buen estado. No es aconsejable si hay humedad previa, el desagüe necesita modificación o el suelo tiene desnivel.'
      }
    ]
  },
  {
    slug: 'como-leer-el-contador-de-agua',
    h1: 'Cómo leer el contador de agua y detectar una fuga oculta',
    title: 'Cómo leer el contador de agua y detectar una fuga oculta',
    metaTitle: 'Cómo leer el contador de agua y detectar una fuga oculta',
    metaDescription: 'Aprende a interpretar tu contador de agua, a hacer la prueba de estanqueidad en cinco minutos y a saber si la factura alta viene de una fuga oculta.',
    excerpt: 'Aprende a interpretar tu contador de agua, a hacer la prueba de estanqueidad en cinco minutos y a saber si la factura alta viene de una fuga oculta.',
    category: 'Detección de Fugas',
    readTime: '7 min de lectura',
    date: '13 de Septiembre, 2026',
    author: 'Equipo Técnico Fontaneros Barcelona 24h',
    image: '/images/leer-contador-de-agua-fuga.jpg',
    content: `
      <p class="lead">
        Si te ha llegado una factura de agua desproporcionada y no sabes por qué, el contador te da la respuesta en cinco minutos. Es la herramienta de diagnóstico más sencilla que tienes en casa y casi nadie sabe usarla.
      </p>

      <h2>Cómo se lee</h2>
      <p>
        En un contador analógico, los dígitos <strong>negros marcan metros cúbicos</strong>, que es la unidad en la que factura tu compañía. Un metro cúbico son 1.000 litros.
      </p>
      <p>
        Los dígitos <strong>rojos</strong> (o las agujas pequeñas) marcan fracciones: centenas, decenas y unidades de litro. Para la factura no importan, pero para detectar fugas son la parte crucial.
      </p>
      <p>
        En un contador digital verás la lectura completa en pantalla. Muchos modelos recientes muestran también un icono de gota o un indicador de caudal continuo.
      </p>
      <p>
        Para tu lectura de factura, anota solo los números negros.
      </p>

      <h2>La prueba que detecta una fuga oculta</h2>
      <p>
        Esta es la parte útil. Se hace en cinco minutos y no necesita nada.
      </p>
      <p><strong>1.</strong> Cierra todos los grifos de la casa y asegúrate de que no hay lavadora ni lavavajillas funcionando, ni riego automático, ni nadie usando agua.</p>
      <p><strong>2.</strong> Localiza el contador y fíjate en la <strong>ruedecilla roja o estrella indicadora de caudal</strong>. Es una pieza pequeña que gira al menor paso de agua, mucho más sensible que los dígitos.</p>
      <p><strong>3.</strong> Obsérvala durante un minuto. Si se mueve, aunque sea muy despacio, <strong>hay agua pasando y no la está usando nadie</strong>. Tienes una fuga.</p>
      <p><strong>4.</strong> Si prefieres una prueba más concluyente, anota la lectura completa incluyendo los dígitos rojos, cierra la llave general de tu vivienda y vuelve a leer al cabo de dos horas. Si ha cambiado, la fuga está antes de tu llave de paso (en la acometida o en zona comunitaria). Si no ha cambiado con la llave cerrada pero sí se movía con ella abierta, la fuga está dentro de tu vivienda.</p>
      <p>
        Esa última distinción es importante porque determina a quién corresponde la reparación.
      </p>

      <h2>Dónde suelen estar las fugas que no se ven</h2>
      <p>
        <strong>La cisterna del inodoro.</strong> Es la primera sospechosa y la más común. Puede perder 200 litros diarios sin dejar un solo charco, porque el agua se va directamente al desagüe. Lo explicamos en <a href="/blog/cisterna-pierde-agua">la cisterna pierde agua</a>.
      </p>
      <p>
        <strong>Tubería empotrada en pared o suelo.</strong> Una microfuga puede tardar meses en dar la cara. La primera señal suele ser una <a href="/blog/manchas-de-humedad-en-la-pared">mancha de humedad</a> o un azulejo que suena hueco.
      </p>
      <p>
        <strong>El circuito de calefacción.</strong> Si además tienes que rellenar la caldera a menudo, la fuga puede estar ahí.
      </p>
      <p>
        <strong>La acometida.</strong> El tramo entre el contador y la vivienda, que en fincas antiguas de Barcelona puede ser de plomo o de acero galvanizado corroído.
      </p>

      <h2>¿Puede el contador contar de más?</h2>
      <p>
        Sí, aunque es menos frecuente de lo que la gente supone. Los contadores tienen una vida útil de entre diez y doce años, y al envejecer lo habitual es que cuenten <strong>de menos</strong>, no de más, porque el mecanismo pierde sensibilidad.
      </p>
      <p>
        Cuando un contador da lecturas anormalmente altas suele deberse a aire en la instalación, que hace girar el mecanismo sin que pase agua real. Si sospechas que el contador falla, puedes solicitar a tu compañía suministradora una verificación oficial en laboratorio.
      </p>
      <p>
        Pero antes de eso, haz la prueba de la ruedecilla. En la gran mayoría de casos el contador está bien y lo que hay es una fuga.
      </p>

      <h2>Localizar la fuga sin picar paredes</h2>
      <p>
        Saber que hay una fuga es el primer paso. Encontrarla sin destrozar el baño es el segundo, y ahí hacen falta medios técnicos: geófono para escuchar el punto de escape, gas trazador para tuberías a presión y cámara termográfica para detectar diferencias de temperatura en el muro.
      </p>
      <p>
        Nuestro servicio de <a href="/deteccion-de-fugas-de-agua-barcelona">detección de fugas de agua en Barcelona</a> localiza el punto exacto sin obra y emite informe técnico, válido también para presentarlo al seguro del hogar.
      </p>
      <p>
        Somos <a href="/">fontaneros en Barcelona</a> disponibles las 24 horas.
      </p>

      <div class="my-10 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">¿Sospechas de una fuga de agua en casa?</h3>
          <p class="text-sm text-slate-600 mb-0">
            Llámanos al 657 144 186 para una localización técnica de precisión.
          </p>
        </div>
        <a href="tel:+34657144186" class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider no-underline inline-block">
          Llamar al 657 144 186
        </a>
      </div>
    `,
    faqs: [
      {
        question: '¿Cómo sé si tengo una fuga de agua oculta?',
        answer: 'Cierra todos los grifos de la casa y observa la ruedecilla roja indicadora del contador durante un minuto. Si se mueve sin que nadie use agua, hay una fuga.'
      },
      {
        question: '¿Qué números del contador de agua se leen para la factura?',
        answer: 'Solo los dígitos negros, que marcan metros cúbicos. Los rojos indican fracciones de litro y sirven para detectar fugas, no para facturar.'
      },
      {
        question: '¿Un contador de agua puede contar de más?',
        answer: 'Es poco habitual. Al envejecer suelen contar de menos por pérdida de sensibilidad. Las lecturas anormalmente altas se deben casi siempre a una fuga o a aire en la instalación.'
      }
    ]
  },
  {
    slug: 'como-arreglar-un-grifo-que-gotea',
    h1: 'Cómo arreglar un grifo que gotea paso a paso',
    title: 'Cómo arreglar un grifo que gotea paso a paso | Guía Completa',
    metaTitle: 'Cómo arreglar un grifo que gotea paso a paso',
    metaDescription: 'Un grifo que gotea desperdicia 30 litros al día. Te explicamos cómo cambiar el cartucho de un monomando y la pletina de un grifo de dos mandos.',
    excerpt: 'Un grifo que gotea desperdicia 30 litros al día. Te explicamos cómo cambiar el cartucho de un monomando y la pletina de un grifo de dos mandos.',
    category: 'Reparaciones Domésticas',
    readTime: '6 min de lectura',
    date: '15 de Septiembre, 2026',
    author: 'Equipo Técnico Fontaneros Barcelona 24h',
    image: '/images/grifo-que-gotea-reparacion.jpg',
    content: `
      <p class="lead">
        Un grifo que gotea una vez por segundo desperdicia unos 30 litros al día, más de 10.000 litros al año. Al margen del coste, el goteo continuo acaba dejando una mancha de cal en la porcelana que ya no se quita.
      </p>
      <p>
        La buena noticia es que casi siempre se arregla con una pieza de pocos euros.
      </p>

      <h2>Primero, identifica tu grifo</h2>
      <p>
        <strong>Monomando:</strong> una sola palanca que controla caudal y temperatura. Es el más común en cocinas y baños modernos. Su pieza interna se llama cartucho cerámico.
      </p>
      <p>
        <strong>Bimando o de dos volantes:</strong> un mando para el agua fría y otro para la caliente. Su pieza interna es una pletina o montura, con una junta de goma.
      </p>
      <p>El diagnóstico también depende de dónde gotea:</p>
      <ul>
        <li>Gotea por la boquilla → la pieza interna no cierra</li>
        <li>Gotea por la base del mando → junta tórica desgastada</li>
        <li>Gotea por la conexión bajo el fregadero → flexible o junta de conexión</li>
      </ul>

      <h2>Antes de empezar</h2>
      <p>
        <strong>Cierra la llave de paso</strong> bajo el fregadero o el lavabo. Si no hay llaves individuales, cierra la general de la vivienda. Abre el grifo para vaciar la presión residual.
      </p>
      <p>
        Tapa el desagüe con un trapo. Los tornillos y las juntas son pequeños y el desagüe se los traga.
      </p>

      <h2>Cambiar el cartucho de un monomando</h2>
      <p><strong>1.</strong> Localiza el embellecedor, una pequeña tapa de plástico de color rojo y azul en el lateral o frontal de la palanca. Hazla palanca con un destornillador plano fino.</p>
      <p><strong>2.</strong> Debajo hay un tornillo Allen. Aflójalo con la llave correspondiente y retira la palanca tirando hacia arriba.</p>
      <p><strong>3.</strong> Aparece un aro roscado (la tuerca de fijación). Aflójalo con una llave inglesa o con unos alicates de pico de loro, protegiendo el cromado con un trapo para no rayarlo.</p>
      <p><strong>4.</strong> Extrae el cartucho. Fíjate en su orientación antes de sacarlo.</p>
      <p><strong>5.</strong> Llévalo a la tienda. Los cartuchos varían en diámetro (35 mm y 40 mm son los más comunes) y en el patrón de los orificios de la base. Comprar "uno parecido" no funciona.</p>
      <p><strong>6.</strong> Monta el nuevo en la misma orientación, aprieta la tuerca con firmeza pero sin forzar y recoloca la palanca.</p>

      <h2>Cambiar la pletina de un grifo de dos mandos</h2>
      <p><strong>1.</strong> Retira el embellecedor del volante y afloja el tornillo que hay debajo.</p>
      <p><strong>2.</strong> Extrae el volante. Si está agarrotado por la cal, no tires con violencia: aplica un desincrustante y espera.</p>
      <p><strong>3.</strong> Desenrosca la pletina con una llave fija del tamaño correspondiente.</p>
      <p><strong>4.</strong> En muchos casos basta con sustituir la junta de goma del extremo. Si la pletina está corroída, cambia la pieza entera.</p>
      <p><strong>5.</strong> Antes de montar, revisa el asiento del grifo (la superficie donde apoya la junta). Si está picado por la cal, la junta nueva volverá a gotear en pocas semanas y el grifo habrá que sustituirlo.</p>

      <h2>Por qué en Barcelona duran menos</h2>
      <p>
        El agua de Barcelona es dura, con alto contenido en calcio y magnesio. La cal se deposita en cartuchos, juntas y asientos, y acorta su vida útil de forma apreciable respecto a zonas de agua blanda.
      </p>
      <p>
        Si en tu casa los grifos gotean cada uno o dos años, no es mala suerte ni mala calidad del grifo: es la cal. Un descalcificador reduce el problema de forma significativa y alarga también la vida del termo y la caldera.
      </p>

      <h2>Cuándo merece la pena cambiar el grifo entero</h2>
      <p>
        Repara si el grifo tiene menos de siete u ocho años y el cuerpo está en buen estado. Sustituye si:
      </p>
      <ul>
        <li>El asiento está picado y la junta nueva vuelve a gotear</li>
        <li>El cuerpo del grifo presenta corrosión o pérdida de cromado</li>
        <li>No encuentras recambio porque el modelo está descatalogado</li>
        <li>Gotea por más de un punto a la vez</li>
      </ul>
      <p>
        A partir de cierto punto, el tiempo invertido en reparar cuesta más que un grifo nuevo.
      </p>
      <p>
        Hacemos <a href="/cambio-de-grifos-barcelona">cambio y reparación de grifos en Barcelona</a> con desplazamiento el mismo día. Somos <a href="/">fontaneros en Barcelona</a> las 24 horas.
      </p>

      <div class="my-10 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">¿Prefieres que un fontanero cambie o repare tu grifo?</h3>
          <p class="text-sm text-slate-600 mb-0">
            Llámanos al 657 144 186 o escríbenos por WhatsApp.
          </p>
        </div>
        <a href="tel:+34657144186" class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider no-underline inline-block">
          Llamar al 657 144 186
        </a>
      </div>
    `,
    faqs: [
      {
        question: '¿Cuánta agua desperdicia un grifo que gotea?',
        answer: 'Unos 30 litros al día con un goteo de una gota por segundo, más de 10.000 litros al año.'
      },
      {
        question: '¿Qué pieza hay que cambiar en un grifo monomando que gotea?',
        answer: 'El cartucho cerámico. Hay que llevar el antiguo a la tienda porque varían en diámetro (35 y 40 mm son los más habituales) y en el patrón de la base.'
      },
      {
        question: '¿Por qué vuelve a gotear después de cambiar la junta?',
        answer: 'Porque el asiento del grifo está picado por la cal y la junta nueva no llega a sellar. En ese caso hay que sustituir el grifo completo.'
      }
    ]
  },
  {
    slug: 'golpe-de-ariete-tuberias',
    h1: 'Golpe de ariete: por qué suenan las tuberías al cerrar',
    title: 'Golpe de ariete: por qué suenan las tuberías al cerrar',
    metaTitle: 'Golpe de ariete: por qué suenan las tuberías al cerrar',
    metaDescription: 'Ese golpe seco al cerrar un grifo o al parar la lavadora es el golpe de ariete. Te explicamos por qué ocurre, qué daño provoca y cómo eliminarlo.',
    excerpt: 'Ese golpe seco al cerrar un grifo o al parar la lavadora es el golpe de ariete. Te explicamos por qué ocurre, qué daño provoca y cómo eliminarlo.',
    category: 'Instalaciones y Tuberías',
    readTime: '6 min de lectura',
    date: '17 de Septiembre, 2026',
    author: 'Equipo Técnico Fontaneros Barcelona 24h',
    image: '/images/golpe-de-ariete-tuberias-cobre.jpg',
    content: `
      <p class="lead">
        Cierras el grifo del baño y se oye un golpe seco en la pared. La lavadora termina de llenar y toda la casa retumba. Ese ruido tiene nombre técnico, golpe de ariete, y no es solo una molestia: es una fuerza que está castigando tu instalación cada vez que se produce.
      </p>

      <h2>Qué es exactamente</h2>
      <p>
        El agua dentro de una tubería es una masa en movimiento con inercia. Cuando se cierra una válvula de golpe, esa masa no puede frenar de forma instantánea y choca contra la válvula cerrada, generando una onda de presión que recorre la tubería de ida y vuelta hasta disiparse.
      </p>
      <p>
        El pico de presión puede multiplicar por varias veces la presión normal de la instalación durante una fracción de segundo. Ese pico es lo que oyes.
      </p>

      <h2>Por qué ha aparecido ahora</h2>
      <p>
        Muchas instalaciones antiguas nunca daban golpes y empiezan a hacerlo. Las causas habituales:
      </p>
      <p>
        <strong>Electrodomésticos con electroválvulas.</strong> Lavadoras y lavavajillas cierran la entrada de agua de forma instantánea, mucho más brusca que un grifo manual. Es la causa número uno en viviendas modernas.
      </p>
      <p>
        <strong>Grifos monomando.</strong> Cierran más rápido que los antiguos de volante, que necesitaban varias vueltas.
      </p>
      <p>
        <strong>Presión de red demasiado alta.</strong> Por encima de 4 bares, cualquier cierre genera golpes. Es frecuente en plantas bajas de edificios altos y en zonas donde la compañía mantiene presión elevada.
      </p>
      <p>
        <strong>Tuberías mal sujetas.</strong> Si las abrazaderas se han soltado con los años, el tramo vibra libremente y amplifica el ruido.
      </p>

      <h2>El daño que provoca</h2>
      <p>No es solo ruido. Los picos repetidos de presión:</p>
      <ul>
        <li>Aflojan uniones roscadas y soldaduras</li>
        <li>Deterioran juntas y cartuchos de grifería antes de tiempo</li>
        <li>Fatigan las tuberías, sobre todo en los codos</li>
        <li>Pueden llegar a provocar una rotura en instalaciones ya envejecidas</li>
      </ul>
      <p>
        En fincas antiguas de Barcelona con tuberías de acero galvanizado o de cobre de muchos años, un golpe de ariete persistente es un factor de riesgo real de avería.
      </p>

      <h2>Cómo se soluciona</h2>
      <p>
        <strong>Antiariete o amortiguador hidráulico.</strong> Es la solución técnica correcta. Un pequeño dispositivo con una cámara de aire o un muelle que absorbe la onda de presión. Se instala lo más cerca posible del punto que genera el golpe, normalmente junto a la toma de la lavadora o en la entrada general.
      </p>
      <p>
        <strong>Reductor de presión.</strong> Si la presión de red es alta, un reductor regulable a la entrada de la vivienda resuelve el golpe de ariete y de paso protege toda la instalación y los electrodomésticos. Es la solución más completa cuando el origen es la presión.
      </p>
      <p>
        <strong>Revisar las sujeciones.</strong> Reponer o apretar las abrazaderas reduce mucho el ruido, aunque no elimina la onda de presión.
      </p>
      <p>
        <strong>Cerrar los grifos más despacio.</strong> Es un parche, pero funciona con los cierres manuales. Con las electroválvulas no sirve de nada.
      </p>

      <h2>Cuándo es señal de algo mayor</h2>
      <p>
        Si el golpe de ariete aparece de forma repentina en una instalación que nunca lo había tenido, o si va acompañado de caídas de presión o de ruidos de agua cuando no hay nadie usando grifos, conviene revisar la instalación completa. Puede indicar una válvula deteriorada o un tramo de tubería en mal estado.
      </p>
      <p>
        En instalaciones de más de treinta años, el golpe de ariete suele ser uno de los síntomas que acompañan a una red que se acerca al final de su vida útil. Nuestro servicio de <a href="/renovacion-de-instalaciones-barcelona">renovación de instalaciones de fontanería en Barcelona</a> incluye estudio de presión y diagnóstico del estado de la red. También tratamos instalaciones vetustas en nuestro post sobre <a href="/blog/tuberias-de-plomo">tuberías de plomo</a>.
      </p>
      <p>
        Somos <a href="/">fontaneros en Barcelona</a> y área metropolitana.
      </p>

      <div class="my-10 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">¿Ruidos o golpes en tus tuberías al cerrar el agua?</h3>
          <p class="text-sm text-slate-600 mb-0">
            Llámanos al 657 144 186 para instalar amortiguadores antiariete o reductores de presión.
          </p>
        </div>
        <a href="tel:+34657144186" class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider no-underline inline-block">
          Llamar al 657 144 186
        </a>
      </div>
    `,
    faqs: [
      {
        question: '¿Por qué suenan las tuberías al cerrar el grifo?',
        answer: 'Es el golpe de ariete. El agua en movimiento choca contra la válvula al cerrarse de golpe y genera una onda de presión que recorre la tubería. Lo provocan sobre todo las electroválvulas de lavadoras y lavavajillas.'
      },
      {
        question: '¿El golpe de ariete puede romper una tubería?',
        answer: 'Sí, en instalaciones envejecidas. Los picos de presión repetidos fatigan el material, sobre todo en los codos, y aflojan uniones y soldaduras.'
      },
      {
        question: '¿Cómo se elimina el golpe de ariete?',
        answer: 'Instalando un antiariete cerca del punto que lo genera o un reductor de presión a la entrada de la vivienda si la presión de red supera los 4 bares.'
      }
    ]
  },
  {
    slug: 'olor-a-alcantarilla-en-casa',
    h1: 'Olor a alcantarilla en casa: causas y soluciones',
    title: 'Olor a alcantarilla en casa: causas y soluciones | Guía',
    metaTitle: 'Olor a alcantarilla en casa: causas y soluciones',
    metaDescription: 'Si huele a alcantarilla en el baño o la cocina, casi siempre es el sifón. Te explicamos las cinco causas habituales y cuál requiere un fontanero.',
    excerpt: 'Si huele a alcantarilla en el baño o la cocina, casi siempre es el sifón. Te explicamos las cinco causas habituales y cuál requiere un fontanero.',
    category: 'Saneamiento y Bajantes',
    readTime: '7 min de lectura',
    date: '19 de Septiembre, 2026',
    author: 'Equipo Técnico Fontaneros Barcelona 24h',
    image: '/images/olor-alcantarilla-sifon-lavabo.jpg',
    content: `
      <p class="lead">
        El olor a alcantarilla dentro de una vivienda significa casi siempre lo mismo: hay un punto por el que los gases del desagüe están entrando en lugar de quedarse fuera. Entender cómo se supone que deberían quedarse fuera es la clave para localizar el fallo.
      </p>

      <h2>El sifón, la barrera que lo impide</h2>
      <p>
        Bajo cada desagüe de la casa hay un sifón: esa curva en forma de U o esa botella blanca bajo el lavabo. Su función no es filtrar nada, es retener siempre un poco de agua. Ese tapón de agua es una barrera física que impide que los gases del alcantarillado suban por la tubería.
      </p>
      <p>
        Si el sifón se queda sin agua, la barrera desaparece y el olor entra. De ahí salen la mayoría de los casos.
      </p>

      <h2>Causa 1: un desagüe que no se usa</h2>
      <p>
        Es la causa más frecuente y la más fácil de resolver. En un baño de invitados, un bidé que nadie usa o una casa cerrada varias semanas, el agua del sifón se evapora y deja la tubería abierta.
      </p>
      <p>
        Solución: abrir el grifo de ese desagüe treinta segundos. El olor desaparece en minutos. Si es un punto que se usa muy poco, repítelo una vez al mes.
      </p>

      <h2>Causa 2: el sifón sucio</h2>
      <p>
        En cocinas, la grasa acumulada dentro del sifón se descompone y genera olor propio, aunque el tapón de agua esté intacto. En duchas y lavabos, la acumulación de pelo y jabón hace lo mismo.
      </p>
      <p>
        Solución: desmontar el sifón y limpiarlo. Es sencillo y está explicado en <a href="/blog/como-desatascar-un-fregadero">cómo desatascar un fregadero</a>.
      </p>

      <h2>Causa 3: sifón sin sifón</h2>
      <p>
        Más común de lo que parece, sobre todo en lavadoras, lavavajillas y aires acondicionados instalados por cuenta propia. Si el tubo de desagüe se ha metido directamente en la tubería sin sifón intermedio, no hay barrera de agua y el olor entra de forma permanente.
      </p>
      <p>
        Solución: instalar un sifón adecuado en ese punto.
      </p>

      <h2>Causa 4: sifón vacío por succión</h2>
      <p>
        Cuando el vecino de arriba vacía la bañera, el caudal que baja por la bajante puede arrastrar el aire de tu tramo y succionar el agua de tu sifón. El síntoma es característico: se oye un gorgoteo en tu desagüe cuando no estás usando agua, y después aparece el olor.
      </p>
      <p>
        Esto indica que la bajante no está bien ventilada. Es un problema de la instalación comunitaria, no de tu vivienda, y se resuelve instalando una válvula de aireación.
      </p>

      <h2>Causa 5: rotura o junta deteriorada</h2>
      <p>
        Si el olor es persistente, no cede al llenar los sifones y se nota más en una zona concreta, puede haber una fisura en la bajante o una junta degradada, muchas veces dentro del tabique o del falso techo.
      </p>
      <p>
        En fincas antiguas de Barcelona con bajantes originales de fibrocemento o de fundición, esto es relativamente frecuente. No se resuelve sin localizar el punto exacto.
      </p>

      <h2>Cuándo llamar</h2>
      <p>
        Prueba primero lo sencillo: llena todos los sifones de la casa abriendo cada grifo treinta segundos, incluidos los que no usas nunca, y limpia los sifones de cocina y ducha. Eso resuelve la mayoría de los casos.
      </p>
      <p>Llama a un profesional si:</p>
      <ul>
        <li>El olor persiste después de llenar y limpiar todos los sifones</li>
        <li>Hay gorgoteo en los desagües sin estar usando agua</li>
        <li>El olor afecta a varias viviendas del edificio</li>
        <li>Aparece acompañado de atascos repetidos</li>
      </ul>
      <p>
        En esos casos hace falta una <a href="/inspeccion-y-limpieza-de-tuberias-barcelona">inspección de tuberías con cámara en Barcelona</a> para ver el estado interior de la bajante y localizar el punto de entrada. Es la única forma de no picar a ciegas.
      </p>
      <p>
        Trabajamos con comunidades y administradores de fincas desde nuestra sección de <a href="/fontanero-comunidades-barcelona">fontanero para comunidades</a>. Somos <a href="/">fontaneros en Barcelona</a> con más de diez profesionales en plantilla.
      </p>

      <div class="my-10 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">¿Malos olores persistentes en tu baño o comunidad?</h3>
          <p class="text-sm text-slate-600 mb-0">
            Realizamos inspecciones con cámara e higienización de tuberías las 24h.
          </p>
        </div>
        <a href="tel:+34657144186" class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider no-underline inline-block">
          Llamar al 657 144 186
        </a>
      </div>
    `,
    faqs: [
      {
        question: '¿Por qué huele a alcantarilla en el baño?',
        answer: 'Casi siempre porque el sifón de algún desagüe se ha quedado sin agua. El tapón de agua del sifón es la barrera que impide que los gases del alcantarillado suban por la tubería.'
      },
      {
        question: '¿Cómo quitar el olor a alcantarilla de casa?',
        answer: 'Abre treinta segundos el grifo de todos los desagües, incluidos los que no se usan nunca, para rellenar los sifones. Si persiste, limpia el sifón de la cocina y de la ducha.'
      },
      {
        question: '¿Qué significa que los desagües hagan gorgoteo?',
        answer: 'Que la bajante no está bien ventilada y succiona el agua de tu sifón cuando otro vecino desagua. Se resuelve instalando una válvula de aireación en la instalación comunitaria.'
      }
    ]
  },
  {
    slug: 'manchas-de-humedad-en-la-pared',
    h1: 'Manchas de humedad en la pared: ¿fuga o condensación?',
    title: 'Manchas de humedad en la pared: ¿fuga o condensación?',
    metaTitle: 'Manchas de humedad en la pared: ¿fuga o condensación?',
    metaDescription: 'Aprende a distinguir si la mancha de humedad viene de una fuga de tubería, de capilaridad o de condensación. Cada una tiene una solución distinta.',
    excerpt: 'Aprende a distinguir si la mancha de humedad viene de una fuga de tubería, de capilaridad o de condensación. Cada una tiene una solución distinta.',
    category: 'Detección de Fugas',
    readTime: '7 min de lectura',
    date: '20 de Septiembre, 2026',
    author: 'Equipo Técnico Fontaneros Barcelona 24h',
    image: '/images/manchas-humedad-pared-fuga.jpg',
    content: `
      <p class="lead">
        Antes de pintar encima, hay que saber de dónde viene. Una mancha de humedad puede tener tres orígenes completamente distintos y cada uno requiere una solución diferente. Tapar sin diagnosticar garantiza que la mancha vuelva, normalmente más grande.
      </p>

      <h2>Cómo distinguirlas</h2>
      <p>
        <strong>Fuga de tubería.</strong> La mancha aparece en un punto concreto, suele tener forma más o menos redondeada con bordes definidos, y crece con el tiempo. No depende de la época del año ni del clima. Muchas veces la pintura se abomba o el azulejo suena hueco al golpearlo. Si está cerca de un baño, una cocina o de la vertical de una bajante, es la primera sospecha.
      </p>
      <p>
        <strong>Capilaridad.</strong> Aparece en la parte baja del muro, con una línea de avance más o menos horizontal a 50 o 100 centímetros del suelo. Suele venir acompañada de salitre, un polvo blanco que cristaliza en la superficie y hace saltar la pintura. Es típica de plantas bajas y sótanos.
      </p>
      <p>
        <strong>Condensación.</strong> Aparece en las zonas frías de la vivienda: esquinas, techos, detrás de armarios, alrededor de las ventanas. Es difusa, sin bordes claros, y empeora en invierno. Suele venir con moho negro en puntos.
      </p>

      <h2>La prueba del papel de aluminio</h2>
      <p>
        Si dudas entre fuga y condensación, hay una prueba sencilla que se hace en casa.
      </p>
      <p>
        Pega un cuadrado de papel de aluminio de unos 30 × 30 cm sobre la zona húmeda, sellando bien los cuatro bordes con cinta adhesiva. Déjalo 48 horas.
      </p>
      <ul>
        <li>Si la humedad aparece en la <strong>cara exterior</strong> del papel (la que da a la habitación), es condensación: el vapor del ambiente se está condensando sobre la superficie fría.</li>
        <li>Si aparece en la <strong>cara interior</strong> (la que toca la pared), la humedad viene de dentro del muro: fuga o capilaridad.</li>
      </ul>
      <p>
        No es un método de laboratorio, pero orienta bien y no cuesta nada.
      </p>

      <h2>Si es una fuga</h2>
      <p>
        Hay dos preguntas que responder, y en este orden: dónde está exactamente y de dónde viene el agua.
      </p>
      <p>
        Las fugas que manchan paredes suelen proceder de tubería de agua fría o caliente empotrada, del circuito de calefacción, de la impermeabilización de un plato de ducha o bañera, o de la bajante del edificio. Puedes consultar más detalles en nuestra guía sobre <a href="/blog/como-leer-el-contador-de-agua">cómo leer el contador de agua</a>.
      </p>
      <p>
        Esa última posibilidad importa mucho, porque si el agua viene de una bajante comunitaria o de la vivienda de arriba, la reparación no te corresponde a ti y conviene tenerlo documentado antes de asumir ningún coste.
      </p>

      <h2>Localizarla sin destrozar la pared</h2>
      <p>
        Picar a ojo es la peor opción: se abren varios metros de tabique buscando algo que a menudo está en otro sitio.
      </p>
      <p>
        La localización técnica usa tres medios según el caso. El <strong>geófono</strong> amplifica el sonido del agua escapando a presión y permite situar el punto con precisión. El <strong>gas trazador</strong> se introduce en la tubería vacía y se detecta en superficie con un sensor, útil para fugas muy pequeñas. La <strong>cámara termográfica</strong> muestra las diferencias de temperatura del muro y dibuja el recorrido del agua.
      </p>
      <p>
        El resultado es un punto concreto y una apertura mínima en lugar de una obra.
      </p>

      <h2>El informe para el seguro</h2>
      <p>
        Si tienes seguro de hogar, casi todas las pólizas cubren la localización de la fuga y la reparación del daño, aunque no siempre la sustitución de la tubería. Para tramitarlo necesitas un informe técnico que identifique origen, causa y alcance.
      </p>
      <p>
        Nuestro servicio de <a href="/deteccion-de-fugas-de-agua-barcelona">detección de fugas de agua en Barcelona</a> emite ese informe. Merece la pena pedirlo antes de reparar nada: una vez picada la pared, demostrar el origen es mucho más difícil.
      </p>

      <h2>No pintes encima todavía</h2>
      <p>
        Aunque hayas reparado la fuga, la pared necesita secar antes de tratarla. En un tabique puede llevar de dos a cuatro semanas según el grosor y la ventilación. Pintar sobre un muro húmedo hace que la pintura se levante en poco tiempo y que el salitre vuelva a salir.
      </p>
      <p>
        Somos <a href="/">fontaneros en Barcelona</a> disponibles las 24 horas.
      </p>

      <div class="my-10 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">¿Humedades en paredes o techos?</h3>
          <p class="text-sm text-slate-600 mb-0">
            Localizamos la fuga con precisión termográfica sin romper. Llámanos al 657 144 186.
          </p>
        </div>
        <a href="tel:+34657144186" class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider no-underline inline-block">
          Llamar al 657 144 186
        </a>
      </div>
    `,
    faqs: [
      {
        question: '¿Cómo saber si una mancha de humedad es una fuga o condensación?',
        answer: 'Pega un cuadrado de papel de aluminio sobre la zona sellando los bordes y espera 48 horas. Si la humedad aparece en la cara que da a la habitación es condensación; si aparece en la cara que toca la pared, viene del interior del muro.'
      },
      {
        question: '¿El seguro del hogar cubre la detección de una fuga de agua?',
        answer: 'La mayoría de pólizas cubren la localización y la reparación del daño, aunque no siempre la sustitución de la tubería. Hace falta un informe técnico que identifique origen, causa y alcance.'
      },
      {
        question: '¿Cuánto tarda en secarse una pared después de reparar una fuga?',
        answer: 'Entre dos y cuatro semanas según el grosor del tabique y la ventilación. Pintar antes hace que la pintura se levante en poco tiempo.'
      }
    ]
  },
  {
    slug: 'agua-del-grifo-barcelona-potable',
    h1: '¿Se puede beber el agua del grifo en Barcelona?',
    title: '¿Se puede beber el agua del grifo en Barcelona?',
    metaTitle: '¿Se puede beber el agua del grifo en Barcelona? | 2026',
    metaDescription: 'El agua del grifo de Barcelona es potable y segura, pero es dura. Te explicamos qué significa eso para tu salud, tus tuberías y tus electrodomésticos.',
    excerpt: 'El agua del grifo de Barcelona es potable y segura, pero es dura. Te explicamos qué significa eso para tu salud, tus tuberías y tus electrodomésticos.',
    category: 'Calidad del Agua',
    readTime: '7 min de lectura',
    date: '21 de Septiembre, 2026',
    author: 'Equipo Técnico Fontaneros Barcelona 24h',
    image: '/images/agua-grifo-barcelona-potable.jpg',
    content: `
      <p class="lead">
        Sí. El agua del grifo de Barcelona es potable y cumple los parámetros sanitarios exigidos por la normativa española y europea. Se somete a controles continuos y es perfectamente apta para el consumo.
      </p>
      <p>
        Dicho eso, hay dos matices que explican por qué mucha gente en Barcelona no se la bebe y por qué aquí las instalaciones sufren más que en otras ciudades.
      </p>

      <h2>Por qué sabe distinto</h2>
      <p>
        El agua de Barcelona procede en buena parte del río Llobregat, que atraviesa zonas de formaciones salinas naturales. Eso le da un contenido de sales y cloruros más alto que el de otras redes, y de ahí el sabor característico que muchos describen como salino o metálico.
      </p>
      <p>
        El sabor es una cuestión organoléptica, no sanitaria. Que no guste no significa que no sea segura.
      </p>
      <p>
        Un truco: si el sabor a cloro es lo que te molesta, llena una jarra y déjala reposar destapada en la nevera un par de horas. El cloro es volátil y se disipa.
      </p>

      <h2>La dureza: lo que de verdad afecta a tu casa</h2>
      <p>
        Este es el punto que importa desde el punto de vista de la fontanería. El agua de Barcelona es <strong>agua dura</strong>: contiene una cantidad elevada de calcio y magnesio disueltos.
      </p>
      <p>
        Para la salud no supone ningún problema. Para tus instalaciones, sí.
      </p>
      <p>
        El calcio precipita y se deposita en forma de cal en cualquier superficie por la que pase agua, y especialmente donde se calienta. Las consecuencias concretas son:
      </p>
      <p>
        <strong>Grifería que gotea antes de tiempo.</strong> Los cartuchos cerámicos y las juntas se incrustan de cal y pierden estanqueidad. En Barcelona es normal cambiar un cartucho cada pocos años, cuando en zonas de agua blanda duran mucho más. Puedes revisar la solución en nuestra sección de <a href="/cambio-de-grifos-barcelona">cambio de grifos en Barcelona</a>.
      </p>
      <p>
        <strong>Termos y calderas menos eficientes.</strong> La cal se deposita sobre la resistencia del termo eléctrico y sobre el intercambiador de la caldera. Una capa de cal actúa como aislante: el aparato necesita más energía para calentar lo mismo, y acaba fallando antes.
      </p>
      <p>
        <strong>Mecanismos de cisterna deteriorados.</strong> Es una de las causas más habituales de que <a href="/blog/cisterna-pierde-agua">la cisterna pierda agua</a>.
      </p>
      <p>
        <strong>Reducción de sección en tuberías antiguas.</strong> En instalaciones de acero galvanizado de muchos años, la cal se suma a la corrosión y estrecha el paso, lo que se nota como pérdida de presión progresiva.
      </p>

      <h2>¿Merece la pena un descalcificador?</h2>
      <p>
        Depende de la instalación, pero en Barcelona el argumento es más fuerte que en otras ciudades.
      </p>
      <p>
        Un descalcificador reduce la dureza del agua antes de que entre en la vivienda. Alarga la vida del termo, la caldera, la lavadora, el lavavajillas y la grifería, y reduce el consumo energético del agua caliente.
      </p>
      <p>
        Los puntos a valorar antes de instalarlo: necesita espacio y una toma de desagüe, requiere mantenimiento periódico con sal, y debe estar bien regulado. Un agua excesivamente descalcificada puede resultar corrosiva para algunas instalaciones, así que la regulación no es un detalle menor.
      </p>

      <h2>Filtros para beber</h2>
      <p>
        Si lo que buscas es mejorar el sabor, un filtro de carbón activo (de jarra o de grifo) reduce el cloro y mejora notablemente el gusto. No es un tratamiento sanitario, porque el agua ya es potable, sino de confort.
      </p>
      <p>
        Los equipos de ósmosis inversa van más allá y eliminan sales disueltas, pero generan agua de rechazo y requieren mantenimiento. Valóralo según tu consumo real.
      </p>

      <h2>Si tu instalación es antigua</h2>
      <p>
        Hay un caso en el que el agua del grifo sí puede dejar de ser segura, y no tiene que ver con la red pública sino con la instalación interior del edificio: las <strong>tuberías de plomo</strong>, presentes en muchas fincas de Barcelona anteriores a 1980.
      </p>
      <p>
        Lo tratamos en detalle en <a href="/blog/tuberias-de-plomo">tuberías de plomo</a> y en nuestros servicios de <a href="/renovacion-de-instalaciones-barcelona">renovación de instalaciones en Barcelona</a>.
      </p>
      <p>
        En Fontaneros Barcelona 24h instalamos descalcificadores, renovamos grifería y sustituimos instalaciones antiguas. Somos <a href="/">fontaneros en Barcelona</a> y área metropolitana, disponibles 24 horas.
      </p>

      <div class="my-10 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">¿Quieres instalar ósmosis o un descalcificador?</h3>
          <p class="text-sm text-slate-600 mb-0">
            Instalaciones garantizadas con técnicos homologados. Llama al 657 144 186.
          </p>
        </div>
        <a href="tel:+34657144186" class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider no-underline inline-block">
          Llamar al 657 144 186
        </a>
      </div>
    `,
    faqs: [
      {
        question: '¿Es potable el agua del grifo en Barcelona?',
        answer: 'Sí. Cumple los parámetros sanitarios de la normativa española y europea y se somete a controles continuos. El sabor característico se debe al contenido en sales del agua del Llobregat, no a un problema sanitario.'
      },
      {
        question: '¿Por qué hay tanta cal en el agua de Barcelona?',
        answer: 'Porque es agua dura, con alto contenido en calcio y magnesio disueltos. No afecta a la salud, pero se deposita en grifería, termos, calderas y electrodomésticos y acorta su vida útil.'
      },
      {
        question: '¿Merece la pena instalar un descalcificador en Barcelona?',
        answer: 'En la mayoría de casos sí, por la dureza del agua. Alarga la vida del termo, la caldera y la grifería. Requiere espacio, desagüe, mantenimiento con sal y una regulación correcta.'
      }
    ]
  },
  {
    slug: 'tuberias-de-plomo',
    h1: 'Tuberías de plomo: cómo identificarlas y sustituirlas',
    title: 'Tuberías de plomo: cómo identificarlas y sustituirlas',
    metaTitle: 'Tuberías de plomo: cómo identificarlas y sustituirlas',
    metaDescription: 'Muchas fincas anteriores a 1980 conservan tuberías de plomo. Te explicamos cómo identificarlas en dos minutos y por qué conviene sustituirlas.',
    excerpt: 'Muchas fincas anteriores a 1980 conservan tuberías de plomo. Te explicamos cómo identificarlas en dos minutos y por qué conviene sustituirlas.',
    category: 'Instalaciones y Reformas',
    readTime: '8 min de lectura',
    date: '22 de Septiembre, 2026',
    author: 'Equipo Técnico Fontaneros Barcelona 24h',
    image: '/images/tuberias-de-plomo-sustitucion.jpg',
    content: `
      <p class="lead">
        El plomo se usó en las instalaciones de agua potable españolas hasta los años setenta y ochenta. Muchas fincas del Eixample, de Gràcia, de Sants o de Ciutat Vella conservan tramos originales, a veces en la acometida y a veces en la instalación interior de la vivienda.
      </p>
      <p>
        La normativa europea sobre calidad del agua de consumo ha ido reduciendo progresivamente el límite de plomo permitido, precisamente porque la evidencia científica ha confirmado que no existe un nivel de exposición al plomo que pueda considerarse inocuo.
      </p>

      <h2>Cómo saber si las tienes</h2>
      <p>
        Hay una prueba de dos minutos, y puedes hacerla tú mismo.
      </p>
      <p>
        Localiza un tramo de tubería a la vista, normalmente bajo el fregadero, en la entrada del baño o en el armario del contador. Después:
      </p>
      <p>
        <strong>1. Mira el color.</strong> El plomo es gris mate apagado, sin brillo. El cobre es anaranjado o marrón verdoso. El acero galvanizado es gris plateado con brillo metálico.
      </p>
      <p>
        <strong>2. Ráscalo con una moneda o una llave.</strong> El plomo es blando: al rascarlo aparece un brillo plateado inmediato. El acero galvanizado no se raya con facilidad.
      </p>
      <p>
        <strong>3. Prueba con un imán.</strong> El plomo <strong>no es magnético</strong>. El acero galvanizado sí. Si el imán no se pega y al rascar sale brillo plateado, es plomo.
      </p>
      <p>
        <strong>4. Fíjate en las uniones.</strong> Las tuberías de plomo suelen tener uniones redondeadas y abultadas, soldadas a mano, muy distintas de los racores roscados modernos.
      </p>
      <p>
        Si tu edificio es anterior a 1980 y no se ha reformado la instalación, la probabilidad es alta.
      </p>

      <h2>Por qué conviene sustituirlas</h2>
      <p>
        El plomo se disuelve en el agua y pasa al consumo. La cantidad depende de varios factores, y hay dos que aumentan mucho el riesgo:
      </p>
      <p>
        <strong>El agua estancada.</strong> Cuanto más tiempo permanece el agua en contacto con el plomo, más se disuelve. Por eso la primera agua de la mañana, o la de una vivienda que ha estado cerrada, concentra más.
      </p>
      <p>
        <strong>El agua blanda o ácida.</strong> Disuelve más plomo que el agua dura. El agua de Barcelona es dura, lo que forma una capa de carbonato en el interior de la tubería que actúa como barrera parcial. Es un factor atenuante, pero no una solución: esa capa se rompe con obras, con cambios de presión o con cualquier intervención en la red. Puedes ver más sobre sus características en nuestro post sobre si <a href="/blog/agua-del-grifo-barcelona-potable">el agua del grifo de Barcelona es potable</a>.
      </p>
      <p>
        Como medida provisional mientras planificas la sustitución, deja correr el agua uno o dos minutos antes de usarla para beber o cocinar cuando lleve horas sin usarse, y no uses nunca agua caliente del grifo para cocinar, porque disuelve más plomo.
      </p>
      <p>
        Pero conviene ser claro: son parches. La solución es sustituir.
      </p>

      <h2>Cómo se sustituye</h2>
      <p>El alcance depende de dónde esté el plomo:</p>
      <p>
        <strong>En la acometida</strong> (el tramo entre la red general y el contador): corresponde a la compañía suministradora o a la comunidad, según el caso.
      </p>
      <p>
        <strong>En el montante comunitario:</strong> es obra de comunidad y requiere acuerdo de junta. Ver servicios para <a href="/fontanero-comunidades-barcelona">comunidades en Barcelona</a>.
      </p>
      <p>
        <strong>En la instalación interior de la vivienda:</strong> es responsabilidad del propietario y es la intervención más habitual.
      </p>
      <p>
        En una vivienda, el trabajo consiste en sustituir toda la red interior de agua fría y caliente por polietileno reticulado o multicapa. Se aprovecha el recorrido existente siempre que se puede y se pica solo lo imprescindible. Una vivienda estándar se resuelve en varios días de trabajo.
      </p>
      <p>
        Al terminar debe entregarse <strong>certificado de la instalación</strong>, que además te hará falta para cualquier trámite posterior.
      </p>

      <h2>Aprovechar el momento</h2>
      <p>
        Si vas a renovar la instalación, es el momento de resolver otras cosas a la vez: llaves de corte independientes por estancia, tomas para lavadora y lavavajillas bien dimensionadas, previsión para descalcificador y, si procede, sustitución de bajantes antiguas.
      </p>
      <p>
        Hacerlo después significa volver a picar.
      </p>
      <p>
        Nuestro servicio de <a href="/renovacion-de-instalaciones-barcelona">renovación de instalaciones de fontanería en Barcelona</a> incluye estudio previo, presupuesto por partidas y certificado al finalizar. Trabajamos también con comunidades de propietarios.
      </p>
      <p>
        Somos <a href="/">fontaneros en Barcelona</a> con más de diez profesionales en plantilla.
      </p>

      <div class="my-10 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">¿Necesitas sustituir tuberías de plomo antiguas?</h3>
          <p class="text-sm text-slate-600 mb-0">
            Solicita tu presupuesto sin compromiso al 657 144 186.
          </p>
        </div>
        <a href="tel:+34657144186" class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider no-underline inline-block">
          Llamar al 657 144 186
        </a>
      </div>
    `,
    faqs: [
      {
        question: '¿Cómo saber si tengo tuberías de plomo en casa?',
        answer: 'El plomo es gris mate sin brillo, se raya con una moneda dejando un brillo plateado y no es magnético. Si el imán no se pega y al rascar aparece brillo plateado, es plomo. En fincas anteriores a 1980 la probabilidad es alta.'
      },
      {
        question: '¿Es peligroso beber agua de tuberías de plomo?',
        answer: 'El plomo se disuelve en el agua y pasa al consumo, especialmente si el agua ha estado estancada. La recomendación sanitaria es sustituir la instalación.'
      },
      {
        question: '¿Cuánto se tarda en cambiar las tuberías de plomo de un piso?',
        answer: 'Varios días de trabajo en una vivienda estándar, sustituyendo toda la red interior de agua fría y caliente por polietileno reticulado o multicapa. Debe entregarse certificado de instalación al finalizar.'
      }
    ]
  },
  {
    slug: 'cambiar-bajante-de-uralita-por-pvc',
    h1: 'Cambiar el bajante de uralita por PVC: guía y normativa',
    title: 'Cambiar el bajante de uralita por PVC: guía y normativa',
    metaTitle: 'Cambiar el bajante de uralita por PVC: guía y normativa',
    metaDescription: 'La uralita contiene amianto y su retirada solo puede hacerla una empresa inscrita en el RERA. Te explicamos el proceso, los plazos y a quién corresponde.',
    excerpt: 'La uralita contiene amianto y su retirada solo puede hacerla una empresa inscrita en el RERA. Te explicamos el proceso, los plazos y a quién corresponde.',
    category: 'Comunidades y Bajantes',
    readTime: '8 min de lectura',
    date: '23 de Septiembre, 2026',
    author: 'Equipo Técnico Fontaneros Barcelona 24h',
    image: '/images/cambiar-bajante-uralita-pvc.jpg',
    content: `
      <p class="lead">
        Muchas fincas construidas entre los años cincuenta y ochenta tienen las bajantes de fibrocemento, conocido popularmente como uralita. Ese material contiene amianto, y eso cambia por completo cómo se puede intervenir sobre él.
      </p>
      <p>
        Si tu comunidad se está planteando la sustitución, hay tres cosas que conviene saber antes de pedir presupuestos.
      </p>

      <h2>Por qué no se puede tocar sin más</h2>
      <p>
        El fibrocemento en buen estado y sin manipular no libera fibras y no representa un riesgo inmediato. El problema aparece cuando se corta, se perfora, se rompe o se deteriora: entonces libera fibras de amianto al aire, y esas fibras sí son peligrosas por inhalación.
      </p>
      <p>
        Por eso la normativa española prohíbe que cualquier empresa manipule amianto. Solo pueden hacerlo las inscritas en el <strong>RERA</strong> (Registro de Empresas con Riesgo por Amianto), y deben presentar un plan de trabajo aprobado por la autoridad laboral antes de empezar.
      </p>
      <p>
        <strong>Esto es innegociable.</strong> Si una empresa te ofrece retirar la bajante sin mencionar el RERA ni el plan de trabajo, está incumpliendo la normativa y os expone a sanciones y a un riesgo sanitario real.
      </p>

      <h2>Quién paga</h2>
      <p>
        La bajante general es <strong>elemento común</strong> del edificio, así que la sustitución corresponde a la comunidad de propietarios y requiere acuerdo de junta. Consultar servicios para <a href="/fontanero-comunidades-barcelona">fontanería de comunidades en Barcelona</a>.
      </p>
      <p>
        La situación se complica cuando la bajante discurre por el interior de viviendas concretas, que es lo habitual en fincas antiguas de Barcelona. Ahí hay que distinguir entre el coste de la sustitución (comunidad) y el de la reposición de acabados dentro de cada vivienda (variable según el acuerdo y los estatutos).
      </p>
      <p>
        Conviene dejarlo cerrado por escrito antes de empezar, no durante la obra.
      </p>

      <h2>Cómo es el proceso</h2>
      <p><strong>1. Inspección previa.</strong> Identificación del material, estado de conservación y recorrido completo. Se suele acompañar de inspección con cámara del interior.</p>
      <p><strong>2. Plan de trabajo.</strong> La empresa inscrita en el RERA lo redacta y lo presenta a la autoridad laboral. La aprobación tiene sus plazos, así que hay que contarlos en el calendario.</p>
      <p><strong>3. Retirada controlada.</strong> Confinamiento de la zona, humectación del material para evitar que se liberen fibras, desmontaje sin cortar siempre que sea posible, embolsado homologado y traslado a gestor autorizado de residuos peligrosos.</p>
      <p><strong>4. Instalación de la nueva bajante.</strong> Normalmente PVC insonorizado o polipropileno de tres capas. Vale la pena valorar la versión insonorizada: el sobrecoste es moderado y la diferencia de ruido en las viviendas colindantes es muy notable.</p>
      <p><strong>5. Documentación.</strong> Certificado de retirada y justificante de entrega a gestor autorizado. Guardadlo: es la prueba de que se hizo conforme a normativa.</p>

      <h2>Qué aprovechar mientras está abierto</h2>
      <p>
        Una obra de bajantes abre el patinillo y los pasos verticales del edificio. Es el momento de resolver todo lo que después obligaría a volver a abrir:
      </p>
      <ul>
        <li>Sustituir montantes antiguos de agua si son de <a href="/blog/tuberias-de-plomo">tuberías de plomo</a> o galvanizado</li>
        <li>Instalar válvulas de aireación si hay problemas de gorgoteo u olores</li>
        <li>Revisar y renovar las conexiones de cada vivienda a la bajante</li>
        <li>Actualizar el aislamiento acústico del patinillo</li>
      </ul>
      <p>
        Hacerlo a la vez reduce mucho el coste total frente a dos obras separadas.
      </p>

      <h2>Señales de que no podéis esperar</h2>
      <ul>
        <li>Manchas de humedad en las paredes por las que discurre la bajante</li>
        <li>Atascos repetidos que no se resuelven con desatasco</li>
        <li>Olor a alcantarilla persistente en varias viviendas</li>
        <li>Fibrocemento visiblemente agrietado, descamado o con superficie pulverulenta</li>
      </ul>
      <p>
        Ese último punto es el más urgente: el material deteriorado ya está liberando fibras.
      </p>

      <h2>Pide presupuesto</h2>
      <p>
        Trabajamos con comunidades de propietarios y administradores de fincas en Barcelona y área metropolitana, coordinando la parte de fontanería de la <a href="/renovacion-de-instalaciones-barcelona">renovación de instalaciones</a> y la <a href="/inspeccion-y-limpieza-de-tuberias-barcelona">inspección previa de las bajantes con cámara</a>.
      </p>
      <p>
        Somos <a href="/">fontaneros en Barcelona</a> con más de diez profesionales en plantilla.
      </p>

      <div class="my-10 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">¿Necesitas presupuesto para sustituir bajantes en tu edificio?</h3>
          <p class="text-sm text-slate-600 mb-0">
            Contacta con nuestro equipo para asesoramiento y gestión integral. Llama al 657 144 186.
          </p>
        </div>
        <a href="tel:+34657144186" class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider no-underline inline-block">
          Llamar al 657 144 186
        </a>
      </div>
    `,
    faqs: [
      {
        question: '¿Quién puede retirar una bajante de uralita?',
        answer: 'Solo empresas inscritas en el RERA (Registro de Empresas con Riesgo por Amianto), con un plan de trabajo aprobado previamente por la autoridad laboral. Ninguna otra empresa puede manipular amianto legalmente.'
      },
      {
        question: '¿Quién paga el cambio de bajantes en una comunidad?',
        answer: 'La bajante general es elemento común, así que corresponde a la comunidad con acuerdo de junta. La reposición de acabados dentro de cada vivienda depende del acuerdo adoptado y de los estatutos.'
      },
      {
        question: '¿Es peligrosa una bajante de uralita en buen estado?',
        answer: 'El fibrocemento sin manipular y en buen estado no libera fibras. El riesgo aparece al cortarlo, perforarlo o cuando el material se deteriora y presenta grietas o superficie pulverulenta.'
      }
    ]
  },
  {
    slug: 'caldera-no-calienta-agua-pero-si-calefaccion',
    h1: 'La caldera no calienta el agua pero sí la calefacción',
    title: 'La caldera no calienta el agua pero sí la calefacción',
    metaTitle: 'La caldera no calienta el agua pero sí la calefacción',
    metaDescription: 'Si tienes calefacción pero no agua caliente, el fallo está en el circuito de ACS. Te explicamos las cuatro causas habituales y cuál puedes revisar tú.',
    excerpt: 'Si tienes calefacción pero no agua caliente, el fallo está en el circuito de ACS. Te explicamos las cuatro causas habituales y cuál puedes revisar tú.',
    category: 'Calefacción y Calderas',
    readTime: '8 min de lectura',
    date: '24 de Septiembre, 2026',
    author: 'Equipo Técnico Fontaneros Barcelona 24h',
    image: '/images/caldera-no-calienta-agua-caliente.jpg',
    content: `
      <p class="lead">
        Es un síntoma muy concreto y por eso es útil: si los radiadores funcionan pero del grifo no sale agua caliente, la caldera está bien en general. Lo que falla es el circuito de agua caliente sanitaria, que en una caldera mixta es un sistema independiente.
      </p>
      <p>
        Eso reduce mucho las posibilidades.
      </p>

      <h2>Antes de nada, dos comprobaciones de treinta segundos</h2>
      <p>
        <strong>El selector de temperatura de ACS.</strong> Muchas calderas tienen dos mandos o dos ajustes en pantalla: uno para calefacción y otro para agua caliente sanitaria. Si el de ACS está al mínimo o alguien lo ha movido, ese es el problema. Suena obvio y pasa constantemente.
      </p>
      <p>
        <strong>El modo de funcionamiento.</strong> Algunas calderas tienen un modo "solo calefacción" o "invierno" que desactiva el ACS. Comprueba que está en modo combinado.
      </p>
      <p>
        Si ninguna de las dos es la causa, vamos a las averías reales.
      </p>

      <h2>Causa 1: el intercambiador de placas obstruido por cal</h2>
      <p>
        Es la causa más frecuente en Barcelona, con diferencia.
      </p>
      <p>
        En una caldera mixta, un intercambiador de placas transfiere el calor del circuito de calefacción al agua sanitaria. Es un componente con canales muy estrechos y, con agua dura, la cal los va obstruyendo hasta que apenas pasa agua o apenas se transfiere calor.
      </p>
      <p>Las señales que lo identifican:</p>
      <ul>
        <li>El agua sale templada en lugar de caliente</li>
        <li>Tarda muchísimo en calentar</li>
        <li>El caudal de agua caliente ha bajado respecto al de agua fría</li>
        <li>Empeora de forma progresiva a lo largo de meses, no de golpe</li>
      </ul>
      <p>
        Se resuelve con una limpieza química del intercambiador o, si está muy deteriorado, sustituyéndolo. Es una reparación habitual y no especialmente cara.
      </p>
      <p>
        Si tu instalación tiene ya unos años y no hay descalcificador, esta es la primera sospecha. Explicamos por qué en <a href="/blog/agua-del-grifo-barcelona-potable">el agua del grifo de Barcelona</a>.
      </p>

      <h2>Causa 2: la válvula de tres vías bloqueada</h2>
      <p>
        Esa válvula es la que decide si el agua caliente va a los radiadores o al circuito sanitario. Cuando se atasca en posición de calefacción, la caldera calienta pero nunca deriva el calor al agua del grifo.
      </p>
      <p>
        El síntoma característico es que el agua sale <strong>directamente fría</strong>, no templada, y que el fallo ha aparecido de golpe y no de forma progresiva. En algunos casos se oye un clic cuando debería conmutar, y en otros no se oye nada.
      </p>
      <p>
        Se repara o se sustituye el motor de la válvula.
      </p>

      <h2>Causa 3: el sensor de caudal</h2>
      <p>
        La caldera necesita detectar que alguien ha abierto un grifo de agua caliente para activar el quemador. Si el sensor de caudal está averiado o sucio, la caldera nunca recibe la orden.
      </p>
      <p>
        El síntoma: la caldera no arranca al abrir el grifo de agua caliente, no se oye el encendido. Con la calefacción sí arranca con normalidad, porque esa la activa el termostato, no el sensor.
      </p>

      <h2>Causa 4: presión o caudal insuficiente de entrada</h2>
      <p>
        Si la presión de agua de red es baja, el sensor de caudal no llega a activarse. Comprueba si el resto de grifos de la casa dan buena presión. Si el problema es solo en el agua caliente, revisa el filtro de entrada de ACS de la caldera, que puede estar obstruido por cal o sedimentos. Si sospechas pérdidas en el circuito, revisa nuestra guía de <a href="/blog/presion-de-la-caldera">presión de la caldera</a>.
      </p>

      <h2>Si lo que tienes es un termo eléctrico</h2>
      <p>
        El diagnóstico es distinto. En un termo que no calienta con el piloto encendido, las causas habituales son la resistencia cubierta de cal, el termostato averiado o el ánodo de magnesio agotado, que acelera la corrosión del depósito. Revisa nuestros servicios de <a href="/cambio-de-termo-electrico-barcelona">cambio de termo eléctrico en Barcelona</a>.
      </p>
      <p>
        La cal sobre la resistencia actúa como aislante: el termo consume igual pero calienta mucho menos. En Barcelona es la avería más común de los termos.
      </p>

      <h2>Lo que no debes hacer</h2>
      <p>
        <strong>No abras la caldera.</strong> Todo lo anterior son diagnósticos, no instrucciones de reparación. Una caldera de gas tiene componentes de combustión y cualquier manipulación por persona no autorizada es ilegal además de peligrosa.
      </p>
      <p>
        <strong>Si huele a gas:</strong> cierra la llave de gas, ventila abriendo ventanas, no acciones interruptores ni encendedores, sal de la vivienda y llama desde fuera.
      </p>

      <h2>Reparación</h2>
      <p>
        Nuestro servicio de <a href="/reparacion-de-calderas-barcelona">reparación de calderas en Barcelona</a> trabaja con instaladores de gas autorizados y cubre las marcas más habituales. Atendemos urgencias las 24 horas, también fines de semana y festivos.
      </p>
      <p>
        Somos <a href="/">fontaneros en Barcelona</a> con más de diez profesionales en plantilla, así que quedarse sin agua caliente un domingo no significa esperar al lunes.
      </p>

      <div class="my-10 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 class="text-xl font-bold text-slate-900 mb-1">¿Sin agua caliente en tu caldera o termo?</h3>
          <p class="text-sm text-slate-600 mb-0">
            Reparación urgente 24h con instaladores de gas autorizados. Llama al 657 144 186.
          </p>
        </div>
        <a href="tel:+34657144186" class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-black px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30 text-sm uppercase tracking-wider no-underline inline-block">
          Llamar al 657 144 186
        </a>
      </div>
    `,
    faqs: [
      {
        question: '¿Por qué la caldera calienta los radiadores pero no el agua del grifo?',
        answer: 'Porque el fallo está en el circuito de agua caliente sanitaria, independiente del de calefacción. Las causas habituales son el intercambiador de placas obstruido por cal, la válvula de tres vías bloqueada o el sensor de caudal averiado.'
      },
      {
        question: '¿El agua sale templada o sale fría?',
        answer: 'Templada y con poco caudal apunta a intercambiador obstruido por cal, un deterioro progresivo. Directamente fría y de aparición repentina apunta a la válvula de tres vías.'
      },
      {
        question: '¿Por qué el termo eléctrico no calienta con el piloto encendido?',
        answer: 'Normalmente por cal acumulada sobre la resistencia, que actúa como aislante, o por el termostato averiado. En zonas de agua dura como Barcelona es la avería más frecuente.'
      }
    ]
  }
];
