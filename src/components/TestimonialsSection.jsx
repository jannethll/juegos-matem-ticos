import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sofía Martínez",
      age: 9,
      grade: "4º Grado",
      text: "¡Me encanta este juego! Los personajes son súper lindos y ahora las matemáticas son mi materia favorita. Mi mamá dice que he mejorado mucho.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Diego Fernández",
      age: 8,
      grade: "3º Grado",
      text: "Las fracciones ya no me dan miedo. El juego me ayuda a entender mejor y la música hace que sea divertido estudiar.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Valentina Torres",
      age: 10,
      grade: "4º Grado",
      text: "Juego todos los días después de hacer la tarea. Me gusta competir conmigo misma para mejorar mi puntuación. ¡Ya llegué al nivel difícil!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Mateo Ruiz",
      age: 9,
      grade: "3º Grado",
      text: "Antes odiaba las matemáticas, pero ahora es como un videojuego. Los personajes animados me hacen reír cuando acierto las respuestas.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    }
  ]

  const parentTestimonials = [
    {
      name: "Carmen López",
      relation: "Madre de Sofía",
      text: "Como maestra, recomiendo esta aplicación a todos mis colegas. Es increíble ver cómo los niños se motivan a aprender matemáticas de forma autónoma.",
      rating: 5
    },
    {
      name: "Roberto Martínez",
      relation: "Padre de Diego",
      text: "Mi hijo pasó de tener dificultades con las matemáticas a pedirme tiempo extra para 'jugar con los números'. El cambio ha sido notable.",
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ))
  }

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
          Lo Que Dicen Nuestros Usuarios
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Testimonios reales de estudiantes y padres que han transformado su relación con las matemáticas
        </p>
      </motion.div>

      {/* Testimonios de estudiantes */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white text-center mb-8">👦👧 Estudiantes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover shadow-md"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-blue-300">{testimonial.age} años • {testimonial.grade}</p>
                    </div>
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-white/30" />
                    <p className="text-white/90 italic pl-4">"{testimonial.text}"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonios de padres */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-white text-center mb-8">👨‍👩‍👧‍👦 Padres y Educadores</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {parentTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-purple-300">{testimonial.relation}</p>
                </div>
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-white/30" />
                <p className="text-white/90 italic pl-4">"{testimonial.text}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Estadísticas */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-8"
      >
        <h3 className="text-2xl font-bold text-white text-center mb-8">📊 Nuestro Impacto</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-2">1,500+</div>
            <p className="text-white/80">Estudiantes Activos</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <p className="text-white/80">Mejora en Calificaciones</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">50,000+</div>
            <p className="text-white/80">Problemas Resueltos</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">4.9/5</div>
            <p className="text-white/80">Calificación Promedio</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default TestimonialsSection

