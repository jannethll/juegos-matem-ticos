import { Button } from '@/components/ui/button.jsx'
import { motion } from 'framer-motion'
import { BookOpen, Plus, Minus, X, Divide, ArrowLeft } from 'lucide-react'

const TheorySection = ({ onGoBack }) => {
  const topics = [
    {
      id: 'suma',
      title: 'Suma',
      icon: Plus,
      color: 'from-green-400 to-green-600',
      description: 'Aprende a sumar números de manera fácil y divertida.',
      content: [
        'La suma es juntar dos o más números para obtener un total.',
        'Ejemplo: 5 + 3 = 8',
        'Puedes usar tus dedos para contar al principio.',
        'Siempre empezamos con el número más grande y agregamos el más pequeño.'
      ]
    },
    {
      id: 'resta',
      title: 'Resta',
      icon: Minus,
      color: 'from-blue-400 to-blue-600',
      description: 'Descubre cómo quitar números de manera sencilla.',
      content: [
        'La resta es quitar una cantidad de otra cantidad.',
        'Ejemplo: 8 - 3 = 5',
        'Imagina que tienes 8 caramelos y comes 3, te quedan 5.',
        'El resultado de una resta siempre es menor que el primer número.'
      ]
    },
    {
      id: 'multiplicacion',
      title: 'Multiplicación',
      icon: X,
      color: 'from-purple-400 to-purple-600',
      description: 'Aprende las tablas de multiplicar de forma divertida.',
      content: [
        'La multiplicación es sumar un número varias veces.',
        'Ejemplo: 4 × 3 = 12 (es lo mismo que 4 + 4 + 4)',
        'Las tablas de multiplicar nos ayudan a calcular más rápido.',
        'Empieza con las tablas del 1, 2 y 5 que son más fáciles.'
      ]
    },
    {
      id: 'division',
      title: 'División',
      icon: Divide,
      color: 'from-red-400 to-red-600',
      description: 'Aprende a repartir números en partes iguales.',
      content: [
        'La división es repartir una cantidad en partes iguales.',
        'Ejemplo: 12 ÷ 3 = 4 (repartir 12 en 3 grupos iguales)',
        'Es lo contrario de la multiplicación.',
        'Imagina repartir 12 galletas entre 3 amigos, cada uno recibe 4.'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 relative overflow-hidden">
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
            <BookOpen className="text-orange-500" size={48} />
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Teoría Matemática
            </span>
          </h1>
          <div className="w-20"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto"
          >
            Aquí puedes aprender los conceptos básicos de las matemáticas de una manera fácil y divertida.
            ¡Selecciona un tema para comenzar!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${topic.color} rounded-2xl flex items-center justify-center`}>
                    <topic.icon size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{topic.title}</h3>
                    <p className="text-gray-600">{topic.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {topic.content.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button
                    className={`w-full bg-gradient-to-r ${topic.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300`}
                  >
                    Practicar {topic.title}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheorySection

