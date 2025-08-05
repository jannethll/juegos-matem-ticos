import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { motion } from 'framer-motion'
import { Trophy, RotateCcw, Home, Clock, Star } from 'lucide-react'
import { generateIntegerProblem, generateFractionProblem, formatFraction, getOperationSymbol } from '../utils/mathUtils.js'
import AnimatedCharacter from './AnimatedCharacter.jsx'
import BackgroundMusic from './BackgroundMusic.jsx'
import AICharacter from './AICharacter.jsx'

const EnhancedMathGame = ({ operation, difficulty, type, onGoBack }) => {
  const [currentProblem, setCurrentProblem] = useState(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [gameState, setGameState] = useState('playing') // 'playing', 'finished'
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [feedback, setFeedback] = useState('')
  const [problemsAnswered, setProblemsAnswered] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [showCharacter, setShowCharacter] = useState(false)
  const [characterType, setCharacterType] = useState('success')
  const [characterPosition, setCharacterPosition] = useState('right')
  
  // Estados para el personaje IA
  const [showAIFeedback, setShowAIFeedback] = useState(false)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)

  // Generar problema según el tipo (enteros o fracciones)
  const generateProblem = () => {
    if (type === 'fraction') {
      return generateFractionProblem(operation, difficulty)
    } else {
      return generateIntegerProblem(operation, difficulty)
    }
  }

  // Inicializar juego
  useEffect(() => {
    setCurrentProblem(generateProblem())
  }, [operation, difficulty, type])

  // Timer del juego
  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setGameState('finished')
    }
  }, [timeLeft, gameState])

  // Mostrar personaje animado cuando se responde
  useEffect(() => {
    if (showCharacter) {
      const timer = setTimeout(() => {
        setShowCharacter(false)
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [showCharacter])

  const handleAnswerClick = (answer) => {
    if (gameState !== 'playing') return

    setSelectedAnswer(answer)
    
    const isCorrect = type === 'fraction' 
      ? (answer.numerator === currentProblem.correctAnswer.numerator && 
         answer.denominator === currentProblem.correctAnswer.denominator)
      : (answer === currentProblem.correctAnswer)

    // Activar el personaje IA
    setIsAnswerCorrect(isCorrect)
    setShowAIFeedback(true)

    if (isCorrect) {
      setScore(score + 10)
      setCorrectAnswers(correctAnswers + 1)
      setFeedback('¡Correcto! 🎉')
      setCharacterType('success')
      setCharacterPosition(['right', 'left', 'bottom'][Math.floor(Math.random() * 3)])
      setShowCharacter(true)
    } else {
      const correctAnswerText = type === 'fraction' 
        ? formatFraction(currentProblem.correctAnswer)
        : currentProblem.correctAnswer
      setFeedback(`Incorrecto. La respuesta era ${correctAnswerText}`)
      setCharacterType('encouragement')
      setCharacterPosition('left')
      setShowCharacter(true)
    }

    setProblemsAnswered(problemsAnswered + 1)

    // Generar nuevo problema después de 2 segundos
    setTimeout(() => {
      setCurrentProblem(generateProblem())
      setSelectedAnswer(null)
      setFeedback('')
    }, 2000)
  }

  // Función para resetear el feedback del personaje IA
  const resetAIFeedback = () => {
    setShowAIFeedback(false)
  }

  const resetGame = () => {
    setScore(0)
    setTimeLeft(60)
    setGameState('playing')
    setSelectedAnswer(null)
    setFeedback('')
    setProblemsAnswered(0)
    setCorrectAnswers(0)
    setCurrentProblem(generateProblem())
    setShowCharacter(false)
  }

  const renderProblem = () => {
    if (!currentProblem) return null

    if (type === 'fraction') {
      return (
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-bold text-white mb-8 flex items-center justify-center gap-4">
            <div className="flex flex-col">
              <span className="border-b-2 border-white pb-1">{currentProblem.frac1.numerator}</span>
              <span className="pt-1">{currentProblem.frac1.denominator}</span>
            </div>
            <span>{getOperationSymbol(operation)}</span>
            <div className="flex flex-col">
              <span className="border-b-2 border-white pb-1">{currentProblem.frac2.numerator}</span>
              <span className="pt-1">{currentProblem.frac2.denominator}</span>
            </div>
            <span>=</span>
            <span>?</span>
          </div>
        </div>
      )
    } else {
      return (
        <div className="text-center">
          <div className="text-4xl md:text-6xl font-bold text-white mb-8">
            {currentProblem.num1} {getOperationSymbol(operation)} {currentProblem.num2} = ?
          </div>
        </div>
      )
    }
  }

  const renderAnswers = () => {
    if (!currentProblem) return null

    if (type === 'fraction') {
      const allAnswers = [currentProblem.correctAnswer, ...currentProblem.wrongAnswers]
      const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5)

      return (
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {shuffledAnswers.map((answer, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => handleAnswerClick(answer)}
                disabled={selectedAnswer !== null}
                className={`w-full h-20 text-xl font-bold transition-all duration-300 ${
                  selectedAnswer === answer
                    ? (answer.numerator === currentProblem.correctAnswer.numerator && 
                       answer.denominator === currentProblem.correctAnswer.denominator)
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-red-500 hover:bg-red-600'
                    : 'bg-white/20 hover:bg-white/30 text-white border-2 border-white/30'
                }`}
              >
                <div className="flex flex-col">
                  <span className="border-b border-current pb-1">{answer.numerator}</span>
                  <span className="pt-1">{answer.denominator}</span>
                </div>
              </Button>
            </motion.div>
          ))}
        </div>
      )
    } else {
      return (
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          {currentProblem.answers.map((answer, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => handleAnswerClick(answer)}
                disabled={selectedAnswer !== null}
                className={`w-full h-16 text-xl font-bold transition-all duration-300 ${
                  selectedAnswer === answer
                    ? answer === currentProblem.correctAnswer
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-red-500 hover:bg-red-600'
                    : 'bg-white/20 hover:bg-white/30 text-white border-2 border-white/30'
                }`}
              >
                {answer}
              </Button>
            </motion.div>
          ))}
        </div>
      )
    }
  }

  if (gameState === 'finished') {
    const accuracy = problemsAnswered > 0 ? Math.round((correctAnswers / problemsAnswered) * 100) : 0
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-blue-800 flex flex-col items-center justify-center p-4 relative">
        <BackgroundMusic isPlaying={false} />
        <AnimatedCharacter 
          isVisible={true} 
          type="celebration" 
          position="center" 
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center max-w-md w-full"
        >
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-6">¡Juego Terminado!</h2>
          
          <div className="space-y-4 text-white">
            <div className="flex justify-between">
              <span>Puntuación:</span>
              <span className="font-bold">{score}</span>
            </div>
            <div className="flex justify-between">
              <span>Problemas resueltos:</span>
              <span className="font-bold">{problemsAnswered}</span>
            </div>
            <div className="flex justify-between">
              <span>Respuestas correctas:</span>
              <span className="font-bold">{correctAnswers}</span>
            </div>
            <div className="flex justify-between">
              <span>Precisión:</span>
              <span className="font-bold">{accuracy}%</span>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <Button
              onClick={resetGame}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Jugar de Nuevo
            </Button>
            <Button
              onClick={onGoBack}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
            >
              <Home className="w-4 h-4 mr-2" />
              Menú Principal
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4 relative">
      {/* Música de fondo */}
      <BackgroundMusic isPlaying={gameState === 'playing'} volume={0.2} />
      
      {/* Personaje animado */}
      <AnimatedCharacter 
        isVisible={showCharacter} 
        type={characterType} 
        position={characterPosition} 
      />

      {/* Header con estadísticas */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 text-white">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="font-bold">{timeLeft}s</span>
          </div>
        </div>
        
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            {operation.charAt(0).toUpperCase() + operation.slice(1)} - {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </h1>
          <p className="text-white/80">
            {type === 'fraction' ? 'Fracciones' : 'Números Enteros'}
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 text-white">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="font-bold">{score}</span>
          </div>
        </div>
      </div>

      {/* Problema actual */}
      <motion.div
        key={currentProblem?.num1 || currentProblem?.frac1?.numerator}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8 max-w-2xl w-full"
      >
        {renderProblem()}
      </motion.div>

      {/* Respuestas */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        {renderAnswers()}
      </motion.div>

      {/* Feedback */}
      {feedback && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`text-xl font-bold mb-4 ${
            feedback.includes('Correcto') ? 'text-green-300' : 'text-red-300'
          }`}
        >
          {feedback}
        </motion.div>
      )}

      {/* Estadísticas del juego */}
      <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 text-white text-center">
        <span>Problemas: {problemsAnswered} | Correctas: {correctAnswers}</span>
      </div>

      {/* Botón de regreso */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute top-4 left-4"
      >
        <Button
          onClick={onGoBack}
          className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm"
        >
          ← Volver
        </Button>
      </motion.div>

      {/* Personaje IA con expresiones */}
      <AICharacter 
        isCorrect={isAnswerCorrect}
        showFeedback={showAIFeedback}
        resetFeedback={resetAIFeedback}
      />
    </div>
  )
}

export default EnhancedMathGame

