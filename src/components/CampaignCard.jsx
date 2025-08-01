import React from 'react'
import { 
  Calendar, 
  DollarSign, 
  Target, 
  Play, 
  Pause, 
  MoreVertical,
  TrendingUp
} from 'lucide-react'
import { format } from 'date-fns'

const CampaignCard = ({ campaign }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800'
      case 'draft': return 'bg-gray-100 text-gray-800'
      case 'paused': return 'bg-yellow-100 text-yellow-800'
      case 'completed': return 'bg-blue-100 text-blue-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="card p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${getStatusColor(campaign.status)}`}>
            {campaign.status}
          </span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <DollarSign className="h-4 w-4" />
            <span>Budget</span>
          </div>
          <span className="font-medium">${campaign.budget.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>Duration</span>
          </div>
          <span className="font-medium">
            {format(new Date(campaign.start_date), 'MMM d')} - {format(new Date(campaign.end_date), 'MMM d, yyyy')}
          </span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <Target className="h-4 w-4" />
            <span>Ads</span>
          </div>
          <span className="font-medium">{campaign.ads.length} videos</span>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-600">Performance</span>
          <TrendingUp className="h-4 w-4 text-green-600" />
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-600">Impressions</p>
            <p className="font-semibold">24.5k</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">CTR</p>
            <p className="font-semibold">3.2%</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Conversions</p>
            <p className="font-semibold">127</p>
          </div>
        </div>
      </div>

      <div className="flex space-x-2 mt-6">
        <button className="flex-1 btn-secondary text-sm flex items-center justify-center space-x-1">
          {campaign.status === 'active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          <span>{campaign.status === 'active' ? 'Pause' : 'Resume'}</span>
        </button>
        <button className="flex-1 btn-primary text-sm">
          View Details
        </button>
      </div>
    </div>
  )
}

export default CampaignCard