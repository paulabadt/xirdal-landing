import { CONFIG } from '../config.js'
import { LinkedInIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <div className="ftr-brand">
          <a href="#inicio" className="brand" aria-label="xirdal.com, inicio">
            <img src="/logo-light.png" alt="" width="44" height="44" />
            <span>xirdal</span>
          </a>
          <p>Democratizando la tecnología de alto nivel para escalar la eficiencia de tu organización.</p>
        </div>
        <a className="social" href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Paula Abad">
          <LinkedInIcon /> LinkedIn
        </a>
      </div>
      <div className="wrap ftr-bot mono">
        <span>© {new Date().getFullYear()} {CONFIG.dominio}</span>
        <span>Todos los derechos reservados</span>
      </div>
    </footer>
  )
}
