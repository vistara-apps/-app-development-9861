import React, { useState } from 'react'
import { X, Target, Calendar, DollarSign } from 'lucide-react'
import { useUser } from '../context/UserContext'

const CreateCampaignModal = ({ onClose, onCreate }) => {
  const { addCampaign } = useUser()
  const [formData, setFormData] = useState({
    name: '',
    budget: '',
    start_date: '',
    end_date: '',
    objective: 'conversions',
    audience: '',
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newCampaign = {
      ...formData,
      budget: parseInt(formData.budget),
      status: 'draft'
    }
    addCampaign(newCampaign)
    onCreate(newCampaign)
  }

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full mx-4 max-h-screen overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Target className="h-6 w-6 text-primary-600" />
            <h2 className="text-xl font-semibold">Create New Campaign</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Campaign Name
            </label>
            <input
              type="text"
              required
              className="input-field"
              placeholder="Enter campaign name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget ($)
              </label>
              <div className="relative">
                <input
                  type="number"
                  required
                  className="input-field pl-10"
                  placeholder="10000"
                  value={formData.budget}
                  onChange={(e) => handleChange('budget', e.target.value)}
                />
                <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Campaign Objective
              </label>
              <select
                className="input-field"
                value={formData.objective}
                onChange={(e) => handleChange('objective', e.target.value)}
              >
                <option value="conversions">Conversions</option>
                <option value="awareness">Brand Awareness</option>
                <option value="engagement">Engagement</option>
                <option value="traffic">Website Traffic</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  required
                  className="input-field pl-10"
                  value={formData.start_date}
                  onChange={(e) => handleChange('start_date', e.target.value)}
                />
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  required
                  className="input-field pl-10"
                  value={formData.end_date}
                  onChange={(e) => handleChange('end_date', e.target.value)}
                />
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Audience
            </label>
            <input
              type="text"
              className="input-field"
              placeholder="e.g., Tech professionals aged 25-45"
              value={formData.audience}
              onChange={(e) => handleChange('audience', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              className="input-field h-24 resize-none"
              placeholder="Describe your campaign goals and strategy..."
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
            />
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
              className="btn-primary"
            >
              Create Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateCampaignModal