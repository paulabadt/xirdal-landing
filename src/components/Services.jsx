import useReveal from './useReveal.js'
import { ArrowIcon } from './Icons.jsx'

const SERVICES = [
  {
    n: '01',
    t: 'Integración de Inteligencia Artificial',
    d: 'Incorporamos IA en los sistemas para automatizar procesos, optimizar operaciones y mejorar la toma de decisiones estratégicas.',
    tags: ['Asistentes', 'Automatización', 'Predicción'],
  },
  {
    n: '02',
    t: 'Arquitecturas Escalables',
    d: 'Diseñamos plataformas y estructuras robustas, preparadas técnicamente para crecer junto con el volumen de tu negocio.',
    tags: ['Cloud', 'APIs', 'Bases de datos'],
  },
  {
    n: '03',
    t: 'Automatización low-code',
    d: 'Conectamos las herramientas que ya usas y eliminamos tareas repetitivas con soluciones low-code, sin reinventar tus sistemas.',
    tags: ['Flujos', 'Formularios', 'Integraciones'],
  },
  {
    n: '04',
    t: 'Datos y analítica',
    d: 'Unificamos tu información y la convertimos en tableros y modelos que ayudan a anticipar ventas, demanda y riesgos.',
    tags: ['Tableros', 'Modelos', 'Reportes'],
  },
  {
    n: '05',
    t: 'Ciberseguridad',
    d: 'Protegemos tu información y tus sistemas incorporando buenas prácticas de seguridad desde el diseño.',
    tags: ['Buenas prácticas', 'Accesos', 'Protección de datos'],
  },
]

export default function Services() {
  const ref = useReveal()
  return (
    <section id="servicios" className="sec" ref={ref}>
      <div className="wrap">
        <div className="sec-head reveal">
          <p className="mono tag">Servicios</p>
          <h2>Tecnología de alto nivel, al alcance de tu empresa.</h2>
        </div>
        <ul className="svc">
          {SERVICES.map((s, i) => (
            <li key={s.n} className="svc-row reveal" style={{ '--i': i }}>
              <span className="mono svc-n">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <div className="svc-tags">
                {s.tags.map((t) => (
                  <span key={t} className="mono">{t}</span>
                ))}
              </div>
              <ArrowIcon className="svc-arrow" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
