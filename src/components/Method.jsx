import useReveal from './useReveal.js'
import { ArchArt, NetArt } from './Visuals.jsx'

const STEPS = [
  { n: '01', t: 'Diagnóstico', d: 'Revisamos tus flujos de trabajo actuales y encontramos qué operaciones puedes delegar a la IA hoy mismo. Es gratis y dura 15 minutos.' },
  { n: '02', t: 'Diseño', d: 'Definimos la arquitectura y las herramientas adecuadas para tu caso: lo justo para resolver el problema y crecer después.' },
  { n: '03', t: 'Implementación', d: 'Construimos, conectamos y probamos la solución contigo, y dejamos indicadores claros para medir el ahorro de tiempo.' },
]

export default function Method() {
  const ref = useReveal()
  return (
    <section id="metodo" className="sec sec-alt" ref={ref}>
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="mono tag">Cómo trabajamos</p>
          <h2>De un problema operativo a una solución funcionando.</h2>
        </div>

        <div className="method">
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.n} className="reveal" style={{ '--i': i }}>
                <span className="mono">{s.n}</span>
                <div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="arts">
            <figure className="art-card reveal"><ArchArt /><figcaption className="mono">Arquitectura por capas</figcaption></figure>
            <figure className="art-card reveal" style={{ '--i': 1 }}><NetArt /><figcaption className="mono">IA conectada a tus datos</figcaption></figure>
          </div>
        </div>
      </div>
    </section>
  )
}
