import { Button } from '@/components/ui/button.jsx'
import { motion } from 'framer-motion'
import { User, Trophy, Target, Clock, Star, ArrowLeft, Award } from 'lucide-react'

const ProfileSection = ({ onGoBack }) => {
  // Datos simulados del perfil (en una aplicación real vendrían de una base de datos)
  const profileData = {
    name: 'Estudiante',
    grade: '3º Grado',
    totalGames: 15,
    totalScore: 1250,
    averageScore: 83,
    bestScore: 150,
    timeSpent: '2h 30m',
    achievements: [
      { name: 'Primera Victoria', icon: Trophy, earned: true },
      { name: 'Suma Experto', icon: Star, earned: true },
      { name: 'Velocidad', icon: Clock, earned: false },
      { name: 'Perfeccionista', icon: Award, earned: false }
    ],
    stats: [
      { operation: 'Suma', games: 8, bestScore: 150, accuracy: 92 },
      { operation: 'Resta', games: 4, bestScore: 120, accuracy: 85 },
      { operation: 'Multiplicación', games: 2, bestScore: 80, accuracy: 75 },
      { operation: 'División', games: 1, bestScore: 60, accuracy: 70 }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 relative overflow-hidden">
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
            <User className="text-purple-500" size={48} />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Mi Perfil
            </span>
          </h1>
          <div className="w-20"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Información básica del perfil */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-xl mb-8"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <User size={48} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{profileData.name}</h2>
                <p className="text-xl text-gray-600">{profileData.grade}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{profileData.totalGames}</div>
                <div className="text-gray-600">Juegos Jugados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{profileData.totalScore}</div>
                <div className="text-gray-600">Puntos Totales</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">{profileData.bestScore}</div>
                <div className="text-gray-600">Mejor Puntuación</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{profileData.timeSpent}</div>
                <div className="text-gray-600">Tiempo Jugado</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Logros */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Trophy className="text-yellow-500" size={32} />
                Logros
              </h3>
              <div className="space-y-4">
                {profileData.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                      achievement.earned
                        ? 'bg-yellow-50 border-2 border-yellow-200'
                        : 'bg-gray-50 border-2 border-gray-200 opacity-60'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      achievement.earned
                        ? 'bg-yellow-400 text-white'
                        : 'bg-gray-300 text-gray-500'
                    }`}>
                      <achievement.icon size={24} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{achievement.name}</div>
                      <div className={`text-sm ${
                        achievement.earned ? 'text-yellow-600' : 'text-gray-500'
                      }`}>
                        {achievement.earned ? '¡Desbloqueado!' : 'Bloqueado'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Estadísticas por operación */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Target className="text-blue-500" size={32} />
                Estadísticas
              </h3>
              <div className="space-y-4">
                {profileData.stats.map((stat, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-800">{stat.operation}</h4>
                      <span className="text-sm text-gray-600">{stat.games} juegos</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Mejor puntuación:</span>
                        <div className="font-bold text-green-600">{stat.bestScore}</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Precisión:</span>
                        <div className="font-bold text-blue-600">{stat.accuracy}%</div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${stat.accuracy}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection

