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
    metric: 'Inscritos',
    chartColor: '#ef4444',
    data: [8, 10, 9, 14, 18, 16, 22, 27, 25, 34, 42, 51],
  },
  {
    name: 'Find My SaaS',
    category: 'Marketplace',
    icon: '🔍',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    description: 'O marketplace para descobrir, comparar e encontrar SaaS que resolvem seus problemas.',
    url: 'https://find-my-saas.com',
    status: 'BUILDING',
    statusColor: 'text-amber-600 bg-amber-50',
    metric: 'Listings',
    chartColor: '#3b82f6',
    data: [3, 5, 8, 11, 15, 19, 17, 24, 30, 36, 42, 55],
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
