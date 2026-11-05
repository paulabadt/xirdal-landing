import { useEffect, useRef, useState } from 'react'
import { CONFIG, waLink } from '../config.js'
import { CloseIcon, WhatsAppIcon } from './Icons.jsx'

// Banner en el centro de la pantalla: aparece cada vez que se abre la página
export default function PromoBanner() {
  const [open, setOpen] = useState(true)
  const cta = useRef(null)
  const b = CONFIG.banner

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => cta.current && cta.current.focus({ preventScroll: true }), 400)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      clearTimeout(t)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <div
        className={`promo-ovl ${open ? 'on' : ''}`}
        onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        aria-hidden={!open}
      >
        <div className="promo" role="dialog" aria-modal="true" aria-labelledby="promo-t">
          <button className="promo-x" onClick={() => setOpen(false)} aria-label="Cerrar banner">
            <CloseIcon />
          </button>
          <img className="promo-logo" src="/logo-light.png" alt="" width="64" height="64" />
          <span className="promo-badge mono"><i className="pulse" /> {b.etiqueta}</span>
          <h2 id="promo-t">{b.titulo}</h2>
          <p className="promo-sub">{b.subtitulo}</p>
          <ul className="promo-list">
            {b.datos.map((d) => (<li key={d}>{d}</li>))}
            {b.fecha && <li className="strong">{b.fecha}</li>}
          </ul>
          <a ref={cta} className="btn btn-lg" href={waLink(CONFIG.mensajeCurso)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> {b.boton}
          </a>
          <button className="promo-skip" onClick={() => setOpen(false)}>Ahora no, quiero ver la página</button>
        </div>
      </div>

      {!open && (
        <button className="promo-pill mono" onClick={() => setOpen(true)}>
          <i className="pulse" /> {b.titulo} · {b.etiqueta}
        </button>
      )}
    </>
  )
}
