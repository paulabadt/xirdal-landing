import useReveal from './useReveal.js'
import { CONFIG } from '../config.js'
import { LinkedInIcon } from './Icons.jsx'

export default function About() {
  const ref = useReveal()
  return (
    <section id="nosotros" className="sec" ref={ref}>
      <div className="wrap about">
        <div className="about-logo reveal">
          <img src="/logo-light.png" alt="Logo de xirdal.com" width="320" height="320" loading="lazy" />
        </div>
        <div className="reveal" style={{ '--i': 1 }}>
          <p className="mono tag">Quiénes somos</p>
          <h2>Democratizando la tecnología de alto nivel.</h2>
          <p className="lead">
            xirdal.com nace para que empresas de cualquier tamaño escalen su eficiencia con inteligencia
            artificial y software bien diseñado, sin barreras técnicas innecesarias.
          </p>
          <div className="person">
            <div>
              <strong>Paula Abad</strong>
              <span>CEO xirdal.com · Ingeniera de Software</span>
            </div>
            <a className="btn btn-ghost" href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon /> @pandrebad
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
