// ============================================================
//  CONFIGURACIÓN DEL SITIO: aquí cambias textos y enlaces
// ============================================================
export const CONFIG = {
  dominio: 'xirdal.com',
  whatsapp: '573113724894', // 57 = Colombia + tu número
  linkedin: 'https://www.linkedin.com/in/pandrebad/',

  mensajeCurso:
    'Hola Paula, vi xirdal.com y quiero reservar mi cupo en Low Code para Empresas.',
  mensajeDiagnostico:
    'Hola Paula, vi xirdal.com y quiero agendar el diagnóstico técnico gratuito de 15 minutos.',

  // Banner central que aparece al abrir la página
  banner: {
    etiqueta: 'Cupos limitados',
    titulo: 'Low Code para Empresas',
    subtitulo: 'Automatiza, simplifica y haz crecer tu negocio con IA',
    datos: [
      '8 sesiones de 4 horas',
      'Patrocina: Cámara de Comercio Aburrá Sur',
      'Aliado estratégico: SENA',
    ],
    fecha: '', // Ej.: 'Inicia el 18 de noviembre'. Si lo dejas vacío, no se muestra.
    boton: 'Reservar mi cupo por WhatsApp',
  },
}

export const waLink = (mensaje = CONFIG.mensajeCurso) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensaje)}`
