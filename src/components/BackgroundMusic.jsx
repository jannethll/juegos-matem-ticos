import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import backgroundMusic from '../assets/prueba.mp3'

const BackgroundMusic = ({ isPlaying = true, volume = 0.3 }) => {
  const audioRef = useRef(null)
  const [isMuted, setIsMuted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Configurar el audio
    audio.loop = true
    audio.volume = isMuted ? 0 : volume
    
    const handleCanPlay = () => {
      setIsLoaded(true)
    }

    audio.addEventListener('canplaythrough', handleCanPlay)

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !isLoaded) return

    if (isPlaying && !isMuted) {
      audio.play().catch(error => {
        console.log('Error al reproducir música:', error)
      })
    } else {
      audio.pause()
    }
  }, [isPlaying, isMuted, isLoaded])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <audio
        ref={audioRef}
        preload="auto"
      >
        <source src={backgroundMusic} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      
      <Button
        onClick={toggleMute}
        className="bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm p-2"
        size="sm"
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4" />
        ) : (
          <Volume2 className="w-4 h-4" />
        )}
      </Button>
    </div>
  )
}

export default BackgroundMusic

