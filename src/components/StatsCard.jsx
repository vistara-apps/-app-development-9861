import React from 'react'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

const StatsCard = ({ title, value, change, icon: Icon, color }) => {
  const isPositive = change.startsWith('+')
  
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-2 rounded-lg bg-gray-50`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
        <div className={`flex items-center space-x-1 text-sm ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}>
          {isPositive ? (
            <ArrowUpRight className="h-4 w-4" />
          ) : (
            <ArrowDownRight className="h-4 w-4" />
          )}
          <span>{change}</span>
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
        <p className="text-gray-600 text-sm">{title}</p>
      </div>
    </div>
  )
}

export default StatsCard