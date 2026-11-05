import { CONFIG, waLink } from '../config.js'
import NetworkCanvas from './NetworkCanvas.jsx'
import { ArrowIcon, WhatsAppIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <NetworkCanvas />
      <div className="hero-fade" aria-hidden="true" />
      <div className="wrap hero-in">
        <p className="mono tag rise" style={{ '--d': '.1s' }}>xirdal.com · Software con inteligencia artificial</p>
        <h1 className="rise" style={{ '--d': '.2s' }}>
          Tu operación, <br />a la velocidad <br />de la IA.
        </h1>
        <p className="lead rise" style={{ '--d': '.4s' }}>
          Integramos inteligencia artificial y diseñamos arquitecturas escalables para que tu empresa
          automatice procesos, decida con datos y crezca sin fricción.
        </p>
        <div className="hero-btns rise" style={{ '--d': '.55s' }}>
          <a className="btn" href={waLink(CONFIG.mensajeDiagnostico)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Agenda tu diagnóstico gratuito
          </a>
          <a className="btn btn-ghost" href="#servicios">
            Conoce los servicios <ArrowIcon />
          </a>
        </div>
        <p className="mono hero-note rise" style={{ '--d': '.7s' }}>
          <i className="pulse" /> Diagnóstico técnico de 15 min · Cupos limitados
        </p>
      </div>
      <a href="#servicios" className="scroll mono" aria-label="Bajar">Scroll</a>
    </section>
  )
}
