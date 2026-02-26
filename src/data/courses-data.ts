export interface Chapter {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  name: string;
  description: string;
  objectives: string[];
  targetAudience: string;
  methodology: string;
  duration?: string;
  date?: string;
  schedule?: string;
  maxParticipants?: string;
  content?: string[];
  chapters?: Chapter[];
}

export const courses: Course[] = [
  {
    id: 'particulas-magneticas',
    name: 'Curso de Partículas Magnéticas Nivel I y II',
    description: 'El curso de 24 horas (en tres sesiones) proporciona al participante los elementos Teóricos-Prácticos para interpretar y evaluar discontinuidades en materiales ferromagnéticos por medio del Método de Inspección de Partículas Magnéticas, de acuerdo a los criterios de aceptación y rechazo previamente establecidos en los Códigos y Normas aplicables.',
    duration: '03 días (08 Horas/día) 24 Horas Académicas',
    schedule: '09:00 a.m. – 01:00 p.m. / 02:00 p.m. – 06:00 p.m.',
    date: '18/02/2013 hasta 20/02/2013',
    maxParticipants: 'Máximo 15 personas/sesión',
    objectives: [
      'Proporcionar al participante los elementos Teóricos-Prácticos para interpretar y evaluar discontinuidades en materiales ferromagnéticos por medio del Método de Inspección de Partículas Magnéticas, de acuerdo a los criterios de aceptación y rechazo previamente establecidos en los Códigos y Normas aplicables.',
      'En general aprenderemos términos, los tipos de equipos usados para la inspección por Partículas Magnéticas y las típicas discontinuidades que pueden ser encontradas, así como la teoría de la desmagnetización.',
      'Al finalizar el entrenamiento el participante podrá seleccionar la Técnica de Inspección más adecuada para el equipo, elemento o espécimen en evaluación.'
    ],
    targetAudience: 'Personal Profesional y Público en General, quienes desean incursionar, realizan o efectúan actividades de inspección de componentes mecánicos, tales como tuberías, estructuras, recipientes a presión, etc., supervisores de producción y personal de ingeniería quienes están a cargo de diseño de equipos estáticos y personal de Aseguramiento y Control de Calidad en las diversas Industrias.',
    methodology: 'Este curso será presentado de acuerdo a las indicaciones de la Práctica Recomendada SNT-TC-1A (Edición 2011) emitida por la Sociedad Americana de Ensayos No Destructivos (ASNT).\n\nFormación Teórica-Práctica enfocada en la Inspección de Uniones Soldadas, Equipos y Componentes de materiales ferromagnéticos.',
    chapters: [
      {
        title: 'Capítulo 1. Introducción a los END',
        topics: [
          '¿Qué son los END?',
          'Antecedentes Históricos.',
          'Métodos de END.',
          'Abreviaturas Importantes.',
          'Clasificación de los END.',
          'Razones para el uso de los END.',
          'Factores para la selección de los END.',
          '¿Qué es un Código/Norma/Especificación/Práctica Recomendada?',
          'Términos Mandatorios'
        ]
      },
      {
        title: 'Capítulo 2. Calificación y Certificación de Personal en END',
        topics: [
          'Objetivos',
          '¿Por qué es necesario un entrenamiento?',
          'Entidades que requieren entrenamiento.',
          '¿Qué se requiere para aplicar una Inspección por END?.',
          'Calificación y Certificación.',
          'Práctica Escrita.',
          'Práctica Recomendada SNT-TC-1A',
          'ATA 105/ATA 107',
          'MIL STD 410E',
          'NAS 410',
          'ANSI/ASNT CP189',
          'ISO 9712/ EN 479'
        ]
      },
      {
        title: 'Capítulo 3. Introducción a las Partículas Magnéticas',
        topics: [
          'Fundamentos',
          'Objetivos de la Inspección',
          'Clasificación de la Aplicación del Método de Partículas Magnéticas',
          'Aplicaciones',
          'Limitaciones y Ventajas del Método'
        ]
      },
      {
        title: 'Capítulo 4. Magnetismo',
        topics: [
          'Teoría de Campos Magnéticos',
          'Campo Magnético de la Tierra',
          'Atracción y Repulsión Magnética',
          'Teoría Molecular',
          'Líneas de Fuerza',
          'Teoría de Magnetización',
          'Polos Magnéticos',
          'Formación de Polos Magnéticos',
          'Materiales Influenciados por los Campos Magnéticos',
          'Características Magnéticas de los Materiales no Ferrosos.',
          'Terminología asociada con la Inspección por Partículas Magnéticas',
          'Características de los Campos Magnéticos',
          'Barras Magnéticas',
          'Anillos Magnéticos',
          'Efectos de las Discontinuidades de los Materiales.',
          'Fisuras Superficiales',
          'Rasguños.',
          'Defectos Subsuperficiales'
        ]
      },
      {
        title: 'Capítulo 5. Magnetización por Medio de Corriente Magnética',
        topics: [
          'Corriente de Magnetización.',
          'Regla de Mano Derecha Vs Regla de la Mano Izquierda',
          'Campos Magnéticos Circulares.',
          'En Materiales Ferromagnéticos',
          'En No Magnéticos',
          'En Barras Rectangulares.',
          'Polos formados por Discontinuidades',
          'Producción de un Campo Circular',
          'Distribución de Campos Circulares',
          'Uso de Conductor Central',
          'Discontinuidades comúnmente descubiertas por Campos Circulares',
          'Campos Magnéticos Longitudinales',
          'Polos Formados por Discontinuidades.',
          'Magnetización por Bobina.',
          'Fuerza de Campo en una Bobina',
          'Campo Efectivo.',
          'Discontinuidades comúnmente descubiertas por campos Longitudinales.',
          'Ventajas y Desventajas de los Campos Longitudinales.',
          'Magnetización por Cable',
          'Uso de Prods',
          'Uso de Yugo Magnético'
        ]
      },
      {
        title: 'Capítulo 6. Corrientes de Magnetización',
        topics: [
          'Corriente Alterna',
          'Corriente Directa',
          'Distribución de Flujo AC.',
          'Distribución de Flujo DC.',
          'Requerimientos de Corriente.',
          'Magnetización Circular',
          'Magnetización con Prods.',
          'Magnetización Longitudinal.',
          'Valores Recomendados de Densidad de Flujo'
        ]
      },
      {
        title: 'Capítulo 7. Materiales, Sensibilidad, Medios y Preparación',
        topics: [
          'Partículas',
          'Partículas Húmedas',
          'Partículas Secas',
          'Requerimientos Generales de las Partículas.',
          'Propiedades Magnéticas',
          'Geometría de las Partículas',
          'Movilidad y Visibilidad',
          'Sensibilidad del Método'
        ]
      },
      {
        title: 'Capítulo 8. Métodos y Secuencia de Inspección',
        topics: [
          'Método Húmedo Continuo',
          'Método Seco Continuo',
          'Método de Campo Residual',
          'Limitaciones del Método de Partículas Magnéticas',
          'Precauciones de Seguridad.'
        ]
      },
      {
        title: 'Capítulo 9. Equipamiento para Partículas Magnéticas',
        topics: [
          'Tipo Portátil',
          'Tipo Estacionario',
          'Tipo Automático',
          'Unidades Multidireccionales',
          'Accesorios',
          'Luz Ultravioleta o Luz Negra',
          'Luz Blanca',
          'Instrumentos Medidores de Luz.'
        ]
      },
      {
        title: 'Capítulo 10. Desmagnetización',
        topics: [
          'Teoría',
          'Campo Residual',
          'Campos Combinados',
          'Reducción del Campo Residual.',
          'Procedimiento de Desmagnetización',
          'Bobina de Corriente Alterna.',
          'Bobina de Corriente Directa.',
          'Efectos de la Permeabilidad.',
          'Medidores de Campo de Fuga.',
          'Indicadores de Campo.',
          'Alambre Suspendido.',
          'Campo Magnético.'
        ]
      },
      {
        title: 'Capítulo 11. Indicaciones Detectables por Partículas Magnéticas',
        topics: [
          'Indicaciones Verdaderas',
          'Indicaciones No Relevantes',
          'Constricciones.',
          'Sobremagnetización.',
          'Magnetización Longitudinal.',
          'Eliminación de Indicaciones No Relevantes.',
          'Indicaciones Falsas',
          'Clasificación de las Indicaciones por su Origen.',
          'General',
          'Discontinuidades Inherentes.',
          'Discontinuidades de Procesos.',
          'Discontinuidades en Servicio.',
          'Ejemplo de Indicaciones Verdaderas.',
          'Seams',
          'Shrink Crack',
          'Fisuras de Rectificado.',
          'Stringers.',
          'Laminaciones',
          'Fisuras de Tratamiento Térmico.',
          'Fisuras de Fatiga.',
          'Preservación de Indicaciones.'
        ]
      },
      {
        title: 'Capítulo 12. Aplicaciones Prácticas',
        topics: [
          'Uso de Estándares y Especificaciones ASTM E1444, E709.',
          'Selección del Método y Técnica de Evaluación apropiado.',
          'Procedimientos de Inspección.',
          'Aceptación de la Identificación.',
          'Equipamiento Particular.',
          'Aplicaciones Especiales.'
        ]
      }
    ]
  },
  {
    id: 'radiografia-industrial',
    name: 'Curso de Radiografía Industrial Nivel I y II',
    description: 'Es un curso dirigido a profesionales y técnicos de las áreas de inspección, ingeniería, fabricación, proyectos, control de calidad, etc, que tengan bajo su responsabilidad, la construcción y control de uniones soldadas, la evaluación de componentes fundidos y otros materiales de ser evaluados con la asistencia del método de Radiografía Industrial (RT).',
    objectives: [
      'Comprender los principios fundamentales de la radiografía industrial',
      'Interpretar radiografías de soldadura según normas aplicables',
      'Identificar discontinuidades en radiografías',
      'Aplicar técnicas de inspección radiográfica en equipos y componentes'
    ],
    targetAudience: 'Profesionales y técnicos de inspección, ingeniería, fabricación, proyectos, control de calidad, supervisores de producción y personal de aseguramiento de calidad.',
    methodology: 'Formación Teórica-Práctica conforme a SNT-TC-1A (ASNT)',
    chapters: [
      {
        title: 'Capítulo 1. Introducción a los Ensayos No Destructivos',
        topics: ['Conceptos básicos de END', 'Historia de la radiografía industrial', 'Métodos de inspección', 'Normativas y estándares aplicables', 'Clasificación de defectos']
      },
      {
        title: 'Capítulo 2. Radiactividad y Radiación',
        topics: ['Teoría atómica', 'Tipos de radiación nuclear', 'Radiación electromagnética', 'Fuentes radiactivas', 'Propiedades de rayos X y gamma']
      },
      {
        title: 'Capítulo 3. Equipos de Radiografía Industrial',
        topics: ['Tubo de rayos X', 'Generadores portátiles', 'Fuentes radiactivas', 'Accesorios de exposición', 'Sistemas de detección']
      },
      {
        title: 'Capítulo 4. Técnicas de Exposición Radiográfica',
        topics: ['Geometría de exposición', 'Parámetros de exposición', 'Técnica de película simple', 'Técnica de película doble', 'Posicionamiento de fuentes']
      },
      {
        title: 'Capítulo 5. Película Radiográfica y Detectores',
        topics: ['Composición de película radiográfica', 'Sensibilidad de película', 'Revelado de película', 'Densidad radiográfica', 'Detectores digitales']
      },
      {
        title: 'Capítulo 6. Indicadores de Penetrametría',
        topics: ['Penetrámetros de cables', 'Penetrámetros tipo aguja', 'Penetrámetros tipo pozo', 'Selección de penetrámetro', 'Interpretación de penetrametría']
      },
      {
        title: 'Capítulo 7. Contraste y Calidad Radiográfica',
        topics: ['Definición de contraste', 'Factores de contraste', 'Nitidez radiográfica', 'Distorsión geométrica', 'Mejoramiento de imagen']
      },
      {
        title: 'Capítulo 8. Defectos en Soldadura Detectables por Radiografía',
        topics: ['Porosidad', 'Falta de fusión', 'Falta de penetración', 'Grietas', 'Inclusiones de escoria', 'Socavación', 'Sobreespesor']
      },
      {
        title: 'Capítulo 9. Interpretación de Radiografías',
        topics: ['Estándares de aceptación/rechazo', 'Defectos verdaderos vs artefactos', 'Clasificación de indicaciones', 'Medición de defectos', 'Informe radiográfico']
      },
      {
        title: 'Capítulo 10. Radiografía Digital y Técnicas Modernas',
        topics: ['Radiografía digital directa', 'Radiografía computarizada', 'Procesamiento de imágenes', 'Ventajas de técnicas digitales', 'Normativas de radiografía digital']
      },
      {
        title: 'Capítulo 11. Protección Radiológica',
        topics: ['Efectos biológicos de la radiación', 'Dosis de radiación', 'Límites de exposición ocupacional', 'Medidas de protección', 'Marcaje de áreas radiactivas']
      },
      {
        title: 'Capítulo 12. Aplicaciones Prácticas y Procedimientos',
        topics: ['Radiografía de tuberías', 'Radiografía de soldaduras en recipientes', 'Radiografía de juntas remachadas', 'Radiografía de fundiciones', 'Procedimientos de inspección ASTM']
      }
    ]
  },
  {
    id: 'ultrasonido-nivel-ii',
    name: 'Curso de Ultrasonido Nivel II',
    description: 'Es un curso de 40 horas distribuidas en cinco sesiones de ocho horas. Está dirigido a personal profesional y público en general interesado en incursionar, realizar o efectuar actividades de inspección de componentes mecánicos, tales como tuberías, estructuras, recipientes a presión, etc., supervisores de producción y personal de ingeniería quienes están a cargo de diseño de equipos estáticos y personal de Aseguramiento y Control de Calidad en las diversas Industrias.',
    duration: '40 horas (5 sesiones)',
    objectives: [
      'Dominar técnicas avanzadas de ultrasonido para inspección de componentes',
      'Interpretar resultados de inspección ultrasónica',
      'Calibrar y operar equipos de ultrasonido convencional',
      'Identificar discontinuidades internas y volumétricas'
    ],
    targetAudience: 'Personal profesional y público en general interesado en inspección de componentes mecánicos, tuberías, estructuras, recipientes a presión, supervisores de producción, personal de ingeniería y aseguramiento de calidad.',
    methodology: 'Formación Teórica-Práctica en ultrasonido convencional',
    chapters: [
      {
        title: 'Capítulo 1. Introducción a Ultrasonido Nivel II',
        topics: ['Revisión de conceptos Nivel I', 'Principios avanzados de ultrasonido', 'Aplicaciones industriales', 'Normas ASNT SNT-TC-1A']
      },
      {
        title: 'Capítulo 2. Acústica Avanzada',
        topics: ['Velocidad del sonido en materiales', 'Impedancia acústica', 'Reflexión y refracción', 'Atenuación del sonido', 'Dispersión de ondas']
      },
      {
        title: 'Capítulo 3. Transductores y Palpadores',
        topics: ['Transductores piezoeléctricos', 'Tipos de palpadores', 'Frecuencias de operación', 'Ángulos de refracción', 'Acoplamiento de transductores']
      },
      {
        title: 'Capítulo 4. Instrumentación y Equipos',
        topics: ['Pulsadores ultrasónicos', 'Receptores y amplificadores', 'Pantallas de visualización', 'Software de análisis', 'Calibración de equipos']
      },
      {
        title: 'Capítulo 5. Técnicas de Inspección Avanzadas',
        topics: ['Ultrasonido convencional angular', 'Técnica de barrido automático', 'Phased array avanzado', 'Full matrix capture', 'Time of flight diffraction (TOFD)']
      },
      {
        title: 'Capítulo 6. Detección e Interpretación de Defectos',
        topics: ['Grietas internas y superficiales', 'Falta de fusión', 'Porosidad', 'Inclusiones', 'Laminaciones', 'Medición de defectos']
      },
      {
        title: 'Capítulo 7. Calibración de Equipos Ultrasónicos',
        topics: ['Patrones de calibración', 'Bloques de referencia', 'Calibración de velocidad', 'Calibración de ganancia', 'Verificación periódica']
      },
      {
        title: 'Capítulo 8. Medición de Espesores',
        topics: ['Modo de medición de espesor', 'Medidores portátiles', 'Factores que afectan la medición', 'Exactitud y precisión', 'Aplicaciones industriales']
      },
      {
        title: 'Capítulo 9. Procedimientos de Inspección Específicos',
        topics: ['Inspección de tuberías', 'Inspección de soldaduras circunferenciales', 'Inspección de estructuras metálicas', 'Inspección de componentes aeronáuticos', 'Documentación de resultados']
      },
      {
        title: 'Capítulo 10. Normas y Estándares Aplicables',
        topics: ['ASTM E494 y E494M', 'ASTM E2375', 'ISO 22825', 'Códigos de construcción aplicables', 'Criterios de aceptación/rechazo']
      }
    ]
  },
  {
    id: 'ultrasonido-nivel-i',
    name: 'Curso de Ultrasonido Nivel I',
    description: 'Al finalizar el entrenamiento el participante podrá seleccionar la Técnica de Inspección por Ultrasonido más adecuada para el equipo, elemento o espécimen en evaluación, con la finalidad de discriminar la presencia de discontinuidades internas o volumétricas.',
    objectives: [
      'Aprender los principios fundamentales de ultrasonido',
      'Seleccionar la técnica de inspección más adecuada',
      'Discriminar presencia de discontinuidades internas',
      'Operar equipos de ultrasonido básicos'
    ],
    targetAudience: 'Personal profesional y público en general que desea incursionar en inspección ultrasónica.',
    methodology: 'Formación teórica-práctica en fundamentos de ultrasonido',
    chapters: [
      {
        title: 'Capítulo 1. Introducción a los Ensayos No Destructivos',
        topics: ['Definición y alcance de END', 'Métodos de inspección disponibles', 'Ventajas del ultrasonido', 'Limitaciones del ultrasonido', 'Aplicaciones industriales']
      },
      {
        title: 'Capítulo 2. Fundamentos de Acústica',
        topics: ['Naturaleza del sonido', 'Ecuación de onda', 'Longitud de onda y frecuencia', 'Velocidad del sonido', 'Impedancia acústica']
      },
      {
        title: 'Capítulo 3. Principios de Ultrasonido',
        topics: ['Fenómeno piezoeléctrico', 'Generación de ultrasonido', 'Propagación de ondas ultrasónicas', 'Modos de propagación', 'Reflexión y refracción']
      },
      {
        title: 'Capítulo 4. Transductores y Palpadores',
        topics: ['Construcción de transductores', 'Transductores de contacto', 'Transductores de inmersión', 'Palpadores convencionales', 'Características de operación']
      },
      {
        title: 'Capítulo 5. Equipos Ultrasónicos Básicos',
        topics: ['Componentes principales', 'Pulsadores ultrasónicos', 'Receptores y amplificadores', 'Pantallas tipo A-scan', 'Indicadores digitales']
      },
      {
        title: 'Capítulo 6. Técnicas de Inspección Convencionales',
        topics: ['Técnica por pulso-eco', 'Técnica de transmisión', 'Configuración de contacto', 'Configuración de inmersión', 'Selección de técnica']
      },
      {
        title: 'Capítulo 7. Calibración y Patrones de Referencia',
        topics: ['Bloques de calibración', 'Patrones de espesor', 'Establecimiento de referencias', 'Ganancia de referencia', 'Verificación de calibración']
      },
      {
        title: 'Capítulo 8. Defectos Detectables',
        topics: ['Características de defectos', 'Grietas internas', 'Porosidad y cavidades', 'Falta de fusión', 'Laminaciones', 'Inclusiones']
      },
      {
        title: 'Capítulo 9. Procedimientos de Inspección',
        topics: ['Preparación de superficie', 'Aplicación de acoplante', 'Movimiento del palpador', 'Búsqueda de defectos', 'Medición de amplitud', 'Registro de resultados']
      },
      {
        title: 'Capítulo 10. Normas y Estándares',
        topics: ['ASNT SNT-TC-1A', 'Normas ASTM aplicables', 'ISO 11699 series', 'Códigos de construcción', 'Criterios de aceptación']
      }
    ]
  },
  {
    id: 'introduccion-end',
    name: 'Curso de Introducción a los Métodos de Inspección Mediante Ensayos no Destructivos (END)',
    description: 'Es un curso dirigido a profesionales y público en general interesados en incursionar, realizar o efectúar actividades de inspección de componentes mecánicos, tales como tuberías, estructuras, recipientes a presión, etc.',
    objectives: [
      'Comprender los principios básicos de los END',
      'Conocer los diferentes métodos disponibles',
      'Elegir el método más adecuado según el caso',
      'Entender limitaciones de cada método'
    ],
    targetAudience: 'Profesionales y público en general interesados en inspección de componentes mecánicos.',
    methodology: 'Introducción a los seis métodos principales de END',
    chapters: [
      {
        title: 'Capítulo 1. Generalidades de END',
        topics: ['Definición de ensayos no destructivos', 'Historia de los END', 'Importancia industrial', 'Ventajas y limitaciones', 'Normativas aplicables']
      },
      {
        title: 'Capítulo 2. Líquidos Penetrantes (PT)',
        topics: ['Principios de funcionamiento', 'Tipos de penetrantes', 'Procedimiento de inspección', 'Indicaciones visibles', 'Aplicaciones y limitaciones']
      },
      {
        title: 'Capítulo 3. Partículas Magnéticas (MT)',
        topics: ['Principios magnéticos', 'Magnetización de materiales', 'Detección de discontinuidades', 'Equipos de inspección', 'Aplicaciones industriales']
      },
      {
        title: 'Capítulo 4. Radiografía Industrial (RT)',
        topics: ['Fuentes de radiación', 'Interacción con materiales', 'Detectores radiográficos', 'Interpretación de radiografías', 'Protección radiológica']
      },
      {
        title: 'Capítulo 5. Ultrasonido (UT)',
        topics: ['Propagación de ondas ultrasónicas', 'Transductores y palpadores', 'Técnicas de inspección', 'Interpretación de señales', 'Ventajas de ultrasonido']
      },
      {
        title: 'Capítulo 6. Inspección Visual (VT)',
        topics: ['Técnicas de inspección visual', 'Superficies accesibles', 'Documentación visual', 'Video inspección', 'Criterios de aceptación']
      },
      {
        title: 'Capítulo 7. Corrientes Inducidas (ET)',
        topics: ['Principios electromagnéticos', 'Generación de corrientes inducidas', 'Detección de defectos', 'Conductividad y permeabilidad', 'Aplicaciones']
      },
      {
        title: 'Capítulo 8. Selección del Método de Inspección',
        topics: ['Factores a considerar', 'Material del componente', 'Tipo de defectos esperados', 'Accesibilidad del componente', 'Económicos y técnicos']
      },
      {
        title: 'Capítulo 9. Normativas y Estándares',
        topics: ['Norma ASNT SNT-TC-1A', 'Estándares ASTM', 'Niveles de certificación', 'Competencia profesional', 'Documentación de inspección']
      },
      {
        title: 'Capítulo 10. Aplicaciones Prácticas',
        topics: ['Inspección de soldaduras', 'Inspección de tuberías', 'Inspección de recipientes a presión', 'Control de calidad en manufactura', 'Mantenimiento predictivo']
      }
    ]
  },
  {
    id: 'interpretacion-radiografica-soldadura',
    name: 'Curso de Interpretación Radiográfica en Soldadura',
    description: 'Capacitar al personal interesado en el curso teórico-práctico de Interpretación Radiográfica en Soldadura. El curso está desarrollado de acuerdo a la Práctica Recomendada SNT-TC-1A, editada por la American Society for Non-destructive Testing ASNT.',
    objectives: [
      'Interpretar radiografías de soldadura',
      'Aplicar criterios de aceptación/rechazo en radiografías',
      'Identificar defectos en soldadura',
      'Cumplir con normas ASNT y códigos aplicables'
    ],
    targetAudience: 'Personal técnico y profesional en soldadura, inspección y control de calidad.',
    methodology: 'Conforme a Práctica Recomendada SNT-TC-1A (ASNT)',
    chapters: [
      {
        title: 'Capítulo 1. Fundamentos de Radiografía en Soldadura',
        topics: ['Proceso de soldadura', 'Radiografía como herramienta de control', 'Ventajas de radiografía en soldadura', 'Equipos utilizados', 'Normativas aplicables']
      },
      {
        title: 'Capítulo 2. Proceso de Radiografía Industrial',
        topics: ['Fuentes de radiación', 'Técnicas de exposición', 'Película radiográfica', 'Revelado y procesamiento', 'Documentación radiográfica']
      },
      {
        title: 'Capítulo 3. Penetrametría y Control de Calidad',
        topics: ['Indicadores de penetrametría (IQI)', 'Sensibilidad radiográfica', 'Densidad de película', 'Contraste radiográfico', 'Verificación de calidad']
      },
      {
        title: 'Capítulo 4. Defectos en Soldadura',
        topics: ['Porosidad y cavidades', 'Falta de fusión', 'Falta de penetración', 'Grietas en soldadura', 'Inclusiones de escoria', 'Socavación']
      },
      {
        title: 'Capítulo 5. Identificación de Defectos en Radiografía',
        topics: ['Apariencia radiográfica de defectos', 'Imágenes de defectos superficiales', 'Imágenes de defectos internos', 'Artefactos radiográficos', 'Indicaciones verdaderas vs falsas']
      },
      {
        title: 'Capítulo 6. Medición de Defectos en Radiografías',
        topics: ['Técnicas de medición', 'Dimensiones de defectos', 'Profundidad de defectos', 'Longitud de grietas', 'Evaluación de severidad']
      },
      {
        title: 'Capítulo 7. Criterios de Aceptación y Rechazo',
        topics: ['ASME Boiler and Pressure Vessel Code', 'AWS D1.1', 'Criterios por tipo de defecto', 'Tamaño máximo permitido', 'Clasificación de soldadura']
      },
      {
        title: 'Capítulo 8. Radiografía de Soldaduras Circunferenciales',
        topics: ['Tuberías y conductos', 'Recipientes a presión', 'Estructuras tubulares', 'Posición de soldadura', 'Técnicas específicas']
      },
      {
        title: 'Capítulo 9. Radiografía de Soldaduras de Filete',
        topics: ['Soldaduras de ángulo', 'Problemas de radiografía de filete', 'Interpretación de filetes', 'Criterios específicos de filete', 'Limitaciones']
      },
      {
        title: 'Capítulo 10. Procedimientos de Inspección y Documentación',
        topics: ['Procedimientos escritos', 'Secuencia de inspección', 'Registro de datos', 'Informe radiográfico', 'Archivo de radiografías']
      }
    ]
  },
  {
    id: 'liquidos-penetrantes',
    name: 'Curso de Líquidos Penetrantes Nivel I y II',
    description: 'Es un curso de 16 horas dividido en 2 sesiones dirigido a personal profesional, Técnicos, Supervisores de Producción, Personal de Ingeniería, Personal de Control y Aseguramiento de Calidad y Público en General, quienes desean incursionar, realizan o efectúan actividades de inspección de componentes mecánicos, tales como tuberías, estructuras, recipientes atmosféricos, recipientes a presión, etc.',
    duration: '16 horas (2 sesiones)',
    objectives: [
      'Aprender técnicas de inspección con líquidos penetrantes',
      'Identificar discontinuidades superficiales',
      'Aplicar métodos húmedos y métodos secos',
      'Interpretar indicaciones según normas ASNT'
    ],
    targetAudience: 'Personal profesional, técnicos, supervisores de producción, personal de ingeniería, personal de control y aseguramiento de calidad.',
    methodology: 'Métodos húmedos continuo, seco continuo y de campo residual',
    chapters: [
      {
        title: 'Capítulo 1. Introducción a Líquidos Penetrantes',
        topics: ['Antecedentes históricos', 'Principio de funcionamiento', 'Ventajas del método', 'Limitaciones del método', 'Normativas aplicables']
      },
      {
        title: 'Capítulo 2. Física de Penetrantes',
        topics: ['Capilaridad y tensión superficial', 'Mojabilidad de superficies', 'Viscosidad de penetrantes', 'Fluorescencia y visibilidad', 'Propiedades de penetrantes']
      },
      {
        title: 'Capítulo 3. Materiales y Reactivos',
        topics: ['Tipos de penetrantes', 'Penetrantes fluorescentes', 'Penetrantes de color rojo', 'Removedores de penetrante', 'Reveladores', 'Limpiadores']
      },
      {
        title: 'Capítulo 4. Preparación de Superficie',
        topics: ['Limpieza de superficies', 'Secado de piezas', 'Importancia de la preparación', 'Contaminantes que afectan', 'Equipos de limpieza']
      },
      {
        title: 'Capítulo 5. Aplicación de Penetrantes',
        topics: ['Método de aplicación por inmersión', 'Método de aplicación por pulverización', 'Método de aplicación por cepillo', 'Tiempos de penetración', 'Temperatura ambiente']
      },
      {
        title: 'Capítulo 6. Remoción de Exceso de Penetrante',
        topics: ['Métodos de remoción', 'Removedores solubles en agua', 'Removedores emulsionables', 'Limpieza superficial', 'Importancia de la remoción']
      },
      {
        title: 'Capítulo 7. Aplicación de Revelador',
        topics: ['Tipos de revelador', 'Revelador húmedo', 'Revelador seco', 'Métodos de aplicación', 'Tiempos de revelación']
      },
      {
        title: 'Capítulo 8. Interpretación de Indicaciones',
        topics: ['Indicaciones verdaderas', 'Indicaciones falsas', 'Clasificación de defectos', 'Artefactos de inspección', 'Relevancia de indicaciones']
      },
      {
        title: 'Capítulo 9. Métodos de Inspección PT',
        topics: ['Método continuo fluorescente', 'Método continuo de color', 'Método de campo residual', 'Selección de método', 'Postlimpieza']
      },
      {
        title: 'Capítulo 10. Documentación y Procedimientos',
        topics: ['Procedimientos de inspección', 'Registro de indicaciones', 'Documentación fotográfica', 'Informe de resultados', 'Archivos de inspección']
      }
    ]
  },
  {
    id: 'inspeccion-visual',
    name: 'Curso de Inspección Visual Nivel I y II',
    description: 'Es curso dirigido que recoge todos los aquellos temas de inspección visual que un profesional debe conocer.',
    objectives: [
      'Dominar técnicas de inspección visual directa',
      'Aplicar inspección visual documental',
      'Evaluar discontinuidades visuales',
      'Cumplir con criterios ASNT SNT TC-1A'
    ],
    targetAudience: 'Profesionales y técnicos que necesitan competencias en inspección visual.',
    methodology: 'Conforme a ASNT SNT TC-1A',
    chapters: [
      {
        title: 'Capítulo 1. Introducción a Inspección Visual',
        topics: ['Definición de inspección visual', 'Historia y evolución', 'Importancia industrial', 'Ventajas y limitaciones', 'Normativas aplicables']
      },
      {
        title: 'Capítulo 2. Anatomía del Ojo y Visión',
        topics: ['Estructura del ojo', 'Acuidad visual', 'Agudeza visual normal', 'Correcciones visuales', 'Evaluación de visión']
      },
      {
        title: 'Capítulo 3. Iluminación en Inspección Visual',
        topics: ['Fuentes de luz', 'Intensidad lumínica', 'Iluminación natural', 'Iluminación artificial', 'Equipos de iluminación portátil']
      },
      {
        title: 'Capítulo 4. Inspección Visual Directa',
        topics: ['Técnicas de observación', 'Distancia de inspección', 'Ángulo de visión', 'Movimiento sistemático', 'Orientación de iluminación']
      },
      {
        title: 'Capítulo 5. Inspección Visual Remota',
        topics: ['Espejos de inspección', 'Endoscopios rígidos', 'Fibroscopios flexibles', 'Cámaras de video', 'Sistemas remotos avanzados']
      },
      {
        title: 'Capítulo 6. Inspección Visual Dimensional',
        topics: ['Medición visual', 'Medidores portátiles', 'Calibres y patrones', 'Galgas de espesor', 'Verificación de tolerancias']
      },
      {
        title: 'Capítulo 7. Defectos Visibles en Soldaduras',
        topics: ['Porosidad superficial', 'Falta de fusión visible', 'Grietas evidentes', 'Socavación', 'Sobreespesor y protuberancias', 'Deformación']
      },
      {
        title: 'Capítulo 8. Defectos Visibles en Estructura',
        topics: ['Corrosión y oxidación', 'Desgaste y erosión', 'Roturas y deformaciones', 'Desprendimientos de pintura', 'Fisuras visibles', 'Desalineación']
      },
      {
        title: 'Capítulo 9. Documentación en Inspección Visual',
        topics: ['Métodos de registro', 'Fotografía técnica', 'Video inspección', 'Esquemas de defectos', 'Informes técnicos', 'Archivos de datos']
      },
      {
        title: 'Capítulo 10. Criterios de Aceptación/Rechazo',
        topics: ['Estándares ASTM', 'Códigos de construcción', 'Especificaciones de proyecto', 'Límites de aceptación', 'Comunicación de resultados']
      }
    ]
  }
];

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}
