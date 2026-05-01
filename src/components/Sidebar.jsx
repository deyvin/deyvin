export default function Sidebar() {
  const socials = [
    {
      label: 'YouTube',
      url: 'https://www.youtube.com/@manodeyvin',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      url: 'https://instagram.com/manodeyvin',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/deyvidnascimento',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'X (Twitter)',
      url: 'https://x.com/manodeyvin',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.857L2.25 2.25h6.945l4.26 5.634 5.79-5.634zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ]

  return (
    <aside className="lg:w-64 lg:flex-shrink-0 lg:sticky lg:top-16 lg:self-start">
      <div className="flex flex-col items-start gap-4">

        {/* Avatar */}
        <img
          src="/assets/images/profile.jpeg"
          alt="Deyvid Nascimento"
          className="w-20 h-20 rounded-full object-cover ring-2 ring-white shadow-md"
        />

        {/* Name */}
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight leading-tight text-gray-900">
            Deyvid Nascimento
          </h1>
          <p className="text-sm text-gray-500 mt-0.5 font-medium">@deyvin</p>
        </div>

        {/* Bio */}
        <p className="text-sm text-gray-600 leading-relaxed">
          Programo há mais de 20 anos, hoje faço SaaS sozinho em Rails.
          <br />
          O cara por trás do{' '}
          <a
            href="https://www.youtube.com/@manodeyvin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 font-medium hover:underline"
          >
            @manodeyvin
          </a>
          .
        </p>

        {/* Social links */}
        <div className="flex flex-col gap-2 w-full">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-gray-900 transition-colors group"
            >
              <span className="text-gray-400 group-hover:text-gray-700 transition-colors">
                {s.icon}
              </span>
              {s.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200" />

        {/* Footer note */}
        <p className="text-xs text-gray-400 leading-relaxed">
          Projetos, produtos e links que valem seu tempo.
        </p>
      </div>
    </aside>
  )
}
