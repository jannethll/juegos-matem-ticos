import { Button } from '@/components/ui/button.jsx'
import { motion } from 'framer-motion'
import { Newspaper, Calendar, ArrowLeft, Star, Trophy, Zap } from 'lucide-react'

const NewsSection = ({ onGoBack }) => {
  const news = [
    {
      id: 1,
      title: '¡Nueva función de multiplicación disponible!',
      date: '2025-01-07',
      category: 'Actualización',
      icon: Star,
      color: 'from-yellow-400 to-orange-500',
      content: 'Ahora puedes practicar las tablas de multiplicar con nuestro nuevo juego interactivo. ¡Incluye animaciones y efectos especiales!',
      image: '🎉'
    },
    {
      id: 2,
      title: 'Concurso de Matemáticas de Enero',
      date: '2025-01-05',
      category: 'Evento',
      icon: Trophy,
      color: 'from-purple-400 to-pink-500',
      content: 'Participa en nuestro concurso mensual y gana increíbles premios. Los mejores puntajes serán reconocidos en el tablero de honor.',
      image: '🏆'
    },
    {
      id: 3,
      title: 'Consejos para mejorar en suma y resta',
      date: '2025-01-03',
      category: 'Educativo',
      icon: Zap,
      color: 'from-green-400 to-blue-500',
      content: 'Descubre técnicas y trucos que te ayudarán a resolver operaciones matemáticas más rápido y con mayor precisión.',
      image: '💡'
    },
    {
      id: 4,
      title: 'Bienvenidos al nuevo año escolar',
      date: '2025-01-01',
      category: 'Anuncio',
      icon: Star,
      color: 'from-blue-400 to-purple-500',
      content: '¡Feliz año nuevo! Estamos emocionados de acompañarte en tu aventura matemática durante este 2025. ¡Que sea un año lleno de aprendizaje!',
      image: '🎊'
    }
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100 relative overflow-hidden">
      {/* Header */}
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          <Button
            onClick={onGoBack}
            variant="outline"
            className="bg-white/80 hover:bg-white border-2 border-gray-300 flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Volver
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center flex items-center gap-3">
            <Newspaper className="text-indigo-500" size={48} />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Noticias
            </span>
          </h1>
          <div className="w-20"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto"
          >
            Mantente al día con las últimas novedades, eventos y consejos para mejorar en matemáticas.
          </motion.p>

          <div className="space-y-8">
            {news.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-6">
                  {/* Icono y emoji */}
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-16 h-16 bg-gradient-to-br ${article.color} rounded-2xl flex items-center justify-center`}>
                      <article.icon size={32} className="text-white" />
                    </div>
                    <div className="text-4xl">{article.image}</div>
                  </div>

                  {/* Contenido */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`px-3 py-1 bg-gradient-to-r ${article.color} text-white text-sm font-semibold rounded-full`}>
                        {article.category}
                      </span>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar size={16} />
                        {formatDate(article.date)}
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      {article.title}
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {article.content}
                    </p>

                    <Button
                      className={`bg-gradient-to-r ${article.color} hover:opacity-90 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300`}
                    >
                      Leer más
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Mensaje de más noticias */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <div className="bg-white/60 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-gray-600 mb-4">
                ¿Quieres estar al día con todas las novedades?
              </p>
              <Button
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold px-8 py-3 rounded-xl"
              >
                Suscribirse a Notificaciones
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NewsSection

