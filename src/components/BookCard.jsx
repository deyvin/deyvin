export default function BookCard({ name, description, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-400 hover:shadow-sm transition-all duration-200"
    >
      <p className="font-display font-semibold text-gray-900 text-sm mb-1.5 group-hover:text-gray-700 transition-colors">
        {name}
      </p>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
    </a>
  )
}
