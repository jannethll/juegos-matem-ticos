import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Calculator, Trophy, Users, Gamepad2 } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const FeatureSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const features = [
    {
      icon: <Calculator className="w-16 h-16 text-blue-500" />,
      title: "Matemáticas Divertidas",
      description: "Aprende suma, resta, multiplicación y división de manera interactiva con ejercicios de números enteros y fracciones.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Trophy className="w-16 h-16 text-yellow-500" />,
      title: "Sistema de Puntuación",
      description: "Gana puntos por cada respuesta correcta y compite contigo mismo para mejorar tu precisión y velocidad.",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: <Users className="w-16 h-16 text-green-500" />,
      title: "Personajes Animados",
      description: "Disfruta de adorables personajes que te acompañan y celebran tus logros durante el juego.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Gamepad2 className="w-16 h-16 text-purple-500" />,
      title: "Múltiples Niveles",
      description: "Elige entre diferentes niveles de dificultad: Fácil, Medio y Difícil, adaptados a tu nivel de aprendizaje.",
      color: "from-purple-400 to-purple-600"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [features.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
      <div className="relative h-80 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${features[currentSlide].color} flex items-center justify-center mb-6 shadow-lg`}>
              {features[currentSlide].icon}
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              {features[currentSlide].title}
            </h3>
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              {features[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controles de navegación */}
      <div className="flex justify-between items-center mt-6">
        <Button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 text-white border-none p-3 rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        {/* Indicadores */}
        <div className="flex space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 text-white border-none p-3 rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}

export default FeatureSlider

