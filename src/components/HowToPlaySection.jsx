import { motion } from 'framer-motion'
import { Play, Settings, Calculator, Trophy } from 'lucide-react'

const HowToPlaySection = () => {
  const steps = [
    {
      icon: <Play className="w-12 h-12" />,
      title: "1. Empezar a Jugar",
      description: "Haz clic en '¡Empezar a Jugar!' para acceder al menú principal del juego",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "2. Elegir Configuración",
      description: "Selecciona la operación matemática (suma, resta, multiplicación, división), el tipo de números (enteros o fracciones) y el nivel de dificultad",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Calculator className="w-12 h-12" />,
      title: "3. Resolver Problemas",
      description: "Responde las preguntas matemáticas lo más rápido posible. Tienes 60 segundos para resolver tantos problemas como puedas",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <Trophy className="w-12 h-12" />,
      title: "4. Ver Resultados",
      description: "Al final del tiempo, verás tu puntuación, precisión y podrás jugar de nuevo para mejorar tu récord",
      color: "from-yellow-400 to-yellow-600"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          ¿Cómo Jugar?
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Sigue estos sencillos pasos para comenzar tu aventura matemática
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Línea conectora (excepto en el último elemento) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-white/30 z-0" />
            )}
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 relative z-10">
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sección de consejos adicionales */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-white mb-4">💡 Consejos para Mejorar</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
          <div>
            <h4 className="font-semibold text-white mb-2">Practica Regularmente</h4>
            <p>Dedica unos minutos cada día para mejorar tus habilidades matemáticas</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Empieza con Fácil</h4>
            <p>Comienza con el nivel fácil y ve aumentando la dificultad gradualmente</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">No te Rindas</h4>
            <p>Los errores son parte del aprendizaje. ¡Sigue intentando y mejorarás!</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HowToPlaySection

