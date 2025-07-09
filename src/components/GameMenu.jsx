import { Button } from '@/components/ui/button.jsx'
import { motion } from 'framer-motion'
import { Calculator, Plus, Minus, X, Divide, BookOpen, User, Settings, Newspaper } from 'lucide-react'

const GameMenu = ({ onSelectOperation, onGoBack }) => {
  const operations = [
    { id: 'suma', name: 'Sumar', icon: Plus, color: 'from-green-400 to-green-600' },
    { id: 'resta', name: 'Restar', icon: Minus, color: 'from-blue-400 to-blue-600' },
    { id: 'multiplicacion', name: 'Multiplicar', icon: X, color: 'from-purple-400 to-purple-600' },
    { id: 'division', name: 'Dividir', icon: Divide, color: 'from-red-400 to-red-600' }
  ]

  const additionalOptions = [
    { id: 'teoria', name: 'Teoría', icon: BookOpen, color: 'from-yellow-400 to-yellow-600' },
    { id: 'noticias', name: 'Noticias', icon: Newspaper, color: 'from-indigo-400 to-indigo-600' },
    { id: 'perfil', name: 'Perfil', icon: User, color: 'from-pink-400 to-pink-600' },
    { id: 'ajustes', name: 'Ajustes', icon: Settings, color: 'from-gray-400 to-gray-600' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-20 h-20 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-32 right-24 w-16 h-16 bg-pink-300 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-24 left-32 w-24 h-24 bg-blue-300 rounded-full opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute bottom-16 right-16 w-18 h-18 bg-green-300 rounded-full opacity-35 animate-bounce delay-500"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 pt-8 pb-4">
        <div className="flex items-center justify-between px-6">
          <Button
            onClick={onGoBack}
            variant="outline"
            className="bg-white/80 hover:bg-white border-2 border-gray-300"
          >
            ← Volver
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Elige tu Aventura
            </span>
          </h1>
          <div className="w-20"></div> {/* Spacer */}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 px-6 pb-8">
        {/* Operaciones matemáticas */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 text-center mb-8">
            Operaciones Matemáticas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {operations.map((operation, index) => (
              <motion.div
                key={operation.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Button
                  onClick={() => onSelectOperation(operation.id)}
                  className={`w-full h-32 bg-gradient-to-br ${operation.color} hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl flex flex-col items-center justify-center text-white font-bold text-lg`}
                >
                  <operation.icon size={40} className="mb-2" />
                  {operation.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Opciones adicionales */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 text-center mb-8">
            Más Opciones
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {additionalOptions.map((option, index) => (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (operations.length + index) * 0.1 }}
              >
                <Button
                  onClick={() => onSelectOperation(option.id)}
                  className={`w-full h-32 bg-gradient-to-br ${option.color} hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl flex flex-col items-center justify-center text-white font-bold text-lg`}
                >
                  <option.icon size={40} className="mb-2" />
                  {option.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameMenu

