// Ilustraciones vectoriales propias (no dependen de imágenes externas)

export function ArchArt() {
  const layers = [150, 112, 74, 36]
  return (
    <svg viewBox="0 0 400 280" className="art" role="img" aria-label="Capas de una arquitectura escalable">
      <defs>
        <linearGradient id="gA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".16" />
          <stop offset="1" stopColor="#fff" stopOpacity=".03" />
        </linearGradient>
      </defs>
      {[60, 140, 200, 260, 340].map((x) => (
        <line key={x} x1={x} y1="20" x2={x} y2="250" stroke="#fff" strokeOpacity=".07" />
      ))}
      <line x1="200" y1="30" x2="200" y2="220" stroke="#fff" strokeOpacity=".35" strokeDasharray="3 5" />
      {layers.map((y, i) => (
        <g key={y} style={{ animation: `float 6s ease-in-out ${i * 0.4}s infinite` }}>
          <polygon points={`50,${y + 40} 200,${y} 350,${y + 40} 200,${y + 80}`} fill="url(#gA)" stroke="#fff" strokeOpacity={0.35 + i * 0.15} />
          <circle cx="200" cy={y + 40} r="3" fill="#fff" />
        </g>
      ))}
      <circle r="4" fill="#fff" className="travel" />
    </svg>
  )
}

export function NetArt() {
  const N = [
    [200, 140, 11], [90, 70, 5], [310, 60, 5], [60, 190, 5], [335, 200, 5],
    [150, 235, 4], [265, 245, 4], [130, 125, 3], [275, 120, 3], [200, 55, 3],
  ]
  const E = [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[1,7],[2,8],[1,9],[2,9],[3,7],[4,8],[5,6],[3,5],[4,6]]
  return (
    <svg viewBox="0 0 400 280" className="art" role="img" aria-label="Red de nodos conectados por inteligencia artificial">
      {E.map(([a, b], i) => (
        <line key={i} x1={N[a][0]} y1={N[a][1]} x2={N[b][0]} y2={N[b][1]} stroke="#fff" strokeOpacity=".28" />
      ))}
      {N.map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r + 7} fill="none" stroke="#fff" strokeOpacity=".15" style={{ animation: `ring 3.2s ease-out ${i * 0.3}s infinite`, transformOrigin: `${x}px ${y}px` }} />
          <circle cx={x} cy={y} r={r} fill={i === 0 ? '#fff' : '#0a0a0a'} stroke="#fff" strokeWidth="1.5" />
        </g>
      ))}
    </svg>
  )
}
