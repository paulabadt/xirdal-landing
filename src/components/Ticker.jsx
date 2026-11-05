const ITEMS = [
  'Integración de IA',
  'Arquitecturas escalables',
  'Automatización de procesos',
  'Ciencia de datos',
  'Ciberseguridad',
  'Consultoría tecnológica',
]

export default function Ticker() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {row.map((t, i) => (
          <span key={i} className="mono">{t}<b>/</b></span>
        ))}
      </div>
    </div>
  )
}
