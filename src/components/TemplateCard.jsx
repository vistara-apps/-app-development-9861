import React, { useState } from 'react'
import { Star, Clock, Users, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import VideoPreview from './VideoPreview'

const TemplateCard = ({ template, onPersonalize }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className="template-card card overflow-hidden"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative">
        <VideoPreview 
          template={template}
          className="h-48"
          showControls={isHovered}
          autoPlay={false}
        />
        <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
          <Star className="h-3 w-3 fill-current text-yellow-400" />
          <span>4.8</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{template.name}</h3>
        <p className="text-gray-600 text-sm mb-4">
          Composition: {template.composition.replace(/_/g, ' ')}
        </p>
        
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>30s</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>1.2k uses</span>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">Personalization Features:</p>
          <div className="flex flex-wrap gap-2">
            {template.personalization_rules.slice(0, 2).map((rule, index) => (
              <span
                key={index}
                className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full"
              >
                {rule.replace(/_/g, ' ')}
              </span>
            ))}
            {template.personalization_rules.length > 2 && (
              <span className="text-gray-400 text-xs">
                +{template.personalization_rules.length - 2} more
              </span>
            )}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <motion.button 
            className="flex-1 btn-secondary text-sm flex items-center justify-center space-x-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye className="h-4 w-4" />
            <span>Preview</span>
          </motion.button>
          <motion.button 
            onClick={onPersonalize}
            className="flex-1 btn-primary text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Personalize
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default TemplateCard
