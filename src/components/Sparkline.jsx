export default function Sparkline({ data, color = '#22c55e' }) {
  const W = 140
  const H = 48
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const pad = 4

  const pts = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (W - pad * 2)
    const y = pad + (1 - (v - min) / range) * (H - pad * 2)
    return [x, y]
  })

  const line = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ')

  // Area fill path
  const first = pts[0]
  const last = pts[pts.length - 1]
  const area = `${line} L ${last[0]} ${H} L ${first[0]} ${H} Z`

  const gradId = `g-${color.replace('#', '')}`

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} fill="none" className="overflow-visible">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.15" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gradId})`} />
      <path
        d={line}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Last point dot */}
      <circle cx={last[0]} cy={last[1]} r="3" fill={color} />
    </svg>
  )
}
