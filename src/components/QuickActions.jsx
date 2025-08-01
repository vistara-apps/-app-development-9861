import React from 'react'
import { Plus, Video, Target, BarChart3, Palette } from 'lucide-react'
import { Link } from 'react-router-dom'

const QuickActions = () => {
  const actions = [
    {
      title: 'Create Campaign',
      description: 'Start a new ad campaign',
      icon: Target,
      href: '/campaigns',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      title: 'Browse Templates',
      description: 'Explore video templates',
      icon: Palette,
      href: '/templates',
      color: 'text-purple-600 bg-purple-50'
    },
    {
      title: 'Generate Videos',
      description: 'Create personalized videos',
      icon: Video,
      href: '/templates',
      color: 'text-green-600 bg-green-50'
    },
    {
      title: 'View Analytics',
      description: 'Check performance metrics',
      icon: BarChart3,
      href: '/analytics',
      color: 'text-orange-600 bg-orange-50'
    }
  ]

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="space-y-3">
        {actions.map((action, index) => {
          const Icon = action.icon
          return (
            <Link
              key={index}
              to={action.href}
              className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className={`p-2 rounded-lg ${action.color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{action.title}</p>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default QuickActions