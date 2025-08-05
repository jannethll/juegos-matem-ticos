import { useState } from 'react'
import HomePage from './components/HomePage.jsx'
import GameMenu from './components/GameMenu.jsx'
import MathGame from './components/MathGame.jsx'
import DifficultySelector from './components/DifficultySelector.jsx'
import EnhancedMathGame from './components/EnhancedMathGame.jsx'
import TheorySection from './components/TheorySection.jsx'
import ProfileSection from './components/ProfileSection.jsx'
import SettingsSection from './components/SettingsSection.jsx'
import NewsSection from './components/NewsSection.jsx'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [selectedOperation, setSelectedOperation] = useState(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState(null)
  const [selectedType, setSelectedType] = useState(null)

  const handleStartGame = () => {
    setCurrentView('menu')
  }

  const handleSelectOperation = (operation) => {
    setSelectedOperation(operation)
    // Operaciones matemáticas van al selector de dificultad
    if (['suma', 'resta', 'multiplicacion', 'division'].includes(operation)) {
      setCurrentView('difficulty')
    } else {
      // Otras secciones van a sus respectivos componentes
      setCurrentView(operation)
    }
  }

  const handleSelectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty)
    // Si ya se seleccionó el tipo, ir al juego
    if (selectedType) {
      setCurrentView('enhanced-game')
    }
  }

  const handleSelectType = (type) => {
    setSelectedType(type)
    // Si ya se seleccionó la dificultad, ir al juego
    if (selectedDifficulty) {
      setCurrentView('enhanced-game')
    }
  }

  const handleGoBack = () => {
    if (currentView === 'menu') {
      setCurrentView('home')
    } else if (currentView === 'difficulty') {
      setCurrentView('menu')
      setSelectedOperation(null)
    } else if (currentView === 'enhanced-game') {
      setCurrentView('difficulty')
      setSelectedDifficulty(null)
      setSelectedType(null)
    } else {
      setCurrentView('menu')
    }
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onStartGame={handleStartGame} />
      case 'menu':
        return <GameMenu onSelectOperation={handleSelectOperation} onGoBack={handleGoBack} />
      case 'difficulty':
        return (
          <DifficultySelector 
            onSelectDifficulty={handleSelectDifficulty}
            onSelectType={handleSelectType}
            onGoBack={handleGoBack}
          />
        )
      case 'enhanced-game':
        return (
          <EnhancedMathGame 
            operation={selectedOperation}
            difficulty={selectedDifficulty}
            type={selectedType}
            onGoBack={handleGoBack}
          />
        )
      case 'game':
        return <MathGame operation={selectedOperation} onGoBack={handleGoBack} />
      case 'teoria':
        return <TheorySection onGoBack={handleGoBack} />
      case 'perfil':
        return <ProfileSection onGoBack={handleGoBack} />
      case 'ajustes':
        return <SettingsSection onGoBack={handleGoBack} />
      case 'noticias':
        return <NewsSection onGoBack={handleGoBack} />
      default:
        return <HomePage onStartGame={handleStartGame} />
    }
  }

  return (
    <div className="App">
      {renderCurrentView()}
    </div>
  )
}

export default App

