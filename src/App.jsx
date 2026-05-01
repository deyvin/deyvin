import Sidebar from './components/Sidebar'
import ProductCard from './components/ProductCard'
import BookCard from './components/BookCard'
import SectionTitle from './components/SectionTitle'

const products = [
  {
    name: 'Mano Deyvin',
    category: 'YouTube',
    icon: '▶',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
    description: 'Muita ironia sobre tecnologia, carreira e aleatoriedades da bolha tech.',
    url: 'https://www.youtube.com/@manodeyvin',
    status: 'GROWING',
    statusColor: 'text-emerald-600 bg-emerald-50',
    metric: 'inscritos',
    displayValue: '320k',
    chartColor: '#ef4444',
    data: [42, 58, 74, 95, 118, 142, 171, 203, 240, 271, 298, 320],
  },
  {
    name: 'Find My SaaS',
    category: 'Marketplace',
    icon: '🔍',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    description: 'O marketplace para descobrir, comparar e encontrar SaaS que resolvem seus problemas.',
    url: 'https://find-my-saas.com',
    status: 'LIVE',
    statusColor: 'text-emerald-600 bg-emerald-50',
    metric: 'usuários ativos',
    displayValue: '16k',
    chartColor: '#3b82f6',
    data: [1, 2, 3, 5, 7, 8, 10, 11, 13, 14, 15, 16],
  },
  {
    name: 'Santo Terço',
    category: 'App',
    icon: '📿',
    iconBg: 'bg-violet-50',
    iconColor: 'text-violet-500',
    description: 'Um companheiro silencioso para rezar o terço — áudio guiado, mistérios do dia e o seu próprio ritmo.',
    url: 'https://santoterco.app',
    status: 'LIVE',
    statusColor: 'text-emerald-600 bg-emerald-50',
    metric: 'usuários',
    displayValue: '—',
    chartColor: '#8b5cf6',
    data: [0, 0, 0, 0, 1, 1, 2, 3, 4, 5, 7, 9],
  },
]

const books = [
  {
    name: 'Ultra Aprendizado',
    description: 'Estruture seus estudos de programação, inglês e muito mais.',
    url: 'https://amzn.to/4cs9xcz',
  },
  {
    name: 'A Startup Enxuta',
    description: 'Obrigatório pra qualquer um que quer criar algo na internet.',
    url: 'https://amzn.to/3vdLP3d',
  },
  {
    name: 'Seja Egoísta com sua Carreira',
    description: 'Pra quem está em crise de identidade na empresa ou carreira.',
    url: 'https://amzn.to/4cq3jtO',
  },
  {
    name: 'Indistraível',
    description: 'Antídoto para pessoas impulsivas no mundo cheio de gatilhos.',
    url: 'https://amzn.to/494RPZY',
  },
]

const courses = [
  {
    name: 'Sem grana?',
    description: 'Curso em Vídeo do Gustavo Guanabara. Didática incrível e gratuito.',
    url: 'https://www.youtube.com/@CursoemVideo',
  },
  {
    name: 'Tem uma graninha?',
    description: 'Curso do Deschamps, fullstack com didática braba.',
    url: 'https://curr.to/curso-telo',
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#f9f9f7] font-body">
      <div className="max-w-5xl mx-auto px-4 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* Sidebar */}
          <Sidebar />

          {/* Main content */}
          <main className="flex-1 min-w-0">

            {/* Products */}
            <SectionTitle>Meus Produtos</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {products.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>

            {/* Books */}
            <SectionTitle>📚 Livros que recomendo</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {books.map((b) => (
                <BookCard key={b.name} {...b} />
              ))}
            </div>

            {/* Courses */}
            <SectionTitle>🎓 Cursos que recomendo</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courses.map((c) => (
                <BookCard key={c.name} {...c} />
              ))}
            </div>

          </main>
        </div>
      </div>
    </div>
  )
}
