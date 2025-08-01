import React from 'react'
import { Play, Star, Clock, Users } from 'lucide-react'

const TemplateCard = ({ template, onPersonalize }) => {
  return (
    <div className="template-card card overflow-hidden">
      <div className="relative">
        <div className="video-preview h-48 flex items-center justify-center">
          <Play className="h-12 w-12 text-white opacity-80" />
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
            {template.type}
          </span>
        </div>
        <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full">
          <Star className="h-3 w-3 fill-current" />
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
          <button className="flex-1 btn-secondary text-sm">
            Preview
          </button>
          <button 
            onClick={onPersonalize}
            className="flex-1 btn-primary text-sm"
          >
            Personalize
          </button>
        </div>
      </div>
    </div>
  )
}

export default TemplateCard