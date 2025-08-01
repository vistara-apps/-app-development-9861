import React, { useState } from 'react'
import { X, Sparkles, Target, Globe, Users } from 'lucide-react'

const PersonalizationModal = ({ template, onClose, onGenerate }) => {
  const [personalizationData, setPersonalizationData] = useState({
    audience: '',
    industry: '',
    geography: '',
    tone: 'professional',
    brandColors: '#3b82f6',
    customMessage: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onGenerate({
      template_id: template.id,
      personalization_data: personalizationData
    })
  }

  const handleChange = (field, value) => {
    setPersonalizationData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full mx-4 max-h-screen overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Sparkles className="h-6 w-6 text-primary-600" />
            <h2 className="text-xl font-semibold">Personalize "{template.name}"</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Audience
              </label>
              <div className="relative">
                <select
                  className="input-field pl-10"
                  value={personalizationData.audience}
                  onChange={(e) => handleChange('audience', e.target.value)}
                >
                  <option value="">Select audience</option>
                  <option value="professionals">Professionals</option>
                  <option value="students">Students</option>
                  <option value="entrepreneurs">Entrepreneurs</option>
                  <option value="consumers">General Consumers</option>
                </select>
                <Target className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry Focus
              </label>
              <div className="relative">
                <select
                  className="input-field pl-10"
                  value={personalizationData.industry}
                  onChange={(e) => handleChange('industry', e.target.value)}
                >
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="retail">Retail</option>
                  <option value="education">Education</option>
                </select>
                <Globe className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Geographic Region
              </label>
              <div className="relative">
                <select
                  className="input-field pl-10"
                  value={personalizationData.geography}
                  onChange={(e) => handleChange('geography', e.target.value)}
                >
                  <option value="">Select region</option>
                  <option value="north-america">North America</option>
                  <option value="europe">Europe</option>
                  <option value="asia-pacific">Asia Pacific</option>
                  <option value="global">Global</option>
                </select>
                <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Brand Tone
              </label>
              <select
                className="input-field"
                value={personalizationData.tone}
                onChange={(e) => handleChange('tone', e.target.value)}
              >
                <option value="professional">Professional</option>
                <option value="friendly">Friendly</option>
                <option value="energetic">Energetic</option>
                <option value="sophisticated">Sophisticated</option>
                <option value="playful">Playful</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Brand Color
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="color"
                className="h-12 w-20 rounded border border-gray-300"
                value={personalizationData.brandColors}
                onChange={(e) => handleChange('brandColors', e.target.value)}
              />
              <input
                type="text"
                className="input-field flex-1"
                placeholder="#3b82f6"
                value={personalizationData.brandColors}
                onChange={(e) => handleChange('brandColors', e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Custom Message
            </label>
            <textarea
              className="input-field h-24 resize-none"
              placeholder="Enter any specific messaging or requirements..."
              value={personalizationData.customMessage}
              onChange={(e) => handleChange('customMessage', e.target.value)}
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Personalization Preview</h4>
            <p className="text-sm text-gray-600 mb-2">
              This template will be personalized with:
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              {template.personalization_rules.map((rule, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                  <span>{rule.replace(/_/g, ' ')}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary flex items-center space-x-2"
            >
              <Sparkles className="h-4 w-4" />
              <span>Generate Personalized Video</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PersonalizationModal