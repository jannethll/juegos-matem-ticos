import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import personajeFeliz from '../assets/personaje_feliz.png';
import personajeMolesto from '../assets/personaje_molesto.png';

const AICharacter = ({ isCorrect, showFeedback, resetFeedback }) => {
  const [currentExpression, setCurrentExpression] = useState('neutral');
  const [showCharacter, setShowCharacter] = useState(false);

  useEffect(() => {
    if (showFeedback) {
      setShowCharacter(true);
      setCurrentExpression(isCorrect ? 'happy' : 'upset');
      
      // Ocultar el personaje después de 3 segundos
      const timer = setTimeout(() => {
        setShowCharacter(false);
        setCurrentExpression('neutral');
        if (resetFeedback) {
          resetFeedback();
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [showFeedback, isCorrect, resetFeedback]);

  const getCharacterImage = () => {
    switch (currentExpression) {
      case 'happy':
        return personajeFeliz;
      case 'upset':
        return personajeMolesto;
      default:
        return null;
    }
  };

  const getCharacterMessage = () => {
    switch (currentExpression) {
      case 'happy':
        return ['¡Excelente!', '¡Muy bien!', '¡Correcto!', '¡Fantástico!', '¡Genial!'];
      case 'upset':
        return ['¡Inténtalo de nuevo!', '¡No te rindas!', '¡Puedes hacerlo mejor!', '¡Sigue intentando!', '¡Casi lo tienes!'];
      default:
        return [];
    }
  };

  const getRandomMessage = () => {
    const messages = getCharacterMessage();
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const characterVariants = {
    hidden: { 
      scale: 0,
      opacity: 0,
      y: 50,
      rotate: -10
    },
    visible: { 
      scale: 1,
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.6
      }
    },
    exit: { 
      scale: 0,
      opacity: 0,
      y: -50,
      rotate: 10,
      transition: {
        duration: 0.4
      }
    }
  };

  const bounceVariants = {
    bounce: {
      y: [0, -20, 0],
      transition: {
        duration: 0.6,
        repeat: 2,
        ease: "easeInOut"
      }
    }
  };

  const shakeVariants = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.6,
        repeat: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {showCharacter && (
        <motion.div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          variants={characterVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-6 border-4 border-purple-300 max-w-sm">
            <motion.div
              className="text-center"
              variants={currentExpression === 'happy' ? bounceVariants : shakeVariants}
              animate={currentExpression === 'happy' ? 'bounce' : 'shake'}
            >
              <motion.img
                src={getCharacterImage()}
                alt={`Personaje ${currentExpression}`}
                className="w-32 h-32 mx-auto mb-4 object-contain"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              
              <motion.div
                className={`text-2xl font-bold mb-2 ${
                  currentExpression === 'happy' 
                    ? 'text-green-600' 
                    : 'text-orange-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {getRandomMessage()}
              </motion.div>
              
              <motion.div
                className={`text-lg ${
                  currentExpression === 'happy' 
                    ? 'text-green-500' 
                    : 'text-orange-500'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {currentExpression === 'happy' 
                  ? '¡Sigue así!' 
                  : '¡No te desanimes!'
                }
              </motion.div>
            </motion.div>
          </div>
          
          {/* Efectos de partículas para respuesta correcta */}
          {currentExpression === 'happy' && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-yellow-400 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [1, 1, 0],
                    y: [0, -50, -100]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AICharacter;

