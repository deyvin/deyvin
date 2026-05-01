import Sparkline from './Sparkline'

export default function ProductCard({
  name,
  category,
  icon,
  iconBg,
  description,
  url,
  status,
  statusColor,
  metric,
  displayValue,
  chartColor,
  data,
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-400 hover:shadow-sm transition-all duration-200"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center text-lg`}>
            {icon}
          </div>
          <div>
            <p className="font-display font-semibold text-gray-900 text-sm leading-tight group-hover:text-gray-700 transition-colors">
              {name}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{category}</p>
          </div>
        </div>
        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide ${statusColor}`}>
          {status}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed mb-4">{description}</p>

      {/* Metric + Chart */}
      <div className="flex items-end justify-between">
        <div>
          <p className="font-display text-2xl font-bold text-gray-900 leading-none">{displayValue}</p>
          <p className="text-[11px] text-gray-400 mt-1">{metric}</p>
        </div>
        <Sparkline data={data} color={chartColor} />
      </div>
    </a>
  )
}
