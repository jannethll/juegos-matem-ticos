import { Button } from '@/components/ui/button.jsx'
import { motion } from 'framer-motion'
import { Star, Zap, Crown } from 'lucide-react'

const DifficultySelector = ({ onSelectDifficulty, onSelectType, onGoBack }) => {
  const difficulties = [
    {
      id: 'facil',
      name: 'Fácil',
      description: 'Números pequeños y operaciones básicas',
      icon: Star,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      id: 'medio',
      name: 'Medio',
      description: 'Números medianos y más desafío',
      icon: Zap,
      color: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      id: 'dificil',
      name: 'Difícil',
      description: 'Números grandes y operaciones complejas',
      icon: Crown,
      color: 'bg-red-400 hover:bg-orange-600'
    }
  ]

  const types = [
    {
      id: 'integer',
      name: 'Números Enteros',
      description: 'Operaciones con números enteros',
      emoji: '🔢'
    },
    {
      id: 'fraction',
      name: 'Fracciones',
      description: 'Operaciones con fracciones',
      emoji: '🍰'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-500 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          ¡Elige tu Desafío!
        </h1>
        <p className="text-xl text-white/90">
          Selecciona el tipo de ejercicio y la dificultad
        </p>
      </motion.div>

      {/* Selector de tipo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Tipo de Ejercicio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {types.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Button
                onClick={() => onSelectType(type.id)}
                className="w-full h-32 bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-4xl mb-2">{type.emoji}</div>
                  <div className="text-xl font-bold">{type.name}</div>
                  <div className="text-sm opacity-80">{type.description}</div>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Selector de dificultad */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-white mb-4 text-center">
          Nivel de Dificultad
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {difficulties.map((difficulty, index) => {
            const IconComponent = difficulty.icon
            return (
              <motion.div
                key={difficulty.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                <Button
                  onClick={() => onSelectDifficulty(difficulty.id)}
                  className={`w-full h-32 ${difficulty.color} text-white border-none transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                  <div className="text-center">
                    <IconComponent className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-xl font-bold">{difficulty.name}</div>
                    <div className="text-sm opacity-90">{difficulty.description}</div>
                  </div>
                </Button>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Botón de regreso */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Button
          onClick={onGoBack}
          className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm px-8 py-3 text-lg"
        >
          ← Volver al Menú
        </Button>
      </motion.div>
    </div>
  )
}

export default DifficultySelector

