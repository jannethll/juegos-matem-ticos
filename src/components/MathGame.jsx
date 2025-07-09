import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { motion } from 'framer-motion'
import { Trophy, RotateCcw, Home, Clock } from 'lucide-react'

const MathGame = ({ operation, onGoBack }) => {
  const [currentProblem, setCurrentProblem] = useState(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [gameState, setGameState] = useState('playing') // 'playing', 'finished'
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [feedback, setFeedback] = useState('')
  const [problemsAnswered, setProblemsAnswered] = useState(0)

  // Generar problema matemático basado en la operación
  const generateProblem = () => {
    let num1, num2, correctAnswer, wrongAnswers
    
    switch (operation) {
      case 'suma':
        num1 = Math.floor(Math.random() * 50) + 1
        num2 = Math.floor(Math.random() * 50) + 1
        correctAnswer = num1 + num2
        wrongAnswers = [
          correctAnswer + Math.floor(Math.random() * 10) + 1,
          correctAnswer - Math.floor(Math.random() * 10) - 1,
          correctAnswer + Math.floor(Math.random() * 20) + 5
        ]
        break
      case 'resta':
        num1 = Math.floor(Math.random() * 50) + 20
        num2 = Math.floor(Math.random() * (num1 - 1)) + 1
        correctAnswer = num1 - num2
        wrongAnswers = [
          correctAnswer + Math.floor(Math.random() * 10) + 1,
          correctAnswer - Math.floor(Math.random() * 10) - 1,
          correctAnswer + Math.floor(Math.random() * 15) + 3
        ]
        break
      case 'multiplicacion':
        num1 = Math.floor(Math.random() * 10) + 1
        num2 = Math.floor(Math.random() * 10) + 1
        correctAnswer = num1 * num2
        wrongAnswers = [
          correctAnswer + Math.floor(Math.random() * 20) + 1,
          correctAnswer - Math.floor(Math.random() * 15) - 1,
          correctAnswer + Math.floor(Math.random() * 30) + 5
        ]
        break
      case 'division':
        num2 = Math.floor(Math.random() * 9) + 2
        correctAnswer = Math.floor(Math.random() * 10) + 1
        num1 = num2 * correctAnswer
        wrongAnswers = [
          correctAnswer + Math.floor(Math.random() * 5) + 1,
          correctAnswer - Math.floor(Math.random() * 3) - 1,
          correctAnswer + Math.floor(Math.random() * 8) + 2
        ]
        break
      default:
        num1 = 1
        num2 = 1
        correctAnswer = 2
        wrongAnswers = [3, 4, 5]
    }

    // Mezclar respuestas
    const allAnswers = [correctAnswer, ...wrongAnswers]
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5)

    return {
      num1,
      num2,
      correctAnswer,
      answers: shuffledAnswers,
      operation
    }
  }

  // Inicializar juego
  useEffect(() => {
    setCurrentProblem(generateProblem())
  }, [operation])

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

  const getOperationSymbol = (op) => {
    switch (op) {
      case 'suma': return '+'
      case 'resta': return '-'
      case 'multiplicacion': return '×'
      case 'division': return '÷'
      default: return '+'
    }
  }

  const handleAnswerClick = (answer) => {
    if (gameState !== 'playing') return

    setSelectedAnswer(answer)
    
    if (answer === currentProblem.correctAnswer) {
      setScore(score + 10)
      setFeedback('¡Correcto! 🎉')
    } else {
      setFeedback(`Incorrecto. La respuesta era ${currentProblem.correctAnswer}`)
    }

    setProblemsAnswered(problemsAnswered + 1)

    // Generar nuevo problema después de un breve delay
    setTimeout(() => {
      setCurrentProblem(generateProblem())
      setSelectedAnswer(null)
      setFeedback('')
    }, 1500)
  }

  const restartGame = () => {
    setScore(0)
    setTimeLeft(60)
    setGameState('playing')
    setSelectedAnswer(null)
    setFeedback('')
    setProblemsAnswered(0)
    setCurrentProblem(generateProblem())
  }

  if (gameState === 'finished') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-200 via-blue-200 to-green-200 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-8 shadow-2xl text-center max-w-md w-full"
        >
          <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-800 mb-4">¡Tiempo Terminado!</h2>
          <div className="space-y-4 mb-6">
            <p className="text-2xl text-gray-700">
              Puntuación Final: <span className="font-bold text-blue-600">{score}</span>
            </p>
            <p className="text-lg text-gray-600">
              Problemas Resueltos: <span className="font-semibold">{problemsAnswered}</span>
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={restartGame}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
            >
              <RotateCcw size={20} />
              Jugar de Nuevo
            </Button>
            <Button
              onClick={onGoBack}
              variant="outline"
              className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2"
            >
              <Home size={20} />
              Menú Principal
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  if (!currentProblem) {
    return <div className="min-h-screen flex items-center justify-center">Cargando...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 relative overflow-hidden">
      {/* Header con información del juego */}
      <div className="relative z-10 p-6">
        <div className="flex justify-between items-center">
          <Button
            onClick={onGoBack}
            variant="outline"
            className="bg-white/80 hover:bg-white border-2 border-gray-300"
          >
            ← Volver
          </Button>
          
          <div className="flex items-center gap-6">
            <div className="bg-white/90 rounded-xl px-4 py-2 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="font-bold text-lg">{timeLeft}s</span>
            </div>
            <div className="bg-white/90 rounded-xl px-4 py-2">
              <span className="font-bold text-lg text-green-600">Puntos: {score}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Área del problema */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 mt-8">
        <motion.div
          key={currentProblem.num1 + currentProblem.num2}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-2xl mb-8 max-w-lg w-full text-center"
        >
          <h2 className="text-2xl font-bold text-gray-700 mb-6 capitalize">
            Juego de {operation}
          </h2>
          
          <div className="text-6xl font-bold text-gray-800 mb-8">
            {currentProblem.num1} {getOperationSymbol(currentProblem.operation)} {currentProblem.num2} = ?
          </div>

          {feedback && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-xl font-semibold mb-4 ${
                feedback.includes('Correcto') ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {feedback}
            </motion.div>
          )}
        </motion.div>

        {/* Opciones de respuesta */}
        <div className="grid grid-cols-2 gap-4 max-w-lg w-full">
          {currentProblem.answers.map((answer, index) => (
            <motion.div
              key={answer}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                onClick={() => handleAnswerClick(answer)}
                disabled={selectedAnswer !== null}
                className={`w-full h-20 text-3xl font-bold rounded-2xl transition-all duration-300 ${
                  selectedAnswer === answer
                    ? answer === currentProblem.correctAnswer
                      ? 'bg-green-500 hover:bg-green-500 text-white'
                      : 'bg-red-500 hover:bg-red-500 text-white'
                    : 'bg-white hover:bg-gray-100 text-gray-800 border-2 border-gray-300 hover:border-blue-400'
                }`}
              >
                {answer}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MathGame

