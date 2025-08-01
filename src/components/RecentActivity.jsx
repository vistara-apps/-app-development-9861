import React from 'react'
import { Video, Target, TrendingUp, Clock } from 'lucide-react'
import { useUser } from '../context/UserContext'

const RecentActivity = () => {
  const { campaigns } = useUser()
  
  const activities = [
    {
      id: 1,
      type: 'video_generated',
      title: 'New video generated for Summer Sale 2024',
      description: 'Personalized for Tech audience',
      time: '2 minutes ago',
      icon: Video,
      color: 'text-blue-600 bg-blue-50'
    },
    {
      id: 2,
      type: 'campaign_launched',
      title: 'Campaign "Black Friday" launched',
      description: 'Targeting 50,000 users',
      time: '1 hour ago',
      icon: Target,
      color: 'text-green-600 bg-green-50'
    },
    {
      id: 3,
      type: 'performance_update',
      title: 'Summer Sale performance improved',
      description: '+15% conversion rate increase',
      time: '3 hours ago',
      icon: TrendingUp,
      color: 'text-purple-600 bg-purple-50'
    },
    {
      id: 4,
      type: 'video_generated',
      title: 'Batch generation completed',
      description: '127 personalized videos created',
      time: '5 hours ago',
      icon: Video,
      color: 'text-blue-600 bg-blue-50'
    }
  ]

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div key={activity.id} className="flex items-start space-x-4">
              <div className={`p-2 rounded-full ${activity.color}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <Clock className="h-3 w-3 text-gray-400" />
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentActivity