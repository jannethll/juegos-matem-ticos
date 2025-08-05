import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import personaje1 from '../assets/personaje_animado_1.png'
import personaje2 from '../assets/personaje_animado_2.png'

const AnimatedCharacter = ({ isVisible, type = 'success', position = 'right' }) => {
  const [currentCharacter, setCurrentCharacter] = useState(personaje1)

  useEffect(() => {
    // Alternar entre personajes aleatoriamente
    const characters = [personaje1, personaje2]
    setCurrentCharacter(characters[Math.floor(Math.random() * characters.length)])
  }, [isVisible])

  const animations = {
    success: {
      initial: { scale: 0, rotate: -180, x: 100 },
      animate: { 
        scale: [0, 1.2, 1], 
        rotate: [0, 10, -10, 0], 
        x: 0,
        y: [0, -20, 0]
      },
      exit: { scale: 0, rotate: 180, x: 100 }
    },
    celebration: {
      initial: { scale: 0, y: 100 },
      animate: { 
        scale: [0, 1.3, 1], 
        y: [0, -30, -10, -30, 0],
        rotate: [0, 15, -15, 0]
      },
      exit: { scale: 0, y: 100 }
    },
    encouragement: {
      initial: { scale: 0, x: -100 },
      animate: { 
        scale: [0, 1.1, 1], 
        x: 0,
        rotate: [0, 5, -5, 0]
      },
      exit: { scale: 0, x: -100 }
    }
  }

  const positionStyles = {
    right: 'top-20 right-10',
    left: 'top-20 left-10',
    center: 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    bottom: 'bottom-20 right-10'
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={animations[type].initial}
      animate={animations[type].animate}
      exit={animations[type].exit}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        times: [0, 0.6, 1]
      }}
      className={`absolute ${positionStyles[position]} z-50 pointer-events-none`}
    >
      <div className="relative">
        {/* Efecto de brillo */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-yellow-300 rounded-full blur-lg"
        />
        
        {/* Personaje */}
        <motion.img
          src={currentCharacter}
          alt="Personaje animado"
          className="w-24 h-24 relative z-10"
          animate={{
            y: [0, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Partículas de celebración */}
        {type === 'success' && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 100],
                  y: [0, (Math.random() - 0.5) * 100]
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full"
              />
            ))}
          </>
        )}
        
        {/* Corazones flotantes para encouragement */}
        {type === 'encouragement' && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, y: 0, opacity: 1 }}
                animate={{
                  scale: [0, 1, 0],
                  y: [0, -50],
                  opacity: [1, 1, 0]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
                className="absolute top-0 left-1/2 text-red-500 text-xl"
              >
                ❤️
              </motion.div>
            ))}
          </>
        )}
      </div>
    </motion.div>
  )
}

export default AnimatedCharacter

