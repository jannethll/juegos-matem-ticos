import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    juego: [
      { name: "Cómo Jugar", href: "#como-jugar" },
      { name: "Niveles de Dificultad", href: "#niveles" },
      { name: "Características", href: "#caracteristicas" },
      { name: "Testimonios", href: "#testimonios" }
    ],
    educativo: [
      { name: "Para Padres", href: "#padres" },
      { name: "Para Maestros", href: "#maestros" },
      { name: "Recursos Educativos", href: "#recursos" },
      { name: "Blog Educativo", href: "#blog" }
    ],
    soporte: [
      { name: "Centro de Ayuda", href: "#ayuda" },
      { name: "Contacto", href: "#contacto" },
      { name: "Reportar Problema", href: "#reporte" },
      { name: "Sugerencias", href: "#sugerencias" }
    ],
    legal: [
      { name: "Términos de Uso", href: "#terminos" },
      { name: "Política de Privacidad", href: "#privacidad" },
      { name: "Cookies", href: "#cookies" },
      { name: "Accesibilidad", href: "#accesibilidad" }
    ]
  }

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", name: "YouTube" }
  ]

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Sección principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Juegos Matemáticos
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Transformamos el aprendizaje de las matemáticas en una aventura divertida y emocionante. 
                Diseñado especialmente para estudiantes de primaria que quieren mejorar sus habilidades numéricas.
              </p>
              
              {/* Información de contacto */}
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contacto@juegosmatematicos.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Ciudad de México, México</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enlaces del juego */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-yellow-400">Juego</h4>
            <ul className="space-y-2">
              {footerLinks.juego.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Enlaces educativos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-blue-400">Educativo</h4>
            <ul className="space-y-2">
              {footerLinks.educativo.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Enlaces de soporte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-green-400">Soporte</h4>
            <ul className="space-y-2">
              {footerLinks.soporte.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/5 rounded-2xl p-6 mb-8"
        >
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold text-lg mb-2">📧 Mantente Actualizado</h4>
              <p className="text-gray-300 text-sm">
                Recibe noticias sobre nuevas características, consejos educativos y actualizaciones del juego
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 md:ml-6">
              <input
                type="email"
                placeholder="Tu email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors duration-300"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-medium">
                Suscribirse
              </button>
            </div>
          </div>
        </motion.div>

        {/* Redes sociales y copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Juegos Matemáticos. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-start">
                Hecho con <Heart className="w-3 h-3 text-red-400 mx-1" /> para el futuro de la educación
              </p>
            </div>

            {/* Redes sociales */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Enlaces legales */}
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

