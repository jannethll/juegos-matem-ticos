import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code, Heart } from 'lucide-react'

const DevelopersSection = () => {
  const developers = [
    {
      name: "Ana García",
      role: "Desarrolladora Frontend",
      description: "Especialista en React y diseño de interfaces de usuario. Apasionada por crear experiencias educativas interactivas.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      skills: ["React", "JavaScript", "CSS", "UI/UX"],
      social: {
        github: "#",
        linkedin: "#",
        email: "ana@juegosmatematicos.com"
      }
    },
    {
      name: "Carlos Rodríguez",
      role: "Desarrollador Backend",
      description: "Experto en Python y bases de datos. Se encarga de la lógica del servidor y la gestión de usuarios.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      skills: ["Python", "Flask", "SQLite", "API"],
      social: {
        github: "#",
        linkedin: "#",
        email: "carlos@juegosmatematicos.com"
      }
    },
    {
      name: "María López",
      role: "Diseñadora UX/UI",
      description: "Diseñadora creativa enfocada en la experiencia del usuario. Crea interfaces intuitivas y atractivas para niños.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      skills: ["Figma", "Adobe XD", "Ilustración", "Animación"],
      social: {
        github: "#",
        linkedin: "#",
        email: "maria@juegosmatematicos.com"
      }
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
          Nuestro Equipo
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Conoce a las personas apasionadas que hacen posible esta experiencia educativa
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {developers.map((dev, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative mb-6">
              <img
                src={dev.avatar}
                alt={dev.name}
                className="w-24 h-24 rounded-full mx-auto shadow-lg object-cover"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{dev.name}</h3>
            <p className="text-blue-300 font-semibold mb-3">{dev.role}</p>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              {dev.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {dev.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 bg-white/20 rounded-full text-xs text-white font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-3">
              <a
                href={dev.social.github}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={dev.social.linkedin}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${dev.social.email}`}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mensaje del equipo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20"
      >
        <div className="flex items-center justify-center mb-4">
          <Heart className="w-8 h-8 text-red-400 mr-2" />
          <h3 className="text-2xl font-bold text-white">Hecho con Amor</h3>
        </div>
        <p className="text-white/90 text-lg leading-relaxed max-w-3xl mx-auto">
          Nuestro equipo está comprometido con crear herramientas educativas que inspiren a los niños 
          a amar las matemáticas. Cada línea de código, cada diseño y cada animación está pensada 
          para hacer el aprendizaje más divertido y efectivo.
        </p>
        <div className="mt-6">
          <p className="text-white/70">
            ¿Tienes sugerencias o comentarios? ¡Nos encantaría escucharte!
          </p>
          <a
            href="mailto:equipo@juegosmatematicos.com"
            className="inline-block mt-2 px-6 py-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors duration-300"
          >
            Contáctanos
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default DevelopersSection

