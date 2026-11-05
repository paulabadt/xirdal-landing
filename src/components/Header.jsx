import { useEffect, useState } from 'react'
import { CONFIG, waLink } from '../config.js'
import { ArrowIcon } from './Icons.jsx'

const LINKS = [
  ['Servicios', '#servicios'],
  ['Cómo trabajamos', '#metodo'],
  ['Formación', '#formacion'],
  ['Quiénes somos', '#nosotros'],
]

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`hdr ${solid || open ? 'solid' : ''}`}>
      <div className="wrap hdr-in">
        <a href="#inicio" className="brand" aria-label="xirdal.com, inicio">
          <img src="/logo-light.png" alt="" width="40" height="40" />
          <span>xirdal</span>
        </a>

        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Principal">
          {LINKS.map(([t, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>
              {t}
            </a>
          ))}
        </nav>

        <div className="hdr-cta">
          <a className="btn btn-sm" href={waLink(CONFIG.mensajeDiagnostico)} target="_blank" rel="noopener noreferrer">
            Hablemos <ArrowIcon />
          </a>
          <button className="burger" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
