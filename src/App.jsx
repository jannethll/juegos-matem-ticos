import { useState } from 'react'
import HomePage from './components/HomePage.jsx'
import GameMenu from './components/GameMenu.jsx'
import MathGame from './components/MathGame.jsx'
import TheorySection from './components/TheorySection.jsx'
import ProfileSection from './components/ProfileSection.jsx'
import SettingsSection from './components/SettingsSection.jsx'
import NewsSection from './components/NewsSection.jsx'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('home')
  const [selectedOperation, setSelectedOperation] = useState(null)

  const handleStartGame = () => {
    setCurrentView('menu')
  }

  const handleSelectOperation = (operation) => {
    setSelectedOperation(operation)
    // Operaciones matemáticas van al juego
    if (['suma', 'resta', 'multiplicacion', 'division'].includes(operation)) {
      setCurrentView('game')
    } else {
      // Otras secciones van a sus respectivos componentes
      setCurrentView(operation)
    }
  }

  const handleGoBack = () => {
    if (currentView === 'menu') {
      setCurrentView('home')
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

