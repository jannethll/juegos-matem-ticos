import { Button } from '@/components/ui/button.jsx'
import { motion } from 'framer-motion'
import { Settings, Volume2, VolumeX, Sun, Moon, ArrowLeft, RotateCcw, Info } from 'lucide-react'
import { useState } from 'react'

const SettingsSection = ({ onGoBack }) => {
  const [settings, setSettings] = useState({
    soundEnabled: true,
    darkMode: false,
    difficulty: 'medium',
    gameTime: 60,
    showHints: true
  })

  const handleSettingChange = (setting, value) => {
    setSettings(prev => ({
      ...prev,
      [setting]: value
    }))
  }

  const resetSettings = () => {
    setSettings({
      soundEnabled: true,
      darkMode: false,
      difficulty: 'medium',
      gameTime: 60,
      showHints: true
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-100 to-purple-100 relative overflow-hidden">
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
            <Settings className="text-gray-600" size={48} />
            <span className="bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent">
              Ajustes
            </span>
          </h1>
          <div className="w-20"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto"
          >
            Personaliza tu experiencia de juego ajustando estas configuraciones.
          </motion.p>

          <div className="space-y-6">
            {/* Sonido */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {settings.soundEnabled ? (
                    <Volume2 className="text-green-500" size={32} />
                  ) : (
                    <VolumeX className="text-red-500" size={32} />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Sonido</h3>
                    <p className="text-gray-600">Activar o desactivar los efectos de sonido</p>
                  </div>
                </div>
                <Button
                  onClick={() => handleSettingChange('soundEnabled', !settings.soundEnabled)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    settings.soundEnabled
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-gray-300 hover:bg-gray-400 text-gray-700'
                  }`}
                >
                  {settings.soundEnabled ? 'Activado' : 'Desactivado'}
                </Button>
              </div>
            </motion.div>

            {/* Tema */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {settings.darkMode ? (
                    <Moon className="text-blue-500" size={32} />
                  ) : (
                    <Sun className="text-yellow-500" size={32} />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Tema</h3>
                    <p className="text-gray-600">Cambiar entre tema claro y oscuro</p>
                  </div>
                </div>
                <Button
                  onClick={() => handleSettingChange('darkMode', !settings.darkMode)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    settings.darkMode
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                  }`}
                >
                  {settings.darkMode ? 'Oscuro' : 'Claro'}
                </Button>
              </div>
            </motion.div>

            {/* Dificultad */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <Settings className="text-purple-500" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Dificultad</h3>
                  <p className="text-gray-600">Ajustar el nivel de dificultad de los juegos</p>
                </div>
              </div>
              <div className="flex gap-4">
                {['easy', 'medium', 'hard'].map((level) => (
                  <Button
                    key={level}
                    onClick={() => handleSettingChange('difficulty', level)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      settings.difficulty === level
                        ? 'bg-purple-500 hover:bg-purple-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                  >
                    {level === 'easy' ? 'Fácil' : level === 'medium' ? 'Medio' : 'Difícil'}
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Tiempo de juego */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <Settings className="text-orange-500" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Tiempo de Juego</h3>
                  <p className="text-gray-600">Duración de cada partida en segundos</p>
                </div>
              </div>
              <div className="flex gap-4">
                {[30, 60, 90, 120].map((time) => (
                  <Button
                    key={time}
                    onClick={() => handleSettingChange('gameTime', time)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      settings.gameTime === time
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                    }`}
                  >
                    {time}s
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Pistas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Info className="text-blue-500" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Mostrar Pistas</h3>
                    <p className="text-gray-600">Activar ayudas visuales durante el juego</p>
                  </div>
                </div>
                <Button
                  onClick={() => handleSettingChange('showHints', !settings.showHints)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    settings.showHints
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-gray-300 hover:bg-gray-400 text-gray-700'
                  }`}
                >
                  {settings.showHints ? 'Activado' : 'Desactivado'}
                </Button>
              </div>
            </motion.div>

            {/* Botón de resetear */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <Button
                onClick={resetSettings}
                variant="outline"
                className="px-8 py-4 rounded-xl font-semibold border-2 border-red-300 text-red-600 hover:bg-red-50 flex items-center gap-2 mx-auto"
              >
                <RotateCcw size={20} />
                Restablecer Configuración
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsSection

