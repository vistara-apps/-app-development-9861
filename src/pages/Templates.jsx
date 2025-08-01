import React, { useState } from 'react'
import { Play, Star, Clock, Users, Wand2 } from 'lucide-react'
import { useUser } from '../context/UserContext'
import TemplateCard from '../components/TemplateCard'
import PersonalizationModal from '../components/PersonalizationModal'

const Templates = () => {
  const { templates } = useUser()
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [showPersonalizationModal, setShowPersonalizationModal] = useState(false)

  const categories = [
    { id: 'all', name: 'All Templates', count: templates.length },
    { id: 'product', name: 'Product', count: 1 },
    { id: 'service', name: 'Service', count: 1 },
    { id: 'brand', name: 'Brand', count: 1 }
  ]

  const [activeCategory, setActiveCategory] = useState('all')

  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(t => t.type === activeCategory)

  const handlePersonalize = (template) => {
    setSelectedTemplate(template)
    setShowPersonalizationModal(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Video Templates</h1>
          <p className="text-gray-600 mt-2">
            Choose from our AI-powered templates to create personalized video ads
          </p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <Wand2 className="h-5 w-5" />
          <span>Create Custom Template</span>
        </button>
      </div>

      <div className="flex space-x-6 mb-8 border-b border-gray-200">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`pb-4 px-1 text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onPersonalize={() => handlePersonalize(template)}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl">
          <div className="flex-shrink-0">
            <Wand2 className="h-8 w-8 text-primary-600" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">Need a custom template?</h3>
            <p className="text-gray-600">Our AI can create personalized templates based on your specific needs</p>
          </div>
          <button className="btn-primary whitespace-nowrap">
            Request Custom Template
          </button>
        </div>
      </div>

      {showPersonalizationModal && (
        <PersonalizationModal
          template={selectedTemplate}
          onClose={() => setShowPersonalizationModal(false)}
          onGenerate={(data) => {
            console.log('Generating video with:', data)
            setShowPersonalizationModal(false)
          }}
        />
      )}
    </div>
  )
}

export default Templates