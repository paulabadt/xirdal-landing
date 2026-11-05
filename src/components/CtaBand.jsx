import useReveal from './useReveal.js'
import { CONFIG, waLink } from '../config.js'
import { WhatsAppIcon } from './Icons.jsx'

export default function CtaBand() {
  const ref = useReveal()
  return (
    <section className="sec cta-band" ref={ref}>
      <div className="wrap reveal">
        <h2>¿Tu empresa está lista para el siguiente nivel?</h2>
        <p className="lead">Agenda un diagnóstico técnico gratuito de 15 minutos y descubre qué puedes delegar a la IA hoy mismo.</p>
        <a className="btn btn-lg" href={waLink(CONFIG.mensajeDiagnostico)} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon /> Escríbeme por WhatsApp
        </a>
        <p className="mono hero-note"><i className="pulse" /> Cupos limitados</p>
      </div>
    </section>
  )
}
