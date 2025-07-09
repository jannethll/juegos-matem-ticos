import { Button } from '@/components/ui/button.jsx'
import { motion } from 'framer-motion'
import mascotImage from '../assets/mascot.png' // Asegúrate de tener una imagen de mascota en esta ruta

const HomePage = ({ onStartGame }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-pink-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 right-30 w-40 h-40 bg-red-400 rounded-full opacity-25 animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-orange-400 rounded-full opacity-25 animate-bounce delay-1000"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-blue-400 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Ondas decorativas */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-15">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#f97316"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#f97316"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#f97316"></path>
        </svg>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
       <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-center mb-8"
>
  <h1 className="text-7xl md:text-9xl font-bold mb-6 relative">
  <motion.span
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
    }}
    className="inline-block font-[Lobster] text-yellow-500 drop-shadow-[4px_4px_0px_rgba(80,40,0,1)]"
  >
    Juegos
  </motion.span>
  <br />
  <motion.span
    animate={{
      y: [0, 10, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
      delay: 1,
    }}
    className="inline-block font-[Lobster] text-yellow-500 drop-shadow-[4px_4px_0px_rgba(80,40,0,1)]"
  >
    Matematicos
  </motion.span>
</h1>


          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            ¡Bienvenido a la jungla del saber! Aquí aprenderás matemáticas de una manera divertida y emocionante.
            Perfecto para estudiantes de 3º y 4º grado de primaria.
          </p>
        </motion.div>

        {/* Mascota central */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <div className="w-64 h-64 flex items-center justify-center">
            <img 
              src={mascotImage} 
              alt="Mascota búho matemático" 
              className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Botón de jugar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={onStartGame}
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-2xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
          >
            ¡Empezar a Jugar!
          </Button>
        </motion.div>

        {/* Descripción adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 text-center"
        >
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Explora diferentes operaciones matemáticas, mejora tus habilidades y diviértete aprendiendo.
          </p>
        </motion.div>
        
      </div>
      
    </div>
    
  )
}

export default HomePage

