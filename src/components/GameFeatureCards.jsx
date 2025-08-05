import { motion } from 'framer-motion'
import { Music, Zap, Brain, Star, Clock, Target } from 'lucide-react'

const GameFeatureCards = () => {
  const features = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Música Animada",
      description: "Disfruta de música de fondo alegre que hace el aprendizaje más divertido",
      color: "from-pink-400 to-rose-500",
      delay: 0.1
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Respuesta Instantánea",
      description: "Recibe feedback inmediato con efectos visuales y sonoros",
      color: "from-yellow-400 to-orange-500",
      delay: 0.2
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Ejercicios Adaptativos",
      description: "Problemas que se ajustan a tu nivel de conocimiento",
      color: "from-blue-400 to-indigo-500",
      delay: 0.3
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Sistema de Logros",
      description: "Desbloquea logros y mejora tu puntuación personal",
      color: "from-purple-400 to-violet-500",
      delay: 0.4
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Desafíos Cronometrados",
      description: "Mejora tu velocidad de cálculo con ejercicios contra reloj",
      color: "from-green-400 to-emerald-500",
      delay: 0.5
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precisión y Exactitud",
      description: "Desarrolla habilidades matemáticas precisas y confiables",
      color: "from-red-400 to-pink-500",
      delay: 0.6
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: feature.delay }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="group"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {feature.icon}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
              {feature.title}
            </h3>
            
            <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300">
              {feature.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default GameFeatureCards

