import React from 'react'
import { 
  TrendingUp, 
  Video, 
  Target, 
  Users,
  ArrowUpRight,
  Play
} from 'lucide-react'
import { useUser } from '../context/UserContext'
import StatsCard from '../components/StatsCard'
import RecentActivity from '../components/RecentActivity'
import QuickActions from '../components/QuickActions'

const Dashboard = () => {
  const { user, campaigns } = useUser()
  
  const stats = [
    {
      title: 'Active Campaigns',
      value: campaigns.filter(c => c.status === 'active').length,
      change: '+12%',
      icon: Target,
      color: 'text-blue-600'
    },
    {
      title: 'Videos Generated',
      value: '1,247',
      change: '+23%',
      icon: Video,
      color: 'text-green-600'
    },
    {
      title: 'Total Reach',
      value: '2.4M',
      change: '+18%',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Conversion Rate',
      value: '3.42%',
      change: '+8%',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user.name}
        </h1>
        <p className="text-gray-600 mt-2">
          Here's what's happening with your video ad campaigns today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to scale your video ads?</h3>
            <p className="text-primary-100 mb-4">
              Create personalized video campaigns that convert better with our AI-powered templates.
            </p>
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Create New Campaign
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
              <Play className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard