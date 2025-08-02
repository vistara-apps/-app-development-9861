import React, { useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const VideoPreview = ({ 
  template, 
  className = '', 
  showControls = true, 
  autoPlay = false,
  onPlay,
  onPause 
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(true)
  const [showOverlay, setShowOverlay] = useState(true)

  const handlePlayPause = () => {
    const newPlayState = !isPlaying
    setIsPlaying(newPlayState)
    setShowOverlay(false)
    
    if (newPlayState) {
      onPlay?.()
    } else {
      onPause?.()
    }
  }

  const handleMuteToggle = () => {
    setIsMuted(!isMuted)
  }

  const handleRestart = () => {
    setIsPlaying(true)
    setShowOverlay(false)
  }

  const handleFullscreen = () => {
    // Placeholder for fullscreen functionality
    console.log('Fullscreen requested')
  }

  // Generate dynamic gradient based on template type
  const getGradientByType = (type) => {
    const gradients = {
      product: 'from-blue-500 via-purple-500 to-pink-500',
      service: 'from-green-500 via-teal-500 to-blue-500',
      brand: 'from-orange-500 via-red-500 to-pink-500',
      default: 'from-gray-500 via-gray-600 to-gray-700'
    }
    return gradients[type] || gradients.default
  }

  return (
    <div className={`relative group ${className}`}>
      <div 
        className={`video-preview relative overflow-hidden rounded-lg bg-gradient-to-br ${getGradientByType(template?.type)} cursor-pointer`}
        onClick={handlePlayPause}
        onMouseEnter={() => setShowOverlay(true)}
        onMouseLeave={() => !isPlaying && setShowOverlay(true)}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute inset-0 bg-white"
            animate={{
              scale: isPlaying ? [1, 1.1, 1] : 1,
              rotate: isPlaying ? [0, 5, -5, 0] : 0,
            }}
            transition={{
              duration: 3,
              repeat: isPlaying ? Infinity : 0,
              ease: "easeInOut"
            }}
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 85%)'
            }}
          />
        </div>

        {/* Template Content Simulation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.div
              animate={{
                y: isPlaying ? [0, -10, 0] : 0,
              }}
              transition={{
                duration: 2,
                repeat: isPlaying ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              <h3 className="text-lg font-bold mb-2 drop-shadow-lg">
                {template?.name || 'Video Template'}
              </h3>
              <p className="text-sm opacity-90 drop-shadow">
                {template?.composition?.replace(/_/g, ' ') || 'Dynamic Content'}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Play/Pause Overlay */}
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg hover:bg-opacity-100 transition-all duration-200"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePlayPause()
                }}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8 text-gray-800" />
                ) : (
                  <Play className="h-8 w-8 text-gray-800 ml-1" />
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video Controls */}
        {showControls && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handlePlayPause()
                  }}
                  className="hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleMuteToggle()
                  }}
                  className="hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRestart()
                  }}
                  className="hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
                  aria-label="Restart video"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  handleFullscreen()
                }}
                className="hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Progress Bar */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-30">
            <motion.div
              className="h-full bg-white"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        )}
      </div>

      {/* Template Type Badge */}
      <div className="absolute top-2 left-2">
        <span className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
          {template?.type || 'template'}
        </span>
      </div>

      {/* Duration Badge */}
      <div className="absolute top-2 right-2">
        <span className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
          0:30
        </span>
      </div>
    </div>
  )
}

export default VideoPreview
