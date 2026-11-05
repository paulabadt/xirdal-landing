import useReveal from './useReveal.js'
import { CONFIG, waLink } from '../config.js'
import { WhatsAppIcon } from './Icons.jsx'

const OUTCOMES = [
  'Un diagnóstico de oportunidades de automatización de tu empresa.',
  'Al menos una solución low-code funcionando: automatización, aplicación o tablero.',
  'Una biblioteca de instrucciones de IA para tareas reales de tu negocio.',
  'Un plan de implementación con acciones e indicadores.',
]

export default function Course() {
  const ref = useReveal()
  return (
    <section id="formacion" className="sec light" ref={ref}>
      <div className="wrap course">
        <div className="reveal">
          <p className="mono tag"><i className="pulse dark" /> Cupos limitados</p>
          <h2>Low Code para Empresas</h2>
          <p className="lead">Automatiza, simplifica y haz crecer tu negocio con IA. Formación práctica para empresarios, gerentes y equipos administrativos. No necesitas saber programar.</p>
          <dl className="facts">
            <div><dt className="mono">Formato</dt><dd>8 sesiones de 4 horas</dd></div>
            <div><dt className="mono">Patrocina</dt><dd>Cámara de Comercio Aburrá Sur</dd></div>
            <div><dt className="mono">Aliado estratégico</dt><dd>SENA</dd></div>
          </dl>
          <a className="btn btn-dark" href={waLink(CONFIG.mensajeCurso)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Reservar mi cupo
          </a>
        </div>
        <div className="reveal" style={{ '--i': 1 }}>
          <p className="mono tag">Al terminar tendrás</p>
          <ul className="outs">
            {OUTCOMES.map((o, i) => (
              <li key={o}><span className="mono">{String(i + 1).padStart(2, '0')}</span>{o}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
