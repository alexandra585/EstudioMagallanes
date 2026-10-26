import { Scale, Users, Gavel, Shield, Baby, Briefcase, Building2, Home, BrainCircuit } from 'lucide-react'

export const SITE = {
  name: 'M&M Abogados', legalName: 'Estudio Jurídico Magallanes - Montero (M&M)', tagline: 'Compromiso y excelencia en cada caso',
  phone: '912 417 650', phoneRaw: '51912417650', email: 'abogadoasociadomym@gmail.com',
  whatsapp: 'https://wa.me/51912417650?text=Hola%2C%20necesito%20una%20consulta%20legal%20urgente',
  adminPassword: 'mm2025', // DEMO: reemplazar por autenticación real (JWT / Supabase / Firebase)
  offices: [
    { id: 'independencia', tag: 'Sede corporativa', name: 'Sede Principal – Lima Norte (Independencia)', address: 'Av. Carlos Izaguirre N°154 – 3er Piso, Of. 301, Independencia, Lima', ref: 'Frente a la Municipalidad de Independencia', hours: 'Lunes a Viernes: 8:30 am – 7:00 pm | Sábados previa cita', map: 'https://maps.google.com/?q=Av.+Carlos+Izaguirre+154+Independencia+Lima' },
    { id: 'centro', tag: 'Litigios & Penal', name: 'Sede Centro – Tribunales y Fiscalías', address: 'Cercado de Lima (atención especializada en litigios y casos penales)', ref: 'Contigua al Palacio de Justicia, Ministerio Público y DIRINCRI', hours: 'Cobertura 24 horas para flagrancias e investigaciones urgentes', map: 'https://maps.google.com/?q=Palacio+de+Justicia+Lima' },
  ],
}
export const NAV = [
  { to: '/', label: 'Inicio' }, { to: '/nosotros', label: 'Nosotros', children: [{ to: '/nosotros#quienes', label: '¿Quiénes somos?' }, { to: '/nosotros#equipo', label: 'Nuestro equipo legal' }] }, { to: '/especialidades', label: 'Especialidades' },
  { to: '/blog', label: 'Blog' }, { to: '/contacto', label: 'Contacto' },
]
export const STATS = [{ v: '+18', l: 'Años de litigio' }, { v: 'CAL', l: 'Colegiatura vigente' }, { v: '98%', l: 'Causas favorables' }, { v: '24/7', l: 'Respuesta penal' }]
export const PILLARS = [
  { icon: BrainCircuit, title: 'Compromiso Estratégico', text: 'Diseñamos teorías del caso con rigor científico y procesal. No improvisamos: cada argumento y recurso responde a una arquitectura defensiva blindada.' },
  { icon: Users, title: 'Trato Humano', text: 'Comprendemos el impacto emocional de cada controversia. Brindamos contención honesta, comunicación continua y transparencia sobre las posibilidades reales de su expediente.' },
  { icon: Gavel, title: 'Resultados Contundentes', text: 'Historial comprobable de sobreseimientos, absoluciones, convenios de tenencia favorables y resguardo contractual de patrimonios.' },
]
export const SERVICES = [
  { icon: Shield, title: 'Derecho Penal', badge: 'Urgencia 24/7', text: 'Defensa técnica ante detenciones policiales, comparecencias, apelaciones de prisión preventiva y juicios orales.', items: ['Intervención inmediata en sede fiscal y comisarías', 'Cesación y apelación de prisión preventiva', 'Delitos patrimoniales, estafas y lavado de activos'] },
  { icon: Baby, title: 'Derecho de Familia', badge: 'Civil & Familiar', text: 'Resolución integral de conflictos filiales, salvaguardando el interés superior del menor.', items: ['Divorcios por causal y mutuo acuerdo', 'Fijación, aumento y exoneración de pensión', 'Tenencia exclusiva y régimen de visitas'] },
  { icon: Scale, title: 'Derecho Civil', badge: 'Patrimonial', text: 'Patrocinio en disputas contractuales complejas, defensa de derechos reales y recuperación de acreencias.', items: ['Desalojos judiciales y notariales', 'Sucesiones intestadas y partición judicial', 'Demandas por indemnización de daños'] },
  { icon: Briefcase, title: 'Derecho Laboral', badge: 'Relaciones laborales', text: 'Defensa estratégica de derechos del trabajador y blindaje corporativo ante fiscalizaciones.', items: ['Reposición por despido arbitrario o nulo', 'Liquidación de beneficios sociales y CTS', 'Representación ante SUNAFIL'] },
  { icon: Building2, title: 'Derecho Corporativo', badge: 'Empresarial', text: 'Asesoramiento societario integral para garantizar estabilidad operativa y cumplimiento regulatorio.', items: ['Constitución de SAC, SRL y reorganizaciones', 'Pactos de socios y contratos mercantiles', 'Propiedad intelectual ante INDECOPI'] },
  { icon: Home, title: 'Derecho Inmobiliario', badge: 'Registral & Notarial', text: 'Saneamiento físico-legal de activos, auditoría registral y transacciones de bienes raíces.', items: ['Due diligence registral (SUNARP)', 'Prescripción adquisitiva de dominio', 'Minutas de compraventa y fideicomisos'] },
]
export const STEPS = [
  { n: '01', k: 'Fase inicial', t: 'Diagnóstico Crítico', d: 'Análisis minucioso de actuados en un lapso inferior a 24 horas para definir viabilidad jurídica.' },
  { n: '02', k: 'Dirección colegiada', t: 'Estrategia Conjunta', d: 'Diseño de la teoría del caso en comité con socios expertos, anticipando las tácticas de la contraparte.' },
  { n: '03', k: 'Litigación firme', t: 'Acción Procesal', d: 'Interposición oportuna de recursos y presencia activa en audiencias orales decisivas.' },
  { n: '04', k: 'Rendición y ética', t: 'Reportes Transparentes', d: 'Informes de avance semanales e información directa con el socio a cargo.' },
]
export const TESTIMONIALS = [
  { name: 'Carlos M.', tag: 'Caso penal', text: 'Lograron resolver mi caso penal con gran profesionalismo y rapidez. Excelente trato humano y acompañamiento en cada audiencia.' },
  { name: 'Mariana R.', tag: 'Derecho de familia', text: 'Su asesoría en mi proceso familiar y régimen de tenencia fue impecable. Muy agradecida por la firmeza y empatía con que defendieron los derechos de mis hijos.' },
  { name: 'Ing. Jorge L.', tag: 'Asesoría corporativa', text: 'Resolvieron una contingencia corporativa y contractual compleja salvaguardando el patrimonio de nuestra empresa. Rigor técnico de primer nivel.' },
]
export const TEAM = {
  lead: { name: 'Dr. Magallanes', role: 'Socio Fundador – Especialista Penal', tag: 'Socio principal', text: 'Más de 18 años de trayectoria en litigios penales de alta complejidad, defensas constitucionales y flagrancias en Lima y a nivel nacional.' },
  others: [
    { name: 'Dra. Patricia Montero', role: 'Socia – Derecho de Familia y Civil', tag: 'Socia', text: 'Especialista en litigación civil, sucesiones, régimen de tenencia y procesos de alimentos con enfoque de alta protección patrimonial.' },
    { name: 'Dr. Fernando Salazar', role: 'Abogado Asociado – Corporativo y Laboral', tag: 'Asociado', text: 'Asesor empresarial enfocado en prevención de riesgos, saneamiento societario y defensa en fiscalizaciones laborales.' },
    { name: 'Dra. Lucía Mendoza', role: 'Abogada Litigante – Procesal y Penal', tag: 'Litigante', text: 'Especialista en medidas cautelares, apelaciones y acompañamiento técnico en sede fiscal y judicial.' },
  ],
}
export const VALUES = [
  { t: 'Lealtad Procesal', d: 'Fidelidad inquebrantable a los intereses de la causa y a la confianza de nuestros clientes.' },
  { t: 'Rigor Jurídico', d: 'Profundidad analítica y respaldo doctrinario en cada escrito. No improvisamos.' },
  { t: 'Firmeza y Coraje', d: 'Defensa enérgica en salas de audiencia frente a cualquier contraparte o presión externa.' },
  { t: 'Transparencia Total', d: 'Diagnósticos realistas y evaluación honesta de probabilidades desde la primera consulta.' },
]
export const CATEGORIES = ['Todas', 'Penal', 'Familia', 'Inmobiliario', 'Corporativo']
export const CASE_TYPES = ['Derecho Penal', 'Derecho de Familia', 'Derecho Civil', 'Derecho Laboral', 'Derecho Corporativo', 'Derecho Inmobiliario']
export const INITIAL_POSTS = [
  { id: 1, title: '¿Qué hacer ante una detención arbitraria? Conoce tus derechos', category: 'Penal', date: '2024-10-15', status: 'Publicado', cover: '', excerpt: 'Guía procesal sobre las primeras 24 horas tras una intervención policial: derecho a guardar silencio y comunicación inmediata con un abogado.', content: '' },
  { id: 2, title: 'Pensión de alimentos en Lima: criterios de cálculo y medidas cautelares', category: 'Familia', date: '2024-11-02', status: 'Publicado', cover: '', excerpt: 'Cómo fijar o aumentar una pensión alimentaria, los documentos probatorios indispensables y la asignación anticipada.', content: '' },
  { id: 3, title: 'Claves para un saneamiento de títulos y compraventa segura de inmuebles', category: 'Inmobiliario', date: '2024-11-28', status: 'Publicado', cover: '', excerpt: 'Análisis de partidas registrales en SUNARP, prevención de gravámenes ocultos y cláusulas de blindaje patrimonial.', content: '' },
  { id: 4, title: 'Compliance empresarial y prevención de contingencias penales para socios', category: 'Corporativo', date: '2024-12-10', status: 'Borrador', cover: '', excerpt: 'Protocolos de cumplimiento normativo y blindaje de responsabilidad de administradores ante fiscalizaciones.', content: '' },
]

// Pegue aquí URLs reales (o rutas en /public). Vacío = placeholder elegante.
export const IMAGES = { heroVideo: '', hero: '', about: '', room: '', team: '', contactMap: '' }
export const CLIENTS = ['Sector Corporativo', 'Inmobiliarias', 'Familias', 'Constructoras', 'Comercio', 'Salud']
