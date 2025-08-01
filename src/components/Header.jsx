import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Video, 
  BarChart3, 
  Palette, 
  Target, 
  LogOut,
  Bell,
  Settings
} from 'lucide-react'

const Header = ({ onLogout }) => {
  const location = useLocation()

  const navigation = [
    { name: 'Dashboard', href: '/', icon: BarChart3 },
    { name: 'Templates', href: '/templates', icon: Palette },
    { name: 'Campaigns', href: '/campaigns', icon: Target },
    { name: 'Analytics', href: '/analytics', icon: BarChart3 }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Video className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">ContentFactory</span>
            </div>
            <nav className="hidden md:flex ml-10 space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.href
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-md">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-md">
              <Settings className="h-5 w-5" />
            </button>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-md"
            >
              <LogOut className="h-5 w-5" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header